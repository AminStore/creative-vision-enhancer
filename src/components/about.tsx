const timeline = [
  {
    period: "Jul 2024 — Present",
    role: "Senior Software Developer",
    place: "WE3DS COMPANY · Tanta, Egypt",
    note: "Architected .NET 8 clinical microservices for EHR and telehealth products. Led multi-facility data isolation work, built SignalR backends streaming vitals from 1,000+ patient monitoring devices, and cut chart query times by 300%.",
  },
  {
    period: "Nov 2023 — Jul 2024",
    role: "Full Stack Developer (Freelance)",
    place: "Self-Employed · Cairo, Egypt",
    note: "Delivered patient portals and clinic management apps with Next.js, React, and .NET Core. Integrated HL7 v2 feeds, FHIR APIs, lab results, and appointment scheduling. Containerized legacy hospital services with Docker.",
  },
];

const capabilities = [
  ".NET 8 / Core",
  "ASP.NET Web API",
  "Microservices",
  "Clean Architecture",
  "HL7 FHIR R4",
  "HL7 v2 / Interop",
  "SignalR / WebRTC",
  "HIPAA & GDPR",
  "Angular",
  "React / Next.js",
  "TypeScript",
  "SQL Server",
  "PostgreSQL",
  "Redis",
  "Azure DevOps",
  "Docker / Kubernetes",
];

export function About() {
  return (
    <section id="about" className="px-4 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="slide-card px-6 py-9 sm:px-10">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand-orange uppercase">
            About me
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold sm:text-4xl">
            Engineering healthcare software patients and clinicians can trust.
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              I&apos;m Mostafa Samir, a Full-Stack Engineer with 4+ years focused on healthcare
              technology — electronic health records, clinical workflows, and interoperability. I
              build with .NET 8, ASP.NET Core Web API, Angular, React, and Next.js.
            </p>
            <p>
              My work spans EHR platforms, HL7/FHIR integration layers, telehealth and remote
              patient monitoring, and patient-facing portals. Everything is built around PHI
              security, auditability, and clinical safety — with measurable gains such as a 300%
              improvement in chart-loading performance.
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {capabilities.map((cap) => (
              <li
                key={cap}
                className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-semibold tracking-wide uppercase"
              >
                {cap}
              </li>
            ))}
          </ul>
        </div>

        <div className="slide-card px-6 py-9 sm:px-10">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand-orange uppercase">
            Experience
          </p>
          <ol className="mt-6 space-y-6">
            {timeline.map((item, i) => (
              <li key={item.role} className="relative pl-8">
                <span className="absolute top-1.5 left-0 grid size-5 place-items-center rounded-full border-2 border-primary bg-card">
                  <span className="size-1.5 rounded-full bg-brand-orange" />
                </span>
                {i < timeline.length - 1 && (
                  <span className="absolute top-8 left-[9px] h-[calc(100%+0.75rem)] w-0.5 bg-border" />
                )}
                <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  {item.period}
                </p>
                <h3 className="mt-1.5 font-display text-lg font-bold">{item.role}</h3>
                <p className="text-sm font-medium text-brand-teal">{item.place}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
