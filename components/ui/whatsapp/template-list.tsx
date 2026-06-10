"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { TemplateBubble, type TemplateButton } from "./template-bubble";
import "@/components/ui/whatsapp/styles/whatsapp.css";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface TemplateComponent {
  type: "HEADER" | "BODY" | "FOOTER" | "BUTTONS";
  format?: string;
  text?: string;
  buttons?: Array<{ type: string; text: string; url?: string; phone_number?: string }>;
  example?: Record<string, unknown>;
}

export interface WhatsAppTemplate {
  id: string;
  name: string;
  status: string;
  category: string;
  language: string;
  components?: TemplateComponent[];
}

export interface TemplateListProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
  templates: WhatsAppTemplate[];
  loading?: boolean;
  onDelete?: (name: string) => void;
  onSelectTemplate?: (template: WhatsAppTemplate) => void;
  onCreateNew?: () => void;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function mapComponentButtons(
  buttons?: TemplateComponent["buttons"],
): TemplateButton[] | undefined {
  if (!buttons || buttons.length === 0) return undefined;
  return buttons.map((btn) => {
    if (btn.type === "URL")
      return { type: "url" as const, label: btn.text, url: btn.url };
    if (btn.type === "PHONE_NUMBER")
      return {
        type: "phone_number" as const,
        label: btn.text,
        phone_number: btn.phone_number,
      };
    return { type: "quick_reply" as const, label: btn.text };
  });
}

// ─── Main component ───────────────────────────────────────────────────────────

const TemplateList = React.forwardRef<HTMLDivElement, TemplateListProps>(
  (
    { className, templates, loading = false, onDelete, onSelectTemplate, onCreateNew, ...props },
    ref,
  ) => {
    if (loading) {
      return (
        <div
          ref={ref}
          className={cn("flex items-center justify-center py-20", className)}
          {...props}
        >
          <div
            className="h-8 w-8 animate-spin rounded-full border-2 border-t-transparent"
            style={{
              borderColor: "var(--wa-emerald-500)",
              borderTopColor: "transparent",
            }}
          />
        </div>
      );
    }

    if (templates.length === 0) {
      return (
        <div
          ref={ref}
          className={cn(
            "flex flex-col items-center justify-center py-20",
            className,
          )}
          {...props}
        >
          <div className="mb-4 text-5xl">📋</div>
          <h3
            className="mb-2 text-lg font-semibold"
            style={{ color: "var(--wa-text-primary)" }}
          >
            No templates yet
          </h3>
          <p
            className="mb-6 text-sm"
            style={{ color: "var(--wa-text-secondary)" }}
          >
            Create your first WhatsApp message template
          </p>
          {onCreateNew && (
            <button
              type="button"
              onClick={onCreateNew}
              className="rounded-lg px-6 py-2.5 text-sm font-medium text-white"
              style={{ background: "var(--wa-emerald-500)" }}
            >
              + Create Template
            </button>
          )}
        </div>
      );
    }

    return (
      <div ref={ref} className={cn(className)} {...props}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((tmpl) => {
            const headerComp = tmpl.components?.find((c) => c.type === "HEADER");
            const bodyComp = tmpl.components?.find((c) => c.type === "BODY");
            const footerComp = tmpl.components?.find((c) => c.type === "FOOTER");
            const buttonsComp = tmpl.components?.find((c) => c.type === "BUTTONS");

            const header =
              headerComp?.text
                ? { type: "text" as const, text: headerComp.text }
                : undefined;

            return (
              <div
                key={tmpl.id}
                className="group cursor-pointer overflow-hidden rounded-xl transition-shadow hover:shadow-lg"
                onClick={() => onSelectTemplate?.(tmpl)}
              >
                {/* Wallpaper + bubble */}
                <div className="wa-wallpaper p-4">
                  <TemplateBubble
                    header={header}
                    body={bodyComp?.text || "No body text"}
                    footer={footerComp?.text}
                    buttons={mapComponentButtons(buttonsComp?.buttons)}
                    timestamp="6:24 AM"
                  />
                </div>

                {/* Template name footer */}
                <div
                  className="px-4 py-3"
                  style={{
                    background: "var(--wa-panel-bg)",
                    borderTop: "1px solid var(--wa-border)",
                  }}
                >
                  <p
                    className="truncate text-sm"
                    style={{ color: "var(--wa-text-primary)" }}
                  >
                    {tmpl.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);
TemplateList.displayName = "TemplateList";

export { TemplateList };
