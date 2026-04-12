import { existsSync, readFileSync } from "fs";
import matter from "gray-matter";
import { STRUCTURED_PAGE_CONTENT_BY_LOCALE } from "@/content/structuredPageModules";
import {
  getMarkdownMarketingPageFilePath,
  getStructuredMarketingPageFilePath,
} from "@/lib/content/paths";
import {
  SUPPORTED_LOCALES,
  type AppLocale,
  getLocalizedPathname,
  normalizePathname,
  resolveLocaleFromPathname,
} from "@/lib/i18n";
import type {
  AuthPricingTier,
  ContentLink,
  FeatureItem,
  FeatureListSection,
  HeroSection,
  LegalPageSection,
  LinkPricingTier,
  MarketingPageSlug,
  PageContent,
  PageSection,
  PricingTier,
  PricingTiersSection,
  SimpleMarkdownPageSection,
} from "./types";

type StructuredMarketingPageSlug = "home" | "features" | "pricing";
type MarkdownBackedPageSlug = "privacy" | "support" | "terms";
const STRUCTURED_PAGE_SLUGS: ReadonlyArray<StructuredMarketingPageSlug> = [
  "home",
  "features",
  "pricing",
] as const;

const STRUCTURED_PAGE_SOURCE_FILE_PATHS: Readonly<
  Record<AppLocale, Readonly<Record<StructuredMarketingPageSlug, string>>>
> = Object.fromEntries(
  SUPPORTED_LOCALES.map((locale) => [
    locale,
    {
      home: getStructuredMarketingPageFilePath(locale, "home"),
      features: getStructuredMarketingPageFilePath(locale, "features"),
      pricing: getStructuredMarketingPageFilePath(locale, "pricing"),
    },
  ])
) as Readonly<
  Record<AppLocale, Readonly<Record<StructuredMarketingPageSlug, string>>>
>;

export const MARKETING_PAGE_SLUGS: ReadonlyArray<MarketingPageSlug> = [
  "home",
  "features",
  "pricing",
  "privacy",
  "support",
  "terms",
] as const;

function getPagePathname(slug: MarketingPageSlug): string {
  if (slug === "home") {
    return "/";
  }

  return `/${slug}/`;
}

function getMarkdownPageFilePath(
  slug: MarkdownBackedPageSlug,
  locale: AppLocale
): string {
  return getMarkdownMarketingPageFilePath(locale, slug);
}

function isStructuredMarketingPageSlug(
  slug: MarketingPageSlug
): slug is StructuredMarketingPageSlug {
  return STRUCTURED_PAGE_SLUGS.includes(slug as StructuredMarketingPageSlug);
}

function assertNonEmptyString(
  value: string,
  fieldName: string,
  slug: MarketingPageSlug
): string {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`Invalid ${fieldName} for page: ${slug}`);
  }

  return value;
}

function assertStringArray(
  value: ReadonlyArray<string>,
  fieldName: string,
  slug: MarketingPageSlug
): ReadonlyArray<string> {
  if (!Array.isArray(value) || value.length === 0) {
    throw new Error(`Invalid ${fieldName} for page: ${slug}`);
  }

  value.forEach((item) => {
    if (typeof item !== "string" || item.trim() === "") {
      throw new Error(`Invalid ${fieldName} item for page: ${slug}`);
    }
  });

  return value;
}

function validateContentLink(
  link: ContentLink,
  fieldName: string,
  slug: MarketingPageSlug
): ContentLink {
  return {
    label: assertNonEmptyString(link.label, `${fieldName}.label`, slug),
    href: assertNonEmptyString(link.href, `${fieldName}.href`, slug),
  };
}

function validateFeatureItems(
  items: ReadonlyArray<FeatureItem>,
  fieldName: string,
  slug: MarketingPageSlug
): ReadonlyArray<FeatureItem> {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error(`Invalid ${fieldName} for page: ${slug}`);
  }

  return items.map((item) => ({
    title: assertNonEmptyString(item.title, `${fieldName}.title`, slug),
    description: assertNonEmptyString(
      item.description,
      `${fieldName}.description`,
      slug
    ),
  }));
}

function validateHeroSection(
  section: HeroSection,
  slug: MarketingPageSlug
): HeroSection {
  return {
    type: "hero",
    titleLines: assertStringArray(section.titleLines, "hero.titleLines", slug),
    subtitle: assertNonEmptyString(section.subtitle, "hero.subtitle", slug),
    primaryLink: validateContentLink(
      section.primaryLink,
      "hero.primaryLink",
      slug
    ),
    secondaryLink: validateContentLink(
      section.secondaryLink,
      "hero.secondaryLink",
      slug
    ),
    hintText: assertNonEmptyString(section.hintText, "hero.hintText", slug),
    hintLink: validateContentLink(section.hintLink, "hero.hintLink", slug),
  };
}

function validateFeatureListSection(
  section: FeatureListSection,
  slug: MarketingPageSlug
): FeatureListSection {
  return {
    type: "feature_list",
    title: assertNonEmptyString(section.title, "feature_list.title", slug),
    intro: assertNonEmptyString(section.intro, "feature_list.intro", slug),
    items: validateFeatureItems(section.items, "feature_list.items", slug),
  };
}

function validatePricingTier(
  tier: PricingTier,
  slug: MarketingPageSlug
): PricingTier {
  const baseTier = {
    name: assertNonEmptyString(tier.name, `${tier.type}.name`, slug),
    price: assertNonEmptyString(tier.price, `${tier.type}.price`, slug),
    highlighted: tier.highlighted,
    bullets: assertStringArray(tier.bullets, `${tier.type}.bullets`, slug),
    cta: validateContentLink(tier.cta, `${tier.type}.cta`, slug),
  };

  if (typeof tier.highlighted !== "boolean") {
    throw new Error(`Invalid ${tier.type}.highlighted for page: ${slug}`);
  }

  if (tier.type === "link_tier") {
    const linkTier: LinkPricingTier = {
      type: "link_tier",
      ...baseTier,
    };

    return linkTier;
  }

  if (tier.type === "auth_tier") {
    const authTier: AuthPricingTier = {
      type: "auth_tier",
      ...baseTier,
    };

    return authTier;
  }

  throw new Error(`Unsupported pricing tier type for page: ${slug}`);
}

function validatePricingTiersSection(
  section: PricingTiersSection,
  slug: MarketingPageSlug
): PricingTiersSection {
  if (!Array.isArray(section.tiers) || section.tiers.length === 0) {
    throw new Error(`Invalid pricing_tiers.tiers for page: ${slug}`);
  }

  return {
    type: "pricing_tiers",
    title: assertNonEmptyString(section.title, "pricing_tiers.title", slug),
    intro: assertNonEmptyString(section.intro, "pricing_tiers.intro", slug),
    tiers: section.tiers.map((tier) => validatePricingTier(tier, slug)),
  };
}

function validateLegalPageSection(
  section: LegalPageSection,
  slug: MarketingPageSlug
): LegalPageSection {
  return {
    type: "legal_page",
    lastUpdated: assertNonEmptyString(
      section.lastUpdated,
      "legal_page.lastUpdated",
      slug
    ),
  };
}

function validateSimpleMarkdownPageSection(): SimpleMarkdownPageSection {
  return {
    type: "simple_markdown_page",
  };
}

function validateSection(
  section: PageSection,
  slug: MarketingPageSlug
): PageSection {
  if (typeof section !== "object" || section === null) {
    throw new Error(`Invalid section for page: ${slug}`);
  }

  switch (section.type) {
    case "hero":
      return validateHeroSection(section, slug);
    case "feature_list":
      return validateFeatureListSection(section, slug);
    case "pricing_tiers":
      return validatePricingTiersSection(section, slug);
    case "legal_page":
      return validateLegalPageSection(section, slug);
    case "simple_markdown_page":
      return validateSimpleMarkdownPageSection();
    default:
      throw new Error(`Unsupported section type for page: ${slug}`);
  }
}

function validatePageStructure(pageContent: PageContent): PageContent {
  if (!Array.isArray(pageContent.sections) || pageContent.sections.length === 0) {
    throw new Error(`Invalid sections for page: ${pageContent.slug}`);
  }

  switch (pageContent.slug) {
    case "home":
      if (
        pageContent.sections.length !== 2 ||
        pageContent.sections[0].type !== "hero" ||
        pageContent.sections[1].type !== "feature_list"
      ) {
        throw new Error("Home page content must contain hero and feature_list sections");
      }
      return pageContent;
    case "features":
      if (
        pageContent.sections.length !== 1 ||
        pageContent.sections[0].type !== "feature_list"
      ) {
        throw new Error("Features page content must contain one feature_list section");
      }
      return pageContent;
    case "pricing":
      if (
        pageContent.sections.length !== 1 ||
        pageContent.sections[0].type !== "pricing_tiers"
      ) {
        throw new Error("Pricing page content must contain one pricing_tiers section");
      }
      return pageContent;
    case "privacy":
    case "support":
    case "terms":
      if (
        pageContent.sections.length !== 1 ||
        pageContent.sections[0].type !== "legal_page"
      ) {
        throw new Error(
          `${pageContent.slug} page content must contain one legal_page section`
        );
      }

      if (pageContent.body.trim() === "") {
        throw new Error(`Missing markdown body for page: ${pageContent.slug}`);
      }

      return pageContent;
    default:
      throw new Error(`Unsupported page slug: ${pageContent.slug}`);
  }
}

export function hasMarketingPageTranslation(
  slug: MarketingPageSlug,
  locale: AppLocale
): boolean {
  if (isStructuredMarketingPageSlug(slug)) {
    return STRUCTURED_PAGE_CONTENT_BY_LOCALE[locale][slug] !== undefined;
  }

  return existsSync(getMarkdownPageFilePath(slug as MarkdownBackedPageSlug, locale));
}

export function getMarketingPageSourceFilePath(
  slug: MarketingPageSlug,
  locale: AppLocale
): string {
  if (isStructuredMarketingPageSlug(slug)) {
    return STRUCTURED_PAGE_SOURCE_FILE_PATHS[locale][slug];
  }

  return getMarkdownPageFilePath(slug as MarkdownBackedPageSlug, locale);
}

export function getMarketingPagePath(
  slug: MarketingPageSlug,
  locale: AppLocale
): string {
  const localizedPathname = getLocalizedPathname(locale, getPagePathname(slug));

  if (localizedPathname === "/") {
    return "";
  }

  return localizedPathname.replace(/^\/+/, "").replace(/\/+$/, "");
}

export function getMarketingPageFromPath(
  pagePath: string
): { readonly locale: AppLocale; readonly slug: MarketingPageSlug } | null {
  const pagePathname =
    pagePath.trim() === "" ? "/" : normalizePathname(`/${pagePath}`);
  const { locale, routePathname } = resolveLocaleFromPathname(pagePathname);
  const normalizedRoutePathname = normalizePathname(routePathname);

  if (normalizedRoutePathname === "/") {
    return { locale, slug: "home" };
  }

  const slug = normalizedRoutePathname.replace(/^\/+/, "").replace(/\/+$/, "");

  if (MARKETING_PAGE_SLUGS.includes(slug as MarketingPageSlug)) {
    return { locale, slug: slug as MarketingPageSlug };
  }

  return null;
}

export function listMarketingPagePaths(): ReadonlyArray<string> {
  return MARKETING_PAGE_SLUGS.flatMap((slug) => {
    const locales = SUPPORTED_LOCALES.filter((locale) =>
      hasMarketingPageTranslation(slug, locale)
    );

    return locales.map((locale) => getMarketingPagePath(slug, locale));
  });
}

export function readPageContent(
  slug: MarketingPageSlug,
  locale: AppLocale
): PageContent {
  if (isStructuredMarketingPageSlug(slug)) {
    const structuredPageContent = STRUCTURED_PAGE_CONTENT_BY_LOCALE[locale][slug];

    if (structuredPageContent === undefined) {
      throw new Error(`Missing structured page content for page: ${slug}, locale: ${locale}`);
    }

    return validatePageStructure({
      title: assertNonEmptyString(
        structuredPageContent.title,
        "title",
        structuredPageContent.slug
      ),
      description: assertNonEmptyString(
        structuredPageContent.description,
        "description",
        structuredPageContent.slug
      ),
      slug: structuredPageContent.slug,
      sections: structuredPageContent.sections.map((section) =>
        validateSection(section, structuredPageContent.slug)
      ),
      body: structuredPageContent.body.trim(),
    });
  }

  const markdownBackedSlug = slug as MarkdownBackedPageSlug;
  const filePath = getMarkdownPageFilePath(markdownBackedSlug, locale);

  if (!existsSync(filePath)) {
    throw new Error(
      `Missing page content file for page: ${slug}, locale: ${locale}, path: ${filePath}`
    );
  }

  const raw = readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const frontmatter = data as {
    readonly title: string;
    readonly description: string;
    readonly slug: MarketingPageSlug;
    readonly sections: ReadonlyArray<PageSection>;
  };

  const pageContent: PageContent = {
    title: assertNonEmptyString(frontmatter.title, "title", slug),
    description: assertNonEmptyString(frontmatter.description, "description", slug),
    slug: frontmatter.slug,
    sections: frontmatter.sections.map((section) => validateSection(section, slug)),
    body: content.trim(),
  };

  if (pageContent.slug !== slug) {
    throw new Error(`Frontmatter slug mismatch for page: ${slug}`);
  }

  return validatePageStructure(pageContent);
}

export function readAllMarketingPages(
  locale: AppLocale
): ReadonlyArray<PageContent> {
  return MARKETING_PAGE_SLUGS.filter((slug) =>
    hasMarketingPageTranslation(slug, locale)
  ).map((slug) => readPageContent(slug, locale));
}
