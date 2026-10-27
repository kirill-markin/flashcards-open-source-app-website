---
title: "Cách nhập thẻ ghi nhớ vào Quizlet từ Excel, Sheets hoặc văn bản"
description: "Nhập danh sách từ gồm hai cột vào Quizlet, chọn tab và xuống dòng, rồi sửa định nghĩa bị tách, thẻ thừa và lỗi CSV trước khi xuất bản."
date: "2026-09-15"
image: "/blog/how-to-import-flashcards-into-quizlet.png"
keywords:
  - "cách nhập thẻ ghi nhớ vào Quizlet"
  - "định dạng nhập thẻ vào Quizlet"
  - "nhập thẻ vào Quizlet từ Excel"
  - "Google Sheets sang Quizlet"
  - "nhập thẻ vào Quizlet bằng ký tự tab"
---

“Red, green, blue” trông như một câu trả lời bình thường trên thẻ ghi nhớ. Nhưng nếu bạn dùng dấu phẩy để phân cách thuật ngữ với định nghĩa, chính những dấu phẩy ấy sẽ khiến hàng dữ liệu khó phân biệt đâu là phần nào. Chỉ vài dấu câu cũng có thể khiến bạn phải sửa lại cả danh sách từ đã chuẩn bị.

Để nhập thẻ ghi nhớ vào Quizlet từ Excel, Google Sheets hoặc văn bản, hãy bắt đầu với hai cột: một cột thuật ngữ, một cột định nghĩa. Sao chép dữ liệu, dán vào biểu mẫu nhập trên trang web rồi chọn tab để phân cách các trường và xuống dòng để phân cách các thẻ. Thử với bốn hàng trước để kiểm tra từng cặp rồi mới chuyển toàn bộ danh sách.

![Người thợ gốm ghép từng chiếc cốc với đĩa lót tương ứng thành các hàng riêng trước khi chuyển lên kệ](/blog/how-to-import-flashcards-into-quizlet.png)

## Tìm biểu mẫu nhập của Quizlet ở đâu

Quizlet hướng dẫn nhập dữ liệu trên trang web, dùng dấu phẩy, tab hoặc dấu gạch ngang giữa các trường và dấu chấm phẩy hoặc xuống dòng giữa các thẻ. [Hướng dẫn nhập chính thức](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) đưa ra các bước sau:

1. Đăng nhập và chọn **Create → Flashcard set** (Tạo → Bộ thẻ ghi nhớ).
2. Nhập tiêu đề, chọn **Import** (Nhập) rồi dán văn bản.
3. Chọn dấu phân cách khớp với dữ liệu đầu vào. Với các ví dụ trong bài này, hãy dùng **Tab** và **New line** (Xuống dòng).
4. Chọn **Import**, sau đó chọn ngôn ngữ của thuật ngữ và định nghĩa.
5. Kiểm tra các thẻ trước khi chọn **Create** để lưu và xuất bản bộ thẻ.

Hướng dẫn này được kiểm tra vào ngày 15 tháng 9 năm 2026. Các ví dụ dưới đây giải thích cách chuẩn bị và kiểm tra văn bản; chúng không mô tả một lần thử sau khi đăng nhập.

## Bắt đầu với một vùng dữ liệu nhỏ trong bảng tính

Trong Excel hoặc Google Sheets, đặt mỗi cặp thuật ngữ–định nghĩa trên một hàng. Đây là ví dụ thử với bốn thẻ:

| Thuật ngữ | Định nghĩa |
| --- | --- |
| rojo | red |
| azul | blue |
| verde | green |
| colores primarios de la luz | red, green, blue |

Chỉ sao chép bốn hàng dữ liệu trong hai cột. Nếu hàng tiêu đề nằm ở hàng 1, hãy chọn **A2:B5**. Không đưa hàng tiêu đề vào vùng sao chép.

Kết quả cần có là bốn thẻ với thuật ngữ tiếng Tây Ban Nha và định nghĩa tiếng Anh. Ở thẻ cuối, “colores primarios de la luz” (các màu cơ bản của ánh sáng) phải nằm trọn ở một mặt và “red, green, blue” nằm trọn ở mặt còn lại. Các dấu phẩy là một phần của câu trả lời.

Khi đã hiểu rõ ví dụ này, hãy chuẩn bị bảng tính của bạn. Làm trên một bản sao để giữ bản gốc đối chiếu. Xóa các hàng trống và không chọn những cột ghi chú hoặc cột thừa. Điền đầy đủ thuật ngữ hoặc định nghĩa còn thiếu trước khi sao chép.

Khi sắp xếp, hãy giữ hai cột đi cùng nhau. Nếu chỉ sắp xếp cột thuật ngữ, chúng sẽ không còn khớp với câu trả lời. Khi đó, dù số thẻ sau khi nhập vẫn đúng, các cặp nội dung vẫn có thể sai.

## Định dạng văn bản thuần dùng ký tự tab thật

Bốn hàng trên có dạng như sau khi được viết thành văn bản phân cách bằng tab. Mỗi khoảng cách giữa thuật ngữ và định nghĩa chứa đúng một ký tự tab thật:

```text
rojo	red
azul	blue
verde	green
colores primarios de la luz	red, green, blue
```

Tab là một ký tự riêng. Nhiều dấu cách đặt liền nhau có thể trông tương tự, nhưng không tạo thành dấu phân cách tab. Gõ hai ký tự `\t` cũng không chèn được tab. Nếu trình soạn thảo văn bản khiến việc này khó thực hiện, hãy đặt các cặp vào hai cột trong bảng tính rồi sao chép các ô đó.

Trong dữ liệu, mỗi thẻ phải nằm trọn trên một dòng. Một định nghĩa dài có thể hiển thị thành hai dòng vì cửa sổ hẹp; việc này không thêm ký tự xuống dòng vào nội dung. Nhưng thao tác chèn xuống dòng bên trong một ô bảng tính thì có. Hãy xóa những ký tự xuống dòng bên trong ô trước khi dùng xuống dòng để phân cách các thẻ.

Đồng thời, xóa mọi ký tự tab nằm bên trong thuật ngữ hoặc định nghĩa. Với định dạng này, tab chỉ được dùng để phân cách hai trường.

## Nếu danh sách của bạn là tệp CSV

Mở CSV trong bảng tính trước khi chuẩn bị nhập. Một bản ghi CSV như dưới đây có hai trường khi được đọc theo đúng quy tắc về dấu ngoặc kép:

```text
"colores primarios de la luz","red, green, blue"
```

Câu trả lời trong dấu ngoặc kép chứa các dấu phẩy. Một ô nhập văn bản tách dữ liệu theo dấu phẩy chưa chắc đã có khả năng đọc CSV, vì vậy đừng dựa vào dấu ngoặc kép để giữ nguyên câu trả lời trong ô nhập đó.

Trong Excel hoặc Google Sheets, kiểm tra xem bản ghi có nằm trong đúng hai ô hay không. Sau đó sao chép các ô để có dữ liệu phân cách bằng tab. Nếu câu trả lời đã bị tách sang các cột thừa, hãy sửa cài đặt nhập CSV của bảng tính trước. Sao chép hàng bị lỗi sẽ mang nguyên lỗi đó sang bước tiếp theo.

Cũng nên kiểm tra những giá trị mà bảng tính có thể tự diễn giải lại. Nếu `0012` là một mã bạn cần học, việc chuyển thành `12` sẽ làm thay đổi nội dung thẻ. Đối chiếu mã định danh, ngày tháng, dấu ngoặc kép và các từ có dấu với tệp gốc trước khi sao chép vùng dữ liệu.

## Khi các thẻ không khớp với các hàng dữ liệu

Dùng ví dụ thử để tìm chỗ sai đầu tiên. Mỗi lần chỉ thay đổi một yếu tố, rồi so sánh kết quả với cùng bốn hàng nguồn.

| Dấu hiệu | Vấn đề phân cách có thể gặp | Cách sửa |
| --- | --- | --- |
| Câu trả lời bị tách ở các dấu phẩy | Đã chọn dấu phẩy để phân cách các trường | Chuẩn bị hai cột và chọn Tab |
| “well-being” bị tách ngay trong thuật ngữ | Đã chọn dấu gạch ngang để phân cách các trường | Giữ nguyên dấu gạch nối và dùng tab để phân cách các trường |
| Một câu trả lời trở thành nhiều thẻ | Dữ liệu nguồn có ký tự xuống dòng bên trong | Đưa toàn bộ câu trả lời về một dòng trong dữ liệu |
| “Term” và “Definition” xuất hiện thành một thẻ | Đã sao chép cả hàng tiêu đề | Chỉ chọn các hàng dữ liệu |
| Cả hai trường nằm ở cùng một mặt thẻ | Dùng dấu cách thay cho tab | Sao chép vùng dữ liệu gồm hai cột trong bảng tính |

Ví dụ, một câu trả lời có “first stage” và “second stage” trên hai dòng riêng có thể được đổi thành `first stage; second stage`. Cách này giữ cả hai phần trên một dòng. Khi dùng dấu chấm phẩy bên trong câu trả lời, hãy giữ lựa chọn **New line** để phân cách các thẻ.

Nếu hai giai đoạn cần được hỏi riêng, hãy viết thành hai cặp hoàn chỉnh. [Hướng dẫn làm thẻ ghi nhớ hiệu quả hơn](/blog/how-to-make-better-flashcards/) (bằng tiếng Anh) có thể giúp bạn quyết định.

## Kiểm tra kết quả trước khi xuất bản

Kiểm tra cả bốn thẻ của ví dụ thử. Với toàn bộ danh sách, đối chiếu các thẻ đã nhập với dữ liệu nguồn đã làm sạch:

- Tổng số thẻ có khớp với số hàng dữ liệu đầy đủ không?
- Cặp đầu tiên và cuối cùng có khớp không, kể cả toàn bộ câu trả lời?
- Dấu câu, dấu phụ trong từ và mã có được giữ nguyên không?
- Có mặt thẻ trống, hàng tiêu đề, thẻ trùng hoặc câu trả lời ghép nhầm với thuật ngữ không?
- Mỗi câu trả lời mà bạn đã sửa chỗ xuống dòng có còn rõ nghĩa không?

Đọc cả một vài cặp bình thường bên cạnh những cặp đáng ngờ. Số lượng khớp nhau vẫn không giúp phát hiện câu trả lời sai được ghép với một thuật ngữ hợp lệ. Nếu có lỗi, hãy sửa dữ liệu nguồn trước khi nhập lại. Giữ tệp đã làm sạch để dùng cho những lần chỉnh sửa sau.

## Các cặp thuật ngữ–định nghĩa có sẵn hay thẻ do AI tạo?

Quizlet cũng mô tả tính năng tạo thẻ có hỗ trợ AI từ tài liệu được cung cấp trong [phần giới thiệu về tạo thẻ bằng AI](https://quizlet.com/content/create-flashcards-from-words-and-definitions-with-quizlet-ai). Nội dung được tạo ra cần được kiểm tra riêng. Với danh sách thuật ngữ–định nghĩa đã hoàn chỉnh, quy trình nhập có cấu trúc giúp bạn đối chiếu dữ liệu được chuyển sang với các cặp đã viết.

Bạn đang có các đoạn văn? Hãy [chuyển ghi chú thành thẻ ghi nhớ](/blog/turn-notes-into-flashcards/) (hướng dẫn bằng tiếng Anh) trước khi chuẩn bị văn bản để nhập. Bạn muốn chuyển bộ thẻ theo chiều ngược lại? Xem [hướng dẫn xuất bộ thẻ Quizlet](/vi/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/).
