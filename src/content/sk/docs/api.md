---
title: Referenčná príručka API
description: API pre externých agentov na zisťovanie, prvotné prihlásenie cez OTP, nastavenie pracovného priestoru a zverejnené SQL rozhrania na čítanie a zápis.
---

## Prehľad

Táto stránka opisuje aktuálny kontrakt pre externých AI agentov v Nibomo.

Ak váš klient podporuje MCP, najjednoduchšie sa pripojíte cez [MCP konektor](/docs/mcp-connector/),
ktorý obaľuje rovnaké dátové rozhranie. Táto stránka opisuje
HTTP kontrakt pre zisťovanie, SQL, príručky a opakovanie, ktorý používajú agenti pracujúci v CLI.

Začnite kanonickým zisťovacím vstupným bodom:

```text
GET https://api.nibomo.com/v1/
```

Rovnaký zisťovací obsah je dostupný aj na `GET /v1/agent`, ale hlavným verejným vstupným bodom je `/v1/`.

Zisťovacia odpoveď agentovi vysvetlí, ako:

- spustiť prihlásenie cez e-mailový OTP
- vymeniť OTP za dlhodobý API kľúč
- načítať kontext účtu
- vytvoriť alebo vybrať pracovný priestor
- pokračovať cez zverejnené SQL rozhranie
- získať referenčné príručky a opakovať kartičky jednu po druhej

## Zisťovanie za behu a zdrojový kód

OpenAPI nie je k dispozícii. Štyri bývalé URL adresy špecifikácie uvedené nižšie teraz namiesto schémy vracajú rovnaké zisťovacie JSON oznámenie s `"openapiAvailable": false`:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

Na aktuálne zisťovanie za behu použite `GET https://api.nibomo.com/v1/`. Trasy za behu nájdete vo vrátenom `docs.discoveryUrl` a podrobnosti implementácie v `docs.source.agentRoutesUrl`.

## Prvotné prihlásenie

Prvotné prihlásenie cez OTP prebieha v autentifikačnej službe:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

Postup:

1. Zavolajte `GET /v1/`.
2. Pošlite e-mail používateľa na `send-code`.
3. Z odpovede prečítajte `otpSessionToken`.
4. Požiadajte používateľa o najnovší 8-miestny kód z e-mailu.
5. Zavolajte `verify-code` s `code`, `otpSessionToken` a `label`.
6. Vrátený API kľúč uložte mimo pamäte chatu.

Odporúčaná premenná prostredia:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Autentifikované požiadavky používajú:

```text
Authorization: ApiKey <key>
```

Príklad postupu prvotného prihlásenia:

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

## Rozhranie agenta po prihlásení

Po overení je aktuálne rozhranie agenta takéto:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (iba na čítanie)
- `POST /v1/agent/sql/execute` (zápis)
- `GET /v1/agent/guide/{topic}` (iba na čítanie)
- `POST /v1/agent/reviews/next` (iba na čítanie)
- `POST /v1/agent/reviews/reveal` (iba na čítanie)
- `POST /v1/agent/reviews/submit` (zápis)

Typické prvotné nastavenie vyzerá takto:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. V prípade potreby `POST /v1/agent/workspaces` s `{"name":"Personal"}`
4. V prípade potreby `POST /v1/agent/workspaces/{workspaceId}/select`
5. Na čítanie použite `POST /v1/agent/sql/query` a na zápis `POST /v1/agent/sql/execute`

Výber pracovného priestoru je explicitný pre každé pripojenie s API kľúčom. Agenti by namiesto hádania ďalšieho kroku mali nasledovať vrátený text `instructions` a `docs.discoveryUrl` pre trasy za behu a `docs.source.agentRoutesUrl` pre podrobnosti implementácie.

Trasy pre SQL a opakovanie prijímajú v tele JSON aj voliteľný `workspaceId`. Ten nasmeruje jedno volanie na daný pracovný priestor bez zmeny výberu; ak ho vynecháte, použije sa vybraný pracovný priestor. Ak nie je vybraný žiadny pracovný priestor a nie je zadaný ani `workspaceId`, tieto trasy odpovedia `409 WORKSPACE_SELECTION_REQUIRED`.

## SQL rozhranie

`POST /v1/agent/sql/query` je rozhranie výhradne na čítanie (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`) a `POST /v1/agent/sql/execute` je rozhranie na zápis (`INSERT`, `UPDATE`, `DELETE`); jedno volanie musí obsahovať buď iba čítanie, alebo iba zápis.

Je zámerne obmedzené a nie je to plnohodnotné PostgreSQL. Táto dokumentácia pokrýva
iba podporovaný dialekt a nie je referenciou kompatibility s PostgreSQL.

Žiadna cesta na čítanie neopravuje dáta, neprepočítava plánovanie ani nemení stav kartičky. Na každý
zápis kartičiek a balíčkov použite `POST /v1/agent/sql/execute`. SQL nemôže zapisovať
`review_events` ani stav plánovania FSRS; opakovania zaznamenávajte cez
`POST /v1/agent/reviews/submit`.

Aktuálne skupiny príkazov:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

Zverejnené logické zdroje aktuálne zahŕňajú:

- `workspace`
- `cards`
- `decks`
- `review_events`

Poznámky:

- `LIMIT` má predvolenú hodnotu `100` a je obmedzený na `100`
- ak potrebujete stabilné stránkovanie, použite `ORDER BY`
- na zisťovanie schémy použite `SHOW TABLES` alebo `DESCRIBE cards`
- každé SQL volanie sa vzťahuje na jeden pracovný priestor: `workspaceId` v tele alebo vybraný pracovný priestor

Príklad požiadavky:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Príklad dotazu na kartičky:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Príklad zmeny:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

K dispozícii je aj vzdialený MCP server na `https://mcp.nibomo.com/mcp`, ktorý používa OAuth 2.1 (Dynamic Client Registration + PKCE). Sprístupňuje rovnaké rozdelenie SQL ako `sql_query` (výhradne na čítanie) a `sql_execute` (zápis), ďalej `list_workspaces`, `get_guide` a nástroje na opakovanie `next_review_card`, `reveal_answer` a `submit_review`; pozrite si [MCP konektor](/docs/mcp-connector/).

### Bezpečnosť a rozsah

SQL rozhranie je uzavretý dialekt vynucovaný parserom, nie surové PostgreSQL. Ochranné mechanizmy sú:

- **Uzavretý zoznam povolených príkazov**: na čítanie iba `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` a `SELECT`, na zápis `INSERT`, `UPDATE` a `DELETE`. Čokoľvek iné sa odmietne už pri parsovaní.
- **Obmedzené zdroje**: príkazy môžu pracovať iba so zdrojmi `workspace`, `cards`, `decks` a `review_events`.
- **Obmedzenie na pracovný priestor**: každý príkaz sa vzťahuje na jeden pracovný priestor, ku ktorému máte prístup, buď na `workspaceId` v tele požiadavky, alebo na váš vybraný pracovný priestor, bez prístupu k iným nájomcom.
- **Prísne telá požiadaviek**: trasy pre SQL a opakovanie odmietnu neznáme pole v tele, takže preklep v `workspaceId` skončí chybou namiesto toho, aby sa príkaz vykonal nad vybraným pracovným priestorom.
- **Limity**: najviac `100` riadkov na príkaz, najviac `50` príkazov v dávke a limit výsledku približne `12k` tokenov. Dávky zmien sa aplikujú atomicky.
- **Oddelenie čítania a zápisu**: `sql_query` a `list_workspaces` sú výhradne na čítanie (`readOnlyHint`) a nikdy neopravujú dáta, neprepočítavajú plánovanie ani nemenia stav kartičky. `sql_execute` je jediný SQL nástroj na zápis a vykonáva zápisy (`destructiveHint`); jedno volanie musí obsahovať buď iba čítanie, alebo iba zápis. SQL nemôže zapisovať `review_events` ani stav plánovania FSRS; opakovanie zaznamenáva iba `POST /v1/agent/reviews/submit` (v MCP `submit_review`).

## Príručky

`GET /v1/agent/guide/{topic}` vráti jednu referenčnú príručku v `data.guide`, s rovnakým obsahom, aký poskytuje MCP nástroj `get_guide`. Témy:

- `sql_dialect`: úplná SQL gramatika, limity a príklady
- `card_authoring`: kontrakt kartičky, štítky, kontroly duplicít a formátovanie
- `bulk_authoring`: rozdelenie a overenie veľkej úlohy zápisu
- `review_flow`: cyklus opakovania a hodnotenia

Neznáma téma vráti `400` so zoznamom podporovaných tém. Pred tvorbou kartičiek, hromadným zápisom alebo opakovaním si načítajte zodpovedajúcu príručku a po odmietnutom príkaze si znova prečítajte `sql_dialect`.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## Opakovanie

Trasy na opakovanie umožňujú agentovi skúšať učiaceho sa po jednej kartičke a ukladať každé hodnotenie do plánu FSRS danej kartičky. Prijímajú rovnaké JSON argumenty ako MCP nástroje na opakovanie:

- `POST /v1/agent/reviews/next` vráti `card` s `cardId` a `frontText`, alebo `card: null`, keď nie je na rade nič. Voliteľné `tags` (stačí zhoda s ktorýmkoľvek z nich) alebo `deckId` zúžia frontu, nikdy však nie oboje naraz; požiadavka bez tela je platná.
- `POST /v1/agent/reviews/reveal` vyžaduje `cardId` a vráti `backText` danej kartičky.
- `POST /v1/agent/reviews/submit` vyžaduje `cardId`, UUID `reviewId` vygenerované klientom, `rating` s hodnotou `Again`, `Hard`, `Good` alebo `Easy` a IANA `reviewedTimeZone` učiaceho sa. Server zaznamená čas opakovania a vráti nový plán kartičky vrátane `dueAt`, `state`, `reps` a `lapses`.

Všetky tri trasy prijímajú voliteľný `workspaceId`. Pred odoslaním si `reviewId` uložte a odoslanie s neistým výsledkom zopakujte s identickou požiadavkou; opakovaný pokus nikdy nezaznamená druhé opakovanie. Trasy na opakovanie môžu odpovedať aj takto:

- `409 REVIEW_EVENT_CONFLICT`: opakovanie už bolo zaznamenané a `error.details.reviewSchedule` obsahuje aktuálny plán kartičky.
- `409 REVIEW_ID_CARD_MISMATCH`: `reviewId` už označuje opakovanie inej kartičky, takže sa nič neuložilo; hodnotenie odošlite znova s novým `reviewId`.
- `409 REVIEW_STALE`: uložený čas opakovania kartičky je rovnaký alebo neskorší ako aktuálny čas servera; opakujte inú kartičku.
- `400 REVIEW_INPUT_INVALID`: argument chýba, je neplatný alebo nepodporovaný, vrátane kombinácie `tags` s `deckId` alebo štítku, ktorý pracovný priestor nepoužíva.

Príklad odoslania:

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

## API pre ľudí a synchronizáciu

Nibomo obsahuje aj samostatné API pre ľudských klientov a synchronizáciu navrhnutú primárne na prácu offline, tie však nie sú hlavným kontraktom pre externých agentov:

- postupy v prehliadači používajú cookies na zdieľanej doméne spolu s ochranou CSRF
- klienti navrhnutí primárne na prácu offline používajú implementované synchronizačné trasy `/v1/workspaces/{workspaceId}/sync/push` a `/v1/workspaces/{workspaceId}/sync/pull`
- synchronizačné trasy sú oddelené od rozhrania pre externých agentov
