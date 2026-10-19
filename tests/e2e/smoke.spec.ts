import { test, expect } from "./fixtures";

test.describe("app shell", () => {
  test("loads with onboarding, guided steps and view switching", async ({ page }) => {
    await expect(page.getByRole("button", { name: "Find my property" })).toBeVisible();
    await expect(page.locator('nav[aria-label="Steps"] button')).toHaveCount(5);
    // The side panel shows the current step's workspace
    await expect(page.getByTestId("step-panel")).toHaveAttribute("data-step", "site");
    await expect(page.getByText("Step 1 of 5")).toBeVisible();
    // One place to start (the welcome card), not the same buttons twice
    await expect(page.getByTestId("step-panel")).toContainText("Start in the middle of the screen");
    await expect(page.getByRole("button", { name: "Search for my address" })).toHaveCount(0);

    await page.getByRole("tab", { name: "3D" }).click();
    await expect(page.locator("canvas").first()).toBeVisible();
    await page.getByRole("tab", { name: "Camera wall: every camera's view" }).click();
    await page.getByRole("tab", { name: "2D" }).click();
    await expect(page.getByText("Start your camera plan")).toBeVisible();
  });

  test("keyboard shortcuts switch tools and views", async ({ page }) => {
    await page.keyboard.press("c");
    await expect(page.getByText(/Click to place a camera/)).toBeVisible();
    await page.keyboard.press("Escape");
    await page.keyboard.press("3");
    await expect(page.getByRole("tab", { name: "3D" })).toHaveAttribute("aria-selected", "true");
    await page.keyboard.press("2");
    await expect(page.getByRole("tab", { name: "2D" })).toHaveAttribute("aria-selected", "true");
  });

  test("plan settings hold only settings that do something", async ({ page }) => {
    await page.getByRole("button", { name: /Plan settings/ }).click();
    const panel = page.getByLabel("Inspector");
    await expect(panel).toContainText("Grid");
    await expect(panel).toContainText("Camera cones in 3D");
    for (const gone of ["Clear Canvas", "Building Label Defaults", "Environment Background", "3D Snapshots", "Stats"]) {
      await expect(panel).not.toContainText(gone);
    }
  });
});
