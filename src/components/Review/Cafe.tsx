import CoffeeRing from "../Home/CoffeeRing";
import Reveal from "../Home/Reveal";

const reviews = [
  {
    name: "Ірина В.",
    text: "Найкраща фільтр-кава в місті. Приходжу щоранку по дорозі на роботу — бариста вже знають замовлення.",
    rating: 5,
  },
  {
    name: "Тарас П.",
    text: "Працюю тут з ноутбуком по вівторках — wifi стабільний, розетки є, ніхто не поспішає тебе виганяти.",
    rating: 5,
  },
  {
    name: "Соломія Д.",
    text: "Круасани як у Парижі. Шакшука теж дуже смачна, порція чесна.",
    rating: 4,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F4B942">
          <path d="M12 1l3.09 6.26L22 8.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 13.14 2 8.27l6.91-1.01L12 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-berry/16 px-6 py-24 lg:px-10">
      <CoffeeRing color="#3D6B8C" className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 opacity-60" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="max-w-xl">
          <span className="eyebrow text-matcha">Відгуки</span>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-espresso lg:text-5xl">
            Що кажуть постійні гості
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => {
            const borders = ["border-t-tangerine", "border-t-matcha", "border-t-denim"];
            return (
              <Reveal
                key={r.name}
                delay={i * 100}
                className={`flex flex-col rounded-2xl border-t-4 bg-cream p-8 shadow-[0_1px_0_0_rgba(62,35,23,0.06)] ${borders[i % borders.length]}`}
              >
                <Stars count={r.rating} />
                <p className="mt-5 flex-1 font-display text-lg italic leading-relaxed text-espresso/80">
                  "{r.text}"
                </p>
                <p className="mt-6 text-sm font-medium text-espresso/50">
                  {r.name}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}