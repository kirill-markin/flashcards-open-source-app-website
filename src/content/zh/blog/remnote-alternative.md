---
title: "2026 年 RemNote 替代方案：免费与开源选择"
description: "对比 RemNote 替代方案的笔记、PDF、卡片、价格和自托管能力，了解哪些内容能迁移、哪些环节会失效，以及如何先演练一次安全迁移。"
date: "2026-03-19"
updated: "2026-08-31"
image: "/blog/remnote-alternative.png"
keywords:
  - "RemNote 替代方案"
  - "RemNote 替代品"
  - "RemNote 开源"
  - "RemNote 免费替代方案"
  - "RemNote 与 Anki"
  - "开源 RemNote 替代方案"
  - "自托管 RemNote 替代方案"
  - "离线闪卡应用"
---

RemNote 把 Anki 导出标为 **Flashcards Only（仅闪卡）**。没有做成卡片的条目会被跳过，导出包也不包含相互链接的笔记、PDF 或 Reader 工作流。一款替代工具或许能接收每张卡片的问答，却把真正让这些卡片发挥作用的整套系统留在 RemNote 里。

最适合你的 **RemNote 替代方案**，应该解决你想离开的那个问题，同时别把 RemNote 中仍然好用的部分一起丢掉。有人在意价格，有人想要普通的本地文件、更成熟的卡片系统，或者可以自行部署和运行的源码。

> **披露：** 我是 Kirill Markin，也是本文对比产品之一 [Flashcards](/zh/) 的开发者。Flashcards 无法完整替代 RemNote。在这几款产品中，RemNote 的笔记与 PDF 一体化工作流最强，Anki 的卡片系统和迁移格式则最成熟。

**事实与价格核查日期：** 2026 年 8 月 31 日。文中采用美国公开定价；注明年付的项目按年付价格计算。税费、地区、应用商店和测试版条款都可能影响实际金额。

![档案修复师从完好保留的关联学习资料夹中取出少量样本，试着转入独立的卡片、文件和模块系统](/blog/remnote-alternative.png)

## 先弄清楚你为什么想离开

- **价格：** 先确认 RemNote Free 是否已经覆盖你的实际工作流。它支持不限量的笔记、闪卡和同步设备，但会限制可批注文档的数量以及部分高级功能。
- **卡片工作流与笔记绑得太紧：** 试试 Anki。它给卡片、模板、导入和 FSRS 留出了更大的空间，让它们真正成为整套系统的核心。
- **想要普通的本地笔记文件：** 用 Obsidian 管理 Markdown 笔记，用 Anki 负责复习。两者没有那么紧密，但笔记和卡片分别归谁管理，一目了然。
- **需要支持 PDF 和内置卡片的开源关联笔记：** Logseq 是这里最接近的选择，不过在 2026 年有一个重要前提：它的新数据库版本仍处于 beta，新 iOS 应用和实时同步处于 alpha，新 Android 应用则尚未开放测试。
- **想要一套专注于卡片、可查看源码并自托管的技术栈：** 如果正反面卡片已经够用，而且你能接受重新开始复习计划并承担大量 AWS 运维工作，可以考虑 Flashcards。
- **想把 PDF 阅读、关联高亮和制卡放在一起：** 继续使用 RemNote。其他方案都无法完整复现这套工作流。

最后一个答案很容易被忽略。如果替代方案只是满足了你对许可证的偏好，却打乱了明天的学习，那么迁移就不算进步。

## RemNote 替代方案决策矩阵

| 方案 | 最适合选择它的理由 | 笔记和 PDF | 调度机制 | 离线使用与所有权 | 价格（核查于 2026 年 8 月 31 日） | 主要迁移边界 |
|---|---|---|---|---|---|---|
| **继续使用 RemNote** | 关联笔记、阅读原始资料和卡片本来就该放在一起 | 原生知识库和 Reader，可把 PDF 高亮、笔记与卡片相互链接 | FSRS-6 beta，需手动启用并训练权重；SM-2 仍是默认算法 | 登录后桌面端和移动端都能离线工作；也可使用仅保存在桌面端的本地知识库 | 免费；Pro 年付折合每月 US$8；Pro with AI 年付折合每月 US$18 | 原生导出最适合恢复到 RemNote，但目前不包含图片和 PDF |
| **Anki** | 卡片、模板、插件和卡片集合的完整性最重要 | 没有集成式的关联笔记或 PDF 阅读工作区 | 成熟的 FSRS 控制，包括参数优化、目标记忆保持率和工作量模拟 | 卡片集合保存在本地桌面端或移动端；桌面核心开源，并提供官方自托管同步服务器 | 桌面端、AnkiWeb 和 AnkiDroid 免费；官方 AnkiMobile 是付费 iOS 应用 | RemNote 导出到 `.apkg` 的只有卡片，不是整套笔记系统；应通过测试导入核对调度数据和媒体 |
| **Obsidian + Anki** | 想要普通的本地 Markdown 笔记，又不愿放弃成熟的卡片调度器 | Obsidian 管本地笔记和附件，Anki 管卡片；没有统一的“从 Reader 到复习”闭环 | Anki FSRS | 本地 Markdown 库加本地 Anki 集合；Obsidian 本身免费，但不是开源软件 | Obsidian 免费；可选的 Sync 年付折合每月 US$4 起；Anki 价格同上 | RemNote 的 Markdown 与 Anki 导出会形成两个系统；RemNote 中笔记、资料和卡片之间的动态链接不会变成一套可移植的工作流 |
| **Logseq** | 明确想要以笔记为核心、支持 PDF 和内置卡片的开源大纲工具 | 相互链接的块、PDF 批注，以及使用四档评分的卡片复习 | 内置四档评分调度器；[新算法的说明](https://github.com/logseq/docs/blob/master/db-version.md#cards)链接到了最初的 FSRS 项目 | 应用采用 AGPL 许可证；数据库版本的数据可导出为 SQLite、EDN 或有损的标准 Markdown | 免费开源应用 | 当前数据库版本处于 beta；新 iOS 应用和实时同步处于 alpha，新 Android 应用尚未开放测试，旧版 Logseq 的 SRS 状态也不兼容新的卡片算法 |
| **Flashcards** | 想在开放的 Web、移动端和后端完整技术栈中使用简单卡片 | 没有笔记知识库、反向链接、PDF 阅读器或原生桌面应用 | FSRS-6，使用固定权重，可调参数比 Anki 或 RemNote 少 | Web、iOS 和 Android 均采用离线优先设计；整套技术栈使用 MIT 许可证，并提供 AWS 生产部署方案 | 托管应用在 beta 期间免费；自托管另有基础设施和服务商成本 | 没有直接的 RemNote 或 Anki 导入器；可以重建内容，但复习历史和 FSRS 状态无法迁移 |

这不是一张功能排行榜。大量依赖 PDF 的学生改用“最开放”的选项，失去的可能比从许可证中得到的更多。只有简单词汇卡片的人，也可能一直在为早已不用的笔记系统付费。先找到符合你实际限制的那一行，再测试它的迁移边界。

免费和开源是两套不同的筛选标准。RemNote Free 和 Obsidian 的核心应用不收费，但都是专有软件。Anki 的桌面核心、Logseq 和 Flashcards 会公开源代码；AnkiMobile 仍是付费 iOS 应用，而自托管 Flashcards 仍会产生云服务成本。

## 当关联工作流本身就是产品价值时，继续使用 RemNote

RemNote 把大多数替代品拆开的步骤整合到了一起。它的 [Reader](https://help.remnote.com/en/articles/6690975-learning-from-pdfs-and-files-with-the-remnote-reader) 可以让 PDF 和笔记并排显示，将引用链接回对应的高亮，再把这些笔记或高亮做成闪卡。Free 方案允许批注三份文档；当前[价格页面](https://www.remnote.com/pricing)显示，Pro 可批注不限数量的文档。

调度器也不再是离开 RemNote 的明显理由。RemNote 目前把 [FSRS-6](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) 列为需要手动开启的 beta 选项。完成至少 1,000 次复习后，它可以根据你的历史数据训练权重。Anki 仍提供更深入的控制，但喜欢 RemNote 笔记和 PDF 功能的学习者，不必只为了使用 FSRS 就放弃它们。

它的离线能力也不只是“已经打开的浏览器标签页还能用”。安装并登录后，RemNote 的[桌面端和移动端应用](https://help.remnote.com/en/articles/6752029-offline-mode)可以离线编辑笔记和复习卡片。桌面端会在本地保存图片和 PDF 的完整副本；移动端和 Web 端可能无法显示尚未缓存的媒体，而且 Web 应用在断网时无法从已关闭或刷新的标签页启动。

如果你是为了寻找 **RemNote 免费替代方案** 才读到这里，迁移前先试试 Free 方案。如果真正的问题是无法访问源代码，本地模式并不等于开源或自托管。另一篇指南详细解释了 [RemNote 是否开源](/zh/blog/is-remnote-open-source/) 的边界。

## RemNote 与 Anki：先看什么才是核心

比较 **RemNote 与 Anki** 时，真正有用的分界并不是“有笔记”和“没有笔记”。Anki 也会存储笔记，但这里的笔记是一组字段，再由[卡片模板](https://docs.ankiweb.net/templates/intro.html)生成复习卡片。RemNote 则从文档和相互关联的条目出发，再把这些内容做成卡片。Anki 是以制卡和复习为核心的成熟系统，RemNote 则是围绕笔记和资料建立的学习工作区。

如果自定义字段、自动生成的卡片变体、HTML/CSS 模板、插件或多年的复习历史最重要，就选 Anki。它目前的 [FSRS 设置](https://docs.ankiweb.net/deck-options.html#fsrs)包括参数优化、目标记忆保持率和工作量模拟。通过[导出功能](https://docs.ankiweb.net/exporting.html)，可以用 `.colpkg` 保留完整集合，而 `.apkg` 牌组包则可包含调度信息、预设和媒体。

RemNote 提供了迁出到 Anki 的路径，但导出项的名称很关键：[Anki 导出是“Flashcards Only（仅闪卡）”](https://help.remnote.com/en/articles/7898019-exporting-notes)。没有做成卡片的条目不会被导出。RemNote 会在导出的卡片中保留上级上下文，并把选择题转换成扁平格式，但导出的并不是你的知识库、PDF 资料库或完整阅读工作流。RemNote 官方导出页面也没有承诺调度状态的每一部分都能进入 Anki。先实际测试，别把这条路线当成无损迁移。

Anki 是这里最强的卡片优先选择，但它无法干净地替代 RemNote Reader。如果你仍要批注论文和编写关联笔记，就给 Anki 搭配一个笔记工具，不要强行让它包办一切。[更完整的 Anki 替代方案指南](/zh/blog/best-anki-alternatives/)还介绍了更多以卡片为核心的选择。

## Obsidian 加 Anki：主动拆分，保留本地文件

有些寻找 RemNote 替代品的人并不需要另一个一体化应用。他们想让笔记继续以普通文件存在，同时让复习系统独立发展。Obsidian 加 Anki 就是一种分工清楚的做法。

[Obsidian 会将笔记](https://obsidian.md/help/Files%2Band%2Bfolders/How%2BObsidian%2Bstores%2Bdata)以 Markdown 格式的纯文本保存在本地文件夹中。不注册账号也能免费使用；可选的 [Obsidian Sync](https://obsidian.md/pricing) 年付折合每月 US$4 起。Obsidian 不是开源软件，但笔记文件可以直接读取，也能用普通文件工具备份。

笔记部分使用 RemNote 的 Markdown 导出，卡片部分使用 `.apkg` 导出，同时要做好后续清理的准备。嵌套大纲即使导出为可读的 Markdown，也不会保留仍能工作的 RemNote 引用、Portal、模板或 PDF pin。笔记和卡片分居两个应用后，两边的修改也不会再自动同步。

如果本地文件的所有权比无缝的“高亮、关联、制卡、复习”闭环更重要，这条路线很合适。如果你当初选择 RemNote 正是为了这个闭环，这笔交换就不划算。

## Logseq：以笔记为核心的开源方案仍在转型

Logseq 理应出现在 **开源 RemNote 替代方案** 的对比中，因为它确实以笔记为核心。官方的 [AGPL 许可仓库](https://github.com/logseq/logseq)将其描述为一款支持关联块和 PDF 批注的知识管理应用。[当前数据库版本文档](https://github.com/logseq/docs/blob/master/db-version.md#cards)还加入了内置卡片：给一个块加上标签，就能看到它何时到期，再用四档评分完成复习。

目前的开发状态比功能列表更重要。Logseq 自己的仓库说明数据库版本处于 beta，新 iOS 应用和实时同步处于 alpha；当前数据库版本文档还说明，Android 应用尚未开放 alpha 测试。Logseq 明确警告可能发生数据丢失，并建议只用非关键的测试图谱，同时做好备份。它的[数据库版本变更说明](https://github.com/logseq/docs/blob/master/db-version-changes.md#high-level-changes)也指出，新卡片算法不会导入旧版 Logseq 闪卡的属性或 SRS 数据。

谈可移植性时也得同样谨慎。当前的[数据库版本导出文档](https://github.com/logseq/docs/blob/master/db-version.md#export-and-import)提供三种格式：包含资源文件的 SQLite、EDN 和标准 Markdown。文档说明，EDN 是唯一能完整保留图谱数据且可以编辑的导出格式，但又不建议把 EDN 当作唯一备份。标准 Markdown 会遗漏属性和时间戳。

因此，如果开源、关联笔记、PDF 和内置卡片缺一不可，Logseq 值得评估。但在 2026 年 8 月，我不会用它在一天之内迁移一套医学生备考所依赖的关键知识库。先让它和 RemNote 并行运行，看看当前这场转型在你实际使用的设备上是否稳定。

## Flashcards：整套技术栈开放，学习模型更聚焦

Flashcards 的取舍几乎与 RemNote 相反。它的[功能](/zh/features/)围绕支持 Markdown 的正反面卡片、牌组、标签、媒体、FSRS 复习、离线优先客户端，以及用 AI 辅助起草卡片展开。它没有关联笔记知识库、PDF 阅读器、原生桌面应用或直接的 RemNote 导入器。

它的开源范围覆盖整套技术栈：采用 MIT 许可证的仓库包含 Web、iOS、Android、身份验证、后端、同步和基础设施。官方支持的[生产环境自托管指南](/zh/docs/self-hosting/)使用 AWS CDK。这不是一条命令就能启动的本地一体化应用。运维者要自行负责云服务成本、密钥、迁移、监控、备份、恢复测试，还要分别构建移动应用。

对现有 RemNote 用户来说，迁移才是更大的限制。Flashcards 只能导入自己的 `flashcards.zip` 包，不能导入 RemNote Markdown 或 Anki `.apkg`。这些包会带上卡片、标签和引用的媒体，但不包括复习历史、FSRS 状态、工作区设置、完整牌组结构或账户。AI 聊天可以把导出的文本转换成卡片草稿，再由你审核；这是在重建内容，不是在延续原来的卡片集合。[TXT 迁移指南](/zh/blog/migrate-from-anki-txt-export-open-source-flashcards/)逐步展示了这条有损迁移的边界。

如果你准备建立一个全新或简单的卡片工作区，而且想拿到整套技术栈的源码，可以选择 Flashcards。需要关联式学习工作流就继续用 RemNote；如果迁移完整性或高级卡片结构更重要，则选择 Anki。更聚焦的卡片系统对比可参阅 [Anki 与 Flashcards](/zh/blog/anki-vs-flashcards-open-source-app/)和[开源闪卡应用指南](/zh/blog/best-open-source-flashcard-apps-2026/)。

## 哪些内容无法从 RemNote 完整迁移

RemNote 提供了几种实用的导出格式，但没有任何一个文件能在其他产品中重建整个 RemNote。

- **RemNote 完整导出** 是恢复到 RemNote 的最佳格式，但目前不包含图片和 PDF。
- **Anki `.apkg` 导出** 只包含闪卡。没有做成卡片的条目不会进入这个导出包，得到的结果也不是相互链接的笔记系统。
- **Markdown、HTML、OPML 和文本** 能让内容在其他地方更容易读取，但无法让另一个应用理解 RemNote 特有的每一种关系和工作流。
- **PDF 高亮和资料** 需要单独核对。RemNote Reader 可以下载带高亮的 PDF，但不要想当然地认为完整知识库导出中会包含这个文件。
- **设置、主题和插件** 不在手动 RemNote 备份中，这是[备份文档](https://help.remnote.com/en/articles/6301627-remnote-backups)明确说明的。
- **复习状态** 应该在目标应用里逐张卡片核对。即使导入保留了问题和答案，复习计划仍可能从头开始。

所以，“支持 Markdown”或“可以导入 Anki”还远远不够。可移植性分好几层：笔记是否可读、媒体是否可用、资料链接是否保留、卡片结构是否完整，以及学习历史是否延续。

## 取消订阅前，先演练一次迁移

让这次迁移可以反悔。现在安静地花一个小时检查，总比考试周才发现少了一份 PDF 便宜得多。

1. 新建一次手动 **RemNote (Complete)** 导出，并保留原文件，不要改动。
2. 在桌面端复制本地 `.db.zip` 备份和 `files` 文件夹。把所有无法替代的原始或带批注 PDF 下载下来。
3. 有意挑一个小而棘手的样本：嵌套笔记、引用、一份 PDF、图片、cloze（挖空）或选择题卡片、标签，以及有重要复习历史的卡片。
4. 按候选方案的需要，将样本导出为每一种必要格式——通常笔记用 Markdown，Anki 用 `.apkg`。
5. 导入一个用完即可删除的临时笔记库、图谱、用户配置或工作区。把它和 RemNote 并排打开，比较数量、格式、链接、媒体、卡片正反面和到期状态。
6. 在计划使用的每台设备上离线操作，然后重新联网，确认编辑和复习记录都能按预期同步到正确的位置。
7. 将完整备份恢复到一个临时的本地 RemNote 知识库。下载下来的归档只有成功打开过，才算得上恢复方案。
8. 至少在两个系统中各进行几次真实复习。等替代方案经受住日常工作流、导出和恢复的检验后，再取消订阅。

即使迁移完成，也要保留最初的导出文件。成功导入只能证明它与目标应用的当前版本兼容，并不代表你以后永远都能访问旧系统里的每一部分数据。

## 实用候选清单

- **继续使用 RemNote：** 适合看重关联笔记和 PDF 学习的人。Free 方案或仅本地知识库也许已经能解决你的限制。
- **选择 Anki：** 适合优先考虑卡片、模板、FSRS 控制和迁移完整性的人。
- **选择 Obsidian 加 Anki：** 适合为了普通的本地笔记文件，愿意同时维护两个工具的人。
- **评估 Logseq：** 适合需要开源关联笔记和内置卡片的人，但它当前的数据库与同步技术栈仍处于 beta 和 alpha 阶段，测试时只用非关键数据。
- **选择 Flashcards：** 适合更看重简单的新卡片系统和整套技术栈的源代码访问，而不是笔记、PDF 或复习计划连续性的人。

我是 Flashcards 的开发者，但面对主要围绕 PDF 建立的关联笔记库，我仍会继续使用 RemNote；面对结构复杂、已经用了很久的卡片集合，我会选择 Anki。Flashcards 是范围更窄的选择：正反面卡片、开放技术栈，以及一套全新的复习计划。

确定自己能接受哪条边界后，只测试对应的那条路线。如果 Flashcards 适合你，[入门指南](/zh/docs/getting-started/)介绍了托管与自托管的入口；如果不适合，继续使用 RemNote 也完全合理。
