---
title: "2026 年最佳开源闪卡应用：6 款 FOSS 方案对比"
description: "从源码覆盖范围、离线数据、同步、Anki 导入、导出、自托管和恢复能力等方面，对比六款仍在维护的开源闪卡应用。"
date: "2026-08-02"
updated: "2026-09-05"
image: "/blog/best-open-source-flashcard-apps-2026-v2.png"
keywords:
  - "最佳开源闪卡应用"
  - "开源闪卡应用"
  - "开源间隔重复"
  - "自托管闪卡"
  - "离线闪卡应用"
  - "Anki 开源替代品"
  - "FOSS 闪卡"
---

2026 年，对大多数人来说，Anki 仍然是最好的开源闪卡应用。可一旦“开源”不是唯一的硬性要求，选择就没那么简单了。

你可能需要一款能部署在自己服务器上的浏览器应用，或者一套用普通 Markdown 保存、可以直接阅读的牌组，又或者一个能生成闪卡的私密笔记系统。这些需求分别指向不同的产品，看到一个公开的 GitHub 仓库并不足以做出决定。

开源桌面客户端可能配套一个闭源 iPhone 应用。Docker 容器可能能托管浏览器界面，却无法同步原生客户端。一次导入可能保住卡片文字，却丢掉模板、媒体文件，以及让整套收藏真正有用的多年复习记录。

最终有六个项目通过了这次筛选。我比较了它们采用明确许可证的源码、最新稳定版、本地数据、调度器、同步、Anki 迁移、导出，以及自托管到底覆盖哪些部分。最后这一点，比大多数功能列表体现出来的更重要。

> **利益披露：** 我是 Kirill Markin，也是下列六款应用之一 [Flashcards](https://flashcards-open-source-app.com/) 的开发者。它采用 MIT 许可证的仓库覆盖 Web 应用、原生客户端、后端、同步和基础设施。我没有把它排在第一。Anki 是更稳妥的默认选择，Mnemosyne 的 Anki 迁移路径更成熟，而且这里还有几款方案运维起来轻松得多。

**事实核查日期：** 2026 年 9 月 5 日。稳定版与只存在于默认分支的开发成果会分开说明。

![徒步者在选择开源闪卡应用前，对比六个打开的背包并检查备份套件](/blog/best-open-source-flashcard-apps-2026-v2.png)

## 简短答案

| 你的主要需求 | 最合适的选择 | 原因 | 最先要验证的限制 |
| --- | --- | --- | --- |
| 可靠的通用系统，或已有复杂收藏 | [Anki](https://apps.ankiweb.net/) | 卡片和模板系统成熟，支持 FSRS、插件和多种客户端，还能导出信息完整的软件包 | 官方 iOS 应用和 AnkiWeb 不属于开源桌面代码；自托管只能获得同步服务，不能获得 AnkiWeb |
| 专注于桌面端，并有成熟 Anki 导入能力的替代方案 | [Mnemosyne](https://mnemosyne-proj.org/) | 本地学习，可导入 Anki 卡片类型和学习数据，还能自行运行同步服务器 | 2.11 仍是最新稳定版；Android 端能复习，但不能编辑 |
| 在同一个本地知识库中管理笔记和闪卡 | [SiYuan](https://b3log.org/siyuan/en/) | 原生应用可离线使用，内置 FSRS，并提供真正能用 Docker 托管的浏览器应用 | Docker 版无法与原生应用同步，而且多项导入和导出命令在 Docker 中不可用 |
| Web、移动端、后端和基础设施都有源码 | [Flashcards](https://github.com/kirill-markin/flashcards-open-source-app) | 一个采用 MIT 许可证的 monorepo，生产部署有完整文档 | 官方支持的生产栈以 AWS 为中心，从 Anki 迁移会丢失部分数据 |
| 较新的 local-first 桌面应用，并支持直接导入 APKG | [Recall](https://github.com/Madlezz/Recall) | 支持 FSRS，有桌面构建、PWA、本地数据库和可选的加密中继 | 导入只保留调度状态快照，只处理笔记的前两个字段，并跳过音频 |
| 不依赖网络、可直接阅读的 Markdown 牌组 | [Essentialist](https://github.com/essentialist-app/essentialist) | 牌组就是普通文件，桌面和 Android 应用刻意采用纯离线设计 | 没有同步功能，进度保存在单独的隐藏数据库中 |

这不是按功能数量打分。先明确哪类风险是你绝对不能接受的。如果 Anki 里已经积累了十年的复习记录，迁移完整度就比界面更清爽重要。如果你在学校部署，浏览器访问和经过验证的恢复流程可能比插件更重要。

## 怎样才算开源闪卡应用

我设置了四道门槛：

1. **核心学习体验的源码已经发布，并明确采用开源许可证。** 只有围绕未公开核心提供的一套集成目录，并不算数。
2. **间隔重复现在就能用。** 路线图上的一项计划，或普通测验模式，都不够。
3. **已有正式发布的构建，或文档清楚的官方部署方案。** 只有近期提交记录，不足以让原型成为稳妥的推荐。
4. **官方资料对数据边界交代得足够清楚，可以实际核查。** 我需要离线存储、同步、导入导出或托管方式的具体答案，而不是一句含糊的“用户拥有自己的数据”。

GitHub 星标数不是入选门槛。它既反映项目年龄和知名度，也反映产品是否合适。不过，成熟度仍然重要。Anki、Mnemosyne 和 SiYuan 都有稳定的发布版本和成熟的运维模式。Recall 和 Essentialist 的定位更窄，但已发布功能的文档足够清楚，可以给出具体建议，因此也进入了名单。

判断“仍在维护”也要看两处。带标签的发布版告诉你用户现在能安装什么，默认分支则显示项目正往哪里走。Essentialist 是最清楚的例子：稳定版文档写的是 SM-2，当前默认分支的文档写的是 FSRS。下表记录的是 SM-2。

## 六款 FOSS 闪卡应用对比

| 应用 | 核查的稳定版本 | 平台 | 离线数据 | 调度器 | 同步 | Anki 迁移与数据导出能力 | 自托管范围 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Anki** | [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1)，2026 年 8 月 5 日 | Windows、macOS、Linux；独立的 Android 和 iOS 客户端；AnkiWeb | 已安装的客户端使用本地收藏学习 | FSRS 或旧版 SM-2 | AnkiWeb 或官方自托管同步服务器 | 可导入文本、APKG/COLPKG 和 Mnemosyne 数据库；可导出文本或软件包，并选择是否包含媒体与调度数据 | **仅同步服务器。** 不能自托管 AnkiWeb，也没有浏览器学习界面 |
| **Mnemosyne** | [2.11](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11)，2023 年 11 月 12 日；仓库在 2026 年仍有开发活动 | Windows、macOS、Linux、Android；有限的浏览器复习功能 | 桌面端使用本地数据；Android 可离线复习，但不能编辑 | 自适应的 0–5 级回忆评分 | 内置同步，可连接桌面端或无界面实例 | 官方文档说明可完整导入 Anki，包括自定义卡片类型和学习数据；用于分享的导出不是完整备份 | **同步加有限的浏览器复习。** 浏览器服务器没有安全功能 |
| **SiYuan** | [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2)，2026 年 8 月 30 日 | Windows、macOS、Linux、Android、iOS、HarmonyOS；通过 Docker 在浏览器中使用 | 原生客户端在本地保存工作空间 | FSRS | 付费的官方 E2EE 同步，或付费的第三方 S3/WebDAV 集成 | 常规应用可导入 Markdown 和数据，并导出多种文档及数据格式；没有文档化的 APKG 导入器 | **完整的浏览器应用。** Docker 版不能与原生客户端同步，并移除了部分导入和导出命令 |
| **Flashcards** | [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0)，2026 年 9 月 1 日 | Web、iOS、Android | Web 端使用 IndexedDB；iOS 使用 SQLite；Android 使用基于 SQLite 的 Room；本地写入会排队等待同步 | FSRS | 官方托管或由运营者部署的后端 | 自有 ZIP 可迁移卡片、标签、来源元数据和引用的媒体文件，但不包括牌组、学习状态、设置或账号；没有 APKG 导入器 | **完整的 Web/后端栈。** 生产部署以 AWS 为中心；私有原生构建需要另行处理 |
| **Recall** | [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0)，2026 年 7 月 31 日 | Windows、macOS、Linux；可安装的 PWA | 桌面端使用 SQLite；浏览器使用 IndexedDB；默认不需要账号，也不开启遥测 | FSRS | 桌面文件夹同步，或可选的加密 Cloudflare Worker/R2 中继 | 桌面端导入 APKG 时读取前两个字段、牌组、标签、近似的调度状态快照和图片；可导出 JSON 与 Recall 归档 | **仅加密快照中继。** 它不托管 PWA |
| **Essentialist** | [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22)，2025 年 10 月 10 日；源码在 2026 年仍有开发活动 | Android APK、macOS DMG、Linux Flatpak；Windows 需从源码构建 | 不访问网络；牌组内容采用 Markdown | 稳定版：SM-2；默认分支：FSRS | 无 | Markdown 保存卡片内容；隐藏的配套数据库保存进度 | **没有可托管的服务。** Markdown 文件和配套数据库必须一起备份 |

## 1. Anki 是最稳妥的默认选择

Anki 的优势在那些不显眼但关键的地方。它能处理复杂的笔记类型，通过模板生成关联卡片，把媒体文件和收藏放在一起，也能保留多年的调度数据。本次核查采用的稳定桌面版本是 [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1)。更新的 26.09b2 被标为测试版，因此不作为这里的基准。

它的开源范围并不统一。[桌面版仓库采用 AGPL-3.0-or-later](https://github.com/ankitects/anki/blob/26.08.1/LICENSE)，其中列出了捆绑组件的例外情况。[AnkiDroid](https://github.com/ankidroid/Anki-Android) 是独立的开源 Android 项目。AnkiMobile 和 AnkiWeb 都是官方产品，但这些仓库不包含它们的源码。更完整的说明见[《Anki 是开源的吗？》](/blog/is-anki-open-source/)。

已安装的客户端会在本地保存收藏，所以普通复习无需联网。AnkiWeb 是在线端。如果离线能力是决定性条件，[《Anki 能离线使用吗？》](/blog/does-anki-work-offline/)详细区分了哪些功能留在本地，哪些操作要等到同步。

Anki 支持 [FSRS 和旧版调度器](https://docs.ankiweb.net/deck-options.html)。在这组产品里，它的导出格式是最好的迁移起点。[COLPKG 包含整个收藏及其调度数据](https://docs.ankiweb.net/exporting.html)，APKG 导出则可根据选项包含调度信息和媒体。Anki 还可以导入文本、Anki 软件包和 Mnemosyne 2.0 数据库。

信息再完整的源数据包，也不能保证在其他应用里完美导入。目标应用仍然要理解其中的模板、卡片生成规则、媒体引用和调度器字段。它只是比 CSV 文件提供了更多可用信息。

[官方自托管服务器](https://docs.ankiweb.net/sync-server.html)有意保持精简。它会同步兼容的 Anki 客户端，但不提供 AnkiWeb、浏览器复习或账号门户。默认情况下，它监听未加密的 HTTP；指南建议把它留在局域网内，或通过 VPN 访问，也可以在前面部署 HTTPS 反向代理。客户端和服务器版本也必须保持兼容。

如果收藏完整度、模板、插件或广泛的客户端支持最重要，就选 Anki。只有在某条具体边界——例如自托管浏览器界面，或完整公开的移动端技术栈——更重要时，再考虑其他方案。

## 2. Mnemosyne 专注于本地学习

Mnemosyne 就是一款桌面学习工具，用起来也确实如此。它不会顺带塞进知识库或云平台。你得到的是本地数据库、传统的间隔重复流程、用于复习的 Android 配套客户端，以及能在桌面电脑或无界面机器上运行的同步服务器。

最新稳定版仍然是[发布于 2023 年 11 月的 2.11](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11)。仓库在 2026 年有过改动，但这些改动不会因此变成稳定安装包。请在未来几年打算继续使用的操作系统上测试 2.11。

许可证也不能只看一个徽章。[根目录的许可证映射](https://github.com/mnemosyne-proj/mnemosyne/blob/master/LICENSE)为 openSM2sync 指定 LGPL v3，并为 Mnemosyne 的其余部分指定不同条款。[主程序许可证](https://github.com/mnemosyne-proj/mnemosyne/blob/master/mnemosyne/LICENSE)采用 AGPL v3，并附加一项规定：衍生作品中必须清楚显示 Mnemosyne 名称，具体形式需要与维护者讨论。在重新分发修改后的构建之前，应先读完这段文本。

[Android 客户端可离线复习，但不能编辑卡片](https://mnemosyne-proj.org/help/android-client)。其他设备可以使用从桌面应用启动的浏览器复习服务器，但官方功能页警告，这个服务器没有安全功能。它适合做方便的局域网界面，不是完善的公共 Web 应用。

如果你不想继续用 Anki，迁移能力是 Mnemosyne 最有力的理由。官方功能页明确说明，它可以[完整导入 Anki，包括自定义卡片类型和学习数据](https://mnemosyne-proj.org/features)。它的[内置同步](https://mnemosyne-proj.org/help/syncing)会合并卡片和学习数据，也可以连接到由你控制的机器。

常规导出命令用来备份时很容易踩坑。它的用途是分享选中的卡片，不包含学习数据。要迁移或恢复完整系统，[多台电脑使用指南](https://mnemosyne-proj.org/help/mnemosyne-and-multiple-computers)要求复制完整的数据目录。

在这里，Mnemosyne 是最强的专用开源 Anki 替代品。代价是稳定版发布节奏慢、移动端编辑能力有限，而且浏览器界面必须放在谨慎设置的网络边界内。

## 3. 如果笔记才是核心系统，选 SiYuan

SiYuan 是一款隐私优先的知识管理应用，闪卡直接构建在同一套块与文档模型中。如果复习材料来自你的笔记，这很实用。如果你只想要一个卡片队列，这套系统就显得太重了。

[采用 AGPL-3.0 的仓库](https://github.com/siyuan-note/siyuan)串联了界面、内核、移动应用、数据层和 FSRS 组件。这里核查的稳定版本是 [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2)。桌面和移动客户端都把工作空间保存在本地，可以继续离线使用。

免费的本地存储方案不包含同步。[官方定价页](https://b3log.org/siyuan/en/pricing.html)通过订阅提供端到端加密的官方同步，付费 Pro 功能还支持接入你自己的 S3 或 WebDAV 存储。项目也提醒用户，不要把正在使用的工作空间放进通用文件同步文件夹，并发编辑可能损坏或覆盖数据。

Docker 运行的是真正的浏览器应用，但它不会变成已安装应用的同步服务器。[v3.8.2 的 Docker 文档](https://github.com/siyuan-note/siyuan/blob/v3.8.2/README.md#docker-hosting)明确说桌面和移动客户端不能连接到它。Docker 还移除了 Markdown 导入，以及 PDF、HTML 和 Word 导出。这些命令存在于功能更全的原生应用中，直接把通用功能列表套到 Docker 部署计划上会造成误导。

我没有找到官方 APKG 导入器。SiYuan 可以迁移 Markdown 和自有数据格式，但 Anki 收藏需要更有计划地重建。

如果知识库才是主产品，而闪卡应该放在其中，就选 SiYuan。如果你想直接替换 Anki，Mnemosyne 和 Anki 的迁移边界更清楚。

## 4. Flashcards 开放了更多技术栈，也需要你自己运维

在这次对比里，Flashcards 的开源代码覆盖面最广。MIT monorepo 包含 Web 应用、iOS 和 Android 客户端、后端、认证服务、同步、管理应用、数据库迁移和 AWS 基础设施。这里采用的稳定版本是 [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0)。默认分支上后续的开发成果不计入已发布功能。

[架构](/docs/architecture/)采用 offline-first，但“离线”在每个客户端上略有不同。Web 应用把 IndexedDB 中的本地数据作为事实来源。iOS 使用 SQLite，Android 使用基于 SQLite 的 Room。变更先写入本地，再进入 outbox 队列等待同步。这个设计能应对连接中断，但不会让浏览器存储变成永久存储，也不能取代对每台设备冷启动的测试。

Flashcards 自有的 ZIP 软件包用于迁移内容，不是账号备份。在 v1.23.0 中，它的[软件包结构定义](https://github.com/kirill-markin/flashcards-open-source-app/blob/v1.23.0/apps/backend/src/workspacePackages/types.ts)包含正面和背面内容、标签、卡片类型、来源元数据和软件包元数据；引用的媒体文件另行打包。它不包含牌组结构、复习历史、FSRS 状态、工作空间设置或账号。

v1.23.0 没有 APKG 导入器。文档中的[从 Anki TXT/CSV 迁移流程](/blog/migrate-from-anki-txt-export-open-source-flashcards/)使用导出的文本重建卡片，并且需要人工检查。模板、调度状态、牌组结构和打包媒体不会通过这条路径自动保留。它适合简单的纯文本牌组，不适合高度定制的收藏。

[自托管指南](/docs/self-hosting/)也同样明确。生产环境使用 AWS CDK 技术栈，包括 RDS、Cognito、API Gateway 和 Lambda、S3 和 CloudFront、机密信息、告警与备份。Cloudflare DNS、Resend 邮件和 Sentry 配置位于 AWS 之外。Docker Compose 用于本地开发，不是官方支持的生产软件包。需要私有 iOS 或 Android 二进制文件的运营者，要单独构建和分发。

如果完整掌控 Web、原生客户端和后端源码值得付出这些运维成本，就选 Flashcards。如果保存现有收藏才是更难的要求，就选 Anki 或 Mnemosyne。

## 5. Recall 很现代，但要仔细看导入器

Recall 是主要推荐中最年轻的一个。它能进入名单，是因为 [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0)提供了带版本号的桌面构建、可安装 PWA、明确的本地存储、FSRS、数据导出，以及有文档说明的自托管同步设计。

采用 MIT 许可证的桌面应用使用 SQLite，PWA 使用 IndexedDB。两者都不需要账号，项目也说明默认关闭遥测。桌面版本覆盖 Windows、macOS 和 Linux。

APKG 导入器确实有用，但 README 中的“复习历史”一词，对带标签版本的实际实现说得太满。[v1.3.0 导入器源码](https://github.com/Madlezz/Recall/blob/v1.3.0/src-tauri/src/anki_import.rs)并不读取 Anki 的复习日志。它读取当前卡片状态、间隔、重复和遗忘次数，以及 Anki 已保存的 FSRS 稳定性和难度。对于没有这些 FSRS 字段的旧卡片，Recall 会根据 SM-2 数值进行估算。

内容转换也有明显限制。导入器把笔记的前两个字段当作正面和背面，而不会重现 Anki 的笔记类型和模板。它会保留牌组名称和标签，提取常见图片格式并重写引用，但会跳过音频和其他媒体。由于导入器是 Tauri 命令，直接迁移 APKG 是桌面端功能，不属于浏览器 PWA。

这比按纯文本重建好得多，但不能保证收藏完整。迁移大量内容前，要测试填空卡、关联卡片、额外字段、HTML/CSS、图片、音频、到期日期和重复笔记。

Recall 有两条同步路径。桌面端可以把快照写入由 Dropbox、Drive 或其他文件同步工具管理的文件夹。可选中继使用 Cloudflare Worker 和 R2 存储桶。根据带标签版本的[同步设计](https://github.com/Madlezz/Recall/blob/v1.3.0/docs/SYNC.md)，客户端上传前用 AES-GCM 加密快照；中继看到的是密文，不是卡片数据或密钥。更新采用乐观并发控制，并在冲突时重试一次，但合并的仍是完整快照，不是单独字段。维护者没有出资运营公共中继，你需要自行部署并输入它的 URL。

JSON 和 Recall 归档导出提供了退出路径。先把其中一种恢复到干净配置中，再把它称作备份。

如果你想要现代的 local-first 桌面/PWA 体验，也能接受年轻项目和只能保留有用快照、无法保留整套 Anki 系统的导入器，可以选择 Recall。

## 6. Essentialist 让牌组易读，但不会把完整状态放在里面

Essentialist 在这里的边界最窄。每个牌组都是 Markdown 文件，可以用文本编辑器打开、放进版本控制，也可以用普通文件工具复制。应用刻意不发出任何网络请求。

最新稳定版是 [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22)。发布资源包括 Android、macOS 和 Linux 构建；Windows 用户需要从源码构建。[带标签版本的 README](https://github.com/essentialist-app/essentialist/blob/v0.3.22/README.md)明确使用 SM-2 调度器。

[默认分支 README](https://github.com/essentialist-app/essentialist/blob/main/README.md)现在写的是 FSRS，仓库在 2026 年也有源码变更。这能看出项目的发展方向，但不能据此把 2025 年的二进制版本标成 FSRS。

Markdown 覆盖的内容也比第一眼看起来少。卡片文本在可见文件中，进度则保存在名为 `.<deck file>.db` 的隐藏数据库里。只复制 `sample.md` 而不复制 `.sample.md.db`，会留下问题和答案，却丢失学习状态。

应用没有内置设备同步或服务器。你可以把文件放进自己的同步文件夹，但冲突处理和恢复就成了你的问题。

如果可读的 Markdown 和完全不联网才是重点，就选 Essentialist。它不是无缝的多设备系统，一个可见文件也不是完整备份。

## 四个值得关注的活跃项目

这些项目在 2026 年确实有实际开发活动。它们没有进入主要六款，因为一项推荐不能只靠有趣的源码支撑。

| 项目 | 已经明确可用的部分 | 还不能进入主要推荐的原因 |
| --- | --- | --- |
| [HSK Nest](https://github.com/s-mberli/hsknest) | AGPL 源码、FSRS/SM-2/Leitner 调度器、Docker 部署、托管服务、CSV 导入和数据导出 | 创建于 2026 年 7 月；没有带版本号的应用发布。GitHub 上的发布是音频包，不是应用里程碑 |
| [Openlet](https://github.com/ChloeVPin/openlet) | MIT Web 应用，支持 FSRS、CSV 导入、图像遮挡，并有文档化的 Supabase/Vercel 架构 | 没有带标签的发布，而且官方文档还没有完整定义离线、导出和自托管恢复边界 |
| [Prep](https://github.com/Zamua/prep-app) | MIT 源码、FSRS、托管使用方式，以及在可自托管 celld 运行时上的文档化部署 | 没有带标签的发布；自托管还意味着要运维 celld 和对象存储，而不是部署一个独立的闪卡二进制程序 |
| [Kado](https://github.com/LisandroDiMeo/kado-app) | GPLv3 Kotlin 移动应用，支持 FSRS/SM-2，有 Android 发布，并可导入带模板和媒体的 APKG | 创建于 2026 年；iOS 需要从源码构建，官方文档也没有说明通用的手机间同步方式 |

另一些熟悉的名字没有通过筛选，原因更简单。Mochi 的[开源仓库](https://github.com/mochi-cards/open-source)收集的是集成，不是核心应用。[Scholarsome](https://github.com/hwgilbert16/scholarsome#features-coming-soon)开源并可自托管，但官方 README 仍把间隔重复列在“即将推出的功能”中。[OpenCards](https://github.com/holgerbrandl/opencards)自 [2017 年 1 月的 v2.5.1](https://github.com/holgerbrandl/opencards/releases/tag/v2.5.1) 后就没有再发布，仓库从 2018 年起也没有收到代码变更。

如果源码访问不是硬性条件，[更全面的 Anki 替代品对比](/blog/best-anki-alternatives/)还包括回答另一类问题的产品。

## 分五层测试迁移

只说“支持导入 Anki”，如果没有下一句说明，几乎毫无意义。迁移可能在一层成功，却在另外四层失败。

| 层次 | 要比较什么 | 容易误导人的成功信号 |
| --- | --- | --- |
| 卡片内容 | 每个字段、填空标记、标签、特殊字符和重复笔记 | 卡片总数大致相同 |
| 结构 | 笔记类型、模板、生成的关联卡片和嵌套牌组 | 正面和背面文字在某处出现了 |
| 媒体 | 图片和音频已复制，可在本地正确解析，并能离线播放 | 导入器识别了文件名 |
| 学习状态 | 复习日志、状态、到期日期、间隔、遗忘次数和调度器参数 | 导入后的卡片都在，却悄悄从新卡开始学习 |
| 退出与恢复 | 有文档的导出或备份能在别处重建同一套系统 | 把可读的文本导出当成完整备份 |

迁移真实收藏前，先做一套故意棘手的测试牌组。加入额外字段、填空卡、正反向模板、嵌套牌组、标签、图片、音频和足够长的复习历史，以便看出目标应用是否真的保留了它们。

保留未经改动的源备份。导入后，分别比较笔记、卡片和媒体数量。检查到期日期，不要只相信“调度数据已导入”的提示。在每台准备使用的设备上离线复习。然后在两台设备上制造可丢弃的冲突修改，观察同步如何处理。

两套系统并行使用几天。删除旧收藏是最后一步，不能用来证明新系统已经正常工作。

## 自托管只有通过恢复测试才算完整

上面的产品用“自托管”指代截然不同的形态：

- Anki 和 Mnemosyne 运行的是**同步服务**，已安装的客户端仍是学习界面。
- SiYuan Docker 运行的是**浏览器应用**，原生客户端不能把它当作同步服务器。
- Recall 运行的是**加密快照中继**，不是 PWA 本身。
- Flashcards 部署的是**完整的 Web 和后端栈**，原生应用仍需要单独构建。
- Essentialist **没有服务器**，所有权边界就是本地文件。

明确这些形态的边界后，再测试运维者最容易拖延的那一部分：

1. 创建卡片、附加媒体、完成复习，并从两个客户端同步。
2. 保存文档列出的每个数据库、对象存储桶、本地文件、密钥和配置值。
3. 恢复到空账号、全新机器或隔离部署中。
4. 对比卡片数量、媒体、复习历史、到期状态、登录和客户端同步。
5. 升级恢复后的副本，再完成一个复习周期。

如果重建仍然依赖旧机器，你只是有一套正在运行的服务，还没有经过验证的备份。

## 常见问题

### 2026 年最好的开源闪卡应用是什么？

对大多数学习者来说，Anki 是最好的默认选择。它结合了成熟的收藏模型、FSRS、广泛的客户端覆盖，以及信息最完整的官方备份与导出格式。但官方 iOS 和 Web 端不在开源桌面仓库的覆盖范围内，自托管服务器提供的也是同步，而不是浏览器学习功能。

### 最好的开源 Anki 替代品是什么？

Mnemosyne 是最成熟的专用替代品，官方明确说明可以导入 Anki 自定义卡片类型和学习数据。Recall 看起来更现代，也能在桌面端直接导入 APKG 文件，但它只转换笔记的前两个字段，只保留调度状态快照，只导入图片而不导入音频，也不会迁移完整的复习日志。

### 可以自托管 Anki 吗？

可以，你能为兼容客户端运行 Anki 官方同步服务器。但它不是 AnkiWeb 的自托管替代品：没有浏览器学习界面。

### 开源就意味着可以离线使用吗？

不是。开源描述的是许可证和源码访问权限。离线能力取决于客户端把数据存在哪里，以及哪些操作需要服务。反过来也一样：一款应用可以把数据保存在本地，同时不公开核心源码。

### 自托管能保证可迁移性吗？

不能。自托管决定服务在哪里运行；可迁移性取决于导出、完整备份，以及你真正测试过的恢复流程。即使数据库在自己的服务器上，也可能很难迁移；可读的 Markdown 牌组也可能漏掉保存在旁边的复习状态。

## 我的建议

只要没有哪条边界给你带来实际问题，就继续使用或直接选择 **Anki**。如果需要专注的本地桌面学习和成熟的 Anki 导入，选择 **Mnemosyne**。如果闪卡属于更大的知识库，选择 **SiYuan**。如果完整掌控 Web、原生客户端和后端源码值得承担 AWS 生产栈的运维成本，考虑 **Flashcards**。测试完转换限制后，可以选择 **Recall** 作为现代 local-first 客户端。如果普通 Markdown 和完全不访问网络比同步更重要，选择 **Essentialist**。

最好的开源闪卡应用，不是功能列表最长的仓库，而是源码、离线数据、迁移、同步、托管和恢复边界都符合你真正愿意维护的那套系统。
