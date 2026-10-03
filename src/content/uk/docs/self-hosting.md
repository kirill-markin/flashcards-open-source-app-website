---
title: Посібник із self-hosting
description: Запустіть Nibomo локально з PostgreSQL, автентифікацією, бекендом, вебзастосунком і панеллю адміністратора або розгорніть описаний робочий стек на AWS CDK.
---

Nibomo підтримує два окремі шляхи: локальне середовище розробки та робоче розгортання в AWS. Docker Compose запускає PostgreSQL і міграції для локальної розробки; це не спосіб робочого розгортання.

## Вимоги для локальної розробки

- Git
- Bash
- GNU Make
- Docker з Docker Compose
- Node.js 24
- npm

Наданий файл Docker Compose наразі запускає PostgreSQL 18.4. Окремо встановлювати PostgreSQL локально не потрібно.

## Швидкий локальний старт

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

`make db-up` запускає PostgreSQL і виконує `scripts/deploy/migrate.sh` через контейнер міграцій. Зі стандартними паролями, скопійованими з `.env.example`, міграція створює такі локальні підключення для роботи сервісів:

- бекенд: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- автентифікація: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- звітність: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

Якщо ви змінюєте `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` або `REPORTING_DB_PASSWORD` у `.env`, вкажіть той самий змінений пароль у відповідному URL підключення.

### Швидкий запуск лише для локальної роботи

Make-ціль бекенда не завантажує кореневий `.env`. Передайте потрібні їй локальні налаштування явно:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Запустіть клієнти в окремих терміналах:

```bash
make web-dev
make admin-dev
```

Цей шлях навмисно не запускає `make auth-dev`. `AUTH_MODE=none` — режим лише для localhost, явно позначений як незахищений; ніколи не використовуйте його в розгорнутому середовищі.
Він охоплює розробку основного бекенда, публічного виявлення Agent API, вебзастосунку та панелі адміністратора, але не робить доступним Chat V2.

### Повний локальний сценарій із Cognito

Ціль автентифікації завантажує кореневий `.env`, а ціль бекенда — ні. Спочатку замініть застарілий `DATABASE_URL` у скопійованому `.env` на URL ролі автентифікації та додайте свої справжні значення Cognito:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

Запустіть автентифікацію:

```bash
make auth-dev
```

У терміналі бекенда явно завантажте `.env`, а потім для цього процесу замініть URL бази даних автентифікації на URL ролі бекенда:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

Запустіть `make web-dev` і `make admin-dev` в окремих терміналах. Обидві цілі завантажують кореневий `.env`.

Сервіси використовують такі локальні адреси:

| Сервіс | Адреса |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Автентифікація, якщо налаштована | `http://localhost:8081` |
| Бекенд API | `http://localhost:8080/v1` |
| Вебзастосунок | `http://localhost:3000` |
| Панель адміністратора | `http://localhost:3001` |

Зупинити PostgreSQL і контейнер міграцій можна командою:

```bash
make db-down
```

## Локальна конфігурація

Почніть із `.env.example`: у ньому описано доступні змінні й зазначено, які значення призначені лише для локальної роботи. Перед запуском автентифікації замініть у ньому застарілий `DATABASE_URL`, як показано вище.

Основні локальні налаштування:

- `MIGRATION_DATABASE_URL` для міграцій схеми всередині Docker
- `DATABASE_URL` з роллю `auth_app` у кореневому `.env` для `make auth-dev`
- `DATABASE_URL` з роллю `backend_app`, переданий для `make backend-dev`
- `AUTH_MODE` і `ALLOW_INSECURE_LOCAL_AUTH` для автентифікації бекенда
- `BACKEND_ALLOWED_ORIGINS` для локальних джерел (origins) вебзастосунку та панелі адміністратора
- `ALLOWED_REDIRECT_URIS` і `COOKIE_DOMAIN` для автентифікації в браузері
- значення Cognito й ключа шифрування сесій, якщо ви тестуєте справжній OTP

Agent API є частиною бекенда. Після запуску бекенда його публічний локальний документ виявлення доступний за адресою `http://localhost:8080/v1/agent`. Захищені операції Agent API потребують автентифікації `ApiKey` і недоступні на шляху з `AUTH_MODE=none`.

### Можливості AI залежно від шляху

Наведені вище локальні команди не запускають асинхронний обробник чату. Швидкий шлях до того ж використовує `AUTH_MODE=none`, який Chat V2 відхиляє; додавання ключа OpenAI чи гостьової квоти не дає цьому шляху можливостей AI. Повний локальний сценарій із Cognito забезпечує підтримуваний спосіб передавання автентифікації, але обробника чату він однаково не запускає.

Розгортання AWS CDK створює Lambda-обробник і налаштовує бекенд так, щоб той його викликав. Облікові дані провайдера, як-от `OPENAI_API_KEY`, вмикають виклики моделі для підтримуваних автентифікованих запитів. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` окремо вмикає та обмежує гостьовий AI; він не керує AI для користувачів, які увійшли в систему або автентифікувалися через bearer-токен. Налаштування Langfuse — необов’язкова конфігурація трасування.

## Нативні клієнти

Той самий репозиторій містить клієнти для iOS та Android, але локальні команди для вебу й сервера не збирають і не поширюють їх.

Проєкт iOS читає локальні хости API та автентифікації з файлу:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

За потреби створіть його з прикладу:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Окремі процеси збирання й тестування описано в [README для iOS](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) та [README для Android](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) у репозиторії.

## Робоче середовище використовує AWS CDK

Підтримуване робоче розгортання — це стек AWS CDK, що входить до репозиторію. Він розрахований саме на AWS, а не на довільного постачальника, і містить:

- VPC і приватні підмережі
- PostgreSQL 18 в Amazon RDS
- вхід без пароля за одноразовим кодом з електронної пошти в Amazon Cognito
- API Gateway і Lambda для сервісів бекенда, автентифікації та MCP
- Lambda асинхронного обробника чату й Lambda користувацького відправника пошти Cognito (custom email sender)
- S3 і CloudFront для вебзастосунку та панелі адміністратора
- Secrets Manager для облікових даних бази даних, сесій, пошти, моніторингу та, за бажанням, AI
- сигнали тривоги CloudWatch, сповіщення SNS і план резервного копіювання RDS
- роль розгортання GitHub Actions з OIDC
- скрипти налаштування Cloudflare для публічних доменів

Розгортання робить доступними `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` і `mcp.<domain>`. Воно також може створити перенаправлення з кореневого домену, якщо той більше ніде не використовується.

Запускайте допоміжний скрипт для робочого розгортання з машини оператора, на якій є:

- Node.js 24 і npm
- Bash і GNU Make
- запущений Docker
- AWS CLI, автентифікований в обліковому записі для розгортання
- GitHub CLI, автентифікований у цільовому репозиторії
- `curl`, `jq` і Python 3

Перед розгортанням налаштуйте значення оператора в кореневому `.env`. Обов’язковий набір містить регіон AWS, домен, адресу для сповіщень, репозиторій GitHub, облікові дані Cloudflare, облікові дані Resend і конфігурацію Sentry для бекенда. Облікові дані OpenAI та Langfuse необов’язкові.

Рекомендована команда першого розгортання з кореня репозиторію:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

Наразі явне встановлення пакета автентифікації потрібне в чистій копії репозиторію, бо допоміжний скрипт розгортання включає цей пакет у збірку, але не встановлює його. Скрипт створює або змінює реальні ресурси AWS, Cloudflare та GitHub. Перед запуском ознайомтеся з документацією з розгортання в репозиторії та вартістю хмарних ресурсів. Скрипт виконує початкове налаштування CDK, розгортає інфраструктуру, запускає міграції, завантажує файли вебзастосунку й панелі адміністратора, налаштовує публічні DNS-записи `app`, `admin`, `api`, `auth` і `mcp` (якщо цей крок не пропущено) і заповнює відсутню конфігурацію GitHub Actions.

Після розгортання:

1. Підтвердьте підписку SNS, надіслану на скриньку `ALERT_EMAIL`.
2. Налаштуйте й перевірте окремі DNS-записи домену надсилання Resend:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` за замовчуванням запускає `scripts/cloudflare/setup-dns.sh` для публічних доменів застосунку. Він не запускає `setup-resend-domain.sh`: цей скрипт створює записи відправника пошти для `mail.<domain>` і підтверджує цей домен у Resend. Якщо ви розгортаєте з `--skip-dns`, налаштуйте публічні записи окремо, як описано в посібнику з AWS CDK.

## Перенесення даних

Імпорт та експорт пакетів робочого простору переносять лише картки, їхні теги й пов’язані медіафайли. Вони не переносять історію повторень, стан планувальника FSRS, налаштування робочого простору, повну структуру колод чи дані облікового запису.

Розглядайте пакети як спосіб перенесення вмісту, а не як повну міграцію з хмарної версії на самостійно розгорнуту чи резервну копію для аварійного відновлення. Оператори самі відповідають за резервне копіювання та відновлення розгорнутої бази даних PostgreSQL і сховища медіафайлів.

## Обов’язки оператора

Самостійне розгортання означає, що ви забезпечуєте й обслуговуєте:

- інфраструктуру AWS і витрати на неї
- DNS у Cloudflare та налаштування домену
- облікові дані для доставки пошти через Resend і записи домену
- обов’язкову конфігурацію моніторингу Sentry
- необов’язкові облікові дані провайдера AI та Langfuse
- секрети, оновлення, міграції, сповіщення, резервні копії та перевірку відновлення
- нативні мобільні збірки та їх поширення, якщо вам потрібні власні релізи для iOS чи Android

Стек містить автоматизацію для багатьох із цих систем, але все одно потребує оператора. Docker Compose не замінює цю архітектуру робочого середовища.

## Документація з розгортання в репозиторії

- [README репозиторію](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Посібник із розгортання бекенда та вебзастосунку](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [Посібник із розгортання на AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [Інфраструктура AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
