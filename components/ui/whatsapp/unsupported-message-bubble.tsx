"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { type MessageStatus, MessageStatusIcon } from "./message-status";
import "@/components/ui/whatsapp/styles/whatsapp.css";

export interface UnsupportedMessageBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "incoming" | "outgoing";
  title?: string;
  description?: string;
  timestamp?: string;
  status?: MessageStatus;
  showTail?: boolean;
}

const UnsupportedMessageBubble = React.forwardRef<HTMLDivElement, UnsupportedMessageBubbleProps>(
  (
    {
      className,
      variant = "incoming",
      title = "This message is not supported",
      description,
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
        <div
          className={cn(
            "font-wa relative max-w-[60%] overflow-visible rounded-lg px-3 pb-[7px] pt-[6px]",
            "border border-dashed border-wa-border",
            isOutgoing ? "bg-wa-bubble-outgoing" : "bg-wa-bubble-incoming",
            showTail && (isOutgoing ? "rounded-br-none" : "rounded-bl-none")
          )}
        >
          <div className="flex items-start gap-2">
            <svg viewBox="0 0 24 24" width="16" height="16" className="mt-[2px] shrink-0 text-wa-text-secondary" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
            <div className="min-w-0">
              <p className="text-[13px] leading-[18px] text-wa-text-secondary">{title}</p>
              {description && (
                <p className="mt-[2px] text-[12px] leading-[16px] text-wa-text-secondary opacity-70">{description}</p>
              )}
            </div>
          </div>
          <div className="float-right -mb-1 ml-2 mt-0.5 flex items-center gap-[3px]">
            {timestamp && <span className="text-[11px] leading-[15px] text-wa-bubble-meta">{timestamp}</span>}
            {isOutgoing && status && <MessageStatusIcon status={status} />}
          </div>
        </div>
      </div>
    );
  }
);
UnsupportedMessageBubble.displayName = "UnsupportedMessageBubble";

export { UnsupportedMessageBubble };
