/**
 * Static endpoint: /data/organizations.json
 *
 * Serves the map dataset as JSON. Every organisation in it is fictional demo
 * data created for this site; no real company, person or location record.
 */
import type { APIRoute } from 'astro';
import { fetchOrganizationsData } from '@/lib/mapData';

export const prerender = true;

export const GET: APIRoute = async () => {
  const entries = await fetchOrganizationsData();
  return new Response(JSON.stringify(entries, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
