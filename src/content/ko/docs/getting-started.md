---
title: 시작하기
description: iPhone, iPad, Mac, Android 앱이나 웹 앱으로 시작하거나, AI 에이전트를 연결하거나, 직접 서버를 운영하세요.
---

시작하는 방법은 여러 가지이며, 많이 쓰는 순서대로 소개합니다.

- **iPhone, iPad, Mac 앱**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **Android 앱**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **호스팅 웹 앱**: [app.nibomo.com](https://app.nibomo.com)
- **AI 에이전트**: [MCP 커넥터](/docs/mcp-connector/) 또는 `https://api.nibomo.com/v1/`의 API
- **셀프 호스팅**: [셀프 호스팅 가이드](/docs/self-hosting/)

## 모바일 및 데스크톱 앱

사용하는 기기에 맞는 네이티브 앱을 설치하세요.

- iPhone, iPad, Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

앱은 카드를 기기에 저장하므로 오프라인에서도 복습할 수 있고, 다시 온라인 상태가 되면 동기화됩니다. 게스트로 시작하고 나중에 로그인할 수도 있습니다.

### 홈 화면 위젯

Nibomo 앱은 iPhone, iPad, Mac, Android에 복습 위젯을 추가합니다. 크기는 세 가지입니다.

- **소형**: 복습할 카드 수와 연속 학습 일수
- **중형**: 복습할 카드 수와 다음 카드의 질문
- **대형**: 복습할 카드 수, 다음 질문, 연속 학습 일수

복습할 카드가 없으면 위젯에 “모두 완료”와 다음 카드의 복습 시간이 표시됩니다. 답은 표시되지 않습니다. 위젯을 탭하면 복습이 열리며, 중형 또는 대형 위젯은 표시된 카드에서 바로 복습을 엽니다. 위젯은 게스트를 포함해 누구나 무료로 사용할 수 있습니다.

이 밖에도 “활동”, “연간”, “오늘”, “복습 횟수”, “연속 학습”, “캘린더”, “다가오는 복습”, “대시보드” 위젯 8개로 학습 진행 상황을 확인할 수 있습니다. iPhone과 iPad에서는 “복습할 카드” 위젯을 잠금 화면에도 둘 수 있으며, [위젯 가이드](/blog/flashcard-widget/)에서 각 위젯을 소개합니다.

iPhone, iPad, Mac에서 추가하려면 위젯 갤러리를 열고 Nibomo를 선택한 다음 크기를 고르세요. Android에서는 위젯 목록에서 원하는 Nibomo 위젯을 추가한 다음 크기를 조절하세요. 레이아웃은 크기에 맞게 바뀝니다.

## 호스팅 웹 앱

가장 빠르게 시작하는 방법은 호스팅 웹 앱입니다.

1. [app.nibomo.com](https://app.nibomo.com)을 엽니다
2. 비밀번호 없는 이메일 OTP로 로그인합니다
3. 카드를 만들고, 복습할 때가 된 카드를 복습하고, 작업 공간 데이터와 첨부 파일을 활용해 AI 채팅을 사용합니다

호스팅 방식을 쓰면 설치나 서버 설정이 필요 없습니다.

## 기존 플래시카드 가져오기

Quizlet, Anki 등에서 사용하던 카드가 있나요? **보관함 > 가져오기**를 열고 [플래시카드 가져오기 가이드](/docs/import-flashcards/)에서 지원 형식과 옮겨지는 항목을 확인하세요.

## 에이전트 설정

Claude, ChatGPT, Cursor 같은 MCP 클라이언트는 [MCP 커넥터 가이드](/docs/mcp-connector/)를 따라 연결할 수 있습니다.

Claude Code, Codex, OpenClaw를 직접 연결하려면 여기서 시작하세요.

```text
GET https://api.nibomo.com/v1/
```

이 디스커버리 응답이 이메일 OTP 로그인, 장기 API 키 발급, 계정 정보 불러오기, 작업 공간 초기 설정, 공개된 SQL 인터페이스 사용까지 에이전트를 단계별로 안내합니다.

같은 페이로드는 `GET /v1/agent`에서도 받을 수 있지만, 공식 공개 진입점은 `/v1/`입니다.

## 셀프 호스팅

인스턴스를 직접 운영하고 싶다면 [셀프 호스팅 가이드](/docs/self-hosting/)를 참고하세요.

## 현재 제공되는 것

- 카드, 복습, AI 채팅을 위한 호스팅 웹 앱
- 로컬 SQLite 저장소와 오프라인 우선 동기화를 지원하는 iPhone, iPad, Mac, Android 네이티브 앱
- 별도의 `api` 도메인과 `auth` 도메인에서 동작하는 공용 백엔드와 인증 서비스
- 디스커버리, OTP, ApiKey 인증을 통한 외부 에이전트 온보딩
- Postgres를 기준 데이터 저장소로 삼는 AWS 기반 오픈 소스 배포 경로

## 저장소 방향

이 프로젝트는 오프라인 우선으로 설계되어 있습니다.

현재 저장소에는 웹 앱, iOS 앱, 인증 서비스, 백엔드 API, 외부 에이전트 흐름, 그리고 Google Play에 출시된 Android 앱이 포함되어 있습니다.
