---
title: "Thứ tự thẻ mới trong Anki – Chọn thẻ, sắp xếp và kiểm tra hàng đợi"
description: "Xem cách Anki chọn và sắp xếp thẻ mới qua ví dụ sáu thẻ. Kiểm tra giới hạn của bộ thẻ con, vị trí trong hàng đợi và bộ thẻ được chọn để học."
date: "2026-10-06"
image: "/blog/anki-new-card-order.png"
keywords:
  - "thứ tự thẻ mới trong Anki"
  - "thứ tự chọn thẻ mới trong Anki"
  - "thứ tự sắp xếp thẻ mới trong Anki"
  - "vị trí tăng dần trong Anki"
  - "thẻ Anki xuất hiện sai thứ tự"
---

Trong Anki, thẻ mới ở vị trí 10 có thể xuất hiện sau thẻ ở vị trí 60. Khi bạn học một bộ thẻ cha với cách chọn **Theo bộ thẻ (Deck)** và cách xếp **Theo thứ tự đã chọn (Order gathered)**, Anki có thể chọn xong thẻ từ bộ con đứng trước rồi mới đến bộ chứa thẻ ở vị trí 10. Sắp xếp bảng trong cửa sổ duyệt thẻ theo ngày tạo không làm thay đổi hàng đợi học.

Anki xử lý thứ tự thẻ mới qua hai bước. Bước **chọn thẻ** quyết định thẻ nào được đưa vào trong phạm vi giới hạn hôm nay. Bước **sắp xếp** quyết định thứ tự xuất hiện của các thẻ đã chọn. Trước hết, hãy xem Anki có chọn đúng nhóm thẻ bạn muốn học hay không. Nếu nhóm thẻ đã đúng, hãy kiểm tra thứ tự xuất hiện.

Hướng dẫn này áp dụng cho các bộ thẻ thông thường trong Anki trên máy tính. Ví dụ sáu thẻ là phép tính minh họa được xây dựng từ tài liệu hướng dẫn hiện hành và bản phát hành [Anki 26.09.3](https://github.com/ankitects/anki/releases/tag/26.09.3), đối chiếu ngày 6 tháng 10 năm 2026. Ví dụ được tính trên giấy, không chạy thử trong ứng dụng.

![Một người đàn ông cầm chiếc đĩa than thứ tư phía trên một ngăn trống trên kệ, cạnh ba chiếc đĩa khác. Phía sau anh là hai thùng đĩa chưa được chọn.](/blog/anki-new-card-order.png)

## Chọn thứ tự bạn muốn dùng khi học

Mở **Tùy chọn (Options)** của bộ thẻ bạn bấm vào để học, rồi tìm mục **Thứ tự hiển thị (Display Order)**. Khi bạn học một bộ thẻ cha, cài đặt thứ tự hiển thị của bộ đó áp dụng cho cả phiên học, kể cả với thẻ từ các bộ con.

| Kết quả mong muốn | Thứ tự chọn thẻ mới (New Card Gather Order) | Thứ tự sắp xếp thẻ mới (New Card Sort Order) |
| --- | --- | --- |
| Đi theo vị trí thẻ mới từ thấp đến cao trong bộ đã chọn và tất cả các bộ con | Vị trí tăng dần (Ascending position) | Theo thứ tự đã chọn |
| Ưu tiên các bộ con theo thứ tự chữ cái, rồi xét vị trí thẻ trong từng bộ | Theo bộ thẻ | Theo thứ tự đã chọn |
| Giữ nguyên nhóm thẻ đã chọn và xáo trộn thứ tự xuất hiện | Cách chọn thẻ bạn muốn dùng | Ngẫu nhiên (Random) |

Các tổ hợp này dựa trên định nghĩa của Anki trong tài liệu tiếng Anh về [thứ tự chọn thẻ mới](https://docs.ankiweb.net/manual/deck-options#new-card-gather-order) và [thứ tự sắp xếp thẻ mới](https://docs.ankiweb.net/manual/deck-options#new-card-sort-order). **Vị trí tăng dần** dựa vào vị trí thẻ mới mà Anki lưu. Thứ tự chèn thẻ và việc đổi vị trí thủ công có thể làm các vị trí này khác với thứ tự theo ngày tạo.

Trước khi chỉnh, hãy xem bộ thẻ đang dùng cấu hình nào và những bộ nào khác dùng chung cấu hình đó. Cài đặt thứ tự hiển thị thuộc về cấu hình. Nếu chỉ muốn thay đổi bộ này, trước tiên hãy làm theo [hướng dẫn dùng cấu hình riêng cho một bộ thẻ](/blog/anki-deck-options-presets/) (tiếng Anh). Giới hạn hằng ngày có thể được ghi đè bằng **Bộ thẻ này (This deck)** hoặc **Chỉ hôm nay (Today only)**. Các bộ dùng chung cấu hình vẫn dùng chung cài đặt thứ tự hiển thị.

## Tính xem bốn thẻ nào được chọn

Giả sử có một bộ thẻ cha thông thường tên `OrderLab`, gồm hai bộ con và chỉ có sáu thẻ dưới đây. Mỗi thẻ đến từ một ghi chú thuộc loại **Cơ bản (Basic)** riêng, mỗi ghi chú tạo đúng một thẻ. Vì vậy, cả sáu thẻ có cùng số thứ tự loại thẻ và không có thẻ nào cùng ghi chú với thẻ khác.

| Thẻ | Bộ thẻ | Vị trí thẻ mới đã lưu |
| --- | --- | --- |
| A | OrderLab::01 First | 20 |
| B | OrderLab::01 First | 40 |
| C | OrderLab::01 First | 60 |
| D | OrderLab::02 Second | 10 |
| E | OrderLab::02 Second | 30 |
| F | OrderLab::02 Second | 50 |

Giả sử cả sáu đều là thẻ mới, không thẻ nào bị ẩn tạm thời, bị tạm ngưng hay nằm trong bộ thẻ lọc. Lúc bắt đầu, không có thẻ nào khác, không có lượt lặp trong giai đoạn học và cũng không có lượt ôn tập. Hôm nay bạn chưa học thẻ nào. `OrderLab` không có bộ thẻ cấp trên, và các giới hạn ôn tập áp dụng vẫn đủ chỗ cho cả sáu thẻ mới.

Chọn **OrderLab** để học. Giới hạn thẻ mới có hiệu lực của bộ này là **4**. Giới hạn của `01 First` là **3**, của `02 Second` là **2**, và không có giới hạn tạm thời nào ghi đè các mức này. Giữ cách sắp xếp **Theo thứ tự đã chọn** trong cả hai trường hợp. Hãy tính trên giấy, bắt đầu từ cùng một trạng thái ban đầu của bộ sưu tập và không trả lời thẻ giữa hai lần so sánh.

Khi chọn **Theo bộ thẻ**, Anki làm như sau.

1. Anki xét `01 First` trước `02 Second` theo thứ tự chữ cái.
2. Anki chọn **A, B, C** theo thứ tự vị trí. `01 First` đã góp ba thẻ, nên bộ cha còn chỗ cho một thẻ.
3. Anki chọn **D** từ `02 Second` và chạm giới hạn bốn thẻ của bộ cha.

Thứ tự dự kiến khi các thẻ mới xuất hiện lần đầu là **A → B → C → D**. E và F nằm ngoài nhóm được chọn.

Với **Vị trí tăng dần**, Anki xét thẻ ở cả hai bộ con theo thứ tự **D → A → E → B → F → C**. Bốn thẻ đầu đều nằm trong giới hạn cho phép, với hai thẻ từ `02 Second`, hai thẻ từ `01 First` và tổng cộng bốn thẻ. Anki dừng chọn ở đó.

Thứ tự dự kiến là **D → A → E → B**. C và F nằm ngoài nhóm này. Anki áp dụng giới hạn của từng bộ thẻ và bộ cha khi đưa từng thẻ vào nhóm đã chọn, như thể hiện trong [mã chọn thẻ của bản phát hành](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/gathering.rs).

Giới hạn hai thẻ của `02 Second` là số tối đa bộ này có thể góp. Khi chọn **Theo bộ thẻ**, `02 Second` chỉ góp một thẻ vì `01 First` đã dùng ba trong bốn chỗ. Với **Vị trí tăng dần**, mỗi bộ góp hai thẻ do cách các vị trí xen kẽ trong ví dụ này. Trong bộ sưu tập khác, hai bộ có thể góp số thẻ khác nhau.

## Cho cả sáu thẻ vào để xem riêng thứ tự xuất hiện

Trong phép tính thứ hai trên giấy, đặt giới hạn đủ để chọn cả sáu thẻ. Đặt bộ cha ở mức **6**, `01 First` ở mức **3** và `02 Second` ở mức **3**. Giữ cách sắp xếp **Theo thứ tự đã chọn**.

| Cách chọn thẻ | Giới hạn (bộ cha / 01 First / 02 Second) | Thứ tự xuất hiện lần đầu dự kiến |
| --- | --- | --- |
| Theo bộ thẻ | 6 / 3 / 3 | A → B → C → D → E → F |
| Vị trí tăng dần | 6 / 3 / 3 | D → A → E → B → F → C |

Cả hai cách đều chọn đủ sáu thẻ. Lúc này, chúng chỉ khác nhau về thứ tự xuất hiện. Nếu chỉ tăng giới hạn của bộ cha lên sáu và giữ giới hạn của `02 Second` ở hai, Anki chỉ chọn được năm thẻ. F vẫn nằm ngoài nhóm. Các mức tăng này chỉ dùng để minh họa phép tính và không phải là khuyến nghị tăng số thẻ mới học mỗi ngày.

## Sắp xếp chỉ tác động đến những thẻ đã chọn

Quay về giới hạn ban đầu **4 / 3 / 2** và chỉ đổi **Thứ tự sắp xếp thẻ mới** sang **Ngẫu nhiên**.

| Cách chọn thẻ | Thẻ được đem ra xáo trộn | Thẻ bước sắp xếp không thể thêm vào |
| --- | --- | --- |
| Theo bộ thẻ | A, B, C, D | E, F |
| Vị trí tăng dần | D, A, E, B | C, F |

Anki xáo trộn thứ tự xuất hiện, còn thành phần của mỗi nhóm vẫn giữ nguyên. Từ bảng này, bạn không thể dự đoán một thứ tự ngẫu nhiên cụ thể. Anki chỉ xếp lại những thẻ đã chọn ở bước trước, như thể hiện trong [mã sắp xếp của bản phát hành](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/sorting.rs).

**Theo loại thẻ, rồi theo thứ tự đã chọn (Card type, then order gathered)** cũng áp dụng cho nhóm thẻ đã chọn. Vì cả sáu thẻ thuộc loại ghi chú **Cơ bản** có cùng số thứ tự loại thẻ, tùy chọn này giữ nguyên thứ tự Anki đã chọn chúng trong ví dụ.

Xét riêng bước sắp xếp với một ví dụ khác. Giả sử Anki đã chọn bốn thẻ từ các ghi chú có nhiều mẫu thẻ, theo thứ tự **W (loại 2), X (loại 1), Y (loại 2), Z (loại 1)**. Sắp xếp theo loại thẻ cho kết quả **X → Z → W → Y**. Loại 1 đứng trước, và trong mỗi loại, các thẻ giữ nguyên thứ tự đã chọn. Ví dụ bắt đầu sau bước chọn thẻ, nên không cho biết thẻ nào trong số các thẻ cùng ghi chú sẽ được chọn với cài đặt ẩn tạm thời của bạn.

Số thứ tự loại thẻ là vị trí của mẫu thẻ trong loại ghi chú tương ứng. Mẫu thẻ của bạn quyết định thẻ nào dùng để luyện “nhận biết” và thẻ nào dùng để luyện “tự diễn đạt”. Hãy xem nội dung câu hỏi trước khi cho rằng sắp xếp theo loại thẻ sẽ đưa mọi câu hỏi theo chiều thuận lên đầu.

## Kiểm tra vị trí trong cửa sổ duyệt thẻ trước khi chỉnh

Mở **Duyệt (Browse)**, chọn chế độ **Thẻ (Cards)** rồi tìm trong bộ thẻ và các bộ con. Với ví dụ này, dùng truy vấn sau.

```text
deck:OrderLab is:new
```

Dùng menu ở hàng tiêu đề để hiện các cột **Câu hỏi (Question)**, **Thẻ (Card)**, **Bộ thẻ (Deck)**, **Đến hạn (Due)** và **Ngày tạo (Created)**. Với thẻ mới, **Đến hạn** hiển thị vị trí của thẻ trong hàng đợi, còn **Ngày tạo** cho biết thời điểm tạo ghi chú của thẻ. **Trường sắp xếp (Sort Field)** hiển thị nội dung trường ghi chú được chỉ định để sắp xếp. Sắp xếp theo một cột chỉ đổi thứ tự các dòng trong bảng. Vị trí đã lưu và cài đặt chọn thẻ khi học vẫn giữ nguyên. Anki giải thích sự khác nhau giữa các giá trị này trong [tài liệu về các cột trong cửa sổ duyệt thẻ](https://docs.ankiweb.net/manual/browsing#columns) (tiếng Anh).

Truy vấn `is:new` có thể trả về cả thẻ mới bị tạm ngưng hoặc bị ẩn tạm thời. Giá trị **Đến hạn** của các thẻ này nằm trong dấu ngoặc. Truy vấn dưới đây loại các thẻ đó cùng những thẻ đang nằm trong bộ thẻ lọc.

```text
deck:OrderLab is:new -is:suspended -is:buried -deck:filtered
```

Tài liệu tiếng Anh của Anki hướng dẫn cách [tìm theo trạng thái thẻ](https://docs.ankiweb.net/manual/searching#card-state) và [tìm theo bộ thẻ](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes). Nếu tên bộ có khoảng trắng, hãy đặt tên trong dấu ngoặc kép, như `deck:"My Deck"`. Kết quả tìm kiếm chỉ cho biết những thẻ cần kiểm tra. Các giới hạn và việc tự động ẩn thẻ cùng ghi chú có thể làm giảm số thẻ thực sự vào hàng đợi hôm nay. Xem [hướng dẫn phân biệt ẩn tạm thời và tạm ngưng thẻ](/blog/anki-bury-vs-suspend/) (tiếng Anh) để hiểu vì sao một số thẻ chưa thể xuất hiện.

Nếu vị trí hiện tại đã đúng với thứ tự bạn muốn, hãy giữ nguyên. Nếu cần đổi, hãy ghi lại các vị trí cũ, chọn đúng nhóm nhỏ thẻ mới cần chỉnh rồi dùng **Thẻ → Đổi vị trí (Cards → Reposition)**. Kiểm tra hộp thoại trước khi xác nhận. Tùy chọn **Dịch vị trí của các thẻ hiện có (Shift position of existing cards)** có thể đổi cả vị trí của những thẻ ngoài nhóm đã chọn có số vị trí cao hơn. Nếu không bật tùy chọn này, vị trí mới có thể trùng với vị trí đã có. Khi hai thẻ trùng vị trí, chỉ nhìn vào con số đó thì không thể biết thẻ nào sẽ xuất hiện trước. Xem [hướng dẫn về thao tác Đổi vị trí](https://docs.ankiweb.net/manual/browsing#cards) của Anki (tiếng Anh).

Bạn có thể đổi cách chọn hoặc sắp xếp thẻ mà vẫn giữ nguyên lịch sử học và ôn tập. Khi tìm nguyên nhân, hãy tập trung vào vị trí thẻ mới và thứ tự hiển thị.

## Kiểm tra bộ thẻ bạn bấm vào và số thẻ còn được học hôm nay

Trong ví dụ ban đầu, nếu chọn trực tiếp `OrderLab::02 Second`, Anki chỉ xét D, E và F. Với giới hạn hai thẻ, cách chọn **Vị trí tăng dần** và cách xếp **Theo thứ tự đã chọn**, thứ tự dự kiến là **D → E**. Kể cả khi giới hạn của bộ cấp trên được áp dụng, `OrderLab` vẫn còn nguyên bốn chỗ, đủ để cả hai thẻ xuất hiện. Nếu chọn bộ cha với cách chọn **Theo bộ thẻ** và các giới hạn **4 / 3 / 2**, kết quả là **A → B → C → D**.

Khi bắt đầu phiên học từ `OrderLab`, Anki dùng thứ tự hiển thị của `OrderLab`. Việc chỉnh thứ tự hiển thị của `02 Second` không quyết định thứ tự cho phiên học đó. Bộ thẻ bạn chọn quy định thứ tự hiển thị và giới hạn tổng số thẻ, còn các giới hạn của từng bộ con vẫn được áp dụng khi có liên quan. **Tính giới hạn từ bộ cấp cao nhất (Limits start from top)** quyết định có tính cả giới hạn của các bộ cấp trên khi bạn học trực tiếp một bộ con hay không. Tài liệu tiếng Anh của Anki giải thích [quy tắc dành cho bộ thẻ con](https://docs.ankiweb.net/manual/deck-options#subdecks) và [tùy chọn áp dụng giới hạn của bộ cấp trên](https://docs.ankiweb.net/manual/deck-options#limits-start-from-top).

Hãy kiểm tra cả giới hạn ôn tập. Theo mặc định, giới hạn ôn tập cũng giới hạn số thẻ mới. Tùy chọn **Thẻ mới bỏ qua giới hạn ôn tập (New cards ignore review limit)** thay đổi cách tính đó. Cả tùy chọn này và **Tính giới hạn từ bộ cấp cao nhất** đều áp dụng cho toàn bộ bộ sưu tập, như thể hiện trong [mã giao diện giới hạn hằng ngày của bản phát hành](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/DailyLimits.svelte). Hãy ghi lại trạng thái của cả hai trước khi tính xem hôm nay còn học được bao nhiêu thẻ mới.

Dùng **Xem trước (Preview)** trong cửa sổ duyệt thẻ để xem câu hỏi mà không cần trả lời. Trong phiên học bình thường tiếp theo, hãy ghi lại các mục sau.

| Thông tin cần ghi | Câu hỏi cần làm rõ |
| --- | --- |
| Bộ thẻ bạn bấm vào để học, cấu hình của bộ đó, cách chọn và cách sắp xếp thẻ mới | Cài đặt thứ tự hiển thị nào áp dụng cho phiên học? |
| Các thẻ dự kiến xuất hiện và vị trí đã lưu của chúng | Vấn đề nằm ở nhóm thẻ được chọn hay ở thứ tự xuất hiện? |
| Giới hạn thẻ mới và ôn tập, các mức ghi đè cho bộ thẻ hoặc chỉ hôm nay, và số thẻ đã học hôm nay | Hôm nay còn chỗ cho bao nhiêu thẻ? |
| Giới hạn của các bộ cấp trên và hai tùy chọn giới hạn áp dụng cho toàn bộ bộ sưu tập | Còn giới hạn nào được áp dụng? |
| Thẻ bị ẩn tạm thời, bị tạm ngưng, nằm trong bộ thẻ lọc hoặc cùng ghi chú với thẻ khác | Trong số các thẻ có vẻ đủ điều kiện, thẻ nào có thể chưa xuất hiện? |
| Thứ tự thẻ mới thực sự xuất hiện lần đầu, ghi riêng với các lượt lặp trong giai đoạn học | Thứ tự thẻ mới có khớp với dự kiến không? |

Sau khi bạn trả lời một thẻ mới, các lượt lặp trong giai đoạn học có thể xen vào phiên học. **Thứ tự thẻ mới và thẻ ôn tập (New/Review Order)** đặt thẻ mới trước, sau hoặc xen giữa các lượt ôn tập. Việc chọn và sắp xếp thẻ mới vẫn do hai cài đặt riêng quyết định. Anki kết hợp các nhóm thẻ này sau khi sắp xếp thẻ mới, như thể hiện trong [mã dựng hàng đợi của bản phát hành](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/mod.rs).

Bạn có thể dừng kiểm tra khi nhóm thẻ được chọn và thứ tự xuất hiện lần đầu đều khớp với dự kiến. Nếu vẫn có chênh lệch, hãy giữ lại vị trí thẻ, các cài đặt, bộ thẻ đã chọn, phiên bản Anki và thứ tự quan sát được để khoanh vùng nguyên nhân. Ghi cả các tiện ích bổ sung có liên quan. Nếu mục tiêu là luyện thêm một chủ đề, hãy xem [hướng dẫn riêng về cách luyện tập với bộ thẻ lọc](/blog/anki-filtered-decks-without-rescheduling/) (tiếng Anh).
