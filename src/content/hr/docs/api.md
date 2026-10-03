---
title: API referenca
description: API za vanjske agente za otkrivanje, početno postavljanje OTP-om, postavljanje radnog prostora te objavljena SQL sučelja za čitanje i pisanje.
---

## Pregled

Ova stranica dokumentira trenutačni ugovor koji Nibomo nudi vanjskim AI agentima.

Ako vaš klijent podržava MCP, [MCP konektor](/docs/mcp-connector/) najjednostavniji je način povezivanja i u pozadini koristi isto podatkovno sučelje. Ova stranica dokumentira HTTP ugovor za otkrivanje, SQL, vodiče i ponavljanje koji koriste CLI agenti.

Krenite od kanonske ulazne točke za otkrivanje:

```text
GET https://api.nibomo.com/v1/
```

Isti sadržaj za otkrivanje dostupan je i na `GET /v1/agent`, ali je `/v1/` glavna javna ulazna točka.

Odgovor za otkrivanje govori agentu kako da:

- pokrene prijavu OTP kodom iz e-pošte
- zamijeni OTP za dugotrajni API ključ
- učita kontekst računa
- izradi ili odabere radni prostor
- nastavi putem objavljenog SQL sučelja
- dohvati referentne vodiče i ponavlja kartice jednu po jednu

## Otkrivanje pri izvođenju i izvorni kod

OpenAPI nije dostupan. Četiri nekadašnja URL-a specifikacije u nastavku sada umjesto sheme vraćaju istu JSON obavijest za otkrivanje s `"openapiAvailable": false`:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

Za trenutačno otkrivanje pri izvođenju koristite `GET https://api.nibomo.com/v1/`. Za rute dostupne pri izvođenju slijedite vraćeni `docs.discoveryUrl`, a za detalje implementacije `docs.source.agentRoutesUrl`.

## Početno postavljanje autentifikacije

Početno postavljanje OTP-om odvija se na usluzi autentifikacije:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

Tok je sljedeći:

1. Pozovite `GET /v1/`.
2. Pošaljite korisnikovu adresu e-pošte na `send-code`.
3. Pročitajte `otpSessionToken` iz odgovora.
4. Zatražite od korisnika najnoviji 8-znamenkasti kod iz e-pošte.
5. Pozovite `verify-code` s `code`, `otpSessionToken` i `label`.
6. Vraćeni API ključ spremite izvan memorije razgovora.

Preporučena varijabla okruženja:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Autentificirani zahtjevi koriste:

```text
Authorization: ApiKey <key>
```

Primjer slijeda početnog postavljanja:

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

## Sučelje za agente nakon prijave

Nakon potvrde agentima je trenutačno dostupno ovo sučelje:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (samo za čitanje)
- `POST /v1/agent/sql/execute` (pisanje)
- `GET /v1/agent/guide/{topic}` (samo za čitanje)
- `POST /v1/agent/reviews/next` (samo za čitanje)
- `POST /v1/agent/reviews/reveal` (samo za čitanje)
- `POST /v1/agent/reviews/submit` (pisanje)

Uobičajeno početno postavljanje izgleda ovako:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. Po potrebi `POST /v1/agent/workspaces` s `{"name":"Personal"}`
4. Po potrebi `POST /v1/agent/workspaces/{workspaceId}/select`
5. Koristite `POST /v1/agent/sql/query` za čitanje i `POST /v1/agent/sql/execute` za pisanje

Odabir radnog prostora izričito se postavlja za svaku vezu s API ključem. Umjesto da nagađaju sljedeći korak, agenti trebaju slijediti vraćeni tekst `instructions` i `docs.discoveryUrl` za rute dostupne pri izvođenju te `docs.source.agentRoutesUrl` za detalje implementacije.

SQL rute i rute za ponavljanje prihvaćaju i neobavezni `workspaceId` u JSON tijelu. Tada se taj jedan poziv izvršava nad navedenim radnim prostorom, a odabir se ne mijenja; izostavite ga ako želite koristiti odabrani radni prostor. Ako nema ni odabira ni `workspaceId`, rute odgovaraju s `409 WORKSPACE_SELECTION_REQUIRED`.

## SQL sučelje

`POST /v1/agent/sql/query` je sučelje strogo samo za čitanje (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`), a `POST /v1/agent/sql/execute` je sučelje za pisanje (`INSERT`, `UPDATE`, `DELETE`); jedan poziv mora sadržavati samo čitanja ili samo pisanja.

Namjerno je ograničeno i nije potpuni PostgreSQL. Ova dokumentacija pokriva samo podržani dijalekt, a ne referencu kompatibilnosti s PostgreSQL-om.

Nijedna operacija čitanja ne popravlja podatke, ne preračunava raspored niti mijenja stanje kartica. Za svako pisanje kartica i špilova koristite `POST /v1/agent/sql/execute`. SQL ne može pisati `review_events` ni FSRS stanje raspoređivanja; ponavljanja bilježite putem `POST /v1/agent/reviews/submit`.

Trenutačne vrste naredbi:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

Objavljeni logički resursi trenutačno uključuju:

- `workspace`
- `cards`
- `decks`
- `review_events`

Napomene:

- zadana vrijednost za `LIMIT` je `100`, a najveća dopuštena također je `100`
- koristite `ORDER BY` kad vam treba stabilno straničenje
- za otkrivanje sheme koristite `SHOW TABLES` ili `DESCRIBE cards`
- svaki SQL poziv ograničen je na jedan radni prostor: `workspaceId` u tijelu ili odabrani radni prostor

Primjer zahtjeva:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Primjer upita za kartice:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Primjer izmjene:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

Dostupan je i udaljeni MCP poslužitelj na `https://mcp.nibomo.com/mcp` koji koristi OAuth 2.1 (Dynamic Client Registration + PKCE). Nudi istu podjelu SQL-a na `sql_query` (strogo samo za čitanje) i `sql_execute` (pisanje), uz `list_workspaces`, `get_guide` i alate za ponavljanje `next_review_card`, `reveal_answer` i `submit_review`; pogledajte [MCP konektor](/docs/mcp-connector/).

### Sigurnost i opseg

SQL sučelje je ograničen dijalekt čija pravila provodi parser, a ne izravan pristup PostgreSQL-u. Zaštitne mjere su:

- **Zatvoreni popis dopuštenih naredbi**: samo `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` i `SELECT` za čitanje te `INSERT`, `UPDATE` i `DELETE` za pisanje. Sve ostalo odbija se već pri parsiranju.
- **Ograničeni resursi**: naredbe mogu pristupiti samo resursima `workspace`, `cards`, `decks` i `review_events`.
- **Ograničenje na radni prostor**: svaka naredba ograničena je na jedan radni prostor kojem imate pristup, bilo `workspaceId` u tijelu zahtjeva bilo vaš odabrani radni prostor, bez pristupa podacima drugih korisnika.
- **Stroga tijela zahtjeva**: SQL rute i rute za ponavljanje odbijaju nepoznato polje u tijelu, pa pogrešno napisan `workspaceId` uzrokuje pogrešku umjesto da se zahtjev izvrši nad odabranim radnim prostorom.
- **Ograničenja**: do `100` redaka po naredbi, do `50` naredbi po skupu i ograničenje rezultata od otprilike `12k` tokena. Skupovi izmjena primjenjuju se atomarno.
- **Podjela na čitanje i pisanje**: `sql_query` i `list_workspaces` strogo su samo za čitanje (`readOnlyHint`) i nikad ne popravljaju podatke, ne preračunavaju raspored niti mijenjaju stanje kartica. `sql_execute` je jedini SQL alat za pisanje i izvodi pisanja (`destructiveHint`); jedan poziv mora sadržavati samo čitanja ili samo pisanja. SQL ne može pisati `review_events` ni FSRS stanje raspoređivanja; ponavljanje bilježi samo `POST /v1/agent/reviews/submit` (MCP `submit_review`).

## Vodiči

`GET /v1/agent/guide/{topic}` vraća jedan referentni vodič u `data.guide`, s istim sadržajem koji poslužuje MCP alat `get_guide`. Teme:

- `sql_dialect`: potpuna SQL gramatika, ograničenja i primjeri
- `card_authoring`: ugovor kartice, oznake, provjere duplikata i oblikovanje
- `bulk_authoring`: podjela i provjera velikog skupnog upisa
- `review_flow`: petlja ponavljanja i ocjenjivanja

Za nepoznatu temu odgovor je `400` s popisom podržanih tema. Prije izrade kartica, skupnog pisanja ili ponavljanja dohvatite odgovarajući vodič, a nakon odbijene naredbe ponovno pročitajte `sql_dialect`.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## Ponavljanje

Rute za ponavljanje omogućuju agentu da ispituje učenika karticu po karticu i svaku ocjenu spremi u FSRS raspored kartice. Primaju iste JSON argumente kao MCP alati za ponavljanje:

- `POST /v1/agent/reviews/next` vraća `card` s `cardId` i `frontText` ili `card: null` kad ništa nije na redu. Neobavezni `tags` (bilo koja od oznaka) ili `deckId` sužava red, ali nikad oba zajedno; zahtjev bez tijela je valjan.
- `POST /v1/agent/reviews/reveal` zahtijeva `cardId` i vraća `backText` te kartice.
- `POST /v1/agent/reviews/submit` zahtijeva `cardId`, UUID `reviewId` koji generira klijent, `rating` s vrijednošću `Again`, `Hard`, `Good` ili `Easy` te učenikov IANA `reviewedTimeZone`. Poslužitelj bilježi vrijeme ponavljanja i vraća novi raspored kartice, uključujući `dueAt`, `state`, `reps` i `lapses`.

Sve tri rute prihvaćaju neobavezni `workspaceId`. Spremite `reviewId` prije slanja, a slanje čiji ishod nije siguran ponovite s identičnim zahtjevom; time se nikad ne bilježi drugo ponavljanje. Rute za ponavljanje mogu vratiti i ove odgovore:

- `409 REVIEW_EVENT_CONFLICT`: ponavljanje je već zabilježeno, a `error.details.reviewSchedule` sadrži trenutačni raspored kartice.
- `409 REVIEW_ID_CARD_MISMATCH`: `reviewId` već označava ponavljanje druge kartice, pa ništa nije spremljeno; pošaljite ponovno s novim `reviewId`.
- `409 REVIEW_STALE`: spremljeno vrijeme ponavljanja kartice jednako je trenutačnom vremenu poslužitelja ili je nakon njega; ponovite neku drugu karticu.
- `400 REVIEW_INPUT_INVALID`: argument nedostaje, nije valjan ili nije podržan, uključujući `tags` u kombinaciji s `deckId` ili oznaku koju radni prostor ne koristi.

Primjer slanja:

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

## API-ji za ljude i sinkronizaciju

Nibomo uključuje i zasebne API-je za klijente kojima se služe ljudi i za sinkronizaciju koja prvenstveno radi offline, ali oni nisu glavni ugovor za vanjske agente:

- tokovi u pregledniku koriste kolačiće na zajedničkoj domeni uz CSRF zaštitu
- klijenti koji prvenstveno rade offline koriste implementirane rute za sinkronizaciju `/v1/workspaces/{workspaceId}/sync/push` i `/v1/workspaces/{workspaceId}/sync/pull`
- rute za sinkronizaciju odvojene su od sučelja za vanjske agente
