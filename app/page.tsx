import { ChatAnimation } from "@/components/chat-animation";
import { CopyButton } from "@/components/copy-button";
import { getRegistryItems } from "@/lib/registry";

const BASE_URL =
  process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://whatsapp-ui.vercel.app";

export default function Home() {
  const count = getRegistryItems().length;

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#111b21]">

      {/* ── Header ── */}
      <header className="shrink-0 flex items-center justify-between border-b border-[rgba(233,237,239,0.1)] px-6 h-[52px]">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#00a884]">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </div>
            <span className="text-[15px] font-semibold text-[#e9edef]">WhatsApp UI</span>
          </div>
          <nav className="hidden items-center gap-5 sm:flex">
            <a href="/registry/chat-bubble" className="text-[13px] text-[#8696a0] hover:text-[#e9edef] transition-colors">Components</a>
            <a href={`${BASE_URL}/r/registry.json`} target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#8696a0] hover:text-[#e9edef] transition-colors">Registry</a>
          </nav>
        </div>
        <a
          href="https://github.com/froggy1014/whatsapp-ui"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[13px] text-[#8696a0] hover:text-[#e9edef] transition-colors"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </header>

      {/* ── Hero ── */}
      <section className="shrink-0 flex flex-col items-center justify-center gap-4 py-10 text-center px-6">
        <span className="rounded-full border border-[rgba(233,237,239,0.2)] px-3 py-1 text-[12px] text-[#8696a0]">
          {count} components · Tailwind v4 · @base-ui/react
        </span>
        <h1 className="text-[40px] font-bold tracking-tight text-[#e9edef] leading-tight">
          WhatsApp UI for React
        </h1>
        <p className="text-[15px] text-[#8696a0] max-w-md">
          Production-ready WhatsApp Web components built with the official WDS design token system.
        </p>
        <div className="flex items-center gap-2 rounded-xl border border-[rgba(233,237,239,0.15)] bg-[rgba(233,237,239,0.04)] px-4 py-2.5">
          <code className="text-[13px] font-mono text-[#e9edef]">
            npx shadcn@latest add {BASE_URL}/r/chat-bubble.json
          </code>
          <CopyButton text={`npx shadcn@latest add ${BASE_URL}/r/chat-bubble.json`} />
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="shrink-0 border-t border-dashed border-[rgba(233,237,239,0.15)]" />

      {/* ── Chat demo fills remaining space ── */}
      <div className="min-h-0 flex-1">
        <ChatAnimation />
      </div>

    </div>
  );
}
