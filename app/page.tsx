import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-sky-50 to-blue-100 px-6">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-300/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-[140px]" />
      </div>

      <div className="relative z-10 w-full max-w-3xl rounded-3xl border border-white/40 bg-white/70 p-10 text-center shadow-2xl backdrop-blur-xl md:p-16">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-sky-500 text-3xl text-white shadow-lg">
          🚧
        </div>

        <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
          Portfolio
        </span>

        <h1 className="mt-8 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
          Сайт ще розробляється
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
          Зараз я працюю над власним портфоліо. Незабаром тут буде доступна
          інформація про мене, мої проєкти та послуги.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/dentistry"
            className="rounded-full bg-sky-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-sky-600 hover:shadow-xl"
          >
            Переглянути демо стоматології
          </Link>

          <a
            href="mailto:your@email.com"
            className="rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-100"
          >
            Зв'язатися
          </a>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8">
          <p className="text-sm text-slate-500">
            Незабаром тут з'являться демо-сайти для різних напрямків бізнесу:
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {[
              "🦷 Стоматологія",
              "☕ Кафе",
              "🚗 СТО",
              "💇 Салон краси",
              "🏋️ Фітнес",
              "🏢 Корпоративні сайти",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full bg-white px-4 py-2 text-sm text-slate-700 shadow"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}