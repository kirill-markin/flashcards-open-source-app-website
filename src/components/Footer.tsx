import Link from "next/link";
import { getAppUrl } from "@/lib/auth";
import type { AppLocale } from "@/lib/i18n";
import { getLocalizedPathname } from "@/lib/i18n";
import { getHumanPlatforms } from "@/lib/humanPlatforms";
import { getUiCopy } from "@/lib/uiCopy";
import styles from "./Footer.module.css";

interface FooterProps {
  readonly locale: AppLocale;
}

export const Footer: React.FC<FooterProps> = ({ locale }) => {
  const year = new Date().getFullYear();
  const platforms = getHumanPlatforms(getAppUrl(), locale);
  const uiCopy = getUiCopy(locale);
  const productLinks =
    locale === "es"
      ? [
          {
            href: getLocalizedPathname(locale, "/features/"),
            label: uiCopy.footer.featuresLabel,
          },
          {
            href: getLocalizedPathname(locale, "/pricing/"),
            label: uiCopy.footer.pricingLabel,
          },
          {
            href: getLocalizedPathname(locale, "/docs/"),
            label: uiCopy.footer.documentationLabel,
          },
          {
            href: getLocalizedPathname(locale, "/blog/"),
            label: uiCopy.footer.blogLabel,
          },
        ]
      : [
          {
            href: getLocalizedPathname(locale, "/features/"),
            label: uiCopy.footer.featuresLabel,
          },
          {
            href: getLocalizedPathname(locale, "/pricing/"),
            label: uiCopy.footer.pricingLabel,
          },
          {
            href: getLocalizedPathname(locale, "/docs/"),
            label: uiCopy.footer.documentationLabel,
          },
          {
            href: getLocalizedPathname(locale, "/blog/"),
            label: uiCopy.footer.blogLabel,
          },
        ];

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h3>{uiCopy.footer.productHeading}</h3>
            {productLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className={styles.column}>
            <h3>{uiCopy.footer.openSourceHeading}</h3>
            <a
              href="https://github.com/kirill-markin/flashcards-open-source-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <Link href={getLocalizedPathname(locale, "/docs/self-hosting/")}>
              {uiCopy.footer.selfHostingGuideLabel}
            </Link>
          </div>
          <div className={styles.column}>
            <h3>{uiCopy.footer.appsHeading}</h3>
            {platforms.map((platform) => {
              if (platform.kind === "active") {
                return (
                  <a
                    key={platform.label}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {platform.label}
                  </a>
                );
              }

              return (
                <span
                  key={platform.label}
                  className={styles.placeholderLink}
                  aria-label={`${platform.label}. ${platform.tooltip}`}
                  title={platform.tooltip}
                >
                  {platform.label} · {uiCopy.footer.inDevelopmentLabel}
                </span>
              );
            })}
          </div>
          <div className={styles.column}>
            <h3>{uiCopy.footer.legalHeading}</h3>
            <Link href={getLocalizedPathname(locale, "/privacy/")}>
              {uiCopy.footer.privacyPolicyLabel}
            </Link>
            <Link href={getLocalizedPathname(locale, "/support/")}>
              {uiCopy.footer.supportLabel}
            </Link>
            <Link href={getLocalizedPathname(locale, "/terms/")}>
              {uiCopy.footer.termsOfServiceLabel}
            </Link>
          </div>
        </div>
        <div className={styles.bottom}>
          <span className={styles.copyright}>
            {year} {uiCopy.footer.copyrightLabel}
          </span>
          <div className={styles.attribution}>
            <span className={styles.attributionLine}>
              {uiCopy.footer.builtByLabel} ·{" "}
              <a
                href="https://ozma.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ozma.io
              </a>
            </span>
            <span className={styles.attributionLine}>
              {uiCopy.footer.operatedByLabel}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
