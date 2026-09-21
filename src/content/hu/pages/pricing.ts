import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Ingyenes használat. Ingyenes saját üzemeltetés.",
  description:
    "Használd ingyen a felhős alkalmazást, amelyben a béta alatt az AI és a szinkronizálás is benne van, vagy üzemeltesd a nyílt forráskódú rendszert a saját AWS-infrastruktúrádon.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Ingyenes használat. Ingyenes saját üzemeltetés.",
      intro:
        "Használd ingyen a felhős alkalmazást bankkártya nélkül, vagy futtasd a nyílt forráskódú rendszert a saját AWS-infrastruktúrádon.",
      tiers: [
        {
          type: "auth_tier",
          name: "Felhős",
          price: "Ingyenes",
          highlighted: true,
          bullets: [
            "Az AI-funkciók a béta alatt benne vannak",
            "A szinkronizálás a web, az iOS és az Android között benne van",
            "A béta alatt nincs csomagalapú korlát a kártyákra, a fájlokra vagy a teljes tárhelyre; a szokásos fájlonkénti és műveletenkénti technikai korlátok érvényesek",
            "Kártyák, címkék és média importálása és exportálása a felhős és a saját üzemeltetésű telepítések között",
            "Jelszó nélküli bejelentkezés egyszer használatos e-mailes kóddal",
            "Az alapvető kártyakészítés és ismétlés ingyenes marad; a nagyobb AI-használathoz később saját szolgáltatói API-kulcs vagy fizetős opció kellhet",
          ],
          cta: {
            label: "Használd ingyen a felhős alkalmazást",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "link_tier",
          name: "Saját üzemeltetésű",
          price: "Ingyenes",
          highlighted: false,
          bullets: [
            "Nyílt forráskódú alkalmazás és AWS CDK infrastruktúra",
            "Teljes AWS-telepítési útvonal, valamint helyi Docker/Postgres fejlesztői környezet",
            "Az infrastruktúrát, az e-mailt, a monitorozást és az AI-hozzáféréseket te biztosítod és tartod karban",
            "Az infrastruktúra és a külső szolgáltatók költségeit te fizeted",
            "Kártyák, címkék és média importálása és exportálása a felhős és a saját üzemeltetésű telepítések között",
          ],
          cta: {
            label: "Saját üzemeltetés a GitHubról",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
