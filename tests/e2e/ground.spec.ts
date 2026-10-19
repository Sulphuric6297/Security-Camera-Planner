// Ground texture over the aerial photo: what the photo shows (lawn, concrete, asphalt, soil) is
// worked out from its colors and graininess, and real-scale texture of each is laid over it.
import { readFileSync } from "fs";
import { decode } from "fast-png";
import { test, expect, importSite } from "./fixtures";
import { classifyCover, coverAt, coverOfColor } from "../../src/lib/geo/landCover";

const top = (w: ReturnType<typeof coverOfColor>) =>
  (["grass", "concrete", "asphalt", "soil", "none"] as const).reduce((a, b) => (w[b] > w[a] ? b : a));

/** A synthetic photo: per pixel color from a function, with a little noise. */
const synth = (w: number, h: number, color: (x: number, y: number) => [number, number, number]) => {
  const data = new Uint8ClampedArray(w * h * 4);
  let seed = 3;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647 - 0.5);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const [r, g, b] = color(x, y);
    const i = (y * w + x) * 4;
    data[i] = r + rnd() * 10; data[i + 1] = g + rnd() * 10; data[i + 2] = b + rnd() * 10; data[i + 3] = 255;
  }
  return { data, width: w, height: h };
};

test.describe("ground cover from the photo (pure logic)", () => {
  test("photo colors: lawn, shaded or dry lawn, concrete, asphalt, hazy asphalt, pool, dirt", () => {
    expect(top(coverOfColor(88, 128, 62))).toBe("grass");
    expect(top(coverOfColor(34, 52, 30))).toBe("grass");
    expect(top(coverOfColor(165, 160, 102))).toBe("grass");
    expect(top(coverOfColor(205, 200, 192))).toBe("concrete");
    expect(top(coverOfColor(62, 64, 68))).toBe("asphalt");
    expect(top(coverOfColor(70, 76, 92))).toBe("asphalt");
    expect(top(coverOfColor(60, 150, 200))).toBe("none");
    // Tan: grainy is dirt or gravel, smooth is concrete
    expect(top(coverOfColor(172, 148, 120, 0.1))).toBe("soil");
    expect(top(coverOfColor(200, 190, 176, 0.005))).toBe("concrete");
    // Deep shadow says little
    expect(coverOfColor(12, 14, 16).sure).toBeLessThan(0.1);
    expect(coverOfColor(88, 128, 62).sure).toBeGreaterThan(0.9);
  });

  test("a yard: lawn, a concrete walk, an asphalt street, and a tree shadow on the lawn stays lawn", () => {
    // 2 px per ft: lawn on the left, a 4 ft walk, then the street; a dark tree shadow on the lawn
    const img = synth(200, 120, (x, y) => {
      if (Math.hypot(x - 60, y - 60) < 14) return [18, 22, 20];
      if (x < 120) return [88, 128, 62];
      if (x < 128) return [205, 200, 192];
      return [62, 64, 68];
    });
    const mask = classifyCover(img, { pxPerFt: 2 });
    expect(coverAt(mask, 40, 30)).toBe("grass");
    expect(coverAt(mask, 124, 60)).toBe("concrete");
    expect(coverAt(mask, 170, 60)).toBe("asphalt");
    // The middle of the shadow takes the lawn around it
    expect(coverAt(mask, 60, 60)).toBe("grass");
    // Edges stay where the photo has them (within a foot)
    expect(coverAt(mask, 117, 60)).toBe("grass");
    expect(coverAt(mask, 131, 60)).toBe("asphalt");
  });

  test("a real satellite photo of a parking lot is mostly paving, its tree crowns plants", () => {
    // WorldView-3 photo of a Las Vegas shopping-centre lot (SpaceNet, CC BY-SA 4.0): see
    // tests/fixtures/aerial/README.md.
    const png = decode(readFileSync("tests/fixtures/aerial/vegas-parking-lot.png"));
    const data = new Uint8ClampedArray(png.width * png.height * 4);
    for (let i = 0; i < png.width * png.height; i++) {
      for (let k = 0; k < 3; k++) data[i * 4 + k] = png.data[i * png.channels + k];
      data[i * 4 + 3] = 255;
    }
    const mask = classifyCover({ data, width: png.width, height: png.height }, { pxPerFt: 0.3048 / 0.3 });
    const count: Record<string, number> = {};
    for (let y = 0; y < png.height; y++) for (let x = 0; x < png.width; x++) {
      const c = coverAt(mask, x, y) ?? "none";
      count[c] = (count[c] ?? 0) + 1;
    }
    const n = png.width * png.height;
    expect(((count.asphalt ?? 0) + (count.concrete ?? 0)) / n).toBeGreaterThan(0.6);
    expect((count.grass ?? 0) / n).toBeGreaterThan(0.05);
    expect((count.grass ?? 0) / n).toBeLessThan(0.3);
  });
});

test.describe("ground texture in the map", () => {
  test("after an import the photo gets its ground texture; the switch turns it off and on, and is remembered", async ({ page }) => {
    await importSite(page);
    const state = () => page.evaluate(() => {
      const d = (window as any).__scpView.ground.detail;
      const c = d.coverMap.value;
      let grass = 0;
      if (c) for (let i = 0; i < c.image.width * c.image.height; i++) if (c.image.data[i * 4] > 127) grass++;
      return { on: d.groundDetail.value, cover: !!c, pattern: !!d.detailMap.value, grassShare: c ? grass / (c.image.width * c.image.height) : 0 };
    });
    await expect.poll(async () => (await state()).on, { timeout: 30_000 }).toBe(1);
    const s = await state();
    expect(s.cover && s.pattern).toBe(true);
    // The stub photo is a lawn with a few roofs on it
    expect(s.grassShare).toBeGreaterThan(0.6);
    const toggle = page.getByLabel("Ground texture");
    await expect(toggle).toBeChecked();
    await toggle.uncheck();
    await expect.poll(async () => (await state()).on).toBe(0);
    expect(await page.evaluate(() => localStorage.getItem("scp.groundDetail"))).toBe("0");
    await toggle.check();
    await expect.poll(async () => (await state()).on).toBe(1);
  });
});
