---
title: "Ứng dụng thay thế RemNote năm 2026: Lựa chọn miễn phí và mã nguồn mở"
description: "So sánh các lựa chọn thay thế RemNote về ghi chú, PDF, thẻ, giá và tự triển khai. Xem dữ liệu nào chuyển được, điều gì mất đi và cách thử chuyển an toàn."
date: "2026-03-19"
updated: "2026-08-31"
image: "/blog/remnote-alternative.png"
keywords:
  - "ứng dụng thay thế remnote"
  - "các lựa chọn thay thế remnote"
  - "remnote mã nguồn mở"
  - "ứng dụng miễn phí thay thế remnote"
  - "remnote so với anki"
  - "ứng dụng mã nguồn mở thay thế remnote"
  - "ứng dụng tự triển khai thay thế remnote"
  - "ứng dụng thẻ ghi nhớ ngoại tuyến"
---

RemNote đặt tên cho tùy chọn xuất sang Anki là **Flashcards Only (Chỉ thẻ ghi nhớ)**. Các mục gạch đầu dòng không có thẻ sẽ bị bỏ qua, và gói xuất không chứa toàn bộ ghi chú liên kết, PDF hay quy trình học trong Reader của bạn. Một ứng dụng thay thế có thể nhận đủ mọi câu hỏi và câu trả lời mà vẫn bỏ lại hệ thống đã giúp những thẻ ấy trở nên hữu ích.

**Lựa chọn thay thế RemNote** tốt nhất là phương án giải quyết lý do bạn muốn rời đi mà không âm thầm loại bỏ phần RemNote vẫn đang làm tốt. Với một số người, lý do là giá. Với người khác, đó là nhu cầu lưu ghi chú dưới dạng tệp thông thường trên máy, có hệ thống thẻ chuyên sâu hơn hoặc có mã nguồn để tự vận hành.

> **Thông tin về tác giả:** Tôi là Kirill Markin, người phát triển [Nibomo](/vi/), một trong những sản phẩm được so sánh ở đây. Nibomo không thay thế hoàn toàn RemNote. Trong bài so sánh này, RemNote có quy trình tích hợp ghi chú và PDF tốt nhất, còn Anki có hệ thống thẻ và các định dạng chuyển dữ liệu hoàn thiện nhất.

**Thông tin và giá được kiểm chứng ngày:** 31 tháng 8 năm 2026. Giá nêu trong bài là giá công khai tại Mỹ, thanh toán theo năm ở những chỗ có ghi rõ; thuế, khu vực, kho ứng dụng và điều kiện beta có thể làm thay đổi số tiền.

![Một chuyên viên bảo quản tài liệu thử chuyển một phần nhỏ từ hồ sơ học tập có liên kết còn nguyên vẹn sang các hệ thống thẻ, tệp và khối riêng biệt](/blog/remnote-alternative.png)

## Bắt đầu từ lý do bạn muốn rời đi

- **Giá:** Kiểm tra xem RemNote Free đã đáp ứng cách học thực tế của bạn chưa. Gói này không giới hạn ghi chú, thẻ ghi nhớ và thiết bị đồng bộ, nhưng giới hạn số tài liệu có chú thích và một số tính năng nâng cao.
- **Cách dùng thẻ phụ thuộc quá nhiều vào ghi chú:** Thử Anki. Ứng dụng này đặt thẻ, mẫu thẻ, khả năng nhập dữ liệu và FSRS vào trung tâm của hệ thống.
- **Tệp ghi chú thông thường trên máy:** Chia công việc giữa Obsidian để lưu ghi chú Markdown và Anki để ôn tập. Hai phần ít gắn kết hơn, nhưng bạn biết rõ mình sở hữu và quản lý dữ liệu ở đâu.
- **Ghi chú liên kết mã nguồn mở, có PDF và thẻ tích hợp:** Logseq là phương án gần nhất trong bài, nhưng có một lưu ý lớn cho năm 2026: phiên bản cơ sở dữ liệu mới đang ở giai đoạn beta, ứng dụng iOS mới và đồng bộ thời gian thực đang ở alpha, còn ứng dụng Android mới chưa mở thử nghiệm.
- **Mã nguồn và khả năng tự triển khai một hệ thống tập trung vào thẻ:** Cân nhắc Nibomo nếu thẻ mặt trước/mặt sau là đủ và bạn chấp nhận bắt đầu lịch ôn mới, đồng thời đảm nhận khối lượng công việc vận hành AWS đáng kể.
- **Đọc PDF, liên kết đoạn tô sáng và dùng thẻ trong cùng một nơi:** Tiếp tục dùng RemNote. Không phương án nào khác tái tạo trọn vẹn quy trình đó.

Câu trả lời cuối cùng rất dễ bị bỏ qua. Chuyển ứng dụng không phải là tiến bộ nếu bạn có được giấy phép ưng ý hơn nhưng lại làm hỏng buổi học ngày mai.

## Các lựa chọn thay thế RemNote: bảng hỗ trợ quyết định

| Phương án | Lý do chính để chọn | Ghi chú và PDF | Bộ lập lịch | Ngoại tuyến và quyền sở hữu | Giá kiểm chứng ngày 31/8/2026 | Giới hạn chính khi chuyển dữ liệu |
|---|---|---|---|---|---|---|
| **Tiếp tục dùng RemNote** | Bạn cần ghi chú liên kết, đọc tài liệu nguồn và thẻ trong cùng một hệ thống | Kho kiến thức và Reader tích hợp, liên kết đoạn tô sáng PDF, ghi chú và thẻ | FSRS-6 beta, phải tự bật và có thể huấn luyện trọng số; SM-2 vẫn là mặc định | Máy tính và điện thoại dùng ngoại tuyến sau khi đăng nhập; máy tính có kho kiến thức chỉ lưu cục bộ | Miễn phí; Pro 8 USD/tháng, thanh toán theo năm; Pro with AI 18 USD/tháng, thanh toán theo năm | Định dạng xuất riêng phù hợp nhất để khôi phục vào RemNote, nhưng hiện không gồm hình ảnh và PDF |
| **Anki** | Ưu tiên thẻ, mẫu thẻ, tiện ích bổ sung và giữ nguyên bộ sưu tập | Không có không gian tích hợp để viết ghi chú liên kết hoặc đọc PDF | Các công cụ điều chỉnh FSRS đã hoàn thiện, tối ưu tham số, tỷ lệ ghi nhớ mong muốn và mô phỏng khối lượng ôn tập | Bộ sưu tập lưu cục bộ trên máy tính/điện thoại; phần lõi máy tính mã nguồn mở và máy chủ đồng bộ tự triển khai chính thức | Bản máy tính, AnkiWeb và AnkiDroid miễn phí; AnkiMobile chính thức là ứng dụng iOS trả phí | RemNote xuất thẻ sang `.apkg`, không xuất toàn bộ hệ thống ghi chú; cần thử nhập để kiểm tra dữ liệu lập lịch và nội dung đa phương tiện |
| **Obsidian + Anki** | Bạn muốn ghi chú Markdown thông thường trên máy mà vẫn có bộ lập lịch thẻ đã hoàn thiện | Obsidian quản lý ghi chú và tệp đính kèm cục bộ; Anki quản lý thẻ; không có một quy trình tích hợp từ đọc đến ôn | FSRS của Anki | Kho Markdown cục bộ cùng bộ sưu tập Anki cục bộ; Obsidian miễn phí nhưng là phần mềm độc quyền | Obsidian miễn phí; Sync tùy chọn từ 4 USD/tháng, thanh toán theo năm; giá Anki như trên | Xuất Markdown và Anki từ RemNote tạo ra hai hệ thống; các liên kết động giữa ghi chú, nguồn và thẻ trong RemNote không chuyển thành một quy trình thống nhất ở nơi khác |
| **Logseq** | Bạn cần ứng dụng ghi chú dạng dàn ý mã nguồn mở, có PDF và thẻ tích hợp | Các khối liên kết, chú thích PDF và ôn thẻ với bốn mức đánh giá | Bộ lập lịch tích hợp với bốn mức đánh giá; [tài liệu liên kết thuật toán mới](https://github.com/logseq/docs/blob/master/db-version.md#cards) tới dự án FSRS gốc | Ứng dụng theo giấy phép AGPL; dữ liệu phiên bản cơ sở dữ liệu có thể xuất thành SQLite, EDN hoặc Markdown tiêu chuẩn có mất thông tin | Ứng dụng mã nguồn mở miễn phí | Phiên bản cơ sở dữ liệu hiện tại ở beta; ứng dụng iOS mới và đồng bộ thời gian thực ở alpha, ứng dụng Android mới chưa mở thử nghiệm, và trạng thái SRS của Logseq cũ không tương thích với thuật toán thẻ mới |
| **Nibomo** | Bạn muốn thẻ đơn giản trong một hệ thống web/di động/backend mã nguồn mở | Không có kho kiến thức ghi chú, liên kết ngược, trình đọc PDF hay ứng dụng máy tính riêng | FSRS-6 với trọng số cố định và ít công cụ điều chỉnh hơn Anki hoặc RemNote | Web, iOS và Android ưu tiên ngoại tuyến; toàn bộ hệ thống theo giấy phép MIT, có hướng dẫn vận hành thực tế trên AWS | Ứng dụng do nhà cung cấp vận hành miễn phí trong beta; tự triển khai phát sinh chi phí hạ tầng và nhà cung cấp dịch vụ | Không nhập trực tiếp từ RemNote hay Anki; có thể dựng lại nội dung nhưng không chuyển được lịch sử ôn tập và trạng thái FSRS |

Đây không phải bảng chấm điểm tính năng. Một sinh viên học chủ yếu từ PDF có thể mất nhiều hơn được khi chuyển sang phương án “mở nhất”. Người chỉ có một bộ thẻ từ vựng đơn giản lại có thể đang trả tiền cho hệ thống ghi chú mình không còn dùng. Hãy bắt đầu từ dòng mô tả đúng nhu cầu của bạn, rồi thử xem giới hạn chuyển dữ liệu của phương án đó có chấp nhận được không.

Miễn phí và mã nguồn mở là hai tiêu chí riêng. RemNote Free và Obsidian không thu phí cho ứng dụng cốt lõi nhưng là phần mềm độc quyền. Phần lõi Anki trên máy tính, Logseq và Nibomo công khai mã nguồn; AnkiMobile vẫn là ứng dụng iOS trả phí, còn tự triển khai Nibomo vẫn phát sinh chi phí đám mây.

## Giữ RemNote khi giá trị nằm ở quy trình học liên kết

RemNote kết hợp những bước mà phần lớn ứng dụng thay thế tách riêng. [Reader](https://help.remnote.com/en/articles/6690975-learning-from-pdfs-and-files-with-the-remnote-reader) cho phép mở PDF cạnh ghi chú, chèn tham chiếu trỏ về đúng đoạn tô sáng, rồi biến ghi chú hoặc đoạn tô sáng thành thẻ ghi nhớ. Gói Free cho phép chú thích ba tài liệu; [trang giá](https://www.remnote.com/pricing) hiện tại ghi gói Pro không giới hạn số tài liệu có chú thích.

Bộ lập lịch cũng không còn là lý do rõ ràng để rời đi. RemNote hiện giới thiệu [FSRS-6](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) như một tùy chọn beta mà bạn phải tự bật. Sau ít nhất 1.000 lượt ôn, hệ thống có thể huấn luyện trọng số từ lịch sử của chính bạn. Anki vẫn cho phép điều chỉnh sâu hơn, nhưng người thích ghi chú và PDF trong RemNote không cần bỏ chúng chỉ để dùng FSRS.

Khả năng ngoại tuyến cũng vượt xa việc “dùng được trong một tab trình duyệt đang mở”. [Ứng dụng máy tính và di động](https://help.remnote.com/en/articles/6752029-offline-mode) của RemNote cho phép sửa ghi chú và ôn thẻ ngoại tuyến sau khi cài đặt và đăng nhập. Bản máy tính lưu đầy đủ hình ảnh và PDF trên máy. Bản di động và web có thể thiếu nội dung đa phương tiện chưa được lưu vào bộ nhớ đệm, và ứng dụng web không thể khởi động từ tab đã đóng hoặc vừa tải lại khi không có mạng.

Nếu bạn bắt đầu tìm kiếm vì cần **ứng dụng miễn phí thay thế RemNote**, hãy thử gói Free trước khi chuyển. Nếu vấn đề là quyền truy cập mã nguồn, chế độ cục bộ không đồng nghĩa với mã nguồn mở hay tự triển khai. Bài riêng về [việc RemNote có phải mã nguồn mở hay không](/blog/is-remnote-open-source/) giải thích rõ hơn giới hạn đó.

## RemNote so với Anki: lấy thẻ hay ghi chú làm trung tâm?

Điểm khác biệt hữu ích khi so sánh **RemNote với Anki** không phải là “có ghi chú hay không có ghi chú”. Anki cũng lưu ghi chú, nhưng một ghi chú Anki là tập hợp các trường mà [mẫu thẻ](https://docs.ankiweb.net/templates/intro.html) dùng để tạo thẻ ôn tập. RemNote bắt đầu từ tài liệu và các mục gạch đầu dòng có liên kết, rồi có thể biến chúng thành thẻ. Một bên là hệ thống tạo thẻ đã hoàn thiện; bên kia là không gian học xoay quanh ghi chú và tài liệu nguồn.

Chọn Anki khi các trường tùy chỉnh, biến thể thẻ được tạo tự động, mẫu HTML/CSS, tiện ích bổ sung hoặc nhiều năm lịch sử ôn tập là phần cốt lõi. [Cài đặt FSRS](https://docs.ankiweb.net/deck-options.html#fsrs) hiện tại gồm tối ưu tham số, tỷ lệ ghi nhớ mong muốn và mô phỏng khối lượng ôn tập. Các [định dạng xuất](https://docs.ankiweb.net/exporting.html) có thể giữ nguyên toàn bộ bộ sưu tập trong `.colpkg`, còn gói bộ thẻ `.apkg` có thể chứa thông tin lập lịch, cấu hình sẵn và nội dung đa phương tiện.

RemNote có đường chuyển sang Anki, nhưng tên tùy chọn rất quan trọng: [xuất Anki là “Flashcards Only”](https://help.remnote.com/en/articles/7898019-exporting-notes). Các mục gạch đầu dòng không có thẻ sẽ bị loại. RemNote giữ ngữ cảnh của mục cha trong thẻ xuất ra và đơn giản hóa cách hoạt động của thẻ trắc nghiệm khi xuất, nhưng tệp xuất không phải kho kiến thức, thư viện PDF hay toàn bộ quy trình đọc của bạn. Trang hướng dẫn xuất chính thức của RemNote cũng không hứa rằng mọi phần của trạng thái lập lịch sẽ đến được Anki. Hãy thử trước khi coi đây là cách chuyển không mất dữ liệu.

Anki là lựa chọn mạnh nhất ở đây nếu lấy thẻ làm trung tâm. Nó không thay thế RemNote Reader một cách trọn vẹn. Nếu vẫn chú thích bài báo và viết ghi chú liên kết, hãy kết hợp Anki với công cụ ghi chú thay vì ép nó đảm nhận vai trò đó. [Bài tổng hợp các ứng dụng thay thế Anki](/vi/blog/best-anki-alternatives/) giới thiệu thêm những lựa chọn tập trung vào thẻ.

## Obsidian kết hợp Anki: chủ động tách ghi chú và ôn tập

Một số người tìm ứng dụng thay thế RemNote không cần thêm một công cụ tất cả trong một. Họ muốn ghi chú vẫn là những tệp thông thường và hệ thống ôn tập có thể phát triển độc lập. Obsidian kết hợp Anki là cách tách hai phần đó rõ ràng.

[Obsidian lưu ghi chú](https://obsidian.md/help/Files%2Band%2Bfolders/How%2BObsidian%2Bstores%2Bdata) dưới dạng văn bản thuần có định dạng Markdown trong thư mục cục bộ. Ứng dụng miễn phí, không cần tài khoản; [Obsidian Sync](https://obsidian.md/pricing) tùy chọn có giá từ 4 USD mỗi tháng khi thanh toán theo năm. Obsidian không phải mã nguồn mở, nhưng bạn có thể đọc trực tiếp các tệp ghi chú và sao lưu bằng công cụ quản lý tệp thông thường.

Dùng bản xuất Markdown của RemNote cho phần ghi chú và bản xuất `.apkg` cho phần thẻ. Bạn sẽ cần chỉnh sửa lại một số thứ. Một dàn ý lồng nhau được xuất thành Markdown dễ đọc không tương đương với các tham chiếu động, portal, mẫu hay ghim PDF của RemNote. Khi ghi chú và thẻ nằm trong hai ứng dụng, các chỉnh sửa cũng không còn tự động truyền qua lại.

Phương án này phù hợp khi quyền kiểm soát tệp trên máy quan trọng hơn chu trình liền mạch “tô sáng, liên kết, tạo thẻ, ôn tập”. Sự đánh đổi này không đáng nếu chính chu trình đó là lý do bạn chọn RemNote.

## Logseq: ứng dụng ghi chú mã nguồn mở đang trong giai đoạn chuyển đổi

Logseq xứng đáng có mặt trong bài so sánh **ứng dụng mã nguồn mở thay thế RemNote** vì nó đặt ghi chú ở vị trí trung tâm. [Kho mã nguồn chính thức theo giấy phép AGPL](https://github.com/logseq/logseq) mô tả một ứng dụng quản lý kiến thức có các khối liên kết và chú thích PDF. [Tài liệu hiện tại của phiên bản cơ sở dữ liệu](https://github.com/logseq/docs/blob/master/db-version.md#cards) mô tả tính năng thẻ tích hợp: gắn nhãn cho một khối, xem khi nào đến hạn và ôn với bốn mức đánh giá.

Trạng thái hiện tại quan trọng hơn danh sách tính năng. Kho mã nguồn của Logseq cho biết phiên bản cơ sở dữ liệu ở beta, còn ứng dụng iOS mới và đồng bộ thời gian thực ở alpha; tài liệu hiện tại của phiên bản cơ sở dữ liệu cho biết ứng dụng Android chưa mở thử nghiệm alpha. Logseq cảnh báo rõ có thể mất dữ liệu và khuyến nghị dùng một đồ thị kiến thức thử nghiệm không quan trọng, kèm sao lưu. [Ghi chú thay đổi của phiên bản cơ sở dữ liệu](https://github.com/logseq/docs/blob/master/db-version-changes.md#high-level-changes) cũng cho biết thuật toán thẻ mới không nhập các thuộc tính hoặc dữ liệu SRS từ thẻ Logseq cũ.

Khả năng chuyển dữ liệu cũng cần được mô tả cẩn thận. [Tài liệu xuất dữ liệu của phiên bản cơ sở dữ liệu](https://github.com/logseq/docs/blob/master/db-version.md#export-and-import) hiện liệt kê SQLite kèm tệp tài nguyên, EDN và Markdown tiêu chuẩn. Tài liệu cho biết EDN là định dạng xuất có thể chỉnh sửa duy nhất giữ đầy đủ dữ liệu đồ thị, nhưng không khuyến nghị dùng EDN làm bản sao lưu duy nhất. Markdown tiêu chuẩn bỏ qua thuộc tính và dấu thời gian.

Vì vậy, Logseq đáng để đánh giá khi bạn cần cả mã nguồn mở, ghi chú liên kết, PDF và thẻ tích hợp. Nhưng vào tháng 8 năm 2026, tôi sẽ không dùng phương án này để chuyển toàn bộ kho kiến thức quan trọng của sinh viên y khoa chỉ trong một ngày. Hãy chạy nó song song với RemNote trước và đợi quá trình chuyển đổi hiện tại ổn định trên chính những thiết bị bạn sử dụng.

## Nibomo: mã nguồn mở toàn bộ hệ thống, phạm vi học gọn hơn

Nibomo chọn cách đánh đổi gần như ngược với RemNote. Các [tính năng](/vi/features/) tập trung vào thẻ Markdown mặt trước/mặt sau, bộ thẻ, nhãn, nội dung đa phương tiện, ôn tập FSRS, ứng dụng ưu tiên ngoại tuyến và soạn nháp thẻ với sự hỗ trợ của AI. Nó không có kho kiến thức ghi chú liên kết, trình đọc PDF, ứng dụng máy tính riêng hay công cụ nhập trực tiếp từ RemNote.

Phạm vi mã nguồn được công khai rất rộng: kho mã nguồn theo giấy phép MIT gồm web, iOS, Android, xác thực, backend, đồng bộ và hạ tầng. Phương án được hỗ trợ trong [hướng dẫn tự triển khai cho môi trường vận hành thực tế](/docs/self-hosting/) sử dụng AWS CDK. Đây không phải gói chạy cục bộ chỉ bằng một lệnh. Người vận hành phải tự trả chi phí đám mây, quản lý thông tin bí mật, cập nhật cấu trúc cơ sở dữ liệu, giám sát, sao lưu, thử khôi phục và biên dịch riêng các ứng dụng di động.

Chuyển dữ liệu là giới hạn lớn hơn với người đang dùng RemNote. Nibomo nhập gói `flashcards.zip` riêng, không nhập Markdown của RemNote hay `.apkg` của Anki. Các gói này chứa thẻ, nhãn và nội dung đa phương tiện được tham chiếu, nhưng không chứa lịch sử ôn tập, trạng thái FSRS, cài đặt không gian làm việc, toàn bộ cấu trúc bộ thẻ hay tài khoản. Bạn có thể dùng trò chuyện AI để chuyển văn bản đã xuất thành bản nháp thẻ rồi kiểm tra lại; đó là dựng lại nội dung, không phải tiếp tục bộ sưu tập cũ. [Hướng dẫn chuyển dữ liệu qua TXT](/blog/migrate-from-anki-txt-export-open-source-flashcards/) trình bày từng bước và những thông tin bị mất.

Chọn Nibomo cho không gian học thẻ mới hoặc đơn giản khi quyền truy cập mã nguồn toàn bộ hệ thống là điều quan trọng. Giữ RemNote để học với các nội dung liên kết, và chọn Anki khi cần giữ nguyên dữ liệu khi chuyển hoặc có cấu trúc thẻ phức tạp. Để so sánh riêng về hệ thống thẻ, xem [Anki so với Nibomo](/blog/anki-vs-flashcards-open-source-app/) và [hướng dẫn về ứng dụng thẻ ghi nhớ mã nguồn mở](/vi/blog/best-open-source-flashcard-apps-2026/).

## Những gì không chuyển trọn vẹn từ RemNote

RemNote có vài định dạng xuất hữu ích, nhưng không tệp nào có thể tái tạo toàn bộ sản phẩm ở nơi khác.

- **Bản xuất RemNote đầy đủ** là định dạng phù hợp nhất để khôi phục vào RemNote. Hiện nó không chứa hình ảnh và PDF.
- **Bản xuất Anki `.apkg`** chỉ chứa thẻ ghi nhớ. Các mục gạch đầu dòng không có thẻ sẽ bị bỏ qua, và kết quả không phải hệ thống ghi chú liên kết của bạn.
- **Markdown, HTML, OPML và văn bản** giúp nội dung dễ đọc hơn ở nơi khác. Chúng không khiến ứng dụng khác hiểu mọi mối liên hệ hay quy trình đặc thù của RemNote.
- **Đoạn tô sáng PDF và tài liệu nguồn** cần được kiểm tra riêng. RemNote Reader có thể tải xuống PDF kèm các đoạn tô sáng, nhưng đừng mặc định rằng bản xuất toàn bộ kho kiến thức chứa tệp đó.
- **Cài đặt, giao diện và plugin** không nằm trong bản sao lưu thủ công của RemNote, theo [tài liệu sao lưu](https://help.remnote.com/en/articles/6301627-remnote-backups).
- **Trạng thái ôn tập** cần được kiểm tra từng thẻ trong ứng dụng đích. Một lần nhập giữ nguyên câu hỏi và câu trả lời vẫn có thể khiến lịch ôn bắt đầu lại.

Đó là lý do “hỗ trợ Markdown” hay “nhập được Anki” chưa đủ. Khả năng chuyển dữ liệu có nhiều lớp: ghi chú đọc được, nội dung đa phương tiện dùng được, nguồn có liên kết, cấu trúc thẻ và lịch sử học.

## Thử chuyển trước khi hủy gói

Hãy đảm bảo có thể quay lại. Dành một giờ yên tĩnh lúc này vẫn ít tốn công hơn phát hiện thiếu PDF ngay trong tuần thi.

1. Tạo một bản xuất thủ công **RemNote (Complete)** mới và giữ nguyên tệp đó.
2. Trên máy tính, sao chép các bản sao lưu `.db.zip` cục bộ và thư mục `files`. Tải xuống những PDF gốc hoặc có chú thích mà bạn không thể thay thế.
3. Chọn một mẫu nhỏ nhưng có những trường hợp khó: ghi chú lồng nhau, tham chiếu, một PDF, hình ảnh, thẻ điền chỗ trống hoặc trắc nghiệm, nhãn và thẻ có lịch sử ôn tập đáng kể.
4. Xuất mẫu đó ở mọi định dạng mà phương án đang cân nhắc cần dùng, thường là Markdown cho ghi chú và `.apkg` cho Anki.
5. Nhập vào một kho ghi chú, đồ thị, hồ sơ người dùng hoặc không gian làm việc tạm có thể xóa sau khi thử. Đối chiếu trực tiếp với RemNote về số lượng, định dạng, liên kết, nội dung đa phương tiện, mặt trước và mặt sau của thẻ, cùng trạng thái đến hạn.
6. Dùng ngoại tuyến trên mọi thiết bị bạn dự định sử dụng. Sau đó kết nối lại và xác nhận các chỉnh sửa cùng lượt ôn đã đồng bộ đúng nơi.
7. Khôi phục bản sao lưu đầy đủ vào một kho kiến thức RemNote cục bộ tạm thời. Tệp lưu trữ đã tải xuống chỉ trở thành phương án khôi phục đáng tin sau khi bạn mở nó thành công.
8. Học bằng cả hai hệ thống trong ít nhất vài buổi thực tế. Chỉ hủy gói sau khi đã dùng ứng dụng thay thế để học hằng ngày, xuất dữ liệu và khôi phục thành công.

Giữ các bản xuất gốc ngay cả sau khi chuyển. Nhập thành công chỉ chứng minh khả năng tương thích với phiên bản hiện tại của ứng dụng đích, không bảo đảm bạn luôn truy cập được mọi phần của hệ thống cũ.

## Danh sách lựa chọn thực tế

- **Tiếp tục dùng RemNote** nếu giá trị nằm ở ghi chú liên kết và học từ PDF. Gói Free hoặc kho kiến thức chỉ lưu cục bộ có thể đã giải quyết được vấn đề.
- **Chọn Anki** nếu ưu tiên thẻ, mẫu thẻ, công cụ điều chỉnh FSRS và giữ nguyên dữ liệu khi chuyển.
- **Chọn Obsidian kết hợp Anki** nếu tệp ghi chú thông thường trên máy đáng để bạn dùng hai công cụ.
- **Đánh giá Logseq** nếu cần ghi chú liên kết mã nguồn mở và thẻ tích hợp, nhưng chỉ thử với dữ liệu không quan trọng trong lúc hệ thống cơ sở dữ liệu và đồng bộ hiện tại vẫn ở beta và alpha.
- **Chọn Nibomo** nếu một hệ thống thẻ mới, đơn giản và quyền truy cập mã nguồn toàn bộ hệ thống quan trọng hơn ghi chú, PDF hoặc việc tiếp tục lịch ôn cũ.

Tôi phát triển Nibomo, nhưng vẫn sẽ giữ RemNote cho sổ ghi chú liên kết dùng nhiều PDF, hoặc chọn Anki cho một bộ sưu tập phức tạp đã dùng lâu năm. Nibomo là lựa chọn có phạm vi hẹp hơn: thẻ mặt trước/mặt sau, hệ thống mã nguồn mở và lịch ôn mới.

Khi đã biết mình chấp nhận giới hạn nào, hãy chỉ thử phương án đó. Nếu Nibomo phù hợp, [hướng dẫn bắt đầu](/docs/getting-started/) chỉ ra cách dùng dịch vụ có sẵn và cách tự triển khai. Nếu không, tiếp tục dùng RemNote cũng là quyết định hợp lý.
