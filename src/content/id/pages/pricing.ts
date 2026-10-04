import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Gratis untuk memulai. Premium untuk lebih banyak AI.",
  description:
    "Mulai gratis di aplikasi terkelola, tingkatkan ke Premium seharga USD 6.99/bulan untuk lebih banyak obrolan AI, atau jalankan stack open source-nya di infrastruktur AWS Anda sendiri.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Gratis untuk memulai. Premium untuk lebih banyak AI.",
      intro:
        "Mulai gratis di aplikasi terkelola tanpa kartu kredit, tambahkan Premium untuk lebih banyak obrolan AI, atau jalankan stack open source-nya secara gratis di infrastruktur AWS Anda sendiri.",
      tiers: [
        {
          type: "auth_tier",
          name: "Gratis",
          price: "Gratis",
          highlighted: true,
          bullets: [
            "50 pesan obrolan AI per bulan",
            "Gunakan kunci API OpenAI Anda sendiri; penggunaannya tidak dihitung dalam batas bulanan",
            "Sinkronisasi antara web, iOS, dan Android termasuk",
            "Tidak ada kuota berbasis paket untuk kartu, berkas, atau total penyimpanan; batas teknis biasa per berkas dan per operasi tetap berlaku",
            "Impor dan ekspor kartu, tag, serta media antara instalasi terkelola dan self-hosted",
            "Masuk tanpa kata sandi dengan kode sekali pakai lewat email",
          ],
          cta: {
            label: "Pakai aplikasi terkelola gratis",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "$6.99/bulan",
          highlighted: false,
          bullets: [
            "Uji coba gratis 7 hari untuk pelanggan baru yang memenuhi syarat; metode pembayaran wajib disertakan",
            "1000 pesan obrolan AI per bulan",
            "Warna aksen khusus",
            "Semua yang ada di paket Gratis",
            "Satu langganan untuk akun Anda di web, iOS, dan Android",
            "Harga dalam USD sudah termasuk pajak; halaman pembayaran mungkin menampilkan harga dalam mata uang lokal",
            "Diperpanjang setiap bulan; batalkan kapan saja dan akses tetap berlaku hingga akhir periode",
          ],
          cta: {
            label: "Mulai uji coba gratis 7 hari",
            href: "https://app.nibomo.com",
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
