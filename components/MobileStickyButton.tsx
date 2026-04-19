"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/* ============================================================
   MobileStickyButton
   ─────────────────────────────────────────────────────────────
   A floating "Book Now" pill that appears on mobile only
   (hidden at md breakpoint and above) after the user scrolls
   past the hero section (>300px). Pink background, bottom-right.
   ============================================================ */
export default function MobileStickyButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // check on mount in case page loads mid-scroll

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      role="region"
      aria-label="Quick booking button"
      className={[
        "mobile-sticky-cta",
        "fixed bottom-5 right-4 z-50",
        "md:hidden", // hidden on desktop
        "transition-all duration-300 ease-out",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none",
      ].join(" ")}
    >
      <Link
        href="/book"
        aria-label="Book an appointment"
        className={[
          "flex items-center gap-2",
          "pl-4 pr-5 py-3.5",
          "rounded-full",
          "bg-[#B86A7E] !text-white",
          "text-sm font-bold leading-none tracking-[0.04em]",
          "shadow-[0_4px_20px_rgba(184,106,126,0.45)]",
          "hover:bg-[#9E4F63]",
          "hover:shadow-[0_6px_28px_rgba(184,106,126,0.55)]",
          "active:scale-95",
          "transition-all duration-150",
          "focus-visible:outline-none",
          "focus-visible:ring-3 focus-visible:ring-white",
          "focus-visible:ring-offset-2 focus-visible:ring-offset-[#B86A7E]",
        ].join(" ")}
        style={{ fontFamily: "var(--font-sans)" }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
          className="flex-shrink-0"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        Book Now
      </Link>
    </div>
  );
}
