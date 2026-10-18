import { CameraItem } from "../types";


export const fovFromDiagonal = (diag: number, aspect: number) => {
  const diagRad = (diag * Math.PI) / 180;
  const vRad = 2 * Math.atan(Math.tan(diagRad / 2) / Math.sqrt(aspect * aspect + 1));
  const hRad = 2 * Math.atan(Math.tan(vRad / 2) * aspect);
  return { h: (hRad * 180) / Math.PI, v: (vRad * 180) / Math.PI };
};

export const diagonalFromHv = (h: number, v: number) => {
  const hRad = (h * Math.PI) / 180;
  const vRad = (v * Math.PI) / 180;
  const diag = 2 * Math.atan(Math.sqrt(Math.tan(hRad / 2) ** 2 + Math.tan(vRad / 2) ** 2));
  return (diag * 180) / Math.PI;
};

export const vFovFromH = (h: number, aspect: number) => {
  const hRad = (h * Math.PI) / 180;
  const vRad = 2 * Math.atan(Math.tan(hRad / 2) / aspect);
  return (vRad * 180) / Math.PI;
};

export const hFovFromV = (v: number, aspect: number) => {
  const vRad = (v * Math.PI) / 180;
  const hRad = 2 * Math.atan(Math.tan(vRad / 2) * aspect);
  return (hRad * 180) / Math.PI;
};

export const getCameraAspectValue = (camera?: CameraItem | null) => {
  if (!camera) return 16 / 9;
  if (camera.aspect && camera.aspect > 0) return camera.aspect;
  const h = camera.hFov ?? camera.fov;
  const v = camera.vFov;
  if (v && v > 0) {
    const hRad = (h * Math.PI) / 180;
    const vRad = (v * Math.PI) / 180;
    const aspect = Math.tan(hRad / 2) / Math.tan(vRad / 2);
    return aspect || 16 / 9;
  }
  return 16 / 9;
};

// --- Camera planning presets & coverage math -----------------------------------------------

export const FT_PER_M = 3.28084;

/** Common lenses on 1/2.8"–1/2.7" sensors (typical 2–8 MP security cameras). */
export const LENS_PRESETS = [
  { id: "2.8mm", label: "2.8 mm", hint: "Wide", hFov: 105 },
  { id: "4mm", label: "4 mm", hint: "Standard", hFov: 87 },
  { id: "6mm", label: "6 mm", hint: "Narrow", hFov: 54 },
  { id: "12mm", label: "12 mm", hint: "Tele", hFov: 28 }
] as const;

/** Typical mounting heights (ft) and down-tilt (deg). */
export const MOUNT_PRESETS = [
  { id: "doorbell", label: "Doorbell", height: 4, pitch: -5, hint: "Faces at the door" },
  { id: "wall", label: "Wall", height: 9, pitch: -15, hint: "Standard wall mount" },
  { id: "eave", label: "Eave", height: 11, pitch: -22, hint: "Under the roof edge" },
  { id: "pole", label: "Pole", height: 15, pitch: -25, hint: "Driveways & yards" }
] as const;

export const RESOLUTION_PRESETS = [
  { id: "2mp", label: "1080p", width: 1920 },
  { id: "4mp", label: "4 MP", width: 2688 },
  { id: "5mp", label: "5 MP", width: 2960 },
  { id: "8mp", label: "4K", width: 3840 }
] as const;
export const DEFAULT_RESOLUTION_WIDTH = 2688;

/** DORI levels (IEC EN 62676-4), pixels per meter of scene width. */
export const DORI_LEVELS = [
  { id: "identify", label: "Identify", ppm: 250, color: "#ef4444", hint: "Recognize a stranger's face / read a plate" },
  { id: "recognize", label: "Recognize", ppm: 125, color: "#f59e0b", hint: "Tell if it's someone you know" },
  { id: "observe", label: "Observe", ppm: 62.5, color: "#22c55e", hint: "See what a person is doing" },
  { id: "detect", label: "Detect", ppm: 25, color: "#3b82f6", hint: "Notice that someone is there" }
] as const;

/** Distance (ft) out to which a camera still achieves the given pixel density. */
export const doriDistanceFt = (hFovDeg: number, resolutionWidth: number, ppm: number) => {
  const widthAt1m = 2 * Math.tan((Math.max(1, Math.min(179, hFovDeg)) * Math.PI) / 360);
  return (resolutionWidth / (ppm * widthAt1m)) * FT_PER_M;
};

export const getCameraHFov = (cam: CameraItem) => cam.hFov ?? cam.fov;
export const getCameraResolution = (cam: CameraItem) => cam.resolutionWidth ?? DEFAULT_RESOLUTION_WIDTH;

export const getDoriDistances = (cam: CameraItem) => {
  const hFov = getCameraHFov(cam);
  const res = getCameraResolution(cam);
  return DORI_LEVELS.map(level => ({ ...level, distance: doriDistanceFt(hFov, res, level.ppm) }));
};

/** Pixel density (px/ft) at a distance — for the cursor readout. */
export const pixelsPerFootAt = (cam: CameraItem, distanceFt: number) => {
  const hFov = getCameraHFov(cam);
  const sceneWidthFt = 2 * Math.max(distanceFt, 0.1) * Math.tan((hFov * Math.PI) / 360);
  return getCameraResolution(cam) / sceneWidthFt;
};

export const doriLevelAt = (cam: CameraItem, distanceFt: number) => {
  const ppm = pixelsPerFootAt(cam, distanceFt) * FT_PER_M;
  return DORI_LEVELS.find(level => ppm >= level.ppm) ?? null;
};

/**
 * Where the camera's view meets flat ground: `near` is the blind spot under the camera (nothing
 * closer is visible), `far` is where the top of the image hits the ground (Infinity if it sees the horizon).
 */
export const getGroundCoverage = (mountHeightFt: number, pitchDeg: number, vFovDeg: number) => {
  const down = -pitchDeg; // degrees below horizontal
  const half = vFovDeg / 2;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const lower = down + half; // steepest ray
  const upper = down - half; // shallowest ray
  const near = lower >= 89.9 ? 0 : lower <= 0 ? Infinity : mountHeightFt / Math.tan(toRad(lower));
  const far = upper <= 0.1 ? Infinity : mountHeightFt / Math.tan(toRad(upper));
  return { near, far };
};

/** Suggest a down-tilt that centers the view on a target distance (ft) at head height. */
export const suggestPitchForDistance = (mountHeightFt: number, targetFt: number, targetHeightFt = 5.5) => {
  const drop = mountHeightFt - targetHeightFt;
  return -Math.round((Math.atan2(Math.max(drop, 0), Math.max(targetFt, 1)) * 180) / Math.PI);
};
