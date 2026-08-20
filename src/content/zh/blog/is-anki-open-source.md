---
title: "2026 年 Anki 是开源的吗？桌面版、AnkiMobile、AnkiDroid 与 AnkiWeb"
description: "Anki 桌面版和 AnkiDroid 开源；AnkiMobile 和 AnkiWeb 不开源。本文比较许可证、价格、离线能力和可自行托管的同步服务器。"
date: "2026-08-20"
image: "/blog/is-anki-open-source.png"
keywords:
  - "Anki 是开源的吗"
  - "Anki 开源"
  - "Anki 许可证"
  - "AnkiMobile 是开源的吗"
  - "AnkiDroid 是开源的吗"
  - "AnkiWeb 是开源的吗"
  - "自行托管 Anki"
  - "Anki 同步服务器"
---

Anki 是开源的吗？**Anki 桌面版和 AnkiDroid 是开源的，官方 AnkiMobile 应用和托管的 AnkiWeb 服务则不开源。** Anki 的公开代码库也包含一套可自行托管的官方同步服务器，但它只替代同步功能，并不是可以自行部署的 AnkiWeb。

这个答案之所以容易混淆，是因为在 GitHub 上找到 Anki，只能说明桌面应用和同步服务器的代码公开，并不代表所有带有 Anki 名称的产品都开源。

**事实核实日期：** 2026 年 8 月 20 日。

![造船师检查木船外露的肋骨结构，旁边停着社区共建的划艇、封闭式快艇和一座小型私人中转码头](/blog/is-anki-open-source.png)

## 按产品拆开看，答案才有意义

开源、免费、可离线使用和可自行托管是四种不同的属性。一款应用可以收费但支持离线，也可以免费使用却不公开源代码。下面是 2026 年各个产品的完整情况。

| 产品 | 源代码与许可证 | 价格 | 离线使用 | 可以自行托管或控制什么 |
| --- | --- | --- | --- | --- |
| Windows、macOS 和 Linux 上的 **Anki 桌面版** | **开源。**主要代码库采用 AGPL-3.0-or-later，另有明确列出的例外，部分捆绑组件也采用其他许可证。 | **免费。** | **可以。**集合、调度数据和已下载的媒体文件都保存在本地。 | 构建或修改客户端。同一个代码库还包含官方同步服务器。 |
| iPhone 和 iPad 上的 **AnkiMobile** | **源代码未公开。**完整的官方 iOS 应用并不开源。 | **收费。**官方标明的美国价格为一次性支付 25 美元；各地 App Store 的定价和税费有所不同。 | **可以。**集合和所需媒体文件保存到设备后即可复习。 | 不能通过公开源码重新构建官方应用，但可以将它连接到官方自托管同步服务器。 |
| Android 上的 **AnkiDroid** | **开源。**其代码库列明：主项目采用 GPL-3.0，部分后端代码采用 AGPL-3.0，API 采用 LGPL-3.0。 | **免费。** | **可以。**它会在 Android 设备上保存本地集合。 | 查看源码、创建派生版本或向 AnkiDroid 贡献代码；也可以连接兼容的自托管同步服务器。 |
| **AnkiWeb** | **源代码未公开。**Anki 的维护者明确表示 AnkiWeb 不开源。 | **免费。** | **不可以。**它是托管在网络上的浏览器服务。 | 官方没有提供用于自行部署完整 AnkiWeb 服务的软件包。 |
| **Anki 官方同步服务器** | **开源。**代码位于 Anki 代码库中，遵循该代码库的许可条款。 | **软件本身免费。**机器、存储和网络由你提供并付费。 | 它不是学习客户端。 | 为兼容客户端托管集合与媒体同步，但不提供 AnkiWeb 的浏览器界面。 |

[Anki 官方网站](https://apps.ankiweb.net/)清楚地区分了这些产品：AnkiMobile 是官方 iOS 应用，其销售收入用于支持 Anki 的开发；AnkiDroid 则免费，由贡献者开发。数据格式相通、能够相互同步，不等于它们共用同一套代码。

## Anki 的许可证允许你做什么

[ankitects/anki 代码库](https://github.com/ankitects/anki)公开了桌面版的源代码。它的[许可证文件](https://github.com/ankitects/anki/blob/main/LICENSE)说明，主要代码采用 GNU Affero 通用公共许可证第 3 版或更高版本（AGPL-3.0-or-later）。文件中还列出了采用 BSD 许可证的贡献，以及使用其他许可证的内置组件。

你可以阅读、构建和修改受许可证约束的代码，也可以维护自己的派生版本。AGPL 是强 copyleft 许可证，不是 MIT 这类宽松许可证，因此这些自由也附带相应条件。

简要来说，分发经过修改且受该许可证约束的版本，可能会触发共享源代码的要求。AGPL 还包含网络条款：如果用户通过网络与你修改后的适用程序交互，你必须向他们提供相应源代码。[自由软件基金会对 AGPL 的说明](https://www.gnu.org/licenses/why-affero-gpl.html)用更通俗的语言解释了这一点。直接运行未经修改的桌面应用，或只在本地私下修改供自己使用，与分发派生版本或为其他用户运行修改后的网络服务，并不是同一种情况。

以上只是实用层面的概述，不构成法律建议。如果你打算把 Anki 代码与专有软件结合、分发修改后的构建版本，或提供修改后的网络服务，请阅读许可证全文及其中列明的例外，并寻求适当的法律意见。

## 2026 年职责逐步交接，但桌面版不会因此闭源

2026 年 2 月，Damien Elmes [宣布逐步将 Anki 的业务运营和开源维护职责移交给 AnkiHub 团队](https://forums.ankiweb.net/t/ankis-growing-up/68610)。他把这次变化描述为退后一步，而不是彻底离开，并表示自己仍会参与。公告还提到，治理方式、决策机制和过渡时间表仍在制定中。

产品层面的公开承诺则更明确。在一则[后续说明](https://forums.ankiweb.net/t/ankis-growing-up/68610/110)中，Elmes 写道，桌面版及其未来版本将继续免费且开源，普通同步功能将继续免费，AnkiMobile 在美国也仍将维持一次性支付 25 美元的价格。

因此，2026 年更准确的说法是：维护职责正在逐步过渡，同时已有明确承诺让 Anki 桌面版继续开源。这不是一次已经完成、所有治理细节都已敲定的交接。

## AnkiMobile 是官方应用，收费、可离线使用，但不开源

AnkiMobile 是官方的 iPhone 和 iPad 客户端。其完整源代码没有公开；Elmes 曾[直接解释 AnkiMobile 为什么不开源](https://forums.ankiweb.net/t/hide-unhide-decks-poll/44281/20)。

它的价格是整个项目资金模式的一部分。[官方定价常见问题](https://faqs.ankiweb.net/why-does-ankimobile-cost-more-than-a-typical-mobile-app.html)说明，AnkiMobile 的销售收入会支持免费的桌面版和在线同步服务。因此，说“Anki 免费”时也必须讲清楚平台：Anki 桌面版、AnkiDroid 和 AnkiWeb 都可以免费使用，官方 iOS 应用则需要付费。

闭源不等于只能联网使用。AnkiMobile 会在本地保存集合，所需卡片和媒体文件传到设备后即可离线使用，也可以连接自定义的同步服务器 URL。这些是彼此独立的能力。详细的 [Anki 离线使用指南](/zh/blog/does-anki-work-offline/)介绍了如何提前准备媒体文件，以及恢复联网后如何同步。

你无法做的是审查并重新构建完整的官方 iOS 客户端、在公开代码库中修复 iOS 专属问题，或根据公开源代码分发自己的 AnkiMobile 派生版本。

## AnkiDroid 开源，并保持独立治理

AnkiDroid 并不是 AnkiMobile 的 Android 版本。它是一个独立的 Android 项目，可以使用 Anki 集合并进行同步。Anki 官方网站说明它由贡献者开发；AnkiDroid 项目称自己是半官方移植版，而 2026 年的过渡公告则表示它将继续独立治理。

[AnkiDroid 代码库](https://github.com/ankidroid/Anki-Android)公开，并接受代码和翻译贡献。其 README 按组件列出许可证：主项目采用 GPL-3.0，部分后端代码采用 AGPL-3.0，AnkiDroid API 采用 LGPL-3.0。

对开发者来说，结论很直接：Android 相关改动应通过 AnkiDroid 项目提交，而不是交给 AnkiMobile；而且并非每个 Android 组件都采用桌面版 Anki 的许可证。

## AnkiWeb 可以免费使用，但不开源

AnkiWeb 提供托管账号、集合与媒体同步，以及浏览器学习功能。Anki 托管网站的其他部分还包括共享牌组和插件目录。人们提到“AnkiWeb”时，很容易把这些公开服务混在一起，但安装官方同步服务器并不能复制其中任何一项。

源代码的边界很明确。Anki 的维护者在直接回应浏览器客户端相关问题时表示，[AnkiWeb 不开源](https://forums.ankiweb.net/t/questions-about-https-ankiweb-net-decks-and-https-ankiuser-net-study/33292/2)。官方也没有提供用于部署完整服务的软件包。

AnkiWeb 也不是支持离线使用的 Web 应用。如需离线学习，请使用提前准备好的桌面或移动客户端。免费使用、源代码公开、离线使用和自行托管始终是四个不同的问题。

## 自托管 Anki 同步服务器究竟替代了什么

Anki 提供官方的[自托管同步服务器](https://docs.ankiweb.net/sync-server.html)。你可以运行 Anki 桌面版中捆绑的服务器，也可以安装不依赖桌面 GUI、更加轻量的 Python 或 Rust 实现。你需要配置用户和密码、选择存储位置、运行服务进程，再让兼容客户端连接到它的 URL。

它替代的只是客户端之间同步集合和媒体的链路，**并不会**给你一套可私有部署的完整 AnkiWeb。你不会获得：

- AnkiWeb 的浏览器学习界面；
- 公开的共享牌组或插件目录；
- AnkiWeb 的注册与账号管理网站；
- 面向学校或公司的 Web 管理产品。

最后一点对团队尤其重要。手册将该服务器描述为面向个人或家庭使用的高级功能。账号需要直接在服务器上配置；维护者还表示，由于保持简单是设计目标，REST API 或外部数据库支持之类的新功能不太可能被接受。

如果你的需求是“让桌面和移动客户端通过我控制的基础设施保持同步”，这套服务器可以满足。如果你的需求是“部署自己的 AnkiWeb”，它就不适合。不存在某个后续安装步骤，能把同步服务器变成托管的 Web 应用。

自行托管也意味着运维工作由你承担。手册警告，新版客户端可能依赖同步协议的变化，因此服务器与客户端版本需要保持兼容。服务器默认通过未加密的 HTTP 监听；如需远程访问，文档列出的方案包括把它限制在受信任的网络内、使用 VPN，或在前面设置 HTTPS 反向代理。凭据、存储、备份、升级和恢复测试也都由你负责。

## 先找对代码库，再处理问题

对开发者来说，下面这张小地图可以省下很多无用的搜索：

- 桌面版行为、调度代码、模板和官方同步服务器都在 [ankitects/anki 代码库](https://github.com/ankitects/anki)中。
- Android 专属工作属于 [AnkiDroid 代码库](https://github.com/ankidroid/Anki-Android)。
- 如果现有扩展点已经能覆盖你的改动，开发桌面版插件可能比长期维护派生版本更省力。
- 没有公开且完整的 AnkiMobile 代码库可供提交 iOS 专属补丁。
- 官方没有可供派生的开源 AnkiWeb 部署版本。

找到 Anki 桌面版的源代码只是这张地图的起点，并不能证明某个 iOS 界面或 AnkiWeb 页面也藏在里面。

## 你真正需要控制到哪一层？

对大多数学习者来说，这种混合源码模式并不足以成为离开 Anki 的理由。成熟的复习流程、插件、模板、文档和迁移工具，可能比查看每个端的源代码重要得多。

注重隐私的学习者可以从满足需求的最小系统开始。只在一台电脑上离线使用集合，不需要同步服务器。如果多台设备必须通过你控制的基础设施同步，官方同步服务器是范围更窄的选择。它让你更能掌控同步数据，同时也要承担网络安全和数据恢复的责任。

准备自行托管时，先用一个账号测试，再迁移真实集合。确认每个客户端都能连接，为远程流量加密，保持服务器与客户端版本一致，并实际验证集合和媒体数据都能从备份恢复。

准备贡献代码时，先确定要修改的是哪个产品。桌面版和 Android 版都有公开的贡献渠道；AnkiMobile 和 AnkiWeb 没有公开完整源代码，无法沿用相同的流程。

## 关于 Flashcards 与全栈控制

> **披露：** 我是 Kirill Markin，也是 [Flashcards](https://flashcards-open-source-app.com/) 的开发者。它的[开源代码库采用 MIT 许可证](https://github.com/kirill-markin/flashcards-open-source-app)，涵盖 Web 应用、iOS 和 Android 客户端、身份验证、后端、同步功能以及 AWS 基础设施。相比 Anki 只覆盖同步的服务器，Flashcards 公开源码和支持自托管的范围更广。不过，Flashcards 也年轻得多，在成熟度、插件生态和 Anki 迁移保真度方面都更弱，因此不能默认认为它更好。

Flashcards 提供了完整的 [AWS 全栈自托管文档](/zh/docs/self-hosting/)，但它并不是一条命令就能完成的通用部署方案。运营者需要负责 AWS、Cloudflare、身份验证、电子邮件发送、数据库恢复、监控和升级，还要单独构建与分发原生应用。[Flashcards 自托管指南](/zh/blog/self-hosted-open-source-flashcards-app-for-spaced-repetition/)提供了更简短的产品视角，[Anki 与 Flashcards 对比](/zh/blog/anki-vs-flashcards-open-source-app/)则详细介绍了成熟度和工作流程方面的取舍。

如果还想比较更多项目，[开源闪卡应用指南](/zh/blog/best-open-source-flashcard-apps-2026/)会用相同的许可证、离线、同步、迁移和自行托管问题来评估多款工具。

## 坦率的答案

Anki 是开源的吗？**Anki 桌面版和 AnkiDroid 是开源的，AnkiMobile 和 AnkiWeb 不是。** Anki 官方同步服务器开源并且可以自行托管，但它只同步集合和媒体，并不是 AnkiWeb 网站的自托管版本。

如果你需要一款成熟的本地学习工具，Anki 桌面版仍然是最直接的开源选择。如果要在多台设备之间进行私有同步，可以加上官方同步服务器，同时承担相应的运维工作。如果你需要查看、修改并部署同一产品栈中的每个客户端和服务，Anki 目前并没有开放这样完整的范围。
