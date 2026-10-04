import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Zacznij za darmo. Więcej AI w Premium.",
  description:
    "Zacznij za darmo w hostowanej aplikacji, przejdź na Premium za USD 6.99 miesięcznie, aby mieć więcej wiadomości na czacie AI, albo uruchom otwarty stack na własnej infrastrukturze AWS.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Zacznij za darmo. Więcej AI w Premium.",
      intro:
        "Zacznij za darmo i bez karty kredytowej w hostowanej aplikacji, dodaj Premium, aby mieć więcej wiadomości na czacie AI, albo bezpłatnie uruchom otwarty stack na własnej infrastrukturze AWS.",
      tiers: [
        {
          type: "auth_tier",
          name: "Darmowy",
          price: "Za darmo",
          highlighted: true,
          bullets: [
            "50 wiadomości na czacie AI miesięcznie",
            "Możesz używać własnego klucza OpenAI API; zapytania z nim nie wliczają się do miesięcznego limitu",
            "Synchronizacja między wersją webową, iOS i Androidem w cenie",
            "Brak limitów planu na karty, pliki ani łączną przestrzeń; obowiązują zwykłe techniczne limity na plik i operację",
            "Importuj i eksportuj karty, tagi oraz media między instalacją hostowaną a własną",
            "Logowanie bez hasła jednorazowym kodem z e-maila",
          ],
          cta: {
            label: "Korzystaj z hostowanej aplikacji za darmo",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "$6.99/mies.",
          highlighted: false,
          bullets: [
            "7-dniowy bezpłatny okres próbny dla uprawnionych nowych subskrybentów; wymagana metoda płatności",
            "1000 wiadomości na czacie AI miesięcznie",
            "Własne kolory akcentu",
            "Wszystko, co w planie Darmowym",
            "Jedna subskrypcja dla konta w wersji webowej, na iOS i Androidzie",
            "Cena w USD z wliczonymi podatkami; przy płatności może pojawić się cena w lokalnej walucie",
            "Odnawia się co miesiąc; anuluj w dowolnym momencie i zachowaj dostęp do końca okresu",
          ],
          cta: {
            label: "Wypróbuj za darmo przez 7 dni",
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
