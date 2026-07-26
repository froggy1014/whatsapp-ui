import { getRegistryItems } from "@/lib/registry";
import { CopyButton } from "@/components/copy-button";
import { ChatAnimation } from "@/components/chat-animation";
import { ComponentPreview } from "@/components/component-preview";
import { ThemeToggle } from "@/components/theme-toggle";

const BASE_URL =
  process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://ui.meta-cloud-api.site";

const CATEGORY_ORDER = [
  { label: "Chat", names: ["chat-bubble", "chat-header", "chat-list-item", "chat-menu", "message-input", "message-status", "date-separator", "typing-indicator"] },
  { label: "Media", names: ["image-bubble", "video-bubble", "voice-message-bubble", "file-attachment-bubble", "sticker-bubble"] },
  { label: "Templates & Interactive", names: ["template-bubble", "carousel-template", "interactive-button-bubble", "interactive-reply-bubble", "list-message-bubble", "cta-url-bubble", "call-permission"] },
  { label: "Extras", names: ["reaction", "reaction-pill", "action-button", "contact-bubble", "location-bubble", "reply-preview", "forwarded-label", "system-message-bubble", "unsupported-message-bubble"] },
];

export default function Home() {
  const items = getRegistryItems();
  const itemMap = new Map(items.map((i) => [i.name, i]));

  return (
    <div className="min-h-screen bg-page-bg text-page-fg">
      {/* Top nav */}
      <nav className="sticky top-0 z-50 border-b border-page-border bg-page-bg/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-page-accent">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <span className="text-sm font-semibold">WhatsApp UI</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://github.com/froggy1014/wa-ui" target="_blank" rel="noopener noreferrer" className="text-page-muted hover:text-page-fg transition-colors">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden border-b border-page-border">
        {/* Accent glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 left-1/2 h-[340px] w-[680px] max-w-[150vw] -translate-x-1/2 rounded-full bg-page-accent/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 pt-12 pb-10 sm:pt-16 sm:pb-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 lg:items-end">
            {/* Left: Text */}
            <div className="flex-1 min-w-0">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-page-accent/25 bg-page-accent-soft px-3 py-1 text-xs font-medium text-page-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-page-accent" />
                shadcn/ui registry · {items.length} components
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5 bg-gradient-to-br from-page-fg to-page-muted bg-clip-text text-transparent">
                WhatsApp UI
              </h1>

              <p className="text-base sm:text-lg text-page-subtle mb-2 max-w-lg">
                A <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="text-page-accent hover:underline">shadcn/ui</a> registry of WhatsApp Web components, built on the official WDS design tokens.
              </p>
              <p className="text-sm text-page-muted mb-8 max-w-lg">
                Every component uses the same CSS variables that WhatsApp Web ships. Colors, spacing, border radii, and typography are all sourced directly from WDS. Light and dark mode included.
              </p>

              {/* Install command */}
              <div className="mb-6">
                <p className="text-xs text-page-muted uppercase tracking-wider mb-2 font-medium">Quick install</p>
                <div className="flex items-center gap-2 rounded-xl bg-page-code-bg border border-page-accent/20 px-4 py-3 max-w-lg shadow-sm">
                  <code className="text-sm font-mono text-page-accent flex-1 truncate">
                    npx shadcn@latest add {BASE_URL}/r/chat-bubble.json
                  </code>
                  <CopyButton text={`npx shadcn@latest add ${BASE_URL}/r/chat-bubble.json`} />
                </div>
                <p className="text-xs text-page-muted mt-2">Each component is independent. Install only what you need.</p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-3">
                <a href="https://github.com/froggy1014/wa-ui" target="_blank" rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-page-code-bg border border-page-border px-4 py-2 text-sm text-page-subtle hover:text-page-fg hover:border-page-muted active:scale-[0.98] transition-[color,border-color,transform] duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-page-accent">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </a>
                <a href="https://www.npmjs.com/package/meta-cloud-api" target="_blank" rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-page-code-bg border border-page-border px-4 py-2 text-sm text-page-subtle hover:text-page-fg hover:border-page-muted active:scale-[0.98] transition-[color,border-color,transform] duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-page-accent">
                  SDK: meta-cloud-api
                </a>
                <a href="https://playground.meta-cloud-api.site" target="_blank" rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-page-code-bg border border-page-border px-4 py-2 text-sm text-page-subtle hover:text-page-fg hover:border-page-muted active:scale-[0.98] transition-[color,border-color,transform] duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-page-accent">
                  Live Playground
                </a>
              </div>
            </div>

            {/* Right: Chat demo (desktop only) */}
            <div className="hidden lg:block w-[380px] h-[520px] rounded-2xl overflow-hidden border border-page-border shadow-2xl shadow-black/20 dark:shadow-black/40 flex-shrink-0">
              <ChatAnimation />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile chat demo */}
      <section className="lg:hidden border-b border-page-border">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <h2 className="text-sm font-medium text-page-muted uppercase tracking-wider mb-4">Live Demo</h2>
          <div className="h-[480px] rounded-2xl overflow-hidden border border-page-border shadow-xl shadow-black/10 dark:shadow-black/30">
            <ChatAnimation />
          </div>
        </div>
      </section>

      {/* Component catalog */}
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-2">Components</h2>
          <p className="text-page-subtle">
            {items.length} components. Each installs independently with <code className="text-sm font-mono text-page-accent">npx shadcn add</code>.
          </p>
        </div>

        {CATEGORY_ORDER.map((category) => (
          <section key={category.label} className="mb-14">
            <h3 className="text-sm font-medium text-page-muted uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="h-px flex-1 bg-page-border" />
              {category.label}
              <span className="h-px flex-1 bg-page-border" />
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.names.map((name) => {
                const item = itemMap.get(name);
                if (!item) return null;
                const installCmd = `npx shadcn@latest add ${BASE_URL}/r/${item.name}.json`;
                return (
                  <div key={item.name} className="group flex flex-col rounded-xl border border-page-border bg-page-card hover:border-page-muted/30 hover:bg-page-card-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/25 transition-[border-color,background-color,transform,box-shadow] duration-200 overflow-hidden">
                    {/* Live preview — not wrapped in <Link> to avoid nested <a> from interactive previews */}
                    <div className="border-b border-page-border flex-1">
                      <ComponentPreview name={item.name} />
                    </div>
                    {/* Info + install pinned to bottom */}
                    <div className="mt-auto p-4 pb-3 space-y-2">
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <span className="text-sm font-semibold text-page-fg">
                            {item.title}
                          </span>
                          {item.dependencies?.includes("@base-ui/react") && (
                            <span className="shrink-0 rounded-full bg-page-accent-soft px-2 py-0.5 text-[10px] font-medium text-page-accent">
                              base-ui
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-page-subtle line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 rounded-md bg-page-code-bg border border-page-border px-2.5 py-1.5">
                        <code className="text-[10px] font-mono text-page-muted truncate flex-1">
                          {installCmd}
                        </code>
                        <CopyButton text={installCmd} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </main>

      {/* Ecosystem */}
      <section className="border-t border-page-border bg-page-section-bg">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-xl font-bold mb-2">Part of the WhatsApp Developer Ecosystem</h2>
          <p className="text-page-subtle mb-8 max-w-xl">
            Build complete WhatsApp applications with type-safe SDK, pixel-perfect UI, and interactive demos.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a href="https://github.com/froggy1014/meta-cloud-api" target="_blank" rel="noopener noreferrer"
              className="rounded-xl border border-page-border p-5 hover:border-page-muted/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/25 transition-[border-color,transform,box-shadow] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-page-accent">
              <h3 className="font-semibold mb-1">meta-cloud-api</h3>
              <p className="text-xs text-page-subtle">WhatsApp TypeScript SDK. 18 API modules, strict types, zero dependencies.</p>
            </a>
            <a href="https://github.com/froggy1014/wa-ui" target="_blank" rel="noopener noreferrer"
              className="rounded-xl border border-page-accent/30 bg-page-accent-soft p-5 hover:border-page-accent/50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/25 transition-[border-color,transform,box-shadow] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-page-accent">
              <h3 className="font-semibold text-page-accent mb-1">wa-ui</h3>
              <p className="text-xs text-page-subtle">You are here. {items.length} shadcn components with WDS design tokens.</p>
            </a>
            <a href="https://playground.meta-cloud-api.site" target="_blank" rel="noopener noreferrer"
              className="rounded-xl border border-page-border p-5 hover:border-page-muted/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/25 transition-[border-color,transform,box-shadow] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-page-accent">
              <h3 className="font-semibold mb-1">Playground</h3>
              <p className="text-xs text-page-subtle">Interactive SDK demo. Send real WhatsApp messages and see the SDK code.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-page-border py-8">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-page-muted">
          <p>MIT License. Built by <a href="https://github.com/froggy1014" target="_blank" rel="noopener noreferrer" className="text-page-subtle hover:text-page-fg">@froggy1014</a></p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/froggy1014/wa-ui" target="_blank" rel="noopener noreferrer" className="hover:text-page-fg">GitHub</a>
            <a href="https://meta-cloud-api.site" target="_blank" rel="noopener noreferrer" className="hover:text-page-fg">Docs</a>
            <a href="https://github.com/froggy1014/wa-ui/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="hover:text-page-fg">Contributing</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
