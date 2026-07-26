import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WA UI — shadcn/ui Registry",
  description:
    "Production-ready WhatsApp Web UI components built with Tailwind CSS v4 and the official WDS design token system.",
  openGraph: {
    title: "WA UI",
    description: "WhatsApp Web UI components for shadcn/ui",
    url: "https://ui.meta-cloud-api.site",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable} dark h-full antialiased`}
      data-theme="dark"
    >
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>{children}</body>
    </html>
  );
}
