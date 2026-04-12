---
title: "間隔反復のための self-hosted open source flashcards app"
description: "self-host できる open-source flashcards app を探していますか。高速な review queue、passwordless auth、学習データの完全な control を備えた spaced repetition を使えます。"
date: "2026-03-08"
keywords:
  - "open source flashcards app"
  - "self-hosted flashcards app"
  - "spaced repetition app"
  - "anki alternative"
  - "quizlet alternative"
  - "ai flashcards"
---

Anki と Quizlet を並べて開くと、tradeoff は 30 秒ほどで見えてきます。

片方は 2012 年から本当に抜け出していない old desktop software のように感じられる。もう片方は、たまたま flashcards をやっている polished な subscription product に感じられる。

[Flashcards](https://flashcards-open-source-app.com/) を作りながら、私は何度もその分裂に行き当たりました。spaced repetition という考え方自体は今でも優れています。そこを囲む products のほうが停滞している。

もし software を出荷するのが今でも難しいなら、まだ受け入れやすかったかもしれません。でも実際はそうではありません。

小さな team でも、今は 1 週間で本物の product を作れます。高速に ship できるし、AI を actual workflow に組み込めるし、day one から clean な APIs を公開できます。Flashcards software が、ぎこちない legacy UX と closed platforms の間に今も閉じ込められている必要はありません。

[Flashcards](https://flashcards-open-source-app.com/) が埋めようとしているのは、まさにその gap です。spaced repetition、modern な web stack、offline-first client support、そして後付けではなく product direction に組み込まれた AI を備えた、self-hosted open-source flashcards app です。

## Anki は今でも動く。でも古く感じる

Anki の問題は、algorithm が悪いことだとは思っていません。core idea は実証済みです。語学、医学、試験、そのほかあらゆる暗記量の多い学習で、何年も使われてきました。

問題は、product experience が今も古く感じられることです。

もちろん我慢して使い続けることはできます。実際そうしている人はたくさんいます。でも「慣れれば使える」は、2026 年の product に対する強い compliment ではありません。interface は、毎日開きたくなる tool というより、耐えながら使う tool に感じられます。

これは多くの人が認める以上に重要です。Flashcards は、明日も、その次の日も、100 日後も戻ってこなければ意味がありません。friction は積み重なります。

## Quizlet はより滑らか。でも tradeoff は逆方向へ振れる

Quizlet は interface の問題を解決しました。よりクリーンに見え、modern な consumer product に近い。多くの人にとって、それだけで Anki より魅力的です。

でも、そこで別の壁にぶつかります。

flashcards のような基本的なものに対して pricing は好感を持ちにくい。product は closed です。あなたの study system は他人の platform の中に住んでいる。pricing が変われば、product priorities が変われば、access rules が変われば、適応するのは user 側です。

カテゴリによっては、それでも構わないかもしれません。でも personal knowledge では、私はそうは思いません。

## 自分の cards は他人の product に閉じ込められるべきではない

Flashcards は使い捨て content ではありません。時間がたつと、自分が何を学んでいるか、何を何度も忘れるか、考え方がどう変化するかの記録になります。これは価値ある data です。

私はそれを black box の中に築きたくありません。

self-hosted flashcards app では、default が変わります。code を inspect できる。stack を自分で動かせる。最初は hosted version を使い、必要なら後で移ることもできる。自分の study system を自分の望む形で使い続けるために permission を求める必要がありません。

これは、AI によって lock-in がさらに痛くなった今は特に重要です。data model が open で、product が real operations を公開していれば、AI は本当に cards と一緒に働けます。closed product では、product 自体の公開度が浅いため、AI layer も浅いままになりがちです。

## 多くの AI flashcards feature は、今でもかなり弱い

今は多くの「AI flashcards」product が 1 つの trick しか持っていません。text を貼る。いくつか cards が生成される。magic はそこで終わり。

面白いのはそこではありません。

面白いのは、AI が real product の中で働けることです。

[Flashcards](https://flashcards-open-source-app.com/) の current web app には、すでに actual workspace に結び付いた AI chat があります。さらに broader architecture では、terminal tools 向けの separate external agent surface も公開されており、iOS client は独自の offline-first sync flow を保っています。

これは、「この paragraph から 20 枚生成して終わり」よりはるかに強い方向です。

AI が toy ではなく、退屈な部分を助ける存在になれるからです。

- duplicate card を作る前に、同じ concept がすでにあるか確認する
- disconnected content を作り出すのではなく、今 due なものを見せる
- 弱い card の wording を整える
- deck を一度生成して終わりではなく、時間をかけて保守するのを助ける

ここでの「AI-first」とは、そういう意味であるべきです。closed app に chatbot を bolted on することではありません。real objects と actions が AI に対して controlled に公開されている product であることです。

## AI が来る前の時点でも、product は modern であるべき

AI を抜きにしても、私は base product が sane であることを望みました。

つまり、clear な review queue、web client からの card creation、backend が担う spaced repetition、また 1 つ password を増やすのではなく passwordless auth、そして stack を own したい人のための文書化された self-hosted path です。

project にはすでにその foundation があります。

- 今すぐ使える hosted web app
- local SQLite と sync を備えた、repository 内の iOS app
- due cards と FSRS を軸にした review flow
- GitHub 上の open-source code
- 文書化された external agent API surface
- passwordless auth
- [セルフホスティングガイド](https://flashcards-open-source-app.com/docs/self-hosting/)
- [アーキテクチャ](https://flashcards-open-source-app.com/docs/architecture/)

まだ early ですし、そこをごまかすつもりはありません。それでも、product はすでに browser-only prototype 以上です。repository には hosted web app、iOS client、auth service、backend API、そして現在の sync path まで含まれています。私は polished だが boxed-in なものより、early でも honest なものを使いたいです。

## これは、まさに今作るべき種類の product

不思議なのは、新しい Anki alternative があることではありません。今でももっと数がないことのほうです。

私たちはかつてないほど速く products を作れます。小さく保てます。open source で ship できます。demo-only magic ではなく、actual product actions に AI を接続できます。hosted option を提供しつつ、permanent dependence を強制しなくて済みます。

Flashcards は、その世界に完璧に合うカテゴリです。domain はシンプル。value は明確。data は personal。AI が real cards と real review state に働けるほど workflow は良くなる。本来なら、最も modernize しやすいカテゴリの 1 つであるべきです。

だからこそ [Flashcards](https://flashcards-open-source-app.com/) の賭けはここにあります。open source、必要なら self-hosted、core に spaced repetition、そして real product model の一部として統合された AI。

landing page で「AI-first」と書くと聞こえがいいからではありません。このカテゴリが finally より良い product に値する tooling を手にしたからです。

## 試すか self-host する

spaced repetition を備え、self-hosted path があり、本当に AI workflows が育つ余地のある open source flashcards app を探しているなら、ここから始めてください。

- [hosted app を開く](https://app.flashcards-open-source-app.com/)
- [getting started guide を読む](https://flashcards-open-source-app.com/docs/getting-started/)
- [GitHub で source を見る](https://github.com/kirill-markin/flashcards-open-source-app)

Flashcards は、modern software のように感じられるべきです。よりきれいな landing page を付けた legacy study software でも、flashcards feature が付属した closed subscription でもありません。

open source、自分の data を own できること、そして real product に対して働く AI。その方向のほうが、ずっと良いと思います。このカテゴリは何年もそれを待っていたはずです。
