import React from "react";
import type { Preview } from "@storybook/nextjs-vite";
import "../app/globals.css";

const BACKGROUNDS = {
  light: "#f5f0e8",
  dark: "#0b141a",
};

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Color theme",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark", title: "Dark", icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "light",
  },
  decorators: [
    (Story, context) => {
      const theme = (context.globals?.theme ?? "light") as "light" | "dark";
      const isDark = theme === "dark";
      const isFullscreen = context.parameters?.layout === "fullscreen";
      const bg = BACKGROUNDS[theme];

      React.useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
          root.classList.add("dark");
          root.setAttribute("data-theme", "dark");
        } else {
          root.classList.remove("dark");
          root.setAttribute("data-theme", "light");
        }
      }, [isDark]);

      return (
        <div
          className="wa-wallpaper"
          style={{
            minHeight: "100vh",
            padding: isFullscreen ? "0" : "24px",
          }}
        >
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    options: {
      storySort: {
        order: [
          "WhatsApp",
          [
            "Preview",
            "ChatHeader",
            "ChatListItem",
            "ChatBubble",
            "MediaBubble",
            "TypingIndicator",
            "DateSeparator",
            "ReactionPill",
            "MessageInput",
            "Templates",
            ["*", "CallPermission"],
          ],
        ],
      },
    },
    backgrounds: { disable: true },
    layout: "centered",
    a11y: { test: "todo" },
  },
};

export default preview;
