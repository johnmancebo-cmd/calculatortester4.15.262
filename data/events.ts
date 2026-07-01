/**
 * Events seed data.
 * Event TITLES and YEARS are CONFIRMED.
 * Every exact DATE and (where noted) venue pairing is [SAMPLE — confirm];
 * see CONTENT-TODO.md for the full verification list.
 * `dateConfirmed: false` flags any record whose date must be verified.
 */
export type EventCategory =
  | "Awards Dinner"
  | "Networking"
  | "Career Development"
  | "Panel"
  | "Young Professionals"
  | "Sponsor"
  | "Community";

export interface WSCEvent {
  title: string;
  date: string; // ISO-ish display date — [SAMPLE] unless dateConfirmed
  time?: string;
  location: string;
  category: EventCategory;
  description: string;
  image: string;
  slug: string;
  dateConfirmed: boolean;
  upcoming: boolean;
}

/* ---------------- UPCOMING (all details [SAMPLE — confirm]) ---------------- */
export const upcomingEvents: WSCEvent[] = [
  {
    title: "Annual Insurance Industry Awards Dinner",
    date: "[SAMPLE — confirm] Fall 2026",
    time: "[SAMPLE] 6:00 PM – 9:30 PM",
    location: "The View at Battery Park, 1 Battery Place, New York, NY 10004",
    category: "Awards Dinner",
    description:
      "The Club's flagship evening celebrating diversity, inclusion, and leadership across the insurance industry. Date and program to be confirmed.",
    image: "",
    slug: "annual-awards-dinner-2026",
    dateConfirmed: false,
    upcoming: true,
  },
  {
    title: "John Street Club & Water Street Club Summer Soirée",
    date: "[SAMPLE — confirm] Summer 2026",
    time: "[SAMPLE] 5:30 PM – 8:00 PM",
    location: "[PLACEHOLDER: venue], New York, NY",
    category: "Networking",
    description:
      "Our recurring summer mixer co-hosted with the John Street Club, connecting diverse insurance professionals across the Financial District.",
    image: "",
    slug: "summer-soiree-2026",
    dateConfirmed: false,
    upcoming: true,
  },
  {
    title: "Career Pathways Panel: Breaking Into Insurance",
    date: "[SAMPLE — confirm] Spring 2026",
    time: "[SAMPLE] 12:00 PM – 1:30 PM",
    location: "[PLACEHOLDER: venue] / Virtual",
    category: "Career Development",
    description:
      "Industry leaders share how they built their careers and offer guidance for early-career and aspiring insurance professionals.",
    image: "",
    slug: "career-pathways-panel-2026",
    dateConfirmed: false,
    upcoming: true,
  },
];

/* ---------------- PAST (titles/years CONFIRMED; dates [SAMPLE]) ---------------- */
export const pastEvents: WSCEvent[] = [
  {
    // Date CONFIRMED via Eventbrite (Nov 6, 2025); venue [SAMPLE — confirm]
    title: "2025 Insurance Industry Awards Dinner",
    date: "November 6, 2025",
    location: "[SAMPLE — confirm] New York, NY",
    category: "Awards Dinner",
    description:
      "The 2025 edition of the Club's signature awards dinner, where the Insurance Executive Diversity Trailblazer award was presented.",
    image: "",
    slug: "awards-dinner-2025",
    dateConfirmed: true,
    upcoming: false,
  },
  {
    // Date + venue CONFIRMED via Eventbrite (Thu Nov 7, 2024, The View at Battery Park)
    title: "2024 Insurance Industry Awards Dinner",
    date: "November 7, 2024",
    location: "The View at Battery Park, 1 Battery Place, New York, NY 10004",
    category: "Awards Dinner",
    description:
      "The 2024 edition of the Club's signature awards dinner honoring leaders advancing diversity and inclusion in insurance.",
    image: "",
    slug: "awards-dinner-2024",
    dateConfirmed: true,
    upcoming: false,
  },
  {
    title: "2023 Insurance Industry Awards Dinner",
    date: "[SAMPLE — confirm] 2023",
    location: "The View at Battery Park, 1 Battery Place, New York, NY 10004",
    category: "Awards Dinner",
    description:
      "The 2023 edition of the Club's signature awards dinner at The View at Battery Park.",
    image: "",
    slug: "awards-dinner-2023",
    dateConfirmed: false,
    upcoming: false,
  },
  {
    title: "2022 Insurance Industry Awards Dinner",
    date: "[SAMPLE — confirm] 2022",
    location: "The View at Battery Park, 1 Battery Place, New York, NY 10004",
    category: "Awards Dinner",
    description:
      "The 2022 edition of the Club's signature awards dinner at The View at Battery Park.",
    image: "",
    slug: "awards-dinner-2022",
    dateConfirmed: false,
    upcoming: false,
  },
  {
    title: "2019 Insurance Industry Awards Dinner",
    date: "[SAMPLE — confirm] 2019",
    location: "[PLACEHOLDER: venue], New York, NY",
    category: "Awards Dinner",
    description: "The 2019 edition of the Club's signature awards dinner.",
    image: "",
    slug: "awards-dinner-2019",
    dateConfirmed: false,
    upcoming: false,
  },
  {
    title: "2018 Insurance Industry Awards Dinner",
    date: "[SAMPLE — confirm] 2018",
    location: "[PLACEHOLDER: venue], New York, NY",
    category: "Awards Dinner",
    description: "The 2018 edition of the Club's signature awards dinner.",
    image: "",
    slug: "awards-dinner-2018",
    dateConfirmed: false,
    upcoming: false,
  },
  {
    title: "John Street Club & The Water Street Club Summer Soirée",
    date: "[SAMPLE — confirm] 2024",
    location: "[PLACEHOLDER: venue], New York, NY",
    category: "Networking",
    description:
      "A summer networking soirée co-hosted with the John Street Club for diverse insurance professionals.",
    image: "",
    slug: "summer-soiree-2024",
    dateConfirmed: false,
    upcoming: false,
  },
  {
    title: "DEI Lunch & Learn with the BHSI Claims Team",
    date: "[SAMPLE — confirm] 2024",
    location: "[PLACEHOLDER: venue], New York, NY",
    category: "Career Development",
    description:
      "A lunch-and-learn session on diversity, equity, and inclusion in claims, in partnership with the BHSI claims team.",
    image: "",
    slug: "dei-lunch-learn-bhsi-2024",
    dateConfirmed: false,
    upcoming: false,
  },
  {
    title: "Current Trends in Cyber: A Conversation from the Frontlines",
    date: "[SAMPLE — confirm] 2023",
    location: "[PLACEHOLDER: venue], New York, NY",
    category: "Panel",
    description:
      "A frontline conversation on emerging cyber risk and its implications for the insurance industry.",
    image: "",
    slug: "cyber-trends-frontlines-2023",
    dateConfirmed: false,
    upcoming: false,
  },
  {
    title: "First Annual Juneteenth Celebration",
    date: "[SAMPLE — confirm]",
    location: "6 Platt Street, New York, NY 10038",
    category: "Community",
    description:
      "The Club's first annual Juneteenth celebration bringing the community together.",
    image: "",
    slug: "juneteenth-celebration",
    dateConfirmed: false,
    upcoming: false,
  },
  {
    title: "The Water Street Club Employment Law Panel",
    date: "[SAMPLE — confirm]",
    location: "Virtual",
    category: "Panel",
    description:
      "A virtual panel on employment law topics relevant to insurance professionals.",
    image: "",
    slug: "employment-law-panel",
    dateConfirmed: false,
    upcoming: false,
  },
  {
    title: "Insurance Industry Trivia Night",
    date: "[SAMPLE — confirm]",
    location: "Virtual",
    category: "Young Professionals",
    description:
      "A virtual trivia night bringing insurance professionals together for friendly competition.",
    image: "",
    slug: "trivia-night",
    dateConfirmed: false,
    upcoming: false,
  },
  {
    title: "InsurTech and the Future of Insurance",
    date: "[SAMPLE — confirm]",
    location: "Battery Gardens, 1 Battery Place, New York, NY",
    category: "Panel",
    description:
      "A discussion on how technology is reshaping the future of the insurance industry.",
    image: "",
    slug: "insurtech-future-of-insurance",
    dateConfirmed: false,
    upcoming: false,
  },
  {
    title: "Emerging Trends Collide: The EPL Paradox",
    date: "[SAMPLE — confirm]",
    location: "[PLACEHOLDER: venue], New York, NY",
    category: "Panel",
    description:
      "A panel exploring emerging employment practices liability (EPL) trends and their intersections.",
    image: "",
    slug: "epl-paradox",
    dateConfirmed: false,
    upcoming: false,
  },
  {
    title: "End of Summer Insurance Industry Cruise",
    date: "[SAMPLE — confirm]",
    location: "[PLACEHOLDER: venue], New York Harbor",
    category: "Networking",
    description:
      "An end-of-summer networking cruise around New York Harbor for insurance professionals.",
    image: "",
    slug: "end-of-summer-cruise",
    dateConfirmed: false,
    upcoming: false,
  },
  {
    title: "The Water Street Club & John Street Club Insurance Industry Mixer",
    date: "[SAMPLE — confirm]",
    location: "[PLACEHOLDER: venue], New York, NY",
    category: "Networking",
    description:
      "An industry mixer co-hosted with the John Street Club for diverse professionals across insurance.",
    image: "",
    slug: "industry-mixer-john-street",
    dateConfirmed: false,
    upcoming: false,
  },
];

export const eventCategories: EventCategory[] = [
  "Awards Dinner",
  "Networking",
  "Career Development",
  "Panel",
  "Young Professionals",
  "Sponsor",
  "Community",
];

export const allEvents = [...upcomingEvents, ...pastEvents];
