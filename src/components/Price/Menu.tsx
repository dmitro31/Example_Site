import Reveal from "../Home/Reveal";

const items = [
  {
    code: "ETH · 1900м",
    title: "Фільтр-кава Ефіопія Йиргачефф",
    text: "Квіткова, з нотами бергамоту та персика, обсмажена під фільтр.",
    price: "95 ₴",
    tag: "нове",
  },
  {
    code: "COL · 1700м",
    title: "Капучино на колумбійському бленді",
    text: "Збалансований, шоколадно-горіховий, з густою мікропіною.",
    price: "75 ₴",
    tag: "хіт",
  },
  {
    code: "BRZ · 1100м",
    title: "Флет-вайт бразильський",
    text: "М'який, з карамельним післясмаком, на альтернативному молоці без доплати.",
    price: "80 ₴",
  },
  {
    code: "СНІД · 08:00",
    title: "Шакшука в чавунній сковороді",
    text: "Яйця пашот у томатному соусі з перцем, подається зі свіжим чабатта.",
    price: "185 ₴",
  },
  {
    code: "ВИП · ранок",
    title: "Круасан з мигдалем",
    text: "Випікаємо щоранку з французького масла, начинка — мигдальний крем.",
    price: "65 ₴",
  },
  {
    code: "ДЕС · день",
    title: "Тарт з лимоном і безе",
    text: "Пісочна основа, лимонний курд, обпалене безе зверху.",
    price: "110 ₴",
    tag: "хіт",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-espresso px-6 py-24 text-cream lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <span className="eyebrow text-honey">Меню</span>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight lg:text-5xl">
              Кава з висоти — і трохи їжі до неї
            </h2>
          </div>
          <p className="max-w-sm text-sm text-cream/55">
            Код у кожній картці — походження й висота вирощування зерна,
            або час, коли страву найкраще замовляти.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <Reveal
              key={s.title}
              delay={(i % 3) * 100}
              className="group relative flex flex-col rounded-2xl border border-cream/12 p-8 transition-colors hover:border-honey/50"
            >
              {"tag" in s && s.tag && (
                <span
                  className={`absolute -top-3 right-6 rounded-full px-3 py-1 text-xs font-semibold text-cream ${s.tag === "нове" ? "bg-denim" : "bg-berry"}`}
                >
                  {s.tag}
                </span>
              )}
              <span className="font-mono text-sm text-honey">{s.code}</span>
              <h3 className="mt-5 font-display text-2xl">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/60">
                {s.text}
              </p>
              <div className="mt-8 flex items-center justify-between border-t border-cream/12 pt-5">
                <span className="text-sm font-semibold text-cream/85">
                  {s.price}
                </span>
                <a
                  href="#contacts"
                  className="text-sm text-honey transition-colors group-hover:text-tangerine"
                >
                  Замовити →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}