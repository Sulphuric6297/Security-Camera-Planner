
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

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
  Minimize
} from "lucide-react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

// --- Types ---

type ToolMode = "select" | "add-camera" | "add-building" | "add-tree" | "add-parking" | "add-label";
type InteractionType = "move" | "rotate" | "fov" | "range" | "resize-image" | "move-label" | "vertex" | null;
type ViewMode = "plan" | "iso3d" | "nvr";

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
  wallHeight?: number; // Vertical height in 3D
  label: string;
  color: string;
  points?: { x: number; y: number }[];
}

interface TreeItem extends BaseItem {
  type: "tree";
  radius: number;
  height?: number;  // Tree height (default 30)
  width?: number;   // Canopy width multiplier (default 1)
  treeType?: 'deciduous' | 'conifer' | 'palm' | 'bush';  // Tree type
  color: string;
}

interface ParkingItem extends BaseItem {
  type: "parking";
  width: number;
  height: number;
  color: string;
  vehicleType?: 'sedan' | 'suv' | 'truck' | 'sports' | 'van' | 'motorcycle';
  vehicleHeight?: number;
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



type CanvasItem = CameraItem | BuildingItem | TreeItem | ParkingItem | LabelItem | ImageItem;

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
// Create a detailed 3D car model with variations
const create3dCar = (item: ParkingItem): THREE.Group => {
  const group = new THREE.Group();
  const width = item.width;
  const length = item.height;
  const carHeight = item.vehicleHeight ?? 12;
  const wheelRadius = 3;
  const color = item.color;

  // Use explicit vehicle type or fallback to hash-based for backward compatibility
  const vehicleType = item.vehicleType ?? (() => {
    const hash = item.id.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
    return ['sedan', 'suv', 'truck', 'sports'][hash % 4] as 'sedan' | 'suv' | 'truck' | 'sports';
  })();

  const chassisMat = new THREE.MeshStandardMaterial({ color: color, roughness: 0.2, metalness: 0.3, flatShading: true });
  const glassMat = new THREE.MeshStandardMaterial({ color: '#1e293b', roughness: 0.1, metalness: 0.9, flatShading: true });
  const wheelMat = new THREE.MeshStandardMaterial({ color: '#171717', roughness: 0.5, flatShading: true });

  // --- Wheel Setup ---
  const wheelGeo = new THREE.CylinderGeometry(wheelRadius, wheelRadius, width * 0.15, 12);
  wheelGeo.rotateZ(Math.PI / 2);
  const wheelZ = length * 0.35;
  const wheelX = width * 0.45;

  const addWheels = (fourWheels = true) => {
    if (fourWheels) {
      [-1, 1].forEach(kx => {
        [-1, 1].forEach(kz => {
          const w = new THREE.Mesh(wheelGeo, wheelMat);
          w.position.set(kx * wheelX, wheelRadius, kz * wheelZ);
          w.castShadow = true;
          group.add(w);
        });
      });
    } else {
      // Two wheels for motorcycle
      [-1, 1].forEach(kz => {
        const w = new THREE.Mesh(wheelGeo, wheelMat);
        w.position.set(0, wheelRadius, kz * wheelZ);
        w.castShadow = true;
        group.add(w);
      });
    }
  };

  // --- Body Construction ---
  const yBase = wheelRadius + 1;

  if (vehicleType === 'suv') {
    addWheels();
    const bodyH = carHeight * 0.9;
    const body = new THREE.Mesh(new THREE.BoxGeometry(width, bodyH, length), chassisMat);
    body.position.y = yBase + bodyH / 2;
    body.castShadow = true;
    group.add(body);

    const cabinH = carHeight * 0.7;
    const cabinL = length * 0.8;
    const cabinW = width * 0.85;
    const cabin = new THREE.Mesh(new THREE.BoxGeometry(cabinW, cabinH, cabinL), chassisMat);
    cabin.position.y = yBase + bodyH + cabinH / 2 - 2;
    cabin.castShadow = true;
    group.add(cabin);

    const glass = new THREE.Mesh(new THREE.BoxGeometry(cabinW + 0.2, cabinH * 0.7, cabinL * 0.9), glassMat);
    glass.position.copy(cabin.position);
    group.add(glass);

  } else if (vehicleType === 'truck') {
    addWheels();
    const cabL = length * 0.35;
    const bedL = length * 0.6;
    const cabH = carHeight * 1.5;

    const base = new THREE.Mesh(new THREE.BoxGeometry(width, carHeight * 0.6, length), chassisMat);
    base.position.y = yBase + carHeight * 0.3;
    base.castShadow = true;
    group.add(base);

    const cab = new THREE.Mesh(new THREE.BoxGeometry(width * 0.95, cabH, cabL), chassisMat);
    cab.position.set(0, yBase + carHeight * 0.3 + cabH / 2, -length / 2 + cabL / 2 + 2);
    cab.castShadow = true;
    group.add(cab);

    const glass = new THREE.Mesh(new THREE.BoxGeometry(width + 0.1, cabH * 0.5, cabL * 0.7), glassMat);
    glass.position.copy(cab.position);
    glass.position.y += 2;
    group.add(glass);

    const wallH = 4;
    const bed = new THREE.Mesh(new THREE.BoxGeometry(width * 0.95, wallH, bedL), chassisMat);
    bed.position.set(0, yBase + carHeight * 0.6 + wallH / 2, length / 2 - bedL / 2);
    group.add(bed);

  } else if (vehicleType === 'sports') {
    addWheels();
    const bodyH = carHeight * 0.7;
    const body = new THREE.Mesh(new THREE.BoxGeometry(width, bodyH, length), chassisMat);
    body.position.y = yBase + bodyH / 2;
    body.castShadow = true;
    group.add(body);

    const cabinH = carHeight * 0.5;
    const cabinL = length * 0.5;
    const cabin = new THREE.Mesh(new THREE.BoxGeometry(width * 0.7, cabinH, cabinL), chassisMat);
    cabin.position.y = yBase + bodyH + cabinH / 2 - 1;
    group.add(cabin);

    const glass = new THREE.Mesh(new THREE.BoxGeometry(width * 0.72, cabinH * 0.8, cabinL * 0.8), glassMat);
    glass.position.copy(cabin.position);
    group.add(glass);

  } else if (vehicleType === 'van') {
    addWheels();
    const bodyH = carHeight * 1.2;
    const body = new THREE.Mesh(new THREE.BoxGeometry(width, bodyH, length), chassisMat);
    body.position.y = yBase + bodyH / 2;
    body.castShadow = true;
    group.add(body);

    // Front windshield
    const glassH = bodyH * 0.5;
    const glassL = length * 0.2;
    const glass = new THREE.Mesh(new THREE.BoxGeometry(width * 0.95, glassH, glassL), glassMat);
    glass.position.set(0, yBase + bodyH - glassH / 2, -length / 2 + glassL / 2 + 2);
    group.add(glass);

    // Side windows
    const sideGlassH = bodyH * 0.4;
    const sideGlassL = length * 0.6;
    const sideGlass = new THREE.Mesh(new THREE.BoxGeometry(width + 0.2, sideGlassH, sideGlassL), glassMat);
    sideGlass.position.set(0, yBase + bodyH - sideGlassH / 2, 0);
    group.add(sideGlass);

  } else if (vehicleType === 'motorcycle') {
    addWheels(false);
    // Body/frame
    const frameH = 6;
    const frameL = length * 0.6;
    const frame = new THREE.Mesh(new THREE.BoxGeometry(width * 0.3, frameH, frameL), chassisMat);
    frame.position.y = yBase + frameH / 2;
    frame.castShadow = true;
    group.add(frame);

    // Seat
    const seatH = 3;
    const seat = new THREE.Mesh(new THREE.BoxGeometry(width * 0.5, seatH, length * 0.4), new THREE.MeshStandardMaterial({ color: '#1f1f1f', roughness: 0.8 }));
    seat.position.set(0, yBase + frameH + seatH / 2, length * 0.1);
    group.add(seat);

    // Handlebars
    const handleH = 8;
    const handle = new THREE.Mesh(new THREE.BoxGeometry(width, 1, 2), new THREE.MeshStandardMaterial({ color: '#4a4a4a', metalness: 0.8 }));
    handle.position.set(0, yBase + handleH, -length * 0.3);
    group.add(handle);

  } else { // Sedan (Default)
    addWheels();
    const bodyH = carHeight * 0.6;
    const body = new THREE.Mesh(new THREE.BoxGeometry(width, bodyH, length), chassisMat);
    body.position.y = yBase + bodyH / 2;
    body.castShadow = true;
    group.add(body);

    const cabinH = carHeight * 0.8;
    const cabinL = length * 0.5;
    const cabin = new THREE.Mesh(new THREE.BoxGeometry(width * 0.85, cabinH, cabinL), chassisMat);
    cabin.position.y = yBase + bodyH + cabinH / 2 - 1;
    cabin.castShadow = true;
    group.add(cabin);

    const glass = new THREE.Mesh(new THREE.BoxGeometry(width * 0.9, cabinH * 0.8, cabinL * 0.9), glassMat);
    glass.position.copy(cabin.position);
    group.add(glass);
  }

  // Headlights (skip for motorcycle)
  if (vehicleType !== 'motorcycle') {
    const lightGeo = new THREE.PlaneGeometry(3, 2);
    const headLightMat = new THREE.MeshBasicMaterial({ color: '#fef3c7' });
    const tailLightMat = new THREE.MeshBasicMaterial({ color: '#ef4444' });

    const zFront = -length / 2 - 0.1;
    const zBack = length / 2 + 0.1;
    const yLight = yBase + carHeight * 0.6;
    const xLight = width * 0.35;

    const fl1 = new THREE.Mesh(lightGeo, headLightMat); fl1.position.set(-xLight, yLight, zFront); fl1.rotation.y = Math.PI; group.add(fl1);
    const fl2 = new THREE.Mesh(lightGeo, headLightMat); fl2.position.set(xLight, yLight, zFront); fl2.rotation.y = Math.PI; group.add(fl2);
    const tl1 = new THREE.Mesh(lightGeo, tailLightMat); tl1.position.set(-xLight, yLight, zBack); group.add(tl1);
    const tl2 = new THREE.Mesh(lightGeo, tailLightMat); tl2.position.set(xLight, yLight, zBack); group.add(tl2);
  }

  group.position.set(item.x, 0, item.y);
  group.rotation.y = -THREE.MathUtils.degToRad(item.rotation);

  return group;
};

// Create a detailed 3D tree model
// Create a detailed 3D tree model with multiple styles
const create3dTree = (item: TreeItem): THREE.Group => {
  const group = new THREE.Group();

  // Get tree properties with defaults
  const treeHeight = item.height ?? 30;
  const widthMultiplier = item.width ?? 1;
  const treeType = item.treeType ?? 'deciduous';

  const trunkColor = '#4a3728';
  const trunkMat = new THREE.MeshStandardMaterial({ color: trunkColor, roughness: 1.0, flatShading: true });

  if (treeType === 'conifer') {
    // Conifer/Pine Tree: Stacked Cones
    const trunkRadius = item.radius * 0.2;
    const trunkH = treeHeight * 0.3;
    const trunkGeo = new THREE.CylinderGeometry(trunkRadius * 0.6, trunkRadius, trunkH, 6);
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.y = trunkH / 2;
    trunk.castShadow = true;
    group.add(trunk);

    const foliageMat = new THREE.MeshStandardMaterial({ color: '#1e4620', roughness: 0.8, flatShading: true });
    const layers = 5;
    const canopyHeight = treeHeight * 0.8;
    const layerH = canopyHeight / layers;

    for (let i = 0; i < layers; i++) {
      const t = i / (layers - 1);
      const r = item.radius * widthMultiplier * (1 - t * 0.7);
      const y = trunkH * 0.5 + i * (layerH * 0.85);

      const cone = new THREE.Mesh(
        new THREE.ConeGeometry(r, layerH * 1.4, 8),
        foliageMat
      );
      cone.position.y = y;
      cone.castShadow = true;
      group.add(cone);
    }
  } else if (treeType === 'palm') {
    // Palm Tree: Tall thin trunk with fronds at top
    const trunkRadius = item.radius * 0.15;
    const trunkH = treeHeight * 0.85;

    // Curved trunk segments
    const segments = 8;
    const segmentH = trunkH / segments;
    for (let i = 0; i < segments; i++) {
      const segGeo = new THREE.CylinderGeometry(
        trunkRadius * (1 - i * 0.04),
        trunkRadius * (1 - (i + 1) * 0.04),
        segmentH, 6
      );
      const seg = new THREE.Mesh(segGeo, new THREE.MeshStandardMaterial({ color: '#8B7355', roughness: 0.9 }));
      seg.position.y = segmentH / 2 + i * segmentH;
      seg.castShadow = true;
      group.add(seg);
    }

    // Palm fronds
    const frondMat = new THREE.MeshStandardMaterial({ color: '#2d5a27', roughness: 0.7, side: THREE.DoubleSide });
    const frondCount = 8;
    const frondLength = item.radius * widthMultiplier * 2;

    for (let i = 0; i < frondCount; i++) {
      const angle = (i / frondCount) * Math.PI * 2;
      const frondGeo = new THREE.ConeGeometry(frondLength * 0.15, frondLength, 4);
      const frond = new THREE.Mesh(frondGeo, frondMat);
      frond.position.set(
        Math.cos(angle) * frondLength * 0.4,
        trunkH,
        Math.sin(angle) * frondLength * 0.4
      );
      frond.rotation.z = Math.PI / 2 + (Math.cos(angle) * 0.5);
      frond.rotation.y = angle;
      frond.castShadow = true;
      group.add(frond);
    }
  } else if (treeType === 'bush') {
    // Bush: Low rounded shrub
    const foliageMat = new THREE.MeshStandardMaterial({ color: item.color, roughness: 0.8, flatShading: true });
    const bushRadius = item.radius * widthMultiplier;
    const bushHeight = treeHeight * 0.5;

    // Main body - flattened sphere
    const mainGeo = new THREE.SphereGeometry(bushRadius, 8, 6);
    mainGeo.scale(1, bushHeight / bushRadius, 1);
    const main = new THREE.Mesh(mainGeo, foliageMat);
    main.position.y = bushHeight * 0.5;
    main.castShadow = true;
    group.add(main);

    // Extra clumps
    const hash = item.id.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
    for (let i = 0; i < 5; i++) {
      const theta = ((hash + i * 17) % 100) / 100 * Math.PI * 2;
      const dist = bushRadius * 0.6;
      const size = bushRadius * 0.5;

      const clump = new THREE.Mesh(
        new THREE.IcosahedronGeometry(size, 0),
        foliageMat
      );
      clump.position.set(
        Math.cos(theta) * dist,
        bushHeight * 0.4,
        Math.sin(theta) * dist
      );
      clump.castShadow = true;
      group.add(clump);
    }
  } else {
    // Deciduous Tree (default): Fluffy spherical canopy
    const trunkRadius = item.radius * 0.2;
    const trunkH = treeHeight * 0.4;
    const trunkGeo = new THREE.CylinderGeometry(trunkRadius * 0.7, trunkRadius, trunkH, 6);
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.y = trunkH / 2;
    trunk.castShadow = true;
    group.add(trunk);

    const foliageMat = new THREE.MeshStandardMaterial({ color: item.color, roughness: 0.8, flatShading: true });
    const canopyRadius = item.radius * widthMultiplier;

    // Main center sphere
    const mainGeo = new THREE.IcosahedronGeometry(canopyRadius * 0.9, 1);
    const main = new THREE.Mesh(mainGeo, foliageMat);
    main.position.y = trunkH + canopyRadius * 0.5;
    main.castShadow = true;
    group.add(main);

    // Random clumps for fullness
    const hash = item.id.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
    const clumps = 8;
    for (let i = 0; i < clumps; i++) {
      const theta = ((hash + i * 13) % 100) / 100 * Math.PI * 2;
      const phi = ((hash + i * 7) % 100) / 100 * Math.PI;
      const size = canopyRadius * (0.35 + ((hash + i * 3) % 5) / 12);
      const dist = canopyRadius * 0.65;

      const sub = new THREE.Mesh(new THREE.IcosahedronGeometry(size, 0), foliageMat);
      sub.position.set(
        Math.sin(phi) * Math.cos(theta) * dist,
        main.position.y + Math.cos(phi) * dist * 0.7,
        Math.sin(phi) * Math.sin(theta) * dist
      );
      sub.castShadow = true;
      group.add(sub);
    }
  }

  group.position.set(item.x, 0, item.y);
  group.rotation.y = THREE.MathUtils.degToRad(item.rotation);
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

  // Terrain State (Moved up for scope access)
  const [terrainHeights, setTerrainHeights] = useState<Record<string, number>>({});
  const [isTerrainMode, setIsTerrainMode] = useState(false);
  const [terrainSelection, setTerrainSelection] = useState<{ x1: number, z1: number, x2: number, z2: number } | null>(null);
  const [selectionHeight, setSelectionHeightState] = useState<number>(0);

  const panelSection = "rounded-xl border border-white/10 bg-white/5 p-4 space-y-3";
  const panelSectionLoose = "rounded-xl border border-white/10 bg-white/5 p-4 space-y-4";

  // State Refs for History (Ensures we save latest state in async callbacks)
  const currentItemsRef = useRef(items);
  const terrainHeightsRef = useRef(terrainHeights);
  useEffect(() => { currentItemsRef.current = items; }, [items]);
  useEffect(() => { terrainHeightsRef.current = terrainHeights; }, [terrainHeights]);

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

  const saveHistory = (itemsOverride?: CanvasItem[], terrainHeightsOverride?: Record<string, number>) => {
    const currentState = JSON.stringify({
      items: itemsOverride || currentItemsRef.current,
      terrainHeights: terrainHeightsOverride || terrainHeightsRef.current
    });
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
        if (Array.isArray(state)) {
          setItems(state);
        } else {
          setItems(state.items || []);
          setTerrainHeights(state.terrainHeights || {});
        }
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
        if (Array.isArray(state)) {
          setItems(state);
        } else {
          setItems(state.items || []);
          setTerrainHeights(state.terrainHeights || {});
        }
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

  // Interaction State
  const [interactionState, setInteractionState] = useState<{
    type: InteractionType;
    itemId: string | null;
    startMouse: { x: number; y: number };
    startVal: any;
    variant?: string;
    snap?: boolean;
  }>({ type: null, itemId: null, startMouse: { x: 0, y: 0 }, startVal: null, snap: false });

  // NVR Layout State
  const [nvrLayout, setNvrLayout] = useState<any[]>([]);
  const [maximizedCamId, setMaximizedCamId] = useState<string | null>(null);

  // Sync Layout with Items
  useEffect(() => {
    const cams = items.filter(i => i.type === 'camera');
    const layoutIds = new Set(nvrLayout.map(l => l.i));
    const newCams = cams.filter(c => !layoutIds.has(c.id));
    const validIds = new Set(cams.map(c => c.id));

    let nextLayout = nvrLayout.filter(l => validIds.has(l.i));

    if (newCams.length > 0) {
      newCams.forEach((cam, idx) => {
        // Append logic - 3 cameras per row for 4:3 aspect ratio
        const count = nextLayout.length;
        nextLayout.push({
          i: cam.id,
          x: (count * 4) % 12,
          y: Math.floor((count * 4) / 12) * 2,
          w: 4,
          h: 2
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

  // Terrain State
  // Terrain State moved to top



  const getGridHeight = (x: number, y: number) => {
    const gx = Math.round(x / gridSize) * gridSize;
    const gy = Math.round(y / gridSize) * gridSize;
    return terrainHeights[`${gx},${gy}`] || 0;
  };

  const setSelectionHeight = (height: number) => {
    setSelectionHeightState(height); // Update display
    if (!terrainSelection) {
      // Even if no selection, we might want to return current heights?
      return terrainHeights;
    }
    const { x1, z1, x2, z2 } = terrainSelection;
    const minX = Math.min(x1, x2), maxX = Math.max(x1, x2);
    const minZ = Math.min(z1, z2), maxZ = Math.max(z1, z2);

    const next = { ...terrainHeights };
    for (let x = minX; x <= maxX; x += gridSize) {
      for (let z = minZ; z <= maxZ; z += gridSize) {
        next[`${x},${z}`] = height;
      }
    }
    setTerrainHeights(next);
    return next;
  };

  const applyRamp = (axis: 'x' | 'z') => {
    if (!terrainSelection) return terrainHeights;
    const { x1, z1, x2, z2 } = terrainSelection;
    const minX = Math.min(x1, x2), maxX = Math.max(x1, x2);
    const minZ = Math.min(z1, z2), maxZ = Math.max(z1, z2);

    const next = { ...terrainHeights };

    if (axis === 'x') {
      for (let z = minZ; z <= maxZ; z += gridSize) {
        const startH = getGridHeight(minX, z);
        const endH = getGridHeight(maxX, z);
        const dist = maxX - minX;
        if (dist === 0) continue;

        for (let x = minX; x <= maxX; x += gridSize) {
          const t = (x - minX) / dist;
          next[`${x},${z}`] = startH + (endH - startH) * t;
        }
      }
    } else {
      for (let x = minX; x <= maxX; x += gridSize) {
        const startH = getGridHeight(x, minZ);
        const endH = getGridHeight(x, maxZ);
        const dist = maxZ - minZ;
        if (dist === 0) continue;

        for (let z = minZ; z <= maxZ; z += gridSize) {
          const t = (z - minZ) / dist;
          next[`${x},${z}`] = startH + (endH - startH) * t;
        }
      }
    }
    setTerrainHeights(next);
    return next;
  };

  const applySmooth = () => {
    if (!terrainSelection) return terrainHeights;
    const { x1, z1, x2, z2 } = terrainSelection;
    const minX = Math.min(x1, x2), maxX = Math.max(x1, x2);
    const minZ = Math.min(z1, z2), maxZ = Math.max(z1, z2);

    const next = { ...terrainHeights };

    for (let x = minX; x <= maxX; x += gridSize) {
      for (let z = minZ; z <= maxZ; z += gridSize) {
        let sum = 0;
        let count = 0;
        for (let dx = -gridSize; dx <= gridSize; dx += gridSize) {
          for (let dz = -gridSize; dz <= gridSize; dz += gridSize) {
            const key = `${x + dx},${z + dz}`;
            if (terrainHeights[key] !== undefined) {
              sum += terrainHeights[key];
            } else {
              sum += 0;
            }
            count++;
          }
        }
        next[`${x},${z}`] = count > 0 ? sum / count : 0;
      }
    }
    setTerrainHeights(next);
    return next;
  };

  // Refs
  const isTerrainModeRef = useRef(isTerrainMode);
  useEffect(() => { isTerrainModeRef.current = isTerrainMode; }, [isTerrainMode]);
  const prevTerrainHeightsRef = useRef(terrainHeights); // Track updates

  const svgRef = useRef<SVGSVGElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const elementImageInputRef = useRef<HTMLInputElement>(null);
  const projectInputRef = useRef<HTMLInputElement>(null);
  const bg3dInputRef = useRef<HTMLInputElement>(null);
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

  // 3D Visualization Settings
  const [frustumSettings, setFrustumSettings] = useState({
    visible: true,
    opacity: 0.15,
    edgeOpacity: 0.6,
    useCameraColor: true,
    color: '#3b82f6',
    showAll: true,
    mode: 'volume' // 'volume' | 'floor'
  });
  const [sceneBackgroundImg, setSceneBackgroundImg] = useState<string | null>(null);
  const [backgroundMode, setBackgroundMode] = useState<'flat' | 'panorama'>('flat'); // 'flat' = image, 'panorama' = 360° equirectangular

  // Street View Integration


  // 3D Model URLs (for higher quality models)


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
        if (data.frustumSettings) setFrustumSettings(data.frustumSettings);
        if (data.sceneBackgroundImg) setSceneBackgroundImg(data.sceneBackgroundImg);
        if (data.backgroundMode) setBackgroundMode(data.backgroundMode);
        if (data.nvrLayout) setNvrLayout(data.nvrLayout);
        if (data.terrainHeights) setTerrainHeights(data.terrainHeights);
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
          projectName,
          frustumSettings,
          sceneBackgroundImg,
          backgroundMode,
          nvrLayout,
          terrainHeights
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
              projectName,
              terrainHeights
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
  }, [items, backgroundImg, bgSettings, canvasSize, exportList, projectName, frustumSettings, sceneBackgroundImg, backgroundMode, nvrLayout, terrainHeights]);

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
          label: "Camera",
          description: "",
          fov: 109,
          hFov: 109,
          vFov: vFovFromH(109, 16 / 9),
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
          color: COLORS.parking[0],
          vehicleHeight: 12
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
    setItems(prev => prev.map(item => (item.id === id ? { ...item, ...updates } : item)));
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
    setTerrainSelection(null);
    setSelectionHeightState(0);
    setTerrainHeights({});
    setCameraPlacementPreview(null);
    setHistory([]);
    setHistoryIndex(-1);
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

  // Render a camera's perspective view to data URL - MATCHES Camera Preview Panel exactly
  const renderCameraViewToDataUrl = (cam: CameraItem): string => {
    const width = 1280;
    const height = 720;

    const camPos = getCameraPlanPosition(cam);
    const camTerrainH = getGridHeight(camPos.x, camPos.y); // Terrain adjusted height
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
    scene.background = new THREE.Color('#09090b');
    scene.fog = new THREE.Fog('#09090b', range * 0.3, range * 1.2);

    // Perspective camera at security camera position (Terrain Adjusted)
    const perspCam = new THREE.PerspectiveCamera(vFov, aspect, 1, range * 2);
    perspCam.position.set(camPos.x, camTerrainH + camHeight, camPos.y);

    const pitchRad = THREE.MathUtils.degToRad(pitch);
    const lookAt = new THREE.Vector3(
      camPos.x + Math.cos(rotAngle) * 100,
      camTerrainH + camHeight + Math.tan(pitchRad) * 100,
      camPos.y + Math.sin(rotAngle) * 100
    );
    perspCam.lookAt(lookAt);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.7);
    dirLight.position.set(100, 200, 50);
    scene.add(dirLight);

    // Ground with Terrain Height
    const groundW = canvasSize.width * 2;
    const groundH = canvasSize.height * 2;
    const groundGeo = new THREE.PlaneGeometry(groundW, groundH, 64, 64);

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
      new THREE.MeshStandardMaterial({ color: '#6B8E23', roughness: 0.9 })
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
        mapPosAttr.setZ(i, h + 0.1);
      }
      mapGeometry.computeVertexNormals();

      const mapPlane = new THREE.Mesh(
        mapGeometry,
        new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: bgSettings.opacity })
      );
      mapPlane.rotation.x = -Math.PI / 2;
      mapPlane.position.set(bgSettings.x + bgSettings.width / 2, 0, bgSettings.y + bgSettings.height / 2);
      scene.add(mapPlane);
    }

    // Add items (Terrain Aware)
    items.forEach(item => {
      const itemH = getGridHeight(item.x, item.y);

      if (item.type === "building") {
        const bld = item as BuildingItem;
        const pts = getBuildingPoints(bld);
        const shape = new THREE.Shape(pts.map(p => new THREE.Vector2(p.x, -p.y)));
        const geo = new THREE.ExtrudeGeometry(shape, { depth: 60, bevelEnabled: false });
        geo.rotateX(-Math.PI / 2);
        const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: bld.color, side: THREE.DoubleSide }));
        mesh.position.set(bld.x, itemH, bld.y);
        mesh.rotation.y = -THREE.MathUtils.degToRad(bld.rotation);
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
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(width, height);

    // Apply PBR Lighting (RoomEnvironment) to fix black models in preview
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment()).texture;

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

    // Copy WebGL canvas to a 2D canvas for overlay (WebGL and 2D contexts can't coexist on same canvas)
    const outputCanvas = document.createElement('canvas');
    outputCanvas.width = width;
    outputCanvas.height = height;
    const ctx = outputCanvas.getContext('2d');
    if (ctx) {
      // Draw the WebGL render first
      ctx.drawImage(canvas, 0, 0);

      // Top bar with camera name only
      ctx.fillStyle = 'rgba(0,0,0,0.7)';
      ctx.fillRect(0, 0, width, 40);

      // Camera icon and label
      ctx.fillStyle = '#10b981';
      ctx.font = 'bold 24px system-ui, sans-serif';
      ctx.fillText('📷', 16, 28);
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 22px system-ui, sans-serif';
      ctx.fillText(cam.label, 56, 28);
    }

    const dataUrl = outputCanvas.toDataURL('image/png');
    renderer.dispose();
    pmremGenerator.dispose();
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
      terrainHeights,
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
        if (projectData.terrainHeights) setTerrainHeights(projectData.terrainHeights);
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

  const handleElementImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = event => addImageElement(event.target?.result as string);
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

  // Fast position-only update for 3D objects (used during dragging)
  const updateThreeScenePositions = () => {
    const state = threeStateRef.current;
    if (!state) return;

    const cache = threeObjectCacheRef.current;
    let needsRender = false;

    items.forEach(item => {
      const obj = cache.get(item.id);
      if (!obj) return;

      // Get terrain height for the item
      const h = getGridHeight(item.x, item.y);

      if (item.type === "building" || item.type === "parking") {
        obj.position.set(item.x, h, item.y);
        obj.rotation.y = -THREE.MathUtils.degToRad(item.rotation);
        needsRender = true;
      } else if (item.type === "tree") {
        const tree = item as TreeItem;
        obj.position.set(tree.x, h, tree.y);
        obj.rotation.y = -THREE.MathUtils.degToRad(tree.rotation);
        needsRender = true;
      } else if (item.type === "camera") {
        const cam = item as CameraItem;
        const camPos = getCameraPlanPosition(cam);
        const camH = getGridHeight(camPos.x, camPos.y); // Get height at camera specific position (pivot)
        const camMountHeight = cam.mount?.height ?? cam.height ?? 10;

        obj.position.set(camPos.x, camH + camMountHeight, camPos.y);
        obj.rotation.y = -THREE.MathUtils.degToRad(cam.rotation);
        obj.rotation.x = THREE.MathUtils.degToRad(cam.pitch ?? 0);
        needsRender = true;
      } else if (item.type === "image") {
        const img = item as ImageItem;
        obj.position.set(img.x, h + 0.25, img.y);
        obj.rotation.z = THREE.MathUtils.degToRad(img.rotation);
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

      // For trees, check radius, height, width, treeType, rotation, color change
      if (nextItem.type === "tree") {
        const prevT = prevItem as TreeItem;
        const nextT = nextItem as TreeItem;
        if (prevT.radius !== nextT.radius || prevT.color !== nextT.color) return true;
        if (prevT.height !== nextT.height || prevT.width !== nextT.width) return true;
        if (prevT.treeType !== nextT.treeType) return true;
      }

      // For parking/cars, check dimensions, color, vehicleType, rotation
      if (nextItem.type === "parking") {
        const prevP = prevItem as ParkingItem;
        const nextP = nextItem as ParkingItem;
        if (
          prevP.width !== nextP.width ||
          prevP.height !== nextP.height ||
          prevP.vehicleHeight !== nextP.vehicleHeight ||
          prevP.vehicleType !== nextP.vehicleType ||
          prevP.color !== nextP.color
        ) return true;
        if (prevP.color !== nextP.color || prevP.vehicleType !== nextP.vehicleType) return true;
        // if (prevP.rotation !== nextP.rotation) return true;
      }

      // For cameras, check if range/fov changed (frustum geometry)
      if (nextItem.type === "camera") {
        const prevC = prevItem as CameraItem;
        const nextC = nextItem as CameraItem;
        if (prevC.range !== nextC.range || prevC.fov !== nextC.fov || prevC.hFov !== nextC.hFov) return true;
        if (prevC.color !== nextC.color) return true;
      }
    }

    return false;
  };

  const rebuildThreeScene = () => {
    const state = threeStateRef.current;
    if (!state) return;

    const { group, scene, renderer } = state;

    // Check if we can do a fast position-only update
    // Fast path: Only if items structure/props haven't changed AND terrain hasn't changed
    const prevItems = prevItemsRef.current;

    // We need to track previous terrain heights to know if we need a full rebuild
    // Note: We use the ref inside the condition
    const terrainChanged = prevTerrainHeightsRef.current !== terrainHeights;

    if (prevItems.length > 0 && !needsFullRebuild(prevItems, items) && !terrainChanged) {
      updateThreeScenePositions();
      prevItemsRef.current = [...items];
      return;
    }
    prevTerrainHeightsRef.current = terrainHeights;

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

    const terrainMaterial = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      roughness: 0.9,
      metalness: 0.1,
      flatShading: true
    });

    const terrainMesh = new THREE.Mesh(terrainGeometry, terrainMaterial);
    terrainMesh.rotation.x = -Math.PI / 2;
    terrainMesh.position.set(canvasSize.width / 2, 0, canvasSize.height / 2);
    terrainMesh.receiveShadow = true;
    terrainMesh.name = "terrain-mesh";
    group.add(terrainMesh);

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
      const mapPlaneMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: bgSettings.opacity
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
        mapPosAttr.setZ(i, h + 0.15); // Slight offset above terrain to prevent z-fighting
      }
      mapGeometry.computeVertexNormals();

      const mapPlane = new THREE.Mesh(mapGeometry, mapPlaneMaterial);
      mapPlane.rotation.x = -Math.PI / 2;
      mapPlane.position.set(
        bgSettings.x + bgSettings.width / 2,
        0,
        bgSettings.y + bgSettings.height / 2
      );
      mapPlane.receiveShadow = true;
      group.add(mapPlane);
    }

    // Process all items
    items.forEach(item => {
      const terrainH = getGridHeight(item.x, item.y);

      // Buildings with improved materials
      if (item.type === "building") {
        const building = item as BuildingItem;
        const points = getBuildingPoints(building);
        const buildingHeight = building.wallHeight ?? 60;

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
        mesh.position.set(building.x, terrainH, building.y);
        mesh.rotation.y = -THREE.MathUtils.degToRad(building.rotation);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.userData.itemId = building.id;
        threeObjectCacheRef.current.set(building.id, mesh); // Cache for position updates
        group.add(mesh);

        // Building roof (child of mesh for grouped transforms)
        const roofMaterial = new THREE.MeshStandardMaterial({
          color: adjustColor(building.color, -20),
          roughness: 0.7,
          metalness: 0.05
        });
        const roofShape = new THREE.Shape(points.map(p => new THREE.Vector2(p.x, -p.y)));
        const roofGeometry = new THREE.ShapeGeometry(roofShape);
        roofGeometry.rotateX(-Math.PI / 2);

        const roof = new THREE.Mesh(roofGeometry, roofMaterial);
        roof.position.set(0, buildingHeight, 0); // Local space
        roof.name = "building-roof";
        roof.userData.itemId = building.id;
        roof.userData.isRoof = true;
        roof.receiveShadow = true;
        mesh.add(roof);

        // Building label
        const label = createTextSprite(building.label);
        if (label) {
          label.position.set(0, buildingHeight + 15, 0);
          mesh.add(label);
        }
      }

      // Cars (Parking Items treated as cars)
      if (item.type === "parking") {
        const car = create3dCar(item as ParkingItem);
        car.userData.itemId = item.id;
        threeObjectCacheRef.current.set(item.id, car); // Cache for position updates
        group.add(car);
      }

      // Trees
      if (item.type === "tree") {
        const tree = create3dTree(item as TreeItem);
        tree.userData.itemId = item.id;
        threeObjectCacheRef.current.set(item.id, tree); // Cache for position updates
        group.add(tree);
      }

      // Camera with proper 3D frustum
      if (item.type === "camera") {
        const cameraItem = item as CameraItem;
        const cameraPos = getCameraPlanPosition(cameraItem);

        // Recalculate height at specific camera pivot
        const camTerrainH = getGridHeight(cameraPos.x, cameraPos.y);
        const cameraMountHeight = cameraItem.mount?.height ?? cameraItem.height ?? 10;
        const absHeight = camTerrainH + cameraMountHeight;
        const cameraHeight = cameraMountHeight;
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
        cameraGroup.userData.itemId = cameraItem.id; // For raycasting selection

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
        // For a camera facing +X locally:
        // - Y rotation controls azimuth (horizontal direction)
        // - X rotation (on the group after Y rotation) controls pitch (tilt up/down)
        // - Y rotation controls azimuth (horizontal direction)
        // - X rotation (on the group after Y rotation) controls pitch (tilt up/down)
        cameraGroup.position.set(cameraPos.x, absHeight, cameraPos.y);
        cameraGroup.rotation.order = 'YXZ'; // Apply Y (azimuth) first, then X (pitch)
        cameraGroup.rotation.y = rotAngle;
        cameraGroup.rotation.x = pitchRad; // Pitch: positive = look up, negative = look down
        threeObjectCacheRef.current.set(cameraItem.id, cameraGroup); // Cache for position updates
        group.add(cameraGroup);

        // Mounting pole
        const poleGeometry = new THREE.CylinderGeometry(2, 2.5, cameraHeight, 8);
        const poleMaterial = new THREE.MeshStandardMaterial({
          color: "#475569",
          roughness: 0.6,
          metalness: 0.3
        });
        const pole = new THREE.Mesh(poleGeometry, poleMaterial);
        pole.position.set(cameraPos.x, camTerrainH + cameraMountHeight / 2, cameraPos.y);
        pole.castShadow = true;
        group.add(pole);



        // Frustum Visualization Logic
        if (frustumSettings.visible) {
          const shouldShow = (frustumSettings.showAll !== false) || item.id === selectedId;
          const showVolume = (frustumSettings.mode || 'volume') === 'volume';

          if (shouldShow) {
            // Frustum geometry calc
            const aspect = 1.33;
            const displayRange = Math.min(range, 50); // Cap visual range to avoid clutter
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

            // Render Volume (Cone)
            if (showVolume) {
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
              frustumMesh.position.set(cameraPos.x, cameraHeight, cameraPos.y);
              frustumMesh.rotation.order = 'YXZ';
              frustumMesh.rotation.y = rotAngle;
              frustumMesh.rotation.x = pitchRad;
              group.add(frustumMesh);

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
              edges.position.set(cameraPos.x, cameraHeight, cameraPos.y);
              edges.rotation.order = 'YXZ';
              edges.rotation.y = rotAngle;
              edges.rotation.x = pitchRad;
              group.add(edges);
            }

            // Ground Projection
            const groundProjectionPoints: THREE.Vector3[] = [];
            const halfAngleH = THREE.MathUtils.degToRad(hFov) / 2;
            // Recalculate vFov for projection logic matching aspect
            const vFovRadProj = 2 * Math.atan(Math.tan(halfAngleH) / aspect);
            const halfAngleV = vFovRadProj / 2;

            const testPoints = [
              { h: halfAngleH, v: halfAngleV },
              { h: -halfAngleH, v: halfAngleV },
              { h: -halfAngleH, v: -halfAngleV },
              { h: halfAngleH, v: -halfAngleV }
            ];

            testPoints.forEach(angles => {
              const localDir = new THREE.Vector3(
                Math.cos(angles.v) * Math.cos(angles.h),
                Math.sin(angles.v),
                Math.cos(angles.v) * Math.sin(angles.h)
              ).normalize();
              const euler = new THREE.Euler(pitchRad, rotAngle, 0, 'YXZ'); // Match camera rotation order
              localDir.applyEuler(euler);
              if (localDir.y < -0.01) {
                const t = -cameraHeight / localDir.y;
                const groundX = cameraPos.x + localDir.x * t;
                const groundZ = cameraPos.y + localDir.z * t;
                groundProjectionPoints.push(new THREE.Vector3(groundX, 0.15, groundZ));
              }
            });

            if (groundProjectionPoints.length >= 3) {
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
                opacity: showVolume ? 0.1 : 0.4,
                side: THREE.DoubleSide
              });
              const projMesh = new THREE.Mesh(projGeometry, projMaterial);
              projMesh.position.set(cameraPos.x, 0.12, cameraPos.y);
              group.add(projMesh);

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
                opacity: showVolume ? 0.4 : 0.8
              });
              const outline = new THREE.LineSegments(outlineGeometry, outlineMaterial);
              group.add(outline);
            }
          }
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

    // Update previous items ref for next diff comparison
    prevItemsRef.current = [...items];
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


  // Effect to handle environment background updates (HDRI / Panorama / Street View)
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
    interactionType?: "move" | "resize-height";
    startHeight?: number;
    startMouseY?: number;
    currentHeight?: number;
  }>({ isDragging: false, itemId: null, dragOffset: null });

  // Refs to track current items and mode in 3D event handlers
  const itemsRef = useRef(items);
  const modeRef = useRef(mode);
  const selectedIdRef = useRef(selectedId);
  const snapToGridRef = useRef(snapToGrid);
  const gridSizeRef = useRef(gridSize);

  useEffect(() => { itemsRef.current = items; }, [items]);
  useEffect(() => { modeRef.current = mode; }, [mode]);
  useEffect(() => { selectedIdRef.current = selectedId; }, [selectedId]);
  useEffect(() => { snapToGridRef.current = snapToGrid; }, [snapToGrid]);
  useEffect(() => { gridSizeRef.current = gridSize; }, [gridSize]);

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
    // Terrain Interaction: Cursor & Selection
    if (!threeStateRef.current) return;
    const scene = threeStateRef.current.scene;
    const camera = threeStateRef.current.camera;
    const renderer = threeStateRef.current.renderer;

    // 1. Cursor Logic
    let cursor = scene.getObjectByName("terrain-cursor") as THREE.Mesh;
    if (!cursor) {
      const geo = new THREE.BoxGeometry(gridSize / 2, 4, gridSize / 2);
      const mat = new THREE.MeshBasicMaterial({ color: 0xfacc15, transparent: true, opacity: 0.6, depthTest: false });
      cursor = new THREE.Mesh(geo, mat);
      cursor.name = "terrain-cursor";
      scene.add(cursor);
    }

    if (isTerrainMode) {
      cursor.visible = true;
    } else {
      cursor.visible = false;
    }

    // 2. Selection Box
    let selectionMesh = scene.getObjectByName("terrain-selection-box") as THREE.Mesh;
    if (!selectionMesh) {
      const geo = new THREE.BoxGeometry(1, 400, 1); // Tall box to cover height variations
      const mat = new THREE.MeshBasicMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.3, side: THREE.DoubleSide });
      selectionMesh = new THREE.Mesh(geo, mat);
      selectionMesh.name = "terrain-selection-box";
      scene.add(selectionMesh);
    }

    if (isTerrainMode && terrainSelection) {
      selectionMesh.visible = true;
      const { x1, z1, x2, z2 } = terrainSelection;
      const minX = Math.min(x1, x2);
      const maxX = Math.max(x1, x2);
      const minZ = Math.min(z1, z2);
      const maxZ = Math.max(z1, z2);

      const w = (maxX - minX) + gridSize / 2;
      const d = (maxZ - minZ) + gridSize / 2;

      selectionMesh.scale.set(Math.max(w, 4), 1, Math.max(d, 4));
      selectionMesh.position.set((minX + maxX) / 2, 0, (minZ + maxZ) / 2);
    } else {
      selectionMesh.visible = false;
    }

    // Only attach listener if in Terrain Mode
    if (!isTerrainMode) {
      renderer.render(scene, camera);
      return;
    }

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
          const gx = Math.round(pt.x / gridSize) * gridSize;
          const gz = Math.round(pt.z / gridSize) * gridSize;

          const h = getGridHeight(gx, gz);
          cursor.position.set(gx, h, gz);
          renderer.render(scene, camera);
        }
      }
    };

    renderer.domElement.addEventListener("pointermove", onMove);
    return () => {
      renderer.domElement.removeEventListener("pointermove", onMove);
    };
  }, [isTerrainMode, gridSize, terrainHeights, terrainSelection]);

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

    // Helper: Cast ray to ground plane (y=0) and return world coords
    const raycastToGround = (ndc: { x: number; y: number }): { x: number; z: number } | null => {
      raycaster.setFromCamera(new THREE.Vector2(ndc.x, ndc.y), camera);
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

      // Terrain Edit Mode (Selection Logic)
      if (isTerrainModeRef.current) {
        raycaster.setFromCamera(new THREE.Vector2(ndc.x, ndc.y), camera);
        const terrain = group.getObjectByName("terrain-mesh");
        if (terrain) {
          const hits = raycaster.intersectObject(terrain);
          if (hits.length > 0) {
            const pt = hits[0].point;
            const safeGrid = gridSize || 20;
            const gx = Math.round(pt.x / safeGrid) * safeGrid;
            const gz = Math.round(pt.z / safeGrid) * safeGrid;

            // Start Selection
            setTerrainSelection({ x1: gx, z1: gz, x2: gx, z2: gz });

            // Disable Orbit Controls to prevent panning/rotating while selecting
            if (threeStateRef.current?.controls) {
              threeStateRef.current.controls.enabled = false;
            }

            threeDragStateRef.current = {
              isDragging: true,
              interactionType: "select-terrain" as any,
              itemId: "terrain-select",
              startMouse: { x: gx, y: gz } // Using as Grid Coord storage effectively
            } as any;

            const moveHandler = (moveEvent: PointerEvent) => {
              const moveNdc = getNDC(moveEvent);
              raycaster.setFromCamera(new THREE.Vector2(moveNdc.x, moveNdc.y), camera);
              const moveHits = raycaster.intersectObject(terrain);
              if (moveHits.length > 0) {
                const mPt = moveHits[0].point;
                const safeGrid = gridSize || 20;
                const mGx = Math.round(mPt.x / safeGrid) * safeGrid;
                const mGz = Math.round(mPt.z / safeGrid) * safeGrid;

                setTerrainSelection(prev => {
                  if (!prev) return { x1: gx, z1: gz, x2: mGx, z2: mGz };
                  return { ...prev, x2: mGx, z2: mGz };
                });
              }
            };

            const upHandler = () => {
              const dragState = threeDragStateRef.current;

              // Re-enable Orbit
              if (threeStateRef.current?.controls) {
                threeStateRef.current.controls.enabled = true;
              }

              if ((dragState as any).interactionType === "select-terrain") {
                threeDragStateRef.current = { ...threeDragStateRef.current, isDragging: false, interactionType: null };
              }
              window.removeEventListener("pointermove", moveHandler);
              window.removeEventListener("pointerup", upHandler);
            };

            window.addEventListener("pointermove", moveHandler);
            window.addEventListener("pointerup", upHandler);
            event.stopPropagation(); // Stop bubbling
            return; // Stop propagation
          }
        }
        // If in terrain mode but clicked off-terrain, fallback or do nothing?
        // Do distinct check:
        return;
      } else {
        // Normal mode (Selection check)
        // Only check selection if NOT terrain mode
      }

      // 1. Handle Selection / Drag (Existing logic)
      // We need to wrap existing logic in "if (!isTerrainMode)" or handle fallthrough?
      // If terrain mode started drag, we want to attach listeners.
      // Existing code structure:
      // const clickedItemId = ...
      // ...

      // My insertion above falls through?
      // If threeDragStateRef is set, we skip selection logic?
      // Existing selection logic sets threeDragStateRef.
      // I should WRAP the selection logic.

      // Let's look at the TARGET of replace.
      // I'll replace lines 2900 




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
                  label: "Camera",
                  description: "",
                  fov: 109,
                  hFov: 109,
                  vFov: vFovFromH(109, 16 / 9),
                  pitch: -15,
                  height: 60,
                  aspect: 16 / 9,
                  mount: { type: "free", edgeT: 0.5, height: 60 },
                  range: 150,
                  color: COLORS.camera[0],
                  labelOffset: { x: 0, y: 30 },
                  connectorDashSize: 3
                } as CameraItem;
                break;
              case "add-building":
                newItem = {
                  ...common,
                  type: "building",
                  width: 100,
                  height: 80,
                  wallHeight: 60,
                  label: "Building",
                  color: COLORS.building[0],
                  points: rectanglePoints(100, 80)
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
                  width: 30,
                  height: 50,
                  color: COLORS.parking[0],
                  vehicleHeight: 12
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
          raycaster.setFromCamera(new THREE.Vector2(ndc.x, ndc.y), camera);
          const intersects = raycaster.intersectObjects(group.children, true);
          const hit = intersects.find(h => {
            return h.object.name === "height-corner-handle" && h.object.userData.itemId === clickedItemId;
          });
          if (hit) {
            isResizingHeight = true;
          }

          const groundPos = raycastToGround(ndc);

          if (groundPos && clickedItem) {
            // "Hit Offset" Pattern
            threeDragStateRef.current = {
              isDragging: true,
              itemId: clickedItemId,
              interactionType: isResizingHeight ? "resize-height" : "move",
              startHeight: (clickedItem as BuildingItem).wallHeight ?? 60,
              startMouseY: event.clientY,
              dragOffset: {
                x: clickedItem.x - groundPos.x,
                z: clickedItem.y - groundPos.z
              }
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

              if (itemType === "camera") {
                const item = itemsRef.current.find(i => i.id === dragState.itemId) as CameraItem | undefined;
                const camHeight = item?.mount?.height ?? item?.height ?? 10;
                cachedObj.position.set(newX, camHeight, newY);
              } else if (itemType === "tree" || itemType === "parking" || itemType === "building") {
                cachedObj.position.set(newX, 0, newY);
              } else if (itemType === "image") {
                cachedObj.position.set(newX, 0.25, newY);
              } else if (itemType === "label") {
                cachedObj.position.set(newX, 8, newY);
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
                saveHistory();
              } else if (dragState.interactionType !== "resize-height") {
                // Commit Position
                const cachedObj = threeObjectCacheRef.current.get(dragState.itemId);
                if (cachedObj) {
                  const finalX = cachedObj.position.x;
                  const finalY = cachedObj.position.z;
                  const dragItemId = dragState.itemId;
                  setItems(prev => prev.map(item => {
                    if (item.id === dragItemId) {
                      return { ...item, x: finalX, y: finalY };
                    }
                    return item;
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
              currentHeight: undefined
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
      renderer.dispose();
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
  }, [items, backgroundImg, bgSettings, canvasSize, gridSize, showGrid, viewMode, frustumSettings, sceneBackgroundImg, backgroundMode, selectedId, terrainHeights]);

  // Lightweight effect for terrain selection visualization (no full rebuild)
  useEffect(() => {
    if (viewMode !== "iso3d") return;
    const state = threeStateRef.current;
    if (!state) return;

    const { group, scene, camera, renderer } = state;

    // Remove old selection helper
    const oldHelper = group.getObjectByName("terrain-selection-helper");
    if (oldHelper) {
      group.remove(oldHelper);
      if ((oldHelper as any).geometry) (oldHelper as any).geometry.dispose();
    }

    // Add new selection helper if selection exists
    if (terrainSelection) {
      const minX = Math.min(terrainSelection.x1, terrainSelection.x2);
      const maxX = Math.max(terrainSelection.x1, terrainSelection.x2);
      const minZ = Math.min(terrainSelection.z1, terrainSelection.z2);
      const maxZ = Math.max(terrainSelection.z1, terrainSelection.z2);

      const points = [
        new THREE.Vector3(minX, getGridHeight(minX, minZ) + 3, minZ),
        new THREE.Vector3(maxX, getGridHeight(maxX, minZ) + 3, minZ),
        new THREE.Vector3(maxX, getGridHeight(maxX, maxZ) + 3, maxZ),
        new THREE.Vector3(minX, getGridHeight(minX, maxZ) + 3, maxZ),
        new THREE.Vector3(minX, getGridHeight(minX, minZ) + 3, minZ)
      ];

      const selGroup = new THREE.Group();
      selGroup.name = "terrain-selection-helper";

      const selGeo = new THREE.BufferGeometry().setFromPoints(points);
      const selMat = new THREE.LineBasicMaterial({ color: 0x10b981, linewidth: 2, depthTest: false });
      const selLine = new THREE.Line(selGeo, selMat);
      selLine.renderOrder = 999;
      selGroup.add(selLine);

      // Corner markers
      const markerGeo = new THREE.BoxGeometry(5, 5, 5);
      const markerMat = new THREE.MeshBasicMaterial({ color: 0x10b981, depthTest: false });
      points.slice(0, 4).forEach(p => {
        const m = new THREE.Mesh(markerGeo, markerMat);
        m.position.copy(p);
        m.renderOrder = 999;
        selGroup.add(m);
      });

      group.add(selGroup);
    }

    renderer.render(scene, camera);
  }, [terrainSelection, viewMode]);



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
    const camTerrainH = getGridHeight(camPos.x, camPos.y); // Terrain adjusted height
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
    scene.background = new THREE.Color('#09090b');
    scene.fog = new THREE.Fog('#09090b', range * 0.3, range * 1.2);

    // Perspective camera at security camera position (Terrain Adjusted)
    const perspCam = new THREE.PerspectiveCamera(vFov, aspect, 1, range * 2);
    perspCam.position.set(camPos.x, camTerrainH + camHeight, camPos.y);

    const pitchRad = THREE.MathUtils.degToRad(pitch);
    const lookAt = new THREE.Vector3(
      camPos.x + Math.cos(rotAngle) * 100,
      camTerrainH + camHeight + Math.tan(pitchRad) * 100, // Look from correct height
      camPos.y + Math.sin(rotAngle) * 100
    );
    perspCam.lookAt(lookAt);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.7);
    dirLight.position.set(100, 200, 50);
    scene.add(dirLight);

    // Ground with Terrain Height
    const groundW = canvasSize.width * 2;
    const groundH = canvasSize.height * 2;
    const groundGeo = new THREE.PlaneGeometry(groundW, groundH, 64, 64);

    // Apply terrain height to ground geometry
    const pos = groundGeo.attributes.position;
    const centerX = canvasSize.width / 2;
    const centerY = canvasSize.height / 2;

    for (let i = 0; i < pos.count; i++) {
      const lx = pos.getX(i);
      const ly = pos.getY(i); // This is Z before rotation
      // World coordinates relative to the ground placement
      const wx = lx + centerX;
      const wy = centerY - ly; // Fixed: Match Main Scene logic (Y+ is Up/Top, Z+ is Down)

      const h = getGridHeight(wx, wy);
      pos.setZ(i, h);
    }
    groundGeo.computeVertexNormals();

    const ground = new THREE.Mesh(
      groundGeo,
      new THREE.MeshStandardMaterial({ color: '#6B8E23', roughness: 0.9 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(centerX, 0, centerY);
    scene.add(ground);

    // Background image (terrain deformed)
    if (bgImageRef.current) {
      const tex = new THREE.CanvasTexture(bgImageRef.current);
      tex.colorSpace = THREE.SRGBColorSpace;

      // Create subdivided geometry to deform with terrain
      const mapSegW = Math.max(Math.round(bgSettings.width / gridSize), 1);
      const mapSegH = Math.max(Math.round(bgSettings.height / gridSize), 1);
      const mapGeometry = new THREE.PlaneGeometry(bgSettings.width, bgSettings.height, mapSegW, mapSegH);

      // Apply terrain heights to map geometry
      const mapPosAttr = mapGeometry.attributes.position;
      for (let i = 0; i < mapPosAttr.count; i++) {
        const localX = mapPosAttr.getX(i);
        const localY = mapPosAttr.getY(i);

        // Transform to world coords
        const worldX = (bgSettings.x + bgSettings.width / 2) + localX;
        const worldZ = (bgSettings.y + bgSettings.height / 2) - localY;

        const h = getGridHeight(worldX, worldZ);
        mapPosAttr.setZ(i, h + 0.1); // Slight offset above terrain
      }
      mapGeometry.computeVertexNormals();

      const mapPlane = new THREE.Mesh(
        mapGeometry,
        new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: bgSettings.opacity })
      );
      mapPlane.rotation.x = -Math.PI / 2;
      mapPlane.position.set(bgSettings.x + bgSettings.width / 2, 0, bgSettings.y + bgSettings.height / 2);
      scene.add(mapPlane);
    }

    // Add items (Terrain Aware)
    items.forEach(item => {
      const itemH = getGridHeight(item.x, item.y);

      if (item.type === "building") {
        const bld = item as BuildingItem;
        const pts = getBuildingPoints(bld);
        const shape = new THREE.Shape(pts.map(p => new THREE.Vector2(p.x, -p.y)));
        const geo = new THREE.ExtrudeGeometry(shape, { depth: 60, bevelEnabled: false });
        geo.rotateX(-Math.PI / 2);
        const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: bld.color, side: THREE.DoubleSide }));
        mesh.position.set(bld.x, itemH, bld.y);
        mesh.rotation.y = -THREE.MathUtils.degToRad(bld.rotation);
        scene.add(mesh);
      }
      if (item.type === "tree") {
        const tree = create3dTree(item as TreeItem);
        tree.position.set(item.x, itemH, item.y); // Ensure tree sits on terrain
        scene.add(tree);
      }
      if (item.type === "parking") {
        const car = create3dCar(item as ParkingItem);
        car.position.set(item.x, itemH, item.y); // Car on terrain
        scene.add(car);
      }
    });

    // Render
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(width, height);

    // Apply PBR Lighting (RoomEnvironment) to fix black models in preview
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment()).texture;

    renderer.render(scene, perspCam);

    // Load background if present
    if (sceneBackgroundImg) {
      new THREE.TextureLoader().load(sceneBackgroundImg, (texture) => {
        scene.background = texture;
        renderer.render(scene, perspCam);
      });
    }

    // 2D overlay - separate div would be better as WebGL + 2D context on same canvas often fails
    // But keeping logic for now
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

    return () => {
      pmremGenerator.dispose(); // Cleanup
      renderer.dispose();

      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) {
            if (Array.isArray(obj.material)) {
              obj.material.forEach((m: THREE.Material) => m.dispose());
            } else {
              (obj.material as THREE.Material).dispose();
            }
          }
        }
      });
    };
  }, [selectedId, items, showCameraPreview, bgSettings, canvasSize, sceneBackgroundImg]);


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
      updateItem(interactionState.itemId, { rotation: angle + 90 });
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
  const floatingPanelRight = isRightPanelOpen ? "right-96" : "right-4";
  const showProjectSettings = rightPanelMode === "project";

  return (
    <div className="relative h-screen bg-zinc-950 font-sans text-slate-200 overflow-hidden w-full selection:bg-indigo-500/30">
      {showExportPanel && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden text-slate-200">
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">Export</p>
                <h2 className="text-lg font-semibold text-slate-200">Export Plan</h2>
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
              <p className="text-xs text-slate-400">Tip: Add views using "Add to Export" buttons, then export a client report.</p>
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
        <div className="absolute left-1/2 bottom-10 -translate-x-1/2 rounded-full bg-emerald-600/90 px-4 py-2 text-xs font-semibold text-white shadow-xl z-50 backdrop-blur-md">
          Click an edge to insert a vertex.
        </div>
      )}
      {/* --- Left Vertical Toolbar --- */}
      <div className="absolute left-4 top-4 bottom-4 w-14 flex flex-col items-center py-4 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 gap-3 ring-1 ring-white/5">
        <div className="flex flex-col gap-2 w-full px-2">
          {[
            { mode: "select", icon: Move, label: "Select" },
            { mode: "add-camera", icon: Camera, label: "Camera" },
            { mode: "add-building", icon: Square, label: "Building" },
            { mode: "add-tree", icon: Trees, label: "Tree" },
            { mode: "add-parking", icon: Car, label: "Parking" },
            { mode: "add-label", icon: Type, label: "Label" }
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
            title="Toggle 3D View"
          >
            <Layers className="w-5 h-5" />
          </button>



          {viewMode === "iso3d" && (
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
                <div className="absolute left-14 top-0 ml-4 w-64 bg-zinc-900/95 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl z-50 animate-in fade-in slide-in-from-left-2 ring-1 ring-white/10">
                  <h3 className="text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
                    <MapIcon className="w-4 h-4 text-emerald-500" />
                    Terrain Tools
                  </h3>

                  <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                    <p className="text-[10px] text-slate-400 mb-3 text-center leading-relaxed">
                      Drag firmly on the terrain to select an area to modify.
                    </p>

                    {terrainSelection ? (
                      <div className="space-y-3 animate-in fade-in slide-in-from-top-1">
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-bold text-slate-400">Presets</label>
                          <div className="flex gap-2">
                            <button onClick={() => { const next = applyRamp('x'); saveHistory(undefined, next); }} className="flex-1 py-1.5 bg-emerald-600/20 hover:bg-emerald-600/40 border border-emerald-500/30 rounded text-xs font-medium text-emerald-300 transition-colors">Ramp X</button>
                            <button onClick={() => { const next = applyRamp('z'); saveHistory(undefined, next); }} className="flex-1 py-1.5 bg-emerald-600/20 hover:bg-emerald-600/40 border border-emerald-500/30 rounded text-xs font-medium text-emerald-300 transition-colors">Ramp Z</button>
                            <button onClick={() => { const next = applySmooth(); saveHistory(undefined, next); }} className="flex-1 py-1.5 bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30 rounded text-xs font-medium text-blue-300 transition-colors">Smooth</button>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button onClick={() => { const next = setSelectionHeight(0); saveHistory(undefined, next); }} className="flex-1 py-1.5 bg-indigo-600/20 hover:bg-indigo-600/40 border border-indigo-500/30 rounded text-xs font-medium text-indigo-300 transition-colors">Flatten (0)</button>
                          <button onClick={() => { const next = setSelectionHeight(40); saveHistory(undefined, next); }} className="flex-1 py-1.5 bg-indigo-600/20 hover:bg-indigo-600/40 border border-indigo-500/30 rounded text-xs font-medium text-indigo-300 transition-colors">Plateau (40)</button>
                        </div>

                        <div className="space-y-1">
                          <div className="flex justify-between text-[10px] uppercase font-bold text-slate-400">
                            <span>Height</span>
                            <span className="text-emerald-400">Level {Math.round(selectionHeight ?? 0)}</span>
                          </div>
                          <input
                            type="range"
                            min="-100" max="200" step="10"
                            value={selectionHeight}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                            onChange={(e) => setSelectionHeight(parseInt(e.target.value))}
                            onPointerDown={(e) => e.stopPropagation()}
                            onPointerUp={(e) => { e.stopPropagation(); saveHistory(undefined, terrainHeights); }}
                          />
                          <div className="flex justify-between text-[9px] text-slate-500 font-medium">
                            <span>-100</span>
                            <span>200</span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-white/5">
                          <p className="text-[9px] text-slate-500 text-center">
                            Changes apply immediately.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="py-4 text-center border-2 border-dashed border-white/10 rounded-lg">
                        <p className="text-xs text-slate-500">No area selected</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-auto flex flex-col gap-2 w-full px-2">
          <button onClick={handleUndo} className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all" title="Undo">
            <Undo className="w-5 h-5" />
          </button>
          <button onClick={handleRedo} className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all" title="Redo">
            <Redo className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* --- Top Header Actions --- */}
      <div className={`absolute top-4 left-24 right-4 ${rightPanelOffset} h-14 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl z-40 flex items-center px-4 justify-between ring-1 ring-white/5 transition-all duration-300`}>
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-bold text-slate-200 tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <Camera className="w-5 h-5" />
            </div>
            {projectName}
          </h1>
          <div className="h-6 w-px bg-white/10 mx-2"></div>

          <div className="flex items-center gap-1">
            <button onClick={handleNewProject} className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors" title="New Project">
              <Plus className="w-5 h-5" />
            </button>
            <button onClick={() => projectInputRef.current?.click()} className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors" title="Load Project">
              <FolderOpen className="w-5 h-5" />
            </button>
            <button onClick={handleSaveProject} className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors" title="Save Project">
              <Save className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Inputs */}
          <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleBackgroundUpload} />
          <input type="file" ref={elementImageInputRef} className="hidden" accept="image/*" onChange={handleElementImageUpload} />
          <input type="file" ref={projectInputRef} className="hidden" accept=".json" onChange={handleLoadProject} />
          <input type="file" ref={bg3dInputRef} className="hidden" accept="image/*,.hdr" onChange={handlePanoramaUpload} />

          <button onClick={() => setViewMode(viewMode === "nvr" ? "plan" : "nvr")} className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-medium transition-all ${viewMode === "nvr" ? "bg-indigo-600 border-indigo-500 text-white shadow-lg" : "bg-white/5 hover:bg-white/10 border-white/5 text-slate-300"}`}>
            <LayoutGrid className="w-4 h-4" />
            <span>NVR</span>
          </button>
          <button
            onClick={() => {
              setRightPanelMode("project");
              setIsRightPanelOpen(true);
            }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium text-slate-300 transition-all"
          >
            <MapIcon className="w-4 h-4" />
            <span>Project</span>
          </button>
          <button onClick={() => fileInputRef.current?.click()} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium text-slate-300 transition-all">
            <Upload className="w-4 h-4" />
            <span>Map</span>
          </button>
          <button onClick={() => elementImageInputRef.current?.click()} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium text-slate-300 transition-all">
            <ImageIcon className="w-4 h-4" />
            <span>Image</span>
          </button>

          <button onClick={addPlanToExportList} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium text-slate-300 transition-all" title="Add Current View">
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Add View</span>
          </button>
          <button onClick={() => setShowExportPanel(true)} className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium shadow-lg shadow-indigo-500/20 transition-all">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* --- Main Workspace --- */}
        <div className={`w-full h-full relative overflow-auto bg-zinc-950 flex items-center justify-center pt-20 pl-24 ${workspaceRightPadding} pb-6 custom-scrollbar`}>
          <div className="shadow-2xl bg-zinc-900 relative ring-1 ring-white/10 rounded-lg overflow-hidden">
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
                      stroke="#333333"
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

                      const labelX = c.labelOffset?.x ?? 0;
                      const labelY = c.labelOffset?.y ?? 30;
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
                                <stop offset="50%" stopColor={c.color} stopOpacity="0.2" />
                                <stop offset="100%" stopColor={c.color} stopOpacity="0" />
                              </radialGradient>
                              <radialGradient id={`grad-blue-stroke-${c.id}`} cx="0" cy="0" r={r} gradientUnits="userSpaceOnUse">
                                <stop offset="80%" stopColor={c.color} stopOpacity="1" />
                                <stop offset="100%" stopColor={c.color} stopOpacity="0" />
                              </radialGradient>

                              {/* Yellow Gradients (Obstructed View) */}
                              <radialGradient id={`grad-yellow-${c.id}`} cx="0" cy="0" r={r} gradientUnits="userSpaceOnUse">
                                <stop offset="50%" stopColor="#fde047" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#fde047" stopOpacity="0" />
                              </radialGradient>
                              <radialGradient id={`grad-yellow-stroke-${c.id}`} cx="0" cy="0" r={r} gradientUnits="userSpaceOnUse">
                                <stop offset="80%" stopColor="#eab308" stopOpacity="1" />
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
                      const labelX = c.labelOffset?.x ?? 0;
                      const labelY = c.labelOffset?.y ?? 30;
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
                </g>
              </svg>
            ) : viewMode === "iso3d" ? (
              <div
                className="relative flex-1"
                style={{ minWidth: canvasSize.width, minHeight: canvasSize.height }}
              >
                <div ref={threeContainerRef} className="absolute inset-0" />
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
                      Export View
                    </button>
                    <button
                      onClick={() => setExportList([...exportList, { id: generateId(), type: '3d', label: '3D View', dataUrl: threeStateRef.current?.renderer.domElement.toDataURL("image/png") || '' }])}
                      className="px-3 py-1 rounded-full border border-white/10 bg-zinc-800/80 text-xs font-semibold text-slate-300 hover:bg-zinc-700 hover:text-white shadow-sm transition-colors"
                    >
                      + Add to Export
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
              <div className="relative bg-zinc-950 flex flex-col overflow-auto" style={{ width: canvasSize.width, height: canvasSize.height }}>
                <div className="w-full h-full p-4 overflow-auto custom-scrollbar">
                  {items.filter(i => i.type === 'camera').length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-slate-500">
                      <LayoutGrid className="w-12 h-12 mb-4 opacity-20" />
                      <p>No cameras found. Add cameras to see NVR view.</p>
                    </div>
                  ) : (
                    <>
                      {/* @ts-ignore */}
                      <GridLayout
                        className="layout"
                        layout={nvrLayout}
                        cols={12}
                        rowHeight={120}
                        width={canvasSize.width - 32}
                        onLayoutChange={onLayoutChange}
                        isDraggable={viewMode === 'nvr'}
                        isResizable={viewMode === 'nvr'}
                        draggableCancel=".no-drag"
                        margin={[16, 16]}
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
                      {maximizedCamId && (
                        <div className="absolute inset-0 z-50 bg-black flex flex-col animate-in fade-in duration-200">
                          {(() => {
                            const cam = items.find(i => i.id === maximizedCamId);
                            if (!cam) return null;
                            return (
                              <>
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
                                    <NVRCard camera={cam as CameraItem} renderFn={renderCameraViewToDataUrl} isMaximized={true} />
                                  </div>
                                </div>
                              </>
                            );
                          })()}
                        </div>
                      )}
                    </>
                  )}
                </div>
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
            <div className="px-3 py-2 bg-white/5 text-xs text-slate-400 flex items-center justify-between border-t border-white/5">
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
                <h2 className="font-bold text-lg text-slate-200 capitalize">Edit {selectedItem.type}</h2>
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
                      <label className="text-xs font-semibold text-slate-400 uppercase">Height</label>
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
                      {(['sedan', 'suv', 'truck', 'sports', 'van', 'motorcycle'] as const).map(type => (
                        <button
                          key={type}
                          onClick={() => updateItem(selectedItem.id, { vehicleType: type })}
                          className={`px-2 py-1.5 text-xs rounded capitalize transition-colors ${((selectedItem as ParkingItem).vehicleType ?? 'sedan') === type
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
                    <span>Vehicle Height</span>
                    <span>{(selectedItem as ParkingItem).vehicleHeight ?? 12} units</span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="range"
                      min="6"
                      max="40"
                      value={(selectedItem as ParkingItem).vehicleHeight ?? 12}
                      onChange={e => updateItem(selectedItem.id, { vehicleHeight: parseInt(e.target.value) })}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 self-center"
                    />
                    <input
                      type="number"
                      min="6"
                      max="40"
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
                <div className={panelSectionLoose}>
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
                      <label className="text-xs font-semibold text-slate-400 uppercase flex justify-between">
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
                  Delete {selectedItem.type}
                </button>
              </div>
            </div>
          ) : showProjectSettings ? (
            <div className="p-6 flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <MapIcon className="w-5 h-5 text-slate-400" />
                  <h2 className="font-bold text-lg text-slate-200">Project Settings</h2>
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
                <label className="text-xs font-semibold text-slate-400 uppercase">Project Name</label>
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
                    { label: "Parking", value: items.filter(item => item.type === "parking").length }
                  ].map(stat => (
                    <div key={stat.label} className="rounded-lg border border-white/10 bg-white/5 p-3">
                      <p className="text-xs uppercase tracking-wide text-slate-400">{stat.label}</p>
                      <p className="text-lg font-semibold text-slate-200">{stat.value}</p>
                    </div>
                  ))}
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
                    min="10"
                    max="80"
                    value={gridSize}
                    onChange={e => setGridSize(parseInt(e.target.value))}
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

                    <div className="flex items-center justify-between">
                      <label className="text-xs text-slate-500">Style</label>
                      <div className="bg-white/5 p-0.5 rounded-lg flex text-[10px] font-medium border border-white/10">
                        <button
                          onClick={() => setFrustumSettings({ ...frustumSettings, mode: 'volume' })}
                          className={`px-2 py-1 rounded transition-colors ${(!frustumSettings.mode || frustumSettings.mode === 'volume') ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-300'}`}
                        >
                          Full
                        </button>
                        <button
                          onClick={() => setFrustumSettings({ ...frustumSettings, mode: 'floor' })}
                          className={`px-2 py-1 rounded transition-colors ${frustumSettings.mode === 'floor' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-300'}`}
                        >
                          Floor
                        </button>
                      </div>
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
                            Export
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
                <p className="text-sm text-slate-400">Select an item to edit its settings or open project settings.</p>
                <button
                  onClick={() => {
                    setRightPanelMode("project");
                    setIsRightPanelOpen(true);
                  }}
                  className="w-full py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium text-slate-200 transition-colors"
                >
                  Open Project Settings
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const NVRCard = ({ camera, renderFn, onMaximize, onExport, isMaximized }: { camera: CameraItem, renderFn: (c: CameraItem) => string, onMaximize?: () => void, onExport?: () => void, isMaximized?: boolean }) => {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const tid = setTimeout(() => {
      setSrc(renderFn(camera));
    }, 10);
    return () => clearTimeout(tid);
  }, [camera, renderFn]);

  const handleDownload = () => {
    if (!src) return;
    const link = document.createElement("a");
    link.href = src;
    link.download = `nvr_snapshot_${camera.label}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`w-full h-full bg-zinc-900/90 backdrop-blur-xl rounded-xl overflow-hidden border border-white/10 relative group shadow-2xl flex flex-col ${isMaximized ? '' : 'hover:ring-1 hover:ring-indigo-500 ring-1 ring-black/50'}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-white/5 shrink-0">
        <div className="flex items-center gap-2">
          <Camera className="w-4 h-4 text-emerald-400" />
          <span className="text-sm font-medium text-slate-200 truncate">{camera.label}</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1.5 bg-red-500/20 px-1.5 py-0.5 rounded border border-red-500/30">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
            <span className="text-[10px] text-red-400 font-bold tracking-tight">LIVE</span>
          </div>
          {!isMaximized && onMaximize && (
            <button
              onClick={(e) => { e.stopPropagation(); onMaximize(); }}
              className="no-drag text-slate-400 hover:text-white p-1 hover:bg-white/10 rounded transition-colors"
              title="Expand View"
              onMouseDown={e => e.stopPropagation()}
            >
              <Maximize className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {/* Camera View */}
      <div className="flex-1 relative overflow-hidden bg-slate-800">
        {src ? (
          <img src={src} className="w-full h-full object-cover select-none" draggable={false} />
        ) : (
          <div className="animate-pulse bg-zinc-800 w-full h-full flex items-center justify-center opacity-50">
            <LayoutGrid className="w-8 h-8" />
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-3 py-2 bg-white/5 text-xs text-slate-400 flex items-center justify-between border-t border-white/5 shrink-0">
        <div className="flex gap-3">
          <span>H-FOV: {(camera.hFov ?? camera.fov).toFixed(0)}°</span>
          <span>V-FOV: {(camera.vFov ?? 45).toFixed(0)}°</span>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); onExport?.(); }}
          className="no-drag px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs rounded flex items-center gap-1 transition-colors"
          onMouseDown={e => e.stopPropagation()}
        >
          <Plus className="w-3 h-3" />
          + Export
        </button>
      </div>
    </div>
  );
};

