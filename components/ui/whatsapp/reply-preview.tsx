"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "@/components/ui/whatsapp/styles/whatsapp.css";

type MediaType = "text" | "image" | "video" | "audio" | "document" | "sticker" | "location" | "contact";

const MEDIA_ICONS: Record<Exclude<MediaType, "text">, React.ReactNode> = {
  image:    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3L14.5 12l4.5 6H5l3.5-4.5z"/></svg>,
  video:    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>,
  audio:    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.4 5.4 0 0 1-4.4 2.26 5.4 5.4 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1zm-1 7v4l3-2-3-2z"/></svg>,
  document: <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z"/></svg>,
  sticker:  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 10.5h-3v-3h3v3zm0-4.5h-3V6h3v2z"/></svg>,
  location: <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>,
  contact:  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>,
};

export interface ReplyPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  author?: string;
  authorColor?: string;
  body?: string;
  mediaType?: MediaType;
  mediaThumb?: string;
  onClick?: () => void;
}

/**
 * Quote/reply preview strip shown inside a bubble.
 * Place this as the first child inside a ChatBubble or any message bubble.
 */
const ReplyPreview = React.forwardRef<HTMLDivElement, ReplyPreviewProps>(
  (
    {
      className,
      author,
      authorColor = "var(--wa-emerald-500)",
      body,
      mediaType = "text",
      mediaThumb,
      onClick,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role={onClick ? "button" : undefined}
        tabIndex={onClick ? 0 : undefined}
        onClick={onClick}
        onKeyDown={onClick ? (e) => e.key === "Enter" && onClick() : undefined}
        className={cn(
          "mb-[6px] flex min-h-[42px] overflow-hidden rounded-[4px]",
          "bg-black/[0.05] dark:bg-white/[0.05]",
          onClick && "cursor-pointer hover:bg-black/[0.08] dark:hover:bg-white/[0.08]",
          className
        )}
        {...props}
      >
        {/* Accent bar */}
        <div className="w-[3px] shrink-0" style={{ backgroundColor: authorColor }} />

        {/* Content */}
        <div className="flex min-w-0 flex-1 flex-col justify-center px-[8px] py-[5px]">
          {author && (
            <p className="text-[12.5px] font-semibold leading-[17px]" style={{ color: authorColor }}>
              {author}
            </p>
          )}
          <div className="flex items-center gap-1">
            {mediaType !== "text" && (
              <span className="shrink-0 text-wa-text-secondary">{MEDIA_ICONS[mediaType]}</span>
            )}
            {body && (
              <p className="line-clamp-2 text-[12.5px] leading-[17px] text-wa-text-secondary">
                {body}
              </p>
            )}
          </div>
        </div>

        {/* Media thumbnail */}
        {mediaThumb && (
          <div className="h-[52px] w-[52px] shrink-0 overflow-hidden">
            <img src={mediaThumb} alt="" className="h-full w-full object-cover" />
          </div>
        )}
      </div>
    );
  }
);
ReplyPreview.displayName = "ReplyPreview";

export { ReplyPreview };
