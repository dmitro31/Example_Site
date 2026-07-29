"use client";

import { useState } from "react";

const navItems = [
  { label: "Переваги", href: "#advantages" },
  { label: "Меню", href: "#menu" },
  { label: "Галерея", href: "#gallery" },
  { label: "Відгуки", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакти", href: "#contacts" },
];

export default function Restourant_Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-char/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold italic tracking-tight text-char">
            ЖАР
          </span>
          <span className="eyebrow text-herb">wood-fire kitchen</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-char/70 transition-colors hover:text-char"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+380441234567"
            className="hidden font-display text-base text-char md:block"
          >
            +38 (044) 123-45-67
          </a>
          <a
            href="#contacts"
            className="hidden rounded-full bg-ember px-5 py-2.5 text-sm font-semibold text-cream transition-transform hover:scale-[1.03] sm:block"
          >
            Забронювати столик
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Меню"
            aria-expanded={open}
            className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border border-char/15 lg:hidden"
          >
            <span className={`h-[2px] w-4 rounded-full bg-char transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`h-[2px] w-4 rounded-full bg-char transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-[2px] w-4 rounded-full bg-char transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      <div className={`overflow-hidden border-t border-char/10 transition-[max-height] duration-300 ease-out lg:hidden ${open ? "max-h-96" : "max-h-0 border-t-0"}`}>
        <nav className="flex flex-col gap-1 px-6 py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-char/75 transition-colors hover:bg-linen/60"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacts"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-ember px-5 py-2.5 text-center text-sm font-semibold text-cream sm:hidden"
          >
            Забронювати столик
          </a>
        </nav>
      </div>
    </header>
  );
}