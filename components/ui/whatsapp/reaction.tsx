"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "@/components/ui/whatsapp/styles/whatsapp.css";

export interface Reaction {
  emoji: string;
  /** Providing count enables group display mode */
  count?: number;
  reacted?: boolean;
}

export function ReactionsDisplay({ reactions }: { reactions: Reaction[] }) {
  const total = reactions.reduce((sum, r) => sum + (r.count ?? 0), 0);

  if (reactions.length === 1) {
    const r = reactions[0];
    return (
      <span className={cn(
        "relative z-10 inline-flex items-center rounded-full border px-[6px] py-[2px] text-[13px] leading-none shadow-sm",
        "border-wa-border bg-wa-bg",
        r.reacted && "border-wa-emerald-500 bg-wa-green-75 dark:bg-[#005c4b]"
      )}>
        {r.emoji}
        {r.count !== undefined && r.count > 0 && (
          <span className="ml-[3px] text-[12px] text-wa-text-secondary">{r.count}</span>
        )}
      </span>
    );
  }

  // 2+ reactions — overlapping emojis + optional total
  return (
    <span className="relative z-10 inline-flex items-center rounded-full border border-wa-border bg-wa-bg px-[7px] py-[3px] shadow-sm">
      <span className="flex items-center">
        {reactions.map((r, i) => (
          <span
            key={i}
            className="inline-flex h-[20px] w-[20px] items-center justify-center rounded-full border-[1.5px] border-wa-bg text-[12px] leading-none"
            style={{ marginLeft: i > 0 ? "-5px" : "0", position: "relative", zIndex: reactions.length - i }}
          >
            {r.emoji}
          </span>
        ))}
      </span>
      {total > 0 && (
        <span className="ml-[5px] text-[12px] font-medium text-wa-text-secondary">{total}</span>
      )}
    </span>
  );
}
