---
title: API viide
description: Väliste agentide API avastuse, ühekordse koodiga algseadistuse, tööruumi seadistamise ning avaldatud lugemis- ja kirjutamis-SQL-liideste jaoks.
---

## Ülevaade

See leht kirjeldab Nibomo praegust välise AI-agendi lepingut.

Kui sinu klient toetab MCP-d, on [MCP-konnektor](/docs/mcp-connector/) lihtsaim viis ühendamiseks ja see kasutab sama andmeliidest. See leht kirjeldab HTTP avastuse, SQL-i, juhendite ja kordamise lepingut, mida kasutavad CLI-agendid.

Alusta kanoonilisest avastuse sisenemispunktist:

```text
GET https://api.nibomo.com/v1/
```

Sama avastuse sisu on saadaval ka aadressil `GET /v1/agent`, kuid peamine avalik sisenemispunkt on `/v1/`.

Avastusvastus juhendab agenti, kuidas:

- alustada e-posti ühekordse koodiga sisselogimist
- vahetada ühekordne kood pikaajalise API-võtme vastu
- laadida konto kontekst
- luua või valida tööruum
- jätkata avaldatud SQL-liidese kaudu
- hankida teatmejuhendeid ja korrata kaarte ükshaaval

## Käitusaegne avastus ja lähtekood

OpenAPI pole saadaval. Neli allpool toodud endist spetsifikatsiooni URL-i tagastavad nüüd skeemi asemel sama JSON-vormingus avastusteate väärtusega `"openapiAvailable": false`:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

Praeguseks käitusaegseks avastuseks kasuta päringut `GET https://api.nibomo.com/v1/`. Käitusaegsete marsruutide jaoks järgi tagastatud välja `docs.discoveryUrl` ja teostuse üksikasjade jaoks välja `docs.source.agentRoutesUrl`.

## Autentimise algseadistus

Ühekordse koodiga algseadistus toimub autentimisteenuses:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

Voog on järgmine:

1. Kutsu välja `GET /v1/`.
2. Saada kasutaja e-posti aadress lõpp-punkti `send-code`.
3. Loe vastusest `otpSessionToken`.
4. Küsi kasutajalt viimast 8-kohalist e-posti koodi.
5. Kutsu välja `verify-code` väärtustega `code`, `otpSessionToken` ja `label`.
6. Salvesta tagastatud API-võti väljaspool vestluse mälu.

Soovitatav keskkonnamuutuja:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Autenditud päringud kasutavad päist:

```text
Authorization: ApiKey <key>
```

Algseadistuse näidisjada:

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

## Sisselogimisjärgne agendiliides

Pärast kinnitamist on praegune agendiliides järgmine:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (ainult lugemiseks)
- `POST /v1/agent/sql/execute` (kirjutamiseks)
- `GET /v1/agent/guide/{topic}` (ainult lugemiseks)
- `POST /v1/agent/reviews/next` (ainult lugemiseks)
- `POST /v1/agent/reviews/reveal` (ainult lugemiseks)
- `POST /v1/agent/reviews/submit` (kirjutamiseks)

Tüüpiline algseadistus näeb välja selline:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. Vajaduse korral `POST /v1/agent/workspaces` sisuga `{"name":"Personal"}`
4. Vajaduse korral `POST /v1/agent/workspaces/{workspaceId}/select`
5. Kasuta lugemiseks `POST /v1/agent/sql/query` ja kirjutamiseks `POST /v1/agent/sql/execute`

Tööruumi valik on iga API-võtme ühenduse puhul selgesõnaline. Agendid peaksid järgmise sammu arvamise asemel järgima tagastatud teksti `instructions` ja käitusaegsete marsruutide jaoks välja `docs.discoveryUrl` ning teostuse üksikasjade jaoks välja `docs.source.agentRoutesUrl`.

SQL-i ja kordamise marsruudid aktsepteerivad JSON-kehas ka valikulist välja `workspaceId`. See suunab ühe väljakutse sellesse tööruumi ilma valikut muutmata; jäta see ära, et kasutada valitud tööruumi. Kui pole ei valikut ega välja `workspaceId`, vastavad need koodiga `409 WORKSPACE_SELECTION_REQUIRED`.

## SQL-liides

`POST /v1/agent/sql/query` on rangelt ainult lugemiseks mõeldud liides (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`) ja `POST /v1/agent/sql/execute` on kirjutamisliides (`INSERT`, `UPDATE`, `DELETE`); üks väljakutse peab sisaldama kas ainult lugemisi või ainult kirjutamisi.

See on teadlikult piiratud ega ole täielik PostgreSQL. See dokumentatsioon kirjeldab ainult toetatud dialekti ega ole PostgreSQL-iga ühilduvuse teatmik.

Ükski lugemispäring ei paranda andmeid, ei arvuta ajastamist ümber ega muuda kaardi olekut. Kasuta iga kaardi ja kaardipaki kirjutamiseks `POST /v1/agent/sql/execute`. SQL ei saa kirjutada `review_events` ega FSRS-i ajastamise olekut; salvesta kordamised `POST /v1/agent/reviews/submit` kaudu.

Praegused lausetüübid:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

Avaldatud loogilised ressursid on praegu:

- `workspace`
- `cards`
- `decks`
- `review_events`

Märkused:

- `LIMIT` vaikeväärtus on `100` ja ülempiir `100`
- kasuta `ORDER BY`, kui vajad stabiilset lehekülgede kaupa pärimist
- kasuta skeemi avastamiseks `SHOW TABLES` või `DESCRIBE cards`
- iga SQL-väljakutse piirdub ühe tööruumiga: kehas oleva `workspaceId` või valitud tööruumiga

Näidispäring:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Kaartide päringu näide:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Muutmise näide:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

Saadaval on ka kaug-MCP-server aadressil `https://mcp.nibomo.com/mcp`, mis kasutab OAuth 2.1 protokolli (Dynamic Client Registration + PKCE). See pakub sama SQL-i jaotust tööriistadena `sql_query` (rangelt ainult lugemiseks) ja `sql_execute` (kirjutamiseks), lisaks `list_workspaces`, `get_guide` ning kordamistööriistad `next_review_card`, `reveal_answer` ja `submit_review`; vaata [MCP-konnektorit](/docs/mcp-connector/).

### Turvalisus ja ulatus

SQL-liides on piiratud dialekt, mille reegleid jõustab parser, mitte toores PostgreSQL. Kaitsemeetmed on järgmised:

- **Suletud lubatud lausete loend**: lugemiseks ainult `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` ja `SELECT` ning kirjutamiseks `INSERT`, `UPDATE` ja `DELETE`. Kõik muu lükatakse parsimisel tagasi.
- **Piiratud ressursid**: laused saavad puudutada ainult ressursse `workspace`, `cards`, `decks` ja `review_events`.
- **Tööruumipõhine piiramine**: iga lause piirdub ühe tööruumiga, millele sul on juurdepääs — kas päringu kehas oleva `workspaceId` või sinu valitud tööruumiga — ning juurdepääs teiste tööruumide andmetele on välistatud.
- **Ranged päringukehad**: SQL-i ja kordamise marsruudid lükkavad tundmatu kehavälja tagasi, nii et valesti kirjutatud `workspaceId` põhjustab vea, selle asemel et lause käivitataks valitud tööruumis.
- **Piirangud**: kuni `100` rida lause kohta, kuni `50` lauset partii kohta ja tulemuse piirang umbes `12k` tokenit. Muutmispartiid rakendatakse atomaarselt.
- **Lugemise ja kirjutamise eraldamine**: `sql_query` ja `list_workspaces` on rangelt ainult lugemiseks (`readOnlyHint`) ega paranda kunagi andmeid, ei arvuta ajastamist ümber ega muuda kaardi olekut. `sql_execute` on ainus SQL-i kirjutamistööriist ja teeb kirjutamisi (`destructiveHint`); üks väljakutse peab sisaldama kas ainult lugemisi või ainult kirjutamisi. SQL ei saa kirjutada `review_events` ega FSRS-i ajastamise olekut; kordamise salvestab ainult `POST /v1/agent/reviews/submit` (MCP-s `submit_review`).

## Juhendid

`GET /v1/agent/guide/{topic}` tagastab väljal `data.guide` ühe teatmejuhendi, sama sisu, mida pakub MCP tööriist `get_guide`. Teemad:

- `sql_dialect`: täielik SQL-i grammatika, piirangud ja näited
- `card_authoring`: kaardi leping, sildid, duplikaatide kontroll ja vormindus
- `bulk_authoring`: suure kirjutamistöö jagamine ja kontrollimine
- `review_flow`: kordamise ja hindamise tsükkel

Tundmatu teema korral tagastatakse `400` koos toetatud teemade loendiga. Hangi sobiv juhend enne kaartide koostamist, hulgikirjutamist või kordamise käivitamist ning loe `sql_dialect` uuesti pärast tagasilükatud lauset.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## Kordamised

Kordamise marsruudid võimaldavad agendil küsitleda õppijat kaart-kaardilt ja salvestada iga hinnangu kaardi FSRS-i ajakavasse. Need võtavad vastu samu JSON-argumente nagu MCP kordamistööriistad:

- `POST /v1/agent/reviews/next` tagastab `card` koos väljadega `cardId` ja `frontText` või `card: null`, kui midagi pole vaja korrata. Valikuline `tags` (sobib ükskõik milline) või `deckId` kitsendab järjekorda, kuid mitte mõlemad korraga; ilma kehata päring on kehtiv.
- `POST /v1/agent/reviews/reveal` nõuab välja `cardId` ja tagastab selle kaardi `backText`.
- `POST /v1/agent/reviews/submit` nõuab välja `cardId`, kliendi loodud `reviewId` UUID-d, hinnangut `rating` väärtusega `Again`, `Hard`, `Good` või `Easy` ning õppija IANA ajavööndit `reviewedTimeZone`. Server märgib kordamise aja ja tagastab kaardi uue ajakava, sealhulgas `dueAt`, `state`, `reps` ja `lapses`.

Kõik kolm marsruuti aktsepteerivad valikulist välja `workspaceId`. Salvesta `reviewId` enne saatmist. Kui saatmise tulemus jääb ebaselgeks, saada täpselt sama päring uuesti; teist kordamist ei salvestata kunagi. Kordamise marsruudid võivad vastata ka järgmiselt:

- `409 REVIEW_EVENT_CONFLICT`: kordamine on juba salvestatud ja `error.details.reviewSchedule` sisaldab kaardi praegust ajakava.
- `409 REVIEW_ID_CARD_MISMATCH`: `reviewId` tähistab juba teise kaardi kordamist, seega midagi ei salvestatud; saada uuesti uue `reviewId` väärtusega.
- `409 REVIEW_STALE`: kaardi salvestatud kordamisaeg on serveri praegusest ajast hilisem või sellega võrdne; korda mõnda teist kaarti.
- `400 REVIEW_INPUT_INVALID`: argument puudub, on vigane või pole toetatud, sealhulgas `tags` koos väljaga `deckId` või silt, mida tööruum ei kasuta.

Saatmise näide:

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

## Inimkasutajate ja sünkroonimise API-d

Nibomo sisaldab ka eraldi API-sid inimkasutajate klientidele ja võrguühenduseta kasutamisest lähtuvale sünkroonimisele, kuid need ei ole väliste agentide peamine leping:

- brauseri vood kasutavad ühise domeeni küpsiseid koos CSRF-kaitsega
- võrguühenduseta kasutamisest lähtuvad kliendid kasutavad teostatud sünkroonimismarsruute `/v1/workspaces/{workspaceId}/sync/push` ja `/v1/workspaces/{workspaceId}/sync/pull`
- sünkroonimismarsruudid on välisest agendiliidesest eraldi
