import { Link } from "react-router";
import { ArrowDown } from "lucide-react";
import { useState, useId, type CSSProperties } from "react";
import { Highlight } from "./ui/hero-highlight";
import { SparklesText } from "./ui/sparkles-text";
import { FadeIn } from "./ui/motion-css";

// Logos
import logoSecurity from "@/app/components/logos/Security.svg";
import logoWeb3 from "@/app/components/logos/web3.svg";
import logoFireblocks from "@/app/components/logos/fireblocks.svg";
import logoChegg from "@/app/components/logos/chegg.svg";

// Thumbnails
import thumbPolicyV2 from "@/assets/Thumbnail - Policy v2 & Rule Builder.png";
import thumbInstitutional from "@/assets/Thumbnail - Institutional Access.png";
import thumbTxSecurity from "@/assets/Thumbnail - Transaction Security.png";
import thumbLendingEarn from "@/assets/Thumbnail - Lending & Earn.png";
import thumbSwapBridge from "@/assets/Thumbnail - Swap & Bridge.png";
import thumbStaking from "@/assets/Thumbnail - Staking.png";
import thumbUnitLogos from "@/assets/Thumbnail - Fireblocks Unit logos.png";
import thumbChegg from "@/assets/Thumbnail - Chegg Prep mobile app.png";
import thumbBee from "@/assets/Thumbnail - Bee Creations.png";

const ACCENT = "#4f46e5";
const ACCENT_HOVER = "#6366f1";

// ─── Wavy underline (unchanged) ────────────────────────────────────────────

function WavyUnderline({ hovered }: { hovered: boolean }) {
  const maskId = useId();

  return (
    <span className="absolute left-0 right-0 bottom-[-2px] h-[6px] overflow-hidden">
      <svg
        className="absolute left-0 top-0"
        width="200%"
        height="6"
        viewBox="0 0 200 6"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id={maskId}>
            <rect
              x="0"
              y="0"
              height="6"
              fill="white"
              style={{
                width: hovered ? 100 : 0,
                transition: "width 0.3s ease-out",
              }}
            />
          </mask>
        </defs>
        <path
          d="M0 4 Q3 1 6 4 Q9 7 12 4 Q15 1 18 4 Q21 7 24 4 Q27 1 30 4 Q33 7 36 4 Q39 1 42 4 Q45 7 48 4 Q51 1 54 4 Q57 7 60 4 Q63 1 66 4 Q69 7 72 4 Q75 1 78 4 Q81 7 84 4 Q87 1 90 4 Q93 7 96 4 Q99 1 102 4 Q105 7 108 4 Q111 1 114 4 Q117 7 120 4 Q123 1 126 4 Q129 7 132 4 Q135 1 138 4 Q141 7 144 4 Q147 1 150 4 Q153 7 156 4 Q159 1 162 4 Q165 7 168 4 Q171 1 174 4 Q177 7 180 4 Q183 1 186 4 Q189 7 192 4 Q195 1 198 4"
          stroke={ACCENT}
          strokeWidth="1"
          fill="none"
          style={{
            opacity: hovered ? 0 : 0.2,
            transition: "opacity 0.2s ease",
          }}
        />
        <path
          d="M0 4 Q3 1 6 4 Q9 7 12 4 Q15 1 18 4 Q21 7 24 4 Q27 1 30 4 Q33 7 36 4 Q39 1 42 4 Q45 7 48 4 Q51 1 54 4 Q57 7 60 4 Q63 1 66 4 Q69 7 72 4 Q75 1 78 4 Q81 7 84 4 Q87 1 90 4 Q93 7 96 4 Q99 1 102 4 Q105 7 108 4 Q111 1 114 4 Q117 7 120 4 Q123 1 126 4 Q129 7 132 4 Q135 1 138 4 Q141 7 144 4 Q147 1 150 4 Q153 7 156 4 Q159 1 162 4 Q165 7 168 4 Q171 1 174 4 Q177 7 180 4 Q183 1 186 4 Q189 7 192 4 Q195 1 198 4"
          stroke={ACCENT_HOVER}
          strokeWidth="1.5"
          fill="none"
          mask={`url(#${maskId})`}
          style={{
            animation: hovered ? "wavyScroll 1.2s linear infinite" : "none",
          }}
        />
      </svg>
    </span>
  );
}

function WavyUnderlineText({ children }: { children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="transition-colors duration-300"
        style={{ color: hovered ? ACCENT_HOVER : ACCENT }}
      >
        {children}
      </span>
      <WavyUnderline hovered={hovered} />
    </span>
  );
}

function GatewayLink({ to, children }: { to: string; children: React.ReactNode }) {
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

// ─── Project card ───────────────────────────────────────────────────────────

interface CardData {
  to: string;
  /** SVG logo node — provide when available */
  logo?: React.ReactNode;
  company: string;
  category: string;
  title: string;
  type: string;
  description: string;
  tags: string[];
  thumbnail: string;
  thumbnailBg: string;
  thumbnailPadding?: boolean | number;
  thumbnailFit?: "cover" | "contain";
}

function CardLogo({ src }: { src: string }) {
  return <img src={src} alt="" className="w-6 h-6 object-contain flex-shrink-0" />;
}

function ProjectCard({ card }: { card: CardData }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={card.to}
      className="group flex rounded-2xl border overflow-hidden transition-all duration-200"
      style={{
        borderColor: hovered ? "#d4d4d4" : "#e5e5e5",
        boxShadow: hovered ? "0 4px 24px 0 rgba(0,0,0,0.07)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Left: text content */}
      <div className="flex flex-col gap-3 p-5 flex-1 bg-white min-w-0">
        {/* Company tag */}
        <div className="flex items-center gap-2">
          {card.logo ? (
            <span className="flex-shrink-0">{card.logo}</span>
          ) : (
            <span
              className="w-6 h-6 rounded-md bg-neutral-100 flex items-center justify-center text-[10px] font-semibold text-neutral-400 flex-shrink-0"
            >
              {card.company[0]}
            </span>
          )}
          <span
            className="text-[11px] text-neutral-500 truncate"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {card.company} · {card.category}
          </span>
        </div>

        {/* Title + type */}
        <div>
          <h3
            className="text-[16px] font-bold text-neutral-900 leading-snug"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {card.title}
          </h3>
          <p
            className="text-[12px] text-neutral-400 mt-0.5"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {card.type}
          </p>
        </div>

        {/* Description */}
        <p
          className="text-[13px] text-neutral-600 leading-relaxed flex-1"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {card.description}
        </p>

        {/* Tags */}
        {card.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
            {card.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2.5 py-0.5 rounded-full border border-neutral-200 text-neutral-500"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Right: preview image */}
      <div
        className="relative w-[42%] flex-shrink-0 overflow-hidden"
        style={{ background: card.thumbnailBg }}
      >
        <div
          className={`absolute inset-0 overflow-hidden flex items-center justify-center${card.thumbnailFit === "contain" && !card.thumbnailPadding ? " p-5" : card.thumbnailPadding === false ? "" : card.thumbnailFit !== "contain" ? " pt-5" : ""}`}
          style={typeof card.thumbnailPadding === "number" ? { padding: card.thumbnailPadding } : undefined}
        >
          <img
            src={card.thumbnail}
            alt={card.title}
            className={`transition-transform duration-300 ${card.thumbnailFit === "contain" ? "max-w-full max-h-full object-contain" : "w-full h-full object-cover object-left-top"}`}
            style={{ transform: hovered ? "scale(1.03)" : "scale(1)" }}
          />
        </div>
      </div>
    </Link>
  );
}

// ─── Card data ──────────────────────────────────────────────────────────────

const CARDS: CardData[] = [
  {
    to: "/work/fireblocks/policy-v2",
    logo: <CardLogo src={logoSecurity} />,
    company: "Fireblocks",
    category: "Security & Trust",
    title: "Policy v2 & Rule Builder",
    type: "Case study",
    description: "Rebuilt the core governance engine into a lane-based rule builder. 40% fewer support tickets.",
    tags: ["Security", "Governance"],
    thumbnail: thumbPolicyV2,
    thumbnailBg: "#BEB9FF",
    thumbnailPadding: false,
    thumbnailFit: "contain",
  },
  {
    to: "/work/fireblocks/institutional-access",
    logo: <CardLogo src={logoSecurity} />,
    company: "Fireblocks",
    category: "Security & Trust",
    title: "Institutional Access",
    type: "Case study",
    description: "Scaled MFA, IP Allowlists, and Approval Groups for high-stakes institutional B2B clients.",
    tags: ["Access Control", "Risk Mitigation", "Governance"],
    thumbnail: thumbInstitutional,
    thumbnailBg: "#BEB9FF",
    thumbnailFit: "contain",
  },
  {
    to: "/work/fireblocks/transaction-security",
    logo: <CardLogo src={logoSecurity} />,
    company: "Fireblocks",
    category: "Security & Trust",
    title: "Transaction Security",
    type: "Case study",
    description: "Designed threat alerts and the Token Allowance Manager to identify and revoke malicious dApp permissions.",
    tags: ["DeFi", "Threat Mitigation"],
    thumbnail: thumbTxSecurity,
    thumbnailBg: "#BEB9FF",
  },
  {
    to: "/work/fireblocks/lending-earn",
    logo: <CardLogo src={logoWeb3} />,
    company: "Fireblocks",
    category: "OnChain & DeFi",
    title: "Lending & Earn",
    type: "Case study",
    description: "Consolidated diverse investment tools into a unified yield-management product for institutional roles.",
    tags: ["DeFi", "OnChain"],
    thumbnail: thumbLendingEarn,
    thumbnailBg: "#B0D6FF",
    thumbnailFit: "contain",
  },
  {
    to: "/work/fireblocks/swap-bridging",
    logo: <CardLogo src={logoWeb3} />,
    company: "Fireblocks",
    category: "OnChain & DeFi",
    title: "Swap & Bridge",
    type: "Case study",
    description: "Unified DeFi and CeFi providers into a single coherent comparison and transaction interface.",
    tags: ["DeFi", "OnChain"],
    thumbnail: thumbSwapBridge,
    thumbnailBg: "#B0D6FF",
    thumbnailFit: "contain",
  },
  {
    to: "/work/fireblocks/staking",
    logo: <CardLogo src={logoWeb3} />,
    company: "Fireblocks",
    category: "OnChain & DeFi",
    title: "Staking",
    type: "Case study",
    description: "Expanded from a single modal to a 3-step journey; integrated assets, providers, and the ETH Pectra upgrade.",
    tags: ["DeFi", "OnChain"],
    thumbnail: thumbStaking,
    thumbnailBg: "#B0D6FF",
    thumbnailFit: "contain",
  },
  {
    to: "/",
    logo: <CardLogo src={logoFireblocks} />,
    company: "Fireblocks",
    category: "Design System",
    title: "Fireblocks Unit Logos",
    type: "Case study",
    description: "Designed a cohesive visual identity system for Fireblocks' product units.",
    tags: ["Design System", "Branding"],
    thumbnail: thumbUnitLogos,
    thumbnailBg: "#374151",
    thumbnailFit: "contain",
    thumbnailPadding: 56,
  },
  {
    to: "/work/chegg-prep",
    logo: <CardLogo src={logoChegg} />,
    company: "Chegg",
    category: "Mobile App",
    title: "Chegg Prep",
    type: "Case study",
    description: "Led design for the Chegg Prep flashcard app and contributed to the One Chegg consolidation initiative.",
    tags: ["EdTech", "Mobile", "B2C"],
    thumbnail: thumbChegg,
    thumbnailBg: "#EE7338",
  },
  {
    to: "/work/bee-creations",
    company: "Bee Creations",
    category: "Agency",
    title: "Bee Creations",
    type: "Case study",
    description: "Built brands for 10+ clients across visual identity, web design, and marketing at a full-service agency.",
    tags: ["Branding", "Art Direction"],
    thumbnail: thumbBee,
    thumbnailBg: "#241F20",
    thumbnailFit: "contain",
    thumbnailPadding: 56,
  },
];

// ─── Home page ──────────────────────────────────────────────────────────────

export function Home() {
  return (
    <div className="px-6 md:px-12 max-w-7xl mx-auto">
      {/* Bio section */}
      <div className="pt-20 pb-0">
        <FadeIn duration={0.6} className="mb-10">
          <span
            className="text-[11px] tracking-[0.25em] uppercase text-neutral-400"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Senior Product Designer / Tel Aviv
          </span>
        </FadeIn>

        <FadeIn
          delay={0.1}
          duration={0.7}
          y={24}
          as="h1"
          className="text-[2em] text-neutral-900 tracking-[-0.025em] mb-8"
          style={{
            fontFamily: "'Inter', sans-serif",
            lineHeight: 1.2,
            fontWeight: 700,
          } as CSSProperties}
        >
          <SparklesText
            colors={{ first: "#9E7AFF", second: "#FE8BBB" }}
            sparklesCount={12}
          >
            <span>Hi there! 👋</span><br /><span>I'm Rami Martinov.</span>
          </SparklesText>
        </FadeIn>

        <FadeIn
          delay={0.2}
          duration={0.7}
          y={24}
          className="text-base text-neutral-700 tracking-[-0.01em]"
          style={{
            fontFamily: "'Inter', sans-serif",
            lineHeight: 1.85,
          }}
        ><span>I'm a product designer with 7 years of experience, and a 3-year foundation in branding before that. specializing in fintech, enterprise software, and B2B/B2C products where the complexity is real but the experience shouldn't show it.</span></FadeIn>

        <FadeIn
          delay={0.35}
          duration={0.7}
          y={24}
          className="text-base text-neutral-700 tracking-[-0.01em] mt-8"
          style={{
            fontFamily: "'Inter', sans-serif",
            lineHeight: 1.85,
          }}
        ><span>For the past 4+ years at </span><GatewayLink to="/work/fireblocks">Fireblocks</GatewayLink><span> the custody infrastructure powering $14T+ in transactions, I led design for the Security unit and contributed across OnChain, Platform access product pillars, and contributed to the design system.</span></FadeIn>

        <FadeIn
          delay={0.5}
          duration={0.7}
          y={24}
          className="text-base text-neutral-700 tracking-[-0.01em] mt-8"
          style={{
            fontFamily: "'Inter', sans-serif",
            lineHeight: 1.85,
          }}
        ><span>When I step away from the screen: </span><GatewayLink to="/photography">Photography</GatewayLink><span>, </span><GatewayLink to="/illustration">Illustration</GatewayLink><span>, and quality time with </span><GatewayLink to="/ellie">Ellie</GatewayLink><span>.</span></FadeIn>

      </div>

      {/* Section label */}
      <FadeIn delay={0.45} duration={0.7} y={0}>
        <div className="flex items-center gap-4 mb-6 mt-12">
          <span
            className="text-[14px] text-[#b8b8b8] tracking-[0.1px] whitespace-nowrap shrink-0"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Selected work
          </span>
          <hr className="flex-1 border-t border-neutral-200" />
        </div>
      </FadeIn>

      {/* Project cards grid */}
      <FadeIn delay={0.5} duration={0.7} y={16}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CARDS.map((card) => (
            <ProjectCard key={card.to} card={card} />
          ))}
        </div>
      </FadeIn>

      {/* Footer links */}
      <FadeIn delay={0.6} duration={0.8} y={0}>
        <div
          className="mt-10 mb-16 flex gap-6 text-[0.75em] tracking-[0.2em] uppercase text-neutral-400"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <a href="mailto:rami.martinov@gmail.com" className="hover:text-neutral-700 transition-colors">
            Email
          </a>
          <a href="https://www.linkedin.com/in/rami-martinov/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-700 transition-colors">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/rami_martinov/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-700 transition-colors">
            Instagram
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-700 transition-colors flex items-center gap-1">
            Resume <ArrowDown className="w-3 h-3" />
          </a>
        </div>
      </FadeIn>
    </div>
  );
}
