---
title: プライバシーポリシー
description: Flashcards のプライバシーポリシー。
slug: privacy
sections:
  - type: legal_page
    lastUpdated: 2026年3月
---
## 収集する情報

Hosted cloud beta を利用する場合、認証に使うメールアドレスと、サービス運用に必要な学習データを保存します。これには cards、review history、workspace metadata が含まれます。Self-hosted instances は、あなた自身がそのように動く copy を deploy しない限り、当社にデータを送りません。

## 運営者

Hosted Flashcards service は Ozma Inc. により運営されています。Flashcards は Kirill Markin により作成され、[ozma.io](https://ozma.io/) は hosted service に関連する company website です。

## AI Features

Hosted app の AI chat を利用する場合、typed prompts、request に必要な card-derived context、uploaded files、uploaded images、dictated audio や transcription requests が、server に configured された third-party AI providers に送信されることがあります。実際に使われる provider は、その時点の hosted server configuration に依存します。

## データの利用目的

あなたのデータは authentication、cloud sync、optional AI features を提供するために使われます。私たちはあなたのデータを販売せず、広告にも使いません。Authentication と workspace access は public repository に documented された backend services が処理します。

## Data Storage

Hosted cloud data は AWS infrastructure 上に保存され、primary application data には Postgres が使われます。Data は transit 中に暗号化され、service operators は hosted beta の運用と debug に必要な operational logs を保持する場合があります。

## Cookies

Login flow のために `session`、`refresh`、`logged_in` などの authentication cookies を使います。Site の動作に tracking cookies や third-party analytics は必要ありません。

## Data Deletion

Self-hosted instances では database を直接管理できます。Hosted app では iOS app から account を削除でき、hosted data removal に追加の支援が必要な場合は support に連絡できます。

## Support

Privacy に関する質問は [kirill+flashcards@kirill-markin.com](mailto:kirill+flashcards@kirill-markin.com) へ連絡するか、[support page](/support/) を利用してください。

## Open Source

Codebase 全体は open source です。Application がデータをどう扱うかを正確に audit できます。
