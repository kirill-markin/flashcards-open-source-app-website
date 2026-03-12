import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage(): ImageResponse {
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
          fontFamily: "monospace",
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
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="104"
              y="92"
              width="184"
              height="264"
              rx="32"
              fill="#f8f3ec"
            />
            <rect
              x="212"
              y="156"
              width="196"
              height="272"
              rx="32"
              fill="#c44b2d"
            />
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
          Flashcards
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
    { ...size },
  );
}
