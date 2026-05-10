"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "@/components/ui/whatsapp/styles/whatsapp.css";

export type MessageStatus = "sending" | "sent" | "delivered" | "read";

export interface Reaction {
  emoji: string;
  count?: number;
  reacted?: boolean;
}

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

function ReactionsDisplay({ reactions }: { reactions: Reaction[] }) {
  const hasCount = reactions.some((r) => r.count !== undefined && r.count > 0);

  if (hasCount) {
    // Group chat: overlapping emoji circles + total count
    const total = reactions.reduce((sum, r) => sum + (r.count ?? 1), 0);
    return (
      <span className="relative z-10 inline-flex items-center rounded-full border border-wa-border bg-wa-bg px-[7px] py-[3px] shadow-sm">
        <span className="flex items-center">
          {reactions.map((r, i) => (
            <span
              key={i}
              className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 border-wa-bg bg-wa-bg text-[13px] leading-none"
              style={{ marginLeft: i > 0 ? "-6px" : "0", zIndex: reactions.length - i }}
            >
              {r.emoji}
            </span>
          ))}
        </span>
        <span className="ml-[6px] text-[12px] font-medium text-wa-text-secondary">{total}</span>
      </span>
    );
  }

  // 1:1 chat: separate pill per emoji
  return (
    <>
      {reactions.map((r, i) => (
        <span key={i} className={cn(
          "relative z-10 inline-flex items-center rounded-full border px-[5px] py-[2px] text-[13px] leading-none shadow-sm",
          "border-wa-border bg-wa-bg",
          r.reacted && "border-wa-emerald-500 bg-wa-green-75 dark:bg-[#005c4b]"
        )}>
          {r.emoji}
        </span>
      ))}
    </>
  );
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
        <span className="text-wa-delivered opacity-50">
          <CheckIcon />
        </span>
      );
    case "sent":
      return (
        <span className="text-wa-delivered">
          <CheckIcon />
        </span>
      );
    case "delivered":
      return (
        <span className="text-wa-delivered">
          <DoubleCheckIcon />
        </span>
      );
    case "read":
      return (
        <span className="text-wa-read">
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

          {/* Metadata: timestamp + status */}
          <div className="float-right -mb-1 ml-2 mt-0.5 flex items-center gap-[3px]">
            {timestamp && (
              <span className="text-[11px] leading-[15px] text-wa-bubble-meta">
                {timestamp}
              </span>
            )}
            {isOutgoing && status && <StatusIndicator status={status} />}
          </div>
        </div>

        {/* Reactions — overlaps 1px onto the bubble bottom */}
        {hasReactions && (
          <div className={cn(
            "absolute flex gap-[3px]",
            isOutgoing ? "right-[8px]" : "left-[8px]"
          )} style={{ bottom: "-20px" }}>
            <ReactionsDisplay reactions={reactions!} />
          </div>
        )}
      </div>
    );
  }
);
ChatBubble.displayName = "ChatBubble";

export { ChatBubble, type ChatBubbleProps };
