import QRCode from "qrcode";
import { STORE_QR_URLS } from "../src/lib/humanPlatforms";
import type { StoreQrCodes } from "../src/lib/storeQrCodes";

// Single source of truth for the rendered QR size: qrcode emits width/height attributes
// from this value and no stylesheet resizes the symbol, so the size this file asserts is
// the size the browser paints. A longer store URL needs a denser symbol, so
// assertStoreQrCodeIsScannable fails the prebuild once this width stops being enough.
const storeQrCodeSvgOptions = {
  color: {
    dark: "#000000",
    light: "#ffffff",
  },
  errorCorrectionLevel: "M",
  margin: 2,
  type: "svg",
  width: 228,
} as const;

// Phone cameras need roughly 4 rendered pixels per module to decode a QR code off a screen.
const minimumStoreQrModulePixelSize = 4;

// The viewBox spans the symbol plus both quiet-zone margins, which is exactly what the
// width is stretched over, so the quiet zone is included here by design. This is
// deliberately not the bare module count: dividing by that would loosen the floor.
function getStoreQrSymbolModuleSpan(svgMarkup: string, storeUrl: string): number {
  const viewBoxMatch = svgMarkup.match(/viewBox="0 0 (\d+) (\d+)"/);

  if (viewBoxMatch === null || viewBoxMatch[1] !== viewBoxMatch[2]) {
    throw new Error(
      `Generated store QR code for ${storeUrl} has no square integer viewBox, so its module span cannot be measured. head=${svgMarkup.slice(0, 160)}`,
    );
  }

  return Number(viewBoxMatch[1]);
}

function assertStoreQrCodeIsScannable(svgMarkup: string, storeUrl: string): void {
  const moduleSpan = getStoreQrSymbolModuleSpan(svgMarkup, storeUrl);
  const modulePixelSize = storeQrCodeSvgOptions.width / moduleSpan;

  if (modulePixelSize < minimumStoreQrModulePixelSize) {
    throw new Error(
      `Store QR code for ${storeUrl} is not scannable: ${moduleSpan} modules rendered at ${storeQrCodeSvgOptions.width}px give ${modulePixelSize.toFixed(2)}px per module, below the ${minimumStoreQrModulePixelSize}px floor. Shorten the store URL in src/lib/humanPlatforms.ts, or raise storeQrCodeSvgOptions.width in scripts/generateStoreQrCodes.ts to at least ${moduleSpan * minimumStoreQrModulePixelSize}px.`,
    );
  }
}

export async function generateStoreQrCodes(): Promise<StoreQrCodes> {
  const [ios, android, iphone, ipad] = await Promise.all(
    [STORE_QR_URLS.ios, STORE_QR_URLS.android, STORE_QR_URLS.iphone, STORE_QR_URLS.ipad].map(async (href) => {
      const svgMarkup = await QRCode.toString(href, storeQrCodeSvgOptions);
      assertStoreQrCodeIsScannable(svgMarkup, href);
      return svgMarkup;
    }),
  );

  return {
    android,
    ios,
    iphone,
    ipad,
  };
}

