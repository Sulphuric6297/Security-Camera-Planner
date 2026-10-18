import { test as base, expect, Page } from "@playwright/test";
import { encode } from "fast-png";

// ---------------------------------------------------------------------------------------------
// Offline stubs for every external service the app uses, so tests are fast and deterministic.
// ---------------------------------------------------------------------------------------------

export const SITE = { lat: 39.78073, lon: -89.68103, label: "123 Main St, Springfield, IL, 00000" };

const cors = { "access-control-allow-origin": "*" };
const json = (body: unknown) => ({ status: 200, headers: { "content-type": "application/json", ...cors }, body: JSON.stringify(body) });
const png = (bytes: Uint8Array) => ({ status: 200, headers: { "content-type": "image/png", ...cors }, body: Buffer.from(bytes) });

/** Terrarium elevation tile: a gentle real-world-like slope (~600 m, rising east). */
const terrariumTile = (z: number, x: number) => {
  const size = 256;
  const data = new Uint8Array(size * size * 3);
  const metersPerPx = 40075016 / Math.pow(2, z) / size;
  for (let py = 0; py < size; py++) {
    for (let px = 0; px < size; px++) {
      const globalX = (x * size + px) * metersPerPx;
      const meters = 600 + ((globalX % 2000) / 2000) * 25; // ≤ 25 m over 2 km
      const v = meters + 32768;
      const i = (py * size + px) * 3;
      data[i] = Math.floor(v / 256);
      data[i + 1] = Math.floor(v % 256);
      data[i + 2] = Math.floor((v % 1) * 256);
    }
  }
  return encode({ width: size, height: size, data, channels: 3, depth: 8 });
};

// Where the stub buildings really are on the "photo". The OSM house is mapped exactly; the
// AI-detected footprint is deliberately 4 m west and 3 m north of its roof, like real data can be,
// so tests can check that import lines it up with the photo.
export const DETECTED_OFFSET_M = { east: -4, north: 3 };
const M_PER_DEG = 111320;
export const DETECTED_CENTER = { lat: SITE.lat + 0.00025, lon: SITE.lon + 0.0003 };
export const ROOFS = [
  { lat: SITE.lat, lon: SITE.lon, d: 0.00008, color: [70, 72, 78] },
  {
    lat: DETECTED_CENTER.lat - DETECTED_OFFSET_M.north / M_PER_DEG,
    lon: DETECTED_CENTER.lon - DETECTED_OFFSET_M.east / (M_PER_DEG * Math.cos((SITE.lat * Math.PI) / 180)),
    d: 0.00004,
    color: [150, 92, 64]
  }
];

/** Imagery tile: textured grass with the stub buildings' roofs (and their shadows) drawn where they really are. */
const imageryTile = (z: number, tx: number, ty: number) => {
  const size = 256;
  const world = size * Math.pow(2, z);
  const data = new Uint8Array(size * size * 4);
  const shadowDeg = 1.2 / M_PER_DEG;
  for (let py = 0; py < size; py++) {
    const gy = ty * size + py;
    const lat = (Math.atan(Math.sinh(Math.PI * (1 - (2 * gy) / world))) * 180) / Math.PI;
    for (let px = 0; px < size; px++) {
      const gx = tx * size + px;
      const lon = (gx / world) * 360 - 180;
      // deterministic grass texture
      const h = Math.sin(gx * 12.9898 + gy * 78.233) * 43758.5453;
      const n = (h - Math.floor(h) - 0.5) * 30;
      let col = [80 + n, 120 + n, 60 + n * 0.5];
      for (const r of ROOFS) {
        const dLon = r.d; // same shape as the stub footprints (square() offsets lat and lon equally)
        const inRoof = Math.abs(lat - r.lat) <= r.d && Math.abs(lon - r.lon) <= dLon;
        const inShadow = !inRoof && Math.abs(lat + shadowDeg - r.lat) <= r.d && Math.abs(lon - shadowDeg - r.lon) <= dLon;
        if (inShadow) col = col.map(v => v * 0.45);
        if (inRoof) col = r.color.map(v => v * (lat > r.lat ? 1.12 : 0.88) + n * 0.3);
      }
      const i = (py * size + px) * 4;
      data[i] = col[0];
      data[i + 1] = col[1];
      data[i + 2] = col[2];
      data[i + 3] = 255;
    }
  }
  return encode({ width: size, height: size, data, channels: 4, depth: 8 });
};
const tileCache = new Map<string, Uint8Array>();
const cached = (key: string, make: () => Uint8Array) => {
  if (!tileCache.has(key)) tileCache.set(key, make());
  return tileCache.get(key)!;
};

const square = (lat: number, lon: number, d: number) =>
  [[lat - d, lon - d], [lat - d, lon + d], [lat + d, lon + d], [lat + d, lon - d], [lat - d, lon - d]];

export async function stubNetwork(page: Page) {
  // Anything not explicitly stubbed must not hit the internet.
  await page.route(/^https?:\/\/(?!localhost|127\.0\.0\.1)/, route => route.abort());

  await page.route(/elevation-tiles-prod\/terrarium\/(\d+)\/(\d+)\/(\d+)\.png/, route => {
    const [, z, x] = route.request().url().match(/terrarium\/(\d+)\/(\d+)\/(\d+)/)!.map(Number);
    route.fulfill(png(cached(`t${z}/${x}`, () => terrariumTile(z, x))));
  });
  await page.route(/arcgisonline\.com\/.*\/tile\/(\d+)\/(\d+)\/(\d+)/, route => {
    const [z, y, x] = route.request().url().match(/tile\/(\d+)\/(\d+)\/(\d+)/)!.slice(1).map(Number);
    route.fulfill(png(cached(`i${z}/${x}/${y}`, () => imageryTile(z, x, y))));
  });
  await page.route(/tile\.openstreetmap\.org\/(\d+)\/(\d+)\/(\d+)/, route => {
    const [z, x, y] = route.request().url().match(/org\/(\d+)\/(\d+)\/(\d+)/)!.slice(1).map(Number);
    route.fulfill(png(cached(`i${z}/${x}/${y}`, () => imageryTile(z, x, y))));
  });
  await page.route(/\/tilemap\//, route => route.fulfill(json({ adjusted: false, data: [0] })));
  // Statewide ortho + USGS: simulate "unavailable" so the fallbacks are exercised.
  await page.route(/nconemap\.gov|gis\.nc\.gov|elevation\.nationalmap\.gov/, route => route.abort());

  await page.route(/GeocodeServer\/suggest/, route =>
    route.fulfill(json({ suggestions: [{ text: `${SITE.label}, USA`, magicKey: "k1", isCollection: false }] }))
  );
  await page.route(/GeocodeServer\/findAddressCandidates/, route =>
    route.fulfill(json({ candidates: [{ address: SITE.label, score: 100, location: { x: SITE.lon, y: SITE.lat } }] }))
  );
  await page.route(/census\.gov|photon\.komoot|nominatim/, route => route.abort());

  // Buildings: one mapped in OpenStreetMap, two AI-detected (one duplicates the mapped one).
  await page.route(/overpass/, route =>
    route.fulfill(json({
      elements: [{
        type: "way",
        tags: { building: "house", "building:levels": "2", "addr:housenumber": "123" },
        geometry: square(SITE.lat, SITE.lon, 0.00008).map(([lat, lon]) => ({ lat, lon }))
      }]
    }))
  );
  await page.route(/USA_Structures_View/, route =>
    route.fulfill(json({
      type: "FeatureCollection",
      features: [
        { type: "Feature", properties: { HEIGHT: 7 }, geometry: { type: "Polygon", coordinates: [square(SITE.lat, SITE.lon, 0.00008).map(([a, b]) => [b, a])] } },
        { type: "Feature", properties: { HEIGHT: 3.5 }, geometry: { type: "Polygon", coordinates: [square(SITE.lat + 0.00025, SITE.lon + 0.0003, 0.00004).map(([a, b]) => [b, a])] } }
      ]
    }))
  );
}

// ---------------------------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------------------------

export type ProjectSnapshot = {
  items: any[];
  terrainHeights: Record<string, number>;
  backgroundImg: string | null;
  canvasSize: { width: number; height: number };
  projectName: string;
  exportList: any[];
};

/** Live project data from the app's store. */
export const project = (page: Page): Promise<ProjectSnapshot> =>
  page.evaluate(() => {
    const s = (window as any).__scpProject();
    return {
      items: s.items,
      terrainHeights: s.terrainHeights,
      backgroundImg: s.backgroundImg ? `${s.backgroundImg.slice(0, 30)}…` : null,
      canvasSize: s.canvasSize,
      projectName: s.projectName,
      exportList: s.exportList
    };
  });

export const itemsOfType = async (page: Page, type: string) => (await project(page)).items.filter(i => i.type === type);

export const terrainRelief = async (page: Page) => {
  const values = Object.values((await project(page)).terrainHeights) as number[];
  if (!values.length) return 0;
  return Math.max(0, ...values) - Math.min(0, ...values);
};

/** Click on the plan at a fraction of the visible plan area (0..1, 0..1). */
export async function planPoint(page: Page, fx: number, fy: number) {
  const box = (await page.getByTestId("plan").boundingBox())!;
  return { x: box.x + box.width * fx, y: box.y + box.height * fy };
}

export async function placeWithKey(page: Page, key: string, fx: number, fy: number) {
  await page.keyboard.press(key);
  const p = await planPoint(page, fx, fy);
  await page.mouse.click(p.x, p.y);
  await page.waitForTimeout(150);
}

/** Runs the whole Import Site flow against the stubs; returns the success message. */
export async function importSite(page: Page) {
  await page.locator('nav[aria-label="Steps"] button').first().click();
  const search = page.getByLabel("Search address");
  await search.fill("123 Main St Fra");
  await page.getByRole("button", { name: /123 Main St/ }).click();
  await expect(page.getByText(/of \d+ buildings will be added/)).toBeVisible();
  await page.locator("div.fixed button", { hasText: "Import Site" }).last().click();
  const done = page.getByText(/^Site imported\./);
  await expect(done).toBeVisible({ timeout: 60_000 });
  return done.textContent();
}

type Fixtures = { errors: string[] };

/** Every test starts from an empty app with the network stubbed, and fails on uncaught page errors. */
export const test = base.extend<Fixtures>({
  errors: async ({}, use) => {
    await use([]);
  },
  page: async ({ page, errors }, use) => {
    page.on("pageerror", err => errors.push(err.message));
    await stubNetwork(page);
    await page.goto("/");
    await page.evaluate(async () => {
      localStorage.clear();
      await new Promise<void>(resolve => {
        const req = indexedDB.deleteDatabase("security-camera-planner");
        req.onsuccess = req.onerror = req.onblocked = () => resolve();
      });
    });
    await page.reload();
    await expect(page.getByText("Start your camera plan")).toBeVisible();
    await use(page);
    expect(errors, "uncaught errors in the page").toEqual([]);
  }
});

export { expect };
