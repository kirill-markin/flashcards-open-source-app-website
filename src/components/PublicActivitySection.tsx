import type { AppLocale } from "@/lib/i18n";
import {
  globalActivityPlatforms,
  globalActivitySnapshotUrl,
  type GlobalActivityPlatform,
  type GlobalActivitySnapshot,
  type GlobalActivitySnapshotDay,
} from "@/lib/globalActivitySnapshot";
import { getUiCopy } from "@/lib/uiCopy";
import styles from "./PublicActivitySection.module.css";

type MetricCardProps = Readonly<{
  label: string;
  value: string;
  detail?: string;
}>;

type ChartShellProps = Readonly<{
  title: string;
  detail?: React.ReactNode;
  children: React.ReactNode;
}>;

type DailyActivityChartProps = Readonly<{
  days: ReadonlyArray<GlobalActivitySnapshotDay>;
  locale: AppLocale;
  reviewEventsLabel: string;
  uniqueReviewersLabel: string;
}>;

type PlatformActivityChartProps = Readonly<{
  ariaLabel: string;
  days: ReadonlyArray<GlobalActivitySnapshotDay>;
  locale: AppLocale;
  platformLabels: PlatformLabels;
}>;

type PlatformSummaryProps = Readonly<{
  label: string;
  platform: GlobalActivityPlatform;
  value: number;
  locale: AppLocale;
}>;

type ChartPoint = Readonly<{
  date: string;
  centerX: number;
  reviewEventsY: number;
  uniqueUsersY: number;
  reviewEventsHeight: number;
  uniqueUsers: number;
  reviewEvents: number;
  stackedHeights: Readonly<Record<GlobalActivityPlatform, number>>;
}>;

type ChartScaleDomain = Readonly<{
  reviewEventsMax: number;
  uniqueUsersMax: number;
}>;

type PlatformLabels = Readonly<Record<GlobalActivityPlatform, string>>;

const dailyChartWidth = 920;
const dailyChartHeight = 312;
const chartMargin = {
  top: 18,
  inlineEnd: 54,
  bottom: 62,
  inlineStart: 54,
} as const;
const chartFrameHeight = dailyChartHeight - chartMargin.top - chartMargin.bottom;
const platformColors: Readonly<Record<GlobalActivityPlatform, string>> = {
  web: "#4e79a7",
  android: "#59a14f",
  ios: "#f28e2b",
};
const dailyReviewBarColor = "#c44b2d";

function getIntlLocale(locale: AppLocale): string {
  switch (locale) {
    case "ar":
      return "ar-SA";
    case "de":
      return "de-DE";
    case "en":
      return "en-US";
    case "es":
      return "es-ES";
    case "hi":
      return "hi-IN";
    case "ja":
      return "ja-JP";
    case "ru":
      return "ru-RU";
    case "zh":
      return "zh-CN";
  }
}

function formatNumber(locale: AppLocale, value: number): string {
  return new Intl.NumberFormat(getIntlLocale(locale)).format(value);
}

function formatCompactDate(locale: AppLocale, value: string): string {
  return new Intl.DateTimeFormat(getIntlLocale(locale), {
    timeZone: "UTC",
    month: "short",
    day: "numeric",
  }).format(new Date(`${value}T00:00:00.000Z`));
}

function formatLongDate(locale: AppLocale, value: string): string {
  return new Intl.DateTimeFormat(getIntlLocale(locale), {
    timeZone: "UTC",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${value}T00:00:00.000Z`));
}

function formatTimestamp(locale: AppLocale, value: string): string {
  return new Intl.DateTimeFormat(getIntlLocale(locale), {
    timeZone: "UTC",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(new Date(value));
}

function getPeakDay(days: ReadonlyArray<GlobalActivitySnapshotDay>): GlobalActivitySnapshotDay {
  const [firstDay] = days;

  if (firstDay === undefined) {
    throw new Error("Global activity snapshot days must not be empty when calculating the peak day.");
  }

  return days.reduce<GlobalActivitySnapshotDay>((currentPeakDay, day) => (
    day.reviewEvents.total > currentPeakDay.reviewEvents.total ? day : currentPeakDay
  ), firstDay);
}

function createYAxisTicks(maxValue: number): ReadonlyArray<number> {
  if (maxValue <= 0) {
    return [0, 1];
  }

  const rawStep = maxValue / 4;
  const magnitude = 10 ** Math.floor(Math.log10(rawStep));
  const normalizedStep = rawStep / magnitude;

  let step = magnitude;

  if (normalizedStep > 5) {
    step = 10 * magnitude;
  } else if (normalizedStep > 2) {
    step = 5 * magnitude;
  } else if (normalizedStep > 1) {
    step = 2 * magnitude;
  }

  step = Math.max(1, step);

  const roundedMax = Math.ceil(maxValue / step) * step;
  const ticks: Array<number> = [];

  for (let value = 0; value <= roundedMax; value += step) {
    ticks.push(value);
  }

  return ticks;
}

function getYAxisDomainMax(ticks: ReadonlyArray<number>, label: string): number {
  const maxTick = ticks[ticks.length - 1];

  if (maxTick === undefined) {
    throw new Error(`Cannot derive ${label} chart domain from an empty tick array.`);
  }

  if (maxTick <= 0) {
    throw new Error(`Cannot derive ${label} chart domain from non-positive tick max ${maxTick}.`);
  }

  return maxTick;
}

function createTickDates(days: ReadonlyArray<GlobalActivitySnapshotDay>): ReadonlyArray<string> {
  const maxTickCount = 6;

  if (days.length <= maxTickCount) {
    return days.map((day) => day.date);
  }

  const step = Math.ceil((days.length - 1) / (maxTickCount - 1));
  const tickDates: Array<string> = [];

  for (let index = 0; index < days.length; index += step) {
    const day = days[index];

    if (day !== undefined) {
      tickDates.push(day.date);
    }
  }

  const lastDate = days[days.length - 1]?.date;

  if (lastDate !== undefined && tickDates[tickDates.length - 1] !== lastDate) {
    tickDates.push(lastDate);
  }

  return tickDates;
}

function createChartPoints(
  days: ReadonlyArray<GlobalActivitySnapshotDay>,
  scaleDomain: ChartScaleDomain,
): ReadonlyArray<ChartPoint> {
  const innerWidth = dailyChartWidth - chartMargin.inlineStart - chartMargin.inlineEnd;
  const step = innerWidth / days.length;

  return days.map((day, index) => {
    const centerX = chartMargin.inlineStart + (step * index) + (step / 2);
    const reviewEventsHeight = (day.reviewEvents.total / scaleDomain.reviewEventsMax) * chartFrameHeight;
    const uniqueUsersHeight = (day.uniqueReviewingUsers / scaleDomain.uniqueUsersMax) * chartFrameHeight;

    let stackedOffset = 0;
    const stackedHeights: Record<GlobalActivityPlatform, number> = {
      web: 0,
      android: 0,
      ios: 0,
    };

    for (const platform of globalActivityPlatforms) {
      const platformValue = day.reviewEvents.byPlatform[platform];
      const platformHeight = (platformValue / scaleDomain.reviewEventsMax) * chartFrameHeight;
      stackedHeights[platform] = platformHeight + stackedOffset;
      stackedOffset += platformHeight;
    }

    return {
      date: day.date,
      centerX,
      reviewEventsY: chartMargin.top + chartFrameHeight - reviewEventsHeight,
      uniqueUsersY: chartMargin.top + chartFrameHeight - uniqueUsersHeight,
      reviewEventsHeight,
      uniqueUsers: day.uniqueReviewingUsers,
      reviewEvents: day.reviewEvents.total,
      stackedHeights,
    };
  });
}

function createLinePath(points: ReadonlyArray<ChartPoint>): string {
  return points.map((point, index) => {
    const command = index === 0 ? "M" : "L";
    return `${command}${point.centerX} ${point.uniqueUsersY}`;
  }).join(" ");
}

function MetricCard({
  label,
  value,
  detail,
}: MetricCardProps): React.JSX.Element {
  return (
    <div className={styles.metricCard}>
      <p className={styles.metricLabel}>{label}</p>
      <p className={styles.metricValue}>{value}</p>
      {detail === undefined ? null : <p className={styles.metricDetail}>{detail}</p>}
    </div>
  );
}

function ChartShell({
  title,
  detail,
  children,
}: ChartShellProps): React.JSX.Element {
  return (
    <article className={styles.chartShell}>
      <div className={styles.chartMeta}>
        <h3 className={styles.chartTitle}>{title}</h3>
        {detail === undefined ? null : <div className={styles.chartDetail}>{detail}</div>}
      </div>
      <div className={styles.chartCanvas}>{children}</div>
    </article>
  );
}

function PlatformSummary({
  label,
  platform,
  value,
  locale,
}: PlatformSummaryProps): React.JSX.Element {
  return (
    <span className={styles.legendItem}>
      <span
        className={styles.legendSwatch}
        style={{ backgroundColor: platformColors[platform] }}
        aria-hidden="true"
      />
      <span>{label}</span>
      <strong>{formatNumber(locale, value)}</strong>
    </span>
  );
}

function DailyActivityChart({
  days,
  locale,
  reviewEventsLabel,
  uniqueReviewersLabel,
}: DailyActivityChartProps): React.JSX.Element {
  const reviewEventTicks = createYAxisTicks(Math.max(...days.map((day) => day.reviewEvents.total), 1));
  const uniqueUserTicks = createYAxisTicks(Math.max(...days.map((day) => day.uniqueReviewingUsers), 1));
  const maxReviewEvents = getYAxisDomainMax(reviewEventTicks, "review events");
  const maxUniqueUsers = getYAxisDomainMax(uniqueUserTicks, "unique users");
  const points = createChartPoints(days, {
    reviewEventsMax: maxReviewEvents,
    uniqueUsersMax: maxUniqueUsers,
  });
  const tickDates = createTickDates(days);
  const barWidth = Math.max(
    8,
    ((dailyChartWidth - chartMargin.inlineStart - chartMargin.inlineEnd) / days.length) * 0.72,
  );

  return (
    <svg
      className={styles.chartSvg}
      viewBox={`0 0 ${dailyChartWidth} ${dailyChartHeight}`}
      role="img"
      aria-label={reviewEventsLabel}
    >
      {reviewEventTicks.map((tick) => {
        const y = chartMargin.top + chartFrameHeight - ((tick / maxReviewEvents) * chartFrameHeight);

        return (
          <g key={`daily-grid-${tick}`}>
            <line
              x1={chartMargin.inlineStart}
              y1={y}
              x2={dailyChartWidth - chartMargin.inlineEnd}
              y2={y}
              className={styles.gridLine}
            />
            <text x={chartMargin.inlineStart - 10} y={y + 4} className={styles.axisLabelStart}>
              {formatNumber(locale, tick)}
            </text>
          </g>
        );
      })}

      {uniqueUserTicks.map((tick) => {
        const y = chartMargin.top + chartFrameHeight - ((tick / maxUniqueUsers) * chartFrameHeight);

        return (
          <text
            key={`users-tick-${tick}`}
            x={dailyChartWidth - chartMargin.inlineEnd + 10}
            y={y + 4}
            className={styles.axisLabelEnd}
          >
            {formatNumber(locale, tick)}
          </text>
        );
      })}

      {points.map((point) => (
        <g key={point.date}>
          <rect
            x={point.centerX - (barWidth / 2)}
            y={point.reviewEventsY}
            width={barWidth}
            height={point.reviewEventsHeight}
            rx={4}
            className={styles.reviewBar}
          >
            <title>
              {`${formatLongDate(locale, point.date)}: ${formatNumber(locale, point.reviewEvents)} ${reviewEventsLabel}, ${formatNumber(locale, point.uniqueUsers)} ${uniqueReviewersLabel}`}
            </title>
          </rect>
          <circle
            cx={point.centerX}
            cy={point.uniqueUsersY}
            r={3.5}
            className={styles.uniqueUsersPoint}
          >
            <title>
              {`${formatLongDate(locale, point.date)}: ${formatNumber(locale, point.uniqueUsers)} ${uniqueReviewersLabel}`}
            </title>
          </circle>
        </g>
      ))}

      <path d={createLinePath(points)} className={styles.uniqueUsersLine} />

      {tickDates.map((date) => {
        const point = points.find((currentPoint) => currentPoint.date === date);

        if (point === undefined) {
          return null;
        }

        return (
          <text
            key={`daily-date-${date}`}
            x={point.centerX}
            y={dailyChartHeight - 18}
            textAnchor="middle"
            className={styles.dateLabel}
          >
            {formatCompactDate(locale, date)}
          </text>
        );
      })}
    </svg>
  );
}

function PlatformActivityChart({
  ariaLabel,
  days,
  locale,
  platformLabels,
}: PlatformActivityChartProps): React.JSX.Element {
  const reviewEventTicks = createYAxisTicks(Math.max(...days.map((day) => day.reviewEvents.total), 1));
  const uniqueUserTicks = createYAxisTicks(Math.max(...days.map((day) => day.uniqueReviewingUsers), 1));
  const maxReviewEvents = getYAxisDomainMax(reviewEventTicks, "review events");
  const maxUniqueUsers = getYAxisDomainMax(uniqueUserTicks, "unique users");
  const points = createChartPoints(days, {
    reviewEventsMax: maxReviewEvents,
    uniqueUsersMax: maxUniqueUsers,
  });
  const tickDates = createTickDates(days);
  const barWidth = Math.max(
    8,
    ((dailyChartWidth - chartMargin.inlineStart - chartMargin.inlineEnd) / days.length) * 0.72,
  );

  return (
    <svg
      className={styles.chartSvg}
      viewBox={`0 0 ${dailyChartWidth} ${dailyChartHeight}`}
      role="img"
      aria-label={ariaLabel}
    >
      {reviewEventTicks.map((tick) => {
        const y = chartMargin.top + chartFrameHeight - ((tick / maxReviewEvents) * chartFrameHeight);

        return (
          <g key={`platform-grid-${tick}`}>
            <line
              x1={chartMargin.inlineStart}
              y1={y}
              x2={dailyChartWidth - chartMargin.inlineEnd}
              y2={y}
              className={styles.gridLine}
            />
            <text x={chartMargin.inlineStart - 10} y={y + 4} className={styles.axisLabelStart}>
              {formatNumber(locale, tick)}
            </text>
          </g>
        );
      })}

      {points.map((point, index) => {
        const day = days[index];

        if (day === undefined) {
          throw new Error(`Missing global activity snapshot day for chart index ${index}.`);
        }

        let previousOffset = 0;

        return (
          <g key={`platform-day-${point.date}`}>
            {globalActivityPlatforms.map((platform) => {
              const platformValue = day.reviewEvents.byPlatform[platform];
              const topOffset = point.stackedHeights[platform];
              const height = topOffset - previousOffset;
              const y = chartMargin.top + chartFrameHeight - topOffset;
              previousOffset = topOffset;

              if (height <= 0) {
                return null;
              }

              return (
                <rect
                  key={`${point.date}-${platform}`}
                  x={point.centerX - (barWidth / 2)}
                  y={y}
                  width={barWidth}
                  height={height}
                  rx={platform === "ios" ? 4 : 0}
                  fill={platformColors[platform]}
                >
                  <title>
                    {`${formatLongDate(locale, point.date)}: ${platformLabels[platform]} ${formatNumber(locale, platformValue)}`}
                  </title>
                </rect>
              );
            })}
          </g>
        );
      })}

      {tickDates.map((date) => {
        const point = points.find((currentPoint) => currentPoint.date === date);

        if (point === undefined) {
          return null;
        }

        return (
          <text
            key={`platform-date-${date}`}
            x={point.centerX}
            y={dailyChartHeight - 18}
            textAnchor="middle"
            className={styles.dateLabel}
          >
            {formatCompactDate(locale, date)}
          </text>
        );
      })}
    </svg>
  );
}

export function PublicActivitySection({
  locale,
  snapshot,
}: Readonly<{
  locale: AppLocale;
  snapshot: GlobalActivitySnapshot;
}>): React.JSX.Element {
  const uiCopy = getUiCopy(locale);
  const sourceLink = (
    <a
      href={globalActivitySnapshotUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.sourceLink}
    >
      {uiCopy.home.activity.sourceLabel}
    </a>
  );
  const peakDay = getPeakDay(snapshot.days);
  const platformLabels = uiCopy.home.activity.platformLabels;

  return (
    <section className={styles.section} aria-labelledby="public-activity-title">
      <div className={styles.sectionHeader}>
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>{uiCopy.home.activity.eyebrow}</p>
          <h2 id="public-activity-title" className={styles.title}>
            {uiCopy.home.activity.title}
          </h2>
          <p className={styles.description}>{uiCopy.home.activity.description}</p>
        </div>
        <div className={styles.headerActions}>{sourceLink}</div>
      </div>

      <div className={styles.metricGrid}>
        <MetricCard
          label={uiCopy.home.activity.totalReviewEventsLabel}
          value={formatNumber(locale, snapshot.totals.reviewEvents.total)}
          detail={`${formatLongDate(locale, snapshot.from)} - ${formatLongDate(locale, snapshot.to)}`}
        />
        <MetricCard
          label={uiCopy.home.activity.uniqueReviewersLabel}
          value={formatNumber(locale, snapshot.totals.uniqueReviewingUsers)}
          detail={uiCopy.home.activity.cumulativeLabel}
        />
        <MetricCard
          label={uiCopy.home.activity.peakDayLabel}
          value={formatNumber(locale, peakDay.reviewEvents.total)}
          detail={formatLongDate(locale, peakDay.date)}
        />
        <MetricCard
          label={uiCopy.home.activity.updatedLabel}
          value={formatTimestamp(locale, snapshot.generatedAtUtc)}
          detail={uiCopy.home.activity.utcLabel}
        />
      </div>

      <div className={styles.chartGrid}>
        <ChartShell
          title={uiCopy.home.activity.dailyActivityChartTitle}
          detail={
            <div className={styles.legendRow}>
              <span className={styles.legendItem}>
                <span
                  className={styles.legendSwatch}
                  style={{ backgroundColor: dailyReviewBarColor }}
                  aria-hidden="true"
                />
                <span>{uiCopy.home.activity.totalReviewEventsLabel}</span>
              </span>
              <span className={styles.legendItem}>
                <span className={styles.lineSwatch} aria-hidden="true" />
                <span>{uiCopy.home.activity.uniqueReviewersLabel}</span>
              </span>
            </div>
          }
        >
          <DailyActivityChart
            days={snapshot.days}
            locale={locale}
            reviewEventsLabel={uiCopy.home.activity.totalReviewEventsLabel}
            uniqueReviewersLabel={uiCopy.home.activity.uniqueReviewersLabel}
          />
        </ChartShell>

        <ChartShell
          title={uiCopy.home.activity.platformActivityChartTitle}
          detail={
            <div className={styles.legendRow}>
              {globalActivityPlatforms.map((platform) => (
                <PlatformSummary
                  key={platform}
                  label={platformLabels[platform]}
                  platform={platform}
                  value={snapshot.totals.reviewEvents.byPlatform[platform]}
                  locale={locale}
                />
              ))}
            </div>
          }
        >
          <PlatformActivityChart
            ariaLabel={uiCopy.home.activity.platformActivityChartTitle}
            days={snapshot.days}
            locale={locale}
            platformLabels={platformLabels}
          />
        </ChartShell>
      </div>
    </section>
  );
}
