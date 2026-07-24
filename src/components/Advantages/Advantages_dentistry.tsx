const advantages = [
  {
    title: "Цифрова діагностика",
    text: "3D-томограф та внутрішньоротовий сканер замість зліпків — точний план лікування з першого візиту.",
  },
  {
    title: "Стерильність за протоколом ЄС",
    text: "Автоклавування, індивідуальна упаковка інструменту, контроль біологічними індикаторами кожного циклу.",
  },
  {
    title: "Лікування без болю",
    text: "Комп'ютерна анестезія The Wand — керована подача препарату без відчуття уколу.",
  },
  {
    title: "Прозорий кошторис",
    text: "Фіксована ціна після діагностики, без прихованих доплат протягом усього курсу лікування.",
  },
];

export default function Advantages_dentistry() {
  return (
    <section id="advantages" className="bg-porcelain px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-xl">
          <span className="eyebrow text-sage">Чому ЕМАЛЬ</span>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-ink lg:text-5xl">
            Стандарт лікування, який відчувається з першого візиту
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-mist sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item, i) => (
            <div key={item.title} className="flex flex-col bg-porcelain p-8">
              <span className="eyebrow text-ink/35">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-display text-xl text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}