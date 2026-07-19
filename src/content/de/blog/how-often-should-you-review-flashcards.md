---
title: "Wie oft Flashcards wiederholen? Lass FSRS die Termine planen"
description: "Prüfe täglich die fälligen Karten – nicht jeden Tag alle. FSRS passt Intervalle an deinen Abruf, die Desired Retention und eine tragbare Wiederholungslast an."
date: "2026-07-19"
image: "/blog/how-often-should-you-review-flashcards.png"
keywords:
  - "wie oft Flashcards wiederholen"
  - "sollte ich Flashcards jeden Tag wiederholen"
  - "bester Wiederholungsplan für Flashcards"
  - "Spaced-Repetition-Zeitplan"
  - "1-3-7-Zeitplan für Flashcards"
  - "FSRS-Wiederholungsplan"
  - "wann Flashcards wiederholen"
  - "Flashcards täglich wiederholen"
  - "Wiederholungsintervalle für Flashcards"
---

Am Montagmorgen um 7:40 Uhr öffnest du vor der Arbeit ein Deck mit 600 Karten und siehst, dass 23 Karten fällig sind. **Wie oft solltest du Flashcards wiederholen?** Prüfe die Wiederholungswarteschlange möglichst täglich, aber wiederhole nicht jeden Tag jede Karte. Nimm die 23 fälligen Karten durch und hör dann auf. Lass das nächste Intervall jeder Karte länger oder kürzer ausfallen – je nachdem, wie gut du sie tatsächlich abrufen konntest.

![Ein Lernender prüft in der täglichen FSRS-Wiederholungswarteschlange, welche Flashcards fällig sind](/blog/how-often-should-you-review-flashcards.png)

Dieser kleine Unterschied löst einen Großteil der Verwirrung auf. „Täglich“ beschreibt die Gewohnheit, in die Warteschlange zu schauen. Das heißt nicht, dass du in jeder Sitzung jede Karte wiederholen musst.

## Sollte ich Flashcards jeden Tag wiederholen?

Ein kurzer täglicher Blick in die Wiederholungswarteschlange ist hilfreich, weil die fälligen Karten so einen verlässlichen Platz in deiner Routine bekommen. Jede Karte folgt trotzdem ihrem eigenen Zeitplan.

An einem normalen Tag:

- öffne die Wiederholungswarteschlange
- beantworte die fälligen Karten
- füge neue Karten nur hinzu, wenn dein Plan noch Platz dafür lässt
- lass Karten, die erst später fällig sind, in Ruhe
- schließe die App, sobald die Warteschlange leer ist

An manchen Tagen passt das in eine kurze Kaffeepause. An anderen dauert es länger, weil du vor Kurzem neues Material hinzugefügt hast oder mehrere schwierige Karten gleichzeitig wieder fällig sind. Das Ziel ist eine Routine, zu der du morgen zurückkehren kannst – keine Marathonsitzung, nach der du das Deck drei Tage lang meidest.

Wenn tägliche Wiederholungen nicht möglich sind, wiederhole so häufig, wie du es dauerhaft durchhalten kannst. Wenn du beispielsweise nur an Werktagen wiederholst, erhält der Scheduler trotzdem echte Daten zu deinem Abruf. Nach einem Wochenende sind mehr Karten überfällig und manche Intervalle fallen weniger regelmäßig aus, aber das System wird dadurch nicht nutzlos. Eine verlässliche Fünf-Tage-Gewohnheit ist besser als ein theoretischer Sieben-Tage-Plan, den du immer wieder aufgibst.

## Warum der 1-3-7-Zeitplan für Flashcards nicht universell ist

Die `1-3-7-14`-Regel lässt sich leicht merken: Wiederhole nach einem Tag, dann nach drei, sieben und vierzehn Tagen. Sie kann ein vernünftiges manuelles Gerüst sein, wenn du nur Papier und einen Kalender zur Verfügung hast. Ein universeller Zeitplan fürs Gedächtnis ist sie nicht.

Stell dir zwei Karten vor, die du gleichzeitig neu gelernt hast. Die eine fragt nach einem geläufigen spanischen Wort, das dir sofort einfällt. Bei der anderen sollst du zwei ähnliche biochemische Stoffwechselwege auseinanderhalten, und du scheiterst zweimal. Für beide Karten die gleichen vier Folgetermine anzusetzen, ignoriert die Informationen, die du gerade geliefert hast.

Auch der Zeitpunkt, zu dem du das Wissen brauchst, spielt eine Rolle. In einem Experiment aus dem Jahr 2008 mit mehr als 1.350 Teilnehmenden änderte sich der Wiederholungsabstand, der zur besten Testleistung führte, je nachdem, wie viel Zeit bis zum Abschlusstest verging. Für längere Behaltenszeiträume waren andere Abstände optimal; die Studie fand keinen Zeitplan, der für jedes Ziel funktioniert ([Cepeda et al., 2008](https://escholarship.org/uc/item/0kp5q19x)).

Ein fester **1-3-7-Zeitplan für Flashcards** eignet sich deshalb eher als Ausgangsregel für ein manuelles System. Software kann für jede Karte eine genauere Entscheidung treffen, ohne dass du Hunderte Termine selbst verwalten musst.

## Wie FSRS das nächste Wiederholungsintervall festlegt

FSRS ist ein Scheduler für Spaced Repetition. Nach einer Wiederholung aktualisiert er ein Modell des Gedächtniszustands dieser Karte und berechnet das nächste Intervall. Du lieferst ein nützliches Signal, indem du erst versuchst, die Antwort abzurufen, dann die Rückseite aufdeckst und anschließend ehrlich Again, Hard, Good oder Easy wählst.

In der Flashcards Open Source App ist FSRS-6 der aktuelle Scheduler; die Desired Retention steht standardmäßig auf `0.90`. Für langfristige Intervalle berücksichtigt er die aktuelle Stabilität der Karte, die seit ihrer letzten Wiederholung verstrichenen Kalendertage, die Ziel-Retention, das maximale Intervall und deterministischen Fuzz. Neue Karten können kurze Learning Steps durchlaufen, bevor sie in die langfristige Wiederholung wechseln. Reife Karten können nach einem fehlgeschlagenen Abruf kurze Relearning Steps durchlaufen, bevor sie dorthin zurückkehren. Diese produktspezifischen Fakten sind in der öffentlichen [Referenzdokumentation zur FSRS-Planungslogik](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md) festgehalten.

Einfach gesagt:

- ein müheloser, erfolgreicher Abruf kann ein längeres Intervall rechtfertigen
- ein schwieriger, aber erfolgreicher Abruf führt normalerweise zu einer geringeren Verlängerung
- bei einer reifen Karte führt ein fehlgeschlagener Abruf zurück ins Relearning, während eine neue Karte nach einem Fehler im Learning bleibt
- ein Verlauf aus mehreren Wiederholungen liefert dem Scheduler mehr Informationen als ein einziger allgemeiner Kalender

FSRS kann weder deine Gedanken lesen noch deine Antwort auf ihre Richtigkeit prüfen. Es erhält die Bewertung, die du abgibst. Auch den exakten Moment, in dem du eine Information sonst vergessen würdest, kennt es nicht. Das Intervall ist eine modellbasierte Entscheidung, die auf die Ziel-Retention ausgerichtet ist – kein Versprechen, dass dein Gehirn sich nächsten Donnerstag um 15:15 Uhr tatsächlich erinnern wird.

Wenn dir die Grenze zwischen Again und Hard immer wieder Schwierigkeiten macht, nutze den ausführlicheren [Leitfaden zu Again, Hard, Good und Easy](/blog/again-vs-hard-fsrs-flashcards/). Wenn du nach dem angenehmeren nächsten Intervall bewertest, statt deinen tatsächlichen Abruf ehrlich einzuschätzen, gibst du dem Scheduler ein falsches Signal.

## Jede Karte sollte ihr eigenes Tempo haben

Du kannst einem adaptiven Zeitplan leichter vertrauen, wenn du jede Karte anhand ihres eigenen Verlaufs betrachtest, statt das ganze Deck nach einem einzigen Plan zu behandeln.

| Was ist bei der Wiederholung passiert? | Ehrliches Signal | Wahrscheinliche Auswirkung auf den Zeitplan |
| --- | --- | --- |
| Ein geläufiges Wort fiel dir sofort und sicher ein | Easy | Das Intervall stärker verlängern |
| Du hast die richtige Formel mit normalem Aufwand hergeleitet | Good | Das Intervall normal weiter wachsen lassen |
| Du hast zwei ähnliche Konzepte mit großer Mühe richtig auseinandergehalten | Hard | Das Intervall nach dem erfolgreichen Abruf vorsichtiger ansetzen |
| Der Name fiel dir nicht ein, bevor du die Rückseite aufgedeckt hattest | Again | Den fehlgeschlagenen Abruf festhalten und früher wiedererlernen |

Das sind Richtungen, keine garantierten Tageszahlen. Dieselbe Good-Bewertung kann bei zwei Karten zu unterschiedlichen Intervallen führen, weil ihre Stabilität, die verstrichene Zeit und ihre früheren Wiederholungen verschieden sind.

Auch die Gestaltung der Karten zählt. Ein vager Prompt, der fünf Fakten auf einmal abfragt, führt zu unsauberen Bewertungen, ganz gleich, wie klug der Scheduler ist. Teile überladene Karten auf, entferne Details mit geringem Wert und formuliere klar, welche Antwort verlangt wird. FSRS plant die Wiederholungen für die Karte, die du erstellt hast; es kann sie nicht im Hintergrund in eine bessere Karte umschreiben.

## So sieht eine tägliche Routine für fällige Karten aus

Knüpfe die Wiederholung an einen Auslöser, der schon existiert: den ersten Kaffee, eine Zugfahrt, das Mittagessen oder den Moment, in dem du deinen Laptop öffnest. Die genaue Uhrzeit ist weniger wichtig als ein verlässlich wiederkehrender Zeitpunkt.

Eine sinnvolle Sitzung besteht aus fünf Teilen:

1. Beginne mit den fälligen Wiederholungen, bevor du mit einem Stapel neuer Karten anfängst.
2. Lies die Vorderseite und versuche ernsthaft, die Antwort abzurufen.
3. Decke die Rückseite erst auf, nachdem du dich auf eine Antwort festgelegt hast.
4. Bewerte deinen Versuch – nicht das Intervall, das du gern hättest.
5. Hör auf, sobald die Wiederholungswarteschlange leer ist.

Im vierten Schritt entscheidet sich, ob dein Zeitplan aussagekräftig bleibt oder zum Theater wird. Wenn du nach einem fehlgeschlagenen Abruf Hard drückst, weil Again die Karte zu schnell zurückbringt, hältst du einen Erfolg fest, den es nicht gab. Easy zu drücken, damit eine lästige Karte verschwindet, richtet in der anderen Richtung denselben Schaden an.

Du musst auch nicht rasen. Eine ruhige, konzentrierte Wiederholung ist meist schneller, als jede Antwort zweimal zu prüfen und mit jedem Button zu verhandeln. Wenn die Warteschlange regelmäßig mehr Zeit verschlingt, als du hast, erklärt der [Leitfaden für schnellere Flashcard-Wiederholungen](/blog/how-to-review-flashcards-faster/) ausführlicher, wie du Karten aufräumst und unnötige Reibung im Ablauf reduzierst.

Bei der Wiederholung selbst solltest du Active Recall einsetzen. Die Vorderseite zu lesen und zu denken „Ja, das weiß ich“ ist Wiedererkennen, kein Abrufversuch. Den Unterschied zwischen dem Planungssystem und der geistigen Arbeit erklärt der [Vergleich von Active Recall und Spaced Repetition](/blog/active-recall-vs-spaced-repetition/).

## Was solltest du tun, wenn nichts fällig ist?

Du darfst fertig sein.

Eine leere Wiederholungswarteschlange bedeutet, dass der Scheduler in diesem Moment keine fällige Wiederholung hat. Du musst nicht durch noch nicht fällige Karten blättern, bis sich das Lernen ernst genug anfühlt. Wenn du sie immer wieder vorziehst, verbringst du Zeit mit vorzeitigen, oft leichteren Abrufversuchen. Außerdem ersetzt du einen Teil des adaptiven Zeitplans durch zusätzliche Wiederholungen, die du selbst ausgewählt hast.

Wenn du noch Lernzeit hast, nutze sie bewusst:

- lerne zuerst das Ausgangsmaterial, bevor du daraus Karten machst
- überarbeite eine verwirrende Karte, die dir zuvor aufgefallen ist
- füge einen kleinen, geplanten Stapel neuer Karten hinzu
- übe, das Wissen in Aufgaben, Gesprächen oder Texten anzuwenden
- hör auf und nutze die Zeit für etwas anderes

Es gibt gute Gründe, über die fälligen Wiederholungen hinaus zu lernen. Für eine Prüfung kann gezieltes Üben nötig sein. Eine Präsentation am nächsten Tag kann eine Probe rechtfertigen. Vielleicht möchtest du auch eine kurze Lernphase mit neuen Karten einlegen. Benenne diese Aktivität als das, was sie ist, statt so zu tun, als wäre jeder zusätzliche Durchgang durch Spaced Repetition vorgeschrieben.

## Verpasste Tage und Rückstände verändern die Arbeitslast

Ein Fälligkeitsdatum ist kein Ablaufdatum. Wenn du den Dienstag verpasst, öffne das Deck am Mittwoch und wiederhole, was überfällig ist. Bei verspäteten Karten in der langfristigen Wiederholung fließen die zusätzlich verstrichenen Kalendertage und deine neue Bewertung in das nächste FSRS-Update ein. Karten, die Learning Steps oder Relearning Steps durchlaufen, folgen ihrem kurzfristigen Ablauf weiter, auch wenn du sie später beantwortest; die nächste Fälligkeit wird ab dem Zeitpunkt berechnet, zu dem du sie tatsächlich wiederholst. Dieses Verhalten ist in der [Scheduler-Spezifikation](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md) dokumentiert.

Ein einzelner verpasster Tag erfordert selten einen besonderen Rettungsplan. Bearbeite die fälligen Karten, bewerte sie wie gewohnt und mach weiter. Setze weder das Deck zurück noch markiere Karten als Easy, nur damit die Zahl schneller sinkt.

Bei einem großen Rückstand musst du die Arbeitslast anders planen:

- pausiere neue Karten, damit keine zusätzliche Arbeit in die Wiederholungswarteschlange kommt
- wähle eine tägliche Menge, die du Tag für Tag bewältigen kannst
- arbeite die Wiederholungswarteschlange ab, die dir die App zeigt
- schreibe Karten um oder entferne sie, wenn sie immer wieder Zeit verschwenden
- bleibe bei ehrlichen Bewertungen, auch wenn sich der Fortschritt langsam anfühlt

Der Scheduler kann sich nach verspäteten Wiederholungen anpassen. Er kann aber nicht eine Stunde Arbeit an überfälligen Karten in zehn Minuten unterbringen. Ebenso wenig kann er garantieren, dass sich jede vergessene Karte im selben Tempo wieder festigt. Wenn mehrere verpasste Tage zu einer Wand aus Wiederholungen geworden sind, nutze den eigens dafür vorgesehenen [Plan zum Aufholen eines Flashcard-Rückstands](/blog/how-to-catch-up-on-flashcards-after-falling-behind/), statt alles in einer Nacht abarbeiten zu wollen.

## Ein Prüfungstermin verändert die Planung

Langfristige Spaced Repetition setzt voraus, dass es einen späteren Zeitpunkt geben wird. Eine Prüfung setzt dem Deck eine feste Grenze.

Plane vom Prüfungstag rückwärts. Beginne früh genug mit den wichtigen Karten, damit ein aussagekräftiger Wiederholungsverlauf entsteht. Reduziere die Zufuhr neuer Karten oder stoppe sie noch vor den letzten Tagen und bearbeite weiterhin die fälligen Wiederholungen. Ergänze kurz vor der Prüfung gezielte Übungen für schwache Themen und für Stoff, den die normale Wiederholungswarteschlange vor dem Test nicht mehr zeigen würde.

Dieses Zusatztraining ist terminbedingtes Pauken als Ergänzung zum normalen Zeitplan. Das kann vollkommen sinnvoll sein. Manipuliere dafür aber nicht deine Bewertungen: Ein fehlgeschlagener Abruf bleibt Again, selbst wenn dir das kurze Intervall nicht gefällt. Und ein müheloser Abruf wird nicht zu Hard, nur weil du die Karte morgen noch einmal sehen möchtest.

Auch die Desired Retention kann die Arbeitslast beeinflussen, aber eine späte Einstellungsänderung ist keine Zeitmaschine. Gemäß dem [dokumentierten Vertrag für ausschließlich vorwärts wirkende Einstellungen](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md) betreffen Änderungen an den Workspace-Einstellungen nur künftige Wiederholungen; eine Änderung der Desired Retention berechnet bestehende Fälligkeitsdaten nicht neu. Der vollständige [Leitfaden zur Prüfungsplanung mit FSRS](/blog/how-to-study-for-an-exam-with-fsrs/) behandelt die Phasen für Kartenzufuhr, Stabilisierung und abschließende Wiederholung, ohne diesen Artikel in einen zweiten Prüfungsleitfaden zu verwandeln.

## Bei Papier-Flashcards musst du den Zeitplan von Hand nachbilden

Papierkarten können weder einen Gedächtniszustand berechnen noch selbstständig ihre Fälligkeitsdaten verschieben. Du musst die Wiederholungswarteschlange selbst führen.

Ein einfaches Boxensystem reicht aus:

- bewahre neue Karten und Karten nach einem fehlgeschlagenen Abruf in einer Box für häufige Wiederholungen auf
- verschiebe erfolgreich beantwortete Karten in Boxen, die immer seltener wiederholt werden
- hole eine Karte wieder näher heran, wenn der Abruf scheitert
- schiebe sie nach mehreren sauberen Abrufen weiter weg
- notiere das nächste Wiederholungsdatum auf einem Trennblatt oder im Kalender

Hier kann eine feste Regel wie 1-3-7-14 praktisch sein. Nutze sie als anfängliche Abstände für deine Boxen und ändere den Kurs, wenn die Ergebnisse dagegensprechen. Eine hartnäckige Karte kann früher zurückkehren. Eine stabile Karte kann weiter nach hinten wandern. Es bringt dir nichts, jeden Abend den gesamten Papierstapel zu wiederholen.

Papier hat echte Vorteile: Du brauchst kein Gerät und kein Konto, und du kannst leicht Skizzen ergänzen. Dafür fällt Verwaltungsarbeit an. Du musst verpasste Termine nachverfolgen, entscheiden, welcher Stapel fällig ist, und deine Regel für den Aufstieg konsequent anwenden. Eine App verdient ihren Platz dadurch, dass sie diese Buchhaltung übernimmt – nicht dadurch, dass sie an der eigentlichen Aufgabe etwas ändert: eine Antwort aus dem Gedächtnis abzurufen.

## Desired Retention und neue Karten prägen den Zeitplan

Der **beste Wiederholungsplan für Flashcards** ist zum Teil eine Entscheidung über die Arbeitslast. Die Desired Retention gibt einem FSRS-Scheduler vor, mit welcher Wahrscheinlichkeit du dich an eine Karte erinnern möchtest, wenn sie fällig wird. Ein höherer Zielwert führt in der Regel zu kürzeren Intervallen und mehr Wiederholungen, wie das offizielle [Anki-Handbuch zu FSRS](https://docs.ankiweb.net/deck-options.html#fsrs) erklärt.

Das Handbuch nennt `0.90` als Ankis Standardwert und warnt davor, dass die Arbeitslast schnell steigt, wenn sich die Desired Retention `1.0` nähert. Das ist nützlicher allgemeiner Kontext zu FSRS, aber keine Behauptung, dass jede Anki-Option auch in Flashcards vorhanden ist. Die Standardwerte und Grenzen dieses Produkts findest du im [Scheduler-Dokument von Flashcards](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

Ein Zielwert von `0.90` bedeutet weder „Wiederhole jede Karte alle zehn Tage“ noch garantiert er, dass du in jeder kleinen Sitzung exakt 90 Prozent richtig beantwortest. Er steuert die Berechnung des Intervalls auf Basis der aktuellen Schätzung für den Gedächtniszustand der Karte.

Bevor du die Desired Retention erhöhst, weil dir der Zeitplan zu entspannt vorkommt, prüfe das restliche System:

- Verkraftet deine normale Woche mehr Wiederholungen?
- Fügst du Karten schneller hinzu, als du sie dauerhaft pflegen kannst?
- Scheitert der Abruf an den Abständen oder an unklaren Karten und schwachem Verständnis?
- Gilt das höhere Ziel vorübergehend für eine Prüfung oder dauerhaft?

Der [Leitfaden zu FSRS-Einstellungen](/blog/fsrs-settings/) geht ausführlicher auf diese Abwägung ein. Wenn die Wiederholungen bereits zunehmen, begrenze zuerst die Zufuhr mit einem tragbaren [Tageslimit für neue Karten](/blog/how-many-new-flashcards-per-day/).

## Was uns die Forschung sagen kann – und was nicht

Die Forschung liefert starke Gründe dafür, Abrufversuche über die Zeit zu verteilen. Eine einzige perfekte Terminfolge für alle Lernenden liefert sie nicht.

[Cepeda und Kollegen](https://escholarship.org/uc/item/0kp5q19x) zeigten, dass sich der nützliche Abstand mit dem angestrebten Behaltenszeitraum änderte. In ihrem Experiment lernten die Teilnehmenden Fakten, wiederholten sie später einmal und absolvierten anschließend einen Abschlusstest. Das spricht dafür, die Abstände an den Zeithorizont anzupassen, statt `1-3-7-14` als universelles Gesetz zu behandeln. FSRS-6 oder diese App wurden darin nicht getestet.

Eine systematische Übersichtsarbeit aus dem Jahr 2026 zur medizinischen Ausbildung schloss 14 Studien ein; 13 Studien mit 21.415 Lernenden gingen in die Metaanalyse ein. Das zusammengefasste Ergebnis fiel bei objektiven Tests zugunsten von Spaced Repetition gegenüber herkömmlichem Lernen aus. Die Interventionen waren jedoch unterschiedlich: Flashcards, per E-Mail versandte Multiple-Choice-Fragen und Quizfragen im Unterricht. Die Autorinnen und Autoren forderten ausdrücklich weitere Forschung zur Gestaltung der Interventionen und zu längerfristigen Ergebnissen ([Maye & Hurley, 2026](https://doi.org/10.1111/tct.70353)).

Diese Grenze ist wichtig. Die Übersichtsarbeit stützt Spaced Repetition im Kontext der medizinischen Ausbildung. Sie bestimmt kein einziges bestes Intervall, belegt nicht, dass jede Flashcard-App dasselbe Ergebnis erzielt, und zeigt auch nicht, dass Scheduling fehlerhafte Karten und unkonzentrierte Wiederholungen ausgleichen kann.

Nutze die Evidenz für die grundsätzliche Entscheidung: Verteile echte Abrufversuche über die Zeit. Richte den konkreten Zeitplan am Verlauf deiner Karten, deinem Ziel und deinem verfügbaren Zeitbudget aus.

## Lass die Wiederholungswarteschlange angenehm langweilig bleiben

Die Antwort auf die Frage, **wie oft du Flashcards wiederholen solltest**, ist einfach genug für eine hektische Woche: Prüfe die Wiederholungswarteschlange möglichst täglich, wiederhole die fälligen Karten und lass den Rest des Decks in Ruhe.

Lass leichte, stabile Karten weiter nach hinten wandern. Lass schwierige Karten vorsichtiger zurückkehren. Halte fehlgeschlagene Abrufe ehrlich fest. Wenn nichts fällig ist, hör auf oder widme dich einer klar getrennten Lernaktivität. Wenn das Leben dazwischenkommt, kehre zu den überfälligen Wiederholungen zurück, ohne deinen Verlauf zurückzusetzen.

FSRS kümmert sich um die Termine; du kümmerst dich um den Abruf. Wenn du diesen Zeitplan nutzen möchtest, ohne einen Papierkalender zu verwalten, sieh dir die [Funktionen von Flashcards](/features/) und den [Leitfaden für den Einstieg](/docs/getting-started/) an. Die hilfreiche Routine ist nicht kompliziert: öffnen, abrufen, bewerten, schließen – und morgen wiederkommen.
