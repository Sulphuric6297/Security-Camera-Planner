// Spots to protect made from your own buildings: a spot in front of every door and garage door,
// optionally every ground-floor window, and one on each driveway (a driveway drawn near the house,
// or a group of parked cars near it). They follow the doors, driveways and cars as those move.
import { isOwnBuilding } from "./items";
import { OPENING_DEFAULTS, autoOpenings, isDoor, openingPlace, wallPieces } from "./openings";
import { insetParts, openPartsOf } from "./openParts";
import { pointInPolygonXY } from "./geometry";
import { buildingLocalPoints, buildingWorldPoints, rotatePoint } from "./planGeom";
import { DEFAULT_BUILDING } from "../constants";
import type { BuildingItem, CanvasItem, ParkingItem, PavingItem, TargetKind } from "../types";

export type ProtectFrom = { doors: boolean; windows: boolean; driveways: boolean };
export const DEFAULT_PROTECT: ProtectFrom = { doors: true, windows: false, driveways: true };
export const protectFrom = (b: BuildingItem): ProtectFrom => ({ ...DEFAULT_PROTECT, ...b.protect });

export type LinkedSpot = { key: string; buildingId: string; kind: TargetKind; label: string; x: number; y: number };

/** Which side of the house a direction faces (plan y down is south). */
const side = (n: { x: number; y: number }) => {
  const a = (Math.atan2(n.x, -n.y) * 180) / Math.PI; // 0 = north, clockwise
  return ["north", "east", "south", "west"][Math.round((((a % 360) + 360) % 360) / 90) % 4];
};

const distToOutline = (pts: { x: number; y: number }[], p: { x: number; y: number }) => {
  let best = Infinity;
  pts.forEach((a, i) => {
    const b = pts[(i + 1) % pts.length];
    const dx = b.x - a.x, dy = b.y - a.y;
    const t = Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.y - a.y) * dy) / (dx * dx + dy * dy || 1)));
    best = Math.min(best, Math.hypot(p.x - (a.x + dx * t), p.y - (a.y + dy * t)));
  });
  return best;
};

export const spotsFromBuildings = (items: CanvasItem[], upf: number): LinkedSpot[] => {
  const out: LinkedSpot[] = [];
  const own = (items.filter(i => i.type === "building") as BuildingItem[]).filter(b => isOwnBuilding(b) && !b.openSides);
  for (const b of own) {
    const s = protectFrom(b);
    const skip = new Set(b.protectSkip ?? []);
    const outline = buildingLocalPoints(b);
    const pieces = wallPieces(outline, insetParts(outline, openPartsOf(b)));
    const wall = b.wallHeight ?? DEFAULT_BUILDING.wallHeight * upf;
    const openings = b.openings ?? (s.windows ? autoOpenings(outline, wall, upf) : []);
    const named = new Map<string, number>();
    openings.forEach((o, idx) => {
      const door = isDoor(o.kind);
      if (door ? !s.doors : !s.windows || o.sill > 6 * upf) return;
      const key = `${b.id}:${o.id ?? idx}`;
      if (skip.has(key)) return;
      const place = openingPlace(outline, o, pieces);
      if (!place) return;
      const d = (door ? 5 : 3) * upf;
      const r = rotatePoint({ x: place.x + place.normal.x * d, y: place.y + place.normal.y * d }, b.rotation);
      const facing = side(rotatePoint(place.normal, b.rotation));
      const name = `${OPENING_DEFAULTS[o.kind].label}, ${facing} side`;
      const n = (named.get(name) ?? 0) + 1;
      named.set(name, n);
      out.push({ key, buildingId: b.id, kind: door ? "door" : "window", label: n > 1 ? `${name} ${n}` : name, x: b.x + r.x, y: b.y + r.y });
    });
  }
  const outlines = own.filter(b => protectFrom(b).driveways).map(b => ({ b, pts: buildingWorldPoints(b) }));
  // Driveways drawn on the map: a spot at the end by the nearest of your buildings (within 60 ft),
  // where the cars park
  const paved = (items.filter(i => i.type === "paving" && (i as PavingItem).kind === "driveway") as PavingItem[]).map(pv => ({ pv, pts: buildingWorldPoints(pv as unknown as BuildingItem) }));
  const drives = new Map<string, number>();
  for (const { pv, pts } of paved) {
    // Points around its edge, and how far each is from the nearest of your buildings
    const samples: { p: { x: number; y: number }; b: BuildingItem; d: number }[] = [];
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i], q = pts[(i + 1) % pts.length];
      for (let k = 0; k < 16; k++) {
        const p = { x: a.x + ((q.x - a.x) * k) / 16, y: a.y + ((q.y - a.y) * k) / 16 };
        for (const o of outlines) {
          const d = distToOutline(o.pts, p);
          if (d < 60 * upf) samples.push({ p, b: o.b, d });
        }
      }
    }
    if (!samples.length) continue;
    const best = samples.reduce((m, x) => (x.d < m.d ? x : m));
    const b = best.b;
    // The middle of the end by the house (every point about as close as the closest)
    const end = samples.filter(x => x.b === b && x.d <= best.d + 1 * upf);
    const p = { x: end.reduce((m, x) => m + x.p.x, 0) / end.length, y: end.reduce((m, x) => m + x.p.y, 0) / end.length };
    const key = `${b.id}:pave:${pv.id}`;
    if ((b.protectSkip ?? []).includes(key)) continue;
    // 10 ft in from that end, toward the middle of the driveway
    const cx = pts.reduce((m, q) => m + q.x, 0) / pts.length, cy = pts.reduce((m, q) => m + q.y, 0) / pts.length;
    const len = Math.hypot(cx - p.x, cy - p.y);
    const step = len > 0 ? Math.min(10 * upf, len) / len : 0;
    const n = (drives.get(b.id) ?? 0) + 1;
    drives.set(b.id, n);
    out.push({ key, buildingId: b.id, kind: "driveway", label: n > 1 ? `Driveway ${n}` : "Driveway", x: p.x + (cx - p.x) * step, y: p.y + (cy - p.y) * step });
  }
  // Other driveways: parked cars (not on a drawn driveway), each counted for the nearest of your
  // buildings (within 60 ft), in groups of cars parked together
  const cars = (items.filter(i => i.type === "parking") as ParkingItem[]).filter(c => !paved.some(d => pointInPolygonXY(c, d.pts)));
  const groups = new Map<string, ParkingItem[][]>();
  for (const c of cars) {
    let best: { b: BuildingItem; d: number } | null = null;
    for (const o of outlines) {
      const d = distToOutline(o.pts, c);
      if (d < 60 * upf && (!best || d < best.d)) best = { b: o.b, d };
    }
    if (!best) continue;
    const list = groups.get(best.b.id) ?? [];
    const near = list.find(g => g.some(q => Math.hypot(q.x - c.x, q.y - c.y) < 22 * upf));
    if (near) near.push(c);
    else list.push([c]);
    groups.set(best.b.id, list);
  }
  groups.forEach((list, id) => {
    const b = own.find(x => x.id === id)!;
    const skip = new Set(b.protectSkip ?? []);
    const before = drives.get(id) ?? 0;
    list.forEach((g, k) => {
      const x = g.reduce((m, c) => m + c.x, 0) / g.length, y = g.reduce((m, c) => m + c.y, 0) / g.length;
      // Keyed by the first car, so the spot keeps its settings while cars move
      const key = `${id}:drive:${g[0].id}`;
      if (skip.has(key)) return;
      out.push({ key, buildingId: id, kind: "driveway", label: list.length + before > 1 ? `Driveway ${k + 1 + before}` : "Driveway", x, y });
    });
  });
  return out;
};
