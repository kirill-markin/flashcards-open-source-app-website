---
title: Bắt đầu
description: Bắt đầu với ứng dụng web lưu trữ sẵn, kết nối agent qua URL khám phá hoặc tự chạy toàn bộ hệ thống trên máy của bạn.
---

## Ứng dụng web lưu trữ sẵn

Cách nhanh nhất để bắt đầu là dùng ứng dụng web lưu trữ sẵn:

1. Mở [app.nibomo.com](https://app.nibomo.com)
2. Đăng nhập bằng email với mã OTP, không cần mật khẩu
3. Tạo thẻ, ôn tập các thẻ đến hạn và dùng chat AI với dữ liệu không gian làm việc và tệp đính kèm

Với cách dùng bản lưu trữ sẵn, bạn không cần cài đặt gì hay thiết lập máy chủ.

## Thiết lập agent

Nếu bạn muốn Claude Code, Codex hoặc OpenClaw kết nối trực tiếp, hãy bắt đầu từ:

```text
GET https://api.nibomo.com/v1/
```

Phản hồi khám phá đó hướng dẫn agent qua từng bước: đăng nhập bằng mã OTP gửi qua email, tạo khóa API dùng lâu dài, tải thông tin tài khoản, khởi tạo không gian làm việc và làm việc với giao diện SQL đã công bố.

Nội dung phản hồi này cũng có tại `GET /v1/agent`, nhưng `/v1/` mới là điểm truy cập công khai chính thức.

## Tự lưu trữ

Nếu bạn muốn tự chạy phiên bản của riêng mình, hãy xem [Hướng dẫn tự lưu trữ](/docs/self-hosting/).

## Những gì bạn có hiện nay

- Ứng dụng web lưu trữ sẵn để tạo thẻ, ôn tập và chat AI
- Ứng dụng iOS trong kho mã chính, dùng SQLite cục bộ và đồng bộ theo hướng ưu tiên ngoại tuyến
- Backend và dịch vụ xác thực dùng chung, chạy trên hai tên miền riêng `api` và `auth`
- Kết nối agent bên ngoài qua URL khám phá, OTP và xác thực ApiKey
- Cách triển khai mã nguồn mở trên AWS, với Postgres là nguồn dữ liệu gốc

## Định hướng của kho mã

Dự án theo hướng ưu tiên ngoại tuyến.

Hiện nay kho mã gồm ứng dụng web, ứng dụng iOS, dịch vụ xác thực, backend API, luồng kết nối agent bên ngoài và ứng dụng Android đã phát hành trên Google Play.
