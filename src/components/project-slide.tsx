import { AnimatedWords, Tilt } from "@/components/motion-text";
import { Reveal } from "@/components/reveal";
import type { Project } from "@/data/projects";

export function ProjectSlide({ project }: { project: Project }) {
  const imageFirst = project.layout === "image-left";

  return (
    <Tilt max={4}>
      <article className="slide-card card-hover dot-grid group overflow-hidden px-5 py-6 hover:shadow-[0_32px_70px_-30px_oklch(0.28_0.05_265_/_0.4)] sm:px-8 sm:py-9">
        <div
          className={`grid items-center gap-7 lg:grid-cols-[1.35fr_0.65fr] ${imageFirst ? "" : "lg:[&>*:first-child]:order-2"}`}
        >
          <Reveal variant={imageFirst ? "left" : "right"} delay={60}>
            <div className="media-zoom rounded-[1.5rem] bg-secondary">
              <img
                src={project.image}
                alt={project.imageAlt}
                width={1400}
                height={900}
                loading="lazy"
                className="sd-grow h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="lg:py-2">
            <Reveal variant="up">
              <div className="flex items-center gap-3">
                <span className="sticker-in font-display text-sm font-extrabold text-brand-orange">
                  {project.index}
                </span>
                <span className="h-px flex-1 origin-left scale-x-0 bg-border transition-transform duration-700 group-hover:scale-x-100" />
                <span className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  {project.year}
                </span>
              </div>
            </Reveal>

            {project.quote && (
              <AnimatedWords
                as="p"
                text={project.quote}
                className="mt-5 block font-display text-3xl font-extrabold sm:text-4xl"
                stagger={45}
              />
            )}

            <AnimatedWords
              as="h3"
              text={project.title}
              className={`block font-display text-2xl leading-tight font-extrabold sm:text-[1.7rem] ${
                project.quote ? "mt-3 text-lg text-muted-foreground sm:text-xl" : "mt-5"
              }`}
              stagger={40}
            />

            <Reveal variant="up" delay={80}>
              <p className="mt-1 text-sm font-semibold tracking-wide text-brand-teal uppercase">
                {project.subtitle}
              </p>

              <dl className="mt-7 space-y-1 text-sm">
                <div className="flex gap-2">
                  <dt className="text-muted-foreground">Client:</dt>
                  <dd className="font-bold">{project.client}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="text-muted-foreground">Role:</dt>
                  <dd className="font-bold text-brand-orange">{project.role}</dd>
                </div>
              </dl>

              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </Reveal>

            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <li
                  key={tag}
                  className="tag-pop sticker-in rounded-full bg-secondary px-2.5 py-1 text-[0.68rem] font-semibold tracking-wide uppercase hover:bg-brand-yellow/50"
                  style={{ animationDelay: `${140 + i * 55}ms` }}
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.palette.map((color, i) => (
                <span
                  key={color}
                  title={color}
                  className="sticker-in size-7 rounded-full ring-1 ring-black/5 transition-transform duration-300 hover:scale-125 hover:rotate-12"
                  style={{ backgroundColor: color, animationDelay: `${200 + i * 70}ms` }}
                />
              ))}
            </div>
          </div>
        </div>

        {project.paletteNote && (
          <Reveal variant="blur" delay={60}>
            <div className="mt-7">
              <div className="flex h-9 overflow-hidden rounded-lg">
                {project.palette.map((color) => (
                  <span
                    key={`bar-${color}`}
                    className="flex-1 transition-[flex-grow] duration-500 hover:grow-[2]"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                {project.paletteNote}
              </p>
            </div>
          </Reveal>
        )}
      </article>
    </Tilt>
  );
}
