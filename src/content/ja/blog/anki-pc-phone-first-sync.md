---
title: "Ankiをパソコンとスマホで同期する方法｜初回はどちらから？"
description: "AnkiをパソコンとiPhone・Androidで初めて同期する手順。AnkiWebにアップロードする端末の選び方と、カードや復習履歴が引き継がれたかを1枚で確かめる方法を紹介します。"
date: "2026-11-16"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/f3f9246d9ec8aa44b6e1fb0ee9ebafb7b1560caafb3a49b501328e49e63c4158.webp"
keywords:
  - "Anki パソコン スマホ 同期"
  - "Anki 初回同期"
  - "AnkiWeb 同期"
  - "Anki アップロード ダウンロード"
---

昨日までパソコンで復習していた英単語を、今日からスマホでも続けたい。**残したいカードと復習履歴がパソコンにあり、AnkiWebとスマホが空なら、パソコンから先に同期します。** AnkiWebにアップロードし、完了してからスマホで受け取ります。スマホだけで学習してきたなら、空のAnkiWebにスマホから送ります。[Ankiの初回同期の手順](https://docs.ankiweb.net/manual/syncing#setup)

![駅の壁時計を見ながら腕時計の時刻を合わせる人](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/f3f9246d9ec8aa44b6e1fb0ee9ebafb7b1560caafb3a49b501328e49e63c4158.webp)

## 最初に、カードと復習履歴がどこにあるか確認する

AnkiWebは、パソコンのAnki、iPhone・iPadのAnkiMobile、AndroidのAnkiDroidが同期に使うサービスです。どのアプリも、端末に保存したデータを同じAnkiWebアカウントと同期します。ブラウザでAnkiWebにログインして学習することもできます。以前使ったアカウントがあればそのまま使い、初めてなら **Sign Up** で登録します。[AnkiWeb](https://ankiweb.net/) · [アカウント登録手順](https://docs.ankiweb.net/ankimobile/syncing#creating-an-account)

初回に「アップロード」と「ダウンロード」の選択が出たら、その端末を基準に考えます。**アップロードは手元のデータでAnkiWebを上書きし、ダウンロードはAnkiWebのデータで手元の端末を上書きします。** 対象はコレクション全体で、カードに加えて復習履歴や次回の出題予定も含まれます。[一方向の同期と競合](https://docs.ankiweb.net/manual/syncing#conflicts)

| 残したいデータの場所 | 最初にすること |
| --- | --- |
| パソコンだけにあり、AnkiWebとスマホは空 | パソコンからアップロードし、スマホでダウンロードします。 |
| スマホだけにあり、AnkiWebとパソコンは空 | スマホからアップロードし、パソコンでダウンロードします。 |
| 必要なカードと履歴がAnkiWebにそろっている | 空の端末で同期し、AnkiWebからダウンロードします。 |
| 端末ごとに残したい変更がある、またはAnkiWebの中身が分からない | 選択画面をいったん閉じ、各端末のデータを別々に保存します。 |

たとえば、パソコンでカードを追加し、まだ一度も同期していないスマホで昨日の復習を済ませたなら、スマホにしかない履歴が残っています。両方の端末でバックアップを取り、以前のAnkiWebアカウントがあればブラウザでデッキを確認します。必要なデータがどこにそろっているか分かるまで、同期の選択は保留してください。[データが分かれている場合の公式手順](https://docs.ankiweb.net/manual/syncing#merging-conflicts)

### 上書きの前にバックアップを取る

パソコンでは **File → Export**（ファイル → エクスポート）から **Ankiコレクションパッケージ（.colpkg）** を選び、メディアを含めます。全デッキと復習履歴、画像や音声をまとめて保存できます。`anki-pc-2026-11-16.colpkg` のように、どの端末の控えか分かる名前にしておくと後で探しやすくなります。[Ankiのエクスポート手順](https://docs.ankiweb.net/manual/exporting#collection-colpkg)

スマホに残したいデータがある場合も、全デッキを書き出します。AnkiMobileではデッキ一覧の **Add/Export → Export to Share** を使います。AnkiDroidではデッキ一覧のメニューからコレクションをエクスポートし、スケジュールとメディアを含めます。[AnkiMobileのエクスポート手順](https://docs.ankiweb.net/ankimobile/collection-transfer#iphone/ipad-to-computer) · [AnkiDroidのエクスポート手順](https://docs.ankidroid.org/manual-ja.html#_コレクションパッケージのエクスポート)

## パソコンとスマホを順に同期する

送る端末と受け取る端末の両方で、**同じAnkiWebアカウント**にログインします。パソコンで複数のプロファイルを使っている場合は、同期したいデッキのあるプロファイルを開いてください。別々のプロファイルを同期するには、それぞれにAnkiWebアカウントが必要です。[パソコン版の同期設定](https://docs.ankiweb.net/manual/syncing#setup)

- **パソコンのAnki**では、メイン画面右上にある同期ボタンをクリックします。[パソコン版の同期手順](https://docs.ankiweb.net/manual/syncing#setup)
- **iPhone・iPadのAnkiMobile**では、デッキ一覧の下にある **Synchronize** をタップします。[AnkiMobileの同期手順](https://docs.ankiweb.net/ankimobile/syncing) · [デッキ一覧のボタン](https://docs.ankiweb.net/ankimobile/deck-list)
- **AndroidのAnkiDroid**では、デッキ一覧の上にある、2つの矢印が回る形の同期ボタンをタップします。[AnkiDroidの同期手順](https://docs.ankidroid.org/manual-ja.html#_クラウド経由の同期)

最初に送る端末で、選択画面が出たらアップロードを選びます。その同期が済んでから受け取る端末の同期ボタンを押し、聞かれたらダウンロードを選びます。空の端末では、選択画面が出ずに受信が始まることもあります。AnkiWebに必要なデータがすでにある場合は、空の端末で受け取るところから始めます。[AnkiDroidを新しく入れたときの同期](https://docs.ankidroid.org/manual-ja.html#_新規にインストールしたankidroidに既存のデッキを同期する)

画像や音声の転送は別に進むので、カードの文字が先に見えることがあります。添付付きのカードを使うなら、送る側と受け取る側でメディアの同期が終わってから、画像が表示されるか、音声が再生できるかを確かめてください。[Ankiのメディア同期FAQ](https://docs.ankiweb.net/faqs/media-files-may-take-time-to-sync) · [画像や音声が同期されないときの確認手順](/ja/blog/anki-media-sync-diagnosis/)

## 最近復習したカードを1枚、受け取った端末で開く

1. 同期の前に、元の端末で最近復習したカードを1枚選びます。たとえば、英単語デッキにある、表が「platform」、裏が「ホーム」のカードです。パソコン版のカードブラウザなら、カードを選んで **Cards → Info** を開くと、画面下部に復習履歴が出ます。最後に復習した日付と評価を控えます。[Ankiのカード情報](https://docs.ankiweb.net/manual/stats#card-info)
2. 同期が済んだら、受け取った端末のカードブラウザで `platform` を検索し、デッキ名と表裏の文を照合します。AnkiMobileではデッキ一覧の上にある虫眼鏡から、AnkiDroidではメニューの **カードブラウザ** から検索できます。[AnkiMobileのデッキ一覧](https://docs.ankiweb.net/ankimobile/deck-list) · [AnkiDroidのカードブラウザ](https://docs.ankidroid.org/manual-ja.html#browser)
3. 復習履歴を開ける場合は、同じ日付と評価の記録があるか見比べます。AnkiDroidではカードブラウザからカード情報を開けます。AnkiMobileでそのカードが学習画面に出ていれば、歯車から **Card Info** を開けます。すぐに出題されないカードなら、同期の前後に両端末で `platform rated:7` と検索すると、過去7日間にそのカードを復習した記録があるか確認できます。[AnkiDroidのCard Info](https://docs.ankidroid.org/changelog.html#_version_2_14_0_2020_11_18) · [AnkiMobileの学習ツール](https://docs.ankiweb.net/ankimobile/study-tools#actions) · [復習したカードの検索方法](https://docs.ankiweb.net/manual/searching#answered)

カードや履歴が見つからないときは、両方のアプリで使っているAnkiWebアカウント、パソコンで開いているプロファイル、送る側の同期が終わったかを確かめます。再びアップロードかダウンロードかを聞かれたら、どこに必要なデータがあるかを確認してから選びます。[Ankiの同期マニュアル](https://docs.ankiweb.net/manual/syncing#conflicts)

## スマホからパソコンにも変更が届くか試す

逆方向も確かめたければ、直しても困らないカードを1枚選びます。たとえばスマホで「platform」の裏を「駅のホーム」に直して保存します。**スマホを同期し、完了してからパソコンを同期**します。パソコンで裏面が「駅のホーム」に変わり、控えた復習履歴も残っていれば確認は完了です。最初にスマホからパソコンへデータを送った場合は、パソコンで編集してスマホで受け取ります。[初回以降の同期](https://docs.ankiweb.net/ankimobile/syncing#subsequent-syncs)

普段も、復習や編集を終えた端末から先に同期します。電車でオフラインのまま復習した日は、ネットにつながってからスマホを同期し、そのあとパソコンを同期すれば続きから学習できます。[オフラインでAnkiを使ったあとの同期](/ja/blog/does-anki-work-offline/)

*macOS上のAnki 26.09.4のバックエンドとローカルのテスト用同期サーバーで、デスクトップ形式のコレクション2つを同期しました。空のコレクションに「platform／ホーム」のカードと元のデッキ、復習1回分の記録が届きました。受け取った側で「駅のホーム」に直すと、通常の同期で元のコレクションにも反映され、復習履歴はそのままでした。AnkiWebとスマホアプリの操作は公式マニュアルを参照しました。本文の下書きに生成AIを使用しています。*
