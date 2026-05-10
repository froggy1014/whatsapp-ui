"use client";

import * as React from "react";
import { Button } from "@base-ui/react/button";
import { cn } from "@/lib/utils";
import "@/components/ui/whatsapp/styles/whatsapp.css";

export interface ActionButtonProps {
  /** Icon element rendered before the label */
  icon?: React.ReactNode;
  children: React.ReactNode;
  /** Render as an anchor — base-ui render prop */
  href?: string;
  onClick?: () => void;
  className?: string;
}

/**
 * WhatsApp-style outlined pill action button.
 *
 * @example
 * <ActionButton icon={<ViewMoreIcon />}>더 보기</ActionButton>
 * <ActionButton icon={<PlusIcon />} href="/channels/create">채널 만들기</ActionButton>
 */
const ActionButton = React.forwardRef<HTMLButtonElement, ActionButtonProps>(
  ({ icon, children, href, onClick, className }, ref) => {
    const renderEl = href ? <a href={href} /> : undefined;

    return (
      <Button
        ref={ref}
        render={renderEl}
        nativeButton={!href}
        onClick={onClick}
        className={cn(
          "font-wa inline-flex w-full items-center justify-center gap-2",
          "rounded-full border border-wa-emerald-500 px-4 py-[10px]",
          "text-[15px] font-medium text-wa-emerald-500",
          "transition-colors hover:bg-wa-emerald-500/10",
          className
        )}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
      </Button>
    );
  }
);
ActionButton.displayName = "ActionButton";

export { ActionButton };
