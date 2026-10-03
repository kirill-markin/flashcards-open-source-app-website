---
title: Arhitectură
description: Prezentarea sistemului, domeniile publice, clienții acceptați și fluxul actual de date offline-first.
---

## Prezentarea sistemului

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Principii

1. Domenii publice separate pentru `app`, `api` și `auth`
2. Postgres este sursa de adevăr
3. Clientul iOS este offline-first, cu SQLite local și sincronizare
4. Aplicația web, aplicația iOS și interfața pentru agenți externi folosesc același model de spațiu de lucru
5. Agenții externi pornesc de la `GET https://api.nibomo.com/v1/`

## Clienți acceptați

- Aplicația web pe `app.nibomo.com`
- Aplicația iOS în repository-ul principal, cu stocare SQLite locală
- Aplicația Android pe Google Play
- Clienți de tip agent extern prin descoperire, inițializare OTP și `Authorization: ApiKey`

## Modelul de date

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## Fluxul de date

### Web

1. Browserul se autentifică prin `auth.<domain>`.
2. Aplicația web încarcă datele spațiului de lucru de la `api.<domain>`.
3. Cererile către chatul AI trec prin `/chat/local-turn`.
4. Trimiterea unei recapitulări actualizează starea planificatorului la scriere.

### iOS

1. Aplicația iOS scrie mai întâi local, în SQLite.
2. Modificările locale sunt puse într-o coadă de ieșire (outbox).
3. Sincronizarea încarcă modificările prin `/v1/workspaces/{workspaceId}/sync/push`.
4. Sincronizarea descarcă actualizările de la distanță prin `/v1/workspaces/{workspaceId}/sync/pull`.
5. Baza de date locală aplică modificările și avansează cursorul de sincronizare.

### Agenți externi

1. Agenții pornesc cu `GET /v1/`.
2. Inițializarea OTP rulează pe `auth.<domain>`.
3. Agentul primește o cheie API cu durată lungă de valabilitate.
4. Agentul încarcă `/v1/agent/me`, listează spațiile de lucru, selectează unul dacă e nevoie și apoi folosește `/v1/agent/sql/query` și `/v1/agent/sql/execute`.

## Programarea recapitulărilor

Nibomo folosește FSRS ca planificator al recapitulărilor.

Note de implementare:

- backendul și aplicația iOS păstrează implementări FSRS oglindite
- aplicația web oglindește contractul de date pentru programare, dar nu include o a treia copie a planificatorului
- setările planificatorului la nivel de spațiu de lucru includ retenția dorită, pașii de învățare, pașii de reînvățare, intervalul maxim și variația aleatorie (fuzz)
- momentul real al recapitulării provine din `reviewedAtClient`

Pentru contractul detaliat, consultă [logica de programare FSRS din repository-ul principal](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

## Autentificare

- OTP pe e-mail prin Cognito
- Cookie-uri de sesiune în browser, pe domeniul comun, pentru aplicația web găzduită
- Inițializarea OTP pentru agenți pe `auth.<domain>`, care emite o cheie ApiKey cu durată lungă de valabilitate
- `AUTH_MODE=none` pentru dezvoltarea locală
- `AUTH_MODE=cognito` pentru autentificare similară cu producția

## Structura implementării

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + backend Lambda
- `auth.<domain>` -> API Gateway + serviciu de autentificare Lambda
- Postgres în AWS RDS

Domeniul rădăcină (apex) poate rămâne pe un site de prezentare separat. Dacă este liber în timpul inițializării, infrastructura îl poate redirecționa temporar către `app.<domain>`.
