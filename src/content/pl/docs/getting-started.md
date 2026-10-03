---
title: Pierwsze kroki
description: Zacznij od hostowanej aplikacji webowej, połącz agenta przez adres discovery albo samodzielnie uruchom lokalny stack.
---

## Hostowana aplikacja webowa

Najszybciej zaczniesz w hostowanej aplikacji webowej:

1. Otwórz [app.nibomo.com](https://app.nibomo.com)
2. Zaloguj się adresem e-mail bez hasła, jednorazowym kodem OTP
3. Twórz karty, powtarzaj te zaplanowane na dziś i korzystaj z czatu AI z dostępem do danych obszaru roboczego i załączonych plików

W wersji hostowanej nie musisz niczego instalować ani konfigurować serwera.

## Konfiguracja agenta

Jeśli chcesz, aby Claude Code, Codex lub OpenClaw łączyły się bezpośrednio, zacznij od:

```text
GET https://api.nibomo.com/v1/
```

Odpowiedź discovery prowadzi agenta krok po kroku przez logowanie kodem OTP z e-maila, utworzenie długoterminowego klucza API, wczytanie konta, przygotowanie obszaru roboczego i opublikowany interfejs SQL.

Ta sama odpowiedź jest dostępna również pod `GET /v1/agent`, ale kanonicznym publicznym punktem wejścia jest `/v1/`.

## Self-hosting

Jeśli wolisz uruchomić własną instancję, zajrzyj do [przewodnika po self-hostingu](/docs/self-hosting/).

## Co jest dostępne już dziś

- Hostowana aplikacja webowa do kart, powtórek i czatu AI
- Klient iOS w głównym repozytorium z lokalną bazą SQLite i synchronizacją w modelu offline-first
- Wspólny backend i usługi uwierzytelniania na osobnych domenach `api` i `auth`
- Podłączanie zewnętrznych agentów przez discovery, OTP i uwierzytelnianie ApiKey
- Otwarta ścieżka wdrożenia na AWS z bazą Postgres jako źródłem prawdy

## Kierunek rozwoju repozytorium

Projekt działa w modelu offline-first.

Obecnie repozytorium obejmuje aplikację webową, aplikację iOS, usługę uwierzytelniania, API backendu, ścieżkę dla zewnętrznych agentów oraz aplikację na Androida opublikowaną w Google Play.
