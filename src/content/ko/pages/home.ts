import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - 무료 오픈 소스 간격 반복 플래시카드 앱",
  description:
    "FSRS 간격 반복, AI 카드 작성 도우미, 오프라인 학습과 동기화, 자유로운 내보내기, 셀프 호스팅을 갖춘 무료 오픈 소스 플래시카드.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "무료 & 오픈 소스",
      titleLines: [
        "카드를 만드세요.",
        "더 똑똑하게 복습하세요.",
        "더 오래 기억하세요.",
      ],
      subtitle:
        "복습마다 알맞은 시점을 잡아 주고, 오프라인에서도 동작하며, 웹, iOS, Android 사이에서 동기화되는 무료 오픈 소스 플래시카드입니다. 카드를 만들거나 다듬을 때 도움이 필요하면 AI를 쓰세요. Nibomo는 이전에 Flashcards Open Source App이라는 이름이었습니다.",
      trustLine: "신용카드 없음. 광고 없음. 체험 기간 카운트다운 없음.",
      primaryLink: {
        label: "시작하기",
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "GitHub에서 보기",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "이 MCP 서버를 AI 클라이언트에 추가하세요:",
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
      title: "기능",
      intro:
        "쓸모 있는 카드를 만들고, 알맞은 때에 복습하고, 오프라인에서도 학습을 이어 가고, 학습 데이터를 직접 관리하는 데 필요한 모든 것.",
      items: [
        {
          title: "FSRS로 더 똑똑한 복습",
          description:
            "오늘 복습할 카드를 복습하세요. FSRS는 어려운 카드를 더 빨리 다시 보여 주고, 익숙한 카드는 더 오래 기다렸다가 보여 줍니다.",
        },
        {
          title: "AI 카드 작성 도우미",
          description:
            "카드를 만들거나, 문장을 다듬거나, 답을 더 분명하게 하는 일을 AI에 맡기세요. 무엇을 저장할지는 직접 정합니다.",
        },
        {
          title: "오프라인 학습과 자동 동기화",
          description:
            "인터넷 없이도 모바일 기기에서 복습을 이어 가세요. 변경 사항은 자동으로 동기화되어 웹, iOS, Android에서 계속할 수 있습니다.",
        },
        {
          title: "가져오기, 내보내기, 내 데이터는 내 것",
          description:
            "학습 자료를 언제든 넣고 뺄 수 있습니다. 내보낸 파일에는 카드, 태그, 관련 미디어가 함께 담깁니다.",
        },
        {
          title: "AI 에이전트와 연동",
          description:
            "MCP나 Agent API로 연결하면 AI 에이전트가 카드를 만들고, 다듬고, 정리하는 일을 도와줍니다.",
        },
        {
          title: "무료, 그리고 셀프 호스팅 가능",
          description:
            "호스팅된 앱을 무료로 쓰거나, 오픈 소스 코드를 살펴보거나, 직접 인프라에서 운영하세요.",
        },
      ],
    },
  ],
  body: "",
} as const;
