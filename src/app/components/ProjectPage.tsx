import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ImageCarousel } from "./ImageCarousel";
import { useLightbox } from "./Lightbox";
import { FadeIn, useInView } from "./ui/motion-css";
import { ProjectNav } from "./ProjectNav";

interface ProjectData {
  title: string;
  subtitle: string;
  summary: string;
  role: string;
  timeline: string;
  team: string;
  tags: string[];
  heroImage?: string;
  sections: {
    heading: string;
    text: string;
    image?: string;
    images?: string[];
    tag?: string;
  }[];
}

function ScrollSection({
  section,
  index,
}: {
  section: ProjectData["sections"][0];
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { open } = useLightbox();

  return (
    <section
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s ease-out 0.1s, transform 0.5s ease-out 0.1s",
      }}
    >
      {section.tag && (
        <span className="inline-block px-3 py-1 mb-3 text-xs tracking-wide rounded-full bg-black/10 text-black/60 backdrop-blur-sm">
          {section.tag}
        </span>
      )}
      {section.image && (
        <div className="rounded-lg overflow-hidden bg-neutral-100 mb-8 cursor-pointer" onClick={() => open([section.image!])}>
          
        </div>
      )}
      {section.images && section.images.length > 0 && (
        <ImageCarousel images={section.images} />
      )}
      <h2 className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-4">
        {String(index + 1).padStart(2, "0")} /{" "}
        {section.heading}
      </h2>
      {section.text.includes("• ") ? (
        <ul
          className="text-neutral-600 mb-8 space-y-3"
          style={{
            lineHeight: 1.8,
            fontSize: "0.95rem",
          }}
        >
          {section.text
            .split("\n")
            .filter((line) => line.trim())
            .map((line, idx) => (
              <li key={idx} className="flex items-start">
                <span className="mr-3 mt-1 text-neutral-400">•</span>
                <span>{line.replace(/^•\s*/, "")}</span>
              </li>
            ))}
        </ul>
      ) : (
        <p
          className="text-neutral-600 mb-8 whitespace-pre-line"
          style={{
            lineHeight: 1.8,
            fontSize: "0.95rem",
          }}
        >
          {section.text}
        </p>
      )}
    </section>
  );
}

export function ProjectPage({
  project,
}: {
  project: ProjectData;
}) {
  return (
    <div className="min-h-screen">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          {/* Left Column - Sticky Info */}
          <FadeIn
            delay={0.2}
            duration={0.5}
            x={-20}
            y={0}
            className="w-full md:w-1/3 shrink-0"
            as="aside"
          >
            <div className="md:sticky md:top-24 space-y-8">
              <FadeIn
                delay={0.1}
                duration={0.6}
                y={16}
                as="h1"
                className="text-[clamp(2rem,5vw,3.5rem)] text-neutral-900 tracking-tight"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: 1.2,
                }}
              >
                {project.title}
              </FadeIn>

              <div>
                <p
                  className="text-lg text-neutral-600 mb-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {project.subtitle}
                </p>
                <p
                  className="text-sm text-neutral-500"
                  style={{ lineHeight: 1.8 }}
                >
                  {project.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs tracking-wide text-neutral-500 border border-neutral-200 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right Column - Case Study */}
          <FadeIn
            delay={0.3}
            duration={0.5}
            className="w-full md:w-2/3"
          >
            <div className="space-y-16">
              {project.sections.map((section, i) => (
                <ScrollSection
                  key={section.heading}
                  section={section}
                  index={i}
                />
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Project navigation */}
        <ProjectNav />
      </div>
    </div>
  );
}
