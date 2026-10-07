import Link from "next/link";
import { CONNECTOR_DIRECTORIES } from "@/lib/connectorDirectories";
import { getExternalLinkAttributes } from "@/lib/linkTargets";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { getAppUrl } from "@/lib/auth";
import type { AppLocale } from "@/lib/i18n";
import { getHumanPlatforms } from "@/lib/humanPlatforms";
import { getAvailableLocalizedPathname } from "@/lib/routeTranslations";
import { readGeneratedStoreQrCodes } from "@/lib/storeQrCodes";
import { getUiCopy } from "@/lib/uiCopy";
import { isPublicCatalogEnabled } from "@/lib/publicCatalogBuild";
import { STRUCTURED_DATA_PUBLISHER_URL } from "@/lib/seo/structuredData";
import { getPublicCatalogUiCopy } from "@/lib/publicCatalogCopy";
import { getPublicCatalogRootUrl } from "@/lib/publicCatalogUrls";
import { TrackedAppEntryLink } from "./TrackedAppEntryLink";
import { TrackedOutboundLink } from "./TrackedOutboundLink";
import { TrackedStoreLink } from "./TrackedStoreLink";
import styles from "./Footer.module.css";

const SOCIAL_LINKS: ReadonlyArray<{
  readonly href: string;
  readonly label: string;
}> = [
  {
    href: "https://www.linkedin.com/company/nibomo/",
    label: "LinkedIn",
  },
];

interface FooterProps {
  readonly locale: AppLocale;
  readonly routeLocales: ReadonlyArray<AppLocale>;
  readonly routePathname: string;
}

export const Footer: React.FC<FooterProps> = ({
  locale,
  routeLocales,
  routePathname,
}) => {
  const isHomeDesign = routePathname === "/";
  const year = new Date().getFullYear();
  const platforms = getHumanPlatforms(getAppUrl(), locale);
  const storeQrCodes = readGeneratedStoreQrCodes(process.cwd());
  const uiCopy = getUiCopy(locale);
  const sourceCodeHref = "https://github.com/kirill-markin/flashcards-open-source-app";
  const claudePluginHref = "https://claude.ai/customize/plugins/id/d8c1028d-4318-4da5-8514-1ed3e0b9a09e%40anthropic-plugin-directory";
  const smitheryHref = "https://smithery.ai/servers/kirill-fofi/nibomo";
  const glamaHref = "https://glama.ai/mcp/connectors/com.nibomo/flashcards";
  const geminiCliHref = "https://geminicli.com/extensions/?name=kirill-markinnibomo-plugins";
  const executorHref = "https://v2.executor.sh/apps/nibomo/nibomo";
  const cursorDirectoryHref = "https://cursor.directory/plugins/nibomo";
  const productLinks = [
    {
      href: getAvailableLocalizedPathname(locale, "/features/"),
      label: uiCopy.footer.featuresLabel,
    },
    {
      href: getAvailableLocalizedPathname(locale, "/pricing/"),
      label: uiCopy.footer.pricingLabel,
    },
    {
      href: getAvailableLocalizedPathname(locale, "/docs/"),
      label: uiCopy.footer.documentationLabel,
    },
    {
      href: getAvailableLocalizedPathname(locale, "/blog/"),
      label: uiCopy.footer.blogLabel,
    },
    ...(isPublicCatalogEnabled()
      ? [
        {
          href: getPublicCatalogRootUrl(locale),
          label: getPublicCatalogUiCopy(locale).navigationLabel,
        },
      ]
      : []),
  ];
  const operatedByAttribution = (
    <span className={styles.attributionLine}>
      <a
        href={STRUCTURED_DATA_PUBLISHER_URL}
        {...getExternalLinkAttributes(STRUCTURED_DATA_PUBLISHER_URL)}
      >
        {uiCopy.footer.operatedByLabel}
      </a>
    </span>
  );

  return (
    <footer
      id="site-footer"
      className={isHomeDesign
        ? `${styles.footer} ${styles.homeDesign}`
        : styles.footer}
    >
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
            <TrackedOutboundLink
              href={sourceCodeHref}
              label="GitHub"
              locale={locale}
              placement="footer"
              target="repository"
            />
            <Link
              href={getAvailableLocalizedPathname(locale, "/docs/self-hosting/")}
            >
              {uiCopy.footer.selfHostingGuideLabel}
            </Link>
          </div>
          <div className={styles.column}>
            <h3>{uiCopy.footer.appsHeading}</h3>
            {platforms.map((platform) => {
              if (platform.kind === "active") {
                if (platform.analytics.kind === "store") {
                  return (
                    <TrackedStoreLink
                      key={platform.label}
                      hint={uiCopy.platforms.scanQrHint}
                      href={platform.href}
                      label={platform.label}
                      locale={locale}
                      platform={platform.analytics.platform}
                      qrSvgMarkup={storeQrCodes[platform.analytics.platform]}
                    />
                  );
                }

                return (
                  <TrackedAppEntryLink
                    action="open_app"
                    key={platform.label}
                    href={platform.href}
                    label={platform.label}
                    locale={locale}
                    placement="footer"
                  />
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
            <h3>{uiCopy.footer.mcpsAndPluginsHeading}</h3>
            {CONNECTOR_DIRECTORIES.map((directory) => (
              <a key={directory.href} href={directory.href} {...getExternalLinkAttributes(directory.href)}>
                {directory.name} MCP
              </a>
            ))}
            <a
              href={claudePluginHref}
              {...getExternalLinkAttributes(claudePluginHref)}
            >
              {uiCopy.footer.claudePluginLabel}
            </a>
            <a
              href={smitheryHref}
              {...getExternalLinkAttributes(smitheryHref)}
            >
              Smithery MCP
            </a>
            <a
              href={glamaHref}
              {...getExternalLinkAttributes(glamaHref)}
            >
              Glama MCP
            </a>
            <a
              href={geminiCliHref}
              {...getExternalLinkAttributes(geminiCliHref)}
            >
              Gemini CLI
            </a>
            <a
              href={executorHref}
              {...getExternalLinkAttributes(executorHref)}
            >
              Executor
            </a>
            <a
              href={cursorDirectoryHref}
              {...getExternalLinkAttributes(cursorDirectoryHref)}
            >
              Cursor Directory
            </a>
          </div>
          <div className={styles.column}>
            <h3>{uiCopy.footer.followUsHeading}</h3>
            {SOCIAL_LINKS.map((link) => (
              <a key={link.href} href={link.href} {...getExternalLinkAttributes(link.href)}>
                {link.label}
              </a>
            ))}
          </div>
          <div className={styles.column}>
            <h3>{uiCopy.footer.legalHeading}</h3>
            <Link href={getAvailableLocalizedPathname(locale, "/privacy/")}>
              {uiCopy.footer.privacyPolicyLabel}
            </Link>
            <Link href={getAvailableLocalizedPathname(locale, "/support/")}>
              {uiCopy.footer.supportLabel}
            </Link>
            <Link href={getAvailableLocalizedPathname(locale, "/terms/")}>
              {uiCopy.footer.termsOfServiceLabel}
            </Link>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomMeta}>
            <span className={styles.copyright}>
              {isHomeDesign ? "© " : null}
              {year} {uiCopy.footer.copyrightLabel}
            </span>
            <div className={styles.attribution}>
              {isHomeDesign ? operatedByAttribution : null}
              <span className={styles.attributionLine}>
                {uiCopy.footer.builtByLabel}
              </span>
              {isHomeDesign ? null : operatedByAttribution}
            </div>
          </div>
          <div className={styles.localePicker}>
            <LocaleSwitcher
              locale={locale}
              routeLocales={routeLocales}
              routePathname={routePathname}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
