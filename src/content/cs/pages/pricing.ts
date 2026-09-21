import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Zdarma k používání. Zdarma k vlastnímu hostování.",
  description:
    "Používejte hostovanou aplikaci bez placení, s AI a synchronizací zahrnutými během bety, nebo si otevřený systém hostujte na vlastní infrastruktuře AWS.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Zdarma k používání. Zdarma k vlastnímu hostování.",
      intro:
        "Používejte hostovanou aplikaci bez placení a bez platební karty, nebo si otevřený systém spusťte na vlastní infrastruktuře AWS.",
      tiers: [
        {
          type: "auth_tier",
          name: "Hostovaná",
          price: "Zdarma",
          highlighted: true,
          bullets: [
            "Funkce AI jsou během bety v ceně",
            "Synchronizace mezi webem, iOS a Androidem v ceně",
            "Během bety žádné tarifní kvóty na kartičky, soubory ani celkové úložiště; platí běžné technické limity na jeden soubor a na jednu operaci",
            "Import a export kartiček, štítků a médií mezi hostovanou a vlastní instalací",
            "Přihlášení bez hesla jednorázovým kódem z e-mailu",
            "Základní tvorba a opakování kartiček zůstanou zdarma; vyšší využití AI může později vyžadovat vlastní API klíč poskytovatele nebo placenou variantu",
          ],
          cta: {
            label: "Používat hostovanou aplikaci zdarma",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "link_tier",
          name: "Vlastní hostování",
          price: "Zdarma",
          highlighted: false,
          bullets: [
            "Aplikace s otevřeným zdrojovým kódem a infrastruktura AWS CDK",
            "Kompletní postup nasazení na AWS a k tomu místní vývojové prostředí s Dockerem a Postgresem",
            "Infrastrukturu, e-mail, monitoring a přístupové údaje k AI si zajišťujete a spravujete sami",
            "Náklady na infrastrukturu a poskytovatele třetích stran hradíte vy",
            "Import a export kartiček, štítků a médií mezi hostovanou a vlastní instalací",
          ],
          cta: {
            label: "Hostovat vlastní instanci z GitHubu",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
