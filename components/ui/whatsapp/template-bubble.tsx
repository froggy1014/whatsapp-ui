"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "@/components/ui/whatsapp/styles/whatsapp.css";

// ─── Types ────────────────────────────────────────────────────────────────────

type HeaderType = "text" | "image" | "video" | "document" | "location";

interface LocationHeader {
  name: string;
  address: string;
  imageUrl?: string;
}

interface TemplateHeader {
  type: HeaderType;
  text?: string;
  imageUrl?: string;
  videoUrl?: string;
  documentName?: string;
  location?: LocationHeader;
}

export type TemplateButton =
  | { type: "url"; label: string }
  | { type: "phone"; label: string }
  | { type: "quick_reply"; label: string }
  | { type: "copy_code"; label?: string }
  | { type: "flow"; label: string }
  | { type: "call_permission"; bizName: string };

export interface TemplateBubbleProps
  extends React.HTMLAttributes<HTMLDivElement> {
  header?: TemplateHeader;
  body: string;
  footer?: string;
  buttons?: TemplateButton[];
  timestamp?: string;
}

// ─── Variable highlighting ─────────────────────────────────────────────────

function BodyText({ text }: { text: string }) {
  const parts = text.split(/(\{\{[^}]+\}\}|\{[^}]+\})/g);
  return (
    <>
      {parts.map((part, i) =>
        /^\{/.test(part) ? (
          <span key={i} className="text-wa-emerald-600">
            {part}
          </span>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </>
  );
}

// ─── Header variants ──────────────────────────────────────────────────────────

function ImageHeader({ imageUrl }: { imageUrl?: string }) {
  return (
    <div className="h-[180px] w-full overflow-hidden rounded-t-lg" style={{ backgroundColor: "var(--wa-placeholder-bg)" }}>
      {imageUrl ? (
        <img src={imageUrl} alt="" className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full items-center justify-center">
          <img src="/wa-header-image.png" width={60} height={60} alt="" style={{ filter: "var(--wa-placeholder-icon)" }} />
        </div>
      )}
    </div>
  );
}

function VideoHeader({ videoUrl }: { videoUrl?: string }) {
  return (
    <div className="h-[180px] w-full overflow-hidden rounded-t-lg" style={{ backgroundColor: "var(--wa-placeholder-bg)" }}>
      {videoUrl ? (
        <video src={videoUrl} className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full items-center justify-center">
          <img src="/wa-header-video.png" width={60} height={60} alt="" />
        </div>
      )}
    </div>
  );
}

function DocumentHeader({ documentName }: { documentName?: string }) {
  return (
    <div className="flex h-[130px] w-full flex-col items-center justify-center gap-2 rounded-t-lg" style={{ backgroundColor: "var(--wa-placeholder-bg)" }}>
      <img src="/wa-header-document.png" width={52} height={52} alt="" style={{ filter: "var(--wa-placeholder-icon)" }} />
      {documentName && (
        <span className="text-[12px]" style={{ color: "var(--wa-icon-lighter)" }}>{documentName}</span>
      )}
    </div>
  );
}

function LocationHeader({ location }: { location?: LocationHeader }) {
  return (
    <div className="relative h-[160px] w-full overflow-hidden rounded-t-lg" style={{ backgroundColor: "var(--wa-placeholder-bg)" }}>
      {location?.imageUrl ? (
        <img src={location.imageUrl} alt="" className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full items-center justify-center">
          <img src="/wa-header-location.png" width={60} height={60} alt="" style={{ filter: "var(--wa-placeholder-icon)" }} />
        </div>
      )}
      {(location?.name || location?.address) && (
        <div className="absolute bottom-0 left-0 right-0 bg-black/30 px-3 py-2">
          {location.name && (
            <p className="text-[13px] font-medium text-white"><BodyText text={location.name} /></p>
          )}
          {location.address && (
            <p className="text-[12px] text-white/80"><BodyText text={location.address} /></p>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Buttons ──────────────────────────────────────────────────────────────────

function TemplateButtonRow({ button }: { button: TemplateButton }) {
  const base = "flex w-full items-center justify-center gap-1.5 py-[10px] text-[14px] font-medium";

  switch (button.type) {
    case "url":
      return (
        <button className={cn(base, "text-wa-emerald-500")}>
          <img src="/wa-icon-url.png" width={16} height={16} alt="" style={{ filter: "var(--wa-btn-icon-filter)" }} />
          {button.label}
        </button>
      );
    case "phone":
      return (
        <button className={cn(base, "text-wa-emerald-500")}>
          <img src="/wa-icon-phone.png" width={16} height={16} alt="" style={{ filter: "var(--wa-btn-icon-filter)" }} />
          {button.label}
        </button>
      );
    case "quick_reply":
      return (
        <button className={cn(base, "text-wa-emerald-500")}>
          <img src="/wa-icon-phone.png" width={16} height={16} alt="" style={{ filter: "var(--wa-btn-icon-filter)" }} />
          {button.label}
        </button>
      );
    case "copy_code":
      return (
        <button className={cn(base, "text-wa-emerald-500")}>
          <img src="/wa-icon-copy.png" width={16} height={16} alt="" style={{ filter: "var(--wa-btn-icon-filter)" }} />
          {button.label ?? "Copy offer code"}
        </button>
      );
    case "flow":
      return (
        <button className={cn(base, "text-wa-emerald-500")}>
          <img src="/wa-icon-flow.png" width={16} height={16} alt="" style={{ filter: "var(--wa-btn-icon-filter)" }} />
          {button.label}
        </button>
      );
    case "call_permission":
      return (
        <button className={cn(base, "flex-col gap-0.5 py-3 text-wa-text-primary")}>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-wa-emerald-500 text-white">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <span className="text-[14px] font-medium">
              Can <span className="font-semibold">{button.bizName}</span> call you?
            </span>
          </div>
        </button>
      );
  }
}

// ─── Main component ───────────────────────────────────────────────────────────

const TemplateBubble = React.forwardRef<HTMLDivElement, TemplateBubbleProps>(
  ({ className, header, body, footer, buttons = [], timestamp, ...props }, ref) => {
    const hasButtons = buttons.length > 0;

    return (
      <div
        ref={ref}
        className={cn("font-wa w-full max-w-[320px]", className)}
        {...props}
      >
        {/* Bubble */}
        <div className="overflow-hidden rounded-lg bg-wa-bubble-incoming shadow-sm">
          {/* Header */}
          {header?.type === "image" && <ImageHeader imageUrl={header.imageUrl} />}
          {header?.type === "video" && <VideoHeader videoUrl={header.videoUrl} />}
          {header?.type === "document" && <DocumentHeader documentName={header.documentName} />}
          {header?.type === "location" && <LocationHeader location={header.location} />}

          {/* Body */}
          <div className="px-[9px] pb-2 pt-[6px]">
            {header?.type === "text" && header.text && (
              <p className="mb-1 text-[14.2px] font-bold leading-[19px] text-wa-text-primary">
                <BodyText text={header.text} />
              </p>
            )}
            <p className="text-[14.2px] leading-[19px] text-wa-text-primary">
              <BodyText text={body} />
            </p>
            {footer && (
              <p className="mt-1 text-[12px] leading-[16px] text-wa-text-secondary">
                {footer}
              </p>
            )}
            {timestamp && (
              <div className="mt-1 flex justify-end">
                <span className="text-[11px] text-wa-bubble-meta">{timestamp}</span>
              </div>
            )}
          </div>

          {/* Buttons */}
          {hasButtons && (
            <div className="border-t border-wa-border">
              {buttons.map((btn, i) => (
                <div key={i} className={cn(i > 0 && "border-t border-wa-border")}>
                  <TemplateButtonRow button={btn} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
);
TemplateBubble.displayName = "TemplateBubble";

export { TemplateBubble, type TemplateBubbleProps };
