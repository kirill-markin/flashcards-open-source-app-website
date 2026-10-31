import { AuthButton } from "./AuthButton";
import { RegionalPremiumOffer } from "./RegionalPremiumOffer";
import { MarketingHeading, getMarketingHeadingBadge } from "./MarketingHeading";
import { TrackedSelfHostCtaLink } from "./TrackedSelfHostCtaLink";
import type { AppLocale } from "@/lib/i18n";
import type { PricingTiersSection } from "@/lib/content/types";
import { formatHeadingText } from "@/lib/headingText";
import { getPricingCards, getPricingTerms, type PricingCard } from "@/lib/pricingCards";
import { getPricingExperienceCopy } from "@/lib/pricingExperienceCopy";
import { getUiCopy } from "@/lib/uiCopy";
import styles from "./PricingCards.module.css";

function PlanCard({ card, locale }: { readonly card: PricingCard; readonly locale: AppLocale }): React.JSX.Element {
  const premium = card.kind === "premium";
  return (
    <article className={`${styles.planCard} ${premium ? styles.premiumCard : ""}`} data-pricing-plan={card.kind}>
      <div className={styles.planHeading}>
        <h2>{formatHeadingText(card.tier.name)}</h2>
        <span className={premium ? styles.badge : styles.smallLabel}>{card.label}</span>
      </div>
      {premium ? <RegionalPremiumOffer locale={locale} copy={getPricingExperienceCopy(locale)} standardPrice={card.tier.price} actionLabel={card.actionLabel} closeLabel={getUiCopy(locale).analyticsConsentWithdrawal.close}>
        <p className={styles.planDescription}>{getPricingExperienceCopy(locale).descriptions[1]}</p>
      </RegionalPremiumOffer> : <>
        <p className={styles.price}><strong><bdi>{card.amount}</bdi></strong>{card.period !== null && <span>{card.period}</span>}</p>
        <p className={styles.planDescription}>{card.description}</p>
        <div className={`${styles.action} ${premium ? "" : styles.subtleAction}`}>
          {card.tier.type === "auth_tier" ? (
            <AuthButton locale={locale} placement="pricing" label={card.actionLabel} />
          ) : (
            <TrackedSelfHostCtaLink locale={locale} className={styles.repositoryButton} href={card.tier.cta.href} label={card.actionLabel} />
          )}
        </div>
      </>}
      <ul className={styles.features}>
        {card.features.map(feature => <li key={feature}><svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m4 10 4 4 8-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg><span>{feature}</span></li>)}
      </ul>
    </article>
  );
}

export function PricingCards({ section, locale, breadcrumbStructuredData }: {
  readonly section: PricingTiersSection;
  readonly locale: AppLocale;
  readonly breadcrumbStructuredData: React.ReactNode;
}): React.JSX.Element {
  const copy = getPricingExperienceCopy(locale);
  return (
    <div className={styles.page}>
      {breadcrumbStructuredData}
      <header className={styles.cardsIntro}>
        <MarketingHeading badge={getMarketingHeadingBadge(locale, "pricing")} id="pricing-heading" title={copy.heading} />
      </header>
      <section className={styles.threeCards} aria-labelledby="pricing-heading">
        {getPricingCards(section, locale).map(card => <PlanCard card={card} locale={locale} key={card.kind} />)}
      </section>
      <p className={styles.terms}>{getPricingTerms(section, locale)}</p>
    </div>
  );
}
