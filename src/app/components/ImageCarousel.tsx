import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLightbox } from "./Lightbox";

interface ImageCarouselProps {
  images?: string[];
}

export function ImageCarousel({ images = [] }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const { open } = useLightbox();
  const count = images.length || 2;
  const slides = images.length > 0 ? images : Array.from({ length: count });

  const prev = () => setCurrent((c) => (c === 0 ? count - 1 : c - 1));
  const next = () => setCurrent((c) => (c === count - 1 ? 0 : c + 1));

  return (
    <div className="relative mb-8 group">
      {/* Slides */}
      <div
        className="rounded-lg overflow-hidden bg-neutral-100"
      >
        {/* Only show the current slide so height adapts naturally */}
        {slides.map((item, i) => (
          <div
            key={i}
            className={`w-full bg-neutral-100 ${i === current ? "block" : "hidden"}`}
          >
            {typeof item === "string" && (
              <div className="relative">
                <img
                  src={item}
                  alt={`Slide ${i + 1}`}
                  className="w-full"
                />
                {/* Left click zone - navigate prev */}
                <div
                  className="absolute inset-y-0 left-0 w-1/4 cursor-pointer z-[1]"
                  onClick={prev}
                />
                {/* Center click zone - open lightbox */}
                <div
                  className="absolute inset-y-0 left-1/4 right-1/4 cursor-pointer z-[1]"
                  onClick={() => open(images, i)}
                />
                {/* Right click zone - navigate next */}
                <div
                  className="absolute inset-y-0 right-0 w-1/4 cursor-pointer z-[1]"
                  onClick={next}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer shadow-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 text-neutral-700" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer shadow-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 text-neutral-700" />
      </button>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
              i === current ? "bg-neutral-800" : "bg-neutral-300"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}