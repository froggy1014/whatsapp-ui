"use client";

import { Sun, Moon } from "lucide-react";
import { useSyncExternalStore } from "react";

// The DOM is the source of truth. The boot script in app/layout.tsx applies the
// saved theme before first paint, so there is nothing to seed from localStorage
// here — reading the class avoids both a flash and a setState-in-effect.
function subscribe(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

const getSnapshot = () => document.documentElement.classList.contains("dark");

// Matches the "dark" default rendered by the server in app/layout.tsx.
const getServerSnapshot = () => true;

export function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");
    root.classList.toggle("dark", next);
    root.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-2 rounded-full border border-page-border bg-page-card px-3 py-1.5 text-sm text-page-muted hover:text-page-fg transition-colors"
      aria-label="Toggle theme"
    >
      {dark ? <Sun size={14} /> : <Moon size={14} />}
      {dark ? "Light" : "Dark"}
    </button>
  );
}
