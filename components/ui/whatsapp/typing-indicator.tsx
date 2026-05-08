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
        <div className="relative max-w-[var(--wa-msg-max-width)] rounded-lg rounded-bl-[3px] bg-wa-bubble-incoming px-[12px] pb-[10px] pt-[8px]">
          {/* Tail */}
          <svg
            viewBox="0 0 8 13"
            width="8"
            height="13"
            className="absolute bottom-0 -left-[8px]"
          >
            <path
              d="M1.533 10.432L8 1.807V13H2.812C1.042 13 .474 11.844 1.533 10.432z"
              className="fill-wa-bubble-incoming"
            />
          </svg>

          {sender && (
            <p
              className="font-wa mb-1 text-[12.8px] font-medium leading-[22px]"
              style={{ color: senderColor ?? "var(--wa-emerald-500)" }}
            >
              {sender}
            </p>
          )}

          <div className="flex items-center gap-[4px] py-[2px]">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="animate-wa-typing-bounce block h-[8px] w-[8px] rounded-full bg-wa-text-secondary"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>

        </div>
      </div>
    );
  }
);
TypingIndicator.displayName = "TypingIndicator";

export { TypingIndicator, type TypingIndicatorProps };
