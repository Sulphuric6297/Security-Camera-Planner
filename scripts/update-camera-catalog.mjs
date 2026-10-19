// Refreshes the UniFi Protect cameras in the camera list (public/cameras.json, and the copy built
// into the app) from Ubiquiti's tech specs pages: every camera's field of view (wide and zoomed),
// resolution and night vision reach. Run weekly by .github/workflows/update-cameras.yml.
// Other brands in the list are kept as they are. Exits with an error (and changes nothing) when the
// pages can't be read, so a change to Ubiquiti's site shows up as a failed run, never a broken list.
//
//   node scripts/update-camera-catalog.mjs              update from techspecs.ui.com
//   node scripts/update-camera-catalog.mjs --page file  just parse one saved page (to check the parser)
import { readFileSync, writeFileSync } from "node:fs";

const BASE = "https://techspecs.ui.com";
const LIST = `${BASE}/unifi/physical-security?subcategory=all-physical-security`;
const FILES = ["public/cameras.json", "src/data/cameras.json"];

const text = html =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, m => (m.includes("__NEXT_DATA__") ? m : " "))
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<(br|\/p|\/div|\/li|\/tr|\/td|\/th|\/h\d)[^>]*>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/&deg;|&#176;/g, "°")
    .replace(/&amp;/g, "&")
    .replace(/[ \t]+/g, " ");

const FORMS = ["bullet", "turret", "dome", "flex", "instant", "ptz", "360", "180"];

/** The specs we need from one product page, or null if it isn't a camera we can use. */
export const parsePage = (html, slug) => {
  const t = text(html);
  const title = (html.match(/<title>([^<]+)<\/title>/i)?.[1] ?? "").replace(/\s*[-|–].*$/, "").replace(/^UniFi\s+/i, "").trim();
  // Field of view: "H: 109.9°" (maybe "H: 113.8° - 45.5°" for zoom lenses), near "Field of View" / "View Angle"
  const fovAt = t.search(/field of view|view angle|viewing angle/i);
  const fovText = fovAt >= 0 ? t.slice(fovAt, fovAt + 400) : t;
  const h = fovText.match(/H(?:orizontal)?\s*[:：]?\s*([\d.]+)\s*°(?:\s*(?:[-–~]|to)\s*([\d.]+)\s*°)?/i);
  if (!h) return null;
  const hFov = parseFloat(h[1]);
  const hFovTele = h[2] ? parseFloat(h[2]) : undefined;
  if (!(hFov > 10 && hFov < 200)) return null;
  // Night vision: "30 m (98 ft)" near "IR" / "Night Vision"
  const irAt = t.search(/IR night vision|night vision range|IR range|infrared/i);
  const irText = irAt >= 0 ? t.slice(irAt, irAt + 300) : "";
  const ir = irText.match(/([\d.]+)\s*m\s*\(\s*([\d.]+)\s*ft\s*\)/i) ?? irText.match(/([\d.]+)\s*m\b/i);
  const irRangeFt = ir ? Math.round(ir[2] ? parseFloat(ir[2]) : parseFloat(ir[1]) * 3.28084) : undefined;
  // Resolution: "3840 x 2160" or a name (4K, 2K, 1080p)
  const px = t.match(/(\d{4})\s*[x×]\s*(\d{3,4})/);
  const resolutionWidth = px ? parseInt(px[1], 10) : /\b4K\b|8\s?MP/i.test(t) ? 3840 : /\b2K\b|5\s?MP|4\s?MP/i.test(t) ? 2688 : /1080p|2\s?MP/i.test(t) ? 1920 : undefined;
  const name = title || slug.replace(/^uvc-/, "").toUpperCase();
  const form = FORMS.find(f => new RegExp(f, "i").test(name)) ?? "bullet";
  return { id: slug, brand: "UniFi", name, form, hFov, ...(hFovTele && hFovTele < hFov ? { hFovTele } : {}), ...(irRangeFt ? { irRangeFt } : {}), ...(resolutionWidth ? { resolutionWidth } : {}), url: `${BASE}/unifi/physical-security/${slug}` };
};

const get = async url => {
  const res = await fetch(url, { headers: { "user-agent": "Mozilla/5.0 (camera-planner camera list update)" } });
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
  return res.text();
};

const main = async () => {
  const pageArg = process.argv.indexOf("--page");
  if (pageArg > 0) {
    console.log(JSON.stringify(parsePage(readFileSync(process.argv[pageArg + 1], "utf8"), "uvc-test"), null, 1));
    return;
  }
  const list = await get(LIST);
  const slugs = [...new Set([...list.matchAll(/\/unifi\/physical-security\/(uvc-[a-z0-9-]+)/gi)].map(m => m[1].toLowerCase()))];
  console.log(`Found ${slugs.length} product pages`);
  const found = [];
  for (const slug of slugs) {
    try {
      const m = parsePage(await get(`${BASE}/unifi/physical-security/${slug}?subcategory=all-physical-security`), slug);
      if (m) found.push(m);
      else console.log(`  skipped ${slug} (no field of view: not a camera?)`);
    } catch (e) {
      console.log(`  could not read ${slug}: ${e.message}`);
    }
  }
  if (found.length < 3) throw new Error(`Only ${found.length} cameras read: Ubiquiti's pages may have changed. The list was not touched.`);
  const current = JSON.parse(readFileSync(FILES[0], "utf8"));
  const byId = new Map(current.models.map(m => [m.id, m]));
  let changes = 0;
  for (const f of found) {
    const old = byId.get(f.id);
    const next = { aspect: 16 / 9, resolutionWidth: 2688, irRangeFt: 30, ...old, ...f, approx: undefined };
    if (!old) { console.log(`  new: ${f.name}`); next.line = f.name.match(/^(G\d|AI)/i)?.[1]; }
    if (JSON.stringify(old) !== JSON.stringify(JSON.parse(JSON.stringify(next)))) { byId.set(f.id, next); changes++; }
  }
  if (!changes) { console.log("No changes."); return; }
  // UniFi first (newest lines first), then the other brands as they were
  const models = [...byId.values()].map(m => JSON.parse(JSON.stringify(m)));
  const unifi = models.filter(m => m.brand === "UniFi").sort((a, b) => (b.line ?? "").localeCompare(a.line ?? "") || a.name.localeCompare(b.name));
  const out = { ...current, updated: new Date().toISOString().slice(0, 10), models: [...unifi, ...models.filter(m => m.brand !== "UniFi")] };
  for (const f of FILES) writeFileSync(f, JSON.stringify(out, null, 1) + "\n");
  console.log(`Updated ${changes} camera(s).`);
};

if (import.meta.url === `file://${process.argv[1]}`) main().catch(e => { console.error(e.message); process.exit(1); });
