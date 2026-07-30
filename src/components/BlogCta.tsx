import {
  CompactSideAppCtaPanel,
  FullAppCtaPanel,
} from "@/components/AppCtaPanel";
import {
  TrackedBlogCtaLink,
  type BlogCtaPlacement,
} from "@/components/TrackedBlogCtaLink";
import { getSignupUrl } from "@/lib/auth";
import type { AppLocale } from "@/lib/i18n";
import { getUiCopy } from "@/lib/uiCopy";
import styles from "./BlogCta.module.css";

interface BlogCtaProps {
  readonly locale: AppLocale;
  readonly placement: BlogCtaPlacement;
}

export function BlogCta({
  locale,
  placement,
}: BlogCtaProps): React.JSX.Element {
  const uiCopy = getUiCopy(locale);

  return (
    <FullAppCtaPanel
      action={
        <TrackedBlogCtaLink
          href={getSignupUrl()}
          label={uiCopy.cta.buttonLabel}
          locale={locale}
          placement={placement}
        />
      }
      className={styles.cta}
      heading={uiCopy.cta.heading}
      locale={locale}
    />
  );
}

export function BlogStartSideCta({
  locale,
}: Pick<BlogCtaProps, "locale">): React.JSX.Element {
  const uiCopy = getUiCopy(locale);

  return (
    <CompactSideAppCtaPanel
      action={
        <TrackedBlogCtaLink
          href={getSignupUrl()}
          label={uiCopy.cta.buttonLabel}
          locale={locale}
          placement="article_start_side"
        />
      }
      className={styles.sideCta}
      heading={uiCopy.cta.heading}
      locale={locale}
    />
  );
}
