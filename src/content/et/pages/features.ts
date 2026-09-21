import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "Nibomo funktsioonid",
  description:
    "Tutvu tasuta avatud lähtekoodiga õpikaartidega: FSRS-i hajutatud kordamine, AI abiga kaartide loomine, õppimine võrguühenduseta ja sünkroonimine, teisaldatavad eksportfailid ning ise majutamine.",
  slug: "features",
  sections: [
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
