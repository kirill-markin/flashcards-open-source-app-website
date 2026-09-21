import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Zadarmo na používanie. Zadarmo na vlastné hosťovanie.",
  description:
    "Používajte hosťovanú aplikáciu bez platenia, s AI a synchronizáciou zahrnutými počas bety, alebo si otvorený systém spustite na vlastnej infraštruktúre AWS.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Zadarmo na používanie. Zadarmo na vlastné hosťovanie.",
      intro:
        "Používajte hosťovanú aplikáciu bez platenia a bez platobnej karty, alebo si otvorený systém spustite na vlastnej infraštruktúre AWS.",
      tiers: [
        {
          type: "auth_tier",
          name: "Hosťovaná",
          price: "Zadarmo",
          highlighted: true,
          bullets: [
            "Funkcie AI sú počas bety v cene",
            "Synchronizácia medzi webom, iOS a Androidom v cene",
            "Počas bety žiadne tarifné kvóty na kartičky, súbory ani celkové úložisko; platia bežné technické limity na jeden súbor a na jednu operáciu",
            "Import a export kartičiek, štítkov a médií medzi hosťovanou a vlastnou inštaláciou",
            "Prihlásenie bez hesla jednorazovým kódom z e-mailu",
            "Základná tvorba a opakovanie kartičiek zostanú zadarmo; vyššie využitie AI môže neskôr vyžadovať vlastný API kľúč poskytovateľa alebo platenú možnosť",
          ],
          cta: {
            label: "Používať hosťovanú aplikáciu zadarmo",
            href: "https://app.flashcards-open-source-app.com",
          },
        },
        {
          type: "link_tier",
          name: "Vlastné hosťovanie",
          price: "Zadarmo",
          highlighted: false,
          bullets: [
            "Aplikácia s otvoreným zdrojovým kódom a infraštruktúra AWS CDK",
            "Kompletný postup nasadenia na AWS a k tomu lokálne vývojové prostredie s Dockerom a Postgresom",
            "Infraštruktúru, e-mail, monitoring a prístupové údaje k AI si zabezpečujete a spravujete sami",
            "Náklady na infraštruktúru a poskytovateľov tretích strán hradíte vy",
            "Import a export kartičiek, štítkov a médií medzi hosťovanou a vlastnou inštaláciou",
          ],
          cta: {
            label: "Spustiť vlastnú inštanciu z GitHubu",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
