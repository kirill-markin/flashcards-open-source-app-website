---
title: "FSRS-Einstellungen 2026: Desired Retention, Learning Steps und Wiederholungslast ohne Feintuning-Falle"
description: "Ein praktischer Leitfaden zu FSRS-Einstellungen 2026: Desired Retention, Learning Steps, Maximum Interval, neue Karten pro Tag und wann du aufhören solltest zu optimieren."
date: "2026-04-25"
keywords:
  - "FSRS Einstellungen"
  - "Anki FSRS Einstellungen"
  - "desired retention FSRS"
  - "FSRS learning steps"
  - "beste FSRS Einstellungen"
  - "FSRS Wiederholungslast"
  - "Spaced Repetition Einstellungen"
  - "FSRS Flashcards"
---

Der seltsamste FSRS-Fehler ist nicht, die Retention ein bisschen zu hoch oder zu niedrig zu setzen. Es ist, drei Abende am Scheduler zu drehen, während die Hälfte des Decks noch Karten enthält wie "Erkläre Kapitel 4".

Ich verstehe, warum das passiert. Sobald Menschen entschieden haben, dass FSRS besser als SM-2 ist, suchen sie als Nächstes nach **FSRS Einstellungen** oder **Anki FSRS Einstellungen**. Der Algorithmus klingt ernst, die Optionen sehen mathematisch aus, und plötzlich fühlt sich Flashcard-Lernen wie Datenbankkonfiguration an.

So dramatisch muss es nicht werden.

![Warmer Schreibtisch mit Flashcards, kleinem Retention-Regler und ruhiger Lernszene am Abend](/blog/fsrs-settings.png)

## FSRS-Einstellungen sind eine Lastentscheidung, kein Persönlichkeitstest

Die wichtigste FSRS-Option ist nicht nur eine Gedächtnisoption.

Sie ist ein Tauschgeschäft.

Wenn du desired retention erhöhst, sagst du dem System, dass Karten früher zurückkommen sollen, damit du seltener vergisst. Das kann sinnvoll sein. Es bedeutet auch mehr Wiederholungen. Wenn du sie senkst, akzeptierst du mehr Vergessen für eine leichtere Queue.

Das ist keine moralische Frage. Es ist eine Betriebsfrage.

Wenn deine tägliche Queue schon schwer ist, kann höhere Retention das System schlechter machen, nur weil sie seriöser klingt. Wenn du für eine wichtige Prüfung lernst und das Deck sauber ist, kann eine kleine Erhöhung sinnvoll sein.

Das Problem beginnt, wenn Menschen die "besten" FSRS-Einstellungen suchen, ohne ihren echten Tag anzusehen.

## Beginne mit desired retention

Desired retention ist die Einstellung, die die meisten zuerst verstehen sollten.

Einfach gesagt: Sie sagt dem Scheduler, wie wahrscheinlich du eine Karte erinnern willst, wenn sie fällig wird. `0.90` bedeutet, dass das System ungefähr 90% Abrufwahrscheinlichkeit beim Review anstrebt.

Das [Anki-Handbuch](https://docs.ankiweb.net/deck-options.html#desired-retention) beschreibt diesen Tausch klar: Höhere desired retention verkürzt Intervalle und erhöht Reviews, und die Last steigt schnell, wenn der Wert gegen 1.0 geht.

Genau dort liegt die Falle.

Von 90% auf 95% zu gehen, wirkt im Einstellungsfeld klein. Im Alltag kann es sich anfühlen, als hätte dir die App einen Nebenjob organisiert.

Ich würde langweilig starten:

- nutze den Standard, wenn deine Reviews machbar sind
- senke den Zielwert nur, wenn die Queue klar zu schwer ist und mehr Vergessen akzeptabel bleibt
- erhöhe ihn nur, wenn das Material die zusätzliche Zeit rechtfertigt
- ändere langsam und beobachte die Folgen

Ziel ist nicht, den Einstellungsbildschirm zu gewinnen. Ziel ist, weiter zu wiederholen.

## 90 Prozent ist ein guter Startpunkt, kein Gesetz

Der Standardwert von 90% ist ein guter Schwerpunkt.

Er ist keine magische Zahl.

Beim lockeren Sprachenlernen kann etwas weniger gut sein, wenn es die Gewohnheit schützt. Für Medizin, Recht, Finanzen oder Zertifizierungen kann etwas mehr Sicherheit sinnvoll sein, besonders kurz vor einer Prüfung. Bei einem chaotischen Deck voller schwacher KI-Karten führt höhere Retention oft nur dazu, dass du schlechte Karten häufiger siehst.

Das ist unangenehm, aber nützlich.

Wenn eine Karte schlecht geschrieben ist, machen FSRS-Einstellungen sie nicht zu gutem Lernmaterial. Sie entscheiden nur, wann die schlechte Karte wiederkommt.

Bevor ich Retention erhöhe, würde ich eine einfachere Frage stellen: Würde dieses Deck besser werden, wenn ich 15% lösche?

Oft ja.

## Kopiere keine fremden FSRS-Parameter

Desired retention wählst du selbst.

FSRS-Parameter nicht.

Der Sinn der Parameteroptimierung ist, dass der Scheduler aus deiner Review-Historie lernt. Die Parameter einer anderen Person zu kopieren, nur weil der Screenshot gut aussieht, unterläuft diesen Sinn. Ihre Karten, Abrufgewohnheiten, Deck-Reife und Button-Nutzung sind nicht deine.

Die [FSRS-Dokumentation zu optimal retention](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) ist hilfreich, weil sie Retention als Balance zwischen Wissen und Arbeitslast erklärt, nicht als Zahl, die man aus einem Forum übernimmt.

Praktisch heißt das:

- ändere FSRS-Parameter nicht manuell, wenn du den Grund nicht genau erklären kannst
- kopiere keine Parameter aus Foren
- optimiere mit deiner eigenen Review-Historie, wenn das Tool es unterstützt
- behandle Parameter-Tuning als Wartung, nicht als Hobby

Hier ist weniger tun tatsächlich professioneller.

## Halte Learning Steps langweilig

Bei Learning Steps leben viele alte SM-2-Gewohnheiten weiter.

Lange Ketten wie `1m 10m 1d 3d` wirken sorgfältig. Mit FSRS können sie stören. Der Scheduler soll nach der ersten Lernphase das langfristige Timing übernehmen. Wenn Learning Steps über Tage laufen, verzögerst du genau den Teil, wegen dem du FSRS eingeschaltet hast.

Das Anki-Handbuch empfiehlt bei FSRS Learning und Relearning Steps unter einem Tag und möglichst wenige Schritte.

Das ist guter Rat.

Für die meisten Decks würde ich Steps kurz halten und die gesparte Zeit in bessere Karten stecken:

- überladene Prompts teilen
- lange Antworten kürzen
- Wiedererkennen in aktiven Abruf verwandeln
- Karten löschen, die nur existieren, weil KI sie höflich erzeugt hat

Der Scheduler funktioniert besser, wenn die Karte selbst es wert ist, geplant zu werden.

## Vorsicht mit Maximum Interval

Maximum interval wirkt harmlos, weil es wie eine Sicherheitsgrenze aussieht.

Es kann aber leise zusätzliche Arbeit erzeugen.

Wenn du Intervalle zu stark deckelst, kommen reife Karten zurück, obwohl FSRS sie weiter weggeschickt hätte. Das kann für ein nahes Examen oder wirklich kritisches Wissen sinnvoll sein. Als allgemeine Angst-Einstellung ist es meistens teuer.

Ein sehr kurzes maximum interval macht aus Spaced Repetition eher regelmäßige Kontrolle.

Das kostet.

Ich würde es nur mit echtem Grund senken:

- der Prüfungstermin ist nah
- das Material verfällt oder ändert sich
- das Deck enthält kritisches Arbeitswissen
- du hast die Last gemessen und kannst sie tragen

Sonst lass einfache, reife Karten weit genug wegbleiben, damit Zeit für die Karten bleibt, die dich wirklich brauchen.

## Prüfe neue Karten, bevor du FSRS beschuldigst

Die meisten Lastprobleme sind Eingangsprobleme.

Der Scheduler bekommt die Schuld, weil er morgens mit der Rechnung auftaucht. Die Rechnung stammt aber meist von neuen Karten gestern, einem Import letzte Woche oder dem KI-Batch mit 300 Karten, der zwölf Minuten lang effizient aussah.

Wenn Reviews zu viel werden, würde ich vor FSRS diese Punkte prüfen:

- wie viele neue Karten du pro Tag hinzufügst
- wie viele generierte Karten nie editiert wurden
- wie viele Karten mehrere Fakten auf einmal testen
- wie viele alte Karten suspendiert oder gelöscht werden sollten

Dazu passt dieser Artikel:

- [How Many New Flashcards Per Day in 2026?](https://flashcards-open-source-app.com/blog/how-many-new-flashcards-per-day/)

FSRS kann ein gutes Deck ruhiger planen. Es kann ein zu großes Deck nicht klein machen.

## Was ich für Prüfungen ändern würde

Prüfungsdecks sind anders, weil das Datum real ist.

Wenn die Prüfung nah ist, ist die beste FSRS-Einstellung nicht immer dieselbe wie für ein Langzeit-Sprachdeck. Vielleicht akzeptierst du für ein paar Wochen mehr Last, weil das Material jetzt zählt.

Trotzdem würde ich heroische Einstellungen meiden.

Bei Prüfungen ändere ich zuerst den Ablauf, nicht den Algorithmus:

1. höre früher mit neuen Karten auf, als angenehm wirkt
2. halte desired retention im normalen Bereich, außer das Deck ist sauber
3. nutze Tags oder gefilterte Reviews für schwache Themen
4. erhöhe Last nur, wenn der Kalender sie aufnehmen kann
5. schütze die letzte Woche vor riesigen Importen

Für diesen Fall passt dieser Leitfaden besser:

- [How to Study for an Exam With FSRS in 2026](https://flashcards-open-source-app.com/blog/how-to-study-for-an-exam-with-fsrs/)

Kurz gesagt: Prüfungen rechtfertigen strengere Reviews. Sie rechtfertigen kein Chaos.

## Wo Flashcards hineinpasst

[Flashcards](https://flashcards-open-source-app.com/) behandelt FSRS als Produktvertrag, nicht als Badge auf einer Landingpage.

Die aktuelle Produktrichtung passt zu den Einstellungen, die für ernsthafte Reviews wichtig sind:

- Front/Back-Karten statt vager Notizblöcke
- KI-gestützte Entwürfe mit der Erwartung, dass du editierst
- FSRS-Scheduling für den echten Review-Loop
- Workspace-Einstellungen wie desired retention, learning steps, relearning steps, maximum interval und fuzz
- gehostete Web-App plus Open-Source-Code für Menschen, die wissen wollen, wie das System funktioniert

Der letzte Punkt ist für FSRS-Nutzer wichtig.

Wenn du nach **beste FSRS Einstellungen** suchst, interessiert dich wahrscheinlich auch, ob ein Produkt den Scheduler hinter vagen Marketingwörtern versteckt. Ich würde lieber ein Tool nutzen, das das Review-Modell ernsthaft ins Produktdesign einbaut.

## Eine einfache FSRS-Checkliste

Wenn ich heute ein neues Deck einrichte, halte ich die Liste kurz:

| Einstellung | Praktischer Start | Wann erneut prüfen |
|---|---|---|
| Desired retention | Starte nahe am Standard | Reviews sind zu schwer oder Material braucht höhere Sicherheit |
| FSRS-Parameter | Aus eigener Historie optimieren | Es gibt genug Review-Historie und das Tool unterstützt es |
| Learning steps | Kurz und minimal | Same-Day-Lernen fühlt sich zu gehetzt oder zu repetitiv an |
| Relearning steps | Einfach halten | Fehlgeschlagene reife Karten kommen in schlechtem Rhythmus zurück |
| Maximum interval | Großzügig lassen, solange kein Grund dagegen spricht | Prüfung, kritisches Wissen oder gemessene Retentionslücken |
| New cards/day | Niedriger als dein Ehrgeiz | Tägliche Reviews verdrängen das echte Leben |

Nicht glamourös.

Nützlich.

## Die beste FSRS-Einstellung ist die, mit der du weiterlernst

Menschen suchen **FSRS Einstellungen**, weil sie Präzision wollen.

Das ist vernünftig. FSRS ist besser als alte Scheduler, wenn die Implementierung gut ist und das Deck kein Chaos ist. Aber der praktische Gewinn kommt nicht aus endlosem Tuning. Er kommt aus ein paar ruhigen Entscheidungen, danach lässt du den Scheduler arbeiten und verbesserst die Karten.

Nutze desired retention als Lasthebel.

Halte Learning Steps kurz.

Kopiere keine Parameter.

Kontrolliere neue Karten, bevor du den Scheduler beschuldigst.

Und wenn alles weiterhin schwer wirkt, ist die Antwort vielleicht keine weitere Einstellung. Vielleicht ist es ein kleineres, saubereres Deck.

## Probiere FSRS ohne Einstellungswartung

Wenn du diesen Ablauf testen willst:

- [Flashcards öffnen](https://flashcards-open-source-app.com/)
- [App öffnen](https://app.flashcards-open-source-app.com/)
- [Features lesen](https://flashcards-open-source-app.com/features/)
- [FSRS und SM-2 vergleichen](https://flashcards-open-source-app.com/blog/fsrs-vs-sm-2/)
- [Quellcode auf GitHub ansehen](https://github.com/kirill-markin/flashcards-open-source-app)
