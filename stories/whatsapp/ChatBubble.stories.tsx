import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import React from "react";
import { ChatBubble } from "@/components/ui/whatsapp/chat-bubble";

const meta: Meta<typeof ChatBubble> = {
  title: "WhatsApp/ChatBubble",
  component: ChatBubble,
  parameters: { layout: "padded" },
  args: { children: "Hey! Are you coming to the meeting later? 😊" },
};
export default meta;
type Story = StoryObj<typeof ChatBubble>;

export const Incoming: Story = {
  args: { variant: "incoming", timestamp: "10:24", showTail: true },
};

export const Outgoing: Story = {
  args: { variant: "outgoing", timestamp: "10:26", status: "read", showTail: true },
};

export const Conversation: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div className="wa-wallpaper flex flex-col px-4 py-4" style={{ background: "var(--wa-conversation-bg, #f5f0e8)" }}>
      <ChatBubble variant="incoming" timestamp="10:20" showTail>Hey! Are you coming to the meeting later? 😊</ChatBubble>
      <ChatBubble variant="outgoing" timestamp="10:21" status="read" showTail={false}>Yes, just finishing up some stuff</ChatBubble>
      <ChatBubble variant="outgoing" timestamp="10:21" status="read" showTail>Should be there in 10 mins 👍</ChatBubble>
      <ChatBubble variant="incoming" timestamp="10:22" showTail={false}>Perfect, I'll save you a seat!</ChatBubble>
      <ChatBubble variant="incoming" timestamp="10:22" showTail isGroupChat sender="Alice" senderColor="#FF6B6B">Also can you grab some coffee on the way?</ChatBubble>
      <ChatBubble variant="outgoing" timestamp="10:23" status="sending" showTail>On it ☕</ChatBubble>
    </div>
  ),
};
