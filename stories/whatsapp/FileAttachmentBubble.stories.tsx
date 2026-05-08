import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FileAttachmentBubble } from "@/components/ui/whatsapp/file-attachment-bubble";

const meta: Meta<typeof FileAttachmentBubble> = {
  title: "WhatsApp/FileAttachmentBubble",
  component: FileAttachmentBubble,
  parameters: { layout: "padded" },
  args: { fileName: "IMG_0475.png", fileSize: "2.4 MB", fileType: "png" },
};
export default meta;
type Story = StoryObj<typeof FileAttachmentBubble>;

export const IncomingIdle: Story = {
  args: { variant: "incoming", timestamp: "10:15", downloadStatus: "idle", showTail: true },
};

export const OutgoingRead: Story = {
  args: { variant: "outgoing", timestamp: "10:15", status: "read", downloadStatus: "done", showTail: true },
};

export const Downloading: Story = {
  args: { variant: "incoming", timestamp: "10:15", downloadStatus: "downloading", downloadProgress: 60, showTail: true },
};

export const PDF: Story = {
  args: { variant: "incoming", fileName: "Project Brief.pdf", fileSize: "1.1 MB", fileType: "pdf", timestamp: "09:40", downloadStatus: "idle", showTail: true },
};

export const BothVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-2 p-4" style={{ background: "var(--wa-conversation-bg, #f5f0e8)" }}>
      <FileAttachmentBubble variant="incoming" fileName="IMG_0475.png" fileSize="2.4 MB" fileType="png" timestamp="10:15" downloadStatus="idle" showTail />
      <FileAttachmentBubble variant="outgoing" fileName="IMG_0481.png" fileSize="2.8 MB" fileType="png" timestamp="10:15" status="read" downloadStatus="done" showTail />
    </div>
  ),
};
