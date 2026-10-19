import { test, expect, itemsOfType, placeWithKey, project } from "./fixtures";

test.describe("saving & loading", () => {
  test("autosave restores the plan after a reload", async ({ page }) => {
    await placeWithKey(page, "b", 0.4, 0.4);
    await placeWithKey(page, "c", 0.6, 0.6);
    await page.getByRole("button", { name: /^Pole/ }).click();
    await page.waitForTimeout(1500);
    await page.reload();
    await expect.poll(async () => (await project(page)).items.length).toBe(2);
    const [cam] = await itemsOfType(page, "camera");
    expect(cam.mount.height).toBe(15);
    // Undo right after a reload must not wipe the restored plan
    await page.waitForTimeout(500);
    await page.keyboard.press("Control+z");
    expect((await project(page)).items.length).toBe(2);
  });

  // Keep test titles ASCII: Playwright's setFiles silently fails on output paths with characters like "→".
  test("Save, New, then Open restores everything", async ({ page }, testInfo) => {
    await placeWithKey(page, "b", 0.4, 0.4);
    await placeWithKey(page, "c", 0.6, 0.6);
    await page.keyboard.press("Escape");
    const [download] = await Promise.all([page.waitForEvent("download"), page.getByTitle(/Save plan/).click()]);
    expect(download.suggestedFilename()).toBe("Security_Camera_Plan.zip"); // named after the plan
    const file = testInfo.outputPath(download.suggestedFilename());
    await download.saveAs(file);

    await page.getByTitle("New plan").click();
    await expect.poll(async () => (await project(page)).items.length).toBe(0);

    await page.getByTitle("Open plan").click();
    const [chooser] = await Promise.all([page.waitForEvent("filechooser"), page.getByRole("menuitem", { name: "Open a saved file" }).click()]);
    await chooser.setFiles(file);
    await expect.poll(async () => (await project(page)).items.map(i => i.type).sort().join(",")).toBe("building,camera");
  });

  test("New keeps the plan under Recent plans: Undo, reopen, delete and duplicate", async ({ page }) => {
    const types = async () => (await project(page)).items.map(i => i.type).sort().join(",");
    await placeWithKey(page, "b", 0.4, 0.4);
    await placeWithKey(page, "c", 0.6, 0.6);
    await page.keyboard.press("Escape");
    await page.getByTitle("Rename project").click();
    await page.keyboard.press("Control+a");
    await page.keyboard.type("Front house");
    await page.keyboard.press("Enter");

    // New: no question asked, the plan is kept, and Undo brings it straight back
    await page.getByTitle("New plan").click();
    await expect.poll(async () => (await project(page)).items.length).toBe(0);
    // A clean start: the first step, nothing open on the right
    await expect(page.getByTestId("step-panel")).toContainText("Step 1 of 5", { ignoreCase: true });
    await expect(page.getByLabel("Inspector")).toBeHidden();
    const toast = page.getByRole("status").filter({ hasText: "New plan started" });
    await expect(toast).toContainText('"Front house" is under Open plan');
    await toast.getByRole("button", { name: "Undo" }).click();
    await expect.poll(types).toBe("building,camera");
    await expect(page.getByTitle("Rename project")).toHaveText("Front house");

    // New again, place something else, then reopen the first plan from the menu
    await page.getByTitle("New plan").click();
    await expect.poll(async () => (await project(page)).items.length).toBe(0);
    await placeWithKey(page, "t", 0.5, 0.5);
    await page.keyboard.press("Escape");
    await page.getByTitle("Open plan").click();
    const recent = page.getByRole("list", { name: "Recent plans" });
    await expect(recent.getByRole("menuitem")).toHaveCount(1);
    await expect(recent).toContainText("1 camera");
    await recent.getByRole("menuitem", { name: "Open Front house" }).click();
    await expect.poll(types).toBe("building,camera");
    // The plan with the tree is kept in its place
    await page.getByTitle("Open plan").click();
    await expect(recent.getByRole("menuitem", { name: "Open Security Camera Plan" })).toBeVisible();

    // Delete it, then undo the delete
    await recent.getByRole("button", { name: "Delete Security Camera Plan" }).click();
    await expect(recent.getByRole("menuitem")).toHaveCount(0);
    await page.getByRole("status").filter({ hasText: "Deleted" }).getByRole("button", { name: "Undo" }).click();
    await page.getByTitle("Open plan").click();
    await expect(recent.getByRole("menuitem")).toHaveCount(1);

    // Duplicate: keep editing a copy; the original stays in the list
    await page.getByRole("menuitem", { name: "Duplicate this plan" }).click();
    await expect(page.getByTitle("Rename project")).toHaveText("Front house copy");
    await page.getByTitle("Open plan").click();
    await expect(recent.getByRole("menuitem", { name: "Open Front house", exact: true })).toBeVisible();
    await expect(recent.getByRole("menuitem")).toHaveCount(2);

    // It all survives a reload
    await page.waitForTimeout(1200);
    await page.reload();
    await expect.poll(types).toBe("building,camera");
    await page.getByTitle("Open plan").click();
    await expect(page.getByRole("list", { name: "Recent plans" }).getByRole("menuitem")).toHaveCount(2);
  });
});
