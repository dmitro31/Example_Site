import Reveal from "../Home/Reveal";

const courses = [
  {
    title: "Закуски",
    items: [
      { name: "Тартар з яловичини на вугіллі", temp: "живий вогонь", price: "285 ₴" },
      { name: "Печені перці з бринзою", temp: "220°C · 8хв", price: "165 ₴" },
      { name: "Хумус з димним олійним маслом", temp: "холодна подача", price: "140 ₴" },
    ],
  },
  {
    title: "Основні страви",
    items: [
      { name: "Рібай на кістці, 350г", temp: "мангал · 14хв", price: "620 ₴", hit: true },
      { name: "Судак у дров'яній печі", temp: "400°C · 11хв", price: "395 ₴" },
      { name: "Баранина на рожні", temp: "рожен · 3год", price: "480 ₴" },
      { name: "Рагу з дичини в чавуні", temp: "піч · 2год", price: "410 ₴" },
    ],
  },
  {
    title: "Десерти",
    items: [
      { name: "Тартатен з димною карамеллю", temp: "піч · 6хв", price: "165 ₴", hit: true },
      { name: "Шоколадний фондан", temp: "220°C · 9хв", price: "175 ₴" },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-char px-6 py-24 text-cream lg:px-10">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <span className="eyebrow text-brass">Меню</span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight lg:text-5xl">
            Кожна страва — своя температура вогню
          </h2>
        </Reveal>

        <div className="mt-16 space-y-14">
          {courses.map((course, ci) => (
            <Reveal key={course.title} delay={ci * 120}>
              <h3 className="font-display text-2xl italic text-ember">{course.title}</h3>
              <div className="mt-6 space-y-5">
                {course.items.map((item) => (
                  <div key={item.name}>
                    <div className="flex items-baseline gap-3">
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-lg text-cream">{item.name}</span>
                        {item.hit && (
                          <span className="rounded-full bg-ember/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ember">
                            хіт
                          </span>
                        )}
                      </div>
                      <span className="flex-1 translate-y-[-4px] border-b border-dotted border-cream/25" />
                      <span className="text-sm font-semibold text-cream/85">{item.price}</span>
                    </div>
                    <p className="font-mono text-[11px] tracking-wide text-cream/35">{item.temp}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}