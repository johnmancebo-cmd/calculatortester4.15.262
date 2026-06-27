/**
 * Honorees seed data.
 * All recipient NAMES are [PLACEHOLDER] — the Club must supply real honorees.
 * The 2025 "Insurance Executive Diversity Trailblazer" award itself is CONFIRMED
 * (see data/awards.ts); the recipient name here remains a placeholder until supplied.
 * Archive years 2018, 2019, 2022, 2023, 2024 correspond to CONFIRMED dinner editions.
 */
export interface Honoree {
  name: string; // [PLACEHOLDER]
  title: string; // [PLACEHOLDER]
  company: string; // [PLACEHOLDER]
  award: string;
  year: number;
  bio: string; // [SAMPLE]
  image: string; // placeholder
  confirmed: boolean; // recipient identity confirmed?
  featured: boolean;
}

// Current / featured honorees — names are placeholders for client to confirm.
export const currentHonorees: Honoree[] = [
  {
    name: "[PLACEHOLDER: honoree name]",
    title: "[PLACEHOLDER: title]",
    company: "[PLACEHOLDER: company]",
    award: "Insurance Executive Diversity Trailblazer",
    year: 2025,
    bio: "[SAMPLE COPY — client to revise] Recipient of the Club's confirmed 2025 Insurance Executive Diversity Trailblazer award, recognized for measurable, sustained leadership advancing diversity and inclusion across the insurance industry.",
    image: "",
    confirmed: false,
    featured: true,
  },
  {
    name: "[PLACEHOLDER: honoree name]",
    title: "[PLACEHOLDER: title]",
    company: "[PLACEHOLDER: company]",
    award: "[SAMPLE — confirm] Rising Star",
    year: 2025,
    bio: "[SAMPLE COPY — client to revise] An early-career professional recognized for exceptional promise and a demonstrated commitment to inclusion in insurance.",
    image: "",
    confirmed: false,
    featured: true,
  },
  {
    name: "[PLACEHOLDER: honoree name]",
    title: "[PLACEHOLDER: title]",
    company: "[PLACEHOLDER: company]",
    award: "[SAMPLE — confirm] Mentorship Award",
    year: 2025,
    bio: "[SAMPLE COPY — client to revise] A leader celebrated for meaningfully investing in mentoring the next generation of diverse insurance talent.",
    image: "",
    confirmed: false,
    featured: true,
  },
];

// Prior recipients grouped by CONFIRMED dinner years. Names are placeholders.
export interface HonoreeYearGroup {
  year: number;
  yearConfirmed: boolean; // the dinner edition is confirmed
  recipients: Honoree[];
}

const placeholderRecipient = (year: number, award: string): Honoree => ({
  name: "[PLACEHOLDER: recipient name]",
  title: "[PLACEHOLDER: title]",
  company: "[PLACEHOLDER: company]",
  award,
  year,
  bio: "[SAMPLE COPY — client to revise] Honoree recognized at this edition of the Insurance Industry Awards Dinner.",
  image: "",
  confirmed: false,
  featured: false,
});

export const honoreeArchive: HonoreeYearGroup[] = [2024, 2023, 2022, 2019, 2018].map(
  (year) => ({
    year,
    yearConfirmed: true,
    recipients: [
      placeholderRecipient(year, "[SAMPLE — confirm] Trailblazer"),
      placeholderRecipient(year, "[SAMPLE — confirm] Rising Star"),
      placeholderRecipient(year, "[SAMPLE — confirm] Mentorship Award"),
    ],
  }),
);
