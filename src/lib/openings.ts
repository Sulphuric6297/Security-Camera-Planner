// Windows and doors in a building's outer walls: placing them on the nearest wall, the automatic
// layout (one window per bay and storey), and where each one sits. Pure geometry in the building's
// local frame (plan units).
import { getEdgeOutwardNormal } from "./geometry";
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

/** Where an opening sits: its middle at the wall face, the wall's direction and outward normal. */
export const openingPlace = (outline: P[], o: Opening) => {
  const a = outline[o.edge], b = outline[(o.edge + 1) % outline.length];
  if (!a || !b) return null;
  const len = Math.hypot(b.x - a.x, b.y - a.y);
  if (len < 1e-6) return null;
  const dir = { x: (b.x - a.x) / len, y: (b.y - a.y) / len };
  const at = Math.max(o.width / 2, Math.min(len - o.width / 2, o.at));
  return { x: a.x + dir.x * at, y: a.y + dir.y * at, dir, normal: getEdgeOutwardNormal(outline, o.edge), len, at };
};

/** The wall nearest a point: edge index, distance along it, and the distance to it. */
export const wallAt = (outline: P[], p: P) => {
  let best = { edge: 0, at: 0, dist: Infinity, len: 0 };
  outline.forEach((a, i) => {
    const b = outline[(i + 1) % outline.length];
    const dx = b.x - a.x, dy = b.y - a.y;
    const len = Math.hypot(dx, dy);
    if (len < 1e-6) return;
    const t = Math.max(0, Math.min(len, ((p.x - a.x) * dx + (p.y - a.y) * dy) / len));
    const d = Math.hypot(p.x - (a.x + (dx / len) * t), p.y - (a.y + (dy / len) * t));
    if (d < best.dist) best = { edge: i, at: t, dist: d, len };
  });
  return best;
};

/** A new opening of a kind at a point on (or near) a wall. */
export const openingAt = (outline: P[], p: P, kind: OpeningKind, upf: number): Opening => {
  const d = OPENING_DEFAULTS[kind];
  const w = wallAt(outline, p);
  const width = Math.min(d.widthFt * upf, Math.max(1.5 * upf, w.len - 1 * upf));
  return { kind, edge: w.edge, at: Math.max(width / 2, Math.min(w.len - width / 2, w.at)), width, height: d.heightFt * upf, sill: d.sillFt * upf };
};

/**
 * The automatic layout, as editable openings: a window in the middle of every bay (about 12 ft) of
 * every wall, one per storey (about 10 ft), and a door where the user marked one.
 */
export const autoOpenings = (outline: P[], wallHeight: number, upf: number, doors: P[] = []): Opening[] => {
  const out: Opening[] = [];
  const storeys = Math.max(1, Math.round(wallHeight / upf / 10));
  const w = OPENING_DEFAULTS.window;
  outline.forEach((a, i) => {
    const b = outline[(i + 1) % outline.length];
    const len = Math.hypot(b.x - a.x, b.y - a.y);
    const bays = Math.round(len / upf / 12);
    for (let k = 0; k < bays; k++) {
      for (let s = 0; s < storeys; s++) out.push({ kind: "window", edge: i, at: ((k + 0.5) * len) / bays, width: w.widthFt * upf, height: w.heightFt * upf, sill: (w.sillFt + s * 10) * upf });
    }
  });
  for (const d of doors) {
    const door = openingAt(outline, d, "door", upf);
    // The door takes the place of a ground-floor window it would overlap
    const clash = out.findIndex(o => o.edge === door.edge && o.sill < 5 * upf && Math.abs(o.at - door.at) < (o.width + door.width) / 2 + 0.5 * upf);
    if (clash >= 0) out.splice(clash, 1);
    out.push(door);
  }
  return out;
};

/** Whether two openings overlap on the same wall (side by side and in height). */
export const overlaps = (a: Opening, b: Opening, gap = 0) =>
  a.edge === b.edge && Math.abs(a.at - b.at) < (a.width + b.width) / 2 + gap && a.sill < b.sill + b.height && b.sill < a.sill + a.height;

/** Add an opening, taking out any it would overlap (as a window gives way to a new door). */
export const placeOpening = (list: Opening[], o: Opening, upf: number) => [...list.filter(q => !overlaps(q, o, 0.3 * upf)), o];
