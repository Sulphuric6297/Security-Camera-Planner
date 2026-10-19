// --- Types ---

export type ToolMode = "select" | "add-camera" | "add-building" | "add-tree" | "add-parking" | "add-label" | "trace-building" | "add-target";
export type InteractionType = "move" | "rotate" | "fov" | "range" | "resize-image" | "move-label" | "vertex" | null;
export type BuildingLabelDefaults = {
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
};
export type ViewMode = "plan" | "iso3d" | "nvr";
export type TerrainTool = "sculpt" | "smooth" | "flatten";
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
}

export interface BuildingItem extends BaseItem {
  type: "building";
  importSource?: "osm"; // Footprint imported from OpenStreetMap (replaced on re-import)
  width: number;
  height: number;
  wallHeight?: number; // Vertical height in 3D (to the eaves)
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
}

export interface ParkingItem extends BaseItem {
  type: "parking";
  width: number;
  height: number;
  color: string;
  vehicleType?: 'sedan' | 'suv' | 'truck' | 'sports' | 'van' | 'hatchback';
  vehicleHeight?: number;
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



/** A spot the user wants covered (a door, gate, driveway...) and how much detail they need there. */
export type TargetKind = "door" | "gate" | "driveway" | "window" | "yard" | "other";
export interface TargetItem extends BaseItem {
  type: "target";
  kind: TargetKind;
  goal: "identify" | "recognize" | "observe" | "detect";
  label: string;
}

export type CanvasItem = CameraItem | BuildingItem | TreeItem | ParkingItem | LabelItem | ImageItem | TargetItem;
