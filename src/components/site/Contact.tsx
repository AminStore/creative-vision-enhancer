import { Reveal } from "./Reveal";

const channels = [
  { label: "Email", value: "m.ssaid356@gmail.com", href: "mailto:m.ssaid356@gmail.com" },
  { label: "Phone", value: "+20 106 735 8073", href: "tel:+201067358073" },
  { label: "LinkedIn", value: "in/mostafasamirsaid", href: "https://linkedin.com/in/mostafasamirsaid" },
  { label: "GitHub", value: "Mostafa-SAID7", href: "https://github.com/Mostafa-SAID7" },
];

export function Contact() {
  return (
    <section id="contact" className="px-4 pb-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl bg-primary px-8 py-16 text-primary-foreground sm:px-16">
            <div className="float-soft pointer-events-none absolute -right-16 -top-16 size-72 rounded-full bg-accent/25 blur-3xl" />
            <div className="relative max-w-2xl">
              <p className="eyebrow !text-primary-foreground/60">Contact</p>
              <h2 className="mt-4 text-4xl sm:text-5xl">
                Have a property platform to build or rescue?
              </h2>
              <p className="mt-5 leading-relaxed text-primary-foreground/70">
                Property portals, brokerage back-offices, smart-building dashboards or a
                listings frontend that needs to load in under a second — tell me the
                problem and I'll map the architecture.
              </p>
              <a
                href="mailto:m.ssaid356@gmail.com"
                className="mt-9 inline-flex rounded-full bg-accent px-8 py-4 text-sm font-medium text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                Send a brief
              </a>
            </div>

            <dl className="relative mt-14 grid gap-8 border-t border-primary-foreground/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
              {channels.map((c) => (
                <div key={c.label}>
                  <dt className="eyebrow !text-primary-foreground/55">{c.label}</dt>
                  <dd className="mt-2">
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-sm transition-colors hover:text-accent"
                    >
                      {c.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Mostafa Samir · Full Stack Engineer, PropTech</p>
        <p>Tanta, Egypt · Remote friendly</p>
      </div>
    </footer>
  );
}
