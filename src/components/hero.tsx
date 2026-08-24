import portrait from "@/assets/portrait-dev.png";
import { AnimatedChars, AnimatedWords, CountUp, Magnetic } from "@/components/motion-text";
import { Parallax } from "@/components/reveal";
import { stats, tools } from "@/data/projects";

export function Hero() {
  return (
    <section id="top" className="px-4 pt-10 sm:px-6 lg:pt-14">
      <div className="mx-auto max-w-6xl">
        <div className="slide-card rise-in dot-grid relative overflow-hidden px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
          {/* Soft drifting colour blobs behind the content */}
          <div
            aria-hidden
            className="drift-blob pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-brand-orange/20 blur-3xl"
          />
          <div
            aria-hidden
            className="drift-blob pointer-events-none absolute -bottom-28 -left-20 size-80 rounded-full bg-brand-sky/25 blur-3xl"
            style={{ animationDelay: "-6s" }}
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p
                className="sticker-in inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase"
                style={{ animationDelay: "80ms" }}
              >
                <span className="blink-dot size-1.5 rounded-full bg-brand-orange" />
                Available for healthcare software projects · Q3 2026
              </p>

              <h1 className="mt-6 font-display text-5xl leading-[0.9] font-extrabold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                <AnimatedChars text="Mostafa Samir" as="span" delay={120} stagger={38} />
                <br />
                <AnimatedWords
                  text="Healthcare Full-Stack Engineer."
                  as="span"
                  className="text-brand-orange"
                  delay={520}
                />
              </h1>

              <p
                className="rise-in mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
                style={{ animationDelay: "620ms" }}
              >
                Building secure, HIPAA-aligned healthcare platforms — EHR systems, HL7/FHIR
                interoperability, telehealth, and remote patient monitoring — with .NET 8
                microservices and modern frontend frameworks.
              </p>

              <div
                className="rise-in mt-8 flex flex-wrap items-center gap-3"
                style={{ animationDelay: "760ms" }}
              >
                <Magnetic strength={10}>
                  <a
                    href="#work"
                    className="press sheen inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
                  >
                    View projects
                  </a>
                </Magnetic>
                <Magnetic strength={10}>
                  <a
                    href="#contact"
                    className="press inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-secondary"
                  >
                    Get in touch
                  </a>
                </Magnetic>
              </div>

              <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="rise-in"
                    style={{ animationDelay: `${880 + i * 110}ms` }}
                  >
                    <dt className="font-display text-2xl font-extrabold">
                      <CountUp value={stat.value} />
                    </dt>
                    <dd className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <div className="float-slow absolute inset-x-6 top-8 bottom-8 rounded-[2.5rem] bg-brand-teal/25" />
              <div
                className="float-slow absolute inset-x-10 top-14 bottom-4 rounded-[2.5rem] bg-brand-sky/35"
                style={{ animationDelay: "-2.5s" }}
              />
              <Parallax strength={-34}>
                <div className="float-slow relative" style={{ animationDelay: "-1.2s" }}>
                  <img
                    src={portrait}
                    alt="Illustrated portrait of Mostafa Samir, a healthcare full-stack engineer"
                    width={1024}
                    height={1024}
                    className="sticker-in relative mx-auto w-full max-w-sm rounded-[2rem] drop-shadow-[0_18px_30px_rgba(0,0,0,0.16)]"
                    style={{ animationDelay: "260ms" }}
                  />
                </div>
              </Parallax>
              <p className="relative mt-2 text-center font-display text-sm font-bold">
                EHR · FHIR · Telehealth · Cloud
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="overflow-hidden rounded-full border border-border bg-card py-3">
            <div className="marquee-track gap-8 px-4">
              {[...tools, ...tools].map((tool, i) => (
                <span
                  key={`${tool}-${i}`}
                  className="flex shrink-0 items-center gap-3 text-sm font-semibold tracking-wide text-muted-foreground uppercase transition-colors hover:text-brand-orange"
                >
                  <span className="size-1.5 rounded-full bg-brand-orange" />
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-full border border-border bg-secondary/60 py-2.5">
            <div className="marquee-back gap-8 px-4">
              {[...tools.slice().reverse(), ...tools.slice().reverse()].map((tool, i) => (
                <span
                  key={`back-${tool}-${i}`}
                  className="flex shrink-0 items-center gap-3 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase"
                >
                  <span className="size-1 rounded-full bg-brand-teal" />
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
