---
title: "2026 年 Quizlet 有 MCP 服务器吗？Claude 和 Codex 可用的方案"
description: "截至 2026 年，Quizlet 尚未提供 MCP 服务器的公开文档。本文对比其 ChatGPT 应用、仅限创建者使用的导出功能，以及 Claude 或 Codex 持续访问闪卡的安全方案。"
image: "/blog/quizlet-mcp-server.png"
date: "2026-09-12"
keywords:
  - "Quizlet MCP"
  - "Quizlet MCP 服务器"
  - "Quizlet Claude 连接器"
  - "将 Quizlet 连接到 Claude"
  - "Quizlet Codex"
  - "Quizlet ChatGPT 应用"
  - "Quizlet API 替代方案"
---

截至 2026 年 9 月 12 日，Quizlet 的公开文档中没有 MCP 服务器的相关说明，也没有可自助接入的公共开发者 API。如果你想找一个能直接粘贴到 Claude、Codex 或其他 MCP 客户端里的 Quizlet MCP URL，目前在 Quizlet 的公开文档中找不到这样的接入方式。

Quizlet 确实提供了官方 ChatGPT 应用。它可以把一段 ChatGPT 对话变成新的 Quizlet 学习集，但这套指定流程并不是可重复使用的 Quizlet MCP 服务器。如果你需要让智能体持续访问已有卡片，实际可行的做法是：从自己创建的学习集中导出文本，保留原始副本，核对迁移结果，再把卡片转入明确支持智能体读写的闪卡系统。

**事实核验日期：** 2026 年 9 月 12 日。

> **披露：** 我是 Kirill Markin，也是 Flashcards Open Source App 的开发者。下文会将它的 MCP 服务器和 Agent API 作为替代方案介绍。Flashcards 无法连接 Quizlet 账户，也不能导入 Quizlet URL。

![一名园丁将一株幼苗从封闭温室搬到接有分支滴灌系统的种植床](/blog/quizlet-mcp-server.png)

## ChatGPT 应用、导出和 MCP 各自解决什么问题

[模型上下文协议（Model Context Protocol）](https://modelcontextprotocol.io/docs/getting-started/intro)是一项连接 AI 应用与外部系统的开放标准。MCP 服务器通常会向兼容客户端提供一个明确的端点和一组定义清楚的可调用工具。

Quizlet 的 [ChatGPT 官方公告](https://quizlet.com/blog/quizlet-comes-to-chat-gpt)描述的是另一种流程：在 ChatGPT 中安装 Quizlet 应用，在提示词开头输入 `@Quizlet`，先在 ChatGPT 内预览生成的闪卡，再到 Quizlet 打开学习集，按需调整并开始学习。

如果你要做的正是“把这段 ChatGPT 对话变成 Quizlet 学习集”，这项功能很合适。但该公告没有公开通用的 Quizlet MCP 端点，没有让 Claude 或 Codex 访问你的 Quizlet 资料库，也没有提供可重复使用的开发者凭据。

上述结论不涉及 Quizlet 的私有或内部基础设施，只针对 Quizlet 在公开文档中提供的接口。关于开发者接入的完整边界，请参阅[2026 年 Quizlet 有公开 API 吗？](/blog/quizlet-api/)。

最清楚的区别如下：

| 你的实际需求 | 目前支持得最好的途径 | 会得到什么 |
| --- | --- | --- |
| 用 ChatGPT 对话新建 Quizlet 学习集 | Quizlet 官方 ChatGPT 应用 | 在 ChatGPT 内通过 `@Quizlet` 发起指定流程，之后进入 Quizlet 编辑和学习 |
| 迁移自己创建的学习集中的术语和定义 | Quizlet 网页版导出 | 得到一次性文本副本，由你保存并核对 |
| 让 Claude、Codex 或其他智能体反复读取或编辑闪卡 | 明确公开 MCP 服务器或 Agent API 文档的闪卡系统 | 通过身份验证访问目标工作区，而不是 Quizlet |
| 基于 Quizlet 账户数据开发软件 | 等待官方开发者文档，或使用获得授权的合作伙伴途径 | 目前没有公开文档所述的自助式 Quizlet API 或 MCP 接口契约 |

Quizlet ChatGPT 应用解决一种创建场景，导出适合范围有限的一次性迁移，MCP 则用于反复访问主动开放工具的系统。三者不是一回事，不能互换。

## 走最短的官方支持路径

如果官方 ChatGPT 应用已经能完成任务，直接用它即可。没必要为了把一段对话变成一个 Quizlet 学习集，再引入第二套系统。

如果你只需要备份或一次性迁移，就用 Quizlet 的导出功能。如果你希望智能体明天还能回来，找到某个牌组、添加卡片并修正内容，目标系统就必须提供有公开文档的读写接口。在 Quizlet 发布这类接口之前，这种持续工作流无法成为官方支持的 Quizlet 账户直连方案。

如果要专门基于 Quizlet 数据开发软件，这条边界同样适用。浏览器里抓到的一条请求、旧封装库或别人逆向工程出来的集成，都不能替代当前的开发者文档。

## 给自己创建的学习集留好回退余地

Quizlet 的[官方导出说明](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets)指出，只有学习集创建者才能导出，而且只能在网站上操作。具体流程是 **More → Export → Copy text**。导出内容包括术语和定义；Quizlet 同时说明，图片无法导出，复制得到的学习集也不能导出。

迁移自己创建的学习集时，稳妥的流程并不长：

1. 使用 Quizlet 网站的导出功能，把结果粘贴到纯文本文件中。
2. 在调整分隔符、换行或文字之前，先保存一份未经改动的 UTF-8 副本。
3. 只编辑工作副本，不要改动原始导出文件。
4. 分别抽查开头、中间和结尾的内容，并检查多行定义和非拉丁字符。
5. 导入或附加工作副本，先预览几张卡片的正反面，确认无误后再保存。
6. 在目标牌组已经打开并测试完毕之前，保留 Quizlet 学习集和原始文件。

[2026 年 Quizlet 卡组导出指南](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/)包含完整的分隔符、CSV 和文件检查方法。有一个限制很容易忽略：导出只会迁移卡片文本，不包括 Quizlet 中的图片、文件夹、学习历史、掌握状态或复习排程。

因此，给整个迁移过程留条退路很重要。如果一条多行定义被拆成两张卡片，或分隔符导致字段错位，原始文件就是一份干净的核对依据。

## 导出后，Claude 和 Codex 可以怎么用

Flashcards Open Source App 公布的远程 MCP 端点是：

`https://mcp.flashcards-open-source-app.com/mcp`

[MCP 连接器文档](/docs/mcp-connector/)定义了三个工具：`list_workspaces`、用于读取的 `sql_query`，以及用于写入的 `sql_execute`。交互式 MCP 客户端可以通过 OAuth 授权。终端中的智能体则可以从 [Agent API 文档](/docs/api/)入手，使用文档中的 HTTP 流程。

这不会让 Flashcards 变成 Quizlet 连接器。受支持的流程是：

1. 从自己创建的 Quizlet 学习集中导出文本；
2. 保留原始文件，并核对工作副本；
3. 将映射后的卡片保存到 Flashcards 之前，先完成审核；
4. 将迁移后的 Flashcards 工作区连接到兼容客户端，以便日后读取和写入。

Claude 的连接步骤见[如何通过 MCP 将 Flashcards 连接到 Claude](/blog/how-to-connect-flashcards-to-claude-with-mcp/)。Codex 和其他智能体则可以使用各自运行环境支持的 MCP 或 Agent API 接入方式。

Flashcards 无法读取 Quizlet URL、镜像 Quizlet 账户、同步 Quizlet 后续变更，也无法找回导出时遗漏的图片和学习历史。它会根据你选择迁移的材料创建自己的卡片，并从头建立新的复习排程。

如果你还想判断智能体访问之外的取舍是否值得，请参阅[开源 Quizlet 替代方案对比](/blog/quizlet-alternative/)。

## 把权限范围控制在任务以内

公开的接口契约可以减少集成时的猜测，但不会让每次 MCP 操作都自动变得安全。OAuth 只负责验证连接身份；它无法保证 AI 生成的卡片内容正确，无法确保返回的卡片数据仍留在闪卡服务内，也无法判断某次编辑是否符合你的意图。

Flashcards 将读取操作与写入工具 `sql_execute` 分开。OAuth 凭据仍可调用整套连接器接口，因此能否禁用某项工具、写入前是否需要审批，都由客户端决定。先从一个小型且不含敏感内容的工作区开始，只让智能体读取任务所需的数据。如果客户端支持，让每次写入都单独审批；接受更改之前，先检查工作区和准备提交的修改。

在确认 AI 客户端的数据保留与处理条款之前，不要连接私密学习资料。详细的威胁模型见[用 MCP 管理闪卡安全吗？](/blog/is-mcp-safe-for-flashcards/)。第一次迁移时，遵循一条简单规则就够了：保留原始导出文件，预览几张卡片，只批准范围明确的写入，然后在目标应用中核对结果，再扩大处理范围。

## 别把浏览器的私有流量当成 API

浏览器开发者工具里能看到的请求，并不等于公共 Quizlet API。私有端点可能依赖会话 Cookie、内部格式和随时会变化的行为。任何自动化使用还必须遵守 [Quizlet 服务条款](https://quizlet.com/tos)，并且不得超出你对相关材料拥有的权限。

本文不会提供抓取方法或逆向工程得到的端点。如果官方 ChatGPT 应用能完成任务，就用它。如果学习集由你创建，而且只需要一次性迁移，就使用导出。如果你需要智能体反复读写，请把审核过的内容迁移到明确公开这类接口的系统；除非 Quizlet 发布新的文档，否则 Quizlet 这一侧仍应手动处理。
