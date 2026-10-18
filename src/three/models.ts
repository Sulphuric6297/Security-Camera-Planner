import * as THREE from "three";
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { Camera, Trees } from "lucide-react";
import { clamp } from "../constants";
import { CanvasItem, ParkingItem, TreeItem } from "../types";


export const resolveVehicleType = (item: ParkingItem): ParkingItem['vehicleType'] => {
  const rawType = (item as unknown as { vehicleType?: string }).vehicleType;
  if (rawType) {
    if (rawType === 'motorcycle') return 'hatchback';
    if (['sedan', 'suv', 'truck', 'sports', 'van', 'hatchback'].includes(rawType)) {
      return rawType as ParkingItem['vehicleType'];
    }
  }
  const hash = item.id.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
  return ['sedan', 'suv', 'truck', 'sports', 'van', 'hatchback'][hash % 6] as ParkingItem['vehicleType'];
};

export const getCarSignature = (item: ParkingItem) =>
  `${item.width}|${item.height}|${item.vehicleHeight ?? 12}|${resolveVehicleType(item)}|${item.color}`;

export const getTreeSignature = (item: TreeItem) =>
  `${item.radius}|${item.height ?? 30}|${item.width ?? 1}|${item.treeType ?? 'deciduous'}|${item.color}`;

export const getItemTypeLabel = (type: CanvasItem["type"], plural = false) => {
  if (type === "parking") return plural ? "Vehicles" : "Vehicle";
  if (type === "camera") return plural ? "Cameras" : "Camera";
  if (type === "building") return plural ? "Buildings" : "Building";
  if (type === "tree") return plural ? "Trees" : "Tree";
  if (type === "label") return plural ? "Text" : "Text";
  if (type === "image") return plural ? "Overlays" : "Overlay";
  return type;
};

// Create a detailed 3D car model with variations
export const create3dCar = (item: ParkingItem): THREE.Group => {
  const group = new THREE.Group();
  const bodyGroup = new THREE.Group();
  const shellGroup = new THREE.Group();
  const detailGroup = new THREE.Group();
  bodyGroup.add(shellGroup);
  bodyGroup.add(detailGroup);
  group.add(bodyGroup);
  const width = Math.max(item.width, 8);
  const length = Math.max(item.height, 16);
  const carHeight = Math.max(item.vehicleHeight ?? 12, 6);
  const wheelRadius = clamp(Math.min(width, length) * 0.15, 2.2, carHeight * 0.38);
  const wheelWidth = clamp(width * 0.2, 1.8, 5.5);
  const color = item.color;

  const vehicleType = resolveVehicleType(item);

  const baseColor = new THREE.Color(color);
  const roofColor = baseColor.clone().lerp(new THREE.Color('#ffffff'), 0.14);
  const accentColor = baseColor.clone().lerp(new THREE.Color('#000000'), 0.28);

  const chassisMat = new THREE.MeshStandardMaterial({ color: baseColor, roughness: 0.32, metalness: 0.3 });
  const roofMat = new THREE.MeshStandardMaterial({ color: roofColor, roughness: 0.28, metalness: 0.25 });
  const accentMat = new THREE.MeshStandardMaterial({ color: accentColor, roughness: 0.6, metalness: 0.15 });
  const glassMat = new THREE.MeshStandardMaterial({
    color: '#0f172a',
    roughness: 0.05,
    metalness: 0.9,
    transparent: true,
    opacity: 0.55,
    side: THREE.DoubleSide
  });
  const wheelMat = new THREE.MeshStandardMaterial({ color: '#111827', roughness: 0.75 });
  const trimMat = new THREE.MeshStandardMaterial({ color: '#374151', roughness: 0.6, metalness: 0.25 });
  const hubMat = new THREE.MeshStandardMaterial({ color: '#9ca3af', metalness: 0.7, roughness: 0.3 });
  const bumperMat = new THREE.MeshStandardMaterial({ color: '#1f2937', roughness: 0.8, metalness: 0.15 });
  const lightMat = new THREE.MeshStandardMaterial({ color: '#fef3c7', emissive: '#fef3c7', emissiveIntensity: 0.6 });
  const tailMat = new THREE.MeshStandardMaterial({ color: '#ef4444', emissive: '#ef4444', emissiveIntensity: 0.55 });

  const roundedBox = (w: number, h: number, d: number, radius = 0.6, segments = 2) => {
    const safeRadius = clamp(radius, 0.05, Math.min(w, h, d) * 0.45);
    return new RoundedBoxGeometry(w, h, d, segments, safeRadius);
  };

  const addRounded = (
    w: number,
    h: number,
    d: number,
    x: number,
    y: number,
    z: number,
    mat = chassisMat,
    r = 0.6,
    parent: THREE.Object3D = shellGroup
  ) => {
    const mesh = new THREE.Mesh(roundedBox(w, h, d, r), mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    parent.add(mesh);
    return mesh;
  };

  const addBox = (
    w: number,
    h: number,
    d: number,
    x: number,
    y: number,
    z: number,
    mat = trimMat,
    parent: THREE.Object3D = shellGroup
  ) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    parent.add(mesh);
    return mesh;
  };

  // --- Wheel Setup ---
  const wheelGeo = new THREE.CylinderGeometry(wheelRadius, wheelRadius, wheelWidth, 18);
  wheelGeo.rotateZ(Math.PI / 2);
  const rimGeo = new THREE.CylinderGeometry(wheelRadius * 0.65, wheelRadius * 0.65, wheelWidth * 0.55, 12);
  rimGeo.rotateZ(Math.PI / 2);
  const hubGeo = new THREE.CylinderGeometry(wheelRadius * 0.28, wheelRadius * 0.28, wheelWidth * 0.7, 10);
  hubGeo.rotateZ(Math.PI / 2);
  const wheelZ = length * 0.34;
  const wheelX = width * 0.5 - wheelWidth * 0.6;

  const addWheelAt = (x: number, z: number) => {
    const tire = new THREE.Mesh(wheelGeo, wheelMat);
    tire.position.set(x, wheelRadius, z);
    tire.castShadow = true;
    group.add(tire);

    const rim = new THREE.Mesh(rimGeo, trimMat);
    rim.position.copy(tire.position);
    rim.castShadow = true;
    group.add(rim);

    const hub = new THREE.Mesh(hubGeo, hubMat);
    hub.position.copy(tire.position);
    hub.castShadow = true;
    group.add(hub);
  };

  const addWheels = (fourWheels = true) => {
    if (fourWheels) {
      [-1, 1].forEach(kx => {
        [-1, 1].forEach(kz => addWheelAt(kx * wheelX, kz * wheelZ));
      });
    } else {
      [-1, 1].forEach(kz => addWheelAt(0, kz * wheelZ));
    }
  };

  const yBase = wheelRadius + 0.6;
  const baseRadius = Math.min(width, carHeight, length) * 0.08;

  const addGlassPlane = (w: number, h: number, x: number, y: number, z: number, rx = 0, ry = 0, rz = 0) => {
    const pane = new THREE.Mesh(new THREE.PlaneGeometry(w, h), glassMat);
    pane.position.set(x, y, z);
    pane.rotation.set(rx, ry, rz);
    pane.castShadow = true;
    shellGroup.add(pane);
    return pane;
  };

  const addFenders = () => {
    const fenderW = width * 0.22;
    const fenderH = carHeight * 0.2;
    const fenderL = length * 0.14;
    const y = yBase + carHeight * 0.18;
    const x = width * 0.37;
    const z = length * 0.32;
    [-1, 1].forEach(kx => {
      [-1, 1].forEach(kz => {
        addRounded(fenderW, fenderH, fenderL, kx * x, y, kz * z, accentMat, baseRadius * 0.6, detailGroup);
      });
    });
  };

  // --- Body Construction ---
  // yBase/baseRadius defined above for helper access

  if (vehicleType === 'suv') {
    addWheels();
    const bodyH = carHeight * 0.52;
    const bodyL = length * 0.74;
    const bodyW = width * 0.96;
    addRounded(bodyW, bodyH, bodyL, 0, yBase + bodyH / 2, 0, chassisMat, baseRadius);
    addRounded(bodyW * 0.6, bodyH * 0.12, bodyL * 0.5, 0, yBase + bodyH * 0.75, 0, roofMat, baseRadius * 0.5);

    const cabinH = carHeight * 0.52;
    const cabinL = length * 0.5;
    const cabinW = width * 0.86;
    const cabin = addRounded(cabinW, cabinH, cabinL, 0, yBase + bodyH + cabinH / 2 - 0.4, -length * 0.04, roofMat, baseRadius * 0.9);

    addRounded(cabinW * 0.98, cabinH * 0.68, cabinL * 0.86, 0, cabin.position.y + cabinH * 0.02, cabin.position.z, glassMat, baseRadius * 0.6);
    addRounded(cabinW * 0.7, cabinH * 0.14, cabinL * 0.6, 0, cabin.position.y + cabinH * 0.32, cabin.position.z, roofMat, baseRadius * 0.5);
    addGlassPlane(cabinW * 0.78, cabinH * 0.55, 0, cabin.position.y + cabinH * 0.1, cabin.position.z - cabinL * 0.48, -0.38);
    addGlassPlane(cabinW * 0.72, cabinH * 0.5, 0, cabin.position.y + cabinH * 0.12, cabin.position.z + cabinL * 0.48, 0.3);
    addGlassPlane(cabinL * 0.62, cabinH * 0.45, cabinW * 0.52, cabin.position.y + cabinH * 0.06, cabin.position.z, 0, Math.PI / 2);
    addGlassPlane(cabinL * 0.62, cabinH * 0.45, -cabinW * 0.52, cabin.position.y + cabinH * 0.06, cabin.position.z, 0, -Math.PI / 2);
    addBox(bodyW * 0.92, carHeight * 0.12, length * 0.08, 0, yBase + carHeight * 0.2, -length * 0.43, bumperMat, detailGroup);
    addBox(bodyW * 0.85, carHeight * 0.1, length * 0.05, 0, yBase + carHeight * 0.2, length * 0.44, bumperMat, detailGroup);
    addFenders();

  } else if (vehicleType === 'truck') {
    addWheels();
    const baseH = carHeight * 0.36;
    const baseL = length * 0.82;
    const baseW = width * 0.96;
    addRounded(baseW, baseH, baseL, 0, yBase + baseH / 2, 0, chassisMat, baseRadius);

    const cabL = length * 0.36;
    const cabH = carHeight * 0.75;
    const cabW = width * 0.88;
    const cab = addRounded(cabW, cabH, cabL, 0, yBase + baseH + cabH / 2 - 0.4, -length * 0.26, roofMat, baseRadius * 0.8);

    addRounded(cabW * 0.95, cabH * 0.48, cabL * 0.6, 0, cab.position.y + cabH * 0.05, cab.position.z, glassMat, baseRadius * 0.5);
    addRounded(cabW * 0.65, cabH * 0.14, cabL * 0.5, 0, cab.position.y + cabH * 0.3, cab.position.z, roofMat, baseRadius * 0.4);
    addGlassPlane(cabW * 0.75, cabH * 0.5, 0, cab.position.y + cabH * 0.08, cab.position.z - cabL * 0.45, -0.35);
    addGlassPlane(cabL * 0.5, cabH * 0.42, cabW * 0.52, cab.position.y + cabH * 0.02, cab.position.z - cabL * 0.05, 0, Math.PI / 2);
    addGlassPlane(cabL * 0.5, cabH * 0.42, -cabW * 0.52, cab.position.y + cabH * 0.02, cab.position.z - cabL * 0.05, 0, -Math.PI / 2);

    const bedL = length * 0.48;
    const bedH = carHeight * 0.22;
    addRounded(baseW * 0.92, bedH, bedL, 0, yBase + baseH + bedH / 2 - 0.2, length * 0.2, chassisMat, baseRadius * 0.6);
    addBox(baseW * 0.9, bedH * 0.6, bedL * 0.05, 0, yBase + baseH + bedH * 0.55, length * 0.44, bumperMat, detailGroup);
    addFenders();

  } else if (vehicleType === 'sports') {
    addWheels();
    const bodyH = carHeight * 0.28;
    const bodyL = length * 0.78;
    const bodyW = width * 0.95;
    addRounded(bodyW, bodyH, bodyL, 0, yBase + bodyH / 2, 0, chassisMat, baseRadius * 0.7);

    const cabinH = carHeight * 0.28;
    const cabinL = length * 0.36;
    const cabinW = width * 0.72;
    const cabin = addRounded(cabinW, cabinH, cabinL, 0, yBase + bodyH + cabinH / 2 - 0.2, -length * 0.08, roofMat, baseRadius * 0.6);
    addRounded(cabinW * 0.98, cabinH * 0.75, cabinL * 0.88, 0, cabin.position.y + cabinH * 0.05, cabin.position.z, glassMat, baseRadius * 0.4);
    addGlassPlane(cabinW * 0.7, cabinH * 0.5, 0, cabin.position.y + cabinH * 0.05, cabin.position.z - cabinL * 0.45, -0.4);
    addGlassPlane(cabinL * 0.5, cabinH * 0.4, cabinW * 0.48, cabin.position.y + cabinH * 0.02, cabin.position.z, 0, Math.PI / 2);
    addGlassPlane(cabinL * 0.5, cabinH * 0.4, -cabinW * 0.48, cabin.position.y + cabinH * 0.02, cabin.position.z, 0, -Math.PI / 2);

    addBox(bodyW * 0.6, carHeight * 0.08, length * 0.04, 0, yBase + bodyH + cabinH * 0.9, length * 0.34, trimMat, detailGroup);
    addFenders();

  } else if (vehicleType === 'van') {
    addWheels();
    const bodyH = carHeight * 0.72;
    const bodyL = length * 0.82;
    const bodyW = width * 0.96;
    addRounded(bodyW, bodyH, bodyL, 0, yBase + bodyH / 2, 0, chassisMat, baseRadius);

    // Front windshield and side windows
    const glassH = bodyH * 0.48;
    const glassW = bodyW * 0.86;
    const glass = new THREE.Mesh(new THREE.PlaneGeometry(glassW, glassH), glassMat);
    glass.position.set(0, yBase + bodyH * 0.72, -length * 0.4);
    glass.rotation.x = -Math.PI * 0.2;
    glass.castShadow = true;
    shellGroup.add(glass);

    addRounded(bodyW * 0.96, bodyH * 0.38, bodyL * 0.55, 0, yBase + bodyH * 0.62, length * 0.02, glassMat, baseRadius * 0.5);
    addFenders();

  } else if (vehicleType === 'hatchback') {
    addWheels();
    const bodyH = carHeight * 0.34;
    const bodyL = length * 0.7;
    const bodyW = width * 0.94;
    addRounded(bodyW, bodyH, bodyL, 0, yBase + bodyH / 2, 0, chassisMat, baseRadius * 0.8);

    const cabinH = carHeight * 0.5;
    const cabinL = length * 0.55;
    const cabinW = width * 0.8;
    const cabin = addRounded(cabinW, cabinH, cabinL, 0, yBase + bodyH + cabinH / 2 - 0.25, -length * 0.02, roofMat, baseRadius * 0.65);
    addRounded(cabinW * 0.98, cabinH * 0.7, cabinL * 0.9, 0, cabin.position.y + cabinH * 0.04, cabin.position.z, glassMat, baseRadius * 0.4);
    addGlassPlane(cabinW * 0.7, cabinH * 0.55, 0, cabin.position.y + cabinH * 0.08, cabin.position.z - cabinL * 0.48, -0.38);
    addGlassPlane(cabinW * 0.62, cabinH * 0.5, 0, cabin.position.y + cabinH * 0.1, cabin.position.z + cabinL * 0.46, 0.45);
    addGlassPlane(cabinL * 0.6, cabinH * 0.45, cabinW * 0.52, cabin.position.y + cabinH * 0.05, cabin.position.z, 0, Math.PI / 2);
    addGlassPlane(cabinL * 0.6, cabinH * 0.45, -cabinW * 0.52, cabin.position.y + cabinH * 0.05, cabin.position.z, 0, -Math.PI / 2);
    addRounded(cabinW * 0.6, cabinH * 0.12, cabinL * 0.5, 0, cabin.position.y + cabinH * 0.32, cabin.position.z + cabinL * 0.08, roofMat, baseRadius * 0.4);
    addBox(bodyW * 0.7, carHeight * 0.08, length * 0.04, 0, yBase + bodyH + cabinH * 0.88, length * 0.34, trimMat, detailGroup);
    addFenders();

  } else { // Sedan (Default)
    addWheels();
    const bodyH = carHeight * 0.34;
    const bodyL = length * 0.72;
    const bodyW = width * 0.95;
    addRounded(bodyW, bodyH, bodyL, 0, yBase + bodyH / 2, 0, chassisMat, baseRadius * 0.9);

    const hoodL = length * 0.24;
    addRounded(bodyW * 0.9, carHeight * 0.2, hoodL, 0, yBase + carHeight * 0.12, -length * 0.42, chassisMat, baseRadius * 0.6);
    addRounded(bodyW * 0.9, carHeight * 0.18, length * 0.18, 0, yBase + carHeight * 0.12, length * 0.4, chassisMat, baseRadius * 0.5);

    const cabinH = carHeight * 0.42;
    const cabinL = length * 0.42;
    const cabinW = width * 0.78;
    const cabin = addRounded(cabinW, cabinH, cabinL, 0, yBase + bodyH + cabinH / 2 - 0.35, -length * 0.06, roofMat, baseRadius * 0.7);
    addRounded(cabinW * 0.98, cabinH * 0.7, cabinL * 0.85, 0, cabin.position.y + cabinH * 0.03, cabin.position.z, glassMat, baseRadius * 0.4);
    addRounded(cabinW * 0.7, cabinH * 0.12, cabinL * 0.55, 0, cabin.position.y + cabinH * 0.3, cabin.position.z, roofMat, baseRadius * 0.4);
    addGlassPlane(cabinW * 0.72, cabinH * 0.52, 0, cabin.position.y + cabinH * 0.06, cabin.position.z - cabinL * 0.45, -0.36);
    addGlassPlane(cabinW * 0.6, cabinH * 0.45, 0, cabin.position.y + cabinH * 0.1, cabin.position.z + cabinL * 0.45, 0.28);
    addGlassPlane(cabinL * 0.58, cabinH * 0.42, cabinW * 0.52, cabin.position.y + cabinH * 0.03, cabin.position.z, 0, Math.PI / 2);
    addGlassPlane(cabinL * 0.58, cabinH * 0.42, -cabinW * 0.52, cabin.position.y + cabinH * 0.03, cabin.position.z, 0, -Math.PI / 2);
    addFenders();
  }

  // Mirrors + skirts
  addBox(width * 0.12, carHeight * 0.08, length * 0.05, width * 0.47, yBase + carHeight * 0.45, -length * 0.14, trimMat, detailGroup);
  addBox(width * 0.12, carHeight * 0.08, length * 0.05, -width * 0.47, yBase + carHeight * 0.45, -length * 0.14, trimMat, detailGroup);
  addBox(width * 0.9, carHeight * 0.06, length * 0.78, 0, yBase + carHeight * 0.08, 0, accentMat, detailGroup);
  addBox(width * 0.86, carHeight * 0.08, length * 0.75, 0, yBase + carHeight * 0.03, 0, bumperMat, detailGroup);

  // Headlights / taillights
  {
    const lightW = Math.max(2, width * 0.1);
    const lightH = Math.max(1.4, carHeight * 0.12);
    const lightD = Math.max(0.6, length * 0.02);
    const lightGeo = new THREE.BoxGeometry(lightW, lightH, lightD);

    shellGroup.updateMatrixWorld(true);
    const bodyBounds = new THREE.Box3().setFromObject(shellGroup);
    const bodyCenter = new THREE.Vector3();
    bodyBounds.getCenter(bodyCenter);
    const bodyWidth = Math.max(0.1, bodyBounds.max.x - bodyBounds.min.x);
    const bodyHeight = Math.max(0.1, bodyBounds.max.y - bodyBounds.min.y);

    const zFront = bodyBounds.min.z - lightD * 0.15;
    const zBack = bodyBounds.max.z + lightD * 0.15;
    const yLight = bodyBounds.min.y + bodyHeight * 0.4;
    const xLight = clamp(bodyWidth * 0.3, lightW * 0.6, bodyWidth * 0.45);

    const fl1 = new THREE.Mesh(lightGeo, lightMat); fl1.position.set(bodyCenter.x - xLight, yLight, zFront); detailGroup.add(fl1);
    const fl2 = new THREE.Mesh(lightGeo, lightMat); fl2.position.set(bodyCenter.x + xLight, yLight, zFront); detailGroup.add(fl2);
    const tl1 = new THREE.Mesh(lightGeo, tailMat); tl1.position.set(bodyCenter.x - xLight, yLight, zBack); detailGroup.add(tl1);
    const tl2 = new THREE.Mesh(lightGeo, tailMat); tl2.position.set(bodyCenter.x + xLight, yLight, zBack); detailGroup.add(tl2);

    addBox(width * 0.26, carHeight * 0.08, length * 0.02, 0, yBase + carHeight * 0.22, -length * 0.48, new THREE.MeshStandardMaterial({ color: '#111827', roughness: 0.8 }), detailGroup);
  }

  group.position.set(item.x, 0, item.y);
  group.rotation.y = -THREE.MathUtils.degToRad(item.rotation);

  return group;
};

// Create a detailed 3D tree model
// Create a detailed 3D tree model with multiple styles
export const create3dTree = (item: TreeItem): THREE.Group => {
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
  group.rotation.y = -THREE.MathUtils.degToRad(item.rotation);
  return group;
};
