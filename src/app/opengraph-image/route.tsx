import { ImageResponse } from "next/og";
import { readSocialImageFonts } from "@/lib/socialImageFonts";

const size = { width: 1200, height: 630 };
export const dynamic = "force-static";

export async function GET(): Promise<ImageResponse> {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#232323",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <svg
            width="108"
            height="108"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="1024" height="1024" rx="200" fill="#161718" />
            <rect x="220" y="201" width="367" height="490" rx="71.3019" fill="white" />
            <rect x="437" y="334" width="367" height="490" rx="71.3019" fill="#FF6719" />
          </svg>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 48,
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 16,
            letterSpacing: "-0.02em",
          }}
        >
          Nibomo
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#898989",
          }}
        >
          Open Source Spaced Repetition
        </div>
      </div>
    ),
    { ...size, fonts: await readSocialImageFonts() },
  );
}
