---
title: Довідник API
description: API для зовнішніх агентів — виявлення, початкове налаштування за OTP, налаштування робочого простору та опубліковані SQL-інтерфейси для читання й запису.
---

## Огляд

На цій сторінці описано чинний контракт Nibomo для зовнішніх AI-агентів.

Якщо ваш клієнт підтримує MCP, найпростіше підключитися через [MCP-конектор](/docs/mcp-connector/):
він обгортає той самий інтерфейс даних. На цій сторінці описано контракт
HTTP-виявлення, SQL, посібників і повторень, яким користуються CLI-агенти.

Почніть із канонічної точки входу для виявлення:

```text
GET https://api.nibomo.com/v1/
```

Той самий вміст відповіді доступний і за адресою `GET /v1/agent`, але основною публічною точкою входу є `/v1/`.

Відповідь виявлення пояснює агенту, як:

- почати вхід за одноразовим кодом з електронної пошти
- обміняти одноразовий код на довгостроковий API-ключ
- завантажити контекст облікового запису
- створити або вибрати робочий простір
- продовжити роботу через опублікований SQL-інтерфейс
- отримувати довідкові посібники й повторювати картки по одній

## Виявлення під час роботи та вихідний код

OpenAPI недоступний. Чотири колишні URL специфікацій нижче тепер замість схеми повертають те саме JSON-повідомлення про виявлення з `"openapiAvailable": false`:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

Для актуального виявлення під час роботи використовуйте `GET https://api.nibomo.com/v1/`. Переходьте за поверненим `docs.discoveryUrl`, щоб дізнатися маршрути, і за `docs.source.agentRoutesUrl`, щоб переглянути подробиці реалізації.

## Початкова автентифікація

Початкове налаштування за OTP виконує сервіс автентифікації:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

Послідовність така:

1. Викличте `GET /v1/`.
2. Надішліть електронну адресу користувача на `send-code`.
3. Прочитайте `otpSessionToken` із відповіді.
4. Попросіть у користувача останній 8-значний код з листа.
5. Викличте `verify-code` з `code`, `otpSessionToken` і `label`.
6. Збережіть отриманий API-ключ поза пам’яттю чату.

Рекомендована змінна середовища:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Автентифіковані запити використовують:

```text
Authorization: ApiKey <key>
```

Приклад послідовності початкового налаштування:

```bash
curl https://api.nibomo.com/v1/
```

```bash
curl -X POST https://auth.nibomo.com/api/agent/send-code \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com"}'
```

```bash
curl -X POST https://auth.nibomo.com/api/agent/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "code":"12345678",
    "otpSessionToken":"...",
    "label":"Codex on MacBook"
  }'
```

## Інтерфейс агента після входу

Після підтвердження агенту доступні такі маршрути:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (лише читання)
- `POST /v1/agent/sql/execute` (запис)
- `GET /v1/agent/guide/{topic}` (лише читання)
- `POST /v1/agent/reviews/next` (лише читання)
- `POST /v1/agent/reviews/reveal` (лише читання)
- `POST /v1/agent/reviews/submit` (запис)

Типове початкове налаштування виглядає так:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. За потреби `POST /v1/agent/workspaces` з `{"name":"Personal"}`
4. За потреби `POST /v1/agent/workspaces/{workspaceId}/select`
5. Використовуйте `POST /v1/agent/sql/query` для читання і `POST /v1/agent/sql/execute` для запису

Робочий простір вибирається явно для кожного підключення з API-ключем. Агентам слід дотримуватися поверненого тексту `instructions` і `docs.discoveryUrl` щодо маршрутів, а також `docs.source.agentRoutesUrl` щодо подробиць реалізації, а не вгадувати наступний крок.

Маршрути SQL і повторень також приймають необов’язковий `workspaceId` у тілі JSON. Він спрямовує один виклик до цього робочого простору, не змінюючи вибору; якщо його не передати, використовується вибраний робочий простір. Якщо немає ні вибраного робочого простору, ні `workspaceId`, маршрути відповідають `409 WORKSPACE_SELECTION_REQUIRED`.

## SQL-інтерфейс

`POST /v1/agent/sql/query` — інтерфейс суто для читання (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`), а `POST /v1/agent/sql/execute` — інтерфейс для запису (`INSERT`, `UPDATE`, `DELETE`); один виклик має містити або лише читання, або лише запис.

Він навмисно обмежений і не є повноцінним PostgreSQL. Ця документація описує
лише підтримуваний діалект і не є довідником сумісності з PostgreSQL.

Жодна операція читання не виправляє дані, не перераховує планування й не змінює стан
карток. Для будь-якого запису карток і колод використовуйте
`POST /v1/agent/sql/execute`. SQL не може записувати `review_events` чи стан
планування FSRS; повторення записуються через `POST /v1/agent/reviews/submit`.

Поточні типи інструкцій:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

Наразі опубліковані такі логічні ресурси:

- `workspace`
- `cards`
- `decks`
- `review_events`

Примітки:

- `LIMIT` за замовчуванням дорівнює `100` і не може перевищувати `100`
- використовуйте `ORDER BY`, коли потрібна стабільна пагінація
- для дослідження схеми використовуйте `SHOW TABLES` або `DESCRIBE cards`
- кожен SQL-виклик обмежено одним робочим простором: тим, що вказано в `workspaceId` у тілі запиту, або вибраним

Приклад запиту:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Приклад запиту карток:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Приклад зміни даних:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

Також доступний віддалений MCP-сервер за адресою `https://mcp.nibomo.com/mcp` з OAuth 2.1 (Dynamic Client Registration + PKCE). Він має той самий поділ SQL на `sql_query` (суто читання) і `sql_execute` (запис), а також `list_workspaces`, `get_guide` та інструменти повторення `next_review_card`, `reveal_answer` і `submit_review`; див. [MCP-конектор](/docs/mcp-connector/).

### Безпека та межі доступу

SQL-інтерфейс — це ізольований діалект, правила якого забезпечує парсер, а не прямий доступ до PostgreSQL. Обмеження такі:

- **Закритий перелік дозволених інструкцій**: для читання лише `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` і `SELECT`, для запису — `INSERT`, `UPDATE` і `DELETE`. Усе інше відхиляється під час розбору.
- **Обмежений набір ресурсів**: інструкції можуть звертатися лише до ресурсів `workspace`, `cards`, `decks` і `review_events`.
- **Обмеження одним робочим простором**: кожну інструкцію обмежено одним доступним вам робочим простором — або `workspaceId` у тілі запиту, або вибраним робочим простором, без доступу до даних інших тенантів.
- **Суворі тіла запитів**: маршрути SQL і повторень відхиляють невідоме поле в тілі запиту, тому запит з опечаткою в назві `workspaceId` завершується помилкою, а не виконується у вибраному робочому просторі.
- **Ліміти**: до `100` рядків на інструкцію, до `50` інструкцій у пакеті й обмеження результату приблизно в `12k` токенів. Пакети змін застосовуються атомарно.
- **Поділ на читання й запис**: `sql_query` і `list_workspaces` працюють суто на читання (`readOnlyHint`) і ніколи не виправляють дані, не перераховують планування й не змінюють стан карток. `sql_execute` — єдиний SQL-інструмент для запису, і саме він змінює дані (`destructiveHint`); один виклик має містити або лише читання, або лише запис. SQL не може записувати `review_events` чи стан планування FSRS; повторення записує лише `POST /v1/agent/reviews/submit` (у MCP — `submit_review`).

## Посібники

`GET /v1/agent/guide/{topic}` повертає один довідковий посібник у `data.guide` — той самий текст, що й MCP-інструмент `get_guide`. Теми:

- `sql_dialect`: повна граматика SQL, ліміти та приклади
- `card_authoring`: контракт картки, теги, перевірка дублікатів і форматування
- `bulk_authoring`: як розбити велике завдання на запис і перевірити результат
- `review_flow`: цикл повторення та оцінювання

На невідому тему маршрут відповідає `400` зі списком підтримуваних тем. Отримайте відповідний посібник перед створенням карток, масовим записом чи повторенням, а після відхиленої інструкції перечитайте `sql_dialect`.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## Повторення

Маршрути повторення дають агенту змогу перевіряти знання учня по одній картці й зберігати кожну оцінку в розкладі FSRS картки. Вони приймають ті самі JSON-аргументи, що й MCP-інструменти повторення:

- `POST /v1/agent/reviews/next` повертає `card` з `cardId` і `frontText` або `card: null`, якщо нічого не призначено на повторення. Необов’язкові `tags` (будь-який із них) або `deckId` звужують чергу, але не обидва одночасно; запит без тіла також допустимий.
- `POST /v1/agent/reviews/reveal` вимагає `cardId` і повертає `backText` цієї картки.
- `POST /v1/agent/reviews/submit` вимагає `cardId`, згенерований клієнтом UUID `reviewId`, оцінку `rating` зі значенням `Again`, `Hard`, `Good` або `Easy` і часовий пояс учня у форматі IANA `reviewedTimeZone`. Сервер проставляє час повторення й повертає новий розклад картки, зокрема `dueAt`, `state`, `reps` і `lapses`.

Усі три маршрути приймають необов’язковий `workspaceId`. Збережіть `reviewId` перед надсиланням, а якщо не впевнені, що надсилання вдалося, повторіть ідентичний запит: друге повторення ніколи не буде записане. Маршрути повторення також можуть відповісти:

- `409 REVIEW_EVENT_CONFLICT`: повторення вже записане, а `error.details.reviewSchedule` містить поточний розклад картки.
- `409 REVIEW_ID_CARD_MISMATCH`: `reviewId` уже належить повторенню іншої картки, тому нічого не збережено; надішліть повторно з новим `reviewId`.
- `409 REVIEW_STALE`: збережений час повторення картки збігається з поточним часом сервера або пізніший за нього; повторіть іншу картку.
- `400 REVIEW_INPUT_INVALID`: аргумент відсутній, недійсний або не підтримується, зокрема `tags` разом із `deckId` або тег, який не використовується в робочому просторі.

Приклад надсилання:

```bash
curl -X POST https://api.nibomo.com/v1/agent/reviews/submit \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "cardId":"693c4863-28a2-45e8-8f55-9fa31fc95ff2",
    "reviewId":"429bb7cc-40fb-49f3-bb50-48a5db2826d1",
    "rating":"Good",
    "reviewedTimeZone":"Europe/Sofia"
  }'
```

## API для людей і синхронізації

Nibomo також має окремі API для клієнтів, якими користуються люди, і для синхронізації за принципом offline-first, але вони не є основним контрактом для зовнішніх агентів:

- браузерні сценарії використовують cookie на спільному домені та захист від CSRF
- клієнти offline-first використовують реалізовані маршрути синхронізації `/v1/workspaces/{workspaceId}/sync/push` і `/v1/workspaces/{workspaceId}/sync/pull`
- маршрути синхронізації відокремлені від інтерфейсу для зовнішніх агентів
