"use client";

import { useState } from "react";
import Reveal from "../Home/Reveal";

const faqs = [
  {
    q: "Чи можна забронювати приватну залу?",
    a: "Так, зала до 16 осіб доступна для бенкетів і корпоративів. Бронювання за 3 дні наперед, депозит 30%.",
  },
  {
    q: "Чи є вегетаріанські страви?",
    a: "Так, у кожному розділі меню є щонайменше дві вегетаріанські позиції, познач при бронюванні для рекомендацій шефа.",
  },
  {
    q: "Чи можна привести дитину?",
    a: "Так, є дитяче крісло та спрощене дитяче меню на замовлення за день наперед.",
  },
  {
    q: "Чи працює тераса взимку?",
    a: "Тераса закривається з листопада по березень, обігрів не передбачений.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cream px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <span className="eyebrow text-wine">Питання</span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-char lg:text-5xl">
            Перш ніж забронювати
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-char/55">
            Не знайшли відповідь? Напишіть нам напряму — адміністратор
            відповість протягом години у робочий час.
          </p>
        </Reveal>

        <Reveal delay={150}>
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-char/10 py-2">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start gap-6 py-5 text-left"
                >
                  <span className="font-display text-xl italic text-ember">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-display text-lg text-char">
                    {item.q}
                  </span>
                  <span className={`shrink-0 text-xl text-char/50 transition-transform ${isOpen ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                <div className={`grid overflow-hidden pl-11 transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <p className="min-h-0 pb-6 text-sm leading-relaxed text-char/60">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}