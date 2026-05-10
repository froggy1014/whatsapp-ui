import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MessageInput } from "@/components/ui/whatsapp/message-input";

const meta: Meta<typeof MessageInput> = {
  title: "WhatsApp/MessageInput",
  component: MessageInput,
  parameters: { layout: "fullscreen", backgrounds: { disable: true } },
};
export default meta;
type Story = StoryObj<typeof MessageInput>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};
