---
title: MCP-Connector
description: Fuege den entfernten Flashcards-MCP-Server als benutzerdefinierten Connector hinzu, mit OAuth fuer Clients, einem API-Key fuer den Headless-Einsatz und getrennten SQL-Tools fuer Lesen und Schreiben.
---

## Ueberblick

Flashcards betreibt einen entfernten MCP-Server (Model Context Protocol), damit
MCP-Clients und KI-Agenten deine faelligen Karten lesen und Karten sowie Decks
fuer dich erstellen oder bearbeiten koennen.

Agenten koennen sich auf zwei Wegen verbinden: ueber diesen MCP-Server (am besten
fuer MCP-Clients wie Claude oder Cursor) oder ueber die
[Discovery-URL der Agent-API](/docs/api/) fuer CLI-Agenten. Beide erreichen
dieselbe Datenoberflaeche pro Nutzer; diese Seite behandelt den MCP-Server.

Verbinde dich damit unter:

```text
https://mcp.flashcards-open-source-app.com/mcp
```

Der Transport ist Streamable HTTP, und der Server stellt drei Tools ueber eine
kleine, absichtlich eingeschraenkte SQL-Oberflaeche bereit. Es ist dieselbe
Datenoberflaeche pro Nutzer wie in der [API-Referenz](/docs/api/); der MCP-Server
ist der connector-freundliche Weg, sie von Clients aus zu erreichen, die MCP
sprechen.

## So fuegst du ihn in deinem Client hinzu

Die meisten Clients fuegen einen entfernten MCP-Server als benutzerdefinierten
Connector hinzu:

1. Oeffne die Connector- oder MCP-Server-Einstellungen deines Clients.
2. Fuege einen benutzerdefinierten Connector hinzu und fuege die Server-URL `https://mcp.flashcards-open-source-app.com/mcp` ein.
3. Autorisiere bei interaktiven Clients im Browser, wenn du dazu aufgefordert
   wirst. Der Server nutzt OAuth 2.1 mit Dynamic Client Registration, daher gibt
   es kein Client-Secret zum Einfuegen und keine App, die du zuerst registrieren
   musst.
4. Setze fuer den Headless- oder CLI-Einsatz stattdessen einen Header
   `Authorization: Bearer fca_…` mit deinem Agent-API-Key anstelle des
   Browser-Flows.

Rufe nach der Autorisierung einmal `list_workspaces` auf, um einen Workspace
auszuwaehlen, und nutze dann `sql_query` zum Lesen und `sql_execute` zum
Schreiben.

## Tools

Der Server stellt drei Tools bereit. Lesen und Schreiben sind bewusst getrennt,
damit ein einzelnes Tool niemals sichere und destruktive Operationen vermischt.

- `sql_query` — Nur-Lese-Zugriff auf deine Karten und Decks (`SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` — Schreibzugriff auf deine Karten und Decks (`INSERT`, `UPDATE`,
  `DELETE`) als atomarer Batch.
- `list_workspaces` — listet die Workspaces auf, auf die du zugreifen kannst,
  jeweils mit ihrer `workspaceId`, dem Namen, der Anzahl aktiver Karten, der
  letzten Aktivitaet und der Angabe, ob es dein aktuell ausgewaehlter Standard
  ist. Verwende eine zurueckgegebene `workspaceId` fuer das `workspaceId`-Argument
  von `sql_query` und `sql_execute`.

Die SQL-Oberflaeche ist ein absichtlich eingeschraenkter Dialekt und kein
vollstaendiges PostgreSQL. Anweisungen koennen nur die Ressourcen `workspace`,
`cards`, `decks` und `review_events` adressieren, jede Anweisung ist auf deinen
eigenen Workspace beschraenkt, und Lese- sowie Schreibvorgaenge sind auf `100`
Zeilen pro Anweisung begrenzt.

## Karten-Vertrag

Jede Karte folgt einem Vertrag, und die Tools verlassen sich darauf:

- `front_text` ist nur eine Frage oder ein Wiederholungs-Prompt und enthaelt
  niemals die Antwort.
- `back_text` enthaelt die Antwort, optional mit einem konkreten Beispiel.

Agenten, die Karten ueber `sql_execute` generieren, folgen diesem Vertrag, sodass
die von ihnen erstellten Karten sofort mit Spaced Repetition wiederholbar sind.

## Authentifizierung

Zwei Autorisierungswege erreichen dieselbe Datenoberflaeche pro Nutzer.

### OAuth 2.1 (interaktive Connector-Clients)

Der Server implementiert den Authorization-Code-Flow mit PKCE und Dynamic Client
Registration. Fuege die MCP-URL als benutzerdefinierten Connector hinzu und
autorisiere im Browser; es wird kein Client-Secret vorab geteilt. Die Discovery
ist standardisiert:

- Protected-Resource-Metadaten:
  `https://mcp.flashcards-open-source-app.com/.well-known/oauth-protected-resource`
- Authorization-Server-Metadaten:
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### API-Key (Headless und CLI)

Beziehe einen langlebigen `fca_`-Agent-API-Key ueber den E-Mail-OTP-Login-Flow,
der in der [API-Referenz](/docs/api/) dokumentiert ist, und sende ihn dann als
Bearer-Token:

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

Das ist derselbe Key, den die REST-Agent-Oberflaeche akzeptiert, und er benoetigt
weder einen Browser noch einen OAuth-Roundtrip.

Die kanonische maschinenlesbare Beschreibung beider Wege ist die
Discovery-Nutzlast unter `https://api.flashcards-open-source-app.com/v1/`
(gespiegelt unter `/v1/agent`).

## Sicherheit und Geltungsbereich

Die SQL-Tools koennen bedenkenlos genehmigt werden, weil die Oberflaeche ein
abgesicherter, vom Parser erzwungener Dialekt ist und kein beliebiger
Datenbankzugriff:

- **Geschlossene Anweisungsliste**: `sql_query` akzeptiert nur `SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS` und `SELECT`; `sql_execute` akzeptiert nur `INSERT`,
  `UPDATE` und `DELETE`. Alles andere wird beim Parsen abgelehnt.
- **Begrenzte Ressourcen**: Anweisungen koennen nur `workspace`, `cards`, `decks`
  und `review_events` betreffen.
- **Workspace-Geltungsbereich**: jede Anweisung ist auf deinen ausgewaehlten
  Workspace beschraenkt, ohne mandantenuebergreifenden Zugriff.
- **Grenzwerte**: bis zu `100` Zeilen pro Anweisung, bis zu `50` Anweisungen pro
  Batch und eine Ergebnisgrenze von etwa `12k` Tokens. Mutations-Batches werden
  atomar angewendet.
- **Trennung von Lesen und Schreiben**: `sql_query` und `list_workspaces` sind
  nur lesend (`readOnlyHint`) und `sql_execute` fuehrt Schreibvorgaenge aus
  (`destructiveHint`).

Der gesamte Stack — App, Backend und Infrastruktur — ist Open Source und kann
[selbst gehostet](/docs/self-hosting/) werden, sodass du denselben Connector
gegen deine eigene Bereitstellung betreiben kannst.
