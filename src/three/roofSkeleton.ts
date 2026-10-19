// Straight skeleton of a building outline: every wall edge sends a sloped roof plane inward at the
// same rate, and where the planes meet they form the hips, valleys and ridges of a real roof. It
// works for any simple outline (angled walls, notches, wings), unlike a roof fitted to a rectangle.
//
// Method: move all edges inward together, stopping at each event (an edge shrinks to nothing, or a
// corner pointing inward hits another edge and splits the outline in two), and record the strip
// each edge sweeps as part of its roof face. Plan coordinates; "z" is how far the edges have moved.

export type SkeletonNode = { x: number; y: number; z: number };

type V2 = { x: number; y: number };
type Line = { nx: number; ny: number; c: number }; // inward normal; the edge sits at n·p = c + t
type Vert = { x: number; y: number; node: SkeletonNode };
type Poly = { verts: Vert[]; edges: number[]; t: number }; // edges[k] runs from verts[k] to verts[k+1]

export type Skeleton = {
  /** Roof face pieces for each input edge (index = edge from point i to i+1), each a convex polygon. */
  faces: SkeletonNode[][][];
  /** Flat tops left where the roof was capped at maxT (possibly concave polygons). */
  tops: SkeletonNode[][];
  /** The cleaned outline the faces belong to (faces[i] is the roof over its edge i to i+1). */
  points: V2[];
};

const signedArea = (p: V2[]) => {
  let a = 0;
  for (let i = 0; i < p.length; i++) {
    const q = p[(i + 1) % p.length];
    a += p[i].x * q.y - q.x * p[i].y;
  }
  return a / 2;
};

/**
 * The straight skeleton of a simple polygon, stopped at offset `maxT` (a flat top is left there).
 * Returns null if the outline is degenerate or the computation goes wrong (callers fall back).
 */
export const straightSkeleton = (input: V2[], maxT = Infinity): Skeleton | null => {
  // Clean the outline: no repeated points, no straight-through corners, counter-clockwise.
  let pts = input.filter((p, i) => {
    const q = input[(i + 1) % input.length];
    return Math.hypot(q.x - p.x, q.y - p.y) > 1e-6;
  });
  const minX = Math.min(...pts.map(p => p.x));
  const maxX = Math.max(...pts.map(p => p.x));
  const minY = Math.min(...pts.map(p => p.y));
  const maxY = Math.max(...pts.map(p => p.y));
  const scale = Math.max(maxX - minX, maxY - minY, 1e-6);
  const tol = scale * 1e-5;
  for (let changed = true; changed && pts.length > 3;) {
    changed = false;
    for (let i = 0; i < pts.length; i++) {
      const a = pts[(i + pts.length - 1) % pts.length];
      const b = pts[i];
      const c = pts[(i + 1) % pts.length];
      const cross = (b.x - a.x) * (c.y - b.y) - (b.y - a.y) * (c.x - b.x);
      const dot = (b.x - a.x) * (c.x - b.x) + (b.y - a.y) * (c.y - b.y);
      if (Math.abs(cross) < tol * Math.hypot(c.x - a.x, c.y - a.y) && dot > 0) {
        pts = pts.filter((_, j) => j !== i);
        changed = true;
        break;
      }
    }
  }
  if (pts.length < 3) return null;
  const reversed = signedArea(pts) < 0;
  const work = reversed ? pts.slice().reverse() : pts;
  const n = work.length;

  const lines: Line[] = work.map((p, i) => {
    const q = work[(i + 1) % n];
    const len = Math.hypot(q.x - p.x, q.y - p.y);
    const nx = -(q.y - p.y) / len;
    const ny = (q.x - p.x) / len;
    return { nx, ny, c: nx * p.x + ny * p.y };
  });
  const faces: SkeletonNode[][][] = work.map(() => []);
  const tops: SkeletonNode[][] = [];

  // Where a corner between two edges travels per unit of offset.
  const velocity = (a: number, b: number): V2 | null => {
    const la = lines[a];
    const lb = lines[b];
    const det = la.nx * lb.ny - la.ny * lb.nx;
    if (Math.abs(det) < 1e-9) return la.nx * lb.nx + la.ny * lb.ny > 0 ? { x: la.nx, y: la.ny } : null;
    return { x: (lb.ny - la.ny) / det, y: (la.nx - lb.nx) / det };
  };
  const dir = (e: number) => ({ x: lines[e].ny, y: -lines[e].nx });
  const segDist = (p: V2, a: V2, b: V2) => {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const l2 = dx * dx + dy * dy;
    const s = l2 > 0 ? Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.y - a.y) * dy) / l2)) : 0;
    return Math.hypot(p.x - a.x - s * dx, p.y - a.y - s * dy);
  };

  // Merge corners that met; drop corners between two pieces of the same edge.
  const tidy = (poly: Poly): Poly => {
    let verts = poly.verts;
    let edges = poly.edges;
    for (let changed = true; changed && verts.length > 2;) {
      changed = false;
      for (let i = 0; i < verts.length; i++) {
        const j = (i + 1) % verts.length;
        if (Math.hypot(verts[j].x - verts[i].x, verts[j].y - verts[i].y) < tol * 10) {
          // Corner j merges into i; i now leaves along j's outgoing edge.
          edges = edges.map((e, k) => (k === i ? edges[j] : e)).filter((_, k) => k !== j);
          verts = verts.filter((_, k) => k !== j);
          changed = true;
          break;
        }
        const h = (i + verts.length - 1) % verts.length;
        if (edges[h] === edges[i]) {
          verts = verts.filter((_, k) => k !== i);
          edges = edges.filter((_, k) => k !== i);
          changed = true;
          break;
        }
      }
    }
    return { verts, edges, t: poly.t };
  };

  const isReflex = (poly: Poly, i: number) => {
    const m = poly.verts.length;
    const a = dir(poly.edges[(i + m - 1) % m]);
    const b = dir(poly.edges[i]);
    return a.x * b.y - a.y * b.x < -1e-9;
  };

  // A corner pointing inward that touches another edge splits the outline in two.
  const split = (poly: Poly): Poly[] | null => {
    const m = poly.verts.length;
    for (let i = 0; i < m; i++) {
      if (!isReflex(poly, i)) continue;
      for (let k = 0; k < m; k++) {
        if (k === i || k === (i + m - 1) % m) continue;
        const a = poly.verts[k];
        const b = poly.verts[(k + 1) % m];
        if (segDist(poly.verts[i], a, b) > tol * 100) continue;
        const r = poly.verts[i];
        const partA: Poly = { verts: [], edges: [], t: poly.t };
        for (let j = i; ; j = (j + 1) % m) {
          partA.verts.push(j === i ? r : poly.verts[j]);
          partA.edges.push(poly.edges[j]);
          if (j === k) break;
        }
        const partB: Poly = { verts: [{ ...r }], edges: [poly.edges[k]], t: poly.t };
        for (let j = (k + 1) % m; j !== i; j = (j + 1) % m) {
          partB.verts.push(poly.verts[j]);
          partB.edges.push(poly.edges[j]);
        }
        return [partA, partB];
      }
    }
    return null;
  };

  const area = (poly: Poly) => Math.abs(signedArea(poly.verts));
  let queue: Poly[] = [{ verts: work.map(p => ({ x: p.x, y: p.y, node: { x: p.x, y: p.y, z: 0 } })), edges: work.map((_, i) => i), t: 0 }];
  let guard = 0;
  while (queue.length) {
    if (++guard > 2000) return null;
    let poly = tidy(queue.pop()!);
    if (poly.verts.length < 3 || area(poly) < tol * scale) continue;
    if (poly.t >= maxT - 1e-9) {
      tops.push(poly.verts.map(v => v.node));
      continue;
    }
    const parts = split(poly);
    if (parts) {
      queue.push(...parts);
      continue;
    }
    const m = poly.verts.length;
    const vel: V2[] = [];
    for (let i = 0; i < m; i++) {
      const v = velocity(poly.edges[(i + m - 1) % m], poly.edges[i]);
      if (!v || !Number.isFinite(v.x) || !Number.isFinite(v.y)) return null;
      vel.push(v);
    }
    // The next event: an edge shrinking to nothing, a corner hitting an edge, or the cap.
    let dt = maxT - poly.t;
    for (let k = 0; k < m; k++) {
      const a = poly.verts[k];
      const b = poly.verts[(k + 1) % m];
      const d = dir(poly.edges[k]);
      const len = (b.x - a.x) * d.x + (b.y - a.y) * d.y;
      const shrink = (vel[(k + 1) % m].x - vel[k].x) * d.x + (vel[(k + 1) % m].y - vel[k].y) * d.y;
      if (shrink < -1e-12) dt = Math.min(dt, Math.max(0, -len / shrink));
    }
    for (let i = 0; i < m; i++) {
      if (!isReflex(poly, i)) continue;
      const r = poly.verts[i];
      for (let k = 0; k < m; k++) {
        if (k === i || k === (i + m - 1) % m) continue;
        const L = lines[poly.edges[k]];
        const dist = L.nx * r.x + L.ny * r.y - (L.c + poly.t);
        const closing = 1 - (L.nx * vel[i].x + L.ny * vel[i].y);
        if (closing < 1e-9 || dist < -tol) continue;
        const s = Math.max(0, dist / closing);
        if (s >= dt) continue;
        // Does it land within that edge (as it will be then)?
        const hit = { x: r.x + vel[i].x * s, y: r.y + vel[i].y * s };
        const a = poly.verts[k];
        const b = poly.verts[(k + 1) % m];
        const a2 = { x: a.x + vel[k].x * s, y: a.y + vel[k].y * s };
        const b2 = { x: b.x + vel[(k + 1) % m].x * s, y: b.y + vel[(k + 1) % m].y * s };
        if (segDist(hit, a2, b2) < tol * 100) dt = s;
      }
    }
    if (!Number.isFinite(dt)) return null;
    const t = poly.t + dt;
    const moved: Vert[] = poly.verts.map((v, i) => {
      const x = v.x + vel[i].x * dt;
      const y = v.y + vel[i].y * dt;
      return { x, y, node: { x, y, z: t } };
    });
    // Corners that arrive at the same point share one roof node.
    for (let i = 0; i < m; i++) {
      const j = (i + 1) % m;
      if (Math.hypot(moved[j].x - moved[i].x, moved[j].y - moved[i].y) < tol * 10) moved[j].node = moved[i].node;
    }
    if (m > 1 && moved[0].node !== moved[m - 1].node && Math.hypot(moved[0].x - moved[m - 1].x, moved[0].y - moved[m - 1].y) < tol * 10) {
      const keep = moved[m - 1].node;
      for (let i = 0; i < m && Math.hypot(moved[i].x - keep.x, moved[i].y - keep.y) < tol * 10; i++) moved[i].node = keep;
    }
    for (let k = 0; k < m; k++) {
      const j = (k + 1) % m;
      const piece = [poly.verts[k].node, poly.verts[j].node, moved[j].node, moved[k].node].filter((p, idx, arr) => p !== arr[(idx + arr.length - 1) % arr.length]);
      if (piece.length >= 3) faces[poly.edges[k]].push(piece);
    }
    poly = { verts: moved, edges: poly.edges, t };
    queue.push(poly);
  }

  // Back to the caller's edge order (the outline may have been reversed or cleaned).
  const outFaces: SkeletonNode[][][] = pts.map(() => []);
  work.forEach((_, i) => {
    const original = reversed ? (n - 2 - i + n) % n : i;
    outFaces[original] = faces[i];
  });
  return { faces: outFaces, tops, points: pts };
};
