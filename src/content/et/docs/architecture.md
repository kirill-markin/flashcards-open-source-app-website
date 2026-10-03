---
title: Arhitektuur
description: Süsteemi ülevaade, avalikud domeenid, toetatud kliendid ja praegune võrguühenduseta kasutamisest lähtuv andmevoog.
---

## Süsteemi ülevaade

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Põhimõtted

1. Eraldi avalikud domeenid: `app`, `api` ja `auth`
2. Postgres on põhiandmeallikas
3. iOS-i klient töötab eelkõige võrguühenduseta: kohalik SQLite pluss sünkroonimine
4. Veebirakendus, iOS-i rakendus ja väliste agentide liides kasutavad sama tööruumimudelit
5. Välised agendid alustavad päringust `GET https://api.nibomo.com/v1/`

## Toetatud kliendid

- Veebirakendus aadressil `app.nibomo.com`
- iOS-i rakendus peamises koodihoidlas, andmed salvestatakse kohalikku SQLite'i
- Androidi rakendus Google Plays
- Välised agendikliendid avastuse, ühekordse koodiga algseadistuse ja `Authorization: ApiKey` kaudu

## Andmemudel

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## Andmevoog

### Veeb

1. Brauser logib sisse aadressi `auth.<domain>` kaudu.
2. Veebirakendus laadib tööruumi andmed aadressilt `api.<domain>`.
3. AI-vestluse päringud käivad läbi lõpp-punkti `/chat/local-turn`.
4. Kordamise tulemuse saatmisel uuendatakse ajastaja olekut kohe kirjutamise käigus.

### iOS

1. iOS-i rakendus kirjutab andmed kõigepealt kohalikku SQLite'i.
2. Kohalikud muudatused pannakse väljaminevate muudatuste järjekorda.
3. Sünkroonimine laadib muudatused üles lõpp-punkti `/v1/workspaces/{workspaceId}/sync/push` kaudu.
4. Sünkroonimine laadib serveri uuendused alla lõpp-punkti `/v1/workspaces/{workspaceId}/sync/pull` kaudu.
5. Kohalik andmebaas rakendab muudatused ja nihutab sünkroonimiskursorit edasi.

### Välised agendid

1. Agendid alustavad päringust `GET /v1/`.
2. Ühekordse koodiga algseadistus toimub aadressil `auth.<domain>`.
3. Agent saab pikaajalise API-võtme.
4. Agent laadib `/v1/agent/me`, küsib tööruumide loendi, valib vajaduse korral ühe neist ja kasutab seejärel `/v1/agent/sql/query` ja `/v1/agent/sql/execute`.

## Ajastamine

Nibomo kasutab kordamiste ajastajana FSRS-i.

Teostuse märkused:

- taustsüsteemil ja iOS-il on teineteist peegeldavad FSRS-i teostused
- veebirakendus järgib sama ajastamisandmete lepingut, kuid ei sisalda ajastajast kolmandat koopiat
- tööruumi tasemel ajastaja sätted hõlmavad soovitud meeldejäävust, õppesamme, ümberõppesamme, maksimaalset intervalli ja intervallide juhuslikku hajutamist
- tegelik kordamise ajatempel tuleb väljalt `reviewedAtClient`

Lepingu üksikasjaliku kirjelduse leiad [peamise koodihoidla FSRS-i ajastamisloogika dokumendist](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

## Autentimine

- E-posti ühekordne kood Cognito kaudu
- Ühise domeeni brauseri seansiküpsised majutatud veebirakenduse jaoks
- Agendi ühekordse koodiga algseadistus aadressil `auth.<domain>`, mille tulemusena väljastatakse pikaajaline ApiKey
- `AUTH_MODE=none` kohalikuks arenduseks
- `AUTH_MODE=cognito` tootmiskeskkonnale sarnaseks autentimiseks

## Juurutuse ülesehitus

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda taustsüsteem
- `auth.<domain>` -> API Gateway + Lambda autentimisteenus
- Postgres teenuses AWS RDS

Juurdomeen võib jääda eraldi turundussaidile. Kui see on algseadistuse ajal vaba, saab taristu selle ajutiselt suunata aadressile `app.<domain>`.
