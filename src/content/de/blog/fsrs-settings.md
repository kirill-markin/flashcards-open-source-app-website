---
title: "Die besten FSRS-Einstellungen für Anki 2026: Behaltensrate, Lernschritte und Wiederholungsaufwand"
description: "So wählst du sichere Anki-FSRS-Einstellungen für gewünschte Behaltensrate, Lernschritte, Optimierung, Neuplanung und Arbeitsaufwand in Anki 26.08 mit FSRS-6."
date: "2026-04-25"
updated: "2026-09-08"
image: "/blog/fsrs-settings-v2.png"
keywords:
  - "FSRS Einstellungen"
  - "beste FSRS Einstellungen"
  - "Anki FSRS Einstellungen"
  - "Desired Retention FSRS"
  - "FSRS Learning Steps"
  - "FSRS Simulator"
  - "FSRS Parameter optimieren"
  - "FSRS-6"
---

Ankis **Desired retention** von 90 % auf 95 % anzuheben, klingt nach einer kleinen Änderung. Der Arbeitsaufwand steigt dadurch aber nicht bloß um fünf Prozent. Je höher das Ziel, desto kürzer muss FSRS die Intervalle ansetzen – und bei einer reifen Sammlung kann die Wiederholungswarteschlange erheblich wachsen. Aktivierst du zusätzlich **Reschedule cards on change**, kann ein Teil dieser Arbeit sofort anfallen.

Die besten FSRS-Einstellungen sind deshalb keine Parameterfolge, die du einfach kopierst. Entscheidend ist die Reihenfolge: Lege zuerst fest, welchen Arbeitsaufwand du dauerhaft bewältigen kannst. Wähle innerhalb dieses Rahmens dein Abrufziel, passe das Modell an deinen eigenen Wiederholungsverlauf an und lass bestehende Fälligkeitstermine in Ruhe, solange du sie nicht bewusst neu aufbauen willst.

Die folgenden Bezeichnungen und Verhaltensweisen entsprechen [Anki 26.08](https://github.com/ankitects/anki/releases/tag/26.08) und den dortigen FSRS-6-Einstellungen. Wenn du zunächst das Modell statt der Einstellungen verstehen möchtest, lies [Was ist FSRS?](/blog/what-is-fsrs/). Falls du noch zwischen Schedulern wählst, beginne mit [FSRS vs. SM-2](/blog/fsrs-vs-sm-2/).

> **Offenlegung:** Ich bin Kirill Markin und entwickle die [Flashcards Open Source App](/features/). Anki bietet eine personalisierte Parameteranpassung und experimentelle Simulatoren für den Arbeitsaufwand, die Flashcards derzeit nicht anbietet. Der Vergleich gegen Ende macht diese Unterschiede ausdrücklich deutlich.

**Fakten geprüft am:** 8. September 2026.

![Ein Schleusenwärter testet den Wasserfluss an einem Modell, bevor er die echte Schleuse verändert](/blog/fsrs-settings-v2.png)

## Die Kurzfassung: Starte hier

Für die meisten Anki-Nutzer sind diese Einstellungen ein sicherer Ausgangspunkt, keine allgemeingültige Vorgabe:

| Einstellung oder Gewohnheit | Sicherer Ausgangspunkt | Warum |
| --- | --- | --- |
| Desired retention | `0.90` | Das ist Ankis Standardwert und sorgt für ein ausgewogenes Verhältnis zwischen Erinnern und Wiederholungsaufwand. |
| FSRS-Parameter | **Optimize Current Preset** verwenden; Gewichte weder übernehmen noch von Hand bearbeiten | Der Optimierer passt das Modell an deinen Wiederholungsverlauf an. |
| Optimierungshäufigkeit | Höchstens monatlich; alle paar Monate reicht normalerweise aus | Anki empfiehlt keine häufige Optimierung. |
| Learning steps | Wenige Schritte verwenden, die am selben Tag abgeschlossen werden können | Lange Schrittfolgen verzögern die modellbasierte Planung. |
| Relearning steps | Auf ein Minimum beschränken und unter einem Tag halten | Nach einer fehlgeschlagenen Wiederholung gilt dieselbe Grenze. |
| Reschedule cards on change | Aus | Neue Einstellungen können bei künftigen Wiederholungen greifen, ohne die heutige Warteschlange neu aufzubauen. |
| Maximum interval | Den Standardwert von 100 Jahren beibehalten | Eine kürzere Obergrenze holt reife Karten häufiger zurück. |
| New cards/day | Anhand eines dauerhaft tragbaren Arbeitsaufwands festlegen | Jede neue Karte verursacht jetzt Lernaufwand und später Wiederholungen. |
| Again oder Hard | Again bedeutet gescheiterter Abruf; Hard bedeutet schwieriger, aber erfolgreicher Abruf | Falsche Bewertungen liefern dem Modell einen falschen Verlauf. |

Wenn du mit deinen Wiederholungen gut zurechtkommst und deine Konfiguration diesen Empfehlungen bereits ähnelt, gibt es womöglich nichts zu reparieren. Einstellungen zu pflegen ist noch kein Lernen.

## Halte drei Entscheidungen auseinander

**Desired retention**, FSRS-Parameter und täglicher Arbeitsaufwand landen oft in einem Topf. Dabei steuern sie unterschiedliche Dinge:

- **Desired retention** ist dein Abrufziel. Du wählst es anhand deiner Ziele und der verfügbaren Lernzeit.
- **FSRS-Parameter** passen das Gedächtnismodell an deinen Wiederholungsverlauf an. Ankis Optimierer berechnet sie.
- **Limits für neue Karten und Wiederholungen** steuern, wie viel Material in das System gelangt und wie viel fällige Arbeit Anki dir pro Tag anzeigen kann.

Mit dieser Trennung wird die Fehlersuche deutlich einfacher. Eine große Warteschlange bedeutet nicht automatisch, dass deine Parameter falsch sind. Ein Deck, bei dem viel auf dem Spiel steht, braucht nicht automatisch ein eigenes Parameter-Preset. Und eine niedrigere **Desired retention** repariert keinen Zustrom neuer Karten, der von Anfang an nicht tragbar war.

## Richte die Desired retention nach dem Arbeitsaufwand aus, nicht nach deinem Ehrgeiz

Die **Desired retention** gibt FSRS vor, welche Erinnerungswahrscheinlichkeit eine Wiederholungskarte haben soll, wenn sie fällig wird. Bei `0.90` plant FSRS für eine vorhergesagte Abrufwahrscheinlichkeit von 90 %. Das ist ein Modellziel – keine Garantie, dass du in jeder Sitzung oder Prüfung genau 90 % der Antworten richtig hast.

Der Zielkonflikt wirkt in beide Richtungen:

- Erhöhst du die **Desired retention**, werden die Intervalle kürzer und die Zahl der Wiederholungen steigt.
- Senkst du sie, werden die Intervalle länger und die Zahl der Fehlschläge steigt.
- Setzt du sie zu niedrig an, kann das zusätzliche Wiederlernen nach Fehlschlägen einen Teil der Zeit aufzehren, die du eigentlich sparen wolltest.

Ankis Standardwert liegt bei 90 %. Die [Anleitung zur Desired retention](https://docs.ankiweb.net/deck-options.html#desired-retention) warnt davor, dass der Arbeitsaufwand schnell steigt, wenn sich das Ziel 100 % nähert, und empfiehlt, unter 97 % zu bleiben. Die offizielle [Erklärung zur optimalen Behaltensrate](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) betrachtet das andere Ende der Kurve: Auch eine sehr niedrige Behaltensrate kann ineffizient sein, weil vergessene Karten zusätzliche Arbeit verursachen.

Starte bei `0.90` und ändere den Wert erst, nachdem du den Arbeitsaufwand geprüft hast. Ein höheres Ziel kann für Stoff sinnvoll sein, bei dem Vergessen echte Konsequenzen hat. Ein niedrigeres Ziel kann passen, wenn Wiederholungen wertvollere Lernaktivitäten verdrängen. Keine der beiden Änderungen repariert unklare Karten, unehrliche Bewertungen oder zu viele neue Karten.

### Behaltensrate eines Decks und Preset-Parameter haben unterschiedliche Geltungsbereiche

In Anki 26.08 hat **Desired retention** zwei Geltungsbereiche: **Shared Preset** und **This deck**. Du kannst zusammengehörige Decks also in einem Parameter-Preset belassen und trotzdem einem einzelnen Deck ein eigenes Behaltensziel geben.

Nutze diese Überschreibung, wenn Vergessen je nach Deck unterschiedlich schwer wiegt. Ein Deck für eine Zulassungsprüfung kann ein höheres Ziel rechtfertigen als ein Referenz-Deck mit niedriger Priorität, selbst wenn beide dasselbe angepasste Modell verwenden.

Die FSRS-Parameter werden durch die Auswahl von **This deck** nicht deckspezifisch. Standardmäßig passt Anki die Parameter anhand des Wiederholungsverlaufs aller Decks an, die dem aktuellen Preset zugewiesen sind. Wenn sich Gruppen von Decks in ihrer subjektiven Schwierigkeit stark unterscheiden, sind getrennte Presets der vorgesehene Weg, um sie separat anzupassen.

## Nutze Help Me Decide und den Simulator für unterschiedliche Fragen

Anki 26.08 bietet dafür zwei getrennte experimentelle Funktionen:

- **Help Me Decide (Experimental)** zeigt eine personalisierte Kurve für Behaltensrate und Arbeitsaufwand. Damit beantwortest du die Frage: „Welches Behaltensziel passt zu der Zahl an Wiederholungen oder Minuten, die ich dauerhaft bewältigen kann?“
- **FSRS Simulator (Experimental)** schätzt, wie sich eine Konfiguration im Laufe der Zeit verhalten könnte. Nutze ihn, um Änderungen an Behaltensrate, Zahl neuer Karten, Wiederholungslimits und maximalem Intervall zu vergleichen.

Die [Dokumentation zum FSRS Simulator](https://docs.ankiweb.net/deck-options.html#the-simulator) nennt seine wichtigsten Eingaben:

- Anzahl der zu simulierenden Tage
- zusätzliche zu simulierende neue Karten
- neue Karten pro Tag
- maximale Wiederholungen pro Tag
- maximales Intervall
- Desired retention und die FSRS-Parameter des Presets

Die Simulation berücksichtigt außerdem die tatsächlichen Gedächtniszustände der Karten im Preset. Für eine reife Sammlung ist das aussagekräftiger, als die Zahl der heute fälligen Karten pauschal mit einem Prozentsatz hochzurechnen.

Führe drei Szenarien durch, bevor du die aktive Konfiguration änderst:

1. Deine aktuelle Behaltensrate und Zahl neuer Karten.
2. Das Behaltensziel, das du erwägst.
3. Dasselbe Ziel mit weniger neuen Karten pro Tag.

Der dritte Durchlauf prüft eine naheliegende Alternative: Behalte das Abrufziel bei und verlangsame den Zustrom neuen Materials. Ergibt das eine tragbare Prognose, musst du nicht mehr Vergessen in Kauf nehmen, nur um die Warteschlange zu beruhigen. Ausführlicher behandelt das der Leitfaden [Wie viele neue Karteikarten pro Tag?](/blog/how-many-new-flashcards-per-day/).

Beide Werkzeuge liefern Schätzungen. Ausgelassene Tage, bearbeitete Karten, neues Material und veränderte Bewertungsgewohnheiten können dazu führen, dass der tatsächliche Arbeitsaufwand von der Grafik abweicht. Nutze den Vergleich, um eine Richtung zu wählen – nicht als Versprechen für eine exakte Warteschlange in einigen Monaten.

Ältere Leitfäden erwähnen womöglich stattdessen **Compute Minimum Recommended Retention**, kurz CMRR. Anki hat diese Funktion mit Version 25.07 entfernt. Für die Wahl der **Desired retention** gehört sie nicht mehr zum aktuellen Vorgehen.

## Optimiere FSRS-Parameter anhand deines eigenen Verlaufs

Die **Desired retention** beschreibt dein Ziel. Die FSRS-Parameter beschreiben, wie das Modell zu deinen Wiederholungen passt.

Verwende in Anki 26.08 **Optimize Current Preset**, um die Parameter an das aktive Preset anzupassen. Standardmäßig berücksichtigt Anki den Wiederholungsverlauf jedes Decks, das dieses Preset verwendet. Du kannst die Suche anpassen, wenn die Datengrundlage enger gefasst werden soll. **Optimize All Presets** aktualisiert alle Presets in einem Durchgang.

Gib Gewichte weder von Hand ein noch kopiere sie aus Reddit, einem Video oder dem Deck einer anderen Person. Deren Karten, Wiederholungszeitpunkte und Bewertungsgewohnheiten sind nicht dein Verlauf. Eine sauber aussehende Reihe von [FSRS-6-Gewichten](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) ist keine übertragbare Lernstrategie.

Optimiere erst wieder, wenn sich ein aussagekräftiger neuer Wiederholungsverlauf angesammelt hat. Laut Anki-Handbuch reicht einmal im Monat aus; die Hinweise in Anki 26.08 nennen einmal alle paar Monate als ausreichend. Die praktische Schlussfolgerung bleibt dieselbe: Es gibt keinen Grund, jede Woche zu optimieren – geschweige denn nach jeder Sitzung.

### Nutze den Health Check für das aktuelle Preset

Aktiviere **Check health when optimizing (slow)**, wenn Anki prüfen soll, wie gut sich FSRS an den Verlauf des aktuellen Presets anpassen kann. Diese Prüfung läuft mit **Optimize Current Preset**, nicht mit **Optimize All Presets**.

Fällt das Ergebnis schlecht aus, prüfe zuerst die Daten, bevor du die Gewichte veränderst. Die [Anki-Anleitung zu FSRS-Parametern](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) nennt häufige Ursachen: weniger als einige Hundert Wiederholungen, die Verwendung von Hard nach einem Fehlschlag und das Auslassen von Again bei gescheitertem Abruf. Solange kaum brauchbarer Verlauf vorhanden ist, behältst du besser die Standardwerte bei und optimierst später, statt die Parameter eines anderen Nutzers zu übernehmen.

## Again bedeutet gescheiterter Abruf; Hard bedeutet bestanden

Die Bewertungen richtig zu verwenden ist genauso wichtig wie jede Einstellung.

Drücke **Again**, wenn du die geforderte Antwort nicht wiedergeben konntest oder falsch lagst. **Hard** ist nur dann richtig, wenn du dich korrekt erinnert hast, allerdings erst mit großer Anstrengung oder nach einigem Zögern. Good und Easy gelten ebenfalls als bestanden.

Wenn du Hard drückst, um ein kurzes Again-Intervall zu vermeiden, zeichnest du nach einem Fehlschlag einen Erfolg auf. FSRS lernt dann aus dem falschen Ereignis. Wähle die Schaltfläche, die deinen Abruf beschreibt – nicht das Intervall, das du laut Beschriftung über den Schaltflächen gern hättest.

Unklare Karten machen ehrliche Bewertungen schwieriger. Wenn eine Frage fünf Fakten verlangt und du dich an vier erinnerst, hat das Planungsproblem bereits im Editor begonnen. Teile die Karte oder formuliere sie neu. Für Karten, die trotz wiederholter Wiederholungen immer wieder scheitern, lies [So reparierst du Leech-Karteikarten](/blog/how-to-fix-leech-flashcards/).

## Halte FSRS-Lernschritte kurz – oder lass die Felder bewusst leer

Learning steps und Relearning steps steuern kurze Wiederholungsabstände, bevor die reguläre langfristige Planung übernimmt. Sie sind kein zweites Behaltensziel.

Ankis FSRS-Anleitung empfiehlt zwei Grenzen:

- Jeder Schritt sollte kürzer als ein Tag sein und sich am selben Tag abschließen lassen.
- Die Zahl der Wiederholungen am selben Tag sollte klein bleiben.

Lange Folgen wie `1m 10m 1d 3d` übertragen eine alte SM-2-Gewohnheit auf FSRS. Schritte von einem Tag oder länger verzögern die modellbasierte Planung und können zu verwirrenden Beschriftungen auf den Schaltflächen führen – etwa wenn Hard ein längeres Intervall anzeigt als Good.

Eine kompakte Folge wie `1m 10m` mit einem Relearning step von `10m` ist ein konservativer Ausgangspunkt, sofern sie zu deinen Lernsitzungen passt. Mehr Wiederholungen am selben Tag sind nicht automatisch besser.

In Anki 26.08 darf außerdem jedes der beiden Felder für (Re-)Learning steps leer bleiben. Bei aktiviertem FSRS übergibt ein leeres Feld diese kurzfristige Planung an FSRS. Das ist experimentell, und ein Again-Intervall kann einen Tag oder länger betragen. Behalte kurze manuelle Schritte bei, wenn du eine planbare Wiederholung am selben Tag brauchst. Leere ein Feld nur, wenn du bewusst akzeptierst, dass FSRS diesen Zeitpunkt bestimmt.

## Lass Reschedule cards on change für einen schrittweisen Übergang ausgeschaltet

Wenn **Reschedule cards on change** ausgeschaltet bleibt – das ist die Standardeinstellung –, schreibt Anki beim Aktivieren von FSRS oder beim Ändern der **Desired retention** oder der Parameter bestehende Fälligkeitstermine nicht sofort neu. Die neue Konfiguration greift erst bei künftigen Wiederholungen, sodass sich die Warteschlange schrittweise verändert.

Speicherst du eine dieser FSRS-Änderungen mit eingeschalteter Option, berechnet Anki die Fälligkeitstermine sofort neu. Je nach neuem Ziel und Zustand der Karten können dadurch viele Karten auf einmal fällig werden. Anki fügt außerdem Wiederholungseinträge für neu geplante Karten hinzu, wodurch die Sammlung größer wird.

Diese Option ist nur sinnvoll, wenn du tatsächlich einen rückwirkenden Neuaufbau möchtest. Bei einer reifen Sammlung:

1. Erstelle ein frisches Backup und vergewissere dich, dass du weißt, wie du die Änderung rückgängig machst oder das Backup wiederherstellst.
2. Führe den Simulator mit den vorgesehenen Einstellungen aus.
3. Wähle genau eine Konfigurationsänderung; kombiniere nicht mehrere Experimente.
4. Aktiviere die Neuplanung beim Speichern nur, wenn du die Fälligkeitstermine sofort neu berechnen möchtest und die Folgen bewältigen kannst.

Anki empfiehlt ausdrücklich ein Backup für den Wechsel von SM-2 mit aktivierter Neuplanung. Der ausführlichere [Leitfaden für Karteikarten-Backups](/blog/how-to-back-up-flashcards/) erklärt, warum ein verlässlicher Wiederherstellungsweg genauso wichtig ist wie die Backup-Datei.

## Halte das maximale Intervall großzügig

Ankis maximales Intervall liegt standardmäßig bei 100 Jahren. Das wirkt erst einmal merkwürdig. Es ist aber nur eine Obergrenze – kein Versprechen, dass jede reife Karte für ein Jahrhundert verschwindet.

Eine niedrigere Obergrenze holt sicher beherrschte Karten früher zurück und erhöht den Arbeitsaufwand. Am Maximum können Hard, Good und Easy alle dasselbe Intervall anzeigen, weil keines davon die Obergrenze überschreiten darf.

Ein kürzeres maximales Intervall kann sinnvoll sein, wenn eine Prüfung einen echten Zeithorizont vorgibt, der Stoff sich häufig ändert oder eine berufliche Vorschrift unabhängig von der vorhergesagten Erinnerung regelmäßige Wiederholungen verlangt. Stimme diese Obergrenze auf deinen Kalender und den Simulator ab, statt aus Sorge einfach eine kleine Zahl zu wählen. [So lernst du mit FSRS für eine Prüfung](/blog/how-to-study-for-an-exam-with-fsrs/) behandelt diesen engeren Anwendungsfall.

Beim gewöhnlichen langfristigen Lernen solltest du die Obergrenze großzügig lassen. Die **Desired retention** steuert bereits, wann die vorhergesagte Erinnerungswahrscheinlichkeit eine Wiederholung auslösen soll.

## Beziehe neue Karten in die Entscheidung über den Arbeitsaufwand ein

FSRS kann Wiederholungen verteilen. Einen unbegrenzten Zustrom neuer Karten kann es aber nicht in ein tragbares Pensum verwandeln. Jede neue Karte verursacht jetzt Lernaufwand und später weitere Wiederholungen.

Wenn die Warteschlange zu groß wird, prüfe diese Punkte, bevor du die **Desired retention** senkst:

- neue Karten pro Tag
- große Importe oder Stapel generierter Karten
- ein Limit für maximale Wiederholungen, das weiterhin fällige Arbeit versteckt
- Leech-Karten und unklare Karten, die wiederholte Versuche kosten
- ausgelassene Wiederholungstage

Verwende **Additional new cards to simulate**, wenn du weißt, dass ein Deck wachsen wird. Eine Prognose, die nur auf der heutigen Sammlung basiert, bildet den Arbeitsaufwand nach einem großen Import nicht ab.

Ist das Ergebnis zu hoch, reduziere die Zahl neuer Karten und simuliere erneut. So behältst du dein Abrufziel bei, ohne dem Scheduler eine höhere Vergessensrate vorzugeben.

## Anki und Flashcards bieten unterschiedliche FSRS-Einstellungen

Beide Produkte verwenden FSRS-6. Die FSRS-Einstellungen von Anki lassen sich jedoch nicht eins zu eins auf die Flashcards Open Source App übertragen.

| Funktion | Anki 26.08 | Flashcards Open Source App |
| --- | --- | --- |
| Desired retention | **Shared Preset** oder **This deck** | Pro Arbeitsbereich konfigurierbar; Standard `0.90` |
| FSRS-Parameter | **Optimize Current Preset** oder **Optimize All Presets** anhand des Wiederholungsverlaufs | Die offiziellen FSRS-6-Standardgewichte sind fest vorgegeben und in v1 nicht vom Nutzer konfigurierbar. |
| Learning steps | Konfigurierbar; die Planung durch FSRS bei leerem Feld ist experimentell | Pro Arbeitsbereich konfigurierbar; Standard `1m 10m` |
| Relearning steps | Konfigurierbar; die Planung durch FSRS bei leerem Feld ist experimentell | Pro Arbeitsbereich konfigurierbar; Standard `10m` |
| Maximum interval | Standardmäßig 100 Jahre | Standardmäßig 36.500 Tage, also ebenfalls 100 Jahre |
| Änderungen an Einstellungen | Standardmäßig nur für künftige Wiederholungen; optionale rückwirkende Neuplanung | Nur für künftige Wiederholungen; bestehende Fälligkeitstermine werden nicht neu aufgebaut. |
| Werkzeuge für den Arbeitsaufwand | **Help Me Decide (Experimental)** und **FSRS Simulator (Experimental)** | Kein vergleichbarer Simulator für den Arbeitsaufwand in v1 |

Flashcards verwendet die üblichen Bewertungen Again, Hard, Good und Easy und speichert den FSRS-Gedächtniszustand auf Kartenebene. Die Scheduler im Backend sowie in iOS und Android sind unabhängige Implementierungen mit demselben Verhalten. Der Wiederholungsablauf im Web greift auf den Backend-Scheduler zurück, statt eine vierte Implementierung hinzuzufügen.

Diese Grenzen und Standardwerte sind in der öffentlichen [Spezifikation zur FSRS-Planungslogik von Flashcards](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md) dokumentiert. Der Unterschied ist klar: Flashcards bietet eine praktische FSRS-6-Konfiguration auf Arbeitsbereichsebene, während Anki feinere Geltungsbereiche, personalisierte Anpassung und Simulation bereitstellt. Wenn diese Funktionen unverzichtbar sind, ist Anki die bessere Wahl.

## Ein sichererer Ablauf für eine reife Sammlung

Wenn du bereits einen Wiederholungsverlauf über Monate oder Jahre hast, gehe in dieser Reihenfolge vor:

1. **Korrigiere die Bedeutung der Bewertungen.** Again bedeutet Fehlschlag; Hard bedeutet schwieriger Erfolg.
2. **Optimiere das aktuelle Preset.** Passe es an deinen eigenen Verlauf an, statt Gewichte zu bearbeiten oder zu kopieren.
3. **Führe bei Bedarf den Health Check aus.** Behandle einen dünnen oder inkonsistenten Verlauf als Datenproblem.
4. **Verwende Help Me Decide.** Wähle einen Behaltensbereich anhand der Zahl an Wiederholungen oder Minuten, die du dauerhaft bewältigen kannst.
5. **Führe den Simulator aus.** Vergleiche die aktuelle Konfiguration, das vorgesehene Ziel und eine geringere Zahl neuer Karten.
6. **Ändere nur eine aktive Stellschraube.** Passe zuerst die Behaltensrate oder die Zahl neuer Karten an und beobachte dann die tatsächliche Warteschlange.
7. **Halte die Schritte kurz.** Entferne tageübergreifende Learning- und Relearning-Folgen; verwende leere Felder nur als Experiment.
8. **Lass das maximale Intervall großzügig.** Verkürze es nur für einen klar definierten Zeithorizont oder eine konkrete Vorgabe.
9. **Lass die Neuplanung ausgeschaltet.** Wenn du einen sofortigen Neuaufbau brauchst, erstelle zuerst ein Backup und plane die entstehende Warteschlange ein.

Diese Reihenfolge hält den Wiederholungsplan einer reifen Sammlung so lange wie möglich umkehrbar. Sie verhindert außerdem, dass drei verschiedene Probleme – die Modellanpassung, das Abrufziel und der Zustrom neuen Materials – zu einem einzigen Einstellungsrätsel verschmelzen.

## FAQ zu den besten FSRS-Einstellungen

### Sind 90 % die beste Desired retention für FSRS?

Sie sind der sicherste allgemeine Ausgangspunkt, weil sie Ankis Standard entsprechen und den steilsten Teil der Arbeitsaufwandskurve bei hoher Behaltensrate vermeiden. Welcher Wert für ein einzelnes Deck am besten passt, hängt von den Kosten des Vergessens und dem Arbeitsaufwand ab, den du dauerhaft bewältigen kannst. Prüfe **Help Me Decide (Experimental)**, bevor du ihn änderst.

### Sollte ich die Desired retention auf 95 % setzen?

Erst nachdem du die zusätzlichen Wiederholungen oder Minuten geprüft hast. Ein sauberes Deck, bei dem viel auf dem Spiel steht, kann 95 % rechtfertigen. Eine große Sammlung für gelegentliches Lernen kann dadurch unnötig arbeitsintensiv werden. Aktiviere nicht gleichzeitig die rückwirkende Neuplanung, außer du willst die Fälligkeitstermine bewusst sofort neu aufbauen.

### Wie oft sollte ich FSRS-Parameter optimieren?

Einmal im Monat ist bereits häufig genug. Laut den Hinweisen in Anki 26.08 reicht sogar einmal alle paar Monate aus. Optimiere erst, wenn sich ein aussagekräftiger neuer Verlauf angesammelt hat – nicht täglich oder wöchentlich.

### Sollten die FSRS Learning steps leer sein?

Leere Felder für **Learning steps** oder **Relearning steps** lassen Anki 26.08 die jeweilige kurzfristige Planung an FSRS übergeben. Die Funktion ist experimentell, und ein Again-Intervall kann einen Tag oder länger sein. Wenige Schritte am selben Tag bleiben die konservative Wahl.

### Plant eine Änderung der FSRS-Einstellungen bestehende Anki-Karten neu?

Standardmäßig nicht. Solange **Reschedule cards on change** ausgeschaltet ist, wirken sich neue Einstellungen auf künftige Wiederholungen aus, ohne die Warteschlange sofort neu aufzubauen. Das Einschalten verändert Fälligkeitstermine und kann viele Karten auf einmal fällig machen. Erstelle deshalb zuerst ein Backup.

### Gehört CMRR noch zu Anki?

Nein. Anki hat **Compute Minimum Recommended Retention** mit Version 25.07 entfernt. Verwende in Anki 26.08 **Help Me Decide (Experimental)** und **FSRS Simulator (Experimental)**, um die Behaltensrate mit dem geschätzten Arbeitsaufwand zu vergleichen.

### Verwendet Flashcards dieselben Einstellungen wie Anki?

Flashcards verwendet FSRS-6 und bietet pro Arbeitsbereich **Desired retention**, Learning steps, Relearning steps, Maximum interval und Fuzz. Das vollständige Einstellungsmodell von Anki wird nicht übernommen: In v1 sind die Gewichte fest vorgegeben, Änderungen wirken nur in die Zukunft und es gibt weder eine personalisierte Parameteroptimierung noch einen Simulator für den Arbeitsaufwand.

## Lege den Arbeitsaufwand vor dem Prozentsatz fest

Gute FSRS-Einstellungen richten die Wiederholungswarteschlange an einem echten Lernplan aus. Starte bei 90 %, schätze den Arbeitsaufwand, begrenze die Zahl neuer Karten und erhöhe die Behaltensrate nur, wenn dir die bessere Erinnerung die zusätzlichen Wiederholungen wert ist. Halte die Schritte kurz, das maximale Intervall großzügig und die Bewertungsdaten ehrlich.

Danach kannst du den Einstellungsdialog schließen. Regelmäßige Wiederholungen helfen dem Scheduler mehr als noch ein Abend voller Feintuning.
