"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "@/components/ui/whatsapp/styles/whatsapp.css";

interface TypingIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  sender?: string;
  senderColor?: string;
}

const TypingIndicator = React.forwardRef<HTMLDivElement, TypingIndicatorProps>(
  ({ className, sender, senderColor, ...props }, ref) => {
    return (
      <div
        className={cn("flex w-full justify-start", className)}
        {...props}
        ref={ref}
      >
        <div className="relative max-w-[var(--wa-msg-max-width)] rounded-lg rounded-bl-[3px] bg-[var(--wa-bubble-incoming)] px-[12px] pb-[10px] pt-[8px]">
          {/* Tail */}
          <svg
            viewBox="0 0 8 13"
            width="8"
            height="13"
            className="absolute bottom-0 -left-[8px]"
          >
            <path
              d="M1.533 10.432L8 1.807V13H2.812C1.042 13 .474 11.844 1.533 10.432z"
              fill="var(--wa-bubble-incoming)"
            />
          </svg>

          {sender && (
            <p
              className="wa-font mb-1 text-[12.8px] font-medium leading-[22px]"
              style={{ color: senderColor ?? "var(--wa-emerald-500)" }}
            >
              {sender}
            </p>
          )}

          <div className="flex items-center gap-[4px] py-[2px]">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block h-[8px] w-[8px] rounded-full bg-[var(--wa-text-secondary)]"
                style={{
                  animation: "wa-typing-bounce 1.2s ease-in-out infinite",
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>

          <style>{`
            @keyframes wa-typing-bounce {
              0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
              30% { transform: translateY(-5px); opacity: 1; }
            }
          `}</style>
        </div>
      </div>
    );
  }
);
TypingIndicator.displayName = "TypingIndicator";

export { TypingIndicator, type TypingIndicatorProps };
