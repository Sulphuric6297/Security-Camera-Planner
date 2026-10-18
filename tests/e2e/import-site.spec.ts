import { test, expect, importSite, itemsOfType, project, terrainRelief, SITE, ROOFS, DETECTED_CENTER } from "./fixtures";

test.describe("Import Site", () => {
  test("search, select area, review buildings, import imagery + elevation + buildings", async ({ page }) => {
    await page.locator('nav[aria-label="Steps"] button').first().click();
    await page.getByLabel("Search address").fill("123 Main St Fra");
    await expect(page.getByRole("button", { name: /123 Main St/ })).toBeVisible();
    await page.getByRole("button", { name: /123 Main St/ }).click();

    // Default area around the result, then candidates: 1 mapped + 1 detected (the duplicate is merged)
    await expect(page.getByText(/400 × 280 ft/).first()).toBeVisible();
    await expect(page.getByText("2 of 2 buildings will be added")).toBeVisible();

    // Toggle one building off by clicking it on the map
    const mapped = page.locator(".leaflet-overlay-pane path.leaflet-interactive").first();
    await mapped.click({ force: true });
    await expect(page.getByText("1 of 2 buildings will be added")).toBeVisible();
    await mapped.click({ force: true });
    await expect(page.getByText("2 of 2 buildings will be added")).toBeVisible();

    await page.locator("div.fixed button", { hasText: "Import Site" }).last().click();
    const done = page.getByText(/^Site imported\./);
    await expect(done).toBeVisible({ timeout: 60_000 });
    await expect(done).toContainText("Added 2 buildings");
    await expect(done).toContainText("global terrain tiles"); // USGS stubbed as unavailable

    const p = await project(page);
    expect(p.backgroundImg).toMatch(/^data:image\/jpeg/);
    expect(p.canvasSize.width).toBeGreaterThan(380);
    expect(p.canvasSize.width).toBeLessThan(420);
    // Stub terrain is a gentle slope: realistic relief, no spikes
    const relief = await terrainRelief(page);
    expect(relief).toBeGreaterThan(0.5);
    expect(relief).toBeLessThan(40);
    const buildings = await itemsOfType(page, "building");
    expect(buildings).toHaveLength(2);
    expect(buildings.every(b => b.importSource === "osm")).toBe(true);

    await page.getByRole("button", { name: "Open in 3D" }).click();
    await expect(page.getByRole("tab", { name: "3D" })).toHaveAttribute("aria-selected", "true");
  });

  test("Shift+drag draws a new area; the size label updates", async ({ page }) => {
    await page.locator('nav[aria-label="Steps"] button').first().click();
    await page.getByLabel("Search address").fill(`${SITE.lat}, ${SITE.lon}`);
    await page.getByRole("button", { name: "Search", exact: true }).click();
    await expect(page.getByText(/400 × 280 ft/).first()).toBeVisible();
    const map = (await page.locator(".leaflet-container").boundingBox())!;
    await page.keyboard.down("Shift");
    await page.mouse.move(map.x + map.width * 0.3, map.y + map.height * 0.3);
    await page.mouse.down();
    await page.mouse.move(map.x + map.width * 0.6, map.y + map.height * 0.65, { steps: 8 });
    await page.mouse.up();
    await page.keyboard.up("Shift");
    await expect(page.getByText(/400 × 280 ft/)).toHaveCount(0);
  });

  test("re-import keeps edited building heights and mounted cameras", async ({ page }) => {
    await importSite(page);
    await page.getByRole("button", { name: "Open in 2D" }).click();
    // Edit an imported building's height through the store's UI path: select and use the slider
    const before = await itemsOfType(page, "building");
    const target = before[0];
    await page.evaluate(id => {
      const s = (window as any).__scpProject();
      s.setField("items", s.items.map((i: any) => (i.id === id ? { ...i, wallHeight: 33 } : i)));
    }, target.id);
    await importSite(page);
    const after = await itemsOfType(page, "building");
    const same = after.find(b => b.id === target.id);
    expect(same, "building identity survives re-import").toBeTruthy();
    expect(same.wallHeight).toBe(33);
  });

  test("detected buildings that are off the photo get lined up with their roofs", async ({ page }) => {
    await page.locator('nav[aria-label="Steps"] button').first().click();
    await page.getByLabel("Search address").fill("123 Main St Fra");
    await page.getByRole("button", { name: /123 Main St/ }).click();
    const align = page.getByTestId("building-align");
    await expect(align).toContainText(/Lined up with the photo/, { timeout: 20_000 });

    await page.locator("div.fixed button", { hasText: "Import Site" }).last().click();
    await expect(page.getByText(/^Site imported\./)).toBeVisible({ timeout: 60_000 });

    const geo = await page.evaluate(() => (window as any).__scpProject().planGeoRef);
    const toPlan = (p: { lat: number; lon: number }) => ({
      x: geo.area.x + ((p.lon - geo.bounds.west) / (geo.bounds.east - geo.bounds.west)) * geo.area.width,
      y: geo.area.y + ((geo.bounds.north - p.lat) / (geo.bounds.north - geo.bounds.south)) * geo.area.height
    });
    const roof = toPlan(ROOFS[1]);
    const raw = toPlan(DETECTED_CENTER);
    const detected = (await itemsOfType(page, "building")).sort((a, b) => Math.hypot(a.x - raw.x, a.y - raw.y) - Math.hypot(b.x - raw.x, b.y - raw.y))[0];
    const ftPerUnit = 1 / geo.unitsPerFoot;
    const offBefore = Math.hypot(raw.x - roof.x, raw.y - roof.y) * ftPerUnit;
    const offAfter = Math.hypot(detected.x - roof.x, detected.y - roof.y) * ftPerUnit;
    expect(offBefore).toBeGreaterThan(14); // the data was ~5 m (16 ft) off
    expect(offAfter).toBeLessThan(3.5); // now within about a meter of the real roof
  });

  test("outlines can be nudged by hand and put back", async ({ page }) => {
    await page.locator('nav[aria-label="Steps"] button').first().click();
    await page.getByLabel("Search address").fill("123 Main St Fra");
    await page.getByRole("button", { name: /123 Main St/ }).click();
    const align = page.getByTestId("building-align");
    await expect(align).toContainText(/Lined up with the photo/, { timeout: 20_000 });
    const outline = page.locator(".leaflet-overlay-pane path.leaflet-interactive").last();
    const before = await outline.getAttribute("d");
    await page.getByRole("button", { name: "Move all outlines east (0.5 m)" }).click();
    await expect(align).toContainText("Moved by hand.");
    await expect.poll(() => outline.getAttribute("d")).not.toBe(before);
    await page.getByRole("button", { name: "Original" }).click();
    await expect.poll(() => outline.getAttribute("d")).not.toBe(before);
  });
});
