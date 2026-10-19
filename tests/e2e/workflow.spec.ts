import { test, expect, importSite, itemBox, itemsOfType, measuredPxPerFt, placeWithKey, stubNetwork } from "./fixtures";

const step = (page: any, i: number) => page.locator('nav[aria-label="Steps"] button').nth(i);

test.describe("guided workflow and plan tools", () => {
  test("each step shows its own panel, with a Next button", async ({ page }) => {
    await placeWithKey(page, "b", 0.4, 0.4);
    await page.keyboard.press("Escape");
    await step(page, 1).click();
    const panel = page.getByTestId("step-panel");
    await expect(panel).toHaveAttribute("data-step", "buildings");
    await expect(panel.getByRole("list", { name: "Buildings" }).getByRole("listitem")).toHaveCount(1);
    // Clicking a step does not drop the user into a tool
    await expect(page.getByText(/Click to place/)).toHaveCount(0);

    await panel.getByRole("button", { name: /Next: Cameras/ }).click();
    await expect(panel).toHaveAttribute("data-step", "cameras");
    await panel.getByRole("button", { name: /Add a camera/ }).click();
    await expect(page.getByText(/Click to place a camera/)).toBeVisible();

    await step(page, 3).click();
    await expect(panel).toHaveAttribute("data-step", "review");
    await step(page, 4).click();
    await expect(panel).toHaveAttribute("data-step", "report");
    await expect(panel.getByRole("button", { name: "Download PDF report" })).toBeVisible();
    // No duplicate "Report" button in the header any more
    await expect(page.getByRole("button", { name: "Report", exact: true })).toHaveCount(0);
  });

  test("steps are ticked only when finished, not by adding one thing", async ({ page }) => {
    await placeWithKey(page, "b", 0.4, 0.4);
    await placeWithKey(page, "c", 0.6, 0.6);
    await page.keyboard.press("Escape");
    await expect(step(page, 1)).toHaveAttribute("data-done", "false");
    await expect(step(page, 2)).toHaveAttribute("data-done", "false");
    // "Next" finishes a step
    await step(page, 1).click();
    await page.getByTestId("step-panel").getByRole("button", { name: /Next: Cameras/ }).click();
    await expect(step(page, 1)).toHaveAttribute("data-done", "true");
    await expect(step(page, 2)).toHaveAttribute("data-done", "false");
  });

  test("import: the Site step ticks only after importing, then the plan opens by itself", async ({ page }) => {
    await page.getByRole("button", { name: "Find my property" }).click();
    await page.getByLabel("Search address").fill("123 Main St Fra");
    await page.getByRole("button", { name: /123 Main St/ }).click();
    await expect(page.getByText(/of \d+ buildings will be added/)).toBeVisible();
    // Finding the address is not importing the site
    await expect(step(page, 0)).toHaveAttribute("data-done", "false");
    await expect(page.getByTestId("step-panel")).toContainText("Your site");
    await page.locator("div.fixed button", { hasText: "Import Site" }).last().click();
    // The dialog closes by itself: the plan, the next step and a summary with a way into 3D
    const summary = page.getByRole("status").filter({ hasText: /^Site imported\./ });
    await expect(summary).toBeVisible({ timeout: 60_000 });
    await expect(page.getByLabel("Search address")).toBeHidden();
    await expect(step(page, 0)).toHaveAttribute("data-done", "true");
    await expect(page.getByTestId("step-panel")).toContainText("Buildings");
    await summary.getByRole("button", { name: "View in 3D" }).click();
    await expect.poll(() => page.evaluate(() => (window as any).__scpView.viewInfo().tiltDeg)).toBeGreaterThan(20);
  });

  test("the selection action bar duplicates, rotates and deletes", async ({ page }) => {
    await placeWithKey(page, "b", 0.5, 0.5);
    const bar = page.getByRole("toolbar", { name: "Selection actions" });
    await expect(bar).toBeVisible();
    await bar.getByRole("button", { name: "Duplicate" }).click();
    expect(await itemsOfType(page, "building")).toHaveLength(2);
    const [, copy] = await itemsOfType(page, "building");
    await bar.getByRole("button", { name: "Rotate" }).click();
    const rotated = (await itemsOfType(page, "building")).find(b => b.id === copy.id);
    expect(rotated.rotation).toBe(15);
    await bar.getByRole("button", { name: "Delete" }).click();
    expect(await itemsOfType(page, "building")).toHaveLength(1);
    await expect(bar).toHaveCount(0);
  });

  test("scale bar matches real distances; zoom to selection and fit", async ({ page }) => {
    await placeWithKey(page, "b", 0.5, 0.5);
    const barPxPerFt = async () => {
      const bar = (await page.getByTestId("scale-bar").boundingBox())!.width;
      const feet = parseFloat(((await page.getByTestId("scale-bar-label").textContent()) ?? "").replace(/,/g, ""));
      return bar / feet;
    };
    const a = await measuredPxPerFt(page);
    expect(Math.abs((await barPxPerFt()) - a) / a).toBeLessThan(0.03);

    await page.keyboard.press("f"); // zoom to the selected building
    await expect.poll(() => measuredPxPerFt(page)).toBeGreaterThan(a * 2);
    await page.waitForTimeout(700); // let the animation settle
    const b = await measuredPxPerFt(page);
    expect(Math.abs((await barPxPerFt()) - b) / b).toBeLessThan(0.03);

    await page.keyboard.press("0"); // back to the whole site
    await expect.poll(async () => Math.round((await measuredPxPerFt(page)) * 100)).toBe(Math.round(a * 100));
  });

  test("after importing a site the plan zooms to the property and shows north", async ({ page }) => {
    await importSite(page);
    await expect(page.getByLabel("North arrow")).toBeVisible();
    // The 58 ft house fills a good part of the view, not a speck
    const [first] = await itemsOfType(page, "building");
    await expect.poll(async () => (await itemBox(page, first.id)).width).toBeGreaterThan(120);
  });

  test("keyboard shortcuts list opens with ? and from the menu", async ({ page }) => {
    await page.keyboard.press("?");
    const dlg = page.getByRole("dialog", { name: "Keyboard shortcuts" });
    await expect(dlg).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(dlg).toHaveCount(0);
    await page.getByTitle("More").click();
    await page.getByRole("button", { name: /Keyboard shortcuts/ }).click();
    await expect(dlg).toBeVisible();
  });

  test("3D toolbar: reset view and a snapshot menu", async ({ page }) => {
    await page.keyboard.press("3");
    await expect(page.getByRole("button", { name: "Reset view" })).toBeVisible();
    await page.getByRole("button", { name: /Snapshot/ }).click();
    await page.getByRole("button", { name: "Add to the report" }).click();
    await expect.poll(async () => (await page.evaluate(() => (window as any).__scpProject().exportList.length))).toBe(1);
  });

  test("handles are bigger on touch screens", async ({ page, browser }) => {
    const handleSize = async (p: any) => {
      await placeWithKey(p, "b", 0.5, 0.5);
      const corner = p.locator('[data-handle="corner"]').first();
      await expect(corner).toBeVisible();
      return (await corner.boundingBox())!.width;
    };
    const desktop = await handleSize(page);
    const ctx = await browser.newContext({ hasTouch: true, isMobile: true, viewport: { width: 1600, height: 1000 } });
    const touch = await ctx.newPage();
    await stubNetwork(touch);
    await touch.goto("/");
    await expect(touch.getByText("Start your camera plan")).toBeVisible();
    const fingers = await touch.evaluate(() => matchMedia("(pointer: coarse)").matches);
    test.skip(!fingers, "this browser build doesn't emulate a coarse pointer");
    const touchSize = await handleSize(touch);
    expect(touchSize / desktop).toBeGreaterThan(1.3);
    await ctx.close();
  });

  test("tilting the view switches the tab to 3D; N turns north up", async ({ page }) => {
    await placeWithKey(page, "b", 0.5, 0.5);
    await page.keyboard.press("Escape");
    await page.getByRole("button", { name: "Tilt into 3D" }).click();
    await expect(page.getByRole("tab", { name: "3D" })).toHaveAttribute("aria-selected", "true");
    await page.getByRole("button", { name: "Rotate view right" }).click();
    await expect.poll(() => page.evaluate(() => Math.round((window as any).__scpView.viewInfo().heading))).toBe(23);
    await page.keyboard.press("n");
    await expect.poll(() => page.evaluate(() => Math.round((window as any).__scpView.viewInfo().heading) % 360)).toBe(0);
    await page.getByRole("tab", { name: "2D" }).click();
    await expect.poll(() => page.evaluate(() => (window as any).__scpView.viewInfo().tiltDeg)).toBeLessThan(1);
  });
});
