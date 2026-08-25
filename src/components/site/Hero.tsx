import { ArrowUpRight } from "lucide-react";

import heroEstate from "@/assets/hero-estate.jpg";
import { Reveal } from "./Reveal";

const stats = [
  {
    value: "4+",
    body: "Years shipping property platforms, brokerage portals and PropTech systems.",
  },
  {
    value: "30+",
    body: "Listing, CRM and real-time property projects delivered end to end.",
  },
];

export function Hero() {
  return (
    <section id="top" className="relative px-2 pt-2 sm:px-3 sm:pt-3">
      <div className="relative isolate overflow-hidden rounded-3xl">
        {/* Backdrop */}
        <img
          src={heroEstate}
          alt="Modern luxury villa at golden hour with reflecting pool"
          width={1536}
          height={1024}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/25 to-ink/70" />

        <div className="relative flex min-h-[92svh] flex-col justify-between gap-10 px-5 pt-28 pb-6 sm:px-8 sm:pt-36 sm:pb-8">
          {/* Top copy row */}
          <div className="flex flex-wrap items-start justify-between gap-6">
            <Reveal className="max-w-2xl">
              <p className="text-[0.62rem] tracking-[0.22em] uppercase text-primary-foreground/70">
                Since 2021
              </p>
              <h1 className="mt-3 max-w-xl font-display text-3xl leading-[1.06] text-primary-foreground uppercase sm:text-5xl">
                Engineering the platforms that move real estate
              </h1>
              <p className="mt-4 max-w-xs text-xs leading-relaxed text-primary-foreground/75">
                I'm Mostafa Samir — senior full stack engineer building listing portals,
                multi-tenant brokerage platforms and property intelligence on .NET 8.
              </p>
            </Reveal>

            <Reveal delay={120} className="hidden max-w-[9rem] text-right sm:block">
              <p className="text-[0.62rem] leading-relaxed tracking-[0.14em] uppercase text-primary-foreground/70">
                Step Into The
                <br />
                Future Of
                <br />
                PropTech
              </p>
            </Reveal>
          </div>

          {/* Giant wordmark + glass stat cards */}
          <div className="relative">
            <Reveal variant="reveal-img">
              <p className="pointer-events-none font-display leading-[0.82] text-primary-foreground/95 uppercase text-[clamp(3rem,15.5vw,13rem)] tracking-[-0.02em] whitespace-nowrap">
                Mostafa Samir
              </p>
            </Reveal>

            <div className="mt-6 flex flex-col items-end gap-3 sm:absolute sm:top-1/2 sm:right-0 sm:mt-0 sm:-translate-y-1/3">
              {stats.map((s, i) => (
                <Reveal key={s.value} delay={200 + i * 130}>
                  <div className="w-56 rounded-2xl border border-primary-foreground/15 bg-ink/35 p-5 backdrop-blur-md">
                    <p className="font-display text-3xl text-primary-foreground">{s.value}</p>
                    <p className="mt-2 text-[0.7rem] leading-relaxed text-primary-foreground/75">
                      {s.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal delay={160} className="max-w-[10rem]">
              <p className="text-[0.62rem] leading-relaxed tracking-[0.14em] uppercase text-primary-foreground/70">
                I Build Speed, Security And Scale Into Every Property Platform
              </p>
            </Reveal>

            <Reveal delay={220}>
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-4 rounded-full bg-ink/45 py-2 pr-2 pl-6 backdrop-blur-md transition-colors duration-300 hover:bg-ink/65"
              >
                <span className="text-[0.7rem] font-medium tracking-[0.18em] uppercase text-primary-foreground">
                  Discover more
                </span>
                <span className="grid size-9 place-items-center rounded-full bg-primary-foreground text-ink transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="size-4" />
                </span>
              </a>
            </Reveal>

            <Reveal delay={280} className="hidden max-w-[9rem] text-right sm:block">
              <p className="text-[0.62rem] leading-relaxed tracking-[0.14em] uppercase text-primary-foreground/70">
                Available Worldwide · Tanta, Egypt
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
