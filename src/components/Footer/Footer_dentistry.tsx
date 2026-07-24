const navItems = [
  { label: "Переваги", href: "#advantages" },
  { label: "Послуги", href: "#services" },
  { label: "Галерея", href: "#gallery" },
  { label: "Відгуки", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакти", href: "#contacts" },
];

export default function Footer() {
  return (
    <footer className="bg-ink px-6 pb-10 pt-16 text-porcelain lg:px-10">
      <div className="mx-auto max-w-7xl border-t border-porcelain/12 pt-10">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <div>
            <span className="font-display text-2xl font-semibold">ЕМАЛЬ</span>
            <p className="mt-3 max-w-xs text-sm text-porcelain/50">
              Стоматологічна студія повного циклу в Івано-Франківську.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-porcelain/60 transition-colors hover:text-porcelain"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-4 text-sm text-porcelain/60">
            <a href="tel:+380441234567" className="hover:text-porcelain">
              +38 (044) 123-45-67
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 text-xs text-porcelain/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ЕМАЛЬ Dental Studio. Усі права захищені.</p>
          <p>Ліцензія МОЗ України № 000000</p>
        </div>
      </div>
    </footer>
  );
}