"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Чи боляче лікувати зуби у вас?",
    a: "Ні. Ми використовуємо комп'ютерну анестезію The Wand, яка подає препарат повільно й керовано — без відчуття уколу та тиску.",
  },
  {
    q: "Скільки коштує первинна консультація?",
    a: "Консультація з оглядом та рентген-знімком коштує 400 ₴. Якщо в той же день починаєте лікування — вартість консультації віднімається від чека.",
  },
  {
    q: "Чи приймаєте ви дітей?",
    a: "Так, у нас окремий дитячий кабінет і лікарі з дитячою спеціалізацією. Перший візит — ознайомчий, без лікування, щоб дитина звикла.",
  },
  {
    q: "Яка гарантія на імплантацію?",
    a: "10 років на імплант та 3 роки на коронку за умови проходження планових оглядів раз на пів року.",
  },
  {
    q: "Чи можна оплатити лікування частинами?",
    a: "Так, для курсів лікування вартістю від 10 000 ₴ доступна розстрочка на 3–6 місяців без переплат.",
  },
];

export default function FAQ_dentistry() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-porcelain px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <span className="eyebrow text-sage">Питання</span>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-ink lg:text-5xl">
            Відповіді до того, як ви спитали
          </h2>
        </div>

        <div className="mt-14 divide-y divide-mist">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="py-2">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-display text-lg text-ink">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink/20 text-sm text-ink/60 transition-transform ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <p className="min-h-0 pb-6 text-sm leading-relaxed text-ink/60">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}