import { useRef, useState } from "react";
import { useInView, FadeIn } from "./ui/motion-css";
import { useLightbox } from "./Lightbox";

import ill1 from "figma:asset/0a71fab07c07dc8026ea9bf85b585a6f091629c3.png";
import ill2 from "figma:asset/78ef32b1133ae8acbf4438e6828759c24163b545.png";
import ill3 from "figma:asset/1c07651bb66194671aa7e15796bb8c9c0747207b.png";
import ill4 from "figma:asset/cd2c460974a40659e2347847132a43034dcf7965.png";
import ill5 from "figma:asset/3cbc616c4b11647be165fa5839bbf1115009f8b7.png";
import ill6 from "figma:asset/907cc21e8d497040e09338cb70b2d5d14f7f9712.png";
import ill7 from "figma:asset/6e574033d497903d89362e6fc84d559f2318fe17.png";
import ill8 from "figma:asset/8340b8776652b4deb3d9827db03cbbcf84bfdffc.png";
import ill9 from "figma:asset/4b85574eea684802bf1824d131b586c2262bbdc9.png";
import ill10 from "figma:asset/97a25de10c5dbca53ba66165ff4f9ecde9cf7301.png";
import ill11 from "figma:asset/fc3137d8141cd257dd7cfa44d6b8dcd68f0b670e.png";
import ill12 from "figma:asset/f41279b7b6a1b8b050c9aa54aee7d11e6fbd37f2.png";

const illustrations = [
  { id: 1, src: ill1, alt: "Minimal camel logo" },
  { id: 2, src: ill2, alt: "Two characters hugging" },
  { id: 3, src: ill3, alt: "Happy character with waves" },
  { id: 4, src: ill4, alt: "Hebrew typography illustration" },
  { id: 5, src: ill5, alt: "Memorial emblem 07.10" },
  { id: 6, src: ill6, alt: "Green figures pattern" },
  { id: 7, src: ill7, alt: "Political cartoon" },
  { id: 8, src: ill8, alt: "Feeding illustration" },
  { id: 9, src: ill9, alt: "Justice scales logo" },
  { id: 10, src: ill10, alt: "Hebrew calligraphy with jets" },
  { id: 11, src: ill11, alt: "Abstract knot letterform" },
  { id: 12, src: ill12, alt: "Hebrew decorative typography" },
];

const allSrcs = illustrations.map((p) => p.src);

function PhotoCard({ photo, index }: { photo: typeof illustrations[0]; index: number }) {
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

export function Illustration() {
  return (
    <div className="min-h-screen">
      <div className="px-2 md:px-4 py-12 md:py-20">
        <FadeIn className="max-w-7xl mx-auto mb-12 px-4">
          <h1
            className="text-[clamp(2rem,5vw,3.5rem)] tracking-tight text-neutral-900"
            style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.2 }}
          >
            Illustration
          </h1>
          <p className="mt-3 text-sm text-neutral-400 max-w-md">
            Explorations in line, color, and imagination.
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
          {illustrations.map((item, i) => (
            <div key={item.id} style={{ breakInside: "avoid", marginBottom: "4px" }}>
              <PhotoCard photo={item} index={i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
