// Driveways, walkways and patios: paving that lies on the ground (pure logic), and placing,
// reshaping and changing one in the app.
import { test as base, expect as baseExpect } from "@playwright/test";
import * as THREE from "three";
import { createItem } from "../../src/lib/items";
import { spotsFromBuildings } from "../../src/lib/protectSpots";
import { clipToBox, createPaving, PAVING_LIFT } from "../../src/three/paving";
import type { BuildingItem, PavingItem } from "../../src/types";
import { test, expect, itemsOfType, placeWithKey } from "./fixtures";

base.describe("paving on the ground (pure logic)", () => {
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
  test("W places a driveway on the ground; its surface and kind change; its corners reshape it", async ({ page }) => {
    await placeWithKey(page, "w", 0.5, 0.5);
    const [pv] = await itemsOfType(page, "paving");
    expect(pv.kind).toBe("driveway");
    expect(pv.surface).toBe("asphalt");
    expect(pv.width).toBeCloseTo(12, 1);
    // It is drawn in the 3D scene
    expect(await page.evaluate(() => !!(window as any).__scpThree().scene.getObjectByName("paving"))).toBe(true);
    await page.keyboard.press("Escape");
    await page.evaluate(id => (window as any).__scpSelect(id), pv.id);
    await page.keyboard.press("f"); // zoom to it
    await page.waitForTimeout(600);
    await expect(page.locator('[data-handle="corner"]')).toHaveCount(4);
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
    // Pulling an edge's middle adds a bend
    const mid = await page.locator('[data-handle="mid"]:visible').first().boundingBox();
    await page.mouse.move(mid!.x + mid!.width / 2, mid!.y + mid!.height / 2);
    await page.mouse.down();
    await page.mouse.move(mid!.x + 30, mid!.y + 30, { steps: 5 });
    await page.mouse.up();
    const [bent] = await itemsOfType(page, "paving");
    expect(bent.points).toHaveLength(5);
  });
});
