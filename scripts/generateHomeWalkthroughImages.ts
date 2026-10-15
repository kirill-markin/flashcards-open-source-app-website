import { mkdir } from "node:fs/promises";
import { join } from "node:path";
import { setTimeout } from "node:timers/promises";
import sharp from "sharp";
import { getHomeShowcaseImagePath } from "../src/lib/homeShowcaseImage";
import { SUPPORTED_LOCALES, type AppLocale } from "../src/lib/localeConfig";
import { marketingMediaManifest } from "../src/lib/marketingMedia";
import { checksum } from "./mediaFiles";

const PANEL_WIDTH = 582;
const PANEL_HEIGHT = 858;
const SCREEN_WIDTH = 382;
const SCREEN_RADIUS = 34;
const SOURCE_SCREEN_WIDTH = 1284;
const SOURCE_SCREEN_HEIGHT = 2778;
const SOURCE_GAP = 120;
const SOURCE_SCREEN_COUNT = 5;

interface WalkthroughImage {
  readonly name: string;
  readonly sourceIndex: number;
  readonly left: number;
  readonly top: number;
}

const WALKTHROUGH_IMAGES: ReadonlyArray<WalkthroughImage> = [
  { name: "ai-flashcards", sourceIndex: 3, left: 99, top: 100 },
  { name: "start-learning", sourceIndex: 0, left: 100, top: 100 },
  { name: "smart-reviews", sourceIndex: 1, left: 100, top: 102 },
  { name: "your-progress", sourceIndex: 2, left: 100, top: 102 },
];

interface WalkthroughTemplate {
  readonly image: WalkthroughImage;
  readonly data: Buffer;
}

async function downloadOriginal(publicPath: string): Promise<Buffer> {
  const entry = marketingMediaManifest.find((asset) => asset.publicPath === publicPath);
  if (entry === undefined) {
    throw new Error(`Missing original in media manifest: ${publicPath}. Publish it before generating images.`);
  }
  const asset = entry.original ?? entry;
  for (let attempt = 1; ; attempt += 1) {
    try {
      const response = await fetch(asset.url, { signal: AbortSignal.timeout(120000), redirect: "error" });
      if (!response.ok) {
        throw new Error(`Cannot download ${publicPath}: ${asset.url}; HTTP ${response.status}.`);
      }
      const data = Buffer.from(await response.arrayBuffer());
      if (data.byteLength !== asset.bytes || checksum(data) !== asset.sha256) {
        throw new Error(`Original checksum mismatch for ${publicPath}: ${asset.url}.`);
      }
      return data;
    } catch (error) {
      if (attempt === 3) throw error;
      console.warn({ event: "home_image_download_retry", publicPath, attempt, error });
      await setTimeout(attempt * 1000);
    }
  }
}

async function generateLocaleImages(
  locale: AppLocale,
  templates: readonly WalkthroughTemplate[],
  outputDirectory: string,
): Promise<void> {
  const sourcePath = getHomeShowcaseImagePath(locale);
  const sourceData = await downloadOriginal(sourcePath);
  const source = await sharp(sourceData).metadata();
  const expectedWidth = SOURCE_SCREEN_COUNT * SOURCE_SCREEN_WIDTH
    + (SOURCE_SCREEN_COUNT + 1) * SOURCE_GAP;
  const expectedHeight = SOURCE_SCREEN_HEIGHT + 2 * SOURCE_GAP;

  if (source.width !== expectedWidth || source.height !== expectedHeight) {
    throw new Error(
      `Unexpected home screenshot layout for ${locale}: ${sourcePath} is `
      + `${source.width}×${source.height}; expected ${expectedWidth}×${expectedHeight}. `
      + "Update the source screenshot geometry before generating walkthrough images."
    );
  }

  for (const { image, data: templateData } of templates) {
    const templatePath = `/home/${image.name}.png`;
    const template = await sharp(templateData).metadata();

    if (template.width !== PANEL_WIDTH || template.height !== PANEL_HEIGHT || !template.hasAlpha) {
      throw new Error(
        `Invalid walkthrough template: ${templatePath}. Expected a transparent `
        + `${PANEL_WIDTH}×${PANEL_HEIGHT} PNG preserving the gradient and phone frame.`
      );
    }

    const screen = await sharp(sourceData)
      .extract({
        left: SOURCE_GAP + image.sourceIndex * (SOURCE_SCREEN_WIDTH + SOURCE_GAP),
        top: SOURCE_GAP,
        width: SOURCE_SCREEN_WIDTH,
        height: SOURCE_SCREEN_HEIGHT,
      })
      .resize({ width: SCREEN_WIDTH })
      .png()
      .toBuffer();

    const visibleHeight = PANEL_HEIGHT - image.top;
    // Replace only the screen; the existing frame and transparent panel corners stay intact.
    const screenMask = Buffer.from(
      `<svg width="${SCREEN_WIDTH}" height="${visibleHeight}">`
      + `<path d="M${SCREEN_RADIUS} 0 H${SCREEN_WIDTH - SCREEN_RADIUS} `
      + `A${SCREEN_RADIUS} ${SCREEN_RADIUS} 0 0 1 ${SCREEN_WIDTH} ${SCREEN_RADIUS} `
      + `V${visibleHeight} H0 V${SCREEN_RADIUS} `
      + `A${SCREEN_RADIUS} ${SCREEN_RADIUS} 0 0 1 ${SCREEN_RADIUS} 0Z" fill="white"/>`
      + "</svg>"
    );
    const visibleScreen = await sharp(screen)
      .extract({ left: 0, top: 0, width: SCREEN_WIDTH, height: visibleHeight })
      .composite([{ input: screenMask, blend: "dest-in" }])
      .png()
      .toBuffer();

    const panel = await sharp(templateData).raw().toBuffer();
    const screenArea = await sharp(templateData)
      .extract({ left: image.left, top: image.top, width: SCREEN_WIDTH, height: visibleHeight })
      .composite([{ input: visibleScreen, left: 0, top: 0 }])
      .raw()
      .toBuffer();
    // Limit compositing to the screen area so alpha rounding cannot alter the panel edges.
    const screenRowBytes = SCREEN_WIDTH * 4;
    for (let row = 0; row < visibleHeight; row += 1) {
      screenArea.copy(
        panel,
        ((image.top + row) * PANEL_WIDTH + image.left) * 4,
        row * screenRowBytes,
        (row + 1) * screenRowBytes,
      );
    }

    await sharp(panel, { raw: { width: PANEL_WIDTH, height: PANEL_HEIGHT, channels: 4 } })
      .png()
      .toFile(join(outputDirectory, `${image.name}-${locale}.png`));
  }
}

async function main(): Promise<void> {
  const requestedLocales = process.argv.slice(2);
  const locales = requestedLocales.length === 0
    ? SUPPORTED_LOCALES.filter((locale) => locale !== "en")
    : requestedLocales.map((value): AppLocale => {
      const locale = SUPPORTED_LOCALES.find((candidate) => candidate === value);
      if (locale === undefined || locale === "en") {
        throw new Error(`Unsupported walkthrough locale: ${value}. Specify a supported non-English locale.`);
      }
      return locale;
    });
  const outputDirectory = join(process.cwd(), ".generated", "media", "home");
  await mkdir(outputDirectory, { recursive: true });
  const templates = await Promise.all(WALKTHROUGH_IMAGES.map(async (image) => ({
    image,
    data: await downloadOriginal(`/home/${image.name}.png`),
  })));
  for (const locale of locales) {
    await generateLocaleImages(locale, templates, outputDirectory);
  }
  console.log(`Generated ${locales.length * WALKTHROUGH_IMAGES.length} localized walkthrough images in ${outputDirectory}.`);
}

void main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
