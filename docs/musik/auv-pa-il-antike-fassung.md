# Auv-Pa-il – antike Fassung (Entwurf v0.1)

**Stand:** 21. November 2026 – Entwurf, erste der „antiken Fassungen“ (wöchentlich samstags, Thomas: „vielleicht erstmal ein Song, dann nächsten Samstag wieder einen“)
**Text:** `src/content/texte/auv-pa-il.md` – unverändert, einsprachig Auv-Breth, ♩ = 44, D-Dorisch
**Gegenstücke:** Earth-Orchestra-Fassung „Nichts ist verloren“ (Lyria 3.0, SharePoint Büro → Musik/NOXIA); `val-il-earth-orchestra.md`
**Grundlage:** noxiagame `docs/world/chronomap-erde/wissen/musik-klang.md` (Abschnitt 5) und `urkunden-archive.md` (Abschnitt 4e)

> **Kennzeichnung:** Dies ist eine **Neuschöpfung von Thomas Peter Küper** für antike Instrumente, keine überlieferte antike Musik. Besetzung, Tonsystem und Aufführungsweise folgen Quellen der Zeit um das Jahr 30; Melodie, Text und Form sind Thomas' eigene. In noxia immer als „antike Fassung – eigene Schöpfung“ [F] ausweisen.

---

## 1. Warum dieses Lied zuerst

„Auv-Pa-il“ ist ein Abschiedslied für die Stunde des Übergangs. Genau dafür gibt es in der Antike eine feste Besetzung. Die Mischna verlangt, dass selbst der Ärmste in Israel beim Tod seiner Frau **mindestens zwei Flöten und eine Klagefrau** stellt (Ketubbot 4,4). Bei Jairus findet Jesus „die Pfeifer und das Getümmel“ (Mt 9,23). In Rom begrenzte schon das Zwölftafelgesetz die Musiker beim Begräbnis auf zehn Flötenspieler (bei Cicero, De legibus 2,59).

Die Klangwelt des Lieds braucht dafür kaum Umbau. Drone auf D, eine einzige Stimme, eine Flöte in den Pausen, eine Rahmentrommel für die Verwandlung – das gab es alles schon.

## 2. Tonsystem: D-Dorisch ist antik „phrygisch“

Die Namen der Kirchentonarten stimmen mit den antiken Namen nicht überein. Die weißen Tasten von D bis D heißen heute „Dorisch“. In der griechischen Theorie ist genau diese Folge die **phrygische Oktavgattung** (d′–d″). Das antike „Dorisch“ entspricht den weißen Tasten von E bis E.

**Aufbau aus zwei Tetrachorden** (je vier Töne im Rahmen einer Quarte), getrennt durch einen Ganzton:

| Tetrachord | Töne | Schritte |
|---|---|---|
| unten | D – E – F – G | Ganzton – Halbton – Ganzton |
| Trennton | G → A | Ganzton |
| oben | A – B – C – D | Ganzton – Halbton – Ganzton |

**Stimmung.** Antike Instrumente waren nicht gleichstufig gestimmt. Für die Produktion empfehle ich die pythagoreische Stimmung, weil sie aus reinen Quinten und Quarten gebaut ist wie die antiken Tetrachorde. Das antike Diatonon kannte daneben feinere Teilungen (nach Aristoxenos und Ptolemaios); das ist hier vereinfacht [F].

| Ton | Verhältnis | Cent | Abweichung von gleichstufig |
|---|---|---|---|
| D | 1/1 | 0 | 0 |
| E | 9/8 | 204 | +4 |
| F | 32/27 | 294 | −6 |
| G | 4/3 | 498 | −2 |
| A | 3/2 | 702 | +2 |
| B (dt. H) | 27/16 | 906 | +6 |
| C | 16/9 | 996 | −4 |
| D | 2/1 | 1200 | 0 |

Scala-Datei für Kontakt, HALion oder den Modularsynth (z. B. als `auv-pa-il-phrygisch.scl`):

```
! auv-pa-il-phrygisch.scl
Phrygische Oktavgattung auf D, pythagoreisch (Auv-Pa-il, antike Fassung)
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

## 3. Die Nachbarschaft: das Seikilos-Lied

Das Lied des Seikilos aus Tralles (1. oder 2. Jh.) ist die einzige vollständig erhaltene Melodie dieser Zeit mit Noten. Es steht in der **phrygischen Oktavgattung** – also in derselben Tonleiter wie „Auv-Pa-il“. Winnington-Ingram liest es als diatonische Oktave e–e mit zwei Kreuzen und dem Grundton a. Einen Ganzton tiefer gesetzt, liegt es ohne ein einziges Vorzeichen auf D–D, mit dem Grundton g.

Auch inhaltlich antwortet es. Seikilos singt gegen den Tod: Solange du lebst, strahle, lass dich durch nichts betrüben; das Leben ist kurz, die Zeit fordert ihr Ende. „Auv-Pa-il“ singt in Strophe IV: Ich bin der Strahl, der dich wärmt. Die Klagefrauen Galiläas sangen den Tod dagegen aus. Zwei Antworten der Nachbarn auf dieselbe Frage – und Thomas' Lied steht zwischen ihnen.

**Vorschlag:** Die Melodie des Seikilos-Lieds (gemeinfrei) erklingt **ohne Text** als Vorspiel auf dem Aulos, einen Ganzton tiefer, nach der Übertragung bei Pöhlmann/West (*Documents of Ancient Greek Music*, Nr. 23). So bleibt das Lied einsprachig, und die Nachbarschaft ist trotzdem hörbar.

## 4. Besetzung

| Earth Orchestra / Originalklangwelt | Antike Fassung | Beleg | Rolle |
|---|---|---|---|
| Mezzosopran oder Alt | **Klagefrau** (*mekonenet*), dieselbe Stimmlage | Ketubbot 4,4; Jer 9,16–19 | eine Stimme, die sich verwandelt – wie im Original |
| Drone: keltische Harfe, Drehleier, Cello | **Doppelaulos** (*chalil*), eine Röhre hält D | Ketubbot 4,4 (zwei Flöten); Doppelrohr mit Bordun **strittig** | Bordun auf D, in Strophe IV auf A wechselnd |
| Tin Whistle, Knochenflöte | **zweiter Aulos**, Melodie in den Pausen | Ketubbot 4,4 | Antworten zwischen den Zeilen |
| keltische Harfe | **Leier** (*kinnor*), gezupft, sehr sparsam | Arachin 2,3–6 | nur Brücke und Strophe IV |
| Bodhrán | **Rahmentrommel** (*tof*), von einer Frau gespielt | Ex 15,20 | erst in Strophe IV, wie im Original |
| Glasharfe auf *wi-Tor-ath* | **eine Zimbel**, ein einziger Schlag | Arachin 2,3–6 (eine Zimbel im Tempel) | der Riss, der keiner ist |
| (Ende, Drone verklingt) | **eine einzige Rohrflöte** schließt | Arachin 2,3: „mit einer Flöte, weil sie schön ausklingt“ | Atemvers |
| – | **Frauen** (3–5), *optional* | Moed Katan 3,8–9 | Wehklage im Unisono, Händeklatschen als Trauergeste |

Rohrflöten, nicht Metall: Die Mischna sagt, die Flöten im Tempel waren aus Rohr, „weil ihr Klang süßer ist“ (Arachin 2,3). Der Aulos hatte ein Doppelrohrblatt wie die Oboe. Er war keine Flöte im heutigen Sinn.

## 5. Ablauf

| Teil | Takte (♩ = 44, frei) | Was erklingt |
|---|---|---|
| Vorspiel | 8–12 | Aulos I allein: Seikilos-Melodie ohne Text, einen Ganzton tiefer; am Ende setzt Aulos II mit dem Bordun D ein |
| Strophe I – *Du gehst* | 8 | Klagefrau über dem Bordun. Aulos I antwortet nach jeder Zeile mit zwei, drei Tönen aus dem unteren Tetrachord (D–G) |
| Strophe II – *Ich bin um dich herum* | 8 | wie Strophe I; Aulos I steigt ins obere Tetrachord (A–D) – Strahl, Wind, Echo |
| Strophe III – *Wir* | 8 | Aulos I schweigt. Nur Bordun und Stimme. Auf *wi-Tor-ath*: ein Zimbelschlag. Das dreifache *Essem-om* ohne jede Begleitung außer dem Bordun |
| Brücke – *Die Trennung war eine Reise* | 12 | Die Leier setzt ein, gezupft auf D und A. Auf *hoveh Saha-om bi'sa-i la'sa-i* hält alles an – Stimme allein, der Bordun setzt für diese Zeile aus [F] |
| Strophe IV – *Ich bin nicht gegangen* | 8 | Rahmentrommel setzt ein, sehr leise, im Atemrhythmus. Der Bordun wechselt von D auf A: die Bleibende wird zur Gehenden |
| Atemvers | frei | Trommel und Leier verstummen. Aulos II hält noch A, dann verklingt er. *Auv … Auv … îl.* Stille. *Auv.* Zuletzt **eine einzige Rohrflöte**, ein Ton, verklingend. Danach die Stille von 30 Sekunden wie im Original |

**Option Wechselklage (Thomas entscheidet).** Die Mischna unterscheidet zwei Formen. Bei der Wehklage singen alle zugleich. Bei der Klage spricht eine vor, und alle antworten nach ihr (Moed Katan 3,9, nach Jer 9,19). Für eine Aufführung im Erlebnis-Studio könnten die Frauen jeweils nur die Schlussformel einer Strophe wiederholen: *go-Ori-Ori* (I), *go-Ori* (II), *ku-i bi'sa-ona* (III), *go-Avi-Avi* (IV). Das wäre keine Änderung am Text, aber eine neue Aufführungsform. Weil der Text unter CC BY-NC-ND steht und das Lied für eine einzige Stimme gedacht ist, nur mit Thomas' Zustimmung.

## 6. Für eine eigene Produktion

- **Klänge:** Doppelaulos aus zwei Oboen- oder Duduk-Klängen (Doppelrohr, wenig Vibrato), leicht gegeneinander verstimmt; Leier als gezupfte Harfe ohne Hall; Rahmentrommel mit der Hand, keine Schlägel.
- **Stimmung:** die Scala-Datei aus Abschnitt 2 für alle Instrumente, auch den Bordun.
- **Raum:** ein Innenhof aus Basalt, wenig Hall – kein Kirchenraum.
- **Modular (optional):** Der Bordun kann aus dem Modularsynth kommen, mit zwei Oszillatoren in reiner Quinte (D und A), langsam gegeneinander schwebend. So verbindet die antike Fassung Thomas' eigenes Instrumentarium mit dem antiken Klang.

**Prompt für einen Musikgenerator (z. B. Lyria):**

```
Ancient Mediterranean funeral lament, 1st century, Galilee. Solo female mezzo voice,
slow and breath-bound (quarter = 44), singing in an invented language. Double-reed pipe
(aulos) holding a drone on D, a second reed pipe answering between phrases, sparse plucked
lyre, one single cymbal stroke, a quiet hand-played frame drum only in the last verse.
Pythagorean tuning, Phrygian octave species on D (D E F G A B C D). Dry stone courtyard,
no church reverb, no harmony, no orchestra, no modern instruments. Ends with a single
reed pipe fading into silence.
```

## 7. Für noxia

- **Erlebnis-Studio „Begräbnis im Dorf“ (Galiläa um 30):** zwei Flöten, eine Klagefrau, Frauen, die klagen und klatschen. Thomas' Lied als einzige gesungene Musik, angekündigt als „antike Fassung – eigene Schöpfung“.
- **In einer griechischen Stadt (Gadara, Skythopolis):** nur das Seikilos-Vorspiel, als Musik der Nachbarn.
- **Verbindung zu den Musikerverträgen:** Wer die Fassung im Spiel aufführen lässt, engagiert Musiker wie Sosos oder Kopreus' Truppe – Tageslohn, Brot, Öl, Esel (`urkunden-archive.md`, 4e).

## 8. Offen

- Option Wechselklage: ja oder nein?
- Seikilos-Vorspiel: ja oder nein?
- Bordun auf dem Doppelaulos: dass eine Röhre einen Bordun hielt, ist eine verbreitete Deutung, aber nicht gesichert.
- Lizenz der antiken Fassung: wie der Text (CC BY-NC-ND 4.0) oder wie „Nichts ist verloren“ (CC BY-SA 4.0)?
- Nächster Samstag (28.11.2026): „Val-il“ – dort passt die Festtruppe des Kopreus (Aulosspieler, Trommeln, Tanz) zum Volksgesang und zur durchgehenden Perkussion.

## Quellen

- Mischna Ketubbot 4,4 (zwei Flöten, eine Klagefrau); Moed Katan 3,8–9 (Wehklage und Klage); Arachin 2,3–6 (Tempelinstrumente)
- Mt 9,23; Jer 9,16–19; Ex 15,20
- Cicero, De legibus 2,59 (Zwölftafelgesetz: zehn Flötenspieler)
- Britannica, „octave species“: https://britannica.com/print/article/424832
- Wikipedia, Seikilos epitaph: https://en.wikipedia.org/wiki/Seikilos_epitaph
- E. Pöhlmann, M. L. West, *Documents of Ancient Greek Music*, Oxford 2001, Nr. 23
- Ph. Neuman, zum Spiel des Doppelaulos (Melodie und Bordun): https://didaskalia.net/issues/vol2no2/neuman.html
- Mishnah Moed Katan 3,9 (mishnah.org): https://www.mishnah.org/?p=3793

---

*© Thomas Peter Küper, November 2026 – Entwurf. Text des Lieds: CC BY-NC-ND 4.0.*
