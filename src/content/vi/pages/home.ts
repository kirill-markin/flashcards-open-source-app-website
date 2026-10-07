import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - Ứng dụng thẻ ghi nhớ lặp lại ngắt quãng miễn phí, mã nguồn mở",
  description:
    "Thẻ ghi nhớ miễn phí, mã nguồn mở với lặp lại ngắt quãng FSRS, tạo thẻ có AI hỗ trợ, học ngoại tuyến và đồng bộ, xuất dữ liệu linh hoạt và tự lưu trữ.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Miễn phí và mã nguồn mở",
      titleLines: [
        "Tạo thẻ.",
        "Ôn tập thông minh hơn.",
        "Nhớ được nhiều hơn.",
      ],
      subtitle:
        "Thẻ ghi nhớ miễn phí, mã nguồn mở, tự xếp lịch mỗi lượt ôn tập vào đúng thời điểm, dùng được khi ngoại tuyến và đồng bộ giữa web, iOS và Android. Dùng AI khi bạn cần hỗ trợ tạo hoặc cải thiện thẻ. Nibomo trước đây có tên là Flashcards Open Source App.",
      trustLine: "Không cần thẻ tín dụng. Không quảng cáo. Không đếm ngược dùng thử.",
      primaryLink: {
        label: "Bắt đầu",
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "Xem trên GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Hoặc kết nối bất kỳ ứng dụng AI nào hỗ trợ MCP bằng URL này:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "Cách Nibomo hoạt động",
      items: [
        {
          label: "01 · THẺ GHI NHỚ VỚI AI",
          titleLines: [
            "Cho AI biết bạn muốn học gì.",
          ],
          description: "Mô tả một chủ đề hoặc đính kèm ghi chú. AI giúp biến tài liệu của bạn thành thẻ ghi nhớ có câu hỏi và câu trả lời.",
          linkLabel: "Tạo thẻ ghi nhớ",
          imagePath: "/home/ai-flashcards.png",
          imageAlt: "Trò chuyện AI của Nibomo tạo thẻ ghi nhớ từ một chủ đề hoặc ghi chú đính kèm",
        },
        {
          label: "02 · BẮT ĐẦU HỌC",
          titleLines: [
            "Mỗi lần một câu hỏi.",
          ],
          description: "Mở một thẻ ghi nhớ và thử nhớ lại câu trả lời trước khi xem đáp án. Học theo nhịp độ của bạn, từng thẻ một.",
          linkLabel: "Bắt đầu học",
          imagePath: "/home/start-learning.png",
          imageAlt: "Thẻ ôn tập Nibomo có nút hiển thị đáp án",
        },
        {
          label: "03 · ÔN TẬP THÔNG MINH",
          titleLines: [
            "Kiểm tra câu trả lời.",
            "Đánh giá khả năng nhớ lại.",
          ],
          description: "Xem đáp án và đánh dấu mức độ dễ dàng khi nhớ lại. Nibomo đưa các thẻ khó trở lại sớm hơn và các thẻ quen thuộc muộn hơn.",
          linkLabel: "Ôn tập thẻ ghi nhớ",
          imagePath: "/home/smart-reviews.png",
          imageAlt: "Thẻ Nibomo với đáp án và các lựa chọn đánh giá khả năng nhớ lại",
        },
        {
          label: "04 · TIẾN ĐỘ CỦA BẠN",
          titleLines: [
            "Biến việc học thành thói quen.",
          ],
          description: "Xem các ngày học trên lịch và duy trì chuỗi ngày học. Mỗi lần ôn tập là một bước nữa đến mục tiêu của bạn.",
          linkLabel: "Xem tiến độ",
          imagePath: "/home/your-progress.png",
          imageAlt: "Màn hình tiến độ Nibomo với lịch chuỗi ngày học và bảng xếp hạng",
        }
      ],
    },
    {
      type: "feature_list",
      title: "Tính năng",
      intro:
        "Mọi thứ bạn cần để tạo thẻ hữu ích, ôn tập đúng lúc, tiếp tục học khi ngoại tuyến và giữ quyền kiểm soát dữ liệu học tập của mình.",
      items: [
        {
          title: "Ôn tập thông minh hơn với FSRS",
          description:
            "Ôn tập những thẻ đến hạn hôm nay. FSRS đưa thẻ khó quay lại sớm hơn và chờ lâu hơn trước khi hiện lại thẻ bạn đã thuộc.",
        },
        {
          title: "Tạo thẻ với AI hỗ trợ",
          description:
            "Nhờ AI giúp tạo thẻ, chỉnh lại câu chữ hoặc làm rõ câu trả lời. Bạn vẫn là người quyết định lưu gì.",
        },
        {
          title: "Học ngoại tuyến với đồng bộ tự động",
          description:
            "Tiếp tục ôn tập trên thiết bị di động mà không cần kết nối internet. Các thay đổi được đồng bộ tự động.",
        },
        {
          title: "Nhập, xuất và sở hữu dữ liệu của bạn",
          description:
            "Đưa tài liệu học tập vào hoặc ra bất cứ lúc nào. Bản xuất mang theo được gồm thẻ, nhãn và media liên quan.",
        },
        {
          title: "Hoạt động với AI agent",
          description:
            "Kết nối qua MCP hoặc Agent API để AI agent giúp bạn tạo, cải thiện và sắp xếp thẻ.",
        },
        {
          title: "Miễn phí và tự lưu trữ được",
          description:
            "Dùng ứng dụng đã được lưu trữ sẵn miễn phí, xem mã nguồn mở, hoặc tự chạy trên hạ tầng của bạn.",
        },
      ],
    },
    {
      type: "review_cta",
      titleLines: [
        "Để Nibomo lên lịch ôn tập cho bạn.",
        "Bạn tập trung vào việc học.",
      ],
      description: "Biến nội dung đang học thành thẻ ghi nhớ, ôn tập đúng lúc và nhớ được nhiều hơn.",
    },
  ],
  body: "",
} as const;
