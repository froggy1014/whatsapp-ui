"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { TemplateFormData } from "./template-editor";
import "@/components/ui/whatsapp/styles/whatsapp.css";

// ─── Types ────────────────────────────────────────────────────────────────────

export type { TemplateFormData };

export interface TemplatePreviewProps
  extends React.HTMLAttributes<HTMLDivElement> {
  formData: TemplateFormData;
}

// ─── Variable highlighting ────────────────────────────────────────────────────

function BodyText({ text }: { text: string }) {
  const parts = text.split(/(\{\{[^}]+\}\})/g);
  return (
    <>
      {parts.map((part, i) =>
        /^\{\{/.test(part) ? (
          <span key={i} className="text-wa-emerald-600">
            {part}
          </span>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        ),
      )}
    </>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

const TemplatePreview = React.forwardRef<HTMLDivElement, TemplatePreviewProps>(
  ({ className, formData, ...props }, ref) => {
    const bodyWithSamples = formData.bodyText.replace(
      /\{\{(\d+)\}\}/g,
      (_, num) => `[sample_${num}]`,
    );

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

        {/* Phone mockup */}
        <div className="mx-auto" style={{ maxWidth: "320px" }}>
          <div
            className="rounded-2xl p-4"
            style={{
              background: "var(--wa-conversation-bg)",
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width=\'6\' height=\'6\' viewBox=\'0 0 6 6\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'1\' height=\'1\' fill=\'%23e5ddd5\' fill-opacity=\'0.3\'/%3E%3C/svg%3E")',
              minHeight: "400px",
            }}
          >
            {/* Chat header */}
            <div
              className="-mx-4 -mt-4 mb-4 flex items-center gap-3 rounded-t-xl px-3 py-2"
              style={{ background: "var(--wa-panel-header-bg)" }}
            >
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ background: "var(--wa-emerald-500)" }}
              >
                W
              </div>
              <span
                className="text-sm font-medium"
                style={{ color: "var(--wa-text-primary)" }}
              >
                WhatsApp Preview
              </span>
            </div>

            {/* Message bubble */}
            <div className="flex justify-start">
              <div
                className="max-w-[85%] rounded-lg px-3 py-2"
                style={{
                  background: "var(--wa-bubble-incoming)",
                  borderTopLeftRadius: "2px",
                }}
              >
                {/* Header */}
                {formData.headerType === "text" && formData.headerText && (
                  <p
                    className="mb-1 text-sm font-bold"
                    style={{ color: "var(--wa-text-primary)" }}
                  >
                    {formData.headerText}
                  </p>
                )}

                {/* Body */}
                <p
                  className="whitespace-pre-wrap text-sm"
                  style={{ color: "var(--wa-text-primary)" }}
                >
                  {bodyWithSamples ? (
                    <BodyText text={bodyWithSamples} />
                  ) : (
                    <span
                      style={{
                        color: "var(--wa-text-secondary)",
                        fontStyle: "italic",
                      }}
                    >
                      Start typing to see preview...
                    </span>
                  )}
                </p>

                {/* Footer */}
                {formData.footerText && (
                  <p
                    className="mt-1 text-xs"
                    style={{ color: "var(--wa-text-secondary)" }}
                  >
                    {formData.footerText}
                  </p>
                )}

                {/* Timestamp */}
                <div className="mt-1 flex justify-end">
                  <span
                    className="text-[10px]"
                    style={{ color: "var(--wa-text-secondary)" }}
                  >
                    12:00
                  </span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            {formData.buttons.length > 0 && (
              <div className="mt-1 flex justify-start">
                <div className="w-full max-w-[85%] space-y-1">
                  {formData.buttons.map((btn, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center rounded-lg py-2 text-center"
                      style={{
                        background: "var(--wa-bubble-incoming)",
                      }}
                    >
                      <span
                        className="text-sm font-medium"
                        style={{ color: "var(--wa-emerald-500)" }}
                      >
                        {btn.type === "URL" && (
                          <svg
                            className="mr-1 inline-block"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                          </svg>
                        )}
                        {btn.type === "PHONE_NUMBER" && (
                          <svg
                            className="mr-1 inline-block"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" />
                          </svg>
                        )}
                        {btn.text || "Button"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Meta info */}
        <div
          className="mt-4 space-y-1 rounded-lg p-3 text-xs"
          style={{
            background: "var(--wa-bg)",
            color: "var(--wa-text-secondary)",
          }}
        >
          <div className="flex justify-between">
            <span>Name</span>
            <span className="font-mono">{formData.name || "-"}</span>
          </div>
          <div className="flex justify-between">
            <span>Language</span>
            <span>{formData.language}</span>
          </div>
          <div className="flex justify-between">
            <span>Category</span>
            <span>{formData.category}</span>
          </div>
          <div className="flex justify-between">
            <span>Components</span>
            <span>
              {[
                formData.headerType !== "none" && "Header",
                "Body",
                formData.footerText && "Footer",
                formData.buttons.length > 0 && "Buttons",
              ]
                .filter(Boolean)
                .join(", ")}
            </span>
          </div>
        </div>
      </div>
    );
  },
);
TemplatePreview.displayName = "TemplatePreview";

export { TemplatePreview };
