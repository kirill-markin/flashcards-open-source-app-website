import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "Nibomo funkciók",
  description:
    "Fedezd fel az ingyenes, nyílt forráskódú tanulókártyákat FSRS szakaszos ismétléssel, AI-támogatott kártyakészítéssel, offline tanulással és szinkronizálással, hordozható exportokkal és saját üzemeltetéssel.",
  slug: "features",
  sections: [
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
