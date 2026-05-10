import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import React from "react";
import { DateSeparator } from "@/components/ui/whatsapp/date-separator";
import { ChatBubble } from "@/components/ui/whatsapp/chat-bubble";

const meta: Meta<typeof DateSeparator> = {
  title: "WhatsApp/DateSeparator",
  component: DateSeparator,
  parameters: { layout: "padded" },
  args: { label: "Today" },
};
export default meta;
type Story = StoryObj<typeof DateSeparator>;

export const Default: Story = {};

export const InContext: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div className="wa-wallpaper flex flex-col px-4 py-4" style={{ background: "var(--wa-conversation-bg, #f5f0e8)" }}>
      <DateSeparator label="Yesterday" />
      <ChatBubble variant="incoming" timestamp="23:55" showTail>Good night!</ChatBubble>
      <DateSeparator label="Today" />
      <ChatBubble variant="outgoing" timestamp="09:01" status="read" showTail>Good morning ☀️</ChatBubble>
    </div>
  ),
};
