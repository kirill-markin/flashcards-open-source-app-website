---
title: "如何通过 MCP 将 Nibomo 闪卡连接到 Claude"
description: "通过远程 MCP 连接器，将 Nibomo 连接到 Claude 桌面版或网页版。按照已验证的步骤完成连接、设置工具权限，并尝试保存第一张闪卡。"
date: "2026-06-23"
updated: "2026-09-20"
image: "/blog/how-to-connect-nibomo-to-claude-mcp.png"
keywords:
  - "Nibomo Claude 连接器"
  - "Claude MCP 闪卡"
  - "将 Nibomo 连接到 Claude"
  - "在 Claude 中创建闪卡"
---

Claude 可以通过自定义 MCP 连接器，将闪卡直接保存到你的 Nibomo 工作区。添加一个服务器 URL，登录 Nibomo，再选择哪些操作可以让 Claude 直接执行，无需每次询问。

以下设置步骤已于 2026 年 9 月 20 日在 Claude 桌面版中验证。这种远程连接器适用于 Claude 桌面版和网页版中的普通对话。如果你使用 Claude Code、Codex 或其他终端智能体，请参阅单独的[智能体登录指南](/blog/claude-code-codex-openclaw-flashcards-login/)。

![通过图书馆交接场景说明：可以读取资料，但修改前需要批准](/blog/how-to-connect-nibomo-to-claude-mcp.png)

## 在 Claude 的连接器设置中添加 Nibomo

你需要一个 Nibomo 账号，以及 Claude 的自定义连接器使用权限。Nibomo 使用远程 MCP 服务器，因此无需在本地安装任何软件。Anthropic 的[自定义连接器指南](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp)介绍了这种连接方式。

1. 在 Claude 桌面版中打开 **Settings > Connectors**（设置 > 连接器），或打开[网页版的连接器页面](https://claude.ai/customize/connectors)。
2. 选择 **Add custom connector**（添加自定义连接器）。
3. 名称填写 **Nibomo**，并粘贴以下服务器 URL：

   ```text
   https://mcp.nibomo.com/mcp
   ```

4. 点击 **Continue**（继续）。
5. 在身份验证页面，保持选中 **Sign in now**（立即登录）和 **Register automatically (DCR)**（自动注册）。自定义请求头和高级设置保留默认值。
6. 点击 **Add**（添加），然后点击 **Connect**（连接）。

![Claude 的 Add custom connector 对话框，已填写 Nibomo 和 MCP 服务器 URL](/blog/claude-mcp-nibomo-add-connector.png)

## 登录并授权访问

Claude 会打开浏览器来完成连接。如果先出现确认提示，选择 **Continue connecting**（继续连接）。

Nibomo 的身份验证页面使用 `auth.flashcards-open-source-app.com` 域名。如果你已经登录 Nibomo，页面可能会识别现有会话；否则，请登录你的账号。授权页面会显示 **Claude wants to connect to your Nibomo account**（Claude 希望连接到你的 Nibomo 账号），并说明它将获得读写闪卡和复习数据的权限。

确认连接的是你想使用的账号，然后点击 **Allow access**（允许访问）。页面显示 **Connected**（已连接）后，如果你使用的是 Claude 桌面版，选择 **Open desktop app**（打开桌面应用）。回到连接器设置，你应该能看到 **Nibomo**，以及 URL `https://mcp.nibomo.com/mcp`。

## 写入操作仍需你确认

连接器提供读取学习资料、修改资料和记录复习结果的工具。在 **Settings > Connectors** 中打开 Nibomo，查看各工具的权限。按照本文的设置，将五个读取工具设为 **Always allow**（始终允许），将两个写入工具保留为 **Needs approval**（需要批准）：

| 权限 | 工具 |
| --- | --- |
| **Always allow**（始终允许） | Get flashcards usage guide（获取闪卡使用指南）；List flashcards workspaces（列出闪卡工作区）；Next flashcard question（获取下一张闪卡的问题）；Reveal flashcard answer（显示闪卡答案）；Nibomo SQL query (read-only)（只读 SQL 查询） |
| **Needs approval**（需要批准） | Nibomo SQL execute (write)（执行 SQL 写入）；Submit flashcard review（提交闪卡复习结果） |

这样，Claude 就能查找工作区并读取卡片，但修改数据或提交复习结果前仍需询问你。如果你希望读取操作也先经过批准，可以选择更严格的权限。

![Claude 中已连接的 Nibomo：允许读取工具，写入工具需要批准](/blog/claude-mcp-flashcards-connector-settings.png)

## 试着创建一张卡片，并确认它已保存

打开一个对话，确认已在该对话的连接器菜单中启用 Nibomo。先提出一个简单请求，明确保存位置和卡片内容：

```text
使用 Nibomo 列出我的工作区，并询问我要使用哪一个。
然后创建一张闪卡：
正面：HTTP 404 是什么意思？
背面：服务器上未找到请求的资源。
标签：web-basics
```

选择工作区，查看 Claude 的写入请求，确认内容和保存位置正确后再批准。然后打开 [Nibomo](https://app.flashcards-open-source-app.com/)，检查已保存卡片的正面是否为问题、背面是否为答案。本指南的验证范围包括连接成功和权限设置已保存，不包括创建卡片。你可以通过这次小测试，确认 Claude 也能将卡片保存到你选择的工作区。

如果 Claude 只是在对话中写出卡片内容，请检查设置中 Nibomo 是否已连接、当前对话是否已启用它，以及 **Nibomo SQL execute (write)** 是否被禁用。明确要求 Claude 通过 Nibomo 保存卡片。

如果需要批量制作卡片，可以阅读[如何用 Claude 制作闪卡](/blog/how-to-use-claude-to-make-flashcards/)，了解怎样拟定实用的问题和答案。如果你正在学习 HTTP 状态码，也可以直接使用现有的 [HTTP 状态码闪卡牌组](/catalog/packages/http-status-code-flashcards/)。

## 如果你已在使用旧版连接器 URL

旧端点 `https://mcp.flashcards-open-source-app.com/mcp` 仍然可用。新建连接时请使用 `https://mcp.nibomo.com/mcp`；切换 URL 时，需要重新授权 Nibomo。

如果要按照本指南已验证的顺序操作，请在 **Settings > Connectors** 中打开旧连接器，选择 **Disconnect**（断开连接），再选择 **More options > Remove**（更多选项 > 移除）。按照上面的步骤添加 Nibomo，确认显示的是新 URL 和预期的工具。

如果你刚开始使用 Nibomo，保存第一张卡片后，可以参阅[入门指南](/docs/getting-started/)，了解工作区的用法和学习流程。
