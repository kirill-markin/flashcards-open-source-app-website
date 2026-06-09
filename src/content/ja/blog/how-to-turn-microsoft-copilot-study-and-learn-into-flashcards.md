---
title: "2026年版 Microsoft Copilot Study and Learn をフラッシュカード化する方法: コーチ役はそのまま、復習は FSRS に任せる"
description: "Microsoft Copilot Study and Learn を Word、PDF、PowerPoint、URL と一緒に使い、弱点だけを Flashcards Open Source App に移して FSRS で間隔反復する実践的な学習フローです。"
date: "2026-06-09"
image: "/blog/how-to-turn-microsoft-copilot-study-and-learn-into-flashcards.png"
keywords:
  - "Microsoft Copilot Study and Learn フラッシュカード"
  - "Microsoft Copilot Study and Learn をフラッシュカード化する方法"
  - "Copilot Study and Learn フラッシュカード化"
  - "Microsoft Copilot 学習ワークフロー"
  - "Study and Learn 間隔反復"
  - "Copilot フラッシュカード FSRS"
  - "Microsoft 365 Copilot 学習アプリ"
  - "AIチューター フラッシュカード"
---

昨日、Microsoft 365 Copilot を開いて、PowerPoint を1本と PDF を1本入れてみました。すると Study and Learn が、かなり整った学習セッションに変えてくれました。最初に理解度を確かめ、いきなり答えを出しすぎず、ちゃんと考えさせながら進めてくれる。ここは良い設計です。ただ、よくある問題は残ります。2日後には、途中で迷ったところから先に薄れていきました。

ここが **Microsoft Copilot Study and Learn フラッシュカード** を考える理由です。誘導つきの学習セッションは理解には役立ちます。でも、チャットが賢かったからといって、そのまま長期記憶の仕組みにはなりません。

私が信頼している流れはもっと絞られています。Study and Learn で自分の教材を一緒に進め、間違えた点や反応が鈍かった点だけを残し、それだけを Flashcards Open Source App に移して FSRS で復習します。

![Word、PowerPoint、PDF と FSRS 復習用フラッシュカードを組み合わせた Microsoft Copilot Study and Learn の学習フロー](/blog/how-to-turn-microsoft-copilot-study-and-learn-into-flashcards.png)

## Microsoft は 2026 年にこれを本格的な学習フローにした

**2026年6月9日** 時点で、Microsoft の公式サポートは [Study and Learn Agent](https://support.microsoft.com/en-us/education/copilot/study-learn-agent) を、Microsoft 365 Copilot 内で使える学習向けエージェントとして案内しています。そこでは、段階的なチャットに加えて、フラッシュカード、クイズ、マッチング、穴埋めといった対話型アクティビティも明示されています。

同時に、これは汎用的な Copilot チャットよりかなり用途が絞られた製品でもあります。Microsoft の概要によれば、Study and Learn は Microsoft 365 Education ライセンスがあり、Copilot Chat が有効な 13 歳以上の教育ユーザー向けです。利用場所も、Web と Windows デスクトップの Microsoft 365 Copilot アプリに限られます。

ここが大事です。扱う元資料は、多くの学生にとってかなり身近です。

- Word 文書
- PowerPoint プレゼンテーション
- PDF ファイル
- URL と Web ページ
- Copilot Pages

Microsoft の [getting started guide](https://support.microsoft.com/en-us/education/copilot/getting-started-study-learn-agent) でも、Microsoft 365 Copilot を Web または Windows デスクトップで開き、教材をアップロードし、その内容から学習アクティビティを作らせる流れが案内されています。

つまり、これはもう「第4章を AI に説明してもらう」程度の曖昧な使い方ではありません。Word、PDF、Copilot Pages、授業スライド、配布資料、読み物を前提にした、Microsoft 365 らしい学習フローです。

## Study and Learn の強みは、書き出しよりコーチングにある

Microsoft の [usage guide](https://support.microsoft.com/en-us/education/copilot/using-study-learn-agent) を読むと、この製品が何を目指しているかはかなりはっきりしています。エージェントは、まず今の理解を確かめ、話題を段階に分け、答えさせたうえで、すぐに答えを出しすぎないようヒントを返してきます。軸にある原則は単純です。考えるのは学習者の側です。

だからこそ、私は Copilot をこの流れに残したいです。

勉強ツールが要約しかしないと、あまり覚えていなくても進んだ気分になれます。Study and Learn がそれより実用的なのは、次のことができるからです。

- 今どこまで分かっているかを聞ける
- 次のステップを自分で説明できるか確かめられる
- スライド、PDF、リンク先ページをそのまま使い続けられる
- 同じ元資料からクイズや練習を作れる
- セッション中に根拠にしているファイルを示せる
- 想起がまだ弱い箇所をあぶり出せる

最後の点が受け渡しの場所です。

価値があるのは「Copilot がコンテンツを作ったこと」ではありません。「Copilot が、まだ崩れる場所を見せてくれたこと」です。

## Copilot は、自分の教材の中にある弱点探しに使う

ここでは Microsoft であること自体が効いてきます。

Study and Learn がいちばん自然にはまるのは、もともとの勉強が Microsoft 系のファイルに寄っているときです。たとえば次のようなものです。

- PowerPoint の講義スライド
- PDF の配布資料や読書課題
- Word の課題指示書
- 授業ポータルから開く参考リンク
- Copilot Pages にまとめたノート

出発点がスライドや PDF 中心なら、隣接する記事の [2026年版 PowerPointをフラッシュカード化する方法](/ja/blog/how-to-turn-powerpoint-into-flashcards/) と [2026年版 PDFをフラッシュカード化する方法](/ja/blog/how-to-turn-a-pdf-into-flashcards/) がそのままつながります。

これは、適当な Web 要約を寄せ集めてデッキを作る流れとはかなり違います。

私なら、Study and Learn はこう使います。

1. 小さめの元資料セットを1つアップロードする
2. Copilot に段階的に教えさせる
3. 説明を求める前に、まず自分で答える
4. 間違えた点、反応が鈍かった点、混同した点だけ短く残す

実際に使うプロンプトも、かなり素朴です。

> この PowerPoint と PDF で Study and Learn を進めてください。質問は1回に1つずつ出してください。答えを早く出しすぎないでください。私が間違えた点、反応が鈍かった点、2つの考えを混同した点は弱点として記録して、最後にその弱点だけ一覧にしてください。

カード候補は、たいてい整った振り返りの中にはありません。「あれ、5分前は分かっていたはずなのに」と思った瞬間の中にあります。

この考え方をもう少し広く見たいなら、[2026年版 AIでアクティブリコールする方法](/ja/blog/how-to-use-ai-for-active-recall/) がそのまま続きになります。

## Study and Learn のアクティビティを全部、長期カードにしない

ここで AI 学習フローは、静かに事務作業へ変わりがちです。

Microsoft はセッション内で、すでにフラッシュカードやクイズを作れます。それ自体は練習や下書きとして便利です。問題は、その全部を長期復習へ昇格させたときです。

Microsoft の usage guide でも、間違えた項目のやり直しや補習がセッション内で強調されています。だからこそ、絞り込みのルールはもっと明確です。そこは Study and Learn 自身の練習ループに任せればいい。下書きとして出たアクティビティを、全部そのまま長期デッキに押し込む必要はありません。

たいていの誘導セッションには、カードにする価値がない材料がかなり含まれています。

- 導入の説明
- 1回きりで十分だったヒント
- その場では役立ったが、あとでは重要でない例
- 同じ考えを言い換えただけの繰り返し
- 練習としては良くても、後日の復習プロンプトとしては弱いアクティビティ

全部保存すると、デッキそのものがまた別の管理対象になります。AI 学習ツールを探す人の多くが、まさに避けたいのはそこです。

すでに復習量が膨らみ始めているなら、次に読むべきは [2026年版 AIフラッシュカードの作りすぎを防ぐ方法](/ja/blog/how-to-avoid-ai-flashcard-overload/) です。

## Copilot セッションのあとに、私なら実際こう使う

私が1週間の中で繰り返すなら、この形です。

1. 狭いテーマ1つで Study and Learn を開く。
2. 関係する Word、PowerPoint、PDF、URL、Copilot Pages を入れる。
3. Copilot に、説明しすぎる前に段階的に質問させる。
4. 間違えた点、答えが遅かった点、混同した点だけ小さなメモに残す。
5. 最後に、その弱点だけの短い要約と、各弱点がどのファイルや箇所から来たかを Copilot に出させる。
6. その弱点だけを Flashcards Open Source App に移す。
7. 各弱点を、きれいな表裏カード1枚にする。
8. 仕上がったカードを FSRS で復習する。

これで全部です。

巨大な会話書き出しは不要です。すべてのアクティビティを保存しようとする頑張りもいりません。形だけの完全性もいりません。

同じ受け渡しを他の家庭教師系ツールで見たいなら、いちばん近いのは [2026年版 ChatGPT Study Mode をフラッシュカードに変える方法](/ja/blog/how-to-turn-chatgpt-study-mode-into-flashcards/) と [2026年版 Gemini Guided Learning をフラッシュカードに変える方法](/ja/blog/gemini-guided-learning-to-flashcards/) です。

## 良い Study and Learn カードは、会話全体ではなくミスを残す

良いカードは、会話の全文ではなく、ミスだけを残します。

たとえば Copilot が財務の講義スライドを使っていて、債券価格と利回りの関係を何度も取り違えたとします。

悪いカードは、たとえばこうです。

- 表: 債券価格、割引率、現在価値、投資家行動の関係を説明せよ。
- 裏: 来週には読みたくなくなる長い段落。

より良いカードは、こうです。

- 表: 要求利回りが上がると、通常は債券価格はどうなる。
  裏: 下がる。
- 表: 割引率が高いと現在価値が下がるのはなぜか。
  裏: 将来キャッシュフローが、より強く割り引かれるから。

私が **Copilot Study and Learn からフラッシュカードへ** の流れに求めているのは、こういう形です。

- 1枚につき1つの弱点
- 短い表面
- 直接の裏面
- 単独で意味が通るだけの文脈
- 家庭教師セッション全体を覚えていなくても使えること

受け渡し後のカード作成ルールをもっと厳しくしたいなら、[2026年版 より良いフラッシュカードの作り方](/ja/blog/how-to-make-better-flashcards/) がこの整理をさらに掘っています。

## Copilot のあとで長期復習を持つのが Flashcards

[Flashcards Open Source App](/ja/features/) は、Study and Learn を置き換えるためのものではありません。

Copilot にはコーチ役を続けてもらう。Flashcards には長期復習の役を持ってもらう。

この分担だから、流れが素直です。

- Copilot が、自分の教材を使った誘導セッションを担当する
- Flashcards が、シンプルな表裏カード作成を担当する
- AI チャットが、粗いカード候補を短い復習プロンプトに整える
- デッキやタグが、授業、試験、出典ごとに弱点を整理する
- FSRS が、復習する価値のあるカードだけのタイミングを管理する

長期記憶の層を Microsoft 365 の1回の学習セッションの中に閉じ込めたままにしない。そのほうが自然です。

まず製品の面を見たいなら [機能ページ](/ja/features/) からで十分です。ホスト版とセルフホスト版の違いが気になるなら [料金ページ](/ja/pricing/) が実務的です。セットアップの流れを見たいなら [はじめに](/ja/docs/getting-started/) が最短です。

## 本当に役立つカードを生かし続けるのは FSRS

ここは相変わらず、静かな主役です。

人は新しい生成部分に目を引かれます。でも、最初の良いセッションのあとにもっと効いてくるのは復習システムです。

FSRS がここで合うのは、弱点がもともと不均一だからです。PowerPoint の概念は一度で定着するのに、PDF の別の概念は3日おきに崩れる。チャットの中では簡単そうだった別の点は、ヒントなしだとあとで崩れる。

まさに、こういうばらつきを扱うのが間隔反復です。

スケジューラの比較自体を見たいなら、[2026年のFSRSとSM-2を比較](/ja/blog/fsrs-vs-sm-2/) が適しています。この記事はそこまで広げません。Copilot が弱点を見つけた。FSRS が、その弱点をあとで取り戻す価値のあるものにする。それで十分です。

## コーチ役は残し、記憶の仕事だけ移す

2026年の Microsoft Copilot Study and Learn は、この見方がいちばんしっくりきます。

Word、スライド、PDF、URL、ノートをもとに動くコーチとして使う。質問させる。穴を見せてもらう。役立つならクイズや下書きアクティビティも作らせる。

そのうえで、ちゃんと選別します。

本当に重要な弱点だけを Flashcards Open Source App に移し、シンプルなカードへ整え、Copilot が本質的には作られていない部分、つまりセッションのあとも覚えておく仕事を FSRS に任せる。

これが、実際的な **Microsoft Copilot Study and Learn をフラッシュカード化する方法** です。Microsoft の家庭教師は残す。カードセットは小さく保つ。記憶の層は、復習のために作られた場所に置く。
