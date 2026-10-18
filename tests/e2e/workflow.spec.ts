import { test, expect, importSite, itemsOfType, placeWithKey } from "./fixtures";

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
    // Real on-screen pixels per plan unit (= per foot here), from the plan's own transform
    const pxPerFt = () =>
      page.getByTestId("plan").evaluate((svg: any) => {
        const g = Array.from(svg.querySelectorAll("g")).find((el: any) => /scale\(/.test(el.getAttribute("transform") || "")) as any;
        return g.getScreenCTM().a as number;
      });
    const barPxPerFt = async () => {
      const bar = (await page.getByTestId("scale-bar").boundingBox())!.width;
      const feet = parseFloat(((await page.getByTestId("scale-bar-label").textContent()) ?? "").replace(/,/g, ""));
      return bar / feet;
    };
    const a = await pxPerFt();
    expect(Math.abs((await barPxPerFt()) - a) / a).toBeLessThan(0.03);

    await page.keyboard.press("f"); // zoom to the selected building
    await expect.poll(pxPerFt).toBeGreaterThan(a * 2);
    const b = await pxPerFt();
    expect(Math.abs((await barPxPerFt()) - b) / b).toBeLessThan(0.03);

    await page.keyboard.press("0"); // back to the whole site
    await expect.poll(async () => Math.round((await pxPerFt()) * 1000)).toBe(Math.round(a * 1000));
  });

  test("after importing a site the plan zooms to the property and shows north", async ({ page }) => {
    await importSite(page);
    await page.getByRole("button", { name: "Open in 2D" }).click();
    await expect(page.getByLabel("North arrow")).toBeVisible();
    // The 58 ft house fills a good part of the view, not a speck
    const house = (await page.getByTestId("plan").locator("polygon").first().boundingBox())!;
    expect(house.width).toBeGreaterThan(120);
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
});
