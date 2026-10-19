// Real camera models (UniFi Protect, Reolink, Ring, ...) with their lens, resolution and night
// vision, so a planned camera matches the one on the wall. The list ships with the app and is also
// fetched from the site at start-up (public/cameras.json), which a weekly job refreshes from
// Ubiquiti's tech specs, so new models appear without a new app version.
import bundled from "../data/cameras.json";

export type CameraModel = {
  id: string;
  brand: string;
  name: string;
  line?: string;
  form: "bullet" | "turret" | "dome" | "flex" | "instant" | "ptz" | "360";
  resolutionWidth: number;
  aspect: number;
  /** Horizontal field of view, degrees (at the widest, for zoom lenses). */
  hFov: number;
  /** Horizontal field of view fully zoomed in (zoom lenses). */
  hFovTele?: number;
  irRangeFt: number;
  /** Figures worked out from the lens or taken from resellers, not the maker's sheet. */
  approx?: boolean;
  url?: string;
};
export type CameraCatalog = { updated: string; models: CameraModel[] };

let catalog: CameraCatalog = bundled as CameraCatalog;
const listeners = new Set<() => void>();

export const getCatalog = () => catalog;
export const onCatalogChange = (fn: () => void) => { listeners.add(fn); return () => { listeners.delete(fn); }; };
export const findModel = (id?: string) => (id ? catalog.models.find(m => m.id === id) : undefined);

/** Fetch the latest list from the site (falls back to the one built in). */
export const loadCatalog = async () => {
  try {
    const res = await fetch("cameras.json", { cache: "no-cache" });
    if (!res.ok) return;
    const next = (await res.json()) as CameraCatalog;
    if (!Array.isArray(next.models) || !next.models.length) return;
    // Keep any model only the built-in list has (a model never disappears from saved plans)
    const ids = new Set(next.models.map(m => m.id));
    catalog = { updated: next.updated, models: [...next.models, ...bundled.models.filter(m => !ids.has(m.id))] as CameraModel[] };
    listeners.forEach(fn => fn());
  } catch {
    /* offline: keep the built-in list */
  }
};

/** Field of view at a zoom position (0 = widest, 1 = fully zoomed), even in focal length. */
export const zoomedHFov = (m: CameraModel, zoom = 0) => {
  if (!m.hFovTele) return m.hFov;
  const f = (h: number) => 1 / Math.tan(((h * Math.PI) / 180) / 2);
  const focal = f(m.hFov) + (f(m.hFovTele) - f(m.hFov)) * Math.max(0, Math.min(1, zoom));
  return (2 * Math.atan(1 / focal) * 180) / Math.PI;
};

/** Brands in the order shown, each with its models. */
export const catalogByBrand = (c: CameraCatalog = catalog) => {
  const map = new Map<string, CameraModel[]>();
  for (const m of c.models) map.set(m.brand, [...(map.get(m.brand) ?? []), m]);
  return [...map.entries()];
};
