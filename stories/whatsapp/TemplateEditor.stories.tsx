import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import React, { useState } from "react";
import {
  TemplateEditor,
  type TemplateFormData,
} from "@/components/ui/whatsapp/template-editor";

const meta: Meta = {
  title: "WhatsApp/TemplateEditor",
  parameters: { layout: "centered", backgrounds: { disable: true } },
};
export default meta;
type Story = StoryObj;

const initialFormData: TemplateFormData = {
  name: "",
  language: "en_US",
  category: "MARKETING",
  headerType: "none",
  headerText: "",
  bodyText: "",
  footerText: "",
  buttons: [],
};

function EditorDemo() {
  const [formData, setFormData] = useState<TemplateFormData>(initialFormData);
  return (
    <div className="p-6" style={{ minWidth: 480 }}>
      <TemplateEditor
        formData={formData}
        onChange={setFormData}
        onSubmit={() => alert(JSON.stringify(formData, null, 2))}
      />
    </div>
  );
}

export const Default: Story = {
  render: () => <EditorDemo />,
};

function PrefilledDemo() {
  const [formData, setFormData] = useState<TemplateFormData>({
    name: "order_confirmation",
    language: "en_US",
    category: "UTILITY",
    headerType: "text",
    headerText: "Order Confirmed",
    bodyText: "Hi {{1}}, your order #{{2}} has been confirmed and will be delivered by {{3}}.",
    footerText: "Reply STOP to unsubscribe",
    buttons: [
      { type: "URL", text: "Track Order", url: "https://example.com/track" },
      { type: "QUICK_REPLY", text: "Contact Support" },
    ],
  });
  return (
    <div className="p-6" style={{ minWidth: 480 }}>
      <TemplateEditor
        formData={formData}
        onChange={setFormData}
        onSubmit={() => alert(JSON.stringify(formData, null, 2))}
      />
    </div>
  );
}

export const Prefilled: Story = {
  name: "Prefilled Form",
  render: () => <PrefilledDemo />,
};
