import Reveal from "../Home/Reveal";

const reviews = [
  {
    name: "Максим О.",
    text: "Рібай найкращий у місті. М'ясо дозріває правильно, подача без зайвого — саме те, що любимо.",
    rating: 5,
    accent: "border-ember",
  },
  {
    name: "Христина Л.",
    text: "Святкували ювілей у приватній залі — сервіс на найвищому рівні, сомельє порадив ідеальне вино.",
    rating: 5,
    accent: "border-wine",
  },
  {
    name: "Богдан С.",
    text: "Тераса влітку — окрема подяка. Судак з дров'яної печі досі згадую.",
    rating: 4,
    accent: "border-brass",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#B8862E">
          <path d="M12 1l3.09 6.26L22 8.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 13.14 2 8.27l6.91-1.01L12 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-linen/60 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <Reveal className="max-w-xl">
          <span className="eyebrow text-wine">Відгуки</span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-char lg:text-5xl">
            Гості повертаються не тільки на вогонь
          </h2>
        </Reveal>

        <div className="relative mt-20 space-y-6 lg:space-y-0">
          {reviews.map((r, i) => {
            const stagger = ["", "lg:-mt-10 lg:ml-10", "lg:-mt-10 lg:ml-20"][i] ?? "";
            return (
              <Reveal
                key={r.name}
                delay={i * 120}
                className={`relative mx-auto max-w-xl border-l-4 bg-cream p-8 shadow-[0_15px_35px_-15px_rgba(28,21,18,0.3)] ${r.accent} ${stagger}`}
              >
                <Stars count={r.rating} />
                <p className="mt-5 font-display text-lg italic leading-relaxed text-char/80">
                  "{r.text}"
                </p>
                <p className="mt-6 text-sm font-medium text-char/50">{r.name}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}