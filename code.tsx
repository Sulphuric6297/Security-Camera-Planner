
import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import JSZip from "jszip";

import proj4 from "proj4";

import {
  Camera,
  Square,
  Eye,
  Ruler,
  Move,
  Trash2,
  Download,
  Type,
  Trees,
  Car,
  Unlock,
  Lock,
  Map as MapIcon,
  X,
  LayoutGrid,
  Plus,

  Undo,
  Redo,
  Maximize,
  Mountain,
  WandSparkles,
  LoaderCircle,
  MapPin,
  SquareDashed,
  ChevronDown,
  Target
} from "lucide-react";
import GridLayoutBase from "react-grid-layout";
// react-grid-layout v2 ships newer props than the bundled v1 type definitions describe.
const GridLayout = GridLayoutBase as unknown as React.ComponentType<any>;
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { NVRCard } from "./src/components/NVRCard";
import { useProjectField, projectRef } from "./src/state/project";
import { SitePickerMap } from "./src/components/SitePickerMap";
import { CameraSetupPanel } from "./src/components/CameraSetupPanel";
import { AppHeader, WorkflowStepId } from "./src/components/AppHeader";
import { StepPanel } from "./src/components/StepPanel";
import { ToolPanel, type ToolDefaults } from "./src/components/ToolPanel";
import { ShortcutsDialog } from "./src/components/ShortcutsDialog";
import { FloatingWindow } from "./src/components/FloatingWindow";
import { CameraLook } from "./src/components/CameraLook";
import { applyCameraSettings, pickCameraSettings, slideAlongWall, touchesCameraSettings, type CameraSettings } from "./src/lib/cameraProfile";
import { CoveragePanel, GOAL_LABEL, LEVEL_LABEL, REASON_TEXT, STATUS_COLOR, targetStatus } from "./src/components/CoveragePanel";
import { buildReportHtml, camerasCsv, compassFromRotation, type ReportCamera, type ReportSpot } from "./src/lib/report";
import { suggestCameras } from "./src/lib/suggest";
import { estimateStorage } from "./src/lib/recording";
import { blindSpotCells, cameraToTurn, evaluateTargets, type CoverageCamera, type Obstacle } from "./src/lib/coverage";
import { boundsOfPoints, type Bounds } from "./src/lib/view";
import { traceRoof } from "./src/lib/roofTrace";
import { CAMERA_WALL_SNAP_FT, COLORS, DEFAULT_BUILDING, DEFAULT_BUILDING_LABEL, DEFAULT_CAMERA_HEIGHT_FT, DEFAULT_IR_RANGE_FT, DEFAULT_CAMERA_PITCH, DEFAULT_CANVAS, FONT_FAMILIES, FONT_WEIGHTS, NVR_COLS, NVR_DEFAULT_H, NVR_DEFAULT_W, NVR_HEADER_FOOTER, NVR_MARGIN, NVR_MIN_ROW_HEIGHT, TERRAIN_BRUSH_MAX, TERRAIN_BRUSH_MIN, TERRAIN_FALLOFF_MAX, TERRAIN_FALLOFF_MIN, clamp, generateId, mountHeightForBuilding } from "./src/constants";
import { DEFAULT_RESOLUTION_WIDTH, LENS_PRESETS, RESOLUTION_PRESETS, DORI_LEVELS, doriLevelAt, getCameraAspectValue, getCameraHFov, getCameraResolution, getDoriDistances, getGroundCoverage, hFovForDensity, suggestPitchForDistance, vFovFromH } from "./src/lib/camera";
import { BuildingCandidate, OsmBuilding, findBuildingCandidates } from "./src/lib/geo/buildings";
import { shiftGeoPoints } from "./src/lib/geo/align";
import { TARGET_KINDS, VEHICLE_SIZES, createItem, isOwnBuilding, nextCameraIndex, migrateItems, vehicleDimensions, type NewItemKind, type VehicleType } from "./src/lib/items";
import { alignToImageUrl, alignToSatelliteTiles } from "./src/lib/geo/alignImagery";
import { detectSiteObjects } from "./src/lib/geo/detectSite";
import { ElevationOverlayMode, FEET_PER_METER, GeoBounds, SITE_MAX_WIDTH_FT, getGeoBounds, selectionFromBounds } from "./src/lib/geo/core";
import { fetchBestElevationGrid } from "./src/lib/geo/elevation";
import { PlaceSuggestion, fetchPlaceSuggestions, resolveSiteLocation } from "./src/lib/geo/geocode";
import { getGeoTiffCorners } from "./src/lib/geo/geotiff";
import { MAP_IMAGERY_SOURCES, MapImagerySource, fetchMapImagery } from "./src/lib/geo/imagery";
import { getPointsBounds, pointInPolygonXY, insertVertexAtLongestEdge, insertVertexAtNearestEdge, rectanglePoints, scalePointsToSize, clipPolygonToRect, polygonArea } from "./src/lib/geometry";
import { AUTOSAVE_KEY, type PlanMeta, idbGet, idbSet, listPlans, loadPlan, removePlan, storePlan } from "./src/lib/storage";
import { ELEVATION_RAMP, computeContourSegments, elevationColor, getContourInterval, getTerrainStats } from "./src/lib/terrain";
import { getItemTypeLabel, resolveVehicleType } from "./src/three/models";
import { SiteViewport } from "./src/viewport/SiteViewport";
import type { SiteView } from "./src/viewport/SiteView";
import type { ViewCallbacks, ViewDoc, ViewTool } from "./src/viewport/types";
import { planSvg } from "./src/lib/planSvg";
import { cameraPlanPosition, heightAt, nearestWall } from "./src/lib/planGeom";
import { cableRuns, cableSummary } from "./src/lib/cabling";
import { BaseItem, BuildingItem, CameraItem, CanvasItem, DemAlignTool, DemData, HistoryState, ImageItem, LabelItem, ParkingItem, TargetItem, TerrainTool, ToolMode, TreeItem, ViewMode } from "./src/types";

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
  const [importTreesCars, setImportTreesCars] = useState(true);
  // Parked cars from the photo: experimental (many false finds around homes), off unless turned on.
  const [importCars, setImportCars] = useState(false);
  const [buildingCandidates, setBuildingCandidates] = useState<BuildingCandidate[]>([]);
  const [buildingScan, setBuildingScan] = useState<{ state: "idle" | "loading" | "done" | "error"; message: string }>({ state: "idle", message: "" });
  // Lining the found footprints up with the photo: automatic, with manual nudges as a fallback.
  const [buildingAlign, setBuildingAlign] = useState<{ state: "idle" | "working" | "done" | "none"; movedM: number; nudged: boolean }>({ state: "idle", movedM: 0, nudged: false });
  const originalCandidatesRef = useRef<BuildingCandidate[]>([]);
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
  const [demTransformDrag, setDemTransformDrag] = useState<{
    mode: "move" | "scale" | "rotate";
    startMouse: { x: number; y: number };
    startTransform: { x: number; y: number; scale: number; rotation: number };
  } | null>(null);
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
  // View preference: the aerial photo on roofs (off = solid roofs, which read better).
  const [roofPhoto, setRoofPhoto] = useState(() => {
    try { return localStorage.getItem("scp.roofPhoto") === "1"; } catch { return false; }
  });
  useEffect(() => {
    try { localStorage.setItem("scp.roofPhoto", roofPhoto ? "1" : "0"); } catch { /* ignore */ }
  }, [roofPhoto]);
  // Layout: the workflow sidebar on the left can be hidden for more map.
  const [sidebarOpen, setSidebarOpen] = useState(true);
  // What the placing tools create (chosen in the tool panel before clicking).
  const [toolDefaults, setToolDefaults] = useState<ToolDefaults>({ treeSize: "medium", treeType: "deciduous", vehicleType: "sedan", targetKind: "door" });
  // Inspector: rarely used settings stay folded away until asked for.
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  // Coverage: blind-spot overlay and "aim this camera at the next click".
  const [showBlindSpots, setShowBlindSpots] = useState(false);
  const [aimingCameraId, setAimingCameraId] = useState<string | null>(null);
  // Coverage at night: every camera limited to its infrared reach.
  const [nightCoverage, setNightCoverage] = useState(false);
  // Recorder storage estimate (Report step and the PDF).
  const [recordDays, setRecordDays] = useState(30);
  const [recordMode, setRecordMode] = useState<"continuous" | "motion">("continuous");

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
  if (typeof window !== "undefined") {
    // Read access for the automated test suite: undo stack position.
    (window as any).__scpHistory = () => ({ index: historyIndexRef.current, length: historyRef.current.length });
    (window as any).__scpSelect = (id: string | null) => setSelectedId(id);
  }
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
    // The Monitor Wall layout follows the camera list automatically; it shouldn't create undo steps of its own.
    const key = JSON.stringify({ ...state, nvrLayout: undefined, backgroundImg: imageKey(state.backgroundImg), sceneBackgroundImg: imageKey(state.sceneBackgroundImg) });
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
    suppressDemAutoApply();
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

  // True while a drag on the map (move, reshape, aim, brush) is in progress: undo steps and the
  // camera preview wait until it ends.
  const [interacting, setInteracting] = useState(false);
  const interactingRef = useRef(false);

  // NVR Layout State
  const [nvrLayout, setNvrLayout] = useProjectField("nvrLayout");
  const [povCamId, setPovCamId] = useState<string | null>(null);
  // Looking through a camera fills the window; its settings slide in only when asked for.
  const [povSettings, setPovSettings] = useState(false);
  // Which plan this is, so starting or opening another keeps it in "Recent plans".
  const [planId, setPlanId] = useState(() => generateId());
  const [recentPlans, setRecentPlans] = useState<PlanMeta[]>([]);
  // Night (infrared) while looking through a camera; back to day on leaving.
  const [povNight, setPovNight] = useState(false);
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
  const getGridHeight = (x: number, y: number, map = terrainHeights) => heightAt(map, gridSize, x, y);

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

  // "32 ft from Camera 2: recognize" for the point under the cursor while a camera is selected.
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
    if (dist < 3) {
      el.style.opacity = "0";
      return;
    }
    el.style.opacity = "1";
    el.textContent = `${Math.round(dist)} ft from ${cam.label}: ${level ? level.label.toLowerCase() : "too far to see"}`;
  };

  const updateElevationReadout = (x: number, y: number) => {
    const el = elevationReadoutRef.current;
    if (!el) return;
    // Only while elevation is on show (or being shaped); otherwise it's noise.
    if (x < 0 || y < 0 || x > canvasSize.width || y > canvasSize.height || !hasTerrain || (elevationOverlay === "off" && !isTerrainMode)) {
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
    if (demAutoApply) setDemAutoApply(false);
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
    const bg = bgSettingsRef.current;
    if (backgroundImgRef.current) {
      return { x: bg.x, y: bg.y, width: bg.width, height: bg.height };
    }
    const canvas = canvasSizeRef.current;
    return { x: 0, y: 0, width: canvas.width, height: canvas.height };
  };

  // Scale the whole plan (canvas, map placement, every item's position and plan size) by k.
  // Heights (walls, mounts) are already feet and stay as they are.
  const rescalePlan = (k: number) => {
    const sp = (p: { x: number; y: number }) => ({ x: p.x * k, y: p.y * k });
    const canvas = canvasSizeRef.current;
    const bg = bgSettingsRef.current;
    const nextCanvas = { width: Math.round(canvas.width * k), height: Math.round(canvas.height * k) };
    const nextBg = { ...bg, x: bg.x * k, y: bg.y * k, width: bg.width * k, height: bg.height * k };
    const nextItems = itemsRef.current.map(item => {
      const base: any = { ...item, x: item.x * k, y: item.y * k };
      if ((item as any).labelOffset) base.labelOffset = sp((item as any).labelOffset);
      switch (item.type) {
        case "building":
          return { ...base, width: item.width * k, height: item.height * k, points: item.points?.map(sp) };
        case "parking":
        case "image":
          return { ...base, width: item.width * k, height: item.height * k };
        case "tree":
          return { ...base, radius: item.radius * k };
        case "camera":
          return { ...base, range: item.range * k };
        case "label":
          return { ...base, fontSize: item.fontSize * k };
        default:
          return base;
      }
    }) as CanvasItem[];
    canvasSizeRef.current = nextCanvas;
    bgSettingsRef.current = nextBg;
    setItems(nextItems);
    setTerrainHeights({});
    requestFit(null);
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
    setBuildingAlign({ state: "idle", movedM: 0, nudged: false });
    const timer = window.setTimeout(async () => {
      try {
        const result = await findBuildingCandidates(siteBounds);
        if (cancelled) return;
        setBuildingCandidates(result.candidates);
        originalCandidatesRef.current = result.candidates;
        if (!result.osmOk && !result.detectedOk) {
          setBuildingScan({ state: "error", message: "Couldn't reach the building services. You can still import and draw buildings yourself." });
          return;
        }
        setBuildingScan({ state: "done", message: "" });
        // Footprint datasets are often a few meters off the photo: line them up automatically.
        if (result.candidates.length === 0) return;
        setBuildingAlign({ state: "working", movedM: 0, nudged: false });
        const aligned = await alignToSatelliteTiles(result.candidates, siteBounds).catch(() => null);
        if (cancelled) return;
        if (aligned && aligned.stats.adjusted > 0) {
          // Keep the user's keep/remove choices made while this ran.
          setBuildingCandidates(prev => aligned.items.map(a => ({ ...a, selected: prev.find(p => p.id === a.id)?.selected ?? a.selected })));
          setBuildingAlign({ state: "done", movedM: aligned.stats.movedMeters, nudged: false });
        } else {
          setBuildingAlign({ state: "none", movedM: 0, nudged: false });
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

  // Manual fallback: move every found footprint by a small step (meters east/north).
  const nudgeBuildingCandidates = (eastM: number, northM: number) => {
    setBuildingCandidates(prev => prev.map(c => ({ ...c, points: shiftGeoPoints(c.points, eastM, northM) })));
    setBuildingAlign(a => ({ ...a, nudged: true }));
  };
  const resetBuildingCandidatePositions = () => {
    const original = new Map(originalCandidatesRef.current.map(c => [c.id, c.points]));
    setBuildingCandidates(prev => prev.map(c => ({ ...c, points: original.get(c.id) ?? c.points })));
    setBuildingAlign({ state: "none", movedM: 0, nudged: true });
  };

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
      const full = b.points.map(toPlan);
      const fullBox = getPointsBounds(full);
      const fcx = fullBox.minX + fullBox.width / 2;
      const fcy = fullBox.minY + fullBox.height / 2;
      // Keep buildings whose center is on the map, cut at the map edge (the terrain ends there).
      if (fcx < area.x || fcy < area.y || fcx > area.x + area.width || fcy > area.y + area.height) return;
      const world = clipPolygonToRect(full, area);
      // Skip slivers.
      if (world.length < 3 || polygonArea(world) < 30 * unitsPerFoot * unitsPerFoot) return;
      const box = getPointsBounds(world);
      const cx = box.minX + box.width / 2;
      const cy = box.minY + box.height / 2;
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
    // A new map replaces the plan's extent; ask before stranding the user's own items on it.
    const ownItems = items.filter(i => !(i.type === "building" && (i as BuildingItem).importSource === "osm"));
    if (imagery !== "keep" && ownItems.length > 0 && !planGeoRef) {
      const clearThem = window.confirm(
        `Your plan already has ${ownItems.length} item${ownItems.length === 1 ? "" : "s"}. The new site map will replace the current map and scale.\n\nOK = start fresh on the new site (remove them)\nCancel = keep them (you may need to move them)`
      );
      if (clearThem) {
        setItems(prev => prev.filter(i => i.type === "building" && (i as BuildingItem).importSource === "osm"));
        setSelectedId(null);
      }
    }
    setSiteLocation(location);
    try {
      if (imagery === "keep") {
        // Your own map: rescale the whole plan so 1 unit = 1 ft, like an imported site, so camera
        // ranges, coverage zones and every distance readout are true feet.
        const current = getElevationArea();
        const feetPerUnit = selection.widthFt / Math.max(current.width, 1);
        if (Math.abs(feetPerUnit - 1) > 0.02) rescalePlan(feetPerUnit);
      }
      let area = getElevationArea();
      let canvas = canvasSizeRef.current;
      let realWidthFt = imagery === "keep" ? area.width : selection.widthFt;
      let realHeightFt = area.height * (realWidthFt / Math.max(area.width, 1));
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
        requestFit(null);
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
      let osm = await buildingsJob;
      // Fine-tune against the exact image now in the plan (it can differ from the picker's tiles),
      // unless the user lined them up by hand.
      const importedImage = backgroundImgRef.current;
      if (osm && osm.length && imagery === "satellite" && importedImage && !buildingAlign.nudged) {
        const refined = await alignToImageUrl(osm, geoBounds, importedImage, buildingAlign.state === "done" ? 4 : 8).catch(() => null);
        if (refined) osm = refined.items;
      }
      let buildingText = "";
      if (importBuildings) {
        if (osm === null) {
          buildingText = " Couldn't reach the building services. Draw buildings over the satellite image with the Building tool.";
        } else {
          const newBuildings = buildingsFromOsm(osm, geoBounds, area, unitsPerFoot);
          // The building at the searched address is the user's (cameras go on it); others are neighbors.
          {
            const at = { x: area.x + area.width / 2, y: area.y + area.height / 2 };
            const outline = (b: BuildingItem) => (b.points ?? []).map(p => ({ x: b.x + p.x, y: b.y + p.y }));
            const home = newBuildings.find(b => pointInPolygonXY(at, outline(b)))
              ?? newBuildings.filter(b => Math.hypot(b.x - at.x, b.y - at.y) < 60 * unitsPerFoot).sort((a, b) => Math.hypot(a.x - at.x, a.y - at.y) - Math.hypot(b.x - at.x, b.y - at.y))[0];
            newBuildings.forEach(b => { b.mine = b === home; });
          }
          // Take each roof's real shape from the photo (Ls, Ts, notches) where it clearly matches.
          if (imagery === "satellite" && importedImage) {
            setElevationStatus({ state: "loading", message: "Matching buildings to the roofs on the photo…" });
            for (const b of newBuildings.slice(0, 80)) {
              const outline = await photoOutlineFor(b, unitsPerFoot).catch(() => null);
              if (outline) Object.assign(b, reshapeKeepingRotation(b, outline));
            }
          }
          setItems(prev => {
            // Re-import: keep identity and user edits (height, name, color) of buildings that are still
            // there, so cameras mounted on them stay attached.
            const oldImported = prev.filter(item => item.type === "building" && (item as BuildingItem).importSource === "osm") as BuildingItem[];
            const used = new Set<string>();
            const merged = newBuildings.map(nb => {
              const worldPoly = (nb.points ?? []).map(p => ({ x: nb.x + p.x, y: nb.y + p.y }));
              const match = oldImported.find(ob => !used.has(ob.id) && pointInPolygonXY({ x: ob.x, y: ob.y }, worldPoly));
              if (!match) return nb;
              used.add(match.id);
              return { ...nb, id: match.id, wallHeight: match.wallHeight ?? nb.wallHeight, label: match.label || nb.label, color: match.color, mine: match.mine ?? nb.mine };
            });
            const keptIds = new Set(merged.map(b => b.id));
            const rest = prev
              .filter(item => !(item.type === "building" && (item as BuildingItem).importSource === "osm"))
              .map(item => {
                const cam = item as CameraItem;
                if (item.type !== "camera" || cam.mount?.type !== "building" || !cam.mount.buildingId) return item;
                const stillImported = oldImported.some(b => b.id === cam.mount!.buildingId);
                if (!stillImported || keptIds.has(cam.mount.buildingId)) return item;
                // Its building is gone: leave the camera free-standing where it was.
                const pos = getCameraPlanPosition(cam);
                return { ...cam, x: pos.x, y: pos.y, mount: { type: "free" as const, edgeT: 0.5, height: cam.mount.height } };
              });
            return [...rest, ...merged];
          });
          // Show the property: zoom to the buildings near the middle of the area (the searched address).
          const mid = { x: area.x + area.width / 2, y: area.y + area.height / 2 };
          const nearby = newBuildings.filter(b => Math.hypot(b.x - mid.x, b.y - mid.y) < 150 * unitsPerFoot);
          const near = boundsOfPoints(nearby.flatMap(b => (b.points ?? []).map(p => ({ x: b.x + p.x, y: b.y + p.y }))));
          if (near) requestFit(near, { margin: 1.4, minSpan: 220 * unitsPerFoot });
          buildingText = newBuildings.length > 0
            ? ` Added ${newBuildings.length} building${newBuildings.length === 1 ? "" : "s"}.`
            : " No buildings were added. Draw them over the satellite image with the Building tool.";
        }
      }

      // Trees (and, if turned on, parked cars) found on the photo, replacing ones found by an earlier import.
      let objectsText = "";
      if ((importTreesCars || importCars) && imagery === "satellite" && importedImage) {
        setElevationStatus({ state: "loading", message: importCars ? "Finding trees and parked cars on the photo…" : "Finding trees on the photo…" });
        const buildingsNow = currentItemsRef.current.filter(i => i.type === "building") as BuildingItem[];
        const found = await detectSiteObjects(importedImage, { x: 0, y: 0, width: canvas.width, height: canvas.height }, unitsPerFoot, buildingsNow, importCars).catch(err => {
          console.warn("Tree/car detection failed", err);
          return null;
        });
        if (found) {
          if (!importTreesCars) found.trees = [];
          setItems(prev => [...prev.filter(i => !((i.type === "tree" || i.type === "parking") && (i as TreeItem | ParkingItem).importSource === "photo")), ...found.trees, ...found.vehicles]);
          const parts = [
            found.trees.length ? `${found.trees.length} tree${found.trees.length === 1 ? "" : "s"}` : "",
            found.vehicles.length ? `${found.vehicles.length} parked car${found.vehicles.length === 1 ? "" : "s"}` : ""
          ].filter(Boolean);
          if (parts.length) objectsText = ` Placed ${parts.join(" and ")} found on the photo; remove any that are wrong.`;
        }
      }

      const reliefFt = (result.max - result.min) * FEET_PER_METER;
      const reliefText = reliefFt < 1
        ? "Nearly flat (under 1 ft of change)."
        : `${Math.round(reliefFt)} ft of elevation change${exaggeration !== 1 ? ` (shown ${exaggeration}× taller)` : ""}.`;
      const details = `${reliefText}${imagerySource ? ` Imagery: ${imagerySource}.` : ""} Elevation: ${result.source}.${partialImagery ? " Some map tiles were unavailable." : ""}`;
      const summary = `Site imported.${buildingText}${objectsText}`;
      setElevationStatus({ state: "done", message: `${summary} ${details}` });
      setSiteDetails(details);
      // Straight to the plan: the summary stays up a while, with a way into 3D.
      setShowElevationDialog(false);
      setViewMode("plan");
      showExportNotice(summary, "success", { label: "View in 3D", run: () => setViewMode("iso3d") }, 15000);
      window.setTimeout(() => saveHistory(undefined, terrainHeightsRef.current), 400);
    } catch (err) {
      console.error("Failed to import site", err);
      setElevationStatus({ state: "error", message: err instanceof Error ? err.message : "Couldn't import the site." });
    }
  };

  // Terrain is stored per grid vertex, so changing the grid must resample it (or re-apply the DEM).
  const changeGridSize = (next: number) => {
    if (!Number.isFinite(next) || next <= 0 || next === gridSize) return;
    if (Object.keys(terrainHeights).length > 0) {
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
  // Loading a project / undo / import set DEM state but already carry the right terrain (possibly
  // hand-sculpted). Suppress the auto re-apply briefly so it doesn't overwrite that terrain.
  const suppressDemApplyUntilRef = useRef(0);
  const suppressDemAutoApply = () => { suppressDemApplyUntilRef.current = Date.now() + 2000; };
  useEffect(() => {
    if (!demData || !demAutoApply) return;
    if (Date.now() < suppressDemApplyUntilRef.current) return;
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
    // Re-apply only when the DEM settings themselves change (not on canvas/grid changes, which resample).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [demData, demScale, demOffset, demNormalize, demTransform, demAutoApply]);

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
  useEffect(() => { terrainToolRef.current = terrainTool; }, [terrainTool]);
  useEffect(() => { terrainBrushSizeRef.current = terrainBrushSize; }, [terrainBrushSize]);
  useEffect(() => { terrainBrushStrengthRef.current = terrainBrushStrength; }, [terrainBrushStrength]);
  useEffect(() => { terrainBrushFalloffRef.current = terrainBrushFalloff; }, [terrainBrushFalloff]);
  useEffect(() => { terrainFlattenTargetRef.current = terrainFlattenTarget; }, [terrainFlattenTarget]);
  useEffect(() => { terrainFlattenSampleRef.current = terrainFlattenSample; }, [terrainFlattenSample]);
  useEffect(() => { demPreviewRef.current = demPreview; }, [demPreview]);
  const terrainHoverRef = useRef<{ pointX: number; pointZ: number } | null>(null);

  const demMiniRef = useRef<SVGSVGElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const elementImageInputRef = useRef<HTMLInputElement>(null);
  const projectInputRef = useRef<HTMLInputElement>(null);
  const demInputRef = useRef<HTMLInputElement>(null);

  const [vertexInsertMode, setVertexInsertMode] = useState(false);
  const [showCameraPreview, setShowCameraPreview] = useState(true);
  // Width of the floating camera view window (remembered per browser).
  const [previewWidth, setPreviewWidth] = useState(() => {
    try { return Number(localStorage.getItem("scp.cameraViewWidth")) || 420; } catch { return 420; }
  });
  useEffect(() => {
    try { localStorage.setItem("scp.cameraViewWidth", String(previewWidth)); } catch { /* ignore */ }
  }, [previewWidth]);
  // Steps the user finished (with "Next", or by downloading the report), remembered per browser.
  const [completedSteps, setCompletedSteps] = useState<WorkflowStepId[]>(() => {
    try { return JSON.parse(localStorage.getItem("scp.completedSteps") || "[]"); } catch { return []; }
  });
  useEffect(() => {
    try { localStorage.setItem("scp.completedSteps", JSON.stringify(completedSteps)); } catch { /* ignore */ }
  }, [completedSteps]);
  // Which workflow step's panel is showing (null = follow progress: the first unfinished step).
  const [activeStepChoice, setActiveStepChoice] = useState<WorkflowStepId | null>(null);
  // Where the imported site's imagery and elevation came from (shown on the Site step).
  const [siteDetails, setSiteDetails] = useState<string | null>(null);
  const [showShortcuts, setShowShortcuts] = useState(false);
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
    action?: { label: string; run: () => void };
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
    if (interactingRef.current) return;
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
  }, [items, interacting]);

  // Environment background setup


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
  }, [items, planId, backgroundImg, bgSettings, canvasSize, exportList, projectName, frustumSettings, sceneBackgroundImg, backgroundMode, nvrLayout, terrainHeights, gridSize, showGrid, snapToGrid, siteLocation, siteBounds, planGeoRef, elevationOverlay, buildingLabelDefaults, demData, demScale, demOffset, demTransform]);

  // Ref for camera preview canvas
  const cameraPreviewRef = useRef<HTMLCanvasElement>(null);
  const bgImageRef = useRef<HTMLImageElement | null>(null);

  const getBuildingPoints = (building: BuildingItem) =>
    building.points && building.points.length >= 3 ? building.points : rectanglePoints(building.width, building.height);

  const getBuildingLabelFont = (building: BuildingItem) => ({
    fontFamily: building.labelFontFamily ?? buildingLabelDefaults.fontFamily,
    fontSize: building.labelFontSize ?? buildingLabelDefaults.fontSize,
    fontWeight: building.labelFontWeight ?? buildingLabelDefaults.fontWeight
  });

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

  // On its wall (just outside it) when mounted on a building.
  const getCameraPlanPosition = (camera: CameraItem) => cameraPlanPosition(camera, items);

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
  const findNearestBuildingEdge = (point: { x: number; y: number }, list: CanvasItem[] = items): BuildingEdgeInfo | null => nearestWall(point, list);


  // Places a new item for the active tool at a plan position (shared by the 2D plan and 3D view).
  // Sizes come from src/lib/items.ts in real feet, so objects are in proportion on any map.
  const placeNewItemAt = (type: ToolMode, x: number, y: number) => {
    const kind = ({ "add-camera": "camera", "add-building": "building", "add-tree": "tree", "add-parking": "parking", "add-label": "label", "add-target": "target", "add-recorder": "recorder" } as Partial<Record<ToolMode, NewItemKind>>)[type];
    if (!kind) return null;
    // One recorder per plan: placing it again moves it.
    const existingRecorder = kind === "recorder" ? itemsRef.current.find(i => i.type === "recorder") : undefined;
    if (existingRecorder) {
      setItems(prev => prev.map(i => (i.id === existingRecorder.id ? { ...i, x, y } : i)));
      setSelectedId(existingRecorder.id);
      setMode("select");
      return { ...existingRecorder, x, y };
    }
    const newItem = createItem(kind, x, y, {
      unitsPerFoot: planGeoRef?.unitsPerFoot ?? 1,
      cameraIndex: nextCameraIndex(itemsRef.current),
      targetIndex: itemsRef.current.filter(i => i.type === "target").length,
      treeSize: toolDefaults.treeSize,
      treeType: toolDefaults.treeType,
      vehicleType: toolDefaults.vehicleType,
      targetKind: toolDefaults.targetKind
    });

    if (newItem.type === "camera" && lastCameraSettingsRef.current) {
      Object.assign(newItem, applyCameraSettings(newItem as CameraItem, lastCameraSettingsRef.current, { height: false }));
    }
    if (newItem.type === "camera") {
      // Clicked on a building: mount on its nearest wall. Otherwise snap onto a wall only when placed
      // right next to it, so cameras land where the user clicked.
      const onBuilding = items.find(i => i.type === "building" && pointInPolygonXY({ x, y }, getBuildingEdgePointsWorld(i as BuildingItem)));
      const edge = findNearestBuildingEdge({ x, y }, onBuilding ? [onBuilding] : items);
      if (edge && (onBuilding || edge.distance < CAMERA_WALL_SNAP_FT)) {
        const cam = newItem as CameraItem;
        cam.x = edge.point.x;
        cam.y = edge.point.y;
        // Auto-rotate to face outward from building
        cam.rotation = edge.rotation;
        // At a face-friendly height on the wall, or the height of the mount the user last chose.
        const last = lastCameraSettingsRef.current;
        const buildingHeight = last?.mountPreset && last.mountHeight ? last.mountHeight : mountHeightForBuilding(getBuildingById(edge.buildingId));
        cam.mount = {
          type: "building",
          buildingId: edge.buildingId,
          edgeIndex: edge.edgeIndex,
          edgeT: edge.edgeT,
          height: buildingHeight
        };
        cam.height = buildingHeight;
      }
    }

    setItems(prev => [...prev, newItem]);
    setSelectedId(newItem.id);
    setMode("select");
    return newItem;
  };
  const placeNewItemAtRef = useRef(placeNewItemAt);
  placeNewItemAtRef.current = placeNewItemAt;
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

  // The last camera setup the user made (lens, resolution, mount height...): new cameras start
  // like it, so placing a row of identical cameras doesn't mean setting each one up again.
  const lastCameraSettingsRef = useRef<CameraSettings | null>((() => {
    try { return JSON.parse(localStorage.getItem("scp.lastCamera") || "null"); } catch { return null; }
  })());
  const rememberCameraSettings = (cam: CameraItem) => {
    lastCameraSettingsRef.current = pickCameraSettings(cam);
    try { localStorage.setItem("scp.lastCamera", JSON.stringify(lastCameraSettingsRef.current)); } catch { /* ignore */ }
  };
  // Edits from the panels (chips, fields, sliders) become one undo step each, once they settle;
  // edits during a drag on the map are saved when the drag ends.
  const settleTimerRef = useRef(0);
  const updateItem = (id: string, updates: Partial<CanvasItem>) => {
    const current = itemsRef.current.find(i => i.id === id);
    if (current?.type === "camera" && touchesCameraSettings(updates)) rememberCameraSettings({ ...(current as CameraItem), ...(updates as Partial<CameraItem>) });
    if (!interactingRef.current) {
      window.clearTimeout(settleTimerRef.current);
      settleTimerRef.current = window.setTimeout(() => {
        if (!interactingRef.current) saveHistory();
      }, 450);
    }
    setItems(prev => {
      const current = prev.find(i => i.id === id);
      if (!current) return prev;
      let patch: any = updates;
      // Keep a camera's vertical FOV in step with its horizontal FOV; a manual FOV change clears the lens preset.
      if (current.type === "camera" && ("hFov" in patch || "fov" in patch) && !("vFov" in patch)) {
        const cam = current as CameraItem;
        const h = patch.hFov ?? patch.fov;
        patch = { ...patch, vFov: vFovFromH(h, getCameraAspectValue(cam)), ...("lensPreset" in patch ? {} : { lensPreset: undefined }) };
      }
      // Rotating a building swings the cameras mounted on it by the same amount.
      const rotationDelta =
        current.type === "building" && typeof patch.rotation === "number" ? patch.rotation - current.rotation : 0;
      return prev.map(item => {
        if (item.id === id) return { ...item, ...patch } as CanvasItem;
        if (rotationDelta && item.type === "camera" && (item as CameraItem).mount?.type === "building" && (item as CameraItem).mount?.buildingId === id) {
          return { ...item, rotation: (((item.rotation + rotationDelta) % 360) + 360) % 360 };
        }
        return item;
      });
    });
  };

  // Mount height is stored on the mount (building or free); keep `height` in sync for older readers.
  const setCameraMountHeight = (camera: CameraItem, height: number) => {
    updateItem(camera.id, { height, mount: { ...(camera.mount ?? { type: "free" as const }), height } });
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
    const removed = items.find(i => i.id === id);
    const nextItems = items.filter(i => i.id !== id);
    setItems(nextItems);
    setSelectedId(prev => (prev === id ? null : prev));
    saveHistory(nextItems);
    if (removed) {
      const name = (removed as any).label || (removed as any).text || getItemTypeLabel(removed.type);
      showExportNotice(`Deleted ${name}`, "info", { label: "Undo", run: handleUndo });
    }
  };

  // --- Plan library: starting or opening another plan keeps this one under "Recent plans" ---
  const refreshRecentPlans = () => {
    listPlans().then(setRecentPlans).catch(() => setRecentPlans([]));
  };
  // Keeps the open plan in the library; null when there is nothing in it worth keeping.
  const archiveCurrentPlan = async (): Promise<PlanMeta | null> => {
    if (items.length === 0 && !backgroundImg) return null;
    const meta: PlanMeta = {
      id: planId,
      name: projectName,
      updatedAt: Date.now(),
      cameras: items.filter(i => i.type === "camera").length,
      buildings: items.filter(i => i.type === "building").length
    };
    await storePlan(meta, { ...buildProjectData(true), exportList, demData });
    return meta;
  };
  const openRecentPlan = async (id: string) => {
    try {
      const data = await loadPlan(id);
      if (!data) {
        showExportNotice("That plan is no longer saved in this browser.", "error");
        refreshRecentPlans();
        return;
      }
      const kept = await archiveCurrentPlan();
      resetProject();
      applyProjectData(data);
      setPlanId(id);
      if (data.demData && data.demData.values) {
        setDemData(data.demData);
        setDemPreview(buildDemPreview(data.demData));
      }
      resetHistory();
      await removePlan(id);
      showExportNotice(`Opened "${data.projectName || "plan"}".${kept ? ` "${kept.name}" is under Open plan → Recent plans.` : ""}`, "success");
    } catch (err) {
      console.error("Couldn't open the plan", err);
      showExportNotice("Couldn't open that plan.", "error");
    }
    refreshRecentPlans();
  };
  // Toasts run their action later, after more renders: always use the latest version.
  const openRecentPlanRef = useRef(openRecentPlan);
  openRecentPlanRef.current = openRecentPlan;
  const deleteRecentPlan = async (id: string) => {
    const meta = recentPlans.find(p => p.id === id);
    try {
      const data = await loadPlan(id);
      await removePlan(id);
      if (meta && data) showExportNotice(`Deleted "${meta.name}".`, "info", { label: "Undo", run: () => { storePlan(meta, data).then(refreshRecentPlans).catch(() => undefined); } });
    } catch (err) {
      console.error("Couldn't delete the plan", err);
    }
    refreshRecentPlans();
  };
  const duplicatePlan = async () => {
    try {
      await archiveCurrentPlan();
    } catch (err) {
      console.error("Couldn't keep the original plan", err);
      showExportNotice("Couldn't keep a copy of the original, so nothing changed. Save it to a file first.", "error");
      return;
    }
    const name = `${projectName} copy`;
    setPlanId(generateId());
    setProjectName(name);
    showExportNotice(`Now editing "${name}". The original is under Open plan → Recent plans.`, "success");
    refreshRecentPlans();
  };

  const handleNewProject = async () => {
    let kept: PlanMeta | null;
    try {
      kept = await archiveCurrentPlan();
    } catch (err) {
      console.error("Couldn't keep the current plan", err);
      showExportNotice("Couldn't keep a copy of this plan, so it wasn't cleared. Save it to a file first.", "error");
      return;
    }
    resetProject();
    setPlanId(generateId());
    if (kept) {
      const keptId = kept.id;
      showExportNotice(`New plan started. "${kept.name}" is under Open plan → Recent plans.`, "success", { label: "Undo", run: () => openRecentPlanRef.current(keptId) }, 8000);
    }
    refreshRecentPlans();
  };

  const resetProject = () => {
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
    setCompletedSteps([]);
    setPovCamId(null);
    setViewMode("plan");
    setMode("select");
    requestFit(null);
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
    setMapMoveMode(false);
    setTerrainHeights({});
    setSiteLocation(null);
    setSiteDetails(null);
    setSiteBounds(null);
    setPlanGeoRef(null);
    setElevationQuery("");
    setElevationStatus({ state: "idle", message: "" });
    resetHistory();
    // A fresh start: back to the first step, nothing open on the right.
    setRightPanelMode("properties");
    setActiveStepChoice(null);
  };

  // --- Auto-trace a roof from the satellite map ---
  const roofImageCacheRef = useRef<{ src: string; data: ImageData } | null>(null);
  // Reads the live photo (refs, not render state), so it also works in the middle of an import.
  const getMapImageData = () => {
    const url = backgroundImgRef.current;
    const img = bgImageRef.current;
    if (!url || !img || !img.naturalWidth || img.src !== url) return null;
    if (roofImageCacheRef.current?.src === url) return roofImageCacheRef.current.data;
    const canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return null;
    ctx.drawImage(img, 0, 0);
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
    roofImageCacheRef.current = { src: url, data };
    return data;
  };

  // Finds the roof under a plan point on the photo: its outline (square corners: rectangles, Ls,
  // Ts...) in plan coordinates, or null.
  const findRoofOutline = async (pos: { x: number; y: number }, unitsPerFoot = planGeoRef?.unitsPerFoot ?? 1) => {
    const url = backgroundImgRef.current;
    // The photo may still be decoding right after it was added.
    if (url && bgImageRef.current?.src !== url) bgImageRef.current = await loadImageElement(url).catch(() => null);
    if (url && !bgImageRef.current?.naturalWidth) bgImageRef.current = await loadImageElement(url).catch(() => null);
    const data = getMapImageData();
    if (!data) return { error: "no-photo" as const };
    const bg = bgSettingsRef.current;
    const pxPerUnitX = data.width / bg.width;
    const pxPerUnitY = data.height / bg.height;
    const result = traceRoof(data, (pos.x - bg.x) * pxPerUnitX, (pos.y - bg.y) * pxPerUnitY, {
      maxRadius: 90 * unitsPerFoot * pxPerUnitX, // roofs up to ~180 ft across
      minPixels: 120 * unitsPerFoot * unitsPerFoot * pxPerUnitX * pxPerUnitY, // at least ~120 sq ft
      cellPx: 2.5 * unitsPerFoot * pxPerUnitX // follow the outline to about 2.5 ft
    });
    if (!result) return { error: "none" as const };
    const outline = (result.outline ?? result.corners).map(p => ({ x: bg.x + p.x / pxPerUnitX, y: bg.y + p.y / pxPerUnitY }));
    return { outline, rough: !result.outline && result.fill < 0.7 };
  };

  /**
   * The roof outline on the photo for a building from map data, when it clearly is the same
   * building (about the same size and place); null to keep the map data's outline.
   */
  const photoOutlineFor = async (b: BuildingItem, unitsPerFoot: number) => {
    const current = getBuildingEdgePointsWorld(b);
    const found = await findRoofOutline({ x: b.x, y: b.y }, unitsPerFoot);
    if ("error" in found) return null;
    const a0 = polygonArea(current);
    const a1 = polygonArea(found.outline);
    if (a1 < a0 * 0.55 || a1 > a0 * 1.8) return null;
    const c1 = found.outline.reduce((s, p) => ({ x: s.x + p.x / found.outline.length, y: s.y + p.y / found.outline.length }), { x: 0, y: 0 });
    if (Math.hypot(c1.x - b.x, c1.y - b.y) > Math.sqrt(a0) * 0.35) return null;
    if (!pointInPolygonXY({ x: b.x, y: b.y }, found.outline)) return null;
    return found.outline;
  };

  // A building item from a plan outline, centered on its bounding box.
  const buildingShapeFrom = (outline: { x: number; y: number }[]) => {
    const b = getPointsBounds(outline);
    const cx = b.minX + b.width / 2;
    const cy = b.minY + b.height / 2;
    return { x: cx, y: cy, rotation: 0, width: b.width, height: b.height, points: outline.map(p => ({ x: p.x - cx, y: p.y - cy })) };
  };

  // New outline for a building, keeping its rotation (cameras mounted on it would swing otherwise).
  const reshapeKeepingRotation = (b: BuildingItem, outline: { x: number; y: number }[]) => {
    const shape = buildingShapeFrom(outline);
    const points = outline.map(p => rotatePoint({ x: p.x - shape.x, y: p.y - shape.y }, -b.rotation));
    const lb = getPointsBounds(points);
    return { x: shape.x, y: shape.y, points, width: lb.width, height: lb.height };
  };

  const traceRoofAt = async (pos: { x: number; y: number }) => {
    const found = await findRoofOutline(pos);
    if ("error" in found) {
      showExportNotice(found.error === "no-photo"
        ? "Import your site (satellite map) first, then click a roof."
        : "Couldn't find a roof edge there. Try clicking the middle of a roof, or draw it with the Building tool.", found.error === "no-photo" ? "info" : "error");
      return;
    }
    const unitsPerFoot = planGeoRef?.unitsPerFoot ?? 1;
    const building: BuildingItem = {
      id: generateId(),
      type: "building",
      ...buildingShapeFrom(found.outline),
      wallHeight: Math.round(DEFAULT_BUILDING.wallHeight * unitsPerFoot),
      label: "Building",
      color: COLORS.building[0]
    };
    const nextItems = [...currentItemsRef.current, building];
    setItems(nextItems);
    saveHistory(nextItems);
    showExportNotice(
      found.rough
        ? "Traced a building — the shape may be rough; drag its corners to match the roof."
        : "Traced a building. Click more roofs, or press Esc when done.",
      "success"
    );
  };

  // Reshape a building (e.g. a rough outline from map data) to the roof seen on the photo.
  const fitBuildingToPhoto = async (id: string) => {
    const b = currentItemsRef.current.find(i => i.id === id) as BuildingItem | undefined;
    if (!b) return;
    const outline = await photoOutlineFor(b, planGeoRef?.unitsPerFoot ?? 1);
    if (!outline) {
      showExportNotice("Couldn't make out this roof's outline on the photo. Drag its corners to match instead.", "error");
      return;
    }
    updateItem(id, reshapeKeepingRotation(b, outline));
    setTimeout(() => saveHistory(), 50);
    showExportNotice("Outline matched to the roof on the photo.", "success", { label: "Undo", run: handleUndo });
  };

  const showExportNotice = (
    message: string,
    tone: 'success' | 'error' | 'info' = 'success',
    action?: { label: string; run: () => void },
    duration = action ? 7000 : 5000
  ) => {
    setExportNotice({ id: Date.now(), message, tone, action });
    if (exportNoticeTimerRef.current) {
      window.clearTimeout(exportNoticeTimerRef.current);
    }
    exportNoticeTimerRef.current = window.setTimeout(() => setExportNotice(null), duration);
  };

  const loadImageElement = (src: string) => new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });

  // The printed plan: a clean top-down drawing of the whole site (see src/lib/planSvg.ts).
  const renderPlanToDataUrl = async (options?: {
    scale?: number;
    includeGrid?: boolean;
    backgroundColor?: string;
  }) => {
    const { includeGrid = true, backgroundColor = "#f8fafc" } = options || {};
    // At least ~2000 px across so the report stays sharp for small sites.
    const scale = Math.max(options?.scale ?? 2, 2000 / Math.max(1, canvasSize.width));
    const svg = planSvg({
      items,
      canvas: canvasSize,
      background: backgroundImg ? { url: backgroundImg, ...bgSettings } : null,
      shadeUrl: hasTerrain && elevationOverlay === "shaded" ? elevationShadeUrl : null,
      contours: hasTerrain && elevationOverlay !== "off" && contourPaths ? { minor: contourPaths.minor, major: contourPaths.major } : null,
      gridSize,
      showGrid: includeGrid && showGrid,
      targetStatus: Object.fromEntries(targetItems.map(t => [t.id, targetStatus(targetResults.get(t.id))])),
      dori: showDoriZones,
      showCones: frustumSettings.visible,
      unitsPerFoot: planGeoRef?.unitsPerFoot ?? 1
    });
    const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml;charset=utf-8" }));
    try {
      const img = await loadImageElement(url);
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(canvasSize.width * scale);
      canvas.height = Math.round(canvasSize.height * scale);
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Failed to prepare export canvas.");
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      return canvas.toDataURL("image/png");
    } finally {
      URL.revokeObjectURL(url);
    }
  };

  // --- Save / Load / Export ---

  const handleExportPng = async () => {
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

  // What a camera sees, drawn from the map's own 3D scene (same models, shadows and light), with
  // the name and time stamped on like a recorder would.
  const renderCameraViewToCanvas = (cam: CameraItem, width = 1280, night = false): HTMLCanvasElement => {
    const aspect = getCameraAspectValue(cam);
    const height = Math.max(Math.round(width / 3.6), Math.round(width / aspect));
    let canvas = viewRef.current?.renderCameraView(cam.id, width, height, night) ?? null;
    if (!canvas) {
      canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const blank = canvas.getContext("2d");
      if (blank) {
        blank.fillStyle = "#18181b";
        blank.fillRect(0, 0, width, height);
      }
    }
    const ctx = canvas.getContext("2d");
    if (ctx) stampCameraView(ctx, cam, width, height);
    return canvas;
  };

  // Recorder-style stamp: camera number and name top-left, date and time top-right.
  const stampCameraView = (ctx: CanvasRenderingContext2D, cam: CameraItem, width: number, height: number) => {
    const number = (items.filter(i => i.type === "camera") as CameraItem[]).findIndex(c => c.id === cam.id) + 1;
    const k = Math.max(0.5, Math.min(width, height * 1.78) / 1280);
    const size = Math.round(26 * k);
    const pad = Math.round(18 * k);
    const now = new Date();
    const two = (n: number) => String(n).padStart(2, "0");
    const stamp = `${now.getFullYear()}-${two(now.getMonth() + 1)}-${two(now.getDate())}  ${two(now.getHours())}:${two(now.getMinutes())}:${two(now.getSeconds())}`;
    ctx.save();
    ctx.font = `600 ${size}px ui-monospace, SFMono-Regular, Menlo, monospace`;
    ctx.textBaseline = "top";
    ctx.shadowColor = "rgba(0,0,0,0.85)";
    ctx.shadowBlur = Math.max(2, 4 * k);
    ctx.fillStyle = "#ffffff";
    ctx.fillText(`CAM ${number > 0 ? two(number) : "--"}  ${cam.label.toUpperCase()}`, pad, pad);
    ctx.textAlign = "right";
    ctx.fillText(stamp, width - pad, pad);
    ctx.restore();
  };

  const renderCameraViewToDataUrl = (cam: CameraItem, night = false): string => renderCameraViewToCanvas(cam, 1280, night).toDataURL('image/png');

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
    const view = viewRef.current;
    if (!view) {
      showExportNotice("The map view is not ready yet.", "error");
      return;
    }
    try {
      addToExportList('3d', view.viewInfo().tiltDeg > 8 ? '3D Overview' : 'Map view', view.capture());
    } catch (e) {
      console.error("3D export failed", e);
      showExportNotice("Failed to capture 3D view.", "error");
    }
  };

  // Add camera view to export list
  const addCameraViewToExportList = (cam: CameraItem, night = false) => {
    try {
      const dataUrl = renderCameraViewToDataUrl(cam, night);
      addToExportList('camera', `Camera: ${cam.label}${night ? " (night)" : ""}`, dataUrl, cam.id);
    } catch (e) {
      console.error("Camera export failed", e);
      showExportNotice("Failed to capture camera view.", "error");
    }
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

  // Report data: cameras (numbered in plan order) and protected spots with their coverage.
  const buildReportCameras = (withViews: boolean): ReportCamera[] =>
    (items.filter(i => i.type === "camera") as CameraItem[]).map((cam, i) => {
      const dori = getDoriDistances(cam);
      const heightFt = cam.mount?.height ?? cam.height ?? DEFAULT_CAMERA_HEIGHT_FT;
      const hFov = getCameraHFov(cam);
      const pitch = cam.pitch ?? DEFAULT_CAMERA_PITCH;
      const vFov = cam.vFov ?? vFovFromH(hFov, getCameraAspectValue(cam));
      const ground = getGroundCoverage(heightFt, pitch, vFov);
      const building = cam.mount?.type === "building" && cam.mount.buildingId ? (getBuildingById(cam.mount.buildingId) as BuildingItem | undefined) : undefined;
      let viewImage: string | undefined;
      if (withViews) {
        try {
          viewImage = renderCameraViewToDataUrl(cam);
        } catch (err) {
          console.error("Camera view failed", err);
        }
      }
      return {
        number: i + 1,
        label: cam.label,
        color: cam.color,
        heightFt,
        mount: building ? `on ${building.label?.trim() || "building"}` : "free-standing",
        lensLabel: LENS_PRESETS.find(l => l.id === cam.lensPreset)?.label ?? `${Math.round(hFov)}°`,
        hFov,
        resolutionLabel: RESOLUTION_PRESETS.find(r => r.width === (cam.resolutionWidth ?? DEFAULT_RESOLUTION_WIDTH))?.label ?? `${cam.resolutionWidth}px`,
        tiltDeg: pitch,
        facing: compassFromRotation(cam.rotation),
        identifyFt: dori[0].distance,
        recognizeFt: dori[1].distance,
        detectFt: dori[3].distance,
        blindSpotFt: Number.isFinite(ground.near) ? ground.near : null,
        irRangeFt: cam.irRangeFt ?? DEFAULT_IR_RANGE_FT,
        notes: cam.description || "",
        covers: targetItems
          .filter(t => targetResults.get(t.id)?.best?.cameraId === cam.id)
          .map(t => `${t.label} (${LEVEL_LABEL[targetResults.get(t.id)!.best!.level]})`),
        viewImage
      };
    });
  const buildReportSpots = (): ReportSpot[] => {
    const cams = items.filter(i => i.type === "camera") as CameraItem[];
    return targetItems.map(t => {
      const r = targetResults.get(t.id);
      const cam = r?.best ? cams.find(c => c.id === r.best!.cameraId) : undefined;
      return {
        label: t.label,
        kind: TARGET_KINDS[t.kind]?.label ?? t.kind,
        needs: GOAL_LABEL[t.goal],
        status: targetStatus(r),
        camera: cam ? `${cams.indexOf(cam) + 1}. ${cam.label}` : undefined,
        got: r?.best ? LEVEL_LABEL[r.best.level] : undefined,
        reason: r && !r.best ? `Not covered: ${REASON_TEXT[r.reason ?? "outside-view"]}` : undefined
      };
    });
  };

  const handleDownloadCamerasCsv = () => {
    const blob = new Blob([camerasCsv(buildReportCameras(false))], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${(projectName || "security_plan").replace(/[^\w-]+/g, "_")}_cameras.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleExportReportPdf = async () => {
    completeStep("report");
    // Open the window synchronously (inside the click) so popup blockers allow it.
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      showExportNotice("Popups blocked. Allow popups to export PDF.", "error");
      return;
    }
    printWindow.document.write("<p style='font-family:system-ui;padding:40px;color:#334155'>Preparing your report…</p>");

    // The site plan always leads, every camera's view is shown with it, and views the user picked
    // ("Add to report") come as an extra section.
    let planImage: string | undefined;
    try {
      planImage = await renderPlanToDataUrl({ scale: 2, includeGrid: showGrid, backgroundColor: "#f8fafc" });
    } catch (err) {
      console.error("Plan capture failed", err);
    }
    const picked = exportList.map(v => ({ label: v.label, dataUrl: v.dataUrl }));
    const html = buildReportHtml(
      {
        title: projectName,
        site: siteLocation,
        preparedAt: new Date().toLocaleString(),
        planImage,
        pickedViews: picked,
        cameras: buildReportCameras(true),
        spots: buildReportSpots(),
        counts: { buildings: items.filter(i => i.type === "building").length },
        cabling: cabling ? { channels: cabling.summary.channels, totalFt: cabling.summary.totalFt, boxes: cabling.summary.boxes, runs: cabling.runs } : undefined,
        storage: (() => {
          const widths = (items.filter(i => i.type === "camera") as CameraItem[]).map(c => c.resolutionWidth ?? DEFAULT_RESOLUTION_WIDTH);
          if (!widths.length) return undefined;
          const e = estimateStorage(widths, recordDays, recordMode);
          return { days: recordDays, mode: recordMode, tb: e.tb, driveTb: e.driveTb };
        })()
      },
      { autoPrint: true }
    );
    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();
  };

  // Loads a saved project, replacing everything from the current one (anything the file
  // doesn't contain is reset rather than left over from the previous project).
  const applyProjectData = (projectData: any) => {
    suppressDemAutoApply();
    setItems(Array.isArray(projectData.items) ? migrateItems(projectData.items, projectData.planGeoRef?.unitsPerFoot ?? 1) : []);
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
    setPlanId(typeof projectData.planId === "string" && projectData.planId ? projectData.planId : generateId());
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
    planId,
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
      link.download = `${(projectName || "security_plan").replace(/[^\w-]+/g, "_")}.zip`;
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

    // Detect zip by content ("PK" signature), not just the extension, so renamed files still open.
    const head = new Uint8Array(await file.slice(0, 2).arrayBuffer());
    const isZip = file.name.toLowerCase().endsWith(".zip") || (head[0] === 0x50 && head[1] === 0x4b);
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
        // Make output pixels square on the plan (in lat/lon files they're ~cos(lat) narrower than tall).
        {
          const { bounds: gb, area: ga } = planGeoRef;
          const toPlan = (p: { lat: number; lon: number }) => ({
            x: ga.x + ((p.lon - gb.west) / (gb.east - gb.west)) * ga.width,
            y: ga.y + ((gb.north - p.lat) / (gb.north - gb.south)) * ga.height
          });
          const [pnw, pne, , psw] = geo.corners.map(toPlan);
          const planW = Math.hypot(pne.x - pnw.x, pne.y - pnw.y);
          const planH = Math.hypot(psw.x - pnw.x, psw.y - pnw.y);
          if (planW > 0 && planH > 0) {
            height = Math.max(2, Math.round(width * (planH / planW)));
            readOptions = { ...readOptions, height };
          }
        }
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

  // --- The map view (2D and 3D are one view; see src/viewport) ---
  const viewRef = useRef<SiteView | null>(null);

  const handleExportSnapshot = (dataUrl: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExportCurrent3d = () => {
    const dataUrl = viewRef.current?.capture();
    if (dataUrl) handleExportSnapshot(dataUrl, "security_plan_3d.png");
  };

  // A copy offset from the original. Building-mounted cameras become free-standing so the copy
  // doesn't sit exactly on top of the original; names get a "copy" suffix.
  // Camera settings clipboard: make one camera's setup match another's in two keystrokes.
  const cameraSettingsClipRef = useRef<{ from: string; settings: CameraSettings } | null>(null);
  const copyCameraSettings = (cam: CameraItem) => {
    cameraSettingsClipRef.current = { from: cam.label, settings: pickCameraSettings(cam) };
    showExportNotice(`Copied ${cam.label}'s settings. Select another camera and paste them (Ctrl+Shift+V).`, "info");
  };
  const pasteCameraSettings = (cam: CameraItem) => {
    const clip = cameraSettingsClipRef.current;
    if (!clip) {
      showExportNotice("Copy a camera's settings first (Ctrl+Shift+C).", "info");
      return;
    }
    // An edit still settling gets its own undo step first.
    window.clearTimeout(settleTimerRef.current);
    saveHistory();
    const next = applyCameraSettings(cam, clip.settings);
    const nextItems = itemsRef.current.map(i => (i.id === cam.id ? next : i));
    setItems(nextItems);
    saveHistory(nextItems);
    showExportNotice(`${cam.label} now has ${clip.from}'s settings.`, "success", { label: "Undo", run: handleUndo });
  };

  const pastedCopy = (item: CanvasItem): CanvasItem => {
    const base = item.type === "camera" ? getCameraPlanPosition(item as CameraItem) : { x: item.x, y: item.y };
    const copy: any = { ...structuredClone(item), id: generateId(), x: base.x + 15, y: base.y + 15 };
    if (copy.type === "camera") {
      // On a wall: the copy goes further along the same wall. Otherwise it stands free nearby.
      const along = slideAlongWall(item as CameraItem, itemsRef.current, 10, planGeoRef?.unitsPerFoot ?? 1);
      copy.mount = along ?? { ...(copy.mount ?? {}), type: "free", buildingId: undefined };
      copy.label = /^Camera \d+$/.test(copy.label) ? `Camera ${nextCameraIndex(itemsRef.current) + 1}` : `${copy.label} copy`;
    }
    if (copy.type === "building") copy.importSource = undefined;
    return copy as CanvasItem;
  };

  // Choosing a placing tool clears the selection, so the right panel shows that tool (not the old item).
  useEffect(() => {
    if (mode !== "select") setSelectedId(null);
  }, [mode]);
  // Selecting something shows it in the inspector (even if plan settings were open).
  useEffect(() => {
    if (selectedId) setRightPanelMode("properties");
  }, [selectedId]);

  // --- Plan view: zoom to fit / to the selection ---
  const itemPlanBounds = (item: CanvasItem): Bounds | null => {
    if (item.type === "building") return boundsOfPoints(getBuildingEdgePointsWorld(item as BuildingItem));
    if (item.type === "camera") {
      const p = getCameraPlanPosition(item as CameraItem);
      return { minX: p.x, minY: p.y, maxX: p.x, maxY: p.y };
    }
    if (item.type === "target" || item.type === "recorder") return { minX: item.x, minY: item.y, maxX: item.x, maxY: item.y };
    const r = item.type === "tree" ? (item as TreeItem).radius : Math.max((item as any).width ?? 0, (item as any).height ?? 0) / 2;
    return { minX: item.x - r, minY: item.y - r, maxX: item.x + r, maxY: item.y + r };
  };
  // Fit requests run after the map view has the latest plan (e.g. right after an import).
  const fitRequestRef = useRef<{ bounds: Bounds | null; minSpan?: number; margin?: number } | null>(null);
  const [fitSignal, setFitSignal] = useState(0);
  function requestFit(bounds: Bounds | null, opts: { minSpan?: number; margin?: number } = {}) {
    fitRequestRef.current = { bounds, ...opts };
    setFitSignal(s => s + 1);
  }
  useEffect(() => {
    const req = fitRequestRef.current;
    const view = viewRef.current;
    if (!req || !view) return;
    fitRequestRef.current = null;
    if (req.bounds) view.fitBounds(req.bounds, { minSpan: req.minSpan, margin: req.margin });
    else view.fitSite();
  }, [fitSignal]);
  const zoomToBounds = (b: Bounds | null, minSpanFt = 60) => {
    if (!b) return;
    viewRef.current?.fitBounds(b, { margin: 1.3, minSpan: minSpanFt * (planGeoRef?.unitsPerFoot ?? 1) });
  };
  const zoomToFit = () => viewRef.current?.fitSite();
  const zoomToSelection = () => {
    const item = selectedId ? items.find(i => i.id === selectedId) : null;
    if (item) zoomToBounds(itemPlanBounds(item), item.type === "camera" ? 80 : 50);
    else zoomToFit();
  };
  const zoomBy = (factor: number) => viewRef.current?.zoomBy(factor);
  // Picking something in a side list selects it and brings it into view (clear of the inspector).
  const selectFromList = (id: string) => {
    setSelectedId(id);
    setMode("select");
    if (viewMode === "nvr") return;
    window.requestAnimationFrame(() => viewRef.current?.reveal(id, 320));
  };

  // --- Actions on the selection (shared by the floating action bar and shortcuts) ---
  const duplicateSelected = () => {
    const item = selectedId ? items.find(i => i.id === selectedId) : null;
    if (!item || item.type === "recorder") return; // one recorder per plan
    const copy = pastedCopy(item);
    const nextItems = [...items, copy];
    setItems(nextItems);
    setSelectedId(copy.id);
    saveHistory(nextItems);
  };
  const rotateSelected = (deg: number) => {
    const item = selectedId ? items.find(i => i.id === selectedId) : null;
    if (!item) return;
    updateItem(item.id, { rotation: (((item.rotation + deg) % 360) + 360) % 360 });
    setTimeout(() => saveHistory(), 50);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.tagName === "SELECT" || target.isContentEditable)) return;
      const mod = event.ctrlKey || event.metaKey; // Cmd on Mac

      // Single-key tools (shown in the toolbar tooltips)
      if (!mod && !event.altKey) {
        const toolKeys: Record<string, ToolMode> = { v: "select", c: "add-camera", b: "add-building", r: "trace-building", t: "add-tree", p: "add-parking", l: "add-label", m: "add-target", d: "measure" };
        const tool = toolKeys[event.key.toLowerCase()];
        if (tool) {
          event.preventDefault();
          setMode(prev => (prev === tool && tool !== "select" ? "select" : tool));
          return;
        }
        if (event.key === "2") { setViewMode("plan"); return; }
        if (event.key === "3") { setViewMode("iso3d"); return; }
        if (event.key === "?") { event.preventDefault(); setShowShortcuts(true); return; }
        if (event.key === "0") { event.preventDefault(); zoomToFit(); return; }
        if (event.key === "+" || event.key === "=") { event.preventDefault(); zoomBy(1.25); return; }
        if (event.key === "-") { event.preventDefault(); zoomBy(0.8); return; }
        if (event.key.toLowerCase() === "f") { event.preventDefault(); zoomToSelection(); return; }
        if (event.key.toLowerCase() === "n") { event.preventDefault(); viewRef.current?.resetNorth(); return; }
        if (event.key.toLowerCase() === "q") { event.preventDefault(); viewRef.current?.rotateBy(-22.5); return; }
        if (event.key.toLowerCase() === "e") { event.preventDefault(); viewRef.current?.rotateBy(22.5); return; }
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
          event.preventDefault();
          duplicateSelected();
        }

        // Copy / paste a camera's settings onto another camera (Ctrl+Shift+C / Ctrl+Shift+V)
        if (event.shiftKey && (key === "c" || key === "v")) {
          const cam = items.find(i => i.id === selectedId && i.type === "camera") as CameraItem | undefined;
          if (cam) {
            event.preventDefault();
            if (key === "c") copyCameraSettings(cam);
            else pasteCameraSettings(cam);
          }
          return;
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
        // Esc while aiming only cancels the aim (the camera stays selected).
        if (aimingCameraId) {
          setAimingCameraId(null);
          return;
        }
        setSelectedId(null);
        setMode("select");
        setVertexInsertMode(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [items, selectedId, handleSaveProject, viewMode, aimingCameraId]);


  // Refs to track current items and mode in 3D event handlers
  const itemsRef = projectRef("items");
  const modeRef = useRef(mode);
  const selectedIdRef = useRef(selectedId);

  useEffect(() => { modeRef.current = mode; }, [mode]);
  useEffect(() => { selectedIdRef.current = selectedId; }, [selectedId]);


  useEffect(() => {
    if (viewMode === "nvr") {
      setVertexInsertMode(false);
    }
  }, [viewMode]);

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
    // While dragging, redraw at most every 150 ms (the scene is rebuilt for each render).
    const wait = interactingRef.current ? Math.max(0, 60 - (performance.now() - lastPreviewRef.current)) : 0;
    let frame = 0;
    const timer = window.setTimeout(() => {
      frame = window.requestAnimationFrame(() => {
        lastPreviewRef.current = performance.now();
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
    }, wait);
    return () => {
      window.clearTimeout(timer);
      window.cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId, items, showCameraPreview, bgSettings, canvasSize, sceneBackgroundImg, terrainHeights, gridSize, backgroundImg, interacting, roofPhoto, previewWidth]);
  const lastPreviewRef = useRef(0);



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

  const getMiniSvgMousePos = (e: React.MouseEvent) =>
    getSvgMousePosFor(demMiniRef.current, e);

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


  // Initial history save & setup
  useEffect(() => {
    THREE.Cache.enabled = true;
    // Seed after the autosaved project (loaded in an earlier mount effect) has rendered,
    // so the first Undo doesn't jump back to an empty canvas.
    resetHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  // Bottom-center tool dock over the map (2D and 3D): the placing tools, terrain, undo/redo.
  const renderToolDock = () => {
    const tools: { mode: ToolMode; icon: React.ComponentType<{ className?: string }>; label: string; key: string }[] = [
      { mode: "select", icon: Move, label: "Select and move", key: "V" },
      { mode: "add-camera", icon: Camera, label: "Add camera", key: "C" },
      { mode: "add-target", icon: Target, label: "Mark a spot to protect", key: "M" },
      { mode: "trace-building", icon: WandSparkles, label: "Trace a roof from the map", key: "R" },
      { mode: "add-building", icon: Square, label: "Add building", key: "B" },
      { mode: "add-tree", icon: Trees, label: "Add tree", key: "T" },
      { mode: "add-parking", icon: Car, label: "Add vehicle", key: "P" },
      { mode: "add-label", icon: Type, label: "Add text", key: "L" },
      { mode: "measure", icon: Ruler, label: "Measure a distance", key: "D" }
    ];
    const btn = (on: boolean) =>
      `relative w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${on ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30" : "text-slate-300 hover:text-white hover:bg-white/10"}`;
    return (
      <div role="toolbar" aria-label="Tools" className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1 rounded-2xl border border-white/10 bg-zinc-900/95 p-1.5 shadow-2xl backdrop-blur">
        {tools.map(t => (
          <button
            key={t.mode}
            onClick={() => { setIsTerrainMode(false); setMode(mode === t.mode && t.mode !== "select" ? "select" : t.mode); }}
            title={`${t.label} (${t.key})`}
            aria-label={t.label}
            aria-pressed={mode === t.mode && !isTerrainMode}
            className={btn(mode === t.mode && !isTerrainMode)}
          >
            <t.icon className="w-5 h-5" />
            <span className="absolute bottom-0.5 right-1 text-[8px] font-bold opacity-50">{t.key}</span>
          </button>
        ))}
        <span className="w-px h-6 bg-white/10 mx-1" />
        <button
          onClick={() => { setMode("select"); setIsTerrainMode(v => !v); }}
          title="Shape the terrain"
          aria-label="Terrain"
          aria-pressed={isTerrainMode}
          className={btn(isTerrainMode)}
        >
          <Mountain className="w-5 h-5" />
        </button>
        <span className="w-px h-6 bg-white/10 mx-1" />
        <button onClick={handleUndo} disabled={!canUndo} className={`${btn(false)} disabled:opacity-30`} title="Undo (Ctrl/⌘+Z)" aria-label="Undo">
          <Undo className="w-5 h-5" />
        </button>
        <button onClick={handleRedo} disabled={!canRedo} className={`${btn(false)} disabled:opacity-30`} title="Redo (Ctrl/⌘+Shift+Z)" aria-label="Redo">
          <Redo className="w-5 h-5" />
        </button>
      </div>
    );
  };


  // --- Render Helpers ---

  // Building inspector order: the everyday settings first, the rest folded under "More options".
  // (Other item types keep their natural order.)
  const inspectorOrder = (slot: "name" | "main" | "size" | "color" | "toggle" | "advanced") => {
    if (selectedItem?.type !== "building") return "";
    const order = { name: "order-1", main: "order-2", size: "order-3", color: "order-4", toggle: "order-5", advanced: "order-6" }[slot];
    return slot === "advanced" && !showMoreOptions ? `${order} hidden` : order;
  };

  const selectedItem = items.find(i => i.id === selectedId);
  const selectedCamera = selectedItem?.type === "camera" ? (selectedItem as CameraItem) : null;

  // --- Coverage: which protected spots are seen, and where nothing is ---
  const coverageModel = useMemo(() => {
    const upf = planGeoRef?.unitsPerFoot ?? 1;
    const cameras: CoverageCamera[] = (items.filter(i => i.type === "camera") as CameraItem[]).map(cam => {
      const pos = getCameraPlanPosition(cam);
      const hFov = getCameraHFov(cam);
      return {
        id: cam.id,
        x: pos.x,
        y: pos.y,
        rotation: cam.rotation,
        hFov,
        vFov: cam.vFov ?? vFovFromH(hFov, getCameraAspectValue(cam)),
        pitch: cam.pitch ?? DEFAULT_CAMERA_PITCH,
        heightFt: (cam.mount?.height ?? cam.height ?? DEFAULT_CAMERA_HEIGHT_FT),
        range: nightCoverage ? Math.min(cam.range, (cam.irRangeFt ?? DEFAULT_IR_RANGE_FT) * upf) : cam.range,
        camera: cam
      };
    });
    const obstacles: Obstacle[] = [];
    items.forEach(item => {
      if (item.type === "building") {
        const b = item as BuildingItem;
        obstacles.push({ kind: "building", id: b.id, points: getBuildingEdgePointsWorld(b), heightFt: (b.wallHeight ?? DEFAULT_BUILDING.wallHeight) / upf });
      } else if (item.type === "tree") {
        const t = item as TreeItem;
        const h = (t.height ?? 30) / upf;
        obstacles.push({ kind: "tree", id: t.id, x: t.x, y: t.y, radius: t.radius * (t.width ?? 1), bottomFt: h * 0.3, topFt: h });
      }
    });
    return { cameras, obstacles, upf };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, planGeoRef, nightCoverage]);

  // "Suggest cameras": add wall/pole cameras that cover the spots that aren't covered yet.
  const handleSuggestCameras = () => {
    const upf = coverageModel.upf;
    const own = (items.filter(i => i.type === "building") as BuildingItem[]).filter(b => isOwnBuilding(b));
    if (own.length === 0 && items.some(i => i.type === "building")) {
      showExportNotice("Mark which building is yours first: tick \"Mine\" next to it in the Buildings step, so cameras go on it.", "info", { label: "Show buildings", run: () => handleWorkflowStep("buildings") });
      return;
    }
    const buildings = own.map(b => ({
      id: b.id,
      points: getBuildingEdgePointsWorld(b),
      heightFt: (b.wallHeight ?? DEFAULT_BUILDING.wallHeight) / upf,
      mountHeightFt: mountHeightForBuilding(b)
    }));
    const suggestions = suggestCameras({
      targets: targetItems.map(t => ({ id: t.id, x: t.x, y: t.y, goal: t.goal })),
      buildings,
      obstacles: coverageModel.obstacles,
      existing: coverageModel.cameras,
      unitsPerFoot: upf
    });
    if (suggestions.length === 0) {
      showExportNotice("Couldn't find a camera spot for the rest. Try a pole camera closer to them, or lower the detail needed.", "info");
      return;
    }
    const startIndex = nextCameraIndex(items);
    const added = suggestions.map((sug, i) => {
      const base = createItem("camera", sug.x, sug.y, { unitsPerFoot: upf, cameraIndex: startIndex + i }) as CameraItem;
      const covers = targetItems.filter(t => sug.covers.includes(t.id)).map(t => t.label);
      return {
        ...base,
        rotation: sug.rotation,
        pitch: sug.pitch,
        hFov: sug.hFov,
        fov: sug.hFov,
        vFov: vFovFromH(sug.hFov, 16 / 9),
        lensPreset: sug.lensId,
        resolutionWidth: sug.resolutionWidth,
        range: sug.range,
        height: sug.heightFt,
        mount: sug.mount
          ? { type: "building" as const, buildingId: sug.mount.buildingId, edgeIndex: sug.mount.edgeIndex, edgeT: sug.mount.edgeT, height: sug.heightFt }
          : { type: "free" as const, edgeT: 0.5, height: sug.heightFt },
        description: `Suggested to cover ${covers.join(", ")}`
      } as CameraItem;
    });
    const nextItems = [...items, ...added];
    setItems(nextItems);
    saveHistory(nextItems);
    setSelectedId(null);
    showExportNotice(`Added ${added.length} camera${added.length === 1 ? "" : "s"}. Adjust them as you like.`, "success", { label: "Undo", run: handleUndo });
  };
  const targetItems = items.filter(i => i.type === "target") as TargetItem[];
  // Each camera's cable run back to the recorder (once it is placed).
  const cabling = useMemo(() => {
    const rec = items.find(i => i.type === "recorder");
    const cams = items.filter(i => i.type === "camera") as CameraItem[];
    if (!rec || !cams.length) return null;
    const runs = cableRuns(
      cams.map((c, i) => ({ ...cameraPlanPosition(c, items), id: c.id, number: i + 1, label: c.label, heightFt: c.mount?.height ?? c.height ?? DEFAULT_CAMERA_HEIGHT_FT })),
      rec,
      planGeoRef?.unitsPerFoot ?? 1
    );
    return { runs, summary: cableSummary(runs) };
  }, [items, planGeoRef]);
  const targetResults = useMemo(
    () => new Map(evaluateTargets(coverageModel.cameras, targetItems, coverageModel.obstacles, coverageModel.upf).map(r => [r.targetId, r])),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [coverageModel, items]
  );
  // --- Looking through a camera: the main view becomes that camera's picture ---
  const cameraItems = items.filter(i => i.type === "camera") as CameraItem[];
  const lookThrough = (id: string) => {
    setExportNotice(null);
    setSelectedId(id);
    setMode("select");
    setAimingCameraId(null);
    if (viewMode === "nvr") setViewMode("iso3d");
    setPovCamId(id);
  };
  const [povThumbs, setPovThumbs] = useState<Record<string, string>>({});
  useEffect(() => {
    if (!povCamId) return;
    // Thumbnails of every camera's view, refreshed shortly after changes.
    const timer = window.setTimeout(() => {
      const next: Record<string, string> = {};
      for (const cam of cameraItems) {
        try {
          next[cam.id] = renderCameraViewToCanvas(cam, 256).toDataURL("image/jpeg", 0.75);
        } catch {
          /* leave it blank */
        }
      }
      setPovThumbs(next);
    }, interacting ? 700 : 200);
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [povCamId, items, interacting, roofPhoto, backgroundImg, terrainHeights]);
  useEffect(() => {
    // Enter looks through the selected camera; while looking: Esc back to the map, arrows switch cameras.
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "SELECT" || t.isContentEditable)) return;
      if (!povCamId) {
        if (e.key === "Enter" && selectedCamera && !e.ctrlKey && !e.metaKey) {
          e.preventDefault();
          lookThrough(selectedCamera.id);
        }
        return;
      }
      if (e.ctrlKey || e.metaKey) return; // undo/redo/save still work
      const i = cameraItems.findIndex(c => c.id === povCamId);
      if (e.key === "Escape" || e.key === "Enter") setPovCamId(null);
      else if (e.key === "n" || e.key === "N") setPovNight(v => !v);
      else if (e.key === "s" || e.key === "S") setPovSettings(v => !v);
      else if ((e.key === "ArrowRight" || e.key === "ArrowLeft") && cameraItems.length > 1) {
        const next = cameraItems[(i + (e.key === "ArrowRight" ? 1 : -1) + cameraItems.length) % cameraItems.length];
        lookThrough(next.id);
      } else if (e.key !== "?") return;
      e.preventDefault();
      e.stopImmediatePropagation();
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  });
  const povCamera = povCamId ? cameraItems.find(c => c.id === povCamId) ?? null : null;
  useEffect(() => {
    if (!povCamId) setPovNight(false);
  }, [povCamId]);
  useEffect(() => {
    viewRef.current?.setPovNight(povNight);
  }, [povNight]);
  // What a camera gets: its setup, and how well it sees each spot it is the best camera for.
  const cameraDetails = (cam: CameraItem | null) => {
    if (!cam) return [];
    const lines: { text: string; tone?: "good" | "warn" | "bad" }[] = [];
    const heightFt = Math.round(cam.mount?.height ?? cam.height ?? DEFAULT_CAMERA_HEIGHT_FT);
    const res = RESOLUTION_PRESETS.find(r => r.width === (cam.resolutionWidth ?? DEFAULT_RESOLUTION_WIDTH))?.label ?? `${cam.resolutionWidth}px`;
    lines.push({ text: `${Math.round(getCameraHFov(cam))}° wide · ${res} · ${heightFt} ft up · tilted ${Math.abs(Math.round(cam.pitch ?? DEFAULT_CAMERA_PITCH))}° down` });
    const mine = targetItems.filter(t => targetResults.get(t.id)?.best?.cameraId === cam.id);
    mine.forEach(t => {
      const r = targetResults.get(t.id)!;
      lines.push({
        text: r.met
          ? `${t.label}: ${LEVEL_LABEL[r.best!.level]} ✓`
          : `${t.label}: ${LEVEL_LABEL[r.best!.level]}, wants ${GOAL_LABEL[t.goal ?? "recognize"]?.toLowerCase() ?? t.goal}: zoom in (narrower lens) or move closer`,
        tone: r.met ? "good" : "warn"
      });
    });
    if (!mine.length && targetItems.length) lines.push({ text: "Not the best camera for any marked spot", tone: "warn" });
    return lines;
  };
  const povDetails = povCamera && povNight
    ? [{ text: `Night: infrared lights about ${Math.round(povCamera.irRangeFt ?? DEFAULT_IR_RANGE_FT)} ft (black and white)` }, ...cameraDetails(povCamera)]
    : cameraDetails(povCamera);

  const blindSpots = useMemo(() => {
    if (!showBlindSpots || viewMode === "nvr") return null;
    // Your property, not the whole imported area: around the cameras, the marked spots and the
    // buildings the cameras are on (falls back to the whole plan with nothing placed).
    const pts: { x: number; y: number }[] = [...coverageModel.cameras, ...targetItems];
    items.forEach(i => {
      if (i.type === "camera" && (i as CameraItem).mount?.type === "building") {
        const b = items.find(x => x.id === (i as CameraItem).mount?.buildingId) as BuildingItem | undefined;
        if (b) pts.push(...getBuildingEdgePointsWorld(b));
      }
    });
    const b = boundsOfPoints(pts);
    const pad = 50 * coverageModel.upf;
    const area = b
      ? {
        x: Math.max(0, b.minX - pad),
        y: Math.max(0, b.minY - pad),
        width: Math.min(canvasSize.width, b.maxX + pad) - Math.max(0, b.minX - pad),
        height: Math.min(canvasSize.height, b.maxY + pad) - Math.max(0, b.minY - pad)
      }
      : { x: 0, y: 0, width: canvasSize.width, height: canvasSize.height };
    const cell = Math.max(area.width, area.height) / 80;
    return { ...blindSpotCells(coverageModel.cameras, area, cell, coverageModel.obstacles, coverageModel.upf), area };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showBlindSpots, viewMode, coverageModel, canvasSize.width, canvasSize.height]);

  // Point a camera at a plan position: turn toward it and tilt to center it at head height.
  const aimCameraAt = (cameraId: string, pt: { x: number; y: number }) => {
    const cam = items.find(i => i.id === cameraId) as CameraItem | undefined;
    if (!cam) return;
    const pos = getCameraPlanPosition(cam);
    const rotation = ((((Math.atan2(pt.y - pos.y, pt.x - pos.x) * 180) / Math.PI) % 360) + 360) % 360;
    const distanceFt = Math.hypot(pt.x - pos.x, pt.y - pos.y) / (planGeoRef?.unitsPerFoot ?? 1);
    const pitch = suggestPitchForDistance(cam.mount?.height ?? cam.height ?? DEFAULT_CAMERA_HEIGHT_FT, distanceFt);
    updateItem(cam.id, { rotation, pitch });
    setTimeout(() => saveHistory(), 50);
  };

  // One click for a spot that isn't covered well enough: aim the camera that sees it best at it and
  // zoom the lens in until it gets the detail wanted (a varifocal lens goes to about 25°). With no
  // camera seeing it at all, suggest one.
  const fixSpot = (targetId: string) => {
    const t = targetItems.find(x => x.id === targetId);
    if (!t) return;
    const camId = targetResults.get(targetId)?.best?.cameraId;
    // Nothing sees it yet: turn a camera that isn't needed for any other spot, if one would see it.
    const busy = new Set([...targetResults.entries()].filter(([id, r]) => id !== targetId && r.best).map(([, r]) => r.best!.cameraId));
    const turnId = camId ?? cameraToTurn(coverageModel.cameras, t, coverageModel.obstacles, coverageModel.upf, busy,
      (c, distanceFt) => suggestPitchForDistance(c.heightFt, distanceFt))?.id;
    const cam = turnId ? cameraItems.find(c => c.id === turnId) : undefined;
    if (!cam) {
      handleSuggestCameras();
      return;
    }
    const pos = getCameraPlanPosition(cam);
    const distanceFt = Math.hypot(t.x - pos.x, t.y - pos.y) / (planGeoRef?.unitsPerFoot ?? 1);
    const rotation = ((((Math.atan2(t.y - pos.y, t.x - pos.x) * 180) / Math.PI) % 360) + 360) % 360;
    const pitch = suggestPitchForDistance(cam.mount?.height ?? cam.height ?? DEFAULT_CAMERA_HEIGHT_FT, distanceFt);
    const goal = DORI_LEVELS.find(l => l.id === (t.goal ?? "recognize")) ?? DORI_LEVELS[1];
    const current = getCameraHFov(cam);
    const hFov = Math.round(Math.max(25, Math.min(current, hFovForDensity(getCameraResolution(cam), goal.ppm, distanceFt * 1.1))));
    const zoom = hFov < current - 0.5;
    updateItem(cam.id, { rotation, pitch, ...(zoom ? { hFov, fov: hFov } : {}) } as Partial<CameraItem>);
    setTimeout(() => saveHistory(), 50);
    showExportNotice(`Aimed ${cam.label} at ${t.label}${zoom ? ` and zoomed in to ${hFov}° wide` : ""}.`, "success", { label: "Undo", run: handleUndo });
  };

  // --- What the map view shows, and what it reports back ---
  const viewDoc = useMemo<ViewDoc>(() => ({
    items,
    canvas: canvasSize,
    unitsPerFoot: planGeoRef?.unitsPerFoot ?? 1,
    gridSize,
    showGrid,
    snapToGrid,
    heights: terrainHeights,
    terrain: terrainStats,
    background: { url: backgroundImg, rect: { x: bgSettings.x, y: bgSettings.y, width: bgSettings.width, height: bgSettings.height }, opacity: bgSettings.opacity },
    overlay: hasTerrain ? elevationOverlay : "off",
    contours: { segments: contourSegments, interval: contourInterval },
    shadeUrl: hasTerrain && elevationOverlay === "shaded" ? elevationShadeUrl : null,
    cones: {
      visible: frustumSettings.visible,
      showAll: frustumSettings.showAll !== false,
      dori: showDoriZones,
      opacity: frustumSettings.opacity,
      color: frustumSettings.useCameraColor ? null : frustumSettings.color
    },
    targetStatus: Object.fromEntries(targetItems.map(t => [t.id, targetStatus(targetResults.get(t.id))])),
    blindSpots: blindSpots ? { runs: blindSpots.runs, area: blindSpots.area } : null,
    roofPhoto,
    geo: !!planGeoRef
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [items, canvasSize, planGeoRef, gridSize, showGrid, snapToGrid, terrainHeights, terrainStats, backgroundImg, bgSettings, hasTerrain, elevationOverlay, contourSegments, contourInterval, elevationShadeUrl, frustumSettings, showDoriZones, targetResults, blindSpots, roofPhoto]);

  // A sample of what a click would place, for the preview under the cursor.
  const placePreview = useMemo(() => {
    const kind = ({ "add-camera": "camera", "add-building": "building", "add-tree": "tree", "add-parking": "parking", "add-label": "label", "add-target": "target", "add-recorder": "recorder" } as Partial<Record<ToolMode, NewItemKind>>)[mode];
    if (!kind) return null;
    return createItem(kind, 0, 0, { unitsPerFoot: planGeoRef?.unitsPerFoot ?? 1, ...toolDefaults });
  }, [mode, toolDefaults, planGeoRef]);

  const viewTool = useMemo<ViewTool>(() => ({
    mode,
    terrain: isTerrainMode,
    terrainTool,
    brushRadius: Math.max(gridSize, clamp(terrainBrushSize, TERRAIN_BRUSH_MIN, TERRAIN_BRUSH_MAX) * gridSize),
    aimingCameraId,
    vertexInsert: vertexInsertMode,
    mapMove: mapMoveMode && !!backgroundImg,
    preview: placePreview
  }), [mode, isTerrainMode, terrainTool, gridSize, terrainBrushSize, aimingCameraId, vertexInsertMode, mapMoveMode, backgroundImg, placePreview]);

  // 2D / 3D tabs are poses of the same view. A tilt done in the view switches the tab to match.
  const [poseSignal, setPoseSignal] = useState(0);
  const poseFromViewRef = useRef(false);
  useEffect(() => {
    if (viewMode === "nvr") return;
    if (poseFromViewRef.current) {
      poseFromViewRef.current = false;
      return;
    }
    setPoseSignal(s => s + 1);
  }, [viewMode]);

  const viewCallbacks: ViewCallbacks = {
    onSelect: id => {
      setSelectedId(id);
      if (id) setMode("select");
    },
    onPlace: (tool, p) => {
      if (placeNewItemAt(tool, p.x, p.y)) setTimeout(() => saveHistory(), 50);
    },
    onTrace: p => traceRoofAt(p),
    onAim: p => {
      if (!aimingCameraId) return;
      aimCameraAt(aimingCameraId, p);
      setAimingCameraId(null);
    },
    onChange: (id, patch) => updateItem(id, patch),
    onCommit: () => setTimeout(() => saveHistory(), 30),
    onInsertVertex: (id, p) => {
      handleInsertBuildingVertexAtPoint(id, p);
      setVertexInsertMode(false);
      setTimeout(() => saveHistory(), 50);
    },
    onTerrainBrush: (p, dt, lower, phase) => {
      const tool = terrainToolRef.current;
      if (phase === "end") {
        saveHistory(undefined, terrainHeightsRef.current);
        return;
      }
      if (phase === "start" && tool === "flatten" && terrainFlattenSampleRef.current) {
        const target = getGridHeight(p.x, p.y, terrainHeightsRef.current);
        setTerrainFlattenTarget(target);
        terrainFlattenTargetRef.current = target;
      }
      applyBrushStroke(p.x, p.y, tool, tool === "sculpt" && lower ? -1 : 1, dt);
      terrainHoverRef.current = { pointX: p.x, pointZ: p.y };
      updateElevationReadout(p.x, p.y);
    },
    onBackgroundDrag: (dx, dy, phase) => {
      if (phase === "move") setBgSettings(prev => ({ ...prev, x: prev.x + dx, y: prev.y + dy }));
      else setTimeout(() => saveHistory(), 30);
    },
    onHover: p => {
      if (p) {
        updateElevationReadout(p.x, p.y);
        updateCameraReadout(p.x, p.y);
        terrainHoverRef.current = { pointX: p.x, pointZ: p.y };
      } else {
        updateElevationReadout(-1, -1);
        if (cameraReadoutRef.current) cameraReadoutRef.current.style.opacity = "0";
      }
    },
    onPose: pose => {
      const next: ViewMode = pose === "top" ? "plan" : "iso3d";
      if (viewMode === "nvr" || viewMode === next) return;
      poseFromViewRef.current = true;
      setViewMode(next);
    },
    onInteraction: active => {
      interactingRef.current = active;
      setInteracting(active);
    }
  };

  // One-line hint for the active tool (status-bar style).
  const toolHint = (() => {
    if (isTerrainMode) return "Terrain: click and hold to raise · Shift to lower · switch tool in the Terrain panel";
    if (vertexInsertMode) return "Click on an edge to add a corner";
    switch (mode) {
      case "add-camera": return "Click to place a camera · click next to a wall to mount it there · Esc to cancel";
      case "add-building": return "Click to place a building · then drag its corners to match the roof";
      case "trace-building": return backgroundImg ? "Click a roof on the map to trace it into a 3D building · Esc when done" : "Import your site first — this tool traces roofs from the satellite map";
      case "add-tree": return "Click to place a tree";
      case "add-parking": return "Click to place a vehicle";
      case "add-label": return "Click to add a text label";
      case "add-target": return "Click a door, gate or driveway you want covered · Esc to cancel";
      case "add-recorder": return "Click where the recorder (NVR) goes, such as a closet or garage · Esc to cancel";
      case "measure": return "Click two points to measure · Shift+click to keep going · Esc when done";
      default:
        if (aimingCameraId) return "Click where the camera should look · Esc to cancel";
        if (selectedCamera) return "Drag the camera to move it · blue dot aims it · side dots widen · tip sets range · bar above sets height";
        if (selectedItem?.type === "building") return "Drag to move · corners reshape · pull an edge's middle dot to add a corner · bar on top sets height · ↻ rotates";
        if (selectedItem) return "Drag to move it · Delete removes it";
        return "Drag to pan · scroll or pinch to zoom · right-drag or Shift+drag to rotate and tilt";
    }
  })();

  // Guided workflow (header steps): what's done, and where each step takes you.
  // A step is ticked when it is really finished: the site is imported, the user moved on with
  // "Next", every protected spot is covered, or the report was downloaded. Adding one thing
  // doesn't finish a step.
  const allSpotsCovered = targetItems.length > 0 && targetItems.every(t => targetResults.get(t.id)?.met);
  const workflowStepsDone: Record<WorkflowStepId, boolean> = {
    // Done once the site is in the plan (finding the address isn't enough).
    site: !!backgroundImg || !!planGeoRef || completedSteps.includes("site"),
    buildings: completedSteps.includes("buildings"),
    cameras: completedSteps.includes("cameras") || allSpotsCovered,
    review: completedSteps.includes("review"),
    report: completedSteps.includes("report")
  };
  const WORKFLOW_ORDER: WorkflowStepId[] = ["site", "buildings", "cameras", "review", "report"];
  const activeStep: WorkflowStepId = activeStepChoice ?? WORKFLOW_ORDER.find(id => !workflowStepsDone[id]) ?? "report";
  // A step shows its panel (a workspace with that step's tools); it never locks the user in.
  const handleWorkflowStep = (step: WorkflowStepId) => {
    setActiveStepChoice(step);
    setExportNotice(null);
    setSelectedId(null);
    setRightPanelMode("properties");
    setIsRightPanelOpen(true);
    if (mode !== "select") setMode("select");
    switch (step) {
      case "site":
        if (!workflowStepsDone.site) openElevationDialog();
        break;
      case "buildings":
      case "cameras":
        if (viewMode === "nvr") setViewMode("plan");
        break;
    }
  };
  const completeStep = (step: WorkflowStepId) => setCompletedSteps(prev => (prev.includes(step) ? prev : [...prev, step]));

  // Changes whenever anything visible in a camera view changes (used to refresh Monitor Wall tiles).
  const nvrSceneKey = useMemo(
    () => JSON.stringify([
      items.filter(i => i.type !== "label").map(i => [i.id, i.x, i.y, i.rotation, (i as any).wallHeight, (i as any).points, (i as any).height, (i as any).radius]),
      Object.keys(terrainHeights).length, terrainStats.min, terrainStats.max,
      backgroundImg ? backgroundImg.length : 0, bgSettings, sceneBackgroundImg ? sceneBackgroundImg.length : 0, gridSize
    ]),
    [items, terrainHeights, terrainStats.min, terrainStats.max, backgroundImg, bgSettings, sceneBackgroundImg, gridSize]
  );

  const selectedBuildingFont = selectedItem?.type === "building" ? getBuildingLabelFont(selectedItem as BuildingItem) : null;
  const cameraAspect = getCameraAspectValue(selectedCamera);
  // Drawn at the screen's pixel density so the picture is sharp.
  const cameraPreviewWidth = Math.round(previewWidth * Math.min(2, typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1));
  const cameraPreviewHeight = Math.round(cameraPreviewWidth / cameraAspect);
  const cameraHFov = selectedCamera ? selectedCamera.hFov ?? selectedCamera.fov : 109;
  const mountType = selectedCamera?.mount?.type ?? "free";
  const workspaceRightPadding = "";
  const workspaceLayoutClass = "items-stretch justify-stretch";
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
  const showProjectSettings = rightPanelMode === "project" && isRightPanelOpen;
  // The right panel is an inspector: it shows only when there's something to inspect or set.
  const inspectorVisible = (!!selectedItem || showProjectSettings) && (!povCamId || povSettings);
  const exportNoticeTone = exportNotice?.tone ?? "success";
  const exportNoticeClass =
    exportNoticeTone === "error"
      ? "border-red-500/50 text-red-100"
      : exportNoticeTone === "info"
        ? "border-white/15 text-slate-100"
        : "border-emerald-500/50 text-emerald-50";

  return (
    <div className="relative h-screen bg-zinc-950 font-sans text-slate-200 overflow-hidden w-full selection:bg-indigo-500/30">
      {exportNotice && (
        <div role="status" className={`absolute bottom-32 left-1/2 -translate-x-1/2 z-[70] w-max max-w-[min(36rem,calc(100%-2rem))] flex items-center gap-3 pl-4 pr-2 py-2 rounded-2xl border bg-zinc-900/95 text-sm font-medium leading-snug shadow-2xl backdrop-blur ${exportNoticeClass} animate-in fade-in slide-in-from-bottom-2`}>
          <span>{exportNotice.message}</span>
          {exportNotice.action && (
            <button
              onClick={() => { exportNotice.action?.run(); setExportNotice(null); }}
              className="shrink-0 px-2.5 py-1 rounded-lg bg-white/15 hover:bg-white/25 text-xs font-bold whitespace-nowrap"
            >
              {exportNotice.action.label}
            </button>
          )}
          <button onClick={() => setExportNotice(null)} className="shrink-0 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10" aria-label="Dismiss">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
      {showExportPanel && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden text-slate-200">
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">Report</p>
                <h2 className="text-lg font-semibold text-slate-200">Report options</h2>
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
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center text-slate-400 text-sm">
                    <p>No views picked yet</p>
                    <p className="text-xs mt-1">The PDF report includes the site plan, the coverage checklist, the camera list, a parts list and every camera's view automatically.</p>
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

              <details className="group rounded-lg border border-white/10 px-3 py-2">
              <summary className="cursor-pointer text-xs font-semibold text-slate-300">Plan image options (size, margins, grid, legend)</summary>
              <div className="mt-3 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase">Image size (×)</label>
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
                  <label className="text-xs font-semibold text-slate-400 uppercase">Margin (px)</label>
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
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${active ? "bg-emerald-500/20 border-emerald-400/40 text-emerald-200" : "bg-white/5 border-white/10 text-slate-400"
                          }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>
              </div>
              </details>
              <p className="text-xs text-slate-400">Tip: pick specific views with "Add to report" (3D Snapshot menu or the More menu); otherwise every camera's view is included.</p>
            </div>
            <div className="px-5 py-4 border-t border-white/10 bg-black/20 flex flex-wrap justify-end gap-2">
              <button
                onClick={() => setShowExportPanel(false)}
                className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-200"
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
                Plan image
              </button>
              <button
                onClick={() => {
                  handleExportReportPng();
                  setShowExportPanel(false);
                }}
                disabled={exportList.length === 0}
                className={`px-3 py-2 text-sm font-semibold rounded-lg ${exportList.length === 0
                  ? 'bg-white/5 text-slate-500 cursor-not-allowed'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  }`}
              >
                Report image
              </button>
              <button
                onClick={() => {
                  handleExportReportPdf();
                  setShowExportPanel(false);
                }}
                className="px-3 py-2 text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
                title={exportList.length === 0 ? "Builds a full report: site plan, camera schedule and every camera's view" : "Report with your selected views and the camera schedule"}
              >
                PDF report
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

                  <label className="flex items-center justify-between gap-2 cursor-pointer" title="Trees are found on the satellite photo and placed for you. Check them after importing.">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Trees</span>
                    <span className="flex items-center gap-2 text-xs text-slate-300">
                      Place from the photo
                      <input type="checkbox" checked={importTreesCars} onChange={e => setImportTreesCars(e.target.checked)} className="accent-emerald-500" aria-label="Place trees from the photo" />
                    </span>
                  </label>
                  <label className="flex items-center justify-between gap-2 cursor-pointer" title="Experimental: finds most cars in parking lots, but around homes it also takes walls, curbs and shadows for cars. Check them after importing.">
                    <span className="flex items-center gap-1.5 whitespace-nowrap text-[10px] uppercase font-bold text-slate-400">
                      Parked cars
                      <span className="rounded bg-amber-500/20 px-1 py-px text-[9px] font-semibold normal-case text-amber-300">Experimental</span>
                    </span>
                    <span className="flex items-center gap-2 whitespace-nowrap text-xs text-slate-300">
                      From the photo
                      <input type="checkbox" checked={importCars} onChange={e => setImportCars(e.target.checked)} className="accent-emerald-500" aria-label="Place parked cars from the photo (experimental)" />
                    </span>
                  </label>
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
                          <div className="rounded-lg bg-black/20 px-2 py-1.5 space-y-1.5" data-testid="building-align">
                            <div className="text-[11px] text-slate-300">
                              {buildingAlign.state === "working" ? (
                                <span className="flex items-center gap-1.5"><LoaderCircle className="w-3 h-3 animate-spin" /> Lining buildings up with the photo…</span>
                              ) : buildingAlign.nudged ? (
                                "Moved by hand."
                              ) : buildingAlign.state === "done" ? (
                                `Lined up with the photo (moved ~${buildingAlign.movedM < 1 ? "<1" : Math.round(buildingAlign.movedM)} m).`
                              ) : (
                                "Outlines off the roofs? Nudge them:"
                              )}
                            </div>
                            <div className="flex items-center gap-1">
                              {([
                                { label: "←", title: "Move all outlines west (0.5 m)", e: -0.5, n: 0 },
                                { label: "→", title: "Move all outlines east (0.5 m)", e: 0.5, n: 0 },
                                { label: "↑", title: "Move all outlines north (0.5 m)", e: 0, n: 0.5 },
                                { label: "↓", title: "Move all outlines south (0.5 m)", e: 0, n: -0.5 }
                              ]).map(b => (
                                <button key={b.label} type="button" title={b.title} aria-label={b.title} onClick={() => nudgeBuildingCandidates(b.e, b.n)} className="w-7 h-7 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 text-slate-200 text-sm">
                                  {b.label}
                                </button>
                              ))}
                              <button type="button" onClick={resetBuildingCandidatePositions} className="ml-auto px-2 h-7 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 text-[11px] text-slate-300" title="Put the outlines back where the map data had them">
                                Original
                              </button>
                            </div>
                          </div>
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
      {vertexInsertMode && viewMode !== "nvr" && selectedId && (
        <div className="absolute left-1/2 bottom-10 -translate-x-1/2 rounded-full bg-emerald-600/90 px-4 py-2 text-xs font-semibold text-white shadow-xl z-50 backdrop-blur-md">
          Click an edge to insert a vertex.
        </div>
      )}
      {/* --- Left sidebar: the guided workflow (steps) --- */}
      {sidebarOpen && !povCamId && (
        <aside className="absolute top-14 left-0 bottom-0 w-[22rem] z-30 bg-zinc-900 border-r border-white/10 overflow-y-auto custom-scrollbar" aria-label="Steps panel">
          <div className="p-5 flex flex-col gap-5">
                          <StepPanel
                step={activeStep}
                items={items}
                site={workflowStepsDone.site ? { details: siteDetails ?? undefined, label: siteLocation?.label, widthFt: canvasSize.width / (planGeoRef?.unitsPerFoot ?? 1), heightFt: canvasSize.height / (planGeoRef?.unitsPerFoot ?? 1), imagery: !!backgroundImg } : null}
                reportViews={exportList.length}
                showAllCones={frustumSettings.showAll !== false}
                onToggleCones={show => setFrustumSettings(prev => ({ ...prev, showAll: show }))}
                onSelect={selectFromList}
                onMine={(id, mine) => { updateItem(id, { mine } as Partial<CanvasItem>); }}
                onLook={lookThrough}
                startCardShown={viewMode === "plan" && items.length === 0 && !backgroundImg && !isTerrainMode && mode === "select"}
                onStep={handleWorkflowStep}
                onNext={(from, to) => { completeStep(from); handleWorkflowStep(to); }}
                onImportSite={openElevationDialog}
                onUploadBaseMap={() => fileInputRef.current?.click()}
                onTool={tool => { if (viewMode === "nvr") setViewMode("plan"); setMode(tool); }}
                onView={setViewMode}
                onReportPdf={handleExportReportPdf}
                onPlanPng={handleExportPng}
                onAddViewToReport={() => (viewMode === "iso3d" ? add3dToExportList() : addPlanToExportList())}
                onMoreReportOptions={() => setShowExportPanel(true)}
                onCamerasCsv={handleDownloadCamerasCsv}
                cabling={cabling && {
                  channels: cabling.summary.channels,
                  totalFt: cabling.summary.totalFt,
                  boxes: cabling.summary.boxes,
                  longest: cabling.summary.longest && { label: cabling.summary.longest.label, lengthFt: cabling.summary.longest.lengthFt },
                  tooLong: cabling.summary.tooLong.map(r => r.label)
                }}
                onPlaceRecorder={() => { if (viewMode !== "plan") setViewMode("plan"); setMode("add-recorder"); }}
                storage={{
                  widths: (items.filter(i => i.type === "camera") as CameraItem[]).map(c => c.resolutionWidth ?? DEFAULT_RESOLUTION_WIDTH),
                  days: recordDays,
                  mode: recordMode,
                  onDays: setRecordDays,
                  onMode: setRecordMode
                }}
                coverage={
                  <CoveragePanel
                    targets={targetItems}
                    results={targetResults}
                    cameras={items.filter(i => i.type === "camera") as CameraItem[]}
                    onAdd={() => { if (viewMode !== "plan") setViewMode("plan"); setMode("add-target"); }}
                    onSelect={selectFromList}
                    onUpdate={(id, patch) => { updateItem(id, patch); setTimeout(() => saveHistory(), 50); }}
                    onDelete={id => { deleteItem(id); setTimeout(() => saveHistory(), 50); }}
                    showBlindSpots={showBlindSpots}
                    onToggleBlindSpots={on => { setShowBlindSpots(on); if (on && viewMode !== "plan") setViewMode("plan"); }}
                    coveredFraction={blindSpots?.coveredFraction ?? null}
                    onSuggest={handleSuggestCameras}
                    onFix={fixSpot}
                    night={nightCoverage}
                    onToggleNight={setNightCoverage}
                  />
                }
              />
              <button
                onClick={() => {
                  setRightPanelMode("project");
                  setIsRightPanelOpen(true);
                }}
                className="text-xs text-slate-500 hover:text-slate-300 text-left"
              >
                Plan settings (name, grid, map, cones)…
              </button>
          </div>
        </aside>
      )}

      {/* --- Hidden file inputs --- */}
      <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleBackgroundUpload} />
      <input type="file" ref={elementImageInputRef} className="hidden" accept="image/*" onChange={handleElementImageUpload} />
      <input type="file" ref={projectInputRef} className="hidden" accept=".json,.zip" onChange={handleLoadProject} />
      <input type="file" ref={demInputRef} className="hidden" accept=".tif,.tiff" onChange={handleDemUpload} />

      {/* --- Top Header --- */}
      <AppHeader
        className="absolute top-0 left-0 right-0"
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen(v => !v)}
        projectName={projectName}
        onRename={setProjectName}
        onNew={() => { void handleNewProject(); }}
        onOpen={() => projectInputRef.current?.click()}
        recentPlans={recentPlans}
        onRecentMenu={refreshRecentPlans}
        onOpenRecent={id => { void openRecentPlan(id); }}
        onDeleteRecent={id => { void deleteRecentPlan(id); }}
        onDuplicate={() => { void duplicatePlan(); }}
        onSave={handleSaveProject}
        stepsDone={workflowStepsDone}
        activeStep={activeStep}
        onStep={handleWorkflowStep}
        viewMode={viewMode}
        onViewMode={setViewMode}
        onSettings={() => { setRightPanelMode("project"); setIsRightPanelOpen(true); }}
        onUploadBaseMap={() => fileInputRef.current?.click()}
        onAddOverlay={() => elementImageInputRef.current?.click()}
        onAddViewToReport={() => (viewMode === "iso3d" ? add3dToExportList() : addPlanToExportList())}
        onShortcuts={() => setShowShortcuts(true)}
      />
      {showShortcuts && <ShortcutsDialog onClose={() => setShowShortcuts(false)} />}

      {demAlignMode && demPreview && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-zinc-900/90 shadow-xl backdrop-blur">
          <span className="text-xs font-semibold text-slate-300 tracking-wide">DEM Align: drag on the mini-map</span>
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

      <div className="absolute z-0 overflow-hidden" style={{ top: 56, bottom: 0, left: sidebarOpen && !povCamId ? 352 : 0, right: 0 }}>
        {(viewMode === "plan" || viewMode === "iso3d") && !povCamId && renderToolDock()}
        {(viewMode === "plan" || viewMode === "iso3d") && (isTerrainMode || (mode !== "select" && mode !== "measure")) && (
          <div className="absolute top-3 left-3 z-40 w-72 max-h-[calc(100%-6.5rem)] overflow-y-auto custom-scrollbar rounded-2xl border border-white/10 bg-zinc-900/95 p-4 shadow-2xl backdrop-blur" aria-label="Tool options">
              {isTerrainMode ? (
                <div className="flex flex-col gap-4" data-testid="terrain-panel">
                  <div className="flex items-center justify-between">
                    <h2 className="font-bold text-lg text-slate-100">Terrain</h2>
                    <button onClick={() => setIsTerrainMode(false)} className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg" title="Done" aria-label="Done">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex flex-col gap-0">
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
                </div>
              ) : mode !== "select" ? (
                <ToolPanel
                  mode={mode}
                  defaults={toolDefaults}
                  onDefaults={patch => setToolDefaults(prev => ({ ...prev, ...patch }))}
                  onDone={() => setMode("select")}
                  hasSatellite={!!backgroundImg}
                />
              ) : null}
          </div>
        )}
        {/* --- Main Workspace --- */}
        <div className={`w-full h-full relative overflow-auto bg-zinc-950 flex ${workspaceLayoutClass} ${workspaceRightPadding} custom-scrollbar`}>
          <div className="bg-zinc-900 relative overflow-hidden w-full h-full">
            <SiteViewport
              doc={viewDoc}
              selectedId={selectedId}
              tool={viewTool}
              callbacks={viewCallbacks}
              pose={viewMode === "iso3d" ? "tilt" : "top"}
              poseSignal={poseSignal}
              hidden={viewMode === "nvr"}
              actions={selectedItem && mode === "select" && !isTerrainMode && !interacting ? {
                duplicate: duplicateSelected,
                rotate: selectedItem.type === "target" || selectedItem.type === "recorder" || (selectedCamera?.mount?.type === "building") ? undefined : () => rotateSelected(15),
                look: selectedCamera ? () => lookThrough(selectedCamera.id) : undefined,
                remove: () => { deleteItem(selectedItem.id); setTimeout(() => saveHistory(), 50); },
                zoomTo: zoomToSelection
              } : null}
              snapshot={{ download: handleExportCurrent3d, addToReport: add3dToExportList }}
              onReady={v => { viewRef.current = v; }}
              povId={povCamera ? povCamera.id : null}
              povUi={povCamera && (
                <CameraLook
                  cameras={cameraItems.map((c, i) => ({ id: c.id, number: i + 1, label: c.label, color: c.color, thumb: povThumbs[c.id] }))}
                  currentId={povCamera.id}
                  aspect={getCameraAspectValue(povCamera)}
                  details={povDetails}
                  onSwitch={lookThrough}
                  onExit={() => setPovCamId(null)}
                  onAddToReport={() => addCameraViewToExportList(povCamera, povNight)}
                  night={povNight}
                  onNight={setPovNight}
                  settingsOpen={inspectorVisible}
                  onSettings={() => setPovSettings(v => !v)}
                  rightInset={inspectorVisible ? 320 : 0}
                />
              )}
              rightInset={inspectorVisible ? 320 : 0}
            />
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
            {viewMode === "nvr" && (
              <div ref={nvrContainerRef} className="absolute inset-0 z-10 bg-zinc-950 flex flex-col overflow-hidden">
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
                              onMaximize={() => lookThrough(cam.id)}
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

            {viewMode !== "nvr" && toolHint && !povCamId && (
              <div className="absolute bottom-[5.25rem] left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                <div className="rounded-full bg-zinc-900/90 border border-white/10 shadow-lg px-4 py-1.5 text-xs font-medium text-slate-200 whitespace-nowrap">
                  {toolHint}
                </div>
              </div>
            )}

            {viewMode === "plan" && items.length === 0 && !backgroundImg && !isTerrainMode && mode === "select" && (
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <div className="pointer-events-auto w-[26rem] max-w-[90%] rounded-2xl border border-white/10 bg-zinc-900/95 shadow-2xl p-6 space-y-4 text-center">
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                    <Mountain className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-slate-100">Start your camera plan</h2>
                    <p className="text-sm text-slate-400 mt-1">Bring in your property's satellite map, elevation and buildings, then place cameras and see exactly what each one covers.</p>
                  </div>
                  <button onClick={openElevationDialog} className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-sm font-semibold text-white">
                    Find my property
                  </button>
                  <div className="grid grid-cols-2 gap-2">
                    <button onClick={() => fileInputRef.current?.click()} className="py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-200">
                      Upload a map or floor plan
                    </button>
                    <button onClick={() => setMode("add-camera")} className="py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-200">
                      Start on a blank grid
                    </button>
                  </div>
                </div>
              </div>
            )}

            {(viewMode === "plan" || viewMode === "iso3d") && !povCamId && (
              <div className="absolute bottom-4 left-4 z-30 flex flex-col items-start gap-2 pointer-events-none">
                <div
                  ref={cameraReadoutRef}
                  data-testid="camera-readout"
                  className="rounded-full bg-zinc-900/90 px-3 py-1 text-xs font-semibold text-slate-200 shadow border border-white/10 transition-opacity"
                  style={{ opacity: 0 }}
                />
                <div
                  ref={elevationReadoutRef}
                  className="rounded-full bg-zinc-900/90 px-3 py-1 text-xs font-semibold text-slate-200 shadow border border-white/10 transition-opacity"
                  style={{ opacity: 0 }}
                />
                {items.some(i => i.type === "camera") && (
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
                          <span className="w-2.5 h-2.5 rounded-sm border border-dashed border-slate-400" />
                          Gap at the camera = blind spot under it
                        </span>
                      </div>
                    )}
                  </div>
                )}
                {(hasTerrain || (backgroundImg && items.some(i => i.type === "building"))) && (
                <div className="flex items-center gap-1 rounded-lg bg-zinc-900/90 border border-white/10 shadow-lg p-0.5 pointer-events-auto">
                {hasTerrain && (
                  <div className="flex items-center gap-0.5" role="group" aria-label="Elevation display" title="Elevation">
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
                {backgroundImg && items.some(i => i.type === "building") && (
                  <label className={`flex items-center gap-1.5 px-2 py-1 text-[11px] font-semibold text-slate-200 cursor-pointer rounded-md hover:bg-white/10 ${hasTerrain ? "border-l border-white/10 rounded-l-none" : ""}`} title="Show the satellite photo on building roofs">
                    <input type="checkbox" checked={roofPhoto} onChange={e => setRoofPhoto(e.target.checked)} className="accent-emerald-500" aria-label="Photo on roofs" />
                    Photo on roofs
                  </label>
                )}
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
                {!hasTerrain && viewMode === "plan" && !isTerrainMode && (backgroundImg || items.length > 0) && (
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

        {/* What the selected camera sees: a window you can drag (it snaps to the edges), resize or minimize */}
        {selectedCamera && showCameraPreview && viewMode !== "nvr" && !povCamId && (
          <FloatingWindow
            label="Camera view"
            storageKey="scp.cameraViewPos"
            rightInset={inspectorVisible ? 320 : 0}
            width={previewWidth}
            onWidth={setPreviewWidth}
            minWidth={240}
            maxWidth={960}
            avoid={() => {
              const p = getCameraPlanPosition(selectedCamera);
              const s = viewRef.current?.toClient(p.x, p.y);
              const r = document.querySelector('[data-testid="plan"]')?.getBoundingClientRect();
              return s && r ? { x: s.x - r.left, y: s.y - r.top } : null;
            }}
            title={
              <>
                <Camera className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-sm font-medium text-slate-200 truncate">{selectedCamera.label}</span>
              </>
            }
            actions={
              <>
                <button
                  onClick={() => addCameraViewToExportList(selectedCamera)}
                  className="px-2 py-1 text-[11px] font-semibold text-emerald-300 hover:text-white hover:bg-emerald-600 rounded transition-colors flex items-center gap-1"
                  title="Add this view to the report"
                >
                  <Plus className="w-3 h-3" /> Report
                </button>
                <button
                  onClick={() => lookThrough(selectedCamera.id)}
                  className="p-1 text-slate-400 hover:text-white hover:bg-white/10 rounded transition-colors"
                  title="Look through this camera, full size (Enter)"
                  aria-label="Look through camera"
                >
                  <Maximize className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setShowCameraPreview(false)}
                  className="p-1 text-slate-400 hover:text-white hover:bg-white/10 rounded transition-colors"
                  title="Close"
                  aria-label="Close camera view"
                >
                  <X className="w-4 h-4" />
                </button>
              </>
            }
          >
            <div className="relative">
              <canvas
                ref={cameraPreviewRef}
                width={cameraPreviewWidth}
                height={cameraPreviewHeight}
                className="w-full block"
              />
              <div className="absolute left-2 bottom-2 rounded-md bg-black/55 px-2 py-0.5 text-[11px] text-slate-200 pointer-events-none">
                {(selectedCamera.hFov ?? selectedCamera.fov).toFixed(0)}° wide · {(selectedCamera.vFov ?? vFovFromH(selectedCamera.hFov ?? selectedCamera.fov, getCameraAspectValue(selectedCamera))).toFixed(0)}° tall · {Math.round(selectedCamera.range)} ft
              </div>
            </div>
          </FloatingWindow>
        )}
        {selectedCamera && !showCameraPreview && viewMode !== "nvr" && !povCamId && (
          <button
            onClick={() => setShowCameraPreview(true)}
            className="absolute bottom-24 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 rounded-full bg-zinc-900/95 border border-white/10 px-3 py-1.5 text-xs font-semibold text-slate-200 shadow-xl hover:bg-zinc-800"
          >
            <Camera className="w-3.5 h-3.5 text-emerald-400" /> Show {selectedCamera.label}'s view
          </button>
        )}

        {/* --- Properties Sidebar (Docked) --- */}
        <div className={`absolute right-0 top-14 bottom-0 w-80 bg-zinc-900/95 backdrop-blur border-l border-white/10 shadow-2xl overflow-y-auto z-40 custom-scrollbar ${inspectorVisible ? "block" : "hidden"}`} aria-label="Inspector">
          {selectedItem && !showProjectSettings ? (
            <div className="p-6 flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                {selectedCamera ? (
                  <h2 className="font-bold text-lg text-slate-200 flex items-center gap-2 min-w-0">
                    <span className="w-7 h-7 shrink-0 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: selectedCamera.color }} title="Camera number (on the map and in the report)">
                      {cameraItems.findIndex(c => c.id === selectedCamera.id) + 1}
                    </span>
                    <span className="truncate">{selectedCamera.label}</span>
                  </h2>
                ) : (
                  <h2 className="font-bold text-lg text-slate-200 capitalize">Edit {getItemTypeLabel(selectedItem.type)}</h2>
                )}
                <button
                  onClick={() => setSelectedId(null)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  title="Close Panel"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {selectedItem.type !== "label" && selectedItem.type !== "parking" && selectedItem.type !== "camera" && selectedItem.type !== "tree" && selectedItem.type !== "target" && selectedItem.type !== "recorder" && (
                <div className={`${panelSection} ${inspectorOrder("advanced")}`}>
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
                selectedItem.type === "target" ||
                selectedItem.type === "recorder" ||
                selectedItem.type === "label") && (
                  <div className={`${panelSection} ${inspectorOrder("name")}`}>
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
                <div className={`${panelSection} ${inspectorOrder("size")}`}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-400 uppercase">Width (ft)</label>
                      <input
                        type="number"
                      step="0.1"
                      min="1"
                      value={Math.round((selectedItem as any).width * 10) / 10}
                      onChange={e =>
                        selectedItem.type === "building"
                          ? updateBuildingSize(selectedItem.id, (parseFloat(e.target.value) || 1), (selectedItem as BuildingItem).height)
                          : updateItem(selectedItem.id, { width: (parseFloat(e.target.value) || 1) })
                      }
                      className="w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"
                    />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-400 uppercase">
                        {selectedItem.type === "parking" ? "Length (ft)" : "Depth (ft)"}
                      </label>
                      <input
                        type="number"
                      step="0.1"
                      min="1"
                      value={Math.round((selectedItem as any).height * 10) / 10}
                      onChange={e =>
                        selectedItem.type === "building"
                          ? updateBuildingSize((selectedItem as BuildingItem).id, (selectedItem as BuildingItem).width, (parseFloat(e.target.value) || 1))
                          : updateItem(selectedItem.id, { height: (parseFloat(e.target.value) || 1) })
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
                      {(Object.keys(VEHICLE_SIZES) as VehicleType[]).map(type => (
                        <button
                          key={type}
                          title={`${VEHICLE_SIZES[type].label}: ${VEHICLE_SIZES[type].width} × ${VEHICLE_SIZES[type].length} ft`}
                          // Picking a type also sets its real-world size.
                          onClick={() => updateItem(selectedItem.id, { vehicleType: type, ...vehicleDimensions(type, planGeoRef?.unitsPerFoot ?? 1) })}
                          className={`px-2 py-1.5 text-xs rounded capitalize transition-colors ${resolveVehicleType(selectedItem as ParkingItem) === type
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                            }`}
                        >
                          {VEHICLE_SIZES[type].label}
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
                    <span>{Math.round(((selectedItem as ParkingItem).vehicleHeight ?? 5) * 10) / 10} ft</span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="range"
                      min="3"
                      max="14"
                      step="0.1"
                      value={(selectedItem as ParkingItem).vehicleHeight ?? 5}
                      onChange={e => updateItem(selectedItem.id, { vehicleHeight: parseFloat(e.target.value) || 5 })}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 self-center"
                    />
                    <input
                      type="number"
                      min="3"
                      max="14"
                      step="0.1"
                      value={(selectedItem as ParkingItem).vehicleHeight ?? 5}
                      onChange={e => updateItem(selectedItem.id, { vehicleHeight: parseFloat(e.target.value) || 5 })}
                      className="w-16 bg-transparent border border-white/20 rounded-lg p-1 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none text-center"
                    />
                  </div>
                </div>
              </div>
            )}

              {selectedItem.type === "building" && (
                <div className={`${panelSection} ${inspectorOrder("main")}`}>
                  <label className="flex items-start gap-2.5 cursor-pointer rounded-lg bg-emerald-500/5 border border-emerald-500/20 p-2.5">
                    <input
                      type="checkbox"
                      checked={isOwnBuilding(selectedItem as BuildingItem)}
                      onChange={e => { updateItem(selectedItem.id, { mine: e.target.checked }); setTimeout(() => saveHistory(), 50); }}
                      className="accent-emerald-500 mt-0.5"
                      aria-label="My building"
                    />
                    <span>
                      <span className="block text-sm font-semibold text-slate-100">My building</span>
                      <span className="block text-[11px] text-slate-400">Suggested cameras are only mounted on your buildings, not the neighbors'.</span>
                    </span>
                  </label>
                  {backgroundImg && (
                    <button
                      onClick={() => fitBuildingToPhoto(selectedItem.id)}
                      className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-sm font-semibold text-slate-200"
                      title="Reshape this building to the roof on the satellite photo (L and T shapes too)"
                    >
                      <WandSparkles className="w-4 h-4 text-emerald-400" /> Fit outline to the photo
                    </button>
                  )}
                  <label className="text-xs font-semibold text-slate-400 uppercase flex justify-between">
                    <span>Wall Height</span>
                    <span>{(selectedItem as BuildingItem).wallHeight ?? DEFAULT_BUILDING.wallHeight} ft · ~{Math.max(1, Math.round(((selectedItem as BuildingItem).wallHeight ?? DEFAULT_BUILDING.wallHeight) / 11))} {Math.max(1, Math.round(((selectedItem as BuildingItem).wallHeight ?? DEFAULT_BUILDING.wallHeight) / 11)) === 1 ? "story" : "stories"}</span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="range"
                      min="6"
                      max="150"
                      value={(selectedItem as BuildingItem).wallHeight ?? DEFAULT_BUILDING.wallHeight}
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
                  <div className="space-y-1.5 pt-1">
                    <label className="text-xs font-semibold text-slate-400 uppercase">Roof</label>
                    <div className="grid grid-cols-4 gap-1" role="group" aria-label="Roof shape">
                      {(["auto", "gable", "hip", "flat"] as const).map(kind => {
                        const current = (selectedItem as BuildingItem).roofType ?? "auto";
                        return (
                          <button
                            key={kind}
                            type="button"
                            aria-pressed={current === kind}
                            title={kind === "auto" ? "Pick from the footprint: pitched for houses, flat for large buildings" : `${kind[0].toUpperCase()}${kind.slice(1)} roof`}
                            onClick={() => updateItem(selectedItem.id, { roofType: kind })}
                            className={`py-1.5 rounded-lg text-[11px] font-semibold border capitalize ${current === kind ? "border-emerald-400/50 bg-emerald-500/20 text-emerald-100" : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"}`}
                          >
                            {kind}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {selectedItem.type === "building" && (
                <div className={`${panelSection} ${inspectorOrder("advanced")}`}>
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
                <div className={`${panelSection} ${inspectorOrder("advanced")}`}>
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
                      <span>{(selectedItem as TreeItem).radius * 2} ft across</span>
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
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 space-y-1" data-testid="camera-verdict">
                  {cameraDetails(selectedItem as CameraItem).map((d, i) => (
                    <div key={i} className={`text-xs ${d.tone === "good" ? "text-emerald-300" : d.tone === "warn" ? "text-amber-300" : d.tone === "bad" ? "text-red-300" : "text-slate-300"}`}>{d.text}</div>
                  ))}
                  <button onClick={() => lookThrough(selectedItem.id)} className="mt-1.5 w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold">
                    <Eye className="w-4 h-4" /> Look through this camera
                  </button>
                  <div className="grid grid-cols-2 gap-1.5 pt-1">
                    <button onClick={() => copyCameraSettings(selectedItem as CameraItem)} className="py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-[11px] font-semibold text-slate-200" title="Copy this camera's lens, resolution, tilt and height (Ctrl+Shift+C)">
                      Copy settings
                    </button>
                    <button onClick={() => pasteCameraSettings(selectedItem as CameraItem)} className="py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-[11px] font-semibold text-slate-200" title="Give this camera the copied settings (Ctrl+Shift+V)">
                      Paste settings
                    </button>
                  </div>
                </div>
                <div className={panelSection}>
                  <CameraSetupPanel
                    camera={selectedItem as CameraItem}
                    mountHeight={(selectedItem as CameraItem).mount?.height ?? (selectedItem as CameraItem).height ?? DEFAULT_CAMERA_HEIGHT_FT}
                    onChange={updates => updateItem(selectedItem.id, updates)}
                    onMountHeightChange={height => setCameraMountHeight(selectedItem as CameraItem, height)}
                    aiming={aimingCameraId === selectedItem.id}
                    onAimAtPoint={() => { setViewMode("plan"); setAimingCameraId(aimingCameraId === selectedItem.id ? null : selectedItem.id); }}
                    targets={targetItems.map(t => ({ id: t.id, label: t.label }))}
                    onAimAtTarget={id => { const t = targetItems.find(x => x.id === id); if (t) aimCameraAt(selectedItem.id, { x: t.x, y: t.y }); }}
                  />
                </div>
                <details className={`${panelSectionLoose} group`}>
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-3 text-xs font-semibold text-slate-300">
                    <span className="uppercase whitespace-nowrap">Exact settings</span>
                    <span className="text-slate-500 font-normal text-right group-open:hidden">view width, range, turn, tilt, height, notes</span>
                  </summary>
                  <div className="space-y-4 pt-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 flex justify-between">
                      <span>View width</span>
                      <span>{Math.round(cameraHFov)}°</span>
                    </label>
                    <input type="range" min="10" max="180" value={cameraHFov} onChange={e => { const h = parseInt(e.target.value); updateCameraFov(selectedItem.id, h, vFovFromH(h, cameraAspect), cameraAspect); }} className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-600" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 flex justify-between">
                      <span>Shown out to</span>
                      <span>{Math.round((selectedItem as CameraItem).range)} ft</span>
                    </label>
                    <input type="range" min="5" max="800" value={(selectedItem as CameraItem).range} onChange={e => updateItem(selectedItem.id, { range: parseInt(e.target.value) })} className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-600" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 flex justify-between">
                      <span>Turn</span>
                      <span>{Math.round(selectedItem.rotation)}°</span>
                    </label>
                    <input type="range" min="0" max="360" value={selectedItem.rotation} onChange={e => updateItem(selectedItem.id, { rotation: parseInt(e.target.value) })} className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-600" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 flex justify-between">
                      <span>Tilt</span>
                      <span>{Math.round((selectedItem as CameraItem).pitch ?? DEFAULT_CAMERA_PITCH)}°</span>
                    </label>
                    <input type="range" min="-89" max="30" value={(selectedItem as CameraItem).pitch ?? DEFAULT_CAMERA_PITCH} onChange={e => updateItem(selectedItem.id, { pitch: parseInt(e.target.value) })} className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-600" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 flex justify-between">
                      <span>Height</span>
                      <span>{Math.round((selectedItem as CameraItem).mount?.height ?? (selectedItem as CameraItem).height ?? 10)} ft</span>
                    </label>
                    <input type="range" min="2" max="40" value={(selectedItem as CameraItem).mount?.height ?? (selectedItem as CameraItem).height ?? 10} onChange={e => setCameraMountHeight((selectedItem as CameraItem), parseInt(e.target.value))} className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-600" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400">Picture shape</label>
                    <select
                      value={cameraAspect}
                      onChange={e => {
                        const aspect = parseFloat(e.target.value);
                        updateCameraFov(selectedItem.id, cameraHFov, vFovFromH(cameraHFov, aspect), aspect);
                      }}
                      className="w-full bg-zinc-900 border border-white/20 rounded-lg p-2 text-sm text-slate-200 focus:border-emerald-500 outline-none"
                    >
                      <option value={16 / 9}>16:9 (most cameras)</option>
                      <option value={4 / 3}>4:3</option>
                      <option value={1}>1:1</option>
                    </select>
                  </div>
                  {mountType === "building" && (
                    <button
                      onClick={() => {
                        const pos = getCameraPlanPosition(selectedItem as CameraItem);
                        updateItem(selectedItem.id, { x: pos.x, y: pos.y, mount: { type: "free", height: (selectedItem as CameraItem).mount?.height ?? (selectedItem as CameraItem).height ?? 10 } });
                      }}
                      className="w-full py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-200"
                    >
                      Take it off the wall (free-standing)
                    </button>
                  )}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400">Notes (in the report)</label>
                    <textarea
                      value={(selectedItem as CameraItem).description}
                      onChange={e => updateItem(selectedItem.id, { description: e.target.value })}
                      className="w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 focus:border-emerald-500 outline-none h-16"
                    />
                  </div>
                  </div>
                </details>
                </>
              )}

              {selectedItem.type !== "image" && selectedItem.type !== "parking" && COLORS[selectedItem.type as keyof typeof COLORS] && (
                <div className={`${panelSection} ${inspectorOrder("color")}`}>
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

              {selectedItem.type === "target" && (() => {
                const t = selectedItem as TargetItem;
                const result = targetResults.get(t.id);
                const status = targetStatus(result);
                const cams = items.filter(i => i.type === "camera") as CameraItem[];
                const chipCls = (on: boolean) => `px-2 py-1.5 rounded-lg text-[11px] font-semibold border ${on ? "border-emerald-400/50 bg-emerald-500/20 text-emerald-100" : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"}`;
                return (
                  <div className={panelSection}>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="w-3 h-3 rounded-full" style={{ background: STATUS_COLOR[status] }} />
                      <span className="text-slate-200 font-semibold">
                        {status === "met" ? "Covered" : status === "partial" ? "Seen, but not enough detail" : "Not covered yet"}
                      </span>
                    </div>
                    <label className="text-xs font-semibold text-slate-400 uppercase">What is it?</label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {(Object.keys(TARGET_KINDS) as TargetItem["kind"][]).map(k => (
                        <button key={k} className={chipCls(t.kind === k)} onClick={() => updateItem(t.id, { kind: k, goal: TARGET_KINDS[k].goal, ...(t.label.startsWith(TARGET_KINDS[t.kind].label) ? { label: t.label.replace(TARGET_KINDS[t.kind].label, TARGET_KINDS[k].label) } : {}) })}>
                          {TARGET_KINDS[k].label}
                        </button>
                      ))}
                    </div>
                    <label className="text-xs font-semibold text-slate-400 uppercase">Detail needed</label>
                    <div className="grid grid-cols-2 gap-1.5">
                      {([
                        ["identify", "See faces"],
                        ["recognize", "Recognize people"],
                        ["observe", "See what's happening"],
                        ["detect", "Notice someone"]
                      ] as [TargetItem["goal"], string][]).map(([g, label]) => (
                        <button key={g} className={chipCls(t.goal === g)} onClick={() => updateItem(t.id, { goal: g })}>{label}</button>
                      ))}
                    </div>
                    {cams.length > 0 && (
                      <>
                        <label className="text-xs font-semibold text-slate-400 uppercase">Point a camera here</label>
                        <div className="flex flex-wrap gap-1.5">
                          {cams.map((c, i) => (
                            <button key={c.id} className={chipCls(false)} onClick={() => aimCameraAt(c.id, { x: t.x, y: t.y })} title={`Turn and tilt ${c.label} toward ${t.label}`}>
                              {c.label || `Camera ${i + 1}`}
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                );
              })()}

              {selectedItem.type === "building" && (
                <button
                  type="button"
                  onClick={() => setShowMoreOptions(v => !v)}
                  aria-expanded={showMoreOptions}
                  className={`${inspectorOrder("toggle")} flex items-center justify-between w-full px-1 text-xs font-semibold text-slate-400 hover:text-slate-200`}
                >
                  <span>{showMoreOptions ? "Fewer options" : "More options: rotation, label font, corners"}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${showMoreOptions ? "rotate-180" : ""}`} />
                </button>
              )}

              <div className={`${panelSection} order-last`}>
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
                  onClick={() => setRightPanelMode("properties")}
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
                <h3 className="text-sm font-semibold text-slate-300">Grid</h3>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase flex justify-between">
                    <span>Grid size</span>
                    <span>{gridSize} ft</span>
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="80"
                    value={gridSize}
                    onChange={e => changeGridSize(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                </div>
                <label className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 cursor-pointer">
                  Show grid (blank plans)
                  <input type="checkbox" className="accent-emerald-500" checked={showGrid} onChange={() => setShowGrid(prev => !prev)} />
                </label>
                <label className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 cursor-pointer">
                  Snap to grid
                  <input type="checkbox" className="accent-emerald-500" checked={snapToGrid} onChange={() => setSnapToGrid(prev => !prev)} />
                </label>
              </div>

              {backgroundImg && (
                <div className={panelSectionLoose}>
                  <h3 className="text-sm font-semibold text-slate-300">Map image</h3>
                  <button
                    onClick={() => setMapMoveMode(v => !v)}
                    className={`w-full py-2 rounded-lg text-xs font-semibold border ${mapMoveMode ? "border-emerald-400/40 bg-emerald-500/20 text-emerald-200" : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"}`}
                  >
                    {mapMoveMode ? "Moving the map: drag it, then click here when done" : "Move the map to line it up"}
                  </button>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase flex justify-between">
                      <span>Map opacity</span>
                      <span>{Math.round(bgSettings.opacity * 100)}%</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={bgSettings.opacity}
                      onChange={e => setBgSettings({ ...bgSettings, opacity: parseFloat(e.target.value) })}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    />
                  </div>
                </div>
              )}

              <div className={panelSectionLoose}>
                <h3 className="text-sm font-semibold text-slate-300">Camera cones in 3D</h3>
                <label className="flex items-center justify-between text-sm text-slate-300 cursor-pointer">
                  Show cones
                  <input type="checkbox" className="accent-emerald-500" checked={frustumSettings.visible} onChange={e => setFrustumSettings({ ...frustumSettings, visible: e.target.checked })} />
                </label>
                {frustumSettings.visible && (
                  <>
                    <label className="flex items-center justify-between text-sm text-slate-300 cursor-pointer">
                      Selected camera only
                      <input type="checkbox" className="accent-emerald-500" checked={frustumSettings.showAll === false} onChange={e => setFrustumSettings({ ...frustumSettings, showAll: !e.target.checked })} />
                    </label>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>Opacity</span>
                        <span>{Math.round(frustumSettings.opacity * 100)}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={frustumSettings.opacity}
                        onChange={e => setFrustumSettings({ ...frustumSettings, opacity: parseFloat(e.target.value) })}
                        className="w-full accent-emerald-500 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          ) : (
            null
          )}
        </div>
      </div>
    </div>
  );
}
