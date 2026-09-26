import { existsSync, readFileSync } from "fs";
import { join } from "path";
import { PRODUCT_API_ORIGIN } from "@/lib/site";

export const globalActivitySnapshotUrl = `${PRODUCT_API_ORIGIN}/v1/global/snapshot?schemaVersion=3`;
export const globalActivitySnapshotGeneratedFileName = "global-activity-snapshot.json";
export const globalActivitySnapshotSchemaVersion = 3;

export const globalActivityPlatforms = ["web", "android", "ios", "agent", "unattributed"] as const;

export type GlobalActivityPlatform = (typeof globalActivityPlatforms)[number];

export type GlobalActivityReviewEventsByPlatform = Readonly<Record<GlobalActivityPlatform, number>>;

export type GlobalActivityReviewEvents = Readonly<{
  total: number;
  byPlatform: GlobalActivityReviewEventsByPlatform;
}>;

export type GlobalActivitySnapshotDay = Readonly<{
  date: string;
  uniqueReviewingUsers: number;
  newReviewingUsers: number;
  returningReviewingUsers: number;
  reviewEvents: GlobalActivityReviewEvents;
}>;

export type GlobalActivitySnapshot = Readonly<{
  schemaVersion: typeof globalActivitySnapshotSchemaVersion;
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
    agent: assertNonNegativeInteger(record.agent, `${context}.agent`),
    unattributed: assertNonNegativeInteger(record.unattributed, `${context}.unattributed`),
  };
}

function parseReviewEvents(
  value: unknown,
  context: string,
): GlobalActivityReviewEvents {
  const record = assertRecord(value, context);
  const byPlatform = parseReviewEventsByPlatform(record.byPlatform, `${context}.byPlatform`);
  const total = assertNonNegativeInteger(record.total, `${context}.total`);
  const platformTotal = globalActivityPlatforms.reduce((sum, platform) => sum + byPlatform[platform], 0);

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
  const uniqueReviewingUsers = assertNonNegativeInteger(
    record.uniqueReviewingUsers,
    `days[${index}].uniqueReviewingUsers`,
  );
  const newReviewingUsers = assertNonNegativeInteger(
    record.newReviewingUsers,
    `days[${index}].newReviewingUsers`,
  );
  const returningReviewingUsers = assertNonNegativeInteger(
    record.returningReviewingUsers,
    `days[${index}].returningReviewingUsers`,
  );

  if (uniqueReviewingUsers !== newReviewingUsers + returningReviewingUsers) {
    throw new Error(
      `Global activity snapshot days[${index}].uniqueReviewingUsers must equal newReviewingUsers + returningReviewingUsers. uniqueReviewingUsers=${uniqueReviewingUsers}, newReviewingUsers=${newReviewingUsers}, returningReviewingUsers=${returningReviewingUsers}.`,
    );
  }

  return {
    date: assertDateString(assertString(record.date, `days[${index}].date`), `days[${index}].date`),
    uniqueReviewingUsers,
    newReviewingUsers,
    returningReviewingUsers,
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

function assertFirstDayHasNoReturningUsers(days: ReadonlyArray<GlobalActivitySnapshotDay>): void {
  const firstDay = days[0];

  if (firstDay === undefined) {
    throw new Error("Global activity snapshot days must not be empty.");
  }

  if (firstDay.returningReviewingUsers !== 0) {
    throw new Error(
      `Global activity snapshot first day returningReviewingUsers must be 0. date=${firstDay.date}, returningReviewingUsers=${firstDay.returningReviewingUsers}.`,
    );
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
        agent: total.byPlatform.agent + day.reviewEvents.byPlatform.agent,
        unattributed: total.byPlatform.unattributed + day.reviewEvents.byPlatform.unattributed,
      },
    }),
    {
      total: 0,
      byPlatform: {
        web: 0,
        android: 0,
        ios: 0,
        agent: 0,
        unattributed: 0,
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

  for (const platform of globalActivityPlatforms) {
    if (snapshot.totals.reviewEvents.byPlatform[platform] !== dayReviewEvents.byPlatform[platform]) {
      throw new Error(
        `Global activity snapshot totals.reviewEvents.byPlatform.${platform} must equal the sum of days[].reviewEvents.byPlatform.${platform}. expectedDaySum=${dayReviewEvents.byPlatform[platform]}, actualRootTotal=${snapshot.totals.reviewEvents.byPlatform[platform]}.`,
      );
    }
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

  if (record.schemaVersion !== globalActivitySnapshotSchemaVersion) {
    throw new Error(
      `Global activity snapshot schemaVersion must be ${globalActivitySnapshotSchemaVersion}, received ${String(record.schemaVersion)}.`,
    );
  }

  const daysValue = record.days;

  if (Array.isArray(daysValue) === false) {
    throw new Error("Global activity snapshot days must be an array.");
  }

  const days = daysValue.map((day, index) => parseSnapshotDay(day, index));
  const totalsRecord = assertRecord(record.totals, "totals");
  const snapshot: GlobalActivitySnapshot = {
    schemaVersion: globalActivitySnapshotSchemaVersion,
    generatedAtUtc: assertTimestampString(
      assertString(record.generatedAtUtc, "generatedAtUtc"),
      "generatedAtUtc",
    ),
    asOfUtc: assertTimestampString(assertString(record.asOfUtc, "asOfUtc"), "asOfUtc"),
    from: assertDateString(assertString(record.from, "from"), "from"),
    to: assertDateString(assertString(record.to, "to"), "to"),
    totals: {
      uniqueReviewingUsers: assertNonNegativeInteger(
        totalsRecord.uniqueReviewingUsers,
        "totals.uniqueReviewingUsers",
      ),
      reviewEvents: parseReviewEvents(totalsRecord.reviewEvents, "totals.reviewEvents"),
    },
    days,
  };

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

  const completedDayCutoff = new Date(`${snapshot.to}T00:00:00.000Z`);
  completedDayCutoff.setUTCDate(completedDayCutoff.getUTCDate() + 1);
  const generationDayCutoff = `${snapshot.generatedAtUtc.slice(0, 10)}T00:00:00.000Z`;

  if (snapshot.asOfUtc !== completedDayCutoff.toISOString() || snapshot.asOfUtc !== generationDayCutoff) {
    throw new Error(
      `Global activity snapshot must cover completed UTC days through to, with asOfUtc at the following midnight on the generation date. to=${snapshot.to}, asOfUtc=${snapshot.asOfUtc}, generatedAtUtc=${snapshot.generatedAtUtc}.`,
    );
  }

  const firstReviewers = snapshot.days.reduce((sum, day) => sum + day.newReviewingUsers, 0);
  if (snapshot.totals.uniqueReviewingUsers !== firstReviewers) {
    throw new Error(
      `Global activity snapshot totals.uniqueReviewingUsers must equal the sum of days[].newReviewingUsers. expected=${firstReviewers}, actual=${snapshot.totals.uniqueReviewingUsers}.`,
    );
  }

  assertSequentialDays(snapshot.days);
  assertFirstDayHasNoReturningUsers(snapshot.days);
  assertReviewEventTotalsMatchDays(snapshot);

  return snapshot;
}
