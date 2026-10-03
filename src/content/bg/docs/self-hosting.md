---
title: Ръководство за собствен хостинг
description: Пуснете Nibomo локално с PostgreSQL, удостоверяване, бекенд, уеб и администраторско приложение или разгърнете документирания продукционен стек с AWS CDK.
---

Nibomo поддържа два отделни варианта: локална среда за разработка и продукционно разгръщане в AWS. Docker Compose пуска PostgreSQL и миграциите за локална разработка; това не е начинът за продукционно разгръщане.

## Изисквания за локална разработка

- Git
- Bash
- GNU Make
- Docker с Docker Compose
- Node.js 24
- npm

Предоставеният файл за Docker Compose в момента пуска PostgreSQL 18.4. Не е нужна отделна локална инсталация на PostgreSQL.

## Бърз локален старт

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

`make db-up` стартира PostgreSQL и изпълнява `scripts/deploy/migrate.sh` чрез контейнера за миграции. С паролите по подразбиране, копирани от `.env.example`, миграцията създава следните локални връзки за работа:

- бекенд: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- удостоверяване: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- отчети: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

Ако промените `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` или `REPORTING_DB_PASSWORD` в `.env`, използвайте същата нова парола в съответния URL адрес за връзка.

### Бърз старт само локално

Целта на Make за бекенда не зарежда основния `.env`. Подайте изрично необходимите ѝ локални настройки:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Пуснете клиентите в отделни терминали:

```bash
make web-dev
make admin-dev
```

Този вариант умишлено не стартира `make auth-dev`. `AUTH_MODE=none` е изрично несигурен режим само за localhost; никога не го използвайте в разгърната среда.
Той покрива разработката на основния бекенд, публичното откриване на Agent API, уеб и администраторското приложение, но не прави Chat V2 достъпен.

### Пълен локален поток с Cognito

Целта за удостоверяване зарежда основния `.env`, а целта за бекенда — не. Първо заменете остарелия `DATABASE_URL` в копирания `.env` с URL адреса на ролята за удостоверяване и добавете реалните си стойности за Cognito:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

Стартирайте удостоверяването:

```bash
make auth-dev
```

В терминала за бекенда заредете изрично `.env` и след това заменете неговия URL адрес на базата данни за удостоверяване с URL адреса на ролята за бекенда за този процес:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

Пуснете `make web-dev` и `make admin-dev` в отделни терминали. И двете цели зареждат основния `.env`.

Услугите използват следните локални адреси:

| Услуга | Адрес |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Удостоверяване, когато е настроено | `http://localhost:8081` |
| Бекенд API | `http://localhost:8080/v1` |
| Уеб приложение | `http://localhost:3000` |
| Администраторско приложение | `http://localhost:3001` |

Спрете PostgreSQL и контейнера за миграции с:

```bash
make db-down
```

## Локална конфигурация

Започнете от `.env.example`; той описва наличните променливи и кои стойности са само за локална работа. Заменете остарелия `DATABASE_URL` в него, преди да пуснете удостоверяването, както е показано по-горе.

Основните локални настройки са:

- `MIGRATION_DATABASE_URL` за миграциите на схемата в Docker
- `DATABASE_URL`, зададен на ролята `auth_app` в основния `.env`, за `make auth-dev`
- `DATABASE_URL`, подаден като ролята `backend_app`, за `make backend-dev`
- `AUTH_MODE` и `ALLOW_INSECURE_LOCAL_AUTH` за удостоверяването в бекенда
- `BACKEND_ALLOWED_ORIGINS` за разрешените локални източници (origins) на уеб и администраторското приложение
- `ALLOWED_REDIRECT_URIS` и `COOKIE_DOMAIN` за удостоверяването в браузъра
- стойностите за Cognito и за шифроването на сесиите, когато тествате реален OTP

Agent API е част от бекенда. Публичният му локален документ за откриване е достъпен на `http://localhost:8080/v1/agent`, след като бекендът стартира. Защитените операции на Agent API изискват удостоверяване с `ApiKey` и не са достъпни във варианта с `AUTH_MODE=none`.

### Обхват на ИИ според варианта

Локалните команди по-горе не стартират асинхронния обработчик на чата. Бързият вариант освен това използва `AUTH_MODE=none`, който Chat V2 отхвърля; добавянето на OpenAI ключ или квота за гости не позволява на този вариант да работи с ИИ. Пълният локален поток с Cognito осигурява поддържан механизъм за удостоверяване, но също не стартира обработчика.

Разгръщането с AWS CDK създава Lambda функцията на обработчика и настройва бекенда да я извиква. Идентификационните данни на доставчика, като `OPENAI_API_KEY`, позволяват извиквания на модела за поддържани заявки с удостоверяване. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` отделно включва и ограничава ИИ за гости; той не управлява ИИ за влезли потребители или за заявки с bearer удостоверяване. Настройките за Langfuse са незадължителна конфигурация за проследяване.

## Нативни клиенти

Същото хранилище съдържа iOS и Android клиентите, но локалните команди за уеб и сървъра не ги компилират и не ги разпространяват.

iOS проектът чете локалните хостове за API и удостоверяване от:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

Създайте го от примера, когато е нужно:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Вижте [iOS README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) и [Android README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) в хранилището за отделните им процеси на компилиране и тестване.

## Продукционната среда използва AWS CDK

Поддържаното продукционно разгръщане е включеният AWS CDK стек. Той е базиран на AWS, а не е независим от доставчика, и включва:

- VPC и частни подмрежи
- PostgreSQL 18 в Amazon RDS
- Amazon Cognito с вход без парола чрез OTP по имейл
- API Gateway и Lambda за услугите на бекенда, удостоверяването и MCP
- Lambda функция за асинхронния обработчик на чата и Lambda функция за персонализирано изпращане на имейли от Cognito
- S3 и CloudFront за уеб и администраторското приложение
- Secrets Manager за идентификационните данни за базата данни, сесиите, имейла, наблюдението и, по желание, за ИИ
- аларми в CloudWatch, известия чрез SNS и план за резервни копия на RDS
- роля за разгръщане с GitHub Actions OIDC
- скриптове за настройка на Cloudflare за публичните домейни

Разгръщането предоставя `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` и `mcp.<domain>`. То може да създаде и пренасочване от основния домейн, когато той не се използва за друго.

Пуснете помощния скрипт за продукционната среда от машина на оператора с:

- Node.js 24 и npm
- Bash и GNU Make
- работещ Docker
- AWS CLI с удостоверяване към акаунта за разгръщане
- GitHub CLI с удостоверяване към целевото хранилище
- `curl`, `jq` и Python 3

Преди разгръщането задайте стойностите на оператора в основния `.env`. Задължителният набор включва региона на AWS, домейна, имейла за аларми, хранилището в GitHub, идентификационните данни за Cloudflare и Resend и конфигурацията на Sentry за бекенда. Идентификационните данни за OpenAI и Langfuse са незадължителни.

Препоръчителната команда за първо разгръщане от основната директория на хранилището е:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

Изричното инсталиране на пакета за удостоверяване в момента е задължително при чисто копие на хранилището, защото помощният скрипт за разгръщане го пакетира, но не го инсталира. Скриптът създава или променя реални ресурси в AWS, Cloudflare и GitHub. Прегледайте документацията за разгръщане в хранилището и разходите за облака, преди да го пуснете. Той изпълнява bootstrap на CDK, разгръща инфраструктурата, изпълнява миграциите, качва ресурсите на уеб и администраторското приложение, настройва публичните DNS записи за `app`, `admin`, `api`, `auth` и `mcp`, освен ако не са пропуснати, и попълва липсващата конфигурация на GitHub Actions.

След разгръщането:

1. Потвърдете абонамента за SNS, изпратен до пощенската кутия от `ALERT_EMAIL`.
2. Настройте и потвърдете отделните DNS записи на домейна за изпращане на Resend:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` по подразбиране изпълнява `scripts/cloudflare/setup-dns.sh` за публичните домейни на приложението. Той не изпълнява `setup-resend-domain.sh`; последният създава записите за изпращане на имейли за `mail.<domain>` и потвърждава този домейн в Resend. Ако разгръщате с `--skip-dns`, настройте публичните записи отделно, както е описано в ръководството за AWS CDK.

## Преносимост на данните

Импортът и експортът на пакети от работното пространство прехвърлят само карти, техните етикети и свързаната мултимедия. Те не прехвърлят историята на преговорите, състоянието на планировчика FSRS, настройките на работното пространство, пълната структура на тестетата или данните на акаунта.

Разглеждайте пакетите като прехвърляне на съдържание, а не като пълна миграция от облачна към собствена инсталация или като резервно копие за възстановяване след бедствие. Операторите отговарят за архивирането и възстановяването на разгърнатата база данни PostgreSQL и на хранилището за мултимедия.

## Отговорности на оператора

Собственият хостинг означава, че вие осигурявате и поддържате:

- инфраструктурата в AWS и разходите за нея
- DNS и конфигурацията на домейна в Cloudflare
- идентификационните данни за доставка на имейли чрез Resend и записите на домейна
- задължителната конфигурация за наблюдение в Sentry
- незадължителните идентификационни данни за доставчик на ИИ и Langfuse
- секретите, надграждането, миграциите, алармите, резервните копия и тестването на възстановяването
- нативните мобилни компилации и разпространението им, ако искате собствени версии за iOS или Android

Стекът включва автоматизация за много от тези системи, но все пак изисква оператор. Docker Compose не заменя тази продукционна архитектура.

## Документация за разгръщане в хранилището

- [README на хранилището](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Ръководство за разгръщане на бекенда и уеб приложението](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [Ръководство за разгръщане с AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [Инфраструктура с AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
