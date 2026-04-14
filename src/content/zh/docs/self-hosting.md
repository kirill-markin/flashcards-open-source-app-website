---
title: 自托管指南
description: 使用 Postgres 以及认证、后端和网页前端服务在本地运行 Flashcards，或按文档说明自行部署 AWS 架构。
---

## 环境要求

- Docker
- Node.js 20+
- npm
- 可通过仓库提供的 Docker 配置运行 PostgreSQL 16+

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

然后在不同终端中分别启动各个服务：

```bash
make auth-dev
make backend-dev
make web-dev
```

这会启动以下服务：

1. 运行在 `5432` 端口的 `postgres`
2. 运行在 `8081` 端口的 `auth`
3. 运行在 `8080` 端口的 `backend`
4. 运行在 `3000` 端口的 `web`

本地访问地址：

- `http://localhost:3000`：网页应用
- `http://localhost:8080/v1`：后端 API
- `http://localhost:8081`：认证服务

## 配置

将 `.env.example` 复制为 `.env`，然后按需调整以下配置：

- `DATABASE_URL` — Postgres 连接字符串
- `AUTH_MODE` — 本地使用时设为 `none`；使用邮箱 OTP 认证时设为 `cognito`
- `BACKEND_ALLOWED_ORIGINS` — 允许通过会话认证访问 API 的浏览器来源
- `PUBLIC_API_BASE_URL` 和 `PUBLIC_AUTH_BASE_URL` — 如果你希望发现接口的响应中返回自定义的对外主机名，可以用这两个变量覆盖默认值

## iOS 本地配置

主仓库中的 iOS 应用会从以下文件读取本地 API 和认证服务的主机地址：

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

如有需要，先复制示例文件：

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

然后把其中的 `api` 和 `auth` 域名改为指向你的本地或自托管实例。

## 更新

```bash
git pull
npm install --prefix api
npm install --prefix apps/auth
npm install --prefix apps/backend
npm install --prefix apps/web
```

依赖有变更后，请重启本地服务。

## AWS 部署

文档中描述的生产环境部署形态如下：

- `app.<domain>` 使用 CloudFront + S3
- `api.<domain>` 使用 API Gateway + Lambda
- `auth.<domain>` 使用 API Gateway + Lambda
- 使用部署在 AWS RDS 中的 Postgres
- 使用 Cognito 提供无密码邮箱 OTP 认证
- 如果根域名没有其他用途，还可以为根域名配置重定向

部署细节请参见：

- [仓库 README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [部署指南](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/deployment.md)
- [AWS CDK 基础设施代码](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
