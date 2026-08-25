import { Reveal } from "./Reveal";

const stats = [
  { value: "4+", label: "Years shipping real-estate platforms" },
  { value: "300%", label: "Query throughput gained on listing search" },
  { value: "1,000+", label: "IoT endpoints streamed in real time" },
  { value: "Multi-tenant", label: "Brokerage-grade data isolation & RBAC" },
];

const marquee = [
  ".NET 8",
  "Microservices",
  "Clean Architecture",
  "SignalR",
  "Angular",
  "Next.js",
  "PostgreSQL",
  "Redis",
  "Azure DevOps",
  "Kubernetes",
  "DDD",
  "gRPC",
];

export function Stats() {
  return (
    <section className="px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <Reveal className="grid gap-px overflow-hidden rounded-3xl bg-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-card px-7 py-9">
              <p className="font-display text-4xl text-primary">{s.value}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </Reveal>
      </div>

      <div className="mt-14 overflow-hidden border-y border-border py-5">
        <div className="marquee-track flex w-max gap-10 pr-10">
          {[...marquee, ...marquee].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="text-sm tracking-[0.18em] uppercase text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
