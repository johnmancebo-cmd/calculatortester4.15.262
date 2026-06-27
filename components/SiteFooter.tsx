import Link from "next/link";
import { Mail, MapPin, Linkedin } from "lucide-react";
import { nav, site } from "@/data/site";
import { Wordmark } from "./Wordmark";

export function SiteFooter() {
  const year = 2026; // static build; update annually or wire to build-time date
  return (
    <footer className="bg-navy text-offWhite">
      <div className="container-content grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Wordmark variant="light" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-offWhite/70">
            A {site.status} advancing diversity and inclusion in the insurance
            industry through leadership, networking, mentorship, and our
            signature annual awards dinner.
          </p>
          <p className="mt-4 text-xs leading-relaxed text-offWhite/55">
            {site.name} is a {site.status} and files {site.irsForm}. Donations
            are tax-deductible to the extent allowed by law.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-softGold">
            Explore
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-offWhite/75 transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-softGold">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
              <a
                href={`mailto:${site.email}`}
                className="text-offWhite/75 transition-colors hover:text-gold"
              >
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              <span className="text-offWhite/75">{site.city}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Linkedin size={16} className="mt-0.5 shrink-0 text-gold" />
              <span className="text-offWhite/55">{site.linkedin}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-content flex flex-col items-center justify-between gap-3 py-5 text-xs text-offWhite/55 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>{site.city}</p>
        </div>
      </div>
    </footer>
  );
}
