import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import React from "react";
import { CallPermissionBubble } from "@/components/ui/whatsapp/call-permission";
import { ChatBubble } from "@/components/ui/whatsapp/chat-bubble";

const meta: Meta<typeof CallPermissionBubble> = {
  title: "WhatsApp/Templates/CallPermission",
  component: CallPermissionBubble,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof CallPermissionBubble>;

export const Default: Story = {
  render: () => (
    <div
      className="min-h-screen px-4 py-6 flex flex-col gap-2"
    >
      <ChatBubble variant="incoming" timestamp="3:00 PM" showTail>
        Would you like to receive a call from one of our representatives?
      </ChatBubble>
      <CallPermissionBubble bizName="{BIZ_NAME}" timestamp="3:00 PM" />
    </div>
  ),
};
