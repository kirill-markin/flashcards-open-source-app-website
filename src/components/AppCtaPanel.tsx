import Image from "next/image";
import { getHomeShowcaseImagePath } from "@/lib/homeShowcaseImage";
import type { AppLocale } from "@/lib/i18n";
import { getUiCopy } from "@/lib/uiCopy";
import styles from "./AppCtaPanel.module.css";

interface AppCtaPanelProps {
  readonly action: React.ReactNode;
  readonly className: string;
  readonly heading: string;
  readonly locale: AppLocale;
}

interface AppCtaPanelContentProps extends AppCtaPanelProps {
  readonly imageSizes: string;
  readonly variantClassName: string;
}

function AppCtaPanelContent({
  action,
  className,
  heading,
  imageSizes,
  locale,
  variantClassName,
}: AppCtaPanelContentProps): React.JSX.Element {
  const uiCopy = getUiCopy(locale);

  return (
    <aside className={`${styles.panel} ${variantClassName} ${className}`}>
      <Image
        src={getHomeShowcaseImagePath(locale)}
        alt={uiCopy.home.appPreviewAlt}
        width={7140}
        height={3018}
        sizes={imageSizes}
        className={styles.image}
      />
      <p className={styles.heading}>{heading}</p>
      <div className={styles.actionSlot}>{action}</div>
    </aside>
  );
}

export function FullAppCtaPanel({
  action,
  className,
  heading,
  locale,
}: AppCtaPanelProps): React.JSX.Element {
  return (
    <AppCtaPanelContent
      action={action}
      className={className}
      heading={heading}
      imageSizes="(max-width: 768px) 90vw, 420px"
      locale={locale}
      variantClassName={styles.full}
    />
  );
}

export function CompactSideAppCtaPanel({
  action,
  className,
  heading,
  locale,
}: AppCtaPanelProps): React.JSX.Element {
  return (
    <AppCtaPanelContent
      action={action}
      className={className}
      heading={heading}
      imageSizes="220px"
      locale={locale}
      variantClassName={styles.compactSide}
    />
  );
}
