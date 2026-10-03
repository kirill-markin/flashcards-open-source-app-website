---
title: API-reference
description: API til eksterne agenter med discovery, opstart med engangskode, opsætning af arbejdsområder og de offentliggjorte SQL-grænseflader til læsning og skrivning.
---

## Oversigt

Denne side dokumenterer den nuværende kontrakt for eksterne AI-agenter i Nibomo.

Hvis din klient understøtter MCP, er [MCP-connectoren](/docs/mcp-connector/) den
enkleste måde at forbinde på, og den bygger oven på den samme datagrænseflade. Denne side dokumenterer
kontrakten for HTTP-discovery, SQL, vejledninger og repetition, som CLI-agenter bruger.

Start fra det kanoniske indgangspunkt for discovery:

```text
GET https://api.nibomo.com/v1/
```

Det samme discovery-svar findes også på `GET /v1/agent`, men `/v1/` er det primære offentlige indgangspunkt.

Discovery-svaret fortæller en agent, hvordan den skal:

- starte login med engangskode på e-mail
- veksle engangskoden til en langtidsgyldig API-nøgle
- indlæse kontokonteksten
- oprette eller vælge et arbejdsområde
- fortsætte via den offentliggjorte SQL-grænseflade
- hente referencevejledninger og repetere kort ét ad gangen

## Discovery og kildekode under kørsel

OpenAPI er ikke tilgængeligt. De fire tidligere specifikations-URL'er nedenfor returnerer nu den samme JSON-meddelelse fra discovery med `"openapiAvailable": false` i stedet for et skema:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

Brug `GET https://api.nibomo.com/v1/` til aktuel discovery under kørsel. Følg den returnerede `docs.discoveryUrl` for ruter under kørsel og `docs.source.agentRoutesUrl` for implementeringsdetaljer.

## Opstart af godkendelse

Opstarten med engangskode kører på godkendelsestjenesten:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

Forløbet er:

1. Kald `GET /v1/`.
2. Send brugerens e-mail til `send-code`.
3. Læs `otpSessionToken` fra svaret.
4. Bed brugeren om den seneste 8-cifrede kode fra e-mailen.
5. Kald `verify-code` med `code`, `otpSessionToken` og `label`.
6. Gem den returnerede API-nøgle uden for chattens hukommelse.

Anbefalet miljøvariabel:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Godkendte forespørgsler bruger:

```text
Authorization: ApiKey <key>
```

Eksempel på en opstartssekvens:

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

## Agentgrænseflade efter login

Efter verificeringen består den nuværende agentgrænseflade af:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (kun læsning)
- `POST /v1/agent/sql/execute` (skrivning)
- `GET /v1/agent/guide/{topic}` (kun læsning)
- `POST /v1/agent/reviews/next` (kun læsning)
- `POST /v1/agent/reviews/reveal` (kun læsning)
- `POST /v1/agent/reviews/submit` (skrivning)

En typisk opstart ser sådan ud:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. Om nødvendigt `POST /v1/agent/workspaces` med `{"name":"Personal"}`
4. Om nødvendigt `POST /v1/agent/workspaces/{workspaceId}/select`
5. Brug `POST /v1/agent/sql/query` til læsning og `POST /v1/agent/sql/execute` til skrivning

Valget af arbejdsområde er eksplicit for hver forbindelse med en API-nøgle. Agenter bør følge den returnerede `instructions`-tekst og `docs.discoveryUrl` for ruter under kørsel samt `docs.source.agentRoutesUrl` for implementeringsdetaljer i stedet for at gætte det næste trin.

SQL- og repetitionsruterne accepterer også et valgfrit `workspaceId` i JSON-bodyen. Feltet retter et enkelt kald mod det pågældende arbejdsområde uden at ændre valget; udelad det for at bruge det valgte arbejdsområde. Er der hverken valgt et arbejdsområde eller angivet et `workspaceId`, svarer de med `409 WORKSPACE_SELECTION_REQUIRED`.

## SQL-grænseflade

`POST /v1/agent/sql/query` er grænsefladen udelukkende til læsning (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`), og `POST /v1/agent/sql/execute` er grænsefladen til skrivning (`INSERT`, `UPDATE`, `DELETE`); et enkelt kald skal enten kun læse eller kun skrive.

Den er bevidst begrænset og er ikke fuld PostgreSQL. Denne dokumentation dækker kun
den understøttede dialekt og er ikke en reference for kompatibilitet med PostgreSQL.

Ingen læseoperation reparerer data, genberegner planlægningen eller ændrer kortenes tilstand. Brug
`POST /v1/agent/sql/execute` til al skrivning af kort og bunker. SQL kan ikke skrive
`review_events` eller FSRS-planlægningstilstand; registrér repetitioner via
`POST /v1/agent/reviews/submit`.

Nuværende sætningstyper:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

Offentliggjorte logiske ressourcer omfatter i øjeblikket:

- `workspace`
- `cards`
- `decks`
- `review_events`

Bemærkninger:

- `LIMIT` er som standard `100` og kan højst være `100`
- brug `ORDER BY`, når du har brug for stabil paginering
- brug `SHOW TABLES` eller `DESCRIBE cards` til at udforske skemaet
- hvert SQL-kald er afgrænset til ét arbejdsområde: `workspaceId` i bodyen eller det valgte arbejdsområde

Eksempel på en forespørgsel:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Eksempel på en forespørgsel efter kort:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Eksempel på en ændring:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

En remote MCP-server er også tilgængelig på `https://mcp.nibomo.com/mcp` med OAuth 2.1 (Dynamic Client Registration + PKCE). Den udstiller den samme opdeling af SQL i `sql_query` (udelukkende læsning) og `sql_execute` (skrivning) samt `list_workspaces`, `get_guide` og repetitionsværktøjerne `next_review_card`, `reveal_answer` og `submit_review`; se [MCP-connectoren](/docs/mcp-connector/).

### Sikkerhed og afgrænsning

SQL-grænsefladen er en lukket dialekt, som en parser håndhæver, og ikke rå PostgreSQL. Sikkerhedsværnene er:

- **Lukket liste over tilladte sætninger**: kun `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` og `SELECT` til læsning og `INSERT`, `UPDATE` og `DELETE` til skrivning. Alt andet afvises allerede ved parsingen.
- **Begrænsede ressourcer**: sætninger kan kun berøre ressourcerne `workspace`, `cards`, `decks` og `review_events`.
- **Afgrænsning pr. arbejdsområde**: hver sætning er afgrænset til ét arbejdsområde, du har adgang til, enten `workspaceId` i forespørgslens body eller dit valgte arbejdsområde, uden adgang på tværs af lejere.
- **Strenge request-bodies**: SQL- og repetitionsruterne afviser ukendte felter i bodyen, så et fejlstavet `workspaceId` giver en fejl i stedet for at blive kørt mod det valgte arbejdsområde.
- **Lofter**: op til `100` rækker pr. sætning, op til `50` sætninger pr. batch og et loft over resultatet på cirka `12k` tokens. Batches med ændringer udføres atomisk.
- **Opdeling i læsning og skrivning**: `sql_query` og `list_workspaces` er udelukkende til læsning (`readOnlyHint`) og reparerer aldrig data, genberegner ikke planlægningen og ændrer ikke kortenes tilstand. `sql_execute` er det eneste SQL-værktøj til skrivning og udfører skrivninger (`destructiveHint`); et enkelt kald skal enten kun læse eller kun skrive. SQL kan ikke skrive `review_events` eller FSRS-planlægningstilstand; kun `POST /v1/agent/reviews/submit` (MCP `submit_review`) registrerer en repetition.

## Vejledninger

`GET /v1/agent/guide/{topic}` returnerer én referencevejledning i `data.guide`, med samme indhold som MCP-værktøjet `get_guide` leverer. Emner:

- `sql_dialect`: hele SQL-grammatikken, grænser og eksempler
- `card_authoring`: kortkontrakten, tags, tjek for dubletter og formatering
- `bulk_authoring`: opdeling og verificering af et stort skrivejob
- `review_flow`: forløbet for repetition og bedømmelse

Et ukendt emne giver svaret `400` med listen over understøttede emner. Hent den relevante vejledning, før du opretter kort, skriver i store mængder eller kører en repetition, og læs `sql_dialect` igen, efter en sætning er blevet afvist.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## Repetitioner

Repetitionsruterne lader en agent overhøre en lærende ét kort ad gangen og gemme hver bedømmelse i kortets FSRS-plan. De tager de samme JSON-argumenter som MCP-værktøjerne til repetition:

- `POST /v1/agent/reviews/next` returnerer `card` med `cardId` og `frontText` eller `card: null`, når intet forfalder. Et valgfrit `tags` (kort med mindst ét af taggene) eller et `deckId` afgrænser køen, men aldrig begge på én gang; en forespørgsel uden body er gyldig.
- `POST /v1/agent/reviews/reveal` kræver `cardId` og returnerer kortets `backText`.
- `POST /v1/agent/reviews/submit` kræver `cardId`, et `reviewId` i form af et UUID genereret af klienten, en `rating` med værdien `Again`, `Hard`, `Good` eller `Easy` samt den lærendes IANA-`reviewedTimeZone`. Serveren tidsstempler repetitionen og returnerer kortets nye plan, herunder `dueAt`, `state`, `reps` og `lapses`.

Alle tre ruter accepterer det valgfrie `workspaceId`. Gem `reviewId`, før du indsender, og send præcis den samme forespørgsel igen, hvis du er i tvivl om, hvorvidt en indsendelse gik igennem; det registrerer aldrig en repetition to gange. Repetitionsruterne kan også svare med:

- `409 REVIEW_EVENT_CONFLICT`: repetitionen er allerede registreret, og `error.details.reviewSchedule` indeholder kortets nuværende plan.
- `409 REVIEW_ID_CARD_MISMATCH`: `reviewId` identificerer allerede en repetition af et andet kort, så intet blev gemt; indsend igen med et nyt `reviewId`.
- `409 REVIEW_STALE`: kortets gemte repetitionstidspunkt er lig med eller senere end serverens nuværende tid; repeter et andet kort.
- `400 REVIEW_INPUT_INVALID`: et argument mangler, er ugyldigt eller understøttes ikke, herunder `tags` kombineret med `deckId` eller et tag, som arbejdsområdet ikke bruger.

Eksempel på en indsendelse:

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

## API'er til mennesker og synkronisering

Nibomo har også separate API'er til klienter, som mennesker bruger, og til offline-first-synkronisering, men de er ikke hovedkontrakten for eksterne agenter:

- browserflows bruger cookies på det fælles domæne plus CSRF-beskyttelse
- offline-first-klienter bruger de implementerede synkroniseringsruter under `/v1/workspaces/{workspaceId}/sync/push` og `/v1/workspaces/{workspaceId}/sync/pull`
- synkroniseringsruterne er adskilt fra grænsefladen for eksterne agenter
