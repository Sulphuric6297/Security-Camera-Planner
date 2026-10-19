import { test, expect, itemsOfType, screenOf } from "./fixtures";
import { encode } from "fast-png";

/** Synthetic aerial photo: lawn with a gable roof (two shades) rotated 20°, plus a driveway. */
const syntheticAerial = () => {
  const W = 1000, H = 700;
  const data = new Uint8Array(W * H * 4);
  const a = (20 * Math.PI) / 180;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const i = (y * W + x) * 4;
      // rotate into roof-local coordinates around (520, 330)
      const dx = x - 520, dy = y - 330;
      const u = dx * Math.cos(-a) - dy * Math.sin(-a);
      const v = dx * Math.sin(-a) + dy * Math.cos(-a);
      let rgb = [86 + ((x * 7 + y * 13) % 9), 122 + ((x * 3 + y * 5) % 9), 62];
      if (x > 545 && x < 610 && y > 420) rgb = [150, 150, 145];
      if (Math.abs(u) < 90 && Math.abs(v) < 55) rgb = v < 0 ? [120, 92, 82] : [92, 70, 64];
      data[i] = rgb[0]; data[i + 1] = rgb[1]; data[i + 2] = rgb[2]; data[i + 3] = 255;
    }
  }
  return Buffer.from(encode({ width: W, height: H, data, channels: 4, depth: 8 }));
};

test("click a roof on the map to trace it into a building", async ({ page }) => {
  const [chooser] = await Promise.all([
    page.waitForEvent("filechooser"),
    page.getByRole("button", { name: "Upload a map or floor plan" }).click()
  ]);
  await chooser.setFiles({ name: "aerial.png", mimeType: "image/png", buffer: syntheticAerial() });
  // Where the photo sits on the plan, and so where its pixels are on screen
  await expect.poll(() => page.evaluate(() => !!(window as any).__scpProject().backgroundImg)).toBe(true);
  const bg = await page.evaluate(() => (window as any).__scpProject().bgSettings);
  const at = (px: number, py: number) => screenOf(page, bg.x + (px / 1000) * bg.width, bg.y + (py / 700) * bg.height);

  await page.keyboard.press("r");
  const roof = await at(520, 300);
  await page.mouse.click(roof.x, roof.y);
  await expect(page.getByRole("status")).toContainText("Traced a building");
  const [b] = await itemsOfType(page, "building");
  const rotation = (Math.atan2(b.points[1].y - b.points[0].y, b.points[1].x - b.points[0].x) * 180) / Math.PI;
  const off = Math.min(...[0, 90, 180, -90, -180].map(r => Math.abs(rotation - 20 - r)));
  expect(off, "traced rectangle follows the roof's 20° angle").toBeLessThan(6);

  // Clicking lawn finds no roof (top-left of the map is under the tool's options card)
  const lawn = await at(750, 560);
  await page.mouse.click(lawn.x, lawn.y);
  await expect(page.getByRole("status")).toContainText("Couldn't find a roof");
  await page.keyboard.press("Escape");
});
