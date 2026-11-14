// Bot protection and spending limits for the calculator functions.
//
// 1. Cloudflare Turnstile on the first step, when TURNSTILE_SECRET_KEY is set.
// 2. Daily limits per visitor (by hashed IP) and per email address, kept in Netlify Blobs.
// 3. A daily cap on scans across the whole site, so the most anyone can cost you in a day is fixed.
// Limits can be changed with environment variables, without a code change.
import { createHash } from 'node:crypto';
import { getStore } from '@netlify/blobs';

const LIMITS = {
  findsPerIp: Number(process.env.CALC_FINDS_PER_IP ?? 10),
  scansPerIp: Number(process.env.CALC_SCANS_PER_IP ?? 3),
  scansPerDay: Number(process.env.CALC_SCANS_PER_DAY ?? 60),
  emailsPerIp: Number(process.env.CALC_EMAILS_PER_IP ?? 3),
};

// Netlify Blobs only exists on Netlify. Locally, counts are kept in memory so the limits can still be tested.
const memory = new Map();
let store;
function counters() {
  if (store !== undefined) return store;
  try {
    store = getStore({ name: 'calculator-limits', consistency: 'strong' });
  } catch {
    store = null;
  }
  return store;
}

async function read(key) {
  const s = counters();
  if (!s) return memory.get(key) ?? 0;
  try {
    return Number(await s.get(key)) || 0;
  } catch {
    store = null;
    return memory.get(key) ?? 0;
  }
}

async function write(key, value) {
  const s = counters();
  if (!s) return memory.set(key, value);
  try {
    await s.set(key, String(value));
  } catch {
    store = null;
    memory.set(key, value);
  }
}

// Australian date, so the limits reset at midnight on the Gold Coast
const today = () => new Date(Date.now() + 10 * 3600 * 1000).toISOString().slice(0, 10);
const hash = (s) => createHash('sha256').update(`${process.env.CALC_SECRET ?? 'local'}|${s}`).digest('hex').slice(0, 24);

export function clientIp(req, context) {
  return context?.ip ?? req.headers.get('x-nf-client-connection-ip') ?? req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';
}

/** Adds one to a daily counter. Returns false, and adds nothing, if the limit is already reached. */
async function take(name, id, limit) {
  const key = `${today()}/${name}/${hash(id)}`;
  const used = await read(key);
  if (used >= limit) return false;
  await write(key, used + 1);
  return true;
}

export const allowFind = (ip) => take('find', ip, LIMITS.findsPerIp);

/** A full scan is counted once, when its first row is asked for. Both limits are checked before either is counted. */
export async function allowScan(ip) {
  const siteKey = `${today()}/scan-site/${hash('all')}`;
  const ipKey = `${today()}/scan/${hash(ip)}`;
  const [site, mine] = await Promise.all([read(siteKey), read(ipKey)]);
  if (mine >= LIMITS.scansPerIp) return 'rate_limited';
  if (site >= LIMITS.scansPerDay) return 'busy';
  await Promise.all([write(siteKey, site + 1), write(ipKey, mine + 1)]);
  return 'ok';
}

/** Each row of a scan can be fetched once per session, so one session can't be replayed for free scans. */
export async function allowRow(sessionId, row) {
  return take(`row-${row}`, sessionId, 1);
}

export async function allowEmail(ip, email) {
  if (!(await take('email-to', email.toLowerCase(), 1))) return false;
  return take('email', ip, LIMITS.emailsPerIp);
}

/** Cloudflare Turnstile. Skipped (allowed) when no secret is set, so the calculator works before it's set up. */
export async function humanCheck(token, ip) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;
  try {
    const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: String(token).slice(0, 2048), remoteip: ip }),
    });
    const d = await r.json();
    return d.success === true;
  } catch {
    return false;
  }
}
