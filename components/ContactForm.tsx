"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const INQUIRY_CATEGORIES = [
  "Events",
  "Sponsorship",
  "Membership",
  "Awards",
  "Mentorship",
  "Media",
] as const;

const inputClass =
  "w-full rounded-md border border-navy/15 bg-white px-3.5 py-2.5 text-sm text-charcoal outline-none focus:border-gold";
const labelClass = "block text-sm font-medium text-navy";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: integrate contact/email service (e.g. Formspree / SendGrid / serverless route)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="flex items-start gap-3 rounded-xl bg-emerald-50 p-6 text-emerald-900"
        role="status"
      >
        <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" />
        <div>
          <p className="font-semibold">Message received — thank you.</p>
          <p className="mt-1 text-sm text-emerald-800">
            This is a front-end demo, so nothing was sent or stored. We&apos;ll
            wire this to a real inbox before launch.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className={labelClass}>
            Name <span className="text-gold">*</span>
          </label>
          <input id="c-name" name="name" required className={`mt-1.5 ${inputClass}`} />
        </div>
        <div>
          <label htmlFor="c-email" className={labelClass}>
            Email <span className="text-gold">*</span>
          </label>
          <input
            id="c-email"
            name="email"
            type="email"
            required
            className={`mt-1.5 ${inputClass}`}
          />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-org" className={labelClass}>
            Organization
          </label>
          <input id="c-org" name="organization" className={`mt-1.5 ${inputClass}`} />
        </div>
        <div>
          <label htmlFor="c-category" className={labelClass}>
            Inquiry type <span className="text-gold">*</span>
          </label>
          <select
            id="c-category"
            name="category"
            required
            defaultValue=""
            className={`mt-1.5 ${inputClass}`}
          >
            <option value="" disabled>
              Select a topic…
            </option>
            {INQUIRY_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="c-message" className={labelClass}>
          Message <span className="text-gold">*</span>
        </label>
        <textarea
          id="c-message"
          name="message"
          required
          rows={5}
          className={`mt-1.5 ${inputClass}`}
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center rounded-md bg-navy px-6 py-3 text-sm font-semibold text-offWhite transition-colors hover:bg-deepBlue"
      >
        Send message
      </button>
      <p className="text-xs text-charcoal/55">
        Demo form — submissions are not sent or stored.
      </p>
    </form>
  );
}
