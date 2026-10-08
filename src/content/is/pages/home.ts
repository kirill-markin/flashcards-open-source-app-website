import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - Ókeypis námskortaforrit með spaced repetition, opinn hugbúnaður",
  description:
    "Ókeypis námskort í opnum hugbúnaði: spaced repetition með FSRS, spjaldagerð með hjálp gervigreindar, nám án nettengingar og samstilling, færanlegur útflutningur og eigin hýsing.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Ókeypis og opinn hugbúnaður",
      titleLines: [
        "Búðu til spjöld.",
        "Rifjaðu upp betur.",
        "Mundu meira.",
      ],
      subtitle:
        "Ókeypis námskort í opnum hugbúnaði sem tímasetja hverja upprifjun á réttum tíma, virka án nettengingar og samstillast milli vefsins, iOS og Android. Notaðu gervigreind þegar þú vilt hjálp við að búa til eða bæta spjöld. Nibomo hét áður Flashcards Open Source App.",
      trustLine: "Ekkert kreditkort. Engar auglýsingar. Engin niðurtalning á prufutíma.",
      primaryLink: {
        label: "Byrja núna",
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "Skoða á GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Eða tengdu hvaða gervigreindarbiðlara sem styður MCP með þessari vefslóð:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "Svona virkar Nibomo",
      items: [
        {
          label: "01 · NÁMSKORT MEÐ GERVIGREIND",
          titleLines: [
            "Segðu gervigreindinni hvað þú vilt læra.",
          ],
          description: "Lýstu efni eða hengdu glósurnar þínar við. Gervigreind hjálpar þér að breyta efninu í námskort með spurningum og svörum.",
          linkLabel: "Búa til námskort",
          imagePath: "/home/ai-flashcards-is.png",
          imageAlt: "Gervigreindarspjall Nibomo býr til námskort úr viðfangsefni eða viðhengdum glósum",
        },
        {
          label: "02 · BYRJAÐU AÐ LÆRA",
          titleLines: [
            "Ein spurning í einu.",
          ],
          description: "Opnaðu námskort og reyndu að rifja upp svarið áður en þú birtir það. Lærðu á þínum hraða, eitt kort í einu.",
          linkLabel: "Byrja að læra",
          imagePath: "/home/start-learning-is.png",
          imageAlt: "Upprifjunarkort í Nibomo með hnappi til að birta svarið",
        },
        {
          label: "03 · SNJÖLL UPPRIFJUN",
          titleLines: [
            "Athugaðu svarið þitt.",
            "Metðu hversu vel þú mundir.",
          ],
          description: "Birtu svarið og merktu hversu auðveldlega þú mundir það. Nibomo sýnir erfið kort aftur fyrr og kunnugleg kort síðar.",
          linkLabel: "Rifja upp námskort",
          imagePath: "/home/smart-reviews-is.png",
          imageAlt: "Námskort í Nibomo með sýnilegu svari og valkostum til að meta minni",
        },
        {
          label: "04 · FRAMFARIR ÞÍNAR",
          titleLines: [
            "Gerðu nám að vana.",
          ],
          description: "Sjáðu námsdagana í dagatalinu og haltu námslotunni gangandi. Hver upprifjun er enn eitt skref í átt að markmiðinu þínu.",
          linkLabel: "Skoða framfarir",
          imagePath: "/home/your-progress-is.png",
          imageAlt: "Framfaraskjár Nibomo með dagatali samfelldra námsdaga og stigatöflu",
        }
      ],
    },
    {
      type: "feature_list",
      title: "Eiginleikar",
      intro:
        "Allt sem þú þarft til að búa til gagnleg spjöld, rifja upp á réttum tíma, halda áfram að læra án nettengingar og hafa stjórn á námsgögnunum þínum.",
      items: [
        {
          title: "Betri upprifjun með FSRS",
          description:
            "Rifjaðu upp spjöldin sem eru á dagskrá í dag. FSRS skilar erfiðum spjöldum fyrr til baka og bíður lengur með að sýna þau sem þú kannt.",
        },
        {
          title: "Spjaldagerð með hjálp gervigreindar",
          description:
            "Biddu gervigreindina um hjálp við að búa til spjöld, bæta orðalagið eða skýra svar. Þú ræður alltaf hvað er vistað.",
        },
        {
          title: "Nám án nettengingar með sjálfvirkri samstillingu",
          description:
            "Haltu áfram að rifja upp í farsímanum án nettengingar. Breytingar samstillast sjálfkrafa.",
        },
        {
          title: "Innflutningur, útflutningur og eignarhald á gögnunum",
          description:
            "Færðu námsefnið þitt inn eða út hvenær sem þér hentar. Færanlegur útflutningur inniheldur spjöldin þín, merki og tengda miðla.",
        },
        {
          title: "Virkar með gervigreindarumboðum",
          description:
            "Tengdu þig um MCP eða Agent API svo gervigreindarumboð geti hjálpað til við að búa til, bæta og skipuleggja spjöldin þín.",
        },
        {
          title: "Ókeypis og hægt að hýsa á eigin þjóni",
          description:
            "Notaðu hýstu útgáfuna ókeypis, skoðaðu opna kóðann eða keyrðu forritið á eigin innviðum.",
        },
      ],
    },
    {
      type: "review_cta",
      titleLines: [
        "Leyfðu Nibomo að skipuleggja upprifjunina.",
        "Þú einbeitir þér að náminu.",
      ],
      description: "Breyttu því sem þú lærir í námskort, rifjaðu upp á réttum tíma og mundu meira.",
    },
  ],
  body: "",
} as const;
