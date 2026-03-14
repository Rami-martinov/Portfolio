/**
 * Lightweight CSS-based animation utilities to replace framer-motion.
 * Provides useInView hook and FadeIn wrapper component.
 */
import { useEffect, useRef, useState, type CSSProperties, type ReactNode, type RefObject } from "react";

/* ─── useInView ─── */
export function useInView(
  ref: RefObject<Element | null>,
  opts?: { once?: boolean; margin?: string }
): boolean {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (opts?.once) observer.disconnect();
        } else if (!opts?.once) {
          setInView(false);
        }
      },
      { rootMargin: opts?.margin ?? "0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, opts?.once, opts?.margin]);

  return inView;
}

/* ─── useMountAnimation ─── */
export function useMountAnimation(delay = 0): { mounted: boolean } {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), delay * 1000);
    return () => clearTimeout(t);
  }, [delay]);
  return { mounted };
}

/* ─── FadeIn ─── */
interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  className?: string;
  style?: CSSProperties;
  as?: keyof JSX.IntrinsicElements;
  onScroll?: boolean;
  scrollMargin?: string;
  onClick?: (e: React.MouseEvent) => void;
  onMouseEnter?: (e: React.MouseEvent) => void;
  onMouseLeave?: (e: React.MouseEvent) => void;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  y = 20,
  x = 0,
  className = "",
  style,
  as: Tag = "div",
  onScroll = false,
  scrollMargin = "-50px",
  onClick,
  onMouseEnter,
  onMouseLeave,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: scrollMargin });
  const { mounted } = useMountAnimation(delay);

  const show = onScroll ? inView : mounted;

  const Component = Tag as any;

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: show ? 1 : 0,
        transform: show ? "translate(0, 0)" : `translate(${x}px, ${y}px)`,
        transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`,
        transitionDelay: onScroll ? `${delay}s` : undefined,
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Component>
  );
}

/* ─── AnimatePresence replacement ─── */
interface AnimatePresenceProps {
  children: ReactNode;
  show: boolean;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}

export function AnimatedPresence({
  children,
  show,
  duration = 0.2,
  className = "",
  style,
  onClick,
}: AnimatePresenceProps) {
  const [shouldRender, setShouldRender] = useState(show);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setShouldRender(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
    } else {
      setVisible(false);
      const t = setTimeout(() => setShouldRender(false), duration * 1000);
      return () => clearTimeout(t);
    }
  }, [show, duration]);

  if (!shouldRender) return null;

  return (
    <div
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transition: `opacity ${duration}s ease-in-out`,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
