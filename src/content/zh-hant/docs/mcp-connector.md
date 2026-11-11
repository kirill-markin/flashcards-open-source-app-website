---
title: MCP 連接器
description: 搭配 Claude、Claude Code 及其他 MCP 用戶端使用 Nibomo。
---

## 透過 Claude 目錄連接

在 [Claude 目錄中開啟 Nibomo](https://claude.ai/directory/nibomo)，連接後登入你的 Nibomo 帳號，並授權存取。Nibomo 列在社群連接器（Community connectors）中。

若要在 Claude Code 使用，請使用同一個 Claude 訂閱帳號，並在連接後執行 `/mcp` 確認。若使用 API 金鑰或第三方供應商登入，系統不會自動載入 claude.ai 上的連接器。

你也可以直接設定 Claude Code。執行以下指令，然後在 Claude Code 中開啟 `/mcp`，並在瀏覽器中完成授權：

```bash
claude mcp add --transport http nibomo https://mcp.nibomo.com/mcp
```

參閱 [Claude Code MCP 文件](https://code.claude.com/docs/en/mcp#use-mcp-servers-from-claudeai)。

## 概覽

Nibomo 提供遠端 MCP（Model Context Protocol）伺服器。MCP 用戶端和 AI 助理可讀取你待複習的閃卡，一次問一題陪你複習，或幫你製作、編輯閃卡和牌組。

AI 助理可以透過這個 MCP 伺服器連線，適合 Claude 或 Cursor 等 MCP 用戶端。命令列助理也可以使用 [Agent API 探索網址](/docs/api/)。兩種方式都使用同一套介面，並依使用者身分限制可存取的資料。本頁介紹的是 MCP 伺服器。

使用以下網址連線：

```text
https://mcp.nibomo.com/mcp
```

傳輸方式為 Streamable HTTP。伺服器提供八項工具，可探索工作區、讀寫閃卡和牌組、查閱參考指南、複習閃卡及查看帳號用量。

## 在用戶端新增連接器

在多數用戶端，你可以將遠端 MCP 伺服器加為自訂連接器：

1. 開啟用戶端的連接器或 MCP 伺服器設定。
2. 新增自訂連接器，貼上伺服器網址 `https://mcp.nibomo.com/mcp`。
3. 若使用互動式用戶端，請依提示在瀏覽器中授權。伺服器使用 OAuth 2.1 和動態用戶端註冊，因此無須貼上用戶端密鑰，也無須先註冊應用程式。
4. 若在無介面或命令列環境下使用，請用 Agent API 金鑰設定 `Authorization: Bearer fca_…` 標頭，以代替瀏覽器授權。

完成授權後，先呼叫一次 `list_workspaces` 選擇工作區，再用 `sql_query` 讀取資料，或用 `sql_execute` 寫入閃卡和牌組。複習時，依序呼叫 `next_review_card`、`reveal_answer` 和 `submit_review`。

## 工具

伺服器提供八項工具。讀取和寫入刻意分開，因此同一項工具不會混合安全和破壞性操作。

- `get_usage_limits`：唯讀。傳回帳號方案、限制和當月 AI 用量，不讀取或修改閃卡。
- `sql_query`：唯讀。使用 `SHOW TABLES`、`DESCRIBE`、`SHOW COLUMNS` 或 `SELECT` 讀取閃卡和牌組。
- `sql_execute`：以不可分割的批次對閃卡和牌組執行寫入（`INSERT`、`UPDATE`、`DELETE`）。
- `list_workspaces`：唯讀。列出你可存取的工作區，包括各工作區的 `workspaceId`、名稱、有效閃卡數量、最近活動，以及目前是否為你選定的預設工作區。你可以將傳回的 `workspaceId` 用於 SQL 和複習工具的選用 `workspaceId` 參數。
- `get_guide`：唯讀。依主題傳回參考指南，支援 `sql_dialect`、`card_authoring`、`bulk_authoring` 或 `review_flow`，不讀取工作區資料。
- `next_review_card`：唯讀。依照應用程式的待複習順序傳回下一張閃卡，只包含正面。可使用選用參數 `tags` 或 `deckId` 縮小待複習範圍。
- `reveal_answer`：唯讀。學習者試著回答正面的問題後，傳回該閃卡的背面。
- `submit_review`：記錄一次 `Again`、`Hard`、`Good` 或 `Easy` 評分，並更新該閃卡的 FSRS 複習排程。

這個 SQL 介面只支援特定語法。本文件僅說明該介面支援的語法，不能作為 PostgreSQL 相容性參考。陳述式只能存取 `workspace`、`cards`、`decks` 和 `review_events` 資源。每個陳述式的範圍限於你自己的工作區，讀取和寫入各以每個陳述式 `100` 列為上限。

## 複習

複習工具讓 AI 助理一次問學習者一個問題，記錄每次評分，並據此更新該張閃卡的 FSRS 複習排程：

1. `next_review_card` 傳回 `cardId` 和 `frontText`。沒有待複習的閃卡時，會傳回 `card: null`。
2. 學習者回答後，`reveal_answer` 會傳回該閃卡的 `backText`。
3. `submit_review` 接受 `cardId`、由用戶端產生且格式為 UUID 的 `reviewId`、`rating`，以及學習者的 IANA 時區 `reviewedTimeZone`。伺服器會記錄複習時間並傳回新的複習排程。

若不確定提交是否成功，請用相同的 `reviewId` 重試。系統不會重複記錄同一次複習。提交時也可能收到以下回應：

- `409 REVIEW_EVENT_CONFLICT`：該次複習已記錄，錯誤詳細資料包含閃卡目前的排程。
- `409 REVIEW_ID_CARD_MISMATCH`：該 `reviewId` 已用於另一張閃卡的複習紀錄，因此此次未儲存。請使用新的 `reviewId` 再次提交。
- `409 REVIEW_STALE`：閃卡記錄的複習時間等於或晚於目前的伺服器時間。請複習另一張閃卡。

只能透過 `submit_review` 記錄複習。SQL 無法寫入 `review_events` 或 FSRS 排程狀態。若要查看完整的複習及評分規則，請呼叫 `get_guide` 並指定 `review_flow` 主題。

## 閃卡格式

所有閃卡遵循同一套規則，工具會依據這些規則運作：

- `front_text` 只放問題或複習提示，不放答案。
- `back_text` 放答案，也可以附上具體例子。

AI 助理透過 `sql_execute` 製作閃卡時會遵循這套規則，因此完成後就能用間隔重複的方式複習這些閃卡。

## 驗證

兩種方式都使用同一套介面，並依使用者身分限制可存取的資料。

### OAuth 2.1（互動式連接器用戶端）

伺服器採用帶有 PKCE 的授權碼流程和動態用戶端註冊。將 MCP 網址加為自訂連接器，再到瀏覽器完成授權，無須事先提供共用的用戶端密鑰。服務探索採用標準方式：

- 受保護資源的中繼資料：
  `https://mcp.nibomo.com/.well-known/oauth-protected-resource`
- 授權伺服器的中繼資料：
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### API 金鑰（無介面及命令列環境）

依照 [API 參考文件](/docs/api/)，使用電子郵件一次性驗證碼登入並取得長期有效、以 `fca_` 開頭的 Agent API 金鑰，再將它當作 Bearer 權杖傳送：

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

REST Agent API 也接受同一把金鑰，使用時無須開啟瀏覽器或執行 OAuth 授權往返流程。

`https://api.nibomo.com/v1/` 的探索回應是這兩種方式的正式機器可讀說明，`/v1/agent` 也提供相同內容。

## 安全與存取範圍

剖析器會把 SQL 工具限制在特定語法範圍內。工具無法任意存取資料庫，因此可以放心核准使用：

- **只允許指定的陳述式**：`sql_query` 只接受 `SHOW TABLES`、`DESCRIBE`、`SHOW COLUMNS` 和 `SELECT`。`sql_execute` 只接受 `INSERT`、`UPDATE` 和 `DELETE`。其他陳述式會在剖析時遭拒。
- **資源限制**：陳述式只能存取 `workspace`、`cards`、`decks` 和 `review_events`。
- **以工作區為範圍**：每個 SQL 陳述式和每次複習都限於你有權存取的單一工作區，即你傳入的 `workspaceId` 或目前選定的預設工作區。無法跨租戶存取。
- **嚴格檢查參數**：所有工具都會拒絕未知參數。若將 `workspaceId` 拼錯，系統會回傳錯誤，避免在預設工作區執行。
- **用量上限**：每個陳述式最多 `100` 列，每批最多 `50` 個陳述式，回應上限約為 `12k` 個詞元。每批變更會以不可分割的方式套用。
- **讀寫分離**：`get_usage_limits`、`sql_query`、`list_workspaces`、`get_guide`、`next_review_card` 和 `reveal_answer` 都是唯讀工具（`readOnlyHint`），不會修復資料、重新計算排程或變更閃卡狀態。只有 `sql_execute` 和 `submit_review` 可以寫入（`destructiveHint`）。`sql_execute` 寫入閃卡和牌組，`submit_review` 記錄複習結果並更新該閃卡的排程。

應用程式、後端和基礎設施均為開源，你可以[自行架設](/docs/self-hosting/)，並使用相同的連接器連到自己的部署環境。
