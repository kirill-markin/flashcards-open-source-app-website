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
          caption: "Thêm máy chủ MCP này vào ứng dụng AI của bạn:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "public_activity",
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
