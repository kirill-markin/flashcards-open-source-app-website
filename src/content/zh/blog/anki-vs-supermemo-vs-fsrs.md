---
title: "Anki vs SuperMemo vs FSRS（2026）：三者分别是什么，应该怎么选"
description: "讲清 Anki vs SuperMemo vs FSRS：对比 Anki、两款现行 SuperMemo 产品、FSRS 调度器、复习评分，以及各自适合的工作流。"
date: "2026-08-03"
image: "/blog/anki-vs-supermemo-vs-fsrs.png"
keywords:
  - "Anki vs SuperMemo vs FSRS"
  - "Anki FSRS"
  - "SuperMemo 算法"
  - "FSRS 调度器"
  - "间隔重复算法"
  - "Again Hard Good Easy"
  - "Anki vs SuperMemo"
  - "FSRS vs SM-2"
---

你可以在 Anki 中使用 FSRS。SuperMemo 20 发布后，FSRS 也能在一款 SuperMemo 产品内部参与调度。这个事实澄清了 **Anki vs SuperMemo vs FSRS** 的大部分误解：它们并不是三个互斥选项。

Anki 是闪卡产品和生态。SuperMemo 既可能指两款现行产品，也可能指一个延续多代的算法家族。FSRS 则是可由不同产品实现的调度器。本文会先分清这些类别，再比较你实际面对的选择。

> **披露：**我是 Kirill Markin，也是 [Flashcards Open Source App](/zh/features/) 的开发者。下文会把它作为一种实际的 FSRS 实现来介绍，但不会默认将它列为最佳选择，也会明确说明其生态尚年轻所带来的影响。

**事实核查日期：**2026 年 8 月 3 日。

![两台不同的学习机器内部装有相同的蓝绿色 FSRS 发条调度器](/blog/anki-vs-supermemo-vs-fsrs.png)

## 简短答案：Anki 和 SuperMemo 是产品，FSRS 是调度器

最清晰的理解方式如下：

- **Anki** 是一套闪卡应用和生态，包括桌面应用、AnkiWeb 同步、兼容的移动客户端、灵活的卡片模板、共享牌组和 add-ons。当前版本的 Anki 可以选择 FSRS，也可以继续使用旧调度器。
- **SuperMemo 20 for Windows** 是一款 Windows 知识管理和渐进阅读应用。它的 Algorithm Arena 会运行包括 FSRS 在内的多种调度算法，并根据各算法在用户数据上的预测表现为结果分配权重。
- **SuperMemo.com** 是一项独立的托管语言学习服务，支持 Web、iOS 和 Android。它按照公开说明的 SuperMemo 方法提供课程和用户创建的 MemoCards。
- **FSRS** 全称 Free Spaced Repetition Scheduler。它根据复习历史、评分、模型参数和记忆保留率目标计算复习时间。它本身不是卡片编辑器、账户系统、同步服务、牌组市场或学习界面。

因此，“Anki FSRS”并不矛盾：Anki 是产品，FSRS 是在产品内选用的调度器。

## Anki vs SuperMemo vs FSRS 一览

| 选择 | 它是什么 | 调度方式 | 最适合 | 主要注意点 |
| --- | --- | --- | --- | --- |
| [Anki](https://docs.ankiweb.net/getting-started.html) | 成熟的闪卡产品和生态 | 内置 FSRS 或 Anki 旧调度器；FSRS 需全局启用 | 已有卡片库、自定义模板、add-ons、共享牌组和成熟的 Anki 工作流 | 迁移到其他产品可能要付出不小的实际成本 |
| [SuperMemo 20 for Windows](https://supermemo.store/products/supermemo-20-for-windows) | 专有的 Windows 知识管理和渐进阅读产品 | Algorithm Arena 包含 SM-2、SM-15、SM-19、SM-20 和 FSRS | 渐进阅读、知识树，以及从文档、网页、电子邮件和视频导入内容 | 仅支持 Windows；与 SuperMemo.com 是不同产品 |
| [SuperMemo.com](https://www.supermemo.com/en/app) | 支持 Web、iOS 和 Android 的托管语言学习服务 | 专有 SuperMemo 方法；当前公开页面未说明它使用 SM-18、SM-20 或 FSRS | 预制语言课程、MemoCards 和跨设备托管学习 | 它不是 Windows 产品，确切调度器也未公开 |
| [FSRS](https://github.com/open-spaced-repetition/fsrs4anki) | 开放的调度器和相关项目 | 由宿主产品或库实现 | 希望检查调度逻辑的开发者和用户 | 本身不提供卡片、编辑器、同步或学习界面 |
| [Flashcards Open Source App](/zh/features/) | 围绕 FSRS 构建的较年轻开源闪卡产品 | FSRS-6，固定采用官方默认权重，并可配置 workspace 调度设置 | Web、iOS、Android、自托管、API 和 AI agent 工作流 | 生态规模小于 Anki，尚不支持个性化 FSRS 权重 |

这些比较项并非刻意写得完全对称。Anki 和 Flashcards 提供完整的闪卡工作流；SuperMemo 20 把调度融入更广泛的阅读和知识工作流；SuperMemo.com 提供托管语言学习体验；FSRS 则为其他软件提供调度逻辑。

## Anki 实际提供了什么

Anki 远不只是一种间隔重复算法。它的价值来自围绕调度长期积累的完整产品能力：可以生成卡片的笔记、可编程的[卡片模板](https://docs.ankiweb.net/templates/intro.html)、媒体、牌组管理、[add-ons](https://docs.ankiweb.net/addons.html)、导入导出格式，以及[卡片库同步](https://docs.ankiweb.net/syncing.html)。

所以，当有人说想离开 Anki“改用 FSRS”时，首先要知道：现在的 Anki 已经支持 FSRS。根据 [Anki FSRS 手册](https://docs.ankiweb.net/deck-options.html#fsrs)，FSRS 可替代 Anki 旧版的 SuperMemo 2 调度器，而且启用 FSRS 是全局选择，不能只对某一个 preset 开启。Desired retention 为卡片到期时的回忆概率设定模型目标；调高这个目标通常会缩短间隔并增加复习次数。Anki 还可以通过 **Optimize** 操作，用兼容的复习历史拟合 FSRS 参数。

这里需要补充一点历史背景。**SM-2 是 SuperMemo 算法谱系中的早期算法，并不是当前 SuperMemo 的同义词。**把 Anki 的旧调度器称为“legacy SM-2”，是沿用 Anki 文档的表述，并指出其背后的算法家族；这并不代表每一处实现细节都与几十年前发布的原始 SM-2 完全相同。更聚焦的技术对比见 [FSRS vs SM-2](/zh/blog/fsrs-vs-sm-2/)。

如果你的成熟卡片库依赖自定义模板、add-ons、媒体或多年的复习历史，换产品会带来实实在在的迁移工作。只更换 Anki 的调度器，成本可能远低于离开 Anki。更完整的产品层面对比见 [Anki vs Flashcards](/zh/blog/anki-vs-flashcards-open-source-app/)。

## 现在谈“SuperMemo”必须说清具体指什么

**SuperMemo** 这个名称可能指一个产品系列、一项在线服务、一套方法或一个算法家族。把它们当成同一个现行应用来比较，很容易得出错误结论。

### SuperMemo 20 for Windows

[SuperMemo 20 for Windows](https://supermemo.store/products/supermemo-20-for-windows) 于 [2026 年 4 月 1 日发布](https://supermemo.store/products/supermemo-20-upgrade)。它面向 Windows 10 和 11，以一次性许可证销售，服务于比普通正反面闪卡更广泛的知识工作。产品页面显示，它支持渐进阅读，以及 PDF、EPUB、电子邮件、网页、图片和 YouTube 工作流。

它最受关注的调度功能是 **Algorithm Arena**。产品页面称，SM-2、SM-15、SM-19、SM-20 和 FSRS 会并行运行并给出预测，再根据各自在用户数据上的预测表现获得不同权重。这是厂商公开说明的产品行为，并不是独立证据，不能证明 SuperMemo 20 能让每位学习者都比使用其他应用取得更好的效果。

Algorithm Arena 很直观地说明了问题：FSRS 可以运行在 *SuperMemo 20 内部*，两者并不是互斥选项。

### 托管的 SuperMemo.com 服务

当前的 [SuperMemo.com 应用](https://www.supermemo.com/en/app)是一项托管语言学习服务，可通过浏览器、iOS 和 Android 使用。它以预制语言课程、学习计划、MemoCards 及相关语言功能为核心。课程可以下载到移动端学习，但[离线使用文档](https://www.supermemo.com/en/faq/can-i-use-supermemo-offline)列出了重要限制：添加 MemoCards、AI、搜索、统计和课程编辑器等功能在离线状态下仍不可用。

这项托管服务将其调度器描述为专有技术，并公开介绍了自己的 SuperMemo 方法和复习流程。现有公开页面无法证明其当前调度器属于 SM-18、SM-20 或 FSRS 中的任何一种，因此本文不会给它套用其中任何一个标签。

这一区别会直接影响选择。想在 Windows 上做渐进阅读，应该评估 SuperMemo 20；想使用托管的西班牙语或英语课程，则应该评估 SuperMemo.com。两者共享名称和历史，但产品体验不能互相替代。

## SuperMemo 算法是一个家族，不是一条公式

SuperMemo 的发展史包含多代不同的调度算法。官方的 [SuperMemo 算法历史](https://supermemo.guru/wiki/History_of_SuperMemo_algorithm)梳理了 SM-4、SM-5、SM-6、SM-8、SM-11、SM-15、SM-17 和 SM-18 的演变，并将 SM-18 稳定性函数的调整追溯到 2019 年。SuperMemo 20 的当前文档把 SM-19 和 SM-20 列为后续版本，并在 Algorithm Arena 中将它们与更早的算法及 FSRS 并列。

因此，“Anki 使用 SuperMemo 算法”这样的说法太含糊，无法帮助你做判断。具体是哪一代算法？哪个产品中的实现？使用什么设置和评分规则？

SM-2 在历史上很重要，因为它影响了许多闪卡调度器。当前的 SuperMemo Windows 软件已经历多代更新。至于托管的 SuperMemo.com 服务，现有公开信息不足以将它直接等同于任何一个带编号的 Windows 算法。

## FSRS 调度器模拟什么

[FSRS4Anki](https://github.com/open-spaced-repetition/fsrs4anki) 介绍了两个主要组成部分：scheduler 和 optimizer。Scheduler 负责计算每张卡片的复习时机；如果宿主产品支持相应流程，optimizer 可以根据复习历史拟合参数。两者都不提供牌组、编辑、账户、同步或学习界面。

[ABC of FSRS](https://github.com/open-spaced-repetition/fsrs4anki/wiki/ABC-of-FSRS) 通常用三个变量解释这个模型：难度、稳定性和可提取性。[FSRS 算法文档](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm)给出了更严谨的定义：

- **可提取性（Retrievability，R）**是模型预测你当前能够回忆起该项目的概率。
- **稳定性（Stability，S）**是在该模型中，预测可提取性降至 90% 时所对应的间隔。
- **难度（Difficulty，D）**是模型对提升该项目记忆稳定性难度的估计。

这些变量是根据复习数据推断出的模型状态，并非对大脑中某条记忆痕迹的直接测量。一张卡片的预测可提取性可以很有参考价值，但它仍是预测，会受到复习历史、评分、具体实现和参数的影响。

Desired retention 会把模型转化为复习计划。调度器估算可提取性何时会达到设定目标，再结合宿主产品的规则得出间隔。称它为“基于目标的间隔”更准确；不能说这个日期已经被证明完美，或对所有人都最优。

## Again、Hard、Good、Easy——不同产品的标签不能直接对应

复习评分是输入调度系统的信号。不同产品使用的名称和量表并不相同，强行一一对应会扭曲原本的含义。

| 系统 | 可见评分 | 标签所表达的含义 |
| --- | --- | --- |
| 使用 FSRS 的 Anki | Again、Hard、Good、Easy | Again 表示回忆失败；Hard、Good 和 Easy 都表示回忆成功，只是费力程度依次降低。 |
| Flashcards | Again、Hard、Good、Easy | 成功与失败的分界相同。API 使用 0–3，并在内部将这些值映射为 FSRS 的 1–4 级。 |
| 托管的 SuperMemo.com | Don't know、Almost、Know | [SuperMemo 方法页面](https://www.supermemo.com/en/supermemo-method)所记录的三档产品评分，不能机械地映射到 FSRS 的四档评分。 |
| SuperMemo 20 for Windows | 桌面版 SuperMemo 评分流程 | 这是另一个产品界面，会为 Algorithm Arena 中的多种算法提供输入。不要根据托管服务的三个标签推断它的含义。 |

对 FSRS 而言，最关键的界线在 Again 与 Hard 之间。[Anki 手册](https://docs.ankiweb.net/deck-options.html#fsrs)明确指出，FSRS 将 Hard 视为回忆成功，将 Again 视为失败。如果只是因为下次间隔看起来更合意而选择 Hard，就会记录一件并未发生的事。实用的 [Again vs Hard 指南](/zh/blog/again-vs-hard-fsrs-flashcards/)详细讨论了部分答对和其他边界情况。

## Flashcards 目前如何实现 FSRS

Flashcards 将 FSRS 作为明确的产品组件，而不是含糊地贴上“智能重复”标签。该实现已于 2026 年 8 月 3 日对照源码仓库的 commit `9cb013f78767c081f5385a53daa5e4b9fe69d3b6` 核实。

后端调度器遵循官方 `ts-fsrs` 5.2.3 的流程，并固定采用官方 FSRS-6 默认权重。后端、iOS 和 Android 各自包含一套独立的调度器实现；Web 应用复用后端模块，没有维护第四套实现。共享的 golden test vectors 用于保证这些实现的调度行为一致。

每张卡片都会保存稳定性、难度、上次复习时间、已排定天数、工作流状态（`new`、`learning`、`review` 或 `relearning`），以及适用时所处的短期学习步骤。状态转换以客户端的实际复习时间为准，而不是服务器后来处理该次复习的时间。

Workspace 的默认设置如下：

- FSRS-6
- desired retention 为 `0.90`
- learning steps 为 `1` 分钟和 `10` 分钟
- relearning step 为 `10` 分钟
- maximum interval 为 `36,500` 天
- 启用 fuzz

Workspace 可以调整 desired retention、steps、maximum interval 和 fuzz，并将新设置用于之后的复习。Flashcards 目前**不会**为每位用户个性化 FSRS 权重，也不向用户开放这些权重；v1 固定采用默认权重。这一点与支持根据个人复习历史拟合参数的产品存在重要区别。[FSRS 设置指南](/zh/blog/fsrs-settings/)解释了这些设置对工作量的影响，也不会假定每个选项都必须调整。

在 Web 复习界面中，Flashcards 会预览 Again、Hard、Good 和 Easy 各自对应的下次间隔。用户/API 评分 `0`、`1`、`2` 和 `3` 会在内部映射为 FSRS 的 `1` 至 `4` 级。Again 记录回忆失败；Hard、Good 和 Easy 记录回忆成功，费力程度依次降低。所有客户端都会在用户频繁选择 Hard 时提醒：没有回忆出的答案应该选择 Again。

这样可以让调度逻辑保持可核查，并在各平台上保持一致。但卡片质量、如实评分和按时完成复习依然不可或缺。

## 哪个选择适合你的工作流？

### 你已经有长期使用的 Anki 卡片库

通常可以继续使用 Anki，并考虑在其中启用 FSRS。你的模板、add-ons、媒体、牌组结构和复习历史，可能比更换界面带来的新鲜感更有价值。请先确认所有客户端都支持 FSRS，并检查 add-on 兼容性，尤其是会修改调度或间隔的 add-ons。

### 你想在 Windows 上深度使用渐进阅读

可以评估 SuperMemo 20 for Windows。它结合了知识树、渐进阅读、文档与网页导入，以及 Algorithm Arena，与专注于闪卡的应用有明显区别。重点测试实际工作流，不要只看算法列表。

### 你想使用预制的托管语言课程

可以评估 SuperMemo.com。它的 Web 和移动端产品围绕语言课程和 MemoCards 设计。请确认离线限制是否符合你的学习习惯，也不要假定它的调度器就是 Windows 产品中的 SM-20 或 Algorithm Arena。

### 你正在开发应用，或需要选择一个可审查的调度器

可以评估 FSRS 的实现和相关库。开放的文档、公式和参考项目让调度逻辑可供检查。不过，你仍需决定评分机制、用户可调整的设置、复习同步方式、卡片状态的持久化方法，以及如何测试各平台实现是否一致。

### 你想要现代的开源 Web、移动端和 agent 工作流

可以评估 [Flashcards Open Source App](/zh/features/)。它把 FSRS-6 与 Web、iOS、Android、自托管、公开 API 和 AI agent 访问结合起来。它的实际局限是生态尚不成熟：与 Anki 相比，它在模板、add-ons、共享牌组和迁移保真度方面都不够丰富。依赖 Anki 这些优势的卡片库，应该继续留在 Anki。

## 调度器救不了薄弱的学习系统

负责任的 Anki vs SuperMemo vs FSRS 对比，无法承诺某个选择对所有学习者都最好。调度器可以在基准测试中给出校准更准确的预测，但它仍只是影响最终效果的一个因素。

实际效果还取决于：

- 卡片是否只考查一件明确的事
- 你是否如实将回忆失败评为失败
- 复习历史是否具有代表性
- desired retention 和新卡数量是否带来可持续的工作量
- 你是否完成到期复习，还是一再错过
- 产品的编辑、阅读和移动端工作流是否适合你的日常生活
- 底层材料是否准确且值得记住

厂商文档可以说明产品如何运行，预测基准则在特定数据和指标下比较模型。两者都无法证明某个产品能让每一位学习者记住更多内容。

## Anki vs SuperMemo vs FSRS 的实用结论

要回答 **Anki vs SuperMemo vs FSRS**，首先要放下“三选一”这个错误前提。

如果你既想保留 Anki 的成熟生态，又想使用现行的 FSRS 调度器，就选择 **Anki with FSRS**。如果渐进阅读和深入的 Windows 知识工作流是核心需求，可以评估 **SuperMemo 20 for Windows**；FSRS 已经是其 Algorithm Arena 中的参与者之一。如果真正需要的是托管语言课程，应单独评估 **SuperMemo.com**。如果你正在开发或审查调度层本身，则应该评估 **FSRS 实现**。

Flashcards 适合较新的开源 Web、移动端、自托管和 agent 使用场景。它采用固定权重、经过跨实现一致性测试的 FSRS-6，同时产品生态也更年轻。

先选择你能长期坚持的工作流，再配置其中的间隔重复算法。产品把你带到复习环节，调度器给出一个基于模型的日期；真正提供学习信号的，仍然是你的卡片、评分和持续复习。
