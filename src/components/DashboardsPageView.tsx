import { PublicActivityCharts } from "@/components/PublicActivitySection";
import { SiteFrame } from "@/components/SiteFrame";
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
  const activityCopy = getUiCopy(locale).home.activity;
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
          <a
            href={globalActivitySnapshotUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.sourceLink}
          >
            {activityCopy.sourceLabel}
          </a>
        </header>

        <PublicActivityCharts
          chartTitleTag="h2"
          locale={locale}
          snapshot={snapshot}
        />
      </div>
    </SiteFrame>
  );
}
