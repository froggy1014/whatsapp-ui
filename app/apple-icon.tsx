import { ImageResponse } from "next/og";
import { BRAND, logoDataUri } from "@/lib/brand";

// Required by `output: "export"` — generated image routes must be prerendered.
export const dynamic = "force-static";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: BRAND.accent,
        }}
      >
        <img src={logoDataUri({ size: 108 })} width={108} height={108} alt="" />
      </div>
    ),
    { ...size },
  );
}
