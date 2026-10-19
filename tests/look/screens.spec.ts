// Screenshots of the main screens, saved to look/<name>.png. Run with `npm run look`
// (add `-- -g "camera"` for one). Uses the same offline stubs as the test suite.
import type { Page } from "@playwright/test";
import { test, importSite, itemsOfType, placeWithKey } from "../e2e/fixtures";

const shot = async (page: Page, name: string) => {
  await page.waitForTimeout(900); // let camera moves and renders settle
  await page.screenshot({ path: `look/${name}.png` });
};

// Default window positions (the e2e fixture parks the camera view out of the way).
test.beforeEach(async ({ page }) => {
  await page.evaluate(() => { localStorage.removeItem("scp.cameraViewPos"); localStorage.removeItem("scp.cameraViewWidth"); });
});

test("start", async ({ page }) => {
  await shot(page, "01-start");
});

test("site", async ({ page }) => {
  await importSite(page);
  await shot(page, "02-site-2d");
  const [house] = await itemsOfType(page, "building");
  await page.evaluate(id => (window as any).__scpSelect(id), house.id);
  await shot(page, "03-building-selected");
  await page.keyboard.press("Escape");
  await page.keyboard.press("3");
  await shot(page, "04-site-3d");
});

test("camera", async ({ page }) => {
  await importSite(page);
  await page.keyboard.press("Escape");
  await placeWithKey(page, "c", 0.45, 0.62);
  await shot(page, "05-camera-selected");
  await page.keyboard.press("3");
  await shot(page, "06-camera-3d");
});

test("shapes", async ({ page }) => {
  // An L-shaped and a T-shaped house, seen in 3D
  await placeWithKey(page, "b", 0.4, 0.5);
  await placeWithKey(page, "b", 0.62, 0.5);
  await page.keyboard.press("Escape");
  await page.evaluate(() => {
    const s = (window as any).__scpProject();
    const L = [{ x: -40, y: -30 }, { x: 40, y: -30 }, { x: 40, y: -6 }, { x: -16, y: -6 }, { x: -16, y: 30 }, { x: -40, y: 30 }];
    const T = [{ x: -40, y: -24 }, { x: 40, y: -24 }, { x: 40, y: 0 }, { x: 12, y: 0 }, { x: 12, y: 30 }, { x: -12, y: 30 }, { x: -12, y: 0 }, { x: -40, y: 0 }];
    const [a, b] = s.items.filter((i: any) => i.type === "building");
    s.setField("items", s.items.map((i: any) => (i.id === a.id ? { ...i, points: L } : i.id === b.id ? { ...i, points: T } : i)));
  });
  await page.keyboard.press("f");
  await shot(page, "07-shapes-2d");
  await page.keyboard.press("3");
  await page.waitForTimeout(600);
  await page.evaluate(() => { const s = (window as any).__scpProject(); (window as any).__scpView.fitBounds({ minX: 380, minY: 300, maxX: 660, maxY: 400 }, { animate: false }); });
  await shot(page, "08-shapes-3d");
});

test("odd-roofs", async ({ page }) => {
  // Buildings that aren't rectangles or L/T shapes, with gable and hip roofs chosen
  await placeWithKey(page, "b", 0.3, 0.5);
  await placeWithKey(page, "b", 0.5, 0.5);
  await placeWithKey(page, "b", 0.7, 0.5);
  await page.keyboard.press("Escape");
  await page.evaluate(() => {
    const s = (window as any).__scpProject();
    // A store with an angled entrance notch, an odd house, a trapezoid
    const notch = [{ x: -30, y: -20 }, { x: 30, y: -20 }, { x: 30, y: 20 }, { x: 10, y: 20 }, { x: 0, y: 8 }, { x: -10, y: 20 }, { x: -30, y: 20 }];
    const odd = [{ x: -30, y: -25 }, { x: 30, y: -25 }, { x: 15, y: 5 }, { x: -20, y: 25 }, { x: -35, y: 0 }];
    const trap = [{ x: -25, y: -15 }, { x: 25, y: -15 }, { x: 15, y: 15 }, { x: -15, y: 15 }];
    const bs = s.items.filter((i: any) => i.type === "building");
    const set = [[notch, "gable"], [odd, "hip"], [trap, "gable"]];
    s.setField("items", s.items.map((i: any) => { const k = bs.findIndex((b: any) => b.id === i.id); return k < 0 ? i : { ...i, points: set[k][0], roofType: set[k][1] }; }));
  });
  await page.keyboard.press("3");
  await page.waitForTimeout(800);
  await page.evaluate(() => {
    const bs = (window as any).__scpProject().items.filter((i: any) => i.type === "building");
    const xs = bs.map((b: any) => b.x), ys = bs.map((b: any) => b.y);
    (window as any).__scpView.fitBounds({ minX: Math.min(...xs) - 40, minY: Math.min(...ys) - 30, maxX: Math.max(...xs) + 40, maxY: Math.max(...ys) + 30 }, { animate: false });
  });
  await shot(page, "09-odd-roofs-3d");
  await page.keyboard.press("q");
  await page.keyboard.press("q");
  await shot(page, "10-odd-roofs-turned");
});

test("objects-3d", async ({ page }) => {
  // Close-ups of a car, trees and a house in 3D, to judge how the scene looks
  await placeWithKey(page, "b", 0.5, 0.45);
  await placeWithKey(page, "p", 0.62, 0.6);
  await placeWithKey(page, "t", 0.38, 0.6);
  await placeWithKey(page, "t", 0.42, 0.66);
  await placeWithKey(page, "c", 0.5, 0.52);
  await page.keyboard.press("Escape");
  await page.keyboard.press("3");
  await page.waitForTimeout(600);
  await page.evaluate(() => {
    const items = (window as any).__scpProject().items;
    const xs = items.map((b: any) => b.x), ys = items.map((b: any) => b.y);
    (window as any).__scpView.fitBounds({ minX: Math.min(...xs) - 10, minY: Math.min(...ys) - 10, maxX: Math.max(...xs) + 10, maxY: Math.max(...ys) + 10 }, { animate: false, minSpan: 30 });
  });
  await shot(page, "11-objects-3d");
  await page.keyboard.press("q");
  await page.keyboard.press("q");
  await page.keyboard.press("q");
  await shot(page, "12-objects-3d-turned");
  // Close-up of the car
  await page.evaluate(() => {
    const car = (window as any).__scpProject().items.find((i: any) => i.type === "parking");
    (window as any).__scpView.fitBounds({ minX: car.x - 12, minY: car.y - 12, maxX: car.x + 12, maxY: car.y + 12 }, { animate: false, minSpan: 10 });
  });
  await shot(page, "12b-car-close");
});

test("pov", async ({ page }) => {
  // Looking through a camera on the house
  await importSite(page);
  await page.keyboard.press("Escape");
  const [house] = (await itemsOfType(page, "building")).filter((b: any) => b.mine);
  const box = await page.evaluate(id => (window as any).__scpView.screenBox(id), house.id);
  const plan = (await page.getByTestId("plan").boundingBox())!;
  await page.keyboard.press("c");
  await page.mouse.click(box.x + plan.x + box.width / 2, box.y + plan.y + box.height + 3);
  await page.keyboard.press("Escape");
  const [cam] = await itemsOfType(page, "camera");
  await page.evaluate(id => (window as any).__scpSelect(id), cam.id);
  await shot(page, "13-camera-window");
  await page.keyboard.press("Enter");
  await shot(page, "14-pov");
  await page.keyboard.press("n");
  await shot(page, "15-pov-night");
});

test("plans", async ({ page }) => {
  // Spots to protect with a Fix button, the camera panel header, then the Open plan menu
  await importSite(page);
  await page.keyboard.press("Escape");
  await page.locator('nav[aria-label="Steps"] button').nth(2).click();
  await page.getByRole("button", { name: /Mark another spot/ }).click();
  const plan = (await page.getByTestId("plan").boundingBox())!;
  await page.mouse.click(plan.x + plan.width * 0.45, plan.y + plan.height * 0.4);
  await page.keyboard.press("Escape");
  await page.keyboard.press("c");
  await page.mouse.click(plan.x + plan.width * 0.45, plan.y + plan.height * 0.62);
  await page.keyboard.press("Escape");
  await shot(page, "16-fix-spot");
  await page.getByTitle("New plan").click();
  await page.getByTitle("Open plan").click();
  await shot(page, "17-recent-plans");
});

test("recorder", async ({ page }) => {
  // Two cameras on the house, the recorder inside it, cable runs shown in 2D and 3D
  await importSite(page);
  await page.keyboard.press("Escape");
  const [house] = (await itemsOfType(page, "building")).filter((b: any) => b.mine);
  const box = await page.evaluate(id => (window as any).__scpView.screenBox(id), house.id);
  const plan = (await page.getByTestId("plan").boundingBox())!;
  await page.keyboard.press("c");
  await page.mouse.click(box.x + plan.x + box.width * 0.3, box.y + plan.y + box.height + 3);
  await page.keyboard.press("c");
  await page.mouse.click(box.x + plan.x + box.width + 3, box.y + plan.y + box.height * 0.3);
  await page.keyboard.press("Escape");
  await page.locator('nav[aria-label="Steps"] button').nth(4).click();
  await page.getByTestId("cabling").getByRole("button", { name: "Place the recorder" }).click();
  await page.mouse.click(box.x + plan.x + box.width * 0.4, box.y + plan.y + box.height * 0.4);
  await page.keyboard.press("Escape");
  await shot(page, "18-recorder-2d");
  await page.keyboard.press("3");
  await shot(page, "19-recorder-3d");
});


test("trees", async ({ page }) => {
  // Each kind of tree, from above and through a camera at eye level
  await placeWithKey(page, "c", 0.5, 0.62);
  await page.keyboard.press("Escape");
  await page.evaluate(() => {
    const s = (window as any).__scpProject();
    const cam = s.items.find((i: any) => i.type === "camera");
    const mk = (id: string, dx: number, dy: number, treeType: string, radius: number, height: number, color: string) =>
      ({ id, type: "tree", x: cam.x + dx, y: cam.y + dy, rotation: 0, treeType, radius, height, width: 1, color });
    const trees = [
      mk("t1", -22, -45, "deciduous", 14, 38, "#2f6b2f"),
      mk("t2", 4, -38, "conifer", 9, 45, "#24543a"),
      mk("t3", 26, -46, "deciduous", 11, 30, "#3d7a35"),
      mk("t4", -6, -24, "bush", 4, 5, "#3f7d3a"),
      mk("t5", 40, -70, "conifer", 7, 38, "#24543a"),
      mk("t6", -45, -75, "conifer", 8, 50, "#24543a")
    ];
    s.setField("items", [...s.items.map((i: any) => (i.id === cam.id ? { ...i, rotation: 270, pitch: 5, height: 6, mount: { ...(i.mount ?? { type: "free" }), height: 6 } } : i)), ...trees]);
  });
  await page.keyboard.press("3");
  await page.evaluate(() => {
    const items = (window as any).__scpProject().items.filter((i: any) => i.type === "tree");
    const xs = items.map((b: any) => b.x), ys = items.map((b: any) => b.y);
    (window as any).__scpView.fitBounds({ minX: Math.min(...xs) - 15, minY: Math.min(...ys) - 15, maxX: Math.max(...xs) + 15, maxY: Math.max(...ys) + 15 }, { animate: false, minSpan: 30 });
  });
  await shot(page, "20-trees-3d");
  const [cam] = await itemsOfType(page, "camera");
  await page.evaluate(id => (window as any).__scpSelect(id), cam.id);
  await page.keyboard.press("Enter");
  await shot(page, "21-trees-eye-level");
  await page.keyboard.press("Escape");
});

test("porch", async ({ page }) => {
  // A house with a porch along the front (click the wall) and a carport dragged over one end
  await placeWithKey(page, "b", 0.5, 0.45);
  await page.keyboard.press("Escape");
  const [b] = await itemsOfType(page, "building");
  const upf = await page.evaluate(() => (window as any).__scpProject().planGeoRef?.unitsPerFoot ?? 1);
  const eave = b.wallHeight ?? 14 * upf;
  const fit = () => page.evaluate(([b, upf]) => (window as any).__scpView.fitBounds({ minX: b.x - b.width / 2 - 25 * upf, maxX: b.x + b.width / 2 + 25 * upf, minY: b.y - b.height / 2 - 20 * upf, maxY: b.y + b.height / 2 + 20 * upf }, { animate: false }), [b, upf] as const);
  await fit();
  await page.waitForTimeout(400);
  const at = (x: number, y: number) => page.evaluate(([x, y, lift]) => (window as any).__scpView.toClient(x, y, lift), [x, y, eave] as const) as Promise<{ x: number; y: number }>;
  const front = b.y + b.height / 2, right = b.x + b.width / 2;
  await page.evaluate(id => (window as any).__scpSelect(id), b.id);
  await page.getByLabel("Inspector").getByRole("button", { name: "+ Porch" }).click();
  await shot(page, "26-porch-adding");
  // Just outside the front wall: a porch attached to it with its own roof
  const w = await at(b.x, front + 3 * upf);
  await page.mouse.click(w.x, w.y);
  await page.evaluate(id => (window as any).__scpSelect(id), b.id);
  await page.getByLabel("Inspector").getByRole("button", { name: "+ Carport" }).click();
  const p = await at(right - 14 * upf, b.y - b.height / 2), q = await at(right, front - 8 * upf);
  await page.mouse.move(p.x, p.y);
  await page.mouse.down();
  await page.mouse.move(q.x, q.y, { steps: 8 });
  await page.mouse.up();
  await page.evaluate(id => (window as any).__scpSelect(id), b.id);
  await shot(page, "27-porch-2d");
  await page.keyboard.press("3");
  await page.waitForTimeout(600);
  await fit();
  await shot(page, "28-porch-3d");
  await page.evaluate(() => { const v = (window as any).__scpView; v.controls?.rotate?.(0.5, -0.25, false); });
  await shot(page, "29-porch-3d-low");
});

test("windows and doors", async ({ page }) => {
  await placeWithKey(page, "b", 0.5, 0.45);
  await page.keyboard.press("Escape");
  const [b] = await itemsOfType(page, "building");
  const upf = await page.evaluate(() => (window as any).__scpProject().planGeoRef?.unitsPerFoot ?? 1);
  const at = (x: number, y: number, lift = 4 * upf) => page.evaluate(([x, y, lift]) => (window as any).__scpView.toClient(x, y, lift), [x, y, lift] as const) as Promise<{ x: number; y: number }>;
  await page.keyboard.press("3");
  await page.waitForTimeout(600);
  await page.evaluate(([b, upf]) => (window as any).__scpView.fitBounds({ minX: b.x - b.width / 2 - 15 * upf, maxX: b.x + b.width / 2 + 15 * upf, minY: b.y - b.height / 2 - 10 * upf, maxY: b.y + b.height / 2 + 10 * upf }, { animate: false }), [b, upf] as const);
  await page.waitForTimeout(500);
  await page.evaluate(id => (window as any).__scpSelect(id), b.id);
  const panel = page.getByLabel("Inspector").getByTestId("openings");
  await panel.scrollIntoViewIfNeeded();
  await panel.getByRole("button", { name: "Edit the windows and doors" }).click();
  // A door in the middle of the front wall, a garage door near its right end
  await panel.getByRole("button", { name: "+ Door" }).click();
  let p = await at(b.x - 6 * upf, b.y + b.height / 2);
  await page.mouse.click(p.x, p.y);
  await page.keyboard.press("Escape");
  await panel.getByRole("button", { name: "+ Garage door" }).click();
  p = await at(b.x + b.width / 2 - 10 * upf, b.y + b.height / 2);
  await page.mouse.click(p.x, p.y);
  await page.keyboard.press("Escape");
  await shot(page, "30-openings");
  await page.keyboard.press("Escape");
  await shot(page, "31-openings-3d");
});

test("stories and gables", async ({ page }) => {
  // A two-story house: a gable on one end, hip on the other, then a one-story wing off the front
  await placeWithKey(page, "b", 0.5, 0.42);
  await page.keyboard.press("Escape");
  const [b] = await itemsOfType(page, "building");
  const upf = await page.evaluate(() => (window as any).__scpProject().planGeoRef?.unitsPerFoot ?? 1);
  await page.evaluate(id => (window as any).__scpSelect(id), b.id);
  const shape = page.getByLabel("Inspector").getByTestId("building-shape");
  await shape.getByRole("button", { name: "2", exact: true }).click();
  await shape.getByRole("button", { name: "hip", exact: true }).click();
  await page.keyboard.press("3");
  await page.waitForTimeout(600);
  await page.evaluate(([b, upf]) => (window as any).__scpView.fitBounds({ minX: b.x - b.width / 2 - 20 * upf, maxX: b.x + b.width / 2 + 20 * upf, minY: b.y - b.height / 2 - 10 * upf, maxY: b.y + b.height / 2 + 30 * upf }, { animate: false }), [b, upf] as const);
  await page.waitForTimeout(500);
  await page.evaluate(id => (window as any).__scpSelect(id), b.id);
  await shot(page, "32-two-story-hip");
  // Click the roof-end toggle of the left wall (edge 3)
  await page.locator('[data-handle="gable"][data-index="3"]').click();
  await page.waitForTimeout(300);
  await shot(page, "33-gable-one-end");
  // A wing off the front wall
  await shape.getByRole("button", { name: "+ Add a wing" }).click();
  const p = await page.evaluate(([x, y]) => (window as any).__scpView.toClient(x, y, 0), [b.x - 6 * upf, b.y + b.height / 2 + 2 * upf] as const) as { x: number; y: number };
  await page.mouse.click(p.x, p.y);
  await page.waitForTimeout(400);
  await shot(page, "34-wing");
  await page.keyboard.press("Escape");
  await shot(page, "35-wing-3d");
});

test("right click", async ({ page }) => {
  await placeWithKey(page, "b", 0.5, 0.42);
  await page.keyboard.press("Escape");
  const [b] = await itemsOfType(page, "building");
  const upf = await page.evaluate(() => (window as any).__scpProject().planGeoRef?.unitsPerFoot ?? 1);
  const eave = b.wallHeight ?? 14 * upf;
  const at = (x: number, y: number, lift = 0) => page.evaluate(([x, y, lift]) => (window as any).__scpView.toClient(x, y, lift), [x, y, lift] as const) as Promise<{ x: number; y: number }>;
  await page.keyboard.press("3");
  await page.waitForTimeout(600);
  await page.evaluate(([b, upf]) => (window as any).__scpView.fitBounds({ minX: b.x - b.width / 2 - 15 * upf, maxX: b.x + b.width / 2 + 15 * upf, minY: b.y - b.height / 2 - 10 * upf, maxY: b.y + b.height / 2 + 25 * upf }, { animate: false }), [b, upf] as const);
  await page.waitForTimeout(500);
  const front = b.y + b.height / 2;
  // Right-click the front wall: the building's menu
  let p = await at(b.x + 8 * upf, front, 5 * upf);
  await page.mouse.click(p.x, p.y, { button: "right" });
  await page.waitForTimeout(300);
  await shot(page, "36-menu-wall");
  // Set a porch into the house along the front wall (from the menu), then a door on its back wall
  await page.getByRole("menuitem", { name: "Porch set in" }).click();
  await page.waitForTimeout(400);
  p = await at(b.x - 4 * upf, front - 8 * upf, 4 * upf);
  await page.mouse.click(p.x, p.y, { button: "right" });
  await page.waitForTimeout(300);
  await shot(page, "37-menu-porch-wall");
  await page.getByRole("menuitem", { name: "Add a door here" }).click();
  await page.waitForTimeout(400);
  // Right-click the porch's front side: steps and railing
  p = await at(b.x + 12 * upf, front, 0);
  await page.mouse.click(p.x, p.y, { button: "right" });
  await page.waitForTimeout(300);
  await shot(page, "38-menu-porch-side");
  await page.getByRole("menuitem", { name: "Put steps here" }).click();
  await page.waitForTimeout(400);
  await page.keyboard.press("Escape");
  await shot(page, "39-porch-door-steps");
  void eave;
});

test("quick edit", async ({ page }) => {
  await placeWithKey(page, "b", 0.5, 0.45);
  await page.keyboard.press("Escape");
  const [b] = await itemsOfType(page, "building");
  const upf = await page.evaluate(() => (window as any).__scpProject().planGeoRef?.unitsPerFoot ?? 1);
  await page.keyboard.press("3");
  await page.waitForTimeout(600);
  await page.evaluate(([b, upf]) => (window as any).__scpView.fitBounds({ minX: b.x - b.width / 2 - 15 * upf, maxX: b.x + b.width / 2 + 15 * upf, minY: b.y - b.height / 2 - 15 * upf, maxY: b.y + b.height / 2 + 10 * upf }, { animate: false }), [b, upf] as const);
  await page.waitForTimeout(500);
  await page.evaluate(id => (window as any).__scpSelect(id), b.id);
  await page.getByLabel("Inspector").getByRole("button", { name: "Edit the windows and doors" }).click();
  await page.waitForTimeout(400);
  await shot(page, "40-house-bar");
  await page.locator('[data-handle="opening"]').nth(9).click();
  await page.waitForTimeout(500);
  await shot(page, "41-window-picked");
  await page.getByRole("button", { name: "Apply to…" }).click();
  await shot(page, "42-apply-to");
  await page.keyboard.press("Escape");
  await page.waitForTimeout(200);
  await shot(page, "43-apply-closed");
  await page.evaluate(() => (window as any).__scpProject().setField("siteLocation", { lat: 39.78, lon: -89.68, label: "Springfield IL" }));
  await page.getByTitle("Sun and shadows: pick the date and time").click();
  await page.waitForTimeout(300);
  await shot(page, "44-sun");
});

test("paving", async ({ page }) => {
  await placeWithKey(page, "b", 0.5, 0.4);
  await placeWithKey(page, "w", 0.6, 0.6);
  await page.keyboard.press("Escape");
  const [b] = await itemsOfType(page, "building");
  // A driveway from the house's south wall, a walkway to the front door and a patio out back
  await page.evaluate(b => {
    const s = (window as any).__scpProject();
    const pv = s.items.find((i: any) => i.type === "paving");
    const walk = { ...pv, id: "walk", kind: "walkway", surface: "concrete", label: "Walkway", width: 4, height: 24, points: [{ x: -2, y: -12 }, { x: 2, y: -12 }, { x: 2, y: 12 }, { x: -2, y: 12 }], x: b.x - 8, y: b.y + b.height / 2 + 12.5 };
    const patio = { ...pv, id: "patio", kind: "patio", surface: "pavers", label: "Patio", width: 16, height: 14, points: [{ x: -8, y: -7 }, { x: 8, y: -7 }, { x: 8, y: 7 }, { x: -8, y: 7 }], x: b.x, y: b.y - b.height / 2 - 7.5 };
    const drive = { ...pv, x: b.x + b.width / 2 - 8, y: b.y + b.height / 2 + 20.5, points: [{ x: -6, y: -20 }, { x: 6, y: -20 }, { x: 6, y: 20 }, { x: -6, y: 20 }] };
    const car = { id: "car1", type: "parking", x: drive.x, y: drive.y - 6, rotation: 0, width: 6.6, height: 16.2, vehicleHeight: 5.9, color: "#94a3b8", vehicleType: "suv" };
    s.setField("items", (prev: any[]) => [...prev.filter((i: any) => i.type !== "paving"), drive, walk, patio, car]);
  }, b);
  await page.evaluate(b => (window as any).__scpView.fitBounds({ minX: b.x - 50, maxX: b.x + 50, minY: b.y - 40, maxY: b.y + 70 }, { animate: false }), b);
  await shot(page, "45-paving-2d");
  await page.keyboard.press("3");
  await page.waitForTimeout(600);
  await page.evaluate(b => (window as any).__scpView.fitBounds({ minX: b.x - 45, maxX: b.x + 45, minY: b.y - 35, maxY: b.y + 65 }, { animate: false }), b);
  await shot(page, "46-paving-3d");
  const [drive] = (await itemsOfType(page, "paving")).filter((p: any) => p.kind === "driveway");
  await page.evaluate(id => (window as any).__scpSelect(id), drive.id);
  await shot(page, "47-paving-selected");
});
