---
title: 셀프 호스팅 가이드
description: PostgreSQL, 인증, 백엔드, 웹, 관리자 앱으로 Nibomo를 로컬에서 실행하거나, 문서화된 AWS CDK 프로덕션 스택을 배포하세요.
---

Nibomo는 서로 다른 두 가지 경로를 지원합니다. 로컬 개발 환경과 AWS 프로덕션 배포입니다. Docker Compose는 로컬 개발용으로 PostgreSQL과 마이그레이션을 실행하며, 프로덕션 배포 방법이 아닙니다.

## 로컬 개발 요구 사항

- Git
- Bash
- GNU Make
- Docker 및 Docker Compose
- Node.js 24
- npm

제공되는 Docker Compose 파일은 현재 PostgreSQL 18.4를 실행합니다. PostgreSQL을 로컬에 따로 설치할 필요는 없습니다.

## 로컬 빠른 시작

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

`make db-up`은 PostgreSQL을 시작하고 마이그레이션 컨테이너로 `scripts/deploy/migrate.sh`를 실행합니다. `.env.example`에서 복사한 기본 비밀번호를 그대로 쓰면, 마이그레이션이 다음 로컬 런타임 연결을 준비합니다.

- 백엔드: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- 인증: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- 리포팅: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

`.env`에서 `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD`, `REPORTING_DB_PASSWORD`를 바꿨다면, 해당 연결 URL에도 바꾼 비밀번호를 똑같이 사용하세요.

### 빠른 로컬 전용 시작

백엔드 Make 타깃은 루트 `.env`를 불러오지 않습니다. 필요한 로컬 설정을 명시적으로 전달하세요.

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

클라이언트는 각각 별도의 터미널에서 실행하세요.

```bash
make web-dev
make admin-dev
```

이 경로는 의도적으로 `make auth-dev`를 시작하지 않습니다. `AUTH_MODE=none`은 명시적으로 안전하지 않은 localhost 전용 모드이므로, 배포 환경에서는 절대 사용하지 마세요.
이 경로로 핵심 백엔드, 공개 Agent API 디스커버리, 웹, 관리자 앱을 개발할 수 있지만, Chat V2는 사용할 수 없습니다.

### 전체 로컬 Cognito 흐름

인증 타깃은 루트 `.env`를 불러오지만, 백엔드 타깃은 불러오지 않습니다. 먼저 복사한 `.env`에 있는 레거시 `DATABASE_URL`을 인증 역할 URL로 바꾸고, 실제 Cognito 값을 추가하세요.

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

인증 서비스를 시작합니다.

```bash
make auth-dev
```

백엔드 터미널에서는 `.env`를 명시적으로 불러온 뒤, 그 프로세스에 한해 인증 데이터베이스 URL을 백엔드 역할 URL로 덮어쓰세요.

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

`make web-dev`와 `make admin-dev`는 각자의 터미널에서 실행하세요. 두 타깃 모두 루트 `.env`를 불러옵니다.

서비스는 다음 로컬 주소를 사용합니다.

| 서비스 | 주소 |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| 인증(설정한 경우) | `http://localhost:8081` |
| 백엔드 API | `http://localhost:8080/v1` |
| 웹 앱 | `http://localhost:3000` |
| 관리자 앱 | `http://localhost:3001` |

PostgreSQL과 마이그레이션 컨테이너는 다음 명령으로 중지합니다.

```bash
make db-down
```

## 로컬 설정

`.env.example`에서 시작하세요. 이 파일에는 사용할 수 있는 변수와 로컬 전용 값이 무엇인지 설명되어 있습니다. 위에서 설명한 대로, 인증을 실행하기 전에 레거시 `DATABASE_URL`을 바꾸세요.

주요 로컬 설정은 다음과 같습니다.

- Docker 안에서 스키마 마이그레이션에 쓰는 `MIGRATION_DATABASE_URL`
- `make auth-dev`용으로 루트 `.env`에 `auth_app` 역할로 설정하는 `DATABASE_URL`
- `make backend-dev`에 `backend_app` 역할로 전달하는 `DATABASE_URL`
- 백엔드 인증용 `AUTH_MODE`와 `ALLOW_INSECURE_LOCAL_AUTH`
- 로컬 웹 앱과 관리자 앱 오리진용 `BACKEND_ALLOWED_ORIGINS`
- 브라우저 인증용 `ALLOWED_REDIRECT_URIS`와 `COOKIE_DOMAIN`
- 실제 OTP를 테스트할 때 필요한 Cognito 값과 세션 암호화 값

Agent API는 백엔드의 일부입니다. 백엔드가 시작되면 `http://localhost:8080/v1/agent`에서 공개 로컬 디스커버리 문서를 볼 수 있습니다. 보호된 Agent 작업에는 `ApiKey` 인증이 필요하며, `AUTH_MODE=none` 경로에서는 사용할 수 없습니다.

### 경로별 AI 사용 범위

위의 로컬 명령은 비동기 채팅 워커를 시작하지 않습니다. 빠른 경로는 `AUTH_MODE=none`도 사용하는데, Chat V2는 이를 거부합니다. OpenAI 키나 게스트 할당량을 추가해도 이 경로에서는 AI를 쓸 수 없습니다. 전체 로컬 Cognito 흐름은 지원되는 인증 전송 방식을 제공하지만, 여전히 워커를 시작하지 않습니다.

AWS CDK 배포는 워커 Lambda를 만들고 백엔드가 이를 호출하도록 구성합니다. `OPENAI_API_KEY` 같은 제공업체 자격 증명이 있으면, 지원되는 인증된 요청에 대해 모델 호출이 가능해집니다. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP`은 게스트 AI를 별도로 켜고 제한하며, 로그인한 사용자나 Bearer 인증 사용자의 AI에는 영향을 주지 않습니다. Langfuse 설정은 선택 사항인 트레이싱 구성입니다.

## 네이티브 클라이언트

같은 저장소에 iOS와 Android 클라이언트도 들어 있지만, 로컬 웹/서버 명령은 이를 빌드하거나 배포하지 않습니다.

iOS 프로젝트는 로컬 API 호스트와 인증 호스트를 다음 파일에서 읽습니다.

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

필요하면 예시 파일로 만드세요.

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

각 클라이언트의 별도 빌드·테스트 절차는 저장소의 [iOS README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md)와 [Android README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md)를 참고하세요.

## 프로덕션은 AWS CDK로 배포

지원되는 프로덕션 배포 방식은 포함된 AWS CDK 스택입니다. 특정 벤더에 종속되지 않는 구성이 아니라 AWS 기반이며, 다음을 포함합니다.

- VPC와 프라이빗 서브넷
- Amazon RDS의 PostgreSQL 18
- Amazon Cognito 비밀번호 없는 이메일 OTP
- 백엔드, 인증, MCP 서비스를 위한 API Gateway와 Lambda
- 비동기 채팅 워커 Lambda와 Cognito 사용자 지정 이메일 발신 Lambda
- 웹 앱과 관리자 앱을 위한 S3와 CloudFront
- 데이터베이스, 세션, 이메일, 모니터링, 선택적 AI 자격 증명을 위한 Secrets Manager
- CloudWatch 경보, SNS 알림, RDS 백업 플랜
- GitHub Actions OIDC 배포 역할
- 공개 도메인을 위한 Cloudflare 설정 스크립트

배포되면 `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>`, `mcp.<domain>`이 노출됩니다. 루트 도메인을 달리 쓰지 않는다면 루트 도메인 리디렉션도 만들 수 있습니다.

프로덕션 헬퍼는 다음을 갖춘 운영자 컴퓨터에서 실행하세요.

- Node.js 24와 npm
- Bash와 GNU Make
- 실행 중인 Docker
- 배포 계정으로 인증된 AWS CLI
- 대상 저장소로 인증된 GitHub CLI
- `curl`, `jq`, Python 3

배포하기 전에 루트 `.env`에 운영자 값을 설정하세요. 필수 항목에는 AWS 리전, 도메인, 경보 이메일, GitHub 저장소, Cloudflare 자격 증명, Resend 자격 증명, 백엔드 Sentry 구성이 포함됩니다. OpenAI와 Langfuse 자격 증명은 선택 사항입니다.

저장소 루트에서 실행하는 권장 첫 배포 명령은 다음과 같습니다.

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

배포 헬퍼가 auth 패키지를 번들링하지만 설치하지는 않으므로, 깨끗한 체크아웃에서는 현재 auth를 명시적으로 설치해야 합니다. 헬퍼는 실제 AWS, Cloudflare, GitHub 리소스를 만들거나 변경합니다. 실행하기 전에 저장소의 배포 문서와 클라우드 비용을 검토하세요. 헬퍼는 CDK를 부트스트랩하고, 인프라를 배포하고, 마이그레이션을 실행하고, 웹 앱과 관리자 앱 에셋을 업로드하고, 건너뛰도록 지정하지 않는 한 공개 `app`, `admin`, `api`, `auth`, `mcp` DNS 레코드를 설정하며, 비어 있는 GitHub Actions 구성을 채웁니다.

배포가 끝나면 다음을 진행하세요.

1. `ALERT_EMAIL` 받은편지함으로 전송된 SNS 구독을 확인합니다.
2. 별도의 Resend 발신 도메인 DNS 레코드를 설정하고 검증합니다.

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh`는 기본적으로 공개 애플리케이션 도메인에 대해 `scripts/cloudflare/setup-dns.sh`를 실행합니다. `setup-resend-domain.sh`는 실행하지 않습니다. 후자는 `mail.<domain>`용 이메일 발신 레코드를 만들고 Resend에서 해당 도메인을 검증합니다. `--skip-dns`로 배포했다면 AWS CDK 가이드에 설명된 대로 공개 레코드를 따로 설정하세요.

## 데이터 이동성

작업 공간 패키지 가져오기와 내보내기는 카드, 카드의 태그, 관련 미디어만 옮깁니다. 복습 기록, FSRS 스케줄러 상태, 작업 공간 설정, 전체 덱 구조, 계정 데이터는 옮기지 않습니다.

패키지는 콘텐츠 이전 수단으로 다루세요. 호스팅에서 셀프 호스팅으로의 완전한 마이그레이션이나 재해 복구용 백업이 아닙니다. 배포된 PostgreSQL 데이터베이스와 미디어 저장소의 백업과 복원은 운영자의 책임입니다.

## 운영자 책임

셀프 호스팅을 한다면 다음을 직접 준비하고 유지해야 합니다.

- AWS 인프라와 그 비용
- Cloudflare DNS와 도메인 설정
- Resend 이메일 발송 자격 증명과 도메인 레코드
- 필수 Sentry 모니터링 구성
- 선택적 AI 제공업체와 Langfuse 자격 증명
- 시크릿, 업그레이드, 마이그레이션, 경보, 백업, 복원 테스트
- 자체 iOS 또는 Android 릴리스를 원한다면 네이티브 모바일 빌드와 배포

스택에는 이러한 시스템 상당수를 위한 자동화가 포함되어 있지만, 여전히 운영자가 필요합니다. Docker Compose는 이 프로덕션 아키텍처를 대신하지 않습니다.

## 저장소 배포 문서

- [저장소 README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [백엔드 및 웹 배포 가이드](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [AWS CDK 배포 가이드](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [AWS CDK 인프라](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
