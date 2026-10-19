import { test, expect, drag, itemsOfType, placeWithKey, planPoint, screenOf } from "./fixtures";

// The empty plan is 1000 x 700 ft. These helpers place things by fraction of the plan's box.
const markSpot = async (page: any, fx: number, fy: number) => {
  await page.locator('nav[aria-label="Steps"] button').nth(2).click();
  await page.getByRole("button", { name: /Mark another spot/ }).click();
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
    // The checklist says which camera sees it and what it still needs, in full (not cut off)
    const row = page.getByRole("list", { name: "Protected spots" }).getByText(/^Camera 1: .*, needs faces$/);
    await expect(row).toBeVisible();
    expect(await row.evaluate(el => el.scrollWidth <= el.clientWidth && el.scrollHeight <= el.clientHeight + 1)).toBe(true);

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

  test("Fix turns a camera that isn't needed elsewhere instead of adding one", async ({ page }) => {
    await markSpot(page, 0.5, 0.45);
    await placeWithKey(page, "c", 0.5, 0.51);
    await page.keyboard.press("Escape");
    await page.keyboard.press("Escape");
    // Facing straight away from the door: nothing sees it
    const [cam] = await itemsOfType(page, "camera");
    await page.evaluate(id => {
      const s = (window as any).__scpProject();
      s.setField("items", s.items.map((i: any) => (i.id === id ? { ...i, rotation: 90 } : i)));
    }, cam.id);
    await expect.poll(() => status(page)).toBe("none");
    await page.locator('nav[aria-label="Steps"] button').nth(2).click();
    await page.getByRole("button", { name: "Fix Door 1" }).click();
    await expect(page.getByRole("status")).toContainText(/Aimed Camera 1 at Door 1/);
    expect(await itemsOfType(page, "camera")).toHaveLength(1); // no new camera
    await expect.poll(() => status(page)).not.toBe("none");
  });

  test("a spot under its default name is renamed when its kind changes; a name you gave it stays", async ({ page }) => {
    await markSpot(page, 0.5, 0.45);
    await markSpot(page, 0.4, 0.45);
    await page.locator('nav[aria-label="Steps"] button').nth(2).click();
    const rows = page.getByRole("list", { name: "Protected spots" }).getByRole("listitem");
    await rows.nth(1).getByLabel("Kind").selectOption({ label: "Driveway" });
    await expect.poll(async () => (await itemsOfType(page, "target")).map(t => t.label)).toEqual(["Door 1", "Driveway 1"]);
    // Picking the kind it already has changes nothing
    await rows.nth(0).getByLabel("Kind").selectOption({ label: "Door" });
    await expect.poll(async () => (await itemsOfType(page, "target")).map(t => t.label)).toEqual(["Door 1", "Driveway 1"]);
    // Named by the user: kept
    const [first] = await itemsOfType(page, "target");
    await page.evaluate(id => {
      const s = (window as any).__scpProject();
      s.setField("items", s.items.map((i: any) => (i.id === id ? { ...i, label: "Back porch" } : i)));
    }, first.id);
    await rows.nth(0).getByLabel("Kind").selectOption({ label: "Yard" });
    await expect.poll(async () => (await itemsOfType(page, "target")).map(t => [t.label, t.kind])).toEqual([["Back porch", "yard"], ["Driveway 1", "driveway"]]);
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
    // Made a carport (roof on posts): the camera sees through it
    const [b] = await itemsOfType(page, "building");
    await page.evaluate(id => (window as any).__scpSelect(id), b.id);
    await page.getByLabel("Inspector").getByLabel("Whole building is open (carport, pavilion)").check();
    expect((await itemsOfType(page, "building"))[0].openSides).toBe(true);
    await expect.poll(() => status(page)).not.toBe("none");
  });

  test("draw porch and carport parts of a house: a camera sees under the porch; each part can be removed", async ({ page }) => {
    await placeWithKey(page, "b", 0.5, 0.5);
    await page.keyboard.press("Escape");
    const [b] = await itemsOfType(page, "building");
    const upf = await page.evaluate(() => (window as any).__scpProject().planGeoRef?.unitsPerFoot ?? 1);
    const front = b.y + b.height / 2; // the south wall
    // A door just inside the south wall, a camera 25 ft south of the house looking at it
    await page.locator('nav[aria-label="Steps"] button').nth(2).click();
    await page.getByRole("button", { name: /Mark another spot/ }).click();
    const spot = await screenOf(page, b.x, front - 2 * upf);
    await page.mouse.click(spot.x, spot.y);
    await page.keyboard.press("Escape");
    await page.keyboard.press("c");
    const cam = await screenOf(page, b.x, front + 25 * upf);
    await page.mouse.click(cam.x, cam.y);
    await page.getByRole("button", { name: /→ Door 1/ }).click();
    await page.keyboard.press("Escape");
    await expect.poll(() => status(page)).toBe("none"); // the south wall is in the way
    // Zoom in on the house so the parts are drawn at a useful size
    await page.evaluate(([b, upf]) => (window as any).__scpView.fitBounds({ minX: b.x - b.width / 2 - 5 * upf, maxX: b.x + b.width / 2 + 5 * upf, minY: b.y - b.height / 2 - 5 * upf, maxY: b.y + b.height / 2 + 30 * upf }, { animate: false }), [b, upf] as const);
    await page.waitForTimeout(300);

    const inspector = page.getByLabel("Inspector");
    const drawPart = async (x0: number, y0: number, x1: number, y1: number) => {
      await page.evaluate(id => (window as any).__scpSelect(id), b.id);
      await inspector.getByRole("button", { name: "+ Porch" }).click();
      await drag(page, await screenOf(page, x0, y0), await screenOf(page, x1, y1));
    };
    // Esc leaves the drawing tool without adding anything
    await page.evaluate(id => (window as any).__scpSelect(id), b.id);
    await inspector.getByRole("button", { name: "+ Porch" }).click();
    await expect(inspector.getByRole("button", { name: /Click a wall, or drag over the porch/ })).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(inspector.getByRole("button", { name: "+ Porch" })).toBeVisible();
    expect((await itemsOfType(page, "building"))[0].openParts ?? []).toHaveLength(0);

    // A porch across the front, 6 ft deep: the camera now sees the door under it; the house stays closed
    await drawPart(b.x - b.width / 2 - 2 * upf, front - 6 * upf, b.x + b.width / 2 + 2 * upf, front + 2 * upf);
    await expect.poll(async () => ((await itemsOfType(page, "building"))[0].openParts ?? []).length).toBe(1);
    expect((await itemsOfType(page, "building"))[0].openSides).toBeFalsy();
    await expect.poll(() => status(page)).not.toBe("none");
    // A second part (a carport at the back)
    const back = b.y - b.height / 2;
    await drawPart(b.x - b.width / 2 - 2 * upf, back - 2 * upf, b.x, back + 8 * upf);
    await expect.poll(async () => ((await itemsOfType(page, "building"))[0].openParts ?? []).length).toBe(2);
    await page.evaluate(id => (window as any).__scpSelect(id), b.id);
    await expect(inspector.getByTestId("open-parts")).toContainText("Porch 2");
    // Remove the porch: the wall is back in the way; the carport stays
    await inspector.getByRole("button", { name: "Remove open part 1" }).click();
    await expect.poll(async () => ((await itemsOfType(page, "building"))[0].openParts ?? []).length).toBe(1);
    await expect.poll(() => status(page)).toBe("none");
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
    await page.getByLabel("Inspector").getByLabel("Part of my camera plan").uncheck();
    await page.keyboard.press("Escape");
    await markSpot(page, 0.5, 0.57);
    await page.getByRole("button", { name: "Suggest cameras for the rest" }).click();
    await expect(page.getByRole("status")).toContainText("Tick which buildings are part of your camera plan");
    expect(await itemsOfType(page, "camera")).toHaveLength(0);
    // Mark it as mine from the Buildings list (the message takes you there): now cameras go on it
    const [b] = await itemsOfType(page, "building");
    await page.getByRole("status").getByRole("button", { name: "Show buildings" }).click();
    await page.getByRole("checkbox", { name: /is part of my camera plan$/ }).check();
    expect((await itemsOfType(page, "building"))[0].mine).toBe(true);
    // The Cameras step lists the buildings in the plan too, with the same tick
    await page.locator('nav[aria-label="Steps"] button').nth(2).click();
    const inPlan = page.getByTestId("plan-buildings").getByRole("checkbox", { name: /is part of my camera plan$/ });
    await expect(inPlan).toBeChecked();
    await inPlan.uncheck();
    expect((await itemsOfType(page, "building"))[0].mine).toBe(false);
    await inPlan.check();
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

