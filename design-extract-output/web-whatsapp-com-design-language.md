# Design Language: Unknown Site

> Extracted from `https://web.whatsapp.com/` on May 11, 2026
> 72 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#1b8755` | rgb(27, 135, 85) | hsl(152, 67%, 32%) | 12 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#000000` | hsl(0, 0%, 0%) | 92 |
| `#3b4a54` | hsl(204, 17%, 28%) | 40 |
| `#dbd8d4` | hsl(34, 9%, 85%) | 1 |

### Background Colors

Used on large-area elements: `#dbd8d4`

### Text Colors

Text color palette: `#000000`, `#3b4a54`, `#1b8755`

### Gradients

```css
background-image: linear-gradient(rgb(219, 216, 212), rgb(219, 216, 212));
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#000000` | text, border | 92 |
| `#3b4a54` | text, border | 40 |
| `#1b8755` | text, border | 12 |
| `#dbd8d4` | background | 1 |

## Typography

### Font Families

- **Times** — used for body (46 elements)
- **Segoe UI** — used for all (26 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 16px | 1rem | 400 | normal | normal | html, head, link, meta |

### Heading Scale

```css
h1 { font-size: 16px; font-weight: 400; line-height: normal; }
```

### Body Text

```css
body { font-size: 16px; font-weight: 400; line-height: normal; }
```

### Font Weights in Use

`400` (72x)

## Spacing

## CSS Custom Properties

### Colors

```css
--WDS-accent: var(--WDS-green-500);
--WDS-accent-RGB: var(--WDS-green-500-RGB);
--WDS-accent-deemphasized: var(--WDS-green-100);
--WDS-accent-deemphasized-RGB: var(--WDS-green-100-RGB);
--WDS-accent-emphasized: var(--WDS-green-700);
--WDS-accent-emphasized-RGB: var(--WDS-green-700-RGB);
--WDS-secondary-negative: var(--WDS-red-400);
--WDS-secondary-negative-RGB: var(--WDS-red-400-RGB);
--WDS-secondary-negative-deemphasized: var(--WDS-red-75);
--WDS-secondary-negative-deemphasized-RGB: var(--WDS-red-75-RGB);
--WDS-secondary-negative-emphasized: var(--WDS-red-500);
--WDS-secondary-negative-emphasized-RGB: var(--WDS-red-500-RGB);
--WDS-secondary-positive: var(--WDS-green-500);
--WDS-secondary-positive-RGB: var(--WDS-green-500-RGB);
--WDS-secondary-positive-deemphasized: var(--WDS-green-75);
--WDS-secondary-positive-deemphasized-RGB: var(--WDS-green-75-RGB);
--WDS-secondary-warning: var(--WDS-yellow-400);
--WDS-secondary-warning-RGB: var(--WDS-yellow-400-RGB);
--WDS-secondary-warning-deemphasized: var(--WDS-yellow-75);
--WDS-secondary-warning-deemphasized-RGB: var(--WDS-yellow-75-RGB);
--WDS-content-on-accent: var(--WDS-white);
--WDS-content-on-accent-RGB: var(--WDS-white-RGB);
--WDS-systems-chat-foreground-wallpaper: var(--WDS-cream-200);
--WDS-systems-chat-foreground-wallpaper-RGB: var(--WDS-cream-200-RGB);
--colors-modal-search-bar-height: 49px;
--composer-panel-menu-height-with-border: 45px;
--composer-panel-search-height-with-border: 53px;
--command-palette-border-radius: 10px;
--composer-panel-border-radius: 3px;
--green-accent: #25d366;
--green-accent-rgb: 37, 211, 102;
--secondary-rgb: 102, 119, 129;
--input-border-rgb: 102, 119, 129;
--button-secondary-destructive-hover-color-rgb: 234, 0, 56;
--disabled-round-button-background-color: #e9edef;
--carousel-button-border-color-rgb: 209, 215, 219;
--disabled-round-button-background-color-rgb: 233, 237, 239;
--primary-rgb: 59, 74, 84;
--date-picker-text-color-rgb: 11, 20, 26;
--text-secondary: #667781;
--primary-strongest: #111b21;
--border-bubble: rgba(17, 27, 33, .06);
--thumb-border-active: white;
--border-deeper-rgb: 233, 237, 239;
--panel-primary: rgba(17, 27, 33, .35);
--switch-button-disabled-color: #d1d7db;
--labels-plus-icon-color-rgb: 11, 20, 26;
--status-primary: white;
--video-primary: white;
--reactions-panel-background-color: white;
--poll-invalid-warning-border-sender-rgb: 11, 20, 26;
--date-picker-nav-text-color: white;
--attachment-type-stickers-color-rgb: 2, 166, 152;
--button-primary: white;
--butterbar-primary: #111b21;
--media-editor-thumb-border: #d1d7db;
--butterbar-green-nux-secondary-rgb: 32, 44, 51;
--poll-checkbox-default-border-color-sender: #8696a0;
--attachment-type-catalog-color-rgb: 58, 85, 100;
--incoming-primary-rgb: 136, 141, 144;
--button-primary-destructive-background-hover: #ea0038;
--secondary-stronger: #3b4a54;
--primary-stronger-rgb: 17, 27, 33;
--poll-modal-footer-background-color-rgb: 11, 20, 26;
--poll-selectable-options-icon-hint-color: #54656f;
--button-secondary-destructive-spinner-color: #ea0038;
--voip-primary: white;
--carousel-button-background-color-rgb: 255, 255, 255;
--map-overlay-foreground: #667781;
--compose-input-border: white;
--message-primary: #111b21;
--butterbar-battery-primary-rgb: 255, 255, 255;
--input-border-active: #00a884;
--archived-chat-marker-border: #e9edef;
--secondary-stronger-rgb: 59, 74, 84;
--video-primary-rgb: 255, 255, 255;
--attachment-type-documents-color-rgb: 127, 102, 255;
--attachment-type-contacts-color-rgb: 0, 157, 226;
--butterbar-fatal-secondary-rgb: 32, 44, 51;
--media-editor-thumb-border-rgb: 209, 215, 219;
--butterbar-ad-action-warning-primary-rgb: 17, 27, 33;
--butterbar-battery-primary: white;
--poll-selectable-options-icon-hint-color-rgb: 84, 101, 111;
--button-secondary-hover-rgb: 1, 117, 97;
--text-primary: #111b21;
--icon-secondary: #8696a0;
--button-secondary-background: white;
--reactions-search-color-rgb: 102, 119, 129;
--ptt-ooc-mic-fill-color-rgb: 255, 255, 255;
--button-secondary-hover: #017561;
--chat-marker-border: #e7fce3;
--butterbar-ad-action-warning-secondary: #202c33;
--label-secondary-text: rgba(60, 60, 67, .6);
--date-picker-text-color: #0b141a;
--splashscreen-secondary-lighter: rgba(0, 0, 0, 0.6);
--button-secondary-destructive-spinner-color-rgb: 234, 0, 56;
--secondary-light-rgb: 209, 215, 219;
--vcard-placeholder-background-deeper: rgba(17, 27, 33, .08);
--attachment-type-orders-color-rgb: 0, 157, 226;
--attachment-type-contacts-color: #009de2;
--poll-modal-footer-background-color: rgba(11, 20, 26, .04);
--switch-track-color: #868686;
--ptt-ooc-mic-fill-color: #fff;
--switch-track-checked-color-rgb: 178, 219, 215;
--attachment-type-audio-color-rgb: 250, 101, 51;
--primary-strongest-rgb: 17, 27, 33;
--carousel-button-background-color-active-rgb: 240, 242, 245;
--button-secondary-disabled-background-rgb: 255, 255, 255;
--button-primary-destructive-background: #ea0038;
--ptt-ooc-mic-border-color-rgb: 0, 150, 136;
--vcard-placeholder-background-deeper-rgb: 17, 27, 33;
--date-picker-background-color: white;
--expressions-panel-active-icon-color-rgb: 32, 44, 51;
--icon-primary: #00a884;
--expressions-panel-icon-tab-border: #d1d7db;
--incoming-primary: #888d90;
--conversation-panel-border: #e9edef;
--chip-button-foreground-rgb: 0, 128, 105;
--butterbar-blue-nux-primary: #111b21;
--carousel-button-shadow-color-hover-rgb: 11, 20, 26;
--date-picker-today-background-color-rgb: 0, 128, 105;
--progress-primary: #1daa61;
--reactions-bubble-border-rgb: 0, 0, 0;
--bot-typing-indicator-background-color: #242424;
--wallpaper-thumb-border-hover: white;
--text-primary-rgb: 17, 27, 33;
--media-editor-icon-secondary-color: #8696a0;
--date-picker-header-background-color-rgb: 0, 128, 105;
--attachment-type-polls-color-rgb: 255, 188, 56;
--butterbar-battery-secondary-rgb: 255, 255, 255;
--primary-title: #41525d;
--status-secondary: rgba(255, 255, 255, .55);
--attachment-type-photos-color-rgb: 0, 123, 252;
--poll-invalid-warning-border-receiver-rgb: 240, 242, 245;
--date-picker-background-color-rgb: 255, 255, 255;
--reactions-panel-search-background-color: rgba(0, 0, 0, .05);
--attachment-type-audio-color: #fa6533;
--qc-button-border-rgb: 233, 237, 239;
--poll-invalid-warning-icon-color-rgb: 255, 188, 56;
--conversation-header-border-rgb: 209, 215, 219;
--splashscreen-progress-primary: #1DAA61;
--reactions-panel-search-background-color-rgb: 0, 0, 0;
--butterbar-green-nux-secondary: #202c33;
--butterbar-connection-primary: #111b21;
--button-primary-destructive-spinner-color-rgb: 255, 255, 255;
--attachment-type-camera-color: #ff2e74;
--butterbar-green-nux-primary: #111b21;
--date-picker-header-background-color: #008069;
--poll-invalid-warning-icon-color: #ffbc38;
--secondary: #667781;
--avatar-placeholder-primary: #ffffff;
--attachment-type-photos-color: #007bfc;
--border-bubble-rgb: 17, 27, 33;
--secondary-lighter: #8696a0;
--bot-typing-indicator-background-color-rgb: 36, 36, 36;
--poll-checkbox-default-border-color-sender-rgb: 134, 150, 160;
--status-ring-unread-rgb: 37, 211, 102;
--button-secondary-destructive-color: #ea0038;
--button-primary-rgb: 255, 255, 255;
--switch-button-checked-color-rgb: 1, 133, 121;
--secondary-light: #d1d7db;
--status-ring-unread: #25d366;
--carousel-button-background-color-hover-rgb: 245, 246, 246;
--butterbar-ad-action-warning-secondary-rgb: 32, 44, 51;
--butterbar-ad-action-warning-primary: #111b21;
--label-secondary-text-rgb: 60, 60, 67;
--butterbar-fatal-secondary: #202c33;
--bubbleContentUserColor: #FFFFFF;
--butterbar-blue-nux-secondary-rgb: 32, 44, 51;
--butterbar-ad-action-info-secondary-rgb: 32, 44, 51;
--primary: #3b4a54;
--carousel-button-chevron-color: #54656f;
--attachment-type-polls-color: #ffbc38;
--carousel-button-background-color-hover: rgb(245, 246, 246);
--date-picker-today-background-color: #008069;
--compose-input-border-rgb: 255, 255, 255;
--border-list-rgb: 233, 237, 239;
--switch-track-color-rgb: 134, 134, 134;
--button-primary-background-rgb: 0, 128, 105;
--conversation-header-border: #d1d7db;
--poll-modal-background-color: #fff;
--status-ring-read-rgb: 187, 190, 196;
--primary-strong: #111b21;
--primary-muted-rgb: 102, 119, 129;
--button-primary-destructive-color: white;
--button-secondary-rgb: 0, 128, 105;
--x17m3bg8: 0px;
--x1lwowbg: #FFD279;
--round-entry-point-background-color: rgba(11, 20, 26, .2);
--thumb-border-viewer-active: #d1d7db;
--panel-background-colored-deeper-rgb: 0, 128, 105;
--media-inner-border-rgb: 11, 20, 26;
--thumb-border-viewer-active-rgb: 209, 215, 219;
--butterbar-blue-nux-secondary: #202c33;
--input-border: #667781;
--butterbar-ad-action-info-primary-rgb: 17, 27, 33;
--attachment-type-quick-replies-color-rgb: 255, 188, 56;
--qc-button-border: #e9edef;
--switch-button-color: #ececec;
--map-overlay-foreground-rgb: 102, 119, 129;
--border-strong-rgb: 233, 237, 239;
--button-secondary-border: #e9edef;
--icon-primary-rgb: 0, 168, 132;
--round-entry-point-background-color-rgb: 11, 20, 26;
--message-primary-rgb: 17, 27, 33;
--panel-background-colored: #008069;
--attachment-type-event-color-rgb: 255, 46, 116;
--button-primary-background: #008069;
--media-editor-icon-color-rgb: 84, 101, 111;
--text-secondary-lighter-rgb: 102, 119, 129;
--reactions-picker-bg: rgb(242, 242, 247);
--button-primary-destructive-color-rgb: 255, 255, 255;
--border-panel: #e9edef;
--input-border-active-rgb: 0, 168, 132;
--bot-suggestion-background-color: rgba(255, 255, 255, .5);
--status-link-preview-secondary: #667781;
--chip-button-foreground: #008069;
--icon-secondary-rgb: 134, 150, 160;
--button-secondary-destructive-color-rgb: 234, 0, 56;
--filters-item-color: #54656f;
--intro-secondary-rgb: 102, 119, 129;
--qc-button-border-active: #d1d7db;
--panel-primary-rgb: 17, 27, 33;
--ptt-ooc-mic-border-color: #009688;
--border-default: #e9edef;
--attachment-type-stickers-color: #02a698;
--wallpaper-thumb-border-hover-rgb: 255, 255, 255;
--text-secondary-emphasized-rgb: 84, 101, 111;
--compose-input-border-focused: #ccebf9;
--expressions-panel-icon-tab-border-rgb: 209, 215, 219;
--bot-command-pill-background-color: #f7f8fa;
--butterbar-fatal-primary: #111b21;
--wallpaper-thumb-border-active: #009de2;
--switch-button-color-rgb: 236, 236, 236;
--intro-secondary: #667781;
--butterbar-blue-nux-primary-rgb: 17, 27, 33;
--attach-media-drop-border-rgb: 11, 20, 26;
--switch-track-checked-color: #b2dbd7;
--filters-item-active-color: #008069;
--avatar-placeholder-primary-rgb: 255, 255, 255;
--switch-button-checked-color: #018579;
--text-muted: #8696a0;
--switch-track-disabled-color: #e9edef;
--conversation-panel-border-rgb: 233, 237, 239;
--ptt-draft-waveform-background-border: #f7f8fa;
--butterbar-fatal-primary-rgb: 17, 27, 33;
--panel-background-colored-rgb: 0, 128, 105;
--media-editor-icon-color: #54656f;
--border-strong: #e9edef;
--text-secondary-rgb: 102, 119, 129;
--navbar-border: #e9edef;
--status-secondary-rgb: 255, 255, 255;
--avatar-border: white;
--carousel-button-border-color: #d1d7db;
--x3nbg8q: 0;
--secondary-lighter-rgb: 134, 150, 160;
--reactions-search-color: rgb(102, 119, 129);
--button-primary-background-hover: #017561;
--attachment-type-documents-color: #7f66ff;
--button-secondary: #008069;
--button-primary-destructive-background-hover-rgb: 234, 0, 56;
--bot-suggestion-background-color-rgb: 255, 255, 255;
--text-primary-strong-rgb: 17, 27, 33;
--primary-muted: #667781;
--button-secondary-destructive-outline: #f15c6d;
--button-primary-destructive-background-rgb: 234, 0, 56;
--date-picker-today-text-color-rgb: 255, 255, 255;
--text-muted-rgb: 134, 150, 160;
--butterbar-primary-rgb: 17, 27, 33;
--button-primary-background-hover-rgb: 1, 117, 97;
--archived-chat-marker-border-rgb: 233, 237, 239;
--media-inner-border: rgba(11, 20, 26, .1);
--media-editor-icon-secondary-color-rgb: 134, 150, 160;
--vcard-placeholder-background: rgba(17, 27, 33, .04);
--border-panel-rgb: 233, 237, 239;
--labels-plus-icon-color: #0b141a;
--compose-input-border-focused-rgb: 204, 235, 249;
--button-primary-destructive-spinner-color: white;
--button-secondary-destructive-outline-rgb: 241, 92, 109;
--attachment-type-camera-color-rgb: 255, 46, 116;
--butterbar-connection-secondary-rgb: 32, 44, 51;
--poll-modal-background-color-rgb: 255, 255, 255;
--border-stronger-rgb: 233, 237, 239;
--carousel-button-shadow-color-hover: rgba(11, 20, 26, .4);
--poll-invalid-warning-border-receiver: #f0f2f5;
--date-picker-today-text-color: white;
--button-primary-destructive-outline: #f15c6d;
--text-secondary-lighter: #667781;
--attach-media-drop-border: rgba(11, 20, 26, .3);
--progress-primary-rgb: 29, 170, 97;
--button-secondary-destructive-hover-color: #ea0038;
--carousel-button-shadow-color: rgba(11, 20, 26, .2);
--primary-stronger: #111b21;
--wallpaper-thumb-border-active-rgb: 0, 157, 226;
--buttonSendBackgroundColor: #0866FF;
--button-secondary-background-rgb: 255, 255, 255;
--attachment-type-event-color: #ff2e74;
--status-link-preview-secondary-rgb: 102, 119, 129;
--panel-background-colored-deeper: #008069;
--ptt-draft-waveform-background-border-rgb: 247, 248, 250;
--carousel-button-shadow-color-rgb: 11, 20, 26;
--bubbleContentUserBackgroundColor: #000000;
--voip-primary-rgb: 255, 255, 255;
--butterbar-green-nux-primary-rgb: 17, 27, 33;
--status-primary-rgb: 255, 255, 255;
--primary-strong-rgb: 17, 27, 33;
--butterbar-connection-primary-rgb: 17, 27, 33;
--avatar-border-rgb: 255, 255, 255;
--button-primary-destructive-outline-rgb: 241, 92, 109;
--butterbar-secondary: #202c33;
--thumb-border-active-rgb: 255, 255, 255;
--attachment-type-catalog-color: #3a5564;
--reactions-bubble-border: rgba(0, 0, 0, .05);
--vcard-placeholder-background-rgb: 17, 27, 33;
--media-editor-thumb-border-active: #00a884;
--switch-track-disabled-color-rgb: 233, 237, 239;
--border-deeper: #e9edef;
--butterbar-battery-secondary: white;
--button-secondary-border-rgb: 233, 237, 239;
--reactions-panel-background-color-rgb: 255, 255, 255;
--status-ring-read: #bbbec4;
--filters-item-color-rgb: 84, 101, 111;
--attachment-type-orders-color: #009de2;
--qc-button-border-active-rgb: 209, 215, 219;
--butterbar-ad-action-info-primary: #111b21;
--expressions-panel-active-icon-color: #202c33;
--border-list: #e9edef;
--splashscreen-primary-title: #0A0A0A;
--bot-command-pill-background-color-rgb: 247, 248, 250;
--primary-title-rgb: 65, 82, 93;
--reactions-picker-bg-rgb: 242, 242, 247;
--border-default-rgb: 233, 237, 239;
--media-editor-thumb-border-active-rgb: 0, 168, 132;
--attachment-type-quick-replies-color: #ffbc38;
--butterbar-ad-action-info-secondary: #202c33;
--button-secondary-disabled-background: white;
--carousel-button-background-color: white;
--butterbar-secondary-rgb: 32, 44, 51;
--carousel-button-chevron-color-rgb: 84, 101, 111;
--switch-button-disabled-color-rgb: 209, 215, 219;
--text-secondary-emphasized: #54656f;
--butterbar-connection-secondary: #202c33;
--carousel-button-background-color-active: #f0f2f5;
--filters-item-active-color-rgb: 0, 128, 105;
--navbar-border-rgb: 233, 237, 239;
--border-stronger: #e9edef;
--chat-marker-border-rgb: 231, 252, 227;
--text-primary-strong: #111b21;
--date-picker-nav-text-color-rgb: 255, 255, 255;
--poll-invalid-warning-border-sender: rgba(11, 20, 26, .1);
```

### Spacing

```css
--WDS-content-deemphasized: var(--WDS-cool-gray-600);
--WDS-content-deemphasized-RGB: var(--WDS-cool-gray-600-RGB);
--WDS-content-action-emphasized: var(--WDS-green-600);
--WDS-content-action-emphasized-RGB: var(--WDS-green-600-RGB);
--WDS-surface-emphasized: var(--WDS-warm-gray-75);
--WDS-surface-emphasized-RGB: var(--WDS-warm-gray-75-RGB);
--WDS-surface-elevated-emphasized: var(--WDS-warm-gray-75);
--WDS-surface-elevated-emphasized-RGB: var(--WDS-warm-gray-75-RGB);
--WDS-lines-outline-deemphasized: var(--WDS-cool-gray-alpha-20);
--WDS-lines-outline-deemphasized-RGB: var(--WDS-cool-gray-alpha-20-RGB);
--WDS-systems-bubble-content-deemphasized: var(--WDS-cool-gray-alpha-50);
--WDS-systems-bubble-content-deemphasized-RGB: var( --WDS-cool-gray-alpha-50-RGB );
--font-family-monospace: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, Courier, monospace;
--chat-spacing: 15px;
--sticker-size-store: 72px;
--sticker-size-details: 256px;
--padding-psa-message: 22px;
--padding-drawer-bottom: 32px;
--padding-drawer-side: 24px;
--sticker-size-panel: 100px;
--compose-box-top-bottom-padding: 5px;
--compose-box-left-right-padding: 16px;
--compose-box-menu-item-spacing: 16px;
--width-album-extra-padding: 3px;
--preview-thumb-size: 90px;
--preview-thumb-size-small: 52px;
--bot-plugin-carouse-preview-thumb-size: 55px;
--thumb-spacing: 6px;
--bubble-padding: 3px;
--text-size-small: 12.6px;
--quote-right-margin: 64px;
--quote-left-margin: 64px;
--bubble-padding-polls-horizontal: 8px;
--bubble-padding-start: 9px;
--bubble-padding-end: 7px;
--composer-panel-search-padding-bottom: 10px;
--compose-box-input-side-margin: 12px;
--gif-gap-size: 6px;
--animated-emoji-size-conversation: 60px;
--animated-emoji-outer-bounding-box-size-conversation: 120px;
--padding-header-rtl-mac-fix: 78px;
--chat-spacing-adj: 18px;
--compose-box-emoji-icon-size: 26px;
--compose-box-ptt-icon-size: 24px;
--sticker-size-compose-box-quoted: 40px;
--sticker-size-compose-box: 60px;
--sticker-size-conversation: 125px;
--sticker-size-conversation-large: 190px;
--sticker-size-quoted: 48px;
--sticker-size-expressions-panel: 60px;
--sticker-size-expressions-panel-bigger: 80px;
--sticker-size-expressions-panel-more: 86px;
--emoji-size-medium: 24px;
--emoji-size-large: 36px;
--emoji-size-xlarge: 48px;
--emoji-size-xlarge-60: 60px;
```

### Typography

```css
--line-height-quoted: 20px;
--line-height-quoted-author: 22px;
--drawer-header-line-height: 23px;
--text-disabled-rgb: 209, 215, 219;
--block-quote-text-rgb: 17, 27, 33;
--pill-text: rgba(84, 101, 111, .85);
--text-medium-emphasis-rgb: 102, 119, 129;
--notification-e2e-text: #54656f;
--toast-text: white;
--text-critical-rgb: 234, 0, 56;
--text-action: #008069;
--product-thumb-overlay-text: white;
--rich-text-panel-background-rgb: 240, 242, 245;
--text-teal: #008069;
--notification-non-e2e-text-rgb: 84, 101, 111;
--text-success-rgb: 31, 168, 85;
--pill-text-rgb: 84, 101, 111;
--ptt-text-rgb: 255, 255, 255;
--block-quote-text: rgba(17, 27, 33, .65);
--unread-marker-text: white;
--text-success: #1fa855;
--menu-context-transparent-icon-inverse-rgb: 255, 255, 255;
--unread-marker-text-rgb: 255, 255, 255;
--notification-non-e2e-text: #54656f;
--menu-context-transparent-icon-rgb: 17, 27, 33;
--forwarded-indicator-text-rgb: 134, 150, 160;
--text-teal-rgb: 0, 128, 105;
--quoted-message-text-rgb: 102, 119, 129;
--menu-context-transparent-icon: rgba(17, 27, 33, .5);
--text-action-rgb: 0, 128, 105;
--rich-text-panel-background: #f0f2f5;
--toast-text-rgb: 255, 255, 255;
--text-critical: #ea0038;
--system-message-text-rgb: 84, 101, 111;
--quoted-message-text: #667781;
--notification-e2e-text-rgb: 84, 101, 111;
--notification-biz-text: rgba(17, 27, 33, .96);
--system-message-text: #54656f;
--ptt-text: white;
--forwarded-indicator-text: #8696a0;
--bot-command-text-rgb: 2, 126, 181;
--tooltip-text: white;
--tooltip-text-rgb: 255, 255, 255;
--bot-command-text: #027eb5;
--notification-biz-text-rgb: 17, 27, 33;
--text-medium-emphasis: #667781;
--label-disabled-text: #d1d7db;
--text-disabled: #d1d7db;
--product-thumb-overlay-text-rgb: 255, 255, 255;
--menu-context-transparent-icon-inverse: white;
--label-disabled-text-rgb: 209, 215, 219;
```

### Shadows

```css
--shadow-rgb: 11, 20, 26;
--shadow-light-rgb: 11, 20, 26;
--shadow: #0b141a;
--shadow-light: rgba(11, 20, 26, .08);
```

### Radii

```css
--radius-thumb: 6px;
--radius-app: 3px;
--blur-radius-thumbnail: 8px;
--radius-bubble: 7.5px;
--radius-compose: 7.5px;
```

### Other

```css
--WDS-neutral-gray-50: #fafafa;
--WDS-neutral-gray-50-RGB: 250, 250, 250;
--WDS-neutral-gray-75: #f4f4f4;
--WDS-neutral-gray-75-RGB: 244, 244, 244;
--WDS-neutral-gray-100: #eeeeee;
--WDS-neutral-gray-100-RGB: 238, 238, 238;
--WDS-neutral-gray-200: #d8d8d8;
--WDS-neutral-gray-200-RGB: 216, 216, 216;
--WDS-neutral-gray-300: #bdbdbd;
--WDS-neutral-gray-300-RGB: 189, 189, 189;
--WDS-neutral-gray-400: #959393;
--WDS-neutral-gray-400-RGB: 149, 147, 147;
--WDS-neutral-gray-500: #757778;
--WDS-neutral-gray-500-RGB: 117, 119, 120;
--WDS-neutral-gray-600: #606263;
--WDS-neutral-gray-600-RGB: 96, 98, 99;
--WDS-neutral-gray-700: #424445;
--WDS-neutral-gray-700-RGB: 66, 68, 69;
--WDS-neutral-gray-800: #242626;
--WDS-neutral-gray-800-RGB: 36, 38, 38;
--WDS-neutral-gray-850: #1d1f1f;
--WDS-neutral-gray-850-RGB: 29, 31, 31;
--WDS-neutral-gray-900: #161717;
--WDS-neutral-gray-900-RGB: 22, 23, 23;
--WDS-neutral-gray-1000: #0a0a0a;
--WDS-neutral-gray-1000-RGB: 10, 10, 10;
--WDS-cool-gray-50: #f7f8fa;
--WDS-cool-gray-50-RGB: 247, 248, 250;
--WDS-cool-gray-75: #f1f2f4;
--WDS-cool-gray-75-RGB: 241, 242, 244;
--WDS-cool-gray-100: #eaedee;
--WDS-cool-gray-100-RGB: 234, 237, 238;
--WDS-cool-gray-200: #d4d6d8;
--WDS-cool-gray-200-RGB: 212, 214, 216;
--WDS-cool-gray-300: #b3b9bd;
--WDS-cool-gray-300-RGB: 179, 185, 189;
--WDS-cool-gray-400: #8d9599;
--WDS-cool-gray-400-RGB: 141, 149, 153;
--WDS-cool-gray-500: #6c757a;
--WDS-cool-gray-500-RGB: 108, 117, 122;
--WDS-cool-gray-600: #5b6368;
--WDS-cool-gray-600-RGB: 91, 99, 104;
--WDS-cool-gray-700: #3e474d;
--WDS-cool-gray-700-RGB: 62, 71, 77;
--WDS-cool-gray-800: #20272b;
--WDS-cool-gray-800-RGB: 32, 39, 43;
--WDS-cool-gray-900: #12181c;
--WDS-cool-gray-900-RGB: 18, 24, 28;
--WDS-cool-gray-1000: #0a1014;
--WDS-cool-gray-1000-RGB: 10, 16, 20;
--WDS-cool-gray-alpha-05: rgba(17, 27, 33, .05);
--WDS-cool-gray-alpha-05-RGB: 17, 27, 33;
--WDS-cool-gray-alpha-10: rgba(17, 27, 33, .1);
--WDS-cool-gray-alpha-10-RGB: 17, 27, 33;
--WDS-cool-gray-alpha-20: rgba(17, 27, 33, .2);
--WDS-cool-gray-alpha-20-RGB: 17, 27, 33;
--WDS-cool-gray-alpha-30: rgba(17, 27, 33, .3);
--WDS-cool-gray-alpha-30-RGB: 17, 27, 33;
--WDS-cool-gray-alpha-40: rgba(17, 27, 33, .4);
--WDS-cool-gray-alpha-40-RGB: 17, 27, 33;
--WDS-cool-gray-alpha-50: rgba(17, 27, 33, .5);
--WDS-cool-gray-alpha-50-RGB: 17, 27, 33;
--WDS-cool-gray-alpha-60: rgba(17, 27, 33, .6);
--WDS-cool-gray-alpha-60-RGB: 17, 27, 33;
--WDS-cool-gray-alpha-70: rgba(17, 27, 33, .7);
--WDS-cool-gray-alpha-70-RGB: 17, 27, 33;
--WDS-cool-gray-alpha-80: rgba(17, 27, 33, .8);
--WDS-cool-gray-alpha-80-RGB: 17, 27, 33;
--WDS-cool-gray-alpha-90: rgba(17, 27, 33, .9);
--WDS-cool-gray-alpha-90-RGB: 17, 27, 33;
--WDS-warm-gray-50: #fbfaf9;
--WDS-warm-gray-50-RGB: 251, 250, 249;
--WDS-warm-gray-75: #f7f5f3;
--WDS-warm-gray-75-RGB: 247, 245, 243;
--WDS-warm-gray-100: #f1eeeb;
--WDS-warm-gray-100-RGB: 241, 238, 235;
--WDS-warm-gray-200: #dbd8d4;
--WDS-warm-gray-200-RGB: 219, 216, 212;
--WDS-warm-gray-300: #c2bdb8;
--WDS-warm-gray-300-RGB: 194, 189, 184;
--WDS-warm-gray-400: #9f9891;
--WDS-warm-gray-400-RGB: 159, 152, 145;
--WDS-warm-gray-500: #7c7771;
--WDS-warm-gray-500-RGB: 124, 119, 113;
--WDS-warm-gray-600: #66625d;
--WDS-warm-gray-600-RGB: 102, 98, 93;
--WDS-warm-gray-700: #474440;
--WDS-warm-gray-700-RGB: 71, 68, 64;
--WDS-warm-gray-800: #262524;
--WDS-warm-gray-800-RGB: 38, 37, 36;
--WDS-warm-gray-900: #171616;
--WDS-warm-gray-900-RGB: 23, 22, 22;
--WDS-warm-gray-1000: #0b0a0a;
--WDS-warm-gray-1000-RGB: 11, 10, 10;
--WDS-warm-gray-300-alpha-15: rgba(194, 189, 184, .15);
--WDS-warm-gray-300-alpha-15-RGB: 194, 189, 184;
--WDS-green-50: #f2fdf0;
--WDS-green-50-RGB: 242, 253, 240;
--WDS-green-75: #e7fce3;
--WDS-green-75-RGB: 231, 252, 227;
--WDS-green-100: #d9fdd3;
--WDS-green-100-RGB: 217, 253, 211;
--WDS-green-200: #acfcac;
--WDS-green-200-RGB: 172, 252, 172;
--WDS-green-300: #71eb85;
--WDS-green-300-RGB: 113, 235, 133;
--WDS-green-400: #25d366;
--WDS-green-400-RGB: 37, 211, 102;
--WDS-green-450: #21c063;
--WDS-green-450-RGB: 33, 192, 99;
--WDS-green-500: #1daa61;
--WDS-green-500-RGB: 29, 170, 97;
--WDS-green-600: #1b8755;
--WDS-green-600-RGB: 27, 135, 85;
--WDS-green-700: #15603e;
--WDS-green-700-RGB: 21, 96, 62;
--WDS-green-750: #144d37;
--WDS-green-750-RGB: 20, 77, 55;
--WDS-green-800: #103529;
--WDS-green-800-RGB: 16, 53, 41;
--WDS-green-500-alpha-30: rgba(29, 170, 97, .3);
--WDS-green-500-alpha-30-RGB: 29, 170, 97;
--WDS-green-500-alpha-60: rgba(29, 170, 97, .6);
--WDS-green-500-alpha-60-RGB: 29, 170, 97;
--WDS-red-50: #feeff2;
--WDS-red-50-RGB: 254, 239, 242;
--WDS-red-75: #fde8eb;
--WDS-red-75-RGB: 253, 232, 235;
--WDS-red-100: #fbd8dc;
--WDS-red-100-RGB: 251, 216, 220;
--WDS-red-200: #fa99a4;
--WDS-red-200-RGB: 250, 153, 164;
--WDS-red-300: #fb5061;
--WDS-red-300-RGB: 251, 80, 97;
--WDS-red-400: #ea0038;
--WDS-red-400-RGB: 234, 0, 56;
--WDS-red-500: #b80531;
--WDS-red-500-RGB: 184, 5, 49;
--WDS-red-600: #911435;
--WDS-red-600-RGB: 145, 20, 53;
--WDS-red-700: #61182e;
--WDS-red-700-RGB: 97, 24, 46;
--WDS-red-800: #321622;
--WDS-red-800-RGB: 50, 22, 34;
--WDS-red-400-alpha-30: rgba(234, 0, 56, .3);
--WDS-red-400-alpha-30-RGB: 234, 0, 56;
--WDS-orange-50: #fff7f5;
--WDS-orange-50-RGB: 255, 247, 245;
--WDS-orange-75: #ffebe6;
--WDS-orange-75-RGB: 255, 235, 230;
--WDS-orange-100: #fee2d8;
--WDS-orange-100-RGB: 254, 226, 216;
--WDS-orange-200: #fdc1ad;
--WDS-orange-200-RGB: 253, 193, 173;
--WDS-orange-300: #fc9775;
--WDS-orange-300-RGB: 252, 151, 117;
--WDS-orange-400: #fa6533;
--WDS-orange-400-RGB: 250, 101, 51;
--WDS-orange-500: #c4532d;
--WDS-orange-500-RGB: 196, 83, 45;
--WDS-orange-600: #9a4529;
--WDS-orange-600-RGB: 154, 69, 41;
--WDS-orange-700: #6b3424;
--WDS-orange-700-RGB: 107, 52, 36;
--WDS-orange-800: #35221e;
--WDS-orange-800-RGB: 53, 34, 30;
--WDS-yellow-50: #fffcf5;
--WDS-yellow-50-RGB: 255, 252, 245;
--WDS-yellow-75: #fff7e5;
--WDS-yellow-75-RGB: 255, 247, 229;
--WDS-yellow-100: #fff0d4;
--WDS-yellow-100-RGB: 255, 240, 212;
--WDS-yellow-200: #ffe4af;
--WDS-yellow-200-RGB: 255, 228, 175;
--WDS-yellow-300: #ffd279;
--WDS-yellow-300-RGB: 255, 210, 121;
--WDS-yellow-400: #ffb938;
--WDS-yellow-400-RGB: 255, 185, 56;
--WDS-yellow-500: #c58730;
--WDS-yellow-500-RGB: 197, 135, 48;
--WDS-yellow-600: #9d6c2c;
--WDS-yellow-600-RGB: 157, 108, 44;
--WDS-yellow-700: #6d4e26;
--WDS-yellow-700-RGB: 109, 78, 38;
--WDS-yellow-800: #362c1f;
--WDS-yellow-800-RGB: 54, 44, 31;
--WDS-purple-50: #f7f5ff;
--WDS-purple-50-RGB: 247, 245, 255;
--WDS-purple-75: #efebff;
--WDS-purple-75-RGB: 239, 235, 255;
--WDS-purple-100: #e8e0ff;
--WDS-purple-100-RGB: 232, 224, 255;
--WDS-purple-200: #d1c4ff;
--WDS-purple-200-RGB: 209, 196, 255;
--WDS-purple-300: #a791ff;
--WDS-purple-300-RGB: 167, 145, 255;
--WDS-purple-400: #7f66ff;
--WDS-purple-400-RGB: 127, 102, 255;
--WDS-purple-500: #5e47de;
--WDS-purple-500-RGB: 94, 71, 222;
--WDS-purple-600: #4837af;
--WDS-purple-600-RGB: 72, 55, 175;
--WDS-purple-700: #3a327b;
--WDS-purple-700-RGB: 58, 50, 123;
--WDS-purple-800: #242447;
--WDS-purple-800-RGB: 36, 36, 71;
--WDS-cobalt-50: #f2f8ff;
--WDS-cobalt-50-RGB: 242, 248, 255;
--WDS-cobalt-75: #e1f0ff;
--WDS-cobalt-75-RGB: 225, 240, 255;
--WDS-cobalt-100: #d2e8fe;
--WDS-cobalt-100-RGB: 210, 232, 254;
--WDS-cobalt-200: #99cafe;
--WDS-cobalt-200-RGB: 153, 202, 254;
--WDS-cobalt-300: #53a6fd;
--WDS-cobalt-300-RGB: 83, 166, 253;
--WDS-cobalt-400: #007bfc;
--WDS-cobalt-400-RGB: 0, 123, 252;
--WDS-cobalt-500: #0063cb;
--WDS-cobalt-500-RGB: 0, 99, 203;
--WDS-cobalt-600: #0451a3;
--WDS-cobalt-600-RGB: 4, 81, 163;
--WDS-cobalt-700: #073d76;
--WDS-cobalt-700-RGB: 7, 61, 118;
--WDS-cobalt-800: #092642;
--WDS-cobalt-800-RGB: 9, 38, 66;
--WDS-sky-blue-50: #f2fafe;
--WDS-sky-blue-50-RGB: 242, 250, 254;
--WDS-sky-blue-75: #def3fc;
--WDS-sky-blue-75-RGB: 222, 243, 252;
--WDS-sky-blue-100: #caecfa;
--WDS-sky-blue-100-RGB: 202, 236, 250;
--WDS-sky-blue-200: #93d7f5;
--WDS-sky-blue-200-RGB: 147, 215, 245;
--WDS-sky-blue-300: #53bdeb;
--WDS-sky-blue-300-RGB: 83, 189, 235;
--WDS-sky-blue-400: #009de2;
--WDS-sky-blue-400-RGB: 0, 157, 226;
--WDS-sky-blue-500: #027eb5;
--WDS-sky-blue-500-RGB: 2, 126, 181;
--WDS-sky-blue-600: #046692;
--WDS-sky-blue-600-RGB: 4, 102, 146;
--WDS-sky-blue-700: #074b6a;
--WDS-sky-blue-700-RGB: 7, 75, 106;
--WDS-sky-blue-800: #092c3d;
--WDS-sky-blue-800-RGB: 9, 44, 61;
--WDS-pink-50: #fff5f8;
--WDS-pink-50-RGB: 255, 245, 248;
--WDS-pink-75: #ffebf1;
--WDS-pink-75-RGB: 255, 235, 241;
--WDS-pink-100: #ffdae7;
--WDS-pink-100-RGB: 255, 218, 231;
--WDS-pink-200: #ffabc7;
--WDS-pink-200-RGB: 255, 171, 199;
--WDS-pink-300: #ff72a1;
--WDS-pink-300-RGB: 255, 114, 161;
--WDS-pink-400: #ff2e74;
--WDS-pink-400-RGB: 255, 46, 116;
--WDS-pink-500: #d42a66;
--WDS-pink-500-RGB: 212, 42, 102;
--WDS-pink-600: #a32553;
--WDS-pink-600-RGB: 163, 37, 83;
--WDS-pink-700: #6d1e3e;
--WDS-pink-700-RGB: 109, 30, 62;
--WDS-pink-800: #36192a;
--WDS-pink-800-RGB: 54, 25, 42;
--WDS-emerald-50: #f0fff9;
--WDS-emerald-50-RGB: 240, 255, 249;
--WDS-emerald-75: #e1fef2;
--WDS-emerald-75-RGB: 225, 254, 242;
--WDS-emerald-100: #d5fded;
--WDS-emerald-100-RGB: 213, 253, 237;
--WDS-emerald-200: #b2f5da;
--WDS-emerald-200-RGB: 178, 245, 218;
--WDS-emerald-300: #7ae3c3;
--WDS-emerald-300-RGB: 122, 227, 195;
--WDS-emerald-400: #06cf9c;
--WDS-emerald-400-RGB: 6, 207, 156;
--WDS-emerald-500: #00a884;
--WDS-emerald-500-RGB: 0, 168, 132;
--WDS-emerald-600: #008069;
--WDS-emerald-600-RGB: 0, 128, 105;
--WDS-emerald-700: #125c4e;
--WDS-emerald-700-RGB: 18, 92, 78;
--WDS-emerald-800: #0a332c;
--WDS-emerald-800-RGB: 10, 51, 44;
--WDS-teal-50: #edfafa;
--WDS-teal-50-RGB: 237, 250, 250;
--WDS-teal-75: #dff6f5;
--WDS-teal-75-RGB: 223, 246, 245;
--WDS-teal-100: #cbf2ee;
--WDS-teal-100-RGB: 203, 242, 238;
--WDS-teal-200: #95dbd4;
--WDS-teal-200-RGB: 149, 219, 212;
--WDS-teal-300: #42c7b8;
--WDS-teal-300-RGB: 66, 199, 184;
--WDS-teal-400: #02a698;
--WDS-teal-400-RGB: 2, 166, 152;
--WDS-teal-500: #028377;
--WDS-teal-500-RGB: 2, 131, 119;
--WDS-teal-600: #046a62;
--WDS-teal-600-RGB: 4, 106, 98;
--WDS-teal-700: #074d4a;
--WDS-teal-700-RGB: 7, 77, 74;
--WDS-teal-800: #092d2f;
--WDS-teal-800-RGB: 9, 45, 47;
--WDS-cream-50: #faf8f5;
--WDS-cream-50-RGB: 250, 248, 245;
--WDS-cream-75: #f5f1eb;
--WDS-cream-75-RGB: 245, 241, 235;
--WDS-cream-85: #f1ebe3;
--WDS-cream-85-RGB: 241, 235, 227;
--WDS-cream-100: #efe9e0;
--WDS-cream-100-RGB: 239, 233, 224;
--WDS-cream-200: #e5dbcd;
--WDS-cream-200-RGB: 229, 219, 205;
--WDS-cream-300: #d4c3ab;
--WDS-cream-300-RGB: 212, 195, 171;
--WDS-cream-400: #c1a886;
--WDS-cream-400-RGB: 193, 168, 134;
--WDS-cream-500: #9f8465;
--WDS-cream-500-RGB: 159, 132, 101;
--WDS-cream-600: #7b654c;
--WDS-cream-600-RGB: 123, 101, 76;
--WDS-cream-700: #504334;
--WDS-cream-700-RGB: 80, 67, 52;
--WDS-cream-800: #2c2720;
--WDS-cream-800-RGB: 44, 39, 32;
--WDS-brown-50: #fef9f6;
--WDS-brown-50-RGB: 254, 249, 246;
--WDS-brown-75: #fcede3;
--WDS-brown-75-RGB: 252, 237, 227;
--WDS-brown-100: #f4ded1;
--WDS-brown-100-RGB: 244, 222, 209;
--WDS-brown-200: #e5c6b2;
--WDS-brown-200-RGB: 229, 198, 178;
--WDS-brown-300: #dba685;
--WDS-brown-300-RGB: 219, 166, 133;
--WDS-brown-400: #c0835d;
--WDS-brown-400-RGB: 192, 131, 93;
--WDS-brown-500: #9e6947;
--WDS-brown-500-RGB: 158, 105, 71;
--WDS-brown-600: #855538;
--WDS-brown-600-RGB: 133, 85, 56;
--WDS-brown-700: #5b3c29;
--WDS-brown-700-RGB: 91, 60, 41;
--WDS-brown-800: #35271e;
--WDS-brown-800-RGB: 53, 39, 30;
--WDS-white-alpha-05: rgba(255, 255, 255, .05);
--WDS-white-alpha-05-RGB: 255, 255, 255;
--WDS-white-alpha-10: rgba(255, 255, 255, .1);
--WDS-white-alpha-10-RGB: 255, 255, 255;
--WDS-white-alpha-20: rgba(255, 255, 255, .2);
--WDS-white-alpha-20-RGB: 255, 255, 255;
--WDS-white-alpha-30: rgba(255, 255, 255, .3);
--WDS-white-alpha-30-RGB: 255, 255, 255;
--WDS-white-alpha-40: rgba(255, 255, 255, .4);
--WDS-white-alpha-40-RGB: 255, 255, 255;
--WDS-white-alpha-50: rgba(255, 255, 255, .5);
--WDS-white-alpha-50-RGB: 255, 255, 255;
--WDS-white-alpha-60: rgba(255, 255, 255, .6);
--WDS-white-alpha-60-RGB: 255, 255, 255;
--WDS-white-alpha-70: rgba(255, 255, 255, .7);
--WDS-white-alpha-70-RGB: 255, 255, 255;
--WDS-white-alpha-80: rgba(255, 255, 255, .8);
--WDS-white-alpha-80-RGB: 255, 255, 255;
--WDS-white-alpha-90: rgba(255, 255, 255, .9);
--WDS-white-alpha-90-RGB: 255, 255, 255;
--WDS-white: #ffffff;
--WDS-white-RGB: 255, 255, 255;
--WDS-black-alpha-05: rgba(0, 0, 0, .05);
--WDS-black-alpha-05-RGB: 0, 0, 0;
--WDS-black-alpha-10: rgba(0, 0, 0, .1);
--WDS-black-alpha-10-RGB: 0, 0, 0;
--WDS-black-alpha-20: rgba(0, 0, 0, .2);
--WDS-black-alpha-20-RGB: 0, 0, 0;
--WDS-black-alpha-30: rgba(0, 0, 0, .3);
--WDS-black-alpha-30-RGB: 0, 0, 0;
--WDS-black-alpha-40: rgba(0, 0, 0, .4);
--WDS-black-alpha-40-RGB: 0, 0, 0;
--WDS-black-alpha-50: rgba(0, 0, 0, .5);
--WDS-black-alpha-50-RGB: 0, 0, 0;
--WDS-black-alpha-60: rgba(0, 0, 0, .6);
--WDS-black-alpha-60-RGB: 0, 0, 0;
--WDS-black-alpha-70: rgba(0, 0, 0, .7);
--WDS-black-alpha-70-RGB: 0, 0, 0;
--WDS-black-alpha-80: rgba(0, 0, 0, .8);
--WDS-black-alpha-80-RGB: 0, 0, 0;
--WDS-black-alpha-90: rgba(0, 0, 0, .9);
--WDS-black-alpha-90-RGB: 0, 0, 0;
--WDS-black: #000000;
--WDS-black-RGB: 0, 0, 0;
--WDS-transparent: transparent;
--WDS-transparent-RGB: 0, 0, 0;
--WDS-content-default: var(--WDS-cool-gray-1000);
--WDS-content-default-RGB: var(--WDS-cool-gray-1000-RGB);
--WDS-content-disabled: var(--WDS-cool-gray-300);
--WDS-content-disabled-RGB: var(--WDS-cool-gray-300-RGB);
--WDS-content-action-default: var(--WDS-cool-gray-1000);
--WDS-content-action-default-RGB: var(--WDS-cool-gray-1000-RGB);
--WDS-content-external-link: var(--WDS-cobalt-500);
--WDS-content-external-link-RGB: var(--WDS-cobalt-500-RGB);
--WDS-content-inverse: var(--WDS-white);
--WDS-content-inverse-RGB: var(--WDS-white-RGB);
--WDS-content-read: var(--WDS-cobalt-400);
--WDS-content-read-RGB: var(--WDS-cobalt-400-RGB);
--WDS-background-wash-plain: var(--WDS-white);
--WDS-background-wash-plain-RGB: var(--WDS-white-RGB);
--WDS-background-wash-inset: var(--WDS-warm-gray-75);
--WDS-background-wash-inset-RGB: var(--WDS-warm-gray-75-RGB);
--WDS-background-elevated-wash-plain: var(--WDS-white);
--WDS-background-elevated-wash-plain-RGB: var(--WDS-white-RGB);
--WDS-background-elevated-wash-inset: var(--WDS-warm-gray-75);
--WDS-background-elevated-wash-inset-RGB: var(--WDS-warm-gray-75-RGB);
--WDS-background-dimmer: var(--WDS-black-alpha-60);
--WDS-background-dimmer-RGB: var(--WDS-black-alpha-60-RGB);
--WDS-surface-default: var(--WDS-white);
--WDS-surface-default-RGB: var(--WDS-white-RGB);
--WDS-surface-elevated-default: var(--WDS-white);
--WDS-surface-elevated-default-RGB: var(--WDS-white-RGB);
--WDS-surface-highlight: var(--WDS-warm-gray-300-alpha-15);
--WDS-surface-highlight-RGB: var(--WDS-warm-gray-300-alpha-15-RGB);
--WDS-surface-inverse: var(--WDS-cool-gray-800);
--WDS-surface-inverse-RGB: var(--WDS-cool-gray-800-RGB);
--WDS-surface-pressed: var(--WDS-cool-gray-alpha-20);
--WDS-surface-pressed-RGB: var(--WDS-cool-gray-alpha-20-RGB);
--WDS-lines-divider: var(--WDS-cool-gray-alpha-10);
--WDS-lines-divider-RGB: var(--WDS-cool-gray-alpha-10-RGB);
--WDS-lines-outline-default: var(--WDS-cool-gray-400);
--WDS-lines-outline-default-RGB: var(--WDS-cool-gray-400-RGB);
--WDS-persistent-activity-indicator: var(--WDS-green-400);
--WDS-persistent-activity-indicator-RGB: var(--WDS-green-400-RGB);
--WDS-persistent-always-black: var(--WDS-cool-gray-1000);
--WDS-persistent-always-black-RGB: var(--WDS-cool-gray-1000-RGB);
--WDS-persistent-always-white: var(--WDS-white);
--WDS-persistent-always-white-RGB: var(--WDS-white-RGB);
--WDS-persistent-always-branded: var(--WDS-green-500);
--WDS-persistent-always-branded-RGB: var(--WDS-green-500-RGB);
--WDS-systems-bubble-surface-incoming: var(--WDS-white);
--WDS-systems-bubble-surface-incoming-RGB: var(--WDS-white-RGB);
--WDS-systems-bubble-surface-outgoing: var(--WDS-green-100);
--WDS-systems-bubble-surface-outgoing-RGB: var(--WDS-green-100-RGB);
--WDS-systems-bubble-surface-overlay: var(--WDS-warm-gray-300-alpha-15);
--WDS-systems-bubble-surface-overlay-RGB: var( --WDS-warm-gray-300-alpha-15-RGB );
--WDS-systems-bubble-surface-system: var(--WDS-white-alpha-90);
--WDS-systems-bubble-surface-system-RGB: var(--WDS-white-alpha-90-RGB);
--WDS-systems-bubble-surface-e2e: var(--WDS-yellow-100);
--WDS-systems-bubble-surface-e2e-RGB: var(--WDS-yellow-100-RGB);
--WDS-systems-bubble-content-e2e: var(--WDS-cool-gray-600);
--WDS-systems-bubble-content-e2e-RGB: var(--WDS-cool-gray-600-RGB);
--WDS-systems-bubble-surface-business: var(--WDS-emerald-100);
--WDS-systems-bubble-surface-business-RGB: var(--WDS-emerald-100-RGB);
--WDS-systems-chat-surface-composer: var(--WDS-white);
--WDS-systems-chat-surface-composer-RGB: var(--WDS-white-RGB);
--WDS-systems-chat-background-wallpaper: var(--WDS-cream-85);
--WDS-systems-chat-background-wallpaper-RGB: var(--WDS-cream-85-RGB);
--WDS-systems-chat-surface-tray: var(--WDS-warm-gray-75);
--WDS-systems-chat-surface-tray-RGB: var(--WDS-warm-gray-75-RGB);
--WDS-systems-status-seen: var(--WDS-warm-gray-300);
--WDS-systems-status-seen-RGB: var(--WDS-warm-gray-300-RGB);
--WDS-components-platform-gesture-bar: var(--WDS-black-alpha-50);
--WDS-components-platform-gesture-bar-RGB: var(--WDS-black-alpha-50-RGB);
--WDS-components-platform-status-bar: var(--WDS-black-alpha-80);
--WDS-components-platform-status-bar-RGB: var(--WDS-black-alpha-80-RGB);
--WDS-components-surface-nav-bar: var(--WDS-white);
--WDS-components-surface-nav-bar-RGB: var(--WDS-white-RGB);
--WDS-app-wash: var(--WDS-warm-gray-200);
--WDS-app-wash-RGB: var(--WDS-warm-gray-200-RGB);
--dimmed: .5;
--layer-0: -1;
--layer-1: 100;
--layer-2: 200;
--layer-3: 300;
--layer-4: 400;
--layer-5: 500;
--layer-6: 600;
--layer-7: 700;
--layer-8: 800;
--layer-9: 900;
--layer-10: 1000;
--width-location-thumb: 270px;
--t-ease: cubic-bezier(.1, .82, .25, 1);
--h-pane-header: 64px;
--compose-box-menu-item-width: 26px;
--compose-box-menu-height: 52px;
--compose-box-open-menu-width: 110px;
--compose-box-full-open-menu-width: 152px;
--compose-box-menu-width-status-reply: 68px;
--compose-box-open-menu-width-status-reply: 110px;
--quoted-max-height: 82px;
--quoted-min-height: 42px;
--quoted-compose-height-full: 83px;
--quoted-compose-height-hd-full: 144px;
--width-msg-bubble-with-media: 336px;
--cell-height: 72px;
--squircle-polygon: polygon( 100% 50%, 100% 56.6%, 100% 59.3%, 100% 61.4%, 99.9% 63.2%, 99.9% 64.8%, 99.9% 66.2%, 99.8% 67.5%, 99.8% 68.7%, 99.7% 69.8%, 99.6% 70.8%, 99.5% 71.8%, 99.5% 72.8%, 99.4% 73.7%, 99.3% 74.6%, 99.1% 75.4%, 99% 76.3%, 98.9% 77%, 98.8% 77.8%, 98.6% 78.5%, 98.5% 79.2%, 98.3% 79.9%, 98.1% 80.6%, 98% 81.3%, 97.8% 81.9%, 97.6% 82.5%, 97.4% 83.1%, 97.2% 83.7%, 97% 84.3%, 96.8% 84.8%, 96.5% 85.4%, 96.3% 85.9%, 96% 86.4%, 95.8% 86.9%, 95.5% 87.4%, 95.3% 87.9%, 95% 88.3%, 94.7% 88.8%, 94.4% 89.2%, 94.1% 89.7%, 93.8% 90.1%, 93.4% 90.5%, 93.1% 90.9%, 92.8% 91.3%, 92.4% 91.7%, 92% 92%, 91.7% 92.4%, 91.3% 92.8%, 90.9% 93.1%, 90.5% 93.4%, 90.1% 93.8%, 89.7% 94.1%, 89.2% 94.4%, 88.8% 94.7%, 88.3% 95%, 87.9% 95.3%, 87.4% 95.5%, 86.9% 95.8%, 86.4% 96%, 85.9% 96.3%, 85.4% 96.5%, 84.8% 96.8%, 84.3% 97%, 83.7% 97.2%, 83.1% 97.4%, 82.5% 97.6%, 81.9% 97.8%, 81.3% 98%, 80.6% 98.1%, 79.9% 98.3%, 79.2% 98.5%, 78.5% 98.6%, 77.8% 98.8%, 77% 98.9%, 76.3% 99%, 75.4% 99.1%, 74.6% 99.3%, 73.7% 99.4%, 72.8% 99.5%, 71.8% 99.5%, 70.8% 99.6%, 69.8% 99.7%, 68.7% 99.8%, 67.5% 99.8%, 66.2% 99.9%, 64.8% 99.9%, 63.2% 99.9%, 61.4% 100%, 59.3% 100%, 56.6% 100%, 50% 100%, 43.4% 100%, 40.7% 100%, 38.6% 100%, 36.8% 99.9%, 35.2% 99.9%, 33.8% 99.9%, 32.5% 99.8%, 31.3% 99.8%, 30.2% 99.7%, 29.2% 99.6%, 28.2% 99.5%, 27.2% 99.5%, 26.3% 99.4%, 25.4% 99.3%, 24.6% 99.1%, 23.7% 99%, 23% 98.9%, 22.2% 98.8%, 21.5% 98.6%, 20.8% 98.5%, 20.1% 98.3%, 19.4% 98.1%, 18.7% 98%, 18.1% 97.8%, 17.5% 97.6%, 16.9% 97.4%, 16.3% 97.2%, 15.7% 97%, 15.2% 96.8%, 14.6% 96.5%, 14.1% 96.3%, 13.6% 96%, 13.1% 95.8%, 12.6% 95.5%, 12.1% 95.3%, 11.7% 95%, 11.2% 94.7%, 10.8% 94.4%, 10.3% 94.1%, 9.9% 93.8%, 9.5% 93.4%, 9.1% 93.1%, 8.7% 92.8%, 8.3% 92.4%, 8% 92%, 7.6% 91.7%, 7.2% 91.3%, 6.9% 90.9%, 6.6% 90.5%, 6.2% 90.1%, 5.9% 89.7%, 5.6% 89.2%, 5.3% 88.8%, 5% 88.3%, 4.7% 87.9%, 4.5% 87.4%, 4.2% 86.9%, 4% 86.4%, 3.7% 85.9%, 3.5% 85.4%, 3.2% 84.8%, 3% 84.3%, 2.8% 83.7%, 2.6% 83.1%, 2.4% 82.5%, 2.2% 81.9%, 2% 81.3%, 1.9% 80.6%, 1.7% 79.9%, 1.5% 79.2%, 1.4% 78.5%, 1.2% 77.8%, 1.1% 77%, 1% 76.3%, .9% 75.4%, .7% 74.6%, .6% 73.7%, .5% 72.8%, .5% 71.8%, .4% 70.8%, .3% 69.8%, .2% 68.7%, .2% 67.5%, .1% 66.2%, .1% 64.8%, .1% 63.2%, 0% 61.4%, 0% 59.3%, 0% 56.6%, 0% 50%, 0% 43.4%, 0% 40.7%, 0% 38.6%, .1% 36.8%, .1% 35.2%, .1% 33.8%, .2% 32.5%, .2% 31.3%, .3% 30.2%, .4% 29.2%, .5% 28.2%, .5% 27.2%, .6% 26.3%, .7% 25.4%, .9% 24.6%, 1% 23.7%, 1.1% 23%, 1.2% 22.2%, 1.4% 21.5%, 1.5% 20.8%, 1.7% 20.1%, 1.9% 19.4%, 2% 18.7%, 2.2% 18.1%, 2.4% 17.5%, 2.6% 16.9%, 2.8% 16.3%, 3% 15.7%, 3.2% 15.2%, 3.5% 14.6%, 3.7% 14.1%, 4% 13.6%, 4.2% 13.1%, 4.5% 12.6%, 4.7% 12.1%, 5% 11.7%, 5.3% 11.2%, 5.6% 10.8%, 5.9% 10.3%, 6.2% 9.9%, 6.6% 9.5%, 6.9% 9.1%, 7.2% 8.7%, 7.6% 8.3%, 8% 8%, 8.3% 7.6%, 8.7% 7.2%, 9.1% 6.9%, 9.5% 6.6%, 9.9% 6.2%, 10.3% 5.9%, 10.8% 5.6%, 11.2% 5.3%, 11.7% 5%, 12.1% 4.7%, 12.6% 4.5%, 13.1% 4.2%, 13.6% 4%, 14.1% 3.7%, 14.6% 3.5%, 15.2% 3.2%, 15.7% 3%, 16.3% 2.8%, 16.9% 2.6%, 17.5% 2.4%, 18.1% 2.2%, 18.7% 2%, 19.4% 1.9%, 20.1% 1.7%, 20.8% 1.5%, 21.5% 1.4%, 22.2% 1.2%, 23% 1.1%, 23.7% 1%, 24.6% .9%, 25.4% .7%, 26.3% .6%, 27.2% .5%, 28.2% .5%, 29.2% .4%, 30.2% .3%, 31.3% .2%, 32.5% .2%, 33.8% .1%, 35.2% .1%, 36.8% .1%, 38.6% 0%, 40.7% 0%, 43.4% 0%, 50% 0%, 56.6% 0%, 59.3% 0%, 61.4% 0%, 63.2% .1%, 64.8% .1%, 66.2% .1%, 67.5% .2%, 68.7% .2%, 69.8% .3%, 70.8% .4%, 71.8% .5%, 72.8% .5%, 73.7% .6%, 74.6% .7%, 75.4% .9%, 76.3% 1%, 77% 1.1%, 77.8% 1.2%, 78.5% 1.4%, 79.2% 1.5%, 79.9% 1.7%, 80.6% 1.9%, 81.3% 2%, 81.9% 2.2%, 82.5% 2.4%, 83.1% 2.6%, 83.7% 2.8%, 84.3% 3%, 84.8% 3.2%, 85.4% 3.5%, 85.9% 3.7%, 86.4% 4%, 86.9% 4.2%, 87.4% 4.5%, 87.9% 4.7%, 88.3% 5%, 88.8% 5.3%, 89.2% 5.6%, 89.7% 5.9%, 90.1% 6.2%, 90.5% 6.6%, 90.9% 6.9%, 91.3% 7.2%, 91.7% 7.6%, 92% 8%, 92.4% 8.3%, 92.8% 8.7%, 93.1% 9.1%, 93.4% 9.5%, 93.8% 9.9%, 94.1% 10.3%, 94.4% 10.8%, 94.7% 11.2%, 95% 11.7%, 95.3% 12.1%, 95.5% 12.6%, 95.8% 13.1%, 96% 13.6%, 96.3% 14.1%, 96.5% 14.6%, 96.8% 15.2%, 97% 15.7%, 97.2% 16.3%, 97.4% 16.9%, 97.6% 17.5%, 97.8% 18.1%, 98% 18.7%, 98.1% 19.4%, 98.3% 20.1%, 98.5% 20.8%, 98.6% 21.5%, 98.8% 22.2%, 98.9% 23%, 99% 23.7%, 99.1% 24.6%, 99.3% 25.4%, 99.4% 26.3%, 99.5% 27.2%, 99.5% 28.2%, 99.6% 29.2%, 99.7% 30.2%, 99.8% 31.3%, 99.8% 32.5%, 99.9% 33.8%, 99.9% 35.2%, 99.9% 36.8%, 100% 38.6%, 100% 40.7%, 100% 43.4% );
--width-album-grid-bubble: 168px;
--width-media-portrait-bubble: 246px;
--height-thumb-shade: 28px;
--thumb-width: 78px;
--thumb-height: 78px;
--height-video-thumb: 160px;
--width-video-link-preview-bubble: 286px;
--t-fast: .08s;
--width-payment-bubble: 286px;
--navbar-width: 64px;
--navbar-width-expanded: 220px;
--w-select: 40px;
--width-announcement-bubble: 480px;
--composer-panel-height: 320px;
--composer-panel-loading-bar-height: 2px;
--composer-panel-menu-height: 44px;
--composer-panel-search-height: 52px;
--expressions-panel-max-height: 62vh;
--expressions-panel-height: 565px;
--expressions-panel-smaller-height: 495px;
--width-hq-link-preview-portrait: 246px;
--width-hq-link-preview-landscape: 336px;
--animated-emoji-zindex-conversation: 300;
--h-full-header: 108px;
--h-pane-subheader: 44px;
--t-normal: .18s;
--min-width-app: 748px;
--min-height-app: 512px;
--windows-title-bar-height: 29px;
--height-pane-footer: 62px;
--chatlist-avatar-w: 49px;
--chatlist-avatar-h: 49px;
--width-location-bubble: 276px;
--width-max-album-column: 695px;
--width-product-thumb: 80px;
--scrollbar-width: 6px;
--windows-scrollbar-width: 8px;
--img-path: img;
--t-slow: .24s;
--t-ease-reverse: cubic-bezier(.69, 0, .79, .14);
--t-easein: cubic-bezier(.84, .07, .93, .46);
--curve-easeout-focus: cubic-bezier(.24, .91, .01, .99);
--screen-width-1: 900px;
--screen-width-2: 1024px;
--screen-width-3: 1300px;
--screen-width-4: 1441px;
--screen-height-small: 600px;
--emoji-height: 20px;
--emoji-width: 20px;
--emojik-height: 32px;
--emojik-width: 32px;
--wds-pink-50: rgb(255, 245, 248);
--wds-pink-50-rgb: 255, 245, 248;
--wds-pink-75: rgb(255, 235, 241);
--wds-pink-75-rgb: 255, 235, 241;
--wds-pink-100: rgb(255, 218, 231);
--wds-pink-100-rgb: 255, 218, 231;
--wds-pink-200: rgb(255, 171, 199);
--wds-pink-200-rgb: 255, 171, 199;
--wds-pink-300: rgb(255, 114, 161);
--wds-pink-300-rgb: 255, 114, 161;
--wds-pink-400: rgb(255, 46, 116);
--wds-pink-400-rgb: 255, 46, 116;
--wds-pink-500: rgb(212, 42, 102);
--wds-pink-500-rgb: 212, 42, 102;
--wds-pink-600: rgb(163, 37, 83);
--wds-pink-600-rgb: 163, 37, 83;
--wds-pink-700: rgb(109, 30, 62);
--wds-pink-700-rgb: 109, 30, 62;
--wds-pink-800: rgb(54, 25, 42);
--wds-pink-800-rgb: 54, 25, 42;
--wds-red-50: rgb(254, 239, 242);
--wds-red-50-rgb: 254, 239, 242;
--wds-red-75: rgb(253, 232, 235);
--wds-red-75-rgb: 253, 232, 235;
--wds-red-100: rgb(251, 216, 220);
--wds-red-100-rgb: 251, 216, 220;
--wds-red-200: rgb(250, 160, 170);
--wds-red-200-rgb: 250, 160, 170;
--wds-red-300: rgb(241, 92, 109);
--wds-red-300-rgb: 241, 92, 109;
--wds-red-400: rgb(234, 0, 56);
--wds-red-400-rgb: 234, 0, 56;
--wds-red-500: rgb(184, 5, 49);
--wds-red-500-rgb: 184, 5, 49;
--wds-red-600: rgb(145, 20, 53);
--wds-red-600-rgb: 145, 20, 53;
--wds-red-700: rgb(97, 24, 46);
--wds-red-700-rgb: 97, 24, 46;
--wds-red-800: rgb(50, 22, 34);
--wds-red-800-rgb: 50, 22, 34;
--wds-orange-50: rgb(255, 247, 245);
--wds-orange-50-rgb: 255, 247, 245;
--wds-orange-75: rgb(255, 235, 230);
--wds-orange-75-rgb: 255, 235, 230;
--wds-orange-100: rgb(254, 226, 216);
--wds-orange-100-rgb: 254, 226, 216;
--wds-orange-200: rgb(253, 193, 173);
--wds-orange-200-rgb: 253, 193, 173;
--wds-orange-300: rgb(252, 151, 117);
--wds-orange-300-rgb: 252, 151, 117;
--wds-orange-400: rgb(250, 101, 51);
--wds-orange-400-rgb: 250, 101, 51;
--wds-orange-500: rgb(196, 83, 45);
--wds-orange-500-rgb: 196, 83, 45;
--wds-orange-600: rgb(154, 69, 41);
--wds-orange-600-rgb: 154, 69, 41;
--wds-orange-700: rgb(107, 52, 36);
--wds-orange-700-rgb: 107, 52, 36;
--wds-orange-800: rgb(53, 34, 30);
--wds-orange-800-rgb: 53, 34, 30;
--wds-yellow-50: rgb(252, 252, 245);
--wds-yellow-50-rgb: 252, 252, 245;
--wds-yellow-75: rgb(255, 247, 229);
--wds-yellow-75-rgb: 255, 247, 229;
--wds-yellow-100: rgb(255, 240, 212);
--wds-yellow-100-rgb: 255, 240, 212;
--wds-yellow-200: rgb(255, 228, 175);
--wds-yellow-200-rgb: 255, 228, 175;
--wds-yellow-300: rgb(255, 210, 121);
--wds-yellow-300-rgb: 255, 210, 121;
--wds-yellow-400: rgb(255, 188, 56);
--wds-yellow-400-rgb: 255, 188, 56;
--wds-yellow-500: rgb(200, 150, 49);
--wds-yellow-500-rgb: 200, 150, 49;
--wds-yellow-600: rgb(157, 121, 44);
--wds-yellow-600-rgb: 157, 121, 44;
--wds-yellow-700: rgb(109, 87, 38);
--wds-yellow-700-rgb: 109, 87, 38;
--wds-yellow-800: rgb(54, 49, 31);
--wds-yellow-800-rgb: 54, 49, 31;
--wds-green-50: rgb(242, 253, 240);
--wds-green-50-rgb: 242, 253, 240;
--wds-green-75: rgb(231, 252, 227);
--wds-green-75-rgb: 231, 252, 227;
--wds-green-100: rgb(217, 253, 211);
--wds-green-100-rgb: 217, 253, 211;
--wds-green-200: rgb(172, 252, 172);
--wds-green-200-rgb: 172, 252, 172;
--wds-green-300: rgb(113, 235, 133);
--wds-green-300-rgb: 113, 235, 133;
--wds-green-400: rgb(37, 211, 102);
--wds-green-400-rgb: 37, 211, 102;
--wds-green-500: rgb(31, 168, 85);
--wds-green-500-rgb: 31, 168, 85;
--wds-green-600: rgb(27, 135, 72);
--wds-green-600-rgb: 27, 135, 72;
--wds-green-700: rgb(21, 96, 56);
--wds-green-700-rgb: 21, 96, 56;
--wds-green-800: rgb(16, 53, 39);
--wds-green-800-rgb: 16, 53, 39;
--wds-emerald-50: rgb(240, 255, 249);
--wds-emerald-50-rgb: 240, 255, 249;
--wds-emerald-75: rgb(225, 254, 242);
--wds-emerald-75-rgb: 225, 254, 242;
--wds-emerald-100: rgb(213, 253, 237);
--wds-emerald-100-rgb: 213, 253, 237;
--wds-emerald-200: rgb(178, 245, 218);
--wds-emerald-200-rgb: 178, 245, 218;
--wds-emerald-300: rgb(122, 227, 195);
--wds-emerald-300-rgb: 122, 227, 195;
--wds-emerald-400: rgb(6, 207, 156);
--wds-emerald-400-rgb: 6, 207, 156;
--wds-emerald-500: rgb(0, 168, 132);
--wds-emerald-500-rgb: 0, 168, 132;
--wds-emerald-600: rgb(0, 128, 105);
--wds-emerald-600-rgb: 0, 128, 105;
--wds-emerald-700: rgb(18, 92, 78);
--wds-emerald-700-rgb: 18, 92, 78;
--wds-emerald-800: rgb(10, 51, 44);
--wds-emerald-800-rgb: 10, 51, 44;
--wds-teal-50: rgb(237, 250, 250);
--wds-teal-50-rgb: 237, 250, 250;
--wds-teal-75: rgb(223, 246, 245);
--wds-teal-75-rgb: 223, 246, 245;
--wds-teal-100: rgb(203, 242, 238);
--wds-teal-100-rgb: 203, 242, 238;
--wds-teal-200: rgb(149, 219, 212);
--wds-teal-200-rgb: 149, 219, 212;
--wds-teal-300: rgb(66, 199, 184);
--wds-teal-300-rgb: 66, 199, 184;
--wds-teal-400: rgb(2, 166, 152);
--wds-teal-400-rgb: 2, 166, 152;
--wds-teal-500: rgb(2, 131, 119);
--wds-teal-500-rgb: 2, 131, 119;
--wds-teal-600: rgb(4, 106, 98);
--wds-teal-600-rgb: 4, 106, 98;
--wds-teal-700: rgb(7, 77, 74);
--wds-teal-700-rgb: 7, 77, 74;
--wds-teal-800: rgb(9, 45, 47);
--wds-teal-800-rgb: 9, 45, 47;
--wds-sky-blue-50: rgb(242, 250, 254);
--wds-sky-blue-50-rgb: 242, 250, 254;
--wds-sky-blue-75: rgb(222, 243, 252);
--wds-sky-blue-75-rgb: 222, 243, 252;
--wds-sky-blue-100: rgb(202, 236, 250);
--wds-sky-blue-100-rgb: 202, 236, 250;
--wds-sky-blue-200: rgb(147, 215, 245);
--wds-sky-blue-200-rgb: 147, 215, 245;
--wds-sky-blue-300: rgb(83, 189, 235);
--wds-sky-blue-300-rgb: 83, 189, 235;
--wds-sky-blue-400: rgb(0, 157, 226);
--wds-sky-blue-400-rgb: 0, 157, 226;
--wds-sky-blue-500: rgb(2, 126, 181);
--wds-sky-blue-500-rgb: 2, 126, 181;
--wds-sky-blue-600: rgb(4, 102, 146);
--wds-sky-blue-600-rgb: 4, 102, 146;
--wds-sky-blue-700: rgb(7, 75, 106);
--wds-sky-blue-700-rgb: 7, 75, 106;
--wds-sky-blue-800: rgb(9, 44, 61);
--wds-sky-blue-800-rgb: 9, 44, 61;
--wds-cobalt-50: rgb(242, 248, 255);
--wds-cobalt-50-rgb: 242, 248, 255;
--wds-cobalt-75: rgb(225, 240, 255);
--wds-cobalt-75-rgb: 225, 240, 255;
--wds-cobalt-100: rgb(210, 232, 255);
--wds-cobalt-100-rgb: 210, 232, 255;
--wds-cobalt-200: rgb(153, 202, 254);
--wds-cobalt-200-rgb: 153, 202, 254;
--wds-cobalt-300: rgb(83, 166, 253);
--wds-cobalt-300-rgb: 83, 166, 253;
--wds-cobalt-400: rgb(0, 123, 252);
--wds-cobalt-400-rgb: 0, 123, 252;
--wds-cobalt-500: rgb(0, 99, 203);
--wds-cobalt-500-rgb: 0, 99, 203;
--wds-cobalt-600: rgb(4, 81, 163);
--wds-cobalt-600-rgb: 4, 81, 163;
--wds-cobalt-700: rgb(7, 61, 118);
--wds-cobalt-700-rgb: 7, 61, 118;
--wds-cobalt-800: rgb(9, 38, 66);
--wds-cobalt-800-rgb: 9, 38, 66;
--wds-purple-50: rgb(247, 245, 255);
--wds-purple-50-rgb: 247, 245, 255;
--wds-purple-75: rgb(239, 235, 255);
--wds-purple-75-rgb: 239, 235, 255;
--wds-purple-100: rgb(232, 224, 255);
--wds-purple-100-rgb: 232, 224, 255;
--wds-purple-200: rgb(209, 196, 255);
--wds-purple-200-rgb: 209, 196, 255;
--wds-purple-300: rgb(167, 145, 255);
--wds-purple-300-rgb: 167, 145, 255;
--wds-purple-400: rgb(127, 102, 255);
--wds-purple-400-rgb: 127, 102, 255;
--wds-purple-500: rgb(94, 71, 222);
--wds-purple-500-rgb: 94, 71, 222;
--wds-purple-600: rgb(72, 55, 175);
--wds-purple-600-rgb: 72, 55, 175;
--wds-purple-700: rgb(58, 50, 123);
--wds-purple-700-rgb: 58, 50, 123;
--wds-purple-800: rgb(36, 36, 71);
--wds-purple-800-rgb: 36, 36, 71;
--wds-cool-gray-50: rgb(247, 248, 250);
--wds-cool-gray-50-rgb: 247, 248, 250;
--wds-cool-gray-75: rgb(240, 242, 245);
--wds-cool-gray-75-rgb: 240, 242, 245;
--wds-cool-gray-100: rgb(233, 237, 239);
--wds-cool-gray-100-rgb: 233, 237, 239;
--wds-cool-gray-200: rgb(209, 215, 219);
--wds-cool-gray-200-rgb: 209, 215, 219;
--wds-cool-gray-300: rgb(174, 186, 193);
--wds-cool-gray-300-rgb: 174, 186, 193;
--wds-cool-gray-400: rgb(134, 150, 160);
--wds-cool-gray-400-rgb: 134, 150, 160;
--wds-cool-gray-500: rgb(102, 119, 129);
--wds-cool-gray-500-rgb: 102, 119, 129;
--wds-cool-gray-600: rgb(84, 101, 111);
--wds-cool-gray-600-rgb: 84, 101, 111;
--wds-cool-gray-700: rgb(59, 74, 84);
--wds-cool-gray-700-rgb: 59, 74, 84;
--wds-cool-gray-800: rgb(32, 44, 51);
--wds-cool-gray-800-rgb: 32, 44, 51;
--wds-cool-gray-900: rgb(17, 27, 33);
--wds-cool-gray-900-rgb: 17, 27, 33;
--wds-cool-gray-1000: rgb(11, 20, 26);
--wds-cool-gray-1000-rgb: 11, 20, 26;
--wds-white-alpha-05: rgba(255, 255, 255, .05);
--wds-white-alpha-05-rgb: 255, 255, 255;
--wds-white-alpha-10: rgba(255, 255, 255, .1);
--wds-white-alpha-10-rgb: 255, 255, 255;
--wds-white-alpha-20: rgba(255, 255, 255, .2);
--wds-white-alpha-20-rgb: 255, 255, 255;
--wds-white-alpha-30: rgba(255, 255, 255, .3);
--wds-white-alpha-30-rgb: 255, 255, 255;
--wds-white-alpha-40: rgba(255, 255, 255, .4);
--wds-white-alpha-40-rgb: 255, 255, 255;
--wds-white-alpha-50: rgba(255, 255, 255, .5);
--wds-white-alpha-50-rgb: 255, 255, 255;
--wds-white-alpha-60: rgba(255, 255, 255, .6);
--wds-white-alpha-60-rgb: 255, 255, 255;
--wds-white-alpha-70: rgba(255, 255, 255, .7);
--wds-white-alpha-70-rgb: 255, 255, 255;
--wds-white-alpha-80: rgba(255, 255, 255, .8);
--wds-white-alpha-80-rgb: 255, 255, 255;
--wds-white-alpha-90: rgba(255, 255, 255, .9);
--wds-white-alpha-90-rgb: 255, 255, 255;
--wds-cool-gray-alpha-05: rgba(11, 20, 26, .05);
--wds-cool-gray-alpha-05-rgb: 11, 20, 26;
--wds-cool-gray-alpha-10: rgba(11, 20, 26, .1);
--wds-cool-gray-alpha-10-rgb: 11, 20, 26;
--wds-cool-gray-alpha-20: rgba(11, 20, 26, .2);
--wds-cool-gray-alpha-20-rgb: 11, 20, 26;
--wds-cool-gray-alpha-30: rgba(11, 20, 26, .3);
--wds-cool-gray-alpha-30-rgb: 11, 20, 26;
--wds-cool-gray-alpha-40: rgba(11, 20, 26, .4);
--wds-cool-gray-alpha-40-rgb: 11, 20, 26;
--wds-cool-gray-alpha-50: rgba(11, 20, 26, .5);
--wds-cool-gray-alpha-50-rgb: 11, 20, 26;
--wds-cool-gray-alpha-60: rgba(11, 20, 26, .6);
--wds-cool-gray-alpha-60-rgb: 11, 20, 26;
--wds-cool-gray-alpha-70: rgba(11, 20, 26, .7);
--wds-cool-gray-alpha-70-rgb: 11, 20, 26;
--wds-cool-gray-alpha-80: rgba(11, 20, 26, .8);
--wds-cool-gray-alpha-80-rgb: 11, 20, 26;
--wds-cool-gray-alpha-90: rgba(11, 20, 26, .9);
--wds-cool-gray-alpha-90-rgb: 11, 20, 26;
--wds-cool-gray-200-alpha-60: rgba(209, 215, 219, .6);
--wds-cool-gray-200-alpha-60-rgb: 209, 215, 219;
--wds-cool-gray-600-alpha-50: rgba(84, 101, 111, .5);
--wds-cool-gray-600-alpha-50-rgb: 84, 101, 111;
--wds-cool-gray-600-alpha-85: rgba(84, 101, 111, .85);
--wds-cool-gray-600-alpha-85-rgb: 84, 101, 111;
--wds-transparent: rgba(0, 0, 0, 0);
--wds-transparent-rgb: 0, 0, 0;
--wds-black: rgb(0, 0, 0);
--wds-black-rgb: 0, 0, 0;
--wds-white: rgb(255, 255, 255);
--wds-white-rgb: 255, 255, 255;
--beige: #ede7dc;
--beige-rgb: 237, 231, 220;
--black: #0b141a;
--black-rgb: 11, 20, 26;
--blue-light: #009de2;
--blue-light-rgb: 0, 157, 226;
--blue-ocean: #93d7f5;
--blue-ocean-rgb: 147, 215, 245;
--blue-sky: #93d7f5;
--blue-sky-rgb: 147, 215, 245;
--blue-sky-light: #def3fc;
--blue-sky-light-rgb: 222, 243, 252;
--blue: #027eb5;
--blue-rgb: 2, 126, 181;
--dark: #0b141a;
--dark-rgb: 11, 20, 26;
--green-deep: #1fa855;
--green-deep-rgb: 31, 168, 85;
--green: #25d366;
--green-rgb: 37, 211, 102;
--orange: #fc9775;
--orange-rgb: 252, 151, 117;
--pale-blue-green: #d5fded;
--pale-blue-green-rgb: 213, 253, 237;
--pale-green: #d9fdd3;
--pale-green-rgb: 217, 253, 211;
--pale-yellow: #fff0d4;
--pale-yellow-rgb: 255, 240, 212;
--red-light: #f15c6d;
--red-light-rgb: 241, 92, 109;
--red: #ea0038;
--red-rgb: 234, 0, 56;
--teal-light: #7ae3c3;
--teal-light-rgb: 122, 227, 195;
--teal-lighter: #00a884;
--teal-lighter-rgb: 0, 168, 132;
--teal: #008069;
--teal-rgb: 0, 128, 105;
--white: white;
--white-rgb: 255, 255, 255;
--yellow: #ffd279;
--yellow-rgb: 255, 210, 121;
--gray-30: #f7f8fa;
--gray-30-rgb: 247, 248, 250;
--gray-60: #f0f2f5;
--gray-60-rgb: 240, 242, 245;
--gray-70: #f0f2f5;
--gray-70-rgb: 240, 242, 245;
--gray-100: #e9edef;
--gray-100-rgb: 233, 237, 239;
--gray-150: #d1d7db;
--gray-150-rgb: 209, 215, 219;
--gray-200: #d1d7db;
--gray-200-rgb: 209, 215, 219;
--gray-300: #aebac1;
--gray-300-rgb: 174, 186, 193;
--gray-400: #8696a0;
--gray-400-rgb: 134, 150, 160;
--gray-500: #667781;
--gray-500-rgb: 102, 119, 129;
--gray-600: #54656f;
--gray-600-rgb: 84, 101, 111;
--gray-700: #3b4a54;
--gray-700-rgb: 59, 74, 84;
--gray-800: #202c33;
--gray-800-rgb: 32, 44, 51;
--gray-850: #111b21;
--gray-850-rgb: 17, 27, 33;
--gray-900: #111b21;
--gray-900-rgb: 17, 27, 33;
--xiessm1: 8px;
--x1pbyom4: 5px;
--avatar-circle-gray-rgb: 209, 215, 219;
--ptt-ooc-avatar-background: #ffad1f;
--xa9dqg1: #F1F2F4;
--xzubya6: 50px;
--background-lighter: white;
--x390k3g: #242626;
--x3vbx0y: #E8E0FF;
--button-plain-disabled-background: white;
--picker-background: #f0f2f5;
--butterbar-notice-smb-circle-rgb: 255, 255, 255;
--payment-status-pending: rgba(17, 27, 33, .45);
--spinner-outgoing-rgb: 157, 185, 158;
--x1r1wmrs: 900;
--x1ikr0bq: 12px;
--x1yxuzsz: #5E47DE;
--pip-manager-content: rgba(79, 79, 79, .85);
--message-placeholder-icon-rgb: 17, 27, 33;
--startup-icon-rgb: 0, 0, 0;
--system-message-background: rgba(255, 255, 255, .95);
--xpctgef: #CB2910;
--x9qshfp: 0;
--x16sqm9a: 38%;
--x11no4lx: #071A2C;
--x1wk4hzn: 32px;
--xqbug2k: #882249;
--xq8pt38: rgba(255, 255, 255, .3);
--x1ugcbnm: 3rem;
--poll-bar-container-sender-rgb: 11, 20, 26;
--butterbar-ad-action-info-background-rgb: 225, 254, 242;
--danger: #ea0038;
--x14ttt0u: #3CBC224D;
--x82vd9a: 6px;
--x1ye37z0: #074D4A;
--x6jkwj7: 5px;
--butterbar-blue-nux-icon-dismiss: #54656f;
--button-approve-rgb: 0, 128, 105;
--x1xbp41d: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
--link-alt: #008069;
--unread-timestamp: #1fa855;
--xm2qnaw: .4s;
--xo8ean6: #D10335;
--quick-action-button-background: rgba(11, 20, 26, .2);
--drawer-loading-background: rgba(255, 255, 255, .5);
--butterbar-default-background-rgb: 83, 189, 235;
--xtmi0s7: 2rem;
--x3rgvrn: #FDF7A4;
--poll-bar-fill-receiver-rgb: 0, 168, 132;
--x1n945xb: 5px;
--x1styeim: #FEFDF0;
--x1rqbjtg: min(334px, 100vw - 48px);
--x1oyn4z3: 16px;
--search-input-container-background-rgb: 255, 255, 255;
--x5nctwh: #533FC7;
--x15kh474: #EDD2C2;
--x15bmxmr: #000000;
--button-approve-background-hover-strong-rgb: 122, 227, 195;
--butterbar-update-icon-rgb: 0, 168, 132;
--x16gw2gl: #DDCFBC;
--notification-biz-background-rgb: 213, 253, 237;
--x1h50e4l: #080809;
--xx6r3m5: rgba(0, 0, 0, .06);
--x6pwzom: 12px;
--x1jzxkya: #147B29;
--xo0722j: 8px;
--x1u0655h: 0px;
--x139qgs1: #FFEAC2;
--xzxlccp: .375rem;
--xoir9yd: 12px;
--ptt-waveform-incoming-unplayed: #ced0d1;
--x159i18z: cubic-bezier(.24, .91, .01, .99);
--poll-disabled-checked-checkbox-sender-rgb: 11, 20, 26;
--butterbar-green-nux-icon-dismiss: #54656f;
--x18t89hy: rgba(0, 0, 0, .2);
--xkjoe7p: 8px;
--drawer-loading-background-rgb: 255, 255, 255;
--xez4x4z: 5px;
--ptt-thumb-incoming-unplayed-rgb: 9, 210, 97;
--xveh5fi: #1F1F3C;
--x1wtafy2: 6px;
--xpfytx8: #218D51;
--xw6x4cz: transparent;
--xwbpd4y: 12px;
--media-editor-image-caption-input-background-rgb: 255, 255, 255;
--xs0bd1e: 0;
--business-name-subtitle: #aebac1;
--x15nmaec: 8px;
--chevron-button-background-rgb: 17, 27, 33;
--xiqovf7: 18px;
--x13wout6: #C3FDC0;
--spinner-outgoing: #9db99e;
--x1vp8epk: 2px;
--x1prtngd: 10px;
--x4parvm: #FDF691;
--x106lone: #D9FDD3;
--x100w0vy: #AFE966;
--xusudzu: #5D2E04;
--product-image-button-background: rgba(17, 27, 33, .35);
--xy4xms7: #E1E99B;
--splashscreen-startup-background-rgb: 247, 245, 243;
--x1y1vcbx: #0A1317;
--x139ry6a: 50%;
--payment-status-pending-rgb: 17, 27, 33;
--xbnnbcs: 1px;
--x1mo6g12: #0063CB;
--x1bxvvwh: #000000;
--teal-pale-rgb: 96, 174, 161;
--x13f6elz: #CE9571;
--media-viewer-background-rgb: 255, 255, 255;
--x1nef30b: #040D16;
--x1y36ykd: rgba(255, 255, 255, .7);
--xtkxyfg: .2s;
--x1a33bim: #290E0A;
--x1kjigw3: .5rem;
--xg8q890: #083C54;
--xbz2rmu: #F5DCD6;
--xdvz3pk: #0866FF;
--x1wb1v04: #080809;
--xbx14lq: auto;
--x11l78wh: #FB7D874D;
--poll-checkmark-sender-rgb: 217, 253, 211;
--reactions-tray-active-round-background-rgb: 11, 20, 26;
--xvspzjg: #C15ADD;
--outgoing-background-deeper-rgb: 209, 244, 204;
--background-lighter-hover-rgb: 245, 246, 246;
--x1ucv9m2: #EDFAFA;
--butterbar-notice-smb-circle: white;
--chip-button-background: #d5fded;
--icon-bright-highlight: #00a884;
--xu3wp72: 50%;
--quick-action-button-background-rgb: 11, 20, 26;
--bubble-meta-icon: #8696a0;
--x14bua3f: #E5381D;
--xd9u4s4: #E2E5E9;
--payment-status-success: #1fa855;
--xykxu1h: #DFE2E3;
--chat-info-drawer-thumb-background: #f0f2f5;
--xa3t32q: 0px;
--ptt-draft-thumb: #00a884;
--x10m28jk: #423E06;
--pip-drag-bar-rgb: 255, 255, 255;
--xhp8hfx: #362C1F;
--status-thumbnail-background: #cacaca;
--panel-background-deep: #e9edef;
--xziiki: #1A1A31;
--x16gu0nn: #53BDEB;
--background-lighter-hover: #f5f6f6;
--video-player-background-rgb: 11, 20, 26;
--butterbar-blue-nux-background: #caecfa;
--xza3hsg: #0171E3;
--xcv04am: rgba(0, 0, 0, .05);
--x85bt92: #99CAFE;
--ptt-thumb-incoming-played: #4fc3f7;
--xxibwoi: #911435;
--xwkvfc1: 36px;
--document-meta: #8696a0;
--chat-meta-rgb: 102, 119, 129;
--xfe8al5: #0143B5;
--input-floating-toolbar-icon-active: #54656f;
--background-default-active-rgb: 240, 242, 245;
--xjccnae: 2px;
--x153bvf2: #E7FCE3;
--filters-item-active-background: #e7fce3;
--forward-caption-preview-content-rgb: 247, 248, 250;
--x1ba17e0: 2px;
--avatar-circle-gray-light-rgb: 233, 237, 239;
--xsi5f4f: #FDAC91;
--xlypplm: #262524;
--x1r69ykm: #405623;
--x1kiyq1p: #AE7555;
--xu8kjpt: -40px;
--audio-progress-played-outgoing: #29afdf;
--xdy6ffy: #EEEEEE;
--x1eizsie: #FAF8F5;
--x19hyz7h: 800;
--status-background: #0b141a;
--spinner-default-rgb: 209, 215, 219;
--x15xjgfg: #7F66FF;
--xud6c83: #042F97;
--inverse: white;
--x158zvr2: #2B3D46B2;
--x1es7nz5: #EEFED8;
--startup-background-rgb: 240, 242, 245;
--xuq9phc: #42C7B8;
--butterbar-ad-action-warning-icon-background: white;
--desktop-upsell-call-btn-rgb: 84, 101, 111;
--input-floating-toolbar-background-rgb: 255, 255, 255;
--x1499wtk: #096E5C;
--product-image-button-background-rgb: 17, 27, 33;
--xrxntdb: 100%;
--x10pova3: #E3E3E3;
--x1lhi614: #D4D6D8;
--modal-background: white;
--x1pin7hg: .25rem;
--x1248yc5: #CBF2EE;
--butterbar-notice-smb-background: #d8e9f2;
--reaction-button: white;
--checkbox-mark: white;
--xm74hnv: #8A1F0F;
--x8jlfy6: 1;
--x169ux90: 600;
--xigi5bk: #FDE8EB;
--success: #1fa855;
--x198yf9l: 5px;
--xjxre2c: #F0FFF9;
--x87lr8f: #D2EEDF;
--xzjzgax: #F7F8FA;
--xo3rck8: 0px;
--poll-bar-container-receiver: #f0f2f5;
--x1sie9h7: #748695;
--teal-pale: #60aea1;
--x1rq6j38: #FFE6E6;
--x1gkot03: .25rem;
--butterbar-green-nux-icon-dismiss-rgb: 84, 101, 111;
--x19467x1: #018ECC;
--butterbar-ad-action-warning-background-rgb: 255, 210, 121;
--xqg8v9z: #F1F4F7;
--x1y02xta: transparent;
--x1y5o4kb: #FFFFFF;
--x184htih: #2E6AC5;
--button-bubble-rgb: 0, 128, 105;
--background-lightest-hover-rgb: 245, 246, 246;
--x1ts7fr7: #EFEBFF;
--input-floating-toolbar-button-hover: #e9edef;
--butterbar-icon-rgb: 255, 255, 255;
--xwlrjka: #0A13171F;
--message-background-deep: rgba(11, 20, 26, .12);
--x1wfppg7: #BDB116;
--xk6f7jz: #80770E;
--navbar-background: #f0f2f5;
--inverse-rgb: 255, 255, 255;
--link-preview-shimmer-start: rgba(227, 227, 227, 0);
--xhv0cwp: #092C3D;
--document-meta-rgb: 134, 150, 160;
--chevron-button-background: rgba(17, 27, 33, .35);
--unread-marker-background-rgb: 37, 211, 102;
--xry9i5v: #40D9B0;
--icon: #54656f;
--drawer-header-title-rgb: 255, 255, 255;
--system-message-background-rgb: 255, 255, 255;
--product-placeholder-background-rgb: 236, 241, 243;
--xgam6tz: 16px;
--dropdown-background-hover: #f5f6f6;
--input-floating-toolbar-icon-active-rgb: 84, 101, 111;
--bubble-meta-icon-rgb: 134, 150, 160;
--x1rsouo8: #C1A886;
--x6dew38: #7A2394;
--butterbar-desktop-upsell-icon-rgb: 255, 255, 255;
--xjen6ej: 3px;
--xpk26b6: .75rem;
--x1dka7z: 0px;
--compose-input-background-rgb: 255, 255, 255;
--butterbar-battery-background-rgb: 241, 92, 109;
--butterbar-order-expansion-banner-background-rgb: 222, 243, 252;
--xw4mkmd: transparent;
--x19jd6gk: 5px;
--x1f8hdz3: transparent;
--drawer-background-deep-rgb: 240, 242, 245;
--focus-lighter: rgba(0, 157, 226, .1);
--xkdrwhp: #FFC1B3;
--xeq63j5: rgba(0, 0, 0, .05);
--x1b39yh6: linear-gradient(90deg, grey, white, grey);
--drawer-background: #f0f2f5;
--x1hcq818: 12px;
--x850bzy: #1F0B08;
--toast-background: rgba(11, 20, 26, .82);
--x1kdnp2l: 36px;
--x1luo2xp: #12181C;
--x1xm2y6c: #B8E4D0;
--butterbar-connection-icon: white;
--x1gc7xmx: #083D3D;
--ptt-draft-button-send-hover: #00bc94;
--spinner-incoming-rgb: 184, 187, 188;
--xvv0dxv: #3E352A;
--x5s55iz: #948B11;
--chat-meta: #667781;
--xexklgv: 0px;
--reactions-details-background: white;
--x246880: #A99E13;
--icon-ack: #53bdeb;
--ptt-draft-button-send: #00a884;
--drawer-gallery-background-hover-rgb: 231, 233, 236;
--x563ohd: #160F0E;
--x19c129t: .5rem;
--x19yfi8i: #046A62;
--xsy58m4: #DBE48A;
--x20pe6h: #2A91FD;
--avatar-circle-gray-light: #e9edef;
--x1mhjrx2: .4;
--x1eyk6h3: #161717;
--x7bz1h2: #F5F1EB;
--xu0r620: #4E682B;
--xgdr6j1: #B77B28;
--x5muypq: 32px;
--background-default-hover-rgb: 245, 246, 246;
--poll-invalid-warning-icon-container-background-rgb: 255, 228, 175;
--xoqb1m8: #FF8FB4;
--butterbar-ad-action-info-icon-dismiss-rgb: 84, 101, 111;
--x3n1xdx: 1.75rem;
--x1ogc4l4: #FBFEE1;
--compose-input-background-focused-rgb: 209, 241, 254;
--x1gy3fwr: #FFFFFF;
--incoming-background-highlight: #f0f1f1;
--icon-strong: #54656f;
--x1rlt156: #FBCE034D;
--x1f9f2th: 0px;
--sender-superpower-title: #00a884;
--x1pfoezs: #C4532D;
--media-gallery-thumb-icon-rgb: 187, 196, 203;
--x15j50rv: #FB7E54;
--splashscreen-startup-background: #F7F5F3;
--xa177gx: #4837AF;
--xf1b4ic: #00A884;
--x16vlhum: #15603E;
--comments-modal-background-rgb: 255, 255, 255;
--xejj5xh: #BDBDBD;
--x10124fl: 24px;
--button-approve-hover: #008069;
--xzbtx9w: 64px;
--x1mjki4c: #EA2C6D;
--x1y1nv2h: rgba(17, 27, 33, .7);
--x1axsshr: rgba(0, 0, 0, .6);
--x10e0ozs: 2s;
--multi-skin-tone-picker-emoji-selected-background-rgb: 209, 215, 219;
--x1avx1w: #190C12;
--x1yfdafw: 4px;
--reactions-tray-background-rgb: 255, 255, 255;
--button-plain-background: white;
--x9rknzs: #393F14;
--x19gqeph: 1;
--x1jlcpsn: #E78CED;
--x8scjvk: 5px;
--panel-background-hover-rgb: 231, 233, 236;
--button-round-background-inverted-rgb: 243, 245, 246;
--xe71aag: #CB5031;
--media-editor-document-caption-input-background: white;
--x8bvsss: #0A1014;
--xjvkmi1: 4px;
--panel-input-background: #e9edef;
--x1ub8gu5: #FF2E74;
--input-button-more-rgb: 0, 168, 132;
--xgtnwqa: 4px;
--x1fbtwd8: #E6D81B;
--x12gsxra: #71EB85;
--xzrb9x8: #03BC90;
--xq3r0or: #FFEBE6;
--checkbox-background: #008069;
--butterbar-phone-icon-shape-rgb: 255, 210, 121;
--status-background-hover-rgb: 48, 55, 60;
--icon-disabled-rgb: 209, 215, 219;
--xs27cii: #06CF9C;
--xgk8imr: #0E0311;
--x287wji: 0px;
--poll-checkmark-receiver: white;
--archived-chat-marker: #54656f;
--butterbar-connection-icon-rgb: 255, 255, 255;
--product-thumb-background-deeper: #d8dde5;
--xa6vsrr: 5px;
--audio-progress-played-outgoing-rgb: 41, 175, 223;
--chat-marker-background-rgb: 231, 252, 227;
--media-editor-image-caption-input-background: white;
--xbakyew: transparent;
--x1lb638x: #041512;
--media-gallery-thumb-background: #dfe3e7;
--x1602v8z: 5px;
--x1k717mv: #833D27;
--audio-progress-outgoing: #8da78f;
--x16dxbju: 4px;
--tooltip-background-rgb: 32, 44, 51;
--x10z4plh: #FFDB94;
--x7z3nr7: 12px;
--x79phgq: 16px;
--xg3aput: 0ms;
--x1nycba7: transparent;
--message-selection-highlight-rgb: 0, 128, 105;
--button-reject: #8696a0;
--filters-container-background: white;
--panel-header-icon-rgb: 84, 101, 111;
--app-background-deeper: #d1d7db;
--panel-background-rgb: 240, 242, 245;
--security-icon-background: #d3ede6;
--butterbar-notice-icon-rgb: 255, 255, 255;
--button-focus-outline-rgb: 0, 168, 132;
--poll-button-disabled-sender-rgb: 11, 20, 26;
--poll-button-disabled-receiver-rgb: 209, 215, 219;
--xmscypv: #F7F5F3;
--poll-bar-fill-sender-rgb: 0, 168, 132;
--x5j60gr: rgba(255, 255, 255, .1);
--x18ttt0t: 5px;
--ptt-thumb-outgoing-unplayed-rgb: 111, 129, 113;
--x1wi2ncj: #57534F;
--x1rkisvu: #FEFACA;
--x1asyvdp: #FFF7E5;
--x11psvdz: #65676B;
--checkbox-mark-rgb: 255, 255, 255;
--attach-media-drop-overlay: rgba(255, 255, 255, .6);
--background-lighter-active: #f0f2f5;
--x13he6ev: rgba(17, 27, 33, .2);
--x4ach5t: 64px;
--ptt-gray-rgb: 17, 27, 33;
--x1f8qg8u: transparent;
--message-placeholder-icon: rgba(17, 27, 33, .3);
--x1nambnf: rgba(17, 27, 33, .6);
--xeqnf2j: 500;
--x1s53mxt: #DEF3FC;
--audio-track-outgoing-rgb: 197, 230, 193;
--xw46h2w: #F2FAFE;
--drawer-section-background-rgb: 255, 255, 255;
--xdaiwkk: 12px;
--x19wpjfa: #FB7583;
--x1fx80fs: 0px;
--x167tkc4: #211613;
--x61we9e: x16ddlwn-B;
--intro-logo-rgb: 78, 100, 112;
--x1r17ggk: #E2E5E9;
--button-approve-background-rgb: 225, 254, 242;
--x362ujf: #082432;
--search-input-container-background-active-rgb: 255, 255, 255;
--butterbar-green-nux-icon-background: #00a884;
--butterbar-blue-nux-icon-dismiss-rgb: 84, 101, 111;
--icon-high-emphasis: #00a884;
--media-viewer-background: rgba(255, 255, 255, .96);
--x1x3apa3: rgba(255, 255, 255, .9);
--x8l9w9p: #373532;
--x17cmqge: #18744A;
--button-round-background-rgb: 0, 168, 132;
--x1glbl71: #042F97;
--x1py5flz: #6B3424;
--icon-lighter: #8696a0;
--x1kpccw5: #000000;
--butterbar-green-nux-icon-rgb: 255, 255, 255;
--x1uzztpd: 95%;
--xz5uftb: #7B654C;
--xt87jqu: #08325C;
--x1y8ex37: #44566480;
--xjziy7d: 24px;
--button-approve-hover-strong: #008069;
--cover-image-background-rgb: 234, 242, 245;
--empty-state-background-rgb: 247, 248, 250;
--xfgoir1: #32441B;
--xj6fmph: #5D6C7B;
--xi237gd: cubic-bezier(.1, .82, .25, 1);
--xcch052: #4D555B;
--xq94u1m: #FFCBBB;
--ptt-green: #09d261;
--modal-title-rgb: 17, 27, 33;
--expressions-panel-active-icon-tab-background: #e9edef;
--butterbar-fatal-icon-rgb: 255, 255, 255;
--link-preview-shimmer-end-rgb: 227, 227, 227;
--x1r0jlc1: 32px;
--poll-checkmark-sender: #d9fdd3;
--drawer-section-background: white;
--modal-backdrop-solid: #f0f2f5;
--x1e03607: #53A6FD;
--overlay: #0b141a;
--x1ch0wrc: #424445;
--transient-background: #fcf5eb;
--forward-caption-preview-content: #f7f8fa;
--payment-status-success-rgb: 31, 168, 85;
--ptt-draft-waveform-background: white;
--xfsprpa: transparent;
--x1eaog2c: #E2FFBB;
--menu-bar-item-background-active: rgba(11, 20, 26, .1);
--x125vgxg: #000000;
--xd8d2gk: #C4C8CB;
--x115pfoe: #474D18;
--x6ulrhq: 50%;
--quick-action-button-rgb: 255, 255, 255;
--x15j2dhm: #CED0D4;
--button-plain: #54656f;
--button-reject-background-hover-strong-rgb: 174, 186, 193;
--butterbar-green-nux-icon: white;
--xbxt6u0: 5px;
--chatlist-icon-rgb: 134, 150, 160;
--x1gk23of: #575109;
--x1pzl9kd: #C58730;
--audio-track-outgoing: #c5e6c1;
--voip-disabled-background: #222222;
--butterbar-update-icon: #00a884;
--xovr52e: 0px;
--x1tc54p7: 75%;
--bubble-meta: #667781;
--outgoing-background: #d9fdd3;
--x1ciwlvv: 50%;
--x6a00ex: cubic-bezier(.08, .52, .52, 1);
--x4l9iyq: #B6D9FE;
--x1qgw2a0: #7C7771;
--x6tbpgk: #FFFFFF99;
--icon-bright-highlight-rgb: 0, 168, 132;
--dropdown-background-hover-rgb: 245, 246, 246;
--background-lighter-active-rgb: 240, 242, 245;
--butterbar-ad-action-info-background: #e1fef2;
--x1pemqhl: #0A1317;
--ptt-gray-badge: rgba(84, 101, 111, .5);
--badge-icon: white;
--x5yrerl: 3px;
--butterbar-update-background-rgb: 225, 254, 242;
--x1y2lk2m: #FBA6FF;
--panel-header-background-rgb: 240, 242, 245;
--xhymt8p: #606263;
--avatar-background-rgb: 233, 237, 239;
--notification-e2e-icon: #54656f;
--notification-non-e2e-background-rgb: 203, 242, 238;
--x1eu7xnm: #006FE4;
--xy3a3jt: #DBA685;
--xbdgffm: #1C2B33;
--x17xti0e: transparent;
--butterbar-green-nux-background: #e1fef2;
--background-default: white;
--empty-state-icon: white;
--ptt-thumb-outgoing-played: #4fc3f7;
--xfmglqd: #5B6368;
--x1geac24: #3A327B;
--ptt-waveform-incoming-played: #858a8d;
--x1lst64k: 6px;
--x1pxo4it: #FBB9C0;
--x1mxho3s: #000000;
--x7tavv: #2A131D;
--xmctwlg: #FEF9F6;
--x168skw: #FFC659;
--x17s2s01: 10px;
--x9igmjo: #09441F;
--ptt-waveform-preview-played: #858a8d;
--x1qbuoxp: #C2BDB8;
--xq6rgv9: transparent;
--x16tigc9: #125C4E;
--xdstih4: rgba(21, 33, 39, .2);
--button-reject-rgb: 134, 150, 160;
--ptt-gray: rgba(17, 27, 33, .7);
--x1ct8ak1: #FFF0D4;
--xnl9egw: #698D3C;
--x1s4fjyj: rgba(17, 27, 33, .3);
--x1f3a8s8: #6A6C6C;
--x666kwq: #E6EBEF;
--x1c8sodu: rgba(0, 0, 0, .4);
--drawer-header-title: white;
--panel-background-deeper-rgb: 233, 237, 239;
--electron-deprecation-app-expired-header-rgb: 0, 168, 132;
--conversation-panel-background-rgb: 239, 234, 226;
--ptt-ooc-background-rgb: 0, 150, 136;
--x1a6dyks: #F5F9D0;
--conversation-panel-background: #efeae2;
--xma6ml8: #0B0504;
--x1rvrjxs: #FDF46B;
--xnzvq2j: 1;
--xvv23fx: .1s;
--audio-progress-outgoing-rgb: 141, 167, 143;
--modal-backdrop: rgba(255, 255, 255, .85);
--x101244i: #0E493D;
--xvwd1hk: #BDD8F4;
--xeytzu2: #F1F4F74D;
--x18k3q55: #171616;
--x1osw725: 8s;
--tooltip-background: #202c33;
--panel-header-icon: #54656f;
--communities-green-rgb: 0, 128, 105;
--button-plain-hover: #3b4a54;
--unread-bar-background-rgb: 255, 255, 255;
--x17h09wl: #445664;
--x2ylfud: #AE9675;
--navbar-separator: rgba(0, 0, 0, .2);
--button-round-background: #00a884;
--xbseee6: .75rem;
--payment-status-failed: #f15c6d;
--voip-disabled-background-rgb: 34, 34, 34;
--x1dji02k: #E5C6B2;
--xofacbq: #FFF7F5;
--x25d41g: #051321;
--background-lightest-active-rgb: 240, 242, 245;
--beta-tag-background-rgb: 230, 230, 230;
--xhvc8qh: #321622;
--x1rhfrof: #000000;
--xlxghfy: 50%;
--x1b5vcgs: rgba(17, 27, 33, .8);
--x15843vv: 10px;
--xq7c65j: #141201;
--button-background-disabled-rgb: 233, 237, 239;
--x1sb3civ: 0px;
--xadhof8: #F53947;
--poll-disabled-checked-checkbox-sender: rgba(11, 20, 26, .2);
--x15dq24q: #F1EEEB;
--svg-gray-button: rgba(11, 20, 26, .5);
--butterbar-notice-background-rgb: 225, 254, 242;
--intro-background: #f0f2f5;
--x1q0j1u0: #626A21;
--pip-player-background-rgb: 42, 47, 50;
--icon-disabled: #d1d7db;
--spinner-highlight-rgb: 0, 168, 132;
--x1r7lg60: rgba(0, 0, 0, .8);
--x1y9a6jq: 300;
--x1t42zyj: transparent;
--filters-container-background-rgb: 255, 255, 255;
--xm27gdc: #092C26;
--x1ruj3lq: 50%;
--button-reject-background: #f0f2f5;
--x1otpcow: #1E220B;
--xbvav5z: rgba(255, 255, 255, .6);
--announcement-speaker-background-rgb: 217, 253, 211;
--button-approve-background-hover: #b2f5da;
--x8exfn3: rgba(0, 0, 0, .1);
--xjkkx9c: #8E8881;
--xl8uc24: 50%;
--xv4iti8: #3E474D;
--xwnntgi: rgba(234, 0, 56, .3);
--xlx7u6e: 0px;
--x1bz8tql: #046692;
--button-plain-hover-rgb: 59, 74, 84;
--map-overlay-background-rgb: 255, 255, 255;
--button-disabled-rgb: 174, 186, 193;
--button-approve-hover-rgb: 0, 128, 105;
--startup-background: #f0f2f5;
--notification-non-e2e-background: #cbf2ee;
--button-approve-hover-strong-rgb: 0, 128, 105;
--empty-state-icon-rgb: 255, 255, 255;
--x1axk1tg: 32px;
--butterbar-order-expansion-icon: #046692;
--xe2jwzs: #05151D;
--input-empty-value-placeholder-rgb: 0, 168, 132;
--poll-button-disabled-sender: rgba(11, 20, 26, .2);
--xl9ojqf: #080809;
--x1lfe1lv: rgba(255, 255, 255, .5);
--unread-marker-background: #25d366;
--x1tixki8: 50%;
--xnujbwf: #2B1830;
--xkvpne0: #27162C;
--x1m6ivdz: #065C56;
--x19rz69o: none;
--x24fn9h: #A197FF4D;
--chip-button-background-rgb: 213, 253, 237;
--x1mbmfo9: #2AADE7;
--ptt-waveform-outgoing-unplayed-rgb: 176, 206, 174;
--butterbar-blue-nux-icon-background-rgb: 0, 157, 226;
--button-reject-hover-strong: #3b4a54;
--qc-quantity-label-highlighted-background-rgb: 0, 128, 105;
--xp8sa82: #FFFFFF;
--xlev17u: #F1F4F7CC;
--x1hiqbtc: #647685;
--x14alnoo: #8A962E;
--x15nxril: #632277;
--xepydxb: #F1F4F766;
--icon-ack-rgb: 83, 189, 235;
--x1bom0sp: 0px;
--sticker-button-background: #e9edef;
--xb26ggl: #242447;
--x1s0x739: rgba(255, 255, 255, .05);
--xt2qcoh: #0A131726;
--button-plain-rgb: 84, 101, 111;
--security-icon-lock-rgb: 31, 196, 177;
--xzw6rfg: #21C063;
--status-link-preview-title: #111b21;
--xk37jod: auto;
--drawer-gallery-background-active-rgb: 222, 224, 227;
--ptt-draft-button-play-pause-out-of-chat-rgb: 255, 255, 255;
--butterbar-notice-smb-background-rgb: 216, 233, 242;
--xmwgy6t: 0rem;
--panel-background-lighter-rgb: 247, 248, 250;
--x1qdmqos: #D3FBA0;
--xlcg5hk: 50%;
--incoming-background: white;
--modal-backdrop-rgb: 255, 255, 255;
--splashscreen-startup-icon: rgba(0, 0, 0, 0.1);
--filters-item-background: #f0f2f5;
--dropdown-background: white;
--x4jee19: 4px;
--xx5vayt: cubic-bezier(.08, .52, .52, 1);
--x17zmix: #06478D;
--xsanxk9: #FFDAE7;
--x32uek6: transparent;
--product-thumb-background-rgb: 240, 242, 245;
--xx1f98k: #103529;
--xipxr3v: #101111;
--xdemnd9: 1px;
--x1196mbi: #FFFFFF;
--x4yl131: 4px;
--xr0fzoy: 32px;
--butterbar-desktop-upsell-icon: white;
--x1x9f82f: #AFE2F8;
--ptt-draft-button-stop-rgb: 255, 59, 48;
--notification-e2e-icon-rgb: 84, 101, 111;
--butterbar-ad-action-warning-icon-dismiss: #54656f;
--butterbar-default-background: #53bdeb;
--x1szyur: #06597E;
--xq3i7x7: #BCABFF;
--x7c64f: #9223B1;
--ptt-thumb-incoming-played-rgb: 79, 195, 247;
--product-thumb-background: #f0f2f5;
--xqav2vo: #030D12;
--x66m34d: #D5FDED;
--overlay-rgb: 11, 20, 26;
--x11nuaxw: rgba(0, 0, 0, .05);
--icon-header-illustration-background-rgb: 6, 207, 156;
--xv29y53: 8px;
--xyscipr: #FF553B;
--x16oxp5a: #F0F0F0;
--audio-progress-played-incoming-rgb: 48, 176, 232;
--background-lighter-content-rgb: 240, 242, 245;
--xcjqb3v: 1.75rem;
--labels-plus-icon-background-rgb: 233, 237, 239;
--xywjd58: #111307;
--background-lighter-content: #f0f2f5;
--butterbar-blue-nux-icon-background: #009de2;
--x1f1vpbm: transparent;
--spinner-default: #d1d7db;
--reactions-bubble-counter: rgba(60, 60, 67, .6);
--x1jl8qzl: #03776D;
--incoming-background-deeper-rgb: 245, 246, 246;
--xacx6cu: transparent;
--ptt-draft-button-send-hover-rgb: 0, 188, 148;
--button-reject-background-hover: #d1d7db;
--status-link-preview-title-rgb: 17, 27, 33;
--icon-rgb: 84, 101, 111;
--ptt-blue-rgb: 79, 195, 247;
--x1h23lpg: 10px;
--spinner-incoming: #b8bbbc;
--x1e5072j: #DF5C30;
--xc79r3t: 0px;
--media-editor-control: #1c313f;
--outgoing-background-highlight: #c4eec8;
--expressions-panel-active-icon-tab-background-rgb: 233, 237, 239;
--x1d8jg19: 24px;
--danger-rgb: 234, 0, 56;
--xha1oja: #430D52;
--attach-media-drop-overlay-rgb: 255, 255, 255;
--x19llca3: #9F8465;
--badge-pending-rgb: 0, 168, 132;
--x15etoab: 32px;
--x1jhe5eb: #009DE2;
--link-preview-placeholder-image: #8696a0;
--xiotq71: #0A0A0A;
--x18h0yqn: #38100A;
--xexha5y: #029588;
--xo864yi: transparent;
--x2lt7i2: #25D366;
--xkxrvah: #FFEBF1;
--picker-background-rgb: 240, 242, 245;
--x1uugh4a: #2B1422;
--xrtedcs: #0C0908;
--xsl46bp: #080809;
--qc-quantity-label-highlighted-background: #008069;
--x2zgnnd: #B2F5DA;
--ptt-draft-button-play-pause: #667781;
--xekrhsr: linear;
--butterbar-notice-circle-rgb: 0, 168, 132;
--link-preview-shimmer-start-rgb: 227, 227, 227;
--xbcbk4t: #08120F;
--modal-title: #111b21;
--x1s39hm7: #e1e4e8;
--xurddli: #FFDBFF;
--modal-backdrop-solid-rgb: 240, 242, 245;
--xpydr3t: #2D251A;
--x1ikcymc: #0457CB;
--xbrohpj: #FFC3D7;
--x3qat37: 62.5rem;
--x53dyk0: 57px;
--ptt-thumb-incoming-unplayed: #09d261;
--icon-in-cell-frame-background-rgb: 247, 248, 250;
--outgoing-background-rgb: 217, 253, 211;
--xh89adf: 8px;
--xa6iisv: #9E6947;
--xdt1ml: 12px;
--x1iibd0y: rgba(29, 170, 97, .6);
--spinner-highlight: #00a884;
--focus-rgb: 0, 157, 226;
--link-preview-shimmer-end: rgba(227, 227, 227, .5);
--x5bxsh4: #44566480;
--ptt-green-rgb: 9, 210, 97;
--xr5xjea: #0451A3;
--xnzllis: #A5B337;
--media-editor-control-rgb: 28, 49, 63;
--x13t7dcq: rgba(0, 0, 0, .05);
--x6x6ilv: #0A13174D;
--xcpsjc3: #E1FEF2;
--x1losisy: #6C757A;
--button-plain-disabled-background-rgb: 255, 255, 255;
--x10bu028: rgba(17, 27, 33, .1);
--archived-chat-marker-rgb: 84, 101, 111;
--reactions-menu-tab-separator: rgba(60, 60, 67, .29);
--xpavtr9: 700;
--link-alt-rgb: 0, 128, 105;
--xik0f35: 8px;
--xbdfujg: #000000;
--chat-marker: #1b8748;
--xmipt9: #EFE9E0;
--outgoing-background-highlight-rgb: 196, 238, 200;
--xok3i2e: #B53FD6;
--x6783al: #090706;
--incoming-background-highlight-rgb: 240, 241, 241;
--chat-marker-background: #e7fce3;
--xll3th2: #007BFC;
--x1lj0wx5: 10%;
--xalic96: 4px;
--status-background-hover: #30373c;
--xasgz0f: #D2E8FE;
--x1826qf5: #FFE4AF;
--butterbar-fatal-background: #ffd279;
--app-background-stripe: #00a884;
--media-editor-document-caption-input-background-rgb: 255, 255, 255;
--announcement-speaker-background: #d9fdd3;
--x1din2ez: #AF4C2B;
--xzpcfih: #BC285D;
--x1nkglug: 8px;
--butterbar-blue-nux-background-rgb: 202, 236, 250;
--xn98y3a: 12px;
--x1iy7589: #FFFFFF;
--product-thumb-overlay-background-rgb: 17, 27, 33;
--x1adnsjm: 8px;
--xdg47pa: transparent;
--xl78l7z: #474440;
--poll-invalid-warning-icon-container-background: #ffe4af;
--butterbar-battery-icon: white;
--poll-bar-container-receiver-rgb: 240, 242, 245;
--highlight-rgb: 0, 128, 105;
--butterbar-connection-background: #ffd279;
--x184ss1f: #090608;
--modal-background-rgb: 255, 255, 255;
--x1445g6l: #A924CE;
--x1ne68q6: #FDC1AD;
--x1vkjxc9: #F3284D;
--compose-input-background-focused: #d1f1fe;
--notification-info-icon-rgb: 84, 101, 111;
--sticker-button-background-rgb: 233, 237, 239;
--business-name-subtitle-rgb: 174, 186, 193;
--x1o6ias2: none;
--button-alternative: #009de2;
--xpjzwq4: rgba(194, 189, 184, .15);
--x97wcsu: transparent;
--butterbar-ad-action-warning-icon-rgb: 255, 210, 121;
--xmdljdt: #E6E3E0;
--ptt-draft-thumb-rgb: 0, 168, 132;
--x5mmtsk: #35221E;
--x6cm0jb: cubic-bezier(.84, .07, .93, .46);
--input-floating-toolbar-icon-disabled-rgb: 209, 215, 219;
--x1ywyfbk: #F4DED1;
--poll-disabled-checked-checkbox-receiver-rgb: 209, 215, 219;
--search-container-background: white;
--icon-header-illustration-main: #06cf9c;
--x1g8fdq7: 0px;
--suspicious-background-rgb: 241, 92, 109;
--labels-icon: rgba(17, 27, 33, .4);
--butterbar-battery-background: #f15c6d;
--reactions-details-background-hover: #f5f6f6;
--xrtte1x: #144D37;
--butterbar-phone-icon-shape: #ffd279;
--button-bubble: rgba(0, 128, 105, .7);
--x1j99h4o: 50%;
--x1po59ie: #092642;
--xrhx1ba: #CAECFA;
--xjwuh0m: #EA0038;
--x1t4c8kb: #4507A9;
--x19eh46f: #FDEAE7;
--x1tkfw0i: 8px;
--x1hzq8ko: #8D9599;
--xmypfwe: 2s;
--x1pwsir7: #cdcfd1;
--app-background-deeper-rgb: 209, 215, 219;
--checkbox-background-rgb: 0, 128, 105;
--ptt-draft-button-cancel-rgb: 102, 119, 129;
--button-reject-background-hover-strong: #aebac1;
--xnrljl1: 16px;
--x11tx24z: .4;
--x1upcoxv: rgba(0, 0, 0, .05);
--butterbar-notice-icon: white;
--ptt-gray-badge-rgb: 84, 101, 111;
--xuh85at: #082729;
--xt15msc: #FFFFFF;
--bubble-meta-rgb: 102, 119, 129;
--x1epajyq: 50%;
--ptt-draft-waveform-background-rgb: 255, 255, 255;
--butterbar-green-nux-background-rgb: 225, 254, 242;
--ptt-draft-button-cancel-hover-rgb: 111, 130, 140;
--pin-indicator-rgb: 233, 237, 239;
--xju61ic: 8px;
--xxaocxe: #2A1F18;
--butterbar-icon: white;
--xztsmk: #D4C3AB;
--x1ixaeb1: #1B8755;
--xjnrlz3: 5px;
--xn93tna: #CCD3DB;
--x1tpnpdk: #36192A;
--xxxb53l: #937CFF;
--ptt-draft-button-stop-hover: #ff4e44;
--input-floating-toolbar-background: white;
--x1osk0lb: #EAE0D3;
--xafjmui: 28px;
--filters-item-background-hover: #e9edef;
--x18uyjkh: 32px;
--xpenkto: 0;
--x2fvgqz: #111010;
--icon-in-cell-frame-background: #f7f8fa;
--xm07qmq: #FFFFFF;
--unread-background-rgb: 255, 255, 255;
--pin-indicator: #e9edef;
--xkbennp: #1D1F1F;
--x1p6q236: #6B640C;
--filters-item-background-hover-rgb: 233, 237, 239;
--xq0ylef: #6D1E3E;
--x15u6f1l: #413595;
--drawer-gallery-background: #f0f2f5;
--x14yjvlz: #FED2C3;
--xuddwvy: #FFF5F8;
--intro-background-rgb: 240, 242, 245;
--avatar-background: #e9edef;
--panel-header-background: #f0f2f5;
--background-default-hover: #f5f6f6;
--link-rgb: 2, 126, 181;
--ptt-waveform-outgoing-played-rgb: 114, 137, 119;
--x12mu3cx: #0A1B16;
--x1ggz87l: #FBFAF9;
--xzsxl4p: rgba(0, 0, 0, .05);
--avatar-placeholder-background: #dfe5e7;
--x82mkzn: 32px;
--xcqs4f3: transform 50ms linear;
--pill-background: rgba(11, 20, 26, .05);
--x1crxupg: rgba(255, 255, 255, .4);
--reactions-details-background-hover-rgb: 245, 246, 246;
--ptt-ooc-avatar-background-rgb: 255, 173, 31;
--x1tmhprt: #A50D33;
--button-round-background-inverted: #f3f5f6;
--butterbar-update-background: #e1fef2;
--button-plain-background-hover-rgb: 255, 255, 255;
--x1btyeyl: #F4FEE6;
--xxqa0dq: 32px;
--x1151t8p: 10px;
--xyfxsax: #A791FF;
--x113jb4q: #C4F9E4;
--x1r6ips6: #FFA799;
--xyffi4w: #074B6A;
--x10pfvwu: #98A433;
--x7vh06b: #7B0210;
--security-icon-shield-rgb: 240, 250, 247;
--xlyw0m: #FDCCFF;
--audio-progress-incoming: #4ada80;
--xt2duer: transparent;
--x1ii3l9m: #025AB7;
--background-lighter-rgb: 255, 255, 255;
--x1qe79im: #4A1728;
--xcvj1tr: #2B1C19;
--xjsx7hu: rgba(255, 255, 255, .2);
--app-background: #eae6df;
--xqpeelq: 12px;
--xuyfqn3: #DCFFAD;
--map-overlay-background: rgba(255, 255, 255, .6);
--focus-animation-deeper: rgba(0, 157, 226, .3);
--x9mpi4i: #CCD3DB;
--xiyjxiy: 50%;
--xtcyl5v: #CBCBCB;
--xorki6q: #858586;
--input-floating-toolbar-button-active-rgb: 240, 242, 245;
--xl6ehhw: #6CD1C6;
--x18tv962: rgba(0, 0, 0, .05);
--button-approve-background: #e1fef2;
--xe34b4q: #C0835D;
--butterbar-notice-smb-icon-rgb: 58, 85, 100;
--x1355uto: rgba(17, 27, 33, .9);
--xakqpoz: x19100ke-B;
--butterbar-ad-action-info-icon-background-rgb: 0, 168, 132;
--x127c7k2: #FBCE03;
--xknzh0g: #DBD8D4;
--round-icon-background: #00a884;
--x1hg3a3i: #8494A3;
--x61nrnt: #0F0F1A;
--xq7csne: #73CAF0;
--x16si9m3: 0px;
--x1wekm4h: #925F40;
--x1uo79mb: #855D29;
--xpo5jsa: #521C34;
--button-plain-background-rgb: 255, 255, 255;
--audio-progress-played-incoming: #30b0e8;
--x1aumypx: transparent;
--desktop-upsell-call-btn: rgba(84, 101, 111, .5);
--xh6bbig: #0457CB;
--x1bt26c2: .2;
--background-lightest-active: #f0f2f5;
--audio-track-incoming-rgb: 231, 232, 233;
--progress-background: rgba(0, 0, 0, .1);
--x1w4oh5j: -1;
--x1ihezxe: #FFFFFF;
--xzmjr4i: rgba(0, 0, 0, .05);
--butterbar-icon-dismiss-rgb: 255, 255, 255;
--xca3acd: #0A131726;
--xkg1yw: #FFE3DE;
--xlucz4u: transparent;
--active-tab-marker: #008069;
--x1wp4dm2: 0px;
--x1it9t5o: 8px;
--x1gwsesr: #0E0D0B;
--x1bln9va: #FB5061;
--x10p4g3l: rgba(0, 0, 0, .9);
--x1t5w2hn: -4px;
--x4bzwim: 2px;
--x1409u6r: #FDBFFF;
--x18kqi07: 12px;
--button-reject-background-rgb: 240, 242, 245;
--x19q6y20: 8px;
--x1nyjpbt: #9A4529;
--focus-animation-rgb: 0, 157, 226;
--x1454p9f: #66625D;
--progress-background-rgb: 0, 0, 0;
--x1oim50r: 62px;
--incoming-background-rgb: 255, 255, 255;
--svg-gray-button-rgb: 11, 20, 26;
--xamwbd6: #FEE3DA;
--butterbar-ad-action-info-icon-dismiss: #54656f;
--x3j9qmu: 6px;
--x1lgju46: transparent;
--x1pxtudg: #2C2720;
--x1xj48ei: #FFFFFF;
--x1sbw8zh: #FFFFFFCC;
--security-icon-background-rgb: 211, 237, 230;
--ptt-draft-button-send-rgb: 0, 168, 132;
--xyowug9: 0px;
--background-lightest-hover: #f5f6f6;
--background-document-with-captions-rgb: 240, 242, 245;
--butterbar-fatal-icon: white;
--butterbar-ad-action-warning-icon: #ffd279;
--xtgk73w: #0A131773;
--x12pvdnb: auto;
--xeh2i4f: #1C2B33;
--xc2eyf9: #2E2A04;
--ptt-waveform-incoming-unplayed-rgb: 206, 208, 209;
--x1elo9o2: #704931;
--x14235dt: #140B11;
--x148q5kp: #B3B9BD;
--x1iwhoz1: #EEF4BE;
--xaen1sr: #FEE2D8;
--xpkdir1: #C3D05B;
--xeor5bq: #855538;
--panel-background-hover: #e7e9ec;
--x1lzl6ls: 3px;
--xz9lgvt: #0171E3;
--xg3eg28: 8px;
--button-background-disabled: #e9edef;
--product-placeholder-background: #ecf1f3;
--x10xf2so: #D2C419;
--xjyn5s5: 1000;
--x16xyn7p: #1C1711;
--x1rl2gpv: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
--xec89u4: #EAEDEE;
--icon-lighter-rgb: 134, 150, 160;
--x2nuj3n: #7AE3C3;
--x15teg21: #D8D8D8;
--x1s3rj83: #6F57EF;
--icon-header-illustration-main-rgb: 6, 207, 156;
--button-reject-hover-strong-rgb: 59, 74, 84;
--x5iej26: 1.25rem;
--x1gepq4w: 0px;
--x19q2g54: #57140A;
--butterbar-order-expansion-banner-background: #def3fc;
--x3e6wff: 40px;
--x1l9b01y: #1F1E1D;
--x1coxh3: #502B21;
--x1i3zj44: #072122;
--xkca2vv: 36px;
--xhyx648: 1600px;
--x1yttrkw: rgba(17, 27, 33, .5);
--x18y53wd: #1C995B;
--input-floating-toolbar-icon-rgb: 134, 150, 160;
--x6leydf: #77A045;
--x1wabinx: #cdcfd1;
--product-thumb-background-deeper-rgb: 216, 221, 229;
--pill-background-rgb: 11, 20, 26;
--x19rwuvz: #791632;
--chatlist-icon: #8696a0;
--xu85mxx: #5B3C29;
--xk24vr6: #9F9891;
--xlqx6v4: #35271E;
--panel-background-deeper: #e9edef;
--ptt-draft-button-cancel-hover: #6f828c;
--x16izkdv: #1C2B33E6;
--button-approve-background-hover-rgb: 178, 245, 218;
--audio-progress-metadata: #8696a0;
--x19ip9ax: #665440;
--icon-fixed: #8696a0;
--x12fesq6: #FBD8DC;
--xtpbmmg: #009477;
--x1333wx4: 1.5rem;
--xs2xjav: 5px;
--x1jq8r9a: #211018;
--x19fognk: #080809;
--x1nz4s1a: #DFF6F5;
--x1lg5mly: #061A1C;
--ptt-draft-button-play-pause-out-of-chat: #fff;
--x1bu8lrs: 0px;
--x8hwl3r: #660E00;
--butterbar-notice-smb-icon: #3a5564;
--input-floating-toolbar-icon: #8696a0;
--x1hmaw5b: 5px;
--poll-invalid-warning-background-rgb: 255, 247, 229;
--xyxtkw8: #95DBD4;
--xqfjaf7: 5px;
--xdhd1li: #535555;
--x1bal5ir: #B52610;
--x16sle5k: #082037;
--xuvcqbj: 0%;
--x1f2g9z6: #DDE2E8;
--xu0829a: #0B0A0A;
--avatar-circle-gray: #d1d7db;
--xjl0f5w: .4;
--x1p8ippb: #f6f8fa;
--notification-info-icon: #54656f;
--pip-player-background: #2a2f32;
--labels-plus-icon-background: #e9edef;
--xmkez2j: #061D19;
--xhla6c7: #FF72A1;
--butterbar-notification-icon-rgb: 255, 255, 255;
--xpv356p: #2F2B61;
--butterbar-icon-dismiss: white;
--x6eaag9: 1rem;
--xza1kjd: #4BDF76;
--x4cdsqv: rgba(0, 0, 0, .15);
--poll-invalid-warning-background: #fff7e5;
--audio-control-outgoing-rgb: 111, 129, 113;
--x133dhs3: #B0E7E1;
--x189z1lz: 0 2px 4px 0 rgba(0, 0, 0, .5);
--x19xa297: #FCEDE3;
--suspicious-background: rgba(241, 92, 109, .8);
--xe31vrr: #E2E5E9;
--drawer-gallery-background-hover: #e7e9ec;
--butterbar-order-expansion-icon-background-rgb: 147, 215, 245;
--xxxr93a: #008069;
--input-button-more: #00a884;
--audio-control-incoming-rgb: 156, 141, 141;
--xtio9k8: #07241F;
--butterbar-ad-action-info-icon-rgb: 255, 255, 255;
--xmgm7zf: 2.5rem;
--startup-icon: rgba(0, 0, 0, .1);
--xp1qc6n: #9D6C2C;
--x14ofxiu: 16px;
--x1k5updb: #0C241C;
--xcxmtbq: #646C71;
--labels-icon-rgb: 17, 27, 33;
--x11nnfiv: #FAFAFA;
--x1qhsdun: 1px;
--unread-timestamp-rgb: 31, 168, 85;
--xh6qjhl: #0E1418;
--unread-background: white;
--x1rtw2ct: rgba(0, 0, 0, .3);
--ptt-ooc-background: #009688;
--xmdq6we: #0A1317;
--x1iqrbwf: 12px;
--x1a730wv: 20px;
--button-disabled: #aebac1;
--x13w4mq5: 32px;
--panel-background: #f0f2f5;
--xv7czx2: #2F373C;
--xuc1hzd: #AFD7FF4D;
--xgh6477: #1A240D;
--xcjltz1: #BDF07C;
--communities-green: #008069;
--wallpaper-background: #efeae2;
--x5suos6: 400% auto;
--ptt-waveform-outgoing-played: #728977;
--xkyicyi: #6F7926;
--x18os2xs: #DBECFF;
--xdldhn: #20272B;
--x99vxrt: #D42A66;
--x3u09uz: #FDF144;
--x198b9t9: #FFE3DE;
--x6vcobp: #85B24D;
--x1vzwp2b: #A1D75E;
--xq3h8wb: #D10335;
--x1e5o1xa: 8px;
--x1rd7thu: #483224;
--poll-disabled-checked-checkbox-receiver: #d1d7db;
--media-gallery-thumb-icon: #bbc4cb;
--x1fowau0: #FFFFFF;
--outgoing-background-deeper: #d1f4cc;
--x6slekt: linear;
--highlight: #008069;
--xa5yyo8: #4BA9FE4D;
--x1pkp4r4: 12px;
--x1s1200s: #E074E8;
--link: #027eb5;
--xcdno1c: #333536;
--x18og1a8: 10px;
--xosmn2t: #61182E;
--xd2ixrr: #A0220F;
--button-reject-hover: #54656f;
--xt23gch: #192024;
--x11zsdp1: x1gpjdt6-B;
--x1sfmfrk: .125rem;
--xiv1y0m: #B0B3B8;
--x1apez3n: 5px;
--dropdown-background-rgb: 255, 255, 255;
--butterbar-ad-action-info-icon: white;
--x1y41tsp: #161410;
--xy5yvoz: 32px;
--x1l9i414: 1.5rem;
--media-editor-video-caption-input-background-rgb: 240, 242, 245;
--navbar-item-active-background: rgba(0, 0, 0, .05);
--x1a4588p: grayscale(100%);
--x1mpr0pw: #E8A12E;
--reactions-tray-background: white;
--x4nsuzh: #1DAA61;
--x14ck2dv: #FF7A66;
--butterbar-blue-nux-icon-rgb: 255, 255, 255;
--active-tab-marker-rgb: 0, 128, 105;
--x153boug: #CFCBC6;
--x1114asj: #ACFCAC;
--x10y4ran: 12px;
--x41emzf: #8FF499;
--x17re1hs: 5px;
--poll-bar-fill-receiver: #00a884;
--x1gbdhdm: #211E03;
--reactions-tray-active-round-background: rgba(11, 20, 26, .1);
--xc9h2oy: #E5DBCD;
--pnh-nux: #53a69b;
--electron-deprecation-app-expired-header: #00a884;
--compose-panel-background-hover: #e9edef;
--audio-control-incoming: #9c8d8d;
--beta-tag-background: #e6e6e6;
--xiwno1u: #FFDBCC;
--payment-status-failed-rgb: 241, 92, 109;
--x1m95bcv: #E8EFAD;
--xrm7izx: #FA6533;
--archived-chat-marker-background-rgb: 233, 237, 239;
--pip-manager-content-rgb: 79, 79, 79;
--x1m69m10: 8px;
--ptt-draft-button-play-pause-hover-rgb: 111, 130, 140;
--poll-bar-fill-sender: #00a884;
--x1dxmqov: #CCD3DB;
--x1et33sf: 5px;
--round-icon-background-rgb: 0, 168, 132;
--audio-control-outgoing: #6f8171;
--x2v0w26: transparent;
--icon-strong-rgb: 84, 101, 111;
--input-floating-toolbar-button-hover-rgb: 233, 237, 239;
--x1pfwwdm: reverse;
--xlq2kmo: #FFFFFF;
--x1hc9riv: rgba(17, 27, 33, .4);
--xgwz7a: 16px;
--xm343uc: 200;
--x1nxwhv: 1rem;
--forward-caption-preview-background-rgb: 255, 255, 255;
--x6axvlg: #042F97;
--success-rgb: 31, 168, 85;
--x15yefs0: #CBB699;
--search-input-container-background: white;
--butterbar-order-expansion-icon-rgb: 4, 102, 146;
--butterbar-notice-circle: #00a884;
--input-empty-value-placeholder: #00a884;
--xik8ccv: 0px;
--ptt-waveform-preview-unplayed-rgb: 206, 208, 209;
--ptt-waveform-outgoing-unplayed: #b0ceae;
--xq7igmb: #7D872A;
--x1ooysaf: #E8FFCA;
--x1b5hoai: 26px;
--xz5hhjv: 24px;
--input-placeholder: #54656f;
--input-floating-toolbar-button-active: #f0f2f5;
--drawer-background-deep: #f0f2f5;
--security-icon-lock: #1fc4b1;
--xdiyg81: #FEFCDD;
--x4utseb: 3px;
--button-approve-background-hover-strong: #7ae3c3;
--search-container-background-rgb: 255, 255, 255;
--x1487n2n: #0457CB;
--audio-track-incoming: #e7e8e9;
--video-player-background: #0b141a;
--xer23z7: rgba(0, 0, 0, .06);
--x16g7o1k: #1F1712;
--poll-bar-container-sender: rgba(11, 20, 26, .1);
--x126rt5m: transparent;
--focus-animation: rgba(0, 157, 226, .22);
--icon-high-emphasis-rgb: 0, 168, 132;
--ptt-waveform-preview-played-rgb: 133, 138, 141;
--x1s60eyr: 10px;
--x10uymja: #FC9775;
--navbar-item-active-background-rgb: 0, 0, 0;
--x17polnx: #523D23;
--xzdavdm: #8A8D91;
--button-reject-background-hover-rgb: 209, 215, 219;
--input-floating-toolbar-icon-disabled: #d1d7db;
--x8m8weg: #DDD2FF;
--xnb9pth: #E0B69C;
--ptt-waveform-preview-unplayed: #ced0d1;
--x1tfu8bt: #140F0C;
--x1iz8wdo: rgba(0, 0, 0, .05);
--xn1oii2: #FFE5FF;
--xzt2scd: 801;
--link-preview-light-rgb: 17, 27, 33;
--button-focus-outline: #00a884;
--x6cgvui: 5px;
--icon-header-illustration-background: rgba(6, 207, 156, .15);
--x1clyshj: rgba(0, 0, 0, .05);
--x1fqccu2: #FBEB1E;
--xxknqzc: #0000008C;
--x1rslf0m: cubic-bezier(.69, 0, .79, .14);
--link-preview-placeholder-image-rgb: 134, 150, 160;
--navbar-background-rgb: 240, 242, 245;
--xm3nkc8: #251E16;
--popup-panel-background: rgba(11, 20, 26, .05);
--xj0uc22: #0372A4;
--x8gv6bx: 0px;
--x1gezpuq: #0A332C;
--xwxij5g: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .5));
--x1phu55o: #FF508B;
--x1w4bzo6: #716D67;
--x1esmk3j: #D31130;
--x1ad7l02: .4;
--panel-background-deep-rgb: 233, 237, 239;
--xva65hi: #F2FDF0;
--xrwcryy: #D4DF78;
--avatar-placeholder-background-rgb: 223, 229, 231;
--butterbar-connection-background-rgb: 255, 210, 121;
--compose-panel-background-hover-rgb: 233, 237, 239;
--xyaxlxh: #FFFFFF;
--x1napzm8: 5px;
--panel-input-background-rgb: 233, 237, 239;
--ptt-draft-button-play-pause-rgb: 102, 119, 129;
--xh7z1na: 32px;
--background-default-rgb: 255, 255, 255;
--x1lieqwx: 400;
--x1pdec6m: #B80531;
--ptt-draft-button-cancel: #667781;
--x184x6p: #092D2F;
--x8w5o7o: #93D7F5;
--butterbar-ad-action-info-icon-background: #00a884;
--x17f5041: #FDF9B7;
--xcavrio: #6D4E26;
--x1ori5aa: #545C1D;
--app-background-stripe-rgb: 0, 168, 132;
--ptt-draft-button-stop-hover-rgb: 255, 78, 68;
--xq0o70q: #FFFCF5;
--x1cj1owr: #A0A7AB;
--x19huaox: 24px;
--butterbar-fatal-background-rgb: 255, 210, 121;
--x3ytj5f: 8px;
--xqmuf1q: #0E2C23;
--cover-image-background: #eaf2f5;
--x1nsasb1: #F7F5FF;
--xios89i: 32px;
--x1ttpv1t: 6px;
--xftuvfa: #080809;
--x9x55wa: #371341;
--x1i0mzfo: rgba(17, 27, 33, .05);
--xbe5wqi: #B1ABA5;
--icon-search-back-rgb: 0, 168, 132;
--x1c4rllk: #96ECCF;
--xo7axmw: .2s;
--filters-item-background-rgb: 240, 242, 245;
--message-background-deep-rgb: 11, 20, 26;
--background-document-with-captions: #f0f2f5;
--button-alternative-background-rgb: 255, 255, 255;
--x1ev4bvd: #F0F0F0;
--x1393xce: #CAF792;
--button-plain-background-hover: white;
--popup-panel-background-rgb: 11, 20, 26;
--x1km8cd1: #FFB938;
--x16mvtsk: 5px;
--focus-animation-deeper-rgb: 0, 157, 226;
--x10brjbm: auto;
--butterbar-battery-icon-rgb: 255, 255, 255;
--search-input-container-background-active: white;
--compose-input-background: white;
--x1a4bunx: #000000;
--navbar-separator-rgb: 0, 0, 0;
--x1s825o0: 12px;
--x19dpyk1: 64px;
--x1uxmyvk: #48120A;
--pnh-nux-rgb: 83, 166, 155;
--xz27ylr: transparent;
--xmqvuy9: #FFFFFF;
--xko00sl: #22B7A8;
--xqu9v5: #E2E5E9;
--notification-e2e-background-rgb: 255, 238, 205;
--x1k4myr1: 1px;
--xtpzy97: #150806;
--x1ug5ket: #F4F4F4;
--poll-button-disabled-receiver: #d1d7db;
--x12dq59: rgba(0, 0, 0, .5);
--x9yfhik: 8px;
--electron-deprecation-app-expired-window: white;
--xfatfhv: #FEEFF2;
--stylex-logical-start: left;
--incoming-background-deeper: #f5f6f6;
--product-thumb-overlay-background: rgba(17, 27, 33, .5);
--xwutvj3: 12px;
--x14j7pil: #027EB5;
--butterbar-notice-background: #e1fef2;
--wallpaper-background-rgb: 239, 234, 226;
--x8g8wmh: 0px;
--x1drzc3: #F0F0F0;
--xhs2ewt: transparent;
--x154p3i6: transparent;
--x1ftodw5: 4px;
--quick-action-button: white;
--drawer-background-rgb: 240, 242, 245;
--xwborny: #4B215A;
--xwca8m6: #141425;
--xu32des: #13100C;
--transient-background-rgb: 252, 245, 235;
--icon-fixed-rgb: 134, 150, 160;
--drawer-gallery-background-active: #dee0e3;
--xqt9fth: #F53947;
--intro-logo: rgba(78, 100, 112, .4);
--x1q1mvnb: rgba(29, 170, 97, .3);
--xiw6jcg: #323436;
--x168tnhs: 4px;
--xl1v46g: #000000;
--x19wb9r: 0s;
--x1v5iyzd: #FA99A4;
--menu-bar-item-background-active-rgb: 11, 20, 26;
--toast-background-rgb: 11, 20, 26;
--xqvubnd: #CCD86A;
--x1u67coa: solid;
--x12qb30c: #FFFFFF;
--badge-pending: #00a884;
--x163rsvb: #02A698;
--x1evxk78: #FFFFFF;
--xk8pswy: #5C7B34;
--badge-icon-rgb: 255, 255, 255;
--x1clm63l: linear;
--app-background-rgb: 234, 230, 223;
--xrvr3k: #051415;
--x1w7u7ze: 2px;
--icon-search-back: #00a884;
--focus: #009de2;
--x96nfoq: #D1C4FF;
--x1a0gmal: #2C3010;
--notification-e2e-background: #ffeecd;
--x18vi0fm: #FFABC7;
--x13jgnd1: #757778;
--butterbar-order-expansion-icon-background: #93d7f5;
--xyil8vw: #CCD3DB;
--x132c4bx: .5;
--x1m0kmm: 5px;
--x1p3v5bs: #76B8FE;
--xpa06uk: #4E606F;
--photopicker-overlay-background: rgba(84, 101, 111, .8);
--xeuc15l: 0px;
--x1gowab3: #028377;
--xjfshc: #F2F8FF;
--x5j2d7v: #061D28;
--chat-info-drawer-thumb-background-rgb: 240, 242, 245;
--archived-chat-marker-background: #e9edef;
--poll-checkmark-receiver-rgb: 255, 255, 255;
--x178rz4h: 5px;
--xzq5v5e: #5D6C7B;
--stylex-logical-end: right;
--message-selection-highlight: rgba(0, 128, 105, .08);
--x41rit2: #7D858A;
--butterbar-blue-nux-icon: white;
--audio-progress-metadata-rgb: 134, 150, 160;
--x1d6k8u6: 14px;
--search-input-background: #f0f2f5;
--ptt-draft-button-play-pause-hover: #6f828c;
--multi-skin-tone-picker-emoji-selected-background: #d1d7db;
--status-background-rgb: 11, 20, 26;
--x1cqce2t: 24px;
--xe5i04x: #8A8D91;
--x215qz1: #0866FF;
--audio-progress-incoming-rgb: 74, 218, 128;
--x155matd: 4px;
--x6ixmsi: 12px;
--xiyfnn2: 50%;
--drawer-gallery-background-rgb: 240, 242, 245;
--x149dqt: #FFFFFF;
--reaction-button-rgb: 255, 255, 255;
--sender-superpower-title-rgb: 0, 168, 132;
--xknzs7q: #25211B;
--empty-state-background: #f7f8fa;
--xm0hsv2: #243112;
--xmo9kjt: 6px;
--x9nx3t: #FCB3FF;
--filters-item-active-background-rgb: 231, 252, 227;
--x4cz878: 16px;
--xyeoegy: 5px;
--x10gbkzf: #101708;
--notification-biz-background: rgba(213, 253, 237, .95);
--xjgtunu: #10090D;
--butterbar-ad-action-warning-icon-background-rgb: 255, 255, 255;
--x1pap48z: 72px;
--x1949u8: rgba(0, 0, 0, .7);
--butterbar-ad-action-warning-icon-dismiss-rgb: 84, 101, 111;
--xn9bwek: 16px;
--search-input-background-rgb: 240, 242, 245;
--x6m6ly2: #A32553;
--x1klt3ed: #E1F0FF;
--xglxui4: #073D76;
--ptt-blue: #4fc3f7;
--xgujw41: #93C455;
--ptt-waveform-incoming-played-rgb: 133, 138, 141;
--x186r0mc: #959393;
--media-gallery-thumb-background-rgb: 223, 227, 231;
--x1hvovgm: 12px;
--xpoq6yp: 400;
--xfa0l2i: #1D1A16;
--x1b3343y: #876F54;
--reactions-bubble-counter-rgb: 60, 60, 67;
--panel-background-lighter: #f7f8fa;
--x1mlhqnx: #1B0D1F;
--xcay58i: #504334;
--ptt-thumb-outgoing-unplayed: #6f8171;
--x16xtl57: 5px;
--electron-deprecation-app-expired-window-rgb: 255, 255, 255;
--xkvygis: #65686C;
--xkd1r8e: 5px;
--splashscreen-progress-background: rgba(0, 0, 0, 0.1);
--media-editor-video-caption-input-background: #f0f2f5;
--x1c4lz48: 8px;
--x1ch73zb: #A8A8A8;
--x5lf19y: #FFFFFF;
--x1i7f8yd: #CCE5F0;
--butterbar-notification-icon: white;
--x9huxp1: 10px;
--ptt-thumb-outgoing-played-rgb: 79, 195, 247;
--ptt-draft-button-stop: #ff3b30;
--x1hcjaay: .4s;
--xpb0mib: rgba(255, 255, 255, .8);
--security-icon-shield: #f0faf7;
--butterbar-green-nux-icon-background-rgb: 0, 168, 132;
--link-preview-light: rgba(17, 27, 33, .3);
--button-reject-hover-rgb: 84, 101, 111;
--xk3by9m: #F1F4F7B2;
--xemtr2e: #201019;
--forward-caption-preview-background: white;
--comments-modal-background: white;
--reactions-details-background-rgb: 255, 255, 255;
--x1tcjpmd: #801100;
--unread-bar-background: rgba(255, 255, 255, .25);
--button-alternative-rgb: 0, 157, 226;
--background-default-active: #f0f2f5;
--xqx1b3w: #cdcfd1;
--pip-drag-bar: white;
--chat-marker-rgb: 27, 135, 72;
--status-thumbnail-background-rgb: 202, 202, 202;
--reactions-menu-tab-separator-rgb: 60, 60, 67;
--x117ptrb: opacity .2s ease;
--xfrk6k2: solid;
--button-approve: #008069;
--input-placeholder-rgb: 84, 101, 111;
--x1p42rpq: #FFFFFF;
--x11s6emu: 566px;
--butterbar-ad-action-warning-background: #ffd279;
--button-alternative-background: white;
--x6r21d0: #0759F2;
--x11mxrwm: 100;
--focus-lighter-rgb: 0, 157, 226;
--photopicker-overlay-background-rgb: 84, 101, 111;
```

### Dependencies

```css
--WDS-accent: --WDS-green-500;
--WDS-accent-RGB: --WDS-green-500-RGB;
--WDS-accent-deemphasized: --WDS-green-100;
--WDS-accent-deemphasized-RGB: --WDS-green-100-RGB;
--WDS-accent-emphasized: --WDS-green-700;
--WDS-accent-emphasized-RGB: --WDS-green-700-RGB;
--WDS-secondary-negative: --WDS-red-400;
--WDS-secondary-negative-RGB: --WDS-red-400-RGB;
--WDS-secondary-negative-deemphasized: --WDS-red-75;
--WDS-secondary-negative-deemphasized-RGB: --WDS-red-75-RGB;
--WDS-secondary-negative-emphasized: --WDS-red-500;
--WDS-secondary-negative-emphasized-RGB: --WDS-red-500-RGB;
--WDS-secondary-positive: --WDS-green-500;
--WDS-secondary-positive-RGB: --WDS-green-500-RGB;
--WDS-secondary-positive-deemphasized: --WDS-green-75;
--WDS-secondary-positive-deemphasized-RGB: --WDS-green-75-RGB;
--WDS-secondary-warning: --WDS-yellow-400;
--WDS-secondary-warning-RGB: --WDS-yellow-400-RGB;
--WDS-secondary-warning-deemphasized: --WDS-yellow-75;
--WDS-secondary-warning-deemphasized-RGB: --WDS-yellow-75-RGB;
--WDS-content-default: --WDS-cool-gray-1000;
--WDS-content-default-RGB: --WDS-cool-gray-1000-RGB;
--WDS-content-deemphasized: --WDS-cool-gray-600;
--WDS-content-deemphasized-RGB: --WDS-cool-gray-600-RGB;
--WDS-content-disabled: --WDS-cool-gray-300;
--WDS-content-disabled-RGB: --WDS-cool-gray-300-RGB;
--WDS-content-on-accent: --WDS-white;
--WDS-content-on-accent-RGB: --WDS-white-RGB;
--WDS-content-action-default: --WDS-cool-gray-1000;
--WDS-content-action-default-RGB: --WDS-cool-gray-1000-RGB;
--WDS-content-action-emphasized: --WDS-green-600;
--WDS-content-action-emphasized-RGB: --WDS-green-600-RGB;
--WDS-content-external-link: --WDS-cobalt-500;
--WDS-content-external-link-RGB: --WDS-cobalt-500-RGB;
--WDS-content-inverse: --WDS-white;
--WDS-content-inverse-RGB: --WDS-white-RGB;
--WDS-content-read: --WDS-cobalt-400;
--WDS-content-read-RGB: --WDS-cobalt-400-RGB;
--WDS-background-wash-plain: --WDS-white;
--WDS-background-wash-plain-RGB: --WDS-white-RGB;
--WDS-background-wash-inset: --WDS-warm-gray-75;
--WDS-background-wash-inset-RGB: --WDS-warm-gray-75-RGB;
--WDS-background-elevated-wash-plain: --WDS-white;
--WDS-background-elevated-wash-plain-RGB: --WDS-white-RGB;
--WDS-background-elevated-wash-inset: --WDS-warm-gray-75;
--WDS-background-elevated-wash-inset-RGB: --WDS-warm-gray-75-RGB;
--WDS-background-dimmer: --WDS-black-alpha-60;
--WDS-background-dimmer-RGB: --WDS-black-alpha-60-RGB;
--WDS-surface-default: --WDS-white;
--WDS-surface-default-RGB: --WDS-white-RGB;
--WDS-surface-emphasized: --WDS-warm-gray-75;
--WDS-surface-emphasized-RGB: --WDS-warm-gray-75-RGB;
--WDS-surface-elevated-default: --WDS-white;
--WDS-surface-elevated-default-RGB: --WDS-white-RGB;
--WDS-surface-elevated-emphasized: --WDS-warm-gray-75;
--WDS-surface-elevated-emphasized-RGB: --WDS-warm-gray-75-RGB;
--WDS-surface-highlight: --WDS-warm-gray-300-alpha-15;
--WDS-surface-highlight-RGB: --WDS-warm-gray-300-alpha-15-RGB;
--WDS-surface-inverse: --WDS-cool-gray-800;
--WDS-surface-inverse-RGB: --WDS-cool-gray-800-RGB;
--WDS-surface-pressed: --WDS-cool-gray-alpha-20;
--WDS-surface-pressed-RGB: --WDS-cool-gray-alpha-20-RGB;
--WDS-lines-divider: --WDS-cool-gray-alpha-10;
--WDS-lines-divider-RGB: --WDS-cool-gray-alpha-10-RGB;
--WDS-lines-outline-default: --WDS-cool-gray-400;
--WDS-lines-outline-default-RGB: --WDS-cool-gray-400-RGB;
--WDS-lines-outline-deemphasized: --WDS-cool-gray-alpha-20;
--WDS-lines-outline-deemphasized-RGB: --WDS-cool-gray-alpha-20-RGB;
--WDS-persistent-activity-indicator: --WDS-green-400;
--WDS-persistent-activity-indicator-RGB: --WDS-green-400-RGB;
--WDS-persistent-always-black: --WDS-cool-gray-1000;
--WDS-persistent-always-black-RGB: --WDS-cool-gray-1000-RGB;
--WDS-persistent-always-white: --WDS-white;
--WDS-persistent-always-white-RGB: --WDS-white-RGB;
--WDS-persistent-always-branded: --WDS-green-500;
--WDS-persistent-always-branded-RGB: --WDS-green-500-RGB;
--WDS-systems-bubble-surface-incoming: --WDS-white;
--WDS-systems-bubble-surface-incoming-RGB: --WDS-white-RGB;
--WDS-systems-bubble-surface-outgoing: --WDS-green-100;
--WDS-systems-bubble-surface-outgoing-RGB: --WDS-green-100-RGB;
--WDS-systems-bubble-content-deemphasized: --WDS-cool-gray-alpha-50;
--WDS-systems-bubble-surface-overlay: --WDS-warm-gray-300-alpha-15;
--WDS-systems-bubble-surface-system: --WDS-white-alpha-90;
--WDS-systems-bubble-surface-system-RGB: --WDS-white-alpha-90-RGB;
--WDS-systems-bubble-surface-e2e: --WDS-yellow-100;
--WDS-systems-bubble-surface-e2e-RGB: --WDS-yellow-100-RGB;
--WDS-systems-bubble-content-e2e: --WDS-cool-gray-600;
--WDS-systems-bubble-content-e2e-RGB: --WDS-cool-gray-600-RGB;
--WDS-systems-bubble-surface-business: --WDS-emerald-100;
--WDS-systems-bubble-surface-business-RGB: --WDS-emerald-100-RGB;
--WDS-systems-chat-surface-composer: --WDS-white;
--WDS-systems-chat-surface-composer-RGB: --WDS-white-RGB;
--WDS-systems-chat-background-wallpaper: --WDS-cream-85;
--WDS-systems-chat-background-wallpaper-RGB: --WDS-cream-85-RGB;
--WDS-systems-chat-foreground-wallpaper: --WDS-cream-200;
--WDS-systems-chat-foreground-wallpaper-RGB: --WDS-cream-200-RGB;
--WDS-systems-chat-surface-tray: --WDS-warm-gray-75;
--WDS-systems-chat-surface-tray-RGB: --WDS-warm-gray-75-RGB;
--WDS-systems-status-seen: --WDS-warm-gray-300;
--WDS-systems-status-seen-RGB: --WDS-warm-gray-300-RGB;
--WDS-components-platform-gesture-bar: --WDS-black-alpha-50;
--WDS-components-platform-gesture-bar-RGB: --WDS-black-alpha-50-RGB;
--WDS-components-platform-status-bar: --WDS-black-alpha-80;
--WDS-components-platform-status-bar-RGB: --WDS-black-alpha-80-RGB;
--WDS-components-surface-nav-bar: --WDS-white;
--WDS-components-surface-nav-bar-RGB: --WDS-white-RGB;
--WDS-app-wash: --WDS-warm-gray-200;
--WDS-app-wash-RGB: --WDS-warm-gray-200-RGB;
```

### Semantic

```css
success: [object Object];
warning: [object Object];
error: [object Object];
info: [object Object];
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| xs | 299px | max-width |
| sm | 500px | max-width |
| 564px | 564px | max-width |
| sm | 600px | max-width |
| sm | 660px | max-width |
| sm | 679px | max-width |
| md | 720px | max-width |
| md | 748px | max-width |
| md | 767px | max-width |
| md | 768px | min-width |
| md | 780px | min-width |
| md | 799px | max-width |
| md | 800px | min-width |
| 850px | 850px | max-width |
| 880px | 880px | max-width |
| 882px | 882px | max-width |
| 899px | 899px | max-width |
| 900px | 900px | max-width |
| 901px | 901px | min-width |
| lg | 980px | min-width |
| lg | 999px | max-width |
| lg | 1000px | max-width |
| lg | 1023px | max-width |
| lg | 1024px | max-width |
| lg | 1025px | min-width |
| lg | 1040px | max-width |
| 1095px | 1095px | max-width |
| 1200px | 1200px | max-width |
| 1208px | 1208px | max-width |
| xl | 1300px | max-width |
| 1415px | 1415px | max-width |
| 1441px | 1441px | min-width |
| 1920px | 1920px | max-width |
| 1921px | 1921px | min-width |

## Transitions & Animations

### Common Transitions

```css
transition: all;
```

### Keyframe Animations

**x10fmoen-B**
```css
@keyframes x10fmoen-B {
  0% { transform: translate(-60%, -95%) rotate(-45deg); }
  50% { transform: translateY(95%) rotate(-45deg); }
  100% { transform: translateY(95%) rotate(-45deg); }
}
```

**x12ve19h-B**
```css
@keyframes x12ve19h-B {
  0% { opacity: var(--glimmer-on-white-background-min-opacity); }
  100% { opacity: var(--glimmer-on-white-background-max-opacity); }
}
```

**x13v8ua5-B**
```css
@keyframes x13v8ua5-B {
  100% { opacity: 0; }
}
```

**x15aousm-B**
```css
@keyframes x15aousm-B {
  0% { opacity: 0; transform: translateY(-50px); }
  30% { opacity: 0; transform: translateY(-50px); }
  100% { opacity: 1; transform: translateY(0px); }
}
```

**x15cgrjh-B**
```css
@keyframes x15cgrjh-B {
  0% { transform: translateY(-99px); }
  100% { transform: translateY(0px); }
}
```

**x16ddlwn-B**
```css
@keyframes x16ddlwn-B {
  0% { transform: translateY(0px); }
  10% { transform: translateY(4px); }
  20% { transform: translateY(0px); }
  30% { transform: translateY(-4px); }
  40% { transform: translateY(0px); }
}
```

**x17jjf1f-B**
```css
@keyframes x17jjf1f-B {
  0% { width: 330px; }
  100% { opacity: 0; width: 0px; }
}
```

**x17qceat-B**
```css
@keyframes x17qceat-B {
  0% { opacity: 1; }
  100% { opacity: 0; }
}
```

**x18f3kag-B**
```css
@keyframes x18f3kag-B {
  0% { max-height: 40px; }
  100% { max-height: 140px; }
}
```

**x18re5ia-B**
```css
@keyframes x18re5ia-B {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (1 instances)

```css
.button {
  color: rgb(27, 135, 85);
  font-size: 16px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

### Links (6 instances)

```css
.link {
  color: rgb(27, 135, 85);
  font-size: 16px;
  font-weight: 400;
}
```

### Navigation (2 instances)

```css
.navigatio {
  color: rgb(59, 74, 84);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: static;
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(27, 135, 85);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(27, 135, 85);
  font-size: 16px;
  font-weight: 400;
```

## Layout System

**0 grid containers** and **0 flex containers** detected.

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 0 passing, 0 failing color pairs

## Design System Score

**Overall: 88/100 (Grade: B)**

| Category | Score |
|----------|-------|
| Color Discipline | 100/100 |
| Typography Consistency | 100/100 |
| Spacing System | 70/100 |
| Shadow Consistency | 85/100 |
| Border Radius Consistency | 100/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Consistent typography system, Clean elevation system, Consistent border radii, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 244 !important rules — prefer specificity over overrides
- 93% of CSS is unused — consider purging
- 20382 duplicate CSS declarations

## Gradients

**1 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | — | 2 | brand |

```css
background: linear-gradient(rgb(219, 216, 212), rgb(219, 216, 212));
```

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 2 | objectFit: fill, borderRadius: 0px, shape: square |

**Aspect ratios:** 1:1 (2x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

## Brand Voice

**Tone:** neutral · **Pronoun:** third-person · **Headings:** unknown (tight)

### Top CTA Verbs

- **update** (1)

### Button Copy Patterns

- "update google chrome" (1×)

## Page Intent

**Type:** `landing` (confidence 0.45)
**Description:** Log in to WhatsApp Web for simple, reliable and private messaging on your desktop. Send and receive messages and files with ease, all for free.

## Material Language

**Label:** `flat` (confidence 0.55)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.282 |
| Shadow profile | none |
| Avg shadow blur | 0px |
| Max radius | 0px |
| backdrop-filter in use | no |
| Gradients | 1 |

## Imagery Style

**Label:** `icon-only` (confidence 0.6)
**Counts:** total 2, svg 0, icon 2, screenshot-like 0, photo-like 0
**Dominant aspect:** square-ish
**Radius profile on images:** square

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Times` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
