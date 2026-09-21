import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Miễn phí để dùng. Miễn phí để tự lưu trữ.",
  description:
    "Dùng ứng dụng đã được lưu trữ sẵn mà không mất phí, có AI và đồng bộ trong giai đoạn beta, hoặc tự lưu trữ toàn bộ mã nguồn mở trên hạ tầng AWS của bạn.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Miễn phí để dùng. Miễn phí để tự lưu trữ.",
      intro:
        "Dùng ứng dụng đã được lưu trữ sẵn mà không mất phí và không cần thẻ tín dụng, hoặc tự chạy toàn bộ mã nguồn mở trên hạ tầng AWS của bạn.",
      tiers: [
        {
          type: "auth_tier",
          name: "Lưu trữ sẵn",
          price: "Miễn phí",
          highlighted: true,
          bullets: [
            "Tính năng AI có sẵn trong giai đoạn beta",
            "Đồng bộ giữa web, iOS và Android đã bao gồm",
            "Không giới hạn theo gói về thẻ, tệp hay tổng dung lượng trong giai đoạn beta; vẫn áp dụng các giới hạn kỹ thuật thông thường cho từng tệp và từng thao tác",
            "Nhập và xuất thẻ, nhãn và media giữa bản lưu trữ sẵn và bản tự lưu trữ",
            "Đăng nhập không cần mật khẩu bằng mã dùng một lần gửi qua email",
            "Việc tạo và ôn tập thẻ cơ bản sẽ luôn miễn phí; mức dùng AI cao hơn sau này có thể cần khóa API riêng của bạn hoặc một tùy chọn trả phí",
          ],
          cta: {
            label: "Dùng bản lưu trữ sẵn miễn phí",
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
