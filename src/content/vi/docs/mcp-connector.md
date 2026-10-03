---
title: Trình kết nối MCP
description: "Kết nối Nibomo qua danh mục Claude hoặc cấu hình máy chủ MCP từ xa của Nibomo trong Claude Code và các client khác, với OAuth và tám công cụ cho thẻ ghi nhớ và ôn tập."
---

## Kết nối qua danh mục Claude

Mở [Nibomo trong danh mục Claude](https://claude.ai/directory/nibomo), kết nối, đăng nhập vào tài khoản Nibomo của bạn và cấp quyền truy cập. Nibomo được liệt kê là một trình kết nối Community.

Với Claude Code, hãy dùng cùng tài khoản gói đăng ký Claude và kiểm tra `/mcp` sau khi kết nối. Đăng nhập bằng khóa API hoặc qua nhà cung cấp bên thứ ba sẽ không tự động tải các trình kết nối claude.ai của bạn.

Bạn cũng có thể cấu hình Claude Code trực tiếp. Chạy lệnh dưới đây, sau đó mở `/mcp` trong Claude Code và hoàn tất việc cấp quyền trên trình duyệt:

```bash
claude mcp add --transport http nibomo https://mcp.nibomo.com/mcp
```

[Tài liệu MCP của Claude Code](https://code.claude.com/docs/en/mcp#use-mcp-servers-from-claudeai).

## Tổng quan

Nibomo chạy một máy chủ MCP (Model Context Protocol) từ xa để các MCP client và
AI agent có thể đọc các thẻ đến hạn của bạn, ôn tập cùng bạn từng câu hỏi một,
và tạo hoặc sửa thẻ và bộ thẻ thay bạn.

Agent có thể kết nối theo hai cách: qua máy chủ MCP này (phù hợp nhất với MCP client
như Claude hoặc Cursor), hoặc qua [URL khám phá của Agents API](/docs/api/) dành cho
agent CLI. Cả hai đều truy cập cùng một giao diện dữ liệu theo từng người dùng; trang này nói về máy chủ MCP.

Kết nối tới máy chủ tại:

```text
https://mcp.nibomo.com/mcp
```

Giao thức truyền tải là Streamable HTTP. Máy chủ cung cấp tám công cụ để khám phá không gian làm việc, đọc và ghi thẻ và bộ thẻ, xem hướng dẫn tham khảo, ôn tập và xem mức sử dụng tài khoản.

## Cách thêm vào client của bạn

Hầu hết client thêm máy chủ MCP từ xa dưới dạng trình kết nối tùy chỉnh:

1. Mở phần cài đặt trình kết nối hoặc máy chủ MCP trong client của bạn.
2. Thêm một trình kết nối tùy chỉnh và dán URL máy chủ `https://mcp.nibomo.com/mcp`.
3. Với client tương tác, hãy cấp quyền trên trình duyệt khi được yêu cầu. Máy chủ
   dùng OAuth 2.1 với Dynamic Client Registration, nên không có client secret nào
   cần dán và không cần đăng ký ứng dụng trước.
4. Khi dùng không giao diện hoặc qua CLI, hãy đặt header `Authorization: Bearer fca_…` với
   khóa API agent của bạn thay cho luồng trên trình duyệt.

Sau khi cấp quyền, gọi `list_workspaces` một lần để chọn không gian làm việc, rồi dùng
`sql_query` để đọc và `sql_execute` để ghi thẻ và bộ thẻ. Để ôn tập, gọi
`next_review_card`, rồi `reveal_answer`, rồi `submit_review`.

## Công cụ

Máy chủ cung cấp tám công cụ. Đọc và ghi được tách riêng có chủ đích để không công cụ
nào trộn lẫn thao tác an toàn với thao tác có tính phá hủy.

- `get_usage_limits` — chỉ đọc nghiêm ngặt: gói tài khoản, các giới hạn và mức dùng AI trong tháng hiện tại; công cụ này không đọc hay thay đổi thẻ.
- `sql_query` — quyền chỉ đọc nghiêm ngặt với thẻ và bộ thẻ của bạn (`SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` — quyền ghi với thẻ và bộ thẻ của bạn (`INSERT`, `UPDATE`,
  `DELETE`) dưới dạng một lô nguyên tử.
- `list_workspaces` — chỉ đọc nghiêm ngặt: danh sách các không gian làm việc bạn có quyền truy cập,
  mỗi mục có
  `workspaceId`, tên, số thẻ đang hoạt động, hoạt động gần nhất và cho biết đó có phải
  không gian mặc định bạn đang chọn hay không. Dùng một `workspaceId` được trả về cho đối số
  `workspaceId` tùy chọn của các công cụ SQL và ôn tập.
- `get_guide` — chỉ đọc nghiêm ngặt: hướng dẫn tham khảo cho một chủ đề: `sql_dialect`,
  `card_authoring`, `bulk_authoring` hoặc `review_flow`. Công cụ này không đọc dữ liệu không gian làm việc nào.
- `next_review_card` — chỉ đọc nghiêm ngặt: trả về thẻ tiếp theo cần ôn tập, chỉ mặt trước,
  theo cùng thứ tự hàng đợi như trong các ứng dụng. `tags` hoặc `deckId` tùy chọn thu hẹp
  hàng đợi.
- `reveal_answer` — chỉ đọc nghiêm ngặt: trả về mặt sau của một thẻ sau khi
  người học đã thử trả lời mặt trước.
- `submit_review` — ghi nhận một lần chấm điểm `Again`, `Hard`, `Good` hoặc `Easy` và
  cập nhật lịch FSRS của thẻ.

Giao diện SQL là một phương ngữ được giới hạn có chủ đích và không phải PostgreSQL đầy đủ.
Tài liệu này chỉ mô tả phương ngữ được hỗ trợ, không phải tài liệu tham khảo về khả năng
tương thích với PostgreSQL. Câu lệnh chỉ có thể truy cập các tài nguyên `workspace`, `cards`, `decks` và
`review_events`, mỗi câu lệnh chỉ áp dụng cho không gian làm việc của chính bạn, và
việc đọc và ghi đều giới hạn ở `100` dòng mỗi câu lệnh.

## Ôn tập

Các công cụ ôn tập cho phép agent kiểm tra người học theo từng thẻ và lưu mỗi lần
chấm điểm vào lịch FSRS của thẻ:

1. `next_review_card` trả về `cardId` và `frontText`, hoặc `card: null` khi
   không có thẻ nào đến hạn.
2. Sau khi người học trả lời, `reveal_answer` trả về `backText` của thẻ đó.
3. `submit_review` nhận `cardId`, một UUID `reviewId` do client tạo, một
   `rating` và `reviewedTimeZone` theo IANA của người học. Máy chủ ghi
   thời điểm ôn tập và trả về lịch mới của thẻ.

Nếu không chắc lần gửi đã thành công, hãy gửi lại với cùng `reviewId`; việc gửi lại không bao giờ tạo thêm
lượt ôn tập thứ hai. Một lần gửi cũng có thể trả về:

- `409 REVIEW_EVENT_CONFLICT` — lượt ôn tập đã được ghi nhận, và phần chi tiết
  lỗi chứa lịch hiện tại của thẻ.
- `409 REVIEW_ID_CARD_MISMATCH` — `reviewId` đã gắn với một lượt ôn tập của
  thẻ khác, nên không có gì được lưu; hãy gửi lại với một `reviewId` mới.
- `409 REVIEW_STALE` — thời điểm ôn tập đã lưu của thẻ bằng hoặc muộn hơn thời gian
  hiện tại của máy chủ; hãy ôn tập thẻ khác.

Lượt ôn tập chỉ được ghi nhận qua `submit_review`: SQL không thể ghi
`review_events` hay trạng thái lập lịch FSRS. Gọi `get_guide` với chủ đề
`review_flow` để xem đầy đủ quy tắc ôn tập và chấm điểm.

## Quy ước về thẻ

Mọi thẻ đều tuân theo cùng một quy ước, và các công cụ dựa vào quy ước đó:

- `front_text` chỉ chứa câu hỏi hoặc gợi ý ôn tập và không bao giờ chứa câu trả lời.
- `back_text` chứa câu trả lời, có thể kèm một ví dụ cụ thể.

Agent tạo thẻ qua `sql_execute` tuân theo quy ước này, nên các
thẻ chúng tạo ra có thể ôn tập ngay bằng phương pháp lặp lại ngắt quãng.

## Xác thực

Hai cách cấp quyền cùng truy cập một giao diện dữ liệu theo từng người dùng.

### OAuth 2.1 (client trình kết nối tương tác)

Máy chủ triển khai luồng authorization code với PKCE và Dynamic Client
Registration. Thêm URL MCP làm trình kết nối tùy chỉnh và cấp quyền trên trình duyệt;
không cần chia sẻ trước client secret nào. Việc khám phá theo chuẩn:

- Metadata của tài nguyên được bảo vệ:
  `https://mcp.nibomo.com/.well-known/oauth-protected-resource`
- Metadata của máy chủ cấp quyền:
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### Khóa API (không giao diện và CLI)

Lấy một khóa API agent `fca_` dùng lâu dài qua luồng đăng nhập bằng mã OTP gửi qua email
được mô tả trong [tài liệu API](/docs/api/), rồi gửi nó dưới dạng Bearer token:

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

Đây cũng là khóa mà giao diện REST cho agent chấp nhận, và nó không cần trình duyệt hay
một vòng OAuth.

Mô tả chính thức, máy đọc được, của cả hai cách là nội dung phản hồi khám phá
tại `https://api.nibomo.com/v1/` (có bản sao tại `/v1/agent`).

## An toàn và phạm vi

Có thể yên tâm phê duyệt các công cụ SQL vì đây là một phương ngữ khép kín,
được bộ phân tích cú pháp kiểm soát, chứ không phải quyền truy cập tùy ý vào cơ sở dữ liệu:

- **Danh sách câu lệnh cho phép khép kín**: `sql_query` chỉ chấp nhận `SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS` và `SELECT`; `sql_execute` chỉ chấp nhận `INSERT`,
  `UPDATE` và `DELETE`. Mọi câu lệnh khác đều bị từ chối ngay khi phân tích cú pháp.
- **Tài nguyên giới hạn**: câu lệnh chỉ có thể tác động tới `workspace`, `cards`, `decks`
  và `review_events`.
- **Phạm vi theo từng không gian làm việc**: mỗi câu lệnh SQL và mỗi lượt ôn tập chỉ áp dụng cho một
  không gian làm việc mà bạn có quyền truy cập, là `workspaceId` bạn truyền vào hoặc không gian
  mặc định bạn đã chọn, và không có truy cập chéo giữa các tenant.
- **Đối số nghiêm ngặt**: mọi công cụ đều từ chối đối số không xác định, nên một
  `workspaceId` viết sai sẽ báo lỗi thay vì chạy trên không gian làm việc mặc định của bạn.
- **Giới hạn**: tối đa `100` dòng mỗi câu lệnh, tối đa `50` câu lệnh mỗi lô, và
  kết quả giới hạn khoảng `12k` token. Mỗi lô thay đổi dữ liệu được áp dụng một cách nguyên tử.
- **Tách đọc/ghi**: `get_usage_limits`, `sql_query`, `list_workspaces`, `get_guide`,
  `next_review_card` và `reveal_answer` chỉ đọc nghiêm ngặt (`readOnlyHint`)
  và không bao giờ sửa dữ liệu, tính lại lịch ôn tập hay thay đổi trạng thái thẻ.
  `sql_execute` và `submit_review` là hai công cụ ghi duy nhất (`destructiveHint`):
  `sql_execute` ghi thẻ và bộ thẻ, còn `submit_review` ghi nhận một lượt ôn tập và
  cập nhật lịch của thẻ tương ứng.

Toàn bộ stack — ứng dụng, backend và hạ tầng — đều là mã nguồn mở và có thể
[tự lưu trữ](/docs/self-hosting/), nên bạn có thể chạy cùng trình kết nối này với
bản triển khai của riêng mình.
