---
title: Hướng dẫn tự lưu trữ
description: Chạy Nibomo cục bộ với PostgreSQL, auth, backend, web và admin, hoặc triển khai lên production bằng stack AWS CDK có tài liệu hướng dẫn.
---

Nibomo hỗ trợ hai cách riêng biệt: môi trường phát triển cục bộ và bản triển khai production trên AWS. Docker Compose chạy PostgreSQL và các migration cho phát triển cục bộ; đó không phải là cách triển khai production.

## Yêu cầu cho phát triển cục bộ

- Git
- Bash
- GNU Make
- Docker kèm Docker Compose
- Node.js 24
- npm

Tệp Docker Compose đi kèm hiện chạy PostgreSQL 18.4. Bạn không cần cài PostgreSQL riêng trên máy.

## Khởi động nhanh cục bộ

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

`make db-up` khởi động PostgreSQL và chạy `scripts/deploy/migrate.sh` thông qua container migration. Với các mật khẩu mặc định được sao chép từ `.env.example`, bước migration tạo sẵn các kết nối runtime cục bộ sau:

- backend: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- auth: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- reporting: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

Nếu bạn đổi `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` hoặc `REPORTING_DB_PASSWORD` trong `.env`, hãy dùng đúng mật khẩu đã đổi đó trong URL kết nối tương ứng.

### Khởi động nhanh chỉ dùng cục bộ

Target Make của backend không nạp `.env` ở thư mục gốc. Hãy truyền tường minh các thiết lập cục bộ bắt buộc cho target này:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Chạy các client trong những terminal riêng:

```bash
make web-dev
make admin-dev
```

Cách này cố ý không khởi động `make auth-dev`. `AUTH_MODE=none` là chế độ chỉ dành cho localhost và được đánh dấu rõ là không an toàn; không bao giờ dùng nó trong môi trường đã triển khai.
Cách này đủ cho việc phát triển backend lõi, phần khám phá công khai của Agent API, web và admin, nhưng không làm cho Chat V2 khả dụng.

### Luồng Cognito cục bộ đầy đủ

Target auth nạp `.env` ở thư mục gốc, còn target backend thì không. Trước tiên, hãy thay `DATABASE_URL` cũ trong tệp `.env` đã sao chép bằng URL của role auth và thêm các giá trị Cognito thật của bạn:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

Khởi động auth:

```bash
make auth-dev
```

Trong terminal của backend, nạp `.env` một cách tường minh, rồi ghi đè URL cơ sở dữ liệu auth trong đó bằng URL của role backend cho tiến trình này:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

Chạy `make web-dev` và `make admin-dev` trong các terminal riêng của chúng. Cả hai target đều nạp `.env` ở thư mục gốc.

Các dịch vụ dùng những địa chỉ cục bộ sau:

| Dịch vụ | Địa chỉ |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Auth, khi đã cấu hình | `http://localhost:8081` |
| Backend API | `http://localhost:8080/v1` |
| Ứng dụng web | `http://localhost:3000` |
| Ứng dụng admin | `http://localhost:3001` |

Dừng PostgreSQL và container migration bằng:

```bash
make db-down
```

## Cấu hình cục bộ

Hãy bắt đầu từ `.env.example`; tệp này mô tả các biến có sẵn và cho biết giá trị nào chỉ dùng cục bộ. Thay `DATABASE_URL` cũ trong tệp trước khi chạy auth, như đã trình bày ở trên.

Các thiết lập cục bộ chính là:

- `MIGRATION_DATABASE_URL` cho các migration lược đồ bên trong Docker
- `DATABASE_URL` đặt thành role `auth_app` trong `.env` ở thư mục gốc cho `make auth-dev`
- `DATABASE_URL` truyền vào dưới dạng role `backend_app` cho `make backend-dev`
- `AUTH_MODE` và `ALLOW_INSECURE_LOCAL_AUTH` cho xác thực backend
- `BACKEND_ALLOWED_ORIGINS` cho các origin cục bộ của web và admin
- `ALLOWED_REDIRECT_URIS` và `COOKIE_DOMAIN` cho xác thực trên trình duyệt
- các giá trị Cognito và khóa mã hóa phiên khi thử nghiệm OTP thật

Agent API là một phần của backend. Tài liệu khám phá công khai cục bộ của nó có tại `http://localhost:8080/v1/agent` sau khi backend khởi động. Các thao tác Agent được bảo vệ yêu cầu xác thực `ApiKey` và không khả dụng khi dùng cách chạy `AUTH_MODE=none`.

### Phạm vi AI theo từng cách chạy

Các lệnh cục bộ ở trên không khởi động worker chat bất đồng bộ. Cách khởi động nhanh còn dùng `AUTH_MODE=none`, chế độ mà Chat V2 từ chối; thêm khóa OpenAI hay hạn mức cho khách cũng không giúp cách chạy đó dùng được AI. Luồng Cognito cục bộ đầy đủ cung cấp một cơ chế truyền xác thực được hỗ trợ, nhưng vẫn không khởi động worker.

Bản triển khai AWS CDK tạo Lambda cho worker và cấu hình backend để gọi nó. Thông tin đăng nhập của nhà cung cấp như `OPENAI_API_KEY` cho phép gọi mô hình với các yêu cầu đã xác thực được hỗ trợ. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` là thiết lập riêng để bật và giới hạn AI cho khách; nó không kiểm soát AI cho người dùng đã đăng nhập hay đã xác thực bằng bearer. Các thiết lập Langfuse là cấu hình tracing tùy chọn.

## Client gốc

Cùng kho mã này chứa client iOS và Android, nhưng các lệnh web/máy chủ cục bộ không build hay phân phối chúng.

Dự án iOS đọc các host API và auth cục bộ từ:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

Tạo tệp này từ tệp mẫu khi cần:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Xem [README iOS](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) và [README Android](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) trong kho mã để biết quy trình build và kiểm thử riêng của từng nền tảng.

## Production dùng AWS CDK

Cách triển khai production được hỗ trợ là stack AWS CDK đi kèm. Stack này dựa trên AWS chứ không trung lập với nhà cung cấp, và gồm:

- một VPC và các subnet riêng tư
- PostgreSQL 18 trên Amazon RDS
- OTP qua email không cần mật khẩu của Amazon Cognito
- API Gateway và Lambda cho các dịch vụ backend, auth và MCP
- một Lambda worker chat bất đồng bộ và một Lambda gửi email tùy chỉnh cho Cognito
- S3 và CloudFront cho ứng dụng web và admin
- Secrets Manager cho thông tin đăng nhập cơ sở dữ liệu, phiên, email, giám sát và AI tùy chọn
- cảnh báo CloudWatch, thông báo SNS và một kế hoạch sao lưu RDS
- một role triển khai GitHub Actions OIDC
- các script thiết lập Cloudflare cho những tên miền công khai

Bản triển khai cung cấp `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` và `mcp.<domain>`. Nó cũng có thể tạo chuyển hướng cho tên miền gốc khi tên miền đó không được dùng vào việc khác.

Chạy công cụ hỗ trợ triển khai production từ máy của người vận hành với:

- Node.js 24 và npm
- Bash và GNU Make
- Docker đang chạy
- AWS CLI đã xác thực vào tài khoản triển khai
- GitHub CLI đã xác thực vào kho mã đích
- `curl`, `jq` và Python 3

Trước khi triển khai, hãy cấu hình các giá trị của người vận hành trong `.env` ở thư mục gốc. Bộ giá trị bắt buộc gồm vùng AWS, tên miền, email nhận cảnh báo, kho mã GitHub, thông tin đăng nhập Cloudflare, thông tin đăng nhập Resend và cấu hình Sentry cho backend. Thông tin đăng nhập OpenAI và Langfuse là tùy chọn.

Lệnh triển khai lần đầu được khuyến nghị, chạy từ thư mục gốc của kho mã, là:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

Bước cài đặt riêng cho auth hiện là bắt buộc khi bắt đầu từ một bản checkout sạch, vì công cụ hỗ trợ triển khai đóng gói package đó nhưng không cài đặt nó. Công cụ này tạo hoặc thay đổi tài nguyên thật trên AWS, Cloudflare và GitHub. Hãy đọc tài liệu triển khai trong kho mã và xem xét chi phí đám mây trước khi chạy. Nó khởi tạo CDK, triển khai hạ tầng, chạy migration, tải lên tài nguyên của web và admin, cấu hình các bản ghi DNS công khai `app`, `admin`, `api`, `auth` và `mcp` trừ khi bị bỏ qua, và điền phần cấu hình GitHub Actions còn thiếu.

Sau khi triển khai:

1. Xác nhận đăng ký SNS được gửi tới hộp thư `ALERT_EMAIL`.
2. Cấu hình và xác minh các bản ghi DNS riêng cho tên miền gửi email của Resend:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

Theo mặc định, `first-deploy.sh` chạy `scripts/cloudflare/setup-dns.sh` cho các tên miền ứng dụng công khai. Nó không chạy `setup-resend-domain.sh`; script này tạo các bản ghi gửi email cho `mail.<domain>` và xác minh tên miền đó với Resend. Nếu bạn triển khai với `--skip-dns`, hãy cấu hình các bản ghi công khai riêng như mô tả trong hướng dẫn AWS CDK.

## Khả năng di chuyển dữ liệu

Nhập và xuất gói không gian làm việc chỉ chuyển thẻ, nhãn của thẻ và media liên quan. Nó không chuyển lịch sử ôn tập, trạng thái bộ lập lịch FSRS, cài đặt không gian làm việc, cấu trúc bộ thẻ đầy đủ hay dữ liệu tài khoản.

Hãy coi gói là cách chuyển nội dung, không phải một lần di chuyển hoàn chỉnh từ bản lưu trữ sẵn sang bản tự lưu trữ hay một bản sao lưu để khôi phục sau sự cố. Người vận hành chịu trách nhiệm sao lưu và khôi phục cơ sở dữ liệu PostgreSQL và kho lưu trữ media đã triển khai.

## Trách nhiệm của người vận hành

Tự lưu trữ nghĩa là bạn cung cấp và duy trì:

- hạ tầng AWS và chi phí của nó
- DNS Cloudflare và cấu hình tên miền
- thông tin đăng nhập gửi email Resend và các bản ghi tên miền
- cấu hình giám sát Sentry bắt buộc
- thông tin đăng nhập tùy chọn cho nhà cung cấp AI và Langfuse
- secret, nâng cấp, migration, cảnh báo, sao lưu và kiểm thử khôi phục
- build và phân phối ứng dụng di động gốc nếu bạn muốn phát hành bản iOS hoặc Android của riêng mình

Stack có sẵn tự động hóa cho nhiều hệ thống trong số này, nhưng vẫn cần một người vận hành. Docker Compose không thay thế kiến trúc production này.

## Tài liệu triển khai trong kho mã

- [README của kho mã](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Hướng dẫn triển khai backend và web](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [Hướng dẫn triển khai AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [Hạ tầng AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
