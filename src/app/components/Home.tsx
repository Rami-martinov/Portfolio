import { Link } from "react-router";
import { useState, useId, type CSSProperties } from "react";
import { Highlight } from "./ui/hero-highlight";
import { SparklesText } from "./ui/sparkles-text";
import { FadeIn } from "./ui/motion-css";

const ACCENT = "#4f46e5";
const ACCENT_HOVER = "#6366f1";

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
        {/* Faint static wave always visible */}
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
        {/* Animated wave on hover */}
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

export function Home() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-6 md:px-12">
      <div className="max-w-3xl mx-auto py-20 md:py-28">
        <FadeIn duration={0.6} className="mb-10">
          <span
            className="text-[11px] tracking-[0.25em] uppercase text-neutral-400"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Senior Product Designer / Tel Aviv
          </span>
        </FadeIn>

        {/* H1 Headline */}
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

        {/* Main body paragraph */}
        <FadeIn
          delay={0.2}
          duration={0.7}
          y={24}
          className="text-[1.25em] text-neutral-700 tracking-[-0.01em]"
          style={{
            fontFamily: "'Inter', sans-serif",
            lineHeight: 1.85,
          }}
        ><span>I'm a Senior Product Designer based in Tel Aviv with a passion for building complex, impactful digital experiences. For the past 4+ years, I've been at </span><GatewayLink to="/work/fireblocks">Fireblocks</GatewayLink><span>, where I've had the opportunity to design across multiple teams and product pillars.</span><br /><br /><span>My journey before that was quite diverse - from designing the </span><GatewayLink to="/work/chegg-prep">Chegg Prep</GatewayLink><span> mobile app as a remote Product Designer to working on fintech solutions at </span><WavyUnderlineText>Become</WavyUnderlineText><span className="text-neutral-700"> (company closed)</span><span>. I actually cut my teeth in the industry at </span><GatewayLink to="/work/bee-creations">Bee-Creations</GatewayLink><span>, a branding agency where I picked up the foundational design principles that still push my vision beyond just "product" today.</span></FadeIn>

        {/* Second paragraph */}
        <FadeIn
          delay={0.35}
          duration={0.7}
          y={24}
          className="text-[1.25em] text-neutral-700 tracking-[-0.01em] mt-8"
          style={{
            fontFamily: "'Inter', sans-serif",
            lineHeight: 1.85,
          }}
        ><span>When I'm not at my desk, you'll likely find me behind a camera lens practicing </span><GatewayLink to="/photography">Photography</GatewayLink><span>, working on a new </span><GatewayLink to="/illustration">Illustration</GatewayLink><span>, or my personal favorite - spending quality time with my baby, </span><GatewayLink to="/ellie">Ellie</GatewayLink><span>.</span></FadeIn>

        <FadeIn
          delay={0.9}
          duration={0.8}
          y={0}
          className="mt-16 flex gap-6 text-[0.75em] tracking-[0.2em] uppercase text-neutral-400"
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
        </FadeIn>
      </div>
    </div>
  );
}
