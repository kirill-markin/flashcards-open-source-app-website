---
title: "2026 年最佳开源闪卡应用"
description: "从许可证、平台、离线使用、调度算法、同步、导入导出和实际自托管范围，对比 2026 年最佳开源闪卡应用。"
date: "2026-08-02"
image: "/blog/best-open-source-flashcard-apps-2026.png"
keywords:
  - "最佳开源闪卡应用"
  - "开源闪卡应用"
  - "自托管闪卡"
  - "离线闪卡应用"
  - "间隔重复应用"
  - "开源间隔重复"
---

仅凭一个 GitHub 链接，你对一款闪卡应用的了解其实少得惊人。桌面客户端可能开源，iPhone 应用却是专有软件；Docker 镜像可能提供浏览器应用，却不能为原生客户端同步；一款支持离线使用的闪卡应用，其核心也可能完全闭源。

因此，这篇**最佳开源闪卡应用**对比关注的是安装之后真正重要的边界：许可证、平台、离线使用、调度算法、同步、导入导出，以及究竟哪些部分可以自托管。候选名单包括 Anki、Flashcards、Mnemosyne 和 SiYuan，最后再以专有但本地优先的 Mochi 作为参照。

> **披露：** 我是 Kirill Markin，也是本文所介绍产品之一 [Flashcards](https://flashcards-open-source-app.com/) 的开发者。它之所以进入候选名单，是因为其 MIT 许可证仓库涵盖 Web 应用、原生客户端、后端、同步和生产基础设施。但我不会因此默认它就是赢家。Anki 更成熟；Mnemosyne 提供专注的桌面工作流和更强的 Anki 迁移能力；SiYuan 是一套范围更广的知识系统；如果开源并非硬性要求，Mochi 也很值得考虑。

**事实核实日期：** 2026 年 8 月 2 日。

![温暖书桌上按调度、同步、导出和自托管比较五种开源及离线闪卡系统](/blog/best-open-source-flashcard-apps-2026.png)

## 本文所说的“开源”“离线”和“自托管”分别指什么

如果一款产品面向用户的核心应用公开了源代码，并明确说明许可条款，我就把它列入开源组。之后，我会用同一组实际问题逐一检查，而不是把 GitHub 星标数当成质量评分。

- **开源**描述的是代码附带的法律权利，并不保证离线访问、持续维护的移动应用或可安装的服务器。
- **离线使用**是指已安装的客户端无需连接服务器，也能基于本地数据创建或复习卡片。专有软件同样可以满足这一要求。
- **自托管同步**是指由你运行负责在客户端之间交换数据的服务。它可能完全没有浏览器界面。
- **完整 Web 应用自托管**是指部署中包含可直接在浏览器里使用的应用。原生客户端可能仍需单独构建和分发，也可能采用另一套同步系统。

这些区别正是本文的重点。“有源码”“能离线使用”和“可在 Docker 中运行”并不是可以互换的承诺。

## 开源闪卡应用对比

前四款是真正开源的产品。Mochi 排在最后，是因为它的离线能力和便携格式与这类搜索需求密切相关，但其核心应用是专有软件。

| 产品 | 许可证 / 源码状态 | 平台 | 离线 | 调度算法 | 同步 | 导入 / 导出 | 确切的自托管范围 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Anki](https://github.com/ankitects/anki) | [桌面端核心：AGPL-3.0-or-later，部分代码采用 BSD-3-Clause](https://raw.githubusercontent.com/ankitects/anki/main/LICENSE)；AnkiDroid 是独立的开源项目；官方 AnkiMobile 是专有软件 | Windows、macOS、Linux；Android 使用 AnkiDroid；iOS 使用 AnkiMobile；通过托管服务 AnkiWeb 在浏览器中学习 | 原生桌面和移动客户端均可离线使用 | [FSRS 和旧版 SM-2](https://docs.ankiweb.net/deck-options) | AnkiWeb 或官方自托管同步服务器 | [导入文本、Anki 卡组包和 Mnemosyne `.db`](https://docs.ankiweb.net/importing/intro.html)；[导出文本、`.apkg` 和 `.colpkg`](https://docs.ankiweb.net/exporting.html) | **仅限同步。** 官方服务器不是可自托管的 AnkiWeb，也不提供浏览器学习界面 |
| [Flashcards](https://github.com/kirill-markin/flashcards-open-source-app) | MIT；Web、iOS、Android、后端、同步和基础设施均在同一仓库中 | [Web、iOS、Android](https://github.com/kirill-markin/flashcards-open-source-app#available-on) | 数据优先写入本地的 IndexedDB 或 SQLite；断网期间排队的变更会在恢复连接后同步 | [FSRS](/docs/architecture/#scheduling) | 托管同步或自托管生产技术栈 | `flashcards.zip` 只迁移卡片、标签和相关媒体；需人工审核的 AI 辅助 TXT/CSV 制卡流程存在信息损失；不支持直接导入 `.apkg` | **完整技术栈，但限制不少。** 生产环境以 AWS 为中心，并依赖多项外部服务；Docker Compose 仅用于开发 |
| [Mnemosyne](https://mnemosyne-proj.org/) | [不同组件采用不同许可证](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/LICENSE)：[核心采用 AGPL v3，并附加名称/署名条款](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/mnemosyne/LICENSE)，[openSM2sync 采用 LGPL v3](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/openSM2sync/LICENSE) | [Windows、macOS、Linux、Android；可通过运行中的桌面服务器在浏览器中复习](https://mnemosyne-proj.org/download-mnemosyne.php) | 桌面端可完全在本地使用，Android 可离线复习；Android 无法编辑卡片 | 根据 0–5 的回忆评分自适应安排复习 | 内置同步，可连接自己的桌面端或无头服务器 | [完整导入 Anki，包括自定义卡片类型和学习数据](https://mnemosyne-proj.org/features)，另支持纯文本和旧格式；分享导出和文本导出并非完整备份 | **同步加功能有限的浏览器复习。** 你运行的是 Mnemosyne 实例，而不是托管式 Web 产品 |
| [SiYuan](https://github.com/siyuan-note/siyuan) | AGPL-3.0；官方项目还链接了开源的 Android、iOS 和 HarmonyOS 客户端 | Windows、macOS、Linux、Android、iOS、HarmonyOS；通过 Docker 在浏览器中使用 | 可完全离线在本地使用 | [FSRS](https://b3log.org/siyuan/en/) | 官方端到端加密同步，或面向付费用户的第三方云存储支持 | 常规应用支持导入 Markdown 和数据，也支持导出 Markdown、PDF、Word、HTML 和数据；官方文档未说明支持 `.apkg` 导入 | **通过 Docker 提供完整的浏览器应用。** Docker 模式仅限浏览器，不能为桌面或移动客户端同步 |
| [Mochi](https://mochi.cards/) | 核心为专有软件；其[公开仓库包含集成](https://github.com/mochi-cards/open-source)，并非应用本身 | [Web、Windows、macOS、Linux、iOS、Android](https://mochi.cards/docs/getting-started/download-and-install/) | 无需账户即可完全离线使用；浏览器中的存储可能被浏览器清除 | 未公开公式的自适应调度算法，提供 Remembered / Forgot 两种回答，默认目标记忆率为 90% | 付费托管同步 | 导入 `.mochi`、Anki `.apkg`、Markdown 和 CSV；导出 `.mochi`、Markdown 和 CSV，各格式保留的元数据不同 | **无。** 不提供受支持的核心应用或同步服务自托管方案 |

这是一份决策参考，而不是功能完整度评分。如果你有十年的复习历史，能否直接导入 `.apkg` 可能比自托管更重要。在课堂场景中，浏览器界面可能比移动端编辑更重要。先从那个会让你直接淘汰一款应用的要求开始筛选。

## Anki：成熟、灵活，但边界复杂

对于结构复杂的现有卡片库，Anki 仍然是最稳妥的选择。它的卡片模板、插件生态、调度控制和包格式已经经过多年打磨。如果你使用 Anki 看重的正是这些功能，换到较新的应用可能什么问题也解决不了。

它的源码情况并非所有部分都统一开源，而是多种模式并存。[桌面版许可证](https://raw.githubusercontent.com/ankitects/anki/main/LICENSE)为 AGPL-3.0-or-later，部分代码采用 BSD-3-Clause，捆绑组件则采用其他许可证。[AnkiDroid](https://github.com/ankidroid/Anki-Android) 是独立的开源 Android 项目。官方 iOS 应用 AnkiMobile 是专有软件，AnkiWeb 则是托管的浏览器服务。原生客户端可离线使用；选择官方托管生态时，AnkiWeb 负责提供浏览器访问。

Anki 同时支持 [FSRS 和较早的 SM-2 调度算法](https://docs.ankiweb.net/deck-options)。它的迁移支持是本次对比中最强的：Anki 可以导入文本文件、Anki 卡组包和 Mnemosyne 2.0 数据库，也可以导出文本、`.apkg` 或 `.colpkg` 包，并按需包含媒体和调度数据。

自托管在这里所指的范围更窄。[官方同步服务器](https://docs.ankiweb.net/sync-server.html)可以为不想使用 AnkiWeb 的高级运维者同步兼容的 Anki 客户端。它并不托管 AnkiWeb 界面，所以既不能提供浏览器学习，也没有自托管的账户网站。随着同步协议变化，客户端和服务器版本还需保持兼容。

如果你看重成熟的模板、插件、可靠的包迁移和广泛的客户端支持，就选 Anki。它在本次对比中的短板不是功能，而是开源桌面端核心、独立 Android 项目、专有官方 iOS 客户端和托管 Web 服务彼此分离。

## Flashcards：全栈源码背后，是一整套 AWS 级别的运维工作

Flashcards 做了另一种取舍。它采用 MIT 许可证的仓库包含浏览器应用、iOS 和 Android 客户端、后端、离线同步及基础设施。相比 Anki 官方同步服务器，运维者可以掌控更多产品组件，但也要承担多得多的工作。

Web 应用将本地数据存入 IndexedDB；iOS 使用 SQLite；Android 则通过 Room 使用 SQLite。[离线优先架构](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/architecture.md#offline-first-sync)会先写入本地，再把操作放进发件箱队列，等客户端恢复连接后推送。复习采用 [FSRS](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md)。无论是官方托管还是自托管部署，都采用同一套由 Web 应用、同步和 API 构成的产品模式。

“全栈自托管”需要详细解释。官方支持的[生产环境自托管指南](/docs/self-hosting/)使用 AWS CDK，而不是不绑定云厂商的 Docker 生产套件。它要求使用 AWS 基础设施和 Cognito、Cloudflare DNS、Resend 邮件投递以及 Sentry 配置。密钥、迁移、告警、备份、恢复测试和升级都由你负责。仓库中的 Docker Compose 配置会为本地开发启动 PostgreSQL 并执行迁移；它明确不是生产部署路径。原生应用虽然也在仓库中，但私有 iOS 和 Android 版本必须另行构建和分发。在把它称为一键部署之前，请先阅读[架构概览](/docs/architecture/)。

迁移是用户更容易直接感受到的限制。`flashcards.zip` 包可以在 Flashcards 工作区之间迁移卡片、标签和相关媒体，但不会迁移复习历史、FSRS 状态、工作区设置、完整卡组结构或账户。它只是内容迁移，既不是完整备份，也无法把托管版无损迁移到自托管版。

它没有直接导入 Anki `.apkg` 的功能。官方支持的 [TXT/CSV 迁移流程](/blog/migrate-from-anki-txt-export-open-source-flashcards/)会让 AI 根据导出的文本起草卡片，再由用户审核草稿。模板、调度状态和卡组结构都不会保留，即使内容很简单也需要检查。这套流程适合重建以文本为主的卡片，不能据此声称与 Anki 完全兼容。

如果你明确需要现代开源 Web 与原生应用技术栈、FSRS、离线优先客户端，以及由运维者控制的后端，就选 Flashcards。如果你重视卡片库的完整迁移，就选 Anki；如果传统本地应用加自建同步已经覆盖了你所需的所有权边界，就选 Mnemosyne。

## Mnemosyne：专注桌面学习和自建同步

Mnemosyne 是这里最不臃肿的选择。它是一款传统的桌面间隔重复应用，拥有可靠的本地使用体验、Android 复习客户端、Anki 迁移能力，以及可通过桌面端或无头实例自行托管的同步协议。

介绍它的许可证时必须措辞准确。[根许可证文件](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/LICENSE)说明，不同组件采用不同许可证。[Mnemosyne 核心许可证](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/mnemosyne/LICENSE)为 AGPL v3，另有一项附加条款：衍生作品必须清晰展示 Mnemosyne 名称，具体形式需与维护者讨论。内层的 [openSM2sync 许可证](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/openSM2sync/LICENSE)为 LGPL v3。单独一个链接无法准确概括这两个组件。

当前下载页面列出了适用于 Windows、macOS 和 Linux 的 2.11 版，以及支持离线复习和桌面端同步的 Android 客户端。在其他移动平台上，文档提供的方案是通过桌面端运行的 Web 服务器，在浏览器中复习。[Android 客户端不支持编辑卡片](https://mnemosyne-proj.org/help/android-client)，所以它只是复习辅助工具，而不是完整的移动端编辑器。

调度算法会根据 0–5 的自我评分调整后续间隔。Mnemosyne 还提供插件架构，可替换调度器或数据库等核心组件。它的[内置同步](https://mnemosyne-proj.org/help/syncing)可以在多台设备之间合并卡片和学习数据，并允许一台桌面设备或一个无头进程充当服务器。桌面端的 Web 服务器可以提供浏览器复习，但官方功能页面明确警告，该浏览器服务器不具备任何安全功能。它不是一套完善的多用户 Web 服务。

导入能力是选择 Mnemosyne 的一大理由：项目文档说明，它可以完整导入 Anki 的自定义卡片类型和学习数据，还支持纯文本、SuperMemo 和 CueCard 格式。导出则需要更谨慎。`.cards` 流程用于[分享所选卡片](https://mnemosyne-proj.org/help/sharing-cards)，不会保留完整的学习状态。如需完整迁移或备份，[多计算机指南](https://mnemosyne-proj.org/help/mnemosyne-and-multiple-computers)要求复制数据目录。

如果你想掌控本地桌面学习和自托管同步，又不愿运维一整套云应用技术栈，就选 Mnemosyne。如果打算离开桌面使用，先确认 Android 的编辑限制和浏览器服务器的安全边界是否能接受。

## SiYuan：一套恰好内置闪卡的自托管知识库

SiYuan 是开源组中的异类。它首先是一套注重隐私的知识管理系统，提供块引用、文档、数据库和内置的 FSRS 闪卡。如果卡片来自你的笔记，这种设计很有吸引力；如果你只想要一个复习队列，它可能显得过于庞大。

[官方仓库](https://github.com/siyuan-note/siyuan)采用 AGPL-3.0，并链接了开源的 UI、内核、Android、iOS 和 HarmonyOS 项目。桌面和移动应用将数据保存在本地，离线时仍能使用。原生应用可以使用 SiYuan 的端到端加密云同步；付费会员还可配置受支持的第三方云存储。这条原生同步路径与 Docker 托管彼此独立。

Docker 运行的确实是一套可通过浏览器访问的 SiYuan 应用，但仓库列出了三个重要限制：桌面和移动应用无法连接；不能导入 Markdown；不能导出 PDF、HTML 和 Word。换句话说，Docker 模式只能在浏览器中使用，并不是为原生客户端提供的私有同步服务器。

常规应用的导入导出范围更广：可导入 Markdown 和 SiYuan 数据包，也可导出带资源的 Markdown、PDF、Word、HTML 和数据格式。不能忽略上述限制，直接把常规模式的这些能力写进 Docker 一栏。我没有在官方文档中找到直接导入 Anki `.apkg` 的功能。

如果主要目标是搭建本地或自托管知识库，并把闪卡纳入其中，就选 SiYuan。若要专门迁移 Anki，Anki 或 Mnemosyne 的卡片模型更直接，学习数据的迁移方式也更清晰。

## Mochi：优秀的离线体验不等于核心开源

虽然 Mochi 不符合开源候选名单的标准，但在这项决策中仍值得考虑。它是一款界面清爽克制、以 Markdown 为中心的闪卡与笔记应用，支持 macOS、Windows、Linux、iOS、Android 和 Web。桌面与移动应用无需账户即可[完全离线运行](https://mochi.cards/docs/getting-started/download-and-install/)。Web 版也使用离线浏览器存储，但文档警告，这些数据可能被浏览器意外清除。

它的调度器提供 Remembered 和 Forgot 两种回答。文档介绍了自适应间隔、重新学习机制和 [90% 的默认目标记忆率](https://mochi.cards/docs/reviewing/due-today/)，但没有公开公式。跨设备同步是一项付费托管功能。

数据便携性是它的优势。Mochi 可以[导入包含复习历史的 Anki `.apkg` 文件](https://mochi.cards/docs/import-and-export/importing/)，但会移除 CSS 和 JavaScript，并把 HTML 转换为 Markdown，因此自定义样式无法原样迁移。它还支持导入 Markdown、CSV 和原生 `.mochi` 格式。

[原生 `.mochi` 归档](https://mochi.cards/docs/import-and-export/mochi-format-reference/)可以包含卡组、卡片、附件、标签、模板和复习记录。[Markdown 和 CSV 导出](https://mochi.cards/docs/import-and-export/exporting/)更便于在其他工具中检查，但会丢失文档列出的复习历史、顺序或模板等元数据。因此，当前文档并不支持过去那种“Mochi 的导出绝不包含复习历史”的说法：原生格式会保留复习历史。

Mochi 的[开源仓库](https://github.com/mochi-cards/open-source)包含集成、插件和相关工具，不包含核心应用或可部署的同步服务。它没有受支持的自托管方案。如果离线使用、Markdown 和 `.apkg` 迁移比访问源码更重要，可以选择它。

## 哪款间隔重复应用符合你的硬性要求？

没有哪一款必然胜出。真正有用的选择，要从你绝不愿妥协的要求开始。

- **选择 Anki**，如果你需要最成熟的模板、插件、包迁移和客户端生态。其官方自托管只涵盖同步，不包括 AnkiWeb。
- **选择 Flashcards**，如果你需要一个以 MIT 许可证提供 Web、原生应用和后端的仓库，以及受支持的完整生产部署。你需要接受以 AWS 为中心的技术栈、外部服务依赖、繁重的运维工作和有损的 Anki 迁移。
- **选择 Mnemosyne**，如果你需要专注的本地桌面学习、强大的 Anki 导入和自建同步服务器。Android 无法编辑卡片，浏览器复习也依赖你正在运行的实例。
- **选择 SiYuan**，如果笔记和文档才是你的主要系统，而 FSRS 闪卡应该内置其中。Docker 提供的是浏览器应用，不是原生客户端同步。
- **选择 Mochi**，如果你能接受专有软件，但需要一款完全离线、支持 Markdown 并可直接导入 `.apkg` 的应用。它不提供核心源码或自托管方案。

如果 Anki 已经足够好用，而上述限制都不影响你，继续使用它就是合理的答案。更换间隔重复应用会带来实实在在的工作量，尤其当卡片库中包含模板、媒体和多年的调度历史时。如需了解不受开源要求限制的更多产品，请阅读[更全面的 Anki 替代品对比](/blog/best-anki-alternatives/)。

## 迁移全部内容前的检查清单

在处理整个卡片库之前，先选一个有代表性的卡组测试。别漏掉最棘手的卡片：自定义字段、挖空题、图片、音频、嵌套卡组、标签，以及足以暴露调度算法差异的复习历史。

1. 从当前应用导出完整备份，并保持该文件原封不动。
2. 记录卡片数量、字段名、标签、卡组结构、媒体数量，以及一组到期日期样本。
3. 确认目标应用能读取原生格式，还是只支持文本、CSV 或 Markdown。导入文字并不等于保留整个卡片库。
4. 完成测试导入后，分别检查格式、挖空题、模板、媒体、标签和复习历史。
5. 在你打算使用的每台设备上离线复习。检查哪些编辑会在本地排队，哪些操作仍需连接服务器。
6. 制造几处可以丢弃的冲突编辑；在把真实资料交给同步之前，确认它如何解决冲突。
7. 对于自托管闪卡，实际执行一次升级、一次备份和一次恢复。容器正在运行不等于你拥有恢复方案。
8. 删除、冻结或重置旧环境之前，先同时使用两款应用学习几天。

导出格式值得单独核查。Anki 包能保留远多于纯文本的信息。Mnemosyne 的分享导出会省略学习数据。Flashcards 包迁移的是内容，而不是完整的学习状态。Mochi 原生归档保留的元数据比 Markdown 和 CSV 导出更多。SiYuan 的 Docker 部署则去掉了常规应用中的导入导出命令。

## 为什么 Scholarsome 和 OpenCards 没有进入候选名单

[Scholarsome](https://scholarsome.com/) 是开源且可自托管的，但其官方网站仍把“Spaced repetition system implementation”列在即将推出的功能中。即使它的其他学习模式很实用，这一点也足以让它退出这场以周期性调度复习为核心的对比。

[OpenCards](https://github.com/holgerbrandl/opencards) 是一款围绕 PowerPoint 和 Markdown 文件构建的桌面闪卡应用。我没有把它列入候选名单，因为其官方仓库的[最新标签版本是 2017 年 1 月发布的 v2.5.1](https://github.com/holgerbrandl/opencards/releases/tag/v2.5.1)，而[最近一次仓库提交是在 2018 年 6 月](https://github.com/holgerbrandl/opencards/commits/master/)。这些都是明确的项目事实，并不意味着这款软件毫无价值；但在 2026 年，要为一套新的多设备环境推荐它，这些时间点确实让人很难放心。

## 诚实的候选名单

Anki 拥有最成熟、最深厚的闪卡生态，但把 Android、iOS、托管 Web 访问和自托管同步分别来看，“开源 Anki”就成了一个边界混合的概念。Flashcards 公开了本文中范围最广的完整产品技术栈，但生产运维负担最大，无损迁移能力也最弱。Mnemosyne 专注于本地学习和自建同步。SiYuan 围绕一套规模大得多的笔记系统，提供真正由 Docker 托管的浏览器应用。Mochi 则证明，优秀的离线体验和数据便携性并不要求核心开源。

最佳开源闪卡应用，是所有权边界与实际需求相符的那一款。检查许可证，测试最棘手的迁移场景，再判断你真正需要的是本地数据、自托管同步，还是完整的浏览器部署。它们解决的是不同问题。
