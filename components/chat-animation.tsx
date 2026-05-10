"use client";

import { useEffect, useRef, useState } from "react";
import { ChatBubble } from "@/components/ui/whatsapp/chat-bubble";
import { ChatHeader } from "@/components/ui/whatsapp/chat-header";
import { DateSeparator } from "@/components/ui/whatsapp/date-separator";
import { ReactionPill } from "@/components/ui/whatsapp/reaction-pill";
import { TemplateBubble } from "@/components/ui/whatsapp/template-bubble";
import { TypingIndicator } from "@/components/ui/whatsapp/typing-indicator";
import { AnimatedInput } from "@/components/animated-input";
import { MessageInput } from "@/components/ui/whatsapp/message-input";

// ─── Types ────────────────────────────────────────────────────────────────────

interface TextMsg     { id: number; type: "text";     variant: "incoming" | "outgoing"; text: string;  status?: "read" | "delivered" }
interface TplMsg      { id: number; type: "template"; variant: "incoming" | "outgoing"; title: string; body: string; btnLabel: string; btnUrl: string }
interface ReactMsg    { id: number; type: "reaction"; targetId: number; emoji: string }
type Message = TextMsg | TplMsg | ReactMsg;
type ChatMessage = TextMsg | TplMsg;

interface Step { delay: number; typingFor: number; msg: Message }

// ─── Script ───────────────────────────────────────────────────────────────────

const SCRIPT: Step[] = [
  { delay: 1000, typingFor: 2600, msg: { id: 1,  type: "text",     variant: "incoming", text: "야 너 WhatsApp으로 이번에 SaaS 한다며? 어떤 고민이야 👀" } },
  { delay: 1200, typingFor: 2200, msg: { id: 2,  type: "text",     variant: "outgoing", text: "ㅇㅇ 근데 UX 맞추는게 생각보다 빡세더라",                 status: "read" } },
  { delay: 500,  typingFor: 3400, msg: { id: 3,  type: "text",     variant: "outgoing", text: "WhatsApp이랑 똑같은 느낌 줘야하는데 컴포넌트 하나하나 다 만들자니 시간이 너무 많이 걸려", status: "read" } },
  { delay: 900,  typingFor: 2000, msg: { id: 4,  type: "text",     variant: "incoming", text: "아 그거 마침 딱 맞는거 찾았는데" } },
  { delay: 400,  typingFor: 1800, msg: { id: 5,  type: "text",     variant: "incoming", text: "WhatsApp UI라고 WDS 토큰 그대로 쓰는 shadcn registry야" } },
  { delay: 700,  typingFor: 1200, msg: { id: 6,  type: "template", variant: "incoming",
      title: "WhatsApp UI",
      body: "Production-ready WhatsApp Web components. Built with Tailwind v4 & WDS design tokens. npx shadcn add and you're done.",
      btnLabel: "View Registry",
      btnUrl: "https://whatsapp-ui.vercel.app",
  } },
  { delay: 1000, typingFor: 1600, msg: { id: 7,  type: "text",     variant: "outgoing", text: "잠깐 이게 뭐야",                                     status: "read" } },
  { delay: 400,  typingFor: 2000, msg: { id: 8,  type: "text",     variant: "outgoing", text: "ChatBubble, MessageInput, Template 다 있네 ㄷㄷ",     status: "read" } },
  { delay: 800,  typingFor: 0,    msg: { id: 9,  type: "reaction", targetId: 6, emoji: "🔥" } },
  { delay: 900,  typingFor: 2200, msg: { id: 10, type: "text",     variant: "incoming", text: "다크모드에 WDS 토큰까지 전부 포함이야 😄" } },
  { delay: 600,  typingFor: 1400, msg: { id: 11, type: "text",     variant: "incoming", text: "npx shadcn 한 번만 치면 끝" } },
  { delay: 800,  typingFor: 1800, msg: { id: 12, type: "text",     variant: "outgoing", text: "야 이거 진짜 몇 주 아꼈다",                          status: "read" } },
  { delay: 500,  typingFor: 1000, msg: { id: 13, type: "text",     variant: "outgoing", text: "고마워 😭",                                           status: "delivered" } },
  { delay: 700,  typingFor: 800,  msg: { id: 14, type: "text",     variant: "incoming", text: "ㅋㅋㅋ 잘 써봐" } },
];

// ─── Human-like typing ────────────────────────────────────────────────────────

const NEARBY: Record<string, string> = {
  a:"sqwz", b:"vghn", c:"xdfv", d:"serfcx", e:"wsdr", f:"drtgvc",
  g:"ftyhbv", h:"gyujbn", i:"uojk", j:"huikn", k:"jiolm", l:"kop",
  m:"njk",  n:"bhjm",  o:"ipl",  p:"ol",    q:"wa",   r:"edft",
  s:"awedxz", t:"rfgy", u:"yihjk", v:"cfgb", w:"qase", x:"zsdc",
  y:"tugh", z:"asx",
};
function nearbyKey(ch: string) {
  const pool = NEARBY[ch.toLowerCase()] ?? "abcde";
  return pool[Math.floor(Math.random() * pool.length)];
}
type Keystroke = { type: "char"; ch: string } | { type: "backspace" } | { type: "pause"; ms: number };
function buildKeystrokes(text: string): Keystroke[] {
  const result: Keystroke[] = [];
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch !== " " && /[a-z]/i.test(ch) && i > 0 && Math.random() < 0.1) {
      result.push({ type: "char", ch: nearbyKey(ch) });
      result.push({ type: "pause", ms: 180 + Math.random() * 200 });
      result.push({ type: "backspace" });
      result.push({ type: "pause", ms: 60 + Math.random() * 80 });
    }
    result.push({ type: "char", ch });
    if (Math.random() < 0.07) result.push({ type: "pause", ms: 200 + Math.random() * 300 });
  }
  return result;
}
function useTypingText(fullText: string, active: boolean) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    if (!active) {
      const t = setTimeout(() => setDisplayed(""), 0);
      return () => clearTimeout(t);
    }
    setDisplayed("");
    const keystrokes = buildKeystrokes(fullText);
    let current = "";
    let i = 0;
    let timeout: ReturnType<typeof setTimeout>;
    function next() {
      if (i >= keystrokes.length) return;
      const k = keystrokes[i++];
      if (k.type === "char")      { current += k.ch;            setDisplayed(current); timeout = setTimeout(next, 55 + Math.random() * 85); }
      else if (k.type === "backspace") { current = current.slice(0, -1); setDisplayed(current); timeout = setTimeout(next, 70 + Math.random() * 60); }
      else                        { timeout = setTimeout(next, k.ms); }
    }
    timeout = setTimeout(next, 80);
    return () => clearTimeout(timeout);
  }, [active, fullText]);
  return displayed;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ChatAnimation() {
  const [messages, setMessages]         = useState<ChatMessage[]>([]);
  const [reactions, setReactions]       = useState<Record<number, string>>({});
  const [incomingTyping, setIncoming]   = useState(false);
  const [outgoingTyping, setOutgoing]   = useState<{ text: string } | null>(null);
  const [step, setStep]                 = useState(0);
  const scrollRef                       = useRef<HTMLDivElement>(null);

  const typedText = useTypingText(outgoingTyping?.text ?? "", !!outgoingTyping);

  useEffect(() => {
    if (step >= SCRIPT.length) return; // done — no loop
    const { delay, typingFor, msg } = SCRIPT[step];
    const t1 = setTimeout(() => {
      if (msg.type === "reaction") {
        setReactions((r) => ({ ...r, [msg.targetId]: msg.emoji }));
        setStep((s) => s + 1);
        return;
      }
      if (typingFor > 0) {
        if (msg.variant === "outgoing" && msg.type === "text") {
          setOutgoing({ text: msg.text });
          const t2 = setTimeout(() => { setOutgoing(null); setMessages((m) => [...m, msg]); setStep((s) => s + 1); }, typingFor);
          return () => clearTimeout(t2);
        } else {
          setIncoming(true);
          const t2 = setTimeout(() => { setIncoming(false); setMessages((m) => [...m, msg]); setStep((s) => s + 1); }, typingFor);
          return () => clearTimeout(t2);
        }
      }
      setMessages((m) => [...m, msg]);
      setStep((s) => s + 1);
    }, delay);
    return () => clearTimeout(t1);
  }, [step]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, incomingTyping, outgoingTyping]);

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <ChatHeader
        name="Evan"
        isOnline={incomingTyping}
        status={incomingTyping ? undefined : "last seen today at 10:32"}
        onVoiceCall={() => {}}
        onMenu={() => {}}
      />

      <div
        ref={scrollRef}
        className="wa-wallpaper flex flex-col flex-1 overflow-y-auto px-4 py-4"
        style={{ background: "var(--wa-conversation-bg, #f5f0e8)" }}
      >
        <div className="flex-1" />
        {messages.length > 0 && <DateSeparator label="Today" />}

        {messages.map((msg, index) => {
          const next = messages[index + 1];
          const isLast = index === messages.length - 1;
          const showTail = isLast
            ? msg.variant === "incoming" ? !incomingTyping : !outgoingTyping
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
                >
                  {msg.text}
                </ChatBubble>
              )}
              {msg.type === "template" && (
                <div className={`flex w-full ${msg.variant === "outgoing" ? "justify-end" : "justify-start"} ${showTail ? "mb-[6px]" : "mb-[2px]"}`}>
                  <TemplateBubble
                    header={{ type: "text", text: msg.title }}
                    body={msg.body}
                    buttons={[{ type: "url", label: msg.btnLabel }]}
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

        {incomingTyping && <TypingIndicator />}
        <div />
      </div>

      {outgoingTyping
        ? <AnimatedInput text={typedText} />
        : <MessageInput placeholder="Type a message" />
      }
    </div>
  );
}
