// Trees and parked cars found on the imported aerial photo, as plan items (marked
// importSource "photo" so a re-import replaces them and the user can remove them all at once).
import { pointInPolygonXY } from "../geometry";
import { createItem } from "../items";
import { buildingWorldPoints } from "../planGeom";
import type { BuildingItem, ParkingItem, TreeItem } from "../../types";
import { detectTrees, detectVehicles } from "./detect";

const FT_PER_M = 3.28084;

const loadImage = (url: string) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });

/**
 * @param rect where the photo sits on the plan (plan units)
 * @param unitsPerFoot plan units per foot
 */
export const detectSiteObjects = async (
  url: string,
  rect: { x: number; y: number; width: number; height: number },
  unitsPerFoot: number,
  buildings: BuildingItem[]
): Promise<{ trees: TreeItem[]; vehicles: ParkingItem[] }> => {
  const img = await loadImage(url);
  const widthM = rect.width / unitsPerFoot / FT_PER_M;
  // About 25 cm per pixel: plenty for crowns and cars, and fast.
  const scale = Math.min(1, (widthM / 0.25) / img.naturalWidth);
  const w = Math.max(16, Math.round(img.naturalWidth * scale));
  const h = Math.max(16, Math.round(img.naturalHeight * scale));
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return { trees: [], vehicles: [] };
  ctx.drawImage(img, 0, 0, w, h);
  const data = ctx.getImageData(0, 0, w, h);
  const mpp = widthM / w;
  const unitsPerPx = rect.width / w;
  const toPlan = (px: number, py: number) => ({ x: rect.x + px * unitsPerPx, y: rect.y + py * (rect.height / h) });

  // Leave out roofs and a few meters around them (walls, shadows, eaves).
  const pad = 3 * FT_PER_M * unitsPerFoot;
  const outlines = buildings.map(b => {
    const pts = buildingWorldPoints(b);
    const cx = pts.reduce((s, p) => s + p.x, 0) / pts.length;
    const cy = pts.reduce((s, p) => s + p.y, 0) / pts.length;
    const grown = pts.map(p => {
      const d = Math.hypot(p.x - cx, p.y - cy) || 1;
      return { x: p.x + ((p.x - cx) / d) * pad, y: p.y + ((p.y - cy) / d) * pad };
    });
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    grown.forEach(p => { minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x); minY = Math.min(minY, p.y); maxY = Math.max(maxY, p.y); });
    return { pts: grown, minX, minY, maxX, maxY };
  });
  const excludeMask = new Uint8Array(w * h);
  outlines.forEach(o => {
    const x0 = Math.max(0, Math.floor((o.minX - rect.x) / unitsPerPx));
    const x1 = Math.min(w - 1, Math.ceil((o.maxX - rect.x) / unitsPerPx));
    const y0 = Math.max(0, Math.floor((o.minY - rect.y) / (rect.height / h)));
    const y1 = Math.min(h - 1, Math.ceil((o.maxY - rect.y) / (rect.height / h)));
    for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) {
      if (pointInPolygonXY(toPlan(x + 0.5, y + 0.5), o.pts)) excludeMask[y * w + x] = 1;
    }
  });
  const exclude = (x: number, y: number) => excludeMask[y * w + x] === 1;

  const foundTrees = detectTrees(data, { metersPerPx: mpp, exclude, maxTrees: 150 });
  const foundCars = detectVehicles(data, { metersPerPx: mpp, exclude, maxVehicles: 40 });

  const trees = foundTrees.map(t => {
    const p = toPlan(t.x, t.y);
    const radius = Math.max(4, Math.min(30, t.radiusPx * mpp * FT_PER_M)) * unitsPerFoot;
    const item = createItem("tree", p.x, p.y, { unitsPerFoot, treeType: "deciduous" }) as TreeItem;
    // Height in proportion to the crown (a 30 ft wide crown is a ~40 ft tree).
    return { ...item, radius, height: Math.max(12 * unitsPerFoot, Math.min(80 * unitsPerFoot, radius * 2.6)), importSource: "photo" as const };
  });
  const vehicles = foundCars
    .map(c => {
      const p = toPlan(c.x, c.y);
      const item = createItem("parking", p.x, p.y, { unitsPerFoot, vehicleType: c.lengthPx * mpp > 5.3 ? "suv" : "sedan" }) as ParkingItem;
      return { ...item, rotation: (((c.angleDeg - 90) % 360) + 360) % 360, importSource: "photo" as const };
    })
    // A "car" under a tree crown is more likely a shadow.
    .filter(v => !trees.some(t => Math.hypot(t.x - v.x, t.y - v.y) < t.radius));
  return { trees, vehicles };
};
