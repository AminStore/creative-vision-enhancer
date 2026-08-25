import { Reveal } from "./Reveal";

const pillars = [
  {
    title: "Listing & search platforms",
    body: "Faceted property search, geo filters, media pipelines and availability logic that stay fast as inventory grows.",
    items: [".NET 8 / ASP.NET Core Web API", "Microservices & Clean Architecture", "Redis caching, SQL tuning"],
  },
  {
    title: "Brokerage operations",
    body: "Multi-tenant CRM, agent hierarchies, commission rules and ERP sync with strict data isolation.",
    items: ["Multi-tenancy & RBAC", "DDD, EF Core, LINQ", "CRM/ERP integration layers"],
  },
  {
    title: "Live property intelligence",
    body: "Real-time dashboards for smart buildings, site logistics and lead activity via SignalR and gRPC.",
    items: ["SignalR realtime", "IoT telemetry ingestion", "Angular data visualisation"],
  },
  {
    title: "Home-buyer experiences",
    body: "SEO-first Next.js listing sites and PWAs engineered around web vitals and mobile conversion.",
    items: ["Next.js / React / Redux", "TypeScript & Tailwind CSS", "Playwright & Cypress coverage"],
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="bg-primary px-4 py-24 text-primary-foreground">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="eyebrow !text-primary-foreground/60">What I build</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            Four pillars of real estate software
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-primary-foreground/15 md:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="h-full bg-primary p-9 transition-colors duration-500 hover:bg-primary-foreground/5">
                <p className="font-display text-3xl text-accent">
                  0{i + 1}
                </p>
                <h3 className="mt-4 text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                  {p.body}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-primary-foreground/85">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
