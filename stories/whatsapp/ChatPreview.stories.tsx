import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import React from "react";
import { ChatBubble } from "@/components/ui/whatsapp/chat-bubble";
import { ChatHeader } from "@/components/ui/whatsapp/chat-header";
import { ChatListItem } from "@/components/ui/whatsapp/chat-list-item";
import { DateSeparator } from "@/components/ui/whatsapp/date-separator";
import { MessageInput } from "@/components/ui/whatsapp/message-input";
import { TypingIndicator } from "@/components/ui/whatsapp/typing-indicator";

const meta: Meta = {
  title: "WhatsApp/Preview",
  parameters: {
    layout: "fullscreen",
    backgrounds: { disable: true },
  },
};
export default meta;

type Story = StoryObj;

const CHAT_LIST = [
  { name: "Alice", lastMessage: "See you there! 👋", timestamp: "10:32", unreadCount: 2, isOnline: true, isSelected: true },
  { name: "Team Korea", lastMessage: "Let's sync tomorrow", timestamp: "09:14", unreadCount: 5, isTyping: false },
  { name: "Bob", lastMessage: "Thanks for the update", timestamp: "Yesterday", isMuted: true },
  { name: "Design Team", lastMessage: "New mockups are ready", timestamp: "Yesterday", isPinned: true },
  { name: "Mom", lastMessage: "밥은 먹었어?", timestamp: "Mon" },
  { name: "David", lastMessage: "Sounds good!", timestamp: "Mon" },
  { name: "Sarah", lastMessage: "haha 😂", timestamp: "Sun" },
];

function Sidebar() {
  return (
    <div className="flex h-full w-[360px] shrink-0 flex-col border-r border-wa-border bg-wa-panel-bg">
      {/* Sidebar header */}
      <div className="flex h-[59px] shrink-0 items-center justify-between bg-wa-panel-header-bg px-4">
        <div className="h-[40px] w-[40px] overflow-hidden rounded-full bg-wa-gray-300">
          <svg viewBox="0 0 212 212" className="h-full w-full text-wa-gray-100">
            <path d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z" className="fill-wa-gray-300" />
          </svg>
        </div>
        <div className="flex items-center gap-[10px]">
          <button className="rounded-full p-2 text-wa-icon-default hover:bg-wa-hover" aria-label="Communities">
            <svg viewBox="0 0 24 24" height="24" width="24"><path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5zm0 4a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm0 14c-2.9 0-5.5-1.4-7.1-3.6.4-2.2 5-3.4 7.1-3.4s6.7 1.2 7.1 3.4C17.5 18.1 14.9 19.5 12 19.5z" fill="currentColor" /></svg>
          </button>
          <button className="rounded-full p-2 text-wa-icon-default hover:bg-wa-hover" aria-label="New chat">
            <svg viewBox="0 0 24 24" height="24" width="24"><path d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z" fill="currentColor" /></svg>
          </button>
          <button className="rounded-full p-2 text-wa-icon-default hover:bg-wa-hover" aria-label="Menu">
            <svg viewBox="0 0 24 24" height="24" width="24"><path d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z" fill="currentColor" /></svg>
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="bg-wa-panel-bg px-3 py-2">
        <div className="flex items-center gap-2 rounded-lg bg-wa-compose-bg px-3 py-[7px]">
          <svg viewBox="0 0 24 24" height="18" width="18" className="shrink-0 text-wa-icon-lighter">
            <path d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2z" fill="currentColor" />
          </svg>
          <span className="font-wa text-[15px] text-wa-text-secondary">Search or start new chat</span>
        </div>
      </div>

      {/* Chat list */}
      <div className="flex-1 overflow-y-auto">
        {CHAT_LIST.map((chat) => (
          <ChatListItem key={chat.name} {...chat} />
        ))}
      </div>
    </div>
  );
}

function ChatPanel({ isTyping = false }: { isTyping?: boolean }) {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <ChatHeader
        name="Alice"
        status={isTyping ? undefined : "last seen today at 10:32"}
        isOnline={isTyping}
        onVideoCall={() => {}}
        onVoiceCall={() => {}}
        onSearch={() => {}}
        onMenu={() => {}}
      />

      {/* Messages */}
      <div
        className="wa-wallpaper flex-1 overflow-y-auto px-16 py-4"
        style={{ background: "var(--wa-conversation-bg, #f5f0e8)" }}
      >
        <DateSeparator label="Today" />

        <ChatBubble variant="incoming" timestamp="10:20" showTail>
          Hey! Are you coming to the meeting later? 😊
        </ChatBubble>

        <ChatBubble variant="outgoing" timestamp="10:21" status="read" showTail>
          Yes! Just finishing up some stuff
        </ChatBubble>

        <ChatBubble variant="outgoing" timestamp="10:21" status="read" showTail={false}>
          Should be there in 10 mins
        </ChatBubble>

        <ChatBubble variant="incoming" timestamp="10:22" showTail>
          Perfect, I'll save you a seat 🙌
        </ChatBubble>

        <ChatBubble variant="outgoing" timestamp="10:28" status="read" showTail>
          Thanks!! Also did you get a chance to review the doc I sent?
        </ChatBubble>

        <ChatBubble variant="incoming" timestamp="10:30" showTail={false}>
          Yeah I looked at it briefly
        </ChatBubble>

        <ChatBubble variant="incoming" timestamp="10:30" showTail>
          Some really good points in there. Let's discuss at the meeting!
        </ChatBubble>

        <ChatBubble variant="outgoing" timestamp="10:32" status="delivered" showTail>
          Sounds good 👍
        </ChatBubble>

        {isTyping && <TypingIndicator />}
      </div>

      <MessageInput />
    </div>
  );
}

export const Desktop: Story = {
  render: () => (
    <div className="flex h-screen bg-wa-bg">
      <Sidebar />
      <ChatPanel />
    </div>
  ),
};

export const DesktopWithTyping: Story = {
  render: () => (
    <div className="flex h-screen bg-wa-bg">
      <Sidebar />
      <ChatPanel isTyping />
    </div>
  ),
};

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
  render: () => (
    <div className="flex h-screen flex-col bg-wa-conversation-bg">
      <ChatHeader
        name="Alice"
        status="last seen today at 10:32"
        onBack={() => {}}
        onVideoCall={() => {}}
        onVoiceCall={() => {}}
        onMenu={() => {}}
      />
      <div
        className="wa-wallpaper flex-1 overflow-y-auto px-4 py-4"
        style={{ background: "var(--wa-conversation-bg, #f5f0e8)" }}
      >
        <DateSeparator label="Today" />
        <ChatBubble variant="incoming" timestamp="10:20" showTail>
          Hey! Are you coming to the meeting later? 😊
        </ChatBubble>
        <ChatBubble variant="outgoing" timestamp="10:21" status="read" showTail>
          Yes, on my way!
        </ChatBubble>
        <ChatBubble variant="incoming" timestamp="10:22" showTail>
          Perfect, see you soon 👋
        </ChatBubble>
      </div>
      <MessageInput />
    </div>
  ),
};
