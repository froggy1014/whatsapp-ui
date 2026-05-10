import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import React from "react";
import { TypingIndicator } from "@/components/ui/whatsapp/typing-indicator";
import { ChatBubble } from "@/components/ui/whatsapp/chat-bubble";

const meta: Meta<typeof TypingIndicator> = {
  title: "WhatsApp/TypingIndicator",
  component: TypingIndicator,
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof TypingIndicator>;

export const Default: Story = {};

export const InContext: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div className="wa-wallpaper flex flex-col px-4 py-4" style={{ background: "var(--wa-conversation-bg, #f5f0e8)" }}>
      <ChatBubble variant="outgoing" timestamp="10:29" status="read" showTail>See you there!</ChatBubble>
      <TypingIndicator />
    </div>
  ),
};
