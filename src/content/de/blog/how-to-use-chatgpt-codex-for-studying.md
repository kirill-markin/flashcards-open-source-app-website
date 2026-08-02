---
title: "ChatGPT und Codex 2026 zum Lernen nutzen: Flashcards mit MCP speichern"
description: "Finde im ChatGPT Study Mode Wissenslücken, speichere ausgewählte Karten mit Codex und Flashcards MCP in der ChatGPT-Desktop-App und wiederhole sie mit FSRS."
date: "2026-08-02"
image: "/blog/how-to-use-chatgpt-codex-for-studying.png"
keywords:
  - "ChatGPT und Codex zum Lernen nutzen"
  - "ChatGPT MCP Flashcards"
  - "Codex Flashcards"
  - "Codex MCP Flashcards"
  - "MCP in der ChatGPT-Desktop-App"
  - "Lernen mit ChatGPT und Codex"
---

Gestern fragte mich ChatGPT, warum eine größere Stichprobe normalerweise zu einem engeren Konfidenzintervall führt. Ich brachte drei überzeugend klingende Sätze zustande und schaffte es irgendwie, das Wort „Standardfehler“ zu vermeiden. Genau diese Lücke wollte ich festhalten. Der Rest unseres Gesprächs über Statistik konnte im Chat bleiben.

Wenn du **ChatGPT und Codex zum Lernen nutzen** willst, würde ich es so machen: Lass ChatGPT eine echte Wissenslücke aufdecken, wähle die Karte selbst aus und lass Codex sie über den Flashcards-MCP-Connector speichern. Die Karte landet in deiner Flashcards-Sammlung, wo FSRS sie dir später wieder vorlegt.

Das ist etwas anderes, als ChatGPT aus einem ganzen Kapitel ein komplettes Deck erstellen zu lassen. Hier wandern nur wenige ausgewählte Wissenslücken aus der Tutor-Sitzung in die langfristige Wiederholung. Der Connector erspart dir das Kopieren und Einfügen. Er entscheidet nicht, was du auswendig lernen solltest.

![Ablauf zum Lernen mit ChatGPT und Codex: Ausgewählte Wissenslücken gelangen über MCP als FSRS-Flashcards in die Wiederholung](/blog/how-to-use-chatgpt-codex-for-studying.png)

## Die sinnvolle Aufteilung: ChatGPT erklärt, Codex speichert, Flashcards plant

Jeder Teil hat eine klar begrenzte Aufgabe:

1. Der **ChatGPT Study Mode** stellt Fragen, gibt Hinweise und hilft dir, den Stoff Schritt für Schritt zu erarbeiten.
2. **Du** entscheidest, welche Fehler du dauerhaft als Karte festhalten willst.
3. **Codex in der ChatGPT-Desktop-App oder in der CLI** erstellt oder überarbeitet die freigegebenen Karten mit Flashcards MCP.
4. **Flashcards** zeichnet deine Wiederholungen auf und plant mit FSRS den nächsten Termin.

OpenAIs aktuelle [Anleitung zum Study Mode](https://help.openai.com/en/articles/11780217-chatgpt-study-mode-faq) beschreibt einen Tutor, der mit dir Schritt für Schritt arbeitet, dich mit jeweils einer Frage abfragt und hochgeladene Notizen, Bilder oder PDFs einbezieht. So findest du heraus, was du noch nicht aus dem Gedächtnis erklären kannst.

Nur der dritte Schritt braucht MCP. Du kannst dir MCP als Brücke vorstellen, über die Codex einige freigegebene Werkzeuge von Flashcards nutzt. Diese Werkzeuge können deine Workspaces auflisten, freigegebene Daten aus Flashcards lesen und nach deiner Zustimmung Karten oder Decks verändern.

## Finde mit ChatGPT zuerst eine echte Wissenslücke

Öffne einen normalen Chat in ChatGPT und aktiviere den Study Mode. Gib in ChatGPT Web `@study` in das Eingabefeld ein und wähle **Study**. Der Modus funktioniert auch in Temporary Chats, aber nicht in GPT- oder Project-Chats. Nimm dir nur wenig Material auf einmal vor: einen Vorlesungsabschnitt, ein paar Seiten Notizen oder die Übungsaufgaben, die du gerade bearbeitet hast.

Ich würde so beginnen:

```text
Bring mir diesen Stoff wie ein Tutor bei. Stell immer nur eine Frage und warte
auf meine Antwort. Gib mir Hinweise, bevor du die vollständige Erklärung nennst.
Notiere die genaue Wissenslücke, wenn ich etwas übersehe oder nur zögerlich
antworte. Erstelle noch keine Flashcards.
```

Antworte, bevor du um Hilfe bittest. Eine flüssige Erklärung wirkt schnell vertraut, obwohl du die Idee fünf Sekunden vorher nicht selbst hättest formulieren können.

Bitte ChatGPT am Ende um eine kurze Liste möglicher Karten:

```text
Zeige nur die Punkte, bei denen ich falschlag, etwas verwechselt habe oder keine
klare Erklärung geben konnte. Schlage für jeden Punkt eine konkrete Vorderseite und
eine kurze Rückseite vor. Nutze nur das Material, das ich bereitgestellt habe.
Speichere noch nichts.
```

Dann triffst du die wichtige Entscheidung selbst. Behalte eine Karte, wenn das Wissen auch über dieses Gespräch hinaus wichtig ist und sich die Antwort eindeutig prüfen lässt. Streiche Aufwärmfragen, Fakten, die du bereits wusstest, weit gefasste Aufgaben wie „Erkläre das Kapitel“ sowie Karten, deren Antwort du nächste Woche nur ungern prüfen würdest.

Für das Statistikbeispiel könnte eine sinnvolle Karte so aussehen:

```text
Vorderseite: Warum führt eine größere Stichprobe meist zu einem engeren Konfidenzintervall?
Rückseite: Dadurch sinkt der Standardfehler und die Schätzung wird präziser.
```

Drei Absätze über Konfidenzintervalle waren beim Lernen hilfreich. Für die Wiederholung reicht dieser eine klare Zusammenhang.

## Nutze Codex in der ChatGPT-Desktop-App für die Übergabe per MCP

Am 9. Juli 2026 wurde die eigenständige Codex-App in die **ChatGPT-Desktop-App** für macOS und Windows integriert. Codex hat dort weiterhin eine eigene Ansicht und einen eigenen Chatverlauf neben den Bereichen Chat und Work. OpenAI erklärt die Änderung in der Anleitung [What's new](https://learn.chatgpt.com/docs/whats-new#use-codex-in-the-chatgpt-desktop-app).

Lade die [ChatGPT-Desktop-App](https://learn.chatgpt.com/docs/app) herunter oder aktualisiere sie. Wähle anschließend **Codex**, sobald du Karten speichern möchtest. Unter **New chat** kannst du einen bestehenden ChatGPT-Chat öffnen und zu einem Codex-Chat hinzufügen. Du kannst auch nur die freigegebene Kartenliste einfügen. Study Mode und der MCP-Schritt in Codex bleiben in beiden Fällen getrennte Abläufe innerhalb derselben Desktop-App.

Wenn deine Notizen bereits als Dateien auf deinem Computer liegen, kannst du in Codex bleiben und denselben Tutor-Prompt mit jeweils einer Frage verwenden. Weise Codex an, keine Karten zu speichern, bevor du die Vorschau freigegeben hast. Für die meisten Lernenden ist der ChatGPT Study Mode der einfachere Tutor. Codex übernimmt die Übergabe, sobald lokale Dateien oder MCP-Werkzeuge ins Spiel kommen.

## Verbinde Codex mit dem Flashcards-MCP-Server

Die Einrichtung in der Desktop-App ist kurz:

1. Öffne **Settings > MCP servers** in der ChatGPT-Desktop-App.
2. Wähle **Add server**.
3. Nenne den Server `Flashcards`, wähle **Streamable HTTP** und gib diese URL ein:

```text
https://mcp.flashcards-open-source-app.com/mcp
```

4. Speichere den Server und wähle dann **Restart**.
5. Wähle nach dem Neustart **Authenticate** und schließe die OAuth-Anmeldung bei Flashcards im Browser ab.
6. Gib in Codex `/mcp` ein, um zu prüfen, ob der Server verbunden ist.

Diese Schritte entsprechen OpenAIs aktueller [MCP-Einrichtung für die ChatGPT-Desktop-App und Codex](https://learn.chatgpt.com/docs/extend/mcp). Flashcards nutzt OAuth für die interaktive Anmeldung. In einer normalen Desktop-Sitzung musst du daher keinen API-Key einfügen. Die [Flashcards-MCP-Dokumentation](/de/docs/mcp-connector/) beschreibt die Authentifizierung und alle verfügbaren Werkzeuge, falls die Verbindung nicht funktioniert.

Prüfe jede Schreibaktion, bevor sie ausgeführt wird. Das Auflisten von Workspaces verändert nichts. Das Erstellen, Umschreiben, Neuordnen oder Löschen gespeicherter Karten oder Decks dagegen schon. Wenn deine Schule oder dein Arbeitgeber ChatGPT verwaltet, können die Administratoren außerdem einschränken, welche MCP-Server oder Werkzeuge du aktivieren darfst.

## Speichere nur die Karten, die du freigegeben hast

Wechsle in der Desktop-App zu Codex und übergib deine endgültige Auswahl. Ich würde diesen Prompt verwenden:

```text
Nutze den Flashcards-MCP-Server. Liste zuerst meine Workspaces auf und frage mich,
wo diese Karten gespeichert werden sollen. Zeige mir vor jeder Schreibaktion die
vorgeschlagenen Vorderseiten, Rückseiten, Tags und Änderungen an Decks. Erstelle
nur die Karten, die ich freigebe. Lies die gespeicherten Karten danach wieder aus
und zeige sie mir, damit ich sie prüfen kann.
```

Codex sollte zuerst das Werkzeug aufrufen, das deine Workspaces nur auflistet und nichts verändert. Sobald du den Workspace und die Einordnung ausgewählt hast, kann es die Schreibaktion vorbereiten. Prüfe vor der Freigabe den Workspace, die Vorder- und Rückseiten, Tags, Änderungen an Decks und die Anzahl der betroffenen Einträge.

Der Connector stellt drei Werkzeuge bereit:

| Tool | Funktion | Verändert Daten? |
| --- | --- | --- |
| `list_workspaces` | Listet die Flashcards-Workspaces auf, auf die du zugreifen darfst | Nein |
| `sql_query` | Liest freigegebene Daten zu Workspaces, Karten, Decks und Wiederholungen | Nein |
| `sql_execute` | Erstellt, bearbeitet oder löscht freigegebene Karten und Decks | Ja |

Die Namen wirken technisch, weil der Connector im Hintergrund eine kleine SQL-ähnliche Schnittstelle verwendet. Du musst selbst kein SQL schreiben. Beschreibe das gewünschte Ergebnis in normaler Sprache und prüfe die vorgeschlagene Änderung.

Das ist kein uneingeschränkter Datenbankzugriff. Jede Anfrage bleibt auf einen Workspace beschränkt, auf den dein Konto zugreifen darf. Der Server akzeptiert außerdem nur die dokumentierten Lesezugriffe sowie Schreibaktionen für Karten und Decks. Die Anleitung [Ist MCP für Flashcards sicher?](/de/blog/is-mcp-safe-for-flashcards/) erklärt den Datenweg, die Grenzen, Freigaben und das Risiko beim Löschen genauer.

## Codex kann das Deck nach der Lernsitzung aufräumen

Der Connector hilft auch, wenn sich eine Karte später als unklar erweist oder am falschen Ort landet. Sieh dir die Karten zuerst an, ohne etwas zu verändern:

```text
Lies die Karten in meinem Statistik-Deck, in denen Konfidenzintervalle vorkommen.
Markiere Duplikate und Karten, die mehr als eine Idee abfragen. Ändere nichts.
```

Gib danach nur eine kleine, genau beschriebene Änderung frei:

```text
Überarbeite nur die beiden ausgewählten Karten mit den Vorder- und Rückseiten,
die wir gerade geprüft haben. Ordne sie so ein, dass sie im Deck Inferenz
erscheinen. Zeige vor der Schreibaktion die endgültigen Werte. Lies die
gespeicherten Karten danach wieder aus und zeige sie mir noch einmal.
```

In Flashcards sind Decks gespeicherte Filter. Damit eine Karte unter einem anderen Deck erscheint, müssen möglicherweise ihre Tags geändert werden. Prüfe deshalb auch die Tags. Nach demselben Muster – zuerst ansehen, dann freigeben – kannst du ein Deck erstellen, eine kleine Auswahl neu ordnen oder ausdrücklich benannte Karten löschen. „Lösche alles, was schlecht aussieht“ ist bei jedem Werkzeug mit echtem Schreibzugriff ein riskanter Prompt.

## Die eigentliche FSRS-Wiederholung findet weiterhin in Flashcards statt

Der MCP-Connector kann freigegebene Wiederholungsdaten sowie Zustands- und Planungsfelder von FSRS lesen. Die gespeicherten Wiederholungsereignisse (`review_events`) und die Zustands- und Planungsdaten von FSRS sind über diese Schnittstelle jedoch schreibgeschützt. Das Schreibwerkzeug kann keine Wiederholung erfassen, keine Bewertung mit Again, Hard, Good oder Easy abgeben und den FSRS-Zustand oder -Zeitplan nicht verändern.

Öffne die [Flashcards-Web-App](https://app.flashcards-open-source-app.com/) oder eine mobile App, sobald die Karten fällig sind. Rufe die Antwort aus dem Gedächtnis ab, decke die Rückseite auf und wähle dort deine Bewertung. Flashcards zeichnet die offizielle Wiederholung auf, danach entscheidet FSRS, wann die Karte wieder fällig wird.

Codex kann dich mit den freigegebenen Kartendaten weiterhin informell abfragen. Betrachte das als zusätzliche Übung. Es ersetzt nicht die geplante Wiederholung in Flashcards. Die Anleitung zum [KI-Tutor für Karteikarten](/de/blog/ai-flashcard-tutor-due-cards/) zeigt den Unterschied anhand eines vollständigen Abfrageablaufs.

## Codex CLI nutzt dieselbe MCP-Konfiguration

Die meisten Lernenden können das Terminal überspringen. Es ist praktisch, wenn dein Lernmaterial bereits in Markdown-Dateien, Notizen mit Programmcode oder einem Ordner mit Kursunterlagen liegt.

Füge den Remote-Server so hinzu:

```bash
codex mcp add flashcards --url https://mcp.flashcards-open-source-app.com/mcp
codex mcp login flashcards
```

Prüfe den gespeicherten Server mit `codex mcp list`. Mit `/mcp` kannst du anschließend in Codex CLI die aktiven Werkzeuge ansehen. Die Codex-Ansicht in der Desktop-App, Codex CLI und die IDE-Erweiterung verwenden gemeinsam die Datei `config.toml`, wenn sie auf demselben Computer laufen. Richte den Server einmal ein und starte weitere lokale Clients bei Bedarf neu, damit er auch dort erscheint. ChatGPT Web liest diese Datei nicht.

Für eine Sitzung ohne grafische Oberfläche, in der die OAuth-Anmeldung im Browser nicht praktikabel ist, akzeptiert Flashcards einen langlebigen `fca_`-Agent-Key als Bearer-Token. Bewahre den Key in einer Umgebungsvariable auf und hinterlege nur deren Namen, nicht den Key selbst:

```bash
codex mcp add flashcards \
  --url https://mcp.flashcards-open-source-app.com/mcp \
  --bearer-token-env-var FLASHCARDS_MCP_TOKEN
```

Die [Flashcards-API-Anleitung](/de/docs/api/) erklärt, wie du den Agent-Key erhältst. Behandle ihn wie ein Passwort und halte ihn aus Prompts, Screenshots, dem Shell-Verlauf und der Versionsverwaltung heraus. Für eine normale interaktive Sitzung ist OAuth die einfachere Wahl.

## ChatGPT Web bindet MCP anders ein

ChatGPT Web liest die MCP-Server aus deiner lokalen Codex-Datei `config.toml` nicht. Im Web bindet **ChatGPT Work** entfernte MCP-Server über Plugins ein. Die Administratoren des Workspaces können festlegen, welche Plugins und Werkzeuge verfügbar sind.

Eigene MCP-Apps werden im Web separat eingerichtet. Sie verwenden den ChatGPT Developer mode; ihre Verfügbarkeit und Schreibrechte hängen vom Konto und vom Workspace ab. Wenn dein Workspace das Hinzufügen oder Veröffentlichen einer solchen App erlaubt, folge OpenAIs aktueller [Anleitung zu Developer mode und MCP-Apps](https://help.openai.com/en/articles/12584461-developer-mode-apps-and-full-mcp-connectors-in-chatgpt-beta). Prüfe die aktivierten Aktionen, bevor du davon ausgehst, dass das Flashcards-Schreibwerkzeug verfügbar ist.

Damit bleiben vier klare Wege:

- Lerne in ChatGPT und speichere anschließend die freigegebenen Karten mit Codex in der Desktop-App über MCP.
- Nutze Codex CLI oder die Codex-Ansicht der Desktop-App sowohl als Tutor als auch zum Erstellen von Karten über MCP.
- Nutze ein von deinem Workspace freigegebenes Plugin in ChatGPT Web oder eine eigene MCP-App, sofern sie die nötigen Werkzeuge bereitstellt.
- Kopiere die ausgewählten Karten von Hand.

## Karten von Hand zu kopieren ist weiterhin sinnvoll

Wenn du auf den Connector verzichtest, verlierst du kaum etwas. Bitte ChatGPT um die endgültig ausgewählten Karten als einfache Blöcke mit Vorder- und Rückseite:

```text
Gib nur die Karten zurück, die ich ausgewählt habe. Schreibe in jeden Block eine
klare Vorderseite und eine kurze Rückseite. Ergänze das vorgesehene Deck oder die
Tags als Bezeichnung. Füge keine neuen Karten und keine neuen Fakten hinzu.
```

Lies sie einmal durch, kopiere die brauchbaren Karten in Flashcards und fahre mit der normalen Wiederholung fort. Die manuelle Eingabe ist eine vernünftige Wahl für vertrauliches Material, ein verwaltetes Schulkonto oder wenn du nicht möchtest, dass ein KI-Client gespeicherte Kartendaten liest.

Die ergänzende Anleitung [So machst du aus dem ChatGPT Study Mode sinnvolle Flashcards](/de/blog/how-to-turn-chatgpt-study-mode-into-flashcards/) konzentriert sich auf diesen Lernablauf ohne Connector. [So nutzt du ChatGPT, um Flashcards zu erstellen](/de/blog/how-to-use-chatgpt-to-make-flashcards/) zeigt allgemeiner, wie du aus Notizen Karten entwirfst. Wenn du außerdem mit Claude lernst, zeigt [Claude zum Lernen nutzen](/de/blog/how-to-use-claude-for-studying/) den entsprechenden Ablauf von der Tutor-Sitzung bis zur MCP-Übergabe mit Claudes eigener Connector-Einrichtung.

## Die Übergabe sollte kleiner bleiben als die Lernsitzung

Eine gute Lernsitzung mit ChatGPT kann zwanzig nützliche Minuten dauern und drei Karten hervorbringen. Das ist völlig in Ordnung. Das Gespräch hat dir geholfen, das Thema zu verstehen. Die Karten müssen nur die Lücken festhalten, die später noch wichtig sind.

Mein bevorzugter **Ablauf zum Lernen mit ChatGPT und Codex** ist einfach: Lass dich abfragen, achte darauf, wo du ins Stocken gerätst, gib einige klare Karten frei, speichere sie über Flashcards MCP und erledige die eigentliche FSRS-Wiederholung in Flashcards. Der Connector erspart dir das Kopieren und Einfügen. Du entscheidest weiterhin selbst, was du später noch einmal üben willst.
