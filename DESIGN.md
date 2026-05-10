# WhatsApp UI — Design System

## Overview

WhatsApp UI is a production-ready React component library that faithfully replicates WhatsApp Web's visual language using the official WDS (WhatsApp Design System) design tokens. The design prioritizes familiarity, clarity, and cross-platform consistency.

---

## Color Palette

### Brand / Primary
- **Emerald 500** `#00a884` — Primary interactive color (buttons, icons, accents)
- **Emerald 600** `#008069` — Hover/pressed state, outgoing bubble background
- **Emerald 400** `#06cf9c` — Dark mode accent

### Green Scale (WhatsApp brand)
- **Green 400** `#25d366` — Unread markers, status ring
- **Green 500** `#1daa61` — Progress, success states
- **Green 75**  `#e7fce3` — Reaction pill background (light)

### Surfaces (Light Mode)
- **Background** `#ffffff` — Panel, bubble-incoming
- **BG Deeper** `#f0f2f5` — Compose area, sidebar
- **Conversation BG** `#f5f0e8` — Chat wallpaper base (warm beige)
- **Bubble Outgoing** `#e7ffdb` — Sent message bubble
- **Panel Header** `#ffffff`

### Surfaces (Dark Mode)
- **Background** `#111b21` — Main panel
- **BG Deeper** `#0b141a` — Conversation area, sidebar
- **Panel Header** `#202c33`
- **Bubble Outgoing** `#005c4b` — Dark sent bubble
- **Bubble Incoming** `#202c33` — Dark received bubble

### Text
- **Primary** `#111b21` — Main message text
- **Secondary** `#667781` — Timestamps, subtitles
- **Muted** `#8696a0` — Icons, deemphasized
- **Action / Link** `#008069`
- **Critical** `#ea0038`
- **Success** `#1fa855`

### Semantic Status
- **Read receipts (blue)** `#53bdeb`
- **Delivered** `#8696a0` (light) / `#aebac1` (dark)
- **Unread marker** `#25d366`

---

## Typography

### Font Family
- **Primary**: "Segoe UI", Helvetica Neue, Arial, Ubuntu, sans-serif
- **Mono**: Consolas, Menlo, Monaco, monospace

### Scale
| Level | Size | Weight | Usage |
|-------|------|--------|-------|
| Contact name | 17px | 400 | Chat list item name |
| Message body | 14.2px | 400 | Chat bubble content |
| Timestamp | 11px | 400 | Message time |
| Small meta | 12–13px | 400 | File size, page count |
| Header name | 16px | 600 | Chat header |
| Status text | 13px | 400 | Online status |

---

## Spacing & Sizing

| Token | Value | Usage |
|-------|-------|-------|
| Header height | 59px | ChatHeader |
| Avatar SM | 40px | Chat header avatar |
| Avatar MD | 49px | Chat list avatar |
| Chat spacing | 15px | Message area padding |
| Sidebar width | 360px | Chat list panel |
| Bubble padding | 9px / 7px | Inner bubble horizontal |
| Max bubble width (text) | 60% | Text chat bubble |
| Max bubble width (media) | 336px | Images, files, templates |
| Grid cell | 165×165px | Multi-image grid |
| Video height | 171px | Video bubble |
| Bubble radius | 7.5px | Message bubble corners |

---

## Component Design Language

### Chat Bubbles
- Incoming: white background, tail on left
- Outgoing: `#e7ffdb` (light) / `#005c4b` (dark), tail on right
- Tail: SVG path with 13px height, shadow layer at opacity 0.13
- Reactions: absolute positioned, `-20px` from bottom (outgoing `-14px`)
- Group reactions: single pill with overlapping emojis + total count
- 1:1 reactions: individual pills, no count

### Chat List
- Selected: `mx-2 rounded-xl` pill highlight
- Hover: same rounded pill
- Avatar: name-hash-based color from 10-color WDS palette + initials
- Timestamp: `font-semibold`

### Template Bubbles
- White border-bottom divider between content and buttons
- Button height: 40px, centered icon + label
- copy_code: clipboard SVG icon, Copied! feedback 2s

### Media
- Skeleton: `animate-pulse` gray per cell, fade-in on load
- Video cells: play button overlay + duration badge

### Dark Mode
- Wallpaper pattern: `filter: invert(1)` at opacity 0.08
- Reaction reacted bg: `#005c4b` (dark teal)
- Placeholder bg: `#2a3942`

---

## Motion

- Drawer (CallPermission): `data-[starting-style]:translate-y-full` → `translate-y-0`, 300ms ease-out
- ChatMenu: opacity + scale, 150ms ease-out
- Copy feedback: instant → 2000ms timeout → restore

---

## Iconography

- All UI icons: SVG inline with `fill="currentColor"`
- Template button icons: PNG from Meta CDN, CSS filter to match emerald-500
- Action colors: `--wa-btn-icon-filter` CSS variable converts to correct hue per theme

---

## Accessibility

- All interactive elements: `aria-label` on icon-only buttons
- Reactions: `z-index: 10` above bubble stacking context
- Focus states: provided by `@base-ui/react` primitive components

---

## Design Principles

1. **Pixel-faithful** — Matches real WhatsApp Web sizing, colors, and spacing
2. **Token-first** — All values reference `--wa-*` CSS custom properties
3. **Theme-aware** — Every token has light + dark variant
4. **Composable** — Components accept `variant="incoming|outgoing"` and handle their own layout
5. **Minimal API** — UI-only props, no business logic leakage
