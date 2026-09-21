import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Gratuit de folosit. Gratuit de găzduit.",
  description:
    "Folosește gratuit aplicația găzduită, cu AI și sincronizare incluse în beta, sau găzduiește singur stiva open source pe propria infrastructură AWS.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Gratuit de folosit. Gratuit de găzduit.",
      intro:
        "Folosește gratuit aplicația găzduită, fără card de credit, sau rulează stiva open source pe propria infrastructură AWS.",
      tiers: [
        {
          type: "auth_tier",
          name: "Găzduit",
          price: "Gratuit",
          highlighted: true,
          bullets: [
            "Funcții AI incluse în beta",
            "Sincronizare între web, iOS și Android inclusă",
            "Fără cote în funcție de plan pentru fișe, fișiere sau spațiu total în beta; se aplică limitele tehnice obișnuite per fișier și per operațiune",
            "Importă și exportă fișe, etichete și fișiere media între instalările găzduite și cele proprii",
            "Autentificare fără parolă, cu un cod unic trimis pe e-mail",
            "Crearea și recapitularea fișelor rămân gratuite; o utilizare mai intensă a AI ar putea necesita ulterior propria cheie API de furnizor sau o opțiune plătită",
          ],
          cta: {
            label: "Folosește gratuit aplicația găzduită",
            href: "https://app.flashcards-open-source-app.com",
          },
        },
        {
          type: "link_tier",
          name: "Găzduire proprie",
          price: "Gratuit",
          highlighted: false,
          bullets: [
            "Aplicație open source și infrastructură AWS CDK",
            "Traseu complet de implementare pe AWS, plus o configurare locală de dezvoltare cu Docker/Postgres",
            "Tu asiguri și întreții infrastructura, e-mailul, monitorizarea și credențialele AI",
            "Tu plătești costurile de infrastructură și pe cele ale furnizorilor terți",
            "Importă și exportă fișe, etichete și fișiere media între instalările găzduite și cele proprii",
          ],
          cta: {
            label: "Găzduiește singur din GitHub",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
