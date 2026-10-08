import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - Nemokamos atvirojo kodo mokymosi kortelės su kartojimu intervalais",
  description:
    "Nemokamos atvirojo kodo mokymosi kortelės su FSRS kartojimu intervalais, kortelių kūrimu su dirbtiniu intelektu, mokymusi neprisijungus ir sinchronizavimu, perkeliamu eksportu ir talpinimu savame serveryje.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Nemokama ir atvirojo kodo",
      titleLines: [
        "Kurkite korteles.",
        "Kartokite protingiau.",
        "Prisiminkite daugiau.",
      ],
      subtitle:
        "Nemokamos atvirojo kodo mokymosi kortelės, kurios kiekvieną kartojimą suplanuoja tinkamu metu, veikia neprisijungus ir sinchronizuojasi tarp naršyklės, iOS ir Android. Pasitelkite DI, kai reikia pagalbos kuriant ar tobulinant korteles. Anksčiau Nibomo vadinosi Flashcards Open Source App.",
      trustLine: "Nereikia banko kortelės. Jokių reklamų. Jokios bandomojo laikotarpio atgalinės atskaitos.",
      primaryLink: {
        label: "Pradėti",
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "Peržiūrėti GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Arba šiuo URL prijunkite bet kurį MCP palaikantį DI klientą:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "Kaip veikia Nibomo",
      items: [
        {
          label: "01 · MOKYMOSI KORTELĖS SU DI",
          titleLines: [
            "Pasakykite DI, ko norite išmokti.",
          ],
          description: "Aprašykite temą arba pridėkite savo užrašus. DI padeda paversti jūsų medžiagą mokymosi kortelėmis su klausimais ir atsakymais.",
          linkLabel: "Kurti mokymosi korteles",
          imagePath: "/home/ai-flashcards-lt.png",
          imageAlt: "Nibomo DI pokalbis kuria mokymosi korteles iš temos arba pridėtų užrašų",
        },
        {
          label: "02 · PRADĖKITE MOKYTIS",
          titleLines: [
            "Po vieną klausimą.",
          ],
          description: "Atverkite mokymosi kortelę ir pabandykite prisiminti atsakymą prieš jį parodydami. Mokykitės savo tempu, po vieną kortelę.",
          linkLabel: "Pradėti mokytis",
          imagePath: "/home/start-learning-lt.png",
          imageAlt: "Nibomo kartojimo kortelė su atsakymo parodymo mygtuku",
        },
        {
          label: "03 · IŠMANUS KARTOJIMAS",
          titleLines: [
            "Patikrinkite atsakymą.",
            "Įvertinkite, kaip gerai prisiminėte.",
          ],
          description: "Parodykite atsakymą ir pažymėkite, kaip lengvai jį prisiminėte. Nibomo sudėtingas korteles vėl parodo anksčiau, o pažįstamas — vėliau.",
          linkLabel: "Kartoti mokymosi korteles",
          imagePath: "/home/smart-reviews-lt.png",
          imageAlt: "Nibomo kortelė su parodytu atsakymu ir prisiminimo vertinimo parinktimis",
        },
        {
          label: "04 · JŪSŲ PAŽANGA",
          titleLines: [
            "Paverskite mokymąsi įpročiu.",
          ],
          description: "Kalendoriuje matykite mokymosi dienas ir išlaikykite nenutrūkstamą jų seką. Kiekvienas kartojimas — dar vienas žingsnis jūsų tikslo link.",
          linkLabel: "Peržiūrėti pažangą",
          imagePath: "/home/your-progress-lt.png",
          imageAlt: "Nibomo pažangos ekranas su iš eilės einančių mokymosi dienų kalendoriumi ir reitingų lentele",
        }
      ],
    },
    {
      type: "feature_list",
      title: "Funkcijos",
      intro:
        "Viskas, ko reikia, kad kurtumėte naudingas korteles, kartotumėte tinkamu metu, mokytumėtės neprisijungę ir patys valdytumėte savo mokymosi duomenis.",
      items: [
        {
          title: "Protingesnis kartojimas su FSRS",
          description:
            "Kartokite korteles, kurioms šiandien atėjo laikas. FSRS sunkias korteles grąžina greičiau, o gerai žinomas parodo vėliau.",
        },
        {
          title: "Kortelių kūrimas su DI",
          description:
            "Paprašykite DI pagalbos kuriant korteles, tikslinant formuluotes ar paaiškinant atsakymą. Jūs sprendžiate, kas bus išsaugota.",
        },
        {
          title: "Mokymasis neprisijungus su automatiniu sinchronizavimu",
          description:
            "Kartokite mobiliajame įrenginyje be interneto ryšio. Pakeitimai sinchronizuojami automatiškai.",
        },
        {
          title: "Importas, eksportas ir duomenys, kurie priklauso jums",
          description:
            "Perkelkite mokymosi medžiagą į programėlę ar iš jos kada panorėję. Į eksportą įtraukiamos kortelės, žymos ir susijusi medija.",
        },
        {
          title: "Veikia su DI agentais",
          description:
            "Prisijunkite per MCP arba Agent API, kad DI agentai padėtų kurti, tobulinti ir tvarkyti jūsų korteles.",
        },
        {
          title: "Nemokama ir galima talpinti savame serveryje",
          description:
            "Naudokitės mūsų talpinama programėle nemokamai, peržiūrėkite atvirąjį kodą arba paleiskite ją savo infrastruktūroje.",
        },
      ],
    },
    {
      type: "review_cta",
      titleLines: [
        "Leiskite Nibomo planuoti jūsų kartojimus.",
        "Jūs susitelkite į mokymąsi.",
      ],
      description: "Paverskite tai, ko mokotės, mokymosi kortelėmis, kartokite tinkamu metu ir prisiminkite daugiau.",
    },
  ],
  body: "",
} as const;
