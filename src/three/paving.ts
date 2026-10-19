// Driveways, walkways and patios: a paved shape lying on the ground. It is cut along the terrain's
// grid so it follows every slope the ground has, and textured in real feet (asphalt, concrete with
// its control joints, gravel, or pavers in a running bond) lined up with the shape itself.
import * as THREE from "three";
import { buildingWorldPoints, rotatePoint } from "../lib/planGeom";
import type { BuildingItem, PavingItem, PavingSurface } from "../types";

type P = { x: number; y: number };

/** Just above the ground (and the aerial photo on it), so it never flickers into the terrain. */
export const PAVING_LIFT = 0.06;

/** How many feet one copy of each surface's texture covers. */
const TILE_FT: Record<PavingSurface, number> = { asphalt: 8, concrete: 5, gravel: 4, pavers: 2 };
const BASE_COLOR: Record<PavingSurface, string> = { asphalt: "#3c3f42", concrete: "#bdb8ae", gravel: "#a59d8c", pavers: "#a8775a" };

/** The part of a polygon inside an axis-aligned box (Sutherland-Hodgman, one side at a time). */
export const clipToBox = (poly: P[], x0: number, y0: number, x1: number, y1: number) => {
  const sides: [(p: P) => boolean, (a: P, b: P) => P][] = [
    [p => p.x >= x0, (a, b) => ({ x: x0, y: a.y + ((b.y - a.y) * (x0 - a.x)) / (b.x - a.x) })],
    [p => p.x <= x1, (a, b) => ({ x: x1, y: a.y + ((b.y - a.y) * (x1 - a.x)) / (b.x - a.x) })],
    [p => p.y >= y0, (a, b) => ({ x: a.x + ((b.x - a.x) * (y0 - a.y)) / (b.y - a.y), y: y0 })],
    [p => p.y <= y1, (a, b) => ({ x: a.x + ((b.x - a.x) * (y1 - a.y)) / (b.y - a.y), y: y1 })]
  ];
  let out = poly;
  for (const [inside, cross] of sides) {
    if (!out.length) break;
    const input = out;
    out = [];
    input.forEach((cur, i) => {
      const prev = input[(i + input.length - 1) % input.length];
      if (inside(cur)) {
        if (!inside(prev)) out.push(cross(prev, cur));
        out.push(cur);
      } else if (inside(prev)) out.push(cross(prev, cur));
    });
  }
  return out;
};

const area2 = (pts: P[]) => pts.reduce((s, p, i) => { const q = pts[(i + 1) % pts.length]; return s + p.x * q.y - q.x * p.y; }, 0);

const textures: Partial<Record<PavingSurface, THREE.CanvasTexture>> = {};
const surfaceTexture = (surface: PavingSurface) => {
  if (typeof document === "undefined") return null;
  if (textures[surface]) return textures[surface]!;
  const S = 256;
  const c = document.createElement("canvas");
  c.width = c.height = S;
  const g = c.getContext("2d");
  if (!g) return null;
  // A repeatable random pattern, the same every time
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const speckle = (n: number, size: number, colors: string[]) => {
    for (let i = 0; i < n; i++) {
      g.fillStyle = colors[Math.floor(rnd() * colors.length)];
      const s = size * (0.5 + rnd());
      g.fillRect(rnd() * S, rnd() * S, s, s);
    }
  };
  g.fillStyle = BASE_COLOR[surface];
  g.fillRect(0, 0, S, S);
  if (surface === "asphalt") {
    speckle(5000, 1.6, ["#2e3134", "#4a4d50", "#55585a", "#353739"]);
  } else if (surface === "concrete") {
    speckle(2500, 1.5, ["#c6c2b9", "#b2ada3", "#cbc7bf"]);
    // A control joint along two edges: a joint every 5 ft once the texture repeats
    g.fillStyle = "rgba(70,66,60,0.55)";
    g.fillRect(0, 0, S, 2);
    g.fillRect(0, 0, 2, S);
  } else if (surface === "gravel") {
    for (let i = 0; i < 2600; i++) {
      const v = 120 + Math.floor(rnd() * 90);
      g.fillStyle = `rgb(${v + 12},${v + 6},${v - 8})`;
      g.beginPath();
      g.arc(rnd() * S, rnd() * S, 1 + rnd() * 2.2, 0, Math.PI * 2);
      g.fill();
    }
  } else {
    // 4 x 8 inch pavers in a running bond: 6 courses and 3 pavers a course in 2 ft
    const course = S / 6, len = S / 3;
    g.fillStyle = "#6f5a4c";
    g.fillRect(0, 0, S, S);
    for (let r = 0; r < 6; r++) {
      const off = r % 2 ? len / 2 : 0;
      for (let k = -1; k < 3; k++) {
        const tone = rnd();
        g.fillStyle = tone < 0.33 ? "#a8775a" : tone < 0.66 ? "#9c6b50" : "#b58566";
        g.fillRect(k * len + off + 1.5, r * course + 1.5, len - 3, course - 3);
      }
    }
    speckle(800, 1.2, ["rgba(60,40,30,0.25)", "rgba(255,240,220,0.15)"]);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  tex.userData.shared = true;
  textures[surface] = tex;
  return tex;
};

/**
 * The paving as a mesh in plan/world coordinates (place it at the origin): its outline cut along
 * the terrain grid (`grid`, the size of a terrain cell) with every corner at the ground's height.
 */
export const createPaving = (item: PavingItem, groundAt: (x: number, y: number) => number, grid: number, unitsPerFoot = 1) => {
  let outline = buildingWorldPoints(item as unknown as BuildingItem);
  if (area2(outline) < 0) outline = [...outline].reverse();
  const xs = outline.map(p => p.x), ys = outline.map(p => p.y);
  const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
  const cell = grid > 0 ? grid : 20;
  const tile = TILE_FT[item.surface] * unitsPerFoot;
  const pos: number[] = [], uv: number[] = [];
  for (let cx = Math.floor(minX / cell) * cell; cx < maxX; cx += cell) {
    for (let cy = Math.floor(minY / cell) * cell; cy < maxY; cy += cell) {
      const piece = clipToBox(outline, cx, cy, cx + cell, cy + cell);
      if (piece.length < 3 || Math.abs(area2(piece)) < 1e-6) continue;
      const tris = THREE.ShapeUtils.triangulateShape(piece.map(p => new THREE.Vector2(p.x, p.y)), []);
      for (const t of tris) {
        // Wound so the top faces up (plan y is world z: a positive plan area would face down)
        const [a, b, c] = t.map(k => piece[k]);
        const order = (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x) > 0 ? [t[0], t[2], t[1]] : [t[0], t[1], t[2]];
        for (const k of order) {
          const p = piece[k];
          pos.push(p.x, groundAt(p.x, p.y) + PAVING_LIFT, p.y);
          // Texture in the paving's own frame, so pavers and joints run along it
          const l = rotatePoint({ x: p.x - item.x, y: p.y - item.y }, -item.rotation);
          uv.push(l.x / tile, l.y / tile);
        }
      }
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  geo.computeVertexNormals();
  const map = surfaceTexture(item.surface);
  const mat = new THREE.MeshStandardMaterial({
    color: map ? 0xffffff : BASE_COLOR[item.surface],
    map,
    roughness: item.surface === "asphalt" ? 0.88 : 0.95,
    metalness: 0,
    polygonOffset: true,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -4
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.name = "paving";
  mesh.receiveShadow = true;
  // A flat surface on the ground casts no shadow of its own (kept inside a group, so the scene
  // doesn't turn shadows on for it)
  mesh.castShadow = false;
  const group = new THREE.Group();
  const inner = new THREE.Group();
  inner.add(mesh);
  group.add(inner);
  group.userData.flat = true;
  return group;
};
