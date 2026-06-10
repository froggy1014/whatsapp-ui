"use client";

import * as React from "react";
import CharacterCount from "@tiptap/extension-character-count";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { cn } from "@/lib/utils";
import {
  VariableNode,
  getPlainTextWithVariables,
} from "./_template-editor-internal/tiptap-variable";
import "./_template-editor-internal/template-editor.css";
import "@/components/ui/whatsapp/styles/whatsapp.css";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ButtonFormItem {
  type: "QUICK_REPLY" | "URL" | "PHONE_NUMBER";
  text: string;
  url?: string;
  phoneNumber?: string;
}

export interface TemplateFormData {
  name: string;
  language: string;
  category: string;
  headerType: "none" | "text";
  headerText: string;
  bodyText: string;
  footerText: string;
  buttons: ButtonFormItem[];
}

export interface LanguageOption {
  code: string;
  label: string;
}

export interface CategoryOption {
  value: string;
  label: string;
  desc: string;
}

export interface TemplateEditorProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  formData: TemplateFormData;
  onChange: (data: TemplateFormData) => void;
  onSubmit?: () => void;
  creating?: boolean;
  languages?: LanguageOption[];
  categories?: CategoryOption[];
}

// ─── Constants ────────────────────────────────────────────────────────────────

const DEFAULT_LANGUAGES: LanguageOption[] = [
  { code: "en_US", label: "English (US)" },
  { code: "en_GB", label: "English (UK)" },
  { code: "ko", label: "Korean" },
  { code: "ja", label: "Japanese" },
  { code: "zh_CN", label: "Chinese (Simplified)" },
  { code: "es", label: "Spanish" },
  { code: "fr", label: "French" },
  { code: "de", label: "German" },
  { code: "pt_BR", label: "Portuguese (BR)" },
  { code: "hi", label: "Hindi" },
  { code: "ar", label: "Arabic" },
];

const DEFAULT_CATEGORIES: CategoryOption[] = [
  { value: "MARKETING", label: "Marketing", desc: "Promotions, offers, updates" },
  { value: "UTILITY", label: "Utility", desc: "Order updates, alerts, confirmations" },
  { value: "AUTHENTICATION", label: "Authentication", desc: "OTP, verification codes" },
];

// ─── Inline SVG Icons ─────────────────────────────────────────────────────────

function PlusIcon({ size = 14 }: { size?: number }) {
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
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

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

// ─── Body Editor (Tiptap) ─────────────────────────────────────────────────────

function BodyEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (text: string) => void;
}) {
  const isInternalUpdate = React.useRef(false);

  const editor = useEditor({
    immediatelyRender: true,
    extensions: [
      StarterKit.configure({
        bold: false,
        italic: false,
        strike: false,
        code: false,
        codeBlock: false,
        blockquote: false,
        heading: false,
        bulletList: false,
        orderedList: false,
        listItem: false,
        horizontalRule: false,
      }),
      VariableNode,
      Placeholder.configure({
        placeholder: "Write your template message here...",
      }),
      CharacterCount.configure({ limit: 1024 }),
    ],
    content: "",
    onUpdate({ editor }) {
      isInternalUpdate.current = true;
      const text = getPlainTextWithVariables(editor.getJSON());
      onChange(text);

    },
    editorProps: {
      attributes: {
        class: "tiptap-body-editor",
      },
    },
  });

  React.useEffect(() => {
    if (isInternalUpdate.current) {
      isInternalUpdate.current = false;
      return;
    }
    if (!editor) return;
    if (value === "" && !editor.isEmpty) {
      editor.commands.clearContent();
    }
  }, [editor, value]);

  const insertVariable = React.useCallback(() => {
    if (!editor) return;
    const text = getPlainTextWithVariables(editor.getJSON());
    const existing = text.match(/\{\{(\d+)\}\}/g) ?? [];
    const nextIndex = existing.length + 1;
    editor
      .chain()
      .focus()
      .insertContent({
        type: "variable",
        attrs: { index: nextIndex },
      })
      .run();
  }, [editor]);

  const charCount = editor?.storage.characterCount?.characters() ?? 0;

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label
          className="text-sm font-medium"
          style={{ color: "var(--wa-text-primary)" }}
        >
          Body *
        </label>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={insertVariable}
            className="flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium transition-colors"
            style={{
              background: "var(--wa-emerald-500)",
              color: "#fff",
            }}
          >
            <span style={{ fontSize: "14px" }}>{"{ }"}</span>
            Add Variable
          </button>
          <span
            className="text-xs"
            style={{ color: "var(--wa-text-secondary)" }}
          >
            {charCount}/1024
          </span>
        </div>
      </div>
      <div
        className="rounded-lg border transition-colors"
        style={{
          background: "var(--wa-bg)",
          borderColor: "var(--wa-border)",
        }}
      >
        <EditorContent editor={editor} />
      </div>
      <p className="mt-1 text-xs" style={{ color: "var(--wa-text-secondary)" }}>
        Use variables like {"{{1}}"}, {"{{2}}"} for personalized content
      </p>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

const TemplateEditor = React.forwardRef<HTMLDivElement, TemplateEditorProps>(
  (
    {
      className,
      formData,
      onChange,
      onSubmit,
      creating = false,
      languages = DEFAULT_LANGUAGES,
      categories = DEFAULT_CATEGORIES,
      ...props
    },
    ref,
  ) => {
    const update = (partial: Partial<TemplateFormData>) =>
      onChange({ ...formData, ...partial });

    const addButton = () => {
      if (formData.buttons.length >= 3) return;
      update({
        buttons: [...formData.buttons, { type: "QUICK_REPLY", text: "" }],
      });
    };

    const updateButton = (index: number, btn: Partial<ButtonFormItem>) => {
      const buttons = formData.buttons.map((b, i) =>
        i === index ? { ...b, ...btn } : b,
      );
      update({ buttons });
    };

    const removeButton = (index: number) => {
      update({ buttons: formData.buttons.filter((_, i) => i !== index) });
    };

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
          className="mb-6 text-lg font-semibold"
          style={{ color: "var(--wa-text-primary)" }}
        >
          Create Template
        </h2>

        <div className="space-y-5">
          {/* Name */}
          <div>
            <label
              className="mb-1 block text-sm font-medium"
              style={{ color: "var(--wa-text-primary)" }}
            >
              Template Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                update({
                  name: e.target.value
                    .toLowerCase()
                    .replace(/[^a-z0-9_]/g, "_"),
                })
              }
              placeholder="e.g. order_confirmation"
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none transition-colors focus:ring-2"
              style={{
                background: "var(--wa-bg)",
                borderColor: "var(--wa-border)",
                color: "var(--wa-text-primary)",
              }}
            />
            <p
              className="mt-1 text-xs"
              style={{ color: "var(--wa-text-secondary)" }}
            >
              Lowercase, numbers, underscores only
            </p>
          </div>

          {/* Language & Category */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                className="mb-1 block text-sm font-medium"
                style={{ color: "var(--wa-text-primary)" }}
              >
                Language *
              </label>
              <select
                value={formData.language}
                onChange={(e) => update({ language: e.target.value })}
                className="w-full rounded-lg border px-3 py-2 text-sm outline-none"
                style={{
                  background: "var(--wa-bg)",
                  borderColor: "var(--wa-border)",
                  color: "var(--wa-text-primary)",
                }}
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                className="mb-1 block text-sm font-medium"
                style={{ color: "var(--wa-text-primary)" }}
              >
                Category *
              </label>
              <select
                value={formData.category}
                onChange={(e) => update({ category: e.target.value })}
                className="w-full rounded-lg border px-3 py-2 text-sm outline-none"
                style={{
                  background: "var(--wa-bg)",
                  borderColor: "var(--wa-border)",
                  color: "var(--wa-text-primary)",
                }}
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label} - {cat.desc}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Header */}
          <div>
            <label
              className="mb-1 block text-sm font-medium"
              style={{ color: "var(--wa-text-primary)" }}
            >
              Header
            </label>
            <div className="mb-2 flex gap-2">
              {(["none", "text"] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => update({ headerType: type })}
                  className="rounded-md px-3 py-1.5 text-xs font-medium transition-colors"
                  style={{
                    background:
                      formData.headerType === type
                        ? "var(--wa-emerald-500)"
                        : "var(--wa-bg)",
                    color:
                      formData.headerType === type
                        ? "#fff"
                        : "var(--wa-text-secondary)",
                    border: `1px solid ${
                      formData.headerType === type
                        ? "var(--wa-emerald-500)"
                        : "var(--wa-border)"
                    }`,
                  }}
                >
                  {type === "none" ? "None" : "Text"}
                </button>
              ))}
            </div>
            {formData.headerType === "text" && (
              <input
                type="text"
                value={formData.headerText}
                onChange={(e) => update({ headerText: e.target.value })}
                placeholder="Header text (max 60 chars)"
                maxLength={60}
                className="w-full rounded-lg border px-3 py-2 text-sm outline-none"
                style={{
                  background: "var(--wa-bg)",
                  borderColor: "var(--wa-border)",
                  color: "var(--wa-text-primary)",
                }}
              />
            )}
          </div>

          {/* Body - Tiptap */}
          <BodyEditor
            value={formData.bodyText}
            onChange={(text) => update({ bodyText: text })}
          />

          {/* Footer */}
          <div>
            <label
              className="mb-1 block text-sm font-medium"
              style={{ color: "var(--wa-text-primary)" }}
            >
              Footer
            </label>
            <input
              type="text"
              value={formData.footerText}
              onChange={(e) => update({ footerText: e.target.value })}
              placeholder="Optional footer text (max 60 chars)"
              maxLength={60}
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none"
              style={{
                background: "var(--wa-bg)",
                borderColor: "var(--wa-border)",
                color: "var(--wa-text-primary)",
              }}
            />
          </div>

          {/* Buttons */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label
                className="text-sm font-medium"
                style={{ color: "var(--wa-text-primary)" }}
              >
                Buttons ({formData.buttons.length}/3)
              </label>
              {formData.buttons.length < 3 && (
                <button
                  type="button"
                  onClick={addButton}
                  className="flex items-center gap-1 text-xs font-medium"
                  style={{ color: "var(--wa-emerald-500)" }}
                >
                  <PlusIcon size={14} />
                  Add Button
                </button>
              )}
            </div>
            <div className="space-y-3">
              {formData.buttons.map((btn, i) => (
                <div
                  key={i}
                  className="rounded-lg border p-3"
                  style={{
                    borderColor: "var(--wa-border)",
                    background: "var(--wa-bg)",
                  }}
                >
                  <div className="mb-2 flex items-center gap-2">
                    <select
                      value={btn.type}
                      onChange={(e) =>
                        updateButton(i, {
                          type: e.target.value as ButtonFormItem["type"],
                        })
                      }
                      className="rounded-md border px-2 py-1 text-xs outline-none"
                      style={{
                        background: "var(--wa-panel-bg)",
                        borderColor: "var(--wa-border)",
                        color: "var(--wa-text-primary)",
                      }}
                    >
                      <option value="QUICK_REPLY">Quick Reply</option>
                      <option value="URL">URL</option>
                      <option value="PHONE_NUMBER">Phone</option>
                    </select>
                    <input
                      type="text"
                      value={btn.text}
                      onChange={(e) => updateButton(i, { text: e.target.value })}
                      placeholder="Button text"
                      maxLength={25}
                      className="flex-1 rounded-md border px-2 py-1 text-xs outline-none"
                      style={{
                        background: "var(--wa-panel-bg)",
                        borderColor: "var(--wa-border)",
                        color: "var(--wa-text-primary)",
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => removeButton(i)}
                      className="rounded p-1 transition-colors hover:bg-red-50"
                      style={{ color: "#dc2626" }}
                    >
                      <TrashIcon size={14} />
                    </button>
                  </div>
                  {btn.type === "URL" && (
                    <input
                      type="url"
                      value={btn.url || ""}
                      onChange={(e) => updateButton(i, { url: e.target.value })}
                      placeholder="https://example.com"
                      className="w-full rounded-md border px-2 py-1 text-xs outline-none"
                      style={{
                        background: "var(--wa-panel-bg)",
                        borderColor: "var(--wa-border)",
                        color: "var(--wa-text-primary)",
                      }}
                    />
                  )}
                  {btn.type === "PHONE_NUMBER" && (
                    <input
                      type="tel"
                      value={btn.phoneNumber || ""}
                      onChange={(e) =>
                        updateButton(i, { phoneNumber: e.target.value })
                      }
                      placeholder="+1234567890"
                      className="w-full rounded-md border px-2 py-1 text-xs outline-none"
                      style={{
                        background: "var(--wa-panel-bg)",
                        borderColor: "var(--wa-border)",
                        color: "var(--wa-text-primary)",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Submit */}
          {onSubmit && (
            <button
              type="button"
              onClick={onSubmit}
              disabled={creating || !formData.name || !formData.bodyText}
              className="w-full rounded-lg px-4 py-3 text-sm font-semibold text-white transition-all disabled:opacity-50"
              style={{ background: "var(--wa-emerald-500)" }}
            >
              {creating ? "Creating..." : "Create Template"}
            </button>
          )}
        </div>
      </div>
    );
  },
);
TemplateEditor.displayName = "TemplateEditor";

export { TemplateEditor };
