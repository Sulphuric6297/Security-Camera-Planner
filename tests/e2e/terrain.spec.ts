import { test, expect, importSite, planPoint, terrainRelief, project } from "./fixtures";

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
});
