---
title: "Ankiで復習カードが出てこないとき｜一時非表示・休止の解除"
description: "Ankiのカード管理にあるのに復習に出てこないカードを、手動の一時非表示、自動の一時非表示、休止に分けて確認。必要な1枚だけ戻し、今日の復習対象かどうかを確かめる手順です。"
date: "2026-11-17"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/57c109eea0a3a3e460beb97ea4395d6f50730d9e3b1640d7126e72d25580d287.webp"
keywords:
  - "Anki カードが出てこない"
  - "Anki 一時非表示 解除"
  - "Anki 休止 解除"
  - "Anki 復習カード 出てこない"
---

今日復習するつもりだった単語がAnkiで出てこない。カード管理で検索すると、その単語のカードは見つかります。まず、その1枚が今日の学習から除外されているか、休止中かを調べます。解除したら、今日の復習対象に入ったかも確かめましょう。

![舞台裏で衣装係が紺色の上着をラックに掛けようとしている。作業台には赤い衣装が置かれている](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/57c109eea0a3a3e460beb97ea4395d6f50730d9e3b1640d7126e72d25580d287.webp)

## カード管理で出てこない1枚の状態を調べる

デスクトップ版Ankiで**カード管理（Browse）**を開き、検索欄の左の切り替えを**カード**表示にします。表と裏を入れ替えたカードがある場合は、**問題**列で出題される面を見分けられます。カードを見つけたときの検索語の後ろに、半角スペースを空けて次の条件を一つずつ足します。[Anki公式マニュアルのカード表示（英語）](https://docs.ankiweb.net/manual/browsing#table-modes)

| 足す検索条件 | 探しているカードが見つかったら |
| --- | --- |
| `is:buried` | 今日の学習から除外されています。手動と自動の両方が対象です。 |
| `is:buried-manually` | 手動で今日の学習から除外されています。 |
| `is:buried-sibling` | 同じノートから作られた関連カードとして、自動で今日の学習から除外されています。 |
| `is:suspended` | 休止中です。復習日が来ても、休止を解除するまで出題されません。 |

たとえば「診断」デッキで一時非表示のカードを探すなら、`deck:"診断" is:buried` と入力します。手動か自動かを調べるには、末尾の `is:buried` を `is:buried-manually` や `is:buried-sibling` に置き換えます。同じ単語が複数行に出たら、探しているカードの行が結果に含まれるかを見ます。[Anki公式マニュアルの状態検索（英語）](https://docs.ankiweb.net/manual/searching#card-state)

## 戻したいカードの行だけ選んで解除する

- **今日の学習から除外されていた場合**は、`is:buried` の結果で対象の1行を選び、メニューバーの**カード → 今日の学習から除外/学習に戻す**を選びます。手動で除外したカードも、自動で除外されたカードも、同じ操作で戻せます。Ankiの学習日が切り替わると、除外は自動で解除されます。[Anki 26.09.4の除外と解除の処理](https://github.com/ankitects/anki/blob/26.09.4/qt/aqt/browser/browser.py#L1024-L1042)・[Anki公式マニュアルの関連カードと除外（英語）](https://docs.ankiweb.net/manual/studying#siblings-and-burying)
- **休止中だった場合**は、`is:suspended` の結果で対象の1行を選び、**カード → 休止/休止解除**を選びます。複数行を選ぶと、現在のカードの状態に応じて選択中の全カードに同じ操作がかかります。[Anki公式マニュアルのカードメニュー（英語）](https://docs.ankiweb.net/manual/browsing#cards)・[Anki 26.09.4の日本語メニュー表記](https://github.com/ankitects/anki-core-i18n/blob/49925703d0e1c2328cae2b7f7ade286ed147976d/core/ja/browsing.ftl#L117-L124)

デッキ概要の**今日の学習に戻す**はデッキ単位の操作です。対象を1枚に絞るには、カード管理でその行だけを選びます。[Anki 26.09.4のデッキ単位の解除処理](https://github.com/ankitects/anki/blob/26.09.4/qt/aqt/overview.py#L152-L175)

操作後に同じ検索をもう一度実行して、対象のカードが結果から消えたことを確認します。次に状態の条件を外してカードを探し、**期限 / 位置**列で復習日を見ます。列が見当たらなければ、列見出しを右クリックして表示できます。復習期限を迎えたカードを絞り込むには、`deck:"診断" is:due` のように `is:due` を付けて検索します。[Anki公式マニュアルの列の説明（英語）](https://docs.ankiweb.net/manual/browsing#columns)・[Anki公式マニュアルの状態検索（英語）](https://docs.ankiweb.net/manual/searching#card-state)

## 3枚を解除して、今日の復習対象に戻ったのは2枚

Anki 26.09.4のバックエンドで、通常デッキ「診断」に検証用の復習カードを3枚用意しました。それぞれ別の基本（Basic）ノートから作り、下の表のとおりに復習日を設定しました。「窓」は手動で今日の学習から除外し、「机」と「棚」は休止にしました。この時点では `deck:"診断" is:due` と `deck:"診断" is:buried-sibling` がどちらも0件でした。

| カード | 設定した復習日 | 解除前に一致した状態検索 | 解除後の `is:due` |
| --- | --- | --- | --- |
| 窓 | 今日 | `is:buried`、`is:buried-manually` | 出る |
| 机 | 今日 | `is:suspended` | 出る |
| 棚 | 3日後 | `is:suspended` | 出ない |

まず「窓」だけを学習に戻すと、`is:due` に「窓」が現れ、「机」と「棚」はまだ `is:suspended` に出ていました。続けて2枚の休止を解除すると、「机」が `is:due` に加わりました。「棚」も休止が解除され、3日後の復習日まで出題を待つ状態に戻りました。3枚とも、解除の前後で保存されていた復習日、復習間隔、復習回数は同じでした。

## 解除してもカードが出てこないとき

`is:buried` にも `is:suspended` にも出ない復習カードは、まず**期限 / 位置**列で復習日を確認します。`is:due` に出るのに学習画面で出題されない場合は、学習を始めたデッキにそのカードが含まれるか、1日の復習上限に達していないかを見ます。新規カードなら、新規カードの上限と収集順を確認します。[Anki公式マニュアルの1日の上限（英語）](https://docs.ankiweb.net/manual/deck-options#daily-limits)・[Ankiの新規カードの出題順](/ja/blog/anki-new-card-order/)

表と裏を入れ替えた片方だけが出てこない場合は、関連カードの設定も確認してください。別の検証では、Ankiが出題するカードを選ぶ段階で片方が外れ、もう片方に回答したあとに `is:buried-sibling` で見つかる例を確認しました。[Ankiで関連カードが出てこないときの検証（英語）](/blog/anki-bury-siblings/)

*本文の作成とカバー画像の生成にAIを使用しました。3枚の検証では、macOS（Appleシリコン）上のPythonからAnkiのバックエンドを使い、検証用コレクションで検索、解除、保存された値の比較を実行しました。画面上の手順は、公式マニュアルと公開版のソースコードで確認しました。[Anki 26.09.4のリリース](https://github.com/ankitects/anki/releases/tag/26.09.4)*
