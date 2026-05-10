"use client";

import * as React from "react";
import { Menu } from "@base-ui/react/menu";
import { cn } from "@/lib/utils";
import "@/components/ui/whatsapp/styles/whatsapp.css";

export interface ChatMenuItem {
  label: string;
  icon?: React.ReactNode;
  /** Render item as <a> — base-ui MenuLinkItem */
  href?: string;
  onClick?: () => void;
  danger?: boolean;
  disabled?: boolean;
}

export interface ChatMenuProps {
  items: ChatMenuItem[];
  /** Trigger element — defaults to ⋮ (three-dot) icon button */
  trigger?: React.ReactNode;
  className?: string;
}

/**
 * WhatsApp-style context menu using @base-ui/react Menu.
 *
 * @example
 * <ChatMenu items={[
 *   { label: "새 그룹", icon: <GroupIcon />, onClick: () => {} },
 *   { label: "별표 메시지", onClick: () => {} },
 *   { label: "로그아웃", danger: true, onClick: () => {} },
 * ]} />
 */
function ChatMenu({ items, trigger, className }: ChatMenuProps) {
  return (
    <Menu.Root>
      <Menu.Trigger
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-full text-wa-icon-default",
          "transition-colors hover:bg-wa-hover",
          className
        )}
        aria-label="Menu"
      >
        {trigger ?? (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z" />
          </svg>
        )}
      </Menu.Trigger>

      <Menu.Portal>
        <Menu.Positioner side="bottom" align="end" sideOffset={4}>
          <Menu.Popup
            className={cn(
              "font-wa min-w-[200px] overflow-hidden rounded-lg bg-wa-panel-bg shadow-[0_4px_20px_rgba(11,20,26,0.3)]",
              "outline-none",
              "data-[starting-style]:opacity-0 data-[starting-style]:scale-95",
              "data-[ending-style]:opacity-0 data-[ending-style]:scale-95",
              "transition-[opacity,transform] duration-150 ease-out"
            )}
          >
            {items.map((item, i) => {
              const itemClass = cn(
                "flex w-full cursor-pointer items-center gap-3 px-4 py-[13px]",
                "text-[15px] text-wa-text-primary outline-none select-none",
                "transition-colors hover:bg-wa-hover data-[highlighted]:bg-wa-hover",
                item.danger && "text-wa-text-critical",
                item.disabled && "cursor-not-allowed opacity-40"
              );

              if (item.href) {
                return (
                  <Menu.LinkItem
                    key={i}
                    href={item.href}
                    className={itemClass}
                  >
                    {item.icon && (
                      <span className="shrink-0 text-wa-icon-default">
                        {item.icon}
                      </span>
                    )}
                    {item.label}
                  </Menu.LinkItem>
                );
              }

              return (
                <Menu.Item
                  key={i}
                  onClick={item.onClick}
                  disabled={item.disabled}
                  className={itemClass}
                >
                  {item.icon && (
                    <span className="shrink-0 text-wa-icon-default">
                      {item.icon}
                    </span>
                  )}
                  {item.label}
                </Menu.Item>
              );
            })}
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}

export { ChatMenu };
