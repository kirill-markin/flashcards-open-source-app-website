---
title: Referència de l'API
description: API per a agents externs amb descobriment, configuració inicial amb OTP, configuració de l'espai de treball i les interfícies SQL publicades de lectura i d'escriptura.
---

## Visió general

Aquesta pàgina documenta el contracte actual per a agents d'IA externs de Nibomo.

Si el teu client és compatible amb MCP, el [connector MCP](/docs/mcp-connector/) és la manera més senzilla de connectar-te i embolcalla aquesta mateixa interfície de dades. Aquesta pàgina documenta el contracte HTTP de descobriment, SQL, guies i repassos que fan servir els agents de línia d'ordres.

Comença pel punt d'entrada de descobriment canònic:

```text
GET https://api.nibomo.com/v1/
```

La mateixa resposta de descobriment també està disponible a `GET /v1/agent`, però `/v1/` és el punt d'entrada públic principal.

La resposta de descobriment indica a l'agent com:

- iniciar la sessió amb OTP per correu electrònic
- bescanviar l'OTP per una clau d'API de llarga durada
- carregar el context del compte
- crear o seleccionar un espai de treball
- continuar a través de la interfície SQL publicada
- obtenir guies de referència i repassar les targetes d'una en una

## Descobriment en temps d'execució i codi font

OpenAPI no està disponible. Les quatre URL següents, que abans servien l'especificació, ara retornen el mateix avís de descobriment en JSON amb `"openapiAvailable": false` en lloc d'un esquema:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

Fes servir `GET https://api.nibomo.com/v1/` per al descobriment actual en temps d'execució. Segueix el `docs.discoveryUrl` retornat per a les rutes en temps d'execució i `docs.source.agentRoutesUrl` per als detalls d'implementació.

## Configuració inicial de l'autenticació

La configuració inicial amb OTP s'executa al servei d'autenticació:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

El flux és:

1. Crida `GET /v1/`.
2. Envia el correu electrònic de l'usuari a `send-code`.
3. Llegeix `otpSessionToken` de la resposta.
4. Demana a l'usuari el codi de 8 xifres més recent que ha rebut per correu.
5. Crida `verify-code` amb `code`, `otpSessionToken` i `label`.
6. Desa la clau d'API retornada fora de la memòria del xat.

Variable d'entorn recomanada:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Les sol·licituds autenticades fan servir:

```text
Authorization: ApiKey <key>
```

Exemple de seqüència de configuració inicial:

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

## Interfície per a agents després de l'inici de sessió

Després de la verificació, la interfície actual per a agents és:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (només lectura)
- `POST /v1/agent/sql/execute` (escriptura)
- `GET /v1/agent/guide/{topic}` (només lectura)
- `POST /v1/agent/reviews/next` (només lectura)
- `POST /v1/agent/reviews/reveal` (només lectura)
- `POST /v1/agent/reviews/submit` (escriptura)

Una configuració inicial típica és així:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. Si cal, `POST /v1/agent/workspaces` amb `{"name":"Personal"}`
4. Si cal, `POST /v1/agent/workspaces/{workspaceId}/select`
5. Fes servir `POST /v1/agent/sql/query` per a les lectures i `POST /v1/agent/sql/execute` per a les escriptures

La selecció de l'espai de treball és explícita per a cada connexió amb clau d'API. Els agents han de seguir el text `instructions` retornat i `docs.discoveryUrl` per a les rutes en temps d'execució, a més de `docs.source.agentRoutesUrl` per als detalls d'implementació, en lloc d'endevinar el pas següent.

Les rutes de SQL i de repàs també accepten un `workspaceId` opcional al cos JSON. Indica l'espai de treball d'una sola crida sense canviar la selecció; si l'omets, s'utilitza l'espai de treball seleccionat. Si no hi ha ni una selecció ni un `workspaceId`, responen `409 WORKSPACE_SELECTION_REQUIRED`.

## Interfície SQL

`POST /v1/agent/sql/query` és la interfície estrictament de només lectura (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`) i `POST /v1/agent/sql/execute` és la interfície d'escriptura (`INSERT`, `UPDATE`, `DELETE`); una sola crida ha de contenir només lectures o només escriptures.

És limitada a propòsit i no és un PostgreSQL complet. Aquesta documentació només descriu el dialecte admès; no és una referència de compatibilitat amb PostgreSQL.

Cap operació de lectura repara dades, recalcula la planificació ni canvia l'estat de les targetes. Fes servir `POST /v1/agent/sql/execute` per a totes les escriptures de targetes i baralles. SQL no pot escriure a `review_events` ni modificar l'estat de planificació de FSRS; registra els repassos a través de `POST /v1/agent/reviews/submit`.

Famílies d'instruccions actuals:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

Els recursos lògics publicats inclouen actualment:

- `workspace`
- `cards`
- `decks`
- `review_events`

Notes:

- `LIMIT` és `100` per defecte i té un màxim de `100`
- fes servir `ORDER BY` quan necessitis una paginació estable
- fes servir `SHOW TABLES` o `DESCRIBE cards` per descobrir l'esquema
- cada crida SQL s'aplica a un sol espai de treball: el `workspaceId` del cos o l'espai de treball seleccionat

Exemple de sol·licitud:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Exemple de consulta de targetes:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Exemple de modificació:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

També hi ha disponible un servidor MCP remot a `https://mcp.nibomo.com/mcp` que fa servir OAuth 2.1 (Dynamic Client Registration + PKCE). Exposa la mateixa separació SQL com a `sql_query` (estrictament de només lectura) i `sql_execute` (escriptura), a més de `list_workspaces`, `get_guide` i les eines de repàs `next_review_card`, `reveal_answer` i `submit_review`; consulta el [connector MCP](/docs/mcp-connector/).

### Seguretat i abast

La interfície SQL és un dialecte acotat i controlat per l'analitzador, no PostgreSQL en brut. Les salvaguardes són:

- **Llista tancada d'instruccions permeses**: només `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` i `SELECT` per a les lectures, i `INSERT`, `UPDATE` i `DELETE` per a les escriptures. Qualsevol altra cosa es rebutja en el moment de l'anàlisi.
- **Recursos limitats**: les instruccions només poden afectar els recursos `workspace`, `cards`, `decks` i `review_events`.
- **Abast per espai de treball**: cada instrucció s'aplica a un sol espai de treball al qual tinguis accés, ja sigui el `workspaceId` del cos de la sol·licitud o el teu espai de treball seleccionat, sense accés entre inquilins.
- **Cossos de sol·licitud estrictes**: les rutes de SQL i de repàs rebutgen qualsevol camp del cos desconegut, de manera que un `workspaceId` mal escrit falla en lloc d'executar-se contra l'espai de treball seleccionat.
- **Límits**: fins a `100` files per instrucció, fins a `50` instruccions per lot i un límit de resultat d'aproximadament `12k` tokens. Els lots de modificació s'apliquen de manera atòmica.
- **Separació de lectura i escriptura**: `sql_query` i `list_workspaces` són estrictament de només lectura (`readOnlyHint`) i mai reparen dades, recalculen la planificació ni canvien l'estat de les targetes. `sql_execute` és l'única eina SQL d'escriptura i fa escriptures (`destructiveHint`); una sola crida ha de contenir només lectures o només escriptures. SQL no pot escriure a `review_events` ni modificar l'estat de planificació de FSRS; només `POST /v1/agent/reviews/submit` (`submit_review` a MCP) registra un repàs.

## Guies

`GET /v1/agent/guide/{topic}` retorna una guia de referència a `data.guide`, el mateix contingut que serveix l'eina `get_guide` de MCP. Temes:

- `sql_dialect`: la gramàtica SQL completa, els límits i exemples
- `card_authoring`: el contracte de les targetes, les etiquetes, les comprovacions de duplicats i el format
- `bulk_authoring`: com dividir i verificar una tasca d'escriptura gran
- `review_flow`: el cicle de repàs i valoració

Un tema desconegut respon `400` amb la llista de temes admesos. Obtén la guia corresponent abans de crear targetes, d'escriure en bloc o de fer un repàs, i torna a llegir `sql_dialect` després que es rebutgi una instrucció.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## Repassos

Les rutes de repàs permeten que un agent posi a prova qui aprèn, targeta a targeta, i desi cada valoració a la planificació FSRS de la targeta. Accepten els mateixos arguments JSON que les eines de repàs de MCP:

- `POST /v1/agent/reviews/next` retorna `card` amb `cardId` i `frontText`, o `card: null` quan no hi ha res pendent. Opcionalment, `tags` (n'hi ha prou que en coincideixi una) o `deckId` restringeixen la cua, però mai tots dos alhora; una sol·licitud sense cos és vàlida.
- `POST /v1/agent/reviews/reveal` requereix `cardId` i retorna el `backText` d'aquella targeta.
- `POST /v1/agent/reviews/submit` requereix `cardId`, un UUID `reviewId` generat pel client, un `rating` amb el valor `Again`, `Hard`, `Good` o `Easy`, i el `reviewedTimeZone` IANA de qui aprèn. El servidor registra l'hora del repàs i retorna la nova planificació de la targeta, inclosos `dueAt`, `state`, `reps` i `lapses`.

Les tres rutes accepten el `workspaceId` opcional. Desa el `reviewId` abans d'enviar i, si no saps si un enviament ha arribat, torna'l a provar amb exactament la mateixa sol·licitud; mai no es registra un segon repàs. Les rutes de repàs també poden respondre:

- `409 REVIEW_EVENT_CONFLICT`: el repàs ja s'havia registrat, i `error.details.reviewSchedule` conté la planificació actual de la targeta.
- `409 REVIEW_ID_CARD_MISMATCH`: el `reviewId` ja identifica un repàs d'una altra targeta, de manera que no s'ha desat res; torna a enviar-lo amb un `reviewId` nou.
- `409 REVIEW_STALE`: l'hora de repàs desada de la targeta és igual o posterior a l'hora actual del servidor; repassa una altra targeta.
- `400 REVIEW_INPUT_INVALID`: falta un argument, o bé no és vàlid o no és compatible, inclòs `tags` combinat amb `deckId` o una etiqueta que l'espai de treball no fa servir.

Exemple d'enviament:

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

## API per a persones i de sincronització

Nibomo també inclou API separades per a clients humans i per a la sincronització que prioritza el funcionament fora de línia, però no són el contracte principal per als agents externs:

- els fluxos del navegador fan servir galetes en un domini compartit amb protecció CSRF
- els clients que prioritzen el funcionament fora de línia fan servir les rutes de sincronització implementades a `/v1/workspaces/{workspaceId}/sync/push` i `/v1/workspaces/{workspaceId}/sync/pull`
- les rutes de sincronització estan separades de la interfície per a agents externs
