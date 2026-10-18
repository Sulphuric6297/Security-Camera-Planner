
import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import JSZip from "jszip";

import proj4 from "proj4";

import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment';
import {
  Camera,
  Square,
  Move,
  Trash2,
  Download,
  Upload,
  Type,
  Trees,
  Car,
  Image as ImageIcon,
  Unlock,
  Lock,
  Map as MapIcon,
  Save,
  FolderOpen,
  X,
  Layers,
  LayoutGrid,
  Plus,

  Undo,
  Redo,
  Maximize,
  Minimize,
  Mountain,
  LoaderCircle,
  MapPin,
  Hand,
  SquareDashed
} from "lucide-react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { NVRCard } from "./src/components/NVRCard";
import { useProjectField, getProject, useProject, createEmptyProject, projectRef } from "./src/state/project";
import { SitePickerMap } from "./src/components/SitePickerMap";
import { CameraSetupPanel } from "./src/components/CameraSetupPanel";
import { CAMERA_WALL_SNAP_FT, COLORS, DEFAULT_BUILDING, DEFAULT_BUILDING_LABEL, DEFAULT_CAMERA_HEIGHT_FT, DEFAULT_CAMERA_HFOV, DEFAULT_CAMERA_PITCH, DEFAULT_CAMERA_RANGE_FT, DEFAULT_CANVAS, FONT_FAMILIES, FONT_WEIGHTS, MAP_OVERLAY_OFFSET, NVR_COLS, NVR_DEFAULT_H, NVR_DEFAULT_W, NVR_HEADER_FOOTER, NVR_MARGIN, NVR_MIN_ROW_HEIGHT, OBJECT_ELEVATION_OFFSET, TERRAIN_BRUSH_MAX, TERRAIN_BRUSH_MIN, TERRAIN_FALLOFF_MAX, TERRAIN_FALLOFF_MIN, clamp, defaultCameraLabelOffset, generateId, mountHeightForBuilding } from "./src/constants";
import { DORI_LEVELS, diagonalFromHv, doriLevelAt, fovFromDiagonal, getCameraAspectValue, getDoriDistances, getGroundCoverage, hFovFromV, pixelsPerFootAt, vFovFromH } from "./src/lib/camera";
import { BuildingCandidate, OsmBuilding, findBuildingCandidates } from "./src/lib/geo/buildings";
import { ElevationOverlayMode, FEET_PER_METER, GeoBounds, PlanGeoRef, SITE_MAX_WIDTH_FT, SiteLocation, getGeoBounds, selectionFromBounds } from "./src/lib/geo/core";
import { fetchBestElevationGrid } from "./src/lib/geo/elevation";
import { PlaceSuggestion, fetchPlaceSuggestions, resolveSiteLocation } from "./src/lib/geo/geocode";
import { getGeoTiffCorners } from "./src/lib/geo/geotiff";
import { MAP_IMAGERY_SOURCES, MapImagerySource, fetchMapImagery } from "./src/lib/geo/imagery";
import { adjustColor, getEdgeOutwardNormal, getPointsBounds, insertVertexAtLongestEdge, insertVertexAtNearestEdge, normalizeAngle, rectanglePoints, scalePointsToSize } from "./src/lib/geometry";
import { AUTOSAVE_KEY, idbGet, idbSet } from "./src/lib/storage";
import { ELEVATION_RAMP, computeContourSegments, elevationColor, getContourInterval, getTerrainStats } from "./src/lib/terrain";
import { disposeObjectDeep } from "./src/three/dispose";
import { create3dCar, create3dTree, getCarSignature, getItemTypeLabel, getTreeSignature, resolveVehicleType } from "./src/three/models";
import { BaseItem, BuildingItem, BuildingLabelDefaults, CameraItem, CanvasItem, DemAlignTool, DemData, HistoryState, ImageItem, InteractionType, LabelItem, ParkingItem, TerrainTool, ToolMode, TreeItem, ViewMode } from "./src/types";

export default function SecurityPlanner() {
  // --- State ---
  const [items, setItems] = useProjectField("items");

  // Terrain State (Moved up for scope access)
  const [terrainHeights, setTerrainHeights] = useProjectField("terrainHeights");
  const [isTerrainMode, setIsTerrainMode] = useState(false);
  const [terrainTool, setTerrainTool] = useState<TerrainTool>("sculpt");
  const [terrainBrushSize, setTerrainBrushSize] = useState(4); // in tiles
  const [terrainBrushStrength, setTerrainBrushStrength] = useState(40); // height units per second
  const [terrainBrushFalloff, setTerrainBrushFalloff] = useState(2);
  const [terrainFlattenTarget, setTerrainFlattenTarget] = useState(0);
  const [terrainFlattenSample, setTerrainFlattenSample] = useState(true);
  const [demData, setDemData] = useProjectField("demData");
  const [demScale, setDemScale] = useProjectField("demScale");
  const [demOffset, setDemOffset] = useProjectField("demOffset");
  const [demNormalize, setDemNormalize] = useProjectField("demNormalize");
  const [demPreview, setDemPreview] = useState<{ url: string; width: number; height: number } | null>(null);
  const [demAlignMode, setDemAlignMode] = useProjectField("demAlignMode");
  const [demTransform, setDemTransform] = useProjectField("demTransform");
  const [demOverlayOpacity, setDemOverlayOpacity] = useProjectField("demOverlayOpacity");
  const [demAutoApply, setDemAutoApply] = useState(true);
  const [demAlignTool, setDemAlignTool] = useProjectField("demAlignTool");
  const [showDemGuide, setShowDemGuide] = useState(false);
  // One-click elevation
  const [siteLocation, setSiteLocation] = useProjectField("siteLocation");
  const [showElevationDialog, setShowElevationDialog] = useState(false);
  const [elevationQuery, setElevationQuery] = useState("");
  const [siteBounds, setSiteBounds] = useProjectField("siteBounds");
  const [pickerView, setPickerView] = useState({ lat: 39.5, lon: -98.35, zoom: 4, key: 0 });
  const [pickerDrawing, setPickerDrawing] = useState(false);
  const [importBuildings, setImportBuildings] = useState(true);
  const [buildingCandidates, setBuildingCandidates] = useState<BuildingCandidate[]>([]);
  const [buildingScan, setBuildingScan] = useState<{ state: "idle" | "loading" | "done" | "error"; message: string }>({ state: "idle", message: "" });
  const [selectViewSignal, setSelectViewSignal] = useState(0);
  const [placeSuggestions, setPlaceSuggestions] = useState<PlaceSuggestion[]>([]);
  const [showPlaceSuggestions, setShowPlaceSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const [planGeoRef, setPlanGeoRef] = useProjectField("planGeoRef");
  const [elevationExaggeration, setElevationExaggeration] = useState(1);
  const [elevationStatus, setElevationStatus] = useState<{ state: "idle" | "loading" | "done" | "error"; message: string }>({ state: "idle", message: "" });
  const [elevationOverlay, setElevationOverlay] = useProjectField("elevationOverlay");
  const [elevationImagery, setElevationImagery] = useState<MapImagerySource | "keep">("satellite");
  const elevationReadoutRef = useRef<HTMLDivElement>(null);
  const cameraReadoutRef = useRef<HTMLDivElement>(null);
  const planBrushCursorRef = useRef<SVGCircleElement>(null);
  const [demTransformDrag, setDemTransformDrag] = useState<{
    mode: "move" | "scale" | "rotate";
    startMouse: { x: number; y: number };
    startTransform: { x: number; y: number; scale: number; rotation: number };
  } | null>(null);
  const [isBackgroundDragging, setIsBackgroundDragging] = useState(false);
  const [bgDragStart, setBgDragStart] = useState({ x: 0, y: 0, bgX: 0, bgY: 0 });
  const [mapMoveMode, setMapMoveMode] = useState(false);
  const [buildingLabelDefaults, setBuildingLabelDefaults] = useProjectField("buildingLabelDefaults");

  const panelSection = "rounded-xl border border-white/10 bg-white/5 p-4 space-y-3";
  const panelSectionLoose = "rounded-xl border border-white/10 bg-white/5 p-4 space-y-4";

  // Canvas + Background State
  const [canvasSize, setCanvasSize] = useProjectField("canvasSize");
  const [backgroundImg, setBackgroundImg] = useProjectField("backgroundImg");
  const [bgSettings, setBgSettings] = useProjectField("bgSettings");

  const [gridSize, setGridSize] = useProjectField("gridSize");
  const [showGrid, setShowGrid] = useProjectField("showGrid");
  const [snapToGrid, setSnapToGrid] = useProjectField("snapToGrid");
  const [projectName, setProjectName] = useProjectField("projectName");
  const [showExportPanel, setShowExportPanel] = useState(false);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(true);
  const [rightPanelMode, setRightPanelMode] = useState<"properties" | "project">("properties");
  const [viewMode, setViewMode] = useState<ViewMode>("plan");
  const [exportOptions, setExportOptions] = useState({
    scale: 2,
    padding: 48,
    includeGrid: true,
    includeLegend: true,
    includeTitle: true,
    includeCameraViews: true
  });
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0, panX: 0, panY: 0 });
  const [isSpacePressed, setIsSpacePressed] = useState(false);
  const isSpacePressedRef = useRef(false);

  const [mode, setMode] = useState<ToolMode>("select");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    if (selectedId) {
      setIsRightPanelOpen(true);
      setRightPanelMode("properties");
    }
  }, [selectedId]);

  // State Refs for History (Ensures we save latest state in async callbacks)
  const currentItemsRef = projectRef("items");
  const terrainHeightsRef = projectRef("terrainHeights");
  const buildingLabelDefaultsRef = projectRef("buildingLabelDefaults");
  const backgroundImgRef = projectRef("backgroundImg");
  const bgSettingsRef = projectRef("bgSettings");
  const canvasSizeRef = projectRef("canvasSize");
  const gridSizeRef = projectRef("gridSize");
  const showGridRef = projectRef("showGrid");
  const snapToGridRef = projectRef("snapToGrid");
  const frustumSettingsRef = projectRef("frustumSettings");
  const sceneBackgroundImgRef = projectRef("sceneBackgroundImg");
  const backgroundModeRef = projectRef("backgroundMode");
  const nvrLayoutRef = projectRef("nvrLayout");
  const demScaleRef = projectRef("demScale");
  const demOffsetRef = projectRef("demOffset");
  const demNormalizeRef = projectRef("demNormalize");
  const demTransformRef = projectRef("demTransform");
  const demOverlayOpacityRef = projectRef("demOverlayOpacity");
  const demAlignModeRef = projectRef("demAlignMode");
  const demAlignToolRef = projectRef("demAlignTool");
  const isApplyingHistoryRef = useRef(false);
  const historySettingsTimerRef = useRef<number | null>(null);
  const itemsHistoryTimerRef = useRef<number | null>(null);

  // Clipboard
  const [clipboard, setClipboard] = useState<CanvasItem | null>(null);
  const clipboardRef = useRef<CanvasItem | null>(null);
  useEffect(() => { clipboardRef.current = clipboard; }, [clipboard]);

  // History (undo/redo). Kept in refs so every caller — including long-lived 3D event handlers —
  // sees the live stack. Large images are shared by reference instead of copied into each step.
  type HistoryEntry = { key: string; state: HistoryState };
  const HISTORY_LIMIT = 50;
  const historyRef = useRef<HistoryEntry[]>([]);
  const historyIndexRef = useRef(-1);
  const [historyVersion, setHistoryVersion] = useState(0);
  const canUndo = historyVersion >= 0 && historyIndexRef.current > 0;
  const canRedo = historyVersion >= 0 && historyIndexRef.current < historyRef.current.length - 1;

  const saveHistory = (itemsOverride?: CanvasItem[], terrainHeightsOverride?: Record<string, number>) => {
    if (isApplyingHistoryRef.current) return;
    const state: HistoryState = {
      items: structuredClone(itemsOverride || currentItemsRef.current),
      terrainHeights: terrainHeightsOverride || terrainHeightsRef.current,
      buildingLabelDefaults: buildingLabelDefaultsRef.current,
      backgroundImg: backgroundImgRef.current,
      bgSettings: bgSettingsRef.current,
      canvasSize: canvasSizeRef.current,
      gridSize: gridSizeRef.current,
      showGrid: showGridRef.current,
      snapToGrid: snapToGridRef.current,
      frustumSettings: frustumSettingsRef.current,
      sceneBackgroundImg: sceneBackgroundImgRef.current,
      backgroundMode: backgroundModeRef.current,
      nvrLayout: nvrLayoutRef.current,
      demSettings: {
        demScale: demScaleRef.current,
        demOffset: demOffsetRef.current,
        demNormalize: demNormalizeRef.current,
        demTransform: demTransformRef.current,
        demOverlayOpacity: demOverlayOpacityRef.current,
        demAlignMode: demAlignModeRef.current,
        demAlignTool: demAlignToolRef.current
      }
    };
    // Compare cheaply: big image data URLs are represented by a short fingerprint.
    const imageKey = (img: string | null) => (img ? `${img.length}:${img.slice(-48)}` : null);
    const key = JSON.stringify({ ...state, backgroundImg: imageKey(state.backgroundImg), sceneBackgroundImg: imageKey(state.sceneBackgroundImg) });
    const stack = historyRef.current;
    const index = historyIndexRef.current;
    // Don't save if same as current top
    if (index >= 0 && stack[index]?.key === key) return;
    const next = stack.slice(0, index + 1);
    next.push({ key, state });
    while (next.length > HISTORY_LIMIT) next.shift();
    historyRef.current = next;
    historyIndexRef.current = next.length - 1;
    setHistoryVersion(v => v + 1);
  };

  // Start a fresh undo stack from whatever is on screen once pending state updates have rendered.
  const resetHistory = () => {
    historyRef.current = [];
    historyIndexRef.current = -1;
    setHistoryVersion(v => v + 1);
    window.setTimeout(() => saveHistory(), 120);
  };

  const applyHistoryState = (state: any) => {
    if (Array.isArray(state)) {
      setItems(state);
      return;
    }
    if (!state || typeof state !== "object") return;
    if (Array.isArray(state.items)) setItems(state.items);
    if (state.terrainHeights && typeof state.terrainHeights === "object") setTerrainHeights(state.terrainHeights);
    if (state.buildingLabelDefaults) {
      setBuildingLabelDefaults({ ...DEFAULT_BUILDING_LABEL, ...state.buildingLabelDefaults });
    } else {
      setBuildingLabelDefaults(DEFAULT_BUILDING_LABEL);
    }
    if (state.backgroundImg !== undefined) setBackgroundImg(state.backgroundImg);
    if (state.bgSettings) setBgSettings(state.bgSettings);
    if (state.canvasSize) setCanvasSize(state.canvasSize);
    if (typeof state.gridSize === "number") setGridSize(state.gridSize);
    if (typeof state.showGrid === "boolean") setShowGrid(state.showGrid);
    if (typeof state.snapToGrid === "boolean") setSnapToGrid(state.snapToGrid);
    if (state.frustumSettings) setFrustumSettings(state.frustumSettings);
    if (state.sceneBackgroundImg !== undefined) setSceneBackgroundImg(state.sceneBackgroundImg);
    if (state.backgroundMode) setBackgroundMode(state.backgroundMode);
    if (Array.isArray(state.nvrLayout)) setNvrLayout(state.nvrLayout);
    if (state.demSettings) {
      const settings = state.demSettings;
      if (typeof settings.demScale === "number") setDemScale(settings.demScale);
      if (typeof settings.demOffset === "number") setDemOffset(settings.demOffset);
      if (typeof settings.demNormalize === "boolean") setDemNormalize(settings.demNormalize);
      if (settings.demTransform) setDemTransform(settings.demTransform);
      if (typeof settings.demOverlayOpacity === "number") setDemOverlayOpacity(settings.demOverlayOpacity);
      if (typeof settings.demAlignMode === "boolean") setDemAlignMode(settings.demAlignMode);
      if (settings.demAlignTool) setDemAlignTool(settings.demAlignTool);
    }
  };

  const handleUndo = () => {
    const curIndex = historyIndexRef.current;
    if (curIndex > 0) {
      const newIndex = curIndex - 1;
      try {
        isApplyingHistoryRef.current = true;
        applyHistoryState(structuredClone(historyRef.current[newIndex].state));
        historyIndexRef.current = newIndex;
        setHistoryVersion(v => v + 1);
        window.setTimeout(() => {
          isApplyingHistoryRef.current = false;
        }, 0);
      } catch (e) {
        isApplyingHistoryRef.current = false;
        console.error("Undo failed", e);
      }
    }
  };

  const handleRedo = () => {
    const curIndex = historyIndexRef.current;
    if (curIndex < historyRef.current.length - 1) {
      const newIndex = curIndex + 1;
      try {
        isApplyingHistoryRef.current = true;
        applyHistoryState(structuredClone(historyRef.current[newIndex].state));
        historyIndexRef.current = newIndex;
        setHistoryVersion(v => v + 1);
        window.setTimeout(() => {
          isApplyingHistoryRef.current = false;
        }, 0);
      } catch (e) {
        isApplyingHistoryRef.current = false;
        console.error("Redo failed", e);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (exportNoticeTimerRef.current) {
        window.clearTimeout(exportNoticeTimerRef.current);
      }
    };
  }, []);

  // Interaction State
  const [interactionState, setInteractionState] = useState<{
    type: InteractionType;
    itemId: string | null;
    startMouse: { x: number; y: number };
    startVal: any;
    variant?: string;
    snap?: boolean;
  }>({ type: null, itemId: null, startMouse: { x: 0, y: 0 }, startVal: null, snap: false });
  const interactionStateRef = useRef(interactionState);
  useEffect(() => { interactionStateRef.current = interactionState; }, [interactionState]);

  // NVR Layout State
  const [nvrLayout, setNvrLayout] = useProjectField("nvrLayout");
  const [maximizedCamId, setMaximizedCamId] = useState<string | null>(null);
  const nvrContainerRef = useRef<HTMLDivElement>(null);
  const [nvrSize, setNvrSize] = useState({ width: 0, height: 0 });
  const nvrAspect = useMemo(() => {
    const cams = items.filter(i => i.type === "camera") as CameraItem[];
    return getCameraAspectValue(cams[0]);
  }, [items]);
  const nvrRowHeight = useMemo(() => {
    const gridWidth = Math.max(320, (nvrSize.width || canvasSize.width) - 32);
    const colWidth = (gridWidth - NVR_MARGIN * (NVR_COLS + 1)) / NVR_COLS;
    const itemWidth = colWidth * NVR_DEFAULT_W + NVR_MARGIN * (NVR_DEFAULT_W - 1);
    const imageHeight = itemWidth / nvrAspect;
    const totalHeight = imageHeight + NVR_HEADER_FOOTER;
    const rowHeight = (totalHeight - NVR_MARGIN * (NVR_DEFAULT_H - 1)) / NVR_DEFAULT_H;
    return Math.max(NVR_MIN_ROW_HEIGHT, rowHeight);
  }, [canvasSize.width, nvrSize.width, nvrAspect]);

  // Sync Layout with Items
  useEffect(() => {
    const cams = items.filter(i => i.type === 'camera');
    const layoutIds = new Set(nvrLayout.map(l => l.i));
    const newCams = cams.filter(c => !layoutIds.has(c.id));
    const validIds = new Set(cams.map(c => c.id));

    let nextLayout = nvrLayout.filter(l => validIds.has(l.i));

    if (newCams.length > 0) {
        newCams.forEach((cam, idx) => {
          // Append logic - 3 cameras per row (4 columns each) for 16:9 previews
          const count = nextLayout.length;
          nextLayout.push({
            i: cam.id,
            x: (count * NVR_DEFAULT_W) % NVR_COLS,
            y: Math.floor((count * NVR_DEFAULT_W) / NVR_COLS) * NVR_DEFAULT_H,
            w: NVR_DEFAULT_W,
            h: NVR_DEFAULT_H
          });
        });
      setNvrLayout(nextLayout);
    } else if (nextLayout.length !== nvrLayout.length) {
      setNvrLayout(nextLayout);
    }
  }, [items]);

  const onLayoutChange = (newLayout: any) => {
    setNvrLayout(newLayout);
  };

  useEffect(() => {
    if (!nvrContainerRef.current) return;
    const el = nvrContainerRef.current;
    const updateSize = () => {
      const rect = el.getBoundingClientRect();
      setNvrSize({ width: rect.width, height: rect.height });
    };
    updateSize();
    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(updateSize);
      observer.observe(el);
      return () => observer.disconnect();
    }
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [viewMode, isRightPanelOpen]);

  // Terrain State
  // Terrain State moved to top



  // Bilinear interpolation between terrain vertices so objects sit smoothly on slopes
  // (exact at grid vertices, so terrain meshes are unaffected).
  const getGridHeight = (x: number, y: number, map = terrainHeights) => {
    const grid = gridSize || 20;
    const fx = x / grid;
    const fy = y / grid;
    const ix = Math.floor(fx);
    const iy = Math.floor(fy);
    const tx = fx - ix;
    const ty = fy - iy;
    const at = (gx: number, gy: number) => map[`${gx * grid},${gy * grid}`] || 0;
    const top = at(ix, iy) * (1 - tx) + at(ix + 1, iy) * tx;
    const bottom = at(ix, iy + 1) * (1 - tx) + at(ix + 1, iy + 1) * tx;
    return top * (1 - ty) + bottom * ty;
  };

  // Base elevation for a camera: building-mounted cameras sit on the building, not the ground under them.
  const getCameraBaseHeight = (camera: CameraItem, camPos = getCameraPlanPosition(camera)) => {
    if (camera.mount?.type === "building" && camera.mount.buildingId) {
      const building = getBuildingById(camera.mount.buildingId);
      if (building) return getBuildingBaseHeight(building);
    }
    return getGridHeight(camPos.x, camPos.y) + OBJECT_ELEVATION_OFFSET;
  };

  const terrainStats = useMemo(() => getTerrainStats(terrainHeights), [terrainHeights]);
  const hasTerrain = terrainStats.relief > 0.01;
  const contourInterval = getContourInterval(terrainStats.relief);
  const contourSegments = useMemo(() => {
    if (!hasTerrain) return [];
    return computeContourSegments(
      terrainHeights,
      gridSize || 20,
      canvasSize.width,
      canvasSize.height,
      contourInterval,
      terrainStats.min,
      terrainStats.max
    );
  }, [terrainHeights, gridSize, canvasSize.width, canvasSize.height, contourInterval, terrainStats.min, terrainStats.max, hasTerrain]);

  const isMajorContour = (level: number) => Math.abs(Math.round(level / contourInterval)) % 5 === 0;

  // SVG paths for plan-view contours, plus a few spaced-out labels on the major (index) lines.
  const contourPaths = useMemo(() => {
    if (contourSegments.length === 0) return null;
    let minor = "";
    let major = "";
    const labels: { x: number; y: number; text: string }[] = [];
    const minLabelGap = Math.max(canvasSize.width, canvasSize.height) / 6;
    const fmt = (v: number) => Math.round(v * 10) / 10;
    contourSegments.forEach(seg => {
      const d = `M${fmt(seg.x1)} ${fmt(seg.y1)}L${fmt(seg.x2)} ${fmt(seg.y2)}`;
      if (isMajorContour(seg.level)) major += d;
      else minor += d;
      if (labels.length > 60) return;
      const mx = (seg.x1 + seg.x2) / 2;
      const my = (seg.y1 + seg.y2) / 2;
      const edgeMargin = Math.min(canvasSize.width, canvasSize.height) * 0.04;
      if (mx < edgeMargin || my < edgeMargin || mx > canvasSize.width - edgeMargin || my > canvasSize.height - edgeMargin) return;
      if (labels.some(l => Math.hypot(l.x - mx, l.y - my) < minLabelGap)) return;
      labels.push({ x: mx, y: my, text: `${Math.round(seg.level * 10) / 10}′` });
    });
    return { minor, major, labels };
  }, [contourSegments, contourInterval, canvasSize.width, canvasSize.height]);

  // Hillshade + elevation tint image for the plan view (one pixel per terrain vertex, smoothed by the browser).
  const elevationShadeUrl = useMemo(() => {
    if (!hasTerrain || typeof document === "undefined") return null;
    const grid = gridSize || 20;
    const cols = Math.floor(canvasSize.width / grid) + 1;
    const rows = Math.floor(canvasSize.height / grid) + 1;
    const canvas = document.createElement("canvas");
    canvas.width = cols;
    canvas.height = rows;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    const img = ctx.createImageData(cols, rows);
    const h = (ix: number, iy: number) =>
      terrainHeights[`${clamp(ix, 0, cols - 1) * grid},${clamp(iy, 0, rows - 1) * grid}`] ?? 0;
    const range = terrainStats.relief || 1;
    // Light from the north-west, like a topo map.
    const light = new THREE.Vector3(-1, 1.2, -1).normalize();
    for (let iy = 0; iy < rows; iy++) {
      for (let ix = 0; ix < cols; ix++) {
        const v = h(ix, iy);
        const dx = (h(ix + 1, iy) - h(ix - 1, iy)) / (2 * grid);
        const dz = (h(ix, iy + 1) - h(ix, iy - 1)) / (2 * grid);
        const normal = new THREE.Vector3(-dx * 2, 1, -dz * 2).normalize();
        const shade = clamp(0.55 + normal.dot(light) * 0.6, 0.35, 1.15);
        const [r, g, b] = elevationColor((v - terrainStats.min) / range);
        const i = (iy * cols + ix) * 4;
        img.data[i] = clamp(r * shade, 0, 255);
        img.data[i + 1] = clamp(g * shade, 0, 255);
        img.data[i + 2] = clamp(b * shade, 0, 255);
        img.data[i + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);
    return canvas.toDataURL("image/png");
  }, [terrainHeights, gridSize, canvasSize.width, canvasSize.height, terrainStats.min, terrainStats.relief, hasTerrain]);

  const formatElevation = (value: number) => `${value >= 0 ? "" : "-"}${Math.abs(value) < 10 ? Math.abs(value).toFixed(1) : Math.round(Math.abs(value))} ft`;

  // "32 ft from Camera 2 · 52 px/ft · Recognize" under the cursor while a camera is selected.
  const updateCameraReadout = (x: number, y: number) => {
    const el = cameraReadoutRef.current;
    if (!el) return;
    const cam = items.find(i => i.id === selectedId && i.type === "camera") as CameraItem | undefined;
    if (!cam) {
      el.style.opacity = "0";
      return;
    }
    const pos = getCameraPlanPosition(cam);
    const dist = Math.hypot(x - pos.x, y - pos.y);
    const level = doriLevelAt(cam, dist);
    el.style.opacity = "1";
    el.textContent = `${Math.round(dist)} ft from ${cam.label} · ${Math.round(pixelsPerFootAt(cam, dist))} px/ft · ${level ? level.label : "Too far"}`;
  };

  const updateElevationReadout = (x: number, y: number) => {
    const el = elevationReadoutRef.current;
    if (!el) return;
    if (x < 0 || y < 0 || x > canvasSize.width || y > canvasSize.height || !hasTerrain) {
      el.style.opacity = "0";
      return;
    }
    el.style.opacity = "1";
    el.textContent = `Elevation ${formatElevation(getGridHeight(x, y))}`;
  };

  const getVertexKey = (x: number, z: number) => `${x},${z}`;

  const getVertexHeight = (x: number, z: number, map = terrainHeights) =>
    map[getVertexKey(x, z)] ?? 0;

  const getBrushRadius = (grid = gridSize) =>
    Math.max(grid, clamp(terrainBrushSizeRef.current, TERRAIN_BRUSH_MIN, TERRAIN_BRUSH_MAX) * grid);

  const getBrushWeight = (distance: number, radius: number, falloff: number) => {
    if (distance >= radius) return 0;
    const t = 1 - distance / radius;
    return Math.pow(t, clamp(falloff, TERRAIN_FALLOFF_MIN, TERRAIN_FALLOFF_MAX));
  };

  const applyBrushStroke = (
    centerX: number,
    centerZ: number,
    tool: TerrainTool,
    direction: 1 | -1,
    dt: number
  ) => {
    const grid = gridSizeRef.current || gridSize;
    const radius = getBrushRadius(grid);
    const strength = clamp(terrainBrushStrengthRef.current, 1, 100);
    const falloff = terrainBrushFalloffRef.current;
    const source = terrainHeightsRef.current;
    const next = { ...source };

    const minX = Math.max(0, Math.floor((centerX - radius) / grid) * grid);
    const maxX = Math.min(canvasSize.width, Math.ceil((centerX + radius) / grid) * grid);
    const minZ = Math.max(0, Math.floor((centerZ - radius) / grid) * grid);
    const maxZ = Math.min(canvasSize.height, Math.ceil((centerZ + radius) / grid) * grid);

    const blend = clamp((strength / 100) * dt * 5, 0, 1);
    const sculptDelta = strength * dt * direction;
    const flattenTarget = terrainFlattenTargetRef.current;

    for (let x = minX; x <= maxX; x += grid) {
      for (let z = minZ; z <= maxZ; z += grid) {
        const dist = Math.hypot(x - centerX, z - centerZ);
        const weight = getBrushWeight(dist, radius, falloff);
        if (weight <= 0) continue;

        const key = getVertexKey(x, z);
        const baseH = source[key] ?? 0;
        let value = baseH;

        if (tool === "sculpt") {
          value = baseH + sculptDelta * weight;
        } else if (tool === "smooth") {
          let sum = 0;
          let count = 0;
          for (let dx = -grid; dx <= grid; dx += grid) {
            for (let dz = -grid; dz <= grid; dz += grid) {
              sum += getVertexHeight(x + dx, z + dz, source);
              count++;
            }
          }
          const avg = count > 0 ? sum / count : baseH;
          value = baseH + (avg - baseH) * blend * weight;
        } else if (tool === "flatten") {
          value = baseH + (flattenTarget - baseH) * blend * weight;
        }

        if (Math.abs(value) < 0.001) {
          delete next[key];
        } else {
          next[key] = value;
        }
      }
    }

    setTerrainHeights(next);
    terrainHeightsRef.current = next;
  };

  const applyDemToTerrain = (
    data = demDataRef.current,
    options?: {
      save?: boolean;
      preview?: { width: number; height: number } | null;
      transform?: { x: number; y: number; scale: number; rotation: number };
      scale?: number;
      offset?: number;
      normalize?: boolean;
      canvas?: { width: number; height: number };
    }
  ) => {
    if (!data) return;
    const canvasSize = options?.canvas ?? canvasSizeRef.current;
    const demNormalize = options?.normalize ?? demNormalizeRef.current;
    const demScale = options?.scale ?? demScaleRef.current;
    const demOffset = options?.offset ?? demOffsetRef.current;
    const grid = gridSizeRef.current || gridSize;
    const next: Record<string, number> = {};
    const minVal = data.min;
    const maxVal = data.max;
    if (!Number.isFinite(minVal) || !Number.isFinite(maxVal)) return;

    const preview = options?.preview ?? demPreviewRef.current;
    const transform = options?.transform ?? demTransformRef.current;
    const previewW = preview?.width ?? data.width;
    const previewH = preview?.height ?? data.height;
    const centerX = transform?.x ?? canvasSize.width / 2;
    const centerY = transform?.y ?? canvasSize.height / 2;
    const scale = transform?.scale ?? 1;
    const rotation = ((transform?.rotation ?? 0) * Math.PI) / 180;
    const cos = Math.cos(-rotation);
    const sin = Math.sin(-rotation);

    for (let x = 0; x <= canvasSize.width; x += grid) {
      for (let z = 0; z <= canvasSize.height; z += grid) {
        const dx = x - centerX;
        const dy = z - centerY;
        const rx = dx * cos - dy * sin;
        const ry = dx * sin + dy * cos;
        const localX = rx / Math.max(scale, 0.0001) + previewW / 2;
        const localY = ry / Math.max(scale, 0.0001) + previewH / 2;
        if (localX < 0 || localY < 0 || localX > previewW || localY > previewH) continue;

        const px = Math.round((localX / previewW) * (data.width - 1));
        const pz = Math.round((localY / previewH) * (data.height - 1));
        const idx = pz * data.width + px;
        const raw = data.values[idx];
        if (!Number.isFinite(raw)) continue;
        if (data.noData !== null && data.noData !== undefined && raw === data.noData) continue;

        let value = raw;
        if (demNormalize) value -= minVal;
        value = value * demScale + demOffset;

        if (Math.abs(value) > 0.001) {
          next[getVertexKey(x, z)] = value;
        }
      }
    }

    setTerrainHeights(next);
    terrainHeightsRef.current = next;
    if (options?.save !== false) {
      saveHistory(undefined, next);
    }
  };

  const buildDemPreview = (data: DemData) => {
    const maxDim = 512;
    const scale = Math.max(data.width, data.height) / maxDim;
    const previewW = Math.max(1, Math.round(data.width / Math.max(scale, 1)));
    const previewH = Math.max(1, Math.round(data.height / Math.max(scale, 1)));
    const canvas = document.createElement("canvas");
    canvas.width = previewW;
    canvas.height = previewH;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    const img = ctx.createImageData(previewW, previewH);
    const denom = data.max - data.min || 1;

    for (let y = 0; y < previewH; y++) {
      for (let x = 0; x < previewW; x++) {
        const sx = Math.round((x / (previewW - 1 || 1)) * (data.width - 1));
        const sy = Math.round((y / (previewH - 1 || 1)) * (data.height - 1));
        const v = data.values[sy * data.width + sx];
        const idx = (y * previewW + x) * 4;
        if (!Number.isFinite(v) || (data.noData !== null && data.noData !== undefined && v === data.noData)) {
          img.data[idx + 3] = 0;
          continue;
        }
        const n = Math.max(0, Math.min(1, (v - data.min) / denom));
        const g = Math.round(n * 255);
        img.data[idx] = g;
        img.data[idx + 1] = g;
        img.data[idx + 2] = g;
        img.data[idx + 3] = 200;
      }
    }

    ctx.putImageData(img, 0, 0);
    return { url: canvas.toDataURL("image/png"), width: previewW, height: previewH };
  };

  // The real-world area elevation is fetched for: the base map if there is one, otherwise the whole canvas.
  const getElevationArea = () => {
    if (backgroundImg) {
      return { x: bgSettings.x, y: bgSettings.y, width: bgSettings.width, height: bgSettings.height };
    }
    return { x: 0, y: 0, width: canvasSize.width, height: canvasSize.height };
  };

  const openElevationDialog = () => {
    if (!backgroundImg && elevationImagery === "keep") setElevationImagery("satellite");
    if (siteLocation && !elevationQuery) setElevationQuery(siteLocation.label);
    if (siteBounds) {
      const c = selectionFromBounds(siteBounds, "");
      setPickerView(v => ({ lat: c.center.lat, lon: c.center.lon, zoom: Math.max(v.zoom, 17), key: v.key + 1 }));
    }
    setPickerDrawing(false);
    setElevationStatus({ state: "idle", message: "" });
    setShowElevationDialog(true);
  };

  // A screenshot uploaded from inside the Import Site dialog should be kept, not replaced.
  useEffect(() => {
    if (showElevationDialog && backgroundImg && (elevationStatus.state === "idle" || elevationStatus.state === "error")) {
      setElevationImagery("keep");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backgroundImg]);

  // Default selection around a searched point: a typical property-sized rectangle.
  const selectAroundPoint = (lat: number, lon: number, label: string, widthFt = 400, heightFt = 280) => {
    const bounds = getGeoBounds({ lat, lon, label }, widthFt, heightFt);
    setSiteBounds(bounds);
    setSiteLocation({ lat, lon, label });
    setPickerView(v => ({ lat, lon, zoom: 18, key: v.key + 1 }));
  };

  const searchSiteLocation = async (suggestion?: PlaceSuggestion) => {
    const query = suggestion ? [suggestion.text, suggestion.detail].filter(Boolean).join(", ") : elevationQuery;
    if (suggestion) setElevationQuery(query);
    setShowPlaceSuggestions(false);
    setPlaceSuggestions([]);
    setElevationStatus({ state: "loading", message: "Searching…" });
    try {
      const location = await resolveSiteLocation(query, { near: { lat: pickerView.lat, lon: pickerView.lon }, suggestion });
      selectAroundPoint(location.lat, location.lon, location.label);
      setElevationStatus({ state: "idle", message: "" });
    } catch (err) {
      setElevationStatus({ state: "error", message: err instanceof Error ? err.message : "Search failed." });
    }
  };

  // Suggestions while typing (debounced), biased toward where the map is looking.
  useEffect(() => {
    if (!showElevationDialog || !showPlaceSuggestions) return;
    const text = elevationQuery.trim();
    if (text.length < 3) {
      setPlaceSuggestions([]);
      return;
    }
    let cancelled = false;
    const timer = window.setTimeout(async () => {
      const list = await fetchPlaceSuggestions(text, { lat: pickerView.lat, lon: pickerView.lon });
      if (!cancelled) {
        setPlaceSuggestions(list);
        setActiveSuggestion(-1);
      }
    }, 300);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elevationQuery, showPlaceSuggestions, showElevationDialog]);

  // Look for buildings whenever the selected area settles, so they can be reviewed on the map before importing.
  useEffect(() => {
    if (!showElevationDialog || !siteBounds || !importBuildings) {
      if (!siteBounds) setBuildingCandidates([]);
      return;
    }
    const dims = selectionFromBounds(siteBounds, "");
    if (dims.widthFt > SITE_MAX_WIDTH_FT || dims.heightFt > SITE_MAX_WIDTH_FT) return;
    let cancelled = false;
    setBuildingScan({ state: "loading", message: "Looking for buildings…" });
    const timer = window.setTimeout(async () => {
      try {
        const result = await findBuildingCandidates(siteBounds);
        if (cancelled) return;
        setBuildingCandidates(result.candidates);
        if (!result.osmOk && !result.detectedOk) {
          setBuildingScan({ state: "error", message: "Couldn't reach the building services. You can still import and draw buildings yourself." });
        } else {
          setBuildingScan({ state: "done", message: "" });
        }
      } catch (err) {
        if (!cancelled) setBuildingScan({ state: "error", message: "Couldn't look up buildings for this area." });
      }
    }, 600);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [siteBounds, showElevationDialog, importBuildings]);

  const toggleBuildingCandidate = (id: string) =>
    setBuildingCandidates(prev => prev.map(c => (c.id === id ? { ...c, selected: !c.selected } : c)));
  const setAllBuildingCandidates = (selected: boolean, source?: "osm" | "detected") =>
    setBuildingCandidates(prev => prev.map(c => (!source || c.source === source ? { ...c, selected } : c)));

  const useMyLocation = () => {
    if (!navigator.geolocation) {
      setElevationStatus({ state: "error", message: "Your browser can't share its location." });
      return;
    }
    setElevationStatus({ state: "loading", message: "Getting your location…" });
    navigator.geolocation.getCurrentPosition(
      pos => {
        selectAroundPoint(pos.coords.latitude, pos.coords.longitude, `${pos.coords.latitude.toFixed(5)}, ${pos.coords.longitude.toFixed(5)}`);
        setElevationStatus({ state: "idle", message: "" });
      },
      () => setElevationStatus({ state: "error", message: "Location permission was denied. Search for an address instead." }),
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  // Converts OSM footprints into plan buildings inside the given plan rectangle.
  const buildingsFromOsm = (
    osm: OsmBuilding[],
    bounds: GeoBounds,
    area: { x: number; y: number; width: number; height: number },
    unitsPerFoot: number
  ): BuildingItem[] => {
    const toPlan = (p: { lat: number; lon: number }) => ({
      x: area.x + ((p.lon - bounds.west) / (bounds.east - bounds.west)) * area.width,
      y: area.y + ((bounds.north - p.lat) / (bounds.north - bounds.south)) * area.height
    });
    const result: BuildingItem[] = [];
    osm.forEach(b => {
      const world = b.points.map(toPlan);
      const box = getPointsBounds(world);
      const cx = box.minX + box.width / 2;
      const cy = box.minY + box.height / 2;
      // Keep buildings whose center is on the map; skip slivers.
      if (cx < area.x || cy < area.y || cx > area.x + area.width || cy > area.y + area.height) return;
      if (box.width * box.height < 30 * unitsPerFoot * unitsPerFoot) return;
      result.push({
        id: generateId(),
        type: "building",
        importSource: "osm",
        x: cx,
        y: cy,
        rotation: 0,
        width: box.width,
        height: box.height,
        wallHeight: Math.max(8, Math.round(b.heightFt * unitsPerFoot)),
        label: b.label,
        color: COLORS.building[0],
        points: world.map(p => ({ x: p.x - cx, y: p.y - cy }))
      });
    });
    return result.slice(0, 600);
  };

  // One click: download imagery for the selected rectangle, high-detail elevation, and 3D buildings.
  const importSite = async () => {
    if (!siteBounds) {
      setElevationStatus({ state: "error", message: "Drag a rectangle on the map to choose your site first." });
      return;
    }
    const imagery = elevationImagery;
    const exaggeration = elevationExaggeration;
    const selection = selectionFromBounds(siteBounds, siteLocation?.label || elevationQuery || "Selected site");
    if (selection.widthFt > SITE_MAX_WIDTH_FT || selection.heightFt > SITE_MAX_WIDTH_FT) {
      setElevationStatus({ state: "error", message: `That area is too large. Keep it under ${SITE_MAX_WIDTH_FT.toLocaleString()} ft on each side.` });
      return;
    }
    const location = selection.center;
    setSiteLocation(location);
    try {
      let area = getElevationArea();
      let canvas = canvasSizeRef.current;
      let realWidthFt = selection.widthFt;
      let realHeightFt = area.height * (selection.widthFt / Math.max(area.width, 1));
      let partialImagery = false;
      let imagerySource = "";

      // Fine terrain grid (~160 cells across) for detailed elevation.
      const nextGrid = clamp(Math.round(selection.widthFt / 160), 2, 20);
      if (imagery !== "keep") {
        // The canvas becomes the selected area at 1 unit = 1 ft, a whole number of grid cells,
        // so imagery, terrain and buildings line up exactly.
        const widthFt = Math.max(1, Math.round(selection.widthFt / nextGrid)) * nextGrid;
        const heightFt = Math.max(1, Math.round(selection.heightFt / nextGrid)) * nextGrid;
        setElevationStatus({ state: "loading", message: `Downloading high-resolution ${MAP_IMAGERY_SOURCES[imagery].label.toLowerCase()} imagery…` });
        const map = await fetchMapImagery(location, widthFt, heightFt, imagery);
        partialImagery = map.partial;
        imagerySource = map.sourceLabel;
        canvas = { width: widthFt, height: heightFt };
        area = { x: 0, y: 0, width: widthFt, height: heightFt };
        realWidthFt = widthFt;
        realHeightFt = heightFt;
        const nextBg = { x: 0, y: 0, width: widthFt, height: heightFt, opacity: 1 };
        setCanvasSize(canvas);
        setBackgroundImg(map.url);
        setBgSettings(nextBg);
        canvasSizeRef.current = canvas;
        backgroundImgRef.current = map.url;
        bgSettingsRef.current = nextBg;
        setPanOffset({ x: 0, y: 0 });
        setZoom(1);
        setShowGrid(false);
      }
      setGridSize(nextGrid);
      gridSizeRef.current = nextGrid;

      const unitsPerFoot = area.width / realWidthFt;
      const geoBounds = getGeoBounds(location, realWidthFt, realHeightFt);
      setPlanGeoRef({ bounds: geoBounds, area, unitsPerFoot });
      // Buildings the user reviewed on the picker map (if the lookup is still running, wait for it).
      const buildingsJob: Promise<OsmBuilding[] | null> = !importBuildings
        ? Promise.resolve([])
        : buildingScan.state === "loading" || (buildingScan.state === "idle" && buildingCandidates.length === 0)
          ? findBuildingCandidates(siteBounds).then(r => r.candidates.filter(c => c.selected), () => null)
          : Promise.resolve(buildingScan.state === "error" && buildingCandidates.length === 0 ? null : buildingCandidates.filter(c => c.selected));

      setElevationStatus({ state: "loading", message: "Downloading high-detail elevation…" });
      const grid = nextGrid;
      const spacing = Math.max(grid / 2, Math.max(area.width, area.height) / 600);
      const samplesX = clamp(Math.round(area.width / spacing) + 1, 2, 800);
      const samplesY = clamp(Math.round(area.height / spacing) + 1, 2, 800);
      const result = await fetchBestElevationGrid(location, realWidthFt, realHeightFt, samplesX, samplesY);

      const dem: DemData = {
        name: `${result.source} · ${location.label}`,
        width: samplesX,
        height: samplesY,
        values: result.values,
        min: result.min,
        max: result.max,
        noData: null
      };
      const preview = buildDemPreview(dem);
      const transform = {
        x: area.x + area.width / 2,
        y: area.y + area.height / 2,
        scale: preview ? area.width / preview.width : 1,
        rotation: 0
      };
      // meters -> feet, times map scale, times exaggeration
      const scale = FEET_PER_METER * unitsPerFoot * exaggeration;
      setDemData(dem);
      setDemPreview(preview);
      setDemTransform(transform);
      setDemScale(scale);
      setDemOffset(0);
      setDemNormalize(true);
      setDemAutoApply(true);
      setDemAlignMode(false);
      demDataRef.current = dem;
      demPreviewRef.current = preview;
      demTransformRef.current = transform;
      demScaleRef.current = scale;
      demOffsetRef.current = 0;
      demNormalizeRef.current = true;
      // The settings history debounce records map + terrain together.
      applyDemToTerrain(dem, { preview, transform, scale, offset: 0, normalize: true, canvas, save: false });

      setElevationStatus({ state: "loading", message: "Building 3D buildings…" });
      const osm = await buildingsJob;
      let buildingText = "";
      if (importBuildings) {
        if (osm === null) {
          buildingText = " Couldn't reach the building services. Draw buildings over the satellite image with the Building tool.";
        } else {
          const newBuildings = buildingsFromOsm(osm, geoBounds, area, unitsPerFoot);
          setItems(prev => [
            ...prev.filter(item => !(item.type === "building" && (item as BuildingItem).importSource === "osm")),
            ...newBuildings
          ]);
          buildingText = newBuildings.length > 0
            ? ` Added ${newBuildings.length} building${newBuildings.length === 1 ? "" : "s"}. Click one in the plan to adjust its height.`
            : " No buildings were added. Draw them over the satellite image with the Building tool.";
        }
      }

      const reliefFt = (result.max - result.min) * FEET_PER_METER;
      const reliefText = reliefFt < 1
        ? "Nearly flat (under 1 ft of change)."
        : `${Math.round(reliefFt)} ft of elevation change${exaggeration !== 1 ? ` (shown ${exaggeration}× taller)` : ""}.`;
      setElevationStatus({
        state: "done",
        message: `Site imported. ${reliefText}${imagerySource ? ` Imagery: ${imagerySource}.` : ""} Elevation: ${result.source}.${buildingText}${partialImagery ? " Some map tiles were unavailable." : ""}`
      });
      window.setTimeout(() => saveHistory(undefined, terrainHeightsRef.current), 400);
    } catch (err) {
      console.error("Failed to import site", err);
      setElevationStatus({ state: "error", message: err instanceof Error ? err.message : "Couldn't import the site." });
    }
  };

  // Terrain is stored per grid vertex, so changing the grid must resample it (or re-apply the DEM).
  const changeGridSize = (next: number) => {
    if (!Number.isFinite(next) || next <= 0 || next === gridSize) return;
    if (!(demData && demAutoApply) && Object.keys(terrainHeights).length > 0) {
      const resampled: Record<string, number> = {};
      for (let x = 0; x <= canvasSize.width; x += next) {
        for (let z = 0; z <= canvasSize.height; z += next) {
          const h = getGridHeight(x, z);
          if (Math.abs(h) > 0.001) resampled[getVertexKey(x, z)] = h;
        }
      }
      setTerrainHeights(resampled);
      terrainHeightsRef.current = resampled;
    }
    setGridSize(next);
  };

  const clearTerrain = () => {
    setTerrainHeights({});
    terrainHeightsRef.current = {};
    setDemData(null);
    setDemPreview(null);
    setDemAlignMode(false);
    saveHistory(undefined, {});
  };

  const demAutoApplyTimerRef = useRef<number | null>(null);
  useEffect(() => {
    if (!demData || !demAutoApply) return;
    if (demAutoApplyTimerRef.current) {
      window.clearTimeout(demAutoApplyTimerRef.current);
    }
    demAutoApplyTimerRef.current = window.setTimeout(() => {
      applyDemToTerrain(demData, { save: false });
    }, 80);
    return () => {
      if (demAutoApplyTimerRef.current) {
        window.clearTimeout(demAutoApplyTimerRef.current);
        demAutoApplyTimerRef.current = null;
      }
    };
  }, [demData, demScale, demOffset, demNormalize, demTransform, canvasSize.width, canvasSize.height, gridSize, demAutoApply]);

  // Refs
  const isTerrainModeRef = useRef(isTerrainMode);
  useEffect(() => { isTerrainModeRef.current = isTerrainMode; }, [isTerrainMode]);
  const terrainToolRef = useRef(terrainTool);
  const terrainBrushSizeRef = useRef(terrainBrushSize);
  const terrainBrushStrengthRef = useRef(terrainBrushStrength);
  const terrainBrushFalloffRef = useRef(terrainBrushFalloff);
  const terrainFlattenTargetRef = useRef(terrainFlattenTarget);
  const terrainFlattenSampleRef = useRef(terrainFlattenSample);
  const demDataRef = projectRef("demData");
  const demPreviewRef = useRef(demPreview);
  const prevCanvasSizeRef = useRef(canvasSize);
  const prevGridSizeRef = useRef(gridSize);
  const prevBgSettingsRef = useRef(bgSettings);
  const prevBackgroundImgRef = useRef(backgroundImg);
  useEffect(() => { terrainToolRef.current = terrainTool; }, [terrainTool]);
  useEffect(() => { terrainBrushSizeRef.current = terrainBrushSize; }, [terrainBrushSize]);
  useEffect(() => { terrainBrushStrengthRef.current = terrainBrushStrength; }, [terrainBrushStrength]);
  useEffect(() => { terrainBrushFalloffRef.current = terrainBrushFalloff; }, [terrainBrushFalloff]);
  useEffect(() => { terrainFlattenTargetRef.current = terrainFlattenTarget; }, [terrainFlattenTarget]);
  useEffect(() => { terrainFlattenSampleRef.current = terrainFlattenSample; }, [terrainFlattenSample]);
  useEffect(() => { demPreviewRef.current = demPreview; }, [demPreview]);
  const prevTerrainHeightsRef = useRef(terrainHeights); // Track updates
  const terrainStrokeRef = useRef<{
    active: boolean;
    tool: TerrainTool;
    direction: 1 | -1;
    lastTime: number;
  } | null>(null);
  const terrainHoverRef = useRef<{ pointX: number; pointZ: number } | null>(null);

  const svgRef = useRef<SVGSVGElement>(null);
  const demMiniRef = useRef<SVGSVGElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const elementImageInputRef = useRef<HTMLInputElement>(null);
  const projectInputRef = useRef<HTMLInputElement>(null);
  const bg3dInputRef = useRef<HTMLInputElement>(null);
  const demInputRef = useRef<HTMLInputElement>(null);
  const threeContainerRef = useRef<HTMLDivElement>(null);
  const threeStateRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.OrthographicCamera;
    renderer: THREE.WebGLRenderer;
    group: THREE.Group;
    target: THREE.Vector3;
    zoom: number;
    size: { width: number; height: number };
    orbit?: { azimuth: number; polar: number; distance: number };
  } | null>(null);

  // 3D Object cache for differential updates (avoid full scene rebuilds)
  const threeObjectCacheRef = useRef<Map<string, THREE.Object3D>>(new Map());
  // Cache for static scene elements (ground, grid, boundary) that don't need rebuilding
  const threeStaticElementsRef = useRef<THREE.Object3D[]>([]);
  // Previous items state for diffing
  const prevItemsRef = useRef<CanvasItem[]>([]);

  // Camera preview renderer cache (prevent memory leaks from frequent recreation)
  const cameraPreviewRendererRef = useRef<{
    renderer: THREE.WebGLRenderer | null;
    pmremGenerator: THREE.PMREMGenerator | null;
    envTexture: THREE.Texture | null;
  }>({ renderer: null, pmremGenerator: null, envTexture: null });

  const cameraSnapshotRendererRef = useRef<{
    renderer: THREE.WebGLRenderer | null;
    pmremGenerator: THREE.PMREMGenerator | null;
    envTexture: THREE.Texture | null;
    canvas: HTMLCanvasElement | null;
  }>({ renderer: null, pmremGenerator: null, envTexture: null, canvas: null });
  const [snapshots, setSnapshots] = useState<{ id: string; dataUrl: string; createdAt: string }[]>([]);
  const [vertexInsertMode, setVertexInsertMode] = useState(false);
  const [showCameraPreview, setShowCameraPreview] = useState(true);
  // View preference: DORI coverage bands in the 2D cones (remembered per browser).
  const [showDoriZones, setShowDoriZones] = useState(() => {
    try { return localStorage.getItem("scp.showDori") !== "0"; } catch { return true; }
  });
  useEffect(() => {
    try { localStorage.setItem("scp.showDori", showDoriZones ? "1" : "0"); } catch { /* ignore */ }
  }, [showDoriZones]);

  // Export list - curated snapshots for client report
  const [exportList, setExportList] = useProjectField("exportList");
  const [exportNotice, setExportNotice] = useState<{
    id: number;
    message: string;
    tone: 'success' | 'error' | 'info';
  } | null>(null);
  const exportNoticeTimerRef = useRef<number | null>(null);

  // 3D Visualization Settings
  const [frustumSettings, setFrustumSettings] = useProjectField("frustumSettings");
  const [sceneBackgroundImg, setSceneBackgroundImg] = useProjectField("sceneBackgroundImg");
  const [backgroundMode, setBackgroundMode] = useProjectField("backgroundMode"); // 'flat' = image, 'panorama' = 360° equirectangular

  useEffect(() => {
    if (isApplyingHistoryRef.current) return;
    if (historyIndexRef.current < 0) return;
    if (historySettingsTimerRef.current) {
      window.clearTimeout(historySettingsTimerRef.current);
    }
    historySettingsTimerRef.current = window.setTimeout(() => {
      saveHistory();
    }, 200);
    return () => {
      if (historySettingsTimerRef.current) {
        window.clearTimeout(historySettingsTimerRef.current);
      }
    };
  }, [
    backgroundImg,
    bgSettings,
    canvasSize,
    gridSize,
    showGrid,
    snapToGrid,
    frustumSettings,
    sceneBackgroundImg,
    backgroundMode,
    nvrLayout,
    buildingLabelDefaults,
    demScale,
    demOffset,
    demNormalize,
    demTransform,
    demOverlayOpacity,
    demAlignMode,
    demAlignTool
  ]);

  useEffect(() => {
    if (isApplyingHistoryRef.current) return;
    if (historyIndexRef.current < 0) return;
    if (interactionStateRef.current.type) return;
    if (threeDragStateRef.current.isDragging) return;
    if (itemsHistoryTimerRef.current) {
      window.clearTimeout(itemsHistoryTimerRef.current);
    }
    itemsHistoryTimerRef.current = window.setTimeout(() => {
      saveHistory();
    }, 200);
    return () => {
      if (itemsHistoryTimerRef.current) {
        window.clearTimeout(itemsHistoryTimerRef.current);
      }
    };
  }, [items, interactionState]);

  // Environment background setup


  // 3D Model URLs (for higher quality models)


  // Camera placement preview state - for visual feedback when placing cameras
  const [cameraPlacementPreview, setCameraPlacementPreview] = useState<{
    buildingId: string;
    edgeIndex: number;
    edgeT: number;
    point: { x: number; y: number };
    rotation: number; // Auto-calculated to face outward
  } | null>(null);

  // Persistence - autosave to IndexedDB (no 5 MB localStorage limit, so satellite maps and report
  // pages survive a reload). Older localStorage saves are migrated on first load.
  const autosaveLoadedRef = useRef(false);
  useEffect(() => {
    let cancelled = false;
    (async () => {
      let data: any = null;
      try {
        data = await idbGet(AUTOSAVE_KEY);
      } catch (e) {
        console.warn("IndexedDB unavailable, falling back to localStorage", e);
      }
      if (!data) {
        try {
          const saved = localStorage.getItem('securityCameraPlannerData');
          if (saved) data = JSON.parse(saved);
        } catch (e) {
          console.error("Failed to load saved state", e);
        }
      }
      if (cancelled) return;
      if (data) {
        try {
          applyProjectData(data);
          if (data.demData && data.demData.values) {
            setDemData(data.demData);
            setDemPreview(buildDemPreview(data.demData));
          }
          resetHistory();
        } catch (e) {
          console.error("Failed to restore saved state", e);
        }
      }
      autosaveLoadedRef.current = true;
    })();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!autosaveLoadedRef.current) return;
    const timer = setTimeout(() => {
      const data = { ...buildProjectData(true), exportList, demData };
      idbSet(AUTOSAVE_KEY, data)
        .then(() => {
          // The old localStorage copy is now redundant (and could be stale).
          try { localStorage.removeItem('securityCameraPlannerData'); } catch { /* ignore */ }
        })
        .catch(err => {
          console.error("Autosave to IndexedDB failed; saving a smaller copy to localStorage", err);
          try {
            const { backgroundImg: _bg, sceneBackgroundImg: _scene, ...rest } = buildProjectData(true);
            localStorage.setItem('securityCameraPlannerData', JSON.stringify(rest));
          } catch (e2) {
            console.error("Still failed to save", e2);
          }
        });
    }, 800);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, backgroundImg, bgSettings, canvasSize, exportList, projectName, frustumSettings, sceneBackgroundImg, backgroundMode, nvrLayout, terrainHeights, gridSize, showGrid, snapToGrid, siteLocation, siteBounds, planGeoRef, elevationOverlay, buildingLabelDefaults, demData, demScale, demOffset, demTransform]);

  // Ref for camera preview canvas
  const cameraPreviewRef = useRef<HTMLCanvasElement>(null);
  const bgImageRef = useRef<HTMLImageElement | null>(null);

  const snapValue = (value: number, snap = snapToGrid) =>
    snap ? Math.round(value / gridSize) * gridSize : value;

  const getBuildingPoints = (building: BuildingItem) =>
    building.points && building.points.length >= 3 ? building.points : rectanglePoints(building.width, building.height);

  const getBuildingLabelFont = (building: BuildingItem) => ({
    fontFamily: building.labelFontFamily ?? buildingLabelDefaults.fontFamily,
    fontSize: building.labelFontSize ?? buildingLabelDefaults.fontSize,
    fontWeight: building.labelFontWeight ?? buildingLabelDefaults.fontWeight
  });

  const splitLabelLines = (label: string) => {
    const clean = label.trim();
    if (!clean) return ["Building"];
    const words = clean.split(/\s+/);
    if (words.length <= 1) return [clean];
    let best = { lines: [clean], maxLen: clean.length };
    for (let i = 1; i < words.length; i += 1) {
      const lineA = words.slice(0, i).join(" ");
      const lineB = words.slice(i).join(" ");
      const maxLen = Math.max(lineA.length, lineB.length);
      if (maxLen < best.maxLen) {
        best = { lines: [lineA, lineB], maxLen };
      }
    }
    return best.lines;
  };

  const getBuildingLabelLayout = (building: BuildingItem) => {
    const points = getBuildingPoints(building);
    const bounds = getPointsBounds(points);
    const maxWidth = Math.max(bounds.width * 0.9, 24);
    const maxHeight = Math.max(bounds.height * 0.7, 14);
    const label = building.label?.trim() || "Building";
    const font = getBuildingLabelFont(building);
    const desiredSize = clamp(font.fontSize, 6, 32);

    const estimateFont = (lines: string[]) => {
      const maxChars = Math.max(...lines.map(line => Math.max(line.length, 1)));
      const byWidth = Math.floor(maxWidth / (maxChars * 0.62));
      const byHeight = Math.floor(maxHeight / (lines.length * 1.2));
      return clamp(Math.min(byWidth, byHeight, desiredSize), 6, 32);
    };

    let lines = [label];
    let fontSize = estimateFont(lines);
    if (fontSize < 10 && label.includes(" ")) {
      lines = splitLabelLines(label);
      fontSize = estimateFont(lines);
    }

    return { lines, fontSize, maxWidth, fontFamily: font.fontFamily, fontWeight: font.fontWeight };
  };

  const rotatePoint = (point: { x: number; y: number }, angle: number) => {
    const rad = (angle * Math.PI) / 180;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    return { x: point.x * cos - point.y * sin, y: point.x * sin + point.y * cos };
  };

  const toWorldPoint = (point: { x: number; y: number }, item: BaseItem) => {
    const rotated = rotatePoint(point, item.rotation);
    return { x: item.x + rotated.x, y: item.y + rotated.y };
  };

  const toLocalPoint = (point: { x: number; y: number }, item: BaseItem) => {
    const dx = point.x - item.x;
    const dy = point.y - item.y;
    return rotatePoint({ x: dx, y: dy }, -item.rotation);
  };

  const getBuildingById = (id?: string) => items.find(item => item.type === "building" && item.id === id) as BuildingItem | undefined;

  const getBuildingEdgePointsWorld = (building: BuildingItem) => {
    const points = getBuildingPoints(building);
    return points.map(point => toWorldPoint(point, building));
  };

  const getBuildingBaseHeight = (building: BuildingItem) => {
    const centerH = getGridHeight(building.x, building.y) + OBJECT_ELEVATION_OFFSET;
    const points = getBuildingEdgePointsWorld(building);
    if (points.length === 0) return centerH;

    let minH = centerH;
    for (let i = 0; i < points.length; i += 1) {
      const p = points[i];
      minH = Math.min(minH, getGridHeight(p.x, p.y) + OBJECT_ELEVATION_OFFSET);
      const next = points[(i + 1) % points.length];
      const mid = { x: (p.x + next.x) / 2, y: (p.y + next.y) / 2 };
      minH = Math.min(minH, getGridHeight(mid.x, mid.y) + OBJECT_ELEVATION_OFFSET);
    }

    return minH;
  };

  const getCameraPlanPosition = (camera: CameraItem) => {
    if (camera.mount?.type === "building" && camera.mount.buildingId) {
      const building = getBuildingById(camera.mount.buildingId);
      if (!building) return { x: camera.x, y: camera.y };
      const worldPoints = getBuildingEdgePointsWorld(building);
      if (worldPoints.length < 2) return { x: camera.x, y: camera.y };
      const edgeIndex = clamp(camera.mount.edgeIndex ?? 0, 0, worldPoints.length - 1);
      const nextIndex = (edgeIndex + 1) % worldPoints.length;
      const a = worldPoints[edgeIndex];
      const b = worldPoints[nextIndex];
      const t = clamp(camera.mount.edgeT ?? 0.5, 0, 1);

      const pos = { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };

      // Sit just outside the wall (along its outward normal) so the camera doesn't clip into it.
      const normal = getEdgeOutwardNormal(worldPoints, edgeIndex);
      const offset = 1.0;
      return { x: pos.x + normal.x * offset, y: pos.y + normal.y * offset };
    }
    return { x: camera.x, y: camera.y };
  };

  const snapCameraToNearestBuilding = (camera: CameraItem) => {
    let best: { buildingId: string; edgeIndex: number; edgeT: number; distance: number; point: { x: number; y: number } } | null = null;
    items.forEach(item => {
      if (item.type !== "building") return;
      const building = item as BuildingItem;
      const worldPoints = getBuildingEdgePointsWorld(building);
      for (let i = 0; i < worldPoints.length; i += 1) {
        const nextIndex = (i + 1) % worldPoints.length;
        const a = worldPoints[i];
        const b = worldPoints[nextIndex];
        const ab = { x: b.x - a.x, y: b.y - a.y };
        const ap = { x: camera.x - a.x, y: camera.y - a.y };
        const abLenSq = ab.x * ab.x + ab.y * ab.y || 1;
        let t = (ap.x * ab.x + ap.y * ab.y) / abLenSq;
        t = clamp(t, 0, 1);
        const proj = { x: a.x + ab.x * t, y: a.y + ab.y * t };
        const dist = Math.hypot(camera.x - proj.x, camera.y - proj.y);
        if (!best || dist < best.distance) {
          best = { buildingId: building.id, edgeIndex: i, edgeT: t, distance: dist, point: proj };
        }
      }
    });
    return best;
  };

  // Type for building edge info
  type BuildingEdgeInfo = {
    buildingId: string;
    edgeIndex: number;
    edgeT: number;
    distance: number;
    point: { x: number; y: number };
    rotation: number;
  };

  // Find nearest building edge from a point and calculate outward-facing rotation
  const findNearestBuildingEdge = (point: { x: number; y: number }, list: CanvasItem[] = items): BuildingEdgeInfo | null => {
    let best: BuildingEdgeInfo | null = null;

    list.forEach(item => {
      if (item.type !== "building") return;
      const building = item as BuildingItem;
      const worldPoints = getBuildingEdgePointsWorld(building);

      for (let i = 0; i < worldPoints.length; i += 1) {
        const nextIndex = (i + 1) % worldPoints.length;
        const a = worldPoints[i];
        const b = worldPoints[nextIndex];
        const ab = { x: b.x - a.x, y: b.y - a.y };
        const ap = { x: point.x - a.x, y: point.y - a.y };
        const abLenSq = ab.x * ab.x + ab.y * ab.y || 1;
        let t = (ap.x * ab.x + ap.y * ab.y) / abLenSq;
        t = clamp(t, 0, 1);
        const proj = { x: a.x + ab.x * t, y: a.y + ab.y * t };
        const dist = Math.hypot(point.x - proj.x, point.y - proj.y);

        // Face straight out from the wall
        const normal = getEdgeOutwardNormal(worldPoints, i);
        const outwardAngle = Math.atan2(normal.y, normal.x) * (180 / Math.PI);

        if (!best || dist < best.distance) {
          best = {
            buildingId: building.id,
            edgeIndex: i,
            edgeT: t,
            distance: dist,
            point: proj,
            rotation: outwardAngle
          };
        }
      }
    });
    return best;
  };

  const isoScale = 0.9;
  const isoOrigin = { x: canvasSize.width / 2, y: 120 };
  const projectPoint = (point: { x: number; y: number }) => ({
    x: (point.x - point.y) * isoScale + isoOrigin.x,
    y: (point.x + point.y) * isoScale * 0.5 + isoOrigin.y
  });

  // --- Actions ---

  const handleAddItem = (e: React.MouseEvent, type: ToolMode) => {
    if (!svgRef.current) return;
    if (viewMode === "iso3d") return;

    const pos = getSvgMousePos(e);
    const x = snapValue(pos.x);
    const y = snapValue(pos.y);

    let newItem: CanvasItem;

    const common = {
      id: generateId(),
      x,
      y,
      rotation: 0
    };

    switch (type) {
      case "add-camera":
        newItem = {
          ...common,
          type: "camera",
          rotation: 45,
          label: `Camera ${items.filter(i => i.type === "camera").length + 1}`,
          description: "",
          fov: DEFAULT_CAMERA_HFOV,
          hFov: DEFAULT_CAMERA_HFOV,
          vFov: vFovFromH(DEFAULT_CAMERA_HFOV, 16 / 9),
          pitch: DEFAULT_CAMERA_PITCH,
          height: DEFAULT_CAMERA_HEIGHT_FT,
          aspect: 16 / 9,
          mount: { type: "free", edgeT: 0.5, height: DEFAULT_CAMERA_HEIGHT_FT },
          range: DEFAULT_CAMERA_RANGE_FT,
          color: COLORS.camera[items.filter(i => i.type === "camera").length % COLORS.camera.length],
          connectorDashSize: 3
        };
        break;
      case "add-building":
        newItem = {
          ...common,
          type: "building",
          width: DEFAULT_BUILDING.width,
          height: DEFAULT_BUILDING.depth,
          wallHeight: DEFAULT_BUILDING.wallHeight,
          label: "Building",
          color: COLORS.building[0],
          points: rectanglePoints(DEFAULT_BUILDING.width, DEFAULT_BUILDING.depth)
        };
        break;
      case "add-tree":
        newItem = {
          ...common,
          type: "tree",
          radius: 25,
          color: COLORS.tree[0]
        };
        break;
      case "add-parking":
        newItem = {
          ...common,
          type: "parking",
          width: 24,
          height: 48,
          color: COLORS.parking[0],
          vehicleHeight: 14
        };
        break;
      case "add-label":
        newItem = {
          ...common,
          type: "label",
          text: "Text",
          fontSize: 14,
          color: COLORS.label[0]
        };
        break;
      default:
        return;
    }

    if (newItem.type === "camera") {
      const edge = findNearestBuildingEdge({ x, y });
      // Snap onto a wall only when placed right next to it, so cameras land where the user clicked.
      if (edge && edge.distance < CAMERA_WALL_SNAP_FT) {
        const cam = newItem as CameraItem;
        cam.x = edge.point.x;
        cam.y = edge.point.y;
        // Auto-rotate to face outward from building
        cam.rotation = edge.rotation;
        // Mount just under the eave of the building it's attached to
        const buildingHeight = mountHeightForBuilding(getBuildingById(edge.buildingId));
        cam.mount = {
          type: "building",
          buildingId: edge.buildingId,
          edgeIndex: edge.edgeIndex,
          edgeT: edge.edgeT,
          height: buildingHeight
        };
        cam.height = buildingHeight;
      }
      // Clear placement preview
      setCameraPlacementPreview(null);
    }

    setItems([...items, newItem]);
    setSelectedId(newItem.id);
    setMode("select");
  };
  const addImageElement = (src: string) => {
    const newItem: ImageItem = {
      id: generateId(),
      type: "image",
      x: 400,
      y: 300,
      rotation: 0,
      width: 150,
      height: 150,
      src,
      label: "Overlay",
      aspectRatioLocked: true
    };
    setItems([...items, newItem]);
    setSelectedId(newItem.id);
  };

  const updateItem = (id: string, updates: Partial<CanvasItem>) => {
    setItems(prev => prev.map(item => (item.id === id ? { ...item, ...updates } : item)));
  };

  // Mount height is stored on the mount (building or free); keep `height` in sync for older readers.
  const setCameraMountHeight = (camera: CameraItem, height: number) => {
    updateItem(camera.id, { height, mount: { ...(camera.mount ?? { type: "free" as const }), height } });
  };

  const updateCameraMount = (cameraId: string, updates: Partial<NonNullable<CameraItem["mount"]>>) => {
    const camera = items.find(item => item.id === cameraId) as CameraItem | undefined;
    if (!camera || camera.type !== "camera") return;
    updateItem(cameraId, { mount: { ...(camera.mount ?? { type: "free" }), ...updates } });
  };

  const attachCameraToNearestBuilding = (cameraId: string) => {
    const camera = items.find(item => item.id === cameraId) as CameraItem | undefined;
    if (!camera || camera.type !== "camera") return;
    const snap = snapCameraToNearestBuilding(camera);
    if (!snap) return;
    updateItem(cameraId, {
      x: snap.point.x,
      y: snap.point.y,
      mount: {
        type: "building",
        buildingId: snap.buildingId,
        edgeIndex: snap.edgeIndex,
        edgeT: snap.edgeT,
        height: camera.mount?.height ?? camera.height ?? 10
      }
    });
  };

  const updateCameraFov = (cameraId: string, hFov: number, vFov: number, aspect: number) => {
    updateItem(cameraId, { hFov, vFov, aspect, fov: hFov });
  };

  const updateBuildingSize = (id: string, width: number, height: number) => {
    const item = items.find(entry => entry.id === id);
    if (!item || item.type !== "building") return;
    const points = getBuildingPoints(item);
    const scaled = scalePointsToSize(points, width, height);
    updateItem(id, { width, height, points: scaled });
  };

  const handleAddBuildingVertex = (id: string) => {
    const item = items.find(entry => entry.id === id);
    if (!item || item.type !== "building") return;
    const next = insertVertexAtLongestEdge(getBuildingPoints(item));
    updateItem(id, { points: next });
  };

  const handleInsertBuildingVertexAtPoint = (id: string, point: { x: number; y: number }) => {
    const item = items.find(entry => entry.id === id);
    if (!item || item.type !== "building") return;
    const localPoint = toLocalPoint(point, item);
    const next = insertVertexAtNearestEdge(getBuildingPoints(item), localPoint);
    updateItem(id, { points: next });
  };

  const handleRemoveBuildingVertex = (id: string) => {
    const item = items.find(entry => entry.id === id);
    if (!item || item.type !== "building") return;
    const points = getBuildingPoints(item);
    if (points.length <= 3) return;
    updateItem(id, { points: points.slice(0, -1) });
  };

  const handleResetBuildingShape = (id: string) => {
    const item = items.find(entry => entry.id === id);
    if (!item || item.type !== "building") return;
    updateItem(id, { points: rectanglePoints(item.width, item.height) });
  };

  const updateImageSize = (id: string, newWidth?: number, newHeight?: number) => {
    const item = items.find(i => i.id === id) as ImageItem;
    if (!item || item.type !== "image") return;

    if (!item.aspectRatioLocked) {
      updateItem(id, {
        width: newWidth ?? item.width,
        height: newHeight ?? item.height
      });
      return;
    }

    const ratio = item.width / item.height;
    if (newWidth !== undefined) {
      updateItem(id, { width: newWidth, height: newWidth / ratio });
    } else if (newHeight !== undefined) {
      updateItem(id, { width: newHeight * ratio, height: newHeight });
    }
  };

  const deleteItem = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
    setSelectedId(prev => (prev === id ? null : prev));
  };

  const handleClearCanvas = () => {
    if (!items.length) return;
    if (window.confirm("Clear all items from the canvas?")) {
      setItems([]);
      setSelectedId(null);
    }
  };

  const handleNewProject = () => {
    if (!window.confirm("Start a new project? This will clear the current project.")) return;

    setItems([]);
    setSelectedId(null);
    setBackgroundImg(null);
    setCanvasSize(DEFAULT_CANVAS);
    setBgSettings({
      x: 0,
      y: 0,
      width: DEFAULT_CANVAS.width,
      height: DEFAULT_CANVAS.height,
      opacity: 0.5
    });
    setGridSize(20);
    setShowGrid(true);
    setSnapToGrid(true);
    setProjectName("Security Camera Plan");
    setExportList([]);
    setSnapshots([]);
    setFrustumSettings({
      visible: true,
      opacity: 0.15,
      edgeOpacity: 0.6,
      useCameraColor: true,
      color: '#3b82f6',
      showAll: true,
      mode: 'volume'
    });
    setSceneBackgroundImg(null);
    setBackgroundMode('flat');
    setNvrLayout([]);
    setMaximizedCamId(null);
    setViewMode("plan");
    setMode("select");
    setPanOffset({ x: 0, y: 0 });
    setZoom(1);
    setIsPanning(false);
    setPanStart({ x: 0, y: 0, panX: 0, panY: 0 });
    setIsSpacePressed(false);
    isSpacePressedRef.current = false;
    setShowCameraPreview(true);
    setShowExportPanel(false);
    setClipboard(null);
    setIsTerrainMode(false);
    setTerrainTool("sculpt");
    setTerrainBrushSize(4);
    setTerrainBrushStrength(40);
    setTerrainBrushFalloff(2);
    setTerrainFlattenTarget(0);
    setTerrainFlattenSample(true);
    setDemData(null);
    setDemPreview(null);
    setDemScale(1);
    setDemOffset(0);
    setDemNormalize(true);
    setDemAlignMode(false);
    setDemTransform({ x: canvasSize.width / 2, y: canvasSize.height / 2, scale: 1, rotation: 0 });
    setDemOverlayOpacity(0.6);
    setDemAutoApply(true);
    setDemAlignTool("move");
    setDemTransformDrag(null);
    setIsBackgroundDragging(false);
    setMapMoveMode(false);
    setTerrainHeights({});
    setSiteLocation(null);
    setSiteBounds(null);
    setPlanGeoRef(null);
    setElevationQuery("");
    setElevationStatus({ state: "idle", message: "" });
    setCameraPlacementPreview(null);
    resetHistory();
    setRightPanelMode("project");
    setIsRightPanelOpen(true);
  };

  const handleFitBackground = () => {
    setBgSettings({
      ...bgSettings,
      x: 0,
      y: 0,
      width: canvasSize.width,
      height: canvasSize.height
    });
  };

  const showExportNotice = (message: string, tone: 'success' | 'error' | 'info' = 'success') => {
    setExportNotice({ id: Date.now(), message, tone });
    if (exportNoticeTimerRef.current) {
      window.clearTimeout(exportNoticeTimerRef.current);
    }
    exportNoticeTimerRef.current = window.setTimeout(() => setExportNotice(null), 2400);
  };

  const getPlanViewBox = () => {
    const viewX = -panOffset.x / zoom;
    const viewY = -panOffset.y / zoom;
    const viewW = canvasSize.width / zoom;
    const viewH = canvasSize.height / zoom;
    return { x: viewX, y: viewY, width: viewW, height: viewH };
  };

  const loadImageElement = (src: string) => new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });

  const renderPlanToDataUrl = async (options?: {
    scale?: number;
    includeGrid?: boolean;
    backgroundColor?: string;
  }) => {
    if (!svgRef.current) {
      throw new Error("Plan view is not ready.");
    }

    const { scale = 2, includeGrid = true, backgroundColor = "#f8fafc" } = options || {};
    const view = getPlanViewBox();
    const source = svgRef.current.cloneNode(true) as SVGSVGElement;
    const panLayer = source.querySelector('g[data-pan-zoom="true"]');
    if (panLayer) {
      panLayer.setAttribute("transform", "translate(0 0) scale(1)");
    }
    if (!includeGrid) {
      const grid = source.querySelector("#grid-bg");
      if (grid) grid.remove();
    }

    source.setAttribute("viewBox", `${view.x} ${view.y} ${view.width} ${view.height}`);
    source.setAttribute("width", `${canvasSize.width}`);
    source.setAttribute("height", `${canvasSize.height}`);
    source.setAttribute("preserveAspectRatio", "xMidYMid meet");

    const svgData = new XMLSerializer().serializeToString(source);
    const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    try {
      const img = await loadImageElement(url);
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(canvasSize.width * scale);
      canvas.height = Math.round(canvasSize.height * scale);
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        throw new Error("Failed to prepare export canvas.");
      }
      ctx.scale(scale, scale);
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvasSize.width, canvasSize.height);
      ctx.drawImage(img, 0, 0, canvasSize.width, canvasSize.height);
      return canvas.toDataURL("image/png");
    } finally {
      URL.revokeObjectURL(url);
    }
  };

  // --- Save / Load / Export ---

  const handleExportPng = async () => {
    if (!svgRef.current) {
      showExportNotice("Plan view is not ready yet.", "error");
      return;
    }

    const { scale, padding, includeGrid, includeLegend, includeTitle } = exportOptions;
    const timestamp = new Date().toLocaleString();
    const width = canvasSize.width;
    const height = canvasSize.height;
    const titleHeight = includeTitle ? 52 : 0;
    const legendHeight = includeLegend ? 90 : 0;
    const totalWidth = width + padding * 2;
    const totalHeight = height + padding * 2 + titleHeight + legendHeight;

    const canvas = document.createElement("canvas");
    canvas.width = totalWidth * scale;
    canvas.height = totalHeight * scale;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      showExportNotice("Failed to prepare export canvas.", "error");
      return;
    }
    ctx.scale(scale, scale);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, totalWidth, totalHeight);

    if (includeTitle) {
      ctx.fillStyle = "#0f172a";
      ctx.font = "700 20px system-ui, sans-serif";
      ctx.fillText(projectName || "Security Camera Plan", padding, padding + 24);
      ctx.fillStyle = "#64748b";
      ctx.font = "12px system-ui, sans-serif";
      ctx.fillText(`Exported ${timestamp}`, padding, padding + 44);
    }

    const contentX = padding;
    const contentY = padding + titleHeight;
    ctx.fillStyle = "#f8fafc";
    ctx.fillRect(contentX, contentY, width, height);

    let planImage: HTMLImageElement | null = null;
    try {
      const planDataUrl = await renderPlanToDataUrl({
        scale,
        includeGrid,
        backgroundColor: "#f8fafc"
      });
      planImage = await loadImageElement(planDataUrl);
    } catch (e) {
      console.error("Plan export failed", e);
      showExportNotice("Failed to render plan export.", "error");
      return;
    }

    if (planImage) {
      ctx.drawImage(planImage, contentX, contentY, width, height);
    }

    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 2;
    ctx.strokeRect(contentX - 1, contentY - 1, width + 2, height + 2);

    if (includeLegend) {
      const legendY = contentY + height + 36;
      const legendItems = [
        { label: "Cameras", count: items.filter(item => item.type === "camera").length, color: COLORS.camera[0] },
        { label: "Buildings", count: items.filter(item => item.type === "building").length, color: COLORS.building[0] },
        { label: "Trees", count: items.filter(item => item.type === "tree").length, color: COLORS.tree[0] },
        { label: "Vehicles", count: items.filter(item => item.type === "parking").length, color: COLORS.parking[0] },
        { label: "Text", count: items.filter(item => item.type === "label").length, color: COLORS.label[0] }
      ];

      ctx.fillStyle = "#0f172a";
      ctx.font = "600 12px system-ui, sans-serif";
      ctx.fillText("Legend", padding, legendY);

      legendItems.forEach((entry, index) => {
        const itemX = padding + index * 150;
        ctx.fillStyle = entry.color;
        ctx.fillRect(itemX, legendY + 12, 10, 10);
        ctx.fillStyle = "#475569";
        ctx.font = "11px system-ui, sans-serif";
        ctx.fillText(`${entry.label} (${entry.count})`, itemX + 16, legendY + 21);
      });
    }

    const pngUrl = canvas.toDataURL("image/png");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "security_plan.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  // Add snapshot to export list
  const addToExportList = (type: 'plan' | '3d' | 'camera', label: string, dataUrl: string, cameraId?: string) => {
    const id = typeof crypto !== "undefined" && typeof (crypto as any).randomUUID === "function"
      ? (crypto as any).randomUUID()
      : generateId();
    setExportList(prev => [...prev, {
      id,
      type,
      label,
      dataUrl,
      cameraId
    }]);
    showExportNotice(`Added to Report: ${label}`);
  };

  const getCameraSnapshotRenderer = (width: number, height: number) => {
    let cache = cameraSnapshotRendererRef.current;
    if (!cache.renderer || !cache.canvas) {
      const canvas = document.createElement("canvas");
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
      renderer.setPixelRatio(1);
      const pmremGenerator = new THREE.PMREMGenerator(renderer);
      const envTexture = pmremGenerator.fromScene(new RoomEnvironment()).texture;
      cameraSnapshotRendererRef.current = { renderer, pmremGenerator, envTexture, canvas };
      cache = cameraSnapshotRendererRef.current;
    }
    cache.renderer.setSize(width, height, false);
    return cache;
  };

  // Render a camera's perspective view to data URL - MATCHES Camera Preview Panel exactly
  // Renders what a camera sees (shared offscreen WebGL renderer) onto a new 2D canvas.
  const renderCameraViewToCanvas = (cam: CameraItem, width = 1280): HTMLCanvasElement => {
    const aspect = getCameraAspectValue(cam);
    const height = Math.max(Math.round(width / 3.6), Math.round(width / aspect));

    const camPos = getCameraPlanPosition(cam);
    const camTerrainH = getCameraBaseHeight(cam, camPos); // Terrain (or mounting building) adjusted height
    const camHeight = cam.mount?.height ?? cam.height ?? 10;
    const hFov = cam.hFov ?? cam.fov;
    const pitch = cam.pitch ?? DEFAULT_CAMERA_PITCH;
    const range = cam.range;
    const rotAngle = THREE.MathUtils.degToRad(cam.rotation);

    // Calculate vertical FOV from horizontal FOV and aspect ratio to match 2D cone
    const vFovRad = 2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(hFov) / 2) / aspect);
    const vFov = THREE.MathUtils.radToDeg(vFovRad);

    // Create mini Three.js scene with a daylight sky; haze beyond the camera's rated range.
    const scene = new THREE.Scene();
    const sky = new THREE.Color('#a9c8e6');
    scene.background = sky;
    scene.fog = new THREE.Fog(sky, Math.max(range * 1.2, 60), Math.max(range * 3, 200));

    // Perspective camera at security camera position (Terrain Adjusted)
    const perspCam = new THREE.PerspectiveCamera(vFov, aspect, 0.5, Math.max(range * 4, 400));
    perspCam.position.set(camPos.x, camTerrainH + camHeight, camPos.y);

    const pitchRad = THREE.MathUtils.degToRad(pitch);
    const lookAt = new THREE.Vector3(
      camPos.x + Math.cos(rotAngle) * Math.cos(pitchRad) * 100,
      camTerrainH + camHeight + Math.sin(pitchRad) * 100,
      camPos.y + Math.sin(rotAngle) * Math.cos(pitchRad) * 100
    );
    perspCam.lookAt(lookAt);

    // Lighting
    scene.add(new THREE.HemisphereLight(0xdbeafe, 0x4b5563, 0.8));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.9);
    dirLight.position.set(camPos.x + 100, 300, camPos.y + 50);
    scene.add(dirLight);

    // Ground with Terrain Height (match 3D terrain resolution)
    const groundW = canvasSize.width;
    const groundH = canvasSize.height;
    const segW = Math.max(Math.round(canvasSize.width / gridSize), 1);
    const segH = Math.max(Math.round(canvasSize.height / gridSize), 1);
    const groundGeo = new THREE.PlaneGeometry(groundW, groundH, segW, segH);

    // Apply terrain height to ground geometry
    const pos = groundGeo.attributes.position;
    const centerX = canvasSize.width / 2;
    const centerY = canvasSize.height / 2;

    for (let i = 0; i < pos.count; i++) {
      const lx = pos.getX(i);
      const ly = pos.getY(i);
      const wx = lx + centerX;
      const wy = centerY - ly;
      const h = getGridHeight(wx, wy);
      pos.setZ(i, h);
    }
    groundGeo.computeVertexNormals();

    const ground = new THREE.Mesh(
      groundGeo,
      new THREE.MeshStandardMaterial({ color: 0x6b7f5a, roughness: 1, metalness: 0 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(centerX, 0, centerY);
    scene.add(ground);

    // Background image (terrain deformed)
    if (bgImageRef.current) {
      const tex = new THREE.CanvasTexture(bgImageRef.current);
      tex.colorSpace = THREE.SRGBColorSpace;

      const mapSegW = Math.max(Math.round(bgSettings.width / gridSize), 1);
      const mapSegH = Math.max(Math.round(bgSettings.height / gridSize), 1);
      const mapGeometry = new THREE.PlaneGeometry(bgSettings.width, bgSettings.height, mapSegW, mapSegH);

      const mapPosAttr = mapGeometry.attributes.position;
      for (let i = 0; i < mapPosAttr.count; i++) {
        const lx = mapPosAttr.getX(i);
        const ly = mapPosAttr.getY(i);
        const wx = bgSettings.x + bgSettings.width / 2 + lx;
        const wy = bgSettings.y + bgSettings.height / 2 - ly;
        const h = getGridHeight(wx, wy);
        mapPosAttr.setZ(i, h + MAP_OVERLAY_OFFSET);
      }
      mapGeometry.computeVertexNormals();

      const mapPlane = new THREE.Mesh(
        mapGeometry,
        new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: bgSettings.opacity, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4 })
      );
      mapPlane.renderOrder = -1;
      mapPlane.rotation.x = -Math.PI / 2;
      mapPlane.position.set(bgSettings.x + bgSettings.width / 2, 0, bgSettings.y + bgSettings.height / 2);
      scene.add(mapPlane);
    }

    // Add items (Terrain Aware)
    items.forEach(item => {
      const itemH = getGridHeight(item.x, item.y) + OBJECT_ELEVATION_OFFSET;

      if (item.type === "building") {
        const bld = item as BuildingItem;
        const baseH = getBuildingBaseHeight(bld);
        const mesh = createBuildingMesh3d(bld, baseH);
        scene.add(mesh);
      }
      if (item.type === "tree") {
        const tree = create3dTree(item as TreeItem);
        tree.position.set(item.x, itemH, item.y);
        scene.add(tree);
      }
      if (item.type === "parking") {
        const car = create3dCar(item as ParkingItem);
        car.position.set(item.x, itemH, item.y);
        scene.add(car);
      }
    });

    // Render
    const snapshot = getCameraSnapshotRenderer(width, height);
    const renderer = snapshot.renderer;
    const canvas = snapshot.canvas!;

    // Apply PBR Lighting (RoomEnvironment) to fix black models in preview
    scene.environment = snapshot.envTexture ?? null;

    // Load scene background image if present (same as Camera Preview Panel)
    if (sceneBackgroundImg) {
      try {
        // Load texture synchronously by creating an image and converting it
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = sceneBackgroundImg;
        // If image is already loaded (cached), use it
        if (img.complete && img.naturalWidth > 0) {
          const bgTexture = new THREE.Texture(img);
          bgTexture.needsUpdate = true;
          scene.background = bgTexture;
        }
      } catch (e) {
        // Fallback - texture will load async, not available for this render
      }
    }

    renderer.render(scene, perspCam);
    // This scene is rebuilt for every snapshot; free its GPU resources (but keep the shared env map).
    disposeObjectDeep(scene, new Set(snapshot.envTexture ? [snapshot.envTexture] : []));
    if (scene.background instanceof THREE.Texture) scene.background.dispose();

    // Copy WebGL canvas to a 2D canvas for overlay (WebGL and 2D contexts can't coexist on same canvas)
    const outputCanvas = document.createElement('canvas');
    outputCanvas.width = width;
    outputCanvas.height = height;
    const ctx = outputCanvas.getContext('2d');
    if (ctx) {
      // Draw the WebGL render first
      ctx.drawImage(canvas, 0, 0);

      // Top bar with camera name only
      const k = width / 1280;
      ctx.fillStyle = 'rgba(0,0,0,0.6)';
      ctx.fillRect(0, 0, width, 40 * k);

      // Camera icon and label
      ctx.fillStyle = '#10b981';
      ctx.font = `bold ${Math.round(24 * k)}px system-ui, sans-serif`;
      ctx.fillText('📷', 16 * k, 28 * k);
      ctx.fillStyle = '#fff';
      ctx.font = `bold ${Math.round(22 * k)}px system-ui, sans-serif`;
      ctx.fillText(cam.label, 56 * k, 28 * k);
    }

    return outputCanvas;
  };

  const renderCameraViewToDataUrl = (cam: CameraItem): string => renderCameraViewToCanvas(cam).toDataURL('image/png');

  // Add current 2D plan to export list
  const addPlanToExportList = async () => {
    try {
      const dataUrl = await renderPlanToDataUrl({
        scale: 2,
        includeGrid: showGrid,
        backgroundColor: "#f8fafc"
      });
      addToExportList('plan', '2D Plan View', dataUrl);
    } catch (e) {
      console.error("Plan capture failed", e);
      showExportNotice("Failed to capture plan view.", "error");
    }
  };

  // Add current 3D view to export list
  const add3dToExportList = () => {
    const state = threeStateRef.current;
    if (!state) {
      showExportNotice("3D view is not ready yet.", "error");
      return;
    }
    try {
      state.renderer.render(state.scene, state.camera);
      const dataUrl = state.renderer.domElement.toDataURL('image/png');
      addToExportList('3d', '3D Overview', dataUrl);
    } catch (e) {
      console.error("3D export failed", e);
      showExportNotice("Failed to capture 3D view.", "error");
    }
  };

  // Add camera view to export list
  const addCameraViewToExportList = (cam: CameraItem) => {
    try {
      const dataUrl = renderCameraViewToDataUrl(cam);
      addToExportList('camera', `Camera: ${cam.label}`, dataUrl, cam.id);
    } catch (e) {
      console.error("Camera export failed", e);
      showExportNotice("Failed to capture camera view.", "error");
    }
  };



  // Handle panorama/HDRI file upload with auto-detection
  const handlePanoramaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target?.result as string;

      // Create image to check aspect ratio
      const img = new Image();
      img.onload = () => {
        // If aspect ratio is close to 2:1, it's likely equirectangular
        const aspectRatio = img.width / img.height;
        const isPanorama = aspectRatio >= 1.8 && aspectRatio <= 2.2;

        setSceneBackgroundImg(dataUrl);
        setBackgroundMode(isPanorama ? 'panorama' : 'flat');
      };
      img.src = dataUrl;
    };
    reader.readAsDataURL(file);
  };

  // Export comprehensive report with all items in export list
  const handleExportReportPng = async () => {
    if (exportList.length === 0) {
      showExportNotice("Your report is empty. Add views first.", "info");
      return;
    }

    const scale = 2;
    const padding = 40;
    const imageWidth = 800;
    const imageHeight = 600;
    const cols = 2;
    const rows = Math.ceil(exportList.length / cols);

    const totalWidth = (imageWidth + padding) * cols + padding;
    const headerHeight = 120; // Increased to prevent text overlap
    const totalHeight = headerHeight + (imageHeight + padding + 30) * rows + padding;

    const canvas = document.createElement('canvas');
    canvas.width = totalWidth * scale;
    canvas.height = totalHeight * scale;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      showExportNotice("Failed to prepare report canvas.", "error");
      return;
    }

    ctx.scale(scale, scale);
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, totalWidth, totalHeight);

    // Header
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 28px sans-serif';
    ctx.fillText(projectName || 'Security Camera Plan', padding, padding + 30);
    ctx.fillStyle = '#64748b';
    ctx.font = '14px sans-serif';
    ctx.fillText(`Exported: ${new Date().toLocaleString()} | ${exportList.length} view(s)`, padding, padding + 55);

    // Draw each image
    const loadImage = (src: string): Promise<HTMLImageElement> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });
    };

    for (let i = 0; i < exportList.length; i++) {
      const item = exportList[i];
      const col = i % cols;
      const row = Math.floor(i / cols);
      const x = padding + col * (imageWidth + padding);
      const y = headerHeight + row * (imageHeight + padding + 30);

      // Label
      ctx.fillStyle = '#334155';
      ctx.font = 'bold 14px sans-serif';
      ctx.fillText(item.label, x, y + 20);

      // Image frame
      ctx.fillStyle = '#f1f5f9';
      ctx.fillRect(x, y + 28, imageWidth, imageHeight);
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y + 28, imageWidth, imageHeight);

      try {
        const img = await loadImage(item.dataUrl);
        // Fit image proportionally
        const imgAspect = img.width / img.height;
        const boxAspect = imageWidth / imageHeight;
        let drawW, drawH, drawX, drawY;
        if (imgAspect > boxAspect) {
          drawW = imageWidth;
          drawH = imageWidth / imgAspect;
          drawX = x;
          drawY = y + 28 + (imageHeight - drawH) / 2;
        } else {
          drawH = imageHeight;
          drawW = imageHeight * imgAspect;
          drawX = x + (imageWidth - drawW) / 2;
          drawY = y + 28;
        }
        ctx.drawImage(img, drawX, drawY, drawW, drawH);
      } catch (e) {
        ctx.fillStyle = '#cbd5e1';
        ctx.font = '16px sans-serif';
        ctx.fillText('Failed to load image', x + 20, y + 100);
      }
    }

    // Download
    const pngUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = pngUrl;
    link.download = `${(projectName || 'security_plan').replace(/\s+/g, '_')}_report.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleExportReportPdf = () => {
    if (exportList.length === 0) {
      showExportNotice("Your report is empty. Add views first.", "info");
      return;
    }

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      showExportNotice("Popups blocked. Allow popups to export PDF.", "error");
      return;
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${projectName || 'Security Plan Report'}</title>
        <style>
          body { font-family: system-ui, -apple-system, sans-serif; padding: 40px; max-width: 1000px; margin: 0 auto; }
          h1 { color: #0f172a; margin-bottom: 5px; }
          .meta { color: #64748b; font-size: 14px; margin-bottom: 40px; border-bottom: 1px solid #e2e8f0; padding-bottom: 20px; }
          .item { margin-bottom: 40px; page-break-inside: avoid; }
          .item h3 { color: #334155; margin-bottom: 10px; }
          .item img { width: 100%; border: 1px solid #e2e8f0; border-radius: 4px; }
          @media print {
            body { padding: 0; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <h1>${projectName || 'Security Camera Plan'}</h1>
        <div class="meta">Exported: ${new Date().toLocaleString()} | ${exportList.length} view(s)</div>
        
        ${exportList.map(item => `
          <div class="item">
            <h3>${item.label}</h3>
            <img src="${item.dataUrl}" />
          </div>
        `).join('')}
        
        <script>
          window.onload = () => {
             setTimeout(() => {
               window.print();
             }, 500);
          }
        </script>
      </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  // Loads a saved project, replacing everything from the current one (anything the file
  // doesn't contain is reset rather than left over from the previous project).
  const applyProjectData = (projectData: any) => {
    setItems(Array.isArray(projectData.items) ? projectData.items : []);
    setSelectedId(null);
    setMode("select");
    setTerrainHeights(projectData.terrainHeights && typeof projectData.terrainHeights === "object" ? projectData.terrainHeights : {});
    setBackgroundImg(projectData.backgroundImg || null);
    setDemData(null);
    setDemPreview(null);
    setDemAlignMode(false);
    if (projectData.bgSettings) setBgSettings(projectData.bgSettings);
    if (projectData.canvasSize) setCanvasSize(projectData.canvasSize);
    if (typeof projectData.gridSize === "number") setGridSize(projectData.gridSize);
    if (typeof projectData.showGrid === "boolean") setShowGrid(projectData.showGrid);
    if (typeof projectData.snapToGrid === "boolean") setSnapToGrid(projectData.snapToGrid);
    if (projectData.projectName) setProjectName(projectData.projectName);
    setExportList(Array.isArray(projectData.exportList) ? projectData.exportList : []);
    if (projectData.frustumSettings) setFrustumSettings(projectData.frustumSettings);
    setSceneBackgroundImg(projectData.sceneBackgroundImg || null);
    if (projectData.backgroundMode) setBackgroundMode(projectData.backgroundMode);
    if (projectData.nvrLayout) setNvrLayout(projectData.nvrLayout);
    if (projectData.buildingLabelDefaults) {
      setBuildingLabelDefaults({ ...DEFAULT_BUILDING_LABEL, ...projectData.buildingLabelDefaults });
    } else {
      setBuildingLabelDefaults(DEFAULT_BUILDING_LABEL);
    }
    setSiteLocation(projectData.siteLocation && typeof projectData.siteLocation.lat === "number" ? projectData.siteLocation : null);
    if (projectData.elevationOverlay) setElevationOverlay(projectData.elevationOverlay);
    setSiteBounds(projectData.siteBounds && typeof projectData.siteBounds.north === "number" ? projectData.siteBounds : null);
    setPlanGeoRef(projectData.planGeoRef && projectData.planGeoRef.bounds ? projectData.planGeoRef : null);
    if (projectData.demSettings) {
      const settings = projectData.demSettings;
      if (typeof settings.demScale === "number") setDemScale(settings.demScale);
      if (typeof settings.demOffset === "number") setDemOffset(settings.demOffset);
      if (typeof settings.demNormalize === "boolean") setDemNormalize(settings.demNormalize);
      if (settings.demTransform) setDemTransform(settings.demTransform);
      if (typeof settings.demOverlayOpacity === "number") setDemOverlayOpacity(settings.demOverlayOpacity);
      if (typeof settings.demAlignMode === "boolean") setDemAlignMode(settings.demAlignMode);
      if (settings.demAlignTool) setDemAlignTool(settings.demAlignTool);
    }
  };

  const buildProjectData = (includeTerrain = true, hasTerrain = false) => ({
    version: 2,
    items,
    ...(includeTerrain
      ? { terrainHeights }
      : hasTerrain
        ? { terrainExternal: true, terrainCount: Object.keys(terrainHeights).length }
        : {}),
    backgroundImg,
    bgSettings,
    canvasSize,
    gridSize,
    showGrid,
    snapToGrid,
    projectName,
    exportList,
    frustumSettings,
    sceneBackgroundImg,
    backgroundMode,
    nvrLayout,
    buildingLabelDefaults,
    siteLocation,
    siteBounds,
    planGeoRef,
    elevationOverlay,
    demMeta: demData
      ? {
        name: demData.name,
        width: demData.width,
        height: demData.height,
        min: demData.min,
        max: demData.max,
        noData: demData.noData ?? null
      }
      : null,
    demSettings: {
      demScale,
      demOffset,
      demNormalize,
      demTransform,
      demOverlayOpacity,
      demAlignMode,
      demAlignTool
    }
  });

  const handleSaveProject = async () => {
    const hasDem = !!demData;
    const hasTerrain = Object.keys(terrainHeights).length > 0;

    try {
      const projectData = buildProjectData(false, hasTerrain);
      const zip = new JSZip();
      zip.file("project.json", JSON.stringify(projectData, null, 2));

      if (hasTerrain) {
        zip.file("terrain.json", JSON.stringify(terrainHeights));
      }

      const values = demData?.values;
      if (values) {
        const buffer = values.buffer.slice(values.byteOffset, values.byteOffset + values.byteLength);
        zip.file("dem.bin", new Uint8Array(buffer));
      }

      const blob = await zip.generateAsync({ type: "blob", compression: "DEFLATE", compressionOptions: { level: 6 } });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "security_project.zip";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Failed to save zip project", err);
      alert("Failed to save project archive. Try again.");
    }
  };

  const handleLoadProject = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const isZip = file.name.toLowerCase().endsWith(".zip");
    if (isZip) {
      try {
        const zip = await JSZip.loadAsync(file);
        const projectEntry = zip.file("project.json");
        if (!projectEntry) throw new Error("project.json missing");
        const json = await projectEntry.async("string");
        const projectData = JSON.parse(json);
        applyProjectData(projectData);

        const terrainEntry = zip.file("terrain.json");
        if (terrainEntry) {
          const terrainJson = await terrainEntry.async("string");
          const terrain = JSON.parse(terrainJson);
          if (terrain) setTerrainHeights(terrain);
        }

        if (projectData.demMeta) {
          const demEntry = zip.file("dem.bin");
          if (demEntry) {
            const buffer = await demEntry.async("arraybuffer");
            const values = new Float32Array(buffer);
            const meta = projectData.demMeta;
            const dem: DemData = {
              name: meta.name || "dem.bin",
              width: meta.width,
              height: meta.height,
              min: meta.min,
              max: meta.max,
              noData: meta.noData ?? null,
              values
            };
            setDemData(dem);
            const preview = buildDemPreview(dem);
            setDemPreview(preview);
          } else {
            setDemData(null);
            setDemPreview(null);
          }
        } else {
          setDemData(null);
          setDemPreview(null);
        }
        resetHistory();
      } catch (err) {
        console.error("Failed to load zip project", err);
        alert("Invalid or corrupted project archive.");
      } finally {
        if (e.target) e.target.value = "";
      }
      return;
    }

    const reader = new FileReader();
    reader.onload = event => {
      try {
        const json = event.target?.result as string;
        const projectData = JSON.parse(json);
        applyProjectData(projectData);
        resetHistory();
      } catch (err) {
        console.error("Failed to load project file", err);
        alert("Invalid project file.");
      } finally {
        if (e.target) e.target.value = "";
      }
    };
    reader.readAsText(file);
  };

  const handleBg3dUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setSceneBackgroundImg(result);
    };
    reader.readAsDataURL(file);
  };

  const handleBackgroundUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = event => setBackgroundImg(event.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleDemUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const buffer = await file.arrayBuffer();
      const { fromArrayBuffer } = await import("geotiff");
      const tiff = await fromArrayBuffer(buffer);
      const image = await tiff.getImage();
      let width = image.getWidth();
      let height = image.getHeight();
      const noData =
        (image as any).getGDALNoData?.() ??
        (image as any).getNoDataValue?.() ??
        null;
      // With a geo-referenced site, read only the part of the file covering the site (tiles can be huge).
      let geo = planGeoRef ? getGeoTiffCorners(image) : null;
      let readOptions: any = { samples: [0], interleave: true };
      if (geo && planGeoRef) {
        const fullW = width;
        const fullH = height;
        const [minX, minY, maxX, maxY] = geo.bbox;
        const b = planGeoRef.bounds;
        const siteCorners = [[b.west, b.north], [b.east, b.north], [b.east, b.south], [b.west, b.south]]
          .map(([lon, lat]) => proj4("+proj=longlat +datum=WGS84 +no_defs", geo!.projDef, [lon, lat]));
        const toPx = (x: number) => ((x - minX) / (maxX - minX)) * fullW;
        const toPy = (y: number) => ((maxY - y) / (maxY - minY)) * fullH;
        const pad = 2;
        const x0 = clamp(Math.floor(Math.min(...siteCorners.map(c => toPx(c[0])))) - pad, 0, fullW);
        const x1 = clamp(Math.ceil(Math.max(...siteCorners.map(c => toPx(c[0])))) + pad, 0, fullW);
        const y0 = clamp(Math.floor(Math.min(...siteCorners.map(c => toPy(c[1])))) - pad, 0, fullH);
        const y1 = clamp(Math.ceil(Math.max(...siteCorners.map(c => toPy(c[1])))) + pad, 0, fullH);
        if (x1 - x0 < 2 || y1 - y0 < 2) {
          alert("This elevation file doesn't cover your selected site. Download the tile that contains your property.");
          return;
        }
        // Cap at ~800px per side; geotiff resamples on read.
        const outScale = Math.min(1, 800 / Math.max(x1 - x0, y1 - y0));
        width = Math.max(2, Math.round((x1 - x0) * outScale));
        height = Math.max(2, Math.round((y1 - y0) * outScale));
        readOptions = { ...readOptions, window: [x0, y0, x1, y1], width, height, resampleMethod: "bilinear" };
        // Corners of the window that was read, for exact placement.
        const wx0 = minX + (x0 / fullW) * (maxX - minX);
        const wx1 = minX + (x1 / fullW) * (maxX - minX);
        const wy0 = maxY - (y0 / fullH) * (maxY - minY);
        const wy1 = maxY - (y1 / fullH) * (maxY - minY);
        const toLatLon = (x: number, y: number) => {
          const [lon, lat] = proj4(geo!.projDef, "+proj=longlat +datum=WGS84 +no_defs", [x, y]);
          return { lat, lon };
        };
        geo = { ...geo, corners: [toLatLon(wx0, wy0), toLatLon(wx1, wy0), toLatLon(wx1, wy1), toLatLon(wx0, wy1)] };
      } else if (width * height > 4096 * 4096) {
        alert("This elevation file is very large. Pick your site in Import Site first so only the needed part is loaded.");
        return;
      }
      const raster = await image.readRasters(readOptions);
      const values = Float32Array.from(raster as any);

      let min = Number.POSITIVE_INFINITY;
      let max = Number.NEGATIVE_INFINITY;
      for (let i = 0; i < values.length; i++) {
        const v = values[i];
        if (!Number.isFinite(v)) continue;
        if (noData !== null && noData !== undefined && v === noData) continue;
        if (v < min) min = v;
        if (v > max) max = v;
      }

      if (!Number.isFinite(min) || !Number.isFinite(max)) {
        alert("DEM file contained no valid elevation values.");
        return;
      }

      const data: DemData = {
        name: file.name,
        width,
        height,
        values,
        min,
        max,
        noData
      };

      setDemData(data);
      const preview = buildDemPreview(data);
      // If the site is geo-referenced and the file carries coordinates, place it exactly — no manual aligning.
      if (preview && planGeoRef && geo) {
        const { bounds, area, unitsPerFoot } = planGeoRef;
        const toPlan = (p: { lat: number; lon: number }) => ({
          x: area.x + ((p.lon - bounds.west) / (bounds.east - bounds.west)) * area.width,
          y: area.y + ((bounds.north - p.lat) / (bounds.north - bounds.south)) * area.height
        });
        const [nw, ne, se, sw] = geo.corners.map(toPlan);
        const transform = {
          x: (nw.x + ne.x + se.x + sw.x) / 4,
          y: (nw.y + ne.y + se.y + sw.y) / 4,
          scale: Math.hypot(ne.x - nw.x, ne.y - nw.y) / preview.width,
          rotation: (Math.atan2(ne.y - nw.y, ne.x - nw.x) * 180) / Math.PI
        };
        const scale = (geo.elevationInFeet ? 1 : FEET_PER_METER) * unitsPerFoot * elevationExaggeration;
        setDemPreview(preview);
        setDemTransform(transform);
        setDemScale(scale);
        setDemOffset(0);
        setDemNormalize(true);
        setDemAutoApply(true);
        setDemAlignMode(false);
        demDataRef.current = data;
        demPreviewRef.current = preview;
        demTransformRef.current = transform;
        demScaleRef.current = scale;
        demOffsetRef.current = 0;
        demNormalizeRef.current = true;
        applyDemToTerrain(data, { preview, transform, scale, offset: 0, normalize: true });
          return;
      }
      if (preview) {
        setDemPreview(preview);
        const baseW = backgroundImg ? bgSettings.width : canvasSize.width;
        const baseH = backgroundImg ? bgSettings.height : canvasSize.height;
        const scale = Math.min(baseW / preview.width, baseH / preview.height);
        const centerX = (backgroundImg ? bgSettings.x : 0) + baseW / 2;
        const centerY = (backgroundImg ? bgSettings.y : 0) + baseH / 2;
        const transform = { x: centerX, y: centerY, scale, rotation: 0 };
        setDemTransform(transform);
        demPreviewRef.current = preview;
        demTransformRef.current = transform;
        applyDemToTerrain(data, { preview, transform });
      }
      setDemAlignMode(true);
      setDemAlignTool("move");
      alert(planGeoRef
        ? "This file's coordinate system isn't recognized, so it was placed in the middle. Use DEM Align to line it up."
        : "Tip: pick your site in Import Site first (draw the rectangle), and elevation files will snap into place automatically. For now, use DEM Align to line it up.");
    } catch (err) {
      console.error("Failed to load DEM", err);
      alert("Failed to read DEM file. Make sure it's a valid GeoTIFF DEM.");
    } finally {
      if (e.target) e.target.value = "";
    }
  };

  const handleElementImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = event => addImageElement(event.target?.result as string);
      reader.readAsDataURL(file);
    }
  };



  const disposeGroup = (group: THREE.Object3D) => {
    disposeObjectDeep(group);
    group.clear();
  };

  const getSpriteFontSize = (fontSize: number) => clamp(Math.round(fontSize * 4), 24, 96);

  const getBuildingLabelSignature = (building: BuildingItem) => {
    const font = getBuildingLabelFont(building);
    return `${building.label}|${font.fontFamily}|${font.fontSize}|${font.fontWeight}`;
  };

  const createTextSprite = (text: string, options?: { fontFamily?: string; fontSize?: number; fontWeight?: number; color?: string }) => {
    if (!text?.trim()) return null;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) return null;
    const fontSize = options?.fontSize ?? 56;
    const padding = 24;
    const fontFamily = options?.fontFamily ?? "Space Grotesk";
    const fontWeight = options?.fontWeight ?? 700;
    context.font = `${fontWeight} ${fontSize}px ${fontFamily}, sans-serif`;
    const metrics = context.measureText(text);
    canvas.width = Math.ceil(metrics.width + padding * 2);
    canvas.height = Math.ceil(fontSize + padding * 1.6);
    context.font = `${fontWeight} ${fontSize}px ${fontFamily}, sans-serif`;
    context.fillStyle = options?.color ?? "rgba(15, 23, 42, 0.9)";
    context.textBaseline = "middle";
    context.fillText(text, padding, canvas.height / 2);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(canvas.width / 10, canvas.height / 10, 1);
    return sprite;
  };

  const createBuildingMesh3d = (building: BuildingItem, baseHeight: number) => {
    const points = getBuildingPoints(building);
    const buildingHeight = building.wallHeight ?? 60;
    const shape = new THREE.Shape(points.map(p => new THREE.Vector2(p.x, -p.y)));
    const extrudeSettings = {
      depth: buildingHeight,
      bevelEnabled: true,
      bevelThickness: 2,
      bevelSize: 1,
      bevelSegments: 2
    };
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.rotateX(-Math.PI / 2);

    const buildingMaterial = new THREE.MeshStandardMaterial({
      color: building.color,
      roughness: 0.6,
      metalness: 0.1
    });
    const mesh = new THREE.Mesh(geometry, buildingMaterial);
    mesh.position.set(building.x, baseHeight, building.y);
    mesh.rotation.y = -THREE.MathUtils.degToRad(building.rotation);
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    const roofMaterial = new THREE.MeshStandardMaterial({
      color: adjustColor(building.color, -20),
      roughness: 0.7,
      metalness: 0.05
    });
    const roofShape = new THREE.Shape(points.map(p => new THREE.Vector2(p.x, -p.y)));
    const roofGeometry = new THREE.ShapeGeometry(roofShape);
    roofGeometry.rotateX(-Math.PI / 2);
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.set(0, buildingHeight, 0);
    roof.name = "building-roof";
    roof.userData.itemId = building.id;
    roof.userData.isRoof = true;
    roof.receiveShadow = true;
    mesh.add(roof);

    const font = getBuildingLabelFont(building);
    const label = createTextSprite(building.label, {
      fontFamily: font.fontFamily,
      fontWeight: font.fontWeight,
      fontSize: getSpriteFontSize(font.fontSize)
    });
    if (label) {
      const labelOffset = building.labelOffset ?? { x: 0, y: 0 };
      label.name = "building-label";
      label.userData.itemId = building.id;
      label.userData.isLabel = true;
      label.userData.signature = getBuildingLabelSignature(building);
      label.position.set(labelOffset.x, buildingHeight + 15, labelOffset.y);
      mesh.add(label);
    }

    return mesh;
  };

  const disposeSprite = (sprite: THREE.Sprite) => {
    const material = sprite.material;
    if (material instanceof THREE.SpriteMaterial) {
      if (material.map) material.map.dispose();
      material.dispose();
    }
  };

  const refreshBuildingLabelSprite = (mesh: THREE.Object3D, building: BuildingItem) => {
    const signature = getBuildingLabelSignature(building);
    const existing = mesh.getObjectByName("building-label") as THREE.Sprite | null;
    if (existing && existing.userData?.signature === signature) return existing;

    if (existing) {
      mesh.remove(existing);
      disposeSprite(existing);
    }

    const font = getBuildingLabelFont(building);
    const label = createTextSprite(building.label, {
      fontFamily: font.fontFamily,
      fontWeight: font.fontWeight,
      fontSize: getSpriteFontSize(font.fontSize)
    });
    if (!label) return null;
    label.name = "building-label";
    label.userData.itemId = building.id;
    label.userData.isLabel = true;
    label.userData.signature = signature;
    mesh.add(label);
    return label;
  };

  // Helper for Ray-Segment Intersection (2D)
  const getRaySegmentIntersection = (rayOrigin: { x: number, y: number }, rayDir: { x: number, y: number }, segA: { x: number, y: number }, segB: { x: number, y: number }) => {
    const rx = rayOrigin.x; const ry = rayOrigin.y;
    const dx = rayDir.x; const dy = rayDir.y;
    const ax = segA.x; const ay = segA.y;
    const bx = segB.x; const by = segB.y;

    // Ray: r + t*d
    // Seg: a + u*(b-a)
    const v1x = rx - ax;
    const v1y = ry - ay;
    const v2x = bx - ax;
    const v2y = by - ay;
    const v3x = -dy;
    const v3y = dx;

    const dot = v2x * v3x + v2y * v3y;
    if (Math.abs(dot) < 0.000001) return null;

    const t1 = (v2x * v1y - v2y * v1x) / dot; // t (Ray dist)
    const t2 = (v1x * v3x + v1y * v3y) / dot; // u (Seg param)

    if (t1 >= 0 && (t2 >= 0 && t2 <= 1)) return t1;
    return null;
  };

  const getVisibilityPolygon = (origin: { x: number, y: number }, range: number, fov: number, rotation: number, obstacles: (BuildingItem | TreeItem)[]) => {
    const segments = obstacles.flatMap(item => {
      if (item.type === "building") {
        const b = item as BuildingItem;
        const pts = getBuildingEdgePointsWorld(b);
        if (pts.length < 2) return [];
        return pts.map((p, i) => [p, pts[(i + 1) % pts.length]]);
      } else if (item.type === "tree") {
        const t = item as TreeItem;
        // Approximate circle with Octagon
        const pts: { x: number, y: number }[] = [];
        const sides = 8;
        for (let i = 0; i < sides; i++) {
          const angle = (i / sides) * Math.PI * 2;
          pts.push({
            x: t.x + t.radius * Math.cos(angle),
            y: t.y + t.radius * Math.sin(angle)
          });
        }
        return pts.map((p, i) => [p, pts[(i + 1) % pts.length]]);
      }
      return [];
    });

    const rayCount = 128;
    const startAngle = (rotation - fov / 2) * (Math.PI / 180);
    const totalRad = fov * (Math.PI / 180);
    const step = totalRad / (rayCount > 1 ? rayCount - 1 : 1);

    const pathPoints: { x: number, y: number }[] = [];

    for (let i = 0; i < rayCount; i++) {
      const theta = startAngle + i * step;
      const dir = { x: Math.cos(theta), y: Math.sin(theta) };
      let dist = range;

      for (const seg of segments) {
        const t = getRaySegmentIntersection(origin, dir, seg[0], seg[1]);
        if (t !== null && t < dist) dist = t;
      }
      pathPoints.push({ x: dist * dir.x, y: dist * dir.y });
    }
    return pathPoints;
  };

  const refreshCarObject = (item: ParkingItem, obj: THREE.Object3D | undefined, state: { group: THREE.Group }) => {
    const signature = getCarSignature(item);
    if (obj && obj.userData?.signature === signature) return obj;
    const parent = obj?.parent ?? state.group;
    const car = create3dCar(item);
    car.userData.itemId = item.id;
    car.userData.signature = signature;
    parent.add(car);
    if (obj) {
      parent.remove(obj);
      if (obj instanceof THREE.Group) {
        disposeGroup(obj);
      } else {
        obj.traverse(child => {
          const mesh = child as THREE.Mesh;
          if (mesh.geometry) mesh.geometry.dispose();
          if (mesh.material) {
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach(material => material.dispose());
            } else {
              mesh.material.dispose();
            }
          }
        });
      }
    }
    threeObjectCacheRef.current.set(item.id, car);
    return car;
  };

  const refreshTreeObject = (item: TreeItem, obj: THREE.Object3D | undefined, state: { group: THREE.Group }) => {
    const signature = getTreeSignature(item);
    if (obj && obj.userData?.signature === signature) return obj;
    const parent = obj?.parent ?? state.group;
    const tree = create3dTree(item);
    tree.userData.itemId = item.id;
    tree.userData.signature = signature;
    tree.renderOrder = 1;
    parent.add(tree);
    if (obj) {
      parent.remove(obj);
      if (obj instanceof THREE.Group) {
        disposeGroup(obj);
      } else {
        obj.traverse(child => {
          const mesh = child as THREE.Mesh;
          if (mesh.geometry) mesh.geometry.dispose();
          if (mesh.material) {
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach(material => material.dispose());
            } else {
              mesh.material.dispose();
            }
          }
        });
      }
    }
    threeObjectCacheRef.current.set(item.id, tree);
    return tree;
  };

  const ensureNamedGroup = (parent: THREE.Object3D, name: string) => {
    let group = parent.getObjectByName(name) as THREE.Group | null;
    if (!group) {
      group = new THREE.Group();
      group.name = name;
      parent.add(group);
    }
    return group;
  };

  const updateCameraFrustum = (
    cameraGroup: THREE.Group,
    cameraItem: CameraItem,
    cameraPos: { x: number; y: number },
    absHeight: number,
    pitchRad: number,
    rotAngle: number,
    hFov: number,
    range: number,
    state: { group: THREE.Group }
  ) => {
    const shouldShow = frustumSettings.visible && ((frustumSettings.showAll !== false) || cameraItem.id === selectedId);
    const staleLocalFrustum = cameraGroup.getObjectByName("camera-frustum") as THREE.Group | null;
    if (staleLocalFrustum) {
      disposeGroup(staleLocalFrustum);
      staleLocalFrustum.parent?.remove(staleLocalFrustum);
    }
    const frustumGroup = ensureNamedGroup(state.group, `camera-frustum-${cameraItem.id}`);
    const staleFloor = state.group.getObjectByName(`camera-floor-${cameraItem.id}`) as THREE.Group | null;
    if (staleFloor) {
      disposeGroup(staleFloor);
      staleFloor.parent?.remove(staleFloor);
    }

    frustumGroup.visible = shouldShow;

    if (frustumGroup.visible) {
      disposeGroup(frustumGroup);
      const lensOffset = (cameraGroup.userData?.lensOffset as number | undefined) ?? 0;
      const yaw = THREE.MathUtils.degToRad(cameraItem.rotation);
      const forward = new THREE.Vector3(
        Math.cos(yaw) * Math.cos(pitchRad),
        Math.sin(pitchRad),
        Math.sin(yaw) * Math.cos(pitchRad)
      ).normalize();
      const up = new THREE.Vector3(0, 1, 0);
      const right = new THREE.Vector3().crossVectors(forward, up).normalize();
      const correctedUp = new THREE.Vector3().crossVectors(right, forward).normalize();

      const basis = new THREE.Matrix4().makeBasis(forward, correctedUp, right);
      frustumGroup.quaternion.setFromRotationMatrix(basis);

      frustumGroup.position.set(
        cameraPos.x + forward.x * lensOffset,
        absHeight + forward.y * lensOffset,
        cameraPos.y + forward.z * lensOffset
      );

      const aspect = cameraItem.aspect ?? 16 / 9;
      const displayRange = Math.max(1, range);
      const vFovRad = 2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(hFov) / 2) / aspect);
      const farHeight = 2 * Math.tan(vFovRad / 2) * displayRange;
      const farWidth = farHeight * aspect;

      const vertices = [
        0, 0, 0,
        displayRange, farHeight / 2, -farWidth / 2,
        displayRange, -farHeight / 2, -farWidth / 2,
        0, 0, 0,
        displayRange, -farHeight / 2, -farWidth / 2,
        displayRange, -farHeight / 2, farWidth / 2,
        0, 0, 0,
        displayRange, -farHeight / 2, farWidth / 2,
        displayRange, farHeight / 2, farWidth / 2,
        0, 0, 0,
        displayRange, farHeight / 2, farWidth / 2,
        displayRange, farHeight / 2, -farWidth / 2,
        displayRange, -farHeight / 2, farWidth / 2,
        displayRange, -farHeight / 2, -farWidth / 2,
        displayRange, farHeight / 2, -farWidth / 2,
        displayRange, farHeight / 2, farWidth / 2,
        displayRange, -farHeight / 2, farWidth / 2,
        displayRange, farHeight / 2, -farWidth / 2
      ];

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
      geometry.computeVertexNormals();

      const frustumMaterial = new THREE.MeshBasicMaterial({
        color: frustumSettings.useCameraColor ? cameraItem.color : frustumSettings.color,
        transparent: true,
        opacity: frustumSettings.opacity,
        side: THREE.DoubleSide,
        depthWrite: false
      });

      const frustumMesh = new THREE.Mesh(geometry, frustumMaterial);
      frustumGroup.add(frustumMesh);

      const edgeVertices = [
        0, 0, 0, displayRange, farHeight / 2, -farWidth / 2,
        0, 0, 0, displayRange, -farHeight / 2, -farWidth / 2,
        0, 0, 0, displayRange, -farHeight / 2, farWidth / 2,
        0, 0, 0, displayRange, farHeight / 2, farWidth / 2,
        displayRange, farHeight / 2, -farWidth / 2, displayRange, farHeight / 2, farWidth / 2,
        displayRange, farHeight / 2, farWidth / 2, displayRange, -farHeight / 2, farWidth / 2,
        displayRange, -farHeight / 2, farWidth / 2, displayRange, -farHeight / 2, -farWidth / 2,
        displayRange, -farHeight / 2, -farWidth / 2, displayRange, farHeight / 2, -farWidth / 2
      ];
      const edgeGeometry = new THREE.BufferGeometry();
      edgeGeometry.setAttribute('position', new THREE.Float32BufferAttribute(edgeVertices, 3));
      const edges = new THREE.LineSegments(edgeGeometry, new THREE.LineBasicMaterial({
        color: frustumSettings.useCameraColor ? cameraItem.color : frustumSettings.color,
        transparent: true,
        opacity: frustumSettings.edgeOpacity
      }));
      frustumGroup.add(edges);
    } else {
      disposeGroup(frustumGroup);
    }

    // Floor projection removed
  };

  // Fast position-only update for 3D objects (used during dragging)
  const updateThreeScenePositions = () => {
    const state = threeStateRef.current;
    if (!state) return;

    const cache = threeObjectCacheRef.current;
    let needsRender = false;

    items.forEach(item => {
      const obj = cache.get(item.id);
      if (!obj && item.type !== "parking") return;

      // Get terrain height for the item
      const h = getGridHeight(item.x, item.y) + OBJECT_ELEVATION_OFFSET;

      if (item.type === "parking") {
        const carObj = refreshCarObject(item as ParkingItem, obj, state);
        carObj.position.set(item.x, h, item.y);
        carObj.rotation.y = -THREE.MathUtils.degToRad(item.rotation);
        needsRender = true;
      } else if (item.type === "tree") {
        const treeObj = refreshTreeObject(item as TreeItem, obj, state);
        treeObj.position.set(item.x, h, item.y);
        treeObj.rotation.y = -THREE.MathUtils.degToRad(item.rotation);
        needsRender = true;
      } else if (item.type === "building") {
        const building = item as BuildingItem;
        const baseH = getBuildingBaseHeight(building);
        obj.position.set(building.x, baseH, building.y);
        obj.rotation.y = -THREE.MathUtils.degToRad(item.rotation);
        const label = refreshBuildingLabelSprite(obj, building);
        if (label) {
          const offset = building.labelOffset ?? { x: 0, y: 0 };
          const buildingHeight = building.wallHeight ?? 60;
          label.position.set(offset.x, buildingHeight + 15, offset.y);
        }
        needsRender = true;
      } else if (item.type === "camera") {
        const cam = item as CameraItem;
        const camPos = getCameraPlanPosition(cam);
        const camH = getCameraBaseHeight(cam, camPos); // Base height at camera pivot (building base if mounted)
        const camMountHeight = cam.mount?.height ?? cam.height ?? 10;

        obj.position.set(camPos.x, camH + camMountHeight, camPos.y);
        if (!obj) return;
        obj.rotation.order = 'YZX';
        obj.rotation.y = -THREE.MathUtils.degToRad(cam.rotation);
        obj.rotation.x = 0;
        obj.rotation.z = THREE.MathUtils.degToRad(cam.pitch ?? DEFAULT_CAMERA_PITCH);
        updateCameraFrustum(
          obj as THREE.Group,
          cam,
          camPos,
          camH + camMountHeight,
          THREE.MathUtils.degToRad(cam.pitch ?? DEFAULT_CAMERA_PITCH),
          -THREE.MathUtils.degToRad(cam.rotation),
          cam.hFov ?? cam.fov,
          cam.range,
          state
        );
        needsRender = true;
      } else if (item.type === "image") {
        const img = item as ImageItem;
        obj.position.set(img.x, h + 0.25, img.y);
        obj.rotation.z = -THREE.MathUtils.degToRad(img.rotation);
        needsRender = true;
      } else if (item.type === "label") {
        obj.position.set(item.x, h + 8, item.y);
        needsRender = true;
      }
    });

    if (needsRender) {
      state.renderer.render(state.scene, state.camera);
    }
  };

  const bgSettingsEqual = (a: typeof bgSettings, b: typeof bgSettings) =>
    a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height && a.opacity === b.opacity;

  // Tints terrain vertices by elevation so hills/slopes are readable even without a base map.
  const applyTerrainVertexColors = (geometry: THREE.BufferGeometry) => {
    const posAttr = geometry.attributes.position as THREE.BufferAttribute;
    let colorAttr = geometry.getAttribute("color") as THREE.BufferAttribute | undefined;
    if (!colorAttr || colorAttr.count !== posAttr.count) {
      colorAttr = new THREE.BufferAttribute(new Float32Array(posAttr.count * 3), 3);
      geometry.setAttribute("color", colorAttr);
    }
    const flat = new THREE.Color(0x18181b);
    const color = new THREE.Color();
    const range = terrainStats.relief;
    for (let i = 0; i < posAttr.count; i++) {
      if (range <= 0.01) {
        color.copy(flat);
      } else {
        const [r, g, b] = elevationColor((posAttr.getZ(i) - terrainStats.min) / range);
        color.setRGB((r / 255) * 0.8, (g / 255) * 0.8, (b / 255) * 0.8, THREE.SRGBColorSpace);
      }
      colorAttr.setXYZ(i, color.r, color.g, color.b);
    }
    colorAttr.needsUpdate = true;
  };

  // Contour lines draped on the 3D terrain (index contour every 5th line is brighter).
  const updateTerrainContours3d = (group: THREE.Group) => {
    const existing = group.getObjectByName("terrain-contours");
    if (existing) {
      disposeGroup(existing as THREE.Group);
      existing.parent?.remove(existing);
    }
    if (elevationOverlay === "off" || contourSegments.length === 0) return;
    const contours = new THREE.Group();
    contours.name = "terrain-contours";
    const minor: number[] = [];
    const major: number[] = [];
    const lift = 0.25;
    contourSegments.forEach(seg => {
      const isMajor = Math.abs(Math.round(seg.level / contourInterval) % 5) === 0;
      (isMajor ? major : minor).push(seg.x1, seg.level + lift, seg.y1, seg.x2, seg.level + lift, seg.y2);
    });
    const addLines = (verts: number[], opacity: number) => {
      if (verts.length === 0) return;
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
      const lines = new THREE.LineSegments(geo, new THREE.LineBasicMaterial({
        color: 0xfff7e6,
        transparent: true,
        opacity,
        depthWrite: false
      }));
      lines.renderOrder = 0;
      lines.raycast = () => {};
      contours.add(lines);
    };
    addLines(minor, 0.35);
    addLines(major, 0.8);
    group.add(contours);
  };

  // Solid "cut-away" sides around the terrain so the site reads as a block of ground instead of a floating sheet.
  const updateTerrainSkirt = (group: THREE.Group) => {
    const existing = group.getObjectByName("terrain-skirt");
    if (existing) {
      disposeGroup(existing as THREE.Group);
      existing.parent?.remove(existing);
    }
    const flatBoundary = group.getObjectByName("canvas-boundary");
    if (flatBoundary) flatBoundary.visible = !hasTerrain;
    if (!hasTerrain) return;
    const grid = gridSize || 20;
    const base = Math.min(0, terrainStats.min) - Math.max(2, terrainStats.relief * 0.08);
    const edgePoints = (from: { x: number; z: number }, to: { x: number; z: number }) => {
      const length = Math.hypot(to.x - from.x, to.z - from.z);
      const steps = Math.max(1, Math.round(length / grid));
      return Array.from({ length: steps + 1 }, (_, i) => ({
        x: from.x + ((to.x - from.x) * i) / steps,
        z: from.z + ((to.z - from.z) * i) / steps
      }));
    };
    const w = canvasSize.width;
    const d = canvasSize.height;
    const corners = [{ x: 0, z: 0 }, { x: w, z: 0 }, { x: w, z: d }, { x: 0, z: d }];
    const positions: number[] = [];
    const outline: number[] = [];
    corners.forEach((corner, ci) => {
      const pts = edgePoints(corner, corners[(ci + 1) % 4]);
      for (let i = 0; i < pts.length - 1; i++) {
        const a = pts[i];
        const b = pts[i + 1];
        const ha = getGridHeight(a.x, a.z);
        const hb = getGridHeight(b.x, b.z);
        positions.push(a.x, ha, a.z, a.x, base, a.z, b.x, hb, b.z);
        positions.push(b.x, hb, b.z, a.x, base, a.z, b.x, base, b.z);
        outline.push(a.x, ha + 0.1, a.z, b.x, hb + 0.1, b.z);
      }
    });
    const skirt = new THREE.Group();
    skirt.name = "terrain-skirt";
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geo.computeVertexNormals();
    const walls = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x4a3a2a, roughness: 1, metalness: 0, side: THREE.DoubleSide }));
    walls.raycast = () => {};
    skirt.add(walls);
    const outlineGeo = new THREE.BufferGeometry();
    outlineGeo.setAttribute("position", new THREE.Float32BufferAttribute(outline, 3));
    const edge = new THREE.LineSegments(outlineGeo, new THREE.LineBasicMaterial({ color: 0x94a3b8 }));
    edge.raycast = () => {};
    skirt.add(edge);
    group.add(skirt);
  };

  const updateTerrainMesh = () => {
    const state = threeStateRef.current;
    if (!state) return false;

    const { group } = state;
    const terrainMesh = group.getObjectByName("terrain-mesh") as THREE.Mesh | null;
    if (!terrainMesh || !(terrainMesh.geometry instanceof THREE.PlaneGeometry)) return false;

    const segW = Math.round(canvasSize.width / gridSize);
    const segH = Math.round(canvasSize.height / gridSize);
    const terrainGeo = terrainMesh.geometry as THREE.PlaneGeometry;
    const tParams = terrainGeo.parameters as any;
    if (
      tParams.width !== canvasSize.width ||
      tParams.height !== canvasSize.height ||
      tParams.widthSegments !== segW ||
      tParams.heightSegments !== segH
    ) {
      return false;
    }

    const posAttr = terrainGeo.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < posAttr.count; i++) {
      const vx = posAttr.getX(i);
      const vy = posAttr.getY(i);
      const worldX = (canvasSize.width / 2) + vx;
      const worldZ = (canvasSize.height / 2) - vy;
      const h = getGridHeight(worldX, worldZ);
      posAttr.setZ(i, h);
    }
    posAttr.needsUpdate = true;
    terrainGeo.computeVertexNormals();
    applyTerrainVertexColors(terrainGeo);
    updateTerrainContours3d(group);
    updateTerrainSkirt(group);

    const mapPlane = group.getObjectByName("terrain-map-plane") as THREE.Mesh | null;
    if (mapPlane && mapPlane.geometry instanceof THREE.PlaneGeometry) {
      if (mapPlane.material && !Array.isArray(mapPlane.material)) {
        mapPlane.material.depthWrite = false;
      }
      mapPlane.renderOrder = -1;
      const mapSegW = Math.max(Math.round(bgSettings.width / gridSize), 1);
      const mapSegH = Math.max(Math.round(bgSettings.height / gridSize), 1);
      const mapGeo = mapPlane.geometry as THREE.PlaneGeometry;
      const mParams = mapGeo.parameters as any;
      if (
        mParams.width !== bgSettings.width ||
        mParams.height !== bgSettings.height ||
        mParams.widthSegments !== mapSegW ||
        mParams.heightSegments !== mapSegH
      ) {
        return false;
      }

      const mapPosAttr = mapGeo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < mapPosAttr.count; i++) {
        const localX = mapPosAttr.getX(i);
        const localY = mapPosAttr.getY(i);
        const worldX = (bgSettings.x + bgSettings.width / 2) + localX;
        const worldZ = (bgSettings.y + bgSettings.height / 2) - localY;
        const h = getGridHeight(worldX, worldZ);
        mapPosAttr.setZ(i, h + MAP_OVERLAY_OFFSET);
      }
      mapPosAttr.needsUpdate = true;
      mapGeo.computeVertexNormals();
    }

    return true;
  };

  const syncSceneRefs = () => {
    prevItemsRef.current = [...items];
    prevTerrainHeightsRef.current = terrainHeights;
    prevCanvasSizeRef.current = canvasSize;
    prevGridSizeRef.current = gridSize;
    prevBgSettingsRef.current = bgSettings;
    prevBackgroundImgRef.current = backgroundImg;
  };

  // Check if items have structural changes requiring full rebuild
  const needsFullRebuild = (prev: CanvasItem[], next: CanvasItem[]): boolean => {
    if (prev.length !== next.length) return true;

    const prevIds = new Set(prev.map(i => i.id));
    const nextIds = new Set(next.map(i => i.id));

    // Check for added/removed items
    for (const id of nextIds) {
      if (!prevIds.has(id)) return true;
    }
    for (const id of prevIds) {
      if (!nextIds.has(id)) return true;
    }

    // Check for type changes or significant property changes that require geometry rebuild
    for (const nextItem of next) {
      const prevItem = prev.find(p => p.id === nextItem.id);
      if (!prevItem) return true;
      if (prevItem.type !== nextItem.type) return true;

      // For buildings, check if points/size changed (requires geometry rebuild)
      if (nextItem.type === "building") {
        const prevB = prevItem as BuildingItem;
        const nextB = nextItem as BuildingItem;
        if (prevB.width !== nextB.width || prevB.height !== nextB.height || prevB.wallHeight !== nextB.wallHeight) return true;
        if (JSON.stringify(prevB.points) !== JSON.stringify(nextB.points)) return true;
        if (prevB.color !== nextB.color) return true;
      }

      if (nextItem.type === "label") {
        const a = prevItem as LabelItem;
        const b = nextItem as LabelItem;
        if (a.text !== b.text || a.fontSize !== b.fontSize || a.color !== b.color) return true;
      }
      if (nextItem.type === "image") {
        const a = prevItem as ImageItem;
        const b = nextItem as ImageItem;
        if (a.src !== b.src || a.width !== b.width || a.height !== b.height) return true;
      }

      // For trees, geometry updates are handled via cache refresh (no full rebuild)
      if (nextItem.type === "tree") {
        // no-op
      }

      // For parking/cars, geometry updates are handled via cache refresh (no full rebuild)
      if (nextItem.type === "parking") {
        // no-op
      }

      // For cameras, check if range/fov changed (frustum geometry)
      if (nextItem.type === "camera") {
        const prevC = prevItem as CameraItem;
        const nextC = nextItem as CameraItem;
        if (prevC.range !== nextC.range || prevC.fov !== nextC.fov || prevC.hFov !== nextC.hFov) return true;
        if (prevC.label !== nextC.label) return true; // label sprite
        if (prevC.color !== nextC.color) return true;
      }
    }

    return false;
  };

  const rebuildThreeScene = () => {
    const state = threeStateRef.current;
    if (!state) return;

    const { group, scene, renderer } = state;

    // Check if we can do a fast update without full rebuild
    const prevItems = prevItemsRef.current;
    const terrainChanged = prevTerrainHeightsRef.current !== terrainHeights;
    const canvasChanged = prevCanvasSizeRef.current.width !== canvasSize.width || prevCanvasSizeRef.current.height !== canvasSize.height;
    const gridChanged = prevGridSizeRef.current !== gridSize;
    const bgSettingsChanged = !bgSettingsEqual(prevBgSettingsRef.current, bgSettings);
    const bgImgChanged = prevBackgroundImgRef.current !== backgroundImg;
    const fullRebuildNeeded =
      prevItems.length === 0 ||
      needsFullRebuild(prevItems, items) ||
      canvasChanged ||
      gridChanged ||
      bgSettingsChanged ||
      bgImgChanged;

    if (!fullRebuildNeeded) {
      if (terrainChanged) {
        const updated = updateTerrainMesh();
        updateThreeScenePositions();
        if (updated) {
          renderer.render(scene, state.camera);
          syncSceneRefs();
          return;
        }
      } else {
        updateTerrainContours3d(group);
        updateThreeScenePositions();
        renderer.render(scene, state.camera);
        syncSceneRefs();
        return;
      }
    }

    // Full rebuild needed - clear cache and group
    threeObjectCacheRef.current.clear();
    disposeGroup(group);

    // Terrain Mesh (Dynamic Grid Height)
    // Removed static groundPlane and canvasPlane
    const segW = Math.round(canvasSize.width / gridSize);
    const segH = Math.round(canvasSize.height / gridSize);
    const terrainGeometry = new THREE.PlaneGeometry(canvasSize.width, canvasSize.height, segW, segH);

    // Apply Heights
    const posAttr = terrainGeometry.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const vx = posAttr.getX(i);
      const vy = posAttr.getY(i); // Plane Y corresponds to World Z (after rotation)

      // Transform to World Coordinates to lookup height
      // Plane Center (0,0) -> World Center (W/2, H/2)
      // vy goes +H/2 (Top) to -H/2 (Bottom)
      // World Z goes 0 (Top) to H (Bottom)
      const worldX = (canvasSize.width / 2) + vx;
      const worldZ = (canvasSize.height / 2) - vy;

      const h = getGridHeight(worldX, worldZ);
      posAttr.setZ(i, h);
    }
    terrainGeometry.computeVertexNormals();
    applyTerrainVertexColors(terrainGeometry);

    const terrainMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      vertexColors: true,
      roughness: 0.95,
      metalness: 0.0
    });

    const terrainMesh = new THREE.Mesh(terrainGeometry, terrainMaterial);
    terrainMesh.rotation.x = -Math.PI / 2;
    terrainMesh.position.set(canvasSize.width / 2, 0, canvasSize.height / 2);
    terrainMesh.receiveShadow = true;
    terrainMesh.name = "terrain-mesh";
    group.add(terrainMesh);
    updateTerrainContours3d(group);
    updateTerrainSkirt(group);

    // Canvas boundary outline
    const boundaryGeometry = new THREE.BufferGeometry();
    const boundaryVertices = new Float32Array([
      0, 0.1, 0,
      canvasSize.width, 0.1, 0,
      canvasSize.width, 0.1, canvasSize.height,
      0, 0.1, canvasSize.height,
      0, 0.1, 0
    ]);
    boundaryGeometry.setAttribute('position', new THREE.BufferAttribute(boundaryVertices, 3));
    const boundaryLine = new THREE.Line(
      boundaryGeometry,
      new THREE.LineBasicMaterial({ color: 0x94a3b8, linewidth: 2 })
    );
    boundaryLine.name = "canvas-boundary";
    boundaryLine.visible = !hasTerrain;
    group.add(boundaryLine);

    // Background image
    if (backgroundImg) {
      const mapPlaneMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: bgSettings.opacity,
        depthWrite: false,
        // Avoids z-fighting with the terrain on steep or distant slopes
        polygonOffset: true,
        polygonOffsetFactor: -2,
        polygonOffsetUnits: -4
      });
      new THREE.TextureLoader().load(backgroundImg, texture => {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        // Mipmaps + anisotropic filtering keep the satellite image sharp at grazing 3D angles.
        texture.generateMipmaps = true;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
        mapPlaneMaterial.map = texture;
        mapPlaneMaterial.needsUpdate = true;
        renderer.render(scene, state.camera);
      });

      // Create subdivided geometry to deform with terrain
      const mapSegW = Math.max(Math.round(bgSettings.width / gridSize), 1);
      const mapSegH = Math.max(Math.round(bgSettings.height / gridSize), 1);
      const mapGeometry = new THREE.PlaneGeometry(bgSettings.width, bgSettings.height, mapSegW, mapSegH);

      // Apply terrain heights to map geometry
      const mapPosAttr = mapGeometry.attributes.position;
      for (let i = 0; i < mapPosAttr.count; i++) {
        const localX = mapPosAttr.getX(i);
        const localY = mapPosAttr.getY(i); // This becomes Z after rotation

        // Transform local geometry coords to world coords
        // Local plane center (0,0) -> World position at bgSettings center
        const worldX = (bgSettings.x + bgSettings.width / 2) + localX;
        const worldZ = (bgSettings.y + bgSettings.height / 2) - localY;

        const h = getGridHeight(worldX, worldZ);
        mapPosAttr.setZ(i, h + MAP_OVERLAY_OFFSET); // Slight offset above terrain to prevent z-fighting
      }
      mapGeometry.computeVertexNormals();

    const mapPlane = new THREE.Mesh(mapGeometry, mapPlaneMaterial);
    mapPlane.renderOrder = -1;
    mapPlane.rotation.x = -Math.PI / 2;
    mapPlane.position.set(
      bgSettings.x + bgSettings.width / 2,
      0,
      bgSettings.y + bgSettings.height / 2
    );
    mapPlane.receiveShadow = true;
    mapPlane.name = "terrain-map-plane";
    group.add(mapPlane);
  }

    // Process all items
    items.forEach(item => {
      const terrainH = getGridHeight(item.x, item.y) + OBJECT_ELEVATION_OFFSET;

      // Buildings with improved materials
      if (item.type === "building") {
        const building = item as BuildingItem;
        const baseH = getBuildingBaseHeight(building);
        const mesh = createBuildingMesh3d(building, baseH);
        mesh.userData.itemId = building.id;
        mesh.renderOrder = 1;
        threeObjectCacheRef.current.set(building.id, mesh); // Cache for position updates
        group.add(mesh);
      }

      // Cars (Parking Items treated as cars)
      if (item.type === "parking") {
        const carItem = item as ParkingItem;
        const car = create3dCar(carItem);
        car.userData.itemId = item.id;
        car.userData.signature = getCarSignature(carItem);
        car.renderOrder = 1;
        threeObjectCacheRef.current.set(item.id, car); // Cache for position updates
        group.add(car);
      }

      // Trees
      if (item.type === "tree") {
        const tree = create3dTree(item as TreeItem);
        tree.userData.itemId = item.id;
        tree.userData.signature = getTreeSignature(item as TreeItem);
        tree.renderOrder = 1;
        threeObjectCacheRef.current.set(item.id, tree); // Cache for position updates
        group.add(tree);
      }

      // Camera with proper 3D frustum
      if (item.type === "camera") {
        const cameraItem = item as CameraItem;
        const cameraPos = getCameraPlanPosition(cameraItem);

        // Recalculate height at specific camera pivot
        const camTerrainH = getCameraBaseHeight(cameraItem, cameraPos);
        const cameraMountHeight = cameraItem.mount?.height ?? cameraItem.height ?? 10;
        const absHeight = camTerrainH + cameraMountHeight;
        const cameraHeight = cameraMountHeight;
        const pitch = cameraItem.pitch ?? DEFAULT_CAMERA_PITCH;
        const hFov = cameraItem.hFov ?? cameraItem.fov;
        const vFov = cameraItem.vFov ?? vFovFromH(hFov, cameraItem.aspect ?? 16 / 9);
        const range = cameraItem.range;

        // Convert 2D rotation to 3D Y-axis rotation
        // Must be consistent with building rotation which uses: -THREE.MathUtils.degToRad(building.rotation)
        // In 2D SVG: 0° = right (+X direction in screen)
        // In Three.js: Y-rotation of 0° = +X direction, negative rotation = clockwise when viewed from above
        // The camera model has lens pointing in +X local, so no offset needed
        const rotAngle = -THREE.MathUtils.degToRad(cameraItem.rotation);
        const pitchRad = THREE.MathUtils.degToRad(pitch);

        // Camera body - Unifi-style bullet camera (smaller, no pedestal)
        const cameraGroup = new THREE.Group();
        cameraGroup.userData.itemId = cameraItem.id; // For raycasting selection
        cameraGroup.renderOrder = 1;

        const cameraScale = 0.6;
        const bodyRadius = 4.2 * cameraScale;
        const bodyLength = 16 * cameraScale;
        const bezelLength = 3.2 * cameraScale;
        const lensRadius = 2.1 * cameraScale;

        const bodyMaterial = new THREE.MeshStandardMaterial({
          color: "#e2e8f0",
          roughness: 0.45,
          metalness: 0.2
        });
        const bezelMaterial = new THREE.MeshStandardMaterial({
          color: "#0f172a",
          roughness: 0.3,
          metalness: 0.5
        });
        const lensMaterial = new THREE.MeshStandardMaterial({
          color: "#0b1220",
          roughness: 0.2,
          metalness: 0.8
        });
        const accentMaterial = new THREE.MeshStandardMaterial({
          color: "#1f2937",
          roughness: 0.6,
          metalness: 0.2
        });

        // Main cylindrical body
        const bodyGeometry = new THREE.CylinderGeometry(bodyRadius, bodyRadius, bodyLength, 20);
        bodyGeometry.rotateZ(Math.PI / 2);
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.castShadow = true;
        cameraGroup.add(body);

        // Front bezel and lens
        const bezelGeometry = new THREE.CylinderGeometry(bodyRadius * 0.95, bodyRadius * 0.95, bezelLength, 20);
        bezelGeometry.rotateZ(Math.PI / 2);
        const bezel = new THREE.Mesh(bezelGeometry, bezelMaterial);
        bezel.position.set(bodyLength / 2 - bezelLength / 2, 0, 0);
        bezel.castShadow = true;
        cameraGroup.add(bezel);

        const lensGeometry = new THREE.CylinderGeometry(lensRadius * 0.9, lensRadius, 2.2 * cameraScale, 16);
        lensGeometry.rotateZ(Math.PI / 2);
        const lens = new THREE.Mesh(lensGeometry, lensMaterial);
        lens.position.set(bodyLength / 2 + 0.6 * cameraScale, 0, 0);
        lens.castShadow = true;
        cameraGroup.add(lens);
        cameraGroup.userData.lensOffset = bodyLength / 2 + 1.4 * cameraScale;

        // Mount collar + short arm (no pedestal)
        const collarGeometry = new THREE.TorusGeometry(bodyRadius * 0.7, bodyRadius * 0.12, 10, 20);
        const collar = new THREE.Mesh(collarGeometry, accentMaterial);
        collar.position.set(-bodyLength / 2 + bodyRadius * 0.25, 0, 0);
        collar.rotation.y = Math.PI / 2;
        cameraGroup.add(collar);

        const armGeometry = new THREE.CylinderGeometry(bodyRadius * 0.22, bodyRadius * 0.28, 2.8 * cameraScale, 12);
        const arm = new THREE.Mesh(armGeometry, accentMaterial);
        arm.position.set(-bodyLength / 2 + bodyRadius * 0.35, -bodyRadius * 0.6, 0);
        arm.castShadow = true;
        cameraGroup.add(arm);

        const mountPuck = new THREE.Mesh(new THREE.CylinderGeometry(bodyRadius * 0.55, bodyRadius * 0.6, 1.1 * cameraScale, 16), accentMaterial);
        mountPuck.position.set(-bodyLength / 2 + bodyRadius * 0.35, -bodyRadius * 1.05, 0);
        mountPuck.castShadow = true;
        cameraGroup.add(mountPuck);

        // Indicator light
        const lightGeometry = new THREE.SphereGeometry(1.2 * cameraScale, 8, 8);
        const lightMaterial = new THREE.MeshBasicMaterial({ color: cameraItem.color });
        const light = new THREE.Mesh(lightGeometry, lightMaterial);
        light.position.set(-bodyLength * 0.1, bodyRadius * 0.65, bodyRadius * 0.2);
        cameraGroup.add(light);

        // Position and rotate camera body
        // For a camera facing +X locally:
        // - Y rotation controls azimuth (horizontal direction)
        // - X rotation (on the group after Y rotation) controls pitch (tilt up/down)
        // - Y rotation controls azimuth (horizontal direction)
        // - X rotation (on the group after Y rotation) controls pitch (tilt up/down)
        cameraGroup.position.set(cameraPos.x, absHeight, cameraPos.y);
        // The lens points along local +X, so pitch is a rotation about local Z applied after the yaw.
        cameraGroup.rotation.order = 'YZX';
        cameraGroup.rotation.y = rotAngle;
        cameraGroup.rotation.z = pitchRad; // Pitch: positive = look up, negative = look down
        threeObjectCacheRef.current.set(cameraItem.id, cameraGroup); // Cache for position updates
        group.add(cameraGroup);

        // No pedestal/pole for the refined camera model



        updateCameraFrustum(
          cameraGroup,
          cameraItem,
          cameraPos,
          absHeight,
          pitchRad,
          rotAngle,
          hFov,
          range,
          state
        );




        // Camera label
        const camLabel = createTextSprite(cameraItem.label);
        if (camLabel) {
          camLabel.position.set(cameraPos.x, cameraHeight + 18, cameraPos.y);
          group.add(camLabel);
        }
      }

      // Images
      if (item.type === "image") {
        const img = item as ImageItem;
        const geometry = new THREE.PlaneGeometry(img.width, img.height);
        const material = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          roughness: 0.9
        });
        new THREE.TextureLoader().load(img.src, texture => {
          texture.colorSpace = THREE.SRGBColorSpace;
          texture.minFilter = THREE.LinearFilter;
          material.map = texture;
          material.needsUpdate = true;
          renderer.render(scene, state.camera);
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.x = -Math.PI / 2;
        mesh.position.set(img.x, 0.25, img.y);
        mesh.rotation.z = -THREE.MathUtils.degToRad(img.rotation);
        mesh.userData.itemId = img.id;
        threeObjectCacheRef.current.set(img.id, mesh); // Cache for position updates
        group.add(mesh);
      }

      // Labels
      if (item.type === "label") {
        const labelItem = item as LabelItem;
        const label = createTextSprite(labelItem.text);
        if (label) {
          label.position.set(labelItem.x, 8, labelItem.y);
          label.userData.itemId = labelItem.id;
          threeObjectCacheRef.current.set(labelItem.id, label); // Cache for position updates
          group.add(label);
        }
      }
    });

    // Update camera position from existing orbit state (preserve user's view)
    if (state.orbit) {
      const { azimuth, polar, distance } = state.orbit;
      const x = state.target.x + Math.cos(azimuth) * Math.cos(polar) * distance;
      const z = state.target.z + Math.sin(azimuth) * Math.cos(polar) * distance;
      const y = state.target.y + Math.sin(polar) * distance;
      state.camera.position.set(x, y, z);
      state.camera.lookAt(state.target);
    }

    renderer.render(scene, state.camera);

    // Update previous refs for next diff comparison
    syncSceneRefs();
  };

  const handleCaptureSnapshot = () => {
    const state = threeStateRef.current;
    if (!state) return;
    const dataUrl = state.renderer.domElement.toDataURL("image/png");
    const createdAt = new Date().toLocaleString();
    setSnapshots(prev => [{ id: generateId(), dataUrl, createdAt }, ...prev]);
  };

  const handleExportSnapshot = (dataUrl: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExportCurrent3d = () => {
    const state = threeStateRef.current;
    if (!state) return;
    const dataUrl = state.renderer.domElement.toDataURL("image/png");
    handleExportSnapshot(dataUrl, "security_plan_3d.png");
  };

  const handleReset3dView = () => {
    const state = threeStateRef.current;
    if (!state) return;
    state.zoom = 1;
    state.target.set(canvasSize.width / 2, 0, canvasSize.height / 2);
    if (state.orbit) {
      state.orbit.azimuth = Math.PI / 4;
      state.orbit.polar = Math.PI / 4;
      state.orbit.distance = Math.max(canvasSize.width, canvasSize.height) * 0.9;
      const { azimuth, polar, distance } = state.orbit;
      const x = state.target.x + Math.cos(azimuth) * Math.cos(polar) * distance;
      const z = state.target.z + Math.sin(azimuth) * Math.cos(polar) * distance;
      const y = state.target.y + Math.sin(polar) * distance;
      state.camera.position.set(x, y, z);
    }
    state.camera.zoom = state.zoom;
    state.camera.updateProjectionMatrix();
    state.camera.lookAt(state.target);
    state.renderer.render(state.scene, state.camera);
  };

  // A copy offset from the original. Building-mounted cameras become free-standing so the copy
  // doesn't sit exactly on top of the original; names get a "copy" suffix.
  const pastedCopy = (item: CanvasItem): CanvasItem => {
    const base = item.type === "camera" ? getCameraPlanPosition(item as CameraItem) : { x: item.x, y: item.y };
    const copy: any = { ...structuredClone(item), id: generateId(), x: base.x + 15, y: base.y + 15 };
    if (copy.type === "camera") {
      copy.mount = { ...(copy.mount ?? {}), type: "free", buildingId: undefined };
      copy.label = `${copy.label} copy`;
    }
    if (copy.type === "building") copy.importSource = undefined;
    return copy as CanvasItem;
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.tagName === "SELECT" || target.isContentEditable)) return;
      const mod = event.ctrlKey || event.metaKey; // Cmd on Mac

      // Single-key tools (shown in the toolbar tooltips)
      if (!mod && !event.altKey) {
        const toolKeys: Record<string, ToolMode> = { v: "select", c: "add-camera", b: "add-building", t: "add-tree", p: "add-parking", l: "add-label" };
        const tool = toolKeys[event.key.toLowerCase()];
        if (tool) {
          event.preventDefault();
          setMode(prev => (prev === tool && tool !== "select" ? "select" : tool));
          return;
        }
        if (event.key === "2") { setViewMode("plan"); return; }
        if (event.key === "3") { setViewMode("iso3d"); return; }
        // Nudge the selection with the arrow keys (Shift = 10 ft)
        if (selectedId && event.key.startsWith("Arrow")) {
          const item = items.find(i => i.id === selectedId);
          if (item && !(item.type === "camera" && (item as CameraItem).mount?.type === "building")) {
            event.preventDefault();
            const step = event.shiftKey ? 10 : 1;
            const dx = event.key === "ArrowLeft" ? -step : event.key === "ArrowRight" ? step : 0;
            const dy = event.key === "ArrowUp" ? -step : event.key === "ArrowDown" ? step : 0;
            const nextItems = items.map(i => (i.id === selectedId ? { ...i, x: i.x + dx, y: i.y + dy } : i));
            setItems(nextItems);
            saveHistory(nextItems);
            return;
          }
        }
      }

      if (event.key === " ") {
        setIsSpacePressed(true);
        isSpacePressedRef.current = true;
      }

      if ((event.key === "Delete" || event.key === "Backspace") && selectedId) {
        event.preventDefault();
        deleteItem(selectedId);
        setTimeout(() => saveHistory(), 50);
      }

      // Undo / Redo
      if (mod) {
        const key = event.key.toLowerCase();
        if (key === "z") {
          event.preventDefault();
          if (event.shiftKey) {
            handleRedo();
          } else {
            handleUndo();
          }
        }
        if (key === "y") {
          event.preventDefault();
          handleRedo();
        }
        if (key === "s") {
          event.preventDefault();
          handleSaveProject();
        }
        if (key === "g") {
          event.preventDefault();
          setShowGrid(prev => !prev);
        }

        // Duplicate (Ctrl/Cmd+D)
        if (key === "d" && selectedId) {
          const item = items.find(i => i.id === selectedId);
          if (item) {
            event.preventDefault();
            const copy = pastedCopy(item);
            const nextItems = [...items, copy];
            setItems(nextItems);
            setSelectedId(copy.id);
            saveHistory(nextItems);
          }
        }

        // Copy (Ctrl+C)
        if (key === "c") {
          if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") return;
          if (selectedId) {
            const item = items.find(i => i.id === selectedId);
            if (item) {
              setClipboard(item);
              event.preventDefault();
            }
          }
        }

        // Paste (Ctrl+V)
        if (key === "v") {
          if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") return;
          const cb = clipboardRef.current;
          if (cb) {
            const newItem = pastedCopy(cb);
            setItems(prev => [...prev, newItem]);
            setSelectedId(newItem.id);
            setTimeout(() => saveHistory(), 50);
            event.preventDefault();
          }
        }
      }

      if (event.key === "Escape") {
        setSelectedId(null);
        setMode("select");
        setVertexInsertMode(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === " ") {
        setIsSpacePressed(false);
        isSpacePressedRef.current = false;
      }
    };
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [items, selectedId, handleSaveProject, viewMode]);


  // Effect to handle environment background updates (HDRI / Panorama)
  useEffect(() => {
    if (!threeStateRef.current) return;
    const { scene, renderer, camera } = threeStateRef.current;

    if (sceneBackgroundImg) {
      new THREE.TextureLoader().load(sceneBackgroundImg, (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;

        // Always keep background dark/hidden as requested
        scene.background = new THREE.Color("#09090b");

        // Use image for lighting (Reflections) if it's a panorama
        if (backgroundMode === 'panorama') {
          texture.mapping = THREE.EquirectangularReflectionMapping;
          scene.environment = texture;
        } else {
          // Fallback to Studio Lighting for flat images
          const pmremGenerator = new THREE.PMREMGenerator(renderer);
          scene.environment = pmremGenerator.fromScene(new RoomEnvironment()).texture;
          pmremGenerator.dispose();
        }
        renderer.render(scene, camera);
      });
    } else {
      scene.background = new THREE.Color("#09090b");
      // Default PBR environment
      const pmremGenerator = new THREE.PMREMGenerator(renderer);
      scene.environment = pmremGenerator.fromScene(new RoomEnvironment()).texture;
      pmremGenerator.dispose();

      renderer.render(scene, camera);
    }
  }, [sceneBackgroundImg, backgroundMode]);


  // Refs for 3D interaction state - enhanced for "local drag" pattern
  // Refs for 3D interaction state - simplified "Hit Offset" pattern
  // offset: Vector from Hit Point to Object Center (Center = Hit + Offset)
  const threeDragStateRef = useRef<{
    isDragging: boolean;
    itemId: string | null;
    dragOffset: { x: number; z: number } | null;
    originalItemPos?: { x: number; y: number };
    interactionType?: "move" | "resize-height" | "move-label";
    startHeight?: number;
    startMouseY?: number;
    currentHeight?: number;
    dragStartWorld?: { x: number; z: number };
    startLabelOffset?: { x: number; y: number };
    currentLabelOffset?: { x: number; y: number };
  }>({ isDragging: false, itemId: null, dragOffset: null });

  // Refs to track current items and mode in 3D event handlers
  const itemsRef = projectRef("items");
  const modeRef = useRef(mode);
  const selectedIdRef = useRef(selectedId);

  useEffect(() => { modeRef.current = mode; }, [mode]);
  useEffect(() => { selectedIdRef.current = selectedId; }, [selectedId]);

  // Effect: Handle 3D Selection Highlight (Emissive Glow)
  useEffect(() => {
    const scene = threeStateRef.current?.scene;
    const cache = threeObjectCacheRef.current;
    if (!scene || !cache) return;

    // Helper to Apply Highlight
    const setHighlight = (obj: THREE.Object3D, active: boolean, id: string) => {
      // 1. Cleanup existing handles
      const existing = obj.getObjectByName("height-handle");
      if (existing) obj.remove(existing);

      // 2. Emissive Glow Logic
      obj.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          const materials = Array.isArray(child.material) ? child.material : [child.material];

          materials.forEach(mat => {
            if ('emissive' in mat) {
              if (!child.userData.originalEmissive) {
                child.userData.originalEmissive = mat.emissive.clone();
              }

              if (active) {
                mat.emissive.setHex(0x4444ff);
                mat.emissiveIntensity = 0.5;
              } else {
                if (child.userData.originalEmissive) {
                  mat.emissive.copy(child.userData.originalEmissive);
                  mat.emissiveIntensity = 1;
                } else {
                  mat.emissive.setHex(0x000000);
                }
              }
            }
          });
        }
      });

      // 3. Add Corner Handles for Height Adjustment
      if (active) {
        const item = items.find(i => i.id === id);
        if (item && item.type === "building") {
          createCornerHandles(obj, item as BuildingItem);
        }
      }
    };

    const createCornerHandles = (obj: THREE.Object3D, building: BuildingItem) => {
      const roof = obj.getObjectByName("building-roof") as THREE.Mesh;
      if (!roof) return;

      const points = building.points || [];
      if (points.length === 0) return; // Should have points if valid building

      // Clean old
      const oldGroup = roof.getObjectByName("corner-handles_group");
      if (oldGroup) roof.remove(oldGroup);

      const group = new THREE.Group();
      group.name = "corner-handles_group";

      points.forEach(p => {
        const geometry = new THREE.BoxGeometry(5, 5, 5);
        const material = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          toneMapped: false,
          depthTest: false,
          transparent: true,
          opacity: 0.9
        });
        const handle = new THREE.Mesh(geometry, material);
        // Position relative to Roof (Local Space where Y is up relative to Wall Geom, but Roof Geom is Rotated)
        // Based on previous analysis: p.x, 0, p.y maps correctly to corner
        handle.position.set(p.x, 0, p.y);
        handle.name = "height-corner-handle";
        handle.userData.itemId = building.id;
        handle.userData.isHandle = true;
        group.add(handle);
      });

      roof.add(group);
    };

    // Update all objects
    cache.forEach((obj, id) => {
      setHighlight(obj, id === selectedId, id);
    });

    // Add Hover Cursor Logic
    const handlePointerMove = (e: PointerEvent) => {
      if (!threeStateRef.current) return;

      const rect = threeStateRef.current.renderer.domElement.getBoundingClientRect();
      const ndc = {
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: -((e.clientY - rect.top) / rect.height) * 2 + 1
      };

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(new THREE.Vector2(ndc.x, ndc.y), threeStateRef.current.camera);
      const intersects = raycaster.intersectObjects(threeStateRef.current.scene.children, true);

      // Check for Corner Handle
      const hitHandle = intersects.find(h => h.object.name === "height-corner-handle");

      if (hitHandle && hitHandle.object.userData.itemId === selectedId) {
        document.body.style.cursor = "ns-resize";
        // Optional: Highlight the specific handle?
        // hitHandle.object.material.color.set(0x...);
      } else {
        document.body.style.cursor = "default";
      }
    };
    threeStateRef.current?.renderer.domElement.addEventListener("pointermove", handlePointerMove);

    threeStateRef.current?.renderer.render(threeStateRef.current.scene, threeStateRef.current.camera);

    return () => {
      threeStateRef.current?.renderer.domElement.removeEventListener("pointermove", handlePointerMove);
    };
  }, [selectedId, items]); // Re-run when selection or items change

  useEffect(() => {
    // Terrain Interaction: Cursor & Hover
    if (!threeStateRef.current) return;
    const scene = threeStateRef.current.scene;
    const camera = threeStateRef.current.camera;
    const renderer = threeStateRef.current.renderer;

    // Brush outline is a line loop re-draped over the terrain on every move.
    const CURSOR_SEGMENTS = 72;
    let cursor = scene.getObjectByName("terrain-cursor") as THREE.LineLoop;
    if (!cursor) {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(CURSOR_SEGMENTS * 3), 3));
      const mat = new THREE.LineBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.95, depthTest: false });
      cursor = new THREE.LineLoop(geo, mat);
      cursor.name = "terrain-cursor";
      cursor.renderOrder = 10;
      cursor.frustumCulled = false;
      cursor.raycast = () => {};
      scene.add(cursor);
    }

    let cursorDot = scene.getObjectByName("terrain-cursor-dot") as THREE.Mesh;
    if (!cursorDot) {
      const geo = new THREE.CircleGeometry(0.18, 16);
      const mat = new THREE.MeshBasicMaterial({ color: 0xe2e8f0, transparent: true, opacity: 0.9, depthTest: false, side: THREE.DoubleSide });
      cursorDot = new THREE.Mesh(geo, mat);
      cursorDot.rotation.x = -Math.PI / 2;
      cursorDot.name = "terrain-cursor-dot";
      cursorDot.raycast = () => {};
      scene.add(cursorDot);
    }

    if (!isTerrainMode) {
      cursor.visible = false;
      cursorDot.visible = false;
      renderer.render(scene, camera);
      const onHover = (e: PointerEvent) => {
        const rect = renderer.domElement.getBoundingClientRect();
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(
          ((e.clientX - rect.left) / rect.width) * 2 - 1,
          -((e.clientY - rect.top) / rect.height) * 2 + 1
        ), camera);
        const terrain = scene.getObjectByName("terrain-mesh");
        const hit = terrain ? raycaster.intersectObject(terrain)[0] : undefined;
        if (hit) updateElevationReadout(hit.point.x, hit.point.z);
        else updateElevationReadout(-1, -1);
      };
      renderer.domElement.addEventListener("pointermove", onHover);
      return () => renderer.domElement.removeEventListener("pointermove", onHover);
    }

    cursor.visible = true;
    cursorDot.visible = true;

    const onMove = (e: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(new THREE.Vector2(x, y), camera);

      const terrain = scene.getObjectByName("terrain-mesh");
      if (terrain) {
        const hits = raycaster.intersectObject(terrain);
        if (hits.length > 0) {
          const pt = hits[0].point;
          const safeGrid = gridSize || 20;
          terrainHoverRef.current = { pointX: pt.x, pointZ: pt.z };
          const radius = getBrushRadius(safeGrid);
          const h = getGridHeight(pt.x, pt.z, terrainHeightsRef.current);

          const cursorMat = cursor.material as THREE.LineBasicMaterial;
          cursorMat.color.setHex(
            terrainTool === "sculpt" ? (e.shiftKey ? 0xef4444 : 0xf59e0b) : terrainTool === "smooth" ? 0x38bdf8 : 0x818cf8
          );
          const cursorPos = cursor.geometry.attributes.position as THREE.BufferAttribute;
          for (let i = 0; i < CURSOR_SEGMENTS; i++) {
            const a = (i / CURSOR_SEGMENTS) * Math.PI * 2;
            const cx = pt.x + Math.cos(a) * radius;
            const cz = pt.z + Math.sin(a) * radius;
            cursorPos.setXYZ(i, cx, getGridHeight(cx, cz, terrainHeightsRef.current) + 0.6, cz);
          }
          cursorPos.needsUpdate = true;
          cursorDot.scale.set(Math.max(1, radius / 20), Math.max(1, radius / 20), 1);
          cursorDot.position.set(pt.x, h + 0.6, pt.z);
          updateElevationReadout(pt.x, pt.z);

          renderer.render(scene, camera);
        }
      }
    };

    renderer.domElement.addEventListener("pointermove", onMove);
    return () => {
      renderer.domElement.removeEventListener("pointermove", onMove);
    };
  }, [isTerrainMode, gridSize, terrainHeights, terrainTool, terrainBrushSize, canvasSize.width, canvasSize.height]);

  useEffect(() => {
    if (!threeContainerRef.current || threeStateRef.current) return;
    const container = threeContainerRef.current;

    // Enhanced renderer with better quality settings
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      preserveDrawingBuffer: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // Scene setup with improved atmosphere
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#09090b");
    scene.fog = new THREE.Fog("#09090b", 200, 2000);

    // Orthographic camera for isometric-style view
    const camera = new THREE.OrthographicCamera(-500, 500, 500, -500, 0.1, 6000);
    const group = new THREE.Group();
    scene.add(group);

    // Raycaster for 3D selection and placement
    const raycaster = new THREE.Raycaster();

    // Improved lighting setup: Hemisphere for nice gradients + Strong Solar Directional Light
    const hemiLight = new THREE.HemisphereLight(0xddeeff, 0x202020, 0.6);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xfffee0, 2.0);
    dirLight.position.set(50, 100, 50);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    scene.add(dirLight);

    // Initial orbit state with good default viewing angle
    const orbit = {
      azimuth: Math.PI / 5,
      polar: Math.PI / 5,
      distance: Math.max(canvasSize.width, canvasSize.height) * 0.8
    };
    const state = {
      scene,
      camera,
      renderer,
      group,
      raycaster,
      target: new THREE.Vector3(canvasSize.width / 2, 0, canvasSize.height / 2),
      zoom: 1,
      size: { width: 1, height: 1 },
      orbit
    };
    threeStateRef.current = state;

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      state.size = { width, height };
      renderer.setSize(width, height);
      const aspect = width / height;
      const frustum = Math.max(canvasSize.width, canvasSize.height) * 0.7;
      camera.left = -frustum * aspect;
      camera.right = frustum * aspect;
      camera.top = frustum;
      camera.bottom = -frustum;
      camera.zoom = state.zoom;
      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
    };

    const updateCamera = () => {
      const { azimuth, polar, distance } = orbit;
      const x = state.target.x + Math.cos(azimuth) * Math.cos(polar) * distance;
      const z = state.target.z + Math.sin(azimuth) * Math.cos(polar) * distance;
      const y = state.target.y + Math.sin(polar) * distance;
      camera.position.set(x, y, z);
      camera.lookAt(state.target);
      renderer.render(scene, camera);
    };

    // Helper: Get normalized device coordinates from pointer event
    const getNDC = (event: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      return {
        x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
        y: -((event.clientY - rect.top) / rect.height) * 2 + 1
      };
    };

    // Helper: Cast ray to the terrain surface (falls back to the y=0 plane) and return world coords
    const raycastToGround = (ndc: { x: number; y: number }): { x: number; z: number } | null => {
      raycaster.setFromCamera(new THREE.Vector2(ndc.x, ndc.y), camera);
      const terrainMesh = group.getObjectByName("terrain-mesh");
      if (terrainMesh) {
        const terrainHits = raycaster.intersectObject(terrainMesh, false);
        if (terrainHits.length > 0) {
          return { x: terrainHits[0].point.x, z: terrainHits[0].point.z };
        }
      }
      const groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
      const intersection = new THREE.Vector3();
      const hit = raycaster.ray.intersectPlane(groundPlane, intersection);
      if (hit) {
        return { x: intersection.x, z: intersection.z };
      }
      return null;
    };

    // Helper: Find which item was clicked (if any)
    const findClickedItem = (ndc: { x: number; y: number }): string | null => {
      raycaster.setFromCamera(new THREE.Vector2(ndc.x, ndc.y), camera);
      const intersects = raycaster.intersectObjects(group.children, true);

      for (const hit of intersects) {
        // Traverse up to find parent with userData.itemId
        let obj: THREE.Object3D | null = hit.object;
        while (obj) {
          if (obj.userData?.itemId) {
            return obj.userData.itemId;
          }
          obj = obj.parent;
        }
      }
      return null;
    };

    const onPointerDown = (event: PointerEvent) => {
      const ndc = getNDC(event);
      const currentMode = modeRef.current;
      const currentSelectedId = selectedIdRef.current;

      // Right-click = Rotate camera (always)
      if (event.button === 2 && !isSpacePressedRef.current) {
        event.preventDefault();
        const start = { x: event.clientX, y: event.clientY };
        const moveHandler = (moveEvent: PointerEvent) => {
          const dx = moveEvent.clientX - start.x;
          const dy = moveEvent.clientY - start.y;
          start.x = moveEvent.clientX;
          start.y = moveEvent.clientY;
          // INVERTED: Positive dx rotates azimuth in natural direction
          orbit.azimuth += dx * 0.005;
          orbit.polar = clamp(orbit.polar + dy * 0.005, 0.1, Math.PI / 2.1);
          updateCamera();
        };
        const upHandler = () => {
          window.removeEventListener("pointermove", moveHandler);
          window.removeEventListener("pointerup", upHandler);
        };
        window.addEventListener("pointermove", moveHandler);
        window.addEventListener("pointerup", upHandler);
        return;
      }

      // Middle-click or Space+click = Pan (Google Earth style - camera-relative)
      if (event.button === 1 || isSpacePressedRef.current) {
        event.preventDefault();
        const start = { x: event.clientX, y: event.clientY };
        const moveHandler = (moveEvent: PointerEvent) => {
          const dx = moveEvent.clientX - start.x;
          const dy = moveEvent.clientY - start.y;
          start.x = moveEvent.clientX;
          start.y = moveEvent.clientY;

          // Google Earth-style pan: move along camera's local right and forward vectors
          // projected onto the ground plane (Y=0)
          const panScale = (Math.max(canvasSize.width, canvasSize.height) * 0.7 / camera.zoom) / 400;

          // Get camera's right vector (for horizontal drag)
          const right = new THREE.Vector3();
          camera.getWorldDirection(new THREE.Vector3());
          right.setFromMatrixColumn(camera.matrixWorld, 0); // X axis = right
          right.y = 0; // Project onto ground plane
          right.normalize();

          // Get camera's forward vector projected onto ground (for vertical drag)
          const forward = new THREE.Vector3();
          camera.getWorldDirection(forward);
          forward.y = 0; // Project onto ground plane
          forward.normalize();

          // Apply movement: world follows mouse (grab-and-drag)
          state.target.x += -right.x * dx * panScale + forward.x * dy * panScale;
          state.target.z += -right.z * dx * panScale + forward.z * dy * panScale;

          updateCamera();
        };
        const upHandler = () => {
          window.removeEventListener("pointermove", moveHandler);
          window.removeEventListener("pointerup", upHandler);
        };
        window.addEventListener("pointermove", moveHandler);
        window.addEventListener("pointerup", upHandler);
        return;
      }

      // Terrain Edit Mode (Brush-based sculpting)
      if (isTerrainModeRef.current) {
        if (event.button !== 0) return;
        event.preventDefault();
        raycaster.setFromCamera(new THREE.Vector2(ndc.x, ndc.y), camera);
        const terrain = group.getObjectByName("terrain-mesh");
        if (terrain) {
          const hits = raycaster.intersectObject(terrain);
          if (hits.length > 0) {
            const pt = hits[0].point;
            const tool = terrainToolRef.current;
            const direction: 1 | -1 = tool === "sculpt" && event.shiftKey ? -1 : 1;

            if (tool === "flatten" && terrainFlattenSampleRef.current) {
              const target = getGridHeight(pt.x, pt.z);
              setTerrainFlattenTarget(target);
              terrainFlattenTargetRef.current = target;
            }

            const startTime = performance.now();
            terrainStrokeRef.current = {
              active: true,
              tool,
              direction,
              lastTime: startTime
            };

            const applyAtPoint = (p: THREE.Vector3, now: number) => {
              if (!terrainStrokeRef.current) return;
              const last = terrainStrokeRef.current.lastTime;
              const dt = Math.min((now - last) / 1000, 0.05);
              terrainStrokeRef.current.lastTime = now;
              applyBrushStroke(p.x, p.z, tool, direction, dt || 0.016);
              terrainHoverRef.current = { pointX: p.x, pointZ: p.z };
            };

            applyAtPoint(pt, startTime);
            let strokePoint = pt.clone();
            // Keep applying while held so the brush works without constant mouse movement.
            let strokeFrame = 0;
            const strokeTick = () => {
              applyAtPoint(strokePoint, performance.now());
              strokeFrame = window.requestAnimationFrame(strokeTick);
            };
            strokeFrame = window.requestAnimationFrame(strokeTick);

            const moveHandler = (moveEvent: PointerEvent) => {
              const moveNdc = getNDC(moveEvent);
              raycaster.setFromCamera(new THREE.Vector2(moveNdc.x, moveNdc.y), camera);
              const moveHits = raycaster.intersectObject(terrain);
              if (moveHits.length > 0) {
                strokePoint = moveHits[0].point.clone();
              }
            };

            const upHandler = () => {
              window.cancelAnimationFrame(strokeFrame);
              if (terrainStrokeRef.current?.active) {
                saveHistory(undefined, terrainHeightsRef.current);
              }
              terrainStrokeRef.current = null;
              window.removeEventListener("pointermove", moveHandler);
              window.removeEventListener("pointerup", upHandler);
            };

            window.addEventListener("pointermove", moveHandler);
            window.addEventListener("pointerup", upHandler);
            event.stopPropagation();
            return;
          }
        }
        return;
      } else {
        // Normal mode (Selection check)
        // Only check selection if NOT terrain mode
      }

      // Left-click handling
      if (event.button === 0) {
        event.preventDefault();

        // Check if we're in an "add" mode
        if (currentMode !== "select") {
          // Place new item at ground position
          const groundPos = raycastToGround(ndc);
          if (groundPos) {
            // Create synthetic event-like object for handleAddItem
            // Since handleAddItem expects a React.MouseEvent with specific calculations,
            // we'll directly create items here for 3D placement
            const snapSize = gridSizeRef.current || 20;
            const snapEnabled = snapToGridRef.current;
            const x = snapEnabled ? Math.round(groundPos.x / snapSize) * snapSize : groundPos.x;
            const y = snapEnabled ? Math.round(groundPos.z / snapSize) * snapSize : groundPos.z; // z in 3D maps to y in 2D

            const common = {
              id: generateId(),
              x,
              y,
              rotation: 0
            };

            let newItem: CanvasItem | null = null;

            switch (currentMode) {
              case "add-camera":
                newItem = {
                  ...common,
                  type: "camera",
                  rotation: 45,
                  label: `Camera ${itemsRef.current.filter(i => i.type === "camera").length + 1}`,
                  description: "",
                  fov: DEFAULT_CAMERA_HFOV,
                  hFov: DEFAULT_CAMERA_HFOV,
                  vFov: vFovFromH(DEFAULT_CAMERA_HFOV, 16 / 9),
                  pitch: DEFAULT_CAMERA_PITCH,
                  height: DEFAULT_CAMERA_HEIGHT_FT,
                  aspect: 16 / 9,
                  mount: { type: "free", edgeT: 0.5, height: DEFAULT_CAMERA_HEIGHT_FT },
                  range: DEFAULT_CAMERA_RANGE_FT,
                  color: COLORS.camera[itemsRef.current.filter(i => i.type === "camera").length % COLORS.camera.length],
                  connectorDashSize: 3
                } as CameraItem;
                break;
              case "add-building":
                newItem = {
                  ...common,
                  type: "building",
                  width: DEFAULT_BUILDING.width,
                  height: DEFAULT_BUILDING.depth,
                  wallHeight: DEFAULT_BUILDING.wallHeight,
                  label: "Building",
                  color: COLORS.building[0],
                  points: rectanglePoints(DEFAULT_BUILDING.width, DEFAULT_BUILDING.depth)
                } as BuildingItem;
                break;
              case "add-tree":
                newItem = {
                  ...common,
                  type: "tree",
                  radius: 25,
                  color: COLORS.tree[0]
                } as TreeItem;
                break;
              case "add-parking":
                newItem = {
                  ...common,
                  type: "parking",
                  width: 24,
                  height: 48,
                  color: COLORS.parking[0],
                  vehicleHeight: 14
                } as ParkingItem;
                break;
              case "add-label":
                newItem = {
                  ...common,
                  type: "label",
                  text: "Label",
                  fontSize: 14,
                  color: COLORS.label[0]
                } as LabelItem;
                break;
            }

            if (newItem) {
              setItems(prev => [...prev, newItem!]);
              setSelectedId(newItem.id);
              setMode("select");
              setTimeout(() => saveHistory(), 50);
            }
          }
          return;
        }

        // Select mode: Check for object click or start dragging
        const clickedItemId = findClickedItem(ndc);

        if (clickedItemId) {
          setSelectedId(clickedItemId);

          // Get the clicked item's current position
          const clickedItem = itemsRef.current.find(i => i.id === clickedItemId);

          // Check for Corner Handle Interaction (Height Resize)
          let isResizingHeight = false;
          let isLabelDrag = false;
          raycaster.setFromCamera(new THREE.Vector2(ndc.x, ndc.y), camera);
          const intersects = raycaster.intersectObjects(group.children, true);
          const hit = intersects.find(h => {
            return h.object.name === "height-corner-handle" && h.object.userData.itemId === clickedItemId;
          });
          if (hit) {
            isResizingHeight = true;
          }
          const labelHit = intersects.find(h => {
            return h.object.userData?.isLabel && h.object.userData?.itemId === clickedItemId;
          });
          if (labelHit) {
            isLabelDrag = true;
          }

          const groundPos = raycastToGround(ndc);

          if (groundPos && clickedItem) {
            // "Hit Offset" Pattern
            threeDragStateRef.current = {
              isDragging: true,
              itemId: clickedItemId,
              interactionType: isResizingHeight ? "resize-height" : isLabelDrag ? "move-label" : "move",
              startHeight: (clickedItem as BuildingItem).wallHeight ?? 60,
              startMouseY: event.clientY,
              dragOffset: isLabelDrag
                ? null
                : {
                  x: clickedItem.x - groundPos.x,
                  z: clickedItem.y - groundPos.z
                },
              dragStartWorld: groundPos,
              startLabelOffset: (clickedItem as BuildingItem).labelOffset ?? { x: 0, y: 0 }
            };
          }

          const moveHandler = (moveEvent: PointerEvent) => {
            const dragState = threeDragStateRef.current;
            if (!dragState.isDragging || !dragState.itemId) return;

            // HANDLE RESIZE
            if (dragState.interactionType === "resize-height") {
              const dy = (dragState.startMouseY || 0) - moveEvent.clientY;
              const startH = dragState.startHeight || 60;
              // Min height 10
              const newH = Math.max(10, startH + dy);
              dragState.currentHeight = newH;

              const cachedObj = threeObjectCacheRef.current.get(dragState.itemId);
              if (cachedObj) {
                cachedObj.scale.y = newH / startH;
                // Also update handle visual if needed (Handle scales with parent, so valid)
                state.renderer.render(state.scene, state.camera);
              }
              return;
            }

            // HANDLE LABEL MOVE
            if (dragState.interactionType === "move-label") {
              const moveNdc = getNDC(moveEvent);
              const newGroundPos = raycastToGround(moveNdc);
              if (!newGroundPos || !dragState.dragStartWorld) return;

              const deltaWorld = {
                x: newGroundPos.x - dragState.dragStartWorld.x,
                y: newGroundPos.z - dragState.dragStartWorld.z
              };
              const building = itemsRef.current.find(i => i.id === dragState.itemId) as BuildingItem | undefined;
              if (!building) return;
              const localDelta = rotatePoint(deltaWorld, -building.rotation);
              const startOffset = dragState.startLabelOffset ?? { x: 0, y: 0 };
              const nextOffset = {
                x: startOffset.x + localDelta.x,
                y: startOffset.y + localDelta.y
              };
              dragState.currentLabelOffset = nextOffset;

              const cachedObj = threeObjectCacheRef.current.get(dragState.itemId);
              if (cachedObj) {
                const label = cachedObj.getObjectByName("building-label") as THREE.Sprite | null;
                if (label) {
                  const buildingHeight = building.wallHeight ?? 60;
                  label.position.set(nextOffset.x, buildingHeight + 15, nextOffset.y);
                }
                state.renderer.render(state.scene, state.camera);
              }
              return;
            }

            // HANDLE MOVE
            const moveNdc = getNDC(moveEvent);
            const newGroundPos = raycastToGround(moveNdc);
            if (!newGroundPos || !dragState.dragOffset) return;

            const rawX = newGroundPos.x + dragState.dragOffset.x;
            const rawY = newGroundPos.z + dragState.dragOffset.z;

            // Snap to grid (if enabled)
            const snapSize = gridSizeRef.current || 20;
            const snapEnabled = snapToGridRef.current;
            const newX = snapEnabled ? Math.round(rawX / snapSize) * snapSize : rawX;
            const newY = snapEnabled ? Math.round(rawY / snapSize) * snapSize : rawY;

            // Update Three.js mesh directly
            const cachedObj = threeObjectCacheRef.current.get(dragState.itemId);
            if (cachedObj) {
              const itemType = itemsRef.current.find(i => i.id === dragState.itemId)?.type;
              const terrainY = getGridHeight(newX, newY) + OBJECT_ELEVATION_OFFSET;

              if (itemType === "camera") {
                const item = itemsRef.current.find(i => i.id === dragState.itemId) as CameraItem | undefined;
                const camHeight = item?.mount?.height ?? item?.height ?? 10;
                const baseY = item && item.mount?.type === "building" ? getCameraBaseHeight({ ...item, x: newX, y: newY }) : terrainY;
                cachedObj.position.set(newX, baseY + camHeight, newY);
              } else if (itemType === "building") {
                const building = itemsRef.current.find(i => i.id === dragState.itemId) as BuildingItem | undefined;
                if (building) {
                  const nextBuilding = { ...building, x: newX, y: newY };
                  const baseH = getBuildingBaseHeight(nextBuilding);
                  cachedObj.position.set(newX, baseH, newY);
                } else {
                  cachedObj.position.set(newX, terrainY, newY);
                }
              } else if (itemType === "tree" || itemType === "parking") {
                cachedObj.position.set(newX, terrainY, newY);
              } else if (itemType === "image") {
                cachedObj.position.set(newX, terrainY + 0.25, newY);
              } else if (itemType === "label") {
                cachedObj.position.set(newX, terrainY + 8, newY);
              }

              state.renderer.render(state.scene, state.camera);
            }
          };

          const upHandler = () => {
            const dragState = threeDragStateRef.current;

            if (dragState.isDragging && dragState.itemId) {
              // Commit changes
              if (dragState.interactionType === "resize-height" && dragState.currentHeight !== undefined) {
                updateItem(dragState.itemId, { wallHeight: dragState.currentHeight });
                setTimeout(() => saveHistory(), 50);
              } else if (dragState.interactionType === "move-label" && dragState.currentLabelOffset) {
                updateItem(dragState.itemId, { labelOffset: dragState.currentLabelOffset });
                setTimeout(() => saveHistory(), 50);
              } else if (dragState.interactionType !== "resize-height") {
                // Commit Position
                const cachedObj = threeObjectCacheRef.current.get(dragState.itemId);
                if (cachedObj) {
                  const finalX = cachedObj.position.x;
                  const finalY = cachedObj.position.z;
                  const dragItemId = dragState.itemId;
                  setItems(prev => prev.map(item => {
                    if (item.id !== dragItemId) return item;
                    if (item.type === "camera") {
                      // Cameras re-attach to a wall if dropped next to one; otherwise they become free-standing.
                      const cam = item as CameraItem;
                      const edge = findNearestBuildingEdge({ x: finalX, y: finalY }, prev);
                      if (edge && edge.distance < CAMERA_WALL_SNAP_FT) {
                        const building = prev.find(b => b.id === edge.buildingId) as BuildingItem | undefined;
                        const wasMounted = cam.mount?.type === "building";
                        const height = wasMounted ? cam.mount?.height ?? mountHeightForBuilding(building) : mountHeightForBuilding(building);
                        return {
                          ...cam,
                          x: edge.point.x,
                          y: edge.point.y,
                          rotation: wasMounted && cam.mount?.buildingId === edge.buildingId ? cam.rotation : edge.rotation,
                          mount: { type: "building", buildingId: edge.buildingId, edgeIndex: edge.edgeIndex, edgeT: edge.edgeT, height },
                          height
                        } as CameraItem;
                      }
                      const height = cam.mount?.type === "building" ? DEFAULT_CAMERA_HEIGHT_FT : cam.mount?.height ?? cam.height ?? DEFAULT_CAMERA_HEIGHT_FT;
                      return { ...cam, x: finalX, y: finalY, mount: { type: "free", edgeT: 0.5, height }, height } as CameraItem;
                    }
                    return { ...item, x: finalX, y: finalY };
                  }));
                  setTimeout(() => saveHistory(), 50);
                }
              }
            }

            // Reset drag state
            threeDragStateRef.current = {
              isDragging: false,
              itemId: null,
              dragOffset: null,
              interactionType: undefined,
              currentHeight: undefined,
              dragStartWorld: undefined,
              startLabelOffset: undefined,
              currentLabelOffset: undefined
            };
            window.removeEventListener("pointermove", moveHandler);
            window.removeEventListener("pointerup", upHandler);
          };

          window.addEventListener("pointermove", moveHandler);
          window.addEventListener("pointerup", upHandler);
        } else {
          // Clicked on empty space - deselect and start pan (Google Earth style)
          setSelectedId(null);

          const start = { x: event.clientX, y: event.clientY };
          const moveHandler = (moveEvent: PointerEvent) => {
            const dx = moveEvent.clientX - start.x;
            const dy = moveEvent.clientY - start.y;
            start.x = moveEvent.clientX;
            start.y = moveEvent.clientY;

            // Google Earth-style pan: move along camera's local right and forward vectors
            const panScale = (Math.max(canvasSize.width, canvasSize.height) * 0.7 / camera.zoom) / 400;

            const right = new THREE.Vector3();
            camera.getWorldDirection(new THREE.Vector3());
            right.setFromMatrixColumn(camera.matrixWorld, 0);
            right.y = 0;
            right.normalize();

            const forward = new THREE.Vector3();
            camera.getWorldDirection(forward);
            forward.y = 0;
            forward.normalize();

            // Horizontal: Subtract to fix inversion (Ground moves with Mouse)
            // Vertical: Add (Ground moves with Mouse - already correct)
            state.target.x += -right.x * dx * panScale + forward.x * dy * panScale;
            state.target.z += -right.z * dx * panScale + forward.z * dy * panScale;

            updateCamera();
          };
          const upHandler = () => {
            window.removeEventListener("pointermove", moveHandler);
            window.removeEventListener("pointerup", upHandler);
          };
          window.addEventListener("pointermove", moveHandler);
          window.addEventListener("pointerup", upHandler);
        }
      }
    };

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      // FIXED: Scroll up (negative deltaY) = zoom in (larger zoom value)
      const nextZoom = clamp(state.zoom * (event.deltaY < 0 ? 1.1 : 0.9), 0.1, 20.0);
      state.zoom = nextZoom;
      camera.zoom = state.zoom;
      camera.updateProjectionMatrix();
      updateCamera();
    };

    renderer.domElement.addEventListener("pointerdown", onPointerDown);
    renderer.domElement.addEventListener("wheel", onWheel, { passive: false });
    renderer.domElement.addEventListener("contextmenu", event => event.preventDefault());

    updateCamera();
    resize();
    window.addEventListener("resize", resize);

    return () => {
      renderer.domElement.removeEventListener("pointerdown", onPointerDown);
      renderer.domElement.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", resize);
      // Free everything on the GPU and release the WebGL context (browsers cap live contexts at ~16).
      const sceneToFree = threeStateRef.current?.scene;
      if (sceneToFree) {
        disposeObjectDeep(sceneToFree);
        if (sceneToFree.environment) sceneToFree.environment.dispose();
        if (sceneToFree.background instanceof THREE.Texture) sceneToFree.background.dispose();
      }
      renderer.dispose();
      renderer.forceContextLoss();
      container.removeChild(renderer.domElement);
      threeStateRef.current = null;
      // Clear object cache on cleanup
      threeObjectCacheRef.current.clear();
      prevItemsRef.current = [];
    };
  }, [canvasSize.height, canvasSize.width, viewMode]);

  useEffect(() => {
    if (viewMode !== "iso3d") return;
    rebuildThreeScene();
  }, [items, backgroundImg, bgSettings, canvasSize, gridSize, showGrid, viewMode, sceneBackgroundImg, backgroundMode, terrainHeights, buildingLabelDefaults, elevationOverlay]);

  useEffect(() => {
    if (viewMode !== "iso3d") return;
    const id = window.requestAnimationFrame(() => {
      updateThreeScenePositions();
      const state = threeStateRef.current;
      if (state) {
        state.renderer.render(state.scene, state.camera);
      }
    });
    return () => window.cancelAnimationFrame(id);
  }, [items, viewMode]);

  useEffect(() => {
    if (viewMode !== "iso3d") return;
    const id = window.requestAnimationFrame(() => {
      updateThreeScenePositions();
      const state = threeStateRef.current;
      if (state) {
        state.renderer.render(state.scene, state.camera);
      }
    });
    return () => window.cancelAnimationFrame(id);
  }, [frustumSettings, selectedId, viewMode]);

  useEffect(() => {
    if (viewMode !== "iso3d") return;
    const id = window.requestAnimationFrame(() => {
      if (!threeStateRef.current) return;
      if (threeObjectCacheRef.current.size === 0) {
        rebuildThreeScene();
      } else {
        updateThreeScenePositions();
        const state = threeStateRef.current;
        if (state) {
          state.renderer.render(state.scene, state.camera);
        }
      }
    });
    return () => window.cancelAnimationFrame(id);
  }, [viewMode, terrainHeights]);

  useEffect(() => {
    if (viewMode !== "plan") {
      setVertexInsertMode(false);
    }
  }, [viewMode]);

  useEffect(() => {
    return () => {
      const snapshot = cameraSnapshotRendererRef.current;
      if (snapshot?.renderer) {
        snapshot.renderer.dispose();
      }
      if (snapshot?.pmremGenerator) {
        snapshot.pmremGenerator.dispose();
      }
      if (snapshot?.envTexture) {
        snapshot.envTexture.dispose();
      }
      cameraSnapshotRendererRef.current = { renderer: null, pmremGenerator: null, envTexture: null, canvas: null };
    };
  }, []);

  // Preload background image for camera preview
  useEffect(() => {
    if (backgroundImg) {
      const img = new Image();
      img.src = backgroundImg;
      img.onload = () => {
        bgImageRef.current = img;
      };
    } else {
      bgImageRef.current = null;
    }
  }, [backgroundImg]);

  // Camera view preview: what the selected camera sees, rendered with the same shared renderer
  // as snapshots and the Monitor Wall (so all three match), throttled to one render per frame.
  useEffect(() => {
    if (!showCameraPreview || !cameraPreviewRef.current || !selectedId) return;
    const selectedItem = items.find(i => i.id === selectedId);
    const cam = selectedItem?.type === "camera" ? (selectedItem as CameraItem) : null;
    if (!cam) return;
    const frame = window.requestAnimationFrame(() => {
      const canvas = cameraPreviewRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      try {
        const view = renderCameraViewToCanvas(cam, Math.max(320, canvas.width));
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(view, 0, 0, canvas.width, canvas.height);
      } catch (err) {
        console.error("Camera preview failed", err);
      }
    });
    return () => window.cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId, items, showCameraPreview, bgSettings, canvasSize, sceneBackgroundImg, terrainHeights, gridSize, backgroundImg]);


  // --- Event Handlers ---

  const getSvgMousePosFor = (
    svgEl: SVGSVGElement | null,
    e: React.MouseEvent,
    pan = { x: 0, y: 0 },
    scale = 1
  ) => {
    if (!svgEl) return { x: 0, y: 0 };
    const CTM = svgEl.getScreenCTM();
    if (!CTM) return { x: 0, y: 0 };
    const rawX = (e.clientX - CTM.e) / CTM.a;
    const rawY = (e.clientY - CTM.f) / CTM.d;
    return {
      x: (rawX - pan.x) / scale,
      y: (rawY - pan.y) / scale
    };
  };

  const getSvgMousePos = (e: React.MouseEvent) =>
    getSvgMousePosFor(svgRef.current, e, panOffset, zoom);

  const getMiniSvgMousePos = (e: React.MouseEvent) =>
    getSvgMousePosFor(demMiniRef.current, e);

  const handleMouseDown = (e: React.MouseEvent, id: string, type: InteractionType = "move", variant?: string) => {
    if (mode !== "select") return;
    if (viewMode === "iso3d") return;
    if (e.altKey) return;
    e.stopPropagation();

    const item = items.find(i => i.id === id);
    if (!item) return;

    setSelectedId(id);
    const pos = getSvgMousePos(e);

    // Check for Edge Click on Building (Insert Vertex)
    if (type === "move" && selectedId === id && item.type === "building") {
      const building = item as BuildingItem;
      const worldPoints = getBuildingEdgePointsWorld(building);
      for (let i = 0; i < worldPoints.length; i++) {
        const a = worldPoints[i];
        const b = worldPoints[(i + 1) % worldPoints.length];
        const ab = { x: b.x - a.x, y: b.y - a.y };
        const ap = { x: pos.x - a.x, y: pos.y - a.y };
        const abLenSq = ab.x * ab.x + ab.y * ab.y || 1;
        const t = Math.max(0, Math.min(1, (ap.x * ab.x + ap.y * ab.y) / abLenSq));
        const proj = { x: a.x + ab.x * t, y: a.y + ab.y * t };
        const dist = Math.sqrt((pos.x - proj.x) ** 2 + (pos.y - proj.y) ** 2);

        if (dist < 8) {
          handleInsertBuildingVertexAtPoint(id, proj);
          setTimeout(() => saveHistory(), 50);
          return;
        }
      }
    }
    const basePos = item.type === "camera" ? getCameraPlanPosition(item as CameraItem) : { x: item.x, y: item.y };

    let startVal = { ...item } as any;
    if (type === "fov" && item.type === "camera") {
      const deltaX = pos.x - basePos.x;
      const deltaY = pos.y - basePos.y;
      const mouseAngle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
      const fovValue = item.hFov ?? item.fov;
      const handleAngle = item.rotation + (variant === "left" ? -fovValue / 2 : fovValue / 2);
      startVal = { ...item, fovHandleOffset: normalizeAngle(mouseAngle - handleAngle) };
    }

    setInteractionState({
      type,
      itemId: id,
      startMouse: pos,
      startVal,
      variant,
      snap: snapToGrid && !e.altKey
    });
  };
  const updateDemTransformDrag = (pos: { x: number; y: number }, snapRotation?: boolean) => {
    if (!demTransformDrag || !demPreview) return false;
    const start = demTransformDrag.startTransform;
    const dx = pos.x - demTransformDrag.startMouse.x;
    const dy = pos.y - demTransformDrag.startMouse.y;

    if (demTransformDrag.mode === "move") {
      setDemTransform({ ...start, x: start.x + dx, y: start.y + dy });
    } else if (demTransformDrag.mode === "scale") {
      const startDist = Math.hypot(demTransformDrag.startMouse.x - start.x, demTransformDrag.startMouse.y - start.y) || 1;
      const nextDist = Math.hypot(pos.x - start.x, pos.y - start.y);
      const nextScale = clamp(start.scale * (nextDist / startDist), 0.1, 50);
      setDemTransform({ ...start, scale: nextScale });
    } else if (demTransformDrag.mode === "rotate") {
      const startAngle = Math.atan2(demTransformDrag.startMouse.y - start.y, demTransformDrag.startMouse.x - start.x);
      const nextAngle = Math.atan2(pos.y - start.y, pos.x - start.x);
      const delta = ((nextAngle - startAngle) * 180) / Math.PI;
      const nextRotation = start.rotation + delta;
      const snapped = snapRotation ? Math.round(nextRotation / 5) * 5 : nextRotation;
      setDemTransform({ ...start, rotation: snapped });
    }
    return true;
  };

  const handleSvgMouseMove = (e: React.MouseEvent) => {
    {
      const hoverPos = getSvgMousePos(e);
      updateElevationReadout(hoverPos.x, hoverPos.y);
      updateCameraReadout(hoverPos.x, hoverPos.y);
      const brushCursor = planBrushCursorRef.current;
      if (brushCursor) {
        brushCursor.setAttribute("cx", `${hoverPos.x}`);
        brushCursor.setAttribute("cy", `${hoverPos.y}`);
      }
    }
    if (updateDemTransformDrag(getSvgMousePos(e), e.shiftKey)) return;
    // Handle camera placement preview
    if (mode === "add-camera" && viewMode === "plan") {
      const pos = getSvgMousePos(e);
      const edge = findNearestBuildingEdge(pos);
      if (edge && edge.distance < CAMERA_WALL_SNAP_FT) {
        setCameraPlacementPreview({
          buildingId: edge.buildingId,
          edgeIndex: edge.edgeIndex,
          edgeT: edge.edgeT,
          point: edge.point,
          rotation: edge.rotation
        });
      } else {
        setCameraPlacementPreview(null);
      }
    } else if (cameraPlacementPreview) {
      setCameraPlacementPreview(null);
    }

    if (isBackgroundDragging) {
      const pos = getSvgMousePos(e);
      setBgSettings({
        ...bgSettings,
        x: bgDragStart.bgX + (pos.x - bgDragStart.x),
        y: bgDragStart.bgY + (pos.y - bgDragStart.y)
      });
      return;
    }
    if (isPanning) {
      const dx = e.clientX - panStart.x;
      const dy = e.clientY - panStart.y;
      setPanOffset({ x: panStart.panX + dx, y: panStart.panY + dy });
      return;
    }
    if (!interactionState.itemId || !svgRef.current) return;

    const pos = getSvgMousePos(e);
    const item = items.find(i => i.id === interactionState.itemId);
    if (!item) return;
    const basePos = item.type === "camera" ? getCameraPlanPosition(item as CameraItem) : { x: item.x, y: item.y };

    if (interactionState.type === "move") {
      const dx = pos.x - interactionState.startMouse.x;
      const dy = pos.y - interactionState.startMouse.y;
      const nextX = interactionState.startVal.x + dx;
      const nextY = interactionState.startVal.y + dy;
      if (item.type === "camera" && item.mount?.type === "building" && item.mount.buildingId) {
        const building = getBuildingById(item.mount.buildingId);
        if (building) {
          const worldPoints = getBuildingEdgePointsWorld(building);
          if (worldPoints.length >= 2) {
            const edgeIndex = clamp(item.mount.edgeIndex ?? 0, 0, worldPoints.length - 1);
            const nextIndex = (edgeIndex + 1) % worldPoints.length;
            const a = worldPoints[edgeIndex];
            const b = worldPoints[nextIndex];
            const ab = { x: b.x - a.x, y: b.y - a.y };
            const ap = { x: nextX - a.x, y: nextY - a.y };
            const abLenSq = ab.x * ab.x + ab.y * ab.y || 1;
            let t = (ap.x * ab.x + ap.y * ab.y) / abLenSq;
            t = clamp(t, 0, 1);
            const proj = { x: a.x + ab.x * t, y: a.y + ab.y * t };
            updateItem(interactionState.itemId, {
              x: proj.x,
              y: proj.y,
              mount: { ...item.mount, edgeT: t }
            });
            return;
          }
        }
      }
      updateItem(interactionState.itemId, {
        x: snapValue(nextX, interactionState.snap),
        y: snapValue(nextY, interactionState.snap)
      });
    } else if (interactionState.type === "move-label" && item.type === "camera") {
      const dx = pos.x - interactionState.startMouse.x;
      const dy = pos.y - interactionState.startMouse.y;

      const startOffset = interactionState.startVal.labelOffset || defaultCameraLabelOffset(interactionState.startVal.rotation ?? 0);

      updateItem(interactionState.itemId, {
        labelOffset: {
          x: startOffset.x + dx,
          y: startOffset.y + dy
        }
      });
    } else if (interactionState.type === "move-label" && item.type === "building") {
      const dx = pos.x - interactionState.startMouse.x;
      const dy = pos.y - interactionState.startMouse.y;
      const localDelta = rotatePoint({ x: dx, y: dy }, -item.rotation);
      const startOffset = interactionState.startVal.labelOffset || { x: 0, y: 0 };
      updateItem(interactionState.itemId, {
        labelOffset: {
          x: startOffset.x + localDelta.x,
          y: startOffset.y + localDelta.y
        }
      });
    } else if (interactionState.type === "rotate") {
      const deltaX = pos.x - basePos.x;
      const deltaY = pos.y - basePos.y;
      const angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
      // A camera's aim handle sits in the direction it faces; other items' handles sit above them (-90°).
      let rotation = item.type === "camera" ? angle : angle + 90;
      if (e.shiftKey) rotation = Math.round(rotation / 15) * 15;
      rotation = ((rotation % 360) + 360) % 360;
      updateItem(interactionState.itemId, { rotation });
    } else if (interactionState.type === "fov" && item.type === "camera") {
      const deltaX = pos.x - basePos.x;
      const deltaY = pos.y - basePos.y;
      const mouseAngle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;

      const offset = interactionState.startVal?.fovHandleOffset ?? 0;
      const targetAngle = normalizeAngle(mouseAngle - offset);
      const diff = normalizeAngle(targetAngle - item.rotation);
      const effective = interactionState.variant === "left" ? -diff : diff;
      if (effective <= 0) return;

      const newFov = clamp(effective * 2, 10, 180);
      updateItem(interactionState.itemId, { fov: newFov, hFov: newFov });
    } else if (interactionState.type === "range" && item.type === "camera") {
      const deltaX = pos.x - basePos.x;
      const deltaY = pos.y - basePos.y;
      const dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      updateItem(interactionState.itemId, { range: Math.max(dist, 50) });
    } else if (interactionState.type === "vertex" && item.type === "building") {
      const local = toLocalPoint(pos, item);
      const points = getBuildingPoints(item);
      const index = typeof interactionState.variant === "string" ? parseInt(interactionState.variant, 10) : Number(interactionState.variant);
      if (!Number.isNaN(index) && points[index]) {
        const snapped = {
          x: snapValue(local.x, interactionState.snap),
          y: snapValue(local.y, interactionState.snap)
        };
        const next = points.map((point, i) => (i === index ? snapped : point));
        updateItem(interactionState.itemId, { points: next });
      }
    }
  };

  const endDemTransformDrag = () => {
    if (demTransformDrag) {
      if (demAutoApply) {
        saveHistory(undefined, terrainHeightsRef.current);
      }
      setDemTransformDrag(null);
    }
  };

  const handleDemMiniMouseMove = (e: React.MouseEvent) => {
    if (updateDemTransformDrag(getMiniSvgMousePos(e), e.shiftKey)) return;
  };

  const handleDemMiniMouseUp = () => {
    endDemTransformDrag();
  };

  const handleSvgMouseUp = () => {
    if (interactionState.type) {
      saveHistory();
    }
    endDemTransformDrag();
    setIsPanning(false);
    setIsBackgroundDragging(false);
    setInteractionState({ type: null, itemId: null, startMouse: { x: 0, y: 0 }, startVal: null, snap: false });
  };

  // Initial history save & setup
  useEffect(() => {
    THREE.Cache.enabled = true;
    // Seed after the autosaved project (loaded in an earlier mount effect) has rendered,
    // so the first Undo doesn't jump back to an empty canvas.
    resetHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSvgClick = (e: React.MouseEvent) => {
    if (viewMode === "iso3d") return;
    if (isTerrainMode) return;
    if (isPanning) return;
    if (vertexInsertMode && selectedId) {
      const selectedItem = items.find(item => item.id === selectedId);
      if (selectedItem && selectedItem.type === "building") {
        const pos = getSvgMousePos(e);
        handleInsertBuildingVertexAtPoint(selectedId, pos);
        setVertexInsertMode(false);
        return;
      }
    }
    if (e.target === svgRef.current || (e.target as Element).tagName === "image" || (e.target as Element).id === "grid-bg") {
      if (mode !== "select") {
        handleAddItem(e, mode);
      } else {
        setSelectedId(null);
      }
    }
  };

  // Terrain brush in the 2D plan view. Keeps applying while the button is held, even without moving.
  const handlePlanTerrainMouseDown = (e: React.MouseEvent) => {
    if (!isTerrainMode || viewMode !== "plan" || e.button !== 0 || e.altKey || isSpacePressed) return;
    e.preventDefault();
    e.stopPropagation();
    const pan = panOffset;
    const scale = zoom;
    const toWorld = (ev: { clientX: number; clientY: number }) =>
      getSvgMousePosFor(svgRef.current, ev as React.MouseEvent, pan, scale);
    const tool = terrainTool;
    const direction: 1 | -1 = tool === "sculpt" && e.shiftKey ? -1 : 1;
    let point = toWorld(e);
    if (tool === "flatten" && terrainFlattenSampleRef.current) {
      const target = getGridHeight(point.x, point.y);
      setTerrainFlattenTarget(target);
      terrainFlattenTargetRef.current = target;
    }
    let last = performance.now();
    let frame = 0;
    const tick = () => {
      const now = performance.now();
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      applyBrushStroke(point.x, point.y, tool, direction, dt || 0.016);
      frame = window.requestAnimationFrame(tick);
    };
    applyBrushStroke(point.x, point.y, tool, direction, 0.016);
    frame = window.requestAnimationFrame(tick);
    const move = (ev: MouseEvent) => {
      point = toWorld(ev);
      const brushCursor = planBrushCursorRef.current;
      if (brushCursor) {
        brushCursor.setAttribute("cx", `${point.x}`);
        brushCursor.setAttribute("cy", `${point.y}`);
      }
      updateElevationReadout(point.x, point.y);
    };
    const up = () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      saveHistory(undefined, terrainHeightsRef.current);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };

  const handleSvgMouseDown = (e: React.MouseEvent) => {
    if (backgroundImg && mapMoveMode) {
      e.preventDefault();
      const pos = getSvgMousePos(e);
      setIsBackgroundDragging(true);
      setBgDragStart({ x: pos.x, y: pos.y, bgX: bgSettings.x, bgY: bgSettings.y });
      return;
    }
    if (e.altKey) {
      e.preventDefault();
      setIsPanning(true);
      setPanStart({ x: e.clientX, y: e.clientY, panX: panOffset.x, panY: panOffset.y });
      return;
    }
    if (e.button === 1 || e.button === 2 || isSpacePressed || (e.button === 0 && mode === "select")) {
      e.preventDefault();
      setIsPanning(true);
      setPanStart({ x: e.clientX, y: e.clientY, panX: panOffset.x, panY: panOffset.y });
    }
  };

  const handleSvgWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (!svgRef.current) return;
    const CTM = svgRef.current.getScreenCTM();
    if (!CTM) return;

    const rawX = (e.clientX - CTM.e) / CTM.a;
    const rawY = (e.clientY - CTM.f) / CTM.d;
    const worldX = (rawX - panOffset.x) / zoom;
    const worldY = (rawY - panOffset.y) / zoom;

    const nextZoom = clamp(zoom * (e.deltaY > 0 ? 0.9 : 1.1), 0.3, 3.5);
    const nextPanX = rawX - worldX * nextZoom;
    const nextPanY = rawY - worldY * nextZoom;

    setZoom(nextZoom);
    setPanOffset({ x: nextPanX, y: nextPanY });
  };

  // --- Render Helpers ---

  // Changes whenever anything visible in a camera view changes (used to refresh Monitor Wall tiles).
  const nvrSceneKey = useMemo(
    () => JSON.stringify([
      items.filter(i => i.type !== "label").map(i => [i.id, i.x, i.y, i.rotation, (i as any).wallHeight, (i as any).points, (i as any).height, (i as any).radius]),
      Object.keys(terrainHeights).length, terrainStats.min, terrainStats.max,
      backgroundImg ? backgroundImg.length : 0, bgSettings, sceneBackgroundImg ? sceneBackgroundImg.length : 0, gridSize
    ]),
    [items, terrainHeights, terrainStats.min, terrainStats.max, backgroundImg, bgSettings, sceneBackgroundImg, gridSize]
  );

  const selectedItem = items.find(i => i.id === selectedId);
  const selectedCamera = selectedItem?.type === "camera" ? (selectedItem as CameraItem) : null;
  const selectedBuildingFont = selectedItem?.type === "building" ? getBuildingLabelFont(selectedItem as BuildingItem) : null;
  const cameraAspect = getCameraAspectValue(selectedCamera);
  const cameraPreviewWidth = 320;
  const cameraPreviewHeight = Math.round(cameraPreviewWidth / cameraAspect);
  const cameraHFov = selectedCamera ? selectedCamera.hFov ?? selectedCamera.fov : 109;
  const cameraVFov = selectedCamera ? selectedCamera.vFov ?? vFovFromH(cameraHFov, cameraAspect) : vFovFromH(109, 16 / 9);
  const cameraDiag = selectedCamera ? diagonalFromHv(cameraHFov, cameraVFov) : 90;
  const buildingOptions = items.filter(item => item.type === "building") as BuildingItem[];
  const mountType = selectedCamera?.mount?.type ?? "free";
  const mountBuilding = selectedCamera?.mount?.buildingId
    ? getBuildingById(selectedCamera.mount.buildingId)
    : buildingOptions[0];
  const mountEdgeCount = mountBuilding ? getBuildingPoints(mountBuilding).length : 0;
  const mountEdgeIndex = selectedCamera?.mount?.edgeIndex ?? 0;
  const mountEdgeT = selectedCamera?.mount?.edgeT ?? 0.5;
  const rightPanelOffset = isRightPanelOpen ? "lg:right-[22rem]" : "lg:right-4";
  const workspaceRightPadding = isRightPanelOpen ? "pr-80" : "pr-6";
  const workspaceLayoutClass = viewMode === "iso3d" || viewMode === "plan" || viewMode === "nvr"
    ? "items-stretch justify-stretch pt-16 pl-20 pb-4"
    : "items-center justify-center pt-20 pl-24 pb-6";
  const nvrGridWidth = Math.max(320, (nvrSize.width || canvasSize.width) - 32);
  const demOverlayTransform = demPreview ? {
    x: demTransform.x,
    y: demTransform.y,
    scale: demTransform.scale,
    rotation: demTransform.rotation
  } : null;
  const demAlignCursor = demAlignTool === "move"
    ? "move"
    : demAlignTool === "scale"
      ? "nwse-resize"
      : demAlignTool === "rotate"
        ? "crosshair"
        : "grab";
  const demAlignStroke = demAlignTool === "rotate"
    ? "#38bdf8"
    : demAlignTool === "scale"
      ? "#f59e0b"
      : demAlignTool === "pan"
        ? "#94a3b8"
        : "#10b981";
  const floatingPanelRight = isRightPanelOpen ? "right-96" : "right-4";
  const showProjectSettings = rightPanelMode === "project";
  const exportNoticeTone = exportNotice?.tone ?? "success";
  const exportNoticeClass =
    exportNoticeTone === "error"
      ? "border-red-500/40 bg-red-500/10 text-red-200"
      : exportNoticeTone === "info"
        ? "border-slate-500/40 bg-slate-500/10 text-slate-200"
        : "border-emerald-500/40 bg-emerald-500/10 text-emerald-200";

  return (
    <div className="relative h-screen bg-zinc-950 font-sans text-slate-200 overflow-hidden w-full selection:bg-indigo-500/30">
      {exportNotice && (
        <div className={`absolute top-20 right-4 z-50 px-4 py-2 rounded-full border text-sm font-semibold shadow-xl backdrop-blur ${exportNoticeClass} animate-in fade-in slide-in-from-top-2`}>
          {exportNotice.message}
        </div>
      )}
      {showExportPanel && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden text-slate-200">
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">Report</p>
                <h2 className="text-lg font-semibold text-slate-200">Export Report</h2>
              </div>
              <button onClick={() => setShowExportPanel(false)} className="p-2 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-5 py-4 space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase">Title</label>
                <input
                  type="text"
                  value={projectName}
                  onChange={e => setProjectName(e.target.value)}
                  className="w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"
                />
              </div>

              {/* Export List Section */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-slate-400 uppercase">
                    Report Views ({exportList.length} items)
                  </label>
                  {exportList.length > 0 && (
                    <button
                      onClick={() => setExportList([])}
                      className="text-xs text-red-500 hover:text-red-700"
                    >
                      Clear All
                    </button>
                  )}
                </div>
                {exportList.length === 0 ? (
                  <div className="bg-slate-50 rounded-lg p-4 text-center text-slate-400 text-sm">
                    <p>No views added yet</p>
                    <p className="text-xs mt-1">Use "Add to Report" buttons while working</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                    {exportList.map(item => (
                      <div key={item.id} className="relative group bg-zinc-800 rounded-lg overflow-hidden border border-white/5">
                        <div className="aspect-video w-full overflow-hidden">
                          <img
                            src={item.dataUrl}
                            alt={item.label}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <a
                            href={item.dataUrl}
                            download={`${item.label.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`}
                            className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors shadow-lg"
                            title="Download Image"
                            onClick={e => e.stopPropagation()}
                          >
                            <Download className="w-4 h-4" />
                          </a>
                          <button
                            onClick={() => setExportList(prev => prev.filter(i => i.id !== item.id))}
                            className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors shadow-lg"
                            title="Remove"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="p-2 bg-zinc-800 absolute bottom-0 inset-x-0">
                          <p className="text-[10px] text-slate-300 truncate font-medium">{item.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase">Scale</label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={exportOptions.scale}
                    onChange={e => setExportOptions({ ...exportOptions, scale: parseInt(e.target.value) })}
                    className="w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase">Padding</label>
                  <input
                    type="number"
                    min="0"
                    max="200"
                    value={exportOptions.padding}
                    onChange={e => setExportOptions({ ...exportOptions, padding: parseInt(e.target.value) })}
                    className="w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase">Include</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { key: "includeGrid", label: "Grid" },
                    { key: "includeLegend", label: "Legend" },
                    { key: "includeTitle", label: "Title Block" }
                  ].map(option => {
                    const active = exportOptions[option.key as keyof typeof exportOptions];
                    return (
                      <button
                        key={option.key}
                        onClick={() =>
                          setExportOptions({
                            ...exportOptions,
                            [option.key]: !active
                          })
                        }
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${active ? "bg-emerald-100 border-emerald-200 text-emerald-700" : "bg-white border-slate-200 text-slate-400"
                          }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>
              <p className="text-xs text-slate-400">Tip: Add views using "Add to Report" buttons, then export a client report.</p>
            </div>
            <div className="px-5 py-4 border-t border-white/10 bg-slate-50 flex flex-wrap justify-end gap-2">
              <button
                onClick={() => setShowExportPanel(false)}
                className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-800"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleExportPng();
                  setShowExportPanel(false);
                }}
                className="px-4 py-2 text-sm font-semibold bg-slate-600 hover:bg-slate-700 text-white rounded-lg"
              >
                Plan PNG
              </button>
              <button
                onClick={() => {
                  handleExportReportPng();
                  setShowExportPanel(false);
                }}
                disabled={exportList.length === 0}
                className={`px-3 py-2 text-sm font-semibold rounded-lg ${exportList.length === 0
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  }`}
              >
                Report PNG
              </button>
              <button
                onClick={() => {
                  handleExportReportPdf();
                  setShowExportPanel(false);
                }}
                disabled={exportList.length === 0}
                className={`px-3 py-2 text-sm font-semibold rounded-lg ${exportList.length === 0
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
              >
                Report PDF
              </button>
            </div>
          </div>
        </div>
      )}
      {showElevationDialog && (() => {
        const dims = siteBounds ? selectionFromBounds(siteBounds, "") : null;
        const loading = elevationStatus.state === "loading";
        const tooLarge = !!dims && (dims.widthFt > SITE_MAX_WIDTH_FT || dims.heightFt > SITE_MAX_WIDTH_FT);
        const step = !siteBounds ? (siteLocation ? 2 : 1) : 3;
        const stepClass = (n: number) => `flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold shrink-0 ${step > n ? "bg-emerald-500 text-white" : step === n ? "bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/50" : "bg-white/5 text-slate-500"}`;
        return (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-6"
            onMouseDown={(e) => { if (e.target === e.currentTarget && !loading) setShowElevationDialog(false); }}
          >
            <div className="w-full max-w-7xl h-full max-h-[900px] flex flex-col lg:flex-row rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl ring-1 ring-white/10 overflow-hidden">
              {/* Map */}
              <div className="relative flex-1 min-h-[320px]">
                <SitePickerMap
                  imagery={elevationImagery === "streets" ? "streets" : "satellite"}
                  view={pickerView}
                  selection={siteBounds}
                  drawing={pickerDrawing}
                  onDrawingChange={setPickerDrawing}
                  selectViewSignal={selectViewSignal}
                  candidates={importBuildings ? buildingCandidates : []}
                  onToggleCandidate={toggleBuildingCandidate}
                  onSelect={(bounds) => {
                    setSiteBounds(bounds);
                    const c = selectionFromBounds(bounds, "");
                    setSiteLocation(prev => ({ lat: c.center.lat, lon: c.center.lon, label: prev?.label || `${c.center.lat.toFixed(5)}, ${c.center.lon.toFixed(5)}` }));
                    if (elevationStatus.state !== "loading") setElevationStatus({ state: "idle", message: "" });
                  }}
                />

                <form
                  className="absolute top-3 left-14 right-3 z-[1000] flex gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (loading) return;
                    if (showPlaceSuggestions && activeSuggestion >= 0 && placeSuggestions[activeSuggestion]) {
                      searchSiteLocation(placeSuggestions[activeSuggestion]);
                    } else if (elevationQuery.trim()) {
                      searchSiteLocation();
                    }
                  }}
                >
                  <div className="relative flex-1 min-w-0">
                    <input
                      autoFocus
                      value={elevationQuery}
                      onChange={(e) => { setElevationQuery(e.target.value); setShowPlaceSuggestions(true); }}
                      onFocus={() => setShowPlaceSuggestions(true)}
                      onBlur={() => window.setTimeout(() => setShowPlaceSuggestions(false), 150)}
                      onKeyDown={(e) => {
                        if (e.key === "ArrowDown") { e.preventDefault(); setActiveSuggestion(i => Math.min(i + 1, placeSuggestions.length - 1)); }
                        else if (e.key === "ArrowUp") { e.preventDefault(); setActiveSuggestion(i => Math.max(i - 1, -1)); }
                        else if (e.key === "Escape") { setShowPlaceSuggestions(false); }
                      }}
                      placeholder="Search your address — e.g. 123 Main St, Springfield IL"
                      aria-label="Search address"
                      autoComplete="off"
                      className="w-full rounded-xl border border-white/10 bg-zinc-900/95 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
                    />
                    {showPlaceSuggestions && placeSuggestions.length > 0 && (
                      <ul className="absolute left-0 right-0 top-full mt-1 rounded-xl border border-white/10 bg-zinc-900 shadow-2xl overflow-hidden" role="listbox">
                        {placeSuggestions.map((sug, i) => (
                          <li key={`${sug.text}-${i}`}>
                            <button
                              type="button"
                              onMouseDown={(e) => { e.preventDefault(); searchSiteLocation(sug); }}
                              className={`w-full text-left px-4 py-2 flex items-start gap-2.5 ${i === activeSuggestion ? "bg-emerald-500/15" : "hover:bg-white/5"}`}
                            >
                              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-emerald-400" />
                              <span className="min-w-0">
                                <span className="block text-sm text-slate-100 truncate">{sug.text}</span>
                                {sug.detail && <span className="block text-[11px] text-slate-400 truncate">{sug.detail}</span>}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <button type="submit" disabled={loading || !elevationQuery.trim()} className="px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-sm font-semibold text-white shadow-lg">
                    Search
                  </button>
                  <button type="button" onClick={useMyLocation} title="Use my current location" className="px-3 rounded-xl border border-white/10 bg-zinc-900/95 hover:bg-zinc-800 text-slate-200 shadow-lg">
                    <MapPin className="w-4 h-4" />
                  </button>
                </form>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[1000] flex flex-col items-center gap-2">
                  <div className="rounded-full bg-zinc-900/90 px-3 py-1 text-[11px] text-slate-300 shadow pointer-events-none whitespace-nowrap">
                    {pickerDrawing
                      ? "Drag across the map to draw your area"
                      : siteBounds
                        ? "Drag the corners to resize · drag ✥ to move · click buildings to keep/remove"
                        : "Drag to move the map · scroll to zoom · Shift+drag to draw an area"}
                  </div>
                  <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-zinc-900/95 p-1 shadow-xl">
                    <button
                      type="button"
                      onClick={() => setPickerDrawing(v => !v)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold ${pickerDrawing ? "bg-amber-500 text-zinc-950" : "text-slate-200 hover:bg-white/10"}`}
                    >
                      <SquareDashed className="w-4 h-4" /> {pickerDrawing ? "Cancel drawing" : siteBounds ? "Draw new area" : "Draw area"}
                    </button>
                    <button
                      type="button"
                      onClick={() => { setPickerDrawing(false); setSelectViewSignal(n => n + 1); }}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 hover:bg-white/10"
                      title="Select the area you can see on the map"
                    >
                      <Maximize className="w-4 h-4" /> Select this view
                    </button>
                  </div>
                </div>
              </div>

              {/* Side panel */}
              <div className="w-full lg:w-80 shrink-0 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col max-h-[45%] lg:max-h-none">
                <div className="flex items-start justify-between px-5 pt-5 pb-3">
                  <div>
                    <h2 className="text-base font-semibold text-slate-100 flex items-center gap-2">
                      <Mountain className="w-5 h-5 text-emerald-400" /> Import Site
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">Satellite, elevation and 3D buildings in one click</p>
                  </div>
                  <button
                    onClick={() => setShowElevationDialog(false)}
                    disabled={loading}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/10 disabled:opacity-40"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar px-5 pb-5 space-y-5">
                  <ol className="space-y-2.5 text-xs">
                    <li className="flex items-center gap-2.5 text-slate-300"><span className={stepClass(1)}>1</span>Find your property (search or zoom)</li>
                    <li className="flex items-center gap-2.5 text-slate-300"><span className={stepClass(2)}>2</span>Draw or adjust the area around it</li>
                    <li className="flex items-center gap-2.5 text-slate-300"><span className={stepClass(3)}>3</span>Check the buildings, then Import</li>
                  </ol>

                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Selected area</div>
                    {dims ? (
                      <div className={`text-sm font-semibold ${tooLarge ? "text-red-300" : "text-emerald-200"}`}>
                        {Math.round(dims.widthFt).toLocaleString()} × {Math.round(dims.heightFt).toLocaleString()} ft
                        <span className="text-slate-400 font-normal"> · {Math.round(dims.widthFt / FEET_PER_METER)} × {Math.round(dims.heightFt / FEET_PER_METER)} m</span>
                      </div>
                    ) : (
                      <div className="text-sm text-slate-500">Nothing selected yet</div>
                    )}
                    {tooLarge && <div className="text-[10px] text-red-300 mt-1">Keep each side under {SITE_MAX_WIDTH_FT.toLocaleString()} ft for detailed results.</div>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-slate-400">Map image</label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {([
                        { id: "satellite", label: "Satellite" },
                        { id: "streets", label: "Street" },
                        { id: "keep", label: "Keep mine" }
                      ] as { id: MapImagerySource | "keep"; label: string }[]).map(opt => (
                        <button
                          type="button"
                          key={opt.id}
                          disabled={opt.id === "keep" && !backgroundImg}
                          onClick={() => setElevationImagery(opt.id)}
                          className={`py-2 rounded-lg text-xs font-semibold border transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${elevationImagery === opt.id
                            ? "border-emerald-400/50 bg-emerald-500/20 text-emerald-100"
                            : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                            }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                    <p className="text-[10px] text-slate-500">
                      {elevationImagery === "keep"
                        ? "Keeps your uploaded image. Draw the rectangle over exactly the area your image shows."
                        : backgroundImg
                          ? "Replaces your current base map with the sharpest imagery available here."
                          : "Downloads the sharpest imagery available for the area."}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center justify-between gap-2 cursor-pointer">
                      <span className="text-[10px] uppercase font-bold text-slate-400">3D buildings</span>
                      <span className="flex items-center gap-2 text-xs text-slate-300">
                        Include
                        <input type="checkbox" checked={importBuildings} onChange={e => setImportBuildings(e.target.checked)} className="accent-emerald-500" />
                      </span>
                    </label>
                    {importBuildings && (() => {
                      const mapped = buildingCandidates.filter(c => c.source === "osm");
                      const detected = buildingCandidates.filter(c => c.source === "detected");
                      const kept = buildingCandidates.filter(c => c.selected).length;
                      if (!siteBounds) {
                        return <p className="text-[11px] text-slate-500">Select an area and the buildings in it will appear on the map for you to confirm.</p>;
                      }
                      if (buildingScan.state === "loading") {
                        return <div className="flex items-center gap-2 text-xs text-slate-300"><LoaderCircle className="w-3.5 h-3.5 animate-spin" /> Looking for buildings…</div>;
                      }
                      if (buildingScan.state === "error") {
                        return <p className="text-[11px] text-amber-300/90">{buildingScan.message}</p>;
                      }
                      if (buildingCandidates.length === 0) {
                        return <p className="text-[11px] text-slate-400">No buildings found here. You can draw them over the satellite image after importing.</p>;
                      }
                      return (
                        <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 space-y-2">
                          <div className="text-sm font-semibold text-slate-100">{kept} of {buildingCandidates.length} buildings will be added</div>
                          <div className="space-y-1 text-[11px]">
                            {mapped.length > 0 && (
                              <div className="flex items-center gap-2 text-slate-300">
                                <span className="w-3 h-3 rounded-sm bg-green-500/60 border border-green-400" />
                                {mapped.length} mapped (OpenStreetMap)
                              </div>
                            )}
                            {detected.length > 0 && (
                              <div className="flex items-center gap-2 text-slate-300">
                                <span className="w-3 h-3 rounded-sm bg-amber-500/60 border border-amber-400" />
                                {detected.length} detected from aerial imagery — please check
                              </div>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-400">Click a building on the map to remove it (or add it back).</p>
                          <div className="flex gap-1.5">
                            <button type="button" onClick={() => setAllBuildingCandidates(true)} className="flex-1 py-1 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 text-[11px] font-semibold text-slate-200">Keep all</button>
                            <button type="button" onClick={() => setAllBuildingCandidates(false)} className="flex-1 py-1 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 text-[11px] font-semibold text-slate-200">Remove all</button>
                          </div>
                        </div>
                      );
                    })()}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-slate-400">Terrain height</label>
                    <div className="grid grid-cols-4 gap-1.5">
                      {[1, 2, 3, 5].map(v => (
                        <button
                          type="button"
                          key={v}
                          onClick={() => setElevationExaggeration(v)}
                          className={`py-1.5 rounded-lg text-xs font-semibold border ${elevationExaggeration === v
                            ? "border-emerald-400/50 bg-emerald-500/20 text-emerald-100"
                            : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                            }`}
                        >
                          {v === 1 ? "Real" : `${v}×`}
                        </button>
                      ))}
                    </div>
                    <p className="text-[10px] text-slate-500">Real is best for accurate camera views. Exaggerate to see gentle slopes.</p>
                  </div>

                  <details className="group rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5">
                    <summary className="cursor-pointer text-xs font-semibold text-slate-200 list-none flex items-center justify-between">
                      Prefer your own imagery or elevation files?
                      <span className="text-slate-500 group-open:rotate-90 transition-transform">›</span>
                    </summary>
                    <div className="mt-3 space-y-3 text-[11px] text-slate-400 leading-relaxed">
                      <div>
                        <div className="font-semibold text-slate-200 mb-1">Imagery from a screenshot (e.g. Google Maps)</div>
                        <ol className="list-decimal ml-4 space-y-0.5">
                          <li>Open <a className="text-emerald-300 underline" href="https://www.google.com/maps/@39.78,-89.68,16z/data=!3m1!1e3" target="_blank" rel="noreferrer">Google Maps satellite</a> or the <a className="text-emerald-300 underline" href="https://www.nconemap.gov/" target="_blank" rel="noreferrer">NC OneMap imagery viewer</a>, north up, zoomed on your property.</li>
                          <li>Screenshot just the map area and upload it:</li>
                        </ol>
                        <button type="button" onClick={() => fileInputRef.current?.click()} className="mt-1.5 w-full py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-slate-200 font-semibold">
                          Upload screenshot
                        </button>
                        <p className="mt-1.5">3. Choose <span className="text-slate-200">Keep mine</span>, then draw the rectangle here around the same area your screenshot shows. Elevation and buildings line up with it.</p>
                      </div>
                      <div className="pt-3 border-t border-white/10">
                        <div className="font-semibold text-slate-200 mb-1">Elevation from a lidar file (most detailed)</div>
                        <ol className="list-decimal ml-4 space-y-0.5">
                          <li>Import your site here first (so the app knows where it is).</li>
                          <li>Download a DEM GeoTIFF covering your property from <a className="text-emerald-300 underline" href="https://apps.nationalmap.gov/downloader/" target="_blank" rel="noreferrer">USGS National Map</a> (Elevation Products → 1 meter DEM) or <a className="text-emerald-300 underline" href="https://sdd.nc.gov/" target="_blank" rel="noreferrer">NC Spatial Data Download</a> (lidar DEM, NC State Plane).</li>
                          <li>Upload it. It snaps into place automatically:</li>
                        </ol>
                        <button type="button" onClick={() => demInputRef.current?.click()} className="mt-1.5 w-full py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-slate-200 font-semibold">
                          Upload elevation GeoTIFF
                        </button>
                      </div>
                    </div>
                  </details>

                  {elevationStatus.state !== "idle" && (
                    <div className={`rounded-lg border px-3 py-2 text-xs flex items-start gap-2 ${elevationStatus.state === "error"
                      ? "border-red-500/30 bg-red-500/10 text-red-200"
                      : elevationStatus.state === "done"
                        ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-100"
                        : "border-white/10 bg-white/5 text-slate-300"
                      }`}>
                      {loading && <LoaderCircle className="w-4 h-4 animate-spin shrink-0" />}
                      <span>{elevationStatus.message}</span>
                    </div>
                  )}
                </div>

                <div className="px-5 py-4 border-t border-white/10 space-y-2">
                  {elevationStatus.state === "done" ? (
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => { setShowElevationDialog(false); setViewMode("plan"); }}
                        className="py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-sm font-semibold text-slate-100"
                      >
                        Open in 2D
                      </button>
                      <button
                        type="button"
                        onClick={() => { setShowElevationDialog(false); setViewMode("iso3d"); }}
                        className="py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-sm font-semibold text-white"
                      >
                        Open in 3D
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={importSite}
                      disabled={loading || !siteBounds || tooLarge}
                      className="w-full py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-900/40 disabled:text-emerald-200/40 text-sm font-semibold text-white flex items-center justify-center gap-2"
                    >
                      {loading && <LoaderCircle className="w-4 h-4 animate-spin" />}
                      {siteBounds ? "Import Site" : "Select an area to import"}
                    </button>
                  )}
                  <p className="text-[10px] leading-relaxed text-slate-500">
                    Free public data, no account: imagery © Esri/Maxar or © OpenStreetMap; elevation from USGS 3DEP (US, high detail) or AWS Terrain Tiles; buildings © OpenStreetMap contributors. Maps are north-up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {showDemGuide && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden text-slate-200">
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">Terrain</p>
                <h2 className="text-lg font-semibold text-slate-200">Get Elevation (GeoTIFF DEM)</h2>
              </div>
              <button onClick={() => setShowDemGuide(false)} className="p-2 text-slate-400 hover:text-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-5 py-4 space-y-3 text-sm text-slate-300">
              <div className="text-xs text-slate-400">
                Use the USGS National Map Downloader to get a GeoTIFF DEM for your site.
              </div>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  Open the downloader:
                  <a
                    href="https://apps.nationalmap.gov/downloader/"
                    target="_blank"
                    rel="noreferrer"
                    className="ml-2 text-emerald-300 hover:text-emerald-200 underline"
                  >
                    apps.nationalmap.gov/downloader
                  </a>
                </li>
                <li>Search for your address or location in the top‑right search box.</li>
                <li>Use the draw tool to outline the area you want (box or polygon).</li>
                <li>In the left panel, open the Elevation dataset.</li>
                <li>Select a DEM product and make sure the format is GeoTIFF.</li>
                <li>Add to cart, then download the GeoTIFF.</li>
                <li>Back in the app, click <span className="text-slate-200">Upload TIF</span> in Terrain Tools.</li>
                <li>Use <span className="text-slate-200">DEM Align</span> to line up the DEM with your screenshot.</li>
              </ol>
              <div className="text-xs text-slate-500">
                Tip: If your download is too large, reduce the area or pick a lower‑resolution DEM.
              </div>
            </div>
            <div className="px-5 py-4 border-t border-white/10 bg-zinc-900/60 flex justify-end">
              <button
                onClick={() => setShowDemGuide(false)}
                className="px-4 py-2 text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {vertexInsertMode && viewMode === "plan" && selectedId && (
        <div className="absolute left-1/2 bottom-10 -translate-x-1/2 rounded-full bg-emerald-600/90 px-4 py-2 text-xs font-semibold text-white shadow-xl z-50 backdrop-blur-md">
          Click an edge to insert a vertex.
        </div>
      )}
      {/* --- Left Vertical Toolbar --- */}
      <div className="absolute left-4 top-4 bottom-4 w-14 flex flex-col items-center py-4 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 gap-3 ring-1 ring-white/5">
        <div className="flex flex-col gap-2 w-full px-2">
          {[
            { mode: "select", icon: Move, label: "Select / Move" },
            { mode: "add-camera", icon: Camera, label: "Place Camera" },
            { mode: "add-building", icon: Square, label: "Draw Building" },
            { mode: "add-tree", icon: Trees, label: "Place Tree" },
            { mode: "add-parking", icon: Car, label: "Vehicles" },
            { mode: "add-label", icon: Type, label: "Text" }
          ].map(tool => (
            <button
              key={tool.mode}
              onClick={() => mode === tool.mode ? setMode("select") : setMode(tool.mode as any)}
              title={tool.label}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${mode === tool.mode ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/40 scale-105" : "text-slate-400 hover:text-white hover:bg-white/10"
                }`}
            >
              <tool.icon className="w-5 h-5" />
            </button>
          ))}
        </div>

        <div className="w-8 h-px bg-white/10 my-1"></div>

        <div className="flex flex-col gap-2 w-full px-2">
          <button
            onClick={() => setViewMode(viewMode === "plan" ? "iso3d" : "plan")}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${viewMode === "iso3d" ? "bg-indigo-600 text-white shadow-lg" : "text-slate-400 hover:text-white hover:bg-white/10"}`}
            title="Switch 2D / 3D"
          >
            <Layers className="w-5 h-5" />
          </button>



          {(viewMode === "iso3d" || viewMode === "plan") && (
            <div className="relative group">
              <button
                onClick={() => setIsTerrainMode(!isTerrainMode)}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${isTerrainMode ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/40 scale-105" : "text-slate-400 hover:text-white hover:bg-white/10"}`}
                title={isTerrainMode ? "Exit Terrain Mode" : "Edit Terrain"}
              >
                <MapIcon className="w-5 h-5" />
              </button>

              {/* Terrain Controls Popup */}
              {isTerrainMode && (
                <div className="absolute left-14 top-1/2 -translate-y-1/2 mt-6 ml-4 w-64 max-h-[calc(100vh-8rem)] overflow-y-auto bg-zinc-900/95 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl z-50 animate-in fade-in slide-in-from-left-2 ring-1 ring-white/10 custom-scrollbar">
                  <h3 className="text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
                    <MapIcon className="w-4 h-4 text-emerald-500" />
                    Terrain Tools
                  </h3>

                  <div className="bg-white/5 rounded-lg p-3 border border-white/5 space-y-3">
                    <button
                      onClick={openElevationDialog}
                      className="w-full py-2.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 transition-colors"
                    >
                      {hasTerrain ? "Re-import Elevation" : "Get Real Elevation (1 click)"}
                    </button>
                    {siteLocation && (
                      <div className="text-[10px] text-slate-400 truncate" title={siteLocation.label}>
                        Site: {siteLocation.label}
                      </div>
                    )}

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Show Elevation</label>
                      <div className="grid grid-cols-3 gap-1">
                        {([
                          { id: "off", label: "Off" },
                          { id: "contours", label: "Contours" },
                          { id: "shaded", label: "Shaded" }
                        ] as { id: ElevationOverlayMode; label: string }[]).map(opt => (
                          <button
                            key={opt.id}
                            onClick={() => setElevationOverlay(opt.id)}
                            className={`py-1.5 rounded text-[10px] font-semibold border transition-colors ${elevationOverlay === opt.id
                              ? "border-emerald-400/40 bg-emerald-500/20 text-emerald-200"
                              : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                              }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {hasTerrain && (
                      <div className="flex items-center justify-between text-[10px] text-slate-400">
                        <span>Relief: {formatElevation(terrainStats.relief)} · contours every {contourInterval} ft</span>
                        <button onClick={clearTerrain} className="px-2 py-0.5 rounded border border-white/10 bg-white/5 text-slate-300 hover:bg-red-500/20 hover:text-red-200">
                          Clear
                        </button>
                      </div>
                    )}

                    <p className="text-[10px] text-slate-400 text-center leading-relaxed pt-2 border-t border-white/5">
                      Or sculpt by hand: click and hold to paint terrain (2D or 3D). Hold Shift to lower.
                    </p>

                    <details className="rounded-lg border border-white/10 bg-white/5 px-2 py-2">
                      <summary className="cursor-pointer text-[10px] font-semibold text-slate-300">
                        Use your own GeoTIFF instead (advanced)
                      </summary>
                      <div className="mt-2 space-y-2 text-[10px] text-slate-400">
                        <div><span className="font-semibold text-slate-300">Satellite image:</span> open your map source in a browser, take a screenshot, then click <span className="text-slate-200">Base Map</span> to upload.</div>
                        <div>
                          <span className="font-semibold text-slate-300">Elevation (GeoTIFF DEM):</span> download from USGS 3DEP (The National Map Downloader), then click <span className="text-slate-200">Upload TIF</span>.
                        </div>
                        <div>
                          <a
                            href="https://apps.nationalmap.gov/downloader/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-emerald-300 hover:text-emerald-200 underline"
                          >
                            apps.nationalmap.gov/downloader
                          </a>
                        </div>
                        <div>Use <span className="text-slate-200">DEM Align</span> to line up the elevation with your screenshot.</div>
                        <button
                          onClick={() => setShowDemGuide(true)}
                          className="w-full mt-1 px-2 py-1 rounded border border-white/10 bg-white/5 text-[10px] text-slate-200 hover:bg-white/10"
                        >
                          Open Step-by-Step Guide
                        </button>
                      </div>
                    </details>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Tool</label>
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          onClick={() => setTerrainTool("sculpt")}
                          className={`py-2 rounded text-[11px] font-semibold border transition-colors ${terrainTool === "sculpt"
                            ? "bg-amber-500/20 border-amber-400/40 text-amber-200"
                            : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                            }`}
                        >
                          Sculpt
                        </button>
                        <button
                          onClick={() => setTerrainTool("smooth")}
                          className={`py-2 rounded text-[11px] font-semibold border transition-colors ${terrainTool === "smooth"
                            ? "bg-sky-500/20 border-sky-400/40 text-sky-200"
                            : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                            }`}
                        >
                          Smooth
                        </button>
                        <button
                          onClick={() => setTerrainTool("flatten")}
                          className={`py-2 rounded text-[11px] font-semibold border transition-colors ${terrainTool === "flatten"
                            ? "bg-indigo-500/20 border-indigo-400/40 text-indigo-200"
                            : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                            }`}
                        >
                          Flatten
                        </button>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] uppercase font-bold text-slate-400">
                        <span>Brush Size</span>
                        <span className="text-emerald-400">{terrainBrushSize} tiles</span>
                      </div>
                      <input
                        type="range"
                        min={TERRAIN_BRUSH_MIN}
                        max={TERRAIN_BRUSH_MAX}
                        step={1}
                        value={terrainBrushSize}
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                        onChange={(e) => setTerrainBrushSize(parseInt(e.target.value))}
                        onPointerDown={(e) => e.stopPropagation()}
                      />
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] uppercase font-bold text-slate-400">
                        <span>Strength</span>
                        <span className="text-emerald-400">{terrainBrushStrength}</span>
                      </div>
                      <input
                        type="range"
                        min={5}
                        max={100}
                        step={5}
                        value={terrainBrushStrength}
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                        onChange={(e) => setTerrainBrushStrength(parseInt(e.target.value))}
                        onPointerDown={(e) => e.stopPropagation()}
                      />
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] uppercase font-bold text-slate-400">
                        <span>Falloff</span>
                        <span className="text-emerald-400">{terrainBrushFalloff.toFixed(1)}</span>
                      </div>
                      <input
                        type="range"
                        min={TERRAIN_FALLOFF_MIN}
                        max={TERRAIN_FALLOFF_MAX}
                        step={0.1}
                        value={terrainBrushFalloff}
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                        onChange={(e) => setTerrainBrushFalloff(parseFloat(e.target.value))}
                        onPointerDown={(e) => e.stopPropagation()}
                      />
                    </div>

                    {terrainTool === "flatten" && (
                      <div className="space-y-2 pt-2 border-t border-white/5">
                        <div className="flex items-center justify-between text-[10px] uppercase font-bold text-slate-400">
                          <span>Flatten Target</span>
                          <span className="text-emerald-400">{Math.round(terrainFlattenTarget)}</span>
                        </div>
                        <input
                          type="number"
                          value={Math.round(terrainFlattenTarget)}
                          onChange={(e) => setTerrainFlattenTarget(parseInt(e.target.value || "0", 10))}
                          className="w-full px-2 py-1 rounded bg-white/5 border border-white/10 text-xs text-slate-200"
                        />
                        <div className="grid grid-cols-3 gap-2">
                          <button
                            onClick={() => setTerrainFlattenSample(v => !v)}
                            className={`py-1.5 rounded text-[10px] font-semibold border transition-colors ${terrainFlattenSample
                              ? "bg-emerald-500/20 border-emerald-400/40 text-emerald-200"
                              : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                              }`}
                          >
                            {terrainFlattenSample ? "Sample On" : "Sample Off"}
                          </button>
                          <button
                            onClick={() => {
                              const hover = terrainHoverRef.current;
                              if (hover) setTerrainFlattenTarget(getGridHeight(hover.pointX, hover.pointZ));
                            }}
                            className="py-1.5 rounded text-[10px] font-semibold border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                          >
                            Pick
                          </button>
                          <button
                            onClick={() => setTerrainFlattenTarget(0)}
                            className="py-1.5 rounded text-[10px] font-semibold border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                          >
                            Zero
                          </button>
                        </div>
                      </div>
                    )}

                    <div className="space-y-2 pt-3 border-t border-white/5">
                      <div className="flex items-center justify-between text-[10px] uppercase font-bold text-slate-400">
                        <span>DEM Elevation</span>
                        <button
                          onClick={() => demInputRef.current?.click()}
                          className="px-2 py-1 rounded border border-white/10 bg-white/5 text-[10px] text-slate-200 hover:bg-white/10"
                        >
                          Upload TIF
                        </button>
                      </div>

                      {demData ? (
                        <div className="text-[10px] text-slate-400 space-y-1">
                          <div className="truncate">{demData.name}</div>
                          <div>{demData.width}x{demData.height} px • min {demData.min.toFixed(2)} max {demData.max.toFixed(2)}</div>
                        </div>
                      ) : (
                        <div className="text-[10px] text-slate-500">No DEM loaded.</div>
                      )}

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[10px] uppercase font-bold text-slate-400">
                          <span>Alignment</span>
                          <button
                            onClick={() => {
                              setDemAlignMode(v => !v);
                              setDemAlignTool("move");
                            }}
                            className="px-2 py-1 rounded border border-white/10 bg-white/5 text-[10px] text-slate-200 hover:bg-white/10"
                          >
                            {demAlignMode ? "Close Align" : "Open Align"}
                          </button>
                        </div>

                        {demAlignMode && (
                          <>
                            <div className="grid grid-cols-2 gap-2">
                              {([
                                { id: "move", label: "Move" },
                                { id: "scale", label: "Scale" },
                                { id: "rotate", label: "Rotate" },
                                { id: "pan", label: "Pan View" }
                              ] as { id: DemAlignTool; label: string }[]).map((tool) => (
                                <button
                                  key={tool.id}
                                  onClick={() => setDemAlignTool(tool.id)}
                                  className={`px-2 py-1 rounded text-[10px] font-semibold border ${demAlignTool === tool.id
                                    ? "border-emerald-400/40 bg-emerald-500/20 text-emerald-200"
                                    : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                                    }`}
                                >
                                  {tool.label}
                                </button>
                              ))}
                            </div>

                            <div className="space-y-1">
                              <div className="flex justify-between text-[10px] uppercase font-bold text-slate-400">
                                <span>Overlay Scale</span>
                                <span className="text-emerald-400">{Math.round(demTransform.scale * 100)}%</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <input
                                  type="range"
                                  min={0.1}
                                  max={10}
                                  step={0.05}
                                  value={demTransform.scale}
                                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                                  onChange={(e) => {
                                    const next = clamp(parseFloat(e.target.value), 0.1, 50);
                                    setDemTransform(prev => ({ ...prev, scale: next }));
                                  }}
                                  onPointerDown={(e) => e.stopPropagation()}
                                />
                                <input
                                  type="number"
                                  min={0.1}
                                  step={0.1}
                                  value={demTransform.scale}
                                  onChange={(e) => {
                                    const next = clamp(parseFloat(e.target.value || "1"), 0.1, 50);
                                    setDemTransform(prev => ({ ...prev, scale: next }));
                                  }}
                                  className="w-16 px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-slate-200"
                                />
                              </div>
                            </div>

                            <div className="flex items-center justify-between gap-2">
                              <button
                                onClick={() => {
                                  if (!demPreview) return;
                                  const baseW = backgroundImg ? bgSettings.width : canvasSize.width;
                                  const baseH = backgroundImg ? bgSettings.height : canvasSize.height;
                                  const scale = Math.min(baseW / demPreview.width, baseH / demPreview.height);
                                  const centerX = (backgroundImg ? bgSettings.x : 0) + baseW / 2;
                                  const centerY = (backgroundImg ? bgSettings.y : 0) + baseH / 2;
                                  setDemTransform({ x: centerX, y: centerY, scale, rotation: 0 });
                                }}
                                className="px-2 py-1 rounded border border-white/10 bg-white/5 text-[10px] text-slate-200 hover:bg-white/10"
                              >
                                Fit to Map
                              </button>
                              <button
                                onClick={() => {
                                  const centerX = canvasSize.width / 2;
                                  const centerY = canvasSize.height / 2;
                                  setDemTransform({ x: centerX, y: centerY, scale: 1, rotation: 0 });
                                }}
                                className="px-2 py-1 rounded border border-white/10 bg-white/5 text-[10px] text-slate-200 hover:bg-white/10"
                              >
                                Reset
                              </button>
                            </div>

                            <div className="text-[10px] text-slate-500">
                              Drag on the overlay with the selected tool. Alt pans the view. Shift snaps rotation. In 3D view, use the mini-map.
                            </div>
                          </>
                        )}
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] uppercase font-bold text-slate-400">
                          <span>Scale</span>
                          <span className="text-emerald-400">{demScale.toFixed(2)}</span>
                        </div>
                        <input
                          type="range"
                          min={0.1}
                          max={10}
                          step={0.1}
                          value={demScale}
                          className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                          onChange={(e) => setDemScale(parseFloat(e.target.value))}
                          onPointerDown={(e) => e.stopPropagation()}
                        />
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] uppercase font-bold text-slate-400">
                          <span>Offset</span>
                          <span className="text-emerald-400">{demOffset.toFixed(2)}</span>
                        </div>
                        <input
                          type="number"
                          value={demOffset}
                          onChange={(e) => setDemOffset(parseFloat(e.target.value || "0"))}
                          className="w-full px-2 py-1 rounded bg-white/5 border border-white/10 text-xs text-slate-200"
                        />
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] uppercase font-bold text-slate-400">
                          <span>Overlay Opacity</span>
                          <span className="text-emerald-400">{demOverlayOpacity.toFixed(2)}</span>
                        </div>
                        <input
                          type="range"
                          min={0.1}
                          max={1}
                          step={0.05}
                          value={demOverlayOpacity}
                          className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                          onChange={(e) => setDemOverlayOpacity(parseFloat(e.target.value))}
                          onPointerDown={(e) => e.stopPropagation()}
                        />
                      </div>

                      <div className="flex items-center justify-between gap-2">
                        <label className="flex items-center gap-2 text-[10px] text-slate-300">
                          <input
                            type="checkbox"
                            checked={demAutoApply}
                            onChange={(e) => setDemAutoApply(e.target.checked)}
                          />
                          Auto Apply
                        </label>
                      </div>

                      <div className="flex items-center justify-between gap-2">
                        <label className="flex items-center gap-2 text-[10px] text-slate-300">
                          <input
                            type="checkbox"
                            checked={demNormalize}
                            onChange={(e) => setDemNormalize(e.target.checked)}
                          />
                          Normalize (min = 0)
                        </label>
                        <button
                          onClick={() => applyDemToTerrain()}
                          disabled={!demData}
                          className={`px-2 py-1 rounded text-[10px] font-semibold border ${demData
                            ? "border-emerald-400/40 bg-emerald-500/20 text-emerald-200 hover:bg-emerald-500/30"
                            : "border-white/10 bg-white/5 text-slate-500 cursor-not-allowed"
                            }`}
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-auto flex flex-col gap-2 w-full px-2">
          <button onClick={handleUndo} disabled={!canUndo} className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all disabled:opacity-30 disabled:hover:bg-transparent" title="Undo (Ctrl/⌘+Z)">
            <Undo className="w-5 h-5" />
          </button>
          <button onClick={handleRedo} disabled={!canRedo} className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all disabled:opacity-30 disabled:hover:bg-transparent" title="Redo (Ctrl/⌘+Shift+Z)">
            <Redo className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* --- Top Header Actions --- */}
      <div className={`absolute top-4 left-24 right-4 ${rightPanelOffset} h-14 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl z-40 flex items-center px-4 justify-between ring-1 ring-white/5 transition-all duration-300`}>
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-bold text-slate-200 tracking-tight flex items-center gap-2 whitespace-nowrap min-w-0 max-w-[16rem] truncate" title={projectName}>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <Camera className="w-5 h-5" />
            </div>
            {projectName}
          </h1>
          <div className="h-6 w-px bg-white/10 mx-2"></div>

          <div className="flex items-center gap-1">
            <button onClick={handleNewProject} className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors" title="New Plan">
              <Plus className="w-5 h-5" />
            </button>
            <button onClick={() => projectInputRef.current?.click()} className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors" title="Open Plan">
              <FolderOpen className="w-5 h-5" />
            </button>
            <button onClick={handleSaveProject} className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors" title="Save Plan">
              <Save className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Inputs */}
          <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleBackgroundUpload} />
          <input type="file" ref={elementImageInputRef} className="hidden" accept="image/*" onChange={handleElementImageUpload} />
          <input type="file" ref={projectInputRef} className="hidden" accept=".json,.zip" onChange={handleLoadProject} />
          <input type="file" ref={bg3dInputRef} className="hidden" accept="image/*,.hdr" onChange={handlePanoramaUpload} />
          <input type="file" ref={demInputRef} className="hidden" accept=".tif,.tiff" onChange={handleDemUpload} />

          <div className="flex items-center rounded-lg border border-white/10 bg-white/5 p-0.5" role="tablist" aria-label="View">
            {([
              { id: "plan", label: "2D" },
              { id: "iso3d", label: "3D" }
            ] as { id: ViewMode; label: string }[]).map(v => (
              <button
                key={v.id}
                role="tab"
                aria-selected={viewMode === v.id}
                onClick={() => setViewMode(v.id)}
                className={`px-3 py-1 rounded-md text-sm font-bold transition-all ${viewMode === v.id ? "bg-indigo-600 text-white shadow" : "text-slate-400 hover:text-white"}`}
              >
                {v.label}
              </button>
            ))}
          </div>
          <button title="Monitor Wall" onClick={() => setViewMode(viewMode === "nvr" ? "plan" : "nvr")} className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-medium transition-all ${viewMode === "nvr" ? "bg-indigo-600 border-indigo-500 text-white shadow-lg" : "bg-white/5 hover:bg-white/10 border-white/5 text-slate-300"}`}>
            <LayoutGrid className="w-4 h-4" />
            <span className="hidden min-[1800px]:inline whitespace-nowrap">Monitor Wall</span>
          </button>
          <button
            onClick={() => {
              setRightPanelMode("project");
              setIsRightPanelOpen(true);
            }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium text-slate-300 transition-all"
          >
            <MapIcon className="w-4 h-4" />
            <span>Settings</span>
          </button>
          <button
            onClick={openElevationDialog}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 border border-emerald-400/30 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all"
            title="Download satellite imagery and real elevation for an address"
          >
            <Mountain className="w-4 h-4" />
            <span className="whitespace-nowrap">Import Site</span>
          </button>
          <button title="Upload Base Map image" onClick={() => fileInputRef.current?.click()} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium text-slate-300 transition-all">
            <Upload className="w-4 h-4" />
            <span className="hidden min-[1800px]:inline whitespace-nowrap">Base Map</span>
          </button>
          <button title="Add image overlay" onClick={() => elementImageInputRef.current?.click()} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium text-slate-300 transition-all">
            <ImageIcon className="w-4 h-4" />
            <span className="hidden min-[1800px]:inline whitespace-nowrap">Overlay</span>
          </button>

          <button onClick={addPlanToExportList} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium text-slate-300 transition-all" title="Add Current View to Report">
            <Plus className="w-4 h-4" />
            <span className="hidden min-[1800px]:inline whitespace-nowrap">Add to Report</span>
          </button>
          <button onClick={() => setShowExportPanel(true)} className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium shadow-lg shadow-indigo-500/20 transition-all">
            <Download className="w-4 h-4" />
            <span>Report</span>
          </button>
        </div>
      </div>

      {demAlignMode && viewMode !== "plan" && demPreview && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-zinc-900/90 text-slate-200 shadow-lg backdrop-blur">
          <span className="text-xs font-semibold">DEM Align is active. Editing uses the mini-map.</span>
          <button
            onClick={() => setViewMode("plan")}
            className="px-2 py-1 rounded-full text-[11px] font-semibold border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
          >
            Go to Plan View
          </button>
        </div>
      )}

      {demAlignMode && demPreview && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-zinc-900/90 shadow-xl backdrop-blur">
          <span className="text-xs font-semibold text-slate-300 tracking-wide">DEM Align ({viewMode === "plan" ? "Plan" : "3D"})</span>
          <div className="h-4 w-px bg-white/10" />
          {([
            { id: "move", label: "Move" },
            { id: "scale", label: "Scale" },
            { id: "rotate", label: "Rotate" },
            { id: "pan", label: "Pan View" }
          ] as { id: DemAlignTool; label: string }[]).map((tool) => (
            <button
              key={tool.id}
              onClick={() => setDemAlignTool(tool.id)}
              className={`px-2 py-1 rounded-full text-[11px] font-semibold border ${demAlignTool === tool.id
                ? "border-emerald-400/40 bg-emerald-500/20 text-emerald-200"
                : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
            >
              {tool.label}
            </button>
          ))}
          <div className="h-4 w-px bg-white/10" />
          <button
            onClick={() => {
              if (!demPreview) return;
              const baseW = backgroundImg ? bgSettings.width : canvasSize.width;
              const baseH = backgroundImg ? bgSettings.height : canvasSize.height;
              const scale = Math.min(baseW / demPreview.width, baseH / demPreview.height);
              const centerX = (backgroundImg ? bgSettings.x : 0) + baseW / 2;
              const centerY = (backgroundImg ? bgSettings.y : 0) + baseH / 2;
              setDemTransform({ x: centerX, y: centerY, scale, rotation: 0 });
            }}
            className="px-2 py-1 rounded-full text-[11px] font-semibold border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
          >
            Fit
          </button>
          <button
            onClick={() => {
              const centerX = canvasSize.width / 2;
              const centerY = canvasSize.height / 2;
              setDemTransform({ x: centerX, y: centerY, scale: 1, rotation: 0 });
            }}
            className="px-2 py-1 rounded-full text-[11px] font-semibold border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
          >
            Reset
          </button>
          <button
            onClick={() => setDemAlignMode(false)}
            className="px-2 py-1 rounded-full text-[11px] font-semibold border border-emerald-400/40 bg-emerald-500/20 text-emerald-200 hover:bg-emerald-500/30"
          >
            Done
          </button>
        </div>
      )}

      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* --- Main Workspace --- */}
        <div className={`w-full h-full relative overflow-auto bg-zinc-950 flex ${workspaceLayoutClass} ${workspaceRightPadding} custom-scrollbar`}>
          <div className={`shadow-2xl bg-zinc-900 relative ring-1 ring-white/10 rounded-lg overflow-hidden ${(viewMode === "iso3d" || viewMode === "plan" || viewMode === "nvr") ? "w-full h-full" : ""}`}>
            {viewMode === "plan" ? (
              <svg
                ref={svgRef}
                width="100%"
                height="100%"
                viewBox={`0 0 ${canvasSize.width} ${canvasSize.height}`}
                preserveAspectRatio="xMidYMid meet"
                className={`bg-white block ${mode === "select" && !isTerrainMode ? "cursor-default" : "cursor-crosshair"}`}
                onMouseMove={handleSvgMouseMove}
                onMouseUp={handleSvgMouseUp}
                onMouseDown={handleSvgMouseDown}
                onMouseDownCapture={handlePlanTerrainMouseDown}
                onMouseLeave={() => { updateElevationReadout(-1, -1); if (cameraReadoutRef.current) cameraReadoutRef.current.style.opacity = "0"; }}
                onWheel={handleSvgWheel}
                onClick={handleSvgClick}
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern id="blind-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <rect width="6" height="6" fill="rgba(239,68,68,0.08)" />
                    <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(239,68,68,0.45)" strokeWidth="2" />
                  </pattern>
                  <pattern id="smallGrid" width={gridSize} height={gridSize} patternUnits="userSpaceOnUse">
                    <path
                      d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`}
                      fill="none"
                      stroke="#333333"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>

                <g data-pan-zoom="true" transform={`translate(${panOffset.x}, ${panOffset.y}) scale(${zoom})`}>
                  {showGrid && viewMode === "plan" && <rect id="grid-bg" width="100%" height="100%" fill="url(#smallGrid)" />}

                  {backgroundImg && viewMode === "plan" && (
                    <image
                      href={backgroundImg}
                      x={bgSettings.x}
                      y={bgSettings.y}
                      width={bgSettings.width}
                      height={bgSettings.height}
                      preserveAspectRatio="none"
                      opacity={bgSettings.opacity}
                      className="pointer-events-none"
                    />
                  )}

                  {hasTerrain && elevationOverlay === "shaded" && elevationShadeUrl && (
                    <image
                      href={elevationShadeUrl}
                      x={0}
                      y={0}
                      width={canvasSize.width}
                      height={canvasSize.height}
                      preserveAspectRatio="none"
                      opacity={backgroundImg ? 0.55 : 0.95}
                      style={backgroundImg ? { mixBlendMode: "multiply" } : undefined}
                      className="pointer-events-none"
                    />
                  )}

                  {hasTerrain && elevationOverlay !== "off" && contourPaths && (
                    <g className="pointer-events-none">
                      <path d={contourPaths.minor} fill="none" stroke={backgroundImg ? "rgba(255,247,230,0.55)" : "rgba(68,52,30,0.45)"} strokeWidth={0.8 / zoom} />
                      <path d={contourPaths.major} fill="none" stroke={backgroundImg ? "rgba(255,247,230,0.95)" : "rgba(68,52,30,0.85)"} strokeWidth={1.8 / zoom} />
                      {contourPaths.labels.map((label, i) => (
                        <text
                          key={i}
                          x={label.x}
                          y={label.y}
                          fontSize={10 / zoom}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill={backgroundImg ? "#fff7e6" : "#44341e"}
                          stroke={backgroundImg ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.85)"}
                          strokeWidth={2.5 / zoom}
                          paintOrder="stroke"
                          fontWeight={700}
                          className="select-none"
                        >
                          {label.text}
                        </text>
                      ))}
                    </g>
                  )}

                  {demPreview && viewMode === "plan" && demAlignMode && demOverlayTransform && (
                    <g
                      transform={`translate(${demOverlayTransform.x} ${demOverlayTransform.y}) rotate(${demOverlayTransform.rotation}) scale(${demOverlayTransform.scale}) translate(${-demPreview.width / 2} ${-demPreview.height / 2})`}
                    >
                      <image
                        href={demPreview.url}
                        x={0}
                        y={0}
                        width={demPreview.width}
                        height={demPreview.height}
                        opacity={demOverlayOpacity}
                        preserveAspectRatio="none"
                        className="pointer-events-none"
                      />
                      <rect
                        x={0}
                        y={0}
                        width={demPreview.width}
                        height={demPreview.height}
                        fill="rgba(15, 23, 42, 0.08)"
                        stroke={demAlignStroke}
                        strokeWidth="2"
                        strokeDasharray={demAlignTool === "rotate" ? "8 6" : demAlignTool === "scale" ? "4 4" : "0"}
                        style={{ cursor: demAlignCursor }}
                        onMouseDown={(e) => {
                          if (e.altKey) {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsPanning(true);
                            setPanStart({ x: e.clientX, y: e.clientY, panX: panOffset.x, panY: panOffset.y });
                            return;
                          }
                          if (demAlignTool === "pan") {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsPanning(true);
                            setPanStart({ x: e.clientX, y: e.clientY, panX: panOffset.x, panY: panOffset.y });
                            return;
                          }
                          e.stopPropagation();
                          const pos = getSvgMousePos(e);
                          setDemTransformDrag({
                            mode: demAlignTool,
                            startMouse: pos,
                            startTransform: demTransform
                          });
                        }}
                      />
                      <text
                        x={demPreview.width / 2}
                        y={-10}
                        textAnchor="middle"
                        fontSize="11"
                        fill={demAlignStroke}
                        className="font-semibold select-none"
                      >
                        DEM ALIGN • {demAlignTool.toUpperCase()}
                      </text>
                    </g>
                  )}

                  {items.map(item => {
                    const isSelected = selectedId === item.id;
                    if (item.type === "building" || item.type === "parking") {
                      const b = item as BuildingItem | ParkingItem;
                      const isParking = item.type === "parking";
                      if (!isParking) {
                        const building = item as BuildingItem;
                        const points = getBuildingPoints(building);
                        const labelLayout = getBuildingLabelLayout(building);
                        const lineHeight = labelLayout.fontSize * 1.15;
                        const labelStartY = -((labelLayout.lines.length - 1) * lineHeight) / 2;
                        const labelOffset = building.labelOffset ?? { x: 0, y: 0 };
                        const labelBoxHeight = Math.max(lineHeight * labelLayout.lines.length, lineHeight);
                        return (
                          <g
                            key={building.id}
                            transform={`translate(${building.x}, ${building.y}) rotate(${building.rotation})`}
                            onMouseDown={e => handleMouseDown(e, building.id, "move")}
                            onClick={e => e.stopPropagation()}
                            className="cursor-move"
                            opacity={interactionState.itemId === building.id && interactionState.type === "move" ? 0.8 : 1}
                          >
                            <polygon
                              points={points.map(point => `${point.x},${point.y}`).join(" ")}
                              fill={building.color}
                              fillOpacity={building.importSource ? 0.55 : 1}
                              stroke={isSelected ? "#059669" : building.importSource ? "#f8fafc" : "#334155"}
                              strokeWidth={isSelected ? 3 : building.importSource ? 1.5 : 1}
                            />
                            {!(building.importSource && !building.label?.trim()) && <g
                              transform={`translate(${labelOffset.x}, ${labelOffset.y})`}
                              onMouseDown={e => {
                                e.stopPropagation();
                                handleMouseDown(e, building.id, "move-label");
                              }}
                              className="cursor-move"
                              style={{ pointerEvents: "auto" }}
                            >
                              <rect
                                x={-labelLayout.maxWidth / 2}
                                y={labelStartY - lineHeight * 0.6}
                                width={labelLayout.maxWidth}
                                height={labelBoxHeight + lineHeight * 0.2}
                                fill="transparent"
                              />
                              {labelLayout.lines.map((line, idx) => {
                                const estimated = line.length * labelLayout.fontSize * 0.62;
                                const clampWidth = estimated > labelLayout.maxWidth ? labelLayout.maxWidth : undefined;
                                return (
                                  <text
                                    key={`${building.id}-label-${idx}`}
                                    x="0"
                                    y={labelStartY + idx * lineHeight}
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    fill="white"
                                    fontSize={labelLayout.fontSize}
                                    fontFamily={labelLayout.fontFamily}
                                    fontWeight={labelLayout.fontWeight}
                                    pointerEvents="none"
                                    className="select-none"
                                    textLength={clampWidth}
                                    lengthAdjust={clampWidth ? "spacingAndGlyphs" : undefined}
                                  >
                                    {line}
                                  </text>
                                );
                              })}
                            </g>}
                            {isSelected &&
                              points.map((point, index) => (
                                <circle
                                  key={`${building.id}-vertex-${index}`}
                                  cx={point.x}
                                  cy={point.y}
                                  r="5"
                                  fill="#ffffff"
                                  stroke="#059669"
                                  strokeWidth="2"
                                  className="cursor-pointer"
                                  onMouseDown={e => handleMouseDown(e, building.id, "vertex", String(index))}
                                />
                              ))}
                          </g>
                        );
                      }
                      return (
                        <g
                          key={b.id}
                          transform={`translate(${b.x}, ${b.y}) rotate(${b.rotation})`}
                          onMouseDown={e => handleMouseDown(e, b.id, "move")}
                          onClick={e => {
                            if (!vertexInsertMode) {
                              e.stopPropagation();
                            }
                          }}
                          className="cursor-move"
                          opacity={interactionState.itemId === b.id && interactionState.type === "move" ? 0.8 : 1}
                          style={{ filter: isSelected ? "drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))" : "none" }}
                        >
                          <rect
                            x={-b.width / 2}
                            y={-b.height / 2}
                            width={b.width}
                            height={b.height}
                            fill={b.color}
                            stroke={isSelected ? "#3b82f6" : isParking ? "#94a3b8" : "#334155"}
                            strokeWidth={isSelected ? 4 : 1}
                            strokeDasharray={isParking ? "4" : "0"}
                          />
                          {!isParking && (
                            <text
                              x="0"
                              y="0"
                              textAnchor="middle"
                              dominantBaseline="middle"
                              fill="white"
                              fontSize="12"
                              pointerEvents="none"
                              className="font-bold select-none"
                            >
                              {(b as BuildingItem).label}
                            </text>
                          )}
                          {isSelected && (
                            <g className="cursor-alias">
                              <line x1="0" y1={-b.height / 2} x2="0" y2={-b.height / 2 - 25} stroke="#3b82f6" strokeWidth="2" />
                              <circle
                                cx="0"
                                cy={-b.height / 2 - 25}
                                r="6"
                                fill="#fff"
                                stroke="#3b82f6"
                                strokeWidth="2"
                                onMouseDown={e => {
                                  e.stopPropagation();
                                  handleMouseDown(e, b.id, "rotate");
                                }}
                              />
                            </g>
                          )}
                        </g>
                      );
                    }

                    if (item.type === "tree") {
                      const t = item as TreeItem;
                      return (
                        <g
                          key={t.id}
                          transform={`translate(${t.x}, ${t.y}) rotate(${t.rotation})`}
                          onMouseDown={e => handleMouseDown(e, t.id, "move")}
                          onClick={e => e.stopPropagation()}
                          className="cursor-move"
                          style={{ filter: isSelected ? "drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))" : "none" }}
                        >
                          <circle
                            r={t.radius}
                            fill={t.color}
                            fillOpacity="0.6"
                            stroke={isSelected ? "#3b82f6" : t.color}
                            strokeWidth={isSelected ? 3 : 0}
                          />
                          {isSelected && (
                            <g className="cursor-alias">
                              <line x1="0" y1={-t.radius} x2="0" y2={-t.radius - 20} stroke="#3b82f6" strokeWidth="2" />
                              <circle
                                cx="0"
                                cy={-t.radius - 20}
                                r="6"
                                fill="#fff"
                                stroke="#3b82f6"
                                strokeWidth="2"
                                onMouseDown={e => {
                                  e.stopPropagation();
                                  handleMouseDown(e, t.id, "rotate");
                                }}
                              />
                            </g>
                          )}
                          <circle r={t.radius * 0.5} fill="black" fillOpacity="0.1" />
                        </g>
                      );
                    }

                    if (item.type === "label") {
                      const l = item as LabelItem;
                      return (
                        <text
                          key={l.id}
                          x={l.x}
                          y={l.y}
                          fontSize={l.fontSize}
                          fill={isSelected ? "#3b82f6" : l.color}
                          fontWeight="bold"
                          textAnchor="middle"
                          className="cursor-move select-none"
                          onMouseDown={e => handleMouseDown(e, l.id, "move")}
                          onClick={e => e.stopPropagation()}
                          style={{
                            textShadow: isSelected ? "0 0 8px rgba(59, 130, 246, 0.8)" : "0px 1px 2px rgba(255,255,255,0.8)",
                            stroke: isSelected ? "#3b82f6" : "none",
                            strokeWidth: isSelected ? 1 : 0
                          }}
                        >
                          {l.text}
                        </text>
                      );
                    }

                    if (item.type === "image") {
                      const img = item as ImageItem;
                      return (
                        <g
                          key={img.id}
                          transform={`translate(${img.x}, ${img.y}) rotate(${img.rotation})`}
                          onMouseDown={e => handleMouseDown(e, img.id, "move")}
                          onClick={e => e.stopPropagation()}
                          className="cursor-move"
                        >
                          <image
                            href={img.src}
                            x={-img.width / 2}
                            y={-img.height / 2}
                            width={img.width}
                            height={img.height}
                            style={{
                              outline: isSelected ? "3px solid #3b82f6" : "none",
                              filter: isSelected ? "drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))" : "none"
                            }}
                          />
                          {isSelected && (
                            <g className="cursor-alias">
                              <line x1="0" y1={-img.height / 2} x2="0" y2={-img.height / 2 - 25} stroke="#3b82f6" strokeWidth="2" />
                              <circle
                                cx="0"
                                cy={-img.height / 2 - 25}
                                r="6"
                                fill="#fff"
                                stroke="#3b82f6"
                                strokeWidth="2"
                                onMouseDown={e => {
                                  e.stopPropagation();
                                  handleMouseDown(e, img.id, "rotate");
                                }}
                              />
                            </g>
                          )}
                        </g>
                      );
                    }



                    if (item.type === "camera") {
                      const c = item as CameraItem;
                      const cameraPos = getCameraPlanPosition(c);
                      const r = c.range;
                      const hFov = c.hFov ?? c.fov;
                      const startAngle = (c.rotation - hFov / 2) * (Math.PI / 180);
                      const endAngle = (c.rotation + hFov / 2) * (Math.PI / 180);

                      const x1 = r * Math.cos(startAngle);
                      const y1 = r * Math.sin(startAngle);
                      const x2 = r * Math.cos(endAngle);
                      const y2 = r * Math.sin(endAngle);

                      const handleDist = 40;
                      const rotRad = c.rotation * (Math.PI / 180);
                      const hx = handleDist * Math.cos(rotRad);
                      const hy = handleDist * Math.sin(rotRad);

                      const labelX = c.labelOffset?.x ?? defaultCameraLabelOffset(c.rotation).x;
                      const labelY = c.labelOffset?.y ?? defaultCameraLabelOffset(c.rotation).y;
                      const dash = c.connectorDashSize || 3;


                      // Visibility / Occlusion Calculation
                      // Layer 1: Buildings Only (blocked view)
                      const buildings = items.filter(i => i.type === "building") as BuildingItem[];
                      const polyFull = getVisibilityPolygon(cameraPos, r, hFov, c.rotation, buildings);

                      // Layer 2: Buildings + Trees (clear view)
                      const obstacles = items.filter(i => i.type === "building" || i.type === "tree") as (BuildingItem | TreeItem)[];
                      const polyClear = getVisibilityPolygon(cameraPos, r, hFov, c.rotation, obstacles);

                      const pointsToPath = (pts: { x: number, y: number }[]) => {
                        let d = "M 0 0 ";
                        pts.forEach(p => { d += `L ${p.x} ${p.y} `; });
                        return d + "Z";
                      };

                      const dFull = pointsToPath(polyFull);
                      const dClear = pointsToPath(polyClear);

                      return (
                        <g key={c.id} transform={`translate(${cameraPos.x}, ${cameraPos.y})`} onClick={e => e.stopPropagation()}>
                          <g
                            onMouseDown={e => handleMouseDown(e, c.id, "move")}
                            className="cursor-move"
                            style={{ filter: isSelected ? "drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))" : "none" }}
                          >
                            <defs>
                              <mask id={`mask-${c.id}`}>
                                <rect x={-r} y={-r} width={r * 2} height={r * 2} fill="white" />
                                <path d={dClear} fill="black" />
                              </mask>

                              {/* Blue Gradients (Clear View) */}
                              <radialGradient id={`grad-blue-${c.id}`} cx="0" cy="0" r={r} gradientUnits="userSpaceOnUse">
                                <stop offset="20%" stopColor={c.color} stopOpacity="0.25" />
                                <stop offset="70%" stopColor={c.color} stopOpacity="0.08" />
                                <stop offset="100%" stopColor={c.color} stopOpacity="0" />
                              </radialGradient>
                              <radialGradient id={`grad-blue-stroke-${c.id}`} cx="0" cy="0" r={r} gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor={c.color} stopOpacity="0.7" />
                                <stop offset="60%" stopColor={c.color} stopOpacity="0.3" />
                                <stop offset="85%" stopColor={c.color} stopOpacity="0.08" />
                                <stop offset="100%" stopColor={c.color} stopOpacity="0" />
                              </radialGradient>

                              {/* Yellow Gradients (Obstructed View) */}
                              <radialGradient id={`grad-yellow-${c.id}`} cx="0" cy="0" r={r} gradientUnits="userSpaceOnUse">
                                <stop offset="20%" stopColor="#fde047" stopOpacity="0.3" />
                                <stop offset="70%" stopColor="#fde047" stopOpacity="0.12" />
                                <stop offset="100%" stopColor="#fde047" stopOpacity="0" />
                              </radialGradient>
                              <radialGradient id={`grad-yellow-stroke-${c.id}`} cx="0" cy="0" r={r} gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#eab308" stopOpacity="0.7" />
                                <stop offset="60%" stopColor="#eab308" stopOpacity="0.35" />
                                <stop offset="85%" stopColor="#eab308" stopOpacity="0.1" />
                                <stop offset="100%" stopColor="#eab308" stopOpacity="0" />
                              </radialGradient>
                            </defs>

                            {/* Obstructed Area (Behind Trees) */}
                            <path
                              d={dFull}
                              fill={`url(#grad-yellow-${c.id})`}
                              stroke={`url(#grad-yellow-stroke-${c.id})`}
                              strokeWidth="1" strokeDasharray="4,4" pointerEvents="none"
                              mask={`url(#mask-${c.id})`}
                            />
                            {/* Clear Area (Visible) */}
                            <path
                              d={dClear}
                              fill={`url(#grad-blue-${c.id})`}
                              stroke={`url(#grad-blue-stroke-${c.id})`}
                              strokeWidth="1" pointerEvents="none"
                            />
                            {showDoriZones && (() => {
                              // What the camera can make out at each distance (DORI), clipped to what it can actually see.
                              const a0 = ((c.rotation - hFov / 2) * Math.PI) / 180;
                              const a1 = ((c.rotation + hFov / 2) * Math.PI) / 180;
                              const large = hFov > 180 ? 1 : 0;
                              const pt = (radius: number, a: number) => `${radius * Math.cos(a)} ${radius * Math.sin(a)}`;
                              const ring = (rIn: number, rOut: number) =>
                                rIn <= 0.01
                                  ? `M 0 0 L ${pt(rOut, a0)} A ${rOut} ${rOut} 0 ${large} 1 ${pt(rOut, a1)} Z`
                                  : `M ${pt(rIn, a0)} L ${pt(rOut, a0)} A ${rOut} ${rOut} 0 ${large} 1 ${pt(rOut, a1)} L ${pt(rIn, a1)} A ${rIn} ${rIn} 0 ${large} 0 ${pt(rIn, a0)} Z`;
                              const zones = getDoriDistances(c);
                              const camMount = c.mount?.height ?? c.height ?? DEFAULT_CAMERA_HEIGHT_FT;
                              const vf = c.vFov ?? vFovFromH(hFov, getCameraAspectValue(c));
                              const blind = getGroundCoverage(camMount, c.pitch ?? DEFAULT_CAMERA_PITCH, vf).near;
                              let inner = 0;
                              return (
                                <g clipPath={`url(#clip-${c.id})`} pointerEvents="none">
                                  <clipPath id={`clip-${c.id}`}><path d={dClear} /></clipPath>
                                  {zones.map(zone => {
                                    const outer = Math.min(zone.distance, r);
                                    if (outer <= inner) return null;
                                    const d = ring(inner, outer);
                                    inner = outer;
                                    return <path key={zone.id} d={d} fill={zone.color} fillOpacity={0.16} stroke={zone.color} strokeOpacity={0.5} strokeWidth={0.75 / zoom} />;
                                  })}
                                  {Number.isFinite(blind) && blind > 0.5 && (
                                    <path d={ring(0, Math.min(blind, r))} fill="url(#blind-hatch)" stroke="#ef4444" strokeOpacity={0.6} strokeWidth={0.75 / zoom} strokeDasharray={`${3 / zoom} ${3 / zoom}`} />
                                  )}
                                </g>
                              );
                            })()}
                            <g transform={`rotate(${c.rotation})`}>
                              <rect x="-10" y="-8" width="20" height="16" rx="4" fill={isSelected ? "#3b82f6" : "#1e293b"} />
                              <circle cx="0" cy="0" r="4" fill={c.color} />
                              <rect x="10" y="-4" width="6" height="8" fill="#475569" />
                            </g>
                          </g>

                          {isSelected && (
                            <>
                              <line x1="0" y1="0" x2={hx} y2={hy} stroke="white" strokeWidth="2" strokeDasharray="3,3" />
                              <circle
                                cx={hx}
                                cy={hy}
                                r="7"
                                fill="#3b82f6"
                                stroke="white"
                                strokeWidth="2"
                                className="cursor-crosshair"
                                style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }}
                                onMouseDown={e => handleMouseDown(e, c.id, "rotate")}
                              />

                              <circle
                                cx={x1}
                                cy={y1}
                                r="6"
                                fill={c.color}
                                stroke="white"
                                strokeWidth="2"
                                className="cursor-ew-resize"
                                style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }}
                                onMouseDown={e => handleMouseDown(e, c.id, "fov", "left")}
                              />
                              <circle
                                cx={x2}
                                cy={y2}
                                r="6"
                                fill={c.color}
                                stroke="white"
                                strokeWidth="2"
                                className="cursor-ew-resize"
                                style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }}
                                onMouseDown={e => handleMouseDown(e, c.id, "fov", "right")}
                              />

                              <circle
                                cx={r * Math.cos(rotRad)}
                                cy={r * Math.sin(rotRad)}
                                r="6"
                                fill={c.color}
                                stroke="white"
                                strokeWidth="2"
                                className="cursor-ns-resize"
                                style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }}
                                onMouseDown={e => handleMouseDown(e, c.id, "range")}
                              />
                            </>
                          )}

                          <g
                            transform={`translate(${labelX}, ${labelY})`}
                            onMouseDown={e => handleMouseDown(e, c.id, "move-label")}
                            className="cursor-move hover:opacity-80 transition-opacity"
                          >
                            {(Math.abs(labelX) > 10 || Math.abs(labelY - 30) > 10) && (
                              <line
                                x1={-labelX} y1={-labelY} x2="0" y2="0"
                                stroke="white"
                                strokeWidth="2"
                                strokeDasharray="6,4"
                                style={{ filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.8))' }}
                              />
                            )}

                            <rect
                              x="-50"
                              y="-10"
                              width="100"
                              height="20"
                              rx="4"
                              fill="rgba(255,255,255,0.9)"
                              stroke={isSelected ? "#3b82f6" : "transparent"}
                              strokeWidth="1"
                            />
                            <text textAnchor="middle" dy="4" fontSize="10" fill="#334155" fontWeight="bold" pointerEvents="none" className="select-none">
                              {c.label}
                            </text>
                          </g>
                        </g>
                      );
                    }
                    return null;
                  })}

                  {/* Camera placement preview - ghost camera showing where it will be placed */}
                  {cameraPlacementPreview && mode === "add-camera" && (
                    <g
                      transform={`translate(${cameraPlacementPreview.point.x}, ${cameraPlacementPreview.point.y})`}
                      className="pointer-events-none"
                      opacity={0.6}
                    >
                      {/* Preview FOV cone */}
                      <path
                        d={(() => {
                          const r = 100; // Preview range
                          const fov = 70; // Preview FOV
                          const startAngle = (cameraPlacementPreview.rotation - fov / 2) * (Math.PI / 180);
                          const endAngle = (cameraPlacementPreview.rotation + fov / 2) * (Math.PI / 180);
                          const x1 = r * Math.cos(startAngle);
                          const y1 = r * Math.sin(startAngle);
                          const x2 = r * Math.cos(endAngle);
                          const y2 = r * Math.sin(endAngle);
                          return `M 0 0 L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z`;
                        })()}
                        fill="#3b82f6"
                        fillOpacity="0.2"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        strokeDasharray="4,4"
                      />
                      {/* Preview camera body */}
                      <g transform={`rotate(${cameraPlacementPreview.rotation})`}>
                        <rect x="-10" y="-8" width="20" height="16" rx="4" fill="#3b82f6" />
                        <circle cx="0" cy="0" r="4" fill="white" />
                        <rect x="10" y="-4" width="6" height="8" fill="#1e40af" />
                      </g>
                      {/* "Click to place" indicator */}
                      <text
                        y="-20"
                        textAnchor="middle"
                        fill="#3b82f6"
                        fontSize="11"
                        fontWeight="bold"
                        className="select-none"
                      >
                        Click to place
                      </text>
                    </g>
                  )}

                  {/* Building edge highlights when in camera placement mode */}
                  {mode === "add-camera" && items.filter(i => i.type === "building").map(item => {
                    const building = item as BuildingItem;
                    const worldPoints = getBuildingEdgePointsWorld(building);
                    return worldPoints.map((point, index) => {
                      const nextPoint = worldPoints[(index + 1) % worldPoints.length];
                      const isHoveredEdge = cameraPlacementPreview?.buildingId === building.id &&
                        cameraPlacementPreview?.edgeIndex === index;
                      return (
                        <line
                          key={`edge-highlight-${building.id}-${index}`}
                          x1={point.x}
                          y1={point.y}
                          x2={nextPoint.x}
                          y2={nextPoint.y}
                          stroke={isHoveredEdge ? "#3b82f6" : "#94a3b8"}
                          strokeWidth={isHoveredEdge ? 4 : 2}
                          strokeDasharray={isHoveredEdge ? "0" : "6,4"}
                          className="pointer-events-none transition-all"
                          opacity={isHoveredEdge ? 1 : 0.5}
                        />
                      );
                    });
                  })}
                  {/* --- LABELS OVERLAY (Rendered last to appear on top) --- */}
                  {items.map(item => {
                    if (item.type === "camera") {
                      const c = item as CameraItem;
                      const cameraPos = getCameraPlanPosition(c);
                      const labelX = c.labelOffset?.x ?? defaultCameraLabelOffset(c.rotation).x;
                      const labelY = c.labelOffset?.y ?? defaultCameraLabelOffset(c.rotation).y;
                      const isSelected = selectedId === c.id;

                      return (
                        <g key={`label-overlay-${c.id}`} transform={`translate(${cameraPos.x}, ${cameraPos.y})`} style={{ pointerEvents: 'none' }}>
                          <g
                            transform={`translate(${labelX}, ${labelY})`}
                            onMouseDown={e => {
                              // Enable pointer events for interaction
                              e.stopPropagation();
                              handleMouseDown(e, c.id, "move-label");
                            }}
                            className="cursor-move hover:opacity-80 transition-opacity"
                            style={{ pointerEvents: 'auto' }}
                          >
                            {(Math.abs(labelX) > 10 || Math.abs(labelY - 30) > 10) && (
                              <line
                                x1={-labelX} y1={-labelY} x2="0" y2="0"
                                stroke="white"
                                strokeWidth="2"
                                strokeDasharray="6,4"
                                style={{ filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.8))' }}
                              />
                            )}

                            <rect
                              x="-50"
                              y="-10"
                              width="100"
                              height="20"
                              rx="4"
                              fill="rgba(255,255,255,0.9)"
                              stroke={isSelected ? "#3b82f6" : "transparent"}
                              strokeWidth="1"
                            />
                            <text textAnchor="middle" dy="4" fontSize="10" fill="#334155" fontWeight="bold" pointerEvents="none" className="select-none">
                              {c.label}
                            </text>
                          </g>
                        </g>
                      );
                    }
                    return null;
                  })}
                  {isTerrainMode && (
                    <circle
                      ref={planBrushCursorRef}
                      cx={-9999}
                      cy={-9999}
                      r={Math.max(gridSize, clamp(terrainBrushSize, TERRAIN_BRUSH_MIN, TERRAIN_BRUSH_MAX) * gridSize)}
                      fill={terrainTool === "sculpt" ? "rgba(245,158,11,0.12)" : terrainTool === "smooth" ? "rgba(56,189,248,0.12)" : "rgba(129,140,248,0.12)"}
                      stroke={terrainTool === "sculpt" ? "#f59e0b" : terrainTool === "smooth" ? "#38bdf8" : "#818cf8"}
                      strokeWidth={2 / zoom}
                      strokeDasharray={`${6 / zoom} ${4 / zoom}`}
                      className="pointer-events-none"
                    />
                  )}
                </g>
              </svg>
            ) : viewMode === "iso3d" ? (
              <div className="relative w-full h-full">
                <div ref={threeContainerRef} className="absolute inset-0" />
                {demAlignMode && demPreview && (
                  <div className="absolute top-4 left-4 z-40 w-80 rounded-xl border border-white/10 bg-zinc-900/90 shadow-xl backdrop-blur">
                    <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
                      <div className="text-[11px] font-semibold text-slate-200">DEM Align Mini-Map</div>
                      <div className="text-[10px] text-slate-400">{demAlignTool.toUpperCase()}</div>
                    </div>
                    <svg
                      ref={demMiniRef}
                      width="100%"
                      height="220"
                      viewBox={`0 0 ${canvasSize.width} ${canvasSize.height}`}
                      className="block bg-zinc-950"
                      onMouseMove={handleDemMiniMouseMove}
                      onMouseUp={handleDemMiniMouseUp}
                      onMouseLeave={handleDemMiniMouseUp}
                    >
                      <rect x={0} y={0} width={canvasSize.width} height={canvasSize.height} fill="#0b0f19" />
                      {backgroundImg && (
                        <image
                          href={backgroundImg}
                          x={bgSettings.x}
                          y={bgSettings.y}
                          width={bgSettings.width}
                          height={bgSettings.height}
                          preserveAspectRatio="none"
                          opacity={bgSettings.opacity}
                        />
                      )}
                      {demOverlayTransform && (
                        <g
                          transform={`translate(${demOverlayTransform.x} ${demOverlayTransform.y}) rotate(${demOverlayTransform.rotation}) scale(${demOverlayTransform.scale}) translate(${-demPreview.width / 2} ${-demPreview.height / 2})`}
                        >
                          <image
                            href={demPreview.url}
                            x={0}
                            y={0}
                            width={demPreview.width}
                            height={demPreview.height}
                            opacity={demOverlayOpacity}
                            preserveAspectRatio="none"
                            className="pointer-events-none"
                          />
                          <rect
                            x={0}
                            y={0}
                            width={demPreview.width}
                            height={demPreview.height}
                            fill="rgba(15, 23, 42, 0.08)"
                            stroke={demAlignStroke}
                            strokeWidth="2"
                            strokeDasharray={demAlignTool === "rotate" ? "8 6" : demAlignTool === "scale" ? "4 4" : "0"}
                            style={{ cursor: demAlignCursor }}
                            onMouseDown={(e) => {
                              if (e.altKey || demAlignTool === "pan") return;
                              e.stopPropagation();
                              const pos = getMiniSvgMousePos(e);
                              setDemTransformDrag({
                                mode: demAlignTool,
                                startMouse: pos,
                                startTransform: demTransform
                              });
                            }}
                          />
                          <text
                            x={demPreview.width / 2}
                            y={-10}
                            textAnchor="middle"
                            fontSize="12"
                            fill={demAlignStroke}
                            className="font-semibold select-none"
                          >
                            DEM ALIGN
                          </text>
                        </g>
                      )}
                    </svg>
                  </div>
                )}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 pointer-events-none">
                  <div className="rounded-full bg-zinc-900/90 px-3 py-1 text-xs font-semibold text-slate-300 shadow border border-white/10 pointer-events-auto">
                    Drag to pan · Right-click to rotate · Scroll to zoom
                  </div>
                  <div className="flex items-center gap-2 pointer-events-auto">
                    <button
                      onClick={() => bg3dInputRef.current?.click()}
                      className="px-3 py-1 rounded-full border border-white/10 bg-zinc-800/80 text-xs font-semibold text-slate-300 hover:bg-zinc-700 hover:text-white shadow-sm transition-colors flex items-center gap-1"
                    >
                      <ImageIcon className="w-3 h-3" />
                      Set 3D BG
                    </button>
                    <button
                      onClick={handleCaptureSnapshot}
                      className="px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/20 text-xs font-semibold text-emerald-400 hover:bg-emerald-500/30 shadow-sm transition-colors"
                    >
                      Take Snapshot
                    </button>
                    <button
                      onClick={handleExportCurrent3d}
                      className="px-3 py-1 rounded-full border border-white/10 bg-zinc-800/80 text-xs font-semibold text-slate-300 hover:bg-zinc-700 hover:text-white shadow-sm transition-colors"
                    >
                      Download Snapshot
                    </button>
                    <button
                      onClick={add3dToExportList}
                      className="px-3 py-1 rounded-full border border-white/10 bg-zinc-800/80 text-xs font-semibold text-slate-300 hover:bg-zinc-700 hover:text-white shadow-sm transition-colors"
                    >
                      + Add to Report
                    </button>
                    <button
                      onClick={handleReset3dView}
                      className="px-3 py-1 rounded-full border border-white/10 bg-zinc-800/80 text-xs font-semibold text-slate-300 hover:bg-zinc-700 hover:text-white shadow-sm transition-colors"
                    >
                      Reset View
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div ref={nvrContainerRef} className="relative bg-zinc-950 flex flex-col overflow-hidden w-full h-full">
                <div className="w-full h-full p-4 overflow-auto custom-scrollbar">
                  {items.filter(i => i.type === 'camera').length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-slate-500">
                      <LayoutGrid className="w-12 h-12 mb-4 opacity-20" />
                      <p>No cameras found. Add cameras to see the Monitor Wall.</p>
                    </div>
                  ) : (
                    <>
                      {/* @ts-ignore */}
                      <GridLayout
                        className="layout"
                        layout={nvrLayout}
                        cols={NVR_COLS}
                        rowHeight={nvrRowHeight}
                        width={nvrGridWidth}
                        onLayoutChange={onLayoutChange}
                        isDraggable={viewMode === 'nvr'}
                        isResizable={viewMode === 'nvr'}
                        draggableCancel=".no-drag"
                        margin={[NVR_MARGIN, NVR_MARGIN]}
                      >
                        {items.filter(i => i.type === 'camera').map(cam => (
                          <div
                            key={cam.id}
                            className="relative group"
                            onClick={() => {
                              setSelectedId(cam.id);
                              setRightPanelMode("properties");
                              setIsRightPanelOpen(true);
                            }}
                          >
                            <NVRCard
                              camera={cam as CameraItem}
                              renderFn={renderCameraViewToDataUrl}
                              sceneKey={nvrSceneKey}
                              aspect={getCameraAspectValue(cam as CameraItem)}
                              onMaximize={() => {
                                setSelectedId(cam.id);
                                setRightPanelMode("properties");
                                setIsRightPanelOpen(true);
                                setMaximizedCamId(cam.id);
                              }}
                              onExport={() => addCameraViewToExportList(cam as CameraItem)}
                            />
                          </div>
                        ))}
                      </GridLayout>
                    </>
                  )}
                </div>
              </div>
            )}

            {(viewMode === "plan" || viewMode === "iso3d") && (
              <div className="absolute bottom-4 left-4 z-30 flex flex-col items-start gap-2 pointer-events-none">
                <div
                  ref={cameraReadoutRef}
                  className="rounded-full bg-zinc-900/90 px-3 py-1 text-xs font-semibold text-slate-200 shadow border border-white/10 transition-opacity"
                  style={{ opacity: 0 }}
                />
                <div
                  ref={elevationReadoutRef}
                  className="rounded-full bg-zinc-900/90 px-3 py-1 text-xs font-semibold text-slate-200 shadow border border-white/10 transition-opacity"
                  style={{ opacity: 0 }}
                />
                {viewMode === "plan" && items.some(i => i.type === "camera") && (
                  <div className="rounded-xl bg-zinc-900/90 border border-white/10 shadow-lg px-3 py-2 text-[10px] text-slate-300 pointer-events-auto space-y-1.5">
                    <label className="flex items-center justify-between gap-3 cursor-pointer font-semibold text-slate-200">
                      Coverage zones
                      <input type="checkbox" checked={showDoriZones} onChange={e => setShowDoriZones(e.target.checked)} className="accent-emerald-500" />
                    </label>
                    {showDoriZones && (
                      <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                        {DORI_LEVELS.map(level => (
                          <span key={level.id} className="flex items-center gap-1.5" title={level.hint}>
                            <span className="w-2.5 h-2.5 rounded-sm" style={{ background: level.color }} />
                            {level.label}
                          </span>
                        ))}
                        <span className="flex items-center gap-1.5 col-span-2" title="Too close/steep for the camera to see">
                          <span className="w-2.5 h-2.5 rounded-sm border border-red-400" style={{ background: "repeating-linear-gradient(45deg, rgba(239,68,68,.5) 0 2px, transparent 2px 4px)" }} />
                          Blind spot under camera
                        </span>
                      </div>
                    )}
                  </div>
                )}
                {hasTerrain && (
                  <div className="flex items-center gap-0.5 rounded-lg bg-zinc-900/90 border border-white/10 shadow-lg p-0.5 pointer-events-auto" role="group" aria-label="Elevation display">
                    <Mountain className="w-3.5 h-3.5 text-slate-400 mx-1.5" />
                    {([
                      { id: "off", label: "Off" },
                      { id: "contours", label: "Contours" },
                      { id: "shaded", label: "Shaded" }
                    ] as { id: ElevationOverlayMode; label: string }[]).map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => setElevationOverlay(opt.id)}
                        aria-pressed={elevationOverlay === opt.id}
                        className={`px-2 py-1 rounded-md text-[11px] font-semibold ${elevationOverlay === opt.id ? "bg-emerald-600 text-white" : "text-slate-300 hover:bg-white/10"}`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
                {hasTerrain && elevationOverlay !== "off" && (
                  <div className="rounded-xl bg-zinc-900/90 border border-white/10 shadow-lg px-3 py-2 text-[10px] text-slate-300 pointer-events-auto">
                    <div className="flex items-center justify-between gap-4 mb-1 font-semibold text-slate-200">
                      <span>Elevation</span>
                      <span className="text-slate-400 font-medium">contours {contourInterval} ft</span>
                    </div>
                    <div
                      className="h-2 w-40 rounded-full"
                      style={{ background: `linear-gradient(to right, ${ELEVATION_RAMP.map(([t, c]) => `rgb(${c.join(",")}) ${t * 100}%`).join(", ")})` }}
                    />
                    <div className="flex justify-between mt-1 text-slate-400">
                      <span>{formatElevation(terrainStats.min)}</span>
                      <span>{formatElevation(terrainStats.max)}</span>
                    </div>
                  </div>
                )}
                {!hasTerrain && viewMode === "plan" && !isTerrainMode && (
                  <button
                    onClick={openElevationDialog}
                    className="pointer-events-auto flex items-center gap-2 rounded-full bg-zinc-900/90 hover:bg-zinc-800 px-3 py-1.5 text-xs font-semibold text-emerald-300 shadow border border-emerald-500/30"
                  >
                    <Mountain className="w-3.5 h-3.5" />
                    Add real elevation
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Camera Preview Panel - Picture-in-Picture style */}
        {selectedCamera && showCameraPreview && (
          <div className={`absolute bottom-4 ${floatingPanelRight} w-80 bg-zinc-900/90 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden border border-white/10 z-40 ring-1 ring-black/50`}>
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-white/5">
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium text-slate-200 truncate">{selectedCamera.label} View</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setMaximizedCamId(selectedCamera.id)}
                  className="p-1 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors"
                  title="Full Screen"
                >
                  <Maximize className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setShowCameraPreview(false)}
                  className="p-1 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors"
                  title="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <canvas
              ref={cameraPreviewRef}
              width={cameraPreviewWidth}
              height={cameraPreviewHeight}
              className="w-full"
            />
            <div className="px-3 py-2 bg-white/5 text-xs text-slate-400 flex items-center justify-between border-t border-white/5">
              <div className="flex gap-3">
                <span>H-FOV: {(selectedCamera.hFov ?? selectedCamera.fov).toFixed(0)}°</span>
                <span>V-FOV: {(selectedCamera.vFov ?? vFovFromH(selectedCamera.hFov ?? selectedCamera.fov, getCameraAspectValue(selectedCamera))).toFixed(0)}°</span>
                <span>Range: {selectedCamera.range}</span>
              </div>
              <button
                onClick={() => addCameraViewToExportList(selectedCamera)}
                className="px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs rounded flex items-center gap-1"
                title="Add this view to the report"
              >
                <Plus className="w-3 h-3" />
                Add to Report
              </button>
            </div>
          </div>
        )}

        {maximizedCamId && (
          <div
            className="fixed left-0 top-0 bottom-0 z-50 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
            style={{ right: isRightPanelOpen ? "22rem" : "0" }}
          >
            <div
              className="absolute left-4 top-16 bottom-4 lg:left-20 lg:top-20 lg:bottom-8"
              style={{ right: "1rem" }}
            >
              {(() => {
                const cam = items.find(i => i.id === maximizedCamId);
                if (!cam) return null;
                return (
                  <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl flex flex-col">
                    <div className="flex items-center justify-between p-4 bg-zinc-900 border-b border-white/10 shrink-0">
                      <div className="flex items-center gap-3">
                        <Camera className="w-5 h-5 text-emerald-400" />
                        <span className="font-bold text-slate-200 text-lg">{cam.label}</span>
                        <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 text-xs font-mono font-bold border border-red-500/30">LIVE</span>
                      </div>
                      <button onClick={() => setMaximizedCamId(null)} className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white transition-colors">
                        <Minimize className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="flex-1 relative bg-black p-4 flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full relative">
                                    <NVRCard camera={cam as CameraItem} renderFn={renderCameraViewToDataUrl} sceneKey={nvrSceneKey} aspect={getCameraAspectValue(cam as CameraItem)} isMaximized={true} />
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* Show Camera Preview toggle button when camera is selected but preview is hidden */}
        {selectedCamera && !showCameraPreview && (
          <button
            onClick={() => setShowCameraPreview(true)}
            className={`absolute bottom-4 ${floatingPanelRight} px-4 py-2 bg-slate-800 text-white rounded-lg shadow-lg hover:bg-slate-700 transition-colors z-40 flex items-center gap-2`}
          >
            <Camera className="w-4 h-4" />
            <span className="text-sm font-medium">Show Camera View</span>
          </button>
        )}

        {/* --- Properties Sidebar (Docked) --- */}
        <div className={`absolute right-0 top-0 bottom-0 w-80 bg-zinc-900/90 backdrop-blur-xl border-l border-white/10 overflow-y-auto shadow-2xl z-40 custom-scrollbar ${isRightPanelOpen ? "hidden lg:block" : "hidden"}`}>
          {selectedItem && !showProjectSettings ? (
            <div className="p-6 flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h2 className="font-bold text-lg text-slate-200 capitalize">Edit {getItemTypeLabel(selectedItem.type)}</h2>
                <button
                  onClick={() => setIsRightPanelOpen(false)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  title="Close Panel"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {selectedItem.type !== "label" && selectedItem.type !== "parking" && selectedItem.type !== "camera" && (
                <div className={panelSection}>
                  <label className="text-xs font-semibold text-slate-400 uppercase flex justify-between">
                    <span>Rotation</span>
                    <span>{Math.round(selectedItem.rotation)}deg</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={selectedItem.rotation}
                    onChange={e => updateItem(selectedItem.id, { rotation: parseInt(e.target.value) })}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                </div>
              )}

              {(selectedItem.type === "camera" ||
                selectedItem.type === "building" ||
                selectedItem.type === "image" ||
                selectedItem.type === "label") && (
                  <div className={panelSection}>
                    <label className="text-xs font-semibold text-slate-400 uppercase">
                      {selectedItem.type === "label" ? "Text Content" : "Label"}
                    </label>
                    <input
                      type="text"
                      value={selectedItem.type === "label" ? (selectedItem as LabelItem).text : (selectedItem as any).label}
                      onChange={e => updateItem(selectedItem.id, selectedItem.type === "label" ? { text: e.target.value } : { label: e.target.value })}
                      className="w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"
                    />
                  </div>
                )}

              {selectedItem.type === "label" && (
                <div className={panelSection}>
                  <label className="text-xs font-semibold text-slate-400 uppercase">Font Size</label>
                  <input
                    type="number"
                    min="8"
                    max="72"
                    value={(selectedItem as LabelItem).fontSize}
                    onChange={e => updateItem(selectedItem.id, { fontSize: parseInt(e.target.value) })}
                    className="w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"
                  />
                </div>
              )}

              {(selectedItem.type === "building" || selectedItem.type === "parking") && (
                <div className={panelSection}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-400 uppercase">Width</label>
                      <input
                        type="number"
                      value={(selectedItem as any).width}
                      onChange={e =>
                        selectedItem.type === "building"
                          ? updateBuildingSize(selectedItem.id, parseInt(e.target.value), (selectedItem as BuildingItem).height)
                          : updateItem(selectedItem.id, { width: parseInt(e.target.value) })
                      }
                      className="w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"
                    />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-400 uppercase">
                        {selectedItem.type === "parking" ? "Depth" : "Height"}
                      </label>
                      <input
                        type="number"
                      value={(selectedItem as any).height}
                      onChange={e =>
                        selectedItem.type === "building"
                          ? updateBuildingSize((selectedItem as BuildingItem).id, (selectedItem as BuildingItem).width, parseInt(e.target.value))
                          : updateItem(selectedItem.id, { height: parseInt(e.target.value) })
                      }
                      className="w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"
                    />
                    </div>
                  </div>
                </div>
              )}

              {selectedItem.type === "parking" && (
                <div className={panelSectionLoose}>
                  {/* Vehicle Type Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase">Vehicle Type</label>
                    <div className="grid grid-cols-3 gap-1">
                      {(['sedan', 'suv', 'truck', 'sports', 'van', 'hatchback'] as const).map(type => (
                        <button
                          key={type}
                          onClick={() => updateItem(selectedItem.id, { vehicleType: type })}
                          className={`px-2 py-1.5 text-xs rounded capitalize transition-colors ${resolveVehicleType(selectedItem as ParkingItem) === type
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                            }`}
                        >
                          {type === 'sedan' ? '🚗' : type === 'suv' ? '🚙' : type === 'truck' ? '🛻' : type === 'sports' ? '🏎️' : type === 'van' ? '🚐' : '🏍️'} {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Vehicle Colors */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase">Color</label>
                    <div className="flex flex-wrap gap-1">
                      {[
                        '#1f2937', '#374151', '#6b7280', '#f3f4f6', // Grays
                        '#dc2626', '#ef4444', '#f97316', '#f59e0b', // Reds/Oranges
                        '#84cc16', '#22c55e', '#10b981', '#14b8a6', // Greens
                        '#0891b2', '#0ea5e9', '#3b82f6', '#6366f1', // Blues
                        '#8b5cf6', '#a855f7', '#d946ef', '#ec4899', // Purples/Pinks
                        '#78350f', '#92400e', '#854d0e', '#fbbf24', // Browns/Golds
                      ].map(color => (
                        <button
                          key={color}
                          onClick={() => updateItem(selectedItem.id, { color })}
                          className={`w-6 h-6 rounded-full border-2 transition-transform hover:scale-110 ${(selectedItem as ParkingItem).color === color ? 'border-white scale-110' : 'border-transparent'
                            }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Rotation Quick Buttons */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase flex justify-between">
                      <span>Rotation</span>
                      <span>{(selectedItem as ParkingItem).rotation}°</span>
                    </label>
                    <div className="flex gap-1">
                      {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => (
                        <button
                          key={angle}
                          onClick={() => updateItem(selectedItem.id, { rotation: angle })}
                          className={`flex-1 py-1 text-xs rounded transition-colors ${(selectedItem as ParkingItem).rotation === angle
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                            }`}
                        >
                          {angle}°
                        </button>
                      ))}
                    </div>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={(selectedItem as ParkingItem).rotation}
                    onChange={e => updateItem(selectedItem.id, { rotation: parseInt(e.target.value) })}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>

                {/* Vehicle Height */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase flex justify-between">
                    <span>Height (Z)</span>
                    <span>{(selectedItem as ParkingItem).vehicleHeight ?? 12} units</span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="range"
                      min="6"
                      max="60"
                      value={(selectedItem as ParkingItem).vehicleHeight ?? 12}
                      onChange={e => updateItem(selectedItem.id, { vehicleHeight: parseInt(e.target.value) })}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 self-center"
                    />
                    <input
                      type="number"
                      min="6"
                      max="60"
                      value={(selectedItem as ParkingItem).vehicleHeight ?? 12}
                      onChange={e => updateItem(selectedItem.id, { vehicleHeight: parseInt(e.target.value) })}
                      className="w-16 bg-transparent border border-white/20 rounded-lg p-1 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none text-center"
                    />
                  </div>
                </div>
              </div>
            )}

              {selectedItem.type === "building" && (
                <div className={panelSection}>
                  <label className="text-xs font-semibold text-slate-400 uppercase flex justify-between">
                    <span>Wall Height</span>
                    <span>{(selectedItem as BuildingItem).wallHeight ?? 60} units</span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="range"
                      min="10"
                      max="300"
                      value={(selectedItem as BuildingItem).wallHeight ?? 60}
                      onChange={e => updateItem(selectedItem.id, { wallHeight: parseInt(e.target.value) })}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600 self-center"
                    />
                    <input
                      type="number"
                      value={(selectedItem as BuildingItem).wallHeight ?? 60}
                      onChange={e => updateItem(selectedItem.id, { wallHeight: parseInt(e.target.value) })}
                      className="w-16 bg-transparent border border-white/20 rounded-lg p-1 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none text-center"
                    />
                  </div>
                </div>
              )}

              {selectedItem.type === "building" && (
                <div className={panelSection}>
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-slate-400 uppercase">Label Font</label>
                    <button
                      onClick={() => updateItem(selectedItem.id, { labelFontFamily: undefined, labelFontSize: undefined, labelFontWeight: undefined })}
                      className="text-[11px] font-semibold text-slate-400 hover:text-white"
                    >
                      Use Defaults
                    </button>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase">Font Family</label>
                    <input
                      list="building-font-families-override"
                      value={(selectedItem as BuildingItem).labelFontFamily ?? buildingLabelDefaults.fontFamily}
                      onChange={e => updateItem(selectedItem.id, { labelFontFamily: e.target.value })}
                      className="w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-400 uppercase flex justify-between">
                        <span>Font Size</span>
                        <span>{selectedBuildingFont?.fontSize ?? buildingLabelDefaults.fontSize}px</span>
                      </label>
                      <input
                        type="range"
                        min="8"
                        max="32"
                        value={selectedBuildingFont?.fontSize ?? buildingLabelDefaults.fontSize}
                        onChange={e => updateItem(selectedItem.id, { labelFontSize: parseInt(e.target.value) })}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-400 uppercase">Font Weight</label>
                      <select
                        value={selectedBuildingFont?.fontWeight ?? buildingLabelDefaults.fontWeight}
                        onChange={e => updateItem(selectedItem.id, { labelFontWeight: parseInt(e.target.value) })}
                        className="w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"
                      >
                        {FONT_WEIGHTS.map(weight => (
                          <option key={weight} value={weight}>{weight}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <datalist id="building-font-families-override">
                    {FONT_FAMILIES.map(font => (
                      <option key={font} value={font} />
                    ))}
                  </datalist>
                </div>
              )}

              {selectedItem.type === "building" && (
                <div className={panelSection}>
                  <label className="text-xs font-semibold text-slate-400 uppercase">Building Shape</label>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleAddBuildingVertex(selectedItem.id)}
                      className="px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50 text-xs"
                    >
                      Add Vertex
                    </button>
                    <button
                      onClick={() => setVertexInsertMode(true)}
                      className={`px-3 py-1 rounded-full border text-xs ${vertexInsertMode
                        ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                        : "border-slate-200 text-slate-400 hover:bg-slate-50"
                        }`}
                    >
                      Insert on Edge
                    </button>
                    <button
                      onClick={() => handleRemoveBuildingVertex(selectedItem.id)}
                      className="px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50 text-xs"
                    >
                      Remove Vertex
                    </button>
                    <button
                      onClick={() => handleResetBuildingShape(selectedItem.id)}
                      className="px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50 text-xs"
                    >
                      Reset Rectangle
                    </button>
                  </div>
                  <p className="text-xs text-slate-400">
                    Drag the green nodes in plan view to sculpt the footprint. Click “Insert on Edge” then click any edge.
                  </p>
                </div>
              )}

              {selectedItem.type === "image" && (
                <div className={panelSectionLoose}>
                  <button
                    onClick={() => updateItem(selectedItem.id, { aspectRatioLocked: !(selectedItem as ImageItem).aspectRatioLocked })}
                    className={`flex items-center gap-2 text-sm font-medium w-full p-2 rounded border ${(selectedItem as ImageItem).aspectRatioLocked ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "bg-white border-slate-200 text-slate-400"
                      }`}
                  >
                    {(selectedItem as ImageItem).aspectRatioLocked ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
                    Maintain Proportions
                  </button>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-400 uppercase">Width</label>
                      <input
                        type="number"
                        value={Math.round((selectedItem as any).width)}
                        onChange={e => updateImageSize(selectedItem.id, parseInt(e.target.value), undefined)}
                        className="w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-400 uppercase">Height</label>
                      <input
                        type="number"
                        value={Math.round((selectedItem as any).height)}
                        onChange={e => updateImageSize(selectedItem.id, undefined, parseInt(e.target.value))}
                        className="w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <label className="text-xs font-semibold text-slate-400 uppercase">Size Scale</label>
                    <input
                      type="range"
                      min="10"
                      max="600"
                      value={Math.max((selectedItem as any).width, (selectedItem as any).height)}
                      onChange={e => {
                        const size = parseInt(e.target.value);
                        if ((selectedItem as any).width >= (selectedItem as any).height) {
                          updateImageSize(selectedItem.id, size, undefined);
                        } else {
                          updateImageSize(selectedItem.id, undefined, size);
                        }
                      }}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    />
                  </div>
                </div>
              )}

              {selectedItem.type === "tree" && (
                <div className={panelSectionLoose}>
                  {/* Tree Type Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase">Tree Type</label>
                    <div className="grid grid-cols-4 gap-1">
                      {(['deciduous', 'conifer', 'palm', 'bush'] as const).map(type => (
                        <button
                          key={type}
                          onClick={() => updateItem(selectedItem.id, { treeType: type })}
                          className={`px-2 py-1.5 text-xs rounded capitalize transition-colors ${((selectedItem as TreeItem).treeType ?? 'deciduous') === type
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                            }`}
                        >
                          {type === 'deciduous' ? '🌳' : type === 'conifer' ? '🌲' : type === 'palm' ? '🌴' : '🌿'} {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Height Slider */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase flex justify-between">
                      <span>Height</span>
                      <span>{(selectedItem as TreeItem).height ?? 30}</span>
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="300"
                      value={(selectedItem as TreeItem).height ?? 30}
                      onChange={e => updateItem(selectedItem.id, { height: parseInt(e.target.value) })}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    />
                  </div>

                  {/* Width Multiplier Slider */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase flex justify-between">
                      <span>Canopy Width</span>
                      <span>{((selectedItem as TreeItem).width ?? 1).toFixed(1)}x</span>
                    </label>
                    <input
                      type="range"
                      min="0.5"
                      max="2.5"
                      step="0.1"
                      value={(selectedItem as TreeItem).width ?? 1}
                      onChange={e => updateItem(selectedItem.id, { width: parseFloat(e.target.value) })}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    />
                  </div>

                  {/* Canopy Size (Radius) Slider */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase flex justify-between">
                      <span>Canopy Size</span>
                      <span>{(selectedItem as TreeItem).radius}px</span>
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={(selectedItem as TreeItem).radius}
                      onChange={e => updateItem(selectedItem.id, { radius: parseInt(e.target.value) })}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    />
                  </div>
                </div>
              )}

              {selectedItem.type === "camera" && (
                <>
                <div className={panelSection}>
                  <CameraSetupPanel
                    camera={selectedItem as CameraItem}
                    mountHeight={(selectedItem as CameraItem).mount?.height ?? (selectedItem as CameraItem).height ?? DEFAULT_CAMERA_HEIGHT_FT}
                    onChange={updates => updateItem(selectedItem.id, updates)}
                    onMountHeightChange={height => setCameraMountHeight(selectedItem as CameraItem, height)}
                  />
                </div>
                <details className={`${panelSectionLoose} group`}>
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-3 text-xs font-semibold text-slate-300">
                    <span className="uppercase whitespace-nowrap">Fine-tune</span>
                    <span className="text-slate-500 font-normal text-right group-open:hidden">exact angles, lens & mounting</span>
                  </summary>
                  <div className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase flex justify-between">
                      <span>Horizontal FOV</span>
                      <span>{Math.round(cameraHFov)}deg</span>
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="180"
                      value={cameraHFov}
                      onChange={e => {
                        const h = parseInt(e.target.value);
                        const v = vFovFromH(h, cameraAspect);
                        updateCameraFov(selectedItem.id, h, v, cameraAspect);
                      }}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase flex justify-between">
                      <span>Vertical FOV</span>
                      <span>{Math.round(cameraVFov)}deg</span>
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="180"
                      value={cameraVFov}
                      onChange={e => {
                        const v = parseInt(e.target.value);
                        const h = hFovFromV(v, cameraAspect);
                        updateCameraFov(selectedItem.id, h, v, cameraAspect);
                      }}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase flex justify-between">
                      <span>Diagonal FOV</span>
                      <span>{Math.round(cameraDiag)}deg</span>
                    </label>
                    <input
                      type="range"
                      min="20"
                      max="180"
                      value={cameraDiag}
                      onChange={e => {
                        const diag = parseInt(e.target.value);
                        const { h, v } = fovFromDiagonal(diag, cameraAspect);
                        updateCameraFov(selectedItem.id, h, v, cameraAspect);
                      }}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase">Aspect Ratio</label>
                    <select
                      value={cameraAspect}
                      onChange={e => {
                        const aspect = parseFloat(e.target.value);
                        const v = vFovFromH(cameraHFov, aspect);
                        updateCameraFov(selectedItem.id, cameraHFov, v, aspect);
                      }}
                      className="w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"
                    >
                      <option value={16 / 9}>16:9 (Widescreen)</option>
                      <option value={4 / 3}>4:3 (Standard)</option>
                      <option value={1}>1:1 (Square)</option>
                    </select>
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs">
                    {[{ label: "Wide", value: 120 }, { label: "Standard", value: 80 }, { label: "Narrow", value: 45 }].map(preset => (
                      <button
                        key={preset.label}
                        onClick={() => {
                          const v = vFovFromH(preset.value, cameraAspect);
                          updateCameraFov(selectedItem.id, preset.value, v, cameraAspect);
                        }}
                        className="px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50"
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase flex justify-between">
                      <span>Range</span>
                      <span>{Math.round((selectedItem as CameraItem).range)}px</span>
                    </label>
                    <input
                      type="range"
                      min="50"
                      max="800"
                      value={(selectedItem as CameraItem).range}
                      onChange={e => updateItem(selectedItem.id, { range: parseInt(e.target.value) })}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase flex justify-between">
                      <span>Rotation</span>
                      <span>{Math.round(selectedItem.rotation)}deg</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="360"
                      value={selectedItem.rotation}
                      onChange={e => updateItem(selectedItem.id, { rotation: parseInt(e.target.value) })}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-400 uppercase flex justify-between">
                        <span>Pitch</span>
                        <span>{Math.round((selectedItem as CameraItem).pitch ?? DEFAULT_CAMERA_PITCH)}deg</span>
                      </label>
                      <input
                        type="range"
                        min="-60"
                        max="30"
                        value={(selectedItem as CameraItem).pitch ?? DEFAULT_CAMERA_PITCH}
                        onChange={e => updateItem(selectedItem.id, { pitch: parseInt(e.target.value) })}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-400 uppercase flex justify-between">
                        <span>Height</span>
                        <span>{Math.round((selectedItem as CameraItem).mount?.height ?? (selectedItem as CameraItem).height ?? 10)}ft</span>
                      </label>
                      <input
                        type="range"
                        min="4"
                        max="40"
                        value={(selectedItem as CameraItem).mount?.height ?? (selectedItem as CameraItem).height ?? 10}
                        onChange={e => setCameraMountHeight(selectedItem as CameraItem, parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase">Mount</label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          const pos = getCameraPlanPosition(selectedItem as CameraItem);
                          updateItem(selectedItem.id, {
                            x: pos.x,
                            y: pos.y,
                            mount: { type: "free", height: (selectedItem as CameraItem).mount?.height ?? (selectedItem as CameraItem).height ?? 10 }
                          });
                        }}
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${mountType === "free" ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "border-slate-200 text-slate-400 hover:bg-slate-50"
                          }`}
                      >
                        Free
                      </button>
                      <button
                        disabled={!buildingOptions.length}
                        onClick={() => attachCameraToNearestBuilding(selectedItem.id)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${mountType === "building" ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "border-slate-200 text-slate-400 hover:bg-slate-50"
                          } ${!buildingOptions.length ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        Building
                      </button>
                    </div>
                  </div>

                  {mountType === "building" && mountBuilding && (
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-400 uppercase">Building</label>
                        <select
                          value={mountBuilding.id}
                          onChange={e => {
                            const buildingId = e.target.value;
                            updateItem(selectedItem.id, {
                              mount: {
                                type: "building",
                                buildingId,
                                edgeIndex: 0,
                                edgeT: 0.5,
                                height: (selectedItem as CameraItem).mount?.height ?? (selectedItem as CameraItem).height ?? 10
                              }
                            });
                          }}
                          className="w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"
                        >
                          {buildingOptions.map(building => (
                            <option key={building.id} value={building.id}>
                              {building.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-400 uppercase flex justify-between">
                          <span>Edge</span>
                          <span>#{mountEdgeIndex + 1}</span>
                        </label>
                        <input
                          type="range"
                          min="0"
                          max={Math.max(mountEdgeCount - 1, 0)}
                          value={mountEdgeIndex}
                          onChange={e => {
                            const edgeIndex = parseInt(e.target.value);
                            updateCameraMount(selectedItem.id, { edgeIndex, edgeT: 0.5, buildingId: mountBuilding.id, type: "building" });
                          }}
                          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-400 uppercase flex justify-between">
                          <span>Position Along Edge</span>
                          <span>{Math.round(mountEdgeT * 100)}%</span>
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.01"
                          value={mountEdgeT}
                          onChange={e => updateCameraMount(selectedItem.id, { edgeT: parseFloat(e.target.value), buildingId: mountBuilding.id, type: "building" })}
                          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase">Description</label>
                    <textarea
                      value={(selectedItem as CameraItem).description}
                      onChange={e => updateItem(selectedItem.id, { description: e.target.value })}
                      className="w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none h-20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase">Connector Dash Size</label>
                    <input
                      type="range"
                      min="1"
                      max="20"
                      value={(selectedItem as CameraItem).connectorDashSize || 3}
                      onChange={e => updateItem(selectedItem.id, { connectorDashSize: parseInt(e.target.value) })}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    />
                  </div>
                  </div>
                </details>
                </>
              )}

              {selectedItem.type !== "image" && selectedItem.type !== "parking" && COLORS[selectedItem.type as keyof typeof COLORS] && (
                <div className={panelSection}>
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Color Code</label>
                  <div className="flex flex-wrap gap-2">
                    {COLORS[selectedItem.type as keyof typeof COLORS].map(color => (
                      <button
                        key={color}
                        onClick={() => updateItem(selectedItem.id!, { color })}
                        className={`w-8 h-8 rounded-full border-2 transition-all ${(selectedItem as any).color === color ? "border-slate-800 scale-110" : "border-transparent hover:scale-105"}`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className={panelSection}>
                <button
                  onClick={() => deleteItem(selectedItem.id)}
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-red-500/30 text-red-400 hover:text-red-200 hover:bg-red-500/10 transition-colors text-sm font-semibold"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete {getItemTypeLabel(selectedItem.type)}
                </button>
              </div>
            </div>
          ) : showProjectSettings ? (
            <div className="p-6 flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <MapIcon className="w-5 h-5 text-slate-400" />
                  <h2 className="font-bold text-lg text-slate-200">Plan Settings</h2>
                </div>
                <button
                  onClick={() => setIsRightPanelOpen(false)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  title="Close Panel"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className={panelSection}>
                <label className="text-xs font-semibold text-slate-400 uppercase">Plan Name</label>
                <input
                  type="text"
                  value={projectName}
                  onChange={e => setProjectName(e.target.value)}
                  className="w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"
                />
              </div>

              <div className={panelSectionLoose}>
                <h3 className="text-sm font-semibold text-slate-300">Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Cameras", value: items.filter(item => item.type === "camera").length },
                    { label: "Buildings", value: items.filter(item => item.type === "building").length },
                    { label: "Trees", value: items.filter(item => item.type === "tree").length },
                    { label: "Vehicles", value: items.filter(item => item.type === "parking").length }
                  ].map(stat => (
                    <div key={stat.label} className="rounded-lg border border-white/10 bg-white/5 p-3">
                      <p className="text-xs uppercase tracking-wide text-slate-400">{stat.label}</p>
                      <p className="text-lg font-semibold text-slate-200">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={panelSectionLoose}>
                <h3 className="text-sm font-semibold text-slate-300">Building Label Defaults</h3>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase">Font Family</label>
                  <input
                    list="building-font-families"
                    value={buildingLabelDefaults.fontFamily}
                    onChange={e => setBuildingLabelDefaults({ ...buildingLabelDefaults, fontFamily: e.target.value })}
                    className="w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"
                  />
                  <datalist id="building-font-families">
                    {FONT_FAMILIES.map(font => (
                      <option key={font} value={font} />
                    ))}
                  </datalist>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase flex justify-between">
                      <span>Font Size</span>
                      <span>{buildingLabelDefaults.fontSize}px</span>
                    </label>
                    <input
                      type="range"
                      min="8"
                      max="32"
                      value={buildingLabelDefaults.fontSize}
                      onChange={e => setBuildingLabelDefaults({ ...buildingLabelDefaults, fontSize: parseInt(e.target.value) })}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase">Font Weight</label>
                    <select
                      value={buildingLabelDefaults.fontWeight}
                      onChange={e => setBuildingLabelDefaults({ ...buildingLabelDefaults, fontWeight: parseInt(e.target.value) })}
                      className="w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"
                    >
                      {FONT_WEIGHTS.map(weight => (
                        <option key={weight} value={weight}>{weight}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className={panelSectionLoose}>
                <h3 className="text-sm font-semibold text-slate-300">Canvas</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase">Width</label>
                    <input
                      type="number"
                      min="400"
                      max="3000"
                      value={canvasSize.width}
                      onChange={e => setCanvasSize({ ...canvasSize, width: parseInt(e.target.value) })}
                      className="w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase">Height</label>
                    <input
                      type="number"
                      min="300"
                      max="3000"
                      value={canvasSize.height}
                      onChange={e => setCanvasSize({ ...canvasSize, height: parseInt(e.target.value) })}
                      className="w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase flex justify-between">
                    <span>Grid Size</span>
                    <span>{gridSize}px</span>
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="80"
                    value={gridSize}
                    onChange={e => changeGridSize(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                </div>

                <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm">
                  <span className="text-slate-300">Show Grid</span>
                  <button
                    onClick={() => setShowGrid(prev => !prev)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${showGrid ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-400"}`}
                  >
                    {showGrid ? "On" : "Off"}
                  </button>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm">
                  <span className="text-slate-300">Snap to Grid</span>
                  <button
                    onClick={() => setSnapToGrid(prev => !prev)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${snapToGrid ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-400"}`}
                  >
                    {snapToGrid ? "On" : "Off"}
                  </button>
                </div>

                <button
                  onClick={handleClearCanvas}
                  className="w-full py-2 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50"
                >
                  Clear Canvas
                </button>
              </div>

              <div className={panelSectionLoose}>
                <h3 className="text-sm font-semibold text-slate-300">Background Map</h3>
                <p className="text-xs text-slate-400">Adjust the uploaded map to align with the grid.</p>
                <p className="text-[10px] text-slate-500">Tip: Hold Alt and drag in plan view to pan. Use Move Map to reposition the map image.</p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setMapMoveMode(v => !v)}
                    className={`px-2 py-1 rounded text-[10px] font-semibold border ${mapMoveMode
                      ? "border-emerald-400/40 bg-emerald-500/20 text-emerald-200"
                      : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                      }`}
                  >
                    {mapMoveMode ? "Move Map: On" : "Move Map"}
                  </button>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase">Map Opacity</label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={bgSettings.opacity}
                    onChange={e => setBgSettings({ ...bgSettings, opacity: parseFloat(e.target.value) })}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase">Map Width</label>
                    <input
                      type="number"
                      value={bgSettings.width}
                      onChange={e => setBgSettings({ ...bgSettings, width: parseInt(e.target.value) })}
                      className="w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase">Map Height</label>
                    <input
                      type="number"
                      value={bgSettings.height}
                      onChange={e => setBgSettings({ ...bgSettings, height: parseInt(e.target.value) })}
                      className="w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase">Offset X</label>
                    <input
                      type="number"
                      value={bgSettings.x}
                      onChange={e => setBgSettings({ ...bgSettings, x: parseInt(e.target.value) })}
                      className="w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase">Offset Y</label>
                    <input
                      type="number"
                      value={bgSettings.y}
                      onChange={e => setBgSettings({ ...bgSettings, y: parseInt(e.target.value) })}
                      className="w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"
                    />
                  </div>
                </div>

                <button
                  onClick={handleFitBackground}
                  className="w-full py-2 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50"
                >
                  Fit Background to Canvas
                </button>
              </div>

              <div className={panelSectionLoose}>
                <h3 className="text-sm font-semibold text-slate-300">3D Visualization</h3>



                {/* Environment & Background Control */}
                <div className="space-y-3 mb-4 p-3 bg-white/5 rounded-lg border border-white/10">
                  <label className="text-xs font-semibold text-slate-400 block">Environment Background</label>

                  {/* Background Mode Toggle */}
                  <div className="flex gap-1 bg-white/5 p-0.5 rounded-lg border border-white/10">
                    <button
                      onClick={() => setBackgroundMode('flat')}
                      className={`flex-1 px-2 py-1 text-[10px] font-medium rounded transition-colors ${backgroundMode === 'flat' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-300'}`}
                    >
                      Flat Image
                    </button>
                    <button
                      onClick={() => setBackgroundMode('panorama')}
                      className={`flex-1 px-2 py-1 text-[10px] font-medium rounded transition-colors ${backgroundMode === 'panorama' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-300'}`}
                    >
                      360° Panorama
                    </button>
                  </div>

                  {/* Upload Button */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => bg3dInputRef.current?.click()}
                      className="flex-1 py-1.5 px-3 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors"
                    >
                      {backgroundMode === 'panorama' ? 'Upload HDRI/Panorama' : 'Upload Background'}
                    </button>
                    {sceneBackgroundImg && (
                      <button
                        onClick={() => setSceneBackgroundImg(null)}
                        className="py-1.5 px-3 rounded-md bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-400 border border-white/10 text-xs transition-colors"
                        title="Clear Background"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {backgroundMode === 'panorama' && (
                    <p className="text-[10px] text-slate-500">
                      Upload a 360° equirectangular image (2:1 aspect ratio) for immersive backgrounds.
                      Get free HDRIs from <a href="https://polyhaven.com/hdris" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">Poly Haven</a>
                    </p>
                  )}
                </div>





                {/* Frustum Settings & Declutter */}
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-slate-400">Show Vision Cones</label>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={frustumSettings.visible}
                      onChange={e => setFrustumSettings({ ...frustumSettings, visible: e.target.checked })}
                    />
                    <div className="w-9 h-5 bg-slate-700/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600"></div>
                  </label>
                </div>

                {frustumSettings.visible && (
                  <div className="space-y-3 mt-2 pl-2 border-l border-white/5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs text-slate-500">Active Cam Only</label>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={frustumSettings.showAll === false}
                          onChange={e => setFrustumSettings({ ...frustumSettings, showAll: !e.target.checked })}
                        />
                        <div className="w-7 h-4 bg-slate-700/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-indigo-600"></div>
                      </label>
                    </div>

                    {/* Opacity Sliders */}
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <label className="text-[10px] text-slate-500">Opacity</label>
                        <span className="text-[10px] text-slate-400">{Math.round(frustumSettings.opacity * 100)}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={frustumSettings.opacity}
                        onChange={e => setFrustumSettings({ ...frustumSettings, opacity: parseFloat(e.target.value) })}
                        className="w-full accent-indigo-500 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <label className="text-[10px] text-slate-500">Edges</label>
                        <span className="text-[10px] text-slate-400">{Math.round(frustumSettings.edgeOpacity * 100)}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={frustumSettings.edgeOpacity}
                        onChange={e => setFrustumSettings({ ...frustumSettings, edgeOpacity: parseFloat(e.target.value) })}
                        className="w-full accent-indigo-500 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className={panelSectionLoose}>
                <h3 className="text-sm font-semibold text-slate-300">3D Snapshots</h3>
                {viewMode !== "iso3d" ? (
                  <p className="text-xs text-slate-400">Switch to Isometric view to capture snapshots.</p>
                ) : snapshots.length === 0 ? (
                  <p className="text-xs text-slate-400">No snapshots yet. Click “Snapshot” in the 3D view.</p>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    {snapshots.map(snapshot => (
                      <div key={snapshot.id} className="rounded-lg border border-slate-200 overflow-hidden bg-white">
                        <img src={snapshot.dataUrl} alt="Snapshot" className="w-full h-24 object-cover" />
                        <div className="p-2">
                          <p className="text-[10px] text-slate-400">{snapshot.createdAt}</p>
                          <button
                            onClick={() => handleExportSnapshot(snapshot.dataUrl, `security_snapshot_${snapshot.id}.png`)}
                            className="mt-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700"
                          >
                            Download
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="p-6 flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h2 className="font-bold text-lg text-slate-200">No Selection</h2>
                <button
                  onClick={() => setIsRightPanelOpen(false)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  title="Close Panel"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className={panelSectionLoose}>
                <p className="text-sm text-slate-400">Select an item to edit its settings or open plan settings.</p>
                <button
                  onClick={() => {
                    setRightPanelMode("project");
                    setIsRightPanelOpen(true);
                  }}
                  className="w-full py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium text-slate-200 transition-colors"
                >
                  Open Plan Settings
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
