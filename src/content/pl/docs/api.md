---
title: Dokumentacja API
description: "Zewnętrzne API dla agentów: discovery, inicjalizacja OTP, konfiguracja obszaru roboczego oraz opublikowane interfejsy SQL do odczytu i zapisu."
---

## Przegląd

Ta strona opisuje obecny kontrakt Nibomo dla zewnętrznych agentów AI.

Jeśli Twój klient obsługuje MCP, [konektor MCP](/docs/mcp-connector/) jest
najprostszym sposobem połączenia i działa na tym samym interfejsie danych. Ta strona opisuje
kontrakt HTTP dla discovery, SQL, przewodników i powtórek, z którego korzystają agenci CLI.

Zacznij od kanonicznego punktu wejścia discovery:

```text
GET https://api.nibomo.com/v1/
```

Ta sama odpowiedź discovery jest dostępna również pod `GET /v1/agent`, ale głównym publicznym punktem wejścia jest `/v1/`.

Odpowiedź discovery wyjaśnia agentowi, jak:

- rozpocząć logowanie kodem OTP z e-maila
- wymienić kod OTP na długoterminowy klucz API
- wczytać kontekst konta
- utworzyć lub wybrać obszar roboczy
- kontynuować pracę przez opublikowany interfejs SQL
- pobierać przewodniki referencyjne i powtarzać karty jedna po drugiej

## Discovery w czasie działania i kod źródłowy

OpenAPI jest niedostępne. Cztery dawne adresy URL specyfikacji poniżej zwracają teraz zamiast schematu ten sam komunikat discovery w formacie JSON z `"openapiAvailable": false`:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

Do aktualnego discovery w czasie działania używaj `GET https://api.nibomo.com/v1/`. Trasy dostępne w czasie działania znajdziesz pod zwróconym `docs.discoveryUrl`, a szczegóły implementacji pod `docs.source.agentRoutesUrl`.

## Inicjalizacja uwierzytelniania

Inicjalizacja OTP odbywa się w usłudze uwierzytelniania:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

Przebieg wygląda tak:

1. Wywołaj `GET /v1/`.
2. Wyślij adres e-mail użytkownika do `send-code`.
3. Odczytaj `otpSessionToken` z odpowiedzi.
4. Poproś użytkownika o najnowszy 8-cyfrowy kod z e-maila.
5. Wywołaj `verify-code` z `code`, `otpSessionToken` i `label`.
6. Zapisz zwrócony klucz API poza pamięcią czatu.

Zalecana zmienna środowiskowa:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Uwierzytelnione żądania używają nagłówka:

```text
Authorization: ApiKey <key>
```

Przykładowa sekwencja inicjalizacji:

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

## Interfejs agenta po zalogowaniu

Po weryfikacji obecny interfejs agenta obejmuje:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (tylko odczyt)
- `POST /v1/agent/sql/execute` (zapis)
- `GET /v1/agent/guide/{topic}` (tylko odczyt)
- `POST /v1/agent/reviews/next` (tylko odczyt)
- `POST /v1/agent/reviews/reveal` (tylko odczyt)
- `POST /v1/agent/reviews/submit` (zapis)

Typowa inicjalizacja wygląda tak:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. W razie potrzeby `POST /v1/agent/workspaces` z `{"name":"Personal"}`
4. W razie potrzeby `POST /v1/agent/workspaces/{workspaceId}/select`
5. Używaj `POST /v1/agent/sql/query` do odczytu i `POST /v1/agent/sql/execute` do zapisu

Obszar roboczy wybiera się jawnie, osobno dla każdego połączenia kluczem API. Zamiast zgadywać kolejny krok, agenci powinni postępować zgodnie ze zwróconym tekstem `instructions` oraz korzystać z `docs.discoveryUrl` w przypadku tras dostępnych w czasie działania i z `docs.source.agentRoutesUrl` w przypadku szczegółów implementacji.

Trasy SQL i powtórek przyjmują też opcjonalne pole `workspaceId` w treści JSON. Kieruje ono pojedyncze wywołanie do wskazanego obszaru roboczego bez zmiany wyboru; pomiń je, aby użyć wybranego obszaru roboczego. Gdy nie ma ani wybranego obszaru, ani `workspaceId`, trasy zwracają `409 WORKSPACE_SELECTION_REQUIRED`.

## Interfejs SQL

`POST /v1/agent/sql/query` to interfejs wyłącznie do odczytu (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`), a `POST /v1/agent/sql/execute` to interfejs zapisu (`INSERT`, `UPDATE`, `DELETE`); pojedyncze wywołanie musi zawierać wyłącznie odczyty albo wyłącznie zapisy.

Interfejs jest celowo ograniczony i nie jest to pełny PostgreSQL. Ta dokumentacja obejmuje tylko
obsługiwany dialekt i nie jest opisem zgodności z PostgreSQL.

Żadna ścieżka odczytu nie naprawia danych, nie przelicza harmonogramu ani nie zmienia stanu kart. Używaj
`POST /v1/agent/sql/execute` do każdego zapisu kart i talii. SQL nie może zapisywać
`review_events` ani stanu harmonogramu FSRS; powtórki zapisuj przez
`POST /v1/agent/reviews/submit`.

Obecnie obsługiwane rodzaje instrukcji:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

Opublikowane zasoby logiczne obejmują obecnie:

- `workspace`
- `cards`
- `decks`
- `review_events`

Uwagi:

- `LIMIT` domyślnie wynosi `100` i nie może przekroczyć `100`
- używaj `ORDER BY`, gdy potrzebujesz stabilnej paginacji
- do poznania schematu używaj `SHOW TABLES` lub `DESCRIBE cards`
- każde wywołanie SQL dotyczy jednego obszaru roboczego: wskazanego przez `workspaceId` w treści żądania albo wybranego obszaru roboczego

Przykładowe żądanie:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Przykładowe zapytanie o karty:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Przykładowa modyfikacja:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

Dostępny jest też zdalny serwer MCP pod adresem `https://mcp.nibomo.com/mcp`, korzystający z OAuth 2.1 (Dynamic Client Registration + PKCE). Udostępnia ten sam podział SQL jako `sql_query` (wyłącznie odczyt) i `sql_execute` (zapis), a do tego `list_workspaces`, `get_guide` oraz narzędzia powtórek `next_review_card`, `reveal_answer` i `submit_review`; zobacz [konektor MCP](/docs/mcp-connector/).

### Bezpieczeństwo i zakres

Interfejs SQL to wydzielony dialekt, którego reguły egzekwuje parser, a nie surowy PostgreSQL. Zabezpieczenia są następujące:

- **Zamknięta lista dozwolonych instrukcji**: do odczytu tylko `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` i `SELECT`, a do zapisu `INSERT`, `UPDATE` i `DELETE`. Wszystko inne jest odrzucane już na etapie parsowania.
- **Ograniczone zasoby**: instrukcje mogą dotyczyć wyłącznie zasobów `workspace`, `cards`, `decks` i `review_events`.
- **Zakres jednego obszaru roboczego**: każda instrukcja dotyczy jednego obszaru roboczego, do którego masz dostęp — wskazanego przez `workspaceId` w treści żądania albo wybranego przez Ciebie — bez dostępu między tenantami.
- **Ścisłe treści żądań**: trasy SQL i powtórek odrzucają nieznane pole w treści żądania, więc błędnie zapisane `workspaceId` kończy się błędem, zamiast zostać wykonane na wybranym obszarze roboczym.
- **Limity**: do `100` wierszy na instrukcję, do `50` instrukcji na partię i limit wyniku około `12k` tokenów. Partie modyfikacji są stosowane atomowo.
- **Podział na odczyt i zapis**: `sql_query` i `list_workspaces` służą wyłącznie do odczytu (`readOnlyHint`) i nigdy nie naprawiają danych, nie przeliczają harmonogramu ani nie zmieniają stanu kart. `sql_execute` to jedyne narzędzie SQL do zapisu i wykonuje zapisy (`destructiveHint`); pojedyncze wywołanie musi zawierać wyłącznie odczyty albo wyłącznie zapisy. SQL nie może zapisywać `review_events` ani stanu harmonogramu FSRS; powtórkę zapisuje wyłącznie `POST /v1/agent/reviews/submit` (w MCP `submit_review`).

## Przewodniki

`GET /v1/agent/guide/{topic}` zwraca jeden przewodnik referencyjny w `data.guide` — tę samą treść, którą udostępnia narzędzie MCP `get_guide`. Tematy:

- `sql_dialect`: pełna gramatyka SQL, limity i przykłady
- `card_authoring`: kontrakt karty, tagi, sprawdzanie duplikatów i formatowanie
- `bulk_authoring`: dzielenie i weryfikacja dużego zadania zapisu
- `review_flow`: pętla powtórek i ocen

Nieznany temat zwraca `400` z listą obsługiwanych tematów. Pobierz odpowiedni przewodnik przed tworzeniem kart, zapisem masowym lub przeprowadzeniem powtórki, a po odrzuceniu instrukcji ponownie przeczytaj `sql_dialect`.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## Powtórki

Trasy powtórek pozwalają agentowi przepytywać osobę uczącą się karta po karcie i zapisywać każdą ocenę w harmonogramie FSRS karty. Przyjmują te same argumenty JSON co narzędzia powtórek MCP:

- `POST /v1/agent/reviews/next` zwraca `card` z `cardId` i `frontText` albo `card: null`, gdy nic nie czeka na powtórkę. Opcjonalne `tags` (wystarczy dowolny z tagów) lub `deckId` zawężają kolejkę, ale nigdy oba jednocześnie; żądanie bez treści jest prawidłowe.
- `POST /v1/agent/reviews/reveal` wymaga `cardId` i zwraca `backText` tej karty.
- `POST /v1/agent/reviews/submit` wymaga `cardId`, wygenerowanego przez klienta UUID `reviewId`, oceny `rating` o wartości `Again`, `Hard`, `Good` lub `Easy` oraz strefy czasowej IANA osoby uczącej się w `reviewedTimeZone`. Serwer nadaje czas powtórki i zwraca nowy harmonogram karty, w tym `dueAt`, `state`, `reps` i `lapses`.

Wszystkie trzy trasy przyjmują opcjonalne `workspaceId`. Zapisz `reviewId` przed wysłaniem, a jeśli nie wiadomo, czy wysłanie się powiodło, ponów je identycznym żądaniem; nigdy nie zapisze to drugiej powtórki. Trasy powtórek mogą też zwrócić:

- `409 REVIEW_EVENT_CONFLICT`: powtórka została już zapisana, a `error.details.reviewSchedule` zawiera bieżący harmonogram karty.
- `409 REVIEW_ID_CARD_MISMATCH`: `reviewId` identyfikuje już powtórkę innej karty, więc nic nie zostało zapisane; wyślij ponownie z nowym `reviewId`.
- `409 REVIEW_STALE`: zapisany czas powtórki karty jest równy bieżącemu czasowi serwera lub późniejszy; powtórz inną kartę.
- `400 REVIEW_INPUT_INVALID`: brakuje argumentu albo jest on nieprawidłowy lub nieobsługiwany, w tym `tags` połączone z `deckId` lub tag, którego obszar roboczy nie używa.

Przykładowe wysłanie powtórki:

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

## API dla ludzi i synchronizacji

Nibomo ma też osobne API dla klientów obsługiwanych przez ludzi i synchronizacji offline-first, ale nie stanowią one głównego kontraktu dla zewnętrznych agentów:

- przepływy w przeglądarce używają plików cookie we wspólnej domenie oraz ochrony CSRF
- klienci offline-first korzystają z zaimplementowanych tras synchronizacji `/v1/workspaces/{workspaceId}/sync/push` i `/v1/workspaces/{workspaceId}/sync/pull`
- trasy synchronizacji są oddzielone od interfejsu dla zewnętrznych agentów
