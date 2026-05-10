"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ChatBubble } from "@/components/ui/whatsapp/chat-bubble";
import { ChatHeader } from "@/components/ui/whatsapp/chat-header";
import { DateSeparator } from "@/components/ui/whatsapp/date-separator";
import { ImageBubble } from "@/components/ui/whatsapp/image-bubble";
import { TemplateBubble } from "@/components/ui/whatsapp/template-bubble";
import { TypingIndicator } from "@/components/ui/whatsapp/typing-indicator";
import { VoiceMessageBubble } from "@/components/ui/whatsapp/voice-message-bubble";
import { ChatMenu } from "@/components/ui/whatsapp/chat-menu";
import { AnimatedInput } from "@/components/animated-input";
import { MessageInput } from "@/components/ui/whatsapp/message-input";

// ─── Types ────────────────────────────────────────────────────────────────────

interface TextMsg  { id: number; type: "text";     variant: "incoming" | "outgoing"; text: string;  status?: "read" | "delivered" }
interface ImgMsg   { id: number; type: "image";    variant: "incoming" | "outgoing"; src: string;   caption?: string; status?: "read" | "delivered" }
interface VoiceMsg { id: number; type: "voice";    variant: "incoming" | "outgoing"; duration: string; status?: "read" | "delivered" }
interface TplMsg   { id: number; type: "template"; variant: "incoming" | "outgoing"; title: string; body: string; btnLabel: string; btnUrl?: string; btnCode?: string }
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
  { delay: 500,  typingFor: 1600, msg: { id: 1,  type: "text",     variant: "incoming", text: "hey, I heard you're building something on top of WhatsApp 👀" } },
  { delay: 600,  typingFor: 0,    msg: { id: 2,  type: "text",     variant: "outgoing", text: "yeah lol, matching the exact UX is the hardest part",           status: "read"      } },
  { delay: 300,  typingFor: 0,    msg: { id: 3,  type: "text",     variant: "outgoing", text: "building every component from scratch is killing me 😵",         status: "read"      } },
  { delay: 600,  typingFor: 1200, msg: { id: 5,  type: "text",     variant: "incoming", text: "ok wait — I think I found exactly what you need" } },
  { delay: 400,  typingFor: 0,    msg: { id: 6,  type: "voice",    variant: "incoming", duration: "0:08" } },
  { delay: 500,  typingFor: 0,    msg: { id: 7,  type: "text",     variant: "outgoing", text: "haha ok let me listen",                                          status: "read"      } },
  { delay: 400,  typingFor: 1100, msg: { id: 8,  type: "text",     variant: "incoming", text: "it's whatsapp-ui — a shadcn registry with the official WDS design tokens" } },
  { delay: 400,  typingFor: 800,  msg: { id: 9,  type: "template", variant: "incoming",
      title: "WhatsApp UI",
      body: "Production-ready WhatsApp Web components. Tailwind v4, @base-ui/react, dark mode, WDS tokens included.",
      btnLabel: "View Registry",
      btnUrl: "https://github.com/froggy1014/whatsapp-ui",
  } },
  { delay: 500,  typingFor: 0,    msg: { id: 10, type: "reaction", targetId: 9, emoji: "🔥" } },
  { delay: 400,  typingFor: 0,    msg: { id: 11, type: "text",     variant: "outgoing", text: "wait... ChatBubble, MessageInput, Templates — it's all there?!", status: "read"    } },
  { delay: 300,  typingFor: 900,  msg: { id: 12, type: "text",     variant: "incoming", text: "yep 😄 one command and you're done" } },
  { delay: 400,  typingFor: 800,  msg: { id: 13, type: "image",    variant: "incoming", src: IMG, caption: "dark mode works too 🌙" } },
  { delay: 500,  typingFor: 0,    msg: { id: 14, type: "text",     variant: "outgoing", text: "bro this is insane",                                             status: "read"      } },
  { delay: 300,  typingFor: 0,    msg: { id: 15, type: "text",     variant: "outgoing", text: "you just saved me weeks 😭",                                     status: "read" } },
  { delay: 500,  typingFor: 800,  msg: { id: 16, type: "text",     variant: "incoming", text: "lol go build something 🚀" } },
  { delay: 400,  typingFor: 600,  msg: { id: 17, type: "voice",    variant: "incoming", duration: "0:42" } },
  { delay: 600,  typingFor: 1000, msg: { id: 18, type: "template", variant: "outgoing",
      title: "Here's a little gift 🎁",
      body: "Use this code to get free access. Copy the code and paste it at checkout.",
      btnLabel: "Copy code",
      btnCode: "WA-UI-2025",
  } },
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
    if (/[a-z]/i.test(ch) && i > 2 && Math.random() < 0.03) {
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
      if (k.type === "char")      { cur += k.ch;         setDisplayed(cur); t = setTimeout(next, 22 + Math.random() * 38); }
      else if (k.type==="backspace"){ cur=cur.slice(0,-1); setDisplayed(cur); t = setTimeout(next, 30 + Math.random() * 30); }
      else                        { t = setTimeout(next, k.ms * 0.5); }
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
  const [dark, setDark]           = useState(() =>
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : true
  );
  const scrollRef                 = useRef<HTMLDivElement>(null);

  const applyTheme = useCallback((isDark: boolean) => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    root.setAttribute("data-theme", isDark ? "dark" : "light");
  }, []);

  // Apply on mount immediately (no delay)
  useEffect(() => { applyTheme(dark); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Apply on toggle
  useEffect(() => { applyTheme(dark); }, [dark, applyTheme]);
  // Holds the message to commit once typing animation finishes
  const pendingMsg                = useRef<ChatMessage | null>(null);

  const typedText = useTypingText(
    outgoingText ?? "",
    outgoingText !== null,
    () => {
      // Capture before clearing to avoid concurrent null access
      const pending = pendingMsg.current;
      pendingMsg.current = null;
      setOutgoing(null);
      if (pending) setMessages((m) => [...m, pending]);
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

      // Incoming with typing indicator (outgoing variants skip indicator)
      if (typingFor > 0 && chatMsg.variant === "incoming") {
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
            <button onClick={() => setDark((d) => !d)} className="rounded-full p-2 text-wa-icon-default transition-colors hover:bg-wa-hover" aria-label="Toggle theme">
              {dark
                ? <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1z"/></svg>
                : <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/></svg>
              }
            </button>
            <a href="https://github.com/froggy1014/whatsapp-ui" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 text-wa-icon-default transition-colors hover:bg-wa-hover" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 text-wa-icon-default transition-colors hover:bg-wa-hover" aria-label="shadcn/ui">
              <svg viewBox="0 0 256 256" width="20" height="20" fill="currentColor"><line x1="208" y1="128" x2="128" y2="208" stroke="currentColor" strokeWidth="24" strokeLinecap="round"/><line x1="192" y1="40" x2="40" y2="192" stroke="currentColor" strokeWidth="24" strokeLinecap="round"/></svg>
            </a>
            <ChatMenu
              items={[
                {
                  label: "Restart demo",
                  icon: (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
                    </svg>
                  ),
                  onClick: () => {
                    setMessages([]);
                    setReactions({});
                    setStep(0);
                    setOutgoing(null);
                    setIncoming(false);
                  },
                },
              ]}
            />
            <button
              onClick={() => setDark((d) => !d)}
              className="rounded-full p-2 text-wa-icon-default transition-colors hover:bg-wa-hover"
              aria-label="Toggle theme"
            >
              {dark ? (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-12.37l-1.06 1.06a.996.996 0 0 0 0 1.41c.39.39 1.03.39 1.41 0l1.06-1.06a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0zM7.05 18.36l-1.06 1.06a.996.996 0 0 0 0 1.41c.39.39 1.03.39 1.41 0l1.06-1.06a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0z"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/>
                </svg>
              )}
            </button>
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

      {/* Wallpaper fixed layer — outside scroll so pattern covers full area */}
      <div className="wa-wallpaper relative flex-1 overflow-hidden" style={{ background: "var(--wa-conversation-bg, #f5f0e8)" }}>
      <div
        ref={scrollRef}
        className="absolute inset-0 flex flex-col overflow-y-auto px-4 py-4"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex-1" />
        {messages.length > 0 && <DateSeparator label="Today" />}

        {messages.map((msg, index) => {
          if (!msg) return null;
          const next    = messages[index + 1];
          const isLast  = index === messages.length - 1;
          const showTail = (isLast || next == null)
            ? (msg.variant === "incoming" ? !incoming : outgoingText === null)
            : next.variant !== msg.variant;
          const reaction = reactions[msg.id];

          return (
            <div key={msg.id}>
              {msg.type === "text" && (
                <ChatBubble
                  variant={msg.variant}
                  timestamp="10:24"
                  status={msg.variant === "outgoing" ? msg.status : undefined}
                  showTail={showTail}
                  reactions={reaction ? [{ emoji: reaction, reacted: true }] : undefined}
                >
                  {msg.text}
                </ChatBubble>
              )}
              {msg.type === "image" && (
                <ImageBubble variant={msg.variant} src={msg.src} caption={msg.caption} timestamp="10:24" status={msg.variant === "outgoing" ? msg.status : undefined} showTail={showTail} />
              )}
              {msg.type === "voice" && (
                <VoiceMessageBubble
                  variant={msg.variant}
                  duration={msg.duration}
                  timestamp="10:24"
                  showTail={showTail}
                  audioSrc={msg.variant === "incoming" ? "/file_example_MP3_700KB.mp3" : undefined}
                />
              )}
              {msg.type === "template" && (
                <div className={`flex w-full ${msg.variant === "outgoing" ? "justify-end" : "justify-start"} ${showTail ? "mb-[6px]" : "mb-[2px]"}`}>
                  <TemplateBubble
                    variant={msg.variant}
                    header={{ type: "text", text: msg.title }}
                    body={msg.body}
                    buttons={msg.btnCode
                      ? [{ type: "copy_code", label: msg.btnLabel, code: msg.btnCode }]
                      : [{ type: "url", label: msg.btnLabel, url: msg.btnUrl }]
                    }
                    timestamp="10:24"
                  />
                </div>
              )}
            </div>
          );
        })}

        {incoming && <TypingIndicator />}
        <div />
      </div>
      </div>

      {outgoingText !== null
        ? <AnimatedInput text={typedText} />
        : <MessageInput placeholder="Type a message" />
      }
    </div>
  );
}
