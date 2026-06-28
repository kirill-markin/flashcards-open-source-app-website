---
title: "So verbindest du Flashcards mit Claude über MCP und erstellst Lernkarten direkt im Chat"
description: "Eine praktische Anleitung, um den Flashcards-MCP-Connector in Claude hinzuzufügen, Tool-Berechtigungen sauber zu setzen und Lernkarten direkt in deinem Flashcards-Workspace anzulegen."
date: "2026-06-23"
image: "/blog/how-to-connect-flashcards-to-claude-with-mcp.png"
keywords:
  - "claude mcp lernkarten"
  - "flashcards mit claude verbinden"
  - "claude custom connector flashcards"
  - "lernkarten direkt in claude erstellen"
  - "flashcards mcp connector"
  - "flashcards claude connector"
  - "claude mcp karten"
  - "flashcards remote mcp"
  - "flashcards connector claude"
  - "claude connector für flashcards workspace"
---

Gestern habe ich in knapp einer Minute eine Testkarte direkt aus Claude in Flashcards gespeichert. Der interessante Teil war nicht die Demo. Interessant war zu sehen, wie Claude nach dem richtigen Workspace fragt, die Freigabe für den Schreibzugriff anfordert und die Karte dann wirklich in der App landet, statt im Chat stecken zu bleiben.

Genau deshalb lohnt sich die Suche nach **Claude MCP Lernkarten** gerade.

Wenn du möchtest, dass Claude Karten direkt in deinem Flashcards-Workspace erstellt, ist das Setup kurz: den Flashcards-Custom-Connector hinzufügen, die Tool-Berechtigungen prüfen, den Connector im Chat aktivieren und den Schreibzugriff freigeben, sobald Claude eine Karte speichern will.

![Claude ist mit dem Flashcards-MCP-Server verbunden, um Lernkarten direkt aus dem Chat zu erstellen](/blog/how-to-connect-flashcards-to-claude-with-mcp.png)

## Das ist ein Custom Connector, kein Eintrag im Verzeichnis

Ein wichtiges Detail vorweg: Flashcards wird in Claude als **Custom Connector** über **Remote MCP** angebunden.

Suche also nicht nach einer bereits gelisteten Flashcards-App im offiziellen Connector-Verzeichnis von Claude. Der normale Ablauf ist: Claudes [Connector-Einstellungen](https://claude.ai/customize/connectors) öffnen, auf das Plus klicken, **Add custom connector** wählen und die Flashcards-MCP-URL selbst einfügen.

Die genaue Flashcards-Connector-URL ist:

`https://mcp.flashcards-open-source-app.com/mcp`

Direktlink: [mcp.flashcards-open-source-app.com/mcp](https://mcp.flashcards-open-source-app.com/mcp)

## Bevor du den Connector verbindest

Zwei Details sind wichtiger, als viele zuerst denken.

Erstens erreicht Claude Remote-MCP-Server aus der Anthropic-Cloud und nicht von deinem Laptop aus. Der Server muss also öffentlich erreichbar sein. Bei Flashcards ist das schon so, deshalb ist der öffentliche MCP-Endpunkt oben genau der richtige.

Zweitens solltest du Connector-Berechtigungen wie echte Tool-Berechtigungen behandeln. Verbinde nur Server, denen du vertraust, prüfe, was jedes Tool tun darf, und lies Freigabeanfragen genau, bevor du Schreibzugriffe erlaubst.

## So fügst du den Flashcards-MCP-Connector in Claude hinzu

Für ein persönliches Claude-Konto läuft das so:

1. Öffne [Customize > Connectors](https://claude.ai/customize/connectors).
2. Klicke auf `+`.
3. Wähle **Add custom connector**.
4. Gib dem Connector einen Namen und füge `https://mcp.flashcards-open-source-app.com/mcp` ein.
5. Füge den Connector hinzu.
6. Klicke auf **Connect** und durchlaufe den Login-Prozess, falls Claude dich dazu auffordert.
7. Prüfe die Tool-Berechtigungen, bevor du den Connector in Chats verwendest.

Wenn du in einem Team- oder Enterprise-Workspace bist, kann ein Owner oder Primary Owner den Custom Connector unter **Organization settings > Connectors > Add > Custom > Web** hinzufügen. Einzelne Nutzer müssen ihn danach trotzdem noch selbst verbinden und authentifizieren.

## Setze die ersten Berechtigungen eher vorsichtig

Der Flashcards-Connector in diesem Beispiel hat einen kleinen Tool-Umfang:

- `list_workspaces`, um verfügbare Workspaces aufzulisten
- `sql_query` für Lesezugriff
- `sql_execute` für Schreibaktionen wie das Erstellen von Karten

Claude lässt dich jedes Tool auf **Always allow**, **Needs approval** oder **Blocked** setzen.

Für die erste Einrichtung würde ich die reinen Lese-Tools auf **Always allow** lassen und das Schreib-Tool auf **Needs approval** setzen. So kann Claude deine Workspaces prüfen und Daten lesen, ohne dass das Erstellen von Karten plötzlich zu einer stillen Hintergrundaktion wird.

Genau das zeigt auch der Screenshot der Connector-Einstellungen hier: `list_workspaces` und `sql_query` sind erlaubt, während `sql_execute` weiter deine Freigabe braucht.

![Claude-Connector-Einstellungen mit Flashcards-MCP-Berechtigungen: Lesetools sind immer erlaubt, Schreibtools brauchen Freigabe](/blog/claude-mcp-flashcards-connector-settings.png)

Später kannst du das immer noch lockerer einstellen. Ich würde nur nicht so anfangen.

## Aktiviere den Connector in dem Chat, in dem du ihn nutzen willst

Nach dem Setup öffnest du einen Claude-Chat und stellst sicher, dass der Connector dort verfügbar ist. Im aktuellen Ablauf kannst du Connectoren über den `+`-Button oder das `/`-Menü innerhalb eines Chats aktivieren und den Tool-Zugriff bei Bedarf genau für diesen Chat anpassen.

Wenn Claude den Connector nicht nutzt, obwohl es sollte, prüfe zuerst die offensichtlichen Dinge:

- der Flashcards-Connector ist in den Einstellungen verbunden
- der Connector ist für den aktuellen Chat aktiviert
- das Schreib-Tool ist nicht blockiert

Damit löst sich das übliche Problem "Warum gibt Claude mir nur Text aus, statt die Karte wirklich anzulegen?" meistens schnell.

## Was du Claude sagen kannst

Halte den Prompt schlicht. Claude braucht hier keine große Inszenierung.

Das sind gute Startprompts:

```text
Create a new flashcard in Flashcards.
Front: What does HTTP 404 mean?
Back: The requested resource was not found on the server.
Tag: web-basics
Ask me which workspace to use if you are not sure.
```

```text
Before creating anything, list my Flashcards workspaces and tell me which one looks best for language study cards.
```

```text
Create a new Spanish flashcard in Flashcards.
Front: How do you say "I would like a coffee" in Spanish?
Back: Me gustaría un café.
Tags: spanish, travel
Use my Personal workspace.
```

Ich würde mit ein oder zwei Karten anfangen, nicht mit fünfzig. Es geht zuerst darum, den Connector-Ablauf, die Workspace-Auswahl und den Freigabeprozess zu bestätigen, bevor du größere Mengen anstößt.

## So sieht der Karten-Flow in der Praxis aus

Dieser Teil ist angenehm unspektakulär.

Du bittest Claude, eine Karte in Flashcards zu erstellen. Wenn du mehr als einen Workspace hast und kein offensichtlicher Standard erkennbar ist, kann Claude nachfragen, wohin die Karte soll. Danach nutzt Claude das Schreib-Tool und wartet auf deine Freigabe, falls `sql_execute` noch auf **Needs approval** steht.

Genau so sollte es sein.

Prüfe die Schreibanfrage, gib sie frei und lass Claude dann den Vorgang beenden. Im Screenshot unten hat Claude gefragt, welcher Workspace verwendet werden soll, die Flashcards-Schreibaktion ausgeführt und anschließend gemeldet, dass die Testkarte erfolgreich hinzugefügt wurde.

![Claude-Chat erstellt eine Test-Lernkarte über den Flashcards-MCP-Connector, nachdem nach dem richtigen Workspace gefragt wurde](/blog/claude-mcp-flashcards-create-card.png)

Du musst dich nicht um das rohe SQL kümmern, außer du willst dir den Tool-Call genauer ansehen. Entscheidend ist der Ablauf:

1. Bitte Claude, die Karte zu erstellen.
2. Wähle den Workspace, falls Claude nachfragt.
3. Prüfe die Schreibaktion und gib sie frei.
4. Kontrolliere, ob die gespeicherte Karte richtig aussieht.

Das reicht völlig, um **Lernkarten in Claude zu erstellen**, ohne so zu tun, als wäre Claude selbst die Review-App.

## Ein paar ehrliche Grenzen

Dieses Setup ist nützlich, aber nicht magisch.

Claude kann dir helfen, Karten direkt in Flashcards anzulegen. Es kann über den Connector auch lesen, Workspaces prüfen und Daten über die Lese-Tools abfragen. Das heißt trotzdem nicht, dass jede von Claude entworfene Karte gut ist. Es heißt auch nicht, dass du jede Schreibanfrage blind freigeben solltest.

Ich würde Claude weiter fürs Entwerfen und Eintragen nutzen und Flashcards für die Teile, die später wirklich zählen:

- schwache Karten überarbeiten
- Decks und Tags organisieren
- mit Spaced Repetition wiederholen
- aus deinem echten Workspace auf den Geräten lernen, die du sowieso benutzt

Wenn du zuerst bessere Prompts fürs Schreiben von Karten willst, ist [So erstellst du 2026 mit Claude Lernkarten: Projects, Datei-Uploads und FSRS-Wiederholung](/de/blog/how-to-use-claude-to-make-flashcards/) der bessere Einstieg. Wenn dein Ziel breiter ist als Kartenerstellung, zeigt [So nutzt du Claude 2026 zum Lernen](/de/blog/how-to-use-claude-for-studying/) den größeren Workflow.

## Nachdem Claude die Karte erstellt hat, prüfe sie in der echten App

Das ist mein Lieblingsteil an diesem Setup. Die Karte bleibt nicht in einem hübsch formatierten KI-Chatprotokoll stecken. Sie landet in Flashcards, wo du sie später auch wirklich wiederholen kannst.

Du kannst die gehostete Web-App öffnen, die Karte auf dem Smartphone prüfen oder einfach in deinem normalen Lernablauf weitermachen:

- [Flashcards-Web-App](https://app.flashcards-open-source-app.com/)
- [Flashcards für iPhone und iPad im App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- [Flashcards für Android bei Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

![Flashcards Open Source App beim Wiederholen in der gehosteten Web-App und den mobilen Apps](/home/app-screens-showcase-en.png)

Falls du das Produkt noch nicht benutzt hast, ist [Erste Schritte](/de/docs/getting-started/) der schnellste Einstieg.

## Die Kurzfassung

Wenn du nach **Flashcards mit Claude verbinden** gesucht hast, ist das der echte Ablauf:

1. Öffne Claudes [Connector-Einstellungen](https://claude.ai/customize/connectors).
2. Füge `https://mcp.flashcards-open-source-app.com/mcp` hinzu.
3. Verbinde den Connector und prüfe die Berechtigungen.
4. Lass die Lese-Tools offen und setze Schreib-Tools anfangs auf Freigabe.
5. Aktiviere den Connector in deinem Chat.
6. Bitte Claude, eine Karte zu erstellen.
7. Gib den Schreibzugriff frei.
8. Prüfe die gespeicherte Karte in Flashcards.

So kommst du von einem Claude-Chat in einen echten Flashcards-Workspace, ohne Scheinintegration, ohne manuelles Copy-and-paste und ohne am ersten Tag die Kontrolle über Schreibaktionen abzugeben.
