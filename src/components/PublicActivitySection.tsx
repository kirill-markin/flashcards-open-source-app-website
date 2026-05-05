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
}>;

type ChartShellProps = Readonly<{
  title: string;
  titleTag: ChartTitleTag;
  description: string;
  aside: React.ReactNode | null;
  children: React.ReactNode;
}>;

type ChartAxesProps = Readonly<{
  ticks: ReadonlyArray<number>;
  maxValue: number;
  locale: AppLocale;
  xAxisLabel: string;
  yAxisLabel: string;
}>;

type ChartDateLabelsProps = Readonly<{
  points: ReadonlyArray<DatedChartPoint>;
  dates: ReadonlyArray<string>;
  locale: AppLocale;
}>;

type ChartTooltipProps = Readonly<{
  lines: ReadonlyArray<string>;
  layout: ChartTooltipLayout;
}>;

type ChartTooltipLayout = Readonly<{
  height: number;
  width: number;
  x: number;
  y: number;
}>;

type TooltipHitBox = Readonly<{
  height: number;
  y: number;
}>;

type DailyUniqueUsersChartProps = Readonly<{
  ariaLabel: string;
  cohortLabels: ReviewUserCohortLabels;
  days: ReadonlyArray<GlobalActivitySnapshotDay>;
  locale: AppLocale;
  totalReviewEventsLabel: string;
  totalUniqueUsersLabel: string;
  xAxisLabel: string;
  yAxisLabel: string;
}>;

type PlatformActivityChartProps = Readonly<{
  ariaLabel: string;
  days: ReadonlyArray<GlobalActivitySnapshotDay>;
  locale: AppLocale;
  platformLabels: PlatformLabels;
  reviewEventsLabel: string;
  xAxisLabel: string;
  yAxisLabel: string;
}>;

type PublicActivityChartsProps = Readonly<{
  chartTitleTag: ChartTitleTag;
  locale: AppLocale;
  snapshot: GlobalActivitySnapshot;
}>;

type LegendItemProps = Readonly<{
  color: string;
  label: string;
}>;

type DatedChartPoint = Readonly<{
  date: string;
  centerX: number;
}>;

type ChartTitleTag = "h2" | "h3";

type ReviewUserCohort = "returning" | "new";

type ReviewUserCohortLabels = Readonly<Record<ReviewUserCohort, string>>;

type DailyUniqueUserSegment = Readonly<{
  cohort: ReviewUserCohort;
  height: number;
  isTop: boolean;
  value: number;
  y: number;
}>;

type DailyUniqueUserChartPoint = DatedChartPoint & Readonly<{
  segments: ReadonlyArray<DailyUniqueUserSegment>;
  totalReviewEvents: number;
  totalUniqueUsers: number;
}>;

type DailyUniqueUserSegmentBase = Omit<DailyUniqueUserSegment, "isTop">;

type StackedBarSegment = Readonly<{
  height: number;
  isTop: boolean;
  platform: GlobalActivityPlatform;
  value: number;
  y: number;
}>;

type StackedBarChartPoint = DatedChartPoint & Readonly<{
  segments: ReadonlyArray<StackedBarSegment>;
  total: number;
}>;

type StackedBarSegmentBase = Omit<StackedBarSegment, "isTop">;

type PlatformLabels = Readonly<Record<GlobalActivityPlatform, string>>;

const reviewUserCohorts = ["returning", "new"] as const;
const chartWidth = 920;
const chartHeight = 360;
const chartMargin = {
  top: 24,
  inlineEnd: 54,
  bottom: 78,
  inlineStart: 64,
} as const;
const chartFrameHeight = chartHeight - chartMargin.top - chartMargin.bottom;
const uniqueUsersTooltipWidth = 300;
const platformTooltipWidth = 218;
const chartTooltipPaddingBlock = 8;
const chartTooltipLineHeight = 16;
const minTooltipHitHeight = 10;
const reviewUserCohortColors: Readonly<Record<ReviewUserCohort, string>> = {
  returning: "#c44b2d",
  new: "#4e79a7",
};
const platformColors: Readonly<Record<GlobalActivityPlatform, string>> = {
  web: "#4e79a7",
  android: "#59a14f",
  ios: "#f28e2b",
};

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

function getMaxDailyValue(
  days: ReadonlyArray<GlobalActivitySnapshotDay>,
  getValue: (day: GlobalActivitySnapshotDay) => number,
  label: string,
): number {
  const [firstDay] = days;

  if (firstDay === undefined) {
    throw new Error(`Global activity snapshot days must not be empty when calculating ${label}.`);
  }

  return days.reduce<number>(
    (maxValue, day) => Math.max(maxValue, getValue(day)),
    getValue(firstDay),
  );
}

function createYAxisTicks(maxValue: number, targetTickCount: number): ReadonlyArray<number> {
  if (targetTickCount <= 0) {
    throw new Error(`Target tick count must be positive. targetTickCount=${targetTickCount}.`);
  }

  if (maxValue <= 0) {
    return [0, 1];
  }

  const rawStep = maxValue / targetTickCount;
  const magnitude = 10 ** Math.floor(Math.log10(rawStep));
  const normalizedStep = rawStep / magnitude;

  let step = 10 * magnitude;

  if (normalizedStep <= 1) {
    step = magnitude;
  } else if (normalizedStep <= 2) {
    step = 2 * magnitude;
  } else if (normalizedStep <= 5) {
    step = 5 * magnitude;
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
  const maxTickCount = 14;

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

function getChartInnerWidth(): number {
  return chartWidth - chartMargin.inlineStart - chartMargin.inlineEnd;
}

function getChartBottomY(): number {
  return chartMargin.top + chartFrameHeight;
}

function getChartBarWidth(days: ReadonlyArray<GlobalActivitySnapshotDay>): number {
  const step = getChartInnerWidth() / days.length;

  return Math.max(8, Math.min(28, step * 0.72));
}

function getChartPointCenterX(index: number, days: ReadonlyArray<GlobalActivitySnapshotDay>): number {
  const step = getChartInnerWidth() / days.length;

  return chartMargin.inlineStart + (step * index) + (step / 2);
}

function getBarHeight(value: number, maxValue: number): number {
  return (value / maxValue) * chartFrameHeight;
}

function getBarY(height: number): number {
  return chartMargin.top + chartFrameHeight - height;
}

function createTooltipLayout(
  centerX: number,
  anchorY: number,
  lineCount: number,
  width: number,
): ChartTooltipLayout {
  if (lineCount <= 0) {
    throw new Error(`Tooltip line count must be positive. lineCount=${lineCount}.`);
  }

  const height = (chartTooltipPaddingBlock * 2) + (lineCount * chartTooltipLineHeight);
  const minX = chartMargin.inlineStart + 8;
  const maxX = chartWidth - chartMargin.inlineEnd - width - 8;
  const minY = chartMargin.top + 6;
  const maxY = getChartBottomY() - height - 8;
  const aboveY = anchorY - height - 10;
  const preferredY = aboveY >= minY ? aboveY : anchorY + 12;

  return {
    height,
    width,
    x: Math.min(maxX, Math.max(minX, centerX - (width / 2))),
    y: Math.min(maxY, Math.max(minY, preferredY)),
  };
}

function createTooltipHitBox(y: number, height: number): TooltipHitBox {
  const resolvedHeight = Math.max(height, minTooltipHitHeight);
  const resolvedY = y - ((resolvedHeight - height) / 2);
  const maxY = getChartBottomY() - resolvedHeight;

  return {
    height: resolvedHeight,
    y: Math.min(maxY, Math.max(chartMargin.top, resolvedY)),
  };
}

function createTopRoundedRectPath(
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
): string {
  const cornerRadius = Math.min(radius, width / 2, height);
  const rightX = x + width;
  const bottomY = y + height;

  if (cornerRadius <= 0) {
    return `M ${x} ${y} H ${rightX} V ${bottomY} H ${x} Z`;
  }

  return [
    `M ${x} ${y + cornerRadius}`,
    `Q ${x} ${y} ${x + cornerRadius} ${y}`,
    `H ${rightX - cornerRadius}`,
    `Q ${rightX} ${y} ${rightX} ${y + cornerRadius}`,
    `V ${bottomY}`,
    `H ${x}`,
    "Z",
  ].join(" ");
}

function getReviewUserCohortValue(day: GlobalActivitySnapshotDay, cohort: ReviewUserCohort): number {
  switch (cohort) {
    case "new":
      return day.newReviewingUsers;
    case "returning":
      return day.returningReviewingUsers;
  }
}

function createDailyUniqueUserSegments(
  day: GlobalActivitySnapshotDay,
  maxUniqueUsers: number,
): ReadonlyArray<DailyUniqueUserSegment> {
  let stackedHeight = 0;
  const segmentBases: Array<DailyUniqueUserSegmentBase> = [];

  for (const cohort of reviewUserCohorts) {
    const value = getReviewUserCohortValue(day, cohort);
    const height = getBarHeight(value, maxUniqueUsers);
    const y = getBarY(stackedHeight + height);

    stackedHeight += height;
    segmentBases.push({
      cohort,
      height,
      value,
      y,
    });
  }

  const visibleSegmentBases = segmentBases.filter((segment) => segment.height > 0);

  return visibleSegmentBases.map((segment, index) => ({
    ...segment,
    isTop: index === visibleSegmentBases.length - 1,
  }));
}

function createDailyUniqueUserPoints(
  days: ReadonlyArray<GlobalActivitySnapshotDay>,
  maxUniqueUsers: number,
): ReadonlyArray<DailyUniqueUserChartPoint> {
  return days.map((day, index) => ({
    date: day.date,
    centerX: getChartPointCenterX(index, days),
    segments: createDailyUniqueUserSegments(day, maxUniqueUsers),
    totalReviewEvents: day.reviewEvents.total,
    totalUniqueUsers: day.uniqueReviewingUsers,
  }));
}

function createStackedBarSegments(
  day: GlobalActivitySnapshotDay,
  maxReviewEvents: number,
): ReadonlyArray<StackedBarSegment> {
  let stackedHeight = 0;
  const segmentBases: Array<StackedBarSegmentBase> = [];

  for (const platform of globalActivityPlatforms) {
    const value = day.reviewEvents.byPlatform[platform];
    const height = getBarHeight(value, maxReviewEvents);
    const y = getBarY(stackedHeight + height);

    stackedHeight += height;
    segmentBases.push({
      height,
      platform,
      value,
      y,
    });
  }

  const visibleSegmentBases = segmentBases.filter((segment) => segment.height > 0);

  return visibleSegmentBases.map((segment, index) => ({
    ...segment,
    isTop: index === visibleSegmentBases.length - 1,
  }));
}

function createPlatformReviewEventPoints(
  days: ReadonlyArray<GlobalActivitySnapshotDay>,
  maxReviewEvents: number,
): ReadonlyArray<StackedBarChartPoint> {
  return days.map((day, index) => ({
    date: day.date,
    centerX: getChartPointCenterX(index, days),
    segments: createStackedBarSegments(day, maxReviewEvents),
    total: day.reviewEvents.total,
  }));
}

function MetricCard({
  label,
  value,
}: MetricCardProps): React.JSX.Element {
  return (
    <div className={styles.metricCard}>
      <p className={styles.metricLabel}>{label}</p>
      <p className={styles.metricValue}>{value}</p>
    </div>
  );
}

function ChartShell({
  title,
  titleTag,
  description,
  aside,
  children,
}: ChartShellProps): React.JSX.Element {
  const chartTitle = titleTag === "h2"
    ? <h2 className={styles.chartTitle}>{title}</h2>
    : <h3 className={styles.chartTitle}>{title}</h3>;

  return (
    <article className={styles.chartShell}>
      <div className={styles.chartMeta}>
        <div className={styles.chartText}>
          {chartTitle}
          <p className={styles.chartDescription}>{description}</p>
        </div>
        {aside === null ? null : <div className={styles.chartDetail}>{aside}</div>}
      </div>
      <div className={styles.chartCanvas}>{children}</div>
    </article>
  );
}

function ChartTooltip({
  lines,
  layout,
}: ChartTooltipProps): React.JSX.Element {
  return (
    <g className={styles.chartTooltip} aria-hidden="true">
      <rect
        x={layout.x}
        y={layout.y}
        width={layout.width}
        height={layout.height}
        rx={8}
        className={styles.chartTooltipBox}
      />
      {lines.map((line, index) => (
        <text
          key={`tooltip-line-${index}`}
          x={layout.x + 12}
          y={layout.y + chartTooltipPaddingBlock + 12 + (index * chartTooltipLineHeight)}
          className={index === 0 ? styles.chartTooltipDate : styles.chartTooltipValue}
        >
          {line}
        </text>
      ))}
    </g>
  );
}

function ChartAxes({
  ticks,
  maxValue,
  locale,
  xAxisLabel,
  yAxisLabel,
}: ChartAxesProps): React.JSX.Element {
  const leftX = chartMargin.inlineStart;
  const rightX = chartWidth - chartMargin.inlineEnd;
  const bottomY = getChartBottomY();
  const yAxisTitleX = 18;
  const yAxisTitleY = chartMargin.top + (chartFrameHeight / 2);

  return (
    <>
      {ticks.map((tick) => {
        const y = chartMargin.top + chartFrameHeight - ((tick / maxValue) * chartFrameHeight);

        return (
          <g key={`axis-tick-${tick}`}>
            <line
              x1={leftX}
              y1={y}
              x2={rightX}
              y2={y}
              className={styles.gridLine}
            />
            <text x={leftX - 10} y={y + 4} className={styles.axisLabelStart}>
              {formatNumber(locale, tick)}
            </text>
            <text x={rightX + 10} y={y + 4} className={styles.axisLabelEnd}>
              {formatNumber(locale, tick)}
            </text>
          </g>
        );
      })}

      <line x1={leftX} y1={chartMargin.top} x2={leftX} y2={bottomY} className={styles.axisLine} />
      <line x1={rightX} y1={chartMargin.top} x2={rightX} y2={bottomY} className={styles.axisLine} />
      <line x1={leftX} y1={bottomY} x2={rightX} y2={bottomY} className={styles.axisLine} />
      <text
        x={yAxisTitleX}
        y={yAxisTitleY}
        className={styles.yAxisTitle}
        transform={`rotate(-90 ${yAxisTitleX} ${yAxisTitleY})`}
      >
        {yAxisLabel}
      </text>
      <text x={chartWidth / 2} y={chartHeight - 12} className={styles.xAxisTitle}>
        {xAxisLabel}
      </text>
    </>
  );
}

function ChartDateLabels({
  points,
  dates,
  locale,
}: ChartDateLabelsProps): React.JSX.Element {
  const labelY = chartHeight - 42;

  return (
    <>
      {dates.map((date) => {
        const point = points.find((currentPoint) => currentPoint.date === date);

        if (point === undefined) {
          return null;
        }

        return (
          <text
            key={`date-${date}`}
            x={point.centerX}
            y={labelY}
            className={styles.dateLabel}
            textAnchor="end"
            transform={`rotate(-35 ${point.centerX} ${labelY})`}
          >
            {formatCompactDate(locale, date)}
          </text>
        );
      })}
    </>
  );
}

function DailyUniqueUsersChart({
  ariaLabel,
  cohortLabels,
  days,
  locale,
  totalReviewEventsLabel,
  totalUniqueUsersLabel,
  xAxisLabel,
  yAxisLabel,
}: DailyUniqueUsersChartProps): React.JSX.Element {
  const ticks = createYAxisTicks(
    getMaxDailyValue(days, (day) => day.uniqueReviewingUsers, "peak daily unique users"),
    7,
  );
  const maxUniqueUsers = getYAxisDomainMax(ticks, "unique users");
  const points = createDailyUniqueUserPoints(days, maxUniqueUsers);
  const tickDates = createTickDates(days);
  const barWidth = getChartBarWidth(days);

  return (
    <svg
      className={styles.chartSvg}
      viewBox={`0 0 ${chartWidth} ${chartHeight}`}
      role="img"
      aria-label={ariaLabel}
    >
      <ChartAxes
        ticks={ticks}
        maxValue={maxUniqueUsers}
        locale={locale}
        xAxisLabel={xAxisLabel}
        yAxisLabel={yAxisLabel}
      />

      {points.map((point) => (
        <g key={`unique-users-day-${point.date}`}>
          {point.segments.map((segment) => {
            const segmentX = point.centerX - (barWidth / 2);
            const title = `${formatLongDate(locale, point.date)}: ${cohortLabels[segment.cohort]} ${formatNumber(locale, segment.value)} ${yAxisLabel}`;

            if (segment.isTop) {
              return (
                <path
                  key={`${point.date}-${segment.cohort}`}
                  d={createTopRoundedRectPath(segmentX, segment.y, barWidth, segment.height, 4)}
                  fill={reviewUserCohortColors[segment.cohort]}
                >
                  <title>{title}</title>
                </path>
              );
            }

            return (
              <rect
                key={`${point.date}-${segment.cohort}`}
                x={segmentX}
                y={segment.y}
                width={barWidth}
                height={segment.height}
                fill={reviewUserCohortColors[segment.cohort]}
              >
                <title>{title}</title>
              </rect>
            );
          })}
        </g>
      ))}

      <ChartDateLabels points={points} dates={tickDates} locale={locale} />

      {points.map((point) => (
        <g key={`unique-users-tooltip-day-${point.date}`}>
          {point.segments.map((segment) => {
            const segmentX = point.centerX - (barWidth / 2);
            const hitBox = createTooltipHitBox(segment.y, segment.height);
            const tooltipLines = [
              formatLongDate(locale, point.date),
              `${cohortLabels[segment.cohort]}: ${formatNumber(locale, segment.value)} ${yAxisLabel}`,
              `${totalUniqueUsersLabel}: ${formatNumber(locale, point.totalUniqueUsers)}`,
              `${totalReviewEventsLabel}: ${formatNumber(locale, point.totalReviewEvents)}`,
            ] as const;

            return (
              <g
                key={`unique-users-tooltip-${point.date}-${segment.cohort}`}
                className={styles.tooltipTarget}
              >
                <rect
                  x={segmentX}
                  y={hitBox.y}
                  width={barWidth}
                  height={hitBox.height}
                  className={styles.tooltipHitArea}
                >
                  <title>{tooltipLines.join(": ")}</title>
                </rect>
                <ChartTooltip
                  lines={tooltipLines}
                  layout={createTooltipLayout(
                    point.centerX,
                    segment.y,
                    tooltipLines.length,
                    uniqueUsersTooltipWidth,
                  )}
                />
              </g>
            );
          })}
        </g>
      ))}
    </svg>
  );
}

function LegendItem({
  color,
  label,
}: LegendItemProps): React.JSX.Element {
  return (
    <span className={styles.legendItem}>
      <span
        className={styles.legendSwatch}
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      <span>{label}</span>
    </span>
  );
}

function PlatformActivityChart({
  ariaLabel,
  days,
  locale,
  platformLabels,
  reviewEventsLabel,
  xAxisLabel,
  yAxisLabel,
}: PlatformActivityChartProps): React.JSX.Element {
  const ticks = createYAxisTicks(
    getMaxDailyValue(days, (day) => day.reviewEvents.total, "peak daily review events"),
    9,
  );
  const maxReviewEvents = getYAxisDomainMax(ticks, "review events");
  const points = createPlatformReviewEventPoints(days, maxReviewEvents);
  const tickDates = createTickDates(days);
  const barWidth = getChartBarWidth(days);

  return (
    <svg
      className={styles.chartSvg}
      viewBox={`0 0 ${chartWidth} ${chartHeight}`}
      role="img"
      aria-label={ariaLabel}
    >
      <ChartAxes
        ticks={ticks}
        maxValue={maxReviewEvents}
        locale={locale}
        xAxisLabel={xAxisLabel}
        yAxisLabel={yAxisLabel}
      />

      {points.map((point) => (
        <g key={`platform-day-${point.date}`}>
          {point.segments.map((segment) => {
            const segmentX = point.centerX - (barWidth / 2);
            const title = `${formatLongDate(locale, point.date)}: ${platformLabels[segment.platform]} ${formatNumber(locale, segment.value)} ${reviewEventsLabel}`;

            if (segment.isTop) {
              return (
                <path
                  key={`${point.date}-${segment.platform}`}
                  d={createTopRoundedRectPath(segmentX, segment.y, barWidth, segment.height, 4)}
                  fill={platformColors[segment.platform]}
                >
                  <title>{title}</title>
                </path>
              );
            }

            return (
              <rect
                key={`${point.date}-${segment.platform}`}
                x={segmentX}
                y={segment.y}
                width={barWidth}
                height={segment.height}
                fill={platformColors[segment.platform]}
              >
                <title>{title}</title>
              </rect>
            );
          })}
        </g>
      ))}

      <ChartDateLabels points={points} dates={tickDates} locale={locale} />

      {points.map((point) => (
        <g key={`platform-tooltip-day-${point.date}`}>
          {point.segments.map((segment) => {
            const segmentX = point.centerX - (barWidth / 2);
            const hitBox = createTooltipHitBox(segment.y, segment.height);
            const tooltipLines = [
              formatLongDate(locale, point.date),
              `${platformLabels[segment.platform]}: ${formatNumber(locale, segment.value)} ${reviewEventsLabel}`,
              `${formatNumber(locale, point.total)} ${reviewEventsLabel}`,
            ] as const;

            return (
              <g
                key={`platform-tooltip-${point.date}-${segment.platform}`}
                className={styles.tooltipTarget}
              >
                <rect
                  x={segmentX}
                  y={hitBox.y}
                  width={barWidth}
                  height={hitBox.height}
                  className={styles.tooltipHitArea}
                >
                  <title>{tooltipLines.join(": ")}</title>
                </rect>
                <ChartTooltip
                  lines={tooltipLines}
                  layout={createTooltipLayout(
                    point.centerX,
                    segment.y,
                    tooltipLines.length,
                    platformTooltipWidth,
                  )}
                />
              </g>
            );
          })}
        </g>
      ))}
    </svg>
  );
}

export function PublicActivityCharts({
  chartTitleTag,
  locale,
  snapshot,
}: PublicActivityChartsProps): React.JSX.Element {
  const activityCopy = getUiCopy(locale).home.activity;
  const platformLabels = activityCopy.platformLabels;
  const cohortLabels = activityCopy.reviewUserCohortLabels;

  return (
    <div className={styles.chartGrid}>
      <ChartShell
        title={activityCopy.dailyUniqueUsersChartTitle}
        titleTag={chartTitleTag}
        description={activityCopy.dailyUniqueUsersChartDescription}
        aside={
          <div className={styles.legendRow}>
            {reviewUserCohorts.map((cohort) => (
              <LegendItem
                key={cohort}
                color={reviewUserCohortColors[cohort]}
                label={cohortLabels[cohort]}
              />
            ))}
          </div>
        }
      >
        <DailyUniqueUsersChart
          ariaLabel={activityCopy.dailyUniqueUsersChartTitle}
          cohortLabels={cohortLabels}
          days={snapshot.days}
          locale={locale}
          totalReviewEventsLabel={activityCopy.totalReviewEventsLabel}
          totalUniqueUsersLabel={activityCopy.usersWithReviewEventsLabel}
          xAxisLabel={activityCopy.reviewDateAxisLabel}
          yAxisLabel={activityCopy.uniqueUsersAxisLabel}
        />
      </ChartShell>

      <ChartShell
        title={activityCopy.platformActivityChartTitle}
        titleTag={chartTitleTag}
        description={activityCopy.platformActivityChartDescription}
        aside={
          <div className={styles.legendRow}>
            {globalActivityPlatforms.map((platform) => (
              <LegendItem
                key={platform}
                color={platformColors[platform]}
                label={platformLabels[platform]}
              />
            ))}
          </div>
        }
      >
        <PlatformActivityChart
          ariaLabel={activityCopy.platformActivityChartTitle}
          days={snapshot.days}
          locale={locale}
          platformLabels={platformLabels}
          reviewEventsLabel={activityCopy.reviewEventsAxisLabel}
          xAxisLabel={activityCopy.reviewDateAxisLabel}
          yAxisLabel={activityCopy.reviewEventsAxisLabel}
        />
      </ChartShell>
    </div>
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
  const activityCopy = uiCopy.home.activity;
  const sourceLink = (
    <a
      href={globalActivitySnapshotUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.sourceLink}
    >
      {activityCopy.sourceLabel}
    </a>
  );
  const peakDailyReviewEvents = getMaxDailyValue(
    snapshot.days,
    (day) => day.reviewEvents.total,
    "peak daily review events",
  );
  const peakDailyUniqueUsers = getMaxDailyValue(
    snapshot.days,
    (day) => day.uniqueReviewingUsers,
    "peak daily unique users",
  );

  return (
    <section className={styles.section} aria-labelledby="public-activity-title">
      <div className={styles.sectionHeader}>
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>{activityCopy.eyebrow}</p>
          <h2 id="public-activity-title" className={styles.title}>
            {activityCopy.title}
          </h2>
          <p className={styles.description}>{activityCopy.description}</p>
        </div>
        <div className={styles.headerActions}>{sourceLink}</div>
      </div>

      <div className={styles.metricGrid}>
        <MetricCard
          label={activityCopy.totalReviewEventsLabel}
          value={formatNumber(locale, snapshot.totals.reviewEvents.total)}
        />
        <MetricCard
          label={activityCopy.usersWithReviewEventsLabel}
          value={formatNumber(locale, snapshot.totals.uniqueReviewingUsers)}
        />
        <MetricCard
          label={activityCopy.daysInRangeLabel}
          value={formatNumber(locale, snapshot.days.length)}
        />
        <MetricCard
          label={activityCopy.peakDailyVolumeLabel}
          value={formatNumber(locale, peakDailyReviewEvents)}
        />
        <MetricCard
          label={activityCopy.peakDailyUniqueUsersLabel}
          value={formatNumber(locale, peakDailyUniqueUsers)}
        />
      </div>

      <PublicActivityCharts
        chartTitleTag="h3"
        locale={locale}
        snapshot={snapshot}
      />
    </section>
  );
}
