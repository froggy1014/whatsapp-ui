"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { type MessageStatus, MessageStatusIcon } from "./message-status";
import { type Reaction, ReactionsDisplay } from "./reaction";
import "@/components/ui/whatsapp/styles/whatsapp.css";

export type { MessageStatus, Reaction };

interface ChatBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "incoming" | "outgoing";
  timestamp?: string;
  status?: MessageStatus;
  sender?: string;
  showTail?: boolean;
  isGroupChat?: boolean;
  senderColor?: string;
  /** Emoji reactions shown on the bottom corner of the bubble */
  reactions?: Reaction[];
}



const ChatBubble = React.forwardRef<HTMLDivElement, ChatBubbleProps>(
  (
    {
      className,
      variant = "incoming",
      timestamp,
      status,
      sender,
      showTail = false,
      isGroupChat = false,
      senderColor,
      reactions,
      children,
      ...props
    },
    ref
  ) => {
    const isOutgoing = variant === "outgoing";
    const hasReactions = reactions && reactions.length > 0;

    return (
      <div
        className={cn(
          "relative flex w-full",
          isOutgoing ? "justify-end" : "justify-start",
          showTail ? "mb-[6px]" : "mb-[2px]",
          hasReactions && "mb-[24px]",
          className
        )}
        {...props}
        ref={ref}
      >
        <div
          className={cn(
            "font-wa relative min-w-[80px] max-w-[var(--wa-msg-max-width)] overflow-visible rounded-lg px-3 pb-[7px] pt-[6px]",
            isOutgoing
              ? "bg-wa-bubble-outgoing"
              : "bg-wa-bubble-incoming",
            showTail &&
              (isOutgoing ? "rounded-br-none" : "rounded-bl-none")
          )}
        >
          {/* Tail: based on actual WhatsApp Web SVG paths, flipped for bottom positioning */}
          {showTail && isOutgoing && (
            <svg
              viewBox="0 0 8 13"
              width="8"
              height="13"
              className="absolute bottom-0 -right-[8px]"
            >
              <path
                opacity="0.13"
                d="M5.188 12H0V0.807l6.467 8.625C7.526 10.844 6.958 12 5.188 12z"
                className="fill-wa-always-black"
              />
              <path
                d="M5.188 13H0V1.807l6.467 8.625C7.526 11.844 6.958 13 5.188 13z"
                className="fill-wa-bubble-outgoing"
              />
            </svg>
          )}
          {showTail && !isOutgoing && (
            <svg
              viewBox="0 0 8 13"
              width="8"
              height="13"
              className="absolute bottom-0 -left-[8px]"
            >
              <path
                opacity="0.13"
                d="M2.812 12H8V0.807L1.533 9.432C0.474 10.844 1.042 12 2.812 12z"
                className="fill-wa-always-black"
              />
              <path
                d="M2.812 13H8V1.807L1.533 10.432C0.474 11.844 1.042 13 2.812 13z"
                className="fill-wa-bubble-incoming"
              />
            </svg>
          )}

          {/* Group chat sender name */}
          {isGroupChat && !isOutgoing && sender && (
            <p
              className="mb-0.5 text-[12.8px] font-medium leading-[22px]"
              style={{ color: senderColor || "var(--wa-emerald-500)" }}
            >
              {sender}
            </p>
          )}

          {/* Message content */}
          <div className="text-[14.2px] leading-[19px] text-wa-text-primary">
            {children}
          </div>

          {/* Metadata: timestamp + status — next line, right-aligned */}
          <div className="mt-[2px] flex items-center justify-end gap-[3px]">
            {timestamp && (
              <span className="text-[11px] leading-[15px] text-wa-bubble-meta">
                {timestamp}
              </span>
            )}
            {isOutgoing && status && <MessageStatusIcon status={status} />}
          </div>
        </div>

        {/* Reactions — outgoing shifts left to avoid timestamp */}
        {hasReactions && (
          <div
            className={cn(
              "absolute flex gap-[3px]",
              isOutgoing ? "right-[8px]" : "left-[8px]"
            )}
            style={{ bottom: isOutgoing ? "-16px" : "-20px" }}
          >
            <ReactionsDisplay reactions={reactions!} />
          </div>
        )}
      </div>
    );
  }
);
ChatBubble.displayName = "ChatBubble";

export { ChatBubble, type ChatBubbleProps };
