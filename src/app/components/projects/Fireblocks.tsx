import { Link, useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";
import { Highlight } from "../ui/hero-highlight";
import { useState } from "react";
import { FadeIn } from "../ui/motion-css";

const ACCENT = "#4f46e5";
const ACCENT_HOVER = "#6366f1";

function HighlightedLink({ to, children }: { to: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to={to}
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Highlight className="bg-gradient-to-r from-indigo-200/60 to-purple-200/60 pb-0 px-1 rounded-md">
        <span
          className="transition-colors duration-300"
          style={{ color: hovered ? ACCENT_HOVER : ACCENT }}
        >
          {children}
        </span>
      </Highlight>
    </Link>
  );
}

export function Fireblocks() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-6 md:px-12">
      <div className="max-w-3xl mx-auto py-20 md:py-28">
        {/* Back button */}
        <FadeIn duration={0.6} className="mb-10">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 text-[11px] tracking-[0.25em] uppercase text-neutral-400 hover:text-neutral-700 transition-colors cursor-pointer"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            Back
          </button>
        </FadeIn>

        {/* H1 Headline */}
        <FadeIn
          delay={0.1}
          duration={0.7}
          y={24}
          as="h1"
          className="text-[2em] text-neutral-900 tracking-[-0.025em] mb-2"
          style={{
            fontFamily: "'Inter', sans-serif",
            lineHeight: 1.2,
            fontWeight: 700,
          }}
        >
          Fireblocks (2020–2024)
        </FadeIn>

        <FadeIn delay={0.15} duration={0.7} y={24} className="mb-8">
          <span
            className="text-[11px] tracking-[0.25em] uppercase text-neutral-400"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Senior Product Designer
          </span>
        </FadeIn>

        {/* Intro paragraph */}
        <FadeIn
          delay={0.2}
          duration={0.7}
          y={24}
          className="text-[0.95rem] text-neutral-700 tracking-[-0.01em]"
          style={{
            fontFamily: "'Inter', sans-serif",
            lineHeight: 1.6,
          }}
        ><span>As a Senior Product Designer at Fireblocks, I focused on translating complex blockchain logic into intuitive, institutional-grade experiences. My work spanned across multiple units, where I prioritized consistency, clarity, and a progressive disclosure approach to simplify high-stakes actions.</span><br /><br /><span>Beyond individual features, I acted as a cross-functional contributor to the Fireblocks Design System, crafting reusable components and patterns that scaled across the entire platform. I also took ownership of the UX writing for my projects - shaping the language of tooltips, dialogs, and feature naming to ensure confidence for users ranging from crypto-natives to B2B institutional clients.</span></FadeIn>

        {/* Section: Security & Trust */}
        <FadeIn delay={0.3} duration={0.7} y={24} className="mt-16">
          <h2
            className="text-[1.5em] text-neutral-900 tracking-[-0.025em] mb-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1.3,
              fontWeight: 700,
            }}
          >
            Security & Trust
          </h2>
          <div
            className="text-[0.95rem] text-neutral-700 tracking-[-0.01em]"
            style={{
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1.6,
            }}
          >
            <span className="text-[#171717]">Serving as the sole design lead and focal point for the Security unit, partnering with the VP of Security and Cyber Researchers to design "Defense in Depth" strategies.</span>

            <h3
              className="text-[0.85em] text-neutral-900 tracking-[-0.015em] mt-8 mb-2 text-[15px]"
              style={{
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.4,
                fontWeight: 600,
              }}
            >
              <HighlightedLink to="/work/fireblocks/policy-v2">Policy V2 & Rule Builder</HighlightedLink>
            </h3>
            <span className="text-[#505050] text-[14px]">Led the complete architectural redesign of the core Policy engine, replacing an outdated form with a contextual, "lane-based" builder.</span>

            <h3
              className="text-[0.85em] text-neutral-900 tracking-[-0.015em] mt-8 mb-2 text-[15px]"
              style={{
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.4,
                fontWeight: 600,
              }}
            >
              <HighlightedLink to="/work/fireblocks/transaction-security">Transaction Security</HighlightedLink>
            </h3>
            <span className="text-[#505050] text-[14px]">Designed threat alerts and the Token Allowance Manager, helping users identify and revoke malicious dApp permissions.</span>

            <h3
              className="text-[0.85em] text-neutral-900 tracking-[-0.015em] mt-8 mb-2 text-[15px]"
              style={{
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.4,
                fontWeight: 600,
              }}
            >
              <HighlightedLink to="/work/fireblocks/institutional-access">Institutional Access</HighlightedLink>
            </h3>
            <span className="text-[#505050] text-[14px]">Scaled security-critical features like Multi-factor Authentication and IP Allowlists for global B2B clients.</span>
          </div>
        </FadeIn>

        {/* Divider */}
        <FadeIn delay={0.35} duration={0.7} y={0}>
          <hr className="my-16 border-neutral-200" />
        </FadeIn>

        {/* Section: OnChain & DeFi Ecosystem */}
        <FadeIn delay={0.4} duration={0.7} y={24}>
          <h2
            className="text-[1.5em] text-neutral-900 tracking-[-0.025em] mb-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1.3,
              fontWeight: 700,
            }}
          >
            OnChain & DeFi Ecosystem
          </h2>
          <div
            className="text-[0.95rem] text-neutral-700 tracking-[-0.01em]"
            style={{
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1.6,
            }}
          >
            <span className="text-[#171717]">Enhancing the product experience as DeFi tools scaled from lean, MVP functionality into a robust, institutional-grade ecosystem.</span>

            <h3
              className="text-[0.85em] text-neutral-900 tracking-[-0.015em] mt-8 mb-2 text-[15px]"
              style={{
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.4,
                fontWeight: 600,
              }}
            >
              <HighlightedLink to="/work/fireblocks/lending-earn">Lending & Earn</HighlightedLink>
            </h3>
            <span className="text-[#505050] text-[14px]">Consolidated diverse investment tools into a unified yield-management product tailored for institutional user roles.</span>

            <h3
              className="text-[0.85em] text-neutral-900 tracking-[-0.015em] mt-8 mb-2 text-[15px]"
              style={{
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.4,
                fontWeight: 600,
              }}
            >
              <HighlightedLink to="/work/fireblocks/swap-bridging">Swap & Bridging Integration</HighlightedLink>
            </h3>
            <span className="text-[#505050] text-[14px]">Evolved a lean Swap product by integrating new cross-chain bridging capabilities, unifying DeFi and CeFi providers into a single, coherent comparison and transaction interface.</span>

            <h3
              className="text-[0.85em] text-neutral-900 tracking-[-0.015em] mt-8 mb-2 text-[15px]"
              style={{
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.4,
                fontWeight: 600,
              }}
            >
              <HighlightedLink to="/work/fireblocks/staking">Staking</HighlightedLink>
            </h3>
            <span className="text-[#505050] text-[14px]">Expanded the core flow from a single modal to a 3-step journey; integrated additional assets and providers (including the ETH Pectra upgrade) while revamping provider cards to support comparison and featured partnerships.</span>
          </div>
        </FadeIn>

        {/* Divider */}
        <FadeIn delay={0.5} duration={0.7} y={0}>
          <hr className="my-16 border-neutral-200" />
        </FadeIn>

        {/* Section: Platform Foundations */}
        <FadeIn delay={0.55} duration={0.7} y={24}>
          <h2
            className="text-[1.5em] text-neutral-900 tracking-[-0.025em] mb-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1.3,
              fontWeight: 700,
            }}
          >
            Platform Foundations
          </h2>
          <div
            className="text-[0.95rem] text-neutral-700 tracking-[-0.01em]"
            style={{
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1.6,
            }}
          >
            <span className="text-[#171717]">Establishing core UX patterns during Fireblocks' rapid scale-up, ensuring the console remained intuitive as functionality expanded.</span>

            <h3
              className="text-[0.85em] text-neutral-900 tracking-[-0.015em] mt-8 mb-2 text-[15px]"
              style={{
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.4,
                fontWeight: 600,
              }}
            >
              Workflows & Modals
            </h3>
            <span className="text-[#505050] text-[14px]">Defined the Full-page modal pattern and Console loader, creating a premium, consistent feel across the ecosystem.</span>

            <h3
              className="text-[0.85em] text-neutral-900 tracking-[-0.015em] mt-8 mb-2 text-[15px]"
              style={{
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.4,
                fontWeight: 600,
              }}
            >
              User & Policy Management
            </h3>
            <span className="text-[#505050] text-[14px]">Managed the initial iterations of User Groups and Policy V1, bridging the gap between general platform management and security.</span>
          </div>
        </FadeIn>

        {/* Footer spacer */}
        <div className="h-20" />
      </div>
    </div>
  );
}
