import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Gratis da usare. Gratis in self-hosting.",
  description:
    "Usa gratis l'app ospitata, con AI e sincronizzazione incluse durante la beta, oppure installa lo stack open source in self-hosting sulla tua infrastruttura AWS.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Gratis da usare. Gratis in self-hosting.",
      intro:
        "Usa gratis l'app ospitata senza carta di credito, oppure esegui lo stack open source sulla tua infrastruttura AWS.",
      tiers: [
        {
          type: "auth_tier",
          name: "Ospitata",
          price: "Gratis",
          highlighted: true,
          bullets: [
            "Funzioni AI incluse durante la beta",
            "Sincronizzazione tra web, iOS e Android inclusa",
            "Nessuna quota di piano su carte, file o spazio totale durante la beta; valgono i normali limiti tecnici per file e per operazione",
            "Importa ed esporta carte, tag e media tra installazioni ospitate e in self-hosting",
            "Accesso senza password con un codice monouso via email",
            "Creazione e ripasso delle carte resteranno gratis; un uso più intenso dell'AI potrà richiedere in futuro una tua chiave API del provider o un'opzione a pagamento",
          ],
          cta: {
            label: "Usa gratis l'app ospitata",
            href: "https://app.flashcards-open-source-app.com",
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
            "Infrastruttura, email, monitoraggio e credenziali AI le fornisci e le mantieni tu",
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
