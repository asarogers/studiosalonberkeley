"use client";

import type { BookingState, CardDetails, PaymentMethod } from "@/lib/booking/types";
import { formatLongDate, formatTimeLabel } from "@/lib/booking/availability";

interface Props {
  state: BookingState;
  pending: boolean;
  onChangePayment: (method: PaymentMethod) => void;
  onChangeCard: (next: CardDetails) => void;
  onEditDateTime: () => void;
  onEditInfo: () => void;
  onBack: () => void;
  onConfirm: () => void;
}

function CardIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l1-5h16l1 5" />
      <path d="M4 9v11h16V9" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  );
}

function isCardValid(c: CardDetails): boolean {
  const digits = c.cardNumber.replace(/\s+/g, "");
  return digits.length >= 12
    && /^\d{2}\/\d{2}$/.test(c.expiry.trim())
    && /^\d{3,4}$/.test(c.cvc.trim());
}

export default function ReviewStep({
  state,
  pending,
  onChangePayment,
  onChangeCard,
  onEditDateTime,
  onEditInfo,
  onBack,
  onConfirm,
}: Props) {
  const { service, date, time, contact, paymentMethod, card } = state;
  const cardOk = paymentMethod === "in-store" || isCardValid(card);

  const updateCard = <K extends keyof CardDetails>(key: K, value: CardDetails[K]) => {
    onChangeCard({ ...card, [key]: value });
  };

  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1 text-sm text-[#B86A7E] hover:text-[#9E4F63] font-semibold mb-4"
      >
        <span aria-hidden="true">‹</span>
        Back to Your Information
      </button>

      <h1 className="font-[family-name:var(--font-serif)] text-[clamp(1.75rem,2.5vw+1rem,2.5rem)] font-bold text-[#2C2C2C] mb-2 leading-tight">
        Review &amp; Checkout
      </h1>
      <p className="text-[#5A5A5A] mb-8">Confirm your details and complete your booking.</p>

      <div className="bg-white border border-[#F0D4DB] rounded-3xl p-6 mb-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-[family-name:var(--font-serif)] text-lg font-bold text-[#2C2C2C]">
            Appointment Details
          </h2>
          <button
            type="button"
            onClick={onEditDateTime}
            className="text-sm font-bold text-[#B86A7E] hover:text-[#9E4F63] underline underline-offset-2"
          >
            Edit
          </button>
        </div>
        <dl className="space-y-3 text-sm">
          <SummaryRow label="Service" value={`${service.name} · ${service.duration}`} />
          {date && <SummaryRow label="Date" value={formatLongDate(date)} />}
          {time && <SummaryRow label="Time" value={formatTimeLabel(time)} />}
        </dl>
      </div>

      <div className="bg-white border border-[#F0D4DB] rounded-3xl p-6 mb-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-[family-name:var(--font-serif)] text-lg font-bold text-[#2C2C2C]">
            Your Information
          </h2>
          <button
            type="button"
            onClick={onEditInfo}
            className="text-sm font-bold text-[#B86A7E] hover:text-[#9E4F63] underline underline-offset-2"
          >
            Edit
          </button>
        </div>
        <dl className="space-y-3 text-sm">
          <SummaryRow label="Name" value={contact.fullName || "—"} />
          <SummaryRow label="Email" value={contact.email || "—"} />
          <SummaryRow label="Phone" value={contact.phone || "—"} />
          {contact.notes && <SummaryRow label="Notes" value={contact.notes} />}
        </dl>
      </div>

      <div className="bg-white border border-[#F0D4DB] rounded-3xl p-6 mb-5 shadow-sm">
        <h2 className="font-[family-name:var(--font-serif)] text-lg font-bold text-[#2C2C2C] mb-4">
          Payment Method
        </h2>
        <div role="radiogroup" aria-label="Payment method" className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <PaymentOption
            active={paymentMethod === "card"}
            onSelect={() => onChangePayment("card")}
            icon={<CardIcon />}
            title="Pay with Card"
            sub="Secure payment. Complete checkout now."
          />
          <PaymentOption
            active={paymentMethod === "in-store"}
            onSelect={() => onChangePayment("in-store")}
            icon={<StoreIcon />}
            title="Pay in Store"
            sub="Pay when you arrive for your appointment."
          />
        </div>
      </div>

      {paymentMethod === "card" && (
        <div className="bg-white border border-[#F0D4DB] rounded-3xl p-6 mb-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-[family-name:var(--font-serif)] text-lg font-bold text-[#2C2C2C]">
              Payment Details
            </h2>
            <span className="text-[#5A5A5A]"><LockIcon /></span>
          </div>

          <Field label="Card Number" htmlFor="card-number">
            <input
              id="card-number"
              type="text"
              inputMode="numeric"
              autoComplete="cc-number"
              value={card.cardNumber}
              onChange={(e) => updateCard("cardNumber", e.target.value)}
              placeholder="1234 5678 9012 3456"
              className="w-full rounded-xl border border-[#F0D4DB] bg-white px-4 py-3 text-[#2C2C2C] placeholder:text-[#5A5A5A]/50 focus:outline-none focus:border-[#B86A7E] focus:ring-2 focus:ring-[#FCE8EC] transition-colors"
            />
          </Field>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <Field label="Expiry" htmlFor="card-expiry">
              <input
                id="card-expiry"
                type="text"
                inputMode="numeric"
                autoComplete="cc-exp"
                value={card.expiry}
                onChange={(e) => updateCard("expiry", e.target.value)}
                placeholder="MM/YY"
                className="w-full rounded-xl border border-[#F0D4DB] bg-white px-4 py-3 text-[#2C2C2C] placeholder:text-[#5A5A5A]/50 focus:outline-none focus:border-[#B86A7E] focus:ring-2 focus:ring-[#FCE8EC] transition-colors"
              />
            </Field>
            <Field label="CVC" htmlFor="card-cvc">
              <input
                id="card-cvc"
                type="text"
                inputMode="numeric"
                autoComplete="cc-csc"
                value={card.cvc}
                onChange={(e) => updateCard("cvc", e.target.value)}
                placeholder="123"
                className="w-full rounded-xl border border-[#F0D4DB] bg-white px-4 py-3 text-[#2C2C2C] placeholder:text-[#5A5A5A]/50 focus:outline-none focus:border-[#B86A7E] focus:ring-2 focus:ring-[#FCE8EC] transition-colors"
              />
            </Field>
          </div>

          <p className="text-xs text-[#5A5A5A] mt-4 inline-flex items-center gap-2">
            <LockIcon /> Your payment information is encrypted. You&rsquo;ll be charged the full amount upon confirmation.
          </p>
        </div>
      )}

      <div className="mt-10 pt-6 border-t border-[#F0D4DB]">
        <button
          type="button"
          onClick={onConfirm}
          disabled={!cardOk || pending}
          className="btn-primary w-full justify-center"
        >
          {pending
            ? "Confirming…"
            : paymentMethod === "card"
            ? `Confirm Booking & Pay ${service.price}`
            : "Confirm Booking"}
        </button>
        <p className="text-center text-xs text-[#5A5A5A] mt-3">
          By confirming, you agree to our terms of service and cancellation policy.
        </p>
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
      <dt className="text-xs uppercase tracking-[0.14em] text-[#5A5A5A]">{label}</dt>
      <dd className="text-[#2C2C2C] font-semibold sm:text-right">{value}</dd>
    </div>
  );
}

function PaymentOption({
  active,
  onSelect,
  icon,
  title,
  sub,
}: {
  active: boolean;
  onSelect: () => void;
  icon: React.ReactNode;
  title: string;
  sub: string;
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={active}
      onClick={onSelect}
      className={`text-left p-4 rounded-2xl border-2 transition-colors ${
        active
          ? "border-[#B86A7E] bg-[#FCE8EC]/40"
          : "border-[#F0D4DB] bg-white hover:border-[#E8A1B3] hover:bg-[#FCE8EC]/20"
      }`}
    >
      <div className="flex items-center gap-3 mb-1">
        <span
          aria-hidden="true"
          className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
            active ? "border-[#B86A7E] bg-[#B86A7E]" : "border-[#B86A7E]"
          }`}
        />
        <span className="text-[#B86A7E]">{icon}</span>
        <span className="font-bold text-[#2C2C2C]">{title}</span>
      </div>
      <p className="text-xs text-[#5A5A5A] pl-7">{sub}</p>
    </button>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-bold text-[#2C2C2C] mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}
