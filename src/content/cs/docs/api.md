---
title: Referenční příručka API
description: API pro externí agenty pro discovery, inicializaci pomocí OTP, nastavení pracovního prostoru a zveřejněná SQL rozhraní pro čtení a zápis.
---

## Přehled

Tato stránka popisuje současný kontrakt Nibomo pro externí AI agenty.

Pokud váš klient podporuje MCP, nejjednodušším způsobem připojení je [MCP konektor](/docs/mcp-connector/), který obaluje stejné datové rozhraní. Tato stránka popisuje HTTP kontrakt pro discovery, SQL, příručky a opakování, který používají CLI agenti.

Začněte u kanonického vstupního bodu pro discovery:

```text
GET https://api.nibomo.com/v1/
```

Stejný obsah discovery je dostupný i na `GET /v1/agent`, hlavním veřejným vstupním bodem je ale `/v1/`.

Odpověď discovery agentovi vysvětlí, jak:

- zahájit přihlášení přes e-mailový OTP
- vyměnit OTP za dlouhodobý API klíč
- načíst kontext účtu
- vytvořit nebo vybrat pracovní prostor
- pokračovat přes zveřejněné SQL rozhraní
- načítat referenční příručky a opakovat kartičky jednu po druhé

## Discovery za běhu a zdrojový kód

OpenAPI není k dispozici. Čtyři dřívější URL specifikací uvedené níže teď místo schématu vracejí stejné JSON oznámení discovery s `"openapiAvailable": false`:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

Pro aktuální discovery za běhu použijte `GET https://api.nibomo.com/v1/`. Aktuální endpointy najdete přes vrácenou `docs.discoveryUrl` a podrobnosti implementace přes `docs.source.agentRoutesUrl`.

## Inicializace autentizace

Inicializace pomocí OTP probíhá v autentizační službě:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

Postup:

1. Zavolejte `GET /v1/`.
2. Odešlete e-mail uživatele na `send-code`.
3. Z odpovědi přečtěte `otpSessionToken`.
4. Požádejte uživatele o nejnovější osmimístný kód z e-mailu.
5. Zavolejte `verify-code` s hodnotami `code`, `otpSessionToken` a `label`.
6. Vrácený API klíč uložte mimo paměť chatu.

Doporučená proměnná prostředí:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Ověřené požadavky používají:

```text
Authorization: ApiKey <key>
```

Příklad inicializační sekvence:

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

## Rozhraní agenta po přihlášení

Po ověření je současné rozhraní agenta toto:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (pouze čtení)
- `POST /v1/agent/sql/execute` (zápis)
- `GET /v1/agent/guide/{topic}` (pouze čtení)
- `POST /v1/agent/reviews/next` (pouze čtení)
- `POST /v1/agent/reviews/reveal` (pouze čtení)
- `POST /v1/agent/reviews/submit` (zápis)

Typická inicializace vypadá takto:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. V případě potřeby `POST /v1/agent/workspaces` s `{"name":"Personal"}`
4. V případě potřeby `POST /v1/agent/workspaces/{workspaceId}/select`
5. Pro čtení použijte `POST /v1/agent/sql/query` a pro zápis `POST /v1/agent/sql/execute`

Výběr pracovního prostoru je explicitní pro každé připojení s API klíčem. Agenti by se místo hádání dalšího kroku měli řídit vráceným textem `instructions` a pro aktuální endpointy adresou `docs.discoveryUrl`, pro podrobnosti implementace pak `docs.source.agentRoutesUrl`.

SQL endpointy a endpointy pro opakování přijímají v těle JSON také volitelné `workspaceId`. Pro jedno volání tím cílíte na daný pracovní prostor, aniž by se změnil výběr; když ho vynecháte, použije se vybraný pracovní prostor. Pokud není vybraný pracovní prostor ani zadané `workspaceId`, vrátí `409 WORKSPACE_SELECTION_REQUIRED`.

## SQL rozhraní

`POST /v1/agent/sql/query` je rozhraní výhradně pro čtení (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`) a `POST /v1/agent/sql/execute` je rozhraní pro zápis (`INSERT`, `UPDATE`, `DELETE`); jedno volání musí obsahovat buď jen čtení, nebo jen zápisy.

Rozhraní je záměrně omezené a nejde o plnohodnotný PostgreSQL. Tato dokumentace popisuje pouze podporovaný dialekt a neslouží jako přehled kompatibility s PostgreSQL.

Žádná cesta pro čtení neopravuje data, nepřepočítává plánování ani nemění stav kartiček. Pro každý zápis kartiček a balíčků použijte `POST /v1/agent/sql/execute`. SQL nemůže zapisovat do `review_events` ani do stavu plánování FSRS; opakování zaznamenávejte přes `POST /v1/agent/reviews/submit`.

Aktuální skupiny příkazů:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

Zveřejněné logické zdroje aktuálně zahrnují:

- `workspace`
- `cards`
- `decks`
- `review_events`

Poznámky:

- `LIMIT` má výchozí hodnotu `100` a nelze ho nastavit nad `100`
- pro stabilní stránkování použijte `ORDER BY`
- ke zjištění schématu použijte `SHOW TABLES` nebo `DESCRIBE cards`
- každé SQL volání se týká jednoho pracovního prostoru: toho, jehož `workspaceId` je v těle požadavku, nebo vybraného pracovního prostoru

Příklad požadavku:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Příklad dotazu na kartičky:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Příklad změny dat:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

K dispozici je také vzdálený MCP server na `https://mcp.nibomo.com/mcp`, který používá OAuth 2.1 (Dynamic Client Registration + PKCE). Nabízí stejné rozdělení SQL na `sql_query` (výhradně čtení) a `sql_execute` (zápis), k tomu `list_workspaces`, `get_guide` a nástroje pro opakování `next_review_card`, `reveal_answer` a `submit_review`; viz [MCP konektor](/docs/mcp-connector/).

### Bezpečnost a rozsah

SQL rozhraní je uzavřený dialekt vynucovaný parserem, nikoli přímý přístup k PostgreSQL. Ochranná opatření:

- **Uzavřený seznam povolených příkazů**: pro čtení pouze `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` a `SELECT`, pro zápis `INSERT`, `UPDATE` a `DELETE`. Cokoli jiného je odmítnuto už při parsování.
- **Omezené zdroje**: příkazy mohou pracovat pouze se zdroji `workspace`, `cards`, `decks` a `review_events`.
- **Omezení na pracovní prostor**: každý příkaz se týká jednoho pracovního prostoru, ke kterému máte přístup, buď toho s `workspaceId` v těle požadavku, nebo vybraného pracovního prostoru, bez přístupu napříč tenanty.
- **Striktní těla požadavků**: SQL endpointy a endpointy pro opakování odmítnou neznámé pole v těle, takže překlep v `workspaceId` skončí chybou, místo aby se příkaz provedl nad vybraným pracovním prostorem.
- **Limity**: nejvýše `100` řádků na příkaz, nejvýše `50` příkazů na dávku a výsledek omezený zhruba na `12k` tokenů. Dávky změn se provádějí atomicky.
- **Oddělení čtení a zápisu**: `sql_query` a `list_workspaces` jsou výhradně pro čtení (`readOnlyHint`) a nikdy neopravují data, nepřepočítávají plánování ani nemění stav kartiček. `sql_execute` je jediný SQL nástroj pro zápis a provádí zápisy (`destructiveHint`); jedno volání musí obsahovat buď jen čtení, nebo jen zápisy. SQL nemůže zapisovat do `review_events` ani do stavu plánování FSRS; opakování zaznamenává pouze `POST /v1/agent/reviews/submit` (v MCP `submit_review`).

## Příručky

`GET /v1/agent/guide/{topic}` vrací jednu referenční příručku v `data.guide`, se stejným obsahem, jaký poskytuje MCP nástroj `get_guide`. Témata:

- `sql_dialect`: úplná gramatika SQL, limity a příklady
- `card_authoring`: kontrakt kartičky, štítky, kontroly duplicit a formátování
- `bulk_authoring`: rozdělení a ověření rozsáhlé zápisové úlohy
- `review_flow`: cyklus opakování a hodnocení

Na neznámé téma vrátí `400` se seznamem podporovaných témat. Před tvorbou kartiček, hromadným zápisem nebo opakováním si načtěte příslušnou příručku a po odmítnutém příkazu si znovu přečtěte `sql_dialect`.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## Opakování

Endpointy pro opakování umožňují agentovi zkoušet studujícího po jedné kartičce a ukládat každé hodnocení do plánu FSRS dané kartičky. Přijímají stejné JSON argumenty jako MCP nástroje pro opakování:

- `POST /v1/agent/reviews/next` vrací `card` s `cardId` a `frontText`, nebo `card: null`, když není nic na řadě. Frontu zúží volitelné `tags` (kterýkoli z nich) nebo `deckId`, nikdy obojí najednou; požadavek bez těla je platný.
- `POST /v1/agent/reviews/reveal` vyžaduje `cardId` a vrací `backText` dané kartičky.
- `POST /v1/agent/reviews/submit` vyžaduje `cardId`, UUID `reviewId` vygenerované klientem, `rating` s hodnotou `Again`, `Hard`, `Good` nebo `Easy` a IANA časové pásmo studujícího `reviewedTimeZone`. Server doplní čas opakování a vrátí nový plán kartičky včetně `dueAt`, `state`, `reps` a `lapses`.

Všechny tři endpointy přijímají volitelné `workspaceId`. Před odesláním si `reviewId` uložte a nejisté odeslání zopakujte se zcela stejným požadavkem; druhé opakování se tím nikdy nezaznamená. Endpointy pro opakování mohou vrátit také:

- `409 REVIEW_EVENT_CONFLICT`: opakování už bylo zaznamenáno a `error.details.reviewSchedule` obsahuje aktuální plán kartičky.
- `409 REVIEW_ID_CARD_MISMATCH`: `reviewId` už označuje opakování jiné kartičky, takže se nic neuložilo; odešlete znovu s novým `reviewId`.
- `409 REVIEW_STALE`: uložený čas opakování kartičky je stejný jako aktuální čas serveru nebo pozdější; opakujte jinou kartičku.
- `400 REVIEW_INPUT_INVALID`: některý argument chybí, je neplatný nebo nepodporovaný, včetně kombinace `tags` s `deckId` nebo štítku, který pracovní prostor nepoužívá.

Příklad odeslání:

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

## API pro lidi a synchronizaci

Nibomo obsahuje také samostatná API pro lidské klienty a synchronizaci offline-first, nejsou ale hlavním kontraktem pro externí agenty:

- postupy v prohlížeči používají cookies na sdílené doméně a ochranu proti CSRF
- klienti offline-first používají implementované synchronizační endpointy `/v1/workspaces/{workspaceId}/sync/push` a `/v1/workspaces/{workspaceId}/sync/pull`
- synchronizační endpointy jsou oddělené od rozhraní pro externí agenty
