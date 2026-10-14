import Link from "next/link";

const demos = [
  {
    title: "Стоматологія",
    desc: "Клінічний, світлий дизайн із нумерацією послуг за FDI-кодами зубів.",
    href: "/dentistry",
    image:
      "https://res.cloudinary.com/dpga0w2qm/image/upload/v1785317369/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA_%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2026-07-29_123039_gctdh1.png",
    tag: "Live",
  },
  {
    title: "Кав'ярня",
    desc: "Тепла палітра, кавові кільця замість іконок, обертальний штамп обсмаження.",
    href: "/cafe",
    image:
      "https://res.cloudinary.com/dpga0w2qm/image/upload/v1785317511/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA_%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2026-07-29_123303_fp07jb.png",
    tag: "Live",
  },
  {
    title: "Ресторан",
    desc: "Темна вугільна палітра, восковa печатка, меню у вигляді друкованого чека.",
    href: "/restaurant",
    image:
      "https://res.cloudinary.com/dpga0w2qm/image/upload/v1785317563/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA_%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2026-07-29_123402_rdzpp3.png",
    tag: "Live",
  },
  {
    title: "Автосервіс",
    desc: "Індустріальна палітра, SVG-спідометри замість карток переваг, OBD-коди послуг.",
    href: "/sto",
    image: null,
    tag: "Скоро",
  },
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
];

const services = [
  {
    title: "Лендінги та сайти-візитки",
    text: "Для кав'ярень, клінік, сервісів і локального бізнесу — швидко, адаптивно, під ключ.",
  },
  {
    title: "Веб-застосунки",
    text: "Повний цикл: React/Next.js на фронті, Node/Express і база даних на бекенді.",
  },
  {
    title: "Підтримка й доробки",
    text: "Оновлення, нові секції, інтеграції форм і платежів до вже готового сайту.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Dmytro<span className="text-sky-600">.</span>
          </Link>
          <nav className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#projects" className="transition-colors hover:text-slate-900">
              Проєкти
            </a>
            <a href="#services" className="transition-colors hover:text-slate-900">
              Послуги
            </a>
            <a href="#about" className="transition-colors hover:text-slate-900">
              Про мене
            </a>
            <a href="#contact" className="transition-colors hover:text-slate-900">
              Контакти
            </a>
          </nav>
          <a
            href="mailto:ijsniper1@gmail.com"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-600"
          >
            Замовити сайт
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Full Stack Web Developer · доступний для нових проєктів
            </span>

            <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Створюю сучасні сайти
              <span className="block text-sky-600">для малого бізнесу</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              Розробляю швидкі, адаптивні та сучасні сайти, які допомагають
              бізнесу виглядати професійно та залучати нових клієнтів —
              від ідеї та дизайну до запуску.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-sky-600 px-7 py-4 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
              >
                Переглянути роботи
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-300 px-7 py-4 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-900"
              >
                Зв&apos;язатися
              </a>
            </div>

            <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-slate-200 pt-8">
              <div>
                <p className="text-3xl font-bold text-slate-900">4</p>
                <p className="mt-1 text-sm text-slate-500">демо-проєкти</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">100%</p>
                <p className="mt-1 text-sm text-slate-500">адаптивна верстка</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">TS</p>
                <p className="mt-1 text-sm text-slate-500">типобезпечний код</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-sky-600">
              Портфоліо
            </span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight">
              Демо-проєкти
            </h2>
          </div>
          <p className="max-w-sm text-slate-500">
            Кожен сайт — окрема концепція: своя палітра, типографіка й
            фірмовий деталь, а не один шаблон під різними назвами.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {demos.map((demo) =>
            demo.image ? (
              <Link
                key={demo.title}
                href={demo.href}
                className="group overflow-hidden rounded-3xl border border-slate-200 transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                  <img
                    src={demo.image}
                    alt={demo.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">
                    {demo.tag}
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold">{demo.title}</h3>
                  <p className="mt-3 text-slate-600">{demo.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-sky-600">
                    Переглянути демо
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ) : (
              <div
                key={demo.title}
                className="relative overflow-hidden rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-8"
              >
                <span className="absolute left-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-slate-900">
                  {demo.tag}
                </span>
                <div className="flex aspect-[16/10] items-center justify-center rounded-2xl bg-slate-100 text-sm text-slate-400">
                  скріншот зʼявиться після запуску
                </div>
                <h3 className="mt-8 text-2xl font-semibold text-slate-700">
                  {demo.title}
                </h3>
                <p className="mt-3 text-slate-500">{demo.desc}</p>
              </div>
            ),
          )}
        </div>
      </section>

      <section id="services" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-sm font-semibold uppercase tracking-wide text-sky-600">
            Що я роблю
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight">Послуги</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="rounded-2xl border border-slate-200 bg-white p-8"
              >
                <span className="text-sm font-mono text-slate-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-sky-600">
              Про мене
            </span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight">
              Дмитро Абрамʼяк
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
              Full stack веб-розробник. Пишу фронтенд на React/Next.js з
              TypeScript і Tailwind, бекенд — на Node.js та Express, працюю
              з PostgreSQL і MongoDB. Люблю, коли кожен проєкт має свій
              характер, а не виглядає як копія попереднього.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold sm:text-5xl">Потрібен сайт?</h2>
          <p className="mt-6 text-lg text-slate-300">
            Напишіть мені, і ми обговоримо ваш проєкт — від ідеї до запуску.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:ijsniper1@gmail.com"
              className="rounded-full bg-sky-500 px-8 py-4 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              ijsniper1@gmail.com
            </a>
            <a
              href="tel:+380962572026"
              className="rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-white"
            >
              +38 (096) 257-20-26
            </a>
            <a
              href="https://github.com/dmitro31"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-white"
            >
              GitHub →
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Dmytro Abramyak
      </footer>
    </main>
  );
}