# WhatsApp UI

Production-ready WhatsApp Web components for React. Built on the official WDS (WhatsApp Design System) tokens with full dark mode and `@base-ui/react` primitives.

**[Demo](https://whatsapp-ui.vercel.app)** · **[Registry](https://whatsapp-ui.vercel.app/r/registry.json)**

---

## Install a component

```bash
npx shadcn@latest add https://whatsapp-ui.vercel.app/r/chat-bubble.json
```

## Components

| Component | Description |
|-----------|-------------|
| `chat-bubble` | Text message bubble — incoming/outgoing, group chat, reactions, read receipts |
| `chat-header` | Conversation header with avatar, status, action buttons, custom slot |
| `chat-list-item` | Sidebar list row — avatar initials, unread badge, mute/pin, read receipt |
| `message-input` | Compose bar with emoji, attachment, auto-resize textarea, send/voice toggle |
| `date-separator` | Centered date pill between message groups |
| `typing-indicator` | Animated three-dot incoming indicator |
| `reaction-pill` | Emoji reaction pill — 1:1 (no count) and group (overlapping + total) modes |
| `image-bubble` | Single image, multi-image 2×2 grid (+N overflow), video with play overlay |
| `voice-message-bubble` | Audio playback with waveform, progress, avatar, real `<audio>` support |
| `file-attachment-bubble` | File download with type-color badge, progress bar, native `<a download>` |
| `template-bubble` | Meta Business template — all button types (URL, phone, copy_code, flow, OTP…) |
| `carousel-template` | Horizontal scrollable product cards via `@base-ui/react` ScrollArea |
| `call-permission` | Calling permission request with animated bottom sheet and radio options |
| `message-bubble` | Universal wrapper — attaches reactions to any bubble type |
| `action-button` | Outlined pill button with icon slot, polymorphic via `render` prop |
| `chat-menu` | Context dropdown using `@base-ui/react` Menu with animated popup |

---

## Tech stack

- **Tailwind CSS v4** with `@tailwindcss/vite`
- **@base-ui/react** — Toggle, Progress, ScrollArea, Drawer, Menu, RadioGroup, Button
- **WDS tokens** — Official WhatsApp Design System color/spacing values in CSS custom properties
- **shadcn/ui registry** format — `npx shadcn add` compatible

---

## Local development

```bash
pnpm install
pnpm dev          # Next.js app (demo)
pnpm storybook    # Component stories
pnpm registry:build  # Rebuild /public/r/*.json
```

---

## Design system

See [`DESIGN.md`](./DESIGN.md) for the full token reference — colors, typography, spacing, component patterns, and dark mode behavior.

---

## License

MIT
