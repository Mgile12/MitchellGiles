// Step 1 of the calculator: find the visitor's Google listing by name and suburb.
import { clean, configured, demo, findBusiness, json, readBody } from '../lib/calc.mjs';
import { allowFind, clientIp, humanCheck } from '../lib/guard.mjs';

export default async (req, context) => {
  if (!configured()) return json({ error: 'not_configured' }, 503);
  const body = await readBody(req);
  if (!body || body.website) return json({ error: 'bad_request' }, 400); // "website" is the honeypot
  const name = clean(body.name, 80);
  const suburb = clean(body.suburb, 60);
  if (name.length < 2 || suburb.length < 2) return json({ error: 'missing' }, 400);
  const ip = clientIp(req, context);
  if (!(await humanCheck(body.human, ip))) return json({ error: 'bot' }, 403);
  if (!(await allowFind(ip))) return json({ error: 'rate_limited' }, 429);
  try {
    return json({ candidates: await findBusiness(name, suburb), demo: demo() });
  } catch (e) {
    console.error('calc-find', e);
    return json({ error: 'lookup_failed' }, 502);
  }
};
