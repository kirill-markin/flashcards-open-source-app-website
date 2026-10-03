---
title: Arhitektura
description: Pregled sistema, javne domene, podprti odjemalci in trenutni tok podatkov, zasnovan za delo brez povezave.
---

## Pregled sistema

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Načela

1. Ločene javne domene za `app`, `api` in `auth`
2. Postgres je vir resnice
3. Odjemalec za iOS je zasnovan za delo brez povezave, z lokalnim SQLite in sinhronizacijo
4. Spletna aplikacija, aplikacija za iOS in vmesnik za zunanje agente si delijo isti model delovnega prostora
5. Zunanji agenti začnejo pri `GET https://api.nibomo.com/v1/`

## Podprti odjemalci

- Spletna aplikacija na `app.nibomo.com`
- Aplikacija za iOS v glavnem repozitoriju z lokalno shrambo SQLite
- Aplikacija za Android v Google Play
- Zunanji odjemalci agentov prek odkrivanja, začetne nastavitve z enkratno kodo in `Authorization: ApiKey`

## Podatkovni model

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## Tok podatkov

### Splet

1. Brskalnik se prijavi prek `auth.<domain>`.
2. Spletna aplikacija naloži podatke delovnega prostora z `api.<domain>`.
3. Zahteve za klepet z AI potekajo prek `/chat/local-turn`.
4. Oddane ponovitve ob zapisu posodobijo stanje razporejevalnika.

### iOS

1. Aplikacija za iOS najprej zapisuje lokalno v SQLite.
2. Lokalne spremembe se zbirajo v čakalni vrsti za pošiljanje.
3. Sinhronizacija pošlje spremembe na strežnik prek `/v1/workspaces/{workspaceId}/sync/push`.
4. Sinhronizacija prenese oddaljene posodobitve prek `/v1/workspaces/{workspaceId}/sync/pull`.
5. Lokalna zbirka podatkov uveljavi spremembe in premakne kazalec sinhronizacije naprej.

### Zunanji agenti

1. Agenti začnejo z `GET /v1/`.
2. Začetna nastavitev z enkratno kodo poteka na `auth.<domain>`.
3. Agent prejme dolgotrajni ključ API.
4. Agent naloži `/v1/agent/me`, pridobi seznam delovnih prostorov, po potrebi izbere enega in nato uporablja `/v1/agent/sql/query` in `/v1/agent/sql/execute`.

## Razporejanje

Nibomo za razporejanje ponavljanja uporablja FSRS.

Opombe o izvedbi:

- zaledni sistem in iOS imata zrcalni izvedbi FSRS
- spletna aplikacija zrcali podatkovno pogodbo razporejanja, vendar ne vsebuje tretje kopije razporejevalnika
- nastavitve razporejevalnika na ravni delovnega prostora vključujejo želeno stopnjo pomnjenja, korake učenja, korake ponovnega učenja, najdaljši interval in naključni odmik intervalov
- dejanski čas ponovitve se vzame iz `reviewedAtClient`

Za podroben opis pogodbe si oglejte [logiko razporejanja FSRS v glavnem repozitoriju](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

## Preverjanje pristnosti

- Enkratna koda po e-pošti prek storitve Cognito
- Sejni piškotki brskalnika v skupni domeni za gostovano spletno aplikacijo
- Začetna nastavitev agenta z enkratno kodo na `auth.<domain>`, ki vrne dolgotrajni ApiKey
- `AUTH_MODE=none` za lokalni razvoj
- `AUTH_MODE=cognito` za preverjanje pristnosti, podobno produkcijskemu

## Oblika namestitve

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + zaledni sistem v Lambdi
- `auth.<domain>` -> API Gateway + storitev za preverjanje pristnosti v Lambdi
- Postgres v AWS RDS

Korenska domena lahko ostane na ločenem marketinškem spletnem mestu. Če je med začetno nastavitvijo prosta, jo lahko infrastruktura začasno preusmeri na `app.<domain>`.
