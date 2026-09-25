import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - brezplačne odprtokodne učne kartice s ponavljanjem v časovnih razmikih",
  description:
    "Brezplačne odprtokodne učne kartice s ponavljanjem v časovnih razmikih po algoritmu FSRS, ustvarjanjem kartic s pomočjo AI, učenjem brez povezave in sinhronizacijo, prenosljivimi izvozi in lastnim gostovanjem.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Brezplačno in odprtokodno",
      titleLines: [
        "Ustvarjajte kartice.",
        "Ponavljajte pametneje.",
        "Zapomnite si več.",
      ],
      subtitle:
        "Brezplačne odprtokodne učne kartice, ki vsako ponovitev načrtujejo za pravi trenutek, delujejo brez povezave in se sinhronizirajo med spletom, iOS-om in Androidom. Kadar želite pomoč pri ustvarjanju ali izboljšanju kartic, uporabite AI. Nibomo se je prej imenoval Flashcards Open Source App.",
      trustLine: "Brez kreditne kartice. Brez oglasov. Brez odštevanja preizkusne dobe.",
      primaryLink: {
        label: "Začnite",
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "Oglejte si na GitHubu",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Dodajte ta strežnik MCP v svojega odjemalca AI:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "public_activity",
    },
    {
      type: "feature_list",
      title: "Funkcije",
      intro:
        "Vse, kar potrebujete za ustvarjanje uporabnih kartic, ponavljanje ob pravem času, učenje brez povezave in nadzor nad svojimi učnimi podatki.",
      items: [
        {
          title: "Pametnejše ponavljanje z algoritmom FSRS",
          description:
            "Ponavljajte kartice, ki so danes na vrsti. FSRS težke kartice prikaže prej, pri znanih pa počaka dlje, preden jih spet pokaže.",
        },
        {
          title: "Ustvarjanje kartic s pomočjo AI",
          description:
            "Prosite AI za pomoč pri ustvarjanju kartic, izboljšanju ubeseditve ali razjasnitvi odgovora. O tem, kaj se shrani, odločate vi.",
        },
        {
          title: "Učenje brez povezave s samodejno sinhronizacijo",
          description:
            "Ponavljajte na mobilni napravi tudi brez internetne povezave. Spremembe se sinhronizirajo samodejno, zato lahko nadaljujete v spletu, na iOS-u ali Androidu.",
        },
        {
          title: "Uvoz, izvoz in lastništvo vaših podatkov",
          description:
            "Učno gradivo prenesete noter ali ven, kadar koli želite. Prenosljivi izvozi vključujejo kartice, oznake in pripadajočo predstavnost.",
        },
        {
          title: "Deluje z agenti AI",
          description:
            "Povežite se prek MCP ali Agent API, da vam agenti AI pomagajo ustvarjati, izboljševati in urejati kartice.",
        },
        {
          title: "Brezplačno in z možnostjo lastnega gostovanja",
          description:
            "Gostovano aplikacijo uporabljajte brezplačno, preglejte odprto izvorno kodo ali jo poženite na lastni infrastrukturi.",
        },
      ],
    },
  ],
  body: "",
} as const;
