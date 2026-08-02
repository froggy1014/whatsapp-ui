import { ImageResponse } from "next/og";
import { BRAND, logoDataUri } from "@/lib/brand";
import { getRegistryItems } from "@/lib/registry";

// Required by `output: "export"` — generated image routes must be prerendered.
export const dynamic = "force-static";

export const alt =
  "WA UI — a shadcn/ui registry of WhatsApp Web components built on WDS design tokens";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const count = getRegistryItems().length;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: BRAND.bg,
          fontFamily: "sans-serif",
        }}
      >
        {/* Accent glow — mirrors the hero blur on the landing page */}
        <div
          style={{
            position: "absolute",
            top: -260,
            left: 300,
            width: 800,
            height: 520,
            background: `radial-gradient(circle, ${BRAND.accent}40 0%, ${BRAND.bg}00 70%)`,
          }}
        />

        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: BRAND.accent,
            }}
          >
            <img src={logoDataUri({ size: 38 })} width={38} height={38} alt="" />
          </div>
          <div style={{ fontSize: 34, fontWeight: 700, color: BRAND.fg }}>
            WA UI
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 18px",
              marginLeft: 6,
              borderRadius: 999,
              border: `1px solid ${BRAND.accent}40`,
              background: `${BRAND.accent}1a`,
              color: BRAND.accent,
              fontSize: 22,
              fontWeight: 500,
            }}
          >
            {count} components
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: BRAND.fg,
            }}
          >
            WhatsApp Web components
          </div>
          <div
            style={{
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: BRAND.accent,
            }}
          >
            for shadcn/ui
          </div>
          <div
            style={{
              marginTop: 26,
              fontSize: 30,
              color: BRAND.muted,
              lineHeight: 1.4,
            }}
          >
            Built on WhatsApp&apos;s WDS design tokens. Light and dark mode included.
          </div>
        </div>

        {/* Install command */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              padding: "18px 26px",
              borderRadius: 14,
              border: `1px solid ${BRAND.accent}33`,
              background: "rgba(233, 237, 239, 0.06)",
              color: BRAND.accent,
              fontSize: 24,
            }}
          >
            npx shadcn@latest add ui.meta-cloud-api.site/r/chat-bubble.json
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
