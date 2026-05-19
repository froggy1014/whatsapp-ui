import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ChatMenu } from "@/components/ui/whatsapp/chat-menu";
import { Users, Star, Settings, LogOut, Archive, Bell } from "lucide-react";

const meta: Meta<typeof ChatMenu> = {
  title: "WhatsApp/ChatMenu",
  component: ChatMenu,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof ChatMenu>;

export const Default: Story = {
  args: {
    items: [
      { label: "New group", icon: <Users size={18} />, onClick: () => {} },
      { label: "Starred messages", icon: <Star size={18} />, onClick: () => {} },
      { label: "Settings", icon: <Settings size={18} />, onClick: () => {} },
      { label: "Log out", danger: true, icon: <LogOut size={18} />, onClick: () => {} },
    ],
  },
};

export const WithDisabledItem: Story = {
  args: {
    items: [
      { label: "Archive chat", icon: <Archive size={18} />, onClick: () => {} },
      { label: "Mute notifications", icon: <Bell size={18} />, onClick: () => {} },
      { label: "Delete chat", danger: true, disabled: true, onClick: () => {} },
    ],
  },
};

export const SimpleMenu: Story = {
  args: {
    items: [
      { label: "Contact info", onClick: () => {} },
      { label: "Select messages", onClick: () => {} },
      { label: "Close chat", onClick: () => {} },
    ],
  },
};
