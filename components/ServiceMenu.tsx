"use client";

import { useState, useEffect, useCallback } from "react";
import type { MenuCategory } from "@/lib/services-menu";
import ServiceActions from "@/components/service/ServiceActions";

interface Props {
  menu: MenuCategory[];
}

type LightboxState = { kind: "image" | "video"; src: string; poster?: string; alt: string } | null;

export default function ServiceMenu({ menu }: Props) {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {menu.map((cat) => (
          <div key={cat.category} className="bg-white rounded-2xl border border-[#F0D4DB] overflow-hidden shadow-sm">
            <div className="p-5">
              <h3 className="font-[family-name:var(--font-serif)] text-[1.2rem] font-bold text-[#2C2C2C] mb-3 pb-2 border-b border-[#F0D4DB]">
                {cat.category}
              </h3>
              <ul className="divide-y divide-[#F0D4DB]/60" style={{ fontFamily: "var(--font-sans)" }}>
                {cat.items.map((item) => {
                  const thumbStyle = { width: "44px", height: "44px" } as const;
                  const hasMedia = Boolean(item.video || item.image);

                  return (
                    <li key={item.bookingSlug} className="py-3 first:pt-0 last:pb-0">
                      <div className="flex items-center gap-3">
                        {hasMedia ? (
                          <button
                            type="button"
                            aria-label={`View ${item.video ? "video" : "photo"} for ${item.name}`}
                            className="flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B86A7E] rounded-md"
                            onClick={() => {
                              if (item.video) {
                                setLightbox({ kind: "video", src: item.video, poster: item.image ?? undefined, alt: item.name });
                              } else if (item.image) {
                                setLightbox({ kind: "image", src: item.image, alt: item.name });
                              }
                            }}
                          >
                            {item.video ? (
                              <video
                                src={item.video}
                                poster={item.image ?? undefined}
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                aria-hidden="true"
                                className="rounded-md object-cover hover:opacity-80 transition-opacity cursor-zoom-in"
                                style={thumbStyle}
                              />
                            ) : (
                              /* eslint-disable-next-line @next/next/no-img-element */
                              <img
                                src={item.image!}
                                alt=""
                                aria-hidden="true"
                                className="rounded-md object-cover hover:opacity-80 transition-opacity cursor-zoom-in"
                                style={thumbStyle}
                                loading="lazy"
                              />
                            )}
                          </button>
                        ) : (
                          <span
                            aria-hidden="true"
                            className="flex-shrink-0 rounded-md bg-[#FCE8EC]"
                            style={thumbStyle}
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-[#2C2C2C] leading-snug">
                            {item.name}
                          </div>
                          <div className="text-xs text-[#5A5A5A] mt-0.5">
                            {item.duration}
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-sm font-bold text-[#B86A7E]">
                          {item.price}
                        </div>
                      </div>
                      <div className="flex items-center justify-end gap-2 mt-2 pl-[56px]">
                        <ServiceActions
                          bookingSlug={item.bookingSlug}
                          detailSlug={item.detailSlug}
                          serviceName={item.name}
                          variant="compact"
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
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
          <p className="absolute bottom-4 left-0 right-0 text-center text-white/80 text-sm" style={{ fontFamily: "var(--font-sans)" }}>
            {lightbox.alt}
          </p>
        </div>
      )}
    </>
  );
}
