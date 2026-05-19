import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ReactionsDisplay } from "@/components/ui/whatsapp/reaction";

const meta: Meta<typeof ReactionsDisplay> = {
  title: "WhatsApp/Reaction",
  component: ReactionsDisplay,
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof ReactionsDisplay>;

export const SingleReaction: Story = {
  args: {
    reactions: [{ emoji: "😊", count: 1, reacted: false }],
  },
};

export const SingleReacted: Story = {
  args: {
    reactions: [{ emoji: "❤️", count: 3, reacted: true }],
  },
};

export const MultipleReactions: Story = {
  args: {
    reactions: [
      { emoji: "❤️", count: 5 },
      { emoji: "👍", count: 7 },
      { emoji: "🙏", count: 2 },
    ],
  },
};

export const TwoReactions: Story = {
  args: {
    reactions: [
      { emoji: "🔥", count: 3 },
      { emoji: "😂", count: 1 },
    ],
  },
};
