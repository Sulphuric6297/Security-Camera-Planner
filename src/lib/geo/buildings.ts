import { Type } from "lucide-react";
import { generateId } from "../../constants";
import { FEET_PER_METER, GeoBounds, fetchJson, latLonCentroid, pointInLatLonPolygon } from "./core";


export type OsmBuilding = { points: { lat: number; lon: number }[]; heightFt: number; label: string };

export const OVERPASS_ENDPOINTS = [
  "https://overpass-api.de/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter"
];

export const parseOsmLength = (value?: string) => {
  if (!value) return null;
  const num = parseFloat(value.replace(",", "."));
  if (!Number.isFinite(num) || num <= 0) return null;
  return /ft|'|feet/i.test(value) ? num : num * FEET_PER_METER;
};

export const estimateBuildingHeightFt = (tags: Record<string, string>) => {
  const explicit = parseOsmLength(tags.height) ?? parseOsmLength(tags["building:height"]);
  if (explicit) return Math.round(explicit);
  const levels = parseFloat(tags["building:levels"] ?? "");
  if (Number.isFinite(levels) && levels > 0) return Math.round(levels * 10 + 4);
  switch (tags.building) {
    case "garage": case "garages": case "shed": case "carport": case "hut": case "roof":
      return 10;
    case "apartments": case "hotel": case "office":
      return 36;
    case "commercial": case "retail": case "industrial": case "warehouse": case "school": case "church":
      return 24;
    default:
      return 18;
  }
};

// Building footprints from OpenStreetMap (free, no key). Coverage varies by area.
export const fetchOsmBuildings = async (bounds: GeoBounds): Promise<OsmBuilding[]> => {
  const bbox = `${bounds.south},${bounds.west},${bounds.north},${bounds.east}`;
  const query = `[out:json][timeout:25];(way["building"](${bbox});relation["building"]["type"="multipolygon"](${bbox}););out geom;`;
  let lastError: unknown = null;
  for (const endpoint of OVERPASS_ENDPOINTS) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `data=${encodeURIComponent(query)}`
      });
      if (!res.ok) throw new Error(`Overpass ${res.status}`);
      const json = await res.json();
      const buildings: OsmBuilding[] = [];
      (json.elements ?? []).forEach((el: any) => {
        const tags: Record<string, string> = el.tags ?? {};
        let geometry: { lat: number; lon: number }[] | undefined;
        if (el.type === "way") geometry = el.geometry;
        else if (el.type === "relation") geometry = el.members?.find((m: any) => m.role === "outer" && m.geometry)?.geometry;
        if (!geometry || geometry.length < 4) return;
        const points = geometry.slice();
        const first = points[0];
        const last = points[points.length - 1];
        if (first.lat === last.lat && first.lon === last.lon) points.pop();
        if (points.length < 3) return;
        const label = tags.name || [tags["addr:housenumber"], tags["addr:street"]].filter(Boolean).join(" ") || "";
        buildings.push({ points, heightFt: estimateBuildingHeightFt(tags), label });
      });
      return buildings;
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError instanceof Error ? lastError : new Error("Building lookup failed.");
};

// AI-detected building footprints for the whole US (FEMA / Oak Ridge National Lab "USA Structures").
// Used to guess buildings where OpenStreetMap has none; the user confirms which to keep.
export const USA_STRUCTURES_QUERY = "https://services2.arcgis.com/FiaPA4ga0iQKduv3/ArcGIS/rest/services/USA_Structures_View/FeatureServer/0/query";

export const fetchDetectedStructures = async (bounds: GeoBounds): Promise<OsmBuilding[]> => {
  const params = new URLSearchParams({
    where: "1=1",
    geometry: `${bounds.west},${bounds.south},${bounds.east},${bounds.north}`,
    geometryType: "esriGeometryEnvelope",
    inSR: "4326",
    spatialRel: "esriSpatialRelIntersects",
    outFields: "HEIGHT,OCC_CLS,PRIM_OCC",
    returnGeometry: "true",
    outSR: "4326",
    resultRecordCount: "1000",
    f: "geojson"
  });
  const json = await fetchJson(`${USA_STRUCTURES_QUERY}?${params.toString()}`, 15000);
  const buildings: OsmBuilding[] = [];
  (json.features ?? []).forEach((f: any) => {
    const geom = f.geometry;
    const ring: number[][] | undefined =
      geom?.type === "Polygon" ? geom.coordinates?.[0] : geom?.type === "MultiPolygon" ? geom.coordinates?.[0]?.[0] : undefined;
    if (!ring || ring.length < 4) return;
    const points = ring.map(([lon, lat]) => ({ lat, lon }));
    const first = points[0];
    const last = points[points.length - 1];
    if (first.lat === last.lat && first.lon === last.lon) points.pop();
    const heightM = Number(f.properties?.HEIGHT);
    const heightFt = Number.isFinite(heightM) && heightM > 1 && heightM < 200 ? Math.round(heightM * FEET_PER_METER) : 18;
    buildings.push({ points, heightFt, label: "" });
  });
  return buildings;
};

// A building found for the selected area, shown on the picker map for the user to keep or drop.
export type BuildingCandidate = OsmBuilding & { id: string; source: "osm" | "detected"; selected: boolean };

// Mapped (OpenStreetMap) buildings first; detected footprints fill in where nothing is mapped.
export const findBuildingCandidates = async (bounds: GeoBounds) => {
  const [osm, detected] = await Promise.all([
    fetchOsmBuildings(bounds).catch(err => { console.info("OpenStreetMap buildings unavailable", err); return null; }),
    fetchDetectedStructures(bounds).catch(err => { console.info("Detected structures unavailable", err); return null; })
  ]);
  const inArea = (b: OsmBuilding) => {
    const c = latLonCentroid(b.points);
    return c.lat >= bounds.south && c.lat <= bounds.north && c.lon >= bounds.west && c.lon <= bounds.east;
  };
  const candidates: BuildingCandidate[] = [];
  (osm ?? []).filter(inArea).forEach(b => candidates.push({ ...b, id: generateId(), source: "osm", selected: true }));
  (detected ?? []).filter(inArea).forEach(b => {
    const c = latLonCentroid(b.points);
    const duplicate = candidates.some(o => o.source === "osm" && pointInLatLonPolygon(c, o.points));
    if (!duplicate) candidates.push({ ...b, id: generateId(), source: "detected", selected: true });
  });
  return { candidates: candidates.slice(0, 600), osmOk: osm !== null, detectedOk: detected !== null };
};
