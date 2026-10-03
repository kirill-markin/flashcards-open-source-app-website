---
title: Przewodnik po self-hostingu
description: Uruchom Nibomo lokalnie z PostgreSQL, uwierzytelnianiem, backendem, aplikacją webową i panelem administracyjnym albo wdróż opisany produkcyjny stack AWS CDK.
---

Nibomo obsługuje dwie odrębne ścieżki: lokalne środowisko deweloperskie i wdrożenie produkcyjne na AWS. Docker Compose uruchamia PostgreSQL i migracje w lokalnym środowisku deweloperskim; nie jest metodą wdrożenia produkcyjnego.

## Wymagania lokalnego środowiska deweloperskiego

- Git
- Bash
- GNU Make
- Docker z Docker Compose
- Node.js 24
- npm

Dołączony plik Docker Compose uruchamia obecnie PostgreSQL 18.4. Nie potrzebujesz osobnej lokalnej instalacji PostgreSQL.

## Szybki start lokalnie

```bash
git clone https://github.com/kirill-markin/flashcards-open-source-app.git
cd flashcards-open-source-app
cp .env.example .env
make db-up
npm install --prefix api
npm install --prefix apps/auth
npm install --prefix apps/backend
npm install --prefix apps/web
npm install --prefix apps/admin
```

`make db-up` uruchamia PostgreSQL i wykonuje `scripts/deploy/migrate.sh` w kontenerze migracji. Przy domyślnych hasłach skopiowanych z `.env.example` migracja przygotowuje następujące lokalne połączenia, z których usługi korzystają w czasie działania:

- backend: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- auth: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- reporting: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

Jeśli zmienisz `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` lub `REPORTING_DB_PASSWORD` w `.env`, użyj tego samego zmienionego hasła w odpowiednim adresie URL połączenia.

### Szybki start wyłącznie lokalny

Target Make dla backendu nie wczytuje głównego pliku `.env`. Przekaż wymagane ustawienia lokalne jawnie:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Uruchom klientów w osobnych terminalach:

```bash
make web-dev
make admin-dev
```

Ta ścieżka celowo nie uruchamia `make auth-dev`. `AUTH_MODE=none` to tryb wprost oznaczony jako niezabezpieczony, przeznaczony wyłącznie dla localhost; nigdy nie używaj go we wdrożonym środowisku.
Wystarcza do pracy nad podstawowym backendem, publicznym discovery Agent API, aplikacją webową i panelem administracyjnym, ale nie udostępnia Chat V2.

### Pełny lokalny przepływ z Cognito

Target auth wczytuje główny plik `.env`, a target backendu nie. Najpierw zastąp przestarzałą wartość `DATABASE_URL` w skopiowanym `.env` adresem URL roli auth i dodaj swoje prawdziwe wartości Cognito:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

Uruchom auth:

```bash
make auth-dev
```

W terminalu backendu jawnie wczytaj `.env`, a następnie nadpisz jego adres URL bazy danych auth adresem URL roli backendu dla tego procesu:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

Uruchom `make web-dev` i `make admin-dev` w osobnych terminalach. Oba targety wczytują główny plik `.env`.

Usługi korzystają z następujących adresów lokalnych:

| Usługa | Adres |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Auth, jeśli jest skonfigurowany | `http://localhost:8081` |
| API backendu | `http://localhost:8080/v1` |
| Aplikacja webowa | `http://localhost:3000` |
| Panel administracyjny | `http://localhost:3001` |

Zatrzymaj PostgreSQL i kontener migracji poleceniem:

```bash
make db-down
```

## Konfiguracja lokalna

Zacznij od `.env.example`; opisuje dostępne zmienne i wskazuje, które wartości są wyłącznie lokalne. Przed uruchomieniem auth zastąp w nim przestarzałą wartość `DATABASE_URL`, jak pokazano wyżej.

Główne ustawienia lokalne to:

- `MIGRATION_DATABASE_URL` dla migracji schematu w Dockerze
- `DATABASE_URL` ustawiony na rolę `auth_app` w głównym `.env` dla `make auth-dev`
- `DATABASE_URL` przekazany jako rola `backend_app` dla `make backend-dev`
- `AUTH_MODE` i `ALLOW_INSECURE_LOCAL_AUTH` dla uwierzytelniania backendu
- `BACKEND_ALLOWED_ORIGINS` dla lokalnych originów aplikacji webowej i panelu administracyjnego
- `ALLOWED_REDIRECT_URIS` i `COOKIE_DOMAIN` dla uwierzytelniania w przeglądarce
- wartości Cognito i klucza szyfrowania sesji przy testowaniu prawdziwego OTP

Agent API jest częścią backendu. Jego publiczny lokalny dokument discovery jest dostępny pod `http://localhost:8080/v1/agent` po uruchomieniu backendu. Chronione operacje Agent API wymagają uwierzytelniania `ApiKey` i nie są dostępne na ścieżce `AUTH_MODE=none`.

### Zakres AI w zależności od ścieżki

Powyższe polecenia lokalne nie uruchamiają asynchronicznego workera czatu. Szybka ścieżka używa też `AUTH_MODE=none`, który Chat V2 odrzuca; dodanie klucza OpenAI lub limitu dla gości nie sprawi, że ta ścieżka obsłuży AI. Pełny lokalny przepływ z Cognito zapewnia obsługiwany transport uwierzytelniania, ale nadal nie uruchamia workera.

Wdrożenie AWS CDK tworzy Lambdę workera i konfiguruje backend tak, aby ją wywoływał. Dane uwierzytelniające dostawcy, takie jak `OPENAI_API_KEY`, umożliwiają wywołania modelu w obsługiwanych uwierzytelnionych żądaniach. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` osobno włącza i ogranicza AI dla gości; nie wpływa na AI dla zalogowanych użytkowników ani na AI uwierzytelniane tokenem bearer. Ustawienia Langfuse to opcjonalna konfiguracja śledzenia.

## Klienci natywni

To samo repozytorium zawiera klientów na iOS i Androida, ale lokalne polecenia dla aplikacji webowej i serwera ich nie budują ani nie dystrybuują.

Projekt iOS odczytuje lokalne hosty API i auth z pliku:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

W razie potrzeby utwórz go na podstawie przykładu:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Osobne procesy budowania i testowania opisują [iOS README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) i [Android README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) w repozytorium.

## Produkcja korzysta z AWS CDK

Obsługiwanym wdrożeniem produkcyjnym jest dołączony stack AWS CDK. Jest oparty na AWS, a nie niezależny od dostawcy chmury, i obejmuje:

- VPC i prywatne podsieci
- PostgreSQL 18 w Amazon RDS
- bezhasłowe logowanie kodem OTP z e-maila w Amazon Cognito
- API Gateway i Lambdę dla usług backendu, auth i MCP
- Lambdę asynchronicznego workera czatu i Lambdę niestandardowego nadawcy e-maili Cognito
- S3 i CloudFront dla aplikacji webowej i panelu administracyjnego
- Secrets Manager dla danych uwierzytelniających bazy danych, sesji, e-maila, monitoringu i opcjonalnie AI
- alarmy CloudWatch, powiadomienia SNS i plan kopii zapasowych RDS
- rolę wdrożeniową OIDC dla GitHub Actions
- skrypty konfiguracji Cloudflare dla domen publicznych

Wdrożenie udostępnia `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` i `mcp.<domain>`. Może też utworzyć przekierowanie z domeny głównej, jeśli nie jest ona używana do niczego innego.

Uruchom produkcyjny skrypt pomocniczy z maszyny operatora, która ma:

- Node.js 24 i npm
- Bash i GNU Make
- uruchomiony Docker
- AWS CLI uwierzytelnione na koncie wdrożeniowym
- GitHub CLI uwierzytelnione w docelowym repozytorium
- `curl`, `jq` i Python 3

Przed wdrożeniem skonfiguruj wartości operatora w głównym pliku `.env`. Wymagany zestaw obejmuje region AWS, domenę, adres e-mail do alertów, repozytorium GitHub, dane uwierzytelniające Cloudflare i Resend oraz konfigurację Sentry dla backendu. Dane uwierzytelniające OpenAI i Langfuse są opcjonalne.

Zalecane polecenie pierwszego wdrożenia uruchamiane z katalogu głównego repozytorium to:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

W świeżo sklonowanym repozytorium jawna instalacja auth jest obecnie wymagana, ponieważ skrypt wdrożeniowy dołącza ten pakiet do bundla, ale go nie instaluje. Skrypt tworzy lub zmienia rzeczywiste zasoby AWS, Cloudflare i GitHub. Przed jego uruchomieniem zapoznaj się z dokumentacją wdrożeniową repozytorium i kosztami chmury. Skrypt wykonuje bootstrap CDK, wdraża infrastrukturę, wykonuje migracje, przesyła zasoby aplikacji webowej i panelu administracyjnego, konfiguruje publiczne rekordy DNS `app`, `admin`, `api`, `auth` i `mcp`, o ile tego kroku nie pominięto, oraz uzupełnia brakującą konfigurację GitHub Actions.

Po wdrożeniu:

1. Potwierdź subskrypcję SNS wysłaną do skrzynki `ALERT_EMAIL`.
2. Skonfiguruj i zweryfikuj osobne rekordy DNS domeny wysyłkowej Resend:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` domyślnie uruchamia `scripts/cloudflare/setup-dns.sh` dla publicznych domen aplikacji. Nie uruchamia `setup-resend-domain.sh`; ten drugi skrypt tworzy rekordy nadawcy e-maili dla `mail.<domain>` i weryfikuje tę domenę w Resend. Jeśli wdrażasz z `--skip-dns`, skonfiguruj publiczne rekordy osobno, zgodnie z przewodnikiem AWS CDK.

## Przenośność danych

Import i eksport pakietów obszaru roboczego przenoszą wyłącznie karty, ich tagi i powiązane media. Nie przenoszą historii powtórek, stanu harmonogramu FSRS, ustawień obszaru roboczego, pełnych struktur talii ani danych konta.

Traktuj pakiety jako sposób przenoszenia treści, a nie jako pełną migrację z wersji hostowanej do self-hostowanej ani kopię zapasową na wypadek awarii. Operatorzy odpowiadają za tworzenie kopii zapasowych i przywracanie wdrożonej bazy danych PostgreSQL oraz magazynu mediów.

## Obowiązki operatora

Self-hosting oznacza, że zapewniasz i utrzymujesz:

- infrastrukturę AWS i jej koszty
- DNS w Cloudflare i konfigurację domeny
- dane uwierzytelniające do wysyłki e-maili przez Resend i rekordy domeny
- wymaganą konfigurację monitoringu Sentry
- opcjonalne dane uwierzytelniające dostawcy AI i Langfuse
- sekrety, aktualizacje, migracje, alerty, kopie zapasowe i testy przywracania
- natywne buildy mobilne i ich dystrybucję, jeśli chcesz mieć własne wydania na iOS lub Androida

Stack zawiera automatyzację dla wielu z tych systemów, ale nadal wymaga operatora. Docker Compose nie zastępuje tej architektury produkcyjnej.

## Dokumentacja wdrożeniowa w repozytorium

- [README repozytorium](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Przewodnik po wdrożeniu backendu i aplikacji webowej](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [Przewodnik po wdrożeniu AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [Infrastruktura AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
