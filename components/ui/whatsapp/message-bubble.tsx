"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { type Reaction, ReactionsDisplay } from "./reaction";
import "@/components/ui/whatsapp/styles/whatsapp.css";

export interface MessageBubbleProps {
  variant: "incoming" | "outgoing";
  reactions?: Reaction[];
  children: React.ReactNode;
  className?: string;
}

/**
 * Wraps any bubble component and attaches reactions to its bottom corner.
 *
 * @example
 * <MessageBubble variant="incoming" reactions={[{ emoji: "🔥" }]}>
 *   <ImageBubble src="..." />
 * </MessageBubble>
 */
const MessageBubble = React.forwardRef<HTMLDivElement, MessageBubbleProps>(
  ({ variant, reactions, children, className }, ref) => {
    const hasReactions = reactions && reactions.length > 0;
    const isOutgoing = variant === "outgoing";

    return (
      <div
        ref={ref}
        className={cn("relative", hasReactions && "mb-[24px]", className)}
      >
        {children}
        {hasReactions && (
          <div
            className={cn(
              "absolute flex gap-[3px]",
              isOutgoing ? "right-[48px]" : "left-[8px]"
            )}
            style={{ bottom: "-20px" }}
          >
            <ReactionsDisplay reactions={reactions!} />
          </div>
        )}
      </div>
    );
  }
);
MessageBubble.displayName = "MessageBubble";

export { MessageBubble, type Reaction };
