---
title: Connettore MCP
description: "Collega Nibomo tramite la directory di Claude oppure configura il suo server MCP remoto in Claude Code e in altri client, con OAuth e otto strumenti per flashcard e ripassi."
---

## Collegati tramite la directory di Claude

Apri [Nibomo nella directory di Claude](https://claude.ai/directory/nibomo), collegalo, accedi al tuo account Nibomo e autorizza l'accesso. Nibomo è elencato come connettore Community.

Per Claude Code, usa lo stesso account dell'abbonamento Claude e controlla `/mcp` dopo il collegamento. Gli accessi con chiave API o tramite provider di terze parti non caricano automaticamente i tuoi connettori di claude.ai.

Puoi anche configurare Claude Code direttamente. Esegui il comando qui sotto, poi apri `/mcp` in Claude Code e completa l'autorizzazione nel browser:

```bash
claude mcp add --transport http nibomo https://mcp.nibomo.com/mcp
```

[Documentazione MCP di Claude Code](https://code.claude.com/docs/en/mcp#use-mcp-servers-from-claudeai).

## Panoramica

Nibomo mette a disposizione un server MCP (Model Context Protocol) remoto, così i client MCP e
gli agenti AI possono leggere le tue carte in scadenza, ripassarle con te una domanda alla volta
e creare o modificare carte e mazzi per conto tuo.

Gli agenti possono collegarsi in due modi: tramite questo server MCP (ideale per client MCP come
Claude o Cursor), oppure tramite l'[URL di discovery dell'Agents API](/docs/api/) per gli agenti
CLI. Entrambi raggiungono la stessa superficie di dati per utente; questa pagina tratta il server MCP.

Collegati a:

```text
https://mcp.nibomo.com/mcp
```

Il trasporto è Streamable HTTP. Il server espone otto strumenti per individuare gli spazi di lavoro, leggere e scrivere carte e mazzi, consultare le guide di riferimento, ripassare e controllare l'utilizzo dell'account.

## Come aggiungerlo al tuo client

La maggior parte dei client aggiunge un server MCP remoto come connettore personalizzato:

1. Apri le impostazioni dei connettori o dei server MCP del tuo client.
2. Aggiungi un connettore personalizzato e incolla l'URL del server `https://mcp.nibomo.com/mcp`.
3. Nei client interattivi, autorizza l'accesso nel browser quando richiesto. Il server
   usa OAuth 2.1 con Dynamic Client Registration, quindi non c'è alcun client secret
   da incollare né alcuna app da registrare prima.
4. Per l'uso headless o da CLI, imposta un header `Authorization: Bearer fca_…` con la tua
   chiave API per agenti invece del flusso nel browser.

Dopo l'autorizzazione, chiama una volta `list_workspaces` per scegliere uno spazio di lavoro, poi usa
`sql_query` per le letture e `sql_execute` per le scritture su carte e mazzi. Per ripassare, chiama
`next_review_card`, poi `reveal_answer`, poi `submit_review`.

## Strumenti

Il server espone otto strumenti. Letture e scritture sono separate di proposito, così un singolo
strumento non mescola mai operazioni sicure e distruttive.

- `get_usage_limits` — piano dell'account, limiti e utilizzo mensile attuale dell'AI, rigorosamente in sola lettura; non legge né modifica le carte.
- `sql_query` — accesso rigorosamente in sola lettura alle tue carte e ai tuoi mazzi (`SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` — accesso in scrittura alle tue carte e ai tuoi mazzi (`INSERT`, `UPDATE`,
  `DELETE`) come batch atomico.
- `list_workspaces` — elenco rigorosamente in sola lettura degli spazi di lavoro a cui hai accesso,
  ciascuno con il suo
  `workspaceId`, il nome, il numero di carte attive, l'ultima attività e l'indicazione se è lo spazio
  di lavoro predefinito che hai selezionato al momento. Usa un `workspaceId` restituito per l'argomento facoltativo
  `workspaceId` degli strumenti SQL e di ripasso.
- `get_guide` — guida di riferimento rigorosamente in sola lettura su un argomento: `sql_dialect`,
  `card_authoring`, `bulk_authoring` o `review_flow`. Non legge alcun dato dello spazio di lavoro.
- `next_review_card` — rigorosamente in sola lettura: restituisce la prossima carta da ripassare, solo
  il fronte, nello stesso ordine di coda delle app. I parametri facoltativi `tags` o `deckId` restringono
  la coda.
- `reveal_answer` — rigorosamente in sola lettura: restituisce il retro di una carta dopo che
  chi studia ha provato a rispondere al fronte.
- `submit_review` — registra una valutazione `Again`, `Hard`, `Good` o `Easy` e
  fa avanzare la pianificazione FSRS della carta.

La superficie SQL è un dialetto volutamente limitato e non è PostgreSQL completo.
Questa documentazione copre solo il dialetto supportato e non è un riferimento di compatibilità
con PostgreSQL. Le istruzioni possono riferirsi solo alle risorse `workspace`, `cards`, `decks` e
`review_events`, ogni istruzione è limitata al tuo spazio di lavoro, e
letture e scritture sono limitate a `100` righe per istruzione.

## Ripassi

Gli strumenti di ripasso permettono a un agente di interrogare chi studia una carta alla volta e di salvare ogni
valutazione nella pianificazione FSRS della carta:

1. `next_review_card` restituisce un `cardId` e un `frontText`, oppure `card: null` quando
   non c'è nulla in scadenza.
2. Dopo la risposta di chi studia, `reveal_answer` restituisce il `backText` di quella carta.
3. `submit_review` riceve il `cardId`, un UUID `reviewId` generato dal client, un
   `rating` e il `reviewedTimeZone` IANA di chi studia. Il server registra
   l'orario del ripasso e restituisce la nuova pianificazione della carta.

Se l'esito di un invio è incerto, ripetilo con lo stesso `reviewId`: non registra mai un secondo
ripasso. Un invio può anche restituire:

- `409 REVIEW_EVENT_CONFLICT` — il ripasso è già stato registrato e i dettagli dell'errore
  contengono la pianificazione attuale della carta.
- `409 REVIEW_ID_CARD_MISMATCH` — il `reviewId` identifica già un ripasso di un'altra
  carta, quindi non è stato salvato nulla; invia di nuovo con un nuovo `reviewId`.
- `409 REVIEW_STALE` — l'orario di ripasso memorizzato per la carta è uguale o successivo all'orario
  attuale del server; ripassa un'altra carta.

I ripassi vengono registrati solo tramite `submit_review`: SQL non può scrivere
`review_events` né lo stato di pianificazione FSRS. Chiama `get_guide` con l'argomento
`review_flow` per le regole complete di ripasso e valutazione.

## Contratto delle carte

Ogni carta segue un unico contratto, su cui si basano gli strumenti:

- `front_text` contiene solo una domanda o uno spunto per il ripasso e non contiene mai la risposta.
- `back_text` contiene la risposta, eventualmente con un esempio concreto.

Gli agenti che generano carte tramite `sql_execute` seguono questo contratto, quindi le
carte che creano si possono ripassare subito con la ripetizione dilazionata.

## Autenticazione

Due percorsi di autorizzazione raggiungono la stessa superficie di dati per utente.

### OAuth 2.1 (client interattivi tramite connettore)

Il server implementa il flusso authorization code con PKCE e Dynamic Client
Registration. Aggiungi l'URL MCP come connettore personalizzato e autorizza l'accesso nel browser;
nessun client secret viene condiviso in anticipo. La discovery è standard:

- Metadati della risorsa protetta:
  `https://mcp.nibomo.com/.well-known/oauth-protected-resource`
- Metadati del server di autorizzazione:
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### Chiave API (headless e CLI)

Ottieni una chiave API per agenti `fca_` a lunga durata tramite il flusso di accesso con OTP via email
documentato nel [riferimento API](/docs/api/), poi inviala come Bearer token:

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

È la stessa chiave accettata dalla superficie REST per gli agenti e non richiede né il browser né
un passaggio OAuth.

La descrizione canonica di entrambi i percorsi, in formato leggibile dalle macchine, è il payload di discovery
su `https://api.nibomo.com/v1/` (replicato su `/v1/agent`).

## Sicurezza e ambito

Gli strumenti SQL si possono approvare in sicurezza perché la superficie è un dialetto circoscritto
e applicato dal parser, non un accesso arbitrario al database:

- **Elenco chiuso di istruzioni consentite**: `sql_query` accetta solo `SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS` e `SELECT`; `sql_execute` accetta solo `INSERT`,
  `UPDATE` e `DELETE`. Qualsiasi altra istruzione viene rifiutata in fase di parsing.
- **Risorse limitate**: le istruzioni possono toccare solo `workspace`, `cards`, `decks`
  e `review_events`.
- **Ambito per spazio di lavoro**: ogni istruzione SQL e ogni ripasso sono limitati a un solo
  spazio di lavoro a cui hai accesso, cioè il `workspaceId` che passi oppure il tuo predefinito
  selezionato, senza accesso ad altri tenant.
- **Argomenti rigorosi**: ogni strumento rifiuta qualsiasi argomento sconosciuto, quindi un
  `workspaceId` scritto male fa fallire la chiamata invece di eseguirla sul tuo spazio di lavoro predefinito.
- **Limiti**: fino a `100` righe per istruzione, fino a `50` istruzioni per batch e
  un limite sul risultato di circa `12k` token. I batch di modifica vengono applicati in modo atomico.
- **Separazione tra lettura e scrittura**: `get_usage_limits`, `sql_query`, `list_workspaces`, `get_guide`,
  `next_review_card` e `reveal_answer` sono rigorosamente di sola lettura (`readOnlyHint`)
  e non riparano mai dati, non ricalcolano la pianificazione e non cambiano lo stato delle carte.
  `sql_execute` e `submit_review` sono gli unici strumenti di scrittura (`destructiveHint`):
  `sql_execute` scrive carte e mazzi, e `submit_review` registra un ripasso e
  fa avanzare la pianificazione della sua carta.

L'intero stack — app, backend e infrastruttura — è open source e può essere
[installato in self-hosting](/docs/self-hosting/), così puoi usare lo stesso connettore con il tuo
deploy.
