// Smoke test for the static export. Runs after `next build` (see "test" in package.json).
//
// Checks the built site the way a visitor and Google would hit it:
//   - every internal href/src on every page resolves to a real file in out/ (exact case,
//     so a link that works on Windows but 404s on Netlify's Linux CDN is caught here)
//   - same-page anchors point at an element that exists
//   - every sitemap URL is a page, and every sitemap page has a title, one H1 and a canonical
//   - robots.txt points at the sitemap, _redirects still carries the old-domain 301s
//   - JSON-LD blocks parse, and any site URL inside them resolves
//   - no NEXT_PUBLIC_ variable was left unset at build time (the name would be shipped raw)
//
// Exit code 1 with a list of failures, 0 when clean. No dependencies, no network.

import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const OUT = 'out';
const SITE = 'https://mrgmarketing.com.au';
const failures = [];
const fail = (msg) => failures.push(msg);

if (!existsSync(join(OUT, 'index.html'))) {
  console.error('out/index.html is missing. Run `npm run build` first (npm test does this for you).');
  process.exit(1);
}

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) walk(p, acc);
    else acc.push(p);
  }
  return acc;
}

const toUrl = (file) => '/' + relative(OUT, file).split(sep).join('/');
const files = walk(OUT);
const fileSet = new Set(files.map(toUrl));
const pages = files.filter((f) => f.endsWith('.html'));

// Exact-case lookup: "/book/" -> /book/index.html, "/favicon.ico" -> itself, "/x" -> /x.html or /x/index.html
function resolves(path) {
  const clean = decodeURIComponent(path.split(/[?#]/)[0]);
  return (
    fileSet.has(clean) ||
    fileSet.has(clean.replace(/\/?$/, '/index.html')) ||
    fileSet.has(clean.replace(/\/$/, '') + '.html')
  );
}

// Turn an attribute value into a site-relative path, or null if it is external / not a URL
function internalPath(raw) {
  let ref = raw.trim();
  if (!ref) return null;
  if (ref.startsWith(SITE)) ref = ref.slice(SITE.length) || '/';
  if (!ref.startsWith('/') || ref.startsWith('//')) return null;
  return ref;
}

let refsChecked = 0;

// 1. Links, images, scripts, styles, canonical and Open Graph URLs on every page
for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  const url = toUrl(page);
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));

  for (const [, raw] of html.matchAll(/\b(?:href|src|content|poster)="([^"]*)"/g)) {
    if (raw.startsWith('#')) {
      refsChecked++;
      if (raw.length > 1 && !ids.has(raw.slice(1))) fail(`${url}: anchor ${raw} has no matching id on the page`);
      continue;
    }
    const path = internalPath(raw);
    if (!path) continue;
    refsChecked++;
    if (!resolves(path)) fail(`${url}: ${path} does not resolve to a file in out/`);
  }

  // JSON-LD must parse, and any site URL inside it must exist
  for (const [, body] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    let data;
    try {
      data = JSON.parse(body);
    } catch {
      fail(`${url}: a JSON-LD block does not parse as JSON`);
      continue;
    }
    const strings = [];
    (function collect(v) {
      if (typeof v === 'string') strings.push(v);
      else if (v && typeof v === 'object') Object.values(v).forEach(collect);
    })(data);
    for (const s of strings) {
      const path = internalPath(s);
      if (path && !path.includes('#') && !resolves(path)) fail(`${url}: JSON-LD points at ${path}, which does not exist`);
    }
  }
}

// 2. Sitemap: every URL is a page with the basics Google needs
const sitemapFile = join(OUT, 'sitemap.xml');
if (!existsSync(sitemapFile)) {
  fail('out/sitemap.xml is missing');
} else {
  const locs = [...readFileSync(sitemapFile, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (locs.length === 0) fail('sitemap.xml has no <loc> entries');
  for (const loc of locs) {
    const path = internalPath(loc);
    if (!path) {
      fail(`sitemap.xml: ${loc} is not on ${SITE}`);
      continue;
    }
    if (!path.endsWith('/')) fail(`sitemap.xml: ${loc} should end with a slash (trailingSlash is on)`);
    if (!resolves(path)) {
      fail(`sitemap.xml: ${loc} has no page in out/`);
      continue;
    }
    const html = readFileSync(join(OUT, path, 'index.html'), 'utf8');
    if (!/<title>[^<]+<\/title>/.test(html)) fail(`${path}: no <title>`);
    const h1s = html.match(/<h1[\s>]/g) ?? [];
    if (h1s.length !== 1) fail(`${path}: ${h1s.length} <h1> elements, expected 1`);
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
    if (!canonical) fail(`${path}: no canonical link`);
    else if (canonical[1] !== loc) fail(`${path}: canonical is ${canonical[1]}, sitemap says ${loc}`);
  }
  console.log(`sitemap: ${locs.length} URLs checked`);
}

// 3. robots.txt and the old-domain redirects
const robots = existsSync(join(OUT, 'robots.txt')) ? readFileSync(join(OUT, 'robots.txt'), 'utf8') : '';
if (!robots.includes(`Sitemap: ${SITE}/sitemap.xml`)) fail('robots.txt does not point at the sitemap');
const redirects = existsSync(join(OUT, '_redirects')) ? readFileSync(join(OUT, '_redirects'), 'utf8') : '';
if (!redirects.includes('mitchellgiles.com')) fail('_redirects no longer carries the mitchellgiles.com 301s');

// 4. Build-time environment: a NEXT_PUBLIC_ name in the shipped JS means it was never set
for (const chunk of files.filter((f) => f.includes(`${sep}_next${sep}`) && f.endsWith('.js'))) {
  const hit = readFileSync(chunk, 'utf8').match(/env\.NEXT_PUBLIC_[A-Z0-9_]+/);
  if (hit) fail(`${toUrl(chunk)}: ${hit[0]} was not set when the site was built`);
}

console.log(`pages: ${pages.length}, internal references checked: ${refsChecked}`);
if (failures.length) {
  console.error(`\n${failures.length} problem${failures.length === 1 ? '' : 's'}:`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}
console.log('smoke test passed');
