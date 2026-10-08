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
        "Besplatne kartice za učenje koje svako ponavljanje zakazuju za pravi trenutak, rade offline i sinkroniziraju se između weba, iOS-a i Androida. Kad vam treba pomoć pri izradi ili doradi kartica, uključite AI.",
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
          caption: "Ili povežite bilo koji AI klijent koji podržava MCP putem ovog URL-a:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "Kako Nibomo radi",
      items: [
        {
          label: "01 · KARTICE ZA UČENJE UZ AI",
          titleLines: [
            "Recite AI-ju što želite naučiti.",
          ],
          description: "Opišite temu ili priložite svoje bilješke. AI pomaže pretvoriti vaš materijal u kartice za učenje s pitanjima i odgovorima.",
          linkLabel: "Izradite kartice",
          imagePath: "/home/ai-flashcards-hr.png",
          imageAlt: "AI razgovor u Nibomu izrađuje kartice iz teme ili priloženih bilježaka",
        },
        {
          label: "02 · POČNITE UČITI",
          titleLines: [
            "Jedno pitanje odjednom.",
          ],
          description: "Otvorite karticu i pokušajte se prisjetiti odgovora prije nego što ga prikažete. Učite vlastitim tempom, jednu karticu odjednom.",
          linkLabel: "Počnite učiti",
          imagePath: "/home/start-learning-hr.png",
          imageAlt: "Kartica za ponavljanje u Nibomu s gumbom za prikaz odgovora",
        },
        {
          label: "03 · PAMETNO PONAVLJANJE",
          titleLines: [
            "Provjerite odgovor.",
            "Ocijenite koliko ste zapamtili.",
          ],
          description: "Prikažite odgovor i označite koliko ste ga se lako prisjetili. Nibomo teške kartice ponovno prikazuje ranije, a poznate kasnije.",
          linkLabel: "Ponovite kartice",
          imagePath: "/home/smart-reviews-hr.png",
          imageAlt: "Kartica Nibomo s prikazanim odgovorom i mogućnostima procjene prisjećanja",
        },
        {
          label: "04 · VAŠ NAPREDAK",
          titleLines: [
            "Pretvorite učenje u naviku.",
          ],
          description: "Pratite dane učenja u kalendaru i održavajte niz. Svako ponavljanje još je jedan korak prema vašem cilju.",
          linkLabel: "Pogledajte napredak",
          imagePath: "/home/your-progress-hr.png",
          imageAlt: "Prikaz napretka u Nibomu s kalendarom uzastopnih dana učenja i ljestvicom",
        }
      ],
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
            "Nastavite ponavljati na mobilnom uređaju bez internetske veze. Promjene se automatski sinkroniziraju.",
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
    {
      type: "review_cta",
      titleLines: [
        "Prepustite Nibomu planiranje ponavljanja.",
        "Vi se usredotočite na učenje.",
      ],
      description: "Pretvorite ono što učite u kartice, ponavljajte u pravo vrijeme i zapamtite više.",
    },
  ],
  body: "",
} as const;
