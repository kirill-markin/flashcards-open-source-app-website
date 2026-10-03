---
title: Riferimento API
description: API per agenti esterni con discovery, inizializzazione con OTP, configurazione dello spazio di lavoro e le superfici SQL pubblicate per lettura e scrittura.
---

## Panoramica

Questa pagina documenta il contratto attuale per gli agenti AI esterni di Nibomo.

Se il tuo client supporta MCP, il [connettore MCP](/docs/mcp-connector/) è il
modo più semplice per collegarti e incapsula questa stessa superficie di dati. Questa pagina documenta il
contratto HTTP di discovery, SQL, guide e ripasso usato dagli agenti CLI.

Parti dal punto di ingresso canonico di discovery:

```text
GET https://api.nibomo.com/v1/
```

Lo stesso payload di discovery è disponibile anche su `GET /v1/agent`, ma il punto di ingresso pubblico principale è `/v1/`.

La risposta di discovery spiega a un agente come:

- avviare l'accesso con OTP via email
- scambiare l'OTP con una chiave API a lunga durata
- caricare il contesto dell'account
- creare o selezionare uno spazio di lavoro
- proseguire attraverso la superficie SQL pubblicata
- recuperare le guide di riferimento e ripassare le carte una alla volta

## Discovery a runtime e codice sorgente

OpenAPI non è disponibile. I quattro URL che in precedenza ospitavano le specifiche, elencati qui sotto, ora restituiscono lo stesso avviso di discovery in JSON con `"openapiAvailable": false` al posto di uno schema:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

Usa `GET https://api.nibomo.com/v1/` per la discovery a runtime aggiornata. Segui il `docs.discoveryUrl` restituito per le route a runtime e `docs.source.agentRoutesUrl` per i dettagli di implementazione.

## Inizializzazione dell'autenticazione

L'inizializzazione con OTP avviene sul servizio di autenticazione:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

Il flusso è il seguente:

1. Chiama `GET /v1/`.
2. Invia l'email dell'utente a `send-code`.
3. Leggi `otpSessionToken` dalla risposta.
4. Chiedi all'utente il codice di 8 cifre più recente ricevuto via email.
5. Chiama `verify-code` con `code`, `otpSessionToken` e `label`.
6. Salva la chiave API restituita fuori dalla memoria della chat.

Variabile d'ambiente consigliata:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Le richieste autenticate usano:

```text
Authorization: ApiKey <key>
```

Esempio di sequenza di inizializzazione:

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

## Superficie per gli agenti dopo l'accesso

Dopo la verifica, la superficie attuale per gli agenti è:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (sola lettura)
- `POST /v1/agent/sql/execute` (scrittura)
- `GET /v1/agent/guide/{topic}` (sola lettura)
- `POST /v1/agent/reviews/next` (sola lettura)
- `POST /v1/agent/reviews/reveal` (sola lettura)
- `POST /v1/agent/reviews/submit` (scrittura)

Un'inizializzazione tipica si presenta così:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. Se necessario, `POST /v1/agent/workspaces` con `{"name":"Personal"}`
4. Se necessario, `POST /v1/agent/workspaces/{workspaceId}/select`
5. Usa `POST /v1/agent/sql/query` per le letture e `POST /v1/agent/sql/execute` per le scritture

La selezione dello spazio di lavoro è esplicita per ogni connessione con chiave API. Invece di indovinare il passo successivo, gli agenti devono seguire il testo `instructions` restituito e `docs.discoveryUrl` per le route a runtime, oltre a `docs.source.agentRoutesUrl` per i dettagli di implementazione.

Le route SQL e di ripasso accettano anche un `workspaceId` facoltativo nel corpo JSON. Con questo campo la singola chiamata agisce su quello spazio di lavoro senza cambiare la selezione; omettilo per usare lo spazio di lavoro selezionato. Senza una selezione e senza un `workspaceId`, le route rispondono con `409 WORKSPACE_SELECTION_REQUIRED`.

## Superficie SQL

`POST /v1/agent/sql/query` è la superficie rigorosamente di sola lettura (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`) e `POST /v1/agent/sql/execute` è la superficie di scrittura (`INSERT`, `UPDATE`, `DELETE`); una singola chiamata deve contenere solo letture o solo scritture.

È volutamente limitata e non è PostgreSQL completo. Questa documentazione copre solo
il dialetto supportato e non è un riferimento di compatibilità con PostgreSQL.

Nessun percorso di lettura ripara dati, ricalcola la pianificazione o cambia lo stato delle carte. Usa
`POST /v1/agent/sql/execute` per ogni scrittura su carte e mazzi. SQL non può scrivere
`review_events` né lo stato di pianificazione FSRS; registra i ripassi tramite
`POST /v1/agent/reviews/submit`.

Famiglie di istruzioni attuali:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

Le risorse logiche pubblicate al momento includono:

- `workspace`
- `cards`
- `decks`
- `review_events`

Note:

- `LIMIT` vale `100` per impostazione predefinita, con un massimo di `100`
- usa `ORDER BY` quando ti serve una paginazione stabile
- usa `SHOW TABLES` o `DESCRIBE cards` per scoprire lo schema
- ogni chiamata SQL è limitata a un solo spazio di lavoro: il `workspaceId` nel corpo oppure lo spazio di lavoro selezionato

Esempio di richiesta:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Esempio di query sulle carte:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Esempio di modifica:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

È disponibile anche un server MCP remoto su `https://mcp.nibomo.com/mcp`, che usa OAuth 2.1 (Dynamic Client Registration + PKCE). Espone la stessa suddivisione SQL tramite `sql_query` (rigorosamente di sola lettura) e `sql_execute` (scrittura), più `list_workspaces`, `get_guide` e gli strumenti di ripasso `next_review_card`, `reveal_answer` e `submit_review`; consulta il [connettore MCP](/docs/mcp-connector/).

### Sicurezza e ambito

La superficie SQL è un dialetto circoscritto e applicato dal parser, non PostgreSQL grezzo. Le protezioni sono:

- **Elenco chiuso di istruzioni consentite**: solo `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` e `SELECT` per le letture, e `INSERT`, `UPDATE` e `DELETE` per le scritture. Qualsiasi altra istruzione viene rifiutata in fase di parsing.
- **Risorse limitate**: le istruzioni possono toccare solo le risorse `workspace`, `cards`, `decks` e `review_events`.
- **Ambito per spazio di lavoro**: ogni istruzione è limitata a un solo spazio di lavoro a cui hai accesso, cioè il `workspaceId` nel corpo della richiesta oppure lo spazio di lavoro selezionato, senza accesso ad altri tenant.
- **Corpi delle richieste rigorosi**: le route SQL e di ripasso rifiutano qualsiasi campo sconosciuto nel corpo, quindi un `workspaceId` scritto male fa fallire la richiesta invece di eseguirla sullo spazio di lavoro selezionato.
- **Limiti**: fino a `100` righe per istruzione, fino a `50` istruzioni per batch e un limite sul risultato di circa `12k` token. I batch di modifica vengono applicati in modo atomico.
- **Separazione tra lettura e scrittura**: `sql_query` e `list_workspaces` sono rigorosamente di sola lettura (`readOnlyHint`) e non riparano mai dati, non ricalcolano la pianificazione e non cambiano lo stato delle carte. `sql_execute` è l'unico strumento SQL di scrittura ed esegue le scritture (`destructiveHint`); una singola chiamata deve contenere solo letture o solo scritture. SQL non può scrivere `review_events` né lo stato di pianificazione FSRS; solo `POST /v1/agent/reviews/submit` (`submit_review` in MCP) registra un ripasso.

## Guide

`GET /v1/agent/guide/{topic}` restituisce una guida di riferimento in `data.guide`, lo stesso contenuto fornito dallo strumento MCP `get_guide`. Argomenti:

- `sql_dialect`: la grammatica SQL completa, i limiti e gli esempi
- `card_authoring`: il contratto delle carte, i tag, i controlli dei duplicati e la formattazione
- `bulk_authoring`: come suddividere e verificare un grande lavoro di scrittura
- `review_flow`: il ciclo di ripasso e valutazione

Per un argomento sconosciuto la risposta è `400`, con l'elenco degli argomenti supportati. Recupera la guida corrispondente prima di creare carte, scrivere in blocco o avviare un ripasso, e rileggi `sql_dialect` dopo un'istruzione rifiutata.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## Ripassi

Le route di ripasso permettono a un agente di interrogare chi studia una carta alla volta e di salvare ogni valutazione nella pianificazione FSRS della carta. Accettano gli stessi argomenti JSON degli strumenti di ripasso MCP:

- `POST /v1/agent/reviews/next` restituisce `card` con `cardId` e `frontText`, oppure `card: null` quando non c'è nulla in scadenza. Il campo facoltativo `tags` (basta che corrisponda uno dei tag) oppure `deckId` restringe la coda, ma non entrambi insieme; una richiesta senza corpo è valida.
- `POST /v1/agent/reviews/reveal` richiede `cardId` e restituisce il `backText` di quella carta.
- `POST /v1/agent/reviews/submit` richiede `cardId`, un UUID `reviewId` generato dal client, un `rating` (`Again`, `Hard`, `Good` o `Easy`) e il `reviewedTimeZone` IANA di chi studia. Il server registra l'orario del ripasso e restituisce la nuova pianificazione della carta, inclusi `dueAt`, `state`, `reps` e `lapses`.

Tutte e tre le route accettano il `workspaceId` facoltativo. Salva il `reviewId` prima dell'invio e, se l'esito di un invio è incerto, ripetilo con una richiesta identica: non registra mai un secondo ripasso. Le route di ripasso possono anche rispondere con:

- `409 REVIEW_EVENT_CONFLICT`: il ripasso è già stato registrato e `error.details.reviewSchedule` contiene la pianificazione attuale della carta.
- `409 REVIEW_ID_CARD_MISMATCH`: il `reviewId` identifica già un ripasso di un'altra carta, quindi non è stato salvato nulla; invia di nuovo con un nuovo `reviewId`.
- `409 REVIEW_STALE`: l'orario di ripasso memorizzato per la carta è uguale o successivo all'orario attuale del server; ripassa un'altra carta.
- `400 REVIEW_INPUT_INVALID`: un argomento manca, non è valido o non è supportato, compresi `tags` combinati con `deckId` o un tag che lo spazio di lavoro non usa.

Esempio di invio:

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

## API per le persone e per la sincronizzazione

Nibomo include anche API separate per i client usati dalle persone e per la sincronizzazione offline-first, ma non sono il contratto principale per gli agenti esterni:

- i flussi nel browser usano cookie su dominio condiviso più la protezione CSRF
- i client offline-first usano le route di sincronizzazione implementate in `/v1/workspaces/{workspaceId}/sync/push` e `/v1/workspaces/{workspaceId}/sync/pull`
- le route di sincronizzazione sono separate dalla superficie per gli agenti esterni
