import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "reveal",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "reveal" | "reveal-img";
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(variant, className)}
    >
      {children}
    </div>
  );
}
