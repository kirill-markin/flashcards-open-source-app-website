---
title: API-referens
description: API för externa agenter med discovery, OTP-uppstart, konfiguration av arbetsyta och de publicerade SQL-ytorna för läsning och skrivning.
---

## Översikt

Den här sidan dokumenterar det nuvarande kontraktet för externa AI-agenter i Nibomo.

Om din klient stöder MCP är [MCP-kopplingen](/docs/mcp-connector/) det
enklaste sättet att ansluta, och den omsluter samma datayta. Den här sidan dokumenterar
kontraktet för HTTP-discovery, SQL, guider och repetitioner som CLI-agenter använder.

Börja från den kanoniska startpunkten för discovery:

```text
GET https://api.nibomo.com/v1/
```

Samma discovery-innehåll finns också på `GET /v1/agent`, men `/v1/` är den primära publika startpunkten.

Discovery-svaret talar om för en agent hur den ska:

- starta inloggning med engångskod via e-post
- byta engångskoden mot en långlivad API-nyckel
- läsa in kontokontext
- skapa eller välja en arbetsyta
- fortsätta via den publicerade SQL-ytan
- hämta referensguider och repetera kort ett i taget

## Discovery och källkod vid körning

OpenAPI är inte tillgängligt. De fyra tidigare specifikations-URL:erna nedan returnerar nu samma JSON-meddelande från discovery med `"openapiAvailable": false` i stället för ett schema:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

Använd `GET https://api.nibomo.com/v1/` för aktuell discovery vid körning. Följ den returnerade `docs.discoveryUrl` för routes vid körning och `docs.source.agentRoutesUrl` för implementeringsdetaljer.

## Uppstart av autentisering

OTP-uppstarten körs på autentiseringstjänsten:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

Flödet är:

1. Anropa `GET /v1/`.
2. Skicka användarens e-postadress till `send-code`.
3. Läs `otpSessionToken` från svaret.
4. Be användaren om den senaste 8-siffriga koden från e-posten.
5. Anropa `verify-code` med `code`, `otpSessionToken` och `label`.
6. Spara den returnerade API-nyckeln utanför chattens minne.

Rekommenderad miljövariabel:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Autentiserade förfrågningar använder:

```text
Authorization: ApiKey <key>
```

Exempel på uppstartssekvens:

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

## Agentytan efter inloggning

Efter verifieringen består den nuvarande agentytan av:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (endast läsning)
- `POST /v1/agent/sql/execute` (skrivning)
- `GET /v1/agent/guide/{topic}` (endast läsning)
- `POST /v1/agent/reviews/next` (endast läsning)
- `POST /v1/agent/reviews/reveal` (endast läsning)
- `POST /v1/agent/reviews/submit` (skrivning)

En typisk uppstart ser ut så här:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. Vid behov `POST /v1/agent/workspaces` med `{"name":"Personal"}`
4. Vid behov `POST /v1/agent/workspaces/{workspaceId}/select`
5. Använd `POST /v1/agent/sql/query` för läsning och `POST /v1/agent/sql/execute` för skrivning

Valet av arbetsyta görs uttryckligen per anslutning med en API-nyckel. Agenter bör följa den returnerade texten i `instructions` och `docs.discoveryUrl` för routes vid körning, samt `docs.source.agentRoutesUrl` för implementeringsdetaljer, i stället för att gissa nästa steg.

SQL- och repetitions-routes accepterar också ett valfritt `workspaceId` i JSON-kroppen. Det riktar ett enskilt anrop mot den arbetsytan utan att ändra valet; utelämna det för att använda den valda arbetsytan. Om det varken finns ett val eller ett `workspaceId` svarar de med `409 WORKSPACE_SELECTION_REQUIRED`.

## SQL-ytan

`POST /v1/agent/sql/query` är den strikt skrivskyddade ytan (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`) och `POST /v1/agent/sql/execute` är skrivytan (`INSERT`, `UPDATE`, `DELETE`); ett enskilt anrop måste bestå av enbart läsningar eller enbart skrivningar.

Den är avsiktligt begränsad och är inte fullständig PostgreSQL. Den här dokumentationen
täcker bara den dialekt som stöds och är ingen referens för kompatibilitet med PostgreSQL.

Ingen läsväg reparerar data, räknar om schemaläggningen eller ändrar kortens tillstånd. Använd
`POST /v1/agent/sql/execute` för alla skrivningar av kort och kortlekar. SQL kan inte skriva
`review_events` eller FSRS-schemaläggningens tillstånd; registrera repetitioner via
`POST /v1/agent/reviews/submit`.

Nuvarande typer av satser:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

De publicerade logiska resurserna omfattar för närvarande:

- `workspace`
- `cards`
- `decks`
- `review_events`

Att tänka på:

- `LIMIT` är som standard `100` och begränsas till högst `100`
- använd `ORDER BY` när du behöver stabil paginering
- använd `SHOW TABLES` eller `DESCRIBE cards` för att utforska schemat
- varje SQL-anrop gäller en enda arbetsyta: `workspaceId` i kroppen eller den valda arbetsytan

Exempel på förfrågan:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Exempel på fråga som hämtar kort:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Exempel på ändring:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

En fjärransluten MCP-server finns också på `https://mcp.nibomo.com/mcp` med OAuth 2.1 (Dynamic Client Registration + PKCE). Den exponerar samma uppdelning av SQL som `sql_query` (strikt skrivskyddad) och `sql_execute` (skrivning), plus `list_workspaces`, `get_guide` och repetitionsverktygen `next_review_card`, `reveal_answer` och `submit_review`; se [MCP-kopplingen](/docs/mcp-connector/).

### Säkerhet och omfattning

SQL-ytan är en avgränsad dialekt som kontrolleras av en parser, inte rå PostgreSQL. Skyddsräckena är:

- **Stängd lista över tillåtna satser**: endast `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` och `SELECT` för läsning, och `INSERT`, `UPDATE` och `DELETE` för skrivning. Allt annat avvisas vid parsningen.
- **Begränsade resurser**: satser kan bara röra resurserna `workspace`, `cards`, `decks` och `review_events`.
- **Avgränsning per arbetsyta**: varje sats gäller en enda arbetsyta som du har åtkomst till, antingen `workspaceId` i förfrågans kropp eller din valda arbetsyta, utan åtkomst mellan olika tenants.
- **Strikta förfrågningskroppar**: SQL- och repetitions-routes avvisar okända fält i kroppen, så ett felstavat `workspaceId` misslyckas i stället för att köras mot den valda arbetsytan.
- **Tak**: upp till `100` rader per sats, upp till `50` satser per batch och ett tak för resultatet på ungefär `12k` tokens. Ändringsbatcher tillämpas atomärt.
- **Uppdelning mellan läsning och skrivning**: `sql_query` och `list_workspaces` är strikt skrivskyddade (`readOnlyHint`) och reparerar aldrig data, räknar aldrig om schemaläggningen och ändrar aldrig kortens tillstånd. `sql_execute` är det enda SQL-verktyget för skrivning och utför skrivningar (`destructiveHint`); ett enskilt anrop måste bestå av enbart läsningar eller enbart skrivningar. SQL kan inte skriva `review_events` eller FSRS-schemaläggningens tillstånd; endast `POST /v1/agent/reviews/submit` (MCP `submit_review`) registrerar en repetition.

## Guider

`GET /v1/agent/guide/{topic}` returnerar en referensguide i `data.guide`, samma innehåll som MCP-verktyget `get_guide` levererar. Ämnen:

- `sql_dialect`: den fullständiga SQL-grammatiken, gränser och exempel
- `card_authoring`: kortkontraktet, taggar, dubblettkontroller och formatering
- `bulk_authoring`: att dela upp och verifiera ett stort skrivjobb
- `review_flow`: loopen för repetition och bedömning

Ett okänt ämne ger svaret `400` med en lista över de ämnen som stöds. Hämta den relevanta guiden innan du skapar kort, skriver i stora mängder eller kör en repetition, och läs `sql_dialect` igen efter en avvisad sats.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## Repetitioner

Med repetitions-routes kan en agent förhöra användaren på ett kort i taget och spara varje bedömning i kortets FSRS-schema. De tar samma JSON-argument som MCP-verktygen för repetition:

- `POST /v1/agent/reviews/next` returnerar `card` med `cardId` och `frontText`, eller `card: null` när inget står på tur. Valfria `tags` (matchar någon av dem) eller `deckId` begränsar kön, men aldrig båda samtidigt; en förfrågan utan kropp är giltig.
- `POST /v1/agent/reviews/reveal` kräver `cardId` och returnerar kortets `backText`.
- `POST /v1/agent/reviews/submit` kräver `cardId`, ett klientgenererat `reviewId` i form av en UUID, en `rating` som är `Again`, `Hard`, `Good` eller `Easy`, samt användarens IANA-tidszon `reviewedTimeZone`. Servern sätter tidpunkten för repetitionen och returnerar kortets nya schema, inklusive `dueAt`, `state`, `reps` och `lapses`.

Alla tre routes accepterar det valfria `workspaceId`. Spara `reviewId` innan du skickar in. Om du är osäker på om en inskickning gick fram skickar du exakt samma förfrågan igen; den registrerar aldrig en andra repetition. Repetitions-routes kan också svara:

- `409 REVIEW_EVENT_CONFLICT`: repetitionen har redan registrerats, och `error.details.reviewSchedule` innehåller kortets nuvarande schema.
- `409 REVIEW_ID_CARD_MISMATCH`: `reviewId` identifierar redan en repetition av ett annat kort, så ingenting sparades; skicka in igen med ett nytt `reviewId`.
- `409 REVIEW_STALE`: kortets lagrade repetitionstid är samma som eller senare än serverns aktuella tid; repetera ett annat kort.
- `400 REVIEW_INPUT_INVALID`: ett argument saknas, är ogiltigt eller stöds inte, inklusive `tags` i kombination med `deckId` eller en tagg som arbetsytan inte använder.

Exempel på inskickning:

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

## API:er för människor och synk

Nibomo innehåller också separata API:er för mänskliga klienter och offline-först-synk, men de är inte huvudkontraktet för externa agenter:

- webbläsarflöden använder cookies på delad domän plus CSRF-skydd
- offline-först-klienter använder implementerade synk-routes under `/v1/workspaces/{workspaceId}/sync/push` och `/v1/workspaces/{workspaceId}/sync/pull`
- synk-routes är separata från ytan för externa agenter
