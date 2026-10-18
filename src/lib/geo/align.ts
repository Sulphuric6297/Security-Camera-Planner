// Lines up building footprints with an aerial image.
// Footprint datasets (USA Structures, sometimes OSM) were traced from other imagery, so they can sit
// a few meters off the photo we show. We look for the shift that puts the footprint outlines on the
// strongest image edges (roof outlines), first for all buildings together and then, carefully, per building.

export type GrayImage = { width: number; height: number; data: Float32Array };
export type PxPoint = { x: number; y: number };
export type AlignResult = {
  /** Shift for all footprints, in image pixels. */
  global: PxPoint;
  /** Extra per-footprint shift on top of `global` (0,0 when the building is left as is). */
  perPolygon: PxPoint[];
  /** How much better the aligned outlines sit on edges than the originals (1 = no better). */
  gain: number;
  confident: boolean;
};

/** RGBA pixels -> lightly blurred luminance. */
export const toGray = (rgba: Uint8ClampedArray | Uint8Array, width: number, height: number): GrayImage => {
  const lum = new Float32Array(width * height);
  for (let i = 0, p = 0; i < lum.length; i++, p += 4) lum[i] = 0.299 * rgba[p] + 0.587 * rgba[p + 1] + 0.114 * rgba[p + 2];
  // 3x3 box blur to calm shingle/leaf texture
  const out = new Float32Array(width * height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let s = 0;
      let n = 0;
      for (let dy = -1; dy <= 1; dy++) {
        const yy = y + dy;
        if (yy < 0 || yy >= height) continue;
        for (let dx = -1; dx <= 1; dx++) {
          const xx = x + dx;
          if (xx < 0 || xx >= width) continue;
          s += lum[yy * width + xx];
          n++;
        }
      }
      out[y * width + x] = s / n;
    }
  }
  return { width, height, data: out };
};

/** Sobel gradients. */
const gradients = (img: GrayImage) => {
  const { width: w, height: h, data } = img;
  const gx = new Float32Array(w * h);
  const gy = new Float32Array(w * h);
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const i = y * w + x;
      const a = data[i - w - 1], b = data[i - w], c = data[i - w + 1];
      const d = data[i - 1], f = data[i + 1];
      const g = data[i + w - 1], hh = data[i + w], k = data[i + w + 1];
      gx[i] = c + 2 * f + k - (a + 2 * d + g);
      gy[i] = g + 2 * hh + k - (a + 2 * b + c);
    }
  }
  return { gx, gy };
};

type Sample = { x: number; y: number; nx: number; ny: number };

/** Points every pixel along each polygon edge, with the edge's unit normal. */
const edgeSamples = (poly: PxPoint[]): Sample[] => {
  const out: Sample[] = [];
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i];
    const b = poly[(i + 1) % poly.length];
    const len = Math.hypot(b.x - a.x, b.y - a.y);
    if (len < 2) continue;
    const nx = -(b.y - a.y) / len;
    const ny = (b.x - a.x) / len;
    // Skip the last pixel near corners: corners are fuzzy in footprints.
    for (let t = 1; t < len - 1; t += 1) out.push({ x: a.x + ((b.x - a.x) * t) / len, y: a.y + ((b.y - a.y) * t) / len, nx, ny });
  }
  return out;
};

/** Mean edge strength across the outline (gradient component along the edge normal), sampled at a shift. */
const scoreAt = (samples: Sample[], gx: Float32Array, gy: Float32Array, w: number, h: number, dx: number, dy: number) => {
  let sum = 0;
  let n = 0;
  for (const s of samples) {
    const x = Math.round(s.x + dx);
    const y = Math.round(s.y + dy);
    if (x < 1 || y < 1 || x >= w - 1 || y >= h - 1) continue;
    const i = y * w + x;
    sum += Math.abs(gx[i] * s.nx + gy[i] * s.ny);
    n++;
  }
  return n > samples.length * 0.5 ? sum / n : 0;
};

const searchBest = (
  samples: Sample[],
  gx: Float32Array,
  gy: Float32Array,
  w: number,
  h: number,
  cx: number,
  cy: number,
  radius: number,
  step: number
) => {
  let best = { dx: cx, dy: cy, score: -1 };
  let total = 0;
  let count = 0;
  for (let dy = cy - radius; dy <= cy + radius; dy += step) {
    for (let dx = cx - radius; dx <= cx + radius; dx += step) {
      const s = scoreAt(samples, gx, gy, w, h, dx, dy);
      total += s;
      count++;
      if (s > best.score) best = { dx, dy, score: s };
    }
  }
  return { ...best, mean: count ? total / count : 0 };
};

/**
 * Finds the shift that best lines the footprints up with the image.
 * @param polygons footprints in image pixel coordinates
 * @param maxShiftPx how far to search (e.g. 8 m in pixels)
 */
export const alignFootprints = (img: GrayImage, polygons: PxPoint[][], maxShiftPx: number): AlignResult => {
  const { width: w, height: h } = img;
  const { gx, gy } = gradients(img);
  const per = polygons.map(edgeSamples);
  const all = per.flat();
  const none = { global: { x: 0, y: 0 }, perPolygon: polygons.map(() => ({ x: 0, y: 0 })), gain: 1, confident: false };
  if (all.length < 20) return none;

  const R = Math.max(2, Math.round(maxShiftPx));
  // Coarse-to-fine global search
  const coarseStep = Math.max(1, Math.round(R / 12));
  const coarse = searchBest(all, gx, gy, w, h, 0, 0, R, coarseStep);
  const fine = searchBest(all, gx, gy, w, h, coarse.dx, coarse.dy, coarseStep * 2, 1);
  const base = scoreAt(all, gx, gy, w, h, 0, 0);
  // Confident when the best shift is clearly better than both no shift and a typical shift.
  const gain = base > 0 ? fine.score / base : fine.score > 0 ? 2 : 1;
  const prominence = coarse.mean > 0 ? fine.score / coarse.mean : 0;
  const confident = fine.score > 0 && gain > 1.08 && prominence > 1.25;
  const global = confident ? { x: fine.dx, y: fine.dy } : { x: 0, y: 0 };

  // Per building: a small local search around the global shift, kept only when clearly better.
  const local = Math.max(2, Math.round(R / 3));
  const perPolygon = per.map(samples => {
    if (samples.length < 24) return { x: 0, y: 0 };
    const here = scoreAt(samples, gx, gy, w, h, global.x, global.y);
    const best = searchBest(samples, gx, gy, w, h, global.x, global.y, local, 1);
    const prom = best.mean > 0 ? best.score / best.mean : 0;
    if (here > 0 && best.score > here * 1.2 && prom > 1.3) return { x: best.dx - global.x, y: best.dy - global.y };
    return { x: 0, y: 0 };
  });

  return { global, perPolygon, gain: confident ? gain : 1, confident };
};

export type GeoPoint = { lat: number; lon: number };
export type GeoAlignStats = { adjusted: number; movedMeters: number; confident: boolean };

/**
 * Lines up groups of lat/lon footprints (one group per data source, since each source has its own
 * offset) with an image. `toPx` maps lat/lon to image pixels.
 */
export const alignGeoFootprints = <T extends { points: GeoPoint[] }>(
  groups: T[][],
  gray: GrayImage,
  toPx: (p: GeoPoint) => PxPoint,
  metersPerPx: number,
  maxShiftM: number
): { groups: T[][]; stats: GeoAlignStats } => {
  let adjusted = 0;
  let movedSum = 0;
  let confident = false;
  const out = groups.map(group => {
    if (group.length === 0) return group;
    const res = alignFootprints(gray, group.map(b => b.points.map(toPx)), maxShiftM / metersPerPx);
    if (!res.confident) return group;
    confident = true;
    return group.map((b, i) => {
      const d = { x: res.global.x + res.perPolygon[i].x, y: res.global.y + res.perPolygon[i].y };
      if (Math.hypot(d.x, d.y) < 0.5) return b;
      // Pixel shift -> lat/lon shift using the local Jacobian of toPx at the footprint.
      const c = b.points.reduce((a, p) => ({ lat: a.lat + p.lat / b.points.length, lon: a.lon + p.lon / b.points.length }), { lat: 0, lon: 0 });
      const eps = 1e-5;
      const p0 = toPx(c);
      const pLat = toPx({ lat: c.lat + eps, lon: c.lon });
      const pLon = toPx({ lat: c.lat, lon: c.lon + eps });
      const a = (pLon.x - p0.x) / eps, bb = (pLat.x - p0.x) / eps;
      const cc = (pLon.y - p0.y) / eps, dd = (pLat.y - p0.y) / eps;
      const det = a * dd - bb * cc;
      if (!det) return b;
      const dLon = (dd * d.x - bb * d.y) / det;
      const dLat = (-cc * d.x + a * d.y) / det;
      adjusted++;
      movedSum += Math.hypot(d.x, d.y) * metersPerPx;
      return { ...b, points: b.points.map(p => ({ lat: p.lat + dLat, lon: p.lon + dLon })) };
    });
  });
  return { groups: out, stats: { adjusted, movedMeters: adjusted ? movedSum / adjusted : 0, confident } };
};

/** Shifts footprints by meters east/north. */
export const shiftGeoPoints = (points: GeoPoint[], eastM: number, northM: number) => {
  const lat0 = points.reduce((s, p) => s + p.lat, 0) / Math.max(1, points.length);
  const dLat = northM / 111320;
  const dLon = eastM / (111320 * Math.cos((lat0 * Math.PI) / 180));
  return points.map(p => ({ lat: p.lat + dLat, lon: p.lon + dLon }));
};
