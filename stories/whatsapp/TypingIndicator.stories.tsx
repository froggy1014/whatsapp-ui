import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TypingIndicator } from "@/components/ui/whatsapp/typing-indicator";

const meta: Meta<typeof TypingIndicator> = {
  title: "WhatsApp/TypingIndicator",
  component: TypingIndicator,
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof TypingIndicator>;

export const Default: Story = {};

export const WithSender: Story = {
  args: { sender: "Alice", senderColor: "#FF6B6B" },
};

export const InContext: Story = {
  render: () => (
    <div className="flex flex-col gap-2 p-4" style={{ background: "var(--wa-conversation-bg, #f5f0e8)" }}>
      <div className="flex justify-end">
        <div className="rounded-lg bg-[var(--wa-bubble-outgoing)] px-3 py-2 text-sm">
          See you there!
        </div>
      </div>
      <TypingIndicator />
    </div>
  ),
};
