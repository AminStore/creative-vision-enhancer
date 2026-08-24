import { useCallback, useEffect, useId, useRef, useState } from "react";

const STORAGE_KEY = "theme";
const RAYS = [0, 45, 90, 135, 180, 225, 270, 315];

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const maskId = useId();

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
      root.classList.add("theme-switching");
      apply();
      window.setTimeout(() => root.classList.remove("theme-switching"), 900);
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
          opacity: [0.6, 1],
        },
        {
          duration: 900,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
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
      data-mode={dark ? "dark" : "light"}
      className="celestial-toggle grid size-9 shrink-0 place-items-center rounded-full border border-border/70 bg-secondary text-foreground"
    >
      <span aria-hidden="true" className="celestial-halo" />
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="celestial-svg size-5 overflow-visible"
        fill="none"
      >
        <mask id={maskId}>
          <rect x="0" y="0" width="24" height="24" fill="white" />
          {/* Slides across the disc to carve the crescent. */}
          <circle className="celestial-bite" cx="24" cy="8" r="8.5" fill="black" />
        </mask>

        <g className="celestial-rays" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
          {RAYS.map((angle, i) => (
            <line
              key={angle}
              x1="12"
              y1="1.6"
              x2="12"
              y2="4.1"
              style={{
                transform: `rotate(${angle}deg) scale(var(--ray-scale, 1))`,
                transformOrigin: "12px 12px",
                transitionDelay: `${i * 22}ms`,
              }}
            />
          ))}
        </g>

        <circle
          className="celestial-body"
          cx="12"
          cy="12"
          r="5.6"
          fill="currentColor"
          mask={`url(#${maskId})`}
        />

        <g className="celestial-stars" fill="currentColor">
          <circle cx="4.4" cy="5.6" r="0.9" style={{ transitionDelay: "180ms" }} />
          <circle cx="19.6" cy="18.4" r="0.7" style={{ transitionDelay: "260ms" }} />
        </g>
      </svg>
    </button>
  );
}
