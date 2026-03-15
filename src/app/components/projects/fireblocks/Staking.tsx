import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import { useLightbox } from "../../Lightbox";
import { ImageCarousel } from "../../ImageCarousel";
import { FadeIn, useInView } from "../../ui/motion-css";

import img1 from "@/assets/8b95f483e6117c3f445bb3819bb9835203d378f2.png";
import img2 from "@/assets/8ed0b3dac5bb9079bce7f5786c4cecb82b028fe1.png";
import img3 from "@/assets/fe908259f249b64f8727fe17da5667edfeda9674.png";
import img4 from "@/assets/9ad7de81ae64c1c5d5fad2fc3a2c951e727120ac.png";
import img5 from "@/assets/5999156f39b1a8f5940c0865251279951d62337d.png";
import img6 from "@/assets/b4c8bfea6d2d31643332a0d4acf0f15334eff5e4.png";
import img7 from "@/assets/81110483671b33d5b6942dfeba40f4bff6d7e821.png";
import img8 from "@/assets/592c244ba79bd4c8f45655b956757efe18c246dd.png";

const stakingImages = [img1, img2, img3, img4, img5, img6, img7, img8];

const project = {
  title: "Staking",
  subtitle: "From single modal to institutional staking platform",
  summary:
    "Expanded the staking experience from a single modal to a multi-step journey, integrating additional assets and providers while revamping provider cards to support comparison and featured partnerships.",
  role: "Senior Product Designer",
  timeline: "2022 – 2024",
  team: "1 Designer, 5 Engineers, 1 PM",
  tags: ["DeFi", "Staking", "Crypto", "Institutional", "Web3"],
};

const sections = [
  {
    heading: "The Transformation",
    text: "From MVP to Multi-Chain Ecosystem\n\nAsset Expansion: Shifted from a limited SOL/ETH legacy interface to a broad multi-chain offering including MATIC, ATOM, OSMO, AXL, and more.\n\nProtocol Diversity: Integrated support for both traditional Native Staking (Compounding and Legacy) and Liquid Staking (e.g., Lido), allowing users to choose between liquidity and direct chain participation.",
  },
  {
    heading: "The Standardized 3-Step Wizard",
    text: "Replaced the cluttered legacy modal with a streamlined, high-confidence staking flow:\n\nStep 1: Configuration - Select validator type (Legacy vs. Compounding), source vault, and amount with real-time fee estimation (GEWI).\n\nStep 2: Provider Marketplace - A transparent comparison layer for selecting providers (Kiln, Figment, etc.) based on APY, Validator fees, and MEV fees.\n\nStep 3: Policy-Guided Review - A final verification step that cross-references transaction rules against the workspace's security policy, preventing blocked transactions before they are sent.",
  },
  {
    heading: "Enriched Data & Responsive Support",
    text: "Institutional Intelligence: Beyond simple balances, the UI now surfaces deep protocol data such as activation periods (1 day to several weeks) and lock-up durations.\n\nContextual Guardrails: Integrated a \"Policy Setup\" modal to proactively guide users through complex requirements (e.g., MATIC's specific approval rules), reducing support overhead by making the interface self-healing.",
  },
  {
    heading: "Integration into the Earn Center",
    text: "Unified Vision: This evolution serves as a foundational pillar of the new Earn Center, merging Lending & Staking into a single destination.\n\nAsset Utility: Positions staking not just as a technical function, but as a strategic yield-generating tool alongside lending, managed via a consistent institutional UX.",
  },
];

function ScrollSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s ease-out 0.1s, transform 0.5s ease-out 0.1s",
      }}
    >
      {children}
    </section>
  );
}

export function Staking() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (window.localStorage.getItem("fireblocks_access") !== "granted") {
      navigate("/work/fireblocks", { state: { from: location.pathname } });
    }
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen">
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

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs tracking-[0.15em] uppercase text-neutral-400 block mb-1">
                    Role
                  </span>
                  <span className="text-neutral-700">{project.role}</span>
                </div>
                <div>
                  <span className="text-xs tracking-[0.15em] uppercase text-neutral-400 block mb-1">
                    Timeline
                  </span>
                  <span className="text-neutral-700">{project.timeline}</span>
                </div>
                <div>
                  <span className="text-xs tracking-[0.15em] uppercase text-neutral-400 block mb-1">
                    Team
                  </span>
                  <span className="text-neutral-700">{project.team}</span>
                </div>
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

          {/* Right Column */}
          <FadeIn
            delay={0.3}
            duration={0.5}
            className="w-full md:w-2/3"
          >
            <div className="space-y-16">
              {/* Staking Evolution - H3 title */}
              <ScrollSection>
                <ImageCarousel images={stakingImages} />
                <h3
                  className="text-[clamp(1.25rem,3vw,1.75rem)] text-neutral-900 tracking-tight mb-6"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: 1.3,
                  }}
                >
                  Staking Evolution
                </h3>
                <p
                  className="text-neutral-600 mb-8 whitespace-pre-line"
                  style={{
                    lineHeight: 1.8,
                    fontSize: "0.95rem",
                  }}
                >
                  This project documents the transformation of a rigid,
                  "MVP-style" staking tool into a sophisticated, multi-chain
                  institutional product. The evolution focuses on moving away
                  from a single-asset legacy modal toward a scalable, data-rich
                  ecosystem integrated into a centralized Earn Center.
                </p>
              </ScrollSection>

              {/* Numbered sections */}
              {sections.map((section, i) => (
                <ScrollSection key={section.heading}>
                  <h2 className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-4">
                    {String(i + 1).padStart(2, "0")} / {section.heading}
                  </h2>
                  <p
                    className="text-neutral-600 mb-8 whitespace-pre-line"
                    style={{
                      lineHeight: 1.8,
                      fontSize: "0.95rem",
                    }}
                  >
                    {section.text}
                  </p>
                </ScrollSection>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
