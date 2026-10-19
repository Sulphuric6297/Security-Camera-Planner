// Pure-logic tests (no browser page) for plan geometry helpers.
import { test, expect } from "@playwright/test";
import { clipPolygonToRect, pointInPolygonXY, polygonArea } from "../../src/lib/geometry";
import { buildingWorldPoints, cameraPlanPosition } from "../../src/lib/planGeom";

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

  test("a camera on a wall at the inside corner of an L-shaped house stays outside the house", () => {
    // L: 40 x 40 with the north-east 20 x 20 cut out; edge 1 runs (0,-20)->(0,0), ending at the inside corner (0,0)
    const house: any = { id: "h", type: "building", x: 0, y: 0, rotation: 0, width: 40, height: 40,
      points: [{ x: -20, y: -20 }, { x: 0, y: -20 }, { x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 20 }, { x: -20, y: 20 }] };
    const pts = buildingWorldPoints(house);
    for (const [edgeIndex, edgeT] of [[1, 0.97], [1, 1], [2, 0], [2, 0.02]]) {
      const cam: any = { id: "c", type: "camera", x: 0, y: 0, mount: { type: "building", buildingId: "h", edgeIndex, edgeT, height: 9 } };
      const p = cameraPlanPosition(cam, [house, cam]);
      expect(pointInPolygonXY(p, pts), `edge ${edgeIndex} at ${edgeT}`).toBe(false);
    }
  });
});
