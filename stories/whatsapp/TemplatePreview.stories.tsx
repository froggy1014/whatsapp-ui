import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import React from "react";
import { TemplatePreview } from "@/components/ui/whatsapp/template-preview";

const meta: Meta = {
  title: "WhatsApp/TemplatePreview",
  parameters: { layout: "fullscreen", backgrounds: { disable: true } },
};
export default meta;
type Story = StoryObj;

export const AuthenticationOTP: Story = {
  name: "Authentication / One-time Passcode",
  render: () => (
    <div className="min-h-screen p-6">
      <TemplatePreview
        style={{ maxWidth: 400 }}
        formData={{
          name: "otp_verification",
          language: "en_US",
          category: "AUTHENTICATION",
          headerType: "none",
          headerText: "",
          bodyText: "123456 is your verification code. For your security, do not share this code.",
          footerText: "",
          buttons: [],
        }}
      />
    </div>
  ),
};

export const UtilityDefault: Story = {
  name: "Utility / Default",
  render: () => (
    <div className="min-h-screen p-6">
      <TemplatePreview
        style={{ maxWidth: 400 }}
        formData={{
          name: "shipping_update",
          language: "en_US",
          category: "UTILITY",
          headerType: "none",
          headerText: "",
          bodyText: "Good news! Your order 23KFEJJ2312 has shipped!\n\nHere's your tracking information, please check link below.",
          footerText: "",
          buttons: [
            { type: "URL", text: "Track shipment", url: "https://example.com/track" },
          ],
        }}
      />
    </div>
  ),
};

export const UtilityFlows: Story = {
  name: "Utility / Flows",
  render: () => (
    <div className="min-h-screen p-6">
      <TemplatePreview
        style={{ maxWidth: 400 }}
        formData={{
          name: "feedback_request",
          language: "en_US",
          category: "UTILITY",
          headerType: "none",
          headerText: "",
          bodyText: "We have delivered your order! Your feedback ensures we continually improve. Please share your thoughts on your recent order",
          footerText: "",
          buttons: [
            { type: "QUICK_REPLY", text: "Share feedback" },
          ],
        }}
      />
    </div>
  ),
};

export const UtilityCallingPermission: Story = {
  name: "Utility / Calling Permission",
  render: () => (
    <div className="min-h-screen p-6">
      <TemplatePreview
        style={{ maxWidth: 400 }}
        formData={{
          name: "calling_permission",
          language: "en_US",
          category: "UTILITY",
          headerType: "text",
          headerText: "Can Jasper's Market call you?",
          bodyText: "You can update your preference anytime in the business profile.",
          footerText: "",
          buttons: [
            { type: "QUICK_REPLY", text: "Choose preference" },
          ],
        }}
      />
    </div>
  ),
};

export const MarketingDefault: Story = {
  name: "Marketing / Default",
  render: () => (
    <div className="min-h-screen p-6">
      <TemplatePreview
        style={{ maxWidth: 400 }}
        formData={{
          name: "promo_campaign",
          language: "en_US",
          category: "MARKETING",
          headerType: "none",
          headerText: "",
          bodyText: "Hey there! Check out our fresh groceries now!\n\nUse code *HEALTH* to get additional 10% off on your entire purchase.",
          footerText: "",
          buttons: [
            { type: "URL", text: "Shop now", url: "https://example.com/shop" },
            { type: "QUICK_REPLY", text: "Copy code" },
          ],
        }}
      />
    </div>
  ),
};

export const MarketingFlows: Story = {
  name: "Marketing / Flows",
  render: () => (
    <div className="min-h-screen p-6">
      <TemplatePreview
        style={{ maxWidth: 400 }}
        formData={{
          name: "course_signup",
          language: "en_US",
          category: "MARKETING",
          headerType: "none",
          headerText: "",
          bodyText: "Make dinner with Jasper Market! Our free online courses will be available soon! Sign up today to reserve a spot!",
          footerText: "",
          buttons: [
            { type: "QUICK_REPLY", text: "Sign up" },
          ],
        }}
      />
    </div>
  ),
};

export const MarketingCatalog: Story = {
  name: "Marketing / Catalog",
  render: () => (
    <div className="min-h-screen p-6">
      <TemplatePreview
        style={{ maxWidth: 400 }}
        formData={{
          name: "catalog_promo",
          language: "en_US",
          category: "MARKETING",
          headerType: "none",
          headerText: "",
          bodyText: "Discover our latest products and bestsellers in our catalog. Browse and shop with ease on WhatsApp #happyshopping!",
          footerText: "",
          buttons: [
            { type: "QUICK_REPLY", text: "View catalog" },
          ],
        }}
      />
    </div>
  ),
};
