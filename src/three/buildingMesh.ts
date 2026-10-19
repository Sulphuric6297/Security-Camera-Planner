// A building as a 3D model: walls, a real roof (flat, gable or hip) and crisp outlines.
// Roofs are a solid color by default; the aerial photo can be shown on them instead (an option,
// since the photo makes buildings hard to read in 3D).
import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { DEFAULT_BUILDING } from "../constants";
import type { BuildingItem } from "../types";
import { buildingLocalPoints } from "../lib/planGeom";
import { FACADE_BAY_FT, FACADE_STOREY_FT, applyPhotoUVs, orientedRect, buildFacadeWallPieces, buildFacadeWalls, buildRoof, chooseRoof, type PhotoRect } from "./buildings";
import { attachEdge, clipToPart, snapPartToWalls, enclosedWalls, hasRailing, insetParts, openPartPosts, openPartsOf, partEntries, partRoof, partSides } from "../lib/openParts";
import { getEdgeOutwardNormal, pointInPolygonXY } from "../lib/geometry";
import type { Opening, OpenPart } from "../types";
import { isDoor, openingPlace, storiesOf, wallPieces } from "../lib/openings";

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
// Without the window (`windows: false`): plain siding, for walls with windows the user placed.
const facadeTextures: Record<string, THREE.CanvasTexture> = {};
const getFacadeTexture = (windows = true) => {
  if (typeof document === "undefined") return null;
  const key = windows ? "windows" : "siding";
  if (facadeTextures[key]) return facadeTextures[key];
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
  if (windows) {
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
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  tex.userData.shared = true;
  facadeTextures[key] = tex;
  return tex;
};

const openingMats: Record<string, THREE.MeshStandardMaterial> = {};
const openingMat = (key: string, make: () => THREE.MeshStandardMaterial) => {
  if (!openingMats[key]) { openingMats[key] = make(); openingMats[key].userData.shared = true; }
  return openingMats[key];
};
const glassMat = () => openingMat("glass", () => new THREE.MeshStandardMaterial({ color: "#26323e", roughness: 0.15, metalness: 0.6, envMapIntensity: 1.4 }));
const trimMat = () => openingMat("trim", () => new THREE.MeshStandardMaterial({ color: "#f6f5f1", roughness: 0.7 }));

/**
 * A window or door the user placed, as a model on the wall: trim, glass or panels, sill, shutters.
 * Box fronts face +z, turned to the wall's outward normal; local building coordinates.
 */
const createOpening = (o: Opening, place: { x: number; y: number; normal: { x: number; y: number } }, upf: number, color: string, steps = true) => {
  const g = new THREE.Group();
  const w = o.width, h = o.height, trim = 0.3 * upf;
  const box = (bw: number, bh: number, d: number, x: number, y: number, z: number, mat: THREE.Material) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(bw, bh, d), mat);
    m.position.set(x, y, z);
    m.castShadow = true;
    m.receiveShadow = true;
    g.add(m);
    return m;
  };
  const cy = o.sill + h / 2;
  if (o.kind === "garage-door") {
    box(w + 2 * trim, h + trim, 0.1 * upf, 0, o.sill + (h + trim) / 2, 0.05 * upf, trimMat());
    // Dark behind the sections, so the joints between them show
    box(w, h, 0.12 * upf, 0, cy, 0.06 * upf, openingMat("garage-gap", () => new THREE.MeshStandardMaterial({ color: "#3a3a3a", roughness: 0.9 })));
    const panel = openingMat(`garage-${color}`, () => new THREE.MeshStandardMaterial({ color: new THREE.Color(color).lerp(new THREE.Color("#ffffff"), 0.75), roughness: 0.6 }));
    const sections = 4;
    for (let k = 0; k < sections; k++) {
      box(w - 0.1 * upf, h / sections - 0.12 * upf, 0.18 * upf, 0, o.sill + (h / sections) * (k + 0.5), 0.1 * upf, panel);
      // Raised panels across each section
      const nPanels = Math.max(2, Math.round(w / (2 * upf)));
      for (let j = 0; j < nPanels; j++) box(w / nPanels - 0.35 * upf, h / sections - 0.55 * upf, 0.22 * upf, -w / 2 + (w / nPanels) * (j + 0.5), o.sill + (h / sections) * (k + 0.5), 0.11 * upf, panel);
    }
  } else if (isDoor(o.kind)) {
    box(w + 2 * trim, h + trim, 0.12 * upf, 0, o.sill + (h + trim) / 2, 0.06 * upf, trimMat());
    const leaves = o.kind === "door" ? 1 : 2;
    const leafW = w / leaves - 0.08 * upf;
    for (let k = 0; k < leaves; k++) {
      const x = -w / 2 + (w / leaves) * (k + 0.5);
      if (o.kind === "slider") {
        box(leafW, h - 0.1 * upf, 0.14 * upf, x, cy, 0.1 * upf, trimMat());
        box(leafW - 0.35 * upf, h - 0.45 * upf, 0.16 * upf, x, cy, 0.11 * upf, glassMat());
      } else {
        const panel = openingMat("door-panel", () => new THREE.MeshStandardMaterial({ color: "#5a4030", roughness: 0.6 }));
        box(leafW, h - 0.1 * upf, 0.2 * upf, x, cy, 0.12 * upf, panel);
        // A little glass at the top of each leaf
        box(leafW * 0.5, h * 0.18, 0.22 * upf, x, o.sill + h * 0.8, 0.12 * upf, glassMat());
      }
    }
    const stepMat = openingMat("step", () => new THREE.MeshStandardMaterial({ color: "#9a9a96", roughness: 0.95 }));
    if (o.sill < 0.5 * upf) box(w + 1.2 * upf, 0.5 * upf, 2.2 * upf, 0, 0.25 * upf, 1.1 * upf, stepMat);
    else if (steps) {
      // A raised floor with no porch in front: steps down to the ground, about 7 inches each
      const n = Math.max(1, Math.round(o.sill / (0.6 * upf)));
      const run = 0.95 * upf;
      for (let k = 0; k < n; k++) {
        const top = (o.sill * (n - k)) / n;
        const depth = run * (k + 1) + 0.6 * upf;
        box(w + 1.2 * upf, top, depth, 0, top / 2, depth / 2, stepMat);
      }
    }
  } else {
    box(w + 2 * trim, h + 2 * trim, 0.12 * upf, 0, cy, 0.06 * upf, trimMat());
    box(w, h, 0.16 * upf, 0, cy, 0.08 * upf, glassMat());
    box(w + 3.4 * trim, 0.27 * upf, 0.35 * upf, 0, o.sill - trim - 0.1 * upf, 0.17 * upf, trimMat());
    if (o.kind === "window") {
      // Muntins: a cross of white bars
      box(0.08 * upf, h, 0.2 * upf, 0, cy, 0.09 * upf, trimMat());
      box(w, 0.08 * upf, 0.2 * upf, 0, cy, 0.09 * upf, trimMat());
    }
    if (o.shutters) {
      const sh = openingMat("shutter", () => new THREE.MeshStandardMaterial({ color: "#2f3b33", roughness: 0.8 }));
      for (const side of [-1, 1]) box(w / 2, h + 2 * trim, 0.1 * upf, side * (w / 2 + trim + w / 4 + 0.1 * upf), cy, 0.06 * upf, sh);
    }
  }
  g.position.set(place.x + place.normal.x * 0.02 * upf, 0, place.y + place.normal.y * 0.02 * upf);
  g.rotation.y = Math.atan2(place.normal.x, place.normal.y);
  g.name = "building-opening";
  return g;
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

/** The walls whose roof end is a gable: as chosen, or for a "gable" roof its two ends (the walls
 * across the long axis). */
export const gableWallsOf = (b: BuildingItem, unitsPerFoot = 1): number[] => {
  if (b.gableWalls) return b.gableWalls;
  if (buildingRoofKind(b, unitsPerFoot) !== "gable") return [];
  const pts = buildingLocalPoints(b);
  const r = orientedRect(pts);
  return pts.flatMap((_, i) => {
    const n = getEdgeOutwardNormal(pts, i);
    return Math.abs(n.x * Math.cos(r.angle) + n.y * Math.sin(r.angle)) > 0.5 ? [i] : [];
  });
};
export const isGableWall = (b: BuildingItem, i: number, unitsPerFoot = 1) => gableWallsOf(b, unitsPerFoot).includes(i);

/** Switch one wall's roof end between gable and hip. On a plain rectangle a gable on a wall the
 * other way round turns the ridge, so gables on the crossing walls give way. */
export const toggleGableWall = (b: BuildingItem, i: number, unitsPerFoot = 1): number[] => {
  const cur = gableWallsOf(b, unitsPerFoot);
  if (cur.includes(i)) return cur.filter(k => k !== i);
  const pts = buildingLocalPoints(b);
  const n = getEdgeOutwardNormal(pts, i);
  const keep = pts.length === 4 ? cur.filter(k => { const m = getEdgeOutwardNormal(pts, k); return Math.abs(m.x * n.x + m.y * n.y) > 0.5; }) : cur;
  return [...keep, i].sort((x, y) => x - y);
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

/** Posts (at given points) and beams (along given stretches) at the top, merged into one geometry. */
const postsAndBeams = (posts: { x: number; y: number }[], beams: { a: { x: number; y: number }; b: { x: number; y: number } }[], height: number, upf: number, base = 0) => {
  const parts: THREE.BufferGeometry[] = [];
  const post = 0.45 * upf, beamH = 0.8 * upf, beamD = 0.4 * upf;
  for (const p of posts) {
    const g = new THREE.BoxGeometry(post, height - base, post);
    g.translate(p.x, (height + base) / 2, p.y);
    parts.push(g);
  }
  for (const { a, b } of beams) {
    const len = Math.hypot(b.x - a.x, b.y - a.y);
    if (len < 0.01) continue;
    const beam = new THREE.BoxGeometry(len, beamH, beamD);
    beam.rotateY(-Math.atan2(b.y - a.y, b.x - a.x));
    beam.translate((a.x + b.x) / 2, height - beamH / 2, (a.y + b.y) / 2);
    parts.push(beam);
  }
  const merged = parts.length ? mergeGeometries(parts.map(g => g.toNonIndexed()), false) : null;
  parts.forEach(g => g.dispose());
  return merged ?? new THREE.BufferGeometry();
};

/** Posts (at the corners and every ~10 ft) and a beam along each edge: an open-sided building. */
const openFrame = (pts: { x: number; y: number }[], height: number, upf: number) => {
  const posts: { x: number; y: number }[] = [];
  pts.forEach((a, i) => {
    const b = pts[(i + 1) % pts.length];
    const n = Math.max(1, Math.ceil(Math.hypot(b.x - a.x, b.y - a.y) / (10 * upf)));
    for (let k = 0; k < n; k++) posts.push({ x: a.x + ((b.x - a.x) * k) / n, y: a.y + ((b.y - a.y) * k) / n });
  });
  return postsAndBeams(posts, pts.map((a, i) => ({ a, b: pts[(i + 1) % pts.length] })), height, upf);
};

type Q = { x: number; y: number };
/** A box from a to b (plan), `w` wide, from y0 to y1. */
const barBox = (a: Q, b: Q, w: number, y0: number, y1: number) => {
  const len = Math.max(Math.hypot(b.x - a.x, b.y - a.y), w);
  const g = new THREE.BoxGeometry(len, y1 - y0, w);
  g.rotateY(-Math.atan2(b.y - a.y, b.x - a.x));
  g.translate((a.x + b.x) / 2, (y0 + y1) / 2, (a.y + b.y) / 2);
  return g;
};
const merged = (parts: THREE.BufferGeometry[]) => {
  const m = parts.length ? mergeGeometries(parts.map(g => (g.index ? g.toNonIndexed() : g)), false) : null;
  parts.forEach(g => g.dispose());
  return m;
};

/**
 * A porch, carport or patio: its floor (a deck up on the porch's height, or a slab on the ground),
 * posts from the floor to the eaves with a beam, and for a raised porch a railing with steps down
 * in the middle of its longest open side.
 */
const openPartModel = (outline: Q[], part: OpenPart, wallHeight: number, upf: number, color: string) => {
  const group = new THREE.Group();
  const roof = partRoof(outline, part);
  const floor = Math.max(0, Math.min(part.floor, wallHeight - 7 * upf));
  const trim = mix(color, "#f3f1ec", 0.6);
  // Floor: set into the house, only the part under its roof; attached, the whole part
  const pts = roof === "main" ? snapPartToWalls(outline, part.pts) : part.pts;
  const area = roof === "main" ? clipToPart(outline, pts) : pts;
  if (area.length >= 3) {
    const shape = new THREE.Shape(area.map(p => new THREE.Vector2(p.x, -p.y)));
    const thick = floor > 0.2 * upf ? floor : 0.35 * upf;
    const geo = new THREE.ExtrudeGeometry(shape, { depth: thick, bevelEnabled: false });
    geo.rotateX(-Math.PI / 2); // shape (x, -y) -> plan (x, y), extruded up
    const deck = part.kind === "porch" || part.kind === "deck" ? "#9a7b5c" : part.kind === "patio" ? "#b8b2a7" : "#c9c5bd";
    const slab = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: deck, roughness: 0.9, metalness: 0 }));
    slab.name = "open-part-floor";
    slab.castShadow = true;
    slab.receiveShadow = true;
    group.add(slab);
  }
  // The open sides: set into the house, the outline's stretches through it; attached, every side
  // but the one against the house.
  const ai = roof === "main" ? -1 : attachEdge(outline, part.pts);
  const sides = partSides(outline, part);
  const frameParts: THREE.BufferGeometry[] = [];
  if (roof === "main") {
    frameParts.push(postsAndBeams(openPartPosts(outline, [pts], 10 * upf), sides, wallHeight, upf, floor));
  } else if (roof === "own" && part.pts.length === 4) {
    // Its own roof: from just under the house's eaves, sloping away at about 3/12, with posts and a
    // beam along the far side.
    const a = part.pts[ai], b = part.pts[(ai + 1) % 4];
    const far = { a: part.pts[(ai + 2) % 4], b: part.pts[(ai + 3) % 4] };
    const n = getEdgeOutwardNormal(part.pts, ai); // toward the house
    const away = { x: -n.x, y: -n.y };
    const depth = Math.abs((far.a.x - a.x) * away.x + (far.a.y - a.y) * away.y);
    const high = wallHeight - 0.6 * upf;
    const low = Math.max(floor + 7 * upf, high - depth * ((part.pitch ?? 3) / 12));
    const slope = depth > 0 ? (high - low) / depth : 0;
    const len = Math.hypot(b.x - a.x, b.y - a.y);
    const u = { x: (b.x - a.x) / len, y: (b.y - a.y) / len };
    const o = 1 * upf, t = 0.35 * upf;
    const at = (s: number, d: number) => ({ x: a.x + u.x * s + away.x * d, y: a.y + u.y * s + away.y * d, h: high - slope * d });
    const c = [at(-o, -0.5 * upf), at(len + o, -0.5 * upf), at(len + o, depth + o), at(-o, depth + o)];
    const v = (p: { x: number; y: number; h: number }, dy: number) => [p.x, p.h + dy, p.y];
    const top = c.map(p => v(p, t)), bot = c.map(p => v(p, 0));
    const quad = (q: number[][]) => [...q[0], ...q[1], ...q[2], ...q[0], ...q[2], ...q[3]];
    const pos = [
      ...quad(top), ...quad([bot[0], bot[3], bot[2], bot[1]]),
      ...[0, 1, 2, 3].flatMap(k => quad([bot[k], bot[(k + 1) % 4], top[(k + 1) % 4], top[k]]))
    ];
    const roofGeo = new THREE.BufferGeometry();
    roofGeo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    roofGeo.computeVertexNormals();
    const roofMesh = new THREE.Mesh(roofGeo, new THREE.MeshStandardMaterial({ color: mix(color, "#2c323b", 0.85), roughness: 0.85, metalness: 0, side: THREE.DoubleSide }));
    roofMesh.name = "open-part-roof";
    roofMesh.castShadow = true;
    roofMesh.receiveShadow = true;
    group.add(roofMesh);
    // A light ceiling under it (beadboard), like the house's soffits
    const ceil = new THREE.BufferGeometry();
    ceil.setAttribute("position", new THREE.Float32BufferAttribute(quad(c.map(p => v(p, -0.02 * upf))), 3));
    ceil.computeVertexNormals();
    group.add(new THREE.Mesh(ceil, new THREE.MeshStandardMaterial({ color: "#ece8df", roughness: 0.9, metalness: 0, side: THREE.DoubleSide })));
    const flen = Math.hypot(far.b.x - far.a.x, far.b.y - far.a.y);
    const posts: Q[] = [];
    const nPosts = Math.max(1, Math.ceil(flen / (10 * upf)));
    for (let k = 0; k <= nPosts; k++) posts.push({ x: far.a.x + ((far.b.x - far.a.x) * k) / nPosts, y: far.a.y + ((far.b.y - far.a.y) * k) / nPosts });
    frameParts.push(postsAndBeams(posts, [far], low, upf, floor));
  }
  const frame = merged(frameParts);
  if (frame) {
    const frameMesh = new THREE.Mesh(frame, new THREE.MeshStandardMaterial({ color: trim, roughness: 0.85, metalness: 0 }));
    frameMesh.name = "building-posts";
    frameMesh.castShadow = true;
    group.add(frameMesh);
  }
  if (hasRailing(part, upf) && floor > 0.2 * upf && sides.length) {
    const bars: THREE.BufferGeometry[] = [];
    const railH = 3 * upf, gap = 4 * upf;
    const entries = partEntries(outline, part);
    const noRail = new Set(part.noRail ?? []);
    const c = part.pts.reduce((m, p) => ({ x: m.x + p.x / part.pts.length, y: m.y + p.y / part.pts.length }), { x: 0, y: 0 });
    sides.forEach((s, si) => {
      const len = Math.hypot(s.b.x - s.a.x, s.b.y - s.a.y);
      if (len < 0.01) return;
      const dir = { x: (s.b.x - s.a.x) / len, y: (s.b.y - s.a.y) / len };
      const at = (t: number) => ({ x: s.a.x + dir.x * t, y: s.a.y + dir.y * t });
      // The entries on this side: gaps in the railing, with steps down
      const gaps = entries.filter(e => e.side === si).map(e => Math.max(gap / 2, Math.min(len - gap / 2, e.at * len))).sort((x, y) => x - y);
      if (!noRail.has(si)) {
        const runs: [number, number][] = [];
        let from = 0;
        for (const g of gaps) { if (g - gap / 2 > from + 0.3 * upf) runs.push([from, g - gap / 2]); from = g + gap / 2; }
        if (len > from + 0.3 * upf) runs.push([from, len]);
        for (const [t0, t1] of runs) {
          bars.push(barBox(at(t0), at(t1), 0.25 * upf, floor + railH - 0.25 * upf, floor + railH));
          bars.push(barBox(at(t0), at(t1), 0.15 * upf, floor + 0.3 * upf, floor + 0.45 * upf));
          for (let t = t0 + 0.5 * upf; t < t1 - 0.2 * upf; t += 0.5 * upf) bars.push(barBox(at(t), at(t + 0.12 * upf), 0.12 * upf, floor + 0.45 * upf, floor + railH - 0.25 * upf));
        }
      }
      for (const g of gaps) {
        const mid = at(g);
        const out = { x: dir.y, y: -dir.x };
        // Outward is away from the part's middle
        if ((mid.x - c.x) * out.x + (mid.y - c.y) * out.y < 0) { out.x = -out.x; out.y = -out.y; }
        // Risers of about 7 in: the treads between the floor and the ground
        const n = Math.max(1, Math.round(floor / (0.6 * upf)));
        const tread = 0.9 * upf;
        for (let k = 0; k < n - 1; k++) {
          const top = (floor * (n - 1 - k)) / n;
          const p0 = { x: mid.x + out.x * tread * k, y: mid.y + out.y * tread * k };
          const p1 = { x: p0.x + out.x * tread, y: p0.y + out.y * tread };
          const stepGeo = new THREE.BoxGeometry(gap - 0.4 * upf, top, tread);
          stepGeo.rotateY(-Math.atan2(dir.y, dir.x));
          stepGeo.translate((p0.x + p1.x) / 2, top / 2, (p0.y + p1.y) / 2);
          bars.push(stepGeo);
        }
      }
    });
    const rail = merged(bars);
    if (rail) {
      const m = new THREE.Mesh(rail, new THREE.MeshStandardMaterial({ color: trim, roughness: 0.85, metalness: 0 }));
      m.name = "open-part-railing";
      m.castShadow = true;
      group.add(m);
    }
  }
  return group;
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
  const partList = openPartsOf(b);
  const inset = insetParts(pts, partList);
  const openParts = inset.length ? inset : null;
  const wallGeo = b.openSides
    ? openFrame(pts, wallHeight, upf)
    : openParts
      ? buildFacadeWallPieces(enclosedWalls(pts, openParts), wallHeight, upf)
      : buildFacadeWalls(pts, wallHeight, upf);
  if (!b.openSides) shadeWalls(wallGeo, wallHeight);
  const walls = new THREE.Mesh(wallGeo, b.openSides
    ? new THREE.MeshStandardMaterial({ color: mix(b.color, "#f3f1ec", 0.6), roughness: 0.85, metalness: 0 })
    : new THREE.MeshStandardMaterial({ color: b.color, map: getFacadeTexture(!b.openings), roughness: 0.92, metalness: 0, vertexColors: true }));
  walls.name = "building-walls";
  walls.castShadow = true;
  walls.receiveShadow = true;
  walls.userData.itemId = b.id;
  group.add(walls);
  // A trim band at each upper floor, so the stories read from outside
  const stories = storiesOf(wallHeight, upf);
  if (!b.openSides && stories > 1) {
    const bands: THREE.BufferGeometry[] = [];
    const floor0 = b.floorHeight ?? 1 * upf;
    for (let k = 1; k < stories; k++) {
      const y = floor0 + ((wallHeight - floor0) * k) / stories;
      pts.forEach((a, i) => {
        const c = pts[(i + 1) % pts.length];
        const n = getEdgeOutwardNormal(pts, i);
        const off = 0.1 * upf;
        bands.push(barBox({ x: a.x + n.x * off, y: a.y + n.y * off }, { x: c.x + n.x * off, y: c.y + n.y * off }, 0.25 * upf, y - 0.35 * upf, y + 0.35 * upf));
      });
    }
    const band = merged(bands);
    if (band) {
      const m = new THREE.Mesh(band, new THREE.MeshStandardMaterial({ color: mix(b.color, "#f3f1ec", 0.7), roughness: 0.8 }));
      m.name = "building-floor-trim";
      m.castShadow = true;
      group.add(m);
    }
  }

  // Windows and doors the user placed (then the walls are plain siding), or a door at each marked
  // door spot on the automatic walls
  if (!b.openSides && b.openings) {
    const pieces = wallPieces(pts, insetParts(pts, partList));
    b.openings.forEach(o => {
      const place = openingPlace(pts, o, pieces);
      // No steps where a porch or deck is in front of the door
      const front = place ? { x: place.x + place.normal.x * 1.5 * upf, y: place.y + place.normal.y * 1.5 * upf } : null;
      const porch = !!front && partList.some(p => p.floor > 0.2 * upf && pointInPolygonXY(front, p.pts));
      if (place) group.add(createOpening(o, place, upf, b.color, !porch));
    });
  }
  // The foundation below the first floor (a crawl space or a raised floor shows more of it)
  const floorH = b.floorHeight ?? 1 * upf;
  if (!b.openSides && floorH > 0.3 * upf) {
    const pieces = openParts ? enclosedWalls(pts, openParts) : pts.map((a, i) => ({ a, b: pts[(i + 1) % pts.length], out: getEdgeOutwardNormal(pts, i) }));
    const off = 0.12 * upf;
    const geo = merged(pieces.map(w => barBox({ x: w.a.x + w.out.x * off, y: w.a.y + w.out.y * off }, { x: w.b.x + w.out.x * off, y: w.b.y + w.out.y * off }, 0.3 * upf, -0.5 * upf, floorH)));
    if (geo) {
      const m = new THREE.Mesh(geo, openingMat("foundation", () => new THREE.MeshStandardMaterial({ color: "#8f8c86", roughness: 0.97 })));
      m.name = "building-foundation";
      m.castShadow = true;
      m.receiveShadow = true;
      m.userData.itemId = b.id;
      group.add(m);
    }
  } else if (!b.openSides) (opts.doors ?? []).forEach(d => group.add(createDoor(d, upf)));
  // Open parts (porch, carport, patio): floors, posts and railings where the outer walls are left out.
  partList.forEach(part => group.add(openPartModel(pts, part, wallHeight, upf, b.color)));

  const kind = buildingRoofKind(b, upf);
  const parts = buildRoof(pts, kind, {
    pitch: b.roofPitch ? b.roofPitch / 12 : 0.45,
    eave: 1.5 * upf,
    maxRise: b.roofPitch ? 40 * upf : Math.min(12 * upf, wallHeight * 0.6),
    gableWalls: kind === "flat" ? undefined : b.gableWalls
  });
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
