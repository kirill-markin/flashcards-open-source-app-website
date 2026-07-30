---
title: 自托管指南
description: 使用 PostgreSQL、认证、后端、Web 和管理服务在本地运行 Flashcards，或部署文档所述的 AWS CDK 生产环境技术栈。
---

Flashcards 支持两种不同的运行方式：本地开发环境和 AWS 生产环境部署。Docker Compose 只用于运行本地开发所需的 PostgreSQL 和迁移；它不是生产环境的部署方式。

## 本地开发要求

- Git
- Bash
- GNU Make
- 支持 Docker Compose 的 Docker
- Node.js 24
- npm

随附的 Docker Compose 文件目前运行 PostgreSQL 18.4。无需另外安装本地 PostgreSQL。

## 本地快速开始

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

`make db-up` 会启动 PostgreSQL，并通过迁移容器运行 `scripts/deploy/migrate.sh`。使用从 `.env.example` 复制的默认密码时，迁移会创建以下本地运行时连接：

- 后端：`postgresql://backend_app:backend_app@localhost:5432/flashcards`
- 认证：`postgresql://auth_app:auth_app@localhost:5432/flashcards`
- 报告：`postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

如果在 `.env` 中更改 `BACKEND_DB_PASSWORD`、`AUTH_DB_PASSWORD` 或 `REPORTING_DB_PASSWORD`，请在对应的连接 URL 中使用相同的新密码。

### 仅在本地快速启动

后端 Make 目标不会加载根目录的 `.env`。请明确传入所需的本地设置：

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

在不同终端中运行客户端：

```bash
make web-dev
make admin-dev
```

此流程有意不启动 `make auth-dev`。`AUTH_MODE=none` 是明确不安全且仅限 localhost 的模式；绝对不要在已部署的环境中使用。
它涵盖核心后端、公共 Agent API 发现接口、Web 和管理功能的开发，但不会启用 Chat V2。

### 完整的本地 Cognito 流程

认证目标会加载根目录的 `.env`，后端目标则不会。首先，把复制后的 `.env` 中旧的 `DATABASE_URL` 替换为认证角色 URL，并添加真实的 Cognito 值：

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

启动认证服务：

```bash
make auth-dev
```

在后端终端中明确加载 `.env`，然后为该进程用后端角色 URL 覆盖其中的认证数据库 URL：

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

在各自的终端中运行 `make web-dev` 和 `make admin-dev`。这两个目标都会加载根目录的 `.env`。

各项服务使用以下本地地址：

| 服务 | 地址 |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| 认证服务（配置后） | `http://localhost:8081` |
| Backend API | `http://localhost:8080/v1` |
| Web 应用 | `http://localhost:3000` |
| 管理应用 | `http://localhost:3001` |

使用以下命令停止 PostgreSQL 和迁移容器：

```bash
make db-down
```

## 本地配置

从 `.env.example` 开始；其中说明了可用变量以及哪些值仅限本地使用。按照上文所述，在运行认证服务前替换旧的 `DATABASE_URL`。

主要的本地设置包括：

- `MIGRATION_DATABASE_URL`：用于 Docker 内的数据库结构迁移
- 在根目录的 `.env` 中将 `DATABASE_URL` 设为 `auth_app` 角色，供 `make auth-dev` 使用
- 向 `make backend-dev` 传入使用 `backend_app` 角色的 `DATABASE_URL`
- 用于后端认证的 `AUTH_MODE` 和 `ALLOW_INSECURE_LOCAL_AUTH`
- 用于本地 Web 和管理来源的 `BACKEND_ALLOWED_ORIGINS`
- 用于浏览器认证的 `ALLOWED_REDIRECT_URIS` 和 `COOKIE_DOMAIN`
- 测试真实 OTP 时使用的 Cognito 和会话加密值

Agent API 是后端的一部分。后端启动后，可以在 `http://localhost:8080/v1/agent` 获取其公共本地发现文档。受保护的 Agent 操作需要 `ApiKey` 认证，在 `AUTH_MODE=none` 流程中不可用。

### 不同运行方式下的 AI 范围

上述本地命令不会启动异步对话工作进程。快速流程还使用 Chat V2 会拒绝的 `AUTH_MODE=none`；添加 OpenAI 密钥或访客配额并不会让该流程支持 AI。完整的本地 Cognito 流程提供受支持的认证传输方式，但仍不会启动工作进程。

AWS CDK 部署会创建工作进程 Lambda，并将后端配置为调用它。`OPENAI_API_KEY` 等服务商凭据会为受支持的已认证请求启用模型调用。`GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` 会单独启用和限制访客 AI；它不控制登录用户或使用 Bearer 认证的 AI。Langfuse 设置是可选的追踪配置。

## 原生客户端

同一仓库包含 iOS 和 Android 客户端，但本地 Web 和服务器命令不会构建或分发它们。

iOS 项目从以下文件读取本地 API 和认证主机：

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

需要时，从示例创建该文件：

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

请参阅仓库中的 [iOS README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) 和 [Android README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md)，了解各自的构建和测试流程。

## 生产环境使用 AWS CDK

受支持的生产环境部署是随附的 AWS CDK 技术栈。它基于 AWS，而非与云厂商无关，其中包括：

- VPC 和私有子网
- Amazon RDS 上的 PostgreSQL 18
- Amazon Cognito 无密码邮箱 OTP
- 供后端、认证和 MCP 服务使用的 API Gateway 和 Lambda
- 异步对话工作进程 Lambda 和 Cognito 自定义邮件发送 Lambda
- 供 Web 和管理应用使用的 S3 和 CloudFront
- 用于数据库、会话、邮件、监控和可选 AI 凭据的 Secrets Manager
- CloudWatch 警报、SNS 通知和 RDS 备份计划
- GitHub Actions OIDC 部署角色
- 用于公共域名的 Cloudflare 设置脚本

部署会提供 `app.<domain>`、`admin.<domain>`、`api.<domain>`、`auth.<domain>` 和 `mcp.<domain>`。如果根域名没有其他用途，还可以创建根域名重定向。

请在配有以下工具的运维者计算机上运行生产环境辅助脚本：

- Node.js 24 和 npm
- Bash 和 GNU Make
- 正在运行的 Docker
- 已登录部署账号的 AWS CLI
- 已登录目标仓库的 GitHub CLI
- `curl`、`jq` 和 Python 3

部署前，请在根目录的 `.env` 中配置运维者参数。必需参数包括 AWS 区域、域名、警报邮箱、GitHub 仓库、Cloudflare 凭据、Resend 凭据和后端 Sentry 配置。OpenAI 和 Langfuse 凭据是可选的。

从仓库根目录进行首次部署时，推荐运行：

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

从全新克隆开始时，目前必须明确安装认证软件包，因为部署辅助脚本会打包该软件包，但不会安装它。该辅助脚本会创建或更改真实的 AWS、Cloudflare 和 GitHub 资源。运行前，请查看仓库的部署文档和云服务费用。它会引导 CDK、部署基础设施、运行迁移、上传 Web 和管理资源，并在没有跳过时配置公共 `app`、`admin`、`api`、`auth` 和 `mcp` DNS 记录，还会补充缺失的 GitHub Actions 配置。

部署完成后：

1. 确认发送到 `ALERT_EMAIL` 收件箱的 SNS 订阅。
2. 配置并验证单独的 Resend 发信域名 DNS 记录：

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` 默认会为公共应用域名运行 `scripts/cloudflare/setup-dns.sh`，但不会运行 `setup-resend-domain.sh`；后者会为 `mail.<domain>` 创建邮件发送方记录，并通过 Resend 验证该域名。如果使用 `--skip-dns` 进行部署，请按照 AWS CDK 指南另行配置公共记录。

## 数据可移植性

工作区软件包的导入和导出只会转移闪卡、闪卡标签和关联媒体，不会转移复习历史、FSRS 调度器状态、工作区设置、完整牌组结构或账号数据。

应将软件包视为内容转移方式，而不是完整的托管版到自托管版迁移或灾难恢复备份。运维者负责备份和恢复已部署的 PostgreSQL 数据库与媒体存储。

## 运维者责任

自托管意味着你需要提供并维护：

- AWS 基础设施及其费用
- Cloudflare DNS 和域名配置
- Resend 邮件投递凭据和域名记录
- 必需的 Sentry 监控配置
- 可选的 AI 服务商和 Langfuse 凭据
- 密钥、升级、迁移、警报、备份和恢复测试
- 如果需要自己的 iOS 或 Android 版本，则需构建和分发原生移动应用

技术栈包含多个系统的自动化功能，但仍然需要运维者。Docker Compose 不能取代这一生产环境架构。

## 仓库部署文档

- [仓库 README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [后端和 Web 部署指南](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [AWS CDK 部署指南](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [AWS CDK 基础设施](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
