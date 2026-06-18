/**
 * CaseStudyPage — template for deep-dive, single-problem case studies.
 *
 * Structure:
 *   Hero → Overview image → Stats → Challenge (text + image) →
 *   Solution (text + image) → Pillars → Closing
 *
 * Example usage: Policy V2 & Rule Builder
 */

import { useRef } from "react";
import type { CSSProperties } from "react";
import { useLightbox } from "./Lightbox";
import { useInView } from "./ui/motion-css";
import { useProjectNav } from "./ProjectNav";
import securityLogo from "./logos/Security.svg";

export interface CaseStudyData {
  company: string;
  category: string;
  title: string;
  subtitle: string;
  overviewImage: string;
  statsIntro?: string;
  stats: Array<{ category: string; result: string }>;
  challengeText: string[];
  challengeImage: string;
  solutionText: string;
  solutionImage: string;
  pillarsIntro: string;
  pillars: Array<{ name: string; description: string }>;
  closingText?: string;
}

function FadeInSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.55s ease-out, transform 0.55s ease-out",
      }}
    >
      {children}
    </div>
  );
}

const CARD_STYLE: CSSProperties = {
  background: "white",
  border: "1.3px solid #e6e9ec",
  borderRadius: 10,
  boxShadow: "0 0 10px rgba(39,124,216,0.08)",
  padding: 30,
  display: "flex",
  flexDirection: "column",
  gap: 24,
  flex: 1,
  minWidth: 220,
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 16,
        color: "#616161",
        margin: "0 0 8px 0",
        lineHeight: "normal",
      }}
    >
      {children}
    </p>
  );
}

export function CaseStudyPage({ project }: { project: CaseStudyData }) {
  const { open } = useLightbox();
  const { prev, next } = useProjectNav();

  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div style={{ background: "#1B72E8", overflow: "hidden" }}>
        <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-10 lg:px-[256px] pt-16 sm:pt-20 md:pt-24 pb-0">
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16, color: "rgba(255,255,255,0.7)", fontFamily: "'Inter', sans-serif" }}>
            <img src={securityLogo} alt="Security" width={24} height={24} />
            <span style={{ fontSize: 10 }}>{project.company}</span>
            <span style={{ fontSize: 12 }}>•</span>
            <span style={{ fontSize: 10 }}>{project.category}</span>
          </div>
          <div style={{ maxWidth: 1024 }}>
            <h1 style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, lineHeight: 1.2, color: "white", margin: "0 0 16px 0", letterSpacing: "0.1px", whiteSpace: "pre-line" }}>
              {project.title}
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.95rem, 1.5vw, 1.25rem)", fontWeight: 400, lineHeight: 1.35, color: "white", margin: "0 0 48px 0", maxWidth: 652, letterSpacing: "0.1px" }}>
              {project.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* ── Overview image ───────────────────────────────────────────── */}
      <div style={{ background: "linear-gradient(to bottom, #1B72E8 50%, #fff 50%)" }}>
        <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 md:px-[72px]">
          <img src={project.overviewImage} alt="Product overview" style={{ width: "100%", display: "block", boxShadow: "0 8px 40px rgba(0,0,0,0.12)", borderRadius: 16, cursor: "zoom-in" }} onClick={() => open([project.overviewImage])} />
        </div>
      </div>

      {/* ── Content ──────────────────────────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 md:px-[72px]">

        {project.statsIntro && (
          <FadeInSection>
            <p className="pt-16 md:pt-32 md:px-[184px]" style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1rem, 1.3vw, 1.25rem)", fontWeight: 500, lineHeight: 1.35, color: "#010101", letterSpacing: "0.1px", margin: 0 }}>
              {project.statsIntro}
            </p>
          </FadeInSection>
        )}

        <FadeInSection>
          <div className="pt-16 md:pt-32">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
              {project.stats.map((stat, i) => (
                <div key={i} style={CARD_STYLE}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#616161", margin: 0 }}>{stat.category}</p>
                  <hr style={{ border: "none", borderTop: "1px solid #e6e9ec", margin: 0 }} />
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 20, fontWeight: 700, lineHeight: 1.35, color: "#212121", margin: 0 }}>{stat.result}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="pt-16 md:pt-32 md:px-[184px]">
            <SectionLabel>The challenge</SectionLabel>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1rem, 1.3vw, 1.25rem)", fontWeight: 500, lineHeight: 1.35, color: "#010101", letterSpacing: "0.1px" }}>
              {project.challengeText.map((para, i) => (
                <p key={i} style={{ margin: i === 0 ? 0 : "1em 0 0 0" }}>{para}</p>
              ))}
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="pt-16 md:pt-32">
            <img src={project.challengeImage} alt="Challenge" style={{ width: "100%", display: "block", boxShadow: "0 8px 40px rgba(0,0,0,0.12)", borderRadius: 16, cursor: "zoom-in" }} onClick={() => open([project.challengeImage])} />
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="pt-16 md:pt-32 md:px-[184px]">
            <SectionLabel>The Solution</SectionLabel>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1rem, 1.3vw, 1.25rem)", fontWeight: 500, lineHeight: 1.35, color: "#010101", letterSpacing: "0.1px", margin: 0 }}>
              {project.solutionText}
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="pt-16 md:pt-32">
            <img src={project.solutionImage} alt="Solution" style={{ width: "100%", display: "block", boxShadow: "0 8px 40px rgba(0,0,0,0.12)", borderRadius: 16, cursor: "zoom-in" }} onClick={() => open([project.solutionImage])} />
          </div>
        </FadeInSection>

        <FadeInSection>
          <p className="pt-16 md:pt-32 md:px-[184px]" style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1rem, 1.3vw, 1.25rem)", fontWeight: 500, lineHeight: 1.35, color: "#010101", letterSpacing: "0.1px", margin: 0 }}>
            {project.pillarsIntro}
          </p>
        </FadeInSection>

        <FadeInSection>
          <div className="pt-16 md:pt-32">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
              {project.pillars.map((pillar, i) => (
                <div key={i} style={CARD_STYLE}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#616161", margin: 0 }}>{pillar.name}</p>
                  <hr style={{ border: "none", borderTop: "1px solid #e6e9ec", margin: 0 }} />
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 20, fontWeight: 700, lineHeight: 1.35, color: "#212121", margin: 0 }}>{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {project.closingText && (
          <FadeInSection>
            <p className="pt-16 md:pt-32 pb-16 md:pb-32 md:px-[184px]" style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1rem, 1.3vw, 1.25rem)", fontWeight: 500, lineHeight: 1.35, color: "#010101", letterSpacing: "0.1px", margin: 0 }}>
              {project.closingText}
            </p>
          </FadeInSection>
        )}

      </div>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <div style={{ background: "linear-gradient(135deg, #374151 0%, #1f2937 100%)" }}>
        <div className="max-w-[1440px] mx-auto box-border px-6 md:px-[72px] py-16 md:py-32 flex flex-col sm:flex-row items-center justify-between gap-10">
          {prev ? (
            <a href={prev.path} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textDecoration: "none", flexShrink: 0 }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>Previous project</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.8)" }}>{prev.label}</span>
            </a>
          ) : <span className="hidden sm:block" />}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, textAlign: "center" }}>
            <span style={{ fontSize: 28, lineHeight: 1 }}>✨</span>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, fontWeight: 600, color: "white", margin: 0, whiteSpace: "nowrap" }}>Thank you for making it this far!</p>
          </div>
          {next ? (
            <a href={next.path} style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", textDecoration: "none", flexShrink: 0 }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>Next project</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.8)" }}>{next.label}</span>
            </a>
          ) : <span className="hidden sm:block" />}
        </div>
      </div>

    </div>
  );
}
