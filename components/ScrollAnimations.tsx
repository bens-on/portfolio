"use client";

import { useEffect, useRef, useState } from "react";

type ScrollAnimationsProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function ScrollAnimations({
  children,
  className = "",
  delay = 0,
}: ScrollAnimationsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const reveal = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;
      window.setTimeout(() => setIsVisible(true), delay);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const node = elementRef.current;
    if (node) observer.observe(node);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}
