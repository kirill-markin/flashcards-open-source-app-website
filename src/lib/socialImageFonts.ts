import { readFile } from "node:fs/promises";
import { join } from "node:path";

interface SocialImageFont {
  readonly name: "Inter";
  readonly data: Buffer;
  readonly weight: 400 | 700;
  readonly style: "normal";
}

const regularInter = readFile(join(process.cwd(), "assets/fonts/inter/Inter-Regular.ttf"));
const boldInter = readFile(join(process.cwd(), "assets/fonts/inter/Inter-Bold.ttf"));

export async function readSocialImageFonts(): Promise<SocialImageFont[]> {
  const [regular, bold] = await Promise.all([regularInter, boldInter]);

  return [
    { name: "Inter", data: regular, weight: 400, style: "normal" },
    { name: "Inter", data: bold, weight: 700, style: "normal" },
  ];
}
