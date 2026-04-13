import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Flashcards - приложение с открытым исходным кодом для интервального повторения",
  description:
    "Создавайте карточки, учитесь больше и забывайте меньше с приложением с открытым исходным кодом для интервального повторения, AI-чата и готового сценария входа для агентов.",
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
        "Приложение с открытым исходным кодом для карточек: интервальное повторение, вход без пароля, AI-чат и готовый сценарий подключения агентов. Уже сегодня пользуйтесь веб-версией, подключайте Claude Code, Codex или OpenClaw через один discovery URL и объединяйте веб, iOS и сценарии для агентов на одном и том же бэкенде.",
      primaryLink: {
        label: "Начать",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "Открыть на GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      hintText: "Начните с GET-запроса к этому discovery URL:",
      hintLink: {
        label: "https://api.flashcards-open-source-app.com/v1/",
        href: "https://api.flashcards-open-source-app.com/v1/",
      },
    },
    {
      type: "feature_list",
      title: "Возможности",
      intro:
        "Практичный стек для карточек: веб-приложение, iOS-клиент в репозитории, внешний API для агентов и уже готовая инфраструктура для самостоятельного хостинга.",
      items: [
        {
          title: "Интервальное повторение",
          description:
            "Повторяйте карточки по алгоритму FSRS с простой системой оценок. Бэкенд и iOS-клиент работают согласованно, поэтому логика планировщика остаётся одинаковой.",
        },
        {
          title: "Веб-приложение и AI-чат",
          description:
            "Создавайте карточки, просматривайте коллекцию, повторяйте то, что пора освежить, и работайте с AI-чатом и вложениями в веб-приложении.",
        },
        {
          title: "Вход без пароля",
          description:
            "Вход по одноразовому коду из email через Cognito и cookie общего домена между поддоменами auth и app.",
        },
        {
          title: "Подключение AI-агентов",
          description:
            "Передайте AI-агенту discovery URL, подтвердите последний 8-значный код из email, и он сам завершит вход, настройку API key, загрузку данных аккаунта, выбор рабочего пространства и SQL discovery.",
        },
        {
          title: "Самостоятельный хостинг",
          description:
            "Запускайте Postgres локально, поднимайте auth, backend и web по отдельности и полностью контролируйте путь развёртывания в AWS.",
        },
        {
          title: "Офлайн-ориентированные клиенты",
          description:
            "В репозитории уже есть iOS-приложение с локальным SQLite и синхронизацией, а Android-приложение доступно в Google Play.",
        },
      ],
    },
  ],
  body: "",
} as const;
