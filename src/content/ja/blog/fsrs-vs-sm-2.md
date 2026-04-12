---
title: "2026年の FSRS vs SM-2: どの spaced repetition algorithm がより多く覚えられるか"
description: "2026年の flashcards 向け FSRS と SM-2 の実用比較です。FSRS が古い SM-2 系 scheduling より、なぜより良い review timing、より低い workload、より強い spaced repetition 体験を生みやすいのかを解説します。"
date: "2026-03-12"
keywords:
  - "fsrs vs sm2"
  - "spaced repetition algorithm"
  - "anki fsrs"
  - "best flashcard algorithm"
  - "how fsrs works"
  - "open source flashcards app"
---

Flashcards app は、最初の 1 週間くらいは賢く見えます。やがて easy cards が必要以上に戻ってきて、hard cards は変な間隔で消え、全体が学習というより管理作業のように感じ始めます。

たいてい、それは design の問題ではありません。

scheduler の問題です。

長年、このカテゴリの default answer は何らかの **SM-2** でした。単純で、よく知られていて、spaced repetition が機能することを証明するには十分だったからです。

私は SM-2 が悪いとは思っていません。

古いと思っています。

だから 2026 年にもっと有用な問いは、「spaced repetition は効くのか」ではありません。そんなことは明らかです。問うべきは、あなたの flashcards app が、今でも default に値する scheduler を使っているかどうかです。

## SM-2 がここまで長く使われてきた理由

SM-2 が地位を得たのには理由があります。

理解するのに十分シンプルで、実装するのに十分シンプルで、十分に有名だったので、多くの flashcards product は深く考え直さなくてもそれを継承できました。長い間、それで足りました。

公平に言えば、ランダムな復習タイミングや固定間隔よりは今でもずっと良いです。

問題は、「ランダムよりマシ」は serious な learning tool の基準として高くないことです。

card を戻す正確な timing が重要だという前提で作られた product なら、scheduler は backend detail ではありません。product そのものです。

## FSRS が変えること

FSRS は、同じ基本目標をより良い memory model で扱います。

粗い ease-style の approach に頼る代わりに、次のようなものを追跡します。

- stability
- difficulty
- review history
- target retention

これにより、scheduler は card に何が起きているかについて、より多くの context を持てます。

実際の感覚としては、たいてい次のようになります。

- よく知っている cards が時間を無駄にしなくなる
- あまり知らない cards がより妥当に調整される
- review queue が恣意的に感じにくくなる

数式を 1 つも読みたくない学習者でも気づくのは、この部分です。

## 実際に感じる違い

多くの人は、方程式を見比べて **FSRS vs SM-2** を比較するわけではありません。

2 週間ほど使ったあとに体感します。

弱い scheduler だと、easy cards が何度も出てきて邪魔に感じられます。hard cards は awkward なタイミングで戻る。queue 全体が常に少しずれているように感じ、その friction が daily review を不快にします。

この friction は、見た目以上に重要です。

Flashcards は habit product です。review flow が本来より重く感じられると、効率を失うだけではありません。明日 app を開きたい気持ち自体が弱くなります。

だからこれは、study nerds 向けの niche な implementation detail ではありません。product に明日も戻ってきたくなるかを左右します。

## FSRS が強い部分

多くの serious learners にとって、FSRS は実際に重要な点でより優れています。

- review workload を抑えやすい
- 具体的な retention target を狙える
- recall difficulty に対してより現実的に調整できる
- すでに知っている cards の余計な repetition を避けられる

現代の **Anki FSRS** への関心が高い理由も、ここにあります。略称が新しいからではありません。queue が十分大きくなり、timing の悪さが目立つようになると、scheduling の feel が明らかに良くなるからです。

## それでも SM-2 が残り続ける 1 つの理由

SM-2 は説明が簡単です。

小さな prototype を作るなら、spaced repetition の概念を教えるなら、あるいは非常に軽量な flashcards toy を作るなら、単純なロジックには本物の魅力があります。

単純な system の中で残しておく理由としては妥当です。

でも、より良い scheduler が使える serious な flashcards app で、長期的な default として出荷し続ける理由としては、あまり強くありません。

## acronym より退屈な implementation details のほうが重要

ここは比較記事がよく飛ばす部分です。

「FSRS を使っています」と言うだけで flashcards product が良くなるわけではありません。

重要なのは、implementation が本当に丁寧かどうかです。

[Flashcards](https://flashcards-open-source-app.com/) では、FSRS は marketing label ではなく product contract として扱われています。scheduler behavior は backend と iOS app で mirror されています。web app は scheduler data contract を mirror しますが、3 本目の独立した FSRS implementation は持ちません。system は各 card に hidden memory state を保存し、明示的な learning / relearning steps を持ち、desired retention、learning steps、relearning steps、maximum interval、fuzz などの workspace-level settings をサポートし、scheduling 中には `reviewedAtClient` を通じて実際の client review timestamp を使います。

backend detail に聞こえるかもしれませんが、2 つの clients が同じ card を同じように schedule するか、それとも静かにずれていくかを決めるのは、まさにこういう detail です。

そして scheduling がずれ始めると、user は理由を説明できなくてもすぐに違和感を覚えます。

## 学習者が気にすべきこと

Flashcards tool を選ぶなら、feature checklist よりも、私は次の退屈な問いを重視します。

card はいつ戻ってくるのか。そして、その timing は何百、何千という reviews を積んだあとでも sensible に感じられるか。

そこでこそ、best flashcard algorithm が本当に重要になります。

理論ではなく。

workload において。

retention において。

queue が help になるのか punishment になるのかにおいて。

## では 2026 年により良い spaced repetition algorithm はどちらか

多くの現実的な study workflow では、**FSRS のほうがより良い spaced repetition algorithm** です。

SM-2 は、このカテゴリを形作る助けをした功績があります。でも modern app を作るなら、あるいは選ぶなら、今の default としてより弁護しやすいのは FSRS です。

scheduler に、より良い information、より良い control、そして実際の memory に review timing を合わせるより高い可能性を与えてくれるからです。

それこそが spaced repetition の本質です。

scheduling quality を checkbox ではなく core product decision として扱う **open source flashcards app** を求めるなら、[Flashcards](https://flashcards-open-source-app.com/) はその方向で作られています。
