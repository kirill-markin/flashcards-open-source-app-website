import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "Функции",
  description:
    "FSRS review, создание карточек, AI-чат, onboarding для агентов, passwordless auth, self-hosting и offline-first clients.",
  slug: "features",
  sections: [
    {
      type: "feature_list",
      title: "Функции",
      intro:
        "Сфокусированный стек для карточек: hosted web app, iOS client в репозитории, MCP-сервер и agent API, а также инфраструктура, уже готовая для self-hosting.",
      items: [
        {
          title: "FSRS Review",
          description:
            "Due cards планируются через FSRS. Вы отправляете одну из четырех оценок, а backend обновляет время следующего review с учетом client review timestamp.",
        },
        {
          title: "Card Creation And Chat",
          description:
            "Создавайте front/back cards из web client и используйте AI chat с workspace data и file attachments, включая plain text uploads.",
        },
        {
          title: "Onboarding для агентов",
          description:
            "Добавьте сервер Flashcards по MCP в Claude, Cursor или любой MCP-клиент, и он сможет читать, создавать и редактировать ваши карточки. CLI-агенты вроде Claude Code, Codex или OpenClaw могут вместо этого указать discovery URL, сохранить API key и работать через /v1/agent/sql surface. От человека нужен только один шаг: передать последний 8-digit email code.",
        },
        {
          title: "Passwordless Auth",
          description:
            "Email OTP authentication работает на выделенном auth service. Browser sessions повторно используют shared-domain cookies, поэтому login корректно работает между subdomains.",
        },
        {
          title: "Self-Hosted Stack",
          description:
            "Запускайте Postgres, auth, backend и web client локально. Production deployment уже связан с AWS через CDK, CloudFront, API Gateway, Lambda и RDS.",
        },
        {
          title: "Published Agent API",
          description:
            "Текущий внешний contract включает discovery, OTP bootstrap, workspace selection и опубликованный SQL dialect для workspace, cards, decks и review events.",
        },
        {
          title: "Offline-First Clients",
          description:
            "В репозитории уже есть iOS client с локальным SQLite и backend sync routes, а Android app теперь доступно в Google Play.",
        },
      ],
    },
  ],
  body: "",
} as const;
