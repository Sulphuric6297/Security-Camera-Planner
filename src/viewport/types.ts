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
  /** North arrow shown when the plan is georeferenced. */
  geo: boolean;
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
  onOpenPart: (buildingId: string, a: P, b: P) => void;
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
