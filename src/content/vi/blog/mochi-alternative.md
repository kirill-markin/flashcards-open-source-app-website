---
title: "Đánh giá ứng dụng thẻ ghi nhớ Mochi (2026): Gói miễn phí, học ngoại tuyến và so sánh với Anki"
description: "Đánh giá Mochi có đối chiếu nguồn, bao gồm gói miễn phí, ứng dụng ngoại tuyến, ghi chú Markdown, FSRS, đồng bộ, nhập từ Anki, xuất dữ liệu và giới hạn tự triển khai."
date: "2026-03-18"
updated: "2026-09-07"
image: "/blog/mochi-alternative-v3.png"
keywords:
  - "thẻ ghi nhớ mochi"
  - "thẻ mochi"
  - "mochi so với anki"
  - "anki so với mochi"
  - "mochi có miễn phí không"
  - "mochi ngoại tuyến"
  - "giá mochi"
  - "triển khai mochi trên máy chủ"
  - "thẻ ghi nhớ markdown"
  - "lặp lại ngắt quãng mochi"
---

Mochi bắt đầu bằng một tài liệu Markdown, thay vì biểu mẫu mặt trước và mặt sau quen thuộc. Thêm một dòng gồm ba dấu gạch ngang, tài liệu sẽ có các mặt để ôn tập. Bạn có thể giữ nguyên nó làm ghi chú, liên kết với thẻ khác hoặc lưu trữ để vẫn tìm kiếm được mà không đưa vào hàng đợi ôn tập.

Dấu phân cách nhỏ đó cho thấy **thẻ ghi nhớ Mochi** phù hợp với ai. Mochi rất hợp với người muốn ghi chú và học theo phương pháp lặp lại ngắt quãng trong cùng một ứng dụng ưu tiên dữ liệu trên thiết bị, nhất là khi Markdown, liên kết ngược và cách ôn đơn giản với hai lựa chọn Nhớ/Quên đã quen thuộc. Ứng dụng kém thuyết phục hơn với người dùng Anki lâu năm có bộ sưu tập phụ thuộc vào các biến thể thẻ được tạo tự động, HTML/CSS tùy chỉnh, JavaScript, tiện ích bổ sung hoặc khả năng điều chỉnh chi tiết bộ lập lịch.

Nếu chỉ dùng một thiết bị, gói miễn phí không đơn thuần là bản dùng thử: bạn không cần đăng ký, và tài liệu Mochi cho biết có thể dùng ngoại tuyến không giới hạn. Điểm cần lưu ý là đồng bộ giữa các thiết bị thuộc **gói Pro 5 USD mỗi tháng**. Với người dùng Anki, cái giá khó chấp nhận hơn là những gì mất đi khi chuyển dữ liệu. Mochi có thể nhập gói Anki cùng lịch sử ôn tập, nhưng không thể giữ nguyên mọi mẫu thẻ, kiểu định dạng, đoạn mã, cài đặt bộ lập lịch hay hành vi của tiện ích bổ sung.

> **Thông tin về tác giả:** Tôi là Kirill Markin, người phát triển [Nibomo](/vi/). Đây là bài đánh giá cách sử dụng dựa trên việc đối chiếu nguồn, không phải lời khẳng định rằng tôi đã trực tiếp thử nghiệm sản phẩm. Bài viết không có liên kết tiếp thị liên kết. Mochi và Anki vẫn là hai đối tượng so sánh chính; sản phẩm của tôi chỉ xuất hiện gần cuối bài như một lựa chọn thay thế được nêu rõ.

**Thông tin được kiểm chứng ngày:** 7 tháng 9 năm 2026. Tại thời điểm đó, [bản phát hành Mochi](https://mochi.cards/changelog/) mới nhất được công bố là phiên bản 26.8.2, đề ngày 10 tháng 8 năm 2026. Giá và thông tin trên các kho ứng dụng có thể thay đổi.

![Một người phục chế sách thử một dải thẻ nhỏ nối liền nhau, gấp kiểu đàn xếp, trong khi tài liệu gốc vẫn được cất an toàn trong hộp](/blog/mochi-alternative-v3.png)

## Đánh giá ngắn gọn

- **Chọn Mochi** nếu bạn muốn ghi chú Markdown và thẻ ở cùng một nơi, dùng ngoại tuyến trên một thiết bị không cần tài khoản, có liên kết ngược và chỉ hai lựa chọn khi ôn tập.
- **Chọn Anki** nếu bạn cần các kiểu ghi chú đã hoàn thiện, mẫu HTML/CSS, tiện ích bổ sung, dịch vụ đồng bộ miễn phí, bốn mức đánh giá khi ôn tập hoặc khả năng điều chỉnh FSRS sâu hơn.
- **Chưa nên chuyển** nếu bạn đã ôn tập đều đặn và không chỉ ra được vấn đề cụ thể trong cách học mà Mochi sẽ giải quyết. Giao diện mới chưa đủ lý do để đánh đổi nhiều năm dữ liệu lập lịch và thẻ tùy chỉnh.
- **Thử trước khi chuyển dữ liệu** nếu Anki đã là nơi lưu bộ sưu tập lâu năm của bạn. Mochi nhận tệp `.apkg` và có thể nhập lịch sử ôn tập, nhưng chuyển HTML thành Markdown, đồng thời loại bỏ CSS và JavaScript.

## So sánh nhanh Mochi và Anki

| Tiêu chí lựa chọn | Mochi | Anki |
|---|---|---|
| Phù hợp nhất với | Người dùng ghi chú liên kết và Markdown muốn đặt ghi chú cạnh thẻ ôn tập | Người học muốn một hệ thống thẻ ghi nhớ đã hoàn thiện và có thể tùy chỉnh |
| Tạo thẻ | Tài liệu Markdown có nhiều mặt khi thêm `---`; cũng hỗ trợ trường và mẫu thẻ | Ghi chú chứa các trường; mẫu HTML/CSS tạo ra một hoặc nhiều thẻ |
| Quy trình ôn tập | Thẻ mới vào giai đoạn học trước; thẻ đã học dùng Forgot (Quên) / Remembered (Nhớ) | Thẻ dùng Again (Ôn lại) / Hard (Khó) / Good (Tốt) / Easy (Dễ) |
| Lập lịch | Mặc định dùng thuật toán riêng của Mochi; FSRS là tùy chọn | FSRS hoặc SM-2 cũ, với nhiều công cụ điều chỉnh FSRS hơn |
| Sử dụng miễn phí | Không cần đăng ký, dùng ngoại tuyến không giới hạn | Ứng dụng máy tính và đồng bộ AnkiWeb miễn phí; ứng dụng iOS chính thức có trả phí |
| Đồng bộ giữa thiết bị | Pro, 5 USD mỗi tháng | Miễn phí qua AnkiWeb |
| Nền tảng | Web, macOS, Windows, Linux, iOS, Android | Windows, macOS, Linux, AnkiWeb, AnkiMobile chính thức, AnkiDroid phát triển độc lập |
| Định dạng chuyển dữ liệu | Xuất theo định dạng riêng `.mochi`, Markdown và CSV | Định dạng riêng `.colpkg` và `.apkg`, cùng văn bản phân cách bằng tab |
| Giới hạn về dữ liệu và triển khai | Ưu tiên dữ liệu trên thiết bị; ứng dụng cốt lõi không được giới thiệu là mã nguồn mở, và không có tài liệu về dịch vụ đồng bộ tự triển khai được hỗ trợ | Kho mã nguồn chính dùng giấy phép AGPL; có tài liệu chính thức về máy chủ đồng bộ tự triển khai |

Điểm khác biệt giúp bạn lựa chọn là **sự đơn giản khi lấy ghi chú làm trung tâm so với khả năng kiểm soát toàn bộ bộ sưu tập**.

## Giao diện Mochi được xây dựng quanh điều gì?

Giao diện Mochi dễ hiểu hơn khi bạn theo dõi một thẻ từ lúc tạo đến lúc ôn.

Mỗi thẻ thuộc về một bộ thẻ. Nhấn **New Card (Thẻ mới)**, bạn sẽ có vùng soạn thảo Markdown thay vì các ô câu hỏi và câu trả lời cố định. Một thẻ có thể chứa tiêu đề, danh sách, mã, hình ảnh, trường có cấu trúc và liên kết. Thêm `---` giữa các khối để tạo hai hoặc nhiều mặt ôn tập. Dùng cặp ngoặc vuông kép `[[double brackets]]` để tham chiếu đến thẻ khác; Mochi tự động tạo liên kết ngược. [Tài liệu tổng quan về thẻ](https://mochi.cards/docs/cards/) chính thức cũng mô tả các mẫu dùng phần giữ chỗ để hiển thị giá trị của trường có cấu trúc.

Thẻ có thể làm hai việc mà không cần nằm trong hai hệ thống riêng:

- thẻ ôn tập có các mặt và được đưa vào lịch ôn theo phương pháp lặp lại ngắt quãng;
- ghi chú tham khảo có thể ở nguyên trong bộ thẻ và được lưu trữ, tức là bị loại khỏi hàng đợi thẻ mới và thẻ đến hạn mà không xóa nội dung, nhãn, liên kết hay lịch sử.

[Các chế độ xem bộ thẻ](https://mochi.cards/docs/decks/custom-views/) là tổ hợp bộ lọc, cách sắp xếp và bố cục được lưu lại. Bạn có thể dùng chế độ lưới để duyệt thẻ hằng ngày, rồi tạo chế độ xem khác theo nhãn, trạng thái đến hạn, tỷ lệ ghi nhớ thấp hoặc lần ôn gần đây. Mochi cũng cho phép biến một chế độ xem thành buổi ôn cấp tốc mà không thay đổi lịch ôn thông thường hay lịch sử ôn tập. Điều này cụ thể hơn việc gọi giao diện là “gọn gàng”: cùng một bộ thẻ có thể đóng vai trò sổ ghi chú, cơ sở dữ liệu có bộ lọc và hàng đợi học tập.

[Ôn tập hằng ngày](https://mochi.cards/docs/getting-started/reviewing-cards/) có hai giai đoạn. Trong **New cards (Thẻ mới)**, bạn thêm thẻ vào lịch ôn hoặc chọn Again (Ôn lại) để sớm thấy lại thẻ đó. Sau khi đã học, thẻ đến hạn sẽ hiện mặt tiếp theo và yêu cầu chọn **Forgot (Quên)** hoặc **Remembered (Nhớ)**. Nếu bạn quên, Mochi dùng hàng đợi ôn lại trước khi đặt lại tiến độ. Như vậy, ứng dụng chủ ý giữ số lựa chọn lúc ôn ở mức tối thiểu.

## Mochi có miễn phí không, và những gì dùng được ngoại tuyến?

Có, nhưng “miễn phí” và “ngoại tuyến” có ý nghĩa khác nhau tùy nơi bạn chạy ứng dụng. [Bảng giá Mochi](https://mochi.cards/) tại thời điểm kiểm chứng liệt kê:

- **Free (Miễn phí):** 0 USD mãi mãi, không cần đăng ký, dùng ngoại tuyến không giới hạn.
- **Pro:** 5 USD mỗi tháng, bổ sung đồng bộ giữa các thiết bị, xuất bản bộ thẻ, trường động, tích hợp AI và hỗ trợ qua email.

Mochi chạy trên macOS, Windows, Linux, iOS, Android và web. [Hướng dẫn tải và cài đặt](https://mochi.cards/docs/getting-started/download-and-install/) nêu rõ giới hạn thực tế:

| Nơi sử dụng | Ý nghĩa của miễn phí và ngoại tuyến |
|---|---|
| Ứng dụng cài trên máy tính hoặc điện thoại | Bạn có thể dùng Mochi ngoại tuyến không cần tài khoản. Dữ liệu lưu trên thiết bị, nên chỉ một ứng dụng đã cài cũng đủ để bạn học hoàn toàn miễn phí. |
| Ứng dụng web không có Pro | Nội dung được giữ trong bộ nhớ ngoại tuyến của trình duyệt. Mochi cảnh báo rằng trình duyệt có thể xóa dữ liệu này mà không báo trước. |
| Cùng một bộ sưu tập trên nhiều thiết bị | Đồng bộ tự động giữa các thiết bị là tính năng Pro, dù mỗi ứng dụng đã cài đều có thể hoạt động ngoại tuyến. |

Dùng ngoại tuyến và đồng bộ là hai cam kết riêng. Bạn không cần Pro chỉ để tạo thẻ hoặc ôn tập trong ứng dụng đã tải về. Bạn cần Pro nếu muốn bộ sưu tập luôn cập nhật tự động theo mình từ máy tính xách tay sang điện thoại. Với dữ liệu quan trọng trong gói miễn phí, hãy giữ bản sao lưu theo định dạng riêng của ứng dụng, thay vì để thiết bị, đặc biệt là bộ nhớ trình duyệt, giữ bản duy nhất.

Nếu khả năng hoạt động ngoại tuyến quyết định lựa chọn, hãy đối chiếu cách dùng trên từng thiết bị trong bài [Anki có hoạt động ngoại tuyến không?](/blog/does-anki-work-offline/) và [hướng dẫn tổng quan về ứng dụng thẻ ghi nhớ ngoại tuyến](/blog/best-offline-flashcards-app/).

## Thẻ ghi nhớ Markdown mới là lý do chính để chọn Mochi

Lợi thế thực sự của Mochi nằm ở cách Markdown thay đổi nội dung gốc mà bạn soạn và cập nhật.

Thẻ Mochi vẫn đọc được dưới dạng văn bản. Cùng một tài liệu có thể chứa lời giải thích ngắn, khối mã, liên kết tới ý tưởng liên quan và dấu phân cách giữa các mặt ôn tập. Thẻ cũng có thể dùng trường và mẫu khi bạn cần lặp lại một cấu trúc. Khi áp dụng mẫu, Mochi hiển thị Markdown của mẫu với các phần giữ chỗ cho trường và bỏ qua Markdown riêng của thẻ trong lúc hiển thị, nhưng không xóa nó.

Anki bắt đầu từ mô hình khác. Ghi chú lưu các trường, còn [mẫu thẻ](https://docs.ankiweb.net/templates/intro.html) quyết định trường nào xuất hiện và thẻ nào được tạo. Mẫu dùng HTML, với CSS để định dạng. Vì thế, một ghi chú từ vựng có thể tạo cả thẻ nhận biết và thẻ yêu cầu tự nhớ ra từ, trong khi dữ liệu gốc vẫn nằm ở một nơi.

Cấu trúc đó cho Anki nhiều khả năng hơn về bố cục có điều kiện, tạo biến thể thẻ, nhập câu trả lời bằng bàn phím, định dạng tùy chỉnh và mở rộng cách sử dụng bằng tiện ích bổ sung. Điều đó cũng có nghĩa Anki không phải ứng dụng thẻ ghi nhớ hỗ trợ Markdown ngay từ đầu. Muốn dùng Markdown với Anki, bạn cần thêm bước chuyển đổi hoặc tiện ích bổ sung.

Câu hỏi thực tế rất đơn giản: bạn muốn một ghi chú có thể trở thành thẻ, hay một kiểu ghi chú có cấu trúc có thể tạo nhiều thẻ? Mochi tập trung vào cách thứ nhất. Anki tập trung vào cách thứ hai.

## Lặp lại ngắt quãng trong Mochi đã có FSRS

Những bài so sánh nói Mochi không có FSRS đã lỗi thời. Mochi thêm bản thử nghiệm FSRS năm 2025 và tiếp tục phát hành các bản sửa lỗi liên quan đến bộ lập lịch. Tuy vậy, [thuật toán riêng của Mochi vẫn là mặc định](https://mochi.cards/docs/reviewing/fsrs/).

Thuật toán mặc định thay đổi khoảng cách giữa các lần ôn bằng hệ số nhân cố định sau mỗi lần bạn nhớ hoặc quên. Chuyển sang FSRS trong Review Settings (Cài đặt ôn tập), các thẻ đã học sẽ chuyển sang FSRS mà không mất lịch sử. Bạn có thể đặt tỷ lệ ghi nhớ mục tiêu, nhập tham số tùy chỉnh và chuyển lại sau đó.

Mochi giữ hai mức đánh giá với cả hai bộ lập lịch:

- **Forgot (Quên)** tương ứng với Again (Ôn lại) của FSRS.
- **Remembered (Nhớ)** tương ứng với Good (Tốt) của FSRS.

Tài liệu Mochi cho biết cách đánh giá hai mức hoạt động với FSRS, nhưng mất một phần thông tin mà Hard (Khó) và Easy (Dễ) có thể cung cấp. Ứng dụng nhận tham số tùy chỉnh đã tối ưu nhưng không có công cụ tối ưu tích hợp; để tạo tham số cá nhân, bạn cần công cụ tối ưu FSRS bên ngoài và lịch sử ôn tập Mochi.

[Cài đặt FSRS của Anki](https://docs.ankiweb.net/deck-options.html#fsrs) đi xa hơn. Tỷ lệ ghi nhớ mong muốn và tham số có thể gắn với từng bộ thiết lập sẵn; công cụ tối ưu tích hợp có thể điều chỉnh tham số theo lịch sử ôn tập; công cụ mô phỏng ước tính số lượt ôn hoặc số phút học ở các thiết lập khác nhau. Anki cũng ghi nhận bốn kết quả: Again (Ôn lại), Hard (Khó), Good (Tốt) và Easy (Dễ).

Những nút bổ sung chỉ hữu ích nếu bạn dùng nhất quán. Tài liệu Anki coi Hard là đã nhớ ra thành công. Nhấn Hard khi đã quên câu trả lời sẽ truyền thông tin sai cho FSRS và có thể khiến khoảng cách giữa các lần ôn quá dài.

Chọn cách ôn hai mức của Mochi nếu hai lựa chọn nhớ/quên giúp bạn dễ quyết định hơn trong mỗi buổi học. Chọn Anki nếu bạn muốn thêm tín hiệu đánh giá và sẽ dùng công cụ tối ưu, điều chỉnh tỷ lệ ghi nhớ, bộ thiết lập sẵn hoặc công cụ mô phỏng khối lượng học. Nếu muốn so sánh bộ lập lịch thay vì ứng dụng, xem bài [FSRS so với SM-2](/blog/fsrs-vs-sm-2/).

## Chi phí của Mochi và Anki phát sinh ở những nhu cầu khác nhau

Nếu học trên một máy tính, cả hai ứng dụng đều có thể không tốn tiền. Chi phí xuất hiện ở những chỗ khác nhau khi bạn dùng thêm thiết bị.

Mochi thu **5 USD mỗi tháng** cho đồng bộ Pro, kèm xuất bản, trường động, tích hợp AI và hỗ trợ. Ứng dụng Anki trên máy tính miễn phí, và [website Anki chính thức](https://apps.ankiweb.net/) cho biết đồng bộ AnkiWeb miễn phí. AnkiMobile là ứng dụng chính thức có trả phí cho iPhone và iPad; AnkiDroid là ứng dụng Android miễn phí do nhóm độc lập phát triển.

Vì vậy, “Ứng dụng nào rẻ hơn?” phụ thuộc vào thiết bị của bạn:

- một máy tính: cả hai đều có thể miễn phí;
- nhiều máy tính hoặc thiết bị Android: dịch vụ đồng bộ miễn phí của Anki giúp bạn không phải trả phí thuê bao;
- iPhone hoặc iPad: Anki có khoản mua ứng dụng một lần, còn Mochi yêu cầu gói Pro trả phí định kỳ để đồng bộ giữa các thiết bị;
- người dùng Mochi vốn đã cần xuất bản, trường động hoặc tích hợp AI có thể xem đồng bộ là một phần của gói, thay vì toàn bộ lý do trả tiền.

Hãy kiểm tra App Store tại khu vực của bạn trước khi so sánh chính xác tổng chi phí trên iOS. Bài đánh giá này không đưa ra một mức giá iOS cố định vì giá trên kho ứng dụng có thể khác nhau giữa các thị trường.

## Triển khai Mochi trên máy chủ khác với ưu tiên dữ liệu trên thiết bị

Ba khái niệm thường bị gộp làm một:

- **Ưu tiên dữ liệu trên thiết bị (local-first)** nghĩa là bản dữ liệu đang dùng nằm trên thiết bị của bạn và ứng dụng có thể tiếp tục hoạt động mà không cần dịch vụ đám mây của nó.
- **Mã nguồn mở** nghĩa là mã nguồn được cung cấp theo giấy phép cho phép xem xét và chỉnh sửa.
- **Tự triển khai** nghĩa là sản phẩm có tài liệu hướng dẫn một phương án được hỗ trợ để chạy dịch vụ liên quan trên hạ tầng của bạn.

Mochi mô tả rõ cách hoạt động ưu tiên dữ liệu trên thiết bị. Ứng dụng cốt lõi không được giới thiệu là mã nguồn mở: liên kết “Open source” (Mã nguồn mở) ở chân trang website công khai dẫn đến [một tập hợp các tích hợp](https://github.com/mochi-cards/open-source), không phải ứng dụng cốt lõi. Website chính thức cũng không có tài liệu về phương án tự triển khai được hỗ trợ để thay thế đồng bộ Pro.

Nếu tìm **cách triển khai Mochi trên máy chủ** vì muốn có máy chủ riêng, giới hạn nằm ở đây: bạn có thể giữ dữ liệu trên thiết bị và bản sao lưu theo định dạng riêng, nhưng phương án dùng nhiều thiết bị được tài liệu hướng dẫn là Mochi Pro. Ưu tiên dữ liệu trên thiết bị giúp kiểm soát dữ liệu, nhưng không đồng nghĩa với tự triển khai.

Kho mã nguồn chính của Anki [dùng giấy phép AGPL phiên bản 3 trở lên](https://github.com/ankitects/anki/blob/main/LICENSE), với một số thành phần có ngoại lệ được liệt kê. Tài liệu chính thức cũng hướng dẫn [máy chủ đồng bộ tự triển khai](https://docs.ankiweb.net/sync-server.html) cho người dùng nâng cao. Máy chủ này thay thế đồng bộ AnkiWeb cho các ứng dụng khách tương thích; nó không phải bản website AnkiWeb tự triển khai. Anki yêu cầu người vận hành tự xử lý các vấn đề về dòng lệnh, mạng, tường lửa, giao thức và cập nhật.

## Nhập từ Anki giữ lại những gì, và thay đổi những gì?

Theo [tài liệu nhập dữ liệu](https://mochi.cards/docs/import-and-export/importing/), Mochi nhận tệp Anki `.apkg`, bao gồm lịch sử ôn tập. Nhưng “đã nhập” và “tương đương” là hai kết quả khác nhau.

Khi nhập, Mochi chuyển HTML thành Markdown và loại bỏ CSS cùng JavaScript. Đây là chuyển đổi định dạng giữa hai mô hình thẻ khác nhau. Nội dung mặt trước/mặt sau đơn giản là trường hợp dễ nhất. Thẻ phụ thuộc vào định dạng, logic mẫu, tương tác nhập bằng bàn phím hoặc JavaScript cần được kiểm tra sau khi nhập.

Lịch sử ôn tập cũng cần được chọn rõ ràng lúc xuất. [Hướng dẫn xuất dữ liệu](https://docs.ankiweb.net/exporting.html) của Anki cho biết **Include Scheduling Information (Bao gồm thông tin lập lịch)** quyết định lịch sử ôn tập có được đưa vào gói hay không. Nếu tắt tùy chọn đó, Mochi không thể khôi phục lịch sử mà tệp `.apkg` chưa từng chứa.

Ngay cả khi lịch sử được chuyển sang, đừng kỳ vọng các ngày đến hạn ôn tập sau này sẽ giống hệt. Hai ứng dụng có thể dùng bộ lập lịch, mức đánh giá, tỷ lệ ghi nhớ mục tiêu, tham số, bước học và cài đặt bộ thẻ khác nhau. Những lượt ôn được giữ lại cung cấp dữ liệu cho bộ lập lịch mới; chúng không khiến hai hệ thống trở nên giống nhau.

## Sao lưu theo định dạng riêng và xuất văn bản phục vụ hai mục đích khác nhau

Trước khi chuyển bất cứ dữ liệu nào, hãy giữ bản sao lưu có thể khôi phục hệ thống gốc. Tệp xuất đọc được rất hữu ích, nhưng không phải lúc nào cũng khôi phục được đầy đủ.

[Hướng dẫn sao lưu](https://mochi.cards/docs/getting-started/backing-up/) của Mochi nêu hai phương án bảo toàn dữ liệu theo định dạng riêng:

- Sao chép toàn bộ thư mục người dùng sẽ giữ nội dung, lịch sử ôn tập, tệp đính kèm, cài đặt ứng dụng và trạng thái đăng nhập.
- Tệp xuất `.mochi` giữ bộ thẻ, thẻ, mẫu và trường, tệp đính kèm, nhãn và siêu dữ liệu, lịch sử ôn tập, thứ tự thẻ và cấu trúc bộ thẻ.

[Tệp xuất Markdown và CSV](https://mochi.cards/docs/import-and-export/exporting/) của Mochi là các định dạng để mang nội dung sang công cụ khác. Markdown tạo một tệp cho mỗi thẻ và thư mục cho các bộ thẻ con, nhưng bỏ lịch sử ôn tập, thứ tự thẻ, mẫu và nhãn lưu trong siêu dữ liệu, trừ khi nhãn đã nằm trong Markdown. CSV có thể xuất các trường của mẫu hoặc nội dung mặt trước/mặt sau đã được kết xuất, nhưng không giữ lịch sử ôn tập, mẫu hay nhãn lưu trong siêu dữ liệu, trừ khi nhãn được nhúng trong nội dung.

Anki cũng phân biệt tương tự:

- `.colpkg` xuất toàn bộ bộ sưu tập cùng thông tin lập lịch và có thể bao gồm tệp đa phương tiện. Nhập tệp này sẽ thay thế các thẻ trong bộ sưu tập Anki đích.
- `.apkg` xuất một bộ thẻ cùng các bộ thẻ con, với tùy chọn về thông tin lập lịch, bộ thiết lập sẵn và tệp đa phương tiện.
- Ghi chú dạng văn bản thuần dùng các trường phân cách bằng tab, có nhúng định dạng HTML. Chúng giữ nội dung có thể chỉnh sửa, không giữ đầy đủ cách hoạt động của bộ sưu tập.

Chuyển từ Mochi về Anki thường dùng CSV. Anki có thể [ánh xạ cột văn bản sang trường của ghi chú](https://docs.ankiweb.net/importing/text-files.html), nhưng liên kết Mochi, cách hoạt động của thẻ nhiều mặt, mẫu và lịch sử ôn tập không được chuyển thành các đối tượng tương đương trong Anki chỉ qua tệp đó. Hãy giữ tệp xuất `.mochi` ngay cả sau khi bản sao trong Anki có vẻ đã đúng.

## Thử với một bộ thẻ tiêu biểu và giữ đường quay lại

Thông báo nhập dữ liệu thành công chỉ chứng minh rằng ứng dụng đã nhận tệp. Nó không chứng minh bộ sưu tập thực tế của bạn vẫn hoạt động, hay bạn có thể mang nội dung còn dùng được trở về. Hãy thử cả hai chiều trong khi hồ sơ Anki thường dùng vẫn được giữ nguyên.

1. **Sao lưu toàn bộ Anki.** Xuất `.colpkg` kèm tệp đa phương tiện và lưu bên ngoài hồ sơ đang dùng.
2. **Xác nhận bản sao lưu mở được.** Tạo một hồ sơ Anki tạm thời trống và nhập `.colpkg` vào đó. Nhập gói bộ sưu tập sẽ thay thế bộ sưu tập đích, vì thế cần dùng hồ sơ tạm.
3. **Tạo bộ thẻ tiêu biểu trong hồ sơ tạm đó.** Giữ số lượng đủ nhỏ để kiểm tra từng thẻ, nhưng bao gồm các chức năng bạn dựa vào: thẻ cơ bản và thẻ đảo chiều, thẻ điền chỗ trống, mẫu tùy chỉnh, CSS, JavaScript, hình ảnh, âm thanh, phương trình, nhãn, bộ thẻ lồng nhau và lịch sử ôn tập.
4. **Xuất bộ thẻ đó thành `.apkg`.** Bao gồm thông tin lập lịch, bộ thiết lập sẵn và tệp đa phương tiện nếu chúng quan trọng. Những tùy chọn này đưa dữ liệu vào gói Anki; chúng không cam kết Mochi sẽ tái hiện mọi thiết lập.
5. **Nhập vào một bộ thẻ Mochi mới.** Giữ nguyên hồ sơ Anki thường dùng và hàng đợi thẻ đến hạn của nó.
6. **Kiểm tra trước khi ôn.** So sánh nội dung, định dạng, trường, tệp đa phương tiện, nhãn, cấu trúc bộ thẻ và lịch sử. Đặc biệt chú ý những phần phụ thuộc vào HTML, CSS, JavaScript hoặc biến thể thẻ được tạo tự động.
7. **Chủ động chọn bộ lập lịch.** Mochi bắt đầu bằng thuật toán riêng. Chỉ bật FSRS nếu đó là lựa chọn bạn định dùng sau khi thử.
8. **Ôn bản sao trong một tuần bình thường.** Đánh giá cách chỉnh sửa Markdown, giai đoạn New cards (Thẻ mới), lựa chọn Remembered/Forgot (Nhớ/Quên), khả năng hoạt động ngoại tuyến và, nếu đã trả phí, đồng bộ trên các thiết bị bạn thực sự mang theo.
9. **Thử đường quay lại.** Xuất bộ thẻ thử nghiệm Mochi thành `.mochi` để có bản sao lưu theo định dạng riêng, đồng thời xuất CSV cho Anki. Dùng CSV chứa giá trị trường nếu cần các trường để tái sử dụng; dùng CSV chứa nội dung các mặt đã kết xuất nếu chủ yếu cần nội dung mặt trước/mặt sau nhìn thấy được. Nhập CSV đó vào một hồ sơ Anki trống khác và ánh xạ các cột sang kiểu ghi chú phù hợp.
10. **Ghi lại từng phần dữ liệu hoặc chức năng bị mất mà bạn chấp nhận.** Kiểm tra chiều đi và chiều về riêng biệt. Định dạng chính xác, cách hoạt động của thẻ nhiều mặt, hành vi của tiện ích bổ sung, biến thể thẻ được tạo tự động, mức đánh giá ôn tập, lịch sử hoặc ngày đến hạn trong tương lai có thể quan trọng hơn trong sử dụng hằng ngày so với lúc đọc bảng so sánh.

Quay về bằng CSV là chuyển nội dung, không phải khôi phục Mochi đầy đủ: tệp không mang theo lịch sử ôn tập, mẫu hay nhãn lưu trong siêu dữ liệu, trừ khi nhãn đã được nhúng trong nội dung. Nếu Mochi không giải quyết được vấn đề bạn đã xác định, hãy xóa bộ thẻ thử nghiệm và tiếp tục với hồ sơ Anki gốc. Nếu có, hãy chuyển từng bộ thẻ thật và giữ bản sao lưu Anki `.colpkg` cùng Mochi `.mochi` qua vài chu kỳ ôn tập bình thường.

## Ai nên dùng thẻ ghi nhớ Mochi?

Mochi phù hợp khi:

- Markdown đã là cách bạn viết và tư duy;
- ghi chú và thẻ ôn tập cần nằm trong cùng một không gian làm việc có liên kết;
- bạn muốn lựa chọn đơn giản Nhớ/Quên thay vì bốn mức đánh giá;
- dùng ngoại tuyến trên một thiết bị đã đủ đáp ứng nhu cầu học miễn phí của bạn, hoặc đồng bộ Pro đáng giá 5 USD mỗi tháng;
- bộ sưu tập của bạn còn mới hoặc đủ đơn giản để việc chuyển từ Anki ít rủi ro.

Hãy tiếp tục dùng Anki khi:

- các kiểu ghi chú của bạn tạo ra nhiều biến thể thẻ quan trọng;
- mẫu HTML/CSS, JavaScript, tiện ích bổ sung hoặc bộ thẻ chia sẻ là một phần của hệ thống;
- đồng bộ miễn phí giữa các thiết bị quan trọng hơn soạn thẻ bằng Markdown;
- bạn muốn công cụ tối ưu FSRS, điều chỉnh bộ thiết lập sẵn, bốn mức đánh giá và công cụ mô phỏng khối lượng học của Anki;
- nhiều năm dữ liệu ôn tập và các chức năng tùy chỉnh đã hoạt động tốt.

Lựa chọn thay thế Mochi hợp lý nhất phụ thuộc vào lý do cả hai ứng dụng đều không phù hợp. Với một bộ sưu tập mới, đơn giản hơn, [các tính năng của Nibomo](/vi/features/) bao gồm ôn tập FSRS, học ngoại tuyến và đồng bộ, chuyển thẻ/nhãn/tệp đa phương tiện giữa các môi trường, truy cập qua tác nhân AI và phương án tự triển khai có tài liệu hướng dẫn. Tôi là người phát triển sản phẩm này, và bạn cần biết các giới hạn: nó không thay thế sổ ghi chú Markdown có liên kết của Mochi hay hệ thống mẫu và tiện ích bổ sung đã hoàn thiện của Anki. [Hướng dẫn bắt đầu](/docs/getting-started/) trình bày các cách sử dụng hiện có qua dịch vụ do chúng tôi vận hành, ứng dụng di động, tác nhân AI và tự triển khai.

## Kết luận

Mochi không chỉ là một giao diện Anki đẹp hơn. Ý tưởng cốt lõi là một ghi chú Markdown có thể vừa là mục kiến thức liên kết với các ghi chú khác, vừa là thẻ ôn tập theo phương pháp lặp lại ngắt quãng. Gói miễn phí đáp ứng việc dùng ngoại tuyến không cần tài khoản; Pro bổ sung các tính năng qua dịch vụ máy chủ, trong đó có đồng bộ giữa các thiết bị.

Đó là sự đánh đổi hợp lý với người học bắt đầu một bộ sưu tập mới lấy Markdown làm trung tâm. Chuyển từ Anki cũng có thể đáng công nếu thử nghiệm với bộ thẻ tiêu biểu chứng minh rằng khả năng hỗ trợ Markdown trực tiếp và cách ôn hai mức giúp tháo gỡ những vướng mắc thực tế.

Với người đã có bộ sưu tập Anki lâu năm, cần có bằng chứng thuyết phục để chuyển. Hãy sao lưu bộ sưu tập, thử những thẻ có nhiều chức năng tùy chỉnh nhất và tiếp tục dùng Anki trừ khi Mochi cải thiện cách học hằng tuần đủ để bù lại những tính năng cụ thể về định dạng, mẫu, bộ lập lịch và hệ sinh thái mà bạn phải bỏ lại.
