import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import { ImageCarousel } from "../../ImageCarousel";
import { FadeIn, useInView } from "../../ui/motion-css";

// Bridging carousel images
import bridgeImg1 from "@/assets/045343299eb773e178afa2c4b0e429e5766302b7.png";
import bridgeImg2 from "@/assets/9140a8c5ff08f8bec1ff51acbad4e63c27c6996d.png";
import bridgeImg3 from "@/assets/ed2a6b51c59930b9aac719b57dd1d7c7cfd62e17.png";
import bridgeImg4 from "@/assets/b62d8fc87e139aae6b866668461b128e1f6d4672.png";
import bridgeImg5 from "@/assets/3437e25df9723ec03e3266bbd9c85015b36e3d36.png";
import bridgeImg6 from "@/assets/034aba27a3e8eac40e2a6da8e3c82648e207da25.png";

const bridgingImages = [bridgeImg1, bridgeImg2, bridgeImg3, bridgeImg4, bridgeImg5, bridgeImg6];

// Swap carousel images
import swapImg1 from "@/assets/07089908db15ae516eb1920b004cdc618efd8007.png";
import swapImg2 from "@/assets/23390c9e05cab1460ace705b32b76977e03ba7e3.png";
import swapImg3 from "@/assets/9e12a37f7c1bda0aef40dda8c624a68295f9b842.png";
import swapImg4 from "@/assets/f3251ca5665e3f070e7855a51d3f7ce9b0b8c3db.png";
import swapImg5 from "@/assets/b8881d2b3d61a6ba31ed8cdb598d4eeaeae86f3a.png";

const swapImages = [swapImg1, swapImg2, swapImg3, swapImg4, swapImg5];

const projectMeta = {
  title: "Swap & Bridging Integration",
  subtitle: "Unifying DeFi and CeFi trading experiences",
  summary:
    "Evolved a lean Swap product by integrating cross-chain bridging capabilities, unifying DeFi and CeFi providers into a single, coherent comparison and transaction interface.",
  role: "Senior Product Designer",
  timeline: "2023 – 2024",
  team: "1 Designer, 4 Engineers, 1 PM",
  tags: ["DeFi", "CeFi", "Cross-chain", "Trading", "Web3"],
};

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

function ScrollHr() {
  const ref = useRef<HTMLHRElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <hr
      ref={ref}
      className="border-neutral-200 origin-left"
      style={{
        transform: inView ? "scaleX(1)" : "scaleX(0)",
        transition: "transform 0.6s ease-out",
      }}
    />
  );
}

export function SwapBridging() {
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
                {projectMeta.title}
              </FadeIn>

              <div>
                <p
                  className="text-lg text-neutral-600 mb-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {projectMeta.subtitle}
                </p>
                <p
                  className="text-sm text-neutral-500"
                  style={{ lineHeight: 1.8 }}
                >
                  {projectMeta.summary}
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs tracking-[0.15em] uppercase text-neutral-400 block mb-1">
                    Role
                  </span>
                  <span className="text-neutral-700">{projectMeta.role}</span>
                </div>
                <div>
                  <span className="text-xs tracking-[0.15em] uppercase text-neutral-400 block mb-1">
                    Timeline
                  </span>
                  <span className="text-neutral-700">
                    {projectMeta.timeline}
                  </span>
                </div>
                <div>
                  <span className="text-xs tracking-[0.15em] uppercase text-neutral-400 block mb-1">
                    Team
                  </span>
                  <span className="text-neutral-700">{projectMeta.team}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {projectMeta.tags.map((tag) => (
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

          {/* Right Column - Two Sections */}
          <FadeIn
            delay={0.3}
            duration={0.5}
            className="w-full md:w-2/3"
          >
            <div className="space-y-16">
              {/* ──────────── BRIDGING SECTION ──────────── */}
              <ScrollSection>
                <ImageCarousel images={bridgingImages} />
                <h2 className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-4">
                  01 / Bridging
                </h2>

                <h3
                  className="text-[clamp(1.25rem,3vw,1.75rem)] text-neutral-900 tracking-tight mb-6"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: 1.3,
                  }}
                >
                  Fireblocks Bridging: Cross-Chain Swap
                </h3>

                <p
                  className="text-neutral-600 mb-8 whitespace-pre-line"
                  style={{
                    lineHeight: 1.8,
                    fontSize: "0.95rem",
                  }}
                >
                  An enterprise-grade expansion of the native Fireblocks Swap
                  product, enabling seamless asset movement across distinct
                  blockchain networks. This solution integrates CeFi providers,
                  DeFi protocols, and Bridge aggregators into a unified
                  interface, allowing institutional users to execute complex
                  cross-chain swaps with the same MPC-security and policy
                  governance used for standard tests.
                </p>

                <h4
                  className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-6"
                >
                  Key Technical & UX Pillars
                </h4>

                <div className="space-y-6">
                  <div>
                    <p
                      className="text-neutral-600 whitespace-pre-line"
                      style={{
                        lineHeight: 1.8,
                        fontSize: "0.95rem",
                      }}
                    >
                      <strong className="text-neutral-800">
                        Integrated CeFi & DeFi Liquidity:
                      </strong>{" "}
                      Expanded the swap engine to support both decentralized
                      protocols (DEXs) and centralized exchange (CeFi)
                      connectivity, allowing users to leverage their connected
                      accounts for cross-chain execution.
                    </p>
                  </div>

                  <div>
                    <p
                      className="text-neutral-600 whitespace-pre-line"
                      style={{
                        lineHeight: 1.8,
                        fontSize: "0.95rem",
                      }}
                    >
                      <strong className="text-neutral-800">
                        Granular Provider Selection & Comparison:
                      </strong>{" "}
                      Developed a sophisticated Route Selection interface that
                      displays real-time comparisons between providers. Users can
                      filter and select based on:
                    </p>
                    <ul className="mt-3 ml-5 space-y-2 list-disc text-neutral-600" style={{ lineHeight: 1.8, fontSize: "0.95rem" }}>
                      <li>
                        <strong className="text-neutral-800">Estimated Output:</strong>{" "}
                        Net amount after fees and slippage.
                      </li>
                      <li>
                        <strong className="text-neutral-800">Transaction Time:</strong>{" "}
                        Estimated bridging duration.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p
                      className="text-neutral-600 whitespace-pre-line"
                      style={{
                        lineHeight: 1.8,
                        fontSize: "0.95rem",
                      }}
                    >
                      <strong className="text-neutral-800">
                        Governance & Compliance Controls:
                      </strong>{" "}
                      Granular toggles to whitelist or exclude specific bridge
                      providers and protocols based on internal risk assessments.
                    </p>
                  </div>

                  <div>
                    <p
                      className="text-neutral-600 whitespace-pre-line"
                      style={{
                        lineHeight: 1.8,
                        fontSize: "0.95rem",
                      }}
                    >
                      <strong className="text-neutral-800">
                        Revamped Asset Selection:
                      </strong>{" "}
                      A context-aware menu designed for the cross-chain use case,
                      displaying asset availability across multiple chains
                      simultaneously to simplify the "Source to Destination"
                      workflow.
                    </p>
                  </div>

                  <div>
                    <p
                      className="text-neutral-600 whitespace-pre-line"
                      style={{
                        lineHeight: 1.8,
                        fontSize: "0.95rem",
                      }}
                    >
                      <strong className="text-neutral-800">
                        Enhanced Swap Settings:
                      </strong>{" "}
                      Introduced granular controls for Slippage Tolerance,
                      Provider pre-selection, ensuring trades align with
                      firm-specific risk parameters.
                    </p>
                  </div>

                  <div>
                    <p
                      className="text-neutral-600 whitespace-pre-line"
                      style={{
                        lineHeight: 1.8,
                        fontSize: "0.95rem",
                      }}
                    >
                      <strong className="text-neutral-800">
                        Transaction Security & Error Handling:
                      </strong>{" "}
                      Integrated robust error-prevention mechanisms, alerts and
                      route failure fallbacks, while maintaining full Policy
                      Engine compatibility for multi-user approvals.
                    </p>
                  </div>
                </div>
              </ScrollSection>

              {/* Divider */}
              <ScrollHr />

              {/* ──────────── SWAP SECTION ──────────── */}
              <ScrollSection>
                <ImageCarousel images={swapImages} />
                <h2 className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-4">
                  02 / Swap
                </h2>

                <h3
                  className="text-[clamp(1.25rem,3vw,1.75rem)] text-neutral-900 tracking-tight mb-6"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: 1.3,
                  }}
                >
                  Fireblocks Swap: Institutional-Grade Execution
                </h3>

                <p
                  className="text-neutral-600 mb-8 whitespace-pre-line"
                  style={{
                    lineHeight: 1.8,
                    fontSize: "0.95rem",
                  }}
                >
                  Drawing on my background with the Fireblocks Security unit and
                  a deep understanding of the platform's core
                  architecture - specifically user roles and multi-stage approval
                  flows - I designed the Swap integration to bridge the gap between
                  DeFi agility and enterprise governance. The goal was to ensure
                  that high-velocity trading remains tethered to institutional
                  safety by aligning with the system's existing security layers.
                </p>

                <h4
                  className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-6"
                >
                  Core Focus Areas
                </h4>

                <div className="space-y-6">
                  <div>
                    <p
                      className="text-neutral-600 whitespace-pre-line"
                      style={{
                        lineHeight: 1.8,
                        fontSize: "0.95rem",
                      }}
                    >
                      <strong className="text-neutral-800">
                        Adaptive Workspace Architecture:
                      </strong>{" "}
                      I developed a responsive solution designed to scale across
                      varying screen sizes. By transforming the interface into a
                      dynamic side-panel system, I turned the swap modal into a
                      flexible component that can function as a standalone
                      floating workspace anywhere within the platform.
                    </p>
                  </div>

                  <div>
                    <p
                      className="text-neutral-600 whitespace-pre-line"
                      style={{
                        lineHeight: 1.8,
                        fontSize: "0.95rem",
                      }}
                    >
                      <strong className="text-neutral-800">
                        Granular Policy Guardrails:
                      </strong>{" "}
                      Utilizing my expertise in Fireblocks' internal policy
                      logic, I designed a role-based alert system. This
                      proactively identifies missing configurations - such as
                      Approve, Typed Message, or Contract Call rules - ensuring
                      that transactions comply with organizational security
                      protocols before they are initiated.
                    </p>
                  </div>

                  <div>
                    <p
                      className="text-neutral-600 whitespace-pre-line"
                      style={{
                        lineHeight: 1.8,
                        fontSize: "0.95rem",
                      }}
                    >
                      <strong className="text-neutral-800">
                        Execution Transparency:
                      </strong>{" "}
                      To mitigate the risks of decentralized liquidity, I
                      integrated real-time data visualizations for Price Impact
                      and Slippage. These tools provide immediate clarity on how
                      a trade affects market price, protecting the firm from
                      substantial fund loss due to illiquidity.
                    </p>
                  </div>

                  <div>
                    <p
                      className="text-neutral-600 whitespace-pre-line"
                      style={{
                        lineHeight: 1.8,
                        fontSize: "0.95rem",
                      }}
                    >
                      <strong className="text-neutral-800">
                        System Alignment:
                      </strong>{" "}
                      Ensured the swap experience seamlessly integrated with
                      established platform patterns, such as the Mobile Approval
                      Flow and Route Visualization, providing a consistent
                      mental model for users moving between different Fireblocks
                      products.
                    </p>
                  </div>
                </div>
              </ScrollSection>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
