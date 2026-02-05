
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
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
  Plus,
  Box,
  Undo,
  Redo
} from "lucide-react";

// --- Types ---

type ToolMode = "select" | "add-camera" | "add-building" | "add-tree" | "add-parking" | "add-label" | "add-model";
type InteractionType = "move" | "rotate" | "fov" | "range" | "resize-image" | "move-label" | "vertex" | null;
type ViewMode = "plan" | "iso3d";

interface BaseItem {
  id: string;
  x: number;
  y: number;
  rotation: number; // in degrees
  selected?: boolean;
}

interface CameraItem extends BaseItem {
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
}

interface BuildingItem extends BaseItem {
  type: "building";
  width: number;
  height: number;
  label: string;
  color: string;
  points?: { x: number; y: number }[];
}

interface TreeItem extends BaseItem {
  type: "tree";
  radius: number;
  color: string;
}

interface ParkingItem extends BaseItem {
  type: "parking";
  width: number;
  height: number;
  color: string;
}

interface LabelItem extends BaseItem {
  type: "label";
  text: string;
  fontSize: number;
  color: string;
}

interface ImageItem extends BaseItem {
  type: "image";
  src: string;
  width: number;
  height: number;
  label: string;
  aspectRatioLocked?: boolean;
}

interface ModelItem extends BaseItem {
  type: "model";
  src: string;
  scale: number;
  label: string;
}

type CanvasItem = CameraItem | BuildingItem | TreeItem | ParkingItem | LabelItem | ImageItem | ModelItem;

// --- Helper Functions ---

const generateId = () => Math.random().toString(36).substr(2, 9);

const COLORS = {
  camera: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"],
  building: ["#cbd5e1", "#94a3b8", "#64748b", "#475569", "#334155", "#1e293b"],
  tree: ["#22c55e", "#16a34a", "#15803d", "#14532d", "#84cc16", "#bef264"],
  parking: ["#e2e8f0", "#cbd5e1", "#94a3b8", "#f8fafc", "#ffffff", "#f1f5f9"],
  label: ["#1e293b", "#334155", "#475569", "#64748b", "#ef4444", "#3b82f6"]
};

const DEFAULT_CANVAS = { width: 1000, height: 700 };

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const normalizeAngle = (angle: number) => {
  let normalized = angle % 360;
  if (normalized > 180) normalized -= 360;
  if (normalized < -180) normalized += 360;
  return normalized;
};

const rectanglePoints = (width: number, height: number) => [
  { x: -width / 2, y: -height / 2 },
  { x: width / 2, y: -height / 2 },
  { x: width / 2, y: height / 2 },
  { x: -width / 2, y: height / 2 }
];

const getPointsBounds = (points: { x: number; y: number }[]) => {
  const xs = points.map(p => p.x);
  const ys = points.map(p => p.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  return { minX, maxX, minY, maxY, width: maxX - minX, height: maxY - minY };
};

// Create a detailed 3D car model
const create3dCar = (item: ParkingItem): THREE.Group => {
  const group = new THREE.Group();

  const width = item.width;
  const length = item.height;
  const carHeight = 12;
  const wheelRadius = 3;

  // Chassis
  const chassisGeometry = new THREE.BoxGeometry(width, carHeight, length);
  const chassisMaterial = new THREE.MeshStandardMaterial({ color: item.color, roughness: 0.3, metalness: 0.4 });
  const chassis = new THREE.Mesh(chassisGeometry, chassisMaterial);
  chassis.position.y = carHeight / 2 + wheelRadius;
  chassis.castShadow = true;
  chassis.receiveShadow = true;
  group.add(chassis);

  // Cabin
  const cabinWidth = width * 0.8;
  const cabinLength = length * 0.6;
  const cabinHeight = carHeight * 0.6;
  const cabinGeometry = new THREE.BoxGeometry(cabinWidth, cabinHeight, cabinLength);
  const cabinMaterial = new THREE.MeshStandardMaterial({ color: '#1e293b', roughness: 0.1, metalness: 0.8 }); // Dark glass
  const cabin = new THREE.Mesh(cabinGeometry, cabinMaterial);
  cabin.position.y = carHeight + wheelRadius + cabinHeight / 2;
  cabin.castShadow = true;
  group.add(cabin);

  // Wheels
  const wheelGeometry = new THREE.CylinderGeometry(wheelRadius, wheelRadius, 2, 16);
  const wheelMaterial = new THREE.MeshStandardMaterial({ color: '#0f172a' });
  wheelGeometry.rotateZ(Math.PI / 2);

  const wheelPositions = [
    { x: -width / 2, z: -length / 3 },
    { x: width / 2, z: -length / 3 },
    { x: -width / 2, z: length / 3 },
    { x: width / 2, z: length / 3 }
  ];

  wheelPositions.forEach(pos => {
    const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
    wheel.position.set(pos.x, wheelRadius, pos.z);
    wheel.castShadow = true;
    group.add(wheel);
  });

  // Headlights
  const lightGeo = new THREE.PlaneGeometry(3, 2);
  const headLightMat = new THREE.MeshBasicMaterial({ color: '#fef08a' }); // Yellowish
  const tailLightMat = new THREE.MeshBasicMaterial({ color: '#ef4444' }); // Red

  // Assuming "front" is usually usually -Z or +Z depending on rotation?
  // Let's put lights on both ends relative to length

  // Front lights
  const fl1 = new THREE.Mesh(lightGeo, headLightMat);
  fl1.position.set(-width / 3, carHeight + wheelRadius - 2, -length / 2 - 0.1);
  fl1.rotation.y = Math.PI;
  group.add(fl1);

  const fl2 = new THREE.Mesh(lightGeo, headLightMat);
  fl2.position.set(width / 3, carHeight + wheelRadius - 2, -length / 2 - 0.1);
  fl2.rotation.y = Math.PI;
  group.add(fl2);

  // Tail lights
  const tl1 = new THREE.Mesh(lightGeo, tailLightMat);
  tl1.position.set(-width / 3, carHeight + wheelRadius - 2, length / 2 + 0.1);
  group.add(tl1);

  const tl2 = new THREE.Mesh(lightGeo, tailLightMat);
  tl2.position.set(width / 3, carHeight + wheelRadius - 2, length / 2 + 0.1);
  group.add(tl2);

  group.position.set(item.x, 0, item.y);
  group.rotation.y = -THREE.MathUtils.degToRad(item.rotation);

  return group;
};

// Create a detailed 3D tree model
const create3dTree = (item: TreeItem): THREE.Group => {
  const group = new THREE.Group();

  // Trunk
  const trunkRadius = item.radius * 0.2;
  const trunkHeight = item.radius * 1.5;
  const trunkGeometry = new THREE.CylinderGeometry(trunkRadius * 0.7, trunkRadius, trunkHeight, 8);
  const trunkMaterial = new THREE.MeshStandardMaterial({ color: '#5D4037', roughness: 0.9 });
  const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
  trunk.position.y = trunkHeight / 2;
  trunk.castShadow = true;
  trunk.receiveShadow = true;
  group.add(trunk);

  // Canopy - composed of multiple spheres for a "fluffy" look
  const canopyMaterial = new THREE.MeshStandardMaterial({ color: item.color, roughness: 0.8 });

  // Main canopy
  const mainCanopyGeo = new THREE.IcosahedronGeometry(item.radius, 1);
  const mainCanopy = new THREE.Mesh(mainCanopyGeo, canopyMaterial);
  mainCanopy.position.y = trunkHeight + item.radius * 0.4;
  mainCanopy.castShadow = true;
  mainCanopy.receiveShadow = true;
  group.add(mainCanopy);

  // Random smaller spheres to add detail
  const detailCount = 5;
  for (let i = 0; i < detailCount; i++) {
    const size = item.radius * (0.3 + Math.random() * 0.3);
    const subGeo = new THREE.IcosahedronGeometry(size, 0);
    const subMesh = new THREE.Mesh(subGeo, canopyMaterial);

    // Position randomly around the main canopy
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;
    const dist = item.radius * 0.5;

    subMesh.position.set(
      Math.sin(phi) * Math.cos(theta) * dist,
      trunkHeight + item.radius * 0.4 + Math.cos(phi) * dist,
      Math.sin(phi) * Math.sin(theta) * dist
    );
    group.add(subMesh);
  }

  group.position.set(item.x, 0, item.y);
  return group;
};

const scalePointsToSize = (points: { x: number; y: number }[], width: number, height: number) => {
  const bounds = getPointsBounds(points);
  if (bounds.width === 0 || bounds.height === 0) return points;
  const center = { x: (bounds.minX + bounds.maxX) / 2, y: (bounds.minY + bounds.maxY) / 2 };
  const scaleX = width / bounds.width;
  const scaleY = height / bounds.height;
  return points.map(point => ({
    x: center.x + (point.x - center.x) * scaleX,
    y: center.y + (point.y - center.y) * scaleY
  }));
};

const insertVertexAtLongestEdge = (points: { x: number; y: number }[]) => {
  if (points.length < 2) return points;
  let longestIndex = 0;
  let longest = 0;
  for (let i = 0; i < points.length; i += 1) {
    const nextIndex = (i + 1) % points.length;
    const dx = points[nextIndex].x - points[i].x;
    const dy = points[nextIndex].y - points[i].y;
    const dist = Math.hypot(dx, dy);
    if (dist > longest) {
      longest = dist;
      longestIndex = i;
    }
  }
  const nextIndex = (longestIndex + 1) % points.length;
  const mid = {
    x: (points[longestIndex].x + points[nextIndex].x) / 2,
    y: (points[longestIndex].y + points[nextIndex].y) / 2
  };
  const next = [...points];
  next.splice(longestIndex + 1, 0, mid);
  return next;
};

const insertVertexAtNearestEdge = (points: { x: number; y: number }[], point: { x: number; y: number }) => {
  if (points.length < 2) return points;
  let insertIndex = 0;
  let closest = Number.POSITIVE_INFINITY;
  let bestPoint = point;

  for (let i = 0; i < points.length; i += 1) {
    const nextIndex = (i + 1) % points.length;
    const a = points[i];
    const b = points[nextIndex];
    const ab = { x: b.x - a.x, y: b.y - a.y };
    const ap = { x: point.x - a.x, y: point.y - a.y };
    const abLenSq = ab.x * ab.x + ab.y * ab.y || 1;
    let t = (ap.x * ab.x + ap.y * ab.y) / abLenSq;
    t = clamp(t, 0, 1);
    const proj = { x: a.x + ab.x * t, y: a.y + ab.y * t };
    const dist = Math.hypot(point.x - proj.x, point.y - proj.y);
    if (dist < closest) {
      closest = dist;
      insertIndex = i + 1;
      bestPoint = proj;
    }
  }

  const next = [...points];
  next.splice(insertIndex, 0, bestPoint);
  return next;
};

const adjustColor = (hex: string, amount: number) => {
  const normalized = hex.replace("#", "");
  const full = normalized.length === 3 ? normalized.split("").map(c => c + c).join("") : normalized;
  const num = parseInt(full, 16);
  const r = clamp((num >> 16) + amount, 0, 255);
  const g = clamp(((num >> 8) & 255) + amount, 0, 255);
  const b = clamp((num & 255) + amount, 0, 255);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
};

const fovFromDiagonal = (diag: number, aspect: number) => {
  const diagRad = (diag * Math.PI) / 180;
  const vRad = 2 * Math.atan(Math.tan(diagRad / 2) / Math.sqrt(aspect * aspect + 1));
  const hRad = 2 * Math.atan(Math.tan(vRad / 2) * aspect);
  return { h: (hRad * 180) / Math.PI, v: (vRad * 180) / Math.PI };
};

const diagonalFromHv = (h: number, v: number) => {
  const hRad = (h * Math.PI) / 180;
  const vRad = (v * Math.PI) / 180;
  const diag = 2 * Math.atan(Math.sqrt(Math.tan(hRad / 2) ** 2 + Math.tan(vRad / 2) ** 2));
  return (diag * 180) / Math.PI;
};

const vFovFromH = (h: number, aspect: number) => {
  const hRad = (h * Math.PI) / 180;
  const vRad = 2 * Math.atan(Math.tan(hRad / 2) / aspect);
  return (vRad * 180) / Math.PI;
};

const hFovFromV = (v: number, aspect: number) => {
  const vRad = (v * Math.PI) / 180;
  const hRad = 2 * Math.atan(Math.tan(vRad / 2) * aspect);
  return (hRad * 180) / Math.PI;
};

export default function SecurityPlanner() {
  // --- State ---
  const [items, setItems] = useState<CanvasItem[]>([]);
  const modelInputRef = useRef<HTMLInputElement>(null);

  // Clipboard
  const [clipboard, setClipboard] = useState<CanvasItem | null>(null);
  const clipboardRef = useRef<CanvasItem | null>(null);
  useEffect(() => { clipboardRef.current = clipboard; }, [clipboard]);

  // History State
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const historyRef = useRef<string[]>([]);
  const historyIndexRef = useRef(-1);

  // Sync refs for event listeners
  useEffect(() => {
    historyRef.current = history;
    historyIndexRef.current = historyIndex;
  }, [history, historyIndex]);

  const saveHistory = () => {
    const currentState = JSON.stringify(items);
    // Don't save if same as current top
    if (historyIndex >= 0 && history[historyIndex] === currentState) return;

    setHistory(prev => {
      const newHistory = prev.slice(0, historyIndex + 1);
      newHistory.push(currentState);
      if (newHistory.length > 30) newHistory.shift();
      return newHistory;
    });
    setHistoryIndex(prev => {
      const next = prev + 1;
      return next >= 30 ? 29 : next;
    });
  };

  const handleUndo = () => {
    const curIndex = historyIndexRef.current;
    if (curIndex > 0) {
      const newIndex = curIndex - 1;
      try {
        const state = JSON.parse(historyRef.current[newIndex]);
        setItems(state);
        setHistoryIndex(newIndex);
      } catch (e) {
        console.error("Undo failed", e);
      }
    }
  };

  const handleRedo = () => {
    const curIndex = historyIndexRef.current;
    if (curIndex < historyRef.current.length - 1) {
      const newIndex = curIndex + 1;
      try {
        const state = JSON.parse(historyRef.current[newIndex]);
        setItems(state);
        setHistoryIndex(newIndex);
      } catch (e) {
        console.error("Redo failed", e);
      }
    }
  };

  // Canvas + Background State
  const [canvasSize, setCanvasSize] = useState(DEFAULT_CANVAS);
  const [backgroundImg, setBackgroundImg] = useState<string | null>(null);
  const [bgSettings, setBgSettings] = useState({
    x: 0,
    y: 0,
    width: DEFAULT_CANVAS.width,
    height: DEFAULT_CANVAS.height,
    opacity: 0.5
  });

  const [gridSize, setGridSize] = useState(20);
  const [showGrid, setShowGrid] = useState(true);
  const [snapToGrid, setSnapToGrid] = useState(true);
  const [projectName, setProjectName] = useState("Security Camera Plan");
  const [showExportPanel, setShowExportPanel] = useState(false);
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

  // Interaction State
  const [interactionState, setInteractionState] = useState<{
    type: InteractionType;
    itemId: string | null;
    startMouse: { x: number; y: number };
    startVal: any;
    variant?: string;
    snap?: boolean;
  }>({ type: null, itemId: null, startMouse: { x: 0, y: 0 }, startVal: null, snap: false });

  // Refs
  const svgRef = useRef<SVGSVGElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const elementImageInputRef = useRef<HTMLInputElement>(null);
  const projectInputRef = useRef<HTMLInputElement>(null);
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
  const [snapshots, setSnapshots] = useState<{ id: string; dataUrl: string; createdAt: string }[]>([]);
  const [vertexInsertMode, setVertexInsertMode] = useState(false);
  const [showCameraPreview, setShowCameraPreview] = useState(true);

  // Export list - curated snapshots for client report
  const [exportList, setExportList] = useState<{
    id: string;
    type: 'plan' | '3d' | 'camera';
    label: string;
    dataUrl: string;
    cameraId?: string;
  }[]>([]);

  // Camera placement preview state - for visual feedback when placing cameras
  const [cameraPlacementPreview, setCameraPlacementPreview] = useState<{
    buildingId: string;
    edgeIndex: number;
    edgeT: number;
    point: { x: number; y: number };
    rotation: number; // Auto-calculated to face outward
  } | null>(null);

  // Persistence - Save state to local storage
  useEffect(() => {
    const saved = localStorage.getItem('securityCameraPlannerData');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (data.items) setItems(data.items);
        if (data.backgroundImg) setBackgroundImg(data.backgroundImg);
        if (data.bgSettings) setBgSettings(data.bgSettings);
        if (data.canvasSize) setCanvasSize(data.canvasSize);
        if (data.exportList) setExportList(data.exportList);
        if (data.projectName) setProjectName(data.projectName);
      } catch (e) {
        console.error("Failed to load saved state", e);
      }
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const data = {
          items,
          backgroundImg,
          bgSettings,
          canvasSize,
          exportList,
          projectName
        };
        localStorage.setItem('securityCameraPlannerData', JSON.stringify(data));
      } catch (err: any) {
        // Handle quota exceeded by trying to save without the heavy background image
        if (err.name === 'QuotaExceededError' || err.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
          console.error("Storage full, trying to save without background image");
          try {
            const partialData = {
              items,
              bgSettings,
              canvasSize,
              exportList,
              projectName
              // omit backgroundImg
            };
            localStorage.setItem('securityCameraPlannerData', JSON.stringify(partialData));
          } catch (e2) {
            console.error("Still failed to save", e2);
          }
        } else {
          console.error("Failed to save state", err);
        }
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [items, backgroundImg, bgSettings, canvasSize, exportList, projectName]);

  // Ref for camera preview canvas
  const cameraPreviewRef = useRef<HTMLCanvasElement>(null);
  const bgImageRef = useRef<HTMLImageElement | null>(null);

  const snapValue = (value: number, snap = snapToGrid) =>
    snap ? Math.round(value / gridSize) * gridSize : value;

  const getBuildingPoints = (building: BuildingItem) =>
    building.points && building.points.length >= 3 ? building.points : rectanglePoints(building.width, building.height);

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

      // Offset camera slightly away from the building center to prevent clipping
      const center = worldPoints.reduce((acc, p) => ({ x: acc.x + p.x, y: acc.y + p.y }), { x: 0, y: 0 });
      if (worldPoints.length > 0) {
        center.x /= worldPoints.length;
        center.y /= worldPoints.length;
      }

      const vecToPos = { x: pos.x - center.x, y: pos.y - center.y };
      const len = Math.hypot(vecToPos.x, vecToPos.y) || 1;
      const offset = 3.0; // Push out by 3 units (pixels)

      return {
        x: pos.x + (vecToPos.x / len) * offset,
        y: pos.y + (vecToPos.y / len) * offset
      };
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
  const findNearestBuildingEdge = (point: { x: number; y: number }): BuildingEdgeInfo | null => {
    let best: BuildingEdgeInfo | null = null;

    items.forEach(item => {
      if (item.type !== "building") return;
      const building = item as BuildingItem;
      const worldPoints = getBuildingEdgePointsWorld(building);

      // Calculate building center for determining "outward" direction
      const center = {
        x: worldPoints.reduce((sum, p) => sum + p.x, 0) / worldPoints.length,
        y: worldPoints.reduce((sum, p) => sum + p.y, 0) / worldPoints.length
      };

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

        // Calculate outward-facing rotation
        // The edge normal pointing outward from building center
        const edgeMidpoint = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
        const toOutside = { x: edgeMidpoint.x - center.x, y: edgeMidpoint.y - center.y };
        const outwardAngle = Math.atan2(toOutside.y, toOutside.x) * (180 / Math.PI);

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

    const CTM = svgRef.current.getScreenCTM();
    if (!CTM) return;

    const x = snapValue((e.clientX - CTM.e) / CTM.a);
    const y = snapValue((e.clientY - CTM.f) / CTM.d);

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
          label: "Camera",
          description: "",
          fov: 70,
          hFov: 70,
          vFov: 45,
          pitch: -15, // Slightly steeper downward angle for better coverage
          height: 60, // Default to building roof height
          aspect: 16 / 9,
          mount: { type: "free", edgeT: 0.5, height: 60 },
          range: 150,
          color: COLORS.camera[0],
          labelOffset: { x: 0, y: 30 },
          connectorDashSize: 3
        };
        break;
      case "add-building":
        newItem = {
          ...common,
          type: "building",
          width: 100,
          height: 80,
          label: "Building",
          color: COLORS.building[0],
          points: rectanglePoints(100, 80)
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
          width: 30,
          height: 50,
          color: COLORS.parking[0]
        };
        break;
      case "add-label":
        newItem = {
          ...common,
          type: "label",
          text: "Label",
          fontSize: 14,
          color: COLORS.label[0]
        };
        break;
      default:
        return;
    }

    if (newItem.type === "camera") {
      const edge = findNearestBuildingEdge({ x, y });
      // Very generous snap distance (100px) for easy camera placement on buildings
      if (edge && edge.distance < 100) {
        const cam = newItem as CameraItem;
        cam.x = edge.point.x;
        cam.y = edge.point.y;
        // Auto-rotate to face outward from building
        cam.rotation = edge.rotation;
        // Default height to building roof height (60) when attaching to building
        const buildingHeight = 60;
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
      label: "Image",
      aspectRatioLocked: true
    };
    setItems([...items, newItem]);
    setSelectedId(newItem.id);
  };

  const updateItem = (id: string, updates: Partial<CanvasItem>) => {
    setItems(items.map(item => (item.id === id ? { ...item, ...updates } : item)));
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
    setItems(items.filter(i => i.id !== id));
    if (selectedId === id) setSelectedId(null);
  };

  const handleClearCanvas = () => {
    if (!items.length) return;
    if (window.confirm("Clear all items from the canvas?")) {
      setItems([]);
      setSelectedId(null);
    }
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

  // --- Save / Load / Export ---

  const handleExportPng = () => {
    if (!svgRef.current) return;

    const { scale, padding, includeGrid, includeLegend, includeTitle } = exportOptions;
    const timestamp = new Date().toLocaleString();
    const width = canvasSize.width;
    const height = canvasSize.height;
    const titleHeight = includeTitle ? 52 : 0;
    const legendHeight = includeLegend ? 90 : 0;
    const totalWidth = width + padding * 2;
    const totalHeight = height + padding * 2 + titleHeight + legendHeight;

    const svgNS = "http://www.w3.org/2000/svg";
    const exportSvg = document.createElementNS(svgNS, "svg");
    exportSvg.setAttribute("xmlns", svgNS);
    exportSvg.setAttribute("width", `${totalWidth}`);
    exportSvg.setAttribute("height", `${totalHeight}`);
    exportSvg.setAttribute("viewBox", `0 0 ${totalWidth} ${totalHeight}`);

    const background = document.createElementNS(svgNS, "rect");
    background.setAttribute("x", "0");
    background.setAttribute("y", "0");
    background.setAttribute("width", `${totalWidth}`);
    background.setAttribute("height", `${totalHeight}`);
    background.setAttribute("fill", "#ffffff");
    exportSvg.appendChild(background);

    if (includeTitle) {
      const title = document.createElementNS(svgNS, "text");
      title.setAttribute("x", `${padding}`);
      title.setAttribute("y", `${padding + 24}`);
      title.setAttribute("font-size", "20");
      title.setAttribute("font-weight", "700");
      title.setAttribute("fill", "#0f172a");
      title.textContent = projectName || "Security Camera Plan";
      exportSvg.appendChild(title);

      const subtitle = document.createElementNS(svgNS, "text");
      subtitle.setAttribute("x", `${padding}`);
      subtitle.setAttribute("y", `${padding + 44}`);
      subtitle.setAttribute("font-size", "12");
      subtitle.setAttribute("fill", "#64748b");
      subtitle.textContent = `Exported ${timestamp}`;
      exportSvg.appendChild(subtitle);
    }

    const contentGroup = document.createElementNS(svgNS, "g");
    const contentY = padding + titleHeight;
    contentGroup.setAttribute("transform", `translate(${padding}, ${contentY})`);

    const source = svgRef.current.cloneNode(true) as SVGSVGElement;
    source.removeAttribute("width");
    source.removeAttribute("height");
    if (!includeGrid) {
      const grid = source.querySelector("#grid-bg");
      if (grid) grid.remove();
    }

    while (source.childNodes.length > 0) {
      contentGroup.appendChild(source.childNodes[0]);
    }
    exportSvg.appendChild(contentGroup);

    const frame = document.createElementNS(svgNS, "rect");
    frame.setAttribute("x", `${padding - 1}`);
    frame.setAttribute("y", `${contentY - 1}`);
    frame.setAttribute("width", `${width + 2}`);
    frame.setAttribute("height", `${height + 2}`);
    frame.setAttribute("fill", "none");
    frame.setAttribute("stroke", "#e2e8f0");
    frame.setAttribute("stroke-width", "2");
    exportSvg.appendChild(frame);

    if (includeLegend) {
      const legendY = contentY + height + 36;
      const legendItems = [
        { label: "Cameras", count: items.filter(item => item.type === "camera").length, color: COLORS.camera[0] },
        { label: "Buildings", count: items.filter(item => item.type === "building").length, color: COLORS.building[0] },
        { label: "Trees", count: items.filter(item => item.type === "tree").length, color: COLORS.tree[0] },
        { label: "Parking", count: items.filter(item => item.type === "parking").length, color: COLORS.parking[0] },
        { label: "Labels", count: items.filter(item => item.type === "label").length, color: COLORS.label[0] }
      ];

      const legendTitle = document.createElementNS(svgNS, "text");
      legendTitle.setAttribute("x", `${padding}`);
      legendTitle.setAttribute("y", `${legendY}`);
      legendTitle.setAttribute("font-size", "12");
      legendTitle.setAttribute("font-weight", "600");
      legendTitle.setAttribute("fill", "#0f172a");
      legendTitle.textContent = "Legend";
      exportSvg.appendChild(legendTitle);

      legendItems.forEach((entry, index) => {
        const itemX = padding + index * 150;
        const dot = document.createElementNS(svgNS, "rect");
        dot.setAttribute("x", `${itemX}`);
        dot.setAttribute("y", `${legendY + 14}`);
        dot.setAttribute("width", "10");
        dot.setAttribute("height", "10");
        dot.setAttribute("rx", "2");
        dot.setAttribute("fill", entry.color);
        exportSvg.appendChild(dot);

        const label = document.createElementNS(svgNS, "text");
        label.setAttribute("x", `${itemX + 16}`);
        label.setAttribute("y", `${legendY + 23}`);
        label.setAttribute("font-size", "11");
        label.setAttribute("fill", "#475569");
        label.textContent = `${entry.label} (${entry.count})`;
        exportSvg.appendChild(label);
      });
    }

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = totalWidth * scale;
    canvas.height = totalHeight * scale;

    if (ctx) {
      ctx.scale(scale, scale);
    }

    const svgData = new XMLSerializer().serializeToString(exportSvg);
    const img = new Image();
    const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    img.onload = () => {
      if (ctx) {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, totalWidth, totalHeight);
        ctx.drawImage(img, 0, 0);

        const pngUrl = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "security_plan.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  // Add snapshot to export list
  const addToExportList = (type: 'plan' | '3d' | 'camera', label: string, dataUrl: string, cameraId?: string) => {
    setExportList(prev => [...prev, {
      id: crypto.randomUUID(),
      type,
      label,
      dataUrl,
      cameraId
    }]);
  };

  // Render a camera's perspective view to data URL
  const renderCameraViewToDataUrl = (cam: CameraItem): string => {
    const width = 640;
    const height = 480;

    const camPos = getCameraPlanPosition(cam);
    const camHeight = cam.mount?.height ?? cam.height ?? 10;
    const hFov = cam.hFov ?? cam.fov;
    const pitch = cam.pitch ?? -15;
    const range = cam.range;
    const rotAngle = THREE.MathUtils.degToRad(cam.rotation);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#87CEEB');
    scene.fog = new THREE.Fog('#87CEEB', range * 0.3, range * 1.2);

    const perspCam = new THREE.PerspectiveCamera(hFov, width / height, 1, range * 2);
    perspCam.position.set(camPos.x, camHeight, camPos.y);

    const pitchRad = THREE.MathUtils.degToRad(pitch);
    const lookAt = new THREE.Vector3(
      camPos.x + Math.cos(rotAngle) * 100,
      camHeight + Math.tan(pitchRad) * 100,
      camPos.y + Math.sin(rotAngle) * 100
    );
    perspCam.lookAt(lookAt);

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.7);
    dirLight.position.set(100, 200, 50);
    scene.add(dirLight);

    // Ground
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(canvasSize.width * 2, canvasSize.height * 2),
      new THREE.MeshStandardMaterial({ color: '#6B8E23', roughness: 0.9 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(canvasSize.width / 2, 0, canvasSize.height / 2);
    scene.add(ground);

    // Background image
    if (bgImageRef.current) {
      const tex = new THREE.CanvasTexture(bgImageRef.current);
      tex.colorSpace = THREE.SRGBColorSpace;
      const mapPlane = new THREE.Mesh(
        new THREE.PlaneGeometry(bgSettings.width, bgSettings.height),
        new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: bgSettings.opacity })
      );
      mapPlane.rotation.x = -Math.PI / 2;
      mapPlane.position.set(bgSettings.x + bgSettings.width / 2, 0.1, bgSettings.y + bgSettings.height / 2);
      scene.add(mapPlane);
    }

    // Add items
    items.forEach(item => {
      if (item.type === "building") {
        const bld = item as BuildingItem;
        const pts = getBuildingPoints(bld);
        const shape = new THREE.Shape(pts.map(p => new THREE.Vector2(p.x, -p.y)));
        const geo = new THREE.ExtrudeGeometry(shape, { depth: 60, bevelEnabled: false });
        geo.rotateX(-Math.PI / 2);
        const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: bld.color, side: THREE.DoubleSide }));
        mesh.position.set(bld.x, 0, bld.y);
        mesh.rotation.y = -THREE.MathUtils.degToRad(bld.rotation);
        scene.add(mesh);
      }
      if (item.type === "tree") {
        const tree = create3dTree(item as TreeItem);
        scene.add(tree);
      }
      if (item.type === "parking") {
        const car = create3dCar(item as ParkingItem);
        scene.add(car);
      }
    });

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(width, height);
    renderer.render(scene, perspCam);

    // Add overlay
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = 'rgba(0,0,0,0.7)';
      ctx.fillRect(0, 0, width, 30);
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 14px sans-serif';
      ctx.fillText(`📷 ${cam.label}`, 10, 20);
      ctx.font = '12px sans-serif';
      ctx.fillStyle = '#94a3b8';
      const info = `FOV: ${hFov.toFixed(0)}° | Pitch: ${pitch}° | Range: ${range}px`;
      ctx.fillText(info, width - ctx.measureText(info).width - 10, 20);
    }

    const dataUrl = canvas.toDataURL('image/png');
    renderer.dispose();
    return dataUrl;
  };

  // Add current 2D plan to export list
  const addPlanToExportList = () => {
    if (!svgRef.current) return;
    const svgData = new XMLSerializer().serializeToString(svgRef.current);
    const canvas = document.createElement('canvas');
    canvas.width = canvasSize.width * 2;
    canvas.height = canvasSize.height * 2;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    img.onload = () => {
      ctx.scale(2, 2);
      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(0, 0, canvasSize.width, canvasSize.height);
      ctx.drawImage(img, 0, 0);
      addToExportList('plan', '2D Plan View', canvas.toDataURL('image/png'));
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  // Add current 3D view to export list
  const add3dToExportList = () => {
    const state = threeStateRef.current;
    if (!state) return;
    state.renderer.render(state.scene, state.camera);
    const dataUrl = state.renderer.domElement.toDataURL('image/png');
    addToExportList('3d', '3D Overview', dataUrl);
  };

  // Add camera view to export list
  const addCameraViewToExportList = (cam: CameraItem) => {
    const dataUrl = renderCameraViewToDataUrl(cam);
    addToExportList('camera', `Camera: ${cam.label}`, dataUrl, cam.id);
  };

  // Export comprehensive report with all items in export list
  const handleExportReportPng = async () => {
    if (exportList.length === 0) {
      alert('Add some views to the export list first!');
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
    if (!ctx) return;

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
      alert('Add some views to the export list first!');
      return;
    }

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Please allow popups to export PDF');
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

  const handleSaveProject = () => {
    const projectData = {
      version: 1,
      items,
      backgroundImg,
      bgSettings,
      canvasSize,
      gridSize,
      showGrid,
      snapToGrid,
      projectName,
      exportList
    };
    const jsonString = JSON.stringify(projectData, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "security_project.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleLoadProject = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = event => {
      try {
        const json = event.target?.result as string;
        const projectData = JSON.parse(json);

        if (projectData.items) setItems(projectData.items);
        if (projectData.backgroundImg) setBackgroundImg(projectData.backgroundImg);
        if (projectData.bgSettings) setBgSettings(projectData.bgSettings);
        if (projectData.canvasSize) setCanvasSize(projectData.canvasSize);
        if (typeof projectData.gridSize === "number") setGridSize(projectData.gridSize);
        if (typeof projectData.showGrid === "boolean") setShowGrid(projectData.showGrid);
        if (typeof projectData.snapToGrid === "boolean") setSnapToGrid(projectData.snapToGrid);
        if (projectData.projectName) setProjectName(projectData.projectName);
        if (projectData.exportList) setExportList(projectData.exportList);
      } catch (err) {
        console.error("Failed to load project file", err);
        alert("Invalid project file.");
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

  const handleElementImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = event => addImageElement(event.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleModelUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const src = event.target?.result as string;
        const newItem: ModelItem = {
          id: generateId(),
          type: "model",
          x: canvasSize.width / 2,
          y: canvasSize.height / 2,
          rotation: 0,
          src: src, // Data URL
          scale: 20,
          label: file.name.replace(/\.[^/.]+$/, "")
        };
        setItems(prev => [...prev, newItem]);
        setTimeout(() => saveHistory(), 50);
        setMode("select");
      };
      reader.readAsDataURL(file);
    }
  };

  const disposeGroup = (group: THREE.Group) => {
    group.traverse(child => {
      const mesh = child as THREE.Mesh;
      if (mesh.geometry) {
        mesh.geometry.dispose();
      }
      if (mesh.material) {
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach(material => material.dispose());
        } else {
          mesh.material.dispose();
        }
      }
    });
    group.clear();
  };

  const createTextSprite = (text: string) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) return null;
    const fontSize = 56;
    const padding = 24;
    context.font = `${fontSize}px Space Grotesk, sans-serif`;
    const metrics = context.measureText(text);
    canvas.width = Math.ceil(metrics.width + padding * 2);
    canvas.height = Math.ceil(fontSize + padding * 1.6);
    context.font = `${fontSize}px Space Grotesk, sans-serif`;
    context.fillStyle = "rgba(15, 23, 42, 0.9)";
    context.textBaseline = "middle";
    context.fillText(text, padding, canvas.height / 2);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(canvas.width / 10, canvas.height / 10, 1);
    return sprite;
  };

  const rebuildThreeScene = () => {
    const state = threeStateRef.current;
    if (!state) return;

    const { group, scene, renderer } = state;
    disposeGroup(group);

    // Improved ground plane with subtle gradient effect
    const groundSize = Math.max(canvasSize.width, canvasSize.height) * 2;
    const groundGeometry = new THREE.PlaneGeometry(groundSize, groundSize);
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 0xf0ebe3,
      roughness: 0.95,
      metalness: 0
    });
    const groundPlane = new THREE.Mesh(groundGeometry, groundMaterial);
    groundPlane.rotation.x = -Math.PI / 2;
    groundPlane.position.set(canvasSize.width / 2, -0.5, canvasSize.height / 2);
    groundPlane.receiveShadow = true;
    group.add(groundPlane);

    // Grid helper with proper sizing
    const gridHelper = new THREE.GridHelper(
      groundSize,
      Math.round(groundSize / gridSize),
      0xd1d5db,
      0xe5e7eb
    );
    gridHelper.position.set(canvasSize.width / 2, 0.01, canvasSize.height / 2);
    if (showGrid) {
      group.add(gridHelper);
    }

    // Canvas boundary plane (the actual work area)
    const canvasPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(canvasSize.width, canvasSize.height),
      new THREE.MeshStandardMaterial({
        color: 0xfafaf9,
        roughness: 0.8,
        metalness: 0
      })
    );
    canvasPlane.rotation.x = -Math.PI / 2;
    canvasPlane.position.set(canvasSize.width / 2, 0.02, canvasSize.height / 2);
    canvasPlane.receiveShadow = true;
    group.add(canvasPlane);

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
    group.add(boundaryLine);

    // Background image
    if (backgroundImg) {
      const mapPlaneMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: bgSettings.opacity,
        roughness: 0.9
      });
      new THREE.TextureLoader().load(backgroundImg, texture => {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        mapPlaneMaterial.map = texture;
        mapPlaneMaterial.needsUpdate = true;
        renderer.render(scene, state.camera);
      });
      const mapPlane = new THREE.Mesh(
        new THREE.PlaneGeometry(bgSettings.width, bgSettings.height),
        mapPlaneMaterial
      );
      mapPlane.rotation.x = -Math.PI / 2;
      mapPlane.position.set(
        bgSettings.x + bgSettings.width / 2,
        0.08,
        bgSettings.y + bgSettings.height / 2
      );
      mapPlane.receiveShadow = true;
      group.add(mapPlane);
    }

    // Process all items
    items.forEach(item => {
      if (item.type === "model") {
        const m = item as ModelItem;
        const g = new THREE.Group();
        g.position.set(m.x, 0, m.y);
        g.rotation.y = -THREE.MathUtils.degToRad(m.rotation);
        group.add(g);

        const loader = new GLTFLoader();
        loader.load(m.src, (gltf) => {
          const model = gltf.scene;
          model.scale.set(m.scale, m.scale, m.scale);
          model.traverse((o: any) => {
            if (o.isMesh) {
              o.castShadow = true;
              o.receiveShadow = true;
            }
          });
          g.add(model);
        });

        const label = createTextSprite(m.label);
        if (label) {
          label.position.set(0, 20, 0);
          g.add(label);
        }
      }
      // Buildings with improved materials
      if (item.type === "building") {
        const building = item as BuildingItem;
        const points = getBuildingPoints(building);
        const buildingHeight = 60;

        // Create extruded building shape
        // IMPORTANT: Negate Y because rotateX(-PI/2) will negate it again, 
        // making the final Z coordinate match the 2D Y coordinate
        const shape = new THREE.Shape(points.map(p => new THREE.Vector2(p.x, -p.y)));
        const extrudeSettings = {
          depth: buildingHeight,
          bevelEnabled: true,
          bevelThickness: 2,
          bevelSize: 1,
          bevelSegments: 2
        };
        const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

        // Rotate to make it vertical (extrude goes into Z, we need Y)
        geometry.rotateX(-Math.PI / 2);

        // Create building with better materials
        const buildingMaterial = new THREE.MeshStandardMaterial({
          color: building.color,
          roughness: 0.6,
          metalness: 0.1
        });

        const mesh = new THREE.Mesh(geometry, buildingMaterial);
        mesh.position.set(building.x, 0, building.y);
        mesh.rotation.y = -THREE.MathUtils.degToRad(building.rotation);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        group.add(mesh);

        // Building roof (slightly darker)
        const roofMaterial = new THREE.MeshStandardMaterial({
          color: adjustColor(building.color, -20),
          roughness: 0.7,
          metalness: 0.05
        });
        const roofShape = new THREE.Shape(points.map(p => new THREE.Vector2(p.x, -p.y)));
        const roofGeometry = new THREE.ShapeGeometry(roofShape);
        roofGeometry.rotateX(-Math.PI / 2);
        const roof = new THREE.Mesh(roofGeometry, roofMaterial);
        roof.position.set(building.x, buildingHeight + 0.1, building.y);
        roof.rotation.y = -THREE.MathUtils.degToRad(building.rotation);
        roof.receiveShadow = true;
        group.add(roof);

        // Building label
        const label = createTextSprite(building.label);
        if (label) {
          label.position.set(building.x, buildingHeight + 15, building.y);
          group.add(label);
        }
      }

      // Cars (Parking Items treated as cars)
      if (item.type === "parking") {
        const car = create3dCar(item as ParkingItem);
        group.add(car);
      }

      // Trees
      if (item.type === "tree") {
        const tree = create3dTree(item as TreeItem);
        group.add(tree);
      }

      // Camera with proper 3D frustum
      if (item.type === "camera") {
        const cameraItem = item as CameraItem;
        const cameraPos = getCameraPlanPosition(cameraItem);
        const cameraHeight = cameraItem.mount?.height ?? cameraItem.height ?? 10;
        const pitch = cameraItem.pitch ?? 0;
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

        // Camera body - box with lens
        const cameraGroup = new THREE.Group();

        // Main camera body
        const bodyGeometry = new THREE.BoxGeometry(14, 10, 10);
        const bodyMaterial = new THREE.MeshStandardMaterial({
          color: "#1e293b",
          roughness: 0.3,
          metalness: 0.5
        });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        cameraGroup.add(body);

        // Camera lens
        const lensGeometry = new THREE.CylinderGeometry(3.5, 4, 8, 16);
        lensGeometry.rotateZ(Math.PI / 2);
        const lensMaterial = new THREE.MeshStandardMaterial({
          color: "#0f172a",
          roughness: 0.2,
          metalness: 0.7
        });
        const lens = new THREE.Mesh(lensGeometry, lensMaterial);
        lens.position.set(10, 0, 0);
        cameraGroup.add(lens);

        // Indicator light
        const lightGeometry = new THREE.SphereGeometry(1.5, 8, 8);
        const lightMaterial = new THREE.MeshBasicMaterial({ color: cameraItem.color });
        const light = new THREE.Mesh(lightGeometry, lightMaterial);
        light.position.set(-5, 4, 0);
        cameraGroup.add(light);

        // Position and rotate camera body
        cameraGroup.position.set(cameraPos.x, cameraHeight, cameraPos.y);
        cameraGroup.rotation.y = rotAngle;
        cameraGroup.rotation.z = pitchRad;
        group.add(cameraGroup);

        // Mounting pole
        const poleGeometry = new THREE.CylinderGeometry(2, 2.5, cameraHeight, 8);
        const poleMaterial = new THREE.MeshStandardMaterial({
          color: "#475569",
          roughness: 0.6,
          metalness: 0.3
        });
        const pole = new THREE.Mesh(poleGeometry, poleMaterial);
        pole.position.set(cameraPos.x, cameraHeight / 2, cameraPos.y);
        pole.castShadow = true;
        group.add(pole);

        // Camera frustum (view cone) - proper 3D geometry
        // Calculate frustum corners at range distance
        const halfAngleH = (hFov * Math.PI) / 360;
        const halfAngleV = (vFov * Math.PI) / 360;
        const farWidth = Math.tan(halfAngleH) * range;
        const farHeight = Math.tan(halfAngleV) * range;

        // Frustum vertices: apex at origin, then 4 corners at far plane
        const frustumVertices = new Float32Array([
          // Apex (camera position)
          0, 0, 0,
          // Far plane corners (in local space where +X is forward)
          range, farHeight, -farWidth,   // top-left
          range, farHeight, farWidth,    // top-right
          range, -farHeight, farWidth,   // bottom-right
          range, -farHeight, -farWidth   // bottom-left
        ]);

        // Faces: 4 triangular sides + 1 rectangular back
        const frustumIndices = [
          // Side faces (apex to far corners)
          0, 2, 1,  // top
          0, 3, 2,  // right
          0, 4, 3,  // bottom
          0, 1, 4,  // left
          // Back face (far plane)
          1, 2, 3,
          1, 3, 4
        ];

        const frustumGeometry = new THREE.BufferGeometry();
        frustumGeometry.setAttribute('position', new THREE.BufferAttribute(frustumVertices, 3));
        frustumGeometry.setIndex(frustumIndices);
        frustumGeometry.computeVertexNormals();

        // Frustum fill (semi-transparent)
        const frustumMaterial = new THREE.MeshBasicMaterial({
          color: cameraItem.color,
          transparent: true,
          opacity: 0.15,
          side: THREE.DoubleSide,
          depthWrite: false
        });
        const frustumMesh = new THREE.Mesh(frustumGeometry, frustumMaterial);
        frustumMesh.position.set(cameraPos.x, cameraHeight, cameraPos.y);
        frustumMesh.rotation.y = rotAngle;
        frustumMesh.rotation.z = pitchRad;
        group.add(frustumMesh);

        // Frustum edges (wireframe lines for clarity)
        const edgeVertices = [
          // Lines from apex to corners
          0, 0, 0, range, farHeight, -farWidth,
          0, 0, 0, range, farHeight, farWidth,
          0, 0, 0, range, -farHeight, farWidth,
          0, 0, 0, range, -farHeight, -farWidth,
          // Far plane rectangle
          range, farHeight, -farWidth, range, farHeight, farWidth,
          range, farHeight, farWidth, range, -farHeight, farWidth,
          range, -farHeight, farWidth, range, -farHeight, -farWidth,
          range, -farHeight, -farWidth, range, farHeight, -farWidth
        ];
        const edgeGeometry = new THREE.BufferGeometry();
        edgeGeometry.setAttribute('position', new THREE.Float32BufferAttribute(edgeVertices, 3));
        const edgeMaterial = new THREE.LineBasicMaterial({
          color: cameraItem.color,
          transparent: true,
          opacity: 0.6
        });
        const edges = new THREE.LineSegments(edgeGeometry, edgeMaterial);
        edges.position.set(cameraPos.x, cameraHeight, cameraPos.y);
        edges.rotation.y = rotAngle;
        edges.rotation.z = pitchRad;
        group.add(edges);

        // Ground projection of the frustum (shows coverage area on ground)
        const groundProjectionPoints = [];
        const testPoints = [
          { h: halfAngleH, v: halfAngleV },
          { h: -halfAngleH, v: halfAngleV },
          { h: -halfAngleH, v: -halfAngleV },
          { h: halfAngleH, v: -halfAngleV }
        ];

        testPoints.forEach(angles => {
          // Calculate ray direction in local camera space
          const localDir = new THREE.Vector3(
            Math.cos(angles.v) * Math.cos(angles.h),
            Math.sin(angles.v),
            Math.cos(angles.v) * Math.sin(angles.h)
          ).normalize();

          // Apply camera rotations
          const euler = new THREE.Euler(0, rotAngle, pitchRad, 'YZX');
          localDir.applyEuler(euler);

          // Find intersection with ground plane (y = 0)
          if (localDir.y < -0.01) { // Ray pointing downward
            const t = -cameraHeight / localDir.y;
            const groundX = cameraPos.x + localDir.x * t;
            const groundZ = cameraPos.y + localDir.z * t;
            groundProjectionPoints.push(new THREE.Vector3(groundX, 0.15, groundZ));
          }
        });

        if (groundProjectionPoints.length >= 3) {
          // Create ground projection polygon
          // Negate the shape Y (which is 3D Z) because rotateX(-PI/2) will negate it back
          const projShape = new THREE.Shape();
          projShape.moveTo(groundProjectionPoints[0].x - cameraPos.x, -(groundProjectionPoints[0].z - cameraPos.y));
          for (let i = 1; i < groundProjectionPoints.length; i++) {
            projShape.lineTo(groundProjectionPoints[i].x - cameraPos.x, -(groundProjectionPoints[i].z - cameraPos.y));
          }
          projShape.closePath();

          const projGeometry = new THREE.ShapeGeometry(projShape);
          projGeometry.rotateX(-Math.PI / 2);
          const projMaterial = new THREE.MeshBasicMaterial({
            color: cameraItem.color,
            transparent: true,
            opacity: 0.1,
            side: THREE.DoubleSide
          });
          const projMesh = new THREE.Mesh(projGeometry, projMaterial);
          projMesh.position.set(cameraPos.x, 0.12, cameraPos.y);
          group.add(projMesh);

          // Ground projection outline
          const outlineGeometry = new THREE.BufferGeometry();
          const outlineVertices: number[] = [];
          groundProjectionPoints.forEach((p, i) => {
            outlineVertices.push(p.x, p.y, p.z);
            const next = groundProjectionPoints[(i + 1) % groundProjectionPoints.length];
            outlineVertices.push(next.x, next.y, next.z);
          });
          outlineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(outlineVertices, 3));
          const outlineMaterial = new THREE.LineBasicMaterial({
            color: cameraItem.color,
            transparent: true,
            opacity: 0.4
          });
          const outline = new THREE.LineSegments(outlineGeometry, outlineMaterial);
          group.add(outline);
        }

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
        mesh.rotation.z = THREE.MathUtils.degToRad(img.rotation);
        group.add(mesh);
      }

      // Labels
      if (item.type === "label") {
        const labelItem = item as LabelItem;
        const label = createTextSprite(labelItem.text);
        if (label) {
          label.position.set(labelItem.x, 8, labelItem.y);
          group.add(label);
        }
      }
    });

    // Update camera target and position
    state.target.set(canvasSize.width / 2, 0, canvasSize.height / 2);
    if (state.orbit) {
      state.orbit.distance = Math.max(canvasSize.width, canvasSize.height) * 0.85;
    }
    if (state.orbit) {
      const { azimuth, polar, distance } = state.orbit;
      const x = state.target.x + Math.cos(azimuth) * Math.cos(polar) * distance;
      const z = state.target.z + Math.sin(azimuth) * Math.cos(polar) * distance;
      const y = state.target.y + Math.sin(polar) * distance;
      state.camera.position.set(x, y, z);
      state.camera.lookAt(state.target);
    }
    renderer.render(scene, state.camera);
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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;

      if (event.key === " ") {
        setIsSpacePressed(true);
        isSpacePressedRef.current = true;
      }

      if ((event.key === "Delete" || event.key === "Backspace") && selectedId) {
        event.preventDefault();
        deleteItem(selectedId);
        // We really should save history here, but deleteItem might not be synchronous or triggers updateItem?
        // Actually deleteItem usually calls setItems. We should save history AFTER or BEFORE?
        // Let's rely on saveHistory being called on key actions or manually here?
        // We'll call saveHistory in deleteItem if we can, or just wait for next meaningful event. 
        // Better: let the UI interactions trigger saveHistory.
        // For keyboard delete, we should save history.
        setTimeout(() => saveHistory(), 50);
      }

      // Undo / Redo
      if (event.ctrlKey) {
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
            const newItem = { ...cb, id: generateId(), x: cb.x + 20, y: cb.y + 20 };
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
  }, [items, selectedId, handleSaveProject]);

  useEffect(() => {
    const stopPan = () => setIsPanning(false);
    window.addEventListener("mouseup", stopPan);
    return () => window.removeEventListener("mouseup", stopPan);
  }, []);

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
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap pixel ratio for performance
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);

    // Scene setup with improved atmosphere
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#f5f2ea");
    scene.fog = new THREE.Fog(0xf5f2ea, 800, 2500);

    // Orthographic camera for isometric-style view
    const camera = new THREE.OrthographicCamera(-500, 500, 500, -500, 0.1, 6000);
    const group = new THREE.Group();
    scene.add(group);

    // Improved lighting setup
    // Soft ambient light from sky/ground
    const ambient = new THREE.HemisphereLight(0xffffff, 0xe6ddd0, 0.75);
    scene.add(ambient);

    // Main directional light (sun-like)
    const keyLight = new THREE.DirectionalLight(0xfff8e8, 0.9);
    keyLight.position.set(500, 800, 300);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 4096;
    keyLight.shadow.mapSize.height = 4096;
    keyLight.shadow.camera.near = 50;
    keyLight.shadow.camera.far = 3000;
    keyLight.shadow.camera.left = -1500;
    keyLight.shadow.camera.right = 1500;
    keyLight.shadow.camera.top = 1500;
    keyLight.shadow.camera.bottom = -1500;
    keyLight.shadow.bias = -0.0002;
    keyLight.shadow.normalBias = 0.02;
    scene.add(keyLight);

    // Fill light for softer shadows
    const fillLight = new THREE.DirectionalLight(0xe8f4ff, 0.35);
    fillLight.position.set(-400, 500, -200);
    scene.add(fillLight);

    // Subtle rim light for depth
    const rimLight = new THREE.DirectionalLight(0xfff0e0, 0.25);
    rimLight.position.set(-200, 200, 600);
    scene.add(rimLight);

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

    const onPointerDown = (event: PointerEvent) => {
      // Industry-standard controls:
      // Left-click (button 0) = Pan (default)
      // Right-click (button 2) = Rotate
      // Middle-click (button 1) = Pan
      // Space + any click = Pan
      const isRotate = event.button === 2 && !isSpacePressedRef.current;
      const isPan = event.button === 0 || event.button === 1 || isSpacePressedRef.current;
      if (!isPan && !isRotate) return;
      event.preventDefault();
      const start = { x: event.clientX, y: event.clientY };
      const moveHandler = (moveEvent: PointerEvent) => {
        const dx = moveEvent.clientX - start.x;
        const dy = moveEvent.clientY - start.y;
        start.x = moveEvent.clientX;
        start.y = moveEvent.clientY;
        if (isRotate) {
          orbit.azimuth -= dx * 0.005;
          orbit.polar = clamp(orbit.polar - dy * 0.005, 0.1, Math.PI / 2.1);
        } else if (isPan) {
          const panScale = (Math.max(canvasSize.width, canvasSize.height) * 0.7 / camera.zoom) / 400;
          state.target.x -= dx * panScale;
          state.target.z += dy * panScale;
        }
        updateCamera();
      };
      const upHandler = () => {
        window.removeEventListener("pointermove", moveHandler);
        window.removeEventListener("pointerup", upHandler);
      };
      window.addEventListener("pointermove", moveHandler);
      window.addEventListener("pointerup", upHandler);
    };

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      const nextZoom = clamp(state.zoom * (event.deltaY > 0 ? 0.9 : 1.1), 0.4, 3.5);
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
      renderer.dispose();
      container.removeChild(renderer.domElement);
      threeStateRef.current = null;
    };
  }, [canvasSize.height, canvasSize.width, viewMode]);

  useEffect(() => {
    if (viewMode !== "iso3d") return;
    rebuildThreeScene();
  }, [items, backgroundImg, bgSettings, canvasSize, gridSize, showGrid, viewMode]);

  useEffect(() => {
    if (viewMode !== "plan") {
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

  // Camera view preview - TRUE perspective view from the security camera using Three.js
  useEffect(() => {
    if (!showCameraPreview || !cameraPreviewRef.current || !selectedId) return;

    const selectedItem = items.find(i => i.id === selectedId);
    const cam = selectedItem?.type === "camera" ? (selectedItem as CameraItem) : null;
    if (!cam) return;

    const canvas = cameraPreviewRef.current;
    const width = canvas.width;
    const height = canvas.height;

    const camPos = getCameraPlanPosition(cam);
    const camHeight = cam.mount?.height ?? cam.height ?? 10;
    const hFov = cam.hFov ?? cam.fov;
    const pitch = cam.pitch ?? -15;
    const range = cam.range;
    const rotAngle = THREE.MathUtils.degToRad(cam.rotation);

    // Calculate vertical FOV from horizontal FOV and aspect ratio to match 2D cone
    const aspect = width / height;
    const vFovRad = 2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(hFov) / 2) / aspect);
    const vFov = THREE.MathUtils.radToDeg(vFovRad);

    // Create mini Three.js scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#87CEEB');
    scene.fog = new THREE.Fog('#87CEEB', range * 0.3, range * 1.2);

    // Perspective camera at security camera position
    const perspCam = new THREE.PerspectiveCamera(vFov, aspect, 1, range * 2);
    perspCam.position.set(camPos.x, camHeight, camPos.y);

    const pitchRad = THREE.MathUtils.degToRad(pitch);
    const lookAt = new THREE.Vector3(
      camPos.x + Math.cos(rotAngle) * 100,
      camHeight + Math.tan(pitchRad) * 100,
      camPos.y + Math.sin(rotAngle) * 100
    );
    perspCam.lookAt(lookAt);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.7);
    dirLight.position.set(100, 200, 50);
    scene.add(dirLight);

    // Ground
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(canvasSize.width * 2, canvasSize.height * 2),
      new THREE.MeshStandardMaterial({ color: '#6B8E23', roughness: 0.9 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(canvasSize.width / 2, 0, canvasSize.height / 2);
    scene.add(ground);

    // Background image
    if (bgImageRef.current) {
      const tex = new THREE.CanvasTexture(bgImageRef.current);
      tex.colorSpace = THREE.SRGBColorSpace;
      const mapPlane = new THREE.Mesh(
        new THREE.PlaneGeometry(bgSettings.width, bgSettings.height),
        new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: bgSettings.opacity })
      );
      mapPlane.rotation.x = -Math.PI / 2;
      mapPlane.position.set(bgSettings.x + bgSettings.width / 2, 0.1, bgSettings.y + bgSettings.height / 2);
      scene.add(mapPlane);
    }

    // Add items
    items.forEach(item => {
      if (item.type === "model") {
        const m = item as ModelItem;
        const g = new THREE.Group();
        g.position.set(m.x, 0, m.y);
        g.rotation.y = -THREE.MathUtils.degToRad(m.rotation);
        scene.add(g);

        const loader = new GLTFLoader();
        loader.load(m.src, (gltf) => {
          const model = gltf.scene;
          model.scale.set(m.scale, m.scale, m.scale);
          model.traverse((o: any) => {
            if (o.isMesh) {
              o.castShadow = true;
              o.receiveShadow = true;
            }
          });
          g.add(model);
        });
      }
      if (item.type === "building") {
        const bld = item as BuildingItem;
        const pts = getBuildingPoints(bld);
        const shape = new THREE.Shape(pts.map(p => new THREE.Vector2(p.x, -p.y)));
        const geo = new THREE.ExtrudeGeometry(shape, { depth: 60, bevelEnabled: false });
        geo.rotateX(-Math.PI / 2);
        const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: bld.color, side: THREE.DoubleSide }));
        mesh.position.set(bld.x, 0, bld.y);
        mesh.rotation.y = -THREE.MathUtils.degToRad(bld.rotation);
        scene.add(mesh);
      }
      if (item.type === "tree") {
        const tree = create3dTree(item as TreeItem);
        scene.add(tree);
      }
      if (item.type === "parking") {
        const car = create3dCar(item as ParkingItem);
        scene.add(car);
      }
    });

    // Render
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(width, height);
    renderer.render(scene, perspCam);

    // 2D overlay
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = 'rgba(0,0,0,0.7)';
      ctx.fillRect(0, 0, width, 26);
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText(`📷 ${cam.label}`, 8, 11);
      ctx.font = '10px sans-serif';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText(`FOV: ${hFov.toFixed(0)}°×${vFov.toFixed(0)}° | Pitch: ${pitch}° | Range: ${range}`, 8, 23);
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(width - 12, 13, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.font = '9px sans-serif';
      ctx.fillText('LIVE', width - 42, 16);
    }

    renderer.dispose();
  }, [selectedId, items, showCameraPreview, bgSettings, canvasSize]);


  // --- Event Handlers ---

  const getSvgMousePos = (e: React.MouseEvent) => {
    if (!svgRef.current) return { x: 0, y: 0 };
    const CTM = svgRef.current.getScreenCTM();
    if (!CTM) return { x: 0, y: 0 };
    const rawX = (e.clientX - CTM.e) / CTM.a;
    const rawY = (e.clientY - CTM.f) / CTM.d;
    return {
      x: (rawX - panOffset.x) / zoom,
      y: (rawY - panOffset.y) / zoom
    };
  };

  const handleMouseDown = (e: React.MouseEvent, id: string, type: InteractionType = "move", variant?: string) => {
    if (mode !== "select") return;
    if (viewMode === "iso3d") return;
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
  const handleSvgMouseMove = (e: React.MouseEvent) => {
    // Handle camera placement preview
    if (mode === "add-camera" && viewMode === "plan") {
      const pos = getSvgMousePos(e);
      const edge = findNearestBuildingEdge(pos);
      if (edge && edge.distance < 100) {
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

      const startOffset = interactionState.startVal.labelOffset || { x: 0, y: 30 };

      updateItem(interactionState.itemId, {
        labelOffset: {
          x: startOffset.x + dx,
          y: startOffset.y + dy
        }
      });
    } else if (interactionState.type === "rotate") {
      const deltaX = pos.x - basePos.x;
      const deltaY = pos.y - basePos.y;
      const angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
      updateItem(interactionState.itemId, { rotation: angle });
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
  const handleSvgMouseUp = () => {
    if (interactionState.type) {
      saveHistory();
    }
    setIsPanning(false);
    setInteractionState({ type: null, itemId: null, startMouse: { x: 0, y: 0 }, startVal: null, snap: false });
  };

  // Initial history save & setup
  useEffect(() => {
    THREE.Cache.enabled = true;
    saveHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSvgClick = (e: React.MouseEvent) => {
    if (viewMode === "iso3d") return;
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

  const handleSvgMouseDown = (e: React.MouseEvent) => {
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

  const selectedItem = items.find(i => i.id === selectedId);
  const selectedCamera = selectedItem?.type === "camera" ? (selectedItem as CameraItem) : null;
  const cameraAspect = selectedCamera?.aspect ?? 16 / 9;
  const cameraHFov = selectedCamera ? selectedCamera.hFov ?? selectedCamera.fov : 70;
  const cameraVFov = selectedCamera ? selectedCamera.vFov ?? vFovFromH(cameraHFov, cameraAspect) : 45;
  const cameraDiag = selectedCamera ? diagonalFromHv(cameraHFov, cameraVFov) : 90;
  const buildingOptions = items.filter(item => item.type === "building") as BuildingItem[];
  const mountType = selectedCamera?.mount?.type ?? "free";
  const mountBuilding = selectedCamera?.mount?.buildingId
    ? getBuildingById(selectedCamera.mount.buildingId)
    : buildingOptions[0];
  const mountEdgeCount = mountBuilding ? getBuildingPoints(mountBuilding).length : 0;
  const mountEdgeIndex = selectedCamera?.mount?.edgeIndex ?? 0;
  const mountEdgeT = selectedCamera?.mount?.edgeT ?? 0.5;

  return (
    <div className="flex flex-col h-screen bg-transparent font-sans text-slate-800 relative">
      {showExportPanel && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">Export</p>
                <h2 className="text-lg font-semibold text-slate-800">Export Plan</h2>
              </div>
              <button onClick={() => setShowExportPanel(false)} className="p-2 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-5 py-4 space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-500 uppercase">Title</label>
                <input
                  type="text"
                  value={projectName}
                  onChange={e => setProjectName(e.target.value)}
                  className="w-full border border-slate-200 rounded p-2 text-sm"
                />
              </div>

              {/* Export List Section */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-slate-500 uppercase">
                    Export List ({exportList.length} items)
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
                    <p className="text-xs mt-1">Use "Add to Export" buttons while working</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                    {exportList.map(item => (
                      <div key={item.id} className="relative group">
                        <img
                          src={item.dataUrl}
                          alt={item.label}
                          className="w-full h-20 object-cover rounded border border-slate-200"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded flex items-center justify-center">
                          <button
                            onClick={() => setExportList(prev => prev.filter(i => i.id !== item.id))}
                            className="p-1 bg-red-500 text-white rounded-full"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="text-[10px] text-slate-500 truncate mt-1">{item.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-500 uppercase">Scale</label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={exportOptions.scale}
                    onChange={e => setExportOptions({ ...exportOptions, scale: parseInt(e.target.value) })}
                    className="w-full border border-slate-200 rounded p-2 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-500 uppercase">Padding</label>
                  <input
                    type="number"
                    min="0"
                    max="200"
                    value={exportOptions.padding}
                    onChange={e => setExportOptions({ ...exportOptions, padding: parseInt(e.target.value) })}
                    className="w-full border border-slate-200 rounded p-2 text-sm"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-500 uppercase">Include</label>
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
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${active ? "bg-emerald-100 border-emerald-200 text-emerald-700" : "bg-white border-slate-200 text-slate-500"
                          }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>
              <p className="text-xs text-slate-400">Tip: Add views using "Add to Export" buttons, then export a client report.</p>
            </div>
            <div className="px-5 py-4 border-t border-slate-100 bg-slate-50 flex flex-wrap justify-end gap-2">
              <button
                onClick={() => setShowExportPanel(false)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800"
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
                Plan Only
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
                Export PNG
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
                Export PDF
              </button>
            </div>
          </div>
        </div>
      )}
      {vertexInsertMode && viewMode === "plan" && selectedId && (
        <div className="absolute left-1/2 top-24 -translate-x-1/2 rounded-full bg-emerald-600/90 px-4 py-2 text-xs font-semibold text-white shadow">
          Click an edge to insert a vertex.
        </div>
      )}
      {/* --- Toolbar --- */}
      <div className="bg-white border-b border-slate-200 p-3 flex items-center justify-between shadow-sm z-10 flex-wrap gap-2">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-bold flex items-center gap-2 text-slate-900 hidden md:flex">
            <Camera className="w-5 h-5 text-emerald-600" />
            {projectName}
          </h1>
          <div className="h-6 w-px bg-slate-200 hidden md:block"></div>

          <div className="flex bg-slate-100 p-1 rounded-lg gap-1 overflow-x-auto">
            <button
              onClick={() => setMode("select")}
              title="Select / Move"
              className={`p-2 rounded flex items-center gap-2 text-sm font-medium transition-colors ${mode === "select" ? "bg-white shadow text-emerald-600" : "text-slate-500 hover:text-slate-700"
                }`}
            >
              <Move className="w-4 h-4" />
            </button>
            <div className="w-px bg-slate-300 mx-1 my-1"></div>
            <button
              onClick={() => setMode("add-camera")}
              className={`p-2 rounded flex items-center gap-2 text-sm font-medium transition-colors ${mode === "add-camera" ? "bg-white shadow text-emerald-600" : "text-slate-500 hover:text-slate-700"
                }`}
            >
              <Camera className="w-5 h-5" />
              <span className="hidden md:inline">Camera</span>
            </button>

            <button
              onClick={() => modelInputRef.current?.click()}
              className={`p-2 rounded flex items-center gap-2 text-sm font-medium transition-colors ${mode === "add-model" ? "bg-white shadow text-purple-600" : "text-slate-500 hover:text-slate-700"
                }`}
            >
              <Box className="w-5 h-5" />
              <span className="hidden md:inline">Model</span>
            </button>
            <button
              onClick={() => setMode("add-building")}
              title="Add Building"
              className={`p-2 rounded flex items-center gap-2 text-sm font-medium transition-colors ${mode === "add-building" ? "bg-white shadow text-emerald-600" : "text-slate-500 hover:text-slate-700"
                }`}
            >
              <Square className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMode("add-tree")}
              title="Add Tree"
              className={`p-2 rounded flex items-center gap-2 text-sm font-medium transition-colors ${mode === "add-tree" ? "bg-white shadow text-emerald-600" : "text-slate-500 hover:text-slate-700"
                }`}
            >
              <Trees className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMode("add-parking")}
              title="Add Parking Spot"
              className={`p-2 rounded flex items-center gap-2 text-sm font-medium transition-colors ${mode === "add-parking" ? "bg-white shadow text-emerald-600" : "text-slate-500 hover:text-slate-700"
                }`}
            >
              <Car className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMode("add-label")}
              title="Add Label"
              className={`p-2 rounded flex items-center gap-2 text-sm font-medium transition-colors ${mode === "add-label" ? "bg-white shadow text-emerald-600" : "text-slate-500 hover:text-slate-700"
                }`}
            >
              <Type className="w-4 h-4" />
            </button>
          </div>
          <button
            onClick={() => setViewMode(viewMode === "plan" ? "iso3d" : "plan")}
            className="ml-2 px-3 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 flex items-center gap-2 text-sm"
            title="Toggle Isometric View"
          >
            <Layers className="w-4 h-4" />
            <span className="hidden sm:inline">{viewMode === "plan" ? "Isometric" : "Plan"}</span>
          </button>
        </div>
        <div className="flex items-center gap-2">
          <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleBackgroundUpload} />
          <input
            type="file"
            ref={elementImageInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleElementImageUpload}
          />
          <input type="file" ref={modelInputRef} className="hidden" accept=".glb,.gltf" onChange={handleModelUpload} />
          <input type="file" ref={projectInputRef} className="hidden" accept=".json" onChange={handleLoadProject} />

          <button
            onClick={handleUndo}
            className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 flex items-center gap-2 text-sm mr-1"
            title="Undo (Ctrl+Z)"
          >
            <Undo className="w-4 h-4" />
          </button>
          <button
            onClick={handleRedo}
            className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 flex items-center gap-2 text-sm mr-4"
            title="Redo (Ctrl+Y)"
          >
            <Redo className="w-4 h-4" />
          </button>

          <button
            onClick={() => projectInputRef.current?.click()}
            className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 flex items-center gap-2 text-sm"
            title="Load Project"
          >
            <FolderOpen className="w-4 h-4" />
            <span className="hidden sm:inline">Load</span>
          </button>
          <button
            onClick={handleSaveProject}
            className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 flex items-center gap-2 text-sm"
            title="Save Project"
          >
            <Save className="w-4 h-4" />
            <span className="hidden sm:inline">Save</span>
          </button>

          <button
            onClick={() => elementImageInputRef.current?.click()}
            className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 flex items-center gap-2 text-sm"
            title="Upload Custom Element Image"
          >
            <ImageIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Image</span>
          </button>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 flex items-center gap-2 text-sm"
            title="Upload Background Map"
          >
            <Upload className="w-4 h-4" />
            <span className="hidden sm:inline">Map</span>
          </button>
          <button
            onClick={addPlanToExportList}
            className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 flex items-center gap-2 text-sm"
            title="Add current view to export list"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Add View</span>
          </button>
          <button
            onClick={() => setShowExportPanel(true)}
            className="p-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2 text-sm shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* --- Main Workspace --- */}
        <div className="flex-1 relative overflow-auto bg-slate-200 flex items-start justify-start p-8">
          <div className="shadow-2xl bg-white relative">
            {viewMode === "plan" ? (
              <svg
                ref={svgRef}
                width={canvasSize.width}
                height={canvasSize.height}
                viewBox={`0 0 ${canvasSize.width} ${canvasSize.height}`}
                className={`bg-white block ${mode === "select" ? "cursor-default" : "cursor-crosshair"}`}
                onMouseMove={handleSvgMouseMove}
                onMouseUp={handleSvgMouseUp}
                onMouseDown={handleSvgMouseDown}
                onWheel={handleSvgWheel}
                onClick={handleSvgClick}
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern id="smallGrid" width={gridSize} height={gridSize} patternUnits="userSpaceOnUse">
                    <path
                      d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`}
                      fill="none"
                      stroke="#f1f5f9"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>

                <g transform={`translate(${panOffset.x}, ${panOffset.y}) scale(${zoom})`}>
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

                  {items.map(item => {
                    const isSelected = selectedId === item.id;
                    if (item.type === "building" || item.type === "parking") {
                      const b = item as BuildingItem | ParkingItem;
                      const isParking = item.type === "parking";
                      if (!isParking) {
                        const building = item as BuildingItem;
                        const points = getBuildingPoints(building);
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
                              stroke={isSelected ? "#059669" : "#334155"}
                              strokeWidth={isSelected ? 3 : 1}
                            />
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
                              {building.label}
                            </text>
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
                        >
                          <rect
                            x={-b.width / 2}
                            y={-b.height / 2}
                            width={b.width}
                            height={b.height}
                            fill={b.color}
                            stroke={isSelected ? "#3b82f6" : isParking ? "#94a3b8" : "#334155"}
                            strokeWidth={isSelected ? 3 : 1}
                            strokeDasharray={isParking ? "4" : "0"}
                          />
                          {isParking && (
                            <text
                              x="0"
                              y="0"
                              textAnchor="middle"
                              dominantBaseline="middle"
                              fill="#94a3b8"
                              fontSize="16"
                              fontWeight="bold"
                              pointerEvents="none"
                              transform="rotate(-90)"
                            >
                              P
                            </text>
                          )}
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
                        </g>
                      );
                    }

                    if (item.type === "tree") {
                      const t = item as TreeItem;
                      return (
                        <g
                          key={t.id}
                          transform={`translate(${t.x}, ${t.y})`}
                          onMouseDown={e => handleMouseDown(e, t.id, "move")}
                          onClick={e => e.stopPropagation()}
                          className="cursor-move"
                        >
                          <circle
                            r={t.radius}
                            fill={t.color}
                            fillOpacity="0.6"
                            stroke={isSelected ? "#3b82f6" : t.color}
                            strokeWidth={isSelected ? 2 : 0}
                          />
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
                          style={{ textShadow: "0px 1px 2px rgba(255,255,255,0.8)" }}
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
                            style={{ outline: isSelected ? "2px solid #3b82f6" : "none" }}
                          />
                        </g>
                      );
                    }

                    if (item.type === "model") {
                      const m = item as ModelItem;
                      return (
                        <g
                          key={m.id}
                          transform={`translate(${m.x}, ${m.y}) rotate(${m.rotation})`}
                          onMouseDown={e => handleMouseDown(e, m.id, "move")}
                          onClick={e => e.stopPropagation()}
                          className="cursor-move"
                        >
                          <rect
                            x={-15}
                            y={-15}
                            width={30}
                            height={30}
                            fill="#818cf8"
                            fillOpacity="0.5"
                            stroke={isSelected ? "#3b82f6" : "#6366f1"}
                            strokeWidth="2"
                          />
                          <text x="0" y="5" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">3D</text>
                          {/* Label */}
                          <text
                            y="-25"
                            textAnchor="middle"
                            fill="#6366f1"
                            fontSize="12"
                            fontWeight="bold"
                            className="select-none"
                          >
                            {m.label}
                          </text>
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

                      const labelX = c.labelOffset?.x ?? 0;
                      const labelY = c.labelOffset?.y ?? 30;
                      const dash = c.connectorDashSize || 3;

                      const d = `M 0 0 L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z`;

                      return (
                        <g key={c.id} transform={`translate(${cameraPos.x}, ${cameraPos.y})`} onClick={e => e.stopPropagation()}>
                          <g onMouseDown={e => handleMouseDown(e, c.id, "move")} className="cursor-move">
                            <path d={d} fill={c.color} fillOpacity="0.2" stroke={c.color} strokeWidth="1" pointerEvents="none" />
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
                              <line x1={-labelX} y1={-labelY} x2="0" y2="0" stroke="#cbd5e1" strokeWidth="1" strokeDasharray={`${dash},${dash}`} />
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
                </g>
              </svg>
            ) : (
              <div
                className="relative flex-1"
                style={{ minWidth: canvasSize.width, minHeight: canvasSize.height }}
              >
                <div ref={threeContainerRef} className="absolute inset-0" />
                <div className="absolute left-4 top-4 space-y-2">
                  <div className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-600 shadow">
                    Drag to pan · Right-click to rotate · Scroll to zoom
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={handleCaptureSnapshot}
                      className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-semibold shadow hover:bg-emerald-700"
                    >
                      Snapshot
                    </button>
                    <button
                      onClick={handleExportCurrent3d}
                      className="px-3 py-1 rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-600 hover:bg-slate-50"
                    >
                      Export View
                    </button>
                    <button
                      onClick={add3dToExportList}
                      className="px-3 py-1 rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-600 hover:bg-slate-50 flex items-center gap-1"
                    >
                      <Plus className="w-3 h-3" />
                      Add to Export
                    </button>
                    <button
                      onClick={handleReset3dView}
                      className="px-3 py-1 rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-600 hover:bg-slate-50"
                    >
                      Reset View
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Camera Preview Panel - Picture-in-Picture style */}
        {selectedCamera && showCameraPreview && (
          <div className="absolute bottom-4 right-96 w-80 bg-slate-900 rounded-lg shadow-2xl overflow-hidden border border-slate-700 z-40">
            <div className="flex items-center justify-between px-3 py-2 bg-slate-800 border-b border-slate-700">
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-white truncate">{selectedCamera.label} View</span>
              </div>
              <button
                onClick={() => setShowCameraPreview(false)}
                className="p-1 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <canvas
              ref={cameraPreviewRef}
              width={320}
              height={180}
              className="w-full"
            />
            <div className="px-3 py-2 bg-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <div className="flex gap-3">
                <span>H-FOV: {(selectedCamera.hFov ?? selectedCamera.fov).toFixed(0)}°</span>
                <span>V-FOV: {(selectedCamera.vFov ?? 45).toFixed(0)}°</span>
                <span>Range: {selectedCamera.range}</span>
              </div>
              <button
                onClick={() => addCameraViewToExportList(selectedCamera)}
                className="px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs rounded flex items-center gap-1"
              >
                <Plus className="w-3 h-3" />
                Export
              </button>
            </div>
          </div>
        )}

        {/* Show Camera Preview toggle button when camera is selected but preview is hidden */}
        {selectedCamera && !showCameraPreview && (
          <button
            onClick={() => setShowCameraPreview(true)}
            className="absolute bottom-4 right-96 px-4 py-2 bg-slate-800 text-white rounded-lg shadow-lg hover:bg-slate-700 transition-colors z-40 flex items-center gap-2"
          >
            <Camera className="w-4 h-4" />
            <span className="text-sm font-medium">Show Camera View</span>
          </button>
        )}

        {/* --- Properties Sidebar --- */}
        <div className="w-80 bg-white border-l border-slate-200 overflow-y-auto hidden lg:block">
          {selectedItem ? (
            <div className="p-6 flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h2 className="font-bold text-lg text-slate-800 capitalize">Edit {selectedItem.type}</h2>
                <button onClick={() => deleteItem(selectedItem.id)} className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition-colors">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>

              {selectedItem.type !== "label" && (
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-500 uppercase flex justify-between">
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
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase">
                      {selectedItem.type === "label" ? "Text Content" : "Label"}
                    </label>
                    <input
                      type="text"
                      value={selectedItem.type === "label" ? (selectedItem as LabelItem).text : (selectedItem as any).label}
                      onChange={e => updateItem(selectedItem.id, selectedItem.type === "label" ? { text: e.target.value } : { label: e.target.value })}
                      className="w-full border border-slate-200 rounded p-2 text-sm"
                    />
                  </div>
                )}

              {selectedItem.type === "label" && (
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-500 uppercase">Font Size</label>
                  <input
                    type="number"
                    min="8"
                    max="72"
                    value={(selectedItem as LabelItem).fontSize}
                    onChange={e => updateItem(selectedItem.id, { fontSize: parseInt(e.target.value) })}
                    className="w-full border border-slate-200 rounded p-2 text-sm"
                  />
                </div>
              )}

              {(selectedItem.type === "building" || selectedItem.type === "parking") && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase">Width</label>
                    <input
                      type="number"
                      value={(selectedItem as any).width}
                      onChange={e =>
                        selectedItem.type === "building"
                          ? updateBuildingSize(selectedItem.id, parseInt(e.target.value), (selectedItem as BuildingItem).height)
                          : updateItem(selectedItem.id, { width: parseInt(e.target.value) })
                      }
                      className="w-full border border-slate-200 rounded p-2 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase">Height</label>
                    <input
                      type="number"
                      value={(selectedItem as any).height}
                      onChange={e =>
                        selectedItem.type === "building"
                          ? updateBuildingSize((selectedItem as BuildingItem).id, (selectedItem as BuildingItem).width, parseInt(e.target.value))
                          : updateItem(selectedItem.id, { height: parseInt(e.target.value) })
                      }
                      className="w-full border border-slate-200 rounded p-2 text-sm"
                    />
                  </div>
                </div>
              )}

              {selectedItem.type === "building" && (
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-500 uppercase">Building Shape</label>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleAddBuildingVertex(selectedItem.id)}
                      className="px-3 py-1 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs"
                    >
                      Add Vertex
                    </button>
                    <button
                      onClick={() => setVertexInsertMode(true)}
                      className={`px-3 py-1 rounded-full border text-xs ${vertexInsertMode
                        ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                        }`}
                    >
                      Insert on Edge
                    </button>
                    <button
                      onClick={() => handleRemoveBuildingVertex(selectedItem.id)}
                      className="px-3 py-1 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs"
                    >
                      Remove Vertex
                    </button>
                    <button
                      onClick={() => handleResetBuildingShape(selectedItem.id)}
                      className="px-3 py-1 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs"
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
                <div className="space-y-4">
                  <button
                    onClick={() => updateItem(selectedItem.id, { aspectRatioLocked: !(selectedItem as ImageItem).aspectRatioLocked })}
                    className={`flex items-center gap-2 text-sm font-medium w-full p-2 rounded border ${(selectedItem as ImageItem).aspectRatioLocked ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "bg-white border-slate-200 text-slate-600"
                      }`}
                  >
                    {(selectedItem as ImageItem).aspectRatioLocked ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
                    Maintain Proportions
                  </button>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-500 uppercase">Width</label>
                      <input
                        type="number"
                        value={Math.round((selectedItem as any).width)}
                        onChange={e => updateImageSize(selectedItem.id, parseInt(e.target.value), undefined)}
                        className="w-full border border-slate-200 rounded p-2 text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-500 uppercase">Height</label>
                      <input
                        type="number"
                        value={Math.round((selectedItem as any).height)}
                        onChange={e => updateImageSize(selectedItem.id, undefined, parseInt(e.target.value))}
                        className="w-full border border-slate-200 rounded p-2 text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <label className="text-xs font-semibold text-slate-500 uppercase">Size Scale</label>
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
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-500 uppercase">Canopy Size</label>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={(selectedItem as TreeItem).radius}
                    onChange={e => updateItem(selectedItem.id, { radius: parseInt(e.target.value) })}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                </div>
              )}

              {selectedItem.type === "camera" && (
                <div className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase flex justify-between">
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
                    <label className="text-xs font-semibold text-slate-500 uppercase flex justify-between">
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
                    <label className="text-xs font-semibold text-slate-500 uppercase flex justify-between">
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
                    <label className="text-xs font-semibold text-slate-500 uppercase">Aspect Ratio</label>
                    <select
                      value={cameraAspect}
                      onChange={e => {
                        const aspect = parseFloat(e.target.value);
                        const v = vFovFromH(cameraHFov, aspect);
                        updateCameraFov(selectedItem.id, cameraHFov, v, aspect);
                      }}
                      className="w-full border border-slate-200 rounded p-2 text-sm"
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
                        className="px-3 py-1 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50"
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase flex justify-between">
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

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-500 uppercase flex justify-between">
                        <span>Pitch</span>
                        <span>{Math.round((selectedItem as CameraItem).pitch ?? 0)}deg</span>
                      </label>
                      <input
                        type="range"
                        min="-60"
                        max="30"
                        value={(selectedItem as CameraItem).pitch ?? 0}
                        onChange={e => updateItem(selectedItem.id, { pitch: parseInt(e.target.value) })}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-500 uppercase flex justify-between">
                        <span>Height</span>
                        <span>{Math.round((selectedItem as CameraItem).mount?.height ?? (selectedItem as CameraItem).height ?? 10)}ft</span>
                      </label>
                      <input
                        type="range"
                        min="4"
                        max="40"
                        value={(selectedItem as CameraItem).mount?.height ?? (selectedItem as CameraItem).height ?? 10}
                        onChange={e => {
                          const value = parseInt(e.target.value);
                          if ((selectedItem as CameraItem).mount?.type === "building") {
                            updateCameraMount(selectedItem.id, { height: value });
                          } else {
                            updateItem(selectedItem.id, { height: value });
                          }
                        }}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase">Mount</label>
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
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${mountType === "free" ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "border-slate-200 text-slate-600 hover:bg-slate-50"
                          }`}
                      >
                        Free
                      </button>
                      <button
                        disabled={!buildingOptions.length}
                        onClick={() => attachCameraToNearestBuilding(selectedItem.id)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${mountType === "building" ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "border-slate-200 text-slate-600 hover:bg-slate-50"
                          } ${!buildingOptions.length ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        Building
                      </button>
                    </div>
                  </div>

                  {mountType === "building" && mountBuilding && (
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-500 uppercase">Building</label>
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
                          className="w-full border border-slate-200 rounded p-2 text-sm"
                        >
                          {buildingOptions.map(building => (
                            <option key={building.id} value={building.id}>
                              {building.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-500 uppercase flex justify-between">
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
                        <label className="text-xs font-semibold text-slate-500 uppercase flex justify-between">
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
                    <label className="text-xs font-semibold text-slate-500 uppercase">Description</label>
                    <textarea
                      value={(selectedItem as CameraItem).description}
                      onChange={e => updateItem(selectedItem.id, { description: e.target.value })}
                      className="w-full border border-slate-200 rounded p-2 text-sm h-20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase">Connector Dash Size</label>
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
              )}

              {selectedItem.type !== "image" && COLORS[selectedItem.type as keyof typeof COLORS] && (
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Color Code</label>
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
            </div>
          ) : (
            <div className="p-6 flex flex-col gap-6">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
                <MapIcon className="w-5 h-5 text-slate-500" />
                <h2 className="font-bold text-lg text-slate-800">Project Settings</h2>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-500 uppercase">Project Name</label>
                <input
                  type="text"
                  value={projectName}
                  onChange={e => setProjectName(e.target.value)}
                  className="w-full border border-slate-200 rounded p-2 text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Cameras", value: items.filter(item => item.type === "camera").length },
                  { label: "Buildings", value: items.filter(item => item.type === "building").length },
                  { label: "Trees", value: items.filter(item => item.type === "tree").length },
                  { label: "Parking", value: items.filter(item => item.type === "parking").length }
                ].map(stat => (
                  <div key={stat.label} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                    <p className="text-xs uppercase tracking-wide text-slate-500">{stat.label}</p>
                    <p className="text-lg font-semibold text-slate-800">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-100 pt-6 space-y-4">
                <h3 className="text-sm font-semibold text-slate-700">Canvas</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase">Width</label>
                    <input
                      type="number"
                      min="400"
                      max="3000"
                      value={canvasSize.width}
                      onChange={e => setCanvasSize({ ...canvasSize, width: parseInt(e.target.value) })}
                      className="w-full border border-slate-200 rounded p-2 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase">Height</label>
                    <input
                      type="number"
                      min="300"
                      max="3000"
                      value={canvasSize.height}
                      onChange={e => setCanvasSize({ ...canvasSize, height: parseInt(e.target.value) })}
                      className="w-full border border-slate-200 rounded p-2 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-500 uppercase flex justify-between">
                    <span>Grid Size</span>
                    <span>{gridSize}px</span>
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="80"
                    value={gridSize}
                    onChange={e => setGridSize(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                </div>

                <div className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm">
                  <span className="text-slate-600">Show Grid</span>
                  <button
                    onClick={() => setShowGrid(prev => !prev)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${showGrid ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}
                  >
                    {showGrid ? "On" : "Off"}
                  </button>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm">
                  <span className="text-slate-600">Snap to Grid</span>
                  <button
                    onClick={() => setSnapToGrid(prev => !prev)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${snapToGrid ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}
                  >
                    {snapToGrid ? "On" : "Off"}
                  </button>
                </div>

                <button
                  onClick={handleClearCanvas}
                  className="w-full py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50"
                >
                  Clear Canvas
                </button>
              </div>

              <div className="border-t border-slate-100 pt-6 space-y-4">
                <h3 className="text-sm font-semibold text-slate-700">Background Map</h3>
                <p className="text-xs text-slate-500">Adjust the uploaded map to align with the grid.</p>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-500 uppercase">Map Opacity</label>
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
                    <label className="text-xs font-semibold text-slate-500 uppercase">Map Width</label>
                    <input
                      type="number"
                      value={bgSettings.width}
                      onChange={e => setBgSettings({ ...bgSettings, width: parseInt(e.target.value) })}
                      className="w-full border border-slate-200 rounded p-2 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase">Map Height</label>
                    <input
                      type="number"
                      value={bgSettings.height}
                      onChange={e => setBgSettings({ ...bgSettings, height: parseInt(e.target.value) })}
                      className="w-full border border-slate-200 rounded p-2 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase">Offset X</label>
                    <input
                      type="number"
                      value={bgSettings.x}
                      onChange={e => setBgSettings({ ...bgSettings, x: parseInt(e.target.value) })}
                      className="w-full border border-slate-200 rounded p-2 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase">Offset Y</label>
                    <input
                      type="number"
                      value={bgSettings.y}
                      onChange={e => setBgSettings({ ...bgSettings, y: parseInt(e.target.value) })}
                      className="w-full border border-slate-200 rounded p-2 text-sm"
                    />
                  </div>
                </div>

                <button
                  onClick={handleFitBackground}
                  className="w-full py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50"
                >
                  Fit Background to Canvas
                </button>
              </div>

              <div className="border-t border-slate-100 pt-6 space-y-4">
                <h3 className="text-sm font-semibold text-slate-700">3D Snapshots</h3>
                {viewMode !== "iso3d" ? (
                  <p className="text-xs text-slate-500">Switch to Isometric view to capture snapshots.</p>
                ) : snapshots.length === 0 ? (
                  <p className="text-xs text-slate-500">No snapshots yet. Click “Snapshot” in the 3D view.</p>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    {snapshots.map(snapshot => (
                      <div key={snapshot.id} className="rounded-lg border border-slate-200 overflow-hidden bg-white">
                        <img src={snapshot.dataUrl} alt="Snapshot" className="w-full h-24 object-cover" />
                        <div className="p-2">
                          <p className="text-[10px] text-slate-500">{snapshot.createdAt}</p>
                          <button
                            onClick={() => handleExportSnapshot(snapshot.dataUrl, `security_snapshot_${snapshot.id}.png`)}
                            className="mt-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700"
                          >
                            Export
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div >
  );
}
