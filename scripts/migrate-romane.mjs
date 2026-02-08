import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, 'src', 'pages', 'romane');
const OUT_DIR = path.join(ROOT, 'src', 'content', 'romane');

fs.mkdirSync(OUT_DIR, { recursive: true });

const read = (p) => fs.readFileSync(p, 'utf8');
const write = (p, s) => {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, s, 'utf8');
};

function extractFrontmatterObj(src) {
  const m = src.match(/export\s+const\s+frontmatter\s*=\s*\{([\s\S]*?)\}\s*;?/);
  if (!m) return {};
  const b = m[1];

  const getStr = (key) => {
    const mm = b.match(new RegExp(`${key}\\s*:\\s*"([^"]*)"`, 'm'));
    return mm ? mm[1] : undefined;
  };
  const getNum = (key) => {
    const mm = b.match(new RegExp(`${key}\\s*:\\s*(\\d+)`, 'm'));
    return mm ? Number(mm[1]) : undefined;
  };

  return {
    title: getStr('title'),
    genre: getStr('genre'),
    description: getStr('description'),
    status: getStr('status'),
    order: getNum('order'),
  };
}

function extractBody(src) {
  // 1) bevorzugt: main-content
  const m = src.match(/<div\s+class="main-content">([\s\S]*?)<\/div>\s*[\r\n\s]*<\/article>/m);
  if (m) return m[1].trim();

  // 2) fallback: article ohne footer
  const a = src.match(/<article[\s\S]*?>([\s\S]*?)<\/article>/m);
  if (!a) return '';
  let body = a[1];
  body = body.replace(/<footer[\s\S]*?<\/footer>/m, '');
  return body.trim();
}

function yaml(front, slug) {
  const lines = [];
  const push = (k, v) => {
    if (v === undefined || v === null || v === '') return;
    if (typeof v === 'number') lines.push(`${k}: ${v}`);
    else lines.push(`${k}: ${JSON.stringify(v)}`);
  };

  push('title', front.title ?? slug);
  push('genre', front.genre);
  push('description', front.description);
  push('status', front.status);
  push('order', front.order);
  push('cover', `/assets/romane/${slug}/cover.jpg`);
  lines.push(`tags: ["Roman"]`);

  return `---\n${lines.join('\n')}\n---\n`;
}

function migrate(slug) {
  const inFile = path.join(PAGES_DIR, slug, 'index.astro');
  if (!fs.existsSync(inFile)) return;

  const outFile = path.join(OUT_DIR, `${slug}.md`);
  if (fs.existsSync(outFile)) {
    console.log(`skip (exists): ${slug}`);
    return;
  }

  const src = read(inFile);
  const front = extractFrontmatterObj(src);
  const body = extractBody(src);

  const md = `${yaml(front, slug)}\n${body}\n`;
  write(outFile, md);
  console.log(`wrote: ${path.relative(ROOT, outFile)}`);
}

const slugs = fs
  .readdirSync(PAGES_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

for (const slug of slugs) migrate(slug);
