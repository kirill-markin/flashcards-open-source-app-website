import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#232323",
          borderRadius: 34,
        }}
        >
          <svg
            width="120"
            height="120"
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
    ),
    { ...size },
  );
}
