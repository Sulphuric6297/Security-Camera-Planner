// Pure-logic tests (no browser page): finding trees and parked cars on an aerial photo.
import { test, expect } from "@playwright/test";
import { detectTrees, detectVehicles } from "../../src/lib/geo/detect";

// 100 x 75 m at 25 cm per pixel: a textured lawn with two tree crowns, a house with its shadow,
// and a driveway with a red car on it.
const W = 400, H = 300, MPP = 0.25;
const TREES = [{ x: 100, y: 100, r: 16 }, { x: 320, y: 70, r: 24 }];
const ROOF = { x0: 180, y0: 60, x1: 240, y1: 100 };
const SHADOW = 10; // px, south-east of the roof
const DRIVE = { x0: 160, y0: 200, x1: 240, y1: 260 };
const CAR = { x: 200, y: 230, l: 18, w: 8 };

const scene = () => {
  const data = new Uint8ClampedArray(W * H * 4);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const h = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
      const n = (h - Math.floor(h) - 0.5) * 30;
      let c = [80 + n, 120 + n, 60 + n * 0.5];
      const inRoof = x >= ROOF.x0 && x < ROOF.x1 && y >= ROOF.y0 && y < ROOF.y1;
      const inShadow = !inRoof && x >= ROOF.x0 + SHADOW && x < ROOF.x1 + SHADOW && y >= ROOF.y0 + SHADOW && y < ROOF.y1 + SHADOW;
      if (inShadow) c = c.map(v => v * 0.45);
      for (const t of TREES) {
        if (Math.hypot(x - t.x, y - t.y) < t.r) {
          const k = Math.sin(Math.floor(x / 2) * 91.7 + Math.floor(y / 2) * 47.3) * 9631.7;
          const leaf = (k - Math.floor(k) - 0.5) * 60;
          c = [40 + leaf * 0.6, 75 + leaf, 32 + leaf * 0.4];
        }
      }
      if (inRoof) c = [70, 72, 78];
      if (x >= DRIVE.x0 && x < DRIVE.x1 && y >= DRIVE.y0 && y < DRIVE.y1) c = [95 + n * 0.2, 95 + n * 0.2, 98 + n * 0.2];
      if (Math.abs(x - CAR.x) < CAR.l / 2 && Math.abs(y - CAR.y) < CAR.w / 2) c = [180, 30, 35];
      const i = (y * W + x) * 4;
      data[i] = c[0]; data[i + 1] = c[1]; data[i + 2] = c[2]; data[i + 3] = 255;
    }
  }
  return { data, width: W, height: H };
};
const exclude = (x: number, y: number) => x >= ROOF.x0 && x < ROOF.x1 && y >= ROOF.y0 && y < ROOF.y1;

test.describe("trees and cars from the photo", () => {
  test("finds both tree crowns at about their size, and not the house's shadow or the lawn", () => {
    const trees = detectTrees(scene(), { metersPerPx: MPP, exclude });
    expect(trees).toHaveLength(2);
    for (const t of TREES) {
      const hit = trees.find(d => Math.hypot(d.x - t.x, d.y - t.y) < 8);
      expect(hit, `tree at ${t.x},${t.y}`).toBeTruthy();
      expect(hit!.radiusPx).toBeGreaterThan(t.r * 0.7);
      expect(hit!.radiusPx).toBeLessThan(t.r * 1.3);
    }
  });

  test("finds the parked car on the driveway, lengthwise", () => {
    const cars = detectVehicles(scene(), { metersPerPx: MPP, exclude });
    expect(cars).toHaveLength(1);
    const [car] = cars;
    expect(Math.hypot(car.x - CAR.x, car.y - CAR.y)).toBeLessThan(2);
    expect(car.lengthPx * MPP).toBeGreaterThan(3.8);
    expect(car.lengthPx * MPP).toBeLessThan(5.2);
    const axis = ((car.angleDeg % 180) + 180) % 180;
    expect(Math.min(axis, 180 - axis)).toBeLessThan(5); // along x
  });

  test("a plain lawn has no trees or cars", () => {
    const img = scene();
    const lawn = { ...img, data: new Uint8ClampedArray(img.data.length) };
    for (let i = 0; i < W * H; i++) {
      const x = i % W, y = (i / W) | 0;
      const h = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
      const n = (h - Math.floor(h) - 0.5) * 30;
      lawn.data.set([80 + n, 120 + n, 60 + n * 0.5, 255], i * 4);
    }
    expect(detectTrees(lawn, { metersPerPx: MPP })).toHaveLength(0);
    expect(detectVehicles(lawn, { metersPerPx: MPP })).toHaveLength(0);
  });
});
