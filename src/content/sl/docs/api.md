---
title: Referenca API
description: API za zunanje agente za odkrivanje, začetno nastavitev z enkratno kodo, nastavitev delovnega prostora ter objavljena vmesnika SQL za branje in pisanje.
---

## Pregled

Ta stran opisuje trenutno pogodbo za zunanje agente AI v Nibomo.

Če vaš odjemalec podpira MCP, je [povezovalnik MCP](/docs/mcp-connector/)
najpreprostejši način povezave in ovija isti podatkovni vmesnik. Ta stran opisuje
pogodbo HTTP za odkrivanje, SQL, vodnike in ponavljanje, ki jo uporabljajo agenti CLI.

Začnite pri kanonični vstopni točki za odkrivanje:

```text
GET https://api.nibomo.com/v1/
```

Isti odgovor za odkrivanje je na voljo tudi na `GET /v1/agent`, vendar je `/v1/` glavna javna vstopna točka.

Odgovor za odkrivanje agentu pove, kako:

- začeti prijavo z enkratno kodo po e-pošti
- zamenjati enkratno kodo za dolgotrajni ključ API
- naložiti kontekst računa
- ustvariti ali izbrati delovni prostor
- nadaljevati prek objavljenega vmesnika SQL
- pridobiti referenčne vodnike in ponavljati kartice eno po eno

## Odkrivanje med izvajanjem in izvorna koda

OpenAPI ni na voljo. Štirje nekdanji URL-ji specifikacije spodaj zdaj namesto sheme vrnejo isto obvestilo za odkrivanje v obliki JSON z `"openapiAvailable": false`:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

Za trenutno odkrivanje med izvajanjem uporabite `GET https://api.nibomo.com/v1/`. Za poti med izvajanjem sledite vrnjenemu `docs.discoveryUrl`, za podrobnosti izvedbe pa `docs.source.agentRoutesUrl`.

## Začetna nastavitev preverjanja pristnosti

Začetna nastavitev z enkratno kodo poteka v storitvi za preverjanje pristnosti:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

Potek je takšen:

1. Pokličite `GET /v1/`.
2. E-poštni naslov uporabnika pošljite na `send-code`.
3. Iz odgovora preberite `otpSessionToken`.
4. Uporabnika prosite za najnovejšo 8-mestno kodo iz e-pošte.
5. Pokličite `verify-code` s `code`, `otpSessionToken` in `label`.
6. Vrnjeni ključ API shranite zunaj pomnilnika klepeta.

Priporočena okoljska spremenljivka:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Zahteve s preverjeno pristnostjo uporabljajo:

```text
Authorization: ApiKey <key>
```

Primer zaporedja začetne nastavitve:

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

## Vmesnik za agente po prijavi

Po preverjanju je trenutni vmesnik za agente takšen:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (samo branje)
- `POST /v1/agent/sql/execute` (pisanje)
- `GET /v1/agent/guide/{topic}` (samo branje)
- `POST /v1/agent/reviews/next` (samo branje)
- `POST /v1/agent/reviews/reveal` (samo branje)
- `POST /v1/agent/reviews/submit` (pisanje)

Običajna začetna nastavitev je videti tako:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. Po potrebi `POST /v1/agent/workspaces` z `{"name":"Personal"}`
4. Po potrebi `POST /v1/agent/workspaces/{workspaceId}/select`
5. Za branje uporabite `POST /v1/agent/sql/query`, za pisanje pa `POST /v1/agent/sql/execute`

Izbira delovnega prostora je izrecna za vsako povezavo s ključem API. Agenti naj namesto ugibanja naslednjega koraka sledijo vrnjenemu besedilu `instructions` in `docs.discoveryUrl` za poti med izvajanjem ter `docs.source.agentRoutesUrl` za podrobnosti izvedbe.

Poti za SQL in ponavljanje v telesu JSON sprejmejo tudi neobvezen `workspaceId`. Z njim posamezen klic usmerite v ta delovni prostor, ne da bi spremenili izbiro; če ga izpustite, se uporabi izbrani delovni prostor. Če delovni prostor ni izbran in `workspaceId` ni podan, poti odgovorijo s `409 WORKSPACE_SELECTION_REQUIRED`.

## Vmesnik SQL

`POST /v1/agent/sql/query` je vmesnik strogo samo za branje (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`), `POST /v1/agent/sql/execute` pa je vmesnik za pisanje (`INSERT`, `UPDATE`, `DELETE`); en klic mora vsebovati samo branja ali samo pisanja.

Namenoma je omejen in ni celoten PostgreSQL. Ta dokumentacija zajema samo
podprto narečje, ni pa referenca za združljivost s PostgreSQL.

Nobena bralna pot ne popravlja podatkov, ne preračunava razporeda in ne spreminja stanja kartic. Za
vsako pisanje kartic in kompletov uporabite `POST /v1/agent/sql/execute`. SQL ne more pisati v
`review_events` ali stanje razporejanja FSRS; ponovitve zabeležite prek
`POST /v1/agent/reviews/submit`.

Trenutno podprte vrste stavkov:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

Objavljeni logični viri trenutno vključujejo:

- `workspace`
- `cards`
- `decks`
- `review_events`

Opombe:

- `LIMIT` je privzeto `100` in je omejen na `100`
- uporabite `ORDER BY`, kadar potrebujete stabilno ostranjevanje
- za odkrivanje sheme uporabite `SHOW TABLES` ali `DESCRIBE cards`
- vsak klic SQL je omejen na en delovni prostor: `workspaceId` v telesu ali izbrani delovni prostor

Primer zahteve:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Primer poizvedbe po karticah:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Primer spremembe:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

Na voljo je tudi oddaljeni strežnik MCP na `https://mcp.nibomo.com/mcp`, ki uporablja OAuth 2.1 (Dynamic Client Registration + PKCE). Ponuja enako delitev SQL na `sql_query` (strogo samo branje) in `sql_execute` (pisanje), poleg tega pa še `list_workspaces`, `get_guide` in orodja za ponavljanje `next_review_card`, `reveal_answer` in `submit_review`; oglejte si [povezovalnik MCP](/docs/mcp-connector/).

### Varnost in obseg

Vmesnik SQL je omejeno narečje, ki ga uveljavlja razčlenjevalnik, in ne neposreden dostop do PostgreSQL. Varovala so:

- **Zaprt seznam dovoljenih stavkov**: za branje samo `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` in `SELECT`, za pisanje pa `INSERT`, `UPDATE` in `DELETE`. Vse drugo je zavrnjeno že pri razčlenjevanju.
- **Omejeni viri**: stavki lahko dostopajo samo do virov `workspace`, `cards`, `decks` in `review_events`.
- **Omejitev na delovni prostor**: vsak stavek je omejen na en delovni prostor, do katerega imate dostop, bodisi na `workspaceId` v telesu zahteve bodisi na izbrani delovni prostor, brez dostopa do drugih najemnikov.
- **Stroga telesa zahtev**: poti za SQL in ponavljanje zavrnejo neznano polje v telesu, zato napačno črkovan `workspaceId` povzroči napako, namesto da bi se stavek izvedel nad izbranim delovnim prostorom.
- **Omejitve**: največ `100` vrstic na stavek, največ `50` stavkov na paket in omejitev rezultata na približno `12k` žetonov. Paketi sprememb se uveljavijo atomarno.
- **Ločitev branja in pisanja**: `sql_query` in `list_workspaces` sta strogo samo za branje (`readOnlyHint`) in nikoli ne popravljata podatkov, ne preračunavata razporeda in ne spreminjata stanja kartic. `sql_execute` je edino orodje SQL za pisanje in izvaja pisanja (`destructiveHint`); en klic mora vsebovati samo branja ali samo pisanja. SQL ne more pisati v `review_events` ali stanje razporejanja FSRS; ponovitev zabeleži samo `POST /v1/agent/reviews/submit` (v MCP `submit_review`).

## Vodniki

`GET /v1/agent/guide/{topic}` v `data.guide` vrne en referenčni vodnik, isto vsebino, kot jo vrača orodje MCP `get_guide`. Teme:

- `sql_dialect`: celotna slovnica SQL, omejitve in primeri
- `card_authoring`: pogodba za kartice, oznake, preverjanje dvojnikov in oblikovanje
- `bulk_authoring`: razdelitev in preverjanje obsežnega opravila pisanja
- `review_flow`: zanka ponavljanja in ocenjevanja

Za neznano temo je odgovor `400` s seznamom podprtih tem. Preden ustvarjate kartice, množično pišete ali začnete ponavljanje, pridobite ustrezni vodnik, po zavrnjenem stavku pa znova preberite `sql_dialect`.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## Ponavljanje

Poti za ponavljanje agentu omogočajo, da učenca sprašuje kartico za kartico in vsako oceno shrani v razpored FSRS kartice. Sprejmejo enake argumente JSON kot orodja MCP za ponavljanje:

- `POST /v1/agent/reviews/next` vrne `card` s `cardId` in `frontText` ali `card: null`, ko ni na vrsti nobena kartica. Neobvezni `tags` (katera koli od oznak) ali `deckId` zoži čakalno vrsto, nikoli oba hkrati; zahteva brez telesa je veljavna.
- `POST /v1/agent/reviews/reveal` zahteva `cardId` in vrne `backText` te kartice.
- `POST /v1/agent/reviews/submit` zahteva `cardId`, UUID `reviewId`, ustvarjen v odjemalcu, `rating` z vrednostjo `Again`, `Hard`, `Good` ali `Easy` in učenčev `reviewedTimeZone` po IANA. Strežnik zabeleži čas ponovitve in vrne nov razpored kartice, vključno z `dueAt`, `state`, `reps` in `lapses`.

Vse tri poti sprejmejo neobvezen `workspaceId`. Pred oddajo shranite `reviewId`, oddajo, za katero niste prepričani, ali je uspela, pa ponovite z enako zahtevo; druge ponovitve to nikoli ne zabeleži. Poti za ponavljanje lahko odgovorijo tudi s:

- `409 REVIEW_EVENT_CONFLICT`: ponovitev je že zabeležena, `error.details.reviewSchedule` pa vsebuje trenutni razpored kartice.
- `409 REVIEW_ID_CARD_MISMATCH`: `reviewId` že označuje ponovitev druge kartice, zato ni bilo nič shranjeno; oddajte znova z novim `reviewId`.
- `409 REVIEW_STALE`: shranjeni čas ponovitve kartice je enak trenutnemu času strežnika ali poznejši; ponavljajte drugo kartico.
- `400 REVIEW_INPUT_INVALID`: argument manjka, je neveljaven ali ni podprt, vključno s primerom, ko sta `tags` in `deckId` podana skupaj, ali z oznako, ki je delovni prostor ne uporablja.

Primer oddaje:

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

## API-ji za ljudi in sinhronizacijo

Nibomo vključuje tudi ločene API-je za človeške odjemalce in sinhronizacijo za delo brez povezave, vendar to ni glavna pogodba za zunanje agente:

- postopki v brskalniku uporabljajo piškotke v skupni domeni in zaščito CSRF
- odjemalci, zasnovani za delo brez povezave, uporabljajo izvedene poti za sinhronizacijo pod `/v1/workspaces/{workspaceId}/sync/push` in `/v1/workspaces/{workspaceId}/sync/pull`
- poti za sinhronizacijo so ločene od vmesnika za zunanje agente
