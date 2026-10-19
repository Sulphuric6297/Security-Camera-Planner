// Click-a-roof building detection on an aerial image.
// Region-grows from the clicked pixel over similar roof colors (more tolerant to brightness than hue,
// so both sides of a pitched roof join), cleans up the mask, and fits a minimum-area rotated rectangle.

export type TraceResult = {
  /** Rectangle corners in image pixels, clockwise. */
  corners: { x: number; y: number }[];
  /** The roof's own outline (square corners, e.g. an L or T shape) in image pixels; null when it is a plain rectangle. */
  outline: { x: number; y: number }[] | null;
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
  /** Size of the grid used to follow the outline, in pixels (about 2-3 ft). */
  cellPx?: number;
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
  const angle = best.angle;
  const c = Math.cos(best.angle);
  const s = Math.sin(best.angle);
  const toXY = (u: number, v: number) => ({ x: u * c - v * s, y: u * s + v * c });
  return {
    area: best.area,
    angle,
    bounds: { minU: best.minU, maxU: best.maxU, minV: best.minV, maxV: best.maxV },
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
  const fill = Math.min(1, count / Math.max(rect.area, 1));
  const cell = Math.max(2, options.cellPx ?? Math.sqrt(options.minPixels) / 5);
  let outline = fill < 0.93 ? squareOutline(mask, w, h, x0, y0, rect, cell) : null;
  // Not square-cornered (angled walls, bays): follow the region's own boundary, simplified. Used
  // when there's no square outline, or the square one is clearly off (a staircase along a slant).
  const err = (o: { x: number; y: number }[]) => Math.abs(Math.abs(area2(o)) - count) / count;
  if (fill < 0.93 && (!outline || err(outline) > 0.07)) {
    const raw = freeOutline(mask, w, h, x0, y0, cell);
    const free = raw ? regularize(raw, rect.angle, cell) ?? raw : null;
    // Only when it's clearly the better fit: square corners are the norm for buildings.
    if (free && (!outline || err(free) < err(outline) * 0.5)) outline = free;
  }
  // Line every edge up with the roof's actual edge in the photo (the grid and the color fill can
  // each be off by a foot or so).
  const maxShift = Math.max(2, cell * 0.9);
  const corners = snapEdges(image, rect.corners, maxShift) ?? rect.corners;
  if (outline) outline = snapEdges(image, outline, maxShift) ?? outline;
  return { corners, outline, pixelCount: count, fill };
};

/** Signed area (shoelace); positive when the points run clockwise on screen (y down). */
const area2 = (p: { x: number; y: number }[]) => p.reduce((s, a, i) => { const b = p[(i + 1) % p.length]; return s + a.x * b.y - b.x * a.y; }, 0) / 2;

/**
 * Moves each edge of a polygon (image pixels) sideways, keeping its direction, onto the strongest
 * color edge in the photo within maxShift pixels, then rebuilds the corners where the moved edges
 * meet. Null if that would fold the shape.
 */
export const snapEdges = (image: ImageData, poly: { x: number; y: number }[], maxShift: number) => {
  const { width, height, data } = image;
  const n = poly.length;
  if (n < 3) return null;
  const sample = (x: number, y: number): [number, number, number] => {
    // Bilinear RGB
    const fx = Math.min(width - 1.001, Math.max(0, x)), fy = Math.min(height - 1.001, Math.max(0, y));
    const ix = Math.floor(fx), iy = Math.floor(fy), tx = fx - ix, ty = fy - iy;
    const out: [number, number, number] = [0, 0, 0];
    for (let c = 0; c < 3; c++) {
      const v00 = data[(iy * width + ix) * 4 + c], v10 = data[(iy * width + ix + 1) * 4 + c];
      const v01 = data[((iy + 1) * width + ix) * 4 + c], v11 = data[((iy + 1) * width + ix + 1) * 4 + c];
      out[c] = (v00 * (1 - tx) + v10 * tx) * (1 - ty) + (v01 * (1 - tx) + v11 * tx) * ty;
    }
    return out;
  };
  const cw = area2(poly) > 0;
  const lines: { px: number; py: number; dx: number; dy: number }[] = [];
  for (let i = 0; i < n; i++) {
    const a = poly[i], b = poly[(i + 1) % n];
    const len = Math.hypot(b.x - a.x, b.y - a.y);
    if (len < 1e-6) return null;
    const dx = (b.x - a.x) / len, dy = (b.y - a.y) / len;
    // Outward normal
    const nx = cw ? -dy : dy, ny = cw ? dx : -dx;
    let best = 0, bestScore = -1, zeroScore = 0;
    const samples = Math.max(5, Math.min(30, Math.round(len / 2)));
    for (let o = -maxShift; o <= maxShift + 1e-9; o += 0.5) {
      let score = 0;
      for (let k = 0; k < samples; k++) {
        const t = 0.15 + (0.7 * (k + 0.5)) / samples;
        const cx = a.x + (b.x - a.x) * t + nx * o, cy = a.y + (b.y - a.y) * t + ny * o;
        const p = sample(cx - nx, cy - ny), q = sample(cx + nx, cy + ny);
        score += Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]);
      }
      if (Math.abs(o) < 1e-9) zeroScore = score;
      // A small preference for staying put breaks ties on flat ground.
      const s = score - Math.abs(o) * samples * 0.5;
      if (s > bestScore) { bestScore = s; best = o; }
    }
    if (bestScore < zeroScore * 1.05) best = 0;
    lines.push({ px: a.x + nx * best, py: a.y + ny * best, dx, dy });
  }
  const out: { x: number; y: number }[] = [];
  for (let i = 0; i < n; i++) {
    const l1 = lines[(i - 1 + n) % n], l2 = lines[i];
    const det = l1.dx * l2.dy - l1.dy * l2.dx;
    if (Math.abs(det) < 1e-6) {
      // Parallel neighbours (a straight-through corner): keep the corner on the moved edge.
      out.push({ x: l2.px, y: l2.py });
      continue;
    }
    const t = ((l2.px - l1.px) * l2.dy - (l2.py - l1.py) * l2.dx) / det;
    out.push({ x: l1.px + l1.dx * t, y: l1.py + l1.dy * t });
  }
  // Reject if it folded or moved a corner absurdly far
  if (Math.sign(area2(out)) !== Math.sign(area2(poly))) return null;
  if (out.some((p, i) => Math.hypot(p.x - poly[i].x, p.y - poly[i].y) > maxShift * 3)) return null;
  return out;
};

/**
 * Tidies a traced outline: edges within 15° of the building's main directions are made exactly
 * square to them, tiny cut corners (chamfers) and one-cell jogs are removed, and the corners are
 * rebuilt where the edges meet. Real angled walls (bays, slanted sides) stay as they are.
 */
const regularize = (poly: { x: number; y: number }[], angle: number, cell: number) => {
  type Line = { px: number; py: number; dx: number; dy: number; len: number; axis: boolean };
  const axisDirs = [angle, angle + Math.PI / 2].map(a => ({ x: Math.cos(a), y: Math.sin(a) }));
  let lines: Line[] = poly.map((a, i) => {
    const b = poly[(i + 1) % poly.length];
    const len = Math.hypot(b.x - a.x, b.y - a.y);
    let dx = (b.x - a.x) / len, dy = (b.y - a.y) / len;
    let axis = false;
    for (const d of axisDirs) {
      const dot = dx * d.x + dy * d.y;
      if (Math.abs(dot) > Math.cos((15 * Math.PI) / 180)) {
        dx = Math.sign(dot) * d.x;
        dy = Math.sign(dot) * d.y;
        axis = true;
      }
    }
    return { px: (a.x + b.x) / 2, py: (a.y + b.y) / 2, dx, dy, len, axis };
  });
  const parallel = (a: Line, b: Line) => Math.abs(a.dx * b.dy - a.dy * b.dx) < 1e-6;
  const offset = (a: Line, b: Line) => Math.abs((b.px - a.px) * a.dy - (b.py - a.py) * a.dx);
  for (let pass = 0; pass < 30 && lines.length > 4; pass++) {
    const n = lines.length;
    // A short edge cutting a square corner, or a short jog between two nearly-collinear edges
    const k = lines.findIndex((l, i) => {
      const prev = lines[(i - 1 + n) % n], next = lines[(i + 1) % n];
      if (!prev.axis || !next.axis) return false;
      const perpendicular = Math.abs(prev.dx * next.dx + prev.dy * next.dy) < 1e-6;
      return (perpendicular && !l.axis && l.len < cell * 2.5) || (parallel(prev, next) && l.len < cell * 1.6 && offset(prev, next) < cell * 1.2);
    });
    if (k < 0) break;
    const prev = lines[(k - 1 + n) % n], next = lines[(k + 1) % n];
    if (parallel(prev, next)) {
      // Merge the two collinear neighbours into one edge
      const total = prev.len + next.len;
      const merged: Line = { ...prev, px: (prev.px * prev.len + next.px * next.len) / total, py: (prev.py * prev.len + next.py * next.len) / total, len: total };
      lines = lines.filter((_, i) => i !== k && i !== (k + 1) % n).map(l => (l === prev ? merged : l));
    } else {
      lines = lines.filter((_, i) => i !== k);
    }
  }
  const out: { x: number; y: number }[] = [];
  const n = lines.length;
  for (let i = 0; i < n; i++) {
    const l1 = lines[(i - 1 + n) % n], l2 = lines[i];
    const det = l1.dx * l2.dy - l1.dy * l2.dx;
    if (Math.abs(det) < 1e-6) {
      // Parallel neighbours that stay apart: a step, joined square.
      const t = (l2.px - l1.px) * l1.dx + (l2.py - l1.py) * l1.dy;
      out.push({ x: l1.px + l1.dx * (t - l2.len / 2), y: l1.py + l1.dy * (t - l2.len / 2) }, { x: l2.px - l2.dx * l2.len / 2, y: l2.py - l2.dy * l2.len / 2 });
      continue;
    }
    const t = ((l2.px - l1.px) * l2.dy - (l2.py - l1.py) * l2.dx) / det;
    out.push({ x: l1.px + l1.dx * t, y: l1.py + l1.dy * t });
  }
  if (out.length < 4 || Math.sign(area2(out)) !== Math.sign(area2(poly))) return null;
  // Sanity: the tidy shape keeps about the same area
  if (Math.abs(Math.abs(area2(out)) - Math.abs(area2(poly))) > Math.abs(area2(poly)) * 0.12) return null;
  return out;
};

/**
 * The region's own outline (any angles), from its boundary traced on a grid of `cell` pixels and
 * simplified (Douglas-Peucker), with nearly square corners made square. Null if too ragged.
 */
const freeOutline = (mask: Uint8Array, w: number, h: number, x0: number, y0: number, cell: number) => {
  // Boundary pixels in order: Moore neighbour tracing from the top-left region pixel.
  let start = -1;
  for (let i = 0; i < w * h; i++) if (mask[i]) { start = i; break; }
  if (start < 0) return null;
  const inside = (x: number, y: number) => x >= 0 && y >= 0 && x < w && y < h && mask[y * w + x] === 1;
  const dirs = [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]];
  const contour: { x: number; y: number }[] = [];
  let cx = start % w, cy = (start / w) | 0, dir = 7;
  for (let guard = 0; guard < w * h * 2; guard++) {
    contour.push({ x: cx + x0, y: cy + y0 });
    let found = false;
    for (let k = 0; k < 8; k++) {
      const d = (dir + 6 + k) % 8; // start looking left of the last move
      const nx = cx + dirs[d][0], ny = cy + dirs[d][1];
      if (inside(nx, ny)) { cx = nx; cy = ny; dir = d; found = true; break; }
    }
    if (!found) break;
    if (cx === start % w && cy === ((start / w) | 0) && contour.length > 2) break;
  }
  if (contour.length < 8) return null;
  // Douglas-Peucker on the closed loop (split at the farthest point from the start)
  const simplify = (pts: { x: number; y: number }[], eps: number): { x: number; y: number }[] => {
    if (pts.length < 3) return pts;
    const a = pts[0], b = pts[pts.length - 1];
    const len = Math.hypot(b.x - a.x, b.y - a.y) || 1e-9;
    let far = 0, idx = 0;
    for (let i = 1; i < pts.length - 1; i++) {
      const d = Math.abs((b.x - a.x) * (a.y - pts[i].y) - (a.x - pts[i].x) * (b.y - a.y)) / len;
      if (d > far) { far = d; idx = i; }
    }
    if (far <= eps) return [a, b];
    return [...simplify(pts.slice(0, idx + 1), eps).slice(0, -1), ...simplify(pts.slice(idx), eps)];
  };
  let farIdx = 0, farD = 0;
  contour.forEach((p, i) => { const d = Math.hypot(p.x - contour[0].x, p.y - contour[0].y); if (d > farD) { farD = d; farIdx = i; } });
  const eps = Math.max(1.5, cell * 0.6);
  let poly = [...simplify(contour.slice(0, farIdx + 1), eps).slice(0, -1), ...simplify([...contour.slice(farIdx), contour[0]], eps).slice(0, -1)];
  // Drop very short edges (shorter than a cell) by merging their corners.
  for (let pass = 0; pass < 10 && poly.length > 4; pass++) {
    const k = poly.findIndex((p, i) => { const q = poly[(i + 1) % poly.length]; return Math.hypot(q.x - p.x, q.y - p.y) < cell; });
    if (k < 0) break;
    const q = poly[(k + 1) % poly.length];
    poly = poly.filter((_, i) => i !== (k + 1) % poly.length).map((p, i) => (i === k ? { x: (p.x + q.x) / 2, y: (p.y + q.y) / 2 } : p));
  }
  if (poly.length < 4 || poly.length > 16) return null;
  return poly;
};

/**
 * The region's outline with square corners, lined up with its rectangle: sample the mask on a grid
 * in the rectangle's frame, drop specks and fill notches smaller than a few cells, then follow
 * the grid's border. Returns null when the shape is too ragged to be a building outline.
 */
const squareOutline = (
  mask: Uint8Array, w: number, h: number, x0: number, y0: number,
  rect: { angle: number; bounds: { minU: number; maxU: number; minV: number; maxV: number } },
  cell: number
) => {
  const c = Math.cos(rect.angle);
  const s = Math.sin(rect.angle);
  const { minU, maxU, minV, maxV } = rect.bounds;
  const nu = Math.max(1, Math.round((maxU - minU) / cell));
  const nv = Math.max(1, Math.round((maxV - minV) / cell));
  if (nu * nv > 40000) return null;
  const cu = (maxU - minU) / nu;
  const cv = (maxV - minV) / nv;
  const toXY = (u: number, v: number) => ({ x: u * c - v * s, y: u * s + v * c });
  let grid = new Uint8Array(nu * nv);
  for (let j = 0; j < nv; j++) {
    for (let i = 0; i < nu; i++) {
      let hits = 0;
      for (let a = 0; a < 3; a++) {
        for (let b = 0; b < 3; b++) {
          const p = toXY(minU + (i + (a + 0.5) / 3) * cu, minV + (j + (b + 0.5) / 3) * cv);
          const x = Math.round(p.x) - x0;
          const y = Math.round(p.y) - y0;
          if (x >= 0 && y >= 0 && x < w && y < h && mask[y * w + x]) hits++;
        }
      }
      grid[j * nu + i] = hits >= 5 ? 1 : 0;
    }
  }
  const at = (g: Uint8Array, i: number, j: number) => (i < 0 || j < 0 || i >= nu || j >= nv ? 0 : g[j * nu + i]);
  const morph = (g: Uint8Array, grow: boolean) => {
    const out = new Uint8Array(nu * nv);
    for (let j = 0; j < nv; j++) for (let i = 0; i < nu; i++) {
      let any = 0, all = 1;
      for (let dj = -1; dj <= 1; dj++) for (let di = -1; di <= 1; di++) {
        const v = at(g, i + di, j + dj);
        any |= v;
        all &= v;
      }
      out[j * nu + i] = grow ? any : all;
    }
    return out;
  };
  // Close small notches, then remove thin bits (3-cell features and smaller).
  grid = morph(morph(grid, true), false);
  grid = morph(morph(grid, false), true);
  // Fill holes: anything not reachable from the border's empty cells is inside.
  const outside = new Uint8Array(nu * nv);
  const stack: number[] = [];
  for (let i = 0; i < nu; i++) { stack.push(i, (nv - 1) * nu + i); }
  for (let j = 0; j < nv; j++) { stack.push(j * nu, j * nu + nu - 1); }
  while (stack.length) {
    const k = stack.pop()!;
    if (outside[k] || grid[k]) continue;
    outside[k] = 1;
    const i = k % nu, j = (k - i) / nu;
    if (i > 0) stack.push(k - 1);
    if (i < nu - 1) stack.push(k + 1);
    if (j > 0) stack.push(k - nu);
    if (j < nv - 1) stack.push(k + nu);
  }
  for (let k = 0; k < nu * nv; k++) grid[k] = outside[k] ? 0 : 1;
  // Border edges (clockwise on screen), chained into a loop.
  const next = new Map<string, [number, number]>();
  const key = (i: number, j: number) => `${i},${j}`;
  let start: [number, number] | null = null;
  for (let j = 0; j < nv; j++) for (let i = 0; i < nu; i++) {
    if (!grid[j * nu + i]) continue;
    const add = (a: [number, number], b: [number, number]) => { next.set(key(...a), b); start ??= a; };
    if (!at(grid, i, j - 1)) add([i, j], [i + 1, j]);
    if (!at(grid, i + 1, j)) add([i + 1, j], [i + 1, j + 1]);
    if (!at(grid, i, j + 1)) add([i + 1, j + 1], [i, j + 1]);
    if (!at(grid, i - 1, j)) add([i, j + 1], [i, j]);
  }
  if (!start) return null;
  const loop: [number, number][] = [];
  let p: [number, number] = start;
  for (let guard = 0; guard < next.size + 1; guard++) {
    loop.push(p);
    const n = next.get(key(...p));
    if (!n) return null;
    p = n;
    if (p[0] === start[0] && p[1] === start[1]) break;
  }
  // Keep only the corners
  const onlyCorners = (pts: [number, number][]) => pts.filter((q, k) => {
    const a = pts[(k - 1 + pts.length) % pts.length];
    const b = pts[(k + 1) % pts.length];
    return (q[0] - a[0]) * (b[1] - q[1]) - (q[1] - a[1]) * (b[0] - q[0]) !== 0;
  });
  let corners = onlyCorners(loop);
  // Straighten one-cell jogs (a "Z" step in an edge): line the shorter side up with the longer.
  for (let pass = 0; pass < 20 && corners.length > 4; pass++) {
    const n = corners.length;
    const k = corners.findIndex((a, idx) => {
      const b = corners[(idx + 1) % n];
      return Math.abs(b[0] - a[0]) + Math.abs(b[1] - a[1]) <= 1;
    });
    if (k < 0) break;
    const P = corners[(k - 1 + n) % n], A = corners[k], B = corners[(k + 1) % n], N = corners[(k + 2) % n];
    const dirPA = [Math.sign(A[0] - P[0]), Math.sign(A[1] - P[1])];
    const dirBN = [Math.sign(N[0] - B[0]), Math.sign(N[1] - B[1])];
    if (dirPA[0] !== dirBN[0] || dirPA[1] !== dirBN[1]) break; // a notch, not a step
    const lenPA = Math.abs(A[0] - P[0]) + Math.abs(A[1] - P[1]);
    const lenBN = Math.abs(N[0] - B[0]) + Math.abs(N[1] - B[1]);
    const next = corners.slice();
    if (lenPA >= lenBN) {
      // move N onto A's line (N slides along its other edge)
      next[(k + 2) % n] = dirPA[0] !== 0 ? [N[0], A[1]] : [A[0], N[1]];
    } else {
      next[(k - 1 + n) % n] = dirPA[0] !== 0 ? [P[0], B[1]] : [B[0], P[1]];
    }
    corners = onlyCorners(next.filter((_, idx) => idx !== k && idx !== (k + 1) % n));
  }
  if (corners.length < 4 || corners.length > 14) return null;
  return corners.map(([i, j]) => toXY(minU + i * cu, minV + j * cv));
};
