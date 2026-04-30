"use client";

import { useEffect, useRef } from "react";

interface Props {
  src: string;
  ariaLabel: string;
}

/**
 * Hero storefront image with two effects:
 *  1. Ken Burns slow zoom + drift (CSS keyframe, infinite loop)
 *  2. Scroll parallax — image translates upward at ~30% of scroll speed
 *     while the section is in view, creating depth.
 *
 * Honors prefers-reduced-motion (CSS handles Ken Burns; JS skips parallax).
 */
export default function HeroParallaxImage({ src, ariaLabel }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!wrapper || !inner) return;

    let frame = 0;
    const PARALLAX_RATE = 0.5; // 50% of scroll distance — pronounced parallax

    const update = () => {
      frame = 0;
      const rect = wrapper.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      // Only animate while the hero is in / near viewport
      if (rect.bottom < -200 || rect.top > viewportHeight + 200) return;
      // Distance scrolled past the top of the hero
      const scrolled = Math.max(0, -rect.top);
      const offset = scrolled * PARALLAX_RATE;
      inner.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        ref={innerRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: "translate3d(0, 0, 0)" }}
      >
        <div
          className="hero-ken-burns absolute inset-0 bg-no-repeat bg-cover bg-[position:75%_center]"
          style={{ backgroundImage: `url('${src}')` }}
          role="img"
          aria-label={ariaLabel}
        />
      </div>
    </div>
  );
}
