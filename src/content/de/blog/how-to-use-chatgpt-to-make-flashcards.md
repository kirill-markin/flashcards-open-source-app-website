---
title: "Mit ChatGPT Karteikarten erstellen (2026): Von Notizen zum geprüften Kartenstapel"
description: "So erstellst du mit ChatGPT Karteikarten aus Notizen oder Dateien, prüfst jeden Vorschlag, sortierst schwache Karten aus und übernimmst nur die verbleibenden für Spaced Repetition."
date: "2026-03-25"
updated: "2026-08-15"
image: "/blog/how-to-use-chatgpt-to-make-flashcards.png"
keywords:
  - "mit ChatGPT Karteikarten erstellen"
  - "ChatGPT Karteikarten"
  - "Karteikarten mit ChatGPT erstellen"
  - "ChatGPT in Karteikarten umwandeln"
  - "ChatGPT Prompt für Karteikarten"
  - "KI-Karteikarten-Generator"
  - "ChatGPT Study Mode Karteikarten"
---

ChatGPT kann aus einer Datei mit Vorlesungsunterlagen eine sauber formulierte Liste mit Fragen und Antworten erstellen. Der heikle Teil kommt danach: Du musst prüfen, ob jede Antwort tatsächlich aus der Datei stammt, ob die Frage genau einen Lerninhalt abfragt und ob die Karte über Monate hinweg in deiner Wiederholungswarteschlange auftauchen sollte.

Genau darin liegt 2026 die praktische Antwort auf die Frage, **wie du mit ChatGPT Karteikarten erstellst**. Begrenze die Quelle klar, lass ChatGPT Lücken und Unklarheiten vor dem ersten Entwurf offenlegen, behandle jede Ausgabe als Vorschlag und speichere nur Karten, die du selbst geprüft hast. ChatGPT hilft beim Herausarbeiten und Formulieren. Es liefert weder einen verifizierten Kartenstapel noch einen Zeitplan für Spaced-Repetition-Wiederholungen.

> **Offenlegung:** Ich bin Kirill Markin und entwickle die [Flashcards Open Source App](/de/features/). Dieser Leitfaden funktioniert mit jeder Karteikarten-App, bei der eine Karte aus Vorder- und Rückseite besteht. Ich erwähne Flashcards dort, wo der tatsächliche Ablauf der App relevant ist – nicht als Beleg dafür, dass alle Lernenden sie verwenden sollten.

**Fakten geprüft:** 15. August 2026.

![Eine Gärtnerin prüft Samen aus einer geöffneten Schote und setzt nur die unbeschädigten in ein gleichmäßig unterteiltes Keimtablett](/blog/how-to-use-chatgpt-to-make-flashcards.png)

## Der kurze Ablauf

Wenn du zuerst den gesamten Prozess sehen möchtest, geh so vor:

1. Wähle einen kleinen Abschnitt aus deiner Quelle und halte die zugehörige Seite, Folie oder Überschrift fest.
2. Bitte ChatGPT, abfragbare Fakten, unklare Passagen und fehlenden Kontext aufzulisten, ohne schon Karten zu erstellen.
3. Lass Kartenentwürfe mit Vorder- und Rückseite erstellen, jeweils mit Fundstelle und einem Hinweis auf mögliche Unsicherheiten.
4. Prüfe jede Antwort anhand der Quelle. Formuliere schwache Karten um, teile sie auf oder lösche sie.
5. Teste dich mit den verbleibenden Karten, ohne die Rückseiten zu sehen.
6. Lass nur die genehmigten Karten in einer einfachen, leicht übertragbaren Struktur ausgeben.
7. Kopiere oder speichere diese Karten in einer Karteikarten-App mit Wiederholungsplanung und halte dich anschließend an deren Wiederholungsplan.

Das Aussortieren gehört zum Ablauf und ist keine nachträgliche Korrektur eines vermeintlichen „Versagens“ von ChatGPT. Ein KI-Karteikarten-Generator kann mehr plausibel klingende Karten erstellen, als du behalten solltest. Ein deutlich kleinerer Stapel kann ein sehr gutes Ergebnis sein.

## Beginne mit einem Quellabschnitt, nicht mit dem ganzen Thema

„Erstelle Karteikarten über Zellbiologie“ lässt ChatGPT viel Spielraum: Es kann auf sein allgemeines Wissen zurückgreifen, dein Kursniveau erraten und selbst entscheiden, was wichtig ist. Für ein Brainstorming kann das nützlich sein. Für einen Stapel, der genau zu deiner Vorlesung oder Prüfung passen soll, ist es eine schlechte Ausgangslage.

Verwende einen Vorlesungsabschnitt, einige Seiten aus einem Lehrbuch, das du hochladen darfst, oder einen kurzen Ausschnitt aus deinen eigenen Notizen. Nenne ChatGPT die genaue Grenze: „Seiten 12–16“, „Folien 8–14“ oder „der Abschnitt mit dem Titel Membrantransport“. Bei einer kleineren Quelle erkennst du Auslassungen und nicht belegte Ergänzungen leichter.

ChatGPT unterstützt gängige Text-, Dokument-, Präsentations-, Tabellen- und PDF-Formate, darunter TXT, DOCX, PPTX, XLSX, CSV und PDF. Laut OpenAIs [Seite zu unterstützten Dateiformaten](https://help.openai.com/en/articles/8983675-what-types-of-files-are-supported) werden `.gdoc`-Dateien nicht direkt unterstützt. Exportiere ein Google Doc daher zuerst als PDF oder DOCX.

Auch bei einer hochgeladenen Datei braucht ChatGPT klare Anweisungen. OpenAI empfiehlt im [Leitfaden zum Study Mode](https://help.openai.com/en/articles/11780217-study-mode), ChatGPT die gewünschte Seite, den Abschnitt, die Frage oder das Bild zu nennen, wenn es einen Teil des Uploads übersehen hat. Frage bei gescannten Seiten, Diagrammen oder dicht gepackten Folien zuerst, was ChatGPT tatsächlich lesen kann. Fehlt eine Formel, Beschriftung oder Fußnote, füge den betreffenden Text ein oder lade ein deutlicheres Bild hoch, bevor du Karten erstellen lässt.

Dieser erste Prompt setzt eine strikte Grenze für die Quelle:

```text
Verwende ausschließlich die angehängte Datei, und darin die Seiten 12–16 unter
der Überschrift „Membrantransport“. Nutze kein externes Wissen und erfinde keine
fehlenden Fakten.

Gib vor dem Erstellen von Karteikarten Folgendes zurück:
1. die konkreten Fakten, Unterschiede und Zusammenhänge, die sich abfragen lassen;
2. alles, was in der Quelle mehrdeutig, unvollständig oder unleserlich ist;
3. jeden Punkt, der mehr Kontext braucht, bevor daraus eine faire Frage werden kann.

Nenne für jeden Punkt die Seite und die Überschrift, die ihn belegen. Ist die
Fundstelle unklar, kennzeichne den Punkt als NICHT BELEGT, statt zu raten.
Entwirf noch keine Karten.
```

Lies diese Übersicht, bevor du weitermachst. Führt ChatGPT etwas auf, das du nicht finden kannst, entferne es oder bitte um den genauen Satz. Eine selbstbewusste Erklärung ist noch kein Quellenbeleg.

## Erstelle Kartenvorschläge mit nachvollziehbaren Fundstellen

Wenn die Übersicht der Quelle stimmt, kannst du Kartenvorschläge erstellen lassen. Das Wort „Vorschlag“ ist wichtig, denn damit bleibt der nächste Schritt klar: Du musst die Karten noch genehmigen.

Eine gute Vorderseite stellt eine klare Frage. Eine gute Rückseite beantwortet genau diese Frage. Die Karte sollte auch später verständlich sein, wenn die Quelle nicht mehr geöffnet und die Vorlesung nicht mehr frisch im Gedächtnis ist. Weitere Beispiele für Inhalte, die in dieses Format passen, findest du unter [Was gehört auf eine Karteikarte?](/de/blog/what-should-go-on-a-flashcard/).

Hier ist ein kopierbarer **ChatGPT-Prompt für Karteikarten**:

```text
Wandle die genehmigte Übersicht in Vorschläge für Karteikarten um.

Regeln:
- Verwende nur Fakten, die in der bereitgestellten Quelle stehen. Ergänze kein
  externes Wissen.
- Frage pro Karte genau einen Lerninhalt ab.
- Schreibe auf die Vorderseite nur eine Frage oder einen Abrufhinweis.
- Schreibe auf die Rückseite die kürzeste vollständige Antwort.
- Formuliere jede Vorderseite so, dass sie ohne den Quellabsatz verständlich ist.
- Erstelle keine Karten aus mehrdeutigen oder nicht belegten Punkten.
- Ergänze auf der Rückseite keine Fakten, nach denen die Vorderseite nicht fragt.
- Übernimm Einschränkungen wie „normalerweise“, „unter diesen Bedingungen“ oder
  „nach diesem Modell“, sofern sie in der Quelle stehen.

Gib jeden Vorschlag in dieser Struktur aus:
ID:
Vorderseite:
Rückseite:
Fundstelle:
Unsicherheit: keine oder ein konkreter Grund für eine Prüfung

Liste nach den Karten auf, welche Punkte aus der Quelle du bewusst ausgelassen
hast und warum.
```

Die Fundstelle ist nur eine vorübergehende Arbeitshilfe. Auf der endgültigen Karte brauchst du sie vielleicht nicht, doch sie beschleunigt die Prüfung erheblich. Auch die Liste der ausgelassenen Punkte ist nützlich: Sie zeigt, ob ChatGPT eine schwierige Passage stillschweigend übersprungen oder Material sinnvoll weggelassen hat, das nicht auf Karteikarten gehört.

## Ein Beispiel von der Quelle zur Karte

Hier ist ein hypothetischer Ausschnitt aus Kursnotizen:

```text
Beispielnotizen, Absatz 3: Während der ventrikulären Systole steigt der Druck
in den Herzkammern. Die Atrioventrikularklappen schließen sich, wenn der Druck
in den Herzkammern den Druck in den Vorhöfen übersteigt. Die Taschenklappen
öffnen sich, wenn der Druck in den Herzkammern den Druck in den Arterien übersteigt.
```

Ein typischer erster Entwurf könnte so aussehen:

```text
Vorderseite: Was geschieht während der ventrikulären Systole?
Rückseite: Der Druck in den Herzkammern steigt, die Atrioventrikularklappen
schließen sich, wenn er den Druck in den Vorhöfen übersteigt, und die
Taschenklappen öffnen sich, wenn er den Druck in den Arterien übersteigt.
```

Die Antwort ist durch den Ausschnitt belegt, doch die Karte fragt drei Dinge gleichzeitig ab. Eine nur teilweise richtige Antwort lässt sich schwer bewerten. Durch das Aufteilen entstehen klarere Vorschläge:

```text
Vorderseite: Welche Druckbedingung führt laut diesen Notizen dazu, dass sich die
Atrioventrikularklappen während der ventrikulären Systole schließen?
Rückseite: Der Druck in den Herzkammern übersteigt den Druck in den Vorhöfen.
Quelle: Beispielnotizen, Absatz 3.

Vorderseite: Welche Druckbedingung führt laut diesen Notizen dazu, dass sich die
Taschenklappen während der ventrikulären Systole öffnen?
Rückseite: Der Druck in den Herzkammern übersteigt den Druck in den Arterien.
Quelle: Beispielnotizen, Absatz 3.
```

Auch diese Karten sind noch Vorschläge. Prüfe die Formulierungen anhand der tatsächlichen Kursunterlagen und entscheide, ob es sich lohnt, beide Unterschiede auswendig zu lernen. ChatGPT hat den Text leichter überprüfbar gemacht, den Inhalt aber nicht bestätigt.

## Prüfe jede Karte nach sechs Kriterien

Geh die Vorschläge einzeln durch. Mit einer einfachen Qualitätskontrolle findest du die meisten Probleme, durch die KI-Karten bei späteren Wiederholungen frustrierend werden.

1. **Quellenbeleg:** Kannst du auf den Satz, die Tabelle, die Folie oder das Diagramm verweisen, das die vollständige Antwort stützt? Falls nicht, lösche die Karte oder prüfe sie anhand einer maßgeblichen Quelle, bevor du sie behältst.
2. **Ein Lerninhalt:** Kannst du die vollständige Antwort als einen Gedanken wiedergeben? Teile Listen, Doppelfragen und weit gefasste Aufforderungen wie „Erkläre alles“ auf.
3. **Klarer Kontext:** Wäre die Vorderseite auch nächsten Monat noch verständlich? Ersetze vage Wörter wie „es“, „dieser Prozess“ und „die Theorie“ durch das tatsächliche Thema.
4. **Kompakte Antwort:** Ist die Rückseite kurz genug, dass du sie bewerten kannst, ohne lange abzuwägen, welchen Teil du vergessen hast? Behalte notwendige Bedingungen bei, aber entferne Erklärungen und Beispiele, wenn sie nicht Teil der abgefragten Antwort sind.
5. **Für spätere Wiederholungen relevant:** Ist diese Information über die heutige Lektüre hinaus wichtig? Lösche Überschriften, offensichtliche Füllinhalte, doppelte Aussagen und Details, die du bei Bedarf schnell herleiten kannst.
6. **Faire Bewertung:** Würdest du eine sinngemäß richtige Antwort erkennen, oder verlangt die Karte den exakten Wortlaut von ChatGPT? Formuliere Vorderseiten um, die versehentlich eine Formulierung statt Wissen abfragen.

Der weiterführende Leitfaden zum [Verbessern von KI-Karteikarten](/de/blog/how-to-fix-ai-flashcards/) erklärt genauer, wie du vage, überladene und doppelte Karten korrigierst. Wenn bei der Generierung deine Warteschlange immer weiter wächst, helfen die strengeren Regeln in [So vermeidest du zu viele KI-Karteikarten](/de/blog/how-to-avoid-ai-flashcard-overload/).

Du kannst ChatGPT um Hilfe bei dieser Prüfung bitten. Lass die Quelle dabei geöffnet und triff die endgültige Entscheidung selbst:

```text
Prüfe diese Kartenvorschläge anhand der bereitgestellten Quelle.

Gib für jede ID BEHALTEN, UMFORMULIEREN, AUFTEILEN oder LÖSCHEN aus. Erkläre das
konkrete Problem: nicht belegte Antwort, unklarer Kontext, mehr als ein
Lerninhalt, zu lange Antwort, Duplikat oder für spätere Wiederholungen nicht nützlich.
Zitiere nur so viel aus der Quelle, wie zum Erkennen der Fundstelle nötig ist.

Führe keine neuen Fakten ein. Ist der Beleg unvollständig, nenne genau, was
fehlt. Zeige anschließend nur für UMFORMULIEREN und AUFTEILEN eine überarbeitete
Formulierung.
```

Betrachte einen zweiten KI-Durchgang nicht als unabhängige Überprüfung. ChatGPT kann denselben Fehler in besserer Sprache wiederholen. Überprüfen heißt, die Antwort mit deiner Quelle oder einer anderen geeigneten maßgeblichen Quelle abzugleichen.

## Teste die Karten, bevor du sie speicherst

Eine Karte kann bei sichtbarer Rückseite eindeutig wirken und trotzdem als Abruffrage scheitern. Verbirg die Antworten und teste eine kleine Auswahl. ChatGPT kann diesen Test im Gespräch durchführen:

```text
Prüfe mich nacheinander mit den Vorschlags-IDs 2, 4, 7, 8 und 11. Zeige die
Rückseite erst, nachdem ich geantwortet habe. Vergleiche meine Antwort danach
ausschließlich mit der genehmigten Rückseite. Akzeptiere eine sinngemäß richtige
Formulierung und verlange nicht den exakten Wortlaut. Benenne den fehlenden oder
falschen Teil, ohne Fakten aus deinem allgemeinen Wissen zu ergänzen. Liste am
Ende auf, welche Karten schwer verständlich oder schwer zu bewerten waren.
Erstelle keine neuen Karten.
```

Damit testest du die Abruffrage, nicht Spaced Repetition. Du prüfst, ob die Vorderseite zuverlässig die beabsichtigte Antwort auslöst. Formuliere verwirrende Karten um. Behalte sie nicht nur deshalb, weil ChatGPT erklären kann, was damit gemeint war.

Manche Lernaufgaben sollten außerhalb von Karteikarten bleiben. Rechne vollständige Mathematikaufgaben, schreibe Essays, beschrifte komplette Diagramme, übe das Sprechen einer Sprache und trainiere mehrstufige Abläufe in ihrem tatsächlichen Format. Eine Karte kann eine Formel, einen Unterschied, einen Hinweisreiz oder einen häufigen Fehler festhalten. Sie sollte nicht die eigentliche Aufgabe ersetzen, die du beherrschen musst.

## Wann Study Mode sinnvoll ist

Ein normaler ChatGPT-Chat eignet sich gut für den oben beschriebenen Ablauf von der Quelle zum Kartenvorschlag. Study Mode ist nützlicher, wenn du dich zuerst beim Lernen begleiten lassen und erst danach entscheiden möchtest, was du speicherst.

Laut OpenAIs aktuellem [Leitfaden zum Study Mode](https://help.openai.com/en/articles/11780217-study-mode) kann der Modus hochgeladene Notizen, Folien, Texte, Bilder und PDFs einbeziehen, Fragen einzeln stellen, das Verständnis prüfen und eine Wiederholung im Karteikartenstil erstellen. OpenAI warnt außerdem, dass Study Mode Fehler machen kann, und empfiehlt, wichtige Informationen noch einmal zu überprüfen.

Lass dich zuerst von ChatGPT beim Lernen begleiten und leite anschließend nur aus den Wissenslücken Karten ab:

```text
Verwende nur die von mir genannten hochgeladenen Seiten. Stelle mir nacheinander
einzelne Fragen und warte jeweils auf meine Antwort. Gib vor der vollständigen
Erklärung einen Hinweis. Halte Inhalte fest, die ich übersehe, verwechsle oder
nicht klar erklären kann. Erstelle während der Lerneinheit keine Karteikarten.

Schlage am Ende nur für wichtige Wissenslücken Karten vor. Gib die Quellseite
oder den Abschnitt an und kennzeichne jede Unsicherheit. Erfinde keine Fakten
und speichere nichts.
```

Study Mode ist in normalen Chats und in Temporary Chats verfügbar, aber nicht in GPT-Unterhaltungen oder Chats innerhalb von Projects. ChatGPT [Projects](https://help.openai.com/en/articles/10169521-using-projects-in-chatgpt) können Dateien, Anweisungen und Chats für wiederkehrende Arbeit in einem Kontext bündeln und daher für einen längeren Kurs trotzdem nützlich sein. Öffne einen normalen Chat, wenn du ausdrücklich Study Mode verwenden möchtest.

Der ergänzende Leitfaden [So machst du aus ChatGPT Study Mode Karteikarten](/de/blog/how-to-turn-chatgpt-study-mode-into-flashcards/) konzentriert sich auf Lernbegleitung, Fehler und Wissenslücken. Dieser Artikel deckt den breiteren Ablauf vom Quellenmaterial bis zum genehmigten Kartenstapel ab.

## Gib nur die genehmigten Karten aus

Bitte ChatGPT nach der Genehmigung nicht, „alles aufzuräumen“. Dabei können unbemerkt Karten hinzukommen, Einträge zusammengeführt oder Fakten anders formuliert werden. Gib die akzeptierten IDs vor und lege den Inhalt verbindlich fest:

```text
Gib nur die genehmigten Vorschlags-IDs 2, 4, 7, 8 und 11 zurück.
Kopiere für diese IDs jede genehmigte Vorder- und Rückseite exakt. Füge keine
Fakten hinzu, führe nichts zusammen, erweitere nichts und formuliere nichts um.

Verwende für jede Karte diese einfache Struktur:
Vorderseite: [genehmigte Vorderseite]
Rückseite: [genehmigte Rückseite]

Trenne die Karten durch jeweils eine Leerzeile. Füge weder Einleitung noch
Schluss hinzu.
```

Einfache Blöcke aus Vorder- und Rückseite lassen sich leicht prüfen und in die meisten Karteneditoren kopieren, auch wenn jede App eigene Importregeln hat. Benötigst du Tabulatoren, CSV oder ein anderes Format, fordere es erst an, nachdem du die aktuellen Anforderungen des Zielsystems geprüft hast. Bewahre eine unveränderte Textkopie auf, bis du kontrolliert hast, dass die Karten richtig gespeichert wurden.

Die gehostete Flashcards-App bietet einen KI-Chat mit Dateianhängen; gespeicherte Karten haben getrennte Felder für Vorder- und Rückseite. Du prüfst den vorgeschlagenen Inhalt und entscheidest, was gespeichert wird. Du kannst dort den gesamten Ablauf zur Quellenprüfung durchführen oder die genehmigte ChatGPT-Ausgabe in den Karteneditor kopieren. Die [Funktionsübersicht](/de/features/) zeigt die aktuellen Produktbereiche.

Wenn Codex oder ein anderer MCP-Client genehmigte Karten direkt speichern soll, nutze den separaten [Lernablauf mit ChatGPT und Codex](/de/blog/how-to-use-chatgpt-codex-for-studying/) und die [Dokumentation zum MCP-Connector](/de/docs/mcp-connector/). Diese Einrichtung braucht eigene Sicherheits- und Genehmigungsprüfungen; sie muss hier nicht wiederholt werden. Geh nicht davon aus, dass ein normaler ChatGPT-Chat direkten Zugriff auf deine Karteikartensammlung hat.

## Nach ChatGPT beginnt die Wiederholungsplanung

ChatGPT kann dich in einer Unterhaltung abfragen oder eine Wiederholung im Karteikartenstil erstellen. Keine dieser Aktionen plant deine Karten über längere Zeit. Sobald die genehmigten Karten in einer Karteikarten-App liegen, erledigst du dort die eigentlichen Wiederholungen: Rufe die Antwort ab, decke die Rückseite auf, bewerte das Ergebnis und lass den Algorithmus entscheiden, wann die Karte wiederkehrt.

Flashcards verwendet FSRS für diese Planung. [FSRS im Vergleich mit SM-2](/de/blog/fsrs-vs-sm-2/) erklärt den Unterschied, falls dich die Details des Algorithmus interessieren. Der entscheidende Unterschied ist einfacher: ChatGPT entwirft Vorschläge und hilft dir beim Testen; die Karteikarten-App speichert den Wiederholungsverlauf und steuert den Wiederholungsplan.

Diese Aufgabenteilung erleichtert auch Korrekturen. Findest du später einen Fehler in der Quelle oder gefällt dir die Formulierung nicht mehr, ändere oder lösche die gespeicherte Karte. Lass keine fragwürdige Antwort im Stapel, nur weil ihre Erstellung Zeit gekostet hat.

## Eine abschließende Checkliste

Bevor du die ChatGPT-Ausgabe in eine Karteikarten-App übernimmst, prüfe diese Punkte:

- Jede Antwort hat eine von dir geprüfte Quelle.
- Jede Vorderseite fragt einen klar erkennbaren Lerninhalt ab.
- Notwendiger Kontext und wichtige Einschränkungen sind beim Umformulieren erhalten geblieben.
- Keine Karte setzt voraus, dass der Quellabsatz sichtbar ist.
- Duplikate und unwichtige Details wurden entfernt.
- Das Üben vollständiger Aufgaben bleibt Teil deines Lernplans.
- Die endgültige Ausgabe enthält nur genehmigte Karten.
- Geplante Wiederholungen finden in einer Karteikarten-App statt, nicht im Chatverlauf.

Der zuverlässigste Weg, **Karteikarten mit ChatGPT zu erstellen**, ist etwas weniger automatisch, als der Begriff „KI-Karteikarten-Generator“ vermuten lässt. Das ist gut so. Lass ChatGPT Vorschläge zusammentragen und dir wiederholtes Abtippen abnehmen. Prüfe die Quellen selbst, wähle die Karten aus und entscheide auch weiterhin selbst über die Wiederholungen. Dem kleineren Stapel, der diese Prüfung besteht, kannst du deutlich leichter vertrauen, wenn die Karten später wieder auftauchen.
