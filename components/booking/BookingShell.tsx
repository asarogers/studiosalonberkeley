"use client";

import type { ReactNode } from "react";
import StepHeader from "./StepHeader";
import OrderSummary from "./OrderSummary";
import type { BookingStep } from "@/lib/booking/types";
import type { MenuItem } from "@/lib/services-menu";

interface Props {
  service: MenuItem;
  step: BookingStep;
  date: string | null;
  time: string | null;
  children: ReactNode;
}

export default function BookingShell({ service, step, date, time, children }: Props) {
  return (
    <section className="bg-[#FFF9F9] section-pad min-h-[calc(100vh-5rem)]">
      <div className="container-xl">
        <div className="mb-10">
          <StepHeader current={step} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_22rem] gap-8 lg:gap-12 items-start">
          <div className="min-w-0">{children}</div>
          <OrderSummary service={service} date={date} time={time} />
        </div>
      </div>
    </section>
  );
}
