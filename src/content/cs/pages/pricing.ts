import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Začněte zdarma. Premium pro víc AI.",
  description:
    "Začněte zdarma v hostované aplikaci, přejděte na Premium za USD 6.99 měsíčně a získejte víc AI chatu, nebo si otevřený systém hostujte na vlastní infrastruktuře AWS.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Začněte zdarma. Premium pro víc AI.",
      intro:
        "Začněte v hostované aplikaci zdarma a bez platební karty, přidejte Premium pro víc AI chatu, nebo si otevřený systém zdarma hostujte na vlastní infrastruktuře AWS.",
      tiers: [
        {
          type: "auth_tier",
          name: "Zdarma",
          price: "Zdarma",
          highlighted: true,
          bullets: [
            "50 zpráv v AI chatu měsíčně",
            "Použijte vlastní klíč k OpenAI API; jeho využití se nezapočítává do měsíčního limitu",
            "Synchronizace mezi webem, iOS a Androidem v ceně",
            "Žádné tarifní kvóty na kartičky, soubory ani celkové úložiště; platí běžné technické limity na jeden soubor a na jednu operaci",
            "Import a export kartiček, štítků a médií mezi hostovanou a vlastní instalací",
            "Přihlášení bez hesla jednorázovým kódem z e-mailu",
          ],
          cta: {
            label: "Používat hostovanou aplikaci zdarma",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "$6.99/měsíc",
          highlighted: false,
          bullets: [
            "7denní zkušební období zdarma pro nové předplatitele, kteří splňují podmínky; je vyžadována platební metoda",
            "1000 zpráv v AI chatu měsíčně",
            "Vlastní barvy zvýraznění",
            "Vše z tarifu Zdarma",
            "Jedno předplatné pro váš účet na webu, v iOS i Androidu",
            "Cena v USD včetně daní; při platbě se může zobrazit cena v místní měně",
            "Obnovuje se měsíčně; zrušit ho můžete kdykoli a přístup vám zůstane do konce období",
          ],
          cta: {
            label: "Zahájit 7denní zkušební období zdarma",
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
