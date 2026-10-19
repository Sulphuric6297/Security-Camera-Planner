// Pure-logic tests (no browser page) for "Suggest cameras".
import { test, expect } from "@playwright/test";
import { suggestCameras, type SuggestBuilding } from "../../src/lib/suggest";
import { cameraSees, levelRank, type CoverageCamera, type Obstacle } from "../../src/lib/coverage";
import { vFovFromH } from "../../src/lib/camera";
import { buildingWorldPoints, mountCandidates, roofObstacles } from "../../src/lib/planGeom";
import type { BuildingItem } from "../../src/types";

// A 60 x 40 ft house centered at the origin, 12 ft eaves.
const house: SuggestBuilding = {
  id: "house",
  heightFt: 12,
  mountHeightFt: 11,
  points: [{ x: -30, y: -20 }, { x: 30, y: -20 }, { x: 30, y: 20 }, { x: -30, y: 20 }]
};
const obstacles: Obstacle[] = [{ kind: "building", id: house.id, points: house.points, heightFt: house.heightFt }];

const asCamera = (s: ReturnType<typeof suggestCameras>[number]): CoverageCamera => ({
  id: "s",
  x: s.x,
  y: s.y,
  rotation: s.rotation,
  hFov: s.hFov,
  vFov: vFovFromH(s.hFov, 16 / 9),
  pitch: s.pitch,
  heightFt: s.heightFt,
  range: s.range,
  camera: { id: "s", type: "camera", x: 0, y: 0, rotation: 0, label: "", fov: s.hFov, hFov: s.hFov, range: s.range, color: "#000", resolutionWidth: s.resolutionWidth } as any
});

test.describe("suggest cameras", () => {
  test("covers a front and a back door from the house walls, each at the needed detail", () => {
    const targets = [
      { id: "front", x: 0, y: 35, goal: "identify" as const }, // 15 ft south of the house
      { id: "back", x: 0, y: -45, goal: "recognize" as const } // 25 ft north
    ];
    const s = suggestCameras({ targets, buildings: [house], obstacles, existing: [] });
    expect(s.length).toBeGreaterThanOrEqual(1);
    expect(s.length).toBeLessThanOrEqual(2);
    for (const cam of s) {
      expect(cam.mount?.buildingId).toBe("house");
      expect(cam.heightFt).toBe(11);
    }
    // Every target is now covered at its goal by some suggested camera
    for (const t of targets) {
      const ok = s.some(cam => {
        const r = cameraSees(asCamera(cam), t, obstacles);
        return r.level !== null && levelRank(r.level) <= levelRank(t.goal);
      });
      expect(ok, `${t.id} covered`).toBe(true);
    }
  });

  test("one wide camera covers two spots on the same side when it can", () => {
    const targets = [
      { id: "a", x: -10, y: 45, goal: "detect" as const },
      { id: "b", x: 10, y: 45, goal: "detect" as const }
    ];
    const s = suggestCameras({ targets, buildings: [house], obstacles, existing: [] });
    expect(s).toHaveLength(1);
    expect(s[0].covers.sort()).toEqual(["a", "b"]);
  });

  test("nothing is suggested for spots already covered", () => {
    const existing: CoverageCamera = asCamera({ x: 0, y: 21, rotation: 90, pitch: -20, heightFt: 9, lensId: "2.8mm", hFov: 105, resolutionWidth: 2688, range: 100, mount: null, covers: [] });
    const s = suggestCameras({ targets: [{ id: "t", x: 0, y: 35, goal: "detect" }], buildings: [house], obstacles, existing: [existing] });
    expect(s).toHaveLength(0);
  });

  test("with no buildings a pole camera is suggested", () => {
    const s = suggestCameras({ targets: [{ id: "gate", x: 100, y: 100, goal: "recognize" }], buildings: [], obstacles: [], existing: [] });
    expect(s).toHaveLength(1);
    expect(s[0].mount).toBeNull();
  });

  test("angles one camera between two spots it can take in together, instead of two cameras", () => {
    // A small 20 x 20 ft shed; two spots in front of it, far to either side: no camera aimed
    // straight at one sees the other, but one aimed between them sees both.
    const shed: SuggestBuilding = { id: "shed", heightFt: 10, mountHeightFt: 9, points: [{ x: -10, y: -10 }, { x: 10, y: -10 }, { x: 10, y: 10 }, { x: -10, y: 10 }] };
    const obs: Obstacle[] = [{ kind: "building", id: shed.id, points: shed.points, heightFt: shed.heightFt }];
    const targets = [
      { id: "left", x: -13, y: 26, goal: "detect" as const },
      { id: "right", x: 13, y: 26, goal: "detect" as const }
    ];
    const s = suggestCameras({ targets, buildings: [shed], obstacles: obs, existing: [] });
    expect(s).toHaveLength(1);
    expect(s[0].covers.sort()).toEqual(["left", "right"]);
    for (const t of targets) expect(cameraSees(asCamera(s[0]), t, obs).level).not.toBeNull();
  });

  test("a front door under a porch: the camera goes under the porch roof, where it can see the door", () => {
    // A 50 x 36 ft house with a porch on its own roof along the south wall (floor 2 ft up)
    const home = {
      id: "home", type: "building", x: 0, y: 0, width: 50, height: 36, rotation: 0, wallHeight: 12, label: "Home", color: "#ccc",
      openParts: [{ kind: "porch", pts: [{ x: -15, y: 18 }, { x: 15, y: 18 }, { x: 15, y: 26 }, { x: -15, y: 26 }], floor: 2, roof: "own" }]
    } as unknown as BuildingItem;
    const pts = buildingWorldPoints(home);
    const obs: Obstacle[] = [{ kind: "building", id: home.id, points: pts, heightFt: 12 }, ...roofObstacles(home)];
    const mounts = mountCandidates(home, 1, 8, 9, 11);
    // No camera spot on the wall above the porch roof; some under it
    expect(mounts.some(m => m.covered && m.kind === "porch")).toBe(true);
    expect(mounts.some(m => m.covered && m.kind === "corner")).toBe(true);
    const door = { id: "door", x: 4, y: 20, goal: "identify" as const };
    const s = suggestCameras({ targets: [door], buildings: [{ id: home.id, points: pts, heightFt: 12, mountHeightFt: 11, mounts }], obstacles: obs, existing: [] });
    expect(s).toHaveLength(1);
    expect(s[0].covered).toBe(true);
    // Under the porch ceiling (11.4 ft at the house, lower further out) and out of reach on the porch floor
    expect(s[0].heightFt).toBeLessThan(11.4);
    expect(s[0].heightFt).toBeGreaterThanOrEqual(9.5);
    const r = cameraSees(asCamera(s[0]), door, obs);
    expect(r.level !== null && levelRank(r.level) <= levelRank("identify")).toBe(true);
  });

  test("a carport on posts: its roof blocks the view from above, a camera under it sees the car spot", () => {
    const carport = {
      id: "carport", type: "building", x: 0, y: 0, width: 20, height: 20, rotation: 0, wallHeight: 9, label: "Carport", color: "#ccc", openSides: true
    } as unknown as BuildingItem;
    const obs = roofObstacles(carport);
    const spot = { id: "car", x: 2, y: 2, goal: "recognize" as const };
    // From a pole 25 ft up beside it, looking down through the roof: blocked
    const above = asCamera({ x: 30, y: 2, rotation: 180, pitch: -35, heightFt: 25, lensId: "4mm", hFov: 90, resolutionWidth: 3840, range: 120, mount: null, covers: [] });
    expect(cameraSees(above, spot, obs).reason).toBe("blocked");
    const s = suggestCameras({ targets: [spot], buildings: [{ id: carport.id, points: buildingWorldPoints(carport), heightFt: 9, mountHeightFt: 8, mounts: mountCandidates(carport, 1, 8, 9, 8) }], obstacles: obs, existing: [] });
    expect(s).toHaveLength(1);
    expect(s[0].covered).toBe(true);
    expect(s[0].heightFt).toBeLessThanOrEqual(8.25);
    const r = cameraSees(asCamera(s[0]), spot, obs);
    expect(r.level !== null && levelRank(r.level) <= levelRank("recognize")).toBe(true);
  });
});
