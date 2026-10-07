import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - Aplikasi Kartu Pengulangan Berjarak Gratis dan Open Source",
  description:
    "Kartu gratis dan open source dengan pengulangan berjarak FSRS, pembuatan kartu berbantuan AI, belajar offline dan sinkronisasi, ekspor portabel, serta self-hosting.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Gratis & open source",
      titleLines: [
        "Buat kartu.",
        "Tinjau lebih cerdas.",
        "Ingat lebih banyak.",
      ],
      subtitle:
        "Kartu gratis dan open source yang menjadwalkan setiap tinjauan pada waktu yang tepat, bekerja offline, dan tersinkron di web, iOS, dan Android. Gunakan AI saat Anda butuh bantuan membuat atau memperbaiki kartu. Nibomo sebelumnya dikenal sebagai Flashcards Open Source App.",
      trustLine: "Tanpa kartu kredit. Tanpa iklan. Tanpa hitung mundur uji coba.",
      primaryLink: {
        label: "Mulai Sekarang",
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "Lihat di GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Atau hubungkan klien AI apa pun yang kompatibel dengan MCP melalui URL ini:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "Cara kerja Nibomo",
      items: [
        {
          label: "01 · FLASHCARD DENGAN AI",
          titleLines: [
            "Beri tahu AI apa yang ingin kamu pelajari.",
          ],
          description: "Jelaskan topik atau lampirkan catatanmu. AI membantu mengubah materimu menjadi flashcard berisi pertanyaan dan jawaban.",
          linkLabel: "Buat flashcard",
          imagePath: "/home/ai-flashcards.png",
          imageAlt: "Obrolan AI Nibomo yang membuat flashcard dari topik atau catatan terlampir",
        },
        {
          label: "02 · MULAI BELAJAR",
          titleLines: [
            "Satu pertanyaan setiap kali.",
          ],
          description: "Buka flashcard dan coba ingat jawabannya sebelum menampilkannya. Belajar sesuai kecepatanmu, satu kartu setiap kali.",
          linkLabel: "Mulai belajar",
          imagePath: "/home/start-learning.png",
          imageAlt: "Flashcard ulasan Nibomo dengan tombol untuk menampilkan jawaban",
        },
        {
          label: "03 · ULASAN CERDAS",
          titleLines: [
            "Periksa jawabanmu.",
            "Nilai daya ingatmu.",
          ],
          description: "Tampilkan jawaban dan tandai seberapa mudah kamu mengingatnya. Nibomo menampilkan kembali kartu sulit lebih cepat dan kartu yang sudah dikenal lebih lambat.",
          linkLabel: "Ulas flashcard",
          imagePath: "/home/smart-reviews.png",
          imageAlt: "Flashcard Nibomo dengan jawaban terbuka dan pilihan penilaian daya ingat",
        },
        {
          label: "04 · KEMAJUANMU",
          titleLines: [
            "Jadikan belajar sebagai kebiasaan.",
          ],
          description: "Lihat hari belajarmu di kalender dan pertahankan rangkaian hari belajarmu. Setiap ulasan membawamu selangkah lebih dekat ke tujuan.",
          linkLabel: "Lihat kemajuanmu",
          imagePath: "/home/your-progress.png",
          imageAlt: "Layar kemajuan Nibomo dengan kalender rangkaian hari belajar dan papan peringkat",
        }
      ],
    },
    {
      type: "feature_list",
      title: "Fitur",
      intro:
        "Semua yang Anda butuhkan untuk membuat kartu yang berguna, meninjau pada waktu yang tepat, tetap belajar offline, dan mengendalikan data belajar Anda.",
      items: [
        {
          title: "Tinjauan Lebih Cerdas dengan FSRS",
          description:
            "Tinjau kartu yang jatuh tempo hari ini. FSRS memunculkan kembali kartu yang sulit lebih cepat dan menunggu lebih lama sebelum menampilkan kartu yang sudah Anda kuasai.",
        },
        {
          title: "Pembuatan Kartu Berbantuan AI",
          description:
            "Minta AI membantu membuat kartu, memperbaiki kalimatnya, atau memperjelas jawaban. Anda tetap mengendalikan apa yang disimpan.",
        },
        {
          title: "Belajar Offline dengan Sinkronisasi Otomatis",
          description:
            "Terus mengulas di perangkat seluler tanpa koneksi internet. Perubahan disinkronkan secara otomatis.",
        },
        {
          title: "Impor, Ekspor, dan Miliki Data Anda",
          description:
            "Pindahkan materi belajar Anda masuk atau keluar kapan saja. Ekspor yang portabel mencakup kartu, tag, dan media terkait.",
        },
        {
          title: "Bekerja dengan Agen AI",
          description:
            "Hubungkan lewat MCP atau Agent API agar agen AI bisa membantu membuat, memperbaiki, dan merapikan kartu Anda.",
        },
        {
          title: "Gratis dan Bisa Di-Hosting Sendiri",
          description:
            "Gunakan aplikasi terkelola secara gratis, periksa kode open source-nya, atau jalankan di infrastruktur Anda sendiri.",
        },
      ],
    },
    {
      type: "review_cta",
      titleLines: [
        "Biarkan Nibomo merencanakan ulasanmu.",
        "Kamu fokus belajar.",
      ],
      description: "Ubah apa yang kamu pelajari menjadi flashcard, ulas pada waktu yang tepat, dan ingat lebih banyak.",
    },
  ],
  body: "",
} as const;
