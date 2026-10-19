// Pure-logic tests (no browser page) for plan geometry helpers.
import { test, expect } from "@playwright/test";
import { clipPolygonToRect, pointInPolygonXY, polygonArea } from "../../src/lib/geometry";
import { buildingWorldPoints, cameraPlanPosition } from "../../src/lib/planGeom";
import { enclosedWalls, openPartEdges, openPartPosts, partFromCorners } from "../../src/lib/openParts";

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

  test("a porch drawn past the house's outline is shown only where it is under the house", () => {
    const house = [{ x: -20, y: -15 }, { x: 20, y: -15 }, { x: 20, y: 15 }, { x: -20, y: 15 }];
    // Drawn 3 ft past the front and the left side: shown as the 16 x 10 ft rectangle on the house
    const edges = openPartEdges(house, [partFromCorners({ x: -23, y: 5 }, { x: -4, y: 18 })]);
    const total = edges.reduce((t, e) => t + Math.hypot(e.b.x - e.a.x, e.b.y - e.a.y), 0);
    expect(total).toBeCloseTo(52, 5);
    for (const e of edges) for (const p of [e.a, e.b]) {
      expect(p.x).toBeGreaterThanOrEqual(-20 - 1e-9);
      expect(p.y).toBeLessThanOrEqual(15 + 1e-9);
    }
  });

  test("open parts of a house (porch, carport): outer walls left out there, a wall where they meet the house", () => {
    // A 40 x 30 house (x -20..20, y -15..15); a porch across the front-left 16 ft (y 5..15, x -20..-4)
    const house = [{ x: -20, y: -15 }, { x: 20, y: -15 }, { x: 20, y: 15 }, { x: -20, y: 15 }];
    const porch = partFromCorners({ x: -20, y: 5 }, { x: -4, y: 15 });
    const walls = enclosedWalls(house, [porch]);
    const len = (w: any) => Math.hypot(w.b.x - w.a.x, w.b.y - w.a.y);
    const total = walls.reduce((t, w) => t + len(w), 0);
    // Outline 140 ft, less the porch's 16 + 10 ft of outer wall, plus its 16 + 10 ft wall against the house
    expect(total).toBeCloseTo(140, 3);
    // No wall runs through the porch's open front or side
    const inPorch = (p: any) => p.x > -19.99 && p.x < -4.01 && p.y > 5.01 && p.y < 15.01;
    expect(walls.some(w => inPorch({ x: (w.a.x + w.b.x) / 2, y: (w.a.y + w.b.y) / 2 }) && Math.abs(w.a.y - 15) < 0.01)).toBe(false);
    // The wall between house and porch faces the porch
    const back = walls.find(w => Math.abs(w.a.y - 5) < 0.01 && Math.abs(w.b.y - 5) < 0.01)!;
    expect(back).toBeTruthy();
    expect(back.out.y).toBeGreaterThan(0.9);
    // Posts along the open front and side, at most 10 ft apart, including the corner
    const posts = openPartPosts(house, [porch], 10);
    expect(posts.some(p => Math.abs(p.x + 20) < 0.01 && Math.abs(p.y - 15) < 0.01)).toBe(true);
    expect(posts.length).toBeGreaterThanOrEqual(4);

    // Two open parts (a front porch and a carport at the back corner): both left open
    const carport = partFromCorners({ x: 8, y: -15 }, { x: 20, y: -3 });
    const two = enclosedWalls(house, [porch, carport]);
    const total2 = two.reduce((t, w) => t + len(w), 0);
    expect(total2).toBeCloseTo(140, 3); // each open part swaps its outer walls for the same length of inner wall
    const inCarport = (p: any) => p.x > 8.01 && p.x < 19.99 && p.y > -14.99 && p.y < -3.01;
    expect(two.some(w => inCarport({ x: (w.a.x + w.b.x) / 2, y: (w.a.y + w.b.y) / 2 }))).toBe(false);
  });
});

test.describe("windows and doors", () => {
  test("automatic windows become a list; a new door takes the place of the window it overlaps", async () => {
    const { autoOpenings, openingAt, placeOpening } = await import("../../src/lib/openings");
    const house = [{ x: -20, y: -15 }, { x: 20, y: -15 }, { x: 20, y: 15 }, { x: -20, y: 15 }];
    const auto = autoOpenings(house, 14, 1);
    // Windows are kept by where they are: 40 ft walls get 3 each, one storey
    const onWall = (y: number) => (o: any) => Math.abs(o.y - y) < 1e-6;
    expect(auto.filter(onWall(-15))).toHaveLength(3);
    // A door clicked just outside the south wall lands on it
    const door = openingAt(house, { x: 0, y: 15.5 }, "door", 1);
    expect(door.y).toBeCloseTo(15, 6);
    const next = placeOpening(auto, door, 1);
    expect(next.filter(o => onWall(15)(o) && o.kind === "window").length).toBe(auto.filter(onWall(15)).length - 1);
    expect(next.some(o => o.kind === "door")).toBe(true);
  });
});
