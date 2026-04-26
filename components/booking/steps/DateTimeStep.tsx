"use client";

import { useMemo, useState } from "react";
import {
  getAvailableSlots,
  isDayBookable,
  isoDateToLocal,
  localDateToIso,
  type TimeSlot,
} from "@/lib/booking/availability";

interface Props {
  selectedDate: string | null;
  selectedTime: string | null;
  onSelectDate: (date: string) => void;
  onSelectTime: (time: string) => void;
  onContinue: () => void;
}

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export default function DateTimeStep({
  selectedDate,
  selectedTime,
  onSelectDate,
  onSelectTime,
  onContinue,
}: Props) {
  const today = useMemo(() => new Date(), []);
  const startMonth = useMemo(() => {
    const base = selectedDate ? isoDateToLocal(selectedDate) : today;
    return new Date(base.getFullYear(), base.getMonth(), 1);
  }, [selectedDate, today]);
  const [viewMonth, setViewMonth] = useState(startMonth);

  const calendarDays = useMemo(() => {
    const firstOfMonth = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), 1);
    const lastOfMonth = new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 0);
    const leadingBlanks = firstOfMonth.getDay();
    const totalDays = lastOfMonth.getDate();
    return { firstOfMonth, leadingBlanks, totalDays };
  }, [viewMonth]);

  const slotsByBucket = useMemo(() => {
    const buckets: Record<TimeSlot["bucket"], TimeSlot[]> = {
      morning: [],
      afternoon: [],
      evening: [],
    };
    if (!selectedDate) return buckets;
    for (const slot of getAvailableSlots(selectedDate)) buckets[slot.bucket].push(slot);
    return buckets;
  }, [selectedDate]);

  const todayMonthIndex = today.getFullYear() * 12 + today.getMonth();
  const viewMonthIndex = viewMonth.getFullYear() * 12 + viewMonth.getMonth();
  const canGoPrev = viewMonthIndex > todayMonthIndex;

  const monthLabel = viewMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const canContinue = Boolean(selectedDate && selectedTime);

  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>
      <h1 className="font-[family-name:var(--font-serif)] text-[clamp(1.25rem,1.5vw+0.75rem,1.75rem)] font-bold text-[#2C2C2C] mb-3 leading-tight">
        Select Date &amp; Time
      </h1>

      <div className="bg-white border border-[#F0D4DB] rounded-2xl p-3 sm:p-4 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <button
            type="button"
            onClick={() => {
              if (!canGoPrev) return;
              setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() - 1, 1));
            }}
            disabled={!canGoPrev}
            aria-label="Previous month"
            className="w-8 h-8 inline-flex items-center justify-center rounded-full text-[#B86A7E] hover:bg-[#FCE8EC] transition-colors disabled:text-[#F0D4DB] disabled:hover:bg-transparent"
          >
            <ChevronLeft />
          </button>
          <div className="font-[family-name:var(--font-serif)] font-bold text-base text-[#2C2C2C]">
            {monthLabel}
          </div>
          <button
            type="button"
            onClick={() =>
              setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 1))
            }
            aria-label="Next month"
            className="w-8 h-8 inline-flex items-center justify-center rounded-full text-[#B86A7E] hover:bg-[#FCE8EC] transition-colors"
          >
            <ChevronRight />
          </button>
        </div>

        <div className="grid grid-cols-7 text-center text-[10px] text-[#5A5A5A] mb-1 font-semibold">
          {WEEKDAYS.map((d) => (
            <div key={d} className="py-0.5">
              {d}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-0.5 sm:gap-1">
          {Array.from({ length: calendarDays.leadingBlanks }).map((_, i) => (
            <div key={`blank-${i}`} aria-hidden="true" />
          ))}
          {Array.from({ length: calendarDays.totalDays }).map((_, i) => {
            const day = i + 1;
            const date = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), day);
            const iso = localDateToIso(date);
            const bookable = isDayBookable(iso, today);
            const isSelected = iso === selectedDate;
            const baseBtn =
              "aspect-square rounded-full text-xs flex items-center justify-center transition-colors w-full max-w-[34px] mx-auto";
            const stateBtn = isSelected
              ? "bg-[#B86A7E] text-white font-bold shadow-md"
              : bookable
              ? "text-[#2C2C2C] font-semibold hover:bg-[#FCE8EC]"
              : "text-[#F0D4DB] cursor-not-allowed";
            return (
              <button
                key={iso}
                type="button"
                disabled={!bookable}
                onClick={() => onSelectDate(iso)}
                aria-label={date.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
                aria-pressed={isSelected}
                className={`${baseBtn} ${stateBtn}`}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      {selectedDate && (
        <div className="mt-4">
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#B86A7E] mb-2">
            Available Times — {isoDateToLocal(selectedDate).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </h2>

          {(["morning", "afternoon", "evening"] as const).map((bucket) => {
            const bucketSlots = slotsByBucket[bucket];
            if (bucketSlots.length === 0) return null;
            const bucketLabel = bucket.charAt(0).toUpperCase() + bucket.slice(1);
            return (
              <div key={bucket} className="mb-2">
                <div className="text-[10px] uppercase tracking-[0.14em] text-[#5A5A5A] mb-1 font-semibold">
                  {bucketLabel}
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1.5">
                  {bucketSlots.map((slot) => {
                    const isPicked = selectedTime === slot.key;
                    const cls = !slot.available
                      ? "border-[#F0D4DB] text-[#F0D4DB] cursor-not-allowed bg-white/60"
                      : isPicked
                      ? "border-[#B86A7E] bg-[#B86A7E] text-white font-bold shadow-md"
                      : "border-[#F0D4DB] bg-white text-[#2C2C2C] hover:border-[#B86A7E] hover:bg-[#FCE8EC]";
                    return (
                      <button
                        key={slot.key}
                        type="button"
                        disabled={!slot.available}
                        onClick={() => onSelectTime(slot.key)}
                        aria-pressed={isPicked}
                        className={`text-xs py-1.5 rounded-full border-2 transition-colors ${cls}`}
                      >
                        {slot.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="mt-4 pt-3 border-t border-[#F0D4DB]">
        <button
          type="button"
          onClick={onContinue}
          disabled={!canContinue}
          className="btn-primary w-full justify-center py-2.5 text-sm"
        >
          Continue to Your Information
        </button>
      </div>
    </div>
  );
}
