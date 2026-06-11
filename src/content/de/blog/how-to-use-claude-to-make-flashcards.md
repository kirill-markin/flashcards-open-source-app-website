---
title: "So erstellst du 2026 mit Claude Lernkarten: Projects, Datei-Uploads und FSRS-Wiederholung"
description: "Ein praktischer Claude-Flashcards-Workflow für 2026: Nutze Projects und Datei-Uploads für kleinere, sauberere Kartenentwürfe und verschiebe dann nur die brauchbaren Karten in Flashcards für echte FSRS-Wiederholung."
date: "2026-06-11"
image: "/blog/how-to-use-claude-to-make-flashcards.png"
keywords:
  - "claude lernkarten erstellen"
  - "mit claude flashcards erstellen"
  - "claude flashcards"
  - "claude projects flashcards"
  - "claude datei-upload flashcards"
  - "claude pdf zu flashcards"
  - "flashcards mit claude"
  - "fsrs flashcards"
---

Gestern habe ich eine Vorlesungsgliederung und eine chaotische PDF aus einer Lektüre in Claude geworfen und um Lernkarten gebeten. Ein paar waren stark. Der Rest hatte diesen typischen KI-Geruch: technisch korrekt, seltsam glatt und deutlich schwerer zu wiederholen, als es auf den ersten Blick aussah.

Genau darin steckt das eigentliche Problem hinter **Lernkarten mit Claude erstellen**.

Claude ist gut darin, aus Quellmaterial Kartenkandidaten zu machen. Es entscheidet aber nicht automatisch gut darüber, was in eine langfristige Wiederholung gehört, wie klein eine Karte sein sollte oder ob sich eine hübsche Antwort nächsten Donnerstag noch sauber bewerten lässt.

Der Workflow, dem ich 2026 wirklich trauen würde, ist deshalb enger, als viele zuerst wollen: Halte ein Thema in genau einem Claude Project, lade nur das Material für diesen Batch hoch, lass dir schlichte Vorder-/Rückseiten-Kandidaten geben, lösche aggressiv und verschiebe dann nur die Überlebenden in einen echten Flashcard-Workflow mit FSRS.

![Ein warmer Schreibtisch mit Claude-Entwürfen, Datei-Upload-Karten und ausgewählten FSRS-Lernkarten](/blog/how-to-use-claude-to-make-flashcards.png)

## Claude passt inzwischen deutlich besser zu diesem Workflow

Diese Suche ist heute relevanter, weil Claude stärker auf Lernen zugeschnitten ist als früher.

Anthropic hat **Claude for Education** am **2. April 2025** vorgestellt, inklusive **Learning Mode** innerhalb von Projects. Genauso wichtig sind die aktuellen Hilfeseiten. In der Anthropic-Hilfe zu Projects vom **16. März 2026** steht, dass Projects für alle Nutzer verfügbar sind und Free-Accounts bis zu fünf davon anlegen können. In der Hilfe zu Datei-Uploads vom **22. April 2026** steht, dass Claude lernfreundliche Dateitypen wie **PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON und XLSX** unterstützt.

Damit haben **Claude Flashcards** heute einen deutlich saubereren Ausgangspunkt als das ältere Muster "alles in einen Chat kippen und hoffen".

Anthropics Bildungsreport zeigt außerdem, dass dieses Verhalten längst verbreitet ist. Dort heißt es, Studierende nutzen Claude in **39,3 %** der analysierten bildungsbezogenen Gespräche vor allem dafür, Lerninhalte zu erstellen und zu verbessern. Die spannende Frage ist also nicht mehr, ob Menschen Claude für Lernmaterial nutzen. Das tun sie offensichtlich. Die bessere Frage ist, wie daraus Karten werden, die sich später wirklich zu wiederholen lohnen.

## Starte mit genau einem Claude Project pro Kurs, Prüfung oder Thema

Das ist die erste Gewohnheit, die ich behalten würde, weil sie fast alles danach verbessert.

Baue keinen riesigen Claude-Arbeitsbereich mit dem Namen `school`.

Lege lieber je ein Project an für:

- einen Kurs
- eine Zertifizierungsprüfung
- eine Lerneinheit, die du diese Woche abschließen willst
- einen Themenblock, der inhaltlich wirklich zusammengehört

Dadurch werden die Entwürfe sauberer, weil Claude nicht versucht, Stoff aus vier verschiedenen Fächern in einer Antwort zu vermischen. Und das spätere Aufräumen nervt weniger, weil klar ist, welchen Stoff dieser Batch überhaupt abdecken sollte.

Wenn du Claude breiter als Tutor nutzt und nicht nur als Karten-Entwurfshelfer, ist [So nutzt du Claude 2026 zum Lernen](/de/blog/how-to-use-claude-for-studying/) der passendere Begleitartikel. Dieser Text ist enger gefasst. Es geht hier darum, von Claude-Ausgaben zu Karten zu kommen, die du während der Wiederholung noch respektierst.

## Lege die Project Instructions einmal fest, damit jeder Batch sauberer startet

Das ist einer der nützlichsten Claude-spezifischen Vorteile.

Anthropics aktuelle Projects-Doku sagt, dass du **Project Instructions** hinterlegen kannst, damit Claude in allen Chats dieses Projects dieselben Vorgaben beibehält. Für Lernkarten spart dir das, bei jedem neuen Upload dieselben Format- und Löschregeln wiederholen zu müssen.

Ich würde die Project Instruction kurz und langweilig halten:

```text
Wenn ich nach Flashcards frage, nutze ein schlichtes Vorder-/Rückseiten-Format. Ein Konzept, eine Tatsache, eine Unterscheidung oder ein Prozessschritt pro Karte. Halte die Vorderseiten spezifisch und beantwortbar. Halte die Rückseiten kurz. Überspringe Duplikate, vage Fragen und alles, was vom fehlenden Kontext der Originalquelle abhängt.
```

Die abschnittsspezifischen Anweisungen würde ich dann in den eigentlichen Chat schreiben, wenn du einen neuen Abschnitt hochlädst.

Diese Aufteilung funktioniert gut, weil die Project Instruction die Hausregeln festlegt und der Chat-Prompt sich um die aktuelle Vorlesung, das Kapitel oder das Fragenset kümmert.

## Lade kleinere Material-Batches hoch, als du zuerst denkst

Genau hier werden viele **Claude zu Flashcards**-Workflows unscharf.

Menschen sehen Datei-Uploads und behandeln sie sofort wie eine Erlaubnis, ein ganzes Kurspaket in eine einzige Anfrage zu kippen. Meist entstehen dadurch schlechtere Karten, nicht bessere.

Anthropics Upload-Doku empfiehlt bei großen Dokumenten selbst den langweiligen, richtigen Weg: Teile sie in kleinere Abschnitte auf. Genau das würde ich machen.

Bessere Inputs sind zum Beispiel:

- die Notizen zu einer Vorlesung
- ein einzelner Abschnitt aus einer Lektüre
- ein korrigierter Übungsfragen-Satz
- ein Unterabschnitt eines Kapitels
- ein sauberer Ausschnitt aus einem Lernleitfaden

Schlechtere Inputs sind zum Beispiel:

- das ganze Lehrbuch
- zwölf Vorlesungen auf einmal
- ein Semesterordner, den du selbst noch nicht bereinigt hast
- ein riesiger Transkript-Dump, den du ohnehin nicht Karte für Karte wiederholen willst

Kleine Batches erzwingen eine ehrlichere Frage: Was aus diesem Abschnitt ist es wert, später abzurufen, ohne die Quelle noch einmal zu öffnen?

Genau diese Frage hält das Deck kleiner und besser.

## Claude kann gut aus Quellmaterial entwerfen, aber nicht automatisch auswählen, was wichtig ist

Das ist für mich das nützlichste Denkmodell.

Claude kann:

- einen Leseabschnitt verdichten
- ein Konzept klarer umformulieren
- offensichtliche Unterthemen trennen
- aus Notizen Kandidaten für Frage-und-Antwort-Karten machen
- wiederkehrende Begriffe und Definitionen erkennen

Claude weiß nicht automatisch:

- welche Fakten so offensichtlich sind, dass du sie überspringen kannst
- welche Unterscheidungen dir immer wieder Probleme machen
- welche Antwort zu lang ist, um sie schnell zu bewerten
- welche Karte nur deshalb funktioniert, weil du den Absatz noch im Kopf hast, aus dem sie stammt

Deshalb funktioniert **Lernkarten mit Claude erstellen** am besten, wenn Claude den Entwurf macht und du ihn überarbeitest.

Wenn du Claude bittest, alles zu entscheiden, bekommst du meist ein Deck, das zu höflich ist. Es bewahrt zu viel auf, erklärt zu viel und hält Material fest, das sich im Moment nützlich angefühlt hat, aber keine künftigen Wiederholungen verdient.

## Nutze einen schlichten Prompt und lass die Einschränkungen die Arbeit machen

Du brauchst keinen theatralischen Prompt.

Im eigentlichen Chat würde ich etwas in dieser Richtung verwenden:

```text
Verwandle diese Quelle in schlichte Vorder-/Rückseiten-Flashcards.

Regeln:
- Eine Tatsache, Unterscheidung oder ein Prozessschritt pro Karte
- Die Vorderseite muss spezifisch und beantwortbar sein
- Die Rückseite muss kurz und direkt sein
- Keine erfundenen Fakten
- Überspringe Duplikate und vage Fragen
- Überspringe Karten, die vom fehlenden Kontext des Originaldokuments abhängen
- Lösche aggressiv Karten, die keine langfristige Wiederholung wert sind
```

Wenn die Quelle ein korrigierter Fragensatz ist, füge noch einen Satz hinzu:

```text
Priorisiere Fehler, Verwechslungen und Unterschiede, die ich wahrscheinlich wieder übersehen oder verwechseln werde.
```

Das reicht.

Die nützlichen Einschränkungen sind schlicht:

- ein Abrufziel pro Karte
- kurze Antworten
- keine erfundenen Fakten
- keine Vorderseiten, die wie Mini-Zusammenfassungen klingen
- keine Karte, die nur mit geöffneter Originalquelle nebenbei funktioniert

Claude reagiert meistens gut auf klare Grenzen. Das Problem ist selten fehlende Prompt-Magie. Das Problem ist eher, dass Menschen auf einmal zu viel verlangen.

## Die besten Claude-Flashcards entstehen meistens aus drei Arten von Material

Claude vertraue ich am meisten, wenn die Quelle schon relativ nah an brauchbaren Karten ist, aber noch bereinigt werden muss.

Die stärksten Fälle sind:

- Vorlesungsnotizen, die verdichtet werden müssen
- Lektüren, aus denen man das Wesentliche herausziehen muss
- korrigierte Übungsfragen, die einen ganz konkreten Fehler sichtbar machen

Das Muster ist wichtig, weil Claude hier kein Lernsystem aus dem Nichts erfindet. Es hilft dir, rohes Material in engere Abrufziele zu verwandeln.

Wenn dein Input hauptsächlich aus Notizen besteht, geht [Wie du 2026 Notizen in Flashcards verwandelst](/de/blog/turn-notes-into-flashcards/) tiefer auf den Bereinigungsschritt ein. Wenn dein Input als Datei beginnt, ist [Wie du 2026 eine PDF in Flashcards verwandelst](/de/blog/how-to-turn-a-pdf-into-flashcards/) der passendere Begleitartikel.

## Lösche die Karten, die immer noch nach Claude klingen

Genau hier passiert der eigentliche Qualitätssprung.

Claude-generierte Karten scheitern oft auf wiedererkennbare Weise:

- die Vorderseite klingt elegant, ist aber nicht sauber beantwortbar
- die Rückseite enthält drei Fakten, weil der Absatz drei Fakten enthielt
- die Karte benutzt weiche Formulierungen wie "wichtige Überlegungen" oder "entscheidende Faktoren"
- der Wortlaut liest sich angenehm, ist aber nervig zu wiederholen

Die würde ich sofort streichen.

Eine Vorderseite auf einer Lernkarte sollte nicht wie der erste Satz eines Lernleitfadens klingen. Sie sollte wie eine Frage klingen, die du beantworten oder eben nicht beantworten kannst.

Behalte die Karte nur, wenn:

- du sie beantworten kannst, ohne die Quelle noch einmal zu öffnen
- die Rückseite kurz genug ist, um sie schnell zu bewerten
- sie genau ein Konzept testet und kein Themenbündel
- es dir in einer Woche noch wichtig ist, dich daran zu erinnern

Wenn nicht, fliegt sie raus.

Das ist der wichtigste Unterschied zwischen einer Claude-Session, die sich produktiv anfühlt, und einem Deck, das langfristig nützlich bleibt.

## Eine schwache Claude-Karte und die Version, die ich wirklich behalten würde

Nehmen wir an, Claude liest einen Abschnitt über Glykolyse und gibt dir das hier:

- Vorderseite: Was sind die wichtigsten Merkmale und Ergebnisse der Glykolyse?
  Rückseite: Die Glykolyse ist ein Stoffwechselweg, der im Zytoplasma stattfindet, Glukose in Pyruvat umwandelt, ATP und NADH produziert und keinen Sauerstoff benötigt.

Das ist nicht eine Karte. Das ist ein Absatz mit Kartenetikett.

Die bessere Version sind meistens mehrere kleinere Karten:

- Vorderseite: Wo findet die Glykolyse statt?
  Rückseite: Im Zytoplasma.
- Vorderseite: Welches Molekül baut die Glykolyse ab?
  Rückseite: Glukose.
- Vorderseite: Benötigt die Glykolyse Sauerstoff?
  Rückseite: Nein.

Vielleicht behältst du noch eine weitere Karte zu den Produkten, wenn genau diese Unterscheidung in deinem Kurs zählt.

Der Punkt ist nicht, Claudes glatt formulierte Antwort zu bewahren. Der Punkt ist, die Abrufziele zu bewahren, die darin versteckt sind.

## Verwechsle Claude-Memory und Kontext nicht mit Spaced Repetition

Claude hat heute bessere Kontextwerkzeuge als früher. Projects helfen. Hochgeladene Dateien helfen. Project Instructions helfen. Das ist alles nützlich.

Es ist trotzdem nicht dasselbe wie ein Wiederholungssystem.

Claude kann Kontext zu einem Thema halten. Es kann sich den Verlauf deiner Session besser merken als frühere Chat-Tools. Nichts davon ersetzt den langweiligen Teil, der später wirklich zählt: die richtige Karte wieder zur richtigen Zeit zu sehen.

Deshalb sollten **Claude Projects Flashcards** in einer echten Flashcard-App enden und nicht im Project selbst bleiben.

Claude kann Kontext halten.

FSRS kümmert sich ums Vergessen.

Das sind unterschiedliche Aufgaben.

Wenn du die Scheduling-Seite ausführlicher willst, ist [FSRS vs SM-2 im Jahr 2026](/de/blog/fsrs-vs-sm-2/) der direkte Begleitartikel.

## Verschiebe die guten Karten in Flashcards, ohne so zu tun, als gäbe es eine magische Claude-Integration

Dieser Teil muss ehrlich bleiben.

Es gibt hier keinen besonderen Claude-zu-Flashcards-Button, und ich würde auch nicht so tun, als gäbe es ihn. Die nützliche Übergabe ist einfacher:

1. Entwirf Kartenkandidaten in Claude.
2. Lösche oder überarbeite die schwachen Karten.
3. Kopiere die Überlebenden in den Flashcards-KI-Chat oder erstelle sie direkt in der App.
4. Organisiere sie in Decks und Tags.
5. Wiederhole das fertige Deck mit FSRS.

[Flashcards](/de/) passt gut zu diesem Workflow, weil das aktuelle Produkt genau den Teil abdeckt, den Claude nicht selbst fertigstellt:

- Erstellung und Bearbeitung klassischer Vorder-/Rückseite-Karten
- KI-Chat mit Workspace-Daten und Datei-Anhängen
- Decks und Tags zum Organisieren fertiger Karten
- FSRS-Wiederholung, sobald die Karten es wert sind, im Deck zu bleiben
- eine gehostete Web-App, wenn du schnell starten willst
- eine Self-Hosting-Option, wenn du später deinen eigenen Stack betreiben willst

Wenn du den schnellsten Einstieg willst, zeigt dir [Erste Schritte](/de/docs/getting-started/) die gehostete App. Wenn dir wichtiger ist, den Stack selbst zu besitzen, ist der [Self-Hosting-Guide](/de/docs/self-hosting/) der richtige nächste Schritt.

## Der Workflow, den ich tatsächlich wiederholen würde

Die gute Version von **Lernkarten mit Claude erstellen** ist kurz genug, dass du sie auch dann noch nutzt, wenn der Neuheitseffekt weg ist.

Diese Version würde ich behalten:

1. Erstelle ein Claude Project für genau einen Kurs, eine Prüfung oder ein Thema.
2. Lege eine kurze Project Instruction für die Regeln deiner Vorder-/Rückseite-Karten fest.
3. Lade einen kleinen Batch hoch: eine Vorlesung, einen Lektüreabschnitt oder korrigierte Übungsfragen.
4. Bitte Claude um schlichte Vorder-/Rückseiten-Kandidaten.
5. Lösche oder überarbeite schwache Karten sofort.
6. Verschiebe die Überlebenden in den Flashcards-KI-Chat oder erstelle sie direkt in der App.
7. Wiederhole das fertige Deck mit FSRS.

Das ist ein glaubwürdigerer Workflow, als so zu tun, als wäre Claude selbst der Ort für langfristiges Behalten.

Wenn sich dein KI-generiertes Deck schon aufgebläht anfühlt, sind [Wie du 2026 KI-Flashcard-Overload vermeidest](/de/blog/how-to-avoid-ai-flashcard-overload/) und [Wie du 2026 KI-Flashcards reparierst](/de/blog/how-to-fix-ai-flashcards/) die beiden Texte, die ich als Nächstes lesen würde.

## Die bessere Regel für Claude als Lernkarten-Helfer

Bitte Claude nicht darum, dein Lernen für dich zu beenden.

Bitte es darum, die Verwaltungsarbeit zu entfernen.

Das ist die Version von **Lernkarten mit Claude erstellen**, die 2026 wirklich trägt:

- ein Project pro Thema
- ein kleiner Batch nach dem anderen
- eine Tatsache oder Unterscheidung pro Karte
- aggressives Löschen
- echte Wiederholung danach

Claude ist gut darin, dich schneller von chaotischem Quellmaterial zu Kartenkandidaten zu bringen.

Flashcards plus FSRS macht aus diesen Kandidaten etwas, an das du dich einen Monat später vielleicht immer noch erinnerst.
