import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - Aplicație gratuită și open source de fișe cu repetiție spațiată",
  description:
    "Fișe gratuite și open source cu repetiție spațiată FSRS, creare de fișe asistată de AI, studiu offline și sincronizare, exporturi portabile și găzduire proprie.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Gratuit și open source",
      titleLines: [
        "Creează fișe.",
        "Recapitulează mai inteligent.",
        "Reține mai mult.",
      ],
      subtitle:
        "Fișe gratuite și open source care programează fiecare recapitulare la momentul potrivit, funcționează offline și se sincronizează pe web, iOS și Android. Folosește AI când vrei ajutor la crearea sau îmbunătățirea fișelor. Nibomo s-a numit anterior Flashcards Open Source App.",
      trustLine: "Fără card de credit. Fără reclame. Fără perioadă de probă.",
      primaryLink: {
        label: "Începe acum",
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "Vezi pe GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Adaugă acest server MCP în clientul tău AI:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "public_activity",
    },
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
