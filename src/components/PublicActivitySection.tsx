import type { AppLocale } from "@/lib/i18n";
import {
  globalActivityPlatforms,
  globalActivitySnapshotUrl,
  type GlobalActivityPlatform,
  type GlobalActivitySnapshot,
  type GlobalActivitySnapshotDay,
} from "@/lib/globalActivitySnapshot";
import {
  formatActivityDateRange,
  formatActivityNumber as formatNumber,
  formatActivityTimestamp,
} from "@/lib/activityFormatting";
import { getExternalLinkAttributes } from "@/lib/linkTargets";
import { getIntlLocale } from "@/lib/localeConfig";
import { getUiCopy } from "@/lib/uiCopy";
import { ActivityChartScroller } from "./ActivityChartScroller";
import { ChartTooltipLayer, type ChartTooltipTarget } from "./ChartTooltipLayer";
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

type ChartFrameProps = Readonly<{
  ariaLabel: string;
  children: React.ReactNode;
  dateLabels: React.ReactNode;
  latestDate: string;
  locale: AppLocale;
  maxValue: number;
  minimumPlotWidth: number;
  ticks: ReadonlyArray<number>;
  tooltipTargets: ReadonlyArray<ChartTooltipTarget>;
  xAxisLabel: string;
  yAxisLabel: string;
}>;

type ChartGridProps = Readonly<{
  ticks: ReadonlyArray<number>;
  maxValue: number;
}>;

type ChartBarLayerProps = Readonly<{
  barWidthRatio: number;
  segments: ReadonlyArray<ChartBarSegmentView>;
}>;

type ChartYAxisProps = Readonly<{
  locale: AppLocale;
  maxValue: number;
  side: ChartYAxisSide;
  ticks: ReadonlyArray<number>;
  yAxisLabel: string;
}>;

type ChartDateLabelsProps = Readonly<{
  points: ReadonlyArray<DatedChartPoint>;
  dates: ReadonlyArray<string>;
  locale: AppLocale;
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

type PublicActivitySummaryProps = Readonly<{
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

// Bars are HTML instead of SVG so the width cap and the corner radius stay real
// pixels: the plot SVG is stretched horizontally by `preserveAspectRatio="none"`.
// X is a ratio of the plot width, Y is in pixels because the plot surface has a
// fixed block size and therefore a vertical scale of exactly 1. The bars are
// purely visual; the per-day text lives on the tooltip hit targets above them.
type ChartBarSegmentView = Readonly<{
  key: string;
  centerRatio: number;
  topPx: number;
  heightPx: number;
  color: string;
  isTop: boolean;
}>;

type ChartTitleTag = "h2" | "h3";

type ChartYAxisSide = "end" | "start";

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

type DailyUniqueUserTooltipTargetsInput = Readonly<{
  cohortLabels: ReviewUserCohortLabels;
  locale: AppLocale;
  points: ReadonlyArray<DailyUniqueUserChartPoint>;
  tooltipHitWidth: number;
  totalReviewEventsLabel: string;
  totalUniqueUsersLabel: string;
  yAxisLabel: string;
}>;

type PlatformTooltipTargetsInput = Readonly<{
  locale: AppLocale;
  platformLabels: PlatformLabels;
  points: ReadonlyArray<StackedBarChartPoint>;
  reviewEventsLabel: string;
  tooltipHitWidth: number;
}>;

const reviewUserCohorts = ["returning", "new"] as const;
const chartWidth = 920;
const chartHeight = 360;
const chartMargin = {
  top: 24,
  inlineEnd: 54,
  bottom: 78,
  inlineStart: 64,
} as const;
const chartXAxisTitleHeight = 28;
const chartPlotWidth = chartWidth - chartMargin.inlineStart - chartMargin.inlineEnd;
const chartPlotHeight = chartHeight - chartXAxisTitleHeight;
const chartFrameHeight = chartHeight - chartMargin.top - chartMargin.bottom;
const minimumChartDaySlotSize = 5;
const minimumChartPlotWidth = 660;
const startDateLabelInset = 10;
const minTooltipHitHeight = 10;
const chartBarMaxWidth = "28px";
const chartBarSlotFill = 0.72;
const chartBarTopRadius = "4px";
const chartBarSquareRadius = "0";
const reviewUserCohortColors: Readonly<Record<ReviewUserCohort, string>> = {
  returning: "#c44b2d",
  new: "#4e79a7",
};
const platformColors: Readonly<Record<GlobalActivityPlatform, string>> = {
  web: "#4e79a7",
  android: "#59a14f",
  ios: "#f28e2b",
};

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

function getChartDayStep(days: ReadonlyArray<GlobalActivitySnapshotDay>): number {
  return chartPlotWidth / days.length;
}

function getChartMinimumPlotWidth(days: ReadonlyArray<GlobalActivitySnapshotDay>): number {
  return Math.max(minimumChartPlotWidth, days.length * minimumChartDaySlotSize);
}

function getLatestChartDate(
  days: ReadonlyArray<GlobalActivitySnapshotDay>,
  label: string,
): string {
  const latestDay = days[days.length - 1];

  if (latestDay === undefined) {
    throw new Error(`Global activity snapshot days must not be empty when rendering ${label}.`);
  }

  return latestDay.date;
}

function getChartBottomY(): number {
  return chartMargin.top + chartFrameHeight;
}

function getChartBarWidthRatio(days: ReadonlyArray<GlobalActivitySnapshotDay>): number {
  return (getChartDayStep(days) * chartBarSlotFill) / chartPlotWidth;
}

function getTooltipHitWidth(days: ReadonlyArray<GlobalActivitySnapshotDay>): number {
  return Math.min(28, getChartDayStep(days));
}

function getChartPointCenterX(index: number, days: ReadonlyArray<GlobalActivitySnapshotDay>): number {
  const step = getChartDayStep(days);

  return (step * index) + (step / 2);
}

function getBarHeight(value: number, maxValue: number): number {
  return (value / maxValue) * chartFrameHeight;
}

function getBarY(height: number): number {
  return chartMargin.top + chartFrameHeight - height;
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

function createDailyUniqueUserBarSegments(
  points: ReadonlyArray<DailyUniqueUserChartPoint>,
): ReadonlyArray<ChartBarSegmentView> {
  return points.flatMap((point) => point.segments.map((segment) => ({
    key: `unique-users-bar-${point.date}-${segment.cohort}`,
    centerRatio: point.centerX / chartPlotWidth,
    topPx: segment.y,
    heightPx: segment.height,
    color: reviewUserCohortColors[segment.cohort],
    isTop: segment.isTop,
  })));
}

function createDailyUniqueUserTooltipTargets({
  cohortLabels,
  locale,
  points,
  tooltipHitWidth,
  totalReviewEventsLabel,
  totalUniqueUsersLabel,
  yAxisLabel,
}: DailyUniqueUserTooltipTargetsInput): ReadonlyArray<ChartTooltipTarget> {
  return points.flatMap((point) => point.segments.map((segment) => {
    const hitBox = createTooltipHitBox(segment.y, segment.height);

    return {
      key: `unique-users-tooltip-${point.date}-${segment.cohort}`,
      lines: [
        formatLongDate(locale, point.date),
        `${cohortLabels[segment.cohort]}: ${formatNumber(locale, segment.value)} ${yAxisLabel}`,
        `${totalUniqueUsersLabel}: ${formatNumber(locale, point.totalUniqueUsers)}`,
        `${totalReviewEventsLabel}: ${formatNumber(locale, point.totalReviewEvents)}`,
      ],
      leftRatio: (point.centerX - (tooltipHitWidth / 2)) / chartPlotWidth,
      widthRatio: tooltipHitWidth / chartPlotWidth,
      topPx: hitBox.y,
      heightPx: hitBox.height,
    };
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

function createPlatformBarSegments(
  points: ReadonlyArray<StackedBarChartPoint>,
): ReadonlyArray<ChartBarSegmentView> {
  return points.flatMap((point) => point.segments.map((segment) => ({
    key: `platform-bar-${point.date}-${segment.platform}`,
    centerRatio: point.centerX / chartPlotWidth,
    topPx: segment.y,
    heightPx: segment.height,
    color: platformColors[segment.platform],
    isTop: segment.isTop,
  })));
}

function createPlatformTooltipTargets({
  locale,
  platformLabels,
  points,
  reviewEventsLabel,
  tooltipHitWidth,
}: PlatformTooltipTargetsInput): ReadonlyArray<ChartTooltipTarget> {
  return points.flatMap((point) => point.segments.map((segment) => {
    const hitBox = createTooltipHitBox(segment.y, segment.height);

    return {
      key: `platform-tooltip-${point.date}-${segment.platform}`,
      lines: [
        formatLongDate(locale, point.date),
        `${platformLabels[segment.platform]}: ${formatNumber(locale, segment.value)} ${reviewEventsLabel}`,
        `${formatNumber(locale, point.total)} ${reviewEventsLabel}`,
      ],
      leftRatio: (point.centerX - (tooltipHitWidth / 2)) / chartPlotWidth,
      widthRatio: tooltipHitWidth / chartPlotWidth,
      topPx: hitBox.y,
      heightPx: hitBox.height,
    };
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

function ActivityTotalMetricCards({
  locale,
  snapshot,
}: PublicActivitySummaryProps): React.JSX.Element {
  const activityCopy = getUiCopy(locale).home.activity;

  return (
    <>
      <MetricCard
        label={activityCopy.totalReviewEventsLabel}
        value={formatNumber(locale, snapshot.totals.reviewEvents.total)}
      />
      <MetricCard
        label={activityCopy.usersWithReviewEventsLabel}
        value={formatNumber(locale, snapshot.totals.uniqueReviewingUsers)}
      />
    </>
  );
}

export function PublicActivitySummary({
  locale,
  snapshot,
}: PublicActivitySummaryProps): React.JSX.Element {
  const activityCopy = getUiCopy(locale).home.activity;

  return (
    <div className={styles.summary}>
      <div className={styles.summaryTotals}>
        <ActivityTotalMetricCards locale={locale} snapshot={snapshot} />
      </div>
      <dl className={styles.summaryMetadata}>
        <div className={styles.summaryMetadataItem}>
          <dt className={styles.summaryMetadataLabel}>
            {activityCopy.dateRangeLabel}
          </dt>
          <dd className={styles.summaryMetadataValue}>
            {formatActivityDateRange(locale, snapshot.from, snapshot.to)}
          </dd>
        </div>
        <div className={styles.summaryMetadataItem}>
          <dt className={styles.summaryMetadataLabel}>
            {activityCopy.lastUpdatedLabel}
          </dt>
          <dd className={styles.summaryMetadataValue}>
            {formatActivityTimestamp(locale, snapshot.generatedAtUtc)}
          </dd>
        </div>
      </dl>
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

function ChartGrid({
  ticks,
  maxValue,
}: ChartGridProps): React.JSX.Element {
  const bottomY = getChartBottomY();

  return (
    <>
      {ticks.map((tick) => {
        const y = chartMargin.top + chartFrameHeight - ((tick / maxValue) * chartFrameHeight);

        return (
          <line
            key={`grid-line-${tick}`}
            x1={0}
            y1={y}
            x2={chartPlotWidth}
            y2={y}
            className={styles.gridLine}
          />
        );
      })}

      <line
        x1={0}
        y1={bottomY}
        x2={chartPlotWidth}
        y2={bottomY}
        className={styles.axisLine}
      />
    </>
  );
}

function ChartBarLayer({
  barWidthRatio,
  segments,
}: ChartBarLayerProps): React.JSX.Element {
  const barInlineSize = `min(${chartBarMaxWidth}, ${barWidthRatio * 100}%)`;

  return (
    <div className={styles.barLayer}>
      {segments.map((segment) => (
        <div
          key={segment.key}
          className={styles.barSegment}
          style={{
            backgroundColor: segment.color,
            blockSize: `${segment.heightPx}px`,
            borderStartEndRadius: segment.isTop ? chartBarTopRadius : chartBarSquareRadius,
            borderStartStartRadius: segment.isTop ? chartBarTopRadius : chartBarSquareRadius,
            inlineSize: barInlineSize,
            insetBlockStart: `${segment.topPx}px`,
            insetInlineStart: `${segment.centerRatio * 100}%`,
          }}
        />
      ))}
    </div>
  );
}

function ChartYAxis({
  locale,
  maxValue,
  side,
  ticks,
  yAxisLabel,
}: ChartYAxisProps): React.JSX.Element {
  const isStartAxis = side === "start";
  const gutterWidth = isStartAxis
    ? chartMargin.inlineStart
    : chartMargin.inlineEnd;
  const axisX = isStartAxis ? gutterWidth : 0;
  const tickX = isStartAxis ? axisX - 10 : 10;
  const yAxisTitleX = 18;
  const yAxisTitleY = chartMargin.top + (chartFrameHeight / 2);

  return (
    <svg
      className={`${styles.chartAxisSvg} ${
        isStartAxis ? styles.chartAxisStart : styles.chartAxisEnd
      }`}
      style={{ blockSize: chartPlotHeight }}
      viewBox={`0 0 ${gutterWidth} ${chartPlotHeight}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      {ticks.map((tick) => {
        const y = chartMargin.top + chartFrameHeight - ((tick / maxValue) * chartFrameHeight);

        return (
          <text
            key={`${side}-axis-tick-${tick}`}
            x={tickX}
            y={y + 4}
            className={isStartAxis ? styles.axisLabelStart : styles.axisLabelEnd}
          >
            {formatNumber(locale, tick)}
          </text>
        );
      })}
      <line
        x1={axisX}
        y1={chartMargin.top}
        x2={axisX}
        y2={getChartBottomY()}
        className={styles.axisLine}
      />
      {isStartAxis ? (
        <text
          x={yAxisTitleX}
          y={yAxisTitleY}
          className={styles.yAxisTitle}
          transform={`rotate(-90 ${yAxisTitleX} ${yAxisTitleY})`}
        >
          {yAxisLabel}
        </text>
      ) : null}
    </svg>
  );
}

function ChartFrame({
  ariaLabel,
  children,
  dateLabels,
  latestDate,
  locale,
  maxValue,
  minimumPlotWidth,
  ticks,
  tooltipTargets,
  xAxisLabel,
  yAxisLabel,
}: ChartFrameProps): React.JSX.Element {
  return (
    <div className={styles.chartFrame}>
      <ChartYAxis
        locale={locale}
        maxValue={maxValue}
        side="start"
        ticks={ticks}
        yAxisLabel={yAxisLabel}
      />
      <ActivityChartScroller
        className={styles.chartPlotScroller}
        latestDate={latestDate}
      >
        {/*
          The surface carries the accessible name because the SVG now holds only
          the decorative grid. The role must not be `img`: `img` is presentational
          for its children, which would prune the tooltip hit targets that expose
          the per-day values.
        */}
        <div
          className={styles.chartPlotSurface}
          style={{
            blockSize: chartPlotHeight,
            minInlineSize: minimumPlotWidth,
          }}
          role="group"
          aria-label={ariaLabel}
        >
          <svg
            className={styles.chartPlotSvg}
            viewBox={`0 0 ${chartPlotWidth} ${chartPlotHeight}`}
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            <ChartGrid ticks={ticks} maxValue={maxValue} />
          </svg>
          {children}
          <div className={styles.dateLabelLayer} aria-hidden="true">
            {dateLabels}
          </div>
          <ChartTooltipLayer targets={tooltipTargets} />
        </div>
      </ActivityChartScroller>
      <ChartYAxis
        locale={locale}
        maxValue={maxValue}
        side="end"
        ticks={ticks}
        yAxisLabel={yAxisLabel}
      />
      <div className={styles.xAxisTitle} dir="auto">
        {xAxisLabel}
      </div>
    </div>
  );
}

function ChartDateLabels({
  points,
  dates,
  locale,
}: ChartDateLabelsProps): React.JSX.Element {
  return (
    <>
      {dates.map((date, index) => {
        const point = points.find((currentPoint) => currentPoint.date === date);

        if (point === undefined) {
          return null;
        }

        const isStartEdgeLabel = index === 0;
        const labelX = isStartEdgeLabel
          ? Math.max(startDateLabelInset, point.centerX)
          : point.centerX;
        const normalizedX = labelX / chartPlotWidth;

        return (
          <span
            key={`date-${date}`}
            className={`${styles.dateLabel} ${
              isStartEdgeLabel ? styles.dateLabelStart : styles.dateLabelEnd
            }`}
            dir="ltr"
            style={isStartEdgeLabel
              ? { insetInlineStart: `${normalizedX * 100}%` }
              : { insetInlineEnd: `${(1 - normalizedX) * 100}%` }}
          >
            {formatCompactDate(locale, date)}
          </span>
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
  const barWidthRatio = getChartBarWidthRatio(days);
  const tooltipHitWidth = getTooltipHitWidth(days);
  const latestDate = getLatestChartDate(days, "daily unique users chart");
  const minimumPlotWidth = getChartMinimumPlotWidth(days);

  return (
    <ChartFrame
      ariaLabel={ariaLabel}
      dateLabels={<ChartDateLabels points={points} dates={tickDates} locale={locale} />}
      latestDate={latestDate}
      locale={locale}
      maxValue={maxUniqueUsers}
      minimumPlotWidth={minimumPlotWidth}
      ticks={ticks}
      tooltipTargets={createDailyUniqueUserTooltipTargets({
        cohortLabels,
        locale,
        points,
        tooltipHitWidth,
        totalReviewEventsLabel,
        totalUniqueUsersLabel,
        yAxisLabel,
      })}
      xAxisLabel={xAxisLabel}
      yAxisLabel={yAxisLabel}
    >
      <ChartBarLayer
        barWidthRatio={barWidthRatio}
        segments={createDailyUniqueUserBarSegments(points)}
      />
    </ChartFrame>
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
  const barWidthRatio = getChartBarWidthRatio(days);
  const tooltipHitWidth = getTooltipHitWidth(days);
  const latestDate = getLatestChartDate(days, "platform activity chart");
  const minimumPlotWidth = getChartMinimumPlotWidth(days);

  return (
    <ChartFrame
      ariaLabel={ariaLabel}
      dateLabels={<ChartDateLabels points={points} dates={tickDates} locale={locale} />}
      latestDate={latestDate}
      locale={locale}
      maxValue={maxReviewEvents}
      minimumPlotWidth={minimumPlotWidth}
      ticks={ticks}
      tooltipTargets={createPlatformTooltipTargets({
        locale,
        platformLabels,
        points,
        reviewEventsLabel,
        tooltipHitWidth,
      })}
      xAxisLabel={xAxisLabel}
      yAxisLabel={yAxisLabel}
    >
      <ChartBarLayer
        barWidthRatio={barWidthRatio}
        segments={createPlatformBarSegments(points)}
      />
    </ChartFrame>
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
      {...getExternalLinkAttributes(globalActivitySnapshotUrl)}
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
        <ActivityTotalMetricCards locale={locale} snapshot={snapshot} />
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
