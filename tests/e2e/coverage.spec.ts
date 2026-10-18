// Pure-logic tests (no browser page) for coverage analysis.
import { test, expect } from "@playwright/test";
import { blindSpotCells, cameraSees, evaluateTargets, type CoverageCamera, type Obstacle } from "../../src/lib/coverage";
import { doriDistanceFt } from "../../src/lib/camera";

// A 4 MP camera with a 90° lens at 9 ft, tilted 15° down, looking east (+x).
const cam = (over: Partial<CoverageCamera> = {}): CoverageCamera => ({
  id: "c1",
  x: 0,
  y: 0,
  rotation: 0,
  hFov: 90,
  vFov: 55,
  pitch: -15,
  heightFt: 9,
  range: 200,
  camera: { id: "c1", type: "camera", x: 0, y: 0, rotation: 0, label: "C", fov: 90, hFov: 90, range: 200, color: "#fff", resolutionWidth: 2688 } as any,
  ...over
});
const box = (x0: number, y0: number, x1: number, y1: number, heightFt: number, id = "b"): Obstacle => ({
  kind: "building",
  id,
  heightFt,
  points: [{ x: x0, y: y0 }, { x: x1, y: y0 }, { x: x1, y: y1 }, { x: x0, y: y1 }]
});

test.describe("coverage", () => {
  test("detail level follows the DORI distances", () => {
    const identifyFt = doriDistanceFt(90, 2688, 250);
    expect(cameraSees(cam(), { x: identifyFt * 0.9, y: 0 }, []).level).toBe("identify");
    expect(cameraSees(cam(), { x: identifyFt * 1.2, y: 0 }, []).level).toBe("recognize");
  });

  test("spots outside the field of view, past the range, or under the camera are not seen", () => {
    expect(cameraSees(cam(), { x: 0, y: 30 }, []).reason).toBe("outside-view"); // 90° to the side
    expect(cameraSees(cam(), { x: -30, y: 0 }, []).reason).toBe("outside-view"); // behind
    expect(cameraSees(cam({ range: 50 }), { x: 60, y: 0 }, []).reason).toBe("too-far");
    // Steep down-tilt with a narrow lens: a person right under the camera is below the view
    expect(cameraSees(cam({ pitch: -10, vFov: 20 }), { x: 2, y: 0 }, []).reason).toBe("under-camera");
    // Within the 90° lens (30° off center) is fine
    expect(cameraSees(cam(), { x: 20, y: 20 * Math.tan(Math.PI / 6) }, []).level).not.toBeNull();
  });

  test("a building in the way blocks the view; a low one does not", () => {
    const wall = box(10, -5, 14, 5, 12);
    expect(cameraSees(cam(), { x: 30, y: 0 }, [wall]).reason).toBe("blocked");
    const lowWall = box(10, -5, 14, 5, 2); // a 2 ft garden wall: the sight line passes over it
    expect(cameraSees(cam(), { x: 30, y: 0 }, [lowWall]).level).not.toBeNull();
  });

  test("a camera mounted on a wall is not blocked by its own building", () => {
    // Building to the west, camera on its east wall at x = 0, looking east
    const house = box(-40, -15, 0, 15, 14, "house");
    expect(cameraSees(cam(), { x: 25, y: 0 }, [house]).level).not.toBeNull();
    // ...but it can't see through the house behind it
    expect(cameraSees(cam({ rotation: 180 }), { x: -60, y: 0 }, [house]).reason).toBe("blocked");
  });

  test("a tree canopy blocks the view", () => {
    const tree: Obstacle = { kind: "tree", id: "t", x: 15, y: 0, radius: 10, bottomFt: 2, topFt: 30 };
    expect(cameraSees(cam(), { x: 35, y: 0 }, [tree]).reason).toBe("blocked");
  });

  test("targets: best camera, goal met or not", () => {
    const cams = [cam({ id: "far", x: -60 }), cam({ id: "near", x: 0 })];
    const [door, gate] = evaluateTargets(
      cams,
      [
        { id: "door", x: 10, y: 0, goal: "identify" },
        { id: "gate", x: 0, y: 80, goal: "detect" }
      ],
      []
    );
    expect(door.best?.cameraId).toBe("near");
    expect(door.best?.level).toBe("identify");
    expect(door.met).toBe(true);
    expect(gate.best).toBeNull();
    expect(gate.met).toBe(false);
    expect(gate.reason).toBe("outside-view");
  });

  test("blind spots: the area behind the camera is uncovered", () => {
    const res = blindSpotCells([cam()], { x: -50, y: -50, width: 100, height: 100 }, 10, []);
    expect(res.coveredFraction).toBeGreaterThan(0.1);
    expect(res.coveredFraction).toBeLessThan(0.5);
    // Every uncovered run is inside the area
    for (const r of res.runs) {
      expect(r.x).toBeGreaterThanOrEqual(-50);
      expect(r.x + r.width).toBeLessThanOrEqual(50 + 1e-9);
    }
    // The cell straight behind the camera is a blind spot
    expect(res.runs.some(r => r.y <= -5 && r.y + r.height >= -5 && r.x <= -30 && r.x + r.width >= -30)).toBe(true);
  });
});
