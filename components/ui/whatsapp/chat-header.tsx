"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "@/components/ui/whatsapp/styles/whatsapp.css";

interface ChatHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  avatar?: string;
  status?: string;
  isOnline?: boolean;
  onVideoCall?: () => void;
  onVoiceCall?: () => void;
  onSearch?: () => void;
  onMenu?: () => void;
  onBack?: () => void;
  /** Slot for custom action buttons rendered before the standard actions */
  customActions?: React.ReactNode;
}

function VideoCallIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" height="24" width="24" className={className}>
      <path
        d="M3.27 7.125v9.75c0 .975.825 1.8 1.8 1.8h9c.975 0 1.8-.825 1.8-1.8v-3.375l3.9 3.375V7.125l-3.9 3.375V7.125c0-.975-.825-1.8-1.8-1.8h-9c-.975 0-1.8.825-1.8 1.8z"
        fill="currentColor"
      />
    </svg>
  );
}

function VoiceCallIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" height="24" width="24" className={className}>
      <path
        d="M19.44 13c-.22 0-.45-.07-.67-.12a9.44 9.44 0 0 1-1.31-.39 2 2 0 0 0-2.48 1l-.22.45a12.18 12.18 0 0 1-2.66-2 12.18 12.18 0 0 1-2-2.66l.42-.28a2 2 0 0 0 1-2.48 10.33 10.33 0 0 1-.39-1.31c-.05-.22-.09-.45-.12-.68a2 2 0 0 0-2-1.73H7a2 2 0 0 0-2 2.33 15.64 15.64 0 0 0 13.67 13.67 2 2 0 0 0 2.33-2v-2.1a2 2 0 0 0-1.56-1.7z"
        fill="currentColor"
      />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" height="24" width="24" className={className}>
      <path
        d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2z"
        fill="currentColor"
      />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" height="24" width="24" className={className}>
      <path
        d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
        fill="currentColor"
      />
    </svg>
  );
}

function BackIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" height="24" width="24" className={className}>
      <path
        d="M12 4l1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8z"
        fill="currentColor"
      />
    </svg>
  );
}

const ChatHeader = React.forwardRef<HTMLDivElement, ChatHeaderProps>(
  (
    {
      className,
      name,
      avatar,
      status,
      isOnline = false,
      onVideoCall,
      onVoiceCall,
      onSearch,
      onMenu,
      onBack,
      customActions,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "font-wa flex h-wa-header-height items-center gap-[10px] bg-wa-panel-header-bg px-4",
          className
        )}
        {...props}
      >
        {/* Back button (mobile) */}
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="p-1 text-wa-icon-default transition-colors hover:text-wa-icon-lighter"
            aria-label="Back"
          >
            <BackIcon />
          </button>
        )}

        {/* Avatar */}
        <div className="relative shrink-0 cursor-pointer">
          <div className="h-wa-avatar-sm w-wa-avatar-sm overflow-hidden rounded-full bg-wa-gray-300">
            {avatar ? (
              <img
                src={avatar}
                alt={name}
                className="h-full w-full object-cover"
              />
            ) : (
              <svg
                viewBox="0 0 212 212"
                className="h-full w-full text-wa-gray-100"
              >
                <path
                  d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z"
                  className="fill-wa-gray-300"
                />
                <path
                  d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.623 0 52.661-11.058 70.945-28.985v-.398s-.26-.61-.818-1.678a49.69 49.69 0 0 0-1.07-1.926c-.031-.055-.071-.118-.104-.174a56.926 56.926 0 0 0-1.447-2.324zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-.725-3.701 37.058 37.058 0 0 0-1.716-5.25 36.564 36.564 0 0 0-2.422-4.84 35.917 35.917 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z"
                  fill="currentColor"
                />
              </svg>
            )}
          </div>
        </div>

        {/* Name & Status */}
        <div className="flex min-w-0 flex-1 cursor-pointer flex-col justify-center">
          <span className="truncate text-[16px] leading-[21px] text-wa-text-primary">
            {name}
          </span>
          {(status || isOnline) && (
            <span className="truncate text-[13px] leading-[20px] text-wa-text-secondary">
              {isOnline ? "online" : status}
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-[10px]">
          {customActions}
          {onVideoCall && (
            <button
              type="button"
              onClick={onVideoCall}
              className="rounded-full p-2 text-wa-icon-default transition-colors hover:bg-wa-hover"
              aria-label="Video call"
            >
              <VideoCallIcon />
            </button>
          )}
          {onVoiceCall && (
            <button
              type="button"
              onClick={onVoiceCall}
              className="rounded-full p-2 text-wa-icon-default transition-colors hover:bg-wa-hover"
              aria-label="Voice call"
            >
              <VoiceCallIcon />
            </button>
          )}
          {onSearch && (
            <button
              type="button"
              onClick={onSearch}
              className="rounded-full p-2 text-wa-icon-default transition-colors hover:bg-wa-hover"
              aria-label="Search"
            >
              <SearchIcon />
            </button>
          )}
          {onMenu && (
            <button
              type="button"
              onClick={onMenu}
              className="rounded-full p-2 text-wa-icon-default transition-colors hover:bg-wa-hover"
              aria-label="Menu"
            >
              <MenuIcon />
            </button>
          )}
        </div>
      </div>
    );
  }
);
ChatHeader.displayName = "ChatHeader";

export { ChatHeader, type ChatHeaderProps };
