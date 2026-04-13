---
title: 自托管指南
description: 使用 Postgres、auth、backend 和 web 在本地运行 Flashcards，或自行部署文档中说明的 AWS 架构。
---

## 环境要求

- Docker
- Node.js 20+
- npm
- 通过仓库提供的 Docker 配置运行 PostgreSQL 16+

## 快速开始

```bash
git clone https://github.com/kirill-markin/flashcards-open-source-app.git
cd flashcards-open-source-app
cp .env.example .env
make db-up
npm install --prefix api
npm install --prefix apps/auth
npm install --prefix apps/backend
npm install --prefix apps/web
```

然后分别在不同终端中启动各个服务：

```bash
make auth-dev
make backend-dev
make web-dev
```

这会启动：

1. 运行在 `5432` 端口的 `postgres`
2. 运行在 `8081` 端口的 `auth`
3. 运行在 `8080` 端口的 `backend`
4. 运行在 `3000` 端口的 `web`

本地访问地址：

- `http://localhost:3000`：Web 应用
- `http://localhost:8080/v1`：后端 API
- `http://localhost:8081`：认证服务

## 配置

将 `.env.example` 复制为 `.env`，然后按需调整以下配置：

- `DATABASE_URL` — Postgres 连接字符串
- `AUTH_MODE` — 本地使用时设为 `none`；如需使用邮箱 OTP 认证，则设为 `cognito`
- `BACKEND_ALLOWED_ORIGINS` — 允许通过会话认证访问 API 的浏览器来源
- `PUBLIC_API_BASE_URL` 和 `PUBLIC_AUTH_BASE_URL` — 如果你希望 discovery 响应对外公布自定义公共主机名，可用这两个变量覆盖默认值

## iOS 本地配置

主仓库中的 iOS 应用会从以下文件读取本地 API 和 auth 主机地址：

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

如有需要，先复制示例文件：

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

然后将其中的 `api` 和 `auth` 域名指向你的本地或自托管实例。

## 更新

```bash
git pull
npm install --prefix api
npm install --prefix apps/auth
npm install --prefix apps/backend
npm install --prefix apps/web
```

依赖发生变化后，请重启本地服务。

## AWS 部署

文档中说明的生产部署形态如下：

- `app.<domain>` 使用 CloudFront + S3
- `api.<domain>` 使用 API Gateway + Lambda
- `auth.<domain>` 使用 API Gateway + Lambda
- 使用部署在 AWS RDS 中的 Postgres
- 使用 Cognito 提供无密码邮箱 OTP 认证
- 如果根域名没有其他用途，可选配置 apex redirect

详情请见：

- [Repository README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Deployment guide](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/deployment.md)
- [AWS CDK infrastructure](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
