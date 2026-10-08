import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - tasuta avatud lähtekoodiga õpikaardid hajutatud kordamisega",
  description:
    "Tasuta avatud lähtekoodiga õpikaardid: FSRS-i hajutatud kordamine, AI abiga kaartide loomine, õppimine võrguühenduseta ja sünkroonimine, teisaldatavad eksportfailid ning ise majutamine.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Tasuta ja avatud lähtekoodiga",
      titleLines: [
        "Loo kaarte.",
        "Korda targemini.",
        "Jäta rohkem meelde.",
      ],
      subtitle:
        "Tasuta õpikaardid, mis ajastavad iga kordamise õigeks hetkeks, töötavad võrguühenduseta ja sünkroonivad veebi, iOS-i ja Androidi vahel. Kasuta AI-d, kui tahad abi kaartide loomisel või parandamisel.",
      trustLine: "Krediitkaarti pole vaja. Reklaame pole. Prooviaja taimerit pole.",
      primaryLink: {
        label: "Alusta",
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "Vaata GitHubis",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Või ühenda selle URL-i kaudu mis tahes MCP-d toetav AI-klient:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "Kuidas Nibomo töötab",
      items: [
        {
          label: "01 · TEHISINTELLEKTIGA ÕPIKAARDID",
          titleLines: [
            "Ütle tehisintellektile, mida tahad õppida.",
          ],
          description: "Kirjelda teemat või lisa oma märkmed. Tehisintellekt aitab muuta materjali küsimuste ja vastustega õpikaartideks.",
          linkLabel: "Loo õpikaardid",
          imagePath: "/home/ai-flashcards-et.png",
          imageAlt: "Nibomo tehisintellekti vestlus loob õpikaarte teemast või lisatud märkmetest",
        },
        {
          label: "02 · ALUSTA ÕPPIMIST",
          titleLines: [
            "Üks küsimus korraga.",
          ],
          description: "Ava õpikaart ja proovi vastust meenutada, enne kui seda näitad. Õpi omas tempos, üks kaart korraga.",
          linkLabel: "Alusta õppimist",
          imagePath: "/home/start-learning-et.png",
          imageAlt: "Nibomo kordamiskaart vastuse kuvamise nupuga",
        },
        {
          label: "03 · NUTIKAS KORDAMINE",
          titleLines: [
            "Kontrolli vastust.",
            "Hinda, kui hästi mäletad.",
          ],
          description: "Näita vastust ja märgi, kui kergesti see meelde tuli. Nibomo näitab raskeid kaarte uuesti varem ja tuttavaid hiljem.",
          linkLabel: "Korda õpikaarte",
          imagePath: "/home/smart-reviews-et.png",
          imageAlt: "Nibomo õpikaart nähtava vastuse ja meenutamise hindamise valikutega",
        },
        {
          label: "04 · SINU EDUSAMMUD",
          titleLines: [
            "Muuda õppimine harjumuseks.",
          ],
          description: "Vaata oma õppepäevi kalendris ja hoia järjestikuste õppepäevade seeriat. Iga kordamine on uus samm sinu eesmärgi poole.",
          linkLabel: "Vaata edusamme",
          imagePath: "/home/your-progress-et.png",
          imageAlt: "Nibomo edusammude vaade järjestikuste õppepäevade kalendri ja edetabeliga",
        }
      ],
    },
    {
      type: "feature_list",
      title: "Funktsioonid",
      intro:
        "Kõik, mida vajad kasulike kaartide loomiseks, õigel ajal kordamiseks, võrguühenduseta õppimiseks ja oma õppeandmete üle kontrolli hoidmiseks.",
      items: [
        {
          title: "Targemad kordamised FSRS-iga",
          description:
            "Korda kaarte, mille tähtaeg on täna. FSRS toob rasked kaardid varem tagasi ja ootab kauem, enne kui näitab tuttavaid uuesti.",
        },
        {
          title: "AI abiga kaartide loomine",
          description:
            "Palu AI-lt abi kaartide loomisel, sõnastuse parandamisel või vastuse selgemaks muutmisel. Sina otsustad, mis salvestatakse.",
        },
        {
          title: "Õppimine võrguühenduseta ja automaatne sünkroonimine",
          description:
            "Jätka kordamist mobiiliseadmes ilma internetiühenduseta. Muudatused sünkroonitakse automaatselt.",
        },
        {
          title: "Impordi, ekspordi ja oma andmed enda käes",
          description:
            "Liiguta oma õppematerjale sisse või välja siis, kui soovid. Eksportfailid sisaldavad sinu kaarte, silte ja nendega seotud meediat.",
        },
        {
          title: "Töötab AI-agentidega",
          description:
            "Ühenda MCP või Agent API kaudu, et AI-agendid saaksid aidata kaarte luua, parandada ja korrastada.",
        },
        {
          title: "Tasuta ja ise majutatav",
          description:
            "Kasuta majutatud rakendust tasuta, uuri avatud lähtekoodi või käivita see oma taristus.",
        },
      ],
    },
    {
      type: "review_cta",
      titleLines: [
        "Lase Nibomol kordamised planeerida.",
        "Sina keskendu õppimisele.",
      ],
      description: "Muuda õpitav õpikaartideks, korda õigel ajal ja jäta rohkem meelde.",
    },
  ],
  body: "",
} as const;
