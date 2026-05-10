"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "@/components/ui/whatsapp/styles/whatsapp.css";

export interface ForwardedLabelProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Show "Forwarded many times" instead of "Forwarded" */
  frequently?: boolean;
}

/**
 * Forwarded/frequently-forwarded label — place above message body inside a bubble.
 */
const ForwardedLabel = React.forwardRef<HTMLParagraphElement, ForwardedLabelProps>(
  ({ className, frequently = false, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("mb-[4px] flex items-center gap-[4px] text-[12px] italic text-wa-text-secondary", className)}
        {...props}
      >
        <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
          <path d="M13.175 12H7c-.83 0-1.54.25-2.12.65C4.42 13 4 13.73 4 14.5V17h16v-2.5c0-.77-.42-1.5-1.12-1.96L13.175 12zm5.825 0V4l-4 4 4 4zm-9.5-2c1.38 0 2.5-1.12 2.5-2.5S10.88 5 9.5 5 7 6.12 7 7.5 8.12 10 9.5 10z" />
        </svg>
        {frequently ? "Forwarded many times" : "Forwarded"}
      </p>
    );
  }
);
ForwardedLabel.displayName = "ForwardedLabel";

export { ForwardedLabel };
