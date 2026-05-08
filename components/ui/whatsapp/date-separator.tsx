"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "@/components/ui/whatsapp/styles/whatsapp.css";

interface DateSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
}

const DateSeparator = React.forwardRef<HTMLDivElement, DateSeparatorProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center justify-center py-2", className)}
        {...props}
      >
        <span className="wa-font rounded-full bg-[var(--wa-bg)] px-3 py-1 text-[12.5px] leading-[20px] text-[var(--wa-text-secondary)] shadow-sm">
          {label}
        </span>
      </div>
    );
  }
);
DateSeparator.displayName = "DateSeparator";

export { DateSeparator, type DateSeparatorProps };
