---
title: Tài liệu API
description: API cho agent bên ngoài, gồm khám phá, khởi tạo bằng OTP, thiết lập không gian làm việc và các giao diện SQL đọc và ghi đã công bố.
---

## Tổng quan

Trang này mô tả các quy ước hiện hành dành cho AI agent bên ngoài khi làm việc với Nibomo.

Nếu client của bạn hỗ trợ MCP, [trình kết nối MCP](/docs/mcp-connector/) là
cách kết nối đơn giản nhất và bao bọc chính giao diện dữ liệu này. Trang này mô tả
các quy ước HTTP về khám phá, SQL, hướng dẫn và ôn tập mà các agent CLI sử dụng.

Hãy bắt đầu từ điểm khám phá chính thức:

```text
GET https://api.nibomo.com/v1/
```

Nội dung phản hồi khám phá này cũng có tại `GET /v1/agent`, nhưng `/v1/` là điểm truy cập công khai chính.

Phản hồi khám phá cho agent biết cách:

- bắt đầu đăng nhập bằng mã OTP gửi qua email
- đổi mã OTP lấy khóa API dùng lâu dài
- tải ngữ cảnh tài khoản
- tạo hoặc chọn một không gian làm việc
- tiếp tục làm việc qua giao diện SQL đã công bố
- lấy tài liệu hướng dẫn tham khảo và ôn tập từng thẻ một

## Khám phá lúc chạy và mã nguồn

Không có đặc tả OpenAPI. Bốn URL đặc tả trước đây dưới đây giờ trả về cùng một thông báo khám phá dạng JSON với `"openapiAvailable": false` thay vì một lược đồ:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

Dùng `GET https://api.nibomo.com/v1/` để khám phá lúc chạy theo trạng thái hiện tại. Đi theo `docs.discoveryUrl` được trả về để biết các route lúc chạy, và `docs.source.agentRoutesUrl` để xem chi tiết triển khai.

## Khởi tạo xác thực

Bước khởi tạo bằng OTP chạy trên dịch vụ xác thực:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

Luồng như sau:

1. Gọi `GET /v1/`.
2. Gửi email của người dùng tới `send-code`.
3. Đọc `otpSessionToken` từ phản hồi.
4. Hỏi người dùng mã 8 chữ số mới nhất trong email.
5. Gọi `verify-code` với `code`, `otpSessionToken` và `label`.
6. Lưu khóa API được trả về ở nơi khác, không lưu trong bộ nhớ cuộc trò chuyện.

Biến môi trường được khuyến nghị:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Các yêu cầu đã xác thực dùng:

```text
Authorization: ApiKey <key>
```

Ví dụ về chuỗi khởi tạo:

```bash
curl https://api.nibomo.com/v1/
```

```bash
curl -X POST https://auth.nibomo.com/api/agent/send-code \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com"}'
```

```bash
curl -X POST https://auth.nibomo.com/api/agent/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "code":"12345678",
    "otpSessionToken":"...",
    "label":"Codex on MacBook"
  }'
```

## Giao diện cho agent sau khi đăng nhập

Sau khi xác minh, giao diện hiện tại dành cho agent gồm:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (chỉ đọc)
- `POST /v1/agent/sql/execute` (ghi)
- `GET /v1/agent/guide/{topic}` (chỉ đọc)
- `POST /v1/agent/reviews/next` (chỉ đọc)
- `POST /v1/agent/reviews/reveal` (chỉ đọc)
- `POST /v1/agent/reviews/submit` (ghi)

Quá trình khởi tạo thông thường như sau:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. Nếu cần, `POST /v1/agent/workspaces` với `{"name":"Personal"}`
4. Nếu cần, `POST /v1/agent/workspaces/{workspaceId}/select`
5. Dùng `POST /v1/agent/sql/query` để đọc và `POST /v1/agent/sql/execute` để ghi

Việc chọn không gian làm việc được thực hiện tường minh cho từng kết nối bằng khóa API. Agent nên làm theo đoạn `instructions` được trả về và `docs.discoveryUrl` để biết các route lúc chạy, cùng `docs.source.agentRoutesUrl` để xem chi tiết triển khai, thay vì tự đoán bước tiếp theo.

Các route SQL và ôn tập cũng chấp nhận trường `workspaceId` tùy chọn trong phần thân JSON. Trường này nhắm tới không gian làm việc đó cho riêng một lần gọi mà không thay đổi lựa chọn hiện tại; bỏ trường này đi để dùng không gian làm việc đã chọn. Khi không có cả lựa chọn lẫn `workspaceId`, các route này trả về `409 WORKSPACE_SELECTION_REQUIRED`.

## Giao diện SQL

`POST /v1/agent/sql/query` là giao diện chỉ đọc nghiêm ngặt (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`) và `POST /v1/agent/sql/execute` là giao diện ghi (`INSERT`, `UPDATE`, `DELETE`); trong một lần gọi, tất cả câu lệnh phải cùng là đọc hoặc cùng là ghi.

Giao diện này được giới hạn có chủ đích và không phải PostgreSQL đầy đủ. Tài liệu này
chỉ mô tả phương ngữ được hỗ trợ, không phải tài liệu tham khảo về khả năng tương thích với PostgreSQL.

Không thao tác đọc nào sửa dữ liệu, tính lại lịch ôn tập hay thay đổi trạng thái thẻ. Dùng
`POST /v1/agent/sql/execute` cho mọi thao tác ghi thẻ và bộ thẻ. SQL không thể ghi
`review_events` hay trạng thái lập lịch FSRS; hãy ghi nhận lượt ôn tập qua
`POST /v1/agent/reviews/submit`.

Các nhóm câu lệnh hiện có:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

Các tài nguyên logic đã công bố hiện gồm:

- `workspace`
- `cards`
- `decks`
- `review_events`

Ghi chú:

- `LIMIT` mặc định là `100` và tối đa là `100`
- dùng `ORDER BY` khi bạn cần phân trang ổn định
- dùng `SHOW TABLES` hoặc `DESCRIBE cards` để tìm hiểu lược đồ
- mỗi lần gọi SQL chỉ áp dụng cho một không gian làm việc: `workspaceId` trong phần thân, hoặc không gian làm việc đã chọn

Ví dụ yêu cầu:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Ví dụ truy vấn thẻ:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Ví dụ thao tác ghi:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

Ngoài ra còn có một máy chủ MCP từ xa tại `https://mcp.nibomo.com/mcp`, dùng OAuth 2.1 (Dynamic Client Registration + PKCE). Máy chủ này cung cấp cùng cách tách SQL thành `sql_query` (chỉ đọc nghiêm ngặt) và `sql_execute` (ghi), cùng với `list_workspaces`, `get_guide` và các công cụ ôn tập `next_review_card`, `reveal_answer` và `submit_review`; xem [trình kết nối MCP](/docs/mcp-connector/).

### An toàn và phạm vi

Giao diện SQL là một phương ngữ khép kín, được bộ phân tích cú pháp kiểm soát, chứ không phải PostgreSQL thô. Các lớp bảo vệ gồm:

- **Danh sách câu lệnh cho phép khép kín**: chỉ `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` và `SELECT` để đọc, và `INSERT`, `UPDATE`, `DELETE` để ghi. Mọi câu lệnh khác đều bị từ chối ngay khi phân tích cú pháp.
- **Tài nguyên giới hạn**: câu lệnh chỉ có thể tác động tới các tài nguyên `workspace`, `cards`, `decks` và `review_events`.
- **Phạm vi theo từng không gian làm việc**: mỗi câu lệnh chỉ áp dụng cho một không gian làm việc mà bạn có quyền truy cập, là `workspaceId` trong phần thân yêu cầu hoặc không gian làm việc bạn đã chọn, và không có truy cập chéo giữa các tenant.
- **Phần thân yêu cầu nghiêm ngặt**: các route SQL và ôn tập từ chối mọi trường không xác định trong phần thân, nên một `workspaceId` viết sai sẽ báo lỗi thay vì chạy trên không gian làm việc đã chọn.
- **Giới hạn**: tối đa `100` dòng mỗi câu lệnh, tối đa `50` câu lệnh mỗi lô, và kết quả giới hạn khoảng `12k` token. Mỗi lô thay đổi dữ liệu được áp dụng một cách nguyên tử.
- **Tách đọc/ghi**: `sql_query` và `list_workspaces` chỉ đọc nghiêm ngặt (`readOnlyHint`) và không bao giờ sửa dữ liệu, tính lại lịch ôn tập hay thay đổi trạng thái thẻ. `sql_execute` là công cụ ghi SQL duy nhất và thực hiện các thao tác ghi (`destructiveHint`); trong một lần gọi, tất cả câu lệnh phải cùng là đọc hoặc cùng là ghi. SQL không thể ghi `review_events` hay trạng thái lập lịch FSRS; chỉ `POST /v1/agent/reviews/submit` (MCP `submit_review`) ghi nhận một lượt ôn tập.

## Hướng dẫn

`GET /v1/agent/guide/{topic}` trả về một hướng dẫn tham khảo trong `data.guide`, cùng nội dung mà công cụ MCP `get_guide` cung cấp. Các chủ đề:

- `sql_dialect`: toàn bộ cú pháp SQL, các giới hạn và ví dụ
- `card_authoring`: quy ước về thẻ, nhãn, kiểm tra trùng lặp và định dạng
- `bulk_authoring`: chia nhỏ và kiểm tra một tác vụ ghi lớn
- `review_flow`: vòng lặp ôn tập và chấm điểm

Chủ đề không xác định sẽ trả về `400` kèm danh sách các chủ đề được hỗ trợ. Hãy lấy hướng dẫn phù hợp trước khi soạn thẻ, ghi hàng loạt hoặc chạy một phiên ôn tập, và đọc lại `sql_dialect` sau khi một câu lệnh bị từ chối.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## Ôn tập

Các route ôn tập cho phép agent kiểm tra người học theo từng thẻ và lưu mỗi lần chấm điểm vào lịch FSRS của thẻ. Chúng nhận cùng các đối số JSON như các công cụ ôn tập MCP:

- `POST /v1/agent/reviews/next` trả về `card` với `cardId` và `frontText`, hoặc `card: null` khi không có thẻ nào đến hạn. `tags` tùy chọn (khớp bất kỳ nhãn nào) hoặc `deckId` tùy chọn thu hẹp hàng đợi, nhưng không bao giờ dùng cả hai; yêu cầu không có phần thân vẫn hợp lệ.
- `POST /v1/agent/reviews/reveal` yêu cầu `cardId` và trả về `backText` của thẻ đó.
- `POST /v1/agent/reviews/submit` yêu cầu `cardId`, một UUID `reviewId` do client tạo, `rating` là `Again`, `Hard`, `Good` hoặc `Easy`, và `reviewedTimeZone` theo IANA của người học. Máy chủ ghi thời điểm ôn tập và trả về lịch mới của thẻ, gồm `dueAt`, `state`, `reps` và `lapses`.

Cả ba route đều chấp nhận `workspaceId` tùy chọn. Hãy lưu `reviewId` trước khi gửi, và nếu không chắc lần gửi trước đã thành công, hãy gửi lại đúng yêu cầu đó; việc gửi lại không bao giờ tạo thêm lượt ôn tập thứ hai. Các route ôn tập cũng có thể trả về:

- `409 REVIEW_EVENT_CONFLICT`: lượt ôn tập đã được ghi nhận, và `error.details.reviewSchedule` chứa lịch hiện tại của thẻ.
- `409 REVIEW_ID_CARD_MISMATCH`: `reviewId` đã gắn với một lượt ôn tập của thẻ khác, nên không có gì được lưu; hãy gửi lại với một `reviewId` mới.
- `409 REVIEW_STALE`: thời điểm ôn tập đã lưu của thẻ bằng hoặc muộn hơn thời gian hiện tại của máy chủ; hãy ôn tập thẻ khác.
- `400 REVIEW_INPUT_INVALID`: một đối số bị thiếu, không hợp lệ hoặc không được hỗ trợ, kể cả khi `tags` được dùng cùng `deckId` hoặc khi dùng một nhãn mà không gian làm việc không có.

Ví dụ gửi kết quả ôn tập:

```bash
curl -X POST https://api.nibomo.com/v1/agent/reviews/submit \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "cardId":"693c4863-28a2-45e8-8f55-9fa31fc95ff2",
    "reviewId":"429bb7cc-40fb-49f3-bb50-48a5db2826d1",
    "rating":"Good",
    "reviewedTimeZone":"Europe/Sofia"
  }'
```

## API cho người dùng và đồng bộ

Nibomo còn có các API riêng cho client của người dùng và cho đồng bộ ưu tiên ngoại tuyến, nhưng đó không phải là giao diện chính dành cho agent bên ngoài:

- luồng trên trình duyệt dùng cookie trên tên miền dùng chung, kèm cơ chế bảo vệ CSRF
- client ưu tiên ngoại tuyến dùng các route đồng bộ đã triển khai tại `/v1/workspaces/{workspaceId}/sync/push` và `/v1/workspaces/{workspaceId}/sync/pull`
- các route đồng bộ tách biệt với giao diện dành cho agent bên ngoài
