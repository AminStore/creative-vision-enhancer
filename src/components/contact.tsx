import { AnimatedWords, Magnetic } from "@/components/motion-text";
import { Reveal } from "@/components/reveal";

const facts = [
  { label: "Email", value: "m.ssaid356@gmail.com" },
  { label: "Location", value: "Tanta, Egypt · Remote" },
  { label: "Focus", value: "Healthcare & health tech" },
];

export function Contact() {
  return (
    <section id="contact" className="px-4 pt-8 pb-6 sm:px-6 lg:pt-12">
      <div className="mx-auto max-w-6xl">
        <div className="slide-card dot-grid relative overflow-hidden px-6 py-12 text-center sm:px-10 sm:py-16">
          <div
            aria-hidden
            className="drift-blob pointer-events-none absolute -top-20 left-1/4 size-64 rounded-full bg-brand-yellow/25 blur-3xl"
          />
          <div
            aria-hidden
            className="drift-blob pointer-events-none absolute -bottom-24 right-1/4 size-64 rounded-full bg-brand-teal/20 blur-3xl"
            style={{ animationDelay: "-8s" }}
          />

          <div className="relative">
            <Reveal variant="pop">
              <p className="text-xs font-semibold tracking-[0.2em] text-brand-orange uppercase">
                Get in touch
              </p>
            </Reveal>

            <AnimatedWords
              as="h2"
              text="Let's build better healthcare software."
              className="mx-auto mt-5 block max-w-2xl font-display text-4xl leading-[1.05] font-extrabold sm:text-5xl"
              stagger={60}
            />

            <Reveal variant="up" delay={120}>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Whether it&apos;s an EHR module, a FHIR integration, a telehealth product, or a
                patient portal, I&apos;m ready to help. I respond to every inquiry within one
                business day.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Magnetic strength={12}>
                  <a
                    href="mailto:m.ssaid356@gmail.com"
                    className="press sheen inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground"
                  >
                    m.ssaid356@gmail.com
                  </a>
                </Magnetic>
                <Magnetic strength={12}>
                  <a
                    href="https://linkedin.com/in/mostafasamirsaid"
                    target="_blank"
                    rel="noreferrer"
                    className="press inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold hover:bg-secondary"
                  >
                    LinkedIn
                  </a>
                </Magnetic>
              </div>
            </Reveal>

            <dl className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              {facts.map((fact, i) => (
                <Reveal key={fact.label} variant="pop" delay={200 + i * 100}>
                  <div className="card-hover rounded-2xl border border-border bg-card px-4 py-4">
                    <dt className="text-[0.65rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                      {fact.label}
                    </dt>
                    <dd className="mt-2 font-display text-sm font-bold">{fact.value}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>

        <footer className="flex flex-col items-center justify-between gap-2 px-2 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 Mostafa Samir · Healthcare Full-Stack Engineer.</p>
          <p>EHR · HL7 FHIR · Telehealth · Cloud</p>
        </footer>
      </div>
    </section>
  );
}
