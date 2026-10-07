import { AgentDirectoryLinks } from "@/components/AgentDirectoryLinks";
import { AuthButton } from "@/components/AuthButton";
import { HumanPlatformLinks } from "@/components/HumanPlatformLinks";
import { TrackedMcpEndpointCopyField } from "@/components/TrackedMcpEndpointCopyField";
import type { HeroSection } from "@/lib/content/types";
import { homeDesignFont } from "@/lib/homeDesignFont";
import type { AppLocale } from "@/lib/i18n";
import { getAvailableLocalizedPathname } from "@/lib/routeTranslations";
import type { StoreQrCodes } from "@/lib/storeQrCodes";
import { getUiCopy } from "@/lib/uiCopy";
import styles from "./HomeHero.module.css";

interface HomeHeroProps {
  readonly locale: AppLocale;
  readonly section: HeroSection;
  readonly storeQrCodes: StoreQrCodes;
}

export function HomeHero({
  locale,
  section,
  storeQrCodes,
}: HomeHeroProps): React.JSX.Element {
  const uiCopy = getUiCopy(locale);

  return (
    <section
      id="home-hero"
      aria-labelledby="home-hero-title"
      className={`${styles.hero} ${homeDesignFont.className}`}
    >
      <div className={styles.main}>
        <p className={styles.eyebrow}>{section.eyebrow}</p>
        <div className={styles.message}>
          <h1 id="home-hero-title" className={styles.title}>
            {section.titleLines.map((line) => <span key={line}>{line}</span>)}
          </h1>
          <p className={styles.description}>{section.subtitle}</p>
        </div>
        <div className={styles.cta}>
          <AuthButton
            locale={locale}
            placement="home_hero"
            signupLabel={uiCopy.auth.startStudyingFree}
          />
          <p className={styles.trustLine}>{section.trustLine}</p>
        </div>
      </div>
      <div className={styles.aside}>
        <div className={styles.humanAccess}>
          <h2 className={styles.hintTitle}>{uiCopy.home.humanSectionLabel}</h2>
          <HumanPlatformLinks
            locale={locale}
            storeQrCodes={storeQrCodes}
            appearance="badges"
          />
        </div>
        <div className={styles.agentAccess}>
          <h2 className={styles.hintTitle}>{uiCopy.home.aiAgentSectionLabel}</h2>
          <p className={styles.agentDescription}>{uiCopy.home.agentHintDescription}</p>
          <AgentDirectoryLinks
            locale={locale}
            documentationLink={{
              label: uiCopy.footer.documentationLabel,
              href: getAvailableLocalizedPathname(locale, "/docs/mcp-connector/"),
            }}
          />
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
