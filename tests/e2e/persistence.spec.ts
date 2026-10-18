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
    page.on("dialog", d => d.accept());
    await placeWithKey(page, "b", 0.4, 0.4);
    await placeWithKey(page, "c", 0.6, 0.6);
    await page.keyboard.press("Escape");
    const [download] = await Promise.all([page.waitForEvent("download"), page.getByTitle(/Save plan/).click()]);
    expect(download.suggestedFilename()).toMatch(/\.zip$/);
    const file = testInfo.outputPath(download.suggestedFilename());
    await download.saveAs(file);

    await page.getByTitle("New plan").click();
    await expect.poll(async () => (await project(page)).items.length).toBe(0);

    const [chooser] = await Promise.all([page.waitForEvent("filechooser"), page.getByTitle("Open plan").click()]);
    await chooser.setFiles(file);
    await expect.poll(async () => (await project(page)).items.map(i => i.type).sort().join(",")).toBe("building,camera");
  });
});
