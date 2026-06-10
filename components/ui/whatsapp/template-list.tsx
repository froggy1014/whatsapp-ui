"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
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

// ─── Constants ────────────────────────────────────────────────────────────────

const STATUS_COLORS: Record<string, { bg: string; text: string }> = {
  APPROVED: { bg: "#dcfce7", text: "#16a34a" },
  PENDING: { bg: "#fef9c3", text: "#ca8a04" },
  REJECTED: { bg: "#fee2e2", text: "#dc2626" },
  DISABLED: { bg: "#f3f4f6", text: "#6b7280" },
};

// ─── Inline SVG Icons ─────────────────────────────────────────────────────────

function TrashIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
    </svg>
  );
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
        <div className="mb-4 flex items-center justify-between">
          <h2
            className="text-lg font-semibold"
            style={{ color: "var(--wa-text-primary)" }}
          >
            Templates ({templates.length})
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((tmpl) => {
            const body = tmpl.components?.find((c) => c.type === "BODY");
            const header = tmpl.components?.find((c) => c.type === "HEADER");
            const footer = tmpl.components?.find((c) => c.type === "FOOTER");
            const statusColor =
              STATUS_COLORS[tmpl.status] || STATUS_COLORS.DISABLED;

            return (
              <div
                key={tmpl.id}
                className="group cursor-pointer rounded-xl border p-4 transition-shadow hover:shadow-md"
                style={{
                  background: "var(--wa-panel-bg)",
                  borderColor: "var(--wa-border)",
                }}
                onClick={() => onSelectTemplate?.(tmpl)}
              >
                <div className="mb-3 flex items-start justify-between">
                  <div className="min-w-0 flex-1">
                    <h3
                      className="truncate text-sm font-semibold"
                      style={{ color: "var(--wa-text-primary)" }}
                    >
                      {tmpl.name}
                    </h3>
                    <div className="mt-1 flex items-center gap-2">
                      <span
                        className="rounded-full px-2 py-0.5 text-[10px] font-medium"
                        style={{
                          background: statusColor.bg,
                          color: statusColor.text,
                        }}
                      >
                        {tmpl.status}
                      </span>
                      <span
                        className="text-[10px]"
                        style={{ color: "var(--wa-text-secondary)" }}
                      >
                        {tmpl.language}
                      </span>
                      <span
                        className="text-[10px]"
                        style={{ color: "var(--wa-text-secondary)" }}
                      >
                        {tmpl.category}
                      </span>
                    </div>
                  </div>
                  {onDelete && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDelete(tmpl.name);
                      }}
                      className="rounded p-1 opacity-0 transition-all group-hover:opacity-100 hover:bg-red-50"
                      style={{ color: "#dc2626" }}
                    >
                      <TrashIcon size={14} />
                    </button>
                  )}
                </div>

                {/* Mini preview */}
                <div
                  className="rounded-lg px-3 py-2"
                  style={{ background: "var(--wa-bg)" }}
                >
                  {header?.text && (
                    <p
                      className="mb-1 truncate text-xs font-bold"
                      style={{ color: "var(--wa-text-primary)" }}
                    >
                      {header.text}
                    </p>
                  )}
                  <p
                    className="line-clamp-3 text-xs"
                    style={{ color: "var(--wa-text-primary)" }}
                  >
                    {body?.text || "No body text"}
                  </p>
                  {footer?.text && (
                    <p
                      className="mt-1 truncate text-[10px]"
                      style={{ color: "var(--wa-text-secondary)" }}
                    >
                      {footer.text}
                    </p>
                  )}
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
