---
title: API సూచిక
description: డిస్కవరీ, OTP ప్రారంభ సెటప్, వర్క్‌స్పేస్ సెటప్, ప్రచురించిన SQL రీడ్, రైట్ ఇంటర్‌ఫేస్‌ల కోసం బాహ్య ఏజెంట్ API.
---

## అవలోకనం

ఈ పేజీ Nibomo కోసం ప్రస్తుత బాహ్య AI-ఏజెంట్ కాంట్రాక్ట్‌ను వివరిస్తుంది.

మీ క్లయింట్ MCP ను సపోర్ట్ చేస్తే, కనెక్ట్ కావడానికి [MCP కనెక్టర్](/docs/mcp-connector/) అత్యంత సులభమైన మార్గం; అది ఇదే డేటా ఇంటర్‌ఫేస్‌పై
ఆధారపడి పనిచేస్తుంది. ఈ పేజీ CLI ఏజెంట్లు వాడే HTTP డిస్కవరీ, SQL, గైడ్, పునశ్చరణ
కాంట్రాక్ట్‌ను వివరిస్తుంది.

అధికారిక డిస్కవరీ ఎంట్రీ పాయింట్ నుంచి మొదలుపెట్టండి:

```text
GET https://api.nibomo.com/v1/
```

ఇదే డిస్కవరీ పేలోడ్ `GET /v1/agent` వద్ద కూడా అందుబాటులో ఉంది, కానీ ప్రధాన పబ్లిక్ ఎంట్రీ పాయింట్ `/v1/`.

డిస్కవరీ రెస్పాన్స్ ఏజెంట్‌కు ఇవి ఎలా చేయాలో చెబుతుంది:

- ఈమెయిల్ OTP లాగిన్ మొదలుపెట్టడం
- OTP ని దీర్ఘకాల API కీగా మార్చుకోవడం
- ఖాతా సందర్భాన్ని లోడ్ చేయడం
- వర్క్‌స్పేస్‌ను సృష్టించడం లేదా ఎంచుకోవడం
- ప్రచురించిన SQL ఇంటర్‌ఫేస్ ద్వారా కొనసాగడం
- రిఫరెన్స్ గైడ్‌లను పొందడం, కార్డులను ఒక్కొక్కటిగా పునశ్చరణ చేయడం

## రన్‌టైమ్ డిస్కవరీ, సోర్స్

OpenAPI అందుబాటులో లేదు. కింద ఉన్న నాలుగు పాత స్పెసిఫికేషన్ URLలు ఇప్పుడు స్కీమాకు బదులుగా `"openapiAvailable": false` తో అదే JSON డిస్కవరీ నోటీసును తిరిగి ఇస్తాయి:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

ప్రస్తుత రన్‌టైమ్ డిస్కవరీ కోసం `GET https://api.nibomo.com/v1/` వాడండి. రన్‌టైమ్ రూట్‌ల కోసం తిరిగి వచ్చిన `docs.discoveryUrl` ను, అమలు వివరాల కోసం `docs.source.agentRoutesUrl` ను అనుసరించండి.

## ప్రామాణీకరణ ప్రారంభ సెటప్

OTP ప్రారంభ సెటప్ ప్రామాణీకరణ సేవపై నడుస్తుంది:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

ప్రక్రియ ఇలా ఉంటుంది:

1. `GET /v1/` ను కాల్ చేయండి.
2. యూజర్ ఈమెయిల్‌ను `send-code` కు పంపండి.
3. రెస్పాన్స్ నుంచి `otpSessionToken` ను చదవండి.
4. ఈమెయిల్‌కు వచ్చిన తాజా 8 అంకెల కోడ్‌ను యూజర్‌ను అడగండి.
5. `code`, `otpSessionToken`, `label` తో `verify-code` ను కాల్ చేయండి.
6. తిరిగి వచ్చిన API కీని చాట్ మెమరీ బయట భద్రపరచండి.

సిఫార్సు చేసిన ఎన్విరాన్‌మెంట్ వేరియబుల్:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

ప్రామాణీకరించిన అభ్యర్థనలు ఇది వాడతాయి:

```text
Authorization: ApiKey <key>
```

ప్రారంభ సెటప్ క్రమానికి ఉదాహరణ:

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

## లాగిన్ తర్వాత ఏజెంట్ ఇంటర్‌ఫేస్

ధృవీకరణ తర్వాత, ప్రస్తుత ఏజెంట్ ఇంటర్‌ఫేస్ ఇది:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (చదవడానికి మాత్రమే)
- `POST /v1/agent/sql/execute` (రాయడం)
- `GET /v1/agent/guide/{topic}` (చదవడానికి మాత్రమే)
- `POST /v1/agent/reviews/next` (చదవడానికి మాత్రమే)
- `POST /v1/agent/reviews/reveal` (చదవడానికి మాత్రమే)
- `POST /v1/agent/reviews/submit` (రాయడం)

సాధారణ ప్రారంభ సెటప్ ఇలా ఉంటుంది:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. అవసరమైతే, `{"name":"Personal"}` తో `POST /v1/agent/workspaces`
4. అవసరమైతే, `POST /v1/agent/workspaces/{workspaceId}/select`
5. చదవడానికి `POST /v1/agent/sql/query`, రాయడానికి `POST /v1/agent/sql/execute` వాడండి

వర్క్‌స్పేస్ ఎంపిక ప్రతి API కీ కనెక్షన్‌కు విడిగా, స్పష్టంగా జరుగుతుంది. ఏజెంట్లు తర్వాతి దశను ఊహించకుండా, తిరిగి వచ్చిన `instructions` టెక్స్ట్‌ను, రన్‌టైమ్ రూట్‌ల కోసం `docs.discoveryUrl` ను, అమలు వివరాల కోసం `docs.source.agentRoutesUrl` ను అనుసరించాలి.

SQL, పునశ్చరణ రూట్‌లు JSON బాడీలో ఐచ్ఛికంగా `workspaceId` ను కూడా అంగీకరిస్తాయి. అది ఎంపికను మార్చకుండా ఒక్క కాల్‌కు ఆ వర్క్‌స్పేస్‌ను లక్ష్యంగా చేసుకుంటుంది; ఎంచుకున్న వర్క్‌స్పేస్‌ను వాడాలంటే దాన్ని వదిలేయండి. ఎంపిక గానీ `workspaceId` గానీ లేకపోతే, అవి `409 WORKSPACE_SELECTION_REQUIRED` తో స్పందిస్తాయి.

## SQL ఇంటర్‌ఫేస్

`POST /v1/agent/sql/query` ఖచ్చితంగా చదవడానికి మాత్రమే ఉద్దేశించిన ఇంటర్‌ఫేస్ (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`), `POST /v1/agent/sql/execute` రాసే ఇంటర్‌ఫేస్ (`INSERT`, `UPDATE`, `DELETE`); ఒక కాల్‌లో అన్నీ రీడ్‌లే ఉండాలి, లేదా అన్నీ రైట్‌లే ఉండాలి.

ఇది ఉద్దేశపూర్వకంగా పరిమితం చేయబడింది, పూర్తి PostgreSQL కాదు. ఈ డాక్స్ మద్దతు ఉన్న
డయలెక్ట్‌ను మాత్రమే వివరిస్తాయి; ఇవి PostgreSQL అనుకూలత సూచిక కాదు.

ఏ రీడ్ మార్గమూ డేటాను సరిచేయదు, షెడ్యూలింగ్‌ను తిరిగి లెక్కించదు, కార్డు స్థితిని మార్చదు.
ప్రతి కార్డు, డెక్ రైట్‌కు `POST /v1/agent/sql/execute` వాడండి. SQL
`review_events` ను గానీ FSRS షెడ్యూలింగ్ స్థితిని గానీ రాయలేదు; పునశ్చరణలను
`POST /v1/agent/reviews/submit` ద్వారా నమోదు చేయండి.

ప్రస్తుత స్టేట్‌మెంట్ రకాలు:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

ప్రస్తుతం ప్రచురించిన లాజికల్ రిసోర్సులు:

- `workspace`
- `cards`
- `decks`
- `review_events`

గమనికలు:

- `LIMIT` డిఫాల్ట్‌గా `100`, గరిష్ఠ పరిమితి కూడా `100`
- స్థిరమైన పేజినేషన్ కావాలంటే `ORDER BY` వాడండి
- స్కీమాను తెలుసుకోవడానికి `SHOW TABLES` లేదా `DESCRIBE cards` వాడండి
- ప్రతి SQL కాల్ ఒక్క వర్క్‌స్పేస్‌కే పరిమితం: బాడీలోని `workspaceId`, లేదా ఎంచుకున్న వర్క్‌స్పేస్

అభ్యర్థనకు ఉదాహరణ:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

కార్డు క్వెరీకి ఉదాహరణ:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

డేటా మార్పుకు ఉదాహరణ:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

OAuth 2.1 (Dynamic Client Registration + PKCE) తో `https://mcp.nibomo.com/mcp` వద్ద రిమోట్ MCP సర్వర్ కూడా అందుబాటులో ఉంది. ఇది ఇదే SQL విభజనను `sql_query` (ఖచ్చితంగా చదవడానికి మాత్రమే), `sql_execute` (రాయడం) గా అందిస్తుంది, వీటితో పాటు `list_workspaces`, `get_guide`, పునశ్చరణ టూల్స్ `next_review_card`, `reveal_answer`, `submit_review` కూడా ఉన్నాయి; [MCP కనెక్టర్](/docs/mcp-connector/) చూడండి.

### భద్రత, పరిధి

SQL ఇంటర్‌ఫేస్ ముడి PostgreSQL కాదు; ఇది పార్సర్ అమలు చేసే, పరిమితమైన డయలెక్ట్. రక్షణ నియమాలు ఇవి:

- **నిర్ణీత స్టేట్‌మెంట్ అనుమతి జాబితా**: రీడ్‌ల కోసం `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`, రైట్‌ల కోసం `INSERT`, `UPDATE`, `DELETE` మాత్రమే. మిగతా ఏదైనా పార్సింగ్ దశలోనే తిరస్కరించబడుతుంది.
- **పరిమిత రిసోర్సులు**: స్టేట్‌మెంట్‌లు `workspace`, `cards`, `decks`, `review_events` రిసోర్సులను మాత్రమే తాకగలవు.
- **వర్క్‌స్పేస్ వారీ పరిధి**: ప్రతి స్టేట్‌మెంట్ మీకు యాక్సెస్ ఉన్న ఒక్క వర్క్‌స్పేస్‌కే పరిమితం, అది అభ్యర్థన బాడీలోని `workspaceId` అయినా లేదా మీరు ఎంచుకున్న వర్క్‌స్పేస్ అయినా; ఒక టెనెంట్ నుంచి మరో టెనెంట్ డేటాకు యాక్సెస్ ఉండదు.
- **కఠినమైన అభ్యర్థన బాడీలు**: SQL, పునశ్చరణ రూట్‌లు తెలియని బాడీ ఫీల్డ్‌ను తిరస్కరిస్తాయి, కాబట్టి తప్పుగా రాసిన `workspaceId` ఎంచుకున్న వర్క్‌స్పేస్‌పై నడవకుండా విఫలమవుతుంది.
- **పరిమితులు**: ఒక్కో స్టేట్‌మెంట్‌కు గరిష్ఠంగా `100` వరుసలు, ఒక్కో బ్యాచ్‌కు గరిష్ఠంగా `50` స్టేట్‌మెంట్‌లు, ఫలితానికి సుమారు `12k` టోకెన్ల పరిమితి. మార్పుల బ్యాచ్‌లు అటామిక్‌గా వర్తిస్తాయి.
- **రీడ్/రైట్ విభజన**: `sql_query`, `list_workspaces` ఖచ్చితంగా చదవడానికి మాత్రమే (`readOnlyHint`); అవి ఎప్పుడూ డేటాను సరిచేయవు, షెడ్యూలింగ్‌ను తిరిగి లెక్కించవు, కార్డు స్థితిని మార్చవు. `sql_execute` ఒక్కటే SQL రైట్ టూల్, అది రైట్‌లు చేస్తుంది (`destructiveHint`); ఒక కాల్‌లో అన్నీ రీడ్‌లే ఉండాలి, లేదా అన్నీ రైట్‌లే ఉండాలి. SQL `review_events` ను గానీ FSRS షెడ్యూలింగ్ స్థితిని గానీ రాయలేదు; `POST /v1/agent/reviews/submit` (MCP `submit_review`) మాత్రమే పునశ్చరణను నమోదు చేస్తుంది.

## గైడ్‌లు

`GET /v1/agent/guide/{topic}` ఒక రిఫరెన్స్ గైడ్‌ను `data.guide` లో తిరిగి ఇస్తుంది; MCP `get_guide` టూల్ అందించే బాడీ కూడా ఇదే. అంశాలు:

- `sql_dialect`: పూర్తి SQL వ్యాకరణం, పరిమితులు, ఉదాహరణలు
- `card_authoring`: కార్డు కాంట్రాక్ట్, ట్యాగ్‌లు, డూప్లికేట్ తనిఖీలు, ఫార్మాటింగ్
- `bulk_authoring`: పెద్ద రైట్ పనిని విభజించడం, ధృవీకరించడం
- `review_flow`: పునశ్చరణ, రేటింగ్ చక్రం

తెలియని అంశానికి, మద్దతు ఉన్న అంశాల జాబితాతో `400` స్పందన వస్తుంది. కార్డులు రాసే ముందు, పెద్ద మొత్తంలో రాసే ముందు లేదా పునశ్చరణ నడిపే ముందు సంబంధిత గైడ్‌ను పొందండి; ఏదైనా స్టేట్‌మెంట్ తిరస్కరించబడిన తర్వాత `sql_dialect` ను మళ్లీ చదవండి.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## పునశ్చరణలు

పునశ్చరణ రూట్‌లతో ఏజెంట్ అభ్యాసకుడిని ఒక్కో కార్డుపై ప్రశ్నించి, ప్రతి రేటింగ్‌ను కార్డు FSRS షెడ్యూల్‌లో సేవ్ చేయగలదు. ఇవి MCP పునశ్చరణ టూల్స్ తీసుకునే JSON ఆర్గ్యుమెంట్‌లనే తీసుకుంటాయి:

- `POST /v1/agent/reviews/next` అనేది `cardId`, `frontText` తో కూడిన `card` ను తిరిగి ఇస్తుంది, ఏదీ పునశ్చరణకు రాకపోతే `card: null` ను ఇస్తుంది. ఐచ్ఛికమైన `tags` (వాటిలో ఏదైనా ఒకటి) లేదా `deckId` క్యూను పరిమితం చేస్తుంది, రెండూ కలిపి కాదు; బాడీ లేని అభ్యర్థన కూడా చెల్లుతుంది.
- `POST /v1/agent/reviews/reveal` కు `cardId` అవసరం; ఇది ఆ కార్డు `backText` ను తిరిగి ఇస్తుంది.
- `POST /v1/agent/reviews/submit` కు `cardId`, క్లయింట్ రూపొందించిన `reviewId` UUID, `Again`, `Hard`, `Good` లేదా `Easy` విలువ గల `rating`, అభ్యాసకుడి IANA `reviewedTimeZone` అవసరం. సర్వర్ పునశ్చరణ సమయాన్ని నమోదు చేసి, `dueAt`, `state`, `reps`, `lapses` తో సహా కార్డు కొత్త షెడ్యూల్‌ను తిరిగి ఇస్తుంది.

మూడు రూట్‌లూ ఐచ్ఛిక `workspaceId` ను అంగీకరిస్తాయి. సమర్పించే ముందు `reviewId` ను భద్రపరచండి; సమర్పణ జరిగిందో లేదో అనిశ్చితంగా ఉంటే అదే అభ్యర్థనను యథాతథంగా మళ్లీ పంపండి; అలా చేసినా రెండో పునశ్చరణ ఎప్పుడూ నమోదు కాదు. పునశ్చరణ రూట్‌లు ఈ స్పందనలు కూడా ఇవ్వవచ్చు:

- `409 REVIEW_EVENT_CONFLICT`: పునశ్చరణ ఇప్పటికే నమోదైంది, `error.details.reviewSchedule` లో కార్డు ప్రస్తుత షెడ్యూల్ ఉంటుంది.
- `409 REVIEW_ID_CARD_MISMATCH`: `reviewId` ఇప్పటికే వేరే కార్డు పునశ్చరణను సూచిస్తోంది, కాబట్టి ఏదీ సేవ్ కాలేదు; కొత్త `reviewId` తో మళ్లీ సమర్పించండి.
- `409 REVIEW_STALE`: కార్డులో నిల్వ ఉన్న పునశ్చరణ సమయం ప్రస్తుత సర్వర్ సమయానికి సమానంగా లేదా దాని తర్వాత ఉంది; వేరే కార్డును పునశ్చరణ చేయండి.
- `400 REVIEW_INPUT_INVALID`: ఏదైనా ఆర్గ్యుమెంట్ లేదు, చెల్లదు లేదా దానికి మద్దతు లేదు; `tags` ను `deckId` తో కలిపి పంపడం, లేదా వర్క్‌స్పేస్ వాడని ట్యాగ్ కూడా ఇందులోకే వస్తాయి.

సమర్పణకు ఉదాహరణ:

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

## మనుషుల కోసం, సింక్ కోసం APIలు

Nibomo లో మనుషులు వాడే క్లయింట్ల కోసం, ఆఫ్‌లైన్-ఫస్ట్ సింక్ కోసం వేర్వేరు APIలు కూడా ఉన్నాయి, కానీ అవి బాహ్య ఏజెంట్లకు ప్రధాన కాంట్రాక్ట్ కాదు:

- బ్రౌజర్ ఫ్లోలు ఉమ్మడి డొమైన్ కుకీలతో పాటు CSRF రక్షణను వాడతాయి
- ఆఫ్‌లైన్-ఫస్ట్ క్లయింట్లు `/v1/workspaces/{workspaceId}/sync/push`, `/v1/workspaces/{workspaceId}/sync/pull` కింద అమలు చేసిన సింక్ రూట్‌లను వాడతాయి
- సింక్ రూట్‌లు బాహ్య ఏజెంట్ ఇంటర్‌ఫేస్ నుంచి వేరుగా ఉంటాయి
