import { test, expect, drag, importSite, itemsOfType, placeWithKey } from "./fixtures";

test.describe("3D, camera views and report", () => {
  test("3D view and the camera preview render", async ({ page }) => {
    await placeWithKey(page, "b", 0.45, 0.4);
    await placeWithKey(page, "c", 0.5, 0.6);
    // Camera preview canvas has real pixels (sky + ground)
    const nonBlank = await page.locator("canvas").evaluateAll(canvases =>
      canvases.some(c => {
        const ctx = (c as HTMLCanvasElement).getContext("2d");
        if (!ctx || !c.width) return false;
        const d = ctx.getImageData(0, 0, c.width, c.height).data;
        let lit = 0;
        for (let i = 0; i < d.length; i += 400) if (d[i] + d[i + 1] + d[i + 2] > 60) lit++;
        return lit > 20;
      })
    );
    expect(nonBlank).toBe(true);
    await page.keyboard.press("3");
    await expect(page.locator("canvas").first()).toBeVisible();
    await page.waitForTimeout(800);
  });

  test("3D overview of a large site: no fog, sun shadows cover the whole site", async ({ page }) => {
    await importSite(page);
    await page.getByRole("tab", { name: "3D" }).click(); // the toast's own button is covered by the import tests
    await expect.poll(() => page.evaluate(() => !!(window as any).__scpThree()?.scene)).toBe(true);
    const info = await page.evaluate(() => {
      const t = (window as any).__scpThree();
      const p = (window as any).__scpProject();
      let sun: any = null;
      t.scene.traverse((o: any) => { if (o.isDirectionalLight && o.castShadow) sun = o; });
      const cam = sun.shadow.camera;
      return { fog: t.scene.fog, span: Math.max(p.canvasSize.width, p.canvasSize.height), halfW: (cam.right - cam.left) / 2, halfH: (cam.top - cam.bottom) / 2 };
    });
    // Fog used to darken the far side of big sites.
    expect(info.fog).toBeNull();
    // The satellite photo is drawn over the terrain (it used to end up hidden under it).
    const photo = await page.evaluate(() => {
      let m: any = null;
      (window as any).__scpThree().scene.traverse((o: any) => { if (o.name === "terrain-map-plane") m = o.material; });
      return m && { visible: m.visible, hasMap: !!m.map, transparent: m.transparent };
    });
    expect(photo).toEqual({ visible: true, hasMap: true, transparent: true });
    // The shadow camera must reach every corner of the site (the default covered ~10 ft).
    expect(info.halfW).toBeGreaterThanOrEqual(info.span * Math.SQRT1_2);
    expect(info.halfH).toBeGreaterThanOrEqual(info.span * Math.SQRT1_2);
  });

  test("3D buildings get real roofs, solid by default; photo roofs are an option; the roof can be changed", async ({ page }) => {
    await importSite(page);
    await page.getByRole("tab", { name: "3D" }).click(); // the toast's own button is covered by the import tests
    await expect.poll(() => page.evaluate(() => !!(window as any).__scpThree()?.scene)).toBe(true);
    const roofs = () =>
      page.evaluate(() => {
        const out: { id: string; kind: string; photo: boolean }[] = [];
        (window as any).__scpThree().scene.traverse((o: any) => {
          if (o.name === "building-roof") out.push({ id: o.userData.itemId, kind: o.userData.roofKind, photo: !!o.material.map });
        });
        return out;
      });
    await expect.poll(async () => (await roofs()).length).toBe(2);
    const before = await roofs();
    expect(before.every(r => !r.photo)).toBe(true);
    expect(before.some(r => r.kind === "hip" || r.kind === "gable")).toBe(true);

    // The satellite photo on roofs is a choice
    await page.getByLabel("Photo on roofs").check();
    await expect.poll(async () => (await roofs()).every(r => r.photo)).toBe(true);
    await page.getByLabel("Photo on roofs").uncheck();
    await expect.poll(async () => (await roofs()).every(r => !r.photo)).toBe(true);

    // Change one building's roof to flat in the inspector
    const target = before.find(r => r.kind !== "flat")!;
    await page.evaluate(id => (window as any).__scpSelect?.(id), target.id);
    await page.getByRole("group", { name: "Roof shape" }).getByRole("button", { name: "flat" }).click();
    await expect.poll(async () => (await roofs()).find(r => r.id === target.id)?.kind).toBe("flat");
  });

  test("walls have siding and windows; a door marked next to a wall is drawn on it", async ({ page }) => {
    // A 50 x 36 ft house in the middle of the 1000 x 700 ft plan: its south wall is 18 ft below the center
    await placeWithKey(page, "b", 0.5, 0.5);
    await page.keyboard.press("Escape");
    await page.keyboard.press("Escape");
    const [house] = await itemsOfType(page, "building");
    const scene = () => page.evaluate(id => {
      let walls = false, doors = 0;
      (window as any).__scpThree().scene.traverse((o: any) => {
        if (o.name === "building-walls" && o.userData.itemId === id) walls = !!o.material.map;
        if (o.name === "building-door" && o.parent?.userData.itemId === id) doors++;
      });
      return { walls, doors };
    }, house.id);
    await expect.poll(scene).toEqual({ walls: true, doors: 0 });
    // Mark the front door 3 ft out from the south wall
    await page.locator('nav[aria-label="Steps"] button').nth(2).click();
    await page.getByRole("button", { name: /Mark another spot/ }).click();
    const at = await page.evaluate(([x, y]) => (window as any).__scpView.toClient(x, y), [house.x, house.y + 21] as const);
    await page.mouse.click(at.x, at.y);
    await page.keyboard.press("Escape");
    await expect.poll(scene).toEqual({ walls: true, doors: 1 });
    // Moved far from the house, it is no longer a door on its wall
    const [door] = await itemsOfType(page, "target");
    await page.evaluate(id => {
      const s = (window as any).__scpProject();
      s.setField("items", s.items.map((i: any) => (i.id === id ? { ...i, y: i.y + 100 } : i)));
    }, door.id);
    await expect.poll(scene).toEqual({ walls: true, doors: 0 });
  });

  test("the camera view is a window you can move and resize; it starts centered", async ({ page }) => {
    await page.evaluate(() => { localStorage.removeItem("scp.cameraViewPos"); localStorage.removeItem("scp.cameraViewWidth"); });
    await page.reload();
    await placeWithKey(page, "c", 0.3, 0.3);
    const win = page.getByRole("dialog", { name: "Camera view" });
    await expect(win).toBeVisible();
    const map = (await page.getByTestId("plan").boundingBox())!;
    const box = (await win.boundingBox())!;
    // Centered in the part of the map not covered by the edit panel on the right
    const panel = (await page.getByLabel("Inspector").boundingBox())!;
    expect(Math.abs(box.x + box.width / 2 - (map.x + (panel.x - map.x) / 2))).toBeLessThan(4);
    expect(box.y + box.height).toBeGreaterThan(map.y + map.height * 0.6);

    // Drag it by the title bar
    const bar = (await win.getByTestId("window-titlebar").boundingBox())!;
    await drag(page, { x: bar.x + 60, y: bar.y + bar.height / 2 }, { x: bar.x - 140, y: bar.y + bar.height / 2 - 200 });
    const moved = (await win.boundingBox())!;
    expect(moved.x).toBeCloseTo(box.x - 200, -1);
    expect(moved.y).toBeCloseTo(box.y - 200, -1);

    // Resize from the corner; the picture gets bigger too
    const grip = (await win.getByTestId("window-resize").boundingBox())!;
    await drag(page, { x: grip.x + 8, y: grip.y + 8 }, { x: grip.x + 128, y: grip.y + 8 });
    expect((await win.boundingBox())!.width).toBeCloseTo(box.width + 120, -1);
    await expect.poll(() => win.locator("canvas").evaluate((c: HTMLCanvasElement) => c.width)).toBeGreaterThan(500);

    // Let go near the left edge: it snaps flush to it
    const bar2 = (await win.getByTestId("window-titlebar").boundingBox())!;
    const map2 = (await page.getByTestId("plan").boundingBox())!;
    await drag(page, { x: (await win.boundingBox())!.x + 60, y: bar2.y + 10 }, { x: map2.x + 25 + 60, y: bar2.y + 10 });
    await expect.poll(async () => Math.round((await win.boundingBox())!.x - map2.x)).toBe(12);

    // Minimize to the title bar, then bring the picture back
    await win.getByRole("button", { name: "Minimize" }).click();
    await expect(win.locator("canvas")).toHaveCount(0);
    await win.getByRole("button", { name: "Expand" }).click();
    await expect(win.locator("canvas")).toHaveCount(1);
    const placed = (await win.boundingBox())!;

    // Where you put it is remembered
    await page.waitForTimeout(1200); // autosave
    await page.reload();
    await page.evaluate(() => (window as any).__scpSelect((window as any).__scpProject().items[0].id));
    await expect.poll(async () => Math.round((await win.boundingBox())!.x)).toBe(Math.round(placed.x));
  });

  test("a tree in front of the house turns see-through, but not while it is selected", async ({ page }) => {
    await placeWithKey(page, "b", 0.5, 0.4);
    await page.keyboard.press("Escape");
    const [b] = await itemsOfType(page, "building");
    // A big tree just south of the house: between the 3D view (looking north) and the house
    await page.evaluate(b => (window as any).__scpProject().setField("items", (prev: any[]) => [...prev, { id: "t1", type: "tree", x: b.x, y: b.y + b.height / 2 + 9, rotation: 0, radius: 12, height: 32, color: "#4a7a3a", treeType: "deciduous" }]), b);
    await page.keyboard.press("3");
    await page.waitForTimeout(500);
    await page.evaluate(b => (window as any).__scpView.fitBounds({ minX: b.x - 35, maxX: b.x + 35, minY: b.y - 25, maxY: b.y + 40 }, { animate: false }), b);
    const faded = () => page.evaluate(() => {
      let min = 1;
      (window as any).__scpThree().scene.traverse((o: any) => {
        if (o.userData.itemId !== "t1" || !o.isMesh) return;
        for (const m of Array.isArray(o.material) ? o.material : [o.material]) if (m.transparent) min = Math.min(min, m.opacity);
      });
      return min;
    });
    await expect.poll(faded, { timeout: 5000 }).toBeLessThan(0.6);
    // Selected: solid again, it's what you're working on
    await page.evaluate(() => (window as any).__scpSelect("t1"));
    await expect.poll(faded, { timeout: 5000 }).toBeGreaterThan(0.99);
  });

  test("Camera wall shows one tile per camera", async ({ page }) => {
    await placeWithKey(page, "c", 0.3, 0.5);
    await placeWithKey(page, "c", 0.7, 0.5);
    await page.keyboard.press("Escape");
    await page.getByRole("tab", { name: "Camera wall: every camera's view" }).click();
    await expect(page.locator(".react-grid-item")).toHaveCount(2);
    await expect(page.locator(".react-grid-item img").first()).toHaveAttribute("src", /^data:image\/png/);
  });

  test("PDF report includes the camera schedule and views", async ({ page, context }) => {
    await placeWithKey(page, "b", 0.45, 0.4);
    await placeWithKey(page, "c", 0.5, 0.6);
    await page.getByRole("button", { name: /^Eave/ }).click();
    await page.keyboard.press("Escape");
    // The Report step's panel has the one-click PDF
    await page.locator('nav[aria-label="Steps"] button').nth(4).click();
    const [popup] = await Promise.all([context.waitForEvent("page"), page.getByRole("button", { name: "Download PDF report" }).click()]);
    await popup.waitForLoadState();
    await expect(popup.getByText("Camera schedule")).toBeVisible({ timeout: 15_000 });
    await expect(popup.locator("#camera-schedule tbody tr")).toHaveCount(1);
    await expect(popup.locator("#camera-schedule tbody tr")).toContainText("11 ft");
    await expect(popup.locator("#parts-list tbody tr")).toHaveCount(1);
    await expect(popup.locator("img")).toHaveCount(2); // site plan + camera view
  });

  test("PDF report includes the coverage checklist; camera list downloads as CSV", async ({ page, context }) => {
    await page.locator('nav[aria-label="Steps"] button').nth(2).click();
    await page.getByRole("button", { name: /Mark another spot/ }).click();
    const box = (await page.getByTestId("plan").boundingBox())!;
    await page.mouse.click(box.x + box.width * 0.5, box.y + box.height * 0.45);
    await page.keyboard.press("Escape");
    await placeWithKey(page, "c", 0.5, 0.5);
    await page.getByRole("button", { name: /→ Door 1/ }).click();
    await page.keyboard.press("Escape");
    await page.locator('nav[aria-label="Steps"] button').nth(4).click();
    const [popup] = await Promise.all([context.waitForEvent("page"), page.getByRole("button", { name: "Download PDF report" }).click()]);
    await popup.waitForLoadState();
    await expect(popup.locator("#coverage-checklist tbody tr")).toHaveCount(1, { timeout: 15_000 });
    await expect(popup.locator("#coverage-checklist")).toContainText("Door 1");
    await expect(popup.locator("#camera-schedule thead")).toContainText("Night (IR)");
    await expect(popup.getByText(/TB of storage/)).toBeVisible();
    await popup.close();

    // Storage estimate in the Report step follows the days kept
    const est = page.getByTestId("storage-estimate");
    await expect(est).toContainText("TB");
    const before = await est.textContent();
    await page.getByLabel("Days to keep").selectOption("90");
    await expect(est).not.toHaveText(before!);

    const [download] = await Promise.all([page.waitForEvent("download"), page.getByRole("button", { name: /camera list \(CSV\)/ }).click()]);
    expect(download.suggestedFilename()).toMatch(/\.csv$/);
    const text = await (await download.createReadStream()).toArray().then(chunks => Buffer.concat(chunks).toString("utf8"));
    expect(text.split("\n")[0]).toContain("Faces to (ft)");
    expect(text).toContain("Camera 1");
    expect(text).toContain("Door 1");
  });
});
