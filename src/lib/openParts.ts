// Open parts of a building (a porch or carport under the house's roof): areas inside the outline
// with no outer walls, posts holding up the roof instead, and a wall where they meet the house.
// Pure geometry in the building's local frame (plan units).
import { getEdgeOutwardNormal, pointInPolygonXY } from "./geometry";
import type { OpenPart, OpenPartKind } from "../types";

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

/** A building's open parts (older saves stored bare corner lists: porches on the ground). */
export const openPartsOf = (b: { openParts?: unknown[]; openSides?: boolean }): OpenPart[] =>
  b.openSides ? [] : (b.openParts ?? []).map(p => (Array.isArray(p) ? { pts: p as P[], kind: "porch" as const, floor: 0 } : (p as OpenPart)));

export const OPEN_PART_DEFAULTS: Record<OpenPartKind, { floorFt: number; depthFt: number; label: string }> = {
  porch: { floorFt: 2, depthFt: 8, label: "Porch" },
  deck: { floorFt: 3, depthFt: 12, label: "Deck" },
  carport: { floorFt: 0, depthFt: 12, label: "Carport" },
  patio: { floorFt: 0, depthFt: 10, label: "Patio" }
};

/** Whether a part gets a railing: as set, or when a porch or deck floor is 1.5 ft or more up. */
export const hasRailing = (p: OpenPart, upf: number) => p.railing ?? ((p.kind === "porch" || p.kind === "deck") && p.floor >= 1.5 * upf);

const centroid = (pts: P[]) => pts.reduce((m, p) => ({ x: m.x + p.x / pts.length, y: m.y + p.y / pts.length }), { x: 0, y: 0 });

/** The roof over a part (see OpenPart.roof). */
export const partRoof = (outline: P[], p: OpenPart): "main" | "own" | "none" =>
  p.roof ?? (pointInPolygonXY(centroid(p.pts), outline) ? "main" : p.kind === "porch" || p.kind === "carport" ? "own" : "none");

/**
 * A part's corners with any side lying along a wall (within `tol`, inside or out) moved just past
 * that wall, so the wall there is open: a porch drawn up to the wall line (or snapped exactly onto
 * it) opens it, never leaving a sliver of wall because of rounding.
 */
export const snapPartToWalls = (outline: P[], pts: P[], tol = 2): P[] => {
  const out = pts.map(p => ({ ...p }));
  const c = centroid(outline);
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i], b = pts[(i + 1) % pts.length];
    const len = Math.hypot(b.x - a.x, b.y - a.y);
    if (len < 1e-6) continue;
    const d = { x: (b.x - a.x) / len, y: (b.y - a.y) / len };
    for (let k = 0; k < outline.length; k++) {
      const p = outline[k], q = outline[(k + 1) % outline.length];
      const wl = Math.hypot(q.x - p.x, q.y - p.y);
      if (wl < 1e-6) continue;
      const w = { x: (q.x - p.x) / wl, y: (q.y - p.y) / wl };
      if (Math.abs(d.x * w.y - d.y * w.x) > 0.05) continue; // not parallel
      // The wall's outward normal, and how far the part's side is from the wall line along it
      let n = { x: w.y, y: -w.x };
      if ((p.x - c.x) * n.x + (p.y - c.y) * n.y < 0) n = { x: -n.x, y: -n.y };
      const off = (a.x - p.x) * n.x + (a.y - p.y) * n.y;
      if (Math.abs(off) > tol) continue;
      // ...and they overlap along the wall
      const t0 = (a.x - p.x) * w.x + (a.y - p.y) * w.y, t1 = (b.x - p.x) * w.x + (b.y - p.y) * w.y;
      if (Math.max(t0, t1) < 0.1 || Math.min(t0, t1) > wl - 0.1) continue;
      const push = 0.05 - off;
      if (push <= 0) continue;
      out[i] = { x: out[i].x + n.x * push, y: out[i].y + n.y * push };
      out[(i + 1) % pts.length] = { x: out[(i + 1) % pts.length].x + n.x * push, y: out[(i + 1) % pts.length].y + n.y * push };
      break;
    }
  }
  return out;
};

/** Corner lists of the parts set into the house (under its main roof): these take out its walls. */
export const insetParts = (outline: P[], parts: OpenPart[]) => parts.filter(p => partRoof(outline, p) === "main").map(p => snapPartToWalls(outline, p.pts));

/** The side of an attached part that meets the house (the edge nearest the outline). */
export const attachEdge = (outline: P[], pts: P[]) => {
  let best = 0, bestD = Infinity;
  pts.forEach((a, i) => {
    const b = pts[(i + 1) % pts.length];
    const d = nearestEdge(outline, { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }).dist;
    if (d < bestD) { bestD = d; best = i; }
  });
  return best;
};

/** The outline clipped to a convex part (Sutherland-Hodgman): the floor area of that part. */
export const clipToPart = (outline: P[], part: P[]): P[] => {
  const sign = signedArea(part) > 0 ? 1 : -1;
  let poly = outline;
  for (let i = 0; i < part.length && poly.length; i++) {
    const p = part[i], q = part[(i + 1) % part.length];
    const side = (v: P) => ((q.x - p.x) * (v.y - p.y) - (q.y - p.y) * (v.x - p.x)) * sign;
    const out: P[] = [];
    poly.forEach((cur, k) => {
      const prev = poly[(k + poly.length - 1) % poly.length];
      const sc = side(cur), sp = side(prev);
      if (sc >= 0) {
        if (sp < 0) out.push(lerp(prev, cur, sp / (sp - sc)));
        out.push(cur);
      } else if (sp >= 0) out.push(lerp(prev, cur, sp / (sp - sc)));
    });
    poly = out;
  }
  return poly;
};

/** A part along one wall (edge i of the outline), reaching `depth` into the building. */
export const partAlongEdge = (outline: P[], i: number, depth: number): P[] => {
  const a = outline[i], b = outline[(i + 1) % outline.length];
  const n = getEdgeOutwardNormal(outline, i);
  return [a, b, { x: b.x - n.x * depth, y: b.y - n.y * depth }, { x: a.x - n.x * depth, y: a.y - n.y * depth }];
};

/** The outline edge nearest a point (index and distance). */
export const nearestEdge = (outline: P[], p: P) => {
  let best = { index: 0, dist: Infinity };
  outline.forEach((a, i) => {
    const b = outline[(i + 1) % outline.length];
    const dx = b.x - a.x, dy = b.y - a.y;
    const t = Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.y - a.y) * dy) / (dx * dx + dy * dy || 1)));
    const d = Math.hypot(p.x - (a.x + dx * t), p.y - (a.y + dy * t));
    if (d < best.dist) best = { index: i, dist: d };
  });
  return best;
};

/** Move edge i of a part along its normal to pass through `p`, snapping to the outline's corners. */
export const movePartEdge = (part: P[], i: number, p: P, outline: P[], snap: number): P[] | null => {
  const a = part[i], b = part[(i + 1) % part.length];
  const n = getEdgeOutwardNormal(part, i);
  let d = (p.x - a.x) * n.x + (p.y - a.y) * n.y;
  let bestSnap = snap;
  for (const v of outline) {
    const c = (v.x - a.x) * n.x + (v.y - a.y) * n.y;
    if (Math.abs(c - d) < bestSnap) { bestSnap = Math.abs(c - d); d = c; }
  }
  // Keep at least a little depth: the opposite edge stays where it is
  const opp = part[(i + 2) % part.length];
  const span = (a.x - opp.x) * n.x + (a.y - opp.y) * n.y;
  if (span + d < snap) return null;
  const next = part.map(q => ({ ...q }));
  next[i] = { x: a.x + n.x * d, y: a.y + n.y * d };
  next[(i + 1) % part.length] = { x: b.x + n.x * d, y: b.y + n.y * d };
  return next;
};

/** A part's open sides (where a railing can go): set into the house, the outline's stretches through
 * it; attached, every side but the one against the house. */
export const partSides = (outline: P[], part: OpenPart): { a: P; b: P }[] =>
  partRoof(outline, part) === "main"
    ? openStretches(outline, [snapPartToWalls(outline, part.pts)])
    : part.pts.map((a, i) => ({ a, b: part.pts[(i + 1) % part.pts.length], i })).filter(e => e.i !== attachEdge(outline, part.pts)).map(({ a, b }) => ({ a, b }));

/** A part's entries: as placed, or one in the middle of its longest side. */
export const partEntries = (outline: P[], part: OpenPart): { side: number; at: number }[] => {
  if (part.entries) return part.entries;
  const sides = partSides(outline, part);
  if (!sides.length) return [];
  let best = 0;
  sides.forEach((s, i) => { if (Math.hypot(s.b.x - s.a.x, s.b.y - s.a.y) > Math.hypot(sides[best].b.x - sides[best].a.x, sides[best].b.y - sides[best].a.y)) best = i; });
  return [{ side: best, at: 0.5 }];
};

/** The open side of a part nearest a point: its index, how far along (0..1), and the distance. */
export const nearestSide = (outline: P[], part: OpenPart, p: P) => {
  let best = { side: -1, at: 0, dist: Infinity };
  partSides(outline, part).forEach((s, i) => {
    const dx = s.b.x - s.a.x, dy = s.b.y - s.a.y;
    const t = Math.max(0, Math.min(1, ((p.x - s.a.x) * dx + (p.y - s.a.y) * dy) / (dx * dx + dy * dy || 1)));
    const d = Math.hypot(p.x - (s.a.x + dx * t), p.y - (s.a.y + dy * t));
    if (d < best.dist) best = { side: i, at: t, dist: d };
  });
  return best;
};

/**
 * A porch, deck or carport moved onto another wall (`edge` of `to`), the same size and the same
 * way in or out of the house, centred at the point on that wall nearest `at` (kept within the
 * wall). For copy and paste.
 */
export const partToEdge = (from: P[], pts: P[], to: P[], edge: number, at: P): P[] => {
  // The part in its wall's frame: along the wall and out from it
  const k = attachEdge(from, pts);
  const m = { x: (pts[k].x + pts[(k + 1) % pts.length].x) / 2, y: (pts[k].y + pts[(k + 1) % pts.length].y) / 2 };
  const src = nearestEdge(from, m).index;
  const frame = (o: P[], i: number) => {
    const a = o[i], b = o[(i + 1) % o.length];
    const len = Math.hypot(b.x - a.x, b.y - a.y) || 1;
    return { a, u: { x: (b.x - a.x) / len, y: (b.y - a.y) / len }, n: getEdgeOutwardNormal(o, i), len };
  };
  const f = frame(from, src);
  const local = pts.map(p => ({ along: (p.x - m.x) * f.u.x + (p.y - m.y) * f.u.y, out: (p.x - m.x) * f.n.x + (p.y - m.y) * f.n.y }));
  const lo = Math.min(...local.map(q => q.along)), hi = Math.max(...local.map(q => q.along));
  // Where it goes: along the new wall, kept on it
  const g = frame(to, edge);
  let t = (at.x - g.a.x) * g.u.x + (at.y - g.a.y) * g.u.y;
  t = hi - lo >= g.len ? g.len / 2 - (lo + hi) / 2 : Math.max(-lo, Math.min(g.len - hi, t));
  const c = { x: g.a.x + g.u.x * t, y: g.a.y + g.u.y * t };
  return local.map(q => ({ x: c.x + g.u.x * q.along + g.n.x * q.out, y: c.y + g.u.y * q.along + g.n.y * q.out }));
};
