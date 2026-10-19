// Pure-logic tests (no browser page) for 3D building roofs.
import { test, expect } from "@playwright/test";
import * as THREE from "three";
import { applyPhotoUVs, buildFacadeWalls, buildRoof, chooseRoof, doorsOnWalls, orientedRect, rectilinearParts } from "../../src/three/buildings";
import { straightSkeleton } from "../../src/three/roofSkeleton";

const rect = (w: number, d: number, angle = 0) => {
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  return [[-w / 2, -d / 2], [w / 2, -d / 2], [w / 2, d / 2], [-w / 2, d / 2]].map(([x, y]) => ({ x: x * c - y * s, y: x * s + y * c }));
};

test.describe("3D building roofs", () => {
  test("houses get pitched roofs, big or odd-shaped buildings get flat ones", () => {
    expect(chooseRoof(rect(50, 30), 12)).toBe("gable");
    expect(chooseRoof(rect(40, 36), 12)).toBe("hip");
    expect(chooseRoof(rect(200, 120), 25)).toBe("flat"); // warehouse
    expect(chooseRoof(rect(50, 30), 60)).toBe("flat"); // tall commercial
    // An odd, not square-cornered shape stays flat
    const odd = [{ x: 0, y: 0 }, { x: 60, y: 0 }, { x: 45, y: 30 }, { x: 10, y: 50 }, { x: -5, y: 25 }];
    expect(chooseRoof(odd, 12)).toBe("flat");
  });

  test("L- and T-shaped houses get pitched roofs that follow their wings", () => {
    const lShape = [{ x: 0, y: 0 }, { x: 60, y: 0 }, { x: 60, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 60 }, { x: 0, y: 60 }];
    expect(chooseRoof(lShape, 12)).toBe("gable");
    const parts = rectilinearParts(lShape)!;
    expect(parts).toHaveLength(2);
    // The wings cover the footprint exactly: total area of the union = footprint area
    const roof = buildRoof(lShape, "gable", { eave: 0 });
    expect(roof.rise).toBeCloseTo(10 * 0.5, 5); // 20 ft wide wings, 6/12 pitch
    roof.roof.computeBoundingBox();
    const b = roof.roof.boundingBox!;
    expect(b.max.x - b.min.x).toBeCloseTo(60, 3);
    expect(b.max.z - b.min.z).toBeCloseTo(60, 3);
    const tShape = [{ x: 0, y: 0 }, { x: 60, y: 0 }, { x: 60, y: 20 }, { x: 40, y: 20 }, { x: 40, y: 50 }, { x: 20, y: 50 }, { x: 20, y: 20 }, { x: 0, y: 20 }];
    expect(rectilinearParts(tShape)).toHaveLength(2);
    expect(chooseRoof(tShape, 12)).toBe("gable");
  });

  test("gable and hip roofs follow any outline: they cover exactly the footprint, starting at the walls", () => {
    // Projected roof area (gable walls are upright, so they add nothing)
    const projected = (g: THREE.BufferGeometry) => {
      const p = g.getAttribute("position");
      let sum = 0;
      for (let i = 0; i < p.count; i += 3) {
        const ax = p.getX(i), az = p.getZ(i), bx = p.getX(i + 1), bz = p.getZ(i + 1), cx = p.getX(i + 2), cz = p.getZ(i + 2);
        sum += Math.abs((bx - ax) * (cz - az) - (bz - az) * (cx - ax)) / 2;
      }
      return sum;
    };
    const area = (pts: { x: number; y: number }[]) => Math.abs(pts.reduce((s, p, i) => { const q = pts[(i + 1) % pts.length]; return s + p.x * q.y - q.x * p.y; }, 0)) / 2;
    const shapes = {
      // A store with a V-shaped notch in its front (like a real angled entrance)
      notch: [{ x: 0, y: 0 }, { x: 60, y: 0 }, { x: 60, y: 40 }, { x: 40, y: 40 }, { x: 30, y: 28 }, { x: 20, y: 40 }, { x: 0, y: 40 }],
      odd: [{ x: 0, y: 0 }, { x: 60, y: 0 }, { x: 45, y: 30 }, { x: 10, y: 50 }, { x: -5, y: 25 }],
      trapezoid: [{ x: 0, y: 0 }, { x: 50, y: 0 }, { x: 40, y: 30 }, { x: 10, y: 30 }],
      // A U with one angled wall (not square-cornered), turned
      u: [{ x: 0, y: 0 }, { x: 60, y: 0 }, { x: 60, y: 50 }, { x: 45, y: 50 }, { x: 45, y: 20 }, { x: 15, y: 20 }, { x: 10, y: 50 }, { x: 0, y: 50 }].map(p => ({ x: p.x * 0.9 + p.y * 0.3, y: -p.x * 0.3 + p.y * 0.9 }))
    };
    for (const [name, pts] of Object.entries(shapes)) {
      for (const kind of ["gable", "hip"] as const) {
        const roof = buildRoof(pts, kind, { pitch: 0.5, maxRise: 12 });
        expect(projected(roof.roof), `${name} ${kind}`).toBeCloseTo(area(pts), 0);
        expect(roof.rise, `${name} ${kind}`).toBeGreaterThan(3);
        expect(roof.rise).toBeLessThanOrEqual(12 + 1e-6);
        // Every roof point is over the footprint, and the roof's low edge is on the walls
        const p = roof.roof.getAttribute("position");
        for (let i = 0; i < p.count; i++) {
          const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
          expect(y).toBeGreaterThanOrEqual(-1e-6);
          const onWall = pts.some((a, k) => {
            const b = pts[(k + 1) % pts.length];
            const t = Math.max(0, Math.min(1, ((x - a.x) * (b.x - a.x) + (z - a.y) * (b.y - a.y)) / ((b.x - a.x) ** 2 + (b.y - a.y) ** 2)));
            return Math.hypot(x - a.x - t * (b.x - a.x), z - a.y - t * (b.y - a.y)) < 1e-3;
          });
          if (y < 1e-6) expect(onWall, `${name} ${kind}: eave point on a wall`).toBe(true);
        }
      }
    }
    // The notch stays open; the store is roofed on both sides of it
    const roof = new THREE.Mesh(buildRoof(shapes.notch, "gable").roof, new THREE.MeshBasicMaterial({ side: THREE.DoubleSide }));
    const hitsAt = (x: number, z: number) =>
      new THREE.Raycaster(new THREE.Vector3(x, 100, z), new THREE.Vector3(0, -1, 0)).intersectObject(roof).length > 0;
    expect(hitsAt(30, 36)).toBe(false);
    expect(hitsAt(10, 36)).toBe(true);
    expect(hitsAt(50, 36)).toBe(true);
    expect(hitsAt(30, 10)).toBe(true);
  });

  test("the roof skeleton handles square-cornered shapes (many corners meeting at once)", () => {
    const area = (pts: { x: number; y: number }[]) => Math.abs(pts.reduce((s, p, i) => { const q = pts[(i + 1) % pts.length]; return s + p.x * q.y - q.x * p.y; }, 0)) / 2;
    const shapes = [
      [{ x: 0, y: 0 }, { x: 60, y: 0 }, { x: 60, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 60 }, { x: 0, y: 60 }], // L
      [{ x: 0, y: 0 }, { x: 60, y: 0 }, { x: 60, y: 20 }, { x: 40, y: 20 }, { x: 40, y: 50 }, { x: 20, y: 50 }, { x: 20, y: 20 }, { x: 0, y: 20 }], // T
      [{ x: 0, y: 0 }, { x: 60, y: 0 }, { x: 60, y: 50 }, { x: 45, y: 50 }, { x: 45, y: 20 }, { x: 15, y: 20 }, { x: 15, y: 50 }, { x: 0, y: 50 }], // U
      [{ x: 0, y: 0 }, { x: 30, y: 0 }, { x: 30, y: 30 }, { x: 0, y: 30 }], // square: a pyramid
      [{ x: 0, y: 0 }, { x: 40, y: 0 }, { x: 40, y: 10 }, { x: 30, y: 10 }, { x: 30, y: 20 }, { x: 40, y: 20 }, { x: 40, y: 30 }, { x: 0, y: 30 }] // E-ish notch
    ];
    for (const pts of shapes) {
      const sk = straightSkeleton(pts);
      expect(sk).not.toBeNull();
      let covered = 0;
      for (const face of sk!.faces) for (const piece of face) for (let k = 1; k + 1 < piece.length; k++) {
        const [a, b, c] = [piece[0], piece[k], piece[k + 1]];
        covered += Math.abs((b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x)) / 2;
      }
      expect(covered).toBeCloseTo(area(pts), 3);
      // Every edge has a roof face
      expect(sk!.faces.every(f => f.length > 0)).toBe(true);
    }
  });

  test("a gable roof on a plain outline from the skeleton matches the rectangle roof", () => {
    // 40 x 20 rotated a little and with one extra point on an edge (so it takes the general path)
    const pts = [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 40, y: 0 }, { x: 40, y: 20 }, { x: 0, y: 20 }];
    const sk = straightSkeleton(pts)!;
    expect(sk.points).toHaveLength(4); // the straight-through point is dropped
    // Short ends come to a point, long sides are trapezoids; ridge at half the width
    const heights = sk.faces.flat(2).map(p => p.z);
    expect(Math.max(...heights)).toBeCloseTo(10, 6);
    expect(sk.faces.filter(f => f.length === 1 && f[0].length === 3)).toHaveLength(2);
  });

  test("a house with a small corner cut out (a patio) keeps the notch open under its roof", () => {
    // 42 x 53 ft with a 12 x 18 ft corner missing: fills 90% of its bounding box
    const house = [{ x: 0, y: 0 }, { x: 42, y: 0 }, { x: 42, y: 35 }, { x: 30, y: 35 }, { x: 30, y: 53 }, { x: 0, y: 53 }];
    expect(chooseRoof(house, 12)).toBe("gable");
    const roof = new THREE.Mesh(buildRoof(house, "gable", { eave: 0 }).roof, new THREE.MeshBasicMaterial({ side: THREE.DoubleSide }));
    const hitsAt = (x: number, z: number) =>
      new THREE.Raycaster(new THREE.Vector3(x, 100, z), new THREE.Vector3(0, -1, 0)).intersectObject(roof).length > 0;
    expect(hitsAt(36, 44)).toBe(false); // the patio
    expect(hitsAt(15, 44)).toBe(true);
    expect(hitsAt(36, 15)).toBe(true);
  });

  test("oriented rectangle follows a rotated footprint", () => {
    const r = orientedRect(rect(50, 30, 0.6));
    expect(r.a).toBeCloseTo(25, 4);
    expect(r.b).toBeCloseTo(15, 4);
  });

  test("gable roof: ridge along the long side, rise from the pitch, gable ends present", () => {
    const parts = buildRoof(rect(50, 30), "gable", { pitch: 0.5, eave: 1.5 });
    expect(parts.rise).toBeCloseTo(7.5, 5); // half-width 15 ft x 6/12
    expect(parts.gables).not.toBeNull();
    const pos = parts.roof.getAttribute("position");
    let maxY = -Infinity;
    for (let i = 0; i < pos.count; i++) maxY = Math.max(maxY, pos.getY(i));
    expect(maxY).toBeCloseTo(7.5, 5);
  });

  test("hip roof has no gable walls; flat roof has no rise", () => {
    expect(buildRoof(rect(40, 36), "hip").gables).toBeNull();
    expect(buildRoof(rect(40, 36), "flat").rise).toBe(0);
  });

  test("roof photo coordinates stay on the roof, even under the eaves", () => {
    const pts = rect(40, 20);
    const parts = buildRoof(pts, "gable", { eave: 2 });
    // Building at plan (100, 50), photo covering 0..200 x 0..100
    applyPhotoUVs(parts.roof, { x: 100, y: 50, rotation: 0 }, { x: 0, y: 0, width: 200, height: 100 });
    const uv = parts.roof.getAttribute("uv");
    for (let i = 0; i < uv.count; i++) {
      const wx = uv.getX(i) * 200;
      const wz = (1 - uv.getY(i)) * 100;
      expect(Math.abs(wx - 100)).toBeLessThanOrEqual(20 + 1e-6);
      expect(Math.abs(wz - 50)).toBeLessThanOrEqual(10 + 1e-6);
    }
  });

  test("walls are exactly the wall height (no bevel)", () => {
    const g = buildFacadeWalls(rect(40, 20), 12);
    g.computeBoundingBox();
    const box = g.boundingBox as THREE.Box3;
    expect(box.max.y - box.min.y).toBeCloseTo(12, 5);
    expect(box.max.x - box.min.x).toBeCloseTo(40, 5);
  });

  test("walls hold whole window bays, face out either way round, and short walls get no window", () => {
    for (const pts of [rect(40, 20), [...rect(40, 20)].reverse()]) {
      const g = buildFacadeWalls(pts, 12);
      const pos = g.getAttribute("position"), nor = g.getAttribute("normal"), uv = g.getAttribute("uv");
      const index = g.getIndex()!;
      const bays: number[] = [];
      for (let q = 0; q < pos.count / 4; q++) {
        const v = q * 4;
        const mid = { x: (pos.getX(v) + pos.getX(v + 1)) / 2, z: (pos.getZ(v) + pos.getZ(v + 1)) / 2 };
        // Normal points away from the middle of the building
        expect(nor.getX(v) * mid.x + nor.getZ(v) * mid.z).toBeGreaterThan(0);
        bays.push(Math.max(uv.getX(v), uv.getX(v + 1)));
        expect(Math.max(uv.getY(v + 2), uv.getY(v + 3))).toBe(1); // one storey
      }
      // 40 ft walls: 3 bays of 12 ft; 20 ft walls: 2
      expect(bays.sort()).toEqual([2, 2, 3, 3]);
      // Triangles wind counter-clockwise seen from outside (front faces out)
      for (let t = 0; t < index.count; t += 3) {
        const [a, b, c] = [0, 1, 2].map(k => new THREE.Vector3().fromBufferAttribute(pos, index.getX(t + k)));
        const n = new THREE.Vector3().subVectors(b, a).cross(new THREE.Vector3().subVectors(c, a));
        expect(n.dot(new THREE.Vector3().fromBufferAttribute(nor, index.getX(t)))).toBeGreaterThan(0);
      }
    }
    // A 24 ft tall wall has two storeys; a 3 ft jog has plain siding (less than one bay, no window)
    const tall = buildFacadeWalls([{ x: 0, y: 0 }, { x: 3, y: 0 }, { x: 3, y: 24 }, { x: 0, y: 24 }], 24).getAttribute("uv");
    expect(tall.getY(2)).toBe(2);
    expect(Math.max(tall.getX(0), tall.getX(1))).toBe(0.25);
  });

  test("marked doors go on the nearest wall, facing out, clear of the corners", () => {
    const pts = rect(40, 20); // walls at x = +-20, y = +-10
    const [front, corner] = doorsOnWalls(pts, [{ x: 5, y: 13 }, { x: 19.5, y: 12 }, { x: 0, y: 40 }]);
    expect(front).toMatchObject({ x: 5, y: 10, nx: 0, ny: 1 });
    expect(corner.y).toBe(10);
    expect(corner.x).toBeCloseTo(18.25, 5);
    // The far one (30 ft from any wall) is not a door on this building
    expect(doorsOnWalls(pts, [{ x: 0, y: 40 }])).toHaveLength(0);
    // Plan units at 2 per foot: the same door, the same place
    const big = pts.map(p => ({ x: p.x * 2, y: p.y * 2 }));
    expect(doorsOnWalls(big, [{ x: 10, y: 26 }], 2)[0]).toMatchObject({ x: 10, y: 20 });
  });
});
