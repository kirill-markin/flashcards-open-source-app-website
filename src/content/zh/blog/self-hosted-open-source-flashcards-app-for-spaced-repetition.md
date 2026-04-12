---
title: "用于间隔重复的自托管开源 Flashcards App"
description: "想找一款可以自托管的开源 flashcards app？用快速复习队列、无密码认证，以及对学习数据的完整掌控来运行你的间隔重复系统。"
date: "2026-03-08"
keywords:
  - "开源 flashcards app"
  - "自托管 flashcards app"
  - "间隔重复应用"
  - "anki 替代品"
  - "quizlet 替代品"
  - "ai flashcards"
---

把 Anki 和 Quizlet 并排打开，大概三十秒内你就能看出它们之间的取舍。

一个像是从 2012 年就没真正离开过的老桌面软件。另一个则像是一款碰巧支持 flashcards 的 polished 订阅制产品。

我在做 [Flashcards](https://flashcards-open-source-app.com/) 的时候，一直反复撞上这个分裂。间隔重复这个想法本身仍然很好。真正卡住的是围绕它的产品。

如果软件现在依旧很难做，我会更能接受这一点。但事实并不是这样。

现在小团队一周就能做出像样产品。我们能快速上线，把 AI 接进真实工作流，从第一天起就暴露干净 API。Flashcards 软件根本不该继续卡在“笨重旧 UX”和“封闭平台”之间。

[Flashcards](https://flashcards-open-source-app.com/) 想填的就是这道缝：一款可以自托管的开源 flashcards app，带间隔重复、现代 web 栈、离线优先客户端支持，以及真正被纳入产品方向里的 AI，而不是事后再粘上去的 AI。

## Anki 依旧有效，但它确实显得老

我并不觉得 Anki 的问题在于算法差。核心想法已经被反复证明。人们这么多年一直用它学语言、医学、考试，以及各种重记忆场景。

问题在于，产品体验本身还是显得老。

当然，你完全可以强迫自己继续忍受。很多人也确实这么做。但在 2026 年，“习惯了就好了”并不能算一句很强的夸奖。它给人的感觉，更像是一种你勉强容忍的工具，而不是一款你每天都乐意打开的工具。

这一点比很多人承认的重要得多。Flashcards 只有在你明天、后天、以及一百天之后仍然愿意回来时才有效。摩擦是会复利的。

## Quizlet 更顺滑，但代价跑到了另一边

Quizlet 解决了界面问题。它看起来更干净，也更像一款现代消费者产品。对很多人来说，光这一点就足以让它比 Anki 更有吸引力。

但随后你会撞上另一堵墙。

对于 flashcards 这样基础的东西，它的价格很难让人爱起来。产品是封闭的。你的学习系统活在别人的平台里面。如果他们改价格、改产品优先级、改访问规则，你只能适应。不是他们适应你。

对某些产品类别，这当然没问题。

但我不太相信对个人知识系统来说，这也没问题。

## 你的卡不应该被困在别人的产品里

Flashcards 并不是一次性内容。时间长了，它们会变成一份记录：你在学什么、你总忘什么、你的思路如何变化。

这是很有价值的数据。

我不太喜欢把这类东西建在一个黑箱里。

有了自托管 flashcards app，默认关系就会变化。你可以检查代码。可以自己跑整套栈。也可以先用托管版，以后再迁走。你不用请求别人批准，才能继续按自己想要的方式使用自己的学习系统。

而这在今天会更重要，因为 AI 让 lock-in 变得更痛。一旦数据模型是开放的，产品又暴露了真实操作，AI 才能真正和你的卡一起工作。在封闭产品里，AI 层通常也会很浅，因为产品本身就只暴露了很浅的一层。

## 现在很多 AI flashcards 功能依旧很弱

眼下，很多 “AI flashcards” 产品都只会做一个小把戏。你贴一段文字，它们生成几张卡，然后魔法就结束了。

那并不是有意思的部分。

真正有意思的，是让 AI 在真实产品内部工作。

在 [Flashcards](https://flashcards-open-source-app.com/) 里，当前 web app 已经把 AI chat 直接绑到了真实 workspace 上。更大的整体架构也已经暴露出独立的 external agent surface 给终端工具使用，同时 iOS 客户端则保留自己的离线优先同步流程。

这比“从这段文字生成 20 张卡，然后就没了”要强得多。

这意味着 AI 可以真正拿走那些无聊工作，而不会沦为玩具：

- 在创建重复卡之前，先检查某个概念是不是已经存在
- 展示现在真正到期的内容，而不是凭空生成脱节材料
- 清理弱卡的措辞
- 长期维护 deck，而不是只在创建第一天生成一次

这才是这里 “AI-first” 真正该有的意思。不是给封闭 app 硬塞一个 chatbot，而是让产品里的真实对象和真实操作可以被 AI 以受控方式调用。

## 就算还没到 AI，那产品本身也应该先现代起来

即使完全不谈 AI，我也希望基础产品本身是理智的。

这意味着：清晰的 review queue、从 web 客户端创建卡片、由后端处理间隔重复、无密码认证而不是又一座密码坟场，以及一条对那些在意自有栈的人来说已经写明文档的自托管路径。

项目现在已经有了这个基础：

- 一个你现在就能用的 hosted web app
- 仓库里带有本地 SQLite 和同步能力的 iOS app
- 围绕 due cards 和 FSRS 构建的 review flow
- GitHub 上的开源代码
- 已文档化的 external agent API surface
- 无密码认证
- 一份 [自托管指南](https://flashcards-open-source-app.com/docs/self-hosting/)
- 一份 [架构文档](https://flashcards-open-source-app.com/docs/architecture/)

它当然还早期，我也没打算假装不是这样。但它已经不再只是一个浏览器里的原型：仓库里已经包含了 hosted web app、iOS client、auth service、backend API，以及当前的 sync path。比起一个 polished 但封死的产品，我宁愿用一个还早、却足够诚实的系统。

## 这正是我们现在应该构建的那类产品

真正奇怪的不是一个新的 Anki alternative 出现了。

真正奇怪的是，这样的产品为什么还不够多。

我们现在做产品的速度已经前所未有地快。我们可以保持小团队。可以直接开源。可以把 AI 接到真实产品动作上，而不是只做 demo 魔法。也可以给用户提供托管版，而不用强迫他们永远依赖它。

Flashcards 恰恰特别适合这个世界。这个领域本来就简单。价值非常明确。数据是个人的。当 AI 能处理真实卡片和真实复习状态时，整个工作流会自然变好。这本来就应该是最容易现代化的一类软件之一。

所以这就是 [Flashcards](https://flashcards-open-source-app.com/) 背后的赌注：开源，如果你想要就能自托管，以间隔重复为核心，并把 AI 当成真实产品模型的一部分来整合。

不是因为 “AI-first” 在 landing page 上听起来好听。

而是因为这个类别终于配得上一个更好的产品了。

## 试试看，或者直接自托管

如果你想要一款带间隔重复、可以自托管、并且为真实 AI 工作流留出空间的开源 flashcards app，可以从这里开始：

- [打开托管版应用](https://app.flashcards-open-source-app.com/)
- [阅读入门指南](https://flashcards-open-source-app.com/docs/getting-started/)
- [在 GitHub 上查看源码](https://github.com/kirill-markin/flashcards-open-source-app)

Flashcards 应该像现代软件。

而不是那种换了更漂亮 landing page 的老学习软件。

也不是带了个 flashcards 功能的封闭订阅产品。

开源、数据归你，以及能真正作用于产品本体的 AI，是更好的方向。我觉得这个类别已经等这件事很多年了。
