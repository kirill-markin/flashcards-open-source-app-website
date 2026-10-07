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
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "Zobrazit na GitHubu",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Nebo pomocí této URL připojte libovolného AI klienta kompatibilního s MCP:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "Jak Nibomo funguje",
      items: [
        {
          label: "01 · KARTIČKY S AI",
          titleLines: [
            "Řekněte AI, co se chcete naučit.",
          ],
          description: "Popište téma nebo přiložte své poznámky. AI vám pomůže proměnit materiály v kartičky s otázkami a odpověďmi.",
          linkLabel: "Vytvořit kartičky",
          imagePath: "/home/ai-flashcards.png",
          imageAlt: "AI chat Nibomo vytváří kartičky z tématu nebo přiložených poznámek",
        },
        {
          label: "02 · ZAČNĚTE SE UČIT",
          titleLines: [
            "Jedna otázka po druhé.",
          ],
          description: "Otevřete kartičku a zkuste si vybavit odpověď, než ji zobrazíte. Učte se vlastním tempem, jednu kartičku po druhé.",
          linkLabel: "Začít se učit",
          imagePath: "/home/start-learning.png",
          imageAlt: "Opakovací kartička Nibomo s tlačítkem pro zobrazení odpovědi",
        },
        {
          label: "03 · CHYTRÉ OPAKOVÁNÍ",
          titleLines: [
            "Zkontrolujte odpověď.",
            "Ohodnoťte, jak dobře si pamatujete.",
          ],
          description: "Zobrazte odpověď a označte, jak snadno jste si ji vybavili. Nibomo ukazuje obtížné kartičky dříve a známé později.",
          linkLabel: "Opakovat kartičky",
          imagePath: "/home/smart-reviews.png",
          imageAlt: "Kartička Nibomo se zobrazenou odpovědí a hodnocením zapamatování",
        },
        {
          label: "04 · VÁŠ POKROK",
          titleLines: [
            "Proměňte učení v návyk.",
          ],
          description: "Sledujte dny učení v kalendáři a udržujte svou sérii. Každé opakování je dalším krokem k vašemu cíli.",
          linkLabel: "Zobrazit pokrok",
          imagePath: "/home/your-progress.png",
          imageAlt: "Obrazovka pokroku Nibomo s kalendářem série dnů učení a žebříčkem",
        }
      ],
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
            "Pokračujte v opakování na mobilním zařízení bez připojení k internetu. Změny se synchronizují automaticky.",
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
    {
      type: "review_cta",
      titleLines: [
        "Nechte Nibomo naplánovat vaše opakování.",
        "Vy se soustřeďte na učení.",
      ],
      description: "Proměňte to, co se učíte, v kartičky, opakujte ve správný čas a zapamatujte si více.",
    },
  ],
  body: "",
} as const;
