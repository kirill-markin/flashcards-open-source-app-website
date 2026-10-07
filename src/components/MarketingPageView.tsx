import Link from "next/link";
import { CONNECTOR_DIRECTORIES } from "@/lib/connectorDirectories";
import { FullAppCtaPanel } from "@/components/AppCtaPanel";
import { AuthButton } from "@/components/AuthButton";
import { AuthAwareAppCtaLink } from "@/components/AuthAwareAppCtaLink";
import { BreadcrumbStructuredData } from "@/components/BreadcrumbStructuredData";
import { HomeAppWalkthrough } from "@/components/HomeAppWalkthrough";
import { HomeHero } from "@/components/HomeHero";
import { HomeKeyFeatures } from "@/components/HomeKeyFeatures";
import { HomeReviewCta } from "@/components/HomeReviewCta";
import { SiteFrame } from "@/components/SiteFrame";
import { StructuredDataScript } from "@/components/StructuredDataScript";
import { TrackedSelfHostCtaLink } from "@/components/TrackedSelfHostCtaLink";
import { renderMarkdownToHtml } from "@/lib/content/renderMarkdownToHtml";
import { readPageContent } from "@/lib/content/readPageContent";
import type {
  AppWalkthroughSection,
  FeatureListSection,
  HeroSection,
  LegalPageSection,
  MarketingPageSlug,
  PageSection,
  PricingTier,
  PricingTiersSection,
  ReviewCtaSection,
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
import { getAvailableLocalizedPathname } from "@/lib/routeTranslations";
import homeStyles from "@/app/page.module.css";
import featureStyles from "@/app/features/page.module.css";
import pricingStyles from "@/app/pricing/page.module.css";
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
  reviewCtaSection: ReviewCtaSection,
  storeQrCodes: StoreQrCodes
): React.JSX.Element {
  return (
    <>
      <div className={homeStyles.page}>
        <HomeHero locale={locale} section={heroSection} storeQrCodes={storeQrCodes} />
        <HomeAppWalkthrough locale={locale} section={walkthroughSection} />
      </div>
      <HomeKeyFeatures section={featureSection} />
      <HomeReviewCta locale={locale} section={reviewCtaSection} />
    </>
  );
}

function renderFeaturesPage(
  locale: AppLocale,
  title: string,
  breadcrumbStructuredData: React.ReactNode,
  featureSection: FeatureListSection
): React.JSX.Element {
  const uiCopy = getUiCopy(locale);

  return (
    <div className={featureStyles.container}>
      <div className={featureStyles.pagePanel}>
        <header className={featureStyles.intro}>
          {breadcrumbStructuredData}
          <h1 className={featureStyles.title}>{title}</h1>
          <p className={featureStyles.subtitle}>{featureSection.intro}</p>
        </header>
        <section className={featureStyles.gridPanel}>
          <div className={featureStyles.grid}>
            {featureSection.items.map((item) => (
              <div key={item.title} className={featureStyles.card}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <div className={featureStyles.connectorLinks}>
            {CONNECTOR_DIRECTORIES.map((directory) => (
              <a key={directory.href} href={directory.href} target="_blank" rel="noopener noreferrer">
                {directory.name} MCP
              </a>
            ))}
            <Link href={getAvailableLocalizedPathname(locale, "/docs/mcp-connector/")}>
              {uiCopy.footer.documentationLabel}
            </Link>
          </div>
          <FullAppCtaPanel
            action={
              <AuthAwareAppCtaLink
                locale={locale}
                placement="features_end"
              />
            }
            className={featureStyles.cta}
            heading={uiCopy.cta.featuresHeading}
            locale={locale}
          />
        </section>
      </div>
    </div>
  );
}

function renderPricingPage(
  locale: AppLocale,
  title: string,
  breadcrumbStructuredData: React.ReactNode,
  pricingSection: PricingTiersSection
): React.JSX.Element {
  return (
    <div className={pricingStyles.container}>
      <div className={pricingStyles.pagePanel}>
        <header className={pricingStyles.intro}>
          {breadcrumbStructuredData}
          <h1 className={pricingStyles.title}>{title}</h1>
          <p className={pricingStyles.subtitle}>{pricingSection.intro}</p>
        </header>

        <section className={pricingStyles.tiersPanel}>
          <div className={pricingStyles.grid}>
            {pricingSection.tiers.map((tier) => renderPricingTier(locale, tier))}
          </div>
        </section>
      </div>
    </div>
  );
}

function renderPricingTier(
  locale: AppLocale,
  tier: PricingTier
): React.JSX.Element {
  const cardClassName = tier.highlighted
    ? `${pricingStyles.card} ${pricingStyles.highlighted}`
    : pricingStyles.card;

  return (
    <div key={tier.name} className={cardClassName}>
      <h2>{tier.name}</h2>
      <div className={pricingStyles.price}>{tier.price}</div>
      <ul className={pricingStyles.features}>
        {tier.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      {tier.type === "auth_tier" ? (
        <div className={pricingStyles.ctaWrapper}>
          <AuthButton
            locale={locale}
            placement="pricing"
            signupLabel={tier.cta.label}
          />
        </div>
      ) : (
        <TrackedSelfHostCtaLink
          className={pricingStyles.secondaryButton}
          href={tier.cta.href}
          label={tier.cta.label}
          locale={locale}
        />
      )}
    </div>
  );
}

async function renderLegalPage(
  locale: AppLocale,
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
          <h1 className={legalStyles.title}>{title}</h1>
        </header>
        <section className={legalStyles.contentPanel}>
          <div className={legalStyles.content}>
            <p>
              <strong>{uiCopy.legal.lastUpdatedLabel}:</strong>{" "}
              {legalSection.lastUpdated}
            </p>
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
        getSectionByType(pageContent.sections, "review_cta"),
        readGeneratedStoreQrCodes(process.cwd())
      );
      break;
    case "features":
      productStructuredData = renderProductStructuredData(locale, ["Free"]);
      page = renderFeaturesPage(
        locale,
        pageContent.title,
        breadcrumbStructuredData,
        getSectionByType(pageContent.sections, "feature_list")
      );
      break;
    case "pricing":
      productStructuredData = renderProductStructuredData(locale, ["Free", "Premium"]);
      page = renderPricingPage(
        locale,
        pageContent.title,
        breadcrumbStructuredData,
        getSectionByType(pageContent.sections, "pricing_tiers")
      );
      break;
    case "privacy":
    case "support":
    case "terms":
      productStructuredData = null;
      page = await renderLegalPage(
        locale,
        pageContent.title,
        breadcrumbStructuredData,
        pageContent.body,
        getSectionByType(pageContent.sections, "legal_page")
      );
      break;
    default:
      throw new Error(`Unsupported marketing page slug: ${slug}`);
  }

  return (
    <SiteFrame locale={locale} routePathname={routePathname}>
      {productStructuredData}
      {page}
    </SiteFrame>
  );
}
