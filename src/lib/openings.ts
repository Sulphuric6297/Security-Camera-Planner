// Windows and doors in a building's outer walls: placing them on the nearest wall, the automatic
// layout (one window per bay and storey), and where each one sits. Pure geometry in the building's
// local frame (plan units).
import { getEdgeOutwardNormal } from "./geometry";
import { enclosedWalls } from "./openParts";
import type { Opening, OpeningKind } from "../types";

type P = { x: number; y: number };

export const OPENING_DEFAULTS: Record<OpeningKind, { label: string; widthFt: number; heightFt: number; sillFt: number }> = {
  window: { label: "Window", widthFt: 3, heightFt: 4.25, sillFt: 3 },
  "picture-window": { label: "Picture window", widthFt: 6, heightFt: 5, sillFt: 2.5 },
  door: { label: "Door", widthFt: 3, heightFt: 6.8, sillFt: 0 },
  "double-door": { label: "Double door", widthFt: 6, heightFt: 6.8, sillFt: 0 },
  slider: { label: "Sliding door", widthFt: 6, heightFt: 6.8, sillFt: 0 },
  "garage-door": { label: "Garage door", widthFt: 16, heightFt: 7, sillFt: 0 }
};

export const isDoor = (k: OpeningKind) => k !== "window" && k !== "picture-window";

export type WallPiece = { a: P; b: P; out: P };

/** The walls windows and doors can go in: the outline's edges, or with porches set into the house
 * (`inset`, their corner lists) the walls left around them, the porch's back wall included. */
export const wallPieces = (outline: P[], inset: P[][] = []): WallPiece[] =>
  inset.length ? enclosedWalls(outline, inset) : outline.map((a, i) => ({ a, b: outline[(i + 1) % outline.length], out: getEdgeOutwardNormal(outline, i) }));

/** The wall piece nearest a point, the point's distance along it, and the distance to it. */
export const nearestPiece = (pieces: WallPiece[], p: P) => {
  let best = { index: -1, at: 0, dist: Infinity, len: 0 };
  pieces.forEach((w, i) => {
    const dx = w.b.x - w.a.x, dy = w.b.y - w.a.y;
    const len = Math.hypot(dx, dy);
    if (len < 1e-6) return;
    const t = Math.max(0, Math.min(len, ((p.x - w.a.x) * dx + (p.y - w.a.y) * dy) / len));
    const d = Math.hypot(p.x - (w.a.x + (dx / len) * t), p.y - (w.a.y + (dy / len) * t));
    if (d < best.dist) best = { index: i, at: t, dist: d, len };
  });
  return best;
};

/** Where an opening's middle would be from the older edge + distance form. */
const legacyPoint = (outline: P[], o: Opening): P | null => {
  if (o.edge === undefined || o.at === undefined) return null;
  const a = outline[o.edge], b = outline[(o.edge + 1) % outline.length];
  if (!a || !b) return null;
  const len = Math.hypot(b.x - a.x, b.y - a.y) || 1;
  return { x: a.x + ((b.x - a.x) / len) * o.at, y: a.y + ((b.y - a.y) / len) * o.at };
};

/** An opening's point (its middle, on a wall line). */
export const openingPoint = (outline: P[], o: Opening): P | null => (o.x !== undefined && o.y !== undefined ? { x: o.x, y: o.y } : legacyPoint(outline, o));

/** Where an opening sits: its middle on the nearest wall (kept clear of the wall's ends), that
 * wall's direction and outward normal. */
export const openingPlace = (outline: P[], o: Opening, pieces: WallPiece[] = wallPieces(outline)) => {
  const p = openingPoint(outline, o);
  if (!p) return null;
  const near = nearestPiece(pieces, p);
  if (near.index < 0) return null;
  const w = pieces[near.index];
  const dir = { x: (w.b.x - w.a.x) / near.len, y: (w.b.y - w.a.y) / near.len };
  const at = near.len > o.width ? Math.max(o.width / 2, Math.min(near.len - o.width / 2, near.at)) : near.len / 2;
  return { x: w.a.x + dir.x * at, y: w.a.y + dir.y * at, dir, normal: w.out, len: near.len, at, piece: near.index };
};

/** A point moved onto the nearest wall (for dragging an opening along the walls). */
export const snapToWall = (pieces: WallPiece[], p: P, width: number): P | null => {
  const near = nearestPiece(pieces, p);
  if (near.index < 0) return null;
  const w = pieces[near.index];
  const at = near.len > width ? Math.max(width / 2, Math.min(near.len - width / 2, near.at)) : near.len / 2;
  return { x: w.a.x + ((w.b.x - w.a.x) / near.len) * at, y: w.a.y + ((w.b.y - w.a.y) / near.len) * at };
};

/** The wall nearest a point: edge index, distance along it, and the distance to it. */
export const wallAt = (outline: P[], p: P) => {
  const near = nearestPiece(wallPieces(outline), p);
  return { edge: near.index, at: near.at, dist: near.dist, len: near.len };
};

/** A new opening of a kind at a point on (or near) a wall. */
export const openingAt = (outline: P[], p: P, kind: OpeningKind, upf: number, pieces: WallPiece[] = wallPieces(outline)): Opening => {
  const d = OPENING_DEFAULTS[kind];
  const near = nearestPiece(pieces, p);
  const width = Math.min(d.widthFt * upf, Math.max(1.5 * upf, near.len - 1 * upf));
  const at = snapToWall(pieces, p, width) ?? p;
  return { id: `o${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`, kind, x: at.x, y: at.y, width, height: d.heightFt * upf, sill: d.sillFt * upf };
};

/** Wall height (to the eaves) for a number of stories: about 9.5 ft each plus a foot of foundation;
 * a story and a half is a one-story wall with a tall roof's rooms above. */
export const STORY_PRESETS: { label: string; stories: number; wallFt: number }[] = [
  { label: "1", stories: 1, wallFt: 10.5 },
  { label: "1½", stories: 1, wallFt: 14 },
  { label: "2", stories: 2, wallFt: 20 },
  { label: "3", stories: 3, wallFt: 29.5 }
];
/** How many full stories a wall this tall holds. */
export const storiesOf = (wallHeight: number, upf: number) => Math.max(1, Math.round((wallHeight / upf - 1) / 9.5));

/**
 * The automatic layout, as editable openings: a window in the middle of every bay (about 12 ft) of
 * every wall, one per storey (about 10 ft), and a door where the user marked one.
 */
export const autoOpenings = (outline: P[], wallHeight: number, upf: number, doors: P[] = []): Opening[] => {
  const out: Opening[] = [];
  const storeys = storiesOf(wallHeight, upf);
  const storyH = wallHeight / storeys;
  const w = OPENING_DEFAULTS.window;
  outline.forEach((a, i) => {
    const b = outline[(i + 1) % outline.length];
    const len = Math.hypot(b.x - a.x, b.y - a.y);
    const bays = Math.round(len / upf / 12);
    for (let k = 0; k < bays; k++) {
      const t = (k + 0.5) / bays;
      for (let s = 0; s < storeys; s++) out.push({ id: `w${i}-${k}-${s}`, kind: "window", x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, width: w.widthFt * upf, height: w.heightFt * upf, sill: w.sillFt * upf + s * storyH });
    }
  });
  for (const d of doors) {
    const door = openingAt(outline, d, "door", upf);
    // The door takes the place of a ground-floor window it would overlap
    const kept = out.filter(o => !overlaps(o, door, 0.5 * upf));
    out.length = 0;
    out.push(...kept, door);
  }
  return out;
};

/** Whether two openings overlap (side by side on a wall, and in height). */
export const overlaps = (a: Opening, b: Opening, gap = 0) => {
  if (a.x === undefined || b.x === undefined || a.y === undefined || b.y === undefined) return false;
  return Math.hypot(a.x - b.x, a.y - b.y) < (a.width + b.width) / 2 + gap && a.sill < b.sill + b.height && b.sill < a.sill + a.height;
};

/** Add an opening, taking out any it would overlap (as a window gives way to a new door). */
export const placeOpening = (list: Opening[], o: Opening, upf: number) => [...list.filter(q => !overlaps(q, o, 0.3 * upf)), o];
