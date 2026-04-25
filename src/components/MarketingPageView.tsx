import Image from "next/image";
import { AuthButton } from "@/components/AuthButton";
import { CopyCodeField } from "@/components/CopyCodeField";
import { HumanPlatformLinks } from "@/components/HumanPlatformLinks";
import { PublicActivitySection } from "@/components/PublicActivitySection";
import { SiteFrame } from "@/components/SiteFrame";
import { renderMarkdownToHtml } from "@/lib/content/renderMarkdownToHtml";
import { readPageContent } from "@/lib/content/readPageContent";
import type {
  FeatureListSection,
  HeroSection,
  LegalPageSection,
  MarketingPageSlug,
  PageSection,
  PricingTiersSection,
} from "@/lib/content/types";
import type { AppLocale } from "@/lib/i18n";
import {
  readGeneratedGlobalActivitySnapshot,
  type GlobalActivitySnapshot,
} from "@/lib/globalActivitySnapshot";
import { getHomeShowcaseImagePath } from "@/lib/homeShowcaseImage";
import { getUiCopy } from "@/lib/uiCopy";
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
  activitySnapshot: GlobalActivitySnapshot
): React.JSX.Element {
  const uiCopy = getUiCopy(locale);

  return (
    <div className={homeStyles.page}>
      <section className={homeStyles.hero}>
        <div className={homeStyles.heroMain}>
          <h1 className={homeStyles.title}>
            {heroSection.titleLines.map((line, index) => (
              <span key={line}>
                {line}
                {index < heroSection.titleLines.length - 1 ? <br /> : null}
              </span>
            ))}
          </h1>
          <p className={homeStyles.subtitle}>{heroSection.subtitle}</p>
          <div className={homeStyles.cta}>
            <AuthButton locale={locale} />
          </div>
        </div>
        <div className={homeStyles.heroHint}>
          <div className={homeStyles.humanAccess}>
            <h2 className={homeStyles.hintTitle}>
              {uiCopy.home.humanSectionLabel}
            </h2>
            <HumanPlatformLinks locale={locale} />
          </div>
          <div className={homeStyles.hintDivider} />
          <div className={homeStyles.agentAccess}>
            <h2 className={homeStyles.hintTitle}>
              {uiCopy.home.aiAgentSectionLabel}
            </h2>
            <p className={homeStyles.hintDescription}>
              {uiCopy.home.agentHintDescription}
            </p>
            <CopyCodeField
              value={`${heroSection.hintText}\n${heroSection.hintLink.href}`}
              labels={uiCopy.copyCodeField}
            />
          </div>
        </div>
      </section>

      <section
        className={homeStyles.appShowcase}
        aria-label={uiCopy.home.appPreviewAriaLabel}
      >
        <p className={homeStyles.appShowcaseLabel}>
          {uiCopy.home.appPreviewLabel}
        </p>
        <div className={homeStyles.appShowcaseFrame}>
          <Image
            src={getHomeShowcaseImagePath(locale)}
            alt={uiCopy.home.appPreviewAlt}
            width={7140}
            height={3018}
            priority
            sizes="(max-width: 768px) calc(100vw - 28px), (max-width: 1280px) calc(100vw - 40px), 1240px"
            className={homeStyles.appShowcaseImage}
          />
        </div>
      </section>

      <PublicActivitySection locale={locale} snapshot={activitySnapshot} />

      <section className={homeStyles.features}>
        <div className={homeStyles.featuresInner}>
          <div className={homeStyles.featureGrid}>
            {featureSection.items.map((item) => (
              <div key={item.title} className={homeStyles.featureCard}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function renderFeaturesPage(
  title: string,
  featureSection: FeatureListSection
): React.JSX.Element {
  return (
    <div className={featureStyles.container}>
      <section className={featureStyles.intro}>
        <h1 className={featureStyles.title}>{title}</h1>
        <p className={featureStyles.subtitle}>{featureSection.intro}</p>
      </section>
      <section className={featureStyles.gridPanel}>
        <div className={featureStyles.grid}>
          {featureSection.items.map((item) => (
            <div key={item.title} className={featureStyles.card}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function renderPricingPage(
  locale: AppLocale,
  title: string,
  pricingSection: PricingTiersSection
): React.JSX.Element {
  const selfHostedTier = pricingSection.tiers[0];
  const cloudTier = pricingSection.tiers[1];

  if (selfHostedTier?.type !== "link_tier" || cloudTier?.type !== "auth_tier") {
    throw new Error("Invalid pricing tier structure");
  }

  return (
    <div className={pricingStyles.container}>
      <section className={pricingStyles.intro}>
        <h1 className={pricingStyles.title}>{title}</h1>
        <p className={pricingStyles.subtitle}>{pricingSection.intro}</p>
      </section>

      <section className={pricingStyles.tiersPanel}>
        <div className={pricingStyles.grid}>
          <div className={pricingStyles.card}>
            <h2>{selfHostedTier.name}</h2>
            <div className={pricingStyles.price}>{selfHostedTier.price}</div>
            <ul className={pricingStyles.features}>
              {selfHostedTier.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <a
              href={selfHostedTier.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className={pricingStyles.secondaryButton}
            >
              {selfHostedTier.cta.label}
            </a>
          </div>

          <div className={`${pricingStyles.card} ${pricingStyles.highlighted}`}>
            <h2>{cloudTier.name}</h2>
            <div className={pricingStyles.price}>{cloudTier.price}</div>
            <ul className={pricingStyles.features}>
              {cloudTier.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className={pricingStyles.ctaWrapper}>
              <AuthButton locale={locale} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

async function renderLegalPage(
  locale: AppLocale,
  title: string,
  body: string,
  legalSection: LegalPageSection
): Promise<React.JSX.Element> {
  const uiCopy = getUiCopy(locale);
  const contentHtml = await renderMarkdownToHtml(body);

  return (
    <div className={legalStyles.container}>
      <section className={legalStyles.intro}>
        <h1 className={legalStyles.title}>{title}</h1>
      </section>
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
  );
}

export async function MarketingPageView({
  locale,
  slug,
}: MarketingPageViewProps): Promise<React.JSX.Element> {
  const pageContent = readPageContent(slug, locale);
  const routePathname = getMarketingRoutePathname(slug);

  let page: React.JSX.Element;

  switch (slug) {
    case "home":
      page = renderHomePage(
        locale,
        getSectionByType(pageContent.sections, "hero"),
        getSectionByType(pageContent.sections, "feature_list"),
        readGeneratedGlobalActivitySnapshot(process.cwd())
      );
      break;
    case "features":
      page = renderFeaturesPage(
        pageContent.title,
        getSectionByType(pageContent.sections, "feature_list")
      );
      break;
    case "pricing":
      page = renderPricingPage(
        locale,
        pageContent.title,
        getSectionByType(pageContent.sections, "pricing_tiers")
      );
      break;
    case "privacy":
    case "support":
    case "terms":
      page = await renderLegalPage(
        locale,
        pageContent.title,
        pageContent.body,
        getSectionByType(pageContent.sections, "legal_page")
      );
      break;
    default:
      throw new Error(`Unsupported marketing page slug: ${slug}`);
  }

  return (
    <SiteFrame locale={locale} routePathname={routePathname}>
      {page}
    </SiteFrame>
  );
}
