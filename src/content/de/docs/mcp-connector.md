---
title: MCP-Connector
description: Fuege den entfernten Nibomo-MCP-Server als benutzerdefinierten Connector hinzu, mit OAuth fuer Clients, einem API-Key fuer den Headless-Einsatz und getrennten SQL-Tools fuer Lesen und Schreiben.
---

## Ueberblick

Nibomo betreibt einen entfernten MCP-Server (Model Context Protocol), damit
MCP-Clients und KI-Agenten deine faelligen Karten lesen, sie Frage fuer Frage mit
dir wiederholen und Karten sowie Decks fuer dich erstellen oder bearbeiten
koennen.

Agenten koennen sich auf zwei Wegen verbinden: ueber diesen MCP-Server (am besten
fuer MCP-Clients wie Claude oder Cursor) oder ueber die
[Discovery-URL der Agent-API](/docs/api/) fuer CLI-Agenten. Beide erreichen
dieselbe Datenoberflaeche pro Nutzer; diese Seite behandelt den MCP-Server.

Verbinde dich damit unter:

```text
https://mcp.nibomo.com/mcp
```

Der Transport ist Streamable HTTP, und der Server stellt sieben Tools bereit: zwei
SQL-Tools ueber eine kleine, absichtlich eingeschraenkte SQL-Oberflaeche, eine
Workspace-Liste, einen Referenz-Leitfaden und drei Review-Tools. Es ist dieselbe
Datenoberflaeche pro Nutzer wie in der [API-Referenz](/docs/api/); der MCP-Server
ist der connector-freundliche Weg, sie von Clients aus zu erreichen, die MCP
sprechen.

## So fuegst du ihn in deinem Client hinzu

Die meisten Clients fuegen einen entfernten MCP-Server als benutzerdefinierten
Connector hinzu:

1. Oeffne die Connector- oder MCP-Server-Einstellungen deines Clients.
2. Fuege einen benutzerdefinierten Connector hinzu und fuege die Server-URL `https://mcp.nibomo.com/mcp` ein.
3. Autorisiere bei interaktiven Clients im Browser, wenn du dazu aufgefordert
   wirst. Der Server nutzt OAuth 2.1 mit Dynamic Client Registration, daher gibt
   es kein Client-Secret zum Einfuegen und keine App, die du zuerst registrieren
   musst.
4. Setze fuer den Headless- oder CLI-Einsatz stattdessen einen Header
   `Authorization: Bearer fca_…` mit deinem Agent-API-Key anstelle des
   Browser-Flows.

Rufe nach der Autorisierung einmal `list_workspaces` auf, um einen Workspace
auszuwaehlen, und nutze dann `sql_query` zum Lesen und `sql_execute` zum
Schreiben von Karten und Decks. Rufe fuer ein Review `next_review_card`, dann
`reveal_answer` und dann `submit_review` auf.

## Tools

Der Server stellt sieben Tools bereit. Lesen und Schreiben sind bewusst getrennt,
damit ein einzelnes Tool niemals sichere und destruktive Operationen vermischt.

- `sql_query` — strikt nur lesender Zugriff auf deine Karten und Decks
  (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` — Schreibzugriff auf deine Karten und Decks (`INSERT`, `UPDATE`,
  `DELETE`) als atomarer Batch.
- `list_workspaces` — strikt nur lesende Liste der Workspaces, auf die du
  zugreifen kannst, jeweils mit ihrer `workspaceId`, dem Namen, der Anzahl
  aktiver Karten, der letzten Aktivitaet und der Angabe, ob es dein aktuell
  ausgewaehlter Standard ist. Verwende eine zurueckgegebene `workspaceId` fuer
  das optionale `workspaceId`-Argument der SQL- und Review-Tools.
- `get_guide` — strikt nur lesender Referenz-Leitfaden zu einem Thema:
  `sql_dialect`, `card_authoring`, `bulk_authoring` oder `review_flow`. Das Tool
  liest keine Workspace-Daten.
- `next_review_card` — strikt nur lesend: gibt die naechste Karte zur Wiederholung
  zurueck, nur die Vorderseite, in derselben Warteschlangen-Reihenfolge wie die
  Apps. Optionale `tags` oder `deckId` grenzen die Warteschlange ein.
- `reveal_answer` — strikt nur lesend: gibt die Rueckseite einer Karte zurueck,
  nachdem sich der Lernende an ihrer Vorderseite versucht hat.
- `submit_review` — erfasst eine Bewertung `Again`, `Hard`, `Good` oder `Easy`
  und schreibt den FSRS-Wiederholungsplan der Karte fort.

Die SQL-Oberflaeche ist ein absichtlich eingeschraenkter Dialekt und kein
vollstaendiges PostgreSQL. Diese Dokumentation beschreibt nur den unterstuetzten
Dialekt, keine PostgreSQL-Kompatibilitaetsreferenz. Anweisungen koennen nur die
Ressourcen `workspace`, `cards`, `decks` und `review_events` adressieren, jede
Anweisung ist auf deinen eigenen Workspace beschraenkt, und Lese- sowie
Schreibvorgaenge sind auf `100` Zeilen pro Anweisung begrenzt.

## Reviews

Mit den Review-Tools kann ein Agent einen Lernenden Karte fuer Karte abfragen und
jede Bewertung im FSRS-Wiederholungsplan der Karte speichern:

1. `next_review_card` gibt eine `cardId` und `frontText` zurueck, oder
   `card: null`, wenn nichts faellig ist.
2. Nachdem der Lernende geantwortet hat, gibt `reveal_answer` den `backText`
   dieser Karte zurueck.
3. `submit_review` nimmt die `cardId`, eine clientseitig erzeugte
   `reviewId`-UUID, ein `rating` und die IANA-`reviewedTimeZone` des Lernenden
   entgegen. Der Server setzt die Review-Zeit und gibt den neuen
   Wiederholungsplan der Karte zurueck.

Sende eine unsichere Uebermittlung mit derselben `reviewId` erneut; dabei wird nie
ein zweites Review erfasst. Eine Uebermittlung kann ausserdem folgende Antworten
liefern:

- `409 REVIEW_EVENT_CONFLICT` — das Review wurde bereits erfasst, und die
  Fehlerdetails enthalten den aktuellen Wiederholungsplan der Karte.
- `409 REVIEW_ID_CARD_MISMATCH` — die `reviewId` identifiziert bereits ein Review
  einer anderen Karte, daher wurde nichts gespeichert; sende erneut mit einer
  neuen `reviewId`.
- `409 REVIEW_STALE` — die gespeicherte Review-Zeit der Karte ist gleich oder
  spaeter als die aktuelle Serverzeit; wiederhole eine andere Karte.

Reviews werden nur ueber `submit_review` erfasst: SQL kann weder `review_events`
noch den FSRS-Planungszustand schreiben. Rufe `get_guide` mit dem Thema
`review_flow` auf, um die vollstaendigen Review- und Bewertungsregeln zu erhalten.

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
  `https://mcp.nibomo.com/.well-known/oauth-protected-resource`
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
Discovery-Nutzlast unter `https://api.nibomo.com/v1/`
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
- **Workspace-Geltungsbereich**: jede SQL-Anweisung und jedes Review ist auf
  einen Workspace beschraenkt, auf den du zugreifen kannst, entweder die von dir
  uebergebene `workspaceId` oder deinen ausgewaehlten Standard, ohne
  mandantenuebergreifenden Zugriff.
- **Strikte Argumente**: jedes Tool lehnt ein unbekanntes Argument ab, sodass eine
  falsch geschriebene `workspaceId` fehlschlaegt, statt gegen deinen
  Standard-Workspace ausgefuehrt zu werden.
- **Grenzwerte**: bis zu `100` Zeilen pro Anweisung, bis zu `50` Anweisungen pro
  Batch und eine Ergebnisgrenze von etwa `12k` Tokens. Mutations-Batches werden
  atomar angewendet.
- **Trennung von Lesen und Schreiben**: `sql_query`, `list_workspaces`,
  `get_guide`, `next_review_card` und `reveal_answer` sind strikt nur lesend
  (`readOnlyHint`) und reparieren keine Daten, berechnen keine Planung neu und
  aendern keinen Kartenzustand. `sql_execute` und `submit_review` sind die
  einzigen Schreib-Tools (`destructiveHint`): `sql_execute` schreibt Karten und
  Decks, und `submit_review` erfasst ein Review und schreibt den Plan seiner
  Karte fort.

Der gesamte Stack — App, Backend und Infrastruktur — ist Open Source und kann
[selbst gehostet](/docs/self-hosting/) werden, sodass du denselben Connector
gegen deine eigene Bereitstellung betreiben kannst.
