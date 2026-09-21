import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "Tính năng của Nibomo",
  description:
    "Khám phá thẻ ghi nhớ miễn phí, mã nguồn mở với lặp lại ngắt quãng FSRS, tạo thẻ có AI hỗ trợ, học ngoại tuyến và đồng bộ, xuất dữ liệu linh hoạt và tự lưu trữ.",
  slug: "features",
  sections: [
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
            "Tiếp tục ôn tập trên điện thoại ngay cả khi không có Internet. Thay đổi được đồng bộ tự động để bạn học tiếp trên web, iOS hoặc Android.",
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
  ],
  body: "",
} as const;
