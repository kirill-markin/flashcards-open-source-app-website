import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "쓰는 것도 무료. 직접 호스팅해도 무료.",
  description:
    "베타 기간 동안 AI와 동기화가 포함된 호스팅 앱을 무료로 쓰거나, 오픈 소스 스택을 직접 운영하는 AWS 인프라에 올리세요.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "쓰는 것도 무료. 직접 호스팅해도 무료.",
      intro:
        "신용카드 없이 호스팅 앱을 무료로 쓰거나, 오픈 소스 스택을 직접 운영하는 AWS 인프라에서 돌리세요.",
      tiers: [
        {
          type: "auth_tier",
          name: "호스팅",
          price: "무료",
          highlighted: true,
          bullets: [
            "베타 기간 동안 AI 기능 포함",
            "웹, iOS, Android 간 동기화 포함",
            "베타 기간 동안 카드, 파일, 전체 저장 용량에 요금제 할당량 없음. 파일 단위와 작업 단위의 일반 기술 제한은 적용됩니다",
            "호스팅 설치와 셀프 호스팅 설치 사이에서 카드, 태그, 미디어를 가져오고 내보내기",
            "이메일 일회용 코드로 비밀번호 없이 로그인",
            "카드 작성과 복습의 핵심 기능은 앞으로도 무료입니다. AI를 많이 쓰면 나중에 직접 준비한 제공업체 API 키나 유료 옵션이 필요할 수 있습니다",
          ],
          cta: {
            label: "호스팅 앱 무료로 쓰기",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "link_tier",
          name: "셀프 호스팅",
          price: "무료",
          highlighted: false,
          bullets: [
            "오픈 소스 애플리케이션과 AWS CDK 인프라",
            "AWS 전체 배포 경로와 로컬 Docker/Postgres 개발 환경",
            "인프라, 이메일, 모니터링, AI 자격 증명은 직접 준비하고 관리합니다",
            "인프라와 외부 제공업체 비용은 직접 부담합니다",
            "호스팅 설치와 셀프 호스팅 설치 사이에서 카드, 태그, 미디어를 가져오고 내보내기",
          ],
          cta: {
            label: "GitHub에서 셀프 호스팅",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
