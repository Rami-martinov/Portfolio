import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface LightboxState {
  images: string[];
  index: number;
}

interface LightboxContextValue {
  open: (images: string[], startIndex?: number) => void;
}

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) {
    return { open: () => {} } as LightboxContextValue;
  }
  return ctx;
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<LightboxState | null>(null);
  const [visible, setVisible] = useState(false);
  const [imageKey, setImageKey] = useState(0);

  const open = useCallback((images: string[], startIndex = 0) => {
    setState({ images, index: startIndex });
    setImageKey((k) => k + 1);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
  }, []);

  const close = useCallback(() => {
    setVisible(false);
    setTimeout(() => setState(null), 200);
  }, []);

  const prev = useCallback(() => {
    setState((s) =>
      s ? { ...s, index: s.index === 0 ? s.images.length - 1 : s.index - 1 } : s
    );
    setImageKey((k) => k + 1);
  }, []);

  const next = useCallback(() => {
    setState((s) =>
      s ? { ...s, index: s.index === s.images.length - 1 ? 0 : s.index + 1 } : s
    );
    setImageKey((k) => k + 1);
  }, []);

  const goTo = useCallback((i: number) => {
    setState((s) => (s ? { ...s, index: i } : s));
    setImageKey((k) => k + 1);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!state) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [state, close, prev, next]);

  // Lock body scroll
  useEffect(() => {
    if (state) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [state]);

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}

      {state && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.2s ease-in-out",
          }}
          onClick={close}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Image */}
          <div
            key={imageKey}
            className="relative z-10 max-w-[90vw] max-h-[85vh] flex items-center justify-center"
            style={{
              animation: "fadeScale 0.2s ease-out forwards",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <ImageWithFallback
              src={state.images[state.index]}
              alt={`Image ${state.index + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            {/* Left/Right click zones on the image */}
            {state.images.length > 1 && (
              <>
                <div
                  className="absolute inset-y-0 left-0 w-1/2 cursor-pointer z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                />
                <div
                  className="absolute inset-y-0 right-0 w-1/2 cursor-pointer z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                />
              </>
            )}
          </div>

          {/* Navigation arrows (multi-image only) */}
          {state.images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>

              {/* Dot indicators */}
              <div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                {state.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
                      i === state.index
                        ? "bg-white"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </LightboxContext.Provider>
  );
}
