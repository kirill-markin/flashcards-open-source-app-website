---
title: API apraksts
description: Ārējo aģentu API atklāšanai, sākotnējai iestatīšanai ar OTP, darbvietas sagatavošanai un publicētajām SQL saskarnēm lasīšanai un rakstīšanai.
---

## Pārskats

Šajā lapā aprakstīta pašreizējā Nibomo saskarne ārējiem MI aģentiem.

Ja tavs klients atbalsta MCP, [MCP savienotājs](/docs/mcp-connector/) ir
vienkāršākais veids, kā pieslēgties, un tas izmanto to pašu datu saskarni. Šajā lapā aprakstīta
HTTP saskarne atklāšanai, SQL, ceļvežiem un atkārtošanai, ko izmanto CLI aģenti.

Sāc ar kanonisko atklāšanas ieejas punktu:

```text
GET https://api.nibomo.com/v1/
```

Tie paši atklāšanas dati ir pieejami arī adresē `GET /v1/agent`, taču galvenais publiskais ieejas punkts ir `/v1/`.

Atklāšanas atbilde aģentam paskaidro, kā:

- sākt pieteikšanos ar e-pasta OTP
- apmainīt OTP pret ilgtermiņa API atslēgu
- ielādēt konta kontekstu
- izveidot vai izvēlēties darbvietu
- turpināt darbu ar publicēto SQL saskarni
- iegūt uzziņu ceļvežus un atkārtot kartītes pa vienai

## Atklāšana izpildes laikā un pirmkods

OpenAPI nav pieejams. Četri tālāk norādītie bijušie specifikācijas URL shēmas vietā tagad atgriež to pašu JSON atklāšanas paziņojumu ar `"openapiAvailable": false`:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

Pašreizējai atklāšanai izpildes laikā izmanto `GET https://api.nibomo.com/v1/`. Izpildes laika maršrutiem seko atgrieztajam `docs.discoveryUrl`, bet implementācijas detaļām — `docs.source.agentRoutesUrl`.

## Autentifikācijas sākotnējā iestatīšana

OTP sākotnējā iestatīšana notiek autentifikācijas pakalpojumā:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

Plūsma ir šāda:

1. Izsauc `GET /v1/`.
2. Nosūti lietotāja e-pasta adresi uz `send-code`.
3. Nolasi `otpSessionToken` no atbildes.
4. Palūdz lietotājam jaunāko 8 ciparu kodu no e-pasta.
5. Izsauc `verify-code` ar `code`, `otpSessionToken` un `label`.
6. Saglabā atgriezto API atslēgu ārpus sarunas atmiņas.

Ieteicamais vides mainīgais:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Autentificētie pieprasījumi izmanto:

```text
Authorization: ApiKey <key>
```

Sākotnējās iestatīšanas secības piemērs:

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

## Aģenta saskarne pēc pieteikšanās

Pēc pārbaudes pašreizējā aģenta saskarne ir šāda:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (tikai lasīšanai)
- `POST /v1/agent/sql/execute` (rakstīšanai)
- `GET /v1/agent/guide/{topic}` (tikai lasīšanai)
- `POST /v1/agent/reviews/next` (tikai lasīšanai)
- `POST /v1/agent/reviews/reveal` (tikai lasīšanai)
- `POST /v1/agent/reviews/submit` (rakstīšanai)

Tipiska sākotnējā iestatīšana izskatās šādi:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. Ja nepieciešams, `POST /v1/agent/workspaces` ar `{"name":"Personal"}`
4. Ja nepieciešams, `POST /v1/agent/workspaces/{workspaceId}/select`
5. Lasīšanai izmanto `POST /v1/agent/sql/query`, bet rakstīšanai — `POST /v1/agent/sql/execute`

Darbvieta katram API atslēgas savienojumam tiek izvēlēta skaidri. Aģentiem nevajadzētu minēt nākamo soli: izpildes laika maršrutiem jāseko atgrieztajam `instructions` tekstam un `docs.discoveryUrl`, bet implementācijas detaļām — `docs.source.agentRoutesUrl`.

SQL un atkārtošanas maršruti JSON pamattekstā pieņem arī neobligātu `workspaceId`. Tas novirza vienu izsaukumu uz norādīto darbvietu, nemainot izvēli; ja to izlaid, tiek izmantota izvēlētā darbvieta. Ja nav ne izvēles, ne `workspaceId`, tie atbild ar `409 WORKSPACE_SELECTION_REQUIRED`.

## SQL saskarne

`POST /v1/agent/sql/query` ir saskarne stingri tikai lasīšanai (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`), bet `POST /v1/agent/sql/execute` ir rakstīšanas saskarne (`INSERT`, `UPDATE`, `DELETE`); vienā izsaukumā drīkst būt tikai lasīšanas vai tikai rakstīšanas vaicājumi.

Tā ir apzināti ierobežota un nav pilnvērtīgs PostgreSQL. Šī dokumentācija aptver tikai
atbalstīto dialektu, un tā nav PostgreSQL saderības rokasgrāmata.

Neviena lasīšanas darbība nelabo datus, nepārrēķina plānojumu un nemaina kartītes stāvokli. Visām
kartīšu un kartīšu komplektu izmaiņām izmanto `POST /v1/agent/sql/execute`. SQL nevar rakstīt
`review_events` vai FSRS plānošanas stāvokli; atkārtojumi jāreģistrē ar
`POST /v1/agent/reviews/submit`.

Pašreizējie vaicājumu veidi:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

Publicētie loģiskie resursi pašlaik ir:

- `workspace`
- `cards`
- `decks`
- `review_events`

Piezīmes:

- `LIMIT` noklusējuma vērtība ir `100`, un maksimālā vērtība ir `100`
- ja vajadzīga stabila lapošana, izmanto `ORDER BY`
- shēmas izpētei izmanto `SHOW TABLES` vai `DESCRIBE cards`
- katrs SQL izsaukums attiecas uz vienu darbvietu: pamattekstā norādīto `workspaceId` vai izvēlēto darbvietu

Pieprasījuma piemērs:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Kartīšu vaicājuma piemērs:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Izmaiņu piemērs:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

Pieejams arī attālais MCP serveris adresē `https://mcp.nibomo.com/mcp`, kas izmanto OAuth 2.1 (Dynamic Client Registration + PKCE). Tajā ir tas pats SQL sadalījums — `sql_query` (stingri tikai lasīšanai) un `sql_execute` (rakstīšanai) —, kā arī `list_workspaces`, `get_guide` un atkārtošanas rīkus `next_review_card`, `reveal_answer` un `submit_review`; skati [MCP savienotāju](/docs/mcp-connector/).

### Drošība un darbības joma

SQL saskarne ir norobežots dialekts, kura ievērošanu nodrošina parsētājs, nevis neapstrādāts PostgreSQL. Aizsardzības mehānismi ir šādi:

- **Slēgts atļauto vaicājumu saraksts**: lasīšanai tikai `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` un `SELECT`, rakstīšanai — `INSERT`, `UPDATE` un `DELETE`. Viss pārējais tiek noraidīts parsēšanas laikā.
- **Ierobežoti resursi**: vaicājumi var piekļūt tikai resursiem `workspace`, `cards`, `decks` un `review_events`.
- **Ierobežojums vienā darbvietā**: katrs vaicājums attiecas uz vienu darbvietu, kurai tev ir piekļuve, — vai nu pieprasījuma pamattekstā norādīto `workspaceId`, vai tavu izvēlēto darbvietu — bez piekļuves citām darbvietām.
- **Stingri pieprasījumu pamatteksti**: SQL un atkārtošanas maršruti noraida nezināmu pamatteksta lauku, tāpēc kļūdaini uzrakstīts `workspaceId` izraisa kļūdu, nevis izpildi izvēlētajā darbvietā.
- **Ierobežojumi**: līdz `100` rindām vienā vaicājumā, līdz `50` vaicājumiem vienā paketē un rezultāta ierobežojums aptuveni `12k` tokenu. Izmaiņu paketes tiek piemērotas atomāri.
- **Lasīšanas un rakstīšanas nodalīšana**: `sql_query` un `list_workspaces` ir stingri tikai lasīšanai (`readOnlyHint`) un nekad nelabo datus, nepārrēķina plānojumu un nemaina kartītes stāvokli. `sql_execute` ir vienīgais SQL rakstīšanas rīks, un tas veic rakstīšanu (`destructiveHint`); vienā izsaukumā drīkst būt tikai lasīšanas vai tikai rakstīšanas vaicājumi. SQL nevar rakstīt `review_events` vai FSRS plānošanas stāvokli; atkārtojumu reģistrē tikai `POST /v1/agent/reviews/submit` (MCP `submit_review`).

## Ceļveži

`GET /v1/agent/guide/{topic}` laukā `data.guide` atgriež vienu uzziņu ceļvedi — to pašu saturu, ko nodrošina MCP rīks `get_guide`. Tēmas:

- `sql_dialect`: pilna SQL gramatika, ierobežojumi un piemēri
- `card_authoring`: prasības kartītēm, birkas, dublikātu pārbaudes un formatējums
- `bulk_authoring`: liela rakstīšanas darba sadalīšana un pārbaude
- `review_flow`: atkārtošanas un vērtēšanas cikls

Uz nezināmu tēmu tiek atbildēts ar `400` un atbalstīto tēmu sarakstu. Pirms kartīšu veidošanas, lielapjoma rakstīšanas vai atkārtošanas ielādē atbilstošo ceļvedi, bet pēc noraidīta vaicājuma vēlreiz izlasi `sql_dialect`.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## Atkārtošana

Atkārtošanas maršruti ļauj aģentam pa vienai kartītei pārbaudīt lietotāja zināšanas un saglabāt katru vērtējumu kartītes FSRS grafikā. Tie pieņem tos pašus JSON argumentus kā MCP atkārtošanas rīki:

- `POST /v1/agent/reviews/next` atgriež `card` ar `cardId` un `frontText` vai `card: null`, ja nekas nav jāatkārto. Rindu var sašaurināt ar neobligātu `tags` (der jebkura no birkām) vai `deckId`, bet ne ar abiem reizē; pieprasījums bez pamatteksta ir derīgs.
- `POST /v1/agent/reviews/reveal` pieprasa `cardId` un atgriež šīs kartītes `backText`.
- `POST /v1/agent/reviews/submit` pieprasa `cardId`, klienta ģenerētu `reviewId` UUID, `rating` ar vērtību `Again`, `Hard`, `Good` vai `Easy` un lietotāja IANA laika joslu `reviewedTimeZone`. Serveris piešķir atkārtojuma laiku un atgriež kartītes jauno grafiku, tostarp `dueAt`, `state`, `reps` un `lapses`.

Visi trīs maršruti pieņem neobligāto `workspaceId`. Pirms iesniegšanas saglabā `reviewId`, un, ja nav skaidrs, vai iesniegšana izdevās, atkārto tieši to pašu pieprasījumu; otrs atkārtojums nekad netiek reģistrēts. Atkārtošanas maršruti var atbildēt arī ar:

- `409 REVIEW_EVENT_CONFLICT`: atkārtojums jau ir reģistrēts, un `error.details.reviewSchedule` satur kartītes pašreizējo grafiku.
- `409 REVIEW_ID_CARD_MISMATCH`: `reviewId` jau identificē citas kartītes atkārtojumu, tāpēc nekas netika saglabāts; iesniedz vēlreiz ar jaunu `reviewId`.
- `409 REVIEW_STALE`: kartītes saglabātais atkārtošanas laiks ir vienāds ar pašreizējo servera laiku vai vēlāks par to; atkārto citu kartīti.
- `400 REVIEW_INPUT_INVALID`: trūkst kāda argumenta, tas nav derīgs vai netiek atbalstīts, tostarp `tags` kopā ar `deckId` vai birka, ko darbvieta neizmanto.

Iesniegšanas piemērs:

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

## API cilvēkiem un sinhronizācijai

Nibomo ietver arī atsevišķus API cilvēku klientiem un sinhronizācijai, kas orientēta uz darbu bezsaistē, taču tie nav galvenā saskarne ārējiem aģentiem:

- pārlūka plūsmas izmanto kopīgā domēna sīkdatnes un CSRF aizsardzību
- uz darbu bezsaistē orientēti klienti izmanto ieviestos sinhronizācijas maršrutus `/v1/workspaces/{workspaceId}/sync/push` un `/v1/workspaces/{workspaceId}/sync/pull`
- sinhronizācijas maršruti ir nodalīti no ārējo aģentu saskarnes
