import { ImageResponse } from "next/og";

/**
 * Generated Open Graph / social share image (1200×630).
 * Original branded card — navy field, gold harbor waterline, wordmark text.
 * No external assets or fonts; renders at build time.
 */
export const alt =
  "The Water Street Club — advancing diversity and inclusion in the insurance industry";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #071A2F 0%, #0B2341 60%, #071A2F 100%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* top row: emblem + kicker */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              border: "2px solid #C9A227",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", color: "#E6D28A", fontSize: "28px", fontWeight: 700 }}>
              W
            </div>
          </div>
          <div
            style={{
              display: "flex",
              color: "#C9A227",
              fontSize: "20px",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            Est. in Lower Manhattan&apos;s Insurance District
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              color: "#F8F6F0",
              fontSize: "68px",
              fontWeight: 700,
              lineHeight: 1.05,
            }}
          >
            The Water Street Club
          </div>
          <div
            style={{
              display: "flex",
              color: "#E6D28A",
              fontSize: "34px",
              fontWeight: 500,
            }}
          >
            Diversity &amp; Inclusion in the Insurance Industry
          </div>
        </div>

        {/* bottom row: tags */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {["Awards Dinner", "Mentorship", "Sponsorship", "Networking"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                color: "#F8F6F0",
                fontSize: "22px",
                padding: "8px 18px",
                borderRadius: "999px",
                background: "rgba(248,246,240,0.08)",
                border: "1px solid rgba(201,162,39,0.5)",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
