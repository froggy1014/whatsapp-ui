import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MessageInput } from "@/components/ui/whatsapp/message-input";

const meta: Meta<typeof MessageInput> = {
  title: "WhatsApp/MessageInput",
  component: MessageInput,
  parameters: { layout: "fullscreen", backgrounds: { default: "white" } },
};
export default meta;
type Story = StoryObj<typeof MessageInput>;

export const Empty: Story = {};

export const WithHandlers: Story = {
  args: {
    onSubmit: (v) => alert(`Send: ${v}`),
    placeholder: "Type a message",
  },
};

export const Disabled: Story = {
  args: { disabled: true },
};
