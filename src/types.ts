// --- Types ---

export type ToolMode = "select" | "add-camera" | "add-building" | "add-tree" | "add-parking" | "add-label" | "trace-building" | "add-target" | "measure" | "add-recorder" | "add-open-part" | "add-opening" | "add-wing" | "add-paving";
export type InteractionType = "move" | "rotate" | "fov" | "range" | "resize-image" | "move-label" | "vertex" | null;
export type BuildingLabelDefaults = {
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
};
export type ViewMode = "plan" | "iso3d" | "nvr";
export type TerrainTool = "sculpt" | "smooth" | "flatten" | "woods";
export type DemAlignTool = "move" | "scale" | "rotate" | "pan";
export type DemData = {
  name: string;
  width: number;
  height: number;
  values: Float32Array;
  min: number;
  max: number;
  noData?: number | null;
};
export type HistoryState = {
  items: CanvasItem[];
  terrainHeights: Record<string, number>;
  buildingLabelDefaults: BuildingLabelDefaults;
  backgroundImg: string | null;
  bgSettings: {
    x: number;
    y: number;
    width: number;
    height: number;
    opacity: number;
  };
  canvasSize: { width: number; height: number };
  gridSize: number;
  showGrid: boolean;
  snapToGrid: boolean;
  frustumSettings: {
    visible: boolean;
    opacity: number;
    edgeOpacity: number;
    useCameraColor: boolean;
    color: string;
    showAll: boolean;
    mode: 'volume' | 'floor';
  };
  sceneBackgroundImg: string | null;
  backgroundMode: 'flat' | 'panorama';
  nvrLayout: any[];
  demSettings: {
    demScale: number;
    demOffset: number;
    demNormalize: boolean;
    demTransform: { x: number; y: number; scale: number; rotation: number };
    demOverlayOpacity: number;
    demAlignMode: boolean;
    demAlignTool: DemAlignTool;
  };
};

export interface BaseItem {
  id: string;
  x: number;
  y: number;
  rotation: number; // in degrees
  selected?: boolean;
  /** Locked in place: it can be picked and looked at, but not moved, reshaped or deleted. */
  locked?: boolean;
}

export interface CameraItem extends BaseItem {
  type: "camera";
  label: string;
  description: string;
  fov: number;
  hFov?: number;
  vFov?: number;
  pitch?: number;
  height?: number;
  aspect?: number;
  mount?: {
    type: "free" | "building";
    buildingId?: string;
    edgeIndex?: number;
    edgeT?: number;
    height?: number;
    /** On a wall inside the outline (the back wall of a porch or carport set into the house): a
     * point on it in the building's own frame (the camera sits on the wall nearest it). */
    at?: { x: number; y: number };
  };
  range: number;
  color: string;
  labelOffset?: { x: number; y: number };
  connectorDashSize?: number;
  resolutionWidth?: number; // horizontal pixels (e.g. 2688 for 4 MP); drives DORI distances
  mountPreset?: string;
  lensPreset?: string;
  /** Night vision (infrared) reach in feet; undefined = the typical 100 ft. */
  irRangeFt?: number;
  /** The real camera model (an id in the camera list), when one was picked. */
  model?: string;
  /** Zoom position of a zoom lens, 0 (widest) to 1 (fully zoomed). */
  zoom?: number;
}

export type OpenPartKind = "porch" | "deck" | "carport" | "patio";
/** A porch, carport or patio under a building's roof. */
export interface OpenPart {
  /** Corners (a convex quad) in the building's own frame, plan units. */
  pts: { x: number; y: number }[];
  kind: OpenPartKind;
  /** Floor height above the ground, plan units (a porch deck; 0 for a slab on the ground). */
  floor: number;
  /** Railing around a raised floor (porches). Unset: on when the floor is 1.5 ft or more up. */
  railing?: boolean;
  /** Roof over it: the house's own roof ("main", a part set into the house), its own lower roof
   * sloping away from the house ("own", an attached porch), or none (a deck). Unset: "main" when
   * it lies inside the house's outline, else "own" for porches and carports, "none" otherwise. */
  roof?: "main" | "own" | "none";
  /** Entries (steps down, a gap in the railing): on which open side (see partSides) and how far
   * along it (0..1). Unset: one in the middle of the longest side. */
  entries?: { side: number; at: number }[];
  /** Open sides (see partSides) left without a railing. */
  noRail?: number[];
  /** Slope of its own roof (attached parts), inches of rise per foot. Unset: 3 in 12. */
  pitch?: number;
}

export type OpeningKind = "window" | "picture-window" | "door" | "double-door" | "slider" | "garage-door";
/** A window or door in one of a building's outer walls (like a home-design program's openings). */
export interface Opening {
  /** Stable name (protect spots follow it). */
  id?: string;
  kind: OpeningKind;
  /** Where its middle is, on a wall, in the building's frame (plan units). It sits in the wall
   * nearest that point: an outer wall, or a wall around a porch set into the house. */
  x?: number;
  y?: number;
  /** Older saves: the outline edge it sits in and its middle's distance from that edge's start. */
  edge?: number;
  at?: number;
  /** Size and the height of its bottom above the ground (plan units). */
  width: number;
  height: number;
  sill: number;
  shutters?: boolean;
}

export interface BuildingItem extends BaseItem {
  type: "building";
  importSource?: "osm"; // Footprint imported from OpenStreetMap (replaced on re-import)
  /** One of the user's own buildings (cameras can be mounted on it). Unset: buildings the user drew are, imported ones aren't. */
  mine?: boolean;
  /** Porch, carport or pavilion: a roof on posts, no walls (cameras see through and under it). */
  openSides?: boolean;
  /** Open parts under the roof (a porch, a carport, a patio): areas in the building's own frame with
   * no outer walls, posts instead, and a wall where they meet the house. */
  openParts?: OpenPart[];
  /** Windows and doors placed by the user. Unset: automatic windows (one per bay on every wall). */
  openings?: Opening[];
  /** Walls (outline edge indices) whose roof end is a gable; the other ends are hips. Unset: from the roof type. */
  gableWalls?: number[];
  /** Roof slope, inches of rise per foot (like "6 in 12"). Unset: about 5 in 12, capped for big roofs. */
  roofPitch?: number;
  /** Which of its parts become spots to protect (your buildings): doors, ground-floor windows,
   * driveways (parked cars near it). Unset: doors and driveways. */
  protect?: { doors?: boolean; windows?: boolean; driveways?: boolean };
  /** Protect spots from it the user deleted (their link keys). */
  protectSkip?: string[];
  width: number;
  height: number;
  wallHeight?: number; // Vertical height in 3D (to the eaves)
  /** The first floor's height above the ground (a slab, a crawl space, a raised floor), plan units.
   * Unset: about a foot. Below it the walls show the foundation. */
  floorHeight?: number;
  roofType?: "auto" | "flat" | "gable" | "hip"; // 3D roof shape; "auto" picks from the footprint
  label: string;
  color: string;
  points?: { x: number; y: number }[];
  labelOffset?: { x: number; y: number };
  labelFontFamily?: string;
  labelFontSize?: number;
  labelFontWeight?: number;
}

export interface TreeItem extends BaseItem {
  type: "tree";
  radius: number;
  height?: number;  // Tree height (default 30)
  width?: number;   // Canopy width multiplier (default 1)
  treeType?: 'deciduous' | 'conifer' | 'palm' | 'bush';  // Tree type
  color: string;
  importSource?: "photo"; // Found on the imported aerial photo (replaced on re-import)
}

export interface ParkingItem extends BaseItem {
  type: "parking";
  width: number;
  height: number;
  color: string;
  vehicleType?: 'sedan' | 'suv' | 'truck' | 'sports' | 'van' | 'hatchback';
  vehicleHeight?: number;
  importSource?: "photo"; // Found on the imported aerial photo (replaced on re-import)
}

export interface LabelItem extends BaseItem {
  type: "label";
  text: string;
  fontSize: number;
  color: string;
}

export interface ImageItem extends BaseItem {
  type: "image";
  src: string;
  width: number;
  height: number;
  label: string;
  aspectRatioLocked?: boolean;
}



export type PavingKind = "driveway" | "walkway" | "patio";
export type PavingSurface = "asphalt" | "concrete" | "gravel" | "pavers";
/** A driveway, walkway or patio: a paved shape lying on the ground (it follows the terrain). */
export interface PavingItem extends BaseItem {
  type: "paving";
  kind: PavingKind;
  surface: PavingSurface;
  label: string;
  /** Size of its starting rectangle; its shape is `points` (corners in its own frame, plan units). */
  width: number;
  height: number;
  points?: { x: number; y: number }[];
}

/** A spot the user wants covered (a door, gate, driveway...) and how much detail they need there. */
export type TargetKind = "door" | "gate" | "driveway" | "window" | "yard" | "other";
export interface TargetItem extends BaseItem {
  type: "target";
  kind: TargetKind;
  goal: "identify" | "recognize" | "observe" | "detect";
  label: string;
  /** A spot made from a building's door, window or driveway (it follows it): its key. */
  link?: string;
}

/** The video recorder (NVR) every camera's cable runs back to. One per plan. */
export interface RecorderItem extends BaseItem {
  type: "recorder";
  label: string;
}

export type CanvasItem = CameraItem | BuildingItem | TreeItem | ParkingItem | LabelItem | ImageItem | TargetItem | RecorderItem | PavingItem;
