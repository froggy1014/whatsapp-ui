"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "@/components/ui/whatsapp/styles/whatsapp.css";

export interface SystemMessageBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  timestamp?: string;
  icon?: React.ReactNode;
}

const SystemMessageBubble = React.forwardRef<HTMLDivElement, SystemMessageBubbleProps>(
  ({ className, children, timestamp, icon, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("font-wa flex items-center justify-center py-[6px]", className)}
        {...props}
      >
        <div className="inline-flex max-w-[70%] items-center gap-[5px] rounded-[7.5px] bg-wa-bg px-3 py-[5px] shadow-sm">
          {icon && (
            <span className="shrink-0 text-wa-system-msg">{icon}</span>
          )}
          <span className="text-center text-[12.5px] leading-[18px] text-wa-system-msg">
            {children}
          </span>
          {timestamp && (
            <span className="ml-1 shrink-0 text-[11px] text-wa-text-secondary">{timestamp}</span>
          )}
        </div>
      </div>
    );
  }
);
SystemMessageBubble.displayName = "SystemMessageBubble";

export { SystemMessageBubble };
