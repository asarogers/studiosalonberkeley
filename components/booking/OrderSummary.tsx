"use client";

import type { MenuItem } from "@/lib/services-menu";
import { formatLongDate, formatTimeLabel } from "@/lib/booking/availability";

interface Props {
  service: MenuItem;
  date: string | null;
  time: string | null;
}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default function OrderSummary({ service, date, time }: Props) {
  return (
    <aside
      className="bg-white rounded-3xl border border-[#F0D4DB] shadow-sm overflow-hidden lg:sticky lg:top-24"
      aria-label="Order summary"
    >
      <div className="blush-gradient px-6 py-4">
        <h2
          className="font-[family-name:var(--font-serif)] text-lg font-bold text-[#2C2C2C]"
        >
          Order Summary
        </h2>
      </div>

      <div className="p-6 space-y-5" style={{ fontFamily: "var(--font-sans)" }}>
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="font-bold text-[#2C2C2C] leading-snug">
              {service.name}
            </div>
            <div className="text-sm text-[#5A5A5A] mt-1">
              {service.duration}
            </div>
            <div className="text-xs text-[#9E4F63] mt-1 uppercase tracking-[0.14em]">
              {service.category}
            </div>
          </div>
          <div className="text-lg font-bold text-[#B86A7E] flex-shrink-0">
            {service.price}
          </div>
        </div>

        {(date || time) && (
          <div className="pt-4 border-t border-[#F0D4DB] space-y-2 text-sm text-[#2C2C2C]">
            {date && (
              <div className="flex items-center gap-2">
                <span className="text-[#B86A7E]"><CalendarIcon /></span>
                <span>{formatLongDate(date)}</span>
              </div>
            )}
            {time && (
              <div className="flex items-center gap-2">
                <span className="text-[#B86A7E]"><ClockIcon /></span>
                <span>{formatTimeLabel(time)}</span>
              </div>
            )}
          </div>
        )}

        <div className="pt-4 border-t border-[#F0D4DB] space-y-1.5 text-sm">
          <div className="flex items-center justify-between text-[#5A5A5A]">
            <span>Subtotal</span>
            <span>{service.price}</span>
          </div>
          <div className="flex items-center justify-between text-[#5A5A5A]">
            <span>Tax</span>
            <span>$0</span>
          </div>
          <div className="flex items-center justify-between pt-2 mt-2 border-t border-[#F0D4DB] font-bold text-[#2C2C2C] text-base">
            <span>Total</span>
            <span>{service.price}</span>
          </div>
        </div>

        <p className="text-xs text-[#5A5A5A] leading-relaxed pt-2 border-t border-[#F0D4DB]">
          A confirmation email will be sent after booking. Cancellations must be made at least 24 hours in advance.
        </p>
      </div>
    </aside>
  );
}
