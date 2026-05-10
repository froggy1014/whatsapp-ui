"use client";

import { useEffect, useRef, useState } from "react";
import { ChatBubble } from "@/components/ui/whatsapp/chat-bubble";
import { ChatHeader } from "@/components/ui/whatsapp/chat-header";
import { DateSeparator } from "@/components/ui/whatsapp/date-separator";
import { MessageInput } from "@/components/ui/whatsapp/message-input";
import { ReactionPill } from "@/components/ui/whatsapp/reaction-pill";
import { TypingIndicator } from "@/components/ui/whatsapp/typing-indicator";
import { VoiceMessageBubble } from "@/components/ui/whatsapp/voice-message-bubble";
import { ImageBubble } from "@/components/ui/whatsapp/image-bubble";

interface TextMsg   { id: number; type: "text";    variant: "incoming" | "outgoing"; text: string;  status?: "read" | "delivered"; showTail?: boolean }
interface ImageMsg  { id: number; type: "image";   variant: "incoming" | "outgoing"; src: string;   caption?: string; status?: "read" | "delivered"; showTail?: boolean }
interface VoiceMsg  { id: number; type: "voice";   variant: "incoming" | "outgoing"; duration: string; status?: "read" | "delivered"; showTail?: boolean }
interface ReactMsg  { id: number; type: "reaction"; targetId: number; emoji: string }
type Message = TextMsg | ImageMsg | VoiceMsg | ReactMsg;
type ChatMessage = TextMsg | ImageMsg | VoiceMsg;

interface Step { delay: number; typingFor: number; msg: Message }

const SCRIPT: Step[] = [
  { delay: 600,  typingFor: 1400, msg: { id: 1,  type: "text",     variant: "incoming", text: "Hey! 👋 Are you free this weekend?",                           showTail: true  } },
  { delay: 800,  typingFor: 1000, msg: { id: 2,  type: "text",     variant: "outgoing", text: "Yeah! What&apos;s up? 😊",                                       status: "read", showTail: true  } },
  { delay: 600,  typingFor: 1800, msg: { id: 3,  type: "text",     variant: "incoming", text: "I&apos;m going on a hike Saturday. Want to join?",               showTail: false } },
  { delay: 400,  typingFor: 0,    msg: { id: 4,  type: "reaction", targetId: 3, emoji: "🔥" } },
  { delay: 800,  typingFor: 1200, msg: { id: 5,  type: "text",     variant: "outgoing", text: "That sounds amazing!",                                           status: "read", showTail: false } },
  { delay: 300,  typingFor: 1000, msg: { id: 6,  type: "text",     variant: "outgoing", text: "Where are you thinking?",                                        status: "read", showTail: true  } },
  { delay: 700,  typingFor: 1600, msg: { id: 7,  type: "image",    variant: "incoming", src: "https://picsum.photos/seed/hike/400/280", caption: "Bukhansan! The view is incredible 🏔️", showTail: true } },
  { delay: 500,  typingFor: 900,  msg: { id: 8,  type: "text",     variant: "outgoing", text: "Wow I&apos;ve always wanted to go there!",                       status: "read", showTail: false } },
  { delay: 400,  typingFor: 1000, msg: { id: 9,  type: "text",     variant: "outgoing", text: "Count me in 🙌",                                                 status: "delivered", showTail: true  } },
  { delay: 600,  typingFor: 800,  msg: { id: 10, type: "voice",    variant: "incoming", duration: "0:12",                                                       showTail: true  } },
  { delay: 500,  typingFor: 1100, msg: { id: 11, type: "text",     variant: "incoming", text: "Perfect! Let&apos;s meet at 7am at the entrance 🥾",             showTail: true  } },
  { delay: 600,  typingFor: 900,  msg: { id: 12, type: "text",     variant: "outgoing", text: "See you there! ☀️",                                              status: "read", showTail: true  } },
];

export function ChatAnimation() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [reactions, setReactions] = useState<Record<number, string>>({});
  const [typing, setTyping] = useState(false);
  const [step, setStep] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (step >= SCRIPT.length) {
      const t = setTimeout(() => { setMessages([]); setReactions({}); setStep(0); }, 4000);
      return () => clearTimeout(t);
    }

    const { delay, typingFor, msg } = SCRIPT[step];

    const t1 = setTimeout(() => {
      if (msg.type === "reaction") {
        setReactions((r) => ({ ...r, [msg.targetId]: msg.emoji }));
        setStep((s) => s + 1);
        return;
      }
      if (typingFor > 0) {
        setTyping(true);
        const t2 = setTimeout(() => {
          setTyping(false);
          setMessages((m) => [...m, msg]);
          setStep((s) => s + 1);
        }, typingFor);
        return () => clearTimeout(t2);
      }
      setMessages((m) => [...m, msg]);
      setStep((s) => s + 1);
    }, delay);

    return () => clearTimeout(t1);
  }, [step]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing]);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl shadow-2xl border border-[rgba(0,0,0,0.1)]">
      <ChatHeader
        name="Alice"
        isOnline={typing}
        status={typing ? undefined : "last seen today at 10:32"}
        onVoiceCall={() => {}}
        onMenu={() => {}}
      />
      <div
        ref={scrollRef}
        className="wa-wallpaper flex-1 overflow-y-auto px-4 py-4"
        style={{ background: "var(--wa-conversation-bg, #f5f0e8)" }}
      >
        <DateSeparator label="Today" />
        {messages.map((msg) => {
          const reaction = reactions[msg.id];
          return (
            <div key={msg.id}>
              {msg.type === "text" && (
                <ChatBubble variant={msg.variant} timestamp="10:24" status={msg.variant === "outgoing" ? msg.status : undefined} showTail={msg.showTail}>
                  {msg.text}
                </ChatBubble>
              )}
              {msg.type === "image" && (
                <ImageBubble variant={msg.variant} src={msg.src} caption={msg.caption} timestamp="10:24" status={msg.variant === "outgoing" ? msg.status : undefined} showTail={msg.showTail} />
              )}
              {msg.type === "voice" && (
                <VoiceMessageBubble variant={msg.variant} duration={msg.duration} timestamp="10:24" showTail={msg.showTail} />
              )}
              {reaction && (
                <div className={`-mt-1 mb-1 flex ${msg.variant === "outgoing" ? "justify-end pr-2" : "justify-start pl-2"}`}>
                  <ReactionPill emoji={reaction} count={1} reacted />
                </div>
              )}
            </div>
          );
        })}
        {typing && <TypingIndicator />}
        <div />
      </div>
      <MessageInput placeholder="Type a message" disabled />
    </div>
  );
}
