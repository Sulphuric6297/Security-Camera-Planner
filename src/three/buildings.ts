// 3D building models: walls plus a real roof (flat, gable or hip) whose top is textured with the
// aerial photo, so buildings in 3D look like the satellite view from above.
//
// Coordinates: building-local plan coordinates (x, y) map to three.js (x, z) with Y up.
import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { pointInPolygonXY, polygonArea } from "../lib/geometry";
import { straightSkeleton, type SkeletonNode } from "./roofSkeleton";

type P = { x: number; y: number };
export type RoofKind = "flat" | "gable" | "hip";
export type RoofChoice = RoofKind | "auto";

/** Where the plan's background photo sits, to map roof vertices onto it. */
export type PhotoRect = { x: number; y: number; width: number; height: number };
export type BuildingPose = { x: number; y: number; rotation: number };

const convexHull = (pts: P[]) => {
  const p = pts.slice().sort((a, b) => a.x - b.x || a.y - b.y);
  if (p.length < 3) return p;
  const cross = (o: P, a: P, b: P) => (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
  const lower: P[] = [];
  for (const pt of p) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], pt) <= 0) lower.pop();
    lower.push(pt);
  }
  const upper: P[] = [];
  for (let i = p.length - 1; i >= 0; i--) {
    const pt = p[i];
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], pt) <= 0) upper.pop();
    upper.push(pt);
  }
  return lower.slice(0, -1).concat(upper.slice(0, -1));
};

/** Oriented bounding rectangle with the smallest area: center, long axis angle, half-lengths (a >= b). */
export const orientedRect = (pts: P[]) => {
  const hull = convexHull(pts);
  let best = { area: Infinity, angle: 0, cx: 0, cy: 0, a: 0, b: 0 };
  for (let i = 0; i < hull.length; i++) {
    const p = hull[i];
    const q = hull[(i + 1) % hull.length];
    const angle = Math.atan2(q.y - p.y, q.x - p.x);
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    let minU = Infinity, maxU = -Infinity, minV = Infinity, maxV = -Infinity;
    for (const h of hull) {
      const u = h.x * c + h.y * s;
      const v = -h.x * s + h.y * c;
      minU = Math.min(minU, u); maxU = Math.max(maxU, u);
      minV = Math.min(minV, v); maxV = Math.max(maxV, v);
    }
    const area = (maxU - minU) * (maxV - minV);
    if (area < best.area) {
      const mu = (minU + maxU) / 2;
      const mv = (minV + maxV) / 2;
      const hu = (maxU - minU) / 2;
      const hv = (maxV - minV) / 2;
      // Long axis first
      best = hu >= hv
        ? { area, angle, cx: mu * c - mv * s, cy: mu * s + mv * c, a: hu, b: hv }
        : { area, angle: angle + Math.PI / 2, cx: mu * c - mv * s, cy: mu * s + mv * c, a: hv, b: hu };
    }
  }
  return best;
};

/**
 * A footprint with square corners (an L, T, U...) as a few overlapping rectangles that together
 * cover it exactly, each as its 4 corner points. Null if the outline isn't square-cornered.
 * Each rectangle gets its own pitched roof; where they meet the roofs intersect like the
 * cross-gables of a real house.
 */
export const rectilinearParts = (pts: P[]): P[][] | null => {
  if (pts.length < 4 || pts.length > 16) return null;
  let angle = 0;
  let longest = 0;
  pts.forEach((p, i) => {
    const q = pts[(i + 1) % pts.length];
    const len = Math.hypot(q.x - p.x, q.y - p.y);
    if (len > longest) { longest = len; angle = Math.atan2(q.y - p.y, q.x - p.x); }
  });
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  const local = pts.map(p => ({ x: p.x * c + p.y * s, y: -p.x * s + p.y * c }));
  // Every edge must run along one of the two directions.
  for (let i = 0; i < local.length; i++) {
    const p = local[i];
    const q = local[(i + 1) % local.length];
    const a = Math.abs(Math.atan2(q.y - p.y, q.x - p.x)) % (Math.PI / 2);
    if (Math.min(a, Math.PI / 2 - a) > (6 * Math.PI) / 180) return null;
  }
  const tol = Math.max(0.5, longest * 0.02);
  const cluster = (vals: number[]) => {
    const out: number[] = [];
    vals.slice().sort((a, b) => a - b).forEach(v => { if (!out.length || v - out[out.length - 1] > tol) out.push(v); });
    return out;
  };
  const us = cluster(local.map(p => p.x));
  const vs = cluster(local.map(p => p.y));
  const nu = us.length - 1;
  const nv = vs.length - 1;
  if (nu < 1 || nv < 1) return null;
  const inside: boolean[][] = [];
  for (let i = 0; i < nu; i++) {
    inside.push([]);
    for (let j = 0; j < nv; j++) inside[i].push(pointInPolygonXY({ x: (us[i] + us[i + 1]) / 2, y: (vs[j] + vs[j + 1]) / 2 }, local));
  }
  const covered = inside.map(col => col.map(() => false));
  const rects: [number, number, number, number][] = [];
  const remaining = () => inside.some((col, i) => col.some((v, j) => v && !covered[i][j]));
  while (remaining()) {
    // The biggest all-inside rectangle that covers something still uncovered.
    let best: [number, number, number, number] | null = null;
    let bestArea = 0;
    for (let i0 = 0; i0 < nu; i0++) for (let i1 = i0; i1 < nu; i1++) for (let j0 = 0; j0 < nv; j0++) for (let j1 = j0; j1 < nv; j1++) {
      let ok = true;
      let fresh = false;
      for (let i = i0; i <= i1 && ok; i++) for (let j = j0; j <= j1; j++) {
        if (!inside[i][j]) { ok = false; break; }
        if (!covered[i][j]) fresh = true;
      }
      if (!ok || !fresh) continue;
      const area = (us[i1 + 1] - us[i0]) * (vs[j1 + 1] - vs[j0]);
      if (area > bestArea) { bestArea = area; best = [i0, i1, j0, j1]; }
    }
    if (!best || rects.length >= 6) return null;
    rects.push(best);
    for (let i = best[0]; i <= best[1]; i++) for (let j = best[2]; j <= best[3]; j++) covered[i][j] = true;
  }
  const back = (x: number, y: number) => ({ x: x * c - y * s, y: x * s + y * c });
  return rects.map(([i0, i1, j0, j1]) => [back(us[i0], vs[j0]), back(us[i1 + 1], vs[j0]), back(us[i1 + 1], vs[j1 + 1]), back(us[i0], vs[j1 + 1])]);
};

// A footprint filling less of its bounding rectangle than this has a notch worth its own roof shape.
const NOTCH_FILL = 0.97;

/**
 * Picks a roof the way most buildings look: houses and garages (small, not too tall, rectangular
 * or square-cornered like an L or T) get pitched roofs, everything else is flat.
 */
export const chooseRoof = (pts: P[], wallHeight: number, unitsPerFoot = 1): RoofKind => {
  if (pts.length < 3 || pts.length > 16) return "flat";
  const r = orientedRect(pts);
  const fill = polygonArea(pts) / Math.max(1e-6, 4 * r.a * r.b);
  const areaSqFt = polygonArea(pts) / (unitsPerFoot * unitsPerFoot);
  if (wallHeight / unitsPerFoot > 32) return "flat";
  // Square-cornered shapes with a real notch (L, T, U) are roofed wing by wing.
  const parts = pts.length > 4 && fill < NOTCH_FILL ? rectilinearParts(pts) : null;
  if ((!parts || parts.length < 2) && fill >= 0.85 && pts.length <= 10) {
    if (areaSqFt > 4500) return "flat";
    if ((2 * r.b) / unitsPerFoot < 10) return "flat";
    return r.a / Math.max(r.b, 1e-6) < 1.25 ? "hip" : "gable";
  }
  // Bigger houses come in wings (L, T, U); each wing is still house-sized.
  if (areaSqFt > 7000) return "flat";
  if (!parts || parts.length > 4) return "flat";
  const wingsOk = parts.every(q => {
    const w = Math.hypot(q[1].x - q[0].x, q[1].y - q[0].y);
    const d = Math.hypot(q[2].x - q[1].x, q[2].y - q[1].y);
    return Math.min(w, d) / unitsPerFoot >= 10;
  });
  return wingsOk ? "gable" : "flat";
};

type RoofParts = {
  /** Roof surfaces (textured with the photo). Built relative to the eave height (y = 0 at wall top). */
  roof: THREE.BufferGeometry;
  /** Vertical gable-end triangles (wall material), same frame as the roof. */
  gables: THREE.BufferGeometry | null;
  /** Highest point of the roof above the wall top. */
  rise: number;
};

const geometryFrom = (positions: number[]) => {
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  g.computeVertexNormals();
  return g;
};

/**
 * A pitched roof that follows any outline (its straight skeleton): every wall sends a roof slope
 * inward and they meet in hips, valleys and ridges. For a gable roof, end slopes that come to a
 * point (triangles) stand up as gable walls instead. No eave overhang. Null if it can't be built.
 */
const skeletonRoof = (pts: P[], kind: RoofKind, pitch: number, maxRise: number): RoofParts | null => {
  const sk = straightSkeleton(pts, maxRise / pitch);
  if (!sk) return null;
  const gableFaces = new Set<number>();
  if (kind === "gable") {
    // Triangular end faces whose tip no other end face shares become gable walls: their tip
    // moves out onto the wall line, which also stretches the ridge to it.
    const tipOf = (i: number) => {
      const f = sk.faces[i];
      if (f.length !== 1 || f[0].length !== 3) return null;
      const tips = f[0].filter(p => p.z > 1e-6);
      return tips.length === 1 ? tips[0] : null;
    };
    const uses = new Map<SkeletonNode, number>();
    sk.faces.forEach((_, i) => {
      const tip = tipOf(i);
      if (tip) uses.set(tip, (uses.get(tip) ?? 0) + 1);
    });
    sk.faces.forEach((_, i) => {
      const tip = tipOf(i);
      if (!tip || uses.get(tip) !== 1) return;
      const a = sk.points[i];
      const b = sk.points[(i + 1) % sk.points.length];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const s = ((tip.x - a.x) * dx + (tip.y - a.y) * dy) / (dx * dx + dy * dy);
      if (s <= 0 || s >= 1) return;
      tip.x = a.x + s * dx;
      tip.y = a.y + s * dy;
      gableFaces.add(i);
    });
  }
  const roofTri: number[] = [];
  const gableTri: number[] = [];
  const put = (out: number[], ...ps: SkeletonNode[]) => ps.forEach(p => out.push(p.x, p.z * pitch, p.y));
  sk.faces.forEach((pieces, i) => {
    for (const piece of pieces) {
      for (let k = 1; k + 1 < piece.length; k++) put(gableFaces.has(i) ? gableTri : roofTri, piece[0], piece[k], piece[k + 1]);
    }
  });
  let rise = 0;
  for (const top of sk.tops) {
    const tris = THREE.ShapeUtils.triangulateShape(top.map(p => new THREE.Vector2(p.x, p.y)), []);
    for (const [a, b, c] of tris) put(roofTri, top[a], top[b], top[c]);
  }
  for (let i = 1; i < roofTri.length; i += 3) rise = Math.max(rise, roofTri[i]);
  if (!roofTri.length || !roofTri.every(Number.isFinite)) return null;
  return { roof: geometryFrom(roofTri), gables: gableTri.length ? geometryFrom(gableTri) : null, rise };
};

/**
 * Roof geometry in building-local space. `pitch` is rise over run (0.5 = a common 6/12 roof).
 * Rectangles get an exact roof with eaves, square-cornered L/T shapes a roof per wing, and any
 * other outline a roof that follows its walls (skeletonRoof).
 */
export const buildRoof = (pts: P[], kind: RoofKind, opts: { pitch?: number; eave?: number; maxRise?: number } = {}): RoofParts => {
  // L, T and other square-cornered shapes: one pitched roof per wing, intersecting.
  if (kind !== "flat" && pts.length > 4) {
    const r = orientedRect(pts);
    const fill = polygonArea(pts) / Math.max(1e-6, 4 * r.a * r.b);
    const parts = fill < NOTCH_FILL ? rectilinearParts(pts) : null;
    if (parts && parts.length > 1) {
      const built = parts.map(q => buildRoof(q, kind, opts));
      const gables = built.map(b => b.gables).filter((g): g is THREE.BufferGeometry => !!g);
      return {
        roof: mergeGeometries(built.map(b => b.roof)) ?? built[0].roof,
        gables: gables.length ? mergeGeometries(gables) : null,
        rise: Math.max(...built.map(b => b.rise))
      };
    }
  }
  // Any other shape that isn't a plain rectangle: a roof that follows every wall.
  if (kind !== "flat") {
    const r = orientedRect(pts);
    if (polygonArea(pts) / Math.max(1e-6, 4 * r.a * r.b) < NOTCH_FILL) {
      const roof = skeletonRoof(pts, kind, opts.pitch ?? 0.5, opts.maxRise ?? Infinity);
      if (roof) return roof;
      kind = "flat"; // the outline is too odd to roof: flat rather than a wrong roof
    }
  }
  if (kind === "flat") {
    const shape = new THREE.Shape(pts.map(p => new THREE.Vector2(p.x, -p.y)));
    const g = new THREE.ShapeGeometry(shape);
    g.rotateX(-Math.PI / 2);
    return { roof: g, gables: null, rise: 0 };
  }
  const pitch = opts.pitch ?? 0.5;
  const eave = opts.eave ?? 1.5;
  const r = orientedRect(pts);
  const c = Math.cos(r.angle);
  const s = Math.sin(r.angle);
  // local (u along the ridge, v across, h up) -> three (x, y, z)
  const to = (u: number, v: number, h: number) => [r.cx + u * c - v * s, h, r.cy + u * s + v * c];
  const rise = Math.min(r.b * pitch, opts.maxRise ?? Infinity);
  const slope = rise / Math.max(r.b, 1e-6);
  const a = r.a;
  const b = r.b;
  const ae = a + eave;
  const be = b + eave;
  const yEave = -eave * slope; // overhang drops below the wall top
  const tri: number[] = [];
  // Where each vertex samples the photo: eave corners sample at the wall line, since past the
  // walls the photo shows the ground (which made a grass-colored fringe).
  const uvTri: number[] = [];
  // Sample a little inside the wall line: right at the edge the photo blends in the ground.
  const shrinkU = (a * 0.94) / ae;
  const shrinkV = (b * 0.94) / be;
  const uvOf = (p: number[]) => {
    // back to (u, v) then pull eave points onto the wall line
    const dx = p[0] - r.cx;
    const dz = p[2] - r.cy;
    const u = dx * c + dz * s;
    const v = -dx * s + dz * c;
    const uu = Math.abs(u) > a * 0.94 ? u * (Math.abs(u) > a ? shrinkU : 0.94) : u;
    const vv = Math.abs(v) > b * 0.94 ? v * (Math.abs(v) > b ? shrinkV : 0.94) : v;
    return [r.cx + uu * c - vv * s, p[1], r.cy + uu * s + vv * c];
  };
  const pushTri = (...ps: number[][]) => ps.forEach(p => { tri.push(...p); uvTri.push(...uvOf(p)); });
  const quad = (p1: number[], p2: number[], p3: number[], p4: number[]) => pushTri(p1, p2, p3, p1, p3, p4);
  const gable: number[] = [];
  if (kind === "gable") {
    const ridgeA = ae; // a gable ridge runs the full length, including the overhang
    quad(to(-ae, -be, yEave), to(ae, -be, yEave), to(ridgeA, 0, rise), to(-ridgeA, 0, rise));
    quad(to(ae, be, yEave), to(-ae, be, yEave), to(-ridgeA, 0, rise), to(ridgeA, 0, rise));
    // Gable ends: wall triangles under the roof at each short side
    gable.push(...to(a, -b, 0), ...to(a, b, 0), ...to(a, 0, rise));
    gable.push(...to(-a, b, 0), ...to(-a, -b, 0), ...to(-a, 0, rise));
  } else {
    // Hip: the ridge is shorter by the roof's half-width at each end (a pyramid when square).
    const ridgeA = Math.max(0, a - b);
    quad(to(-ae, -be, yEave), to(ae, -be, yEave), to(ridgeA, 0, rise), to(-ridgeA, 0, rise));
    quad(to(ae, be, yEave), to(-ae, be, yEave), to(-ridgeA, 0, rise), to(ridgeA, 0, rise));
    pushTri(to(ae, -be, yEave), to(ae, be, yEave), to(ridgeA, 0, rise));
    pushTri(to(-ae, be, yEave), to(-ae, -be, yEave), to(-ridgeA, 0, rise));
  }
  const roof = geometryFrom(tri);
  roof.setAttribute("uvSource", new THREE.Float32BufferAttribute(uvTri, 3));
  return { roof, gables: gable.length ? geometryFrom(gable) : null, rise };
};

/** Adds photo UVs to roof geometry: each vertex samples the aerial photo straight below it. */
export const applyPhotoUVs = (geometry: THREE.BufferGeometry, pose: BuildingPose, photo: PhotoRect) => {
  // Pitched roofs carry eave-free sample positions (see buildRoof).
  const pos = geometry.getAttribute("uvSource") ?? geometry.getAttribute("position");
  const uv = new Float32Array(pos.count * 2);
  const t = (pose.rotation * Math.PI) / 180;
  const c = Math.cos(t);
  const s = Math.sin(t);
  for (let i = 0; i < pos.count; i++) {
    const lx = pos.getX(i);
    const lz = pos.getZ(i);
    // Same transform as the plan (and the mesh's rotation.y = -rotation).
    const wx = pose.x + lx * c - lz * s;
    const wz = pose.y + lx * s + lz * c;
    uv[i * 2] = (wx - photo.x) / photo.width;
    uv[i * 2 + 1] = 1 - (wz - photo.y) / photo.height;
  }
  geometry.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  return geometry;
};

/** Walls: straight extrusion of the footprint (no bevel, so the height is exact). */

/** One facade bay: this wide (ft), one storey this tall (ft), a window in the middle. */
export const FACADE_BAY_FT = 12;
export const FACADE_STOREY_FT = 10;

/**
 * Walls as one quad per outline edge, with texture coordinates in facade bays: each wall holds a
 * whole number of bays (so windows never get cut at corners) and each storey is one texture
 * repeat. Walls too short for a window show plain siding. Normals face out.
 */
export const buildFacadeWalls = (pts: P[], height: number, unitsPerFoot = 1) => {
  const n = pts.length;
  let area = 0;
  for (let i = 0; i < n; i++) {
    const a = pts[i], b = pts[(i + 1) % n];
    area += a.x * b.y - b.x * a.y;
  }
  const storeys = Math.max(1, Math.round(height / unitsPerFoot / FACADE_STOREY_FT));
  const pos: number[] = [];
  const nor: number[] = [];
  const uv: number[] = [];
  const index: number[] = [];
  for (let i = 0; i < n; i++) {
    const a = pts[i], b = pts[(i + 1) % n];
    const ex = b.x - a.x, ez = b.y - a.y;
    const len = Math.hypot(ex, ez);
    if (len < 1e-6) continue;
    // Outward: for a positive-area outline (plan y down) the outside is to the left of a -> b.
    const sign = area > 0 ? 1 : -1;
    const nx = (sign * ez) / len, nz = (-sign * ex) / len;
    const bays = Math.round(len / unitsPerFoot / FACADE_BAY_FT);
    const u1 = bays > 0 ? bays : 0.25;
    const base = pos.length / 3;
    pos.push(a.x, 0, a.y, b.x, 0, b.y, b.x, height, b.y, a.x, height, a.y);
    for (let k = 0; k < 4; k++) nor.push(nx, 0, nz);
    uv.push(0, 0, u1, 0, u1, storeys, 0, storeys);
    // Front faces wind counter-clockwise seen from outside.
    if (area > 0) index.push(base, base + 2, base + 1, base, base + 3, base + 2);
    else index.push(base, base + 1, base + 2, base, base + 2, base + 3);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute("normal", new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(index);
  return g;
};

/**
 * Doors where the user marked a door next to a wall: the point on the nearest wall (within
 * `maxFt`), and the wall's outward direction there. Local building coordinates.
 */
export const doorsOnWalls = (pts: P[], doors: P[], unitsPerFoot = 1, maxFt = 6) => {
  const n = pts.length;
  let area = 0;
  for (let i = 0; i < n; i++) area += pts[i].x * pts[(i + 1) % n].y - pts[(i + 1) % n].x * pts[i].y;
  const sign = area > 0 ? 1 : -1;
  const out: { x: number; y: number; nx: number; ny: number }[] = [];
  for (const d of doors) {
    let best: { x: number; y: number; nx: number; ny: number; dist: number } | null = null;
    for (let i = 0; i < n; i++) {
      const a = pts[i], b = pts[(i + 1) % n];
      const ex = b.x - a.x, ey = b.y - a.y;
      const len2 = ex * ex + ey * ey;
      const len = Math.sqrt(len2);
      // A door needs a wall at least 3.5 ft long; keep it clear of the corners.
      if (len < 3.5 * unitsPerFoot) continue;
      const margin = (1.75 * unitsPerFoot) / len;
      const t = Math.min(1 - margin, Math.max(margin, ((d.x - a.x) * ex + (d.y - a.y) * ey) / len2));
      const x = a.x + ex * t, y = a.y + ey * t;
      const dist = Math.hypot(d.x - x, d.y - y);
      if (!best || dist < best.dist) best = { x, y, nx: (sign * ey) / len, ny: (-sign * ex) / len, dist };
    }
    if (best && best.dist <= maxFt * unitsPerFoot) out.push({ x: best.x, y: best.y, nx: best.nx, ny: best.ny });
  }
  return out;
};
