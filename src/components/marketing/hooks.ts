"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Mouse parallax — writes `--mx` / `--my` (0..1) to <html>.
 * AuroraBg + ConstellationBg pick them up from CSS.
 * Verbatim port from marketing-shared.jsx.
 */
export function useMouseParallax() {
  const ref = useRef({ x: 0.5, y: 0.5 });
  useEffect(() => {
    const fn = (e: PointerEvent) => {
      ref.current.x = e.clientX / window.innerWidth;
      ref.current.y = e.clientY / window.innerHeight;
      document.documentElement.style.setProperty("--mx", ref.current.x.toFixed(3));
      document.documentElement.style.setProperty("--my", ref.current.y.toFixed(3));
    };
    window.addEventListener("pointermove", fn, { passive: true });
    return () => window.removeEventListener("pointermove", fn);
  }, []);
  return ref;
}

/**
 * Count-up — chosen to use setTimeout (not RAF) so it ticks in
 * backgrounded tabs and embedded previews. Verbatim from handoff.
 */
export function useCountUp(
  target: number,
  { duration = 1600, delay = 0 }: { duration?: number; delay?: number } = {}
): number {
  const [v, setV] = useState(0);
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    let start: number | null = null;
    const tick = () => {
      const now = performance.now();
      if (start == null) start = now;
      const p = Math.min(1, (now - start) / duration);
      const e = 1 - Math.pow(1 - p, 3);
      setV(Math.round(target * e));
      if (p < 1) timer = setTimeout(tick, 32);
    };
    timer = setTimeout(tick, delay);
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [target, duration, delay]);
  return v;
}
