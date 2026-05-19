import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LocationBubble } from "@/components/ui/whatsapp/location-bubble";

const meta: Meta<typeof LocationBubble> = {
  title: "WhatsApp/LocationBubble",
  component: LocationBubble,
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof LocationBubble>;

/** With name and address — timestamp in info area */
export const WithNameAndAddress: Story = {
  args: {
    variant: "outgoing",
    name: "Seoul City Hall",
    address: "Seoul, South Korea",
    latitude: 37.5666,
    longitude: 126.978,
    timestamp: "07:38 AM",
    status: "read",
    showTail: true,
  },
};

/** Coordinates only — timestamp overlaid on map */
export const CoordinatesOnly: Story = {
  args: {
    variant: "outgoing",
    latitude: 37.5666,
    longitude: 126.978,
    timestamp: "3:37",
    status: "read",
    showTail: true,
  },
};

/** Incoming with name */
export const IncomingWithName: Story = {
  args: {
    variant: "incoming",
    name: "Gangnam Station",
    address: "Gangnam-gu, Seoul",
    latitude: 37.498,
    longitude: 127.0276,
    timestamp: "10:15",
    showTail: true,
  },
};

/** Incoming coordinates only */
export const IncomingCoordinatesOnly: Story = {
  args: {
    variant: "incoming",
    latitude: 37.498,
    longitude: 127.0276,
    timestamp: "10:15",
    showTail: true,
  },
};
