import { useEffect, useMemo, useRef, useState, type ElementType, type ReactNode } from "react";

import { useInView } from "@/components/reveal";

/**
 * Headline that reveals word-by-word from behind a mask, the way the
 * reference portfolio slides its titles in.
 */
export function AnimatedWords({
  text,
  as: Tag = "span",
  className = "",
  delay = 0,
  stagger = 55,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const words = text.split(" ");

  return (
    <Tag className={`${className} ${inView ? "word-in" : ""}`}>
      <span ref={ref}>
        {words.map((word, i) => (
          <span key={`${word}-${i}`}>
            <span className="word-mask">
              <span style={{ transitionDelay: `${delay + i * stagger}ms` }}>{word}</span>
            </span>
            {i < words.length - 1 ? " " : null}
          </span>
        ))}
      </span>
    </Tag>
  );
}

/** Counts a numeric stat up when it scrolls into view. */
export function CountUp({
  value,
  className = "",
  duration = 1400,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const match = useMemo(() => value.match(/^([^\d]*)([\d,.]+)(.*)$/), [value]);
  const target = match?.[2] ? Number(match[2].replace(/[,.]/g, "")) : 0;
  const [display, setDisplay] = useState(0);
  const frame = useRef<number>(0);

  useEffect(() => {
    if (!inView || !target) return;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(target * eased));
      if (p < 1) {
        frame.current = requestAnimationFrame(tick);
      } else {
        setDisplay(target);
      }
    };
    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [inView, target, duration]);

  if (!match) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={className}>
      {match[1]}
      {display.toLocaleString("en-US")}
      {match[3]}
    </span>
  );
}

/** Element that leans toward the pointer — used on buttons and stickers. */
export function Magnetic({
  children,
  strength = 14,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <span
      ref={ref}
      className={`inline-block will-change-transform ${className}`}
      style={{ transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1)" }}
      onPointerMove={(event) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const y = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        el.style.transition = "transform 0.12s linear";
        el.style.transform = `translate(${x * strength}px, ${y * strength * 0.6}px)`;
      }}
      onPointerLeave={() => {
        const el = ref.current;
        if (!el) return;
        el.style.transition = "transform 0.5s cubic-bezier(0.2,1.3,0.4,1)";
        el.style.transform = "translate(0,0)";
      }}
    >
      {children}
    </span>
  );
}

/**
 * Character-by-character display reveal for the oversized editorial
 * headlines in the reference: each glyph rises from behind a mask.
 * A "o" in the text can be swapped for the stadium glyph via `pillIndex`.
 */
export function AnimatedChars({
  text,
  as: Tag = "span",
  className = "",
  delay = 0,
  stagger = 34,
  pillIndex,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  /** Index of the character to render as the stadium glyph. */
  pillIndex?: number;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const chars = [...text];

  return (
    <Tag className={`glyph-host ${className} ${inView ? "char-in" : ""}`}>
      <span ref={ref} aria-label={text}>
        {chars.map((char, i) =>
          char === " " ? (
            <span key={`sp-${i}`} aria-hidden>
              {"\u00A0"}
            </span>
          ) : (
            <span className="char-mask" key={`${char}-${i}`} aria-hidden>
              <span style={{ transitionDelay: `${delay + i * stagger}ms` }}>
                {i === pillIndex ? <span className="glyph-o" /> : char}
              </span>
            </span>
          ),
        )}
      </span>
    </Tag>
  );
}

/** Card that leans in 3D toward the pointer. */
export function Tilt({
  children,
  className = "",
  max = 6,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={`tilt ${className}`}
      onPointerMove={(event) => {
        const el = ref.current;
        if (!el || event.pointerType !== "mouse") return;
        const rect = el.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        el.style.transition = "transform 0.15s linear";
        el.style.transform = `perspective(1400px) rotateY(${x * max}deg) rotateX(${-y * max}deg) translateZ(0)`;
      }}
      onPointerLeave={() => {
        const el = ref.current;
        if (!el) return;
        el.style.transition = "transform 0.7s cubic-bezier(0.22,1,0.36,1)";
        el.style.transform = "none";
      }}
    >
      {children}
    </div>
  );
}
