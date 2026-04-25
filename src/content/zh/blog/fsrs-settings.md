---
title: "2026 年 FSRS 设置指南：desired retention、learning steps 和复习负担，不要过度调参"
description: "面向 2026 年闪卡学习的实用 FSRS 设置指南：desired retention、learning steps、maximum interval、新卡上限，以及什么时候应该停止调 scheduler。"
date: "2026-04-25"
keywords:
  - "FSRS 设置"
  - "Anki FSRS 设置"
  - "desired retention FSRS"
  - "FSRS learning steps"
  - "最佳 FSRS 设置"
  - "FSRS 复习量"
  - "间隔重复设置"
  - "FSRS 闪卡"
---

FSRS 最奇怪的错误，不是把 retention 设得稍微高一点或低一点。更奇怪的是，牌组里一半卡片还在问“解释第 4 章”这种问题，你却花三个晚上调 scheduler。

我理解为什么会这样。很多人一旦认定 FSRS 比 SM-2 更好，下一步搜索通常就是 **FSRS 设置** 或 **Anki FSRS 设置**。算法名字听起来很严肃，设置项看起来很数学，复习闪卡突然像是在配置生产数据库。

不必这么紧张。

![温暖书桌上的闪卡、小小的 retention 旋钮和安静的夜间学习场景](/blog/fsrs-settings.png)

## FSRS 设置是在决定工作量，不是在做性格测试

FSRS 里最重要的设置，不只是记忆设置。

它是取舍设置。

当你提高 desired retention 时，你是在告诉系统，希望卡片更早回来，这样忘得更少。这可能很好。但它也意味着更多复习。当你降低它时，你接受更多遗忘，换来更轻的队列。

这不是道德问题。这是运营问题。

如果每天的复习队列已经很重，只因为更高 retention 听起来更认真就继续提高，系统可能会变得更糟。相反，如果你正在准备高风险考试，而且牌组很干净，小幅提高可能有意义。

问题出在很多人没有看自己的真实一天，就开始寻找“最佳”FSRS 设置。

## 先理解 desired retention

Desired retention 是最应该先理解的设置。

简单说，它告诉 scheduler：当一张卡到期时，你希望自己有多大概率还能想起来。`0.90` 表示系统目标是在复习时达到大约 90% 的回忆率。

[Anki 手册](https://docs.ankiweb.net/deck-options.html#desired-retention) 很直接地说明了这个取舍：desired retention 越高，间隔越短，复习越多；当数值接近 1.0 时，工作量会快速上升。

陷阱就在这里。

从 90% 调到 95%，在设置框里看起来只是小变化。放到每天的复习里，可能像是 app 给你找了一份副业。

所以我会从无聊的方式开始：

- 如果复习量还能处理，就先用默认值
- 只有当队列明显过重，而且多忘一点可以接受时，才降低目标
- 只有当材料值得额外时间时，才提高它
- 小幅修改，然后观察结果

目标不是赢下设置页面。目标是继续复习。

## 90% 是合理默认值，不是法律

90% 这个默认目标是一个很好的中心点。

但它不是魔法数字。

如果只是休闲学语言，稍微低一点也许更好，因为习惯能保住。医学、法律、金融或认证考试材料，尤其在考试前，可能需要更高一点的确定性。如果牌组里有大量弱的 AI 生成卡片，提高 retention 往往只是让你更频繁地看到烂卡。

这有点难听，但有用。

如果卡片本身写得不好，FSRS 设置不会把它变成好学习对象。它只能决定这张坏卡什么时候回来。

在提高 retention 之前，我会先问一个更简单的问题：如果删除 15% 的卡，这个牌组会不会更好？

很多时候会。

## 不要复制别人的 FSRS 参数

Desired retention 是你自己选择的。

FSRS parameters 不是这样。

优化参数的意义，是让 scheduler 从你的复习历史中学习。因为别人发了一张漂亮截图就复制他的参数，会破坏这个意义。那个人的卡片、回忆习惯、牌组成熟度和按按钮方式都不是你的。

[FSRS optimal retention 文档](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) 有用，是因为它把 retention 解释成知识量和工作量之间的平衡，而不是从陌生人那里借来的数字。

实际做法很简单：

- 如果说不清原因，不要手动改 FSRS parameters
- 不要从论坛帖子复制参数
- 工具支持时，用自己的复习历史优化
- 把参数调整当成维护，不要当成娱乐

这里少做一点，反而更专业。

## learning steps 保持无聊就好

Learning steps 里很容易留下旧 SM-2 习惯。

很多人会加上 `1m 10m 1d 3d` 这种长链条，因为看起来很谨慎。用 FSRS 时，这可能会碍事。第一次学习阶段之后，长期时间安排应该交给 scheduler。如果 learning steps 跨了好几天，你就在推迟自己切到 FSRS 想要得到的那部分。

Anki 手册建议使用 FSRS 时，把 learning steps 和 relearning steps 保持在一天以内，并尽量减少步骤数量。

这是好建议。

对多数牌组来说，我宁愿让 learning steps 更短，把省下的时间用来改卡：

- 拆开过载的问题
- 缩短太长的答案
- 把识别题改成主动回忆题
- 删除那些只是因为 AI 礼貌生成出来的卡

只有卡片本身值得安排，scheduler 才能更好工作。

## 小心 maximum interval

Maximum interval 看起来很安全，因为它像一个保护上限。

它也会悄悄制造额外工作。

如果你把间隔上限卡得太紧，成熟卡片会不断回来，即使 FSRS 本来会把它们推得更远。这对短期考试窗口或真正关键的知识可能有用。作为一般焦虑设置，通常不划算。

非常短的 maximum interval 会把间隔重复变成重复检查。

这很贵。

我只会在有真实原因时降低它：

- 考试日期很近
- 材料会过期或变化
- 牌组用于关键工作知识
- 你测过工作量，而且承担得起

否则，让简单成熟的卡离开久一点，把时间留给真正需要你的卡。

## 责怪 FSRS 之前，先看新卡数量

多数复习量问题其实是输入问题。

我们会怪 scheduler，因为它每天早上拿着账单出现。但账单通常来自昨天的新卡、上周的导入，或那批 300 张 AI 卡片。它看起来高效的时间大概只有十二分钟。

如果复习太多，我会先检查这些，而不是马上改 FSRS：

- 每天新增多少卡
- 有多少生成卡从没编辑过
- 有多少卡一次测试多个事实
- 有多少旧卡应该暂停或删除

这篇文章和这个问题很搭：

- [How Many New Flashcards Per Day in 2026?](https://flashcards-open-source-app.com/blog/how-many-new-flashcards-per-day/)

FSRS 能更平静地安排一个好牌组。它不能让过大的牌组变小。

## 考试时我会改什么

考试牌组不同，因为日期是真实的。

如果考试很近，最好的 FSRS 设置不一定等于长期语言牌组的设置。你可能愿意在几周里接受更重的复习量，因为材料现在就重要。

但我仍然会避开英雄式设置。

考试前，我会先改流程，再改算法：

1. 比自己觉得舒服的时间更早停止加新卡
2. 除非牌组很干净，否则 desired retention 保持在正常范围附近
3. 用标签或筛选复习处理弱项
4. 只有日程真的承受得住时，才提高工作量
5. 保护最后一周，不要做巨大导入

这个场景更适合读这篇：

- [How to Study for an Exam With FSRS in 2026](https://flashcards-open-source-app.com/blog/how-to-study-for-an-exam-with-fsrs/)

简短版：考试可以证明更严格复习是合理的。不能证明混乱是合理的。

## Flashcards 如何适配这种设置

[Flashcards](https://flashcards-open-source-app.com/) 把 FSRS 当成产品承诺，而不是落地页上的徽章。

当前产品方向和认真复习需要的设置是匹配的：

- front/back 卡片，而不是模糊的笔记块
- AI 辅助起草，但默认你仍然会编辑
- 用 FSRS 支撑真实复习循环
- workspace 级设置，例如 desired retention、learning steps、relearning steps、maximum interval 和 fuzz
- 托管 Web app，加上给关心系统原理的人看的开源代码

最后一点对重度 FSRS 用户很重要。

如果你会搜索 **最佳 FSRS 设置**，你可能也会在意产品是否把 scheduler 藏在模糊营销词后面。我更愿意用一个把复习模型放进真实产品设计里的工具。

## 一个简单的 FSRS 设置清单

如果今天我要设置一个新牌组，我会把清单保持得很短：

| 设置 | 实用起点 | 什么时候重新看 |
|---|---|---|
| Desired retention | 从正常默认值附近开始 | 复习太重，或材料需要更高回忆确定性 |
| FSRS parameters | 用自己的历史优化 | 有足够复习历史，且工具支持 |
| Learning steps | 短且少 | 当天学习感觉太赶或太重复 |
| Relearning steps | 保持简单 | 失败的成熟卡以不合适的节奏回来 |
| Maximum interval | 没有理由就保持宽松 | 考试窗口、关键知识或测出的 retention 缺口 |
| New cards/day | 设得比野心低一点 | 每日复习开始挤占真实生活 |

不华丽。

但有用。

## 最好的 FSRS 设置，是你能继续复习的设置

人们搜索 **FSRS 设置**，是因为他们想让算法更精确。

这很合理。实现得好、牌组不乱时，FSRS 通常比旧 scheduler 更好。但真正的收益不是来自无休止调参。它来自几个冷静选择，然后让 scheduler 工作，同时你继续改进卡片。

把 desired retention 当成工作量杠杆。

让 learning steps 保持简短。

不要复制参数。

先控制新卡，再责怪 scheduler。

如果一切仍然很重，答案也许不是另一个设置。也许是更小、更干净的牌组。

## 试试不把学习变成设置维护的 FSRS

如果你想试试这个流程：

- [打开 Flashcards](https://flashcards-open-source-app.com/)
- [打开 app](https://app.flashcards-open-source-app.com/)
- [阅读功能页面](https://flashcards-open-source-app.com/features/)
- [比较 FSRS 和 SM-2](https://flashcards-open-source-app.com/blog/fsrs-vs-sm-2/)
- [在 GitHub 查看源码](https://github.com/kirill-markin/flashcards-open-source-app)
