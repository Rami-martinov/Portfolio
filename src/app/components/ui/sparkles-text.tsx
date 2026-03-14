import { CSSProperties, ReactNode, useEffect, useState, useRef, useCallback } from "react";
import { cn } from "./utils";

interface Sparkle {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
  lifespan: number;
}

interface SparklesTextProps {
  className?: string;
  children: ReactNode;
  sparklesCount?: number;
  colors?: {
    first: string;
    second: string;
  };
}

const SparklesText: React.FC<SparklesTextProps> = ({
  children,
  colors = { first: "#9E7AFF", second: "#FE8BBB" },
  className,
  sparklesCount = 10,
}) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [phase, setPhase] = useState<"intro" | "fading" | "idle" | "hover">("intro");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fadeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const generateStar = useCallback((): Sparkle => {
    const starX = `${Math.random() * 100}%`;
    const starY = `${Math.random() * 100}%`;
    const color = Math.random() > 0.5 ? colors.first : colors.second;
    const delay = Math.random() * 2;
    const scale = Math.random() * 1 + 0.3;
    const lifespan = Math.random() * 10 + 5;
    const id = `${starX}-${starY}-${Date.now()}-${Math.random()}`;
    return { id, x: starX, y: starY, color, delay, scale, lifespan };
  }, [colors.first, colors.second]);

  const clearAllTimers = useCallback(() => {
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
    if (timeoutRef.current) { clearTimeout(timeoutRef.current); timeoutRef.current = null; }
    if (fadeTimeoutRef.current) { clearTimeout(fadeTimeoutRef.current); fadeTimeoutRef.current = null; }
  }, []);

  const startUpdating = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setSparkles((curr) =>
        curr.map((star) =>
          star.lifespan <= 0 ? generateStar() : { ...star, lifespan: star.lifespan - 0.1 }
        )
      );
    }, 100);
  }, [generateStar]);

  // Initial 5s intro animation
  useEffect(() => {
    const newSparkles = Array.from({ length: sparklesCount }, generateStar);
    setSparkles(newSparkles);
    setPhase("intro");

    startUpdating();

    timeoutRef.current = setTimeout(() => {
      if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
      setPhase("fading");
      fadeTimeoutRef.current = setTimeout(() => {
        setPhase("idle");
      }, 3000);
    }, 5000);
  }, [generateStar, sparklesCount, startUpdating, clearAllTimers]);

  const handleMouseEnter = () => {
    if (phase === "intro") return;
    clearAllTimers();
    const newSparkles = Array.from({ length: sparklesCount }, generateStar);
    setSparkles(newSparkles);
    setPhase("hover");
    startUpdating();
  };

  const handleMouseLeave = () => {
    if (phase === "intro" || phase === "fading") return;
    if (phase === "hover") {
      if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
      setPhase("idle");
    }
  };

  const showSparkles = phase === "intro" || phase === "hover" || phase === "fading";
  const opacity = phase === "fading" || phase === "idle" ? 0 : 1;
  const fadeDuration = phase === "fading" ? 3 : phase === "idle" ? 0.5 : phase === "hover" ? 0.5 : 0.3;

  return (
    <span
      className={cn("relative inline-block", className)}
      style={
        {
          "--sparkles-first-color": `${colors.first}`,
          "--sparkles-second-color": `${colors.second}`,
        } as CSSProperties
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        className="pointer-events-none absolute inset-0"
        style={{
          opacity,
          transition: `opacity ${fadeDuration}s ease`,
        }}
      >
        {showSparkles &&
          sparkles.map((sparkle) => (
            <SparkleIcon key={sparkle.id} {...sparkle} />
          ))}
      </span>
      {children}
    </span>
  );
};

const SparkleIcon: React.FC<Sparkle> = ({ id, x, y, color, delay, scale }) => {
  return (
    <svg
      key={id}
      className="pointer-events-none absolute z-20"
      style={{
        left: x,
        top: y,
        "--sparkle-scale": scale,
        animation: `sparkle 0.8s ease-in-out ${delay}s infinite`,
      } as CSSProperties}
      width="21"
      height="21"
      viewBox="0 0 21 21"
    >
      <path
        d="M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z"
        fill={color}
      />
    </svg>
  );
};

export { SparklesText };
