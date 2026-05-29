"use client";

import * as React from "react";
import { Drawer } from "@base-ui/react/drawer";
import { RadioGroup } from "@base-ui/react/radio-group";
import { Radio } from "@base-ui/react/radio";
import { cn } from "@/lib/utils";
import "@/components/ui/whatsapp/styles/whatsapp.css";

export interface CallPermissionBubbleProps
  extends React.HTMLAttributes<HTMLDivElement> {
  bizName?: string;
  timestamp?: string;
}

// ─── Bubble ───────────────────────────────────────────────────────────────────

const CallPermissionBubble = React.forwardRef<
  HTMLDivElement,
  CallPermissionBubbleProps
>(({ className, bizName = "{BIZ_NAME}", timestamp, ...props }, ref) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div
        ref={ref}
        className={cn("font-wa w-full max-w-[320px]", className)}
        {...props}
      >
        <div className="overflow-hidden rounded-lg bg-wa-bubble-incoming shadow-sm">
          {/* Card */}
          <div className="flex items-start gap-3 border-b border-wa-border px-3 py-3">
            {/* Phone icon */}
            <div className="mt-0.5 shrink-0">
              <svg viewBox="0 0 24 24" width="22" height="22" className="text-wa-text-primary">
                <path
                  d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                  fill="currentColor"
                />
              </svg>
            </div>
            {/* Text */}
            <div className="flex-1">
              <p className="text-[14.2px] font-semibold leading-[19px] text-wa-text-primary">
                Can {bizName} call you?
              </p>
              <p className="mt-0.5 text-[13px] leading-[18px] text-wa-text-secondary">
                You can update your preference anytime in the business profile.
              </p>
              {timestamp && (
                <div className="mt-1 flex justify-end">
                  <span className="text-[11px] text-wa-bubble-meta">{timestamp}</span>
                </div>
              )}
            </div>
          </div>

          {/* Choose preference button */}
          <Drawer.Root open={open} onOpenChange={setOpen}>
            <Drawer.Trigger
              className="flex w-full items-center justify-center gap-1.5 py-[10px] text-[14px] font-medium text-wa-emerald-500"
            >
              Choose preference
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </Drawer.Trigger>

            <Drawer.Portal>
              <Drawer.Backdrop className="fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0" />
              <Drawer.Popup className="fixed bottom-0 left-0 right-0 z-50 rounded-t-2xl bg-wa-panel-bg outline-none transition-transform duration-300 ease-out data-[starting-style]:translate-y-full data-[ending-style]:translate-y-full">
                <CallPermissionSheet bizName={bizName} onClose={() => setOpen(false)} />
              </Drawer.Popup>
            </Drawer.Portal>
          </Drawer.Root>
        </div>
      </div>
    </>
  );
});
CallPermissionBubble.displayName = "CallPermissionBubble";

// ─── Sheet ────────────────────────────────────────────────────────────────────

interface CallPermissionSheetProps {
  bizName?: string;
  onClose?: () => void;
}

function CallPermissionSheet({
  bizName = "{BIZ_NAME}",
  onClose,
}: CallPermissionSheetProps) {
  const [value, setValue] = React.useState<string>("");

  const options = [
    { value: "always", label: "Always allow calls" },
    { value: "temporarily", label: "Temporarily allow calls" },
    { value: "not_now", label: "Not now" },
  ];

  return (
    <div className="font-wa flex flex-col">
      {/* Handle */}
      <div className="flex justify-center pt-3 pb-1">
        <div className="h-1 w-10 rounded-full bg-wa-gray-200" />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <Drawer.Close
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-full text-wa-text-primary hover:bg-wa-hover"
          aria-label="Close"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </Drawer.Close>
      </div>

      {/* Title */}
      <div className="px-4 pb-4">
        <Drawer.Title className="text-[18px] font-semibold text-wa-text-primary">
          Can {bizName} call you?
        </Drawer.Title>
        <Drawer.Description className="mt-1 text-[14px] text-wa-text-secondary">
          You can update your preference anytime in the business profile.
        </Drawer.Description>
      </div>

      {/* Radio options */}
      <RadioGroup
        value={value}
        onValueChange={setValue}
        className="px-4"
        aria-label="Call permission"
      >
        {options.map((opt) => (
          <Radio.Root
            key={opt.value}
            value={opt.value}
            className="flex cursor-pointer items-center gap-3 py-3.5 border-b border-wa-divider last:border-0"
          >
            <Radio.Indicator
              className={cn(
                "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-wa-gray-300 transition-colors",
                "data-[checked]:border-wa-emerald-500"
              )}
              render={
                <span>
                  <span className="block h-2.5 w-2.5 rounded-full bg-wa-emerald-500 scale-0 transition-transform [[data-checked]_&]:scale-100" />
                </span>
              }
            />
            <span className="text-[15px] text-wa-text-primary">{opt.label}</span>
          </Radio.Root>
        ))}
      </RadioGroup>

      {/* Footer */}
      <div className="flex items-center gap-2 px-4 py-4 mt-2 bg-wa-bg-deeper mx-4 mb-4 rounded-lg">
        <svg viewBox="0 0 24 24" width="16" height="16" className="shrink-0 text-wa-text-secondary">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="currentColor" />
        </svg>
        <p className="text-[13px] text-wa-text-secondary">
          Calling permission rules{" "}
          <button className="text-wa-emerald-500 underline">
            calling permission rules
          </button>
        </p>
      </div>
    </div>
  );
}

export { CallPermissionBubble, CallPermissionSheet };
