import { useState } from "react";
import listingsImg from "@/assets/project-listings.jpg";
import iotImg from "@/assets/project-iot.jpg";
import crmImg from "@/assets/project-crm.jpg";
import pwaImg from "@/assets/project-pwa.jpg";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  category: "Listings & Search" | "Brokerage Operations" | "Buyer Experience";
  image: string;
  summary: string;
  specs: { label: string; value: string }[];
  stack: string[];
};

const projects: Project[] = [
  {
    title: "MLS-Grade Property Listing Engine",
    category: "Listings & Search",
    image: listingsImg,
    summary:
      "Property listing and search backend on .NET 8 microservices — MLS-style feed ingestion, geo and faceted search, viewing requests, offers, agent commissions and escrow-ready closing payments, built with Repository Pattern and Unit of Work.",
    specs: [
      { label: "Services", value: "9 bounded contexts" },
      { label: "Search", value: "Geo + faceted, Redis-cached" },
      { label: "Uptime", value: "Zero-downtime deploys" },
    ],
    stack: [".NET 8", "DDD", "PostgreSQL", "Redis", "gRPC"],
  },
  {
    title: "Real-Time Property & IoT Dashboard",
    category: "Brokerage Operations",
    image: iotImg,
    summary:
      "Full-stack operations dashboard tracking building sensors, site logistics and unit handover status live across 1,000+ endpoints with SignalR streaming and telemetry rollups.",
    specs: [
      { label: "Endpoints", value: "1,000+ live" },
      { label: "Latency", value: "Sub-second push" },
      { label: "Frontend", value: "Angular + charts" },
    ],
    stack: ["Angular", "SignalR", "SQL Server", "Docker"],
  },
  {
    title: "Multi-Tenant Brokerage CRM/ERP Sync",
    category: "Brokerage Operations",
    image: crmImg,
    summary:
      "Synchronization layer between brokerage CRM leads and back-office ERP: tenant-isolated pipelines, hierarchical RBAC per branch and consistent large-scale data transfer.",
    specs: [
      { label: "Tenancy", value: "Isolated per brokerage" },
      { label: "Access", value: "Hierarchical RBAC" },
      { label: "Volume", value: "Bulk-consistent sync" },
    ],
    stack: ["ASP.NET Core", "EF Core", "Azure DevOps", "OAuth 2.0"],
  },
  {
    title: "Listings PWA & Web Vitals",
    category: "Buyer Experience",
    image: pwaImg,
    summary:
      "SEO-first property browsing experience in Next.js: server-rendered listing pages, image pipelines, saved-search PWA offline mode and near-perfect Core Web Vitals.",
    specs: [
      { label: "Rendering", value: "SSR + ISR" },
      { label: "Mobile", value: "Installable PWA" },
      { label: "SEO", value: "Structured listings" },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
];

const filters = [
  "All",
  "Listings & Search",
  "Brokerage Operations",
  "Buyer Experience",
] as const;

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow">The portfolio</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              Featured builds, listed like properties
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-sm transition-all duration-300",
                  active === f
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:bg-secondary",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {visible.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="group h-full overflow-hidden rounded-4xl bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-estate">
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-card/90 px-4 py-1.5 text-xs tracking-[0.14em] uppercase backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="text-2xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.summary}
                  </p>
                  <dl className="mt-6 grid grid-cols-3 gap-4 border-y border-border py-5">
                    {p.specs.map((s) => (
                      <div key={s.label}>
                        <dt className="eyebrow">{s.label}</dt>
                        <dd className="mt-1 text-sm">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <li
                        key={t}
                        className="rounded-full bg-secondary px-3.5 py-1.5 text-xs text-secondary-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
