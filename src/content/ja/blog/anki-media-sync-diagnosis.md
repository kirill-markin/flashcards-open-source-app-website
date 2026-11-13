---
title: "Ankiで画像や音声が同期されないときの確認手順"
description: "Ankiのカードはスマホに届いたのに、画像や音声が出ない。JPGとMP3を添付した確認用カードを1枚作り、PC・AnkiWeb・スマホで見比べて、同期の遅れやファイルの欠落、再生の問題を切り分けます。"
date: "2026-11-13"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/a32450dc64b33e30875a9aad804f2132eca8fa6a96f1fed86c5777e95a3fe3a5.webp"
keywords:
  - "Anki 画像 同期されない"
  - "Anki 音声 同期されない"
  - "Anki メディア同期"
  - "AnkiDroid メディア同期"
  - "AnkiMobile メディア同期"
---

PCで作った単語カードはスマホにも出てきたのに、写真が表示されず、発音も聞こえない。Ankiはカードの文字と画像・音声のファイルを別々に同期します。文字が読めるようになってからも、ファイルの転送が続いていることがあります。[Ankiのメディア同期FAQ](https://docs.ankiweb.net/faqs/media-files-may-take-time-to-sync)

**小さなJPGと短いMP3を添付した確認用カードを1枚作り、元のカードと見比べてみましょう。** 確認用の画像や音声もスマホで使えないなら同期の進み具合を、元のカードだけで起きるならそのカードの添付や表示の設定を調べます。

![窯のそばで、青緑の釉薬が均一にかかった試験片と、素地が一部見えている試験片を見比べる陶芸家](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/a32450dc64b33e30875a9aad804f2132eca8fa6a96f1fed86c5777e95a3fe3a5.webp)

## PCで確認用カードを1枚作る

ファイルを整理したあとに必要な画像や音声まで消えた場合は、再同期の前に、ファイルが残っている端末でメディア込みのバックアップを作ってください。PCなら **ファイル → エクスポート** で **Ankiコレクションパッケージ（.colpkg）** を選び、メディアを含めます。自動バックアップに画像や音声は含まれません。[Ankiのバックアップ手順](https://docs.ankiweb.net/manual/backups#manual-colpkg-backups) · [フラッシュカードのバックアップ方法](/ja/blog/how-to-back-up-flashcards/)

1. 元のカードを作成・インポートしたPCで、ノートタイプ「基本（Basic）」を選びます。「メディア同期テスト」というデッキを作り、そこに確認用カードを1枚追加すると、あとで見つけやすくなります。表面の文字も「メディア同期テスト」で十分です。
2. 裏面の欄に、クリップのアイコンから手元のJPGとMP3を添付します。たとえば、カップの写真と「cup」と発音した短い録音です。ファイルそのものを添付すると、Ankiがメディアフォルダにコピーします。このテストでは画像のURLや、復習時の読み上げ（TTS）は使いません。[Ankiのメディアマニュアル](https://docs.ankiweb.net/manual/media)
3. PCで両方のカードを開き、画像と音声を別々に確かめます。確認用カードは裏面を表示してください。確認用の画像が出ない、または音声を再生できない場合は、PCでファイル自体を開けるか、裏面の欄に添付できているかを先に確認します。

## PCから送って、スマホで受け取る

まずPCで同期し、画像と音声の転送が終わるまで待ちます。デスクトップ版とAnkiMobileでは、同期ボタンの横に回転マークが出ている間にボタンを押すと、進み具合が分かります。「media sync complete」（メディア同期完了）が目印です。AnkiMobileでは、転送中は進捗画面を開いたままにします。[Ankiのメディア同期FAQ](https://docs.ankiweb.net/faqs/media-files-may-take-time-to-sync) · [AnkiMobileの同期ガイド](https://docs.ankiweb.net/ankimobile/syncing)

同じアカウントでAnkiWebに入り、表示できるカードを確認します。そのあとスマホを同期し、メディアの受信が終わったら2枚を開き直します。画像が見えたか、音声が聞こえたかを、それぞれ「○」「×」「未確認」で記録します。音声が自動で流れないときは、再生ボタンがあれば押してください。AnkiWebで目的のカードを開けなければ「未確認」のまま、スマホでの確認に進めます。

| 確認した場所 | 確認用のJPG | 確認用のMP3 | 元の画像 | 元の音声 |
| --- | --- | --- | --- | --- |
| PC | — | — | — | — |
| AnkiWeb | — | — | — | — |
| スマホ | — | — | — | — |

たとえば、同じ画像がAnkiWebで見えてスマホでだけ表示されないなら、スマホ側の受信や表示を調べます。PCでは使える音声がAnkiWebで聞こえないときは、PC側の転送に加え、ブラウザで再生できる形式かどうかも確認します。[Ankiの対応メディア形式](https://docs.ankiweb.net/manual/media#supported-formats)

## 結果に合わせて次の確認へ

- **PCでは使える画像や音声が、スマホでは2枚とも使えない。** PCとスマホで同じAnkiWebアカウントを使っているか、メディア同期が有効かを確認します。PCは同期設定の **Synchronize audio and images too**、iPhone・iPadのAnkiMobileは **Sync Sounds & Images**、AndroidのAnkiDroidは **Fetch media on sync**（メディアの同期）です。オフだった場合はオンにして、PCから順に同期します。[PCの設定](https://docs.ankiweb.net/manual/preferences#synchronisation) · [AnkiMobileの設定](https://docs.ankiweb.net/ankimobile/preferences#syncing) · [AnkiDroidの設定](https://docs.ankidroid.org/manual-ja.html#_ankidroid)
- **確認用カードはスマホで見聞きできるのに、元のカードで画像や音声が欠ける。** JPGとMP3は少なくとも1件ずつ届いています。次は元のカードのファイル名と添付を調べます。同じ種類のカードで繰り返し起こるなら、共通のカードテンプレートで、添付した欄が表面か裏面のどちらに出る設定かも確認します。[Ankiのカードテンプレートの仕組み](https://docs.ankiweb.net/manual/templates/fields)
- **確認用のMP3は聞こえて、元のカードは音声だけ聞こえない。** 元の音声を手動で再生できるなら、デッキの音声設定で自動再生を確認します。手動でも聞こえず、PCでは聞こえる場合は、添付ファイルがスマホで再生できる形式か確認します。元の音声ファイルを使えるなら、1枚分だけMP3に変換して添付し直すと比較できます。復習時に読み上げるタイプのカードなら、スマホの読み上げ設定や音声も確認します。[デッキの音声設定](https://docs.ankiweb.net/manual/deck-options#audio) · [Ankiの読み上げの仕組み](https://docs.ankiweb.net/manual/templates/fields#text-to-speech-for-individual-fields)

## 元のカードの添付を1件だけ調べる

PCで **ツール → メディアをチェック（Check Media）** を開きます。「不足」はノートが参照しているファイルをメディアフォルダで見つけられなかったという結果です。「未使用」はどのノートの欄からも参照されていないファイルです。このチェックはカードテンプレート内の参照を調べないので、診断中は削除せず、結果だけを見ます。[メディアチェックの仕様](https://docs.ankiweb.net/manual/media#checking-media)

元のカードをPCで編集し、音声なら `[sound:cup.mp3]`、画像なら欄のHTML表示で `<img src="cup.jpg">` のような箇所を探します。そのファイル名を `collection.media` 内の名前と照らし合わせます。たとえば `cup.jpg` と `cup.JPG` は、端末によっては別の名前として扱われます。名前が合わなければ、正しいファイルを編集画面から添付し直します。ファイルがなければ、手元の元データやメディア込みのバックアップを探します。共有デッキなら、配布元に画像や音声が別に用意されていないかも確認してください。[ファイル名の確認方法](https://docs.ankiweb.net/faqs/sounds-or-images-are-not-appearing-on-ankiweb-or-the-mobile-clients) · [共有デッキのメディアに関するFAQ](https://docs.ankiweb.net/faqs/a-shared-deck-is-not-showing-images-or-playing-audio)

直したあとは、PCから通常どおり同期してスマホでその1枚を開きます。一方向の同期を強制するとカードや復習履歴が上書きされることがあり、画像や音声は通常どおり同期されます。外出先で使うなら、画像と音声がそろってから、ネットを切って同じカードを開けるか試してください。[Ankiの同期マニュアル](https://docs.ankiweb.net/manual/syncing#media) · [オフラインで使う前の確認手順](/ja/blog/does-anki-work-offline/)

*検証にはAnki 26.9.4のバックエンドと、PC上のテスト用コレクションを使いました。「基本」のカードの裏面データにJPGとMP3の参照が入り、メディアチェックは不足0件、MP3を外したあとにはその1件だけを不足として報告しました。実地検証はこのPC上のテストに限り、画面操作と端末間の同期手順は公式マニュアルに基づきます。本文の下書きとカバー画像の制作に生成AIを使用しました。*
