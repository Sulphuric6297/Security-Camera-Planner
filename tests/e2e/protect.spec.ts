import { test, expect, itemsOfType, placeWithKey, planPoint } from "./fixtures";

// The empty plan is 1000 x 700 ft. These helpers place things by fraction of the plan's box.
const markSpot = async (page: any, fx: number, fy: number) => {
  await page.locator('nav[aria-label="Steps"] button').nth(2).click();
  await page.getByRole("button", { name: /Mark a door, gate or driveway/ }).click();
  const p = await planPoint(page, fx, fy);
  await page.mouse.click(p.x, p.y);
  await page.keyboard.press("Escape");
};
const status = async (page: any) => page.getByTestId("target-pin").first().getAttribute("data-status");

test.describe("what to protect and coverage", () => {
  test("mark a door, point a camera at it, and the checklist follows", async ({ page }) => {
    await markSpot(page, 0.5, 0.45);
    expect(await itemsOfType(page, "target")).toHaveLength(1);
    await expect(page.getByTestId("coverage-score")).toHaveText("0 of 1 covered");
    expect(await status(page)).toBe("none");

    // A camera ~45 ft away, initially facing away from the door
    await placeWithKey(page, "c", 0.5, 0.51);
    await page.keyboard.press("Escape");
    await page.keyboard.press("Escape");

    // Select the door and point the camera at it
    const pin = page.getByTestId("target-pin").first().locator("b");
    const box = (await pin.boundingBox())!;
    await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
    await page.getByRole("button", { name: "Camera 1", exact: true }).click();
    // Seen, but too far to see faces with a 90° lens
    await expect.poll(() => status(page)).toBe("partial");

    // Only need to notice someone there: now it's covered
    await page.getByRole("button", { name: "Notice someone" }).click();
    await expect.poll(() => status(page)).toBe("met");
    await page.keyboard.press("Escape");
    await page.locator('nav[aria-label="Steps"] button').nth(3).click();
    await expect(page.getByTestId("coverage-score")).toHaveText("1 of 1 covered");
  });

  test("Fix aims the best camera at a spot and zooms in until it sees enough", async ({ page }) => {
    await markSpot(page, 0.5, 0.45);
    await placeWithKey(page, "c", 0.5, 0.51);
    await page.keyboard.press("Escape");
    await page.keyboard.press("Escape");
    // Roughly toward the door but not on it, with the wide lens: seen, too far for faces
    const [cam] = await itemsOfType(page, "camera");
    await page.evaluate(id => {
      const s = (window as any).__scpProject();
      s.setField("items", s.items.map((i: any) => (i.id === id ? { ...i, rotation: 250 } : i)));
    }, cam.id);
    await expect.poll(() => status(page)).toBe("partial");
    await page.locator('nav[aria-label="Steps"] button').nth(2).click();
    await page.getByRole("button", { name: "Fix Door 1" }).click();
    await expect.poll(() => status(page)).toBe("met");
    await expect(page.getByRole("status")).toContainText(/Aimed Camera 1 at Door 1 and zoomed in to \d+° wide/);
    const [fixed] = await itemsOfType(page, "camera");
    expect(Math.abs(((fixed.rotation - 270 + 540) % 360) - 180)).toBeLessThan(3); // straight at the door (north)
    expect(fixed.hFov).toBeLessThan(cam.hFov);
    await expect(page.getByRole("button", { name: "Fix Door 1" })).toHaveCount(0);
    // Undo puts the camera back
    await page.getByRole("status").getByRole("button", { name: "Undo" }).click();
    await expect.poll(() => status(page)).toBe("partial");
  });

  test("a building between the camera and the door blocks it", async ({ page }) => {
    // Door 40 ft north of a house, camera 30 ft south of it (84 ft apart, within range)
    await markSpot(page, 0.5, 0.45);
    await placeWithKey(page, "b", 0.5, 0.5);
    await page.keyboard.press("Escape");
    await placeWithKey(page, "c", 0.5, 0.56);
    expect((await itemsOfType(page, "camera"))[0].mount.type).toBe("free");
    await page.getByRole("button", { name: /→ Door 1/ }).click();
    await page.keyboard.press("Escape");
    await expect(page.getByTestId("coverage-panel")).toContainText("blocked by a building or tree");
    expect(await status(page)).toBe("none");
  });

  test("aim a camera by clicking a spot on the map", async ({ page }) => {
    await placeWithKey(page, "c", 0.3, 0.5);
    await page.getByRole("button", { name: "Aim at a spot on the map" }).click();
    await expect(page.getByText(/Click where the camera should look/)).toBeVisible();
    const p = await planPoint(page, 0.6, 0.5);
    await page.mouse.click(p.x, p.y);
    const [cam] = await itemsOfType(page, "camera");
    const off = Math.min(Math.abs(cam.rotation), Math.abs(360 - cam.rotation));
    expect(off).toBeLessThan(2); // due east
    expect(cam.pitch).toBeLessThan(0);
    // The camera stays selected (the click didn't deselect it)
    await expect(page.getByRole("button", { name: "Aim at a spot on the map" })).toBeVisible();
  });

  test("outcome presets pick lens and resolution", async ({ page }) => {
    await placeWithKey(page, "c", 0.5, 0.5);
    await page.getByRole("group", { name: "What should it see" }).getByRole("button", { name: "License plates" }).click();
    const [cam] = await itemsOfType(page, "camera");
    expect(cam.lensPreset).toBe("12mm");
    expect(cam.resolutionWidth).toBe(3840);
    expect(cam.range).toBe(90);
  });

  test("blind spots overlay shows what no camera sees", async ({ page }) => {
    await placeWithKey(page, "c", 0.5, 0.5);
    await page.keyboard.press("Escape");
    await page.locator('nav[aria-label="Steps"] button').nth(3).click();
    await page.getByLabel("Show blind spots").check();
    await expect(page.getByTestId("blind-spots")).toBeVisible();
    await expect(page.getByTestId("coverage-panel")).toContainText(/\d+% of the area around your cameras unseen/);
  });

  test("clicking a building with the camera tool mounts the camera on its wall", async ({ page }) => {
    await placeWithKey(page, "b", 0.5, 0.5);
    await page.keyboard.press("Escape");
    await placeWithKey(page, "c", 0.5, 0.5); // right in the middle of the house
    const [cam] = await itemsOfType(page, "camera");
    expect(cam.mount.type).toBe("building");
    expect(await itemsOfType(page, "building")).toHaveLength(1);
  });

  test("Suggest cameras covers the spots that aren't covered yet", async ({ page }) => {
    await placeWithKey(page, "b", 0.5, 0.5); // a 50 x 36 ft house
    await page.keyboard.press("Escape");
    await markSpot(page, 0.5, 0.57); // ~40 ft south of the house center (a door area)
    await markSpot(page, 0.5, 0.43); // north side
    await expect(page.getByTestId("coverage-score")).toHaveText("0 of 2 covered");
    await page.getByRole("button", { name: "Suggest cameras for the rest" }).click();
    await expect(page.getByTestId("coverage-score")).toHaveText("2 of 2 covered");
    const cams = await itemsOfType(page, "camera");
    expect(cams.length).toBeGreaterThanOrEqual(1);
    expect(cams.every((c: any) => c.mount.type === "building")).toBe(true);
    // One undo removes them all
    await page.keyboard.press("Control+z");
    expect(await itemsOfType(page, "camera")).toHaveLength(0);
  });

  test("Suggest cameras only mounts on your own buildings", async ({ page }) => {
    await placeWithKey(page, "b", 0.5, 0.5);
    // Not mine: a neighbor's house
    await page.getByLabel("My building").uncheck();
    await page.keyboard.press("Escape");
    await markSpot(page, 0.5, 0.57);
    await page.getByRole("button", { name: "Suggest cameras for the rest" }).click();
    await expect(page.getByRole("status")).toContainText("Mark which building is yours");
    expect(await itemsOfType(page, "camera")).toHaveLength(0);
    // Mark it as mine from the Buildings list (the message takes you there): now cameras go on it
    const [b] = await itemsOfType(page, "building");
    await page.getByRole("status").getByRole("button", { name: "Show buildings" }).click();
    await page.getByRole("checkbox", { name: /is mine$/ }).check();
    expect((await itemsOfType(page, "building"))[0].mine).toBe(true);
    await page.locator('nav[aria-label="Steps"] button').nth(2).click();
    await page.getByRole("button", { name: "Suggest cameras for the rest" }).click();
    await expect.poll(async () => (await itemsOfType(page, "camera")).length).toBeGreaterThan(0);
    expect((await itemsOfType(page, "camera")).every((c: any) => c.mount.buildingId === b.id)).toBe(true);
  });

  test("night check limits cameras to their infrared reach", async ({ page }) => {
    await markSpot(page, 0.5, 0.5);
    await placeWithKey(page, "c", 0.5, 0.58); // ~67 ft away
    await page.getByRole("group", { name: "Night vision reach" }).getByRole("button", { name: "50 ft" }).click();
    await page.getByRole("button", { name: /→ Door 1/ }).click();
    await page.keyboard.press("Escape");
    // Door 1 only needs "notice someone": covered by day...
    const pin = page.getByTestId("target-pin").first().locator("b");
    const box = (await pin.boundingBox())!;
    await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
    await page.getByRole("button", { name: "Notice someone" }).click();
    await page.keyboard.press("Escape");
    await expect.poll(() => status(page)).toBe("met");
    // ...but not at night with a 50 ft infrared reach
    await page.getByLabel("Check at night").check();
    await expect.poll(() => status(page)).toBe("none");
  });
});

