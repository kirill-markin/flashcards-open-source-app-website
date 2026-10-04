import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Gratis per iniziare. Premium per più IA.",
  description:
    "Inizia gratis con l'app ospitata, passa a Premium a USD 6.99/mese per avere più chat IA, oppure installa lo stack open source in self-hosting sulla tua infrastruttura AWS.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Gratis per iniziare. Premium per più IA.",
      intro:
        "Inizia gratis con l'app ospitata senza carta di credito, aggiungi Premium per avere più chat IA, oppure esegui gratis lo stack open source in self-hosting sulla tua infrastruttura AWS.",
      tiers: [
        {
          type: "auth_tier",
          name: "Gratis",
          price: "Gratis",
          highlighted: true,
          bullets: [
            "50 messaggi nella chat IA al mese",
            "Usa la tua chiave API OpenAI; il suo utilizzo non rientra nel limite mensile",
            "Sincronizzazione tra web, iOS e Android inclusa",
            "Nessuna quota di piano su carte, file o spazio totale; valgono i normali limiti tecnici per file e per operazione",
            "Importa ed esporta carte, tag e media tra installazioni ospitate e in self-hosting",
            "Accesso senza password con un codice monouso via email",
          ],
          cta: {
            label: "Usa gratis l'app ospitata",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "$6.99/mese",
          highlighted: false,
          bullets: [
            "Prova gratuita di 7 giorni per i nuovi abbonati idonei; metodo di pagamento richiesto",
            "1000 messaggi nella chat IA al mese",
            "Colori di accento personalizzati",
            "Tutto ciò che è incluso nel piano Gratis",
            "Un solo abbonamento per il tuo account su web, iOS e Android",
            "Prezzo in USD con imposte incluse; al pagamento potrebbe comparire un prezzo in valuta locale",
            "Rinnovo mensile; annulla quando vuoi e mantieni l'accesso fino alla fine del periodo",
          ],
          cta: {
            label: "Inizia la prova gratuita di 7 giorni",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "link_tier",
          name: "Self-hosted",
          price: "Gratis",
          highlighted: false,
          bullets: [
            "Applicazione e infrastruttura AWS CDK open source",
            "Percorso completo di deploy su AWS più un ambiente di sviluppo locale con Docker/Postgres",
            "Infrastruttura, email, monitoraggio e credenziali IA le fornisci e le mantieni tu",
            "I costi di infrastruttura e dei provider esterni sono a tuo carico",
            "Importa ed esporta carte, tag e media tra installazioni ospitate e in self-hosting",
          ],
          cta: {
            label: "Fai self-hosting da GitHub",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
