import type { Preview } from "@storybook/nextjs-vite";
import "../components/ui/whatsapp/styles/whatsapp.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "chat",
      values: [
        { name: "chat", value: "var(--wa-conversation-bg, #f5f0e8)" },
        { name: "white", value: "#ffffff" },
        { name: "dark", value: "#0b141a" },
      ],
    },
    layout: "padded",
    a11y: { test: "todo" },
  },
};

export default preview;
