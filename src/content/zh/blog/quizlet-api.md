---
title: "2026 年 Quizlet 有公开 API 吗？现状与安全替代方案"
description: "Quizlet 有 API 吗？截至 2026 年 8 月 18 日，Quizlet 尚未提供有公开文档的自助式 API。本文对比官方支持的替代途径。"
image: "/blog/quizlet-api.png"
date: "2026-08-18"
keywords:
  - "Quizlet API"
  - "Quizlet 有 API 吗"
  - "Quizlet 公共 API"
  - "Quizlet 开发者 API"
  - "Quizlet API 替代方案"
  - "自动化闪卡"
---

截至 2026 年 8 月 18 日，Quizlet 没有提供有公开文档的自助式开发者 API，也没有公共开发者门户。独立开发者目前无法通过官方渠道注册应用、获取 Quizlet API 密钥，再调用有文档的端点读写闪卡数据。

这只是对 Quizlet 公开文档现状的判断，并不涉及它的内部系统。Quizlet 显然拥有产品集成和合作伙伴集成，ChatGPT 应用和 Google Classroom 插件就是目前的两个例子。但这两项集成都没有向其他应用开放通用的 Quizlet 开发者 API。

**事实核查于：** 2026 年 8 月 18 日。

> **披露：** 我是 Kirill Markin，也是 Flashcards Open Source App 的开发者。下文会把它的 Agent API 和 MCP 服务器列为替代方案。Flashcards 与 Quizlet 并不兼容，也不会自动导入 Quizlet 学习集。

![开发者对比 Quizlet 导出、嵌入、特定产品集成和有公开文档的闪卡 API](/blog/quizlet-api.png)

## 简短回答：Quizlet 未公开自助式 API 文档

如果你搜索“Quizlet 有 API 吗”，是因为想自动化操作 Quizlet，那么目前真正能落地的答案是：**没有公开文档说明可供开发者自助接入的 API**。

Quizlet 有几项官方功能，从外部看很像 API 入口，但它们解决的都是更具体的任务：

| 你的需求 | 官方支持的途径 | 适合做什么 | 不提供什么 |
|---|---|---|---|
| 从自己创建的学习集中导出文本 | [Quizlet 网站导出](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) | 一次性复制术语和定义 | 图片、复制来的学习集的导出、学习历史或 API 访问权限 |
| 把公开学习集放到网站或 LMS 页面上 | [Quizlet 嵌入](https://help.quizlet.com/hc/en-us/articles/360032935851-Embedding-sets) | 在页面内提供带 Quizlet 品牌的学习活动 | 结构化卡片数据或读写权限 |
| 把 ChatGPT 对话变成 Quizlet 学习集 | [ChatGPT 中的 Quizlet 应用](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) | 通过 `@Quizlet` 创建并预览学习集 | 可供自己的应用使用的凭据或端点 |
| 在 Google Classroom 中布置 Quizlet 作业 | [Quizlet Google Classroom 插件](https://quizlet.com/blog/quizlet-google-classroom-add-on) | 在 Classroom 中查找、布置和跟踪活动 | 面向自建教育软件的通用 API |
| 构建自己的 Quizlet 集成 | 目前没有公开文档所述的自助接入途径 | 可能存在面向特定合作伙伴的安排 | 公开注册、API 密钥或有文档的卡片数据接口契约 |
| 自动化自己的闪卡工作区 | [Flashcards Agent API](/docs/api/) 或 [MCP 连接器](/docs/mcp-connector/) | 反复读写工作区范围内的卡片和牌组 | Quizlet 兼容性或自动导入 Quizlet |

关键区别很简单：一次性复制自己的卡片文本，属于导出；在其他页面上展示 Quizlet，属于嵌入；特定产品集成只在对应的产品流程里有效。软件如果要反复创建、读取和编辑卡片，就需要有公开文档的读写 API。

## 导出、嵌入和合作伙伴权限都不是公共 API

公共 API 会向外部开发者提供一套接口契约，包括文档、身份验证、受支持的操作、使用规则，以及获取凭据的方式。Quizlet 目前的公开功能，没有一项提供这套完整的自助接入流程。

Quizlet 的**导出**是手动转移。学习集创建者可以在网站上设置术语和定义的排列方式，选择 **Copy text**，再把结果粘贴到其他地方。Quizlet 明确说明，图片无法导出，复制来的学习集不能导出，而且这项功能只能在网站上使用。它适合谨慎完成一次性迁移，却不能让软件持续同步两个系统。

**嵌入**解决的是展示问题，不是数据访问。Quizlet 允许你为公开学习集选择 Match、Learn、Test、Flashcards 或 Spell 模式，再复制相应的 HTML。嵌入后的活动会保留 Quizlet 标志，学习者使用的也是 Quizlet 界面。你的应用拿不到可编辑的卡片记录。

**特定产品集成**有各自约定好的产品流程。Quizlet 可以与 ChatGPT 或 Google Classroom 集成，而不必向所有开发者提供相同的接口。这些发布消息只能证明相应的集成确实存在，不能证明背后还有一个供所有人使用的 Quizlet 公共 API。

同样，旧的封装库，或浏览器开发者工具里看到的某条请求，也不等于受支持的 Quizlet API。它们缺少的正是公开文档和稳定的开发者接口契约。

## 按实际用途选择方案

### 一次性备份或迁移：使用导出

请只为自己创建的学习集使用 Quizlet 官方导出流程。由于流程最后是选择 **Copy text**，请在清理分隔符或映射字段前，先把第一次粘贴得到的文本原样保存一份。你保留的是术语和定义，并不是可以恢复的牌组包；图片和学习历史仍会留在 Quizlet 中。

[2026 年 Quizlet 学习集导出指南](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/)提供了一份实用检查清单，包括原始副本和工作副本、UTF-8、制表符、多行定义，以及迁移卡片内容与迁移排程状态之间的区别。

导出适合范围明确的一次性迁移，不适合让软件每天创建内容、持续同步或反复编辑。

### 只需展示：使用官方嵌入

如果学习者需要直接在班级网站或 LMS 页面上使用公开的 Quizlet 学习集，请采用 Quizlet 网站提供的嵌入代码。选择学习活动，点击 **Copy HTML**，再把代码加入页面。学习者会获得可交互的 Quizlet 活动，但承载它的网站拿不到原始卡片数据。

对教师来说，这往往已经够用。把它叫作 API，只会让需求听起来比实际情况更复杂。

### 使用 ChatGPT 或 Google Classroom：选择对应的特定产品集成

Quizlet 在 2026 年 3 月 10 日发布的 ChatGPT 公告中描述了一套具体流程：连接 Quizlet 应用，在提示词开头输入 `@Quizlet`，先在 ChatGPT 中预览生成的学习集，再到 Quizlet 打开、个性化调整并学习。这是把当前对话转成 Quizlet 学习集的官方支持方式，但它不会向你的机器人、脚本或网站发放可重复使用的 Quizlet API 凭据。

Quizlet 在 2026 年 6 月 30 日发布的 Google Classroom 公告同样只针对一套具体流程。教育工作者可以通过该插件查找和布置活动，包括练习题、闪卡和游戏，再在 Classroom 工作流中跟踪参与度和进度。Quizlet 说明，这项功能需要 Google Workspace for Education Plus；教育工作者可能还需要 IT 管理员授权或开通该插件。

如果这两套现成流程中的某一套正好符合你的目标，直接使用即可。如果你要开发自定义应用，它们都不能替代公共开发者接入权限。

### 需要持续自动化：选择有公开文档的读写接口

持续自动化意味着软件要可靠地反复完成同一类工作：根据笔记创建卡片、列出牌组、更新答案，或长期管理一个工作区。剪贴板导出无法提供这样的接口契约。

稳妥的做法是选择一套闪卡系统，它明确公布外部软件如何进行身份验证，以及支持哪些读取和写入操作。你可能需要把自动化部分交给一个 Quizlet API 替代方案，同时继续用 Quizlet 完成其公开产品所支持的学习任务。

## Flashcards 这个 API 替代方案究竟提供什么

Flashcards Open Source App 为同一套受限且按用户隔离的数据接口提供两种访问方式：

- [外部 Agent API](/docs/api/) 从 `GET https://api.flashcards-open-source-app.com/v1/` 开始。它的发现响应会引导智能体完成邮件 OTP 登录、创建 API 密钥和选择工作区。读取走 SQL 风格的查询路由，写入走独立的执行路由。
- [远程 MCP 服务器](/docs/mcp-connector/)位于 `https://mcp.flashcards-open-source-app.com/mcp`。MCP 客户端可以使用三个工具：`list_workspaces`、`sql_query` 和 `sql_execute`。

两种方式都限定在工作区范围内。公开的资源包括 `workspace`、`cards`、`decks` 和 `review_events`，每条语句最多返回 100 行结果。SQL 风格接口采用的是受限方言，并非原始 PostgreSQL。它没有 OpenAPI schema，因此依赖自动生成 OpenAPI 客户端的工作流需要改用其他接口。

这套接口可以帮助开发者或 AI 智能体自动化处理自己拥有的闪卡，但它不能读取 Quizlet URL、镜像 Quizlet 账户，也不能充当没有公开文档的 Quizlet 客户端。它没有自动 Quizlet 导入器。需要迁移时，请先从自己创建的学习集中导出术语和定义，检查文本，再把它们映射到目标系统的卡片字段。目标系统会建立自己的学习状态，Quizlet 的历史记录不会随之迁移。

如需了解 API 访问之外的产品差异，请参阅[开源 Quizlet 替代方案对比](/blog/quizlet-alternative/)。

## 浏览器里的私有请求不是安全捷径

和所有现代 Web 应用一样，Quizlet 的 Web 界面也会发出网络请求。找到其中一条请求，并不会让它自动变成你的程序可以调用的受支持端点。

浏览器使用的私有端点可能依赖会话 Cookie、内部格式、反滥用机制，以及与当前界面绑定的内部假设。它们可能随时改变，也没有公开的版本管理或迁移说明。更直接地说，[Quizlet 服务条款](https://quizlet.com/tos)最后更新于 2026 年 5 月 28 日，其中禁止抓取和其他自动化提取行为，也禁止未经授权以自动化方式使用该服务。

个人脚本建立在这类端点上已经很脆弱，也很冒险，产品更不应如此。我不会在这里提供猜测出来的端点或逆向工程步骤。

如果是你自己创建的学习集，需要一次性迁移时就使用导出；学习者需要在其他页面使用公开学习集时，就使用嵌入；ChatGPT 或 Google Classroom 的特定工作流，则使用对应的官方集成。需要反复读写时，请选择明确公开自动化接口契约的软件；或者在 Quizlet 发布此类接口前，继续手动处理 Quizlet 部分。

## 如何判断情况是否已经改变

Quizlet 可能会在本文的事实核查日期之后推出开发者计划。真正能说明情况变化的信号，是官方开发者门户或文档开始解释谁可以注册、如何进行身份验证、支持哪些卡片操作，以及适用哪些使用规则。

再出现一个第三方封装库不会改变答案，新的特定合作关系也不会。除非 Quizlet 公开自助式开发者接入文档，否则应谨慎看待有关现有 Quizlet API 的说法，并选择真正适合当前任务的官方支持途径。
