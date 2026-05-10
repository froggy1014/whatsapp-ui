"use client";

import { ChatBubble } from "@/components/ui/whatsapp/chat-bubble";
import { ChatHeader } from "@/components/ui/whatsapp/chat-header";
import { ChatListItem } from "@/components/ui/whatsapp/chat-list-item";
import { DateSeparator } from "@/components/ui/whatsapp/date-separator";
import { FileAttachmentBubble } from "@/components/ui/whatsapp/file-attachment-bubble";
import { ImageBubble } from "@/components/ui/whatsapp/image-bubble";
import { MessageInput } from "@/components/ui/whatsapp/message-input";
import { ReactionPill } from "@/components/ui/whatsapp/reaction-pill";
import { TemplateBubble } from "@/components/ui/whatsapp/template-bubble";
import { TypingIndicator } from "@/components/ui/whatsapp/typing-indicator";
import { VoiceMessageBubble } from "@/components/ui/whatsapp/voice-message-bubble";
import { CarouselTemplate } from "@/components/ui/whatsapp/carousel-template";

const IMG = "https://picsum.photos/seed/wa/400/300";

function Card({
  title,
  children,
  bg = "panel",
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  bg?: "panel" | "chat";
  className?: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-[#e9edef] dark:border-[rgba(233,237,239,0.1)]">
      <div
        className={`relative overflow-hidden ${className}`}
        style={{
          background:
            bg === "chat"
              ? "var(--wa-conversation-bg, #f5f0e8)"
              : "var(--wa-panel-bg, #ffffff)",
        }}
      >
        {children}
      </div>
      <div className="border-t border-[#e9edef] dark:border-[rgba(233,237,239,0.1)] bg-[#f7f8fa] dark:bg-[rgba(233,237,239,0.04)] px-3 py-2">
        <span className="text-[12px] font-medium text-[#54656f] dark:text-[#8696a0]">
          {title}
        </span>
      </div>
    </div>
  );
}

export function Showcase() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

      {/* Chat Bubbles */}
      <Card title="ChatBubble" bg="chat" className="p-3 flex flex-col">
        <ChatBubble variant="incoming" timestamp="10:20" showTail>
          Hey! Are you coming to the meeting? 😊
        </ChatBubble>
        <ChatBubble variant="outgoing" timestamp="10:21" status="read" showTail={false}>
          Yes, be there in 10!
        </ChatBubble>
        <ChatBubble variant="outgoing" timestamp="10:21" status="delivered" showTail>
          Can you save me a seat? 🙏
        </ChatBubble>
      </Card>

      {/* Chat Header */}
      <Card title="ChatHeader" className="flex flex-col justify-center">
        <ChatHeader
          name="Alice Johnson"
          isOnline
          onVideoCall={() => {}}
          onVoiceCall={() => {}}
          onMenu={() => {}}
        />
      </Card>

      {/* Chat List */}
      <Card title="ChatListItem" className="flex flex-col py-1">
        <ChatListItem name="Alice" lastMessage="See you there! 👋" timestamp="10:32" isSelected isOnline lastMessageStatus="read" />
        <ChatListItem name="Team Korea" lastMessage="Let's sync tomorrow" timestamp="09:14" unreadCount={5} />
        <ChatListItem name="Bob" lastMessage="Thanks for the update" timestamp="Yesterday" isMuted lastMessageStatus="delivered" />
      </Card>

      {/* Image Bubble */}
      <Card title="ImageBubble" bg="chat" className="p-3">
        <ImageBubble
          variant="outgoing"
          images={[IMG, "https://picsum.photos/seed/wa2/300/400"]}
          caption="Check this out! 🔥"
          timestamp="10:26"
          status="read"
          showTail
        />
      </Card>

      {/* Voice Message */}
      <Card title="VoiceMessageBubble" bg="chat" className="p-3 flex flex-col">
        <VoiceMessageBubble variant="incoming" duration="0:32" timestamp="10:30" showTail />
        <VoiceMessageBubble variant="outgoing" duration="1:04" timestamp="10:31" status="read" isPlaying progress={55} showTail />
      </Card>

      {/* File Attachment */}
      <Card title="FileAttachmentBubble" bg="chat" className="p-3 flex flex-col">
        <FileAttachmentBubble variant="outgoing" fileName="Project Brief.pdf" fileSize="1.1 MB" fileType="pdf" timestamp="10:15" status="read" downloadStatus="done" showTail />
        <FileAttachmentBubble variant="incoming" fileName="Assets.zip" fileSize="8.4 MB" fileType="zip" timestamp="10:16" downloadStatus="idle" showTail />
      </Card>

      {/* Typing + Date Separator */}
      <Card title="TypingIndicator + DateSeparator" bg="chat" className="p-3 flex flex-col">
        <DateSeparator label="Today" />
        <ChatBubble variant="outgoing" timestamp="10:29" status="read" showTail>
          See you there!
        </ChatBubble>
        <TypingIndicator />
      </Card>

      {/* Reaction Pill */}
      <Card title="ReactionPill" bg="chat" className="p-4">
        <div className="relative inline-flex flex-col items-end">
          <ChatBubble variant="incoming" timestamp="10:29" showTail>
            That's amazing! 🎉
          </ChatBubble>
          <div className="-mt-1 flex gap-1 pr-2">
            <ReactionPill emoji="😊" count={3} reacted />
            <ReactionPill emoji="👍" count={7} />
            <ReactionPill emoji="❤️" count={12} />
          </div>
        </div>
      </Card>

      {/* Message Input */}
      <Card title="MessageInput" className="flex flex-col justify-end">
        <MessageInput placeholder="Type a message" />
      </Card>

      {/* Template Bubble */}
      <Card title="TemplateBubble" bg="chat" className="p-3">
        <TemplateBubble
          header={{ type: "text", text: "Order Delivered ✓" }}
          body="Hi {{name}}, your order has been delivered successfully. Thank you for shopping with us!"
          footer="Reply STOP to unsubscribe"
          buttons={[
            { type: "url", label: "Track order" },
            { type: "quick_reply", label: "Rate experience" },
          ]}
          timestamp="2:36 PM"
        />
      </Card>

      {/* Carousel */}
      <Card title="CarouselTemplate" bg="chat" className="p-3" >
        <CarouselTemplate
          body="Summer collection is here! 🌞"
          timestamp="11:59"
          cards={[
            { body: "Fresh lemonade — perfect for hot days.", buttons: [{ type: "url", label: "Order now" }] },
            { body: "Iced matcha — your daily ritual.", buttons: [{ type: "url", label: "Order now" }] },
            { body: "Cold brew — smooth & rich.", buttons: [{ type: "url", label: "Order now" }] },
          ]}
        />
      </Card>

      {/* Group Chat */}
      <Card title="Group Chat" bg="chat" className="p-3 flex flex-col">
        <ChatBubble variant="incoming" timestamp="10:22" showTail isGroupChat sender="Alice" senderColor="#00a884">
          Japan looks amazing! 🗼
        </ChatBubble>
        <ChatBubble variant="incoming" timestamp="10:23" showTail isGroupChat sender="Bob" senderColor="#7f66ff">
          Can't wait to see the photos!
        </ChatBubble>
        <ChatBubble variant="outgoing" timestamp="10:24" status="read" showTail>
          Will share them soon 😄
        </ChatBubble>
      </Card>

    </div>
  );
}
