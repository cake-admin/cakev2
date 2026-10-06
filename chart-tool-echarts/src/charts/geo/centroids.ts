import world from './world.json';
import { CONTINENT_BY_COUNTRY, CONTINENT_NAMES, type ContinentName } from './regionNames';

type Ring = number[][];
type Geom =
  | { type: 'Polygon'; coordinates: Ring[] }
  | { type: 'MultiPolygon'; coordinates: Ring[][] };

function ringArea(ring: Ring): number {
  if (!ring?.length) return 0;
  let a = 0;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    a += ring[j][0] * ring[i][1] - ring[i][0] * ring[j][1];
  }
  return a / 2;
}

function ringCentroid(ring: Ring): [number, number] | null {
  if (!ring?.length) return null;
  let x = 0;
  let y = 0;
  let a = 0;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const f = ring[j][0] * ring[i][1] - ring[i][0] * ring[j][1];
    x += (ring[j][0] + ring[i][0]) * f;
    y += (ring[j][1] + ring[i][1]) * f;
    a += f;
  }
  a *= 0.5;
  if (Math.abs(a) < 1e-12) {
    const lon = ring.reduce((s, p) => s + p[0], 0) / ring.length;
    const lat = ring.reduce((s, p) => s + p[1], 0) / ring.length;
    return [lon, lat];
  }
  return [x / (6 * a), y / (6 * a)];
}

/** Largest-ring centroid for a country polygon (good enough for callout anchors). */
function geomCentroid(geom: Geom | null | undefined): [number, number] | null {
  if (!geom || (geom.type !== 'Polygon' && geom.type !== 'MultiPolygon')) return null;
  if (geom.type === 'Polygon') return ringCentroid(geom.coordinates?.[0]);
  let best: Ring | null = null;
  let bestAbs = -1;
  for (const poly of geom.coordinates ?? []) {
    const outer = poly?.[0];
    if (!outer?.length) continue;
    const abs = Math.abs(ringArea(outer));
    if (abs > bestAbs) {
      best = outer;
      bestAbs = abs;
    }
  }
  return best ? ringCentroid(best) : null;
}

const countryCentroids = new Map<string, [number, number]>();
for (const f of world.features as Array<{ properties: { name: string }; geometry: Geom }>) {
  const c = geomCentroid(f.geometry);
  if (!c || !f.properties?.name) continue;
  countryCentroids.set(f.properties.name, c);
}

/** Approximate continent label anchors (lon/lat). */
const CONTINENT_CENTROIDS: Record<ContinentName, [number, number]> = {
  Africa: [20, 5],
  Asia: [90, 40],
  Europe: [15, 50],
  'North America': [-100, 45],
  'South America': [-60, -15],
  Oceania: [140, -25],
};

export function centroidForRegion(name: string, grain: 'country' | 'continent'): [number, number] | null {
  if (grain === 'continent') {
    if ((CONTINENT_NAMES as readonly string[]).includes(name)) {
      return CONTINENT_CENTROIDS[name as ContinentName];
    }
    return null;
  }
  return countryCentroids.get(name) ?? null;
}

/** Expand continent slices into per-country rows for map coloring. */
export function expandContinentData(
  slices: Array<{ label: string; value: number }>,
): Array<{ name: string; value: number; continent: string }> {
  const byCont = new Map(slices.map((s) => [s.label, s.value]));
  const out: Array<{ name: string; value: number; continent: string }> = [];
  for (const [country, continent] of Object.entries(CONTINENT_BY_COUNTRY)) {
    const value = byCont.get(continent);
    if (value == null) continue;
    out.push({ name: country, value, continent });
  }
  return out;
}

export { CONTINENT_CENTROIDS };
