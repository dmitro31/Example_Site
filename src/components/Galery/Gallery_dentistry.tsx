const photos = [
  { label: "Кабінет терапії №1", span: "lg:col-span-2 lg:row-span-2" },
  { label: "Зона рецепції" },
  { label: "Хірургічний кабінет" },
  { label: "3D-томограф" },
  { label: "Кабінет дитячої стоматології", span: "lg:col-span-2" },
];

export default function Gallery_dentistry() {
  return (
    <section id="gallery" className="bg-porcelain px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-xl">
          <span className="eyebrow text-sage">Галерея</span>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-ink lg:text-5xl">
            Простір, у якому легко видихнути
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:grid-rows-2">
          {photos.map((p) => (
            <div
              key={p.label}
              className={`relative flex min-h-[180px] flex-col justify-end overflow-hidden rounded-2xl border border-dashed border-ink/15 bg-mist/50 p-5 ${p.span ?? ""}`}
            >
              <span className="eyebrow absolute left-5 top-5 text-ink/35">
                фото
              </span>
              <p className="text-sm font-medium text-ink/70">{p.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}