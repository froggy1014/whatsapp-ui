"use client";

import * as React from "react";
import { ScrollArea } from "@base-ui/react/scroll-area";
import { cn } from "@/lib/utils";
import "@/components/ui/whatsapp/styles/whatsapp.css";
import { TemplateButton } from "./template-bubble";

export interface CarouselCard {
  imageUrl?: string;
  body: string;
  buttons?: TemplateButton[];
}

export interface CarouselTemplateProps extends React.HTMLAttributes<HTMLDivElement> {
  body?: string;
  cards: CarouselCard[];
  timestamp?: string;
}

function CardButton({ button }: { button: TemplateButton }) {
  const base = "flex w-full items-center justify-center gap-1.5 py-[9px] text-[13px] font-medium text-wa-emerald-500";
  const label = button.type === "call_permission" ? `Call ${button.bizName}` : button.type === "copy_code" ? (button.label ?? "Copy offer code") : button.label;

  return (
    <button className={base}>
      {button.type === "url" && (
        <img src="/wa-icon-url.png" width={14} height={14} alt="" style={{ filter: "var(--wa-btn-icon-filter)" }} />
      )}
      {button.type === "flow" && (
        <img src="/wa-icon-flow.png" width={14} height={14} alt="" style={{ filter: "var(--wa-btn-icon-filter)" }} />
      )}
      {label}
    </button>
  );
}

const CarouselTemplate = React.forwardRef<HTMLDivElement, CarouselTemplateProps>(
  ({ className, body, cards, timestamp, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("font-wa w-full", className)} {...props}>
        {/* Optional intro bubble */}
        {body && (
          <div className="mb-1 max-w-[280px] rounded-lg bg-wa-bubble-incoming px-[9px] py-[6px] shadow-sm">
            <p className="text-[14.2px] leading-[19px] text-wa-text-primary">{body}</p>
            {timestamp && (
              <div className="mt-1 flex justify-end">
                <span className="text-[11px] text-wa-bubble-meta">{timestamp}</span>
              </div>
            )}
          </div>
        )}

        {/* Cards row */}
        <ScrollArea.Root className="pb-1">
          <ScrollArea.Viewport className="flex gap-2" style={{ scrollSnapType: "x mandatory" }}>
          <ScrollArea.Content className="flex gap-2">
          {cards.map((card, i) => (
            <div
              key={i}
              className="w-[220px] shrink-0 overflow-hidden rounded-lg bg-wa-bubble-incoming shadow-sm"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Card image */}
              <div className="h-[130px] w-full bg-wa-gray-200">
                {card.imageUrl ? (
                  <img src={card.imageUrl} alt="" className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <svg viewBox="0 0 24 24" width="36" height="36" className="text-wa-gray-400">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" fill="currentColor" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Card body */}
              <div className="px-[9px] py-[6px]">
                <p className="text-[13px] leading-[18px] text-wa-text-primary">{card.body}</p>
              </div>

              {/* Card buttons */}
              {card.buttons && card.buttons.length > 0 && (
                <div className="border-t border-wa-border">
                  {card.buttons.map((btn, j) => (
                    <div key={j} className={cn(j > 0 && "border-t border-wa-border")}>
                      <CardButton button={btn} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          </ScrollArea.Content>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="horizontal" className="flex h-1.5 flex-col px-[3px] py-[3px]">
            <ScrollArea.Thumb className="flex-1 rounded-full bg-wa-gray-300" />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </div>
    );
  }
);
CarouselTemplate.displayName = "CarouselTemplate";

export { CarouselTemplate };
