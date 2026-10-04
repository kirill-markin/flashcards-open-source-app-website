import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Bắt đầu miễn phí. Premium để dùng AI nhiều hơn.",
  description:
    "Bắt đầu miễn phí với bản lưu trữ sẵn, nâng cấp lên Premium với giá USD 6.99 mỗi tháng để trò chuyện với AI nhiều hơn, hoặc tự lưu trữ toàn bộ mã nguồn mở trên hạ tầng AWS của bạn.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Bắt đầu miễn phí. Premium để dùng AI nhiều hơn.",
      intro:
        "Bắt đầu miễn phí với ứng dụng đã được lưu trữ sẵn mà không cần thẻ tín dụng, thêm Premium để trò chuyện với AI nhiều hơn, hoặc tự lưu trữ miễn phí toàn bộ mã nguồn mở trên hạ tầng AWS của bạn.",
      tiers: [
        {
          type: "auth_tier",
          name: "Miễn phí",
          price: "Miễn phí",
          highlighted: true,
          bullets: [
            "50 tin nhắn trò chuyện AI mỗi tháng",
            "Dùng khóa OpenAI API của riêng bạn; mức sử dụng qua khóa này không tính vào giới hạn hằng tháng",
            "Đồng bộ giữa web, iOS và Android đã bao gồm",
            "Không giới hạn theo gói về thẻ, tệp hay tổng dung lượng; vẫn áp dụng các giới hạn kỹ thuật thông thường cho từng tệp và từng thao tác",
            "Nhập và xuất thẻ, nhãn và media giữa bản lưu trữ sẵn và bản tự lưu trữ",
            "Đăng nhập không cần mật khẩu bằng mã dùng một lần gửi qua email",
          ],
          cta: {
            label: "Dùng bản lưu trữ sẵn miễn phí",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "$6.99/tháng",
          highlighted: false,
          bullets: [
            "Dùng thử miễn phí 7 ngày cho người đăng ký mới đủ điều kiện; cần có phương thức thanh toán",
            "1000 tin nhắn trò chuyện AI mỗi tháng",
            "Màu nhấn tùy chỉnh",
            "Mọi thứ trong gói Miễn phí",
            "Một gói đăng ký cho tài khoản của bạn trên web, iOS và Android",
            "Giá niêm yết bằng USD, đã bao gồm thuế; trang thanh toán có thể hiển thị giá bằng nội tệ",
            "Tự động gia hạn hằng tháng; hủy bất cứ lúc nào và vẫn dùng được đến hết kỳ hiện tại",
          ],
          cta: {
            label: "Bắt đầu dùng thử miễn phí 7 ngày",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "link_tier",
          name: "Tự lưu trữ",
          price: "Miễn phí",
          highlighted: false,
          bullets: [
            "Ứng dụng và hạ tầng AWS CDK đều là mã nguồn mở",
            "Đầy đủ đường triển khai AWS cùng môi trường phát triển cục bộ với Docker/Postgres",
            "Bạn tự cung cấp và bảo trì hạ tầng, email, giám sát và thông tin đăng nhập AI",
            "Bạn trả chi phí hạ tầng và chi phí cho nhà cung cấp bên thứ ba",
            "Nhập và xuất thẻ, nhãn và media giữa bản lưu trữ sẵn và bản tự lưu trữ",
          ],
          cta: {
            label: "Tự lưu trữ từ GitHub",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
