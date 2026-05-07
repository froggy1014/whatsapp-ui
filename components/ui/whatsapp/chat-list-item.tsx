"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "@/components/ui/whatsapp/styles/whatsapp.css";

interface ChatListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  avatar?: string;
  lastMessage?: string;
  timestamp?: string;
  unreadCount?: number;
  isOnline?: boolean;
  isMuted?: boolean;
  isTyping?: boolean;
  isPinned?: boolean;
  isSelected?: boolean;
}

const ChatListItem = React.forwardRef<HTMLDivElement, ChatListItemProps>(
  (
    {
      className,
      name,
      avatar,
      lastMessage,
      timestamp,
      unreadCount,
      isOnline = false,
      isMuted = false,
      isTyping = false,
      isPinned = false,
      isSelected = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "wa-font flex cursor-pointer items-center gap-[15px] px-[13px] py-[13px]",
          "hover:bg-[var(--wa-hover)] transition-colors duration-200",
          isSelected && "bg-[var(--wa-active)]",
          className
        )}
        {...props}
      >
        {/* Avatar */}
        <div className="relative shrink-0">
          <div className="h-[var(--wa-avatar-size-md)] w-[var(--wa-avatar-size-md)] overflow-hidden rounded-full bg-[var(--wa-gray-300)]">
            {avatar ? (
              <img
                src={avatar}
                alt={name}
                className="h-full w-full object-cover"
              />
            ) : (
              <svg
                viewBox="0 0 212 212"
                className="h-full w-full text-[var(--wa-gray-100)]"
              >
                <path
                  d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z"
                  fill="var(--wa-gray-300)"
                />
                <path
                  d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.623 0 52.661-11.058 70.945-28.985v-.398s-.26-.61-.818-1.678a49.69 49.69 0 0 0-1.07-1.926c-.031-.055-.071-.118-.104-.174a56.926 56.926 0 0 0-1.447-2.324zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-.725-3.701 37.058 37.058 0 0 0-1.716-5.25 36.564 36.564 0 0 0-2.422-4.84 35.917 35.917 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z"
                  fill="currentColor"
                />
              </svg>
            )}
          </div>
          {isOnline && (
            <span className="absolute bottom-0 right-0 h-[13px] w-[13px] rounded-full border-2 border-[var(--wa-panel-bg)] bg-[var(--wa-unread-marker)]" />
          )}
        </div>

        {/* Content */}
        <div className="flex min-w-0 flex-1 flex-col border-b border-[var(--wa-divider)] pb-[13px]">
          <div className="flex items-center justify-between">
            <span className="truncate text-[17px] leading-[21px] text-[var(--wa-text-primary)]">
              {name}
            </span>
            <span
              className={cn(
                "shrink-0 text-[12px] leading-[14px]",
                unreadCount && unreadCount > 0
                  ? "text-[var(--wa-unread-marker)]"
                  : "text-[var(--wa-text-secondary)]"
              )}
            >
              {timestamp}
            </span>
          </div>

          <div className="mt-[2px] flex items-center justify-between">
            <span className="truncate text-[13px] leading-[20px] text-[var(--wa-text-secondary)]">
              {isTyping ? (
                <span className="text-[var(--wa-emerald-500)]">typing...</span>
              ) : (
                lastMessage
              )}
            </span>

            <div className="ml-1.5 flex shrink-0 items-center gap-1">
              {isMuted && (
                <svg
                  viewBox="0 0 16 18"
                  height="18"
                  width="16"
                  className="text-[var(--wa-icon-lighter)]"
                >
                  <path
                    d="M11.52 2.132c.052-.165.055-.26.007-.36a.348.348 0 0 0-.263-.192c-.07-.013-.263-.013-.39.082l-5.299 4.04L2.866 2.95l.638-.636L14.216 13l-.637.636-3.1-3.087-.42.32-1.182.902a4.91 4.91 0 0 1-.892.518l-.076.032a3.283 3.283 0 0 1-.773.225l-.153.023-.157.013c-.426.025-.822-.04-1.227-.196-.62-.24-1.131-.668-1.48-1.108a3.907 3.907 0 0 1-.53-.87c-.15-.339-.23-.636-.28-.905a3.896 3.896 0 0 1-.055-.685v-.108l-.002-.07H3.5v-.902h.348l.005-.136c.034-.535.165-1.06.39-1.533l.053-.103-2.432-2.42.637-.637L5.576 5.73l.5-.381 5.443-3.217zM7.878 11.254v.002c.031.088.07.184.122.283.116.22.277.432.483.601.15.124.322.22.505.288.188.07.34.096.595.08l.06-.006c.122-.017.229-.044.337-.081l.128-.049c.102-.043.223-.109.374-.21l.666-.508-3.27-3.255v2.855z"
                    fill="currentColor"
                  />
                </svg>
              )}
              {isPinned && (
                <svg
                  viewBox="0 0 24 24"
                  height="18"
                  width="18"
                  className="text-[var(--wa-icon-lighter)]"
                >
                  <path
                    d="M19.235 1.424a1.15 1.15 0 0 0-1.627 0l-4.244 4.244-1.407-.467a3.683 3.683 0 0 0-3.884.898L6.17 8.002a.515.515 0 0 0 0 .728l3.39 3.389-4.3 4.3a.5.5 0 0 0 .707.707l4.3-4.3 3.39 3.39a.515.515 0 0 0 .727 0l1.904-1.904a3.683 3.683 0 0 0 .898-3.884l-.467-1.408 4.244-4.244a1.15 1.15 0 0 0 0-1.627l-1.728-1.725z"
                    fill="currentColor"
                  />
                </svg>
              )}
              {unreadCount && unreadCount > 0 ? (
                <span className="flex h-[20px] min-w-[20px] items-center justify-center rounded-full bg-[var(--wa-unread-marker)] px-[5px] text-[11px] font-bold text-white">
                  {unreadCount > 999 ? "999+" : unreadCount}
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
);
ChatListItem.displayName = "ChatListItem";

export { ChatListItem, type ChatListItemProps };
