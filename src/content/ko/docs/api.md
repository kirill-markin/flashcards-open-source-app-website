---
title: API 레퍼런스
description: 디스커버리, OTP 초기 인증, 작업 공간 설정, 공개된 읽기·쓰기 SQL 인터페이스를 다루는 외부 에이전트 API.
---

## 개요

이 페이지는 Nibomo가 외부 AI 에이전트에 제공하는 현재 규약을 설명합니다.

클라이언트가 MCP를 지원한다면 [MCP 커넥터](/docs/mcp-connector/)로 연결하는 것이 가장 간단하며, 커넥터도 같은 데이터 인터페이스를 감싸서 제공합니다. 이 페이지는 CLI 에이전트가 사용하는 HTTP 디스커버리, SQL, 가이드, 복습 규약을 설명합니다.

공식 디스커버리 진입점에서 시작하세요.

```text
GET https://api.nibomo.com/v1/
```

같은 디스커버리 페이로드는 `GET /v1/agent`에서도 받을 수 있지만, 기본 공개 진입점은 `/v1/`입니다.

디스커버리 응답은 에이전트에게 다음 방법을 알려 줍니다.

- 이메일 OTP 로그인 시작
- OTP를 장기 API 키로 교환
- 계정 컨텍스트 불러오기
- 작업 공간 생성 또는 선택
- 공개된 SQL 인터페이스로 이어서 작업
- 참고 가이드를 가져오고 카드를 한 장씩 복습

## 런타임 디스커버리와 소스

OpenAPI는 제공되지 않습니다. 아래의 기존 명세 URL 네 개는 이제 스키마 대신 `"openapiAvailable": false`가 담긴 동일한 JSON 디스커버리 안내를 반환합니다.

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

현재 런타임 디스커버리에는 `GET https://api.nibomo.com/v1/`를 사용하세요. 런타임 경로는 반환된 `docs.discoveryUrl`을, 구현 세부 사항은 `docs.source.agentRoutesUrl`을 따라가세요.

## 인증 초기 설정

OTP 초기 인증은 인증 서비스에서 진행됩니다.

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

흐름은 다음과 같습니다.

1. `GET /v1/`를 호출합니다.
2. 사용자의 이메일을 `send-code`로 보냅니다.
3. 응답에서 `otpSessionToken`을 읽습니다.
4. 사용자에게 가장 최근에 받은 8자리 이메일 코드를 요청합니다.
5. `code`, `otpSessionToken`, `label`을 담아 `verify-code`를 호출합니다.
6. 반환된 API 키는 채팅 메모리가 아닌 곳에 저장합니다.

권장 환경 변수:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

인증된 요청에는 다음 헤더를 사용합니다.

```text
Authorization: ApiKey <key>
```

초기 인증 예시:

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

## 로그인 후 에이전트 인터페이스

인증을 마친 뒤 사용할 수 있는 현재 에이전트 인터페이스는 다음과 같습니다.

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (읽기 전용)
- `POST /v1/agent/sql/execute` (쓰기)
- `GET /v1/agent/guide/{topic}` (읽기 전용)
- `POST /v1/agent/reviews/next` (읽기 전용)
- `POST /v1/agent/reviews/reveal` (읽기 전용)
- `POST /v1/agent/reviews/submit` (쓰기)

일반적인 초기 설정 순서는 다음과 같습니다.

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. 필요하면 `{"name":"Personal"}`을 담아 `POST /v1/agent/workspaces` 호출
4. 필요하면 `POST /v1/agent/workspaces/{workspaceId}/select` 호출
5. 읽기에는 `POST /v1/agent/sql/query`, 쓰기에는 `POST /v1/agent/sql/execute` 사용

작업 공간 선택은 API 키 연결마다 명시적으로 이루어집니다. 에이전트는 다음 단계를 추측하지 말고, 반환된 `instructions` 텍스트와 런타임 경로용 `docs.discoveryUrl`, 그리고 구현 세부 사항용 `docs.source.agentRoutesUrl`을 따라야 합니다.

SQL 경로와 복습 경로는 JSON 본문에 선택적 `workspaceId`도 받습니다. 이 값은 선택 상태를 바꾸지 않고 해당 호출 한 번에만 그 작업 공간을 대상으로 삼습니다. 생략하면 선택된 작업 공간을 사용합니다. 선택된 작업 공간도 `workspaceId`도 없으면 `409 WORKSPACE_SELECTION_REQUIRED`로 응답합니다.

## SQL 인터페이스

`POST /v1/agent/sql/query`는 엄격한 읽기 전용 인터페이스(`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`)이고, `POST /v1/agent/sql/execute`는 쓰기 인터페이스(`INSERT`, `UPDATE`, `DELETE`)입니다. 한 번의 호출은 모두 읽기이거나 모두 쓰기여야 합니다.

이 인터페이스는 의도적으로 제한되어 있으며 완전한 PostgreSQL이 아닙니다. 이 문서는 지원되는 방언만 다루며, PostgreSQL 호환성 레퍼런스가 아닙니다.

어떤 읽기 경로도 데이터를 복구하거나, 스케줄을 다시 계산하거나, 카드 상태를 바꾸지 않습니다. 카드와 덱 쓰기에는 모두 `POST /v1/agent/sql/execute`를 사용하세요. SQL로는 `review_events`나 FSRS 스케줄링 상태를 쓸 수 없습니다. 복습은 `POST /v1/agent/reviews/submit`으로 기록하세요.

현재 지원되는 구문 종류:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

현재 공개된 논리 리소스:

- `workspace`
- `cards`
- `decks`
- `review_events`

참고:

- `LIMIT`의 기본값은 `100`이며 최대 `100`입니다
- 안정적인 페이지네이션이 필요하면 `ORDER BY`를 사용하세요
- 스키마를 확인하려면 `SHOW TABLES`나 `DESCRIBE cards`를 사용하세요
- 모든 SQL 호출은 작업 공간 하나로 범위가 한정됩니다. 본문의 `workspaceId`로 지정한 작업 공간이나 선택된 작업 공간입니다

요청 예시:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

카드 조회 예시:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

변경 예시:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

원격 MCP 서버도 `https://mcp.nibomo.com/mcp`에서 OAuth 2.1(Dynamic Client Registration + PKCE)로 제공됩니다. 이 서버도 SQL을 똑같이 `sql_query`(엄격한 읽기 전용)와 `sql_execute`(쓰기)로 나누어 제공하며, 그 밖에 `list_workspaces`, `get_guide`, 복습 도구 `next_review_card`, `reveal_answer`, `submit_review`를 제공합니다. 자세한 내용은 [MCP 커넥터](/docs/mcp-connector/)를 참고하세요.

### 안전성과 범위

SQL 인터페이스는 원시 PostgreSQL이 아니라 파서가 강제하는 제한된 방언입니다. 안전장치는 다음과 같습니다.

- **고정된 구문 허용 목록**: 읽기에는 `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`만, 쓰기에는 `INSERT`, `UPDATE`, `DELETE`만 허용됩니다. 그 밖의 구문은 파싱 단계에서 거부됩니다.
- **제한된 리소스**: 구문은 `workspace`, `cards`, `decks`, `review_events` 리소스에만 접근할 수 있습니다.
- **작업 공간 단위 범위**: 모든 구문은 접근 권한이 있는 하나의 작업 공간, 즉 요청 본문의 `workspaceId` 또는 선택된 작업 공간으로 범위가 한정되며, 테넌트 간 접근은 불가능합니다.
- **엄격한 요청 본문**: SQL 경로와 복습 경로는 알 수 없는 본문 필드를 거부하므로, `workspaceId`의 철자가 틀리면 선택된 작업 공간에서 실행되는 대신 실패합니다.
- **상한**: 구문당 최대 `100`행, 배치당 최대 `50`개 구문, 결과는 약 `12k` 토큰까지입니다. 변경 배치는 원자적으로 적용됩니다.
- **읽기/쓰기 분리**: `sql_query`와 `list_workspaces`는 엄격한 읽기 전용(`readOnlyHint`)이며 데이터를 복구하거나, 스케줄을 다시 계산하거나, 카드 상태를 바꾸지 않습니다. `sql_execute`는 유일한 SQL 쓰기 도구로 쓰기를 수행합니다(`destructiveHint`). 한 번의 호출은 모두 읽기이거나 모두 쓰기여야 합니다. SQL로는 `review_events`나 FSRS 스케줄링 상태를 쓸 수 없으며, 복습은 `POST /v1/agent/reviews/submit`(MCP의 `submit_review`)으로만 기록됩니다.

## 가이드

`GET /v1/agent/guide/{topic}`은 참고 가이드 하나를 `data.guide`에 담아 반환하며, MCP `get_guide` 도구가 제공하는 것과 같은 본문입니다. 주제:

- `sql_dialect`: 전체 SQL 문법, 제한, 예시
- `card_authoring`: 카드 규약, 태그, 중복 확인, 서식
- `bulk_authoring`: 대규모 쓰기 작업의 분할과 검증
- `review_flow`: 복습과 평가 루프

알 수 없는 주제에는 지원되는 주제 목록과 함께 `400`으로 응답합니다. 카드를 작성하거나, 대량으로 쓰거나, 복습을 진행하기 전에 해당 가이드를 가져오고, 구문이 거부되면 `sql_dialect`를 다시 읽으세요.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## 복습

복습 경로를 사용하면 에이전트가 학습자에게 카드를 한 장씩 물어보고, 각 평가를 카드의 FSRS 스케줄에 저장할 수 있습니다. 이 경로는 MCP 복습 도구와 같은 JSON 인수를 받습니다.

- `POST /v1/agent/reviews/next`는 `cardId`와 `frontText`가 담긴 `card`를 반환하고, 복습할 카드가 없으면 `card: null`을 반환합니다. 선택적 `tags`(하나라도 일치) 또는 `deckId`로 대기열을 좁힐 수 있지만 둘을 함께 쓸 수는 없습니다. 본문이 없는 요청도 유효합니다.
- `POST /v1/agent/reviews/reveal`은 `cardId`가 필요하며 해당 카드의 `backText`를 반환합니다.
- `POST /v1/agent/reviews/submit`에는 `cardId`, 클라이언트가 생성한 `reviewId` UUID, `Again`, `Hard`, `Good`, `Easy` 중 하나인 `rating`, 학습자의 IANA `reviewedTimeZone`이 필요합니다. 서버가 복습 시각을 기록하고 `dueAt`, `state`, `reps`, `lapses`를 포함한 카드의 새 스케줄을 반환합니다.

세 경로 모두 선택적 `workspaceId`를 받습니다. 제출하기 전에 `reviewId`를 저장해 두고, 결과가 불확실한 제출은 똑같은 요청으로 다시 시도하세요. 복습이 두 번 기록되는 일은 없습니다. 복습 경로는 다음과 같이 응답할 수도 있습니다.

- `409 REVIEW_EVENT_CONFLICT`: 복습이 이미 기록되었으며, `error.details.reviewSchedule`에 카드의 현재 스케줄이 담겨 있습니다.
- `409 REVIEW_ID_CARD_MISMATCH`: `reviewId`가 이미 다른 카드의 복습을 가리키므로 아무것도 저장되지 않았습니다. 새 `reviewId`로 다시 제출하세요.
- `409 REVIEW_STALE`: 카드에 저장된 복습 시각이 현재 서버 시각과 같거나 그 이후입니다. 다른 카드를 복습하세요.
- `400 REVIEW_INPUT_INVALID`: 인수가 없거나, 유효하지 않거나, 지원되지 않습니다. `tags`와 `deckId`를 함께 쓴 경우나 작업 공간에서 쓰지 않는 태그를 지정한 경우도 포함됩니다.

제출 예시:

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

## 사람용 API와 동기화 API

Nibomo에는 사람이 쓰는 클라이언트와 오프라인 우선 동기화를 위한 별도의 API도 있지만, 외부 에이전트용 주 규약은 아닙니다.

- 브라우저 흐름은 공유 도메인 쿠키와 CSRF 보호를 사용합니다
- 오프라인 우선 클라이언트는 `/v1/workspaces/{workspaceId}/sync/push`와 `/v1/workspaces/{workspaceId}/sync/pull` 아래에 구현된 동기화 경로를 사용합니다
- 동기화 경로는 외부 에이전트 인터페이스와 분리되어 있습니다
