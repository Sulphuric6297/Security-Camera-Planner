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

/**
 * Tree canopies: green and darker/rougher than the lawn around them. Big wooded areas become
 * several trees on a grid, so the woods still block views without one giant blob.
 */
export const detectTrees = (img: DetectImage, opts: Opts & { maxTrees?: number }): DetectedTree[] => {
  const { width: w, height: h, data } = img;
  const mpp = opts.metersPerPx;
  const luma = new Float32Array(w * h);
  const veg = new Uint8Array(w * h);
  let vegCount = 0;
  for (let i = 0, p = 0; i < w * h; i++, p += 4) {
    const r = data[p], g = data[p + 1], b = data[p + 2];
    luma[i] = 0.299 * r + 0.587 * g + 0.114 * b;
    const exg = 2 * g - r - b;
    if (exg > 14 && g / (r + g + b + 1) > 0.36 && !(opts.exclude && opts.exclude(i % w, (i / w) | 0))) {
      veg[i] = 1;
      vegCount++;
    }
  }
  if (vegCount < 140) return [];
  // Judge brightness and texture over about a meter: a lawn's pixel noise averages out, a canopy
  // stays darker (shaded leaves) and lumpy. Shadows on a lawn are dark but smooth.
  const win = Math.max(1, Math.round(1 / mpp));
  const { mean, std } = localStats(luma, w, h, win);
  const vegMeans: number[] = [];
  for (let i = 0; i < w * h; i += 7) if (veg[i]) vegMeans.push(mean[i]);
  vegMeans.sort((a, b) => a - b);
  // Reference: the brighter vegetation (lawn), even on a mostly wooded lot.
  const lawn = vegMeans[Math.floor(vegMeans.length * 0.7)];
  let mask: Uint8Array = new Uint8Array(w * h);
  for (let i = 0; i < w * h; i++) {
    if (veg[i] && mean[i] < lawn * 0.86 && std[i] / Math.max(mean[i], 1) > 0.14) mask[i] = 1;
  }
  // Drop thin strips (edges of shadows and paths), then fill gaps between leaf clumps.
  mask = open(mask, w, h, win);
  mask = close(mask, w, h, Math.max(1, Math.round(0.6 / mpp)));
  const minR = 1.8 / mpp; // a 3.6 m crown at least
  const comps = components(mask, w, h, Math.round(Math.PI * minR * minR));
  const maxR = 7 / mpp;
  const trees: DetectedTree[] = [];
  comps
    .sort((a, b) => b.length - a.length)
    .forEach(comp => {
      const r = Math.sqrt(comp.length / Math.PI);
      if (r <= maxR) {
        let sx = 0, sy = 0;
        for (const k of comp) { sx += k % w; sy += (k / w) | 0; }
        trees.push({ x: sx / comp.length, y: sy / comp.length, radiusPx: r });
        return;
      }
      // Woods: trees ~10 m apart over the area
      const inComp = new Set(comp);
      let minX = w, minY = h, maxX = 0, maxY = 0;
      for (const k of comp) {
        const x = k % w, y = (k / w) | 0;
        minX = Math.min(minX, x); maxX = Math.max(maxX, x); minY = Math.min(minY, y); maxY = Math.max(maxY, y);
      }
      const step = 10 / mpp;
      let row = 0;
      for (let y = minY + step / 2; y <= maxY; y += step * 0.87, row++) {
        for (let x = minX + step / 2 + (row % 2 ? step / 2 : 0); x <= maxX; x += step) {
          if (inComp.has(Math.round(y) * w + Math.round(x))) trees.push({ x, y, radiusPx: 5.5 / mpp });
        }
      }
    });
  return trees.slice(0, opts.maxTrees ?? 200);
};

/**
 * Parked vehicles: car-sized, car-shaped blobs that stand out from the pavement around them
 * (bright, dark or colorful paint on grey asphalt/concrete). These are suggestions to confirm.
 */
export const detectVehicles = (img: DetectImage, opts: Opts & { maxVehicles?: number }): DetectedVehicle[] => {
  const { width: w, height: h, data } = img;
  const mpp = opts.metersPerPx;
  const pave = new Uint8Array(w * h);
  const paint = new Uint8Array(w * h);
  for (let i = 0, p = 0; i < w * h; i++, p += 4) {
    const r = data[p], g = data[p + 1], b = data[p + 2];
    const mx = Math.max(r, g, b), mn = Math.min(r, g, b);
    const l = 0.299 * r + 0.587 * g + 0.114 * b;
    const green = 2 * g - r - b > 14;
    const excluded = opts.exclude ? opts.exclude(i % w, (i / w) | 0) : false;
    if (excluded || green) continue;
    if (mx - mn < 22 && l > 70 && l < 200) pave[i] = 1;
    else if (l > 215 || l < 50 || mx - mn > 55) paint[i] = 1;
  }
  const minArea = 4.5 / (mpp * mpp);
  const maxArea = 16 / (mpp * mpp);
  const comps = components(paint, w, h, Math.round(minArea));
  const out: DetectedVehicle[] = [];
  for (const comp of comps) {
    if (comp.length > maxArea) continue;
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
    const lengthM = lengthPx * mpp, widthM = widthPx * mpp;
    if (lengthM < 3.2 || lengthM > 6.5 || widthM < 1.4 || widthM > 2.6) continue;
    const aspect = lengthM / widthM;
    if (aspect < 1.6 || aspect > 3.6) continue;
    if (comp.length / (lengthPx * widthPx) < 0.6) continue;
    // Must sit on pavement: check a ring around it
    let ring = 0, paved = 0;
    const rr = Math.max(lengthPx, widthPx) * 0.5 + 2 / mpp;
    for (let a = 0; a < 24; a++) {
      const x = Math.round(cx + Math.cos((a / 24) * Math.PI * 2) * rr);
      const y = Math.round(cy + Math.sin((a / 24) * Math.PI * 2) * rr);
      if (x < 0 || y < 0 || x >= w || y >= h) continue;
      ring++;
      if (pave[y * w + x] || paint[y * w + x]) paved++;
    }
    if (ring === 0 || paved / ring < 0.45) continue;
    const angleDeg = (Math.atan2(l1 - xx, xy || 1e-9) * 180) / Math.PI;
    out.push({ x: cx, y: cy, lengthPx, widthPx, angleDeg: Number.isFinite(angleDeg) ? angleDeg : 0 });
  }
  return out.slice(0, opts.maxVehicles ?? 60);
};
