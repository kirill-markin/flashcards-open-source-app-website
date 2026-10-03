---
title: Kiến trúc
description: Tổng quan hệ thống, các tên miền công khai, những client được hỗ trợ và luồng dữ liệu ưu tiên ngoại tuyến hiện tại.
---

## Tổng quan hệ thống

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Nguyên tắc

1. Các tên miền công khai riêng cho `app`, `api` và `auth`
2. Postgres là nguồn dữ liệu gốc
3. Client iOS ưu tiên ngoại tuyến, dùng SQLite cục bộ kèm đồng bộ
4. Ứng dụng web, ứng dụng iOS và giao diện cho agent bên ngoài dùng chung một mô hình không gian làm việc
5. Agent bên ngoài bắt đầu từ `GET https://api.nibomo.com/v1/`

## Các client được hỗ trợ

- Ứng dụng web tại `app.nibomo.com`
- Ứng dụng iOS trong kho mã chính, lưu dữ liệu bằng SQLite cục bộ
- Ứng dụng Android trên Google Play
- Client agent bên ngoài qua URL khám phá, khởi tạo bằng OTP và `Authorization: ApiKey`

## Mô hình dữ liệu

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## Luồng dữ liệu

### Web

1. Trình duyệt đăng nhập qua `auth.<domain>`.
2. Ứng dụng web tải dữ liệu không gian làm việc từ `api.<domain>`.
3. Yêu cầu chat AI đi qua `/chat/local-turn`.
4. Mỗi lượt gửi kết quả ôn tập cập nhật trạng thái bộ lập lịch ngay khi ghi.

### iOS

1. Ứng dụng iOS ghi vào SQLite cục bộ trước.
2. Các thay đổi cục bộ được xếp hàng trong một outbox.
3. Đồng bộ tải thay đổi lên qua `/v1/workspaces/{workspaceId}/sync/push`.
4. Đồng bộ tải cập nhật từ máy chủ về qua `/v1/workspaces/{workspaceId}/sync/pull`.
5. Cơ sở dữ liệu cục bộ áp dụng các thay đổi và đưa con trỏ đồng bộ tiến lên.

### Agent bên ngoài

1. Agent bắt đầu bằng `GET /v1/`.
2. Bước khởi tạo bằng OTP chạy trên `auth.<domain>`.
3. Agent nhận một khóa API dùng lâu dài.
4. Agent tải `/v1/agent/me`, liệt kê các không gian làm việc, chọn một không gian nếu cần, rồi dùng `/v1/agent/sql/query` và `/v1/agent/sql/execute`.

## Lập lịch

Nibomo dùng FSRS làm bộ lập lịch ôn tập.

Ghi chú triển khai:

- backend và iOS giữ hai bản triển khai FSRS song song, giống hệt nhau
- ứng dụng web tuân theo cùng quy ước dữ liệu lập lịch, nhưng không kèm bản sao bộ lập lịch thứ ba
- cài đặt bộ lập lịch ở cấp không gian làm việc gồm tỷ lệ ghi nhớ mong muốn, các bước học, các bước học lại, khoảng cách ôn tập tối đa và độ nhiễu (fuzz)
- thời điểm ôn tập thực tế lấy từ `reviewedAtClient`

Để xem quy ước chi tiết, hãy đọc [logic lập lịch FSRS trong kho mã chính](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

## Xác thực

- OTP qua email bằng Cognito
- Cookie phiên trình duyệt trên tên miền dùng chung cho ứng dụng web lưu trữ sẵn
- Khởi tạo agent bằng OTP trên `auth.<domain>`, trả về khóa ApiKey dùng lâu dài
- `AUTH_MODE=none` cho phát triển cục bộ
- `AUTH_MODE=cognito` cho xác thực giống môi trường production

## Cấu trúc triển khai

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda cho backend
- `auth.<domain>` -> API Gateway + Lambda cho dịch vụ xác thực
- Postgres trên AWS RDS

Tên miền gốc có thể tiếp tục dành cho một trang marketing riêng. Nếu tên miền đó còn trống trong lúc khởi tạo, hạ tầng có thể tạm thời chuyển hướng nó tới `app.<domain>`.
