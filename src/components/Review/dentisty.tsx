const reviews = [
  {
    name: "Олена К.",
    text: "Вперше не боялась йти до стоматолога. Пояснили кожен крок, анестезія — взагалі без відчуттів.",
    rating: 5,
  },
  {
    name: "Андрій М.",
    text: "Ставив імплант — від сканування до встановлення коронки все за планом і без сюрпризів у ціні.",
    rating: 5,
  },
  {
    name: "Марта Т.",
    text: "Син лікував зубки без істерик, лікарка знайшла підхід. Дуже дякую всій команді.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#D9A441">
          <path d="M12 1l3.09 6.26L22 8.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 13.14 2 8.27l6.91-1.01L12 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews_dentistry() {
  return (
    <section id="reviews" className="bg-porcelain px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-xl">
          <span className="eyebrow text-sage">Відгуки</span>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-ink lg:text-5xl">
            Слова пацієнтів важать більше, ніж наші власні
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="flex flex-col rounded-2xl bg-white/60 p-8 shadow-[0_1px_0_0_rgba(18,56,50,0.06)]"
            >
              <Stars count={r.rating} />
              <p className="mt-5 flex-1 font-display text-lg italic leading-relaxed text-ink/80">
                "{r.text}"
              </p>
              <p className="mt-6 text-sm font-medium text-ink/50">
                {r.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}