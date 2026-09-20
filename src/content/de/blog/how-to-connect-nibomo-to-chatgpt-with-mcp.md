---
title: "So verbindest du Nibomo über MCP mit ChatGPT"
description: "Verbinde Nibomo über die MCP-Server-URL mit ChatGPT, melde dich per OAuth an, lege Berechtigungen fest und speichere zum Test eine Lernkarte."
date: "2026-09-20"
image: "/blog/how-to-connect-nibomo-to-chatgpt-with-mcp.png"
keywords:
  - "Nibomo mit ChatGPT verbinden"
  - "Nibomo ChatGPT MCP"
  - "ChatGPT Lernkarten-Plugin"
  - "Nibomo MCP einrichten"
---

Um Nibomo mit ChatGPT zu verbinden, fügst du den MCP-Server als benutzerdefiniertes Plugin hinzu und meldest dich anschließend bei deinem Nibomo-Konto an. Beide Schritte sind nötig: Nibomo kann bereits auf der Seite „Plugins“ in ChatGPT erscheinen, bevor die Anmeldung abgeschlossen ist.

Die Verbindung nutzt MCP, einen Standard, über den ein KI-Assistent auf die Funktionen einer anderen App zugreifen kann. Du gibst eine Serveradresse ein, erlaubst den Zugriff und beschreibst ChatGPT in normalen Worten, was es mit deinen Lernkarten tun soll. Programmierkenntnisse brauchst du dafür nicht.

![Ein Florist zeigt einem Kunden einen Musterstrauß zur Freigabe, bevor er die übrigen Sträuße bindet](/blog/how-to-connect-nibomo-to-chatgpt-with-mcp.png)

Für diese Einrichtung nutzt du den Entwicklermodus von ChatGPT. Du fügst Nibomo direkt über seine Server-URL hinzu.

**Was wir prüfen konnten:** Wir haben die Einrichtungsbildschirme am 20. September 2026 aufgenommen und den Eintrag für das benutzerdefinierte Plugin gespeichert. Das Anmeldefenster öffnete sich in unserem eingebetteten Browser nicht. Deshalb konnten wir weder die OAuth-Anmeldung abschließen noch Tool-Aufrufe mit einem angemeldeten Konto testen. Die folgenden Prompts zeigen dir, wie du deine eigene Verbindung prüfen kannst. Ob sich über diese Verbindung Karten erstellen lassen, konnten wir nicht prüfen.

## Öffne das Formular für ein eigenes Plugin

Du brauchst ein Nibomo-Konto und ein ChatGPT-Konto oder einen ChatGPT-Workspace, in dem benutzerdefinierte MCP-Verbindungen verfügbar sind. Wenn du Nibomo noch nicht verwendet hast, folge zuerst der [Anleitung für den Einstieg](/docs/getting-started/), damit du einen Workspace auswählen kannst.

Öffne in ChatGPT **Settings → Security and login → Developer mode** und aktiviere den Entwicklermodus. Öffne dann **Plugins** und füge über die Schaltfläche **+** oder den Eintrag **Create app** eine Verbindung hinzu. In unserer Sitzung hieß das Formular **New Plugin**. OpenAI beschreibt diesen Ablauf in seiner [Anleitung „Connect to ChatGPT“](https://developers.openai.com/plugins/deploy/connect-chatgpt).

Verfügbarkeit und Bezeichnungen können je nach Konto und Workspace abweichen. Wenn der Entwicklermodus oder die Option zum Erstellen fehlt, sieh in der offiziellen Anleitung nach und prüfe die Einschränkungen deines Workspaces.

Fülle das Formular aus:

| Feld | Wert |
| --- | --- |
| Name | `Nibomo` |
| Description (Beschreibung) | `Lernkarten lesen, erstellen, bearbeiten und in zeitlichen Abständen wiederholen.` |
| Connection (Verbindung) | Server URL |
| Server URL | `https://mcp.nibomo.com/mcp` |
| Authentication (Authentifizierung) | OAuth |

Verwende die vollständige Adresse einschließlich `/mcp` am Ende. Die Beschreibung ist optional und hilft dir, die Verbindung später wiederzuerkennen. Für diese OAuth-Einrichtung musst du keinen API-Schlüssel erzeugen.

![ChatGPT-Formular „New Plugin“ mit der MCP-Server-URL von Nibomo und ausgewählter OAuth-Authentifizierung](/blog/chatgpt-mcp-nibomo-create-connector.png)

Lies den Warnhinweis zu benutzerdefinierten Servern, bestätige ihn, wenn du fortfahren möchtest, und klicke auf **Create**. Die Schaltfläche befindet sich unterhalb des im Screenshot sichtbaren Bereichs. Dadurch wird deine benutzerdefinierte Verbindung angelegt. Das bedeutet nicht, dass OpenAI Nibomo geprüft oder in sein öffentliches Verzeichnis aufgenommen hat.

## Schließe die Anmeldung bei Nibomo ab

Wähle bei **Add Nibomo to ChatGPT** die Schaltfläche **Sign in with Nibomo** und erteile die Zugriffsfreigabe über das Nibomo-Konto, in dem deine Karten gespeichert sind.

![Dialog „Add Nibomo to ChatGPT“ mit der Schaltfläche „Sign in with Nibomo“ vor der Anmeldung](/blog/chatgpt-mcp-nibomo-sign-in.png)

Der Authentifizierungsdienst von Nibomo verwendet `auth.flashcards-open-source-app.com`. Es ist daher normal, dass bei der Anmeldung dieser Hostname erscheint, obwohl die MCP-Adresse `mcp.nibomo.com` verwendet.

Wenn sich kein Anmeldefenster öffnet, versuche es in deinem normalen Browser. Um die Anmeldung erneut zu starten, öffne **Nibomo → Plugin actions (…) → Manage → Connect another account**. Mit der unten beschriebenen Workspace-Abfrage prüfst du anschließend, ob ChatGPT auf dein Konto zugreifen kann.

## Lege fest, wann ChatGPT um Erlaubnis fragen soll

Unter **Settings → Plugins → Permissions** zeigt unser Screenshot die Optionen **Always ask** (immer fragen), **Allow read actions** (Lesezugriffe erlauben) und **Allow low-risk actions** (Aktionen mit geringem Risiko erlauben).

Wähle **Allow read actions**, damit ChatGPT ohne Rückfrage Workspaces auflisten und Karten lesen darf, während Änderungen weiterhin deine Zustimmung erfordern. Wähle **Always ask**, wenn du auch Lesezugriffe einzeln bestätigen möchtest.

![Plugin-Berechtigungen in ChatGPT mit ausgewählter Option „Allow read actions“](/blog/chatgpt-mcp-nibomo-permissions.png)

Diese Einstellung gilt für alle Plugins. Wenn du sie änderst, wirkt sich das auch auf andere Plugins aus; sie regelt nicht nur die Berechtigungen von Nibomo.

Bei Nibomo zählen das Auflisten von Workspaces, das Lesen von Karten, das Abrufen von Anleitungen und der nächsten Wiederholungsfrage sowie das Anzeigen einer Antwort als Lesezugriffe. Das Anlegen und Bearbeiten von Karten sowie das Speichern eines Wiederholungsergebnisses sind Schreibzugriffe. In der Aktivitätsanzeige von ChatGPT siehst du möglicherweise Tool-Namen wie `list_workspaces`, `sql_query` oder `sql_execute`. Du musst selbst kein SQL schreiben. Die [Dokumentation zum MCP-Konnektor](/docs/mcp-connector/) beschreibt die Schnittstelle.

## Prüfe die Verbindung mit einer Karte

Öffne einen Chat, in dem Nibomo ausgewählt ist. Beginne mit einer Anfrage, die nichts verändert:

> Liste mit Nibomo meine Workspaces auf. Erstelle und ändere nichts.

Prüfe, ob die zurückgegebenen Workspace-Namen zu deinem Konto gehören. Wenn ChatGPT Nibomo nicht aufrufen kann oder dich auffordert, ein Konto zu verbinden, gehe zur Anmeldung zurück. Sobald ChatGPT die Workspaces auflisten kann, gib ausdrücklich an, in welchem Workspace du die Karte speichern möchtest.

Bitte als Nächstes um einen Entwurf:

> Entwirf eine Lernkarte zu HTTP 404. Auf die Vorderseite kommt nur eine Frage, auf die Rückseite die Antwort. Zeige mir beide Seiten, bevor du etwas speicherst.

Eine passende Karte wäre:

| Seite | Inhalt |
| --- | --- |
| Vorderseite | Was bedeutet der HTTP-Statuscode 404? |
| Rückseite | Der Server konnte die angeforderte Ressource nicht finden. Zum Beispiel kann die URL auf eine Seite verweisen, die nicht existiert. |

Wenn du mit dem Entwurf zufrieden bist, nenne den gewünschten Workspace:

> Speichere diese eine Karte in meinem Nibomo-Workspace [Workspace-Name]. Erstelle keine weiteren Karten.

Prüfe die Karte und den Workspace in der Bestätigungsanfrage von ChatGPT, bevor du das Speichern erlaubst. Bitte ChatGPT anschließend, die gespeicherte Karte erneut zu lesen. Öffne Nibomo im Web oder auf deinem Smartphone mit demselben Konto, wähle den Workspace aus und warte auf die Synchronisierung. Suche dort die Karte und prüfe beide Seiten, um sicherzustellen, dass sie korrekt gespeichert wurde.

## Wenn die Verbindung weiterhin nicht funktioniert

Prüfe zuerst die eingetragene URL: `https://mcp.nibomo.com/mcp`. Der ältere MCP-Hostname funktioniert weiterhin. Wenn du jedoch eine bestehende Verbindung auf die neue Adresse umstellst, musst du dich erneut anmelden. Die Autorisierungstoken sind an die Serveradresse gebunden.

Wenn ChatGPT meldet, dass das Speichern fehlgeschlagen ist, bitte es, zuerst im Workspace nach der Karte zu suchen, bevor du sie erneut speichern lässt. So vermeidest du doppelte Karten, wenn das Ergebnis des ersten Versuchs unklar ist. Falls die Karte auf dem Server vorhanden ist, aber noch nicht auf deinem Smartphone erscheint, prüfe dort Konto, Workspace und Synchronisierungsstatus.

Nach diesem Test kannst du auch Karten zu deinem eigenen Lernmaterial erst entwerfen lassen und dann zum Speichern freigeben. Die [Anleitung zum Erstellen von Lernkarten mit ChatGPT](/blog/how-to-use-chatgpt-to-make-flashcards/) zeigt, wie du sinnvolle Fragen auswählst und jede Karte auf einen klaren Lerninhalt beschränkst.
