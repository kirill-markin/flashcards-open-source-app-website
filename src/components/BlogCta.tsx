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

interface BlogCtaContentProps {
  readonly imageSizes: string;
  readonly locale: AppLocale;
  readonly placement: BlogCtaPlacement;
  readonly rootClassName: string;
}

function BlogCtaContent({
  imageSizes,
  locale,
  placement,
  rootClassName,
}: BlogCtaContentProps): React.JSX.Element {
  const uiCopy = getUiCopy(locale);
  const homeHref = getLocalizedPathname(locale, "/");

  return (
    <aside className={rootClassName}>
      <Image
        src={getHomeShowcaseImagePath(locale)}
        alt={uiCopy.home.appPreviewAlt}
        width={7140}
        height={3018}
        sizes={imageSizes}
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

export function BlogCta({
  locale,
  placement,
}: BlogCtaProps): React.JSX.Element {
  return (
    <BlogCtaContent
      imageSizes="(max-width: 768px) 90vw, 420px"
      locale={locale}
      placement={placement}
      rootClassName={styles.cta}
    />
  );
}

export function BlogStartSideCta({
  locale,
}: Pick<BlogCtaProps, "locale">): React.JSX.Element {
  return (
    <BlogCtaContent
      imageSizes="240px"
      locale={locale}
      placement="article_start_side"
      rootClassName={`${styles.cta} ${styles.sideCta}`}
    />
  );
}
