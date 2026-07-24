const services = [
  {
    code: "16",
    title: "Терапія та лікування карієсу",
    text: "Діагностика, пломбування, лікування пульпіту з мікроскопом.",
    price: "від 1 200 ₴",
  },
  {
    code: "11",
    title: "Естетична стоматологія",
    text: "Вініри, художня реставрація, відбілювання Zoom 4.",
    price: "від 3 500 ₴",
  },
  {
    code: "24",
    title: "Ортодонтія",
    text: "Брекет-системи та елайнери для дорослих і підлітків.",
    price: "від 28 000 ₴",
  },
  {
    code: "36",
    title: "Імплантація",
    text: "Одноетапна імплантація з 3D-плануванням, гарантія 10 років.",
    price: "від 14 000 ₴",
  },
  {
    code: "48",
    title: "Хірургія",
    text: "Видалення зубів мудрості, синус-ліфтинг, кістозні операції.",
    price: "від 2 800 ₴",
  },
  {
    code: "55",
    title: "Дитяча стоматологія",
    text: "Лікування молочних зубів у грі, без страху та сліз.",
    price: "від 900 ₴",
  },
];

export default function Services_dentistry() {
  return (
    <section id="services" className="bg-ink px-6 py-24 text-porcelain lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <span className="eyebrow text-sage">Послуги</span>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight lg:text-5xl">
              Повний цикл лікування — за міжнародною нумерацією зубів
            </h2>
          </div>
          <p className="max-w-sm text-sm text-porcelain/55">
            Код у кожній картці відповідає позиції зуба за системою FDI —
            саме там найчастіше виконується ця процедура.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.code}
              className="group flex flex-col rounded-2xl border border-porcelain/12 p-8 transition-colors hover:border-sage/50"
            >
              <span className="font-mono text-sm text-sage">{s.code}</span>
              <h3 className="mt-5 font-display text-2xl">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-porcelain/60">
                {s.text}
              </p>
              <div className="mt-8 flex items-center justify-between border-t border-porcelain/12 pt-5">
                <span className="text-sm font-semibold text-porcelain/85">
                  {s.price}
                </span>
                <a
                  href="#contacts"
                  className="text-sm text-sage transition-colors group-hover:text-coral"
                >
                  Записатись →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}