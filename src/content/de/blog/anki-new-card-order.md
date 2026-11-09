---
title: "Reihenfolge neuer Karten in Anki: Auswahl, Sortierung und Warteschlange prüfen"
description: "Ein Beispiel mit sechs Karten zeigt, wie Anki neue Karten auswählt und sortiert. Prüfe die Limits der Unterstapel, die Kartenpositionen und den Stapel, den du zum Lernen auswählst."
date: "2026-10-06"
image: "/blog/anki-new-card-order.png"
keywords:
  - "Anki Reihenfolge neuer Karten"
  - "Anki Auswahlreihenfolge für neue Karten"
  - "Anki Sortierreihenfolge für neue Karten"
  - "Anki aufsteigende Position"
  - "Anki Karten in falscher Reihenfolge"
---

In Anki kann eine neue Karte an Position 10 nach einer Karte an Position 60 erscheinen. Wenn du eine Lernsitzung in einem übergeordneten Stapel startest und für die Auswahl **Stapel** (Deck) und für die Sortierung **Wie ausgewählt** (Order gathered) eingestellt hast, kann Anki die Auswahl im alphabetisch ersten Unterstapel abschließen, bevor es den Unterstapel mit der Karte an Position 10 erreicht. Die Sortierung nach Erstellungsdatum in der Kartenverwaltung hat darauf keinen Einfluss.

Anki geht bei neuen Karten in zwei Schritten vor. Die **Auswahl** bestimmt, welche Karten im Rahmen der heutigen Limits in die Warteschlange kommen. Die **Sortierung** legt fest, in welcher Reihenfolge diese Karten erscheinen. Prüfe zuerst, ob du andere Karten erwartet hast oder ob dich nur ihre Reihenfolge überrascht.

Die Anleitung gilt für normale Stapel in der Desktop-Version von Anki. Das Beispiel mit sechs Karten wurde anhand des aktuellen Handbuchs und der veröffentlichten Version [Anki 26.09.3](https://github.com/ankitects/anki/releases/tag/26.09.3) eigens auf dem Papier durchgerechnet und am 6. Oktober 2026 geprüft. Ein Praxistest war nicht Teil der Prüfung.

![Ein Mann hält eine vierte Schallplatte über ein leeres Fach neben drei anderen Platten. Hinter ihm stehen zwei Kisten mit Alben, die er noch nicht ausgewählt hat.](/blog/anki-new-card-order.png)

## Wähle die Reihenfolge, in der du lernen willst

Öffne die **Optionen** (Options) des Stapels, den du zum Lernen anklickst, und geh zum Abschnitt **Anzeigereihenfolge** (Display Order). Startest du die Sitzung in einem übergeordneten Stapel, gelten dessen Einstellungen zur Anzeigereihenfolge auch für die Karten aus seinen Unterstapeln.

| Gewünschtes Ergebnis | Auswahlreihenfolge neuer Karten (New Card Gather Order) | Sortierreihenfolge neuer Karten (New Card Sort Order) |
| --- | --- | --- |
| Neue Karten aus dem gewählten Stapel und seinen Unterstapeln in aufsteigender Positionsreihenfolge lernen | Aufsteigende Position (Ascending position) | Wie ausgewählt |
| Unterstapel alphabetisch durchgehen und innerhalb jedes Unterstapels der Position folgen | Stapel | Wie ausgewählt |
| Dieselbe Kartenauswahl in zufälliger Reihenfolge lernen | Deine gewählte Einstellung für die Auswahl | Zufällig (Random) |

So beschreibt das englischsprachige Anki-Handbuch die Einstellungen für [Auswahl](https://docs.ankiweb.net/manual/deck-options#new-card-gather-order) und [Sortierung](https://docs.ankiweb.net/manual/deck-options#new-card-sort-order). **Aufsteigende Position** bezieht sich auf die gespeicherte Position der neuen Karte. Die Reihenfolge kann vom Erstellungsdatum abweichen, weil die Einfügereihenfolge und manuelle Positionsänderungen diese Positionen beeinflussen.

Prüfe vor der Änderung, welche Voreinstellung dem Stapel zugewiesen ist und welche anderen Stapel sie verwenden. Die Anzeigereihenfolge gehört zur Voreinstellung. Soll die Änderung nur für diesen einen Stapel gelten, richte ihm zuerst eine eigene Voreinstellung ein. [Englischsprachige Anleitung für eine eigene Stapelvoreinstellung](/blog/anki-deck-options-presets/)

Tageslimits kannst du über **Dieser Stapel** (This deck) oder **Nur heute** (Today only) abweichend festlegen. Die Einstellungen zur Anzeigereihenfolge gelten weiterhin für alle Stapel mit derselben Voreinstellung.

## Welche vier Karten kommen in die Warteschlange?

Stell dir einen normalen übergeordneten Stapel namens `OrderLab` mit zwei Unterstapeln und insgesamt sechs Karten vor. Jede Karte stammt aus einer eigenen Notiz des Typs **Einfach** (Basic), die genau eine Karte erzeugt. Deshalb haben alle sechs dieselbe Kartentypnummer, und es gibt keine Geschwisterkarten, also mehrere Karten aus derselben Notiz.

| Karte | Stapel | Gespeicherte Position als neue Karte |
| --- | --- | --- |
| A | OrderLab::01 First | 20 |
| B | OrderLab::01 First | 40 |
| C | OrderLab::01 First | 60 |
| D | OrderLab::02 Second | 10 |
| E | OrderLab::02 Second | 30 |
| F | OrderLab::02 Second | 50 |

Alle sechs Karten sind neu. Keine ist zurückgestellt, ausgesetzt oder in einem gefilterten Stapel. Zu Beginn gibt es keine weiteren Karten, keine Wiederholungen in der Lernphase und keine regulären Wiederholungen. Heute wurde noch keine Karte gelernt. `OrderLab` hat keinen übergeordneten Stapel, und die geltenden Wiederholungslimits lassen Platz für alle sechs neuen Karten.

Wähle **OrderLab** zum Lernen aus. Das geltende Limit für neue Karten beträgt dort **4**, in `01 First` **3** und in `02 Second` **2**. Für keines der Limits gilt eine vorübergehende Abweichung. Verwende in beiden Vergleichen die Sortierung **Wie ausgewählt**. Rechne beide Varianten auf dem Papier vom selben Ausgangsstand der Sammlung aus durch, ohne zwischendurch Karten zu beantworten.

So läuft die Auswahl mit **Stapel** ab.

1. Anki geht alphabetisch vor und erreicht `01 First` vor `02 Second`.
2. Anki wählt **A, B, C** in Positionsreihenfolge aus. Damit kommen drei Karten aus `01 First`. Im Limit von `OrderLab` ist noch ein Platz frei.
3. Anki nimmt **D** aus `02 Second` auf und erreicht damit das Limit von vier Karten für `OrderLab`.

Die Karten erscheinen voraussichtlich zum ersten Mal in der Reihenfolge **A → B → C → D**. E und F kommen bei dieser Auswahl nicht in die Warteschlange.

Bei **Aufsteigende Position** prüft Anki die Karten aus beiden Unterstapeln in der Reihenfolge **D → A → E → B → F → C**. Die ersten vier passen in alle Limits. Zwei kommen aus `02 Second`, zwei aus `01 First`. Bei insgesamt vier Karten endet die Auswahl.

Die erwartete Reihenfolge ist **D → A → E → B**. C und F bleiben außen vor. Beim Aufnehmen jeder Karte berücksichtigt Anki die Limits ihres Stapels und der übergeordneten Stapel. [Veröffentlichter Code für die Kartenauswahl](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/gathering.rs)

Die zwei Karten für `02 Second` sind eine Obergrenze. Bei der Auswahl nach Stapel kommt aus `02 Second` nur eine Karte zum Zug, weil `01 First` schon drei der vier verfügbaren Plätze belegt hat. Bei aufsteigender Position ergeben sich hier aus den konkreten Positionen zwei Karten pro Unterstapel. In einer anderen Sammlung kann die Verteilung anders ausfallen.

## Mit allen sechs Karten ändert sich nur die Reihenfolge

Lass in einer zweiten Rechnung auf dem Papier alle sechs Karten zu. Setze das Limit für `OrderLab` auf **6**, für `01 First` auf **3** und für `02 Second` auf **3**. Behalte die Sortierung **Wie ausgewählt** bei.

| Auswahlreihenfolge | Limits für `OrderLab` / `01 First` / `02 Second` | Erwartete Reihenfolge beim ersten Erscheinen |
| --- | --- | --- |
| Stapel | 6 / 3 / 3 | A → B → C → D → E → F |
| Aufsteigende Position | 6 / 3 / 3 | D → A → E → B → F → C |

Beide Einstellungen wählen alle sechs Karten aus. Der Unterschied liegt jetzt allein in der Reihenfolge. Würdest du nur das Limit von `OrderLab` auf sechs erhöhen und das von `02 Second` bei zwei belassen, kämen fünf Karten in die Warteschlange. F bliebe außen vor. Die höheren Limits dienen hier allein der Beispielrechnung und sind keine Empfehlung für mehr neue Karten pro Tag.

## Beim Sortieren kommen keine Karten hinzu

Geh zurück zu den ursprünglichen Limits von **4 / 3 / 2** und stelle nur die **Sortierreihenfolge neuer Karten** auf **Zufällig** um.

| Auswahlreihenfolge | Karten, die Anki mischen kann | Karten, die beim Sortieren fehlen |
| --- | --- | --- |
| Stapel | A, B, C, D | E, F |
| Aufsteigende Position | D, A, E, B | C, F |

Anki mischt die bereits ausgewählten Karten. Welche Karten zur Auswahl gehören, bleibt gleich. Aus der Tabelle lässt sich keine konkrete Zufallsreihenfolge ableiten. [Veröffentlichter Code für die Sortierung](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/sorting.rs)

Auch **Nach Kartentyp, dann wie ausgewählt** (Card type, then order gathered) sortiert die bereits ausgewählten Karten. Alle sechs Karten des Notiztyps **Einfach** haben dieselbe Kartentypnummer. Deshalb erscheinen sie in diesem Beispiel genau in der Reihenfolge, in der Anki sie ausgewählt hat.

Für ein separates Beispiel, das erst beim Sortieren einsetzt, stell dir vier Karten aus Notizen mit mehreren Kartenvorlagen vor. Anki hat sie bereits in dieser Reihenfolge ausgewählt: **W (Typ 2), X (Typ 1), Y (Typ 2), Z (Typ 1)**. Nach Kartentyp sortiert ergibt das **X → Z → W → Y**. Typ 1 kommt zuerst. Innerhalb jedes Typs bleibt die Reihenfolge aus der Auswahl erhalten. Welche Geschwisterkarten Anki mit deinen Einstellungen zum Zurückstellen überhaupt auswählen würde, lässt dieses Beispiel offen.

Die Kartentypnummer gibt die Position der Kartenvorlage innerhalb ihres Notiztyps an. Ob eine Karte auf Wiedererkennen oder aktives Abrufen zielt, hängt von deiner Vorlage ab. Schau dir die Fragen an, bevor du davon ausgehst, dass die Sortierung nach Kartentyp alle Fragen in Vorwärtsrichtung zuerst anzeigt.

## Prüfe die Positionen in der Kartenverwaltung, bevor du sie änderst

Öffne die **Kartenverwaltung** (Browse), wechsle in den Modus **Karten** (Cards) und durchsuche den Stapel samt Unterstapeln. Für `OrderLab` verwendest du diese Suche.

```text
deck:OrderLab is:new
```

Blende über das Menü der Spaltenüberschriften **Frage** (Question), **Karte** (Card), **Stapel** (Deck), **Fällig** (Due) und **Erstellt** (Created) ein. Bei einer neuen Karte zeigt **Fällig** ihre Position in der Warteschlange an. **Erstellt** zeigt, wann die zugehörige Notiz angelegt wurde. Das **Sortierfeld** (Sort Field) zeigt den Inhalt des Notizfelds, das zum Sortieren vorgesehen ist. Wenn du nach einer Spalte sortierst, ändert sich nur die Tabellenansicht. Die gespeicherten Positionen und die Einstellung für die Kartenauswahl beim Lernen bleiben gleich. [Spalten der Kartenverwaltung im englischsprachigen Anki-Handbuch](https://docs.ankiweb.net/manual/browsing#columns)

Die Suche `is:new` kann auch ausgesetzte oder zurückgestellte neue Karten anzeigen. Bei ihnen steht der Wert unter **Fällig** in Klammern. Mit dieser engeren Suche blendest du sie ebenso aus wie Karten, die sich gerade in gefilterten Stapeln befinden.

```text
deck:OrderLab is:new -is:suspended -is:buried -deck:filtered
```

Enthält der Stapelname Leerzeichen, setze ihn in Anführungszeichen, etwa `deck:"My Deck"`. Die Treffer zeigen, welche Karten grundsätzlich infrage kommen. Limits und das automatische Zurückstellen von Geschwisterkarten können die Auswahl für heute weiter einschränken. [Suche nach Kartenstatus](https://docs.ankiweb.net/manual/searching#card-state) und [Suche nach Stapeln](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes) im englischsprachigen Anki-Handbuch. [Englischsprachiger Artikel zu zurückgestellten und ausgesetzten Karten](/blog/anki-bury-vs-suspend/)

Wenn die gespeicherten Positionen schon deiner gewünschten Reihenfolge entsprechen, lass sie so. Musst du sie ändern, notiere die alten Positionen, markiere gezielt eine kleine Gruppe neuer Karten und wähle **Karten → Position ändern** (Cards → Reposition). Prüfe zuerst die Optionen im Dialog. **Position vorhandener Karten verschieben** (Shift position of existing cards) kann auch Karten mit höheren Positionswerten außerhalb deiner Auswahl verschieben. Ohne diese Option können sich neue und vorhandene Positionen überschneiden. Haben mehrere Karten dieselbe Position, lässt sich daraus allein nicht ablesen, in welcher Reihenfolge sie erscheinen. [„Position ändern“ im englischsprachigen Anki-Handbuch](https://docs.ankiweb.net/manual/browsing#cards)

Für Änderungen an Auswahl und Sortierung kannst du den bisherigen Lern- und Wiederholungsverlauf beibehalten. Konzentriere dich bei der Fehlersuche auf die Positionen neuer Karten und die Einstellungen zur Anzeigereihenfolge.

## Prüfe den gewählten Stapel und die verbleibenden Tageslimits

Wenn du im ursprünglichen Beispiel `OrderLab::02 Second` direkt zum Lernen auswählst, kommen nur D, E und F infrage. Mit dem Limit von zwei neuen Karten, **Aufsteigende Position** und **Wie ausgewählt** ist **D → E** zu erwarten. Selbst wenn das Limit von `OrderLab` gilt, sind dort noch alle vier Plätze frei. Die beiden Karten passen also hinein. Wählst du stattdessen `OrderLab` mit **Stapel** als Auswahlreihenfolge und den Limits **4 / 3 / 2**, ergibt sich **A → B → C → D**.

Die Anzeigereihenfolge von `02 Second` spielt für eine Sitzung, die du in `OrderLab` startest, keine Rolle. Der zum Lernen gewählte Stapel bestimmt die Anzeigereihenfolge und begrenzt die Gesamtzahl. Dazu kommen die geltenden Limits der Unterstapel. **Limits von oben anwenden** (Limits start from top) bestimmt, ob beim direkten Lernen eines Unterstapels auch die Limits seiner übergeordneten Stapel gelten. Das englischsprachige Anki-Handbuch erklärt die [Regeln für Unterstapel](https://docs.ankiweb.net/manual/deck-options#subdecks) und die [Einstellung für Limits übergeordneter Stapel](https://docs.ankiweb.net/manual/deck-options#limits-start-from-top).

Prüfe auch die Wiederholungslimits. Standardmäßig begrenzt das Wiederholungslimit auch die Zahl neuer Karten. **Neue Karten ignorieren das Wiederholungslimit** (New cards ignore review limit) ändert dieses Verhalten. Diese Option und **Limits von oben anwenden** gelten für die gesamte Sammlung. Halte beide Einstellungen fest, bevor du aus dem Limit für neue Karten ableitest, wie viele heute noch erscheinen können. [Veröffentlichter Code der Oberfläche für Tageslimits](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/DailyLimits.svelte)

In der **Vorschau** (Preview) der Kartenverwaltung kannst du dir die Fragen ansehen, ohne sie zu beantworten. Halte für deine nächste normale Lernsitzung diese Punkte fest.

| Was du festhältst | Was du damit klärst |
| --- | --- |
| Zum Lernen angeklickter Stapel, seine Voreinstellung und die Einstellungen für Auswahl und Sortierung | Welche Anzeigereihenfolge gilt für die Sitzung? |
| Erwartete Karten und ihre gespeicherten Positionen | Liegt es an der Auswahl oder an der Reihenfolge? |
| Limits für neue Karten und Wiederholungen, abweichende Limits für diesen Stapel oder nur für heute und die Karten, die du heute schon gelernt oder wiederholt hast | Wie viele Karten passen heute noch in die Limits? |
| Limits übergeordneter Stapel und die beiden Optionen, die für die gesamte Sammlung gelten | Welche zusätzlichen Obergrenzen greifen? |
| Zurückgestellte oder ausgesetzte Karten, Karten in gefilterten Stapeln und Geschwisterkarten | Welche scheinbar passenden Karten sind möglicherweise nicht verfügbar? |
| Reihenfolge, in der neue Karten erstmals erscheinen, getrennt von weiteren Anzeigen in der Lernphase | Entspricht die Reihenfolge der Vorhersage? |

Nachdem du eine neue Karte beantwortet hast, können Wiederholungen aus der Lernphase dazwischenkommen. **Reihenfolge neuer Karten und Wiederholungen** (New/Review Order) bestimmt, ob neue Karten vor, nach oder gemischt mit regulären Wiederholungen erscheinen. Auswahl und Sortierung der neuen Karten richten sich weiterhin nach den jeweiligen Einstellungen. Anki sortiert die neuen Karten zuerst und führt anschließend die verschiedenen Kategorien in der Warteschlange zusammen. [Veröffentlichter Code zum Aufbau der Warteschlange](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/mod.rs)

Wenn die erwarteten Karten beim ersten Erscheinen in der erwarteten Reihenfolge auftauchen, ist die Prüfung abgeschlossen. Gibt es noch Abweichungen, halte für die gezielte Fehlersuche die Positionen, Einstellungen, den gewählten Stapel, die Anki-Version, die beobachtete Reihenfolge und relevante Erweiterungen fest. Wenn du ein Thema zusätzlich üben möchtest, kannst du dafür einen gefilterten Stapel verwenden. [Englischsprachige Anleitung zum Üben mit gefilterten Stapeln](/blog/anki-filtered-decks-without-rescheduling/)
