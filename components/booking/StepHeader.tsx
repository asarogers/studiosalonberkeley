"use client";

import type { BookingStep } from "@/lib/booking/types";

const STEPS: { key: BookingStep; label: string }[] = [
  { key: "datetime",  label: "Date & Time" },
  { key: "info",      label: "Your Info" },
  { key: "review",    label: "Review" },
  { key: "confirmed", label: "Confirmed" },
];

interface Props {
  current: BookingStep;
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function StepHeader({ current }: Props) {
  const currentIndex = STEPS.findIndex((s) => s.key === current);

  return (
    <ol
      className="flex items-center justify-between gap-2 sm:gap-4 max-w-3xl mx-auto"
      style={{ fontFamily: "var(--font-sans)" }}
      aria-label="Booking progress"
    >
      {STEPS.map((step, i) => {
        const isComplete = i < currentIndex;
        const isCurrent = i === currentIndex;
        const isUpcoming = i > currentIndex;

        const circleClass = isComplete
          ? "bg-[#B86A7E] text-white border-[#B86A7E]"
          : isCurrent
          ? "bg-white text-[#9E4F63] border-[#B86A7E] ring-4 ring-[#FCE8EC]"
          : "bg-white text-[#5A5A5A]/60 border-[#F0D4DB]";

        const labelClass = isComplete
          ? "text-[#9E4F63]"
          : isCurrent
          ? "text-[#2C2C2C] font-bold"
          : "text-[#5A5A5A]/60";

        return (
          <li key={step.key} className="flex-1 flex items-center gap-2 sm:gap-4 min-w-0">
            <div className="flex flex-col items-center gap-1 min-w-0">
              <div
                className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 text-sm font-bold transition-colors ${circleClass}`}
                aria-current={isCurrent ? "step" : undefined}
              >
                {isComplete ? <CheckIcon /> : i + 1}
              </div>
              <span className={`text-[10px] sm:text-xs uppercase tracking-[0.14em] text-center ${labelClass}`}>
                {step.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                aria-hidden="true"
                className={`flex-1 h-[2px] rounded-full mb-5 transition-colors ${
                  isUpcoming ? "bg-[#F0D4DB]" : "bg-[#B86A7E]"
                }`}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}
