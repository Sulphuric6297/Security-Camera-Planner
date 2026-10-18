import type { Dispatch, SetStateAction } from "react";
import { create } from "zustand";
import { DEFAULT_BUILDING_LABEL, DEFAULT_CANVAS } from "../constants";
import type { BuildingLabelDefaults, CanvasItem, DemAlignTool, DemData } from "../types";
import type { GeoBounds, PlanGeoRef, SiteLocation, ElevationOverlayMode } from "../lib/geo/core";

// The saved project ("document"): everything that belongs in a project file, autosave and undo.
// UI-only state (selection, active tool, panels, view) lives elsewhere.

export type BgSettings = { x: number; y: number; width: number; height: number; opacity: number };
export type FrustumSettings = {
  visible: boolean;
  opacity: number;
  edgeOpacity: number;
  useCameraColor: boolean;
  color: string;
  showAll: boolean;
  mode: "volume" | "floor";
};
export type ExportEntry = {
  id: string;
  type: "plan" | "3d" | "camera";
  label: string;
  dataUrl: string;
  cameraId?: string;
};
export type DemTransform = { x: number; y: number; scale: number; rotation: number };

export type ProjectDoc = {
  projectName: string;
  items: CanvasItem[];
  terrainHeights: Record<string, number>;
  canvasSize: { width: number; height: number };
  gridSize: number;
  showGrid: boolean;
  snapToGrid: boolean;
  backgroundImg: string | null;
  bgSettings: BgSettings;
  sceneBackgroundImg: string | null;
  backgroundMode: "flat" | "panorama";
  buildingLabelDefaults: BuildingLabelDefaults;
  frustumSettings: FrustumSettings;
  nvrLayout: any[];
  exportList: ExportEntry[];
  siteLocation: SiteLocation | null;
  siteBounds: GeoBounds | null;
  planGeoRef: PlanGeoRef | null;
  elevationOverlay: ElevationOverlayMode;
  demData: DemData | null;
  demScale: number;
  demOffset: number;
  demNormalize: boolean;
  demTransform: DemTransform;
  demOverlayOpacity: number;
  demAlignMode: boolean;
  demAlignTool: DemAlignTool;
};

export const createEmptyProject = (): ProjectDoc => ({
  projectName: "Security Camera Plan",
  items: [],
  terrainHeights: {},
  canvasSize: DEFAULT_CANVAS,
  gridSize: 20,
  showGrid: true,
  snapToGrid: false,
  backgroundImg: null,
  bgSettings: { x: 0, y: 0, width: DEFAULT_CANVAS.width, height: DEFAULT_CANVAS.height, opacity: 0.5 },
  sceneBackgroundImg: null,
  backgroundMode: "flat",
  buildingLabelDefaults: DEFAULT_BUILDING_LABEL,
  frustumSettings: {
    visible: true,
    opacity: 0.15,
    edgeOpacity: 0.6,
    useCameraColor: true,
    color: "#3b82f6",
    showAll: true,
    mode: "volume"
  },
  nvrLayout: [],
  exportList: [],
  siteLocation: null,
  siteBounds: null,
  planGeoRef: null,
  elevationOverlay: "off",
  demData: null,
  demScale: 1,
  demOffset: 0,
  demNormalize: true,
  demTransform: { x: DEFAULT_CANVAS.width / 2, y: DEFAULT_CANVAS.height / 2, scale: 1, rotation: 0 },
  demOverlayOpacity: 0.6,
  demAlignMode: false,
  demAlignTool: "move"
});

type ProjectStore = ProjectDoc & {
  setField: <K extends keyof ProjectDoc>(key: K, value: SetStateAction<ProjectDoc[K]>) => void;
  replace: (doc: Partial<ProjectDoc>) => void;
};

export const useProject = create<ProjectStore>()(set => ({
  ...createEmptyProject(),
  setField: (key, value) =>
    set(state => ({
      [key]: typeof value === "function" ? (value as (prev: any) => any)(state[key]) : value
    }) as Partial<ProjectStore>),
  replace: doc => set(doc as Partial<ProjectStore>)
}));

/** Live, never-stale snapshot of the project (safe inside long-lived event handlers). */
export const getProject = (): ProjectDoc => useProject.getState();

// Stable setters per field, with React's SetStateAction semantics (value or updater).
const setterCache = new Map<keyof ProjectDoc, Dispatch<SetStateAction<any>>>();
export const projectSetter = <K extends keyof ProjectDoc>(key: K): Dispatch<SetStateAction<ProjectDoc[K]>> => {
  let setter = setterCache.get(key);
  if (!setter) {
    setter = (value: SetStateAction<any>) => useProject.getState().setField(key, value);
    setterCache.set(key, setter);
  }
  return setter as Dispatch<SetStateAction<ProjectDoc[K]>>;
};

/** Drop-in replacement for `useState` for a project field. */
export const useProjectField = <K extends keyof ProjectDoc>(
  key: K
): [ProjectDoc[K], Dispatch<SetStateAction<ProjectDoc[K]>>] => {
  const value = useProject(state => state[key]);
  return [value, projectSetter(key)];
};

// A ref-like view of a project field that always reads the live store value. Lets existing code
// that used `xRef.current` (to dodge stale closures) work without a separate copy to keep in sync.
const refCache = new Map<keyof ProjectDoc, { current: any }>();
export const projectRef = <K extends keyof ProjectDoc>(key: K): { current: ProjectDoc[K] } => {
  let ref = refCache.get(key);
  if (!ref) {
    ref = {
      get current() {
        return useProject.getState()[key];
      },
      set current(value: ProjectDoc[K]) {
        if (useProject.getState()[key] !== value) useProject.getState().setField(key, () => value);
      }
    };
    refCache.set(key, ref);
  }
  return ref as { current: ProjectDoc[K] };
};
