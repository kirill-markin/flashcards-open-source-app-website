---
title: "Quizlet-Sets exportieren (2026): Karten sichern und übertragen"
description: "So exportierst du eigene Quizlet-Sets 2026 auf der Website, sicherst den Text in UTF-8, prüfst Trennzeichen und überträgst Karten zu Flashcards oder Anki."
image: "/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png"
date: "2026-06-10"
updated: "2026-08-13"
keywords:
  - "Quizlet-Sets exportieren"
  - "Quizlet Export"
  - "Quizlet-Karten herunterladen"
  - "Quizlet-Set sichern"
  - "Quizlet zu Anki"
  - "Quizlet zu Flashcards"
---

Über die Exportfunktion von Quizlet lädst du keine fertige Datei für den Kartensatz herunter. Stand 13. August 2026 endet der Export eines selbst erstellten Sets auf der Website mit **Text kopieren**. Begriffe und Definitionen landen in der Zwischenablage. Bilder, Formatierungen, Lernverlauf und Wiederholungsplan des Sets sind nicht enthalten.

Trotzdem eignet sich dieser Text als verlässliche Sicherung der Karteninhalte. Speichere zunächst eine unveränderte Kopie, prüfe anschließend die Trennzeichen und teste einige Karten im Zielsystem, bevor du das komplette Set überträgst.

![Textilrestauratorin bewahrt ein intaktes Paarmuster und prüft drei Abschnitte einer Arbeitskopie](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png)

## Kurz erklärt: So exportierst du ein Quizlet-Set

Melde dich auf der Quizlet-Website an und öffne unter **Deine Bibliothek → Lernsets** ein Set, das du selbst erstellt hast. Wähle **Mehr → Exportieren**, lege die Anordnung von Begriffen und Definitionen fest und klicke auf **Text kopieren**. Füge den Inhalt danach in einen reinen Texteditor ein.

Falls der Exportdialog passende Trennzeichen zur Auswahl stellt, empfehle ich einen Tabulator zwischen Begriff und Definition sowie eine neue Zeile zwischen den Karten. Speichere die erste Kopie unverändert als UTF-8-Datei mit der Endung `.txt`. Quizlet erstellt auf diesem Weg weder eine CSV-Datei noch eine vollständige Sicherung des Kartensatzes. Auch Bilder und kopierte Sets werden nicht exportiert.

Diese Einschränkungen nennt Quizlet in seiner [offiziellen Anleitung zum Exportieren von Sets](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets).

## Quizlet-Sets exportieren: die genauen Schritte für 2026

Der Export ist derzeit nur auf der Website verfügbar, nicht in den mobilen Quizlet-Apps. Öffne Quizlet im Browser und gehe so vor:

1. [Melde dich bei Quizlet an](https://quizlet.com/login).
2. Wähle **Deine Bibliothek**.
3. Wähle **Lernsets**.
4. Öffne das Set, das du exportieren möchtest.
5. Öffne das Menü **Mehr**.
6. Wähle **Exportieren**.
7. Lege fest, wie Begriffe und Definitionen angeordnet werden sollen.
8. Wähle **Text kopieren**.
9. Füge den kopierten Text in einen reinen Texteditor ein und speichere die Datei in UTF-8.

Fehlt die Option **Exportieren**, prüfe zwei Dinge: Hast du das ursprüngliche Set selbst erstellt, und verwendest du die Website? Laut Quizlet lassen sich kopierte Sets nicht exportieren, auch wenn die Kopie in deiner Bibliothek angezeigt wird.

## Wähle eine Anordnung, die sich gut prüfen lässt

Im Exportdialog kannst du bestimmen, wie Begriffe und Definitionen angeordnet werden. Die aktuellen Bezeichnungen der Trennzeichen nennt Quizlet auf seiner Hilfeseite allerdings nicht. Für normale Karten mit Vorder- und Rückseite ist folgende Struktur sinnvoll, sofern dein Dialog sie zulässt:

- ein Tabulator zwischen Begriff und Definition;
- eine neue Zeile zwischen den Karten.

Tabulatoren sind praktisch, weil Definitionen häufig Kommas oder Semikolons enthalten. Ein einfacher Export sieht zum Beispiel so aus:

```text
photosynthesis	Process plants use to convert light energy into chemical energy
mitosis	Cell division that produces two genetically identical daughter cells
café	coffee
```

Der breite Abstand innerhalb jeder Zeile ist ein Tabulator. Jede Karte steht in einer eigenen Zeile.

Der Inhalt ist damit zwar tabulatorgetrennt, Quizlet hat ihn aber lediglich in die Zwischenablage kopiert. Eine `.tsv`- oder `.csv`-Datei wurde weder erstellt noch heruntergeladen. Wenn du `cards.txt` in `cards.csv` umbenennst, konvertierst du damit keine Daten und reparierst auch keine Trennzeichen.

## Speichere zwei Kopien, bevor du den Text bereinigst

Füge den Quizlet-Export in einen reinen Texteditor ein und lege anschließend zwei Dateien an:

1. **Rohkopie:** Speichere den eingefügten Inhalt exakt wie erhalten und in UTF-8, zum Beispiel als `biology-quizlet-raw.txt`.
2. **Arbeitskopie:** Dupliziere die Datei als `biology-quizlet-clean.txt` und ändere ausschließlich diese Kopie.

Lass beide Dateien im `.txt`-Format. Anki kann reine Textdateien direkt importieren. Wenn du die Daten später in einer Tabellenkalkulation bearbeitest, exportiere dort eine echte CSV- oder TSV-Datei, statt nur die Dateiendung zu ändern. Entscheidend sind die Trennzeichen und die UTF-8-Kodierung, nicht die Endung.

Bewahre die Rohkopie außerdem an einem gesicherten Ort auf. Falls beim Import Felder zusammenrutschen, eine Zeile fehlt oder Zeichen beschädigt werden, kannst du auf die ursprünglichen Daten zurückgreifen, ohne erneut aus Quizlet exportieren zu müssen.

## Was beim Export erhalten bleibt – und was nicht

Quizlet beschreibt die Funktion als Export der **Begriffe und Definitionen** eines selbst erstellten Sets. Gehe bei allen anderen Inhalten davon aus, dass sie nicht übertragen werden, sofern du sie nicht im eingefügten Text wiederfindest.

Der kopierte Text kann Folgendes erhalten:

- die Begriffe und Definitionen aus dem kopierten Ergebnis;
- die dort vorhandene Reihenfolge der Zeilen;
- Unicode-Zeichen, wenn du die Datei in UTF-8 speicherst und wieder öffnest;
- die Feldgrenzen, solange das gewählte Trennzeichen nicht auch in einem Begriff oder einer Definition vorkommt.

Nicht erhalten bleiben:

- Bilder – Quizlet weist ausdrücklich darauf hin, dass Bilder aus urheberrechtlichen Gründen nicht exportiert werden können;
- Rich-Text-Darstellung, Schriftarten, Hervorhebungen und Layout;
- Set-Ordner, Kontostruktur, Lernmodi und andere Einstellungen der Quizlet-Oberfläche;
- Wiederholungsverlauf, Beherrschungsstatus und Zeitplanung;
- ein Quizlet-Paket, das sich später vollständig wiederherstellen lässt.

Genau deshalb führt die Suche nach **Quizlet-Karten herunterladen** oft in die Irre. Der Export sichert den Kartentext, aber weder das vollständige Quizlet-Set noch dessen Lernstand in wiederherstellbarer Form.

## Prüfe den Text vor dem Import

Nimm dir dafür Zeit, solange das ursprüngliche Set noch geöffnet ist. Auffällige Zeilen lassen sich viel leichter klären, wenn du sie direkt mit der Quelle vergleichen kannst.

### Mache Tabulatoren und Zeilenumbrüche sichtbar

Wenn du Tabulatoren als Trennzeichen gewählt hast, aktiviere in deinem Editor **Leerraum darstellen**, **unsichtbare Zeichen anzeigen** oder die entsprechende Funktion. Eine gewöhnliche Zeile mit zwei Feldern enthält genau einen Tabulator: links davon steht der Begriff, rechts davon die Definition.

Vergleiche die Zahl der nicht leeren Zeilen mit der Kartenzahl in Quizlet. Das funktioniert allerdings nur, wenn jede Karte genau eine Zeile belegt. Weichen die Zahlen voneinander ab, suche nach Leerzeilen, leeren Feldern oder Definitionen mit eigenen Zeilenumbrüchen.

### Prüfe mehrzeilige Definitionen

Ein Zeilenumbruch innerhalb einer Definition sieht genauso aus wie der Zeilenumbruch zwischen zwei Karten. Enthält eine Definition eine Liste oder mehrere Absätze, kann sie deshalb die Struktur „eine Karte pro Zeile“ aufbrechen.

Lass die Rohkopie unverändert. Vergleiche die betroffene Karte mit Quizlet. Danach kannst du die Definition in der Arbeitskopie zu einer Zeile zusammenführen oder in eine Tabellenkalkulation übernehmen, die mehrzeilige Felder korrekt in Anführungszeichen setzt. Anki unterstützt ebenfalls mehrzeilige Felder in Anführungszeichen und HTML-Zeilenumbrüche mit `<br>`, wie weiter unten beschrieben.

### Suche nach Trennzeichen innerhalb der Inhalte

Ein Tabulator in einem Begriff oder einer Definition erzeugt unerwartet ein drittes Feld. Suche deshalb nach Zeilen mit mehr als einem Tabulator. Hast du stattdessen Kommas oder Semikolons gewählt, prüfe sie besonders sorgfältig: In normalem Fließtext kommen sie deutlich häufiger vor.

### Öffne die UTF-8-Datei erneut

Schließe den Editor und öffne die gespeicherte Datei noch einmal. Prüfe Wörter mit Akzenten, nicht lateinische Schriften, mathematische Symbole und Zeichen wie typografische Apostrophe. Das Beispielwort `café` muss weiterhin als `café` erscheinen und darf nicht durch Ersatzzeichen oder fehlerhafte Zeichenfolgen beschädigt sein.

### Prüfe Anfang, Mitte und Ende

Kontrolliere Zeilen am Anfang, in der Mitte und am Ende sowie besonders lange Definitionen. Suche vor dem Import nach exakten Duplikaten, wiederholten Begriffen, leeren Vorder- oder Rückseiten und Zeilen mit zusätzlichen Feldern.

Auch die Formatierung braucht eine manuelle Kontrolle. Verlasse dich nicht darauf, dass ein Nur-Text-Export Fettschrift, Kursivschrift, Farben, Layout oder den Kontext eines Bildes überträgt. Hat eine Formatierung die Bedeutung der Karte beeinflusst, formuliere diese Bedeutung ausdrücklich im Text.

## Weg 1: Quizlet-Text in Flashcards übernehmen

[Flashcards Open Source App](/features/) hat keinen Ein-Klick-Importer für Quizlet oder CSV. Der direkte Import der App ist für das eigene Workspace-Paket vorgesehen. Ein Quizlet-Textexport kann stattdessen als Ausgangsmaterial dienen, aus dem du mit KI-Unterstützung Kartenentwürfe erstellst.

In der Praxis nutzt du den KI-Chat als Entwurfsschritt:

1. Lass die rohe Quizlet-Sicherung im `.txt`-Format unverändert.
2. Hänge die bereinigte `.txt`-Arbeitsdatei an den KI-Chat in Flashcards an. Eine echte `.csv`-Datei aus einer Tabellenkalkulation funktioniert ebenfalls, wenn du die Daten bewusst konvertiert hast.
3. Nenne das verwendete Trennzeichen und bitte den Assistenten, fehlerhafte Zeilen zu markieren, statt ihren Inhalt zu erraten.
4. Vergleiche die vorgeschlagene Kartenzahl sowie alle Vorder- und Rückseiten mit der Arbeitsdatei.
5. Speichere nur die geprüften Karten, die mit der Quelle übereinstimmen.

Dafür kannst du zum Beispiel diesen Prompt verwenden:

> Lies diese Datei als tabulatorgetrennte Paare aus Begriff und Definition. Erstelle für jede gültige Zeile den Entwurf einer Karte mit Vorder- und Rückseite. Übernimm den Wortlaut der Quelle und nicht lateinische Zeichen unverändert. Liste fehlerhafte, leere oder mehrdeutige Zeilen separat auf und erfinde keinen fehlenden Text.

Im [Getting-Started-Leitfaden](/docs/getting-started/) ist beschrieben, dass die gehostete App einen KI-Chat mit Dateianhängen bietet. Der aktuelle Chat akzeptiert TXT- und CSV-Anhänge. Er erstellt mit KI-Unterstützung Kartenentwürfe; ein direkter oder verlustfreier Import ist das nicht. Prüfe Definitionen mit mehreren Zeilen oder Tabulatoren daher besonders sorgfältig. [So korrigierst du KI-generierte Flashcards](/blog/how-to-fix-ai-flashcards/) enthält eine kompakte Prüfliste dafür.

Offenlegung: Ich entwickle Flashcards Open Source App. Der hier beschriebene Weg bildet die aktuellen Möglichkeiten und Grenzen des Produkts ab. Er ist weder eine neutrale Empfehlung noch ein Versprechen vollständiger Quizlet-Kompatibilität.

## Weg 2: Von Quizlet zu Anki wechseln

Anki kann Textdateien direkt importieren. Laut [offiziellem Handbuch zum Textimport](https://docs.ankiweb.net/importing/text-files.html) unterstützt Anki reine UTF-8-Textdateien mit Tabulatoren, Kommas oder Semikolons als Feldtrennzeichen.

So importierst du eine tabulatorgetrennte Arbeitskopie:

1. Öffne den Import in Anki und wähle die UTF-8-kodierte `.txt`-Datei aus.
2. Prüfe in den Importoptionen, ob Anki den Tabulator als Feldtrennzeichen erkannt hat. Ändere das Trennzeichen, wenn die Vorschau nicht stimmt.
3. Wähle den gewünschten Notiztyp und das Zieldeck.
4. Ordne das erste Textfeld der Vorderseite und das zweite der Rückseite zu.
5. Prüfe die Vorschau auf verschobene, leere oder zusätzliche Felder.
6. Lege fest, wie Anki mit Übereinstimmungen und Duplikaten umgehen soll.
7. Importiere zuerst eine kleine Stichprobe und erst danach das vollständige Set.

Anki leitet die erwartete Zahl der Felder aus der ersten Zeile ab, die kein Kommentar ist. Spätere Datensätze mit weniger Feldern erhalten leere Werte; zusätzliche Felder werden nicht importiert. Solche Verschiebungen solltest du bereits in der Vorschau erkennen und korrigieren.

Für mehrzeilige Definitionen unterstützt Anki Felder in Anführungszeichen, die sich über mehrere Zeilen erstrecken. Wenn **HTML in Feldern zulassen** aktiviert ist, kann Anki außerdem `<br>` als Zeilenumbruch interpretieren. Entscheide dich bewusst für eine der beiden Methoden und kontrolliere die Vorschau. Füge nicht allein deshalb HTML ein, um eine Formatierung zu retten, die schon beim Kopieren aus Quizlet verloren ging.

Standardmäßig erkennt Anki übereinstimmende Notizen desselben Notiztyps anhand des ersten Feldes. Je nach Importoption kann Anki eine vorhandene Notiz aktualisieren, die Übereinstimmung ignorieren oder eine neue Notiz anlegen. Prüfe wiederholte Begriffe vor dem vollständigen Import. Eine unbeabsichtigte Aktualisierung kann andere Felder einer bestehenden Notiz verändern.

## Wiederholungsverlauf und Zeitplanung beginnen von vorn

Der Quizlet-Export enthält Begriffe und Definitionen. Es fehlen jedoch die Daten dazu, was und wann du gelernt hast und wie der Lernalgorithmus jede Karte bewertet hat.

Neue Karten in Flashcards beginnen mit einem neuen FSRS-Zustand. Auch neu in Anki importierte Notizen starten als neues Lernmaterial. Aktualisiert ein Anki-Import eine bereits vorhandene, übereinstimmende Notiz, kann deren bisherige Zeitplanung bestehen bleiben. Sie stammt aber weiterhin nicht aus Quizlet. Keiner der beiden Wege kann aus diesem Export über die Zwischenablage den Quizlet-Lernverlauf rekonstruieren.

Bei einem großen Set, das du schon gut kennst, können die ersten Wiederholungen leichter ausfallen oder häufiger erscheinen als in deinen bisherigen Quizlet-Sitzungen. Übertrage zunächst eine repräsentative Auswahl und beobachte, wie sich die neue Warteschlange verhält, bevor du das gesamte Set migrierst.

## Kopierte Sets, öffentliche Sets und die Rechtefrage

Quizlet erlaubt nicht, ein Set zu exportieren, das du von einem anderen Nutzer kopiert hast. Sichtbarkeit und Erlaubnis sind nicht dasselbe: Ein öffentliches Set darf nicht automatisch an anderer Stelle vervielfältigt werden.

In seinen [Grundlagen zum Urheberrecht](https://help.quizlet.com/hc/en-us/articles/360029925172-Copyright-basics) empfiehlt Quizlet, selbst erstellte Originalinhalte zu veröffentlichen. Eine Wiederverwendung kann demnach zulässig sein, wenn du die Erlaubnis oder eine Lizenz dafür hast, wenn das Material gemeinfrei ist oder wenn eine gesetzliche Ausnahme gilt. Da sich das Urheberrecht je nach Land unterscheidet, ist dieser Artikel keine Rechtsberatung.

Gehört das Set nicht dir, arbeite mit deinen eigenen Ausgangsnotizen, bitte den Ersteller um Erlaubnis oder eine Quelldatei oder formuliere ein kleineres persönliches Deck in eigenen Worten. Scraping oder manuelles Kopieren ist kein Ersatz für die fehlende Exportfunktion.

## Lösche das Quizlet-Set noch nicht

Behalte das Quizlet-Set und lösche auch das dazugehörige Konto erst, wenn alle folgenden Punkte erfüllt sind:

- die unveränderte `.txt`-Rohkopie in UTF-8 liegt an einem gesicherten Ort;
- die Arbeitsdatei lässt sich nach dem Schließen wieder fehlerfrei öffnen;
- die erwartete Kartenzahl stimmt mit den geprüften Zeilen überein, wobei mehrzeilige Karten berücksichtigt sind;
- Tabulatoren, Zeilenumbrüche, Duplikate und leere Felder wurden kontrolliert;
- Akzente, nicht lateinische Schriften, Symbole und Satzzeichen werden weiterhin korrekt angezeigt;
- notwendige Bilder oder Bedeutungen aus der ursprünglichen Formatierung wurden anhand von Quellen wiederhergestellt, die du verwenden darfst;
- ein kleiner Test hat in Flashcards oder Anki die richtigen Vorder- und Rückseiten ergeben;
- du hast im Zielsystem eine Stichprobe geprüft und akzeptiert, dass die Zeitplanung neu beginnt.

Bewahre die rohe Textdatei auch nach diesen Prüfungen als separates Backup auf. Wenn bei einem späteren Import oder einer Bearbeitung etwas schiefgeht, ist sie die am leichtesten zu kontrollierende Ausgangsversion.

Falls du dich noch für ein Zielsystem entscheiden musst, hilft dir der [Vergleich der Quizlet-Alternativen](/blog/quizlet-alternative/) bei den grundsätzlichen Produktunterschieden. Müssen die exportierten Karten selbst überarbeitet werden, lies vor dem vollständigen Import [So erstellst du bessere Flashcards](/blog/how-to-make-better-flashcards/).
