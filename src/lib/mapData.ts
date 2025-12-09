/**
 * Build-time data fetching from Google Sheets for Climate Robotics Map
 */

import type { ClimateRoboticsEntry } from './types';

// Google Sheets public CSV export URL
const SPREADSHEET_ID = '1rFJPB4g8d21JJkzxu9Ro668cL5H66HUIQCD0pNWwO74';
const SHEET_GID = '0'; // Global Map sheet (gid=0 is the first sheet)
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=${SHEET_GID}`;

// Country to coordinates mapping (capital city or centroid)
const COUNTRY_COORDINATES: Record<string, [number, number]> = {
  // North America
  'US': [39.8283, -98.5795],
  'USA': [39.8283, -98.5795],
  'United States': [39.8283, -98.5795],
  'Canada': [56.1304, -106.3468],
  'Mexico': [23.6345, -102.5528],
  
  // Europe
  'UK': [55.3781, -3.4360],
  'United Kingdom': [55.3781, -3.4360],
  'Germany': [51.1657, 10.4515],
  'France': [46.2276, 2.2137],
  'Spain': [40.4637, -3.7492],
  'Italy': [41.8719, 12.5674],
  'Netherlands': [52.1326, 5.2913],
  'Belgium': [50.5039, 4.4699],
  'Switzerland': [46.8182, 8.2275],
  'Austria': [47.5162, 14.5501],
  'Sweden': [60.1282, 18.6435],
  'Norway': [60.4720, 8.4689],
  'Denmark': [56.2639, 9.5018],
  'Finland': [61.9241, 25.7482],
  'Poland': [51.9194, 19.1451],
  'Czech Republic': [49.8175, 15.4730],
  'Portugal': [39.3999, -8.2245],
  'Ireland': [53.1424, -7.6921],
  'Greece': [39.0742, 21.8243],
  'Hungary': [47.1625, 19.5033],
  'Romania': [45.9432, 24.9668],
  'Bulgaria': [42.7339, 25.4858],
  'Croatia': [45.1000, 15.2000],
  'Slovenia': [46.1512, 14.9955],
  'Slovakia': [48.6690, 19.6990],
  'Estonia': [58.5953, 25.0136],
  'Latvia': [56.8796, 24.6032],
  'Lithuania': [55.1694, 23.8813],
  'Luxembourg': [49.8153, 6.1296],
  'Iceland': [64.9631, -19.0208],
  'Serbia': [44.0165, 21.0059],
  'Ukraine': [48.3794, 31.1656],
  'Belarus': [53.7098, 27.9534],
  'Moldova': [47.4116, 28.3699],
  
  // Asia
  'China': [35.8617, 104.1954],
  'Japan': [36.2048, 138.2529],
  'South Korea': [35.9078, 127.7669],
  'Korea': [35.9078, 127.7669],
  'India': [20.5937, 78.9629],
  'Singapore': [1.3521, 103.8198],
  'Taiwan': [23.6978, 120.9605],
  'Hong Kong': [22.3193, 114.1694],
  'Israel': [31.0461, 34.8516],
  'UAE': [23.4241, 53.8478],
  'United Arab Emirates': [23.4241, 53.8478],
  'Saudi Arabia': [23.8859, 45.0792],
  'Qatar': [25.3548, 51.1839],
  'Thailand': [15.8700, 100.9925],
  'Vietnam': [14.0583, 108.2772],
  'Malaysia': [4.2105, 101.9758],
  'Indonesia': [-0.7893, 113.9213],
  'Philippines': [12.8797, 121.7740],
  'Pakistan': [30.3753, 69.3451],
  'Bangladesh': [23.6850, 90.3563],
  'Kazakhstan': [48.0196, 66.9237],
  'Turkey': [38.9637, 35.2433],
  'Iran': [32.4279, 53.6880],
  
  // Oceania
  'Australia': [-25.2744, 133.7751],
  'New Zealand': [-40.9006, 174.8860],
  
  // South America
  'Brazil': [-14.2350, -51.9253],
  'Argentina': [-38.4161, -63.6167],
  'Chile': [-35.6751, -71.5430],
  'Colombia': [4.5709, -74.2973],
  'Peru': [-9.1900, -75.0152],
  'Ecuador': [-1.8312, -78.1834],
  'Venezuela': [6.4238, -66.5897],
  'Uruguay': [-32.5228, -55.7658],
  'Paraguay': [-23.4425, -58.4438],
  'Bolivia': [-16.2902, -63.5887],
  
  // Africa
  'South Africa': [-30.5595, 22.9375],
  'Nigeria': [9.0820, 8.6753],
  'Kenya': [-0.0236, 37.9062],
  'Egypt': [26.8206, 30.8025],
  'Morocco': [31.7917, -7.0926],
  'Ethiopia': [9.1450, 40.4897],
  'Ghana': [7.9465, -1.0232],
  'Tanzania': [-6.3690, 34.8888],
  'Rwanda': [-1.9403, 29.8739],
  'Uganda': [1.3733, 32.2903],
  'Tunisia': [33.8869, 9.5375],
  'Algeria': [28.0339, 1.6596],
  'Senegal': [14.4974, -14.4524],
  'Côte d\'Ivoire': [7.5400, -5.5471],
  'Cameroon': [7.3697, 12.3547],
};

/**
 * Parse CSV string into array of objects
 */
function parseCSV(csvText: string): Record<string, string>[] {
  const lines = csvText.split('\n');
  if (lines.length < 2) return [];
  
  // Parse header row and handle duplicates by adding index suffix
  const rawHeaders = parseCSVLine(lines[0] ?? '');
  const headerCounts: Record<string, number> = {};
  const headers = rawHeaders.map(h => {
    const trimmed = h.trim();
    if (headerCounts[trimmed] !== undefined) {
      headerCounts[trimmed]++;
      return `${trimmed}_${headerCounts[trimmed]}`;
    }
    headerCounts[trimmed] = 0;
    return trimmed;
  });
  
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

/**
 * Parse a single CSV line handling quoted fields
 */
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

/**
 * Get coordinates for a country name
 */
function getCoordinates(country: string): [number, number] | null {
  if (!country) return null;
  
  // Try direct lookup
  const coords = COUNTRY_COORDINATES[country];
  if (coords) return coords;
  
  // Try case-insensitive lookup
  const normalizedCountry = country.trim();
  for (const [key, value] of Object.entries(COUNTRY_COORDINATES)) {
    if (key.toLowerCase() === normalizedCountry.toLowerCase()) {
      return value;
    }
  }
  
  return null;
}

/**
 * Generate a favicon URL from website domain
 * Uses multiple fallback services for better coverage
 */
function getFaviconUrl(website: string): string | null {
  if (!website) return null;
  
  try {
    const url = new URL(website.startsWith('http') ? website : `https://${website}`);
    // Use DuckDuckGo's favicon service - more reliable than Google's
    return `https://icons.duckduckgo.com/ip3/${url.hostname}.ico`;
  } catch {
    return null;
  }
}

/**
 * Transform raw CSV row into ClimateRoboticsEntry
 */
function transformRow(row: Record<string, string>, index: number): ClimateRoboticsEntry | null {
  const name = row['Startup/Company/Lab'] ?? row['Name'] ?? '';
  if (!name || name === 'Startup/Company/Lab') return null;
  
  const website = row['Website'] ?? '';
  const countryHQ = row['Country HQ'] ?? '';
  const coordinates = getCoordinates(countryHQ);
  
  // Skip entries without valid coordinates
  if (!coordinates) return null;
  
  const founded = parseInt(row['Founded'] ?? '', 10);
  
  // Handle deployment countries - column has trailing space in header
  const deploymentCountriesRaw = row['Deployment Countries'] ?? row['Deployment Countries '] ?? '';
  const deploymentCountries = deploymentCountriesRaw
    .split(',')
    .map(c => c.trim())
    .filter(Boolean);
  
  // The second "Robotics" column is the robotics type (Aerial Robot, Ground Robot, etc.)
  // After parseCSV, duplicate headers become "Robotics" and "Robotics_1"
  const roboticsType = row['Robotics_1'] || 'Other';
  
  return {
    id: `entry-${index}`,
    name: name.trim(),
    website,
    isRobotics: row['Robotics']?.toLowerCase() === 'yes',
    isDeployed: row['Deployed']?.toLowerCase() === 'yes',
    founded: isNaN(founded) ? null : founded,
    countryHQ,
    continentHQ: row['Continent HQ'] ?? '',
    deploymentCountries,
    roboticsType,
    mainApplication: row['Main Application'] ?? '',
    additionalApplication: row['Additional Application'] ?? '',
    adaptationMitigation: row['Adaptation / Mitigation'] ?? '',
    biomeType: row['Biome Type'] ?? '',
    description: row['Describe what the Robotics solutions does in one sentence.'] ?? '',
    linkedIn: row['LinkedIn Page'] ?? '',
    coordinates,
    logoUrl: getFaviconUrl(website),
  };
}

/**
 * Fetch and parse climate robotics data from Google Sheets
 */
export async function fetchClimateRoboticsData(): Promise<ClimateRoboticsEntry[]> {
  try {
    const response = await fetch(CSV_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch spreadsheet: ${response.status}`);
    }
    
    const csvText = await response.text();
    const rows = parseCSV(csvText);
    
    const entries = rows
      .map((row, index) => transformRow(row, index))
      .filter((entry): entry is ClimateRoboticsEntry => entry !== null);
    
    console.log(`Loaded ${entries.length} climate robotics entries`);
    return entries;
  } catch (error) {
    console.error('Error fetching climate robotics data:', error);
    return [];
  }
}

/**
 * Get unique values for a field (for filter dropdowns)
 */
export function getUniqueValues(entries: ClimateRoboticsEntry[], field: keyof ClimateRoboticsEntry): string[] {
  const values = new Set<string>();
  
  for (const entry of entries) {
    const value = entry[field];
    if (typeof value === 'string' && value.trim()) {
      values.add(value.trim());
    }
  }
  
  return Array.from(values).sort();
}

/**
 * Filter entries based on search and filter criteria
 */
export function filterEntries(
  entries: ClimateRoboticsEntry[],
  filters: {
    search?: string;
    continent?: string;
    roboticsType?: string;
    application?: string;
    biome?: string;
  }
): ClimateRoboticsEntry[] {
  return entries.filter(entry => {
    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const matchesSearch = 
        entry.name.toLowerCase().includes(searchLower) ||
        entry.description.toLowerCase().includes(searchLower) ||
        entry.countryHQ.toLowerCase().includes(searchLower);
      if (!matchesSearch) return false;
    }
    
    // Continent filter
    if (filters.continent && entry.continentHQ !== filters.continent) {
      return false;
    }
    
    // Robotics type filter
    if (filters.roboticsType && entry.roboticsType !== filters.roboticsType) {
      return false;
    }
    
    // Application filter
    if (filters.application && entry.mainApplication !== filters.application) {
      return false;
    }
    
    // Biome filter
    if (filters.biome && entry.biomeType !== filters.biome) {
      return false;
    }
    
    return true;
  });
}

