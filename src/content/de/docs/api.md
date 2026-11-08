---
title: API-Referenz
description: Externe Agent-API für Discovery, OTP-Bootstrap, Workspace-Setup und die veröffentlichten SQL-Lese- und Schreiboberflächen.
---

## Überblick

Diese Seite dokumentiert den aktuellen externen KI-Agenten-Vertrag für Nibomo.

Wenn dein Client MCP spricht, ist der [MCP-Connector](/docs/mcp-connector/) der
einfachste Weg, dich zu verbinden, und er kapselt dieselbe Datenoberfläche. Diese
Seite dokumentiert den HTTP-Vertrag für Discovery, SQL, Leitfäden und Reviews,
den CLI-Agenten nutzen.

Starte am kanonischen Discovery-Einstiegspunkt:

```text
GET https://api.nibomo.com/v1/
```

Dieselbe Nutzlast ist auch unter `GET /v1/agent` verfügbar, aber `/v1/` ist der primäre öffentliche Einstiegspunkt.

Die Discovery-Antwort sagt einem Agenten, wie er:

- den E-Mail-OTP-Login startet
- das OTP gegen einen langlebigen API-Key tauscht
- Account-Kontext lädt
- einen Workspace erstellt oder auswählt
- über die veröffentlichte SQL-Oberfläche weiterarbeitet
- Referenz-Leitfäden abruft und Karten einzeln wiederholt

## Laufzeit-Discovery und Quellcode

OpenAPI ist nicht verfügbar. Die vier früheren Spezifikations-URLs unten geben jetzt denselben JSON-Discovery-Hinweis mit `"openapiAvailable": false` statt eines Schemas zurück:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

Verwenden Sie `GET https://api.nibomo.com/v1/` für die aktuelle Laufzeit-Discovery. Folgen Sie dem zurückgegebenen `docs.discoveryUrl` für Laufzeit-Routen und `docs.source.agentRoutesUrl` für Implementierungsdetails.

## Auth-Bootstrap

Der OTP-Bootstrap läuft über den Auth-Service:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

Der Ablauf:

1. Rufe `GET /v1/` auf.
2. Sende die E-Mail des Nutzers an `send-code`.
3. Lies `otpSessionToken` aus der Antwort.
4. Bitte den Nutzer um den neuesten 8-stelligen Code aus der E-Mail.
5. Rufe `verify-code` mit `code`, `otpSessionToken` und `label` auf.
6. Speichere den zurückgegebenen API-Key außerhalb des Chat-Speichers.

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

## Agent-Oberfläche nach dem Login

Nach erfolgreicher Verifikation umfasst die aktuelle Oberfläche:

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
3. Falls nötig `POST /v1/agent/workspaces` mit `{"name":"Personal"}`
4. Falls nötig `POST /v1/agent/workspaces/{workspaceId}/select`
5. Danach `POST /v1/agent/sql/query` für Lesevorgänge und `POST /v1/agent/sql/execute` für Schreibvorgänge

Die Workspace-Auswahl ist pro API-Key-Verbindung explizit. Agenten sollten dem zurückgegebenen Text in `instructions` und `docs.discoveryUrl` für Laufzeit-Routen sowie `docs.source.agentRoutesUrl` für Implementierungsdetails folgen, statt den nächsten Schritt zu raten.

Die SQL- und Review-Routen akzeptieren im JSON-Body außerdem eine optionale `workspaceId`. Sie adressiert diesen Workspace für einen einzelnen Aufruf, ohne die Auswahl zu ändern; lass sie weg, um den ausgewählten Workspace zu verwenden. Ohne Auswahl und ohne `workspaceId` antworten sie mit `409 WORKSPACE_SELECTION_REQUIRED`.

## SQL-Oberfläche

`POST /v1/agent/sql/query` ist die strikt nur lesende Oberfläche (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`) und `POST /v1/agent/sql/execute` ist die Schreib-Oberfläche (`INSERT`, `UPDATE`, `DELETE`); ein einzelner Aufruf muss entweder ausschließlich Lese- oder ausschließlich Schreibvorgänge enthalten.

Sie ist absichtlich eingeschränkt und kein vollständiges PostgreSQL. Diese
Dokumentation beschreibt nur den unterstützten Dialekt, keine
PostgreSQL-Kompatibilitätsreferenz.

Kein Lesepfad repariert Daten, berechnet Planung neu oder ändert
Kartenzustand. Verwende `POST /v1/agent/sql/execute` für jeden Schreibvorgang
an Karten und Decks. SQL kann weder `review_events` noch den
FSRS-Planungszustand schreiben; erfasse Reviews über
`POST /v1/agent/reviews/submit`.

Aktuelle Statement-Familien:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

Veröffentlichte logische Ressourcen sind derzeit:

- `workspace`
- `cards`
- `decks`
- `review_events`

Hinweise:

- `LIMIT` ist standardmäßig `100` und maximal `100`
- verwende `ORDER BY`, wenn du stabile Pagination brauchst
- nutze `SHOW TABLES` oder `DESCRIBE cards` für Schema-Discovery
- jeder SQL-Aufruf ist auf einen Workspace beschränkt: die `workspaceId` im Body oder den ausgewählten Workspace

Beispielanfrage:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Beispiel für eine Kartenabfrage:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Beispiel für eine Mutation:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

Ein entfernter MCP-Server ist ebenfalls unter `https://mcp.nibomo.com/mcp` mit OAuth 2.1 (Dynamic Client Registration + PKCE) verfügbar. Er stellt dieselbe SQL-Aufteilung als `sql_query` (strikt nur lesend) und `sql_execute` (schreibend) bereit, plus `list_workspaces`, `get_guide` und die Review-Tools `next_review_card`, `reveal_answer` und `submit_review`; siehe den [MCP-Connector](/docs/mcp-connector/).

### Sicherheit und Geltungsbereich

Die SQL-Oberfläche ist ein abgesicherter, vom Parser erzwungener Dialekt und kein vollständiges PostgreSQL. Die Schutzmechanismen sind:

- **Geschlossene Anweisungsliste**: nur `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` und `SELECT` zum Lesen sowie `INSERT`, `UPDATE` und `DELETE` zum Schreiben. Alles andere wird beim Parsen abgelehnt.
- **Begrenzte Ressourcen**: Anweisungen können nur die Ressourcen `workspace`, `cards`, `decks` und `review_events` betreffen.
- **Workspace-Geltungsbereich**: jede Anweisung ist auf einen Workspace beschränkt, auf den du zugreifen kannst, entweder die `workspaceId` im Request-Body oder deinen ausgewählten Workspace, ohne mandantenübergreifenden Zugriff.
- **Strikte Request-Bodies**: die SQL- und Review-Routen lehnen ein unbekanntes Body-Feld ab, sodass eine falsch geschriebene `workspaceId` fehlschlägt, statt gegen den ausgewählten Workspace ausgeführt zu werden.
- **Grenzwerte**: bis zu `100` Zeilen pro Anweisung, bis zu `50` Anweisungen pro Batch und eine Ergebnisgrenze von etwa `12k` Tokens. Mutations-Batches werden atomar angewendet.
- **Trennung von Lesen und Schreiben**: `sql_query` und `list_workspaces` sind strikt nur lesend (`readOnlyHint`) und reparieren keine Daten, berechnen keine Planung neu und ändern keinen Kartenzustand. `sql_execute` ist das einzige SQL-Schreib-Tool und führt Schreibvorgänge aus (`destructiveHint`); ein einzelner Aufruf muss vollständig lesend oder vollständig schreibend sein. SQL kann weder `review_events` noch den FSRS-Planungszustand schreiben; nur `POST /v1/agent/reviews/submit` (MCP `submit_review`) erfasst ein Review.

## Leitfäden

`GET /v1/agent/guide/{topic}` gibt einen Referenz-Leitfaden in `data.guide` zurück, denselben Inhalt, den das MCP-Tool `get_guide` liefert. Themen:

- `sql_dialect`: die vollständige SQL-Grammatik, Grenzwerte und Beispiele
- `card_authoring`: der Karten-Vertrag, Tags, Duplikatprüfungen und Formatierung
- `bulk_authoring`: einen großen Schreibauftrag aufteilen und überprüfen
- `review_flow`: die Review- und Bewertungsschleife

Ein unbekanntes Thema liefert `400` mit der Liste der unterstützten Themen. Rufe den passenden Leitfaden ab, bevor du Karten verfasst, in großen Mengen schreibst oder ein Review durchführst, und lies `sql_dialect` nach einer abgelehnten Anweisung erneut.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## Reviews

Mit den Review-Routen kann ein Agent einen Lernenden Karte für Karte abfragen und jede Bewertung im FSRS-Wiederholungsplan der Karte speichern. Sie nehmen dieselben JSON-Argumente entgegen wie die MCP-Review-Tools:

- `POST /v1/agent/reviews/next` gibt `card` mit `cardId` und `frontText` zurück, oder `card: null`, wenn nichts fällig ist. Optionale `tags` (beliebiges davon) oder `deckId` grenzen die Warteschlange ein, nie beides; eine Anfrage ohne Body ist gültig.
- `POST /v1/agent/reviews/reveal` erfordert `cardId` und gibt den `backText` dieser Karte zurück.
- `POST /v1/agent/reviews/submit` erfordert `cardId`, eine clientseitig erzeugte `reviewId`-UUID, ein `rating` aus `Again`, `Hard`, `Good` oder `Easy` sowie die IANA-`reviewedTimeZone` des Lernenden. Der Server setzt die Review-Zeit und gibt den neuen Wiederholungsplan der Karte zurück, einschließlich `dueAt`, `state`, `reps` und `lapses`.

Alle drei Routen akzeptieren die optionale `workspaceId`. Speichere die `reviewId` vor dem Absenden und sende eine unsichere Übermittlung mit der identischen Anfrage erneut; dabei wird nie ein zweites Review erfasst. Die Review-Routen können außerdem folgende Antworten liefern:

- `409 REVIEW_EVENT_CONFLICT`: das Review wurde bereits erfasst, und `error.details.reviewSchedule` enthält den aktuellen Wiederholungsplan der Karte.
- `409 REVIEW_ID_CARD_MISMATCH`: die `reviewId` identifiziert bereits ein Review einer anderen Karte, daher wurde nichts gespeichert; sende erneut mit einer neuen `reviewId`.
- `409 REVIEW_STALE`: die gespeicherte Review-Zeit der Karte ist gleich oder später als die aktuelle Serverzeit; wiederhole eine andere Karte.
- `400 REVIEW_INPUT_INVALID`: ein Argument fehlt, ist ungültig oder wird nicht unterstützt, einschließlich `tags` zusammen mit `deckId` oder eines Tags, das der Workspace nicht verwendet.

Beispiel für eine Übermittlung:

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

Nibomo enthält auch separate APIs für menschliche Clients und Offline-First-Sync, aber sie sind nicht der Hauptvertrag für externe Agenten:

- Browser-Flows nutzen Shared-Domain-Cookies plus CSRF-Schutz
- Offline-First-Clients verwenden die implementierten Sync-Routen unter `/v1/workspaces/{workspaceId}/sync/push` und `/v1/workspaces/{workspaceId}/sync/pull`
- Sync-Routen sind von der externen Agent-Oberfläche getrennt
