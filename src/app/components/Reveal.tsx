import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * True once the element has entered the viewport. One-way — it never flips
 * back, so nothing re-animates when you scroll up past it again.
 */
export function useInView<T extends HTMLElement>(rootMargin = "-8% 0px") {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // No observer (old browser, jsdom) means no animation gate: show it.
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return { ref, inView };
}

/**
 * Read synchronously on first render, not in an effect — an effect would paint
 * the animated state for one frame before correcting itself, which is exactly
 * the flash prefers-reduced-motion exists to prevent.
 */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

/**
 * Fades its children up 12px as they enter. Under prefers-reduced-motion the
 * children are simply present — no transform, no transition, no delay.
 */
export function Reveal({
  delay = 0,
  className,
  children,
}: {
  /** Stagger offset in ms. Ignored under reduced motion. */
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>();

  if (reduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: `translateY(${inView ? 0 : 12}px)`,
        transition: "opacity 600ms ease-out, transform 600ms ease-out",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
