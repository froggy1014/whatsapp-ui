import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ImageBubble } from "@/components/ui/whatsapp/image-bubble";

const PLACEHOLDER = "https://picsum.photos/seed/wa/400/300";
const PORTRAIT = "https://picsum.photos/seed/wa2/300/400";

const meta: Meta<typeof ImageBubble> = {
  title: "WhatsApp/ImageBubble",
  component: ImageBubble,
  parameters: { layout: "padded" },
  args: { src: PLACEHOLDER, alt: "Shared photo" },
};
export default meta;
type Story = StoryObj<typeof ImageBubble>;

export const IncomingNoCaption: Story = {
  args: { variant: "incoming", timestamp: "10:24", showTail: true },
};

export const OutgoingNoCaption: Story = {
  args: { variant: "outgoing", timestamp: "10:26", status: "read", showTail: true },
};

export const WithCaption: Story = {
  args: { variant: "outgoing", caption: "Japan looks amazing! 🗼", timestamp: "10:27", status: "delivered", showTail: true },
};

export const Portrait: Story = {
  args: { variant: "incoming", src: PORTRAIT, timestamp: "11:00", showTail: true },
};

export const BothVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-2 p-4" style={{ background: "var(--wa-conversation-bg, #f5f0e8)" }}>
      <ImageBubble variant="incoming" src={PLACEHOLDER} timestamp="10:24" showTail />
      <ImageBubble variant="outgoing" src={PORTRAIT} caption="Check this out 🔥" timestamp="10:26" status="read" showTail />
    </div>
  ),
};
