import CoffeeRing from "./CoffeeRing";

function RoastStamp() {
  return (
    <div className="relative flex h-28 w-28 items-center justify-center">
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-spin-slow">
        <defs>
          <path id="stampCircle" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
        </defs>
        <circle cx="100" cy="100" r="95" fill="#FFF8ED" stroke="#3E2317" strokeOpacity="0.15" />
        <text fill="#3E2317" fontSize="12.5" letterSpacing="2" fontFamily="var(--font-plex-mono)">
          <textPath href="#stampCircle" startOffset="0%">
            ЩОЙНО ОБСМАЖЕНО • СВІЖА КАВА •&#160;
          </textPath>
        </text>
      </svg>
      <span className="font-display text-2xl italic text-tangerine">☕</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream text-espresso">
      <div className="absolute inset-0 bg-gradient-to-br from-honey/40 via-cream to-matcha/25" />
      <CoffeeRing color="#F2611D" className="pointer-events-none absolute -left-16 top-10 h-72 w-72 opacity-90" />
      <CoffeeRing color="#3D6B8C" className="pointer-events-none absolute -right-10 bottom-0 h-96 w-96 opacity-70" />

      <div className="relative z-10 mx-auto flex min-h-[86vh] max-w-7xl flex-col justify-center px-6 py-28 lg:px-10">
        <div className="flex items-start justify-between gap-8">
          <div>
            <span className="eyebrow mb-6 inline-block text-matcha animate-fade-up">
              Кав'ярня · Івано-Франківськ
            </span>

            <h1 className="max-w-3xl font-display text-[2.75rem] font-medium leading-[1.08] tracking-tight animate-fade-up [animation-delay:120ms] opacity-0 [animation-fill-mode:forwards] sm:text-6xl lg:text-7xl">
              Кава, обсмажена
              <br />
              <span className="relative inline-block italic text-tangerine">
                за два квартали звідси.
                <svg
                  className="absolute -right-10 -top-8 h-14 w-10 text-tangerine/70"
                  viewBox="0 0 40 60"
                  fill="none"
                >
                  <path
                    className="animate-steam [animation-delay:0s]"
                    d="M8 55C2 45 14 40 8 30"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    className="animate-steam [animation-delay:0.9s]"
                    d="M20 55C14 45 26 40 20 30"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    className="animate-steam [animation-delay:1.6s]"
                    d="M32 55C26 45 38 40 32 30"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </div>

          <div className="hidden shrink-0 lg:block">
            <RoastStamp />
          </div>
        </div>

        <p className="mt-8 max-w-lg text-lg leading-relaxed text-espresso/65 animate-fade-up [animation-delay:240ms] opacity-0 [animation-fill-mode:forwards]">
          Власна обсмажувальня, сезонне меню сніданків і місце, де
          затишно засидітись з ноутбуком або друзями до вечора.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:360ms] opacity-0 [animation-fill-mode:forwards]">
          <a
            href="#contacts"
            className="rounded-full bg-tangerine px-7 py-3.5 text-sm font-semibold text-cream transition-transform hover:scale-[1.03]"
          >
            Забронювати столик
          </a>
          <a
            href="#menu"
            className="rounded-full border border-espresso/20 px-7 py-3.5 text-sm font-semibold text-espresso transition-colors hover:border-espresso/50"
          >
            Переглянути меню
          </a>
        </div>

        <div className="mt-16 grid max-w-xl grid-cols-3 gap-8 border-t border-espresso/12 pt-8">
          <div>
            <p className="font-display text-3xl text-tangerine">6</p>
            <p className="mt-1 text-xs text-espresso/50">років на ринку</p>
          </div>
          <div>
            <p className="font-display text-3xl text-matcha">14</p>
            <p className="mt-1 text-xs text-espresso/50">сортів зерна</p>
          </div>
          <div>
            <p className="font-display text-3xl text-denim">4.8</p>
            <p className="mt-1 text-xs text-espresso/50">середня оцінка</p>
          </div>
        </div>
      </div>
    </section>
  );
}