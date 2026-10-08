import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - Bezplatné kartičky s opakovaním v rozostupoch a otvoreným zdrojovým kódom",
  description:
    "Bezplatné kartičky s otvoreným zdrojovým kódom: opakovanie v rozostupoch podľa FSRS, tvorba kartičiek s pomocou AI, učenie offline so synchronizáciou, prenosné exporty a vlastné hosťovanie.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Zadarmo a s otvoreným zdrojovým kódom",
      titleLines: [
        "Vytvárajte kartičky.",
        "Opakujte múdrejšie.",
        "Zapamätajte si viac.",
      ],
      subtitle:
        "Bezplatné kartičky s otvoreným zdrojovým kódom, ktoré naplánujú každé opakovanie na správny čas, fungujú offline a synchronizujú sa medzi webom, iOS a Androidom. Ak potrebujete pomoc s tvorbou alebo vylepšením kartičiek, využite AI. Nibomo sa predtým volalo Flashcards Open Source App.",
      trustLine: "Žiadna platobná karta. Žiadne reklamy. Žiadne odpočítavanie skúšobnej verzie.",
      primaryLink: {
        label: "Začať",
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "Zobraziť na GitHube",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Alebo pomocou tejto URL pripojte ľubovoľného AI klienta kompatibilného s MCP:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "Ako Nibomo funguje",
      items: [
        {
          label: "01 · KARTIČKY S AI",
          titleLines: [
            "Povedzte AI, čo sa chcete naučiť.",
          ],
          description: "Opíšte tému alebo priložte svoje poznámky. AI pomôže premeniť materiály na kartičky s otázkami a odpoveďami.",
          linkLabel: "Vytvoriť kartičky",
          imagePath: "/home/ai-flashcards-sk.png",
          imageAlt: "AI chat Nibomo vytvára kartičky z témy alebo priložených poznámok",
        },
        {
          label: "02 · ZAČNITE SA UČIŤ",
          titleLines: [
            "Jedna otázka za druhou.",
          ],
          description: "Otvorte kartičku a skúste si spomenúť na odpoveď skôr, ako ju zobrazíte. Učte sa vlastným tempom, jednu kartičku po druhej.",
          linkLabel: "Začať sa učiť",
          imagePath: "/home/start-learning-sk.png",
          imageAlt: "Opakovacia kartička Nibomo s tlačidlom na zobrazenie odpovede",
        },
        {
          label: "03 · INTELIGENTNÉ OPAKOVANIE",
          titleLines: [
            "Skontrolujte odpoveď.",
            "Ohodnoťte, ako dobre si pamätáte.",
          ],
          description: "Zobrazte odpoveď a označte, ako ľahko ste si na ňu spomenuli. Nibomo zobrazuje náročné kartičky skôr a známe neskôr.",
          linkLabel: "Opakovať kartičky",
          imagePath: "/home/smart-reviews-sk.png",
          imageAlt: "Kartička Nibomo so zobrazenou odpoveďou a hodnotením zapamätania",
        },
        {
          label: "04 · VÁŠ POKROK",
          titleLines: [
            "Premeňte učenie na návyk.",
          ],
          description: "Sledujte dni učenia v kalendári a udržiavajte svoju sériu. Každé opakovanie je ďalším krokom k vášmu cieľu.",
          linkLabel: "Zobraziť pokrok",
          imagePath: "/home/your-progress-sk.png",
          imageAlt: "Obrazovka pokroku Nibomo s kalendárom série dní učenia a rebríčkom",
        }
      ],
    },
    {
      type: "feature_list",
      title: "Funkcie",
      intro:
        "Všetko, čo potrebujete na tvorbu užitočných kartičiek, opakovanie v správnom čase, učenie offline a udržanie kontroly nad svojimi študijnými dátami.",
      items: [
        {
          title: "Múdrejšie opakovanie vďaka FSRS",
          description:
            "Opakujte kartičky, na ktoré dnes prišiel čas. FSRS vracia ťažké kartičky skôr a pri tých známych čaká dlhšie, kým ich ukáže znova.",
        },
        {
          title: "Tvorba kartičiek s pomocou AI",
          description:
            "Požiadajte AI o pomoc s vytvorením kartičiek, vylepšením ich formulácie alebo spresnením odpovede. O tom, čo sa uloží, rozhodujete vy.",
        },
        {
          title: "Učenie offline s automatickou synchronizáciou",
          description:
            "Pokračujte v opakovaní na mobilnom zariadení bez pripojenia na internet. Zmeny sa synchronizujú automaticky.",
        },
        {
          title: "Import, export a vlastníctvo vašich dát",
          description:
            "Svoje študijné materiály presuniete dnu aj von, kedykoľvek chcete. Prenosné exporty obsahujú kartičky, štítky aj súvisiace médiá.",
        },
        {
          title: "Spolupráca s AI agentmi",
          description:
            "Pripojte sa cez MCP alebo Agent API, aby vám AI agenti pomohli kartičky vytvárať, vylepšovať a organizovať.",
        },
        {
          title: "Zadarmo a s možnosťou vlastného hosťovania",
          description:
            "Používajte hosťovanú aplikáciu zadarmo, prezrite si otvorený zdrojový kód alebo ju spustite na vlastnej infraštruktúre.",
        },
      ],
    },
    {
      type: "review_cta",
      titleLines: [
        "Nechajte Nibomo naplánovať vaše opakovania.",
        "Vy sa sústreďte na učenie.",
      ],
      description: "Premeňte to, čo sa učíte, na kartičky, opakujte v správnom čase a zapamätajte si viac.",
    },
  ],
  body: "",
} as const;
