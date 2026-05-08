import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ChatListItem } from "@/components/ui/whatsapp/chat-list-item";

const meta: Meta<typeof ChatListItem> = {
  title: "WhatsApp/ChatListItem",
  component: ChatListItem,
  parameters: { layout: "fullscreen", backgrounds: { default: "white" } },
  args: {
    name: "Sara",
    lastMessage: "Thanks for the heads up 👍",
    timestamp: "10:29",
  },
};
export default meta;
type Story = StoryObj<typeof ChatListItem>;

export const Default: Story = {};

export const Selected: Story = {
  args: { isSelected: true },
};

export const WithUnread: Story = {
  args: { unreadCount: 3, lastMessage: "Are you free this weekend?" },
};

export const Muted: Story = {
  args: { isMuted: true, lastMessage: "You: Meeting notes attached" },
};

export const Typing: Story = {
  args: { isTyping: true },
};

export const ChatList: Story = {
  render: () => (
    <div style={{ background: "#fff", width: 360 }}>
      <ChatListItem name="Sara" lastMessage="Thanks for the heads up 👍" timestamp="10:29" isSelected />
      <ChatListItem name="James" lastMessage="Are you free this weekend?" timestamp="Yesterday" unreadCount={3} />
      <ChatListItem name="Alice Chen" lastMessage="📷 Photo" timestamp="Mon" />
      <ChatListItem name="Work Group" lastMessage="You: Meeting notes attached" timestamp="Sun" isMuted />
      <ChatListItem name="Mom" lastMessage="Call me when you're free ❤️" timestamp="Sat" />
    </div>
  ),
  parameters: { backgrounds: { default: "white" } },
};
