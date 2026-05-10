"use client";

import * as React from "react";
import { Toggle } from "@base-ui/react/toggle";
import { cn } from "@/lib/utils";
import "@/components/ui/whatsapp/styles/whatsapp.css";

interface ReactionPillProps {
  emoji: string;
  count?: number;
  reacted?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  className?: string;
}

const ReactionPill = React.forwardRef<HTMLButtonElement, ReactionPillProps>(
  ({ emoji, count, reacted = false, onPressedChange, className }, ref) => {
    return (
      <Toggle
        ref={ref}
        pressed={reacted}
        onPressedChange={onPressedChange}
        className={cn(
          "relative z-10 font-wa inline-flex items-center gap-[3px] rounded-full border px-[6px] py-[2px] text-[13px] leading-[18px] shadow-sm transition-colors",
          "border-wa-border bg-wa-bg text-wa-text-primary",
          "data-[pressed]:border-wa-emerald-500 data-[pressed]:bg-wa-green-75 dark:data-[pressed]:bg-[#005c4b]",
          className
        )}
      >
        <span>{emoji}</span>
        {count !== undefined && count > 0 && (
          <span className="text-[12px] text-wa-text-secondary">{count}</span>
        )}
      </Toggle>
    );
  }
);
ReactionPill.displayName = "ReactionPill";

export { ReactionPill, type ReactionPillProps };
