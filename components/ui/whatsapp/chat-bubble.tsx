"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "@/components/ui/whatsapp/styles/whatsapp.css";

type MessageStatus = "sending" | "sent" | "delivered" | "read";

interface ChatBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "incoming" | "outgoing";
  timestamp?: string;
  status?: MessageStatus;
  sender?: string;
  showTail?: boolean;
  isGroupChat?: boolean;
  senderColor?: string;
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

function StatusIndicator({ status }: { status: MessageStatus }) {
  switch (status) {
    case "sending":
      return (
        <span className="text-[var(--wa-delivered)] opacity-50">
          <CheckIcon />
        </span>
      );
    case "sent":
      return (
        <span className="text-[var(--wa-delivered)]">
          <CheckIcon />
        </span>
      );
    case "delivered":
      return (
        <span className="text-[var(--wa-delivered)]">
          <DoubleCheckIcon />
        </span>
      );
    case "read":
      return (
        <span className="text-[var(--wa-read)]">
          <DoubleCheckIcon />
        </span>
      );
  }
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
      children,
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
          // Extra bottom margin when tail is shown to make room for protruding tail
          showTail ? "mb-[6px]" : "",
          className
        )}
        {...props}
        ref={ref}
      >
        <div
          className={cn(
            "wa-font relative max-w-[var(--wa-msg-max-width)] overflow-visible rounded-lg px-[9px] pb-2 pt-[6px]",
            isOutgoing
              ? "bg-[var(--wa-bubble-outgoing)]"
              : "bg-[var(--wa-bubble-incoming)]",
            showTail &&
              (isOutgoing ? "rounded-br-[3px]" : "rounded-bl-[3px]")
          )}
        >
          {/* Tail: based on actual WhatsApp Web SVG paths, flipped for bottom positioning */}
          {showTail && (
            <svg
              viewBox="0 0 8 13"
              width="8"
              height="13"
              className={cn(
                "absolute bottom-0",
                isOutgoing ? "-right-[8px]" : "-left-[8px]"
              )}
            >
              {isOutgoing ? (
                <path
                  d="M5.188 13H0V1.807l6.467 8.625C7.526 11.844 6.958 13 5.188 13z"
                  fill="var(--wa-bubble-outgoing)"
                />
              ) : (
                <path
                  d="M1.533 10.432L8 1.807V13H2.812C1.042 13 .474 11.844 1.533 10.432z"
                  fill="var(--wa-bubble-incoming)"
                />
              )}
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
          <div className="text-[14.2px] leading-[19px] text-[var(--wa-text-primary)]">
            {children}
          </div>

          {/* Metadata: timestamp + status */}
          <div className="float-right -mb-1 ml-2 mt-0.5 flex items-center gap-[3px]">
            {timestamp && (
              <span className="text-[11px] leading-[15px] text-[var(--wa-bubble-meta)]">
                {timestamp}
              </span>
            )}
            {isOutgoing && status && <StatusIndicator status={status} />}
          </div>
        </div>
      </div>
    );
  }
);
ChatBubble.displayName = "ChatBubble";

export { ChatBubble, type ChatBubbleProps, type MessageStatus };
