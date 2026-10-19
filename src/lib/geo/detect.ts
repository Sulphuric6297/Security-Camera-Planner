// Finds trees and parked vehicles in an aerial photo, so they can be suggested on import.
// Pure functions over RGBA pixels; callers convert pixels to map coordinates.

export type DetectImage = { data: Uint8ClampedArray | Uint8Array; width: number; height: number };
export type DetectedTree = { x: number; y: number; radiusPx: number };
export type DetectedVehicle = { x: number; y: number; lengthPx: number; widthPx: number; angleDeg: number };

type Opts = {
  metersPerPx: number;
  /** Pixels to ignore (e.g. inside building footprints). */
  exclude?: (x: number, y: number) => boolean;
};

/** Box mean and standard deviation of a channel over a (2r+1)^2 window, via integral images. */
const localStats = (v: Float32Array, w: number, h: number, r: number) => {
  const W = w + 1;
  const sum = new Float64Array(W * (h + 1));
  const sq = new Float64Array(W * (h + 1));
  for (let y = 0; y < h; y++) {
    let rs = 0;
    let rq = 0;
    for (let x = 0; x < w; x++) {
      const a = v[y * w + x];
      rs += a;
      rq += a * a;
      sum[(y + 1) * W + x + 1] = sum[y * W + x + 1] + rs;
      sq[(y + 1) * W + x + 1] = sq[y * W + x + 1] + rq;
    }
  }
  const mean = new Float32Array(w * h);
  const std = new Float32Array(w * h);
  for (let y = 0; y < h; y++) {
    const y0 = Math.max(0, y - r), y1 = Math.min(h, y + r + 1);
    for (let x = 0; x < w; x++) {
      const x0 = Math.max(0, x - r), x1 = Math.min(w, x + r + 1);
      const n = (y1 - y0) * (x1 - x0);
      const s = sum[y1 * W + x1] - sum[y0 * W + x1] - sum[y1 * W + x0] + sum[y0 * W + x0];
      const q = sq[y1 * W + x1] - sq[y0 * W + x1] - sq[y1 * W + x0] + sq[y0 * W + x0];
      const m = s / n;
      mean[y * w + x] = m;
      std[y * w + x] = Math.sqrt(Math.max(0, q / n - m * m));
    }
  }
  return { mean, std };
};

/** Connected components (4-neighbour) of a mask; returns pixel index lists. */
const components = (mask: Uint8Array, w: number, h: number, minSize: number) => {
  const seen = new Uint8Array(w * h);
  const out: number[][] = [];
  const stack: number[] = [];
  for (let i = 0; i < mask.length; i++) {
    if (!mask[i] || seen[i]) continue;
    const comp: number[] = [];
    stack.push(i);
    seen[i] = 1;
    while (stack.length) {
      const k = stack.pop()!;
      comp.push(k);
      const x = k % w;
      const y = (k - x) / w;
      if (x > 0 && mask[k - 1] && !seen[k - 1]) { seen[k - 1] = 1; stack.push(k - 1); }
      if (x < w - 1 && mask[k + 1] && !seen[k + 1]) { seen[k + 1] = 1; stack.push(k + 1); }
      if (y > 0 && mask[k - w] && !seen[k - w]) { seen[k - w] = 1; stack.push(k - w); }
      if (y < h - 1 && mask[k + w] && !seen[k + w]) { seen[k + w] = 1; stack.push(k + w); }
    }
    if (comp.length >= minSize) out.push(comp);
  }
  return out;
};

/** Square-window morphology via an integral image: O(pixels) for any radius. */
const morph = (mask: Uint8Array, w: number, h: number, r: number, op: "grow" | "shrink"): Uint8Array => {
  if (r <= 0) return mask;
  const W = w + 1;
  const sum = new Uint32Array(W * (h + 1));
  for (let y = 0; y < h; y++) {
    let row = 0;
    for (let x = 0; x < w; x++) {
      row += mask[y * w + x];
      sum[(y + 1) * W + x + 1] = sum[y * W + x + 1] + row;
    }
  }
  const out = new Uint8Array(w * h);
  for (let y = 0; y < h; y++) {
    const y0 = Math.max(0, y - r), y1 = Math.min(h, y + r + 1);
    for (let x = 0; x < w; x++) {
      const x0 = Math.max(0, x - r), x1 = Math.min(w, x + r + 1);
      const n = sum[y1 * W + x1] - sum[y0 * W + x1] - sum[y1 * W + x0] + sum[y0 * W + x0];
      out[y * w + x] = op === "grow" ? (n > 0 ? 1 : 0) : (n === (y1 - y0) * (x1 - x0) ? 1 : 0);
    }
  }
  return out;
};
/** Fill small gaps (grow, then shrink). */
const close = (m: Uint8Array, w: number, h: number, r: number) => morph(morph(m, w, h, r, "grow"), w, h, r, "shrink");
/** Remove thin bits (shrink, then grow). */
const open = (m: Uint8Array, w: number, h: number, r: number) => morph(morph(m, w, h, r, "shrink"), w, h, r, "grow");

/** Distance (pixels) from each set pixel to the nearest unset one (chamfer 3-4, ~exact to 8%). */
const distanceTransform = (mask: Uint8Array, w: number, h: number) => {
  const INF = 1e9;
  const d = new Float32Array(w * h);
  for (let i = 0; i < w * h; i++) d[i] = mask[i] ? INF : 0;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const i = y * w + x;
    if (!d[i]) continue;
    let v = d[i];
    if (x > 0) v = Math.min(v, d[i - 1] + 3); else v = Math.min(v, 3);
    if (y > 0) {
      v = Math.min(v, d[i - w] + 3);
      if (x > 0) v = Math.min(v, d[i - w - 1] + 4);
      if (x < w - 1) v = Math.min(v, d[i - w + 1] + 4);
    } else v = Math.min(v, 3);
    d[i] = v;
  }
  for (let y = h - 1; y >= 0; y--) for (let x = w - 1; x >= 0; x--) {
    const i = y * w + x;
    if (!d[i]) continue;
    let v = d[i];
    if (x < w - 1) v = Math.min(v, d[i + 1] + 3); else v = Math.min(v, 3);
    if (y < h - 1) {
      v = Math.min(v, d[i + w] + 3);
      if (x < w - 1) v = Math.min(v, d[i + w + 1] + 4);
      if (x > 0) v = Math.min(v, d[i + w - 1] + 4);
    } else v = Math.min(v, 3);
    d[i] = v;
  }
  for (let i = 0; i < w * h; i++) d[i] /= 3;
  return d;
};

// How much a sunlit crown top counts next to depth inside the canopy (tuned on labelled NEON aerial
// photos: about 55% of crowns found in dense forest, where crowns touch).
const TREE_LIT = 3;
// Texture thresholds (also tuned on those photos): fine-texture scale, how busy dark canopy must
// be, and the gradient coherence above which a busy patch is an edge, not leaves.
const TEX_SCALE = 6;
const DARK_TEX = 0.22;
const EDGE_MAX = 0.8;
/** Box blur of a float image over a (2r+1)^2 window. */
const blur = (v: Float32Array, w: number, h: number, r: number) => localStats(v, w, h, r).mean;

/**
 * Tree canopies, one detection per crown. Vegetation that is darker or more textured than the
 * lawn around it is canopy (leaves shade each other; grass is smooth and bright); touching crowns
 * are split at the "necks" between them, using each pixel's distance to the canopy's edge.
 */
export const detectTrees = (img: DetectImage, opts: Opts & { maxTrees?: number }): DetectedTree[] => {
  const { width: w, height: h, data } = img;
  const mpp = opts.metersPerPx;
  const n = w * h;
  const luma = new Float32Array(n);
  const veg = new Uint8Array(n);
  let vegCount = 0;
  for (let i = 0, p = 0; i < n; i++, p += 4) {
    const r = data[p], g = data[p + 1], b = data[p + 2];
    luma[i] = 0.299 * r + 0.587 * g + 0.114 * b;
    const sum = r + g + b + 1;
    const exg = (2 * g - r - b) / sum;
    // Green: leaves and grass, from sunlit yellow-green to dark blue-green conifers.
    if (exg > 0.035 && g >= r * 0.92 && g > b * 0.95 && luma[i] < 235 && !(opts.exclude && opts.exclude(i % w, (i / w) | 0))) {
      veg[i] = 1;
      vegCount++;
    }
  }
  if (vegCount < 60) return [];
  // Brightness over about half a meter, and fine texture: how much each pixel differs from its
  // immediate neighbours, averaged over that area (leaves flicker everywhere; a shadow's edge is
  // one line, so it hardly counts).
  const win = Math.max(1, Math.round(0.5 / mpp));
  const { mean } = localStats(luma, w, h, win);
  // Clumps of leaves (a few pixels across), not single-pixel noise: smooth a little first, then
  // take how much each pixel differs from its surroundings, averaged over the window.
  const soft = localStats(luma, w, h, 1).mean;
  const around = localStats(soft, w, h, Math.max(2, Math.round(0.6 / mpp))).mean;
  const hp = new Float32Array(n);
  for (let i = 0; i < n; i++) hp[i] = Math.abs(soft[i] - around[i]);
  const fine = localStats(hp, w, h, win).mean;
  const std = fine.map(v => v * TEX_SCALE);
  // Edge or texture? Along a shadow's edge every brightness change points the same way; among
  // leaves they point every which way (gradient coherence, from the structure tensor).
  const gxx = new Float32Array(n), gyy = new Float32Array(n), gxy = new Float32Array(n);
  for (let y = 1; y < h - 1; y++) for (let x = 1; x < w - 1; x++) {
    const i = y * w + x;
    const gx = soft[i + 1] - soft[i - 1], gy = soft[i + w] - soft[i - w];
    gxx[i] = gx * gx; gyy[i] = gy * gy; gxy[i] = gx * gy;
  }
  const jxx = localStats(gxx, w, h, win).mean, jyy = localStats(gyy, w, h, win).mean, jxy = localStats(gxy, w, h, win).mean;
  const coherence = (i: number) => {
    const t = jxx[i] + jyy[i];
    return t > 1e-6 ? Math.sqrt((jxx[i] - jyy[i]) ** 2 + 4 * jxy[i] * jxy[i]) / t : 0;
  };
  // The lawn: the bright, smooth end of the vegetation.
  const brightSmooth: number[] = [];
  for (let i = 0; i < n; i += 3) if (veg[i] && std[i] / Math.max(mean[i], 1) < 0.12) brightSmooth.push(mean[i]);
  const all: number[] = [];
  for (let i = 0; i < n; i += 3) if (veg[i]) all.push(mean[i]);
  const pick = (a: number[], q: number) => (a.sort((x, y) => x - y), a[Math.min(a.length - 1, Math.floor(a.length * q))]);
  const lawn = brightSmooth.length > 50 ? pick(brightSmooth, 0.6) : pick(all, 0.85);
  // Shadows on the lawn: dark but smooth. Their edges look busy (a sharp step from shade to sun),
  // so nothing next to a shadow counts as canopy just for being busy.
  const shade = new Uint8Array(n);
  for (let i = 0; i < n; i++) if (mean[i] < lawn * 0.75 && std[i] / Math.max(mean[i], 1) < DARK_TEX * 0.5) shade[i] = 1;
  // (The busy band reaches as far as the texture windows do.)
  const nearShade = morph(shade, w, h, 2 * (Math.max(2, Math.round(0.6 / mpp)) + win) + 1, "grow");
  let mask: Uint8Array = new Uint8Array(n);
  for (let i = 0; i < n; i++) {
    if (!veg[i]) continue;
    // Leaves are lumpy: a shadow on the lawn is as dark, but smooth.
    const cov = std[i] / Math.max(mean[i], 1);
    const dark = mean[i] < lawn * 0.8 && cov > DARK_TEX && coherence(i) < EDGE_MAX;
    const rough = cov > 0.16 && mean[i] < lawn * 0.92 && !nearShade[i] && coherence(i) < EDGE_MAX;
    if (dark || rough) mask[i] = 1;
  }
  // Clean up: drop specks and thin strips, fill the gaps between leaf clumps.
  const r1 = Math.max(1, Math.round(0.45 / mpp));
  mask = close(mask, w, h, r1);
  mask = open(mask, w, h, r1);
  // Fill small holes inside crowns (gaps in the leaves), so each crown is one solid shape.
  {
    const inv = new Uint8Array(n);
    for (let i = 0; i < n; i++) inv[i] = mask[i] ? 0 : 1;
    const maxHole = Math.PI * (1.5 / mpp) ** 2;
    for (const hole of components(inv, w, h, 1)) {
      if (hole.length > maxHole) continue;
      if (hole.some(k => { const x = k % w, y = (k / w) | 0; return x === 0 || y === 0 || x === w - 1 || y === h - 1; })) continue;
      for (const k of hole) mask[k] = 1;
    }
  }
  const dt = distanceTransform(mask, w, h);
  // Crown tops: deep inside the canopy and sunlit (treetops catch the light).
  const lit = new Float32Array(n);
  for (let i = 0; i < n; i++) lit[i] = mask[i] ? luma[i] : 0;
  const litS = blur(lit, w, h, Math.max(1, Math.round(0.6 / mpp)));
  const score = new Float32Array(n);
  for (let i = 0; i < n; i++) score[i] = mask[i] ? Math.min(dt[i], 2.5 / mpp) / (2.5 / mpp) + TREE_LIT * litS[i] / Math.max(lawn, 1) : 0;
  const sdt = blur(score, w, h, Math.max(1, Math.round(0.3 / mpp)));
  // Crown centers: peaks of the (smoothed) distance to the canopy edge.
  const minR = 1.1 / mpp;
  const peaks: { x: number; y: number; d: number }[] = [];
  const nb = Math.max(1, Math.round(1.2 / mpp));
  for (let y = nb; y < h - nb; y++) {
    for (let x = nb; x < w - nb; x++) {
      const i = y * w + x;
      const v = sdt[i];
      if (dt[i] < minR * 0.8 || !mask[i]) continue;
      let peak = true;
      for (let dy = -nb; dy <= nb && peak; dy++) for (let dx = -nb; dx <= nb; dx++) {
        if ((dx || dy) && sdt[i + dy * w + dx] > v) { peak = false; break; }
      }
      if (peak) peaks.push({ x, y, d: dt[i] });
    }
  }
  // Keep the biggest first; a smaller peak inside an accepted crown is the same tree. The canopy
  // mask loses a rim at the crown's edge (texture windows straddle it): allow for it.
  const rim = win + 1;
  peaks.sort((a, b) => b.d - a.d);
  const trees: (DetectedTree & { d: number })[] = [];
  for (const p of peaks) {
    const radius = Math.min(Math.max(p.d * 1.25 + rim * 0.5, minR), 9 / mpp);
    // Same crown as one already found (peaks inside its crown).
    if (trees.some(t => Math.hypot(t.x - p.x, t.y - p.y) < Math.max((t.radiusPx + rim) * 0.95, 2.2 / mpp))) continue;
    trees.push({ x: p.x, y: p.y, radiusPx: radius, d: p.d });
  }
  // Center each crown on its canopy (the peak can sit on the sunny side).
  for (let pass = 0; pass < 3; pass++) for (const t of trees) {
    const r = Math.ceil(t.radiusPx * 0.8);
    let sx = 0, sy = 0, c = 0;
    for (let y = Math.max(0, Math.round(t.y) - r); y <= Math.min(h - 1, Math.round(t.y) + r); y++) {
      for (let x = Math.max(0, Math.round(t.x) - r); x <= Math.min(w - 1, Math.round(t.x) + r); x++) {
        if (mask[y * w + x] && (x - t.x) ** 2 + (y - t.y) ** 2 <= r * r) { sx += x; sy += y; c++; }
      }
    }
    if (c > 0) { t.x = sx / c; t.y = sy / c; }
  }
  // A canopy patch holding a single tree is that tree: use its center and size.
  const label = new Int32Array(n).fill(-1);
  const patches = components(mask, w, h, 1);
  patches.forEach((c, k) => { for (const i of c) label[i] = k; });
  const perPatch = new Map<number, number[]>();
  trees.forEach((t, j) => {
    const k = label[Math.round(t.y) * w + Math.round(t.x)];
    if (k >= 0) perPatch.set(k, [...(perPatch.get(k) ?? []), j]);
  });
  for (const [k, list] of perPatch) {
    if (list.length !== 1) continue;
    const c = patches[k];
    let sx = 0, sy = 0;
    for (const i of c) { sx += i % w; sy += (i / w) | 0; }
    const t = trees[list[0]];
    t.x = sx / c.length;
    t.y = sy / c.length;
    t.radiusPx = Math.min(Math.sqrt(c.length / Math.PI) + rim * 0.5, 9 / mpp);
  }
  return trees.slice(0, opts.maxTrees ?? 300).map(({ x, y, radiusPx }) => ({ x, y, radiusPx }));
};

/** Mean of v over a (2r+1)^2 window, counting only pixels where m is set (and how many there were). */
const maskedMean = (v: Float32Array, m: Uint8Array, w: number, h: number, r: number) => {
  const W = w + 1;
  const sv = new Float64Array(W * (h + 1));
  const sm = new Float64Array(W * (h + 1));
  for (let y = 0; y < h; y++) {
    let rv = 0, rm = 0;
    for (let x = 0; x < w; x++) {
      const i = y * w + x;
      if (m[i]) { rv += v[i]; rm += 1; }
      sv[(y + 1) * W + x + 1] = sv[y * W + x + 1] + rv;
      sm[(y + 1) * W + x + 1] = sm[y * W + x + 1] + rm;
    }
  }
  const mean = new Float32Array(w * h);
  const share = new Float32Array(w * h);
  for (let y = 0; y < h; y++) {
    const y0 = Math.max(0, y - r), y1 = Math.min(h, y + r + 1);
    for (let x = 0; x < w; x++) {
      const x0 = Math.max(0, x - r), x1 = Math.min(w, x + r + 1);
      const c = sm[y1 * W + x1] - sm[y0 * W + x1] - sm[y1 * W + x0] + sm[y0 * W + x0];
      const s = sv[y1 * W + x1] - sv[y0 * W + x1] - sv[y1 * W + x0] + sv[y0 * W + x0];
      mean[y * w + x] = c > 0 ? s / c : 0;
      share[y * w + x] = c / ((y1 - y0) * (x1 - x0));
    }
  }
  return { mean, share };
};

/**
 * Parked vehicles: car-sized, car-shaped things that stand out from the pavement around them, in
 * any paint (white, black, silver, grey, colors), alone on a driveway or side by side in a lot.
 * Each pixel is compared with the pavement around it (not a fixed brightness), so silver cars on
 * pale concrete and dark cars on fresh asphalt both show; rows of touching cars are split into
 * single cars. These are suggestions the user can remove.
 */
export const detectVehicles = (img: DetectImage, opts: Opts & { maxVehicles?: number }): DetectedVehicle[] => {
  const { width: w, height: h, data } = img;
  const mpp = opts.metersPerPx;
  const n = w * h;
  const R = new Float32Array(n), G = new Float32Array(n), B = new Float32Array(n), L = new Float32Array(n);
  const ground = new Uint8Array(n); // pavement-like (grey, not green): the background cars sit on
  const usable = new Uint8Array(n); // not vegetation, not a building
  for (let i = 0, p = 0; i < n; i++, p += 4) {
    const r = data[p], g = data[p + 1], b = data[p + 2];
    R[i] = r; G[i] = g; B[i] = b;
    L[i] = 0.299 * r + 0.587 * g + 0.114 * b;
    const green = (2 * g - r - b) / (r + g + b + 1) > 0.04 && g > r;
    const excluded = opts.exclude ? opts.exclude(i % w, (i / w) | 0) : false;
    if (green || excluded) continue;
    usable[i] = 1;
    const chroma = Math.max(r, g, b) - Math.min(r, g, b);
    if (chroma < 28 && L[i] > 45 && L[i] < 225) ground[i] = 1;
  }
  // The pavement's color around each pixel, over ~7 m (wider than a row of cars is deep).
  const bgR = Math.max(3, Math.round(3.5 / mpp));
  const mr = maskedMean(R, ground, w, h, bgR);
  const mg = maskedMean(G, ground, w, h, bgR).mean;
  const mb = maskedMean(B, ground, w, h, bgR).mean;
  const { std } = localStats(L, w, h, Math.max(1, Math.round(0.4 / mpp)));
  let mask: Uint8Array = new Uint8Array(n);
  for (let i = 0; i < n; i++) {
    if (!usable[i] || mr.share[i] < 0.12) continue;
    const dr = R[i] - mr.mean[i], dg = G[i] - mg[i], db = B[i] - mb[i];
    const diff = Math.sqrt(dr * dr + dg * dg + db * db);
    // Shadow on the pavement: the same grey, just darker and smooth (not a car).
    const bgL = 0.299 * mr.mean[i] + 0.587 * mg[i] + 0.114 * mb[i];
    const chroma = Math.max(R[i], G[i], B[i]) - Math.min(R[i], G[i], B[i]);
    if (L[i] > bgL * 0.46 && L[i] < bgL * 0.75 && chroma < 18 && std[i] < 12) continue;
    // Clearly a different color from the pavement, or busy (glass, roof, trim) and somewhat different.
    if (diff > 30 || (std[i] > 14 && diff > 16)) mask[i] = 1;
  }
  // Drop painted lines and cracks (thin), fill the small gaps inside a car (windows, roof edges).
  mask = open(mask, w, h, Math.max(1, Math.round(0.4 / mpp)));
  mask = close(mask, w, h, Math.max(1, Math.round(0.25 / mpp)));
  const comps = components(mask, w, h, Math.round(3 / (mpp * mpp)));
  const out: DetectedVehicle[] = [];
  const fitsCar = (len: number, wid: number) => len >= 3.2 && len <= 6.6 && wid >= 1.3 && wid <= 2.9 && len / wid >= 1.4 && len / wid <= 4;
  for (const comp of comps) {
    // Shape from second moments
    let sx = 0, sy = 0;
    for (const k of comp) { sx += k % w; sy += (k / w) | 0; }
    const cx = sx / comp.length, cy = sy / comp.length;
    let xx = 0, yy = 0, xy = 0;
    for (const k of comp) {
      const dx = (k % w) - cx, dy = ((k / w) | 0) - cy;
      xx += dx * dx; yy += dy * dy; xy += dx * dy;
    }
    xx /= comp.length; yy /= comp.length; xy /= comp.length;
    const tr = xx + yy;
    const det = xx * yy - xy * xy;
    const disc = Math.sqrt(Math.max(0, (tr * tr) / 4 - det));
    const l1 = tr / 2 + disc, l2 = Math.max(1e-6, tr / 2 - disc);
    // A filled rectangle of length L has variance L^2/12 along it.
    const lengthPx = Math.sqrt(12 * l1);
    const widthPx = Math.sqrt(12 * l2);
    const fill = comp.length / (lengthPx * widthPx);
    const lengthM = lengthPx * mpp, widthM = widthPx * mpp;
    if (fill < 0.55) continue;
    const axis = Math.atan2(l1 - xx, xy || 1e-9); // long axis angle (radians)
    const ax = Math.cos(axis), ay = Math.sin(axis);
    const angleDeg = (axis * 180) / Math.PI;
    if (fitsCar(lengthM, widthM)) {
      out.push({ x: cx, y: cy, lengthPx, widthPx, angleDeg });
      continue;
    }
    // Several cars touching: side by side in a lot (strip as deep as a car is long), or nose to
    // tail along a street (strip as wide as a car).
    if (widthM > 3.3 && widthM <= 6.6 && lengthM >= 4.2) {
      const count = Math.round(lengthM / 2.7);
      if (count < 2 || count > 40) continue;
      const step = lengthPx / count;
      for (let k = 0; k < count; k++) {
        const t = (k - (count - 1) / 2) * step;
        out.push({ x: cx + ax * t, y: cy + ay * t, lengthPx: widthPx, widthPx: step * 0.85, angleDeg: angleDeg + 90 });
      }
    } else if (widthM >= 1.3 && widthM <= 3.3 && lengthM > 6.6) {
      const count = Math.round(lengthM / 5.4);
      if (count < 2 || count > 20) continue;
      const step = lengthPx / count;
      for (let k = 0; k < count; k++) {
        const t = (k - (count - 1) / 2) * step;
        out.push({ x: cx + ax * t, y: cy + ay * t, lengthPx: step * 0.92, widthPx, angleDeg });
      }
    }
  }
  return out.slice(0, opts.maxVehicles ?? 80);
};
