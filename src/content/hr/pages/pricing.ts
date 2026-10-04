import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Besplatno za početak. Premium za više AI-ja.",
  description:
    "Počnite besplatno u hostiranoj aplikaciji, prijeđite na Premium za USD 6.99 mjesečno i dobijte više poruka u AI razgovoru ili sami hostirajte otvoreni kod na vlastitoj AWS infrastrukturi.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Besplatno za početak. Premium za više AI-ja.",
      intro:
        "Počnite besplatno u hostiranoj aplikaciji bez kreditne kartice, dodajte Premium za više poruka u AI razgovoru ili besplatno sami hostirajte otvoreni kod na vlastitoj AWS infrastrukturi.",
      tiers: [
        {
          type: "auth_tier",
          name: "Besplatno",
          price: "Besplatno",
          highlighted: true,
          bullets: [
            "50 poruka u AI razgovoru mjesečno",
            "Koristite vlastiti OpenAI API ključ; njegova se potrošnja ne ubraja u mjesečno ograničenje",
            "Uključena sinkronizacija između weba, iOS-a i Androida",
            "Nema kvota po planu za kartice, datoteke ni ukupnu pohranu; vrijede uobičajena tehnička ograničenja po datoteci i po operaciji",
            "Uvoz i izvoz kartica, oznaka i medijskih datoteka između hostirane i samostalno hostirane instalacije",
            "Prijava bez lozinke jednokratnim kodom iz e-pošte",
          ],
          cta: {
            label: "Koristite hostiranu aplikaciju besplatno",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "$6.99/mjesec",
          highlighted: false,
          bullets: [
            "Besplatno probno razdoblje od 7 dana za nove pretplatnike koji ispunjavaju uvjete; potreban je način plaćanja",
            "1000 poruka u AI razgovoru mjesečno",
            "Prilagođene boje naglaska",
            "Sve što nudi plan Besplatno",
            "Jedna pretplata za vaš račun na webu, iOS-u i Androidu",
            "Cijena u USD s uključenim porezima; pri plaćanju može se prikazati cijena u lokalnoj valuti",
            "Obnavlja se mjesečno; otkažite bilo kada i zadržite pristup do kraja razdoblja",
          ],
          cta: {
            label: "Započnite besplatno probno razdoblje od 7 dana",
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
