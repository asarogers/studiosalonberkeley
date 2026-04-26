"use client";

import Link from "next/link";

interface Props {
  bookingSlug: string;
  detailSlug: string;
  serviceName: string;
  /** "compact" fits inline in dense menu rows; "full" is the spacious variant for service pages. */
  variant?: "compact" | "full";
}

function CalendarMiniIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

export default function ServiceActions({
  bookingSlug,
  detailSlug,
  serviceName,
  variant = "compact",
}: Props) {
  if (variant === "full") {
    return (
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <Link
          href={`/book/${bookingSlug}`}
          className="btn-primary justify-center"
          aria-label={`Book ${serviceName}`}
        >
          <CalendarMiniIcon />
          Book Appointment
        </Link>
        <Link
          href={`/services/${detailSlug}`}
          className="btn-secondary justify-center"
          aria-label={`Learn more about ${serviceName}`}
        >
          Learn More
        </Link>
      </div>
    );
  }

  return (
    <div
      className="flex items-center gap-3"
      onClick={(e) => e.stopPropagation()}
    >
      <Link
        href={`/services/${detailSlug}`}
        onClick={(e) => e.stopPropagation()}
        className="text-sm font-bold text-[#9E4F63] hover:text-[#2C2C2C] underline underline-offset-2 decoration-2 px-1 whitespace-nowrap"
        aria-label={`Learn more about ${serviceName}`}
      >
        Learn more
      </Link>
      <Link
        href={`/book/${bookingSlug}`}
        onClick={(e) => e.stopPropagation()}
        className="inline-flex items-center gap-1.5 text-sm font-bold text-white bg-[#2C2C2C] hover:bg-[#9E4F63] px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all whitespace-nowrap"
        aria-label={`Book ${serviceName}`}
      >
        <CalendarMiniIcon />
        Book
      </Link>
    </div>
  );
}
