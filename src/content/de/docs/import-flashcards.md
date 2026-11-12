---
title: Karteikarten in Nibomo importieren
description: Übernimm Karten aus Quizlet, Anki oder einer anderen Karteikarten-App. Wähle das passende Exportformat und prüfe das Ergebnis vor einem größeren Import.
---

Öffne [Nibomo](https://app.nibomo.com/?locale=de), wechsle in den Arbeitsbereich, in dem du die Karten speichern möchtest, und wähle **Bibliothek > Import**. Unter **Aus einer anderen App** wählst du die App aus, die du bisher verwendet hast. Jede App hat einen eigenen Eintrag, auch wenn sie dasselbe Dateiformat wie eine andere verwendet.

Die folgenden Optionen sind in der Web-App verfügbar. Wenn du das Menü oder die gewünschte Quelle auf dem iPhone, iPad, Mac oder unter Android nicht siehst, öffne die Web-App. Falls du Nibomo auf deinem Gerät als Gast nutzt, melde dich zuerst dort an. Melde dich dann in der Web-App mit demselben Nibomo-Konto an und wähle vor dem Import den gewünschten Arbeitsbereich aus.

## Wähle die Quelle deiner Karten

| Quelle | Was du brauchst | Importmethode |
| --- | --- | --- |
| Quizlet | Kopierter Text aus dem Export | Füge ihn auf der Importseite für Quizlet ein |
| Anki | Ein Deck als `.apkg` oder eine Sammlung als `.colpkg` | Dateien auswählen |
| Noji | `.csv` oder `.ofc` | Dateien auswählen |
| Knowt | `.pdf` | Dateien auswählen |
| RemNote | `.apkg`, `.md` oder `.txt` | Dateien auswählen |
| Brainscape | `.csv` | Dateien auswählen |
| StudySmarter | `.csv` | Dateien auswählen |
| Cram | `.csv` | Dateien auswählen |
| Mochi | `.mochi` | Dateien auswählen |
| SuperMemo | `.xml` | Dateien auswählen |
| AlgoApp (früher AnkiApp) | `.zip` oder `.xml` | Dateien auswählen |
| Andere App | `.csv`, `.txt`, `.xlsx`, `.pdf`, `.json`, `.xml`, `.md`, `.docx` oder `.zip` | Wähle die Dateien unter **Aus einer anderen App importieren** aus |
| Tabelle | Kopierte Zeilen mit je einer Vorder- und Rückseite pro Karte | Füge sie unter **Aus einer Tabelle importieren** ein |
| Nibomo | Eine aus Nibomo exportierte Datei namens `flashcards.zip` | Prüfe die Vorschau unter **Aus Nibomo importieren** |

Falls dein Importmenü den früheren Namen von AlgoApp anzeigt, suche nach **AnkiApp**. Anki hat einen eigenen Eintrag.

Wenn du eine ältere Excel-Datei im Format `.xls` hast, speichere sie vor dem Import als `.xlsx` oder `.csv`. Du kannst auch die Spalten für Vorder- und Rückseite kopieren und [beim Tabellenimport einfügen](#karten-aus-einer-tabelle-einfügen).

## Karten aus einer anderen Karteikarten-App importieren

1. Exportiere die gewünschten Karten in der ursprünglichen App. Öffne in Quizlet dein Set, wähle **Export** (Exportieren) und kopiere den Text. Ein Tabulator zwischen Begriff und Definition und eine neue Zeile pro Karte eignen sich als Trennzeichen. Du kannst Sets nur auf der Quizlet-Website exportieren, und zwar nur Originalsets, die du selbst erstellt hast.
2. Wähle in Nibomo **Bibliothek > Import** und öffne den passenden Eintrag. Füge bei Quizlet den kopierten Text ein. Wähle für andere Quellen die exportierte Datei oder die exportierten Dateien aus. Wenn deine App keinen eigenen Eintrag hat, aber ein unterstütztes Format wie PDF exportiert, wähle **Aus einer anderen App importieren**.
3. Wähle **Import starten**. Nibomo öffnet einen neuen KI-Chat und sendet die Importanfrage mit den Dateien oder dem eingefügten Text. Dafür brauchst du eine Internetverbindung. Jede Datei darf beim KI-Import höchstens **30 MiB** groß sein. Ist sie größer, versuche, kleinere Decks oder Sets einzeln zu exportieren.
4. Prüfe das Ergebnis in der **Bibliothek**. Der KI-Chat kann die Karten in mehreren Etappen speichern. Wenn er zwischendurch aufhört, sieh nach, welche Karten bereits in Nibomo sind, und bitte ihn, mit dem Rest fortzufahren, bevor du den gesamten Export erneut importierst.

### Probiere zuerst ein kleines Deck aus

Bewahre den ursprünglichen Export auf und beginne mit einem kleinen Deck oder Set. Vergleiche die Kartenanzahl und prüfe bei einigen Karten Vorderseite, Rückseite und Tags sowie Bilder oder besondere Formatierungen, auf die du angewiesen bist. Wenn du vor dem Speichern eine Stichprobe sehen möchtest, hänge den Export in einem neuen KI-Chat an. Bitte den Chat, dir einige Karten zu zeigen, ohne sie zu speichern. So kannst du eine Vorschau anfordern, ohne **Import starten** zu wählen.

Der KI-Import legt die Karten in Nibomo als neue Karten an. Der bisherige Wiederholungsverlauf und die Fälligkeitstermine werden nicht übernommen. Wie viel von der ursprünglichen Struktur, Formatierung und den Medien ankommt, hängt vom Export ab und davon, was der KI-Chat daraus lesen kann. Prüfe das Ergebnis, bevor du dich darauf verlässt oder etwas in der ursprünglichen App löschst.

## Karten aus einer Tabelle einfügen

Melde dich zuerst bei Nibomo an. Für einfache Karten mit je einer Vorder- und Rückseite wählst du **Bibliothek > Import > Aus einer Tabelle importieren**. Kopiere zwei Spalten ohne Kopfzeile und füge sie auf der Importseite ein. Für Tabellenzellen eignet sich **Tabulator** als Trennzeichen zwischen Vorder- und Rückseite und **Neue Zeile** als Trennzeichen zwischen den Karten. Wenn dein Text andere Trennzeichen verwendet, passe die Auswahl an.

Prüfe die Vorschau, korrigiere unvollständige Zeilen und wähle bei Bedarf Tags aus. Speichere die Karten über die Schaltfläche zum Importieren. Dieser Weg verwendet keinen KI-Chat.

## Eine ZIP-Datei aus Nibomo importieren

Melde dich zuerst bei Nibomo an. Wähle **Bibliothek > Import > Aus Nibomo importieren**, um eine zuvor aus Nibomo exportierte Datei namens `flashcards.zip` zu importieren. Wähle die ZIP-Datei aus, ohne sie zu entpacken. Prüfe in der Vorschau die Anzahl der Karten und Mediendateien sowie etwaige Warnhinweise. Bestätige dann den Import und sieh dir einzelne Karten und Mediendateien in der **Bibliothek** an. So kannst du Karten, Tags und Medien aus dem Paket übernehmen. Dieser Weg verwendet keinen KI-Chat.
