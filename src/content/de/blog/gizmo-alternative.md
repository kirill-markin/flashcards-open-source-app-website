---
title: "Gizmo-Alternative 2026: Gizmo oder Flashcards?"
description: "Gizmo und Flashcards im Vergleich: Magic Import, AI Tutor, kontrollierte Kartenerstellung, FSRS-6, Offline-Lernen, Wiederholungsmodi, Gamification und Datenübertragung."
date: "2026-08-03"
image: "/blog/gizmo-alternative.png"
keywords:
  - "gizmo alternative"
  - "gizmo alternativen"
  - "gizmo oder flashcards"
  - "open source gizmo alternative"
  - "KI lernkarten app"
  - "FSRS lernkarten app"
  - "offline lernkarten app"
  - "Magic Import alternative"
  - "Gizmo KI alternative"
---

Gizmo kann aus einer Vorlesung, die du direkt in der App aufzeichnest, eine AI-Tutor-Lektion erstellen. PowerPoint-Dateien verwandelt es in Karten, und XP, Level, Ligen und Streaks machen aus den Wiederholungen ein Spiel. Flashcards ist bewusst schlichter: Du erstellst eine kleinere Auswahl geprüfter Karten mit Vorder- und Rückseite, deren Wiederholungen anschließend FSRS-6 plant. Das ist der wichtigste Unterschied für alle, die nach einer **Gizmo-Alternative** suchen.

Wenn du Gizmos spielerische, KI-gestützte Lernumgebung möchtest, ist Flashcards kein direkter Ersatz. Vielleicht passt Flashcards besser, wenn du genauer kontrollieren willst, was die KI speichert, einen dokumentierten FSRS-6-Scheduler suchst und Kartenänderungen sowie Wiederholungen zuerst lokal speichern möchtest, bevor sie synchronisiert werden.

> **Offenlegung:** Ich bin Kirill Markin und entwickle [Flashcards](https://flashcards-open-source-app.com/), eines der hier verglichenen Produkte. Bei umfangreichen Quellenimporten, AI-Tutor-Lektionen, abwechslungsreichen generierten Quizzen, Live-Spielen, Belohnungen und Funktionen für gemeinsames Lernen ist Gizmo besser aufgestellt.

**Stand der Angaben:** 3. August 2026.

![Gizmo-Alternative im Vergleich: KI-gestützte Kartenerstellung, spielerisches Lernen, FSRS-6 und Offline-Wiederholungen](/blog/gizmo-alternative.png)

## Kurz gesagt

- Wähle **Gizmo**, wenn du viele Arten von Quellmaterial importieren, automatisch Karten erstellen sowie AI-Tutor-Lektionen und Quizze nutzen möchtest – alles eingebettet in einen spielerischen Wiederholungsablauf. Der Lektionen-Import akzeptiert außerdem YouTube-Videos und vorhandene Gizmo-Decks.
- Wähle **Flashcards**, wenn du eine fokussierte Sammlung aus Karten mit Vorder- und Rückseite suchst. Im KI-Chat kannst du die Karteninhalte vor dem Speichern prüfen; dazu kommen dokumentiertes FSRS-6 und die Offline-first-Speicherung von Kartenänderungen und Wiederholungen.
- Nutze **beide**, wenn Gizmo dir hilft, umfangreiches Quellmaterial zu erschließen, und Flashcards die kleinere Auswahl geprüfter Fakten verwaltet, die du langfristig behalten möchtest.

Die Kombination beider Apps bleibt Handarbeit. Gizmo gibt derzeit an, dass Karten und Decks nicht exportiert werden können, und Flashcards besitzt keinen Gizmo-Importer. Eine automatische oder verlustfreie Migration zwischen den beiden Produkten gibt es nicht.

## Gizmo vs Flashcards auf einen Blick

| Frage | Gizmo | Flashcards |
|---|---|---|
| Am besten geeignet für | Spielerische, KI-gestützte Umwandlung von Quellmaterial in Karten, Tutor-Lektionen, Quizze und Spiele | Kontrollierte Erstellung von Karten mit Vorder- und Rückseite und anschließende, transparente Wiederholungsplanung mit FSRS-6 |
| Startpunkt der KI-Funktionen | Magic Import oder AI Tutor über Home oder ein Deck | KI-Chat mit Workspace-Kontext, der sich auch aus einer vorhandenen Karte oder einer Wiederholung öffnen lässt |
| Unterstützte Quellformate | Magic Import für Karten: PDF, Vorlesungsaufzeichnung in der App, eingefügte Notizen, Fotos, PowerPoint, Quizlet, Anki, Tabellen und Websites. Beim Import einer AI-Tutor-Lektion werden zusätzlich YouTube und vorhandene Gizmo-Decks unterstützt | Anhänge als PDF, Text-, Daten-, Dokument-, Code-, Tabellen- und Bilddateien; kein nativer Import von PowerPoint, Audio, Video, YouTube, Websites oder Anki-Paketen |
| Kartenerstellung | Magic Import erstellt automatisch Karten und legt die grünen Markierungen fest; AI Tutor kann ebenfalls Karten erzeugen | Die KI kündigt geplante Änderungen an, sucht nach ähnlichen Inhalten und kann Karten nach der passenden Freigabe im Chat erstellen, aktualisieren oder löschen |
| Wiederholung | Memorise blendet markierte Wörter schrittweise aus und verwendet Multiple-Choice-Fragen oder Texteingaben | Vorderseite ansehen, Rückseite aufdecken und die eigene Erinnerung anschließend mit Again, Hard, Good oder Easy bewerten |
| Planung | Automatische Spaced Repetition; die hier geprüfte offizielle Dokumentation bezeichnet den Algorithmus nicht als FSRS | Dokumentiertes FSRS-6 mit Vorschau auf das nächste Intervall |
| Lernen rund um die Karten | AI-Tutor-Kurse, Notes, Lessons, KI-Quizze, Hearts, Hints, XP, Level, Ligen, Streaks und Gizmo Live | Kein vergleichbares System für Spiele, Live-Runden, Lektionen, Belohnungen oder erzeugte Quizze |
| Offline-Dokumentation | Die geprüften offiziellen Seiten dokumentieren keine Offline-first-Garantie dafür, dass Schreibvorgänge zuerst lokal gespeichert werden | Karten, Änderungen und Wiederholungen werden im Web in IndexedDB oder mobil in SQLite lokal gespeichert und nach der erneuten Verbindung synchronisiert |
| Export | Laut Gizmo ist der Export von Karten und Decks derzeit nicht verfügbar | Eine Workspace-ZIP überträgt Karten, Tags und zugehörige Medien, allerdings mit wichtigen Einschränkungen |
| Quellcode und Hosting | Die geprüften offiziellen Seiten beschreiben weder ein Open-Source-Angebot noch einen Weg zum Self-Hosting | MIT-lizenzierter Code mit einem Produktions-Deployment über AWS CDK |

Beide Produkte überschneiden sich bei der Aussage „KI kann beim Erstellen von Lernkarten helfen“. Was davor und danach passiert, unterscheidet sich jedoch deutlich.

## Gizmo beginnt mit der automatischen Umwandlung

Der schnellste Weg zu neuen Karten führt bei Gizmo über Magic Import. Der [offizielle Leitfaden zu Magic Import](https://help.gizmo.ai/en/articles/15647624-what-is-magic-import) nennt PDFs, eine Vorlesungsaufzeichnung in der App, eingefügte Notizen, Fotos, PowerPoint-Dateien, Quizlet, Anki, Tabellen und Websites als mögliche Quellen. Gizmo verarbeitet das Material, erstellt automatisch Karten und markiert die Wörter grün, die in Memorise abgefragt werden.

Diese Bandbreite hilft, wenn das Quellmaterial die eigentliche Hürde ist. Lernende können direkt mit einem Foliensatz oder einer Vorlesung beginnen, statt das Material zunächst in ein unterstütztes Text- oder Bildformat umzuwandeln. Gizmo empfiehlt selbst, das importierte Deck trotzdem zu prüfen. Die automatische Umwandlung spart Vorbereitungszeit, garantiert aber nicht, dass jede erzeugte Karte korrekt oder lernenswert ist.

Der separate Importweg für AI-Tutor-Lektionen unterstützt PDF, PowerPoint, YouTube, Notizen, Fotos, eine aufgezeichnete Vorlesung, Quizlet und ein vorhandenes Gizmo-Deck. So beschreibt es der [offizielle Leitfaden zum Import von Lektionen](https://help.gizmo.ai/en/articles/15935404-how-do-i-use-magic-import-to-start-an-ai-tutor-lesson). YouTube und vorhandene Gizmo-Decks sind dort als Quellen für Lektionen dokumentiert, nicht in der oben genannten Magic-Import-Liste zur automatischen Kartenerstellung.

Flashcards bietet für diese breite Quellenliste kein natives Gegenstück zu Magic Import. PowerPoint, Audio, Video, eine YouTube- oder Website-URL sowie ein Anki-Paket lassen sich nicht direkt importieren. Beginnt dein Lernablauf mit einer PowerPoint-Datei, einer Vorlesungsaufzeichnung, einer YouTube-Lektion, einer Website oder einem Anki-Deck – also mit den oben dokumentierten Gizmo-Wegen –, nimmt dir Gizmo mehr Vorbereitungsarbeit ab.

## AI Tutor geht über das Entwerfen von Karten hinaus

Gizmos AI Tutor ist eine eigene Lernumgebung. Laut der [Dokumentation zu AI Tutor](https://help.gizmo.ai/en/articles/13011417-how-does-the-ai-tutor-work) kannst du ihn über Home oder aus einem Deck heraus starten. Er kann einen Course beginnen und Lernkarten, Notes, Lessons sowie KI-generierte Quizze erstellen.

Das ist nützlich, wenn du noch nicht weißt, wie sich ein Thema in verschiedene Lernaktivitäten aufteilen lässt. Du kannst um eine Erklärung bitten, eine Lektion durcharbeiten, Karten erzeugen und ein Quiz nutzen, ohne den Tutor-Workflow zu verlassen.

Zum Stand der Angaben dieses Artikels galten im kostenlosen Tarif zwei relevante Grenzen. Zwischen zwei Magic-Import-Vorgängen mussten Nutzer 20 Minuten warten, wie der [Leitfaden zu Magic Import](https://help.gizmo.ai/en/articles/15647624-what-is-magic-import) dokumentiert. Außerdem nannte Gizmo [fünf kostenlose AI-Tutor-Sitzungen pro Tag](https://help.gizmo.ai/en/articles/15869958-how-many-ai-tutor-sessions-can-i-have-for-free). Gizmo Unlimited hebt diese Begrenzung für den Tutor auf. Das sind Nutzungsgrenzen, keine Preise. Tarifdetails können sich ändern; prüfe deshalb die offiziellen Seiten, wenn eine bestimmte Grenze deine Entscheidung beeinflusst.

Der KI-Chat von Flashcards bietet keine Courses, Notes oder Lessons nach Gizmo-Vorbild und auch keinen nativen Modus für generierte Quizze. Seine Aufgabe ist enger gefasst: Er hilft dabei, den Karten-Workspace zu prüfen und zu pflegen.

## Was kontrollierte KI-Kartenerstellung bei Flashcards bedeutet

Der KI-Chat von Flashcards akzeptiert folgende Gruppen von Anhängen:

- PDF;
- TXT, LOG und SQL;
- CSV, JSON, XML, Markdown und HTML;
- Python, JavaScript, TypeScript und YAML;
- XLS- und XLSX-Tabellen;
- DOCX-Dokumente; und
- GIF-, JPEG-, PNG- und WebP-Bilder.

Jeder Anhang darf bis zu 3 MB groß sein; die gesamte Anfrage an die KI ist auf 5 MB begrenzt. Der KI-Chat benötigt eine Netzwerkverbindung.

Der Chat kennt den aktuellen Workspace. Über ein eingeschränktes SQL-Werkzeug kann er Karten, Decks und Wiederholungsereignisse prüfen und anschließend Karten erstellen, aktualisieren oder löschen. Bevor er neue Karten vorschlägt oder speichert, sucht er nach ähnlichen Inhalten und weist auf mögliche Duplikate hin. Außerdem beschreibt er genau, welche Änderungen er vornehmen möchte.

Die Freigabe erfolgt direkt im Chat. Nachdem der Assistent die genauen Änderungen angekündigt hat, kann er einen konkreten Auftrag mit geringem Risiko ausführen, etwa: „Erstelle diese drei Karten in meinem Biologie-Deck.“ Einen weitreichenden oder unklaren Schreibauftrag musst du bestätigen.

Es gibt keinen separaten Freigabebildschirm für vorbereitete Entwürfe. Wenn du mehr Kontrolle möchtest, bitte zuerst um Kartenentwürfe oder einen Plan. Prüfe im Chat die vorgeschlagenen Vorderseiten, Rückseiten und Tags, fordere Änderungen an und bitte die KI anschließend ausdrücklich, die Karten zu speichern. Neue von der KI vorgeschlagene Karten benötigen Tags. Die Vorderseite sollte eine Frage oder einen Abrufhinweis enthalten, der die Antwort nicht verrät. Die Rückseite beginnt mit der direkten Antwort und kann bei Bedarf Markdown oder Beispiele enthalten.

Nach dem Speichern kannst du die Karten vor der Wiederholung im Cards-Bereich prüfen, bearbeiten oder löschen. Jede Karte lässt sich auch ohne KI manuell erstellen. Der zusätzliche Prüfschritt ist Absicht: Die KI hilft beim ersten Entwurf, aber du entscheidest, was in die Wiederholungswarteschlange gelangt. [So verbesserst du schwache KI-Lernkarten](/blog/how-to-fix-ai-flashcards/) erklärt, warum diese Kontrolle wichtig ist.

## Die Wiederholungsabläufe sind nicht austauschbar

Gizmos [Überblick zur Funktionsweise des Produkts](https://help.gizmo.ai/en/articles/14472668-how-does-gizmo-work) verbindet Magic Import, Memorise, AI Tutor und das Fortschrittssystem. In Memorise fragt Gizmo die grün markierten Wörter ab. Der [Leitfaden zu Markierungen](https://help.gizmo.ai/en/articles/13166301-how-does-highlighting-work) erklärt, dass diese Wörter schrittweise ausgeblendet und per Multiple Choice oder Texteingabe abgefragt werden.

Gizmo setzt außerdem Spaced Repetition ein. Laut der [Erklärung zu Spaced Repetition](https://help.gizmo.ai/en/articles/15647638-what-is-spaced-repetition) kehren richtig beantwortete Fragen später und falsch beantwortete früher zurück; die Zeitpunkte legt Gizmo automatisch fest. Die für diesen Artikel geprüfte offizielle Dokumentation nennt Gizmos Scheduler nicht FSRS. Diese Dokumentationslücke ist kein Beleg dafür oder dagegen, dass die interne Implementierung FSRS verwendet.

Flashcards nutzt einen einfacheren Abrufprozess. Bei einer fälligen oder neuen Karte siehst du zuerst die Vorderseite. Du deckst die Rückseite auf, beurteilst deine Erinnerungsleistung und wählst Again, Hard, Good oder Easy. Jede Schaltfläche zeigt eine Vorschau auf das nächste Intervall. Danach aktualisiert FSRS-6 den Gedächtniszustand der Karte und den nächsten Fälligkeitstermin. Einzelheiten zum Scheduler findest du im Artikel [FSRS vs SM-2](/blog/fsrs-vs-sm-2/).

Während einer Wiederholung in Flashcards kannst du eine Karte bearbeiten. Nach dem Aufdecken der Antwort lässt sich die Karte außerdem für eine ausführlichere Überarbeitung oder Diskussion an den KI-Chat übergeben. In Gizmo kannst du Vorderseite, Rückseite, Fotos, Listen und Multiple-Choice-Optionen außerhalb eines Quiz bearbeiten. Der [Leitfaden zur Kartenverwaltung](https://help.gizmo.ai/en/articles/13761411-how-do-i-edit-or-manage-my-cards) sagt jedoch, dass sich eine Karte während einer Memorise-Runde nur löschen, nicht bearbeiten lässt.

Flashcards erzeugt keine nativen Multiple-Choice-Fragen und bewertet keine eingegebenen Antworten. Auch ein KI-Quiz oder eine Tutor-Lektion nach dem Vorbild von Gizmo gehören nicht dazu. [Lernkarten und Übungstests trainieren unterschiedliche Fähigkeiten](/blog/flashcards-vs-practice-tests/). Wer sich auf eine Prüfung vorbereitet, kann deshalb sowohl Abrufkarten als auch abwechslungsreiche Übungen sinnvoll finden.

## Gizmos spielerische Ebene ist ein echter Produktunterschied

Gizmo ist darauf ausgelegt, Lernen wie ein Spiel wirken zu lassen. Der Produktüberblick dokumentiert XP, Level, Ligen und Streaks. In Memorise kostet jede falsche Antwort ein Heart. Sind alle Hearts verbraucht, pausiert das Quiz, bis sie sich wieder auffüllen. [Hints](https://help.gizmo.ai/en/articles/15504721-what-are-hints) können den ersten Buchstaben aufdecken oder bei Multiple Choice eine falsche Antwort entfernen. Nutzer können sie mit Coins kaufen, die sie beim Quizzen verdienen. Die genauen Grenzen der kostenlosen Version und von Unlimited können sich ändern. In der [Dokumentation zu Hearts](https://help.gizmo.ai/en/articles/15623061-what-are-hearts) findest du die aktuellen Regeln.

Gizmo Live geht noch weiter. Der [offizielle Leitfaden zu Live](https://help.gizmo.ai/en/articles/15945296-what-happens-during-a-gizmo-live-game) beschreibt zeitlich begrenzte Mehrspielerrunden, XP, eine Bestenliste, Wetten und eine gemeinsame Auswertung der Antworten. Dadurch kann sich das Lernen im Unterricht oder in einer Gruppe deutlich anders anfühlen als das Abarbeiten einer einzelnen Lernkarten-Warteschlange.

Flashcards hat weder einen nativen Live-Mehrspielermodus noch Hearts, Hints, XP, Coins, Level, Ligen, Streaks, Wetten oder ein vergleichbares Spielsystem. Auch Gizmos Community-Funktionen und Angebote zum gemeinsamen Lernen werden nicht ersetzt. Wenn dir solche Mechaniken helfen, jeden Tag weiterzulernen, verschwinden sie bei einem Wechsel zu Flashcards, statt dort nachgebildet zu werden.

## Offline-first hat eine klar definierte Grenze

Die für diesen Artikel geprüften offiziellen Webseiten und Hilfeseiten von Gizmo geben keine Offline-first-Garantie dafür, dass Schreibvorgänge zuerst lokal gespeichert werden. Das bedeutet ausdrücklich nicht, dass Gizmo grundsätzlich nicht offline funktionieren kann. Die geprüfte Dokumentation verspricht lediglich nicht dasselbe Speicher- und Synchronisierungsverhalten, das Flashcards dokumentiert.

Flashcards schreibt Karten, Änderungen und Wiederholungen lokal. Die Web-App verwendet IndexedDB, die mobilen Apps SQLite. Änderungen gelangen in eine Outbox und werden synchronisiert, sobald die Verbindung wiederhergestellt ist. Ohne Verbindung kannst du eine Karte manuell erstellen, eine vorhandene Karte korrigieren oder fällige Wiederholungen abschließen.

Die Grenze liegt bei der KI. Der KI-Chat und die KI-Generierung von Flashcards benötigen eine Netzwerkverbindung, auch wenn die gespeicherte Kartensammlung und der Wiederholungsablauf offline funktionieren. Wenn dir zuverlässiges Wiederholen in Zügen, Flugzeugen oder bei schwachem WLAN auf dem Campus wichtig ist, erklärt der [Leitfaden zu Offline-Lernkarten](/blog/best-offline-flashcards-app/) diesen Unterschied ausführlicher.

## Die Migration bleibt manuell und unvollständig

Laut Gizmos Dokumentation zur Kartenverwaltung [ist der Export von Karten und Decks derzeit nicht verfügbar](https://help.gizmo.ai/en/articles/13761411-how-do-i-edit-or-manage-my-cards). Damit entfällt der übliche Weg, eine Datei aus Gizmo zu exportieren und in Flashcards zu importieren.

Die Workspace-ZIP von Flashcards ist ebenfalls kein vollständiges Kontobackup. Sie kann Karten, Tags und zugehörige Medien zwischen Flashcards-Workspaces übertragen. Der Wiederholungsverlauf, FSRS-Zustand, Workspace-Einstellungen, vollständige Deck-Strukturen und Kontodaten sind nicht enthalten.

Zusammen führen diese Einschränkungen dazu, dass es keine automatische oder verlustfreie Migration von Gizmo zu Flashcards gibt. Wenn du wechseln möchtest, beginne mit einer kleinen Auswahl und erstelle nur die Karten neu, die weiterhin nützlich sind. Bewahre den Zugriff auf die ursprünglichen Quellen, prüfe jede Vorder- und Rückseite, ergänze Tags und rechne damit, dass Gizmo-Fortschritt, Tutor-Kontext, Markierungen, Spielstand und Planungsverlauf zurückbleiben.

## Wo Flashcards Gizmo ausdrücklich nicht ersetzt

Flashcards ersetzt folgende Funktionen von Gizmo nicht:

- native Importwege für PowerPoint, Vorlesungsaufzeichnungen, YouTube-Lektionen, Websites, Quizlet oder Anki;
- automatische Markierungen und schrittweises Ausblenden in Memorise;
- Wiederholungen mit Multiple-Choice-Fragen und Texteingaben;
- AI-Tutor-Courses, Notes, Lessons und generierte Quizze;
- Hearts und Hints;
- XP, Coins, Level, Ligen und Streaks;
- Gizmo-Live-Mehrspielerrunden, Bestenlisten, Wetten und zeitlich begrenzte Runden;
- Community-Funktionen und Angebote zum gemeinsamen Lernen.

Das sind aktuelle Produktgrenzen. Der MIT-lizenzierte Quellcode und der Self-Hosting-Weg über AWS CDK bieten bei Flashcards eine andere Art von Kontrolle. Offener Code gleicht jedoch keinen fehlenden Lernmodus aus, wenn gerade dieser Modus dich beim Lernen hält.

## Welche Gizmo-Alternative passt zu deinem Lernworkflow?

Wähle Gizmo, wenn du möglichst schnell von unterschiedlichen Quellmaterialien zu interaktiven Übungen gelangen möchtest. Die nativen Importmöglichkeiten decken mehr der typischen Lernmaterialien von Studierenden ab, AI Tutor kann Inhalte über das Deck hinaus vermitteln und Memorise verbindet automatische Markierungen mit schrittweise anspruchsvolleren Abfragen. Auch die spielerischen und sozialen Funktionen zählen, wenn Belohnungen, Wettbewerb oder gemeinsames Lernen deine Routine unterstützen.

Wähle Flashcards, wenn du bereits weißt, dass du eine Karte mit Vorder- und Rückseite dauerhaft behalten möchtest. Die KI kann den Workspace prüfen, nach Duplikaten suchen, die geplanten Änderungen im Detail zeigen und sie nach der passenden Freigabe im Chat speichern. Anschließend kannst du das Ergebnis prüfen oder bearbeiten und mit dokumentiertem FSRS-6 wiederholen. Die Arbeit an Karten funktioniert offline weiter; für die KI-Funktionen brauchst du eine Verbindung.

Auch die Kombination kann sinnvoll sein. Gizmo kann helfen, eine Vorlesung oder Präsentation aufzuschlüsseln und das Thema auf unterschiedliche Weise abzufragen. Flashcards kann anschließend einen kleineren Bestand geprüfter Abrufhinweise für weitere Wiederholungen verwalten. Kopiere nicht automatisch alles. Ein kurzes Deck mit präzisen Karten ist meist nützlicher als ein großes Deck mit ungeprüften KI-Ergebnissen.

Welche **Gizmo-Alternative** passt, hängt letztlich davon ab, was du rund um die Karte brauchst. Bleibe bei Gizmo, wenn du Magic Import, AI Tutor, abwechslungsreiche Abfragen und spielerische Motivation möchtest. Flashcards ist eine Option für kontrollierte Kartenerstellung, transparentes FSRS-6 und Wiederholungen, die nach dem Offline-first-Prinzip zuerst lokal gespeichert werden. Wenn dieser zweite Workflow besser zu dir passt, sieh dir die [Flashcards-Funktionen](/features/) an oder folge dem [Leitfaden für die ersten Schritte](/docs/getting-started/).
