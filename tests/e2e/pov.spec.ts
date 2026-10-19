// Looking through a camera: the main view becomes the camera's picture.
import { test, expect, importSite, itemsOfType, placeWithKey } from "./fixtures";

test.describe("looking through a camera", () => {
  test("Enter looks through the selected camera; drag aims it, scroll zooms the lens, Esc goes back", async ({ page }) => {
    await placeWithKey(page, "c", 0.5, 0.5);
    const [cam] = await itemsOfType(page, "camera");
    await page.keyboard.press("Enter");
    const look = page.getByTestId("camera-look");
    await expect(look).toBeVisible();
    await expect(look).toContainText("CAM 01");
    // The map's tools step aside
    await expect(page.getByRole("toolbar", { name: "Tools" })).toHaveCount(0);
    // Drag the picture to the left: the camera turns right (clockwise)
    const plan = (await page.getByTestId("plan").boundingBox())!;
    const cx = plan.x + plan.width * 0.4;
    const cy = plan.y + plan.height * 0.5;
    await page.mouse.move(cx, cy);
    await page.mouse.down();
    await page.mouse.move(cx - 60, cy - 30, { steps: 6 });
    await page.mouse.up();
    const [aimed] = await itemsOfType(page, "camera");
    const turned = ((aimed.rotation - cam.rotation + 540) % 360) - 180;
    expect(turned).toBeGreaterThan(2);
    expect(aimed.pitch).toBeLessThan(cam.pitch); // dragged up: looks further down
    // Scroll zooms the lens in (narrower view)
    await page.mouse.wheel(0, -400);
    await expect.poll(async () => (await itemsOfType(page, "camera"))[0].hFov).toBeLessThan(aimed.hFov);
    await page.keyboard.press("Escape");
    await expect(look).toHaveCount(0);
    await expect(page.getByRole("toolbar", { name: "Tools" })).toBeVisible();
  });

  test("the picture fills the window; Settings (S) brings the lens panel beside it", async ({ page }) => {
    await placeWithKey(page, "c", 0.5, 0.5);
    await expect(page.getByRole("complementary", { name: "Steps panel" })).toBeVisible();
    const window = page.viewportSize()!;
    await page.keyboard.press("Enter");
    const look = page.getByTestId("camera-look");
    await expect(look).toBeVisible();
    // Side panels step aside: the camera's picture gets the whole window
    await expect(page.getByRole("complementary", { name: "Steps panel" })).toHaveCount(0);
    await expect(page.getByLabel("Inspector")).toBeHidden();
    const full = (await look.boundingBox())!;
    expect(full.width).toBeGreaterThan(window.width - 4);
    // Settings slides the camera's panel in; changing the lens there changes the picture
    await page.getByRole("button", { name: "Settings" }).click();
    await expect(page.getByLabel("Inspector")).toBeVisible();
    expect((await look.boundingBox())!.width).toBeLessThan(window.width - 300);
    const [cam] = await itemsOfType(page, "camera");
    await page.getByLabel("Inspector").getByRole("button", { name: /^12mm/ }).click();
    await expect.poll(async () => (await itemsOfType(page, "camera"))[0].hFov).toBeLessThan(cam.hFov);
    await expect(look).toBeVisible();
    // S hides it again; Esc brings the map and its panels back
    await page.keyboard.press("s");
    await expect(page.getByLabel("Inspector")).toBeHidden();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("complementary", { name: "Steps panel" })).toBeVisible();
    await expect(page.getByLabel("Inspector")).toBeVisible();
  });

  test("the camera view closes with its X, the 2D/3D tabs or a step, not only Esc", async ({ page }) => {
    await placeWithKey(page, "c", 0.5, 0.5);
    const look = page.getByTestId("camera-look");
    const enter = async () => { await page.keyboard.press("Enter"); await expect(look).toBeVisible(); };
    await enter();
    await look.getByRole("button", { name: "Close camera view" }).click();
    await expect(look).toHaveCount(0);
    await enter();
    await page.getByRole("tab", { name: "3D" }).click();
    await expect(look).toHaveCount(0);
    await page.evaluate(id => (window as any).__scpSelect(id), (await itemsOfType(page, "camera"))[0].id);
    await enter();
    await page.locator('nav[aria-label="Steps"] button').nth(3).click();
    await expect(look).toHaveCount(0);
  });

  test("arrow keys and thumbnails switch between cameras", async ({ page }) => {
    await placeWithKey(page, "c", 0.3, 0.5);
    await placeWithKey(page, "c", 0.7, 0.5);
    await page.keyboard.press("Escape");
    const cams = await itemsOfType(page, "camera");
    await page.evaluate(id => (window as any).__scpSelect(id), cams[0].id);
    await page.getByRole("toolbar", { name: "Selection actions" }).getByRole("button", { name: "Look through camera" }).click();
    const look = page.getByTestId("camera-look");
    await expect(look).toContainText("1 of 2");
    await page.keyboard.press("ArrowRight");
    await expect(look).toContainText("2 of 2");
    await expect(look).toContainText("CAM 02");
    const tabs = page.getByRole("tablist", { name: "Cameras" }).getByRole("tab");
    await expect(tabs).toHaveCount(2);
    // Thumbnails show each camera's picture
    await expect(tabs.first().locator("img")).toHaveAttribute("src", /^data:image\/jpeg/);
    await tabs.first().click();
    await expect(look).toContainText("1 of 2");
    // Tour: steps to the next camera by itself
    await page.getByRole("button", { name: "Tour" }).click();
    await expect(look).toContainText("2 of 2", { timeout: 6000 });
    await page.getByRole("button", { name: "Tour" }).click();
    await page.getByRole("button", { name: "Back to map" }).click();
    await expect(look).toHaveCount(0);
  });

  test("the Review step and the camera list open the camera's view in one click", async ({ page }) => {
    await placeWithKey(page, "c", 0.4, 0.5);
    await placeWithKey(page, "c", 0.6, 0.5);
    await page.keyboard.press("Escape");
    await page.locator('nav[aria-label="Steps"] button').nth(3).click();
    await page.getByRole("button", { name: "Look through each camera" }).click();
    await expect(page.getByTestId("camera-look")).toContainText("1 of 2");
    await page.keyboard.press("Escape");
    await page.locator('nav[aria-label="Steps"] button').nth(2).click();
    await page.getByRole("button", { name: "Look through Camera 2" }).click();
    await expect(page.getByTestId("camera-look")).toContainText("2 of 2");
  });

  test("the camera panel says what the camera gets and opens its view", async ({ page }) => {
    await placeWithKey(page, "m", 0.5, 0.4);
    await page.keyboard.press("Escape");
    await placeWithKey(page, "c", 0.5, 0.55);
    const verdict = page.getByTestId("camera-verdict");
    await expect(verdict).toContainText(/\d+° wide/);
    await expect(verdict).toContainText(/Door 1|marked spot/);
    await verdict.getByRole("button", { name: "Look through this camera" }).click();
    await expect(page.getByTestId("camera-look")).toBeVisible();
  });

  test("the camera's picture is drawn from the 3D scene, with the site's buildings in it", async ({ page }) => {
    await importSite(page);
    await page.keyboard.press("Escape");
    // A camera on the neighbour's lawn looking at the house
    const [house] = (await itemsOfType(page, "building")).filter((b: any) => b.mine);
    await placeWithKey(page, "c", 0.5, 0.5);
    const [cam] = await itemsOfType(page, "camera");
    const angle = (Math.atan2(house.y - cam.y, house.x - cam.x) * 180) / Math.PI;
    await page.evaluate(([id, rotation]) => {
      const s = (window as any).__scpProject();
      s.setField("items", s.items.map((i: any) => (i.id === id ? { ...i, rotation } : i)));
    }, [cam.id, angle] as const);
    const shot = await page.evaluate(id => {
      const v = (window as any).__scpView;
      const c = v.renderCameraView(id, 320, 180);
      const g = c.getContext("2d");
      const d = g.getImageData(0, 0, 320, 180).data;
      let sky = 0;
      for (let i = 0; i < d.length; i += 4) if (d[i + 2] > d[i + 1] && d[i + 2] > 150) sky++;
      return { width: c.width, height: c.height, skyShare: sky / (d.length / 4) };
    }, cam.id);
    expect(shot.width).toBe(320);
    expect(shot.height).toBe(180);
    expect(shot.skyShare).toBeGreaterThan(0.05); // daylight sky at the top
    expect(shot.skyShare).toBeLessThan(0.7); // ground below
  });

  test("Night shows the camera's infrared picture: dark beyond its reach, black and white", async ({ page }) => {
    await importSite(page);
    await page.keyboard.press("Escape");
    await placeWithKey(page, "c", 0.5, 0.5);
    const [cam] = await itemsOfType(page, "camera");
    await page.keyboard.press("Enter");
    const look = page.getByTestId("camera-look");
    const night = look.getByRole("button", { name: "Night" });
    await expect(night).toHaveAttribute("aria-pressed", "false");
    await night.click();
    await expect(night).toHaveAttribute("aria-pressed", "true");
    await expect(look).toContainText("IR");
    await expect(page.getByTestId("camera-look-details")).toContainText(/infrared lights about 100 ft/);
    const canvasFilter = () => page.getByTestId("plan").locator("canvas").first().evaluate(c => getComputedStyle(c).filter);
    expect(await canvasFilter()).toContain("grayscale");
    // The night picture is grey and much darker than the day picture
    const stats = await page.evaluate(id => {
      const v = (window as any).__scpView;
      const measure = (night: boolean) => {
        const d = v.renderCameraView(id, 320, 180, night).getContext("2d").getImageData(0, 0, 320, 180).data;
        let luma = 0, chroma = 0;
        for (let i = 0; i < d.length; i += 4) {
          luma += 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
          chroma += Math.max(d[i], d[i + 1], d[i + 2]) - Math.min(d[i], d[i + 1], d[i + 2]);
        }
        const n = d.length / 4;
        return { luma: luma / n, chroma: chroma / n };
      };
      return { day: measure(false), night: measure(true) };
    }, cam.id);
    expect(stats.night.luma).toBeLessThan(stats.day.luma * 0.75);
    expect(stats.night.chroma).toBeLessThan(3);
    // N toggles it; leaving the camera view goes back to day
    await page.keyboard.press("n");
    await expect(night).toHaveAttribute("aria-pressed", "false");
    await page.keyboard.press("n");
    await expect(night).toHaveAttribute("aria-pressed", "true");
    await page.keyboard.press("Escape");
    await expect(look).toHaveCount(0);
    expect(await canvasFilter()).not.toContain("grayscale");
    await page.keyboard.press("Enter");
    await expect(page.getByTestId("camera-look").getByRole("button", { name: "Night" })).toHaveAttribute("aria-pressed", "false");
  });
});
