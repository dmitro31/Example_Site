import Reveal from "../Home/Reveal";

const photos = [
  { label: "Зала з великими вікнами", span: "lg:col-span-2 lg:row-span-2" },
  { label: "Барна стійка" },
  { label: "Обсмажувальня" },
  { label: "Тераса влітку" },
  { label: "Куточок для роботи", span: "lg:col-span-2" },
];

export default function Gallery() {
  const tints = ["bg-honey/25", "bg-denim/15", "bg-berry/15", "bg-matcha/20", "bg-tangerine/15"];

  return (
    <section id="gallery" className="bg-cream px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-xl">
          <span className="eyebrow text-matcha">Галерея</span>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-espresso lg:text-5xl">
            Місце, де хочеться затриматись
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:grid-rows-2">
          {photos.map((p, i) => (
            <Reveal
              key={p.label}
              delay={i * 80}
              className={`relative flex min-h-[180px] flex-col justify-end overflow-hidden rounded-2xl border border-dashed border-espresso/15 p-5 ${tints[i % tints.length]} ${p.span ?? ""}`}
            >
              <span className="eyebrow absolute left-5 top-5 text-espresso/35">
                фото
              </span>
              <p className="text-sm font-medium text-espresso/70">{p.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}