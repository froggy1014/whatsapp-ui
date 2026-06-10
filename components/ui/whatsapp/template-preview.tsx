"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { TemplateBubble, type TemplateButton } from "./template-bubble";
import type { TemplateFormData } from "./template-editor";
import "@/components/ui/whatsapp/styles/whatsapp.css";

// ─── Types ────────────────────────────────────────────────────────────────────

export type { TemplateFormData };

export interface TemplatePreviewProps
  extends React.HTMLAttributes<HTMLDivElement> {
  formData: TemplateFormData;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function mapButtons(buttons: TemplateFormData["buttons"]): TemplateButton[] {
  return buttons
    .filter((btn) => btn.text)
    .map((btn) => {
      if (btn.type === "URL")
        return { type: "url" as const, label: btn.text, url: btn.url };
      if (btn.type === "PHONE_NUMBER")
        return {
          type: "phone_number" as const,
          label: btn.text,
          phone_number: btn.phoneNumber,
        };
      return { type: "quick_reply" as const, label: btn.text };
    });
}

// ─── Main component ───────────────────────────────────────────────────────────

const TemplatePreview = React.forwardRef<HTMLDivElement, TemplatePreviewProps>(
  ({ className, formData, ...props }, ref) => {
    const now = new Date();
    const timestamp = `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}`;

    const header =
      formData.headerType === "text" && formData.headerText
        ? { type: "text" as const, text: formData.headerText }
        : undefined;

    const body = formData.bodyText || "Start typing to see preview...";
    const buttons = mapButtons(formData.buttons);

    return (
      <div
        ref={ref}
        className={cn("rounded-xl border p-6", className)}
        style={{
          background: "var(--wa-panel-bg)",
          borderColor: "var(--wa-border)",
        }}
        {...props}
      >
        <h2
          className="mb-4 text-lg font-semibold"
          style={{ color: "var(--wa-text-primary)" }}
        >
          Preview
        </h2>

        {/* Wallpaper + bubble */}
        <div
          className="wa-wallpaper overflow-hidden rounded-xl pt-4"
          style={{
            background: "var(--wa-conversation-bg)",
          }}
        >
          <TemplateBubble
            header={header}
            body={body}
            footer={formData.footerText || undefined}
            buttons={buttons.length > 0 ? buttons : undefined}
            timestamp={timestamp}
          />
        </div>
      </div>
    );
  },
);
TemplatePreview.displayName = "TemplatePreview";

export { TemplatePreview };
