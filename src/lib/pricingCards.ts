import type { AppLocale } from "./localeConfig";
import type { PricingTier, PricingTiersSection } from "./content/types";
import { getPricingExperienceCopy } from "./pricingExperienceCopy";

export type PricingPlanKind = "free" | "premium" | "selfHosted";

export interface PricingCard {
  readonly kind: PricingPlanKind;
  readonly tier: PricingTier;
  readonly label: string;
  readonly description: string;
  readonly features: readonly [string, string, string];
  readonly amount: string;
  readonly period: string | null;
  readonly actionLabel: string;
}

function requireBullet(tier: PricingTier, index: number, locale: AppLocale): string {
  const bullet = tier.bullets[index];
  if (bullet === undefined) {
    throw new Error(`Missing pricing bullet ${index} for ${tier.name}, locale ${locale}.`);
  }
  return bullet;
}

export function getPricingCards(section: PricingTiersSection, locale: AppLocale): readonly [PricingCard, PricingCard, PricingCard] {
  const [free, premium, selfHosted] = section.tiers;
  if (section.tiers.length !== 3 || free?.type !== "auth_tier" || premium?.type !== "auth_tier" || selfHosted?.type !== "link_tier") {
    throw new Error(`Pricing requires two hosted plans followed by a self-hosted plan for ${locale}.`);
  }
  const copy = getPricingExperienceCopy(locale);
  return [
    {
      kind: "free", tier: free, label: copy.labels[0], description: copy.descriptions[0],
      amount: "$0", period: null, actionLabel: copy.heading[0],
      features: locale === "en"
        ? ["50 AI chat messages / month", "Web, iOS & Android sync", copy.ownApiKey]
        : [requireBullet(free, 0, locale), requireBullet(free, 2, locale), copy.ownApiKey],
    },
    {
      kind: "premium", tier: premium, label: copy.labels[1], description: copy.descriptions[1],
      amount: new Intl.NumberFormat(locale, { style: "currency", currency: "USD" }).format(6.99),
      period: copy.period, actionLabel: copy.tryPremium,
      features: [locale === "en" ? "1,000 AI chat messages / month" : requireBullet(premium, 1, locale), requireBullet(premium, 3, locale), requireBullet(premium, 2, locale)],
    },
    {
      kind: "selfHosted", tier: selfHosted, label: copy.labels[2], description: copy.descriptions[2],
      amount: selfHosted.price, period: null,
      actionLabel: locale === "en" ? "Explore on GitHub" : selfHosted.cta.label,
      features: [locale === "en" ? "Open-source app & AWS CDK" : requireBullet(selfHosted, 0, locale), copy.ownAws, copy.importExport],
    },
  ];
}

export function getPricingTerms(section: PricingTiersSection, locale: AppLocale): string {
  const [, premium, selfHosted] = getPricingCards(section, locale);
  if (locale === "en") {
    return "Free needs no credit card. Premium: 7-day trial for eligible new subscribers; payment method required. USD, taxes included. Renews monthly; cancel any time. Self-hosting: you pay hosting and AI costs.";
  }
  return [
    requireBullet(premium.tier, 0, locale),
    requireBullet(premium.tier, 5, locale),
    requireBullet(premium.tier, 6, locale),
    requireBullet(selfHosted.tier, 3, locale),
  ].join(" · ");
}
