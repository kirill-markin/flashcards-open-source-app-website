import Image from "next/image";
import type { AppLocale } from "@/lib/i18n";
import { getHomeShowcaseImagePath } from "@/lib/homeShowcaseImage";
import { getMarketingMediaUrl } from "@/lib/marketingMedia";
import { getUiCopy } from "@/lib/uiCopy";
import styles from "./AppScreensBanner.module.css";

// The localized source strip is question, answer, progress, AI, cards.
const SCREEN_ORDER: ReadonlyArray<number> = [3, 0, 1, 2, 4];

interface AppScreensBannerProps {
  readonly locale: AppLocale;
}

export function AppScreensBanner({ locale }: AppScreensBannerProps): React.JSX.Element {
  return (
    <div
      className={styles.banner}
      role="img"
      aria-label={getUiCopy(locale).home.appPreviewAlt}
      data-testid="app-screens-banner"
    >
      <div className={styles.screens}>
        {SCREEN_ORDER.map((screenIndex) => (
          <div className={styles.phone} key={screenIndex}>
            <div className={styles.screen}>
              <Image
                src={getMarketingMediaUrl(getHomeShowcaseImagePath(locale))}
                alt=""
                width={7140}
                height={3018}
                sizes="(max-width: 640px) 640px, (max-width: 1240px) 100vw, 1200px"
                className={styles.image}
                style={{ insetInlineStart: `${-100 * (120 + screenIndex * 1404) / 1284}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
