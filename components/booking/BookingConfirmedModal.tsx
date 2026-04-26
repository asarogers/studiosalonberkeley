"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import type { ConfirmedBooking } from "@/lib/booking/types";
import { clearLastBooking, readLastBooking } from "@/lib/booking/storage";
import { formatLongDate, formatTimeLabel } from "@/lib/booking/availability";

function CheckBadge() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="8.5 12 11 14.5 16 9.5" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function DotIcon({ d }: { d: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

export default function BookingConfirmedModal() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const flag = searchParams.get("booking");
  const [booking, setBooking] = useState<ConfirmedBooking | null>(null);

  useEffect(() => {
    // Sessions storage acts as an external store; we read it after the URL flag
    // changes so the home page can pick up a freshly confirmed booking.
    const next = flag === "confirmed" ? readLastBooking() : null;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBooking(next);
  }, [flag]);

  const close = useCallback(() => {
    clearLastBooking();
    setBooking(null);
    router.replace("/", { scroll: false });
  }, [router]);

  useEffect(() => {
    if (!booking) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [booking, close]);

  if (!booking) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-confirmed-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-[#2C2C2C]/60 backdrop-blur-sm p-0 sm:p-4 overflow-y-auto"
      onClick={close}
    >
      <div
        className="relative w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{ fontFamily: "var(--font-sans)" }}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close confirmation"
          className="absolute top-4 right-4 w-10 h-10 inline-flex items-center justify-center rounded-full text-[#5A5A5A] hover:text-[#2C2C2C] hover:bg-[#FCE8EC] transition-colors"
        >
          <CloseIcon />
        </button>

        <div className="blush-gradient px-6 pt-10 pb-7 text-center">
          <div className="mx-auto w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#9E4F63] shadow-md mb-4">
            <CheckBadge />
          </div>
          <h2
            id="booking-confirmed-title"
            className="font-[family-name:var(--font-serif)] text-[1.75rem] font-bold text-[#2C2C2C] leading-tight"
          >
            Booking Confirmed!
          </h2>
          <p className="text-[#5A5A5A] mt-2">
            Your appointment has been successfully scheduled.
          </p>
        </div>

        <div className="p-6 space-y-5">
          <div className="bg-[#FFF9F9] border border-[#F0D4DB] rounded-2xl p-5 space-y-3">
            <h3 className="font-[family-name:var(--font-serif)] font-bold text-[#2C2C2C]">
              Appointment Summary
            </h3>
            <div className="space-y-2 text-sm">
              <Row icon={<DotIcon d="M3 4h18v18H3zM16 2v4M8 2v4M3 10h18" />} label="Date" value={formatLongDate(booking.date)} />
              <Row icon={<DotIcon d="M12 6v6l4 2M22 12a10 10 0 11-20 0 10 10 0 0120 0z" />} label="Time" value={formatTimeLabel(booking.time)} />
            </div>
            <div className="pt-3 mt-3 border-t border-[#F0D4DB] flex items-center justify-between">
              <div className="min-w-0">
                <div className="font-bold text-[#2C2C2C]">{booking.service.name}</div>
                <div className="text-xs text-[#5A5A5A] mt-0.5">{booking.service.duration}</div>
              </div>
              <div className="text-lg font-bold text-[#B86A7E] flex-shrink-0">
                {booking.service.price}
              </div>
            </div>
            <div className="pt-3 mt-3 border-t border-[#F0D4DB]">
              <div className="text-xs uppercase tracking-[0.14em] text-[#5A5A5A] mb-1">Booked by</div>
              <div className="font-bold text-[#2C2C2C]">{booking.contact.fullName}</div>
              <div className="text-xs text-[#5A5A5A] mt-0.5">{booking.contact.email}</div>
            </div>
          </div>

          <div className="bg-[#FCE8EC]/60 border border-[#F0D4DB] rounded-2xl p-4">
            <h3 className="font-bold text-[#2C2C2C] text-sm mb-3">Confirmations Sent</h3>
            <div className="space-y-2 text-xs text-[#5A5A5A]">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#B86A7E] text-white flex items-center justify-center">
                  <DotIcon d="M4 4h16c1 0 2 1 2 2v12c0 1-1 2-2 2H4c-1 0-2-1-2-2V6c0-1 1-2 2-2zM2 6l10 7 10-7" />
                </span>
                <div>
                  <div className="font-bold text-[#2C2C2C]">Email confirmation</div>
                  <div>Sent to {booking.contact.email}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#B86A7E] text-white flex items-center justify-center">
                  <DotIcon d="M3 4h18v18H3zM16 2v4M8 2v4M3 10h18" />
                </span>
                <div>
                  <div className="font-bold text-[#2C2C2C]">Calendar invite</div>
                  <div>Included in your email</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <Link
              href="/#services"
              onClick={close}
              className="btn-primary justify-center text-center"
            >
              Book Another
            </Link>
            <button
              type="button"
              onClick={close}
              className="btn-secondary justify-center"
            >
              Return to Home
            </button>
          </div>

          <p className="text-center text-xs text-[#5A5A5A] pt-2">
            Need to make changes? Cancellations and reschedules must be made at least 24 hours in advance.
          </p>
        </div>
      </div>
    </div>
  );
}

function Row({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-8 h-8 rounded-full bg-[#FCE8EC] text-[#B86A7E] flex items-center justify-center flex-shrink-0">
        {icon}
      </span>
      <div>
        <div className="text-xs uppercase tracking-[0.14em] text-[#5A5A5A]">{label}</div>
        <div className="font-bold text-[#2C2C2C]">{value}</div>
      </div>
    </div>
  );
}
