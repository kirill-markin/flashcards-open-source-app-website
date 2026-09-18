---
title: MCP 连接器
description: 将远程 Nibomo MCP 服务器添加为自定义连接器，为客户端提供 OAuth、为无界面场景提供 API 密钥，并将读取与写入 SQL 工具拆分开来。
---

## 概览

Nibomo 运行着一个远程 MCP（Model Context Protocol）服务器，让 MCP 客户端和
AI 智能代理能够读取你的待复习卡片、与你一起逐题复习这些卡片，并为你创建或编辑卡片和
卡组。

智能代理有两种连接方式：通过这个 MCP 服务器（最适合 Claude 或 Cursor 这类 MCP
客户端），或通过 [Agents API 发现 URL](/docs/api/) 供 CLI 智能代理使用。两者访问
的是同一份按用户划分的数据面；本页介绍 MCP 服务器。

连接地址如下：

```text
https://mcp.nibomo.com/mcp
```

传输方式为 Streamable HTTP，服务器公开七个工具：基于一个小而有意受限的 SQL 接口的两个
SQL 工具、一个工作区列表、一份参考指南，以及三个复习工具。它访问的是与
[API 参考](/docs/api/) 相同的按用户划分的数据面；MCP 服务器是从支持 MCP 的客户端
访问该数据面的连接器友好方式。

## 如何在客户端中添加

大多数客户端会将远程 MCP 服务器添加为自定义连接器：

1. 打开客户端的连接器或 MCP 服务器设置。
2. 添加一个自定义连接器，并粘贴服务器 URL `https://mcp.nibomo.com/mcp`。
3. 对于交互式客户端，在出现提示时在浏览器中完成授权。服务器使用带 Dynamic Client
   Registration 的 OAuth 2.1，因此无需粘贴客户端密钥，也无需先注册应用。
4. 对于无界面或 CLI 场景，改为设置 `Authorization: Bearer fca_…` 请求头并使用你的
   智能代理 API 密钥，而不走浏览器流程。

授权完成后，先调用一次 `list_workspaces` 选择一个工作区，然后在读取时使用
`sql_query`，写入卡片和卡组时使用 `sql_execute`。要进行复习，请先调用
`next_review_card`，再调用 `reveal_answer`，然后调用 `submit_review`。

## 工具

服务器公开七个工具。读取与写入被有意拆分，因此单个工具绝不会把安全操作和破坏性操作
混在一起。

- `sql_query` —— 以严格只读方式访问你的卡片和卡组（`SHOW TABLES`、
  `DESCRIBE`、`SHOW COLUMNS`、`SELECT`）。
- `sql_execute` —— 以原子批次的形式对你的卡片和卡组进行写入访问（`INSERT`、`UPDATE`、
  `DELETE`）。
- `list_workspaces` —— 以严格只读方式列出你可以访问的工作区，每个工作区都带有其
  `workspaceId`、名称、活跃卡片数量、最近活动时间，以及它是否为你当前所选的默认工作区。
  将返回的某个 `workspaceId` 用作 SQL 工具和复习工具的可选 `workspaceId` 参数。
- `get_guide` —— 严格只读的单个主题参考指南：`sql_dialect`、
  `card_authoring`、`bulk_authoring` 或 `review_flow`。它不读取任何工作区数据。
- `next_review_card` —— 严格只读：按与各应用相同的队列顺序返回下一张待复习卡片，且只返回
  正面。可选的 `tags` 或 `deckId` 用于缩小队列范围。
- `reveal_answer` —— 严格只读：在学习者尝试回答某张卡片的正面之后，返回该卡片的
  背面。
- `submit_review` —— 记录一次 `Again`、`Hard`、`Good` 或 `Easy` 评分，并推进该卡片的
  FSRS 排期。

该 SQL 接口是一个有意受限的方言，并不是完整的 PostgreSQL。这些文档只描述受支持的
方言，而不是 PostgreSQL 兼容性参考。语句只能针对 `workspace`、`cards`、`decks` 和
`review_events` 这几个资源，每条语句都限定在你自己的工作区内，且读取和写入每条语句
最多 `100` 行。

## 复习

复习工具让智能代理可以一次一张卡片地考查学习者，并将每次评分保存到该卡片的 FSRS
排期中：

1. `next_review_card` 返回一个 `cardId` 和 `frontText`；没有待复习卡片时返回
   `card: null`。
2. 学习者作答后，`reveal_answer` 返回该卡片的 `backText`。
3. `submit_review` 接收 `cardId`、一个由客户端生成的 `reviewId` UUID、一个
   `rating`，以及学习者的 IANA `reviewedTimeZone`。服务器会写入复习时间戳，并返回
   该卡片的新排期。

对于结果不确定的提交，请使用相同的 `reviewId` 重试；这绝不会记录第二次复习。提交还可能
返回：

- `409 REVIEW_EVENT_CONFLICT` —— 该复习已被记录，错误详情中带有该卡片当前的
  排期。
- `409 REVIEW_ID_CARD_MISMATCH` —— 该 `reviewId` 已标识另一张卡片的复习，因此没有
  存储任何内容；请使用新的 `reviewId` 重新提交。
- `409 REVIEW_STALE` —— 该卡片已存储的复习时间等于或晚于当前服务器时间；请复习
  另一张卡片。

复习只能通过 `submit_review` 记录：SQL 无法写入 `review_events` 或 FSRS 排期状态。
调用 `get_guide` 并传入主题 `review_flow`，即可获取完整的复习和评分规则。

## 卡片约定

每张卡片都遵循同一份约定，这些工具也依赖于此：

- `front_text` 只包含问题或复习提示，绝不包含答案。
- `back_text` 包含答案，并可选地附带一个具体示例。

通过 `sql_execute` 生成卡片的智能代理会遵循这份约定，因此它们创建的卡片可以立即用于
间隔重复复习。

## 认证

两条授权路径访问的是同一份按用户划分的数据面。

### OAuth 2.1（交互式连接器客户端）

服务器实现了带 PKCE 和 Dynamic Client Registration 的授权码流程。将 MCP URL 添加为
自定义连接器并在浏览器中完成授权；不会预先共享任何客户端密钥。发现流程是标准的：

- 受保护资源元数据：
  `https://mcp.nibomo.com/.well-known/oauth-protected-resource`
- 授权服务器元数据：
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### API 密钥（无界面与 CLI）

通过 [API 参考](/docs/api/) 中记录的邮箱 OTP 登录流程获取一个长期有效的 `fca_`
智能代理 API 密钥，然后将其作为 Bearer 令牌发送：

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

这与 REST 智能代理接口所接受的密钥相同，且无需浏览器或 OAuth 往返。

对这两条路径的规范机器可读描述，是位于 `https://api.flashcards-open-source-app.com/v1/`
的发现负载（在 `/v1/agent` 上有镜像）。

## 安全与作用域

这些 SQL 工具可以放心授权，因为该接口是一个受限的、由解析器强制约束的方言，而非任意
数据库访问：

- **封闭的语句白名单**：`sql_query` 仅接受 `SHOW TABLES`、
  `DESCRIBE`、`SHOW COLUMNS` 和 `SELECT`；`sql_execute` 仅接受 `INSERT`、
  `UPDATE` 和 `DELETE`。其他任何语句都会在解析阶段被拒绝。
- **受限的资源**：语句只能触及 `workspace`、`cards`、`decks`
  和 `review_events`。
- **按工作区作用域**：每条 SQL 语句和每次复习都限定在你可以访问的某一个工作区内，
  即你传入的 `workspaceId` 或你所选的默认工作区，不存在跨租户访问。
- **严格的参数**：每个工具都会拒绝未知参数，因此拼写错误的 `workspaceId`
  会直接失败，而不会在你的默认工作区上运行。
- **上限**：每条语句最多 `100` 行，每个批次最多 `50` 条语句，
  结果上限约为 `12k` 个 token。变更批次以原子方式应用。
- **读写分离**：`sql_query`、`list_workspaces`、`get_guide`、
  `next_review_card` 和 `reveal_answer` 为严格只读（`readOnlyHint`），
  不会修复数据、重新计算排期或更改卡片状态。
  `sql_execute` 和 `submit_review` 是仅有的写入工具（`destructiveHint`）：
  `sql_execute` 写入卡片和卡组，`submit_review` 记录一次复习并推进对应卡片的排期。

整个技术栈 —— 应用、后端和基础设施 —— 都是开源的，并且可以
[自托管](/docs/self-hosting/)，因此你可以针对自己的部署运行同样的连接器。
