import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "시작은 무료. 더 많은 AI는 Premium.",
  description:
    "호스팅 앱을 무료로 시작하고, 월 USD 6.99의 Premium으로 업그레이드해 AI 채팅을 더 많이 쓰거나, 오픈 소스 스택을 직접 운영하는 AWS 인프라에 셀프 호스팅하세요.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "시작은 무료. 더 많은 AI는 Premium.",
      intro:
        "신용카드 없이 호스팅 앱을 무료로 시작하고, Premium을 추가해 AI 채팅을 더 많이 쓰거나, 오픈 소스 스택을 직접 운영하는 AWS 인프라에서 무료로 셀프 호스팅하세요.",
      tiers: [
        {
          type: "auth_tier",
          name: "무료",
          price: "무료",
          highlighted: true,
          bullets: [
            "월 AI 채팅 메시지 50개",
            "내 OpenAI API 키 사용 가능. 이 사용량은 월간 한도에 포함되지 않습니다",
            "웹, iOS, Android 간 동기화 포함",
            "카드, 파일, 전체 저장 용량에 요금제 할당량 없음. 파일 단위와 작업 단위의 일반 기술 제한은 적용됩니다",
            "호스팅 설치와 셀프 호스팅 설치 사이에서 카드, 태그, 미디어를 가져오고 내보내기",
            "이메일 일회용 코드로 비밀번호 없이 로그인",
          ],
          cta: {
            label: "호스팅 앱 무료로 쓰기",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "$6.99/월",
          highlighted: false,
          bullets: [
            "조건을 충족하는 신규 구독자에게 7일 무료 체험 제공. 결제 수단 등록 필요",
            "월 AI 채팅 메시지 1000개",
            "사용자 지정 강조 색상",
            "무료 요금제의 모든 기능",
            "웹, iOS, Android 어디서나 계정 하나에 구독 하나",
            "USD 기준 세금 포함 가격. 결제 시 현지 통화 가격이 표시될 수 있습니다",
            "매월 갱신. 언제든 취소할 수 있으며 기간이 끝날 때까지 이용 가능",
          ],
          cta: {
            label: "7일 무료 체험 시작",
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
