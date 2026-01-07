"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { gsap } from "gsap";
import styles from "./PillNav.module.css";

type NavItem = {
  label: string;
  href: string;
};

type PillNavProps = {
  logo?: string | StaticImageData;
  logoAlt?: string;
  items: NavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
};

export default function PillNav({
  logo,
  logoAlt = "Logo",
  items,
  activeHref,
  className = "",
  ease = "power2.easeOut",
  baseColor = "#000000",
  pillColor = "#ffffff",
  hoveredPillTextColor = "#ffffff",
  pillTextColor = "#000000",
}: PillNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pillRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const hoverCircleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const hoverLabelRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize GSAP animations for each pill
    pillRefs.current.forEach((pill, index) => {
      if (!pill) return;

      const hoverCircle = hoverCircleRefs.current[index];
      const label = labelRefs.current[index];
      const hoverLabel = hoverLabelRefs.current[index];

      if (!hoverCircle || !label || !hoverLabel) return;

      const pillRect = pill.getBoundingClientRect();
      const size = Math.max(pillRect.width, pillRect.height) * 1.5;

      // Set initial state
      gsap.set(hoverCircle, {
        width: 0,
        height: 0,
        x: "-50%",
        y: "50%",
      });
      gsap.set(hoverLabel, {
        opacity: 0,
        y: "100%",
      });

      // Hover enter
      const handleMouseEnter = () => {
        gsap.to(hoverCircle, {
          width: size,
          height: size,
          duration: 0.4,
          ease: ease,
        });
        gsap.to(label, {
          y: "-100%",
          duration: 0.3,
          ease: ease,
        });
        gsap.to(hoverLabel, {
          opacity: 1,
          y: "0%",
          duration: 0.3,
          ease: ease,
        });
      };

      // Hover leave
      const handleMouseLeave = () => {
        gsap.to(hoverCircle, {
          width: 0,
          height: 0,
          duration: 0.3,
          ease: ease,
        });
        gsap.to(label, {
          y: "0%",
          duration: 0.3,
          ease: ease,
        });
        gsap.to(hoverLabel, {
          opacity: 0,
          y: "100%",
          duration: 0.3,
          ease: ease,
        });
      };

      pill.addEventListener("mouseenter", handleMouseEnter);
      pill.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        pill.removeEventListener("mouseenter", handleMouseEnter);
        pill.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, [ease, items.length]);

  // Mobile menu animations
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (mobileMenuOpen) {
        gsap.to(mobileMenuRef.current, {
          opacity: 1,
          scaleY: 1,
          duration: 0.3,
          ease: ease,
          visibility: "visible",
        });
      } else {
        gsap.to(mobileMenuRef.current, {
          opacity: 0,
          scaleY: 0.95,
          duration: 0.2,
          ease: ease,
          visibility: "hidden",
        });
      }
    }
  }, [mobileMenuOpen, ease]);

  const cssVars = {
    "--base": baseColor,
    "--pill-bg": pillColor,
    "--pill-text": pillTextColor,
    "--hover-text": hoveredPillTextColor,
  } as React.CSSProperties;

  return (
    <div
      className={`${styles["pill-nav-container"]} ${className}`}
      style={cssVars}
    >
      <nav className={styles["pill-nav"]}>
        {logo && (
          <div className={styles["pill-logo"]}>
            {typeof logo === "string" ? (
              <Image src={logo} alt={logoAlt} width={36} height={36} />
            ) : (
              <Image src={logo} alt={logoAlt} width={36} height={36} />
            )}
          </div>
        )}

        <div className={styles["pill-nav-items"]}>
          <ul className={styles["pill-list"]}>
            {items.map((item, index) => {
              const isActive = activeHref === item.href;
              return (
                <li key={item.href} className={styles["desktop-only"]}>
                  <Link
                    href={item.href}
                    className={`${styles.pill} ${isActive ? styles["is-active"] : ""}`}
                    ref={(el) => {
                      pillRefs.current[index] = el;
                    }}
                  >
                    <span
                      className={styles["hover-circle"]}
                      ref={(el) => {
                        hoverCircleRefs.current[index] = el;
                      }}
                    />
                    <span className={styles["label-stack"]}>
                      <span
                        className={styles["pill-label"]}
                        ref={(el) => {
                          labelRefs.current[index] = el;
                        }}
                      >
                        {item.label}
                      </span>
                      <span
                        className={styles["pill-label-hover"]}
                        ref={(el) => {
                          hoverLabelRefs.current[index] = el;
                        }}
                      >
                        {item.label}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <button
          className={styles["mobile-menu-button"]}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span
            className={styles["hamburger-line"]}
            style={{
              transform: mobileMenuOpen
                ? "rotate(45deg) translateY(5px)"
                : "none",
            }}
          />
          <span
            className={styles["hamburger-line"]}
            style={{
              opacity: mobileMenuOpen ? 0 : 1,
            }}
          />
          <span
            className={styles["hamburger-line"]}
            style={{
              transform: mobileMenuOpen
                ? "rotate(-45deg) translateY(-5px)"
                : "none",
            }}
          />
        </button>

        <div
          className={styles["mobile-menu-popover"]}
          ref={mobileMenuRef}
        >
          <ul className={styles["mobile-menu-list"]}>
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={styles["mobile-menu-link"]}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
