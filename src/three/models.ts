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
  `${item.width}|${item.height}|${item.vehicleHeight ?? 5}|${resolveVehicleType(item)}|${item.color}`;

export const getTreeSignature = (item: TreeItem) =>
  `${item.radius}|${item.height ?? 30}|${item.width ?? 1}|${item.treeType ?? 'deciduous'}|${item.color}`;

export const getItemTypeLabel = (type: CanvasItem["type"], plural = false) => {
  if (type === "parking") return plural ? "Vehicles" : "Vehicle";
  if (type === "camera") return plural ? "Cameras" : "Camera";
  if (type === "building") return plural ? "Buildings" : "Building";
  if (type === "tree") return plural ? "Trees" : "Tree";
  if (type === "label") return plural ? "Text" : "Text";
  if (type === "image") return plural ? "Overlays" : "Overlay";
  if (type === "target") return plural ? "Protected spots" : "Protected spot";
  return type;
};

// --- Cars: real-size models built from a side profile per vehicle type ---
// Profiles are [along the car, height] as fractions of length/height; the front is -z (z = -0.5).
type Profile = [number, number][];
const CAR_PROFILES: Record<NonNullable<ParkingItem["vehicleType"]>, { body: Profile; glass: Profile }> = {
  sedan: {
    body: [[-0.5, 0.2], [-0.5, 0.42], [-0.46, 0.5], [-0.2, 0.56], [-0.06, 0.95], [0.2, 1], [0.34, 0.62], [0.47, 0.58], [0.5, 0.45], [0.5, 0.2]],
    glass: [[-0.18, 0.6], [-0.055, 0.91], [0.19, 0.95], [0.31, 0.64]]
  },
  hatchback: {
    body: [[-0.5, 0.2], [-0.5, 0.42], [-0.46, 0.52], [-0.22, 0.58], [-0.08, 0.95], [0.32, 0.98], [0.48, 0.62], [0.5, 0.45], [0.5, 0.2]],
    glass: [[-0.2, 0.62], [-0.075, 0.91], [0.31, 0.93], [0.45, 0.64]]
  },
  suv: {
    body: [[-0.5, 0.22], [-0.5, 0.5], [-0.46, 0.58], [-0.26, 0.63], [-0.13, 0.97], [0.45, 1], [0.5, 0.92], [0.5, 0.22]],
    glass: [[-0.24, 0.66], [-0.125, 0.93], [0.43, 0.95], [0.48, 0.66]]
  },
  van: {
    body: [[-0.5, 0.2], [-0.5, 0.48], [-0.44, 0.58], [-0.34, 0.62], [-0.26, 0.97], [0.48, 1], [0.5, 0.95], [0.5, 0.2]],
    glass: [[-0.32, 0.64], [-0.255, 0.93], [-0.02, 0.94], [-0.02, 0.64]]
  },
  truck: {
    body: [[-0.5, 0.22], [-0.5, 0.52], [-0.45, 0.6], [-0.18, 0.64], [-0.07, 0.98], [0.12, 1], [0.15, 0.64], [0.5, 0.64], [0.5, 0.22]],
    glass: [[-0.16, 0.67], [-0.065, 0.94], [0.11, 0.95], [0.13, 0.67]]
  },
  sports: {
    body: [[-0.5, 0.2], [-0.5, 0.38], [-0.44, 0.46], [-0.16, 0.52], [0, 0.94], [0.14, 0.96], [0.46, 0.58], [0.5, 0.48], [0.5, 0.2]],
    glass: [[-0.14, 0.56], [0, 0.9], [0.13, 0.91], [0.4, 0.6]]
  }
};

const profileGeometry = (profile: Profile, length: number, height: number, width: number, bevel: number) => {
  // Shape in (z, y), extruded along x, then centered on x.
  const shape = new THREE.Shape(profile.map(([z, y]) => new THREE.Vector2(z * length, y * height)));
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: Math.max(0.01, width - bevel * 2),
    bevelEnabled: bevel > 0,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelSegments: 3,
    curveSegments: 4
  });
  // ExtrudeGeometry extrudes along +z: map shape (x=z, y) -> world (z, y) and extrusion -> x.
  geo.rotateY(-Math.PI / 2);
  geo.translate((width - bevel * 2) / 2, 0, 0);
  geo.computeVertexNormals();
  return geo;
};

/** A real-size car (width x length x height in plan units) of the item's vehicle type. */
export const create3dCar = (item: ParkingItem): THREE.Group => {
  const group = new THREE.Group();
  const width = Math.max(item.width, 0.5);
  const length = Math.max(item.height, 1);
  const height = Math.max(item.vehicleHeight ?? width * 0.8, 0.5);
  const type = resolveVehicleType(item) ?? "sedan";
  const profile = CAR_PROFILES[type];

  const paint = new THREE.MeshStandardMaterial({ color: item.color, metalness: 0.45, roughness: 0.32 });
  const glass = new THREE.MeshStandardMaterial({ color: "#16202e", metalness: 0.7, roughness: 0.12 });
  const rubber = new THREE.MeshStandardMaterial({ color: "#121417", roughness: 0.9 });
  const rimMat = new THREE.MeshStandardMaterial({ color: "#b8bec7", metalness: 0.8, roughness: 0.3 });
  const trimMat = new THREE.MeshStandardMaterial({ color: "#1f2328", roughness: 0.7 });

  const bevel = Math.min(width, height) * 0.06;
  const body = new THREE.Mesh(profileGeometry(profile.body, length, height, width, bevel), paint);
  body.castShadow = true;
  body.receiveShadow = true;
  group.add(body);

  // Glass: the cabin windows as a slightly larger, slightly wider prism so it shows on all sides.
  const glassProfile: Profile = profile.glass.map(([z, y]) => [z, y]);
  const cz = glassProfile.reduce((s, p) => s + p[0], 0) / glassProfile.length;
  const cy = glassProfile.reduce((s, p) => s + p[1], 0) / glassProfile.length;
  const grown: Profile = glassProfile.map(([z, y]) => [cz + (z - cz) * 1.03, cy + (y - cy) * 1.03]);
  const windows = new THREE.Mesh(profileGeometry(grown, length, height, width * 1.012, 0), glass);
  group.add(windows);
  // Side pillars between front and rear windows (sedans/hatchbacks/SUVs) read better with a B-pillar.
  if (type !== "van" && type !== "truck") {
    const pillarZ = (profile.glass[1][0] + profile.glass[2][0]) / 2 * length;
    const pillar = new THREE.Mesh(new THREE.BoxGeometry(width * 1.02, height * 0.32, length * 0.025), paint);
    pillar.position.set(0, height * 0.78, pillarZ);
    group.add(pillar);
  }

  // Wheels
  const wheelR = height * 0.21;
  const wheelW = width * 0.13;
  const tireGeo = new THREE.CylinderGeometry(wheelR, wheelR, wheelW, 20);
  tireGeo.rotateZ(Math.PI / 2);
  const rimGeo = new THREE.CylinderGeometry(wheelR * 0.6, wheelR * 0.6, wheelW * 1.04, 14);
  rimGeo.rotateZ(Math.PI / 2);
  const axleZ = length * (type === "van" ? 0.34 : 0.31);
  [-1, 1].forEach(sx => [-1, 1].forEach(sz => {
    const x = sx * (width / 2 - wheelW * 0.42);
    const tire = new THREE.Mesh(tireGeo, rubber);
    tire.position.set(x, wheelR, sz * axleZ);
    tire.castShadow = true;
    group.add(tire);
    const rim = new THREE.Mesh(rimGeo, rimMat);
    rim.position.copy(tire.position);
    group.add(rim);
  }));

  // Lights and bumpers
  const lightGeo = new THREE.BoxGeometry(width * 0.2, height * 0.07, length * 0.012);
  const head = new THREE.MeshStandardMaterial({ color: "#fff7d6", emissive: "#fff2b3", emissiveIntensity: 0.6 });
  const tail = new THREE.MeshStandardMaterial({ color: "#d81b1b", emissive: "#a30d0d", emissiveIntensity: 0.5 });
  const frontY = profile.body[1][1] * height * 0.92;
  const rearY = profile.body[profile.body.length - 2][1] * height * 0.85;
  [-1, 1].forEach(sx => {
    const h = new THREE.Mesh(lightGeo, head);
    h.position.set(sx * width * 0.3, frontY, -length / 2 - length * 0.003);
    group.add(h);
    const t = new THREE.Mesh(lightGeo, tail);
    t.position.set(sx * width * 0.3, rearY, length / 2 + length * 0.003);
    group.add(t);
  });
  const bumperGeo = new THREE.BoxGeometry(width * 0.96, height * 0.1, length * 0.03);
  const fb = new THREE.Mesh(bumperGeo, trimMat);
  fb.position.set(0, height * 0.24, -length / 2 + length * 0.01);
  group.add(fb);
  const rb = new THREE.Mesh(bumperGeo, trimMat);
  rb.position.set(0, height * 0.24, length / 2 - length * 0.01);
  group.add(rb);

  group.position.set(item.x, 0, item.y);
  group.rotation.y = -THREE.MathUtils.degToRad(item.rotation);
  return group;
};

export const create3dTree = (item: TreeItem): THREE.Group => {
  const group = new THREE.Group();

  // Get tree properties with defaults
  const treeHeight = item.height ?? 30;
  const widthMultiplier = item.width ?? 1;
  const treeType = item.treeType ?? 'deciduous';

  const trunkColor = '#4a3728';
  const trunkMat = new THREE.MeshStandardMaterial({ color: trunkColor, roughness: 1.0, flatShading: true });

  // Deterministic per-tree variation
  const seed = item.id.split('').reduce((acc, ch) => (acc * 31 + ch.charCodeAt(0)) >>> 0, 7);
  const rand = (i: number) => {
    const x = Math.sin(seed * 0.0001 + i * 12.9898) * 43758.5453;
    return x - Math.floor(x);
  };
  // Real trunks are ~1 ft across for a yard tree, not a fifth of the canopy.
  const trunkRadiusFor = (canopyR: number) => clamp(canopyR * 0.055, 0.25, 1.4);
  const shades = (base: string) => [-0.12, 0, 0.1].map(d => {
    const c = new THREE.Color(base);
    const hsl = { h: 0, s: 0, l: 0 };
    c.getHSL(hsl);
    c.setHSL(hsl.h, hsl.s, clamp(hsl.l + d, 0.05, 0.8));
    return new THREE.MeshStandardMaterial({ color: c, roughness: 0.9 });
  });

  if (treeType === 'conifer') {
    // Conifer: slim trunk, stacked tapering cones from low branches to a pointed top.
    const canopyR = item.radius * widthMultiplier;
    const trunkR = trunkRadiusFor(canopyR);
    const trunkH = treeHeight * 0.2;
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(trunkR * 0.7, trunkR, trunkH + treeHeight * 0.3, 8), trunkMat);
    trunk.position.y = (trunkH + treeHeight * 0.3) / 2;
    trunk.castShadow = true;
    group.add(trunk);

    const mats = shades(item.color);
    const layers = 6;
    const span = treeHeight - trunkH;
    for (let i = 0; i < layers; i++) {
      const t = i / layers;
      const r = canopyR * (1 - t * 0.85) * (0.92 + rand(i) * 0.16);
      const h = (span / layers) * 1.9;
      const cone = new THREE.Mesh(new THREE.ConeGeometry(r, h, 12), mats[i % mats.length]);
      cone.position.y = trunkH + t * span + h / 2 - (span / layers) * 0.35;
      cone.rotation.y = rand(i + 10) * Math.PI;
      cone.castShadow = true;
      cone.receiveShadow = true;
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
    // Deciduous (default): trunk to about a third of the height, then a full rounded canopy of
    // overlapping leaf clusters filling the rest, in a few shades so it reads as foliage.
    const canopyR = item.radius * widthMultiplier;
    const trunkR = trunkRadiusFor(canopyR);
    const canopyBottom = treeHeight * 0.32;
    const canopyH = treeHeight - canopyBottom;
    const centerY = canopyBottom + canopyH / 2;
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(trunkR * 0.65, trunkR, centerY, 8), trunkMat);
    trunk.position.y = centerY / 2;
    trunk.castShadow = true;
    group.add(trunk);

    const mats = shades(item.color);
    // Core volume
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 2), mats[1]);
    core.scale.set(canopyR * 0.82, canopyH * 0.42, canopyR * 0.82);
    core.position.y = centerY;
    core.castShadow = true;
    core.receiveShadow = true;
    group.add(core);
    // Leaf clusters around the surface (more and smaller toward the top)
    const clusters = 14;
    for (let i = 0; i < clusters; i++) {
      const theta = rand(i) * Math.PI * 2;
      const up = rand(i + 50) * 2 - 1; // -1 bottom .. 1 top
      const ring = Math.sqrt(Math.max(0, 1 - up * up));
      const size = canopyR * (0.32 + rand(i + 100) * 0.18) * (up > 0.4 ? 0.85 : 1);
      const blob = new THREE.Mesh(new THREE.IcosahedronGeometry(size, 1), mats[up > 0.3 ? 2 : up < -0.3 ? 0 : 1]);
      blob.position.set(
        Math.cos(theta) * ring * canopyR * 0.72,
        centerY + up * canopyH * 0.36,
        Math.sin(theta) * ring * canopyR * 0.72
      );
      blob.scale.y = 0.85;
      blob.castShadow = true;
      blob.receiveShadow = true;
      group.add(blob);
    }
  }

  group.position.set(item.x, 0, item.y);
  group.rotation.y = -THREE.MathUtils.degToRad(item.rotation);
  return group;
};
