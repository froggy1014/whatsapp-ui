import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import React from "react";
import { TemplatePreview } from "@/components/ui/whatsapp/template-preview";

const meta: Meta = {
  title: "WhatsApp/TemplatePreview",
  parameters: { layout: "fullscreen", backgrounds: { disable: true } },
};
export default meta;
type Story = StoryObj;

export const Empty: Story = {
  render: () => (
    <div className="wa-wallpaper min-h-screen p-6">
      <TemplatePreview
        style={{ maxWidth: 400 }}
        formData={{
          name: "",
          language: "en_US",
          category: "MARKETING",
          headerType: "none",
          headerText: "",
          bodyText: "",
          footerText: "",
          buttons: [],
        }}
      />
    </div>
  ),
};

export const WithContent: Story = {
  name: "With Content",
  render: () => (
    <div className="wa-wallpaper min-h-screen p-6">
      <TemplatePreview
        style={{ maxWidth: 400 }}
        formData={{
          name: "order_confirmation",
          language: "en_US",
          category: "UTILITY",
          headerType: "text",
          headerText: "Order Confirmed",
          bodyText: "Hi {{1}}, your order #{{2}} has been confirmed and will be delivered by {{3}}.",
          footerText: "Reply STOP to unsubscribe",
          buttons: [
            { type: "URL", text: "Track Order", url: "https://example.com" },
            { type: "PHONE_NUMBER", text: "Call Support", phoneNumber: "+1234567890" },
            { type: "QUICK_REPLY", text: "OK" },
          ],
        }}
      />
    </div>
  ),
};
