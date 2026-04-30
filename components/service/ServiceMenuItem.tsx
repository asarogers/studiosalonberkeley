"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { MenuItem } from "@/lib/services-menu";

export type MediaLightboxRequest = {
  kind: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
};

interface Props {
  item: MenuItem;
  index: number;
  onOpenMedia: (request: MediaLightboxRequest) => void;
}

export default function ServiceMenuItem({ item, onOpenMedia }: Props) {
  const router = useRouter();
  const hasMedia = Boolean(item.video || item.image);
  const bookHref = `/book/${item.bookingSlug}`;

  return (
    <li className="service-row group relative py-6 first:pt-0 border-t border-[#F0D4DB]/70 first:border-t-0">
      <div className="flex gap-5 sm:gap-6 items-stretch">
        {hasMedia ? (
          <button
            type="button"
            aria-label={`View ${item.video ? "video" : "photo"} for ${item.name}`}
            className="relative flex-shrink-0 w-[96px] sm:w-[112px] aspect-[3/4] overflow-hidden rounded-[3px] bg-[#FCE8EC] cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B86A7E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFF9F9]"
            onClick={() => {
              if (item.video) {
                onOpenMedia({
                  kind: "video",
                  src: item.video,
                  poster: item.image ?? undefined,
                  alt: item.name,
                });
              } else if (item.image) {
                onOpenMedia({ kind: "image", src: item.image, alt: item.name });
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
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={item.image!}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                loading="lazy"
              />
            )}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/45 to-transparent opacity-90"
            />
            {item.video && (
              <span
                aria-hidden="true"
                className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-white/90 flex items-center justify-center shadow-sm"
              >
                <svg
                  width="7"
                  height="7"
                  viewBox="0 0 8 8"
                  fill="#B86A7E"
                  aria-hidden="true"
                  style={{ marginLeft: "1px" }}
                >
                  <path d="M1.5 0.5L7 4L1.5 7.5V0.5Z" />
                </svg>
              </span>
            )}
          </button>
        ) : (
          <span
            aria-hidden="true"
            className="flex-shrink-0 w-[96px] sm:w-[112px] aspect-[3/4] rounded-[3px] bg-gradient-to-br from-[#FCE8EC] to-[#FADADD]"
          />
        )}

        <div
          role="link"
          tabIndex={0}
          aria-label={`Book ${item.name}`}
          onClick={() => router.push(bookHref)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              router.push(bookHref);
            }
          }}
          className="flex-1 min-w-0 flex flex-col justify-between py-0.5"
          style={{ cursor: "pointer" }}
        >
          <div>
            <div className="flex items-baseline justify-between gap-3">
              <h4
                className="text-[1.05rem] sm:text-[1.18rem] leading-tight text-[#2C2C2C]"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 500,
                  fontStyle: "italic",
                }}
              >
                {item.name}
              </h4>
              <span
                aria-label={`Price ${item.price}`}
                className="flex-shrink-0 text-[1.45rem] sm:text-[1.6rem] leading-none tabular-nums"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
              >
                {item.price}
              </span>
            </div>
            <div
              className="mt-2 text-[0.62rem] tracking-[0.26em] uppercase text-[#5A5A5A] font-semibold"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {item.duration}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-end gap-5">
            <Link
              href={`/services/${item.detailSlug}`}
              onClick={(e) => e.stopPropagation()}
              aria-label={`Learn more about ${item.name}`}
              className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#5A5A5A] hover:text-[#B86A7E] underline-offset-[6px] decoration-1 hover:underline transition-colors"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Details
            </Link>

            <Link
              href={`/book/${item.bookingSlug}`}
              onClick={(e) => e.stopPropagation()}
              aria-label={`Book ${item.name}`}
              className="reserve-pill cursor-pointer inline-flex items-center gap-1.5 text-[0.78rem] font-bold uppercase tracking-[0.16em] hover:shadow-[0_8px_22px_rgba(122,56,69,0.32)] px-5 py-2.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2C2C2C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFF9F9]"
              style={{
                fontFamily: "var(--font-sans)",
                color: "#FFF9F9",
                backgroundColor: "#9E4F63",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#7A3845")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#9E4F63")
              }
            >
              Reserve
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="reserve-arrow transition-transform duration-300"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}
