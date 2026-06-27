"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { sponsorshipTiers } from "@/data/sponsors";

const inputClass =
  "w-full rounded-md border border-navy/15 bg-white px-3.5 py-2.5 text-sm text-charcoal outline-none focus:border-gold";
const labelClass = "block text-sm font-medium text-navy";

export function SponsorInquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: integrate sponsorship CRM / email service (e.g. HubSpot / serverless route)
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
          <p className="font-semibold">Thank you for your interest in sponsoring.</p>
          <p className="mt-1 text-sm text-emerald-800">
            A member of our team will follow up with sponsorship details. (Demo
            only — nothing was sent or stored.)
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="s-name" className={labelClass}>
            Name <span className="text-goldText">*</span>
          </label>
          <input id="s-name" name="name" required className={`mt-1.5 ${inputClass}`} />
        </div>
        <div>
          <label htmlFor="s-company" className={labelClass}>
            Company <span className="text-goldText">*</span>
          </label>
          <input id="s-company" name="company" required className={`mt-1.5 ${inputClass}`} />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="s-email" className={labelClass}>
            Email <span className="text-goldText">*</span>
          </label>
          <input
            id="s-email"
            name="email"
            type="email"
            required
            className={`mt-1.5 ${inputClass}`}
          />
        </div>
        <div>
          <label htmlFor="s-interest" className={labelClass}>
            Interest <span className="text-goldText">*</span>
          </label>
          <select
            id="s-interest"
            name="interest"
            required
            defaultValue=""
            className={`mt-1.5 ${inputClass}`}
          >
            <option value="" disabled>
              Select a level…
            </option>
            {sponsorshipTiers.map((t) => (
              <option key={t.name} value={t.name}>
                {t.name}
              </option>
            ))}
            <option value="Undecided">Not sure yet — tell me more</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="s-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="s-message"
          name="message"
          rows={4}
          className={`mt-1.5 ${inputClass}`}
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-softGold"
      >
        Request sponsorship information
      </button>
      <p className="text-xs text-charcoal/70">
        Demo form — submissions are not sent or stored.
      </p>
    </form>
  );
}
