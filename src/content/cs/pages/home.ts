import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - Bezplatné kartičky s rozloženým opakováním a otevřeným zdrojovým kódem",
  description:
    "Bezplatné kartičky s otevřeným zdrojovým kódem: rozložené opakování FSRS, tvorba kartiček s pomocí AI, učení offline se synchronizací, přenositelné exporty a vlastní hostování.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Zdarma a s otevřeným zdrojovým kódem",
      titleLines: [
        "Vytvářejte kartičky.",
        "Opakujte chytřeji.",
        "Zapamatujte si víc.",
      ],
      subtitle:
        "Bezplatné kartičky s otevřeným zdrojovým kódem, které naplánují každé opakování na správný čas, fungují offline a synchronizují se mezi webem, iOS a Androidem. Když chcete pomoct s tvorbou nebo vylepšením kartiček, využijte AI. Nibomo se dříve jmenovalo Flashcards Open Source App.",
      trustLine: "Žádná platební karta. Žádné reklamy. Žádné odpočítávání zkušební verze.",
      primaryLink: {
        label: "Začít",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "Zobrazit na GitHubu",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Přidejte tento MCP server do svého AI klienta:",
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
      title: "Funkce",
      intro:
        "Vše, co potřebujete k tvorbě užitečných kartiček, opakování ve správný čas, učení offline a udržení kontroly nad svými studijními daty.",
      items: [
        {
          title: "Chytřejší opakování díky FSRS",
          description:
            "Opakujte kartičky, které jsou dnes na řadě. FSRS vrací obtížné kartičky dřív a u těch známých čeká déle, než je ukáže znovu.",
        },
        {
          title: "Tvorba kartiček s pomocí AI",
          description:
            "Požádejte AI o pomoc s vytvořením kartiček, vylepšením jejich formulace nebo upřesněním odpovědi. Co se uloží, rozhodujete vy.",
        },
        {
          title: "Učení offline s automatickou synchronizací",
          description:
            "Opakujte na mobilu i bez připojení k internetu. Změny se synchronizují automaticky, takže můžete pokračovat na webu, iOS nebo Androidu.",
        },
        {
          title: "Import, export a vlastnictví vašich dat",
          description:
            "Své studijní materiály přesunete dovnitř i ven, kdykoli chcete. Přenositelné exporty obsahují kartičky, štítky i související média.",
        },
        {
          title: "Spolupráce s AI agenty",
          description:
            "Připojte se přes MCP nebo Agent API, aby vám AI agenti pomohli kartičky vytvářet, vylepšovat a organizovat.",
        },
        {
          title: "Zdarma a s možností vlastního hostování",
          description:
            "Používejte hostovanou aplikaci zdarma, prohlédněte si otevřený zdrojový kód nebo ji spusťte na vlastní infrastruktuře.",
        },
      ],
    },
  ],
  body: "",
} as const;
