---
title: "Cài đặt FSRS phù hợp cho Anki năm 2026: Mức ghi nhớ, bước học và lượng ôn tập"
description: "Chọn cài đặt FSRS an toàn cho Anki 26.08 dùng FSRS-6: mức ghi nhớ mong muốn, bước học, tối ưu tham số, lên lịch lại và lượng ôn tập."
date: "2026-04-25"
updated: "2026-09-08"
image: "/blog/fsrs-settings-v2.png"
keywords:
  - "cài đặt FSRS"
  - "cài đặt FSRS tốt nhất"
  - "cài đặt FSRS Anki"
  - "mức ghi nhớ mong muốn FSRS"
  - "bước học FSRS"
  - "trình mô phỏng FSRS"
  - "tối ưu tham số FSRS"
  - "FSRS-6"
---

Tăng mức ghi nhớ mong muốn trong Anki từ 90% lên 95% nghe có vẻ là một thay đổi nhỏ. Nhưng lượng học không chỉ tăng thêm 5%. FSRS phải rút ngắn khoảng cách giữa các lần ôn khi mục tiêu tăng lên, và một bộ sưu tập đã học lâu có thể phát sinh nhiều thẻ cần ôn hơn hẳn. Nếu bạn còn bật **Reschedule cards on change** (lên lịch lại cho thẻ khi thay đổi cài đặt), một phần lượng ôn đó có thể xuất hiện ngay lập tức.

Muốn chọn cài đặt FSRS phù hợp, bạn cần làm nhiều hơn là sao chép một dãy tham số. Hãy xác định lượng học có thể duy trì, chọn mục tiêu ghi nhớ trong giới hạn đó, khớp mô hình với lịch sử ôn tập của chính mình, rồi giữ nguyên ngày đến hạn hiện tại trừ khi bạn chủ động muốn tính lại lịch.

Tên tùy chọn và cách hoạt động dưới đây tương ứng với [Anki 26.08](https://github.com/ankitects/anki/releases/tag/26.08) cùng các tùy chọn FSRS-6 của phiên bản này. Nếu bạn muốn hiểu mô hình trước khi tìm hiểu cài đặt, hãy đọc [FSRS là gì?](/blog/what-is-fsrs/). Nếu bạn còn đang chọn thuật toán lên lịch, hãy bắt đầu với [FSRS và SM-2](/blog/fsrs-vs-sm-2/).

> **Thông tin về tác giả:** Tôi là Kirill Markin, người phát triển [Nibomo](/vi/features/). Anki hỗ trợ khớp tham số theo từng người dùng và các công cụ thử nghiệm để mô phỏng lượng ôn tập mà Nibomo hiện chưa có. Phần so sánh gần cuối bài nêu rõ những khác biệt đó.

**Ngày kiểm chứng thông tin:** 8 tháng 9 năm 2026.

![Người vận hành âu tàu thử dòng nước trên mô hình thu nhỏ trước khi điều chỉnh âu tàu thật](/blog/fsrs-settings-v2.png)

## Câu trả lời ngắn gọn: bắt đầu từ đây

Với phần lớn người dùng Anki, đây là những lựa chọn khởi đầu an toàn. Bạn vẫn cần điều chỉnh theo hoàn cảnh của mình:

| Cài đặt hoặc thói quen | Lựa chọn khởi đầu an toàn | Lý do |
| --- | --- | --- |
| Mức ghi nhớ mong muốn | `0.90` | Đây là mặc định của Anki, giúp cân bằng khả năng nhớ với lượng ôn tập. |
| Tham số FSRS | Dùng **Optimize Current Preset**; không dán hoặc sửa trọng số bằng tay | Công cụ tối ưu khớp mô hình với lịch sử ôn tập của bạn. |
| Tần suất tối ưu | Tối đa mỗi tháng một lần; thường vài tháng một lần là đủ | Anki không khuyến nghị tối ưu thường xuyên. |
| Các bước học | Giữ số bước ít và hoàn thành trong ngày | Chuỗi bước dài làm chậm thời điểm chuyển sang lịch do mô hình tính toán. |
| Các bước học lại | Giữ ở mức tối thiểu và ngắn hơn một ngày | Giới hạn tương tự cũng áp dụng sau khi bạn không nhớ được một thẻ đang ôn. |
| Lên lịch lại khi thay đổi cài đặt | Tắt | Cài đặt mới có thể áp dụng qua các lần ôn sau mà không tính lại danh sách ôn hôm nay. |
| Khoảng cách ôn tối đa | Giữ mặc định 100 năm | Giới hạn ngắn hơn buộc những thẻ đã thuộc lâu quay lại thường xuyên hơn. |
| Thẻ mới mỗi ngày | Chọn theo lượng học bạn có thể duy trì | Mỗi thẻ mới tạo ra việc học ngay bây giờ và việc ôn về sau. |
| Again và Hard | Again là không nhớ được; Hard là nhớ đúng nhưng khó khăn | Đánh giá sai cung cấp lịch sử sai cho mô hình. |

Nếu lượng ôn vẫn trong khả năng của bạn và cài đặt hiện tại đã gần như trên, có thể chẳng cần sửa gì cả. Chăm chút cài đặt không thay thế cho việc học.

## Tách riêng ba quyết định

Mọi người thường gộp mức ghi nhớ mong muốn, tham số FSRS và lượng học hằng ngày thành một vấn đề. Thực ra chúng điều khiển những thứ khác nhau:

- **Mức ghi nhớ mong muốn** là mục tiêu nhớ lại. Bạn chọn theo mục đích học và thời gian có thể dành cho việc học.
- **Tham số FSRS** dùng để khớp mô hình trí nhớ với lịch sử ôn tập. Công cụ tối ưu của Anki tính toán các tham số này.
- **Giới hạn thẻ mới và lượt ôn** quyết định lượng kiến thức được đưa vào hệ thống và số thẻ đến hạn mà Anki có thể hiển thị mỗi ngày.

Phân biệt rõ như vậy giúp tìm nguyên nhân dễ hơn nhiều. Danh sách ôn dài không nhất thiết có nghĩa là tham số sai. Bộ thẻ quan trọng không nhất thiết cần một bộ cấu hình tham số riêng. Và giảm mức ghi nhớ mong muốn cũng không khắc phục được tốc độ thêm thẻ vốn đã quá sức ngay từ đầu.

## Chọn mức ghi nhớ theo lượng học, đừng chỉ theo mong muốn

Mức ghi nhớ mong muốn cho FSRS biết bạn muốn xác suất nhớ được một thẻ là bao nhiêu khi thẻ đến hạn ôn. Với `0.90`, FSRS lên lịch dựa trên xác suất nhớ lại được dự đoán là 90%. Đây là mục tiêu của mô hình, không phải bảo đảm rằng mọi buổi học hay kỳ thi đều có đúng 90% câu trả lời chính xác.

Sự đánh đổi diễn ra theo cả hai hướng:

- Tăng mức ghi nhớ mong muốn thì khoảng cách ôn ngắn lại và số lượt ôn tăng lên.
- Giảm mức đó thì khoảng cách ôn dài ra và số lần không nhớ được tăng lên.
- Giảm quá thấp thì việc học lại sau khi quên có thể tiêu tốn một phần thời gian bạn định tiết kiệm.

Anki mặc định ở mức 90%. [Hướng dẫn về mức ghi nhớ mong muốn](https://docs.ankiweb.net/deck-options.html#desired-retention) cảnh báo rằng lượng ôn tăng nhanh khi mục tiêu gần 100% và khuyến nghị giữ dưới 97%. [Giải thích chính thức về mức ghi nhớ tối ưu](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) đề cập đến đầu bên kia của đường cong: mức ghi nhớ rất thấp cũng có thể kém hiệu quả vì những thẻ đã quên đòi hỏi thêm công sức.

Hãy bắt đầu ở `0.90`, rồi chỉ thay đổi sau khi xem xét lượng ôn tập. Mục tiêu cao hơn có thể hợp lý với kiến thức mà việc quên gây hậu quả thực sự. Mục tiêu thấp hơn có thể hợp lý khi việc ôn lấn át các hoạt động học có giá trị hơn. Cả hai cách đều không sửa được thẻ mơ hồ, đánh giá không trung thực hay việc thêm quá nhiều thẻ mới.

### Mức ghi nhớ của bộ thẻ và tham số của bộ cấu hình có phạm vi khác nhau

Trong Anki 26.08, **Desired retention** có hai phạm vi: **Shared Preset** (bộ cấu hình dùng chung) và **This deck** (bộ thẻ này). Nhờ vậy, bạn có thể cho các bộ thẻ liên quan dùng chung một bộ cấu hình tham số nhưng vẫn đặt mục tiêu ghi nhớ riêng cho một bộ thẻ cụ thể.

Hãy dùng thiết lập riêng đó khi hậu quả của việc quên khác nhau. Một bộ thẻ luyện thi lấy chứng chỉ hành nghề có thể cần mục tiêu cao hơn một bộ thẻ tham khảo ít quan trọng, ngay cả khi cả hai dùng cùng một mô hình đã được khớp tham số.

Chọn **This deck** không khiến tham số FSRS trở thành tham số riêng của bộ thẻ đó. Theo mặc định, Anki khớp tham số từ lịch sử ôn tập của tất cả bộ thẻ thuộc bộ cấu hình hiện tại. Nếu các nhóm bộ thẻ có độ khó rất khác nhau theo cảm nhận của bạn, hãy dùng bộ cấu hình riêng cho từng nhóm; đó là cách Anki hỗ trợ khớp tham số riêng.

## Dùng Help Me Decide và Simulator cho những câu hỏi khác nhau

Anki 26.08 có hai công cụ thử nghiệm riêng biệt:

- **Help Me Decide (Experimental)** hiển thị đường cong quan hệ giữa mức ghi nhớ và lượng ôn tập dựa trên dữ liệu của bạn. Dùng công cụ này để trả lời: “Mục tiêu ghi nhớ nào phù hợp với số lượt ôn hoặc thời gian tôi có thể dành để ôn đều đặn?”
- **FSRS Simulator (Experimental)** ước tính một cấu hình có thể hoạt động ra sao theo thời gian. Dùng nó để so sánh các thay đổi về mức ghi nhớ, lượng thẻ mới, giới hạn lượt ôn và khoảng cách ôn tối đa.

[Tài liệu FSRS Simulator](https://docs.ankiweb.net/deck-options.html#the-simulator) liệt kê các đầu vào chính:

- số ngày cần mô phỏng
- số thẻ mới bổ sung cần mô phỏng
- số thẻ mới mỗi ngày
- số lượt ôn tối đa mỗi ngày
- khoảng cách ôn tối đa
- mức ghi nhớ mong muốn và tham số FSRS của bộ cấu hình

Mô phỏng còn dùng trạng thái trí nhớ thực tế của các thẻ trong bộ cấu hình. Vì vậy, với một bộ sưu tập đã học lâu, công cụ này hữu ích hơn việc nhân số thẻ đến hạn hôm nay với một tỷ lệ chung chung.

Hãy chạy ba kịch bản trước khi thay đổi cài đặt đang dùng:

1. Mức ghi nhớ và lượng thẻ mới hiện tại.
2. Mục tiêu ghi nhớ bạn đang cân nhắc.
3. Cùng mục tiêu đó nhưng ít thẻ mới mỗi ngày hơn.

Lần chạy thứ ba kiểm tra một phương án thay thế thường gặp: giữ mục tiêu ghi nhớ và giảm tốc độ đưa kiến thức mới vào. Nếu dự báo cho thấy lượng ôn có thể duy trì, bạn không cần chấp nhận quên nhiều hơn chỉ để giảm số thẻ cần ôn. Bài [Nên học bao nhiêu thẻ mới mỗi ngày?](/blog/how-many-new-flashcards-per-day/) giải thích kỹ hơn về lượng thẻ mới.

Cả hai công cụ đều chỉ đưa ra ước tính. Những ngày bỏ ôn, thẻ được chỉnh sửa, kiến thức mới và thay đổi trong thói quen đánh giá có thể khiến lượng ôn thực tế khác với biểu đồ. Hãy dùng kết quả so sánh để chọn hướng đi, đừng xem đó là lời hứa về số thẻ cần ôn chính xác sau vài tháng.

Các hướng dẫn cũ có thể nhắc đến **Compute Minimum Recommended Retention**, viết tắt là CMRR. Anki đã bỏ tính năng này từ phiên bản 25.07. Đây không còn là cách hiện hành để chọn mức ghi nhớ mong muốn.

## Tối ưu tham số FSRS từ lịch sử của chính bạn

Mức ghi nhớ mong muốn thể hiện mục tiêu của bạn. Tham số FSRS mô tả cách mô hình khớp với các lần ôn của bạn.

Trong Anki 26.08, dùng **Optimize Current Preset** để khớp tham số cho bộ cấu hình đang chọn. Theo mặc định, Anki lấy lịch sử ôn từ mọi bộ thẻ dùng bộ cấu hình đó; bạn có thể điều chỉnh điều kiện tìm kiếm nếu cần thu hẹp tập dữ liệu dùng để khớp. **Optimize All Presets** cập nhật tất cả bộ cấu hình trong một lần thao tác.

Đừng nhập trọng số bằng tay hoặc sao chép từ Reddit, video hay bộ thẻ của người khác. Thẻ, thời điểm ôn và thói quen đánh giá của họ không phải lịch sử của bạn. Một dãy [trọng số FSRS-6](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) dù trông gọn gàng đến đâu cũng không phải chiến lược học mà ai cũng có thể áp dụng nguyên xi.

Chỉ tối ưu lại sau khi đã tích lũy thêm một lượng đáng kể dữ liệu ôn tập. Tài liệu Anki nói mỗi tháng một lần là đủ, còn hướng dẫn trong ứng dụng phiên bản 26.08 nói vài tháng một lần là đủ. Kết luận thực tế vẫn như nhau: không có lý do để tối ưu mỗi tuần, càng không cần sau mỗi buổi học.

### Kiểm tra chất lượng dữ liệu với bộ cấu hình hiện tại

Bật **Check health when optimizing (slow)** khi muốn Anki đánh giá khả năng FSRS thích nghi với lịch sử ôn của bộ cấu hình hiện tại. Phép kiểm tra này chạy cùng **Optimize Current Preset**, không chạy cùng **Optimize All Presets**.

Nếu kết quả kém, hãy kiểm tra dữ liệu trước khi đụng đến trọng số. [Hướng dẫn tham số FSRS của Anki](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) nêu các nguyên nhân thường gặp: chưa có đủ vài trăm lượt ôn, dùng Hard sau khi không nhớ được và không nhấn Again khi nhớ lại thất bại. Khi chưa có nhiều lịch sử hữu ích, hãy giữ mặc định và tối ưu sau thay vì mượn tham số của người khác.

## Again là không nhớ được; Hard vẫn là nhớ đúng

Thói quen này quan trọng không kém bất kỳ cài đặt nào.

Dùng **Again** khi bạn không đưa ra được đáp án cần thiết hoặc trả lời sai. Chỉ dùng **Hard** khi bạn nhớ đúng nhưng phải rất cố gắng hoặc do dự nhiều. Good và Easy cũng là những mức đánh giá nhớ đúng.

Nhấn Hard để tránh khoảng ôn ngắn của Again sẽ ghi nhận một lần nhớ đúng dù thực tế bạn đã không nhớ được. Khi đó, FSRS học từ một sự kiện bị ghi sai. Hãy chọn nút phản ánh đúng việc bạn có nhớ được đáp án hay không và nhớ dễ hay khó. Đừng chọn chỉ vì muốn có khoảng cách ôn hiển thị phía trên nút đó.

Thẻ mơ hồ khiến việc đánh giá trung thực khó hơn. Nếu câu hỏi yêu cầu năm ý mà bạn nhớ được bốn, vấn đề lên lịch đã bắt đầu từ lúc soạn thẻ. Hãy tách hoặc viết lại thẻ. Với những thẻ bạn cứ quên dù đã ôn nhiều lần, hãy xem [Cách sửa những thẻ cứ học mãi vẫn quên](/blog/how-to-fix-leech-flashcards/).

## Giữ bước học FSRS ngắn — hoặc chủ động để trống

Các bước học và học lại quy định khi nào thẻ xuất hiện lại trong ngắn hạn, trước khi chuyển sang lịch ôn dài hạn thông thường. Chúng không phải một mục tiêu ghi nhớ khác.

Hướng dẫn FSRS của Anki khuyến nghị hai giới hạn:

- mỗi bước phải ngắn hơn một ngày và có thể hoàn thành trong cùng ngày
- số lần lặp lại trong ngày nên ít

Những chuỗi dài như `1m 10m 1d 3d` mang thói quen cũ từ SM-2 sang FSRS. Các bước dài từ một ngày trở lên làm chậm việc chuyển sang lịch do mô hình tính toán và có thể khiến nhãn nút khó hiểu, chẳng hạn Hard hiển thị khoảng cách ôn dài hơn Good.

Một chuỗi gọn như `1m 10m`, kèm bước học lại `10m`, là điểm khởi đầu thận trọng nếu phù hợp với các buổi học của bạn. Lặp lại nhiều hơn trong cùng ngày không tự động mang lại kết quả tốt hơn.

Trong Anki 26.08, ô bước học và ô bước học lại đều có thể để trống. Khi bật FSRS, ô trống giao việc lên lịch ngắn hạn tương ứng cho FSRS. Đây là tính năng thử nghiệm, và khoảng cách ôn sau Again có thể là một ngày hoặc lâu hơn. Hãy giữ các bước ngắn tự đặt nếu bạn cần thẻ quay lại trong ngày một cách dễ dự đoán; chỉ xóa nội dung ô khi bạn chủ động chấp nhận để FSRS chọn thời điểm đó.

## Tắt Reschedule cards on change để chuyển đổi dần

Khi **Reschedule cards on change** tắt — cũng là mặc định — việc bật FSRS hoặc thay đổi mức ghi nhớ mong muốn hay tham số không lập tức tính lại ngày đến hạn hiện có. Cấu hình mới áp dụng khi bạn ôn thẻ trong tương lai, nên danh sách ôn thay đổi dần.

Nếu lưu một trong các thay đổi FSRS đó khi tùy chọn này đang bật, ngày đến hạn sẽ được tính lại ngay. Tùy mục tiêu mới và trạng thái thẻ, nhiều thẻ có thể đồng loạt đến hạn. Anki cũng thêm bản ghi ôn tập cho những thẻ được lên lịch lại, làm tăng kích thước bộ sưu tập.

Tùy chọn này chỉ hữu ích khi bạn thực sự muốn tính lại cả lịch hiện có. Với một bộ sưu tập đã học lâu:

1. Tạo bản sao lưu mới và xác nhận rằng bạn biết cách hoàn tác hoặc khôi phục.
2. Chạy Simulator với cài đặt dự định dùng.
3. Chọn một thay đổi cấu hình; đừng gộp nhiều thử nghiệm.
4. Khi lưu, chỉ bật lên lịch lại nếu bạn muốn tính lại ngày đến hạn ngay lập tức và có thể xử lý lượng ôn phát sinh.

Anki khuyến nghị rõ rằng cần sao lưu khi chuyển từ SM-2 và đồng thời lên lịch lại. [Hướng dẫn sao lưu thẻ học](/blog/how-to-back-up-flashcards/) giải thích vì sao cách khôi phục cũng quan trọng như chính tệp sao lưu.

## Giữ khoảng cách ôn tối đa đủ dài

Khoảng cách ôn tối đa mặc định của Anki là 100 năm. Con số này có vẻ lạ cho đến khi bạn nhớ rằng đó là giới hạn trên, không phải lời hứa rằng mọi thẻ đã thuộc lâu đều sẽ biến mất suốt một thế kỷ.

Hạ giới hạn buộc những thẻ đã nhớ rất rõ quay lại sớm hơn và làm tăng lượng ôn. Khi chạm giới hạn, Hard, Good và Easy có thể cùng hiển thị một khoảng thời gian vì không nút nào được vượt quá mức tối đa.

Khoảng cách tối đa ngắn hơn có thể hợp lý khi kỳ thi đặt ra một mốc thời gian cụ thể, nội dung thường xuyên thay đổi hoặc quy định nghề nghiệp yêu cầu thường xuyên xem lại nội dung bất kể mô hình dự đoán khả năng ghi nhớ ra sao. Hãy căn cứ vào lịch học và kết quả Simulator để chọn giới hạn này thay vì chọn một con số nhỏ vì lo lắng. Bài [Cách ôn thi với FSRS](/blog/how-to-study-for-an-exam-with-fsrs/) bàn về trường hợp cụ thể đó.

Với việc học dài hạn thông thường, hãy để giới hạn đủ dài. Mức ghi nhớ mong muốn vốn đã quyết định khi nào cần ôn lại, dựa trên xác suất nhớ lại mà mô hình dự đoán.

## Lượng thẻ mới là một phần của quyết định về lượng học

FSRS có thể phân bổ các lượt ôn; nó không thể khiến việc thêm thẻ vô hạn trở nên bền vững. Mỗi thẻ mới tạo ra việc học ngay bây giờ và việc ôn về sau.

Khi danh sách ôn quá nặng, hãy xem xét những yếu tố sau trước khi giảm mức ghi nhớ mong muốn:

- số thẻ mới mỗi ngày
- những lần nhập hoặc tạo hàng loạt thẻ với số lượng lớn
- giới hạn lượt ôn tối đa khiến Anki thường xuyên không hiển thị hết những thẻ đã đến hạn
- thẻ khó nhớ dai dẳng và thẻ mơ hồ khiến bạn phải thử đi thử lại
- những ngày bỏ ôn

Dùng **Additional new cards to simulate** khi biết bộ thẻ sẽ tiếp tục lớn lên. Dự báo chỉ dựa trên bộ sưu tập hôm nay không phản ánh lượng ôn sau một lần nhập lớn.

Nếu kết quả quá cao, hãy giảm lượng thẻ mới và mô phỏng lại. Cách này giữ được mục tiêu nhớ lại mà không yêu cầu thuật toán lên lịch chấp nhận mức quên cao hơn.

## Anki và Nibomo cung cấp những tùy chọn FSRS khác nhau

Cả hai sản phẩm đều dùng FSRS-6, nhưng cài đặt FSRS của Anki không tương ứng từng mục với Nibomo.

| Khả năng | Anki 26.08 | Nibomo |
| --- | --- | --- |
| Mức ghi nhớ mong muốn | **Shared Preset** hoặc **This deck** | Cấu hình theo từng không gian làm việc; mặc định `0.90` |
| Tham số FSRS | **Optimize Current Preset** hoặc **Optimize All Presets** từ lịch sử ôn tập | Cố định bộ trọng số mặc định chính thức của FSRS-6; người dùng không thể chỉnh trong v1 |
| Các bước học | Có thể cấu hình; để ô trống cho FSRS lên lịch là tính năng thử nghiệm | Cấu hình theo từng không gian làm việc; mặc định `1m 10m` |
| Các bước học lại | Có thể cấu hình; để ô trống cho FSRS lên lịch là tính năng thử nghiệm | Cấu hình theo từng không gian làm việc; mặc định `10m` |
| Khoảng cách ôn tối đa | Mặc định 100 năm | Mặc định 36.500 ngày, cũng là 100 năm |
| Thay đổi cài đặt | Mặc định áp dụng cho các lần ôn tương lai; có tùy chọn tính lại lịch hiện có | Chỉ áp dụng cho các lần ôn tương lai; không tính lại ngày đến hạn hiện có |
| Công cụ dự tính lượng ôn | **Help Me Decide (Experimental)** và **FSRS Simulator (Experimental)** | Không có trình mô phỏng lượng ôn tương đương trong v1 |

Nibomo dùng các mức đánh giá tiêu chuẩn Again, Hard, Good và Easy, đồng thời lưu trạng thái trí nhớ FSRS cho từng thẻ. Thuật toán lên lịch trên backend, iOS và Android được triển khai độc lập nhưng duy trì cùng cách hoạt động; luồng ôn tập trên web dùng lại thuật toán của backend thay vì thêm bản triển khai thứ tư.

Các giới hạn và giá trị mặc định này được ghi trong [đặc tả lên lịch FSRS công khai của Nibomo](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md). Sự đánh đổi khá rõ: Nibomo cung cấp cài đặt FSRS-6 thiết thực ở cấp không gian làm việc, còn Anki có phạm vi điều chỉnh chi tiết hơn, khớp tham số cá nhân hóa và mô phỏng. Nếu những khả năng đó là thiết yếu với bạn, Anki phù hợp hơn.

## Quy trình an toàn hơn cho bộ sưu tập đã học lâu

Nếu đã tích lũy lịch sử ôn tập trong nhiều tháng hoặc nhiều năm, hãy làm theo thứ tự này:

1. **Đánh giá đúng ý nghĩa từng nút.** Again là không nhớ được; Hard là nhớ đúng nhưng khó khăn.
2. **Tối ưu bộ cấu hình hiện tại.** Khớp với lịch sử của chính bạn thay vì sửa hoặc sao chép trọng số.
3. **Chạy kiểm tra chất lượng dữ liệu nếu cần.** Nếu lịch sử ôn còn ít hoặc không nhất quán, hãy xử lý vấn đề ở dữ liệu.
4. **Dùng Help Me Decide.** Chọn khoảng mức ghi nhớ phù hợp với số lượt ôn hoặc thời gian bạn có thể dành để ôn đều đặn.
5. **Chạy Simulator.** So sánh cài đặt hiện tại, mục tiêu dự định và phương án ít thẻ mới hơn.
6. **Chỉ thay đổi một cài đặt đang dùng.** Điều chỉnh mức ghi nhớ hoặc lượng thẻ mới trước, rồi quan sát danh sách ôn thực tế.
7. **Giữ các bước ngắn.** Bỏ các bước học và học lại kéo dài từ một ngày trở lên; chỉ để ô trống khi có chủ đích thử nghiệm.
8. **Giữ khoảng cách ôn tối đa đủ dài.** Chỉ rút ngắn khi có mốc thời gian hoặc yêu cầu cụ thể.
9. **Tiếp tục tắt lên lịch lại.** Nếu cần tính lại lịch ngay lập tức, hãy sao lưu trước và dự trù cách xử lý danh sách ôn phát sinh.

Trình tự này giúp bạn giữ khả năng hoàn tác lịch ôn đã tích lũy càng lâu càng tốt. Nó cũng ngăn ba vấn đề riêng — độ khớp của mô hình, mục tiêu nhớ lại và lượng kiến thức mới — bị gộp thành một bài toán cài đặt khó gỡ.

## Câu hỏi thường gặp về cài đặt FSRS

### 90% có phải mức ghi nhớ mong muốn tốt nhất cho FSRS không?

Đây là điểm khởi đầu chung an toàn nhất vì là mặc định của Anki và tránh phần dốc nhất của đường cong lượng ôn ở mức ghi nhớ cao. Giá trị phù hợp nhất cho một bộ thẻ phụ thuộc vào hậu quả của việc quên và lượng học bạn có thể duy trì. Hãy xem **Help Me Decide (Experimental)** trước khi thay đổi.

### Có nên đặt mức ghi nhớ mong muốn là 95% không?

Chỉ nên làm sau khi kiểm tra số lượt ôn hoặc số phút tăng thêm. Mức 95% có thể hợp lý cho một bộ thẻ được biên soạn rõ ràng và chứa kiến thức mà bạn không thể dễ dàng chấp nhận quên; một bộ sưu tập lớn học cho vui có thể trở nên nặng nề không cần thiết. Đừng đồng thời bật tính lại lịch hiện có trừ khi bạn chủ động muốn tính lại ngày đến hạn ngay lập tức.

### Nên tối ưu tham số FSRS bao lâu một lần?

Mỗi tháng đã là đủ thường xuyên, và hướng dẫn trong Anki 26.08 nói vài tháng một lần là đủ. Hãy tối ưu sau khi tích lũy thêm một lượng đáng kể dữ liệu ôn tập, đừng làm theo lịch hằng ngày hay hằng tuần.

### Có nên để trống các bước học FSRS không?

Để trống bước học hoặc bước học lại cho phép Anki 26.08 giao lịch ngắn hạn tương ứng cho FSRS. Tính năng này đang thử nghiệm, và Again có thể được lên lịch cách một ngày hoặc lâu hơn. Giữ một vài bước ngắn có thể hoàn thành trong ngày vẫn là lựa chọn thận trọng.

### Thay đổi cài đặt FSRS có lên lịch lại cho các thẻ Anki hiện có không?

Theo mặc định thì không. Khi **Reschedule cards on change** tắt, cài đặt mới ảnh hưởng đến các lần ôn tương lai mà không lập tức tính lại danh sách ôn. Bật tùy chọn này sẽ đổi ngày đến hạn và có thể khiến nhiều thẻ cùng đến hạn, nên hãy sao lưu trước.

### Anki còn CMRR không?

Không. Anki đã bỏ Compute Minimum Recommended Retention từ phiên bản 25.07. Trong Anki 26.08, hãy dùng **Help Me Decide (Experimental)** và **FSRS Simulator (Experimental)** để so sánh mức ghi nhớ với lượng ôn ước tính.

### Nibomo có dùng cùng cài đặt với Anki không?

Nibomo dùng FSRS-6 và cho phép điều chỉnh mức ghi nhớ mong muốn, bước học, bước học lại, khoảng cách ôn tối đa và độ lệch ngẫu nhiên (fuzz) theo từng không gian làm việc. Nibomo không sao chép toàn bộ mô hình cài đặt của Anki: trọng số được cố định trong v1, thay đổi chỉ áp dụng từ đó về sau, và không có tối ưu tham số cá nhân hóa hay trình mô phỏng lượng ôn.

## Xác định lượng học trước khi chọn tỷ lệ

Cài đặt FSRS tốt giúp danh sách ôn phục vụ một kế hoạch học thực tế. Bắt đầu ở 90%, ước tính lượng học, kiểm soát thẻ mới và chỉ tăng mức ghi nhớ khi lợi ích của việc nhớ thêm xứng đáng với số lượt ôn tăng lên. Giữ các bước ngắn, khoảng cách ôn tối đa đủ dài và dữ liệu đánh giá trung thực.

Sau đó, hãy rời màn hình cài đặt. Thuật toán lên lịch cần bạn ôn đều đặn hơn là dành thêm một buổi tối để tinh chỉnh.
