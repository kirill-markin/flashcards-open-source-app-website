import { existsSync, readFileSync, rmSync } from "fs";
import { join } from "path";
import { parsePublicCatalogDump } from "./publicCatalogParser";
import type { PublicCatalogDump } from "./publicCatalogTypes";

export const publicCatalogEnabledEnvironmentVariable = "PUBLIC_CATALOG_ENABLED";
export const publicCatalogDumpUrlEnvironmentVariable = "PUBLIC_CATALOG_DUMP_URL";
export const publicCatalogGeneratedFileName = "public-catalog.json";

const publicCatalogFetchAttempts = 3;
const publicCatalogFetchRetryDelayMs = 350;
const publicCatalogFetchTimeoutMs = 30_000;

export type PublicCatalogBuildConfiguration =
  | Readonly<{ enabled: false }>
  | Readonly<{ enabled: true; dumpUrl: string }>;

function parseJson(value: string, context: string): unknown {
  try {
    return JSON.parse(value) as unknown;
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error(`Public catalog ${context} must be valid JSON. body=${value.slice(0, 220)}`);
    }

    throw error;
  }
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

function assertPublicDumpUrl(value: string): string {
  let url: URL;

  try {
    url = new URL(value);
  } catch {
    throw new Error(
      `${publicCatalogDumpUrlEnvironmentVariable} must be an absolute HTTPS URL when ${publicCatalogEnabledEnvironmentVariable}=true. received=${value}`,
    );
  }

  if (url.protocol !== "https:" || url.username !== "" || url.password !== "") {
    throw new Error(
      `${publicCatalogDumpUrlEnvironmentVariable} must be an absolute HTTPS URL when ${publicCatalogEnabledEnvironmentVariable}=true. received=${value}`,
    );
  }

  return value;
}

function createRequestErrorMessage(url: string, status: number, bodyText: string): string {
  const trimmedBodyText = bodyText.trim();
  const bodyDetail = trimmedBodyText === "" ? "Empty response body." : trimmedBodyText.slice(0, 220);

  return `Public catalog dump request failed with status ${status}. url=${url}, body=${bodyDetail}`;
}

async function waitForRetryDelay(delayMilliseconds: number): Promise<void> {
  await new Promise<void>((resolve) => {
    setTimeout(resolve, delayMilliseconds);
  });
}

async function fetchPublicCatalogDumpOnce(
  dumpUrl: string,
  attempt: number,
): Promise<PublicCatalogDump> {
  const abortController = new AbortController();
  const timeoutId = setTimeout(() => {
    abortController.abort();
  }, publicCatalogFetchTimeoutMs);

  try {
    const response = await fetch(dumpUrl, {
      cache: "no-store",
      signal: abortController.signal,
    });
    const responseBody = await response.text();

    if (response.ok === false) {
      throw new Error(createRequestErrorMessage(dumpUrl, response.status, responseBody));
    }

    return parsePublicCatalogDump(parseJson(responseBody, `response from ${dumpUrl}`));
  } catch (error) {
    if (isAbortError(error)) {
      throw new Error(
        `Public catalog dump request timed out after ${publicCatalogFetchTimeoutMs}ms. attempt=${attempt}, maxAttempts=${publicCatalogFetchAttempts}, url=${dumpUrl}.`,
      );
    }

    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

export function parsePublicCatalogBuildConfiguration(
  enabledValue: string | undefined,
  dumpUrlValue: string | undefined,
): PublicCatalogBuildConfiguration {
  if (enabledValue === undefined || enabledValue === "false") {
    return { enabled: false };
  }

  if (enabledValue !== "true") {
    throw new Error(
      `${publicCatalogEnabledEnvironmentVariable} must be exactly "true" or "false" when set. received=${enabledValue}`,
    );
  }

  if (dumpUrlValue === undefined || dumpUrlValue.trim() === "") {
    throw new Error(
      `${publicCatalogDumpUrlEnvironmentVariable} is required when ${publicCatalogEnabledEnvironmentVariable}=true.`,
    );
  }

  return {
    enabled: true,
    dumpUrl: assertPublicDumpUrl(dumpUrlValue),
  };
}

export function isPublicCatalogEnabled(): boolean {
  return parsePublicCatalogBuildConfiguration(
    process.env[publicCatalogEnabledEnvironmentVariable],
    process.env[publicCatalogDumpUrlEnvironmentVariable],
  ).enabled;
}

export async function fetchPublicCatalogDump(dumpUrl: string): Promise<PublicCatalogDump> {
  let lastError: unknown = null;

  for (let attempt = 1; attempt <= publicCatalogFetchAttempts; attempt += 1) {
    try {
      return await fetchPublicCatalogDumpOnce(dumpUrl, attempt);
    } catch (error) {
      lastError = error;

      if (attempt < publicCatalogFetchAttempts) {
        console.warn("public_catalog_dump_fetch_retry", {
          attempt,
          maxAttempts: publicCatalogFetchAttempts,
          url: dumpUrl,
          errorMessage: getErrorMessage(error),
        });
        await waitForRetryDelay(publicCatalogFetchRetryDelayMs);
      }
    }
  }

  throw new Error(
    `Public catalog dump request failed after ${publicCatalogFetchAttempts} attempts. url=${dumpUrl}, lastError=${getErrorMessage(lastError)}`,
  );
}

export function getPublicCatalogGeneratedFilePath(cwd: string): string {
  return join(cwd, ".generated", publicCatalogGeneratedFileName);
}

export function serializePublicCatalogDump(dump: PublicCatalogDump): string {
  return `${JSON.stringify(dump, null, 2)}\n`;
}

export function removeGeneratedPublicCatalogDump(cwd: string): void {
  rmSync(getPublicCatalogGeneratedFilePath(cwd), { force: true });
}

export function readGeneratedPublicCatalogDump(cwd: string): PublicCatalogDump {
  const filePath = getPublicCatalogGeneratedFilePath(cwd);

  if (existsSync(filePath) === false) {
    throw new Error(
      `Generated public catalog dump is missing: ${filePath}. Enable the catalog and run npm run generate:static-content before rendering catalog routes.`,
    );
  }

  return parsePublicCatalogDump(parseJson(readFileSync(filePath, "utf-8"), filePath));
}
