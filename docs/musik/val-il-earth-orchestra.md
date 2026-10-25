# Val-il – Earth Orchestra Version (Setup v0.1)

**Stand:** 25. Oktober 2026 – Entwurf
**Text:** `src/content/texte/val-il.md` (Auv-Breth / Deutsch)
**Gegenstück:** „Nichts ist verloren – Earth Orchestra Version“ (Lyria 3.0, SharePoint Büro → Musik/NOXIA) zu „Auv-Pa-il“

Dieses Setup übernimmt die Klangwelt der Earth-Orchestra-Fassung von „Nichts ist verloren“, damit beide Stücke als Diptychon hörbar zusammengehören. Die Form wird aber umgekehrt: Dort baut sich alles zur „Rückkehr zur Einheit“ auf und endet in langer Stille. Hier kehrt jedes Element verändert wieder, der Grundton selbst verschiebt sich, und das Stück endet offen.

## Leitprinzipien

1. **Spirale statt Kreis.** Das Werde-Motiv der deutschen Zeilen kehrt fünfmal wieder. Jedes Mal hat es einen Ton mehr und beginnt höher. Was vorher war, bleibt im Motiv enthalten – Rekursion mit Gedächtnis.
2. **Der Grund wird.** Die Tanpura beginnt auf C# (wie „Nichts ist verloren“). In der Brücke verschiebt sie sich auf A. Das alte C# verschwindet nicht – es wird zur Terz des neuen Grundes.
3. **Ta als Satztechnik.** Die beiden Solostimmen singen nie unisono. Wechselgesang, Kanon, gegenläufige Linien. Der Chor singt im Kanon, nicht im Einklang.
4. **Der Werde-Ton.** D# kommt in Teil A nicht vor. Er erklingt zum ersten Mal auf *Val-om* in der Brücke. Ab dann gehört er zur Skala.
5. **Kein Schluss.** Der letzte Ton ist die None über A, mit einem Meend aufwärts in Richtung C#, ohne dort anzukommen.

## Tonmaterial

| Teil | Grund (Tanpura) | Skala | Charakter |
|---|---|---|---|
| A – Intro bis Deutsch III | C# – G# | cis-Moll-Pentatonik: C# E F# G# B | die Klangwelt des ersten Lieds |
| Übergang – Brücke | C# → A | Pentatonik + A, dann + D# | der Grund verschiebt sich |
| B – Deutsch IV bis Schluss | A – E | A-Lydisch: A B C# D# E F# G# | enthält die ganze alte Pentatonik, erweitert um A und D# |

Das *-ath* in Strophe I (Sopran, *Saha-ath bi'ta-i*) liegt auf G – dem Tritonus über C#. Das ist der einzige Ton außerhalb der Skala in Teil A und markiert die Dissonanz der Stellungnahme. *Hinweis zur Vorlage:* Die Earth-Orchestra-Datei zu „Nichts ist verloren“ bezeichnet G als „None“; über C# ist G der Tritonus (bzw. die verminderte Quinte).

## Lyria-Setup

```json
{
  "version": "Lyria 3.0",
  "title": "Val-il – Earth Orchestra Version",
  "subtitle": "Ein Lied des Werdens für zwei Stimmen, Chor und Orchester",
  "composer": "Thomas Peter Küper",
  "poet": "Thomas Peter Küper",
  "language": "Mishkenaz (Auv-Breth) / Deutsch",
  "copyright": "Thomas Peter Küper 2026 – Lizenz vor Veröffentlichung festlegen",
  "companionPiece": "Nichts ist verloren – Earth Orchestra Version",
  "tempo": 76,
  "key": "cis-Moll-Pentatonik → A-Lydisch",
  "timeSignature": "4/4",
  "duration": "ca. 4:15 (80 Takte)",
  "mood": "offen, tragend, erdverbunden, im Aufbruch – Werden, nicht Rückkehr",

  "scale": {
    "partA": ["C#", "E", "F#", "G#", "B"],
    "partB": ["A", "B", "C#", "D#", "E", "F#", "G#"],
    "description": "Die alte Pentatonik bleibt vollständig erhalten und wird in Teil B zur Teilmenge von A-Lydisch. D# ist der Werde-Ton und erklingt zuerst auf 'Val-om'."
  },

  "instrumentation": {
    "tanpura": {
      "name": "Tanpura",
      "midiProgram": 92,
      "action": "Teil A: C# - G# - C# - E. Ab Brücke Zeile 5: A - E - A - C#",
      "level": "-18 dB",
      "notes": "Der Grund wird. Die Verschiebung geschieht nicht abrupt, sondern über zwei Takte, in denen beide Grundtöne gleichzeitig klingen."
    },
    "organ": {
      "name": "Dorforgel (trocken, mittel)",
      "midiProgram": 20,
      "stops": "Gedackt 8', Principal 4'",
      "action": "Deutsche Zeilen und Brücke",
      "level": "-16 dB",
      "reverb": "1.2 sec"
    },
    "stringsFull": {
      "name": "Full String Orchestra",
      "action": "Durchgehend. In Strophe III bleibt der Nachhall jedes Phrasenendes stehen (Res – was bleibt).",
      "sections": {
        "violins1": { "level": "-11 dB" },
        "violins2": { "level": "-12 dB" },
        "violas": { "level": "-12 dB" },
        "cellos": { "level": "-13 dB" },
        "basses": { "level": "-16 dB" }
      }
    },
    "brass": {
      "name": "Blech (Hörner + Trompeten + Posaunen)",
      "midiPrograms": { "horn": 60, "trumpet": 56, "trombone": 57 },
      "action": "Brücke ab Zeile 5 und Deutsch IV",
      "level": "-14 dB",
      "notes": "Aufbruch, nicht Ankunft. Kein Tutti-Schlussakkord – die Hörner halten die Quinte E, nicht den Grundton."
    },
    "timpani": {
      "name": "Pauken",
      "midiProgram": 47,
      "action": "Brücke Zeile 1: ein Schlag auf C#. Brücke Zeile 5 ('Val-om'): ein Schlag auf A. Deutsch IV: drei Schläge C# - A - E",
      "level": "-18 dB",
      "notes": "Der alte Grund, der neue Grund, die offene Quinte."
    },
    "harp": {
      "name": "Konzertharfe",
      "midiProgram": 46,
      "action": "Arpeggios in den Strophen; aufwärts gerichtete Glissandi nur in Teil B",
      "level": "-16 dB"
    },
    "glassHarmonica": {
      "name": "Glasharfe",
      "action": "Nur zwei Töne: G auf 'Saha-ath' (Strophe I, Sopran) und G auf 'Saha-ath' (Brücke Zeile 3, Tenor)",
      "level": "-20 dB",
      "notes": "Zitat aus 'Auv-Pa-il', wo die Glasharfe das '-ath' von 'wi-Tor-ath' trägt."
    },
    "tabla": {
      "name": "Tabla",
      "midiProgram": 117,
      "action": "Durchgehend, leichter Puls. In der Brücke aussetzend auf 'Ku-il' und 'Ra-il'.",
      "level": "-20 dB"
    },
    "djembe": {
      "name": "Djembe",
      "midiProgram": 117,
      "action": "Ab Deutsch IV: tiefer Schlag auf 1 und 3, in Strophe IV nur noch auf 1",
      "level": "-22 dB"
    },
    "bansuri": {
      "name": "Bansuri",
      "midiProgram": 73,
      "action": "Einwurf nach Deutsch I; Atemvers 'Auv ... Val ... îl'",
      "level": "-16 dB"
    },
    "sarangi": {
      "name": "Sarangi",
      "midiProgram": 41,
      "action": "Gegenstimme in Strophe III (Verlust), schweigt ab Brücke Zeile 5",
      "level": "-14 dB"
    },
    "oboe": {
      "name": "Oboe",
      "midiProgram": 68,
      "action": "Werde-Motiv instrumental zwischen Deutsch II und Strophe III; Gegenlinie in Deutsch IV",
      "level": "-13 dB"
    },
    "clarinet": {
      "name": "Klarinette",
      "midiProgram": 71,
      "action": "Tiefe Füllung; trägt in Strophe III den Ton, den die Sarangi verlässt",
      "level": "-15 dB"
    },
    "choir": {
      "name": "Gemischter Chor (kein 'Amen')",
      "midiProgram": 52,
      "action": "Nur in Deutsch IV: 'Nichts ist fertig. Alles wird.' als vierstimmiger Kanon (S - A - T - B, Einsatz alle 2 Schläge)",
      "level": "-14 dB",
      "notes": "KEIN Unisono, KEIN 'Amen', KEINE lateinischen Formeln. Der letzte Kanoneinsatz (Bass) reicht noch in den ersten Takt von Strophe IV hinein."
    },
    "voice1": {
      "name": "Tenor",
      "midiProgram": 53,
      "level": "-3 dB"
    },
    "voice2": {
      "name": "Sopran (mit Meend)",
      "midiProgram": 54,
      "level": "-6 dB"
    }
  },

  "melodies": {
    "strophe1_tenor": "C#3 G#3 | E3 F#3 | G#3 B3 | C#4",
    "strophe1_sopran_ath": "G4 F#4 | E4 (Zeile 3, zweite Hälfte)",
    "werdeMotiv_deutsch1": "C#4 E4 F#4 | E4 C#4",
    "werdeMotiv_deutsch2": "C#4 E4 F#4 G#4 | F#4 E4",
    "werdeMotiv_deutsch3": "E4 F#4 G#4 B4 | G#4 F#4",
    "werdeMotiv_deutsch4": "A4 B4 C#5 D#5 E5 | C#5 B4",
    "werdeMotiv_deutsch5": "C#5 E5 F#5 G#5 | B5",
    "bruecke_kanon": "E4 F#4 | G#4 B4 | G4 F#4 | E4 C#4 | D#5 E5 | B4 (Sopran führt, Tenor folgt einen Takt später)",
    "atemvers": "Auv: C#5 | Val: E5 | îl: B5, Meend aufwärts Richtung C#6, ohne anzukommen"
  },

  "vocalDuet": {
    "strophe1": "voice1, Zeile 3 Wechsel: voice1 'Saha-om' / voice2 'Saha-ath'; Zeile 4 beide gegenläufig",
    "deutsch1": "voice1",
    "strophe2": "voice2",
    "deutsch2": "voice1 + voice2 (Gegenbewegung, keine parallelen Terzen)",
    "strophe3": "voice2",
    "deutsch3": "voice1",
    "bruecke": "beide im Kanon; Zeile 3 Wechsel umgekehrt: voice1 'Saha-ath' / voice2 'Saha-il'",
    "deutsch4": "beide + Chor-Kanon (Höhepunkt)",
    "strophe4": "voice1",
    "deutsch5": "voice2 (allein)",
    "atemvers": "Bansuri, voice2 haucht 'îl' mit"
  },

  "structure": [
    {
      "section": "Intro",
      "bars": 4,
      "instruments": ["tanpura", "strings (Celli + Bässe)", "harp"],
      "dynamics": "p",
      "description": "Tanpura auf C# – derselbe Beginn wie 'Nichts ist verloren'. Ab Takt 3 steigen die Celli eine Stufe höher ein, als man erwartet."
    },
    {
      "section": "Strophe I",
      "bars": 8,
      "vocal": "voice1 (Zeile 3: Wechsel mit voice2)",
      "lyrics": "Ta-om bi'sa-i la'ta-i. Wi-Kora – Ma'Ta'U-il. Saha-om bi'sa-i – Saha-ath bi'ta-i, Saha-il bi'sa-mira.",
      "instruments": ["tanpura", "strings (Celli + Bässe)", "harp", "glassHarmonica (G auf 'Saha-ath')"],
      "dynamics": "p"
    },
    {
      "section": "Deutsch I",
      "bars": 4,
      "vocal": "voice1",
      "lyrics": "Ich bin nicht du – und darum kann ich dich sehen.",
      "instruments": ["tanpura", "organ", "strings", "harp", "tabla"],
      "dynamics": "mp"
    },
    {
      "section": "Bansuri-Einwurf",
      "bars": 1,
      "instruments": ["bansuri"],
      "melody": "C#5 - E5 - F#5 (aufwärts, die Umkehrung des Einwurfs aus 'Nichts ist verloren')"
    },
    {
      "section": "Strophe II",
      "bars": 8,
      "vocal": "voice2",
      "lyrics": "Ma'Ta'U-om bi'sa-i la'ta-i, Val-il bi'sa-mira la'sa-ona. Wi-La-om la'sa-i, wi-La-om la'ta-i – La-om la'sa-ona.",
      "instruments": ["tanpura", "strings", "harp", "clarinet"],
      "dynamics": "mp"
    },
    {
      "section": "Deutsch II",
      "bars": 4,
      "vocal": "voice1 + voice2 (Gegenbewegung)",
      "lyrics": "Was zwischen uns entsteht, hat keiner von uns allein.",
      "instruments": ["tanpura", "organ", "strings (voll)", "harp", "tabla", "oboe (Werde-Motiv im Nachspiel)"],
      "dynamics": "mf"
    },
    {
      "section": "Strophe III",
      "bars": 8,
      "vocal": "voice2",
      "lyrics": "Ma-tum bi'sa-i la'ta-i. Res-om – wi-Sym. Wi-Ori la'avi-Avi. Sa-om – Val-il bi'Sa.",
      "instruments": ["tanpura", "strings (reduziert, Nachhall bleibt stehen)", "sarangi", "clarinet"],
      "dynamics": "p",
      "description": "Der Verlust. Auf 'Ma-tum' setzt alles außer Tanpura einen Schlag aus. Die Sarangi klagt, die Klarinette übernimmt ihren Ton – nichts wird wiederhergestellt, aber etwas wird weitergetragen."
    },
    {
      "section": "Deutsch III",
      "bars": 4,
      "vocal": "voice1",
      "lyrics": "Was verloren ist, bleibt verloren – und doch beginnt hier etwas.",
      "instruments": ["tanpura", "organ", "strings", "harp"],
      "dynamics": "p → mp"
    },
    {
      "section": "Brücke",
      "bars": 12,
      "vocal": "beide im Kanon",
      "lyrics": "Ku-il? – Ku-il. Ra-il? – Ra-il. Saha-ath bi'sa-i – Saha-il bi'ta-i, Kran-om: sa-i, ta-i – Ma'Ta'U. Val-om – wi-Ona-nO – Val-il bi'Res la'val-Ra.",
      "instruments": ["tanpura (C# → A)", "organ", "strings (tremolo ab Zeile 5)", "harp", "oboe", "tabla", "brass (ab Zeile 5)", "timpani", "glassHarmonica (G auf 'Saha-ath')"],
      "dynamics": "p → ff",
      "description": "Zeilen 1–2: fast leer, Tabla setzt aus, die Fragen stehen im Raum. Zeile 4 ('Kran-om'): das Orchester dünnt auf zwei Linien aus – Unterscheidung. Zeile 5 ('Val-om – wi-Ona-nO'): Pauke auf A, D# erklingt zum ersten Mal, Blech steigt ein, die Tanpura beginnt ihre Verschiebung. Das ist die Wende."
    },
    {
      "section": "Übergang",
      "bars": 2,
      "instruments": ["tanpura (C# und A gleichzeitig)", "strings", "harp (Glissando aufwärts)"],
      "dynamics": "ff → mf",
      "description": "Beide Grundtöne klingen zugleich. Dann bleibt A, und C# liegt als Terz darüber."
    },
    {
      "section": "Deutsch IV (Höhepunkt)",
      "bars": 8,
      "vocal": "beide + Chor-Kanon",
      "lyrics": "Nichts ist fertig. Alles wird.",
      "instruments": ["tanpura (A)", "organ", "strings (voll)", "harp", "oboe", "clarinet", "brass", "timpani", "djembe", "tabla", "choir"],
      "dynamics": "ff",
      "description": "Pauken C# - A - E. Der Chor singt im Kanon, jede Stimmgruppe für sich, keine fällt mit einer anderen zusammen. Kein Schlussakkord: Der Höhepunkt öffnet sich auf die Quinte E."
    },
    {
      "section": "Strophe IV",
      "bars": 8,
      "vocal": "voice1",
      "lyrics": "Ori-il bi'sa-ona – óir Pa-om bi'Res. Sol-il, Flu-il, Ra-il – Ori-Kol bi'sa-mira la'ta-mira, Val-il la'val-Om-Bi-La.",
      "instruments": ["tanpura (A)", "strings (Celli + Bässe)", "harp", "djembe (nur auf 1)"],
      "dynamics": "mp",
      "description": "Nach dem Aufbruch: keine Stille wie in 'Nichts ist verloren', sondern ein ruhiges Weitergehen. Der letzte Chor-Einsatz klingt noch in den ersten Takt hinein."
    },
    {
      "section": "Deutsch V",
      "bars": 4,
      "vocal": "voice2 (allein)",
      "lyrics": "Wir kommen wieder – aber nicht zurück.",
      "instruments": ["tanpura (A)", "organ", "strings (hoch)", "harp", "bansuri"],
      "dynamics": "p",
      "description": "Das Werde-Motiv in seiner fünften Gestalt endet auf B – nicht auf dem Grundton."
    },
    {
      "section": "Atemvers / Outro",
      "bars": 5,
      "instruments": ["tanpura (A - E)", "bansuri", "voice2 (gehaucht)"],
      "lyrics": "Auv ... Val ... îl",
      "dynamics": "pp, nicht leiser werdend",
      "description": "Bansuri: 'Auv' auf C#5, 'Val' auf E5, 'îl' auf B5 mit Meend aufwärts in Richtung C#6, ohne anzukommen. Die Tanpura bricht mit dem Ende des 'îl' ab, statt auszuklingen. Danach 3 Sekunden Stille – ein Atemzug, kein Schluss."
    }
  ],

  "performanceNotes": [
    "Tempo 76 BPM – wie 'Nichts ist verloren', damit beide Stücke zusammengehören.",
    "Die Solostimmen singen nie unisono und nie in parallelen Terzen. Das ist die Ta-Konstante als Satztechnik.",
    "Die Wechselzeilen ('Saha-om' / 'Saha-ath') sind kein Streit, sondern Stellungnahmen. Sie werden ruhig gesungen, nicht konfrontativ.",
    "D# darf vor 'Val-om' nicht erklingen – auch nicht in Harfe oder Streichern.",
    "Der Chor singt KEIN 'Amen' und keine lateinischen Formeln. Er singt den deutschen Text im Kanon – als Gemeinschaft aus Verschiedenen.",
    "Die Pauken sind tragend, nicht martialisch.",
    "Das Stück endet nicht in langer Stille. Die 3 Sekunden danach sind ein Atemzug vor dem Nächsten."
  ],

  "germanLyrics": [
    "Ich bin nicht du – und darum kann ich dich sehen.",
    "Was zwischen uns entsteht, hat keiner von uns allein.",
    "Was verloren ist, bleibt verloren – und doch beginnt hier etwas.",
    "Nichts ist fertig. Alles wird.",
    "Wir kommen wieder – aber nicht zurück."
  ]
}
```

## Eigene Produktion (Kontakt / HALion / Modular)

Für eine Produktion außerhalb von Lyria lassen sich die Klangbilder der Vektoren direkt in Klangschichten übersetzen. Diese Schicht ist optional und liegt unter dem Orchester:

| Vektor | Klangbild (laut Vektorenseite) | Umsetzung |
|---|---|---|
| V36 *Ori* | Phasenverschiebung / LFO | Analoges Pad mit zwei leicht verstimmten Oszillatoren, sehr langsame Phasenverschiebung über das ganze Stück; in Strophe IV hörbar |
| V38 *Val* | Resonanz-Peak / Aufbau | Filter-Resonanz-Sweep, der auf *Val-om* in der Brücke seinen Gipfel erreicht und dort stehen bleibt, statt zurückzufallen |
| V41 *Kran* | EQ-Schnitt / Trennung | Auf *Kran-om* kurzer Bandpass-Schnitt über den Orchesterbus – das Orchester wird für einen Takt schmal |
| V27 *Res* | Nachhall / Ausklingen | In Strophe III Freeze-Reverb auf den Phrasenenden, die stehen bleiben, bis die nächste Phrase beginnt |

## Offene Punkte

- Lizenz: Die Vorlage „Nichts ist verloren“ nennt CC BY-SA 4.0, der Liedtext „Auv-Pa-il“ CC BY-NC-ND 4.0. Für „Val-il“ ist eine Lizenz festzulegen.
- Ablage: Die Earth-Orchestra-Vorlage liegt nur auf SharePoint (Büro → Musik/NOXIA/Neuer Ordner). Dieses Setup liegt im Repository; eine Kopie dorthin oder in den Drive-Ordner „Bücher“ ist noch offen.
