---
title: Architektūra
description: Sistemos apžvalga, vieši domenai, palaikomi klientai ir dabartinis duomenų srautas, kai pirmenybė teikiama darbui neprisijungus.
---

## Sistemos apžvalga

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Principai

1. `app`, `api` ir `auth` naudoja atskirus viešus domenus
2. Pagrindinis duomenų šaltinis yra Postgres
3. iOS klientas pirmiausia veikia neprisijungus: vietinė SQLite duomenų bazė ir sinchronizavimas
4. Žiniatinklio programėlė, iOS programėlė ir išorinių agentų sąsaja naudoja tą patį darbo sričių modelį
5. Išoriniai agentai pradeda nuo `GET https://api.nibomo.com/v1/`

## Palaikomi klientai

- Žiniatinklio programėlė adresu `app.nibomo.com`
- iOS programėlė pagrindinėje saugykloje su vietine SQLite saugykla
- Android programėlė Google Play parduotuvėje
- Išoriniai agentų klientai per aptikimą, pradinį prisijungimą vienkartiniu kodu ir `Authorization: ApiKey`

## Duomenų modelis

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## Duomenų srautas

### Žiniatinklis

1. Naršyklė prisijungia per `auth.<domain>`.
2. Žiniatinklio programėlė įkelia darbo srities duomenis iš `api.<domain>`.
3. DI pokalbio užklausos keliauja per `/chat/local-turn`.
4. Pateikus kartojimą, planuoklio būsena atnaujinama įrašymo metu.

### iOS

1. iOS programėlė pirmiausia įrašo duomenis į vietinę SQLite.
2. Vietiniai pakeitimai įtraukiami į išsiuntimo eilę.
3. Sinchronizavimas išsiunčia pakeitimus per `/v1/workspaces/{workspaceId}/sync/push`.
4. Sinchronizavimas atsisiunčia nuotolinius atnaujinimus per `/v1/workspaces/{workspaceId}/sync/pull`.
5. Vietinė duomenų bazė pritaiko pakeitimus ir paslenka sinchronizavimo žymeklį.

### Išoriniai agentai

1. Agentai pradeda nuo `GET /v1/`.
2. Pradinis prisijungimas vienkartiniu kodu vyksta domene `auth.<domain>`.
3. Agentas gauna ilgalaikį API raktą.
4. Agentas įkelia `/v1/agent/me`, gauna darbo sričių sąrašą, prireikus pasirenka vieną ir tada naudoja `/v1/agent/sql/query` bei `/v1/agent/sql/execute`.

## Planavimas

Nibomo kartojimams planuoti naudoja FSRS.

Įgyvendinimo pastabos:

- serverinė dalis ir iOS turi tarpusavyje suderintas FSRS realizacijas
- žiniatinklio programėlė atkartoja planavimo duomenų sutartį, tačiau trečios planuoklio kopijos neturi
- darbo srities lygio planuoklio nustatymai apima norimą įsiminimo lygį, mokymosi žingsnius, pakartotinio mokymosi žingsnius, didžiausią intervalą ir atsitiktinį intervalų išsklaidymą (fuzz)
- tikrasis kartojimo laikas imamas iš `reviewedAtClient`

Išsamią sutartį rasite [FSRS planavimo logikos aprašyme pagrindinėje saugykloje](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

## Autentifikavimas

- El. pašto vienkartinis kodas per Cognito
- Bendro domeno naršyklės sesijos slapukai talpinamai žiniatinklio programėlei
- Agento pradinis prisijungimas vienkartiniu kodu domene `auth.<domain>`, kurio rezultatas – ilgalaikis ApiKey
- `AUTH_MODE=none` vietinei kūrimo aplinkai
- `AUTH_MODE=cognito` produkcinę aplinką atitinkančiam autentifikavimui

## Diegimo struktūra

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda serverinė dalis
- `auth.<domain>` -> API Gateway + Lambda autentifikavimo paslauga
- Postgres AWS RDS paslaugoje

Šakninis domenas gali likti atskirai rinkodaros svetainei. Jei pradinės sąrankos metu jis laisvas, infrastruktūra gali laikinai jį peradresuoti į `app.<domain>`.
