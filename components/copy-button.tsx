"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      aria-label="Copy install command"
      className="flex h-8 w-8 items-center justify-center rounded-md border border-[#e9edef] dark:border-[rgba(233,237,239,0.2)] text-[#54656f] dark:text-[#8696a0] hover:bg-[#f0f2f5] dark:hover:bg-[rgba(233,237,239,0.05)] transition-colors"
    >
      {copied ? <Check size={14} className="text-[#00a884]" /> : <Copy size={14} />}
    </button>
  );
}
