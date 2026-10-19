// A building as a 3D model: walls, a real roof (flat, gable or hip) and crisp outlines.
// Roofs are a solid color by default; the aerial photo can be shown on them instead (an option,
// since the photo makes buildings hard to read in 3D).
import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { DEFAULT_BUILDING } from "../constants";
import type { BuildingItem } from "../types";
import { buildingLocalPoints } from "../lib/planGeom";
import { FACADE_BAY_FT, FACADE_STOREY_FT, applyPhotoUVs, buildFacadeWalls, buildRoof, chooseRoof, type PhotoRect } from "./buildings";

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

// One facade bay (FACADE_BAY_FT wide, one storey tall) as a tiling texture: white lap siding
// (tinted by the wall color) with a trimmed window in the middle. Shared by every building.
let facadeTexture: THREE.CanvasTexture | null = null;
const getFacadeTexture = () => {
  if (typeof document === "undefined") return null;
  if (facadeTexture) return facadeTexture;
  const W = 512, H = 512;
  const c = document.createElement("canvas");
  c.width = W;
  c.height = H;
  const g = c.getContext("2d");
  if (!g) return null;
  const fx = W / FACADE_BAY_FT, fy = H / FACADE_STOREY_FT;
  // Lap siding: 6 inch boards, lit from above, a thin shadow under each.
  const board = 0.5 * fy;
  for (let y = 0; y < H; y += board) {
    const grad = g.createLinearGradient(0, y, 0, y + board);
    grad.addColorStop(0, "#ffffff");
    grad.addColorStop(1, "#e2e2e2");
    g.fillStyle = grad;
    g.fillRect(0, y, W, board);
    g.fillStyle = "#a9a9a9";
    g.fillRect(0, y + board - 2, W, 2);
  }
  // Window: 3 ft wide, 3 to 7.25 ft up, white trim and sill, dark glass catching a little sky.
  const ww = 3 * fx, wh = 4.25 * fy;
  const wx = W / 2 - ww / 2, wy = H - 7.25 * fy;
  const trim = 0.3 * fx;
  g.fillStyle = "rgba(0,0,0,0.18)";
  g.fillRect(wx - trim + 3, wy - trim + 4, ww + 2 * trim, wh + 2 * trim);
  g.fillStyle = "#fafafa";
  g.fillRect(wx - trim, wy - trim, ww + 2 * trim, wh + 2 * trim);
  g.fillRect(wx - trim * 1.7, wy + wh + trim * 0.5, ww + trim * 3.4, trim * 0.9);
  const glass = g.createLinearGradient(0, wy, 0, wy + wh);
  glass.addColorStop(0, "#6f8396");
  glass.addColorStop(0.4, "#2f3d4b");
  glass.addColorStop(1, "#151c24");
  g.fillStyle = glass;
  g.fillRect(wx, wy, ww, wh);
  g.fillStyle = "#f2f2f2";
  g.fillRect(wx + ww / 2 - 4, wy, 8, wh);
  g.fillRect(wx, wy + wh / 2 - 4, ww, 8);
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  tex.userData.shared = true;
  facadeTexture = tex;
  return tex;
};

/** A door on the wall: frame, panel and a step, facing out (local building coordinates). */
const createDoor = (d: { x: number; y: number; nx: number; ny: number }, upf: number) => {
  const door = new THREE.Group();
  const frame = new THREE.Mesh(new THREE.BoxGeometry(3.6 * upf, 7.3 * upf, 0.12 * upf), new THREE.MeshStandardMaterial({ color: "#f3f3f1", roughness: 0.7 }));
  frame.position.y = 3.65 * upf;
  const panel = new THREE.Mesh(new THREE.BoxGeometry(3 * upf, 6.9 * upf, 0.2 * upf), new THREE.MeshStandardMaterial({ color: "#5a4030", roughness: 0.6 }));
  panel.position.set(0, 3.45 * upf, 0.06 * upf);
  const step = new THREE.Mesh(new THREE.BoxGeometry(4.2 * upf, 0.5 * upf, 2.2 * upf), new THREE.MeshStandardMaterial({ color: "#9a9a96", roughness: 0.95 }));
  step.position.set(0, 0.25 * upf, 1.1 * upf);
  for (const m of [frame, panel, step]) {
    m.castShadow = true;
    m.receiveShadow = true;
    door.add(m);
  }
  door.position.set(d.x + d.nx * 0.02 * upf, 0, d.y + d.ny * 0.02 * upf);
  // Box fronts face +z; turn them to the wall's outward direction.
  door.rotation.y = Math.atan2(d.nx, d.ny);
  door.name = "building-door";
  return door;
};

export const buildingRoofKind = (b: BuildingItem, unitsPerFoot = 1) => {
  const h = b.wallHeight ?? DEFAULT_BUILDING.wallHeight * unitsPerFoot;
  return !b.roofType || b.roofType === "auto" ? chooseRoof(buildingLocalPoints(b), h, unitsPerFoot) : b.roofType;
};

/** Whether a roof's triangles are wound to face up (pitched and flat roofs are built either way round). */
const roofFacesUp = (geo: THREE.BufferGeometry) => {
  const pos = geo.getAttribute("position");
  const index = geo.getIndex();
  const n = index ? index.count : pos.count;
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
  let sum = 0;
  for (let i = 0; i + 2 < n; i += 3) {
    const ia = index ? index.getX(i) : i, ib = index ? index.getX(i + 1) : i + 1, ic = index ? index.getX(i + 2) : i + 2;
    a.fromBufferAttribute(pos, ia); b.fromBufferAttribute(pos, ib); c.fromBufferAttribute(pos, ic);
    sum += b.sub(a).cross(c.sub(a)).y;
  }
  return sum >= 0;
};

/** Posts and edge beams for an open-sided building (porch, carport), merged into one geometry. */
const openFrame = (pts: { x: number; y: number }[], height: number, upf: number) => {
  const parts: THREE.BufferGeometry[] = [];
  const post = 0.45 * upf, beamH = 0.8 * upf, beamD = 0.4 * upf;
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i], c = pts[(i + 1) % pts.length];
    const len = Math.hypot(c.x - a.x, c.y - a.y);
    if (len < 0.01) continue;
    const n = Math.max(1, Math.ceil(len / (10 * upf)));
    for (let k = 0; k < n; k++) {
      const t = k / n;
      const g = new THREE.BoxGeometry(post, height, post);
      g.translate(a.x + (c.x - a.x) * t, height / 2, a.y + (c.y - a.y) * t);
      parts.push(g);
    }
    const beam = new THREE.BoxGeometry(len, beamH, beamD);
    beam.rotateY(-Math.atan2(c.y - a.y, c.x - a.x));
    beam.translate((a.x + c.x) / 2, height - beamH / 2, (a.y + c.y) / 2);
    parts.push(beam);
  }
  const merged = mergeGeometries(parts.map(g => g.toNonIndexed()), false) ?? new THREE.BufferGeometry();
  parts.forEach(g => g.dispose());
  return merged;
};

/**
 * Model in plan units, positioned at the building (base at `baseHeight`). Children carry
 * `userData.itemId` for picking; the roof is named "building-roof".
 */
export const createBuildingModel = (
  b: BuildingItem,
  baseHeight: number,
  opts: { unitsPerFoot?: number; photo?: RoofPhoto; outlines?: boolean; doors?: { x: number; y: number; nx: number; ny: number }[] } = {}
) => {
  const upf = opts.unitsPerFoot ?? 1;
  const pts = buildingLocalPoints(b);
  const wallHeight = b.wallHeight ?? DEFAULT_BUILDING.wallHeight * upf;
  const group = new THREE.Group();
  group.position.set(b.x, baseHeight, b.y);
  group.rotation.y = -THREE.MathUtils.degToRad(b.rotation);
  group.userData.itemId = b.id;

  // A porch or carport: posts (at the corners and every ~10 ft) and a beam along each edge
  // carrying the roof, instead of walls.
  const wallGeo = b.openSides ? openFrame(pts, wallHeight, upf) : buildFacadeWalls(pts, wallHeight, upf);
  if (!b.openSides) shadeWalls(wallGeo, wallHeight);
  const walls = new THREE.Mesh(wallGeo, b.openSides
    ? new THREE.MeshStandardMaterial({ color: mix(b.color, "#f3f1ec", 0.6), roughness: 0.85, metalness: 0 })
    : new THREE.MeshStandardMaterial({ color: b.color, map: getFacadeTexture(), roughness: 0.92, metalness: 0, vertexColors: true }));
  walls.name = "building-walls";
  walls.castShadow = true;
  walls.receiveShadow = true;
  walls.userData.itemId = b.id;
  group.add(walls);

  if (!b.openSides) (opts.doors ?? []).forEach(d => group.add(createDoor(d, upf)));

  const kind = buildingRoofKind(b, upf);
  const parts = buildRoof(pts, kind, { pitch: 0.45, eave: 1.5 * upf, maxRise: Math.min(12 * upf, wallHeight * 0.6) });
  const photo = opts.photo ?? null;
  if (photo) applyPhotoUVs(parts.roof, { x: b.x, y: b.y, rotation: b.rotation }, photo.rect);
  // Roofs clearly darker than the walls, so the roof shape reads from above.
  const roofColor = photo ? new THREE.Color(0xffffff) : kind === "flat" ? mix(b.color, "#5f6670", 0.75) : mix(b.color, "#2c323b", 0.85);
  // Which side of the roof faces the sky: that side gets the roof color, the underside (the soffit
  // under the eaves, seen from cameras on the walls) is light trim, not the dark roof color.
  const upSide = roofFacesUp(parts.roof) ? THREE.FrontSide : THREE.BackSide;
  const roof = new THREE.Mesh(parts.roof, new THREE.MeshStandardMaterial({
    color: roofColor,
    map: photo?.texture ?? null,
    roughness: 0.85,
    metalness: 0,
    side: upSide,
    polygonOffset: kind === "flat",
    polygonOffsetFactor: -1
  }));
  const soffit = new THREE.Mesh(parts.roof, new THREE.MeshStandardMaterial({
    color: mix(b.color, "#f1ede6", 0.55),
    roughness: 0.9,
    metalness: 0,
    side: upSide === THREE.FrontSide ? THREE.BackSide : THREE.FrontSide
  }));
  soffit.name = "building-soffit";
  soffit.userData.itemId = b.id;
  soffit.receiveShadow = true;
  roof.position.y = wallHeight + (kind === "flat" ? 0.04 * upf : 0);
  roof.name = "building-roof";
  roof.userData.itemId = b.id;
  roof.userData.roofKind = kind;
  roof.castShadow = kind !== "flat";
  roof.receiveShadow = true;
  group.add(roof);
  soffit.position.copy(roof.position);
  group.add(soffit);
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
