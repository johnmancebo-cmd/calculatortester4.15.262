import type { Metadata } from "next";
import { Mail, MapPin, Linkedin } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { Badge } from "@/components/Badge";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with The Water Street Club about events, sponsorship, membership, awards, mentorship, or media. Based in New York, NY.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Get In Touch"
        title="Contact us"
        subtitle="Questions about events, sponsorship, membership, awards, mentorship, or media? We'd love to hear from you."
      />

      <section className="bg-offWhite py-20">
        <div className="container-content grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact info */}
          <div>
            <SectionHeading eyebrow="Reach Us" title="Contact details" />
            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy text-gold">
                  <Mail size={20} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-charcoal/75 underline underline-offset-2 hover:text-gold"
                  >
                    {site.email}
                  </a>
                  <div className="mt-1">
                    <Badge tone="confirmed" />
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy text-gold">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">Location</p>
                  <p className="text-charcoal/75">{site.city}</p>
                  <p className="mt-1 text-sm text-charcoal/55">
                    {site.mailingAddress}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy text-gold">
                  <Linkedin size={20} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">LinkedIn</p>
                  <p className="text-charcoal/55">{site.linkedin}</p>
                </div>
              </li>
            </ul>
            <p className="mt-8 text-xs leading-relaxed text-charcoal/55">
              {site.name} is a {site.status} based in {site.city} and files{" "}
              {site.irsForm}. Donations are tax-deductible to the extent allowed
              by law.
            </p>
          </div>

          {/* Form */}
          <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-navy/5 sm:p-8">
            <h2 className="text-lg font-semibold text-navy">Send us a message</h2>
            <p className="mt-1 text-sm text-charcoal/60">
              Choose a topic and we&apos;ll route your message to the right team.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
