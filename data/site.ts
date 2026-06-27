/**
 * Central site config: CONFIRMED organization facts, navigation, mission pillars.
 * Only CONFIRMED facts live as plain strings here. Placeholders are labeled.
 */
export const site = {
  name: "The Water Street Club",
  shortName: "WSC",
  // CONFIRMED facts
  email: "thewaterstreetclub@gmail.com",
  city: "New York, NY",
  reachPerYear: 400,
  status: "501(c)(3) nonprofit",
  irsForm: "IRS Form 990-EZ",
  // Placeholders
  linkedin: "[PLACEHOLDER: LinkedIn URL]",
  mailingAddress: "[PLACEHOLDER: mailing address], New York, NY",
  // SEO
  url: "https://www.thewaterstreetclub.org", // [PLACEHOLDER: production domain]
  description:
    "The Water Street Club is a 501(c)(3) nonprofit advancing diversity and inclusion in the insurance industry through leadership, networking, mentorship, and its signature annual awards dinner.",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Awards Dinner", href: "/awards-dinner" },
  { label: "Awards & Honorees", href: "/honorees" },
  { label: "Events", href: "/events" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Career & Mentorship", href: "/mentorship" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

/** Four CONFIRMED mission pillars — rewritten into original copy (not copied verbatim). */
export const missionPillars = [
  {
    title: "Amplify D&I Initiatives",
    body: "We partner with diversity and inclusion programs across carriers, brokerages, and agencies — amplifying the work already underway throughout the insurance industry.",
  },
  {
    title: "Collaborate on Programming",
    body: "We join forces with outside organizations to design events and programming aligned to shared diversity and inclusion goals.",
  },
  {
    title: "Empower Professionals",
    body: "We connect insurance professionals to mentorship from industry leaders, client-development opportunities, and a supportive professional network.",
  },
  {
    title: "Build a Lasting Platform",
    body: "We are building a sustainable platform that serves as an ongoing resource for future generations of diverse talent in insurance.",
  },
] as const;
