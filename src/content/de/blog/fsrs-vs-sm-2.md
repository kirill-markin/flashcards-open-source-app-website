---
title: "FSRS vs SM-2 in 2026: Welcher Spaced-Repetition-Algorithmus hilft dir, mehr zu behalten?"
description: "Ein praktischer Vergleich von FSRS und SM-2 für Flashcards im Jahr 2026. Erfahre, warum FSRS meist besseres Review-Timing, geringere Arbeitslast und ein stärkeres Spaced-Repetition-Erlebnis liefert als älteres SM-2-ähnliches Scheduling."
date: "2026-03-12"
keywords:
  - "fsrs vs sm2"
  - "spaced repetition algorithmus"
  - "anki fsrs"
  - "bester flashcard algorithmus"
  - "wie fsrs funktioniert"
  - "open source flashcards app"
---

Eine Flashcards-App kann sich ungefähr eine Woche lang schlau anfühlen. Dann kommen die leichten Karten zu oft zurück, die schweren verschwinden für merkwürdige Zeitspannen, und das Ganze fühlt sich eher nach Verwaltung als nach Lernen an.

Das ist meist kein Designproblem.

Es ist ein Scheduler-Problem.

Jahrelang war die Standardantwort in dieser Kategorie irgendeine Variante von **SM-2**. Es war einfach, bekannt und gut genug, um zu zeigen, dass Spaced Repetition funktioniert.

Ich halte SM-2 nicht für schlecht.

Ich halte es für alt.

Darum ist die nützlichere Frage 2026 nicht mehr "Funktioniert Spaced Repetition?" Natürlich tut es das. Die Frage ist, ob deine Flashcards-App einen Scheduler nutzt, der es noch verdient, Standard zu sein.

## Warum SM-2 so lange überlebt hat

SM-2 hat seinen Platz verdient.

Es ist einfach genug, um verstanden zu werden, einfach genug, um implementiert zu werden, und berühmt genug, dass viele Flashcards-Produkte es übernehmen konnten, ohne viel neu zu denken. Lange Zeit hat das gereicht.

Und fairerweise: Es funktioniert immer noch besser als zufälliges Review-Timing oder feste Intervalle.

Das Problem ist, dass "besser als zufällig" für ein ernsthaftes Lerntool kein besonders hoher Standard ist.

Wenn ein Produkt auf der Idee basiert, dass das genaue Timing einer Karte zählt, dann ist der Scheduler kein Backend-Detail. Er ist das Produkt.

## Was FSRS verändert

FSRS verfolgt dasselbe Grundziel, geht aber mit einem besseren Gedächtnismodell daran.

Statt sich auf einen gröberen Ease-Ansatz zu stützen, verfolgt es Dinge wie:

- Stabilität
- Schwierigkeit
- Review-Historie
- Ziel-Retention

Das gibt dem Scheduler mehr Kontext darüber, was mit der Karte tatsächlich passiert.

In der Praxis bedeutet das meist:

- Karten, die du gut kennst, verschwenden weniger deiner Zeit
- Karten, die du nicht gut kennst, werden sinnvoller angepasst
- die Review-Warteschlange fühlt sich weniger willkürlich an

Genau das merken Lernende, selbst wenn sie nie eine einzige Formel lesen wollen.

## Den Unterschied spürst du tatsächlich

Die meisten vergleichen **FSRS vs SM-2** nicht über Gleichungen.

Sie spüren es nach ein paar Wochen.

Mit einem schwächeren Scheduler tauchen leichte Karten häufig genug auf, um lästig zu werden. Schwere Karten kommen zu unpassenden Zeiten zurück. Die Warteschlange fühlt sich die ganze Zeit ein bisschen daneben an, und das ist ein sehr effizienter Weg, tägliche Reviews unangenehmer zu machen.

Diese Reibung ist wichtiger, als viele zugeben.

Flashcards sind ein Gewohnheitsprodukt. Wenn sich der Review-Flow schwerer anfühlt, als er sollte, verlierst du nicht nur Effizienz. Du bekommst weniger Lust, die App morgen wieder zu öffnen.

Darum ist das kein Nischen-Implementierungsdetail für Study Nerds. Es verändert, ob sich das Produkt lohnt, morgen wiederzukommen.

## Wo FSRS stärker ist

Für die meisten ernsthaften Lernenden ist FSRS besser in den Dingen, die wirklich zählen:

- die Review-Arbeitslast unter Kontrolle halten
- auf ein konkretes Retentionsziel hin arbeiten
- sich realistischer an Recall-Schwierigkeit anpassen
- zusätzliche Wiederholungen bei Karten vermeiden, die du bereits kannst

Daher kommt auch ein großer Teil des modernen Interesses an **Anki FSRS**. Menschen wechseln nicht, weil das Akronym neu ist. Sie wechseln, weil sich das Scheduling besser anfühlt, sobald die Warteschlange groß genug wird, dass schlechtes Timing offensichtlich auffällt.

## Der eine Grund, warum SM-2 immer noch überlebt

SM-2 ist leichter zu erklären.

Wenn du einen winzigen Prototyp baust, das Konzept von Spaced Repetition vermittelst oder ein sehr leichtgewichtiges Flashcards-Spielzeug baust, hat einfachere Logik einen echten Reiz.

Das ist ein vernünftiges Argument, um es in einfachen Systemen zu behalten.

Es ist kein besonders starkes Argument, um es in einer ernsthaften Flashcards-App langfristig als Standard auszuliefern, wenn ein besserer Scheduler verfügbar ist.

## Die langweiligen Implementierungsdetails sind wichtiger als das Akronym

Diesen Teil lassen Vergleichsartikel oft aus.

Zu sagen "wir nutzen FSRS" macht ein Flashcards-Produkt nicht automatisch gut.

Entscheidend ist, ob die Implementierung wirklich sorgfältig ist.

In [Flashcards](https://flashcards-open-source-app.com/) wird FSRS als Produktvertrag behandelt, nicht bloß als Marketinglabel. Das Scheduler-Verhalten ist zwischen Backend und iOS-App gespiegelt. Die Web-App spiegelt denselben Scheduler-Datenvertrag, liefert aber keine dritte unabhängige FSRS-Implementierung aus. Das System speichert versteckten Gedächtniszustand auf jeder Karte, hält explizite Learning- und Relearning-Schritte vor, unterstützt Workspace-weite Einstellungen wie Desired Retention, Learning Steps, Relearning Steps, Maximum Interval und Fuzz und verwendet beim Scheduling den echten Client-Review-Zeitstempel über `reviewedAtClient`.

Das klingt nach Backend-Detail, ist aber genau die Art Detail, die entscheidet, ob zwei Clients dieselbe Karte gleich schedulen oder auseinanderdriften.

Und sobald Scheduling driftet, merken Nutzer es schnell, auch wenn sie nicht erklären können, warum.

## Worauf Lernende achten sollten

Wenn du ein Flashcards-Tool auswählst, würde ich mich weniger um die Feature-Checkliste kümmern und mehr um eine langweilige Frage:

Wann genau kommt die Karte zurück, und fühlt sich dieses Timing auch dann noch sinnvoll an, wenn hunderte oder tausende Reviews hinter dir liegen?

Genau dort zählt der beste Flashcard-Algorithmus wirklich.

Nicht in der Theorie.

Sondern in der Arbeitslast.

In der Retention.

Und darin, ob sich die Warteschlange wie Hilfe oder wie Strafe anfühlt.

## Welcher Spaced-Repetition-Algorithmus ist 2026 also besser?

Für die meisten realen Lern-Workflows ist **FSRS der bessere Spaced-Repetition-Algorithmus**.

SM-2 verdient Anerkennung dafür, die Kategorie mitdefiniert zu haben. Aber wenn du heute eine moderne App baust oder auswählst, ist FSRS der besser begründbare Standard.

Es gibt dem Scheduler bessere Informationen, bessere Kontrolle und bessere Chancen, Review-Timing an echtes Gedächtnis statt an eine gröbere Annäherung anzupassen.

Genau das ist der Sinn von Spaced Repetition.

Wenn du eine **Open-Source-Flashcards-App** willst, die Scheduling-Qualität als zentrale Produktentscheidung statt als Checkbox behandelt, ist [Flashcards](https://flashcards-open-source-app.com/) in genau diese Richtung gebaut.
