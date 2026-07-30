---
title: "用于间隔重复的可自托管开源 Flashcards 应用"
description: "在本地自托管开源 Flashcards 技术栈用于开发，或部署文档所述的 AWS CDK 基础设施，运行生产级间隔重复应用。"
date: "2026-03-08"
updated: "2026-07-30"
image: "/home/app-screens-showcase-zh.png"
keywords:
  - "开源闪卡应用"
  - "自托管闪卡应用"
  - "间隔重复应用"
  - "Anki 替代品"
  - "Quizlet 替代品"
  - "AI 闪卡"
---

是的，Flashcards 可以自托管。完整的应用和基础设施代码均以 MIT 许可证开源。你可以在本地运行各项服务用于开发，也可以在 AWS 上部署仓库中已有文档说明的生产环境技术栈。如果你不想自己运维基础设施，仍可使用[托管版应用](https://app.flashcards-open-source-app.com/)。

![展示复习、进度、AI 对话和闪卡的 Flashcards 开源应用移动端界面](/home/app-screens-showcase-zh.png)

## 可以自托管哪些内容

仓库包含 Flashcards 核心系统使用的服务和基础设施：

- Web 应用和管理应用
- 后端 API 和无密码认证服务
- PostgreSQL 数据库结构、迁移、同步和基于 FSRS 的复习调度
- MCP 服务器和面向机器的 Agent API
- 用于网络、数据库、认证、API、静态 Web 托管、密钥、备份、监控和 CI/CD 的 AWS CDK 技术栈

仓库还包含原生 iOS 和 Android 客户端。这些应用需要单独构建；部署 AWS 技术栈不会替你发布自己的 App Store 或 Google Play 版本。

服务端技术栈有两种受支持的运行方式：

1. **本地开发：**Docker Compose 运行 PostgreSQL 和迁移任务。仓库中的脚本在宿主机上运行认证、后端、Web 和管理开发服务器。
2. **AWS 生产环境：**随附的 CDK 技术栈部署文档所述的 AWS 架构，并通过 Cloudflare 连接其公共域名。

Docker Compose 不是一条命令即可完成的生产部署方案。生产路径专用于 AWS，项目也没有声称提供与云厂商无关的基础设施。

## 仓库目前包含哪些功能

它不只是一个独立的闪卡编辑器。当前仓库包括：

- React Web 客户端和管理客户端
- 原生 SwiftUI iOS 客户端和 Jetpack Compose Android 客户端
- 面向用户客户端的离线优先本地存储和同步
- 正反面闪卡、标签、关联媒体和 FSRS 复习
- 通过 Amazon Cognito 和认证服务发送的无密码邮箱 OTP
- 由已部署的异步工作进程和运维者提供的模型凭据支持的 AI 对话
- 供兼容 AI 客户端使用的 MCP 端点
- 供终端工具和其他自动化工作流使用的 Agent API

要了解当前的服务边界，最好查看[架构文档](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/architecture.md)。公开的 [API 指南](/docs/api/)说明了托管版 Agent API 的入口。

## 托管版与自托管版

| 方面 | 托管版应用 | 自托管部署 |
| --- | --- | --- |
| 初始设置 | 打开应用并登录 | 配置账号、密钥和域名，然后部署 AWS 技术栈 |
| 基础设施 | 由 Flashcards 项目运维 | 在你自己的 AWS 和 Cloudflare 账号中运维 |
| 数据库和备份 | 已为你管理 | RDS、备份策略、迁移和恢复由你负责 |
| 认证和邮件 | 已为你管理 | Cognito，以及你自己的邮件投递凭据和 DNS |
| AI | 使用托管服务配置 | 使用已部署的工作进程和你的模型凭据；访客访问有单独的配额 |
| 监控 | 已为你管理 | CloudWatch/SNS 和你的 Sentry 配置 |
| 更新 | 由托管服务发布 | 由你拉取、验证、部署和监控更新 |
| 费用 | 适用托管套餐条款 | 直接支付 AWS 和其他服务商的费用 |

自托管让你掌控部署和数据库，同时也意味着安全更新、密钥、可用性、备份、邮件投递、监控和云服务费用都由你负责。

## 环境要求和本地快速开始

本地开发目前需要 Git、Bash、GNU Make、支持 Docker Compose 的 Docker、Node.js 24 和 npm。随附的 Compose 文件会运行 PostgreSQL 18.4 并应用数据库迁移。

在仓库根目录中运行：

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

如需以最简方式只在本地启动，请使用迁移创建的角色运行后端，并明确启用不安全的本地认证：

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

然后在不同终端中运行客户端：

```bash
make web-dev
make admin-dev
```

此流程有意不启动 Cognito 认证服务。[自托管指南](/docs/self-hosting/)说明了使用 `make auth-dev` 运行完整 Cognito 流程时所需的独立数据库 URL 和环境变量加载步骤。Web 应用运行在 `http://localhost:3000`，管理应用运行在 `http://localhost:3001`，后端运行在 `http://localhost:8080/v1`，配置后的 Cognito 认证服务运行在 `http://localhost:8081`。

此快速开始涵盖核心后端、Web 和管理功能的开发，但不会启用 Chat V2：这些路由不接受 `AUTH_MODE=none` 认证传输方式，而且本地命令不会启动异步对话工作进程。

生产环境请使用仓库的首次部署流程，而不是 Docker Compose：

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

从全新克隆开始时，目前必须明确安装认证软件包，因为部署辅助脚本会打包该软件包，但不会安装它。随后，该辅助脚本会创建和更新真实的云资源。运行前，请阅读[后端和 Web 部署指南](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)以及 [AWS CDK 部署指南](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)。

## 数据可移植性实用，但有意保持有限

Flashcards 软件包的导入和导出只涵盖闪卡、闪卡标签和关联媒体，**不会**转移复习历史、FSRS 调度器状态、工作区设置、完整牌组结构或账号数据。

在托管服务和你自己的部署之间迁移时，这一区别很重要。可移植软件包用于转移内容，并不是完整的数据库或账号迁移。要实现完整的运维备份，自托管运维者还必须管理 AWS 技术栈创建的 PostgreSQL 数据库和媒体存储。

## AI 和外部服务凭据

源代码不包含云账号、模型额度或生产凭据。自托管运维者需要提供相关配置：

- CDK 技术栈所需的 AWS 凭据和 AWS 账号
- 文档所述 DNS 设置所需的域名和 Cloudflare 凭据
- 邮件投递所需的 Resend 凭据
- 必需的后端 Sentry 监控配置
- AI 和追踪所需的可选 OpenAI 和 Langfuse 凭据
- 随附部署工作流所需的 GitHub 配置

AI 在 AWS 部署中是可选功能。CDK 技术栈会部署异步对话工作进程，模型凭据则会为受支持的已认证请求启用 AI。`GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` 单独控制访客的 AI 用量；它并非登录用户或使用 Bearer 认证的 AI 请求的全局开关。如果连接 MCP 或其他外部 AI 客户端，请求中包含的闪卡数据可能会由外部提供商按照其自身条款处理；自托管数据库并不会让这些请求留在你的基础设施内。

## 坦诚说明测试阶段和运维限制

Flashcards 仍是早期产品。仓库仍在积极开发，迁移和部署配置可能变化；自托管也意味着你需要能够运维 AWS 应用。

CDK 技术栈包含备份、警报、密钥和部署自动化，但这些组件仍然需要运维者。你应当做好以下准备：

- 部署前审查基础设施变更
- 监控版本发布和公共端点检查
- 确认警报订阅和邮件域名 DNS
- 保护并轮换凭据
- 测试恢复流程并规划 AWS 费用
- 如果需要发布自己的版本，单独构建和分发原生移动应用

如果这些运维工作对你没有价值，托管版应用是更简单的选择。

## 与 Anki 和 Quizlet 的简要比较

Anki 是成熟的开源选择，拥有庞大的生态系统和强大的桌面工作流。Quizlet 是托管式消费级服务，提供无需大量设置的学习体验。你更看重成熟的本地工具还是全托管平台，会决定哪一个更适合你。

Flashcards 选择了不同的方向：围绕 FSRS、同步、AI 工作流、MCP 和 AWS 自托管选项构建一个开放的 Web、移动端、API 和基础设施仓库。它比 Anki 更年轻，自托管时需要的运维工作也远多于 Quizlet。选择它的理由应当是这种组合符合你的需求，而不是每个学习者都应该运维一套云技术栈。

## 试用托管版应用，或运行自己的技术栈

- [打开托管版应用](https://app.flashcards-open-source-app.com/)
- [阅读自托管指南](/docs/self-hosting/)
- [在 GitHub 上查看源码](https://github.com/kirill-markin/flashcards-open-source-app)

如果你想专注学习而不维护基础设施，请使用托管版。如果掌控部署的价值值得你投入 AWS、DNS、邮件、监控和更新工作，请选择自托管。
