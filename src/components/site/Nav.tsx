import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Expertise", href: "#expertise" },
  { label: "Track Record", href: "#experience" },
  { label: "About", href: "#about" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 px-3 transition-all duration-500 sm:px-5",
        scrolled ? "py-2 sm:py-3" : "py-4 sm:py-6",
      )}
    >
      <nav
        className={cn(
          "mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl px-3 py-2.5 transition-all duration-500 sm:gap-6 sm:rounded-full sm:px-5 sm:py-3 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]",
          scrolled || open
            ? "bg-card/85 shadow-soft backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <a href="#top" className="flex min-w-0 items-center gap-2.5">
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary font-display text-lg text-primary-foreground">
            M
          </span>
          <span className="min-w-0 font-display text-lg leading-none sm:text-xl">
            <span className="block truncate">Mostafa Samir</span>
            <span className="mt-0.5 block truncate font-sans text-[0.58rem] tracking-[0.18em] uppercase text-muted-foreground sm:text-[0.62rem]">
              PropTech Engineering
            </span>
          </span>
        </a>

        <ul className="hidden items-center justify-center gap-6 text-sm whitespace-nowrap text-muted-foreground lg:flex xl:gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative py-1 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:text-foreground hover:after:origin-left hover:after:scale-x-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium whitespace-nowrap text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 md:inline-flex"
          >
            Book a consultation
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 shrink-0 place-items-center rounded-full border border-border bg-card/70 backdrop-blur-md transition-colors hover:border-accent/50 lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={cn(
                  "absolute left-0 block h-px w-4 bg-foreground transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
                  open ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute top-1.5 left-0 block h-px w-4 bg-foreground transition-all duration-300",
                  open ? "scale-x-0 opacity-0" : "opacity-100",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-px w-4 bg-foreground transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
                  open ? "top-1.5 -rotate-45" : "top-3",
                )}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "mx-auto grid max-w-6xl overflow-hidden transition-[grid-template-rows,opacity] duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] lg:hidden",
          open ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <ul className="min-h-0 space-y-1 rounded-2xl bg-card/95 p-3 shadow-soft backdrop-blur-xl">
          {links.concat({ label: "Contact", href: "#contact" }).map((l, i) => (
            <li
              key={l.href}
              className={cn(
                "transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
                open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
              )}
              style={{ transitionDelay: open ? `${80 + i * 55}ms` : "0ms" }}
            >
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm transition-colors hover:bg-muted"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
