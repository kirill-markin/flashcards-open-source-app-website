import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - Ingyenes, nyílt forráskódú szakaszos ismétléses tanulókártya-alkalmazás",
  description:
    "Ingyenes, nyílt forráskódú tanulókártyák FSRS szakaszos ismétléssel, AI-támogatott kártyakészítéssel, offline tanulással és szinkronizálással, hordozható exportokkal és saját üzemeltetéssel.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Ingyenes és nyílt forráskódú",
      titleLines: [
        "Készíts kártyákat.",
        "Ismételj okosabban.",
        "Jegyezz meg többet.",
      ],
      subtitle:
        "Ingyenes, nyílt forráskódú tanulókártyák, amelyek minden ismétlést a megfelelő időre ütemeznek, offline is működnek, és szinkronizálnak a weben, iOS-en és Androidon. Használd az AI-t, ha segítség kell a kártyák elkészítéséhez vagy javításához. A Nibomo korábbi neve Flashcards Open Source App volt.",
      trustLine: "Nincs bankkártya. Nincsenek hirdetések. Nincs lejáró próbaidő.",
      primaryLink: {
        label: "Kezdés",
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "Megtekintés a GitHubon",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Add hozzá ezt az MCP-szervert az AI-kliensedhez:",
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
      title: "Funkciók",
      intro:
        "Minden, ami a hasznos kártyák elkészítéséhez, a megfelelő időben végzett ismétléshez, az offline tanuláshoz és a tanulási adataid feletti kontrollhoz kell.",
      items: [
        {
          title: "Okosabb ismétlés az FSRS-sel",
          description:
            "Ismételd a ma esedékes kártyákat. Az FSRS hamarabb hozza vissza a nehéz kártyákat, és tovább vár, mielőtt újra megmutatja az ismerősöket.",
        },
        {
          title: "AI-támogatott kártyakészítés",
          description:
            "Kérd az AI segítségét a kártyák elkészítéséhez, a megfogalmazás javításához vagy egy válasz pontosításához. Te döntöd el, mi kerül mentésre.",
        },
        {
          title: "Offline tanulás automatikus szinkronizálással",
          description:
            "Ismételj a mobilodon internetkapcsolat nélkül is. A változások automatikusan szinkronizálódnak, így folytathatod a weben, iOS-en vagy Androidon.",
        },
        {
          title: "Importálás, exportálás és a saját adataid",
          description:
            "Mozgasd a tanulási anyagaidat be vagy ki, amikor csak akarod. A hordozható exportok tartalmazzák a kártyáidat, a címkéidet és a kapcsolódó médiát.",
        },
        {
          title: "Együttműködik az AI-ügynökökkel",
          description:
            "Csatlakozz MCP-n vagy az Agent API-n keresztül, hogy az AI-ügynökök segítsenek a kártyáid létrehozásában, javításában és rendszerezésében.",
        },
        {
          title: "Ingyenes és saját szerveren futtatható",
          description:
            "Használd ingyen a felhős alkalmazást, nézd át a nyílt forráskódot, vagy futtasd a saját infrastruktúrádon.",
        },
      ],
    },
  ],
  body: "",
} as const;
