---
title: Konektor MCP
description: "Połącz Nibomo przez katalog Claude albo skonfiguruj jego zdalny serwer MCP w Claude Code i innych klientach, z OAuth i ośmioma narzędziami do fiszek i powtórek."
---

## Połączenie przez katalog Claude

Otwórz [Nibomo w katalogu Claude](https://claude.ai/directory/nibomo), połącz konektor, zaloguj się na swoje konto Nibomo i zatwierdź dostęp. Nibomo figuruje w katalogu jako konektor społecznościowy (Community).

W Claude Code użyj tego samego konta z subskrypcją Claude i po połączeniu sprawdź `/mcp`. Jeśli logujesz się kluczem API lub przez zewnętrznego dostawcę, konektory z claude.ai nie wczytają się automatycznie.

Możesz też skonfigurować Claude Code bezpośrednio. Uruchom poniższe polecenie, a następnie otwórz `/mcp` w Claude Code i dokończ autoryzację w przeglądarce:

```bash
claude mcp add --transport http nibomo https://mcp.nibomo.com/mcp
```

[Dokumentacja MCP w Claude Code](https://code.claude.com/docs/en/mcp#use-mcp-servers-from-claudeai).

## Przegląd

Nibomo udostępnia zdalny serwer MCP (Model Context Protocol), dzięki któremu klienci MCP i
agenci AI mogą odczytywać Twoje karty zaplanowane do powtórki, przepytywać Cię z nich po jednym pytaniu
oraz tworzyć i edytować za Ciebie karty i talie.

Agenci mogą łączyć się na dwa sposoby: przez ten serwer MCP (najlepiej dla klientów MCP takich jak
Claude czy Cursor) albo przez [adres discovery Agents API](/docs/api/) w przypadku agentów
CLI. Obie drogi prowadzą do tego samego zakresu danych użytkownika; ta strona opisuje serwer MCP.

Połącz się z nim pod adresem:

```text
https://mcp.nibomo.com/mcp
```

Transportem jest Streamable HTTP. Serwer udostępnia osiem narzędzi do wykrywania obszarów roboczych, odczytu i zapisu kart i talii, przewodników referencyjnych, powtórek oraz sprawdzania wykorzystania konta.

## Jak dodać go w swoim kliencie

Większość klientów dodaje zdalny serwer MCP jako konektor niestandardowy:

1. Otwórz w swoim kliencie ustawienia konektorów lub serwerów MCP.
2. Dodaj konektor niestandardowy i wklej adres URL serwera `https://mcp.nibomo.com/mcp`.
3. W klientach interaktywnych zatwierdź dostęp w przeglądarce, gdy pojawi się prośba. Serwer
   używa OAuth 2.1 z Dynamic Client Registration, więc nie trzeba wklejać sekretu klienta
   ani wcześniej rejestrować aplikacji.
4. W trybie bez interfejsu graficznego lub w CLI zamiast autoryzacji w przeglądarce ustaw nagłówek
   `Authorization: Bearer fca_…` ze swoim kluczem API agenta.

Po autoryzacji wywołaj raz `list_workspaces`, aby wybrać obszar roboczy, a następnie używaj
`sql_query` do odczytu i `sql_execute` do zapisu kart i talii. Aby przeprowadzić powtórkę, wywołaj
`next_review_card`, potem `reveal_answer`, a na końcu `submit_review`.

## Narzędzia

Serwer udostępnia osiem narzędzi. Odczyt i zapis są celowo rozdzielone, aby pojedyncze
narzędzie nigdy nie łączyło operacji bezpiecznych i destrukcyjnych.

- `get_usage_limits` — wyłącznie do odczytu: plan konta, limity i bieżące miesięczne wykorzystanie AI; nie odczytuje ani nie zmienia kart.
- `sql_query` — dostęp wyłącznie do odczytu do Twoich kart i talii (`SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` — dostęp do zapisu Twoich kart i talii (`INSERT`, `UPDATE`,
  `DELETE`) jako atomowa partia.
- `list_workspaces` — wyłącznie do odczytu: lista obszarów roboczych, do których masz dostęp;
  dla każdego podaje
  `workspaceId`, nazwę, liczbę aktywnych kart, ostatnią aktywność oraz informację, czy jest on
  obecnie wybranym obszarem domyślnym. Zwróconego `workspaceId` używaj jako opcjonalnego
  argumentu `workspaceId` narzędzi SQL i powtórek.
- `get_guide` — wyłącznie do odczytu: przewodnik referencyjny na jeden temat: `sql_dialect`,
  `card_authoring`, `bulk_authoring` lub `review_flow`. Nie odczytuje danych obszaru roboczego.
- `next_review_card` — wyłącznie do odczytu: zwraca następną kartę do powtórki, tylko przód,
  w tej samej kolejności co w aplikacjach. Opcjonalne `tags` lub `deckId` zawężają
  kolejkę.
- `reveal_answer` — wyłącznie do odczytu: zwraca tył jednej karty, gdy osoba ucząca się
  podjęła już próbę odpowiedzi na pytanie z przodu.
- `submit_review` — zapisuje jedną ocenę `Again`, `Hard`, `Good` lub `Easy` i
  przesuwa harmonogram FSRS karty.

Interfejs SQL to celowo ograniczony dialekt, a nie pełny PostgreSQL.
Ta dokumentacja obejmuje tylko obsługiwany dialekt i nie jest opisem zgodności
z PostgreSQL. Instrukcje mogą dotyczyć wyłącznie zasobów `workspace`, `cards`, `decks` i
`review_events`, każda instrukcja jest ograniczona do Twojego własnego obszaru roboczego, a
odczyt i zapis są ograniczone do `100` wierszy na instrukcję.

## Powtórki

Narzędzia powtórek pozwalają agentowi przepytywać osobę uczącą się karta po karcie i zapisywać każdą
ocenę w harmonogramie FSRS karty:

1. `next_review_card` zwraca `cardId` i `frontText` albo `card: null`, gdy
   nic nie czeka na powtórkę.
2. Gdy osoba ucząca się odpowie, `reveal_answer` zwraca `backText` tej karty.
3. `submit_review` przyjmuje `cardId`, wygenerowany przez klienta UUID `reviewId`,
   `rating` oraz strefę czasową IANA osoby uczącej się w `reviewedTimeZone`. Serwer nadaje
   czas powtórki i zwraca nowy harmonogram karty.

Jeśli nie wiadomo, czy wysłanie się powiodło, ponów je z tym samym `reviewId`; nigdy nie zapisze to drugiej
powtórki. Wysłanie może też zwrócić:

- `409 REVIEW_EVENT_CONFLICT` — powtórka została już zapisana, a szczegóły błędu
  zawierają bieżący harmonogram karty.
- `409 REVIEW_ID_CARD_MISMATCH` — `reviewId` identyfikuje już powtórkę
  innej karty, więc nic nie zostało zapisane; wyślij ponownie z nowym `reviewId`.
- `409 REVIEW_STALE` — zapisany czas powtórki karty jest równy bieżącemu czasowi
  serwera lub późniejszy; powtórz inną kartę.

Powtórki są zapisywane wyłącznie przez `submit_review`: SQL nie może zapisywać
`review_events` ani stanu harmonogramu FSRS. Pełne zasady powtórek i ocen poznasz, wywołując `get_guide` z tematem
`review_flow`.

## Kontrakt karty

Każda karta podlega jednemu kontraktowi, na którym opierają się narzędzia:

- `front_text` zawiera wyłącznie pytanie lub zadanie do powtórki i nigdy nie zawiera odpowiedzi.
- `back_text` zawiera odpowiedź, opcjonalnie z konkretnym przykładem.

Agenci tworzący karty przez `sql_execute` przestrzegają tego kontraktu, więc
utworzone przez nich karty od razu nadają się do nauki z powtórkami rozłożonymi w czasie.

## Uwierzytelnianie

Dwie ścieżki autoryzacji prowadzą do tego samego zakresu danych użytkownika.

### OAuth 2.1 (interaktywni klienci z konektorami)

Serwer implementuje przepływ z kodem autoryzacji, PKCE i Dynamic Client
Registration. Dodaj adres URL MCP jako konektor niestandardowy i zatwierdź dostęp w przeglądarce;
nie trzeba wcześniej przekazywać sekretu klienta. Discovery działa standardowo:

- Metadane chronionego zasobu:
  `https://mcp.nibomo.com/.well-known/oauth-protected-resource`
- Metadane serwera autoryzacji:
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### Klucz API (bez interfejsu graficznego i CLI)

Uzyskaj długoterminowy klucz API agenta `fca_` przez logowanie kodem OTP z e-maila
opisane w [dokumentacji API](/docs/api/), a następnie wysyłaj go jako token Bearer:

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

To ten sam klucz, który przyjmuje interfejs REST dla agentów, i nie wymaga on przeglądarki
ani przekierowań OAuth.

Kanonicznym, czytelnym maszynowo opisem obu ścieżek jest odpowiedź discovery
pod adresem `https://api.nibomo.com/v1/` (z kopią pod `/v1/agent`).

## Bezpieczeństwo i zakres

Narzędzia SQL można bezpiecznie zatwierdzić, ponieważ ich interfejs to zamknięty dialekt
egzekwowany przez parser, a nie dowolny dostęp do bazy danych:

- **Zamknięta lista dozwolonych instrukcji**: `sql_query` przyjmuje tylko `SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS` i `SELECT`; `sql_execute` przyjmuje tylko `INSERT`,
  `UPDATE` i `DELETE`. Wszystko inne jest odrzucane już na etapie parsowania.
- **Ograniczone zasoby**: instrukcje mogą dotyczyć wyłącznie `workspace`, `cards`, `decks`
  i `review_events`.
- **Zakres jednego obszaru roboczego**: każda instrukcja SQL i każda powtórka dotyczy jednego
  obszaru roboczego, do którego masz dostęp — wskazanego przez przekazane `workspaceId` albo Twojego wybranego
  obszaru domyślnego — bez dostępu między tenantami.
- **Ścisłe argumenty**: każde narzędzie odrzuca nieznany argument, więc błędnie zapisane
  `workspaceId` kończy się błędem, zamiast zostać wykonane na Twoim domyślnym obszarze roboczym.
- **Limity**: do `100` wierszy na instrukcję, do `50` instrukcji na partię i
  limit wyniku około `12k` tokenów. Partie modyfikacji są stosowane atomowo.
- **Podział na odczyt i zapis**: `get_usage_limits`, `sql_query`, `list_workspaces`, `get_guide`,
  `next_review_card` i `reveal_answer` służą wyłącznie do odczytu (`readOnlyHint`)
  i nigdy nie naprawiają danych, nie przeliczają harmonogramu ani nie zmieniają stanu kart.
  `sql_execute` i `submit_review` to jedyne narzędzia do zapisu (`destructiveHint`):
  `sql_execute` zapisuje karty i talie, a `submit_review` zapisuje powtórkę i
  przesuwa harmonogram jej karty.

Cały stack — aplikacja, backend i infrastruktura — jest open source i można go
[hostować samodzielnie](/docs/self-hosting/), więc możesz używać tego samego konektora z
własnym wdrożeniem.
