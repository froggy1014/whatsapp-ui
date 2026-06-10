import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import React, { useState } from "react";
import {
  TemplateEditor,
  type TemplateFormData,
} from "@/components/ui/whatsapp/template-editor";
import { TemplatePreview } from "@/components/ui/whatsapp/template-preview";

const meta: Meta = {
  title: "WhatsApp/TemplateEditor",
  parameters: { layout: "fullscreen", backgrounds: { disable: true } },
};
export default meta;
type Story = StoryObj;

const initialFormData: TemplateFormData = {
  name: "",
  language: "en_US",
  category: "MARKETING",
  headerFormat: "NONE",
  headerText: "",
  bodyText: "",
  footerText: "",
  buttons: [],
  headerVariableSamples: [],
  bodyVariableSamples: [],
};

function EditorWithPreview({ initial }: { initial: TemplateFormData }) {
  const [formData, setFormData] = useState<TemplateFormData>(initial);
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 overflow-y-auto">
        <TemplateEditor
          formData={formData}
          onChange={setFormData}
          onSubmit={() => alert(JSON.stringify(formData, null, 2))}
          onDelete={() => alert("Delete")}
        />
      </div>
      <div
        className="w-[320px] shrink-0 border-l p-4"
        style={{
          borderColor: "var(--wa-border)",
          background: "var(--wa-panel-bg)",
        }}
      >
        <p
          className="mb-3 text-sm font-semibold"
          style={{ color: "var(--wa-text-primary)" }}
        >
          Template preview
        </p>
        <TemplatePreview formData={formData} />
      </div>
    </div>
  );
}

export const Default: Story = {
  render: () => <EditorWithPreview initial={initialFormData} />,
};

export const Prefilled: Story = {
  name: "Prefilled Form",
  render: () => (
    <EditorWithPreview
      initial={{
        name: "birthday_greeting",
        language: "en_US",
        category: "MARKETING",
        headerFormat: "TEXT",
        headerText: "hello. this is cloudhospital.",
        bodyText: "thank you , {{1}}.\n\nhappy birthday.",
        footerText: "",
        buttons: [
          {
            type: "URL",
            text: "Visit Website",
            url: "https://www.naver.com",
            urlType: "STATIC",
          },
        ],
        headerVariableSamples: [],
        bodyVariableSamples: [{ variable: "{{1}}", value: "gildong" }],
      }}
    />
  ),
};
