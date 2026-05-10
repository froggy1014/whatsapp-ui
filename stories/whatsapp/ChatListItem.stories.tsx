import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import React from "react";
import { ChatListItem } from "@/components/ui/whatsapp/chat-list-item";

const meta: Meta<typeof ChatListItem> = {
  title: "WhatsApp/ChatListItem",
  component: ChatListItem,
  parameters: { layout: "fullscreen", backgrounds: { disable: true } },
  args: { name: "Sara", lastMessage: "Thanks for the heads up 👍", timestamp: "10:29" },
};
export default meta;
type Story = StoryObj<typeof ChatListItem>;

export const Default: Story = {};

export const WithUnread: Story = {
  args: { unreadCount: 3, lastMessage: "Are you free this weekend?", isOnline: true },
};

export const List: Story = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <div style={{ background: "#fff", width: 360 }}>
      <ChatListItem name="Sara" lastMessage="Thanks for the heads up 👍" timestamp="10:29" isSelected isOnline />
      <ChatListItem name="James" lastMessage="Are you free this weekend?" timestamp="Yesterday" unreadCount={3} />
      <ChatListItem name="Alice Chen" lastMessage="📷 Photo" timestamp="Mon" isTyping />
      <ChatListItem name="Work Group" lastMessage="You: Meeting notes attached" timestamp="Sun" isMuted isPinned />
      <ChatListItem name="Mom" lastMessage="밥은 먹었어? ❤️" timestamp="Sat" />
    </div>
  ),
};
