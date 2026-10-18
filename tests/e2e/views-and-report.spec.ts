import { test, expect, importSite, placeWithKey } from "./fixtures";

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
    await page.getByRole("button", { name: "Open in 3D" }).click();
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
    // The shadow camera must reach every corner of the site (the default covered ~10 ft).
    expect(info.halfW).toBeGreaterThanOrEqual(info.span * Math.SQRT1_2);
    expect(info.halfH).toBeGreaterThanOrEqual(info.span * Math.SQRT1_2);
  });

  test("3D buildings get real roofs textured with the photo; the roof can be changed", async ({ page }) => {
    await importSite(page);
    await page.getByRole("button", { name: "Open in 3D" }).click();
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
    expect(before.every(r => r.photo)).toBe(true);
    expect(before.some(r => r.kind === "hip" || r.kind === "gable")).toBe(true);

    // Change one building's roof to flat in the inspector
    const target = before.find(r => r.kind !== "flat")!;
    await page.keyboard.press("2");
    await page.evaluate(id => (window as any).__scpSelect?.(id), target.id);
    await page.getByRole("group", { name: "Roof shape" }).getByRole("button", { name: "flat" }).click();
    await page.keyboard.press("3");
    await expect.poll(async () => (await roofs()).find(r => r.id === target.id)?.kind).toBe("flat");
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
    await expect(popup.locator("tbody tr")).toHaveCount(1);
    await expect(popup.locator("tbody tr")).toContainText("11 ft");
    await expect(popup.locator("img")).toHaveCount(2); // site plan + camera view
  });
});
