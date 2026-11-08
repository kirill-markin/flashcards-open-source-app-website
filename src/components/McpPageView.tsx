import Link from "next/link";
import { AgentDirectoryLinks } from "@/components/AgentDirectoryLinks";
import { MarketingHeading } from "@/components/MarketingHeading";
import { SiteFrame } from "@/components/SiteFrame";
import { TrackedMcpEndpointCopyField } from "@/components/TrackedMcpEndpointCopyField";
import type { AppLocale } from "@/lib/i18n";
import {
  getMcpPageDescription,
  MCP_PAGE_TITLE,
  MCP_ROUTE_PATHNAME,
} from "@/lib/mcpPage";
import { getMcpPageEndpointConnector } from "@/lib/mcpPageConnector";
import { getAvailableLocalizedPathname } from "@/lib/routeTranslations";
import { getUiCopy } from "@/lib/uiCopy";
import styles from "./McpPageView.module.css";

interface McpPageViewProps {
  readonly locale: AppLocale;
}

export function McpPageView({ locale }: McpPageViewProps): React.JSX.Element {
  const uiCopy = getUiCopy(locale);
  const connector = getMcpPageEndpointConnector(locale);

  return (
    <SiteFrame locale={locale} routePathname={MCP_ROUTE_PATHNAME}>
      <div className={styles.page}>
        <section className={styles.panel}>
          <div className={styles.intro}>
            <div className={styles.header}>
              <MarketingHeading title={MCP_PAGE_TITLE} />
              <Link
                className={styles.documentation}
                href={getAvailableLocalizedPathname(locale, "/docs/mcp-connector/")}
              >
                {uiCopy.footer.documentationLabel}<span aria-hidden="true"> →</span>
              </Link>
            </div>
            <p className={styles.description}>{getMcpPageDescription(locale)}</p>
          </div>
          <div className={styles.agentLinks}>
            <AgentDirectoryLinks locale={locale} appearance="home" />
          </div>
          <div className={styles.endpoint}>
            <TrackedMcpEndpointCopyField
              caption={connector.caption}
              labels={uiCopy.copyCodeField}
              locale={locale}
              placement="mcp_page"
              value={connector.link.href}
            />
          </div>
        </section>
      </div>
    </SiteFrame>
  );
}
