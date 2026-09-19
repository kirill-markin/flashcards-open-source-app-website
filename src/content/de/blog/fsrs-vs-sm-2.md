---
title: "FSRS vs SM-2: Unterschiede, Wiederholungsaufwand und Wechsel in Anki"
description: "Vergleiche FSRS mit SM-2, ordne Benchmarks zur Erinnerungsleistung ein und stelle Ankis Wiederholungsplanung um, ohne die ganze Sammlung auf einmal neu zu planen."
date: "2026-03-12"
updated: "2026-09-19"
image: "/blog/fsrs-vs-sm-2.png"
keywords:
  - "FSRS vs SM-2"
  - "SM-2 vs FSRS"
  - "FSRS vs SM2 Anki"
  - "ist FSRS besser als SM2"
  - "Anki auf FSRS umstellen"
  - "Spaced-Repetition-Algorithmus"
---

In Anki kannst du den Algorithmus für die Wiederholungsplanung wechseln und deine Karten samt Wiederholungsverlauf behalten. Beim Vergleich **FSRS vs SM-2** geht es deshalb um eine praktische Frage: Wie wird der nächste Wiederholungstermin bestimmt, und passt die daraus entstehende Lernroutine zu dir?

Für die meisten Menschen, die mit Anki lernen und kompatible Apps nutzen, ist **FSRS eine sinnvolle Wahl für die langfristige Wiederholungsplanung**. Sein Gedächtnismodell lässt dich ein konkretes Ziel für die Behaltensrate festlegen und kann aus deinem Wiederholungsverlauf lernen. Das sind gute Gründe für einen Wechsel. Weniger fällige Karten schon morgen oder eine bestimmte prozentuale Zeitersparnis sind allerdings nicht garantiert.

**Fakten geprüft:** 19. September 2026.

![Ein Bäcker prüft einen Teigling mit der Fingerspitze, während zwei weitere unter einem Tuch ruhen](/blog/fsrs-vs-sm-2.png)

## Welches SM-2 vergleichen wir eigentlich?

Der [ursprüngliche SM-2-Algorithmus](https://super-memory.com/english/ol/sm2.htm) bewertet Antworten von null bis fünf. Erfolgreiche Wiederholungen beginnen mit Abständen von einem und sechs Tagen. Spätere Intervalle ergeben sich aus dem vorherigen Intervall, multipliziert mit einem Leichtigkeitsfaktor, der sich mit den Antwortbewertungen verändert.

Ankis bisheriger Planungsalgorithmus, auch Scheduler genannt, weicht von diesem Ansatz ab. Er verwendet unter anderem vier Antwortbuttons, einstellbare Lernschritte und Anpassungen bei verspäteten Wiederholungen. „SM-2“ ist eine gängige Kurzbezeichnung für diesen Scheduler, aber die ursprüngliche Formel und Ankis Umsetzung sind nicht gleichzusetzen. Die [Anki-FAQ zum Algorithmus](https://faqs.ankiweb.net/what-spaced-repetition-algorithm.html) erklärt den Unterschied.

FSRS steht für Free Spaced Repetition Scheduler und modelliert für jede Karte, wie gut du sie im Gedächtnis behältst. Die Schwierigkeit beschreibt, wie schwer sich die Erinnerung festigen lässt. Die Stabilität gibt an, wie langsam sie verblasst. Die Abrufbarkeit schätzt, mit welcher Wahrscheinlichkeit du dich jetzt an die Antwort erinnerst. Ein Optimierer passt die Modellparameter an deinen Wiederholungsverlauf an. Ohne diesen Verlauf arbeitet der Scheduler mit Standardwerten. Das offizielle [ABC of FSRS](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/ABC-of-FSRS) und unsere [Erklärung zu FSRS](/de/blog/what-is-fsrs/) beschreiben das Modell genauer.

| Frage | Ursprüngliches SM-2 | Ankis bisheriger Scheduler | FSRS |
| --- | --- | --- | --- |
| Was bestimmt, wie die Intervalle wachsen? | Vorheriges Intervall und Leichtigkeitsfaktor | Regeln auf Basis des Leichtigkeitsfaktors mit Ankis Anpassungen | Aktualisierte Schätzungen zum Gedächtniszustand und eine angestrebte Behaltensrate |
| Passt sich der Algorithmus an einzelne Karten an? | Ja | Ja | Ja |
| Kannst du direkt eine angestrebte Behaltensrate wählen? | Nein | Nein | Ja, über die gewünschte Behaltensrate |
| Kann er Modellparameter an den Wiederholungsverlauf anpassen? | Nein | Nein | Ja, wenn die App einen Optimierer bereitstellt |

Beide Ansätze reagieren auf deine Antworten. Der entscheidende Unterschied liegt darin, wie FSRS diese Antworten mit einem Modell des Vergessens und der angestrebten Behaltensrate verbindet. Das Alter von SM-2 allein ist kein Grund, es abzuschreiben. Und ein längeres Intervall allein belegt keine bessere Planung.

## Was die Daten tatsächlich aussagen können

Aussagen über FSRS vermischen oft drei Fragen: Wie genau sagt es die Erinnerungswahrscheinlichkeit voraus, wie effizient plant es in einer Simulation, und was passiert beim tatsächlichen Lernen?

Bei der **Vorhersage der Erinnerungswahrscheinlichkeit** werden geschätzte Chancen auf eine richtige Antwort mit den Ergebnissen späterer Wiederholungen verglichen. Der öffentliche [Spaced-Repetition-Benchmark](https://github.com/open-spaced-repetition/srs-benchmark) bewertet Modelle anhand aufgezeichneter Wiederholungen. Berücksichtige beim Lesen der Ergebnisse die Modellversion und die Auswertungsbedingungen, etwa den Umgang mit Wiederholungen am selben Tag. Eine Forschungsversion in einer Benchmark-Tabelle kann sich von der Version in deiner App unterscheiden. Die Tabelle liefert keinen direkten experimentellen Vergleich deiner Lernzeit mit den beiden Anki-Schedulern.

Auch die Kennzahlen brauchen Einordnung. Log Loss bewertet Wahrscheinlichkeitsvorhersagen und bestraft dabei besonders Fehler, bei denen das Modell sehr sicher war. Die Kalibrierung prüft, ob vorhergesagte Erfolgsraten mit den beobachteten übereinstimmen. Die [Erklärung der FSRS-Kennzahlen](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Metric) beschreibt diese Maße. Keines davon misst unmittelbar die Lernzeit in Minuten oder Prüfungsleistungen.

**Eine Simulation des Wiederholungsaufwands** schätzt, was unter einem Modell und festgelegten Annahmen passieren könnte. Die Aussagen zur Effizienz in der [FSRS-Übersicht](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/ABC-of-FSRS) enthalten Simulationsergebnisse. Diese Ergebnisse helfen zu erklären, was für FSRS spricht. Wie viel weniger Arbeit deine Sammlung erfordern wird, belegen sie aber nicht.

**Dein tatsächliches Ergebnis** umfasst die Erinnerungsleistung, die Wiederholungszeit und die Frage, ob du hinterherkommst. Weniger fällige Karten bei häufigerem Vergessen können bedeuten, dass sich das Verhältnis zwischen Aufwand und Erinnerungsleistung verschoben hat. Um einzuschätzen, ob der Wechsel dir geholfen hat, beobachte sowohl den Aufwand als auch die Erinnerungsleistung und halte Lernstoff und Gewohnheiten möglichst vergleichbar.

## Solltest du jetzt wechseln?

| Deine Situation | Sinnvoller nächster Schritt |
| --- | --- |
| Deine Apps unterstützen FSRS und du möchtest eine Behaltensrate vorgeben | Aktiviere FSRS mit einem schrittweisen Übergang |
| Deine Routine funktioniert und eine Prüfung steht in wenigen Tagen an | Warte mit der Umstellung bis nach der Prüfung |
| Ein Gerät verwendet eine inkompatible App | Aktualisiere diese App vor dem Wechsel |
| Du drückst „Schwer“, obwohl du die Antwort vergessen hast | Korrigiere diese Bewertungsgewohnheit, bevor du einen der Scheduler beurteilst |
| Du bist nach einem großen Import oder verpassten Lerneinheiten im Rückstand | Prüfe neben der Wahl des Schedulers auch, wie viele neue Karten du hinzufügst und wie du den Rückstand abbaust |
| Du entwickelst einen kleinen Scheduler zu Lehrzwecken | Das ursprüngliche SM-2 eignet sich, um Intervallregeln auf Basis des Leichtigkeitsfaktors zu erklären |

Die Hinweise zu Prüfungen und Rückständen sind praktische Einschätzungen, keine Ergebnisse eines Experiments mit den Schedulern. Vielleicht liegt dein aktuelles Problem vor allem darin, dass du dir zu viel Lernstoff vorgenommen hast. Beginne in diesem Fall mit der Frage, [warum sich Anki-Wiederholungen ansammeln](/de/blog/why-are-there-so-many-anki-reviews/).

## Wechseln, ohne alle fälligen Karten neu zu planen

Die aktuellen Einstellmöglichkeiten findest du im [Anki-Handbuch zu FSRS](https://docs.ankiweb.net/deck-options.html#fsrs):

1. Synchronisiere, erstelle eine Sicherung und prüfe die Kompatibilität deiner Apps und Add-ons für die Wiederholungsplanung.
2. Aktiviere FSRS in den Stapeloptionen. Die Aktivierung gilt für alle Optionsgruppen (Presets), nicht nur für einen einzelnen Stapel.
3. Optimiere die Parameter anhand deines eigenen Wiederholungsverlaufs. Reicht dieser nicht aus, kannst du die Standardwerte verwenden. Kopiere keine Parameter anderer Personen.
4. Beginne bei der gewünschten Behaltensrate („Desired retention“) mit dem Standardwert von 90 %, sofern du keinen Grund hast, ihn zu ändern. Höhere Ziele bedeuten mehr Wiederholungen.
5. Lass die Option **Karten bei Änderungen neu planen** („Reschedule cards on change“) ausgeschaltet. Die neue Planung greift dann bei der nächsten Wiederholung einer Karte, ohne sofort alle Fälligkeitstermine zu verändern.

Unsere [Anleitung zu den FSRS-Einstellungen](/de/blog/fsrs-settings/) erklärt Lernschritte, die Wahl der Behaltensrate und die Optimierung im Detail.

Bewerte einheitlich: **„Nochmal“ (Again) bedeutet, dass du dich nicht erinnern konntest; „Schwer“ (Hard) bedeutet, dass du dich mit Mühe erinnern konntest**. Bewerte die Antwort, die du gegeben hast, statt das Intervall auszuwählen, das dir lieber ist. Hinweise zu teilweise richtigen Antworten findest du in [Ankis Anleitung zur Bewertung](https://docs.ankiweb.net/studying.html) und in unserem [Vergleich von „Nochmal“ und „Schwer“](/de/blog/again-vs-hard-fsrs-flashcards/).

## Halte Aufwand und Ergebnisse fest

Notiere vor dem Wechsel die Werte für eine typische Woche. Wenn dein Zeitplan schwankt, erfasse mehrere Wochen. Halte nach dem Wechsel dieselben Werte fest. Das ist ein praktisches Protokoll für deine Entscheidung, kein kontrolliertes Experiment. Kopiere die Tabelle und fülle die letzten beiden Spalten aus:

| Messgröße | Was du einheitlich erfassen solltest | Vorher: Zeitraum ___ | Nachher: Zeitraum ___ |
| --- | --- | --- | --- |
| Wiederholungsversuche | Alle Versuche, einschließlich mehrfach bearbeiteter Karten | ___ | ___ |
| Wiederholungszeit | Minuten, gemessen mit derselben Methode | ___ | ___ |
| Erinnerungsleistung bei geplanten Wiederholungen | Erfolgreiche Antworten / Versuche für dieselbe Kartengruppe; direkte Wiederholungen nach einer vergessenen Antwort ausschließen | ___ / ___ | ___ / ___ |
| Neue Karten | Tatsächlich hinzugekommene Karten, einschließlich Importen | ___ | ___ |
| Überfällige Wiederholungen | Ausgelassene Tage und Rückstand am Ende der Woche | ___ | ___ |
| Weitere Änderungen | Angestrebte Behaltensrate, Kartenänderungen, Lernen außerhalb der App, Bewertungsgewohnheiten, Unterbrechungen | ___ | ___ |

Lege vor der Auswertung fest, welche Erinnerungsleistung für dich akzeptabel ist. Notiere beispielsweise die niedrigste Behaltensrate, die du akzeptieren würdest, und die wöchentliche Wiederholungszeit, die du dauerhaft aufbringen kannst. Damit legst du deinen Rahmen fest. Es ist keine Zusage, dass ein Scheduler diese Anforderungen erfüllen wird.

Wenn du nur noch halb so viele neue Karten hinzufügst, belegen weniger fällige Wiederholungen nicht, dass FSRS die Ursache dafür ist. Wenn du mehrdeutige Fragen überarbeitest, gibt es für eine bessere Erinnerungsleistung eine weitere plausible Erklärung. Solche Änderungen festzuhalten ist hilfreicher, als die Zahlen besser aussehen lassen zu wollen.

Bei einem schrittweisen Wechsel stammen außerdem manche Intervalle noch vom bisherigen Scheduler, andere schon von FSRS. Karten mit langen Intervallen können erst nach Monaten wieder auftauchen. Frühe Beobachtungen beschreiben deshalb vor allem den Übergang. Ein ruhiges Wochenende reicht nicht aus, um einen Sieger zu bestimmen.

Wenn die Wiederholungszeit über vergleichbare Wochen hinweg sinkt und die Erinnerungsleistung akzeptabel bleibt, hast du einen praktischen Grund, die Einstellungen beizubehalten. Fällt die Erinnerungsleistung unter deine Grenze, prüfe ausgelassene Tage, Kartenqualität, Bewertungen und dein Ziel, bevor du die Veränderung dem Algorithmus zuschreibst. Bleibt der Zeitaufwand hoch, prüfe, ob neuer Lernstoff oder überfällige Wiederholungen dafür verantwortlich sind.

Diese Entscheidung kannst du treffen, ohne Anki zu verlassen. [Nibomo](/de/features/) nutzt ebenfalls FSRS. Ob du Nibomo verwenden möchtest, ist eine eigene Entscheidung: Dabei geht es um deine Abläufe beim Erstellen, Wiederholen und Synchronisieren von Karten. Um FSRS zu nutzen, musst du deine Sammlung nicht in eine andere App übertragen.
