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
        "Brezplačne učne kartice, ki vsako ponovitev načrtujejo za pravi trenutek, delujejo brez povezave in se sinhronizirajo med spletom, iOS-om in Androidom. Kadar želite pomoč pri ustvarjanju ali izboljšanju kartic, uporabite AI.",
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
          caption: "Ali povežite katerega koli odjemalca AI, ki podpira MCP, prek tega URL-ja:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "Kako deluje Nibomo",
      items: [
        {
          label: "01 · UČNE KARTICE Z UI",
          titleLines: [
            "Povejte UI, kaj se želite naučiti.",
          ],
          description: "Opišite temo ali priložite svoje zapiske. UI vam pomaga gradivo pretvoriti v učne kartice z vprašanji in odgovori.",
          linkLabel: "Ustvarite učne kartice",
          imagePath: "/home/ai-flashcards-sl.png",
          imageAlt: "Klepet z UI v Nibomu ustvari učne kartice iz teme ali priloženih zapiskov",
        },
        {
          label: "02 · ZAČNITE SE UČITI",
          titleLines: [
            "Eno vprašanje naenkrat.",
          ],
          description: "Odprite učno kartico in poskusite priklicati odgovor, preden ga prikažete. Učite se v svojem tempu, po eno kartico naenkrat.",
          linkLabel: "Začnite se učiti",
          imagePath: "/home/start-learning-sl.png",
          imageAlt: "Kartica za ponavljanje v Nibomu z gumbom za prikaz odgovora",
        },
        {
          label: "03 · PAMETNO PONAVLJANJE",
          titleLines: [
            "Preverite odgovor.",
            "Ocenite, kako dobro ste si zapomnili.",
          ],
          description: "Prikažite odgovor in označite, kako zlahka ste ga priklicali. Nibomo težke kartice znova pokaže prej, znane pa pozneje.",
          linkLabel: "Ponovite učne kartice",
          imagePath: "/home/smart-reviews-sl.png",
          imageAlt: "Kartica Nibomo s prikazanim odgovorom in možnostmi za oceno priklica",
        },
        {
          label: "04 · VAŠ NAPREDEK",
          titleLines: [
            "Naj učenje postane navada.",
          ],
          description: "Oglejte si učne dni v koledarju in nadaljujte svoj niz. Vsako ponavljanje je še en korak proti vašemu cilju.",
          linkLabel: "Oglejte si napredek",
          imagePath: "/home/your-progress-sl.png",
          imageAlt: "Prikaz napredka v Nibomu s koledarjem zaporednih učnih dni in lestvico",
        }
      ],
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
            "Nadaljujte s ponavljanjem na mobilni napravi brez internetne povezave. Spremembe se samodejno sinhronizirajo.",
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
    {
      type: "review_cta",
      titleLines: [
        "Naj Nibomo načrtuje vaša ponavljanja.",
        "Vi se osredotočite na učenje.",
      ],
      description: "Kar se učite, pretvorite v učne kartice, ponavljajte ob pravem času in si zapomnite več.",
    },
  ],
  body: "",
} as const;
