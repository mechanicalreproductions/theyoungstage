import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "The Young Stage — Theater Resources for Directors of Young Actors";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#fafaf9",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(217,119,6,0.10) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgba(190,18,60,0.10) 0, transparent 50%)",
          color: "#1c1917",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1c1917"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="2.75" y1="22" x2="21.25" y2="22" />
            <path d="M5 22V3h14v19" />
            <path d="M5 3 L14 4 L14 20 L5 22 Z" fill="#1c1917" fillOpacity="0.08" />
            <circle cx="12" cy="13" r="0.8" fill="#1c1917" />
          </svg>
          <div
            style={{
              fontSize: 30,
              letterSpacing: -0.5,
              color: "#1c1917",
            }}
          >
            The Young Stage
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 24,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#b45309",
              fontFamily: "sans-serif",
            }}
          >
            A resource library for directors of young actors
          </div>
          <div
            style={{
              fontSize: 88,
              lineHeight: 1.05,
              letterSpacing: -2,
              color: "#1c1917",
              maxWidth: 980,
            }}
          >
            Stagecraft for the under-fourteens.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#57534e",
            fontFamily: "sans-serif",
          }}
        >
          <div>Drama games · Plays · Shakespeare · Songs · Warm-ups</div>
          <div>theyoungstage.org</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
