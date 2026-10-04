import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Pradėkite nemokamai. Daugiau DI – su Premium.",
  description:
    "Pradėkite nemokamai mūsų talpinamoje programėlėje, už USD 6.99/mėn. pereikite prie Premium ir gaukite daugiau DI pokalbių arba talpinkite atvirojo kodo sprendimą savo AWS infrastruktūroje.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Pradėkite nemokamai. Daugiau DI – su Premium.",
      intro:
        "Pradėkite naudotis mūsų talpinama programėle nemokamai ir be banko kortelės, įsigykite Premium, jei norite daugiau DI pokalbių, arba nemokamai paleiskite atvirojo kodo sprendimą savo AWS infrastruktūroje.",
      tiers: [
        {
          type: "auth_tier",
          name: "Nemokamas",
          price: "Nemokamai",
          highlighted: true,
          bullets: [
            "50 DI pokalbio žinučių per mėnesį",
            "Galite naudoti savo OpenAI API raktą; su juo pateiktos užklausos į mėnesio limitą neįskaičiuojamos",
            "Sinchronizavimas tarp naršyklės, iOS ir Android įskaičiuotas",
            "Nėra plano kvotų kortelėms, failams ar bendrai saugyklai; galioja įprasti techniniai vieno failo ir vienos operacijos apribojimai",
            "Importuokite ir eksportuokite korteles, žymas ir mediją tarp mūsų talpinamos ir savame serveryje įdiegtos versijos",
            "Prisijungimas be slaptažodžio vienkartiniu kodu el. paštu",
          ],
          cta: {
            label: "Naudotis mūsų talpinama programėle nemokamai",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "$6.99/mėn.",
          highlighted: false,
          bullets: [
            "7 dienų nemokamas bandomasis laikotarpis reikalavimus atitinkantiems naujiems prenumeratoriams; reikalingas mokėjimo būdas",
            "1000 DI pokalbio žinučių per mėnesį",
            "Pasirinktinės akcento spalvos",
            "Viskas, kas įeina į planą „Nemokamas“",
            "Viena prenumerata jūsų paskyrai naršyklėje, iOS ir Android",
            "Kaina nurodyta JAV doleriais su įskaičiuotais mokesčiais; atsiskaitant kaina gali būti rodoma vietine valiuta",
            "Pratęsiama kas mėnesį; atšaukite bet kada, o prieiga išliks iki laikotarpio pabaigos",
          ],
          cta: {
            label: "Išbandyti 7 dienas nemokamai",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "link_tier",
          name: "Savame serveryje",
          price: "Nemokamai",
          highlighted: false,
          bullets: [
            "Atvirojo kodo programa ir AWS CDK infrastruktūra",
            "Pilnas diegimo AWS kelias ir vietinė Docker/Postgres kūrimo aplinka",
            "Infrastruktūrą, el. paštą, stebėseną ir DI prieigos duomenis parūpinate ir prižiūrite patys",
            "Apmokate infrastruktūros ir trečiųjų šalių tiekėjų išlaidas",
            "Importuokite ir eksportuokite korteles, žymas ir mediją tarp mūsų talpinamos ir savame serveryje įdiegtos versijos",
          ],
          cta: {
            label: "Talpinkite savame serveryje iš GitHub",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
