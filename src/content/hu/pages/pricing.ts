import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Ingyenes kezdés. Több AI a Premiummal.",
  description:
    "Kezdd ingyen a felhős alkalmazással, válts Premiumra havi 6.99 USD-ért több AI-csevegésért, vagy üzemeltesd a nyílt forráskódú rendszert a saját AWS-infrastruktúrádon.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Ingyenes kezdés. Több AI a Premiummal.",
      intro:
        "Kezdd ingyen a felhős alkalmazással bankkártya nélkül, fizess elő a Premiumra több AI-csevegésért, vagy üzemeltesd ingyen a nyílt forráskódú rendszert a saját AWS-infrastruktúrádon.",
      tiers: [
        {
          type: "auth_tier",
          name: "Ingyenes",
          price: "Ingyenes",
          highlighted: true,
          bullets: [
            "Havi 50 üzenet az AI-csevegésben",
            "Használd a saját OpenAI API-kulcsodat; az ezzel járó használat nem számít bele a havi keretbe",
            "A szinkronizálás a web, az iOS és az Android között benne van",
            "Nincs csomagalapú korlát a kártyákra, a fájlokra vagy a teljes tárhelyre; a szokásos fájlonkénti és műveletenkénti technikai korlátok érvényesek",
            "Kártyák, címkék és média importálása és exportálása a felhős és a saját üzemeltetésű telepítések között",
            "Jelszó nélküli bejelentkezés egyszer használatos e-mailes kóddal",
          ],
          cta: {
            label: "Használd ingyen a felhős alkalmazást",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "$6.99/hó",
          highlighted: false,
          bullets: [
            "7 napos ingyenes próbaidőszak a jogosult új előfizetőknek; fizetési mód megadása szükséges",
            "Havi 1000 üzenet az AI-csevegésben",
            "Egyéni kiemelőszínek",
            "Minden, ami az Ingyenes csomagban benne van",
            "Egyetlen előfizetés a fiókodhoz a weben, iOS-en és Androidon",
            "USD-ben megadott ár, az adókkal együtt; fizetéskor helyi pénznemben is megjelenhet az ár",
            "Havonta megújul; bármikor lemondhatod, és a hozzáférésed az időszak végéig megmarad",
          ],
          cta: {
            label: "7 napos ingyenes próbaidőszak indítása",
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
