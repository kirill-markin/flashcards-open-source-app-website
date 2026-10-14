import type { AppLocale } from "@/lib/i18n";
import { formatHeadingText } from "@/lib/headingText";
import { getPublicCatalogUiCopy } from "@/lib/publicCatalogCopy";
import { getUiCopy } from "@/lib/uiCopy";
import styles from "./MarketingHeading.module.css";

type MarketingHeadingKind = "activity" | "catalog" | "features" | "pricing" | "docs" | "blog";

const ENGLISH_BADGES: Readonly<Record<MarketingHeadingKind, string>> = {
  activity: "Community",
  catalog: "Shared decks",
  features: "Your tools",
  pricing: "Simple plans",
  docs: "Get started",
  blog: "Field notes",
};

export function getMarketingHeadingBadge(locale: AppLocale, kind: MarketingHeadingKind): string {
  if (locale === "en") {
    return ENGLISH_BADGES[kind];
  }

  const copy = getUiCopy(locale);
  const labels: Readonly<Record<MarketingHeadingKind, string>> = {
    activity: copy.navigation.dashboards,
    catalog: getPublicCatalogUiCopy(locale).navigationLabel,
    features: copy.navigation.features,
    pricing: copy.navigation.pricing,
    docs: copy.navigation.docs,
    blog: copy.navigation.blog,
  };
  return labels[kind];
}

interface MarketingHeadingProps {
  readonly as?: "h1" | "h2";
  readonly badge?: string;
  readonly className?: string;
  readonly id?: string;
  readonly title: string | ReadonlyArray<string>;
}

export function MarketingHeading({
  as: Heading = "h1",
  badge,
  className = "",
  id,
  title,
}: MarketingHeadingProps): React.JSX.Element {
  const lines: ReadonlyArray<string> = typeof title === "string" ? [title] : title;
  return (
    <div className={`${styles.heading} ${className}`} data-marketing-heading>
      {badge !== undefined && <p className={styles.badge}>{formatHeadingText(badge)}</p>}
      <Heading className={`marketingHeading ${styles.title}`} id={id}>
        {lines.map((line) => <span className={styles.line} key={line}>{formatHeadingText(line)}{" "}</span>)}
      </Heading>
    </div>
  );
}
