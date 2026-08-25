import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

function apply(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
  try {
    localStorage.setItem("theme", theme);
  } catch {
    /* storage unavailable */
  }
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem("theme");
    } catch {
      /* ignore */
    }
    const initial: Theme =
      stored === "dark" || stored === "light"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    setTheme(initial);
    apply(initial);
    setMounted(true);
  }, []);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      const root = document.documentElement;
      root.classList.add("theme-tween");
      window.setTimeout(() => root.classList.remove("theme-tween"), 700);
      apply(next);
      return next;
    });
  }, []);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      title={isDark ? "Light mode" : "Dark mode"}
      className={cn(
        "group relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-full border border-border bg-card/70 backdrop-blur-md transition-[transform,background-color,border-color] duration-500 hover:-translate-y-0.5 hover:border-accent/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
        className,
      )}
    >
      <span className="pointer-events-none absolute inset-0 scale-0 rounded-full bg-accent/15 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100" />
      <span
        aria-hidden
        className={cn(
          "relative block size-4 rounded-full transition-all duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
          mounted && isDark
            ? "translate-x-0 rotate-0 scale-90 bg-transparent shadow-[inset_-5px_-1px_0_0_var(--color-foreground)]"
            : "rotate-180 scale-75 bg-foreground shadow-[0_0_0_2px_var(--color-background),0_0_0_3.5px_var(--color-foreground)]",
        )}
      >
        {/* sun rays */}
        <span
          className={cn(
            "absolute inset-[-7px] transition-all duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
            mounted && isDark ? "scale-50 opacity-0" : "scale-100 opacity-100",
          )}
        >
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <span
              key={deg}
              className="absolute top-1/2 left-1/2 block h-[1.5px] w-[3.5px] rounded-full bg-foreground"
              style={{
                transform: `translate(-50%,-50%) rotate(${deg}deg) translateX(9px)`,
              }}
            />
          ))}
        </span>
      </span>
    </button>
  );
}
