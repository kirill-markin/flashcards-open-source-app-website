---
title: "Flashcard Lab 应用评测（2026）：Google Sheets、间隔重复与替代方案"
description: "一篇经资料核查的 Flashcard Lab 应用评测，涵盖 Google Sheets 工作流、移动应用、间隔重复、价格、权限和替代方案。"
date: "2026-08-12"
image: "/blog/flashcard-lab-review.png"
keywords:
  - "Flashcard Lab 应用评测"
  - "Flashcard Lab 评测"
  - "Flashcard Lab 替代方案"
  - "Google Sheets 闪卡"
  - "Flashcard Lab 价格"
  - "Flashcard Lab 与 Anki 对比"
---

Flashcard Lab 从一张熟悉的表格开始：第一列写问题，第二列写答案，第一行是表头。你不必先把表格导入另一个牌组编辑器，只要选中 Google Sheet，就能在 Flashcard Lab 中学习。对于已经用 Sheets 制作课程内容或词汇表的人来说，这个区别很实在。

这篇 **Flashcard Lab 应用评测**依据产品网站、当前的 Android 和 iPhone 商店页面、Chrome 应用商店、Google Workspace Marketplace 以及厂商的隐私政策撰写，并非亲自上手测试。官方资料清楚介绍了内容编写、采集、打印和复习功能，但一些重要的产品行为仍没有文档说明。

> **利益披露：** 我是 Kirill Markin，也是本文所列替代产品之一 [Flashcards Open Source App](/zh/features/) 的开发者。Flashcard Lab 以电子表格为核心的工作流更出色。如果你更看重专门的正反面卡片工作区、有文档说明的 FSRS-6、离线优先的本地写入、MIT 许可源代码或全栈自托管，而不是 Google Sheets 集成，那么 Flashcards 更有优势。Anki 仍是面向高级用户的成熟本地工具标杆。

**事实核查日期：** 2026 年 8 月 12 日。下文价格是当天公开可见的美国 App Store 价格。税费、地区定价、促销、插件结账页价格和未来测试版的条款可能有所不同。

![印刷师从双列主网格中取出一组配对行，旁边放着印好的学习卡片](/blog/flashcard-lab-review.png)

## 先说结论

- 如果你希望在 Google Sheets 中创建和维护卡片，选择 **Flashcard Lab**。浏览器采集、电子表格批量编辑、移动端复习和 Google Docs 打印共同组成了一套实用工作流。
- 如果你想在非 Google 工作区中使用正面、背面分开的卡片，同时需要有文档说明的 FSRS-6、离线优先写入、开源代码和受支持的自托管路径，选择 **Flashcards Open Source App**。它没有实时 Google Sheets 集成。
- 如果你需要成熟的桌面客户端、高级笔记类型和模板、插件、成熟的集合包格式，或更深入的 FSRS 控制，选择 **Anki**。

没有哪款产品天然胜出。真正决定选择的是：学习资料的主版本应该放在哪里——Google Sheet、专用的开放工作区，还是成熟的本地集合。

## Flashcard Lab、Flashcards 与 Anki 对比

| 决策项 | Flashcard Lab | Flashcards Open Source App | Anki |
| --- | --- | --- | --- |
| 最适合 | 用电子表格编写内容、通过浏览器采集、用 Google Docs 打印，以及简单复习 | 在开放的 Web 和移动技术栈中专注学习正反面卡片 | 使用模板、插件并支持多种迁移方式的成熟本地闪卡系统 |
| 资料主版本 | Google Sheet 中的行提供问题、答案和可选补充文字 | 工作区卡片保存明确的正面、背面、标签、牌组、媒体和调度状态 | 本地集合保存笔记、字段、生成的卡片、媒体和调度数据 |
| 调度 | 厂商宣传“简单间隔重复”；未找到公开的算法或间隔公式 | 有文档说明的 FSRS-6，评分为 Again、Hard、Good 和 Easy | 成熟的 FSRS 控制，包括期望记忆率、参数优化、预设和模拟 |
| 平台 | 浏览器、Google Sheets 插件、Chrome 扩展、iPhone 和 Android | Web、iOS 和 Android；没有原生桌面应用 | Windows、macOS、Linux、AnkiWeb、AnkiMobile 和 AnkiDroid |
| 离线边界 | 未找到官方对完整离线使用及后续同步的说明 | 卡片、编辑和复习先写入本地，恢复网络后再同步；首次登录和加载工作区数据需要联网 | 已安装的客户端在本地保存集合并可离线工作；AnkiWeb 是浏览器服务 |
| 电子表格工作流 | 产品的核心；官方没有说明常规的 Sheet 复习需要另行导入牌组 | 可把电子表格作为资料附件，用于生成经人工检查的 AI 初稿；卡片不会与 Sheet 保持实时关联 | 把分隔符文本导入笔记字段；源表格不会保持关联 |
| 2026 年 8 月 12 日核查的价格 | 可免费开始使用，部分功能付费；美国 iPhone 商店页面显示 Pro 为 US$17.99，Elite 为 US$19.99 | 托管版核心功能在测试期间免费；MIT 许可软件免费，但自托管基础设施和服务提供商需要成本 | 桌面版、AnkiWeb 和 AnkiDroid 免费；美国 AnkiMobile 当时为一次性付费 US$24.99 |
| 开源与自托管 | 未找到官方核心源代码或自托管发行版 | 应用和 AWS 基础设施采用 MIT 许可，并提供有文档说明的生产部署路径 | 开源桌面客户端和官方自托管同步服务器；并不是可自托管的 AnkiWeb |

这张表有意比较工作流，而不是功能数量。使用 Flashcard Lab 时，电子表格仍是一张普通的电子表格。Flashcards 和 Anki 则把更丰富的学习状态保存在学习系统内，但也因此脱离了以 Sheet 为中心的模式。

## Google Sheet 始终是工作流的中心

当前的 [Android 商店页面](https://play.google.com/store/apps/details?id=com.tidisventures.flashcardlabmobile)给出了一套基本表格结构：第一行是表头，第一列是问题，第二列是答案。页面把第三列和第四列称为可选的答案补充文字和问题补充文字。[iPhone 商店页面](https://apps.apple.com/us/app/flashcard-lab/id6469375646)则把这些可选列描述为同义词和助记词。前两列显然是各端共有的核心；如果要依赖可选列，请先检查当前模板是否适用于你要使用的各个端。

这种结构正是 **Google Sheets 闪卡**的吸引力所在。教师可以用填充功能统一修改重复出现的术语，与同事协作整理班级清单，而且这些行离开复习应用后仍然清晰可读。学习者则可以在开始复习前整理词汇、清理粘贴进来的资料或使用公式。

Flashcard Lab 提供了几种使用这些行的方式：

- [产品网站](https://flashcardlab.co/)宣传了浏览器复习、随机出卡、问题与答案互换模式、图片、自定义颜色、简单间隔重复、用 AI 把 PDF 转成卡片，以及通过 Google Docs 打印卡片。
- [Chrome 扩展](https://chromewebstore.google.com/detail/flashcard-lab/fomgbfkcdcnconmkcppfhakhoagmndkp)可以把网页上选中的文字保存到指定 Google Sheet、获取 Dictionary.com 的释义，并在扩展中运行多种复习模式。
- Google Sheets 插件支持图片、音频链接、复习、用 AI 从 PDF 生成卡片，以及输出可打印的 Google Docs 文档。
- Android 和 iPhone 应用允许用户选择 Google Sheets 并在手机上复习。核查时，两家商店页面都显示了 2026 年 5 月发布的版本。

这些功能组成了一个连贯的循环：浏览时采集，在 Sheets 中编辑，通过浏览器或移动应用复习，需要实体卡片时再打印。官方没有公布各端之间的确切刷新时机和同步规则，因此称其“以 Sheet 为中心”，比承诺实时、无冲突同步更稳妥。

Notion 已不再是这套循环的一部分。移动应用的版本历史显示，这项集成已于 2024 年停止。仍把 Notion 展示为当前内容来源的旧截图已经过时。

## Flashcard Lab 的优势体现在哪里

### 批量编辑，无需反复导入

许多闪卡应用都能导入 CSV 或制表符分隔文本。但导入后，电子表格和牌组就成了两个独立副本。Flashcard Lab 的核心是直接复习选中的 Sheet，因此很适合通过粘贴清单、公式、协作编辑或频繁批量修改来维护的资料。

这也让卡片文字更容易迁出。即使停止使用 Flashcard Lab，问题和答案仍能以表格行的形式阅读。这种可移植性很有用，但并不涵盖学习状态的每个部分。

### 在浏览器中采集小知识点和词汇

Chrome 扩展可以通过右键菜单保存选中的文字，并获取释义。商店页面称，添加单词、文字和释义可以免费使用，但在扩展内无限次复习需要高级功能。

采集不等于核实。自动获取的释义可能不符合原句语境、含义过宽，或只是太长，不适合做成一张好用的卡片。如果你会在学习前检查生成的表格行，这套快捷工作流就很有价值。

### 无需重做卡片即可打印

通过 Google Docs 打印，对教师、课堂分站学习、实体卡片分类活动，以及学习时无法使用设备的学习者都很实用。Flashcard Lab 能把 Sheet 转成可打印卡片，无需截图，也不用再借助另一套排版工具。

如果从 Sheets 到 Docs 的打印是核心需求，Flashcard Lab 显然最合适。Flashcards Open Source App 没有对应的工作流，而打印也不是大多数人选择 Anki 的理由。

## 有间隔重复，但公式并未公开

Flashcard Lab 宣传了一种间隔重复学习模式。其官方商店页面还介绍了随机复习、反向卡片、遗忘词汇重测，以及结果或进度视图。这些确实都是复习功能，但并未说明具体采用哪种调度算法。

本文核查的资料没有提到 FSRS、SM-2 或其他算法，也没有公开间隔公式、展示每次回答会怎样改变下次到期日期，或说明复习历史是否保存在 Google Sheet 中。一篇负责任的 **Flashcard Lab 评测**不能靠推测填补这些空白。

Flashcards 对外说明的是另一套机制。它的 [FSRS-6 文档](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md)介绍了评分、保存的状态、默认值和当前限制。它使用官方默认权重，而不是根据每位学习者的历史优化个性化权重。

对于希望进一步调整系统的用户，Anki 提供了更多选项。它的 [FSRS 设置](https://docs.ankiweb.net/deck-options.html#fsrs)包括期望记忆率、参数优化、预设和模拟工具。这使 Anki 成为调度功能成熟的选择，但对于只想少做设置、直接复习 Sheet 的人来说，它并不一定更合适。

如需进一步了解算法本身，请参阅 [FSRS vs SM-2](/zh/blog/fsrs-vs-sm-2/)。在厂商公布更多细节之前，我们无法判断 Flashcard Lab 是否采用了其中任何一种算法。

## 移动应用没有说明离线能力边界

除了浏览器、插件和扩展，Flashcard Lab 目前也有 Android 和 iPhone 应用。Google Play 显示其于 2026 年 5 月 6 日更新。美国 Apple 商店页面显示 2.7.1 版于 2026 年 5 月 5 日发布，并将这款应用标为“仅适用于 iPhone”。

公开页面没有完整说明离线使用方式。我没有找到任何官方承诺涵盖冷启动、完全保存在本地的集合、离线编辑、排队等待同步的复习记录，或重新联网后的冲突处理。这些资料也没有准确解释移动端复习会在何时影响 Sheet，或进度状态保存在何处。

这只是文档中的未知项，并不代表离线使用一定会失败。不过，计划在飞机上或网络不稳定时学习的人，不应依赖厂商尚未写入文档的行为。

Flashcards 的文档说明，Web 和移动端会把卡片、编辑和复习[优先写入本地](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/architecture.md#offline-first-sync)，恢复网络后再同步。首次身份验证和加载工作区数据仍然需要网络连接；AI 功能和未缓存的媒体也受网络限制。已安装的 Anki 客户端会把使用中的集合保存在本地。[离线闪卡对比](/zh/blog/best-offline-flashcards-app/)更详细地说明了这些区别。

## Flashcard Lab 的价格取决于使用端

目前没有一张公开的 **Flashcard Lab 价格**表，能够可靠涵盖插件、扩展、Android 应用、iPhone 应用和浏览器端。

[Workspace Marketplace 商店页面](https://workspace.google.com/marketplace/app/flashcard_lab/934660656831)注明“免费使用，提供付费功能”。页面把无限复习、图片、打印和 AI 功能列为高级功能，并引导用户前往插件的升级菜单查看当前价格。

Google Play 表示，该插件免费，但高级插件功能需要一次性付费才能获得终身使用权，具体金额并未公布。Android 应用则标注为含广告和应用内购买项目。

2026 年 8 月 12 日，美国 iPhone 商店页面显示该应用可免费下载，并提供以下购买项目：

- **Flashcard Lab Pro：** US$17.99
- **Flashcard Lab Elite：** US$19.99

公开商店页面没有充分说明使用期限或跨端权益，因此无法判断任一购买项目是否对应插件所称的终身使用权。请在你打算使用的端内查看升级页面；不要假设购买 iPhone 版本就会解锁 Google Sheets、Android、Chrome 或浏览器功能。

作为对比，Flashcards 的[托管版核心功能在测试期间免费](/zh/pricing/)。采用 MIT 许可的软件可以自托管，但 AWS 基础设施、电子邮件、监控、AI 服务提供商、备份和维护仍需要投入金钱或时间。Anki 桌面版、AnkiWeb 和 AnkiDroid 免费；核查时，美国官方 AnkiMobile 应用的一次性购买价格为 US$24.99。

## 核对 Google 权限与厂商的隐私声明

Marketplace 权限页面显示，Flashcard Lab 可以请求以下访问权限：

- 查看、编辑、创建和删除所有 Google Docs 文档；
- 查看和管理已安装该应用的电子表格；
- 在提示框和侧边栏中显示并运行第三方网页内容；
- 查看账号的主要电子邮件地址和基本个人信息。

这些权限与创建可打印的 Docs 文档以及在 Sheets 内工作相符，但权限范围依然不小。请使用将要保存学习资料的账号检查这些权限。由学校管理的账号可能还需要管理员批准。

厂商的[隐私政策](https://flashcardlab.co/privacy-policy?policy=flashcard-lab)标注日期为 2024 年 3 月 1 日。政策称，应用会读取电子邮件地址、列标题和单元格内容；用户授权并主动触发相应操作后，应用可以写入 Sheets。政策还称，远程数据库会存储电子邮件地址、Google Sheet ID、付款交易 ID 和付款日期，但不会存储 Google Sheet 的单元格内容。

这些内容来自厂商，并非独立审计结论。Marketplace 页面说明应用请求哪些 Google 权限；隐私政策说明厂商声称如何使用和存储数据；Apple 和 Google Play 展示的是开发者提供的隐私声明。该政策并未详细说明 PDF 转卡片 AI 的每一条数据流。上传敏感的学校、客户、健康或未发表研究资料前，请单独评估风险。

## Sheet 中的卡片内容可以迁移，但它不是完整备份

这里最可靠的可移植性结论很简单：无需解析专有牌组文件，你仍然可以阅读和复制包含问题与答案的行。

官方资料并未证明复习历史、间隔重复状态、测试结果、图片行为、购买项目或每项应用设置都保存在 Sheet 中。原样保留一份副本可以保护可见的卡片内容，但这份副本并不会自动成为完整的 Flashcard Lab 备份。

也无法无损迁移到 Flashcards Open Source App。Flashcards 没有实时 Google Sheets 集成，也没有 Flashcard Lab 导入工具。CSV、电子表格导出文件或作为附件上传的电子表格可以用作 AI 辅助生成卡片初稿的源资料，但初稿需要检查，而且会从新的 FSRS 状态开始。把电子表格作为附件上传，不等于让卡片继续与实时 Sheet 保持关联。

Anki 提供了更传统的迁移方式，它可以[把分隔符文本导入笔记字段](https://docs.ankiweb.net/importing/text-files.html)。你仍需要映射各列、决定如何处理可选补充文字、检查媒体；除非受支持的格式明确包含历史记录，否则应做好从新的调度状态开始的准备。Google Sheet 并不是 Anki 集合包。

迁移大型 Sheet 之前：

1. 创建一份副本，之后不要改动它。
2. 记录表头、公式、行数、媒体链接和可选补充列。
3. 选取包含多行文本、Unicode、空白单元格、公式、图片和链接的代表性行进行测试。
4. 在扩大迁移规模前，对比生成的正面、背面和补充文字。
5. 除非两个产品都用文档说明了转移路径，否则应假定复习历史和调度状态会留在原系统中。

Flashcards 自己的 `flashcards.zip` 导出也有类似边界：它会转移活跃卡片、标签和引用的媒体，但不会转移复习历史、FSRS 状态、工作区设置、完整牌组结构或账号数据。开源也不会让一份内容导出自动变成完整备份。

## 该选择哪种工作流？

### 选择 Flashcard Lab，让工作流继续以电子表格为中心

如果 Google Sheets 本来就是日常维护资料的地方，而且批量编辑、协作、浏览器采集或 Google Docs 打印确实能节省时间，Flashcard Lab 很合适。浏览器和移动端复习用起来更方便，也不需要你在传统牌组编辑器中重做内容。

决定使用前，需要接受这些取舍：范围不小的 Google 权限、公式未公开的调度器、没有明确说明的完整离线行为、缺少文档的精确跨端同步规则，以及必须在计划使用的端内核实的价格。

### 选择 Flashcards，使用开放且不依赖 Google 的工作区

如果目标是把学习资料的主版本移出 Google Sheets，Flashcards 是更有优势的 **Flashcard Lab 替代方案**。它提供专用的正反面卡片、有文档说明的 FSRS-6、Web 和移动端的离线优先写入、Agent 访问、MIT 许可代码，以及受支持的全栈部署方案。

它并不是沿用现有 Sheet 工作流的捷径。它没有实时 Sheets 同步、直接的 Flashcard Lab 导入工具、原生桌面客户端，也无法无损迁移调度状态。[入门指南](/zh/docs/getting-started/)介绍了托管版的使用路径。[自托管指南](/zh/docs/self-hosting/)则解释了以 AWS 为中心的生产部署路径及其对运维者的要求。

### 选择 Anki，获得成熟的本地高级功能

在 **Flashcard Lab 与 Anki 对比**中，如果本地桌面集合、卡片模板、挖空填空和自动生成的卡片类型、插件、成熟的集合包、直接文本导入，以及成熟的 FSRS 控制值得投入更多设置精力，就选择 Anki。

Anki 会把电子表格中的行转换成导入的笔记字段，而不会让 Sheet 继续充当日常内容编辑入口。以 Sheets 为中心时，多出的这一步会很麻烦；当最终系统需要长期支持复杂集合时，这一步则很合理。

如果这三款产品都不合适，可以阅读[更全面的 Anki 替代方案指南](/zh/blog/best-anki-alternatives/)和[开源闪卡对比](/zh/blog/best-open-source-flashcard-apps-2026/)了解更多选择。如果教师的主要需求只是打印卡片，那么一套稳定的 Sheet 与 Docs 模板甚至可能比带调度功能的复习系统更合适。

## 最终结论

Flashcard Lab 的定位很明确：把 Google Sheet 中的行变成可复习、可打印的卡片，同时让电子表格继续处于内容编写流程的中心。浏览器采集、批量编辑、移动端复习、用 AI 把 PDF 转成卡片以及 Google Docs 打印，让它尤其适合习惯使用电子表格的学习者和教师。

它的局限同样清楚。“简单间隔重复”没有披露算法。移动应用的商店页面不能证明其具备完整的离线能力。Sheet 中的内容可读，并不能证明复习历史也可以迁移。某一端的公开价格，也不能证明购买权益可以在所有端通用。

想要完整的 Google Sheets 工作流，就选择 Flashcard Lab。需要带有文档说明的 FSRS-6 和离线优先写入的专用开放工作区，就选择 Flashcards。需要成熟的本地控制和高级用户功能，就选择 Anki。最合适的产品，应该把学习资料的主版本放在你真正愿意长期维护的地方。
