import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const routes = [
  {
    url: '/',
    file: 'index.html',
  },
  {
    url: '/case-studies/elite-football-agency',
    file: 'case-studies/elite-football-agency/index.html',
    meta: {
      title:
        'Elite Football Agency Case Study – $50k to $425k in 12 Months – Mitchell Giles Marketing',
      description:
        'How Mitchell Giles helped Elite Football Agency scale from $50k to $425k in 12 months through email marketing, paid ads, automation, and CRM systems on the Gold Coast.',
      canonical:
        'https://mitchellgiles.com.au/case-studies/elite-football-agency',
      ogTitle:
        'Elite Football Agency Case Study – Mitchell Giles Marketing',
      ogDescription:
        'From $50k to $425k in 12 months. See how Elite Football Agency transformed with the right marketing systems.',
    },
  },
];

function injectMeta(html, meta) {
  if (!meta) return html;

  if (meta.title) {
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`);
  }

  if (meta.description) {
    html = html.replace(
      /<meta name="description" content="[^"]*">/,
      `<meta name="description" content="${meta.description}">`
    );
  }

  if (meta.canonical) {
    html = html.replace(
      /<link rel="canonical" href="[^"]*">/,
      `<link rel="canonical" href="${meta.canonical}">`
    );
    html = html.replace(
      /<meta property="og:url" content="[^"]*">/,
      `<meta property="og:url" content="${meta.canonical}">`
    );
  }

  if (meta.ogTitle) {
    html = html.replace(
      /<meta property="og:title" content="[^"]*">/,
      `<meta property="og:title" content="${meta.ogTitle}">`
    );
    html = html.replace(
      /<meta name="twitter:title" content="[^"]*">/,
      `<meta name="twitter:title" content="${meta.ogTitle}">`
    );
  }

  if (meta.ogDescription) {
    html = html.replace(
      /<meta property="og:description" content="[^"]*">/,
      `<meta property="og:description" content="${meta.ogDescription}">`
    );
    html = html.replace(
      /<meta name="twitter:description" content="[^"]*">/,
      `<meta name="twitter:description" content="${meta.ogDescription}">`
    );
  }

  return html;
}

async function prerender() {
  const template = fs.readFileSync(
    path.resolve(__dirname, 'dist/client/index.html'),
    'utf-8'
  );

  const { render } = await import('./dist/server/entry-server.js');

  for (const route of routes) {
    const { html: appHtml } = render(route.url);

    let html = template.replace('<!--app-html-->', appHtml);
    html = injectMeta(html, route.meta);

    const outputPath = path.resolve(__dirname, 'dist/client', route.file);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, html);

    console.log(`Pre-rendered: ${route.url} -> ${route.file}`);
  }

  console.log('Pre-rendering complete.');
}

prerender().catch((err) => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
