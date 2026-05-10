import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import React from "react";
import { VoiceMessageBubble } from "@/components/ui/whatsapp/voice-message-bubble";

const meta: Meta<typeof VoiceMessageBubble> = {
  title: "WhatsApp/VoiceMessageBubble",
  component: VoiceMessageBubble,
  parameters: { layout: "padded" },
  args: { duration: "0:32" },
};
export default meta;
type Story = StoryObj<typeof VoiceMessageBubble>;

export const Incoming: Story = {
  args: { variant: "incoming", timestamp: "10:30", showTail: true },
};

export const Playing: Story = {
  args: { variant: "incoming", timestamp: "10:30", isPlaying: true, progress: 40, showTail: true },
};

export const BothVariants: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div className="flex flex-col gap-2 p-4" style={{ background: "var(--wa-conversation-bg, #f5f0e8)" }}>
      <VoiceMessageBubble variant="incoming" duration="0:32" timestamp="10:30" showTail />
      <VoiceMessageBubble variant="outgoing" duration="1:04" timestamp="10:31" status="read" isPlaying progress={55} showTail />
    </div>
  ),
};
