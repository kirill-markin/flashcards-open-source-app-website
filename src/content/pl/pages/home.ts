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
        "Darmowe fiszki open source, które planują każdą powtórkę na właściwy moment, działają offline i synchronizują się między wersją webową, iOS i Androidem. Skorzystaj z AI, gdy chcesz pomocy przy tworzeniu lub poprawianiu kart. Nibomo było wcześniej znane jako Flashcards Open Source App.",
      trustLine: "Bez karty kredytowej. Bez reklam. Bez odliczania okresu próbnego.",
      primaryLink: {
        label: "Zacznij teraz",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "Zobacz na GitHubie",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Dodaj ten serwer MCP do swojego klienta AI:",
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
            "Powtarzaj na telefonie także bez internetu. Zmiany synchronizują się automatycznie, więc możesz kontynuować w przeglądarce, na iOS lub Androidzie.",
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
  ],
  body: "",
} as const;
