---
title: "Quizlet-Sets exportieren: So geht es 2026 (und warum „Exportieren“ fehlt)"
description: "So exportierst du ein Quizlet-Set über die Website. Falls „Exportieren“ fehlt, prüfe, ob du das Original erstellt hast, eine Kopie geöffnet hast oder die mobile App verwendest."
image: "/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png"
date: "2026-06-10"
updated: "2026-08-30"
keywords:
  - "Quizlet exportieren"
  - "Quizlet-Karteikarten exportieren"
  - "Quizlet-Export fehlt"
  - "Quizlet-Karteikarten herunterladen"
  - "Quizlet zu CSV"
  - "Quizlet zu Anki"
---

Wenn Quizlet die Schaltfläche **Exportieren** nicht anzeigt, prüfe zuerst zwei Dinge: Hast du das ursprüngliche Set erstellt, und verwendest du die Quizlet-Website? Nur der ursprüngliche Ersteller kann ein Set exportieren, und die Funktion gibt es ausschließlich auf der Website. Eine Kopie lässt sich nicht exportieren, selbst wenn sie inzwischen in deiner Bibliothek liegt.

Sind beide Voraussetzungen erfüllt, dauert der Export nur einen Moment: Öffne das Set auf der Website, wähle **Mehr → Exportieren**, lege die Reihenfolge von Begriffen und Definitionen fest und klicke auf **Text kopieren**. Quizlet lädt keine Kartensatzdatei herunter. Der Text landet stattdessen in deiner Zwischenablage – ohne Bilder.

**Stand geprüft:** 30. August 2026, anhand der [offiziellen Exportanleitung von Quizlet](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets).

![Archivmitarbeiterin gleicht zwei passende Abholmarken ab und übergibt paarweise Textkarten; zwei Dokumentenhüllen liegen bereit, die Fotos bleiben hinter Glas](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png)

## Sollte die Schaltfläche „Exportieren“ überhaupt da sein?

Kläre das zuerst, bevor du versuchst, Quizlet-Karteikarten auf einem anderen Weg herunterzuladen:

| Deine Situation | Sollte „Exportieren“ verfügbar sein? | Nächster Schritt |
| --- | --- | --- |
| Du hast das ursprüngliche Set erstellt und auf der Quizlet-Website geöffnet | Ja, laut der Quizlet-Hilfeseite | Folge den Schritten unten |
| Du verwendest die iOS- oder Android-App | Nein, exportieren kannst du nur auf der Website | Öffne Quizlet in einem Browser und melde dich an |
| Du hast das Set eines anderen Nutzers kopiert | Nein, laut Quizlet lassen sich kopierte Sets nicht exportieren | Rechne nicht damit, dass die Kopie „Exportieren“ freischaltet |
| Du kannst das Set ansehen, hast es aber nicht erstellt | Nein, die Berechtigung zum Ansehen macht dich nicht zum Ersteller | Bitte den Ersteller um eine Quelldatei oder baue das Set aus Material neu auf, das du verwenden darfst |

Hast du das ursprüngliche Set erstellt und die Quizlet-Schaltfläche **Exportieren** fehlt trotzdem, prüfe dein Konto und das geöffnete Set: Du musst mit dem Konto des Erstellers angemeldet sein und das Original statt einer Kopie geöffnet haben. Die Quizlet-Hilfeseite nennt keinen zweiten Exportweg. Wende dich in diesem Fall an den Quizlet-Support, statt einem Downloader zu vertrauen, der diese Einschränkung angeblich umgehen kann.

## So exportierst du Quizlet-Karteikarten auf der Website

Für ein Set, das du selbst erstellt hast:

1. Melde dich auf der Quizlet-Website an.
2. Wähle **Deine Bibliothek**.
3. Wähle **Lernsets**.
4. Öffne das Set, das du exportieren möchtest.
5. Öffne das Menü **Mehr**.
6. Wähle **Exportieren**.
7. Lege fest, in welcher Reihenfolge Begriffe und Definitionen ausgegeben werden sollen.
8. Wähle **Text kopieren**.
9. Füge das Ergebnis in einen reinen Texteditor ein.

Damit ist der aktuelle Ablauf abgeschlossen. Eine zusätzliche Schaltfläche zum Herunterladen gibt es nicht.

Für einfache Karten mit Vorder- und Rückseite empfehle ich einen Tabulator zwischen Begriff und Definition und eine neue Zeile nach jeder Karte. Das ist ein praktischer Rat, keine Vorgabe von Quizlet. Tabulatoren lassen sich meist leichter kontrollieren als Kommas, weil Kommas in ganz normalen Definitionen häufig vorkommen.

Eine saubere Datei mit zwei Karten sieht so aus – in jeder Zeile steht genau ein Tabulator:

```text
photosynthesis	Process plants use to convert light energy into chemical energy
mitosis	Cell division that produces two genetically identical daughter cells
```

## Was beim Quizlet-Export erhalten bleibt

Quizlet grenzt die Funktion klar ein: Exportiert werden die **Begriffe und Definitionen** eines Sets, das du selbst erstellt hast. Bilder lassen sich laut Quizlet nicht exportieren.

Orientiere dich deshalb am eingefügten Ergebnis. Was dort als Text, Trennzeichen oder Zeilenumbruch erscheint, kannst du in einer Datei speichern. Die Quizlet-Hilfeseite verspricht nicht, Ordner, Lernmodi, Formatierungen, Lernstand, Wiederholungsverlauf oder Zeitplanung zu übernehmen.

Du erhältst also eine Kopie des Kartentextes, kein wiederherstellbares Quizlet-Backup. Dieser Unterschied ist auch wichtig, wenn du nach „Quizlet-Karteikarten herunterladen“ gesucht hast: Quizlet kopiert den Text in die Zwischenablage; die Datei erstellst du selbst.

## Speichere zuerst eine unbearbeitete UTF-8-Kopie

Sorge dafür, dass du jederzeit auf den unveränderten Export zurückgreifen kannst:

1. Füge den Export in einen reinen Texteditor ein.
2. Speichere ihn als UTF-8, zum Beispiel unter `biology-quizlet-raw.txt`.
3. Dupliziere die Datei als `biology-quizlet-working.txt`.
4. Lass die Rohdatei unverändert. Bearbeite nur die Arbeitskopie.

Prüfe die Arbeitsdatei vor dem Import, während das Quizlet-Set noch geöffnet ist:

- Blende Leerzeichen und andere unsichtbare Zeichen ein. Kontrolliere dann, wo Tabulatoren und Zeilenumbrüche stehen.
- Suche innerhalb der Begriffe und Definitionen nach dem gewählten Trennzeichen. Ein zusätzlicher Tabulator kann unerwartet ein drittes Feld erzeugen.
- Achte auf Definitionen mit eigenen Zeilenumbrüchen; sie können fälschlich als zusätzliche Karten erkannt werden.
- Vergleiche Anfang, Mitte und Ende der Datei mit dem Quizlet-Set. Nimm dabei auch die längsten Definitionen mit.
- Schließe die Datei und öffne sie erneut. Prüfe anschließend Akzente, nichtlateinische Schriften, Symbole und typografische Satzzeichen.
- Markiere leere Felder, Duplikate und unregelmäßige Zeilen, statt stillschweigend zu raten, wie sie repariert werden sollten.

Vergleiche die Anzahl der Zeilen nur dann mit der Anzahl der Karten, wenn jede Karte genau eine Zeile belegt. Bei mehrzeiligen Definitionen funktioniert diese Abkürzung nicht.

Bewahre die Rohdatei auch dann auf, wenn die Arbeitskopie bereits korrekt aussieht. Falls ein Import ein Feld verschiebt oder Inhalte auslässt, hast du weiterhin eine unveränderte Referenz.

## Quizlet zu CSV: Erstelle die Datei gezielt

Eine `.txt`-Datei in `.csv` umzubenennen ist keine Konvertierung. Eine CSV-Datei braucht einheitliche Trennzeichen und korrekt gesetzte Anführungszeichen für Felder mit Kommas, Anführungszeichen oder mehrzeiligen Inhalten.

So erstellst du aus dem Quizlet-Export eine verlässliche CSV-Datei:

1. Lass die Sicherung des Rohtexts unverändert.
2. Öffne die Arbeitskopie in einem Tabellenprogramm und wähle genau das Trennzeichen, das du in Quizlet verwendet hast.
3. Prüfe, ob jeder erwartete Datensatz zwei Spalten enthält: Begriff und Definition.
4. Kontrolliere Anführungszeichen, Trennzeichen und mehrzeilige Definitionen.
5. Exportiere die Datei als UTF-8-CSV.
6. Öffne die CSV anschließend erneut in einer separaten Vorschau, bevor du sie anderweitig verwendest.

Ein Tabellenprogramm kann die Anführungszeichen ergänzen, die CSV benötigt. Tabulatoren pauschal durch Kommas zu ersetzen schafft das nicht zuverlässig.

## Nutze den Text in Flashcards zunächst als zu prüfenden Entwurf

[Flashcards Open Source App](/features/) hat keinen direkten Quizlet-Importer. In der Web-App kannst du eine TXT- oder CSV-Datei an den KI-Chat anhängen und daraus Kartenentwürfe erstellen lassen. Das ist keine verlustfreie Migration.

1. Bewahre die rohe Quizlet-Datei außerhalb der App auf.
2. Hänge die bereinigte TXT-Datei oder die gezielt erstellte CSV-Datei im KI-Chat von Flashcards an.
3. Erkläre dem Assistenten, welche Felder und welches Trennzeichen die Datei verwendet.
4. Bitte zunächst um eine kleine Vorschau und sage ausdrücklich, dass noch keine Karten gespeichert werden sollen.
5. Vergleiche die vorgeschlagene Kartenzahl sowie Vorder- und Rückseiten mit der Arbeitsdatei.
6. Speichere nur die Karten, die du geprüft hast.

Der [Leitfaden für den Einstieg](/docs/getting-started/) beschreibt den KI-Chat mit Workspace-Daten und Dateianhängen. Ein vorsichtiger Prompt könnte so aussehen:

> Lies diese Datei als tabulatorgetrennte Paare aus Begriff und Definition. Speichere noch keine Karten. Erstelle zunächst eine kleine Stichprobe, behalte den Wortlaut der Quelle und nichtlateinische Zeichen bei und führe fehlerhafte, leere oder mehrdeutige Zeilen separat auf, statt zu raten.

Das ist praktisch, wenn die alten Karten ohnehin bereinigt werden müssen. Es beweist allerdings nicht, dass jede Zeile korrekt übertragen wurde. Arbeite deshalb die Prüfliste in [So korrigierst du KI-generierte Flashcards](/blog/how-to-fix-ai-flashcards/) durch und teste einen kleinen Kartensatz, bevor du den Rest erstellst.

In Flashcards erstellte Karten beginnen mit einem neuen Lernverlauf. Der Quizlet-Text enthält weder die bisherigen Wiederholungen noch den Planungsstatus, die für die Fortsetzung des alten Wiederholungsplans nötig wären.

> **Hinweis in eigener Sache:** Ich entwickle Flashcards Open Source App. Dieser Ablauf beschreibt die aktuellen Grenzen des Produkts; er verspricht keine vollständige Quizlet-Kompatibilität.

## Quizlet zu Anki: Nutze den Textimport von Anki

Laut Ankis [offiziellem Handbuch zum Textimport](https://docs.ankiweb.net/importing/text-files.html) kannst du reine UTF-8-Textdateien importieren, deren Felder durch Kommas, Semikolons oder Tabulatoren getrennt sind.

Für eine tabulatorgetrennte Arbeitskopie:

1. Öffne den Import in Anki und wähle die UTF-8-Textdatei aus.
2. Prüfe in der Vorschau, ob Anki den Tabulator erkannt hat. Ändere andernfalls die Trennzeichen-Einstellung.
3. Wähle den Notiztyp und das Zieldeck.
4. Ordne das erste Feld der Vorderseite und das zweite der Rückseite zu.
5. Prüfe die Vorschau auf leere, verschobene oder zusätzliche Felder.
6. Kontrolliere vor dem Import, wie Anki mit Duplikaten und Aktualisierungen umgehen soll.

Anki ermittelt die erwartete Anzahl der Felder anhand der ersten Zeile, die kein Kommentar ist. In späteren Datensätzen bleiben fehlende Felder leer; zusätzliche Felder werden nicht importiert. Deshalb ist die Vorschau so wichtig: Schon ein versehentliches Trennzeichen kann die Struktur einer Zeile verändern.

Für mehrzeilige Definitionen musst du dich ebenfalls für eine Variante entscheiden. Anki unterstützt Felder in Anführungszeichen, die sich über mehrere Zeilen erstrecken. Alternativ kann Anki `<br>` als Zeilenumbruch lesen, wenn **HTML in Feldern zulassen** aktiviert ist. Wähle eine Methode und prüfe sie zuerst mit einer kleinen Kopie der Daten, bevor du die vollständige Datei importierst.

Anki kann eine importierte Notiz standardmäßig anhand ihres ersten Feldes mit einer vorhandenen Notiz desselben Typs abgleichen. Die übrigen Felder werden dann aktualisiert. In den Importoptionen kannst du Duplikate stattdessen ignorieren oder als neue Notizen hinzufügen. Beim Aktualisieren einer vorhandenen Anki-Notiz kann deren Anki-Zeitplanung erhalten bleiben. Die Quizlet-Zeitplanung wird über die Textdatei jedoch nicht übertragen.

## Behalte das Original, bis der neue Kartensatz zuverlässig funktioniert

Der offizielle Quizlet-Weg endet bei selbst erstellten Sets auf der Website mit **Text kopieren**. Scraping-Skripte, mutmaßliche private Endpunkte und Downloader von Drittanbietern sind davon getrennte, nicht unterstützte Verfahren. Sie machen aus einer Kopie oder einem Set, das du nur ansehen kannst, keinen offiziellen Export.

Wenn du statt einer einmaligen Kopie eine wiederkehrende Automatisierung brauchst, erklärt der [aktuelle Stand der Quizlet-API](/blog/quizlet-api/), welche Möglichkeiten offiziell unterstützt werden. Gehört das Set nicht dir, bitte den Ersteller um eine Quelldatei oder baue aus deinen eigenen Notizen einen kleineren Kartensatz neu auf. [So erstellst du bessere Flashcards](/blog/how-to-make-better-flashcards/) hilft dir, diesen neuen Kartensatz zu verbessern, statt jede alte Zeile zu kopieren.

Lösche das ursprüngliche Quizlet-Set erst, wenn:

- die rohe UTF-8-Datei an einem gesicherten Ort gespeichert ist;
- die Arbeitsdatei nach dem erneuten Öffnen weiterhin die erwarteten Zeichen und Trennzeichen enthält;
- mehrzeilige Felder, leere Felder, Duplikate und unregelmäßige Zeilen geprüft wurden;
- wichtiger Bildkontext aus einer Quelle wiederhergestellt wurde, die du verwenden darfst; und
- ein kleiner Test im Zielsystem die richtigen Vorder- und Rückseiten ergeben hat.

Bewahre die rohe Textdatei auch danach auf. Sie ist die einfachste unabhängige Referenz, falls bei einem späteren Import etwas falsch aussieht. Wenn du noch überlegst, wohin die Karten sollen, zeigt der [Vergleich der Quizlet-Alternativen](/blog/quizlet-alternative/) die grundsätzlichen Unterschiede.
