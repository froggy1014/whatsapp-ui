"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "@/components/ui/whatsapp/styles/whatsapp.css";
import { type MessageStatus } from "@/components/ui/whatsapp/chat-bubble";

interface VoiceMessageBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "incoming" | "outgoing";
  duration: string;
  timestamp?: string;
  status?: MessageStatus;
  showTail?: boolean;
  isPlaying?: boolean;
  progress?: number;
  avatarSrc?: string;
  onPlayPause?: () => void;
}

// Deterministic fake waveform bars
const WAVEFORM_BARS = [3, 5, 8, 6, 10, 7, 4, 9, 6, 5, 8, 10, 7, 4, 6, 9, 5, 8, 3, 6, 10, 7, 5, 8, 4, 9, 6, 7, 5, 8];

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" className={className}>
      <path d="M8 5v14l11-7z" fill="currentColor" />
    </svg>
  );
}

function PauseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" className={className}>
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="currentColor" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 11" height="11" width="16" className={className}>
      <path d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.011-2.175a.463.463 0 0 0-.349-.158.467.467 0 0 0-.338.131.537.537 0 0 0-.14.353.54.54 0 0 0 .13.363l2.39 2.576a.465.465 0 0 0 .349.158.457.457 0 0 0 .368-.189l6.596-8.14a.504.504 0 0 0 .103-.36.516.516 0 0 0-.223-.271z" fill="currentColor" />
    </svg>
  );
}

function DoubleCheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 11" height="11" width="16" className={className}>
      <path d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.011-2.175a.463.463 0 0 0-.349-.158.467.467 0 0 0-.338.131.537.537 0 0 0-.14.353.54.54 0 0 0 .13.363l2.39 2.576a.465.465 0 0 0 .349.158.457.457 0 0 0 .368-.189l6.596-8.14a.504.504 0 0 0 .103-.36.516.516 0 0 0-.223-.271z" fill="currentColor" />
      <path d="M15.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-1.2-1.298-.728.897 1.58 1.704a.465.465 0 0 0 .349.158.457.457 0 0 0 .368-.189l6.596-8.14a.504.504 0 0 0 .103-.36.516.516 0 0 0-.193-.484z" fill="currentColor" />
    </svg>
  );
}

const VoiceMessageBubble = React.forwardRef<HTMLDivElement, VoiceMessageBubbleProps>(
  (
    {
      className,
      variant = "incoming",
      duration,
      timestamp,
      status,
      showTail = false,
      isPlaying = false,
      progress = 0,
      avatarSrc,
      onPlayPause,
      ...props
    },
    ref
  ) => {
    const isOutgoing = variant === "outgoing";
    const playedBars = Math.floor((progress / 100) * WAVEFORM_BARS.length);

    const activeColor = isOutgoing ? "var(--wa-emerald-600)" : "var(--wa-emerald-500)";
    const inactiveColor = isOutgoing ? "rgba(0,128,105,0.35)" : "rgba(134,150,160,0.5)";

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
            "font-wa relative max-w-[var(--wa-msg-max-width)] overflow-visible rounded-lg px-[9px] pb-2 pt-[8px]",
            isOutgoing ? "bg-wa-bubble-outgoing" : "bg-wa-bubble-incoming",
            showTail && (isOutgoing ? "rounded-br-[3px]" : "rounded-bl-[3px]")
          )}
        >
          {showTail && (
            <svg viewBox="0 0 8 13" width="8" height="13" className={cn("absolute bottom-0", isOutgoing ? "-right-[8px]" : "-left-[8px]")}>
              {isOutgoing ? (
                <path d="M5.188 13H0V1.807l6.467 8.625C7.526 11.844 6.958 13 5.188 13z" className="fill-wa-bubble-outgoing" />
              ) : (
                <path d="M1.533 10.432L8 1.807V13H2.812C1.042 13 .474 11.844 1.533 10.432z" className="fill-wa-bubble-incoming" />
              )}
            </svg>
          )}

          <div className="flex items-center gap-[8px]">
            {/* Avatar or play button */}
            <button
              type="button"
              onClick={onPlayPause}
              className={cn(
                "flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full text-white transition-colors",
                isOutgoing
                  ? "bg-wa-emerald-600 hover:bg-wa-emerald-500"
                  : "bg-wa-emerald-500 hover:bg-wa-emerald-400"
              )}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>

            {/* Waveform + duration */}
            <div className="flex flex-col gap-[4px]">
              {/* Waveform bars */}
              <div className="flex items-center gap-[2px]" style={{ height: 20 }}>
                {WAVEFORM_BARS.map((h, i) => (
                  <div
                    key={i}
                    className="w-[3px] rounded-full transition-colors"
                    style={{
                      height: `${Math.round((h / 10) * 20)}px`,
                      backgroundColor: i < playedBars ? activeColor : inactiveColor,
                    }}
                  />
                ))}
              </div>

              {/* Duration */}
              <span className="text-[12px] leading-[16px] text-wa-text-secondary">
                {isPlaying
                  ? formatProgress(progress, duration)
                  : duration}
              </span>
            </div>
          </div>

          {/* Metadata */}
          <div className="float-right -mb-1 ml-2 mt-0.5 flex items-center gap-[3px]">
            {timestamp && (
              <span className="text-[11px] leading-[15px] text-wa-bubble-meta">
                {timestamp}
              </span>
            )}
            {isOutgoing && status && (
              status === "read"
                ? <span className="text-wa-read"><DoubleCheckIcon /></span>
                : status === "delivered"
                ? <span className="text-wa-delivered"><DoubleCheckIcon /></span>
                : <span className="text-wa-delivered"><CheckIcon /></span>
            )}
          </div>
        </div>
      </div>
    );
  }
);
VoiceMessageBubble.displayName = "VoiceMessageBubble";

function formatProgress(progress: number, totalDuration: string): string {
  const parts = totalDuration.split(":").map(Number);
  const totalSeconds = parts.length === 2 ? parts[0] * 60 + parts[1] : parts[0];
  const elapsed = Math.floor((progress / 100) * totalSeconds);
  const m = Math.floor(elapsed / 60);
  const s = elapsed % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export { VoiceMessageBubble, type VoiceMessageBubbleProps };
