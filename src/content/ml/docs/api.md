---
title: API റഫറൻസ്
description: "ഡിസ്കവറി, OTP ബൂട്ട്സ്ട്രാപ്പ്, വർക്ക്‌സ്‌പേസ് സജ്ജീകരണം, പ്രസിദ്ധീകരിച്ച റീഡ്, റൈറ്റ് SQL സർഫേസുകൾ എന്നിവയ്ക്കുള്ള ബാഹ്യ ഏജന്റ് API."
---

## അവലോകനം

ബാഹ്യ AI ഏജന്റുകൾക്കായുള്ള Nibomo യുടെ നിലവിലെ കരാർ ഈ പേജ് വിവരിക്കുന്നു.

നിങ്ങളുടെ ക്ലയന്റ് MCP പിന്തുണയ്ക്കുന്നുണ്ടെങ്കിൽ, ബന്ധിപ്പിക്കാനുള്ള ഏറ്റവും ലളിതമായ വഴി
[MCP കണക്ടർ](/docs/mcp-connector/) ആണ്; അത് ഇതേ ഡാറ്റാ സർഫേസ് തന്നെ ഉൾക്കൊള്ളുന്നു. CLI ഏജന്റുകൾ ഉപയോഗിക്കുന്ന
HTTP ഡിസ്കവറി, SQL, വഴികാട്ടി, ആവർത്തന കരാർ എന്നിവയാണ് ഈ പേജ് വിവരിക്കുന്നത്.

ഔദ്യോഗിക ഡിസ്കവറി പ്രവേശന കവാടത്തിൽ നിന്ന് തുടങ്ങുക:

```text
GET https://api.nibomo.com/v1/
```

ഇതേ ഡിസ്കവറി പേലോഡ് `GET /v1/agent` ലും ലഭ്യമാണ്, പക്ഷേ പ്രാഥമിക പൊതു പ്രവേശന കവാടം `/v1/` ആണ്.

ഡിസ്കവറി പ്രതികരണം ഒരു ഏജന്റിന് ഇനിപ്പറയുന്നവ എങ്ങനെ ചെയ്യണമെന്ന് പറഞ്ഞുകൊടുക്കുന്നു:

- ഇമെയിൽ OTP ലോഗിൻ തുടങ്ങുക
- OTP നൽകി ഒരു ദീർഘകാല API കീ നേടുക
- അക്കൗണ്ട് കോൺടെക്സ്റ്റ് ലോഡ് ചെയ്യുക
- ഒരു വർക്ക്‌സ്‌പേസ് ഉണ്ടാക്കുക അല്ലെങ്കിൽ തിരഞ്ഞെടുക്കുക
- പ്രസിദ്ധീകരിച്ച SQL സർഫേസ് വഴി തുടരുക
- റഫറൻസ് വഴികാട്ടികൾ എടുക്കുക, കാർഡുകൾ ഓരോന്നായി ആവർത്തിക്കുക

## റൺടൈം ഡിസ്കവറിയും സോഴ്സും

OpenAPI ലഭ്യമല്ല. താഴെയുള്ള നാല് പഴയ സ്പെസിഫിക്കേഷൻ URL കൾ ഇപ്പോൾ ഒരു സ്കീമയ്ക്കു പകരം `"openapiAvailable": false` ഉള്ള അതേ JSON ഡിസ്കവറി അറിയിപ്പ് നൽകുന്നു:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

നിലവിലെ റൺടൈം ഡിസ്കവറിക്ക് `GET https://api.nibomo.com/v1/` ഉപയോഗിക്കുക. റൺടൈം റൂട്ടുകൾക്കായി നൽകുന്ന `docs.discoveryUrl` ഉം നടപ്പാക്കൽ വിശദാംശങ്ങൾക്കായി `docs.source.agentRoutesUrl` ഉം പിന്തുടരുക.

## ഓതന്റിക്കേഷൻ ബൂട്ട്സ്ട്രാപ്പ്

OTP ബൂട്ട്സ്ട്രാപ്പ് ഓതന്റിക്കേഷൻ സേവനത്തിലാണ് നടക്കുന്നത്:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

പ്രക്രിയ ഇങ്ങനെയാണ്:

1. `GET /v1/` വിളിക്കുക.
2. ഉപയോക്താവിന്റെ ഇമെയിൽ `send-code` ലേക്ക് അയയ്ക്കുക.
3. പ്രതികരണത്തിൽ നിന്ന് `otpSessionToken` വായിക്കുക.
4. ഇമെയിലിൽ ലഭിച്ച ഏറ്റവും പുതിയ 8 അക്ക കോഡ് ഉപയോക്താവിനോട് ചോദിക്കുക.
5. `code`, `otpSessionToken`, `label` എന്നിവ സഹിതം `verify-code` വിളിക്കുക.
6. ലഭിക്കുന്ന API കീ ചാറ്റ് മെമ്മറിക്ക് പുറത്ത് സ്ഥിരമായി സൂക്ഷിക്കുക.

ശുപാർശ ചെയ്യുന്ന എൻവയോൺമെന്റ് വേരിയബിൾ:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

ഓതന്റിക്കേറ്റ് ചെയ്ത അഭ്യർത്ഥനകൾ ഇത് ഉപയോഗിക്കുന്നു:

```text
Authorization: ApiKey <key>
```

ബൂട്ട്സ്ട്രാപ്പ് ക്രമത്തിന്റെ ഉദാഹരണം:

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

## ലോഗിന് ശേഷമുള്ള ഏജന്റ് സർഫേസ്

സ്ഥിരീകരണത്തിന് ശേഷം, നിലവിലെ ഏജന്റ് സർഫേസ് ഇതാണ്:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (റീഡ്-ഒൺലി)
- `POST /v1/agent/sql/execute` (റൈറ്റ്)
- `GET /v1/agent/guide/{topic}` (റീഡ്-ഒൺലി)
- `POST /v1/agent/reviews/next` (റീഡ്-ഒൺലി)
- `POST /v1/agent/reviews/reveal` (റീഡ്-ഒൺലി)
- `POST /v1/agent/reviews/submit` (റൈറ്റ്)

സാധാരണ ബൂട്ട്സ്ട്രാപ്പ് ഇങ്ങനെയാണ്:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. ആവശ്യമെങ്കിൽ, `{"name":"Personal"}` സഹിതം `POST /v1/agent/workspaces`
4. ആവശ്യമെങ്കിൽ, `POST /v1/agent/workspaces/{workspaceId}/select`
5. റീഡുകൾക്ക് `POST /v1/agent/sql/query` ഉം റൈറ്റുകൾക്ക് `POST /v1/agent/sql/execute` ഉം ഉപയോഗിക്കുക

വർക്ക്‌സ്‌പേസ് തിരഞ്ഞെടുപ്പ് ഓരോ API കീ കണക്ഷനും വ്യക്തമായി നടത്തുന്നതാണ്. അടുത്ത ഘട്ടം ഊഹിക്കുന്നതിനു പകരം, ഏജന്റുകൾ ലഭിക്കുന്ന `instructions` ടെക്സ്റ്റും റൺടൈം റൂട്ടുകൾക്കായി `docs.discoveryUrl` ഉം നടപ്പാക്കൽ വിശദാംശങ്ങൾക്കായി `docs.source.agentRoutesUrl` ഉം പിന്തുടരണം.

SQL, ആവർത്തന റൂട്ടുകൾ JSON ബോഡിയിൽ ഐച്ഛികമായ ഒരു `workspaceId` ഉം സ്വീകരിക്കുന്നു. തിരഞ്ഞെടുപ്പ് മാറ്റാതെ ഒരു കോളിന് മാത്രം അത് ആ വർക്ക്‌സ്‌പേസിനെ ലക്ഷ്യമിടുന്നു; തിരഞ്ഞെടുത്ത വർക്ക്‌സ്‌പേസ് ഉപയോഗിക്കാൻ അത് ഒഴിവാക്കുക. തിരഞ്ഞെടുപ്പോ `workspaceId` ഓ ഇല്ലെങ്കിൽ, അവ `409 WORKSPACE_SELECTION_REQUIRED` എന്ന് മറുപടി നൽകുന്നു.

## SQL സർഫേസ്

`POST /v1/agent/sql/query` കർശനമായി റീഡ്-ഒൺലി സർഫേസാണ് (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`), `POST /v1/agent/sql/execute` റൈറ്റ് സർഫേസും (`INSERT`, `UPDATE`, `DELETE`); ഒരു കോൾ പൂർണ്ണമായും റീഡുകളോ പൂർണ്ണമായും റൈറ്റുകളോ ആയിരിക്കണം.

ഇത് മനഃപൂർവം പരിമിതപ്പെടുത്തിയതാണ്, പൂർണ്ണമായ PostgreSQL അല്ല. ഈ രേഖകൾ
പിന്തുണയുള്ള ഡയലക്റ്റ് മാത്രമാണ് വിവരിക്കുന്നത്, PostgreSQL അനുയോജ്യതാ റഫറൻസ് അല്ല.

ഒരു റീഡ് പാതയും ഡാറ്റ നന്നാക്കുകയോ ഷെഡ്യൂളിംഗ് വീണ്ടും കണക്കാക്കുകയോ കാർഡിന്റെ നില മാറ്റുകയോ ചെയ്യുന്നില്ല.
എല്ലാ കാർഡ്, ഡെക്ക് റൈറ്റുകൾക്കും `POST /v1/agent/sql/execute` ഉപയോഗിക്കുക. SQL ന്
`review_events` ലേക്കോ FSRS ഷെഡ്യൂളിംഗ് നിലയിലേക്കോ എഴുതാൻ കഴിയില്ല; ആവർത്തനങ്ങൾ
`POST /v1/agent/reviews/submit` വഴി രേഖപ്പെടുത്തുക.

നിലവിലെ സ്റ്റേറ്റ്മെന്റ് വിഭാഗങ്ങൾ:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

പ്രസിദ്ധീകരിച്ച ലോജിക്കൽ റിസോഴ്സുകളിൽ നിലവിൽ ഉൾപ്പെടുന്നവ:

- `workspace`
- `cards`
- `decks`
- `review_events`

കുറിപ്പുകൾ:

- `LIMIT` ന്റെ ഡിഫോൾട്ട് `100` ആണ്, പരമാവധിയും `100` ആണ്
- സ്ഥിരതയുള്ള പേജിനേഷൻ വേണമെങ്കിൽ `ORDER BY` ഉപയോഗിക്കുക
- സ്കീമ കണ്ടെത്താൻ `SHOW TABLES` അല്ലെങ്കിൽ `DESCRIBE cards` ഉപയോഗിക്കുക
- ഓരോ SQL കോളും ഒരു വർക്ക്‌സ്‌പേസിലേക്ക് പരിമിതപ്പെടുത്തിയിരിക്കുന്നു: ബോഡിയിലെ `workspaceId`, അല്ലെങ്കിൽ തിരഞ്ഞെടുത്ത വർക്ക്‌സ്‌പേസ്

അഭ്യർത്ഥനയുടെ ഉദാഹരണം:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

കാർഡ് ക്വറിയുടെ ഉദാഹരണം:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

മാറ്റം വരുത്തുന്നതിന്റെ ഉദാഹരണം:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

OAuth 2.1 (Dynamic Client Registration + PKCE) ഉപയോഗിക്കുന്ന ഒരു റിമോട്ട് MCP സെർവറും `https://mcp.nibomo.com/mcp` ൽ ലഭ്യമാണ്. ഇതേ SQL വിഭജനം അത് `sql_query` (കർശനമായി റീഡ്-ഒൺലി), `sql_execute` (റൈറ്റ്) എന്നിങ്ങനെ ലഭ്യമാക്കുന്നു, ഒപ്പം `list_workspaces`, `get_guide`, ആവർത്തന ടൂളുകളായ `next_review_card`, `reveal_answer`, `submit_review` എന്നിവയും; [MCP കണക്ടർ](/docs/mcp-connector/) കാണുക.

### സുരക്ഷയും പരിധിയും

SQL സർഫേസ് നേരിട്ടുള്ള PostgreSQL അല്ല, പാർസർ നിയന്ത്രിക്കുന്ന, പരിധിക്കുള്ളിൽ ഒതുങ്ങുന്ന ഒരു ഡയലക്റ്റാണ്. സുരക്ഷാ നിയന്ത്രണങ്ങൾ ഇവയാണ്:

- **അടച്ച സ്റ്റേറ്റ്മെന്റ് അനുമതിപ്പട്ടിക**: റീഡുകൾക്ക് `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT` എന്നിവയും റൈറ്റുകൾക്ക് `INSERT`, `UPDATE`, `DELETE` എന്നിവയും മാത്രം. മറ്റെന്തും പാർസ് ചെയ്യുന്ന ഘട്ടത്തിൽ തന്നെ നിരസിക്കപ്പെടും.
- **പരിമിതമായ റിസോഴ്സുകൾ**: സ്റ്റേറ്റ്മെന്റുകൾക്ക് `workspace`, `cards`, `decks`, `review_events` എന്നീ റിസോഴ്സുകളിൽ മാത്രമേ പ്രവർത്തിക്കാനാകൂ.
- **ഓരോ വർക്ക്‌സ്‌പേസിലേക്കുമുള്ള പരിധി**: ഓരോ സ്റ്റേറ്റ്മെന്റും നിങ്ങൾക്ക് ആക്സസ് ഉള്ള ഒരു വർക്ക്‌സ്‌പേസിലേക്ക് പരിമിതപ്പെടുത്തിയിരിക്കുന്നു, അഭ്യർത്ഥനാ ബോഡിയിലെ `workspaceId` അല്ലെങ്കിൽ നിങ്ങൾ തിരഞ്ഞെടുത്ത വർക്ക്‌സ്‌പേസ്; മറ്റ് ടെനന്റുകളുടെ ഡാറ്റയിലേക്ക് ആക്സസ് ഇല്ല.
- **കർശനമായ അഭ്യർത്ഥനാ ബോഡികൾ**: SQL, ആവർത്തന റൂട്ടുകൾ അറിയാത്ത ബോഡി ഫീൽഡ് നിരസിക്കുന്നു, അതിനാൽ അക്ഷരത്തെറ്റുള്ള `workspaceId` തിരഞ്ഞെടുത്ത വർക്ക്‌സ്‌പേസിൽ പ്രവർത്തിക്കുന്നതിനു പകരം പരാജയപ്പെടുന്നു.
- **പരിധികൾ**: ഒരു സ്റ്റേറ്റ്മെന്റിന് പരമാവധി `100` വരികൾ, ഒരു ബാച്ചിൽ പരമാവധി `50` സ്റ്റേറ്റ്മെന്റുകൾ, ഏകദേശം `12k` ടോക്കണുകളുടെ ഫല പരിധി. മാറ്റം വരുത്തുന്ന ബാച്ചുകൾ അറ്റോമിക്കായി പ്രയോഗിക്കുന്നു.
- **റീഡ്/റൈറ്റ് വിഭജനം**: `sql_query`, `list_workspaces` എന്നിവ കർശനമായി റീഡ്-ഒൺലിയാണ് (`readOnlyHint`), അവ ഒരിക്കലും ഡാറ്റ നന്നാക്കുകയോ ഷെഡ്യൂളിംഗ് വീണ്ടും കണക്കാക്കുകയോ കാർഡിന്റെ നില മാറ്റുകയോ ചെയ്യുന്നില്ല. `sql_execute` മാത്രമാണ് SQL റൈറ്റ് ടൂൾ, അത് റൈറ്റുകൾ നടത്തുന്നു (`destructiveHint`); ഒരു കോൾ പൂർണ്ണമായും റീഡുകളോ പൂർണ്ണമായും റൈറ്റുകളോ ആയിരിക്കണം. SQL ന് `review_events` ലേക്കോ FSRS ഷെഡ്യൂളിംഗ് നിലയിലേക്കോ എഴുതാൻ കഴിയില്ല; `POST /v1/agent/reviews/submit` (MCP യിൽ `submit_review`) മാത്രമാണ് ഒരു ആവർത്തനം രേഖപ്പെടുത്തുന്നത്.

## വഴികാട്ടികൾ

`GET /v1/agent/guide/{topic}` ഒരു റഫറൻസ് വഴികാട്ടി `data.guide` ൽ നൽകുന്നു, MCP `get_guide` ടൂൾ നൽകുന്ന അതേ ഉള്ളടക്കം. വിഷയങ്ങൾ:

- `sql_dialect`: പൂർണ്ണ SQL വ്യാകരണം, പരിധികൾ, ഉദാഹരണങ്ങൾ
- `card_authoring`: കാർഡ് കരാർ, ടാഗുകൾ, ഡ്യൂപ്ലിക്കേറ്റ് പരിശോധനകൾ, ഫോർമാറ്റിംഗ്
- `bulk_authoring`: വലിയ ഒരു റൈറ്റ് ജോലി വിഭജിക്കുന്നതും പരിശോധിക്കുന്നതും
- `review_flow`: ആവർത്തനവും റേറ്റിംഗും നടക്കുന്ന ചക്രം

അറിയാത്ത ഒരു വിഷയത്തിന് പിന്തുണയുള്ള വിഷയങ്ങളുടെ പട്ടിക സഹിതം `400` മറുപടി ലഭിക്കും. കാർഡുകൾ എഴുതുന്നതിനോ ബൾക്കായി എഴുതുന്നതിനോ ആവർത്തനം നടത്തുന്നതിനോ മുമ്പ് ബന്ധപ്പെട്ട വഴികാട്ടി എടുക്കുക, ഒരു സ്റ്റേറ്റ്മെന്റ് നിരസിക്കപ്പെട്ടാൽ `sql_dialect` വീണ്ടും വായിക്കുക.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## ആവർത്തനങ്ങൾ

ആവർത്തന റൂട്ടുകൾ ഒരു ഏജന്റിന് പഠിതാവിനോട് ഓരോ കാർഡായി ചോദ്യങ്ങൾ ചോദിക്കാനും ഓരോ റേറ്റിംഗും കാർഡിന്റെ FSRS ഷെഡ്യൂളിലേക്ക് സംരക്ഷിക്കാനും അവസരം നൽകുന്നു. MCP ആവർത്തന ടൂളുകളുടെ അതേ JSON ആർഗ്യുമെന്റുകളാണ് അവ സ്വീകരിക്കുന്നത്:

- `POST /v1/agent/reviews/next` `cardId`, `frontText` എന്നിവയുള്ള `card` നൽകുന്നു, അല്ലെങ്കിൽ ആവർത്തിക്കാൻ ഒന്നുമില്ലെങ്കിൽ `card: null`. ഐച്ഛികമായ `tags` (അവയിൽ ഏതെങ്കിലും ഒന്ന് പൊരുത്തപ്പെട്ടാൽ മതി) അല്ലെങ്കിൽ `deckId` ക്യൂ ചുരുക്കുന്നു, രണ്ടും ഒരുമിച്ച് പാടില്ല; ബോഡി ഇല്ലാത്ത അഭ്യർത്ഥനയും സാധുവാണ്.
- `POST /v1/agent/reviews/reveal` ന് `cardId` ആവശ്യമാണ്, അത് ആ കാർഡിന്റെ `backText` നൽകുന്നു.
- `POST /v1/agent/reviews/submit` ന് `cardId`, ക്ലയന്റ് സൃഷ്ടിച്ച ഒരു `reviewId` UUID, `Again`, `Hard`, `Good`, അല്ലെങ്കിൽ `Easy` എന്നിവയിൽ ഒരു `rating`, പഠിതാവിന്റെ IANA `reviewedTimeZone` എന്നിവ ആവശ്യമാണ്. സെർവർ ആവർത്തന സമയം രേഖപ്പെടുത്തുകയും `dueAt`, `state`, `reps`, `lapses` എന്നിവ ഉൾപ്പെടെ കാർഡിന്റെ പുതിയ ഷെഡ്യൂൾ നൽകുകയും ചെയ്യുന്നു.

മൂന്ന് റൂട്ടുകളും ഐച്ഛികമായ `workspaceId` സ്വീകരിക്കുന്നു. സമർപ്പിക്കുന്നതിന് മുമ്പ് `reviewId` സ്ഥിരമായി സൂക്ഷിക്കുക, ഫലം ഉറപ്പില്ലാത്ത ഒരു സമർപ്പണം അതേ അഭ്യർത്ഥന ഉപയോഗിച്ച് വീണ്ടും ശ്രമിക്കുക; അത് ഒരിക്കലും രണ്ടാമതൊരു ആവർത്തനം രേഖപ്പെടുത്തില്ല. ആവർത്തന റൂട്ടുകൾ ഇങ്ങനെയും മറുപടി നൽകാം:

- `409 REVIEW_EVENT_CONFLICT`: ആവർത്തനം ഇതിനകം രേഖപ്പെടുത്തിയിട്ടുണ്ട്, `error.details.reviewSchedule` ൽ കാർഡിന്റെ നിലവിലെ ഷെഡ്യൂൾ ഉണ്ട്.
- `409 REVIEW_ID_CARD_MISMATCH`: `reviewId` ഇതിനകം മറ്റൊരു കാർഡിന്റെ ആവർത്തനത്തെ സൂചിപ്പിക്കുന്നു, അതിനാൽ ഒന്നും സംരക്ഷിച്ചില്ല; പുതിയൊരു `reviewId` ഉപയോഗിച്ച് വീണ്ടും സമർപ്പിക്കുക.
- `409 REVIEW_STALE`: കാർഡിന്റെ സംരക്ഷിച്ച ആവർത്തന സമയം നിലവിലെ സെർവർ സമയത്തിന് തുല്യമോ അതിന് ശേഷമോ ആണ്; മറ്റൊരു കാർഡ് ആവർത്തിക്കുക.
- `400 REVIEW_INPUT_INVALID`: ഒരു ആർഗ്യുമെന്റ് ഇല്ല, അസാധുവാണ്, അല്ലെങ്കിൽ പിന്തുണയില്ലാത്തതാണ്; `deckId` നൊപ്പം `tags` നൽകുന്നതും വർക്ക്‌സ്‌പേസ് ഉപയോഗിക്കാത്ത ടാഗും ഇതിൽ ഉൾപ്പെടുന്നു.

സമർപ്പണത്തിന്റെ ഉദാഹരണം:

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

## മനുഷ്യ ഉപയോക്താക്കൾക്കും സമന്വയത്തിനുമുള്ള API കൾ

മനുഷ്യ ക്ലയന്റുകൾക്കും ഓഫ്‌ലൈൻ-ഫസ്റ്റ് സമന്വയത്തിനുമായി Nibomo യിൽ വേറിട്ട API കളുമുണ്ട്, പക്ഷേ അവ ബാഹ്യ ഏജന്റുകൾക്കുള്ള പ്രധാന കരാറല്ല:

- ബ്രൗസർ ഫ്ലോകൾ പങ്കിട്ട ഡൊമെയ്‌ൻ കുക്കികളും CSRF സംരക്ഷണവും ഉപയോഗിക്കുന്നു
- ഓഫ്‌ലൈൻ-ഫസ്റ്റ് ക്ലയന്റുകൾ `/v1/workspaces/{workspaceId}/sync/push`, `/v1/workspaces/{workspaceId}/sync/pull` എന്നിവയ്ക്ക് കീഴിൽ നടപ്പാക്കിയ സമന്വയ റൂട്ടുകൾ ഉപയോഗിക്കുന്നു
- സമന്വയ റൂട്ടുകൾ ബാഹ്യ ഏജന്റ് സർഫേസിൽ നിന്ന് വേറിട്ടതാണ്
