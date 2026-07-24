"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Переваги", href: "#advantages" },
  { label: "Послуги", href: "#services" },
  { label: "Галерея", href: "#gallery" },
  { label: "Відгуки", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакти", href: "#contacts" },
];

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/85 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <motion.a
          href="#top"
          whileHover={{ scale: 1.03 }}
          className="flex items-baseline gap-2"
        >
          <span className="font-display text-2xl font-semibold tracking-tight text-slate-900">
            ЕМАЛЬ
          </span>

          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
            dental studio
          </span>
        </motion.a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 * index,
              }}
              whileHover={{
                y: -2,
                color: "#0284C7",
              }}
              className="text-sm font-medium text-slate-600 transition-colors"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <motion.a
            href="tel:+380441234567"
            whileHover={{ scale: 1.03 }}
            className="font-medium text-slate-700"
          >
            +38 (044) 123-45-67
          </motion.a>

          <motion.a
            href="#contacts"
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-colors hover:bg-sky-600"
          >
            Записатись
          </motion.a>
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileMenu(!mobileMenu)}
          className="rounded-xl p-2 text-slate-900 lg:hidden"
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <nav className="flex flex-col px-6 py-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.06,
                  }}
                  onClick={() => setMobileMenu(false)}
                  className="rounded-xl px-4 py-4 text-slate-700 transition hover:bg-sky-50 hover:text-sky-600"
                >
                  {item.label}
                </motion.a>
              ))}

              <div className="mt-6 border-t border-slate-200 pt-6">
                <a
                  href="tel:+380441234567"
                  className="block text-center font-medium text-slate-700"
                >
                  +38 (044) 123-45-67
                </a>

                <motion.a
                  whileTap={{ scale: 0.97 }}
                  href="#contacts"
                  onClick={() => setMobileMenu(false)}
                  className="mt-5 block rounded-full bg-sky-500 py-3 text-center font-semibold text-white"
                >
                  Записатись
                </motion.a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}