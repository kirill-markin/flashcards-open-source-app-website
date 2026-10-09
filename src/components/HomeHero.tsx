import Image from "next/image";
import Link from "next/link";
import { AgentDirectoryLinks } from "@/components/AgentDirectoryLinks";
import { HumanPlatformLinks } from "@/components/HumanPlatformLinks";
import { TrackedMcpEndpointCopyField } from "@/components/TrackedMcpEndpointCopyField";
import type { AppWalkthroughSection, HeroSection } from "@/lib/content/types";
import type { AppLocale } from "@/lib/i18n";
import { getAvailableLocalizedPathname } from "@/lib/routeTranslations";
import type { StoreQrCodes } from "@/lib/storeQrCodes";
import { getUiCopy } from "@/lib/uiCopy";
import styles from "./HomeHero.module.css";

interface HomeHeroProps {
  readonly locale: AppLocale;
  readonly section: HeroSection;
  readonly storeQrCodes: StoreQrCodes;
  readonly walkthrough: AppWalkthroughSection;
}

export function HomeHero(props: HomeHeroProps): React.JSX.Element {
  const { locale, section, storeQrCodes, walkthrough } = props;
  const uiCopy = getUiCopy(locale);

  return (
    <section
      id="home-hero"
      aria-labelledby="home-hero-title"
      className={`${styles.hero} ${styles.screensVariant}`}
    >
      <div className={styles.intro}>
        <div className={styles.main}>
          <p className={styles.eyebrow}>{section.eyebrow}</p>
          <h1 id="home-hero-title" className={styles.title}>
            {section.titleLines.map((line) => <span key={line}>{line}{" "}</span>)}
          </h1>
          <p className={styles.description}>{section.subtitle}</p>
          <div className={styles.humanAccess}>
            <HumanPlatformLinks
              locale={locale}
              storeQrCodes={storeQrCodes}
              appearance="badges"
            />
          </div>
        </div>
        <figure className={styles.preview} aria-label={uiCopy.home.appPreviewAriaLabel}>
          <div className={styles.screens}>
            {walkthrough.items.filter((_, index) => index === 0 || index === 2).map((item) => (
              <Image
                key={item.imagePath}
                className={styles.screen}
                src={item.imagePath}
                alt={item.imageAlt}
                width={582}
                height={858}
                sizes="(max-width: 700px) 42vw, (max-width: 960px) 230px, 260px"
                loading="eager"
              />
            ))}
          </div>
        </figure>
      </div>
      <div className={styles.aside}>
        <div className={styles.agentAccess}>
          <h2 className={styles.hintTitle}>{uiCopy.home.aiAgentSectionLabel}</h2>
          <p className={styles.agentDescription}>{uiCopy.home.agentHintDescription}</p>
        </div>
        <Link
          className={styles.documentation}
          href={getAvailableLocalizedPathname(locale, "/docs/mcp-connector/")}
        >
          {uiCopy.footer.documentationLabel}<span aria-hidden="true"> →</span>
        </Link>
        <div className={styles.agentLinks}>
          <AgentDirectoryLinks locale={locale} appearance="home" />
        </div>
        <div className={styles.endpoint}>
          {section.agentConnectors.map((connector) => (
            <TrackedMcpEndpointCopyField
              key={connector.link.href}
              caption={connector.caption}
              labels={uiCopy.copyCodeField}
              locale={locale}
              value={connector.link.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
