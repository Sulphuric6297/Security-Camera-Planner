// A camera's settings apart from where it is: lens, resolution, tilt, mount height, night vision.
// Used to make the next camera like the last one, and to copy one camera's setup to another.
import type { CanvasItem, CameraItem } from "../types";
import { buildingWorldPoints } from "./planGeom";

export const CAMERA_SETTING_KEYS = ["fov", "hFov", "vFov", "aspect", "pitch", "range", "resolutionWidth", "lensPreset", "mountPreset", "irRangeFt"] as const;
export type CameraSettings = Partial<Pick<CameraItem, (typeof CAMERA_SETTING_KEYS)[number]>> & { mountHeight?: number };

export const pickCameraSettings = (cam: CameraItem): CameraSettings => {
  const out: CameraSettings = {};
  for (const k of CAMERA_SETTING_KEYS) if (cam[k] !== undefined) (out as Record<string, unknown>)[k] = cam[k];
  const h = cam.mount?.height ?? cam.height;
  if (h !== undefined) out.mountHeight = h;
  return out;
};

/** The camera with these settings (its place and aim stay; the mount height follows only when asked). */
export const applyCameraSettings = (cam: CameraItem, s: CameraSettings, opts: { height?: boolean } = {}): CameraItem => {
  const next: CameraItem = { ...cam };
  for (const k of CAMERA_SETTING_KEYS) if (s[k] !== undefined) (next as unknown as Record<string, unknown>)[k] = s[k];
  if (opts.height !== false && s.mountHeight !== undefined) {
    next.height = s.mountHeight;
    next.mount = { ...(cam.mount ?? { type: "free" }), height: s.mountHeight };
  }
  return next;
};

/** Whether a patch changes any of the settings (not just position or name). */
export const touchesCameraSettings = (patch: Partial<CanvasItem>) =>
  CAMERA_SETTING_KEYS.some(k => k in patch) || "mount" in patch || "height" in patch;

/**
 * A copy of a wall-mounted camera further along the same wall (by `stepFt`, or back the other way
 * near the wall's end), so duplicating spaces cameras out along a wall. Null if it isn't on a wall.
 */
export const slideAlongWall = (cam: CameraItem, items: CanvasItem[], stepFt: number, unitsPerFoot = 1): CameraItem["mount"] | null => {
  const m = cam.mount;
  if (m?.type !== "building" || !m.buildingId) return null;
  const b = items.find(i => i.id === m.buildingId && i.type === "building");
  if (!b) return null;
  const pts = buildingWorldPoints(b as never);
  const i = Math.max(0, Math.min(pts.length - 1, m.edgeIndex ?? 0));
  const a = pts[i], c = pts[(i + 1) % pts.length];
  const len = Math.hypot(c.x - a.x, c.y - a.y);
  if (len < 1e-6) return null;
  const dt = (stepFt * unitsPerFoot) / len;
  const t0 = m.edgeT ?? 0.5;
  let t = t0 + dt;
  if (t > 0.95) t = t0 - dt;
  if (t < 0.05) t = Math.min(0.95, Math.max(0.05, t0 + dt / 2));
  return { ...m, edgeT: t };
};
