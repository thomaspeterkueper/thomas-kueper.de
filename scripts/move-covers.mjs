import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const SRC = path.join(ROOT, 'src', 'pages', 'romane');
const DEST = path.join(ROOT, 'public', 'assets', 'romane');

function copyCover(slug) {
  const from = path.join(SRC, slug, 'cover.jpg');
  if (!fs.existsSync(from)) {
    console.log(`no cover: ${slug}`);
    return;
  }

  const toDir = path.join(DEST, slug);
  const to = path.join(toDir, 'cover.jpg');

  fs.mkdirSync(toDir, { recursive: true });
  fs.copyFileSync(from, to);

  console.log(`copied cover: ${slug}`);
}

const slugs = fs
  .readdirSync(SRC, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

for (const slug of slugs) {
  copyCover(slug);
}
