import { FEATURES_PAGE_CONTENT as AR_FEATURES_PAGE_CONTENT } from "@/content/ar/pages/features";
import { HOME_PAGE_CONTENT as AR_HOME_PAGE_CONTENT } from "@/content/ar/pages/home";
import { PRICING_PAGE_CONTENT as AR_PRICING_PAGE_CONTENT } from "@/content/ar/pages/pricing";
import { FEATURES_PAGE_CONTENT as DE_FEATURES_PAGE_CONTENT } from "@/content/de/pages/features";
import { HOME_PAGE_CONTENT as DE_HOME_PAGE_CONTENT } from "@/content/de/pages/home";
import { PRICING_PAGE_CONTENT as DE_PRICING_PAGE_CONTENT } from "@/content/de/pages/pricing";
import { FEATURES_PAGE_CONTENT as EN_FEATURES_PAGE_CONTENT } from "@/content/en/pages/features";
import { HOME_PAGE_CONTENT as EN_HOME_PAGE_CONTENT } from "@/content/en/pages/home";
import { PRICING_PAGE_CONTENT as EN_PRICING_PAGE_CONTENT } from "@/content/en/pages/pricing";
import { FEATURES_PAGE_CONTENT as ES_FEATURES_PAGE_CONTENT } from "@/content/es/pages/features";
import { HOME_PAGE_CONTENT as ES_HOME_PAGE_CONTENT } from "@/content/es/pages/home";
import { PRICING_PAGE_CONTENT as ES_PRICING_PAGE_CONTENT } from "@/content/es/pages/pricing";
import { FEATURES_PAGE_CONTENT as HI_FEATURES_PAGE_CONTENT } from "@/content/hi/pages/features";
import { HOME_PAGE_CONTENT as HI_HOME_PAGE_CONTENT } from "@/content/hi/pages/home";
import { PRICING_PAGE_CONTENT as HI_PRICING_PAGE_CONTENT } from "@/content/hi/pages/pricing";
import { FEATURES_PAGE_CONTENT as JA_FEATURES_PAGE_CONTENT } from "@/content/ja/pages/features";
import { HOME_PAGE_CONTENT as JA_HOME_PAGE_CONTENT } from "@/content/ja/pages/home";
import { PRICING_PAGE_CONTENT as JA_PRICING_PAGE_CONTENT } from "@/content/ja/pages/pricing";
import { FEATURES_PAGE_CONTENT as RU_FEATURES_PAGE_CONTENT } from "@/content/ru/pages/features";
import { HOME_PAGE_CONTENT as RU_HOME_PAGE_CONTENT } from "@/content/ru/pages/home";
import { PRICING_PAGE_CONTENT as RU_PRICING_PAGE_CONTENT } from "@/content/ru/pages/pricing";
import { FEATURES_PAGE_CONTENT as ZH_FEATURES_PAGE_CONTENT } from "@/content/zh/pages/features";
import { HOME_PAGE_CONTENT as ZH_HOME_PAGE_CONTENT } from "@/content/zh/pages/home";
import { PRICING_PAGE_CONTENT as ZH_PRICING_PAGE_CONTENT } from "@/content/zh/pages/pricing";
import type { PageContent } from "@/lib/content/types";
import type { AppLocale } from "@/lib/localeConfig";

type StructuredMarketingPageSlug = "home" | "features" | "pricing";

export const STRUCTURED_PAGE_CONTENT_BY_LOCALE: Readonly<
  Record<AppLocale, Readonly<Record<StructuredMarketingPageSlug, PageContent>>>
> = {
  en: {
    home: EN_HOME_PAGE_CONTENT,
    features: EN_FEATURES_PAGE_CONTENT,
    pricing: EN_PRICING_PAGE_CONTENT,
  },
  es: {
    home: ES_HOME_PAGE_CONTENT,
    features: ES_FEATURES_PAGE_CONTENT,
    pricing: ES_PRICING_PAGE_CONTENT,
  },
  ar: {
    home: AR_HOME_PAGE_CONTENT,
    features: AR_FEATURES_PAGE_CONTENT,
    pricing: AR_PRICING_PAGE_CONTENT,
  },
  de: {
    home: DE_HOME_PAGE_CONTENT,
    features: DE_FEATURES_PAGE_CONTENT,
    pricing: DE_PRICING_PAGE_CONTENT,
  },
  hi: {
    home: HI_HOME_PAGE_CONTENT,
    features: HI_FEATURES_PAGE_CONTENT,
    pricing: HI_PRICING_PAGE_CONTENT,
  },
  ja: {
    home: JA_HOME_PAGE_CONTENT,
    features: JA_FEATURES_PAGE_CONTENT,
    pricing: JA_PRICING_PAGE_CONTENT,
  },
  ru: {
    home: RU_HOME_PAGE_CONTENT,
    features: RU_FEATURES_PAGE_CONTENT,
    pricing: RU_PRICING_PAGE_CONTENT,
  },
  zh: {
    home: ZH_HOME_PAGE_CONTENT,
    features: ZH_FEATURES_PAGE_CONTENT,
    pricing: ZH_PRICING_PAGE_CONTENT,
  },
} as const;
