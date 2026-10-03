---
title: API-referenssi
description: "Ulkoisten agenttien API: discovery, OTP-alustus, työtilan määritys sekä julkaistut SQL-rajapinnat lukemiseen ja kirjoittamiseen."
---

## Yleiskatsaus

Tällä sivulla kuvataan Nibomon nykyinen rajapintasopimus ulkoisille tekoälyagenteille.

Jos asiakassovelluksesi tukee MCP:tä, [MCP-liitin](/docs/mcp-connector/) on
yksinkertaisin tapa yhdistää, ja se käyttää samaa datarajapintaa. Tällä sivulla kuvataan
CLI-agenttien käyttämät HTTP-discovery-, SQL-, opas- ja kertausrajapinnat.

Aloita kanonisesta discovery-aloituspisteestä:

```text
GET https://api.nibomo.com/v1/
```

Sama discovery-vastaus on saatavilla myös osoitteesta `GET /v1/agent`, mutta `/v1/` on ensisijainen julkinen aloituspiste.

Discovery-vastaus kertoo agentille, miten se voi:

- aloittaa sähköpostin OTP-kirjautumisen
- vaihtaa OTP-koodin pitkäikäiseen API-avaimeen
- ladata tilin kontekstin
- luoda tai valita työtilan
- jatkaa julkaistun SQL-rajapinnan kautta
- hakea referenssioppaita ja kerrata kortteja yksi kerrallaan

## Ajonaikainen discovery ja lähdekoodi

OpenAPI ei ole saatavilla. Alla olevat neljä aiempaa määrittelyn URL-osoitetta palauttavat nyt skeeman sijaan saman JSON-muotoisen discovery-ilmoituksen, jossa on `"openapiAvailable": false`:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

Hae ajantasaiset ajonaikaiset discovery-tiedot osoitteesta `GET https://api.nibomo.com/v1/`. Seuraa palautettua `docs.discoveryUrl`-osoitetta ajonaikaisia reittejä varten ja `docs.source.agentRoutesUrl`-osoitetta toteutuksen yksityiskohtia varten.

## Tunnistautumisen alustus

OTP-alustus tapahtuu tunnistautumispalvelussa:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

Kulku on seuraava:

1. Kutsu `GET /v1/`.
2. Lähetä käyttäjän sähköpostiosoite reitille `send-code`.
3. Lue vastauksesta `otpSessionToken`.
4. Pyydä käyttäjältä viimeisin 8-numeroinen sähköpostikoodi.
5. Kutsu `verify-code` arvoilla `code`, `otpSessionToken` ja `label`.
6. Tallenna palautettu API-avain pysyvästi muualle kuin chatin muistiin.

Suositeltu ympäristömuuttuja:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Tunnistautuneet pyynnöt käyttävät otsaketta:

```text
Authorization: ApiKey <key>
```

Esimerkki alustuksen kulusta:

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

## Agentin rajapinta kirjautumisen jälkeen

Vahvistuksen jälkeen agentin nykyinen rajapinta on:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (vain luku)
- `POST /v1/agent/sql/execute` (kirjoitus)
- `GET /v1/agent/guide/{topic}` (vain luku)
- `POST /v1/agent/reviews/next` (vain luku)
- `POST /v1/agent/reviews/reveal` (vain luku)
- `POST /v1/agent/reviews/submit` (kirjoitus)

Tyypillinen alustus näyttää tältä:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. Tarvittaessa `POST /v1/agent/workspaces` sisällöllä `{"name":"Personal"}`
4. Tarvittaessa `POST /v1/agent/workspaces/{workspaceId}/select`
5. Käytä lukemiseen `POST /v1/agent/sql/query` ja kirjoittamiseen `POST /v1/agent/sql/execute`

Työtilan valinta tehdään erikseen kullekin API-avainyhteydelle. Agenttien kannattaa arvailun sijaan noudattaa palautettua `instructions`-tekstiä ja `docs.discoveryUrl`-osoitetta ajonaikaisten reittien osalta sekä `docs.source.agentRoutesUrl`-osoitetta toteutuksen yksityiskohtien osalta.

SQL- ja kertausreitit hyväksyvät JSON-rungossa myös valinnaisen `workspaceId`-kentän. Se kohdistaa yksittäisen kutsun kyseiseen työtilaan muuttamatta valintaa; jätä se pois, jos haluat käyttää valittua työtilaa. Jos valintaa ei ole eikä `workspaceId`-kenttää ole annettu, reitit vastaavat `409 WORKSPACE_SELECTION_REQUIRED`.

## SQL-rajapinta

`POST /v1/agent/sql/query` on tiukasti vain luku -rajapinta (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`), ja `POST /v1/agent/sql/execute` on kirjoitusrajapinta (`INSERT`, `UPDATE`, `DELETE`); yksittäisen kutsun on sisällettävä joko pelkkiä lukuja tai pelkkiä kirjoituksia.

Se on tarkoituksella rajattu eikä ole täysi PostgreSQL. Nämä ohjeet kattavat vain
tuetun murteen, eivätkä ne ole PostgreSQL-yhteensopivuuden referenssi.

Mikään lukupolku ei korjaa dataa, laske ajoitusta uudelleen tai muuta kortin tilaa. Käytä
`POST /v1/agent/sql/execute`-reittiä kaikkiin korttien ja pakkojen kirjoituksiin. SQL ei voi kirjoittaa
`review_events`-tietoja tai FSRS-ajoitustilaa; tallenna kertaukset reitin
`POST /v1/agent/reviews/submit` kautta.

Nykyiset lausetyypit:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

Julkaistuja loogisia resursseja ovat tällä hetkellä:

- `workspace`
- `cards`
- `decks`
- `review_events`

Huomioita:

- `LIMIT` on oletuksena `100` ja enintään `100`
- käytä `ORDER BY` -lauseketta, kun tarvitset vakaan sivutuksen
- käytä skeeman selvittämiseen komentoa `SHOW TABLES` tai `DESCRIBE cards`
- jokainen SQL-kutsu rajautuu yhteen työtilaan: joko rungossa annettuun `workspaceId`-työtilaan tai valittuun työtilaan

Esimerkkipyyntö:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Esimerkki korttikyselystä:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Esimerkki muutoksesta:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

Saatavilla on myös etä-MCP-palvelin osoitteessa `https://mcp.nibomo.com/mcp`, joka käyttää OAuth 2.1:tä (Dynamic Client Registration + PKCE). Se tarjoaa saman SQL-jaon työkaluina `sql_query` (tiukasti vain luku) ja `sql_execute` (kirjoitus) sekä lisäksi työkalut `list_workspaces`, `get_guide` ja kertaustyökalut `next_review_card`, `reveal_answer` ja `submit_review`; katso [MCP-liitin](/docs/mcp-connector/).

### Turvallisuus ja rajaus

SQL-rajapinta on rajattu, jäsentimen valvoma murre eikä raaka PostgreSQL. Suojaukset ovat:

- **Suljettu sallittujen lauseiden luettelo**: lukemiseen vain `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` ja `SELECT`, kirjoittamiseen `INSERT`, `UPDATE` ja `DELETE`. Kaikki muu hylätään jäsennysvaiheessa.
- **Rajatut resurssit**: lauseet voivat koskea vain resursseja `workspace`, `cards`, `decks` ja `review_events`.
- **Työtilakohtainen rajaus**: jokainen lause rajautuu yhteen työtilaan, johon sinulla on pääsy, eli joko pyynnön rungossa annettuun `workspaceId`-työtilaan tai valittuun työtilaasi, eikä pääsyä toisten vuokralaisten tietoihin ole.
- **Tiukat pyyntörungot**: SQL- ja kertausreitit hylkäävät rungossa olevan tuntemattoman kentän, joten väärin kirjoitettu `workspaceId` johtaa virheeseen sen sijaan, että kutsu ajettaisiin valittua työtilaa vasten.
- **Ylärajat**: enintään `100` riviä lausetta kohden, enintään `50` lausetta erää kohden ja tuloksen yläraja noin `12k` tokenia. Muutoserät toteutetaan atomisesti.
- **Luku- ja kirjoitusjako**: `sql_query` ja `list_workspaces` ovat tiukasti vain luku -työkaluja (`readOnlyHint`), eivätkä ne koskaan korjaa dataa, laske ajoitusta uudelleen tai muuta kortin tilaa. `sql_execute` on ainoa SQL-kirjoitustyökalu, ja se tekee kirjoituksia (`destructiveHint`); yksittäisen kutsun on sisällettävä joko pelkkiä lukuja tai pelkkiä kirjoituksia. SQL ei voi kirjoittaa `review_events`-tietoja tai FSRS-ajoitustilaa; vain `POST /v1/agent/reviews/submit` (MCP:ssä `submit_review`) tallentaa kertauksen.

## Oppaat

`GET /v1/agent/guide/{topic}` palauttaa yhden referenssioppaan kentässä `data.guide`, saman sisällön, jonka MCP-työkalu `get_guide` tarjoaa. Aiheet:

- `sql_dialect`: koko SQL-kielioppi, rajat ja esimerkit
- `card_authoring`: korttien tietosopimus, tunnisteet, kaksoiskappaleiden tarkistukset ja muotoilu
- `bulk_authoring`: suuren kirjoitustyön jakaminen osiin ja tarkistaminen
- `review_flow`: kertaus- ja arviointisilmukka

Tuntemattomaan aiheeseen vastataan koodilla `400` ja tuettujen aiheiden luettelolla. Hae vastaava opas ennen korttien laatimista, massakirjoittamista tai kertauksen aloittamista, ja lue `sql_dialect` uudelleen, jos lause hylätään.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## Kertaukset

Kertausreittien avulla agentti voi kuulustella oppijaa kortti kerrallaan ja tallentaa jokaisen arvion kortin FSRS-aikatauluun. Ne ottavat samat JSON-argumentit kuin MCP:n kertaustyökalut:

- `POST /v1/agent/reviews/next` palauttaa `card`-olion, jossa on `cardId` ja `frontText`, tai `card: null`, kun mitään ei ole erääntynyt. Valinnainen `tags` (mikä tahansa annetuista) tai `deckId` rajaa jonoa, mutta ei molempia yhtä aikaa; pyyntö ilman runkoa on kelvollinen.
- `POST /v1/agent/reviews/reveal` vaatii `cardId`-arvon ja palauttaa kyseisen kortin `backText`-kentän.
- `POST /v1/agent/reviews/submit` vaatii `cardId`-arvon, asiakkaan luoman `reviewId`-UUID:n, `rating`-arvon `Again`, `Hard`, `Good` tai `Easy` sekä oppijan IANA-aikavyöhykkeen `reviewedTimeZone`. Palvelin merkitsee kertausajan ja palauttaa kortin uuden aikataulun, mukaan lukien `dueAt`, `state`, `reps` ja `lapses`.

Kaikki kolme reittiä hyväksyvät valinnaisen `workspaceId`-kentän. Tallenna `reviewId` pysyvästi ennen lähettämistä, ja jos lähetyksen onnistuminen jää epävarmaksi, lähetä täsmälleen sama pyyntö uudelleen; uusintayritys ei koskaan tallenna toista kertausta. Kertausreitit voivat palauttaa myös seuraavat vastaukset:

- `409 REVIEW_EVENT_CONFLICT`: kertaus on jo tallennettu, ja `error.details.reviewSchedule` sisältää kortin nykyisen aikataulun.
- `409 REVIEW_ID_CARD_MISMATCH`: `reviewId` tunnistaa jo toisen kortin kertauksen, joten mitään ei tallennettu; lähetä uudelleen uudella `reviewId`-arvolla.
- `409 REVIEW_STALE`: kortin tallennettu kertausaika on sama tai myöhäisempi kuin palvelimen nykyinen aika; kertaa jokin toinen kortti.
- `400 REVIEW_INPUT_INVALID`: jokin argumentti puuttuu, on virheellinen tai ei ole tuettu, mukaan lukien `tags` yhdessä `deckId`-arvon kanssa tai tunniste, jota työtila ei käytä.

Esimerkki lähetyksestä:

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

## Ihmiskäyttäjien ja synkronoinnin API:t

Nibomossa on myös erilliset API:t ihmiskäyttäjien asiakassovelluksille ja offline-first-synkronoinnille, mutta ne eivät ole ulkoisten agenttien pääasiallinen rajapinta:

- selainkulut käyttävät yhteisen verkkotunnuksen evästeitä ja CSRF-suojausta
- offline-first-asiakkaat käyttävät toteutettuja synkronointireittejä `/v1/workspaces/{workspaceId}/sync/push` ja `/v1/workspaces/{workspaceId}/sync/pull`
- synkronointireitit ovat erillään ulkoisten agenttien rajapinnasta
