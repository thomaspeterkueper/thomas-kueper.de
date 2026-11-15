# Resonanzethik-Essaytrilogie – Website-Entwurfsintegration

**15.11.2026 – Draft-PR, nicht zur Veröffentlichung.**

## Dateien
- `src/content/texte/die-tuecken-der-resonanz.md` – Teil II · Die Grenze
- `src/content/texte/jenseits-des-mitgefuehls.md` – Teil III · Die Struktur

**Teil I** `src/content/texte/vom-mut-mitzuleiden.md` bleibt unverändert.

## Technischer Schutz vor Veröffentlichung
In beiden neuen Texten ist `draft: true` gesetzt. Die bestehende Route `src/pages/texte/[...slug].astro` und der Hub `src/pages/texte/index.astro` filtern `!data.draft`. Damit entstehen in der Standardkonfiguration keine öffentlichen Einzelseiten; die Textübersicht verlinkt sie nicht. Dieses Verhalten gilt auch für einen gewöhnlichen Produktionsbuild des Branches.

**Wichtig:** Ein Draft-PR allein ist keine Zugangssperre für die Inhalte auf GitHub. Die Quelltexte sind im Repository sichtbar, aber nicht über die regulären Website-Routen publiziert. Für eine echte Seitenvorschau muss ein gesonderter, kontrollierter Preview-Mechanismus eingerichtet werden oder der `draft`-Status in einem ausdrücklich dazu bestimmten, isolierten Preview-Build aufgehoben werden. Hier wird keine öffentliche Vorschau-URL behauptet.

## Vor Freigabe
1. Bibliografische Endprüfung der Quellen in [Resonanzethik PR #3](https://github.com/thomaspeterkueper/resonanceethics.org/pull/3).
2. Redaktioneller Vergleich der beiden Dateien gegen die freigegebenen Fassungen von RESETH.
3. Layoutkontrolle und Build in einer sicheren Testumgebung; dieses GitHub-Patch allein stellt **keinen bestandenen Build-Test** dar.
4. Für Veröffentlichung `draft: false` auf beiden Dateien setzen. Erst dann interne Trilogie-Verweise auf Teil I ↔ II ↔ III ergänzen, damit es keine toten Links gibt.
5. Nach Autorfreigabe und Buildprüfung den Website-PR mergen; anschließend tatsächliche Veröffentlichung prüfen und Quellenlinks zurück in RESETH dokumentieren.

## Inhaltliche Grenzen
- Dieser PR ist für die Website-Einbindung gedacht, nicht für eine heimliche Revision des philosophischen Kanons.
- Die historisch bestehende *Trilogie der Antwortfähigkeit* und die fünfteilige Resonanzethik-Buchplanung sind separate Werke.
- Die beiden Fallbeispiele bleiben als Gedankenfälle kenntlich, nicht als dokumentierte reale Vorgänge.
