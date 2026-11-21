# Val-il – antike Fassung (Entwurf v0.1)

**Stand:** 21. November 2026 – Entwurf, zweite der „antiken Fassungen“ (Thomas: „ja mach das jetzt bitte“)
**Text:** `src/content/texte/val-il.md` – **unverändert**
**Gegenstücke:** `val-il-earth-orchestra.md` (Setup v0.2) · erste antike Fassung `auv-pa-il-antike-fassung.md`
**Grundlage:** noxiagame `docs/world/chronomap-erde/wissen/musik-klang.md` und `urkunden-archive.md` (Abschnitt 4e, Musikerverträge)

> **Kennzeichnung:** Dies ist eine **Neuschöpfung von Thomas Peter Küper** für antike Instrumente, keine überlieferte antike Musik. Besetzung, Tonsysteme und Aufführungsweise folgen Quellen der Zeit; Melodie, Text und Form sind Thomas' eigene. In noxia immer als „antike Fassung – eigene Schöpfung von Thomas Peter Küper“ [F] ausweisen. Der Liedtext wird nicht verändert.

---

## 1. Die Idee: vom Begräbnis zum Fest

„Auv-Pa-il“ bekam die Besetzung eines Begräbnisses: zwei Flöten und eine Klagefrau. „Val-il“ ist das Gegenstück – ein Lied des Werdens, mit Volksgesang, durchgehender Perkussion und zwei Höhepunkten. Dafür passt die Musik der **Feste**.

Für Feste gibt es Verträge mit Namen. Ein Dorf in Ägypten engagiert **Kopreus, Sohn des Sarapammon**, mit seiner Truppe aus Aulosspielern und Musikern für fünf Festtage: 140 Drachmen täglich, 40 Paar Brote, Öl, Wein, zehn Esel für die Anreise (Select Papyri 1.21). Die Krotalistria **Isidora** tanzt mit zwei anderen Tänzerinnen sechs Tage im Haus der Artemisia (P.Cornell 9, 206 n. Chr.). Der Aulosspieler **Psenumis** hält die Traubentreter bis zum Ende der Weinlese bei Laune (SB I 5810).

Auch die eigene Überlieferung kennt das Fest mit Flöte und Tanz. Kinder spielen auf dem Markt Hochzeit: „Wir haben euch gepfiffen, und ihr wolltet nicht tanzen“ (Mt 11,17). Und die Mischna erzählt vom 15. Aw und vom Versöhnungstag: An diesen Tagen gingen die Töchter Jerusalems in geliehenen weißen Kleidern hinaus, um niemanden zu beschämen, der keine hatte, und tanzten in den Weinbergen (Taanit 4,8). Sie riefen den jungen Männern zu, die Augen zu heben – ein Ruf, auf den geantwortet wird. Der Jerusalemer Talmud liest an dieser Stelle eine andere Fassung: die Töchter Jerusalems hätten in den Weinbergen Flöte gespielt – die Lesart ist strittig.

## 2. Tonsysteme: die Spirale in antiken Namen

Die Earth-Orchestra-Fassung verschiebt den Grund zweimal: C# → A → H. Das C# bleibt, wechselt aber seine Rolle – Grundton, Terz, None. Antik heißt so ein Wechsel **Metabolé** (Umschlag, Modulation). Die Theorie kannte ihn; konservative Hörer haben ihn bekämpft (siehe Abschnitt 3).

Jede Skala des Setups lässt sich in eine antike Oktavgattung übersetzen. Die Namen sind gegenüber den heutigen Kirchentonarten verschoben:

| Teil | Setup (heutige Namen) | Antike Oktavgattung | Was ausgelassen wird |
|---|---|---|---|
| A – Intro bis Deutsch III | cis-Moll-Pentatonik C# E F# G# H | **phrygisch** auf C# (C# D# E F# G# A# H) – dieselbe Gattung wie „Auv-Pa-il“ | D# und A#: Der Werde-Ton D# ist noch nicht da |
| B – Brücke bis Strophe IV | A-Lydisch A H C# D# E F# G# | **hypolydisch** auf A (heutiges Lydisch = antikes Hypolydisch) | nichts – D# erklingt zum ersten Mal auf *Val-om* |
| C – Finale und Ausklang | H-Dur-Pentatonik H C# D# F# G# | **lydisch** auf H (heutiges Ionisch/Dur = antikes Lydisch) | E und A# |

Teil A steht also in derselben Gattung wie das erste Lied des Diptychons – nur dass Töne fehlen. Das Lied beginnt in der Welt von „Auv-Pa-il“ und verlässt sie.

**Pythagoreische Stimmung, je Teil eine Scala-Datei** (für Kontakt, HALion oder den Modularsynth; Grundton jeweils neu setzen):

```
! val-il-A-phrygisch.scl   (Grundton C#)
Phrygische Oktavgattung, pythagoreisch – Val-il, Teil A
 7
!
 9/8
 32/27
 4/3
 3/2
 27/16
 16/9
 2/1
```

```
! val-il-B-hypolydisch.scl   (Grundton A)
Hypolydische Oktavgattung, pythagoreisch – Val-il, Teil B
 7
!
 9/8
 81/64
 729/512
 3/2
 27/16
 243/128
 2/1
```

```
! val-il-C-lydisch.scl   (Grundton H)
Lydische Oktavgattung, pythagoreisch – Val-il, Teil C
 7
!
 9/8
 81/64
 4/3
 3/2
 27/16
 243/128
 2/1
```

Ein Nebeneffekt der reinen Stimmung, der zum Lied passt [Deutung, F]: Wird der Grund neu gesetzt, klingt das C# als Terz über A (81/64) nicht genau wie das C# als Grundton vorher. Derselbe Ton kehrt wieder, aber nicht ganz derselbe – Rekursion mit Gedächtnis, hörbar als Hauch von Schwebung. Wer das nicht will, stimmt alle drei Teile aus einer gemeinsamen Quintenkette.

## 3. Wie man die Spirale antik spielt

**Wechsel der Aulosspieler.** Pausanias schreibt, dass Aulosspieler eine Zeit lang drei Arten von Auloi hatten: eine für dorische, eine andere für phrygische und eine dritte für lydische Melodien. Erst Pronomos aus Theben machte es möglich, alle drei auf einem Paar zu spielen (Pausanias 9,12,5). Für „Val-il“ heißt das [F]: Die Truppe hat **drei Aulosspieler**. Bei jeder Metabolé tritt ein neuer Spieler mit anderen Röhren dazu, der vorige hält noch zwei Takte seinen Bordun – so klingen wie im Setup beide Grundtöne kurz zugleich. Die Spirale wird sichtbar: Musiker kommen dazu, keiner geht.

**Die Sage von den abgeschnittenen Saiten.** Wer zu viel Umschlag in die Musik brachte, machte sich Feinde. Als Timotheos beim Karneenfest antrat, nahm einer der Ephoren ein Messer und fragte ihn, auf welcher Seite er die überzähligen Saiten über die üblichen sieben hinaus abschneiden solle (Plutarch, Instituta Laconica 17). Dieselbe Geschichte wird auch von Phrynis erzählt; einige Forscher halten die Anekdote für zweifelhaft. Für die Aufführung im Erlebnis-Studio ist sie eine gute Vorrede: Hier kommt ein Lied, das den Grund verschiebt.

## 4. Besetzung – die Truppe des Kopreus

| Earth Orchestra (Setup v0.2) | Antike Fassung | Beleg | Rolle |
|---|---|---|---|
| Tenor und Sopran | **Vorsänger und Vorsängerin** der Truppe | – | Wechselgesang wie im Text (*Saha-om* / *Saha-ath*) |
| gemischter Chor, Ruf und Antwort | **Dorf und Truppe** als antwortende Gemeinschaft | Taanit 4,8 (Ruf beim Tanz); Mt 11,17 | Antworten, Wiederholen der Rufe |
| Tanpura (C#, A, H) | **drei Aulosspieler**, je einer pro Grund, Bordun | Pausanias 9,12,5 | die Spirale (Abschnitt 3) |
| Djembe, Tabla (durchgehend) | **Rahmentrommeln** (*tympana*, *tof*), mehrere | Ex 15,20; Ps 150,4 | das Fundament, vom ersten bis zum letzten Takt |
| Bodhrán, große Rahmentrommel | **großes Tympanon** | – | Akzente auf *Kran-om*, *Val-om*, im Finale |
| – (neu) | **Krotala** der Tänzerinnen | P.Cornell 9 (Krotalistria Isidora) | der Tanz wird hörbar |
| Streicher-Ostinato | **zwei Leiern** (*kinnor*, *kithara*), gezupftes Ostinato | Arachin 2,3–6 | Antrieb |
| Harfe | **Winkelharfe** (*trigonon*) | – | Glanz in der Brücke |
| Blech | **kein Blech**; stattdessen alle Trommeln, Krotala und der Aulos in hoher Lage, dazu der Jubelruf der Frauen [Deutung] | – | die zwei Höhepunkte |
| Pauken | großes Tympanon | – | Grundtöne C# – A – H im Finale als Schlagfolge |
| Orgel-Bordun (Strophe III) | nur der Aulos-Bordun | – | Strophe III bleibt schmal |
| Glasharfe (zwei Töne, Zitat aus „Auv-Pa-il“) | **Kymbala**, zwei Schläge | Arachin 2,3–6 | antwortet auf den einen Zimbelschlag der ersten antiken Fassung |
| Bansuri im Ausklang | **Syrinx** (Panflöte) | – | *Auv* H, *Val* F#, *îl* C# – aufwärts, offen |

Die Tänzerinnen und Tänzer gehören zur Besetzung: Füße und Krotala sind Teil der Perkussion.

## 5. Ablauf (nach dem Setup v0.2, ♩ = 76)

| Teil | Grund | Was erklingt |
|---|---|---|
| Intro | C# | Aulos I mit Bordun C#, sofort die Rahmentrommeln; ab Takt 3 das Leier-Ostinato |
| Strophe I – *Ich bin nicht du* | C# | Vorsänger, Vorsängerin antworten in Zeile 3 (*Saha-ath*). Die Gemeinschaft antwortet nach jeder Zeile mit der letzten Wendung |
| Strophe II – *Was zwischen uns entsteht* | C# | Krotala und Tanz setzen ein; die Trommeln werden dichter |
| Strophe III – *Was verloren ist* | C# | schmal: Bordun, eine Trommel im Atempuls, Stimme. *Ma-tum* ohne jede Begleitung – das gehütete Schweigen bleibt hörbar. Zwei Kymbala-Schläge |
| Übergang | C# → A | Aulos II tritt mit Bordun A dazu, zwei Takte klingen C# und A zugleich, dann verstummt Aulos I |
| Brücke – *Ku-il* | A | Die Fragen als Rufe, die Gemeinschaft wiederholt sie (*Ku-il? – Ku-il.*). Auf *Kran-om*: ein Takt nur Trommeln und zwei Stimmen. Auf *Val-om*: großes Tympanon, D# zum ersten Mal, Jubelruf – der erste Höhepunkt |
| Strophe IV – *Wir kommen wieder* | A | volle Truppe, Tanz |
| Übergang | A → H | Aulos III mit Bordun H, zwei Takte A und H zugleich |
| Finale | H | zweiter Höhepunkt: alle Trommeln, Krotala, Aulos in hoher Lage, Gemeinschaft und Solisten im Wechsel |
| Atemvers und Ausklang | H | Die Gemeinschaft verstummt auf einem Schlag. Trommeln und Bordun laufen weiter. Darüber die Syrinx: *Auv* auf H, *Val* auf F#, *îl* auf C#, aufwärts gezogen und offen. Die Trommeln entfernen sich, ohne zu enden – als zöge die Truppe weiter ins nächste Dorf |

## 6. Die deutschen Zeilen

Die Earth-Orchestra-Fassung singt nach den Strophen deutsche Zeilen („Nichts ist fertig. Alles wird.“). Für die antike Fassung gibt es zwei Wege; beide ändern den Text nicht:

- **Variante A (Vorschlag):** einsprachig wie die liturgische Fassung. Die deutschen Zeilen erscheinen in noxia nur als Untertitel.
- **Variante B:** die deutschen Zeilen werden gesungen wie in der Earth-Orchestra-Fassung – dann von der ganzen Gemeinschaft, als Antwort.

## 7. Für eine eigene Produktion

- **Klänge:** drei Doppelrohr-Klänge (Oboe, Duduk, Zurna) für die drei Aulosspieler, je mit eigener Stimmung; Rahmentrommeln mit der Hand, keine Schlägel; Krotala als Holz- oder Bronzeklappern; Leiern trocken gezupft.
- **Stimmung:** die drei Scala-Dateien aus Abschnitt 2, beim Übergang je zwei Takte überlappend.
- **Raum:** Dorfplatz unter freiem Himmel, kaum Hall; Stimmen der Gemeinschaft breit und nicht ganz zusammen.
- **Modular (optional):** die Borduns aus zwei Oszillatoren in reiner Quinte (C#–G#, A–E, H–F#); die Metabolé als Überblendung über zwei Takte.

**Prompt für einen Musikgenerator (z. B. Lyria):**

```
Ancient Mediterranean village festival, 1st century. A travelling troupe of double-reed
pipe players (aulos), many hand-played frame drums from the first to the last bar, wooden
clappers (krotala) of dancers, two plucked lyres in an ostinato, small cymbals. Male and
female lead singers in call and response with a large village crowd, singing in an
invented language. Tempo 76. The drone shifts twice: C# to A to B, each time a new pipe
player joins and both drones overlap for two bars. Two climaxes with women's joyful
ululation, no brass, no orchestra, no modern instruments. Ends with a panpipe rising over
drums that fade into the distance without stopping.
```

## 8. Für noxia

- **Erlebnis-Studio „Fest im Dorf“:** Hochzeit oder Weinlese in Galiläa, mit Musikern nach den Verträgen engagiert (Tageslohn, Brot, Öl, Wein, Esel). „Val-il“ als Lied der Truppe, angekündigt als „antike Fassung – eigene Schöpfung von Thomas Peter Küper“.
- **Als Diptychon:** am selben Ort zuerst das Begräbnis („Auv-Pa-il“), später das Fest („Val-il“). Der eine Zimbelschlag des ersten Lieds kehrt als zwei Kymbala-Schläge wieder.
- **Spielregel aus den Verträgen:** Wer die Truppe für mehrere Tage bucht, zahlt Handgeld vorab (bei Kopreus 20 Drachmen) und stellt den Transport.

## 9. Entscheidungen und Offenes

**Übernommen aus den Entscheidungen zu „Auv-Pa-il“ (Thomas, 21.11.2026):** keine Textänderung; Lizenz der antiken Fassung (Musik, Arrangement, Aufnahmen) **CC BY-SA 4.0** wie „Nichts ist verloren“; Namensnennung Pflicht: „Thomas Peter Küper“.

**Offen:**
- Deutsche Zeilen: Variante A oder B?
- Drei Aulosspieler mit Wechsel bei jeder Metabolé – oder ein Spieler „nach Pronomos“, der alles auf einem Paar spielt?
- Der Liedtext ist noch `draft: true` (nicht veröffentlicht); eine Lizenz für den Text selbst ist im Liedtext noch offen.
- Nächster Samstag (28.11.2026): drittes Lied – Vorschlag: der „Höhlengesang“ aus Mishkenaz, wenn es dafür einen Text gibt.

## Quellen

- Select Papyri 1.21 (Kopreus); P.Cornell 9 (Isidora); SB I 5810 (Psenumis) – nach `urkunden-archive.md`, Abschnitt 4e
- Mischna Taanit 4,8; Jerusalemer Talmud Taanit 4,7 (Lesart „Flöte spielen“); Mt 11,17; Ex 15,20; Ps 150,4; Mischna Arachin 2,3–6
- Pausanias 9,12,5 (Perseids): https://fgh.perseids.org/read/greekLit/tlg0525/tlg001/perseus-eng2/9.12.5-9.13.5
- Plutarch, Instituta Laconica 17 (Perseids): https://cts.perseids.org/read/greekLit/tlg0007/tlg082a/perseus-eng2/17
- Wikipedia, Phrynnis: https://en.wikipedia.org/wiki/Phrynnis
- Posen Library, Mischna Taanit 4,8: https://www.posenlibrary.com/node/11381
- Sefaria, Jerusalemer Talmud Taanit 4,7: https://www.sefaria.org.il/Jerusalem_Talmud_Taanit.4.7
- Britannica, „octave species“: https://britannica.com/print/article/424832

---

*© Thomas Peter Küper, November 2026 – Entwurf.*

*Antike Fassung (Musik, Arrangement, Aufnahmen): [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.de) – Namensnennung: Thomas Peter Küper. Liedtext unverändert, Lizenz des Textes wie im Liedtext festgelegt. In noxia stets mit dem Hinweis „antike Fassung – eigene Schöpfung von Thomas Peter Küper“.*
