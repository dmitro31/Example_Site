import Reveal from "../Home/Reveal";

export default function Contacts() {
  return (
    <section id="contacts" className="bg-char px-6 py-24 text-cream lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow text-brass">Контакти</span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight lg:text-5xl">
            Забронюйте столик
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/60">
            Залиште контакти — підтвердимо бронювання протягом 15 хвилин
            у робочий час.
          </p>

          <div className="mt-12 space-y-6 text-sm">
            <div>
              <p className="text-cream/45">Адреса</p>
              <p className="mt-1 font-display text-lg">
                м. Івано-Франківськ, вул. Грушевського, 8
              </p>
            </div>
            <div>
              <p className="text-cream/45">Телефон</p>
              <p className="mt-1 font-display text-lg">+38 (044) 123-45-67</p>
            </div>
            <div>
              <p className="text-cream/45">Графік роботи</p>
              <p className="mt-1 font-display text-lg">Щодня: 12:00–23:00</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <form className="flex flex-col gap-4 border border-cream/12 p-8">
            <div>
              <label className="eyebrow text-cream/45">Ім&apos;я</label>
              <input
                type="text"
                placeholder="Як до вас звертатись"
                className="mt-2 w-full border border-cream/15 bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-brass focus:outline-none"
              />
            </div>
            <div>
              <label className="eyebrow text-cream/45">Телефон</label>
              <input
                type="tel"
                placeholder="+38 (0__) ___-__-__"
                className="mt-2 w-full border border-cream/15 bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-brass focus:outline-none"
              />
            </div>
            <div>
              <label className="eyebrow text-cream/45">Кількість гостей</label>
              <select className="mt-2 w-full border border-cream/15 bg-char px-4 py-3 text-sm text-cream focus:border-brass focus:outline-none">
                <option>1–2 особи</option>
                <option>3–4 особи</option>
                <option>5–8 осіб</option>
                <option>Приватна зала</option>
              </select>
            </div>
            <button
              type="submit"
              className="mt-3 rounded-full bg-ember px-7 py-3.5 text-sm font-semibold text-cream transition-transform hover:scale-[1.02]"
            >
              Забронювати
            </button>
            <p className="text-xs text-cream/35">
              Надсилаючи форму, ви погоджуєтесь з обробкою персональних даних.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}