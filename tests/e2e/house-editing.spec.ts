// Editing a house like a home-design program, hands on: a raised porch with railings and a
// sliding door behind it, windows, a carport set into the house. Every check uses the mouse and
// keyboard the way a person would, and checks where things land on screen, not just the numbers.
import type { Page } from "@playwright/test";
import { test, expect, drag, handleCenter, itemsOfType, placeWithKey, screenOf } from "./fixtures";

// A 50 x 36 ft house (its own frame: x -25..25, y -18..18, south is +y) with a porch attached
// along the south wall, its floor 2.5 ft up, a sliding door and two windows behind it.
const PORCH = [{ x: -15, y: 18 }, { x: 15, y: 18 }, { x: 15, y: 26 }, { x: -15, y: 26 }];
// A carport set into the north-east corner (under the house's roof)
const CARPORT = [{ x: 10, y: -18 }, { x: 25, y: -18 }, { x: 25, y: -6 }, { x: 10, y: -6 }];

async function porchHouse(page: Page, view: "2" | "3" = "3") {
  await placeWithKey(page, "b", 0.5, 0.45);
  await page.keyboard.press("Escape");
  const [b] = await itemsOfType(page, "building");
  await page.evaluate(([id, porch, carport]) => {
    const s = (window as any).__scpProject();
    s.setField("items", (prev: any[]) => prev.map((i: any) => (i.id !== id ? i : {
      ...i,
      label: "House",
      openParts: [{ kind: "porch", pts: porch, floor: 2.5, roof: "own" }, { kind: "carport", pts: carport, floor: 0 }],
      openings: [
        { id: "slider", kind: "slider", x: 0, y: 18, width: 6, height: 6.7, sill: 2.5 },
        { id: "w1", kind: "window", x: -10, y: 18, width: 3, height: 4.25, sill: 5 },
        { id: "w2", kind: "window", x: 10, y: 18, width: 3, height: 4.25, sill: 5 },
        { id: "w3", kind: "window", x: -25, y: 0, width: 3, height: 4.25, sill: 3 }
      ]
    })));
  }, [b.id, PORCH, CARPORT] as const);
  await page.keyboard.press(view);
  await page.waitForTimeout(500);
  // In 3D, from lower down (like standing back from the house), so the porch railing shows
  if (view === "3") {
    await page.evaluate(() => (window as any).__scpView.tiltBy(-18));
    await page.waitForTimeout(800);
  }
  // Look at the porch side from the south
  await page.evaluate(b => (window as any).__scpView.fitBounds({ minX: b.x - 32, maxX: b.x + 32, minY: b.y - 22, maxY: b.y + 34 }, { animate: false }), b);
  await page.waitForTimeout(400);
  await page.evaluate(id => (window as any).__scpSelect(id), b.id);
  await page.waitForTimeout(300);
  const [house] = await itemsOfType(page, "building");
  return house;
}

/** A point in the house's own frame on screen, `lift` ft up. */
const local = async (page: Page, house: any, x: number, y: number, lift = 0) => {
  const a = (house.rotation * Math.PI) / 180;
  return (await screenOf(page, house.x + x * Math.cos(a) - y * Math.sin(a), house.y + x * Math.sin(a) + y * Math.cos(a), lift))!;
};

const pick = async (page: Page, index: number) => {
  await page.locator(`[data-handle="opening"][data-index="${index}"]`).click();
  await page.waitForTimeout(250);
};

test.describe("editing a house hands-on", () => {
  test("the picked door's dot sits on the door, between its size squares", async ({ page }) => {
    await porchHouse(page);
    await pick(page, 0);
    const dot = await page.locator('[data-handle="opening"][data-index="0"]').boundingBox();
    const sides = await page.locator('[data-handle="opening-size"]').evaluateAll(els => els.map(e => { const r = e.getBoundingClientRect(); return { x: r.x + r.width / 2, y: r.y + r.height / 2, i: (e as HTMLElement).dataset.index }; }));
    const l = sides.find(s => s.i === "-1")!, r = sides.find(s => s.i === "1")!;
    const c = { x: dot!.x + dot!.width / 2, y: dot!.y + dot!.height / 2 };
    // Halfway between the side squares (a few pixels for the dot sitting just off the wall)
    expect(Math.hypot(c.x - (l.x + r.x) / 2, c.y - (l.y + r.y) / 2)).toBeLessThan(8);
  });

  test("a window drags up the wall in 3D, and its bottom square sets the sill with the top fixed", async ({ page }) => {
    await porchHouse(page);
    // A window on the south wall (behind the porch), seen from the south
    await pick(page, 2);
    const before = (await itemsOfType(page, "building"))[0].openings[2];
    const dot = await handleCenter(page, "opening", 2);
    await drag(page, dot, { x: dot.x, y: dot.y - 40 }, 8);
    const moved = (await itemsOfType(page, "building"))[0].openings[2];
    expect(moved.sill).toBeGreaterThan(before.sill + 0.5);
    const top = moved.sill + moved.height;
    const bottom = await handleCenter(page, "opening-size", 3);
    await drag(page, bottom, { x: bottom.x, y: bottom.y + 25 }, 6);
    const lowered = (await itemsOfType(page, "building"))[0].openings[2];
    expect(lowered.sill).toBeLessThan(moved.sill);
    expect(lowered.sill + lowered.height).toBeCloseTo(top, 5);
  });

  test("a locked house doesn't move or reshape, but its windows, doors and porch still edit", async ({ page }) => {
    const house = await porchHouse(page);
    const bar = page.getByRole("toolbar", { name: "Selection actions" });
    await bar.getByRole("button", { name: "Lock" }).click();
    await expect(page.locator('[data-handle="corner"]')).toHaveCount(0);
    await expect(page.locator('[data-handle="rotate"]')).toHaveCount(0);
    // Windows, doors and the porch keep their handles, and the house bar stays
    await expect(page.locator('[data-handle="opening"]')).toHaveCount(4);
    await expect(page.locator('[data-handle="part-edge"]').first()).toBeAttached();
    await expect(bar.getByRole("group", { name: "Stories" })).toBeVisible();
    // Dragging the house pans the map: it stays put
    const c = await local(page, house, -18, -10, 6);
    await drag(page, c, { x: c.x + 80, y: c.y + 40 });
    const [same] = await itemsOfType(page, "building");
    expect(same.x).toBe(house.x);
    expect(same.y).toBe(house.y);
    // A window still slides along its wall
    await page.evaluate(id => (window as any).__scpSelect(id), house.id);
    await pick(page, 1);
    const dot = await handleCenter(page, "opening", 1);
    await drag(page, dot, { x: dot.x - 30, y: dot.y }, 6);
    const [after] = await itemsOfType(page, "building");
    expect(after.openings[1].x).not.toBe(-10);
    expect(after.locked).toBe(true);
  });

  test("copy a window with Ctrl+C and paste it with Ctrl+V: a copy beside it on the same wall", async ({ page }) => {
    await porchHouse(page);
    await pick(page, 3);
    await page.keyboard.press("Control+c");
    await page.keyboard.press("Control+v");
    const [b] = await itemsOfType(page, "building");
    expect(b.openings).toHaveLength(5);
    const src = b.openings[3], copy = b.openings[4];
    expect(copy.kind).toBe("window");
    expect(copy.width).toBe(src.width);
    expect(copy.sill).toBe(src.sill);
    // Same (west) wall, 5 ft along it
    expect(copy.x).toBeCloseTo(-25, 3);
    expect(Math.abs(copy.y - src.y)).toBeCloseTo(5, 3);
    expect(copy.id).not.toBe(src.id);
  });

  test("copy the porch from its right-click menu and paste it on another wall", async ({ page }) => {
    const house = await porchHouse(page);
    // Right-click the porch's railing (its far side, at railing height)
    const rail = await local(page, house, 5, 26, 2.5 + 2);
    await page.mouse.click(rail.x, rail.y, { button: "right" });
    const menu = page.getByRole("menu", { name: "Actions" });
    await menu.getByRole("menuitem", { name: "Copy this porch" }).click();
    // Paste it on the west wall, from that wall's menu
    await page.evaluate(b => (window as any).__scpView.fitBounds({ minX: b.x - 45, maxX: b.x - 15, minY: b.y - 15, maxY: b.y + 15 }, { animate: false }), house);
    await page.waitForTimeout(400);
    const wall = await local(page, house, -25, -6, 5);
    await page.mouse.click(wall.x, wall.y, { button: "right" });
    await menu.getByRole("menuitem", { name: "Paste the porch here" }).click();
    const [b] = await itemsOfType(page, "building");
    expect(b.openParts).toHaveLength(3);
    const pasted = b.openParts[2];
    expect(pasted.kind).toBe("porch");
    expect(pasted.floor).toBe(2.5);
    // Outside the west wall, 8 ft deep and 30 ft long like the original
    const xs = pasted.pts.map((p: any) => p.x), ys = pasted.pts.map((p: any) => p.y);
    expect(Math.min(...xs)).toBeCloseTo(-33, 3);
    expect(Math.max(...xs)).toBeCloseTo(-25, 3);
    expect(Math.max(...ys) - Math.min(...ys)).toBeCloseTo(30, 3);
  });

  test("right-click a porch's railing: Put steps here adds an entry there", async ({ page }) => {
    const house = await porchHouse(page);
    const rail = await local(page, house, -10, 26, 2.5 + 2);
    await page.mouse.click(rail.x, rail.y, { button: "right" });
    const menu = page.getByRole("menu", { name: "Actions" });
    await expect(menu.getByText(/Porch 1: this side/)).toBeVisible();
    await menu.getByRole("menuitem", { name: "Put steps here" }).click();
    const [b] = await itemsOfType(page, "building");
    const entries = b.openParts[0].entries;
    // The default entry (middle of the long side) and the new one on that same (south) side, a
    // third of the way along it (x = -10 of -15..15)
    expect(entries.length).toBe(2);
    expect(entries[1].side).toBe(entries[0].side);
    expect(Math.abs(entries[1].at - 0.5)).toBeCloseTo(1 / 3, 1);
  });

  test("the house's long right-click menu stays on screen in a short window", async ({ page }) => {
    await page.setViewportSize({ width: 1400, height: 640 });
    const house = await porchHouse(page);
    const vh = 640;
    // On the south wall, left of the porch
    const wall = await local(page, house, -21, 18, 6);
    await page.mouse.click(wall.x, wall.y, { button: "right" });
    const menu = page.getByRole("menu", { name: "Actions" });
    await expect(menu).toBeVisible();
    const r = (await menu.boundingBox())!;
    expect(r.y).toBeGreaterThanOrEqual(0);
    expect(r.y + r.height).toBeLessThanOrEqual(vh + 0.5);
  });

  test("cameras go under the porch (on the wall behind it, under its roof) and under the carport", async ({ page }) => {
    const house = await porchHouse(page, "2");
    await page.keyboard.press("Escape");
    // Under the porch, a couple of feet from the house wall
    const under = await local(page, house, -5, 20);
    await page.keyboard.press("c");
    await page.mouse.click(under.x, under.y);
    await page.waitForTimeout(200);
    let [cam] = await itemsOfType(page, "camera");
    expect(cam.mount.type).toBe("building");
    // Facing south, out of the porch, below its roof (about 13.4 ft at the wall, sloping down)
    expect(Math.round(cam.rotation)).toBe(90);
    expect(cam.mount.height).toBeLessThan(13);
    // Out of reach of someone on the porch floor (2.5 ft up)
    expect(cam.mount.height).toBeGreaterThanOrEqual(2.5 + 7.5);
    // Under the carport, in the middle of it: hung under the roof, facing out
    await page.keyboard.press("Escape");
    const cp = await local(page, house, 17, -12);
    await page.keyboard.press("c");
    await page.mouse.click(cp.x, cp.y);
    await page.waitForTimeout(200);
    const cams = await itemsOfType(page, "camera");
    cam = cams[1];
    const a = (house.rotation * Math.PI) / 180;
    const lx = (cam.x - house.x) * Math.cos(a) + (cam.y - house.y) * Math.sin(a);
    const ly = -(cam.x - house.x) * Math.sin(a) + (cam.y - house.y) * Math.cos(a);
    // Inside the carport (under the house's roof), not pushed out to the outline
    expect(lx).toBeGreaterThan(10);
    expect(lx).toBeLessThan(25);
    expect(ly).toBeGreaterThan(-18);
    expect(ly).toBeLessThan(-6);
    expect(cam.mount.height).toBeLessThan(14);
  });

  test("a crawl space raises the floor: the walls, windows, doors and porch go up with it", async ({ page }) => {
    await porchHouse(page);
    const before = (await itemsOfType(page, "building"))[0];
    await page.getByRole("toolbar", { name: "Selection actions" }).getByLabel("Floor height").selectOption("Crawl space");
    const [b] = await itemsOfType(page, "building");
    expect(b.floorHeight).toBe(2.5);
    // Up by 1.5 ft from the usual 1 ft
    expect(b.wallHeight).toBeCloseTo((before.wallHeight ?? 14) + 1.5, 5);
    expect(b.openings[0].sill).toBeCloseTo(4, 5);
    expect(b.openParts[0].floor).toBeCloseTo(4, 5);
    expect(b.openParts[1].floor).toBe(0);
    // The foundation shows below the siding
    expect(await page.evaluate(() => !!(window as any).__scpThree().scene.getObjectByName("building-foundation"))).toBe(true);
  });

  test("a patio's side handles sit on the patio itself, and dragging its outer side pulls it in", async ({ page }) => {
    const house = await porchHouse(page);
    // A patio (no roof, on the ground) along the west wall
    const PATIO = [{ x: -35, y: -8 }, { x: -25, y: -8 }, { x: -25, y: 8 }, { x: -35, y: 8 }];
    await page.evaluate(([id, pts]) => {
      const s = (window as any).__scpProject();
      s.setField("items", (prev: any[]) => prev.map((i: any) => (i.id !== id ? i : { ...i, openParts: [...i.openParts, { kind: "patio", pts, floor: 0 }] })));
    }, [house.id, PATIO] as const);
    await page.evaluate(b => (window as any).__scpView.fitBounds({ minX: b.x - 42, maxX: b.x - 5, minY: b.y - 16, maxY: b.y + 16 }, { animate: false }), house);
    await page.waitForTimeout(400);
    await page.evaluate(id => (window as any).__scpSelect(id), house.id);
    await page.waitForTimeout(300);
    // The outer (west) side's handle is on the ground at the patio's edge, not up at the eaves
    const handle = await handleCenter(page, "part-edge", 2 * 4 + 3);
    const edge = await local(page, house, -35, 0);
    expect(Math.hypot(handle.x - edge.x, handle.y - edge.y)).toBeLessThan(10);
    // Dragging it toward the house makes the patio shallower
    const inner = await local(page, house, -29, 0);
    await drag(page, handle, inner, 10);
    const part = (await itemsOfType(page, "building"))[0].openParts[2];
    const west = Math.min(...part.pts.map((q: any) => q.x));
    expect(west).toBeGreaterThan(-31);
    expect(west).toBeLessThan(-27);
    expect(Math.max(...part.pts.map((q: any) => q.x))).toBeCloseTo(-25, 3);
  });
});
