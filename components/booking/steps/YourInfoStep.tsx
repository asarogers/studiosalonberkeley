"use client";

import type { ContactInfo, ClientType } from "@/lib/booking/types";

interface Props {
  contact: ContactInfo;
  onChange: (next: ContactInfo) => void;
  onBack: () => void;
  onContinue: () => void;
}

function isFormValid(c: ContactInfo): boolean {
  return c.fullName.trim().length > 1
    && /.+@.+\..+/.test(c.email.trim())
    && c.phone.trim().length >= 7;
}

export default function YourInfoStep({ contact, onChange, onBack, onContinue }: Props) {
  const update = <K extends keyof ContactInfo>(key: K, value: ContactInfo[K]) => {
    onChange({ ...contact, [key]: value });
  };
  const setType = (clientType: ClientType) => update("clientType", clientType);
  const valid = isFormValid(contact);

  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1 text-sm text-[#B86A7E] hover:text-[#9E4F63] font-semibold mb-4"
      >
        <span aria-hidden="true">‹</span>
        Back to Date &amp; Time
      </button>

      <h1 className="font-[family-name:var(--font-serif)] text-[clamp(1.75rem,2.5vw+1rem,2.5rem)] font-bold text-[#2C2C2C] mb-2 leading-tight">
        Your Information
      </h1>
      <p className="text-[#5A5A5A] mb-8">Enter your contact details to complete your booking.</p>

      <div role="radiogroup" aria-label="Client type" className="bg-[#FCE8EC]/60 border border-[#F0D4DB] rounded-2xl p-2 flex gap-2 mb-6 max-w-md">
        {(
          [
            { key: "new",       label: "New Client" },
            { key: "returning", label: "Returning Client" },
          ] as const
        ).map((opt) => {
          const active = contact.clientType === opt.key;
          return (
            <button
              key={opt.key}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setType(opt.key)}
              className={`flex-1 inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-sm font-semibold transition-colors ${
                active
                  ? "bg-white text-[#2C2C2C] shadow-sm border border-[#F0D4DB]"
                  : "text-[#9E4F63] hover:bg-white/70"
              }`}
            >
              <span
                aria-hidden="true"
                className={`w-3 h-3 rounded-full ${active ? "bg-[#B86A7E]" : "border-2 border-[#B86A7E]"}`}
              />
              {opt.label}
            </button>
          );
        })}
      </div>

      {contact.clientType === "returning" && (
        <div className="bg-white border border-[#F0D4DB] rounded-2xl p-5 mb-6">
          <h3 className="font-[family-name:var(--font-serif)] font-bold text-[#2C2C2C] mb-1">
            Welcome back!
          </h3>
          <p className="text-sm text-[#5A5A5A] mb-3">
            Sign in to auto-fill your information and view your appointment history.
          </p>
          <button
            type="button"
            className="text-sm font-bold text-[#B86A7E] hover:text-[#9E4F63] underline underline-offset-2"
          >
            Sign In
          </button>
        </div>
      )}

      <div className="space-y-5">
        <Field label="Full Name" required htmlFor="full-name">
          <input
            id="full-name"
            type="text"
            autoComplete="name"
            value={contact.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            placeholder="Britnee Lott"
            className="w-full rounded-xl border border-[#F0D4DB] bg-white px-4 py-3 text-[#2C2C2C] placeholder:text-[#5A5A5A]/50 focus:outline-none focus:border-[#B86A7E] focus:ring-2 focus:ring-[#FCE8EC] transition-colors"
          />
        </Field>

        <Field label="Email Address" required helper="We'll send your confirmation here." htmlFor="email">
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={contact.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-xl border border-[#F0D4DB] bg-white px-4 py-3 text-[#2C2C2C] placeholder:text-[#5A5A5A]/50 focus:outline-none focus:border-[#B86A7E] focus:ring-2 focus:ring-[#FCE8EC] transition-colors"
          />
        </Field>

        <Field label="Phone Number" required helper="For appointment reminders and updates." htmlFor="phone">
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={contact.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="(510) 555-0123"
            className="w-full rounded-xl border border-[#F0D4DB] bg-white px-4 py-3 text-[#2C2C2C] placeholder:text-[#5A5A5A]/50 focus:outline-none focus:border-[#B86A7E] focus:ring-2 focus:ring-[#FCE8EC] transition-colors"
          />
        </Field>

        <Field label="Special Requests or Notes" htmlFor="notes" optional>
          <textarea
            id="notes"
            value={contact.notes}
            onChange={(e) => update("notes", e.target.value)}
            placeholder="Any specific preferences or requirements…"
            rows={4}
            className="w-full rounded-xl border border-[#F0D4DB] bg-white px-4 py-3 text-[#2C2C2C] placeholder:text-[#5A5A5A]/50 focus:outline-none focus:border-[#B86A7E] focus:ring-2 focus:ring-[#FCE8EC] transition-colors resize-y"
          />
        </Field>
      </div>

      <div className="mt-10 pt-6 border-t border-[#F0D4DB]">
        <button
          type="button"
          onClick={onContinue}
          disabled={!valid}
          className="btn-primary w-full justify-center"
        >
          Continue to Review
        </button>
      </div>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  required,
  optional,
  helper,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  optional?: boolean;
  helper?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-bold text-[#2C2C2C] mb-2">
        {label}
        {required && <span className="text-[#B86A7E] ml-1">*</span>}
        {optional && <span className="text-[#5A5A5A]/70 font-normal ml-2">(Optional)</span>}
      </label>
      {children}
      {helper && <p className="text-xs text-[#5A5A5A] mt-1.5">{helper}</p>}
    </div>
  );
}
