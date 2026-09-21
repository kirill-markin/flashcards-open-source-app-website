---
title: API-Referenz
description: Externe Agent-API fuer Discovery, OTP-Bootstrap, Workspace-Setup und die veroeffentlichten SQL-Lese- und Schreiboberflaechen.
---

## Ueberblick

Diese Seite dokumentiert den aktuellen externen KI-Agenten-Vertrag fuer Nibomo.

Wenn dein Client MCP spricht, ist der [MCP-Connector](/docs/mcp-connector/) der
einfachste Weg, dich zu verbinden, und er kapselt dieselbe Datenoberflaeche. Diese
Seite dokumentiert den HTTP-Vertrag fuer Discovery, SQL, Leitfaeden und Reviews,
den CLI-Agenten nutzen.

Starte am kanonischen Discovery-Einstiegspunkt:

```text
GET https://api.nibomo.com/v1/
```

Dieselbe Nutzlast ist auch unter `GET /v1/agent` verfuegbar, aber `/v1/` ist der primaere oeffentliche Einstiegspunkt.

Die Discovery-Antwort sagt einem Agenten, wie er:

- den E-Mail-OTP-Login startet
- das OTP gegen einen langlebigen API-Key tauscht
- Account-Kontext laedt
- einen Workspace erstellt oder auswaehlt
- ueber die veroeffentlichte SQL-Oberflaeche weiterarbeitet
- Referenz-Leitfaeden abruft und Karten einzeln wiederholt

## Laufzeit-Discovery und Quellcode

OpenAPI ist nicht verfuegbar. Die vier frueheren Spezifikations-URLs unten geben jetzt denselben JSON-Discovery-Hinweis mit `"openapiAvailable": false` statt eines Schemas zurueck:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

Verwenden Sie `GET https://api.nibomo.com/v1/` fuer die aktuelle Laufzeit-Discovery. Folgen Sie dem zurueckgegebenen `docs.discoveryUrl` fuer Laufzeit-Routen und `docs.source.agentRoutesUrl` fuer Implementierungsdetails.

## Auth-Bootstrap

Der OTP-Bootstrap laeuft ueber den Auth-Service:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

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

Beispielhafte Bootstrap-Sequenz:

```bash
curl https://api.nibomo.com/v1/
```

```bash
curl -X POST https://auth.nibomo.com/api/agent/send-code \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com"}'
```

```bash
curl -X POST https://auth.nibomo.com/api/agent/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "code":"12345678",
    "otpSessionToken":"...",
    "label":"Codex on MacBook"
  }'
```

## Agent-Oberflaeche nach dem Login

Nach erfolgreicher Verifikation umfasst die aktuelle Oberflaeche:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (nur lesend)
- `POST /v1/agent/sql/execute` (schreibend)
- `GET /v1/agent/guide/{topic}` (nur lesend)
- `POST /v1/agent/reviews/next` (nur lesend)
- `POST /v1/agent/reviews/reveal` (nur lesend)
- `POST /v1/agent/reviews/submit` (schreibend)

Ein typischer Bootstrap sieht so aus:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. Falls noetig `POST /v1/agent/workspaces` mit `{"name":"Personal"}`
4. Falls noetig `POST /v1/agent/workspaces/{workspaceId}/select`
5. Danach `POST /v1/agent/sql/query` fuer Lesevorgaenge und `POST /v1/agent/sql/execute` fuer Schreibvorgaenge

Die Workspace-Auswahl ist pro API-Key-Verbindung explizit. Agenten sollten dem zurueckgegebenen Text in `instructions` und `docs.discoveryUrl` fuer Laufzeit-Routen sowie `docs.source.agentRoutesUrl` fuer Implementierungsdetails folgen, statt den naechsten Schritt zu raten.

Die SQL- und Review-Routen akzeptieren im JSON-Body ausserdem eine optionale `workspaceId`. Sie adressiert diesen Workspace fuer einen einzelnen Aufruf, ohne die Auswahl zu aendern; lass sie weg, um den ausgewaehlten Workspace zu verwenden. Ohne Auswahl und ohne `workspaceId` antworten sie mit `409 WORKSPACE_SELECTION_REQUIRED`.

## SQL-Oberflaeche

`POST /v1/agent/sql/query` ist die strikt nur lesende Oberflaeche (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`) und `POST /v1/agent/sql/execute` ist die Schreib-Oberflaeche (`INSERT`, `UPDATE`, `DELETE`); ein einzelner Aufruf muss entweder ausschliesslich Lese- oder ausschliesslich Schreibvorgaenge enthalten.

Sie ist absichtlich eingeschraenkt und kein vollstaendiges PostgreSQL. Diese
Dokumentation beschreibt nur den unterstuetzten Dialekt, keine
PostgreSQL-Kompatibilitaetsreferenz.

Kein Lesepfad repariert Daten, berechnet Planung neu oder aendert
Kartenzustand. Verwende `POST /v1/agent/sql/execute` fuer jeden Schreibvorgang
an Karten und Decks. SQL kann weder `review_events` noch den
FSRS-Planungszustand schreiben; erfasse Reviews ueber
`POST /v1/agent/reviews/submit`.

Aktuelle Statement-Familien:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
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
- jeder SQL-Aufruf ist auf einen Workspace beschraenkt: die `workspaceId` im Body oder den ausgewaehlten Workspace

Beispielanfrage:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Beispiel fuer eine Kartenabfrage:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Beispiel fuer eine Mutation:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

Ein entfernter MCP-Server ist ebenfalls unter `https://mcp.nibomo.com/mcp` mit OAuth 2.1 (Dynamic Client Registration + PKCE) verfuegbar. Er stellt dieselbe SQL-Aufteilung als `sql_query` (strikt nur lesend) und `sql_execute` (schreibend) bereit, plus `list_workspaces`, `get_guide` und die Review-Tools `next_review_card`, `reveal_answer` und `submit_review`; siehe den [MCP-Connector](/docs/mcp-connector/).

### Sicherheit und Geltungsbereich

Die SQL-Oberflaeche ist ein abgesicherter, vom Parser erzwungener Dialekt und kein vollstaendiges PostgreSQL. Die Schutzmechanismen sind:

- **Geschlossene Anweisungsliste**: nur `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` und `SELECT` zum Lesen sowie `INSERT`, `UPDATE` und `DELETE` zum Schreiben. Alles andere wird beim Parsen abgelehnt.
- **Begrenzte Ressourcen**: Anweisungen koennen nur die Ressourcen `workspace`, `cards`, `decks` und `review_events` betreffen.
- **Workspace-Geltungsbereich**: jede Anweisung ist auf einen Workspace beschraenkt, auf den du zugreifen kannst, entweder die `workspaceId` im Request-Body oder deinen ausgewaehlten Workspace, ohne mandantenuebergreifenden Zugriff.
- **Strikte Request-Bodies**: die SQL- und Review-Routen lehnen ein unbekanntes Body-Feld ab, sodass eine falsch geschriebene `workspaceId` fehlschlaegt, statt gegen den ausgewaehlten Workspace ausgefuehrt zu werden.
- **Grenzwerte**: bis zu `100` Zeilen pro Anweisung, bis zu `50` Anweisungen pro Batch und eine Ergebnisgrenze von etwa `12k` Tokens. Mutations-Batches werden atomar angewendet.
- **Trennung von Lesen und Schreiben**: `sql_query` und `list_workspaces` sind strikt nur lesend (`readOnlyHint`) und reparieren keine Daten, berechnen keine Planung neu und aendern keinen Kartenzustand. `sql_execute` ist das einzige SQL-Schreib-Tool und fuehrt Schreibvorgaenge aus (`destructiveHint`); ein einzelner Aufruf muss vollstaendig lesend oder vollstaendig schreibend sein. SQL kann weder `review_events` noch den FSRS-Planungszustand schreiben; nur `POST /v1/agent/reviews/submit` (MCP `submit_review`) erfasst ein Review.

## Leitfaeden

`GET /v1/agent/guide/{topic}` gibt einen Referenz-Leitfaden in `data.guide` zurueck, denselben Inhalt, den das MCP-Tool `get_guide` liefert. Themen:

- `sql_dialect`: die vollstaendige SQL-Grammatik, Grenzwerte und Beispiele
- `card_authoring`: der Karten-Vertrag, Tags, Duplikatpruefungen und Formatierung
- `bulk_authoring`: einen grossen Schreibauftrag aufteilen und ueberpruefen
- `review_flow`: die Review- und Bewertungsschleife

Ein unbekanntes Thema liefert `400` mit der Liste der unterstuetzten Themen. Rufe den passenden Leitfaden ab, bevor du Karten verfasst, in grossen Mengen schreibst oder ein Review durchfuehrst, und lies `sql_dialect` nach einer abgelehnten Anweisung erneut.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## Reviews

Mit den Review-Routen kann ein Agent einen Lernenden Karte fuer Karte abfragen und jede Bewertung im FSRS-Wiederholungsplan der Karte speichern. Sie nehmen dieselben JSON-Argumente entgegen wie die MCP-Review-Tools:

- `POST /v1/agent/reviews/next` gibt `card` mit `cardId` und `frontText` zurueck, oder `card: null`, wenn nichts faellig ist. Optionale `tags` (beliebiges davon) oder `deckId` grenzen die Warteschlange ein, nie beides; eine Anfrage ohne Body ist gueltig.
- `POST /v1/agent/reviews/reveal` erfordert `cardId` und gibt den `backText` dieser Karte zurueck.
- `POST /v1/agent/reviews/submit` erfordert `cardId`, eine clientseitig erzeugte `reviewId`-UUID, ein `rating` aus `Again`, `Hard`, `Good` oder `Easy` sowie die IANA-`reviewedTimeZone` des Lernenden. Der Server setzt die Review-Zeit und gibt den neuen Wiederholungsplan der Karte zurueck, einschliesslich `dueAt`, `state`, `reps` und `lapses`.

Alle drei Routen akzeptieren die optionale `workspaceId`. Speichere die `reviewId` vor dem Absenden und sende eine unsichere Uebermittlung mit der identischen Anfrage erneut; dabei wird nie ein zweites Review erfasst. Die Review-Routen koennen ausserdem folgende Antworten liefern:

- `409 REVIEW_EVENT_CONFLICT`: das Review wurde bereits erfasst, und `error.details.reviewSchedule` enthaelt den aktuellen Wiederholungsplan der Karte.
- `409 REVIEW_ID_CARD_MISMATCH`: die `reviewId` identifiziert bereits ein Review einer anderen Karte, daher wurde nichts gespeichert; sende erneut mit einer neuen `reviewId`.
- `409 REVIEW_STALE`: die gespeicherte Review-Zeit der Karte ist gleich oder spaeter als die aktuelle Serverzeit; wiederhole eine andere Karte.
- `400 REVIEW_INPUT_INVALID`: ein Argument fehlt, ist ungueltig oder wird nicht unterstuetzt, einschliesslich `tags` zusammen mit `deckId` oder eines Tags, das der Workspace nicht verwendet.

Beispiel fuer eine Uebermittlung:

```bash
curl -X POST https://api.nibomo.com/v1/agent/reviews/submit \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "cardId":"693c4863-28a2-45e8-8f55-9fa31fc95ff2",
    "reviewId":"429bb7cc-40fb-49f3-bb50-48a5db2826d1",
    "rating":"Good",
    "reviewedTimeZone":"Europe/Sofia"
  }'
```

## Menschliche und Sync-APIs

Nibomo enthaelt auch separate APIs fuer menschliche Clients und Offline-First-Sync, aber sie sind nicht der Hauptvertrag fuer externe Agenten:

- Browser-Flows nutzen Shared-Domain-Cookies plus CSRF-Schutz
- Offline-First-Clients verwenden die implementierten Sync-Routen unter `/v1/workspaces/{workspaceId}/sync/push` und `/v1/workspaces/{workspaceId}/sync/pull`
- Sync-Routen sind von der externen Agent-Oberflaeche getrennt
