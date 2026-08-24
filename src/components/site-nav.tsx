import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-border/70 bg-card/85 px-4 py-2.5 backdrop-blur-md transition-all duration-500 sm:px-6 ${
          scrolled
            ? "max-w-4xl shadow-[0_18px_40px_-22px_oklch(0.28_0.05_265_/_0.55)]"
            : "shadow-[var(--shadow-lift)]"
        }`}
      >
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="press grid size-8 place-items-center rounded-full bg-primary font-display text-sm font-extrabold text-primary-foreground group-hover:rotate-[-8deg]">
            MS
          </span>
          <span className="font-display text-sm font-bold tracking-tight">Mostafa Samir</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-swipe relative rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="press sheen inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold tracking-wide text-primary-foreground uppercase"
        >
          <span className="blink-dot size-1.5 rounded-full bg-brand-yellow" />
          Available Q3 2026
        </a>
      </nav>
    </header>
  );
}
