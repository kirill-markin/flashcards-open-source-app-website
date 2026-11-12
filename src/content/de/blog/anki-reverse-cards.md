---
title: "Anki-Karten umdrehen und in beide Richtungen lernen"
description: "Füge bestehenden Anki-Notizen die umgekehrte Abfragerichtung hinzu. Ordne Felder und Kartentypen richtig zu, damit dein Lernfortschritt erhalten bleibt."
date: "2026-10-02"
image: "/blog/anki-reverse-cards.png"
keywords:
  - "Anki Karten umdrehen"
  - "Anki Karten in beide Richtungen"
  - "Anki wahlweise umgekehrte Richtung"
  - "Anki Karten nachträglich umdrehen"
  - "Anki Notiztyp ändern"
---

Ein französisches Wort zu erkennen und es zu einem englischen Stichwort selbst abzurufen, sind zwei verschiedene Aufgaben. Anki kann aus einer Notiz eine Karte pro Richtung erzeugen und die Wiederholungen für jede Karte einzeln planen. Du gibst die Vokabel nur einmal ein. [Ankis Erklärung zu Notizen und Feldern](https://docs.ankiweb.net/manual/getting-started#notes-%26-fields)

Wenn du **Anki-Karten umdrehen** und die bisherige Abfragerichtung behalten willst, markiere die vorhandenen Notizen vom Typ **Einfach** in der **Kartenverwaltung** und wähle **Notizen → Notiztyp ändern …**. Mit **Einfach (und die umgekehrte Richtung)** bekommt jede markierte Notiz eine Karte pro Richtung. Mit **Einfach (und wahlweise die umgekehrte Richtung)** legst du für jede Notiz fest, ob eine zweite Karte entsteht. Ordne die vorhandene Karte dem neuen Kartentyp für dieselbe Richtung zu. [Anleitung zum Ändern des Notiztyps im Anki-Forum](https://forums.ankiweb.net/t/swap-front-to-back-for-testing-yourself/29805)

Die Anleitung für Anki Desktop stützt sich auf die offizielle Dokumentation und den veröffentlichten Quellcode der Version 26.09.3. Stand ist der 2. Oktober 2026. Die Zahlen im Beispiel ergeben sich aus diesen Quellen. Ein Praxistest in der App steht aus.

![Ein Hobby-Tischtennisspieler übt in einer Gemeindehalle, Bälle mit der Rückhand zurückzuspielen](/blog/anki-reverse-cards.png)

## Welche Fragen eignen sich für die umgekehrte Richtung?

Der Notiztyp bestimmt, in welchen Richtungen Anki eine Vokabel abfragt.

| Notiztyp | Abfragerichtungen |
| --- | --- |
| Einfach | Vorderseite → Rückseite |
| Einfach (und die umgekehrte Richtung) | Vorderseite → Rückseite und Rückseite → Vorderseite |
| Einfach (und wahlweise die umgekehrte Richtung) | Vorderseite → Rückseite sowie Rückseite → Vorderseite, wenn im Feld „Umgekehrte Richtung hinzufügen“ Text steht |

Die wahlweise umgekehrte Richtung ist praktisch, wenn ein Stapel neben Vokabelpaaren auch Erklärungen oder andere Fragen mit Antworten enthält. [Ankis Standard-Notiztypen](https://docs.ankiweb.net/getting-started.html#note-types)

Lies die bisherige Rückseite so, als wäre sie die Frage. Kannst du eindeutig antworten, ohne die Vorderseite zu sehen? Achte dabei auf die Bedeutung, die Sprache und die Form der erwarteten Antwort.

Stell dir drei vorhandene Notizen vom Typ **Einfach** in einem Französischstapel vor. Die dritte ist eine Erinnerung an eine fiktive Unterrichtsstunde.

| Notiz | Bisherige Vorderseite | Bisherige Rückseite | Feld „Umgekehrte Richtung hinzufügen“ nach der Umstellung | Gewünschte Karten |
| --- | --- | --- | --- | --- |
| A | la clé | key (for a lock) | `y` | la clé → key (for a lock), key (for a lock) → la clé |
| B | le vélo | bicycle | `y` | le vélo → bicycle, bicycle → le vélo |
| C | Warum findet der Unterricht am Donnerstag statt? | Die Lehrkraft hat am Mittwoch keine Zeit. | leer | Nur die ursprüngliche Frage |

Leg für A und B fest, dass der französische Artikel zur Antwort gehört, und entscheide, ob Synonyme gelten. Wenn du im selben Stapel mehrere Sprachen lernst, ergänze bei „bicycle“ einen Hinweis auf die erwartete Sprache. Klär, was als richtige Antwort zählt, bevor du eine zweite Karte erzeugst.

Aus „Die Lehrkraft hat am Mittwoch keine Zeit“ lässt sich die Frage nach dem Donnerstag kaum ableiten. Behalte bei C die ursprüngliche Richtung bei. Falls du eine weitere Frage brauchst, formuliere sie direkt. [Anleitung für bessere Kartenfragen](/de/blog/how-to-make-better-flashcards/)

## Stell zuerst ein paar vorhandene Notizen um

Die Schritte gelten für den unveränderten Notiztyp **Einfach** mit den Feldern **Vorderseite** und **Rückseite** und einer Karte in der ursprünglichen Richtung. Wenn du eigene Felder, geänderte Vorlagen oder den Notiztyp **Lückentext** verwendest, leg die Zuordnung für diese Notizen separat fest.

Synchronisiere zuerst die ausstehenden Änderungen auf deinen anderen Geräten und dann Anki Desktop, damit die Sammlung dort auf dem aktuellen Stand ist. Exportiere die Sammlung, bevor du den Notiztyp änderst. Welches Dateiformat sich für die Sicherung eignet und wie du die Medien mit exportierst, steht im [Vergleich zwischen APKG und COLPKG (auf Englisch)](/blog/anki-apkg-vs-colpkg/).

1. Öffne die **Kartenverwaltung**, wechsle in den Modus **Notizen** und suche die Notizen vom Typ **Einfach**, die du umstellen willst. Beginne mit einer kleinen Auswahl wie A, B und C.
2. Markiere nur diese Notizen und vergib über **Notizen → Schlagwörter hinzufügen …** ein bisher unbenutztes Schlagwort, etwa `reverse-check-20261002`. Ersetze den gesamten Suchtext durch `tag:reverse-check-20261002` und prüfe, ob Anki damit genau deine Auswahl findet. Verwende dieselbe Suche für die nächsten Kontrollen. Ein Filter nach dem bisherigen Notiztyp, etwa `note:Basic` für den englischen Typnamen „Basic“, findet die umgestellten Notizen nicht mehr. [Schlagwörter vergeben](https://docs.ankiweb.net/browsing.html#notes) und [nach Schlagwörtern suchen](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes)
3. Vergleiche die Zahl der Zeilen im Modus **Notizen** und im Modus **Karten**. Wähle eine Karte in der ursprünglichen Richtung aus, die du schon gelernt hast. Öffne **Karten → Kartenstatistik …** und notiere das Intervall und einen Eintrag aus dem Wiederholungsverlauf, den du später wiedererkennst. Wechsle zurück zu **Notizen** und markiere die Auswahl erneut. [Ankis Dokumentation zur Kartenstatistik](https://docs.ankiweb.net/stats.html#card-info)
4. Wähle **Notizen → Notiztyp ändern …**. Verwende für das Beispiel **Einfach (und wahlweise die umgekehrte Richtung)**. Wenn alle markierten Notizen beide Richtungen brauchen, wähle **Einfach (und die umgekehrte Richtung)**.
5. Prüfe die Zuordnung der Felder und Kartentypen wie unten beschrieben. Speichere dann die Änderungen.

**Notiztyp ändern …** erfasst nur die markierten Notizen. Änderst du die Vorlagen eines gemeinsam genutzten Notiztyps, gilt die Änderung für alle Notizen dieses Typs in der Sammlung. Dazu gehören auch Notizen in anderen Stapeln, selbst wenn du gerade nur einen Stapel ausgewählt hast. [Notiztypen in Anki](https://docs.ankiweb.net/getting-started.html#note-types) und [Funktion der Kartenvorlagen](https://docs.ankiweb.net/templates/intro.html)

### So ordnest du Felder und Kartentypen zu

Ein **Notiztyp** legt fest, welche Felder eine Notiz hat und welche Fragen daraus entstehen können. Seine **Kartentypen** bestimmen, in welcher Richtung Anki abfragt. In diesem Beispiel heißen sie **Karte 1** und **Karte 2**. Beim Wechsel des Notiztyps ordnest du die Texte den neuen Feldern zu und legst fest, welcher neue Kartentyp eine vorhandene Karte übernimmt.

Wähle für jedes **neue Ziel** die **alte Quelle** aus der Tabelle. In Anki 26.09.3 steht die Auswahlliste für die Quelle vor der Beschriftung des Ziels. [Quellcode der Zuordnungszeile in Version 26.09.3](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/change-notetype/MapperRow.svelte)

| Zuordnung | Neues Ziel | Alte Quelle auswählen |
| --- | --- | --- |
| Feld | Vorderseite | Vorderseite |
| Feld | Rückseite | Rückseite |
| Feld, nur bei wahlweiser Umkehrung | Umgekehrte Richtung hinzufügen | (Nichts) |
| Kartentyp | Karte 1, ursprüngliche Richtung | Karte 1, bisherige Karte in dieser Richtung |
| Kartentyp | Karte 2, umgekehrte Richtung | (Nichts) |

Mit **(Nichts)** bleibt das neue Feld **Umgekehrte Richtung hinzufügen** leer. Bei **Karte 2** bedeutet **(Nichts)**, dass Anki dieser Richtung keine vorhandene Karte zuordnet. Sobald die Notiz die Voraussetzungen erfüllt, erzeugt Anki dafür eine neue Karte.

Wenn du Vorder- und Rückseite vertauschst, ändert sich die Frage auf der alten Karte. Wenn du die alte **Karte 1** der neuen **Karte 2** zuordnest, wandert der Lernfortschritt in die umgekehrte Richtung. Übernimm die Feldinhalte unverändert und ordne die alte **Karte 1** der neuen **Karte 1** zu, damit die bisherige Frage samt Lernfortschritt erhalten bleibt.

Anki behält die zugeordneten Karten und entfernt alte Karten, deren Kartentyp du keinem neuen zugeordnet hast. Die Karte in der ursprünglichen Richtung behält ihren Wiederholungsplan, wenn du sie richtig zuordnest. Für entfernte Karten oder andere Umstellungen lässt sich das nicht pauschal zusichern. [Quellcode für den Wechsel des Notiztyps in Version 26.09.3](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/notetype/notetypechange.rs)

## Füll das Feld für die umgekehrte Richtung aus und zähl nach

Beim Notiztyp mit wahlweiser Umkehrung trägst du bei A und B jeweils `y` in das Feld **Umgekehrte Richtung hinzufügen** ein. Bei C bleibt das Feld leer. Jeder beliebige Text genügt, damit Anki die zweite Karte erzeugt. Das `y` dient nur als Markierung und erscheint auf keiner der beiden Karten. [Ankis Regeln zum Erzeugen umgekehrter Karten](https://docs.ankiweb.net/templates/generation.html#reverse-cards)

Bei der Suche nach dem Schlagwort ergeben sich im Beispiel diese Zahlen.

| Schritt | Notizen | Karten |
| --- | --- | --- |
| Vor der Umstellung | 3 | 3 |
| Wahlweise Umkehrung, alle Felder für die umgekehrte Richtung leer | 3 | 3 |
| Wahlweise Umkehrung, für A und B aktiviert | 3 | 5 |
| Alternative mit beiden Richtungen für alle drei Notizen | 3 | 6 |

Die letzte Zeile zeigt die Variante mit **Einfach (und die umgekehrte Richtung)**. Dabei entsteht auch für C eine zweite Karte. Wenn du **N** gewöhnliche Notizen mit je einer Karte auf die wahlweise Umkehrung umstellst und für **R** davon die umgekehrte Richtung aktivierst, erhältst du **N Notizen und N + R Karten**. Das gilt bei unveränderten Vorlagen und ausgefüllten Vorder- und Rückseiten.

Suche erneut nach `tag:reverse-check-20261002` und wechsle zu **Karten**. Wähle jede Zeile nacheinander aus und prüfe die jeweilige Karte in der **Vorschau**. Im Modus **Notizen** fasst Anki Karten derselben Notiz zusammen und zeigt in der Vorschau nur die erste Karte. [Ansichten und Vorschau in der Kartenverwaltung](https://docs.ankiweb.net/browsing.html#editing-area)

Prüfe, ob A und B jeweils beide erwarteten Fragen haben und bei C nur die ursprüngliche Frage erscheint. Die Zahl der Notizen bleibt bei drei. Vergleiche bei der Karte aus Schritt 3 das Intervall und den Eintrag im Wiederholungsverlauf mit deinen Aufzeichnungen. Die umgekehrte Karte startet mit einem eigenen Lernverlauf. Deine bisherigen Wiederholungen zum Wiedererkennen bleiben bei der ursprünglichen Karte. Wenn die Ergebnisse stimmen, wende dieselben Kontrollen auf eine größere Auswahl an.

## Wenn die umgekehrte Karte beim Lernen fehlt

Wenn die umgekehrte Karte in der Kartenverwaltung auftaucht, prüfe ihren Status und ihre Fälligkeit, bevor du die Notiz erneut änderst. Tageslimits und das Aufschieben von Geschwisterkarten können beeinflussen, welche Karten beim Lernen erscheinen. [Ankis Tageslimits](https://docs.ankiweb.net/deck-options.html#daily-limits) und [Einstellungen zum Aufschieben](https://docs.ankiweb.net/deck-options.html#burying)

Wie du ausgeblendete Karten findest, steht im [Vergleich zwischen Aufschieben und Ausschließen (auf Englisch)](/blog/anki-bury-vs-suspend/).

Falls du die umgekehrte Karte über das Schlagwort im Modus **Karten** nicht findest, prüfe erneut den Notiztyp, das Feld **Umgekehrte Richtung hinzufügen** und die Inhalte von **Vorderseite** und **Rückseite**.

## Wenn du die umgekehrte Richtung später weglassen willst

Wenn du eine Richtung vorerst aussetzen willst, kannst du die entsprechende Karte unabhängig von ihrer Geschwisterkarte ausschließen. Die ausgeschlossene Karte bleibt in der Sammlung. [Aufschieben und Ausschließen im Vergleich (auf Englisch)](/blog/anki-bury-vs-suspend/)

Wenn du eine wahlweise erzeugte umgekehrte Karte entfernen willst, leere das Feld **Umgekehrte Richtung hinzufügen**. Die Karte wird leer und bleibt vorerst in der Sammlung. Über **Extras → Leere Karten löschen …** öffnest du die Liste der leeren Karten. [Ankis Regeln zum Erzeugen und Löschen von Karten](https://docs.ankiweb.net/manual/templates/generation#card-generation-%26-deletion)

Die Liste umfasst die ganze Sammlung, unabhängig von der Suche in der Kartenverwaltung. Prüfe vor dem Löschen alle Einträge, auch solche zu Notizen außerhalb deiner Auswahl. Wie Anki die Liste erstellt, zeigt der veröffentlichte Quellcode im [Abschnitt zu leeren Karten in der Lückentext-Anleitung (auf Englisch)](/blog/anki-cloze-numbers/).

Mit **Löschen** entfernst du in der Kartenverwaltung die ganze Notiz samt allen zugehörigen Karten. Wenn du nur eine wahlweise erzeugte Gegenrichtung entfernen willst, nutze das Feld und die Liste der leeren Karten wie oben beschrieben. [Ankis Funktion zum Löschen von Notizen](https://docs.ankiweb.net/browsing.html#notes)

Nach dem Wechsel des Notiztyps verlangt Anki eine einseitige Synchronisierung. Falls auf einem anderen Gerät noch Änderungen ausstehen, sichere sie zuerst. Sobald die Sammlung auf dem Desktop alle Änderungen enthält, die du behalten willst, wähle dort **Zu AnkiWeb hochladen**. Wähle auf den anderen Geräten bei der entsprechenden Aufforderung **Von AnkiWeb herunterladen**. [Leitfaden zum Hoch- oder Herunterladen (auf Englisch)](/blog/anki-sync-upload-or-download/) und [Ankis Regeln zur einseitigen Synchronisierung](https://docs.ankiweb.net/syncing.html#conflicts)
