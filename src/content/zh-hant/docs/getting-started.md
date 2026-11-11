---
title: 開始使用
description: 透過 iPhone、iPad、Mac 或 Android 應用程式、網頁版、AI 助理，或自己的伺服器開始使用 Nibomo。
---

以下是開始使用 Nibomo 的幾種方式，從最常用的方式開始列出：

- **iPhone、iPad 和 Mac 應用程式**：[App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **Android 應用程式**：[Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **雲端網頁版**：[app.nibomo.com](https://app.nibomo.com)
- **AI 助理**：使用 [MCP 連接器](/docs/mcp-connector/)或位於 `https://api.nibomo.com/v1/` 的 API
- **自行架設**：參閱[自行架設指南](/docs/self-hosting/)

## 行動裝置與電腦應用程式

安裝適用於你裝置的原生應用程式：

- iPhone、iPad 和 Mac：[App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android：[Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

應用程式會將閃卡保存在裝置上，讓你離線也能複習，重新連線後再同步。你可以先以訪客身分使用，之後再登入。

### 主畫面小工具

Nibomo 在 iPhone、iPad、Mac 和 Android 上提供「複習」小工具，共有三種尺寸：

- **小型**：待複習閃卡數量和連續學習天數
- **中型**：待複習閃卡數量和下一張閃卡的問題
- **大型**：待複習閃卡數量、下一個問題和連續學習天數

沒有待複習的閃卡時，小工具會顯示「都複習完了」及下一張閃卡的複習時間。小工具不會顯示答案。點一下小工具即可開啟「複習」。中型或大型小工具會直接開啟當下顯示的閃卡。所有人都能免費使用小工具，包括訪客。

另外八款小工具可顯示你的學習進度：「活動」、「年度」、「今天」、「複習次數」、「連續紀錄」、「行事曆」、「接下來幾天」和「總覽」。在 iPhone 和 iPad 上，你也可以把「待複習卡片」小工具加到鎖定畫面。[小工具指南](/blog/flashcard-widget/)有各款小工具的介紹。

在 iPhone、iPad 或 Mac 上加入小工具時，請開啟小工具圖庫，選擇 Nibomo，再選擇尺寸。在 Android 上，請從小工具清單加入 Nibomo 的小工具，再調整大小，版面會隨尺寸變更。

## 雲端網頁版

最快的開始方式是使用雲端網頁版：

1. 開啟 [app.nibomo.com](https://app.nibomo.com)
2. 使用電子郵件的一次性驗證碼（OTP）登入，無須密碼
3. 製作閃卡、複習到期的閃卡，並在 AI 聊天中使用工作區資料和附件

使用雲端網頁版無須安裝應用程式或設定伺服器。

## 設定 AI 助理連線

Claude、ChatGPT 和 Cursor 等 MCP 用戶端可依照 [MCP 連接器指南](/docs/mcp-connector/)連線。

如果想讓 Claude Code、Codex 或 OpenClaw 直接連線，請從這個端點開始：

```text
GET https://api.nibomo.com/v1/
```

探索端點傳回的內容會引導 AI 助理使用電子郵件的一次性驗證碼登入、建立長期有效的 API 金鑰、載入帳號、初始化工作區，再使用文件所列的 SQL 介面。

也可透過 `GET /v1/agent` 取得相同的回應內容，正式的公開進入點是 `/v1/`。

## 自行架設

如果想在自己的環境部署 Nibomo，請參閱[自行架設指南](/docs/self-hosting/)。

## 目前提供的功能

- 可製作閃卡、複習及使用 AI 聊天的雲端網頁版
- 適用於 iPhone、iPad、Mac 和 Android 的原生應用程式，採用本機 SQLite 儲存和離線優先的同步設計
- 共用的後端和驗證服務，分別使用 `api` 和 `auth` 網域
- 外部 AI 助理可透過探索端點、OTP 和 ApiKey 驗證連線
- 可在 AWS 部署的開源方案，以 Postgres 為權威資料來源

## 專案方向

專案採用離線優先的設計。

目前儲存庫包含網頁版、iOS 應用程式、驗證服務、後端 API、外部 AI 助理的連線流程，以及在 Google Play 發布的 Android 應用程式。
