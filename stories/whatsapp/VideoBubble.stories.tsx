import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { VideoBubble } from "@/components/ui/whatsapp/video-bubble";

const meta: Meta<typeof VideoBubble> = {
  title: "WhatsApp/VideoBubble",
  component: VideoBubble,
  parameters: { layout: "centered", backgrounds: { disable: true } },
  decorators: [
    (Story) => (
      <div className="w-[400px] p-4">
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof VideoBubble>;

const SAMPLE_VIDEO = "https://www.w3schools.com/html/mov_bbb.mp4";

export const Incoming: Story = {
  args: {
    variant: "incoming",
    src: SAMPLE_VIDEO,
    duration: "0:10",
    timestamp: "11:42 AM",
    showTail: true,
  },
};

export const Outgoing: Story = {
  args: {
    variant: "outgoing",
    src: SAMPLE_VIDEO,
    duration: "0:10",
    timestamp: "11:42 AM",
    status: "read",
    showTail: true,
  },
};

export const WithCaption: Story = {
  args: {
    variant: "incoming",
    src: SAMPLE_VIDEO,
    caption: "Check out this video!",
    duration: "0:10",
    timestamp: "11:42 AM",
    showTail: true,
  },
};
