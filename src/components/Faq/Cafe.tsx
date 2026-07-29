"use client";

import { useState } from "react";
import Reveal from "../Home/Reveal";

const faqs = [
  {
    q: "Чи можна прийти зі своїм ноутбуком і працювати весь день?",
    a: "Так, у нас окрема тиха зона для роботи з розетками та стабільним wifi. Прохання лише звільнити місце в обідній пік з 12:00 до 14:00.",
  },
  {
    q: "Чи є альтернативне молоко?",
    a: "Вівсяне й мигдальне доступні без доплати в будь-якому напої. Кокосове — за додаткову плату 15 ₴.",
  },
  {
    q: "Чи можна забронювати столик наперед?",
    a: "Так, для груп від 4 осіб бронюємо через форму на сайті або за телефоном мінімум за 2 години.",
  },
  {
    q: "Чи продаєте ви зерно на винос?",
    a: "Так, усі 14 сортів доступні у зернах або меленими — вкажіть спосіб приготування на касі.",
  },
  {
    q: "Чи є у вас дитяче меню?",
    a: "Є какао, свіжі соки та несолодка випічка. Повноцінного дитячого меню поки немає.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-denim/12 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <span className="eyebrow text-matcha">Питання</span>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-espresso lg:text-5xl">
            Перш ніж ви спитаєте
          </h2>
        </Reveal>

        <Reveal delay={150} className="mt-14 divide-y divide-sand">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="py-2">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-display text-lg text-espresso">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-espresso/20 text-sm text-espresso/60 transition-transform ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <p className="min-h-0 pb-6 text-sm leading-relaxed text-espresso/60">
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