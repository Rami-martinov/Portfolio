import React, { useRef, useCallback, type CSSProperties } from "react";
import { cn } from "./utils";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current || !maskRef.current) return;
      const { left, top } = containerRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      maskRef.current.style.maskImage = `radial-gradient(200px circle at ${x}px ${y}px, black 0%, transparent 100%)`;
      maskRef.current.style.webkitMaskImage = `radial-gradient(200px circle at ${x}px ${y}px, black 0%, transparent 100%)`;
    },
    []
  );

  const dotPattern = (color: string) => ({
    backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
    backgroundSize: "16px 16px",
  });

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-[40rem] flex items-center bg-white justify-center w-full group",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={dotPattern("rgb(212 212 212)")}
      />
      <div
        ref={maskRef}
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={dotPattern("rgb(99 102 241)")}
      />

      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
        animation: "highlightSweep 2s linear 0.5s forwards",
        backgroundSize: "0% 100%",
      }}
      className={cn(
        `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300`,
        className
      )}
    >
      {children}
    </span>
  );
};
