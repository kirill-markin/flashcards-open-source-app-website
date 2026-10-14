import { PricingCards } from "@/components/PricingCards";
import { formatHeadingText } from "@/lib/headingText";
import { AnalyticsConsentWithdrawal } from "@/components/AnalyticsConsentWithdrawal";
import { BreadcrumbStructuredData } from "@/components/BreadcrumbStructuredData";
import { HomeLanding } from "@/components/HomeLanding";
import { SiteFrame } from "@/components/SiteFrame";
import { StructuredDataScript } from "@/components/StructuredDataScript";
import { renderMarkdownToHtml } from "@/lib/content/renderMarkdownToHtml";
import { readPageContent } from "@/lib/content/readPageContent";
import type {
  AppWalkthroughSection,
  FeatureListSection,
  HeroSection,
  LegalPageSection,
  MarketingPageSlug,
  PageSection,
} from "@/lib/content/types";
import {
  readGeneratedStoreQrCodes,
  type StoreQrCodes,
} from "@/lib/storeQrCodes";
import { getLocalizedPathname, type AppLocale } from "@/lib/i18n";
import {
  createProductJsonLdGraph,
  type ProductOfferNames,
} from "@/lib/seo/structuredData";
import { getUiCopy } from "@/lib/uiCopy";
import homeStyles from "./HomeLanding.module.css";
import legalStyles from "@/app/privacy/page.module.css";

interface MarketingPageViewProps {
  readonly locale: AppLocale;
  readonly slug: MarketingPageSlug;
}

function getMarketingRoutePathname(slug: MarketingPageSlug): string {
  if (slug === "home") {
    return "/";
  }

  return `/${slug}/`;
}

function renderMarketingBreadcrumbStructuredData(
  locale: AppLocale,
  slug: MarketingPageSlug,
  title: string
): React.ReactNode {
  if (slug === "home") {
    return null;
  }

  return (
    <BreadcrumbStructuredData
      locale={locale}
      items={[
        {
          label: title,
          href: getLocalizedPathname(locale, getMarketingRoutePathname(slug)),
        },
      ]}
    />
  );
}

function renderProductStructuredData(
  locale: AppLocale,
  offerNames: ProductOfferNames
): React.JSX.Element {
  return (
    <StructuredDataScript
      value={createProductJsonLdGraph({
        description: readPageContent("home", locale).description,
        locale,
        offerNames,
      })}
    />
  );
}

function getSectionByType<TSectionType extends PageSection["type"]>(
  sections: ReadonlyArray<PageSection>,
  type: TSectionType
): Extract<PageSection, { type: TSectionType }> {
  const section = sections.find(
    (currentSection): currentSection is Extract<PageSection, { type: TSectionType }> =>
      currentSection.type === type
  );

  if (section === undefined) {
    throw new Error(`Missing required section type: ${type}`);
  }

  return section;
}

function renderHomePage(
  locale: AppLocale,
  heroSection: HeroSection,
  featureSection: FeatureListSection,
  walkthroughSection: AppWalkthroughSection,
  storeQrCodes: StoreQrCodes
): React.JSX.Element {
  return (
    <HomeLanding locale={locale} hero={heroSection} walkthrough={walkthroughSection} features={featureSection} storeQrCodes={storeQrCodes} />
  );
}

async function renderLegalPage(
  locale: AppLocale,
  slug: "privacy" | "support" | "terms",
  title: string,
  breadcrumbStructuredData: React.ReactNode,
  body: string,
  legalSection: LegalPageSection
): Promise<React.JSX.Element> {
  const uiCopy = getUiCopy(locale);
  const contentHtml = await renderMarkdownToHtml(body, locale);

  return (
    <div className={legalStyles.container}>
      <div className={legalStyles.pagePanel}>
        <header className={legalStyles.intro}>
          {breadcrumbStructuredData}
          <h1 className={legalStyles.title}>{formatHeadingText(title)}</h1>
        </header>
        <section className={legalStyles.contentPanel}>
          <div className={legalStyles.content}>
            <p>
              <strong>{uiCopy.legal.lastUpdatedLabel}:</strong>{" "}
              {legalSection.lastUpdated}
            </p>
            {slug === "privacy" && <AnalyticsConsentWithdrawal locale={locale} />}
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          </div>
        </section>
      </div>
    </div>
  );
}

export async function MarketingPageView({
  locale,
  slug,
}: MarketingPageViewProps): Promise<React.JSX.Element> {
  const pageContent = readPageContent(slug, locale);
  const routePathname = getMarketingRoutePathname(slug);
  const breadcrumbStructuredData = renderMarketingBreadcrumbStructuredData(
    locale,
    slug,
    pageContent.title
  );

  let page: React.JSX.Element;
  let productStructuredData: React.JSX.Element | null;

  switch (slug) {
    case "home":
      productStructuredData = renderProductStructuredData(locale, ["Free"]);
      page = renderHomePage(
        locale,
        getSectionByType(pageContent.sections, "hero"),
        getSectionByType(pageContent.sections, "feature_list"),
        getSectionByType(pageContent.sections, "app_walkthrough"),
        readGeneratedStoreQrCodes(process.cwd())
      );
      break;
    case "pricing":
      productStructuredData = renderProductStructuredData(locale, ["Free", "Premium"]);
      page = <PricingCards
        locale={locale}
        section={getSectionByType(pageContent.sections, "pricing_tiers")}
        breadcrumbStructuredData={breadcrumbStructuredData}
      />;
      break;
    case "privacy":
    case "support":
    case "terms":
      productStructuredData = null;
      page = await renderLegalPage(
        locale,
        slug,
        pageContent.title,
        breadcrumbStructuredData,
        pageContent.body,
        getSectionByType(pageContent.sections, "legal_page")
      );
      break;
    default:
      throw new Error(`Unsupported marketing page slug: ${slug}`);
  }

  const frame = (
    <SiteFrame locale={locale} routePathname={routePathname} footerCtaTitle={slug === "home" ? getSectionByType(pageContent.sections, "review_cta").titleLines.join(" ") : undefined}>
      {productStructuredData}
      {page}
    </SiteFrame>
  );
  return slug === "home" ? <div className={homeStyles.preview}>{frame}</div> : frame;
}
