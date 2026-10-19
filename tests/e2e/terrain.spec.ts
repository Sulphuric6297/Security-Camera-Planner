import { test, expect, importSite, itemsOfType, planPoint, terrainRelief, project } from "./fixtures";

test.describe("terrain & elevation", () => {
  test("contours are off by default and can be toggled", async ({ page }) => {
    await importSite(page);
    const group = page.getByRole("group", { name: "Elevation display" });
    await expect(group.getByRole("button", { name: "Off" })).toHaveAttribute("aria-pressed", "true");
    await group.getByRole("button", { name: "Contours" }).click();
    await expect(page.getByText(/contours \d+(\.\d+)? ft/)).toBeVisible();
    await group.getByRole("button", { name: "Off" }).click();
  });

  test("sculpted terrain survives a reload (not overwritten by the downloaded elevation)", async ({ page }) => {
    await importSite(page);
    const reliefBefore = await terrainRelief(page);
    // Sculpt a mound in the plan view
    await page.getByRole("toolbar", { name: "Tools" }).getByRole("button", { name: "Terrain" }).click();
    const p = await planPoint(page, 0.5, 0.5);
    await page.mouse.move(p.x, p.y);
    await page.mouse.down();
    await page.waitForTimeout(1200);
    await page.mouse.up();
    const sculpted = await terrainRelief(page);
    expect(sculpted).toBeGreaterThan(reliefBefore + 5);

    await page.waitForTimeout(1500); // autosave
    await page.reload();
    await expect.poll(async () => Object.keys((await project(page)).terrainHeights).length).toBeGreaterThan(0);
    await page.waitForTimeout(2500); // past any DEM auto-apply
    expect(Math.abs((await terrainRelief(page)) - sculpted)).toBeLessThan(0.5);
  });

  test("the sculpt brush works as fast with few frames a second (slow device)", async ({ page }) => {
    await importSite(page);
    const reliefBefore = await terrainRelief(page);
    // From here on, about 8 frames a second (the import itself runs at normal speed)
    await page.evaluate(() => {
      window.requestAnimationFrame = (cb: FrameRequestCallback) => window.setTimeout(() => cb(performance.now()), 120);
      window.cancelAnimationFrame = (id: number) => window.clearTimeout(id);
    });
    await page.getByRole("toolbar", { name: "Tools" }).getByRole("button", { name: "Terrain" }).click();
    const p = await planPoint(page, 0.5, 0.5);
    await page.mouse.move(p.x, p.y);
    await page.mouse.down();
    await page.waitForTimeout(1200);
    await page.mouse.up();
    // The same hold raises the ground as much as at full frame rate (over 5 ft)
    expect(await terrainRelief(page)).toBeGreaterThan(reliefBefore + 5);
  });

  test("the Woods brush plants spaced-out trees off the buildings; Shift clears them; Undo", async ({ page }) => {
    test.setTimeout(180_000); // every brush step redraws the 3D view (slow without a GPU)
    await importSite(page);
    const before = (await itemsOfType(page, "tree")).length;
    await page.getByRole("toolbar", { name: "Tools" }).getByRole("button", { name: "Terrain" }).click();
    await page.getByRole("button", { name: "Woods" }).click();
    await page.getByRole("group", { name: "Kind of woods" }).getByRole("button", { name: "Pine" }).click();
    // Brush across the site
    const a = await planPoint(page, 0.25, 0.3), b = await planPoint(page, 0.75, 0.7);
    await page.mouse.move(a.x, a.y);
    await page.mouse.down();
    await page.mouse.move(b.x, b.y, { steps: 10 });
    await page.waitForTimeout(400);
    await page.mouse.up();
    const trees = await itemsOfType(page, "tree");
    const planted = trees.slice(before);
    expect(planted.length).toBeGreaterThan(5);
    expect(planted.every((t: any) => t.treeType === "conifer")).toBe(true);
    // Spaced like a wood, not on top of each other (default strength: at least ~17 ft)
    for (let i = 0; i < planted.length; i++) for (let j = i + 1; j < planted.length; j++) {
      expect(Math.hypot(planted[i].x - planted[j].x, planted[i].y - planted[j].y)).toBeGreaterThan(12);
    }
    // None on a building
    const onBuilding = await page.evaluate(ids => {
      const p = (window as any).__scpProject();
      return p.items.filter((i: any) => ids.includes(i.id)).filter((t: any) => p.items.some((b: any) => b.type === "building" &&
        (window as any).__scpView.screenBox(b.id) && Math.abs(t.x - b.x) < 5 && Math.abs(t.y - b.y) < 5)).length;
    }, planted.map((t: any) => t.id));
    expect(onBuilding).toBe(0);
    // Undo takes the whole stroke back
    await page.keyboard.press("Escape");
    await page.keyboard.press("Control+z");
    await expect.poll(async () => (await itemsOfType(page, "tree")).length).toBe(before);
    await page.keyboard.press("Control+Shift+z");
    await expect.poll(async () => (await itemsOfType(page, "tree")).length).toBe(trees.length);
    // Shift-brush clears them
    const woods = page.getByRole("button", { name: "Woods" });
    if (!(await woods.isVisible())) await page.getByRole("toolbar", { name: "Tools" }).getByRole("button", { name: "Terrain" }).click();
    await woods.click();
    await page.keyboard.down("Shift");
    await page.mouse.move(a.x, a.y);
    await page.mouse.down();
    await page.mouse.move(b.x, b.y, { steps: 10 });
    await page.mouse.up();
    await page.keyboard.up("Shift");
    expect((await itemsOfType(page, "tree")).length).toBeLessThan(trees.length - 3);
  });
});
