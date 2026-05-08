"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "@/components/ui/whatsapp/styles/whatsapp.css";

interface ReactionPillProps extends React.HTMLAttributes<HTMLButtonElement> {
  emoji: string;
  count?: number;
  reacted?: boolean;
}

const ReactionPill = React.forwardRef<HTMLButtonElement, ReactionPillProps>(
  ({ className, emoji, count, reacted = false, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "font-wa inline-flex items-center gap-[3px] rounded-full px-[6px] py-[2px] text-[13px] leading-[18px] shadow-sm transition-colors",
          reacted
            ? "border border-wa-emerald-500 bg-wa-green-75 text-wa-text-primary"
            : "border border-wa-border bg-wa-bg text-wa-text-primary",
          className
        )}
        {...props}
      >
        <span>{emoji}</span>
        {count !== undefined && count > 0 && (
          <span className="text-[12px] text-wa-text-secondary">
            {count}
          </span>
        )}
      </button>
    );
  }
);
ReactionPill.displayName = "ReactionPill";

export { ReactionPill, type ReactionPillProps };
