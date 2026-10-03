---
title: API-referencia
description: Külső ügynöki API a felderítéshez, az OTP-alapú előkészítéshez, a munkaterület beállításához és a közzétett olvasási és írási SQL-felületekhez.
---

## Áttekintés

Ez az oldal a Nibomo jelenlegi, külső AI-ügynököknek szóló szerződését dokumentálja.

Ha a kliensed támogatja az MCP-t, az [MCP-csatlakozó](/docs/mcp-connector/) a
legegyszerűbb módja a csatlakozásnak, és ugyanezt az adatfelületet teszi elérhetővé. Ez az oldal
a parancssori ügynökök által használt HTTP-alapú felderítési, SQL-, útmutató- és ismétlési szerződést dokumentálja.

Indulj a kanonikus felderítési belépési pontról:

```text
GET https://api.nibomo.com/v1/
```

Ugyanez a felderítési tartalom a `GET /v1/agent` címen is elérhető, de az elsődleges nyilvános belépési pont a `/v1/`.

A felderítési válasz elmondja az ügynöknek, hogyan:

- indítsa el az e-mailes OTP-bejelentkezést
- cserélje be az OTP-t egy hosszú élettartamú API-kulcsra
- töltse be a fiók kontextusát
- hozzon létre vagy válasszon ki egy munkaterületet
- haladjon tovább a közzétett SQL-felületen
- kérjen le referencia-útmutatókat, és ismételje a kártyákat egyenként

## Futásidejű felderítés és forráskód

Az OpenAPI-specifikáció nem érhető el. Az alábbi négy korábbi specifikációs URL séma helyett most ugyanazt a JSON-formátumú felderítési értesítést adja vissza, `"openapiAvailable": false` értékkel:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

Az aktuális futásidejű felderítéshez használd a `GET https://api.nibomo.com/v1/` hívást. A futásidejű útvonalakért kövesd a visszaadott `docs.discoveryUrl` értéket, a megvalósítás részleteiért pedig a `docs.source.agentRoutesUrl` értéket.

## Hitelesítési előkészítés

Az OTP-alapú előkészítés a hitelesítési szolgáltatáson fut:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

A folyamat:

1. Hívd meg a `GET /v1/` végpontot.
2. Küldd el a felhasználó e-mail-címét a `send-code` végpontnak.
3. Olvasd ki az `otpSessionToken` értéket a válaszból.
4. Kérd el a felhasználótól a legutóbbi, 8 számjegyű e-mailes kódot.
5. Hívd meg a `verify-code` végpontot a `code`, az `otpSessionToken` és a `label` mezővel.
6. A visszaadott API-kulcsot a csevegés memóriáján kívül tárold el.

Ajánlott környezeti változó:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

A hitelesített kérések ezt használják:

```text
Authorization: ApiKey <key>
```

Példa az előkészítés sorrendjére:

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

## Ügynöki felület bejelentkezés után

Az ellenőrzés után a jelenlegi ügynöki felület a következő:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (csak olvasás)
- `POST /v1/agent/sql/execute` (írás)
- `GET /v1/agent/guide/{topic}` (csak olvasás)
- `POST /v1/agent/reviews/next` (csak olvasás)
- `POST /v1/agent/reviews/reveal` (csak olvasás)
- `POST /v1/agent/reviews/submit` (írás)

Egy tipikus előkészítés így néz ki:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. Ha szükséges, `POST /v1/agent/workspaces` a `{"name":"Personal"}` törzzsel
4. Ha szükséges, `POST /v1/agent/workspaces/{workspaceId}/select`
5. Olvasáshoz a `POST /v1/agent/sql/query`, íráshoz a `POST /v1/agent/sql/execute` végpontot használd

A munkaterületet API-kulcs-kapcsolatonként, explicit módon kell kiválasztani. Az ügynökök ne találgassák a következő lépést, hanem kövessék a visszaadott `instructions` szöveget és a futásidejű útvonalakhoz a `docs.discoveryUrl`, a megvalósítás részleteihez pedig a `docs.source.agentRoutesUrl` értéket.

Az SQL- és ismétlési útvonalak a JSON-törzsben opcionális `workspaceId` mezőt is elfogadnak. Ez egyetlen hívás erejéig az adott munkaterületet célozza meg, a kiválasztás módosítása nélkül; ha elhagyod, a kiválasztott munkaterületre vonatkozik a hívás. Ha nincs sem kiválasztás, sem `workspaceId`, a válasz `409 WORKSPACE_SELECTION_REQUIRED`.

## SQL-felület

A `POST /v1/agent/sql/query` a szigorúan csak olvasható felület (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`), a `POST /v1/agent/sql/execute` pedig az írási felület (`INSERT`, `UPDATE`, `DELETE`); egy hívásban vagy csak olvasás, vagy csak írás szerepelhet.

Szándékosan korlátozott, és nem teljes értékű PostgreSQL. Ez a dokumentáció
csak a támogatott dialektust írja le, nem PostgreSQL-kompatibilitási referencia.

Egyetlen olvasási útvonal sem javít adatot, nem számolja újra az ütemezést, és nem módosítja a kártya állapotát. Minden
kártya- és pakliíráshoz a `POST /v1/agent/sql/execute` végpontot használd. SQL-lel nem lehet a
`review_events` erőforrásba vagy az FSRS ütemezési állapotába írni; az ismétléseket a
`POST /v1/agent/reviews/submit` végponton keresztül rögzítsd.

Jelenlegi utasításcsaládok:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

A közzétett logikai erőforrások jelenleg:

- `workspace`
- `cards`
- `decks`
- `review_events`

Megjegyzések:

- a `LIMIT` alapértéke `100`, és legfeljebb `100` lehet
- ha stabil lapozásra van szükséged, használj `ORDER BY` záradékot
- a séma feltérképezéséhez használd a `SHOW TABLES` vagy a `DESCRIBE cards` utasítást
- minden SQL-hívás egyetlen munkaterületre vonatkozik: a törzsben megadott `workspaceId` munkaterületére vagy a kiválasztott munkaterületre

Példakérés:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Példa kártyalekérdezésre:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Példa módosításra:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

Távoli MCP-szerver is elérhető a `https://mcp.nibomo.com/mcp` címen, OAuth 2.1-gyel (Dynamic Client Registration + PKCE). Ugyanezt az SQL-felosztást kínálja `sql_query` (szigorúan csak olvasás) és `sql_execute` (írás) néven, valamint a `list_workspaces` és a `get_guide` eszközt, továbbá a `next_review_card`, a `reveal_answer` és a `submit_review` ismétlési eszközt; lásd az [MCP-csatlakozó](/docs/mcp-connector/) oldalt.

### Biztonság és hatókör

Az SQL-felület egy zárt, az elemző által kikényszerített dialektus, nem nyers PostgreSQL. A védőkorlátok:

- **Zárt utasításlista**: olvasáshoz csak a `SHOW TABLES`, a `DESCRIBE`, a `SHOW COLUMNS` és a `SELECT`, íráshoz csak az `INSERT`, az `UPDATE` és a `DELETE` engedélyezett. Minden mást a rendszer már az elemzéskor elutasít.
- **Korlátozott erőforrások**: az utasítások csak a `workspace`, a `cards`, a `decks` és a `review_events` erőforrást érhetik el.
- **Munkaterületenkénti hatókör**: minden utasítás egyetlen, számodra elérhető munkaterületre vonatkozik, vagyis a kéréstörzsben megadott `workspaceId` munkaterületére vagy a kiválasztott munkaterületedre, bérlők közötti hozzáférés nélkül.
- **Szigorú kéréstörzsek**: az SQL- és ismétlési útvonalak elutasítják az ismeretlen törzsmezőt, így egy elgépelt `workspaceId` hibát ad, ahelyett hogy a kiválasztott munkaterületen futna le.
- **Korlátok**: legfeljebb `100` sor utasításonként, legfeljebb `50` utasítás kötegenként, és nagyjából `12k` tokenes eredménykorlát. A módosító kötegek atomikusan hajtódnak végre.
- **Olvasás és írás szétválasztása**: a `sql_query` és a `list_workspaces` szigorúan csak olvasható (`readOnlyHint`), és soha nem javít adatot, nem számolja újra az ütemezést, és nem módosítja a kártya állapotát. A `sql_execute` az egyetlen SQL-író eszköz, és írási műveleteket végez (`destructiveHint`); egy hívásban vagy csak olvasás, vagy csak írás szerepelhet. SQL-lel nem lehet a `review_events` erőforrásba vagy az FSRS ütemezési állapotába írni; ismétlést csak a `POST /v1/agent/reviews/submit` (MCP-ben a `submit_review`) rögzít.

## Útmutatók

A `GET /v1/agent/guide/{topic}` egy referencia-útmutatót ad vissza a `data.guide` mezőben, ugyanazt a tartalmat, amelyet az MCP `get_guide` eszköze is kiszolgál. Témák:

- `sql_dialect`: a teljes SQL-nyelvtan, a korlátok és példák
- `card_authoring`: a kártyaszerződés, a címkék, a duplikátumellenőrzés és a formázás
- `bulk_authoring`: egy nagy írási feladat felosztása és ellenőrzése
- `review_flow`: az ismétlési és értékelési ciklus

Ismeretlen témára a válasz `400`, a támogatott témák listájával. Kártyák írása, tömeges írás vagy ismétlés előtt kérd le a megfelelő útmutatót, és egy elutasított utasítás után olvasd el újra a `sql_dialect` útmutatót.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## Ismétlések

Az ismétlési útvonalakkal egy ügynök kártyánként kikérdezheti a tanulót, és minden értékelést elmenthet a kártya FSRS-ütemtervébe. Ugyanazokat a JSON-argumentumokat fogadják, mint az MCP ismétlési eszközei:

- A `POST /v1/agent/reviews/next` a `card` objektumot adja vissza a `cardId` és a `frontText` mezővel, vagy `card: null` értéket, ha semmi sem esedékes. Az opcionális `tags` (bármelyik egyezik) vagy `deckId` szűkíti a sort, de a kettő nem adható meg egyszerre; törzs nélküli kérés is érvényes.
- A `POST /v1/agent/reviews/reveal` megköveteli a `cardId` mezőt, és az adott kártya `backText` értékét adja vissza.
- A `POST /v1/agent/reviews/submit` megköveteli a `cardId` mezőt, egy kliens által generált `reviewId` UUID-t, egy `rating` értéket (`Again`, `Hard`, `Good` vagy `Easy`), valamint a tanuló IANA szerinti `reviewedTimeZone` időzónáját. A szerver rögzíti az ismétlés időpontját, és visszaadja a kártya új ütemtervét, többek között a `dueAt`, a `state`, a `reps` és a `lapses` értéket.

Mindhárom útvonal elfogadja az opcionális `workspaceId` mezőt. A beküldés előtt mentsd el a `reviewId` értéket, és egy bizonytalan kimenetelű beküldést ugyanazzal a kéréssel próbálj újra; ez soha nem rögzít második ismétlést. Az ismétlési útvonalak ezekkel is válaszolhatnak:

- `409 REVIEW_EVENT_CONFLICT`: az ismétlést már rögzítették, és az `error.details.reviewSchedule` tartalmazza a kártya aktuális ütemtervét.
- `409 REVIEW_ID_CARD_MISMATCH`: a `reviewId` már egy másik kártya ismétlését azonosítja, ezért semmi sem lett mentve; küldd be újra egy új `reviewId` értékkel.
- `409 REVIEW_STALE`: a kártya tárolt ismétlési időpontja megegyezik a szerver aktuális idejével, vagy későbbi annál; ismételj egy másik kártyát.
- `400 REVIEW_INPUT_INVALID`: egy argumentum hiányzik, érvénytelen vagy nem támogatott, ideértve a `tags` és a `deckId` együttes használatát, illetve olyan címkét, amelyet a munkaterület nem használ.

Példa beküldésre:

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

## Emberi felhasználóknak szóló és szinkronizálási API-k

A Nibomo külön API-kat is tartalmaz az emberi felhasználók klienseihez és az offline-first szinkronizáláshoz, de ezek nem a külső ügynökök fő szerződését alkotják:

- a böngészős folyamatok közös domainű sütiket és CSRF-védelmet használnak
- az offline-first kliensek a megvalósított szinkronizálási útvonalakat használják a `/v1/workspaces/{workspaceId}/sync/push` és a `/v1/workspaces/{workspaceId}/sync/pull` alatt
- a szinkronizálási útvonalak elkülönülnek a külső ügynöki felülettől
