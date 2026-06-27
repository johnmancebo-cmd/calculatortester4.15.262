/**
 * Award taxonomy.
 * The "Insurance Executive Diversity Trailblazer" award (presented 2025) is CONFIRMED.
 * The fuller category set is [SAMPLE — confirm] — an editable draft taxonomy.
 * Do NOT present sample categories to the public as official until confirmed.
 */
export interface AwardCategory {
  name: string;
  description: string;
  confirmed: boolean;
  sample: boolean;
}

export const awardCategories: AwardCategory[] = [
  {
    name: "Insurance Executive Diversity Trailblazer",
    description:
      "Recognizes an insurance executive whose leadership has measurably advanced diversity and inclusion across the industry. Presented in 2025.",
    confirmed: true,
    sample: false,
  },
  {
    name: "Rising Star",
    description:
      "[SAMPLE — confirm] Honors an early-career professional showing exceptional promise and commitment to inclusion in insurance.",
    confirmed: false,
    sample: true,
  },
  {
    name: "Corporate Trailblazer",
    description:
      "[SAMPLE — confirm] Recognizes an organization that has institutionalized diversity and inclusion across its insurance operations.",
    confirmed: false,
    sample: true,
  },
  {
    name: "Mentorship Award",
    description:
      "[SAMPLE — confirm] Celebrates a leader who has meaningfully invested in mentoring the next generation of diverse insurance talent.",
    confirmed: false,
    sample: true,
  },
  {
    name: "Entrepreneur Award",
    description:
      "[SAMPLE — confirm] Honors a founder or business owner advancing diverse representation in the insurance ecosystem.",
    confirmed: false,
    sample: true,
  },
];
