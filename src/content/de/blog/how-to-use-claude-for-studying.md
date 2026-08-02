---
title: "Claude zum Lernen nutzen: Vom Tutor-Chat zu gezielten Flashcards (2026)"
description: "So lernst du mit Claude als Tutor, erkennst echte Schwachstellen, speicherst ausgewählte Karten per MCP und wiederholst sie in Flashcards mit FSRS."
date: "2026-05-28"
image: "/blog/how-to-use-claude-for-studying.png"
keywords:
  - "Claude zum Lernen nutzen"
  - "mit Claude lernen"
  - "Lernen mit Claude"
  - "Claude Lernworkflow"
  - "Claude als Tutor"
  - "Claude MCP Flashcards"
  - "Claude Custom Connector Flashcards"
  - "Claude Code Flashcards"
  - "Claude Learning Mode"
---

Du hast die Meiose schon zweimal erklärt, doch Claude erwischt dich schon wieder dabei, sie mit der Mitose zu verwechseln. Gut so. Dieser Fehler ist wertvoller als noch eine makellose Zusammenfassung.

Am besten nutzt du **Claude zum Lernen**, indem du solche Momente in einen kurzen Ablauf verwandelst: Lass dich von Claude abfragen, wähle die Schwachstellen aus, die du dir wirklich merken willst, speichere ein paar gezielte Karten und wiederhole sie später in Flashcards. Claude übernimmt das Gespräch. Flashcards bewahrt die Karten auf und plant mit FSRS, wann sie wieder fällig sind.

Mit dem Flashcards-MCP-Connector gelangt eine Karte direkt aus dem Gespräch in dein Deck, ohne dass du sie kopieren und einfügen musst. MCP ist einfach eine Verbindung, über die Claude freigegebene Funktionen einer anderen App nutzen kann. Lege fest, dass Claude Schreibaktionen erst nach deiner Freigabe ausführen darf. So fragt Claude nach, bevor es deine Karten verändert.

![Warmer Schreibtisch beim Lernen mit Claude: Notizen werden in Flashcards zu Karten für gezielte Schwachstellen](/blog/how-to-use-claude-for-studying.png)

## Der Claude-Lernworkflow, den ich wirklich nutzen würde

Ein flüssiges Gespräch kann ein trügerisches Gefühl erzeugen: Solange die Erklärung auf dem Bildschirm steht, scheint alles klar. Zehn Minuten später sind die Details verschwunden.

Stattdessen nutze ich diesen Ablauf:

1. Gib Claude ein eng eingegrenztes Thema und das nötige Ausgangsmaterial.
2. Bitte immer nur um eine Frage auf einmal.
3. Antworte aus dem Gedächtnis, bevor du eine Erklärung liest.
4. Markiere Fehler, langsame Antworten und Ideen, die du immer wieder verwechselst.
5. Wähle einige dieser Schwachstellen aus und prüfe die Kartenentwürfe.
6. Gib nur die gewünschten Karten frei und wiederhole sie später in Flashcards.

Claude könnte dich zum Beispiel fragen, was sich während der Anaphase I der Meiose trennt. Du antwortest: „Schwesterchromatiden.“ Claude weist darauf hin, dass sich zuerst die homologen Chromosomen trennen, und bittet dich, den Unterschied noch einmal zu erklären. Genau diese Verwechslung verdient eine Karte. Die drei Absätze, mit denen Claude dich zur Antwort geführt hat, wahrscheinlich nicht.

So basiert dein Deck auf echten Problemen beim Abrufen. Du speicherst, was beim Üben nicht funktioniert hat – nicht alles, was im Chat vorkam.

## Lass dich zuerst von Claude unterrichten

[Anthropics Learning Mode](https://www.anthropic.com/news/introducing-claude-for-education) führt Lernende mit Fragen durch den Stoff, anstatt die Antwort sofort vorwegzunehmen. Wenn der Modus für dein Claude-Konto verfügbar ist, passt er gut zu diesem Ablauf.

Ein normaler Claude-Chat funktioniert ebenfalls. Beginne zum Beispiel mit diesem Prompt:

```text
Bring mir dieses Thema wie ein Tutor bei. Stell immer nur eine Frage und warte
auf meine Antwort. Verrate die vollständige Lösung nicht zu früh. Wenn ich einen
Fehler mache, sag mir genau, was ich übersehen habe, und lass mich einen zweiten
Versuch machen, bevor du es erklärst. Führe eine kurze Liste meiner echten
Schwachstellen, aber erstelle noch keine Flashcards.
```

Füge das Material hinzu, das du gerade lernst: Vorlesungsnotizen, einen kurzen Text, korrigierte Übungsaufgaben oder einige Folien. Ich würde jede Sitzung auf ein Kapitel oder einen eng zusammenhängenden Themenblock begrenzen. So kannst du Claudes Erklärungen leichter überprüfen, und die fertigen Karten sind später auch ohne den Chat verständlich.

Für einen fortlaufenden Kurs kann ein Claude Project Chats, Ausgangsmaterial und Anweisungen an einem Ort zusammenhalten. Wie das funktioniert, erklärt Anthropics [Anleitung zu Projects](https://support.claude.com/en/articles/9517075-what-are-projects). Wenn du mit einem langen Dokument beginnst, beschreibt der [Workflow von PDF zu Flashcards](/de/blog/how-to-turn-a-pdf-into-flashcards/) diesen Schritt genauer.

## Speichere die Schwachstellen, nicht den ganzen Chat

Bitte Claude nach zehn bis fünfzehn Minuten, dir seine Notizen aus der Fragerunde zu zeigen:

```text
Zeige mir die Schwachstellen aus dieser Sitzung. Nimm nur Inhalte auf, die ich
nicht beantworten konnte, bei denen ich lange gebraucht habe oder die ich
mehrmals verwechselt habe. Erkläre jeweils in einem Satz, warum daraus eine
Flashcard werden sollte. Speichere noch nichts.
```

Die besten Kandidaten sind meistens klein:

- eine Definition, die dir nicht eingefallen ist
- zwei ähnliche Ideen, die du vertauscht hast
- ein Schritt, den du immer wieder übersprungen hast
- eine Formel, die du kanntest, aber falsch angesetzt hast
- eine Ausnahme, durch die sich die Antwort geändert hat

Lass Aufwärmfragen, mühelos beantwortete Fakten und weit gefasste Fragen wie „Erkläre die Zellatmung“ weg. FSRS kann eine Karte effizient einplanen, aber es kann eine unnötige Karte nicht wertvoll machen.

## Verwandle deine ausgewählten Schwachstellen in Flashcards

Sobald der Flashcards-Connector aktiviert ist, wählst du die Kandidaten selbst aus und bittest Claude um Kartenentwürfe:

```text
Erstelle in Flashcards Karten zu den Schwachstellen 2, 4 und 5.

Jede Karte soll genau einen Lerninhalt abfragen. Formuliere jede Vorderseite
eindeutig und jede Rückseite kurz. Verwende nur Fakten, die durch das Material
in diesem Gespräch belegt sind. Zeige mir vor dem Speichern die vorgeschlagenen
Vorderseiten, Rückseiten und das Deck, in dem sie gespeichert werden sollen.
Erstelle die Karten nach meiner Freigabe über den Flashcards-Connector und zeige
mir die gespeicherten Karten anschließend noch einmal.
```

In der Vorschau fallen vage Fragen, zu lange Antworten und plausibel klingende Fehler auf, bevor sie in deinem Deck landen. Eine gute Karte sollte auch morgen noch verständlich sein, wenn der Claude-Chat nicht mehr geöffnet ist.

Weitere Beispiele findest du in [So erstellst du bessere Flashcards](/de/blog/how-to-make-better-flashcards/). Wenn nach jeder Sitzung plötzlich fünfzig Karten „unverzichtbar“ sind, hilft dir [So vermeidest du zu viele KI-Flashcards](/de/blog/how-to-avoid-ai-flashcard-overload/) mehr als ein längerer Prompt.

## Verbinde Claude im Browser mit Flashcards

Für die meisten Lernenden ist Claude im Browser der einfachste Einstieg. Füge Flashcards mit dieser URL als Custom Connector hinzu:

```text
https://mcp.flashcards-open-source-app.com/mcp
```

Öffne in Claude die Connector-Einstellungen, wähle **Add custom connector**, füge die URL ein und stelle die Verbindung her. In einem Browserfenster meldest du dich bei Flashcards an und genehmigst den Zugriff über OAuth. Du musst keinen API-Key in Claude einfügen. Aktiviere den Connector danach in dem Chat, in dem du lernen möchtest.

Anthropics [Anleitung für Custom Connectors](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp) zeigt den aktuellen Weg durch das Menü. Wenn deine Schule oder Hochschule einen Team- oder Enterprise-Workspace verwaltet, muss möglicherweise zuerst ein Owner den Connector hinzufügen.

Die [Schritt-für-Schritt-Anleitung zum Flashcards-MCP-Connector](/de/blog/how-to-connect-flashcards-to-claude-with-mcp/) zeigt die einzelnen Ansichten und das Anlegen einer ersten Testkarte. Nutze diese Anleitung, wenn du den Connector jetzt einrichtest. Im Rest dieses Artikels geht es weiter um den Lernablauf.

## Claude Code wird separat über MCP eingerichtet

Claude Code ist praktisch, wenn dein Lernmaterial bereits in einem Ordner mit Markdown-Notizen, Code oder technischer Dokumentation liegt. Füge denselben Flashcards-MCP-Server über das Terminal hinzu:

```bash
claude mcp add --transport http flashcards https://mcp.flashcards-open-source-app.com/mcp
```

Führe anschließend `/mcp` in Claude Code aus, wähle den Flashcards-Server und schließe die OAuth-Anmeldung im Browser ab. Anthropic beschreibt den Ablauf unter [Claude Code über MCP mit Tools verbinden](https://code.claude.com/docs/en/mcp).

Wenn du den Connector in Claude im Browser hinzufügst, ist Claude Code auf deinem Computer dadurch noch nicht eingerichtet. Beide greifen auf denselben Flashcards-Endpunkt zu, werden aber getrennt eingerichtet und speichern ihre eigenen Zugangsdaten.

Für einen Rechner ohne grafische Oberfläche oder eine automatisierte Terminalsitzung, in der eine Browser-Anmeldung nicht praktikabel ist, akzeptiert Flashcards außerdem einen langlebigen `fca_`-Agent-API-Key als Bearer-Token:

```bash
claude mcp add --transport http \
  flashcards https://mcp.flashcards-open-source-app.com/mcp \
  --header "Authorization: Bearer ${FLASHCARDS_MCP_TOKEN}"
```

Setze die Umgebungsvariable `FLASHCARDS_MCP_TOKEN` über die Konfiguration deiner Umgebung oder einen Dienst für Zugangsdaten (Secret Manager). Behandle den Schlüssel wie ein Passwort: Er gehört weder in Prompts und Screenshots noch in den Shell-Verlauf oder die Versionsverwaltung. Wie du einen Agent-API-Key erhältst, erklärt die [API-Referenz](/de/docs/api/). Nutze für eine normale interaktive Sitzung OAuth.

## Prüfe, was Claude lesen und verändern darf

Der Connector stellt drei Tools bereit. Du musst kein SQL verstehen, um sie zu nutzen. Den Unterschied zwischen Lese- und Schreibzugriff solltest du jedoch kennen:

| Tool | Funktion | Verändert Daten? |
| --- | --- | --- |
| `list_workspaces` | Zeigt die Flashcards-Workspaces, auf die dein Konto zugreifen darf | Nein |
| `sql_query` | Liest erlaubte Workspace-, Karten-, Deck- und Wiederholungsdaten | Nein |
| `sql_execute` | Erstellt, bearbeitet, verschiebt oder löscht Karten und Decks | Ja |

Die ersten beiden Tools haben nur Lesezugriff. Nur `sql_execute` kann Daten verändern. In Claude im Browser setze ich `sql_execute` auf **Needs approval** und prüfe vor jeder Freigabe den Workspace, die betroffenen Karten und Decks sowie die vorgeschlagenen Änderungen. Bei weitreichenden Löschanfragen lohnt sich besondere Vorsicht.

Der Server begrenzt diese Tools auf den Workspace, für den du den Zugriff genehmigt hast, und auf die unterstützten Flashcards-Daten. Claude kann darüber nicht uneingeschränkt auf die zugrunde liegende Datenbank zugreifen. Die [Flashcards-MCP-Dokumentation](/de/docs/mcp-connector/) enthält die aktuellen Angaben zur Authentifizierung und die Tool-Schnittstellen.

Ein Detail übersieht man leicht: Flashcards autorisiert den Connector derzeit als Ganzes. Es gibt keine getrennten OAuth-Berechtigungen für Lese- und Schreibzugriff. Ob Claude vor Schreibaktionen nachfragen muss oder das Schreib-Tool blockiert ist, stellst du auf Claudes Seite ein. Der Flashcards-Server stellt unabhängig davon sicher, dass seine beiden Lese-Tools keine Daten verändern können.

Wenn Claude über die Tools Kartentexte abruft, können diese zur Verarbeitung an den Dienst gesendet werden. Verbinde kein Lernmaterial, das du nicht mit Claude teilen darfst. [Ist MCP für Flashcards sicher?](/de/blog/is-mcp-safe-for-flashcards/) erklärt den Datenweg, die Risiken von Schreibzugriffen, Sicherungen und die Grenzen beim Löschen.

## Claude kann auch Karten und Decks aufräumen

Der Connector bleibt nützlich, nachdem die erste Karte gespeichert wurde. Claude kann die Karten- und Deckdaten lesen, für die du Zugriff freigegeben hast. Nach deiner Freigabe für den Schreibzugriff kann es Karten und Decks außerdem erstellen, bearbeiten, verschieben, neu ordnen oder löschen.

Du könntest zum Beispiel fragen:

```text
Zeige mir in meinem Deck Zellbiologie die Karten zur Mitose. Bearbeite nichts.
Markiere Duplikate und Karten, die mehr als eine Idee abfragen.
```

Wähle anschließend die gewünschten Änderungen aus:

```text
Verschiebe die drei von mir freigegebenen Karten in das Deck Zellteilung. Zeige
sie mir nach dem Verschieben noch einmal, damit ich das Ergebnis prüfen kann.
```

Bitte Claude bei einer Überarbeitung, die neue Vorder- und Rückseite vor dem Aktualisieren der Karte zu zeigen. Beginne eine größere Aufräumaktion mit einer reinen Leseprüfung und erteile Freigaben nur für eine kleine, exakt benannte Auswahl von Karten oder Decks. So lassen sich Fehler leichter entdecken, bevor sie sich im Deck ausbreiten.

## Die eigentliche FSRS-Wiederholung findet in Flashcards statt

Claude kann freigegebene Karten- und Wiederholungsdaten lesen. Über diesen Connector kann es jedoch keine offizielle Wiederholung erfassen. Es kann weder Again, Hard, Good oder Easy für dich auswählen noch den FSRS-Zeitplan aktualisieren. Schreibzugriffe auf den Wiederholungsverlauf und die Planungsdaten sind nicht möglich.

Nachdem Claude die Karten erstellt hat, öffnest du für die Wiederholung die [Flashcards-Web-App](https://app.flashcards-open-source-app.com/) oder eine der mobilen Apps. Dort werden deine Bewertungen gespeichert, und FSRS entscheidet anhand dieser Angaben, wann jede Karte wieder fällig ist.

Du kannst Claude weiterhin bitten, dich im Gespräch mit einer kleinen Auswahl von Karten abzufragen. Die Anleitung zum [KI-Tutor für Karteikarten](/de/blog/ai-flashcard-tutor-due-cards/) zeigt diesen Ablauf. Schließe die geplante Wiederholung danach in Flashcards ab und bewerte die Karten dort, damit dein Lernfortschritt korrekt bleibt.

## Kopiere die Karten auf Wunsch von Hand

Vielleicht möchtest du Claude keinen Zugriff auf deine gespeicherten Decks geben, besonders bei vertraulichem Material. Die Lernmethode funktioniert auch ohne Connector.

Bitte Claude um Kartenkandidaten als einfachen Text:

```text
Verwandle nur die ausgewählten Schwachstellen in Flashcards mit Vorder- und
Rückseite. Prüfe pro Karte genau einen Lerninhalt ab. Formuliere die Vorderseite
eindeutig und die Rückseite kurz. Erfinde keine Fakten. Setze jede Karte in einen
eigenen Block, damit ich sie prüfen und von Hand kopieren kann.
```

Streiche in Claudes Entwurf die schwachen Kandidaten und kopiere nur die übrigen selbst in Flashcards. Das ist ein kleiner zusätzlicher Schritt, dafür behältst du vollständig unter Kontrolle, was das Gespräch verlässt und was in dein Deck gelangt.

## Eine gute Lernsitzung mit Claude darf klein bleiben

Du brauchst keinen einzigen riesigen Prompt, der ein ganzes Semester in 800 Karten verwandelt. Ein besserer **Claude-Lernworkflow** passt direkt nach einer Vorlesung oder einem Übungssatz: Beantworte einige Fragen, finde die Stellen, an denen dein Abruf stockt, speichere drei oder vier nützliche Karten und mach weiter.

So nutze ich Claude zum Lernen: Ich kläre Verwechslungen, solange sie noch frisch sind. Danach zeigt mir Flashcards die passende Frage erneut – lange nachdem der Chat geschlossen wurde. Durch diese kleine Übergabe wird aus einem hilfreichen Gespräch etwas, an das du dich vielleicht auch nächsten Monat noch erinnerst.
