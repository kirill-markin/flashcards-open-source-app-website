import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Začnite brezplačno. Premium za več AI.",
  description:
    "Začnite brezplačno v gostovani aplikaciji, za več klepeta z AI preidite na Premium za USD 6.99 na mesec ali pa odprtokodni sistem gostite na lastni infrastrukturi AWS.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Začnite brezplačno. Premium za več AI.",
      intro:
        "Gostovano aplikacijo začnite uporabljati brezplačno in brez kreditne kartice, za več klepeta z AI dodajte Premium ali pa odprtokodni sistem brezplačno gostite na lastni infrastrukturi AWS.",
      tiers: [
        {
          type: "auth_tier",
          name: "Brezplačno",
          price: "Brezplačno",
          highlighted: true,
          bullets: [
            "50 sporočil v klepetu z AI na mesec",
            "Uporabite lasten ključ OpenAI API; njegova poraba se ne šteje v mesečno omejitev",
            "Vključena sinhronizacija med spletom, iOS-om in Androidom",
            "Ni omejitev paketa glede števila kartic, datotek ali skupne shrambe; veljajo običajne tehnične omejitve na datoteko in na operacijo",
            "Uvoz in izvoz kartic, oznak in predstavnosti med gostovano namestitvijo in namestitvijo na lastnem strežniku",
            "Prijava brez gesla z enkratno kodo po e-pošti",
          ],
          cta: {
            label: "Brezplačno uporabite gostovano aplikacijo",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "$6.99/mesec",
          highlighted: false,
          bullets: [
            "7-dnevno brezplačno preizkusno obdobje za upravičene nove naročnike; potreben je način plačila",
            "1000 sporočil v klepetu z AI na mesec",
            "Barve poudarka po meri",
            "Vse iz brezplačnega paketa",
            "Ena naročnina za vaš račun v spletu, iOS-u in Androidu",
            "Cena v USD z vključenimi davki; ob plačilu je lahko prikazana cena v lokalni valuti",
            "Naročnina se obnavlja mesečno; prekličete jo lahko kadar koli, dostop pa ohranite do konca obdobja",
          ],
          cta: {
            label: "Začnite 7-dnevno brezplačno preizkusno obdobje",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "link_tier",
          name: "Lastno gostovanje",
          price: "Brezplačno",
          highlighted: false,
          bullets: [
            "Odprtokodna aplikacija in infrastruktura AWS CDK",
            "Celotna pot za namestitev na AWS in lokalno razvojno okolje z Dockerjem in Postgresom",
            "Infrastrukturo, e-pošto, nadzor in poverilnice za AI zagotavljate in vzdržujete sami",
            "Stroške infrastrukture in zunanjih ponudnikov krijete sami",
            "Uvoz in izvoz kartic, oznak in predstavnosti med gostovano namestitvijo in namestitvijo na lastnem strežniku",
          ],
          cta: {
            label: "Namestite na lasten strežnik z GitHuba",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
