import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Brezplačna uporaba. Brezplačno lastno gostovanje.",
  description:
    "Gostovano aplikacijo uporabljajte brez stroškov, med beta različico sta vključena AI in sinhronizacija, ali pa odprtokodni sistem gostite na lastni infrastrukturi AWS.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Brezplačna uporaba. Brezplačno lastno gostovanje.",
      intro:
        "Gostovano aplikacijo uporabljajte brez stroškov in brez kreditne kartice ali pa odprtokodni sistem poženite na lastni infrastrukturi AWS.",
      tiers: [
        {
          type: "auth_tier",
          name: "Gostovano",
          price: "Brezplačno",
          highlighted: true,
          bullets: [
            "Funkcije AI so med beta različico vključene",
            "Vključena sinhronizacija med spletom, iOS-om in Androidom",
            "Med beta različico ni omejitev paketa glede števila kartic, datotek ali skupne shrambe; veljajo običajne tehnične omejitve na datoteko in na operacijo",
            "Uvoz in izvoz kartic, oznak in predstavnosti med gostovano namestitvijo in namestitvijo na lastnem strežniku",
            "Prijava brez gesla z enkratno kodo po e-pošti",
            "Osnovno ustvarjanje in ponavljanje kartic bo ostalo brezplačno; večja poraba AI bo pozneje morda zahtevala lasten ključ API pri ponudniku ali plačljivo možnost",
          ],
          cta: {
            label: "Brezplačno uporabite gostovano aplikacijo",
            href: "https://app.flashcards-open-source-app.com",
          },
        },
        {
          type: "link_tier",
          name: "Lastno gostovanje",
          price: "Brezplačno",
          highlighted: false,
          bullets: [
            "Odprtokodna aplikacija in infrastruktura AWS CDK",
            "Celotna pot za namestitev na AWS in lokalno razvojno okolje z Dockerjem in Postgresom",
            "Infrastrukturo, e-pošto, nadzor in poverilnice za AI zagotavljate in vzdržujete sami",
            "Stroške infrastrukture in zunanjih ponudnikov krijete sami",
            "Uvoz in izvoz kartic, oznak in predstavnosti med gostovano namestitvijo in namestitvijo na lastnem strežniku",
          ],
          cta: {
            label: "Namestite na lasten strežnik z GitHuba",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
