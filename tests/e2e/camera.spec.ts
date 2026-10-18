import { test, expect, itemsOfType, placeWithKey, planPoint } from "./fixtures";

test.describe("cameras", () => {
  test("aim handle points the camera at the cursor (2D and stored rotation agree)", async ({ page }) => {
    await placeWithKey(page, "c", 0.5, 0.5);
    const handle = page.locator("circle.cursor-crosshair").first();
    const hb = (await handle.boundingBox())!;
    const [cam] = await itemsOfType(page, "camera");
    await page.mouse.move(hb.x + hb.width / 2, hb.y + hb.height / 2);
    await page.mouse.down();
    const center = await planPoint(page, 0.5, 0.5);
    await page.mouse.move(center.x + 250, center.y, { steps: 8 }); // straight right of the camera
    await page.mouse.up();
    const [aimed] = await itemsOfType(page, "camera");
    expect(Math.min(aimed.rotation, 360 - aimed.rotation)).toBeLessThan(4);
    expect(aimed.rotation).not.toBe(cam.rotation);
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
    const poly = (await page.getByTestId("plan").locator("polygon").first().boundingBox())!;
    await page.keyboard.press("c");
    await page.mouse.click(poly.x + poly.width / 2, poly.y + poly.height + 2); // just below the south wall
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
    const poly = (await page.getByTestId("plan").locator("polygon").first().boundingBox())!;
    await page.keyboard.press("c");
    await page.mouse.click(poly.x + poly.width / 2, poly.y + poly.height + 2);
    const [cam] = await itemsOfType(page, "camera");
    // select the building and turn it 90° with the rotation slider
    await page.mouse.click(poly.x + poly.width / 2, poly.y + poly.height / 2);
    // Rotation is an advanced building setting (the action bar rotates in 15° steps)
    await page.getByRole("button", { name: /More options/ }).click();
    const slider = page.locator('label:has-text("Rotation") + input[type=range]').first();
    await slider.fill("90");
    const [after] = await itemsOfType(page, "camera");
    expect(Math.round((after.rotation - cam.rotation + 360) % 360)).toBe(90);
  });
});
