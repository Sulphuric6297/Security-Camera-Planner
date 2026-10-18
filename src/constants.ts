import { BuildingLabelDefaults } from "./types";


// --- Helper Functions ---

export const generateId = () => Math.random().toString(36).substr(2, 9);

export const COLORS = {
  camera: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"],
  building: ["#cbd5e1", "#94a3b8", "#64748b", "#475569", "#334155", "#1e293b"],
  tree: ["#22c55e", "#16a34a", "#15803d", "#14532d", "#84cc16", "#bef264"],
  parking: ["#e2e8f0", "#cbd5e1", "#94a3b8", "#f8fafc", "#ffffff", "#f1f5f9"],
  label: ["#1e293b", "#334155", "#475569", "#64748b", "#ef4444", "#3b82f6"]
};

export const DEFAULT_CANVAS = { width: 1000, height: 700 };
// Realistic defaults (plan units are feet): a typical outdoor camera on a wall/eave with a ~4 mm lens.
export const DEFAULT_CAMERA_HEIGHT_FT = 9;
export const DEFAULT_CAMERA_HFOV = 90;
export const DEFAULT_CAMERA_PITCH = -15;
export const DEFAULT_CAMERA_RANGE_FT = 100;
export const DEFAULT_BUILDING = { width: 50, depth: 36, wallHeight: 14 };
// How close (ft) a new camera must be to a wall to snap onto it.
export const CAMERA_WALL_SNAP_FT = 12;

// Default camera label sits behind the camera so it never covers the cone or the aim handle.
export const defaultCameraLabelOffset = (rotationDeg: number) => {
  const rad = (rotationDeg * Math.PI) / 180;
  return { x: -Math.cos(rad) * 38, y: -Math.sin(rad) * 38 };
};
export const mountHeightForBuilding = (building?: { wallHeight?: number }) =>
  Math.max(6, Math.round(((building?.wallHeight ?? DEFAULT_BUILDING.wallHeight) - 1) * 2) / 2);
export const TERRAIN_BRUSH_MIN = 1;
export const TERRAIN_BRUSH_MAX = 12;
export const TERRAIN_FALLOFF_MIN = 0.5;
export const TERRAIN_FALLOFF_MAX = 4;
export const MAP_OVERLAY_OFFSET = 0.02;
export const OBJECT_ELEVATION_OFFSET = 0.08;
export const NVR_COLS = 12;
export const NVR_MARGIN = 16;
export const NVR_DEFAULT_W = 4;
export const NVR_DEFAULT_H = 2;
export const NVR_ASPECT = 16 / 9;
export const NVR_HEADER_FOOTER = 64;
export const NVR_MIN_ROW_HEIGHT = 80;
export const DEFAULT_BUILDING_LABEL: BuildingLabelDefaults = {
  fontFamily: "Space Grotesk",
  fontSize: 12,
  fontWeight: 700
};
export const FONT_FAMILIES = [
  "Space Grotesk",
  "Sora",
  "Poppins",
  "Montserrat",
  "Roboto Slab",
  "Inter"
];
export const FONT_WEIGHTS = [400, 500, 600, 700, 800];

export const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
