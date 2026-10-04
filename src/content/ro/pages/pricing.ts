import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Începe gratuit. Mai mult AI cu Premium.",
  description:
    "Începe gratuit în aplicația găzduită, treci la Premium pentru USD 6.99/lună ca să ai mai mult chat AI sau găzduiește singur stiva open source pe propria infrastructură AWS.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Începe gratuit. Mai mult AI cu Premium.",
      intro:
        "Începe gratuit în aplicația găzduită, fără card de credit, adaugă Premium pentru mai mult chat AI sau rulează gratuit stiva open source pe propria infrastructură AWS.",
      tiers: [
        {
          type: "auth_tier",
          name: "Gratuit",
          price: "Gratuit",
          highlighted: true,
          bullets: [
            "50 de mesaje în chatul AI pe lună",
            "Folosește propria cheie OpenAI API; utilizarea ei nu se scade din limita lunară",
            "Sincronizare între web, iOS și Android inclusă",
            "Fără cote în funcție de plan pentru fișe, fișiere sau spațiu total; se aplică limitele tehnice obișnuite per fișier și per operațiune",
            "Importă și exportă fișe, etichete și fișiere media între instalările găzduite și cele proprii",
            "Autentificare fără parolă, cu un cod unic trimis pe e-mail",
          ],
          cta: {
            label: "Folosește gratuit aplicația găzduită",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "$6.99/lună",
          highlighted: false,
          bullets: [
            "Perioadă de probă gratuită de 7 zile pentru abonații noi eligibili; este necesară o metodă de plată",
            "1000 de mesaje în chatul AI pe lună",
            "Culori de accent personalizate",
            "Tot ce include planul Gratuit",
            "Un singur abonament pentru contul tău pe web, iOS și Android",
            "Preț în USD, cu taxele incluse; la plată poate apărea un preț în moneda locală",
            "Se reînnoiește lunar; anulezi oricând și păstrezi accesul până la sfârșitul perioadei",
          ],
          cta: {
            label: "Încearcă gratuit 7 zile",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "link_tier",
          name: "Găzduire proprie",
          price: "Gratuit",
          highlighted: false,
          bullets: [
            "Aplicație open source și infrastructură AWS CDK",
            "Traseu complet de implementare pe AWS, plus o configurare locală de dezvoltare cu Docker/Postgres",
            "Tu asiguri și întreții infrastructura, e-mailul, monitorizarea și credențialele AI",
            "Tu plătești costurile de infrastructură și pe cele ale furnizorilor terți",
            "Importă și exportă fișe, etichete și fișiere media între instalările găzduite și cele proprii",
          ],
          cta: {
            label: "Găzduiește singur din GitHub",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
