import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Projects } from "@/components/site/Projects";
import { Expertise } from "@/components/site/Expertise";
import { Experience } from "@/components/site/Experience";
import { About } from "@/components/site/About";
import { Contact, Footer } from "@/components/site/Contact";

const title = "Mostafa Samir — Full Stack Engineer for Real Estate Platforms";
const description =
  "Senior full stack engineer building property listing portals, multi-tenant brokerage systems and real-time property dashboards with .NET 8, Angular and Next.js.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <Projects />
      <Expertise />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
