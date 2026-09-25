import { FullAppCtaPanel } from "@/components/AppCtaPanel";
import { AuthAwareAppCtaLink } from "@/components/AuthAwareAppCtaLink";
import {
  PublicActivityCharts,
  PublicActivitySummary,
} from "@/components/PublicActivitySection";
import { SiteFrame } from "@/components/SiteFrame";
import { TrackedOutboundLink } from "@/components/TrackedOutboundLink";
import {
  globalActivitySnapshotUrl,
  readGeneratedGlobalActivitySnapshot,
} from "@/lib/globalActivitySnapshot";
import type { AppLocale } from "@/lib/i18n";
import { DASHBOARDS_ROUTE_PATHNAME } from "@/lib/dashboardsPage";
import { getUiCopy } from "@/lib/uiCopy";
import styles from "@/app/dashboards/page.module.css";

interface DashboardsPageViewProps {
  readonly locale: AppLocale;
}

export function DashboardsPageView({
  locale,
}: DashboardsPageViewProps): React.JSX.Element {
  const uiCopy = getUiCopy(locale);
  const activityCopy = uiCopy.home.activity;
  const snapshot = readGeneratedGlobalActivitySnapshot(process.cwd());

  return (
    <SiteFrame locale={locale} routePathname={DASHBOARDS_ROUTE_PATHNAME}>
      <div className={styles.page}>
        <header className={styles.header}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>{activityCopy.eyebrow}</p>
            <h1 className={styles.title}>{activityCopy.title}</h1>
            <p className={styles.description}>{activityCopy.description}</p>
          </div>
          <TrackedOutboundLink
            className={styles.sourceLink}
            href={globalActivitySnapshotUrl}
            label={activityCopy.sourceLabel}
            locale={locale}
            placement="dashboards"
            target="activity_snapshot"
          />
        </header>

        <PublicActivitySummary locale={locale} snapshot={snapshot} />

        <PublicActivityCharts
          chartTitleTag="h2"
          locale={locale}
          snapshot={snapshot}
        />

        <FullAppCtaPanel
          action={
            <AuthAwareAppCtaLink
              locale={locale}
              placement="activity_end"
            />
          }
          className={styles.cta}
          heading={uiCopy.cta.activityHeading}
          locale={locale}
        />
      </div>
    </SiteFrame>
  );
}
