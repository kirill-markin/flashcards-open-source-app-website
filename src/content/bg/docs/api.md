---
title: Справочник на API
description: API за външни агенти за откриване, първоначално удостоверяване с OTP, настройка на работно пространство и публикуваните SQL интерфейси за четене и запис.
---

## Общ преглед

Тази страница описва актуалния договор на Nibomo за външни ИИ агенти.

Ако клиентът ви поддържа MCP, [MCP конекторът](/docs/mcp-connector/) е
най-простият начин за свързване и обвива същия интерфейс към данните. Тази страница описва
HTTP договора за откриване, SQL, ръководства и преговор, който използват CLI агентите.

Започнете от основната входна точка за откриване:

```text
GET https://api.nibomo.com/v1/
```

Същият отговор за откриване е достъпен и на `GET /v1/agent`, но `/v1/` е основната публична входна точка.

Отговорът за откриване казва на агента как да:

- започне вход по имейл с OTP
- замени OTP кода с дългосрочен API ключ
- зареди контекста на акаунта
- създаде или избере работно пространство
- продължи през публикувания SQL интерфейс
- изтегля справочни ръководства и преговаря карти една по една

## Откриване по време на работа и изходен код

OpenAPI не е наличен. Четирите предишни URL адреса на спецификацията по-долу вече връщат същото JSON известие за откриване с `"openapiAvailable": false` вместо схема:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

За актуално откриване по време на работа използвайте `GET https://api.nibomo.com/v1/`. Следвайте върнатия `docs.discoveryUrl` за маршрутите по време на работа и `docs.source.agentRoutesUrl` за подробностите по реализацията.

## Първоначално удостоверяване

Първоначалното удостоверяване с OTP се извършва в услугата за удостоверяване:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

Процесът е следният:

1. Извикайте `GET /v1/`.
2. Изпратете имейла на потребителя към `send-code`.
3. Прочетете `otpSessionToken` от отговора.
4. Поискайте от потребителя последния 8-цифрен код от имейла.
5. Извикайте `verify-code` с `code`, `otpSessionToken` и `label`.
6. Запазете върнатия API ключ извън паметта на чата.

Препоръчителна променлива на средата:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Заявките с удостоверяване използват:

```text
Authorization: ApiKey <key>
```

Примерна последователност за първоначално удостоверяване:

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

## Интерфейс за агенти след вход

След потвърждението текущият интерфейс за агенти е:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (само за четене)
- `POST /v1/agent/sql/execute` (запис)
- `GET /v1/agent/guide/{topic}` (само за четене)
- `POST /v1/agent/reviews/next` (само за четене)
- `POST /v1/agent/reviews/reveal` (само за четене)
- `POST /v1/agent/reviews/submit` (запис)

Обичайната първоначална настройка изглежда така:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. При нужда `POST /v1/agent/workspaces` с `{"name":"Personal"}`
4. При нужда `POST /v1/agent/workspaces/{workspaceId}/select`
5. Използвайте `POST /v1/agent/sql/query` за четене и `POST /v1/agent/sql/execute` за запис

Работното пространство се избира изрично за всяка връзка с API ключ. Вместо да гадаят следващата стъпка, агентите трябва да следват върнатия текст `instructions` и `docs.discoveryUrl` за маршрутите по време на работа, както и `docs.source.agentRoutesUrl` за подробностите по реализацията.

SQL маршрутите и маршрутите за преговор приемат и незадължителен `workspaceId` в JSON тялото. Той насочва едно извикване към това работно пространство, без да променя избора; пропуснете го, за да се използва избраното работно пространство. Ако няма нито избор, нито `workspaceId`, те отговарят с `409 WORKSPACE_SELECTION_REQUIRED`.

## SQL интерфейс

`POST /v1/agent/sql/query` е интерфейсът строго само за четене (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`), а `POST /v1/agent/sql/execute` е интерфейсът за запис (`INSERT`, `UPDATE`, `DELETE`); едно извикване трябва да съдържа само четене или само запис.

Той е умишлено ограничен и не е пълен PostgreSQL. Тази документация описва само
поддържания диалект и не е справочник за съвместимост с PostgreSQL.

Никоя операция за четене не поправя данни, не преизчислява планирането и не променя състоянието на картите. Използвайте
`POST /v1/agent/sql/execute` за всеки запис на карти и тестета. SQL не може да записва
`review_events` или състоянието на планирането по FSRS; записвайте преговорите чрез
`POST /v1/agent/reviews/submit`.

Текущи видове заявки:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

Публикуваните логически ресурси в момента включват:

- `workspace`
- `cards`
- `decks`
- `review_events`

Бележки:

- `LIMIT` по подразбиране е `100` и не може да надвишава `100`
- използвайте `ORDER BY`, когато ви трябва стабилно странициране
- използвайте `SHOW TABLES` или `DESCRIBE cards`, за да разгледате схемата
- всяко SQL извикване е ограничено до едно работно пространство: `workspaceId` от тялото или избраното работно пространство

Примерна заявка:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Примерна заявка за карти:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Примерна промяна:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

Достъпен е и отдалечен MCP сървър на `https://mcp.nibomo.com/mcp`, който използва OAuth 2.1 (Dynamic Client Registration + PKCE). Той предоставя същото разделение на SQL като `sql_query` (строго само за четене) и `sql_execute` (запис), плюс `list_workspaces`, `get_guide` и инструментите за преговор `next_review_card`, `reveal_answer` и `submit_review`; вижте [MCP конектора](/docs/mcp-connector/).

### Безопасност и обхват

SQL интерфейсът е затворен диалект, чиито правила се налагат от парсера, а не суров PostgreSQL. Предпазните мерки са:

- **Затворен списък с разрешени заявки**: само `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` и `SELECT` за четене и `INSERT`, `UPDATE` и `DELETE` за запис. Всичко друго се отхвърля още при синтактичния анализ.
- **Ограничени ресурси**: заявките могат да засягат само ресурсите `workspace`, `cards`, `decks` и `review_events`.
- **Ограничение до работно пространство**: всяка заявка е ограничена до едно работно пространство, до което имате достъп — `workspaceId` в тялото на заявката или избраното от вас работно пространство, без достъп до данни на други наематели (tenants).
- **Строги тела на заявките**: SQL маршрутите и маршрутите за преговор отхвърлят непознато поле в тялото, така че сгрешен `workspaceId` води до грешка, вместо заявката да се изпълни върху избраното работно пространство.
- **Лимити**: до `100` реда на заявка, до `50` заявки в пакет и резултат до около `12k` токена. Пакетите с промени се прилагат атомарно.
- **Разделение на четене и запис**: `sql_query` и `list_workspaces` са строго само за четене (`readOnlyHint`) и никога не поправят данни, не преизчисляват планирането и не променят състоянието на картите. `sql_execute` е единственият SQL инструмент за запис и извършва записи (`destructiveHint`); едно извикване трябва да съдържа само четене или само запис. SQL не може да записва `review_events` или състоянието на планирането по FSRS; само `POST /v1/agent/reviews/submit` (MCP `submit_review`) записва преговор.

## Ръководства

`GET /v1/agent/guide/{topic}` връща едно справочно ръководство в `data.guide` — същото съдържание, което връща MCP инструментът `get_guide`. Теми:

- `sql_dialect`: пълната SQL граматика, ограниченията и примери
- `card_authoring`: договорът за картите, етикетите, проверките за дубликати и форматирането
- `bulk_authoring`: разделяне и проверка на голяма задача за запис
- `review_flow`: цикълът на преговор и оценяване

Непозната тема връща `400` със списъка на поддържаните теми. Изтеглете съответното ръководство, преди да създавате карти, да записвате масово или да провеждате преговор, и прочетете отново `sql_dialect` след отхвърлена заявка.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## Преговори

Маршрутите за преговор позволяват на агента да изпитва учащия карта по карта и да записва всяка оценка в графика на картата по FSRS. Те приемат същите JSON аргументи като MCP инструментите за преговор:

- `POST /v1/agent/reviews/next` връща `card` с `cardId` и `frontText` или `card: null`, когато няма карти за преговор. Незадължителните `tags` (карта с който и да е от етикетите) или `deckId` стесняват опашката, но никога и двете едновременно; заявка без тяло е валидна.
- `POST /v1/agent/reviews/reveal` изисква `cardId` и връща `backText` на тази карта.
- `POST /v1/agent/reviews/submit` изисква `cardId`, генериран от клиента UUID `reviewId`, `rating` със стойност `Again`, `Hard`, `Good` или `Easy` и IANA `reviewedTimeZone` на учащия. Сървърът записва времето на преговора и връща новия график на картата, включително `dueAt`, `state`, `reps` и `lapses`.

И трите маршрута приемат незадължителния `workspaceId`. Запазете `reviewId`, преди да изпратите преговора; ако не сте сигурни дали изпращането е успяло, повторете го със същата заявка — повторението никога не записва втори преговор. Маршрутите за преговор могат да отговорят и с:

- `409 REVIEW_EVENT_CONFLICT`: преговорът вече е записан, а `error.details.reviewSchedule` съдържа текущия график на картата.
- `409 REVIEW_ID_CARD_MISMATCH`: `reviewId` вече обозначава преговор на друга карта, затова нищо не е записано; изпратете отново с нов `reviewId`.
- `409 REVIEW_STALE`: записаното време на преговор на картата е равно на текущото време на сървъра или по-късно; преговорете друга карта.
- `400 REVIEW_INPUT_INVALID`: аргумент липсва, е невалиден или не се поддържа, включително `tags` заедно с `deckId` или етикет, който работното пространство не използва.

Примерно изпращане:

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

## API за хора и за синхронизация

Nibomo включва и отделни API за клиенти, използвани от хора, и за синхронизация с приоритет на офлайн работата, но те не са основният договор за външни агенти:

- браузърните потоци използват бисквитки на общия домейн и защита срещу CSRF
- клиентите с приоритет на офлайн работата използват реализираните маршрути за синхронизация `/v1/workspaces/{workspaceId}/sync/push` и `/v1/workspaces/{workspaceId}/sync/pull`
- маршрутите за синхронизация са отделени от интерфейса за външни агенти
