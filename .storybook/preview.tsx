import React from "react";
import type { Preview } from "@storybook/nextjs-vite";
import "../app/globals.css";

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const bg = context.globals?.backgrounds?.value ?? "#f5f0e8";
      const isFullscreen = context.parameters?.layout === "fullscreen";
      return (
        <div
          className="wa-wallpaper"
          style={{ background: bg, minHeight: "100vh", padding: isFullscreen ? "0" : "24px" }}
        >
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    backgrounds: {
      default: "chat",
      values: [
        { name: "chat", value: "#f5f0e8" },
        { name: "white", value: "#ffffff" },
        { name: "dark", value: "#0b141a" },
      ],
    },
    layout: "centered",
    a11y: { test: "todo" },
  },
};

export default preview;
