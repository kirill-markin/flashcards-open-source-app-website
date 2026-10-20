import {
  isMarkdownAssetPathname,
} from "./markdownAssetPaths";
import { isSupportedLocale } from "./localeConfig";

export interface MarkdownAssetManifest {
  readonly facets: Readonly<Record<string, string>>;
  readonly markdown: Readonly<Record<string, string>>;
  readonly retired: ReadonlyArray<string>;
}

const internalFacetPathnamePattern =
  /^\/catalog-facet-static\/([^/]+)\/language\/([0-9a-f]{64})\/$/;

function isCanonicalPagePathname(value: string): boolean {
  if (value === "/") {
    return true;
  }

  if (
    value.startsWith("/") === false
    || value.endsWith("/") === false
    || value.includes("//")
    || /[\\?#\u0000-\u001f\u007f]/u.test(value)
  ) {
    return false;
  }

  return value
    .slice(1, -1)
    .split("/")
    .every((segment) => segment !== "" && segment !== "." && segment !== "..");
}

function isInternalFacetPathname(value: string): boolean {
  const match = value.match(internalFacetPathnamePattern);

  return match !== null && match[1] !== undefined && isSupportedLocale(match[1]);
}

function parseStringRecord(
  value: unknown,
  label: string,
  validateKey: (key: string) => boolean,
  validateValue: (entry: string) => boolean,
): Readonly<Record<string, string>> {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    throw new Error(`Markdown asset manifest ${label} must be a JSON object.`);
  }

  const entries = Object.entries(value);

  for (const [key, entry] of entries) {
    if (validateKey(key) === false || typeof entry !== "string" || validateValue(entry) === false) {
      throw new Error(
        `Markdown asset manifest contains an invalid ${label} entry: key=${JSON.stringify(key)}, value=${JSON.stringify(entry)}.`,
      );
    }
  }

  return Object.fromEntries(entries);
}

function parseRetiredPathnames(value: unknown): ReadonlyArray<string> {
  if (!Array.isArray(value) || value.some((entry) =>
    typeof entry !== "string" || !isCanonicalPagePathname(entry)
  )) {
    throw new Error("Markdown asset manifest retired must be an array of canonical page pathnames.");
  }
  return [...new Set(value as string[])];
}

export function parseMarkdownAssetManifest(serialized: string): MarkdownAssetManifest {
  let parsed: unknown;

  try {
    parsed = JSON.parse(serialized) as unknown;
  } catch (error: unknown) {
    throw new Error("Markdown asset manifest is not valid JSON.", { cause: error });
  }

  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    throw new Error("Markdown asset manifest root must be a JSON object.");
  }

  const record = parsed as Record<string, unknown>;

  return {
    retired: parseRetiredPathnames(record.retired),
    facets: parseStringRecord(
      record.facets,
      "facet",
      isCanonicalPagePathname,
      isInternalFacetPathname,
    ),
    markdown: parseStringRecord(
      record.markdown,
      "Markdown",
      isCanonicalPagePathname,
      isMarkdownAssetPathname,
    ),
  };
}

function sortRecord(
  record: Readonly<Record<string, string>>,
): Readonly<Record<string, string>> {
  return Object.fromEntries(
    Object.entries(record).sort(([left], [right]) => left.localeCompare(right)),
  );
}

export function serializeMarkdownAssetManifest(
  manifest: MarkdownAssetManifest,
): string {
  return `${JSON.stringify({
    retired: [...new Set(manifest.retired)].sort(),
    facets: sortRecord(manifest.facets),
    markdown: sortRecord(manifest.markdown),
  })}\n`;
}
