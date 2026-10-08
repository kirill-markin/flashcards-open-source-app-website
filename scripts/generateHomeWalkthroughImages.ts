import { join } from "node:path";
import sharp from "sharp";
import { getHomeShowcaseImagePath } from "../src/lib/homeShowcaseImage";
import { SUPPORTED_LOCALES, type AppLocale } from "../src/lib/localeConfig";

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

async function generateLocaleImages(locale: AppLocale): Promise<void> {
  const sourcePath = join(process.cwd(), "public", getHomeShowcaseImagePath(locale));
  const source = await sharp(sourcePath).metadata();
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

  for (const image of WALKTHROUGH_IMAGES) {
    const templatePath = join(process.cwd(), "public", "home", `${image.name}.png`);
    const template = await sharp(templatePath).metadata();

    if (template.width !== PANEL_WIDTH || template.height !== PANEL_HEIGHT || !template.hasAlpha) {
      throw new Error(
        `Invalid walkthrough template: ${templatePath}. Expected a transparent `
        + `${PANEL_WIDTH}×${PANEL_HEIGHT} PNG preserving the gradient and phone frame.`
      );
    }

    const screen = await sharp(sourcePath)
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

    const panel = await sharp(templatePath).raw().toBuffer();
    const screenArea = await sharp(templatePath)
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
      .toFile(join(process.cwd(), "public", "home", `${image.name}-${locale}.png`));
  }
}

async function main(): Promise<void> {
  const locales = SUPPORTED_LOCALES.filter((locale) => locale !== "en");
  for (const locale of locales) {
    await generateLocaleImages(locale);
  }
  console.log(`Generated ${locales.length * WALKTHROUGH_IMAGES.length} localized walkthrough images.`);
}

void main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
