import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "Funcționalitățile Nibomo",
  description:
    "Descoperă fișe gratuite și open source cu repetiție spațiată FSRS, creare de fișe asistată de AI, studiu offline și sincronizare, exporturi portabile și găzduire proprie.",
  slug: "features",
  sections: [
    {
      type: "feature_list",
      title: "Funcționalități",
      intro:
        "Tot ce îți trebuie ca să creezi fișe utile, să recapitulezi la momentul potrivit, să studiezi offline și să păstrezi controlul asupra datelor tale de învățare.",
      items: [
        {
          title: "Recapitulări mai inteligente cu FSRS",
          description:
            "Recapitulează fișele scadente astăzi. FSRS readuce mai devreme fișele dificile și așteaptă mai mult înainte să le arate din nou pe cele cunoscute.",
        },
        {
          title: "Creare de fișe asistată de AI",
          description:
            "Cere-i AI-ului să te ajute să creezi fișe, să le îmbunătățească formularea sau să clarifice un răspuns. Tu decizi ce se salvează.",
        },
        {
          title: "Studiu offline cu sincronizare automată",
          description:
            "Continuă să recapitulezi pe telefon fără conexiune la internet. Modificările se sincronizează automat, ca să poți continua pe web, iOS sau Android.",
        },
        {
          title: "Importă, exportă și deține datele tale",
          description:
            "Mută-ți materialele de învățare oricând vrei. Exporturile portabile includ fișele, etichetele și fișierele media asociate.",
        },
        {
          title: "Funcționează cu agenți AI",
          description:
            "Conectează-te prin MCP sau Agent API, ca agenții AI să te ajute să creezi, să îmbunătățești și să organizezi fișele.",
        },
        {
          title: "Gratuit și cu găzduire proprie",
          description:
            "Folosește gratuit aplicația găzduită, inspectează codul open source sau rulează-l pe propria infrastructură.",
        },
      ],
    },
  ],
  body: "",
} as const;
