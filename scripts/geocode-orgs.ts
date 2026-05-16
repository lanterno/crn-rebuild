#!/usr/bin/env bun
/**
 * One-off geocoder: enriches src/lib/geocode-cache.json with city-level
 * coordinates for every org in the Climate Robotics spreadsheet.
 *
 * Usage:
 *   bun run scripts/geocode-orgs.ts
 *
 * - Uses Nominatim (OSM) which is free and has no API key.
 * - Sleeps 1.1s between requests to respect their usage policy.
 * - Skips entries already in the cache; safe to re-run when the sheet grows.
 * - Cache key is `${name.toLowerCase()}|${country.toLowerCase()}`, matching
 *   `geocodeKey()` in src/lib/mapData.ts.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const SPREADSHEET_ID = '1rFJPB4g8d21JJkzxu9Ro668cL5H66HUIQCD0pNWwO74';
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=0`;

const __dirname = dirname(fileURLToPath(import.meta.url));
const CACHE_PATH = resolve(__dirname, '..', 'src', 'lib', 'geocode-cache.json');

const USER_AGENT = 'CRN-site-geocoder/1.0 (https://crn.elghareeb.space)';

type Coords = [number, number];

function geocodeKey(name: string, country: string): string {
  return `${name.trim().toLowerCase()}|${country.trim().toLowerCase()}`;
}

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

function parseCSV(csvText: string): Record<string, string>[] {
  const lines = csvText.split('\n');
  if (lines.length < 2) return [];
  const headers = parseCSVLine(lines[0] ?? '').map(h => h.trim());
  const results: Record<string, string>[] = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line?.trim()) continue;
    const values = parseCSVLine(line);
    const row: Record<string, string> = {};
    headers.forEach((header, index) => {
      row[header] = values[index] ?? '';
    });
    results.push(row);
  }
  return results;
}

async function geocodeNominatim(query: string): Promise<Coords | null> {
  const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(query)}`;
  const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT, Accept: 'application/json' } });
  if (!res.ok) {
    console.warn(`  ! Nominatim ${res.status} for "${query}"`);
    return null;
  }
  const data = (await res.json()) as Array<{ lat: string; lon: string }>;
  if (!data.length) return null;
  const lat = parseFloat(data[0]!.lat);
  const lon = parseFloat(data[0]!.lon);
  if (Number.isNaN(lat) || Number.isNaN(lon)) return null;
  return [lat, lon];
}

function loadCache(): Record<string, Coords> {
  try {
    return JSON.parse(readFileSync(CACHE_PATH, 'utf-8')) as Record<string, Coords>;
  } catch {
    return {};
  }
}

function saveCache(cache: Record<string, Coords>): void {
  const sorted: Record<string, Coords> = {};
  for (const key of Object.keys(cache).sort()) {
    sorted[key] = cache[key]!;
  }
  writeFileSync(CACHE_PATH, JSON.stringify(sorted, null, 2) + '\n');
}

function sleep(ms: number): Promise<void> {
  return new Promise(r => setTimeout(r, ms));
}

async function main() {
  console.log('Fetching spreadsheet…');
  const res = await fetch(CSV_URL, { redirect: 'follow' });
  if (!res.ok) throw new Error(`Sheet fetch failed: ${res.status}`);
  const rows = parseCSV(await res.text());

  const orgs = rows
    .map(r => ({
      name: (r['Startup/Company/Lab'] ?? r['Name'] ?? '').trim(),
      country: (r['Country HQ'] ?? '').trim(),
      website: (r['Website'] ?? '').trim(),
    }))
    .filter(o => o.name && o.country && o.name !== 'Startup/Company/Lab');

  const cache = loadCache();
  console.log(`${orgs.length} orgs in sheet · ${Object.keys(cache).length} already in cache`);

  let added = 0;
  let missed = 0;
  let i = 0;
  for (const org of orgs) {
    i++;
    const key = geocodeKey(org.name, org.country);
    if (cache[key]) continue;

    // Try the most specific query first, then back off.
    const queries = [
      `${org.name}, ${org.country}`,
      `${org.name} ${org.country}`,
    ];

    let coords: Coords | null = null;
    for (const q of queries) {
      try {
        coords = await geocodeNominatim(q);
      } catch (e) {
        console.warn(`  ! error on "${q}":`, (e as Error).message);
      }
      if (coords) break;
      await sleep(1100);
    }

    if (coords) {
      cache[key] = coords;
      added++;
      console.log(`  ✓ [${i}/${orgs.length}] ${org.name} → ${coords[0].toFixed(3)}, ${coords[1].toFixed(3)}`);
    } else {
      missed++;
      console.log(`  - [${i}/${orgs.length}] ${org.name} (${org.country}) — no result`);
    }

    // Save every 10 so a crash doesn't lose progress.
    if (added > 0 && added % 10 === 0) saveCache(cache);
    await sleep(1100);
  }

  saveCache(cache);
  console.log(`\nDone. Added ${added}, missed ${missed}. Total cached: ${Object.keys(cache).length}.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
