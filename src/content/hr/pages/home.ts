import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - Besplatna aplikacija otvorenog koda za kartice s razmaknutim ponavljanjem",
  description:
    "Besplatne kartice za učenje otvorenog koda: FSRS razmaknuto ponavljanje, izrada kartica uz AI, učenje offline uz sinkronizaciju, prenosivi izvozi i vlastito hostiranje.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Besplatno i otvorenog koda",
      titleLines: [
        "Izradite kartice.",
        "Ponavljajte pametnije.",
        "Zapamtite više.",
      ],
      subtitle:
        "Besplatne kartice za učenje otvorenog koda koje svako ponavljanje zakazuju za pravi trenutak, rade offline i sinkroniziraju se između weba, iOS-a i Androida. Kad vam treba pomoć pri izradi ili doradi kartica, uključite AI. Nibomo se prije zvao Flashcards Open Source App.",
      trustLine: "Bez kreditne kartice. Bez oglasa. Bez odbrojavanja probnog razdoblja.",
      primaryLink: {
        label: "Započnite",
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "Pogledajte na GitHubu",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Dodajte ovaj MCP poslužitelj u svoj AI klijent:",
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
      title: "Značajke",
      intro:
        "Sve što vam treba da izradite korisne kartice, ponavljate u pravo vrijeme, nastavite učiti offline i zadržite kontrolu nad svojim podacima o učenju.",
      items: [
        {
          title: "Pametnije ponavljanje uz FSRS",
          description:
            "Ponavljajte kartice koje su danas na redu. FSRS teške kartice vraća ranije, a one koje dobro znate pokazuje ponovno tek nakon duljeg vremena.",
        },
        {
          title: "Izrada kartica uz AI",
          description:
            "Neka vam AI pomogne izraditi kartice, dotjerati formulacije ili pojasniti odgovor. Vi odlučujete što će se spremiti.",
        },
        {
          title: "Učenje offline uz automatsku sinkronizaciju",
          description:
            "Ponavljajte na mobitelu i bez internetske veze. Promjene se sinkroniziraju automatski pa možete nastaviti na webu, iOS-u ili Androidu.",
        },
        {
          title: "Uvoz, izvoz i vlasništvo nad podacima",
          description:
            "Materijale za učenje uvezite ili izvezite kad god želite. Prenosivi izvozi sadrže vaše kartice, oznake i pripadajuće medijske datoteke.",
        },
        {
          title: "Radi s AI agentima",
          description:
            "Povežite se preko MCP-a ili Agent API-ja kako bi vam AI agenti pomogli izraditi, poboljšati i organizirati kartice.",
        },
        {
          title: "Besplatno, uz mogućnost vlastitog hostiranja",
          description:
            "Koristite hostiranu aplikaciju besplatno, pregledajte otvoreni kod ili je pokrenite na vlastitoj infrastrukturi.",
        },
      ],
    },
  ],
  body: "",
} as const;
