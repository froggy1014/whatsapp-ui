import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import React from "react";
import { ReactionPill } from "@/components/ui/whatsapp/reaction-pill";
import { ChatBubble } from "@/components/ui/whatsapp/chat-bubble";

const meta: Meta<typeof ReactionPill> = {
  title: "WhatsApp/ReactionPill",
  component: ReactionPill,
  parameters: { layout: "padded" },
  args: { emoji: "😊", count: 1 },
};
export default meta;
type Story = StoryObj<typeof ReactionPill>;

export const Default: Story = {};

export const Reacted: Story = { args: { reacted: true, count: 3 } };

export const OnBubble: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div className="wa-wallpaper p-4" style={{ background: "var(--wa-conversation-bg, #f5f0e8)" }}>
      <div className="relative mb-4 inline-flex flex-col items-end">
        <ChatBubble variant="incoming" timestamp="10:29" showTail>
          See you there! 🙌
        </ChatBubble>
        <div className="-mt-1 flex gap-1 pr-2">
          <ReactionPill emoji="😊" count={1} reacted />
          <ReactionPill emoji="👍" count={2} />
          <ReactionPill emoji="❤️" count={5} />
        </div>
      </div>
    </div>
  ),
};
