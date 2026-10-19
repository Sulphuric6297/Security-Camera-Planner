// A building as a 3D model: walls, a real roof (flat, gable or hip) and crisp outlines.
// Roofs are a solid color by default; the aerial photo can be shown on them instead (an option,
// since the photo makes buildings hard to read in 3D).
import * as THREE from "three";
import { DEFAULT_BUILDING } from "../constants";
import type { BuildingItem } from "../types";
import { buildingLocalPoints } from "../lib/planGeom";
import { applyPhotoUVs, buildRoof, buildWalls, chooseRoof, type PhotoRect } from "./buildings";

export type RoofPhoto = { texture: THREE.Texture; rect: PhotoRect } | null;

const mix = (a: string, b: string, t: number) => new THREE.Color(a).lerp(new THREE.Color(b), t);

/** Walls get slightly darker toward the ground, which reads as soft contact shadow. */
const shadeWalls = (geo: THREE.BufferGeometry, height: number) => {
  const pos = geo.getAttribute("position");
  const colors = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const t = Math.min(1, Math.max(0, pos.getY(i) / Math.max(height, 1e-6)));
    const k = 0.78 + 0.22 * Math.sqrt(t);
    colors[i * 3] = colors[i * 3 + 1] = colors[i * 3 + 2] = k;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
};

export const buildingRoofKind = (b: BuildingItem, unitsPerFoot = 1) => {
  const h = b.wallHeight ?? DEFAULT_BUILDING.wallHeight * unitsPerFoot;
  return !b.roofType || b.roofType === "auto" ? chooseRoof(buildingLocalPoints(b), h, unitsPerFoot) : b.roofType;
};

/**
 * Model in plan units, positioned at the building (base at `baseHeight`). Children carry
 * `userData.itemId` for picking; the roof is named "building-roof".
 */
export const createBuildingModel = (b: BuildingItem, baseHeight: number, opts: { unitsPerFoot?: number; photo?: RoofPhoto; outlines?: boolean } = {}) => {
  const upf = opts.unitsPerFoot ?? 1;
  const pts = buildingLocalPoints(b);
  const wallHeight = b.wallHeight ?? DEFAULT_BUILDING.wallHeight * upf;
  const group = new THREE.Group();
  group.position.set(b.x, baseHeight, b.y);
  group.rotation.y = -THREE.MathUtils.degToRad(b.rotation);
  group.userData.itemId = b.id;

  const wallGeo = buildWalls(pts, wallHeight);
  shadeWalls(wallGeo, wallHeight);
  const walls = new THREE.Mesh(wallGeo, new THREE.MeshStandardMaterial({ color: b.color, roughness: 0.92, metalness: 0, vertexColors: true }));
  walls.name = "building-walls";
  walls.castShadow = true;
  walls.receiveShadow = true;
  walls.userData.itemId = b.id;
  group.add(walls);

  const kind = buildingRoofKind(b, upf);
  const parts = buildRoof(pts, kind, { pitch: 0.45, eave: 1.5 * upf, maxRise: Math.min(12 * upf, wallHeight * 0.6) });
  const photo = opts.photo ?? null;
  if (photo) applyPhotoUVs(parts.roof, { x: b.x, y: b.y, rotation: b.rotation }, photo.rect);
  // Roofs clearly darker than the walls, so the roof shape reads from above.
  const roofColor = photo ? new THREE.Color(0xffffff) : kind === "flat" ? mix(b.color, "#5f6670", 0.75) : mix(b.color, "#2c323b", 0.85);
  const roof = new THREE.Mesh(parts.roof, new THREE.MeshStandardMaterial({
    color: roofColor,
    map: photo?.texture ?? null,
    roughness: 0.85,
    metalness: 0,
    side: THREE.DoubleSide,
    polygonOffset: kind === "flat",
    polygonOffsetFactor: -1
  }));
  roof.position.y = wallHeight + (kind === "flat" ? 0.04 * upf : 0);
  roof.name = "building-roof";
  roof.userData.itemId = b.id;
  roof.userData.roofKind = kind;
  roof.castShadow = kind !== "flat";
  roof.receiveShadow = true;
  group.add(roof);
  if (parts.gables) {
    const gables = new THREE.Mesh(parts.gables, new THREE.MeshStandardMaterial({ color: b.color, roughness: 0.92, side: THREE.DoubleSide }));
    gables.userData.itemId = b.id;
    gables.castShadow = true;
    roof.add(gables);
  }

  if (opts.outlines !== false) {
    const lineMat = new THREE.LineBasicMaterial({ color: 0x1e2530, transparent: true, opacity: 0.45 });
    const wallEdges = new THREE.LineSegments(new THREE.EdgesGeometry(wallGeo, 25), lineMat);
    wallEdges.raycast = () => {};
    group.add(wallEdges);
    const roofEdges = new THREE.LineSegments(new THREE.EdgesGeometry(parts.roof, 25), lineMat);
    roofEdges.position.copy(roof.position);
    roofEdges.raycast = () => {};
    group.add(roofEdges);
  }
  group.userData.top = wallHeight + parts.rise;
  group.userData.wallHeight = wallHeight;
  return group;
};
