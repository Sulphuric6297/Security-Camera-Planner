// Driveways, walkways and patios: paving that lies on the ground (pure logic), and placing,
// reshaping and changing one in the app.
import { test as base, expect as baseExpect } from "@playwright/test";
import * as THREE from "three";
import { createItem } from "../../src/lib/items";
import { spotsFromBuildings } from "../../src/lib/protectSpots";
import { clipToBox, createPaving, PAVING_LIFT } from "../../src/three/paving";
import { pathOutline, smoothPath, widenPath } from "../../src/lib/pavingPath";
import type { BuildingItem, PavingItem } from "../../src/types";
import { test, expect, itemsOfType, placeWithKey } from "./fixtures";

base.describe("paving on the ground (pure logic)", () => {
  base("widening a path from one side moves only that edge; both sides when asked", () => {
    // Straight, 12 ft wide, running down the plan (+y): its left is -x
    const straight = [{ x: 0, y: -20 }, { x: 0, y: 20 }];
    const left = widenPath(straight, 12, 18, 1);
    baseExpect(left.width).toBe(18);
    // The middle moved 3 ft to the left, so the right edge (x = 6) stays
    for (const p of left.path) baseExpect(p.x).toBeCloseTo(-3, 6);
    const xs = pathOutline(left.path, left.width).map(p => p.x);
    baseExpect(Math.max(...xs)).toBeCloseTo(6, 6);
    baseExpect(Math.min(...xs)).toBeCloseTo(-12, 6);
    // Both sides: the middle stays
    const both = widenPath(straight, 12, 18, 1, true);
    baseExpect(both.path).toEqual(straight);
    // A bent path widened on its right: its left edge stays (within a few inches), the right one moves
    const bent = [{ x: 0, y: 0 }, { x: 0, y: 30 }, { x: 20, y: 45 }];
    const edge = (path: typeof bent, width: number, side: 1 | -1) => {
      const line = smoothPath(path, 1);
      return line.slice(2, -2).map((p, k) => {
        const a = line[k + 1], b = line[k + 3];
        const len = Math.hypot(b.x - a.x, b.y - a.y);
        return { x: p.x - ((b.y - a.y) / len) * (width / 2) * side, y: p.y + ((b.x - a.x) / len) * (width / 2) * side };
      });
    };
    const right = widenPath(bent, 12, 20, -1);
    const outline1 = pathOutline(right.path, right.width);
    const near = (p: { x: number; y: number }) => Math.min(...outline1.map((q, i) => {
      const r = outline1[(i + 1) % outline1.length];
      const dx = r.x - q.x, dy = r.y - q.y;
      const t = Math.max(0, Math.min(1, ((p.x - q.x) * dx + (p.y - q.y) * dy) / (dx * dx + dy * dy || 1)));
      return Math.hypot(p.x - q.x - dx * t, p.y - q.y - dy * t);
    }));
    for (const p of edge(bent, 12, 1)) baseExpect(near(p)).toBeLessThan(0.6);
    // ...and the old right edge is now well inside: 8 ft from the new one
    for (const p of edge(bent, 12, -1)) baseExpect(near(p)).toBeGreaterThan(6);
  });

  base("a bendable driveway keeps its width all along, bends smoothly and has square ends", () => {
    // Up 30 ft, then curving off to the right
    const path = [{ x: 0, y: 0 }, { x: 0, y: 30 }, { x: 20, y: 45 }];
    const outline = pathOutline(path, 12);
    const line = smoothPath(path, 1);
    // Every point along the middle is half the width from the edges on both sides
    const dist = (p: { x: number; y: number }) => Math.min(...outline.map((a, i) => {
      const b = outline[(i + 1) % outline.length];
      const dx = b.x - a.x, dy = b.y - a.y;
      const t = Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.y - a.y) * dy) / (dx * dx + dy * dy || 1)));
      return Math.hypot(p.x - a.x - dx * t, p.y - a.y - dy * t);
    }));
    // (away from the square ends)
    for (const p of line.slice(7, -7)) baseExpect(dist(p)).toBeGreaterThan(5.7);
    for (const p of line.slice(7, -7)) baseExpect(dist(p)).toBeLessThan(6.3);
    // Smooth: no sharp turn anywhere along the middle
    for (let i = 1; i + 1 < line.length; i++) {
      const a = Math.atan2(line[i].y - line[i - 1].y, line[i].x - line[i - 1].x);
      const b = Math.atan2(line[i + 1].y - line[i].y, line[i + 1].x - line[i].x);
      const turn = Math.abs(((((b - a) * 180) / Math.PI + 540) % 360) - 180);
      baseExpect(turn).toBeLessThan(20);
    }
    // It really bends: the far end heads right, the start heads straight up
    baseExpect(line[line.length - 1].x).toBeCloseTo(20, 5);
    // Square ends: at the start, two corners straight across the path, 12 ft apart
    const start = outline.filter(p => Math.abs(p.y) < 0.05);
    baseExpect(start).toHaveLength(2);
    baseExpect(Math.abs(start[0].x - start[1].x)).toBeCloseTo(12, 2);
  });

  base("a box clips a shape to the part inside it", () => {
    const tri = [{ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 0, y: 10 }];
    const piece = clipToBox(tri, 0, 0, 5, 5);
    const area = Math.abs(piece.reduce((s, p, i) => { const q = piece[(i + 1) % piece.length]; return s + p.x * q.y - q.x * p.y; }, 0)) / 2;
    baseExpect(area).toBeCloseTo(25, 5); // the whole 5 x 5 corner of the triangle
    baseExpect(clipToBox(tri, 20, 20, 30, 30)).toHaveLength(0);
  });

  base("a driveway follows a sloping ground, faces up and covers exactly its shape", () => {
    const pv = { ...(createItem("paving", 50, 60, { pavingKind: "driveway" }) as PavingItem), rotation: 30 };
    // Ground rising 1 ft for every 10 ft east
    const ground = (x: number) => x / 10;
    const mesh = createPaving(pv, x => ground(x), 20).getObjectByName("paving") as THREE.Mesh;
    const pos = mesh.geometry.getAttribute("position");
    let area = 0;
    const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3(), n = new THREE.Vector3();
    for (let i = 0; i < pos.count; i += 3) {
      a.fromBufferAttribute(pos, i); b.fromBufferAttribute(pos, i + 1); c.fromBufferAttribute(pos, i + 2);
      for (const v of [a, b, c]) baseExpect(v.y).toBeCloseTo(ground(v.x) + PAVING_LIFT, 4);
      n.crossVectors(b.clone().sub(a), c.clone().sub(a));
      baseExpect(n.y).toBeGreaterThan(0);
      area += Math.abs(n.y) / 2; // the area seen from above
    }
    // 12 x 40 ft, cut along the terrain grid into several pieces (so it can bend with the ground)
    baseExpect(area).toBeCloseTo(12 * 40, 1);
    baseExpect(pos.count / 3).toBeGreaterThan(4);
  });

  base("a driveway drawn by the house becomes a spot to protect at the house end, instead of its parked cars", () => {
    const house = createItem("building", 100, 100) as BuildingItem; // 50 x 36 ft
    // A driveway running south from the house's south wall (y = 118)
    const drive = { ...(createItem("paving", 100, 140, { pavingKind: "driveway" }) as PavingItem) }; // y 120..160
    const car = createItem("parking", 100, 130);
    const spots = spotsFromBuildings([house, drive, car], 1).filter(s => s.kind === "driveway");
    baseExpect(spots).toHaveLength(1);
    baseExpect(spots[0].key).toBe(`${house.id}:pave:${drive.id}`);
    // 10 ft in from the end by the house
    baseExpect(spots[0].x).toBeCloseTo(100, 0);
    baseExpect(spots[0].y).toBeCloseTo(130, 0);
    // A walkway is not a driveway
    const walk = createItem("paving", 100, 130, { pavingKind: "walkway" });
    baseExpect(spotsFromBuildings([house, walk], 1).filter(s => s.kind === "driveway")).toHaveLength(0);
  });
});

test.describe("paving in the app", () => {
  test("W places a driveway on the ground; its surface and kind change; it bends, its width changes, it can be a free shape", async ({ page }) => {
    await placeWithKey(page, "w", 0.5, 0.5);
    const [pv] = await itemsOfType(page, "paving");
    expect(pv.kind).toBe("driveway");
    expect(pv.surface).toBe("asphalt");
    expect(pv.width).toBeCloseTo(12, 1);
    // A driveway is a bendable path: a line down its middle, 12 ft wide
    expect(pv.path).toHaveLength(2);
    expect(pv.pathWidth).toBeCloseTo(12, 1);
    // It is drawn in the 3D scene
    expect(await page.evaluate(() => !!(window as any).__scpThree().scene.getObjectByName("paving"))).toBe(true);
    await page.keyboard.press("Escape");
    await page.evaluate(id => (window as any).__scpSelect(id), pv.id);
    await page.keyboard.press("f"); // zoom to it
    await page.waitForTimeout(600);
    // A dot at each end of its middle line, one to bend it between them, one for the width
    await expect(page.locator('[data-handle="corner"]')).toHaveCount(2);
    await expect(page.locator('[data-handle="width"]')).toHaveCount(2);
    // No height bar: it lies flat
    await expect(page.locator('[data-handle="height"]')).toHaveCount(0);
    const inspector = page.getByLabel("Inspector");
    await inspector.getByRole("group", { name: "Surface" }).getByRole("button", { name: "Concrete" }).click();
    await inspector.getByRole("group", { name: "Paving kind" }).getByRole("button", { name: "Walkway" }).click();
    const [changed] = await itemsOfType(page, "paving");
    expect(changed.surface).toBe("concrete");
    expect(changed.kind).toBe("walkway");
    expect(changed.label).toBe("Walkway");
    await expect(inspector.getByRole("heading", { name: "Edit Walkway" })).toBeVisible();
    // Pulling the middle dot sideways bends it: a smooth curve, still 12 ft wide
    const mid = await page.locator('[data-handle="mid"]:visible').first().boundingBox();
    const m = { x: mid!.x + mid!.width / 2, y: mid!.y + mid!.height / 2 };
    await page.mouse.move(m.x, m.y);
    await page.mouse.down();
    await page.mouse.move(m.x + 80, m.y, { steps: 8 });
    await page.mouse.up();
    const [bent] = await itemsOfType(page, "paving");
    expect(bent.path).toHaveLength(3);
    expect(Math.abs(bent.path[1].x - bent.path[0].x)).toBeGreaterThan(3);
    expect(bent.pathWidth).toBeCloseTo(12, 1);
    // Many outline points along the curve, not a square
    expect(bent.points.length).toBeGreaterThan(12);
    await expect(page.locator('[data-handle="corner"]')).toHaveCount(3);
    // A square on each side: dragging one out moves that edge only, the other side stays
    const sq = page.locator('[data-handle="width"]');
    await expect(sq).toHaveCount(2);
    const centre = async (i: number) => { const b = (await sq.nth(i).boundingBox())!; return { x: b.x + b.width / 2, y: b.y + b.height / 2 }; };
    const l0 = await centre(0), r0 = await centre(1);
    await page.mouse.move(l0.x, l0.y);
    await page.mouse.down();
    // Out by half the distance between the two squares: 6 ft more
    await page.mouse.move(l0.x + (l0.x - r0.x) * 0.5, l0.y + (l0.y - r0.y) * 0.5, { steps: 6 });
    await page.mouse.up();
    const [wide] = await itemsOfType(page, "paving");
    expect(wide.pathWidth).toBeGreaterThan(16.5);
    expect(wide.pathWidth).toBeLessThan(19.5);
    await page.waitForTimeout(200);
    const r1 = await centre(1);
    expect(Math.hypot(r1.x - r0.x, r1.y - r0.y)).toBeLessThan(4);
    // With Shift, both sides move evenly: the middle line stays
    const l1 = await centre(0);
    await page.keyboard.down("Shift");
    await page.mouse.move(r1.x, r1.y);
    await page.mouse.down();
    await page.mouse.move(r1.x + (r1.x - l1.x) * 0.15, r1.y + (r1.y - l1.y) * 0.15, { steps: 6 });
    await page.mouse.up();
    await page.keyboard.up("Shift");
    const [even] = await itemsOfType(page, "paving");
    expect(even.pathWidth).toBeGreaterThan(wide.pathWidth + 4);
    expect(even.path).toEqual(wide.path);
    // As a free shape it keeps its outline, now with corners to drag; and back to a path
    await inspector.getByRole("group", { name: "Paving shape" }).getByRole("button", { name: "Free shape" }).click();
    const [free] = await itemsOfType(page, "paving");
    expect(free.path).toBeUndefined();
    expect(free.points.length).toBeGreaterThanOrEqual(4);
    await expect(page.locator('[data-handle="width"]')).toHaveCount(0);
    await inspector.getByRole("group", { name: "Paving shape" }).getByRole("button", { name: "Bendable path" }).click();
    const [again] = await itemsOfType(page, "paving");
    expect(again.path).toHaveLength(2);
  });
});
