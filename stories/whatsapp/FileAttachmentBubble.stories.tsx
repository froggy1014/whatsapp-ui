import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import React from "react";
import { FileAttachmentBubble } from "@/components/ui/whatsapp/file-attachment-bubble";

const meta: Meta<typeof FileAttachmentBubble> = {
  title: "WhatsApp/FileAttachmentBubble",
  component: FileAttachmentBubble,
  parameters: { layout: "padded" },
  args: { fileName: "Project Brief.pdf", fileSize: "1.1 MB", fileType: "pdf" },
};
export default meta;
type Story = StoryObj<typeof FileAttachmentBubble>;

export const Incoming: Story = {
  args: { variant: "incoming", timestamp: "10:15", downloadStatus: "idle", showTail: true },
};

export const Outgoing: Story = {
  args: { variant: "outgoing", timestamp: "10:15", status: "read", downloadStatus: "done", showTail: true },
};

export const Downloading: Story = {
  args: { variant: "incoming", timestamp: "10:15", downloadStatus: "downloading", downloadProgress: 60, showTail: true },
};
