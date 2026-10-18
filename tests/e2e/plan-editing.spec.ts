import { test, expect, itemsOfType, placeWithKey, planPoint, project } from "./fixtures";

test.describe("2D plan editing", () => {
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

  test("a selected building drags from anywhere, Shift+click edge adds a corner", async ({ page }) => {
    await placeWithKey(page, "b", 0.4, 0.4);
    const [before] = await itemsOfType(page, "building");
    const poly = page.getByTestId("plan").locator("polygon").first();
    const box = (await poly.boundingBox())!;
    await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2); // select
    await page.mouse.move(box.x + box.width * 0.15, box.y + box.height * 0.3); // near the edge (used to insert a corner)
    await page.mouse.down();
    await page.mouse.move(box.x + 83, box.y + box.height * 0.3 + 40, { steps: 6 });
    await page.mouse.up();
    const [after] = await itemsOfType(page, "building");
    expect(after.x).toBeGreaterThan(before.x + 10);
    expect(after.points).toHaveLength(4);

    const box2 = (await poly.boundingBox())!;
    await page.keyboard.down("Shift");
    await page.mouse.click(box2.x + box2.width / 2, box2.y + 8); // within the ~14 px edge threshold
    await page.keyboard.up("Shift");
    expect((await itemsOfType(page, "building"))[0].points.length).toBe(5);
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

  test("panning keeps the plan under the cursor", async ({ page }) => {
    await placeWithKey(page, "b", 0.5, 0.5);
    await page.keyboard.press("Escape");
    const poly = page.getByTestId("plan").locator("polygon").first();
    const before = (await poly.boundingBox())!;
    const start = await planPoint(page, 0.8, 0.8);
    await page.mouse.move(start.x, start.y);
    await page.mouse.down();
    await page.mouse.move(start.x - 100, start.y - 50, { steps: 5 });
    await page.mouse.up();
    const after = (await poly.boundingBox())!;
    expect(after.x - before.x).toBeCloseTo(-100, -1);
    expect(after.y - before.y).toBeCloseTo(-50, -1);
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

  test("placing in the 3D view uses the same real sizes", async ({ page }) => {
    await page.keyboard.press("3");
    await expect.poll(() => page.evaluate(() => !!(window as any).__scpThree()?.scene)).toBe(true);
    await page.keyboard.press("p");
    const canvas = page.locator("canvas").first();
    const box = (await canvas.boundingBox())!;
    await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
    await expect.poll(async () => (await itemsOfType(page, "parking")).length).toBe(1);
    const [car] = await itemsOfType(page, "parking");
    expect(car.width).toBeLessThan(8);
    expect(car.height).toBeLessThan(20);
  });
});
