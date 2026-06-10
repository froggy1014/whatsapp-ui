"use client";

import * as React from "react";
import CharacterCount from "@tiptap/extension-character-count";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Menu } from "@base-ui/react/menu";
import { Select } from "@base-ui/react/select";
import { cn } from "@/lib/utils";
import {
  CategoryEnum,
  LanguagesEnum,
} from "meta-cloud-api/enums";
import type { TemplateFormat } from "meta-cloud-api/types";
import {
  VariableNode,
  getPlainTextWithVariables,
} from "./_template-editor-internal/tiptap-variable";
import "./_template-editor-internal/template-editor.css";
import "@/components/ui/whatsapp/styles/whatsapp.css";

// ─── Types ───────────────────────────────────────────────────────────────────

export type HeaderFormat = TemplateFormat | "NONE";

export type ButtonActionType =
  | "QUICK_REPLY"
  | "URL"
  | "PHONE_NUMBER"
  | "COPY_CODE"
  | "FLOW"
  | "VOICE_CALL";

export interface ButtonFormItem {
  type: ButtonActionType;
  text: string;
  url?: string;
  urlType?: "STATIC" | "DYNAMIC";
  phoneNumber?: string;
  example?: string;
}

export type ParameterFormat = "POSITIONAL" | "NAMED";

export interface VariableSample {
  variable: string;
  value: string;
}

/**
 * Represents an uploaded media attachment for the template header.
 * Aligns with meta-cloud-api's `TemplateHeaderExample.header_handle` /
 * `MediaParameter` so the consumer can pass the result straight into
 * the SDK's template builder.
 */
export interface HeaderMediaAttachment {
  /** Local File reference – used only for UI preview. */
  file: File;
  /** Media handle returned by Meta's Resumable Upload API. */
  handle?: string;
  /** Direct media URL (alternative to handle). */
  link?: string;
}

export interface TemplateFormData {
  name: string;
  language: string;
  category: `${CategoryEnum}`;
  parameterFormat: ParameterFormat;
  headerFormat: HeaderFormat;
  headerText: string;
  headerMedia?: HeaderMediaAttachment | null;
  bodyText: string;
  footerText: string;
  buttons: ButtonFormItem[];
  headerVariableSamples: VariableSample[];
  bodyVariableSamples: VariableSample[];
}

export interface TemplateEditorProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  formData: TemplateFormData;
  onChange: (data: TemplateFormData) => void;
  onSubmit?: () => void;
  onDelete?: () => void;
  creating?: boolean;
  /**
   * Optional media upload handler. When provided, MediaUploadZone will
   * call this after a file is selected and store the returned handle/link
   * in `formData.headerMedia`.
   *
   * Return `{ handle }` for Meta's Resumable Upload API, or `{ link }`
   * for a direct media URL.
   */
  onMediaUpload?: (file: File) => Promise<{ handle?: string; link?: string }>;
}

// ─── Constants derived from SDK enums ────────────────────────────────────────

const LANGUAGE_LABELS: Record<string, string> = {
  [LanguagesEnum.Afrikaans]: "Afrikaans",
  [LanguagesEnum.Albanian]: "Albanian",
  [LanguagesEnum.Arabic]: "Arabic",
  [LanguagesEnum.Azerbaijani]: "Azerbaijani",
  [LanguagesEnum.Bengali]: "Bengali",
  [LanguagesEnum.Bulgarian]: "Bulgarian",
  [LanguagesEnum.Catalan]: "Catalan",
  [LanguagesEnum.Chinese_CHN]: "Chinese (Simplified)",
  [LanguagesEnum.Chinese_HKG]: "Chinese (Hong Kong)",
  [LanguagesEnum.Chinese_TAI]: "Chinese (Traditional)",
  [LanguagesEnum.Croatian]: "Croatian",
  [LanguagesEnum.Czech]: "Czech",
  [LanguagesEnum.Danish]: "Danish",
  [LanguagesEnum.Dutch]: "Dutch",
  [LanguagesEnum.English]: "English",
  [LanguagesEnum.English_UK]: "English (UK)",
  [LanguagesEnum.English_US]: "English (US)",
  [LanguagesEnum.Estonian]: "Estonian",
  [LanguagesEnum.Filipino]: "Filipino",
  [LanguagesEnum.Finnish]: "Finnish",
  [LanguagesEnum.French]: "French",
  [LanguagesEnum.Georgian]: "Georgian",
  [LanguagesEnum.German]: "German",
  [LanguagesEnum.Greek]: "Greek",
  [LanguagesEnum.Gujarati]: "Gujarati",
  [LanguagesEnum.Hausa]: "Hausa",
  [LanguagesEnum.Hebrew]: "Hebrew",
  [LanguagesEnum.Hindi]: "Hindi",
  [LanguagesEnum.Hungarian]: "Hungarian",
  [LanguagesEnum.Indonesian]: "Indonesian",
  [LanguagesEnum.Irish]: "Irish",
  [LanguagesEnum.Italian]: "Italian",
  [LanguagesEnum.Japanese]: "Japanese",
  [LanguagesEnum.Kannada]: "Kannada",
  [LanguagesEnum.Kazakh]: "Kazakh",
  [LanguagesEnum.Kinyarwanda]: "Kinyarwanda",
  [LanguagesEnum.Korean]: "Korean",
  [LanguagesEnum.Kyrgyz_Kyrgyzstan]: "Kyrgyz",
  [LanguagesEnum.Lao]: "Lao",
  [LanguagesEnum.Latvian]: "Latvian",
  [LanguagesEnum.Lithuanian]: "Lithuanian",
  [LanguagesEnum.Macedonian]: "Macedonian",
  [LanguagesEnum.Malay]: "Malay",
  [LanguagesEnum.Malayalam]: "Malayalam",
  [LanguagesEnum.Marathi]: "Marathi",
  [LanguagesEnum.Norwegian]: "Norwegian",
  [LanguagesEnum.Persian]: "Persian",
  [LanguagesEnum.Polish]: "Polish",
  [LanguagesEnum.Portuguese_BR]: "Portuguese (BR)",
  [LanguagesEnum.Portuguese_POR]: "Portuguese (PT)",
  [LanguagesEnum.Punjabi]: "Punjabi",
  [LanguagesEnum.Romanian]: "Romanian",
  [LanguagesEnum.Russian]: "Russian",
  [LanguagesEnum.Serbian]: "Serbian",
  [LanguagesEnum.Slovak]: "Slovak",
  [LanguagesEnum.Slovenian]: "Slovenian",
  [LanguagesEnum.Spanish]: "Spanish",
  [LanguagesEnum.Spanish_ARG]: "Spanish (AR)",
  [LanguagesEnum.Spanish_SPA]: "Spanish (ES)",
  [LanguagesEnum.Spanish_MEX]: "Spanish (MX)",
  [LanguagesEnum.Swahili]: "Swahili",
  [LanguagesEnum.Swedish]: "Swedish",
  [LanguagesEnum.Tamil]: "Tamil",
  [LanguagesEnum.Telugu]: "Telugu",
  [LanguagesEnum.Thai]: "Thai",
  [LanguagesEnum.Turkish]: "Turkish",
  [LanguagesEnum.Ukrainian]: "Ukrainian",
  [LanguagesEnum.Urdu]: "Urdu",
  [LanguagesEnum.Uzbek]: "Uzbek",
  [LanguagesEnum.Vietnamese]: "Vietnamese",
  [LanguagesEnum.Zulu]: "Zulu",
};

const LANGUAGE_OPTIONS = Object.values(LanguagesEnum).map((code) => ({
  code,
  label: LANGUAGE_LABELS[code] ?? code,
}));

const CATEGORY_OPTIONS = [
  { value: CategoryEnum.Marketing, label: "Marketing" },
  { value: CategoryEnum.Utility, label: "Utility" },
  { value: CategoryEnum.Authentication, label: "Authentication" },
];

const MEDIA_SAMPLES: { value: HeaderFormat; label: string }[] = [
  { value: "NONE", label: "None" },
  { value: "IMAGE", label: "Image" },
  { value: "VIDEO", label: "Video" },
  { value: "DOCUMENT", label: "Document" },
  { value: "LOCATION", label: "Location" },
];

const MEDIA_ACCEPT: Record<string, string> = {
  IMAGE: "image/jpeg,image/png",
  VIDEO: "video/mp4,video/3gpp",
  DOCUMENT: "application/pdf,application/msword,application/vnd.ms-excel,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.presentationml.presentation,text/plain",
};

const MEDIA_HINTS: Record<string, string> = {
  IMAGE: "JPG or PNG, max 5 MB",
  VIDEO: "MP4 or 3GPP, max 16 MB",
  DOCUMENT: "PDF, DOC, XLS, PPT, or TXT, max 100 MB",
};

interface ButtonOption {
  label: string;
  type: ButtonActionType;
  icon: React.ReactNode;
}

const BUTTON_OPTIONS: ButtonOption[] = [
  {
    label: "Custom",
    type: "QUICK_REPLY",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    label: "Visit website",
    type: "URL",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    ),
  },
  {
    label: "Call on WhatsApp",
    type: "VOICE_CALL",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Call phone number",
    type: "PHONE_NUMBER",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Complete Flow",
    type: "FLOW",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 12h6" />
        <path d="M12 9v6" />
      </svg>
    ),
  },
  {
    label: "Copy offer code",
    type: "COPY_CODE",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
    ),
  },
];


// ─── Helpers ─────────────────────────────────────────────────────────────────

function extractVariables(text: string, format?: ParameterFormat): string[] {
  const matches = text.match(/\{\{[^}]+\}\}/g);
  if (!matches) return [];
  const unique = [...new Set(matches)];
  if (!format) return unique;
  // Filter to only variables valid for the current format
  if (format === "POSITIONAL") return unique.filter((v) => /^\{\{\d+\}\}$/.test(v));
  return unique.filter((v) => /^\{\{[a-z_][a-z0-9_]*\}\}$/i.test(v));
}

function detectMixedVariables(text: string, format: ParameterFormat): string | null {
  const all = text.match(/\{\{[^}]+\}\}/g);
  if (!all) return null;
  if (format === "POSITIONAL") {
    const hasNamed = all.some((v) => !/^\{\{\d+\}\}$/.test(v));
    if (hasNamed) return "This template contains variable parameters with incorrect formatting. Variable parameters must be whole numbers with two sets of curly brackets (for example, {{1}}, {{2}}).";
  } else {
    const hasPositional = all.some((v) => /^\{\{\d+\}\}$/.test(v));
    if (hasPositional) return "This template contains variable parameters with incorrect formatting. Variable parameters must use names with lowercase letters and underscores (for example, {{customer_name}}).";
  }
  return null;
}

// ─── Inline SVG Icons ────────────────────────────────────────────────────────

function PlusIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function CloseIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function InfoIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

function ChevronDownIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function UploadIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--wa-text-secondary)" }}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}

function FileIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--wa-text-secondary)" }}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

// ─── Shared styles ───────────────────────────────────────────────────────────

const inputStyle = {
  background: "var(--wa-bg)",
  borderColor: "var(--wa-border)",
  color: "var(--wa-text-primary)",
};

// ─── WA Select ───────────────────────────────────────────────────────────────

interface WaSelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

function WaSelect({
  value,
  onValueChange,
  options,
  className,
}: {
  value: string;
  onValueChange: (value: string) => void;
  options: WaSelectOption[];
  className?: string;
}) {
  const handleChange = React.useCallback(
    (v: string | null) => { if (v !== null) onValueChange(v); },
    [onValueChange],
  );

  return (
    <Select.Root value={value} onValueChange={handleChange}>
      <Select.Trigger
        className={cn(
          "wa-select-trigger flex w-full cursor-pointer items-center justify-between rounded-lg border py-2 pl-3 pr-2.5 text-sm outline-none transition-colors",
          "focus-visible:ring-1",
          className,
        )}
        style={{
          ...inputStyle,
          "--ring-color": "var(--wa-emerald-500)",
        } as React.CSSProperties}
      >
        <Select.Value />
        <Select.Icon>
          <ChevronDownIcon size={14} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner
          align="start"
          side="bottom"
          sideOffset={4}
          collisionPadding={8}
          alignItemWithTrigger={false}
        >
          <Select.Popup
            className="wa-select-popup z-50 overflow-y-auto rounded-lg border shadow-lg"
            style={{
              background: "var(--wa-panel-bg)",
              borderColor: "var(--wa-border)",
              minWidth: "var(--anchor-width)",
              maxHeight: "min(var(--available-height, 300px), 300px)",
            }}
          >
            <Select.List>
              {options.map((opt) => (
                <Select.Item
                  key={opt.value}
                  value={opt.value}
                  disabled={opt.disabled}
                  className={cn(
                    "wa-select-item px-3 py-2 text-sm outline-none data-[selected]:font-medium",
                    opt.disabled
                      ? "cursor-not-allowed opacity-40"
                      : "cursor-pointer data-[highlighted]:bg-black/5 dark:data-[highlighted]:bg-white/10",
                  )}
                  style={{ color: "var(--wa-text-primary)" }}
                >
                  <Select.ItemText>{opt.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}

// ─── Section wrapper ─────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border p-5" style={{ borderColor: "var(--wa-border)", background: "var(--wa-panel-bg)" }}>
      <h3 className="mb-4 text-sm font-semibold" style={{ color: "var(--wa-text-primary)" }}>{title}</h3>
      {children}
    </div>
  );
}

// ─── Body Editor (Tiptap) ────────────────────────────────────────────────────

function BodyEditor({
  value,
  onChange,
  parameterFormat,
}: {
  value: string;
  onChange: (text: string) => void;
  parameterFormat: ParameterFormat;
}) {
  const isInternalUpdate = React.useRef(false);

  const editor = useEditor({
    immediatelyRender: true,
    extensions: [
      StarterKit.configure({
        bold: false, italic: false, strike: false, code: false,
        codeBlock: false, blockquote: false, heading: false,
        bulletList: false, orderedList: false, listItem: false, horizontalRule: false,
      }),
      VariableNode,
      Placeholder.configure({ placeholder: "Write your template message here..." }),
      CharacterCount.configure({ limit: 1024 }),
    ],
    content: "",
    onUpdate({ editor }) {
      isInternalUpdate.current = true;
      const text = getPlainTextWithVariables(editor.getJSON());
      onChange(text);
    },
    editorProps: { attributes: { class: "tiptap-body-editor" } },
  });

  React.useEffect(() => {
    if (isInternalUpdate.current) { isInternalUpdate.current = false; return; }
    if (!editor) return;
    if (value === "" && !editor.isEmpty) editor.commands.clearContent();
  }, [editor, value]);

  const [showNameInput, setShowNameInput] = React.useState(false);
  const [varName, setVarName] = React.useState("");
  const nameInputRef = React.useRef<HTMLInputElement>(null);

  const insertVariable = React.useCallback(() => {
    if (!editor) return;
    if (parameterFormat === "NAMED") {
      setVarName("");
      setShowNameInput(true);
      setTimeout(() => nameInputRef.current?.focus(), 0);
      return;
    }
    const text = getPlainTextWithVariables(editor.getJSON());
    const existing = text.match(/\{\{(\d+)\}\}/g) ?? [];
    const nextIndex = existing.length + 1;
    editor.chain().focus().insertContent({ type: "variable", attrs: { index: nextIndex } }).run();
  }, [editor, parameterFormat]);

  const confirmNamedVariable = React.useCallback(() => {
    if (!editor) return;
    const sanitized = varName.toLowerCase().replace(/[^a-z0-9_]/g, "_").replace(/^_+|_+$/g, "");
    if (!sanitized) { setShowNameInput(false); return; }
    editor.chain().focus().insertContent({ type: "variable", attrs: { name: sanitized } }).run();
    setShowNameInput(false);
    setVarName("");
  }, [editor, varName]);

  const charCount = editor?.storage.characterCount?.characters() ?? 0;

  // Debounced validation for mixed variable types
  const [validationError, setValidationError] = React.useState<string | null>(null);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setValidationError(detectMixedVariables(value, parameterFormat));
    }, 500);
    return () => clearTimeout(timer);
  }, [value, parameterFormat]);

  const hasError = validationError !== null;

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label className="text-sm font-medium" style={{ color: "var(--wa-text-primary)" }}>Body</label>
        <div className="flex items-center gap-2">
          <span className="text-xs" style={{ color: "var(--wa-text-secondary)" }}>{charCount}/1028</span>
          {hasError && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--wa-error, #ef4444)" }}>
              <circle cx="12" cy="12" r="10" />
              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
            </svg>
          )}
        </div>
      </div>
      <div
        className="rounded-lg border transition-colors"
        style={{
          background: "var(--wa-bg)",
          borderColor: hasError ? "var(--wa-error, #ef4444)" : "var(--wa-border)",
        }}
      >
        <EditorContent editor={editor} />
        <div className="flex items-center justify-end gap-1 border-t px-3 py-2" style={{ borderColor: "var(--wa-border)" }}>
          {["B", "I", "S"].map((fmt) => (
            <button key={fmt} type="button" className="rounded px-2 py-1 text-xs font-medium transition-colors hover:opacity-70" style={{ color: "var(--wa-text-secondary)" }}>
              {fmt === "S" ? <s>{fmt}</s> : fmt === "I" ? <em>{fmt}</em> : <strong>{fmt}</strong>}
            </button>
          ))}
          <button type="button" className="rounded px-2 py-1 text-xs font-mono transition-colors hover:opacity-70" style={{ color: "var(--wa-text-secondary)" }}>{"</>"}</button>
          <div className="mx-1 h-4 w-px" style={{ background: "var(--wa-border)" }} />
          <div className="relative">
            <button type="button" onClick={insertVariable} className="flex items-center gap-1 text-xs font-medium transition-colors hover:opacity-80" style={{ color: "var(--wa-teal-500, var(--wa-emerald-500))" }}>
              <PlusIcon size={12} /> Add variable
            </button>
            {showNameInput && (
              <div
                className="absolute bottom-full right-0 z-50 mb-2 flex items-center gap-1.5 rounded-lg border p-2 shadow-lg"
                style={{ background: "var(--wa-panel-bg)", borderColor: "var(--wa-border)" }}
              >
                <input
                  ref={nameInputRef}
                  type="text"
                  value={varName}
                  onChange={(e) => setVarName(e.target.value.replace(/[^a-zA-Z0-9_]/g, ""))}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") confirmNamedVariable();
                    if (e.key === "Escape") setShowNameInput(false);
                  }}
                  placeholder="variable_name"
                  className="w-[140px] rounded border px-2 py-1 text-xs outline-none"
                  style={inputStyle}
                />
                <button
                  type="button"
                  onClick={confirmNamedVariable}
                  className="rounded px-2 py-1 text-xs font-medium text-white"
                  style={{ background: "var(--wa-emerald-500)" }}
                >
                  Add
                </button>
              </div>
            )}
          </div>
          <button type="button" className="ml-1 opacity-60 hover:opacity-100" style={{ color: "var(--wa-text-secondary)" }}><InfoIcon size={14} /></button>
        </div>
      </div>
      {validationError && (
        <p className="mt-1.5 text-xs leading-snug" style={{ color: "var(--wa-error, #ef4444)" }}>
          {validationError}
        </p>
      )}
    </div>
  );
}

// ─── Media Upload Zone ───────────────────────────────────────────────────────

function MediaUploadZone({
  format,
  attachment,
  onAttachmentChange,
  onUpload,
}: {
  format: HeaderFormat;
  attachment?: HeaderMediaAttachment | null;
  onAttachmentChange: (attachment: HeaderMediaAttachment | null) => void;
  /**
   * Optional async upload handler. When provided, the component will
   * automatically call it after file selection and merge the returned
   * `handle` / `link` into the attachment.
   *
   * Example with meta-cloud-api Resumable Upload:
   * ```ts
   * onUpload={async (file) => {
   *   const { id } = await client.profile.createUploadSession({
   *     fileLength: file.size,
   *     fileType: file.type,
   *     fileName: file.name,
   *   });
   *   await client.profile.uploadMedia({ uploadId: id, file: buffer });
   *   const { handle } = await client.profile.getUploadHandle({ uploadId: id });
   *   return { handle };
   * }}
   * ```
   */
  onUpload?: (file: File) => Promise<{ handle?: string; link?: string }>;
}) {
  const accept = MEDIA_ACCEPT[format];
  const hint = MEDIA_HINTS[format];
  if (!accept) return null;

  const inputRef = React.useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = React.useState(false);
  const [uploading, setUploading] = React.useState(false);
  const [uploadError, setUploadError] = React.useState<string | null>(null);

  const handleFiles = React.useCallback(
    async (files: FileList | null) => {
      if (!files || files.length === 0) return;
      const file = files[0];
      const next: HeaderMediaAttachment = { file };

      if (onUpload) {
        setUploading(true);
        setUploadError(null);
        try {
          const result = await onUpload(file);
          next.handle = result.handle;
          next.link = result.link;
        } catch (err) {
          setUploadError(err instanceof Error ? err.message : "Upload failed");
          setUploading(false);
          return;
        }
        setUploading(false);
      }

      onAttachmentChange(next);
    },
    [onUpload, onAttachmentChange],
  );

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  // ── Uploading state ──────────────────────────────────────────────────────
  if (uploading) {
    return (
      <div
        className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed px-4 py-8 text-center"
        style={{ borderColor: "var(--wa-emerald-500)", background: "var(--wa-bg)" }}
      >
        <svg className="animate-spin" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--wa-emerald-500)" }}>
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
        <p className="mt-2 text-sm" style={{ color: "var(--wa-text-primary)" }}>Uploading…</p>
      </div>
    );
  }

  // ── File attached ────────────────────────────────────────────────────────
  if (attachment) {
    const { file } = attachment;
    const isImage = file.type.startsWith("image/");
    const previewUrl = isImage ? URL.createObjectURL(file) : null;
    const hasHandle = Boolean(attachment.handle || attachment.link);

    return (
      <div
        className="flex items-center gap-3 rounded-lg border p-3"
        style={{ borderColor: "var(--wa-border)", background: "var(--wa-bg)" }}
      >
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Preview"
            className="h-12 w-12 rounded object-cover"
            onLoad={() => URL.revokeObjectURL(previewUrl)}
          />
        ) : (
          <div
            className="flex h-12 w-12 items-center justify-center rounded"
            style={{ background: "var(--wa-panel-bg)" }}
          >
            <FileIcon size={20} />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium" style={{ color: "var(--wa-text-primary)" }}>
            {file.name}
          </p>
          <p className="text-xs" style={{ color: "var(--wa-text-secondary)" }}>
            {(file.size / 1024).toFixed(1)} KB
            {hasHandle && (
              <span className="ml-1.5 inline-flex items-center gap-1" style={{ color: "var(--wa-emerald-500)" }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                Uploaded
              </span>
            )}
          </p>
        </div>
        <button
          type="button"
          onClick={() => { setUploadError(null); onAttachmentChange(null); }}
          className="rounded p-1 transition-colors hover:opacity-70"
          style={{ color: "var(--wa-text-secondary)" }}
        >
          <CloseIcon size={16} />
        </button>
      </div>
    );
  }

  // ── Empty / drop zone ────────────────────────────────────────────────────
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-lg border-2 border-dashed px-4 py-8 text-center transition-colors",
        dragging && "border-solid",
      )}
      style={{
        borderColor: dragging ? "var(--wa-emerald-500)" : "var(--wa-border)",
        background: dragging ? "var(--wa-emerald-500, #25d366)08" : "var(--wa-bg)",
      }}
      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
    >
      <UploadIcon size={24} />
      <p className="mt-2 text-sm" style={{ color: "var(--wa-text-primary)" }}>
        Drag and drop to upload
      </p>
      <p className="mt-1 text-sm">
        <span style={{ color: "var(--wa-text-secondary)" }}>Or </span>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="font-medium underline-offset-2 hover:underline"
          style={{ color: "var(--wa-teal-500, var(--wa-emerald-500))" }}
        >
          choose files on your device
        </button>
      </p>
      {hint && (
        <p className="mt-2 text-xs" style={{ color: "var(--wa-text-secondary)" }}>{hint}</p>
      )}
      {uploadError && (
        <p className="mt-2 text-xs" style={{ color: "var(--wa-error, #ef4444)" }}>{uploadError}</p>
      )}
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />
    </div>
  );
}

// ─── Variable Samples ────────────────────────────────────────────────────────

function VariableSamplesSection({
  label, text, samples, onChange, parameterFormat,
}: {
  label: string; text: string; samples: VariableSample[]; onChange: (samples: VariableSample[]) => void; parameterFormat?: ParameterFormat;
}) {
  const variables = extractVariables(text, parameterFormat);

  React.useEffect(() => {
    if (variables.length === 0 && samples.length > 0) { onChange([]); return; }
    if (variables.length === samples.length && variables.every((v, i) => samples[i]?.variable === v)) return;
    const next = variables.map((v) => {
      const existing = samples.find((s) => s.variable === v);
      return existing ?? { variable: v, value: "" };
    });
    onChange(next);
  }, [text]);

  if (variables.length === 0) return null;

  return (
    <div className="rounded-lg border p-4" style={{ borderColor: "var(--wa-border)", background: "var(--wa-bg)" }}>
      <h4 className="mb-1 text-sm font-semibold" style={{ color: "var(--wa-text-primary)" }}>Variable Samples</h4>
      <p className="mb-3 text-xs" style={{ color: "var(--wa-text-secondary)" }}>
        Include samples of all variables in your message to help Meta review your template. Remember not to include any customer information to protect your customer&apos;s privacy.
      </p>
      <p className="mb-2 text-xs font-medium" style={{ color: "var(--wa-text-primary)" }}>{label}</p>
      <div className="space-y-2">
        {samples.map((sample, i) => (
          <div key={sample.variable}>
            <div className="flex items-center gap-3">
              <span className="inline-flex min-w-[56px] items-center justify-center rounded border px-2 py-1 text-xs" style={{ borderColor: "var(--wa-border)", color: "var(--wa-text-secondary)", background: "var(--wa-panel-bg)" }}>
                {sample.variable}
              </span>
              <div className="relative flex-1">
                <input
                  type="text"
                  value={sample.value}
                  onChange={(e) => { const next = [...samples]; next[i] = { ...next[i], value: e.target.value }; onChange(next); }}
                  placeholder={`Enter content for ${sample.variable}`}
                  className="w-full rounded-lg border px-3 py-1.5 pr-8 text-sm outline-none"
                  style={inputStyle}
                />
                {sample.value && (
                  <button
                    type="button"
                    onClick={() => { const next = [...samples]; next[i] = { ...next[i], value: "" }; onChange(next); }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-0.5 transition-colors hover:opacity-70"
                    style={{ color: "var(--wa-error, #ef4444)" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
            {!sample.value && (
              <button
                type="button"
                onClick={() => {
                  const input = document.querySelector<HTMLInputElement>(`input[placeholder="Enter content for ${sample.variable}"]`);
                  input?.focus();
                }}
                className="ml-[68px] mt-1 text-xs font-medium transition-colors hover:opacity-80"
                style={{ color: "var(--wa-teal-500, var(--wa-emerald-500))" }}
              >
                Add sample text
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Button Row ──────────────────────────────────────────────────────────────

function ButtonRow({
  btn, index, onUpdate, onRemove,
}: {
  btn: ButtonFormItem; index: number;
  onUpdate: (index: number, btn: Partial<ButtonFormItem>) => void;
  onRemove: (index: number) => void;
}) {
  const isUrl = btn.type === "URL";
  const isPhone = btn.type === "PHONE_NUMBER";
  const isVoiceCall = btn.type === "VOICE_CALL";
  const isCopyCode = btn.type === "COPY_CODE";

  const cols = isUrl
    ? "140px 1fr 100px 1fr"
    : isPhone || isVoiceCall
      ? "140px 1fr 1fr"
      : isCopyCode
        ? "140px 1fr 1fr"
        : "140px 1fr";

  return (
    <div className="flex items-start gap-2 rounded-lg border p-3" style={{ borderColor: "var(--wa-border)", background: "var(--wa-bg)" }}>
      <div className="grid flex-1 gap-2" style={{ gridTemplateColumns: cols }}>
        <div>
          <label className="mb-1 block text-[10px] font-medium uppercase tracking-wide" style={{ color: "var(--wa-text-secondary)" }}>Type of Action</label>
          <WaSelect
            value={btn.type}
            onValueChange={(v) => onUpdate(index, { type: v as ButtonActionType })}
            options={BUTTON_OPTIONS.map((opt) => ({ value: opt.type, label: opt.label }))}
            className="text-xs"
          />
        </div>

        <div>
          <label className="mb-1 block text-[10px] font-medium uppercase tracking-wide" style={{ color: "var(--wa-text-secondary)" }}>Button Text</label>
          <div className="relative">
            <input type="text" value={btn.text} onChange={(e) => onUpdate(index, { text: e.target.value })} placeholder="Button text" maxLength={25} className="w-full rounded-lg border px-3 py-2 pr-12 text-xs outline-none" style={inputStyle} />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px]" style={{ color: "var(--wa-text-secondary)" }}>{btn.text.length}/25</span>
          </div>
        </div>

        {isUrl && (
          <div>
            <label className="mb-1 block text-[10px] font-medium uppercase tracking-wide" style={{ color: "var(--wa-text-secondary)" }}>URL Type</label>
            <WaSelect
              value={btn.urlType ?? "STATIC"}
              onValueChange={(v) => onUpdate(index, { urlType: v as "STATIC" | "DYNAMIC" })}
              options={[{ value: "STATIC", label: "Static" }, { value: "DYNAMIC", label: "Dynamic" }]}
              className="text-xs"
            />
          </div>
        )}

        {isUrl && (
          <div>
            <label className="mb-1 block text-[10px] font-medium uppercase tracking-wide" style={{ color: "var(--wa-text-secondary)" }}>Website URL</label>
            <div className="relative">
              <input type="url" value={btn.url ?? ""} onChange={(e) => onUpdate(index, { url: e.target.value })} placeholder="https://www.example.com" className="w-full rounded-lg border px-3 py-2 pr-16 text-xs outline-none" style={inputStyle} />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px]" style={{ color: "var(--wa-text-secondary)" }}>{(btn.url ?? "").length}/2000</span>
            </div>
          </div>
        )}

        {(isPhone || isVoiceCall) && (
          <div>
            <label className="mb-1 block text-[10px] font-medium uppercase tracking-wide" style={{ color: "var(--wa-text-secondary)" }}>Phone Number</label>
            <input type="tel" value={btn.phoneNumber ?? ""} onChange={(e) => onUpdate(index, { phoneNumber: e.target.value })} placeholder="+1234567890" className="w-full rounded-lg border px-3 py-2 text-xs outline-none" style={inputStyle} />
          </div>
        )}

        {isCopyCode && (
          <div>
            <label className="mb-1 block text-[10px] font-medium uppercase tracking-wide" style={{ color: "var(--wa-text-secondary)" }}>Offer Code</label>
            <input type="text" value={btn.example ?? ""} onChange={(e) => onUpdate(index, { example: e.target.value })} placeholder="e.g. SAVE20" maxLength={15} className="w-full rounded-lg border px-3 py-2 text-xs outline-none" style={inputStyle} />
          </div>
        )}
      </div>

      <button type="button" onClick={() => onRemove(index)} className="mt-5 rounded p-1 transition-colors hover:opacity-70" style={{ color: "var(--wa-text-secondary)" }}>
        <CloseIcon size={16} />
      </button>
    </div>
  );
}

// ─── Add Button Dropdown ─────────────────────────────────────────────────────

function AddButtonDropdown({
  onSelect,
  disabled,
}: {
  onSelect: (type: ButtonActionType) => void;
  disabled?: boolean;
}) {
  return (
    <Menu.Root>
      <Menu.Trigger
        disabled={disabled}
        className="flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium transition-colors hover:opacity-80 disabled:opacity-40"
        style={{
          borderColor: "var(--wa-border)",
          color: "var(--wa-text-primary)",
          background: "var(--wa-panel-bg)",
        }}
      >
        <PlusIcon size={14} /> Add button <ChevronDownIcon size={12} />
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner
          side="bottom"
          align="start"
          sideOffset={4}
          collisionPadding={8}
        >
          <Menu.Popup
            className="wa-select-popup z-50 min-w-[200px] overflow-y-auto rounded-lg border shadow-lg"
            style={{
              background: "var(--wa-panel-bg)",
              borderColor: "var(--wa-border)",
              maxHeight: "min(var(--available-height, 300px), 300px)",
            }}
          >
            {BUTTON_OPTIONS.map((opt) => (
              <Menu.Item
                key={opt.type}
                onClick={() => onSelect(opt.type)}
                className="flex cursor-pointer items-center gap-3 px-4 py-2.5 text-sm outline-none data-[highlighted]:bg-black/5 dark:data-[highlighted]:bg-white/5"
                style={{ color: "var(--wa-text-primary)" }}
              >
                <span style={{ color: "var(--wa-text-secondary)" }}>{opt.icon}</span>
                {opt.label}
              </Menu.Item>
            ))}
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}

// ─── Header Text Input ───────────────────────────────────────────────────────

function HeaderTextInput({
  value,
  parameterFormat,
  onChange,
}: {
  value: string;
  parameterFormat: ParameterFormat;
  onChange: (text: string) => void;
}) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [showNameInput, setShowNameInput] = React.useState(false);
  const [varName, setVarName] = React.useState("");
  const nameInputRef = React.useRef<HTMLInputElement>(null);

  const insertVariable = () => {
    if (parameterFormat === "NAMED") {
      setVarName("");
      setShowNameInput(true);
      setTimeout(() => nameInputRef.current?.focus(), 0);
    } else {
      const existing = value.match(/\{\{(\d+)\}\}/g) ?? [];
      const nextIndex = existing.length + 1;
      const el = inputRef.current;
      if (el) {
        const pos = el.selectionStart ?? value.length;
        const next = value.slice(0, pos) + `{{${nextIndex}}}` + value.slice(pos);
        onChange(next);
      } else {
        onChange(value + `{{${nextIndex}}}`);
      }
    }
  };

  const confirmNamedVariable = () => {
    const sanitized = varName.toLowerCase().replace(/[^a-z0-9_]/g, "_").replace(/^_+|_+$/g, "");
    if (!sanitized) { setShowNameInput(false); return; }
    const el = inputRef.current;
    if (el) {
      const pos = el.selectionStart ?? value.length;
      const next = value.slice(0, pos) + `{{${sanitized}}}` + value.slice(pos);
      onChange(next);
    } else {
      onChange(value + `{{${sanitized}}}`);
    }
    setShowNameInput(false);
    setVarName("");
  };

  return (
    <div>
      <label className="mb-1 block text-xs font-medium" style={{ color: "var(--wa-text-primary)" }}>
        Header &middot; <span style={{ color: "var(--wa-text-secondary)" }}>Optional</span>
      </label>
      <div className="relative">
        <input
          ref={inputRef}
          type="text" value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Header text" maxLength={60}
          className="w-full rounded-lg border px-3 py-2 text-sm outline-none" style={inputStyle}
        />
        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px]" style={{ color: "var(--wa-text-secondary)" }}>{value.length}/60</span>
      </div>
      {value && (
        <div className="mt-1 flex justify-end">
          <div className="relative">
            <button type="button" onClick={insertVariable} className="flex items-center gap-1 text-xs font-medium transition-colors hover:opacity-80" style={{ color: "var(--wa-teal-500, var(--wa-emerald-500))" }}>
              <PlusIcon size={12} /> Add variable
            </button>
            {showNameInput && (
              <div
                className="absolute bottom-full right-0 z-50 mb-2 flex items-center gap-1.5 rounded-lg border p-2 shadow-lg"
                style={{ background: "var(--wa-panel-bg)", borderColor: "var(--wa-border)" }}
              >
                <input
                  ref={nameInputRef}
                  type="text"
                  value={varName}
                  onChange={(e) => setVarName(e.target.value.replace(/[^a-zA-Z0-9_]/g, ""))}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") confirmNamedVariable();
                    if (e.key === "Escape") setShowNameInput(false);
                  }}
                  placeholder="variable_name"
                  className="w-[140px] rounded border px-2 py-1 text-xs outline-none"
                  style={inputStyle}
                />
                <button
                  type="button"
                  onClick={confirmNamedVariable}
                  className="rounded px-2 py-1 text-xs font-medium text-white"
                  style={{ background: "var(--wa-emerald-500)" }}
                >
                  Add
                </button>
              </div>
            )}
          </div>
          <button type="button" className="ml-2 opacity-60 hover:opacity-100" style={{ color: "var(--wa-text-secondary)" }}><InfoIcon size={14} /></button>
        </div>
      )}
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────

const TemplateEditor = React.forwardRef<HTMLDivElement, TemplateEditorProps>(
  ({ className, formData, onChange, onSubmit, onDelete, creating = false, onMediaUpload, ...props }, ref) => {
    const update = (partial: Partial<TemplateFormData>) => onChange({ ...formData, ...partial });

    const addButton = (type: ButtonActionType = "QUICK_REPLY") => {
      if (formData.buttons.length >= 10) return;
      update({ buttons: [...formData.buttons, { type, text: "", urlType: "STATIC" }] });
    };

    const updateButton = (index: number, btn: Partial<ButtonFormItem>) => {
      const buttons = formData.buttons.map((b, i) => (i === index ? { ...b, ...btn } : b));
      update({ buttons });
    };

    const removeButton = (index: number) => {
      update({ buttons: formData.buttons.filter((_, i) => i !== index) });
    };

    const langLabel = LANGUAGE_OPTIONS.find((l) => l.code === formData.language)?.label ?? formData.language;

    return (
      <div ref={ref} className={cn("flex flex-col", className)} style={{ color: "var(--wa-text-primary)" }} {...props}>
        {/* ── Top bar ── */}
        <div className="flex items-center justify-between border-b px-6 py-4" style={{ borderColor: "var(--wa-border)", background: "var(--wa-panel-bg)" }}>
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full" style={{ background: "var(--wa-emerald-500)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" /></svg>
            </div>
            <div>
              <p className="text-sm font-semibold">{formData.name || "untitled"} &middot; {langLabel}</p>
              <p className="text-xs" style={{ color: "var(--wa-text-secondary)" }}>{formData.category}</p>
            </div>
          </div>
          {onDelete && (
            <button type="button" onClick={onDelete} className="rounded-lg border px-4 py-1.5 text-xs font-medium transition-colors hover:opacity-80" style={{ borderColor: "var(--wa-border)", color: "var(--wa-text-primary)", background: "var(--wa-panel-bg)" }}>
              Delete template
            </button>
          )}
        </div>

        {/* ── Form body ── */}
        <div className="flex-1 space-y-6 overflow-y-auto px-6 py-6" style={{ background: "var(--wa-bg)" }}>
          {/* Template name and language */}
          <Section title="Template name and language">
            <div className="grid grid-cols-[1fr_auto] gap-4">
              <div>
                <label className="mb-1 block text-xs font-medium" style={{ color: "var(--wa-text-secondary)" }}>Name your template</label>
                <div className="relative">
                  <input type="text" value={formData.name} onChange={(e) => update({ name: e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, "_") })} placeholder="e.g. order_confirmation" maxLength={512} className="w-full rounded-lg border px-3 py-2 text-sm outline-none" style={inputStyle} />
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px]" style={{ color: "var(--wa-text-secondary)" }}>{formData.name.length}/512</span>
                </div>
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium" style={{ color: "var(--wa-text-secondary)" }}>Select language</label>
                <WaSelect
                  value={formData.language}
                  onValueChange={(v) => update({ language: v })}
                  options={LANGUAGE_OPTIONS.map((l) => ({ value: l.code, label: l.label }))}
                />
              </div>
            </div>
          </Section>

          {/* Content */}
          <Section title="Content">
            <p className="mb-4 text-xs" style={{ color: "var(--wa-text-secondary)" }}>
              Add a header, body and footer for your template. Cloud API hosted by Meta will review the template variables and content to protect the security and integrity of our services.
            </p>

            <div className="space-y-5">
              {/* Type of variable */}
              <div>
                <label className="mb-1 block text-xs font-medium" style={{ color: "var(--wa-text-primary)" }}>
                  Type of variable
                </label>
                <WaSelect
                  value={formData.parameterFormat}
                  onValueChange={(v) => {
                    if (v === formData.parameterFormat) return;
                    const stripVars = (text: string) => text.replace(/\{\{[^}]+\}\}/g, "");
                    update({
                      parameterFormat: v as ParameterFormat,
                      headerText: stripVars(formData.headerText),
                      bodyText: stripVars(formData.bodyText),
                      headerVariableSamples: [],
                      bodyVariableSamples: [],
                    });
                  }}
                  options={[
                    { value: "NAMED", label: "Name" },
                    { value: "POSITIONAL", label: "Number" },
                  ]}
                  className="max-w-[200px]"
                />
              </div>

              {/* Category */}
              <div>
                <label className="mb-1 block text-xs font-medium" style={{ color: "var(--wa-text-primary)" }}>Category</label>
                <WaSelect
                  value={formData.category}
                  onValueChange={(v) => update({ category: v as `${CategoryEnum}` })}
                  options={CATEGORY_OPTIONS.map((c) => ({ value: c.value, label: c.label }))}
                />
              </div>

              {/* Media sample */}
              <div>
                <label className="mb-1 block text-xs font-medium" style={{ color: "var(--wa-text-primary)" }}>
                  Media sample &middot; <span style={{ color: "var(--wa-text-secondary)" }}>Optional</span>
                </label>
                <WaSelect
                  value={formData.headerFormat === "TEXT" ? "NONE" : formData.headerFormat}
                  onValueChange={(val) => {
                    const v = val as HeaderFormat;
                    if (v === "NONE") update({ headerFormat: formData.headerText ? "TEXT" : "NONE", headerMedia: null });
                    else update({ headerFormat: v, headerText: "", headerMedia: null, headerVariableSamples: [] });
                  }}
                  options={MEDIA_SAMPLES.map((ms) => ({
                    value: ms.value,
                    label: ms.label,
                    disabled: !onMediaUpload && (ms.value === "IMAGE" || ms.value === "VIDEO" || ms.value === "DOCUMENT"),
                  }))}
                />
                {(formData.headerFormat === "IMAGE" || formData.headerFormat === "VIDEO" || formData.headerFormat === "DOCUMENT") && (
                  <div className="mt-3">
                    <MediaUploadZone
                      format={formData.headerFormat}
                      attachment={formData.headerMedia}
                      onAttachmentChange={(attachment) => update({ headerMedia: attachment })}
                      onUpload={onMediaUpload}
                    />
                  </div>
                )}
              </div>

              {/* Header (text) – hidden when a non-text format is selected */}
              {formData.headerFormat !== "IMAGE" && formData.headerFormat !== "VIDEO" && formData.headerFormat !== "DOCUMENT" && formData.headerFormat !== "LOCATION" && (
                <HeaderTextInput
                  value={formData.headerText}
                  parameterFormat={formData.parameterFormat}
                  onChange={(text) => update({ headerText: text, headerFormat: text ? "TEXT" : formData.headerFormat === "TEXT" ? "NONE" : formData.headerFormat })}
                />
              )}

              {/* Body */}
              <BodyEditor value={formData.bodyText} onChange={(text) => update({ bodyText: text })} parameterFormat={formData.parameterFormat} />

              {/* Variable Samples */}
              <VariableSamplesSection label="Body" text={formData.bodyText} samples={formData.bodyVariableSamples} onChange={(samples) => update({ bodyVariableSamples: samples })} parameterFormat={formData.parameterFormat} />
              {formData.headerFormat !== "IMAGE" && formData.headerFormat !== "VIDEO" && formData.headerFormat !== "DOCUMENT" && formData.headerFormat !== "LOCATION" && (
                <VariableSamplesSection label="Header" text={formData.headerText} samples={formData.headerVariableSamples} onChange={(samples) => update({ headerVariableSamples: samples })} parameterFormat={formData.parameterFormat} />
              )}

              {/* Footer */}
              <div>
                <label className="mb-1 block text-xs font-medium" style={{ color: "var(--wa-text-primary)" }}>
                  Footer &middot; <span style={{ color: "var(--wa-text-secondary)" }}>Optional</span>
                </label>
                <div className="relative">
                  <input type="text" value={formData.footerText} onChange={(e) => update({ footerText: e.target.value })} placeholder="Add a short line of text to the bottom of your message in English" maxLength={60} className="w-full rounded-lg border px-3 py-2 text-sm outline-none" style={inputStyle} />
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px]" style={{ color: "var(--wa-text-secondary)" }}>{formData.footerText.length}/60</span>
                </div>
              </div>
            </div>
          </Section>

          {/* Buttons */}
          <Section title="Buttons &middot; Optional">
            <p className="mb-4 text-xs" style={{ color: "var(--wa-text-secondary)" }}>
              Create buttons that let customers respond to your message or take action. You can add up to 10 buttons. If you add more than 3 buttons, they will appear in a list.
            </p>

            <div className="mb-4">
              <AddButtonDropdown
                onSelect={(type) => addButton(type)}
                disabled={formData.buttons.length >= 10}
              />
            </div>

            {/* Call to Action */}
            {formData.buttons.some((b) => b.type === "URL" || b.type === "PHONE_NUMBER" || b.type === "VOICE_CALL") && (
              <div className="mb-4">
                <p className="mb-2 text-xs font-medium" style={{ color: "var(--wa-text-primary)" }}>Call to Action &middot; <span style={{ color: "var(--wa-text-secondary)" }}>Optional</span></p>
                <div className="space-y-2">
                  {formData.buttons.map((btn, i) => (btn.type === "URL" || btn.type === "PHONE_NUMBER" || btn.type === "VOICE_CALL") && (
                    <ButtonRow key={i} btn={btn} index={i} onUpdate={updateButton} onRemove={removeButton} />
                  ))}
                </div>
              </div>
            )}

            {/* Quick Reply / Other */}
            {formData.buttons.some((b) => b.type === "QUICK_REPLY" || b.type === "COPY_CODE" || b.type === "FLOW") && (
              <div>
                <p className="mb-2 text-xs font-medium" style={{ color: "var(--wa-text-primary)" }}>Quick Reply</p>
                <div className="space-y-2">
                  {formData.buttons.map((btn, i) => (btn.type === "QUICK_REPLY" || btn.type === "COPY_CODE" || btn.type === "FLOW") && (
                    <ButtonRow key={i} btn={btn} index={i} onUpdate={updateButton} onRemove={removeButton} />
                  ))}
                </div>
              </div>
            )}
          </Section>

          {/* Submit */}
          {onSubmit && (
            <button type="button" onClick={onSubmit} disabled={creating || !formData.name || !formData.bodyText} className="w-full rounded-lg px-4 py-3 text-sm font-semibold text-white transition-all disabled:opacity-50" style={{ background: "var(--wa-emerald-500)" }}>
              {creating ? "Creating..." : "Submit"}
            </button>
          )}
        </div>
      </div>
    );
  },
);
TemplateEditor.displayName = "TemplateEditor";

export { TemplateEditor };
