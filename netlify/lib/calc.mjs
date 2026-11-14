// Shared code for the missed-calls calculator functions.
// Keys live in Netlify environment variables and never reach the browser:
//   DATAFORSEO_LOGIN, DATAFORSEO_PASSWORD  Google Maps results for the scan
//   CALC_SECRET                            any long random string, signs the session token
//   RESEND_API_KEY, CALC_EMAIL_FROM        emails the report (optional; without them the report is on screen only)
//   CALC_NOTIFY_TO                         optional copy of each report to Mitchell
//   CALC_DEMO=1                            local testing only: sample data, clearly labelled on the page
import { createHmac, timingSafeEqual } from 'node:crypto';

export const GRID = 5; // 5 x 5 scan points
const SPACING_KM = 1.5; // so the grid reaches 3 km each way from the business
const TOKEN_TTL_MS = 30 * 60 * 1000;
const DFS_URL = 'https://api.dataforseo.com/v3/serp/google/maps/live/advanced';

export const demo = () => process.env.CALC_DEMO === '1';
export const configured = () => demo() || Boolean(process.env.DATAFORSEO_LOGIN && process.env.DATAFORSEO_PASSWORD && process.env.CALC_SECRET);

export const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });

export async function readBody(req) {
  if (req.method !== 'POST') return null;
  try {
    const text = await req.text();
    if (text.length > 20000) return null;
    return JSON.parse(text);
  } catch {
    return null;
  }
}

export const clean = (v, max) => String(v ?? '').replace(/[\u0000-\u001f<>]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);

// ---- signed session token: proves the scan and the email belong to a business the visitor looked up ----
const secret = () => (demo() ? 'demo-secret' : process.env.CALC_SECRET);
const mac = (payload) => createHmac('sha256', secret()).update(payload).digest('base64url');

function sign(data) {
  const payload = Buffer.from(JSON.stringify({ ...data, exp: Date.now() + TOKEN_TTL_MS })).toString('base64url');
  return `${payload}.${mac(payload)}`;
}

export function verify(token) {
  const [payload, sig] = String(token ?? '').split('.');
  if (!payload || !sig) return null;
  const want = Buffer.from(mac(payload));
  const got = Buffer.from(sig);
  if (want.length !== got.length || !timingSafeEqual(want, got)) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString());
    return data.exp > Date.now() ? data : null;
  } catch {
    return null;
  }
}

// ---- grid ----
function gridPoint(lat, lng, row, col) {
  const half = (GRID - 1) / 2;
  const dLat = SPACING_KM / 111.32;
  const dLng = SPACING_KM / (111.32 * Math.cos((lat * Math.PI) / 180));
  return { lat: lat + (half - row) * dLat, lng: lng + (col - half) * dLng };
}

// ---- Google Maps results, via DataForSEO ----
async function mapsSearch(task, timeoutMs = 20000) {
  const auth = Buffer.from(`${process.env.DATAFORSEO_LOGIN}:${process.env.DATAFORSEO_PASSWORD}`).toString('base64');
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const r = await fetch(DFS_URL, {
      method: 'POST',
      headers: { authorization: `Basic ${auth}`, 'content-type': 'application/json' },
      body: JSON.stringify([{ language_code: 'en', depth: 20, ...task }]),
      signal: ctrl.signal,
    });
    if (!r.ok) throw new Error(`maps ${r.status}`);
    const data = await r.json();
    const t = data.tasks?.[0];
    if (!t || t.status_code !== 20000) throw new Error(`maps task ${t?.status_code} ${t?.status_message}`);
    return (t.result?.[0]?.items ?? []).filter((i) => i.type === 'maps_search');
  } finally {
    clearTimeout(timer);
  }
}

const listing = (i) => ({
  title: clean(i.title, 80),
  address: clean(i.address, 120),
  placeId: i.place_id ?? null,
  cid: i.cid ? String(i.cid) : null,
  lat: i.latitude ?? null,
  lng: i.longitude ?? null,
  rating: i.rating?.value ?? null,
  reviews: i.rating?.votes_count ?? null,
  category: clean(i.category, 60),
});

/** Up to 5 listings matching a business name and suburb, each with a token for the scan. */
export async function findBusiness(name, suburb) {
  const items = demo()
    ? demoCandidates(name, suburb)
    : (await mapsSearch({ keyword: `${name} ${suburb}`, location_code: 2036, depth: 10 })).map(listing);
  return items
    .filter((c) => c.lat != null && c.lng != null && (c.placeId || c.cid))
    .slice(0, 5)
    .map((c) => ({
      title: c.title,
      address: c.address,
      category: c.category,
      rating: c.rating,
      reviews: c.reviews,
      token: sign({ p: c.placeId, c: c.cid, n: c.title, la: c.lat, ln: c.lng, r: c.rating, v: c.reviews }),
    }));
}

const norm = (s) => String(s ?? '').toLowerCase().replace(/[^a-z0-9]/g, '');

export const CENTRE = (GRID * GRID - 1) / 2; // the point on the business's own address

/** One point of the grid: the business's rank there and the three listings on top. */
export async function scanPoint(biz, keyword, cell) {
  const row = Math.floor(cell / GRID);
  const col = cell % GRID;
  const pt = gridPoint(biz.la, biz.ln, row, col);
  try {
    const items = demo()
      ? demoResults(biz, keyword, row, col)
      : // 8.5 seconds, so a slow answer fails this one point instead of the whole function
        (await mapsSearch({ keyword, location_coordinate: `${pt.lat.toFixed(6)},${pt.lng.toFixed(6)},15z` }, 8500)).map((i, idx) => ({ ...listing(i), rank: i.rank_group ?? idx + 1 }));
    const mine = items.find((i) => (biz.p && i.placeId === biz.p) || (biz.c && i.cid === biz.c)) ?? items.find((i) => norm(i.title) === norm(biz.n));
    return {
      row,
      col,
      rank: mine ? mine.rank : null, // null = not in the first 20 results
      top: items.slice(0, 3).map((i) => ({ title: i.title, rating: i.rating, reviews: i.reviews, me: i === mine })),
    };
  } catch (e) {
    console.error('calc-scan point', cell, e?.name === 'AbortError' ? 'timeout' : e?.message);
    return { row, col, rank: null, top: [], failed: true };
  }
}

// ---- sample data, for local testing only (CALC_DEMO=1) ----
function demoCandidates(name, suburb) {
  const n = clean(name, 60) || 'Sample Business';
  const s = clean(suburb, 40) || 'Ormeau';
  return [
    { title: n, address: `12 Sample St, ${s} QLD`, placeId: 'demo-1', cid: '1', lat: -27.7679, lng: 153.2643, rating: 4.6, reviews: 34, category: 'Local service' },
    { title: `${n} & Co`, address: `3 Example Rd, ${s} QLD`, placeId: 'demo-2', cid: '2', lat: -27.78, lng: 153.25, rating: 4.9, reviews: 12, category: 'Local service' },
  ];
}

function demoResults(biz, keyword, row, col) {
  const rivals = [
    { title: 'Sample Rival One', rating: 4.9, reviews: 212, placeId: 'r1', cid: 'r1' },
    { title: 'Sample Rival Two', rating: 4.8, reviews: 148, placeId: 'r2', cid: 'r2' },
    { title: 'Sample Rival Three', rating: 4.7, reviews: 96, placeId: 'r3', cid: 'r3' },
    { title: 'Sample Rival Four', rating: 4.5, reviews: 61, placeId: 'r4', cid: 'r4' },
  ];
  const half = (GRID - 1) / 2;
  const dist = Math.hypot(row - half, col - half);
  const myRank = Math.round(2 + dist * 4 + ((row * 3 + col * 5) % 3)); // near the top at home, buried a few streets out
  const list = [];
  let r = 0;
  for (let rank = 1; rank <= 20; rank++) {
    if (rank === myRank) list.push({ title: biz.n, rating: biz.r, reviews: biz.v, placeId: biz.p, cid: biz.c, rank });
    else {
      const base = rivals[(r + row + col) % rivals.length];
      list.push(r < rivals.length ? { ...rivals[(r + (row + col) % 2) % rivals.length], rank } : { ...base, title: `Sample Listing ${rank}`, placeId: `x${rank}`, cid: `x${rank}`, rank });
      r++;
    }
  }
  return list;
}
