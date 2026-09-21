import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - App di flashcard gratuita e open source a ripetizione dilazionata",
  description:
    "Flashcard gratuite e open source con ripetizione dilazionata FSRS, creazione di carte assistita dall'AI, studio offline e sincronizzazione, esportazioni portabili e self-hosting.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Gratis e open source",
      titleLines: [
        "Crea carte.",
        "Ripassa meglio.",
        "Ricorda di più.",
      ],
      subtitle:
        "Flashcard gratuite e open source che programmano ogni ripasso al momento giusto, funzionano offline e si sincronizzano su web, iOS e Android. Usa l'AI quando vuoi una mano a creare o migliorare le carte. Nibomo prima si chiamava Flashcards Open Source App.",
      trustLine: "Senza carta di credito. Senza pubblicità. Senza prova a tempo.",
      primaryLink: {
        label: "Inizia ora",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "Guarda su GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Aggiungi questo server MCP al tuo client AI:",
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
      title: "Funzionalità",
      intro:
        "Tutto quello che serve per creare carte utili, ripassare al momento giusto, continuare a studiare offline e mantenere il controllo dei tuoi dati di studio.",
      items: [
        {
          title: "Ripassi più intelligenti con FSRS",
          description:
            "Ripassa le carte previste per oggi. FSRS riporta prima le carte difficili e aspetta di più prima di rimostrare quelle che conosci bene.",
        },
        {
          title: "Creazione di carte assistita dall'AI",
          description:
            "Chiedi all'AI di aiutarti a creare carte, migliorarne il testo o chiarire una risposta. Decidi tu che cosa viene salvato.",
        },
        {
          title: "Studio offline con sincronizzazione automatica",
          description:
            "Continua a ripassare sul telefono anche senza connessione. Le modifiche si sincronizzano da sole, così puoi proseguire sul web, su iOS o su Android.",
        },
        {
          title: "Importa, esporta e possiedi i tuoi dati",
          description:
            "Sposta i tuoi materiali di studio dentro e fuori quando vuoi. Le esportazioni portabili includono carte, tag e i media collegati.",
        },
        {
          title: "Funziona con gli agenti AI",
          description:
            "Collegati via MCP o Agent API, così gli agenti AI possono aiutarti a creare, migliorare e organizzare le tue carte.",
        },
        {
          title: "Gratis e self-hostabile",
          description:
            "Usa gratis l'app ospitata, ispeziona il codice open source oppure eseguila sulla tua infrastruttura.",
        },
      ],
    },
  ],
  body: "",
} as const;
