---
title: Referință API
description: "API pentru agenți externi: descoperire, inițializare OTP, configurarea spațiului de lucru și interfețele SQL publicate pentru citire și scriere."
---

## Prezentare generală

Această pagină documentează contractul actual al Nibomo pentru agenții AI externi.

Dacă clientul tău acceptă MCP, [conectorul MCP](/docs/mcp-connector/) este cea mai simplă cale de conectare și se bazează pe aceeași interfață de date. Această pagină documentează contractul HTTP pentru descoperire, SQL, ghiduri și recapitulare folosit de agenții CLI.

Pornește de la punctul de intrare canonic pentru descoperire:

```text
GET https://api.nibomo.com/v1/
```

Același răspuns de descoperire este disponibil și la `GET /v1/agent`, dar `/v1/` este punctul de intrare public principal.

Răspunsul de descoperire îi arată agentului cum să:

- pornească autentificarea cu cod OTP primit pe e-mail
- schimbe codul OTP pe o cheie API cu durată lungă de valabilitate
- încarce contextul contului
- creeze sau selecteze un spațiu de lucru
- continue prin interfața SQL publicată
- obțină ghiduri de referință și recapituleze fișele una câte una

## Descoperirea la rulare și codul sursă

OpenAPI nu este disponibil. Cele patru URL-uri de specificație de mai jos, folosite anterior, returnează acum aceeași notificare JSON de descoperire cu `"openapiAvailable": false` în loc de o schemă:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

Folosește `GET https://api.nibomo.com/v1/` pentru descoperirea actuală la rulare. Urmează `docs.discoveryUrl` din răspuns pentru rutele disponibile la rulare și `docs.source.agentRoutesUrl` pentru detaliile de implementare.

## Inițializarea autentificării

Inițializarea OTP rulează pe serviciul de autentificare:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

Fluxul este:

1. Apelează `GET /v1/`.
2. Trimite adresa de e-mail a utilizatorului către `send-code`.
3. Citește `otpSessionToken` din răspuns.
4. Cere-i utilizatorului cel mai recent cod de 8 cifre primit pe e-mail.
5. Apelează `verify-code` cu `code`, `otpSessionToken` și `label`.
6. Salvează cheia API returnată în afara memoriei chatului.

Variabila de mediu recomandată:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Cererile autentificate folosesc:

```text
Authorization: ApiKey <key>
```

Exemplu de secvență de inițializare:

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

## Interfața pentru agenți după autentificare

După verificare, interfața actuală pentru agenți este:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (doar citire)
- `POST /v1/agent/sql/execute` (scriere)
- `GET /v1/agent/guide/{topic}` (doar citire)
- `POST /v1/agent/reviews/next` (doar citire)
- `POST /v1/agent/reviews/reveal` (doar citire)
- `POST /v1/agent/reviews/submit` (scriere)

O inițializare tipică arată așa:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. Dacă e nevoie, `POST /v1/agent/workspaces` cu `{"name":"Personal"}`
4. Dacă e nevoie, `POST /v1/agent/workspaces/{workspaceId}/select`
5. Folosește `POST /v1/agent/sql/query` pentru citiri și `POST /v1/agent/sql/execute` pentru scrieri

Selecția spațiului de lucru este explicită pentru fiecare conexiune cu cheie API. Agenții trebuie să urmeze textul `instructions` returnat și `docs.discoveryUrl` pentru rutele disponibile la rulare, plus `docs.source.agentRoutesUrl` pentru detaliile de implementare, în loc să ghicească pasul următor.

Rutele SQL și de recapitulare acceptă și un `workspaceId` opțional în corpul JSON. Acesta țintește spațiul de lucru respectiv pentru un singur apel, fără să schimbe selecția; omite-l ca să folosești spațiul de lucru selectat. Fără o selecție și fără `workspaceId`, rutele răspund cu `409 WORKSPACE_SELECTION_REQUIRED`.

## Interfața SQL

`POST /v1/agent/sql/query` este interfața strict de citire (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`), iar `POST /v1/agent/sql/execute` este interfața de scriere (`INSERT`, `UPDATE`, `DELETE`); un singur apel trebuie să conțină doar citiri sau doar scrieri.

Este limitată intenționat și nu este PostgreSQL complet. Această documentație acoperă doar dialectul acceptat, nu este o referință de compatibilitate cu PostgreSQL.

Nicio operație de citire nu repară date, nu recalculează programarea și nu schimbă starea fișelor. Folosește `POST /v1/agent/sql/execute` pentru orice scriere de fișe și pachete. SQL nu poate modifica nici `review_events`, nici starea de programare FSRS; înregistrează recapitulările prin `POST /v1/agent/reviews/submit`.

Familiile de instrucțiuni acceptate în prezent:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

Resursele logice publicate includ în prezent:

- `workspace`
- `cards`
- `decks`
- `review_events`

Note:

- `LIMIT` are valoarea implicită `100` și maximul `100`
- folosește `ORDER BY` când ai nevoie de paginare stabilă
- folosește `SHOW TABLES` sau `DESCRIBE cards` pentru descoperirea schemei
- fiecare apel SQL este limitat la un singur spațiu de lucru: `workspaceId` din corpul cererii sau spațiul de lucru selectat

Exemplu de cerere:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Exemplu de interogare a fișelor:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Exemplu de modificare:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

Este disponibil și un server MCP la distanță la `https://mcp.nibomo.com/mcp`, care folosește OAuth 2.1 (Dynamic Client Registration + PKCE). Acesta expune aceeași separare SQL prin `sql_query` (strict de citire) și `sql_execute` (scriere), plus `list_workspaces`, `get_guide` și instrumentele de recapitulare `next_review_card`, `reveal_answer` și `submit_review`; consultă [conectorul MCP](/docs/mcp-connector/).

### Siguranță și domeniu de acces

Interfața SQL este un dialect restrâns, impus de parser, nu PostgreSQL brut. Măsurile de protecție sunt:

- **Listă închisă de instrucțiuni permise**: doar `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` și `SELECT` pentru citiri și `INSERT`, `UPDATE` și `DELETE` pentru scrieri. Orice altceva este respins la analiza sintactică.
- **Resurse limitate**: instrucțiunile pot accesa doar resursele `workspace`, `cards`, `decks` și `review_events`.
- **Limitare la nivel de spațiu de lucru**: fiecare instrucțiune este limitată la un singur spațiu de lucru la care ai acces, fie `workspaceId` din corpul cererii, fie spațiul de lucru selectat, fără acces la datele altor tenanți.
- **Corpuri de cerere stricte**: rutele SQL și de recapitulare resping orice câmp necunoscut din corpul cererii, așa că un `workspaceId` scris greșit eșuează în loc să ruleze pe spațiul de lucru selectat.
- **Limite**: cel mult `100` de rânduri per instrucțiune, cel mult `50` de instrucțiuni per lot și o limită a rezultatului de aproximativ `12k` tokeni. Loturile de modificări se aplică atomic.
- **Separare citire/scriere**: `sql_query` și `list_workspaces` sunt strict de citire (`readOnlyHint`) și nu repară niciodată date, nu recalculează programarea și nu schimbă starea fișelor. `sql_execute` este singurul instrument SQL de scriere și efectuează scrieri (`destructiveHint`); un singur apel trebuie să conțină doar citiri sau doar scrieri. SQL nu poate modifica nici `review_events`, nici starea de programare FSRS; doar `POST /v1/agent/reviews/submit` (în MCP, `submit_review`) înregistrează o recapitulare.

## Ghiduri

`GET /v1/agent/guide/{topic}` returnează un ghid de referință în `data.guide`, același conținut pe care îl oferă instrumentul MCP `get_guide`. Subiecte:

- `sql_dialect`: gramatica SQL completă, limitele și exemple
- `card_authoring`: contractul fișelor, etichete, verificarea duplicatelor și formatare
- `bulk_authoring`: împărțirea și verificarea unei sarcini mari de scriere
- `review_flow`: bucla de recapitulare și evaluare

Un subiect necunoscut primește răspunsul `400`, cu lista subiectelor acceptate. Obține ghidul potrivit înainte să creezi fișe, să scrii în volum mare sau să rulezi o recapitulare, și recitește `sql_dialect` după o instrucțiune respinsă.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## Recapitulări

Rutele de recapitulare îi permit unui agent să-l testeze pe cursant fișă cu fișă și să salveze fiecare evaluare în programarea FSRS a fișei. Ele primesc aceleași argumente JSON ca instrumentele MCP de recapitulare:

- `POST /v1/agent/reviews/next` returnează `card` cu `cardId` și `frontText`, sau `card: null` când nu este nimic scadent. Coada poate fi restrânsă opțional fie prin `tags` (oricare dintre etichete), fie prin `deckId`, niciodată prin ambele; o cerere fără corp este validă.
- `POST /v1/agent/reviews/reveal` necesită `cardId` și returnează `backText` al acelei fișe.
- `POST /v1/agent/reviews/submit` necesită `cardId`, un UUID `reviewId` generat de client, un `rating` cu valoarea `Again`, `Hard`, `Good` sau `Easy` și fusul orar IANA al cursantului în `reviewedTimeZone`. Serverul marchează momentul recapitulării și returnează noua programare a fișei, inclusiv `dueAt`, `state`, `reps` și `lapses`.

Toate cele trei rute acceptă `workspaceId` opțional. Salvează `reviewId` înainte de trimitere și reîncearcă o trimitere cu rezultat incert folosind exact aceeași cerere; aceasta nu înregistrează niciodată o a doua recapitulare. Rutele de recapitulare pot răspunde și cu:

- `409 REVIEW_EVENT_CONFLICT`: recapitularea a fost deja înregistrată, iar `error.details.reviewSchedule` conține programarea actuală a fișei.
- `409 REVIEW_ID_CARD_MISMATCH`: `reviewId` identifică deja recapitularea altei fișe, așa că nu s-a salvat nimic; trimite din nou cu un `reviewId` nou.
- `409 REVIEW_STALE`: momentul recapitulării salvat pentru fișă este egal cu ora curentă a serverului sau ulterior acesteia; recapitulează altă fișă.
- `400 REVIEW_INPUT_INVALID`: un argument lipsește, este invalid sau nu este acceptat, inclusiv `tags` combinat cu `deckId` sau o etichetă pe care spațiul de lucru nu o folosește.

Exemplu de trimitere:

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

## API-uri pentru utilizatori umani și sincronizare

Nibomo include și API-uri separate pentru clienții folosiți de oameni și pentru sincronizarea offline-first, dar acestea nu sunt contractul principal pentru agenții externi:

- fluxurile din browser folosesc cookie-uri pe domeniul comun plus protecție CSRF
- clienții offline-first folosesc rutele de sincronizare implementate în `/v1/workspaces/{workspaceId}/sync/push` și `/v1/workspaces/{workspaceId}/sync/pull`
- rutele de sincronizare sunt separate de interfața pentru agenți externi
