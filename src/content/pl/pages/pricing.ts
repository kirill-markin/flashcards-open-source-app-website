import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Darmowe w użyciu. Darmowe do self-hostingu.",
  description:
    "Korzystaj z hostowanej aplikacji bez opłat, z AI i synchronizacją w cenie na czas bety, albo uruchom otwarty stack na własnej infrastrukturze AWS.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Darmowe w użyciu. Darmowe do self-hostingu.",
      intro:
        "Korzystaj z hostowanej aplikacji bez opłat i bez karty kredytowej albo uruchom otwarty stack na własnej infrastrukturze AWS.",
      tiers: [
        {
          type: "auth_tier",
          name: "Wersja hostowana",
          price: "Za darmo",
          highlighted: true,
          bullets: [
            "Funkcje AI w cenie na czas bety",
            "Synchronizacja między wersją webową, iOS i Androidem w cenie",
            "W czasie bety nie ma limitów planu na karty, pliki ani łączną przestrzeń; obowiązują zwykłe techniczne limity na plik i operację",
            "Importuj i eksportuj karty, tagi oraz media między instalacją hostowaną a własną",
            "Logowanie bez hasła jednorazowym kodem z e-maila",
            "Podstawowe tworzenie i powtarzanie kart pozostanie darmowe; intensywniejsze korzystanie z AI może później wymagać własnego klucza API dostawcy lub płatnej opcji",
          ],
          cta: {
            label: "Korzystaj z hostowanej aplikacji za darmo",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "link_tier",
          name: "Własny hosting",
          price: "Za darmo",
          highlighted: false,
          bullets: [
            "Aplikacja i infrastruktura AWS CDK z otwartym kodem",
            "Pełna ścieżka wdrożenia na AWS oraz lokalne środowisko deweloperskie na Docker/Postgres",
            "Infrastrukturę, pocztę, monitoring i dane dostępowe do AI zapewniasz i utrzymujesz samodzielnie",
            "Płacisz za infrastrukturę i usługi dostawców zewnętrznych",
            "Importuj i eksportuj karty, tagi oraz media między instalacją hostowaną a własną",
          ],
          cta: {
            label: "Uruchom u siebie z GitHuba",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
