---
title: "Các lựa chọn thay thế Anki năm 2026: Bạn giữ được, mất đi và nhận thêm những gì?"
description: "So sánh bảy ứng dụng thay thế Anki về khả năng giữ nguyên dữ liệu khi chuyển, dùng ngoại tuyến, lịch ôn, giá, mã nguồn và tự triển khai; xem khi nào nên giữ Anki."
date: "2026-03-14"
updated: "2026-08-28"
image: "/blog/best-anki-alternatives.png"
keywords:
  - "ứng dụng thay thế Anki"
  - "lựa chọn thay thế Anki"
  - "ứng dụng giống Anki"
  - "ứng dụng mã nguồn mở thay thế Anki"
  - "ứng dụng miễn phí thay thế Anki"
  - "ứng dụng thay thế Anki cho iOS"
  - "chuyển dữ liệu từ Anki"
---

Một lần nhập dữ liệu Anki có thể hoàn tất mà không báo lỗi, nhưng vẫn làm mất những yếu tố khiến bộ thẻ của bạn hoạt động hiệu quả. Văn bản đã được chuyển sang, thẻ vẫn mở được. Nhưng rồi bạn nhận ra CSS đã biến mất, một trường âm thanh bị trống, mọi thẻ đều trở thành thẻ mới, hoặc một ghi chú không còn tạo ra các chiều hỏi–đáp như bạn mong đợi.

Đó mới là phần tốn kém khi so sánh các ứng dụng thay thế Anki. Trình soạn thảo gọn hơn hay gói dịch vụ rẻ hơn là những thứ dễ thấy trước khi chuyển. Cách mẫu thẻ hoạt động, lịch sử ôn tập, ngày đến hạn, tiện ích bổ sung, tệp đa phương tiện ngoại tuyến và khả năng xuất dữ liệu để chuyển đi tiếp thường chỉ lộ vấn đề khi đã quá muộn.

Bài so sánh này lấy khả năng giữ nguyên dữ liệu làm điểm xuất phát, xem xét bảy ứng dụng giống Anki, mỗi ứng dụng tiếp nhận được những gì từ bộ sưu tập hiện có, điều gì thay đổi sau khi nhập, và khi nào giữ Anki là lựa chọn an toàn hơn.

> **Thông tin về tác giả:** Tôi là Kirill Markin, người phát triển [Nibomo](https://nibomo.com/), một trong các sản phẩm bên dưới. Tôi đưa Nibomo vào vì mã nguồn mở, khả năng tự triển khai và quy trình làm việc với tác nhân AI. Điều đó không có nghĩa Nibomo mặc nhiên là lựa chọn tốt nhất: Nibomo không có chức năng nhập trực tiếp `.apkg`, việc chuyển từ Anki làm mất một phần dữ liệu, và vận hành hệ thống tự triển khai đòi hỏi công sức quản lý hạ tầng thực sự.

**Thông tin được kiểm tra ngày:** 28 tháng 8 năm 2026. Giá là mức công khai tại Mỹ hoặc mức giá địa phương được niêm yết vào ngày đó. Thuế, khu vực, ưu đãi giáo dục và cách thanh toán qua cửa hàng ứng dụng có thể làm thay đổi số tiền.

![Một thợ đồng hồ kiểm tra xem bộ máy đồng hồ bỏ túi đã dùng lâu năm có lắp vừa một chiếc vỏ khác hay không](/blog/best-anki-alternatives.png)

## Câu trả lời ngắn trước khi bạn chuyển bất cứ thứ gì

Mặc định, hãy giữ Anki. Chỉ chuyển khi ứng dụng khác giải quyết được một vấn đề lặp đi lặp lại đủ lớn để đáng công chuyển đổi.

Ba sản phẩm nhận gói Anki kèm dữ liệu học tập, nhưng phạm vi cam kết của mỗi sản phẩm khác nhau:

- **Mnemosyne** ghi rõ khả năng nhập đầy đủ từ Anki, bao gồm loại thẻ tùy chỉnh và dữ liệu học tập. Đây là lựa chọn gần nhất với cách làm việc truyền thống bằng ứng dụng máy tính mã nguồn mở, lưu dữ liệu cục bộ, dù không có ứng dụng iOS gốc.
- **Mochi** nhập tệp `.apkg` kèm lịch sử ôn tập. Ứng dụng chuyển HTML sang Markdown, loại bỏ CSS và JavaScript, đồng thời thay bốn nút đánh giá của Anki bằng Remembered (đã nhớ) hoặc Forgot (đã quên).
- **RemNote** nhập tệp `.apkg`, phần lớn loại ghi chú và lịch sử ôn tập. Hướng dẫn hiện tại cũng nói thẻ nhập vào sẽ nằm trong hàng đợi **Need to Learn** (cần học) riêng, nên đừng hiểu “đã nhập lịch sử ôn tập” là “đã sao chép chính xác hàng đợi Anki hôm nay”.

Bốn ứng dụng còn lại đòi hỏi dựng lại nội dung, chứ không chuyển nguyên bộ sưu tập:

- **Quizlet** hữu ích cho bộ học liệu công khai, lớp học, trò chơi và bài luyện tập có hướng dẫn.
- **Brainscape** cho nhóm học một cách ôn đơn giản hơn, dựa trên mức độ tự tin từ 1–5.
- **SuperMemo** đưa bạn sang phương pháp độc quyền và danh mục khóa học của họ.
- **Nibomo** cung cấp ứng dụng web và ứng dụng gốc theo giấy phép MIT, backend tự triển khai, API và quyền truy cập MCP. Quy trình TXT hoặc CSV có bước kiểm tra lại không giữ được trạng thái học tập từ Anki.

Nếu thẻ của bạn phụ thuộc vào cách hiển thị chính xác, tiện ích bổ sung hoặc hàng đợi ôn hiện tại, ở lại Anki không phải là thiếu quyết đoán. Đó chính là câu trả lời.

## Trước tiên, hãy kiểm kê những gì thật sự có trong bộ sưu tập Anki

Một “bộ thẻ” không phải là một đối tượng duy nhất có thể mang đi nguyên vẹn. Trước khi so sánh sản phẩm, hãy tách riêng các thành phần bạn có thể cần chuyển.

| Thành phần của bộ sưu tập | Những gì Anki có thể đưa vào gói xuất | Những gì ứng dụng đích phải hỗ trợ rõ ràng |
| --- | --- | --- |
| **Nội dung ghi chú** | Các trường văn bản và HTML đã lưu | Ánh xạ trường, thẻ điền khuyết, văn bản ngoài hệ chữ Latin, mã và ngắt dòng |
| **Tạo thẻ** | Loại ghi chú và mẫu thẻ | Thẻ xuôi/ngược, trường tùy chỉnh, CSS và hoạt động của JavaScript |
| **Tệp đa phương tiện** | Hình ảnh, âm thanh và tệp cục bộ khác khi bật **Include media** (kèm tệp đa phương tiện) | Giải nén tệp, tham chiếu, định dạng hỗ trợ và đồng bộ thiết bị |
| **Tổ chức nội dung** | Bộ thẻ, bộ thẻ con, nhãn và các bộ thiết lập sẵn nếu được chọn đưa vào | Cấu trúc phân cấp, ý nghĩa của nhãn, thiết lập sẵn và phạm vi học |
| **Trạng thái học tập** | Thông tin lịch ôn và lịch sử ôn tập nếu được chọn đưa vào | Ngày đến hạn, khoảng cách ôn, các lần quên lại và chuyển đổi sang bộ lập lịch của ứng dụng đích |
| **Mã phục vụ quy trình làm việc** | Tiện ích bổ sung không được đóng gói cùng bộ thẻ | Giải pháp thay thế cho công cụ duyệt thẻ, sửa hàng loạt, tạo ghi chú và các chức năng khác của tiện ích bổ sung |

[Hướng dẫn xuất dữ liệu của Anki](https://docs.ankiweb.net/exporting.html) mô tả tất cả các tùy chọn gói này. Công cụ nhập văn bản chỉ thấy hàng đầu tiên, và có thể cả nhãn. Công cụ nhập trực tiếp `.apkg` có thể thấy nhiều hơn, nhưng mỗi sản phẩm tự quyết định chuyển đổi phần nào và loại bỏ phần nào.

Vì vậy, “nhập được Anki” là mô tả quá mơ hồ để quyết định chuyển ứng dụng. Hãy đặt ba câu hỏi riêng:

1. **Thẻ có còn giữ nguyên ý nghĩa không?** Kiểm tra trường dữ liệu, các chiều hỏi–đáp được tạo, phần điền khuyết, tệp đa phương tiện và cách hiển thị.
2. **Ứng dụng đích có biết tôi đã học những gì không?** Kiểm tra các lần ôn, trạng thái hiện tại, ngày đến hạn và hàng đợi thực tế đầu tiên.
3. **Tôi có thể chuyển đi tiếp không?** Xuất dữ liệu từ ứng dụng đích và xem định dạng xuất thực sự chứa những gì.

Một công cụ nhập có thể vượt qua câu hỏi đầu tiên nhưng thất bại ở hai câu còn lại.

## Những gì còn lại sau khi chuyển

| Sản phẩm | Cách nhập từ Anki | Trạng thái học tập | Mất mát chính cần kiểm tra |
| --- | --- | --- | --- |
| [RemNote](https://www.remnote.com/) | [Nhập trực tiếp `.apkg`](https://help.remnote.com/en/articles/6751471-importing-from-anki) với phần lớn loại ghi chú, tệp đa phương tiện và lịch sử ôn tập | Có lịch sử ôn, nhưng thẻ nhập vào nằm trong hàng đợi **Need to Learn** riêng của RemNote | CSS phức tạp, JavaScript tùy chỉnh, một số âm thanh tạo bằng TTS và trường che ảnh đã đổi tên |
| [Mochi](https://mochi.cards/) | [Nhập trực tiếp `.apkg`](https://mochi.cards/docs/import-and-export/importing/), bao gồm lịch sử ôn tập | Có lịch sử; tài liệu không hứa giữ nguyên hàng đợi hay ngày đến hạn của Anki | HTML thành Markdown; CSS và JavaScript bị loại bỏ; các lần đánh giá sau chỉ có hai lựa chọn |
| [Mnemosyne](https://mnemosyne-proj.org/) | Dự án ghi rõ khả năng [nhập đầy đủ từ Anki](https://mnemosyne-proj.org/features), gồm loại thẻ tùy chỉnh và dữ liệu học tập | Dữ liệu học được nhập vào một bộ lập lịch khác | Vẫn cần thử cách mẫu thẻ hoạt động, trạng thái đến hạn sau chuyển đổi và cách hiển thị thẻ |
| [Quizlet](https://quizlet.com/) | [Dán thuật ngữ và định nghĩa](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) | Không giữ dữ liệu học từ Anki | Loại ghi chú, mẫu thẻ, bộ thẻ, cấu trúc tệp đa phương tiện và toàn bộ dữ liệu lịch ôn |
| [Brainscape](https://www.brainscape.com/) | [CSV, TXT, XLSX hoặc ODS](https://brainscape.zendesk.com/hc/en-us/articles/115002369931-How-do-I-import-various-files-to-create-flashcards) | Không giữ dữ liệu học từ Anki | Mẫu thẻ, tiện ích bổ sung, quy tắc tệp đa phương tiện và toàn bộ dữ liệu lịch ôn |
| [SuperMemo](https://www.supermemo.com/) | [Dán các dòng hỏi–đáp có dấu phân cách](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), tối đa 100 thẻ mỗi lần | Không giữ dữ liệu học từ Anki | Cấu trúc bộ sưu tập, tệp đa phương tiện, mẫu thẻ và toàn bộ dữ liệu lịch ôn |
| [Nibomo](https://nibomo.com/) | Dùng AI hỗ trợ soạn bản nháp từ TXT hoặc CSV của Anki, rồi kiểm tra lại | Không giữ dữ liệu học từ Anki | Không hỗ trợ `.apkg`; mẫu thẻ, độ nguyên vẹn của tệp đa phương tiện, phân cấp bộ thẻ và toàn bộ dữ liệu lịch ôn không được chuyển sang |

## Giá, khả năng dùng ngoại tuyến, lịch ôn và quyền kiểm soát

| Sản phẩm | Giá kiểm tra ngày 28 tháng 8 năm 2026 | Giới hạn khi dùng ngoại tuyến | Bộ lập lịch | Mã nguồn và tự triển khai |
| --- | --- | --- | --- | --- |
| **RemNote** | [Miễn phí; Pro $8/tháng, thanh toán $96/năm](https://www.remnote.com/pricing) | Ứng dụng đã cài đặt cho phép sửa và ôn ngoại tuyến sau khi đăng nhập. Bản máy tính giữ toàn bộ tệp đa phương tiện trong kho kiến thức; bản di động chỉ lưu đệm một số ảnh gần đây. Bản web cần tab vẫn đang mở. | [Anki SM-2 hoặc FSRS v6 bản beta](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) | Phần lõi độc quyền; tài liệu không nêu cách tự triển khai được hỗ trợ |
| **Mochi** | [Dùng ngoại tuyến miễn phí; đồng bộ Pro $5/tháng](https://mochi.cards/#pricing-section) | Ứng dụng đã cài đặt hoạt động hoàn toàn ngoại tuyến, không cần tài khoản. Dữ liệu lưu trong trình duyệt có thể bị xóa. | [Bộ lập lịch Mochi hoặc FSRS](https://mochi.cards/docs/reviewing/fsrs/), cả hai đều dùng Remembered / Forgot | Phần lõi độc quyền; kho mã công khai chứa các công cụ tích hợp, không phải ứng dụng có thể tự triển khai |
| **Mnemosyne** | Miễn phí | [Dùng cục bộ trên máy tính và ôn ngoại tuyến trên Android](https://mnemosyne-proj.org/download-mnemosyne.php); Android không sửa được thẻ. Không có ứng dụng iOS gốc. | Lịch ôn thích ứng theo mức đánh giá khả năng nhớ từ 0–5 | Giấy phép mã nguồn tùy thành phần; tự chạy máy chủ đồng bộ trên máy tính hoặc máy không có giao diện đồ họa |
| **Quizlet** | Dùng cơ bản miễn phí; [Plus $35.99/năm, Plus Unlimited $44.99/năm](https://quizlet.com/upgrade?source=signup) | Bộ học liệu đã tải xuống dùng được ngoại tuyến trong ứng dụng iOS và Android với Flashcards và Match. | [Lặp lại ngắt quãng trên web](https://quizlet.com/features/spaced-repetition) cho bộ có từ 100 thuật ngữ; bản di động vẫn được ghi là sắp ra mắt. Learn là chế độ luyện tập thích ứng riêng. | Dịch vụ độc quyền do nhà cung cấp vận hành; không có cách tự triển khai được hỗ trợ |
| **Brainscape** | [Miễn phí; Pro $7.99/tháng khi thanh toán theo năm](https://www.brainscape.com/pricing) | [Bản di động có thể giữ thay đổi lúc ngoại tuyến rồi đồng bộ các lớp đã tải trước đó](https://brainscape.zendesk.com/hc/en-us/articles/115002369711-How-do-Brainscape-s-website-mobile-app-interact-with-each-other); tài liệu không cam kết có toàn bộ thư viện cục bộ. | [Confidence-Based Repetition](https://www.brainscape.com/academy/confidence-based-repetition-definition/) (lặp lại theo độ tự tin), đánh giá từ 1–5 | Dịch vụ độc quyền do nhà cung cấp vận hành; không có cách tự triển khai được hỗ trợ |
| **SuperMemo** | Tài khoản miễn phí có giới hạn; [35.99 PLN/tháng hoặc 359 PLN/năm](https://www.supermemo.com/en/premium-subscription) | Khóa học đã tải về di động dùng được ngoại tuyến; sửa nội dung, AI, tìm kiếm, bản ghi âm và thống kê thì không. | [Phương pháp SuperMemo độc quyền](https://www.supermemo.com/en/supermemo-method) | Dịch vụ độc quyền do nhà cung cấp vận hành; không có cách tự triển khai được hỗ trợ |
| **Nibomo** | [Phần lõi dịch vụ trực tuyến miễn phí trong beta; phần mềm miễn phí nếu tự triển khai](/vi/pricing/), cộng chi phí hạ tầng của bạn | Ứng dụng gốc ghi dữ liệu cục bộ sau khi đăng nhập trực tuyến và tải dữ liệu không gian làm việc lần đầu; tệp đa phương tiện từ xa phải được lưu đệm sẵn. | [FSRS](/docs/architecture/#scheduling) | MIT; phương án triển khai được hỗ trợ để vận hành thực tế là toàn bộ hệ thống lấy AWS làm nền tảng |

Các bảng này không dùng để cộng điểm. Công cụ nhập trực tiếp có thể quan trọng hơn mọi tính năng khác nếu bạn có 30.000 thẻ đã ôn lâu năm. Ứng dụng iPhone gốc có thể quyết định lựa chọn nếu đó là nơi bạn ôn tập. Quyền truy cập mã nguồn chỉ có ý nghĩa khi bạn hoặc người bạn tin tưởng sẽ bảo trì mã đó.

Mỗi sản phẩm ở đây đều có cách bắt đầu miễn phí, nhưng chuyển sang ứng dụng miễn phí thay thế Anki vẫn có chi phí. Phí thuê bao dễ tính. Dựng lại mẫu thẻ, kiểm tra tệp đa phương tiện và bắt đầu lại lịch sử ôn thường tốn kém hơn.

## RemNote: đưa thẻ vào hệ thống ghi chú liên kết

RemNote thay đổi nơi tạo thẻ. Thay vì duy trì bộ thẻ riêng bên cạnh ghi chép bài giảng, bạn tạo thẻ ngay trong dàn ý, tài liệu hoặc quy trình làm việc với PDF. Đây là lý do thực tế để rời Anki nếu việc sao chép tài liệu giữa ứng dụng ghi chú và ứng dụng thẻ học đã trở thành phần tốn công nhất.

RemNote nhập được nhiều thành phần, nhưng cần hiểu đúng cách ứng dụng xử lý hàng đợi ôn tập. [Hướng dẫn nhập từ Anki hiện tại](https://help.remnote.com/en/articles/6751471-importing-from-anki) của RemNote yêu cầu xuất `.apkg` kèm thông tin lịch ôn, thiết lập sẵn của bộ thẻ và tệp đa phương tiện. RemNote nhập lịch sử ôn cùng phần lớn loại ghi chú, gồm thẻ cơ bản, điền khuyết và các dạng thẻ che ảnh phổ biến.

Cũng theo hướng dẫn đó, thẻ vừa nhập được đưa vào hàng đợi **Need to Learn** riêng. Nói cách khác, RemNote có thể sử dụng lịch sử ôn đã nhập, nhưng tài liệu không hứa rằng hàng đợi đến hạn hiện tại của Anki sẽ xuất hiện nguyên vẹn. CSS phức tạp cũng bị loại bỏ, JavaScript tùy chỉnh không được hỗ trợ, một số chức năng chuyển văn bản thành giọng nói tức thời không hoạt động, và việc nhập thẻ che ảnh phụ thuộc vào tên loại ghi chú và tên trường đúng như ứng dụng mong đợi.

Hãy thử một bộ thẻ đại diện và kiểm tra cả thẻ lẫn hàng đợi đầu tiên. Thẻ hiển thị đúng sau khi nhập mới chỉ đáp ứng một nửa yêu cầu kiểm tra.

Ứng dụng máy tính và di động dùng được ngoại tuyến sau khi cài đặt và đăng nhập. [Hướng dẫn ngoại tuyến](https://help.remnote.com/en/articles/6752029-offline-mode) nêu một giới hạn đáng chú ý về tệp đa phương tiện: bản máy tính lưu toàn bộ ảnh và PDF của kho kiến thức, còn bản di động chỉ lưu đệm một số ảnh gần đây. Bản web có thể tiếp tục chạy trong tab đã mở, nhưng không thể mở từ đầu khi ngoại tuyến.

Dùng RemNote khi lợi ích của ghi chú liên kết xứng đáng với việc đổi mô hình bộ sưu tập. Giữ Anki nếu mẫu thẻ và tiện ích bổ sung là nền tảng của hệ thống học, chứ không chỉ là phần trang trí.

## Mochi: Markdown cục bộ với định dạng xuất riêng đầy đủ

Mochi là lựa chọn gọn nhẹ hơn cho người muốn dữ liệu cục bộ, thẻ theo cấu trúc Markdown và ít nút điều khiển trên màn hình. Ứng dụng cài đặt chạy trên mọi nền tảng máy tính và di động lớn, đồng thời dùng được [hoàn toàn ngoại tuyến mà không cần tài khoản](https://mochi.cards/docs/getting-started/download-and-install/). Đồng bộ là phần trả phí, ở mức $5 mỗi tháng.

Công cụ nhập trực tiếp từ Anki mang theo lịch sử ôn tập, giúp Mochi vượt khá xa các lựa chọn chỉ nhận văn bản. Quy trình chuyển đổi cũng được mô tả rõ hơn thường thấy: Mochi loại bỏ CSS và JavaScript rồi chuyển HTML sang Markdown. Điều này phù hợp khi ý nghĩa nằm trong văn bản và tệp đính kèm thông thường. Nếu chính mẫu thẻ truyền tải ý nghĩa, đây là điểm cần dè chừng.

Mochi hiện có hai bộ lập lịch. Thuật toán riêng vẫn là mặc định, còn [FSRS có thể được bật](https://mochi.cards/docs/reviewing/fsrs/) mà không đặt lại tiến độ Mochi hiện có. FSRS tính trạng thái thẻ từ lịch sử ôn mà Mochi đang có. Ngay cả khi dùng FSRS, bạn vẫn chỉ có hai lựa chọn đánh giá khi ôn: Remembered hoặc Forgot. Nếu quen dùng Hard và Easy làm hai tín hiệu riêng trong Anki, bạn sẽ cần điều chỉnh cách ôn hằng ngày.

Khả năng xuất dữ liệu của Mochi được mô tả rõ ràng hơn so với phần lớn ứng dụng độc quyền. [Bản xuất `.mochi`](https://mochi.cards/docs/import-and-export/exporting/) theo định dạng riêng chứa thẻ, mẫu, tệp đính kèm, nhãn, cấu trúc bộ thẻ và lịch sử ôn tập. Markdown và CSV dễ kiểm tra bằng công cụ khác hơn, nhưng không chứa lịch sử ôn và các siêu dữ liệu khác.

Các kho GitHub công khai của Mochi chứa [công cụ tích hợp và công cụ liên quan](https://github.com/mochi-cards/open-source), không phải phần lõi ứng dụng hay máy chủ đồng bộ được hỗ trợ. Chọn Mochi vì khả năng dùng ngoại tuyến và mang dữ liệu đi, không phải để kiểm soát mã nguồn.

## Mnemosyne: hướng đi mã nguồn mở trên máy tính

Mnemosyne gần nhất với mô hình truyền thống “chương trình và cơ sở dữ liệu cục bộ”. Bản phát hành hiện tại hỗ trợ Windows, macOS và Linux, kèm ứng dụng Android để ôn ngoại tuyến. Trang tính năng mô tả thẻ có nội dung phong phú, nhãn phân cấp, tiện ích bổ sung, thang đánh giá 0–5 và khả năng nhập đầy đủ từ Anki, gồm loại thẻ tùy chỉnh và dữ liệu học tập.

Đây là lựa chọn chuyển đổi mã nguồn mở trực tiếp nhất trong bài nếu bạn muốn rời Anki mà không chuyển sang hệ thống ghi chú lớn hoặc dịch vụ đám mây. Mnemosyne cũng có [máy chủ đồng bộ tích hợp](https://mnemosyne-proj.org/help/syncing), chạy được trên máy tính hoặc máy không có giao diện đồ họa, và gộp dữ liệu học từ nhiều thiết bị.

Những điểm bất tiện cũng cần được tính vào quyết định. Ứng dụng Android [không sửa được thẻ](https://mnemosyne-proj.org/help/android-client). Người dùng iOS phải ôn qua giao diện trình duyệt do một máy chủ trên máy khác cung cấp, và trang tính năng chính thức cảnh báo máy chủ đó không có tính năng bảo mật. Tự chạy đồng bộ còn có nghĩa là duy trì khả năng truy cập máy chủ, cấu hình mạng và sao lưu thư mục dữ liệu.

Giấy phép cụ thể hơn một nhãn “GPL” chung chung: [tệp giấy phép của dự án](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/LICENSE) dẫn đến các điều khoản khác nhau theo từng thành phần. [Giấy phép phần lõi](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/mnemosyne/LICENSE) dùng AGPL v3 với điều khoản bổ sung về tên/ghi công, còn [openSM2sync](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/openSM2sync/LICENSE) dùng LGPL v3. Hãy đọc các tệp đó nếu bạn định chỉnh sửa hoặc phân phối lại.

## Quizlet: chuyển vì lớp học, không phải để giữ nguyên bộ sưu tập

Quizlet đáp ứng tốt một nhu cầu khác. Bộ học liệu công khai, lớp của giáo viên, chia sẻ, Match, Test, Learn và hoạt động nhóm dễ đưa vào lớp học hơn một hồ sơ Anki đã tùy chỉnh.

Giới hạn chuyển đổi là văn bản thuần. Quizlet có thể biến các dòng được dán vào thành thuật ngữ và định nghĩa, nhưng không đọc `.apkg` để dựng lại loại ghi chú, mẫu thẻ, lịch ôn hay lịch sử ôn tập. Người tạo có thể [xuất bộ học liệu của chính mình dưới dạng văn bản sao chép](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets), không kèm ảnh; không thể xuất các bộ sao chép từ người dùng khác. Đây là khả năng mang nội dung đi, không phải mang nguyên bộ sưu tập đi.

Cách Quizlet lập lịch đang thay đổi. Chế độ [Spaced Repetition](https://quizlet.com/features/spaced-repetition) mới tự động bật trên web cho bộ có ít nhất 100 thuật ngữ và dùng các mức Repeat, Hard, Okay và Easy. Quizlet vẫn ghi hỗ trợ di động là sắp ra mắt. Learn tiếp tục là chế độ luyện tập thích ứng riêng, với hạn mức sử dụng gắn với gói trả phí.

Dùng ngoại tuyến cũng có nghĩa là dùng ứng dụng di động, không phải website. Quizlet tự động lưu tám bộ gần đây và cho tải thêm; [Flashcards và Match hoạt động ngoại tuyến](https://help.quizlet.com/hc/en-us/articles/360030565412-Studying-offline-with-Quizlet-mobile-apps), rồi tiến độ được đồng bộ khi có mạng trở lại.

Chuyển sang đây khi mục tiêu là chia sẻ học liệu và hoạt động trong lớp. Dựng lại lịch ôn cá nhân đã tích lũy lâu năm chỉ để có những tính năng đó thường không đáng.

## Brainscape: ít quyết định về lịch ôn hơn, chuyển được ít dữ liệu hơn

Brainscape yêu cầu đánh giá độ tự tin từ 1 đến 5 và dùng tín hiệu đó để đưa những thẻ bạn chưa nhớ chắc vào lượt ôn sớm hơn. Công thức đầy đủ không được công bố, nhưng cách thao tác dễ hướng dẫn cho cả lớp.

Ứng dụng nhận tệp CSV, TXT, XLSX và ODS. Điều đó tiện cho thẻ hai mặt hỏi–đáp, nhưng cũng có nghĩa là mẫu thẻ, tiện ích bổ sung, quy tắc tệp đa phương tiện và dữ liệu học từ Anki không được chuyển sang. Xuất bản sao lưu cá nhân là tính năng Pro; tệp xuất có thể mở bằng ứng dụng bảng tính và nhập lại sau này.

Trung tâm trợ giúp hiện tại của Brainscape cho biết website và ứng dụng di động nay có cùng các tính năng cốt lõi về tìm kiếm, tạo, chia sẻ và học. Tài liệu cũng mô tả việc dùng di động lúc ngoại tuyến, đồng bộ lại thủ công và cập nhật các lớp đã tải về thiết bị. Như vậy, bạn có thể tiếp tục đồng bộ khi có mạng trở lại, nhưng tài liệu không cam kết rằng toàn bộ nội dung trong tài khoản đều có sẵn trên thiết bị.

Xuất bộ thẻ cá nhân vẫn là [tính năng Pro](https://brainscape.zendesk.com/hc/en-us/articles/115002383872-How-can-I-export-a-backup-of-my-flashcards). Không có bản phát hành mã nguồn chính thức hay cách tự triển khai.

Brainscape đáng cân nhắc khi Anki đòi hỏi quá nhiều cấu hình đối với những người cần học. Đây không phải lối ra phù hợp cho người đã tận dụng tốt chính những khả năng cấu hình đó.

## SuperMemo: chọn phương pháp, chấp nhận bắt đầu lại

Dịch vụ SuperMemo.com hiện tại là nền tảng học ngôn ngữ trên web, iOS và Android, xây dựng quanh phương pháp lập lịch độc quyền của SuperMemo. Nó tách biệt với sản phẩm Windows đời cũ mà người dùng SuperMemo lâu năm có thể biết.

Đây là quyết định chọn phương pháp và danh mục khóa học, không phải cách chuyển dữ liệu Anki nguyên vẹn. SuperMemo hỗ trợ [tạo hàng loạt bằng cách dán các dòng hỏi–đáp có dấu phân cách](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), giới hạn 100 thẻ mỗi lần nhập. Tôi không tìm thấy công cụ nhập `.apkg` chính thức hiện hành hay cách để người dùng xuất dữ liệu từ dịch vụ trực tuyến. Vì vậy, mẫu thẻ, tiện ích bổ sung, cấu trúc tệp đa phương tiện và lịch sử ôn không đi theo con đường được tài liệu mô tả này.

Bạn có thể học các khóa đã tải xuống ngay cả khi ngoại tuyến trong ứng dụng di động. [Hướng dẫn ngoại tuyến](https://www.supermemo.com/en/faq/can-i-use-supermemo-offline) loại trừ tính năng AI, thêm MemoCards, tìm kiếm, bản ghi âm, thống kê và trình sửa khóa học, nên hãy chuẩn bị học liệu và đồng bộ trước khi ngắt mạng.

Chọn SuperMemo vì bạn muốn phương pháp riêng hoặc danh mục khóa học của họ đến mức sẵn sàng bắt đầu lịch ôn mới. Nếu ưu tiên là giữ lịch hiện có, ứng dụng này không giải quyết đúng vấn đề.

## Nibomo: truy cập mã nguồn toàn hệ thống, nhưng nhập từ Anki yếu nhất

Nibomo cho phép bạn nắm quyền kiểm soát phần lớn hệ thống. [Kho mã theo giấy phép MIT](https://github.com/kirill-markin/flashcards-open-source-app) chứa ứng dụng web, ứng dụng iOS và Android, backend, đồng bộ ngoại tuyến, hạ tầng, [API công khai](/docs/api/) và [máy chủ MCP](/docs/mcp-connector/). Lịch ôn dùng [FSRS](/docs/architecture/#scheduling). Bản web, iOS và Android đều ghi dữ liệu cục bộ trước, đưa thay đổi vào hàng đợi gửi đi, rồi đồng bộ khi có mạng trở lại.

Điều đó không khiến Nibomo tương thích với Anki. Nibomo không đọc được `.apkg` hay `.colpkg`. [Quy trình chuyển từ TXT của Anki](/blog/migrate-from-anki-txt-export-open-source-flashcards/) được hỗ trợ là quy trình dùng AI soạn bản nháp rồi kiểm tra lại, chủ yếu dành cho thẻ văn bản. Nó không giữ mẫu thẻ, tiện ích bổ sung, phân cấp bộ thẻ, ngày đến hạn, khoảng cách ôn hay các lần ôn. Tham chiếu đến tệp đa phương tiện trong TXT không phải bản thân tệp, nên bộ thẻ nhiều hình ảnh, âm thanh cần được dựng lại và kiểm tra riêng.

Gói `flashcards.zip` riêng của Nibomo cũng có phạm vi hẹp hơn bản sao lưu. Nó chuyển thẻ, nhãn và tệp đa phương tiện liên quan giữa các không gian làm việc Nibomo. Nó không chuyển lịch sử ôn, trạng thái FSRS, cấu trúc bộ thẻ đầy đủ, thiết lập không gian làm việc hay tài khoản.

Phần lõi dịch vụ trực tuyến [miễn phí trong giai đoạn beta](/vi/pricing/). Để tự triển khai hệ thống dùng trong thực tế, bạn không thể chỉ cài Docker bằng một lệnh: [hướng dẫn tự triển khai](/docs/self-hosting/) dùng AWS CDK và yêu cầu các dịch vụ AWS cùng Cloudflare, Resend và Sentry, đồng thời đòi hỏi quản lý thông tin bí mật, chuyển đổi dữ liệu, sao lưu, khôi phục và nâng cấp. Docker Compose dành cho môi trường phát triển, không phải phương án triển khai được hỗ trợ để vận hành thực tế.

Dùng Nibomo khi lý do chuyển là có toàn bộ mã nguồn và backend do người vận hành kiểm soát, đồng thời thẻ của bạn đủ đơn giản để dựng lại an toàn. [Mở ứng dụng trực tuyến](https://app.nibomo.com/) để thử một bộ thẻ nhỏ tạm thời. Giữ Anki—hoặc thử RemNote, Mochi hay Mnemosyne—khi giữ nguyên trạng thái học tập là ưu tiên hàng đầu.

## Chuyển sang ứng dụng nào trên iOS để tránh mất dữ liệu ngoài dự kiến?

“Ứng dụng thay thế Anki cho iOS” có thể mang hai nghĩa: ứng dụng iPhone gốc, hoặc lựa chọn thay cho [AnkiMobile với giá mua một lần $24.99](https://apps.apple.com/us/app/ankimobile-flashcards/id373493387).

RemNote, Mochi, Quizlet, Brainscape, SuperMemo và Nibomo đều có ứng dụng iOS. Mnemosyne thì không. Nhưng câu hỏi về chuyển dữ liệu vẫn còn:

- **Mochi** giữ được nhiều hơn các lựa chọn iOS chỉ nhận văn bản: nhập lịch sử ôn từ `.apkg`, đồng thời chuyển sang Markdown và đánh giá hai mức.
- **RemNote** cũng nhập lịch sử ôn từ `.apkg`, nhưng hãy thử hàng đợi **Need to Learn**, đừng mặc định lịch Anki hôm nay vẫn nguyên vẹn.
- **Quizlet** phù hợp để chia sẻ học liệu trong lớp, nhưng cách nhập dữ liệu từ Anki chỉ hỗ trợ văn bản và chế độ lặp lại ngắt quãng mới chưa có trên di động.
- **Nibomo** là lựa chọn có mã nguồn công khai và ứng dụng iOS gốc, nhưng chuyển từ Anki sẽ đặt lại trạng thái học tập.
- **Brainscape** và **SuperMemo** chỉ hợp lý nếu phương pháp ôn của họ đáng để bạn dựng lại thẻ và lịch ôn.

Trước khi rời AnkiMobile vì giá, hãy so với phí thuê bao và số giờ cần để sửa những gì hỏng khi chuyển. Mua ứng dụng một lần có thể rẻ hơn ứng dụng miễn phí biến bộ sưu tập đã tích lũy lâu năm thành cả một dự án thủ công.

## Khi nào giữ Anki an toàn hơn

Ở lại cũng là một quyết định, không phải thất bại vì chưa chọn được thứ mới hơn. Hãy giữ Anki nếu có bất kỳ điều nào sau đây:

- bộ sưu tập phụ thuộc vào mẫu tùy chỉnh, CSS, JavaScript hoặc tiện ích bổ sung;
- Image Occlusion (che một phần hình ảnh), âm thanh hoặc tệp đa phương tiện khác truyền tải ý nghĩa thiết yếu;
- một ghi chú tạo ra nhiều chiều hỏi–đáp cần tiếp tục liên kết với nhau;
- lịch sử ôn nhiều năm và ngày đến hạn hiện tại có giá trị hơn trình soạn thảo mới;
- bạn dựa vào quy trình trên máy tính hoặc tổ hợp nền tảng mà ứng dụng thay thế không đáp ứng được;
- chế độ ngoại tuyến của ứng dụng thay thế chỉ hoạt động trên nền tảng bạn sẽ không dùng;
- về lý thuyết bạn muốn tự triển khai, nhưng không muốn vận hành, bảo mật, sao lưu và nâng cấp máy chủ;
- ứng dụng thay thế không giải quyết vấn đề lặp lại nào ngoài việc trông gọn hơn.

Anki vẫn cung cấp hệ sinh thái tiện ích bổ sung đã phát triển lâu năm, mẫu ghi chú và thẻ linh hoạt, FSRS cùng các tùy chọn lập lịch cũ, ứng dụng cài đặt chạy cục bộ và định dạng gói có thể mang theo bộ sưu tập. Không sản phẩm nào ở trên tái tạo được toàn bộ những điều đó.

Để so sánh riêng về phạm vi quyền kiểm soát, hãy đọc [hướng dẫn ứng dụng thẻ học mã nguồn mở](/blog/best-open-source-flashcard-apps-2026/). Nếu khả năng dùng ngoại tuyến quyết định lựa chọn, [bài so sánh ứng dụng thẻ học ngoại tuyến](/blog/best-offline-flashcards-app/) phân biệt rõ ứng dụng cài đặt, nội dung lưu đệm và tab trình duyệt.

## Các bước kiểm tra trước khi quyết định chuyển

Đừng bắt đầu bằng toàn bộ bộ sưu tập. Hãy thử trên một phần nhỏ và sẵn sàng kết luận rằng không nên chuyển.

1. **Tạo gói khôi phục.** Xuất `.colpkg` kèm tệp đa phương tiện, lưu bên ngoài hồ sơ Anki và giữ thêm một bản ở nơi khác.
2. **Chọn bộ thẻ khó xử lý.** Đưa vào thẻ điền khuyết, trường tùy chỉnh, thẻ xuôi và ngược, bộ thẻ lồng nhau, nhãn, ảnh, âm thanh và đủ lịch sử ôn để thấy cách lịch được chuyển đổi.
3. **Xuất đúng định dạng ứng dụng đích hỗ trợ.** Dùng `.apkg` kèm lịch ôn, thiết lập sẵn và tệp đa phương tiện cho công cụ nhập trực tiếp. Chỉ dùng Notes in Plain Text (ghi chú dạng văn bản thuần) khi chấp nhận dựng lại riêng phần nội dung.
4. **Ghi lại dữ liệu đối chiếu ban đầu.** Ghi số ghi chú, số thẻ, tên nhãn và bộ thẻ, số tệp đa phương tiện, một vài ngày đến hạn và khoảng cách ôn, cùng số thẻ dự kiến tạo ra từ mỗi loại ghi chú.
5. **Nhập vào không gian tạm.** Đừng ghi đè hồ sơ nguồn hay gộp lần thử đầu vào thư viện đích dùng lâu dài.
6. **Kiểm tra riêng nội dung và trạng thái học.** Mặt trước và mặt sau đúng không chứng minh rằng phần điền khuyết, tệp đa phương tiện, các thẻ cùng ghi chú, lịch sử ôn hay ngày đến hạn tiếp theo vẫn còn.
7. **Mở ứng dụng từ đầu khi ngoại tuyến trên từng thiết bị thực tế.** Ôn, sửa, đóng hoàn toàn ứng dụng, mở lại khi không có mạng, rồi kết nối lại và kiểm tra trên thiết bị khác.
8. **Kiểm tra hàng đợi trước khi hai lịch ôn bắt đầu khác nhau.** So sánh nhóm thẻ đến hạn đầu tiên và một số khoảng cách ôn trước khi đánh giá cùng các thẻ đang học thật trong cả hai ứng dụng. Sau lần ôn đầu tiên ở ứng dụng khác, hai lịch hoạt động độc lập.
9. **Thử xuất dữ liệu trước khi quyết định gắn bó.** Xuất từ ứng dụng đích và kiểm tra những gì bạn có thể lấy lại nếu rời nó vào năm sau.
10. **Giữ Anki và bản sao lưu chưa bị chỉnh sửa.** Đừng xóa ứng dụng hay bản sao lưu cho đến khi bạn đã dùng ứng dụng thay thế trong sinh hoạt hằng ngày và bạn đã chủ động chấp nhận từng mất mát.

Nếu ứng dụng đích chỉ nhận văn bản, hãy làm theo toàn bộ [quy trình xuất TXT an toàn](/blog/migrate-from-anki-txt-export-open-source-flashcards/). Quy trình này tách `.colpkg` dùng để khôi phục khỏi tệp làm việc có thể chuyển sang nơi khác, đồng thời nói rõ việc đặt lại trạng thái học.

## Quyết định theo thứ tự này

Bắt đầu từ phần bạn không thể chấp nhận mất:

1. Nếu việc giữ nguyên cách mẫu thẻ hoạt động, tiện ích bổ sung hoặc hàng đợi hiện tại là thiết yếu, hãy giữ Anki trừ khi phép thử bằng `.apkg` đại diện chứng minh điều ngược lại.
2. Nếu ghi chú và thẻ nên trở thành một hệ thống, hãy thử RemNote. Kiểm tra hàng đợi **Need to Learn**, không chỉ các trang đã nhập.
3. Nếu Markdown cục bộ và bản xuất dễ kiểm tra quan trọng hơn cách Anki hiển thị, hãy thử Mochi.
4. Nếu bạn muốn ứng dụng máy tính mã nguồn mở tập trung vào việc học, có nhập trực tiếp từ Anki, hãy thử Mnemosyne và kiểm tra xem các giới hạn trên di động có phù hợp với thói quen của bạn không.
5. Nếu vấn đề thực sự là chia sẻ học liệu trong lớp hoặc có quy trình ôn chung đơn giản hơn, hãy dựng lại một bộ nhỏ trong Quizlet hoặc Brainscape.
6. Nếu bạn muốn chính phương pháp của SuperMemo, hãy chấp nhận lịch ôn mới. Nếu bạn muốn mã nguồn toàn hệ thống, tự triển khai, API và MCP, hãy chấp nhận rằng bạn phải dựng lại nội dung trong Nibomo, mất một phần dữ liệu và đảm nhận công việc vận hành đi kèm.

Để xem từng tính năng của ba mô hình rất khác nhau, hãy đọc [Anki, Quizlet và Nibomo](/blog/anki-vs-quizlet-vs-open-source-flashcards-app/).

Nguyên tắc khá đơn giản: chỉ chuyển khi lợi ích rõ ràng và bạn đã thử thực tế để biết sẽ mất những gì. Nếu bộ thẻ đại diện không thể chuyển sang nguyên vẹn, giữ Anki không phải phương án dự phòng thận trọng. Đó là kết quả của việc so sánh.
