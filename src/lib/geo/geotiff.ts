import proj4 from "proj4";


// --- Georeferenced GeoTIFF support (snap uploaded elevation files into place) ---

// Projection definitions for the CRSs US elevation downloads commonly use.
export const getProj4Definition = (epsg: number): { def: string; feet: boolean } | null => {
  const ncLcc = "+proj=lcc +lat_1=36.16666666666666 +lat_2=34.33333333333334 +lat_0=33.75 +lon_0=-79 +x_0=609601.22 +y_0=0 +ellps=GRS80 +no_defs";
  if (epsg === 4326 || epsg === 4269 || epsg === 4759 || epsg === 6318) return { def: "+proj=longlat +datum=WGS84 +no_defs", feet: false };
  if (epsg === 3857 || epsg === 900913) return { def: "+proj=merc +a=6378137 +b=6378137 +lat_ts=0 +lon_0=0 +x_0=0 +y_0=0 +k=1 +units=m +nadgrids=@null +no_defs", feet: false };
  if (epsg >= 26901 && epsg <= 26923) return { def: `+proj=utm +zone=${epsg - 26900} +datum=NAD83 +units=m +no_defs`, feet: false };
  if (epsg >= 32601 && epsg <= 32660) return { def: `+proj=utm +zone=${epsg - 32600} +datum=WGS84 +units=m +no_defs`, feet: false };
  if (epsg >= 6330 && epsg <= 6348) return { def: `+proj=utm +zone=${epsg - 6329} +ellps=GRS80 +units=m +no_defs`, feet: false };
  // North Carolina State Plane (meters / US survey feet), NAD83 / HARN / 2011
  if (epsg === 32119 || epsg === 3358 || epsg === 6542) return { def: `${ncLcc} +units=m`, feet: false };
  if (epsg === 2264 || epsg === 3359 || epsg === 6543) return { def: `${ncLcc} +units=us-ft`, feet: true };
  return null;
};

// Returns the lat/lon of the GeoTIFF's four corners (NW, NE, SE, SW) and whether its elevations are in feet.
export const getGeoTiffCorners = (image: any) => {
  const keys = image.getGeoKeys?.() ?? {};
  const epsg = keys.ProjectedCSTypeGeoKey && keys.ProjectedCSTypeGeoKey !== 32767
    ? keys.ProjectedCSTypeGeoKey
    : keys.GeographicTypeGeoKey;
  const proj = epsg ? getProj4Definition(epsg) : null;
  if (!proj) return null;
  const [minX, minY, maxX, maxY] = image.getBoundingBox();
  const toLatLon = (x: number, y: number) => {
    const [lon, lat] = proj4(proj.def, "+proj=longlat +datum=WGS84 +no_defs", [x, y]);
    return { lat, lon };
  };
  const verticalUnits = keys.VerticalUnitsGeoKey;
  const elevationInFeet = verticalUnits === 9002 || verticalUnits === 9003 || (verticalUnits === undefined && proj.feet);
  return {
    corners: [toLatLon(minX, maxY), toLatLon(maxX, maxY), toLatLon(maxX, minY), toLatLon(minX, minY)],
    elevationInFeet,
    epsg,
    projDef: proj.def,
    bbox: [minX, minY, maxX, maxY] as [number, number, number, number]
  };
};
