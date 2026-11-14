// Step 2 of the calculator: scan one point of the grid. The page asks for each point separately,
// so every request stays well inside the function time limit and one slow point can't sink the scan.
import { CENTRE, GRID, clean, configured, json, readBody, scanPoint, verify } from '../lib/calc.mjs';
import { allowCell, clientIp, countScan, scanCounted } from '../lib/guard.mjs';

export default async (req, context) => {
  if (!configured()) return json({ error: 'not_configured' }, 503);
  const body = await readBody(req);
  const biz = body && verify(body.token);
  if (!biz) return json({ error: 'expired' }, 401);
  const keyword = clean(body.keyword, 60);
  const cell = Number(body.cell);
  if (keyword.length < 2 || !Number.isInteger(cell) || cell < 0 || cell >= GRID * GRID) return json({ error: 'bad_request' }, 400);
  const session = String(body.token).split('.')[1];
  // The page always asks for the centre point first. That's where the scan is counted against the limits,
  // and no other point is scanned until it has been.
  if (cell === CENTRE) {
    const ok = await countScan(clientIp(req, context), session);
    if (ok !== 'ok') return json({ error: ok }, 429);
  } else if (!(await scanCounted(session))) return json({ error: 'expired' }, 401);
  // Each point can be fetched twice per session (one retry), so a session can't be replayed for free scans
  if (!(await allowCell(session, cell))) return json({ error: 'expired' }, 401);
  return json({ point: await scanPoint(biz, keyword, cell) });
};
