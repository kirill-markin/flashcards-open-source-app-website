import { existsSync, readFileSync } from "fs";
import { join } from "path";
import type { StoreAnalyticsPlatform } from "@/lib/humanPlatforms";

export const storeQrCodesGeneratedFileName = "store-qr-codes.json";

export type StoreQrCodes = Readonly<Record<StoreAnalyticsPlatform, string>>;

function assertSvgMarkup(value: unknown, context: string): string {
  if (typeof value !== "string" || value.startsWith("<svg") === false) {
    throw new Error(
      `Store QR code ${context} must be SVG markup, received ${String(value).slice(0, 60)}.`,
    );
  }

  return value;
}

export function getStoreQrCodesGeneratedFilePath(cwd: string): string {
  return join(cwd, ".generated", storeQrCodesGeneratedFileName);
}

export function serializeStoreQrCodes(qrCodes: StoreQrCodes): string {
  return `${JSON.stringify(qrCodes, null, 2)}\n`;
}

export function parseStoreQrCodes(value: unknown): StoreQrCodes {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    throw new Error("Store QR codes root must be an object.");
  }

  const record = value as Record<string, unknown>;

  return {
    android: assertSvgMarkup(record.android, "android"),
    ios: assertSvgMarkup(record.ios, "ios"),
  };
}

// Every prerendered page renders the footer store links, so the generated file is read
// and validated once per process instead of once per page. Failures stay uncached.
const cachedStoreQrCodesByCwd = new Map<string, StoreQrCodes>();

function loadGeneratedStoreQrCodes(cwd: string): StoreQrCodes {
  const filePath = getStoreQrCodesGeneratedFilePath(cwd);

  if (!existsSync(filePath)) {
    throw new Error(
      `Generated store QR codes are missing: ${filePath}. Run npm run generate:static-content before rendering the site.`,
    );
  }

  const fileContent = readFileSync(filePath, "utf-8");

  try {
    return parseStoreQrCodes(JSON.parse(fileContent) as unknown);
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error(
        `Generated store QR codes must be valid JSON: ${filePath}. body=${fileContent.slice(0, 220)}`,
      );
    }

    throw error;
  }
}

export function readGeneratedStoreQrCodes(cwd: string): StoreQrCodes {
  const cachedQrCodes = cachedStoreQrCodesByCwd.get(cwd);

  if (cachedQrCodes !== undefined) {
    return cachedQrCodes;
  }

  const qrCodes = loadGeneratedStoreQrCodes(cwd);

  cachedStoreQrCodesByCwd.set(cwd, qrCodes);

  return qrCodes;
}
