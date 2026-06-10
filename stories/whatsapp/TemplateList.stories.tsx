import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import React from "react";
import { TemplateList } from "@/components/ui/whatsapp/template-list";

const meta: Meta = {
  title: "WhatsApp/TemplateList",
  parameters: { layout: "fullscreen", backgrounds: { disable: true } },
};
export default meta;
type Story = StoryObj;

const sampleTemplates = [
  {
    id: "1",
    name: "account_creation_confirmation_3",
    status: "APPROVED",
    category: "UTILITY",
    language: "en_US",
    components: [
      { type: "HEADER" as const, text: "Finalize account set-up" },
      {
        type: "BODY" as const,
        text: "Hi {{text}},\n\nYour new account has been created successfully.\n\nPlease verify {{text}} to complete your profile.",
      },
      {
        type: "BUTTONS" as const,
        buttons: [{ type: "URL", text: "Verify account", url: "https://example.com" }],
      },
    ],
  },
  {
    id: "2",
    name: "address_update",
    status: "APPROVED",
    category: "UTILITY",
    language: "en_US",
    components: [
      { type: "HEADER" as const, text: "Address update" },
      {
        type: "BODY" as const,
        text: "Hi {{text}}, your delivery address has been successfully updated to {{text}}. Contact {{text}} for any inquiries.",
      },
    ],
  },
  {
    id: "3",
    name: "appointment_cancellation_1",
    status: "APPROVED",
    category: "UTILITY",
    language: "en_US",
    components: [
      { type: "HEADER" as const, text: "Your appointment was canceled" },
      {
        type: "BODY" as const,
        text: "Hello {{text}},\n\nYour upcoming appointment with {{business name}} on {{date}} at {{text}} has been canceled.\n\nLet us know if you have any questions or need to reschedule.",
      },
      {
        type: "BUTTONS" as const,
        buttons: [{ type: "URL", text: "View details", url: "https://example.com" }],
      },
    ],
  },
  {
    id: "4",
    name: "appointment_cancelled",
    status: "APPROVED",
    category: "UTILITY",
    language: "en_US",
    components: [
      { type: "HEADER" as const, text: "Appointment cancelled" },
      {
        type: "BODY" as const,
        text: "Hi {{text}},\nYour appointment on {{text}} has been cancelled. We hope to see you another time.",
      },
    ],
  },
  {
    id: "5",
    name: "appointment_confirmation_1",
    status: "APPROVED",
    category: "UTILITY",
    language: "en_US",
    components: [
      { type: "HEADER" as const, text: "Your appointment is booked" },
      {
        type: "BODY" as const,
        text: "Hello {{text}},\n\nThank you for booking with {{business name}}.\n\nYour appointment for {{text}} on {{date}} at {{text}} is confirmed.",
      },
      {
        type: "BUTTONS" as const,
        buttons: [{ type: "URL", text: "View details", url: "https://example.com" }],
      },
    ],
  },
  {
    id: "6",
    name: "appointment_confirmed",
    status: "APPROVED",
    category: "UTILITY",
    language: "en_US",
    components: [
      { type: "HEADER" as const, text: "Appointment confirmed" },
      {
        type: "BODY" as const,
        text: "Hi {{text}},\nYour appointment is scheduled for {{text}}.\n\nService: {{text}}\nConfirmation number: {{text}}\n\nWe're looking forward to your visit.",
      },
    ],
  },
];

export const Default: Story = {
  render: () => (
    <div className="p-6">
      <p
        className="mb-4 text-sm"
        style={{ color: "var(--wa-text-secondary)" }}
      >
        Showing {sampleTemplates.length} of {sampleTemplates.length} results
      </p>
      <TemplateList
        templates={sampleTemplates}
        onSelectTemplate={(t) => alert(`Selected: ${t.name}`)}
      />
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="p-6">
      <TemplateList templates={[]} loading />
    </div>
  ),
};

export const Empty: Story = {
  render: () => (
    <div className="p-6">
      <TemplateList
        templates={[]}
        onCreateNew={() => alert("Create new")}
      />
    </div>
  ),
};
