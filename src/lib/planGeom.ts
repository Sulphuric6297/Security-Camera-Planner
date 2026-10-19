// Plan geometry shared by the map view, the camera views and the printed plan: ground height,
// building outlines in plan coordinates, where a wall-mounted camera sits, and what a camera can
// see past buildings and trees. Pure functions over plan data (plan units, usually feet).
import { CAMERA_WALL_SNAP_FT, OBJECT_ELEVATION_OFFSET, clamp } from "../constants";
import type { BuildingItem, CameraItem, CanvasItem, TreeItem } from "../types";
import { getEdgeOutwardNormal, rectanglePoints } from "./geometry";

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
    const pts = buildingWorldPoints(b);
    if (pts.length < 2) return { x: cam.x, y: cam.y };
    const i = clamp(cam.mount.edgeIndex ?? 0, 0, pts.length - 1);
    const a = pts[i];
    const c = pts[(i + 1) % pts.length];
    const t = clamp(cam.mount.edgeT ?? 0.5, 0, 1);
    const n = getEdgeOutwardNormal(pts, i);
    return { x: a.x + (c.x - a.x) * t + n.x, y: a.y + (c.y - a.y) * t + n.y };
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

export type WallHit = { buildingId: string; edgeIndex: number; edgeT: number; distance: number; point: P; rotation: number };

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
    if (item.type === "building") pts = buildingWorldPoints(item);
    else {
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
