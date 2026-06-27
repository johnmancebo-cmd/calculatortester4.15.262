"use client";

import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

export function NewsletterSignup({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: integrate newsletter service (e.g. Mailchimp / Constant Contact)
    // No real network request is made in this prototype.
    setSubmitted(true);
  }

  const light = tone === "light";

  if (submitted) {
    return (
      <div
        className={`flex items-center gap-3 rounded-lg p-4 ${
          light ? "bg-white/10 text-offWhite" : "bg-emerald-50 text-emerald-900"
        }`}
        role="status"
      >
        <CheckCircle2 className={light ? "text-softGold" : "text-emerald-600"} />
        <p className="text-sm">
          Thanks — you&apos;re on the list. (Demo only; no email was stored.)
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <div className="relative flex-1">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <Mail
          size={18}
          className={`pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 ${
            light ? "text-offWhite/50" : "text-charcoal/40"
          }`}
        />
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className={`w-full rounded-md border px-10 py-3 text-sm outline-none ${
            light
              ? "border-white/20 bg-white/10 text-offWhite placeholder:text-offWhite/40"
              : "border-navy/15 bg-white text-charcoal placeholder:text-charcoal/40"
          }`}
        />
      </div>
      <button
        type="submit"
        className="rounded-md bg-gold px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-softGold"
      >
        Join our network
      </button>
    </form>
  );
}
