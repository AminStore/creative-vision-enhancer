import { Moon, Sun } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [rippleKey, setRippleKey] = useState(0);

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
    setDark(next);
    setRippleKey((k) => k + 1);

    const root = document.documentElement;
    root.classList.add("theme-switching");
    root.classList.toggle("dark", next);
    window.localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    window.setTimeout(() => root.classList.remove("theme-switching"), 500);
  }, [dark]);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      className="theme-toggle grid size-9 shrink-0 place-items-center rounded-full border border-border/70 bg-secondary text-foreground"
    >
      <span aria-hidden="true" className="toggle-glow" />
      {rippleKey > 0 && (
        <span
          key={rippleKey}
          aria-hidden="true"
          className="toggle-ripple text-brand-orange"
        />
      )}
      <span className="toggle-icon" data-state={dark ? "hidden" : "shown"} aria-hidden="true">
        <Sun className="size-4" strokeWidth={2.2} />
      </span>
      <span className="toggle-icon" data-state={dark ? "shown" : "hidden"} aria-hidden="true">
        <Moon className="size-4" strokeWidth={2.2} />
      </span>
    </button>
  );
}
