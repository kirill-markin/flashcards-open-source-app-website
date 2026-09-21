import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Tasuta kasutada. Tasuta ise majutada.",
  description:
    "Kasuta majutatud rakendust tasuta, beetaperioodil koos AI ja sünkroonimisega, või majuta avatud lähtekoodiga lahendust ise oma AWS-i taristus.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Tasuta kasutada. Tasuta ise majutada.",
      intro:
        "Kasuta majutatud rakendust tasuta ja ilma krediitkaardita või käivita avatud lähtekoodiga lahendus oma AWS-i taristus.",
      tiers: [
        {
          type: "auth_tier",
          name: "Majutatud",
          price: "Tasuta",
          highlighted: true,
          bullets: [
            "AI-funktsioonid on beetaperioodil kaasas",
            "Sünkroonimine veebi, iOS-i ja Androidi vahel on kaasas",
            "Beetaperioodil ei ole paketipõhiseid piiranguid kaartidele, failidele ega kogumahule; kehtivad tavapärased faili- ja toimingupõhised tehnilised piirid",
            "Kaartide, siltide ja meedia import ja eksport majutatud ja ise majutatud paigalduste vahel",
            "Paroolita sisselogimine ühekordse e-posti koodiga",
            "Kaartide loomine ja kordamine jäävad tasuta; suurem AI kasutus võib edaspidi eeldada sinu enda teenusepakkuja API-võtit või tasulist valikut",
          ],
          cta: {
            label: "Kasuta majutatud rakendust tasuta",
            href: "https://app.flashcards-open-source-app.com",
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
