import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Studio Salon — Berkeley's loc & natural hair specialists";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "linear-gradient(135deg, #FCE8EC 0%, #FADADD 40%, #E8A1B3 100%)",
          position: "relative",
        }}
      >
        {/* Soft spotlight overlays */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse at top left, rgba(255,255,255,0.35), transparent 55%), radial-gradient(ellipse at bottom right, rgba(184,106,126,0.35), transparent 55%)",
            display: "flex",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 12,
            color: "#9E4F63",
            textTransform: "uppercase",
            background: "rgba(255,255,255,0.55)",
            padding: "14px 32px",
            borderRadius: 9999,
            marginBottom: 38,
          }}
        >
          Berkeley, CA · Since 2020
        </div>

        {/* STUDIO */}
        <div
          style={{
            display: "flex",
            fontSize: 180,
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: 16,
            lineHeight: 0.9,
            textShadow: "0 6px 36px rgba(184,106,126,0.45)",
          }}
        >
          STUDIO
        </div>

        {/* SALON */}
        <div
          style={{
            display: "flex",
            fontSize: 180,
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: 16,
            lineHeight: 0.9,
            marginTop: 4,
            textShadow: "0 6px 36px rgba(184,106,126,0.45)",
          }}
        >
          SALON
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: 34,
            color: "#FFFFFF",
            marginTop: 38,
            fontWeight: 500,
            textShadow: "0 2px 12px rgba(184,106,126,0.35)",
          }}
        >
          Loc &amp; natural hair specialists
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
