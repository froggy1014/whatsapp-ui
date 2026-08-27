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
  title: "WA UI — WhatsApp Web UI components for shadcn/ui",
  description:
    "Production-ready WhatsApp Web UI components for React — chat bubbles, message input, and Meta Business templates. Built with Tailwind CSS v4 and the WDS design token system.",
  keywords: [
    "whatsapp ui",
    "whatsapp web components",
    "whatsapp chat ui",
    "whatsapp cloud api",
    "shadcn registry",
    "shadcn ui",
    "react chat ui",
    "wds design tokens",
  ],
  openGraph: {
    title: "WA UI — WhatsApp Web UI components for shadcn/ui",
    description:
      "A shadcn/ui registry of WhatsApp Web components, built on WhatsApp's WDS design tokens.",
    url: "https://ui.meta-cloud-api.site",
    siteName: "WA UI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WA UI — WhatsApp Web UI components for shadcn/ui",
    description:
      "A shadcn/ui registry of WhatsApp Web components, built on WhatsApp's WDS design tokens.",
  },
};

// Runs before first paint so a saved light theme never flashes dark. Kept in
// sync with the class/attribute pair ThemeToggle writes. Defaults to dark.
const themeBootScript = `try{var t=localStorage.getItem("theme");var d=t!=="light";var r=document.documentElement;r.classList.toggle("dark",d);r.setAttribute("data-theme",d?"dark":"light")}catch(e){}`;

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
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
        {children}
      </body>
    </html>
  );
}
