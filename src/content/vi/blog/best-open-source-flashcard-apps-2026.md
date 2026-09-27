---
title: "Ứng dụng thẻ ghi nhớ mã nguồn mở tốt nhất năm 2026: So sánh 6 lựa chọn FOSS"
description: "So sánh sáu ứng dụng thẻ ghi nhớ mã nguồn mở còn được duy trì về phạm vi mã nguồn, dữ liệu ngoại tuyến, đồng bộ, nhập Anki, xuất dữ liệu, tự triển khai và khôi phục."
date: "2026-08-02"
updated: "2026-09-05"
image: "/blog/best-open-source-flashcard-apps-2026-v2.png"
keywords:
  - "ứng dụng thẻ ghi nhớ mã nguồn mở tốt nhất"
  - "ứng dụng thẻ ghi nhớ mã nguồn mở"
  - "lặp lại ngắt quãng mã nguồn mở"
  - "thẻ ghi nhớ tự triển khai"
  - "ứng dụng thẻ ghi nhớ ngoại tuyến"
  - "ứng dụng mã nguồn mở thay thế Anki"
  - "thẻ ghi nhớ FOSS"
---

Anki vẫn là ứng dụng thẻ ghi nhớ mã nguồn mở tốt nhất cho phần lớn người dùng trong năm 2026. Việc lựa chọn đáng bàn hơn khi ngoài “mã nguồn mở”, bạn còn có những yêu cầu bắt buộc khác.

Có thể bạn cần một ứng dụng trình duyệt chạy trên máy chủ của mình. Hoặc một bộ thẻ đọc được dưới dạng Markdown thuần. Hoặc một hệ thống ghi chú riêng tư có thể tạo thẻ ghi nhớ. Mỗi yêu cầu hướng bạn đến một sản phẩm khác nhau; một kho mã công khai trên GitHub chưa đủ để quyết định.

Một ứng dụng máy tính mã nguồn mở có thể đi cùng ứng dụng iPhone đóng mã nguồn. Một container Docker có thể chạy giao diện trình duyệt nhưng không đồng bộ được với ứng dụng cài trên thiết bị. Quá trình nhập có thể giữ lại câu chữ nhưng làm mất mẫu thẻ, tệp đa phương tiện và nhiều năm lịch sử ôn tập vốn làm nên giá trị của bộ sưu tập.

Sáu dự án đáp ứng các tiêu chí của bài đánh giá này. Tôi đã so sánh mã nguồn và giấy phép, bản phát hành ổn định mới nhất, dữ liệu cục bộ, bộ lập lịch, đồng bộ, chuyển dữ liệu từ Anki, xuất dữ liệu và chính xác những phần có thể tự triển khai. Phạm vi tự triển khai quan trọng hơn những gì đa số danh sách tính năng cho thấy.

> **Thông tin về tác giả:** Tôi là Kirill Markin, người phát triển [Nibomo](https://nibomo.com/), một trong sáu ứng dụng dưới đây. Kho mã dùng giấy phép MIT của Nibomo bao gồm ứng dụng web, ứng dụng cài trên thiết bị, backend, đồng bộ và hạ tầng. Tôi không xếp nó ở vị trí đầu tiên. Anki là lựa chọn mặc định an toàn hơn, Mnemosyne có quy trình chuyển dữ liệu từ Anki đã được sử dụng lâu năm, và nhiều lựa chọn ở đây dễ vận hành hơn đáng kể.

**Thông tin được kiểm chứng ngày:** 5 tháng 9 năm 2026. Bản phát hành ổn định được phân biệt với những thay đổi chỉ có trên nhánh mặc định.

![Một người đi bộ đường dài so sánh sáu chiếc ba lô đang mở và kiểm tra bộ đồ dự phòng trước khi chọn ứng dụng thẻ ghi nhớ mã nguồn mở](/blog/best-open-source-flashcard-apps-2026-v2.png)

## Câu trả lời ngắn gọn

| Yêu cầu chính của bạn | Phù hợp nhất | Lý do | Điểm cần kiểm tra trước |
| --- | --- | --- | --- |
| Hệ thống đa dụng đáng tin cậy hoặc bộ sưu tập sẵn có phức tạp | [Anki](https://apps.ankiweb.net/) | Thẻ và mẫu thẻ đã hoàn thiện, FSRS, tiện ích bổ sung, nhiều ứng dụng khách và gói xuất dữ liệu phong phú | Ứng dụng iOS chính thức và AnkiWeb không thuộc mã nguồn mở của bản máy tính; tự triển khai chỉ cung cấp đồng bộ, không có AnkiWeb |
| Ứng dụng máy tính tập trung vào học tập, có khả năng nhập Anki đã được sử dụng lâu năm | [Mnemosyne](https://mnemosyne-proj.org/) | Học cục bộ, nhập kiểu thẻ và dữ liệu học tập từ Anki, máy chủ đồng bộ có thể tự vận hành | 2.11 vẫn là bản ổn định mới nhất; Android ôn tập được nhưng không sửa thẻ được |
| Ghi chú và thẻ ghi nhớ trong cùng kho kiến thức cục bộ | [SiYuan](https://b3log.org/siyuan/en/) | Ứng dụng cài trên thiết bị hoạt động ngoại tuyến, FSRS tích hợp và ứng dụng trình duyệt thực sự chạy bằng Docker | Bản Docker không đồng bộ được với ứng dụng cài trên thiết bị và thiếu một số lệnh nhập/xuất |
| Mã nguồn cho web, di động, backend và hạ tầng | [Nibomo](https://github.com/kirill-markin/flashcards-open-source-app) | Một monorepo MIT với tài liệu triển khai môi trường production | Hệ thống production được hỗ trợ lấy AWS làm nền tảng chính; chuyển từ Anki sẽ mất một phần dữ liệu |
| Ứng dụng máy tính mới hơn, ưu tiên dữ liệu cục bộ và nhập trực tiếp APKG | [Recall](https://github.com/Madlezz/Recall) | FSRS, bản máy tính, PWA, cơ sở dữ liệu cục bộ và dịch vụ trung chuyển mã hóa tùy chọn | Chỉ nhập bản chụp trạng thái lập lịch, xử lý hai trường đầu tiên của ghi chú và bỏ qua âm thanh |
| Bộ thẻ Markdown dễ đọc, không phụ thuộc mạng | [Essentialist](https://github.com/essentialist-app/essentialist) | Tệp bộ thẻ thuần văn bản và ứng dụng máy tính/Android chủ ý hoạt động ngoại tuyến | Không có đồng bộ; tiến độ nằm trong cơ sở dữ liệu ẩn riêng |

Đây không phải bảng chấm điểm tính năng. Hãy bắt đầu từ những mất mát hoặc trục trặc bạn không thể chấp nhận. Nếu có mười năm ôn tập trên Anki, mức độ bảo toàn dữ liệu quan trọng hơn giao diện gọn đẹp. Nếu triển khai cho trường học, khả năng truy cập qua trình duyệt và quy trình khôi phục đã kiểm chứng có thể quan trọng hơn tiện ích bổ sung.

## Tiêu chí để được coi là ứng dụng thẻ ghi nhớ mã nguồn mở

Tôi dùng bốn tiêu chí:

1. **Chức năng học tập cốt lõi có mã nguồn công khai và giấy phép mã nguồn mở rõ ràng.** Một danh mục các tiện ích tích hợp quanh phần lõi chưa công khai không đạt tiêu chí này.
2. **Lặp lại ngắt quãng đã hoạt động.** Một mục trên lộ trình hoặc chế độ đố vui thông thường là chưa đủ.
3. **Có bản phát hành hoặc tài liệu triển khai chính thức rõ ràng.** Chỉ có commit gần đây chưa đủ để biến nguyên mẫu thành lựa chọn đáng tin cậy.
4. **Nguồn chính thức mô tả đủ rõ cách xử lý dữ liệu để kiểm tra.** Tôi cần câu trả lời cụ thể về lưu trữ ngoại tuyến, đồng bộ, nhập/xuất hoặc triển khai, thay vì lời hứa mơ hồ rằng người dùng “sở hữu dữ liệu”.

Tôi không dùng số sao GitHub làm ngưỡng sàng lọc. Số sao phản ánh tuổi đời và độ nổi tiếng không kém mức độ phù hợp của sản phẩm. Tuy vậy, độ trưởng thành vẫn quan trọng. Anki, Mnemosyne và SiYuan có bản phát hành và cách vận hành đã ổn định. Recall và Essentialist phù hợp với những nhu cầu hẹp hơn vì cách hoạt động của bản đã phát hành được mô tả đủ rõ để đưa ra khuyến nghị cụ thể.

“Còn được duy trì” cũng cần kiểm tra ở hai nơi. Bản phát hành có tag cho biết người dùng cài được gì; nhánh mặc định cho biết dự án đang đi về đâu. Essentialist là ví dụ rõ nhất. Tài liệu bản ổn định ghi SM-2, còn nhánh hiện tại ghi FSRS. Bảng dưới đây ghi nhận SM-2.

## So sánh sáu ứng dụng thẻ ghi nhớ FOSS

| Ứng dụng | Bản ổn định đã kiểm tra | Nền tảng | Dữ liệu ngoại tuyến | Bộ lập lịch | Đồng bộ | Chuyển từ Anki và khả năng chuyển đi | Phần có thể tự triển khai |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Anki** | [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1), 5/8/2026 | Windows, macOS, Linux; ứng dụng Android và iOS riêng; AnkiWeb | Ứng dụng đã cài dùng bộ sưu tập cục bộ để học | FSRS hoặc SM-2 cũ | AnkiWeb hoặc máy chủ đồng bộ chính thức tự triển khai | Nhập văn bản, APKG/COLPKG và cơ sở dữ liệu Mnemosyne; xuất văn bản hoặc gói, có tùy chọn kèm đa phương tiện và lịch ôn | **Chỉ máy chủ đồng bộ.** Không có AnkiWeb hay giao diện học trên trình duyệt tự triển khai |
| **Mnemosyne** | [2.11](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11), 12/11/2023; kho mã tiếp tục có hoạt động trong năm 2026 | Windows, macOS, Linux, Android; ôn tập hạn chế qua trình duyệt | Bản máy tính lưu cục bộ; Android ôn ngoại tuyến được nhưng không sửa được | Điều chỉnh theo mức đánh giá khả năng nhớ từ 0–5 | Đồng bộ tích hợp tới máy tính hoặc phiên bản chạy không giao diện | Tài liệu chính thức mô tả nhập đầy đủ Anki, gồm kiểu thẻ tùy chỉnh và dữ liệu học; chức năng xuất để chia sẻ không phải bản sao lưu đầy đủ | **Đồng bộ và ôn tập hạn chế qua trình duyệt.** Máy chủ trình duyệt không có tính năng bảo mật |
| **SiYuan** | [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2), 30/8/2026 | Windows, macOS, Linux, Android, iOS, HarmonyOS; trình duyệt qua Docker | Ứng dụng cài trên thiết bị giữ không gian làm việc cục bộ | FSRS | Đồng bộ chính thức mã hóa đầu cuối có trả phí hoặc tích hợp S3/WebDAV bên thứ ba có trả phí | Ứng dụng nói chung nhập Markdown/dữ liệu và xuất nhiều định dạng tài liệu/dữ liệu; không có tài liệu về bộ nhập APKG | **Ứng dụng trình duyệt đầy đủ.** Docker không đồng bộ được với ứng dụng cài trên thiết bị và bỏ một số lệnh nhập/xuất |
| **Nibomo** | [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0), 1/9/2026 | Web, iOS, Android | IndexedDB trên web; SQLite trên iOS; Room dùng SQLite trên Android; thay đổi cục bộ xếp hàng chờ đồng bộ | FSRS | Backend do dịch vụ vận hành hoặc do người dùng triển khai | ZIP riêng chuyển thẻ, nhãn, siêu dữ liệu nguồn và tệp đa phương tiện được tham chiếu, nhưng không chuyển bộ thẻ, trạng thái học, cài đặt hay tài khoản; không có bộ nhập APKG | **Toàn bộ web/backend.** Production lấy AWS làm nền tảng chính; ứng dụng native riêng cần build riêng |
| **Recall** | [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0), 31/7/2026 | Windows, macOS, Linux; PWA cài được | SQLite trên máy tính; IndexedDB trong trình duyệt; không cần tài khoản, mặc định không thu thập telemetry | FSRS | Đồng bộ thư mục trên máy tính hoặc dịch vụ trung chuyển mã hóa Cloudflare Worker/R2 tùy chọn | Nhập APKG trên máy tính đọc hai trường đầu, bộ thẻ, nhãn, bản chụp gần đúng trạng thái lập lịch và hình ảnh; xuất JSON và tệp lưu trữ Recall | **Chỉ trung chuyển bản chụp mã hóa.** Không chạy PWA |
| **Essentialist** | [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22), 10/10/2025; mã nguồn tiếp tục có hoạt động trong năm 2026 | Android APK, macOS DMG, Linux Flatpak; Windows build từ mã nguồn | Không truy cập mạng; nội dung bộ thẻ là Markdown | Bản ổn định: SM-2; nhánh mặc định: FSRS | Không có | Markdown giữ nội dung thẻ; cơ sở dữ liệu ẩn đi kèm giữ tiến độ | **Không có gì để triển khai.** Sao lưu cả tệp Markdown và cơ sở dữ liệu đi kèm |

## 1. Anki là lựa chọn mặc định an toàn nhất

Anki mạnh ở những phần ít gây chú ý. Nó hỗ trợ các kiểu ghi chú phức tạp, tạo các thẻ từ cùng một ghi chú từ mẫu, giữ tệp đa phương tiện trong bộ sưu tập và mang theo nhiều năm dữ liệu lập lịch. Bản máy tính ổn định dùng trong lần đánh giá này là [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1). Bản 26.09b2 mới hơn được đánh dấu beta nên không được dùng làm cơ sở so sánh.

Phạm vi mã nguồn mở không đồng nhất. [Kho mã bản máy tính dùng AGPL-3.0-or-later](https://github.com/ankitects/anki/blob/26.08.1/LICENSE), với các ngoại lệ được liệt kê cho thành phần đi kèm. [AnkiDroid](https://github.com/ankidroid/Anki-Android) là dự án Android mã nguồn mở riêng. AnkiMobile và AnkiWeb là sản phẩm chính thức, nhưng mã nguồn của chúng không nằm trong những kho đó. Bài [Anki có phải mã nguồn mở không?](/blog/is-anki-open-source/) giải thích chi tiết hơn.

Ứng dụng đã cài giữ bộ sưu tập cục bộ, nên ôn tập thông thường không cần kết nối. AnkiWeb là phần trực tuyến. Nếu khả năng ngoại tuyến quyết định lựa chọn của bạn, bài [Anki có hoạt động ngoại tuyến không?](/blog/does-anki-work-offline/) phân biệt dữ liệu nào nằm trên thiết bị và thao tác nào phải chờ đồng bộ.

Anki hỗ trợ [FSRS và bộ lập lịch cũ](https://docs.ankiweb.net/deck-options.html). Các định dạng xuất của nó là điểm xuất phát tốt nhất để chuyển dữ liệu trong nhóm này. [COLPKG chứa toàn bộ bộ sưu tập cùng dữ liệu lập lịch](https://docs.ankiweb.net/exporting.html), còn APKG có thể kèm dữ liệu lập lịch và tệp đa phương tiện nếu bạn chọn các tùy chọn đó. Anki cũng nhập văn bản, gói Anki và cơ sở dữ liệu Mnemosyne 2.0.

Gói xuất chứa nhiều thông tin không đảm bảo ứng dụng khác nhập được trọn vẹn. Nơi nhận vẫn phải hiểu mẫu thẻ, quy tắc tạo thẻ, tham chiếu đa phương tiện và các trường lập lịch bên trong. Nó chỉ có nhiều thông tin để xử lý hơn tệp CSV.

[Máy chủ tự triển khai chính thức](https://docs.ankiweb.net/sync-server.html) được chủ ý giới hạn chức năng. Nó đồng bộ các ứng dụng Anki tương thích; không cung cấp AnkiWeb, ôn tập trên trình duyệt hay cổng quản lý tài khoản. Mặc định máy chủ dùng HTTP không mã hóa, và hướng dẫn khuyên giữ nó trong mạng cục bộ hoặc đặt sau VPN hay reverse proxy HTTPS. Phiên bản ứng dụng và máy chủ cũng phải tương thích.

Chọn Anki khi ưu tiên bảo toàn bộ sưu tập, mẫu thẻ, tiện ích bổ sung hoặc hỗ trợ nhiều thiết bị. Chỉ tìm lựa chọn khác khi một giới hạn cụ thể, như không có giao diện trình duyệt tự triển khai hay không công khai toàn bộ mã nguồn di động, quan trọng hơn.

## 2. Mnemosyne tập trung vào học tập cục bộ

Mnemosyne tạo cảm giác rõ ràng là một công cụ học trên máy tính, đúng với mục đích của nó. Nó không kéo theo kho kiến thức hay nền tảng đám mây. Bạn có cơ sở dữ liệu cục bộ, quy trình lặp lại ngắt quãng truyền thống, ứng dụng Android để ôn tập và máy chủ đồng bộ chạy được trên máy tính có hoặc không có giao diện.

Bản ổn định mới nhất vẫn là [2.11 từ tháng 11/2023](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11). Kho mã có thay đổi trong năm 2026, nhưng điều đó không biến những thay đổi ấy thành bộ cài ổn định. Hãy thử 2.11 trên các hệ điều hành bạn dự định dùng trong vài năm tới.

Về giấy phép, chỉ nhìn nhãn trên kho mã là chưa đủ. [Bản phân chia giấy phép ở thư mục gốc](https://github.com/mnemosyne-proj/mnemosyne/blob/master/LICENSE) áp dụng LGPL v3 cho openSM2sync và điều khoản riêng cho phần còn lại của Mnemosyne. [Giấy phép chương trình chính](https://github.com/mnemosyne-proj/mnemosyne/blob/master/mnemosyne/LICENSE) dùng AGPL v3 cùng điều khoản bổ sung yêu cầu tên Mnemosyne vẫn hiển thị rõ trong sản phẩm phái sinh; cách thể hiện cụ thể cần trao đổi với người duy trì. Hãy đọc văn bản đó trước khi phân phối lại bản đã chỉnh sửa.

[Ứng dụng Android ôn tập ngoại tuyến được nhưng không sửa thẻ được](https://mnemosyne-proj.org/help/android-client). Thiết bị khác có thể dùng máy chủ ôn tập qua trình duyệt khởi chạy từ ứng dụng máy tính, nhưng trang tính năng chính thức cảnh báo máy chủ không có tính năng bảo mật. Đây là giao diện tiện dụng trong mạng LAN, chưa phải ứng dụng web hoàn thiện để đưa ra mạng công cộng.

Khả năng chuyển dữ liệu là lý do thuyết phục nhất để cân nhắc Mnemosyne thay vì tiếp tục dùng Anki. Trang tính năng chính thức mô tả [nhập đầy đủ Anki, gồm kiểu thẻ tùy chỉnh và dữ liệu học tập](https://mnemosyne-proj.org/features). [Đồng bộ tích hợp](https://mnemosyne-proj.org/help/syncing) hợp nhất thẻ và dữ liệu học, đồng thời có thể trỏ tới máy do bạn kiểm soát.

Lệnh xuất thông thường dễ khiến bạn nhầm khi sao lưu. Nó được thiết kế để chia sẻ thẻ đã chọn và bỏ qua dữ liệu học tập. Để di chuyển hoặc khôi phục toàn bộ hệ thống, [hướng dẫn dùng nhiều máy tính](https://mnemosyne-proj.org/help/mnemosyne-and-multiple-computers) yêu cầu sao chép toàn bộ thư mục dữ liệu.

Mnemosyne là lựa chọn mã nguồn mở thay Anki mạnh nhất ở đây nếu bạn chỉ muốn tập trung vào học. Đổi lại là nhịp phát hành bản ổn định chậm, khả năng chỉnh sửa trên di động hạn chế và giao diện trình duyệt cần được giới hạn mạng cẩn thận.

## 3. SiYuan phù hợp khi ghi chú là hệ thống chính

SiYuan là ứng dụng quản lý kiến thức ưu tiên quyền riêng tư, với thẻ ghi nhớ nằm trong cùng mô hình khối và tài liệu. Cách này hữu ích khi ghi chú tạo ra nội dung ôn tập. Nhưng nếu chỉ cần một hàng đợi thẻ để ôn, hệ thống này có phần cồng kềnh.

[Kho mã AGPL-3.0](https://github.com/siyuan-note/siyuan) liên kết tới giao diện, kernel, ứng dụng di động, lớp dữ liệu và thành phần FSRS. [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2) là bản ổn định được kiểm tra ở đây. Ứng dụng máy tính và di động lưu không gian làm việc cục bộ và tiếp tục hoạt động ngoại tuyến.

Đồng bộ không nằm trong gói lưu trữ cục bộ miễn phí. [Trang giá chính thức](https://b3log.org/siyuan/en/pricing.html) cung cấp đồng bộ mã hóa đầu cuối qua dịch vụ chính thức trong gói thuê bao; tính năng Pro có trả phí bổ sung tích hợp S3 hoặc WebDAV riêng. Dự án cũng cảnh báo không đặt không gian làm việc đang sử dụng trong thư mục của công cụ đồng bộ tệp thông thường, vì chỉnh sửa đồng thời có thể làm hỏng hoặc ghi đè dữ liệu.

Docker chạy một ứng dụng trình duyệt thực sự, nhưng không biến nó thành máy chủ đồng bộ cho các ứng dụng đã cài. [Tài liệu Docker v3.8.2](https://github.com/siyuan-note/siyuan/blob/v3.8.2/README.md#docker-hosting) nói ứng dụng máy tính và di động không thể kết nối với nó. Docker còn bỏ chức năng nhập Markdown và xuất PDF, HTML, Word. Những lệnh ấy có trong ứng dụng native đầy đủ, nên chép danh sách tính năng chung vào kế hoạch triển khai Docker sẽ gây hiểu lầm.

Tôi không tìm thấy bộ nhập APKG chính thức. SiYuan có thể chuyển Markdown và các định dạng dữ liệu riêng, nhưng bộ sưu tập Anki cần được xây dựng lại cẩn thận hơn.

Chọn SiYuan khi kho kiến thức là sản phẩm chính và thẻ ghi nhớ cần nằm trong đó. Nếu muốn thay thế Anki trực tiếp, Mnemosyne và Anki cho bạn thấy rõ hơn những gì giữ được khi chuyển dữ liệu.

## 4. Nibomo công khai nhiều phần hơn và yêu cầu bạn vận hành chúng

Trong các sản phẩm được so sánh, Nibomo công khai mã nguồn cho nhiều phần của hệ thống nhất. Monorepo MIT bao gồm ứng dụng web, ứng dụng iOS và Android, backend, dịch vụ xác thực, đồng bộ, ứng dụng quản trị, các bước chuyển đổi cấu trúc cơ sở dữ liệu và hạ tầng AWS. Bản ổn định dùng ở đây là [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0). Những thay đổi sau đó trên nhánh mặc định không được tính là tính năng đã phát hành.

[Kiến trúc](/docs/architecture/) ưu tiên ngoại tuyến, nhưng “ngoại tuyến” có ý nghĩa hơi khác trên từng ứng dụng. Bản web dùng dữ liệu cục bộ trong IndexedDB làm nguồn dữ liệu chuẩn. iOS dùng SQLite, còn Android dùng Room trên SQLite. Thay đổi được ghi cục bộ rồi xếp vào hàng đợi gửi trước khi đồng bộ. Thiết kế này xử lý kết nối gián đoạn; nó không khiến bộ nhớ trình duyệt tồn tại vĩnh viễn hay loại bỏ nhu cầu thử khởi động ứng dụng từ đầu trên từng thiết bị.

Gói ZIP riêng của Nibomo là định dạng chuyển nội dung, không phải bản sao lưu tài khoản. Trong v1.23.0, [cấu trúc dữ liệu của gói](https://github.com/kirill-markin/flashcards-open-source-app/blob/v1.23.0/apps/backend/src/workspacePackages/types.ts) mang theo nội dung mặt trước và sau, nhãn, kiểu thẻ, siêu dữ liệu nguồn và siêu dữ liệu gói; tệp đa phương tiện được tham chiếu được đóng gói riêng. Nó không mang theo cấu trúc bộ thẻ, lịch sử ôn tập, trạng thái FSRS, cài đặt không gian làm việc hay tài khoản.

v1.23.0 không có bộ nhập APKG. [Quy trình chuyển từ Anki TXT/CSV](/blog/migrate-from-anki-txt-export-open-source-flashcards/) trong tài liệu dùng văn bản xuất ra để dựng lại thẻ và cần người kiểm tra. Mẫu thẻ, trạng thái lập lịch, cấu trúc bộ thẻ và tệp đa phương tiện đi kèm không tự động được giữ lại theo cách này. Cách này hợp lý với bộ thẻ văn bản đơn giản, nhưng không phù hợp với bộ sưu tập được tùy chỉnh nhiều.

[Hướng dẫn tự triển khai](/docs/self-hosting/) cũng nói rõ phạm vi. Môi trường production dùng hệ thống AWS CDK gồm RDS, Cognito, API Gateway và Lambda, S3 và CloudFront, thông tin bí mật, cảnh báo và sao lưu. Cloudflare DNS, email Resend và cấu hình Sentry nằm ngoài AWS. Docker Compose dùng cho phát triển cục bộ; đó không phải gói production được hỗ trợ. Người vận hành muốn có bản iOS hoặc Android riêng phải build và phân phối chúng riêng.

Chọn Nibomo khi quyền sở hữu toàn bộ mã nguồn web/native/backend đáng để bạn bỏ công vận hành. Chọn Anki hoặc Mnemosyne khi việc bảo toàn bộ sưu tập hiện có là yêu cầu khắt khe hơn.

## 5. Recall hiện đại, nhưng cần đọc kỹ bộ nhập

Recall là dự án trẻ nhất trong nhóm khuyến nghị chính. Nó có mặt vì [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0) cung cấp bản máy tính có phiên bản, PWA cài được, cơ chế lưu trữ cục bộ được mô tả rõ, FSRS, xuất dữ liệu và thiết kế đồng bộ tự triển khai có tài liệu.

Ứng dụng máy tính dùng giấy phép MIT và SQLite; PWA dùng IndexedDB. Cả hai không cần tài khoản, và dự án cho biết mặc định tắt telemetry. Bản máy tính hỗ trợ Windows, macOS và Linux.

Bộ nhập APKG hữu ích, nhưng cụm “review history” (lịch sử ôn tập) trong README nói quá khả năng của mã tại tag phát hành. [Mã bộ nhập v1.3.0](https://github.com/Madlezz/Recall/blob/v1.3.0/src-tauri/src/anki_import.rs) không đọc nhật ký ôn tập của Anki. Nó đọc trạng thái hiện tại của thẻ, khoảng cách ôn, số lần ôn và số lần quên, cùng độ ổn định và độ khó FSRS nếu Anki đã lưu các giá trị ấy. Với thẻ cũ thiếu các trường FSRS, Recall ước tính từ giá trị SM-2.

Chuyển đổi nội dung cũng có giới hạn đáng kể. Bộ nhập dùng hai trường đầu tiên của ghi chú làm mặt trước và sau thay vì tái tạo kiểu ghi chú và mẫu thẻ Anki. Nó giữ tên bộ thẻ và nhãn. Nó trích xuất các định dạng ảnh thông dụng và viết lại tham chiếu, nhưng bỏ qua âm thanh cùng các loại đa phương tiện khác. Vì bộ nhập là lệnh Tauri, chuyển trực tiếp APKG chỉ có trên máy tính, không có trong PWA trên trình duyệt.

Cách này tốt hơn nhiều so với dựng lại từ văn bản thuần, nhưng vẫn chưa bảo toàn trọn vẹn bộ sưu tập. Hãy thử thẻ điền khuyết, các thẻ từ cùng một ghi chú, trường bổ sung, HTML/CSS, ảnh, âm thanh, ngày đến hạn và ghi chú lặp trước khi chuyển một bộ sưu tập lớn.

Recall có hai cách đồng bộ. Bản máy tính có thể ghi bản chụp dữ liệu vào thư mục do Dropbox, Drive hoặc công cụ đồng bộ tệp khác quản lý. Dịch vụ trung chuyển tùy chọn dùng Cloudflare Worker và bucket R2. Theo [thiết kế đồng bộ](https://github.com/Madlezz/Recall/blob/v1.3.0/docs/SYNC.md) tại tag phát hành, ứng dụng mã hóa bản chụp bằng AES-GCM trước khi tải lên; bên trung chuyển chỉ thấy dữ liệu mã hóa, không thấy nội dung thẻ hay khóa. Quá trình cập nhật dùng kiểm soát đồng thời lạc quan và thử lại một lần khi xung đột, nhưng vẫn hợp nhất toàn bộ bản chụp thay vì từng trường. Không có dịch vụ trung chuyển công cộng do người duy trì tài trợ: bạn tự triển khai và nhập URL.

Chức năng xuất JSON và tệp lưu trữ Recall cho bạn cách lấy dữ liệu ra để chuyển đi. Hãy khôi phục một tệp vào hồ sơ trống trước khi coi đó là bản sao lưu.

Chọn Recall nếu bạn muốn trải nghiệm máy tính/PWA hiện đại, ưu tiên dữ liệu cục bộ và chấp nhận dự án còn trẻ cùng bộ nhập giữ được bản chụp hữu ích thay vì toàn bộ hệ thống Anki.

## 6. Essentialist làm bộ thẻ dễ đọc, nhưng không gói toàn bộ trạng thái vào đó

Essentialist có phạm vi chức năng gọn nhất trong nhóm này. Mỗi bộ thẻ là một tệp Markdown có thể mở bằng trình soạn thảo văn bản, lưu trong hệ thống quản lý phiên bản hoặc sao chép bằng công cụ tệp thông thường. Ứng dụng chủ ý không gửi yêu cầu mạng.

Bản ổn định mới nhất là [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22). Tệp phát hành gồm bản Android, macOS và Linux; người dùng Windows build từ mã nguồn. [README tại tag phát hành](https://github.com/essentialist-app/essentialist/blob/v0.3.22/README.md) ghi bộ lập lịch là SM-2.

[README trên nhánh mặc định](https://github.com/essentialist-app/essentialist/blob/main/README.md) hiện ghi FSRS, và kho mã có thay đổi trong năm 2026. Đó là hướng phát triển hữu ích, không phải lý do để gắn nhãn FSRS cho bản thực thi năm 2025.

Markdown cũng chứa ít dữ liệu hơn bạn tưởng lúc đầu. Nội dung thẻ nằm trong tệp thông thường, còn tiến độ nằm trong cơ sở dữ liệu ẩn tên `.<deck file>.db`. Sao chép `sample.md` mà thiếu `.sample.md.db` sẽ giữ câu hỏi và câu trả lời nhưng mất trạng thái học.

Không có đồng bộ thiết bị hay máy chủ tích hợp. Bạn có thể đặt tệp trong thư mục đồng bộ riêng, nhưng khi đó xử lý xung đột và khôi phục là trách nhiệm của bạn.

Chọn Essentialist khi Markdown dễ đọc và quy trình không dùng mạng là mục tiêu chính. Đây không phải hệ thống nhiều thiết bị liền mạch, và một tệp nhìn thấy được không phải bản sao lưu đầy đủ.

## Bốn dự án đang hoạt động đáng theo dõi

Những dự án này có hoạt động phát triển thực tế trong năm 2026. Chúng chưa nằm trong nhóm sáu lựa chọn chính vì mã nguồn thú vị chưa đủ để khuyến nghị sử dụng.

| Dự án | Những gì đã có cụ thể | Lý do chưa được khuyến nghị trong danh sách chính |
| --- | --- | --- |
| [HSK Nest](https://github.com/s-mberli/hsknest) | Mã nguồn AGPL, bộ lập lịch FSRS/SM-2/Leitner, triển khai Docker, dịch vụ được vận hành sẵn, nhập CSV và xuất dữ liệu | Tạo tháng 7/2026; chưa có bản phát hành ứng dụng có phiên bản. Bản phát hành trên GitHub là gói âm thanh, không phải mốc phát hành ứng dụng |
| [Openlet](https://github.com/ChloeVPin/openlet) | Ứng dụng web MIT có FSRS, nhập CSV, che vùng ảnh và tài liệu kiến trúc Supabase/Vercel | Chưa có bản phát hành gắn tag; tài liệu chính thức chưa xác định đầy đủ phạm vi ngoại tuyến, xuất dữ liệu và khôi phục khi tự triển khai |
| [Prep](https://github.com/Zamua/prep-app) | Mã nguồn MIT, FSRS, dịch vụ dùng sẵn và tài liệu triển khai trên môi trường chạy celld có thể tự triển khai | Chưa có bản phát hành gắn tag; tự triển khai còn bao gồm vận hành celld và lưu trữ đối tượng, không phải chỉ triển khai một tệp ứng dụng thẻ ghi nhớ độc lập |
| [Kado](https://github.com/LisandroDiMeo/kado-app) | Ứng dụng di động Kotlin GPLv3, FSRS/SM-2, bản phát hành Android và nhập APKG có mẫu thẻ, đa phương tiện | Tạo trong năm 2026; iOS cần build từ mã nguồn; tài liệu chính thức chưa xác định cơ chế đồng bộ tổng quát giữa các điện thoại |

Một số cái tên quen thuộc không đạt tiêu chí vì lý do đơn giản hơn. [Kho mã nguồn mở](https://github.com/mochi-cards/open-source) của Mochi là tập hợp các tích hợp, không phải ứng dụng lõi. [Scholarsome](https://github.com/hwgilbert16/scholarsome#features-coming-soon) là mã nguồn mở và tự triển khai được, nhưng README chính thức vẫn đặt lặp lại ngắt quãng trong mục “Features coming soon” (Tính năng sắp có). [OpenCards](https://github.com/holgerbrandl/opencards) chưa phát hành kể từ [v2.5.1 vào tháng 1/2017](https://github.com/holgerbrandl/opencards/releases/tag/v2.5.1), và kho mã chưa có thay đổi mã nguồn từ năm 2018.

Nếu truy cập mã nguồn không phải yêu cầu bắt buộc, [bài so sánh rộng hơn về các lựa chọn thay Anki](/vi/blog/best-anki-alternatives/) có những sản phẩm đáp ứng nhu cầu khác.

## Kiểm tra chuyển dữ liệu ở năm lớp riêng biệt

Câu “nhập được Anki” gần như vô nghĩa nếu không có lời giải thích tiếp theo. Việc chuyển dữ liệu có thể thành công ở một lớp và thất bại ở bốn lớp còn lại.

| Lớp | Cần so sánh gì | Dấu hiệu thành công dễ gây hiểu lầm |
| --- | --- | --- |
| Nội dung thẻ | Mọi trường, dấu điền khuyết, nhãn, ký tự đặc biệt và ghi chú lặp | Tổng số thẻ gần khớp |
| Cấu trúc | Kiểu ghi chú, mẫu thẻ, các thẻ từ cùng một ghi chú được tạo ra và bộ thẻ lồng nhau | Nội dung mặt trước và sau xuất hiện ở đâu đó |
| Đa phương tiện | Ảnh và âm thanh được sao chép, tham chiếu hoạt động cục bộ và phát được ngoại tuyến | Bộ nhập nhận ra tên tệp |
| Trạng thái học | Nhật ký ôn, trạng thái, ngày đến hạn, khoảng cách ôn, số lần quên và tham số bộ lập lịch | Thẻ đã nhập có mặt nhưng âm thầm bắt đầu lại như thẻ mới |
| Chuyển đi và khôi phục | Chức năng xuất hoặc sao lưu có tài liệu có thể dựng lại cùng hệ thống ở nơi khác | Tệp văn bản đọc được bị coi là bản sao lưu đầy đủ |

Trước khi chuyển bộ sưu tập thật, hãy tạo một bộ thẻ thử cố ý chứa các trường hợp khó. Thêm trường bổ sung, thẻ điền khuyết, mẫu xuôi và ngược, bộ thẻ lồng nhau, nhãn, ảnh, âm thanh và đủ lịch sử ôn để thấy nơi nhận có giữ lại hay không.

Giữ nguyên bản sao lưu nguồn. Sau khi nhập, so sánh riêng số ghi chú, số thẻ và số tệp đa phương tiện. Kiểm tra ngày đến hạn thay vì tin thông báo “đã nhập lịch ôn”. Ôn ngoại tuyến trên mọi thiết bị bạn dự định dùng. Sau đó tạo các chỉnh sửa thử gây xung đột trên hai thiết bị và quan sát cách đồng bộ xử lý.

Dùng song song hai hệ thống trong vài ngày. Xóa bộ sưu tập cũ là bước cuối cùng, không phải bằng chứng rằng hệ thống mới đã hoạt động tốt.

## Chỉ hoàn tất tự triển khai sau khi khôi phục thử

Các sản phẩm trên dùng “tự triển khai” cho những mô hình rất khác nhau:

- Anki và Mnemosyne chạy **dịch vụ đồng bộ**, còn ứng dụng đã cài vẫn là giao diện học.
- SiYuan Docker chạy **ứng dụng trình duyệt** mà các ứng dụng native không thể dùng làm máy chủ đồng bộ.
- Recall chạy **dịch vụ trung chuyển bản chụp mã hóa**, không chạy chính PWA.
- Nibomo triển khai **toàn bộ web và backend**, còn ứng dụng native vẫn được build riêng.
- Essentialist **không có máy chủ**; phần bạn sở hữu là các tệp cục bộ.

Khi đã rõ phạm vi đó, hãy thử phần người vận hành thường trì hoãn:

1. Tạo thẻ, đính kèm tệp đa phương tiện, hoàn thành các lượt ôn và đồng bộ từ hai ứng dụng khách.
2. Lưu lại mọi cơ sở dữ liệu, bucket lưu trữ đối tượng, tệp cục bộ, thông tin bí mật và giá trị cấu hình được tài liệu yêu cầu.
3. Khôi phục vào tài khoản trống, máy trống hoặc môi trường triển khai tách biệt.
4. So sánh số thẻ, đa phương tiện, lịch sử ôn tập, trạng thái đến hạn, đăng nhập và đồng bộ ứng dụng khách.
5. Nâng cấp bản đã khôi phục rồi hoàn thành thêm một chu kỳ ôn tập.

Nếu việc dựng lại vẫn phụ thuộc máy cũ, bạn có một dịch vụ đang chạy. Bạn chưa có bản sao lưu đã được kiểm chứng.

## Câu hỏi thường gặp

### Ứng dụng thẻ ghi nhớ mã nguồn mở tốt nhất năm 2026 là gì?

Anki là lựa chọn mặc định tốt nhất cho phần lớn người học. Nó kết hợp mô hình bộ sưu tập đã hoàn thiện, FSRS, hỗ trợ nhiều nền tảng và các định dạng sao lưu, xuất dữ liệu chính chủ phong phú nhất. Điều cần lưu ý là bản iOS và web chính thức không nằm trong kho mã nguồn mở của bản máy tính; máy chủ tự triển khai cung cấp đồng bộ thay vì học qua trình duyệt.

### Lựa chọn mã nguồn mở thay Anki tốt nhất là gì?

Mnemosyne là lựa chọn thay thế chuyên về học tập đã được sử dụng lâu năm nhất, với tài liệu chính thức về nhập kiểu thẻ tùy chỉnh và dữ liệu học từ Anki. Recall trông hiện đại hơn và nhập APKG trực tiếp trên máy tính, nhưng chuyển đổi hai trường đầu tiên của ghi chú, chỉ giữ bản chụp trạng thái lập lịch, nhập ảnh mà không nhập âm thanh và không mang theo đầy đủ nhật ký ôn tập.

### Tôi có thể tự triển khai Anki không?

Có, bạn có thể chạy máy chủ đồng bộ chính thức của Anki cho các ứng dụng tương thích. Nhưng đó không phải bản AnkiWeb tự triển khai: nó không có giao diện học trên trình duyệt.

### Mã nguồn mở có đồng nghĩa với ngoại tuyến không?

Không. Mã nguồn mở nói về giấy phép và quyền truy cập mã nguồn. Khả năng ngoại tuyến phụ thuộc nơi ứng dụng lưu dữ liệu và thao tác nào cần dịch vụ. Chiều ngược lại cũng đúng: ứng dụng có thể lưu dữ liệu cục bộ mà không công khai mã nguồn lõi.

### Tự triển khai có đảm bảo chuyển được dữ liệu đi nơi khác không?

Không. Tự triển khai cho bạn kiểm soát nơi dịch vụ chạy. Khả năng chuyển dữ liệu phụ thuộc chức năng xuất, bản sao lưu đầy đủ và quy trình khôi phục bạn đã thực sự thử. Cơ sở dữ liệu trên máy chủ riêng vẫn có thể khó chuyển, và bộ thẻ Markdown dễ đọc vẫn có thể thiếu trạng thái ôn tập lưu trong tệp bên cạnh.

## Khuyến nghị của tôi

Tiếp tục dùng hoặc chọn **Anki**, trừ khi một giới hạn của nó gây vấn đề thực tế. Chọn **Mnemosyne** để tập trung học cục bộ trên máy tính, với khả năng nhập Anki đã được sử dụng lâu năm. Dùng **SiYuan** khi thẻ ghi nhớ thuộc một kho kiến thức lớn hơn. Cân nhắc **Nibomo** khi quyền sở hữu toàn bộ mã nguồn web/native/backend đáng để bạn bỏ công vận hành hệ thống production trên AWS. Chọn **Recall** để có ứng dụng hiện đại ưu tiên dữ liệu cục bộ, sau khi thử các giới hạn chuyển đổi. Chọn **Essentialist** khi Markdown thuần và không truy cập mạng quan trọng hơn đồng bộ.

Ứng dụng thẻ ghi nhớ mã nguồn mở tốt nhất không phải kho mã có danh sách tính năng dài nhất. Đó là ứng dụng có phạm vi mã nguồn, dữ liệu ngoại tuyến, chuyển dữ liệu, đồng bộ, triển khai và khôi phục phù hợp với hệ thống bạn thực sự sẵn sàng tự quản lý.
