import Image from "next/image";
import {
  TrackedBlogCtaLink,
  type BlogCtaPlacement,
} from "@/components/TrackedBlogCtaLink";
import { getLocalizedPathname } from "@/lib/i18n";
import type { AppLocale } from "@/lib/i18n";
import { getHomeShowcaseImagePath } from "@/lib/homeShowcaseImage";
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
  const homeHref = getLocalizedPathname(locale, "/");
  return (
    <aside className={styles.cta}>
      <Image
        src={getHomeShowcaseImagePath(locale)}
        alt={uiCopy.home.appPreviewAlt}
        width={7140}
        height={3018}
        sizes="(max-width: 768px) 90vw, 420px"
        className={styles.image}
      />
      <p className={styles.heading}>{uiCopy.cta.heading}</p>
      <TrackedBlogCtaLink
        href={homeHref}
        label={uiCopy.cta.buttonLabel}
        className={styles.button}
        locale={locale}
        placement={placement}
      />
    </aside>
  );
}
