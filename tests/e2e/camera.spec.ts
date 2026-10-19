import { test, expect, drag, handleCenter, itemBox, itemsOfType, placeWithKey, screenOf } from "./fixtures";

test.describe("cameras", () => {
  test("aim handle points the camera where it is dragged (rotation and tilt)", async ({ page }) => {
    await placeWithKey(page, "c", 0.5, 0.5);
    const [cam] = await itemsOfType(page, "camera");
    const handle = await handleCenter(page, "aim");
    const target = await screenOf(page, cam.x + 40, cam.y); // 40 ft due east
    await drag(page, handle, target, 8);
    const [aimed] = await itemsOfType(page, "camera");
    expect(Math.min(aimed.rotation, 360 - aimed.rotation)).toBeLessThan(3);
    expect(aimed.rotation).not.toBe(cam.rotation);
    // Tilted to look at head height 40 ft away
    expect(aimed.pitch).toBeLessThan(0);
    expect(aimed.pitch).toBeGreaterThan(-15);
    // The dot sits where the camera now looks
    const after = await handleCenter(page, "aim");
    expect(Math.hypot(after.x - target.x, after.y - target.y)).toBeLessThan(12);
  });

  test("hovering the map tells how far from the selected camera and what it sees there", async ({ page }) => {
    await placeWithKey(page, "c", 0.5, 0.5);
    const [cam] = await itemsOfType(page, "camera");
    const p = await screenOf(page, cam.x, cam.y + 30); // 30 ft south
    await page.mouse.move(p.x, p.y);
    const readout = page.getByTestId("camera-readout");
    await expect(readout).toHaveText(/^(29|30|31) ft from Camera 1: /);
    await expect(readout).not.toContainText("px/ft"); // no jargon
  });

  test("field of view and range handles", async ({ page }) => {
    await placeWithKey(page, "c", 0.5, 0.5);
    const [cam] = await itemsOfType(page, "camera");
    const range = await handleCenter(page, "range");
    const c = await screenOf(page, cam.x, cam.y);
    await drag(page, range, { x: c.x + (range.x - c.x) * 0.5, y: c.y + (range.y - c.y) * 0.5 }, 6);
    const [shorter] = await itemsOfType(page, "camera");
    expect(shorter.range).toBeLessThan(cam.range * 0.7);

    const edge = await handleCenter(page, "fov-r");
    // Swing the edge further out: the view widens
    const a = Math.atan2(edge.y - c.y, edge.x - c.x) + 0.35;
    const r = Math.hypot(edge.x - c.x, edge.y - c.y);
    await drag(page, edge, { x: c.x + Math.cos(a) * r, y: c.y + Math.sin(a) * r }, 6);
    const [wider] = await itemsOfType(page, "camera");
    expect(wider.hFov).toBeGreaterThan(cam.hFov + 20);
  });

  test("dragging a camera next to a wall mounts it there", async ({ page }) => {
    await placeWithKey(page, "b", 0.35, 0.35);
    await page.keyboard.press("Escape");
    await placeWithKey(page, "c", 0.35, 0.7);
    const [b] = await itemsOfType(page, "building");
    const [cam] = await itemsOfType(page, "camera");
    expect(cam.mount.type).toBe("free");
    const box = await itemBox(page, b.id);
    const from = await screenOf(page, cam.x, cam.y, 9);
    await drag(page, from, { x: box.x + box.width / 2, y: box.y + box.height + 4 }, 10);
    const [mounted] = await itemsOfType(page, "camera");
    expect(mounted.mount.type).toBe("building");
    expect(mounted.mount.buildingId).toBe(b.id);
    expect(Math.round(mounted.rotation)).toBe(90); // facing out of the south wall
  });

  test("presets update lens, mount and the coverage distances", async ({ page }) => {
    await placeWithKey(page, "c", 0.5, 0.5);
    await page.getByRole("button", { name: /^Eave/ }).click();
    await page.getByRole("button", { name: /^12mm/ }).click();
    await page.getByRole("button", { name: /^4K/ }).click();
    const [cam] = await itemsOfType(page, "camera");
    expect(cam.hFov).toBe(28);
    expect(cam.mount.height).toBe(11);
    expect(cam.resolutionWidth).toBe(3840);
    // 4K + 12 mm identifies faces well beyond 50 ft
    const identify = page.locator("text=Identify").locator("xpath=..").getByText(/up to \d+ ft/);
    const ft = Number((await identify.textContent())!.match(/(\d+)/)![1]);
    expect(ft).toBeGreaterThan(50);
    await expect(page.getByText(/Blind spot:/)).toBeVisible();
  });

  test("height slider works for free-standing cameras", async ({ page }) => {
    await placeWithKey(page, "c", 0.5, 0.5);
    await page.getByRole("button", { name: /^Pole/ }).click();
    const [cam] = await itemsOfType(page, "camera");
    expect(cam.mount.type).toBe("free");
    expect(cam.mount.height).toBe(15);
    await expect(page.getByText("15 ft high")).toBeVisible();
  });

  test("camera placed next to a wall mounts at eave height facing out", async ({ page }) => {
    await placeWithKey(page, "b", 0.5, 0.5);
    const [b] = await itemsOfType(page, "building");
    const box = await itemBox(page, b.id);
    await page.keyboard.press("c");
    await page.mouse.click(box.x + box.width / 2, box.y + box.height + 2); // just below the south wall
    const [cam] = await itemsOfType(page, "camera");
    expect(cam.mount.type).toBe("building");
    expect(cam.mount.buildingId).toBe(b.id);
    expect(cam.mount.height).toBe(13);
    expect(Math.round(cam.rotation)).toBe(90); // facing south (down the plan)
  });

  test("camera far from buildings stays free-standing where clicked", async ({ page }) => {
    await placeWithKey(page, "b", 0.3, 0.3);
    await placeWithKey(page, "c", 0.7, 0.7);
    const [cam] = await itemsOfType(page, "camera");
    expect(cam.mount.type).toBe("free");
  });

  test("rotating a building rotates its mounted cameras", async ({ page }) => {
    await placeWithKey(page, "b", 0.5, 0.5);
    const [b] = await itemsOfType(page, "building");
    const box = await itemBox(page, b.id);
    await page.keyboard.press("c");
    await page.mouse.click(box.x + box.width / 2, box.y + box.height + 2);
    const [cam] = await itemsOfType(page, "camera");
    // select the building and turn it 90° with the rotation slider
    await page.evaluate(id => (window as any).__scpSelect(id), b.id);
    // Rotation is an advanced building setting (the action bar rotates in 15° steps)
    await page.getByRole("button", { name: /More options/ }).click();
    const slider = page.locator('label:has-text("Rotation") + input[type=range]').first();
    await slider.fill("90");
    const [after] = await itemsOfType(page, "camera");
    expect(Math.round((after.rotation - cam.rotation + 360) % 360)).toBe(90);
  });
});
