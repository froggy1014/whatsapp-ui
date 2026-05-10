"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ChatBubble } from "@/components/ui/whatsapp/chat-bubble";
import { CarouselTemplate } from "@/components/ui/whatsapp/carousel-template";
import { ChatHeader } from "@/components/ui/whatsapp/chat-header";
import { DateSeparator } from "@/components/ui/whatsapp/date-separator";
import { FileAttachmentBubble } from "@/components/ui/whatsapp/file-attachment-bubble";
import { ImageBubble } from "@/components/ui/whatsapp/image-bubble";
import { TemplateBubble } from "@/components/ui/whatsapp/template-bubble";
import { TypingIndicator } from "@/components/ui/whatsapp/typing-indicator";
import { VoiceMessageBubble } from "@/components/ui/whatsapp/voice-message-bubble";
import { Sun, Moon, RotateCcw } from "lucide-react";
import { ChatMenu } from "@/components/ui/whatsapp/chat-menu";
import { AnimatedInput } from "@/components/animated-input";
import { MessageInput } from "@/components/ui/whatsapp/message-input";

// ─── Types ────────────────────────────────────────────────────────────────────

interface TextMsg     { id: number; type: "text";       variant: "incoming" | "outgoing"; text: string;   status?: "read" | "delivered" }
interface ImgMsg      { id: number; type: "image";      variant: "incoming" | "outgoing"; src: string;   caption?: string; status?: "read" | "delivered" }
interface MultiImgMsg { id: number; type: "multi-image";variant: "incoming" | "outgoing"; srcs: string[]; caption?: string; status?: "read" | "delivered" }
interface VoiceMsg    { id: number; type: "voice";      variant: "incoming" | "outgoing"; duration: string; status?: "read" | "delivered" }
interface FileMsg     { id: number; type: "file";       variant: "incoming" | "outgoing"; fileName: string; fileSize: string; fileType: string; downloadUrl?: string; status?: "read" | "delivered" }
interface TplMsg      { id: number; type: "template";   variant: "incoming" | "outgoing"; title: string; body: string; btnLabel: string; btnUrl?: string; btnCode?: string }
interface CarouselMsg { id: number; type: "carousel";   variant: "incoming" | "outgoing"; body: string; cards: Array<{ body: string; btnLabel: string; btnUrl?: string }> }
interface ReactMsg    { id: number; type: "reaction";   targetId: number; emoji: string }

type ChatMessage = TextMsg | ImgMsg | MultiImgMsg | VoiceMsg | FileMsg | TplMsg | CarouselMsg;
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
  { delay: 500,  typingFor: 0,    msg: { id: 14, type: "text",     variant: "outgoing", text: "bro this is insane",                                                     status: "read"      } },
  { delay: 300,  typingFor: 900,  msg: { id: 19, type: "file",     variant: "incoming", fileName: "whatsapp-ui-quickstart.pdf", fileSize: "512 KB", fileType: "pdf", downloadUrl: "/file-sample_150kB.pdf" } },
  { delay: 500,  typingFor: 0,    msg: { id: 15, type: "text",     variant: "outgoing", text: "already started 👀",                                                 status: "read" } },
  { delay: 400,  typingFor: 0,    msg: { id: 20, type: "multi-image", variant: "outgoing",
      srcs: [IMG, IMG, IMG, IMG],
      caption: "built these in 30 mins 🤯",
      status: "read",
  } },
  { delay: 500,  typingFor: 900,  msg: { id: 21, type: "carousel", variant: "incoming",
      body: "here's a taste of what's in the registry 👇",
      cards: [
        { body: "ChatBubble — incoming, outgoing, group, reactions", btnLabel: "View", btnUrl: "https://github.com/froggy1014/whatsapp-ui" },
        { body: "TemplateBubble — all Meta Cloud API button types", btnLabel: "View", btnUrl: "https://github.com/froggy1014/whatsapp-ui" },
        { body: "VoiceMessageBubble — real audio playback support", btnLabel: "View", btnUrl: "https://github.com/froggy1014/whatsapp-ui" },
      ],
  } },
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
              {dark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="https://github.com/froggy1014/whatsapp-ui" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 text-wa-icon-default transition-colors hover:bg-wa-hover" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <ChatMenu
              items={[
                {
                  label: "Restart demo",
                  icon: <RotateCcw size={18} />,
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
              {msg.type === "multi-image" && (
                <ImageBubble variant={msg.variant} images={msg.srcs} caption={msg.caption} timestamp="10:24" status={msg.variant === "outgoing" ? msg.status : undefined} showTail={showTail} />
              )}
              {msg.type === "file" && (
                <FileAttachmentBubble
                  variant={msg.variant}
                  fileName={msg.fileName}
                  fileSize={msg.fileSize}
                  fileType={msg.fileType}
                  timestamp="10:24"
                  status={msg.variant === "outgoing" ? msg.status : undefined}
                  downloadStatus="idle"
                  downloadUrl={msg.downloadUrl}
                  showTail={showTail}
                />
              )}
              {msg.type === "voice" && (
                <VoiceMessageBubble
                  variant={msg.variant}
                  duration={msg.duration}
                  timestamp="10:24"
                  showTail={showTail}
                  audioSrc={msg.id === 17 ? "/file_example_MP3_700KB.mp3" : undefined}
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
              {msg.type === "carousel" && (
                <div className={`flex w-full ${msg.variant === "outgoing" ? "justify-end" : "justify-start"} ${showTail ? "mb-[6px]" : "mb-[2px]"}`}>
                  <CarouselTemplate
                    body={msg.body}
                    timestamp="10:24"
                    cards={msg.cards.map((c) => ({
                      body: c.body,
                      buttons: [{ type: "url" as const, label: c.btnLabel, url: c.btnUrl }],
                    }))}
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
