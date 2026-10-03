---
title: Architettura
description: Panoramica del sistema, domini pubblici, client supportati e flusso dei dati offline-first attuale.
---

## Panoramica del sistema

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Principi

1. Domini pubblici separati per `app`, `api` e `auth`
2. Postgres è la fonte di verità
3. Il client iOS è offline-first, con SQLite locale e sincronizzazione
4. La web app, l'app iOS e la superficie per gli agenti esterni condividono lo stesso modello di spazio di lavoro
5. Gli agenti esterni partono da `GET https://api.nibomo.com/v1/`

## Client supportati

- Web app su `app.nibomo.com`
- App iOS nel repository principale, con archiviazione SQLite locale
- App Android su Google Play
- Client di agenti esterni tramite discovery, inizializzazione con OTP e `Authorization: ApiKey`

## Modello dei dati

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## Flusso dei dati

### Web

1. Il browser accede tramite `auth.<domain>`.
2. La web app carica i dati dello spazio di lavoro da `api.<domain>`.
3. Le richieste alla chat con l'AI passano da `/chat/local-turn`.
4. L'invio di un ripasso aggiorna lo stato dello scheduler al momento della scrittura.

### iOS

1. L'app iOS scrive prima in locale su SQLite.
2. Le modifiche locali vengono accodate in una outbox.
3. La sincronizzazione carica le modifiche tramite `/v1/workspaces/{workspaceId}/sync/push`.
4. La sincronizzazione scarica gli aggiornamenti remoti tramite `/v1/workspaces/{workspaceId}/sync/pull`.
5. Il database locale applica le modifiche e fa avanzare il cursore di sincronizzazione.

### Agenti esterni

1. Gli agenti partono da `GET /v1/`.
2. L'inizializzazione con OTP avviene su `auth.<domain>`.
3. L'agente riceve una chiave API a lunga durata.
4. L'agente carica `/v1/agent/me`, elenca gli spazi di lavoro, ne seleziona uno se necessario e poi usa `/v1/agent/sql/query` e `/v1/agent/sql/execute`.

## Pianificazione

Nibomo usa FSRS come scheduler dei ripassi.

Note di implementazione:

- backend e iOS mantengono implementazioni FSRS speculari
- la web app rispecchia il contratto dei dati di pianificazione, ma non include una terza copia dello scheduler
- le impostazioni dello scheduler a livello di spazio di lavoro includono ritenzione desiderata, passi di apprendimento, passi di riapprendimento, intervallo massimo e fuzz
- il timestamp reale del ripasso proviene da `reviewedAtClient`

Per il contratto dettagliato, consulta la [logica di pianificazione FSRS nel repository principale](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

## Autenticazione

- OTP via email tramite Cognito
- Cookie di sessione del browser su dominio condiviso per la web app ospitata
- Inizializzazione con OTP per gli agenti su `auth.<domain>`, che restituisce una ApiKey a lunga durata
- `AUTH_MODE=none` per lo sviluppo locale
- `AUTH_MODE=cognito` per un'autenticazione simile a quella di produzione

## Struttura del deploy

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + backend Lambda
- `auth.<domain>` -> API Gateway + servizio di autenticazione Lambda
- Postgres su AWS RDS

Il dominio apex può restare su un sito di marketing separato. Se è libero durante l'inizializzazione, l'infrastruttura può reindirizzarlo temporaneamente a `app.<domain>`.
