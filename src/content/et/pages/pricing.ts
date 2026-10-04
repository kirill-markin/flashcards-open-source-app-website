import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Alusta tasuta. Premiumiga rohkem AI-d.",
  description:
    "Alusta majutatud rakenduses tasuta, mine üle Premiumile hinnaga USD 6.99 kuus, et AI-ga rohkem vestelda, või majuta avatud lähtekoodiga lahendust ise oma AWS-i taristus.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Alusta tasuta. Premiumiga rohkem AI-d.",
      intro:
        "Alusta majutatud rakenduses tasuta ja ilma krediitkaardita, lisa rohkema AI-vestluse jaoks Premium või majuta avatud lähtekoodiga lahendust ise ja tasuta oma AWS-i taristus.",
      tiers: [
        {
          type: "auth_tier",
          name: "Tasuta",
          price: "Tasuta",
          highlighted: true,
          bullets: [
            "50 AI-vestlussõnumit kuus",
            "Kasuta oma OpenAI API võtit; selle kasutust kuulimiidi hulka ei arvestata",
            "Sünkroonimine veebi, iOS-i ja Androidi vahel on kaasas",
            "Paketipõhiseid piiranguid kaartidele, failidele ega kogumahule ei ole; kehtivad tavapärased faili- ja toimingupõhised tehnilised piirid",
            "Kaartide, siltide ja meedia import ja eksport majutatud ja ise majutatud paigalduste vahel",
            "Paroolita sisselogimine ühekordse e-posti koodiga",
          ],
          cta: {
            label: "Kasuta majutatud rakendust tasuta",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "$6.99/kuu",
          highlighted: false,
          bullets: [
            "7-päevane tasuta prooviperiood tingimustele vastavatele uutele tellijatele; makseviis on nõutav",
            "1000 AI-vestlussõnumit kuus",
            "Kohandatud rõhuvärvid",
            "Kõik, mis on paketis Tasuta",
            "Üks tellimus sinu kontole veebis, iOS-is ja Androidis",
            "Hind USD-s koos maksudega; maksmisel võidakse näidata hinda kohalikus valuutas",
            "Uueneb igakuiselt; saad igal ajal tühistada ja ligipääs säilib perioodi lõpuni",
          ],
          cta: {
            label: "Alusta 7-päevast tasuta prooviperioodi",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "link_tier",
          name: "Ise majutatud",
          price: "Tasuta",
          highlighted: false,
          bullets: [
            "Avatud lähtekoodiga rakendus ja AWS CDK taristu",
            "Täielik AWS-i juurutusvoog ning kohalik Docker/Postgres arenduskeskkond",
            "Taristu, e-posti, seire ja AI ligipääsuvõtmed hangid ja hooldad ise",
            "Taristu ja kolmandate osapoolte teenuste kulud maksad sina",
            "Kaartide, siltide ja meedia import ja eksport majutatud ja ise majutatud paigalduste vahel",
          ],
          cta: {
            label: "Majuta ise GitHubi kaudu",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
