---
title: Marejeleo ya API
description: API ya mawakala wa nje kwa ugunduzi, uanzishaji wa OTP, kuandaa nafasi ya kazi, na violesura vya SQL vilivyochapishwa vya kusoma na kuandika.
---

## Muhtasari

Ukurasa huu unaeleza mkataba wa sasa wa Nibomo kwa mawakala wa nje wa AI.

Ikiwa kiteja chako kinatumia MCP, [kiunganishi cha MCP](/docs/mcp-connector/) ndiyo njia rahisi zaidi ya kuunganisha, na kinatumia kiolesura hiki hiki cha data. Ukurasa huu unaeleza mkataba wa HTTP wa ugunduzi, SQL, miongozo na marudio unaotumiwa na mawakala wa CLI.

Anza na sehemu rasmi ya ugunduzi:

```text
GET https://api.nibomo.com/v1/
```

Data hiyo hiyo ya ugunduzi inapatikana pia kupitia `GET /v1/agent`, lakini `/v1/` ndiyo sehemu kuu ya umma ya kuanzia.

Jibu la ugunduzi humweleza wakala jinsi ya:

- kuanza kuingia kwa OTP ya barua pepe
- kubadilisha OTP kuwa ufunguo wa API wa muda mrefu
- kupakia muktadha wa akaunti
- kuunda au kuchagua nafasi ya kazi
- kuendelea kupitia kiolesura cha SQL kilichochapishwa
- kupata miongozo ya marejeleo na kufanya marudio ya kadi moja baada ya nyingine

## Ugunduzi wakati wa uendeshaji na msimbo wa chanzo

OpenAPI haipatikani. URL nne zilizo hapa chini, ambazo awali zilitoa vipimo vya API, sasa hurudisha taarifa ileile ya ugunduzi ya JSON yenye `"openapiAvailable": false` badala ya skima:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

Tumia `GET https://api.nibomo.com/v1/` kwa ugunduzi wa sasa wakati wa uendeshaji. Fuata `docs.discoveryUrl` inayorudishwa kwa njia za uendeshaji, na `docs.source.agentRoutesUrl` kwa maelezo ya utekelezaji.

## Uanzishaji wa uthibitishaji

Uanzishaji wa OTP hufanyika kwenye huduma ya uthibitishaji:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

Mtiririko ni huu:

1. Ita `GET /v1/`.
2. Tuma barua pepe ya mtumiaji kwa `send-code`.
3. Soma `otpSessionToken` kutoka kwenye jibu.
4. Muombe mtumiaji msimbo wa hivi karibuni wa tarakimu 8 uliotumwa kwa barua pepe.
5. Ita `verify-code` ukitumia `code`, `otpSessionToken` na `label`.
6. Hifadhi ufunguo wa API unaorudishwa nje ya kumbukumbu ya gumzo.

Kigeu cha mazingira kinachopendekezwa:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Maombi yaliyothibitishwa hutumia:

```text
Authorization: ApiKey <key>
```

Mfano wa mfuatano wa uanzishaji:

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

## Kiolesura cha wakala baada ya kuingia

Baada ya uthibitisho, kiolesura cha sasa cha wakala ni:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (kusoma tu)
- `POST /v1/agent/sql/execute` (kuandika)
- `GET /v1/agent/guide/{topic}` (kusoma tu)
- `POST /v1/agent/reviews/next` (kusoma tu)
- `POST /v1/agent/reviews/reveal` (kusoma tu)
- `POST /v1/agent/reviews/submit` (kuandika)

Uanzishaji wa kawaida huonekana hivi:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. Ikihitajika, `POST /v1/agent/workspaces` ukitumia `{"name":"Personal"}`
4. Ikihitajika, `POST /v1/agent/workspaces/{workspaceId}/select`
5. Tumia `POST /v1/agent/sql/query` kusoma na `POST /v1/agent/sql/execute` kuandika

Uchaguzi wa nafasi ya kazi hufanywa waziwazi kwa kila muunganisho wa ufunguo wa API. Mawakala wanapaswa kufuata maandishi ya `instructions` yanayorudishwa na `docs.discoveryUrl` kwa njia za uendeshaji, pamoja na `docs.source.agentRoutesUrl` kwa maelezo ya utekelezaji, badala ya kubahatisha hatua inayofuata.

Njia za SQL na za marudio pia hukubali `workspaceId` ya hiari ndani ya mwili wa JSON. Huilenga nafasi hiyo ya kazi kwa ombi moja bila kubadilisha uchaguzi; iache ili kutumia nafasi ya kazi iliyochaguliwa. Kukiwa hakuna uchaguzi wala `workspaceId`, hujibu `409 WORKSPACE_SELECTION_REQUIRED`.

## Kiolesura cha SQL

`POST /v1/agent/sql/query` ni kiolesura cha kusoma tu kabisa (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`) na `POST /v1/agent/sql/execute` ni kiolesura cha kuandika (`INSERT`, `UPDATE`, `DELETE`); ombi moja lazima liwe la kusoma pekee au la kuandika pekee.

Kimewekewa mipaka kwa makusudi na si PostgreSQL kamili. Nyaraka hizi zinashughulikia lahaja inayotumika pekee, si marejeleo ya uoanifu na PostgreSQL.

Hakuna njia ya kusoma inayorekebisha data, kukokotoa upya ratiba, au kubadilisha hali ya kadi. Tumia `POST /v1/agent/sql/execute` kwa kila uandishi wa kadi na kundi la kadi. SQL haiwezi kuandika `review_events` wala hali ya ratiba ya FSRS; rekodi marudio kupitia `POST /v1/agent/reviews/submit`.

Aina za kauli zinazotumika sasa:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

Rasilimali za kimantiki zilizochapishwa kwa sasa ni pamoja na:

- `workspace`
- `cards`
- `decks`
- `review_events`

Maelezo:

- `LIMIT` huwa `100` kwa chaguo-msingi na haizidi `100`
- tumia `ORDER BY` unapohitaji ugawaji wa kurasa ulio thabiti
- tumia `SHOW TABLES` au `DESCRIBE cards` kugundua skima
- kila ombi la SQL huhusu nafasi moja ya kazi: `workspaceId` iliyo ndani ya mwili, au nafasi ya kazi iliyochaguliwa

Mfano wa ombi:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Mfano wa kusoma kadi:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Mfano wa kubadilisha data:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

Seva ya mbali ya MCP inapatikana pia kwenye `https://mcp.nibomo.com/mcp`, ikitumia OAuth 2.1 (Dynamic Client Registration + PKCE). Inatoa mgawanyo uleule wa SQL kama `sql_query` (kusoma tu kabisa) na `sql_execute` (kuandika), pamoja na `list_workspaces`, `get_guide`, na zana za marudio `next_review_card`, `reveal_answer` na `submit_review`; angalia [kiunganishi cha MCP](/docs/mcp-connector/).

### Usalama na wigo

Kiolesura cha SQL ni lahaja iliyodhibitiwa, inayolazimishwa na kichanganuzi, badala ya PostgreSQL ghafi. Kinga zake ni:

- **Orodha funge ya kauli zinazoruhusiwa**: `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` na `SELECT` pekee kwa kusoma, na `INSERT`, `UPDATE` na `DELETE` kwa kuandika. Kitu kingine chochote hukataliwa wakati wa uchanganuzi.
- **Rasilimali chache**: kauli zinaweza kugusa rasilimali za `workspace`, `cards`, `decks` na `review_events` pekee.
- **Wigo wa nafasi moja ya kazi**: kila kauli huhusu nafasi moja ya kazi unayoweza kuifikia, iwe ni `workspaceId` iliyo ndani ya mwili wa ombi au nafasi yako ya kazi iliyochaguliwa, bila ufikiaji wa wapangaji wengine.
- **Miili ya maombi mikali**: njia za SQL na za marudio hukataa sehemu ya mwili isiyojulikana, kwa hivyo `workspaceId` iliyoandikwa vibaya hushindwa badala ya kutekelezwa kwenye nafasi ya kazi iliyochaguliwa.
- **Mipaka**: hadi safu `100` kwa kila kauli, hadi kauli `50` kwa kila kundi la kauli, na kikomo cha matokeo cha takriban tokeni `12k`. Kila kundi la mabadiliko hutekelezwa lote kwa pamoja, au halitekelezwi kabisa.
- **Mgawanyo wa kusoma/kuandika**: `sql_query` na `list_workspaces` ni za kusoma tu kabisa (`readOnlyHint`) na kamwe hazirekebishi data, hazikokotoi upya ratiba, wala hazibadilishi hali ya kadi. `sql_execute` ndiyo zana pekee ya SQL ya kuandika na hufanya uandishi (`destructiveHint`); ombi moja lazima liwe la kusoma pekee au la kuandika pekee. SQL haiwezi kuandika `review_events` wala hali ya ratiba ya FSRS; ni `POST /v1/agent/reviews/submit` pekee (`submit_review` ya MCP) inayorekodi marudio.

## Miongozo

`GET /v1/agent/guide/{topic}` hurudisha mwongozo mmoja wa marejeleo ndani ya `data.guide`, maudhui yaleyale yanayotolewa na zana ya MCP `get_guide`. Mada ni:

- `sql_dialect`: sarufi kamili ya SQL, mipaka na mifano
- `card_authoring`: mkataba wa kadi, lebo, ukaguzi wa kadi zinazojirudia na mpangilio wa maandishi
- `bulk_authoring`: kugawa na kuthibitisha kazi kubwa ya kuandika
- `review_flow`: mzunguko wa marudio na ukadiriaji

Mada isiyojulikana hujibu `400` pamoja na orodha ya mada zinazotumika. Pata mwongozo unaohusika kabla ya kuandika kadi, kuandika kwa wingi, au kuendesha marudio, na usome tena `sql_dialect` baada ya kauli kukataliwa.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## Marudio

Njia za marudio humruhusu wakala kumuuliza mwanafunzi kadi moja baada ya nyingine na kuhifadhi kila ukadiriaji kwenye ratiba ya FSRS ya kadi hiyo. Zinapokea hoja zilezile za JSON kama zana za marudio za MCP:

- `POST /v1/agent/reviews/next` hurudisha `card` yenye `cardId` na `frontText`, au `card: null` wakati hakuna kadi inayostahili marudio. `tags` za hiari (lebo yoyote kati ya hizo) au `deckId` hupunguza foleni, kamwe si zote mbili; ombi lisilo na mwili ni halali.
- `POST /v1/agent/reviews/reveal` huhitaji `cardId` na hurudisha `backText` ya kadi hiyo.
- `POST /v1/agent/reviews/submit` huhitaji `cardId`, `reviewId` ya UUID iliyotengenezwa na kiteja, `rating` yenye thamani ya `Again`, `Hard`, `Good` au `Easy`, na `reviewedTimeZone` ya IANA ya mwanafunzi. Seva huweka muda wa marudio na hurudisha ratiba mpya ya kadi, ikiwemo `dueAt`, `state`, `reps` na `lapses`.

Njia zote tatu hukubali `workspaceId` ya hiari. Hifadhi `reviewId` kabla ya kuwasilisha, na rudia uwasilishaji usio na uhakika kwa ombi lilelile kabisa; kamwe hautarekodi marudio ya pili. Njia za marudio zinaweza pia kujibu:

- `409 REVIEW_EVENT_CONFLICT`: marudio tayari yalirekodiwa, na `error.details.reviewSchedule` hubeba ratiba ya sasa ya kadi.
- `409 REVIEW_ID_CARD_MISMATCH`: `reviewId` tayari inatambulisha marudio ya kadi nyingine, kwa hivyo hakuna kilichohifadhiwa; wasilisha tena ukitumia `reviewId` mpya.
- `409 REVIEW_STALE`: muda wa marudio uliohifadhiwa kwa kadi ni sawa na au baada ya muda wa sasa wa seva; fanya marudio ya kadi nyingine.
- `400 REVIEW_INPUT_INVALID`: hoja fulani haipo, si sahihi au haitumiki, ikiwemo `tags` pamoja na `deckId`, au lebo ambayo nafasi ya kazi haitumii.

Mfano wa uwasilishaji:

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

## API za watu na za usawazishaji

Nibomo pia ina API tofauti kwa viteja vinavyotumiwa na watu na kwa usawazishaji unaotanguliza matumizi bila intaneti, lakini hizo si mkataba mkuu kwa mawakala wa nje:

- mitiririko ya kivinjari hutumia vidakuzi vya kikoa cha pamoja pamoja na ulinzi wa CSRF
- viteja vinavyotanguliza matumizi bila intaneti hutumia njia za usawazishaji zilizotekelezwa chini ya `/v1/workspaces/{workspaceId}/sync/push` na `/v1/workspaces/{workspaceId}/sync/pull`
- njia za usawazishaji zimetenganishwa na kiolesura cha mawakala wa nje
