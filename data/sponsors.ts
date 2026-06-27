/**
 * Sponsors + sponsorship-tier seed data.
 * All sponsor NAMES and LOGOS are [PLACEHOLDER].
 * Tier BENEFITS are [SAMPLE — confirm]. No real pricing is shown anywhere.
 */
export type SponsorTier = "Platinum" | "Gold" | "Silver" | "Supporting";

export interface Sponsor {
  name: string; // [PLACEHOLDER]
  tier: SponsorTier;
  logo: string; // placeholder
  website?: string;
}

export const sponsors: Sponsor[] = [
  { name: "[PLACEHOLDER: Sponsor]", tier: "Platinum", logo: "" },
  { name: "[PLACEHOLDER: Sponsor]", tier: "Platinum", logo: "" },
  { name: "[PLACEHOLDER: Sponsor]", tier: "Gold", logo: "" },
  { name: "[PLACEHOLDER: Sponsor]", tier: "Gold", logo: "" },
  { name: "[PLACEHOLDER: Sponsor]", tier: "Gold", logo: "" },
  { name: "[PLACEHOLDER: Sponsor]", tier: "Silver", logo: "" },
  { name: "[PLACEHOLDER: Sponsor]", tier: "Silver", logo: "" },
  { name: "[PLACEHOLDER: Sponsor]", tier: "Silver", logo: "" },
  { name: "[PLACEHOLDER: Sponsor]", tier: "Supporting", logo: "" },
  { name: "[PLACEHOLDER: Sponsor]", tier: "Supporting", logo: "" },
  { name: "[PLACEHOLDER: Sponsor]", tier: "Supporting", logo: "" },
  { name: "[PLACEHOLDER: Sponsor]", tier: "Supporting", logo: "" },
];

export interface SponsorshipTier {
  name: string;
  // Tagline + benefits are [SAMPLE — confirm]. Pricing intentionally omitted.
  tagline: string;
  benefits: string[];
  featured: boolean;
  eventOnly?: boolean;
}

export const sponsorshipTiers: SponsorshipTier[] = [
  {
    name: "Platinum",
    tagline: "[SAMPLE — confirm] Premier, top-of-program partnership",
    benefits: [
      "[SAMPLE] Headline logo placement across event and website",
      "[SAMPLE] Premium reserved seating at the Awards Dinner",
      "[SAMPLE] Speaking or stage-recognition opportunity",
      "[SAMPLE] Full-page recognition in the event program",
      "[SAMPLE] Year-round acknowledgment as a leading partner",
    ],
    featured: true,
  },
  {
    name: "Gold",
    tagline: "[SAMPLE — confirm] Major event partnership",
    benefits: [
      "[SAMPLE] Prominent logo placement on event materials",
      "[SAMPLE] Reserved seating at the Awards Dinner",
      "[SAMPLE] Recognition in the event program",
      "[SAMPLE] Website acknowledgment as a Gold partner",
    ],
    featured: false,
  },
  {
    name: "Silver",
    tagline: "[SAMPLE — confirm] Supporting event partnership",
    benefits: [
      "[SAMPLE] Logo placement on select event materials",
      "[SAMPLE] Seating at the Awards Dinner",
      "[SAMPLE] Program and website acknowledgment",
    ],
    featured: false,
  },
  {
    name: "Supporting",
    tagline: "[SAMPLE — confirm] Community-level partnership",
    benefits: [
      "[SAMPLE] Name listing in the event program",
      "[SAMPLE] Website acknowledgment as a Supporting partner",
    ],
    featured: false,
  },
  {
    name: "Event Sponsor",
    tagline: "[SAMPLE — confirm] Sponsor a specific event or program",
    benefits: [
      "[SAMPLE] Custom recognition tied to a single event",
      "[SAMPLE] Logo and acknowledgment at the sponsored event",
      "[SAMPLE] Flexible scope for mixers, panels, and soirées",
    ],
    featured: false,
    eventOnly: true,
  },
];

export const whySponsor: { title: string; body: string }[] = [
  {
    title: "Reach diverse industry leaders",
    body: "[SAMPLE COPY — client to revise] Connect your brand with a community of roughly 400 diverse insurance professionals each year, from emerging talent to senior executives.",
  },
  {
    title: "Demonstrate D&I commitment",
    body: "[SAMPLE COPY — client to revise] Show employees, clients, and recruits that your organization invests in diversity and inclusion across the insurance industry.",
  },
  {
    title: "Build meaningful relationships",
    body: "[SAMPLE COPY — client to revise] Engage decision-makers across carriers, brokerages, and agencies in a setting built for authentic connection.",
  },
  {
    title: "Support a lasting platform",
    body: "[SAMPLE COPY — client to revise] Help sustain a 501(c)(3) platform that serves as an ongoing resource for future generations of diverse talent.",
  },
];
