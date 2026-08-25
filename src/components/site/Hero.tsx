import heroEstate from "@/assets/hero-estate.jpg";
import { Reveal } from "./Reveal";

const searchFacets = [
  { label: "Discipline", value: "Full Stack Engineering" },
  { label: "Domain", value: "Real Estate / PropTech" },
  { label: "Stack", value: ".NET 8 · Angular · Next.js" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pt-32 pb-16 sm:pt-40">
      <div className="pointer-events-none absolute -top-24 right-0 size-[32rem] rounded-full bg-sand blur-3xl opacity-60" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Tanta, Egypt · Available worldwide</p>
          <h1 className="mt-5 text-5xl leading-[1.02] sm:text-7xl">
            Engineering the platforms that
            <span className="text-accent"> move real estate</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            I'm Mostafa Samir — a senior full stack engineer with 4+ years building
            property listing portals, multi-tenant brokerage platforms and real-time
            property intelligence on .NET 8 microservices and modern frontends.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#portfolio"
            className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            View the portfolio
          </a>
          <a
            href="#contact"
            className="rounded-full border border-primary/25 px-7 py-3.5 text-sm font-medium transition-colors hover:bg-secondary"
          >
            Start a project
          </a>
        </Reveal>

        <Reveal delay={200} variant="reveal-img" className="mt-14">
          <div className="relative overflow-hidden rounded-2xl shadow-estate sm:rounded-3xl lg:rounded-4xl">
            <img
              src={heroEstate}
              alt="Modern luxury villa at golden hour with reflecting pool"
              width={1536}
              height={1024}
              className="h-[26rem] w-full object-cover sm:h-[34rem]"
            />
            <div className="absolute inset-x-3 bottom-3 grid gap-px overflow-hidden rounded-xl bg-border/60 sm:inset-x-6 sm:bottom-6 sm:grid-cols-3 sm:rounded-2xl">
              {searchFacets.map((f) => (
                <div key={f.label} className="bg-card/92 px-6 py-5 backdrop-blur-md">
                  <p className="eyebrow">{f.label}</p>
                  <p className="mt-1.5 font-display text-xl">{f.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
