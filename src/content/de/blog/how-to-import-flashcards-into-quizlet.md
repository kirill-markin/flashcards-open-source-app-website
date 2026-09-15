---
title: "Karteikarten aus Excel, Google Sheets oder Text in Quizlet importieren"
description: "Importiere eine zweispaltige Wortliste in Quizlet mit Tabulatoren und Zeilenumbrüchen. Behebe aufgeteilte Definitionen, überzählige Karten und CSV-Probleme vor dem Veröffentlichen."
date: "2026-09-15"
image: "/blog/how-to-import-flashcards-into-quizlet.png"
keywords:
  - "Karteikarten in Quizlet importieren"
  - "Quizlet Importformat"
  - "Quizlet Import aus Excel"
  - "Google Sheets in Quizlet importieren"
  - "Quizlet Import mit Tabulatoren"
---

„Red, green, blue“ sieht nach einer ganz normalen Karteikartenantwort aus. Wenn du aber Kommas als Trennzeichen zwischen Begriff und Definition verwendest, ist durch die Kommas in der Antwort nicht mehr eindeutig, wo die Definition beginnt. Ein paar Satzzeichen können aus einer vorbereiteten Wortliste eine Menge Nacharbeit machen.

Um Karteikarten aus Excel, Google Sheets oder Text in Quizlet zu importieren, beginnst du mit zwei Spalten: eine für Begriffe, eine für Definitionen. Kopiere die Daten, füge sie in das Importformular auf der Website ein und wähle Tabulatoren zwischen den Feldern sowie Zeilenumbrüche zwischen den Karten. Probiere es zunächst mit vier Zeilen, damit du jedes Paar prüfen kannst, bevor du die gesamte Liste überträgst.

![Ein Töpfer ordnet Keramiktassen ihren passenden Untertassen in getrennten Reihen zu, bevor er sie in ein Regal stellt](/blog/how-to-import-flashcards-into-quizlet.png)

## Wo du das Importformular von Quizlet findest

Laut Quizlets Anleitung erfolgt der Import auf der Website. Als Trennzeichen dienen Kommas, Tabulatoren oder Bindestriche zwischen den Feldern und Semikolons oder Zeilenumbrüche zwischen den Karten. Die [offizielle Importanleitung](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) nennt diese Schritte:

1. Melde dich an und wähle **Create → Flashcard set**.
2. Gib einen Titel ein, wähle **Import** und füge deinen Text ein.
3. Passe die Trennzeichen an deine Eingabe an. Verwende für die Beispiele hier **Tab** (Tabulator) und **New line** (Zeilenumbruch).
4. Wähle **Import** und anschließend die Sprachen für Begriffe und Definitionen.
5. Prüfe die Karten, bevor du mit **Create** das Set speicherst und veröffentlichst.

Die Anleitung wurde am 15. September 2026 geprüft. Die folgenden Beispiele erklären, wie du den Text vorbereitest und kontrollierst; sie beschreiben keinen Test mit einem angemeldeten Konto.

## Beginne mit einem kleinen Tabellenbereich

Trage in Excel oder Google Sheets pro Zeile ein Paar aus Begriff und Definition ein. Hier ist ein Probelauf mit vier Karten:

| Begriff | Definition |
| --- | --- |
| rojo | red |
| azul | blue |
| verde | green |
| colores primarios de la luz | red, green, blue |

Kopiere nur die vier Datenzeilen in den beiden Spalten. Wenn die Überschriften in Zeile 1 stehen, markiere **A2:B5**. Lass die Überschriften beim Kopieren weg.

Das Ergebnis sollten vier Karten mit spanischen Begriffen und englischen Definitionen sein. Auf der letzten Karte muss „colores primarios de la luz“ vollständig auf einer Seite stehen und „red, green, blue“ vollständig auf der anderen. Die Kommas gehören zur Antwort.

Bereite anschließend deine eigene Tabelle nach diesem Muster vor. Arbeite mit einer Kopie, damit du das Original zum Vergleich behältst. Entferne leere Zeilen und lass Notizen und zusätzliche Spalten beim Markieren aus. Ergänze fehlende Begriffe oder Definitionen vor dem Kopieren.

Sortiere die beiden Spalten immer gemeinsam. Wenn du nur die Begriffe sortierst, passen die danebenstehenden Antworten nicht mehr dazu. Dann kann selbst ein Import mit der richtigen Kartenanzahl falsche Paare enthalten.

## Das Textformat braucht echte Tabulatoren

Dieselben vier Zeilen sehen als tabulatorgetrennter Text so aus. Zwischen jedem Begriff und seiner Definition steht genau ein echtes Tabulatorzeichen:

```text
rojo	red
azul	blue
verde	green
colores primarios de la luz	red, green, blue
```

Ein Tabulator ist ein eigenes Zeichen. Mehrere Leerzeichen sehen vielleicht ähnlich aus, werden aber nicht als Tabulator erkannt. Auch die eingegebenen Zeichen `\t` erzeugen keinen Tabulator. Falls das in deinem Texteditor umständlich ist, trage die Paare in zwei Tabellenspalten ein und kopiere die Zellen.

Jede Karte sollte in einer einzigen Textzeile stehen. Bei einem schmalen Fenster wird eine lange Definition möglicherweise über mehrere Bildschirmzeilen angezeigt. Dieser automatische Umbruch fügt dem Text kein Zeichen hinzu. Ein manuell eingefügter Zeilenumbruch innerhalb einer Tabellenzelle gehört dagegen zum Inhalt. Entferne solche eingebetteten Umbrüche, bevor du Zeilenumbrüche als Kartentrennzeichen verwendest.

Entferne auch Tabulatoren innerhalb eines Begriffs oder einer Definition. In diesem Format gehören sie ausschließlich zwischen die beiden Felder.

## Wenn deine Liste eine CSV-Datei ist

Öffne die CSV-Datei in einem Tabellenprogramm, bevor du den Import vorbereitest. Ein CSV-Datensatz wie dieser besteht aus zwei Feldern, wenn die Anführungszeichen nach den CSV-Regeln ausgewertet werden:

```text
"colores primarios de la luz","red, green, blue"
```

Die Antwort in den Anführungszeichen enthält Kommas. Ein Textfeld, das Eingaben an Kommas aufteilt, verarbeitet nicht unbedingt die CSV-Regeln. Verlasse dich dort also nicht darauf, dass Anführungszeichen die Antwort zusammenhalten.

Prüfe in Excel oder Google Sheets, ob der Datensatz genau zwei Zellen belegt. Kopiere dann diese Zellen für die tabulatorgetrennte Eingabe. Wenn sich die Antwort auf weitere Spalten verteilt hat, korrigiere zuerst die CSV-Importeinstellungen des Tabellenprogramms. Wenn du die fehlerhaft aufgeteilte Zeile kopierst, übernimmst du den Fehler in den Import.

Prüfe außerdem Werte, die das Tabellenprogramm anders interpretieren könnte. Wenn `0012` ein Code ist, den du lernen musst, verändert die Umwandlung in `12` die Karte. Vergleiche Kennungen, Datumsangaben, Anführungszeichen und Wörter mit Akzenten mit der Originaldatei, bevor du den Bereich kopierst.

## Wenn die Karten nicht zu deinen Zeilen passen

Suche beim Probelauf nach der ersten Abweichung. Ändere jeweils nur eine Sache und vergleiche das Ergebnis danach wieder mit denselben vier Ausgangszeilen.

| Was passiert | Wahrscheinliche Ursache | Was du ändern solltest |
| --- | --- | --- |
| Eine Antwort wird an Kommas geteilt | Komma als Trennzeichen zwischen Feldern ausgewählt | Zwei Spalten vorbereiten und Tabulator auswählen |
| „well-being“ wird innerhalb des Begriffs geteilt | Bindestrich als Trennzeichen zwischen Feldern ausgewählt | Bindestrich beibehalten und Felder mit einem Tabulator trennen |
| Aus einer Antwort werden mehrere Karten | Eingebettete Zeilenumbrüche in der Quelle | Die Antwort in eine einzige Textzeile schreiben |
| „Begriff“ und „Definition“ erscheinen als Karte | Überschriftenzeile mitkopiert | Nur die Datenzeilen auswählen |
| Beide Felder bleiben auf derselben Seite | Leerzeichen statt eines Tabulators | Einen zweispaltigen Tabellenbereich kopieren |

Eine Antwort, in der „first stage“ und „second stage“ auf getrennten Zeilen stehen, könnte zum Beispiel zu `first stage; second stage` werden. So bleiben beide Teile in einer Zeile. Lass **New line** als Trennzeichen zwischen Karten ausgewählt, wenn du innerhalb einer Antwort ein Semikolon verwendest.

Wenn zu den beiden Phasen jeweils eine eigene Frage sinnvoll ist, schreibe stattdessen zwei vollständige Paare. Die [Anleitung für bessere Karteikarten](/blog/how-to-make-better-flashcards/) kann dir bei dieser Entscheidung helfen.

## Prüfe das Ergebnis vor dem Veröffentlichen

Kontrolliere alle vier Karten aus dem Probelauf. Vergleiche bei deiner vollständigen Liste die importierten Karten mit der bereinigten Quelle:

- Entspricht die Gesamtzahl der Anzahl vollständiger Datenzeilen?
- Stimmen das erste und das letzte Paar einschließlich ihrer vollständigen Antworten überein?
- Sind Satzzeichen, Akzente und Codes unverändert erhalten geblieben?
- Gibt es leere Seiten, Überschriften, Duplikate oder Antworten, die dem falschen Begriff zugeordnet sind?
- Ergibt jede Antwort noch Sinn, deren Zeilenumbrüche du bearbeitet hast?

Lies neben den auffälligen Paaren auch einige unauffällige. An der Kartenanzahl allein erkennst du nicht, ob ein Begriff mit der falschen Antwort verknüpft ist. Wenn etwas nicht stimmt, korrigiere die Quelle vor dem erneuten Import. Behalte die bereinigte Datei für spätere Korrekturen.

## Fertige Paare oder KI-generierte Karten?

Quizlet beschreibt in seiner [Übersicht zur KI-gestützten Erstellung](https://quizlet.com/content/create-flashcards-from-words-and-definitions-with-quizlet-ai) auch, wie sich aus bereitgestelltem Material mit KI Karten erstellen lassen. Generierte Formulierungen musst du gesondert auf ihre inhaltliche Richtigkeit prüfen. Bei einer fertigen Liste aus Begriffen und Definitionen kannst du mit dem strukturierten Import die Übertragung anhand der bereits geschriebenen Paare kontrollieren.

Dein Ausgangsmaterial besteht aus längeren Textabsätzen? [Wandle deine Notizen in Karteikarten um](/blog/turn-notes-into-flashcards/), bevor du den Importtext vorbereitest. Du möchtest ein Set in die andere Richtung übertragen? Nutze die [Anleitung zum Quizlet-Export](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/).
