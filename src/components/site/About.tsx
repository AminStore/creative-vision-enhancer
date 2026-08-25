import aboutDetail from "@/assets/about-detail.jpg";
import { Reveal } from "./Reveal";

const credentials = [
  { label: "B.Sc. Computer Science", value: "Higher Technological Institute (HTI), 2021" },
  { label: "Certification", value: "Microsoft Certified: Azure Fundamentals (AZ-900)" },
  { label: "Languages", value: "English (professional) · Arabic (native)" },
];

export function About() {
  return (
    <section id="about" className="px-4 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.85fr_1fr]">
        <Reveal variant="reveal-img">
          <img
            src={aboutDetail}
            alt="Curved warm plaster architectural detail"
            loading="lazy"
            width={896}
            height={1152}
            className="h-[30rem] w-full rounded-4xl object-cover shadow-estate lg:h-[36rem]"
          />
        </Reveal>

        <Reveal delay={100}>
          <p className="eyebrow">About</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            A builder's mindset, applied to property technology
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Real estate software fails in the details: stale listings, brokers who
            can't see each other's data, dashboards that lag behind the site. I design
            systems around those failure points — bounded services, clean domain models
            and caching strategies that keep search instant even as inventory scales.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Over 4+ years I've moved teams from monoliths to .NET 8 microservices, made
            platforms multi-tenant without leaking a row, and shipped home-buyer-facing
            frontends that rank and convert.
          </p>

          <dl className="mt-10 space-y-5 border-t border-border pt-8">
            {credentials.map((c) => (
              <div key={c.label} className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
                <dt className="eyebrow w-48">{c.label}</dt>
                <dd className="text-sm">{c.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
