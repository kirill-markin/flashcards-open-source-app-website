---
title: "2026 年如何用 Claude 学习：从导师提问到闪卡复习"
description: "把 Claude 当学习导师，找出真正的薄弱点，通过 MCP 把精选卡片存入 Flashcards，再用 FSRS 安排后续复习。"
date: "2026-05-28"
image: "/blog/how-to-use-claude-for-studying.png"
keywords:
  - "如何用 Claude 学习"
  - "Claude 学习方法"
  - "用 Claude 学习"
  - "Claude 学习流程"
  - "Claude 导师"
  - "Claude MCP 闪卡"
  - "Claude 自定义连接器 闪卡"
  - "Claude Code 闪卡"
  - "Claude Learning Mode"
---

你已经解释了两遍减数分裂，Claude 却又发现你把它和有丝分裂搞混了。这反而是好事：这次答错，比再来一份整理得漂漂亮亮的总结有用得多。

**用 Claude 学习**，最有效的方法是把这样的答错时刻变成一个短循环：让 Claude 提问，挑出真正值得记住的薄弱点，保存几张重点明确的卡，再到 Flashcards 里复习。Claude 负责对话，Flashcards 负责保存卡片；FSRS 这种间隔重复排程算法，则负责安排每张卡下次出现的时间。

接入 Flashcards MCP 连接器后，卡片可以直接从对话进入牌组，不用手动复制粘贴。MCP 可以简单理解为一条连接，让 Claude 调用另一个应用里经过你授权的功能。把写入操作设为需要批准后，Claude 每次修改卡片前都会先征求你的同意。

![温暖的书桌上，Claude 学习笔记中的薄弱点正被整理成 Flashcards 闪卡](/blog/how-to-use-claude-for-studying.png)

## 我自己会用的 Claude 学习流程

和 Claude 聊得太顺，很容易让人产生一种危险的错觉：解释还在屏幕上时，每句话都听懂了。十分钟后，细节却已经想不起来。

我会用下面这个循环：

1. 给 Claude 一个范围明确的小主题，以及它需要的原始材料。
2. 让它一次只问一个问题。
3. 先凭记忆回答，再看解释。
4. 记下答错、答得慢和反复混淆的地方。
5. 从这些薄弱点中选出几个，先预览卡片。
6. 批准想保留的卡片，之后再到 Flashcards 里复习。

比如，Claude 可能会问减数分裂后期 I 分离的是什么。你回答“姐妹染色单体”。Claude 指出，先分离的是同源染色体，然后请你再解释一遍两者的区别。这个具体的混淆点值得做成卡。至于 Claude 为了帮你想明白而写的三段解释，多半不用保存。

这样做出来的牌组只收录了你亲自回忆时暴露的问题。你保存的是练习中真正卡住的地方，而不是聊天里出现过的所有内容。

## 先让 Claude 当你的导师

[Anthropic 的 Learning mode（学习模式）](https://www.anthropic.com/news/introducing-claude-for-education)会通过提问引导学生，而不是马上把答案全说出来。如果你的 Claude 账户支持这个模式，它很适合这套流程。

普通的 Claude 对话也能做到。可以从下面这段提示词开始：

```text
像导师一样教我这个主题。一次只问一个问题，并等我回答。不要太早
透露完整答案。如果我答错了，请明确告诉我漏掉了什么，并先让我
再试一次，然后再解释。记录一份简短的真正薄弱点清单，但暂时不要
制作闪卡。
```

再把正在学习的材料贴进去或上传给它：课堂笔记、一小段阅读材料、订正过的练习题，或者几页幻灯片。我会把每次会话限制在一章或一组紧密相关的概念内。这样更容易核对 Claude 的解释，做出来的卡片离开聊天上下文后也能看懂。

如果要长期学习一门课程，可以用 Claude Project 把对话、原始材料和指令放在一起。Anthropic 的 [Projects 指南](https://support.claude.com/en/articles/9517075-what-are-projects)介绍了具体用法。如果你手头是一份很长的文档，[PDF 转闪卡流程](/zh/blog/how-to-turn-a-pdf-into-flashcards/)会更详细地讲这一步。

## 保存薄弱点，不要保存整段聊天

问了十到十五分钟后，让 Claude 列出它记下的内容：

```text
列出这次会话中发现的薄弱点。只保留我答错、答得慢，或者不止一次
混淆的概念。每一项用一句话说明为什么值得做成闪卡。暂时不要保存
任何内容。
```

最适合做卡的内容通常都很小：

- 一个你想不起来的定义
- 两个被你颠倒的相似概念
- 一个你反复跳过的步骤
- 一个你记得公式、却总是列错的题型
- 一个会改变答案的例外

热身问题、轻松答对的知识点，以及“解释细胞呼吸”这类宽泛题目，都可以跳过。FSRS 能高效安排卡片的复习时间，却不能让一张多余的卡变得值得复习。

## 把选中的薄弱点做成闪卡

启用 Flashcards 连接器后，先由你选出候选项，再让 Claude 起草：

```text
把第 2、4、5 个薄弱点做成 Flashcards 卡片。

每张卡只测试一个记忆目标。正面要具体，背面要简短。只使用这段
对话中有材料支持的事实。写入任何内容前，先展示拟定的正面、背面
和目标牌组。等我批准后，再通过 Flashcards 连接器创建卡片，并把
保存后的卡片读给我核对。
```

预览能在卡片进入牌组前，找出含糊的问题、过长的答案，以及那些语气很肯定、内容却写错了的卡。一张好卡到了明天仍然应该看得懂，即使 Claude 的对话已经不在旁边。

想看更多例子，可以读[如何制作更好的闪卡](/zh/blog/how-to-make-better-flashcards/)。如果每次会话都冒出 50 张“必不可少”的卡，[如何避免 AI 闪卡过载](/zh/blog/how-to-avoid-ai-flashcard-overload/)会比继续加长提示词更有帮助。

## 把 Claude 网页版连接到 Flashcards

对大多数学生来说，从浏览器里的 Claude 开始最省事。用下面这个 URL 把 Flashcards 添加为自定义连接器：

```text
https://mcp.flashcards-open-source-app.com/mcp
```

打开 Claude 的连接器设置，选择 **Add custom connector**，粘贴 URL，然后连接。浏览器会打开 OAuth 授权页面，让你登录 Flashcards 并批准访问。你不需要把 API 密钥粘贴到 Claude 里。完成后，在准备学习的对话中启用这个连接器。

Anthropic 的[自定义连接器说明](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp)展示了当前的菜单路径。如果你使用的是学校管理的 Team 或 Enterprise workspace，可能需要由 Owner 先添加连接器。

[Flashcards MCP 分步指南](/zh/blog/how-to-connect-flashcards-to-claude-with-mcp/)包含连接器界面和第一张测试卡的操作。如果你现在正在设置连接器，可以照那篇指南操作；本文接下来仍然只讨论学习流程。

## Claude Code 需要单独设置 MCP

如果学习材料本来就放在一个文件夹里，比如 Markdown 笔记、代码或技术文档，Claude Code 会很方便。在终端中添加同一个远程 Flashcards 服务器：

```bash
claude mcp add --transport http flashcards https://mcp.flashcards-open-source-app.com/mcp
```

然后在 Claude Code 中运行 `/mcp`，选择 Flashcards 服务器，并在浏览器里完成 OAuth 登录。Anthropic 在 [Connect Claude Code to tools via MCP](https://code.claude.com/docs/en/mcp) 中记录了完整流程。

在 Claude 网页版中添加连接器，并不会同时配置电脑上的 Claude Code。它们访问同一个 Flashcards 端点，但各有自己的设置流程和凭据存储。

如果设备没有图形界面，或者自动化终端会话不方便打开浏览器登录，Flashcards 也接受长期有效的 `fca_` Agent API 密钥，并将它作为 Bearer 身份验证令牌使用：

```bash
claude mcp add --transport http \
  flashcards https://mcp.flashcards-open-source-app.com/mcp \
  --header "Authorization: Bearer ${FLASHCARDS_MCP_TOKEN}"
```

通过环境变量或密钥管理器，把密钥存入 `FLASHCARDS_MCP_TOKEN`。把它当密码保管：不要放进提示词、截图、shell 历史记录或版本控制。[API 参考](/zh/docs/api/)说明了如何获取 Agent API 密钥。普通的交互式会话用 OAuth 即可。

## 先看清 Claude 能读取和修改什么

连接器提供三个工具。使用它们不需要懂 SQL（数据库查询语言），但值得先弄清读写权限的区别：

| 工具 | 用途 | 会修改数据吗？ |
| --- | --- | --- |
| `list_workspaces` | 显示你的账户可以访问的 Flashcards 工作区 | 否 |
| `sql_query` | 读取允许访问的工作区、卡片、牌组和复习数据 | 否 |
| `sql_execute` | 创建、编辑、移动或删除卡片和牌组 | 是 |

前两个工具只读。只有 `sql_execute` 可以修改数据。在 Claude 网页版里，我会把它设为 **Needs approval**（需要批准）。每次允许写入前，我都会检查目标工作区、卡片、牌组和准备执行的改动。涉及批量删除的请求尤其要仔细确认。

服务器会把这些工具限制在你获准访问的工作区和 Flashcards 支持的数据范围内。Claude 不能借此随意访问底层数据库。[Flashcards MCP 文档](/zh/docs/mcp-connector/)提供了当前的认证细节和工具约定。

这里有个很容易忽略的细节：Flashcards 目前是对整个连接器一次授权，不会分别提供只读和读写两种 OAuth 授权。要求每次批准或直接禁用写入工具，都是 Claude 端的设置。Flashcards 服务器则会另外保证两个只读工具无法修改数据。

连接后，经由这些工具处理的卡片文本也可能发送给 Claude。不要接入你无权与该服务共享的学习材料。[通过 MCP 连接 Flashcards 安全吗？](/zh/blog/is-mcp-safe-for-flashcards/)详细解释了数据流向、写入风险、备份和删除限制。

## Claude 也能整理卡片和牌组

保存第一张卡后，连接器仍然有用。Claude 可以检查你授权它读取的卡片和牌组数据；等你批准写入后，它还能创建、编辑、移动、整理或删除卡片和牌组。

你可以这样问：

```text
显示我的 Cell Biology 牌组中关于有丝分裂的卡片。不要编辑。
标出重复卡片，以及一次测试多个概念的卡片。
```

再选择想执行的修改：

```text
把我批准的三张卡移到 Cell Division 牌组。移动完成后把它们读给我，
让我核对结果。
```

如果要改写卡片，先让 Claude 展示新的正面和背面，再执行更新。整理大量卡片时，先做只读检查，并把每次批准限制在一小组明确的记录内。这样更容易在错误波及整个牌组前发现问题。

## 真正的 FSRS 复习要在 Flashcards 里完成

Claude 可以读取你有权访问的卡片和复习数据，但这个连接器不能记录正式的复习事件，不能替你选择 Again、Hard、Good 或 Easy，也不能更新 FSRS 排期。对连接器来说，复习历史和排期数据都是只读的。

Claude 创建卡片后，打开 [Flashcards 网页版](https://app.flashcards-open-source-app.com/)或移动端应用进行复习。你的评分会记录在那里，FSRS 再根据评分决定每张卡下次什么时候出现。

你仍然可以让 Claude 用少量卡片做对话式测验。[AI 闪卡导师指南](/zh/blog/ai-flashcard-tutor-due-cards/)介绍了这套流程。之后仍要回到 Flashcards 完成排定的复习并评分，这样进度才会准确。

## 不想连接时，也可以手动复制卡片

你可能不想让 Claude 访问已经保存的牌组，尤其是材料比较私密时。即使不使用连接器，这套学习方法也一样能用。

让 Claude 输出普通的候选卡：

```text
只把选中的薄弱点做成正面/背面闪卡。每张卡只测试一个记忆目标。
正面要具体，背面要简短。不要编造事实。每张卡单独放在一个文本块里，
方便我检查并手动复制。
```

先在 Claude 里删掉不合适的候选卡，再把剩下的手动复制到 Flashcards。虽然多了一个小步骤，但哪些内容离开对话、哪些内容进入牌组，都完全由你决定。

## 一次有用的 Claude 学习会话可以很小

你不需要用一段提示词，把一学期的内容一次变成 800 张卡。更好的 **Claude 学习流程** 可以放在每节课或每套练习之后：回答几个问题，找出答不上来的地方，保存三四张真正有用的卡，然后继续学习。

这就是我用 Claude 学习的方式：趁刚才怎么答错的还记得清楚，马上把混淆点理顺；等对话结束后，再让 Flashcards 在该复习的时候把问题重新摆到面前。这个小小的交接，能把一段有帮助的对话，变成下个月还可能记得的内容。
