import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "Nibomo Özellikleri",
  description:
    "FSRS aralıklı tekrar, AI destekli kart oluşturma, çevrimdışı çalışma ve senkronizasyon, taşınabilir dışa aktarma ve kendi sunucunuzda barındırma sunan ücretsiz, açık kaynak bilgi kartlarını keşfedin.",
  slug: "features",
  sections: [
    {
      type: "feature_list",
      title: "Özellikler",
      intro:
        "İşe yarar kartlar oluşturmak, doğru zamanda tekrar etmek, çevrimdışı çalışmaya devam etmek ve öğrenme verilerinizin kontrolünü elinizde tutmak için gereken her şey.",
      items: [
        {
          title: "FSRS ile Daha Akıllı Tekrarlar",
          description:
            "Bugün zamanı gelen kartları tekrar edin. FSRS zor kartları daha erken geri getirir, iyi bildiklerinizi göstermek için daha uzun bekler.",
        },
        {
          title: "AI Destekli Kart Oluşturma",
          description:
            "AI'dan kart oluşturmasını, ifadeleri iyileştirmesini veya bir cevabı netleştirmesini isteyin. Neyin kaydedileceğine siz karar verirsiniz.",
        },
        {
          title: "Otomatik Senkronizasyonla Çevrimdışı Çalışma",
          description:
            "İnternet bağlantısı olmadan mobil cihazınızda tekrar etmeyi sürdürün. Değişiklikler otomatik senkronize olur; web'de, iOS'ta veya Android'de kaldığınız yerden devam edersiniz.",
        },
        {
          title: "İçe Aktarın, Dışa Aktarın, Verileriniz Sizde Kalsın",
          description:
            "Öğrenme materyallerinizi istediğiniz zaman içeri veya dışarı taşıyın. Taşınabilir dışa aktarmalar kartlarınızı, etiketlerinizi ve ilgili medyayı içerir.",
        },
        {
          title: "AI Agent'larıyla Çalışır",
          description:
            "MCP veya Agent API üzerinden bağlanın; AI agent'ları kartlarınızı oluşturmanıza, iyileştirmenize ve düzenlemenize yardım etsin.",
        },
        {
          title: "Ücretsiz ve Kendi Sunucunuzda Barındırılabilir",
          description:
            "Barındırılan uygulamayı ücretsiz kullanın, açık kaynak kodu inceleyin veya kendi altyapınızda çalıştırın.",
        },
      ],
    },
  ],
  body: "",
} as const;
