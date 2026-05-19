import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ActionButton } from "@/components/ui/whatsapp/action-button";
import { ExternalLink, Plus, MessageCircle } from "lucide-react";

const meta: Meta<typeof ActionButton> = {
  title: "WhatsApp/ActionButton",
  component: ActionButton,
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof ActionButton>;

export const Default: Story = {
  args: { children: "Open in WhatsApp" },
};

export const WithIcon: Story = {
  args: {
    icon: <ExternalLink size={16} />,
    children: "Open in WhatsApp",
  },
};

export const PlusIcon: Story = {
  args: {
    icon: <Plus size={16} />,
    children: "Create Channel",
  },
};

export const AsLink: Story = {
  args: {
    icon: <MessageCircle size={16} />,
    children: "Send Message",
    href: "#",
  },
};
