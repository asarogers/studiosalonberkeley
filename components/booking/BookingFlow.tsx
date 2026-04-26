"use client";

import { useReducer, useState } from "react";
import { useRouter } from "next/navigation";
import type {
  BookingState,
  BookingStep,
  CardDetails,
  ContactInfo,
  PaymentMethod,
} from "@/lib/booking/types";
import type { MenuItem } from "@/lib/services-menu";
import { submitBooking } from "@/lib/booking/submit";
import { saveLastBooking } from "@/lib/booking/storage";
import BookingShell from "./BookingShell";
import DateTimeStep from "./steps/DateTimeStep";
import YourInfoStep from "./steps/YourInfoStep";
import ReviewStep from "./steps/ReviewStep";

interface Props {
  service: MenuItem;
}

type Action =
  | { type: "set-date"; date: string }
  | { type: "set-time"; time: string }
  | { type: "set-contact"; contact: ContactInfo }
  | { type: "set-payment"; method: PaymentMethod }
  | { type: "set-card"; card: CardDetails };

function initialState(service: MenuItem): BookingState {
  return {
    service,
    date: null,
    time: null,
    contact: {
      fullName: "",
      email: "",
      phone: "",
      notes: "",
      clientType: "new",
    },
    paymentMethod: "card",
    card: { cardNumber: "", expiry: "", cvc: "" },
  };
}

function reducer(state: BookingState, action: Action): BookingState {
  switch (action.type) {
    case "set-date":
      return { ...state, date: action.date };
    case "set-time":
      return { ...state, time: action.time };
    case "set-contact":
      return { ...state, contact: action.contact };
    case "set-payment":
      return { ...state, paymentMethod: action.method };
    case "set-card":
      return { ...state, card: action.card };
  }
}

export default function BookingFlow({ service }: Props) {
  const router = useRouter();
  const [step, setStep] = useState<BookingStep>("datetime");
  const [pending, setPending] = useState(false);
  const [state, dispatch] = useReducer(reducer, service, initialState);

  async function handleConfirm() {
    setPending(true);
    try {
      const confirmed = await submitBooking(state);
      saveLastBooking(confirmed);
      router.push("/?booking=confirmed");
    } catch (err) {
      // Stub: real impl would surface toast / inline error.
      console.error("Booking submission failed", err);
      setPending(false);
    }
  }

  return (
    <BookingShell service={service} step={step} date={state.date} time={state.time}>
      {step === "datetime" && (
        <DateTimeStep
          selectedDate={state.date}
          selectedTime={state.time}
          onSelectDate={(date) => dispatch({ type: "set-date", date })}
          onSelectTime={(time) => dispatch({ type: "set-time", time })}
          onContinue={() => setStep("info")}
        />
      )}
      {step === "info" && (
        <YourInfoStep
          contact={state.contact}
          onChange={(contact) => dispatch({ type: "set-contact", contact })}
          onBack={() => setStep("datetime")}
          onContinue={() => setStep("review")}
        />
      )}
      {step === "review" && (
        <ReviewStep
          state={state}
          pending={pending}
          onChangePayment={(method) => dispatch({ type: "set-payment", method })}
          onChangeCard={(card) => dispatch({ type: "set-card", card })}
          onEditDateTime={() => setStep("datetime")}
          onEditInfo={() => setStep("info")}
          onBack={() => setStep("info")}
          onConfirm={handleConfirm}
        />
      )}
    </BookingShell>
  );
}
