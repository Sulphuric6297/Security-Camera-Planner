// New plan items with real-world sizes. Every size here is in feet; `unitsPerFoot` converts to plan
// units, so objects have the right proportions on any map, whatever its scale.
import {
  COLORS,
  DEFAULT_BUILDING,
  DEFAULT_CAMERA_HEIGHT_FT,
  DEFAULT_CAMERA_HFOV,
  DEFAULT_CAMERA_PITCH,
  DEFAULT_CAMERA_RANGE_FT,
  generateId
} from "../constants";
import { rectanglePoints } from "./geometry";
import { vFovFromH } from "./camera";
import type { CanvasItem, ParkingItem, PavingKind, PavingSurface, TargetItem, TargetKind } from "../types";

export type VehicleType = NonNullable<ParkingItem["vehicleType"]>;

/** Typical outside dimensions (feet) of each vehicle type. */
export const VEHICLE_SIZES: Record<VehicleType, { label: string; width: number; length: number; height: number }> = {
  sedan: { label: "Sedan", width: 6.1, length: 15.8, height: 4.8 },
  suv: { label: "SUV", width: 6.6, length: 16.2, height: 5.9 },
  truck: { label: "Pickup", width: 6.8, length: 19.3, height: 6.4 },
  sports: { label: "Sports car", width: 6.2, length: 14.8, height: 4.2 },
  van: { label: "Van", width: 6.6, length: 17.5, height: 6.6 },
  hatchback: { label: "Hatchback", width: 5.9, length: 13.6, height: 4.8 }
};
export const DEFAULT_VEHICLE: VehicleType = "sedan";

/** Yard trees by size (canopy radius and height, ft). Medium is the default. */
export const TREE_SIZES = {
  small: { label: "Small", radius: 6, height: 15 },
  medium: { label: "Medium", radius: 10, height: 28 },
  large: { label: "Large", radius: 16, height: 45 }
} as const;
export type TreeSize = keyof typeof TREE_SIZES;
export const DEFAULT_TREE = TREE_SIZES.medium;

export type NewItemKind = "camera" | "building" | "tree" | "parking" | "label" | "target" | "recorder" | "paving";

/** Driveways, walkways and patios: their usual size (ft) and surface when first placed. */
export const PAVING_KINDS: Record<PavingKind, { label: string; width: number; length: number; surface: PavingSurface }> = {
  driveway: { label: "Driveway", width: 12, length: 40, surface: "asphalt" },
  walkway: { label: "Walkway", width: 4, length: 20, surface: "concrete" },
  patio: { label: "Patio", width: 14, length: 14, surface: "pavers" }
};
export const PAVING_SURFACES: Record<PavingSurface, string> = {
  asphalt: "Asphalt",
  concrete: "Concrete",
  gravel: "Gravel",
  pavers: "Pavers"
};

/** Spots to protect, with the detail you usually want there. */
export const TARGET_KINDS: Record<TargetKind, { label: string; goal: TargetItem["goal"] }> = {
  door: { label: "Door", goal: "identify" },
  gate: { label: "Gate", goal: "recognize" },
  driveway: { label: "Driveway", goal: "recognize" },
  window: { label: "Window", goal: "observe" },
  yard: { label: "Yard", goal: "detect" },
  other: { label: "Spot", goal: "observe" }
};

/** Vehicle dimensions in plan units for a type. */
export const vehicleDimensions = (type: VehicleType, unitsPerFoot = 1) => {
  const s = VEHICLE_SIZES[type];
  return { width: s.width * unitsPerFoot, height: s.length * unitsPerFoot, vehicleHeight: s.height * unitsPerFoot };
};

/**
 * A vehicle made bigger or smaller as a whole: a new length (plan units) with its width and
 * height scaled to match, so it keeps its proportions.
 */
export const scaledVehicle = (car: { width: number; height: number; vehicleHeight?: number }, length: number) => {
  const k = length / car.height;
  return { width: car.width * k, height: length, vehicleHeight: (car.vehicleHeight ?? car.width * 0.8) * k };
};

/**
 * Builds a new item of the given kind at (x, y) in plan units. Camera heights are in feet;
 * everything else (footprints, wall/tree/vehicle heights) is in plan units like the rest of the 3D scene.
 */
/** Whether cameras may be mounted on a building: the user's own buildings only. */
/**
 * The index (0-based) for the next new camera: one past the highest "Camera N" already used, so
 * deleting Camera 2 of 3 and adding one gives Camera 4, never a second Camera 3.
 */
export const nextCameraIndex = (items: { type: string; label?: string }[]) => {
  let max = 0;
  let count = 0;
  for (const i of items) {
    if (i.type !== "camera") continue;
    count++;
    const m = /^Camera (\d+)$/.exec((i.label ?? "").trim());
    if (m) max = Math.max(max, Number(m[1]));
  }
  return Math.max(max, count);
};

export const isOwnBuilding = (b: { mine?: boolean; importSource?: string }) => b.mine ?? !b.importSource;

export const createItem = (
  kind: NewItemKind,
  x: number,
  y: number,
  opts: {
    unitsPerFoot?: number;
    cameraIndex?: number;
    targetIndex?: number;
    treeSize?: TreeSize;
    treeType?: "deciduous" | "conifer" | "palm" | "bush";
    vehicleType?: VehicleType;
    targetKind?: TargetKind;
    pavingKind?: PavingKind;
  } = {}
): CanvasItem => {
  const u = opts.unitsPerFoot && opts.unitsPerFoot > 0 ? opts.unitsPerFoot : 1;
  const common = { id: generateId(), x, y, rotation: 0 };
  switch (kind) {
    case "camera":
      return {
        ...common,
        type: "camera",
        rotation: 45,
        label: `Camera ${(opts.cameraIndex ?? 0) + 1}`,
        description: "",
        fov: DEFAULT_CAMERA_HFOV,
        hFov: DEFAULT_CAMERA_HFOV,
        vFov: vFovFromH(DEFAULT_CAMERA_HFOV, 16 / 9),
        pitch: DEFAULT_CAMERA_PITCH,
        height: DEFAULT_CAMERA_HEIGHT_FT,
        aspect: 16 / 9,
        mount: { type: "free", edgeT: 0.5, height: DEFAULT_CAMERA_HEIGHT_FT },
        range: DEFAULT_CAMERA_RANGE_FT,
        color: COLORS.camera[(opts.cameraIndex ?? 0) % COLORS.camera.length],
        connectorDashSize: 3
      } as CanvasItem;
    case "building": {
      const w = DEFAULT_BUILDING.width * u;
      const d = DEFAULT_BUILDING.depth * u;
      return {
        ...common,
        type: "building",
        width: w,
        height: d,
        wallHeight: DEFAULT_BUILDING.wallHeight * u,
        label: "Building",
        color: COLORS.building[0],
        points: rectanglePoints(w, d)
      } as CanvasItem;
    }
    case "tree": {
      const size = TREE_SIZES[opts.treeSize ?? "medium"];
      const treeType = opts.treeType ?? "deciduous";
      return {
        ...common,
        type: "tree",
        treeType,
        radius: (treeType === "conifer" ? size.radius * 0.7 : treeType === "bush" ? Math.min(size.radius, 4) : size.radius) * u,
        height: (treeType === "bush" ? 5 : size.height) * u,
        color: treeType === "conifer" ? COLORS.tree[3] : COLORS.tree[0]
      } as CanvasItem;
    }
    case "parking": {
      const vt = opts.vehicleType ?? DEFAULT_VEHICLE;
      return {
        ...common,
        type: "parking",
        vehicleType: vt,
        ...vehicleDimensions(vt, u),
        color: COLORS.parking[0]
      } as CanvasItem;
    }
    case "label":
      return { ...common, type: "label", text: "Text", fontSize: 14, color: COLORS.label[0] } as CanvasItem;
    case "target": {
      const kind = opts.targetKind ?? "door";
      return { ...common, type: "target", kind, goal: TARGET_KINDS[kind].goal, label: `${TARGET_KINDS[kind].label} ${(opts.targetIndex ?? 0) + 1}` } as CanvasItem;
    }
    case "recorder":
      return { ...common, type: "recorder", label: "Recorder" } as CanvasItem;
    case "paving": {
      const kind = opts.pavingKind ?? "driveway";
      const k = PAVING_KINDS[kind];
      // Lengthwise along the plan's y, like a driveway running from the street to the house
      const w = k.width * u, d = k.length * u;
      return { ...common, type: "paving", kind, surface: k.surface, label: k.label, width: w, height: d, points: rectanglePoints(w, d) } as CanvasItem;
    }
  }
};

/**
 * Brings items from older saves up to date. Vehicles used to be created at 24 x 48 ft and 14 ft
 * tall; those untouched defaults become real-size cars of their type.
 */
export const migrateItems = (items: CanvasItem[], unitsPerFoot = 1): CanvasItem[] =>
  items.map(item => {
    if (item.type !== "parking") return item;
    const car = item as ParkingItem;
    const oldDefault = car.width === 24 && car.height === 48 && (car.vehicleHeight === undefined || car.vehicleHeight === 14 || car.vehicleHeight === 12);
    if (!oldDefault) return item;
    const type = (car.vehicleType && car.vehicleType in VEHICLE_SIZES ? car.vehicleType : DEFAULT_VEHICLE) as VehicleType;
    return { ...car, vehicleType: type, ...vehicleDimensions(type, unitsPerFoot) };
  });
