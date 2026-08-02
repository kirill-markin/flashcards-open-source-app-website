---
title: "2026 年如何用 ChatGPT 和 Codex 学习：通过 MCP 保存闪卡"
description: "用 ChatGPT Study Mode 找出薄弱点，在 ChatGPT 桌面应用中让 Codex 通过 Flashcards MCP 保存选中的卡片，再用 FSRS 复习。"
date: "2026-08-02"
image: "/blog/how-to-use-chatgpt-codex-for-studying.png"
keywords:
  - "如何用 ChatGPT 和 Codex 学习"
  - "ChatGPT MCP 闪卡"
  - "Codex 闪卡"
  - "Codex MCP 闪卡"
  - "ChatGPT 桌面应用 MCP"
  - "ChatGPT Codex 学习流程"
---

昨天，ChatGPT 问我，为什么样本量越大，置信区间通常越窄。我很有把握地说了三句话，却硬是没提到“标准误”。这个知识缺口值得记下来。至于那次统计学对话里的其他内容，留在聊天里就够了。

如果你想知道**如何用 ChatGPT 和 Codex 学习**，我推荐这套流程：让 ChatGPT 找出真正的知识缺口，由你决定要不要做成卡，再让 Codex 通过 Flashcards MCP（Model Context Protocol，模型上下文协议）连接器保存。卡片会进入你的 Flashcards 卡片库，之后由间隔重复算法 FSRS 在合适的时间安排复习。

这和让 ChatGPT 根据整章内容生成一整套卡片不是一回事。它只是把辅导过程中发现的少量薄弱点，交给长期复习系统。连接器省掉的是复制粘贴，不会替你决定该记什么。

![ChatGPT 和 Codex 学习流程：把选中的薄弱点通过 MCP 变成由 FSRS 安排复习的闪卡](/blog/how-to-use-chatgpt-codex-for-studying.png)

## 最实用的分工：ChatGPT 辅导，Codex 保存，Flashcards 安排复习

每一部分只负责一件事：

1. **ChatGPT Study Mode** 负责提问、给提示，陪你一步步弄懂材料。
2. **你**决定哪些错误值得做成卡片，留到以后复习。
3. **ChatGPT 桌面应用中的 Codex 或 Codex CLI** 通过 Flashcards MCP 创建或整理你已经批准的卡片。
4. **Flashcards** 记录你的复习，并用 FSRS 安排下一次复习时间。

OpenAI 目前的 [Study Mode 指南](https://help.openai.com/en/articles/11780217-chatgpt-study-mode-faq)说明，这项功能会像导师一样逐步辅导、一次只问一道题，还能使用你上传的笔记、图片或 PDF。它很适合帮你发现：哪些内容看起来眼熟，自己却还无法凭记忆解释。

只有第三步需要 MCP。你可以把 MCP 简单理解为一座桥，让 Codex 调用少量经过授权的 Flashcards 工具。这些工具能列出工作区、读取允许访问的学习数据，并在你批准写入后修改卡片或牌组。

## 先用 ChatGPT 找出真正的薄弱点

打开普通的 ChatGPT 对话，再开启 Study Mode。在 ChatGPT 网页版的输入框中输入 `@study`，然后选择 **Study**。Temporary Chats 也支持 Study Mode，但 GPT 或 Project 对话不支持。学习范围不要太大：一节课中的一个部分、几页笔记，或者刚做完的几道练习题就够了。

我会用这段提示词开始：

```text
像导师一样带我学习这些材料。一次只问一个问题，并等我回答。
先给提示，再给出完整解释。当我答错或回答得很慢时，记下具体的
知识缺口。现在不要制作闪卡。
```

先自己回答，再求助。解释摆在眼前时，内容会显得很熟悉；可就在五秒钟前，你可能还完全说不出来。

结束时，让 ChatGPT 给出一份简短的候选清单：

```text
只列出我答错、混淆或没能清楚解释的知识点。每个知识点拟定一个
具体的闪卡正面和一个简短的背面。卡片只能依据我提供的材料。
现在不要保存任何内容。
```

接下来由你做最重要的判断。只有当这个知识缺口离开本次对话后仍然值得记住，而且能用一个明确答案来检验时，才保留卡片。热身题、你本来就会的事实、“解释本章内容”这类宽泛问题，以及下周复习时一看就不想评分的卡，都可以删掉。

在刚才的统计学例子里，一张有用的卡可以是：

```text
正面：为什么样本量越大，置信区间通常越窄？
背面：因为样本量增大会降低标准误，使估计结果更精确。
```

辅导时，关于置信区间的三段解释很有帮助。进入复习队列的，只需要这个明确的知识点。

## 在 ChatGPT 桌面应用中用 Codex 保存卡片

2026 年 7 月 9 日，独立的 Codex 应用并入了 macOS 和 Windows 上的 **ChatGPT desktop app**。Codex 仍然保留自己的视图和聊天记录，与 ChatGPT 的 Chat 和 Work 视图并列。OpenAI 在 [What's new 指南](https://learn.chatgpt.com/docs/whats-new#use-codex-in-the-chatgpt-desktop-app)中介绍了这项变化。

下载或更新 [ChatGPT desktop app](https://learn.chatgpt.com/docs/app)。准备保存卡片时，选择 **Codex**。你可以在 **New chat** 中打开已有的 ChatGPT 对话，再把它添加到 Codex 对话；也可以只粘贴已经批准的卡片清单。无论哪种方式，Study Mode 和 Codex 的 MCP 步骤仍是同一款桌面应用里的两个独立环节。

如果笔记已经存放在电脑本地文件中，也可以一直留在 Codex，使用同一段“一次只问一个问题”的辅导提示词。记得要求它先展示预览，未经批准不要写入卡片。对大多数学习者来说，ChatGPT Study Mode 更适合当导师；涉及本地文件或 MCP 工具时，再交给 Codex 更方便。

## 把 Codex 连接到 Flashcards MCP 服务器

桌面端只需设置几步：

1. 在 ChatGPT 桌面应用中打开 **Settings > MCP servers**。
2. 选择 **Add server**。
3. 名称填写 `Flashcards`，类型选择 **Streamable HTTP**，再输入下面的 URL：

```text
https://mcp.flashcards-open-source-app.com/mcp
```

4. 保存服务器，然后选择 **Restart**。
5. 应用重启后，选择 **Authenticate**，并在浏览器中完成 Flashcards OAuth 登录。
6. 在 Codex 中输入 `/mcp`，确认服务器已连接。

这些步骤来自 OpenAI 目前的 [ChatGPT 桌面应用与 Codex MCP 设置指南](https://learn.chatgpt.com/docs/extend/mcp)。Flashcards 在交互式登录中使用 OAuth 授权，因此普通桌面会话不需要粘贴 API 密钥。如果连接遇到问题，[Flashcards MCP 文档](/zh/docs/mcp-connector/)列出了完整的认证方式和工具规则。

每次写入前都要检查并批准。列出工作区是只读操作；创建、改写、整理或删除已保存的卡片都会修改数据。如果你的 ChatGPT 账户由学校或单位管理，管理员也可能限制你能启用哪些 MCP 服务器或工具。

## 只保存你批准的卡片

切换到桌面应用中的 Codex，把最终候选清单交给它。我会这样写提示词：

```text
使用 Flashcards MCP 服务器。先列出我的工作区，并询问这些卡片应该
保存在哪里。写入任何内容前，先展示拟定的正面、背面、标签和牌组
改动。只创建我批准的卡片。写入完成后，再读取已保存的卡片供我核对。
```

Codex 应该先调用只读的工作区工具。等你选好工作区和整理方式后，它才能准备写入。批准前，请检查工作区、卡片正面与背面、标签、牌组改动，以及会影响多少条记录。

连接器提供三个工具：

| 工具 | 能做什么 | 会写入数据吗？ |
| --- | --- | --- |
| `list_workspaces` | 列出你有权访问的 Flashcards 工作区 | 否 |
| `sql_query` | 读取允许访问的工作区、卡片、牌组和复习数据 | 否 |
| `sql_execute` | 创建、编辑或删除允许操作的卡片和牌组 | 是 |

这些名称看起来有些技术味，是因为连接器内部使用了一套精简的 SQL 式指令。你不需要自己写 SQL。直接用日常语言描述想要的结果，再检查拟执行的改动即可。

这并不是不受限制的数据库访问。每个请求都只能操作已授权的工作区，服务器也只接受文档中规定的读取操作，以及针对卡片或牌组的写入操作。[MCP 安全指南](/zh/blog/is-mcp-safe-for-flashcards/)更详细地介绍了数据流向、权限限制、审批和删除风险。

## 学习结束后，Codex 还能帮你整理牌组

如果一张卡后来显得含糊，或者放错了位置，同一个连接器也能帮忙。先做一次只读检查：

```text
读取我的 Statistics 牌组中提到置信区间的卡片。标出重复卡，以及
一次考查多个知识点的卡片。不要修改任何内容。
```

再批准一项小而明确的编辑：

```text
只改写我选中的两张卡，使用我们刚刚确认的正面和背面。调整标签，
让它们出现在 Inference 牌组中。写入前先展示最终内容，完成后再读取
已保存的卡片供我核对。
```

在 Flashcards 中，牌组其实是保存下来的筛选条件。把卡片放到另一个牌组，可能意味着修改标签，所以标签也要一起检查。你也可以用同样的“先检查，再批准”方式创建牌组、整理少量卡片，或删除你明确指定的卡片。对于任何拥有真实写入权限的工具，“删掉所有看起来不好的卡片”都是一句危险的提示词。

## 正式的 FSRS 复习仍要在 Flashcards 中完成

MCP 连接器可以读取允许访问的 `review_events`（复习记录）和复习安排相关字段。它的写入工具不能创建 `review_events`，不能提交 Again、Hard、Good 或 Easy 评分，也不能修改已经保存的 FSRS 状态或复习安排。对这个连接器来说，这些字段都是只读的。

卡片到期后，打开 [Flashcards 网页版](https://app.flashcards-open-source-app.com/)或移动端客户端。先回忆答案，再显示背面，并在那里选择评分。Flashcards 会记录这次正式复习，再由 FSRS 决定卡片何时重新出现。

Codex 仍然可以根据你授权的卡片数据进行非正式测验，把它当成额外练习即可。它不能替代 Flashcards 中按计划进行的正式复习。[AI 闪卡导师指南](/zh/blog/ai-flashcard-tutor-due-cards/)用完整的测验流程解释了这一区别。

## Codex CLI（命令行工具）使用同一份 MCP 配置

大多数学生可以跳过命令行。如果学习资料本来就放在 Markdown 文件、代码笔记或课程文档文件夹中，Codex CLI 会很方便。

用下面两条命令添加远程服务器：

```bash
codex mcp add flashcards --url https://mcp.flashcards-open-source-app.com/mcp
codex mcp login flashcards
```

运行 `codex mcp list` 检查已保存的服务器，再在 Codex CLI 中输入 `/mcp` 查看当前启用的工具。同一台电脑上的桌面 Codex 视图、Codex CLI 和 IDE（集成开发环境）扩展共用 `config.toml`。只需配置一次；必要时重启另一个本地客户端，服务器就会出现在那里。ChatGPT 网页版不会读取这个文件。

如果当前环境不方便打开浏览器完成 OAuth，Flashcards 也接受长期有效的 `fca_` Agent 密钥，并将其用作 Bearer token（身份验证令牌）。把密钥放进环境变量，注册的只是环境变量名称，不是密钥本身：

```bash
codex mcp add flashcards \
  --url https://mcp.flashcards-open-source-app.com/mcp \
  --bearer-token-env-var FLASHCARDS_MCP_TOKEN
```

[Flashcards API 指南](/zh/docs/api/)介绍了如何获取 Agent 密钥。请把它当成密码，不要放进提示词、截图、命令行历史记录或版本控制。对于需要人在电脑前操作的交互式会话，OAuth 更方便。

## ChatGPT 网页版使用另一条连接器路径

ChatGPT 网页版不会读取本地 Codex `config.toml` 中保存的 MCP 服务器。在网页端，由远程 MCP 支持的工具会通过 **ChatGPT Work** 中的插件接入，工作区管理员可以控制哪些插件和工具可用。

自定义 MCP app 是另一套网页端设置方式。它们使用 ChatGPT Developer mode，具体是否可用、是否允许写入，取决于你的账户和工作区。如果工作区允许添加或发布自定义 MCP app，请按照 OpenAI 目前的 [Developer mode 与 MCP apps 指南](https://help.openai.com/en/articles/12584461-developer-mode-apps-and-full-mcp-connectors-in-chatgpt-beta)设置，并检查已经启用的操作，不要默认 Flashcards 写入工具一定能运行。

因此，你可以从下面四条路线中选择：

- 在 ChatGPT 中学习，再到桌面应用的 Codex 中，通过 MCP 保存已经批准的卡片
- 用 Codex CLI 或桌面 Codex 视图同时完成辅导和 MCP 建卡
- 使用工作区批准的 ChatGPT 网页插件或自定义 MCP app，前提是它开放了你需要的工具
- 手动复制选中的卡片

## 手动复制仍然是个好办法

不使用连接器，其实损失很小。让 ChatGPT 把最终批准的卡片输出成普通的正面/背面文本块：

```text
只返回我选中的卡片。每个文本块包含一个明确的正面和一个简短的
背面，并标明目标牌组或标签。不要添加新卡片或新事实。
```

通读一遍，把保留下来的卡片复制进 Flashcards，再照常复习。对于涉及隐私的材料、由学校管理的账户，或者不想让 AI 客户端读取已保存卡片数据的人，手动录入很合理。

配套文章[如何把 ChatGPT Study Mode 变成闪卡](/zh/blog/how-to-turn-chatgpt-study-mode-into-flashcards/)专门介绍不使用连接器的辅导流程。[如何用 ChatGPT 制作闪卡](/zh/blog/how-to-use-chatgpt-to-make-flashcards/)讲的是从笔记起草卡片的更通用方法。如果你也用 Anthropic 的工具学习，[如何用 Claude 学习](/zh/blog/how-to-use-claude-for-studying/)介绍了类似的“导师到 MCP”流程，不过 Claude 的连接器需要单独设置。

## 别把整堂课都塞进闪卡

一次 ChatGPT 学习会话可能有二十分钟都很有帮助，最后却只做出三张卡。没问题。对话帮你理解主题；卡片只负责保留那些以后还值得复习的薄弱点。

我偏爱的 **ChatGPT 和 Codex 学习流程** 很简单：先回答问题，找出自己哪里答不上来，批准几张重点明确的卡，通过 Flashcards MCP 保存，再回到 Flashcards 完成正式的 FSRS 复习。连接器省掉了复制粘贴。哪些内容值得你以后再花时间，仍然由你决定。
