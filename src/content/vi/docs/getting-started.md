---
title: Bắt đầu
description: Bắt đầu với ứng dụng cho iPhone, iPad, Mac hoặc Android, ứng dụng web, agent AI hoặc máy chủ của riêng bạn.
---

Có nhiều cách để bắt đầu, xếp từ phổ biến nhất:

- **Ứng dụng cho iPhone, iPad và Mac**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **Ứng dụng Android**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **Ứng dụng web lưu trữ sẵn**: [app.nibomo.com](https://app.nibomo.com)
- **Agent AI**: [Trình kết nối MCP](/docs/mcp-connector/) hoặc API tại `https://api.nibomo.com/v1/`
- **Tự lưu trữ**: [Hướng dẫn tự lưu trữ](/docs/self-hosting/)

## Ứng dụng di động và máy tính

Cài đặt ứng dụng gốc cho thiết bị của bạn:

- iPhone, iPad và Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

Ứng dụng lưu thẻ ngay trên thiết bị, nên bạn có thể ôn tập khi ngoại tuyến và đồng bộ khi có mạng trở lại. Bạn có thể bắt đầu với tư cách khách và đăng nhập sau.

### Tiện ích Màn hình chính

Ứng dụng Nibomo có tiện ích Ôn tập cho iPhone, iPad, Mac và Android. Tiện ích có ba kích thước:

- **Nhỏ**: số thẻ đến hạn và chuỗi ngày học của bạn
- **Vừa**: số thẻ đến hạn và câu hỏi trên thẻ tiếp theo
- **Lớn**: số thẻ đến hạn, câu hỏi tiếp theo và chuỗi ngày học của bạn

Khi không còn thẻ nào đến hạn, tiện ích hiển thị “Đã ôn xong” và thời điểm thẻ tiếp theo đến hạn. Tiện ích không bao giờ hiển thị đáp án. Chạm vào tiện ích để mở Ôn tập; tiện ích cỡ Vừa hoặc Lớn sẽ mở Ôn tập ngay tại thẻ đang hiển thị. Tiện ích miễn phí cho tất cả mọi người, kể cả người dùng khách.

Tám tiện ích khác cho bạn thấy tiến độ học: “Hoạt động”, “Năm”, “Hôm nay”, “Lượt ôn tập”, “Chuỗi ngày”, “Lịch”, “Sắp tới” và “Tổng quan”. Trên iPhone, bạn cũng có thể đặt tiện ích “Thẻ đến hạn” lên Màn hình khóa, và [hướng dẫn về tiện ích](/blog/flashcard-widget/) giới thiệu từng tiện ích.

Để thêm tiện ích trên iPhone, iPad hoặc Mac, hãy mở thư viện tiện ích, chọn Nibomo rồi chọn kích thước. Trên Android, hãy thêm tiện ích Nibomo từ danh sách tiện ích rồi đổi kích thước của tiện ích; bố cục sẽ thay đổi theo kích thước.

## Ứng dụng web lưu trữ sẵn

Cách nhanh nhất để bắt đầu là dùng ứng dụng web lưu trữ sẵn:

1. Mở [app.nibomo.com](https://app.nibomo.com)
2. Đăng nhập bằng email với mã OTP, không cần mật khẩu
3. Tạo thẻ, ôn tập các thẻ đến hạn và dùng chat AI với dữ liệu không gian làm việc và tệp đính kèm

Với cách dùng bản lưu trữ sẵn, bạn không cần cài đặt gì hay thiết lập máy chủ.

## Thiết lập agent

Các client MCP như Claude, ChatGPT và Cursor có thể kết nối theo [hướng dẫn Trình kết nối MCP](/docs/mcp-connector/).

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
- Ứng dụng gốc cho iPhone, iPad, Mac và Android, lưu trữ cục bộ bằng SQLite và đồng bộ theo hướng ưu tiên ngoại tuyến
- Backend và dịch vụ xác thực dùng chung, chạy trên hai tên miền riêng `api` và `auth`
- Kết nối agent bên ngoài qua URL khám phá, OTP và xác thực ApiKey
- Cách triển khai mã nguồn mở trên AWS, với Postgres là nguồn dữ liệu gốc

## Định hướng của kho mã

Dự án theo hướng ưu tiên ngoại tuyến.

Hiện nay kho mã gồm ứng dụng web, ứng dụng iOS, dịch vụ xác thực, backend API, luồng kết nối agent bên ngoài và ứng dụng Android đã phát hành trên Google Play.
