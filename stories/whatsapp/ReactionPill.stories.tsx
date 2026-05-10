import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import React from "react";
import { ReactionPill } from "@/components/ui/whatsapp/reaction-pill";
import { ChatBubble } from "@/components/ui/whatsapp/chat-bubble";

const meta: Meta<typeof ReactionPill> = {
  title: "WhatsApp/ReactionPill",
  component: ReactionPill,
  parameters: { layout: "padded" },
  args: { emoji: "😊" },
};
export default meta;
type Story = StoryObj<typeof ReactionPill>;

export const Default: Story = {};

export const Reacted: Story = { args: { reacted: true } };

/** 1:1 chat — no count, sits on bubble corner */
export const DirectChat: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div className="wa-wallpaper p-6" style={{ background: "var(--wa-conversation-bg, #f5f0e8)" }}>
      <div className="relative mb-5 inline-block">
        <ChatBubble variant="incoming" timestamp="10:29" showTail>
          See you there! 🙌
        </ChatBubble>
        <div className="absolute -bottom-[10px] left-[12px] flex gap-1">
          <ReactionPill emoji="😊" reacted />
          <ReactionPill emoji="👍" />
        </div>
      </div>
    </div>
  ),
};

/** Group chat — single pill with all emojis + total count */
export const GroupChat: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div className="wa-wallpaper p-6" style={{ background: "var(--wa-conversation-bg, #f5f0e8)" }}>
      <ChatBubble
        variant="incoming"
        timestamp="09:32"
        showTail
        reactions={[
          { emoji: "❤️", count: 5 },
          { emoji: "👍", count: 7 },
          { emoji: "🙏", count: 2 },
        ]}
      >
        Let me know if you are still on for dinner on Saturday
      </ChatBubble>
    </div>
  ),
};

/** Outgoing bubble */
export const OutgoingBubble: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div className="wa-wallpaper p-6" style={{ background: "var(--wa-conversation-bg, #f5f0e8)" }}>
      <div className="relative mb-5">
        <ChatBubble variant="outgoing" timestamp="10:29" status="read" showTail>
          That sounds amazing! 🔥
        </ChatBubble>
        <div className="absolute -bottom-[10px] right-[12px] flex gap-1">
          <ReactionPill emoji="🔥" reacted />
        </div>
      </div>
    </div>
  ),
};
