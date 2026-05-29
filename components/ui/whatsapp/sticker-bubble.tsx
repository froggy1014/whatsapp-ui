"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { type MessageStatus, MessageStatusIcon } from "./message-status";
import "@/components/ui/whatsapp/styles/whatsapp.css";

export interface StickerBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "incoming" | "outgoing";
  src: string;
  alt?: string;
  animated?: boolean;
  timestamp?: string;
  status?: MessageStatus;
  showTail?: boolean;
}

const StickerBubble = React.forwardRef<HTMLDivElement, StickerBubbleProps>(
  (
    {
      className,
      variant = "incoming",
      src,
      alt = "Sticker",
      animated = false,
      timestamp,
      status,
      showTail = false,
      ...props
    },
    ref
  ) => {
    const isOutgoing = variant === "outgoing";

    return (
      <div
        className={cn(
          "flex w-full",
          isOutgoing ? "justify-end" : "justify-start",
          showTail ? "mb-[6px]" : "mb-[2px]",
          className
        )}
        {...props}
        ref={ref}
      >
        <div className="flex flex-col items-end">
          {/* No bubble background — sticker floats directly */}
          <div className="relative h-[160px] w-[160px]">
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-contain"
              draggable={false}
            />

            {/* Animated badge */}
            {animated && (
              <span className="absolute left-1 top-1 rounded bg-black/50 px-[5px] py-[2px] text-[10px] font-bold uppercase tracking-wide text-white">
                GIF
              </span>
            )}
          </div>

          {/* Timestamp pill below sticker */}
          {(timestamp || (isOutgoing && status)) && (
            <div className="mt-[-4px] flex items-center gap-[3px] rounded-full bg-black/40 px-[6px] py-[2px]">
              {timestamp && (
                <span className="text-[11px] leading-[15px] text-white">{timestamp}</span>
              )}
              {isOutgoing && status && (
                <span className="text-white"><MessageStatusIcon status={status} /></span>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
);
StickerBubble.displayName = "StickerBubble";

export { StickerBubble };
