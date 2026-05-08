"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "@/components/ui/whatsapp/styles/whatsapp.css";
import { type MessageStatus } from "@/components/ui/whatsapp/chat-bubble";

interface ImageBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "incoming" | "outgoing";
  src: string;
  alt?: string;
  caption?: string;
  timestamp?: string;
  status?: MessageStatus;
  showTail?: boolean;
  width?: number;
  height?: number;
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 11" height="11" width="16" className={className}>
      <path
        d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.011-2.175a.463.463 0 0 0-.349-.158.467.467 0 0 0-.338.131.537.537 0 0 0-.14.353.54.54 0 0 0 .13.363l2.39 2.576a.465.465 0 0 0 .349.158.457.457 0 0 0 .368-.189l6.596-8.14a.504.504 0 0 0 .103-.36.516.516 0 0 0-.223-.271z"
        fill="currentColor"
      />
    </svg>
  );
}

function DoubleCheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 11" height="11" width="16" className={className}>
      <path
        d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.011-2.175a.463.463 0 0 0-.349-.158.467.467 0 0 0-.338.131.537.537 0 0 0-.14.353.54.54 0 0 0 .13.363l2.39 2.576a.465.465 0 0 0 .349.158.457.457 0 0 0 .368-.189l6.596-8.14a.504.504 0 0 0 .103-.36.516.516 0 0 0-.223-.271z"
        fill="currentColor"
      />
      <path
        d="M15.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-1.2-1.298-.728.897 1.58 1.704a.465.465 0 0 0 .349.158.457.457 0 0 0 .368-.189l6.596-8.14a.504.504 0 0 0 .103-.36.516.516 0 0 0-.193-.484z"
        fill="currentColor"
      />
    </svg>
  );
}

const ImageBubble = React.forwardRef<HTMLDivElement, ImageBubbleProps>(
  (
    {
      className,
      variant = "incoming",
      src,
      alt = "",
      caption,
      timestamp,
      status,
      showTail = false,
      width,
      height,
      ...props
    },
    ref
  ) => {
    const isOutgoing = variant === "outgoing";

    const statusIcon = () => {
      if (!isOutgoing || !status) return null;
      if (status === "sending" || status === "sent")
        return <span className="text-white opacity-75"><CheckIcon /></span>;
      if (status === "delivered")
        return <span className="text-white opacity-90"><DoubleCheckIcon /></span>;
      if (status === "read")
        return <span className="text-wa-read"><DoubleCheckIcon /></span>;
    };

    return (
      <div
        className={cn(
          "flex w-full",
          isOutgoing ? "justify-end" : "justify-start",
          showTail ? "mb-[6px]" : "",
          className
        )}
        {...props}
        ref={ref}
      >
        <div
          className={cn(
            "font-wa relative max-w-[var(--wa-msg-max-width)] overflow-hidden rounded-lg",
            showTail && (isOutgoing ? "rounded-br-[3px]" : "rounded-bl-[3px]")
          )}
        >
          {showTail && (
            <svg
              viewBox="0 0 8 13"
              width="8"
              height="13"
              className={cn(
                "absolute bottom-0 z-10",
                isOutgoing ? "-right-[8px]" : "-left-[8px]"
              )}
            >
              {isOutgoing ? (
                <path
                  d="M5.188 13H0V1.807l6.467 8.625C7.526 11.844 6.958 13 5.188 13z"
                  className="fill-wa-bubble-outgoing"
                />
              ) : (
                <path
                  d="M1.533 10.432L8 1.807V13H2.812C1.042 13 .474 11.844 1.533 10.432z"
                  className="fill-wa-bubble-incoming"
                />
              )}
            </svg>
          )}

          {/* Image */}
          <div className="relative">
            <img
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="block max-h-[330px] w-full object-cover"
              style={{ minWidth: 200 }}
            />

            {/* Timestamp overlay on image (no caption) */}
            {!caption && (
              <div className="absolute bottom-[6px] right-[8px] flex items-center gap-[3px] rounded-full bg-black/40 px-[6px] py-[2px]">
                {timestamp && (
                  <span className="text-[11px] leading-[15px] text-white">
                    {timestamp}
                  </span>
                )}
                {statusIcon()}
              </div>
            )}
          </div>

          {/* Caption (if present) */}
          {caption && (
            <div
              className={cn(
                "px-[9px] pb-2 pt-[4px]",
                isOutgoing
                  ? "bg-wa-bubble-outgoing"
                  : "bg-wa-bubble-incoming"
              )}
            >
              <p className="text-[14.2px] leading-[19px] text-wa-text-primary">
                {caption}
              </p>
              <div className="float-right -mb-1 ml-2 mt-0.5 flex items-center gap-[3px]">
                {timestamp && (
                  <span className="text-[11px] leading-[15px] text-wa-bubble-meta">
                    {timestamp}
                  </span>
                )}
                {isOutgoing && status && (
                  <span>
                    {status === "read"
                      ? <span className="text-wa-read"><DoubleCheckIcon /></span>
                      : status === "delivered"
                      ? <span className="text-wa-delivered"><DoubleCheckIcon /></span>
                      : <span className="text-wa-delivered"><CheckIcon /></span>}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);
ImageBubble.displayName = "ImageBubble";

export { ImageBubble, type ImageBubbleProps };
