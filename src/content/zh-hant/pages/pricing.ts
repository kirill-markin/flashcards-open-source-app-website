import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "免費開始，Premium 提供更多 AI 聊天額度",
  description:
    "Premium 的網頁版標準價格為每月 USD 6.99（含稅）。價格與優惠可能因地區和應用程式商店而異，最終價格會在購買前顯示。",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "免費開始，Premium 提供更多 AI 聊天額度",
      intro:
        "不需信用卡，就能免費使用雲端版。訂閱 Premium 可增加 AI 聊天用量。你也可以免費在自己的 AWS 基礎設施上架設開源版本。",
      tiers: [
        {
          type: "auth_tier",
          name: "免費版",
          price: "免費",
          highlighted: true,
          bullets: [
            "每月可傳送 50 則 AI 聊天訊息",
            "可使用自己的 OpenAI API 金鑰，用量不計入每月上限",
            "可在網頁版、iOS 和 Android 之間同步",
            "各方案皆不對閃卡、檔案或總儲存空間設定配額，個別檔案與單次操作仍適用一般技術限制",
            "可在雲端版與自行架設的版本之間匯入及匯出閃卡、標籤和媒體檔案",
            "使用電子郵件的一次性驗證碼登入，無須密碼",
          ],
          cta: {
            label: "免費使用雲端版",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "網頁版標準價格為每月 USD 6.99",
          highlighted: false,
          bullets: [
            "符合資格的新訂閱者可免費試用 7 天，須提供付款方式",
            "每月可傳送 1,000 則 AI 聊天訊息",
            "可自訂重點色",
            "包含免費版的所有功能",
            "同一帳號在網頁版、iOS 和 Android 共用一份訂閱",
            "網頁版標準價格已含稅。價格與優惠可能因地區和應用程式商店而異，最終價格會在購買前顯示。",
            "每月續訂，可隨時取消並繼續使用到當期結束",
          ],
          cta: {
            label: "開始 7 天免費試用",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "link_tier",
          name: "自行架設",
          price: "免費",
          highlighted: false,
          bullets: [
            "應用程式和 AWS CDK 基礎設施均採開源授權",
            "提供完整的 AWS 部署流程及 Docker/Postgres 本機開發環境",
            "由你提供並維護基礎設施、電子郵件服務、監控系統及 AI 憑證",
            "由你負擔基礎設施和第三方服務費用",
            "可在雲端版與自行架設的版本之間匯入及匯出閃卡、標籤和媒體檔案",
          ],
          cta: {
            label: "從 GitHub 取得自行架設所需的程式碼",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
