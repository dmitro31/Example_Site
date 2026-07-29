import Reveal from "../Home/Reveal";

const advantages = [
  {
    title: "Дров'яна піч на 400°C",
    text: "Італійська піч ручної роботи — м'ясо й риба готуються за хвилини, зберігаючи сік.",
    color: "text-ember",
  },
  {
    title: "Фермерські продукти щотижня",
    text: "Овочі й зелень — з трьох господарств області, м'ясо дозріває у власній камері.",
    color: "text-herb",
  },
  {
    title: "Винна карта на 60 позицій",
    text: "Сомельє підбере пару до кожної страви, включно з українськими виноробнями.",
    color: "text-wine",
  },
  {
    title: "Зала на 40 гостей і тераса",
    text: "Приватна зала для бенкетів до 16 осіб, літня тераса з видом на подвір'я.",
    color: "text-brass",
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="bg-linen/60 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <Reveal className="max-w-xl">
          <span className="eyebrow text-wine">Чому ЖАР</span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-char lg:text-5xl">
            Все навколо одного джерела тепла
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-char/10">
          {advantages.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 100}
              className={`flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:gap-10 ${i % 2 === 1 ? "sm:flex-row-reverse sm:text-right" : ""}`}
            >
              <span className={`font-display text-6xl font-semibold ${item.color} sm:w-32 sm:shrink-0`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-2xl text-char">{item.title}</h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-char/60">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}