"use client";

import { useState, useEffect, useCallback } from "react";
import type { MenuCategory } from "@/lib/services-menu";
import ServiceMenuItem, {
  type MediaLightboxRequest,
} from "@/components/service/ServiceMenuItem";

interface Props {
  menu: MenuCategory[];
}

const ROMAN_NUMERALS = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
];

export default function ServiceMenu({ menu }: Props) {
  const [lightbox, setLightbox] = useState<MediaLightboxRequest | null>(null);
  const close = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close]);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-16 max-w-6xl mx-auto">
        {menu.map((cat, catIdx) => (
          <section
            key={cat.category}
            className="service-spread"
            style={{ animationDelay: `${Math.min(catIdx, 5) * 110}ms` }}
            aria-labelledby={`service-cat-${catIdx}`}
          >
            <header className="relative mb-7 pb-5">
              <div className="flex items-baseline justify-between gap-4">
                <span
                  aria-hidden="true"
                  className="text-[#B86A7E] tracking-[0.36em] text-[0.68rem] uppercase font-bold"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  N°&nbsp;{ROMAN_NUMERALS[catIdx] ?? catIdx + 1}
                </span>
                <span
                  className="text-[#5A5A5A] text-[0.62rem] tracking-[0.22em] uppercase font-medium"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {cat.items.length}&nbsp;
                  {cat.items.length === 1 ? "Service" : "Services"}
                </span>
              </div>
              <h3
                id={`service-cat-${catIdx}`}
                className="mt-2.5 text-[1.95rem] sm:text-[2.35rem] leading-[1.02] text-[#2C2C2C] tracking-[-0.018em]"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
              >
                {cat.category}
              </h3>
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 right-0 h-px bg-[#E8C8D0]"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-[-1px] left-0 h-[2px] w-20 bg-gradient-to-r from-[#B86A7E] via-[#E8A1B3] to-transparent"
              />
            </header>

            <ol className="flex flex-col">
              {cat.items.map((item, idx) => (
                <ServiceMenuItem
                  key={item.bookingSlug}
                  item={item}
                  index={idx}
                  onOpenMedia={setLightbox}
                />
              ))}
            </ol>
          </section>
        ))}
      </div>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute top-3 right-3 w-11 h-11 flex items-center justify-center text-white/80 hover:text-white bg-black/40 rounded-full transition-colors"
            onClick={close}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          {lightbox.kind === "video" ? (
            <video
              src={lightbox.src}
              poster={lightbox.poster}
              autoPlay
              controls
              loop
              playsInline
              className="max-w-[90vw] max-h-[85vh] rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-[90vw] max-h-[85vh] rounded-2xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          )}
          <p
            className="absolute bottom-4 left-0 right-0 text-center text-white/80 text-sm"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {lightbox.alt}
          </p>
        </div>
      )}
    </>
  );
}
