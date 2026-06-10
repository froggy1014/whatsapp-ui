import type { Meta, StoryObj } from "@storybook/nextjs-vite";
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

/** 1:1 — individual pills, no count */
export const DirectChat: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div className="p-6">
      <ChatBubble
        variant="incoming"
        timestamp="10:29"
        showTail
        reactions={[{ emoji: "😊", reacted: true }, { emoji: "👍" }]}
      >
        See you there! 🙌
      </ChatBubble>
    </div>
  ),
};

/** Group — overlapping emojis + total count */
export const GroupChat: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div className="p-6">
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

/** Outgoing */
export const OutgoingBubble: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div className="p-6">
      <ChatBubble
        variant="outgoing"
        timestamp="10:29"
        status="read"
        showTail
        reactions={[{ emoji: "🔥", reacted: true }]}
      >
        That sounds amazing!
      </ChatBubble>
    </div>
  ),
};
