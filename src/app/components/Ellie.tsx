import { useState, useMemo, useRef, useEffect } from "react";
import { useLightbox } from "./Lightbox";
import { FadeIn, useInView } from "./ui/motion-css";

import ellie1 from "figma:asset/3899482cc1b7b1822a5307069ccdb3360f243d61.png";
import ellie2 from "figma:asset/71e2eb490ccf9dca12a29bae658256aeac55cd7d.png";
import ellie3 from "figma:asset/63a2fe427d997927fc556ad6986e9ec3c5a0805d.png";
import ellie4 from "figma:asset/10b959aa32e30d28812458464781c2ce7f958620.png";
import ellie5 from "figma:asset/55fde89a422f1a23db85d616da01cb97fbc9e475.png";
import ellie6 from "figma:asset/4047aac43d9d307e10237ba5c3794b8b78f2f4d6.png";

const elliePhotos = [
  { id: 1, src: ellie1, alt: "Baby and dog at sunset park" },
  { id: 2, src: ellie2, alt: "Dad kissing baby" },
  { id: 3, src: ellie3, alt: "Dad and baby at seaside cafe" },
  { id: 4, src: ellie4, alt: "Dad and baby under clouds" },
  { id: 5, src: ellie5, alt: "Baby crawling with tongue out" },
  { id: 6, src: ellie6, alt: "Family with dogs in sunlight" },
];

// Seeded random for consistent layout
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

interface PhotoPosition {
  top: string;
  left: string;
  rotate: number;
  width: string;
  zIndex: number;
}

function ScatteredPhoto({
  photo,
  position,
  index,
  allSrcs,
}: {
  photo: typeof elliePhotos[0];
  position: PhotoPosition;
  index: number;
  allSrcs: string[];
}) {
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { open } = useLightbox();

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), index * 80);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div
      className="absolute cursor-pointer"
      style={{
        top: position.top,
        left: position.left,
        width: position.width,
        zIndex: hovered ? 50 : position.zIndex,
        opacity: mounted ? 1 : 0,
        transform: mounted
          ? `rotate(${position.rotate}deg) scale(1)`
          : `rotate(${position.rotate}deg) scale(0.8)`,
        transition: `opacity 0.5s ease-out, transform 0.5s ease-out`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => open(allSrcs, index)}
    >
      <div
        className="bg-white p-1 md:p-1.5"
        style={{
          transform: hovered ? "translateY(-6px) scale(1.03)" : "translateY(0) scale(1)",
          transition: "transform 0.25s ease-out",
        }}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          className="w-full block"
        />
      </div>
    </div>
  );
}

export function Ellie() {
  const positions = useMemo<PhotoPosition[]>(() => {
    const configs: PhotoPosition[] = [
      { top: "2%", left: "1%", rotate: -6, width: "clamp(180px, 32vw, 400px)", zIndex: 2 },
      { top: "-3%", left: "38%", rotate: 3, width: "clamp(170px, 28vw, 350px)", zIndex: 4 },
      { top: "5%", left: "65%", rotate: -4, width: "clamp(160px, 27vw, 340px)", zIndex: 3 },
      { top: "38%", left: "5%", rotate: 5, width: "clamp(175px, 30vw, 370px)", zIndex: 5 },
      { top: "42%", left: "35%", rotate: -3, width: "clamp(185px, 33vw, 410px)", zIndex: 6 },
      { top: "35%", left: "62%", rotate: 7, width: "clamp(165px, 28vw, 350px)", zIndex: 1 },
    ];
    return configs;
  }, []);

  const { open } = useLightbox();
  const allEllieSrcs = elliePhotos.map((p) => p.src);

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      {/* Title */}
      <FadeIn
        className="relative z-10 pt-8 md:pt-10 px-6 md:px-12 text-center"
      >
        <h1
          className="text-[clamp(2rem,5vw,3.5rem)] tracking-tight text-neutral-900"
          style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.2 }}
        >
          Ellie
        </h1>
        <p className="mt-1 text-sm text-neutral-400">
          My favorite soul
        </p>
      </FadeIn>

      {/* Scattered Photos - Desktop */}
      <div
        className="hidden md:block relative mx-auto mt-4"
        style={{ maxWidth: "1100px", height: "calc(100vh - 130px)", minHeight: "650px" }}
      >
        {elliePhotos.map((photo, i) => (
          <ScatteredPhoto
            key={photo.id}
            photo={photo}
            position={positions[i]}
            index={i}
            allSrcs={allEllieSrcs}
          />
        ))}
      </div>

      {/* Mobile fallback */}
      <div className="md:hidden px-3 py-4 space-y-1">
        {elliePhotos.map((photo, i) => {
          const rotate = seededRandom(i * 42) * 10 - 5;
          return (
            <MobileEllieCard
              key={photo.id}
              photo={photo}
              index={i}
              rotate={rotate}
              allSrcs={allEllieSrcs}
              open={open}
            />
          );
        })}
      </div>
    </div>
  );
}

function MobileEllieCard({
  photo,
  index,
  rotate,
  allSrcs,
  open,
}: {
  photo: typeof elliePhotos[0];
  index: number;
  rotate: number;
  allSrcs: string[];
  open: (images: string[], startIndex?: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="mx-auto max-w-xs cursor-pointer"
      style={{
        transform: `rotate(${rotate}deg)`,
        marginTop: index > 0 ? "-20px" : "0",
        opacity: inView ? 1 : 0,
        transition: `opacity 0.4s ease-out ${index * 0.04}s, transform 0.4s ease-out ${index * 0.04}s`,
      }}
      onClick={() => open(allSrcs, index)}
    >
      <div className="bg-white p-1.5">
        <img
          src={photo.src}
          alt={photo.alt}
          className="w-full block"
        />
      </div>
    </div>
  );
}
