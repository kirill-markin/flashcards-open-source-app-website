---
title: 아키텍처
description: 시스템 개요, 공개 도메인, 지원 클라이언트, 현재의 오프라인 우선 데이터 흐름.
---

## 시스템 개요

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## 원칙

1. `app`, `api`, `auth`에 각각 별도의 공개 도메인 사용
2. Postgres가 기준 데이터 저장소
3. iOS 클라이언트는 로컬 SQLite와 동기화를 결합한 오프라인 우선 방식
4. 웹 앱, iOS 앱, 외부 에이전트 인터페이스가 같은 작업 공간 모델을 공유
5. 외부 에이전트는 `GET https://api.nibomo.com/v1/`에서 시작

## 지원 클라이언트

- `app.nibomo.com`의 웹 앱
- 메인 저장소에 포함된, 로컬 SQLite 저장소를 쓰는 iOS 앱
- Google Play의 Android 앱
- 디스커버리, OTP 초기 인증, `Authorization: ApiKey`를 사용하는 외부 에이전트 클라이언트

## 데이터 모델

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## 데이터 흐름

### 웹

1. 브라우저가 `auth.<domain>`을 통해 로그인합니다.
2. 웹 앱이 `api.<domain>`에서 작업 공간 데이터를 불러옵니다.
3. AI 채팅 요청은 `/chat/local-turn`을 거칩니다.
4. 복습 결과를 제출하면 쓰기 시점에 스케줄러 상태가 갱신됩니다.

### iOS

1. iOS 앱은 먼저 SQLite에 로컬로 기록합니다.
2. 로컬 변경 사항은 아웃박스(outbox)에 대기열로 쌓입니다.
3. 동기화는 `/v1/workspaces/{workspaceId}/sync/push`로 변경 사항을 업로드합니다.
4. 동기화는 `/v1/workspaces/{workspaceId}/sync/pull`로 원격 업데이트를 다운로드합니다.
5. 로컬 데이터베이스가 변경 사항을 적용하고 동기화 커서를 앞으로 옮깁니다.

### 외부 에이전트

1. 에이전트는 `GET /v1/`로 시작합니다.
2. OTP 초기 인증은 `auth.<domain>`에서 진행됩니다.
3. 에이전트가 장기 API 키를 받습니다.
4. 에이전트는 `/v1/agent/me`를 불러오고, 작업 공간 목록을 조회해 필요하면 하나를 선택한 뒤, `/v1/agent/sql/query`와 `/v1/agent/sql/execute`를 사용합니다.

## 스케줄링

Nibomo는 복습 스케줄러로 FSRS를 사용합니다.

구현 참고 사항:

- 백엔드와 iOS는 서로 맞춰 둔 FSRS 구현을 각각 유지합니다
- 웹 앱은 스케줄링 데이터 규약을 그대로 따르지만, 세 번째 스케줄러 사본을 포함하지는 않습니다
- 작업 공간 단위 스케줄러 설정에는 목표 기억 유지율, 학습 단계, 재학습 단계, 최대 간격, 간격 무작위 조정(fuzz)이 포함됩니다
- 실제 복습 시각은 `reviewedAtClient`에서 가져옵니다

자세한 규약은 [메인 저장소의 FSRS 스케줄링 로직](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md)을 참고하세요.

## 인증

- Cognito를 통한 이메일 OTP
- 호스팅 웹 앱용 공유 도메인 브라우저 세션 쿠키
- `auth.<domain>`에서 진행되는 에이전트 OTP 초기 인증과 장기 ApiKey 발급
- 로컬 개발용 `AUTH_MODE=none`
- 프로덕션과 같은 인증을 위한 `AUTH_MODE=cognito`

## 배포 구성

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda 백엔드
- `auth.<domain>` -> API Gateway + Lambda 인증 서비스
- AWS RDS의 Postgres

루트 도메인은 별도의 마케팅 사이트에 그대로 둘 수 있습니다. 초기 구축 시점에 루트 도메인이 비어 있다면, 인프라가 이를 임시로 `app.<domain>`으로 리디렉션할 수 있습니다.
