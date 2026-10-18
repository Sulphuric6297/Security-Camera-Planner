// Click-a-roof building detection on an aerial image.
// Region-grows from the clicked pixel over similar roof colors (more tolerant to brightness than hue,
// so both sides of a pitched roof join), cleans up the mask, and fits a minimum-area rotated rectangle.

export type TraceResult = {
  /** Rectangle corners in image pixels, clockwise. */
  corners: { x: number; y: number }[];
  /** Region size in pixels and how much of the rectangle it fills (0-1). */
  pixelCount: number;
  fill: number;
};

type Options = {
  /** Max distance from the click to search, in pixels. */
  maxRadius: number;
  /** Ignore regions smaller than this many pixels. */
  minPixels: number;
  /** Color tolerance (weighted Lab distance). */
  tolerance?: number;
};

const toLab = (r: number, g: number, b: number) => {
  // sRGB -> linear -> XYZ (D65) -> Lab
  const lin = (c: number) => {
    const v = c / 255;
    return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  const R = lin(r);
  const G = lin(g);
  const B = lin(b);
  const X = (R * 0.4124 + G * 0.3576 + B * 0.1805) / 0.95047;
  const Y = R * 0.2126 + G * 0.7152 + B * 0.0722;
  const Z = (R * 0.0193 + G * 0.1192 + B * 0.9505) / 1.08883;
  const f = (t: number) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116);
  const fx = f(X);
  const fy = f(Y);
  const fz = f(Z);
  return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)];
};

const convexHull = (pts: { x: number; y: number }[]) => {
  const p = pts.slice().sort((a, b) => a.x - b.x || a.y - b.y);
  if (p.length < 3) return p;
  const cross = (o: { x: number; y: number }, a: { x: number; y: number }, b: { x: number; y: number }) =>
    (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
  const lower: typeof p = [];
  for (const pt of p) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], pt) <= 0) lower.pop();
    lower.push(pt);
  }
  const upper: typeof p = [];
  for (let i = p.length - 1; i >= 0; i--) {
    const pt = p[i];
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], pt) <= 0) upper.pop();
    upper.push(pt);
  }
  return lower.slice(0, -1).concat(upper.slice(0, -1));
};

/** Minimum-area enclosing rectangle of a convex hull (rotating the hull to each edge direction). */
const minAreaRect = (hull: { x: number; y: number }[]) => {
  let best: { area: number; angle: number; minU: number; maxU: number; minV: number; maxV: number } | null = null;
  for (let i = 0; i < hull.length; i++) {
    const a = hull[i];
    const b = hull[(i + 1) % hull.length];
    const angle = Math.atan2(b.y - a.y, b.x - a.x);
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    let minU = Infinity, maxU = -Infinity, minV = Infinity, maxV = -Infinity;
    for (const p of hull) {
      const u = p.x * c + p.y * s;
      const v = -p.x * s + p.y * c;
      minU = Math.min(minU, u); maxU = Math.max(maxU, u);
      minV = Math.min(minV, v); maxV = Math.max(maxV, v);
    }
    const area = (maxU - minU) * (maxV - minV);
    if (!best || area < best.area) best = { area, angle, minU, maxU, minV, maxV };
  }
  if (!best) return null;
  const c = Math.cos(best.angle);
  const s = Math.sin(best.angle);
  const toXY = (u: number, v: number) => ({ x: u * c - v * s, y: u * s + v * c });
  return {
    area: best.area,
    corners: [toXY(best.minU, best.minV), toXY(best.maxU, best.minV), toXY(best.maxU, best.maxV), toXY(best.minU, best.maxV)]
  };
};

export const traceRoof = (image: ImageData, seedX: number, seedY: number, options: Options): TraceResult | null => {
  const { width, height, data } = image;
  const sx = Math.round(seedX);
  const sy = Math.round(seedY);
  if (sx < 0 || sy < 0 || sx >= width || sy >= height) return null;
  const R = Math.ceil(options.maxRadius);
  const x0 = Math.max(0, sx - R);
  const y0 = Math.max(0, sy - R);
  const x1 = Math.min(width - 1, sx + R);
  const y1 = Math.min(height - 1, sy + R);
  const w = x1 - x0 + 1;
  const h = y1 - y0 + 1;

  // Lab for the search window, lightly blurred (3x3 box) to smooth shingle texture.
  const lab = new Float32Array(w * h * 3);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let r = 0, g = 0, b = 0, n = 0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const ix = Math.min(width - 1, Math.max(0, x0 + x + dx));
          const iy = Math.min(height - 1, Math.max(0, y0 + y + dy));
          const k = (iy * width + ix) * 4;
          r += data[k]; g += data[k + 1]; b += data[k + 2]; n++;
        }
      }
      const [L, A, B] = toLab(r / n, g / n, b / n);
      const o = (y * w + x) * 3;
      lab[o] = L; lab[o + 1] = A; lab[o + 2] = B;
    }
  }

  const at = (x: number, y: number) => (y * w + x) * 3;
  // Seed color: mean of a 5x5 patch at the click.
  let sL = 0, sA = 0, sB = 0, sn = 0;
  for (let dy = -2; dy <= 2; dy++) {
    for (let dx = -2; dx <= 2; dx++) {
      const x = Math.min(w - 1, Math.max(0, sx - x0 + dx));
      const y = Math.min(h - 1, Math.max(0, sy - y0 + dy));
      const o = at(x, y);
      sL += lab[o]; sA += lab[o + 1]; sB += lab[o + 2]; sn++;
    }
  }
  sL /= sn; sA /= sn; sB /= sn;

  const tol = options.tolerance ?? 16;
  // Brightness varies a lot across a pitched roof (sun vs shade); hue/chroma much less.
  const dist = (o: number) => {
    const dL = (lab[o] - sL) * 0.45;
    const dA = lab[o + 1] - sA;
    const dB = lab[o + 2] - sB;
    return Math.sqrt(dL * dL + dA * dA + dB * dB);
  };

  const mask = new Uint8Array(w * h);
  const queue = new Int32Array(w * h);
  let qh = 0, qt = 0;
  const seed = (sy - y0) * w + (sx - x0);
  mask[seed] = 1;
  queue[qt++] = seed;
  const maxPixels = Math.floor(Math.PI * R * R * 0.8);
  let count = 0;
  while (qh < qt && count < maxPixels) {
    const idx = queue[qh++];
    count++;
    const x = idx % w;
    const y = (idx - x) / w;
    const neighbors = [idx - 1, idx + 1, idx - w, idx + w];
    for (let k = 0; k < 4; k++) {
      const n = neighbors[k];
      if (k === 0 && x === 0) continue;
      if (k === 1 && x === w - 1) continue;
      if (k === 2 && y === 0) continue;
      if (k === 3 && y === h - 1) continue;
      if (mask[n]) continue;
      const nx = n % w;
      const ny = (n - nx) / w;
      if ((nx + x0 - sx) ** 2 + (ny + y0 - sy) ** 2 > R * R) continue;
      // Stop at strong edges between neighbors (roof outline) as well as at color changes.
      const step = Math.hypot(lab[at(nx, ny)] - lab[at(x, y)], lab[at(nx, ny) + 1] - lab[at(x, y) + 1], lab[at(nx, ny) + 2] - lab[at(x, y) + 2]);
      if (step > tol * 1.1) continue;
      if (dist(at(nx, ny)) > tol) continue;
      mask[n] = 1;
      queue[qt++] = n;
    }
  }
  if (count < options.minPixels) return null;
  // If it flooded the whole search area, it wasn't a roof (lawn, pavement...).
  if (count >= maxPixels) return null;

  // Boundary points of the mask -> hull -> rectangle.
  const pts: { x: number; y: number }[] = [];
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = y * w + x;
      if (!mask[i]) continue;
      if (x === 0 || y === 0 || x === w - 1 || y === h - 1 || !mask[i - 1] || !mask[i + 1] || !mask[i - w] || !mask[i + w]) {
        pts.push({ x: x + x0, y: y + y0 });
      }
    }
  }
  const hull = convexHull(pts);
  if (hull.length < 3) return null;
  const rect = minAreaRect(hull);
  if (!rect) return null;
  return { corners: rect.corners, pixelCount: count, fill: Math.min(1, count / Math.max(rect.area, 1)) };
};
