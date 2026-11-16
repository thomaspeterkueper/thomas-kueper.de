// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Mishkenaz-Vertiefung liegt auf mishkenaz.org (ECO-ARC-0009 §3, EXT-ECO-TKD-20260714-002).
// Die früheren Unterseiten leiten dorthin weiter, damit alte Links weiter funktionieren.
const mishkenazSubpages = ['grammatik', 'proto-mishkenaz', 'rueckuebersetzung', 'vektoren', 'woerterbuch'];

export default defineConfig({
  site: 'https://thomas-kueper.de',
  integrations: [sitemap()],
  redirects: Object.fromEntries(
    mishkenazSubpages.map((page) => [`/mishkenaz/${page}`, `https://mishkenaz.org/${page}/`]),
  ),
});
