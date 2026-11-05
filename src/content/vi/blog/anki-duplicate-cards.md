---
title: "Cách tìm thẻ trùng trong Anki và chọn bản cần giữ"
description: "Tìm nguyên nhân thẻ bị trùng trong Anki, so sánh các ghi chú và chọn bản cần giữ. Có bài thực hành xóa thẻ trùng và kiểm tra lịch sử ôn tập."
date: "2026-10-04"
image: "/blog/anki-duplicate-cards.png"
keywords:
  - "thẻ trùng trong Anki"
  - "cách tìm thẻ trùng trong Anki"
  - "xóa ghi chú trùng trong Anki"
  - "ghi chú trùng trong Anki"
  - "lịch sử ôn tập Anki"
---

Anki hiện một thẻ mới, nhưng bạn nhớ đã ôn câu hỏi này rồi. Có thể một bản sao đã lọt vào khi bạn nhập dữ liệu, hoặc câu hỏi đến từ thẻ thứ hai của cùng một ghi chú. Cần phân biệt hai trường hợp trước khi xóa. Xóa một dòng trong cửa sổ **Browse** có thể xóa luôn mọi thẻ của ghi chú đó, kể cả thẻ theo chiều hỏi bạn muốn giữ.

Để xử lý **thẻ trùng trong Anki**, trước hết hãy tìm nguyên nhân câu hỏi lặp lại. Nếu các thẻ thuộc những ghi chú khác nhau, dùng **Notes → Find Duplicates** để tìm các ghi chú có thể bị trùng. Hai ghi chú có chung nội dung ở một trường thì đáng xem kỹ hơn. Hãy so sánh nội dung ghi chú và lịch sử ôn của từng thẻ rồi chọn bản cần giữ trong mỗi nhóm.

Hướng dẫn dành cho Anki trên máy tính và dựa trên tài liệu cùng mã nguồn đã phát hành của Anki. Các nguồn được đối chiếu ngày 4 tháng 10 năm 2026. Bài thực hành bên dưới dùng dữ liệu giả định và trình bày kết quả dự kiến.

![Một thành viên câu lạc bộ cờ vua so sánh quân xe sáng màu dư ra với hai quân xe đã mòn trên bàn cờ gỗ](/blog/anki-duplicate-cards.png)

## Xác định phần nào đang lặp lại

Ghi chú chứa các trường như **Front** (mặt trước) và **Back** (mặt sau). Anki dùng mẫu thẻ để tạo thẻ từ các trường đó. Chẳng hạn, một ghi chú từ vựng có thể sinh ra một thẻ hỏi nghĩa và một thẻ hỏi từ dựa vào nghĩa. Hai thẻ này cùng thuộc một ghi chú và có lịch ôn riêng. [Tài liệu Anki về ghi chú và trường](https://docs.ankiweb.net/manual/getting-started#notes-%26-fields)

Trong cửa sổ **Browse**, chọn chế độ **Cards** rồi mở **Cards → Info** cho từng thẻ có vẻ bị trùng. So sánh mã ghi chú (**Note ID**). Cùng mã nghĩa là các thẻ thuộc cùng một ghi chú. Khác mã nghĩa là chúng thuộc các ghi chú khác nhau. Thay `123` trong `nid:123` bằng mã thực tế để xem tất cả thẻ của ghi chú đó trong cả bộ sưu tập. [Cách tìm theo mã trong Anki](https://docs.ankiweb.net/searching.html#object-ids)

| Kết quả kiểm tra | Nguyên nhân có thể | Bước tiếp theo |
| --- | --- | --- |
| Cùng ghi chú, câu hỏi theo hai chiều ngược nhau | Hai thẻ được tạo có chủ đích từ cùng một ghi chú | Xem cả hai chiều có hữu ích không |
| Cùng ghi chú, câu hỏi hiển thị giống hệt nhau | Có thể các mẫu thẻ bị trùng | So sánh các mẫu thẻ và bản xem trước |
| Khác ghi chú, câu hỏi có vẻ giống hệt nhau | Có thể các ghi chú bị trùng | So sánh toàn bộ nội dung các ghi chú trước khi chọn bản cần giữ |

Nếu bạn chủ ý tạo thẻ theo cả hai chiều, xem [hướng dẫn về thẻ đảo chiều](/blog/anki-reverse-cards/) (tiếng Anh) để hiểu cách hai chiều hoạt động. Nếu chỉ muốn ngừng ôn một chiều, hãy [tạm ngưng thẻ đó](/blog/anki-bury-vs-suspend/) (tiếng Anh). Thẻ vẫn nằm trong bộ sưu tập.

Nếu các mẫu thẻ giống hệt nhau, xem [cách Anki xác định nguyên nhân có thêm bản sao](https://faqs.ankiweb.net/extra-copies-of-a-card-are-coming-up.html). Xóa một mẫu thẻ sẽ ảnh hưởng đến mọi ghi chú cùng loại, kể cả trong các bộ thẻ khác. Hãy xem việc sửa mẫu thẻ là một thay đổi riêng cần kiểm tra kỹ, ngay cả khi bạn chỉ mới phát hiện một câu hỏi lặp lại.

## Chọn phạm vi tìm ghi chú trùng

Mở **Notes → Find Duplicates** và chọn trường cần so sánh, chẳng hạn **Front**. Theo mặc định, Anki tìm trong mọi loại ghi chú có trường đó. Dùng **Optional filter** (bộ lọc tùy chọn) để giới hạn phạm vi rồi bấm **Search**. [Tài liệu Anki về các tùy chọn trong Find Duplicates](https://docs.ankiweb.net/browsing.html#finding-duplicates)

Với bộ thẻ tên `Cleanup practice`, hãy nhập bộ lọc sau.

```text
deck:"Cleanup practice"
```

Khi tìm theo bộ thẻ, Anki tìm cả trong các bộ thẻ con. Dù không thấy bản trùng trong một bộ thẻ, bạn vẫn có thể tìm thấy bản sao ở bộ khác. Nếu nghi các bản sao nằm rải rác, hãy bỏ bộ lọc để tìm trong cả bộ sưu tập. [Cú pháp tìm theo bộ thẻ trong Anki](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes)

Bấm vào một nhóm kết quả để xem các ghi chú trong nhóm. Theo [mã nguồn Anki đã phát hành](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/find_duplicates.py), **Tag Duplicates** gắn nhãn `duplicate` cho mọi ghi chú trong mỗi nhóm, kể cả bản bạn sẽ giữ. **Đừng xóa toàn bộ kết quả của `tag:duplicate`.** Dùng nhãn để gom các ghi chú cần kiểm tra rồi chọn riêng từng bản cần xóa.

Anki chỉ so sánh nội dung của trường bạn chọn. Bạn có thể phải tự tìm những câu hỏi diễn đạt khác nhau nhưng kiểm tra cùng một kiến thức. Ngược lại, hai câu hỏi giống hệt nhau có thể thuộc hai ngôn ngữ hoặc hai khóa học khác nhau.

## Tập chọn bản cần giữ với ba cặp ghi chú

Giả sử `Cleanup practice` có sáu ghi chú và không có bộ thẻ con. A và B dùng các mẫu thẻ nguyên bản của **Basic (and reversed card)**, nên mỗi ghi chú tạo hai thẻ. C đến F dùng **Basic**, mỗi ghi chú tạo một thẻ. Cả tám thẻ đều nằm trong cùng bộ thẻ. Các chữ cái dùng để phân biệt ghi chú trong ví dụ này. Trong Anki, mã ghi chú (**Note ID**) và mã thẻ (**Card ID**) đều là số.

| Ghi chú | Mặt trước → Mặt sau | Trạng thái học giả định | Quyết định |
| --- | --- | --- | --- |
| A và B | `le vélo` → `bicycle` | A có 12 lượt ôn thẻ hỏi nghĩa và 3 lượt ôn thẻ hỏi từ. Cả hai thẻ của B đều mới | Giữ A và xem xét xóa B trước |
| C và D | `Chemical symbol for silver?` → `Ag` | C có 20 lượt ôn. D có 6 lượt ôn | So sánh lịch sử của cả hai rồi chọn thẻ để tiếp tục ôn |
| E và F | E là `bank` → `financial institution`. F là `bank` → `side of a river` | Hai nghĩa khác nhau | Giữ cả hai và thêm ngữ cảnh để câu hỏi rõ nghĩa |

Khi so sánh trường **Front**, Anki có thể tìm ra cả ba cặp. Chỉ cặp đầu tiên dễ quyết định. Trước khi xem B là bản thừa, hãy so sánh **tất cả các trường**, tệp đa phương tiện, nhãn, loại ghi chú và câu hỏi hiển thị ở từng chiều. Có thể B có đoạn ghi âm phát âm mà A thiếu, hoặc tạo ra một câu hỏi mà A không có.

Nếu tìm thấy nội dung hữu ích cho cùng mục tiêu học, hãy chọn phần cần chép sang ghi chú sẽ giữ rồi xem trước kết quả. Giữ lại cả những nhãn có ích từ ghi chú gốc. Nếu muốn kiểm tra một kiến thức khác, hãy tạo câu hỏi mới để lịch sử cũ tiếp tục phản ánh đúng nội dung đã học.

Với C và D, số lượt ôn chỉ là một dấu hiệu để xem xét. Ở mỗi thẻ, hãy xem ngày và mức đánh giá của từng lượt ôn, khoảng cách ôn hiện tại và thông tin về hạn ôn. Có thể một thẻ có nhiều lượt ôn hơn vì bạn phải học lại nó nhiều lần. Sau khi kiểm tra câu hỏi và câu trả lời có ích cho việc học, hãy quyết định giữ lịch sử của thẻ nào rồi tiếp tục ôn thẻ đó. Nếu hai câu trả lời mâu thuẫn, hãy kiểm tra tài liệu học trước. Số lượt ôn không cho biết đáp án nào đúng.

Giữ C và xóa D **không gộp lịch sử của hai thẻ**. Thẻ C vẫn giữ trạng thái học trước đó. Mục **Card Info** hiển thị [lịch sử riêng của từng thẻ](https://docs.ankiweb.net/stats.html#card-info). Các lượt ôn của ghi chú đã xóa vẫn xuất hiện trong thống kê toàn bộ bộ sưu tập. Chúng biến mất khỏi thống kê theo bộ thẻ và không chuyển sang thẻ còn lại. [Tài liệu Anki về thống kê của ghi chú đã xóa](https://docs.ankiweb.net/stats.html#more)

Nếu còn phân vân, hãy hoãn xóa. Ghi lại những gì cần kiểm tra và tạm ngưng các thẻ bạn chưa muốn ôn trong lúc xem xét nếu cần.

## Xóa một bản trùng đã xác nhận rồi đối chiếu kết quả

Trước khi xóa dữ liệu thật, hãy đồng bộ các thay đổi trên những thiết bị khác, rồi đồng bộ Anki trên máy tính để cập nhật bộ sưu tập ở đó. [Hướng dẫn đồng bộ của Anki](https://docs.ankiweb.net/syncing.html)

Vào **File → Export**, chọn **Anki Collection Package (`.colpkg`)** và bật **Include Media** để lưu cả tệp đa phương tiện. Gói này chứa tất cả bộ thẻ, lịch ôn và lịch sử ôn tập. Hãy cất tệp ở nơi an toàn. Khi nhập tệp, Anki thay toàn bộ thẻ đang có trong hồ sơ đang mở bằng bộ sưu tập đã lưu. [Tài liệu xuất bộ sưu tập Anki](https://docs.ankiweb.net/exporting.html#collection-colpkg)

Nếu muốn thử xóa trước, hãy tạo một hồ sơ riêng qua **File → Switch Profile** rồi nhập bản sao lưu vào đó. Đừng kết nối hồ sơ dùng thử với AnkiWeb. [Mỗi hồ sơ có một bộ sưu tập riêng](https://docs.ankiweb.net/profiles.html). Nếu kết nối cả hai hồ sơ với cùng một tài khoản, bộ sưu tập này có thể ghi đè lên bộ kia. Xem thêm [hướng dẫn về sao lưu và nhập tệp APKG và COLPKG](/blog/anki-apkg-vs-colpkg/) (tiếng Anh).

Trong bài thực hành, gọi thẻ hỏi nghĩa của A là A1 và thẻ hỏi từ là A2. B1 và B2 là hai thẻ tương ứng của B. Mở **Cards → Info** để ghi lại mã (**Card ID**) của hai thẻ thuộc ghi chú A, thông tin về hạn ôn, khoảng cách ôn và vài lượt ôn dễ đối chiếu trong lịch sử. Ghi lại cả mã ghi chú của B. Hãy đối chiếu trước và sau trong cùng một phiên. Trong lúc kiểm tra, đừng ôn hay đổi lịch ôn của bất kỳ thẻ nào thuộc A hoặc B.

Để xóa từng ghi chú trùng trong Anki, hãy làm theo các bước sau.

1. Trong **Browse**, thay truy vấn hiện tại bằng `nid:` kèm mã thực tế của B. Ở chế độ **Cards**, kiểm tra mọi kết quả và xem trước câu hỏi ở cả hai chiều. Khi xử lý dữ liệu thật, hãy bỏ bộ lọc theo bộ thẻ để kiểm tra cả các thẻ cùng ghi chú nằm ở bộ khác.
2. Chuyển sang chế độ **Notes**. Xác nhận kết quả duy nhất là ghi chú B cần xóa, chỉ chọn ghi chú đó rồi bấm **Notes → Delete**. [Lệnh Delete của Anki](https://docs.ankiweb.net/browsing.html#notes) xóa ghi chú đã chọn cùng mọi thẻ của ghi chú, kể cả khi bạn thực hiện lệnh từ một dòng thẻ trong chế độ **Cards**.
3. Tìm lại bằng mã ghi chú của B để xác nhận không còn kết quả. Tìm bằng `cid:` theo sau là hai mã thẻ đã ghi của A, cách nhau bằng dấu phẩy. Mở **Info** của cả hai thẻ và đối chiếu với những gì bạn đã ghi lại.
4. Tìm `deck:"Cleanup practice"` và so sánh số dòng kết quả ở hai chế độ **Notes** và **Cards**. Đối chiếu những ghi chú còn lại với bảng bên dưới.

Nếu chỉ xóa B, bạn sẽ thấy kết quả sau.

| Mục cần kiểm tra | Trước khi xóa | Kết quả đúng sau khi xóa |
| --- | --- | --- |
| Toàn bộ bộ thẻ ví dụ | 6 ghi chú / 8 thẻ | 5 ghi chú / 6 thẻ |
| Cặp ghi chú về xe đạp | A1, A2, B1, B2 | Chỉ còn A1 và A2 |
| Mã thẻ, thông tin về hạn ôn, khoảng cách ôn và lịch sử của hai thẻ thuộc ghi chú A | Các giá trị đã ghi lại | Vẫn là hai thẻ đó, với lịch ôn và các lượt ôn giữ nguyên |
| Kết quả tìm theo mã ghi chú của B | Hai thẻ của B | Không có kết quả |
| Ghi chú về bạc và từ `bank` | C, D, E, F | Vẫn còn cả bốn ghi chú |

Trong ví dụ này, xóa một ghi chú sẽ xóa hai thẻ. Nếu lỡ xóa A thay cho B, số lượng vẫn khớp dù bạn đã mất các thẻ đã ôn và định giữ lại. Hãy kiểm tra cả mã thẻ lẫn số lượng. Trong lúc dọn, hãy giữ nguyên trạng thái học và lịch ôn của các thẻ cần giữ.

Biểu đồ ôn tập của toàn bộ bộ sưu tập vẫn có thể tính các lượt ôn của những thẻ đã xóa. Dùng mã thẻ và mục **Info** của thẻ còn lại để xác nhận tiến độ học của thẻ đó.

Khi kết quả khớp với bảng đối chiếu, hãy chuyển sang nhóm tiếp theo và chọn bản cần giữ cho nhóm đó. Nếu đã thử xóa trong hồ sơ riêng, hãy lặp lại thao tác đã kiểm tra trong hồ sơ bạn dùng để học. Kiểm tra bộ sưu tập đó, đồng bộ Anki trên máy tính rồi đồng bộ các thiết bị khác trước khi ôn tiếp trên những thiết bị ấy.

Nếu các bản trùng xuất hiện do nhập tệp, hãy đọc [hướng dẫn cập nhật ghi chú bằng CSV](/blog/anki-csv-update-existing-notes/) (tiếng Anh) trước lần nhập tiếp theo. Nếu bạn tạo bản sao để xếp cùng một kiến thức vào nhiều chủ đề, hãy [gắn nhãn chủ đề cho cùng một ghi chú](/blog/anki-tags-vs-decks/) (tiếng Anh) để chỉ cần theo dõi một lịch sử ôn tập.
