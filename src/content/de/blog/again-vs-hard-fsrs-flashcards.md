---
title: "Again vs Hard in FSRS (2026): So nutzt du die vier Bewertungen"
description: "Wann solltest du in FSRS-basierten Karteikarten-Apps Again, Hard, Good oder Easy wählen? Eine einfache Regel hilft dir, ehrlich statt nach dem nächsten Intervall zu bewerten."
date: "2026-07-17"
image: "/blog/again-vs-hard-fsrs-flashcards.png"
keywords:
  - "Again vs Hard FSRS"
  - "Anki Hard vs Again"
  - "Again Hard Good Easy"
  - "Karteikarten richtig bewerten"
  - "FSRS Bewertungen"
  - "wann Again wählen"
  - "wann Hard wählen"
  - "Bewertungen bei Karteikarten-Wiederholungen"
  - "Karteikarten mit zwei Buttons wiederholen"
---

Du deckst die Rückseite einer Karte auf und siehst die Antwort, die dir fünf Sekunden zuvor nicht eingefallen ist. Jetzt wirkt sie völlig vertraut. `Again` fühlt sich zu streng an, und bei `Hard` steht das weniger schmerzhafte nächste Intervall. Du fängst an, mit dem Zeitplan zu verhandeln.

Für **Again vs Hard in FSRS** gilt eine einfache Regel: Entscheide zuerst, ob du die geforderte Antwort richtig abrufen konntest. Erst bei einer richtigen Antwort bewertest du den Aufwand. Wähle Again, wenn dir die Antwort nicht eingefallen ist oder du falsch lagst. Wähle Hard nur, wenn du richtig geantwortet hast und das Erinnern wirklich schwierig war.

Gehe bei jeder Karte in denselben zwei Schritten vor:

1. Entscheide, ob du die geforderte Antwort richtig abrufen konntest.
2. Wenn ja, bewerte den Aufwand mit Hard, Good oder Easy.

So wird aus „fast gewusst“ nicht stillschweigend eine richtige Antwort.

![Eine Hand wählt zwischen Again und Hard bei den vier FSRS-Bewertungen für Karteikarten auf einem warm beleuchteten Holztisch](/blog/again-vs-hard-fsrs-flashcards.png)

## Again vs Hard in FSRS: zuerst richtig oder falsch, dann der Aufwand

Die vier Bewertungen halten zwei Dinge fest: ob du dich erinnert hast und, bei einer richtigen Antwort, wie schwer es war.

| Was ist passiert, bevor du die Antwort aufgedeckt hast? | Bewertung | Praktische Bedeutung |
| --- | --- | --- |
| Die geforderte Antwort fiel dir nicht ein oder war falsch | Again | Fehlgeschlagener Abruf |
| Die richtige Antwort kam erst nach großer Mühe, starken Zweifeln oder langem Zögern | Hard | Schwieriger, aber erfolgreicher Abruf |
| Du kamst mit normalem geistigem Aufwand auf die richtige Antwort | Good | Normaler erfolgreicher Abruf |
| Die richtige Antwort kam ohne nennenswerten Aufwand | Easy | Müheloser erfolgreicher Abruf |

Der offizielle [Anki-Leitfaden zu den Antwort-Buttons](https://docs.ankiweb.net/studying.html#answer-buttons) zieht dieselbe Grenze: Again steht für eine falsche oder fehlende Antwort, Hard für eine richtige Antwort trotz Zweifel oder Verzögerung. Auch die [Referenzimplementierung py-fsrs](https://github.com/open-spaced-repetition/py-fsrs#quickstart) behandelt Again als Vergessen und die drei anderen Bewertungen als verschiedene Formen erfolgreichen Erinnerns.

## Again bedeutet, dass der Abruf fehlgeschlagen ist

Wähle Again, wenn dir keine Antwort eingefallen ist, deine Antwort falsch war oder ein von der Karte geforderter Teil fehlte.

Typische Situationen für Again sind:

- „Ich weiß es nicht.“
- Die richtige Antwort fällt dir erst ein, nachdem du die Rückseite aufgedeckt hast.
- Du nennst das Gegenteil, die falsche Formel, die falsche Richtung oder die falsche Bedingung.
- Du brauchst einen Hinweis, der nicht schon auf der Karte steht.
- Du erinnerst dich nur an einen Teil, obwohl die Karte die vollständige Antwort verlangt.

Dass dir die Antwort nach dem Aufdecken vertraut vorkommt, ändert nichts an diesem Versuch. Du siehst `Mitochondrienmatrix` und denkst „natürlich“ – aber das ist jetzt Wiedererkennen. Die Vorderseite hat geprüft, ob du die Antwort vorher selbst abrufen konntest.

Das offizielle [FSRS-Tutorial warnt davor, nach dem Vergessen Hard zu wählen](https://github.com/open-spaced-repetition/fsrs4anki/blob/main/docs/tutorial.md), weil FSRS Hard als erfolgreichen Abruf behandelt. Wenn die Antwort nie kam, meldet Hard dem System das falsche Ergebnis.

Again liefert dem Scheduler nützliche Daten. Der Button hält fest, was passiert ist; er ist keine Strafe für einen schlechten Morgen.

## Hard, Good und Easy stehen alle für erfolgreichen Abruf

Wähle Hard, wenn deine Antwort richtig war, sie dir aber ungewöhnlich schwerfiel.

Vielleicht hast du:

- lange gezögert, während sich die richtige Antwort langsam zusammensetzte
- stark gezweifelt, dich aber vor dem Aufdecken auf die richtige Antwort festgelegt
- die Antwort über mehrere gedankliche Schritte rekonstruiert
- den richtigen Unterschied erst gefunden, nachdem du eine verlockende falsche Antwort verworfen hattest

Die Antwort muss trotzdem stimmen. Hard heißt weder „größtenteils falsch“ noch „hinterher wiedererkannt“. Es heißt auch nicht „ich möchte diese Karte früher wiedersehen“.

**Good** ist die normale Bewertung für eine richtige Antwort. Du hast sie mit gewöhnlichem Aufwand abgerufen. Vielleicht hast du kurz innegehalten oder die Formulierung im Kopf geprüft, aber der Abruf war weder mühsam noch völlig automatisch.

**Easy** ist für einen richtigen Abruf gedacht, der sich mühelos angefühlt hat. Die Antwort fiel dir klar und ohne nennenswertes Zögern ein.

Es gibt keine allgemeingültige Sekundenzahl, die Good in Hard verwandelt. Eine kurze Vokabelantwort und die Wiedergabe einer mehrstufigen Rechtsregel brauchen naturgemäß unterschiedlich lange. FSRS leitet aus deiner Antwortzeit keine Bewertung ab. Laut [offiziellem Tutorial](https://github.com/open-spaced-repetition/fsrs4anki/blob/main/docs/tutorial.md#faq) fließt die Dauer einer Wiederholung nicht in die FSRS-Planung ein. Beurteile den Aufwand danach, was die Karte von dir verlangt.

Wenn du bei jeder Karte lange darüber nachdenken musst, verlangt sie vielleicht zu viel.

## Teilantworten hängen davon ab, was die Karte verlangt

Teilantworten sorgen für die meisten echten Grenzfälle. Entscheidend ist, was die Vorderseite genau von dir verlangt.

Angenommen, dort steht:

> Nenne die drei Äste des Truncus coeliacus.

Du erinnerst dich an die Arteria gastrica sinistra und die Arteria splenica, vergisst aber die Arteria hepatica communis. Die Karte verlangt ausdrücklich alle drei. Dieser Versuch ist gescheitert: Wähle Again.

Nun steht auf der Vorderseite:

> Welches Gebiet versorgt der Truncus coeliacus?

Du antwortest, dass er den Vorderdarm versorgt, und deckst dann die Rückseite auf: „Den Vorderdarm und seine Abkömmlinge über drei große Äste.“ Wenn die Karte nur `Vorderdarm` abfragt, ist der Rest vielleicht eine Erklärung und kein Pflichtinhalt. Dann kann die Antwort als richtig gelten.

Dasselbe Prinzip funktioniert auch außerhalb der Medizin:

- Eine Vokabelkarte prüft die Bedeutung, und du nennst statt der gespeicherten Formulierung ein gültiges Synonym: normalerweise richtig.
- Eine Aussprachekarte prüft die betonte Silbe, und du nennst die richtige Bedeutung mit falscher Betonung: bei dieser Karte falsch.
- Eine Formelkarte verlangt das Minuszeichen, und du lässt es weg: falsch.
- Eine Geschichtskarte fragt nach der Hauptursache, und die Rückseite enthält zusätzlich ein optionales Beispiel: Auch ohne das Beispiel kann die Antwort richtig sein.

Der [Anki-Leitfaden zu Teilantworten](https://docs.ankiweb.net/studying.html#answer-buttons) empfiehlt einen praktischen Maßstab: Würde die Antwort im tatsächlichen Kontext, in dem du das Wissen brauchst, als Fehler zählen? Fehlt ein entscheidendes Detail, ist Again normalerweise richtig. Fehlt nur ein unwesentliches Detail in der Formulierung, kann die Antwort trotzdem zählen; anschließend bewertest du den Aufwand.

Wenn du ständig darüber verhandelst, welche Details zählen, überarbeite die Karte. Eine Vorderseite mit einem klaren Ziel sorgt für sauberere Wiederholungen als morgendliches Feilschen mit dir selbst. Der ausführlichere [Leitfaden für bessere Karteikarten](/de/blog/how-to-make-better-flashcards/) erklärt, wie du solche Karten reparierst.

## Ein Hinweis verändert den Versuch

Ein Hinweis kann beim Lernen helfen. Er verändert aber, was du ohne Hilfe abrufen konntest.

Wenn die Vorderseite nach der Hauptstadt von Burkina Faso fragt und dir Ouagadougou erst nach dem Hinweis „Sie beginnt mit O“ einfällt, ist der ursprüngliche Versuch gescheitert. Bewerte ihn mit Again.

Ein bewusst eingebauter Hinweis auf der Vorderseite gehört dagegen zur Karte. Wenn dort immer ein Anfangsbuchstabe, ein Diagramm, ein Satzkontext oder eine Formelsammlung steht, beurteilst du deine Antwort mit diesem Hinweis. Du bewertest die Aufgabe, die du selbst erstellt hast.

Für KI-Tutoren gilt dieselbe Grenze. Eine KI kann einen Hinweis geben, Texte vergleichen oder eine Sitzungsnotiz führen. Diese Notiz ist keine FSRS-Bewertung, und eine elegant formulierte Gegenüberstellung beweist nicht, dass eine der beiden Antworten sachlich stimmt. Der [Workflow für einen KI-Tutor mit Karteikarten](/de/blog/ai-flashcard-tutor-due-cards/) trennt deshalb erste Versuche von offiziellen Wiederholungen.

## Bewerte beim Wiedererlernen jeden Versuch für sich

Nachdem du Again gewählt hast, kann dieselbe Wiederholungskarte noch in derselben Sitzung zurückkehren, wenn die App einen kurzen Wiedererlernschritt nutzt. Wann sie zurückkommt, hängt von der App und ihren Einstellungen ab.

Die [Anki-Dokumentation zum Wiedererlernen](https://docs.ankiweb.net/deck-options.html#relearning-steps) bezeichnet Again bei einer Wiederholungskarte als Lapse, also als Fehlschlag. Sind Wiedererlernschritte eingerichtet, durchläuft die Karte diese Schritte, bevor sie in die normalen Wiederholungen zurückkehrt.

Behandle die Rückkehr als neuen Versuch:

1. Beim ersten Erscheinen scheitert der Abruf: Du wählst Again.
2. Die Karte kehrt nach dem eingestellten Wiedererlernschritt zurück.
3. Du antwortest erneut, bevor du die Rückseite aufdeckst.
4. Wenn du die Antwort jetzt richtig abrufst, wählst du für diesen neuen Versuch Hard, Good oder Easy.

Der erste Fehler steht bereits im Wiederholungsverlauf. Ein späterer Erfolg löscht ihn nicht. Umgekehrt zwingt dich der frühere Fehler nicht zu einem weiteren Again. Jeder Button beschreibt nur den Versuch, der gerade stattfindet.

Ein sofortiger Erfolg kann dir verdächtig vorkommen, weil du die Antwort erst vor Kurzem gesehen hast. Das ist beim Wiedererlernen normal. Bewerte den aktuellen Versuch ehrlich und lass die eingestellten Schritte die kurzfristige Wiederholung regeln.

## Wähle eine Bewertung nicht nach dem angezeigten Intervall

Viele Wiederholungsansichten zeigen neben den Buttons das jeweils nächste Intervall. Die Vorschau sagt dir, was der Scheduler nach der jeweiligen Bewertung tun würde. Sie ist kein Wunschzettel für Termine.

Die offizielle [FSRS-FAQ zur Bewertung](https://github.com/open-spaced-repetition/fsrs4anki/blob/main/docs/tutorial.md#faq) empfiehlt, nach der Qualität des Abrufs zu bewerten und die angezeigten Intervalle zu ignorieren. Wählst du Hard, weil Good „zu weit entfernt“ aussieht, meldest du FSRS einen schwierigen Abruf, obwohl es keinen gab. Vermeidest du Easy, weil das Intervall erschreckend lang aussieht, verzerrst du den Wiederholungsverlauf ebenfalls.

Wenn sich der Zeitplan dauerhaft zu aggressiv oder die tägliche Last zu hoch anfühlt, ändere die Einstellungen statt deiner Bewertung. Desired Retention, Relearning Steps und Wiederholungslast gehören in die Einstellungen und Lernplanung; der [Leitfaden zu FSRS-Einstellungen](/de/blog/fsrs-settings/) erklärt diese Abwägungen.

Der Button beschreibt deine Antwort. Der Scheduler kümmert sich um den Termin.

## Nur Again und Good zu verwenden ist eine sinnvolle Vereinfachung

Vier Buttons sind nützlich, wenn du sie einheitlich anwenden kannst. Es gibt keinen Preis dafür, jede Wiederholung in eine kleine mündliche Prüfung zu verwandeln.

Eine einfache Zwei-Button-Regel funktioniert so:

- Again für jeden fehlgeschlagenen Abruf
- Good für jeden erfolgreichen Abruf

Sowohl das [Anki-Handbuch](https://docs.ankiweb.net/studying.html#answer-buttons) als auch das [FSRS-Tutorial](https://github.com/open-spaced-repetition/fsrs4anki/blob/main/docs/tutorial.md#faq) bestätigen, dass Wiederholen mit Again und Good funktioniert. Du lieferst damit weniger Informationen darüber, welche richtigen Antworten schwer oder mühelos waren. Dafür bekommst du vielleicht eine Regel, die du ohne Zögern befolgen kannst.

Betrachte das als eine sinnvolle Vereinfachung. Behalte alle vier Bewertungen, wenn Hard und Easy bei deinen Wiederholungen echte, wiederholbare Unterschiede abbilden. Nutze Again und Good, wenn dich die zusätzlichen Abstufungen bei jeder Karte ins Grübeln bringen. Die Grenze zwischen Misserfolg und Erfolg ändert sich dadurch nicht.

## Beispiele und Grenzfälle für Again vs Hard

Diese Beispiele wenden dieselbe Regel an und berücksichtigen dabei das Ziel, das auf der jeweiligen Karte steht.

| Situation bei der Wiederholung | Bewertung | Warum |
| --- | --- | --- |
| Bei `abate` sagst du nach großer Mühe schließlich „weniger intensiv werden“ | Hard | Die geforderte Bedeutung ist dir vor dem Aufdecken richtig eingefallen |
| Du kannst den Nerv, der den Deltamuskel innerviert, nicht nennen; `Nervus axillaris` wirkt nach dem Aufdecken offensichtlich | Again | Wiedererkennen nach dem Aufdecken macht einen fehlgeschlagenen Abruf nicht rückgängig |
| Du antwortest bei dem deutschen Ausdruck `sich beeilen` mit `to rush`, während die Karte die Bedeutung prüft und `to hurry` gespeichert hat | Hard, Good oder Easy | Das Synonym kann das Ziel erfüllen; als Nächstes bewertest du den Aufwand |
| Du nennst Sorgfaltspflicht, Pflichtverletzung und Schaden, lässt aber bei einer Karte zu allen Voraussetzungen eines Fahrlässigkeitsanspruchs die Kausalität aus | Again | Ein geforderter Bestandteil der Liste fehlt |
| Du leitest `x²eˣ` mit dem üblichen Rechenweg korrekt als `2xeˣ + x²eˣ` ab | Meist Good | Der für diese Karte erwartete Aufwand zählt mehr als die reine Geschwindigkeit |
| Du antwortest erst nach einem ungeplanten Hinweis auf abgeflachte Membranstapel mit „Golgi-Apparat“ | Again | Der ursprüngliche Versuch ohne Hilfe ist fehlgeschlagen |
| Du nennst das richtige Konzept und machst bei einer Karte, die keine Rechtschreibung prüft, einen Tippfehler | Hard, Good oder Easy | Das Konzept war richtig; bewerte den Aufwand des erfolgreichen Abrufs |

Tippfehler zeigen, warum die genaue Aufgabe zählt. Ein Tippfehler kann eine Rechtschreibkarte scheitern lassen und bei einer Konzeptkarte trotzdem als richtig gelten. Ebenso kann eine langsame Herleitung in Mathematik normal und bei einer einzelnen Vokabel ungewöhnlich schwierig sein. Diese Beispiele beziehen sich auf konkrete Prompts. Sie sind keine universellen Bewertungsregeln.

## Wiederholtes Again ist ein Signal für die Kartenqualität

Mehrere ehrliche Again-Bewertungen können bedeuten, dass der Stoff schwierig ist. Sie können aber genauso gut eine schwache Karte entlarven.

Sieh dir eine Karte genauer an, wenn:

- die Vorderseite mehrere gleichermaßen plausible Antworten zulässt
- die Rückseite mehrere voneinander unabhängige Fakten enthält
- du das Thema verstehst, aber nicht weißt, welche Antwort die Karte verlangt
- du zwei ähnliche Karten ständig verwechselst
- die Information zu wenig wert ist, um die Zeit für Wiederholungen zu rechtfertigen

Formuliere die Karte neu, teile sie auf, lerne sie erneut oder entferne sie, statt sie mit Hard zu schonen. Der gezielte [Leitfaden zum Bereinigen von Leech-Karten](/de/blog/how-to-fix-leech-flashcards/) erklärt diesen Ablauf.

FSRS plant mit dem Signal, das du ihm gibst. Es kann weder einen unklaren Prompt reparieren noch entscheiden, welches fehlende Detail wichtig war oder ob deine gesprochene Antwort sachlich stimmt.

## So funktionieren die vier FSRS-Bewertungen in Flashcards

Zu den [Funktionen der Flashcards Open Source App](/de/features/) gehören Vorder-/Rückseiten-Wiederholungen mit FSRS. Du sendest Again, Hard, Good oder Easy, und das Backend berechnet aus dieser Bewertung den nächsten Fälligkeitszeitpunkt.

Nutze dabei dieselbe Regel in zwei Schritten:

1. Vergleiche deine Antwort mit dem, was die Karte verlangt.
2. Wähle Again, wenn die Antwort nicht kam, falsch war oder ein geforderter Teil fehlte. War sie richtig, bewerte den Abruf mit Hard, Good oder Easy.

Die App speichert die Bewertung, die du sendest. Den Vergleich mit der gespeicherten Rückseite und die Entscheidung für den passenden Button übernimmst du selbst. Genau deshalb sind eine klare Karte und eine stabile Bewertungsgewohnheit wichtig.

Wenn du den Wiederholungsablauf ausprobieren möchtest, [öffne die App](https://app.flashcards-open-source-app.com/). Sie stellt die vier Bewertungen und das FSRS-Scheduling bereit; ehrlich bewerten musst du weiterhin selbst.

## FAQ zu Again, Hard, Good und Easy

### Ist Hard in FSRS eine Bewertung für einen Misserfolg?

Nein. Hard steht für einen erfolgreichen Abruf mit großen Schwierigkeiten. Wähle Again, wenn du die geforderte Antwort nicht abrufen konntest.

### Was ist, wenn meine Antwort fast richtig war?

Prüfe, was die Karte genau verlangt. Fehlt eine entscheidende Tatsache, eine Bedingung, ein Vorzeichen oder ein geforderter Listenpunkt, bedeutet das normalerweise Again. Eine andere Formulierung oder ein fehlendes optionales Detail kann trotzdem als richtig gelten. Formuliere die Karte neu, wenn die Anforderung unklar ist.

### Sollte ich nach einem Tippfehler Again wählen?

Nur wenn die Karte auch die Rechtschreibung testet. Ein Tippfehler kann eine Rechtschreibkarte scheitern lassen und bei einer Konzeptkarte trotzdem als richtig gelten. Bewerte die Aufgabe, die auf der Vorderseite steht.

### Was ist, wenn ich die richtige Antwort geraten habe?

Prüfe, was die Karte von dir verlangt. Eine richtige Antwort aus einem Wort kann auch dann zählen, wenn du gezweifelt hast; dieser Zweifel kann Hard rechtfertigen. Verlangt die Karte eine Erklärung, Berechnung oder Begründung und du hast ohne Begründung nur geraten, ist die geforderte Antwort unvollständig.

### Sollte ich Hard wählen, wenn Good ein langes Intervall anzeigt?

Nein. Bewerte, wie du dich erinnert hast – nicht das Intervall, das du gern hättest. Passe die Einstellungen oder deinen Lernplan an, wenn der Zeitplan nicht stimmt.

### Kann ich mit FSRS nur Again und Good verwenden?

Ja. Again für Misserfolge und Good für Erfolge ist eine sinnvolle Vereinfachung. Vier Bewertungen liefern nützliche zusätzliche Details, wenn du sie einheitlich anwenden kannst.

### Weiß FSRS, ob meine Antwort sachlich richtig war?

Nein. FSRS plant anhand der Bewertung und des Wiederholungsverlaufs. Du vergleichst deine Antwort weiterhin selbst mit der gespeicherten Rückseite und prüfst bei wichtigen Inhalten auch die Karte selbst anhand einer vertrauenswürdigen Quelle.

## Again vs Hard in FSRS darf langweilig sein

Die zuverlässigste Gewohnheit für **Again vs Hard in FSRS** ist angenehm unspektakulär: erst klären, ob die Antwort stimmt, dann den Aufwand bewerten.

Wähle Again, wenn die geforderte Antwort nicht kam oder falsch war. War sie richtig, wähle Hard bei großen Schwierigkeiten, Good bei normalem Aufwand und Easy, wenn sie dir mühelos einfiel. Beurteile Teilantworten danach, was die Karte tatsächlich verlangt, behandle ungeplante Hinweise als Hilfe und lass dich beim Bewerten nicht vom Intervall leiten.

Wenn vier Bewertungen mehr Diskussion als Information erzeugen, nutze Again und Good. Wenn dieselbe Karte immer wieder Again bekommt, prüfe die Karte, statt eine weichere Bewertung zu wählen.

Ein ehrlicher Klick liefert FSRS ein saubereres Signal als zehn Sekunden Feilschen mit dem Zeitplan.
