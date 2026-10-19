// Pure-logic tests (no browser page): new items get real-world sizes at any map scale.
import { test, expect } from "@playwright/test";
import * as THREE from "three";
import { VEHICLE_SIZES, createItem, migrateItems, nextCameraIndex } from "../../src/lib/items";
import { create3dCar } from "../../src/three/models";

test.describe("real-world item sizes", () => {
  test("the 3D car is as long as its stated length (bumpers included), not longer", () => {
    for (const type of ["sedan", "suv", "truck", "van"] as const) {
      const car = createItem("parking", 0, 0, { vehicleType: type }) as any;
      const box = new THREE.Box3().setFromObject(create3dCar({ ...car, rotation: 0 }));
      const len = box.max.z - box.min.z;
      expect(len, type).toBeLessThanOrEqual(car.height * 1.01);
      expect(len, type).toBeGreaterThan(car.height * 0.97);
      // Body width plus mirrors: mirrors add about 7% on each side, like real ones
      expect(box.max.x - box.min.x, type).toBeLessThan(car.width * 1.16);
    }
  });

  test("the 3D car's body faces outward everywhere (no side or nose shows its inside)", () => {
    for (const type of ["sedan", "suv", "truck", "van", "hatchback", "sports"] as const) {
      const car = createItem("parking", 0, 0, { vehicleType: type }) as any;
      const body = create3dCar({ ...car, rotation: 0 }).children[0] as THREE.Mesh;
      const pos = body.geometry.getAttribute("position"), idx = body.geometry.getIndex()!;
      // A closed surface wound one way throughout: every edge is used once in each direction, and
      // its signed volume is positive only when that way is outward.
      const edges = new Map<string, number>();
      let volume = 0;
      const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
      for (let t = 0; t < idx.count; t += 3) {
        const [i, j, k] = [idx.getX(t), idx.getX(t + 1), idx.getX(t + 2)];
        for (const [p, q] of [[i, j], [j, k], [k, i]]) edges.set(`${p},${q}`, (edges.get(`${p},${q}`) ?? 0) + 1);
        a.fromBufferAttribute(pos, i); b.fromBufferAttribute(pos, j); c.fromBufferAttribute(pos, k);
        volume += a.dot(new THREE.Vector3().crossVectors(b, c)) / 6;
      }
      const twice = [...edges.values()].filter(n => n > 1).length;
      expect(twice, type).toBe(0);
      expect(volume, type).toBeGreaterThan(car.width * car.height * 0.5);
    }
  });

  test("vehicles, trees and buildings are real size in feet", () => {
    const car = createItem("parking", 0, 0) as any;
    expect(car.width).toBeCloseTo(VEHICLE_SIZES.sedan.width, 5);
    expect(car.height).toBeCloseTo(VEHICLE_SIZES.sedan.length, 5);
    expect(car.vehicleHeight).toBeLessThan(6);
    // A real car is ~6 x 16 ft, not 24 x 48.
    expect(car.width).toBeLessThan(8);
    expect(car.height).toBeLessThan(20);
    const tree = createItem("tree", 0, 0) as any;
    expect(tree.radius * 2).toBeGreaterThan(15);
    expect(tree.radius * 2).toBeLessThan(40);
  });

  test("sizes follow the map scale (plan units per foot)", () => {
    for (const u of [0.25, 1, 3]) {
      const car = createItem("parking", 0, 0, { unitsPerFoot: u }) as any;
      expect(car.width / u).toBeCloseTo(VEHICLE_SIZES.sedan.width, 5);
      expect(car.height / u).toBeCloseTo(VEHICLE_SIZES.sedan.length, 5);
      const b = createItem("building", 0, 0, { unitsPerFoot: u }) as any;
      expect(b.width / u).toBeCloseTo(50, 5);
      const t = createItem("tree", 0, 0, { unitsPerFoot: u }) as any;
      expect(t.radius / u).toBeCloseTo(10, 5);
    }
  });

  test("old saves: untouched 24 x 48 ft vehicles become real-size cars", () => {
    const old = { id: "v", type: "parking", x: 0, y: 0, rotation: 0, width: 24, height: 48, vehicleHeight: 14, color: "#fff", vehicleType: "van" } as any;
    const edited = { ...old, id: "e", width: 9 };
    const [fixed, kept] = migrateItems([old, edited]) as any[];
    expect(fixed.width).toBeCloseTo(VEHICLE_SIZES.van.width, 5);
    expect(fixed.height).toBeCloseTo(VEHICLE_SIZES.van.length, 5);
    expect(kept).toEqual(edited);
  });
});


test("new cameras take the next free number, never repeating one", () => {
  const cams = (labels: string[]) => labels.map(label => ({ type: "camera", label }));
  expect(nextCameraIndex([])).toBe(0); // -> Camera 1
  expect(nextCameraIndex(cams(["Camera 1", "Camera 2"]))).toBe(2); // -> Camera 3
  // Camera 2 of 3 was deleted: the next is Camera 4, not a second Camera 3
  expect(nextCameraIndex(cams(["Camera 1", "Camera 3"]))).toBe(3);
  // Renamed cameras still count
  expect(nextCameraIndex(cams(["Front door", "Garage"]))).toBe(2);
});
