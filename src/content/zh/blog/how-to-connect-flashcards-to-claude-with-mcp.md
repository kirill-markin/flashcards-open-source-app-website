---
title: "如何通过 MCP 将 Flashcards 接入 Claude，并直接在聊天中创建闪卡"
description: "这是一份实操指南：如何在 Claude 中添加 Flashcards MCP 自定义连接器、设置合适的工具权限，并让 Claude 直接把学习卡片写入你的 Flashcards workspace。"
date: "2026-06-23"
image: "/blog/how-to-connect-flashcards-to-claude-with-mcp.png"
keywords:
  - "Claude MCP flashcards"
  - "Flashcards 连接 Claude"
  - "Claude 自定义连接器 Flashcards"
  - "在 Claude 中创建闪卡"
  - "Flashcards MCP 连接器"
  - "Claude browser flashcards"
  - "Flashcards Claude connector"
  - "Claude 创建 Flashcards 卡片"
  - "Flashcards remote MCP"
  - "Claude connector Flashcards workspace"
---

昨天我在 Claude 里大概花了一分钟，就往 Flashcards 里加进了一张测试卡。真正有用的，不是演示本身。真正有用的是，我看见 Claude 先问该用哪个 workspace，再请求写入权限，最后把卡片放进真实应用里，而不是把内容困在聊天记录里。

这就是现在值得搜索 **Claude MCP 闪卡** 的实际原因。

如果你想让 Claude 直接在 Flashcards workspace 里创建卡片，整个设置其实很短：添加 Flashcards 自定义连接器，检查工具权限，在对话里启用它，然后在 Claude 准备保存卡片时批准写入调用。

![Claude 已连接到 Flashcards MCP 服务器，可直接从聊天中创建闪卡](/blog/how-to-connect-flashcards-to-claude-with-mcp.png)

## 这是自定义连接器，不是目录里的现成条目

先说一个关键细节：Flashcards 连接到 Claude 的方式，是通过 **自定义连接器** 加上 **remote MCP**。

所以别去 Claude 官方连接器目录里找一个已经上架的 Flashcards 应用。正常流程是打开 Claude 的[连接器设置页面](https://claude.ai/customize/connectors)，点击加号，选择 **Add custom connector**，然后手动粘贴 Flashcards 的 MCP URL。

Flashcards 连接器的准确 URL 是：

`https://mcp.flashcards-open-source-app.com/mcp`

直接链接：[mcp.flashcards-open-source-app.com/mcp](https://mcp.flashcards-open-source-app.com/mcp)

## 连接之前，先知道两件事

有两点比很多人想的更重要。

第一，Claude 访问远程 MCP 服务器时，走的是 Anthropic 的云基础设施，不是你的笔记本电脑。这意味着服务器必须能从公共互联网访问。Flashcards 已经满足这个条件，所以上面的公共 MCP 端点就是你该填的地址。

第二，把连接器权限当成真正的工具权限来看。只连接你信任的服务器，先看清每个工具能做什么，再认真阅读每一次写入审批请求，然后再决定是否放行。

## 如何在 Claude 里添加 Flashcards MCP 连接器

如果你用的是个人 Claude 账户，设置路径是这样的：

1. 打开 [Customize > Connectors](https://claude.ai/customize/connectors)。
2. 点击 `+`。
3. 选择 **Add custom connector**。
4. 给连接器起个名字，并粘贴 `https://mcp.flashcards-open-source-app.com/mcp`。
5. 添加这个连接器。
6. 点击 **Connect**，如果 Claude 提示登录，就完成登录流程。
7. 在开始聊天使用前，先检查工具权限。

如果你在 Team 或 Enterprise workspace 里，Owner 或 Primary Owner 可以在 **Organization settings > Connectors > Add > Custom > Web** 下添加这个自定义连接器。之后每个用户仍然需要自己完成连接和认证。

## 第一次设置权限时，先保守一点

这里展示的 Flashcards 连接器，暴露出来的工具并不多：

- `list_workspaces`：列出可用 workspace
- `sql_query`：只读查询
- `sql_execute`：执行写入操作，比如创建卡片

Claude 允许你把每个工具分别设成 `Always allow`、`Needs approval` 或 `Blocked`。

第一次配置时，我会把只读工具放在 `Always allow`，把写入工具放在 `Needs approval`。这样 Claude 就能查看你的 workspace、读取数据，但不会在你没看过的情况下，直接把建卡动作变成后台写入。

这也是下面这张连接器设置截图展示的状态：`list_workspaces` 和 `sql_query` 已允许，`sql_execute` 仍然需要你手动批准。

![Claude 连接器设置页中，Flashcards MCP 的读权限已设为始终允许，写权限仍需批准](/blog/claude-mcp-flashcards-connector-settings.png)

以后如果你非常确定，也可以再放宽。刚开始我不会这么做。

## 在你要使用的那段对话里，把连接器打开

设置完成后，打开一个 Claude 对话，并确认这个连接器在当前聊天里可用。当前流程下，你可以在对话里的 `+` 按钮或者 `/` 菜单里启用连接器，然后按需要调整这段聊天的工具访问权限。

如果 Claude 明明该用连接器，却没有调用，先检查这几个最常见的问题：

- Flashcards 连接器是否已经在设置里连上
- 这个连接器是否已经为当前聊天启用
- 写入工具是否没有被设成 `Blocked`

大多数“为什么 Claude 只给我一段文本，却不真的创建卡片”的问题，最后都卡在这里。

## 你可以怎么对 Claude 说

这里的提示词不用写得太隆重。Claude 不需要那一套。

下面这些是不错的起步示例：

```text
在 Flashcards 中创建一张新闪卡。
正面：HTTP 404 是什么意思？
背面：服务器上找不到所请求的资源。
标签：web-basics
如果你不确定该用哪个 workspace，就先问我。
```

```text
在创建任何内容之前，先列出我在 Flashcards 里的 workspaces，并告诉我哪个最适合放语言学习卡片。
```

```text
在 Flashcards 中创建一张新的西班牙语闪卡。
正面：西班牙语里“我想要一杯咖啡”怎么说？
背面：Me gustaría un café.
标签：spanish, travel
使用我的 Personal workspace。
```

我会先从一两张卡开始，而不是一口气做五十张。重点是先确认连接器流程、workspace 选择，以及审批模式都对，再去批量处理更大的内容。

## 实际创建卡片时，流程大概长这样

这部分其实很普通。

你让 Claude 在 Flashcards 里创建一张卡。如果你有多个 workspace，而且默认目标并不明显，Claude 可能会先问你该放到哪里。接着，如果 `sql_execute` 还设成 `Needs approval`，Claude 就会调用写入工具并等待你的批准。

这正是你想看到的行为。

你应该先检查写入请求，再批准，然后让 Claude 完成剩下的动作。下面这张截图里，Claude 先问了该用哪个 workspace，接着执行了 Flashcards 写入操作，最后报告测试卡已经成功添加。

![Claude 在询问使用哪个 workspace 后，通过 Flashcards MCP 连接器创建测试闪卡](/blog/claude-mcp-flashcards-create-card.png)

除非你想非常仔细地检查工具调用，否则不需要关心底层原始 SQL。真正重要的是这个工作流：

1. 让 Claude 创建卡片
2. 如果 Claude 询问，就选择 workspace
3. 检查并批准写入操作
4. 确认保存下来的卡片内容没问题

做到这一步，你就已经可以开始在 **Claude 中创建闪卡** 了，同时又不需要假装 Claude 本身就是复习应用。

## 几个需要诚实面对的限制

这个设置确实有用，但它不是魔法。

Claude 可以帮你在 Flashcards 里创建卡片，也可以通过只读工具读取连接器里的数据、查看 workspace、执行查询。但这并不意味着 Claude 起草出来的每一张卡都够好，也不意味着你应该闭着眼批准每一次写入请求。

我还是会把 Claude 当成起草和录入层，然后把真正重要的部分留给 Flashcards：

- 清理掉质量一般的卡
- 整理牌组和标签
- 用间隔重复来复习
- 在你本来就在用的设备上继续学习

如果你还没接上工具层，只是想先把写卡提示词打磨好，那篇[如何用 Claude 制作闪卡](/blog/how-to-use-claude-to-make-flashcards/)更适合先读。如果你的目标不只是建卡，而是更完整的学习流程，那篇[如何用 Claude 学习](/blog/how-to-use-claude-for-studying/)会更全面。

## Claude 创建完卡片后，还是要去真实应用里看一眼

这其实是我最喜欢这套流程的一点。卡片不会停留在一段看起来很漂亮的 AI 对话里。它会落进 Flashcards 里，而你之后真的可以在那里复习它。

你可以打开托管版 web app，在手机上检查卡片，或者继续按你原本的学习流程往下走：

- [Flashcards 网页版](https://app.flashcards-open-source-app.com/)
- [适用于 iPhone 和 iPad 的 Flashcards App Store 页面](https://apps.apple.com/app/flashcards-open-source-app/id6760538964)
- [适用于 Android 的 Flashcards Google Play 页面](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&pcampaignid=web_share)

![Flashcards Open Source App 在托管网页版和移动应用中的复习体验](/home/app-screens-showcase-en.png)

如果你还没真正用过这个产品，[入门指南](/docs/getting-started/)是最快的开始方式。

## 简短版

如果你搜索的是 **把 Flashcards 连接到 Claude**，真正的流程就是这样：

1. 打开 Claude 的[自定义连接器设置](https://claude.ai/customize/connectors)
2. 添加 `https://mcp.flashcards-open-source-app.com/mcp`
3. 完成连接并检查权限
4. 一开始先把读权限放开，把写权限设为需要批准
5. 在聊天里启用这个连接器
6. 让 Claude 创建一张卡
7. 批准写入调用
8. 回到 Flashcards 里检查保存后的卡片

这样你就能从 Claude 对话直接走到真实的 Flashcards workspace，中间不需要假装有官方集成，不需要手动复制粘贴，也不会在第一天就失去对写入操作的控制。
