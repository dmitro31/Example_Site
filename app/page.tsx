import Link from "next/link";
import { Onest, Unbounded } from "next/font/google";

const display = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600"],
});

const body = Onest({
  subsets: ["latin", "cyrillic"],
});

const demos = [
  {
    title: "Стоматологія",
    desc: "Світлий клінічний дизайн. Послуги пронумеровані за FDI-кодами зубів.",
    href: "/dentistry",
    image:
      "https://res.cloudinary.com/dpga0w2qm/image/upload/v1785317369/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA_%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2026-07-29_123039_gctdh1.png",
  },
  {
    title: "Кав'ярня",
    desc: "Тепла палітра, кавові кільця замість іконок і обертовий штамп обсмаження.",
    href: "/cafe",
    image:
      "https://res.cloudinary.com/dpga0w2qm/image/upload/v1785317511/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA_%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2026-07-29_123303_fp07jb.png",
  },
  {
    title: "Ресторан",
    desc: "Темна вугільна палітра, воскова печатка і меню у вигляді друкованого чека.",
    href: "/restaurant",
    image:
      "https://res.cloudinary.com/dpga0w2qm/image/upload/v1785317563/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA_%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2026-07-29_123402_rdzpp3.png",
  },
];

const services = [
  {
    title: "Сайт-візитка або лендінг",
    text: "Для кав'ярні, клініки, сервісу чи іншого місцевого бізнесу. Швидко завантажується і зручно виглядає на телефоні.",
  },
  {
    title: "Веб-застосунок",
    text: "Інтерфейс на React і Next.js, сервер на Node.js та Express, база даних PostgreSQL або MongoDB.",
  },
  {
    title: "Доробки до готового сайту",
    text: "Нові розділи, форми заявок, оплата, виправлення помилок та оновлення дизайну.",
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

const focus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4BFF] focus-visible:ring-offset-2";

export default function Home() {
  return (
    <main
      className={`${body.className} min-h-screen bg-[#F3F5F7] text-[#11161C] antialiased`}
    >
      <header className="border-b border-[#D9DEE3] bg-[#F3F5F7]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            href="/"
            className={`${display.className} text-base font-semibold ${focus}`}
          >
            Dmytro Abramyak
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-[#5B6672] md:flex">
            <a href="#projects" className={`hover:text-[#11161C] ${focus}`}>
              Роботи
            </a>
            <a href="#services" className={`hover:text-[#11161C] ${focus}`}>
              Послуги
            </a>
            <a href="#about" className={`hover:text-[#11161C] ${focus}`}>
              Про мене
            </a>
          </nav>
          <a
            href="#contact"
            className={`rounded-md bg-[#11161C] px-4 py-2 text-sm font-medium text-white hover:bg-[#1F4BFF] ${focus}`}
          >
            Замовити сайт
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-24">
        <p className="flex items-center gap-2 text-sm text-[#5B6672]">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Веб-розробник, приймаю нові проєкти
        </p>
        <h1
          className={`${display.className} mt-6 max-w-4xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl`}
        >
          Сайти для кав&apos;ярень, клінік і ресторанів
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-[#5B6672]">
          Роблю сайти, на яких клієнт одразу бачить, чим ви займаєтесь і як
          з вами зв&apos;язатися. Кожен сайт має власний дизайн, а не один
          шаблон з різними назвами.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className={`rounded-md bg-[#1F4BFF] px-6 py-3 text-sm font-medium text-white hover:bg-[#1639C9] ${focus}`}
          >
            Дивитись роботи
          </a>
          <a
            href="#contact"
            className={`rounded-md border border-[#B8C0C8] px-6 py-3 text-sm font-medium hover:border-[#11161C] ${focus}`}
          >
            Написати мені
          </a>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <div className="flex flex-col gap-3 border-t border-[#D9DEE3] pt-10 sm:flex-row sm:items-end sm:justify-between">
          <h2
            className={`${display.className} text-2xl font-semibold tracking-tight sm:text-3xl`}
          >
            Демо-сайти
          </h2>
          <p className="max-w-md text-[#5B6672]">
            Три готові концепції для різного бізнесу. Натисніть на сайт,
            щоб відкрити його повністю.
          </p>
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {demos.map((demo, i) => (
            <Link
              key={demo.title}
              href={demo.href}
              className={`group block ${i === 0 ? "md:col-span-2" : ""} ${focus}`}
            >
              <div className="overflow-hidden rounded-xl border border-[#D9DEE3] bg-white">
                <div className="flex items-center gap-3 border-b border-[#D9DEE3] bg-[#E8ECEF] px-4 py-2.5">
                  <span className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#C4CBD2]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#C4CBD2]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#C4CBD2]" />
                  </span>
                  <span className="rounded bg-white px-3 py-0.5 text-xs text-[#5B6672]">
                    {demo.href}
                  </span>
                </div>
                <div className="aspect-[16/10] overflow-hidden bg-[#E8ECEF]">
                  <img
                    src={demo.image}
                    alt={`Сайт: ${demo.title}`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none"
                  />
                </div>
              </div>
              <div className="mt-5 flex items-start justify-between gap-6">
                <div className="max-w-lg">
                  <h3
                    className={`${display.className} text-xl font-semibold`}
                  >
                    {demo.title}
                  </h3>
                  <p className="mt-2 leading-7 text-[#5B6672]">{demo.desc}</p>
                </div>
                <span className="shrink-0 pt-1 text-sm font-medium text-[#1F4BFF] group-hover:underline">
                  Відкрити сайт
                </span>
              </div>
            </Link>
          ))}

          <div className="rounded-xl border border-dashed border-[#B8C0C8] p-6 md:col-span-2">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className={`${display.className} text-xl font-semibold`}>
                Автосервіс
              </h3>
              <span className="text-sm text-[#5B6672]">Готується</span>
            </div>
            <p className="mt-2 max-w-xl leading-7 text-[#5B6672]">
              Індустріальна палітра, SVG-спідометри замість карток переваг і
              OBD-коди послуг.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-[#D9DEE3] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <h2
            className={`${display.className} text-2xl font-semibold tracking-tight sm:text-3xl`}
          >
            Що я роблю
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="border-t-2 border-[#11161C] pt-5">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 leading-7 text-[#5B6672]">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2
              className={`${display.className} text-2xl font-semibold tracking-tight sm:text-3xl`}
            >
              Про мене
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[#5B6672]">
              Я Дмитро, full stack розробник. Пишу інтерфейси на React і
              Next.js з TypeScript та Tailwind, а сервер на Node.js і
              Express. Працюю з PostgreSQL та MongoDB.
            </p>
          </div>
          <div>
            <p className="text-sm text-[#5B6672]">Технології, з якими працюю</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {stack.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-[#D9DEE3] bg-white px-3 py-1.5 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#11161C] text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <h2
            className={`${display.className} max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl`}
          >
            Потрібен сайт? Напишіть, що саме
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#B8C0C8]">
            Коротко опишіть свій бізнес і що хочете отримати. Я відповім і
            запропоную, з чого почати.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="mailto:ijsniper1@gmail.com"
              className={`rounded-md bg-[#1F4BFF] px-6 py-3 text-sm font-medium text-white hover:bg-[#4D70FF] ${focus}`}
            >
              ijsniper1@gmail.com
            </a>
            <a
              href="tel:+380962572026"
              className={`rounded-md border border-white/30 px-6 py-3 text-sm font-medium hover:border-white ${focus}`}
            >
              +38 (096) 257-20-26
            </a>
            <a
              href="https://github.com/dmitro31"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-md border border-white/30 px-6 py-3 text-sm font-medium hover:border-white ${focus}`}
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#11161C] pb-8 text-center text-sm text-[#8A95A1]">
        © {new Date().getFullYear()} Dmytro Abramyak
      </footer>
    </main>
  );
}