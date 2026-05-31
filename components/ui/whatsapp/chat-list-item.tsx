"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "@/components/ui/whatsapp/styles/whatsapp.css";

// WDS avatar palette — maps to actual WhatsApp avatar colors
const AVATAR_COLORS = [
  "#dba685", "#53a6fd", "#25d366", "#fc9775",
  "#ff72a1", "#a791ff", "#fb5061", "#53bdeb",
  "#42c7b8", "#ffd279",
];

function getAvatarColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function getInitials(name: string): string {
  return name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
}

import { type MessageStatus, MessageStatusIcon } from "./message-status";

interface ChatListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  avatar?: string;
  lastMessage?: string;
  lastMessageStatus?: MessageStatus;
  timestamp?: string;
  unreadCount?: number;
  isOnline?: boolean;
  isMuted?: boolean;
  isTyping?: boolean;
  isPinned?: boolean;
  isSelected?: boolean;
  /** Override the root element (e.g. Next.js Link, <a>, <button>) */
  render?: React.ReactElement;
}


const ChatListItem = React.forwardRef<HTMLDivElement, ChatListItemProps>(
  (
    {
      className,
      name,
      avatar,
      lastMessage,
      lastMessageStatus,
      timestamp,
      unreadCount,
      isOnline = false,
      isMuted = false,
      isTyping = false,
      isPinned = false,
      isSelected = false,
      render,
      ...props
    },
    ref
  ) => {
    const hasUnread = !!unreadCount && unreadCount > 0;
    const avatarColor = getAvatarColor(name);

    const rootClassName = cn(
      "font-wa flex cursor-pointer items-center gap-[15px] py-[10px] transition-colors duration-150",
      isSelected
        ? "mx-2 rounded-xl bg-wa-active px-[9px]"
        : "mx-2 rounded-xl px-[9px] hover:bg-wa-hover",
      className
    );

    const content = (
      <>
        {/* Avatar */}
        <div className="relative shrink-0">
          <div
            className="h-wa-avatar-md w-wa-avatar-md overflow-hidden rounded-full"
            style={{ backgroundColor: avatar ? undefined : avatarColor }}
          >
            {avatar ? (
              <img src={avatar} alt={name} className="h-full w-full object-cover" />
            ) : (
              <span className="flex h-full w-full items-center justify-center text-[17px] font-semibold text-white">
                {getInitials(name)}
              </span>
            )}
          </div>
          {isOnline && (
            <span className="absolute bottom-0 right-0 h-[13px] w-[13px] rounded-full border-2 border-wa-panel-bg bg-wa-unread-marker" />
          )}
        </div>

        {/* Content */}
        <div className="flex min-w-0 flex-1 flex-col pb-[2px]">
          {/* Row 1: name + timestamp */}
          <div className="flex items-center justify-between gap-1">
            <span className="truncate text-[17px] leading-[21px] text-wa-text-primary font-normal">
              {name}
            </span>
            <span className={cn(
              "shrink-0 text-[12px] font-semibold leading-[14px]",
              hasUnread ? "text-wa-unread-marker" : "text-wa-text-secondary"
            )}>
              {timestamp}
            </span>
          </div>

          {/* Row 2: last message + badges */}
          <div className="mt-[3px] flex items-center justify-between gap-1">
            <div className="flex min-w-0 items-center gap-[3px]">
              {lastMessageStatus && !hasUnread && (
                <MessageStatusIcon status={lastMessageStatus} />
              )}
              <span className="truncate text-[13px] leading-[20px] text-wa-text-secondary">
                {isTyping ? (
                  <span className="text-wa-emerald-500">typing...</span>
                ) : (
                  lastMessage
                )}
              </span>
            </div>

            <div className="ml-1.5 flex shrink-0 items-center gap-1">
              {isMuted && (
                <svg viewBox="0 0 24 24" height="16" width="16" className="text-wa-icon-lighter" fill="currentColor">
                  <path d="M20 18.69L7.84 6.14 5.27 3.49 4 4.76l2.8 2.8c-.52.99-.8 2.16-.8 3.43v5l-2 2v1h13.73l2 2L21 19.69l-1-1zM12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2zm6-7.32V11c0-3.08-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.23.06-.45.15-.66.23l6.16 6.17v3.1z" />
                </svg>
              )}
              {isPinned && (
                <svg viewBox="0 0 24 24" height="16" width="16" className="text-wa-icon-lighter" fill="currentColor">
                  <path d="M19.235 1.424a1.15 1.15 0 0 0-1.627 0l-4.244 4.244-1.407-.467a3.683 3.683 0 0 0-3.884.898L6.17 8.002a.515.515 0 0 0 0 .728l3.39 3.389-4.3 4.3a.5.5 0 0 0 .707.707l4.3-4.3 3.39 3.39a.515.515 0 0 0 .727 0l1.904-1.904a3.683 3.683 0 0 0 .898-3.884l-.467-1.408 4.244-4.244a1.15 1.15 0 0 0 0-1.627l-1.728-1.725z" />
                </svg>
              )}
              {hasUnread && (
                <span className={cn(
                  "flex h-[20px] min-w-[20px] items-center justify-center rounded-full px-[5px] text-[11px] font-bold text-white",
                  isMuted ? "bg-wa-icon-lighter" : "bg-wa-unread-marker"
                )}>
                  {unreadCount! > 999 ? "999+" : unreadCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </>
    );

    if (render) {
      return React.cloneElement(render, {
        ref,
        className: cn(
          (render.props as Record<string, string | undefined>).className,
          rootClassName
        ),
        ...props,
      } as React.HTMLAttributes<HTMLElement>, content);
    }

    return (
      <div ref={ref} className={rootClassName} {...props}>
        {content}
      </div>
    );
  }
);
ChatListItem.displayName = "ChatListItem";

export { ChatListItem, type ChatListItemProps };
