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
        "Tasuta avatud lähtekoodiga õpikaardid, mis ajastavad iga kordamise õigeks hetkeks, töötavad võrguühenduseta ja sünkroonivad veebi, iOS-i ja Androidi vahel. Kasuta AI-d, kui tahad abi kaartide loomisel või parandamisel. Nibomo varasem nimi oli Flashcards Open Source App.",
      trustLine: "Krediitkaarti pole vaja. Reklaame pole. Prooviaja taimerit pole.",
      primaryLink: {
        label: "Alusta",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "Vaata GitHubis",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Lisa see MCP-server oma AI-kliendile:",
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
            "Jätka kordamist mobiilis ka ilma internetiühenduseta. Muudatused sünkroonitakse automaatselt, nii et saad jätkata veebis, iOS-is või Androidis.",
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
  ],
  body: "",
} as const;
