import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Besplatno za korištenje. Besplatno za vlastito hostiranje.",
  description:
    "Koristite hostiranu aplikaciju bez naknade, uz AI i sinkronizaciju uključene tijekom bete, ili sami hostirajte otvoreni kod na vlastitoj AWS infrastrukturi.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Besplatno za korištenje. Besplatno za vlastito hostiranje.",
      intro:
        "Koristite hostiranu aplikaciju bez naknade i bez kreditne kartice ili pokrenite otvoreni kod na vlastitoj AWS infrastrukturi.",
      tiers: [
        {
          type: "auth_tier",
          name: "Hostirano",
          price: "Besplatno",
          highlighted: true,
          bullets: [
            "AI značajke uključene su tijekom bete",
            "Uključena sinkronizacija između weba, iOS-a i Androida",
            "Tijekom bete nema kvota po planu za kartice, datoteke ni ukupnu pohranu; vrijede uobičajena tehnička ograničenja po datoteci i po operaciji",
            "Uvoz i izvoz kartica, oznaka i medijskih datoteka između hostirane i samostalno hostirane instalacije",
            "Prijava bez lozinke jednokratnim kodom iz e-pošte",
            "Osnovna izrada i ponavljanje kartica ostat će besplatni; intenzivnije korištenje AI značajki kasnije će možda zahtijevati vlastiti API ključ pružatelja usluge ili plaćenu opciju",
          ],
          cta: {
            label: "Koristite hostiranu aplikaciju besplatno",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "link_tier",
          name: "Vlastito hostiranje",
          price: "Besplatno",
          highlighted: false,
          bullets: [
            "Aplikacija otvorenog koda i AWS CDK infrastruktura",
            "Potpun postupak postavljanja na AWS i uz to lokalno razvojno okruženje s Dockerom i Postgresom",
            "Infrastrukturu, e-poštu, nadzor i AI pristupne podatke osiguravate i održavate sami",
            "Troškove infrastrukture i vanjskih pružatelja usluga plaćate vi",
            "Uvoz i izvoz kartica, oznaka i medijskih datoteka između hostirane i samostalno hostirane instalacije",
          ],
          cta: {
            label: "Hostirajte sami s GitHuba",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
