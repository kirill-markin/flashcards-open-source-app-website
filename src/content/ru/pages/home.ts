import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Flashcards - открытое интервальное повторение",
  description:
    "Создавайте карточки, учитесь больше и забывайте меньше с open-source приложением для интервального повторения, AI-чата и onboarding для агентов.",
  slug: "home",
  sections: [
    {
      type: "hero",
      titleLines: [
        "Создавайте карточки.",
        "Учитесь больше.",
        "Забывайте меньше.",
      ],
      subtitle:
        "Open-source приложение для карточек с интервальным повторением, passwordless auth, AI-чатом и onboarding-потоком для агентов. Используйте hosted web app уже сегодня, подключайте Claude Code, Codex или OpenClaw через один discovery URL и держите web, iOS и agent workflows на одной backend-модели.",
      primaryLink: {
        label: "Начать",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "Открыть на GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      hintText: "Начните с GET по этому discovery URL:",
      hintLink: {
        label: "https://api.flashcards-open-source-app.com/v1/",
        href: "https://api.flashcards-open-source-app.com/v1/",
      },
    },
    {
      type: "feature_list",
      title: "Функции",
      intro:
        "Сфокусированный стек для карточек: hosted web app, iOS client в репозитории, внешний agent API и инфраструктура, уже готовая для self-hosting.",
      items: [
        {
          title: "Интервальное повторение",
          description:
            "Повторяйте карточки с FSRS scheduling и простой схемой оценок. Backend и iOS client поддерживают согласованное поведение scheduler.",
        },
        {
          title: "Web app и AI-чат",
          description:
            "Создавайте карточки, просматривайте коллекцию, повторяйте due items и используйте AI-чат с file attachments в hosted web app.",
        },
        {
          title: "Passwordless Auth",
          description:
            "Email OTP через Cognito и shared-domain cookies между auth и app subdomains.",
        },
        {
          title: "Onboarding для агентов",
          description:
            "Передайте AI agent discovery URL, подтвердите последний 8-digit email code и позвольте ему завершить login, настройку API key, загрузку account context, выбор workspace и SQL discovery.",
        },
        {
          title: "Self-Hosted",
          description:
            "Запускайте Postgres локально, поднимайте auth, backend и web по отдельности и сохраняйте полный контроль над AWS deployment path.",
        },
        {
          title: "Offline-First Clients",
          description:
            "В репозитории уже есть iOS app с локальным SQLite и sync, а Android app теперь доступно в Google Play.",
        },
      ],
    },
  ],
  body: "",
} as const;
