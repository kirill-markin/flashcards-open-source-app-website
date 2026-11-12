---
title: "Gizmo 闪卡评测（2026）：免费版限制、Magic Import 与替代方案"
description: "这篇基于官方资料核查的 Gizmo 闪卡评测，涵盖免费版 Magic Import 的等待限制、AI Tutor、卡片类型、导出、离线证据，以及一个实用替代方案。"
date: "2026-08-03"
updated: "2026-11-12"
image: "/blog/gizmo-alternative-v2.png"
keywords:
  - "Gizmo 闪卡"
  - "Gizmo 闪卡评测"
  - "Gizmo AI 评测"
  - "Gizmo 免费吗"
  - "Gizmo Magic Import 限制"
  - "Gizmo 替代方案"
  - "Gizmo 导出"
---

如果你想免费把一周的笔记批量导入 Gizmo，需要记住一个数字：**20 分钟**。Gizmo 目前对 Magic Import 的限制是两次导入之间要等待 20 分钟，而不是每天设有固定配额。Gizmo Unlimited 会取消这段等待时间。

这篇 Gizmo 闪卡评测以当前的官方帮助页面为依据。我没有亲自试用 Gizmo，因此只介绍 Gizmo 文档明确说明的功能，并清楚标出无法确定的部分。

> **利益披露：** 我是 Kirill Markin，也是下文对比的替代产品 [Nibomo](https://nibomo.com/) 的开发者。根据现有文档，Gizmo 涵盖的工作流更广：支持更多源材料格式、七种卡片类型、AI Tutor 课程、多种测验形式和游戏化成长机制。Nibomo 则有意专注于更窄的范围。

**信息核对日期：** 2026 年 9 月 1 日。卡片类型和 PDF 导出于 2026 年 11 月 12 日再次核对。

![展示 Magic Import、卡片类型和另一种学习流程的 Gizmo 闪卡评测](/blog/gizmo-alternative-v2.png)

## Gizmo 免费吗？

是的，Gizmo 有免费版。目前最有可能打断学习过程的限制包括：

- [Magic Import](https://help.gizmo.ai/en/articles/15647624-what-is-magic-import) 要求免费用户在两次导入之间等待 20 分钟。Unlimited 会取消这段等待时间。
- [AI Tutor](https://help.gizmo.ai/en/articles/15869958-how-many-ai-tutor-sessions-can-i-have-for-free) 每个自然日提供五次免费会话。次数每天重置，Unlimited 不设每日会话上限。
- [Hearts](https://help.gizmo.ai/en/articles/15623061-what-are-hearts) 用于 Memorise：开始时有 15 颗，每答错一道题会失去一颗；全部用完后，要等 10 分钟才能再次测验。Gizmo 表示，仅使用闪卡的题目模式不消耗 Hearts。
- [Hints](https://help.gizmo.ai/en/articles/15504721-what-are-hints) 可以显示答案的首字母，或排除选择题中的一个错误选项。免费用户可以用测验赚到的 Coins 购买 Hints；Unlimited 提供无限量的 Hints 和 Hearts。

那么，Gizmo 免费版究竟能使用多少次 Magic Import？官方给出的答案是等待时间，而不是具体次数。文档承诺的是 20 分钟冷却期，并没有承诺每天一定能成功导入多少次。

## Gizmo 闪卡究竟能做什么

Gizmo 从你已有的材料入手。Magic Import 把材料转成卡片，Memorise 用这些卡片测试你，AI Tutor 则可以根据源材料授课。按照 Gizmo 的[官方产品概览](https://help.gizmo.ai/en/articles/14472668-how-does-gizmo-work)，XP、Levels、Leagues 和 Streaks 为这套学习循环加上了一层成长机制。

Magic Import 的专项指南列出了九种制卡来源：

- PDF
- 应用内录制的讲座或课程
- 粘贴的笔记
- 笔记或白板照片
- PowerPoint
- Quizlet
- Anki
- 电子表格或 CSV
- 网站 URL

Gizmo 会生成卡片，并高亮它准备拿来出题的词语。它自己的指南也提醒学生检查牌组，补上导入时遗漏的内容。这应该算作工作流的一部分，而不只是一条脚注：先对照源材料检查卡片，删掉问法不清的卡片并修正错误，再把牌组投入常规复习。

AI Tutor 也有一条相关的导入路径。[官方课程导入指南](https://help.gizmo.ai/en/articles/15935404-how-do-i-use-magic-import-to-start-an-ai-tutor-lesson)列出了 PDF、PowerPoint、YouTube、笔记、照片、讲座录音、Quizlet 集合和已有的 Gizmo 牌组。随后，Tutor 会根据这些材料授课，并在过程中穿插测验。

文档中的两份源材料清单并不相同。Anki、电子表格和网站出现在制卡指南中；YouTube 和已有的 Gizmo 牌组则出现在 Tutor 课程指南中。请确认你真正需要的导入路径，不要想当然地认为两个菜单都支持所有输入方式。

## Gizmo 支持七种卡片类型

Gizmo 当前的[卡片类型文档](https://help.gizmo.ai/en/articles/16527223-what-types-of-flashcards-can-i-make)列出了七种格式：

| 卡片类型 | 考查内容 | 创建方式 |
| --- | --- | --- |
| **问答题** | 可以包含文本或 LaTeX 的问题与答案 | 手动创建或使用 Magic Import |
| **多选题** | 可以有一个或多个正确选项的问题 | 手动创建或使用 Magic Import |
| **填空题** | 测验时填写段落中被高亮标出的词 | 手动创建或使用 Magic Import |
| **配对题** | 成对项目由 Gizmo 打乱，再由你重新配对 | 手动创建或使用 Magic Import |
| **排序题** | 条目由 Gizmo 打乱，再由你恢复正确顺序 | 手动创建或使用 Magic Import |
| **判断题** | 由你判断真假的陈述 | 手动创建或使用 Magic Import |
| **图片题** | 回想图示或照片上被遮住的标签 | 手动创建 |

图片题需要手动创建，其余六种也可以用 Magic Import 创建。

有一处文档冲突值得特别指出。卡片类型页面称，问答卡片的正面和背面都可以放图片。但 Gizmo 的[卡片管理指南](https://help.gizmo.ai/en/articles/13761411-how-do-i-edit-or-manage-my-cards)又称，照片和图片只能添加到正面。如果背面图片对你很重要，请先在当前编辑器里确认，再开始制作牌组。仅凭这两份官方页面，无法得出更确定的结论。

Gizmo 还说明，测验设置会影响你看到的题目形式。卡片保存时的格式与测验如何考查它有关，但并不完全相同。

## 学习流程不只包括卡片

Memorise 是主要的卡片复习模式。Gizmo 会高亮关键词、针对这些词出题，并通过间隔重复让卡片隔一段时间再次出现。Magic Import 会自动选择高亮词，但你可以自行修改。

AI Tutor 负责另一项工作。它可以逐步讲解材料、生成笔记，并根据源材料提问。当你手上有一堂讲座或一份文档，却还没想清楚哪些内容值得做成长期保留的闪卡时，这项功能很实用。

Gizmo 还把这两种模式的学习进度做成了游戏。测验会计入 XP、Levels、Leagues 和 Streaks，Hearts、Hints 和 Coins 则会影响免费用户的测验节奏。如果这些机制能让你更容易坚持每天回来学习，它们就是真正影响产品选择的功能，而不只是装饰。

简短的回忆提示和多步骤练习题发挥的作用不同。把两者结合起来：用卡片保留具体知识，再用完整题目检查能否选择并运用这些知识。

## 把整门课程搬进 Gizmo 前，先检查四项限制

### 自动生成的卡片仍需检查

Gizmo 明确建议在 Magic Import 后检查牌组，也建议把大型文档拆成较小的部分。实际操作顺序很简单：导入范围明确的一小节，对照源材料检查结果，修正或删除质量差的卡片，然后再开始复习。自动生成能省下录入时间，但人工审核这一步不能省。

### 在 Memorise 模式外更方便编辑

Gizmo 的[卡片管理指南](https://help.gizmo.ai/en/articles/13761411-how-do-i-edit-or-manage-my-cards)称，你可以编辑正反面文本、设置格式、在正面添加图片、修改选择题选项、移动卡片，以及删除卡片。

限制出现在 Memorise 模式中：你可以在那里删除卡片，但目前不能在测验过程中直接编辑。如果学习时发现答案有误，需要先离开当前模式再修正。

### Gizmo 可以打印卡片或保存为 PDF

打开牌组菜单，选择 **Print**，然后在浏览器打印对话框中选择 **Save as PDF**。Gizmo 的 [PDF 导出说明](https://help.gizmo.ai/en/articles/18228622-how-do-i-export-print-or-download-my-cards-as-a-pdf)也适用于 Gizmo 生成的牌组。

如需编辑卡片或保留复习记录，请保留 Gizmo 中的原始牌组。

### 官方文档不足以保证离线使用

我没有找到任何 Gizmo 官方帮助文章，明确承诺离线模式、优先写入本地，或恢复连接后的具体同步流程。本次评测查阅的产品页面以及在帮助中心完成的检索，都没有说明这一边界。

这并**不能**证明 Gizmo 无法离线使用。它只说明，本文核查到的官方证据还不足以保证 Gizmo 可以离线工作。如果离线学习对你很重要，请在飞行模式下测试你实际使用的应用和设备：关闭并重新打开应用、复习一张卡片、编辑一处内容、恢复网络，然后确认修改和复习记录都已保留。

这个区别很重要，因为“已加载的界面暂时还能操作”和“我的复习记录已安全保存，之后还能同步”是两个不同的主张。[离线闪卡应用指南](/blog/best-offline-flashcards-app/)用这套更严格的标准测试了多款产品。

## Gizmo 与 Nibomo 快速对比

| 比较维度 | Gizmo | Nibomo |
| --- | --- | --- |
| 主要起点 | 手动制卡，或用 Magic Import 导入多种学习材料 | 手动或用 AI 辅助创建重点明确的正反面卡片 |
| 卡片格式 | 问答题、多选题、填空题、配对题、排序题、判断题和图片题 | 正反面卡片 |
| 围绕牌组的教学 | AI Tutor 课程、笔记和基于源材料的提问 | AI 辅助制卡；当前产品页面没有说明 Tutor 课程模式 |
| 复习方式 | Memorise、间隔重复和多种题目形式 | FSRS 间隔重复 |
| 激励机制 | XP、Levels、Leagues、Streaks、Hearts、Hints 和 Coins | 当前产品页面没有说明类似的游戏机制 |
| 离线证据 | 在查阅过的文档中，没有找到官方离线保证 | 移动端离线学习和自动同步都有文档说明 |
| 数据迁出 | 可打印牌组或保存为 PDF | 可移植导出包含卡片、标签和相关媒体 |
| 部署控制 | 在查阅过的官方页面中，没有自托管相关说明 | 开源且支持自托管 |

Nibomo 能成为实用的 Gizmo 替代方案，但只适合这张表所体现的较窄需求。它当前的[功能页面](/features/)说明了 FSRS、AI 辅助制卡、移动端离线学习和同步、可移植导出，以及自托管。页面没有说明它具备与 Gizmo 的七种卡片类型、Magic Import、Tutor 课程或游戏机制相对应的功能。

## 什么时候 Nibomo 更合适

如果你真正想保留的是一张经过核对的正反面卡片，可以选择 Nibomo。你既可以手动创建，也可以让 AI 帮忙编写和改进，再决定哪些内容值得保存。复习调度采用 FSRS；[FSRS 与 SM-2 对比](/blog/fsrs-vs-sm-2/)更详细地解释了这套调度模型。

Nibomo 对离线使用和数据迁出的说明更明确。其文档说明移动端支持离线学习和自动同步；[入门指南](/docs/getting-started/)则指出，iOS 客户端采用本地 SQLite 和离线优先同步。可移植导出包含卡片、标签和相关媒体，也可用于在托管版和自托管安装之间迁移。

取舍在于功能范围。Nibomo 当前的页面没有说明它提供 Gizmo 的导入菜单、七种卡片类型、Tutor 引导课程或奖励系统。如果你正是为这些功能而来，Gizmo 可能更合适。

## 能从 Gizmo 迁移到其他应用吗？

从 Gizmo 保存的 PDF 可以用来制作新卡片。在 Nibomo 网页版中进入 **资料库 > 导入 > 从 Gizmo 导入**，选择 PDF 文件，然后点击 **开始导入**。对照 PDF 检查保存的卡片数量和每张卡片正反两面的内容。参阅 [Gizmo PDF 导出与导入指南（英文）](/blog/gizmo-export-pdf/)。

如果题目依赖 Gizmo 的交互形式，可以挑选值得保留的题目手动重建。

1. 把原始讲座、笔记、幻灯片或其他源材料放在手边。
2. 只重新创建那些仍然准确且有用的卡片。
3. 改写含糊的提示，不要照搬每一张自动生成的卡片。
4. Gizmo 的高亮、Tutor 上下文、复习调度历史、XP 和其他进度会留在原处，无法一并迁移。

逐一核对你想留下的卡片的题目与答案。

也可以两款应用一起用。Gizmo 能整理讲座或演示文稿并提供多种练习，Nibomo 则适合保存少量经过核对的正反面卡片，用 FSRS 复习。

## 哪种学习流程适合你？

如果你面对的是杂乱的源材料，希望应用先搭起第一版学习框架，可以选择 Gizmo。文档明确列出的优势包括多种输入来源、七种卡片类型、Tutor 引导式学习、多样化测验和成长机制。

如果你已经知道哪些内容值得做成长期保留的正反面卡片，而且相比题型多样性和奖励，更看重 FSRS、有文档说明的移动端离线学习、导出或自托管，可以选择 Nibomo。

真正有用的 Gizmo AI 评测，不该把问题说成“使用 AI”还是“不使用 AI”。两款产品都使用 AI，区别在于 AI 处在工作流的哪一环。Gizmo 用 AI 把范围广泛的材料转化为更完整的学习环境；Nibomo 则把 AI 放进更精简的制卡流程，由你决定保存哪些内容、把哪些内容排入复习。

如果这种更精简的流程更适合你，可以了解 [Nibomo 功能](/features/)，或按照[入门指南](/docs/getting-started/)开始使用。
