# Val-il – Earth Orchestra Version (Setup v0.2)

**Stand:** 25. Oktober 2026 – Entwurf
**Text:** `src/content/texte/val-il.md` (Auv-Breth / Deutsch)
**Gegenstück:** „Nichts ist verloren – Earth Orchestra Version“ (Lyria 3.0, SharePoint Büro → Musik/NOXIA) zu „Auv-Pa-il“

**Änderungen v0.1 → v0.2:** v0.1 klang zu sehr nach Kirchenmusik – die urige Kraft des Earth Orchestra fehlte, ebenso Perkussion und das Erhebende. Deshalb:
- Orgel fast ganz raus (nur noch Bordun in Strophe III), Chor singt Ruf und Antwort statt Kanon.
- Perkussion trägt durchgehend: Tabla und Djembe ab dem Intro, dazu Bodhrán und große Rahmentrommel; keine Aussetzer mehr.
- Streicher-Ostinato als Antrieb, Blech schon ab Deutsch II.
- Zwei Höhepunkte (Deutsch IV und Finale) statt einem; das Finale hebt den Grund noch einmal an (A → H).
- Kein abruptes Ende: Der Groove trägt weiter und blendet aus.

Die Besetzung von „Nichts ist verloren“ bleibt vollständig erhalten. Neu sind Glasharfe (zwei Töne), Bodhrán und große Rahmentrommel.

## Leitprinzipien

1. **Die Erde trägt.** Die Perkussion ist das Fundament, nicht die Dekoration. Sie setzt im Intro ein und hört nicht mehr auf – auch nicht in den leisen Teilen, dort wird sie nur schmaler.
2. **Spirale statt Kreis.** Der Grund steigt zweimal: C# → A → H. Das C# verschwindet nie, es wechselt nur die Rolle – erst Grundton, dann Terz, am Ende None. Das ist Rekursion mit Gedächtnis, und es ist zugleich das Erhebende.
3. **Ta ohne Verschmelzung.** Die Solostimmen dürfen in Terzen singen – zwei verschiedene Töne, die zusammen klingen –, aber nie unisono. Der Chor antwortet den Solisten, statt mit ihnen zu verschmelzen.
4. **Der Werde-Ton.** D# kommt in Teil A nicht vor. Er erklingt zum ersten Mal auf *Val-om* in der Brücke.
5. **Kein Schluss, aber auch kein Abbruch.** Das Stück endet nicht in Stille, sondern im weiterlaufenden Puls, der sich entfernt. Der letzte Ton der Bansuri ist das C# als None über H.

## Tonmaterial

| Teil | Grund (Tanpura) | Skala | Rolle des C# |
|---|---|---|---|
| A – Intro bis Deutsch III | C# – G# | cis-Moll-Pentatonik: C# E F# G# H | Grundton |
| B – Brücke bis Strophe IV | A – E | A-Lydisch: A H C# D# E F# G# | Terz |
| C – Finale und Outro | H – F# | H-Dur-Pentatonik: H C# D# F# G# | None |

Das *-ath* in Strophe I (Sopran, *Saha-ath bi'ta-i*) liegt auf G – dem Tritonus über C#, dem einzigen Ton außerhalb der Skala in Teil A. *Hinweis zur Vorlage:* Die Earth-Orchestra-Datei zu „Nichts ist verloren“ bezeichnet G als „None“; über C# ist G der Tritonus.

## Lyria-Setup

```json
{
  "version": "Lyria 3.0",
  "title": "Val-il – Earth Orchestra Version",
  "subtitle": "Ein Lied des Werdens für zwei Stimmen, Chor und Orchester (mit Power)",
  "composer": "Thomas Peter Küper",
  "poet": "Thomas Peter Küper",
  "language": "Mishkenaz (Auv-Breth) / Deutsch",
  "copyright": "Thomas Peter Küper 2026 – Lizenz vor Veröffentlichung festlegen",
  "companionPiece": "Nichts ist verloren – Earth Orchestra Version",
  "tempo": 76,
  "key": "cis-Moll-Pentatonik → A-Lydisch → H-Dur-Pentatonik",
  "timeSignature": "4/4",
  "duration": "ca. 4:30 (85 Takte)",
  "mood": "urig, kraftvoll, erdverbunden, erhebend – Aufbruch, nicht Rückkehr",

  "scale": {
    "partA": ["C#", "E", "F#", "G#", "B"],
    "partB": ["A", "B", "C#", "D#", "E", "F#", "G#"],
    "partC": ["B", "C#", "D#", "F#", "G#"],
    "description": "Der Grund steigt zweimal (C# → A → B). C# bleibt in allen drei Teilen und wechselt die Rolle: Grundton, Terz, None. D# ist der Werde-Ton und erklingt zuerst auf 'Val-om'. Notation hier englisch (B = H)."
  },

  "instrumentation": {
    "tanpura": {
      "name": "Tanpura",
      "midiProgram": 92,
      "action": "Teil A: C# - G# - C# - E. Teil B (ab Brücke Zeile 5): A - E - A - C#. Teil C (Finale): B - F# - B - C#",
      "level": "-18 dB",
      "notes": "Jede Verschiebung über zwei Takte, in denen beide Grundtöne gleichzeitig klingen."
    },
    "organ": {
      "name": "Dorforgel (trocken, mittel)",
      "midiProgram": 20,
      "stops": "Gedackt 8'",
      "action": "Nur in Strophe III als leiser Bordun. Sonst schweigt die Orgel.",
      "level": "-20 dB",
      "reverb": "1.2 sec",
      "notes": "Bewusst zurückgenommen – das Stück soll nicht nach Kirche klingen."
    },
    "stringsFull": {
      "name": "Full String Orchestra",
      "action": "Celli und Bässe spielen ab Strophe I ein erdiges Achtel-Ostinato (gestoßen, nicht legato). Volle Streicher ab Deutsch I, Tremolo in Brücke und Finale, weite Linien aufwärts in den Höhepunkten.",
      "sections": {
        "violins1": { "level": "-11 dB" },
        "violins2": { "level": "-12 dB" },
        "violas": { "level": "-12 dB" },
        "cellos": { "level": "-12 dB" },
        "basses": { "level": "-14 dB" }
      }
    },
    "brass": {
      "name": "Blech (Hörner + Trompeten + Posaunen)",
      "midiPrograms": { "horn": 60, "trumpet": 56, "trombone": 57 },
      "action": "Hörner ab Deutsch II in Schwellern. Volles Blech ab Brücke Zeile 5, in Deutsch IV und im Finale. Im Finale tragen die Trompeten das Werde-Motiv.",
      "level": "-13 dB",
      "notes": "Erhebend, weit, nicht martialisch."
    },
    "timpani": {
      "name": "Pauken",
      "midiProgram": 47,
      "action": "Brücke Zeile 1: C#. Brücke Zeile 5 ('Val-om'): A. Deutsch IV: C# - A - E, dann Wirbel in den letzten zwei Takten. Finale: B - F# - B und Wirbel zum letzten Refrain.",
      "level": "-16 dB",
      "notes": "Der alte Grund, der neue Grund, der nächste Grund."
    },
    "frameDrum": {
      "name": "Große Rahmentrommel",
      "action": "Tiefe, offene Schläge auf 1 ab Deutsch II; in Brücke, Deutsch IV und Finale auf 1 und 3",
      "level": "-17 dB",
      "notes": "Der Herzschlag der Erde."
    },
    "bodhran": {
      "name": "Bodhrán",
      "action": "Ab Strophe II durchgehende Triolen-Figur, leise. Ab Brücke Zeile 5 voll. Verbindet das Stück mit der keltischen Auv-Breth-Klangwelt.",
      "level": "-19 dB"
    },
    "harp": {
      "name": "Konzertharfe",
      "midiProgram": 46,
      "action": "Arpeggios in den Strophen; aufwärts gerichtete Glissandi in Brücke, Deutsch IV und Finale",
      "level": "-16 dB"
    },
    "glassHarmonica": {
      "name": "Glasharfe",
      "action": "Nur zwei Töne: G auf 'Saha-ath' (Strophe I) und G auf 'Saha-ath' (Brücke Zeile 3)",
      "level": "-20 dB",
      "notes": "Zitat aus 'Auv-Pa-il'. MIDI-Programm noch offen."
    },
    "tabla": {
      "name": "Tabla",
      "midiProgram": 117,
      "action": "Durchgehend ab dem Intro. In den Strophen leichter Puls, in Brücke, Deutsch IV und Finale dichter und präsenter.",
      "level": "-18 dB"
    },
    "djembe": {
      "name": "Djembe",
      "midiProgram": 117,
      "action": "Ab dem Intro: tiefer Schlag auf 1 und 3. Ab Deutsch II zusätzlich Off-Beat-Slaps. In Brücke, Deutsch IV und Finale voll.",
      "level": "-18 dB"
    },
    "bansuri": {
      "name": "Bansuri",
      "midiProgram": 73,
      "action": "Einwurf nach Deutsch I; Gegenlinie im Finale; Atemvers 'Auv ... Val ... îl' im Outro",
      "level": "-15 dB"
    },
    "sarangi": {
      "name": "Sarangi",
      "midiProgram": 41,
      "action": "Klagende Gegenstimme in Strophe III und Brücke Zeilen 1–4, schweigt ab 'Val-om'",
      "level": "-14 dB"
    },
    "oboe": {
      "name": "Oboe",
      "midiProgram": 68,
      "action": "Werde-Motiv instrumental nach Deutsch II; Gegenlinie in Deutsch IV",
      "level": "-13 dB"
    },
    "clarinet": {
      "name": "Klarinette",
      "midiProgram": 71,
      "action": "Tiefe Füllung; übernimmt in Strophe III den Ton der Sarangi",
      "level": "-15 dB"
    },
    "choir": {
      "name": "Gemischter Chor (kein 'Amen')",
      "midiProgram": 52,
      "action": "Deutsch IV und Finale: Ruf und Antwort. Die Solisten rufen die Zeile, der Chor antwortet mit voller, offener Stimme (Volksgesang, kein Kirchenchor). Beim letzten Refrain singen alle 'Alles wird' zusammen in Terzen und Quinten.",
      "level": "-12 dB",
      "notes": "KEIN Kanon, KEIN 'Amen', KEINE lateinischen Formeln, KEIN gepflegter Kirchenklang. Der Chor ist die Gemeinschaft, die antwortet."
    },
    "voice1": {
      "name": "Tenor",
      "midiProgram": 53,
      "level": "-3 dB"
    },
    "voice2": {
      "name": "Sopran (mit Meend)",
      "midiProgram": 54,
      "level": "-5 dB"
    }
  },

  "melodies": {
    "strophe1_tenor": "C#3 G#3 | E3 F#3 | G#3 B3 | C#4",
    "strophe1_sopran_ath": "G4 F#4 | E4 (Zeile 3, zweite Hälfte)",
    "werdeMotiv_deutsch1": "C#4 E4 F#4 | E4 C#4",
    "werdeMotiv_deutsch2": "C#4 E4 F#4 G#4 | F#4 E4",
    "werdeMotiv_deutsch3": "E4 F#4 G#4 B4 | G#4 F#4",
    "werdeMotiv_deutsch4": "A4 B4 C#5 D#5 E5 | C#5 B4",
    "werdeMotiv_finale": "B4 C#5 D#5 F#5 G#5 B5 | G#5 F#5 (Trompeten und beide Stimmen in Terzen)",
    "bruecke": "E4 F#4 | G#4 B4 | G4 F#4 | E4 C#4 | D#5 E5 | B4 (Sopran führt, Tenor antwortet)",
    "atemvers": "Auv: B4 | Val: F#5 | îl: C#6, Meend aufwärts, ohne aufzulösen"
  },

  "vocalDuet": {
    "strophe1": "voice1, Zeile 3 Wechsel: voice1 'Saha-om' / voice2 'Saha-ath'",
    "deutsch1": "voice1",
    "strophe2": "voice2",
    "deutsch2": "beide in Terzen",
    "strophe3": "voice2",
    "deutsch3": "voice1",
    "bruecke": "beide, Ruf und Antwort; Zeile 3 Wechsel umgekehrt: voice1 'Saha-ath' / voice2 'Saha-il'",
    "deutsch4": "beide rufen, Chor antwortet",
    "strophe4": "voice1",
    "finale": "beide in Terzen, Chor antwortet, letzter Refrain alle zusammen",
    "atemvers": "voice2 haucht 'îl' mit der Bansuri"
  },

  "structure": [
    {
      "section": "Intro",
      "bars": 4,
      "instruments": ["tanpura", "djembe", "tabla", "strings (Celli + Bässe, Ostinato ab Takt 3)", "harp"],
      "dynamics": "mp → mf",
      "description": "Tanpura auf C# und sofort die Erde: Djembe und Tabla. Ab Takt 3 setzt das Ostinato der tiefen Streicher ein."
    },
    {
      "section": "Strophe I",
      "bars": 8,
      "vocal": "voice1 (Zeile 3: Wechsel mit voice2)",
      "lyrics": "Ta-om bi'sa-i la'ta-i. Wi-Kora – Ma'Ta'U-il. Saha-om bi'sa-i – Saha-ath bi'ta-i, Saha-il bi'sa-mira.",
      "instruments": ["tanpura", "djembe", "tabla", "strings (Ostinato)", "harp", "glassHarmonica (G auf 'Saha-ath')"],
      "dynamics": "mf"
    },
    {
      "section": "Deutsch I",
      "bars": 4,
      "vocal": "voice1",
      "lyrics": "Ich bin nicht du – und darum kann ich dich sehen.",
      "instruments": ["tanpura", "strings (voll)", "harp", "tabla", "djembe"],
      "dynamics": "mf"
    },
    {
      "section": "Bansuri-Einwurf",
      "bars": 1,
      "instruments": ["bansuri", "djembe", "tabla"],
      "melody": "C#5 - E5 - F#5 (aufwärts – die Umkehrung des Einwurfs aus 'Nichts ist verloren')"
    },
    {
      "section": "Strophe II",
      "bars": 8,
      "vocal": "voice2",
      "lyrics": "Ma'Ta'U-om bi'sa-i la'ta-i, Val-il bi'sa-mira la'sa-ona. Wi-La-om la'sa-i, wi-La-om la'ta-i – La-om la'sa-ona.",
      "instruments": ["tanpura", "djembe", "tabla", "bodhran", "strings (Ostinato)", "harp", "clarinet"],
      "dynamics": "mf"
    },
    {
      "section": "Deutsch II",
      "bars": 4,
      "vocal": "beide in Terzen",
      "lyrics": "Was zwischen uns entsteht, hat keiner von uns allein.",
      "instruments": ["tanpura", "strings (voll)", "horns (Schweller)", "harp", "frameDrum", "djembe (mit Slaps)", "tabla", "bodhran", "oboe (Werde-Motiv im Nachspiel)"],
      "dynamics": "f"
    },
    {
      "section": "Strophe III",
      "bars": 8,
      "vocal": "voice2",
      "lyrics": "Ma-tum bi'sa-i la'ta-i. Res-om – wi-Sym. Wi-Ori la'avi-Avi. Sa-om – Val-il bi'Sa.",
      "instruments": ["tanpura", "organ (Bordun)", "strings (tief)", "sarangi", "clarinet", "djembe (nur 1)", "tabla (schmal)"],
      "dynamics": "mp",
      "description": "Der Verlust – das einzige wirklich ruhige Stück, aber der Puls läuft weiter. Auf 'Ma-tum' fällt alles außer Tanpura und Djembe einen Schlag lang weg."
    },
    {
      "section": "Deutsch III",
      "bars": 4,
      "vocal": "voice1",
      "lyrics": "Was verloren ist, bleibt verloren – und doch beginnt hier etwas.",
      "instruments": ["tanpura", "strings (Ostinato kehrt zurück)", "harp", "djembe", "tabla", "bodhran"],
      "dynamics": "mp → f",
      "description": "Auf 'und doch beginnt hier etwas' kommt der Antrieb zurück."
    },
    {
      "section": "Brücke (mit Power)",
      "bars": 12,
      "vocal": "beide, Ruf und Antwort",
      "lyrics": "Ku-il? – Ku-il. Ra-il? – Ra-il. Saha-ath bi'sa-i – Saha-il bi'ta-i, Kran-om: sa-i, ta-i – Ma'Ta'U. Val-om – wi-Ona-nO – Val-il bi'Res la'val-Ra.",
      "instruments": ["tanpura (C# → A)", "strings (Tremolo)", "harp", "sarangi (bis Zeile 4)", "oboe", "tabla", "djembe", "bodhran", "frameDrum", "timpani", "brass (ab Zeile 5)", "glassHarmonica (G auf 'Saha-ath')"],
      "dynamics": "f → ff",
      "description": "Zeilen 1–2: die Fragen als Rufe über dem vollen Trommelgrund. Zeile 4 ('Kran-om'): ein Takt, in dem nur Trommeln und zwei Stimmen bleiben – Unterscheidung. Zeile 5 ('Val-om – wi-Ona-nO'): Pauke auf A, D# erklingt zum ersten Mal, volles Blech, Bodhrán voll. Das ist die Wende."
    },
    {
      "section": "Übergang",
      "bars": 2,
      "instruments": ["tanpura (C# und A gleichzeitig)", "strings", "harp (Glissando aufwärts)", "timpani (Wirbel)", "djembe", "tabla"],
      "dynamics": "ff",
      "description": "Kein Abklingen – die Trommeln halten die Spannung, der Grund schiebt sich auf A."
    },
    {
      "section": "Deutsch IV (erster Höhepunkt)",
      "bars": 8,
      "vocal": "beide rufen, Chor antwortet",
      "lyrics": "Nichts ist fertig. Alles wird.",
      "instruments": ["tanpura (A)", "strings (voll)", "harp", "oboe", "clarinet", "brass", "timpani", "frameDrum", "djembe", "tabla", "bodhran", "choir"],
      "dynamics": "ff",
      "description": "Pauken C# - A - E. Die Solisten rufen 'Nichts ist fertig', der Chor antwortet 'Alles wird' – mit voller, offener Stimme. Zweimal."
    },
    {
      "section": "Strophe IV",
      "bars": 8,
      "vocal": "voice1",
      "lyrics": "Ori-il bi'sa-ona – óir Pa-om bi'Res. Sol-il, Flu-il, Ra-il – Ori-Kol bi'sa-mira la'ta-mira, Val-il la'val-Om-Bi-La.",
      "instruments": ["tanpura (A)", "strings (Ostinato)", "harp", "djembe", "tabla", "bodhran", "frameDrum"],
      "dynamics": "mf → f",
      "description": "Nach dem ersten Höhepunkt keine Stille, sondern Weitergehen: Der Trommelgrund bleibt, das Ostinato treibt auf das Finale zu. Ab 'Ori-Kol' Crescendo."
    },
    {
      "section": "Finale – Deutsch V (zweiter Höhepunkt)",
      "bars": 8,
      "vocal": "beide in Terzen, Chor antwortet; letzter Refrain alle zusammen",
      "lyrics": "Wir kommen wieder – aber nicht zurück. / Nichts ist fertig. Alles wird.",
      "instruments": ["tanpura (A → B)", "strings (voll, Tremolo)", "brass (Trompeten mit Werde-Motiv)", "harp (Glissandi)", "bansuri (Gegenlinie)", "oboe", "clarinet", "timpani", "frameDrum", "djembe", "tabla", "bodhran", "choir"],
      "dynamics": "ff → fff",
      "description": "Der Grund hebt sich noch einmal, von A nach H – die nächste Windung der Spirale. Takte 1–4: 'Wir kommen wieder – aber nicht zurück', Solisten und Chor im Wechsel. Takte 5–8: alle zusammen 'Nichts ist fertig. Alles wird.' Pauken B - F# - B. Das ist das Erhebende."
    },
    {
      "section": "Outro – Atemvers",
      "bars": 6,
      "instruments": ["tanpura (B - F#)", "bansuri", "voice2 (gehaucht)", "djembe", "tabla", "frameDrum"],
      "lyrics": "Auv ... Val ... îl",
      "dynamics": "f → Ausblendung",
      "description": "Orchester und Chor brechen nach dem letzten 'Alles wird' auf einem Schlag ab. Trommeln und Tanpura laufen weiter. Darüber die Bansuri: 'Auv' auf B4, 'Val' auf F#5, 'îl' auf C#6 mit Meend aufwärts – das alte C#, jetzt als None, unaufgelöst. Der Trommelpuls blendet über die letzten vier Takte aus, ohne zu enden."
    }
  ],

  "performanceNotes": [
    "Tempo 76 BPM – wie 'Nichts ist verloren', aber mit mehr Antrieb durch das Ostinato der tiefen Streicher.",
    "Die Perkussion ist das Fundament. Djembe und Tabla spielen vom ersten bis zum letzten Takt.",
    "Zwei Power-Momente: Deutsch IV und das Finale. Das Finale ist größer – der Grund steigt von A nach H.",
    "Die Solostimmen singen in Terzen, aber nie unisono. Der Chor antwortet, er verschmilzt nicht.",
    "Der Chor singt Volksgesang mit offener Kehle – kein Kirchenchor, kein 'Amen', keine lateinischen Formeln.",
    "Die Orgel erklingt nur als Bordun in Strophe III.",
    "D# darf vor 'Val-om' nicht erklingen.",
    "Das Stück endet nicht in Stille: Der Trommelpuls trägt weiter und entfernt sich."
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

Optional, außerhalb von Lyria. Die Klangbilder der Vektoren als Klangschichten unter dem Orchester:

| Vektor | Klangbild (laut Vektorenseite) | Umsetzung |
|---|---|---|
| V36 *Ori* | Phasenverschiebung / LFO | Analoges Pad mit zwei leicht verstimmten Oszillatoren, langsame Phasenverschiebung; folgt den Grundverschiebungen C# → A → H |
| V38 *Val* | Resonanz-Peak / Aufbau | Filter-Resonanz-Sweep mit Gipfel auf *Val-om*, zweiter, höherer Gipfel im Finale |
| V41 *Kran* | EQ-Schnitt / Trennung | Auf *Kran-om* ein Takt Bandpass über dem Orchesterbus – nur Trommeln und Stimmen bleiben breit |
| V27 *Res* | Nachhall / Ausklingen | In Strophe III Freeze-Reverb auf den Phrasenenden |

Für die Perkussion in Kontakt eignen sich zusätzlich tiefe Taiko- oder Surdo-Schläge unter der Rahmentrommel in den Höhepunkten.

## Offene Punkte

- Lizenz: Die Vorlage „Nichts ist verloren“ nennt CC BY-SA 4.0, der Liedtext „Auv-Pa-il“ CC BY-NC-ND 4.0. Für „Val-il“ festzulegen.
- MIDI-Programme für Glasharfe, Bodhrán und Rahmentrommel – je nach Sound in Lyria.
- Ablage: Die Earth-Orchestra-Vorlage liegt nur auf SharePoint (Büro → Musik/NOXIA/Neuer Ordner). Eine Kopie dieses Setups dorthin ist noch offen.
