// A driveway or walkway that bends: a line along its middle, made smooth, with an even width and
// square ends. Pure geometry in the paving's own frame (plan units).
type P = { x: number; y: number };

/**
 * The point `u` (0-1) of the way along the smooth curve from `pts[seg]` to `pts[seg + 1]`: a
 * centripetal Catmull-Rom spline (no loops or overshoot), carrying on straight past each end.
 */
export const pathPointAt = (pts: P[], seg: number, u: number): P => {
  const at = (i: number): P =>
    i < 0 ? { x: 2 * pts[0].x - pts[1].x, y: 2 * pts[0].y - pts[1].y }
      : i >= pts.length ? { x: 2 * pts[pts.length - 1].x - pts[pts.length - 2].x, y: 2 * pts[pts.length - 1].y - pts[pts.length - 2].y }
      : pts[i];
  const p0 = at(seg - 1), p1 = at(seg), p2 = at(seg + 1), p3 = at(seg + 2);
  const knot = (a: P, b: P) => Math.max(1e-6, Math.sqrt(Math.hypot(b.x - a.x, b.y - a.y)));
  const t1 = knot(p0, p1), t2 = t1 + knot(p1, p2), t3 = t2 + knot(p2, p3);
  const t = t1 + (t2 - t1) * u;
  const lerp = (a: P, b: P, ta: number, tb: number) => ({ x: ((tb - t) * a.x + (t - ta) * b.x) / (tb - ta), y: ((tb - t) * a.y + (t - ta) * b.y) / (tb - ta) });
  const a1 = lerp(p0, p1, 0, t1), a2 = lerp(p1, p2, t1, t2), a3 = lerp(p2, p3, t2, t3);
  return lerp(lerp(a1, a2, 0, t2), lerp(a2, a3, t1, t3), t1, t2);
};

/** A smooth curve through the points (see pathPointAt), sampled about `step` apart. Two points give a straight line. */
export const smoothPath = (pts: P[], step: number): P[] => {
  if (pts.length < 2) return pts.map(p => ({ ...p }));
  const out: P[] = [{ ...pts[0] }];
  for (let i = 0; i + 1 < pts.length; i++) {
    const n = Math.max(1, Math.ceil(Math.hypot(pts[i + 1].x - pts[i].x, pts[i + 1].y - pts[i].y) / step));
    for (let k = 1; k <= n; k++) out.push(k === n ? { ...pts[i + 1] } : pathPointAt(pts, i, k / n));
  }
  return out;
};

/**
 * The outline of a strip `width` wide along a smooth path through `pts`: one side out and the other
 * back, square across at both ends. On a bend tighter than half the width the inside edge is kept
 * from folding back on itself.
 */
export const pathOutline = (pts: P[], width: number, step = Math.max(width / 6, 0.5)): P[] => {
  const line = smoothPath(pts, step);
  if (line.length < 2) return [];
  const half = width / 2;
  const left: P[] = [], right: P[] = [];
  const last = line.length - 1;
  line.forEach((p, i) => {
    // At the ends, straight across the curve's own direction there (square ends)
    const a = i === last ? pathPointAt(pts, pts.length - 2, 0.999) : line[Math.max(0, i - 1)];
    const b = i === 0 ? pathPointAt(pts, 0, 0.001) : line[Math.min(last, i + 1)];
    const len = Math.hypot(b.x - a.x, b.y - a.y) || 1;
    const n = { x: -(b.y - a.y) / len, y: (b.x - a.x) / len };
    left.push({ x: p.x + n.x * half, y: p.y + n.y * half });
    right.push({ x: p.x - n.x * half, y: p.y - n.y * half });
  });
  // Drop inside-edge points that would step backwards (a fold on a very tight bend)
  const unfold = (side: P[]) => side.filter((p, i) => {
    if (i === 0 || i === side.length - 1) return true;
    const a = line[i - 1], b = line[i + 1];
    const q = side[i - 1];
    return (p.x - q.x) * (b.x - a.x) + (p.y - q.y) * (b.y - a.y) > 0;
  });
  const outline = [...unfold(left), ...unfold(right).reverse()];
  // Points in a straight run add nothing (and make slivers when it is cut into triangles)
  const kept = outline.filter((p, i) => {
    const a = outline[(i + outline.length - 1) % outline.length], b = outline[(i + 1) % outline.length];
    const len = Math.hypot(b.x - a.x, b.y - a.y) || 1;
    return Math.abs((p.x - a.x) * (b.y - a.y) - (p.y - a.y) * (b.x - a.x)) / len > 0.01 * Math.max(width, 1e-6) / 12;
  });
  // Wound the same way as a rectangle's corners
  const area2 = kept.reduce((sum, p, i) => { const q = kept[(i + 1) % kept.length]; return sum + p.x * q.y - q.x * p.y; }, 0);
  return area2 < 0 ? kept.reverse() : kept;
};

/** The size of the box around some points, and its middle. */
export const pointsBox = (pts: P[]) => {
  const xs = pts.map(p => p.x), ys = pts.map(p => p.y);
  const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
  return { width: maxX - minX, height: maxY - minY, center: { x: (minX + maxX) / 2, y: (minY + maxY) / 2 } };
};

/**
 * A bendable path for a paving shape that has none yet: along the long middle of the box around
 * its outline, as wide as the box is across.
 */
export const pathFromShape = (pts: P[]): { path: P[]; width: number } => {
  const box = pointsBox(pts);
  const c = box.center;
  return box.height >= box.width
    ? { path: [{ x: c.x, y: c.y - box.height / 2 }, { x: c.x, y: c.y + box.height / 2 }], width: box.width }
    : { path: [{ x: c.x - box.width / 2, y: c.y }, { x: c.x + box.width / 2, y: c.y }], width: box.height };
};

/** What to store for a paving path: the path, its width, and its outline and size (what draws it). */
export const pavingFromPath = (path: P[], width: number) => {
  const points = pathOutline(path, width);
  const box = pointsBox(points);
  return { path: path.map(p => ({ ...p })), pathWidth: width, points, width: box.width, height: box.height };
};

/** Unit vector to the left of the path at its point `i` (the side `pathOutline` draws first). */
const leftAt = (pts: P[], i: number): P => {
  const n = pts.length;
  const a = i < n - 1 ? pts[i] : pathPointAt(pts, n - 2, 0.999);
  const b = i < n - 1 ? pathPointAt(pts, i, 0.001) : pts[n - 1];
  const len = Math.hypot(b.x - a.x, b.y - a.y) || 1;
  return { x: -(b.y - a.y) / len, y: (b.x - a.x) / len };
};

/**
 * A new width for a path, from one side: that edge moves and the other stays where it is (the line
 * down the middle shifts by half the change, toward the side that moved). `side` is 1 for the left
 * edge, -1 for the right; with `both`, the path grows evenly on both sides instead.
 */
export const widenPath = (pts: P[], width: number, newWidth: number, side: 1 | -1, both = false): { path: P[]; width: number } => {
  if (both || pts.length < 2) return { path: pts.map(p => ({ ...p })), width: newWidth };
  const shift = ((newWidth - width) / 2) * side;
  return {
    path: pts.map((p, i) => {
      const n = leftAt(pts, i);
      return { x: p.x + n.x * shift, y: p.y + n.y * shift };
    }),
    width: newWidth
  };
};
