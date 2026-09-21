import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Gratis dipakai. Gratis di-hosting sendiri.",
  description:
    "Gunakan aplikasi terkelola tanpa biaya, lengkap dengan AI dan sinkronisasi selama beta, atau jalankan stack open source-nya di infrastruktur AWS Anda sendiri.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Gratis dipakai. Gratis di-hosting sendiri.",
      intro:
        "Gunakan aplikasi terkelola tanpa biaya dan tanpa kartu kredit, atau jalankan stack open source-nya di infrastruktur AWS Anda sendiri.",
      tiers: [
        {
          type: "auth_tier",
          name: "Terkelola",
          price: "Gratis",
          highlighted: true,
          bullets: [
            "Fitur AI termasuk selama beta",
            "Sinkronisasi antara web, iOS, dan Android termasuk",
            "Tidak ada kuota berbasis paket untuk kartu, berkas, atau total penyimpanan selama beta; batas teknis biasa per berkas dan per operasi tetap berlaku",
            "Impor dan ekspor kartu, tag, serta media antara instalasi terkelola dan self-hosted",
            "Masuk tanpa kata sandi dengan kode sekali pakai lewat email",
            "Pembuatan dan tinjauan kartu tetap gratis; penggunaan AI yang lebih besar nanti bisa memerlukan kunci API penyedia Anda sendiri atau opsi berbayar",
          ],
          cta: {
            label: "Pakai aplikasi terkelola gratis",
            href: "https://app.flashcards-open-source-app.com",
          },
        },
        {
          type: "link_tier",
          name: "Self-Hosted",
          price: "Gratis",
          highlighted: false,
          bullets: [
            "Aplikasi dan infrastruktur AWS CDK yang open source",
            "Jalur deployment AWS lengkap plus setup pengembangan lokal dengan Docker/Postgres",
            "Anda menyediakan dan merawat infrastruktur, email, monitoring, dan kredensial AI",
            "Anda membayar biaya infrastruktur dan penyedia pihak ketiga",
            "Impor dan ekspor kartu, tag, serta media antara instalasi terkelola dan self-hosted",
          ],
          cta: {
            label: "Hosting sendiri dari GitHub",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
