// Pure-logic tests (no browser page) for lining building footprints up with aerial imagery.
import { test, expect } from "@playwright/test";
import { alignFootprints, toGray, type PxPoint } from "../../src/lib/geo/align";

// Small deterministic RNG so the synthetic scenes are identical on every run.
const rng = (seed: number) => () => {
  seed = (seed * 1664525 + 1013904223) >>> 0;
  return seed / 4294967296;
};

type Roof = { cx: number; cy: number; w: number; h: number; angle: number; color: [number, number, number] };

const rectCorners = (r: Roof): PxPoint[] => {
  const c = Math.cos(r.angle);
  const s = Math.sin(r.angle);
  return [
    [-r.w / 2, -r.h / 2],
    [r.w / 2, -r.h / 2],
    [r.w / 2, r.h / 2],
    [-r.w / 2, r.h / 2]
  ].map(([x, y]) => ({ x: r.cx + x * c - y * s, y: r.cy + x * s + y * c }));
};

const inside = (r: Roof, x: number, y: number) => {
  const c = Math.cos(-r.angle);
  const s = Math.sin(-r.angle);
  const dx = x - r.cx;
  const dy = y - r.cy;
  const u = dx * c - dy * s;
  const v = dx * s + dy * c;
  return Math.abs(u) <= r.w / 2 && Math.abs(v) <= r.h / 2 ? { u, v } : null;
};

/** A fake aerial photo: textured grass, a road, pitched roofs (two shades) with shadows, plus noise. */
const makeScene = (seed: number, size = 640, count = 14) => {
  const rand = rng(seed);
  const roofs: Roof[] = [];
  while (roofs.length < count) {
    const r: Roof = {
      cx: 60 + rand() * (size - 120),
      cy: 60 + rand() * (size - 120),
      w: 24 + rand() * 50,
      h: 20 + rand() * 36,
      angle: (rand() - 0.5) * 0.9,
      color: rand() < 0.5 ? [120, 115, 110] : [150, 95, 70]
    };
    if (roofs.every(o => Math.hypot(o.cx - r.cx, o.cy - r.cy) > (o.w + r.w) * 0.75)) roofs.push(r);
  }
  const data = new Uint8ClampedArray(size * size * 4);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const n = (rand() - 0.5) * 40;
      let col = [80 + n, 115 + n, 60 + n * 0.5];
      if (Math.abs(y - 0.35 * x - 200) < 9) col = [140 + n * 0.3, 140 + n * 0.3, 138];
      // shadow cast to the south-east of each roof
      for (const r of roofs) if (!inside(r, x, y) && inside(r, x - 5, y - 6)) col = col.map(v => v * 0.45);
      for (const r of roofs) {
        const hit = inside(r, x, y);
        if (hit) {
          const shade = hit.v < 0 ? 1.15 : 0.85; // two roof planes
          col = r.color.map(v => v * shade + n * 0.4);
        }
      }
      const i = (y * size + x) * 4;
      data[i] = col[0];
      data[i + 1] = col[1];
      data[i + 2] = col[2];
      data[i + 3] = 255;
    }
  }
  return { gray: toGray(data, size, size), roofs };
};

test.describe("footprint alignment", () => {
  test("finds a whole-area offset between footprints and the photo", () => {
    for (const seed of [1, 2, 3]) {
      const { gray, roofs } = makeScene(seed);
      const shift = { x: -7, y: 5 }; // footprints are 7 px west and 5 px south of the roofs
      const footprints = roofs.map(r => rectCorners(r).map(p => ({ x: p.x + shift.x, y: p.y + shift.y })));
      const res = alignFootprints(gray, footprints, 20);
      expect(res.confident).toBe(true);
      expect(Math.abs(res.global.x - -shift.x)).toBeLessThanOrEqual(1);
      expect(Math.abs(res.global.y - -shift.y)).toBeLessThanOrEqual(1);
      expect(res.gain).toBeGreaterThan(1.2);
    }
  });

  test("leaves already-aligned footprints alone", () => {
    const { gray, roofs } = makeScene(4);
    const res = alignFootprints(gray, roofs.map(rectCorners), 20);
    expect(Math.abs(res.global.x)).toBeLessThanOrEqual(1);
    expect(Math.abs(res.global.y)).toBeLessThanOrEqual(1);
    const moved = res.perPolygon.filter(p => Math.hypot(p.x, p.y) > 1.5).length;
    expect(moved).toBeLessThanOrEqual(1);
  });

  test("fixes individual buildings that are off by a different amount", () => {
    const { gray, roofs } = makeScene(5);
    const extra = roofs.map((_, i) => (i % 3 === 0 ? { x: 4, y: -3 } : { x: 0, y: 0 }));
    const footprints = roofs.map((r, i) => rectCorners(r).map(p => ({ x: p.x - 6 + extra[i].x, y: p.y + 4 + extra[i].y })));
    const res = alignFootprints(gray, footprints, 20);
    expect(res.confident).toBe(true);
    let good = 0;
    roofs.forEach((_, i) => {
      const total = { x: res.global.x + res.perPolygon[i].x, y: res.global.y + res.perPolygon[i].y };
      const want = { x: 6 - extra[i].x, y: -4 - extra[i].y };
      if (Math.hypot(total.x - want.x, total.y - want.y) <= 1.5) good++;
    });
    expect(good).toBeGreaterThanOrEqual(roofs.length - 2);
  });

  test("does nothing on a featureless image (no confident match)", () => {
    const size = 200;
    const data = new Uint8ClampedArray(size * size * 4).fill(120);
    const res = alignFootprints(toGray(data, size, size), [[{ x: 50, y: 50 }, { x: 120, y: 50 }, { x: 120, y: 110 }, { x: 50, y: 110 }]], 15);
    expect(res.confident).toBe(false);
    expect(res.global).toEqual({ x: 0, y: 0 });
  });
});
