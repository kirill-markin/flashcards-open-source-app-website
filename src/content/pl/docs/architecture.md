---
title: Architektura
description: Przegląd systemu, domeny publiczne, obsługiwani klienci i obecny przepływ danych w modelu offline-first.
---

## Przegląd systemu

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Zasady

1. Osobne domeny publiczne dla `app`, `api` i `auth`
2. Postgres jest źródłem prawdy
3. Klient iOS działa w modelu offline-first z lokalną bazą SQLite i synchronizacją
4. Aplikacja webowa, aplikacja iOS i interfejs dla zewnętrznych agentów korzystają z tego samego modelu obszaru roboczego
5. Zewnętrzni agenci zaczynają od `GET https://api.nibomo.com/v1/`

## Obsługiwani klienci

- Aplikacja webowa pod adresem `app.nibomo.com`
- Aplikacja iOS w głównym repozytorium z lokalną bazą SQLite
- Aplikacja na Androida w Google Play
- Zewnętrzni klienci agentów przez discovery, inicjalizację OTP i `Authorization: ApiKey`

## Model danych

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## Przepływ danych

### Web

1. Przeglądarka loguje się przez `auth.<domain>`.
2. Aplikacja webowa wczytuje dane obszaru roboczego z `api.<domain>`.
3. Żądania czatu AI przechodzą przez `/chat/local-turn`.
4. Wysłane powtórki aktualizują stan harmonogramu w momencie zapisu.

### iOS

1. Aplikacja iOS najpierw zapisuje dane lokalnie w SQLite.
2. Lokalne zmiany trafiają do kolejki zmian oczekujących na wysłanie.
3. Synchronizacja wysyła zmiany przez `/v1/workspaces/{workspaceId}/sync/push`.
4. Synchronizacja pobiera zdalne aktualizacje przez `/v1/workspaces/{workspaceId}/sync/pull`.
5. Lokalna baza danych stosuje zmiany i przesuwa kursor synchronizacji.

### Zewnętrzni agenci

1. Agenci zaczynają od `GET /v1/`.
2. Inicjalizacja OTP odbywa się w `auth.<domain>`.
3. Agent otrzymuje długoterminowy klucz API.
4. Agent wczytuje `/v1/agent/me`, pobiera listę obszarów roboczych, w razie potrzeby wybiera jeden, a następnie korzysta z `/v1/agent/sql/query` i `/v1/agent/sql/execute`.

## Planowanie powtórek

Nibomo używa FSRS do planowania powtórek.

Uwagi implementacyjne:

- backend i iOS utrzymują lustrzane implementacje FSRS
- aplikacja webowa odwzorowuje kontrakt danych planowania, ale nie zawiera trzeciej kopii mechanizmu planowania
- ustawienia planowania na poziomie obszaru roboczego obejmują docelową retencję, kroki nauki, kroki ponownej nauki, maksymalny odstęp i fuzz
- rzeczywisty czas powtórki pochodzi z `reviewedAtClient`

Szczegółowy kontrakt opisuje [logika planowania FSRS w głównym repozytorium](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

## Uwierzytelnianie

- OTP z e-maila przez Cognito
- Pliki cookie sesji przeglądarki we wspólnej domenie dla hostowanej aplikacji webowej
- Inicjalizacja OTP dla agentów w `auth.<domain>`, której wynikiem jest długoterminowy ApiKey
- `AUTH_MODE=none` w lokalnym środowisku deweloperskim
- `AUTH_MODE=cognito` do uwierzytelniania zbliżonego do produkcyjnego

## Struktura wdrożenia

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + backend na Lambdzie
- `auth.<domain>` -> API Gateway + usługa uwierzytelniania na Lambdzie
- Postgres w AWS RDS

Domena główna może nadal obsługiwać osobną witrynę marketingową. Jeśli przy pierwszym wdrożeniu jest wolna, infrastruktura może tymczasowo przekierowywać ją na `app.<domain>`.
