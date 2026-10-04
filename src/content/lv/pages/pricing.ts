import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Sāc bez maksas. Vairāk MI ar Premium.",
  description:
    "Sāc bez maksas mitinātajā lietotnē, pārej uz Premium par USD 6.99/mēnesī, lai iegūtu vairāk MI sarunu, vai darbini atvērtā pirmkoda sistēmu savā AWS infrastruktūrā.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Sāc bez maksas. Vairāk MI ar Premium.",
      intro:
        "Sāc lietot mitināto lietotni bez maksas un bez kredītkartes, pievieno Premium, lai iegūtu vairāk MI sarunu, vai bez maksas darbini atvērtā pirmkoda sistēmu savā AWS infrastruktūrā.",
      tiers: [
        {
          type: "auth_tier",
          name: "Bezmaksas",
          price: "Bez maksas",
          highlighted: true,
          bullets: [
            "50 MI sarunu ziņu mēnesī",
            "Izmanto savu OpenAI API atslēgu; tās lietojums netiek ieskaitīts mēneša limitā",
            "Sinhronizācija starp tīmekli, iOS un Android ir iekļauta",
            "Nav plāna kvotu kartītēm, failiem vai kopējai krātuvei; spēkā ir parastie tehniskie ierobežojumi vienam failam un vienai darbībai",
            "Kartīšu, birku un multivides imports un eksports starp mitināto un savā serverī darbināto instalāciju",
            "Pieteikšanās bez paroles ar vienreizēju kodu e-pastā",
          ],
          cta: {
            label: "Lietot mitināto lietotni bez maksas",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "$6.99/mēnesī",
          highlighted: false,
          bullets: [
            "7 dienu bezmaksas izmēģinājums jauniem abonentiem, kas atbilst nosacījumiem; nepieciešams maksāšanas veids",
            "1000 MI sarunu ziņu mēnesī",
            "Pielāgotas akcenta krāsas",
            "Viss, kas ir plānā „Bezmaksas“",
            "Viens abonements tavam kontam tīmeklī, iOS un Android",
            "Cena ASV dolāros ar iekļautiem nodokļiem; norēķinoties var tikt parādīta cena vietējā valūtā",
            "Abonements tiek atjaunots katru mēnesi; atcel jebkurā laikā, un piekļuve saglabājas līdz perioda beigām",
          ],
          cta: {
            label: "Izmēģini 7 dienas bez maksas",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "link_tier",
          name: "Savā serverī",
          price: "Bez maksas",
          highlighted: false,
          bullets: [
            "Atvērtā pirmkoda lietotne un AWS CDK infrastruktūra",
            "Pilns izvietošanas ceļš AWS un lokāla Docker/Postgres izstrādes vide",
            "Infrastruktūru, e-pastu, uzraudzību un MI piekļuves datus nodrošini un uztur pats",
            "Infrastruktūras un trešo pušu pakalpojumu izmaksas sedz pats",
            "Kartīšu, birku un multivides imports un eksports starp mitināto un savā serverī darbināto instalāciju",
          ],
          cta: {
            label: "Darbini savā serverī no GitHub",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
