---
title: MCP 커넥터
description: "Claude 디렉터리에서 Nibomo를 연결하거나, Claude Code와 다른 클라이언트에 원격 MCP 서버를 설정하세요. OAuth와 플래시카드·복습용 도구 여덟 개를 제공합니다."
---

## Claude 디렉터리에서 연결하기

[Claude 디렉터리의 Nibomo](https://claude.ai/directory/nibomo)를 열어 연결하고, Nibomo 계정에 로그인한 다음 접근 권한을 승인하세요. Nibomo는 커뮤니티 커넥터로 등록되어 있습니다.

Claude Code에서는 같은 Claude 구독 계정을 사용하고, 연결한 뒤 `/mcp`를 확인하세요. API 키나 서드파티 제공업체 계정으로 로그인하면 claude.ai 커넥터를 자동으로 불러오지 않습니다.

Claude Code를 직접 설정할 수도 있습니다. 아래 명령을 실행한 다음 Claude Code에서 `/mcp`를 열고 브라우저에서 승인을 완료하세요.

```bash
claude mcp add --transport http nibomo https://mcp.nibomo.com/mcp
```

[Claude Code MCP 문서](https://code.claude.com/docs/en/mcp#use-mcp-servers-from-claudeai).

## 개요

Nibomo는 원격 MCP(Model Context Protocol) 서버를 운영합니다. MCP 클라이언트와 AI 에이전트는 이 서버로 복습할 때가 된 카드를 읽고, 한 번에 한 문제씩 함께 복습하고, 카드와 덱을 대신 만들거나 수정할 수 있습니다.

에이전트는 두 가지 방법으로 연결할 수 있습니다. 이 MCP 서버를 쓰는 방법(Claude나 Cursor 같은 MCP 클라이언트에 가장 적합)과, CLI 에이전트를 위한 [Agents API 디스커버리 URL](/docs/api/)을 쓰는 방법입니다. 두 방법 모두 사용자별로 같은 데이터 인터페이스에 접근하며, 이 페이지는 MCP 서버를 다룹니다.

연결 주소:

```text
https://mcp.nibomo.com/mcp
```

전송 방식은 Streamable HTTP입니다. 서버는 작업 공간 조회, 카드와 덱 읽기·쓰기, 참고 가이드, 복습, 계정 사용량을 위한 도구 여덟 개를 제공합니다.

## 클라이언트에 추가하는 방법

대부분의 클라이언트는 원격 MCP 서버를 사용자 지정 커넥터로 추가합니다.

1. 클라이언트의 커넥터 또는 MCP 서버 설정을 엽니다.
2. 사용자 지정 커넥터를 추가하고 서버 URL `https://mcp.nibomo.com/mcp`를 붙여 넣습니다.
3. 대화형 클라이언트에서는 안내가 나오면 브라우저에서 승인합니다. 서버가 Dynamic Client Registration을 지원하는 OAuth 2.1을 사용하므로, 붙여 넣을 클라이언트 시크릿도 없고 미리 등록할 앱도 없습니다.
4. 헤드리스 환경이나 CLI에서는 브라우저 흐름 대신 에이전트 API 키로 `Authorization: Bearer fca_…` 헤더를 설정합니다.

승인한 뒤에는 `list_workspaces`를 한 번 호출해 작업 공간을 고르고, 읽기에는 `sql_query`, 카드와 덱 쓰기에는 `sql_execute`를 사용하세요. 복습하려면 `next_review_card`, `reveal_answer`, `submit_review` 순서로 호출합니다.

## 도구

서버는 도구 여덟 개를 제공합니다. 하나의 도구가 안전한 작업과 파괴적인 작업을 섞지 않도록 읽기와 쓰기를 일부러 나눠 두었습니다.

- `get_usage_limits` — 계정 요금제, 한도, 이번 달 AI 사용량을 보여 주는 엄격한 읽기 전용 도구입니다. 카드를 읽거나 바꾸지 않습니다.
- `sql_query` — 카드와 덱에 대한 엄격한 읽기 전용 접근(`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` — 카드와 덱에 대한 쓰기 접근(`INSERT`, `UPDATE`, `DELETE`). 원자적 배치로 실행됩니다.
- `list_workspaces` — 접근할 수 있는 작업 공간을 보여 주는 엄격한 읽기 전용 목록입니다. 각 항목에는 `workspaceId`, 이름, 활성 카드 수, 마지막 활동, 현재 선택된 기본 작업 공간인지 여부가 담깁니다. SQL 도구와 복습 도구의 선택적 `workspaceId` 인수에는 여기서 반환된 `workspaceId`를 사용하세요.
- `get_guide` — 한 주제에 대한 엄격한 읽기 전용 참고 가이드: `sql_dialect`, `card_authoring`, `bulk_authoring`, `review_flow`. 작업 공간 데이터는 읽지 않습니다.
- `next_review_card` — 엄격한 읽기 전용: 앱과 같은 대기열 순서로 다음에 복습할 카드의 앞면만 반환합니다. 선택적 `tags` 또는 `deckId`로 대기열을 좁힐 수 있습니다.
- `reveal_answer` — 엄격한 읽기 전용: 학습자가 앞면에 답해 본 뒤 카드 한 장의 뒷면을 반환합니다.
- `submit_review` — `Again`, `Hard`, `Good`, `Easy` 중 하나의 평가를 기록하고 카드의 FSRS 스케줄을 갱신합니다.

SQL 인터페이스는 의도적으로 제한된 방언이며 완전한 PostgreSQL이 아닙니다. 이 문서는 지원되는 방언만 다루며, PostgreSQL 호환성 레퍼런스가 아닙니다. 구문은 `workspace`, `cards`, `decks`, `review_events` 리소스에만 접근할 수 있고, 모든 구문은 사용자 자신의 작업 공간으로 범위가 한정되며, 읽기와 쓰기 모두 구문당 `100`행으로 제한됩니다.

## 복습

복습 도구를 사용하면 에이전트가 학습자에게 카드를 한 장씩 물어보고, 각 평가를 카드의 FSRS 스케줄에 저장할 수 있습니다.

1. `next_review_card`는 `cardId`와 `frontText`를 반환하고, 복습할 카드가 없으면 `card: null`을 반환합니다.
2. 학습자가 답하면 `reveal_answer`가 해당 카드의 `backText`를 반환합니다.
3. `submit_review`는 `cardId`, 클라이언트가 생성한 `reviewId` UUID, `rating`, 학습자의 IANA `reviewedTimeZone`을 받습니다. 서버가 복습 시각을 기록하고 카드의 새 스케줄을 반환합니다.

결과가 불확실한 제출은 같은 `reviewId`로 다시 시도하세요. 복습이 두 번 기록되는 일은 없습니다. 제출 시 다음과 같이 응답할 수도 있습니다.

- `409 REVIEW_EVENT_CONFLICT` — 복습이 이미 기록되었으며, 오류 세부 정보에 카드의 현재 스케줄이 담겨 있습니다.
- `409 REVIEW_ID_CARD_MISMATCH` — `reviewId`가 이미 다른 카드의 복습을 가리키므로 아무것도 저장되지 않았습니다. 새 `reviewId`로 다시 제출하세요.
- `409 REVIEW_STALE` — 카드에 저장된 복습 시각이 현재 서버 시각과 같거나 그 이후입니다. 다른 카드를 복습하세요.

복습은 `submit_review`로만 기록됩니다. SQL로는 `review_events`나 FSRS 스케줄링 상태를 쓸 수 없습니다. 복습과 평가 규칙 전체를 보려면 주제 `review_flow`로 `get_guide`를 호출하세요.

## 카드 규약

모든 카드는 하나의 규약을 따르며, 도구는 이 규약을 전제로 동작합니다.

- `front_text`에는 질문이나 복습 프롬프트만 들어가며, 답은 절대 들어가지 않습니다.
- `back_text`에는 답이 들어가며, 필요하면 구체적인 예시를 함께 넣을 수 있습니다.

`sql_execute`로 카드를 만드는 에이전트는 이 규약을 따르므로, 만들어진 카드는 바로 간격 반복으로 복습할 수 있습니다.

## 인증

두 가지 인증 경로 모두 사용자별로 같은 데이터 인터페이스에 접근합니다.

### OAuth 2.1 (대화형 커넥터 클라이언트)

서버는 PKCE와 Dynamic Client Registration을 사용하는 인가 코드 흐름을 구현합니다. MCP URL을 사용자 지정 커넥터로 추가하고 브라우저에서 승인하면 됩니다. 미리 공유하는 클라이언트 시크릿은 없습니다. 디스커버리는 표준 방식입니다.

- 보호된 리소스 메타데이터:
  `https://mcp.nibomo.com/.well-known/oauth-protected-resource`
- 인가 서버 메타데이터:
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### API 키 (헤드리스와 CLI)

[API 레퍼런스](/docs/api/)에 설명된 이메일 OTP 로그인 흐름으로 장기 `fca_` 에이전트 API 키를 발급받은 뒤, Bearer 토큰으로 보내세요.

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

REST 에이전트 인터페이스가 받는 것과 같은 키이며, 브라우저나 OAuth 왕복이 필요 없습니다.

두 경로를 기계가 읽을 수 있게 기술한 공식 문서는 `https://api.nibomo.com/v1/`의 디스커버리 페이로드입니다(`/v1/agent`에도 같은 내용이 있습니다).

## 안전성과 범위

이 인터페이스는 임의의 데이터베이스 접근이 아니라 파서가 강제하는 제한된 방언이므로, SQL 도구는 안심하고 승인해도 됩니다.

- **고정된 구문 허용 목록**: `sql_query`는 `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`만, `sql_execute`는 `INSERT`, `UPDATE`, `DELETE`만 받습니다. 그 밖의 구문은 파싱 단계에서 거부됩니다.
- **제한된 리소스**: 구문은 `workspace`, `cards`, `decks`, `review_events`에만 접근할 수 있습니다.
- **작업 공간 단위 범위**: 모든 SQL 구문과 복습은 접근 권한이 있는 하나의 작업 공간, 즉 전달한 `workspaceId` 또는 선택된 기본 작업 공간으로 범위가 한정되며, 테넌트 간 접근은 불가능합니다.
- **엄격한 인수**: 모든 도구는 알 수 없는 인수를 거부하므로, `workspaceId`의 철자가 틀리면 기본 작업 공간에서 실행되는 대신 실패합니다.
- **상한**: 구문당 최대 `100`행, 배치당 최대 `50`개 구문, 결과는 약 `12k` 토큰까지입니다. 변경 배치는 원자적으로 적용됩니다.
- **읽기/쓰기 분리**: `get_usage_limits`, `sql_query`, `list_workspaces`, `get_guide`, `next_review_card`, `reveal_answer`는 엄격한 읽기 전용(`readOnlyHint`)이며 데이터를 복구하거나, 스케줄을 다시 계산하거나, 카드 상태를 바꾸지 않습니다. 쓰기 도구는 `sql_execute`와 `submit_review`뿐입니다(`destructiveHint`). `sql_execute`는 카드와 덱을 쓰고, `submit_review`는 복습을 기록하고 해당 카드의 스케줄을 갱신합니다.

앱, 백엔드, 인프라까지 스택 전체가 오픈 소스이며 [셀프 호스팅](/docs/self-hosting/)할 수 있으므로, 직접 운영하는 배포 환경을 대상으로 같은 커넥터를 쓸 수 있습니다.
