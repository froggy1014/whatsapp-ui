import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DateSeparator } from "@/components/ui/whatsapp/date-separator";

const meta: Meta<typeof DateSeparator> = {
  title: "WhatsApp/DateSeparator",
  component: DateSeparator,
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof DateSeparator>;

export const Today: Story = { args: { label: "Today" } };
export const Yesterday: Story = { args: { label: "Yesterday" } };
export const FullDate: Story = { args: { label: "Fri, Jul 26" } };

export const InContext: Story = {
  render: () => (
    <div className="flex flex-col gap-1 p-4" style={{ background: "var(--wa-conversation-bg, #f5f0e8)" }}>
      <DateSeparator label="Yesterday" />
      <DateSeparator label="Today" />
      <DateSeparator label="Fri, Jul 26" />
    </div>
  ),
};
