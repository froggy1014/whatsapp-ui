"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { type MessageStatus, MessageStatusIcon } from "./message-status";
import "@/components/ui/whatsapp/styles/whatsapp.css";

export type InteractiveReplyType =
  | "button_reply"
  | "list_reply"
  | "nfm_reply"
  | "button"
  | string;

export interface InteractiveReplyBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "incoming" | "outgoing";
  /** The reply title or text shown by the user */
  title: string;
  /** Subtype label — e.g. "button_reply", "list_reply", "nfm_reply" */
  replyType?: InteractiveReplyType;
  /** Optional description (for list replies) */
  description?: string;
  timestamp?: string;
  status?: MessageStatus;
  showTail?: boolean;
}

const REPLY_TYPE_LABELS: Record<string, string> = {
  button_reply: "Button reply",
  list_reply: "List reply",
  nfm_reply: "Flow reply",
  button: "Button reply",
};

function ReplyIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

const InteractiveReplyBubble = React.forwardRef<HTMLDivElement, InteractiveReplyBubbleProps>(
  (
    {
      className,
      variant = "incoming",
      title,
      replyType,
      description,
      timestamp,
      status,
      showTail = false,
      ...props
    },
    ref
  ) => {
    const isOutgoing = variant === "outgoing";
    const label = (replyType && REPLY_TYPE_LABELS[replyType]) || "Reply";

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
            isOutgoing ? "bg-wa-bubble-outgoing" : "bg-wa-bubble-incoming",
            showTail && (isOutgoing ? "rounded-br-none" : "rounded-bl-none")
          )}
        >
          {showTail && isOutgoing && (
            <svg viewBox="0 0 8 13" width="8" height="13" className="absolute bottom-0 -right-[8px]">
              <path opacity="0.13" d="M5.188 12H0V0.807l6.467 8.625C7.526 10.844 6.958 12 5.188 12z" className="fill-wa-always-black" />
              <path d="M5.188 13H0V1.807l6.467 8.625C7.526 11.844 6.958 13 5.188 13z" className="fill-wa-bubble-outgoing" />
            </svg>
          )}
          {showTail && !isOutgoing && (
            <svg viewBox="0 0 8 13" width="8" height="13" className="absolute bottom-0 -left-[8px]">
              <path opacity="0.13" d="M2.812 12H8V0.807L1.533 9.432C0.474 10.844 1.042 12 2.812 12z" className="fill-wa-always-black" />
              <path d="M2.812 13H8V1.807L1.533 10.432C0.474 11.844 1.042 13 2.812 13z" className="fill-wa-bubble-incoming" />
            </svg>
          )}

          <div className="flex items-center gap-2">
            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md"
              style={{ background: "var(--wa-teal, #00a884)", opacity: 0.85 }}
            >
              <ReplyIcon />
            </div>
            <div className="min-w-0">
              <p className="text-[14.2px] font-medium leading-[19px] text-wa-text-primary">
                {title}
              </p>
              <p className="text-[12px] leading-[16px] text-wa-text-secondary">
                {label}
              </p>
            </div>
          </div>

          {description && (
            <p className="mt-[4px] text-[12.5px] leading-[17px] text-wa-text-secondary">
              {description}
            </p>
          )}

          <div className="mt-[2px] flex items-center justify-end gap-[3px]">
            {timestamp && (
              <span className="text-[11px] leading-[15px] text-wa-bubble-meta">
                {timestamp}
              </span>
            )}
            {isOutgoing && status && <MessageStatusIcon status={status} />}
          </div>
        </div>
      </div>
    );
  }
);
InteractiveReplyBubble.displayName = "InteractiveReplyBubble";

export { InteractiveReplyBubble };
