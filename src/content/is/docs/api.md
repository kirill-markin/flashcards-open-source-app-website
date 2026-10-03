---
title: API-tilvísun
description: API fyrir ytri gervigreindarumboð með uppgötvun, frumstillingu með einnota kóða, uppsetningu vinnusvæðis og útgefnum SQL-viðmótum til lestrar og skrifa.
---

## Yfirlit

Þessi síða lýsir núverandi viðmótsskilgreiningu Nibomo fyrir ytri gervigreindarumboð.

Ef biðlarinn þinn styður MCP er [MCP-tengið](/docs/mcp-connector/)
einfaldasta leiðin til að tengjast, og það byggir á sama gagnaviðmóti. Þessi síða lýsir
HTTP-skilgreiningunni fyrir uppgötvun, SQL, leiðbeiningar og upprifjun sem gervigreindarumboð í skipanalínu nota.

Byrjaðu á opinbera upphafspunktinum fyrir uppgötvun:

```text
GET https://api.nibomo.com/v1/
```

Sama uppgötvunarsvar er einnig í boði á `GET /v1/agent`, en `/v1/` er aðalupphafspunkturinn.

Uppgötvunarsvarið segir gervigreindarumboði hvernig það á að:

- hefja innskráningu með einnota kóða í tölvupósti
- skipta einnota kóðanum út fyrir langlífan API-lykil
- hlaða upplýsingum um aðganginn
- búa til eða velja vinnusvæði
- halda áfram í gegnum útgefna SQL-viðmótið
- sækja leiðbeiningar og rifja upp spjöld eitt í einu

## Uppgötvun á keyrslutíma og frumkóði

OpenAPI er ekki í boði. Fjórar fyrri slóðir skilgreiningarinnar hér að neðan skila nú sömu JSON-tilkynningu um uppgötvun með `"openapiAvailable": false` í stað gagnaskema:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

Notaðu `GET https://api.nibomo.com/v1/` fyrir núverandi uppgötvun á keyrslutíma. Fylgdu `docs.discoveryUrl` í svarinu fyrir slóðir á keyrslutíma og `docs.source.agentRoutesUrl` fyrir upplýsingar um útfærsluna.

## Frumstilling auðkenningar

Frumstilling með einnota kóða fer fram í auðkenningarþjónustunni:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

Flæðið er svona:

1. Kallaðu á `GET /v1/`.
2. Sendu netfang notandans á `send-code`.
3. Lestu `otpSessionToken` úr svarinu.
4. Biddu notandann um nýjasta 8 stafa kóðann úr tölvupóstinum.
5. Kallaðu á `verify-code` með `code`, `otpSessionToken` og `label`.
6. Geymdu API-lykilinn sem skilað er utan spjallminnisins.

Ráðlögð umhverfisbreyta:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Auðkenndar beiðnir nota:

```text
Authorization: ApiKey <key>
```

Dæmi um frumstillingu:

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

## Viðmót gervigreindarumboða eftir innskráningu

Eftir staðfestingu samanstendur viðmót gervigreindarumboða nú af:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (aðeins lestur)
- `POST /v1/agent/sql/execute` (skrif)
- `GET /v1/agent/guide/{topic}` (aðeins lestur)
- `POST /v1/agent/reviews/next` (aðeins lestur)
- `POST /v1/agent/reviews/reveal` (aðeins lestur)
- `POST /v1/agent/reviews/submit` (skrif)

Dæmigerð frumstilling lítur svona út:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. Ef þörf krefur, `POST /v1/agent/workspaces` með `{"name":"Personal"}`
4. Ef þörf krefur, `POST /v1/agent/workspaces/{workspaceId}/select`
5. Notaðu `POST /v1/agent/sql/query` til lestrar og `POST /v1/agent/sql/execute` til skrifa

Vinnusvæði er valið sérstaklega fyrir hverja tengingu með API-lykli. Gervigreindarumboð ættu að fylgja textanum í `instructions` og `docs.discoveryUrl` í svarinu fyrir slóðir á keyrslutíma, ásamt `docs.source.agentRoutesUrl` fyrir upplýsingar um útfærsluna, í stað þess að giska á næsta skref.

SQL- og upprifjunarslóðirnar taka einnig við valfrjálsu `workspaceId` í JSON-meginmálinu. Það beinir einu kalli að viðkomandi vinnusvæði án þess að breyta valinu; slepptu því til að nota valda vinnusvæðið. Ef hvorki er til val né `workspaceId` svara þær með `409 WORKSPACE_SELECTION_REQUIRED`.

## SQL-viðmót

`POST /v1/agent/sql/query` er viðmót eingöngu til lestrar (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`) og `POST /v1/agent/sql/execute` er viðmótið til skrifa (`INSERT`, `UPDATE`, `DELETE`); hvert kall verður annaðhvort að innihalda eingöngu lestur eða eingöngu skrif.

Það er takmarkað af ásettu ráði og jafngildir ekki fullu PostgreSQL. Þessi skjölun nær aðeins yfir
studdu mállýskuna og er ekki tilvísun um samhæfni við PostgreSQL.

Engin lestrarleið lagfærir gögn, endurreiknar tímasetningu eða breytir stöðu spjalda. Notaðu
`POST /v1/agent/sql/execute` fyrir öll skrif á spjöldum og stokkum. SQL getur ekki skrifað í
`review_events` eða tímasetningarstöðu FSRS; skráðu upprifjanir í gegnum
`POST /v1/agent/reviews/submit`.

Núverandi tegundir skipana:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

Útgefnar rökrænar auðlindir eru nú:

- `workspace`
- `cards`
- `decks`
- `review_events`

Athugasemdir:

- `LIMIT` er sjálfgefið `100` og að hámarki `100`
- notaðu `ORDER BY` þegar þú þarft stöðuga síðuskiptingu
- notaðu `SHOW TABLES` eða `DESCRIBE cards` til að kanna gagnaskemað
- hvert SQL-kall nær aðeins til eins vinnusvæðis, þess sem `workspaceId` í meginmálinu tilgreinir eða valda vinnusvæðisins

Dæmi um beiðni:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Dæmi um fyrirspurn um spjöld:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Dæmi um breytingu:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

Fjartengdur MCP-þjónn er einnig í boði á `https://mcp.nibomo.com/mcp` og notar OAuth 2.1 (Dynamic Client Registration + PKCE). Hann býður upp á sömu skiptingu SQL í `sql_query` (eingöngu lestur) og `sql_execute` (skrif), auk `list_workspaces`, `get_guide` og upprifjunartólanna `next_review_card`, `reveal_answer` og `submit_review`; sjá [MCP-tengið](/docs/mcp-connector/).

### Öryggi og umfang

SQL-viðmótið er afmörkuð mállýska sem þáttarinn framfylgir, ekki hrátt PostgreSQL. Varnirnar eru:

- **Lokaður listi yfir leyfðar skipanir**: aðeins `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` og `SELECT` til lestrar, og `INSERT`, `UPDATE` og `DELETE` til skrifa. Öllu öðru er hafnað við þáttun.
- **Takmarkaðar auðlindir**: skipanir geta aðeins snert auðlindirnar `workspace`, `cards`, `decks` og `review_events`.
- **Afmörkun við vinnusvæði**: hver skipun nær aðeins til eins vinnusvæðis sem þú hefur aðgang að, annaðhvort þess sem `workspaceId` í meginmáli beiðninnar tilgreinir eða valda vinnusvæðisins, án aðgangs þvert á leigjendur.
- **Strangt meginmál beiðna**: SQL- og upprifjunarslóðirnar hafna óþekktum reitum í meginmálinu, svo rangt stafsett `workspaceId` leiðir til villu í stað þess að keyra á valda vinnusvæðinu.
- **Hámörk**: allt að `100` raðir á hverja skipun, allt að `50` skipanir í hverri lotu og hámark á niðurstöðum sem nemur um það bil `12k` tókum. Lotur með breytingum eru framkvæmdar í heild eða alls ekki.
- **Skipting lestrar og skrifa**: `sql_query` og `list_workspaces` eru eingöngu til lestrar (`readOnlyHint`) og lagfæra aldrei gögn, endurreikna tímasetningu eða breyta stöðu spjalda. `sql_execute` er eina SQL-tólið til skrifa og breytir gögnum (`destructiveHint`); hvert kall verður annaðhvort að innihalda eingöngu lestur eða eingöngu skrif. SQL getur ekki skrifað í `review_events` eða tímasetningarstöðu FSRS; aðeins `POST /v1/agent/reviews/submit` (MCP `submit_review`) skráir upprifjun.

## Leiðbeiningar

`GET /v1/agent/guide/{topic}` skilar einum leiðbeiningum í `data.guide`, sama texta og MCP-tólið `get_guide` birtir. Efni:

- `sql_dialect`: öll SQL-málfræðin, takmörk og dæmi
- `card_authoring`: reglurnar um spjöld, merki, athugun á tvítekningum og snið
- `bulk_authoring`: að skipta stóru skrifverki upp og sannreyna það
- `review_flow`: upprifjunar- og einkunnaferlið

Óþekkt efni fær svarið `400` ásamt lista yfir studd efni. Sæktu viðeigandi leiðbeiningar áður en þú býrð til spjöld, skrifar mikið magn í einu eða keyrir upprifjun, og lestu `sql_dialect` aftur eftir að skipun hefur verið hafnað.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## Upprifjun

Upprifjunarslóðirnar gera gervigreindarumboði kleift að spyrja nemanda út úr einu spjaldi í einu og vista hverja einkunn í FSRS-áætlun spjaldsins. Þær taka sömu JSON-færibreytur og upprifjunartól MCP:

- `POST /v1/agent/reviews/next` skilar `card` með `cardId` og `frontText`, eða `card: null` þegar ekkert er á dagskrá. Valfrjálst `tags` (samsvörun við eitthvert merkjanna) eða `deckId` þrengir röðina, aldrei hvort tveggja; beiðni án meginmáls er gild.
- `POST /v1/agent/reviews/reveal` krefst `cardId` og skilar `backText` þess spjalds.
- `POST /v1/agent/reviews/submit` krefst `cardId`, `reviewId` UUID sem biðlarinn býr til, `rating` sem er `Again`, `Hard`, `Good` eða `Easy`, og IANA `reviewedTimeZone` nemandans. Þjónninn stimplar tíma upprifjunarinnar og skilar nýrri áætlun spjaldsins, þar á meðal `dueAt`, `state`, `reps` og `lapses`.

Allar þrjár slóðirnar taka við valfrjálsu `workspaceId`. Geymdu `reviewId` áður en þú sendir inn og endurtaktu óvissa innsendingu með nákvæmlega sömu beiðni; hún skráir aldrei aðra upprifjun. Upprifjunarslóðirnar geta einnig svarað með:

- `409 REVIEW_EVENT_CONFLICT`: upprifjunin hefur þegar verið skráð og `error.details.reviewSchedule` inniheldur núverandi áætlun spjaldsins.
- `409 REVIEW_ID_CARD_MISMATCH`: `reviewId` auðkennir þegar upprifjun á öðru spjaldi, svo ekkert var vistað; sendu aftur inn með nýju `reviewId`.
- `409 REVIEW_STALE`: vistaður upprifjunartími spjaldsins er sá sami og núverandi tími þjónsins eða síðar; rifjaðu upp annað spjald.
- `400 REVIEW_INPUT_INVALID`: færibreytu vantar eða hún er ógild eða óstudd, þar á meðal `tags` ásamt `deckId` eða merki sem vinnusvæðið notar ekki.

Dæmi um innsendingu:

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

## API fyrir fólk og samstillingu

Nibomo inniheldur einnig sérstök API fyrir biðlara sem fólk notar og fyrir samstillingu án nettengingar, en þau eru ekki aðalviðmót ytri gervigreindarumboða:

- flæði í vafra nota vafrakökur á sameiginlegu léni ásamt CSRF-vörn
- biðlarar sem virka fyrst og fremst án nettengingar nota útfærðar samstillingarslóðir undir `/v1/workspaces/{workspaceId}/sync/push` og `/v1/workspaces/{workspaceId}/sync/pull`
- samstillingarslóðirnar eru aðskildar frá viðmóti ytri gervigreindarumboða
