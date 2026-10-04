import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Začnite zadarmo. Viac AI s Premium.",
  description:
    "Začnite zadarmo v hosťovanej aplikácii, prejdite za USD 6.99/mesiac na Premium a získajte viac AI chatu, alebo si otvorený systém spustite na vlastnej infraštruktúre AWS.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Začnite zadarmo. Viac AI s Premium.",
      intro:
        "Začnite používať hosťovanú aplikáciu zadarmo a bez platobnej karty, pridajte si Premium a získajte viac AI chatu, alebo si otvorený systém bezplatne spustite na vlastnej infraštruktúre AWS.",
      tiers: [
        {
          type: "auth_tier",
          name: "Bezplatný",
          price: "Zadarmo",
          highlighted: true,
          bullets: [
            "50 správ v AI chate mesačne",
            "Použite vlastný kľúč OpenAI API; jeho používanie sa nezapočítava do mesačného limitu",
            "Synchronizácia medzi webom, iOS a Androidom v cene",
            "Žiadne tarifné kvóty na kartičky, súbory ani celkové úložisko; platia bežné technické limity na jeden súbor a na jednu operáciu",
            "Import a export kartičiek, štítkov a médií medzi hosťovanou a vlastnou inštaláciou",
            "Prihlásenie bez hesla jednorazovým kódom z e-mailu",
          ],
          cta: {
            label: "Používať hosťovanú aplikáciu zadarmo",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "$6.99/mesiac",
          highlighted: false,
          bullets: [
            "7-dňové bezplatné skúšobné obdobie pre oprávnených nových predplatiteľov; vyžaduje sa spôsob platby",
            "1000 správ v AI chate mesačne",
            "Vlastné farby zvýraznenia",
            "Všetko z bezplatného plánu",
            "Jedno predplatné pre váš účet na webe, v iOS aj Androide",
            "Cena v USD vrátane daní; pri platbe sa môže zobraziť cena v miestnej mene",
            "Obnovuje sa mesačne; zrušiť ho môžete kedykoľvek a prístup vám zostane do konca obdobia",
          ],
          cta: {
            label: "Vyskúšať 7 dní zadarmo",
            href: "https://app.nibomo.com",
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
