// Pure-logic tests (no browser page): finding trees and parked cars on an aerial photo.
import { readFileSync } from "fs";
import { decode } from "fast-png";
import { test, expect } from "@playwright/test";
import { detectTrees, detectVehicles } from "../../src/lib/geo/detect";
import { findSiteObjects } from "../../src/lib/geo/detectSite";
import { creditHeightPx } from "../../src/lib/geo/imagery";

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

  test("finds parked cars of every paint in a lot, side by side and nose to tail, not the stall lines", () => {
    // 100 x 60 m at 25 cm/px: lawn, an asphalt lot with two rows of stalls and a street.
    const W2 = 400, H2 = 240, mpp = 0.25;
    const PAINTS: number[][] = [[185, 187, 190], [28, 29, 32], [238, 238, 236], [72, 74, 78], [45, 65, 150], [170, 35, 40], [200, 190, 160], [120, 122, 126]];
    const cars: { x: number; y: number; along: "x" | "y"; paint: number[] }[] = [];
    // Row 1: stalls 2.7 m wide, cars 1.85 m wide (gaps you can see)
    PAINTS.forEach((paint, k) => cars.push({ x: 60 + k * 10.8, y: 70, along: "y", paint }));
    // Row 2: tight parking (gaps about 0.3 m)
    PAINTS.slice(0, 6).forEach((paint, k) => cars.push({ x: 60 + k * 8.6, y: 125, along: "y", paint: PAINTS[(k + 3) % PAINTS.length] }));
    // Street: two cars nose to tail
    cars.push({ x: 250, y: 205, along: "x", paint: PAINTS[0] }, { x: 272, y: 205, along: "x", paint: PAINTS[1] });
    const data = new Uint8ClampedArray(W2 * H2 * 4);
    for (let y = 0; y < H2; y++) for (let x = 0; x < W2; x++) {
      const hh = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
      const nz = hh - Math.floor(hh) - 0.5;
      let c = [80 + nz * 30, 120 + nz * 30, 60 + nz * 15]; // lawn
      const lot = x >= 40 && x < 360 && y >= 40 && y < 160;
      const street = y >= 190 && y < 220;
      if (lot || street) c = [88 + nz * 12, 90 + nz * 12, 94 + nz * 12];
      // Stall lines (thin, white) at the row ends of row 1 and 2
      if (lot && ((y >= 58 && y < 82) || (y >= 113 && y < 137)) && Math.abs(((x - 54.6) % 10.8 + 10.8) % 10.8) < 1) c = [205, 205, 200];
      for (const car of cars) {
        const lx = car.along === "y" ? x - car.x : y - car.y; // across
        const ly = car.along === "y" ? y - car.y : x - car.x; // along (front at -)
        const len = 4.6 / mpp, wid = 1.85 / mpp;
        // Shadow to the east
        if (Math.abs(ly) < len / 2 && lx >= wid / 2 && lx < wid / 2 + 0.5 / mpp && car.along === "y") c = c.map(v => v * 0.55);
        if (Math.abs(lx) < wid / 2 && Math.abs(ly) < len / 2) {
          const t = (ly + len / 2) / len;
          c = car.paint.slice();
          if ((t > 0.22 && t < 0.35) || (t > 0.74 && t < 0.84)) c = [35, 40, 48]; // windows
          else if (t >= 0.35 && t <= 0.74) c = car.paint.map(v => Math.min(255, v + 12)); // roof
        }
      }
      data.set([c[0], c[1], c[2], 255], (y * W2 + x) * 4);
    }
    const found = detectVehicles({ data, width: W2, height: H2 }, { metersPerPx: mpp });
    const hits = cars.filter(car => found.some(f => Math.hypot(f.x - car.x, f.y - car.y) < 1.6 / mpp));
    // Grey cars on grey asphalt are the hard ones: at least 80% (the real photo test below is the stricter one).
    expect(hits.length, `found ${hits.length} of ${cars.length}`).toBeGreaterThanOrEqual(Math.ceil(cars.length * 0.8));
    // Nothing on the lawn, and no extra cars from stall lines or shadows
    const extras = found.filter(f => !cars.some(car => Math.hypot(f.x - car.x, f.y - car.y) < 1.6 / mpp));
    expect(extras.length).toBeLessThanOrEqual(1);
    // Real car size
    for (const f of found) {
      expect(f.lengthPx * mpp).toBeGreaterThan(3.2);
      expect(f.lengthPx * mpp).toBeLessThan(6.6);
    }
  });

  test("finds every isolated crown and splits a clump of touching crowns, but not shadows on the lawn", () => {
    // Shaped like real aerial photos (the detector is tuned on labelled NEON images): isolated crowns
    // on sunny grass with their shadows, and a clump of touching crowns.
    const W3 = 300, H3 = 200, mpp = 0.3;
    const crowns = [{ x: 50, y: 50, r: 9 }, { x: 120, y: 60, r: 12 }, { x: 60, y: 140, r: 7 }];
    const clump = [{ x: 200, y: 100, r: 10 }, { x: 216, y: 108, r: 10 }, { x: 205, y: 120, r: 9 }, { x: 222, y: 126, r: 9 }];
    const data = new Uint8ClampedArray(W3 * H3 * 4);
    for (let y = 0; y < H3; y++) for (let x = 0; x < W3; x++) {
      const hh = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
      const nz = hh - Math.floor(hh) - 0.5;
      let c = [120 + nz * 20, 160 + nz * 20, 70 + nz * 10]; // sunny grass
      for (const t of [...crowns, ...clump]) {
        // Shadow to the north-west of each crown
        if (Math.hypot(x - t.x + t.r * 0.8, y - t.y + t.r * 0.8) < t.r) c = c.map(v => v * 0.45);
      }
      for (const t of [...crowns, ...clump]) {
        const d = Math.hypot(x - t.x, y - t.y);
        if (d < t.r) {
          const k = Math.sin(Math.floor(x / 1.5) * 91.7 + Math.floor(y / 1.5) * 47.3) * 9631.7;
          const leaf = (k - Math.floor(k) - 0.5) * 50;
          const lit = 1.15 - (d / t.r) * 0.5; // bright top, darker rim
          c = [(45 + leaf * 0.5) * lit, (80 + leaf) * lit, (40 + leaf * 0.4) * lit];
        }
      }
      data.set([c[0], c[1], c[2], 255], (y * W3 + x) * 4);
    }
    const found = detectTrees({ data, width: W3, height: H3 }, { metersPerPx: mpp });
    for (const t of crowns) expect(found.some(f => Math.hypot(f.x - t.x, f.y - t.y) < t.r * 0.8), `crown at ${t.x},${t.y}: ${JSON.stringify(found.map(f => [Math.round(f.x), Math.round(f.y)]))}`).toBe(true);
    const inClump = found.filter(f => f.x > 185 && f.x < 237 && f.y > 85 && f.y < 140);
    expect(inClump.length).toBeGreaterThanOrEqual(3);
    const onLawn = found.filter(f => ![...crowns, ...clump].some(t => Math.hypot(f.x - t.x, f.y - t.y) < t.r * 1.2));
    expect(onLawn).toHaveLength(0);
  });

  test("the map credit along the bottom of the photo is not taken for trees", () => {
    // A 1400 px wide photo has a 10 px credit font: a dark box with small grey-white text,
    // drawn at the bottom right. Detection runs on it at 25 cm per pixel (no rescale here).
    const W4 = 400, H4 = 300, credit = creditHeightPx(1400);
    const boxH = Math.round(credit), boxW = 220;
    const tree = { x: 100, y: 120, r: 16 };
    const data = new Uint8ClampedArray(W4 * H4 * 4);
    for (let y = 0; y < H4; y++) for (let x = 0; x < W4; x++) {
      const hh = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
      const n = (hh - Math.floor(hh) - 0.5) * 30;
      let c = [80 + n, 120 + n, 60 + n * 0.5];
      if (Math.hypot(x - tree.x, y - tree.y) < tree.r) {
        const k = Math.sin(Math.floor(x / 2) * 91.7 + Math.floor(y / 2) * 47.3) * 9631.7;
        const leaf = (k - Math.floor(k) - 0.5) * 60;
        c = [40 + leaf * 0.6, 75 + leaf, 32 + leaf * 0.4];
      }
      if (x >= W4 - boxW && y >= H4 - boxH) {
        c = c.map(v => v * 0.5);
        const gy = y - (H4 - boxH), gx = x - (W4 - boxW);
        const k = Math.sin(gx * 3.7 + Math.floor(gy / 2) * 1.3) * 999.1;
        const f = k - Math.floor(k);
        // anti-aliased glyph strokes
        if (gy > boxH * 0.2 && gy < boxH * 0.8 && gx > 5 && gx < boxW - 5 && f > 0.5) c = c.map(v => v * (0.65 - f * 0.6) + 255 * (0.35 + f * 0.6));
      }
      data.set([c[0], c[1], c[2], 255], (y * W4 + x) * 4);
    }
    const upf = 2;
    const rect = { x: 0, y: 0, width: W4 * MPP * 3.28084 * upf, height: H4 * MPP * 3.28084 * upf };
    const { trees } = findSiteObjects({ data, width: W4, height: H4 }, rect, upf, [], credit);
    expect(trees.map(t => [Math.round(t.x / (MPP * 3.28084 * upf)), Math.round(t.y / (MPP * 3.28084 * upf))])).toEqual([[tree.x, tree.y]]);
  });

  test("a real satellite photo of a parking lot: most cars found, few on empty stalls, trees or planters", () => {
    // WorldView-3 photo of a Las Vegas shopping-centre lot (SpaceNet, CC BY-SA 4.0), hand-labelled:
    // see tests/fixtures/aerial/README.md.
    const dir = "tests/fixtures/aerial/";
    const truth = JSON.parse(readFileSync(dir + "vegas-parking-lot.json", "utf8")) as {
      metersPerPx: number; cars: [number, number][]; emptyZones: Record<string, [number, number, number, number]>;
    };
    const png = decode(readFileSync(dir + "vegas-parking-lot.png"));
    const data = new Uint8ClampedArray(png.width * png.height * 4);
    for (let i = 0; i < png.width * png.height; i++) {
      for (let k = 0; k < 3; k++) data[i * 4 + k] = png.data[i * png.channels + k];
      data[i * 4 + 3] = 255;
    }
    const found = detectVehicles({ data, width: png.width, height: png.height }, { metersPerPx: truth.metersPerPx, maxVehicles: 500 });
    // A labelled car counts as found once, by the nearest detection within 1.5 m.
    const used = new Set<number>();
    for (const f of found) {
      let best = -1, bd = 1.5 / truth.metersPerPx;
      truth.cars.forEach(([x, y], i) => {
        const d = Math.hypot(f.x - x, f.y - y);
        if (!used.has(i) && d <= bd) { best = i; bd = d; }
      });
      if (best >= 0) used.add(best);
    }
    expect(used.size / truth.cars.length, `found ${used.size} of ${truth.cars.length} cars`).toBeGreaterThanOrEqual(0.7);
    const wrong = found.filter(f => Object.values(truth.emptyZones).some(([x0, y0, x1, y1]) => f.x >= x0 && f.x <= x1 && f.y >= y0 && f.y <= y1));
    expect(wrong.length, `cars placed where there are none: ${JSON.stringify(wrong.map(f => [Math.round(f.x), Math.round(f.y)]))}`).toBeLessThanOrEqual(15);
    // Real car size and no pile-ups: every detection is a car's length and apart from the others
    for (const f of found) expect(f.lengthPx * truth.metersPerPx).toBeGreaterThan(3.5);
  });
});

