# REQ-KG-LEGAL-ACCESS-20260710 — Zentrale Rechtstexte aus dem KG beziehen

## Target System
`SYS:KUEPER:thomas-kueper`

## Origin
`SYS:KUEPER:knowledge-graph`

## Status
Done (Teilumsetzung)

## Priority
High vor öffentlicher Freigabe

## Zweck
Die Autorenseite rendert zentrale Rechtstexte aus dem Knowledge Graph. Verantwortlichen-Daten und Rechtstexte dürfen nicht als lokale zweite Wahrheit gepflegt werden.

## Kanonische Quellen

- `exports/document-references-0.1.json`
- `registry/legal/impressum-master.json`
- `registry/legal/datenschutz.de.md`
- `registry/legal/terms.de.md`

Quelle: `thomaspeterkueper/kueper-knowledge-graph`

IDs:

- `DOC:KUE:LEGAL-IMPRINT-DE`
- `DOC:KUE:LEGAL-PRIVACY-DE`
- `DOC:KUE:LEGAL-TERMS-DE`

## Requested Change

1. Legal-Dokumente über die Document-Reference-Registry auflösen.
2. Die angegebenen Quelldateien build- oder serverseitig aus dem KG laden.
3. `{{ impressum.responsible.* }}` und `{{ impressum.updated }}` aus `impressum-master.json` auflösen.
4. Lokale Seiten für Impressum, Datenschutz und Nutzungsbedingungen rendern und im Footer verlinken.
5. Keine Client-seitige GitHub-/KG-Abfrage.
6. Keine lokalen inhaltlichen Forks der Rechtstexte. Technische Abweichungen als Request an den KG zurückmelden.
7. Bestätigen, dass Fonts lokal/self-hosted ausgeliefert werden, kein Analytics aktiv ist und die Site über Vercel statt GitHub Pages ausgeliefert wird; Abweichungen an den KG melden.
8. Privacy und Terms sind aktuell `draft_productive` und nicht juristisch freigegeben. Erst nach `released` als freigegebene Rechtstexte ausweisen.

## Temporärer Zugriff

Bis der öffentliche KG-Endpunkt verfügbar ist, beim Build aus dem öffentlichen KG-GitHub-Repository lesen. Source-Pfade stets aus der Registry beziehen; keine dauerhaften Textkopien anlegen.

## Akzeptanzkriterien

- KG bleibt Legal-SSOT.
- Verantwortlichen-Daten werden nicht dupliziert.
- Hosting-, Font- und Analytics-Status ist verifiziert.
- Keine Browser-Laufzeitabfrage an GitHub/KG.
- Footer-Links und Legal-Seiten funktionieren.
- Draft-/Release-Status wird respektiert.

## Created
2026-07-10

## Curator
T.P.K.


## Abschluss (2026-07-18) — Sofortkorrektur, volle KG-Anbindung noch offen

Bei der Prüfung fiel auf: die live Impressum-Seite und der sitesweite Footer
zeigten eine veraltete Adresse (Bogenstraße 15, 59486 Sundern) und E-Mail
(mail@thomas-kueper.de) statt der aktuellen, vom Owner bestätigten Daten.
Sofort korrigiert (Commits `152f91e`, `71cce5e`, `d5e8805`, `91ffcf3`):

- `src/pages/impressum.astro` (beide Vorkommen: TMG-Angaben und
  „Verantwortlich für den Inhalt")
- `src/layouts/BaseLayout.astro` (Footer-Kontaktlink, sitesweit)
- `README.md`

Neue Adresse: Mörfelder Landstraße 103, 60598 Frankfurt am Main.
Neue E-Mail: t.kueper@camaleo.de.

**Noch offen (ursprünglicher Auftragsumfang):** die vollständige,
build-/serverseitige Anbindung an die KG-Registry (`impressum-master.json`,
`registry/legal/*`) statt statischer Werte — analog zur bereits bei
`contracomology` umgesetzten `getLegalInfo()`-Anbindung mit KG-Fallback.
Das ist eine echte Implementierungsaufgabe, nicht Teil dieser Sofortkorrektur.
