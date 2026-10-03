---
title: API aprašas
description: Išorinių agentų API aptikimui, pradiniam prisijungimui vienkartiniu kodu, darbo srities sąrankai ir paskelbtoms SQL skaitymo bei rašymo sąsajoms.
---

## Apžvalga

Šiame puslapyje aprašyta dabartinė Nibomo sutartis su išoriniais DI agentais.

Jei jūsų klientas palaiko MCP, paprasčiausia prisijungti per [MCP jungtį](/docs/mcp-connector/),
kuri suteikia prieigą prie tos pačios duomenų sąsajos. Šiame puslapyje aprašyta
HTTP aptikimo, SQL, vadovų ir kartojimo sutartis, kuria naudojasi CLI agentai.

Pradėkite nuo kanoninio aptikimo įėjimo taško:

```text
GET https://api.nibomo.com/v1/
```

Tas pats aptikimo turinys pasiekiamas ir adresu `GET /v1/agent`, tačiau pagrindinis viešas įėjimo taškas yra `/v1/`.

Aptikimo atsakymas nurodo agentui, kaip:

- pradėti prisijungimą el. pašto vienkartiniu kodu
- iškeisti vienkartinį kodą į ilgalaikį API raktą
- įkelti paskyros kontekstą
- sukurti arba pasirinkti darbo sritį
- toliau dirbti per paskelbtą SQL sąsają
- gauti informacinius vadovus ir kartoti korteles po vieną

## Aptikimas vykdymo metu ir pirminis kodas

OpenAPI specifikacija nepateikiama. Keturi toliau nurodyti buvę specifikacijos URL dabar vietoje schemos grąžina tą patį JSON aptikimo pranešimą su `"openapiAvailable": false`:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

Dabartiniam aptikimui vykdymo metu naudokite `GET https://api.nibomo.com/v1/`. Vykdymo metu pasiekiamus maršrutus rasite grąžintu `docs.discoveryUrl`, o įgyvendinimo detales – `docs.source.agentRoutesUrl`.

## Pradinis autentifikavimas

Pradinis prisijungimas vienkartiniu kodu vyksta autentifikavimo paslaugoje:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

Eiga tokia:

1. Iškvieskite `GET /v1/`.
2. Nusiųskite naudotojo el. pašto adresą į `send-code`.
3. Iš atsakymo nuskaitykite `otpSessionToken`.
4. Paprašykite naudotojo naujausio 8 skaitmenų kodo iš el. laiško.
5. Iškvieskite `verify-code` su `code`, `otpSessionToken` ir `label`.
6. Grąžintą API raktą išsaugokite už pokalbio atminties ribų.

Rekomenduojamas aplinkos kintamasis:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Autentifikuotose užklausose naudojama:

```text
Authorization: ApiKey <key>
```

Pradinio prisijungimo sekos pavyzdys:

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

## Agento sąsaja po prisijungimo

Po patvirtinimo dabartinė agento sąsaja yra tokia:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (tik skaitymas)
- `POST /v1/agent/sql/execute` (rašymas)
- `GET /v1/agent/guide/{topic}` (tik skaitymas)
- `POST /v1/agent/reviews/next` (tik skaitymas)
- `POST /v1/agent/reviews/reveal` (tik skaitymas)
- `POST /v1/agent/reviews/submit` (rašymas)

Įprasta pradinė sąranka atrodo taip:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. Prireikus `POST /v1/agent/workspaces` su `{"name":"Personal"}`
4. Prireikus `POST /v1/agent/workspaces/{workspaceId}/select`
5. Skaitymui naudokite `POST /v1/agent/sql/query`, o rašymui – `POST /v1/agent/sql/execute`

Darbo sritis kiekvienam API rakto ryšiui pasirenkama aiškiai. Užuot spėlioję kitą žingsnį, agentai turėtų vadovautis grąžintu `instructions` tekstu ir `docs.discoveryUrl` vykdymo metu pasiekiamiems maršrutams, o įgyvendinimo detalėms – `docs.source.agentRoutesUrl`.

SQL ir kartojimo maršrutai JSON turinyje taip pat priima neprivalomą `workspaceId`. Jis nukreipia vieną iškvietimą į tą darbo sritį nekeisdamas pasirinkimo; jei jo nenurodysite, bus naudojama pasirinkta darbo sritis. Jei nėra nei pasirinktos darbo srities, nei `workspaceId`, šie maršrutai grąžina `409 WORKSPACE_SELECTION_REQUIRED`.

## SQL sąsaja

`POST /v1/agent/sql/query` yra griežtai tik skaitymui skirta sąsaja (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`), o `POST /v1/agent/sql/execute` yra rašymo sąsaja (`INSERT`, `UPDATE`, `DELETE`); viename iškvietime turi būti tik skaitymo arba tik rašymo sakiniai.

Ji sąmoningai apribota ir nėra visavertis PostgreSQL. Šioje dokumentacijoje
aprašomas tik palaikomas dialektas; tai nėra PostgreSQL suderinamumo žinynas.

Joks skaitymo kelias netaiso duomenų, neperskaičiuoja planavimo ir nekeičia kortelių būsenos. Visiems
kortelių ir kaladžių įrašams naudokite `POST /v1/agent/sql/execute`. SQL negali rašyti į
`review_events` ar FSRS planavimo būsenos; kartojimus registruokite per
`POST /v1/agent/reviews/submit`.

Dabartinės sakinių grupės:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

Šiuo metu paskelbti loginiai ištekliai:

- `workspace`
- `cards`
- `decks`
- `review_events`

Pastabos:

- `LIMIT` numatytoji reikšmė yra `100`, o didžiausia leistina taip pat `100`
- jei reikia stabilaus puslapiavimo, naudokite `ORDER BY`
- schemai sužinoti naudokite `SHOW TABLES` arba `DESCRIBE cards`
- kiekvienas SQL iškvietimas apribotas viena darbo sritimi: turinyje nurodyta `workspaceId` arba pasirinkta darbo sritis

Užklausos pavyzdys:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Kortelių užklausos pavyzdys:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Pakeitimo pavyzdys:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

Taip pat veikia nuotolinis MCP serveris adresu `https://mcp.nibomo.com/mcp`, naudojantis OAuth 2.1 (Dynamic Client Registration + PKCE). Jame SQL taip pat atskirta į `sql_query` (griežtai tik skaitymas) ir `sql_execute` (rašymas), be to, yra `list_workspaces`, `get_guide` ir kartojimo įrankius `next_review_card`, `reveal_answer` bei `submit_review`; žr. [MCP jungtį](/docs/mcp-connector/).

### Saugumas ir apimtis

SQL sąsaja yra uždaras, analizatoriaus kontroliuojamas dialektas, o ne tiesioginė prieiga prie PostgreSQL. Apsaugos priemonės:

- **Uždaras leidžiamų sakinių sąrašas**: skaitymui tik `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` ir `SELECT`, rašymui – `INSERT`, `UPDATE` ir `DELETE`. Visa kita atmetama analizės metu.
- **Riboti ištekliai**: sakiniai gali paliesti tik `workspace`, `cards`, `decks` ir `review_events` išteklius.
- **Apribojimas darbo sritimi**: kiekvienas sakinys apribotas viena jums prieinama darbo sritimi – užklausos turinyje nurodyta `workspaceId` arba pasirinkta darbo sritis, be jokios prieigos prie kitų nuomininkų.
- **Griežtas užklausų turinys**: SQL ir kartojimo maršrutai atmeta nežinomą turinio lauką, todėl užklausa su klaidingai parašytu `workspaceId` nepavyksta, užuot įvykdyta pasirinktoje darbo srityje.
- **Ribos**: iki `100` eilučių vienam sakiniui, iki `50` sakinių vienam paketui ir maždaug `12k` žetonų rezultato riba. Keitimų paketai pritaikomi atomiškai.
- **Skaitymo ir rašymo atskyrimas**: `sql_query` ir `list_workspaces` yra griežtai tik skaitymui (`readOnlyHint`) ir niekada netaiso duomenų, neperskaičiuoja planavimo ir nekeičia kortelių būsenos. `sql_execute` yra vienintelis SQL rašymo įrankis ir atlieka rašymo operacijas (`destructiveHint`); viename iškvietime turi būti tik skaitymo arba tik rašymo sakiniai. SQL negali rašyti į `review_events` ar FSRS planavimo būsenos; kartojimą registruoja tik `POST /v1/agent/reviews/submit` (MCP `submit_review`).

## Vadovai

`GET /v1/agent/guide/{topic}` grąžina vieną informacinį vadovą lauke `data.guide` – tą patį turinį, kurį pateikia MCP įrankis `get_guide`. Temos:

- `sql_dialect`: visa SQL gramatika, ribos ir pavyzdžiai
- `card_authoring`: kortelių sutartis, žymos, dublikatų tikrinimas ir formatavimas
- `bulk_authoring`: didelės rašymo užduoties skaidymas ir tikrinimas
- `review_flow`: kartojimo ir vertinimo ciklas

Nežinoma tema grąžina `400` su palaikomų temų sąrašu. Prieš kurdami korteles, rašydami dideliais kiekiais ar pradėdami kartojimą, gaukite atitinkamą vadovą, o atmetus sakinį iš naujo perskaitykite `sql_dialect`.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## Kartojimas

Kartojimo maršrutai leidžia agentui klausinėti besimokantįjį po vieną kortelę ir kiekvieną įvertinimą įrašyti į kortelės FSRS tvarkaraštį. Jie priima tuos pačius JSON argumentus kaip ir MCP kartojimo įrankiai:

- `POST /v1/agent/reviews/next` grąžina `card` su `cardId` ir `frontText` arba `card: null`, kai nėra ką kartoti. Neprivalomas `tags` (bet kuri iš žymų) arba `deckId` susiaurina eilę, bet ne abu kartu; užklausa be turinio taip pat tinkama.
- `POST /v1/agent/reviews/reveal` reikalauja `cardId` ir grąžina tos kortelės `backText`.
- `POST /v1/agent/reviews/submit` reikalauja `cardId`, kliento sugeneruoto `reviewId` UUID, `rating` reikšmės `Again`, `Hard`, `Good` arba `Easy` ir besimokančiojo IANA `reviewedTimeZone`. Serveris pažymi kartojimo laiką ir grąžina naują kortelės tvarkaraštį, įskaitant `dueAt`, `state`, `reps` ir `lapses`.

Visi trys maršrutai priima neprivalomą `workspaceId`. Prieš pateikdami išsaugokite `reviewId`, o jei nežinote, ar pateikimas pavyko, siųskite identišką užklausą dar kartą – antras kartojimas niekada nebus įrašytas. Kartojimo maršrutai taip pat gali grąžinti:

- `409 REVIEW_EVENT_CONFLICT`: kartojimas jau įrašytas, o `error.details.reviewSchedule` pateikia dabartinį kortelės tvarkaraštį.
- `409 REVIEW_ID_CARD_MISMATCH`: `reviewId` jau žymi kitos kortelės kartojimą, todėl niekas neišsaugota; pateikite dar kartą su nauju `reviewId`.
- `409 REVIEW_STALE`: išsaugotas kortelės kartojimo laikas yra lygus dabartiniam serverio laikui arba vėlesnis; kartokite kitą kortelę.
- `400 REVIEW_INPUT_INVALID`: trūksta argumento arba jis netinkamas ar nepalaikomas, įskaitant `tags` kartu su `deckId` arba žymą, kurios darbo sritis nenaudoja.

Pateikimo pavyzdys:

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

## API žmonėms ir sinchronizavimui

Nibomo taip pat turi atskiras API žmonių naudojamiems klientams ir pirmiausia neprisijungus veikiančių klientų sinchronizavimui, tačiau jos nėra pagrindinė sutartis išoriniams agentams:

- naršyklės srautai naudoja bendro domeno slapukus ir CSRF apsaugą
- pirmiausia neprisijungus veikiantys klientai naudoja įgyvendintus sinchronizavimo maršrutus `/v1/workspaces/{workspaceId}/sync/push` ir `/v1/workspaces/{workspaceId}/sync/pull`
- sinchronizavimo maršrutai yra atskirti nuo išorinių agentų sąsajos
