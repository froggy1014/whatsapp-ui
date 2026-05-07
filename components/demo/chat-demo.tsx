"use client";

import { useState } from "react";
import { ChatBubble } from "@/components/ui/whatsapp/chat-bubble";
import { ChatHeader } from "@/components/ui/whatsapp/chat-header";
import { ChatListItem } from "@/components/ui/whatsapp/chat-list-item";
import { MessageInput } from "@/components/ui/whatsapp/message-input";

const CONVERSATIONS = [
  {
    id: 1,
    name: "Alice",
    lastMessage: "See you tomorrow! 😊",
    timestamp: "10:30 AM",
    unreadCount: 2,
    isOnline: true,
  },
  {
    id: 2,
    name: "Bob",
    lastMessage: "The meeting is at 3pm",
    timestamp: "9:15 AM",
    unreadCount: 0,
    isOnline: false,
  },
  {
    id: 3,
    name: "Design Team",
    lastMessage: "Alice: Shared a file",
    timestamp: "Yesterday",
    unreadCount: 5,
    isOnline: false,
    isPinned: true,
  },
  {
    id: 4,
    name: "Charlie",
    lastMessage: "Thanks for the help!",
    timestamp: "Yesterday",
    unreadCount: 0,
    isOnline: true,
    isMuted: true,
  },
  {
    id: 5,
    name: "Mom",
    lastMessage: "Call me when you're free",
    timestamp: "Monday",
    unreadCount: 1,
    isOnline: false,
  },
];

interface Message {
  id: number;
  text: string;
  variant: "incoming" | "outgoing";
  timestamp: string;
  status?: "sending" | "sent" | "delivered" | "read";
  showTail?: boolean;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    text: "Hey! How are you?",
    variant: "incoming",
    timestamp: "10:20 AM",
  },
  {
    id: 2,
    text: "I'm doing great, thanks! Just finished the WhatsApp UI components. 🎉",
    variant: "outgoing",
    timestamp: "10:22 AM",
    status: "read",
  },
  {
    id: 3,
    text: "That looks amazing! Can I try it?",
    variant: "incoming",
    timestamp: "10:25 AM",
  },
  {
    id: 4,
    text: "Of course! Just run:",
    variant: "outgoing",
    timestamp: "10:28 AM",
    status: "read",
  },
  {
    id: 5,
    text: "npx shadcn add @whatsapp/chat-bubble",
    variant: "outgoing",
    timestamp: "10:28 AM",
    status: "delivered",
  },
  {
    id: 6,
    text: "See you tomorrow! 😊",
    variant: "incoming",
    timestamp: "10:30 AM",
  },
];

/** Show tail on the last message of each consecutive group from the same sender */
function shouldShowTail(messages: Message[], index: number): boolean {
  const current = messages[index];
  const next = messages[index + 1];
  return !next || next.variant !== current.variant;
}

export function ChatDemo() {
  const [selectedChat, setSelectedChat] = useState(1);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);

  const selectedConversation = CONVERSATIONS.find(
    (c) => c.id === selectedChat
  );

  const handleSend = (text: string) => {
    const now = new Date();
    const timestamp = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        text,
        variant: "outgoing",
        timestamp,
        status: "sent" as const,
      },
    ]);
  };

  return (
    <div className="flex h-[600px]">
      {/* Sidebar */}
      <div className="flex w-[340px] shrink-0 flex-col border-r border-[var(--wa-border)] bg-[var(--wa-panel-bg)]">
        {/* Sidebar header */}
        <div className="flex h-[var(--wa-header-height)] items-center justify-between bg-[var(--wa-panel-header-bg)] px-4">
          <span className="wa-font text-[20px] font-bold text-[var(--wa-text-primary)]">
            Chats
          </span>
        </div>

        {/* Search */}
        <div className="px-2 py-[7px]">
          <div className="flex items-center gap-6 rounded-lg bg-[var(--wa-input-bg)] px-3 py-[5px]">
            <svg
              viewBox="0 0 24 24"
              height="20"
              width="20"
              className="text-[var(--wa-icon-lighter)]"
            >
              <path
                d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2z"
                fill="currentColor"
              />
            </svg>
            <span className="wa-font text-[14px] text-[var(--wa-text-secondary)]">
              Search or start new chat
            </span>
          </div>
        </div>

        {/* Chat list */}
        <div className="flex-1 overflow-y-auto">
          {CONVERSATIONS.map((convo) => (
            <ChatListItem
              key={convo.id}
              name={convo.name}
              lastMessage={convo.lastMessage}
              timestamp={convo.timestamp}
              unreadCount={convo.unreadCount}
              isOnline={convo.isOnline}
              isPinned={convo.isPinned}
              isMuted={convo.isMuted}
              isSelected={convo.id === selectedChat}
              onClick={() => setSelectedChat(convo.id)}
            />
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div className="flex flex-1 flex-col bg-[var(--wa-conversation-bg)]">
        {/* Header */}
        <ChatHeader
          name={selectedConversation?.name || ""}
          isOnline={selectedConversation?.isOnline}
          onVideoCall={() => {}}
          onVoiceCall={() => {}}
          onSearch={() => {}}
          onMenu={() => {}}
        />

        {/* Messages */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col gap-1 py-2 pl-[55px] pr-[12px]">
            {messages.map((msg, idx) => (
              <ChatBubble
                key={msg.id}
                variant={msg.variant}
                timestamp={msg.timestamp}
                status={msg.status}
                showTail={shouldShowTail(messages, idx)}
              >
                {msg.text}
              </ChatBubble>
            ))}
          </div>
        </div>

        {/* Input */}
        <MessageInput onSubmit={handleSend} />
      </div>
    </div>
  );
}
