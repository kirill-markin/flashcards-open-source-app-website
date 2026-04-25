import { existsSync, readFileSync } from "fs";
import { join } from "path";

export const globalActivitySnapshotUrl =
  "https://api.flashcards-open-source-app.com/v1/global/snapshot";
export const globalActivitySnapshotGeneratedFileName = "global-activity-snapshot.json";

export const globalActivityPlatforms = ["web", "android", "ios"] as const;

export type GlobalActivityPlatform = (typeof globalActivityPlatforms)[number];

export type GlobalActivityReviewEventsByPlatform = Readonly<Record<GlobalActivityPlatform, number>>;

export type GlobalActivityReviewEvents = Readonly<{
  total: number;
  byPlatform: GlobalActivityReviewEventsByPlatform;
}>;

export type GlobalActivitySnapshotDay = Readonly<{
  date: string;
  uniqueReviewingUsers: number;
  reviewEvents: GlobalActivityReviewEvents;
}>;

export type GlobalActivitySnapshot = Readonly<{
  schemaVersion: 1;
  generatedAtUtc: string;
  asOfUtc: string;
  from: string;
  to: string;
  totals: Readonly<{
    uniqueReviewingUsers: number;
    reviewEvents: GlobalActivityReviewEvents;
  }>;
  days: ReadonlyArray<GlobalActivitySnapshotDay>;
}>;

const snapshotFetchAttempts = 3;
const snapshotFetchRetryDelayMs = 350;
const snapshotFetchTimeoutMs = 15_000;

function assertRecord(value: unknown, context: string): Record<string, unknown> {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    throw new Error(`Global activity snapshot ${context} must be an object.`);
  }

  return value as Record<string, unknown>;
}

function parseJson(value: string, context: string): unknown {
  try {
    return JSON.parse(value) as unknown;
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error(
        `Global activity snapshot ${context} must be valid JSON. body=${value.slice(0, 220)}`,
      );
    }

    throw error;
  }
}

function assertString(value: unknown, context: string): string {
  if (typeof value !== "string") {
    throw new Error(`Global activity snapshot ${context} must be a string.`);
  }

  return value;
}

function assertNonNegativeInteger(value: unknown, context: string): number {
  if (typeof value !== "number" || Number.isInteger(value) === false || value < 0) {
    throw new Error(`Global activity snapshot ${context} must be a non-negative integer.`);
  }

  return value;
}

function assertDateString(value: string, context: string): string {
  if (/^\d{4}-\d{2}-\d{2}$/.test(value) === false) {
    throw new Error(`Global activity snapshot ${context} must be a YYYY-MM-DD date.`);
  }

  const parsedValue = new Date(`${value}T00:00:00.000Z`);

  if (Number.isNaN(parsedValue.getTime()) || parsedValue.toISOString().slice(0, 10) !== value) {
    throw new Error(`Global activity snapshot ${context} must be a canonical YYYY-MM-DD date.`);
  }

  return value;
}

function assertTimestampString(value: string, context: string): string {
  const parsedValue = new Date(value);

  if (Number.isNaN(parsedValue.getTime()) || parsedValue.toISOString() !== value) {
    throw new Error(`Global activity snapshot ${context} must be a canonical UTC timestamp.`);
  }

  return value;
}

function parseReviewEventsByPlatform(
  value: unknown,
  context: string,
): GlobalActivityReviewEventsByPlatform {
  const record = assertRecord(value, context);

  return {
    web: assertNonNegativeInteger(record.web, `${context}.web`),
    android: assertNonNegativeInteger(record.android, `${context}.android`),
    ios: assertNonNegativeInteger(record.ios, `${context}.ios`),
  };
}

function parseReviewEvents(
  value: unknown,
  context: string,
): GlobalActivityReviewEvents {
  const record = assertRecord(value, context);
  const byPlatform = parseReviewEventsByPlatform(record.byPlatform, `${context}.byPlatform`);
  const total = assertNonNegativeInteger(record.total, `${context}.total`);
  const platformTotal = byPlatform.web + byPlatform.android + byPlatform.ios;

  if (total !== platformTotal) {
    throw new Error(
      `Global activity snapshot ${context}.total must equal the platform sum. total=${total}, platformTotal=${platformTotal}.`,
    );
  }

  return {
    total,
    byPlatform,
  };
}

function parseSnapshotDay(value: unknown, index: number): GlobalActivitySnapshotDay {
  const record = assertRecord(value, `days[${index}]`);

  return {
    date: assertDateString(assertString(record.date, `days[${index}].date`), `days[${index}].date`),
    uniqueReviewingUsers: assertNonNegativeInteger(
      record.uniqueReviewingUsers,
      `days[${index}].uniqueReviewingUsers`,
    ),
    reviewEvents: parseReviewEvents(record.reviewEvents, `days[${index}].reviewEvents`),
  };
}

function assertSequentialDays(days: ReadonlyArray<GlobalActivitySnapshotDay>): void {
  const millisecondsPerDay = 86_400_000;

  for (let index = 1; index < days.length; index += 1) {
    const previousDay = days[index - 1];
    const currentDay = days[index];

    if (previousDay === undefined || currentDay === undefined) {
      throw new Error(`Global activity snapshot days[${index}] is missing.`);
    }

    const previousDate = new Date(`${previousDay.date}T00:00:00.000Z`);
    const currentDate = new Date(`${currentDay.date}T00:00:00.000Z`);

    if (currentDate.getTime() - previousDate.getTime() !== millisecondsPerDay) {
      throw new Error(
        `Global activity snapshot days must be sequential. Found ${previousDay.date} before ${currentDay.date}.`,
      );
    }
  }
}

function sumReviewEventsForDays(
  days: ReadonlyArray<GlobalActivitySnapshotDay>,
): GlobalActivityReviewEvents {
  return days.reduce<GlobalActivityReviewEvents>(
    (total, day) => ({
      total: total.total + day.reviewEvents.total,
      byPlatform: {
        web: total.byPlatform.web + day.reviewEvents.byPlatform.web,
        android: total.byPlatform.android + day.reviewEvents.byPlatform.android,
        ios: total.byPlatform.ios + day.reviewEvents.byPlatform.ios,
      },
    }),
    {
      total: 0,
      byPlatform: {
        web: 0,
        android: 0,
        ios: 0,
      },
    },
  );
}

function assertReviewEventTotalsMatchDays(snapshot: GlobalActivitySnapshot): void {
  const dayReviewEvents = sumReviewEventsForDays(snapshot.days);

  if (snapshot.totals.reviewEvents.total !== dayReviewEvents.total) {
    throw new Error(
      `Global activity snapshot totals.reviewEvents.total must equal the sum of days[].reviewEvents.total. expectedDaySum=${dayReviewEvents.total}, actualRootTotal=${snapshot.totals.reviewEvents.total}.`,
    );
  }

  if (snapshot.totals.reviewEvents.byPlatform.web !== dayReviewEvents.byPlatform.web) {
    throw new Error(
      `Global activity snapshot totals.reviewEvents.byPlatform.web must equal the sum of days[].reviewEvents.byPlatform.web. expectedDaySum=${dayReviewEvents.byPlatform.web}, actualRootTotal=${snapshot.totals.reviewEvents.byPlatform.web}.`,
    );
  }

  if (snapshot.totals.reviewEvents.byPlatform.android !== dayReviewEvents.byPlatform.android) {
    throw new Error(
      `Global activity snapshot totals.reviewEvents.byPlatform.android must equal the sum of days[].reviewEvents.byPlatform.android. expectedDaySum=${dayReviewEvents.byPlatform.android}, actualRootTotal=${snapshot.totals.reviewEvents.byPlatform.android}.`,
    );
  }

  if (snapshot.totals.reviewEvents.byPlatform.ios !== dayReviewEvents.byPlatform.ios) {
    throw new Error(
      `Global activity snapshot totals.reviewEvents.byPlatform.ios must equal the sum of days[].reviewEvents.byPlatform.ios. expectedDaySum=${dayReviewEvents.byPlatform.ios}, actualRootTotal=${snapshot.totals.reviewEvents.byPlatform.ios}.`,
    );
  }
}

function createSnapshotRequestErrorMessage(status: number, bodyText: string): string {
  const trimmedBodyText = bodyText.trim();
  const bodyDetail = trimmedBodyText === ""
    ? "Empty response body."
    : trimmedBodyText.slice(0, 220);

  return `Global activity snapshot request failed with status ${status}. ${bodyDetail}`;
}

function createSnapshotTimeoutErrorMessage(attempt: number): string {
  return `Global activity snapshot request timed out after ${snapshotFetchTimeoutMs}ms. attempt=${attempt}, maxAttempts=${snapshotFetchAttempts}, url=${globalActivitySnapshotUrl}.`;
}

function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

function isAbortError(error: unknown): boolean {
  if (typeof error !== "object" || error === null) {
    return false;
  }

  const namedError = error as Readonly<{ name?: unknown }>;

  return namedError.name === "AbortError";
}

async function waitForRetryDelay(delayMilliseconds: number): Promise<void> {
  await new Promise<void>((resolve) => {
    setTimeout(resolve, delayMilliseconds);
  });
}

async function fetchGlobalActivitySnapshotOnce(attempt: number): Promise<GlobalActivitySnapshot> {
  const abortController = new AbortController();
  const timeoutId = setTimeout(() => {
    abortController.abort();
  }, snapshotFetchTimeoutMs);

  try {
    const response = await fetch(globalActivitySnapshotUrl, {
      cache: "no-store",
      signal: abortController.signal,
    });
    const responseBody = await response.text();

    if (response.ok === false) {
      throw new Error(createSnapshotRequestErrorMessage(response.status, responseBody));
    }

    return parseGlobalActivitySnapshot(parseJson(responseBody, "response"));
  } catch (error) {
    if (isAbortError(error)) {
      throw new Error(createSnapshotTimeoutErrorMessage(attempt));
    }

    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function fetchGlobalActivitySnapshot(): Promise<GlobalActivitySnapshot> {
  let lastError: unknown = null;

  for (let attempt = 1; attempt <= snapshotFetchAttempts; attempt += 1) {
    try {
      return await fetchGlobalActivitySnapshotOnce(attempt);
    } catch (error) {
      lastError = error;

      if (attempt < snapshotFetchAttempts) {
        console.warn("global_activity_snapshot_fetch_retry", {
          attempt,
          maxAttempts: snapshotFetchAttempts,
          url: globalActivitySnapshotUrl,
          errorMessage: getErrorMessage(error),
        });
        await waitForRetryDelay(snapshotFetchRetryDelayMs);
      }
    }
  }

  throw new Error(
    `Global activity snapshot request failed after ${snapshotFetchAttempts} attempts. lastError=${getErrorMessage(lastError)}`,
  );
}

export function getGlobalActivitySnapshotGeneratedFilePath(cwd: string): string {
  return join(cwd, ".generated", globalActivitySnapshotGeneratedFileName);
}

export function serializeGlobalActivitySnapshot(snapshot: GlobalActivitySnapshot): string {
  return `${JSON.stringify(snapshot, null, 2)}\n`;
}

export function readGeneratedGlobalActivitySnapshot(cwd: string): GlobalActivitySnapshot {
  const filePath = getGlobalActivitySnapshotGeneratedFilePath(cwd);

  if (!existsSync(filePath)) {
    throw new Error(
      `Generated global activity snapshot is missing: ${filePath}. Run npm run generate:static-content before rendering the site.`,
    );
  }

  const fileContent = readFileSync(filePath, "utf-8");

  return parseGlobalActivitySnapshot(parseJson(fileContent, filePath));
}

export function parseGlobalActivitySnapshot(value: unknown): GlobalActivitySnapshot {
  const record = assertRecord(value, "root");
  const daysValue = record.days;

  if (Array.isArray(daysValue) === false) {
    throw new Error("Global activity snapshot days must be an array.");
  }

  const days = daysValue.map((day, index) => parseSnapshotDay(day, index));
  const snapshot: GlobalActivitySnapshot = {
    schemaVersion: 1,
    generatedAtUtc: assertTimestampString(
      assertString(record.generatedAtUtc, "generatedAtUtc"),
      "generatedAtUtc",
    ),
    asOfUtc: assertTimestampString(assertString(record.asOfUtc, "asOfUtc"), "asOfUtc"),
    from: assertDateString(assertString(record.from, "from"), "from"),
    to: assertDateString(assertString(record.to, "to"), "to"),
    totals: {
      uniqueReviewingUsers: assertNonNegativeInteger(
        assertRecord(record.totals, "totals").uniqueReviewingUsers,
        "totals.uniqueReviewingUsers",
      ),
      reviewEvents: parseReviewEvents(assertRecord(record.totals, "totals").reviewEvents, "totals.reviewEvents"),
    },
    days,
  };

  if (record.schemaVersion !== snapshot.schemaVersion) {
    throw new Error(
      `Global activity snapshot schemaVersion must be ${snapshot.schemaVersion}, received ${String(record.schemaVersion)}.`,
    );
  }

  if (snapshot.days.length === 0) {
    throw new Error("Global activity snapshot days must not be empty.");
  }

  if (snapshot.days[0]?.date !== snapshot.from) {
    throw new Error(
      `Global activity snapshot from must equal the first day. from=${snapshot.from}, firstDay=${snapshot.days[0]?.date ?? "missing"}.`,
    );
  }

  if (snapshot.days[snapshot.days.length - 1]?.date !== snapshot.to) {
    throw new Error(
      `Global activity snapshot to must equal the last day. to=${snapshot.to}, lastDay=${snapshot.days[snapshot.days.length - 1]?.date ?? "missing"}.`,
    );
  }

  assertSequentialDays(snapshot.days);
  assertReviewEventTotalsMatchDays(snapshot);

  return snapshot;
}
