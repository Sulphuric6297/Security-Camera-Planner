import { test, expect, placeWithKey } from "./fixtures";

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
    await page.getByRole("button", { name: "Report", exact: true }).click();
    const [popup] = await Promise.all([context.waitForEvent("page"), page.getByRole("button", { name: "Report PDF" }).click()]);
    await popup.waitForLoadState();
    await expect(popup.getByText("Camera schedule")).toBeVisible({ timeout: 15_000 });
    await expect(popup.locator("tbody tr")).toHaveCount(1);
    await expect(popup.locator("tbody tr")).toContainText("11 ft");
    await expect(popup.locator("img")).toHaveCount(2); // site plan + camera view
  });
});
