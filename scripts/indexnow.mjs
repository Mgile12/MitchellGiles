// Tell Bing (and the other IndexNow engines) which URLs changed.
//
//   npm run indexnow                      submits every URL in the live sitemap
//   npm run indexnow -- /areas/ormeau/    submits just the paths given
//
// Run it AFTER the Netlify publish is live: IndexNow verifies the key by fetching
// https://mrgmarketing.com.au/<key>.txt, which is the file in public/. The key is read
// from .indexnow-key (not committed) or the INDEXNOW_KEY environment variable.

import { readFileSync, existsSync } from 'node:fs';

const HOST = 'mrgmarketing.com.au';
const SITE = `https://${HOST}`;

const key = process.env.INDEXNOW_KEY ?? (existsSync('.indexnow-key') ? readFileSync('.indexnow-key', 'utf8').trim() : '');
if (!/^[a-f0-9]{32}$/.test(key)) {
  console.error('No IndexNow key. Put it in .indexnow-key or set INDEXNOW_KEY.');
  process.exit(1);
}

const keyCheck = await fetch(`${SITE}/${key}.txt`);
if (!keyCheck.ok || (await keyCheck.text()).trim() !== key) {
  console.error(`Key file ${SITE}/${key}.txt is not live yet. Publish first, then run this.`);
  process.exit(1);
}

let urls = process.argv.slice(2).map((p) => (p.startsWith('http') ? p : `${SITE}${p.startsWith('/') ? '' : '/'}${p}`));
if (urls.length === 0) {
  const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key, keyLocation: `${SITE}/${key}.txt`, urlList: urls }),
});

// 200 = processed, 202 = accepted (key will be validated shortly). Anything else is a problem.
console.log(`IndexNow ${res.status} for ${urls.length} URL${urls.length === 1 ? '' : 's'}`);
urls.forEach((u) => console.log('  ' + u));
if (res.status !== 200 && res.status !== 202) {
  console.error(await res.text());
  process.exit(1);
}
