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
  delay = 0 
}: ScrollAnimationsProps) {
  const [isVisible, setIsVisible] = useState(true); // Start visible to ensure content renders
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if element is already visible on mount
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      if (isInViewport) {
        setTimeout(() => {
          setIsVisible(true);
        }, delay);
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { 
        threshold: 0.01,
        rootMargin: '0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
}
