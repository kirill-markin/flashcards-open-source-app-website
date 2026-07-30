---
title: Руководство по самостоятельному развёртыванию
description: Запустите Flashcards локально с PostgreSQL, аутентификацией, бэкендом, веб-приложением и приложением для администраторов или разверните описанный рабочий стек AWS CDK.
---

Flashcards поддерживает два разных варианта: локальную среду разработки и рабочее развёртывание в AWS. Docker Compose запускает PostgreSQL и миграции для локальной разработки; для рабочего развёртывания он не используется.

## Требования для локальной разработки

- Git
- Bash
- GNU Make
- Docker с Docker Compose
- Node.js 24
- npm

Входящий в репозиторий файл Docker Compose сейчас запускает PostgreSQL 18.4. Отдельно устанавливать PostgreSQL на локальный компьютер не нужно.

## Быстрый локальный запуск

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

Команда `make db-up` запускает PostgreSQL и выполняет `scripts/deploy/migrate.sh` в контейнере миграции. С паролями по умолчанию, скопированными из `.env.example`, миграция создаёт следующие локальные подключения для работающих процессов:

- бэкенд: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- аутентификация: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- отчётность: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

Если вы измените `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` или `REPORTING_DB_PASSWORD` в `.env`, используйте тот же новый пароль в соответствующем URL подключения.

### Быстрый запуск только в локальной среде

Цель Make для бэкенда не загружает файл `.env` из корня. Явно передайте необходимые локальные настройки:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Запустите клиенты в отдельных терминалах:

```bash
make web-dev
make admin-dev
```

В этом варианте `make auth-dev` намеренно не запускается. `AUTH_MODE=none` — явно небезопасный режим исключительно для localhost; никогда не используйте его в развёрнутой среде.
Этот вариант охватывает разработку основного бэкенда, общедоступный документ обнаружения Agent API, веб-приложение и приложение для администраторов, но не включает Chat V2.

### Полный локальный сценарий с Cognito

Цель аутентификации загружает файл `.env` из корня, а цель бэкенда — нет. Сначала замените устаревший `DATABASE_URL` в скопированном файле `.env` на URL роли аутентификации и добавьте реальные значения Cognito:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

Запустите аутентификацию:

```bash
make auth-dev
```

В терминале бэкенда явно загрузите `.env`, а затем для этого процесса замените URL базы данных аутентификации на URL роли бэкенда:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

Запустите `make web-dev` и `make admin-dev` в отдельных терминалах. Обе цели загружают файл `.env` из корня.

Сервисы используют следующие локальные адреса:

| Сервис | Адрес |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Аутентификация после настройки | `http://localhost:8081` |
| API бэкенда | `http://localhost:8080/v1` |
| Веб-приложение | `http://localhost:3000` |
| Приложение для администраторов | `http://localhost:3001` |

Остановите PostgreSQL и контейнер миграции командой:

```bash
make db-down
```

## Локальная конфигурация

Начните с `.env.example`: в нём описаны доступные переменные и значения, предназначенные только для локальной среды. Перед запуском аутентификации замените устаревший `DATABASE_URL`, как показано выше.

Основные локальные настройки:

- `MIGRATION_DATABASE_URL` для миграций схемы внутри Docker
- `DATABASE_URL` с ролью `auth_app` в корневом файле `.env` для `make auth-dev`
- `DATABASE_URL`, переданный с ролью `backend_app` в `make backend-dev`
- `AUTH_MODE` и `ALLOW_INSECURE_LOCAL_AUTH` для аутентификации бэкенда
- `BACKEND_ALLOWED_ORIGINS` для локальных источников веб-приложения и приложения для администраторов
- `ALLOWED_REDIRECT_URIS` и `COOKIE_DOMAIN` для аутентификации в браузере
- значения Cognito и ключ шифрования сессий при тестировании настоящих одноразовых кодов

Agent API входит в состав бэкенда. После запуска бэкенда его общедоступный локальный документ обнаружения находится по адресу `http://localhost:8080/v1/agent`. Защищённые операции Agent требуют аутентификации `ApiKey` и недоступны в варианте с `AUTH_MODE=none`.

### Возможности ИИ в разных вариантах запуска

Приведённые выше локальные команды не запускают асинхронный обработчик чата. В быстром варианте также используется `AUTH_MODE=none`, который Chat V2 не принимает; добавление ключа OpenAI или гостевой квоты не добавит в этот вариант функции ИИ. Полный локальный сценарий с Cognito обеспечивает поддерживаемый транспорт аутентификации, но всё равно не запускает обработчик.

При развёртывании AWS CDK создаёт Lambda-функцию обработчика и настраивает бэкенд для её вызова. Данные доступа к поставщику, например `OPENAI_API_KEY`, разрешают обращения к моделям для поддерживаемых аутентифицированных запросов. Переменная `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` отдельно включает и ограничивает ИИ для гостей; она не управляет ИИ для вошедших пользователей или пользователей с аутентификацией по bearer-токену. Настройки Langfuse — необязательная конфигурация трассировки.

## Нативные клиенты

В том же репозитории находятся клиенты для iOS и Android, но локальные команды для веб-приложений и серверов не собирают и не распространяют их.

Проект iOS получает адреса локальных API и сервиса аутентификации из файла:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

При необходимости создайте его из примера:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Отдельные процессы сборки и тестирования описаны в [README для iOS](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) и [README для Android](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) в репозитории.

## В рабочей среде используется AWS CDK

Поддерживаемый вариант рабочего развёртывания — входящий в репозиторий стек AWS CDK. Он основан на AWS и не является независимым от поставщика. В него входят:

- VPC и приватные подсети
- PostgreSQL 18 в Amazon RDS
- одноразовые коды по электронной почте без пароля через Amazon Cognito
- API Gateway и Lambda для сервисов бэкенда, аутентификации и MCP
- Lambda-функция асинхронного обработчика чата и Lambda-функция пользовательского отправителя писем Cognito
- S3 и CloudFront для веб-приложения и приложения для администраторов
- Secrets Manager для базы данных, сессий, электронной почты, мониторинга и необязательных данных доступа к ИИ
- оповещения CloudWatch, уведомления SNS и план резервного копирования RDS
- роль развёртывания OIDC для GitHub Actions
- скрипты настройки Cloudflare для публичных доменов

После развёртывания доступны `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` и `mcp.<domain>`. Стек также может создать перенаправление с корневого домена, если тот больше нигде не используется.

Запускайте рабочий скрипт на компьютере оператора, где есть:

- Node.js 24 и npm
- Bash и GNU Make
- запущенный Docker
- AWS CLI с аутентификацией в учётной записи развёртывания
- GitHub CLI с аутентификацией в целевом репозитории
- `curl`, `jq` и Python 3

Перед развёртыванием задайте значения оператора в корневом файле `.env`. Обязательный набор включает регион AWS, домен, адрес электронной почты для оповещений, репозиторий GitHub, данные доступа Cloudflare и Resend, а также конфигурацию Sentry для бэкенда. Данные доступа OpenAI и Langfuse необязательны.

Рекомендуемая команда первого развёртывания из корня репозитория:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

При работе с чистой копией сейчас нужно явно установить пакет аутентификации: вспомогательный скрипт развёртывания включает этот пакет в сборку, но не устанавливает его зависимости. Скрипт создаёт или изменяет реальные ресурсы AWS, Cloudflare и GitHub. Перед его запуском изучите документацию по развёртыванию в репозитории и стоимость облачных ресурсов. Скрипт инициализирует CDK, развёртывает инфраструктуру, выполняет миграции, загружает ресурсы веб-приложения и приложения для администраторов, настраивает публичные DNS-записи `app`, `admin`, `api`, `auth` и `mcp`, если этот шаг не пропущен, и добавляет недостающую конфигурацию GitHub Actions.

После развёртывания:

1. Подтвердите подписку SNS, отправленную на адрес `ALERT_EMAIL`.
2. Отдельно настройте и подтвердите DNS-записи домена отправки Resend:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

По умолчанию `first-deploy.sh` запускает `scripts/cloudflare/setup-dns.sh` для публичных доменов приложения. Он не запускает `setup-resend-domain.sh`: второй скрипт создаёт записи отправителя электронной почты для `mail.<domain>` и подтверждает этот домен в Resend. Если вы запускаете развёртывание с `--skip-dns`, настройте публичные записи отдельно, как описано в руководстве по AWS CDK.

## Перенос данных

Импорт и экспорт пакетов рабочего пространства переносят только карточки, их теги и связанные медиафайлы. Они не переносят историю повторений, состояние планировщика FSRS, настройки рабочего пространства, полные структуры колод или данные учётной записи.

Пакеты предназначены для передачи содержимого, а не для полной миграции между облачной и самостоятельной версиями или аварийного резервного копирования. Операторы отвечают за резервное копирование и восстановление развёрнутой базы данных PostgreSQL и хранилища медиафайлов.

## Обязанности оператора

При самостоятельном развёртывании вы предоставляете и обслуживаете:

- инфраструктуру AWS и оплачиваете её стоимость
- домен и конфигурацию DNS в Cloudflare
- данные доступа Resend для доставки электронной почты и записи домена
- обязательную конфигурацию мониторинга Sentry
- необязательные данные доступа к поставщику ИИ и Langfuse
- секреты, обновления, миграции, оповещения, резервные копии и проверки восстановления
- сборку и распространение нативных мобильных приложений, если хотите выпускать собственные версии для iOS или Android

Стек автоматизирует работу со многими из этих систем, но всё равно требует оператора. Docker Compose не заменяет эту рабочую архитектуру.

## Документация по развёртыванию из репозитория

- [README репозитория](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Руководство по развёртыванию бэкенда и веб-приложений](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [Руководство по развёртыванию AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [Инфраструктура AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
