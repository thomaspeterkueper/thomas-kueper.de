# Thomas Peter Küper — Autoren-Website & digitales Archiv

Offizielles Repository der Autoren-Website von Thomas Peter Küper.

Die Website bündelt literarische Projekte, Universen, philosophische Texte und Archivmaterial. Sie ist als statische Astro-Site angelegt: schnell, wartbar, gut indexierbar und langfristig archivierbar.

## Inhaltliche Schwerpunkte

- **Romane und Erzählwelten** — unter anderem Baumeister, noχ¹ᐃ und Zereya.
- **Philosophie und Sachtexte** — OmniZedenz, Resonanz-Ethik und spekulative Theoriearbeit.
- **Texte und Archiv** — Fragmente, Essays, Notizen und langfristig gepflegte Projektseiten.
- **LLM-Index** — `public/llms.txt` als kuratierter Einstiegspunkt für KI-Systeme.

## Technische Basis

- Astro 5
- Statische Generierung
- Sitemap über `@astrojs/sitemap`
- Lokale Fonts
- Semantische HTML-Struktur

## Projektstruktur

```text
thomas-kueper.de/
├── src/
│   ├── assets/      # Bilder und lokale Medien
│   ├── layouts/     # Basis-Layouts
│   └── pages/       # Website-Routen
├── public/
│   ├── fonts/       # Lokal eingebundene Webfonts
│   ├── llms.txt     # KI-orientierter Inhaltsindex
│   └── robots.txt   # Crawler-Richtlinien
├── astro.config.mjs
└── package.json
```

## Entwicklung

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deployment

Die kanonische Website-Domain ist:

```text
https://thomas-kueper.de
```

Das Deployment kann über Vercel, Netlify oder einen anderen statischen Hoster erfolgen.

## Kontakt

mail@thomas-kueper.de
