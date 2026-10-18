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
import type { CanvasItem, ParkingItem, TargetItem, TargetKind } from "../types";

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

/** A mature yard tree: ~24 ft canopy, ~30 ft tall. */
export const DEFAULT_TREE = { radius: 12, height: 30 };

export type NewItemKind = "camera" | "building" | "tree" | "parking" | "label" | "target";

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
 * Builds a new item of the given kind at (x, y) in plan units. Camera heights are in feet;
 * everything else (footprints, wall/tree/vehicle heights) is in plan units like the rest of the 3D scene.
 */
export const createItem = (
  kind: NewItemKind,
  x: number,
  y: number,
  opts: { unitsPerFoot?: number; cameraIndex?: number; targetIndex?: number } = {}
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
    case "tree":
      return { ...common, type: "tree", radius: DEFAULT_TREE.radius * u, height: DEFAULT_TREE.height * u, color: COLORS.tree[0] } as CanvasItem;
    case "parking":
      return {
        ...common,
        type: "parking",
        vehicleType: DEFAULT_VEHICLE,
        ...vehicleDimensions(DEFAULT_VEHICLE, u),
        color: COLORS.parking[0]
      } as CanvasItem;
    case "label":
      return { ...common, type: "label", text: "Text", fontSize: 14, color: COLORS.label[0] } as CanvasItem;
    case "target":
      return { ...common, type: "target", kind: "door", goal: TARGET_KINDS.door.goal, label: `Door ${(opts.targetIndex ?? 0) + 1}` } as CanvasItem;
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
