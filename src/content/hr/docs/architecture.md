---
title: Arhitektura
description: Pregled sustava, javne domene, podržani klijenti i trenutačni tok podataka koji prvenstveno radi offline.
---

## Pregled sustava

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Načela

1. Zasebne javne domene za `app`, `api` i `auth`
2. Postgres je izvor istine
3. iOS klijent prvenstveno radi offline, s lokalnim SQLite-om i sinkronizacijom
4. Web aplikacija, iOS aplikacija i sučelje za vanjske agente dijele isti model radnog prostora
5. Vanjski agenti započinju s `GET https://api.nibomo.com/v1/`

## Podržani klijenti

- Web aplikacija na `app.nibomo.com`
- iOS aplikacija u glavnom repozitoriju s lokalnom pohranom u SQLite-u
- Android aplikacija na Google Playu
- Klijenti vanjskih agenata putem otkrivanja, početnog postavljanja OTP-om i `Authorization: ApiKey`

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

## Tok podataka

### Web

1. Preglednik se prijavljuje putem `auth.<domain>`.
2. Web aplikacija učitava podatke radnog prostora s `api.<domain>`.
3. Zahtjevi AI razgovora idu kroz `/chat/local-turn`.
4. Poslana ponavljanja ažuriraju stanje raspoređivača već pri zapisu.

### iOS

1. iOS aplikacija najprije zapisuje lokalno u SQLite.
2. Lokalne promjene stavljaju se u izlazni red.
3. Sinkronizacija šalje promjene putem `/v1/workspaces/{workspaceId}/sync/push`.
4. Sinkronizacija preuzima udaljena ažuriranja putem `/v1/workspaces/{workspaceId}/sync/pull`.
5. Lokalna baza podataka primjenjuje promjene i pomiče kursor sinkronizacije.

### Vanjski agenti

1. Agenti započinju s `GET /v1/`.
2. Početno postavljanje OTP-om odvija se na `auth.<domain>`.
3. Agent dobiva dugotrajni API ključ.
4. Agent učitava `/v1/agent/me`, dohvaća popis radnih prostora, po potrebi odabire jedan, a zatim koristi `/v1/agent/sql/query` i `/v1/agent/sql/execute`.

## Raspoređivanje

Nibomo koristi FSRS kao raspoređivač ponavljanja.

Napomene o implementaciji:

- backend i iOS imaju međusobno usklađene implementacije FSRS-a
- web aplikacija slijedi isti podatkovni ugovor za raspoređivanje, ali ne sadrži treću kopiju raspoređivača
- postavke raspoređivača na razini radnog prostora uključuju željeno zadržavanje znanja, korake učenja, korake ponovnog učenja, najveći interval i nasumično odstupanje
- stvarno vrijeme ponavljanja dolazi iz `reviewedAtClient`

Za detaljan ugovor pogledajte [FSRS logiku raspoređivanja u glavnom repozitoriju](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

## Autentifikacija

- OTP iz e-pošte putem Cognita
- Kolačići sesije preglednika na zajedničkoj domeni za hostiranu web aplikaciju
- Početno postavljanje agenta OTP-om na `auth.<domain>`, uz dugotrajni ApiKey kao rezultat
- `AUTH_MODE=none` za lokalni razvoj
- `AUTH_MODE=cognito` za autentifikaciju kao u produkciji

## Struktura implementacije

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda backend
- `auth.<domain>` -> API Gateway + Lambda usluga autentifikacije
- Postgres u AWS RDS-u

Apex domena može ostati na zasebnoj marketinškoj stranici. Ako je slobodna tijekom početnog postavljanja, infrastruktura je može privremeno preusmjeriti na `app.<domain>`.
