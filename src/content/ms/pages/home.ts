import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - Aplikasi Kad Imbas Ulangan Berjarak Percuma dan Sumber Terbuka",
  description:
    "Kad imbas percuma dan sumber terbuka dengan ulangan berjarak FSRS, bantuan AI untuk membuat kad, pembelajaran luar talian, penyegerakan, widget Skrin Utama dan pilihan pengehosan sendiri.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Percuma dan sumber terbuka",
      titleLines: [
        "Buat kad.",
        "Ulang kaji dengan bijak.",
        "Ingat lebih banyak.",
      ],
      subtitle:
        "Kad imbas percuma yang menjadualkan setiap ulang kaji pada masa yang sesuai, berfungsi di luar talian dan disegerakkan antara web, iOS dan Android.",
      trustLine: "Tanpa kad kredit, iklan atau tempoh percubaan.",
      primaryLink: {
        label: "Mula sekarang",
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "Lihat di GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Atau sambungkan mana-mana klien AI yang serasi dengan MCP menggunakan URL ini:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "Cara Nibomo berfungsi",
      items: [
        {
          label: "01 / BAHAN BELAJAR ANDA",
          titleLines: ["Mula dengan apa yang sedang anda pelajari"],
          description:
            "Lampirkan nota atau terangkan topik. Minta bantuan AI untuk mengubahnya menjadi soalan dan jawapan, kemudian pilih kad yang mahu disimpan.",
          linkLabel: "Buat kad imbas",
          imagePath: "/home/ai-flashcards.png",
          imageAlt: "Sembang AI Nibomo menghasilkan kad imbas daripada topik atau nota yang dilampirkan",
        },
        {
          label: "02 / AMBIL MASA SEBENTAR",
          titleLines: ["Cuba jawab sebelum melihat jawapan"],
          description:
            "Baca soalan dan luangkan sedikit masa untuk berfikir. Lihat jawapan dan nilai betapa mudahnya anda mengingati jawapan itu.",
          linkLabel: "Mula belajar",
          imagePath: "/home/start-learning.png",
          imageAlt: "Kad imbas Nibomo pada skrin ulang kaji dengan butang Tunjukkan jawapan",
        },
        {
          label: "03 / KUATKAN INGATAN",
          titleLines: ["Ulang kaji pada masa yang sesuai"],
          description:
            "Penilaian anda membantu menentukan masa ulang kaji seterusnya. Kad yang sukar muncul semula lebih awal, manakala kad yang sudah anda kenali muncul selepas sela yang lebih panjang.",
          linkLabel: "Ulang kaji kad imbas",
          imagePath: "/home/smart-reviews.png",
          imageAlt: "Kad imbas Nibomo dengan jawapan dipaparkan dan pilihan penilaian Ulang, Sukar, Baik dan Mudah",
        },
        {
          label: "04 · KEMAJUAN ANDA",
          titleLines: ["Jadikan belajar satu tabiat"],
          description:
            "Lihat hari anda belajar pada kalendar dan teruskan rentetan belajar anda. Setiap ulang kaji membawa anda selangkah lebih dekat dengan matlamat anda.",
          linkLabel: "Lihat kemajuan anda",
          imagePath: "/home/your-progress.png",
          imageAlt: "Skrin kemajuan Nibomo dengan kalendar rentetan belajar dan papan kedudukan penilaian",
        },
      ],
    },
    {
      type: "feature_list",
      title: "Ciri utama",
      intro:
        "Buat kad yang berguna, ulang kaji pada masa yang sesuai, teruskan belajar di luar talian dan kekalkan kawalan ke atas data pembelajaran anda.",
      items: [
        {
          title: "Ulang kaji dengan lebih bijak",
          description:
            "Ulang kaji kad yang dijadualkan untuk hari ini. FSRS memaparkan kad yang sukar lebih awal dan memberi sela yang lebih panjang sebelum memaparkan semula kad yang sudah anda kenali.",
        },
        {
          title: "Bantuan untuk draf pertama",
          description:
            "Jadikan nota anda draf kad imbas. Sunting setiap kad sebelum menyimpannya.",
        },
        {
          title: "Terus belajar tanpa internet",
          description:
            "Ulang kaji di luar talian pada telefon anda. Segerakkan apabila anda kembali dalam talian.",
        },
        {
          title: "Lihat kad seterusnya sepintas lalu",
          description:
            "Widget Skrin Utama untuk iPhone, iPad, Mac dan Android menunjukkan kad yang perlu diulang kaji, soalan seterusnya dan kemajuan pembelajaran anda.",
        },
        {
          title: "Bawa kad anda ke mana-mana",
          description:
            "Import dan eksport kad, tag dan media.",
        },
        {
          title: "Dapatkan bantuan daripada ejen anda",
          description:
            "Buat, sunting dan susun kad melalui MCP atau Agent API.",
        },
        {
          title: "Percuma, terbuka dan milik anda",
          description:
            "Belajar secara percuma, baca kod sumber atau hos Nibomo sendiri.",
        },
      ],
    },
    {
      type: "review_cta",
      titleLines: [
        "Biar Nibomo aturkan ulang kaji.",
        "Anda fokus pada pembelajaran.",
      ],
      description:
        "Tukar apa yang anda pelajari menjadi kad imbas, ulang kaji pada masa yang sesuai dan ingat lebih banyak.",
    },
  ],
  body: "",
} as const;
