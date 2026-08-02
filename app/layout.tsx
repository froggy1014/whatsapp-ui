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
  metadataBase: new URL("https://ui.meta-cloud-api.site"),
  title: "WA UI — shadcn/ui Registry",
  description:
    "Production-ready WhatsApp Web UI components built with Tailwind CSS v4 and the WDS design token system.",
  openGraph: {
    title: "WA UI — shadcn/ui Registry",
    description:
      "A shadcn/ui registry of WhatsApp Web components, built on WhatsApp's WDS design tokens.",
    url: "https://ui.meta-cloud-api.site",
    siteName: "WA UI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WA UI — shadcn/ui Registry",
    description:
      "A shadcn/ui registry of WhatsApp Web components, built on WhatsApp's WDS design tokens.",
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
