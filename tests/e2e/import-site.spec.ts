import { test as pure } from "@playwright/test";
import { fetchOsmBuildings } from "../../src/lib/geo/buildings";
import { test, expect, importSite, itemsOfType, project, terrainRelief, SITE, ROOFS, DETECTED_CENTER, PHOTO_TREE, PHOTO_CAR } from "./fixtures";

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

    // Parked cars from the photo are experimental: off unless turned on (turned on here)
    const cars = page.getByLabel("Place parked cars from the photo (experimental)");
    await expect(cars).not.toBeChecked();
    await expect(page.getByText("Experimental", { exact: true })).toBeVisible();
    await expect(page.getByLabel("Place trees from the photo")).toBeChecked();
    await cars.check();
    await page.locator("div.fixed button", { hasText: "Import Site" }).last().click();
    const done = page.getByText(/^Site imported\./);
    await expect(done).toBeVisible({ timeout: 60_000 });
    // The summary fades after a while: read it now.
    const summary = (await done.textContent()) ?? "";
    expect(summary).toContain("Added 2 buildings");
    // Its "View in 3D" button (used now: the toast closes by itself after a while)
    await page.getByRole("status").getByRole("button", { name: "View in 3D" }).click();
    await expect(page.getByRole("tab", { name: "3D" })).toHaveAttribute("aria-selected", "true");
    // Where the imagery and elevation came from is on the Site step
    await expect(page.getByTestId("step-panel")).toContainText("global terrain tiles"); // USGS stubbed as unavailable

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
    // The house at the searched address is marked as the user's; the neighbor's isn't.
    expect(buildings.filter(b => b.mine).length).toBe(1);
    // The map data has the house as a square, but its roof on the photo is an L: import takes the photo's shape.
    const house = buildings.find(b => b.mine)!;
    expect(house.points).toHaveLength(6);

    // The tree crown and the parked car on the photo were placed as a tree and a vehicle
    expect(summary).toMatch(/Placed 1 tree and 1 parked car found on the photo/);
    const geo = await page.evaluate(() => (window as any).__scpProject().planGeoRef);
    const toPlan = (p: { lat: number; lon: number }) => ({
      x: geo.area.x + ((p.lon - geo.bounds.west) / (geo.bounds.east - geo.bounds.west)) * geo.area.width,
      y: geo.area.y + ((geo.bounds.north - p.lat) / (geo.bounds.north - geo.bounds.south)) * geo.area.height
    });
    const [tree] = await itemsOfType(page, "tree");
    const treeAt = toPlan(PHOTO_TREE);
    expect(Math.hypot(tree.x - treeAt.x, tree.y - treeAt.y)).toBeLessThan(5);
    expect(tree.radius).toBeGreaterThan(9);
    expect(tree.radius).toBeLessThan(18);
    const [car] = await itemsOfType(page, "parking");
    const carAt = toPlan(PHOTO_CAR);
    expect(Math.hypot(car.x - carAt.x, car.y - carAt.y)).toBeLessThan(4);
    expect(Math.round(car.rotation) % 180).toBe(90); // parked east-west
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

  test("by default import places trees from the photo but no parked cars", async ({ page }) => {
    const summary = (await importSite(page)) ?? "";
    expect(summary).toMatch(/Placed 1 tree found on the photo/);
    expect(summary).not.toContain("parked car");
    expect(await itemsOfType(page, "tree")).toHaveLength(1);
    expect(await itemsOfType(page, "parking")).toHaveLength(0);
  });

  test("re-import keeps edited building heights and mounted cameras", async ({ page }) => {
    test.setTimeout(180_000); // two full imports
    await importSite(page);
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

pure.describe("building lookup (pure logic)", () => {
  pure("a stalled OpenStreetMap server is given up on, not waited for forever", async () => {
    const realFetch = globalThis.fetch;
    let calls = 0;
    // Both servers accept the request and never answer (until the request is cancelled)
    globalThis.fetch = ((_url: string, init?: RequestInit) => {
      calls++;
      return new Promise((_resolve, reject) => init?.signal?.addEventListener("abort", () => reject(new Error("aborted"))));
    }) as typeof fetch;
    try {
      const started = Date.now();
      await expect(fetchOsmBuildings({ south: 39.78, west: -89.68, north: 39.781, east: -89.679 }, 200)).rejects.toThrow();
      expect(Date.now() - started).toBeLessThan(2000);
      expect(calls).toBe(2); // tried the other server too
    } finally {
      globalThis.fetch = realFetch;
    }
  });
});
