import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "Fitur Nibomo",
  description:
    "Jelajahi kartu gratis dan open source dengan pengulangan berjarak FSRS, pembuatan kartu berbantuan AI, belajar offline dan sinkronisasi, ekspor portabel, serta self-hosting.",
  slug: "features",
  sections: [
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
            "Lanjutkan meninjau di perangkat seluler tanpa koneksi internet. Perubahan tersinkron otomatis, jadi Anda bisa melanjutkan di web, iOS, atau Android.",
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
  ],
  body: "",
} as const;
