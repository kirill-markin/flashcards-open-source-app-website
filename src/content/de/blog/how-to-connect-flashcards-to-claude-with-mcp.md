---
title: "So verbindest du Nibomo über MCP mit Claude"
description: "Verbinde Nibomo über einen Remote-MCP-Connector mit Claude – in der Desktop-App oder im Browser. Folge den überprüften Schritten, lege Tool-Berechtigungen fest und speichere deine erste Lernkarte."
date: "2026-06-23"
updated: "2026-09-20"
image: "/blog/how-to-connect-nibomo-to-claude-mcp.png"
keywords:
  - "Nibomo Claude Connector"
  - "Claude MCP Lernkarten"
  - "Nibomo mit Claude verbinden"
  - "Lernkarten in Claude erstellen"
---

Claude kann Lernkarten über einen benutzerdefinierten MCP-Connector direkt in deinem Nibomo-Workspace speichern. Du trägst eine Server-URL ein, meldest dich bei Nibomo an und legst fest, welche Aktionen Claude ausführen darf, ohne jedes Mal nachzufragen.

Der folgende Einrichtungsablauf wurde am 20. September 2026 in Claude Desktop überprüft. Er beschreibt den Remote-Connector für normale Claude-Chats in der Desktop-App und im Browser. Für Claude Code, Codex oder einen anderen Terminal-Agenten gibt es die separate [Anleitung zur Anmeldung für Agenten](/de/blog/claude-code-codex-openclaw-flashcards-login/).

![Eine Übergabe in einer Bibliothek veranschaulicht den Lesezugriff auf Material und die Freigabe vor Änderungen](/blog/how-to-connect-nibomo-to-claude-mcp.png)

## Nibomo in Claudes Connector-Einstellungen hinzufügen

Du brauchst ein Nibomo-Konto und Zugriff auf benutzerdefinierte Connectoren in Claude. Nibomo nutzt einen Remote-MCP-Server, du musst also nichts lokal installieren. Anthropic beschreibt diese Verbindungsmethode in seiner [Anleitung für benutzerdefinierte Connectoren](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp).

1. Öffne **Settings > Connectors** in Claude Desktop oder die [Connector-Einstellungen im Browser](https://claude.ai/customize/connectors).
2. Wähle **Add custom connector**, um einen benutzerdefinierten Connector hinzuzufügen.
3. Gib **Nibomo** als Namen ein und füge diese Server-URL ein:

   ```text
   https://mcp.nibomo.com/mcp
   ```

4. Klicke auf **Continue**.
5. Lass auf der Anmeldeseite **Sign in now** und **Register automatically (DCR)** ausgewählt. Belasse benutzerdefinierte Header und erweiterte Einstellungen bei ihren Standardwerten.
6. Klicke auf **Add** und dann auf **Connect**.

![Claudes Dialog „Add custom connector“ mit Nibomo und der MCP-Server-URL](/blog/claude-mcp-nibomo-add-connector.png)

## Anmelden und Zugriff erlauben

Claude öffnet einen Browser, um die Verbindung abzuschließen. Falls zuerst eine Bestätigung erscheint, wähle **Continue connecting**.

Die Nibomo-Anmeldeseite verwendet `auth.flashcards-open-source-app.com`. Sie erkennt möglicherweise eine bestehende Nibomo-Sitzung; andernfalls melde dich bei deinem Konto an. Auf der Freigabeseite steht **Claude wants to connect to your Nibomo account**. Dort wird der Lese- und Schreibzugriff auf Lernkarten und Wiederholungsdaten beschrieben.

Prüfe, ob du das gewünschte Konto verbindest, und klicke auf **Allow access**, um den Zugriff zu erlauben. Sobald die Seite **Connected** anzeigt, wähle **Open desktop app**, falls du Claude Desktop verwendest. Zurück in den Connector-Einstellungen solltest du **Nibomo** mit `https://mcp.nibomo.com/mcp` sehen.

## Schreibaktionen nur nach Freigabe zulassen

Der Connector hat Tools, um dein Lernmaterial zu lesen, es zu ändern und Wiederholungen zu erfassen. Öffne Nibomo unter **Settings > Connectors**, um die Tool-Berechtigungen zu prüfen. Setze für die hier gezeigte Einrichtung die fünf Lese-Tools auf **Always allow** und lass die beiden Schreib-Tools auf **Needs approval**:

| Berechtigung | Tools |
| --- | --- |
| **Always allow** (immer erlauben) | Get flashcards usage guide; List flashcards workspaces; Next flashcard question; Reveal flashcard answer; Nibomo SQL query (read-only) |
| **Needs approval** (Freigabe erforderlich) | Nibomo SQL execute (write); Submit flashcard review |

So kann Claude einen Workspace finden und Karten lesen, fragt aber nach, bevor es Daten ändert oder eine Wiederholung erfasst. Du kannst strengere Berechtigungen wählen, wenn du auch Lesezugriffe einzeln freigeben möchtest.

![Nibomo ist in Claude verbunden: Lese-Tools sind erlaubt, Schreib-Tools benötigen eine Freigabe](/blog/claude-mcp-flashcards-connector-settings.png)

## Eine erste Karte erstellen und prüfen, ob sie gespeichert wurde

Öffne einen Chat und stelle sicher, dass Nibomo im Connector-Menü des Chats aktiviert ist. Beginne mit einer kleinen Anfrage, die den Speicherort und den Karteninhalt klar vorgibt:

```text
Liste mit Nibomo meine Workspaces auf und frage mich, welchen du verwenden sollst.
Erstelle dann eine Lernkarte:
Vorderseite: Was bedeutet HTTP 404?
Rückseite: Die angeforderte Ressource wurde auf dem Server nicht gefunden.
Tag: web-basics
```

Wähle den Workspace, prüfe Claudes Schreibanfrage und gib sie frei, wenn Inhalt und Ziel stimmen. Öffne danach [Nibomo](https://app.nibomo.com/) und kontrolliere, ob die gespeicherte Karte die Frage auf der Vorderseite und die Antwort auf der Rückseite hat. Für diese Anleitung wurden die Verbindung und die gespeicherten Berechtigungen überprüft, dabei aber keine Karte erstellt. Mit diesem ersten Test prüfst du, ob Claude auch eine Karte in deinem gewählten Workspace speichern kann.

Wenn Claude die Karte nur im Chat ausgibt, prüfe, ob Nibomo in den Einstellungen verbunden und für diesen Chat aktiviert ist und ob **Nibomo SQL execute (write)** nicht blockiert ist. Bitte Claude ausdrücklich, die Karte über Nibomo zu speichern.

Für größere Kartensammlungen erklärt [So erstellst du mit Claude Lernkarten](/de/blog/how-to-use-claude-to-make-flashcards/), wie du brauchbare Fragen und Antworten entwirfst. Wenn du HTTP-Codes lernst, kannst du auch mit dem vorhandenen [Lernkarten-Deck zu HTTP-Statuscodes](/de/catalog/packages/http-status-code-flashcards/) anfangen.

## Wenn du bereits die ältere Connector-URL verwendest

Der ältere Endpunkt `https://mcp.flashcards-open-source-app.com/mcp` funktioniert weiterhin. Verwende für eine neue Verbindung `https://mcp.nibomo.com/mcp`. Beim Wechsel der URL musst du damit rechnen, den Zugriff auf Nibomo erneut freigeben zu müssen.

Wenn du dem für diese Anleitung überprüften Ablauf folgen möchtest, öffne den älteren Connector unter **Settings > Connectors**, wähle **Disconnect** und dann **More options > Remove**. Füge Nibomo mit den obigen Schritten hinzu und prüfe, ob die neue URL und die erwarteten Tools angezeigt werden.

Wenn du die App noch nicht kennst, erklärt [Erste Schritte](/de/docs/getting-started/) den Workspace und den Lernablauf, nachdem deine erste Karte gespeichert ist.
