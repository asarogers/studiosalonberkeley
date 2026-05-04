import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Suspended",
  robots: { index: false, follow: false },
};

export default function SuspendedPage() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2147483647,
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        color: "#111",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
          fontWeight: 700,
          margin: "0 0 1rem",
          maxWidth: "40ch",
          lineHeight: 1.25,
        }}
      >
        This page is unavailable.
      </h1>
    </div>
  );
}
