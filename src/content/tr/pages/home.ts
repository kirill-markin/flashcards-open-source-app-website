import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title:
    "Nibomo - Ücretsiz, Açık Kaynak Aralıklı Tekrar Bilgi Kartı Uygulaması",
  description:
    "FSRS aralıklı tekrar, AI destekli kart oluşturma, çevrimdışı çalışma ve senkronizasyon, taşınabilir dışa aktarma ve kendi sunucunuzda barındırma ile ücretsiz, açık kaynak bilgi kartları.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Ücretsiz ve açık kaynak",
      titleLines: [
        "Kart oluşturun.",
        "Daha akıllı tekrar edin.",
        "Daha çok hatırlayın.",
      ],
      subtitle:
        "Her tekrarı doğru zamana planlayan, çevrimdışı çalışan ve web, iOS ile Android arasında senkronize olan ücretsiz, açık kaynak bilgi kartları. Kart oluştururken veya iyileştirirken yardım için AI kullanın. Nibomo'nun eski adı Flashcards Open Source App'tir.",
      trustLine: "Kredi kartı yok. Reklam yok. Deneme süresi geri sayımı yok.",
      primaryLink: {
        label: "Başlayın",
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "GitHub'da görüntüleyin",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Ya da MCP destekleyen herhangi bir AI istemcisini bu URL ile bağlayın:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "Nibomo nasıl çalışır?",
      items: [
        {
          label: "01 · YAPAY ZEKÂ İLE BİLGİ KARTLARI",
          titleLines: [
            "Yapay zekâya ne öğrenmek istediğini söyle.",
          ],
          description: "Bir konuyu anlat veya notlarını ekle. Yapay zekâ, materyalini sorular ve cevaplar içeren bilgi kartlarına dönüştürmene yardımcı olur.",
          linkLabel: "Bilgi kartları oluştur",
          imagePath: "/home/ai-flashcards-tr.png",
          imageAlt: "Bir konudan veya eklenen notlardan bilgi kartları oluşturan Nibomo yapay zekâ sohbeti",
        },
        {
          label: "02 · ÖĞRENMEYE BAŞLA",
          titleLines: [
            "Her seferinde bir soru.",
          ],
          description: "Bir bilgi kartını aç ve cevabı göstermeden önce hatırlamaya çalış. Her seferinde bir kartla, kendi hızında öğren.",
          linkLabel: "Öğrenmeye başla",
          imagePath: "/home/start-learning-tr.png",
          imageAlt: "Cevabı gösterme düğmesi olan Nibomo tekrar kartı",
        },
        {
          label: "03 · AKILLI TEKRARLAR",
          titleLines: [
            "Cevabını kontrol et.",
            "Hatırlamanı değerlendir.",
          ],
          description: "Cevabı göster ve ne kadar kolay hatırladığını belirt. Nibomo zor kartları daha erken, bildiğin kartları ise daha geç tekrar gösterir.",
          linkLabel: "Bilgi kartlarını tekrar et",
          imagePath: "/home/smart-reviews-tr.png",
          imageAlt: "Cevabı açık ve hatırlama değerlendirme seçenekleri olan Nibomo bilgi kartı",
        },
        {
          label: "04 · İLERLEMEN",
          titleLines: [
            "Öğrenmeyi alışkanlığa dönüştür.",
          ],
          description: "Çalıştığın günleri takvimde gör ve çalışma serini sürdür. Her tekrar, hedefine doğru atılan yeni bir adımdır.",
          linkLabel: "İlerlemeni gör",
          imagePath: "/home/your-progress-tr.png",
          imageAlt: "Çalışma serisi takvimi ve sıralama tablosu içeren Nibomo ilerleme ekranı",
        }
      ],
    },
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
            "İnternet bağlantısı olmadan mobil cihazında tekrar yapmaya devam et. Değişiklikler otomatik olarak eşitlenir.",
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
    {
      type: "review_cta",
      titleLines: [
        "Tekrarlarını Nibomo planlasın.",
        "Sen öğrenmeye odaklan.",
      ],
      description: "Öğrendiklerini bilgi kartlarına dönüştür, doğru zamanda tekrar et ve daha fazlasını hatırla.",
    },
  ],
  body: "",
} as const;
