// Plan geometry shared by the map view, the camera views and the printed plan: ground height,
// building outlines in plan coordinates, where a wall-mounted camera sits, and what a camera can
// see past buildings and trees. Pure functions over plan data (plan units, usually feet).
import { CAMERA_WALL_SNAP_FT, OBJECT_ELEVATION_OFFSET, clamp } from "../constants";
import type { BuildingItem, CameraItem, CanvasItem, TreeItem } from "../types";
import { getEdgeOutwardNormal, pointInPolygonXY, rectanglePoints } from "./geometry";
import { attachEdge, enclosedWalls, insetParts, openPartsOf, partRoof } from "./openParts";

type P = { x: number; y: number };

/** Ground height at a plan point: bilinear between terrain vertices (exact at the vertices). */
export const heightAt = (heights: Record<string, number>, gridSize: number, x: number, y: number) => {
  const grid = gridSize || 20;
  const fx = x / grid;
  const fy = y / grid;
  const ix = Math.floor(fx);
  const iy = Math.floor(fy);
  const tx = fx - ix;
  const ty = fy - iy;
  const at = (gx: number, gy: number) => heights[`${gx * grid},${gy * grid}`] || 0;
  const top = at(ix, iy) * (1 - tx) + at(ix + 1, iy) * tx;
  const bottom = at(ix, iy + 1) * (1 - tx) + at(ix + 1, iy + 1) * tx;
  return top * (1 - ty) + bottom * ty;
};

export const rotatePoint = (p: P, angleDeg: number) => {
  const rad = (angleDeg * Math.PI) / 180;
  const c = Math.cos(rad);
  const s = Math.sin(rad);
  return { x: p.x * c - p.y * s, y: p.x * s + p.y * c };
};

/** Local outline points (a rectangle if the building has no explicit outline). */
export const buildingLocalPoints = (b: BuildingItem) =>
  b.points && b.points.length >= 3 ? b.points : rectanglePoints(b.width, b.height);

/** Building outline in plan coordinates. */
export const buildingWorldPoints = (b: BuildingItem) =>
  buildingLocalPoints(b).map(p => {
    const r = rotatePoint(p, b.rotation);
    return { x: b.x + r.x, y: b.y + r.y };
  });

/**
 * The walls that block a view, as world segments: the outline's edges, or with open parts (a
 * porch, a carport) the walls left around them. None for an open-sided building.
 */
export const buildingWallSegments = (b: BuildingItem): [P, P][] => {
  if (b.openSides) return [];
  const toWorld = (p: P) => { const r = rotatePoint(p, b.rotation); return { x: b.x + r.x, y: b.y + r.y }; };
  const local = buildingLocalPoints(b);
  const parts = insetParts(local, openPartsOf(b));
  if (parts.length) return enclosedWalls(local, parts).map(w => [toWorld(w.a), toWorld(w.b)] as [P, P]);
  return local.map((p, i) => [toWorld(p), toWorld(local[(i + 1) % local.length])] as [P, P]);
};

/** Plan point -> the building's local frame. */
export const toBuildingLocal = (b: { x: number; y: number; rotation: number }, p: P) =>
  rotatePoint({ x: p.x - b.x, y: p.y - b.y }, -b.rotation);

/** A building sits at the lowest ground under its outline (so it never floats on a slope). */
export const buildingBaseHeight = (b: BuildingItem, heights: Record<string, number>, gridSize: number) => {
  const h = (x: number, y: number) => heightAt(heights, gridSize, x, y) + OBJECT_ELEVATION_OFFSET;
  let min = h(b.x, b.y);
  const pts = buildingWorldPoints(b);
  pts.forEach((p, i) => {
    const q = pts[(i + 1) % pts.length];
    min = Math.min(min, h(p.x, p.y), h((p.x + q.x) / 2, (p.y + q.y) / 2));
  });
  return min;
};

/** Where a camera is on the plan: on its wall (just outside it) when mounted on a building. */
export const cameraPlanPosition = (cam: CameraItem, items: CanvasItem[]) => {
  if (cam.mount?.type === "building" && cam.mount.buildingId) {
    const b = items.find(i => i.id === cam.mount!.buildingId && i.type === "building") as BuildingItem | undefined;
    if (!b) return { x: cam.x, y: cam.y };
    const inner = cam.mount.at ? innerWallPoint(b, cam.mount.at) : null;
    if (inner) return inner.world;
    const pts = buildingWorldPoints(b);
    if (pts.length < 2) return { x: cam.x, y: cam.y };
    const i = clamp(cam.mount.edgeIndex ?? 0, 0, pts.length - 1);
    const a = pts[i];
    const c = pts[(i + 1) % pts.length];
    const len = Math.hypot(c.x - a.x, c.y - a.y) || 1;
    const n = getEdgeOutwardNormal(pts, i);
    // Not right at the ends of the wall (about a foot in), and never inside the building: at an
    // inside corner of an L, a point just off one wall can be inside the other wing; slide it
    // toward the middle of the wall until it is outside.
    const margin = Math.min(0.5, 1 / len);
    let t = clamp(cam.mount.edgeT ?? 0.5, margin, 1 - margin);
    const at = (tt: number) => ({ x: a.x + (c.x - a.x) * tt + n.x, y: a.y + (c.y - a.y) * tt + n.y });
    const step = (t < 0.5 ? 1 : -1) * Math.min(0.5, 0.5 / len);
    for (let k = 0; k < 40 && pointInPolygonXY(at(t), pts) && Math.abs(t - 0.5) > Math.abs(step); k++) t += step;
    return at(t);
  }
  return { x: cam.x, y: cam.y };
};

/** Ground (or building base, when mounted) under a camera. */
export const cameraBaseHeight = (cam: CameraItem, items: CanvasItem[], heights: Record<string, number>, gridSize: number) => {
  if (cam.mount?.type === "building" && cam.mount.buildingId) {
    const b = items.find(i => i.id === cam.mount!.buildingId && i.type === "building") as BuildingItem | undefined;
    if (b) return buildingBaseHeight(b, heights, gridSize);
  }
  const p = cameraPlanPosition(cam, items);
  return heightAt(heights, gridSize, p.x, p.y) + OBJECT_ELEVATION_OFFSET;
};

export const cameraMountHeight = (cam: CameraItem) => cam.mount?.height ?? cam.height ?? 10;

export type WallHit = { buildingId: string; edgeIndex: number; edgeT: number; distance: number; point: P; rotation: number; at?: P };

/** The walls of a building inside its outline: where a porch or carport set into the house meets
 * it (its back wall and sides), in the building's own frame. */
const innerWalls = (b: BuildingItem) => {
  if (b.openSides) return [];
  const local = buildingLocalPoints(b);
  const parts = insetParts(local, openPartsOf(b));
  if (!parts.length) return [];
  const onOutline = (q: P) => local.some((a, i) => {
    const c = local[(i + 1) % local.length];
    const dx = c.x - a.x, dy = c.y - a.y, len = Math.hypot(dx, dy) || 1;
    const t = ((q.x - a.x) * dx + (q.y - a.y) * dy) / (len * len);
    return t >= -0.01 && t <= 1.01 && Math.abs((q.x - a.x) * dy - (q.y - a.y) * dx) / len < 0.05;
  });
  return enclosedWalls(local, parts).filter(w => !(onOutline(w.a) && onOutline(w.b)));
};

/** A camera's spot on the inner wall nearest `at` (a foot out from it, kept off its ends), in
 * plan coordinates, and the direction straight out from that wall. */
export const innerWallPoint = (b: BuildingItem, at: P) => {
  let best: { p: P; out: P; d: number } | null = null;
  for (const w of innerWalls(b)) {
    const dx = w.b.x - w.a.x, dy = w.b.y - w.a.y, len = Math.hypot(dx, dy);
    if (len < 1e-6) continue;
    const m = Math.min(1, len / 2);
    const t = clamp(((at.x - w.a.x) * dx + (at.y - w.a.y) * dy) / len, m, len - m);
    const p = { x: w.a.x + (dx / len) * t, y: w.a.y + (dy / len) * t };
    const d = Math.hypot(at.x - p.x, at.y - p.y);
    if (!best || d < best.d) best = { p, out: w.out, d };
  }
  if (!best) return null;
  const r = rotatePoint({ x: best.p.x + best.out.x, y: best.p.y + best.out.y }, b.rotation);
  const n = rotatePoint(best.out, b.rotation);
  return { world: { x: b.x + r.x, y: b.y + r.y }, local: best.p, rotation: (Math.atan2(n.y, n.x) * 180) / Math.PI, distance: best.d };
};

/**
 * The roof over a plan point, when it's under a porch, carport or patio roof of a building (or
 * inside a whole open-sided building): the building, the height of that roof above the ground
 * (plan units) and the direction that faces out from under it.
 */
export const roofOver = (p: P, items: CanvasItem[], upf = 1) => {
  for (const item of items) {
    if (item.type !== "building") continue;
    const b = item as BuildingItem;
    const wall = b.wallHeight ?? 14 * upf;
    const local = buildingLocalPoints(b);
    const q = toBuildingLocal(b, p);
    const centre = { x: local.reduce((s, v) => s + v.x, 0) / local.length, y: local.reduce((s, v) => s + v.y, 0) / local.length };
    const facing = (from: P, to: P) => { const v = rotatePoint({ x: to.x - from.x, y: to.y - from.y }, b.rotation); return (Math.atan2(v.y, v.x) * 180) / Math.PI; };
    if (b.openSides) {
      if (pointInPolygonXY(q, local)) return { building: b, ceiling: wall, floor: 0, rotation: facing(centre, q), kind: "open" as const };
      continue;
    }
    for (const part of openPartsOf(b)) {
      if (!pointInPolygonXY(q, part.pts)) continue;
      const roof = partRoof(local, part);
      if (roof === "none") continue;
      const pc = { x: part.pts.reduce((s, v) => s + v.x, 0) / part.pts.length, y: part.pts.reduce((s, v) => s + v.y, 0) / part.pts.length };
      if (roof === "main") return { building: b, ceiling: wall, floor: part.floor, rotation: facing(centre, pc), kind: "main" as const };
      // Its own roof slopes down from just under the eaves, about 3 in 12 (see the 3D model)
      const k = attachEdge(local, part.pts);
      const a = part.pts[k], c = part.pts[(k + 1) % part.pts.length];
      const len = Math.hypot(c.x - a.x, c.y - a.y) || 1;
      const out = Math.abs(((q.x - a.x) * (c.y - a.y) - (q.y - a.y) * (c.x - a.x)) / len);
      const ceiling = Math.max(part.floor + 7 * upf, wall - 0.6 * upf - out * ((part.pitch ?? 3) / 12));
      return { building: b, ceiling, floor: part.floor, rotation: facing(centre, pc), kind: "own" as const };
    }
  }
  return null;
};

/**
 * A camera put down under a porch, carport or open-sided building: on the wall behind it when
 * that's within 3 ft (the house wall at the back of a porch), else hung under the roof right
 * there, facing out. Just under that roof either way. Null when the point isn't under such a roof.
 */
export const cameraUnderRoof = (p: P, items: CanvasItem[], upf = 1, wantFt = 9) => {
  const under = roofOver(p, items, upf);
  if (!under) return null;
  const b = under.building;
  // Up out of reach of someone standing on the porch floor, but under its roof
  const reach = under.floor / upf + 7.5;
  const heightFt = Math.max(6, Math.min(Math.max(wantFt, reach), Math.floor((under.ceiling / upf - 0.75) * 2) / 2));
  const wall = nearestWall(p, [b]);
  // Set into the house, the outline there is open (no wall): only the walls inside count
  if (wall && wall.distance < 3 * upf && (wall.at || under.kind === "own")) {
    return { x: wall.point.x, y: wall.point.y, rotation: wall.rotation, heightFt, mount: { type: "building" as const, buildingId: b.id, edgeIndex: wall.edgeIndex, edgeT: wall.edgeT, at: wall.at, height: heightFt } };
  }
  return { x: p.x, y: p.y, rotation: under.rotation, heightFt, mount: { type: "free" as const, edgeT: 0.5, height: heightFt } };
};

/** Nearest wall to a point, with the angle that faces straight out from it. */
export const nearestWall = (p: P, items: CanvasItem[]): WallHit | null => {
  let best: WallHit | null = null;
  for (const item of items) {
    if (item.type !== "building") continue;
    const pts = buildingWorldPoints(item as BuildingItem);
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i];
      const b = pts[(i + 1) % pts.length];
      const abx = b.x - a.x;
      const aby = b.y - a.y;
      const t = clamp(((p.x - a.x) * abx + (p.y - a.y) * aby) / (abx * abx + aby * aby || 1), 0, 1);
      const point = { x: a.x + abx * t, y: a.y + aby * t };
      const distance = Math.hypot(p.x - point.x, p.y - point.y);
      if (!best || distance < best.distance) {
        const n = getEdgeOutwardNormal(pts, i);
        best = { buildingId: item.id, edgeIndex: i, edgeT: t, distance, point, rotation: (Math.atan2(n.y, n.x) * 180) / Math.PI };
      }
    }
    // The walls inside a porch or carport set into the house
    const inner = innerWallPoint(item as BuildingItem, toBuildingLocal(item as BuildingItem, p));
    if (inner && best && inner.distance < best.distance) {
      const r = rotatePoint(inner.local, item.rotation);
      // (edgeIndex/edgeT are unused when `at` is set)
      best = { buildingId: item.id, edgeIndex: 0, edgeT: 0.5, distance: inner.distance, point: { x: item.x + r.x, y: item.y + r.y }, rotation: inner.rotation, at: inner.local };
    }
  }
  return best;
};

/** Snap distance (plan units) for mounting a camera on a wall. */
export const wallSnapDistance = (unitsPerFoot = 1) => CAMERA_WALL_SNAP_FT * unitsPerFoot;

// --- Line of sight on the plan ---

const raySegment = (o: P, d: P, a: P, b: P) => {
  const v1x = o.x - a.x;
  const v1y = o.y - a.y;
  const v2x = b.x - a.x;
  const v2y = b.y - a.y;
  const dot = v2x * -d.y + v2y * d.x;
  if (Math.abs(dot) < 1e-6) return null;
  const t = (v2x * v1y - v2y * v1x) / dot;
  const u = (v1x * -d.y + v1y * d.x) / dot;
  return t >= 0 && u >= 0 && u <= 1 ? t : null;
};

/**
 * What a camera sees on the plan: a fan of points (relative to the camera) that stops at walls and
 * tree canopies. Only obstacles within range are considered.
 */
export const visibilityPolygon = (origin: P, range: number, fovDeg: number, rotationDeg: number, obstacles: (BuildingItem | TreeItem)[], rays = 128) => {
  const segments: [P, P][] = [];
  for (const item of obstacles) {
    let pts: P[] = [];
    // Walls block the view; a porch or carport (roof on posts) doesn't.
    const near = (a: P, b: P) => {
      const abx = b.x - a.x, aby = b.y - a.y;
      const t = clamp(((origin.x - a.x) * abx + (origin.y - a.y) * aby) / (abx * abx + aby * aby || 1), 0, 1);
      return Math.hypot(a.x + abx * t - origin.x, a.y + aby * t - origin.y) <= range;
    };
    if (item.type === "building") {
      buildingWallSegments(item).forEach(([a, c]) => { if (near(a, c)) segments.push([a, c]); });
      continue;
    } else {
      const r = item.radius * (item.width ?? 1);
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        pts.push({ x: item.x + r * Math.cos(a), y: item.y + r * Math.sin(a) });
      }
    }
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i];
      const b = pts[(i + 1) % pts.length];
      const abx = b.x - a.x;
      const aby = b.y - a.y;
      const t = clamp(((origin.x - a.x) * abx + (origin.y - a.y) * aby) / (abx * abx + aby * aby || 1), 0, 1);
      if (Math.hypot(a.x + abx * t - origin.x, a.y + aby * t - origin.y) <= range) segments.push([a, b]);
    }
  }
  const start = ((rotationDeg - fovDeg / 2) * Math.PI) / 180;
  const step = ((fovDeg * Math.PI) / 180) / Math.max(1, rays - 1);
  const out: P[] = [];
  for (let i = 0; i < rays; i++) {
    const th = start + i * step;
    const d = { x: Math.cos(th), y: Math.sin(th) };
    let dist = range;
    for (const [a, b] of segments) {
      const t = raySegment(origin, d, a, b);
      if (t !== null && t < dist) dist = t;
    }
    out.push({ x: dist * d.x, y: dist * d.y });
  }
  return out;
};
