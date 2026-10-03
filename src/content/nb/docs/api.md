---
title: API-referanse
description: "Ekstern agent-API for discovery, førstegangsoppsett med OTP, oppsett av arbeidsområder og de publiserte SQL-grensesnittene for lesing og skriving."
---

## Oversikt

Denne siden dokumenterer den nåværende kontrakten for eksterne AI-agenter i Nibomo.

Hvis klienten din støtter MCP, er [MCP-koblingen](/docs/mcp-connector/) den enkleste måten å koble til på, og den bygger på det samme datagrensesnittet. Denne siden dokumenterer kontrakten for HTTP-discovery, SQL, guider og repetisjon som CLI-agenter bruker.

Start fra det kanoniske discovery-inngangspunktet:

```text
GET https://api.nibomo.com/v1/
```

Det samme discovery-innholdet er også tilgjengelig på `GET /v1/agent`, men `/v1/` er det primære offentlige inngangspunktet.

Discovery-svaret forteller en agent hvordan den skal:

- starte innlogging med engangskode på e-post
- bytte engangskoden mot en langvarig API-nøkkel
- laste inn kontokonteksten
- opprette eller velge et arbeidsområde
- fortsette via det publiserte SQL-grensesnittet
- hente referanseguider og repetere kort ett om gangen

## Discovery under kjøring og kildekode

OpenAPI er ikke tilgjengelig. De fire tidligere spesifikasjons-URL-ene nedenfor returnerer nå den samme JSON-meldingen fra discovery med `"openapiAvailable": false` i stedet for et skjema:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

Bruk `GET https://api.nibomo.com/v1/` for gjeldende discovery under kjøring. Følg den returnerte `docs.discoveryUrl` for ruter under kjøring og `docs.source.agentRoutesUrl` for implementasjonsdetaljer.

## Førstegangsoppsett av autentisering

Førstegangsoppsettet med OTP kjører på autentiseringstjenesten:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

Flyten er:

1. Kall `GET /v1/`.
2. Send brukerens e-postadresse til `send-code`.
3. Les `otpSessionToken` fra svaret.
4. Be brukeren om den nyeste 8-sifrede koden fra e-posten.
5. Kall `verify-code` med `code`, `otpSessionToken` og `label`.
6. Lagre den returnerte API-nøkkelen utenfor chatminnet.

Anbefalt miljøvariabel:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Autentiserte forespørsler bruker:

```text
Authorization: ApiKey <key>
```

Eksempel på førstegangsoppsett:

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

## Agentgrensesnittet etter innlogging

Etter verifiseringen består det nåværende agentgrensesnittet av:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (bare lesing)
- `POST /v1/agent/sql/execute` (skriving)
- `GET /v1/agent/guide/{topic}` (bare lesing)
- `POST /v1/agent/reviews/next` (bare lesing)
- `POST /v1/agent/reviews/reveal` (bare lesing)
- `POST /v1/agent/reviews/submit` (skriving)

Et typisk førstegangsoppsett ser slik ut:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. Ved behov `POST /v1/agent/workspaces` med `{"name":"Personal"}`
4. Ved behov `POST /v1/agent/workspaces/{workspaceId}/select`
5. Bruk `POST /v1/agent/sql/query` for lesing og `POST /v1/agent/sql/execute` for skriving

Valget av arbeidsområde gjøres eksplisitt for hver API-nøkkeltilkobling. Agenter bør følge den returnerte `instructions`-teksten og `docs.discoveryUrl` for ruter under kjøring, i tillegg til `docs.source.agentRoutesUrl` for implementasjonsdetaljer, i stedet for å gjette seg til neste steg.

SQL- og repetisjonsrutene godtar også en valgfri `workspaceId` i JSON-innholdet. Den retter ett enkelt kall mot det arbeidsområdet uten å endre valget; utelat den for å bruke det valgte arbeidsområdet. Uten verken et valg eller en `workspaceId` svarer de med `409 WORKSPACE_SELECTION_REQUIRED`.

## SQL-grensesnittet

`POST /v1/agent/sql/query` er grensesnittet som utelukkende leser (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`), og `POST /v1/agent/sql/execute` er grensesnittet for skriving (`INSERT`, `UPDATE`, `DELETE`); ett enkelt kall må enten bare lese eller bare skrive.

Det er bevisst begrenset og er ikke fullverdig PostgreSQL. Denne dokumentasjonen dekker bare den støttede dialekten og er ingen referanse for kompatibilitet med PostgreSQL.

Ingen lesevei reparerer data, beregner repetisjonsplanen på nytt eller endrer korttilstanden. Bruk `POST /v1/agent/sql/execute` for all skriving av kort og kortstokker. SQL kan ikke skrive til `review_events` eller FSRS-planleggingstilstanden; registrer repetisjoner via `POST /v1/agent/reviews/submit`.

Nåværende setningstyper:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

De publiserte logiske ressursene omfatter for øyeblikket:

- `workspace`
- `cards`
- `decks`
- `review_events`

Merknader:

- `LIMIT` er `100` som standard og har en øvre grense på `100`
- bruk `ORDER BY` når du trenger stabil paginering
- bruk `SHOW TABLES` eller `DESCRIBE cards` for å utforske skjemaet
- hvert SQL-kall er avgrenset til ett arbeidsområde: `workspaceId` i forespørselsinnholdet eller det valgte arbeidsområdet

Eksempel på forespørsel:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Eksempel på kortspørring:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Eksempel på endring:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

En ekstern MCP-server er også tilgjengelig på `https://mcp.nibomo.com/mcp` med OAuth 2.1 (Dynamic Client Registration + PKCE). Den har den samme SQL-oppdelingen i `sql_query` (utelukkende lesing) og `sql_execute` (skriving), i tillegg til `list_workspaces`, `get_guide` og repetisjonsverktøyene `next_review_card`, `reveal_answer` og `submit_review`; se [MCP-koblingen](/docs/mcp-connector/).

### Sikkerhet og omfang

SQL-grensesnittet er en avgrenset dialekt som håndheves av en parser, ikke rå PostgreSQL. Sikkerhetsgrensene er:

- **Lukket liste over tillatte setninger**: bare `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` og `SELECT` for lesing, og `INSERT`, `UPDATE` og `DELETE` for skriving. Alt annet avvises allerede ved parsing.
- **Begrensede ressurser**: setninger kan bare berøre ressursene `workspace`, `cards`, `decks` og `review_events`.
- **Avgrensning per arbeidsområde**: hver setning er avgrenset til ett arbeidsområde du har tilgang til, enten `workspaceId` i forespørselsinnholdet eller det valgte arbeidsområdet ditt, uten tilgang på tvers av leietakere.
- **Strengt forespørselsinnhold**: SQL- og repetisjonsrutene avviser ukjente felt i innholdet, så en feilstavet `workspaceId` gir en feil i stedet for å kjøre mot det valgte arbeidsområdet.
- **Grenser**: opptil `100` rader per setning, opptil `50` setninger per batch og en grense for resultatet på omtrent `12k` tokens. Endringsbatcher utføres atomisk.
- **Skille mellom lesing og skriving**: `sql_query` og `list_workspaces` er utelukkende for lesing (`readOnlyHint`) og reparerer aldri data, beregner aldri repetisjonsplanen på nytt og endrer aldri korttilstanden. `sql_execute` er det eneste SQL-verktøyet for skriving og utfører skriveoperasjoner (`destructiveHint`); ett enkelt kall må enten bare lese eller bare skrive. SQL kan ikke skrive til `review_events` eller FSRS-planleggingstilstanden; bare `POST /v1/agent/reviews/submit` (MCP `submit_review`) registrerer en repetisjon.

## Guider

`GET /v1/agent/guide/{topic}` returnerer én referanseguide i `data.guide`, med det samme innholdet som MCP-verktøyet `get_guide` leverer. Emner:

- `sql_dialect`: hele SQL-grammatikken, grenser og eksempler
- `card_authoring`: kortkontrakten, tagger, duplikatsjekker og formatering
- `bulk_authoring`: hvordan en stor skrivejobb deles opp og verifiseres
- `review_flow`: repetisjons- og vurderingsløkken

Et ukjent emne gir svaret `400` med listen over støttede emner. Hent den aktuelle guiden før du lager kort, skriver mye på én gang eller kjører en repetisjon, og les `sql_dialect` på nytt etter at en setning er avvist.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## Repetisjoner

Repetisjonsrutene lar en agent høre en elev i ett kort om gangen og lagre hver vurdering i kortets FSRS-plan. De tar de samme JSON-argumentene som MCP-verktøyene for repetisjon:

- `POST /v1/agent/reviews/next` returnerer `card` med `cardId` og `frontText`, eller `card: null` når ingen kort forfaller. Valgfrie `tags` (kort med minst én av taggene) eller `deckId` snevrer inn køen, men aldri begge samtidig; en forespørsel uten innhold er gyldig.
- `POST /v1/agent/reviews/reveal` krever `cardId` og returnerer kortets `backText`.
- `POST /v1/agent/reviews/submit` krever `cardId`, en klientgenerert UUID som `reviewId`, en `rating` som er `Again`, `Hard`, `Good` eller `Easy`, og `reviewedTimeZone` med elevens IANA-tidssone. Serveren setter tidspunktet for repetisjonen og returnerer kortets nye plan, inkludert `dueAt`, `state`, `reps` og `lapses`.

Alle tre rutene godtar den valgfrie `workspaceId`. Lagre `reviewId` før du sender inn. Er du usikker på om en innsending gikk gjennom, sender du nøyaktig samme forespørsel på nytt; den registrerer aldri en repetisjon to ganger. Repetisjonsrutene kan også svare med:

- `409 REVIEW_EVENT_CONFLICT`: repetisjonen er allerede registrert, og `error.details.reviewSchedule` inneholder kortets nåværende plan.
- `409 REVIEW_ID_CARD_MISMATCH`: `reviewId` identifiserer allerede en repetisjon av et annet kort, så ingenting ble lagret; send inn på nytt med en ny `reviewId`.
- `409 REVIEW_STALE`: det lagrede repetisjonstidspunktet for kortet er samtidig med eller senere enn serverens nåværende tid; repeter et annet kort.
- `400 REVIEW_INPUT_INVALID`: et argument mangler, er ugyldig eller støttes ikke, inkludert `tags` kombinert med `deckId` eller en tagg som arbeidsområdet ikke bruker.

Eksempel på innsending:

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

## API-er for mennesker og synkronisering

Nibomo har også egne API-er for klienter som brukes av mennesker og for offline-first-synkronisering, men de er ikke hovedkontrakten for eksterne agenter:

- nettleserflyter bruker informasjonskapsler på et delt domene pluss CSRF-beskyttelse
- offline-first-klienter bruker de implementerte synkroniseringsrutene under `/v1/workspaces/{workspaceId}/sync/push` og `/v1/workspaces/{workspaceId}/sync/pull`
- synkroniseringsrutene er atskilt fra grensesnittet for eksterne agenter
