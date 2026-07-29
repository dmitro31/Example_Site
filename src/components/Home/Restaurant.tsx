import EmberGlow from "./Emberglow";
import WaxSeal from "./Waxseal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-char text-cream">
      <EmberGlow color="#D6431B" className="pointer-events-none absolute -left-20 top-0 h-[420px] w-[420px] opacity-80" />
      <EmberGlow color="#B8862E" className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 opacity-60" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, #F5EEE1 0px, #F5EEE1 1px, transparent 1px, transparent 48px)",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-24 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:px-10 lg:py-32">
        <div>
          <span className="eyebrow mb-6 inline-block text-brass">
            Кухня живого вогню · Івано-Франківськ
          </span>

          <h1 className="max-w-2xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[5.5rem]">
            Готуємо там,
            <br />
            де ще пам&apos;ятають
            <br />
            <span className="italic text-ember">смак вогню.</span>
          </h1>

          <p className="mt-8 max-w-md text-lg leading-relaxed text-cream/65">
            Дровʼяна піч, мангал і жаровня замість плити. Локальні
            фермерські продукти, сезонне меню, зала на 40 гостей.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#contacts"
              className="rounded-full bg-ember px-8 py-4 text-sm font-semibold text-cream transition-transform hover:scale-[1.03]"
            >
              Забронювати столик
            </a>
            <a
              href="#menu"
              className="group flex items-center gap-2 text-sm font-semibold text-cream"
            >
              Переглянути меню
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs lg:mx-0 lg:justify-self-end">
          <div className="absolute -right-8 -top-8 z-0 hidden lg:block">
            <WaxSeal />
          </div>
          <div className="relative rotate-2 rounded-sm bg-cream px-7 py-8 text-char shadow-[0_25px_50px_-15px_rgba(0,0,0,0.5)]">
            <p className="eyebrow text-wine">З меню сьогодні</p>
            <ul className="mt-5 space-y-4 font-display text-lg italic">
              <li className="flex items-baseline justify-between gap-3 border-b border-char/10 pb-3">
                <span>Стейк рібай на вугіллі</span>
              </li>
              <li className="flex items-baseline justify-between gap-3 border-b border-char/10 pb-3">
                <span>Судак у дров&apos;яній печі</span>
              </li>
              <li className="flex items-baseline justify-between gap-3">
                <span>Баранина на рожні</span>
              </li>
            </ul>
            <p className="mt-6 text-xs not-italic text-char/45">
              *повне меню на 24 позиції нижче
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}