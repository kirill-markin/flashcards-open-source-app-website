import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "Funzionalità di Nibomo",
  description:
    "Scopri le flashcard gratuite e open source con ripetizione dilazionata FSRS, creazione di carte assistita dall'AI, studio offline e sincronizzazione, esportazioni portabili e self-hosting.",
  slug: "features",
  sections: [
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
