import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Kullanımı ücretsiz. Kendi sunucunuzda barındırmak da ücretsiz.",
  description:
    "Barındırılan uygulamayı ücretsiz kullanın; beta boyunca AI ve senkronizasyon dahil. Ya da açık kaynak yığını kendi AWS altyapınızda çalıştırın.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Kullanımı ücretsiz. Kendi sunucunuzda barındırmak da ücretsiz.",
      intro:
        "Barındırılan uygulamayı kredi kartı olmadan ücretsiz kullanın veya açık kaynak yığını kendi AWS altyapınızda çalıştırın.",
      tiers: [
        {
          type: "auth_tier",
          name: "Barındırılan",
          price: "Ücretsiz",
          highlighted: true,
          bullets: [
            "Beta boyunca AI özellikleri dahil",
            "Web, iOS ve Android arasında senkronizasyon dahil",
            "Beta boyunca kart, dosya veya toplam depolama için plana bağlı kota yok; olağan dosya ve işlem başına teknik sınırlar geçerlidir",
            "Barındırılan ve kendi sunucunuzdaki kurulumlar arasında kart, etiket ve medya içe/dışa aktarma",
            "E-postayla gelen tek kullanımlık kodla parolasız giriş",
            "Temel kart oluşturma ve tekrar ücretsiz kalacak; yoğun AI kullanımı ileride kendi sağlayıcı API anahtarınızı veya ücretli bir seçeneği gerektirebilir",
          ],
          cta: {
            label: "Barındırılan uygulamayı ücretsiz kullan",
            href: "https://app.flashcards-open-source-app.com",
          },
        },
        {
          type: "link_tier",
          name: "Kendi Sunucunuzda",
          price: "Ücretsiz",
          highlighted: false,
          bullets: [
            "Açık kaynak uygulama ve AWS CDK altyapısı",
            "Eksiksiz AWS dağıtım yolu ve yerel Docker/Postgres geliştirme kurulumu",
            "Altyapıyı, e-postayı, izlemeyi ve AI kimlik bilgilerini siz sağlar ve siz yönetirsiniz",
            "Altyapı ve üçüncü taraf sağlayıcı masraflarını siz ödersiniz",
            "Barındırılan ve kendi sunucunuzdaki kurulumlar arasında kart, etiket ve medya içe/dışa aktarma",
          ],
          cta: {
            label: "GitHub'dan kendi sunucunuzda barındırın",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
