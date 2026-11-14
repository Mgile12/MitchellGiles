// Step 2 of the calculator: scan one row of the grid. The page asks for each row separately,
// so every request stays short and the progress bar is real.
import { GRID, clean, configured, json, readBody, scanRow, verify } from '../lib/calc.mjs';

export default async (req) => {
  if (!configured()) return json({ error: 'not_configured' }, 503);
  const body = await readBody(req);
  const biz = body && verify(body.token);
  if (!biz) return json({ error: 'expired' }, 401);
  const keyword = clean(body.keyword, 60);
  const row = Number(body.row);
  if (keyword.length < 2 || !Number.isInteger(row) || row < 0 || row >= GRID) return json({ error: 'bad_request' }, 400);
  return json({ points: await scanRow(biz, keyword, row) });
};
