import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Mula secara percuma, guna AI lebih banyak dengan Premium",
  description:
    "Harga web standard Premium ialah USD 6.99 sebulan, termasuk cukai. Tawaran mungkin berbeza mengikut rantau dan gedung aplikasi. Harga akhir dipaparkan sebelum pembelian.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Mula secara percuma, guna AI lebih banyak dengan Premium",
      intro:
        "Guna aplikasi yang kami hos secara percuma tanpa kad kredit, pilih Premium untuk lebih banyak mesej sembang AI atau hos sendiri sistem sumber terbuka ini secara percuma pada infrastruktur AWS anda.",
      tiers: [
        {
          type: "auth_tier",
          name: "Percuma",
          price: "Percuma",
          highlighted: true,
          bullets: [
            "50 mesej sembang AI sebulan",
            "Guna kunci API OpenAI sendiri. Penggunaan melalui kunci itu tidak dikira dalam had bulanan",
            "Penyegerakan antara web, iOS dan Android disertakan",
            "Tiada kuota mengikut pelan untuk kad, fail atau jumlah storan. Had teknikal biasa bagi setiap fail dan operasi masih terpakai",
            "Import dan eksport kad, tag dan media antara pemasangan yang kami hos dengan pemasangan yang anda hos sendiri",
            "Log masuk tanpa kata laluan menggunakan kod sekali guna melalui e-mel",
          ],
          cta: {
            label: "Guna aplikasi awan kami secara percuma",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "Harga web standard USD 6.99 sebulan",
          highlighted: false,
          bullets: [
            "Percubaan percuma selama 7 hari untuk pelanggan baharu yang layak. Kaedah pembayaran diperlukan",
            "1,000 mesej sembang AI sebulan",
            "Warna aksen tersuai",
            "Semua yang ditawarkan dalam pelan Percuma",
            "Satu langganan untuk akaun anda pada web, iOS dan Android",
            "Harga web standard termasuk cukai. Tawaran mungkin berbeza mengikut rantau dan gedung aplikasi. Harga akhir dipaparkan sebelum pembelian",
            "Langganan diperbaharui setiap bulan. Batalkan pada bila-bila masa dan kekalkan akses sehingga tempoh semasa tamat",
          ],
          cta: {
            label: "Mulakan percubaan percuma 7 hari",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "link_tier",
          name: "Pengehosan sendiri",
          price: "Percuma",
          highlighted: false,
          bullets: [
            "Aplikasi sumber terbuka dan infrastruktur AWS CDK",
            "Persediaan lengkap untuk pelaksanaan pada AWS, serta persekitaran pembangunan setempat dengan Docker dan Postgres",
            "Anda menyediakan dan mengurus infrastruktur, e-mel, pemantauan dan kelayakan akses AI",
            "Anda menanggung kos infrastruktur dan penyedia pihak ketiga",
            "Import dan eksport kad, tag dan media antara pemasangan yang kami hos dengan pemasangan yang anda hos sendiri",
          ],
          cta: {
            label: "Hos sendiri dari GitHub",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
