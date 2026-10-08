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
        "Flashcard gratuite che programmano ogni ripasso al momento giusto, funzionano offline e si sincronizzano su web, iOS e Android. Usa l'AI quando vuoi una mano a creare o migliorare le carte.",
      trustLine: "Senza carta di credito. Senza pubblicità. Senza prova a tempo.",
      primaryLink: {
        label: "Inizia ora",
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "Guarda su GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Oppure collega qualsiasi client AI compatibile con MCP tramite questo URL:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "Come funziona Nibomo",
      items: [
        {
          label: "01 · FLASHCARD CON IA",
          titleLines: [
            "Di’ all’IA cosa vuoi imparare.",
          ],
          description: "Descrivi un argomento o allega i tuoi appunti. L’IA ti aiuta a trasformare il materiale in flashcard con domande e risposte.",
          linkLabel: "Crea flashcard",
          imagePath: "/home/ai-flashcards-it.png",
          imageAlt: "Chat IA di Nibomo che crea flashcard da un argomento o da appunti allegati",
        },
        {
          label: "02 · INIZIA A IMPARARE",
          titleLines: [
            "Una domanda alla volta.",
          ],
          description: "Apri una flashcard e prova a ricordare la risposta prima di mostrarla. Impara al tuo ritmo, una carta alla volta.",
          linkLabel: "Inizia a imparare",
          imagePath: "/home/start-learning-it.png",
          imageAlt: "Flashcard di ripasso Nibomo con un pulsante per mostrare la risposta",
        },
        {
          label: "03 · RIPASSI INTELLIGENTI",
          titleLines: [
            "Controlla la risposta.",
            "Valuta quanto ricordi.",
          ],
          description: "Mostra la risposta e indica con quanta facilità l’hai ricordata. Nibomo ripropone prima le carte difficili e più tardi quelle familiari.",
          linkLabel: "Ripassa le flashcard",
          imagePath: "/home/smart-reviews-it.png",
          imageAlt: "Flashcard Nibomo con la risposta visibile e le opzioni per valutare il ricordo",
        },
        {
          label: "04 · I TUOI PROGRESSI",
          titleLines: [
            "Trasforma lo studio in un’abitudine.",
          ],
          description: "Guarda i tuoi giorni di studio nel calendario e mantieni la serie. Ogni ripasso è un passo in più verso il tuo obiettivo.",
          linkLabel: "Guarda i progressi",
          imagePath: "/home/your-progress-it.png",
          imageAlt: "Schermata dei progressi Nibomo con il calendario dei giorni di studio consecutivi e la classifica",
        }
      ],
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
            "Continua a ripassare sul tuo dispositivo mobile senza connessione a Internet. Le modifiche si sincronizzano automaticamente.",
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
    {
      type: "review_cta",
      titleLines: [
        "Lascia che Nibomo pianifichi i tuoi ripassi.",
        "Tu concentrati sull’apprendimento.",
      ],
      description: "Trasforma ciò che impari in flashcard, ripassa al momento giusto e ricorda di più.",
    },
  ],
  body: "",
} as const;
