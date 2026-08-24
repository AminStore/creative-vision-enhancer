import { Moon, Sun } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const STORAGE_KEY = "theme";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const prefersDark =
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggle = useCallback(() => {
    const next = !dark;
    const root = document.documentElement;

    const apply = () => {
      root.classList.toggle("dark", next);
      setDark(next);
    };

    window.localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const startViewTransition = (
      document as Document & {
        startViewTransition?: (cb: () => void) => { ready: Promise<void> };
      }
    ).startViewTransition;

    if (reduceMotion || typeof startViewTransition !== "function") {
      // Smooth cross-fade fallback.
      root.classList.add("theme-switching");
      apply();
      window.setTimeout(() => root.classList.remove("theme-switching"), 700);
      return;
    }

    const rect = buttonRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const y = rect ? rect.top + rect.height / 2 : 0;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = startViewTransition.call(document, apply);

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 750,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  }, [dark]);

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      className="theme-toggle grid size-9 shrink-0 place-items-center rounded-full border border-border/70 bg-secondary text-foreground"
    >
      <span aria-hidden="true" className="toggle-glow" />
      <span className="toggle-icon" data-state={dark ? "hidden" : "shown"} aria-hidden="true">
        <Sun className="size-4" strokeWidth={2.2} />
      </span>
      <span className="toggle-icon" data-state={dark ? "shown" : "hidden"} aria-hidden="true">
        <Moon className="size-4" strokeWidth={2.2} />
      </span>
    </button>
  );
}
