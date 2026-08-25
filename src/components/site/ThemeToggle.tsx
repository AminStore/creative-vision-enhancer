import { useCallback, useEffect, useRef, useState } from "react";
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
  const themeRef = useRef<Theme>("light");
  const buttonRef = useRef<HTMLButtonElement>(null);

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
    themeRef.current = initial;
    apply(initial);
    setMounted(true);
  }, []);

  const toggle = useCallback(() => {
    const next: Theme = themeRef.current === "dark" ? "light" : "dark";
    themeRef.current = next;

    const root = document.documentElement;
    const commit = () => {
      apply(next);
      setTheme(next);
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const startViewTransition = (
      document as Document & {
        startViewTransition?: (cb: () => void) => { ready: Promise<void> };
      }
    ).startViewTransition;

    if (reduceMotion || typeof startViewTransition !== "function") {
      root.classList.add("theme-tween");
      commit();
      window.setTimeout(() => root.classList.remove("theme-tween"), 340);
      return;
    }

    const rect = buttonRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const y = rect ? rect.top + rect.height / 2 : 0;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    startViewTransition.call(document, commit).ready.then(() => {
      root.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 520,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "forwards",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  }, []);

  const isDark = theme === "dark";

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      title={isDark ? "Light mode" : "Dark mode"}
      className={cn(
        "group relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-full border border-border bg-card/70 backdrop-blur-md transition-[transform,background-color,border-color] duration-300 hover:-translate-y-0.5 hover:border-accent/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
        className,
      )}
    >
      <span className="pointer-events-none absolute inset-0 scale-0 rounded-full bg-accent/15 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
      <span
        aria-hidden
        className={cn(
          "relative block size-4 rounded-full transition-all duration-[420ms] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]",
          mounted && isDark
            ? "translate-x-0 rotate-0 scale-90 bg-transparent shadow-[inset_-5px_-1px_0_0_var(--color-foreground)]"
            : "rotate-180 scale-75 bg-foreground shadow-[0_0_0_2px_var(--color-background),0_0_0_3.5px_var(--color-foreground)]",
        )}
      >
        {/* sun rays */}
        <span
          className={cn(
            "absolute inset-[-7px] transition-all duration-[420ms] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]",
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
