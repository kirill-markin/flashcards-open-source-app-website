import type { AppLocale } from "@/lib/i18n";
import {
  globalActivitySnapshotUrl,
  serializeGlobalActivitySnapshot,
  type GlobalActivitySnapshot,
  type GlobalActivitySnapshotDay,
} from "@/lib/globalActivitySnapshot";
import { getUiCopy } from "@/lib/uiCopy";
import type {
  FeatureListSection,
  HeroSection,
  LegalPageSection,
  MarketingPageSlug,
  PageContent,
  PricingTier,
  PricingTiersSection,
} from "./types";
import { getMarketingPagePath } from "./readPageContent";

export interface MarkdownSiteContext {
  readonly siteUrl: string;
  readonly appUrl: string;
  readonly githubUrl: string;
}

export interface MarketingPageMarkdownContext {
  readonly globalActivitySnapshot: GlobalActivitySnapshot;
}

function getPageUrl(
  siteContext: MarkdownSiteContext,
  slug: MarketingPageSlug,
  locale: AppLocale
): string {
  const pagePath = getMarketingPagePath(slug, locale);

  if (pagePath === "") {
    return `${siteContext.siteUrl}/`;
  }

  return `${siteContext.siteUrl}/${pagePath}/`;
}

function getIntlLocale(locale: AppLocale): string {
  switch (locale) {
    case "ar":
      return "ar-SA";
    case "de":
      return "de-DE";
    case "en":
      return "en-US";
    case "es":
      return "es-ES";
    case "hi":
      return "hi-IN";
    case "ja":
      return "ja-JP";
    case "ru":
      return "ru-RU";
    case "zh":
      return "zh-CN";
  }
}

function formatNumber(locale: AppLocale, value: number): string {
  return new Intl.NumberFormat(getIntlLocale(locale)).format(value);
}

function formatDate(locale: AppLocale, value: string): string {
  return new Intl.DateTimeFormat(getIntlLocale(locale), {
    timeZone: "UTC",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${value}T00:00:00.000Z`));
}

function getMaxDailyValue(
  days: ReadonlyArray<GlobalActivitySnapshotDay>,
  getValue: (day: GlobalActivitySnapshotDay) => number,
  label: string
): number {
  const [firstDay] = days;

  if (firstDay === undefined) {
    throw new Error(`Global activity snapshot days must not be empty when rendering Markdown ${label}.`);
  }

  return days.reduce<number>(
    (maxValue, day) => Math.max(maxValue, getValue(day)),
    getValue(firstDay)
  );
}

function renderHeroSection(section: HeroSection, lines: string[]): void {
  lines.push(section.titleLines.join(" "));
  lines.push("");
  lines.push(section.subtitle);
  lines.push("");
  lines.push(`[${section.primaryLink.label}](${section.primaryLink.href})`);
  lines.push(`[${section.secondaryLink.label}](${section.secondaryLink.href})`);
  lines.push("");
  lines.push("```text");
  lines.push(section.hintText);
  lines.push(section.hintLink.href);
  lines.push("```");
  lines.push("");
}

function renderPublicActivitySection(
  pageContent: PageContent,
  locale: AppLocale,
  context: MarketingPageMarkdownContext,
  lines: string[]
): void {
  const uiCopy = getUiCopy(locale);
  const snapshot = context.globalActivitySnapshot;
  const peakDailyReviewEvents = getMaxDailyValue(
    snapshot.days,
    (day) => day.reviewEvents.total,
    "peak daily review events"
  );
  const peakDailyUniqueUsers = getMaxDailyValue(
    snapshot.days,
    (day) => day.uniqueReviewingUsers,
    "peak daily unique users"
  );

  if (pageContent.slug !== "home") {
    throw new Error(`public_activity section is only supported on the home page. page=${pageContent.slug}`);
  }

  lines.push(`## ${uiCopy.home.activity.title}`);
  lines.push("");
  lines.push(uiCopy.home.activity.description);
  lines.push("");
  lines.push(`- [${uiCopy.home.activity.sourceLabel}](${globalActivitySnapshotUrl})`);
  lines.push(`- ${uiCopy.home.activity.totalReviewEventsLabel}: ${formatNumber(locale, snapshot.totals.reviewEvents.total)}`);
  lines.push(`- ${uiCopy.home.activity.usersWithReviewEventsLabel}: ${formatNumber(locale, snapshot.totals.uniqueReviewingUsers)}`);
  lines.push(`- ${uiCopy.home.activity.daysInRangeLabel}: ${formatNumber(locale, snapshot.days.length)}`);
  lines.push(`- ${uiCopy.home.activity.peakDailyVolumeLabel}: ${formatNumber(locale, peakDailyReviewEvents)}`);
  lines.push(`- ${uiCopy.home.activity.peakDailyUniqueUsersLabel}: ${formatNumber(locale, peakDailyUniqueUsers)}`);
  lines.push(`- Date window: ${formatDate(locale, snapshot.from)} to ${formatDate(locale, snapshot.to)}`);
  lines.push("");
  lines.push(`### ${uiCopy.home.activity.dailyUniqueUsersChartTitle}`);
  lines.push("");
  lines.push(uiCopy.home.activity.dailyUniqueUsersChartDescription);
  lines.push("");
  lines.push(`### ${uiCopy.home.activity.platformActivityChartTitle}`);
  lines.push("");
  lines.push(uiCopy.home.activity.platformActivityChartDescription);
  lines.push("");
  lines.push("Build-time raw snapshot:");
  lines.push("");
  lines.push("```json");
  lines.push(serializeGlobalActivitySnapshot(snapshot).trim());
  lines.push("```");
  lines.push("");
}

function renderFeatureListSection(
  section: FeatureListSection,
  pageContent: PageContent,
  lines: string[]
): void {
  if (section.title !== pageContent.title) {
    lines.push(`## ${section.title}`);
    lines.push("");
  }

  lines.push(section.intro);
  lines.push("");

  section.items.forEach((item) => {
    lines.push(`- **${item.title}** - ${item.description}`);
  });

  lines.push("");
}

function renderPricingTier(tier: PricingTier, lines: string[]): void {
  lines.push(`## ${tier.name} - ${tier.price}`);
  lines.push("");

  tier.bullets.forEach((bullet) => {
    lines.push(`- ${bullet}`);
  });

  lines.push("");
  lines.push(`[${tier.cta.label}](${tier.cta.href})`);
  lines.push("");
}

function renderPricingTiersSection(
  section: PricingTiersSection,
  pageContent: PageContent,
  lines: string[]
): void {
  if (section.title !== pageContent.title) {
    lines.push(`## ${section.title}`);
    lines.push("");
  }

  lines.push(section.intro);
  lines.push("");
  section.tiers.forEach((tier) => renderPricingTier(tier, lines));
}

function renderLegalPageSection(
  section: LegalPageSection,
  pageContent: PageContent,
  locale: AppLocale,
  lines: string[]
): void {
  const uiCopy = getUiCopy(locale);

  lines.push(`**${uiCopy.legal.lastUpdatedLabel}:** ${section.lastUpdated}`);
  lines.push("");
  lines.push(pageContent.body);
  lines.push("");
}

function renderPageSections(
  pageContent: PageContent,
  locale: AppLocale,
  context: MarketingPageMarkdownContext,
  lines: string[]
): void {
  pageContent.sections.forEach((section) => {
    switch (section.type) {
      case "hero":
        renderHeroSection(section, lines);
        return;
      case "feature_list":
        renderFeatureListSection(section, pageContent, lines);
        return;
      case "public_activity":
        renderPublicActivitySection(pageContent, locale, context, lines);
        return;
      case "pricing_tiers":
        renderPricingTiersSection(section, pageContent, lines);
        return;
      case "legal_page":
        renderLegalPageSection(section, pageContent, locale, lines);
        return;
      case "simple_markdown_page":
        lines.push(pageContent.body);
        lines.push("");
        return;
    }
  });
}

function renderMarkdownFooter(
  pageContent: PageContent,
  locale: AppLocale,
  siteContext: MarkdownSiteContext
): string {
  const originalUrl = getPageUrl(siteContext, pageContent.slug, locale);

  return `\n\n---\n*[View the styled HTML version of this page](${originalUrl})*\n\n*Tip: Append \`.md\` to any URL on ${siteContext.siteUrl} to get a clean Markdown version of that page.*`;
}

export function renderMarketingPageMarkdown(
  pageContent: PageContent,
  locale: AppLocale,
  context: MarketingPageMarkdownContext
): string {
  const lines: string[] = [`# ${pageContent.title}`, ""];

  renderPageSections(pageContent, locale, context, lines);

  return lines.join("\n").trim();
}

export function renderMarketingPageDocument(
  pageContent: PageContent,
  locale: AppLocale,
  siteContext: MarkdownSiteContext,
  context: MarketingPageMarkdownContext
): string {
  return `${renderMarketingPageMarkdown(pageContent, locale, context)}${renderMarkdownFooter(
    pageContent,
    locale,
    siteContext
  )}`;
}
