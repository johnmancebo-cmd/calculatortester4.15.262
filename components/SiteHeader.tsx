"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/data/site";
import { Wordmark } from "./Wordmark";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-offWhite/95 backdrop-blur supports-[backdrop-filter]:bg-offWhite/80">
      <div className="container-content flex h-16 items-center justify-between gap-4">
        <Link href="/" className="py-2">
          <Wordmark variant="dark" />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`rounded px-3 py-2 text-sm font-medium transition-colors hover:text-goldText ${
                    isActive(item.href) ? "text-goldText" : "text-charcoal"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/sponsors"
            className="hidden rounded-md bg-navy px-4 py-2.5 text-sm font-semibold text-offWhite shadow-sm transition-colors hover:bg-deepBlue sm:inline-block"
          >
            Become a Sponsor
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy hover:bg-navy/5 lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-navy/10 bg-offWhite lg:hidden"
        >
          <nav aria-label="Mobile" className="container-content py-4">
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`block rounded-md px-3 py-3 text-base font-medium ${
                      isActive(item.href)
                        ? "bg-navy/5 text-goldText"
                        : "text-charcoal hover:bg-navy/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  href="/sponsors"
                  className="block rounded-md bg-navy px-4 py-3 text-center text-base font-semibold text-offWhite"
                >
                  Become a Sponsor
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
