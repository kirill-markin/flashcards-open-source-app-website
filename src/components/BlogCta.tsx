import Image from "next/image";
import Link from "next/link";
import { getLocalizedPathname } from "@/lib/i18n";
import type { AppLocale } from "@/lib/i18n";
import { getHomeShowcaseImagePath } from "@/lib/homeShowcaseImage";
import { getUiCopy } from "@/lib/uiCopy";
import styles from "./BlogCta.module.css";

interface BlogCtaProps {
  readonly locale: AppLocale;
}

export function BlogCta({ locale }: BlogCtaProps) {
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
      <Link href={homeHref} className={styles.button}>
        {uiCopy.cta.buttonLabel}
      </Link>
    </aside>
  );
}
