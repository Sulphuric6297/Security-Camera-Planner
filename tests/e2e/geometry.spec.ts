// Pure-logic tests (no browser page) for plan geometry helpers.
import { test, expect } from "@playwright/test";
import { clipPolygonToRect, polygonArea } from "../../src/lib/geometry";

test.describe("geometry", () => {
  const rect = { x: 0, y: 0, width: 100, height: 100 };

  test("a footprint crossing the site edge is cut at the edge", () => {
    const square = [{ x: 80, y: 40 }, { x: 120, y: 40 }, { x: 120, y: 60 }, { x: 80, y: 60 }];
    const clipped = clipPolygonToRect(square, rect);
    expect(clipped.every(p => p.x >= 0 && p.x <= 100 && p.y >= 0 && p.y <= 100)).toBe(true);
    expect(polygonArea(clipped)).toBeCloseTo(20 * 20, 5);
  });

  test("footprints fully inside are unchanged, fully outside vanish", () => {
    const inside = [{ x: 10, y: 10 }, { x: 30, y: 10 }, { x: 30, y: 30 }];
    expect(clipPolygonToRect(inside, rect)).toEqual(inside);
    expect(clipPolygonToRect([{ x: 110, y: 10 }, { x: 130, y: 10 }, { x: 130, y: 30 }], rect)).toEqual([]);
  });

  test("a rotated footprint over a corner keeps only the part on the site", () => {
    const diamond = [{ x: 100, y: 80 }, { x: 120, y: 100 }, { x: 100, y: 120 }, { x: 80, y: 100 }];
    const clipped = clipPolygonToRect(diamond, rect);
    expect(polygonArea(clipped)).toBeCloseTo(polygonArea(diamond) / 4, 5);
  });
});
