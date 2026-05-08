"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "@/components/ui/whatsapp/styles/whatsapp.css";

interface MessageInputProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSubmit"> {
  onSubmit?: (message: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

function EmojiIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" height="24" width="24" className={className}>
      <path
        d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm5.603 0c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zM11.984 1.006C5.926 1.006 1.006 5.926 1.006 11.984s4.92 10.978 10.978 10.978 10.978-4.92 10.978-10.978S18.042 1.006 11.984 1.006zm0 19.422a8.451 8.451 0 0 1-8.444-8.444 8.451 8.451 0 0 1 8.444-8.444 8.451 8.451 0 0 1 8.444 8.444 8.451 8.451 0 0 1-8.444 8.444zm5.395-5.576a.67.67 0 0 0-.567-.881c-.018-.002-.037-.003-.055-.003h-.004c-.137 0-.28.039-.527.236-.594.477-2.121 1.609-4.258 1.609-2.139 0-3.613-1.091-4.228-1.588-.236-.19-.393-.25-.537-.25a.676.676 0 0 0-.628.884c.04.107.092.2.156.284.497.667 2.102 2.391 5.237 2.391 3.13 0 4.745-1.73 5.243-2.4a.86.86 0 0 0 .168-.282z"
        fill="currentColor"
      />
    </svg>
  );
}

function AttachIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" height="24" width="24" className={className}>
      <path
        d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.501.501 1.112.812 1.72.878.521.056 1.029-.094 1.449-.513l5.85-5.851c.157-.157.157-.413 0-.571-.157-.157-.413-.157-.571 0l-5.85 5.851a1.208 1.208 0 0 1-.87.312c-.397-.04-.817-.267-1.178-.628-.728-.729-.779-1.632-.163-2.249l7.916-7.916c1.071-1.071 3.07-.97 4.346.307.581.581.953 1.312 1.012 2.06.063.808-.264 1.559-.897 2.192l-9.547 9.548a4.38 4.38 0 0 1-3.109 1.288c-2.424 0-4.753-1.964-4.753-5.217v-.002c0-1.175.463-2.282 1.303-3.122l7.09-7.09a.405.405 0 0 0-.571-.571l-7.09 7.09A5.577 5.577 0 0 0 1.816 15.556z"
        fill="currentColor"
      />
    </svg>
  );
}

function MicIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" height="24" width="24" className={className}>
      <path
        d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.003H4.761c0 4.001 3.178 7.297 7.061 7.885v3.884h.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-1z"
        fill="currentColor"
      />
    </svg>
  );
}

function SendIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" height="24" width="24" className={className}>
      <path
        d="M1.101 21.757 23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
        fill="currentColor"
      />
    </svg>
  );
}

const MessageInput = React.forwardRef<HTMLDivElement, MessageInputProps>(
  ({ className, onSubmit, placeholder = "Type a message", disabled = false, ...props }, ref) => {
    const [message, setMessage] = React.useState("");
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);

    const handleSubmit = () => {
      if (message.trim() && onSubmit) {
        onSubmit(message.trim());
        setMessage("");
        if (textareaRef.current) {
          textareaRef.current.style.height = "20px";
        }
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSubmit();
      }
    };

    const handleInput = () => {
      const textarea = textareaRef.current;
      if (textarea) {
        textarea.style.height = "20px";
        textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "font-wa flex items-end gap-2 bg-wa-compose-bg px-[10px] py-[5px]",
          className
        )}
        {...props}
      >
        {/* Emoji button */}
        <button
          type="button"
          className="mb-[7px] p-[5px] text-wa-icon-default transition-colors hover:text-wa-icon-lighter"
          aria-label="Emoji"
          disabled={disabled}
        >
          <EmojiIcon />
        </button>

        {/* Attach button */}
        <button
          type="button"
          className="mb-[7px] p-[5px] text-wa-icon-default transition-colors hover:text-wa-icon-lighter"
          aria-label="Attach"
          disabled={disabled}
        >
          <AttachIcon />
        </button>

        {/* Text input */}
        <div className="flex flex-1 items-center rounded-lg bg-wa-input-bg px-3 py-[9px]">
          <textarea
            ref={textareaRef}
            rows={1}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onInput={handleInput}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={disabled}
            className={cn(
              "max-h-[120px] w-full resize-none bg-transparent text-[15px] leading-[20px] text-wa-text-primary outline-none",
              "placeholder:text-wa-text-secondary"
            )}
            style={{ height: "20px" }}
          />
        </div>

        {/* Send / Mic button */}
        <button
          type="button"
          className="mb-[7px] p-[5px] text-wa-icon-default transition-colors hover:text-wa-icon-lighter"
          onClick={message.trim() ? handleSubmit : undefined}
          aria-label={message.trim() ? "Send" : "Voice message"}
          disabled={disabled}
        >
          {message.trim() ? (
            <SendIcon className="text-wa-primary" />
          ) : (
            <MicIcon />
          )}
        </button>
      </div>
    );
  }
);
MessageInput.displayName = "MessageInput";

export { MessageInput, type MessageInputProps };
