---
title: "如何通过 MCP 将 Nibomo 连接到 ChatGPT"
description: "在 ChatGPT 中添加 Nibomo 的 MCP 服务器地址，完成 OAuth 登录并设置权限，再保存一张闪卡，检查连接是否正常。"
date: "2026-09-20"
image: "/blog/how-to-connect-nibomo-to-chatgpt-with-mcp.png"
keywords:
  - "将 Nibomo 连接到 ChatGPT"
  - "Nibomo ChatGPT MCP"
  - "ChatGPT 闪卡连接器"
  - "Nibomo MCP 设置"
---

要将 Nibomo 连接到 ChatGPT，先把它的 MCP 服务器添加为自定义插件，再登录你的 Nibomo 账号。这两步都要完成：即使尚未登录，Nibomo 也可能已经出现在 ChatGPT 的 Plugins（插件）页面上。

连接使用的是 MCP 标准，它让 AI 助手可以调用其他应用的工具。输入服务器地址并授权后，你就可以用日常语言让 ChatGPT 处理闪卡，无需编写代码。

![花艺师向顾客展示一束样品花束，请顾客确认后再制作其余花束](/blog/how-to-connect-nibomo-to-chatgpt-with-mcp.png)

这种连接方式需要开启 ChatGPT 的 Developer mode（开发者模式），再通过服务器 URL 直接添加 Nibomo。

**验证说明：**我们于 2026 年 9 月 20 日截取了这些设置界面，并保存了自定义插件。但登录弹窗没有在我们使用的内嵌浏览器中打开，因此我们未能完成 OAuth 授权，也未能测试登录后的工具调用。下文的提示词供你检查自己的连接时使用；我们尚未通过这套设置验证闪卡创建功能。

## 打开自定义插件表单

你需要一个 Nibomo 账号，以及允许自定义 MCP 连接的 ChatGPT 账号或工作区。如果你还没用过 Nibomo，请先按照[入门指南](/docs/getting-started/)完成设置，确保已有可选择的工作区。

在 ChatGPT 中，打开 **Settings → Security and login → Developer mode**（设置 → 安全与登录 → 开发者模式），并开启开发者模式。然后打开 **Plugins**（插件），通过 **+** 按钮或 **Create app**（创建应用）入口添加连接。我们操作时，表单的标题是 **New Plugin**（新建插件）。OpenAI 的[连接 ChatGPT 指南](https://developers.openai.com/plugins/deploy/connect-chatgpt)介绍了这套流程。

可用功能和界面名称可能因账号和工作区而异。如果找不到 Developer mode 或创建入口，请查看官方指南，并确认你所在的工作区是否限制了这些功能。

填写以下内容：

| 字段 | 填写或选择的内容 |
| --- | --- |
| Name（名称） | `Nibomo` |
| Description（描述） | `读取和编辑闪卡，按间隔重复计划复习。` |
| Connection（连接方式） | Server URL（服务器 URL） |
| Server URL（服务器 URL） | `https://mcp.nibomo.com/mcp` |
| Authentication（身份验证） | OAuth |

请填写完整地址，包括末尾的 `/mcp`。描述可以不填，它只是方便你以后识别这个连接。使用 OAuth 连接时，无需生成 API 密钥。

![ChatGPT 的 New Plugin 表单，已填写 Nibomo MCP 服务器地址并选择 OAuth 身份验证](/blog/chatgpt-mcp-nibomo-create-connector.png)

阅读自定义服务器的风险提示；如果决定继续，请勾选确认框，然后点击 **Create**（创建）。这个按钮位于截图所示区域的下方。这一步会添加你的自定义连接，并不代表 Nibomo 已通过 OpenAI 审核或已上架其公开目录。

## 完成 Nibomo 登录

在 **Add Nibomo to ChatGPT**（将 Nibomo 添加到 ChatGPT）界面，选择 **Sign in with Nibomo**（使用 Nibomo 登录），用存有你闪卡的 Nibomo 账号完成授权。

![登录前的 Add Nibomo to ChatGPT 界面，显示 Sign in with Nibomo 按钮](/blog/chatgpt-mcp-nibomo-sign-in.png)

Nibomo 的身份验证服务使用 `auth.flashcards-open-source-app.com`。因此，即使 MCP 地址是 `mcp.nibomo.com`，登录时仍会用到 `auth.flashcards-open-source-app.com`，这是正常的。

如果没有打开登录窗口，可以在平时使用的浏览器中再试一次。要重新开始登录，请打开 **Nibomo → Plugin actions (…) → Manage → Connect another account**（Nibomo → 插件操作 → 管理 → 连接另一个账号）。完成后，按下文的方法列出工作区，确认 ChatGPT 能否访问你的账号。

## 设置哪些操作需要你批准

在 **Settings → Plugins → Permissions**（设置 → 插件 → 权限）中，我们截取的界面提供了 **Always ask**（始终询问）、**Allow read actions**（允许读取操作）和 **Allow low-risk actions**（允许低风险操作）三个选项。

选择 **Allow read actions** 后，ChatGPT 可以直接列出工作区、读取闪卡，但修改数据仍需你批准。如果你希望每次读取前也先征求你的同意，请选择 **Always ask**。

![ChatGPT 的插件权限界面，已选中 Allow read actions](/blog/chatgpt-mcp-nibomo-permissions.png)

这是适用于所有插件的全局设置，修改后也会影响其他插件。

对 Nibomo 来说，列出工作区、读取闪卡、获取使用说明、获取下一道复习题和显示答案都属于读取操作。创建或编辑闪卡、提交复习结果则属于写入操作。在 ChatGPT 的操作记录中，你可能会看到 `list_workspaces`、`sql_query` 或 `sql_execute` 等工具名，但无需自己编写 SQL。接口详情见 [MCP 连接器文档](/docs/mcp-connector/)。

## 用一张闪卡检查连接

打开对话并选中 Nibomo。先提出一个不会修改任何内容的请求：

> 使用 Nibomo 列出我的工作区。不要创建或修改任何内容。

确认列出的是你自己账号里的工作区。如果 ChatGPT 无法调用 Nibomo，或要求你连接账号，请返回登录步骤。能正常列出工作区后，要先明确指定目标工作区，再保存内容。

接着，让它起草一张闪卡：

> 帮我起草一张关于 HTTP 404 的闪卡。正面只写问题，背面写答案。先给我看正反两面的内容，暂时不要保存。

下面是一张合适的示例：

| 正反面 | 内容 |
| --- | --- |
| 正面 | HTTP 状态码 404 表示什么？ |
| 背面 | 服务器找不到请求的资源。例如，URL 可能指向一个不存在的页面。 |

确认草稿符合你的要求后，指定保存位置：

> 将这一张闪卡保存到我在 Nibomo 中的 [工作区名称] 工作区。不要创建其他闪卡。

ChatGPT 请求批准写入时，先核对卡片内容和目标工作区，再允许它保存。保存后，让 ChatGPT 读取这张闪卡。然后用同一个账号打开 Nibomo 网页版或手机应用，选择对应工作区，等待同步完成。找到这张卡片，检查正反两面的内容，确认保存无误。

## 如果连接仍然无法正常使用

先检查配置中的 URL：`https://mcp.nibomo.com/mcp`。旧的 MCP 域名仍然可用，但如果你把现有连接改成新地址，就需要重新登录，因为授权令牌与服务器地址绑定。

如果 ChatGPT 报告保存失败，请先让它读取工作区，再尝试写入。当第一次操作的结果不明确时，这样可以帮助你避免重复创建卡片。如果卡片已经保存在服务器上，却还没出现在手机中，请检查手机上的账号、工作区和同步状态。

确认这张卡片保存无误后，就可以用同样的“先起草、再批准”流程处理自己的学习资料。[用 ChatGPT 制作闪卡的指南](/blog/how-to-use-chatgpt-to-make-flashcards/)介绍了如何选择有用的问题，以及如何让每张卡片只围绕一个知识点。
