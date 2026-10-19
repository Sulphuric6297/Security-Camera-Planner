// Pure-logic tests (no browser page) for "Suggest cameras".
import { test, expect } from "@playwright/test";
import { suggestCameras, type SuggestBuilding } from "../../src/lib/suggest";
import { cameraSees, levelRank, type CoverageCamera, type Obstacle } from "../../src/lib/coverage";
import { vFovFromH } from "../../src/lib/camera";

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
});
