"use client";

import { useEffect, useRef } from "react";

/**
 * Phased-array wave field.
 * A row of virtual emitters along the bottom produces an interference
 * pattern rendered as flowing ridgelines. The constructive "beam" steers
 * smoothly toward the pointer, like beam steering in a real phased array.
 */
export default function WaveField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let running = true;

    // Beam target (normalized 0..1), eased toward the pointer.
    let targetX = 0.5;
    let beamX = 0.5;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const steerToClientX = (clientX: number) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width <= 0) return;
      targetX = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
    };

    const onPointer = (e: PointerEvent) => {
      steerToClientX(e.clientX);
    };

    const onTouch = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      steerToClientX(e.touches[0].clientX);
    };

    const onLeave = () => {
      targetX = 0.5;
    };

    // Aurora palette pulled from the theme.
    const styles = getComputedStyle(document.documentElement);
    const colors = [
      styles.getPropertyValue("--accent-tertiary").trim() || "#a78bfa",
      styles.getPropertyValue("--accent-primary").trim() || "#67e8f9",
      styles.getPropertyValue("--accent-secondary").trim() || "#2dd4bf",
      styles.getPropertyValue("--accent-pink").trim() || "#f0abfc",
    ];

    const LINES = 26;
    const SEGMENTS = 140;

    // Fade waves out toward top/bottom so aurora background shows through.
    const verticalFade = (y: number) => {
      const topEnd = height * 0.12;
      const midStart = height * 0.2;
      const fadeStart = height * 0.5;
      const fadeEnd = height * 1.02;

      let top = 1;
      if (y < topEnd) top = 0;
      else if (y < midStart) top = (y - topEnd) / (midStart - topEnd);

      let bottom = 1;
      if (y > fadeEnd) bottom = 0;
      else if (y > fadeStart)
        bottom = 1 - (y - fadeStart) / (fadeEnd - fadeStart);

      return top * bottom;
    };

    const draw = (t: number) => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);

      // Ease the beam toward the pointer — the "steering" motion.
      beamX += (targetX - beamX) * 0.035;

      const time = t * 0.00045;
      const beamPx = beamX * width;

      for (let i = 0; i < LINES; i++) {
        const p = i / (LINES - 1); // 0 at top line, 1 at bottom
        const baseY = height * (0.18 + 0.74 * p);

        // Lines nearer the bottom (closer to the emitters) move more.
        const rowGain = 0.35 + 0.65 * p;

        ctx.beginPath();
        for (let s = 0; s <= SEGMENTS; s++) {
          const x = (s / SEGMENTS) * width;

          // Interference of three traveling waves with different k / speed.
          const w1 = Math.sin(x * 0.008 + time * 2.1 + i * 0.35);
          const w2 = Math.sin(x * 0.013 - time * 1.6 + i * 0.6);
          const w3 = Math.sin(x * 0.021 + time * 2.9 - i * 0.2);

          // Beam envelope: constructive gain near the steered beam center.
          const d = (x - beamPx) / (width * 0.22);
          const beam = Math.exp(-d * d);

          const amp = height * 0.028 * rowGain * (0.45 + 1.35 * beam);
          const y = baseY + (w1 * 0.5 + w2 * 0.32 + w3 * 0.18) * amp;

          if (s === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.strokeStyle = colors[i % colors.length];
        ctx.globalAlpha = (0.05 + 0.16 * p) * verticalFade(baseY);
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      if (!prefersReduced) raf = requestAnimationFrame(draw);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Pause when offscreen or tab hidden.
    const io = new IntersectionObserver(([entry]) => {
      const visible = entry.isIntersecting && !document.hidden;
      if (visible && !running) {
        running = true;
        raf = requestAnimationFrame(draw);
      } else if (!visible) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    io.observe(canvas);

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else {
        running = true;
        raf = requestAnimationFrame(draw);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchstart", onTouch, { passive: true });
    canvas.addEventListener("pointerleave", onLeave);

    raf = requestAnimationFrame(draw);
    if (prefersReduced) {
      // Render one static frame.
      draw(0);
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchstart", onTouch);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`h-full w-full ${className}`}
      aria-hidden
    />
  );
}
