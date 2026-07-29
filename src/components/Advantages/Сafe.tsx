import CoffeeRing from "../Home/CoffeeRing";
import Reveal from "../Home/Reveal";

const advantages = [
  {
    title: "Власна обсмажувальня",
    text: "Обсмажуємо зерно самі двічі на тиждень — свіжість без посередників.",
  },
  {
    title: "Молоко альтернативне за замовчуванням",
    text: "Вівсяне й мигдальне без доплати, коров'яче — фермерське з околиць.",
  },
  {
    title: "Затишок для роботи",
    text: "Швидкий wifi, розетки на кожному столі, тихі зони без гучної музики.",
  },
  {
    title: "Домашня випічка щодня",
    text: "Круасани й тарти печемо вранці на місці, без заморозки й консервантів.",
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="relative overflow-hidden bg-honey/20 px-6 py-24 lg:px-10">
      <CoffeeRing color="#7CB245" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 opacity-70" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="max-w-xl">
          <span className="eyebrow text-matcha">Чому ЗЕРНО</span>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-espresso lg:text-5xl">
            Кава, якій довіряєш з першого ковтка
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item, i) => {
            const tints = ["bg-tangerine/12", "bg-matcha/14", "bg-denim/12", "bg-berry/12"];
            return (
              <Reveal key={item.title} delay={i * 100} className={`flex flex-col rounded-2xl p-8 ${tints[i % tints.length]}`}>
                <span className="eyebrow text-espresso/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-xl text-espresso">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-espresso/60">
                  {item.text}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}