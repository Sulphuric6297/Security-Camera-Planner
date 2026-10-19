// "Suggest cameras": a greedy layout that covers the protected spots, which the user then edits.
// Candidates are wall mounts (at eave height, facing out) along buildings near the spots, plus a
// pole mount as a fallback, each aimed to take in as many spots as its lens can at once; each round
// keeps the camera that newly covers the most spots.
import type { CameraItem } from "../types";
import { LENS_PRESETS, RESOLUTION_PRESETS, doriDistanceFt, suggestPitchForDistance, vFovFromH } from "./camera";
import { cameraSees, levelRank, type CoverageCamera, type DoriLevelId, type Obstacle } from "./coverage";
import { getEdgeOutwardNormal } from "./geometry";

type P = { x: number; y: number };

export type SuggestBuilding = { id: string; points: P[]; heightFt: number; mountHeightFt: number };
export type SuggestTarget = { id: string; x: number; y: number; goal: DoriLevelId };
export type Suggestion = {
  x: number;
  y: number;
  rotation: number;
  pitch: number;
  heightFt: number;
  lensId: string;
  hFov: number;
  resolutionWidth: number;
  range: number;
  mount: { buildingId: string; edgeIndex: number; edgeT: number } | null;
  /** Spots this camera newly covers. */
  covers: string[];
};

const PPM: Record<DoriLevelId, number> = { identify: 250, recognize: 125, observe: 62.5, detect: 25 };
// Cheapest first: a standard 4 MP before 4K, wide lenses before narrow ones.
const OPTICS = [2688, 3840].flatMap(width => LENS_PRESETS.map(l => ({ lensId: l.id, hFov: l.hFov, width })));
const POLE_HEIGHT_FT = 12;

const fakeCamera = (hFov: number, width: number): CameraItem =>
  ({ id: "s", type: "camera", x: 0, y: 0, rotation: 0, label: "", fov: hFov, hFov, range: 9999, color: "#000", resolutionWidth: width }) as CameraItem;

/** Mount points along the walls of buildings, a little out from the wall, facing out. */
const wallCandidates = (buildings: SuggestBuilding[], spacing: number) => {
  const out: { p: P; normal: P; building: SuggestBuilding; edgeIndex: number; edgeT: number }[] = [];
  buildings.forEach(b => {
    for (let i = 0; i < b.points.length; i++) {
      const a = b.points[i];
      const c = b.points[(i + 1) % b.points.length];
      const len = Math.hypot(c.x - a.x, c.y - a.y);
      if (len < 4) continue;
      const n = getEdgeOutwardNormal(b.points, i);
      const steps = Math.max(1, Math.round(len / spacing));
      for (let k = 0; k <= steps; k++) {
        const t = Math.min(0.97, Math.max(0.03, k / steps)); // stay off the exact corner
        out.push({ p: { x: a.x + (c.x - a.x) * t, y: a.y + (c.y - a.y) * t }, normal: n, building: b, edgeIndex: i, edgeT: t });
      }
    }
  });
  return out;
};

export const suggestCameras = (opts: {
  targets: SuggestTarget[];
  buildings: SuggestBuilding[];
  obstacles: Obstacle[];
  existing: CoverageCamera[];
  unitsPerFoot?: number;
  maxCameras?: number;
}): Suggestion[] => {
  const upf = opts.unitsPerFoot ?? 1;
  const cameras = [...opts.existing];
  const met = (t: SuggestTarget) =>
    cameras.some(c => {
      const r = cameraSees(c, t, opts.obstacles, upf);
      return r.level !== null && levelRank(r.level) <= levelRank(t.goal);
    });
  const result: Suggestion[] = [];
  // Only buildings within reach of a spot are worth trying.
  const reach = 120 * upf;
  const near = opts.buildings.filter(b => opts.targets.some(t => b.points.some(p => Math.hypot(p.x - t.x, p.y - t.y) < reach)));
  const candidates = wallCandidates(near, 8 * upf);
  const maxCameras = opts.maxCameras ?? opts.targets.length;

  for (let round = 0; round < maxCameras; round++) {
    const open = opts.targets.filter(t => !met(t));
    if (open.length === 0) break;
    let best: { s: Suggestion; score: number } | null = null;

    // From one mount point: aim to take in as many open spots as fit in the lens at once (the
    // middle of each group of spots that fits the field of view), not just one spot straight on.
    const consider = (pos: P, heightFt: number, mount: Suggestion["mount"], facing: P | null) => {
      const ref = facing ? Math.atan2(facing.y, facing.x) : Math.atan2(open[0].y - pos.y, open[0].x - pos.x);
      const seen = open
        .map(t => {
          const dx = t.x - pos.x, dy = t.y - pos.y, d = Math.hypot(dx, dy);
          let rel = ((Math.atan2(dy, dx) - ref) * 180) / Math.PI;
          rel = ((rel % 360) + 540) % 360 - 180;
          return { t, d, rel };
        })
        // Wall mounts only look outward; nothing right under the camera.
        .filter(v => v.d >= 3 * upf && (!facing || ((v.t.x - pos.x) * facing.x + (v.t.y - pos.y) * facing.y) / v.d >= 0.15))
        .sort((a, b) => a.rel - b.rel);
      if (!seen.length) return;
      OPTICS.forEach((optic, opticIndex) => {
        for (let i = 0; i < seen.length; i++) {
          for (let j = i; j < seen.length && seen[j].rel - seen[i].rel <= optic.hFov * 0.85; j++) {
            const group = seen.slice(i, j + 1);
            // The lens must give each spot in the group the detail it needs.
            if (group.some(g => doriDistanceFt(optic.hFov, optic.width, PPM[g.t.goal]) < (g.d / upf) * 1.05)) continue;
            const mid = (seen[i].rel + seen[j].rel) / 2;
            const rotation = ((((ref * 180) / Math.PI + mid) % 360) + 360) % 360;
            const meanFt = group.reduce((a, g) => a + g.d, 0) / group.length / upf;
            const farFt = Math.max(...group.map(g => g.d)) / upf;
            const pitch = suggestPitchForDistance(heightFt, meanFt);
            const cam: CoverageCamera = {
              id: "candidate",
              x: pos.x,
              y: pos.y,
              rotation,
              hFov: optic.hFov,
              vFov: vFovFromH(optic.hFov, 16 / 9),
              pitch,
              heightFt,
              range: Math.max(farFt * upf * 1.6, 60 * upf),
              camera: fakeCamera(optic.hFov, optic.width)
            };
            const covers = open.filter(t => {
              const r = cameraSees(cam, t, opts.obstacles, upf);
              return r.level !== null && levelRank(r.level) <= levelRank(t.goal);
            });
            if (!covers.length) continue;
            // More spots first; then a cheaper camera (lower index), then closer.
            const score = covers.length * 1000 - opticIndex * 10 - meanFt * 0.1 + (mount ? 5 : 0);
            if (!best || score > best.score) {
              best = {
                score,
                s: {
                  x: pos.x,
                  y: pos.y,
                  rotation,
                  pitch,
                  heightFt,
                  lensId: optic.lensId,
                  hFov: optic.hFov,
                  resolutionWidth: optic.width,
                  range: Math.round(cam.range),
                  mount,
                  covers: covers.map(t => t.id)
                }
              };
            }
          }
        }
      });
    };

    candidates.forEach(c => {
      // Sit just outside the wall so the wall itself never blocks the camera.
      const pos = { x: c.p.x + c.normal.x * 0.5 * upf, y: c.p.y + c.normal.y * 0.5 * upf };
      consider(pos, c.building.mountHeightFt, { buildingId: c.building.id, edgeIndex: c.edgeIndex, edgeT: c.edgeT }, c.normal);
    });
    if (!best) {
      // No wall works: a pole camera ~25 ft from the first open spot, on the side toward the buildings.
      const t = open[0];
      const center = near.length
        ? near.flatMap(b => b.points).reduce((a, p, _, arr) => ({ x: a.x + p.x / arr.length, y: a.y + p.y / arr.length }), { x: 0, y: 0 })
        : { x: t.x, y: t.y + 1 };
      const dir = { x: center.x - t.x, y: center.y - t.y };
      const len = Math.hypot(dir.x, dir.y) || 1;
      for (const distFt of [15, 25, 40]) {
        const pos = { x: t.x + (dir.x / len) * distFt * upf, y: t.y + (dir.y / len) * distFt * upf };
        consider(pos, POLE_HEIGHT_FT, null, null);
        if (best) break;
      }
    }
    if (!best) break;
    const s = (best as { s: Suggestion }).s;
    result.push(s);
    cameras.push({
      id: `suggested-${round}`,
      x: s.x,
      y: s.y,
      rotation: s.rotation,
      hFov: s.hFov,
      vFov: vFovFromH(s.hFov, 16 / 9),
      pitch: s.pitch,
      heightFt: s.heightFt,
      range: s.range,
      camera: fakeCamera(s.hFov, s.resolutionWidth)
    });
  }
  return result;
};

export const resolutionLabel = (width: number) => RESOLUTION_PRESETS.find(r => r.width === width)?.label ?? `${width}px`;
