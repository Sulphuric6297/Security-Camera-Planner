import type { CanvasItem, TerrainTool, ToolMode } from "../types";

export type P = { x: number; y: number };
export type Rect = { x: number; y: number; width: number; height: number };
export type ContourSegment = { x1: number; y1: number; x2: number; y2: number; level: number };
export type TargetStatus = "met" | "partial" | "none";

/** Everything the map view draws. Plan units (usually feet); plan (x, y) is 3D (x, z), Y up. */
export type ViewDoc = {
  items: CanvasItem[];
  canvas: { width: number; height: number };
  unitsPerFoot: number;
  gridSize: number;
  showGrid: boolean;
  snapToGrid: boolean;
  heights: Record<string, number>;
  terrain: { min: number; max: number; relief: number };
  background: { url: string | null; rect: Rect; opacity: number };
  overlay: "off" | "contours" | "shaded";
  contours: { segments: ContourSegment[]; interval: number };
  shadeUrl: string | null;
  cones: { visible: boolean; showAll: boolean; dori: boolean; opacity: number; color: string | null };
  targetStatus: Record<string, TargetStatus>;
  blindSpots: { runs: Rect[]; area: Rect } | null;
  /** Aerial photo on roofs (off: solid roofs, easier to read). */
  roofPhoto: boolean;
  /** Real-scale grass, paving and soil texture over the aerial photo, where the photo shows them. */
  groundDetail: boolean;
  /** North arrow shown when the plan is georeferenced. */
  geo: boolean;
  /** Where the sun is for the chosen date and time at the site (degrees: azimuth clockwise from
   * north, altitude above the horizon); null: a pleasant default afternoon light. */
  sun: { azimuth: number; altitude: number } | null;
};

/** The active tool, as far as the map view cares. */
export type ViewTool = {
  mode: ToolMode;
  terrain: boolean;
  terrainTool: TerrainTool;
  brushRadius: number;
  /** Camera being aimed by the next click (Aim at a spot). */
  aimingCameraId: string | null;
  vertexInsert: boolean;
  mapMove: boolean;
  /** What a click would place (sized like the real thing), for the ghost preview. */
  preview: CanvasItem | null;
  /** The window or door picked on the selected building (its index), which gets size handles. */
  opening: number | null;
};

export type ViewInfo = {
  /** Compass heading of the top of the screen, degrees clockwise from north. */
  heading: number;
  /** 0 = looking straight down. */
  tiltDeg: number;
  /** On-screen pixels per plan unit at the center of the view. */
  pxPerUnit: number;
  width: number;
  height: number;
};

export type ViewCallbacks = {
  onSelect: (id: string | null) => void;
  onPlace: (mode: ToolMode, p: P) => void;
  onTrace: (p: P) => void;
  onAim: (p: P) => void;
  /** A porch or carport part dragged out over the selected building (two opposite corners, plan). */
  /** A porch/carport part drawn on a building: corners in its own frame, or the wall clicked (and on which side of it). */
  onOpenPart: (buildingId: string, shape: { pts: P[] } | { edge: number; outside: boolean }) => void;
  /** A window or door placed on a building (a point on or near its wall, building frame, and the
   * height clicked on the wall when known), and one picked to edit. */
  onOpening: (buildingId: string, p: P, height: number | null) => void;
  onSelectOpening: (buildingId: string, index: number) => void;
  /** A wall's roof end switched between gable and hip; a wing added on a wall (point in the building's frame). */
  onToggleGable: (buildingId: string, edge: number) => void;
  onWing: (buildingId: string, edge: number, p: P) => void;
  /** A right-click (without dragging): what is under the pointer, for a menu of actions there. */
  onContextMenu: (info: ContextInfo) => void;
  /** Live edits while dragging (no undo step); onCommit ends the gesture. */
  onChange: (id: string, patch: Partial<CanvasItem>) => void;
  onCommit: () => void;
  onInsertVertex: (id: string, p: P) => void;
  onTerrainBrush: (p: P, dt: number, lower: boolean, phase: "start" | "move" | "end") => void;
  onBackgroundDrag: (dx: number, dy: number, phase: "move" | "end") => void;
  onHover: (p: P | null) => void;
  onPose: (pose: "top" | "tilt") => void;
  onInteraction: (active: boolean) => void;
};

/** What a right-click landed on: an item (and a handle on it), the ground point, and for a
 * building the point in its own frame (on the wall, with the height up it, when a wall was hit). */
export type ContextInfo = {
  clientX: number;
  clientY: number;
  itemId: string | null;
  handle: { kind: string; index?: number } | null;
  ground: P | null;
  local: P | null;
  height: number | null;
  /** The point clicked on a building's own model (a railing, a porch floor...), on the plan. */
  surface?: P | null;
};
