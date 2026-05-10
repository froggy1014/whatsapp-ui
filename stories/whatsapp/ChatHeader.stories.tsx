import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ChatHeader } from "@/components/ui/whatsapp/chat-header";

const meta: Meta<typeof ChatHeader> = {
  title: "WhatsApp/ChatHeader",
  component: ChatHeader,
  parameters: { layout: "fullscreen", backgrounds: { disable: true } },
  args: { name: "Martha Craig" },
};
export default meta;
type Story = StoryObj<typeof ChatHeader>;

export const Online: Story = {
  args: { isOnline: true, onVideoCall: () => {}, onVoiceCall: () => {}, onSearch: () => {}, onMenu: () => {} },
};

export const WithStatus: Story = {
  args: { status: "last seen today at 10:29", onVideoCall: () => {}, onVoiceCall: () => {}, onMenu: () => {} },
};

export const Mobile: Story = {
  args: { isOnline: true, onBack: () => {}, onVoiceCall: () => {}, onMenu: () => {} },
};
