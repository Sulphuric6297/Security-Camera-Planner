// The recorder and the cable runs to each camera: lengths, the 300 ft limit, recorder size.
import { test as pure, expect } from "@playwright/test";
import { test, itemsOfType, planPoint, placeWithKey } from "./fixtures";
import { MAX_RUN_FT, cableRuns, cableSummary, type CableCamera } from "../../src/lib/cabling";

const cam = (id: string, x: number, y: number, heightFt = 9): CableCamera => ({ id, number: Number(id), label: `Camera ${id}`, x, y, heightFt });

pure.describe("cable runs (pure logic)", () => {
  pure("runs go around at right angles, up to the camera, with slack", () => {
    // 30 ft east and 40 ft north of the recorder, 9 ft up (recorder at 3 ft): (70 + 6) * 1.1 + 6
    const [run] = cableRuns([cam("1", 30, -40)], { x: 0, y: 0 });
    expect(run.lengthFt).toBe(Math.ceil(76 * 1.1 + 6));
    expect(run.tooLong).toBe(false);
    // Plan units at 2 per foot: the same run
    expect(cableRuns([cam("1", 60, -80)], { x: 0, y: 0 }, 2)[0].lengthFt).toBe(run.lengthFt);
  });

  pure("totals, the longest run, runs over the limit and the recorder size", () => {
    const cams = [cam("1", 10, 0), cam("2", 100, 50), cam("3", 0, 400), cam("4", -20, 5), cam("5", 5, 5)];
    const runs = cableRuns(cams, { x: 0, y: 0 });
    const s = cableSummary(runs);
    expect(s.totalFt).toBe(runs.reduce((t, r) => t + r.lengthFt, 0));
    expect(s.longest?.number).toBe(3);
    expect(s.tooLong.map(r => r.number)).toEqual([3]);
    expect(s.longest!.lengthFt).toBeGreaterThan(MAX_RUN_FT);
    expect(s.channels).toBe(8); // 5 cameras: an 8-channel recorder
    expect(s.boxes).toBe(1);
    expect(cableSummary(cableRuns(cams.slice(0, 4), { x: 0, y: 0 })).channels).toBe(4);
  });
});

test.describe("recorder on the plan", () => {
  test("place the recorder: cable runs on the map, totals in the Report step and the PDF", async ({ page, context }) => {
    // The empty plan is 1000 x 700 ft: two cameras 100 ft apart
    await placeWithKey(page, "c", 0.4, 0.5);
    await placeWithKey(page, "c", 0.5, 0.5);
    await page.keyboard.press("Escape");
    await page.locator('nav[aria-label="Steps"] button').nth(4).click();
    const card = page.getByTestId("cabling");
    await expect(card).toContainText("Place the recorder (NVR)");
    await card.getByRole("button", { name: "Place the recorder" }).click();
    const at = await planPoint(page, 0.45, 0.6);
    await page.mouse.click(at.x, at.y);
    await expect(page.getByTestId("recorder-pin")).toBeVisible();
    // Each camera about 50 ft across and 70 ft along from the recorder, plus the climb and slack
    const expected = async () => {
      const cams = await itemsOfType(page, "camera");
      const [rec] = await itemsOfType(page, "recorder");
      return cableSummary(cableRuns(cams.map((c: any, i: number) => ({ id: c.id, number: i + 1, label: c.label, x: c.x, y: c.y, heightFt: c.height })), rec)).totalFt;
    };
    const first = await expected();
    expect(first).toBeGreaterThan(260);
    expect(first).toBeLessThan(330);
    await expect(card).toContainText(`About ${first} ft of network cable (1 × 1000 ft box), a 4-channel PoE recorder`);
    const cables = () => page.evaluate(() => {
      let n = 0;
      (window as any).__scpThree().scene.traverse((o: any) => { if (o.name === "cable-runs") n = o.geometry.getAttribute("position").count / 2; });
      return n;
    });
    await expect.poll(cables).toBe(6); // three legs per camera
    // Placing it again moves it (one recorder per plan)
    await card.getByRole("button", { name: "Move the recorder" }).click();
    const there = await planPoint(page, 0.45, 0.5);
    await page.mouse.click(there.x, there.y);
    await expect.poll(async () => (await itemsOfType(page, "recorder")).length).toBe(1);
    const second = await expected();
    expect(second).toBeLessThan(first - 100); // in line with the cameras now
    await expect(card).toContainText(`About ${second} ft of network cable`);
    // The report lists the recorder, the cable and every run
    const [popup] = await Promise.all([context.waitForEvent("page"), page.getByRole("button", { name: "Download PDF report" }).click()]);
    await popup.waitForLoadState();
    await expect(popup.locator("#parts-list")).toContainText("PoE recorder (NVR), 4 channels", { timeout: 15_000 });
    await expect(popup.locator("#parts-list")).toContainText("Cat6 network cable");
    await expect(popup.locator("#cable-runs tbody tr")).toHaveCount(2);
  });
});
