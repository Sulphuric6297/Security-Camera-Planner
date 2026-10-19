// Open parts of a building (a porch or carport under the house's roof): areas inside the outline
// with no outer walls, posts holding up the roof instead, and a wall where they meet the house.
// Pure geometry in the building's local frame (plan units).
import { getEdgeOutwardNormal, pointInPolygonXY } from "./geometry";

type P = { x: number; y: number };
/** A piece of wall from a to b; `out` points to its outside (away from the enclosed rooms). */
export type WallPiece = { a: P; b: P; out: P };

const lerp = (a: P, b: P, t: number): P => ({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t });
const signedArea = (pts: P[]) => pts.reduce((s, p, i) => { const q = pts[(i + 1) % pts.length]; return s + p.x * q.y - q.x * p.y; }, 0) / 2;

/** The stretch of segment a-b (as [t0, t1]) inside a convex polygon, or null. */
const insideConvex = (a: P, b: P, poly: P[]): [number, number] | null => {
  let t0 = 0, t1 = 1;
  const sign = signedArea(poly) > 0 ? 1 : -1;
  const d = { x: b.x - a.x, y: b.y - a.y };
  for (let i = 0; i < poly.length; i++) {
    const p = poly[i], q = poly[(i + 1) % poly.length];
    // Inside is to the left of p->q for a positive-area polygon
    const nx = -(q.y - p.y) * sign, ny = (q.x - p.x) * sign;
    const num = nx * (a.x - p.x) + ny * (a.y - p.y);
    const den = nx * d.x + ny * d.y;
    if (Math.abs(den) < 1e-12) {
      if (num < 0) return null;
      continue;
    }
    const t = -num / den;
    if (den > 0) t0 = Math.max(t0, t);
    else t1 = Math.min(t1, t);
    if (t0 >= t1) return null;
  }
  return t1 - t0 > 1e-9 ? [t0, t1] : null;
};

/** [0, 1] minus the given intervals. */
const remaining = (cuts: [number, number][]) => {
  const out: [number, number][] = [];
  let at = 0;
  for (const [s, e] of [...cuts].sort((p, q) => p[0] - q[0])) {
    if (s > at + 1e-9) out.push([at, s]);
    at = Math.max(at, e);
  }
  if (at < 1 - 1e-9) out.push([at, 1]);
  return out;
};

/** Where segment a-b crosses segment c-d (t along a-b), or null. */
const crossT = (a: P, b: P, c: P, d: P) => {
  const r = { x: b.x - a.x, y: b.y - a.y }, s = { x: d.x - c.x, y: d.y - c.y };
  const den = r.x * s.y - r.y * s.x;
  if (Math.abs(den) < 1e-12) return null;
  const t = ((c.x - a.x) * s.y - (c.y - a.y) * s.x) / den;
  const u = ((c.x - a.x) * r.y - (c.y - a.y) * r.x) / den;
  return t > 1e-9 && t < 1 - 1e-9 && u >= -1e-9 && u <= 1 + 1e-9 ? t : null;
};

/**
 * The building's walls with its open parts taken out: the outline's edges except where they run
 * through an open part, plus the open parts' edges that run inside the outline (the wall between
 * the house and the porch, facing the porch).
 */
export const enclosedWalls = (outline: P[], parts: P[][]): WallPiece[] => {
  const walls: WallPiece[] = [];
  for (let i = 0; i < outline.length; i++) {
    const a = outline[i], b = outline[(i + 1) % outline.length];
    const out = getEdgeOutwardNormal(outline, i);
    const cuts = parts.map(p => insideConvex(a, b, p)).filter((c): c is [number, number] => !!c);
    for (const [s, e] of remaining(cuts)) walls.push({ a: lerp(a, b, s), b: lerp(a, b, e), out });
  }
  parts.forEach((part, pi) => {
    for (let i = 0; i < part.length; i++) {
      const c = part[i], d = part[(i + 1) % part.length];
      const n = getEdgeOutwardNormal(part, i);
      const into = { x: -n.x, y: -n.y }; // the wall faces into the open part
      const ts = [0, 1];
      for (let k = 0; k < outline.length; k++) {
        const t = crossT(c, d, outline[k], outline[(k + 1) % outline.length]);
        if (t !== null) ts.push(t);
      }
      parts.forEach((other, oi) => {
        if (oi === pi) return;
        for (let k = 0; k < other.length; k++) {
          const t = crossT(c, d, other[k], other[(k + 1) % other.length]);
          if (t !== null) ts.push(t);
        }
      });
      ts.sort((x, y) => x - y);
      for (let k = 0; k + 1 < ts.length; k++) {
        if (ts[k + 1] - ts[k] < 1e-6) continue;
        const mid = lerp(c, d, (ts[k] + ts[k + 1]) / 2);
        // A wall only inside the building, and not where another open part is
        const nudged = { x: mid.x - into.x * 1e-4, y: mid.y - into.y * 1e-4 };
        if (!pointInPolygonXY(nudged, outline)) continue;
        if (parts.some((o, oi) => oi !== pi && pointInPolygonXY(nudged, o))) continue;
        walls.push({ a: lerp(c, d, ts[k]), b: lerp(c, d, ts[k + 1]), out: into });
      }
    }
  });
  return walls.filter(w => Math.hypot(w.b.x - w.a.x, w.b.y - w.a.y) > 1e-6);
};

/**
 * Posts holding up the roof over the open parts: along every stretch of the outline that runs
 * through an open part, at both ends and at most `spacing` apart.
 */
export const openPartPosts = (outline: P[], parts: P[][], spacing: number): P[] => {
  const posts: P[] = [];
  const add = (p: P) => { if (!posts.some(q => Math.hypot(q.x - p.x, q.y - p.y) < spacing * 0.25)) posts.push(p); };
  for (let i = 0; i < outline.length; i++) {
    const a = outline[i], b = outline[(i + 1) % outline.length];
    const len = Math.hypot(b.x - a.x, b.y - a.y);
    for (const part of parts) {
      const span = insideConvex(a, b, part);
      if (!span) continue;
      const stretch = (span[1] - span[0]) * len;
      const n = Math.max(1, Math.ceil(stretch / spacing));
      for (let k = 0; k <= n; k++) add(lerp(a, b, span[0] + ((span[1] - span[0]) * k) / n));
    }
  }
  return posts;
};

/** The stretches of the outline that run through an open part (where the beam carries the roof). */
export const openStretches = (outline: P[], parts: P[][]): { a: P; b: P }[] => {
  const out: { a: P; b: P }[] = [];
  for (let i = 0; i < outline.length; i++) {
    const a = outline[i], b = outline[(i + 1) % outline.length];
    for (const part of parts) {
      const span = insideConvex(a, b, part);
      if (span) out.push({ a: lerp(a, b, span[0]), b: lerp(a, b, span[1]) });
    }
  }
  return out;
};

/** The edges of the open parts as they lie on the building (clipped to its outline), for drawing them. */
export const openPartEdges = (outline: P[], parts: P[][]): { a: P; b: P }[] => {
  const edges = openStretches(outline, parts);
  for (const part of parts) {
    for (let i = 0; i < part.length; i++) {
      const c = part[i], d = part[(i + 1) % part.length];
      const ts = [0, 1];
      for (let k = 0; k < outline.length; k++) {
        const t = crossT(c, d, outline[k], outline[(k + 1) % outline.length]);
        if (t !== null) ts.push(t);
      }
      ts.sort((x, y) => x - y);
      for (let k = 0; k + 1 < ts.length; k++) {
        if (ts[k + 1] - ts[k] < 1e-6) continue;
        if (pointInPolygonXY(lerp(c, d, (ts[k] + ts[k + 1]) / 2), outline)) edges.push({ a: lerp(c, d, ts[k]), b: lerp(c, d, ts[k + 1]) });
      }
    }
  }
  return edges;
};

/** An axis-aligned rectangle (in the building's frame) from two opposite corners. */
export const partFromCorners = (p: P, q: P): P[] => {
  const x0 = Math.min(p.x, q.x), x1 = Math.max(p.x, q.x), y0 = Math.min(p.y, q.y), y1 = Math.max(p.y, q.y);
  return [{ x: x0, y: y0 }, { x: x1, y: y0 }, { x: x1, y: y1 }, { x: x0, y: y1 }];
};
