---
title: API સંદર્ભ
description: ડિસ્કવરી, OTP દ્વારા પ્રારંભિક ગોઠવણી, કાર્યક્ષેત્ર સેટઅપ અને પ્રકાશિત વાંચન અને લેખન SQL ઇન્ટરફેસ માટેની બાહ્ય એજન્ટ API.
---

## ઝાંખી

આ પેજમાં Nibomo માટે બાહ્ય AI એજન્ટના હાલના કરારનું વર્ણન છે.

જો તમારો ક્લાયન્ટ MCP સપોર્ટ કરતો હોય, તો [MCP કનેક્ટર](/docs/mcp-connector/) જોડાવાનો સૌથી સરળ રસ્તો છે; તે આ જ ડેટા ઇન્ટરફેસ પર બનેલું છે. આ પેજમાં CLI એજન્ટ જે HTTP ડિસ્કવરી, SQL, માર્ગદર્શિકા અને પુનરાવર્તન કરાર વાપરે છે તેનું વર્ણન છે.

સત્તાવાર ડિસ્કવરી પ્રવેશબિંદુથી શરૂ કરો:

```text
GET https://api.nibomo.com/v1/
```

આ જ ડિસ્કવરી પેલોડ `GET /v1/agent` પર પણ ઉપલબ્ધ છે, પણ `/v1/` જ મુખ્ય જાહેર પ્રવેશબિંદુ છે.

ડિસ્કવરી જવાબ એજન્ટને જણાવે છે કે કેવી રીતે:

- ઈમેલ OTP લૉગિન શરૂ કરવું
- OTP ના બદલામાં લાંબા સમય સુધી માન્ય રહેતી API કી મેળવવી
- ખાતાનો સંદર્ભ લોડ કરવો
- કાર્યક્ષેત્ર બનાવવું કે પસંદ કરવું
- પ્રકાશિત SQL ઇન્ટરફેસ દ્વારા આગળ વધવું
- સંદર્ભ માર્ગદર્શિકાઓ મેળવવી અને એક પછી એક કાર્ડનું પુનરાવર્તન કરવું

## રનટાઇમ ડિસ્કવરી અને સોર્સ

OpenAPI ઉપલબ્ધ નથી. નીચેનાં ચાર જૂનાં સ્પેસિફિકેશન URL હવે સ્કીમાને બદલે `"openapiAvailable": false` સાથે એ જ JSON ડિસ્કવરી સૂચના પરત કરે છે:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

હાલની રનટાઇમ ડિસ્કવરી માટે `GET https://api.nibomo.com/v1/` વાપરો. રનટાઇમ રૂટ માટે પરત મળેલું `docs.discoveryUrl` અને અમલીકરણની વિગતો માટે `docs.source.agentRoutesUrl` અનુસરો.

## પ્રમાણીકરણની પ્રારંભિક ગોઠવણી

OTP દ્વારા પ્રારંભિક ગોઠવણી પ્રમાણીકરણ સેવા પર થાય છે:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

પ્રક્રિયા આ પ્રમાણે છે:

1. `GET /v1/` કૉલ કરો.
2. વપરાશકર્તાનો ઈમેલ `send-code` પર મોકલો.
3. જવાબમાંથી `otpSessionToken` વાંચો.
4. વપરાશકર્તા પાસેથી ઈમેલમાં આવેલો સૌથી તાજો 8 અંકનો કોડ માંગો.
5. `code`, `otpSessionToken` અને `label` સાથે `verify-code` કૉલ કરો.
6. પરત મળેલી API કી ચૅટની મેમરીની બહાર સાચવો.

ભલામણ કરેલ એન્વાયરનમેન્ટ વેરિએબલ:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

પ્રમાણિત વિનંતીઓ આ વાપરે છે:

```text
Authorization: ApiKey <key>
```

પ્રારંભિક ગોઠવણીનો ઉદાહરણ ક્રમ:

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

## લૉગિન પછીનું એજન્ટ ઇન્ટરફેસ

ચકાસણી પછી હાલનું એજન્ટ ઇન્ટરફેસ આ છે:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (ફક્ત વાંચન)
- `POST /v1/agent/sql/execute` (લેખન)
- `GET /v1/agent/guide/{topic}` (ફક્ત વાંચન)
- `POST /v1/agent/reviews/next` (ફક્ત વાંચન)
- `POST /v1/agent/reviews/reveal` (ફક્ત વાંચન)
- `POST /v1/agent/reviews/submit` (લેખન)

સામાન્ય પ્રારંભિક ગોઠવણી આ પ્રમાણે હોય છે:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. જરૂર હોય તો, `{"name":"Personal"}` સાથે `POST /v1/agent/workspaces`
4. જરૂર હોય તો, `POST /v1/agent/workspaces/{workspaceId}/select`
5. વાંચન માટે `POST /v1/agent/sql/query` અને લેખન માટે `POST /v1/agent/sql/execute` વાપરો

કાર્યક્ષેત્રની પસંદગી દરેક API કી કનેક્શન માટે સ્પષ્ટ રીતે કરવી પડે છે. આગળનું પગલું અનુમાનથી નક્કી કરવાને બદલે એજન્ટે પરત મળેલું `instructions` લખાણ, રનટાઇમ રૂટ માટે `docs.discoveryUrl` અને અમલીકરણની વિગતો માટે `docs.source.agentRoutesUrl` અનુસરવું જોઈએ.

SQL અને પુનરાવર્તનના રૂટ JSON બૉડીમાં વૈકલ્પિક `workspaceId` પણ સ્વીકારે છે. તે પસંદગી બદલ્યા વિના ફક્ત એક કૉલ માટે તે કાર્યક્ષેત્રને લક્ષ્ય બનાવે છે; પસંદ કરેલું કાર્યક્ષેત્ર વાપરવા માટે તેને છોડી દો. જો કોઈ કાર્યક્ષેત્ર પસંદ કરેલું ન હોય અને `workspaceId` પણ ન આપ્યું હોય, તો આ રૂટ `409 WORKSPACE_SELECTION_REQUIRED` જવાબ આપે છે.

## SQL ઇન્ટરફેસ

`POST /v1/agent/sql/query` સખત રીતે ફક્ત વાંચન માટેનું ઇન્ટરફેસ છે (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`) અને `POST /v1/agent/sql/execute` લેખન માટેનું ઇન્ટરફેસ છે (`INSERT`, `UPDATE`, `DELETE`); એક કૉલમાં કાં તો બધું વાંચન હોવું જોઈએ અથવા બધું લેખન.

તે જાણીજોઈને મર્યાદિત રાખવામાં આવ્યું છે અને સંપૂર્ણ PostgreSQL નથી. આ દસ્તાવેજો ફક્ત સપોર્ટેડ ડાયલેક્ટ આવરી લે છે; તે PostgreSQL સુસંગતતાનો સંદર્ભ નથી.

કોઈ પણ વાંચન માર્ગ ડેટા સુધારતો નથી, શેડ્યૂલિંગ ફરી ગણતો નથી કે કાર્ડની સ્થિતિ બદલતો નથી. દરેક કાર્ડ અને ડેક લેખન માટે `POST /v1/agent/sql/execute` વાપરો. SQL `review_events` કે FSRS શેડ્યૂલિંગ સ્થિતિમાં લખી શકતું નથી; પુનરાવર્તન `POST /v1/agent/reviews/submit` દ્વારા નોંધો.

હાલના સ્ટેટમેન્ટ પ્રકારો:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

હાલમાં પ્રકાશિત લૉજિકલ રિસોર્સમાં આ સામેલ છે:

- `workspace`
- `cards`
- `decks`
- `review_events`

નોંધ:

- `LIMIT` મૂળભૂત રીતે `100` હોય છે અને તેની મહત્તમ મર્યાદા `100` છે
- સ્થિર પેજિનેશન જોઈએ ત્યારે `ORDER BY` વાપરો
- સ્કીમા જાણવા માટે `SHOW TABLES` કે `DESCRIBE cards` વાપરો
- દરેક SQL કૉલ એક જ કાર્યક્ષેત્ર સુધી મર્યાદિત હોય છે: બૉડીમાંનું `workspaceId`, અથવા પસંદ કરેલું કાર્યક્ષેત્ર

ઉદાહરણ વિનંતી:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

કાર્ડ ક્વેરીનું ઉદાહરણ:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

ફેરફારનું ઉદાહરણ:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

OAuth 2.1 (Dynamic Client Registration + PKCE) વાપરતું રિમોટ MCP સર્વર પણ `https://mcp.nibomo.com/mcp` પર ઉપલબ્ધ છે. તે SQL નું આ જ વિભાજન `sql_query` (સખત રીતે ફક્ત વાંચન) અને `sql_execute` (લેખન) તરીકે આપે છે, સાથે `list_workspaces`, `get_guide`, અને પુનરાવર્તનનાં ટૂલ `next_review_card`, `reveal_answer` અને `submit_review` પણ આપે છે; [MCP કનેક્ટર](/docs/mcp-connector/) જુઓ.

### સલામતી અને વ્યાપ

SQL ઇન્ટરફેસ સીધું PostgreSQL નથી, પણ પાર્સર દ્વારા લાગુ થતી મર્યાદિત ડાયલેક્ટ છે. તેની સુરક્ષા મર્યાદાઓ આ છે:

- **સ્ટેટમેન્ટની બંધ મંજૂર યાદી**: વાંચન માટે ફક્ત `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` અને `SELECT`, અને લેખન માટે `INSERT`, `UPDATE` અને `DELETE`. બાકીનું બધું પાર્સ વખતે જ નકારવામાં આવે છે.
- **મર્યાદિત રિસોર્સ**: સ્ટેટમેન્ટ ફક્ત `workspace`, `cards`, `decks` અને `review_events` રિસોર્સને જ સ્પર્શી શકે છે.
- **કાર્યક્ષેત્ર પ્રમાણે મર્યાદા**: દરેક સ્ટેટમેન્ટ તમે ઍક્સેસ કરી શકો તેવા એક જ કાર્યક્ષેત્ર સુધી મર્યાદિત હોય છે, કાં તો વિનંતીની બૉડીમાંનું `workspaceId` કે પછી તમારું પસંદ કરેલું કાર્યક્ષેત્ર; બીજા ટેનન્ટના ડેટાની ઍક્સેસ નથી.
- **કડક વિનંતી બૉડી**: SQL અને પુનરાવર્તનના રૂટ અજાણ્યું બૉડી ફીલ્ડ નકારે છે, તેથી ખોટી જોડણીવાળું `workspaceId` પસંદ કરેલા કાર્યક્ષેત્ર પર ચાલવાને બદલે નિષ્ફળ જાય છે.
- **મર્યાદાઓ**: એક સ્ટેટમેન્ટમાં વધુમાં વધુ `100` પંક્તિ, એક બૅચમાં વધુમાં વધુ `50` સ્ટેટમેન્ટ, અને પરિણામની મર્યાદા આશરે `12k` ટોકન. ફેરફારનો બૅચ કાં તો આખો લાગુ થાય છે અથવા બિલકુલ નહીં.
- **વાંચન/લેખન વિભાજન**: `sql_query` અને `list_workspaces` સખત રીતે ફક્ત વાંચન માટે છે (`readOnlyHint`) અને ક્યારેય ડેટા સુધારતાં નથી, શેડ્યૂલિંગ ફરી ગણતાં નથી કે કાર્ડની સ્થિતિ બદલતાં નથી. `sql_execute` એકમાત્ર SQL લેખન ટૂલ છે અને લેખન કરે છે (`destructiveHint`); એક કૉલમાં કાં તો બધું વાંચન હોવું જોઈએ અથવા બધું લેખન. SQL `review_events` કે FSRS શેડ્યૂલિંગ સ્થિતિમાં લખી શકતું નથી; ફક્ત `POST /v1/agent/reviews/submit` (MCP માં `submit_review`) પુનરાવર્તન નોંધે છે.

## માર્ગદર્શિકાઓ

`GET /v1/agent/guide/{topic}` `data.guide` માં એક સંદર્ભ માર્ગદર્શિકા પરત કરે છે; MCP નું `get_guide` ટૂલ પણ આ જ લખાણ આપે છે. વિષયો:

- `sql_dialect`: સંપૂર્ણ SQL વ્યાકરણ, મર્યાદાઓ અને ઉદાહરણો
- `card_authoring`: કાર્ડનો કરાર, ટૅગ, ડુપ્લિકેટની તપાસ અને ફૉર્મેટિંગ
- `bulk_authoring`: મોટા લેખન કાર્યને ભાગોમાં વહેંચવું અને ચકાસવું
- `review_flow`: પુનરાવર્તન અને રેટિંગનું ચક્ર

અજાણ્યા વિષય માટે સપોર્ટેડ વિષયોની યાદી સાથે `400` જવાબ મળે છે. કાર્ડ બનાવતાં, મોટા પાયે લખતાં કે પુનરાવર્તન ચલાવતાં પહેલાં સંબંધિત માર્ગદર્શિકા મેળવો, અને કોઈ સ્ટેટમેન્ટ નકારાય પછી `sql_dialect` ફરી વાંચો.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## પુનરાવર્તન

પુનરાવર્તનના રૂટ એજન્ટને શીખનારને એક સમયે એક કાર્ડ પર પ્રશ્ન પૂછવા અને દરેક રેટિંગ કાર્ડના FSRS શેડ્યૂલમાં સાચવવા દે છે. તે MCP પુનરાવર્તન ટૂલ જેવા જ JSON આર્ગ્યુમેન્ટ લે છે:

- `POST /v1/agent/reviews/next` `cardId` અને `frontText` સાથે `card` પરત કરે છે, અથવા કોઈ કાર્ડ બાકી ન હોય ત્યારે `card: null`. વૈકલ્પિક `tags` (આપેલા ટૅગમાંથી કોઈ પણ એક) કે `deckId` કતારને મર્યાદિત કરે છે, પણ બંને એકસાથે ક્યારેય નહીં; બૉડી વગરની વિનંતી પણ માન્ય છે.
- `POST /v1/agent/reviews/reveal` માટે `cardId` જરૂરી છે અને તે એ કાર્ડનું `backText` પરત કરે છે.
- `POST /v1/agent/reviews/submit` માટે `cardId`, ક્લાયન્ટે બનાવેલું `reviewId` UUID, `Again`, `Hard`, `Good` કે `Easy` માંથી એક `rating`, અને શીખનારનું IANA `reviewedTimeZone` જરૂરી છે. સર્વર પુનરાવર્તનનો સમય નોંધે છે અને કાર્ડનું નવું શેડ્યૂલ પરત કરે છે, જેમાં `dueAt`, `state`, `reps` અને `lapses` સામેલ છે.

આ ત્રણેય રૂટ વૈકલ્પિક `workspaceId` સ્વીકારે છે. સબમિટ કરતાં પહેલાં `reviewId` સાચવી રાખો, અને જે સબમિશનનું પરિણામ અનિશ્ચિત હોય તેને બરાબર એ જ વિનંતી સાથે ફરી મોકલો; તેનાથી ક્યારેય બીજું પુનરાવર્તન નોંધાતું નથી. પુનરાવર્તનના રૂટ આ જવાબો પણ આપી શકે છે:

- `409 REVIEW_EVENT_CONFLICT`: પુનરાવર્તન પહેલેથી નોંધાયેલું છે, અને `error.details.reviewSchedule` માં કાર્ડનું હાલનું શેડ્યૂલ હોય છે.
- `409 REVIEW_ID_CARD_MISMATCH`: `reviewId` પહેલેથી બીજા કાર્ડના પુનરાવર્તનને ઓળખે છે, તેથી કંઈ સાચવાયું નથી; નવા `reviewId` સાથે ફરી સબમિટ કરો.
- `409 REVIEW_STALE`: કાર્ડનો સાચવેલો પુનરાવર્તન સમય સર્વરના હાલના સમય જેટલો કે તેના પછીનો છે; બીજા કાર્ડનું પુનરાવર્તન કરો.
- `400 REVIEW_INPUT_INVALID`: કોઈ આર્ગ્યુમેન્ટ ખૂટે છે, અમાન્ય છે કે સપોર્ટેડ નથી, જેમાં `deckId` સાથે જોડેલું `tags` કે કાર્યક્ષેત્ર જે ટૅગ વાપરતું નથી તે પણ સામેલ છે.

સબમિશનનું ઉદાહરણ:

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

## લોકો માટેની અને સિંક API

Nibomo માં લોકો વાપરે તેવા ક્લાયન્ટ અને ઑફલાઇન-ફર્સ્ટ સિંક માટે અલગ API પણ છે, પણ તે બાહ્ય એજન્ટ માટેનો મુખ્ય કરાર નથી:

- બ્રાઉઝર ફ્લો સહિયારા ડોમેનની કૂકીઝ અને CSRF સુરક્ષા વાપરે છે
- ઑફલાઇન-ફર્સ્ટ ક્લાયન્ટ `/v1/workspaces/{workspaceId}/sync/push` અને `/v1/workspaces/{workspaceId}/sync/pull` હેઠળ અમલમાં મુકાયેલા સિંક રૂટ વાપરે છે
- સિંક રૂટ બાહ્ય એજન્ટ ઇન્ટરફેસથી અલગ છે
