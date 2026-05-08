import type { Meta, StoryObj } from "@storybook/nextjs-vite";
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

export const Sending: Story = {
  args: { variant: "outgoing", timestamp: "10:26", status: "sending", showTail: true },
};

export const Delivered: Story = {
  args: { variant: "outgoing", timestamp: "10:26", status: "delivered", showTail: true },
};

export const GroupIncoming: Story = {
  args: {
    variant: "incoming",
    timestamp: "10:24",
    showTail: true,
    isGroupChat: true,
    sender: "Alice",
    senderColor: "#FF6B6B",
    children: "Japan looks amazing! Can't wait to see your photos.",
  },
};

export const StackedMessages: Story = {
  render: () => (
    <div className="flex flex-col gap-[2px] p-4" style={{ background: "var(--wa-conversation-bg, #f5f0e8)" }}>
      <ChatBubble variant="outgoing" timestamp="10:26" status="read" showTail={false}>Yes, I'll be there!</ChatBubble>
      <ChatBubble variant="outgoing" timestamp="10:26" status="read" showTail={false}>Just finishing up some work first.</ChatBubble>
      <ChatBubble variant="outgoing" timestamp="10:27" status="delivered" showTail={true}>Thanks for the heads up 👍</ChatBubble>
    </div>
  ),
};

export const LongMessage: Story = {
  args: {
    variant: "incoming",
    timestamp: "11:40",
    showTail: true,
    children: "Do you know what time is it? I've been waiting for so long and I'm starting to wonder if the meeting was rescheduled without anyone telling me.",
  },
};
