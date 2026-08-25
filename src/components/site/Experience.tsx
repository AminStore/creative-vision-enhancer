import { Reveal } from "./Reveal";

const roles = [
  {
    company: "WE3DS Company",
    role: "Senior Software Developer",
    period: "Jul 2024 — Present",
    place: "Tanta, Egypt",
    points: [
      "Architected scalable .NET 8 microservices with Clean Architecture and DDD powering enterprise property listing and brokerage workflows.",
      "Led the move to multi-tenant architecture with secure data isolation and hierarchical role-based access control.",
      "Engineered real-time telemetry and integration layers with SignalR across 1,000+ IoT endpoints.",
      "Automated CI/CD with Azure DevOps and TFS, cutting deployment cycles and protecting configuration baselines.",
      "Raised database performance 300% via SQL tuning, indexing and Redis distributed caching.",
    ],
  },
  {
    company: "Self-Employed",
    role: "Full Stack Developer (Freelance)",
    period: "Nov 2023 — Jul 2024",
    place: "Cairo, Egypt",
    points: [
      "Delivered end-to-end web apps with Next.js and React for SEO-friendly property listing frontends, backed by .NET Core APIs.",
      "Integrated third-party payment, auth and mapping APIs to extend property platform capabilities.",
      "Containerized legacy services with Docker to streamline environments and cloud migration.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Track record</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">Where I've delivered</h2>
        </Reveal>

        <div className="mt-14 space-y-6">
          {roles.map((r, i) => (
            <Reveal key={r.company} delay={i * 100}>
              <article className="rounded-4xl bg-card p-8 shadow-soft sm:p-10">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <h3 className="text-2xl">{r.role}</h3>
                    <p className="mt-1 text-sm text-accent">{r.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {r.period} · {r.place}
                  </p>
                </div>
                <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                  {r.points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
