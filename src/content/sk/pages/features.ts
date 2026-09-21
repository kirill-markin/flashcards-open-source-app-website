import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "Funkcie Nibomo",
  description:
    "Preskúmajte bezplatné kartičky s otvoreným zdrojovým kódom: opakovanie v rozostupoch podľa FSRS, tvorba kartičiek s pomocou AI, učenie offline so synchronizáciou, prenosné exporty a vlastné hosťovanie.",
  slug: "features",
  sections: [
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
            "Opakujte na mobile aj bez pripojenia k internetu. Zmeny sa synchronizujú automaticky, takže môžete pokračovať na webe, iOS alebo Androide.",
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
  ],
  body: "",
} as const;
