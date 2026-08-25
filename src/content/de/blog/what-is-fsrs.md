---
title: "Was ist FSRS? So funktioniert der Spaced-Repetition-Scheduler (2026)"
description: "FSRS schätzt, wann du eine Flashcard vergessen könntest, und plant die nächste Wiederholung anhand deiner gewünschten Behaltensrate. Erfahre, wie Bewertungen, Gedächtniszustände und Einstellungen zusammenspielen."
date: "2026-08-25"
image: "/blog/what-is-fsrs.png"
keywords:
  - "was ist FSRS"
  - "FSRS Spaced Repetition"
  - "wie funktioniert FSRS"
  - "Free Spaced Repetition Scheduler"
  - "FSRS Algorithmus"
  - "Anki FSRS"
  - "Desired Retention"
---

Du lässt dir die Antwort einer Flashcard anzeigen, erinnerst dich mit etwas Mühe daran und drückst Good. Die Karte verschwindet eine Weile. Eine andere Karte bewertest du mit Again, und sie kehrt deutlich früher zurück. FSRS weiß nicht, dass es bei der einen Antwort um Anatomie und bei der anderen um Spanisch ging. In die Berechnung fließen der Zeitpunkt, der bisherige Gedächtniszustand der Karte und deine gewählte Bewertung ein.

**FSRS, kurz für Free Spaced Repetition Scheduler, ist ein quelloffener Scheduling-Algorithmus. Er schätzt für jede Karte die Wahrscheinlichkeit, dass du dich an sie erinnerst, und legt den nächsten Wiederholungstermin passend zu deinem Retentionsziel fest.** Dafür nutzt er die Wiederholungshistorie, die verstrichene Zeit und die vier Bewertungen Again, Hard, Good und Easy. Die Flashcard-App kümmert sich weiterhin um die Karten, den Wiederholungsbildschirm, die Learning Steps und weitere Produktfunktionen.

Das ist die kurze Antwort auf die Frage **Was ist FSRS?** Um zu verstehen, wie FSRS funktioniert, brauchst du drei Größen – Difficulty, Stability und Retrievability – und ein wichtiges Detail: Nicht alle drei sind gespeicherte Werte.

**Fakten geprüft:** 25. August 2026.

![Eine Gewächshausgärtnerin prüft drei Pflanzenreservoirs mit unterschiedlichen Wasserständen und füllt das Reservoir am Schwellenwert nach](/blog/what-is-fsrs.png)

## FSRS ist der Scheduler, nicht die Flashcard-App

Anki kann FSRS verwenden. Flashcards Open Source App verwendet FSRS. Auch andere Produkte und Bibliotheken können den Algorithmus implementieren. Das Projekt [open-spaced-repetition](https://github.com/open-spaced-repetition) veröffentlicht das Modell, Implementierungen und unterstützende Tools frei zugänglich.

Produkt und Scheduler haben unterschiedliche Aufgaben:

| Ebene | Aufgabe |
| --- | --- |
| Flashcard-App | Speichert Karten, zeigt den Wiederholungsbildschirm, synchronisiert Daten und zeichnet deine gewählte Bewertung auf |
| FSRS-Scheduler | Aktualisiert den Gedächtniszustand einer Karte und berechnet ein passendes nächstes Intervall |
| FSRS-Optimizer | Passt Modellparameter an die Wiederholungshistorie an, sofern die Host-App eine Optimierung anbietet |
| Du | Entscheidest, was die Karte abfragen soll, gibst eine Antwort und bewertest den Versuch ehrlich |

Diese Unterscheidung erklärt Formulierungen wie **Anki FSRS**: Anki ist die App, FSRS der darin aktivierte Scheduler. Sie ist auch wichtig, wenn du [Anki, SuperMemo und FSRS vergleichst](/de/blog/anki-vs-supermemo-vs-fsrs/). Anki und SuperMemo sind Produkte, FSRS dagegen kann Bestandteil eines Produkts sein.

Optimizer und Scheduler sind getrennte Bestandteile. Der Scheduler kann zunächst mit Standardparametern arbeiten. Später kann ein Optimizer eine kompatible Wiederholungshistorie analysieren und Parameter finden, die besser zu diesen Wiederholungen passen. Er schreibt weder deine Karten um noch entscheidet er, wie wichtig dir der Lernstoff ist.

## Das FSRS-Denkmodell: zwei mitgeführte Zustände und eine aktuelle Schätzung

Die offizielle [Dokumentation des FSRS-Algorithmus](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm) beschreibt ein Difficulty–Stability–Retrievability-Modell, meist kurz DSR genannt. In FSRS-6 bilden Difficulty und Stability den Gedächtniszustand, der von einer Wiederholung zur nächsten mitgeführt wird. Retrievability wird dagegen für einen bestimmten Zeitpunkt aus Stability und der verstrichenen Zeit berechnet.

Dieser Unterschied ist wichtig. Retrievability sinkt mit der Zeit, auch wenn niemand die Karte bearbeitet. Der Scheduler kann den Wert bei Bedarf berechnen, statt ihn wie eine dritte feste Eingabe zu behandeln.

### Difficulty: wie schwer sich diese Erinnerung weiter festigen lässt

**Difficulty** schätzt, wie schwer es ist, die Stability einer Karte zu erhöhen. Im Modell gewinnt eine Karte mit höherer Difficulty bei einer erfolgreichen Wiederholung unter denselben Bedingungen tendenziell weniger Stability als eine leichtere Karte.

Das ist keine objektive Bewertung des Themas. FSRS hat weder deine Anatomiedefinition gelesen noch deine spanische Grammatik geprüft. Difficulty ist eine interne Schätzung, die sich aus dem Wiederholungsmuster und den Bewertungen dieser Karte ergibt.

### Stability: wie langsam die Erinnerung verblasst

**Stability** beschreibt, wie langsam eine Erinnerung verblasst. Genauer gesagt ist sie das Intervall, nach dem die vom Modell vorhergesagte Abrufwahrscheinlichkeit auf 90 % gesunken ist.

Diese 90 % gehören zur Definition von Stability, selbst wenn du eine andere Desired Retention gewählt hast. Stability ist eine Skala innerhalb des Gedächtnismodells und nicht automatisch das nächste Intervall der Karte. Nach einer erfolgreichen Wiederholung steigt Stability in der Regel. Deshalb kann die Karte länger warten, bevor ihre vorhergesagte Abrufwahrscheinlichkeit wieder auf denselben Wert sinkt.

### Retrievability: die Chance, dich genau jetzt zu erinnern

**Retrievability** ist die vom Modell vorhergesagte Wahrscheinlichkeit, dass du dich jetzt an die Karte erinnern kannst. Kurz nach einer erfolgreichen Wiederholung ist sie hoch. Mit der Zeit sinkt sie entlang der Vergessenskurve des Modells.

Retrievability ist eine Vorhersage, kein Messwert aus deinem Gehirn. FSRS kann nicht mit Sicherheit wissen, ob dir die Antwort einfällt, wenn die Karte erscheint. Der Algorithmus schätzt die Wahrscheinlichkeit anhand des Kartenzustands, der verstrichenen Zeit, der Parameter und der Wiederholungshistorie.

Zusammen ergeben die drei Größen ein überschaubares Denkmodell:

- Difficulty beeinflusst, wie leicht sich Stability verändert.
- Stability bestimmt, wie schnell Retrievability sinkt.
- Retrievability zeigt, wo sich die Karte im aktuellen Moment auf dieser Kurve befindet.

## So funktioniert FSRS bei einer echten Wiederholung

Für eine Karte, die bereits in der langfristigen Wiederholungsphase ist, läuft das Scheduling ungefähr so ab:

1. FSRS berechnet die aktuelle Retrievability aus der Stability der Karte und der Zeit seit ihrer letzten Wiederholung.
2. Du lässt dir die Antwort anzeigen und wählst Again, Hard, Good oder Easy.
3. FSRS aktualisiert Difficulty und Stability anhand dieser Bewertung und des bisherigen Kartenzustands.
4. Der Algorithmus berechnet, wann sich die vorhergesagte Retrievability deiner Desired Retention nähert.
5. Die Host-App wendet Regeln wie ein Maximum Interval oder Fuzz an und speichert anschließend den nächsten Fälligkeitszeitpunkt.

Die [veröffentlichten FSRS-Formeln](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) definieren diese Aktualisierungen. Beim Lernen musst du sie nicht selbst berechnen. Entscheidend ist: Das nächste Intervall entsteht aus einer veränderlichen Schätzung für die jeweilige Karte und nicht aus einer festen Stufenfolge wie „ein Tag, dann drei Tage, dann eine Woche“.

### Eine Karte, mehrere Wiederholungen

Nehmen wir eine Karte, die nach der Funktion des Hippocampus fragt. Die genauen Intervalle hängen von der App, den Einstellungen, dem Zeitpunkt der Wiederholung, den Parametern und deiner Bewertung ab. Deshalb bleibt diese Zeitleiste bewusst qualitativ.

| Zeitpunkt der Wiederholung | Deine Bewertung | Was als Nächstes passiert |
| --- | --- | --- |
| Du siehst die neue Karte und erinnerst dich mit normalem Aufwand an die Antwort | Good | Die App kann zunächst mit einem konfigurierten Learning Step fortfahren, bevor die Karte in die langfristige Wiederholungsphase wechselt |
| Die Karte erreicht später die langfristige Wiederholungsphase, und der Abruf kostet dich große Mühe | Hard | FSRS wertet das als schwierigen, aber erfolgreichen Abruf und wählt für diesen Zustand die kürzeste der erfolgreichen langfristigen Optionen |
| Bei einer späteren Wiederholung fällt dir die Antwort nicht ein | Again | FSRS wendet seine Aktualisierung für einen Misserfolg an; die App kann die Karte außerdem durch einen Relearning Step führen |
| Die Karte kehrt zurück, und du erinnerst dich mit normalem Aufwand | Good | FSRS aktualisiert Difficulty und Stability anhand des neuen Erfolgs und berechnet anschließend ein weiteres Intervall passend zum Retentionsziel |

Die Reihenfolge zählt. Hard steht für einen erfolgreichen Abruf, Again für einen gescheiterten. Again löscht außerdem nicht die bisherige Historie und macht aus der Karte keine unberührte neue Karte.

## Was Again, Hard, Good und Easy FSRS mitteilen

Die vier Buttons beschreiben den Abruf, der gerade stattgefunden hat:

- **Again:** Du konntest die geforderte Antwort nicht abrufen oder hast falsch geantwortet.
- **Hard:** Du hast die richtige Antwort abgerufen, aber nur mit großer Mühe oder nach deutlichem Zögern.
- **Good:** Du hast die richtige Antwort mit normalem Aufwand abgerufen.
- **Easy:** Du hast die richtige Antwort mit wenig oder ohne nennenswerten Aufwand abgerufen.

Die offizielle [Anki-Dokumentation zu FSRS](https://docs.ankiweb.net/deck-options.html#fsrs) zieht hier eine entscheidende Grenze: Again steht für einen Misserfolg, Hard dagegen für einen erfolgreichen Abruf. Wenn du nach dem Vergessen Hard drückst, gibst du dem Scheduler das falsche Signal. Dadurch können spätere Intervalle zu lang werden.

Wähle die Bewertung danach, wie gut der Abruf geklappt hat, nicht nach dem Intervall über dem Button. Wenn Good die Karte weiter in die Zukunft schickt als erwartet, liegt die Lösung bei den Einstellungen. Änderst du die Bewertung, um ein gewünschtes Datum zu erhalten, veränderst du die Wiederholungshistorie, statt die Einstellung zu korrigieren.

Teilweise richtige Antworten und unklare Karten machen die Entscheidung schwieriger, als die vier Bezeichnungen vermuten lassen. Der ausführliche Leitfaden [Again vs. Hard](/de/blog/again-vs-hard-fsrs-flashcards/) behandelt diese Fälle. Eine verlässliche Kurzregel lautet: Prüfe zuerst, ob der Abruf gescheitert ist, und erst danach, wie viel Mühe er gekostet hat. Verwende Again nach einem gescheiterten Versuch; Hard, Good oder Easy kommen nur nach einem erfolgreichen Versuch infrage.

FSRS übernimmt die Bewertung, die du abgibst. Der Algorithmus beurteilt deine gesprochene oder getippte Antwort nicht selbst.

## Desired Retention macht aus dem Modell einen Wiederholungstermin

**Desired Retention** ist die Abrufwahrscheinlichkeit, die der Scheduler für den Zeitpunkt anstreben soll, zu dem eine Karte fällig wird. Bei einem Wert von `0.90` soll der Scheduler die Karte ungefähr dann zurückbringen, wenn das Modell eine 90-prozentige Wahrscheinlichkeit für einen erfolgreichen Abruf vorhersagt.

Das ist ein Modellziel, kein Versprechen, dass du in jeder Situation genau neun von zehn Karten richtig beantworten wirst. Vorhersagen können ungenau sein, Bewertungsgewohnheiten können sich ändern, und unter echten Lernbedingungen läuft nicht alles sauber nach Modell.

Hier zeigt sich die Verbindung zu Stability. Stability ist bei einer Retrievability von 90 % definiert. Bei einer Desired Retention von `0.90` hängt das berechnete langfristige Intervall einer Karte deshalb eng mit ihrer Stability zusammen. Rundung, Fuzz und die Begrenzung durch das Maximum Interval können das angezeigte Datum trotzdem verändern. Eine Karte, die noch in der Lernphase ist, folgt stattdessen dem Ablauf der kurzen Learning Steps in der App.

Der Zusammenhang mit der Arbeitslast ist direkt:

- Eine höhere Desired Retention bringt Karten früher zurück und erzeugt mehr Wiederholungen.
- Eine niedrigere Desired Retention erlaubt längere Intervalle und mehr Vergessen.

Der [Abschnitt im Anki-Handbuch zu Desired Retention](https://docs.ankiweb.net/deck-options.html#desired-retention) warnt davor, dass die Arbeitslast schnell steigt, wenn sich der Zielwert 100 % nähert. Kein einzelner Wert passt zu jedem Deck und jedem Lernziel.

Der Optimizer lernt die Desired Retention nicht. Du legst sie passend zu deinem Lernziel fest. Die Parameter beschreiben das Gedächtnismodell; das Retentionsziel sagt dem Scheduler, an welchem Punkt in diesem Modell die nächste Wiederholung stattfinden soll.

Praktische Empfehlungen und die Auswirkungen auf die Arbeitslast findest du im separaten [Leitfaden zu FSRS-Einstellungen](/de/blog/fsrs-settings/).

## Der Optimizer ist optional, und Desired Retention bleibt deine Entscheidung

Die FSRS-Formeln verwenden eine Reihe von Gewichten, meist **Parameter** genannt, um Difficulty und Stability zu aktualisieren und das Vergessen zu modellieren. Eine Implementierung kann mit Standardparametern arbeiten. Bietet eine Host-App einen Optimizer an, kann sie die Parameter stattdessen an eine kompatible Wiederholungshistorie anpassen.

Im aktuellen Anki analysiert die Aktion **Optimize** die Wiederholungshistorie und erzeugt darauf abgestimmte Parameter. Die [Anki-Dokumentation zu Parametern](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) rät davon ab, diese Werte manuell zu bearbeiten oder die Parameter anderer Personen zu übernehmen. Andere FSRS-Apps können Standardwerte verwenden, ohne eine solche Funktion anzubieten.

„Optimiert“ hat hier eine enge Bedeutung: Laut Optimizer passen die Parameter besser zu den bereitgestellten Wiederholungsdaten. Das heißt weder, dass die Karten inhaltlich stimmen, noch dass der Lernplan sinnvoll ist oder jede künftige Vorhersage zutrifft.

Standardwerte bleiben trotzdem wichtig. Der Scheduler kann ohne personalisierte Anpassung funktionieren und dennoch für jede Karte einen eigenen Gedächtniszustand führen.

## Learning Steps betreffen eine andere Zeitskala

Neue Karten werden oft schon nach wenigen Minuten erneut angezeigt, bevor die langfristigen Abstände beginnen. Auch eine Karte, die du bei einer Wiederholung nicht abrufen konntest, kann schnell zurückkehren. Flashcard-Apps bezeichnen diese kurzen Verzögerungen als **Learning Steps** und **Relearning Steps**.

- Learning Steps sind kurze, konfigurierte Verzögerungen während der Einführung einer neuen Karte.
- Relearning Steps sind kurze Verzögerungen nach Again bei einer Karte, die bereits die langfristige Wiederholungsphase erreicht hatte.
- Sobald die Karte die Lernphase abgeschlossen hat, stammt ihr nächstes langfristiges Intervall aus dem FSRS-Gedächtnismodell.

Darum ist es etwas anderes, einen zehnminütigen Learning Step zu ändern als die Desired Retention. Der Step legt eine kurzfristige Rückkehr direkt fest. Desired Retention beeinflusst dagegen die modellbasierten langfristigen Intervalle. Je nach Implementierung kann der Scheduler den Gedächtniszustand auch während der Lernphase aktualisieren. Learning Steps markieren daher eine Grenze im Arbeitsablauf und sind keine eigene Gedächtnistheorie.

Die aktuelle [Anki-Anleitung zu Learning Steps für FSRS](https://docs.ankiweb.net/deck-options.html#learning-steps) empfiehlt Steps, die sich am selben Tag abschließen lassen. Anki bietet außerdem eine experimentelle Option, mit der FSRS das kurzfristige Scheduling übernimmt, wenn die Step-Felder leer bleiben. Andere Apps können andere Ansätze wählen. Prüfe deshalb, was deine App unterstützt, bevor du Anki-Einstellungen übernimmst.

## Was FSRS nicht für dich entscheiden kann

Auch schlechte Eingaben kann FSRS sehr präzise einplanen. Besser werden die Karten durch ausgefeilte Intervalle nicht.

Der Scheduler kann nicht:

- verstehen, was die Karte bedeutet
- prüfen, ob die gespeicherte Antwort richtig und aktuell ist
- entscheiden, ob eine teilweise richtige Antwort zählen sollte
- einen mehrdeutigen Prompt oder eine überladene Rückseite korrigieren
- wissen, ob eine Information für deine Ziele wichtig ist
- eine nicht zu bewältigende Flut neuer Karten von allein handhabbar machen
- garantieren, dass du fällige Wiederholungen auch erledigst

Angenommen, eine Karte fragt: „Erkläre das Immunsystem.“ Wiederholte Again-Bewertungen können zu mehr Wiederholungen führen. Doch kein Scheduler kann aus dieser weit gefassten Frage eine einzelne, klare Abrufaufgabe machen. Das musst du im Karteneditor lösen. Der [Leitfaden zum Erstellen besserer Flashcards](/de/blog/how-to-make-better-flashcards/) behandelt genau diese Ebene.

Diese Grenze hilft bei der Diagnose von Lernproblemen. Seltsames langfristiges Timing deutet auf Einstellungen, die Bewertungshistorie oder die Implementierung hin. Wenn du ständig mit der Kartenrückseite haderst, liegt es eher an der Kartenqualität. Eine riesige Warteschlange kann vom Zustrom neuer Karten kommen und nicht vom FSRS-Algorithmus selbst.

## So implementiert Flashcards FSRS

> **Offenlegung:** Ich bin Kirill Markin und entwickle [Flashcards Open Source App](/de/features/). Dieser Abschnitt beschreibt das veröffentlichte Produktverhalten. Damit behaupte ich nicht, dass jeder Lernende seine bisherige App verlassen sollte.

Flashcards implementiert derzeit **FSRS-6** und bildet dafür den offiziellen Scheduling-Ablauf von `ts-fsrs` 5.2.3 nach. Die App verwendet die vier Standardbewertungen Again, Hard, Good und Easy. Die Scheduler im Backend sowie unter iOS und Android verhalten sich gleich; der Wiederholungsablauf im Web nutzt den Backend-Scheduler.

Standardmäßig gelten eine Desired Retention von `0.90`, Learning Steps von 1 und 10 Minuten, ein zehnminütiger Relearning Step und ein Maximum Interval von 36.500 Tagen; Fuzz ist aktiviert. Workspace-Inhaber können diese Einstellungen anpassen. Änderungen gelten nur für zukünftige Wiederholungen; bestehende Fälligkeitstermine werden nicht unbemerkt neu berechnet.

In v1 sind die offiziellen FSRS-6-Standardgewichte fest hinterlegt. Nutzer können sie nicht konfigurieren, und das Produkt passt die FSRS-Parameter derzeit nicht individuell an die Wiederholungshistorie einzelner Nutzer an. Diese Einschränkung ist beim Vergleich mit dem Optimizer von Anki wichtig.

Die öffentliche [Spezifikation des FSRS-Schedulings von Flashcards](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md) dokumentiert das aktuelle Zustandsmodell, die Standardwerte, die Grenzen der Einstellungen und die Regeln für plattformübergreifend einheitliches Verhalten. Die umfassendere [Features-Seite](/de/features/) zeigt, wie der Scheduler in das Produkt eingebunden ist, statt FSRS als eigenständige App darzustellen.

## FAQ zu FSRS

### Wofür steht FSRS?

FSRS steht für **Free Spaced Repetition Scheduler**. Es ist ein offener Scheduler, der berechnet, wann Flashcards wieder angezeigt werden sollen.

### Gibt es FSRS nur für Anki?

Nein. Anki enthält eine FSRS-Implementierung, doch FSRS ist ein Scheduler, den auch andere Apps und Bibliotheken implementieren können. Produktfunktionen wie Bearbeitung, Synchronisierung, Importe und Wiederholungsoberfläche stellt die jeweilige Host-App bereit.

### Weiß FSRS, ob meine Antwort richtig ist?

Nein. FSRS erhält die Bewertung, die die App aufgezeichnet hat. Du vergleichst deine Antwort weiterhin selbst mit der Karte und entscheidest, ob der Versuch Again, Hard, Good oder Easy war.

### Sind Difficulty, Stability und Retrievability alle auf der Karte gespeichert?

Nicht unbedingt. In FSRS-6 bilden Difficulty und Stability den mitgeführten Gedächtniszustand. Retrievability wird für einen bestimmten Zeitpunkt aus Stability und der verstrichenen Zeit berechnet. Eine App kann für ihren eigenen Arbeitsablauf zusätzliche Scheduling-Felder speichern.

### Bedeutet 90 % Desired Retention, dass ich mich an 90 % von allem erinnern werde?

Nein. Der Wert weist den Scheduler an, eine vorhergesagte Abrufwahrscheinlichkeit von 90 % anzustreben, wenn eine Karte fällig wird. Er ist keine Garantie für jede Karte, Lernsitzung, Prüfung oder Alltagssituation.

### Brauche ich optimierte FSRS-Parameter?

Nicht für den Einstieg. FSRS kann Standardparameter verwenden. Wenn deine App eine Optimierung unterstützt und du eine aussagekräftige Wiederholungshistorie hast, können angepasste Parameter diese Historie besser abbilden. Übernimm nicht die Parameter einer anderen Person.

### Ist FSRS besser als SM-2?

Die beiden Scheduler verwenden unterschiedliche Scheduling-Modelle. FSRS ergänzt ein explizites Retentionsziel und aktualisiert ein Gedächtnismodell für jede einzelne Karte, statt dieselbe Struktur aus Intervall und Ease Factor zu verwenden. Der gezielte [Vergleich von FSRS und SM-2](/de/blog/fsrs-vs-sm-2/) behandelt die Belege und Kompromisse, ohne sie mit Produktfunktionen zu vermischen.

### Welche FSRS-Einstellung sollte ich zuerst verstehen?

Beginne mit Desired Retention, denn sie drückt den Kompromiss zwischen Abrufwahrscheinlichkeit und Arbeitslast unmittelbar aus. Prüfe anschließend die Learning und Relearning Steps. Lass die Modellparameter unverändert, sofern deine App keinen unterstützten Optimierungsablauf anbietet.

## Behalte die Aufgabenverteilung im Blick

Die App zeigt die Karte. Du beurteilst deinen Abruf. FSRS aktualisiert Difficulty und Stability, berechnet die Retrievability für den aktuellen Zeitpunkt und legt die nächste Wiederholung passend zur Desired Retention fest. Learning Steps steuern kurzfristige Wiederholungen, und ein optionaler Optimizer kann die Modellparameter an die Wiederholungshistorie anpassen.

Diese Aufgabenverteilung zeigt dir, wo du ein Problem beheben solltest. Passe die Einstellungen an, wenn die Arbeitslast oder das langfristige Timing nicht stimmt. Bearbeite die Karte, wenn die Frage oder Antwort nicht stimmt. Und bewerte deinen Versuch ehrlich, wenn die Wiederholung stattfindet.

FSRS kann einen modellbasierten Termin auswählen. Die Grundlage für ein brauchbares Signal bleibt trotzdem eine klare Karte und der Button, den du drückst.
