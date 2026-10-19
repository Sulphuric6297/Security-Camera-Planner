// The whole workflow, step by step, as screenshots in look/flow-*.png (`npm run look -- -g flow`).
import type { Page } from "@playwright/test";
import { test, expect, placeWithKey } from "../e2e/fixtures";

const shot = async (page: Page, name: string) => {
  await page.waitForTimeout(900);
  await page.screenshot({ path: `look/flow-${name}.png` });
};
const step = (page: Page, i: number) => page.locator('nav[aria-label="Steps"] button').nth(i);

test("flow", async ({ page }) => {
  await page.evaluate(() => { localStorage.removeItem("scp.cameraViewPos"); localStorage.removeItem("scp.cameraViewWidth"); });
  await shot(page, "01-start");

  // 1. Site: find the property, review what will be imported
  await page.getByRole("button", { name: "Find my property" }).click();
  await shot(page, "02-import-dialog");
  await page.getByLabel("Search address").fill("123 Main St Fra");
  await page.getByRole("button", { name: /123 Main St/ }).click();
  await expect(page.getByText(/of \d+ buildings will be added/)).toBeVisible();
  await page.waitForTimeout(2500);
  await shot(page, "03-import-review");
  await page.locator("div.fixed button", { hasText: "Import Site" }).last().click();
  await expect(page.getByText(/^Site imported\./)).toBeVisible({ timeout: 60_000 });
  await shot(page, "04-imported");
  await shot(page, "05-site-step");

  // 2. Buildings
  await step(page, 1).click();
  await shot(page, "06-buildings-step");

  // 3. Cameras: mark a door, add a camera
  await step(page, 2).click();
  await shot(page, "07-cameras-step");
  await page.getByRole("button", { name: /Mark another spot/ }).click();
  await shot(page, "08-marking-a-spot");
  const box = (await page.getByTestId("plan").boundingBox())!;
  await page.mouse.click(box.x + box.width * 0.5, box.y + box.height * 0.62);
  await page.keyboard.press("Escape");
  await placeWithKey(page, "c", 0.42, 0.66);
  await shot(page, "09-camera-placed");
  await page.keyboard.press("Escape");

  // 4. Review
  await step(page, 3).click();
  await shot(page, "10-review-step");
  await page.keyboard.press("3");
  await shot(page, "11-review-3d");

  // 5. Report
  await step(page, 4).click();
  await shot(page, "12-report-step");
});
