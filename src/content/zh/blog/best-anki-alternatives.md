---
title: "2026 年 Anki 替代品对比：迁移后会保留、失去和得到什么"
description: "从迁移保真度、离线使用、调度、价格、源代码开放程度和自托管等方面比较 7 款 Anki 替代品，并判断何时继续使用 Anki 更稳妥。"
date: "2026-03-14"
updated: "2026-08-28"
image: "/blog/best-anki-alternatives.png"
keywords:
  - "Anki 替代品"
  - "Anki 替代应用"
  - "类似 Anki 的应用"
  - "开源 Anki 替代品"
  - "免费 Anki 替代品"
  - "iOS Anki 替代品"
  - "从 Anki 迁移"
---

Anki 导入可以全程不报错，却依然毁掉一副牌组原本好用的地方。文字导进来了，卡片也能打开。然后你才发现 CSS 没了、音频字段是空的、所有卡片都变成了新卡，或者一条笔记不再生成原本该有的正向和反向卡。

比较 Anki 替代品，真正代价高昂的就是这一部分。编辑器是否更清爽、套餐是否更便宜，迁移前一眼就能看出来。模板行为、复习历史、到期时间、插件、离线媒体，以及以后能否顺利迁出，往往要等造成损失后才会暴露。

这篇对比就从这条边界讲起。下文会比较 7 款类似 Anki 的应用：它们能从现有集合中带走什么、导入后会发生哪些变化，以及什么时候继续使用 Anki 才是更稳妥的结论。

> **利益披露：** 我是 Kirill Markin，也是下文产品之一 [Flashcards](https://flashcards-open-source-app.com/) 的开发者。我把它纳入比较，是因为它支持开源、自托管和智能体工作流。它不是默认赢家：它不能直接导入 `.apkg`，从 Anki 迁移会丢失数据，而且运行自托管技术栈确实是一项基础设施工作。

**事实核查日期：** 2026 年 8 月 28 日。价格为当天可查到的美国公开价格或页面所列当地价格。税费、地区、教育优惠和应用商店计费方式都可能影响实际金额。

![钟表匠检查一枚经过长期使用的怀表机芯能否装进另一只表壳](/blog/best-anki-alternatives.png)

## 迁移之前，先看简短结论

默认继续使用 Anki。只有另一款应用能解决一个反复出现、而且值得付出迁移代价的问题时，才切换。

有 3 款产品可以接收带学习数据的 Anki 包，但承诺的范围各不相同：

- **Mnemosyne** 的文档说明，它能完整导入 Anki，包括自定义卡片类型和学习数据。在这里，它最接近传统的本地开源桌面工作流，不过没有原生 iOS 应用。
- **Mochi** 可以导入带复习历史的 `.apkg` 文件。它会把 HTML 转成 Markdown，移除 CSS 和 JavaScript，并用 Remembered（记得）和 Forgot（忘记）取代 Anki 的 4 个复习按钮。
- **RemNote** 可以导入 `.apkg` 文件、大多数笔记类型和复习历史。但当前指南也说明，导入的卡片会进入单独的 **待学习（Need to Learn）** 队列，所以不要把“已导入复习历史”理解成“今天的 Anki 队列被原样复制”。

其余 4 款产品只能重建内容，不能迁移整个集合：

- **Quizlet** 适合公开学习集、班级、游戏和引导式练习。
- **Brainscape** 为群体提供更简单的 1–5 分信心评分循环。
- **SuperMemo** 意味着改用它的专有方法和课程目录。
- **Flashcards** 提供采用 MIT 许可的网页端和原生客户端、自托管后端、API 与 MCP 访问。它通过 TXT 或 CSV 生成需要人工检查的内容，不会保留 Anki 的学习状态。

如果你的卡片依赖精确渲染、插件或当前复习队列，那么继续使用 Anki 并不是犹豫不决。这就是答案。

## 先数清 Anki 集合里到底有什么

一副“牌组”并不是一个可以原封不动搬走的对象。比较产品之前，先把可能要迁移的内容拆开来看。

| 集合组成 | Anki 可以放进包里的内容 | 目标产品必须明确支持的能力 |
| --- | --- | --- |
| **笔记内容** | 文本字段和已保存的 HTML | 字段映射、填空、非拉丁文字、代码和换行 |
| **卡片生成** | 笔记类型和卡片模板 | 正向/反向卡、自定义字段，以及 CSS 和 JavaScript 行为 |
| **媒体** | 启用 **包含媒体（Include media）** 后打包的本地图片、音频和其他文件 | 文件提取、引用、支持的格式和设备同步 |
| **组织结构** | 牌组、子牌组、标签和可选的牌组预设 | 层级、标签含义、预设和学习范围 |
| **学习状态** | 选择包含的调度信息和复习历史 | 到期时间、间隔、遗忘记录，以及转换到目标调度器的方式 |
| **工作流代码** | 插件不会随牌组一起打包 | 替代卡片浏览器工具、批量编辑、笔记生成及其他插件行为的方案 |

[Anki 导出手册](https://docs.ankiweb.net/exporting.html)记录了这些打包选项。文本导入器只能看到表格中的第一项，最多再加上标签。直接导入 `.apkg` 的工具可以读取更多，但具体转换什么、丢弃什么，仍由每款产品自己决定。

所以，“支持导入 Anki”这句话太模糊，不足以指导迁移。应该分开问 3 个问题：

1. **卡片表达的含义还一样吗？** 检查字段、生成的正向和反向卡、填空、媒体及渲染效果。
2. **目标产品知道我已经学过什么吗？** 检查复习记录、当前状态、到期时间和第一次真正出现的队列。
3. **以后还能再迁出吗？** 从目标产品导出一次，看看导出格式究竟包含什么。

导入器可能通过第一项，却在后两项上失败。

## 迁移后能保留什么

| 产品 | 从 Anki 导入的方式 | 学习状态 | 需要重点测试的损失 |
| --- | --- | --- | --- |
| [RemNote](https://www.remnote.com/) | [直接导入 `.apkg`](https://help.remnote.com/en/articles/6751471-importing-from-anki)，支持大多数笔记类型、媒体和复习历史 | 复习历史会导入，但卡片会进入 RemNote 单独的 **待学习（Need to Learn）** 队列 | 复杂 CSS、自定义 JavaScript、部分动态生成的 TTS，以及名称被修改过的图像遮挡字段 |
| [Mochi](https://mochi.cards/) | [直接导入 `.apkg`](https://mochi.cards/docs/import-and-export/importing/)，包括复习历史 | 历史会导入；文档不承诺 Anki 队列或到期时间完全一致 | HTML 会转成 Markdown；CSS 和 JavaScript 会被移除；今后的评分只有两档 |
| [Mnemosyne](https://mnemosyne-proj.org/) | 项目文档说明可以[完整导入 Anki](https://mnemosyne-proj.org/features)，包括自定义卡片类型和学习数据 | 学习数据会导入，再由另一套调度器处理 | 仍需测试模板能否准确运行、转换后的到期状态和卡片渲染 |
| [Quizlet](https://quizlet.com/) | [粘贴术语和定义](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) | 不保留任何 Anki 学习状态 | 笔记类型、模板、牌组、媒体结构和全部调度数据 |
| [Brainscape](https://www.brainscape.com/) | [CSV、TXT、XLSX 或 ODS](https://brainscape.zendesk.com/hc/en-us/articles/115002369931-How-do-I-import-various-files-to-create-flashcards) | 不保留任何 Anki 学习状态 | 模板、插件、媒体规则和全部调度数据 |
| [SuperMemo](https://www.supermemo.com/) | [粘贴用分隔符隔开的问答行](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning)，每次最多 100 张 | 不保留任何 Anki 学习状态 | 集合结构、媒体、模板和全部调度数据 |
| [Flashcards](https://flashcards-open-source-app.com/) | 根据 Anki TXT 或 CSV 生成需要人工检查的 AI 辅助草稿 | 不保留任何 Anki 学习状态 | 不支持 `.apkg`；模板、媒体保真度、牌组层级和全部调度数据都无法带走 |

## 价格、离线使用、调度和所有权

| 产品 | 2026 年 8 月 28 日核查的价格 | 离线边界 | 调度器 | 源代码与自托管 |
| --- | --- | --- | --- | --- |
| **RemNote** | [免费；Pro 每月 8 美元，按年收取 96 美元](https://www.remnote.com/pricing) | 登录后，已安装的应用可离线编辑和复习。桌面端保留知识库中的全部媒体；移动端只缓存部分近期图片。网页版必须保留已经打开的标签页。 | [Anki SM-2 或测试版 FSRS v6](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) | 核心为专有软件；文档中没有受支持的自托管方案 |
| **Mochi** | [离线使用免费；Pro 同步每月 5 美元](https://mochi.cards/#pricing-section) | 已安装的应用无需账户即可完全离线使用。浏览器存储可能被清除。 | [Mochi 调度器或 FSRS](https://mochi.cards/docs/reviewing/fsrs/)，两者都使用 Remembered / Forgot | 核心为专有软件；公开仓库里只有集成，不是可以自托管的应用 |
| **Mnemosyne** | 免费 | [可在本地使用桌面端，也可在 Android 上离线复习](https://mnemosyne-proj.org/download-mnemosyne.php)；Android 不能编辑。没有原生 iOS 应用。 | 根据 0–5 分回忆评分进行自适应调度 | 各组件使用不同的源代码许可；可在桌面端或无界面机器上自行运行同步服务器 |
| **Quizlet** | 基础功能免费；[Plus 每年 35.99 美元，Plus Unlimited 每年 44.99 美元](https://quizlet.com/upgrade?source=signup) | 下载的学习集可在 iOS 和 Android 应用中通过 Flashcards 和 Match 离线使用。 | 网页端为包含 100 个以上术语的学习集提供[间隔重复](https://quizlet.com/features/spaced-repetition)；移动端仍标注为即将推出。Learn 是另一套自适应练习。 | 专有托管服务；没有受支持的自托管方案 |
| **Brainscape** | [免费；Pro 按年付费时每月 7.99 美元](https://www.brainscape.com/pricing) | [移动端可以保留离线时完成的内容，之后再同步已下载的班级](https://brainscape.zendesk.com/hc/en-us/articles/115002369711-How-do-Brainscape-s-website-mobile-app-interact-with-each-other)；文档不承诺整个卡片库都完整保存在本地。 | [信心重复法（Confidence-Based Repetition）](https://www.brainscape.com/academy/confidence-based-repetition-definition/)，按 1–5 分评分 | 专有托管服务；没有受支持的自托管方案 |
| **SuperMemo** | 有限制的免费账户；[每月 35.99 PLN 或每年 359 PLN](https://www.supermemo.com/en/premium-subscription) | 已下载的移动端课程可离线学习；编辑、AI、搜索、录音和统计不可用。 | [SuperMemo 专有方法](https://www.supermemo.com/en/supermemo-method) | 专有托管服务；没有受支持的自托管方案 |
| **Flashcards** | [测试期间托管版核心功能免费；自托管软件免费](/pricing/)，另加你自己的基础设施成本 | 在线登录并首次下载工作区数据后，原生应用会优先写入本地；远端媒体必须已经缓存。 | [FSRS](/docs/architecture/#scheduling) | MIT；受支持的生产部署是一套以 AWS 为中心的完整技术栈 |

这些表格不是评分榜。如果你有 30,000 张已经积累了成熟复习记录的卡片，能否直接导入可能比其他所有功能都重要。如果你只在 iPhone 上复习，有没有原生应用就可能决定结果。只有你或你信任的人愿意维护代码时，开放源代码才有实际价值。

这里每款产品都有免费入口，但免费的 Anki 替代品并不意味着迁移也免费。订阅价格很容易算清，重建模板、检查媒体和从头积累复习历史，往往才是更大的成本。

## RemNote：把卡片放进关联笔记

RemNote 改变了卡片的来源。你不再把独立牌组放在课堂笔记旁边另行维护，而是在大纲、文档或 PDF 工作流中直接创建卡片。如果在笔记应用和闪卡应用之间来回复制资料已经成了最费事的环节，这确实是离开 Anki 的理由。

它能迁移的内容很多，但描述复习队列时必须谨慎。RemNote 的[当前 Anki 导入指南](https://help.remnote.com/en/articles/6751471-importing-from-anki)要求导出包含调度信息、牌组预设和媒体的 `.apkg`。它会导入复习历史和大多数笔记类型，包括基础卡、填空卡和常见的图像遮挡卡。

同一份指南还说明，新导入的卡片会进入单独的 **待学习（Need to Learn）** 队列。也就是说，RemNote 能读取历史，但文档没有承诺你当前的 Anki 到期队列会原样出现。此外，复杂 CSS 会被丢弃，自定义 JavaScript 不受支持，部分即时生成的文本转语音无法工作，图像遮挡能否正确导入则取决于笔记类型和字段是否使用了预期名称。

先拿一副有代表性的牌组测试，同时检查卡片和第一次生成的复习队列。导入后看起来没问题，只完成了一半测试。

桌面端和移动端应用安装并登录后都可以离线工作。[离线指南](https://help.remnote.com/en/articles/6752029-offline-mode)划出了一条重要的媒体边界：桌面端会保存知识库中的全部图片和 PDF，移动端只缓存部分近期图片。网页应用可以在已经打开的标签页中继续运行，但彻底关闭后无法离线启动。

如果关联笔记值得你改变整个集合模型，可以选择 RemNote。如果卡片模板和插件本身就是这套学习系统，而不是可有可无的装饰，就继续使用 Anki。

## Mochi：本地 Markdown 与完整的原生导出

Mochi 更轻量，适合想要本地数据、以 Markdown 为基础的卡片和更简洁界面的人。安装版覆盖所有主流桌面和移动平台，而且[无需账户即可完全离线使用](https://mochi.cards/docs/getting-started/download-and-install/)。收费的是同步功能，每月 5 美元。

直接导入 Anki 时会带上复习历史，这让 Mochi 明显领先于只支持文本导入的产品。它对转换规则的说明也格外直接：Mochi 会移除 CSS 和 JavaScript，并把 HTML 转成 Markdown。如果卡片含义主要由文字和普通附件承载，这套方式可行；如果含义藏在模板里，这就是警告信号。

Mochi 现在提供两种调度器。自有算法仍是默认选项，也可以[启用 FSRS](https://mochi.cards/docs/reviewing/fsrs/) 而不重置 Mochi 中已有的进度。FSRS 会根据 Mochi 中的复习历史推算卡片状态。即使使用 FSRS，评分仍只有 Remembered（记得）和 Forgot（忘记）两档。因此，依赖 Hard 和 Easy 传递不同信号的 Anki 用户，应该预期每天的复习节奏会有所变化。

与大多数专有应用相比，Mochi 对再次导出数据的边界说明得更清楚。原生 [`.mochi` 导出](https://mochi.cards/docs/import-and-export/exporting/)包含卡片、模板、附件、标签、牌组结构和复习历史。Markdown 和 CSV 更容易在其他工具中查看，但不会包含复习历史和其他元数据。

Mochi 公开的 GitHub 仓库只有[集成和相关工具](https://github.com/mochi-cards/open-source)，不包含核心应用，也没有受支持的同步服务器。选择它应该是为了离线使用和可移植性，而不是掌控源代码。

## Mnemosyne：开源桌面路线

Mnemosyne 最接近传统的“桌面程序加本地数据库”。当前版本支持 Windows、macOS 和 Linux，并提供可以离线复习的 Android 客户端。功能页面列出了富文本卡片、层级标签、插件、0–5 分复习量表，以及包含自定义卡片类型和学习数据的完整 Anki 导入。

如果你想离开 Anki，又不想转向庞大的笔记系统或云服务，它是这里最直接的开源迁移路线。它还有一个[内置同步服务器](https://mnemosyne-proj.org/help/syncing)，可以在桌面端或无界面机器上运行，并合并来自多个客户端的学习数据。

不够顺手的地方也是这项决定的一部分。Android 客户端[不能编辑卡片](https://mnemosyne-proj.org/help/android-client)。iOS 用户必须通过另一台机器上运行的浏览器服务器复习，而该服务器的官方功能页面明确警告，它没有任何安全功能。自行运行同步服务器还意味着要让服务器保持可访问、配置网络并备份数据目录。

它的许可情况比简单贴上“GPL”标签更复杂：[项目许可文件](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/LICENSE)说明，不同组件采用不同条款。[核心许可](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/mnemosyne/LICENSE)采用 AGPL v3，并附加名称/署名条款；[openSM2sync](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/openSM2sync/LICENSE)采用 LGPL v3。如果你计划修改或再分发，请阅读这些文件。

## Quizlet：适合课堂，不适合追求迁移保真度

Quizlet 解决的是另一类问题。公开学习集、教师班级、分享、Match、Test、Learn 和小组活动，比一套深度定制的 Anki 配置更容易直接交给全班使用。

它的迁移边界就是纯文本。Quizlet 可以把粘贴的多行内容转换成术语和定义，但不会读取 `.apkg`，也不会重建笔记类型、模板、调度或复习历史。创建者可以[把自己创建的学习集导出为可复制文本](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets)，其中不含图片；从其他用户处复制的学习集不能导出。这只是内容可移植，并不代表整个集合可以迁移。

Quizlet 的调度方式正在变化。新的[间隔重复（Spaced Repetition）](https://quizlet.com/features/spaced-repetition)流程会在网页端为至少包含 100 个术语的学习集自动启用，并使用 Repeat、Hard、Okay 和 Easy 评分。Quizlet 仍把移动端支持标注为即将推出。Learn 依旧是另一套自适应练习，并设有付费用量限制。

离线使用也只限移动应用，不包括网站。Quizlet 会自动保存最近使用的 8 个学习集，并允许你下载更多；[Flashcards 和 Match 可以离线使用](https://help.quizlet.com/hc/en-us/articles/360030565412-Studying-offline-with-Quizlet-mobile-apps)，恢复联网后再同步进度。

如果分发内容和组织课堂活动才是目标，可以迁移到 Quizlet。单纯为了这些功能而重建一套成熟的个人调度，通常不划算。

## Brainscape：少做调度选择，也少保留迁移数据

Brainscape 要求用户按 1–5 分评价信心，再根据这个信号让掌握较弱的卡片更早出现。完整公式没有公开，但同一个班级里的学生很容易学会这种操作。

它接受 CSV、TXT、XLSX 和 ODS 文件。对于只有正反面的卡片，这很方便，但也意味着模板、插件、媒体规则和 Anki 学习数据都会留在原处。导出个人备份是 Pro 功能，生成的文件可以用电子表格打开，以后也能重新导入。

Brainscape 当前的帮助中心称，网站和移动应用现在都具备相同的核心功能，包括查找、创建、分享和学习。文档还说明了移动端离线使用、手动重新同步，以及更新已经下载到设备上的班级内容。这足以支持一套实际可用的断线重连流程，但不代表整个账户都能完整保存在本地。

导出个人牌组仍是 [Pro 功能](https://brainscape.zendesk.com/hc/en-us/articles/115002383872-How-can-I-export-a-backup-of-my-flashcards)。官方没有发布源代码，也没有提供自托管方案。

如果需要学习的人觉得 Anki 配置太多，Brainscape 值得考虑。对于已经能把这些配置用好的人，它并不是理想的迁出路线。

## SuperMemo：选择它的方法，也接受重新开始

当前的 SuperMemo.com 是一项可在网页端、iOS 和 Android 上使用的语言学习服务，采用 SuperMemo 自己的专有调度方法。它与老用户可能熟悉的传统 Windows 产品并不是同一个产品。

这是对方法和课程目录的选择，不是一次完整的 Anki 迁移。SuperMemo 支持[粘贴用分隔符隔开的问答行来批量创建卡片](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning)，每次最多导入 100 张。我没有找到当前托管服务官方提供的 `.apkg` 导入器或用户导出方式。因此，模板、插件、媒体结构和复习历史都无法通过这条有文档记录的路径迁移。

下载后的课程可以在移动应用中离线学习。[离线指南](https://www.supermemo.com/en/faq/can-i-use-supermemo-offline)明确排除了 AI 功能、添加 MemoCard、搜索、录音、统计和课程编辑器，所以断网前要准备好材料并完成同步。

只有当你足够想要 SuperMemo 自己的方法或课程目录，并愿意从新的调度开始时，才选择它。如果保留现有调度才是首要目标，它解决的就不是你的问题。

## Flashcards：全栈源代码开放，但 Anki 导入能力最弱

Flashcards 允许你掌控的范围很广。[采用 MIT 许可的仓库](https://github.com/kirill-markin/flashcards-open-source-app)包含网页应用、iOS 和 Android 客户端、后端、离线同步、基础设施、[公共 API](/docs/api/) 和 [MCP 服务器](/docs/mcp-connector/)。复习使用 [FSRS](/docs/architecture/#scheduling)。网页端、iOS 和 Android 都会先写入本地，把更改加入待发送队列，再在恢复连接后同步。

但这不代表它兼容 Anki。Flashcards 无法读取 `.apkg` 或 `.colpkg`。受支持的 [Anki TXT 迁移](/blog/migrate-from-anki-txt-export-open-source-flashcards/)是一套需要人工检查、由 AI 辅助起草的流程，主要适合以文字为主的卡片。它不会保留模板、插件、牌组层级、到期时间、间隔或复习记录。TXT 文件中的媒体引用并不是媒体文件，因此媒体较多的牌组需要单独重建和验证。

Flashcards 自己的 `flashcards.zip` 包也达不到完整备份的范围。它可以在 Flashcards 工作区之间迁移卡片、标签和相关媒体，但不会迁移复习历史、FSRS 状态、完整牌组结构、工作区设置或账户。

托管版核心功能在[测试期间免费](/pricing/)。自托管生产技术栈并不是运行一条命令就能完成的 Docker 安装：[自托管指南](/docs/self-hosting/)使用 AWS CDK，并需要 AWS 服务、Cloudflare、Resend、Sentry、密钥、迁移、备份、恢复和升级。Docker Compose 用于开发环境，不是受支持的生产部署方式。

如果切换的理由正是获得完整源代码和由自己掌控的后端，而且卡片足够简单，可以安全重建，那么可以选择 Flashcards。[打开托管应用](https://app.flashcards-open-source-app.com/)试用一副小型临时牌组。如果学习状态的保真度最重要，请继续使用 Anki，或测试 RemNote、Mochi 或 Mnemosyne。

## 哪款 iOS 版 Anki 替代品不会埋下迁移隐患？

“iOS 上的 Anki 替代品”可能指两件事：一款原生 iPhone 应用，或者一款不用支付 [AnkiMobile 24.99 美元一次性买断费用](https://apps.apple.com/us/app/ankimobile-flashcards/id373493387)的应用。

RemNote、Mochi、Quizlet、Brainscape、SuperMemo 和 Flashcards 都有 iOS 应用，Mnemosyne 没有。但迁移问题依然存在：

- **Mochi** 保留的内容比只支持文本导入的 iOS 产品更多：它能导入 `.apkg` 中的复习历史，但会把内容转成 Markdown，并改用两档评分。
- **RemNote** 也能导入 `.apkg` 复习历史，但要测试它的 **待学习（Need to Learn）** 队列，不要直接假设今天的 Anki 调度会保留下来。
- **Quizlet** 适合课堂分发，但从 Anki 迁移时只支持文本，而且新的间隔重复流程还没有登陆移动端。
- **Flashcards** 提供原生 iOS 客户端并开放源代码，但从 Anki 迁移会重置学习状态。
- **Brainscape** 和 **SuperMemo** 只有在它们的复习方法值得你重建卡片和调度时才合适。

如果你只是因为价格想离开 AnkiMobile，先把一次性购买费用与订阅价格、修复迁移所需的时间放在一起比较。一款一次性付费的应用，可能比一款免费却要你手动整理成熟卡片库的应用更便宜。

## 什么时候继续使用 Anki 更稳妥

继续使用也是一项明确的决定，不是没能选出更新的工具。出现以下任一情况时，请保留 Anki：

- 你的集合依赖自定义模板、CSS、JavaScript 或插件；
- 图像遮挡、音频或其他媒体承载着不可缺少的含义；
- 同一条笔记会生成多张正向或反向卡，而且这些卡片必须保持关联；
- 多年的复习历史和当前到期时间，比新编辑器更有价值；
- 你依赖替代品无法提供的桌面工作流或平台组合；
- 替代品只在你不会使用的客户端上支持离线；
- 你在理论上想要自托管，却不想负责运行、保护、备份和升级服务器；
- 除了界面更清爽，替代品没有解决任何反复出现的问题。

Anki 依然拥有成熟的插件生态、灵活的笔记与卡片模板、FSRS 和传统调度控制、本地安装客户端，以及能够携带整个集合的包格式。上面的产品没有一款能完整复现这一切。

如果只想比较所有权边界，请阅读[开源闪卡应用指南](/blog/best-open-source-flashcard-apps-2026/)。如果离线行为才是决定因素，[离线闪卡应用对比](/blog/best-offline-flashcards-app/)会分别说明安装版应用、缓存内容和浏览器标签页的区别。

## 一份最终可以得出“不迁移”的检查清单

不要一上来就迁移整个集合。先设计一个允许失败的测试。

1. **创建恢复包。** 导出包含媒体的 `.colpkg`，把它存放在 Anki 用户资料之外，并在其他地方保留第二份副本。
2. **挑出最难迁移的牌组。** 其中应包括填空、自定义字段、正向和反向卡、嵌套牌组、标签、图片、音频，以及足以暴露调度转换问题的复习历史。
3. **导出目标产品真正支持的格式。** 对于直接导入器，使用包含调度信息、预设和媒体的 `.apkg`。只有接受仅重建内容时，才使用纯文本笔记（Notes in Plain Text）。
4. **记录基准数据。** 写下笔记数、卡片数、标签和牌组名称、媒体数量、几项到期时间和间隔，以及每种笔记类型预计生成的卡片数量。
5. **导入临时空间。** 不要覆盖原来的用户资料，也不要把第一次测试合并到目标产品的永久卡片库中。
6. **分别检查内容和学习状态。** 正面和背面正确，并不能证明填空、媒体、同一笔记生成的关联卡片、复习历史或下次到期时间也保留下来了。
7. **在每台实际使用的设备上测试完全离线启动。** 先复习、编辑，再彻底关闭应用，断网后重新打开，随后恢复连接并检查另一台设备。
8. **趁队列还没分叉，先观察它。** 在两个应用中给同一批正式卡片评分前，比较首次出现的到期卡片和几个样本间隔。第一次在其他应用中完成复习后，两边的调度就会各自独立。
9. **正式迁移前先测试如何退出。** 从目标产品导出，再检查如果明年离开它，你能恢复哪些内容。
10. **保留 Anki 和未改动的备份。** 在替代品经受住日常使用、而且你明确接受每一项损失前，两者都不要删除。

如果目标产品只接受文本，请遵循完整的[安全 TXT 导出流程](/blog/migrate-from-anki-txt-export-open-source-flashcards/)。它会把用于恢复的 `.colpkg` 与用于迁移的工作文件分开，并明确说明学习状态会被重置。

## 按这个顺序做决定

先从你最不能承受损失的部分开始：

1. 如果精确的模板、插件或当前队列不可缺少，请继续使用 Anki，除非一副有代表性的 `.apkg` 测试证明能够保留它们。
2. 如果你希望笔记和卡片成为同一个系统，请测试 RemNote。检查 **待学习（Need to Learn）** 队列，不要只看导入后的页面。
3. 如果本地 Markdown 和便于检查的导出格式比 Anki 渲染更重要，请测试 Mochi。
4. 如果你想要一款专注、开源并能直接导入 Anki 的桌面应用，请测试 Mnemosyne，同时确认它的移动端限制符合你的日常习惯。
5. 如果真正的问题是课堂分发或需要更简单的共同复习方式，请在 Quizlet 或 Brainscape 中重建一个小型学习集。
6. 如果你明确想要 SuperMemo 的方法，就接受全新的调度。如果你明确想要完整技术栈的源代码、自托管、API 和 MCP 访问，就接受 Flashcards 会丢失数据的内容重建流程，以及随之而来的运维工作。

如需逐项比较 3 种差异很大的模式，请阅读 [Anki、Quizlet 与 Flashcards 对比](/blog/anki-vs-quizlet-vs-open-source-flashcards-app/)。

有一条规则很实用：只有收益足够具体，而且所有损失都经过真实测试，才切换。如果有代表性的牌组无法完整跨过迁移边界，继续使用 Anki 就不是保守的退路，而是比较得出的结果。
