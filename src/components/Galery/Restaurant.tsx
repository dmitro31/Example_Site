import Reveal from "../Home/Reveal";

const photos = [
  { label: "Дров'яна піч у роботі", tint: "bg-ember/15", rotate: "-rotate-1", tall: true },
  { label: "Зала на 40 гостей", tint: "bg-brass/15", rotate: "rotate-1" },
  { label: "Тераса влітку", tint: "bg-herb/15", rotate: "-rotate-2" },
  { label: "Рібай на мангалі", tint: "bg-wine/15", rotate: "rotate-2", tall: true },
  { label: "Винний льох", tint: "bg-char/8", rotate: "-rotate-1" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-xl">
          <span className="eyebrow text-wine">Галерея</span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-char lg:text-5xl">
            Зазирни на кухню
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-wrap items-start justify-center gap-6">
          {photos.map((p, i) => (
            <Reveal
              key={p.label}
              delay={i * 90}
              className={`w-64 ${p.rotate} transition-transform hover:rotate-0`}
            >
              <div className={`flex flex-col justify-end border border-dashed border-char/15 p-4 ${p.tint} ${p.tall ? "h-80" : "h-56"} shadow-[0_10px_25px_-10px_rgba(28,21,18,0.25)]`}>
                <span className="eyebrow text-char/35">фото</span>
                <p className="mt-2 font-display text-base text-char/75">{p.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}