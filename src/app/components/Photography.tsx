import { useRef, useState } from "react";
import { useInView, FadeIn } from "./ui/motion-css";
import { useLightbox } from "./Lightbox";

import photo1 from "@/assets/c402a2bb97c4b1fdfcda83b79cc4831d678ebabd.png";
import photo2 from "@/assets/11cd632c6e064695d7c5b8789d76da68e04d0ac6.png";
import photo3 from "@/assets/c9def389613a9409382cdd672808b9a40366dd0a.png";
import photo5 from "@/assets/2c730db35db299032c88d12f0e80ef1d15debba5.png";
import photo6 from "@/assets/d511bd4646bc98ebe7d32d53e8b67e5898f3e2bd.png";
import photo7 from "@/assets/fdb93f643e853de2ffa597a7e553e4ae6170de82.png";
import photo8 from "@/assets/55d47c8754458d2b086daec497677ce8859a61bd.png";
import photo9 from "@/assets/69c3843ca93b424c6a27d2734151fb266ac27796.png";
import photo10 from "@/assets/02fff03db0436642861dd3110bb06f60d6986219.png";
import photo11 from "@/assets/4b6a10790a9b85d67d9b69578d459add355db7e5.png";

const photos = [
  { id: 1, src: photo1, alt: "Street protest with megaphone" },
  { id: 2, src: photo2, alt: "Protesters behind fence" },
  { id: 3, src: photo3, alt: "Man with flags and buildings" },
  { id: 5, src: photo5, alt: "Man with blue sunglasses and flags" },
  { id: 6, src: photo6, alt: "Man with flags looking up" },
  { id: 7, src: photo7, alt: "Father and child through gate" },
  { id: 8, src: photo8, alt: "Magazzino storefront reflection" },
  { id: 9, src: photo9, alt: "Mother and child by the road" },
  { id: 10, src: photo10, alt: "Lunch at a checkered table" },
  { id: 11, src: photo11, alt: "Kids on rocks under blue sky" },
];

const allSrcs = photos.map((p) => p.src);

function PhotoCard({ photo, index }: { photo: (typeof photos)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const { open } = useLightbox();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div
      ref={ref}
      className="relative overflow-hidden cursor-pointer"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease-out ${index * 0.05}s, transform 0.5s ease-out ${index * 0.05}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => open(allSrcs, index)}
    >
      <div
        style={{
          transform: hovered ? "scale(1.05)" : "scale(1)",
          transition: "transform 0.4s ease-out",
        }}
      >
        <img src={photo.src} alt={photo.alt} className="w-full block" />
      </div>
      <div
        className="absolute inset-0 bg-black/20"
        style={{
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
    </div>
  );
}

export function Photography() {
  return (
    <div className="min-h-screen">
      <div className="px-2 md:px-4 py-12 md:py-20">
        <FadeIn className="max-w-7xl mx-auto mb-12 px-4">
          <h1
            className="text-[clamp(2rem,5vw,3.5rem)] tracking-tight text-neutral-900"
            style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.2 }}
          >
            Photography
          </h1>
          <p className="mt-3 text-sm text-neutral-400 max-w-md">
            Moments caught between the ordinary and the extraordinary.
          </p>
        </FadeIn>

        {/* CSS Columns Masonry */}
        <div
          style={{
            columnCount: 3,
            columnGap: "4px",
          }}
          className="[column-count:1] sm:[column-count:2] lg:[column-count:3]"
        >
          {photos.map((photo, i) => (
            <div key={photo.id} style={{ breakInside: "avoid", marginBottom: "4px" }}>
              <PhotoCard photo={photo} index={i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
