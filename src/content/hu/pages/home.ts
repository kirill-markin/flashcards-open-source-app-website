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
        "Ingyenes tanulókártyák, amelyek minden ismétlést a megfelelő időre ütemeznek, offline is működnek, és szinkronizálnak a weben, iOS-en és Androidon. Használd az AI-t, ha segítség kell a kártyák elkészítéséhez vagy javításához.",
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
          caption: "Vagy csatlakoztass bármilyen MCP-kompatibilis AI-klienst ezzel az URL-lel:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "Így működik a Nibomo",
      items: [
        {
          label: "01 · TANULÓKÁRTYÁK MI-VEL",
          titleLines: [
            "Mondd el az MI-nek, mit szeretnél tanulni.",
          ],
          description: "Írj le egy témát, vagy csatold a jegyzeteidet. Az MI segít kérdéseket és válaszokat tartalmazó tanulókártyákká alakítani az anyagodat.",
          linkLabel: "Tanulókártyák készítése",
          imagePath: "/home/ai-flashcards-hu.png",
          imageAlt: "A Nibomo MI-csevegése tanulókártyákat készít egy témából vagy csatolt jegyzetekből",
        },
        {
          label: "02 · KEZDJ TANULNI",
          titleLines: [
            "Egyszerre egy kérdés.",
          ],
          description: "Nyiss meg egy tanulókártyát, és próbáld felidézni a választ, mielőtt megjeleníted. Tanulj a saját tempódban, kártyáról kártyára.",
          linkLabel: "Tanulás indítása",
          imagePath: "/home/start-learning-hu.png",
          imageAlt: "Nibomo-ismétlőkártya a válasz megjelenítésére szolgáló gombbal",
        },
        {
          label: "03 · OKOS ISMÉTLÉS",
          titleLines: [
            "Ellenőrizd a válaszod.",
            "Értékeld, mennyire emlékeztél.",
          ],
          description: "Jelenítsd meg a választ, és jelöld, milyen könnyen idézted fel. A Nibomo a nehéz kártyákat hamarabb, az ismerőseket később mutatja újra.",
          linkLabel: "Tanulókártyák ismétlése",
          imagePath: "/home/smart-reviews-hu.png",
          imageAlt: "Nibomo-kártya a megjelenített válasszal és a felidézés értékelési lehetőségeivel",
        },
        {
          label: "04 · A HALADÁSOD",
          titleLines: [
            "Tedd szokássá a tanulást.",
          ],
          description: "Nézd meg a tanulási napokat a naptárban, és tartsd fenn a sorozatodat. Minden ismétlés újabb lépés a célod felé.",
          linkLabel: "Haladás megtekintése",
          imagePath: "/home/your-progress-hu.png",
          imageAlt: "A Nibomo haladási képernyője tanulási sorozatot mutató naptárral és ranglistával",
        }
      ],
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
            "Folytasd az ismétlést a mobileszközödön internetkapcsolat nélkül is. A módosítások automatikusan szinkronizálódnak.",
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
    {
      type: "review_cta",
      titleLines: [
        "Bízd a Nibomóra az ismétlések tervezését.",
        "Te koncentrálj a tanulásra.",
      ],
      description: "Alakítsd tanulókártyákká, amit tanulsz, ismételj a megfelelő időben, és jegyezz meg többet.",
    },
  ],
  body: "",
} as const;
