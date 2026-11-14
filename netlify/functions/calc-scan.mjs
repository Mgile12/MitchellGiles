// Step 2 of the calculator: scan one row of the grid. The page asks for each row separately,
// so every request stays short and the progress bar is real.
import { GRID, clean, configured, json, readBody, scanRow, verify } from '../lib/calc.mjs';
import { allowRow, allowScan, clientIp } from '../lib/guard.mjs';

export default async (req, context) => {
  if (!configured()) return json({ error: 'not_configured' }, 503);
  const body = await readBody(req);
  const biz = body && verify(body.token);
  if (!biz) return json({ error: 'expired' }, 401);
  const keyword = clean(body.keyword, 60);
  const row = Number(body.row);
  if (keyword.length < 2 || !Number.isInteger(row) || row < 0 || row >= GRID) return json({ error: 'bad_request' }, 400);
  // The scan is counted against the limits once, on its first row; every row works once per session
  if (row === 0) {
    const ok = await allowScan(clientIp(req, context));
    if (ok !== 'ok') return json({ error: ok }, 429);
  }
  if (!(await allowRow(String(body.token).split('.')[1], row))) return json({ error: 'expired' }, 401);
  return json({ points: await scanRow(biz, keyword, row) });
};
