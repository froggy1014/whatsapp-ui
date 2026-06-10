import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import React from "react";
import { TemplateList } from "@/components/ui/whatsapp/template-list";

const meta: Meta = {
  title: "WhatsApp/TemplateList",
  parameters: { layout: "fullscreen", backgrounds: { disable: true } },
};
export default meta;
type Story = StoryObj;

const bg = { background: "var(--wa-conversation-bg, #f5f0e8)" };

const sampleTemplates = [
  {
    id: "1",
    name: "order_confirmation",
    status: "APPROVED",
    category: "UTILITY",
    language: "en_US",
    components: [
      { type: "HEADER" as const, text: "Order Confirmed" },
      { type: "BODY" as const, text: "Hi {{1}}, your order #{{2}} has been confirmed." },
      { type: "FOOTER" as const, text: "Reply STOP to unsubscribe" },
    ],
  },
  {
    id: "2",
    name: "welcome_message",
    status: "PENDING",
    category: "MARKETING",
    language: "en_US",
    components: [
      { type: "BODY" as const, text: "Welcome to our store, {{1}}! Check out our latest deals." },
    ],
  },
  {
    id: "3",
    name: "otp_verification",
    status: "APPROVED",
    category: "AUTHENTICATION",
    language: "en_US",
    components: [
      { type: "BODY" as const, text: "Your verification code is {{1}}. It expires in 5 minutes." },
    ],
  },
  {
    id: "4",
    name: "abandoned_cart",
    status: "REJECTED",
    category: "MARKETING",
    language: "ko",
    components: [
      { type: "BODY" as const, text: "{{1}}님, 장바구니에 상품이 남아있어요! 지금 결제하세요." },
    ],
  },
  {
    id: "5",
    name: "shipping_update",
    status: "DISABLED",
    category: "UTILITY",
    language: "en_US",
    components: [
      { type: "BODY" as const, text: "Your package {{1}} is out for delivery. Expected by {{2}}." },
    ],
  },
];

export const Default: Story = {
  render: () => (
    <div className="wa-wallpaper min-h-screen p-6" style={bg}>
      <TemplateList
        templates={sampleTemplates}
        onDelete={(name) => alert(`Delete: ${name}`)}
        onSelectTemplate={(t) => alert(`Selected: ${t.name}`)}
      />
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="wa-wallpaper min-h-screen p-6" style={bg}>
      <TemplateList templates={[]} loading />
    </div>
  ),
};

export const Empty: Story = {
  render: () => (
    <div className="wa-wallpaper min-h-screen p-6" style={bg}>
      <TemplateList
        templates={[]}
        onCreateNew={() => alert("Create new")}
      />
    </div>
  ),
};
