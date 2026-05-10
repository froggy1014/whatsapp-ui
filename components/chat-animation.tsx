"use client";

import { useEffect, useRef, useState } from "react";
import { ChatBubble } from "@/components/ui/whatsapp/chat-bubble";
import { ChatHeader } from "@/components/ui/whatsapp/chat-header";
import { DateSeparator } from "@/components/ui/whatsapp/date-separator";
import { ImageBubble } from "@/components/ui/whatsapp/image-bubble";
import { ReactionPill } from "@/components/ui/whatsapp/reaction-pill";
import { TemplateBubble } from "@/components/ui/whatsapp/template-bubble";
import { TypingIndicator } from "@/components/ui/whatsapp/typing-indicator";
import { VoiceMessageBubble } from "@/components/ui/whatsapp/voice-message-bubble";
import { AnimatedInput } from "@/components/animated-input";
import { MessageInput } from "@/components/ui/whatsapp/message-input";

// ─── Types ────────────────────────────────────────────────────────────────────

interface TextMsg  { id: number; type: "text";     variant: "incoming" | "outgoing"; text: string;  status?: "read" | "delivered" }
interface ImgMsg   { id: number; type: "image";    variant: "incoming" | "outgoing"; src: string;   caption?: string; status?: "read" | "delivered" }
interface VoiceMsg { id: number; type: "voice";    variant: "incoming" | "outgoing"; duration: string; status?: "read" | "delivered" }
interface TplMsg   { id: number; type: "template"; variant: "incoming" | "outgoing"; title: string; body: string; btnLabel: string; btnUrl?: string }
interface ReactMsg { id: number; type: "reaction"; targetId: number; emoji: string }

type ChatMessage = TextMsg | ImgMsg | VoiceMsg | TplMsg;
type Message     = ChatMessage | ReactMsg;

interface Step {
  /** ms to wait before starting this step */
  delay: number;
  /** ms to show TypingIndicator (incoming) — 0 means instant */
  typingFor: number;
  msg: Message;
}

// ─── Conversation script ──────────────────────────────────────────────────────

const IMG = "https://picsum.photos/seed/whatsapp-ui/400/280";

const SCRIPT: Step[] = [
  { delay: 800,  typingFor: 2400, msg: { id: 1,  type: "text",     variant: "incoming", text: "hey, I heard you're building something on top of WhatsApp 👀" } },
  { delay: 1000, typingFor: 0,    msg: { id: 2,  type: "text",     variant: "outgoing", text: "yeah lol, it's going well except...",                         status: "read"      } },
  { delay: 400,  typingFor: 0,    msg: { id: 3,  type: "text",     variant: "outgoing", text: "matching the exact WhatsApp UX is way harder than I thought", status: "read"      } },
  { delay: 500,  typingFor: 0,    msg: { id: 4,  type: "text",     variant: "outgoing", text: "building every component from scratch is killing me 😵",       status: "read"      } },
  { delay: 900,  typingFor: 1800, msg: { id: 5,  type: "text",     variant: "incoming", text: "ok wait — I think I found exactly what you need" } },
  { delay: 500,  typingFor: 0,    msg: { id: 6,  type: "voice",    variant: "incoming", duration: "0:08" } },
  { delay: 800,  typingFor: 0,    msg: { id: 7,  type: "text",     variant: "outgoing", text: "haha ok let me listen",                                        status: "read"      } },
  { delay: 600,  typingFor: 1600, msg: { id: 8,  type: "text",     variant: "incoming", text: "it's whatsapp-ui — a shadcn registry with the official WDS design tokens" } },
  { delay: 600,  typingFor: 1200, msg: { id: 9,  type: "template", variant: "incoming",
      title: "WhatsApp UI",
      body: "Production-ready WhatsApp Web components. Tailwind v4, @base-ui/react, dark mode, WDS tokens included.",
      btnLabel: "View Registry",
      btnUrl: "https://whatsapp-ui.vercel.app",
  } },
  { delay: 800,  typingFor: 0,    msg: { id: 10, type: "reaction", targetId: 9, emoji: "🔥" } },
  { delay: 600,  typingFor: 0,    msg: { id: 11, type: "text",     variant: "outgoing", text: "wait... ChatBubble, MessageInput, Templates — it's all there?!", status: "read"    } },
  { delay: 400,  typingFor: 1400, msg: { id: 12, type: "text",     variant: "incoming", text: "yep 😄 one command and you're done" } },
  { delay: 500,  typingFor: 1200, msg: { id: 13, type: "image",    variant: "incoming", src: IMG, caption: "dark mode works too 🌙" } },
  { delay: 800,  typingFor: 0,    msg: { id: 14, type: "text",     variant: "outgoing", text: "bro this is insane",                                           status: "read"      } },
  { delay: 300,  typingFor: 0,    msg: { id: 15, type: "text",     variant: "outgoing", text: "you just saved me weeks 😭",                                   status: "delivered" } },
  { delay: 700,  typingFor: 1200, msg: { id: 16, type: "text",     variant: "incoming", text: "lol go build something 🚀" } },
];

// ─── Human-like typing ────────────────────────────────────────────────────────

const NEARBY: Record<string, string> = {
  a:"sqwz",b:"vghn",c:"xdfv",d:"serfcx",e:"wsdr",f:"drtgvc",g:"ftyhbv",h:"gyujbn",
  i:"uojk",j:"huikn",k:"jiolm",l:"kop",m:"njk",n:"bhjm",o:"ipl",p:"ol",q:"wa",
  r:"edft",s:"awedxz",t:"rfgy",u:"yihjk",v:"cfgb",w:"qase",x:"zsdc",y:"tugh",z:"asx",
};
function nearbyKey(ch: string) {
  const pool = NEARBY[ch.toLowerCase()] ?? "abcde";
  return pool[Math.floor(Math.random() * pool.length)];
}
type KS = { type:"char";ch:string }|{ type:"backspace" }|{ type:"pause";ms:number };
function buildKS(text: string): KS[] {
  const r: KS[] = [];
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (/[a-z]/i.test(ch) && i > 0 && Math.random() < 0.09) {
      r.push({ type:"char", ch: nearbyKey(ch) });
      r.push({ type:"pause", ms: 160 + Math.random() * 220 });
      r.push({ type:"backspace" });
      r.push({ type:"pause", ms: 50 + Math.random() * 80 });
    }
    r.push({ type:"char", ch });
    if (Math.random() < 0.07) r.push({ type:"pause", ms: 180 + Math.random() * 280 });
  }
  return r;
}

/** Plays typing animation; calls onDone when the full text has been typed. */
function useTypingText(text: string, active: boolean, onDone: () => void) {
  const [displayed, setDisplayed] = useState("");
  const onDoneRef = useRef(onDone);
  useEffect(() => { onDoneRef.current = onDone; });

  useEffect(() => {
    if (!active) { const t = setTimeout(() => setDisplayed(""), 0); return () => clearTimeout(t); }
    setDisplayed("");
    const ks = buildKS(text);
    let cur = "", i = 0;
    let t: ReturnType<typeof setTimeout>;
    function next() {
      if (i >= ks.length) { onDoneRef.current(); return; }
      const k = ks[i++];
      if (k.type === "char")      { cur += k.ch;         setDisplayed(cur); t = setTimeout(next, 50 + Math.random() * 90); }
      else if (k.type==="backspace"){ cur=cur.slice(0,-1); setDisplayed(cur); t = setTimeout(next, 65 + Math.random() * 65); }
      else                        { t = setTimeout(next, k.ms); }
    }
    t = setTimeout(next, 100);
    return () => clearTimeout(t);
  }, [active, text]);
  return displayed;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ChatAnimation() {
  const [messages, setMessages]   = useState<ChatMessage[]>([]);
  const [reactions, setReactions] = useState<Record<number, string>>({});
  const [incoming, setIncoming]   = useState(false);
  const [outgoingText, setOutgoing] = useState<string | null>(null);
  const [step, setStep]           = useState(0);
  const scrollRef                 = useRef<HTMLDivElement>(null);
  // Holds the message to commit once typing animation finishes
  const pendingMsg                = useRef<ChatMessage | null>(null);

  const typedText = useTypingText(
    outgoingText ?? "",
    outgoingText !== null,
    () => {
      // Typing finished — commit message and advance
      if (pendingMsg.current) {
        setMessages((m) => [...m, pendingMsg.current!]);
        pendingMsg.current = null;
      }
      setOutgoing(null);
      setStep((s) => s + 1);
    },
  );

  useEffect(() => {
    if (step >= SCRIPT.length) return;
    const { delay, typingFor, msg } = SCRIPT[step];

    const t = setTimeout(() => {
      // Reaction — no typing, instant
      if (msg.type === "reaction") {
        setReactions((r) => ({ ...r, [msg.targetId]: msg.emoji }));
        setStep((s) => s + 1);
        return;
      }

      const chatMsg = msg as ChatMessage;

      // Outgoing text → show in input bar, wait for typing to finish
      if (chatMsg.variant === "outgoing" && chatMsg.type === "text") {
        pendingMsg.current = chatMsg;
        setOutgoing(chatMsg.text);
        return; // step advances in onDone
      }

      // Incoming with typing indicator
      if (typingFor > 0) {
        setIncoming(true);
        const t2 = setTimeout(() => {
          setIncoming(false);
          setMessages((m) => [...m, chatMsg]);
          setStep((s) => s + 1);
        }, typingFor);
        return () => clearTimeout(t2);
      }

      // Everything else (images, voice, templates from incoming) — instant
      setMessages((m) => [...m, chatMsg]);
      setStep((s) => s + 1);
    }, delay);

    return () => clearTimeout(t);
  }, [step]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, incoming, outgoingText]);

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <ChatHeader
        name="WhatsApp UI"
        isOnline={incoming}
        status={incoming ? undefined : "shadcn registry · 14 components"}
        customActions={
          <>
            <a
              href="https://github.com/froggy1014/whatsapp-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-wa-icon-default transition-colors hover:bg-wa-hover"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-wa-icon-default transition-colors hover:bg-wa-hover"
              aria-label="shadcn/ui"
            >
              <svg viewBox="0 0 256 256" width="20" height="20" fill="currentColor">
                <line x1="208" y1="128" x2="128" y2="208" stroke="currentColor" strokeWidth="24" strokeLinecap="round"/>
                <line x1="192" y1="40" x2="40" y2="192" stroke="currentColor" strokeWidth="24" strokeLinecap="round"/>
              </svg>
            </a>
          </>
        }
      />

      <div
        ref={scrollRef}
        className="wa-wallpaper flex flex-col flex-1 overflow-y-auto px-4 py-4"
        style={{ background: "var(--wa-conversation-bg, #f5f0e8)" }}
      >
        <div className="flex-1" />
        {messages.length > 0 && <DateSeparator label="Today" />}

        {messages.map((msg, index) => {
          const next    = messages[index + 1];
          const isLast  = index === messages.length - 1;
          const showTail = isLast
            ? (msg.variant === "incoming" ? !incoming : outgoingText === null)
            : next.variant !== msg.variant;
          const reaction = reactions[msg.id];

          return (
            <div key={msg.id}>
              {msg.type === "text" && (
                <ChatBubble variant={msg.variant} timestamp="10:24" status={msg.variant === "outgoing" ? msg.status : undefined} showTail={showTail}>
                  {msg.text}
                </ChatBubble>
              )}
              {msg.type === "image" && (
                <ImageBubble variant={msg.variant} src={msg.src} caption={msg.caption} timestamp="10:24" status={msg.variant === "outgoing" ? msg.status : undefined} showTail={showTail} />
              )}
              {msg.type === "voice" && (
                <VoiceMessageBubble variant={msg.variant} duration={msg.duration} timestamp="10:24" showTail={showTail} />
              )}
              {msg.type === "template" && (
                <div className={`flex w-full ${msg.variant === "outgoing" ? "justify-end" : "justify-start"} ${showTail ? "mb-[6px]" : "mb-[2px]"}`}>
                  <TemplateBubble
                    header={{ type: "text", text: msg.title }}
                    body={msg.body}
                    buttons={[{ type: "url", label: msg.btnLabel, url: msg.btnUrl }]}
                    timestamp="10:24"
                  />
                </div>
              )}
              {reaction && (
                <div className={`-mt-1 mb-1 flex ${msg.variant === "outgoing" ? "justify-end pr-2" : "justify-start pl-2"}`}>
                  <ReactionPill emoji={reaction} reacted />
                </div>
              )}
            </div>
          );
        })}

        {incoming && <TypingIndicator />}
        <div />
      </div>

      {outgoingText !== null
        ? <AnimatedInput text={typedText} />
        : <MessageInput placeholder="Type a message" />
      }
    </div>
  );
}
