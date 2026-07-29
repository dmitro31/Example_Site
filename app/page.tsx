import Link from "next/link";

export default function Home() {
  const demos = [
    { title: "Стоматологія", href: "/dentistry", image: "https://res.cloudinary.com/dpga0w2qm/image/upload/v1785317369/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA_%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2026-07-29_123039_gctdh1.png"},
    { title: "Кафе", href: "/cafe", image: "https://res.cloudinary.com/dpga0w2qm/image/upload/v1785317511/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA_%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2026-07-29_123303_fp07jb.png" },
    { title: "Ресторан", href: "/restaurant", image: "https://res.cloudinary.com/dpga0w2qm/image/upload/v1785317563/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA_%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2026-07-29_123402_rdzpp3.png" },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-bold">Dmytro.</Link>
          <nav className="hidden gap-8 md:flex">
            <a href="#projects">Проєкти</a>
            <a href="#about">Про мене</a>
            <a href="#contact">Контакти</a>
          </nav>
          <a href="mailto:your@email.com" className="rounded-full bg-slate-900 px-5 py-2 text-white">Замовити сайт</a>
        </div>
      </header>

      <section className="mx-auto flex min-h-[85vh] max-w-7xl items-center px-6">
        <div className="max-w-3xl">
          <span className="rounded-full border px-4 py-2 text-sm">Full Stack Web Developer</span>
          <h1 className="mt-8 text-6xl font-black leading-tight">
            Створюю сучасні сайти
            <span className="block text-sky-600">для малого бізнесу</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            Розробляю швидкі, адаптивні та сучасні сайти, які допомагають бізнесу
            виглядати професійно та залучати нових клієнтів.
          </p>
          <div className="mt-10 flex gap-4">
            <a href="#projects" className="rounded-full bg-sky-600 px-7 py-4 text-white">Переглянути роботи</a>
            <a href="#contact" className="rounded-full border px-7 py-4">Зв'язатися</a>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-4xl font-bold">Демо-проєкти</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {demos.map((demo)=>(
            <Link key={demo.title} href={demo.href} className="overflow-hidden rounded-3xl border transition hover:-translate-y-2 hover:shadow-xl">
              <div className="aspect-[16/10] bg-slate-200">
                <img src={demo.image} alt={demo.title} className="h-full w-full object-cover"/>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold">{demo.title}</h3>
                <p className="mt-3 text-slate-600">Переглянути демонстраційну версію сайту.</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="about" className="bg-slate-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
          {["Адаптивний дизайн","SEO","Висока швидкість","Сучасний UI","Форма заявки","Підтримка"].map((i)=>(
            <div key={i} className="rounded-2xl border bg-white p-8">
              <h3 className="font-semibold">{i}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="text-5xl font-bold">Потрібен сайт?</h2>
        <p className="mt-6 text-lg text-slate-600">Напишіть мені, і ми обговоримо ваш проєкт.</p>
        <a href="mailto:your@email.com" className="mt-10 inline-block rounded-full bg-slate-900 px-8 py-4 text-white">
          Зв'язатися
        </a>
      </section>

      <footer className="border-t py-8 text-center text-slate-500">
        © 2026 Dmytro Abramyak
      </footer>
    </main>
  );
}
