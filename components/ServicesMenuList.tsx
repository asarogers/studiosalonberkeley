"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface MenuItem {
  name: string;
  price: string;
  duration: string;
  slug: string;
  video?: string;
}

interface MenuCategory {
  category: string;
  blurb: string;
  items: MenuItem[];
}

interface Props {
  menu: MenuCategory[];
}

type Lightbox = { src: string; label: string } | null;

export default function ServicesMenuList({ menu }: Props) {
  const [lightbox, setLightbox] = useState<Lightbox>(null);
  const close = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close]);

  return (
    <>
      <div className="space-y-16 max-w-5xl mx-auto">
        {menu.map((cat) => {
          const anchor = cat.category.toLowerCase().replace(/\s+&\s+/g, "-").replace(/\s+/g, "-");
          return (
            <div key={cat.category} id={anchor} className="scroll-mt-32">
              <div className="flex items-baseline justify-between gap-4 mb-2 pb-2 border-b-2 border-[#E8A1B3]">
                <h2 className="font-[family-name:var(--font-serif)] text-[clamp(1.5rem,2.5vw+0.5rem,2rem)] font-bold text-[#2C2C2C]">
                  {cat.category}
                </h2>
                <span className="text-xs text-[#5A5A5A] uppercase tracking-wider font-semibold flex-shrink-0"
                  style={{ fontFamily: "var(--font-sans)" }}>
                  {cat.items.length} services
                </span>
              </div>
              <p className="text-[#5A5A5A] mb-6 max-w-2xl"
                style={{ fontFamily: "var(--font-sans)" }}
                dangerouslySetInnerHTML={{ __html: cat.blurb }} />

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1"
                style={{ fontFamily: "var(--font-sans)" }}>
                {cat.items.map((item, idx) => (
                  <li key={`${item.slug}-${idx}`} className="flex items-center gap-3">
                    {item.video ? (
                      <button
                        type="button"
                        aria-label={`Watch ${item.name} video`}
                        className="flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B86A7E] rounded-md"
                        onClick={() => setLightbox({ src: item.video!, label: item.name })}
                      >
                        <video
                          src={item.video}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          aria-hidden="true"
                          className="rounded-md object-cover hover:opacity-80 transition-opacity cursor-zoom-in"
                          style={{ width: "40px", height: "40px", flexShrink: 0 }}
                        />
                      </button>
                    ) : (
                      <span
                        aria-hidden="true"
                        className="flex-shrink-0 rounded-md bg-[#FCE8EC]"
                        style={{ width: "40px", height: "40px" }}
                      />
                    )}
                    <Link
                      href={`/services/${item.slug}`}
                      className="group flex flex-1 items-baseline justify-between gap-3 py-3 px-3 -mx-3 rounded-lg hover:bg-[#FCE8EC] transition-colors border-b border-[#F0D4DB]/50"
                    >
                      <span className="flex-1 min-w-0">
                        <span className="block font-semibold text-[#2C2C2C] group-hover:text-[#9E4F63] transition-colors">
                          {item.name}
                        </span>
                        <span className="block text-xs text-[#5A5A5A] mt-0.5">
                          {item.duration}
                        </span>
                      </span>
                      <span className="flex-shrink-0 font-bold text-[#B86A7E] group-hover:text-[#9E4F63] transition-colors">
                        {item.price}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Video lightbox */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.label}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute top-3 right-3 w-11 h-11 flex items-center justify-center text-white/80 hover:text-white bg-black/40 rounded-full transition-colors"
            onClick={close}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <video
            src={lightbox.src}
            autoPlay
            controls
            loop
            playsInline
            className="max-w-[90vw] max-h-[85vh] rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-4 left-0 right-0 text-center text-white/80 text-sm" style={{ fontFamily: "var(--font-sans)" }}>
            {lightbox.label}
          </p>
        </div>
      )}
    </>
  );
}
