import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - Darmowe fiszki open source z powtórkami rozłożonymi w czasie",
  description:
    "Darmowe fiszki open source z powtórkami FSRS, tworzeniem kart przy wsparciu AI, nauką offline i synchronizacją, przenośnym eksportem i self-hostingiem.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Darmowe i open source",
      titleLines: [
        "Twórz karty.",
        "Powtarzaj mądrzej.",
        "Zapamiętuj więcej.",
      ],
      subtitle:
        "Darmowe fiszki, które planują każdą powtórkę na właściwy moment, działają offline i synchronizują się między wersją webową, iOS i Androidem. Skorzystaj z AI, gdy chcesz pomocy przy tworzeniu lub poprawianiu kart.",
      trustLine: "Bez karty kredytowej. Bez reklam. Bez odliczania okresu próbnego.",
      primaryLink: {
        label: "Zacznij teraz",
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "Zobacz na GitHubie",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Lub połącz dowolnego klienta AI zgodnego z MCP za pomocą tego adresu URL:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "Jak działa Nibomo",
      items: [
        {
          label: "01 · FISZKI Z AI",
          titleLines: [
            "Powiedz AI, czego chcesz się nauczyć.",
          ],
          description: "Opisz temat lub dołącz notatki. AI pomoże zamienić Twoje materiały w fiszki z pytaniami i odpowiedziami.",
          linkLabel: "Twórz fiszki",
          imagePath: "/home/ai-flashcards-pl.png",
          imageAlt: "Czat AI w Nibomo tworzący fiszki z tematu lub załączonych notatek",
        },
        {
          label: "02 · ZACZNIJ NAUKĘ",
          titleLines: [
            "Jedno pytanie na raz.",
          ],
          description: "Otwórz fiszkę i spróbuj przypomnieć sobie odpowiedź, zanim ją wyświetlisz. Ucz się w swoim tempie, po jednej fiszce.",
          linkLabel: "Zacznij naukę",
          imagePath: "/home/start-learning-pl.png",
          imageAlt: "Fiszka do powtórek w Nibomo z przyciskiem wyświetlania odpowiedzi",
        },
        {
          label: "03 · INTELIGENTNE POWTÓRKI",
          titleLines: [
            "Sprawdź odpowiedź.",
            "Oceń, jak dobrze pamiętasz.",
          ],
          description: "Wyświetl odpowiedź i zaznacz, jak łatwo udało Ci się ją przypomnieć. Nibomo pokazuje trudne fiszki wcześniej, a znajome później.",
          linkLabel: "Powtarzaj fiszki",
          imagePath: "/home/smart-reviews-pl.png",
          imageAlt: "Fiszka Nibomo z widoczną odpowiedzią i ocenami zapamiętania",
        },
        {
          label: "04 · TWOJE POSTĘPY",
          titleLines: [
            "Zamień naukę w nawyk.",
          ],
          description: "Zobacz dni nauki w kalendarzu i utrzymuj serię. Każda powtórka to kolejny krok do Twojego celu.",
          linkLabel: "Zobacz postępy",
          imagePath: "/home/your-progress-pl.png",
          imageAlt: "Ekran postępów Nibomo z kalendarzem serii dni nauki i rankingiem",
        }
      ],
    },
    {
      type: "feature_list",
      title: "Funkcje",
      intro:
        "Wszystko, czego potrzebujesz, aby tworzyć przydatne karty, powtarzać je w odpowiednim momencie, uczyć się offline i zachować kontrolę nad swoimi danymi.",
      items: [
        {
          title: "Mądrzejsze powtórki dzięki FSRS",
          description:
            "Powtarzaj karty zaplanowane na dziś. FSRS przywraca trudne karty szybciej, a ze znanymi czeka dłużej.",
        },
        {
          title: "Tworzenie kart ze wsparciem AI",
          description:
            "Poproś AI o pomoc w tworzeniu kart, poprawieniu sformułowań lub doprecyzowaniu odpowiedzi. To Ty decydujesz, co zostanie zapisane.",
        },
        {
          title: "Nauka offline z automatyczną synchronizacją",
          description:
            "Powtarzaj na urządzeniu mobilnym bez połączenia z internetem. Zmiany synchronizują się automatycznie.",
        },
        {
          title: "Import, eksport i kontrola nad danymi",
          description:
            "Przenoś swoje materiały do aplikacji i z powrotem, kiedy chcesz. Przenośne eksporty zawierają karty, tagi i powiązane media.",
        },
        {
          title: "Działa z agentami AI",
          description:
            "Podłącz się przez MCP lub Agent API, aby agenci AI pomagali tworzyć, ulepszać i porządkować Twoje karty.",
        },
        {
          title: "Darmowe i gotowe do self-hostingu",
          description:
            "Korzystaj z hostowanej aplikacji za darmo, przejrzyj kod open source lub uruchom ją na własnej infrastrukturze.",
        },
      ],
    },
    {
      type: "review_cta",
      titleLines: [
        "Niech Nibomo zaplanuje Twoje powtórki.",
        "Ty skup się na nauce.",
      ],
      description: "Zamieniaj to, czego się uczysz, w fiszki, powtarzaj w odpowiednim momencie i zapamiętuj więcej.",
    },
  ],
  body: "",
} as const;
