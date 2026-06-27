/**
 * News / updates seed data — all [SAMPLE] placeholder posts.
 * Replace with real announcements; none of the content below is factual.
 */
export interface NewsPost {
  title: string; // [SAMPLE]
  date: string; // [SAMPLE]
  excerpt: string; // [SAMPLE]
  category: string;
  slug: string;
  sample: boolean;
}

export const news: NewsPost[] = [
  {
    title: "[SAMPLE] Save the Date: 2026 Insurance Industry Awards Dinner",
    date: "[SAMPLE — confirm]",
    excerpt:
      "[SAMPLE COPY — client to revise] Planning is underway for the next edition of the Club's flagship awards dinner. Details and nominations to be announced.",
    category: "Awards Dinner",
    slug: "save-the-date-2026",
    sample: true,
  },
  {
    title: "[SAMPLE] Reflecting on a Year of Connection",
    date: "[SAMPLE — confirm]",
    excerpt:
      "[SAMPLE COPY — client to revise] A look back at the soirées, panels, and mentorship moments that brought our community together this year.",
    category: "Community",
    slug: "year-in-review",
    sample: true,
  },
  {
    title: "[SAMPLE] Mentorship Spotlight",
    date: "[SAMPLE — confirm]",
    excerpt:
      "[SAMPLE COPY — client to revise] Highlighting the mentors and mentees building the next generation of diverse insurance talent.",
    category: "Mentorship",
    slug: "mentorship-spotlight",
    sample: true,
  },
];

export interface PressMention {
  outlet: string; // [PLACEHOLDER]
  title: string; // [PLACEHOLDER]
  date: string; // [PLACEHOLDER]
}

export const pressMentions: PressMention[] = [
  { outlet: "[PLACEHOLDER: outlet]", title: "[PLACEHOLDER: headline]", date: "[PLACEHOLDER]" },
  { outlet: "[PLACEHOLDER: outlet]", title: "[PLACEHOLDER: headline]", date: "[PLACEHOLDER]" },
  { outlet: "[PLACEHOLDER: outlet]", title: "[PLACEHOLDER: headline]", date: "[PLACEHOLDER]" },
];
