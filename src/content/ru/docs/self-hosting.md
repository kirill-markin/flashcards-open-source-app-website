---
title: Руководство по самостоятельному хостингу
description: Запустите Flashcards локально с Postgres, auth, backend и web или самостоятельно разверните описанный AWS-стек.
---

## Требования

- Docker
- Node.js 20+
- npm
- PostgreSQL 16+ через прилагаемую Docker-конфигурацию

## Быстрый запуск

```bash
git clone https://github.com/kirill-markin/flashcards-open-source-app.git
cd flashcards-open-source-app
cp .env.example .env
make db-up
npm install --prefix api
npm install --prefix apps/auth
npm install --prefix apps/backend
npm install --prefix apps/web
```

Затем запустите сервисы в отдельных терминалах:

```bash
make auth-dev
make backend-dev
make web-dev
```

Будут запущены:

1. `postgres` на порту `5432`
2. `auth` на порту `8081`
3. `backend` на порту `8080`
4. `web` на порту `3000`

Локальные адреса:

- `http://localhost:3000` для веб-приложения
- `http://localhost:8080/v1` для API сервиса `backend`
- `http://localhost:8081` для сервиса `auth`

## Конфигурация

Скопируйте `.env.example` в `.env` и настройте:

- `DATABASE_URL` — строка подключения к Postgres
- `AUTH_MODE` — `none` для локального запуска, `cognito` для входа по одноразовому коду из email
- `BACKEND_ALLOWED_ORIGINS` — разрешённые источники (`Origin`) браузерных API-запросов с аутентификацией по сессии
- `PUBLIC_API_BASE_URL` и `PUBLIC_AUTH_BASE_URL` — необязательные переопределения, если вы хотите, чтобы ответы discovery указывали ваши собственные публичные хосты

## Локальная настройка iOS

iOS-приложение из основного репозитория берёт локальные хосты API и auth из:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

При необходимости скопируйте файл-пример:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

После этого укажите локальные или собственные домены `api` и `auth`.

## Обновление

```bash
git pull
npm install --prefix api
npm install --prefix apps/auth
npm install --prefix apps/backend
npm install --prefix apps/web
```

После обновления зависимостей перезапустите локальные сервисы.

## Развёртывание в AWS

Описанная в документации схема боевого развёртывания выглядит так:

- CloudFront + S3 для `app.<domain>`
- API Gateway + Lambda для `api.<domain>`
- API Gateway + Lambda для `auth.<domain>`
- Postgres в AWS RDS
- Cognito для входа по одноразовому коду из email без пароля
- необязательная переадресация корневого домена, если он больше нигде не используется

Подробности по развёртыванию:

- [Repository README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Deployment guide](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/deployment.md)
- [AWS CDK infrastructure](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
