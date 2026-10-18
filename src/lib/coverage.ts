// Coverage analysis: which camera sees a spot, at what level of detail, and where nothing is seen.
// Pure functions (plan units in, results out) so they can be unit tested.
import type { CameraItem } from "../types";
import { DORI_LEVELS, doriLevelAt } from "./camera";

type P = { x: number; y: number };
export type DoriLevelId = (typeof DORI_LEVELS)[number]["id"];
export const LEVEL_ORDER: DoriLevelId[] = ["identify", "recognize", "observe", "detect"];
/** Lower is better (identify = 0). */
export const levelRank = (level: DoriLevelId | null) => (level ? LEVEL_ORDER.indexOf(level) : LEVEL_ORDER.length);

/** A person standing at a spot: feet to head (ft). The middle of the body is used for blocking. */
const PERSON_HEAD_FT = 5.5;
const PERSON_MID_FT = 3;

export type CoverageCamera = {
  id: string;
  /** Plan position of the lens. */
  x: number;
  y: number;
  /** Degrees; 0 = +x, clockwise on screen (plan y points down). */
  rotation: number;
  hFov: number;
  vFov: number;
  /** Degrees; negative = tilted down. */
  pitch: number;
  heightFt: number;
  /** Drawn coverage range, plan units. */
  range: number;
  /** For pixel density (resolution, lens). */
  camera: CameraItem;
};

export type Obstacle =
  | { kind: "building"; id: string; points: P[]; heightFt: number }
  | { kind: "tree"; id: string; x: number; y: number; radius: number; bottomFt: number; topFt: number };

export type SightResult = {
  level: DoriLevelId | null;
  distanceFt: number;
  reason?: "outside-view" | "too-far" | "under-camera" | "above-view" | "blocked";
  blockedBy?: string;
};

const segIntersectT = (a: P, b: P, c: P, d: P) => {
  // Returns t along a->b where it crosses c->d, or null.
  const r = { x: b.x - a.x, y: b.y - a.y };
  const s = { x: d.x - c.x, y: d.y - c.y };
  const den = r.x * s.y - r.y * s.x;
  if (Math.abs(den) < 1e-12) return null;
  const t = ((c.x - a.x) * s.y - (c.y - a.y) * s.x) / den;
  const u = ((c.x - a.x) * r.y - (c.y - a.y) * r.x) / den;
  return t >= 0 && t <= 1 && u >= 0 && u <= 1 ? t : null;
};

/** What a camera sees of a person standing at `pt`. */
export const cameraSees = (cam: CoverageCamera, pt: P, obstacles: Obstacle[], unitsPerFoot = 1): SightResult => {
  const dx = pt.x - cam.x;
  const dy = pt.y - cam.y;
  const dPlan = Math.hypot(dx, dy);
  const distanceFt = dPlan / unitsPerFoot;
  if (distanceFt > 0.5) {
    const bearing = (Math.atan2(dy, dx) * 180) / Math.PI;
    const diff = ((((bearing - cam.rotation) % 360) + 540) % 360) - 180;
    if (Math.abs(diff) > cam.hFov / 2) return { level: null, distanceFt, reason: "outside-view" };
  }
  if (dPlan > cam.range) return { level: null, distanceFt, reason: "too-far" };
  // Vertical: any part of a standing person inside the view?
  const deg = (r: number) => (r * 180) / Math.PI;
  const feet = deg(Math.atan2(-cam.heightFt, Math.max(distanceFt, 0.01)));
  const head = deg(Math.atan2(PERSON_HEAD_FT - cam.heightFt, Math.max(distanceFt, 0.01)));
  const low = cam.pitch - cam.vFov / 2;
  const high = cam.pitch + cam.vFov / 2;
  if (Math.max(feet, head) < low) return { level: null, distanceFt, reason: "under-camera" };
  if (Math.min(feet, head) > high) return { level: null, distanceFt, reason: "above-view" };
  // Line of sight to the middle of the body, blocked by walls taller than the line where it crosses,
  // or by tree canopies.
  const from = { x: cam.x, y: cam.y };
  const startT = Math.min(0.5, (1.5 * unitsPerFoot) / Math.max(dPlan, 1e-6)); // ignore the wall the camera sits on
  const zAt = (t: number) => cam.heightFt + (PERSON_MID_FT - cam.heightFt) * t;
  for (const o of obstacles) {
    if (o.kind === "building") {
      for (let i = 0; i < o.points.length; i++) {
        const t = segIntersectT(from, pt, o.points[i], o.points[(i + 1) % o.points.length]);
        if (t !== null && t > startT && t < 0.999 && zAt(t) < o.heightFt) return { level: null, distanceFt, reason: "blocked", blockedBy: o.id };
      }
    } else {
      const len2 = dx * dx + dy * dy || 1;
      const t = Math.max(0, Math.min(1, ((o.x - cam.x) * dx + (o.y - cam.y) * dy) / len2));
      const near = Math.hypot(cam.x + dx * t - o.x, cam.y + dy * t - o.y);
      const z = zAt(t);
      if (t > startT && t < 0.98 && near < o.radius * 0.75 && z > o.bottomFt && z < o.topFt) {
        return { level: null, distanceFt, reason: "blocked", blockedBy: o.id };
      }
    }
  }
  const level = doriLevelAt(cam.camera, distanceFt);
  return level ? { level: level.id, distanceFt } : { level: null, distanceFt, reason: "too-far" };
};

export type TargetCoverage = {
  targetId: string;
  best: { cameraId: string; level: DoriLevelId } | null;
  met: boolean;
  /** Why the closest-to-working camera fails, when nothing covers it. */
  reason?: SightResult["reason"];
};

export const evaluateTargets = (
  cameras: CoverageCamera[],
  targets: { id: string; x: number; y: number; goal: DoriLevelId }[],
  obstacles: Obstacle[],
  unitsPerFoot = 1
): TargetCoverage[] =>
  targets.map(t => {
    let best: TargetCoverage["best"] = null;
    let reason: SightResult["reason"];
    for (const cam of cameras) {
      const r = cameraSees(cam, t, obstacles, unitsPerFoot);
      if (r.level && (!best || levelRank(r.level) < levelRank(best.level))) best = { cameraId: cam.id, level: r.level };
      if (!r.level && !reason) reason = r.reason;
    }
    return { targetId: t.id, best, met: !!best && levelRank(best.level) <= levelRank(t.goal), reason: best ? undefined : reason };
  });

/**
 * Samples the area on a grid and marks what no camera sees (at least "detect").
 * Returns the cells that are NOT covered, as rectangles in plan units.
 */
export const blindSpotCells = (
  cameras: CoverageCamera[],
  area: { x: number; y: number; width: number; height: number },
  cell: number,
  obstacles: Obstacle[],
  unitsPerFoot = 1
) => {
  const cols = Math.max(1, Math.ceil(area.width / cell));
  const rows = Math.max(1, Math.ceil(area.height / cell));
  const runs: { x: number; y: number; width: number; height: number }[] = [];
  let covered = 0;
  for (let r = 0; r < rows; r++) {
    let runStart = -1;
    for (let c = 0; c <= cols; c++) {
      let seen = true;
      if (c < cols) {
        const pt = { x: area.x + (c + 0.5) * cell, y: area.y + (r + 0.5) * cell };
        seen = cameras.some(cam => cameraSees(cam, pt, obstacles, unitsPerFoot).level !== null);
        if (seen) covered++;
      }
      if (!seen && runStart < 0) runStart = c;
      if ((seen || c === cols) && runStart >= 0) {
        runs.push({ x: area.x + runStart * cell, y: area.y + r * cell, width: (c - runStart) * cell, height: cell });
        runStart = -1;
      }
    }
  }
  return { runs, coveredFraction: covered / (cols * rows) };
};
