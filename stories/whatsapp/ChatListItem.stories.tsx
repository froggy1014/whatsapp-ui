import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import React from "react";
import { ChatListItem } from "@/components/ui/whatsapp/chat-list-item";

const meta: Meta<typeof ChatListItem> = {
  title: "WhatsApp/ChatListItem",
  component: ChatListItem,
  args: { name: "Sara", lastMessage: "Thanks for the heads up 👍", timestamp: "10:29" },
  decorators: [
    (Story) => (
      <div style={{ background: "#fff", width: 360, borderRadius: 8, overflow: "hidden" }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof ChatListItem>;

export const Default: Story = {};

export const WithUnread: Story = {
  args: { unreadCount: 3, lastMessage: "Are you free this weekend?", isOnline: true },
};

export const List: Story = {
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <div style={{ background: "#fff", width: 360 }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <>
      <ChatListItem name="Sara" lastMessage="Thanks for the heads up 👍" timestamp="10:29" isSelected isOnline />
      <ChatListItem name="James" lastMessage="Are you free this weekend?" timestamp="Yesterday" unreadCount={3} />
      <ChatListItem name="Alice Chen" lastMessage="📷 Photo" timestamp="Mon" isTyping />
      <ChatListItem name="Work Group" lastMessage="You: Meeting notes attached" timestamp="Sun" isMuted isPinned />
      <ChatListItem name="Mom" lastMessage="밥은 먹었어? ❤️" timestamp="Sat" />
    </>
  ),
};
