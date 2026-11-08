---
title: Pierwsze kroki
description: Zacznij od aplikacji na urządzenia iPhone, iPad, Mac lub Android, aplikacji webowej, agenta AI albo własnego serwera.
---

Zacząć możesz na kilka sposobów – od najpopularniejszego:

- **Aplikacja na urządzenia iPhone, iPad i Mac**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **Aplikacja na Androida**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **Hostowana aplikacja webowa**: [app.nibomo.com](https://app.nibomo.com)
- **Agenci AI**: [konektor MCP](/docs/mcp-connector/) lub API pod adresem `https://api.nibomo.com/v1/`
- **Self-hosting**: [przewodnik po self-hostingu](/docs/self-hosting/)

## Aplikacje mobilne i desktopowe

Zainstaluj natywną aplikację na swoje urządzenie:

- iPhone, iPad i Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

Aplikacje przechowują karty na urządzeniu, więc możesz powtarzać offline, a po powrocie do sieci wszystko się synchronizuje. Możesz zacząć jako gość i zalogować się później.

### Widżety na ekranie początkowym

Aplikacja Nibomo dodaje widżet „Powtórki” na urządzeniach iPhone, iPad, Mac i Android. Jest dostępny w trzech rozmiarach:

- **Mały**: ile kart czeka na powtórkę i Twoja seria nauki
- **Średni**: ile kart czeka na powtórkę i pytanie z następnej karty
- **Duży**: ile kart czeka na powtórkę, następne pytanie i Twoja seria

Gdy nie ma nic do powtórki, widżet pokazuje „Wszystko zrobione” i termin powtórki następnej karty. Nigdy nie pokazuje odpowiedzi. Dotknij widżetu, aby otworzyć sekcję Powtórki; średni lub duży widżet otwiera ją od razu na pokazanej karcie. Widżety są darmowe dla wszystkich, także dla gości.

Aby dodać widżet na iPhonie, iPadzie lub Macu, otwórz galerię widżetów, wybierz Nibomo i rozmiar. Na Androidzie dodaj widżet Nibomo z listy widżetów, a potem zmień jego rozmiar; układ dopasowuje się do rozmiaru.

## Hostowana aplikacja webowa

Najszybciej zaczniesz w hostowanej aplikacji webowej:

1. Otwórz [app.nibomo.com](https://app.nibomo.com)
2. Zaloguj się adresem e-mail bez hasła, jednorazowym kodem OTP
3. Twórz karty, powtarzaj te zaplanowane na dziś i korzystaj z czatu AI z dostępem do danych obszaru roboczego i załączonych plików

W wersji hostowanej nie musisz niczego instalować ani konfigurować serwera.

## Konfiguracja agenta

Klienty MCP, takie jak Claude, ChatGPT i Cursor, mogą się połączyć według [przewodnika po konektorze MCP](/docs/mcp-connector/).

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
- Natywne aplikacje na urządzenia iPhone, iPad, Mac i Android z lokalną bazą SQLite i synchronizacją w modelu offline-first
- Wspólny backend i usługi uwierzytelniania na osobnych domenach `api` i `auth`
- Podłączanie zewnętrznych agentów przez discovery, OTP i uwierzytelnianie ApiKey
- Otwarta ścieżka wdrożenia na AWS z bazą Postgres jako źródłem prawdy

## Kierunek rozwoju repozytorium

Projekt działa w modelu offline-first.

Obecnie repozytorium obejmuje aplikację webową, aplikację iOS, usługę uwierzytelniania, API backendu, ścieżkę dla zewnętrznych agentów oraz aplikację na Androida opublikowaną w Google Play.
