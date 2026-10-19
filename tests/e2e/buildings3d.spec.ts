// Pure-logic tests (no browser page) for 3D building roofs.
import { test, expect } from "@playwright/test";
import * as THREE from "three";
import { applyPhotoUVs, buildRoof, buildWalls, chooseRoof, orientedRect, rectilinearParts } from "../../src/three/buildings";

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
    const g = buildWalls(rect(40, 20), 12);
    g.computeBoundingBox();
    const box = g.boundingBox as THREE.Box3;
    expect(box.max.y - box.min.y).toBeCloseTo(12, 5);
    expect(box.max.x - box.min.x).toBeCloseTo(40, 5);
  });
});
