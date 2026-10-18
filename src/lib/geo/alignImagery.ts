// Runs footprint alignment against real imagery in the browser: the satellite tiles shown in the
// site picker, and the exact image imported into the plan.
import { alignGeoFootprints, toGray, type GeoAlignStats, type GeoPoint } from "./align";
import { loadTileMosaic, type GeoBounds } from "./core";
import { MAP_IMAGERY_SOURCES } from "./imagery";

type Footprint = { points: GeoPoint[]; source?: string };

const MAX_ALIGN_PX = 2048;

const bySource = <T extends Footprint>(items: T[]) => {
  const keys = Array.from(new Set(items.map(i => i.source ?? "")));
  return keys.map(k => items.filter(i => (i.source ?? "") === k));
};

const reassemble = <T extends Footprint>(original: T[], groups: T[][]) => {
  const keys = Array.from(new Set(original.map(i => i.source ?? "")));
  const queues = new Map(keys.map((k, i) => [k, groups[i].slice()]));
  return original.map(o => queues.get(o.source ?? "")!.shift()!);
};

const yieldToBrowser = () => new Promise(resolve => setTimeout(resolve, 0));

/** Aligns footprints with the satellite tiles the picker shows (z19). */
export const alignToSatelliteTiles = async <T extends Footprint>(
  items: T[],
  bounds: GeoBounds,
  maxShiftM = 8
): Promise<{ items: T[]; stats: GeoAlignStats } | null> => {
  if (!items.length) return null;
  const mosaic = await loadTileMosaic(bounds, 19, 100, MAP_IMAGERY_SOURCES.satellite.url);
  if (!mosaic.loadedAny) return null;
  await yieldToBrowser();
  const nw = mosaic.toMosaic(bounds.north, bounds.west);
  const se = mosaic.toMosaic(bounds.south, bounds.east);
  // Area of interest plus a margin for the search, downsampled if very large.
  const margin = 64;
  const x0 = Math.max(0, Math.floor(nw.x - margin));
  const y0 = Math.max(0, Math.floor(nw.y - margin));
  const x1 = Math.min(mosaic.canvas.width, Math.ceil(se.x + margin));
  const y1 = Math.min(mosaic.canvas.height, Math.ceil(se.y + margin));
  const scale = Math.min(1, MAX_ALIGN_PX / Math.max(x1 - x0, y1 - y0));
  const w = Math.max(1, Math.round((x1 - x0) * scale));
  const h = Math.max(1, Math.round((y1 - y0) * scale));
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d", { willReadFrequently: true });
  if (!ctx) return null;
  ctx.drawImage(mosaic.canvas, x0, y0, x1 - x0, y1 - y0, 0, 0, w, h);
  let pixels: ImageData;
  try {
    pixels = ctx.getImageData(0, 0, w, h);
  } catch {
    return null; // tainted canvas: tiles without CORS
  }
  const gray = toGray(pixels.data, w, h);
  const toPx = (p: GeoPoint) => {
    const m = mosaic.toMosaic(p.lat, p.lon);
    return { x: (m.x - x0) * scale, y: (m.y - y0) * scale };
  };
  const cosLat = Math.cos((((bounds.north + bounds.south) / 2) * Math.PI) / 180);
  const metersPerPx = (156543.03392 * cosLat) / Math.pow(2, mosaic.z) / scale;
  const { groups, stats } = alignGeoFootprints(bySource(items), gray, toPx, metersPerPx, maxShiftM);
  return { items: reassemble(items, groups), stats };
};

/** Aligns footprints with an image that exactly covers `bounds` (north-up), e.g. the imported map. */
export const alignToImageUrl = async <T extends Footprint>(
  items: T[],
  bounds: GeoBounds,
  url: string,
  maxShiftM = 4
): Promise<{ items: T[]; stats: GeoAlignStats } | null> => {
  if (!items.length) return null;
  const img = await new Promise<HTMLImageElement | null>(resolve => {
    const el = new Image();
    el.crossOrigin = "anonymous";
    el.onload = () => resolve(el);
    el.onerror = () => resolve(null);
    el.src = url;
  });
  if (!img) return null;
  const scale = Math.min(1, MAX_ALIGN_PX / Math.max(img.naturalWidth, img.naturalHeight));
  const w = Math.max(1, Math.round(img.naturalWidth * scale));
  const h = Math.max(1, Math.round(img.naturalHeight * scale));
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d", { willReadFrequently: true });
  if (!ctx) return null;
  ctx.drawImage(img, 0, 0, w, h);
  let pixels: ImageData;
  try {
    pixels = ctx.getImageData(0, 0, w, h);
  } catch {
    return null;
  }
  await yieldToBrowser();
  const gray = toGray(pixels.data, w, h);
  const toPx = (p: GeoPoint) => ({
    x: ((p.lon - bounds.west) / (bounds.east - bounds.west)) * w,
    y: ((bounds.north - p.lat) / (bounds.north - bounds.south)) * h
  });
  const widthM = (bounds.east - bounds.west) * 111320 * Math.cos((((bounds.north + bounds.south) / 2) * Math.PI) / 180);
  const { groups, stats } = alignGeoFootprints(bySource(items), gray, toPx, widthM / w, maxShiftM);
  return { items: reassemble(items, groups), stats };
};
