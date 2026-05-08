"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function clearClose() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }
  function scheduleClose() {
    clearClose();
    // small delay so a quick mouse twitch through the gap doesn't dismiss
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  }

  // close on outside click + Escape
  useEffect(() => {
    if (!open) return;
    function onDocClick(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // cleanup pending close timer on unmount
  useEffect(() => () => clearClose(), []);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => {
        clearClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onFocus={() => {
          clearClose();
          setOpen(true);
        }}
        className="rounded-full px-3 py-1.5 text-stone-700 transition hover:bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/40 dark:text-stone-300 dark:hover:bg-stone-800"
      >
        {label}
        <span className="ml-1 text-stone-400" aria-hidden>
          ▾
        </span>
      </button>

      {/* Wrapper extends down to bridge the visual gap; padding-top creates the gap
          while keeping the hover area continuous with the button. */}
      <div
        className={`absolute right-0 top-full z-40 pt-1.5 transition duration-150 ${
          open ? "visible opacity-100" : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div
          role="menu"
          className="w-56 origin-top-right rounded-xl border border-stone-200 bg-white p-1.5 shadow-lg dark:border-stone-800 dark:bg-stone-900"
        >
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm text-stone-700 hover:bg-stone-100 focus:bg-stone-100 focus:outline-none dark:text-stone-200 dark:hover:bg-stone-800 dark:focus:bg-stone-800"
            >
              {it.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
