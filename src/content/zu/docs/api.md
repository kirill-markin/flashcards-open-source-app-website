---
title: Ireferensi ye-API
description: I-API yama-ejenti angaphandle yokuthola, ukuqalisa nge-OTP, ukusetha indawo yokusebenza, nezingxenye ze-SQL ezishicilelwe zokufunda nokubhala.
---

## Ukubuka ngokubanzi

Leli khasi lichaza isivumelwano samanje sama-ejenti e-AI angaphandle se-Nibomo.

Uma iklayenti lakho likhuluma i-MCP, [isixhumi se-MCP](/docs/mcp-connector/) yindlela
elula kakhulu yokuxhuma futhi sisonga yona le ngxenye yedatha. Leli khasi lichaza
isivumelwano se-HTTP sokuthola, se-SQL, semihlahlandlela, nesokubuyekeza esisetshenziswa ama-ejenti e-CLI.

Qala endaweni yokungena yokuthola esemthethweni:

```text
GET https://api.nibomo.com/v1/
```

Okuqukethwe okufanayo kokuthola kuyatholakala naku-`GET /v1/agent`, kodwa `/v1/` yiyona ndawo yokungena eyinhloko yomphakathi.

Impendulo yokuthola itshela i-ejenti ukuthi:

- iqale kanjani ukungena nge-OTP ye-imeyili
- ishintshanise kanjani i-OTP ngokhiye we-API ohlala isikhathi eside
- ilayishe kanjani imininingwane ye-akhawunti
- idale noma ikhethe kanjani indawo yokusebenza
- iqhubeke kanjani ngengxenye ye-SQL eshicilelwe
- ilande kanjani imihlahlandlela yereferensi futhi ibuyekeze amakhadi ngalinye ngalinye

## Ukuthola ngesikhathi sokusebenza nekhodi yomthombo

I-OpenAPI ayitholakali. Ama-URL amane angaphambili okucaciswa angezansi manje abuyisa isaziso esifanayo sokuthola se-JSON esine-`"openapiAvailable": false` esikhundleni se-schema:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

Sebenzisa i-`GET https://api.nibomo.com/v1/` ukuze uthole imininingwane yamanje yokuthola ngesikhathi sokusebenza. Landela i-`docs.discoveryUrl` ebuyisiwe ukuze uthole imizila yesikhathi sokusebenza kanye ne-`docs.source.agentRoutesUrl` ukuze uthole imininingwane yokwakhiwa.

## Ukuqalisa ukuqinisekisa ubuwena

Ukuqalisa nge-OTP kwenzeka kusevisi yokuqinisekisa ubuwena:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

Inqubo imi kanje:

1. Biza i-`GET /v1/`.
2. Thumela i-imeyili yomsebenzisi ku-`send-code`.
3. Funda i-`otpSessionToken` empendulweni.
4. Cela umsebenzisi ikhodi ye-imeyili yakamuva enezinombolo ezingu-8.
5. Biza i-`verify-code` nge-`code`, `otpSessionToken`, ne-`label`.
6. Gcina ukhiye we-API obuyisiwe ngaphandle kwenkumbulo yengxoxo.

Okuguquguqukayo kwemvelo okunconywayo:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Izicelo eziqinisekisiwe zisebenzisa:

```text
Authorization: ApiKey <key>
```

Isibonelo sokulandelana kokuqalisa:

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

## Ingxenye yama-ejenti ngemva kokungena

Ngemva kokuqinisekisa, ingxenye yamanje yama-ejenti yile:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (ukufunda kuphela)
- `POST /v1/agent/sql/execute` (ukubhala)
- `GET /v1/agent/guide/{topic}` (ukufunda kuphela)
- `POST /v1/agent/reviews/next` (ukufunda kuphela)
- `POST /v1/agent/reviews/reveal` (ukufunda kuphela)
- `POST /v1/agent/reviews/submit` (ukubhala)

Ukuqalisa okujwayelekile kubukeka kanje:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. Uma kudingeka, `POST /v1/agent/workspaces` nge-`{"name":"Personal"}`
4. Uma kudingeka, `POST /v1/agent/workspaces/{workspaceId}/select`
5. Sebenzisa i-`POST /v1/agent/sql/query` ukuze ufunde ne-`POST /v1/agent/sql/execute` ukuze ubhale

Ukukhethwa kwendawo yokusebenza kwenziwa ngokucacile koxhumo ngalunye lokhiye we-API. Ama-ejenti kufanele alandele umbhalo we-`instructions` obuyisiwe kanye ne-`docs.discoveryUrl` ukuze athole imizila yesikhathi sokusebenza, kanye ne-`docs.source.agentRoutesUrl` ukuze athole imininingwane yokwakhiwa, esikhundleni sokuqagela isinyathelo esilandelayo.

Imizila ye-SQL neyokubuyekeza iphinde yamukele i-`workspaceId` engaphoqelekile emzimbeni we-JSON. Ikhomba leyo ndawo yokusebenza ekubizweni okukodwa ngaphandle kokushintsha ukukhetha; yishiye ukuze usebenzise indawo yokusebenza ekhethiwe. Uma kungekho ukukhetha noma i-`workspaceId`, iphendula nge-`409 WORKSPACE_SELECTION_REQUIRED`.

## Ingxenye ye-SQL

I-`POST /v1/agent/sql/query` yingxenye yokufunda kuphela ngokuqinile (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`) futhi i-`POST /v1/agent/sql/execute` yingxenye yokubhala (`INSERT`, `UPDATE`, `DELETE`); ukubiza okukodwa kufanele kube ngokwemiyalo yokufunda kuphela noma yokubhala kuphela.

Ilinganiselwe ngamabomu futhi ayiyona i-PostgreSQL ephelele. Le mibhalo ichaza kuphela
uhlobo lwe-SQL olusekelwayo, hhayi ireferensi yokuhambisana ne-PostgreSQL.

Ayikho indlela yokufunda elungisa idatha, ebala kabusha ukuhlela, noma eshintsha isimo sekhadi. Sebenzisa
i-`POST /v1/agent/sql/execute` kukho konke ukubhala kwamakhadi namaqoqo amakhadi. I-SQL ayikwazi ukubhala
i-`review_events` noma isimo sokuhlela se-FSRS; rekhoda ukubuyekeza
nge-`POST /v1/agent/reviews/submit`.

Izinhlobo zemiyalo zamanje:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

Izinsiza ezingokomqondo ezishicilelwe okwamanje zihlanganisa:

- `workspace`
- `cards`
- `decks`
- `review_events`

Amanothi:

- i-`LIMIT` ngokuzenzakalela ingu-`100` futhi ikhawulelwe ku-`100`
- sebenzisa i-`ORDER BY` uma udinga ukwehlukaniswa kwamakhasi okuzinzile
- sebenzisa i-`SHOW TABLES` noma i-`DESCRIBE cards` ukuze uthole i-schema
- konke ukubiza kwe-SQL kukhawulelwe endaweni yokusebenza eyodwa: i-`workspaceId` esemzimbeni, noma indawo yokusebenza ekhethiwe

Isibonelo sesicelo:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Isibonelo sombuzo wamakhadi:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Isibonelo soshintsho:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

Iseva ye-MCP ekude iyatholakala futhi ku-`https://mcp.nibomo.com/mcp` isebenzisa i-OAuth 2.1 (Dynamic Client Registration + PKCE). Inikeza ukuhlukaniswa okufanayo kwe-SQL njenge-`sql_query` (ukufunda kuphela ngokuqinile) ne-`sql_execute` (ukubhala), kanye ne-`list_workspaces`, `get_guide`, namathuluzi okubuyekeza `next_review_card`, `reveal_answer`, ne-`submit_review`; bheka [isixhumi se-MCP](/docs/mcp-connector/).

### Ukuphepha nobubanzi

Ingxenye ye-SQL iwuhlobo lwe-SQL oluvalelekile, oluphoqelelwa yi-parser, hhayi i-PostgreSQL eluhlaza. Izivikelo yilezi:

- **Uhlu oluvaliwe lwemiyalo evunyelwe**: kuphela i-`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, ne-`SELECT` yokufunda, kanye ne-`INSERT`, `UPDATE`, ne-`DELETE` yokubhala. Noma yini enye yenqatshwa ngesikhathi sokuhlaziya umyalo.
- **Izinsiza ezilinganiselwe**: imiyalo ingathinta kuphela izinsiza `workspace`, `cards`, `decks`, ne-`review_events`.
- **Ububanzi bendawo yokusebenza ngayinye**: wonke umyalo ukhawulelwe endaweni yokusebenza eyodwa ongayifinyelela, kungaba yi-`workspaceId` esemzimbeni wesicelo noma indawo yakho yokusebenza ekhethiwe, kungekho kufinyelela phakathi kwezindawo zokusebenza ezahlukene.
- **Imizimba yezicelo eqinile**: imizila ye-SQL neyokubuyekeza yenqaba inkambu yomzimba engaziwa, ngakho i-`workspaceId` ebhalwe ngephutha iyahluleka esikhundleni sokusebenza endaweni yokusebenza ekhethiwe.
- **Imikhawulo**: kufika emigqeni engu-`100` emyalweni ngamunye, kufika emiyalweni engu-`50` esixheni ngasinye, kanye nomkhawulo womphumela ocishe ube ngamathokheni angu-`12k`. Izixha zokushintsha zisebenza ngokuphelele noma zingasebenzi nhlobo.
- **Ukuhlukaniswa kokufunda nokubhala**: i-`sql_query` ne-`list_workspaces` angamathuluzi okufunda kuphela ngokuqinile (`readOnlyHint`) futhi awalokothi alungise idatha, abale kabusha ukuhlela, noma ashintshe isimo sekhadi. I-`sql_execute` yiyona kuphela ithuluzi le-SQL lokubhala futhi lenza ukubhala (`destructiveHint`); ukubiza okukodwa kufanele kube ngokwemiyalo yokufunda kuphela noma yokubhala kuphela. I-SQL ayikwazi ukubhala i-`review_events` noma isimo sokuhlela se-FSRS; kuphela i-`POST /v1/agent/reviews/submit` (ithuluzi le-MCP `submit_review`) erekhoda ukubuyekeza.

## Imihlahlandlela

I-`GET /v1/agent/guide/{topic}` ibuyisa umhlahlandlela wereferensi owodwa ku-`data.guide`, umzimba ofanayo olethwa yithuluzi le-MCP `get_guide`. Izihloko:

- `sql_dialect`: uhlelo lolimi lwe-SQL oluphelele, imikhawulo, nezibonelo
- `card_authoring`: isivumelwano sekhadi, amathegi, ukuhlola izimpinda, nokufometha
- `bulk_authoring`: ukuhlukanisa nokuqinisekisa umsebenzi omkhulu wokubhala
- `review_flow`: umjikelezo wokubuyekeza nokulinganisa

Isihloko esingaziwa siphendula nge-`400` kanye nohlu lwezihloko ezisekelwayo. Landa umhlahlandlela ofanele ngaphambi kokubhala amakhadi, ukubhala ngobuningi, noma ukuqhuba ukubuyekeza, futhi uphinde ufunde i-`sql_dialect` ngemva komyalo owenqatshiwe.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## Ukubuyekeza

Imizila yokubuyekeza ivumela i-ejenti ukuthi ibuze umfundi ikhadi elilodwa ngesikhathi futhi igcine isilinganiso ngasinye ohlelweni lwe-FSRS lwekhadi. Ithatha ama-agumenti e-JSON afanayo namathuluzi okubuyekeza e-MCP:

- I-`POST /v1/agent/reviews/next` ibuyisa i-`card` ene-`cardId` ne-`frontText`, noma i-`card: null` uma kungekho okusesikhathini sokubuyekezwa. I-`tags` engaphoqelekile (noma iyiphi yawo) noma i-`deckId` inciphisa umugqa, kodwa hhayi zombili ndawonye; isicelo esingenamzimba sivumelekile.
- I-`POST /v1/agent/reviews/reveal` idinga i-`cardId` futhi ibuyisa i-`backText` yalelo khadi.
- I-`POST /v1/agent/reviews/submit` idinga i-`cardId`, i-UUID ye-`reviewId` eyenziwe yiklayenti, i-`rating` engu-`Again`, `Hard`, `Good`, noma `Easy`, kanye ne-`reviewedTimeZone` ye-IANA yomfundi. Iseva ibeka isikhathi sokubuyekeza futhi ibuyisa uhlelo olusha lwekhadi, kuhlanganise ne-`dueAt`, `state`, `reps`, ne-`lapses`.

Yomithathu imizila yamukela i-`workspaceId` engaphoqelekile. Gcina i-`reviewId` ngaphambi kokuthumela, futhi uzame futhi ukuthumela okungaqinisekile ngesicelo esifanayo ncamashi; akulokothi kurekhode ukubuyekeza kwesibili. Imizila yokubuyekeza ingaphinde iphendule ngokuthi:

- `409 REVIEW_EVENT_CONFLICT`: ukubuyekeza kwase kurekhodiwe, futhi i-`error.details.reviewSchedule` iqukethe uhlelo lwamanje lwekhadi.
- `409 REVIEW_ID_CARD_MISMATCH`: i-`reviewId` isivele ikhomba ukubuyekezwa kwekhadi elihlukile, ngakho akukho okugciniwe; thumela futhi nge-`reviewId` entsha.
- `409 REVIEW_STALE`: isikhathi sokubuyekeza esigcinwe ekhadini silingana noma singemva kwesikhathi samanje seseva; buyekeza elinye ikhadi.
- `400 REVIEW_INPUT_INVALID`: i-agumenti ayikho, ayivumelekile, noma ayisekelwa, kuhlanganise ne-`tags` ehlanganiswe ne-`deckId` noma ithegi engasetshenziswa yindawo yokusebenza.

Isibonelo sokuthumela:

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

## Ama-API abantu nawokuvumelanisa

I-Nibomo iphinde ibe nama-API ahlukene amaklayenti abantu nawokuvumelanisa okusebenza kuqala ngaphandle kwe-inthanethi, kodwa awasona isivumelwano esiyinhloko sama-ejenti angaphandle:

- izinqubo zesiphequluli zisebenzisa amakhukhi esizinda esabiwe kanye nesivikelo se-CSRF
- amaklayenti asebenza kuqala ngaphandle kwe-inthanethi asebenzisa imizila yokuvumelanisa esetshenzisiwe ngaphansi kwe-`/v1/workspaces/{workspaceId}/sync/push` ne-`/v1/workspaces/{workspaceId}/sync/pull`
- imizila yokuvumelanisa ihlukile engxenyeni yama-ejenti angaphandle
