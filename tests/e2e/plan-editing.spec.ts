import { test, expect, drag, handleCenter, itemBox, itemsOfType, measuredPxPerFt, placeWithKey, planAt, planPoint, project, screenOf } from "./fixtures";

test.describe("plan editing", () => {
  test("places every item type with shortcuts", async ({ page }) => {
    await placeWithKey(page, "b", 0.4, 0.4);
    await placeWithKey(page, "c", 0.6, 0.6);
    await page.keyboard.press("Escape");
    await placeWithKey(page, "t", 0.2, 0.7);
    await placeWithKey(page, "p", 0.75, 0.3);
    await placeWithKey(page, "l", 0.3, 0.2);
    const types = (await project(page)).items.map(i => i.type).sort();
    expect(types).toEqual(["building", "camera", "label", "parking", "tree"]);
  });

  test("a selected building drags from anywhere; pulling an edge's middle adds a corner", async ({ page }) => {
    await placeWithKey(page, "b", 0.4, 0.4);
    const [before] = await itemsOfType(page, "building");
    const box = await itemBox(page, before.id);
    // Placing selects it, so a drag moves it (from anywhere on it)
    await drag(page, { x: box.x + box.width * 0.2, y: box.y + box.height * 0.35 }, { x: box.x + box.width * 0.2 + 80, y: box.y + box.height * 0.35 + 40 });
    const [after] = await itemsOfType(page, "building");
    expect(after.x).toBeGreaterThan(before.x + 10);
    expect(after.points).toHaveLength(4);

    // Corner and edge-middle handles on the selection; dragging a middle one adds a corner there.
    await page.keyboard.press("f"); // zoom in on it
    await page.waitForTimeout(800);
    await expect(page.locator('[data-handle="corner"]')).toHaveCount(4);
    const mid = await handleCenter(page, "mid", 0);
    await drag(page, mid, { x: mid.x, y: mid.y - 30 }, 5);
    const [shaped] = await itemsOfType(page, "building");
    expect(shaped.points).toHaveLength(5);
    await expect(page.locator('[data-handle="corner"]')).toHaveCount(5);
    // Undo takes the new corner away again
    await page.keyboard.press("Control+z");
    await expect.poll(async () => (await itemsOfType(page, "building"))[0].points.length).toBe(4);
  });

  test("an unselected building pans the map instead of moving; click selects it", async ({ page }) => {
    await placeWithKey(page, "b", 0.5, 0.5);
    await page.keyboard.press("Escape");
    const [b] = await itemsOfType(page, "building");
    const start = await screenOf(page, b.x, b.y);
    await drag(page, start, { x: start.x - 100, y: start.y - 50 }, 5);
    const [same] = await itemsOfType(page, "building");
    expect(same.x).toBeCloseTo(b.x, 5);
    // The map moved with the cursor: the building is now under the end point
    const moved = await screenOf(page, b.x, b.y);
    expect(moved.x - start.x).toBeCloseTo(-100, -1);
    expect(moved.y - start.y).toBeCloseTo(-50, -1);
    await page.mouse.click(moved.x, moved.y);
    await expect(page.getByRole("toolbar", { name: "Selection actions" })).toBeVisible();
  });

  test("delete shows an Undo toast; undo/redo/duplicate/nudge work", async ({ page }) => {
    await placeWithKey(page, "c", 0.5, 0.5);
    const [cam] = await itemsOfType(page, "camera");

    await page.keyboard.press("ArrowRight");
    expect((await itemsOfType(page, "camera"))[0].x).toBeCloseTo(cam.x + 1, 5);

    await page.keyboard.press("Control+d");
    expect(await itemsOfType(page, "camera")).toHaveLength(2);
    await page.keyboard.press("Control+z");
    expect(await itemsOfType(page, "camera")).toHaveLength(1);
    await page.keyboard.press("Control+Shift+z");
    expect(await itemsOfType(page, "camera")).toHaveLength(2);

    await page.keyboard.press("Delete");
    await expect(page.getByRole("status")).toContainText("Deleted");
    expect(await itemsOfType(page, "camera")).toHaveLength(1);
    await page.getByRole("status").getByRole("button", { name: "Undo" }).click();
    expect(await itemsOfType(page, "camera")).toHaveLength(2);
  });

  test("panning the empty map keeps the ground under the cursor", async ({ page }) => {
    await placeWithKey(page, "b", 0.5, 0.5);
    await page.keyboard.press("Escape");
    const [b] = await itemsOfType(page, "building");
    const before = await screenOf(page, b.x, b.y);
    const start = await planPoint(page, 0.85, 0.85);
    await drag(page, start, { x: start.x - 100, y: start.y - 50 }, 5);
    const after = await screenOf(page, b.x, b.y);
    expect(after.x - before.x).toBeCloseTo(-100, -1);
    expect(after.y - before.y).toBeCloseTo(-50, -1);
  });

  test("zooming with the wheel after turning the view round never spins it", async ({ page }) => {
    await page.keyboard.press("3");
    await page.waitForTimeout(500);
    // Turn the view round and round with the right mouse button, past a full turn
    const p = await planPoint(page, 0.6, 0.6);
    for (let k = 0; k < 3; k++) {
      await page.mouse.move(p.x, p.y);
      await page.mouse.down({ button: "right" });
      await page.mouse.move(p.x + 700, p.y, { steps: 20 });
      await page.mouse.up({ button: "right" });
      await page.waitForTimeout(400);
    }
    // Record the heading on every frame while the wheel zoom eases in: it stays put
    await page.evaluate(() => {
      const w = window as any;
      w.__headings = [];
      const until = performance.now() + 900;
      const tick = () => { w.__headings.push(w.__scpView.viewInfo().heading); if (performance.now() < until) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    });
    const q = await planPoint(page, 0.8, 0.75);
    await page.mouse.move(q.x, q.y);
    await page.mouse.wheel(0, -300);
    await page.waitForTimeout(1000);
    const headings: number[] = await page.evaluate(() => (window as any).__headings);
    expect(headings.length).toBeGreaterThan(5);
    const worst = Math.max(...headings.map(h => Math.abs(((h - headings[0]) % 360 + 540) % 360 - 180)));
    expect(worst).toBeLessThan(3);
  });

  test("two-finger scroll up/down zooms at the cursor; sideways slides the map", async ({ page }) => {
    const before = await measuredPxPerFt(page);
    const p = await planPoint(page, 0.8, 0.8); // (the start card covers the middle of an empty plan)
    await page.mouse.move(p.x, p.y);
    await page.mouse.wheel(0, -200); // fingers up: zoom in
    await expect.poll(() => measuredPxPerFt(page)).toBeGreaterThan(before * 1.3);
    const zoomed = await measuredPxPerFt(page);
    await page.waitForTimeout(400);
    const at = await planAt(page, p.x, p.y);
    await page.mouse.wheel(80, 0); // sideways: the map slides, the zoom stays
    await page.waitForTimeout(200);
    const after = await planAt(page, p.x, p.y);
    expect(Math.abs(after!.x - at!.x)).toBeGreaterThan(10);
    expect(Math.abs((await measuredPxPerFt(page)) - zoomed) / zoomed).toBeLessThan(0.05);
  });

  test("building rotation handle, and height handle in 3D", async ({ page }) => {
    await placeWithKey(page, "b", 0.4, 0.5);
    const [b] = await itemsOfType(page, "building");
    const r = await handleCenter(page, "rotate");
    const c = await screenOf(page, b.x, b.y);
    // The knob sits below the building; swing it round to the right: a quarter turn back
    const radius = Math.hypot(r.x - c.x, r.y - c.y);
    expect(r.y).toBeGreaterThan(c.y);
    await page.keyboard.down("Shift");
    await drag(page, r, { x: c.x + radius, y: c.y }, 10);
    await page.keyboard.up("Shift");
    const [turned] = await itemsOfType(page, "building");
    expect(turned.rotation).toBe(270);

    // Height is dragged in 3D (looking straight down it's in the inspector)
    await expect(page.locator('[data-handle="height"]')).toBeHidden();
    await page.keyboard.press("3");
    await expect.poll(() => page.evaluate(() => (window as any).__scpView.viewInfo().tiltDeg)).toBeGreaterThan(40);
    await page.waitForTimeout(500);
    const h = await handleCenter(page, "height");
    await drag(page, h, { x: h.x, y: h.y - 60 }, 6);
    const [taller] = await itemsOfType(page, "building");
    expect(taller.wallHeight).toBeGreaterThan(b.wallHeight + 5);
  });

  test("a vehicle shows its real 3D model, at its stated length and in its color", async ({ page }) => {
    await placeWithKey(page, "p", 0.5, 0.5);
    const [car] = await itemsOfType(page, "parking");
    await page.evaluate(id => (window as any).__scpProject().setField("items", (prev: any[]) => prev.map(i => (i.id === id ? { ...i, color: "#8e1b1b" } : i))), car.id);
    // The model loads in the background; the vehicle is rebuilt with it
    await page.waitForFunction(id => {
      let found = false;
      (window as any).__scpThree().scene.traverse((o: any) => { if (o.userData.itemId === id && o.userData.vehicleModel) found = true; });
      return found;
    }, car.id, { timeout: 15000 });
    const info = await page.evaluate(id => {
      let obj: any = null;
      (window as any).__scpThree().scene.traverse((o: any) => { if (!obj && o.userData.itemId === id && o.userData.vehicleModel) obj = o; });
      const mesh = obj.getObjectByName("vehicle-body");
      const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      const paint = mats.find((m: any) => m.userData.paint);
      // Its length along the car (local z, scaled)
      mesh.geometry.computeBoundingBox();
      const b = mesh.geometry.boundingBox;
      return { length: (b.max.z - b.min.z) * mesh.scale.z, paint: paint?.userData.paintColor ?? null, type: obj.userData.vehicleModel };
    }, car.id);
    expect(info.type).toBe("sedan");
    expect(info.length).toBeCloseTo(car.height, 1);
    expect(info.paint).toBe("#8e1b1b");
  });

  test("vehicles are placed at real size; picking a type sets its size", async ({ page }) => {
    await placeWithKey(page, "p", 0.5, 0.5);
    const [car] = await itemsOfType(page, "parking");
    expect(car.width).toBeLessThan(8);
    expect(car.height).toBeLessThan(20);
    await page.getByRole("button", { name: "Pickup" }).click();
    const [truck] = await itemsOfType(page, "parking");
    expect(truck.vehicleType).toBe("truck");
    expect(truck.height).toBeGreaterThan(car.height);
    expect(truck.height).toBeLessThan(21);
  });

  test("placing and moving in the tilted 3D view uses the same real sizes", async ({ page }) => {
    await page.keyboard.press("3");
    await expect.poll(() => page.evaluate(() => (window as any).__scpView.viewInfo().tiltDeg)).toBeGreaterThan(40);
    await placeWithKey(page, "p", 0.5, 0.5);
    await expect.poll(async () => (await itemsOfType(page, "parking")).length).toBe(1);
    const [car] = await itemsOfType(page, "parking");
    expect(car.width).toBeLessThan(8);
    expect(car.height).toBeLessThan(20);
    // Drag it in 3D: it follows the ground
    const at = await screenOf(page, car.x, car.y, 2);
    await drag(page, at, { x: at.x + 120, y: at.y }, 8);
    const [moved] = await itemsOfType(page, "parking");
    expect(Math.hypot(moved.x - car.x, moved.y - car.y)).toBeGreaterThan(10);
  });

  test("measure: D, click two points, read the distance; Shift+click keeps going", async ({ page }) => {
    await page.keyboard.press("d");
    const a = await screenOf(page, 100, 100);
    const b = await screenOf(page, 160, 100); // 60 ft east
    const c = await screenOf(page, 160, 180); // then 80 ft south
    await page.mouse.click(a.x, a.y);
    await page.mouse.click(b.x, b.y);
    const labels = page.getByTestId("measure-label");
    await expect(labels).toHaveCount(1);
    await expect(labels.first()).toHaveText(/^(59|60|61) ft$/);
    await page.keyboard.down("Shift");
    await page.mouse.click(c.x, c.y);
    await page.keyboard.up("Shift");
    await expect(labels).toHaveCount(2);
    await expect(page.getByText(/^Total (139|140|141) ft$/)).toBeVisible();
    // Nothing was added to the plan, and Esc clears it
    expect((await page.evaluate(() => (window as any).__scpProject().items)).length).toBe(0);
    await page.keyboard.press("Escape");
    await expect(labels).toHaveCount(0);
  });
});
