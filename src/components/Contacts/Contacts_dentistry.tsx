export default function Contacts_dentistry() {
  return (
    <section id="contacts" className="bg-ink px-6 py-24 text-porcelain lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <span className="eyebrow text-sage">Контакти</span>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight lg:text-5xl">
            Запишіться на консультацію
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-porcelain/60">
            Залиште контакти — адміністратор зателефонує протягом 15
            хвилин у робочий час і підбере зручний слот.
          </p>

          <div className="mt-12 space-y-6 text-sm">
            <div>
              <p className="text-porcelain/45">Адреса</p>
              <p className="mt-1 font-display text-lg">
                м. Івано-Франківськ, вул. Незалежності, 24
              </p>
            </div>
            <div>
              <p className="text-porcelain/45">Телефон</p>
              <p className="mt-1 font-display text-lg">+38 (044) 123-45-67</p>
            </div>
            <div>
              <p className="text-porcelain/45">Графік роботи</p>
              <p className="mt-1 font-display text-lg">Пн–Сб: 9:00–20:00</p>
            </div>
          </div>
        </div>

        <form className="flex flex-col gap-4 rounded-2xl border border-porcelain/12 p-8">
          <div>
            <label className="eyebrow text-porcelain/45">Ім'я</label>
            <input
              type="text"
              placeholder="Як до вас звертатись"
              className="mt-2 w-full rounded-lg border border-porcelain/15 bg-transparent px-4 py-3 text-sm text-porcelain placeholder:text-porcelain/30 focus:border-sage focus:outline-none"
            />
          </div>
          <div>
            <label className="eyebrow text-porcelain/45">Телефон</label>
            <input
              type="tel"
              placeholder="+38 (0__) ___-__-__"
              className="mt-2 w-full rounded-lg border border-porcelain/15 bg-transparent px-4 py-3 text-sm text-porcelain placeholder:text-porcelain/30 focus:border-sage focus:outline-none"
            />
          </div>
          <div>
            <label className="eyebrow text-porcelain/45">Послуга</label>
            <select className="mt-2 w-full rounded-lg border border-porcelain/15 bg-ink px-4 py-3 text-sm text-porcelain focus:border-sage focus:outline-none">
              <option>Первинна консультація</option>
              <option>Терапія</option>
              <option>Естетична стоматологія</option>
              <option>Ортодонтія</option>
              <option>Імплантація</option>
              <option>Дитяча стоматологія</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-3 rounded-full bg-coral px-7 py-3.5 text-sm font-semibold text-porcelain transition-transform hover:scale-[1.02]"
          >
            Записатись
          </button>
          <p className="text-xs text-porcelain/35">
            Надсилаючи форму, ви погоджуєтесь з обробкою персональних даних.
          </p>
        </form>
      </div>
    </section>
  );
}