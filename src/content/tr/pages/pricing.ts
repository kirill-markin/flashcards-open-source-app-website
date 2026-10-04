import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Ücretsiz başlayın. Daha fazla yapay zekâ için Premium.",
  description:
    "Barındırılan uygulamada ücretsiz başlayın, daha fazla yapay zekâ sohbeti için aylık USD 6.99 karşılığında Premium'a geçin ya da açık kaynak yığını kendi AWS altyapınızda çalıştırın.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Ücretsiz başlayın. Daha fazla yapay zekâ için Premium.",
      intro:
        "Barındırılan uygulamada kredi kartı olmadan ücretsiz başlayın, daha fazla yapay zekâ sohbeti için Premium ekleyin veya açık kaynak yığını kendi AWS altyapınızda ücretsiz çalıştırın.",
      tiers: [
        {
          type: "auth_tier",
          name: "Ücretsiz",
          price: "Ücretsiz",
          highlighted: true,
          bullets: [
            "Ayda 50 yapay zekâ sohbet mesajı",
            "Kendi OpenAI API anahtarınızı kullanın; bu anahtarla yapılan kullanım aylık sınıra dahil edilmez",
            "Web, iOS ve Android arasında senkronizasyon dahil",
            "Kart, dosya veya toplam depolama için plana bağlı kota yok; olağan dosya ve işlem başına teknik sınırlar geçerlidir",
            "Barındırılan ve kendi sunucunuzdaki kurulumlar arasında kart, etiket ve medya içe/dışa aktarma",
            "E-postayla gelen tek kullanımlık kodla parolasız giriş",
          ],
          cta: {
            label: "Barındırılan uygulamayı ücretsiz kullan",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "$6.99/ay",
          highlighted: false,
          bullets: [
            "Uygun yeni aboneler için 7 günlük ücretsiz deneme; ödeme yöntemi gereklidir",
            "Ayda 1000 yapay zekâ sohbet mesajı",
            "Özel vurgu renkleri",
            "Ücretsiz plandaki her şey",
            "Web, iOS ve Android'de hesabınız için tek abonelik",
            "Fiyat USD cinsindendir ve vergiler dahildir; ödeme sayfasında yerel para biriminde fiyat gösterilebilir",
            "Her ay yenilenir; istediğiniz zaman iptal edin, erişiminiz dönem sonuna kadar sürer",
          ],
          cta: {
            label: "7 günlük ücretsiz denemeyi başlat",
            href: "https://app.nibomo.com",
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
            "Altyapıyı, e-postayı, izlemeyi ve yapay zekâ kimlik bilgilerini siz sağlar ve siz yönetirsiniz",
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
