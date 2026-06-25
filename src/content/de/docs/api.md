---
title: API-Referenz
description: Externe Agent-API fuer Discovery, OTP-Bootstrap, Workspace-Setup und die veroeffentlichten SQL-Lese- und Schreiboberflaechen.
---

## Ueberblick

Diese Seite dokumentiert den aktuellen externen KI-Agenten-Vertrag fuer Flashcards.

Starte am kanonischen Discovery-Einstiegspunkt:

```text
GET https://api.flashcards-open-source-app.com/v1/
```

Dieselbe Nutzlast ist auch unter `GET /v1/agent` verfuegbar, aber `/v1/` ist der primaere oeffentliche Einstiegspunkt.

Die Discovery-Antwort sagt einem Agenten, wie er:

- den E-Mail-OTP-Login startet
- das OTP gegen einen langlebigen API-Key tauscht
- Account-Kontext laedt
- einen Workspace erstellt oder auswaehlt
- ueber die veroeffentlichte SQL-Oberflaeche weiterarbeitet

## Veroeffentlichte Spezifikationen

Primaere Spezifikations-URLs fuer die externe Agent-Oberflaeche:

- `https://api.flashcards-open-source-app.com/v1/agent/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/agent/swagger.json`

Gleichwertige Root-Aliase existieren ebenfalls:

- `https://api.flashcards-open-source-app.com/v1/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/swagger.json`

## Auth-Bootstrap

Der OTP-Bootstrap laeuft ueber den Auth-Service:

- `POST https://auth.flashcards-open-source-app.com/api/agent/send-code`
- `POST https://auth.flashcards-open-source-app.com/api/agent/verify-code`

Der Ablauf:

1. Rufe `GET /v1/` auf.
2. Sende die E-Mail des Nutzers an `send-code`.
3. Lies `otpSessionToken` aus der Antwort.
4. Bitte den Nutzer um den neuesten 8-stelligen Code aus der E-Mail.
5. Rufe `verify-code` mit `code`, `otpSessionToken` und `label` auf.
6. Speichere den zurueckgegebenen API-Key ausserhalb des Chat-Speichers.

Empfohlene Umgebungsvariable:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Authentifizierte Anfragen nutzen:

```text
Authorization: ApiKey <key>
```

## Agent-Oberflaeche nach dem Login

Nach erfolgreicher Verifikation umfasst die aktuelle Oberflaeche:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (nur lesend)
- `POST /v1/agent/sql/execute` (schreibend)

Ein typischer Bootstrap sieht so aus:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. Falls noetig `POST /v1/agent/workspaces` mit `{"name":"Personal"}`
4. Falls noetig `POST /v1/agent/workspaces/{workspaceId}/select`
5. Danach `POST /v1/agent/sql/query` fuer Lesevorgaenge und `POST /v1/agent/sql/execute` fuer Schreibvorgaenge

Die Workspace-Auswahl ist pro API-Key-Verbindung explizit. Agenten sollten dem zurueckgegebenen Text in `instructions` und dem Feld `docs.openapiUrl` folgen, statt den naechsten Schritt zu raten.

## SQL-Oberflaeche

`POST /v1/agent/sql/query` ist die strikt nur lesende Oberflaeche (`SHOW TABLES`, `DESCRIBE`, `SELECT`) und `POST /v1/agent/sql/execute` ist die Schreib-Oberflaeche (`INSERT`, `UPDATE`, `DELETE`); ein einzelner Aufruf muss entweder ausschliesslich Lese- oder ausschliesslich Schreibvorgaenge enthalten.

Sie ist absichtlich eingeschraenkt und kein vollstaendiges PostgreSQL. Diese
Dokumentation beschreibt nur den unterstuetzten Dialekt, keine
PostgreSQL-Kompatibilitaetsreferenz.

Kein Lesepfad repariert Daten, berechnet Planung neu oder aendert
Kartenzustand. Verwende `POST /v1/agent/sql/execute` fuer jeden Schreibvorgang.

Aktuelle Statement-Familien:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

Veroeffentlichte logische Ressourcen sind derzeit:

- `workspace`
- `cards`
- `decks`
- `review_events`

Hinweise:

- `LIMIT` ist standardmaessig `100` und maximal `100`
- verwende `ORDER BY`, wenn du stabile Pagination brauchst
- nutze `SHOW TABLES` oder `DESCRIBE cards` fuer Schema-Discovery
- der externe Agent-Vertrag ist nach der Auswahl auf den Workspace begrenzt

Beispielanfrage:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Ein entfernter MCP-Server ist ebenfalls unter `https://mcp.flashcards-open-source-app.com/mcp` mit OAuth 2.1 (Dynamic Client Registration + PKCE) verfuegbar. Er stellt dieselbe Aufteilung als zwei Tools bereit, `sql_query` (strikt nur lesend) und `sql_execute` (schreibend), plus strikt nur lesendes `list_workspaces`.

### Sicherheit und Geltungsbereich

Die SQL-Oberflaeche ist ein abgesicherter, vom Parser erzwungener Dialekt und kein vollstaendiges PostgreSQL. Die Schutzmechanismen sind:

- **Geschlossene Anweisungsliste**: nur `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` und `SELECT` zum Lesen sowie `INSERT`, `UPDATE` und `DELETE` zum Schreiben. Alles andere wird beim Parsen abgelehnt.
- **Begrenzte Ressourcen**: Anweisungen koennen nur die Ressourcen `workspace`, `cards`, `decks` und `review_events` betreffen.
- **Workspace-Geltungsbereich**: jede Anweisung ist auf den ausgewaehlten Workspace beschraenkt, ohne mandantenuebergreifenden Zugriff.
- **Grenzwerte**: bis zu `100` Zeilen pro Anweisung, bis zu `50` Anweisungen pro Batch und eine Ergebnisgrenze von etwa `12k` Tokens. Mutations-Batches werden atomar angewendet.
- **Trennung von Lesen und Schreiben**: `sql_query` und `list_workspaces` sind strikt nur lesend (`readOnlyHint`) und reparieren keine Daten, berechnen keine Planung neu und aendern keinen Kartenzustand. `sql_execute` ist das einzige Schreib-Tool und fuehrt Schreibvorgaenge aus (`destructiveHint`); ein einzelner Aufruf muss vollstaendig lesend oder vollstaendig schreibend sein.

## Menschliche und Sync-APIs

Flashcards enthaelt auch separate APIs fuer menschliche Clients und Offline-First-Sync, aber sie sind nicht der Hauptvertrag fuer externe Agenten:

- Browser-Flows nutzen Shared-Domain-Cookies plus CSRF-Schutz
- Offline-First-Clients verwenden die implementierten Sync-Routen unter `/v1/workspaces/{workspaceId}/sync/push` und `/v1/workspaces/{workspaceId}/sync/pull`
- Sync-Routen liegen absichtlich ausserhalb der externen Agent-OpenAPI-Oberflaeche
